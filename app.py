from flask import Flask, send_from_directory
import os

BASE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(BASE, "public")

app = Flask(__name__, static_folder=PUBLIC, static_url_path="")


@app.route("/")
def home():
    return send_from_directory(PUBLIC, "index.html")


@app.errorhandler(404)
def not_found(_e):
    # SPA fallback for unknown paths
    index = os.path.join(PUBLIC, "index.html")
    if os.path.isfile(index):
        return send_from_directory(PUBLIC, "index.html")
    return ("Not found", 404)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
