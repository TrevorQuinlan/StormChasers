#!/usr/bin/env python3
"""Storm Chase MP — rooms, public Find Lobby, chaser/tornado roles."""

from __future__ import annotations

import asyncio
import json
import logging
import random
import string
from dataclasses import dataclass, field
from typing import Any

import websockets
from websockets.server import WebSocketServerProtocol

HOST = "127.0.0.1"
PORT = 5002
CODE_LEN = 4
MAX_PER_ROOM = 8

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(message)s")
log = logging.getLogger("storm-mp")


def gen_code(existing: set[str]) -> str:
    alphabet = string.ascii_uppercase + string.digits
    for ch in "O0I1":
        alphabet = alphabet.replace(ch, "")
    for _ in range(40):
        code = "".join(random.choice(alphabet) for _ in range(CODE_LEN))
        if code not in existing:
            return code
    return "".join(random.choice(alphabet) for _ in range(CODE_LEN + 1))


def gen_id() -> str:
    return "".join(random.choice(string.ascii_lowercase + string.digits) for _ in range(8))


@dataclass
class Client:
    ws: WebSocketServerProtocol
    id: str
    name: str = "Chaser"
    room: str | None = None
    role: str = "chaser"
    pose: dict[str, Any] = field(default_factory=dict)


@dataclass
class Room:
    code: str
    host_id: str
    clients: dict[str, Client] = field(default_factory=dict)
    last_storm: dict[str, Any] | None = None
    started: bool = False
    start_config: dict[str, Any] | None = None
    public: bool = False


rooms: dict[str, Room] = {}
clients: dict[WebSocketServerProtocol, Client] = {}


async def send(ws: WebSocketServerProtocol, obj: dict[str, Any]) -> None:
    try:
        await ws.send(json.dumps(obj))
    except Exception:
        pass


async def broadcast(room: Room, obj: dict[str, Any], skip: str | None = None) -> None:
    for cid, c in list(room.clients.items()):
        if skip and cid == skip:
            continue
        await send(c.ws, obj)


def roster_payload(room: Room) -> dict[str, Any]:
    return {
        "type": "roster",
        "code": room.code,
        "hostId": room.host_id,
        "count": len(room.clients),
        "players": [
            {
                "id": c.id,
                "name": c.name,
                "role": c.role,
                "ready": True,
                "host": c.id == room.host_id,
            }
            for c in room.clients.values()
        ],
    }


async def leave_room(client: Client) -> None:
    if not client.room:
        return
    code = client.room
    room = rooms.get(code)
    client.room = None
    if not room:
        return
    room.clients.pop(client.id, None)
    if not room.clients:
        rooms.pop(code, None)
        log.info("room %s closed", code)
        return
    if client.id == room.host_id:
        room.host_id = next(iter(room.clients))
    await broadcast(room, {"type": "peer_left", "id": client.id})
    await broadcast(room, roster_payload(room))


async def handle(ws: WebSocketServerProtocol) -> None:
    client = Client(ws=ws, id=gen_id())
    clients[ws] = client
    log.info("connect %s", client.id)
    try:
        async for raw in ws:
            try:
                msg = json.loads(raw)
            except json.JSONDecodeError:
                continue
            mtype = msg.get("type")

            if mtype == "create":
                await leave_room(client)
                code = gen_code(set(rooms))
                client.name = str(msg.get("name") or "Chaser")[:16]
                client.role = "chaser"
                room = Room(code=code, host_id=client.id, public=bool(msg.get("public")))
                room.clients[client.id] = client
                client.room = code
                rooms[code] = room
                await send(ws, {"type": "created", "code": code, "id": client.id, "host": True, **roster_payload(room)})
                log.info("room %s created public=%s", code, room.public)

            elif mtype == "find":
                await leave_room(client)
                client.name = str(msg.get("name") or "Chaser")[:16]
                client.role = "chaser"
                target = None
                for r in rooms.values():
                    if r.public and not r.started and len(r.clients) < MAX_PER_ROOM:
                        target = r
                        break
                if target is None:
                    code = gen_code(set(rooms))
                    room = Room(code=code, host_id=client.id, public=True)
                    room.clients[client.id] = client
                    client.room = code
                    rooms[code] = room
                    await send(ws, {"type": "created", "code": code, "id": client.id, "host": True, **roster_payload(room)})
                    log.info("public lobby %s opened", code)
                else:
                    client.room = target.code
                    target.clients[client.id] = client
                    await send(
                        ws,
                        {
                            "type": "joined",
                            "code": target.code,
                            "id": client.id,
                            "host": False,
                            "peers": [
                                {"id": oc.id, "name": oc.name, **(oc.pose or {"x": 0, "y": 0, "z": 0, "heading": 0})}
                                for oid, oc in target.clients.items()
                                if oid != client.id
                            ],
                            **roster_payload(target),
                        },
                    )
                    await broadcast(target, roster_payload(target))
                    log.info("%s joined public %s", client.id, target.code)

            elif mtype == "join":
                code = str(msg.get("code") or "").upper().strip()
                room = rooms.get(code)
                if not room:
                    await send(ws, {"type": "error", "message": "Room not found"})
                    continue
                if len(room.clients) >= MAX_PER_ROOM:
                    await send(ws, {"type": "error", "message": "Room full"})
                    continue
                await leave_room(client)
                client.name = str(msg.get("name") or "Chaser")[:16]
                client.role = "chaser"
                client.room = code
                room.clients[client.id] = client
                await send(
                    ws,
                    {
                        "type": "joined",
                        "code": code,
                        "id": client.id,
                        "host": False,
                        "peers": [
                            {"id": oc.id, "name": oc.name, **(oc.pose or {"x": 0, "y": 0, "z": 0, "heading": 0})}
                            for oid, oc in room.clients.items()
                            if oid != client.id
                        ],
                        **roster_payload(room),
                    },
                )
                await broadcast(room, roster_payload(room))
                if room.started and room.start_config:
                    roles = {c.id: c.role for c in room.clients.values()}
                    await send(ws, {"type": "start", "config": room.start_config, "hostId": room.host_id, "roles": roles})
                if room.last_storm:
                    await send(ws, {"type": "storm", **room.last_storm})

            elif mtype == "role":
                role = str(msg.get("role") or "chaser")
                if role not in ("chaser", "tornado"):
                    role = "chaser"
                client.role = role
                if client.room and client.room in rooms:
                    await broadcast(rooms[client.room], roster_payload(rooms[client.room]))

            elif mtype == "leave":
                await leave_room(client)

            elif mtype == "pose":
                if not client.room or client.room not in rooms:
                    continue
                room = rooms[client.room]
                pose = {
                    "x": float(msg.get("x") or 0),
                    "y": float(msg.get("y") or 0),
                    "z": float(msg.get("z") or 0),
                    "heading": float(msg.get("heading") or 0),
                    "speed": float(msg.get("speed") or 0),
                    "mode": msg.get("mode") or "chase",
                    "role": msg.get("role") or client.role,
                    "name": str(msg.get("name") or client.name)[:16],
                    "tornadoStrength": float(msg.get("tornadoStrength") or 0),
                }
                client.pose = pose
                client.name = pose["name"]
                if pose["role"] in ("chaser", "tornado"):
                    client.role = pose["role"]
                await broadcast(room, {"type": "peer", "id": client.id, **pose}, skip=client.id)

            elif mtype == "storm":
                if not client.room or client.room not in rooms:
                    continue
                room = rooms[client.room]
                if client.id != room.host_id:
                    continue
                storm = {k: v for k, v in msg.items() if k != "type"}
                room.last_storm = storm
                await broadcast(room, {"type": "storm", **storm}, skip=client.id)

            elif mtype == "start":
                if not client.room or client.room not in rooms:
                    continue
                room = rooms[client.room]
                if client.id != room.host_id:
                    continue
                config = msg.get("config") or {}
                # Never allow Survive EF5 in multiplayer
                if isinstance(config, dict) and config.get("playMode") == "survive":
                    config = {**config, "playMode": "chase"}
                room.started = True
                room.start_config = config
                roles = {c.id: c.role for c in room.clients.values()}
                await broadcast(
                    room,
                    {"type": "start", "config": config, "hostId": room.host_id, "roles": roles},
                    skip=client.id,
                )
                log.info("room %s started roles=%s", room.code, roles)

    except websockets.ConnectionClosed:
        pass
    finally:
        await leave_room(client)
        clients.pop(ws, None)
        log.info("disconnect %s", client.id)


async def main() -> None:
    log.info("Storm Chase MP on ws://%s:%s", HOST, PORT)
    async with websockets.serve(handle, HOST, PORT, ping_interval=20, ping_timeout=20):
        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())
