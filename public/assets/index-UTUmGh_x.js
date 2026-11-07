(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,N=33778,te=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,I=2301,Ne=2302,Pe=2303,Fe=2400,L=2401,Ie=2402,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,R(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ut(e,t,n){return e===t?0:(n-e)/(t-e)}function dt(e,t,n){return(1-n)*e+n*t}function ft(e,t,n,r){return dt(e,t,1-Math.exp(-n*r))}function pt(e,t=1){return t-Math.abs(ct(e,t*2)-t)}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _t(e,t){return e+Math.random()*(t-e)}function vt(e){return e*(.5-Math.random())}function yt(e){e!==void 0&&(it=e);let t=it+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bt(e){return e*at}function xt(e){return e*ot}function St(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var V={DEG2RAD:at,RAD2DEG:ot,generateUUID:st,clamp:B,euclideanModulo:ct,mapLinear:lt,inverseLerp:ut,lerp:dt,damp:ft,pingpong:pt,smoothstep:mt,smootherstep:ht,randInt:gt,randFloat:_t,randFloatSpread:vt,seededRandom:yt,degToRad:bt,radToDeg:xt,isPowerOfTwo:St,ceilPowerOfTwo:Ct,floorPowerOfTwo:wt,setQuaternionFromProperEuler:Tt,normalize:Dt,denormalize:Et},Ot=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new H,jt=new kt,Mt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new Mt,Pt=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=Je(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new H,qt=class r extends nt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=st(),this.name=``,this.source=new Ut(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=new qt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*te,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*te,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*te,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*te,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new H,tn=new $t,nn=new H(0,0,0),rn=new H(1,1,1),an=new H,on=new H,sn=new H,cn=new $t,ln=new kt,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new H,mn=new kt,hn=new $t,gn=new H,_n=new H,vn=new H,yn=new kt,bn=new H(1,0,0),xn=new H(0,1,0),Sn=new H(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new un,r=new kt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Mt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new H(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=ct(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=jn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Lt.workingToColorSpace(Fn.copy(this),e),Math.round(B(Fn.r*255,0,255))*65536+Math.round(B(Fn.g*255,0,255))*256+Math.round(B(Fn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Re){Lt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=dt(Mn.h,Nn.h,t),r=dt(Mn.s,Nn.s,t),i=dt(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new U;U.NAMES=jn;var In=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new U(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new Jt,Yn=new Jt,Xn=new Jt,Zn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new H,new H,new H,new H,new H,new H,new H,new H],er=new H,tr=new Qn,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H,dr=new H;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new H,mr=new Ot,hr=0,gr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Et(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Et(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Et(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Et(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new H,Sr=new H,Cr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new $t,Er=new Dn,Dr=new H,Or=new Qn,kr=new Qn,Ar=new H,jr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Mt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new Ot,f=new Ot,p=new Ot,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=new H,Nr=new H,Pr=new Mt,Fr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mr.subVectors(n,t).cross(Nr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pr.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ir=0,Lr=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Ot().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=new H,zr=new H,Br=new H,Vr=new H,Hr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(zr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vr.dot(this.direction),s=-Vr.dot(Br),c=Vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zr).addScaledVector(Br,d),f}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=ee-N*M,se=j-te*M,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=P*(ce*D+F*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wr=new $t,Gr=new Hr,Kr=new Cr,qr=new H,Jr=new H,Yr=new H,Xr=new H,Zr=new H,Qr=new H,$r=new H,ei=new H,W=class extends Dn{constructor(e=new jr,t=new Ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),!(Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2))&&(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),(n.boundingBox===null||Gr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ei.copy(s),ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ei);return l<n.near||l>n.far?null:{distance:l,point:ei.clone(),object:e}}function ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ti(e,t,n,r,Jr,Yr,Xr,$r);if(u){let e=new H;Zn.getBarycoord($r,Jr,Yr,Xr,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new Ot)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new Ot)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Zn.getNormal(Jr,Yr,Xr,t.normal),u.face=t,u.barycoord=e}return u}var ri=class extends qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ai=new $t,oi=new $t,si=[],ci=new Qn,li=new $t,ui=new W,di=new Cr,fi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),ci.copy(e.boundingBox).applyMatrix4(ai),this.boundingBox.union(ci)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),di.copy(e.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ui.geometry=this.geometry,ui.material=this.material,ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),di.copy(this.boundingSphere),di.applyMatrix4(n),e.ray.intersectsSphere(di)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ai),oi.multiplyMatrices(n,ai),ui.matrixWorld=oi,ui.raycast(e,si);for(let e=0,n=si.length;e<n;e++){let n=si[e];n.instanceId=i,n.object=this,t.push(n)}si.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pi=new Cr,mi=new Ot(.5,.5),hi=new H,gi=class{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,i=new Fr,a=new Fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476+mi.distanceTo(e.center),pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(hi.x=r.normal.x>0?e.max.x:e.min.x,hi.y=r.normal.y>0?e.max.y:e.min.y,hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_i=class extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vi=new H,yi=new H,bi=new $t,xi=new Hr,Si=new Cr,Ci=new H,wi=new H,Ti=class extends Dn{constructor(e=new jr,t=new _i){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)vi.fromBufferAttribute(t,e-1),yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=vi.distanceTo(yi);e.setAttribute(`lineDistance`,new yr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(r),Si.radius+=i,e.ray.intersectsSphere(Si)===!1)return;bi.copy(r).invert(),xi.copy(e.ray).applyMatrix4(bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ei(this,e,xi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ei(this,e,xi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ei(this,e,xi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ei(this,e,xi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ei(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(vi.fromBufferAttribute(s,i),yi.fromBufferAttribute(s,a),n.distanceSqToSegment(vi,yi,Ci,wi)>r)return;Ci.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ci);if(!(c<t.near||c>t.far))return{distance:c,point:wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Di=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Oi=new $t,ki=new Hr,Ai=new Cr,ji=new H,Mi=class extends Dn{constructor(e=new jr,t=new Di){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(r),Ai.radius+=i,e.ray.intersectsSphere(Ai)===!1)return;Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ji.fromBufferAttribute(l,n),Ni(ji,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ji.fromBufferAttribute(l,a),Ni(ji,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ni(e,t,n,r,i,a,o){let s=ki.distanceSqToPoint(e);if(s<n){let n=new H;ki.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pi=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Li=class extends Ii{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ri=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},G=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zi=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new Ot;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`normal`,new yr(o,3)),this.setAttribute(`uv`,new yr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bi=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Ot,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends Bi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hi=class e extends jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new yr(i,3)),this.setAttribute(`normal`,new yr(i.slice(),3)),this.setAttribute(`uv`,new yr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new Ot,s=new Ot,c=new Ot;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ui=class e extends Hi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wi=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Gi=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ki=class e extends Hi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}};function qi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Yi(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Yi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ji(e){let t={};for(let n=0;n<e.length;n++){let r=qi(e[n]);for(let e in r)t[e]=r[e]}return t}function Yi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Qi={clone:qi,merge:Ji},$i=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ea=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ta=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$i,this.fragmentShader=ea,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Xi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Ot().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},K=class extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ra=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function oa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var sa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ca=class extends sa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case L:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case L:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},la=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ua=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},da=class extends sa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ma(n,t,g,y,r);i[p]=fa(x,o,_,b,m)}return i}};function fa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function pa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ma(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=fa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=pa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ha=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),oa(e.settings)&&(n.settings={inTangents:aa(e.settings.inTangents,Array),outTangents:aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case I:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return I;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;oa(this.settings)&&(ga(this.settings.inTangents,e),ga(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,oa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ga(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ha.prototype.ValueTypeName=``,ha.prototype.TimeBufferType=Float32Array,ha.prototype.ValueBufferType=Float32Array,ha.prototype.DefaultInterpolation=I;var _a=class extends ha{constructor(e,t,n){super(e,t,n)}};_a.prototype.ValueTypeName=`bool`,_a.prototype.ValueBufferType=Array,_a.prototype.DefaultInterpolation=Me,_a.prototype.InterpolantFactoryMethodLinear=void 0,_a.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};va.prototype.ValueTypeName=`color`;var ya=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};ya.prototype.ValueTypeName=`number`;var ba=class extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},xa=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}};xa.prototype.ValueTypeName=`quaternion`,xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends ha{constructor(e,t,n){super(e,t,n)}};Sa.prototype.ValueTypeName=`string`,Sa.prototype.ValueBufferType=Array,Sa.prototype.DefaultInterpolation=Me,Sa.prototype.InterpolantFactoryMethodLinear=void 0,Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ha{constructor(e,t,n,r){super(e,t,n,r)}};Ca.prototype.ValueTypeName=`vector`;var wa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ta(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ta(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ta(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ea=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Da=class{constructor(e){this.manager=e===void 0?Ea:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Oa={},ka=class extends Error{constructor(e,t){super(e),this.response=t}},Aa=class extends Da{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=wa.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Oa[e]!==void 0){Oa[e].push({onLoad:t,onProgress:n,onError:r});return}Oa[e]=[],Oa[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&R(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Oa[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new ka(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{wa.add(`file:${e}`,t);let n=Oa[e];delete Oa[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Oa[e];if(n===void 0)throw this.manager.itemError(e),t;delete Oa[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ja=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Na=new $t,Pa=new H,Fa=new H,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pa),Fa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Na,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},La=new H,Ra=new kt,za=new H,Ba=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Ra,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Ra,za.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(La,Ra,za),za.x===1&&za.y===1&&za.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Ra,za.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Va=new H,Ha=new Ot,Ua=new Ot,Wa=class extends Ba{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,Ua),t.subVectors(Ua,Ha)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ga=class extends Ia{constructor(){super(new Wa(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ot*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ka=class extends ja{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Ga}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qa=class extends Ia{constructor(){super(new Wa(90,1,.5,500)),this.isPointLightShadow=!0}},Ja=class extends ja{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new qa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ya=class extends Ba{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xa=class extends Ia{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Za=class extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Xa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qa=class extends ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},$a=-90,eo=1,to=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wa($a,eo,e,t);r.layers=this.layers,this.add(r);let i=new Wa($a,eo,e,t);i.layers=this.layers,this.add(i);let a=new Wa($a,eo,e,t);a.layers=this.layers,this.add(a);let o=new Wa($a,eo,e,t);o.layers=this.layers,this.add(o);let s=new Wa($a,eo,e,t);s.layers=this.layers,this.add(s);let c=new Wa($a,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},no=class extends Wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=`\\[\\]\\.:\\/`,io=RegExp(`[\\[\\]\\.:\\/]`,`g`),ao=`[^\\[\\]\\.:\\/]`,oo=`[^`+ro.replace(`\\.`,``)+`]`,so=`((?:WC+[\\/:])*)`.replace(`WC`,ao),co=`(WCOD+)?`.replace(`WCOD`,oo),lo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ao),uo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ao),fo=RegExp(`^`+so+co+lo+uo+`$`),po=[`material`,`materials`,`bones`,`map`],mo=class{constructor(e,t,n){let r=n||ho.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ho=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(io,``)}static parseTrackName(e){let t=fo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);po.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ho.Composite=mo,ho.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ho.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ho.prototype.GetterByBindingType=[ho.prototype._getValue_direct,ho.prototype._getValue_array,ho.prototype._getValue_arrayElement,ho.prototype._getValue_toArray],ho.prototype.SetterByBindingTypeAndVersioning=[[ho.prototype._setValue_direct,ho.prototype._setValue_direct_setNeedsUpdate,ho.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_array,ho.prototype._setValue_array_setNeedsUpdate,ho.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_arrayElement,ho.prototype._setValue_arrayElement_setNeedsUpdate,ho.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_fromArray,ho.prototype._setValue_fromArray_setNeedsUpdate,ho.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var go=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,R(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function _o(e,t,n,r){let i=vo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function vo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function yo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function bo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var xo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},So={basic:{uniforms:Ji([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:xo.meshbasic_vert,fragmentShader:xo.meshbasic_frag},lambert:{uniforms:Ji([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:xo.meshlambert_vert,fragmentShader:xo.meshlambert_frag},phong:{uniforms:Ji([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xo.meshphong_vert,fragmentShader:xo.meshphong_frag},standard:{uniforms:Ji([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xo.meshphysical_vert,fragmentShader:xo.meshphysical_frag},toon:{uniforms:Ji([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new U(0)}}]),vertexShader:xo.meshtoon_vert,fragmentShader:xo.meshtoon_frag},matcap:{uniforms:Ji([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:xo.meshmatcap_vert,fragmentShader:xo.meshmatcap_frag},points:{uniforms:Ji([q.points,q.fog]),vertexShader:xo.points_vert,fragmentShader:xo.points_frag},dashed:{uniforms:Ji([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xo.linedashed_vert,fragmentShader:xo.linedashed_frag},depth:{uniforms:Ji([q.common,q.displacementmap]),vertexShader:xo.depth_vert,fragmentShader:xo.depth_frag},normal:{uniforms:Ji([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:xo.meshnormal_vert,fragmentShader:xo.meshnormal_frag},sprite:{uniforms:Ji([q.sprite,q.fog]),vertexShader:xo.sprite_vert,fragmentShader:xo.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xo.background_vert,fragmentShader:xo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:xo.backgroundCube_vert,fragmentShader:xo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xo.cube_vert,fragmentShader:xo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xo.equirect_vert,fragmentShader:xo.equirect_frag},distance:{uniforms:Ji([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xo.distance_vert,fragmentShader:xo.distance_frag},shadow:{uniforms:Ji([q.lights,q.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:xo.shadow_vert,fragmentShader:xo.shadow_frag}};So.physical={uniforms:Ji([So.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:xo.meshphysical_vert,fragmentShader:xo.meshphysical_frag};var Co={r:0,b:0,g:0},wo=new $t,To=new Mt;To.set(-1,0,0,0,1,0,0,0,1);function Eo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new G(1,1,1),new ta({name:`BackgroundCubeMaterial`,uniforms:qi(So.backgroundCube.uniforms),vertexShader:So.backgroundCube.vertexShader,fragmentShader:So.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(To),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Wi(2,2),new ta({name:`BackgroundMaterial`,uniforms:qi(So.background.uniforms),vertexShader:So.background.vertexShader,fragmentShader:So.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Co,Zi(e)),n.buffers.color.setClear(Co.r,Co.g,Co.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Do(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Oo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ko(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ao(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fr,s=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var jo=4,Mo=6,No=20,Po=256,Fo=new Ya,Io=new U,Lo=null,Ro=0,zo=0,Bo=!1,Vo=new H,Ho=new H,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Vo}=i;Lo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lo,Ro,zo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lo=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:ze,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wo(r)),this._blurMaterial=Jo(r,e,t),this._ggxMaterial=qo(r,e,t)}return r}_compileMaterial(e){let t=new W(new jr,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,r,i){let a=new Wa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Io),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new G,new Ur({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Io),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ko(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ko(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-jo?n-d+jo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ko(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Fo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ko(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Fo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ko(t,3*l*(r>this._lodMax-jo?r-this._lodMax+jo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Fo)}};function Wo(e){let t=[],n=[],r=e,i=e-jo+1+Mo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ho.set(1,r,n):e===1?Ho.set(-n,1,-r):e===2?Ho.set(-n,r,1):e===3?Ho.set(-1,r,-n):e===4?Ho.set(-n,-1,r):Ho.set(n,r,-1),Ho.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new W(u,null)),r>jo&&r--}return{lodMeshes:n,sizeLods:t}}function Go(e,t,n){let r=new Xt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ko(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function qo(e,t,n){return new ta({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(e,t,n){return new ta({name:`SphericalGaussianBlur`,defines:{SAMPLES:No,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(){return new ta({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(){return new ta({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qo=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new G(5,5,5),i=new ta({name:`CubemapFromEquirect`,uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new to(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function $o(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Qo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Uo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Uo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ts(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ns(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function is(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Zt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ot(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function as(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ss(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new Ya(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Lt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=os[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var cs=new qt,ls=new Ii(1,1),us=new Zt,ds=new Qt,fs=new Pi,ps=[],ms=[],hs=new Float32Array(16),gs=new Float32Array(9),_s=new Float32Array(4);function vs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ps[i];if(a===void 0&&(a=new Float32Array(i),ps[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ys(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function bs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function xs(e,t){let n=ms[t];n===void 0&&(n=new Int32Array(t),ms[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2fv(this.addr,t),bs(n,t)}}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ys(n,t))return;e.uniform3fv(this.addr,t),bs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4fv(this.addr,t),bs(n,t)}}function Es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;_s.set(r),e.uniformMatrix2fv(this.addr,!1,_s),bs(n,r)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;gs.set(r),e.uniformMatrix3fv(this.addr,!1,gs),bs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ys(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),bs(n,t)}else{if(ys(n,r))return;hs.set(r),e.uniformMatrix4fv(this.addr,!1,hs),bs(n,r)}}function ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2iv(this.addr,t),bs(n,t)}}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ys(n,t))return;e.uniform3iv(this.addr,t),bs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4iv(this.addr,t),bs(n,t)}}function Ns(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ys(n,t))return;e.uniform2uiv(this.addr,t),bs(n,t)}}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ys(n,t))return;e.uniform3uiv(this.addr,t),bs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ys(n,t))return;e.uniform4uiv(this.addr,t),bs(n,t)}}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ls.compareFunction=n.isReversedDepthBuffer()?518:515,a=ls):a=cs,n.setTexture2D(t||a,i)}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ds,i)}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||fs,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||us,i)}function Vs(e){switch(e){case 5126:return Ss;case 35664:return Cs;case 35665:return ws;case 35666:return Ts;case 35674:return Es;case 35675:return Ds;case 35676:return Os;case 5124:case 35670:return ks;case 35667:case 35671:return As;case 35668:case 35672:return js;case 35669:case 35673:return Ms;case 5125:return Ns;case 36294:return Ps;case 36295:return Fs;case 36296:return Is;case 35678:case 36198:case 36298:case 36306:case 35682:return Ls;case 35679:case 36299:case 36307:return Rs;case 35680:case 36300:case 36308:case 36293:return zs;case 36289:case 36303:case 36311:case 36292:return Bs}}function Hs(e,t){e.uniform1fv(this.addr,t)}function Us(e,t){let n=vs(t,this.size,2);e.uniform2fv(this.addr,n)}function Ws(e,t){let n=vs(t,this.size,3);e.uniform3fv(this.addr,n)}function Gs(e,t){let n=vs(t,this.size,4);e.uniform4fv(this.addr,n)}function Ks(e,t){let n=vs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function qs(e,t){let n=vs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Js(e,t){let n=vs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ys(e,t){e.uniform1iv(this.addr,t)}function Xs(e,t){e.uniform2iv(this.addr,t)}function Zs(e,t){e.uniform3iv(this.addr,t)}function Qs(e,t){e.uniform4iv(this.addr,t)}function $s(e,t){e.uniform1uiv(this.addr,t)}function ec(e,t){e.uniform2uiv(this.addr,t)}function tc(e,t){e.uniform3uiv(this.addr,t)}function nc(e,t){e.uniform4uiv(this.addr,t)}function rc(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ls:cs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ic(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ds,a[e])}function ac(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||fs,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=xs(n,i);ys(r,a)||(e.uniform1iv(this.addr,a),bs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||us,a[e])}function sc(e){switch(e){case 5126:return Hs;case 35664:return Us;case 35665:return Ws;case 35666:return Gs;case 35674:return Ks;case 35675:return qs;case 35676:return Js;case 5124:case 35670:return Ys;case 35667:case 35671:return Xs;case 35668:case 35672:return Zs;case 35669:case 35673:return Qs;case 5125:return $s;case 36294:return ec;case 36295:return tc;case 36296:return nc;case 35678:case 36198:case 36298:case 36306:case 35682:return rc;case 35679:case 36299:case 36307:return ic;case 35680:case 36300:case 36308:case 36293:return ac;case 36289:case 36303:case 36311:case 36292:return oc}}var cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vs(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sc(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function fc(e,t){e.seq.push(t),e.map[t.id]=t}function pc(e,t,n){let r=e.name,i=r.length;for(dc.lastIndex=0;;){let a=dc.exec(r),o=dc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){fc(n,l===void 0?new cc(s,e,t):new lc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new uc(s),fc(n,e)),n=e}}}var mc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);pc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function hc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var gc=37297,_c=0;function vc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var yc=new Mt;function bc(e){Lt._getMatrix(yc,Lt.workingColorSpace,e);let t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function xc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+vc(e.getShaderSource(t),r)}return i}function Sc(e,t){let n=bc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Cc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function wc(e,t){let n=Cc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Tc=new H;function Ec(){return Lt.getLuminanceCoefficients(Tc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Tc.x.toFixed(4)}, ${Tc.y.toFixed(4)}, ${Tc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Dc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ac).join(`
`)}function Oc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function kc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ac(e){return e!==``}function jc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(e){return e.replace(Nc,Ic)}var Fc=new Map;function Ic(e,t){let n=xo[t];if(n===void 0){let e=Fc.get(t);if(e!==void 0)n=xo[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Pc(n)}var Lc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(e){return e.replace(Lc,zc)}function zc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Bc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Vc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Hc(e){return Vc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Uc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Wc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Uc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Gc={302:`ENVMAP_MODE_REFRACTION`};function Kc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Gc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var qc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Jc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:qc[e.combine]||`ENVMAP_BLENDING_NONE`}function Yc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Xc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Hc(n),l=Wc(n),u=Kc(n),d=Jc(n),f=Yc(n),p=Dc(n),m=Oc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ac).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ac).join(`
`),_.length>0&&(_+=`
`)):(g=[Bc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ac).join(`
`),_=[Bc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:xo.tonemapping_pars_fragment,n.toneMapping===0?``:wc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,xo.colorspace_pars_fragment,Sc(`linearToOutputTexel`,n.outputColorSpace),Ec(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ac).join(`
`)),o=Pc(o),o=jc(o,n),o=Mc(o,n),s=Pc(s),s=jc(s,n),s=Mc(s,n),o=Rc(o),s=Rc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=hc(i,i.VERTEX_SHADER,y),S=hc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=xc(i,x,`vertex`),n=xc(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new mc(i,h),T=kc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,gc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_c++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Zc=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $c(e),t.set(e,n)),n}},$c=class{constructor(e){this.id=Zc++,this.code=e,this.usedTimes=0}};function el(e){return e===1030||e===37490||e===36285}function tl(e,t,n,r,i,a){let o=new dn,s=new Qc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=So[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&el(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=So[t];n=Qi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Xc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function nl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function rl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function al(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||rl),r.length>1&&r.sort(t||il),i.length>1&&i.sort(t||il)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ol(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new al,e.set(t,[i])):n>=r.length?(i=new al,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function sl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new U};break;case`SpotLight`:n={position:new H,direction:new H,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function cl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ll=0;function ul(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function dl(e){let t=new sl,n=cl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ul);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ll++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function fl(e){let t=new dl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function pl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fl(e),t.set(n,[a])):r>=i.length?(a=new fl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ml=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],_l=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],vl=new $t,yl=new H,bl=new H;function xl(e,t,n){let i=new gi,a=new Ot,s=new Ot,c=new Jt,l=new ra,u=new ia,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:ml,fragmentShader:hl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ii(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Qo(a.x),p.map.depthTexture=new Li(a.x,m)):(p.map=new Xt(a.x,a.y),p.map.depthTexture=new Ii(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),yl.setFromMatrixPosition(d.matrixWorld),e.position.copy(yl),bl.copy(e.position),bl.add(gl[t]),e.up.copy(_l[t]),e.lookAt(bl),e.updateMatrixWorld(),n.makeTranslation(-yl.x,-yl.y,-yl.z),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Sl(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Jt().fromArray(re),oe=new Jt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:ze}}function Cl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Ot,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:Lt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ne(t)}function te(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function P(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ne(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(e,t){let n=f.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,M));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&P(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Lt.getPrimaries(Lt.workingColorSpace),n=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ne(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=_o(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=_o(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Lt.getPrimaries(Lt.workingColorSpace),o=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,M)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),he(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else F(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,N);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Oe.push(a),ke.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ke)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function wl(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,El=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ri(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ta({vertexShader:Tl,fragmentShader:El,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Dl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new Ot,k=null,A=null,ee=new Wa;ee.viewport=new Jt;let j=new Wa;j.viewport=new Jt;let M=[ee,j],N=new no,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ii(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new H,oe=new H;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=ee.near=t,N.far=j.far=ee.far=n,(te!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,P=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ce(N,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(N,ee,j):N.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),F(e,N,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new Wa,o.layers.enable(n),o.viewport=new Jt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ri,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new yo;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},kl=new $t,Al=new Mt;Al.set(-1,0,0,0,1,0,0,0,1);function jl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Zi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(kl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Al),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ml(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Nl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pl=null;function Fl(){return Pl===null&&(Pl=new ri(Nl,16,16,k,g),Pl.name=`DFG_LUT`,Pl.minFilter=o,Pl.magFilter=o,Pl.wrapS=t,Pl.wrapT=t,Pl.generateMipmaps=!1,Pl.needsUpdate=!0),Pl}var Il=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,k=null,j=null,M=[],N=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Re;let se=0,ce=0,F=null,le=-1,ue=null,de=new Jt,fe=new Jt,pe=null,me=new U(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Jt(0,0,ge,_e),Se=new Jt(0,0,ge,_e),Ce=!1,we=new gi,Te=!1,Ee=!1,De=new $t,Oe=new H,ke=new Jt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,Le,ze,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),z(`WebGLRenderer: `+e.message),e}function st(){Pe=new es(I),Pe.init(),it=new wl(I,Pe),Fe=new ko(I,Pe,e,it),L=new Sl(I,Pe),Fe.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new rs(I),Le=new nl,ze=new Cl(I,Pe,L,Le,Fe,it,Ie),Be=new $o(P),Ve=new bo(I),at=new Do(I,Ve),He=new ts(I,Ve,Ie,at),Ue=new as(I,He,Ve,at,Ie),tt=new is(I,Fe,ze),Xe=new Ao(Le),We=new tl(P,Be,Pe,Fe,at,Xe),Ke=new jl(P,Le),qe=new ol,Je=new pl(Pe),$e=new Eo(P,Be,L,Ue,x,s),Qe=new xl(P,Ue,Fe),ot=new Ml(I,Ie,Fe,L),nt=new Oo(I,Pe,Ie),rt=new ns(I,Pe,Ie),Ie.programs=We.programs,P.capabilities=Fe,P.extensions=Pe,P.properties=Le,P.renderLists=qe,P.shadowMap=Qe,P.state=L,P.info=Ie}S!==1009&&(te=new ss(S,t.width,t.height,o,r,i));let B=new Ol(P,I);this.xr=B,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){B.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),qe.dispose(),Je.dispose(),Le.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,_t),B.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ne=!0}function lt(){Ze(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ie.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;st(),Ie.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ut(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),Le.remove(e)}function pt(e){let t=Le.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=Le.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Te===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),j=Je.get(n),j.init(t),N.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),re!==null&&re.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),Te===!0&&Xe.setGlobalState(this.clippingPlanes,t),re!==null&&Qe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=N.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Le.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new yo;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,B.setAnimationLoop(e),e===null?yt.stop():yt.start()},B.addEventListener(`sessionstart`,_t),B.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=B.enabled===!0&&B.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(t),t=B.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),j=Je.get(e,N.length),j.init(t),j.state.textureUnits=ze.getTextureUnits(),N.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ge,t.reversedDepth),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),k=qe.get(e,M.length),k.init(),M.push(k),B.enabled===!0&&B.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,P.sortObjects)}bt(e,t,0,P.sortObjects),k.finish(),re!==null&&re.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(ye,be),je=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,je&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Xe.beginShadows();let i=j.state.shadowsArray;if(Qe.render(i,e,t),Te===!0&&Xe.endShadows(),(r&&te.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),je&&$e.render(e),xt(k,e,t)}F!==null&&ce===0&&(ze.updateMultisampleRenderTarget(F),ze.updateRenderTargetMipmap(F)),r&&te.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),at.resetDefaultState(),le=-1,ue=null,N.pop(),N.length>0?(j=N[N.length-1],ze.setTextureUnits(j.state.textureUnits),Te===!0&&Xe.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,re!==null&&re.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Xe.setGlobalState(P.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(me),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),je&&$e.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Xe.setGlobalState(P.clippingPlanes,r),Ct(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(me,he),p!==void 0&&(r.viewport=p),P.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ae);let r=Le.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Dt(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=mc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=Le.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function V(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Ae),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Le.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=V(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,ze),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Fl()),C){if(T.setValue(I,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}mc.upload(I,Et(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(mc.upload(I,Et(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=Le.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Le.get(e.texture).__webglTexture=t,Le.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Le.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=Le.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,Le.get(e.texture).__webglTexture,Le.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Le.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Le.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?Le.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=Le.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Le.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Le.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function jt(e){let t=Le.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=jt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=F===null?null:Le.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=jt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:Le.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await et(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Le.get(e),r=Le.get(t),h=Le.get(n.__renderTarget),g=Le.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Le.has(e)){let n=Le.get(e),r=Le.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){Le.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}},Ll=!1,Rl=null,zl={throttle:0,steer:0,boost:!1},Bl={dx:0,dy:0},Vl=!1,Hl=!1,Ul=!1,Wl=!1,Gl=!1,Kl=!1,ql=!1,Jl=!1,Yl=!1,Xl=new Map;function Zl(){if(typeof window>`u`)return!1;let e=window.matchMedia(`(pointer: coarse)`).matches,t=window.matchMedia(`(hover: none)`).matches,n=navigator.maxTouchPoints>0,r=window.innerWidth<=900;return(e||t||n)&&(r||e||t)}function Ql(e){if(!Zl())return;Ll=!0,document.documentElement.classList.add(`is-mobile`),Rl=document.createElement(`div`),Rl.id=`mobile-controls`,Rl.className=`hidden`,Rl.innerHTML=`
    <div class="m-stick" id="m-drive" data-stick="drive" aria-label="Drive">
      <div class="m-stick-base"><div class="m-stick-knob"></div></div>
      <span class="m-stick-label">DRIVE</span>
    </div>
    <div class="m-stick" id="m-look" data-stick="look" aria-label="Look">
      <div class="m-stick-base"><div class="m-stick-knob"></div></div>
      <span class="m-stick-label">LOOK</span>
    </div>
    <div class="m-actions" id="m-actions">
      <button type="button" class="m-btn" data-act="photo" aria-label="Photo">PIC</button>
      <button type="button" class="m-btn" data-act="report" aria-label="Report">RPT</button>
      <button type="button" class="m-btn" data-act="probe" aria-label="Plant probe">PRB</button>
      <button type="button" class="m-btn" data-act="deploy" aria-label="Deploy claws">TIV</button>
      <button type="button" class="m-btn m-btn-flip" data-act="flip" aria-label="Flip upright">FLIP</button>
      <button type="button" class="m-btn" data-act="map" aria-label="Map">MAP</button>
      <button type="button" class="m-btn" data-act="pause" aria-label="Pause">II</button>
      <button type="button" class="m-btn m-btn-boost" data-act="boost" aria-label="Boost">BOOST</button>
      <button type="button" class="m-btn" data-act="exit" aria-label="Exit vehicle">EXIT</button>
    </div>
  `,e.appendChild(Rl),Rl.addEventListener(`touchmove`,e=>{e.preventDefault()},{passive:!1});for(let e of Rl.querySelectorAll(`.m-stick`)){let t=e.dataset.stick,n=e.querySelector(`.m-stick-base`),r=e.querySelector(`.m-stick-knob`),i=i=>{i.preventDefault(),i.stopPropagation(),e.setPointerCapture(i.pointerId);let a=n.getBoundingClientRect();Xl.set(i.pointerId,{kind:t,ox:a.left+a.width/2,oy:a.top+a.height/2,id:i.pointerId}),$l(i,t,r,a)},a=e=>{let t=Xl.get(e.pointerId);if(!t)return;e.preventDefault();let i=n.getBoundingClientRect();$l(e,t.kind,r,i)},o=e=>{Xl.has(e.pointerId)&&(Xl.delete(e.pointerId),r.style.transform=`translate(-50%, -50%)`,t===`drive`&&(zl.throttle=0,zl.steer=0))};e.addEventListener(`pointerdown`,i),e.addEventListener(`pointermove`,a),e.addEventListener(`pointerup`,o),e.addEventListener(`pointercancel`,o)}let t=Rl.querySelector(`[data-act="boost"]`);t.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),zl.boost=!0,t.classList.add(`active`)});let n=()=>{zl.boost=!1,t.classList.remove(`active`)};t.addEventListener(`pointerup`,n),t.addEventListener(`pointercancel`,n),t.addEventListener(`pointerleave`,n),Rl.querySelectorAll(`.m-btn[data-act]`).forEach(e=>{let t=e.dataset.act;t!==`boost`&&(e.addEventListener(`pointerdown`,n=>{n.preventDefault(),n.stopPropagation(),e.classList.add(`active`),t===`photo`&&(Vl=!0),t===`report`&&(Hl=!0),t===`probe`&&(Ul=!0),t===`deploy`&&(Jl=!0),t===`flip`&&(Yl=!0),t===`map`&&(Wl=!0),t===`pause`&&(Gl=!0),t===`exit`&&(Kl=!0),t===`cam`&&(ql=!0)}),e.addEventListener(`pointerup`,()=>e.classList.remove(`active`)),e.addEventListener(`pointercancel`,()=>e.classList.remove(`active`)))})}function $l(e,t,n,r){let i=r.left+r.width/2,a=r.top+r.height/2,o=r.width*.42,s=e.clientX-i,c=e.clientY-a,l=Math.hypot(s,c)||1;l>o&&(s=s/l*o,c=c/l*o),n.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${c}px))`;let u=s/o,d=c/o;if(t===`drive`){let e=Math.sign(u)*Math.abs(u)**.55;zl.steer=Math.max(-1,Math.min(1,e*1.35)),zl.throttle=Math.max(-1,Math.min(1,-d))}else Bl.dx+=u*7,Bl.dy+=d*5.5}function eu(e){Rl&&Ll&&(Rl.classList.toggle(`hidden`,!e),e||(zl={throttle:0,steer:0,boost:!1},Bl={dx:0,dy:0},Xl.clear()))}function tu(){return Ll}function nu(){return{...zl}}function ru(){let e={...Bl};return Bl.dx=0,Bl.dy=0,e}function iu(){let e={photo:Vl,report:Hl,probe:Ul,deploy:Jl,flip:Yl,map:Wl,pause:Gl,exit:Kl,cam:ql};return Vl=!1,Hl=!1,Ul=!1,Jl=!1,Yl=!1,Wl=!1,Gl=!1,Kl=!1,ql=!1,e}var au=new Uint8Array(24);function ou(){let e=navigator.getGamepads?.()??[];for(let t of e)if(t?.connected)return t;return null}function su(e,t=.18){return Math.abs(e)<t?0:(e-Math.sign(e)*t)/(1-t)}function cu(){let e=ou();if(!e)return null;let t=su(e.axes[0]??0),n=su(e.axes[1]??0),r=e.buttons[6]?.value??0,i=e.buttons[7]?.value??0,a=-n;return i>.05&&(a=Math.max(a,i)),r>.05&&(a=Math.min(a,-r)),{throttle:Math.max(-1,Math.min(1,a)),steer:Math.max(-1,Math.min(1,t)),brake:!!(e.buttons[1]?.pressed||e.buttons[5]?.pressed),boost:!!(e.buttons[0]?.pressed||e.buttons[4]?.pressed)}}function lu(){let e=ou();return e?{dx:su(e.axes[2]??0,.14)*10,dy:su(e.axes[3]??0,.14)*7}:{dx:0,dy:0}}function uu(){let e=ou(),t={photo:!1,report:!1,probe:!1,deploy:!1,flip:!1,map:!1,pause:!1,exit:!1,cam:!1,confirm:!1};if(!e)return au.fill(0),t;let n=t=>!!e.buttons[t]?.pressed,r=e=>n(e)&&!au[e];t.confirm=r(0),t.exit=r(1),t.deploy=r(2),t.flip=r(3),t.photo=r(4),t.report=r(5),t.cam=r(8),t.pause=r(9),t.map=r(12)||r(13),e.buttons.length>14&&r(14)&&(t.probe=!0),e.buttons.length>15&&r(15)&&(t.map=!0);for(let e=0;e<au.length;e++)au[e]=+!!n(e);return t}var du=new Set,fu=!1,pu=!1,mu=!1,hu=!1,gu=!1,_u=!1,vu=!1,yu=!1,bu=!1,xu=!1,Su=!1,Cu=0,wu=0,Tu=!1,Eu=!1,Du=!1,Ou=0;function ku(e){let t=e;if(!t)return!1;let n=t.tagName;return n===`INPUT`||n===`TEXTAREA`||n===`SELECT`||t.isContentEditable?!0:!!t.closest?.(`input, textarea, select, [contenteditable='true']`)}function Au(e){ku(e.target)||(du.add(e.code),e.code===`KeyC`&&!e.repeat&&(fu=!0),e.code===`KeyV`&&!e.repeat&&(pu=!0),e.code===`KeyM`&&!e.repeat&&(mu=!0),e.code===`KeyF`&&!e.repeat&&(hu=!0),e.code===`KeyP`&&!e.repeat&&(gu=!0),e.code===`KeyT`&&!e.repeat&&(_u=!0),e.code===`KeyB`&&!e.repeat&&(vu=!0),e.code===`KeyR`&&!e.repeat&&(yu=!0),e.code===`KeyG`&&!e.repeat&&(bu=!0),e.code===`Escape`&&!e.repeat&&(xu=!0),e.code===`Enter`&&!e.repeat&&(Su=!0),e.code===`BracketLeft`&&!e.repeat&&(Ou+=.22),e.code===`BracketRight`&&!e.repeat&&(Ou-=.22),[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyQ`,`KeyE`,`KeyZ`,`KeyX`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`,`BracketLeft`,`BracketRight`].includes(e.code)&&e.preventDefault())}function ju(e){du.delete(e.code)}function Mu(e,t){Du=!!t?.mobile,window.addEventListener(`keydown`,Au),window.addEventListener(`keyup`,ju),Du||(e.addEventListener(`click`,()=>{document.pointerLockElement!==e&&e.requestPointerLock()}),e.addEventListener(`mousedown`,e=>{(e.button===0||e.button===2)&&(Tu=!0)}),window.addEventListener(`mouseup`,()=>{Tu=!1})),e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`wheel`,e=>{e.preventDefault(),Ou+=Math.sign(e.deltaY)*.18},{passive:!1});let n=0,r=e=>{let t=e[0],n=e[1];return Math.hypot(t.clientX-n.clientX,t.clientY-n.clientY)};e.addEventListener(`touchstart`,e=>{e.touches.length===2&&(n=r(e.touches))},{passive:!0}),e.addEventListener(`touchmove`,e=>{if(e.touches.length!==2)return;e.preventDefault();let t=r(e.touches);n>0&&(Ou+=(n-t)/90),n=t},{passive:!1}),e.addEventListener(`touchend`,e=>{e.touches.length<2&&(n=0)},{passive:!0}),document.addEventListener(`pointerlockchange`,()=>{Eu=document.pointerLockElement===e}),document.addEventListener(`mousemove`,e=>{Du||(Eu||Tu)&&(Cu+=e.movementX,wu+=e.movementY)})}function Nu(){document.pointerLockElement&&document.exitPointerLock()}function Pu(){let e=du.has(`KeyW`)||du.has(`ArrowUp`),t=du.has(`KeyS`)||du.has(`ArrowDown`),n=du.has(`KeyA`)||du.has(`ArrowLeft`),r=du.has(`KeyD`)||du.has(`ArrowRight`),i=0;e&&(i+=1),t&&--i;let a=0;n&&--a,r&&(a+=1);let o=0;du.has(`KeyQ`)&&(o+=1),du.has(`KeyE`)&&--o;let s=0;du.has(`KeyZ`)&&(s+=1),du.has(`KeyX`)&&--s;let c=du.has(`ShiftLeft`)||du.has(`ShiftRight`),l=du.has(`Space`),u=fu;fu=!1;let d=pu;pu=!1;let f=mu;mu=!1;let p=hu;hu=!1;let m=gu;gu=!1;let h=_u;_u=!1;let g=vu;vu=!1;let _=yu;yu=!1;let v=bu;bu=!1;let y=xu;xu=!1;let b=Su;Su=!1;let x=Cu,S=wu;Cu=0,wu=0;let C=Ou;if(Ou=0,tu()){let e=nu();(Math.abs(e.throttle)>.05||Math.abs(e.steer)>.05)&&(i=e.throttle,a=e.steer),e.boost&&(c=!0);let t=ru();x+=t.dx,S+=t.dy;let n=iu();n.photo&&(m=!0),n.report&&(h=!0),n.probe&&(g=!0),n.map&&(f=!0),n.pause&&(y=!0),n.exit&&(p=!0),n.cam&&(u=!0),n.deploy&&(_=!0),n.flip&&(v=!0)}{let e=cu();if(e){(Math.abs(e.throttle)>.05||Math.abs(e.steer)>.05)&&(i=e.throttle,a=e.steer),e.boost&&(c=!0),e.brake&&(l=!0);let t=lu();x+=t.dx,S+=t.dy}let t=uu();t.photo&&(m=!0),t.report&&(h=!0),t.probe&&(g=!0),t.map&&(f=!0),t.pause&&(y=!0),t.exit&&(p=!0),t.cam&&(u=!0),t.deploy&&(_=!0),t.flip&&(v=!0),t.confirm&&(Su=!0)}let w=b||Su;return Su=!1,{throttle:i,steer:a,brake:l,boost:c,toggleCamera:u,toggleRadar:d,toggleMap:f,exitVehicle:p,takePhoto:m,reportTornado:h,plantProbe:g,toggleDeploy:_,flipVehicle:v,pause:y,confirm:w,lookYaw:o,lookPitch:s,mouseDX:x,mouseDY:S,zoomDelta:C}}var Fu=class extends Da{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new Aa(this.manager);a.setPath(this.path),a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){function t(e){let t=new DataView(e);if(84+t.getUint32(80,!0)*50===t.byteLength)return!0;let r=[115,111,108,105,100];for(let e=0;e<5;e++)if(n(r,t,e))return!1;return!0}function n(e,t,n){for(let r=0,i=e.length;r<i;r++)if(e[r]!==t.getUint8(n+r))return!1;return!0}function r(e){let t=new DataView(e),n=t.getUint32(80,!0),r,i,a,o=!1,s,c,l,u,d;for(let e=0;e<70;e++)t.getUint32(e,!1)==1129270351&&t.getUint8(e+4)==82&&t.getUint8(e+5)==61&&(o=!0,s=new Float32Array(n*3*3),c=t.getUint8(e+6)/255,l=t.getUint8(e+7)/255,u=t.getUint8(e+8)/255,d=t.getUint8(e+9)/255);let f=new jr,p=new Float32Array(n*3*3),m=new Float32Array(n*3*3),h=new U;for(let e=0;e<n;e++){let n=84+e*50,d=t.getFloat32(n,!0),f=t.getFloat32(n+4,!0),g=t.getFloat32(n+8,!0);if(o){let e=t.getUint16(n+48,!0);e&32768?(r=c,i=l,a=u):(r=(e&31)/31,i=(e>>5&31)/31,a=(e>>10&31)/31)}for(let c=1;c<=3;c++){let l=n+c*12,u=e*3*3+(c-1)*3;p[u]=t.getFloat32(l,!0),p[u+1]=t.getFloat32(l+4,!0),p[u+2]=t.getFloat32(l+8,!0),m[u]=d,m[u+1]=f,m[u+2]=g,o&&(h.setRGB(r,i,a,Re),s[u]=h.r,s[u+1]=h.g,s[u+2]=h.b)}}return f.setAttribute(`position`,new gr(p,3)),f.setAttribute(`normal`,new gr(m,3)),o&&(f.setAttribute(`color`,new gr(s,3)),f.hasColors=!0,f.alpha=d),f}function i(e){let t=new jr,n=/solid([\s\S]*?)endsolid/g,r=/facet([\s\S]*?)endfacet/g,i=/solid\s(.+)/,a=0,o=`[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`,s=RegExp(`vertex`+o+o+o,`g`),c=RegExp(`normal`+o+o+o,`g`),l=[],u=[],d=[],f=new H,p,m=0,h=0,g=0;for(;(p=n.exec(e))!==null;){h=g;let e=p[0],n=(p=i.exec(e))===null?``:p[1];for(d.push(n);(p=r.exec(e))!==null;){let e=0,t=0,n=p[0];for(;(p=c.exec(n))!==null;)f.x=parseFloat(p[1]),f.y=parseFloat(p[2]),f.z=parseFloat(p[3]),t++;for(;(p=s.exec(n))!==null;)l.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),u.push(f.x,f.y,f.z),e++,g++;t!==1&&console.error(`THREE.STLLoader: Something isn't right with the normal of face number `+a),e!==3&&console.error(`THREE.STLLoader: Something isn't right with the vertices of face number `+a),a++}let o=h,_=g-h;t.userData.groupNames=d,t.addGroup(o,_,m),m++}return t.setAttribute(`position`,new yr(l,3)),t.setAttribute(`normal`,new yr(u,3)),t}function a(e){return typeof e==`string`?e:new TextDecoder().decode(e)}function o(e){if(typeof e==`string`){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer||t}return e}let s=o(e);return t(s)?r(s):i(a(e))}};function Iu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Lu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Lu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Lu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new gr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Ru=6e3;function J(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function zu(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=J(n,r),l=J(n+1,r),u=J(n,r+1),d=J(n+1,r+1);return V.lerp(V.lerp(c,l,o),V.lerp(u,d,o),s)}function Bu(e,t){let n=0,r=.5,i=1;for(let a=0;a<4;a++)n+=r*zu(e*i,t*i),r*=.5,i*=2.05;return n}var Vu=5.5,Hu=[],Uu=[],Wu=160,Gu=new Map;function Ku(e,t){return`${e},${t}`}function qu(e){let t=Wu,n=Math.floor((Math.min(e.ax,e.bx)-e.half)/t),r=Math.floor((Math.max(e.ax,e.bx)+e.half)/t),i=Math.floor((Math.min(e.az,e.bz)-e.half)/t),a=Math.floor((Math.max(e.az,e.bz)+e.half)/t);for(let t=n;t<=r;t++)for(let n=i;n<=a;n++){let r=Ku(t,n),i=Gu.get(r);i||(i=[],Gu.set(r,i)),i.push(e)}}function Ju(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s||1,l=((e-n)*o+(t-r)*s)/c;return l=Math.max(0,Math.min(1,l)),Math.hypot(e-(n+l*o),t-(r+l*s))}function Yu(e,t){let n=Wu,r=Math.floor(e/n),i=Math.floor(t/n),a=1e9,o=Vu;for(let n=r-1;n<=r+1;n++)for(let r=i-1;r<=i+1;r++){let i=Gu.get(Ku(n,r));if(i)for(let n of i){let r=Ju(e,t,n.ax,n.az,n.bx,n.bz);r<a&&(a=r,o=n.half)}}return{dist:a,half:o}}function Xu(e,t){let n=Math.round(e/800)*800,r=Math.abs(e),i=Math.abs(e-n),a=Math.round(t/1200)*1200,o=Math.abs(t-a),s=o<7.4&&Math.abs(e)>10?o:Math.min(r,i),c=Yu(e,t);return Math.min(s,c.dist)}function Zu(e,t){if(Math.abs(e)<10)return!0;let n=Math.round(e/800)*800;if(Math.abs(e-n)<7)return!0;let r=Math.round(t/1200)*1200;if(Math.abs(t-r)<7&&Math.abs(e)>10)return!0;let i=Yu(e,t);return i.dist<i.half}var Qu=1,$u=1;function ed(e,t){Qu=e,$u=t}function Y(e,t){let n=Xu(e,t),r=Math.abs(e),i=V.smoothstep(r,14,490),a=Math.sin(e*.0028)*Math.cos(t*.0024)*3.2*Qu+Math.sin(e*.007+t*.005)*2.2*Qu+Math.cos(t*.0055-e*.0035)*1.6*Qu;a+=(Bu(e*.0045,t*.0045)-.38)*9*Qu,a+=(Bu(e*.01,t*.009)-.5)*4.5*$u,a+=(Bu(e*.022,t*.02)-.5)*1.6*$u;let o=V.smoothstep(r,320,1400),s=(e,t)=>{let n=Bu(e,t);return 1-Math.abs(n*2-1)},c=s(e*5e-4+2.1,t*45e-5),l=s(e*35e-5-1.4,t*55e-5+4.2),u=Math.max(0,Math.sin(e*.0011+.4)*Math.cos(t*85e-5))**1.35,d=(c**1.6*28+l**1.75*22+u*16+(c*l)**.95*12)*o*(.85+Qu*.35);d+=(c**1.15*8+l**1.2*6)*V.smoothstep(r,220,900)*Qu;let f=V.smoothstep(Math.abs(t),1100,2800);d+=s(e*6e-4,t*4e-4+9)**1.65*32*f*o;let p=(Bu(e*.05,t*.05)-.5)*1.2*$u+(Bu(e*.12,t*.12)-.5)*.35*$u,m=0;r>10.4&&r<22&&(m=Math.sin((r-10.4)/11.5*Math.PI)*.55);let h=a*i+d+p*(.35+.65*i)-m;if(n<17&&r>40){let e=V.clamp(1-(n-7)/10,0,1),t=e*e*(3-2*e);h*=1-t*.2}return r<10&&(h=(1-r/10)*.08+Math.sin(t*.28)*.02),h>36&&(h=36+(h-36)*.28),h>52&&(h=52),h}function td(e,t,n){let r=.6,i=Y(e-r,t),a=Y(e+r,t),o=Y(e,t-r),s=Y(e,t+r);return n.set(i-a,2*r,o-s).normalize()}function nd(){let t=1024,n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`);r.fillStyle=`#5a6e38`,r.fillRect(0,0,t,t);for(let e=0;e<18;e++)r.fillStyle=Math.random()>.45?`rgba(${140+Math.random()*50},${120+Math.random()*40},${40+Math.random()*30},${.18+Math.random()*.2})`:`rgba(${55+Math.random()*40},${90+Math.random()*50},${35+Math.random()*25},${.15+Math.random()*.2})`,r.fillRect(Math.random()*t,Math.random()*t,40+Math.random()*180,30+Math.random()*120);for(let e=0;e<28e3;e++){let e=Math.random()*t,n=Math.random()*t;r.fillStyle=`rgb(${42+Math.floor(Math.random()*60)},${78+Math.floor(Math.random()*80)},${28+Math.floor(Math.random()*40)})`,r.fillRect(e,n,1+Math.random()*2.5,1+Math.random()*6)}for(let e=0;e<140;e++)r.fillStyle=`rgba(${125+Math.random()*45},${105+Math.random()*35},55,${.12+Math.random()*.28})`,r.beginPath(),r.ellipse(Math.random()*t,Math.random()*t,8+Math.random()*36,4+Math.random()*18,Math.random()*Math.PI,0,Math.PI*2),r.fill();for(let e=0;e<40;e++){r.strokeStyle=`rgba(55,48,30,${.15+Math.random()*.22})`,r.lineWidth=1+Math.random()*2.5,r.beginPath();let e=Math.random()*t,n=Math.random()*t;r.moveTo(e,n),r.quadraticCurveTo(e+(Math.random()-.5)*100,n+(Math.random()-.5)*100,e+(Math.random()-.5)*160,n+(Math.random()-.5)*160),r.stroke()}let i=new Fi(n);return i.wrapS=i.wrapT=e,i.repeat.set(160,160),i.anisotropy=8,i.colorSpace=Re,i}function rd(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,256,0);r.addColorStop(0,`#323234`),r.addColorStop(.5,`#3c3c40`),r.addColorStop(1,`#323234`),n.fillStyle=r,n.fillRect(0,0,256,256);for(let e=0;e<1100;e++)n.fillStyle=`rgba(${38+Math.random()*36},${38+Math.random()*34},${40+Math.random()*36},${.12+Math.random()*.35})`,n.fillRect(Math.random()*256,Math.random()*256,2+Math.random()*6,2+Math.random()*4);for(let e=0;e<48;e++){n.strokeStyle=`rgba(18,18,20,${.28+Math.random()*.4})`,n.lineWidth=1,n.beginPath();let e=Math.random()*256;n.moveTo(e,0);for(let t=0;t<256;t+=16)n.lineTo(e+(Math.random()-.5)*10,t);n.stroke()}n.fillStyle=`#d0b84a`;for(let e=0;e<256;e+=28)n.globalAlpha=.6+Math.random()*.4,n.fillRect(125,e,6,12+Math.random()*5);n.globalAlpha=1,n.fillStyle=`#b0b0a8`,n.fillRect(8,0,4,256),n.fillRect(244,0,4,256),n.fillStyle=`rgba(90,88,78,0.45)`,n.fillRect(0,0,8,256),n.fillRect(248,0,8,256);let i=new Fi(t);return i.wrapS=i.wrapT=e,i.repeat.set(1,140),i.anisotropy=4,i.colorSpace=Re,i}function id(){let e=[];for(let t of[{r:1.05,h:.42,y:-.28},{r:.88,h:.4,y:-.02},{r:.68,h:.38,y:.24},{r:.42,h:.32,y:.46}]){let n=new Vi(t.r,t.h,7);n.translate(0,t.y,0),e.push(n)}let t=Iu(e);for(let t of e)t.dispose();return t??new Vi(1,1,7)}function ad(e,t){let n=new Float32Array(t*16),r=new $t;for(let i=0;i<t;i++)e.getMatrixAt(i,r),r.toArray(n,i*16);return n}function od(e){let t=new On;t.name=`cow`;let n=new K({color:15920870,roughness:.92}),r=new K({color:1842204,roughness:.95}),i=new K({color:13934736,roughness:.85}),a=e>.45?n:r,o=e>.45?r:n,s=new W(new G(1.15,.85,2.1),a);s.position.y=.95,s.castShadow=!0,t.add(s);for(let n=0;n<3;n++){let r=new W(new G(.35+e*.2,.4,.45),o);r.position.set((n-1)*.35,1.05,-.4+n*.45),t.add(r)}let c=new W(new G(.55,.5,.65),a);c.position.set(0,1.25,1.25),c.castShadow=!0,t.add(c);let l=new W(new G(.35,.28,.3),i);l.position.set(0,1.1,1.6),t.add(l);for(let e of[-1,1]){let n=new W(new G(.12,.22,.18),a);n.position.set(e*.32,1.48,1.15),t.add(n)}let u=new G(.18,.7,.18);for(let[e,n]of[[-.35,.7],[.35,.7],[-.35,-.7],[.35,-.7]]){let i=new W(u,r);i.position.set(e,.35,n),i.castShadow=!0,t.add(i)}let d=new W(new Gi(.18,6,5),i);d.position.set(0,.55,-.15),t.add(d);let f=1.35+e*.35;return t.scale.setScalar(f),t}function sd(e){Hu.length=0,Uu.length=0,Gu.clear();let t=[],n=[],r=[],i=Ru*2,a=new Wi(i,i,384,384);a.rotateX(-Math.PI/2);let o=a.attributes.position;for(let e=0;e<o.count;e++){let t=o.getX(e),n=o.getZ(e);o.setY(e,Y(t,n))}o.needsUpdate=!0,a.computeVertexNormals();let s=new W(a,new K({map:nd(),roughness:.95,metalness:0,flatShading:!1}));s.receiveShadow=!0,e.add(s);let c=new K({map:rd(),roughness:.88,metalness:.04}),l=(t,n,r,i,a,o=8)=>{let s=Math.max(o,Math.floor(t/80)),l=t/s,u=Math.sin(a),d=Math.cos(a),f=new un(0,0,0,`YXZ`);for(let o=0;o<s;o++){let s=r+u*(-t/2+(o+.5)*l),p=i+d*(-t/2+(o+.5)*l),m=Y(s,p),h=Y(s+u*l*.45,p+d*l*.45),g=Y(s-u*l*.45,p-d*l*.45),_=(m+h+g)/3,v=Math.atan2(h-g,l*.9),y=new W(new Wi(n,l+1.2),c);f.set(-Math.PI/2+v,a,0),y.quaternion.setFromEuler(f),y.position.set(s,_+.08,p),y.receiveShadow=!0,e.add(y)}};l(Ru*1.8,20,0,0,0);for(let e of[-1600,-800,800,1600,2400,-2400])l(Ru*1.6,14,e,0,0);for(let e of[-2400,-1200,1200,2400])l(Ru*1.4,13,0,e,Math.PI/2);let u=new K({color:3816e3,roughness:.7}),d=[new K({color:9080984,roughness:.85}),new K({color:12101776,roughness:.85}),new K({color:6977664,roughness:.85}),new K({color:10123880,roughness:.85}),new K({color:11049080,roughness:.85}),new K({color:8030352,roughness:.85})],f=[new K({color:6986424,metalness:.55,roughness:.22,emissive:660768,emissiveIntensity:.08}),new K({color:9089224,metalness:.6,roughness:.18,emissive:528408,emissiveIntensity:.06}),new K({color:4876928,metalness:.5,roughness:.28})],p=[new K({color:13154456,roughness:.82}),new K({color:11049080,roughness:.85}),new K({color:13682864,roughness:.8}),new K({color:9076848,roughness:.88})],m=[new K({color:9062968,roughness:.9}),new K({color:6961200,roughness:.92}),new K({color:10510408,roughness:.88}),new K({color:5918792,roughness:.9})],h=new K({color:5922920,metalness:.35,roughness:.55}),g=new K({color:6969416,roughness:.85}),_=(e,t,n,r,i)=>{let a=Math.hypot(n-e,r-t);if(a<6)return;let o={ax:e,az:t,bx:n,bz:r,half:i};Hu.push(o),qu(o);let s=Math.atan2(n-e,r-t);l(a,i*2,(e+n)*.5,(t+r)*.5,s,1)},v=(n,r,i,a,o=28)=>{if(Math.abs(n)<24||Xu(n,r)<12.5)return!1;let s=Y(n,r),c=new On,l=6,_=12,v=12,y=p[0],b=J(i,1);a===`supertall`?(l=42+Math.floor(J(i,2)*38),_=14+J(i,3)*10,v=14+J(i,4)*10,y=f[i%f.length]):a===`tower`?(l=18+Math.floor(J(i,2)*22),_=11+J(i,3)*12,v=10+J(i,4)*11,y=b>.45?f[i%f.length]:p[i%p.length]):a===`midrise`?(l=8+Math.floor(J(i,2)*10),_=9+J(i,3)*10,v=9+J(i,4)*9,y=b>.55?m[i%m.length]:p[i%p.length]):(l=3+Math.floor(J(i,2)*5),_=8+J(i,3)*6,v=7+J(i,4)*6,y=b>.4?m[i%m.length]:d[i%d.length]),_=Math.min(_,o),v=Math.min(v,o);let x=3.35+J(i,5)*.35,S=l*x,C=new W(new G(_,S,v),y);if(C.position.y=S*.5,C.castShadow=!0,C.receiveShadow=!0,c.add(C),a===`tower`||a===`supertall`){let e=S*(.18+J(i,6)*.12),t=new W(new G(_*.72,e,v*.72),y);if(t.position.y=S+e*.5,t.castShadow=!0,c.add(t),a===`supertall`&&J(i,7)>.35){let t=18+J(i,8)*40,n=new W(new G(_*.28,t,v*.28),f[0]);n.position.y=S+e+t*.5,n.castShadow=!0,c.add(n);let r=new W(new Bi(.35,.8,12+J(i,9)*20,6),h);r.position.y=S+e+t+8,c.add(r)}else if(J(i,10)>.4){let t=new W(new Bi(.2,.35,8+l*.12,5),h);t.position.y=S+e+5,c.add(t)}}else{let e=new W(new G(_*1.02,1.1,v*1.02),u);e.position.y=S+.4,c.add(e)}let w=a===`supertall`||a===`tower`?S+S*.12:S+1.2;if(J(i,11)>.25){let e=new W(new G(2.2+J(i,12)*3,1.6,2+J(i,13)*2.5),h);e.position.set((J(i,14)-.5)*_*.4,w,(J(i,15)-.5)*v*.4),c.add(e)}if(a!==`supertall`&&J(i,16)>.62){let e=new W(new Bi(1.4,1.5,2.8,8),g);e.position.set(_*.25,w+1.2,-v*.2),c.add(e)}if((a===`midrise`||a===`walkup`)&&J(i,17)>.4){let e=new W(new G(_*1.06,.45,v*1.06),p[0]);e.position.y=S*(.35+J(i,18)*.3),c.add(e)}if(a===`walkup`||a===`midrise`){let e=new K({color:1714232,emissive:3820072,emissiveIntensity:.15+J(i,20)*.25,roughness:.35,metalness:.2}),t=3+Math.floor(J(i,21)*2),n=Math.min(l-1,a===`walkup`?4:6);for(let r=0;r<n;r++)for(let n=0;n<t;n++){if(J(i+r*7+n,22)<.18)continue;let a=new W(new G(1.1,1.35,.08),e),o=-_*.35+n/Math.max(t-1,1)*_*.7,s=x*1.2+r*x;a.position.set(o,s,v*.5+.05),c.add(a)}let r=new W(new G(2.2,2.6,.12),new K({color:2760728,roughness:.85}));r.position.set(0,1.35,v*.5+.08),c.add(r)}return c.position.set(n,s,r),c.rotation.y=Math.floor(J(i,19)*4)*Math.PI/2,e.add(c),t.push(c),!0},y=(e,t,n,r,i)=>{Uu.push({name:r,x:e,z:t});let a=[],o=[],s=0;for(let t=0;t<=i.ns;t++)a.push(e-i.ns*(i.blockMin+i.blockMax)*.25+s),s+=i.blockMin+J(n+t,2)*(i.blockMax-i.blockMin)+(J(n+t,3)-.5)*6;{let t=(a[0]+a[a.length-1])*.5;for(let n=0;n<a.length;n++)a[n]+=e-t}let c=0;for(let e=0;e<=i.ew;e++)o.push(t-i.ew*(i.blockMin+i.blockMax)*.25+c),c+=i.blockMin+J(n+e,4)*(i.blockMax-i.blockMin)+(J(n+e,5)-.5)*5;{let e=(o[0]+o[o.length-1])*.5;for(let n=0;n<o.length;n++)o[n]+=t-e}for(let e=0;e<a.length;e++){let t=e===Math.floor(a.length/2)||e%5==0?i.streetHalf+2.2:i.streetHalf;for(let n=0;n<o.length-1;n++)_(a[e],o[n],a[e],o[n+1],t)}for(let e=0;e<o.length;e++){let t=e===Math.floor(o.length/2)||e%4==0?i.streetHalf+1.8:i.streetHalf;for(let n=0;n<a.length-1;n++)_(a[n],o[e],a[n+1],o[e],t)}let l=0,u=Math.floor((a.length-1)/2),d=Math.floor((o.length-1)/2),f=i.streetHalf+9;for(let e=0;e<a.length-1&&l<i.target;e++)for(let t=0;t<o.length-1&&l<i.target;t++){let r=a[e]+f,s=a[e+1]-f,c=o[t]+f,p=o[t+1]-f;if(s-r<14||p-c<14)continue;let m=Math.hypot(e-u,t-d),h=m<3.5,g=m<6.5,_=s-r,y=p-c,b=h||g?2:1;for(let e=0;e<2&&l<i.target;e++)for(let t=0;t<b&&l<i.target;t++){let a=(e+.5)/2,o=(t+.5)/b,s=_/2,u=y/b,d=(J(n+l,21)-.5)*s*.12,f=(J(n+l,22)-.5)*u*.12,p=r+_*a+d,m=c+y*o+f;if(Math.abs(p)<26||Xu(p,m)<i.streetHalf+8)continue;let x=`walkup`,S=J(n+l*3,23);x=h?S>.88?`supertall`:S>.35?`tower`:`midrise`:g?S>.92?`supertall`:S>.45?`tower`:S>.15?`midrise`:`walkup`:S>.7?`midrise`:S>.35?`tower`:`walkup`;let C=Math.min(s,u)*.72;v(p,m,n+l*17,x,C)&&l++}}if(l<i.target)for(let r=0;r<12&&l<i.target;r++){let a=e+(J(n+r,30)-.5)*70,o=t+(J(n+r,31)-.5)*70;Xu(a,o)<i.streetHalf+10||v(a,o,n+9e3+r,r<3?`supertall`:`tower`,22)&&l++}};y(1100,700,101,`PRAIRIE CITY`,{ns:16,ew:14,blockMin:52,blockMax:72,streetHalf:6.5,target:560}),y(-1400,1750,202,`FLATLAND`,{ns:14,ew:12,blockMin:50,blockMax:70,streetHalf:6.2,target:480}),y(2200,-950,303,`RIDGEVIEW`,{ns:14,ew:12,blockMin:52,blockMax:74,streetHalf:6.4,target:460}),y(220,380,404,`CROSSROADS`,{ns:7,ew:6,blockMin:48,blockMax:64,streetHalf:6,target:120}),y(-700,-780,505,`MILLTOWN`,{ns:6,ew:5,blockMin:46,blockMax:62,streetHalf:5.8,target:90}),y(1550,1600,606,`EAST FORK`,{ns:6,ew:5,blockMin:48,blockMax:64,streetHalf:6,target:100});let b=(n,r,i=1.5)=>{let a=Y(n,r),o=new On,s=new K({color:13157032,roughness:.7}),c=new W(new Bi(5.5*i,6.2*i,38*i,14),s);c.position.y=19*i,c.castShadow=!0,o.add(c);for(let e of[-1,1]){let t=new W(new Bi(3.2*i,3.6*i,22*i,10),s);t.position.set(e*8.5*i,11*i,0),t.castShadow=!0,o.add(t)}let l=new W(new G(14*i,8*i,14*i),new K({color:11578e3,roughness:.75}));l.position.y=42*i,l.castShadow=!0,o.add(l);let u=new W(new G(18*i,.35*i,2.2*i),h);u.position.set(0,38*i,0),o.add(u),o.position.set(n,a,r),e.add(o),t.push(o)},x=(n,r,i=1.5)=>{let a=Y(n,r),o=new On,s=new K({color:5922920,roughness:.7}),c=24*i;for(let[e,t]of[[-4.5,-4.5],[4.5,-4.5],[-4.5,4.5],[4.5,4.5]]){let n=new W(new Bi(.28*i,.35*i,c,6),s);n.position.set(e*i,c*.5,t*i),o.add(n)}let l=new W(new Gi(6.5*i,12,10),new K({color:13160664,metalness:.35,roughness:.45}));l.position.set(0,c+2*i,0),l.castShadow=!0,o.add(l),o.position.set(n,a,r),e.add(o),t.push(o)};b(160,160,1.55),b(860,240,1.4),b(-780,420,1.45),b(80,2460,1.6),x(-70,180,1.55),x(840,260,1.4),x(-1580,1450,1.45),x(120,350,1.5);{let t=new K({color:6045744,roughness:.9}),r=[];for(let e=-5800;e<5800;e+=64)r.push(e);let i=r.length,a=new fi(new G(.45,7.2,.45),t,i),o=new fi(new G(3.2,.25,.25),t,i);a.castShadow=!0;let s=new Dn,c=new Float32Array(i),l=new Float32Array(i),u=new Float32Array(i),d=new Float32Array(i),f=new Float32Array(i);for(let e=0;e<i;e++){let t=r[e],n=Y(-16,t);c[e]=-16,l[e]=n,u[e]=t,d[e]=7.2,f[e]=.9,s.position.set(-16,n+3.6,t),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrix(),a.setMatrixAt(e,s.matrix),s.position.set(-16,n+6.6,t),s.updateMatrix(),o.setMatrixAt(e,s.matrix)}a.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,e.add(a),e.add(o),n.push({canopy:o,trunks:a,count:i,x:c,y:l,z:u,tall:d,wide:f,canopyMats:ad(o,i),trunkMats:ad(a,i)})}let S=new K({color:9124394,roughness:.85}),C=new K({color:4868682,roughness:.7}),w=new K({color:14209216,roughness:.75}),T=new K({color:1712176,roughness:.4,metalness:.15});for(let n=0;n<95;n++){let i=(J(n,3)-.5)*Ru*1.7,a=(J(n,7)-.5)*Ru*1.7;if(Xu(i,a)<55)continue;let o=Y(i,a),s=1.45+J(n,10)*.45,c=new On,l=new W(new G(16*s,8*s,12*s),S);l.position.y=4*s,l.castShadow=!0,c.add(l);let u=new W(new G(17*s,.4*s,8.2*s),C);u.position.set(0,9.2*s,-2.6*s),u.rotation.x=.45,u.castShadow=!0,c.add(u);let d=new W(new G(17*s,.4*s,8.2*s),C);d.position.set(0,9.2*s,2.6*s),d.rotation.x=-.45,d.castShadow=!0,c.add(d);let f=new W(new G(17.2*s,.25*s,.5*s),C);f.position.set(0,10.6*s,0),c.add(f);let p=new W(new G(5.5*s,6*s,.35*s),new K({color:2758676,roughness:.95}));p.position.set(0,3.1*s,6.1*s),c.add(p);let m=new W(new G(2.4*s,2.2*s,.2*s),w);m.position.set(0,7.2*s,6.05*s),c.add(m);for(let e of[-5,5]){let t=new W(new G(1.6*s,1.4*s,.15*s),T);t.position.set(e*s,4.2*s,6.05*s),c.add(t)}for(let e of[-1,1])for(let t of[-1,1]){let n=new W(new G(.25*s,8.1*s,.25*s),w);n.position.set(e*7.9*s,4*s,t*5.9*s),c.add(n)}if(J(n,8)>.4){let e=new W(new Bi(2.4*s,2.8*s,14*s,12),new K({color:11055288,metalness:.25,roughness:.55}));e.position.set(11*s,7*s,0),e.castShadow=!0,c.add(e);let t=new W(new Vi(2.9*s,2.2*s,12),C);t.position.set(11*s,15.2*s,0),c.add(t)}c.position.set(i,o,a),c.rotation.y=J(n,9)*Math.PI*2,e.add(c),t.push(c);let h=2+Math.floor(J(n,21)*4);for(let t=0;t<h;t++){let o=J(n,30+t)*Math.PI*2,s=14+J(n,40+t)*28,c=i+Math.cos(o)*s,l=a+Math.sin(o)*s;if(Xu(c,l)<18)continue;let u=od(J(n,50+t));u.position.set(c,Y(c,l),l),u.rotation.y=J(n,60+t)*Math.PI*2,e.add(u),r.push(u)}}for(let t=0;t<70;t++){let n=(J(t,71)-.5)*Ru*1.5,i=(J(t,72)-.5)*Ru*1.5;if(Xu(n,i)<40)continue;let a=od(J(t,73));a.position.set(n,Y(n,i),i),a.rotation.y=J(t,74)*Math.PI*2,e.add(a),r.push(a)}{let t=new K({color:6969408,roughness:.95}),r=new fi(new G(.22,1.8,.22),t,900),i=new Dn,a=new Float32Array(900),o=new Float32Array(900),s=new Float32Array(900),c=new Float32Array(900),l=new Float32Array(900),u=0;for(let e of[-1600,-800,800,1600])for(let t=-2800;t<2800&&u<900;t+=22){if(J(e,t)<.3)continue;let n=e+(e>0?1:-1)*12,d=Y(n,t);a[u]=n,o[u]=d,s[u]=t,c[u]=1.8,l[u]=.4,i.position.set(n,d+.9,t),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrix(),r.setMatrixAt(u++,i.matrix)}r.count=u,r.instanceMatrix.needsUpdate=!0,e.add(r),n.push({canopy:r,trunks:null,count:u,x:a,y:o,z:s,tall:c,wide:l,canopyMats:ad(r,u),trunkMats:null})}let E=new K({color:3099176,roughness:1,flatShading:!0}),D=new K({color:4864040,roughness:1}),O=1400,k=id(),A=new Bi(.14,.24,1,6),ee=new fi(k,E,O),j=new fi(A,D,O);ee.castShadow=!0,j.castShadow=!0;let M=new Dn,N=new Float32Array(O),te=new Float32Array(O),P=new Float32Array(O),ne=new Float32Array(O),re=new Float32Array(O),ie=0;for(let e=0;e<O*3&&ie<O;e++){let t=(J(e,11)-.5)*Ru*1.9,n=(J(e,13)-.5)*Ru*1.9;if(Xu(t,n)<18||!(Xu(t,n)<80)&&J(e,14)<.28)continue;let r=Y(t,n),i=9+J(e,17)*14,a=3.2+J(e,15)*4.5;N[ie]=t,te[ie]=r,P[ie]=n,ne[ie]=i,re[ie]=a,M.position.set(t,r+i*.55,n),M.scale.set(a,i,a),M.rotation.set(0,J(e,18)*Math.PI*2,0),M.updateMatrix(),ee.setMatrixAt(ie,M.matrix),M.position.set(t,r+i*.18,n),M.scale.set(a*.22,i*.4,a*.22),M.updateMatrix(),j.setMatrixAt(ie,M.matrix),ie++}ee.count=ie,j.count=ie,ee.instanceMatrix.needsUpdate=!0,j.instanceMatrix.needsUpdate=!0,e.add(ee),e.add(j),n.push({canopy:ee,trunks:j,count:ie,x:N,y:te,z:P,tall:ne,wide:re,canopyMats:ad(ee,ie),trunkMats:ad(j,ie)});let ae=0,oe=new fi(k,E,500),se=new fi(A,D,500);oe.castShadow=!0,se.castShadow=!0;let ce=new Float32Array(500),F=new Float32Array(500),le=new Float32Array(500),ue=new Float32Array(500),de=new Float32Array(500);for(let e of[-800,800,-1600,1600])for(let t=-2500;t<2500&&!(ae>=500);t+=22){if(J(e,t)<.2)continue;let n=e+(e>0?1:-1)*(21+J(t,19)*10),r=t+(J(t,20)-.5)*8,i=Y(n,r),a=10+J(t,21)*10,o=3.5+J(t,22)*2;ce[ae]=n,F[ae]=i,le[ae]=r,ue[ae]=a,de[ae]=o,M.position.set(n,i+a*.55,r),M.scale.set(o,a,o),M.rotation.set(0,J(t,23)*6,0),M.updateMatrix(),oe.setMatrixAt(ae,M.matrix),M.position.set(n,i+a*.18,r),M.scale.set(o*.2,a*.38,o*.2),M.updateMatrix(),se.setMatrixAt(ae,M.matrix),ae++}oe.count=ae,se.count=ae,oe.instanceMatrix.needsUpdate=!0,se.instanceMatrix.needsUpdate=!0,e.add(oe),e.add(se),n.push({canopy:oe,trunks:se,count:ae,x:ce,y:F,z:le,tall:ue,wide:de,canopyMats:ad(oe,ae),trunkMats:ad(se,ae)});let fe=new K({color:6972764,roughness:1,flatShading:!0});for(let t=0;t<320;t++){let n=(J(t,21)-.5)*Ru*1.75,i=(J(t,23)-.5)*Ru*1.75;if(Xu(n,i)<14)continue;let a=Y(n,i),o=new W(new Ui(.7+J(t,25)*2,0),fe);o.position.set(n,a+.4,i),o.rotation.set(J(t,26),J(t,27),J(t,28)),o.castShadow=!0,e.add(o),r.push(o)}let pe=new K({color:2775608,roughness:.8});for(let n=-2400;n<2800;n+=320){let r=Y(14,n),i=new On,a=new W(new Bi(.22,.28,7.5,6),new K({color:5592405}));a.position.y=3.75,i.add(a);let o=new W(new G(6.5,3.4,.22),pe);o.position.y=7.8,i.add(o),i.position.set(14,r,n),e.add(i),t.push(i)}e.background=new U(9082532),e.fog=new In(6977672,22e-5);let me=new Za(16769732,1.25);return me.position.set(-120,95,35),me.castShadow=!0,me.shadow.mapSize.set(2048,2048),me.shadow.camera.near=10,me.shadow.camera.far=700,me.shadow.camera.left=-180,me.shadow.camera.right=180,me.shadow.camera.top=180,me.shadow.camera.bottom=-180,me.shadow.bias=-15e-5,e.add(me),e.add(me.target),e.add(new Qa(6977672,.4)),{sun:me,ground:s,buildings:t,treeBatches:n,props:r}}function cd(e){e.computeBoundingBox();let t=e.boundingBox,n=new H;t.getSize(n);let r=e.attributes.position,i=new Float32Array(r.count*2),a=Math.max(n.x,1e-4),o=Math.max(n.y,1e-4),s=Math.max(n.z,1e-4);for(let e=0;e<r.count;e++){let n=(r.getX(e)-t.min.x)/a,c=(r.getY(e)-t.min.y)/o,l=(r.getZ(e)-t.min.z)/s;i[e*2]=n*.55+l*.45,i[e*2+1]=c*.7+l*.3}e.setAttribute(`uv`,new gr(i,2))}function ld(){let t=document.createElement(`canvas`);t.width=512,t.height=512;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,`#9aa6b4`),r.addColorStop(.45,`#6e7a88`),r.addColorStop(1,`#4a5460`),n.fillStyle=r,n.fillRect(0,0,512,512),n.strokeStyle=`rgba(20,24,28,0.35)`,n.lineWidth=2;for(let e=0;e<10;e++){let t=40+e*48;n.beginPath(),n.moveTo(0,t),n.lineTo(512,t+e%2*6),n.stroke()}n.fillStyle=`#e0a020`,n.fillRect(0,210,512,38),n.fillStyle=`#f0c14a`,n.fillRect(0,218,512,10);for(let e=0;e<220;e++){let e=Math.random()*512,t=260+Math.random()*240,r=1+Math.random()*4;n.fillStyle=`rgba(${40+Math.random()*40},${30+Math.random()*30},20, ${.15+Math.random()*.35})`,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill()}let i=new Fi(t);return i.colorSpace=Re,i.wrapS=i.wrapT=e,i.anisotropy=4,i}function ud(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#888`,n.fillRect(0,0,256,256);for(let e=0;e<800;e++){let e=60+Math.random()*140;n.fillStyle=`rgb(${e},${e},${e})`,n.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*3,1+Math.random()*3)}n.fillStyle=`#333`,n.fillRect(0,100,256,24);let r=new Fi(t);return r.wrapS=r.wrapT=e,r}var dd=[{id:`tiv2`,name:`TIV-2`,tagline:`Armored intercept · claws`,model:`/models/tiv2.stl`,color:3817544,length:4.6,orient:{x:Math.PI/2,y:Math.PI,z:0},speedMult:1,gripMult:1,armorMult:1.15,tiv:!0,gear:!1,stats:{speed:3,grip:4,armor:5},driverSeat:{x:-.52,y:1.36,z:.38},driverLookPitch:-.06,price:2400},{id:`sedan`,name:`County Cruiser`,tagline:`Light chase sedan`,model:null,procedural:`sedan`,color:4024986,length:4.3,speedMult:1.08,gripMult:1.05,armorMult:.85,tiv:!1,stats:{speed:4,grip:4,armor:2},driverSeat:{x:-.38,y:1.12,z:.42},driverLookPitch:-.1,price:0},{id:`suv`,name:`Plains Runner`,tagline:`High-clearance SUV`,model:null,procedural:`suv`,color:5916728,length:4.9,speedMult:.94,gripMult:.92,armorMult:1.05,tiv:!1,stats:{speed:3,grip:3,armor:4},driverSeat:{x:-.42,y:1.4,z:.22},driverLookPitch:-.05,price:750},{id:`custom`,name:`Workshop Build`,tagline:`Your STL → models/custom-car.stl`,model:`/models/custom-car.stl`,procedural:`pickup`,color:12886096,length:4.7,speedMult:1.02,gripMult:1,armorMult:1,tiv:!1,stats:{speed:3,grip:3,armor:3},optional:!0,driverSeat:{x:-.4,y:1.28,z:.78},driverLookPitch:-.08,price:1100}],fd=`stormchase.carId`;function pd(e){return dd.find(t=>t.id===e)??dd.find(e=>e.id===`sedan`)??dd[0]}function md(){try{let e=localStorage.getItem(fd);if(e&&dd.some(t=>t.id===e))return e}catch{}return`sedan`}function hd(e){try{localStorage.setItem(fd,e)}catch{}}async function gd(e){if(!e.model||!e.optional)return!0;try{if((await fetch(e.model,{method:`HEAD`,cache:`no-store`})).ok)return!0;let t=await fetch(e.model,{method:`GET`,headers:{Range:`bytes=0-16`},cache:`no-store`});return t.ok||t.status===206}catch{return!1}}function _d(e){let t=Math.max(0,Math.min(5,Math.round(e)));return`●`.repeat(t)+`○`.repeat(5-t)}var vd=48,yd=28,bd=56,xd=.28,Sd=1.55,Cd=5.2,wd=2.05,Td=3.35,Ed=3.8,Dd=.62,Od=.82,kd=1.38,Ad=10.2,jd=3.1,Md=class{group=new On;mesh=new On;visual=new On;speed=0;lateral=0;steerAngle=0;heading=0;loaded=!1;carHeight=1.8;onRoad=!0;damage=0;wetness=0;airborne=!1;overturned=!1;deployed=!1;deployAmount=0;carId=`tiv2`;hasTiv=!0;speedMult=1;gripMult=1;armorMult=1;paintHex=16777215;airVel=new H;tossSpin=0;angVel=new H;flipTimer=0;claws=[];clawRestY=[];skirts=[];lean=0;pitch=0;susp=0;normal=new H(0,1,0);windScratch=new H;lookQuat=new kt;groundQuat=new kt;yawQuat=new kt;up=new H(0,1,0);chassisUp=new H;tmpQuat=new kt;tmpEuler=new un;paintMap=ld();roughMap=ud();bodyMaterial=new K({map:this.paintMap,roughnessMap:this.roughMap,color:16777215,metalness:.45,roughness:.42,side:2});cabinLight=new Ja(16770760,0,5,1.4);headLightL=new Ka(16773846,0,55,.42,.45,1.2);headLightR=new Ka(16773846,0,55,.42,.45,1.2);brakeGlow=[];driverLocal=new H(-.48,1.36,.4);driverLookPitch=-.08;pendingSeat=null;pendingLookPitch=-.08;dust;dustMat;dustPos;dustIdx=0;constructor(){this.mesh.add(this.visual),this.group.add(this.mesh),this.cabinLight.position.set(-.48,1.66,.4),this.mesh.add(this.cabinLight),this.group.position.set(0,Y(0,40),40),this.dustPos=new Float32Array(540);let e=new jr;e.setAttribute(`position`,new gr(this.dustPos,3)),this.dustMat=new Di({color:11047016,size:1.4,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),this.dust=new Mi(e,this.dustMat),this.dust.frustumCulled=!1,this.dust.layers.set(1),this.group.add(this.dust)}clearVisual(){for(;this.visual.children.length;){let e=this.visual.children[0];this.visual.remove(e),e.traverse(e=>{if(e instanceof W){e.geometry?.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e&&e!==this.bodyMaterial&&e.dispose()}})}this.claws.length=0,this.clawRestY.length=0,this.skirts.length=0,this.brakeGlow.length=0,this.loaded=!1}applyDefStats(e){this.carId=e.id,this.hasTiv=e.tiv,this.speedMult=e.speedMult,this.gripMult=e.gripMult,this.armorMult=e.armorMult,this.paintHex=e.color,this.bodyMaterial.roughness=.42,this.bodyMaterial.metalness=.45,this.pendingSeat=e.driverSeat,this.pendingLookPitch=e.driverLookPitch??-.08}applyDriverSeat(e,t){this.driverLocal.set(e.x,e.y,e.z),this.driverLookPitch=t??this.pendingLookPitch,this.cabinLight.position.set(e.x,e.y+.06,e.z-.12)}getDriverLookPitch(){return this.driverLookPitch}async loadFromDef(e){if(this.clearVisual(),this.applyDefStats(e),e.model)try{await this.loadStl(e),this.loaded=!0;return}catch(t){if(console.warn(`STL load failed for ${e.id}`,t),!e.optional&&!e.procedural){this.addProcedural(`sedan`,e.length,e.tiv),this.loaded=!0;return}}let t=e.procedural??`sedan`;this.addProcedural(t,e.length,e.tiv),this.loaded=!0}async load(e){let t={...pd(`tiv2`),model:e};await this.loadFromDef(t)}async loadStl(e){let t=await new Fu().loadAsync(e.model);t.computeBoundingBox();let n=t.boundingBox,r=new H;n.getSize(r);let i=new H;n.getCenter(i),t.translate(-i.x,-i.y,-i.z);let a=e.orient?.x??-Math.PI/2,o=e.orient?.y??-Math.PI/2,s=e.orient?.z??0;a&&t.rotateX(a),o&&t.rotateY(o),s&&t.rotateZ(s),t.computeBoundingBox();let c=new H;t.boundingBox.getSize(c);let l=e.length/Math.max(c.x,c.y,c.z,1e-6);t.scale(l,l,l),t.computeBoundingBox();let u=t.boundingBox;t.translate(0,-u.min.y,0),t.computeVertexNormals(),t.computeBoundingBox(),this.carHeight=t.boundingBox.max.y;let d=t.boundingBox,f={x:d.min.x*.35,y:V.clamp(this.pendingSeat?.y??this.carHeight*.62,this.carHeight*.45,this.carHeight*.78),z:d.max.z*.18},p=this.pendingSeat??f;this.applyDriverSeat({x:p.x,y:V.clamp(p.y,this.carHeight*.42,this.carHeight*.82),z:p.z},this.pendingLookPitch);let m=e.gear??e.tiv;m?(cd(t),this.bodyMaterial.map=this.paintMap,this.bodyMaterial.roughnessMap=this.roughMap,this.bodyMaterial.color.setHex(e.color)):(this.bodyMaterial.map=null,this.bodyMaterial.roughnessMap=null,this.bodyMaterial.color.setHex(e.color)),this.bodyMaterial.needsUpdate=!0;let h=new W(t,this.bodyMaterial);h.castShadow=!0,h.receiveShadow=!0,this.visual.add(h),m&&(this.addLights(t.boundingBox),this.addTivGear(t.boundingBox)),this.markCarLayer()}addProcedural(e,t,n){let r=new K({color:1384496,metalness:.85,roughness:.12,transparent:!0,opacity:.72}),i=new K({color:e===`pickup`?2764340:1842722,metalness:e===`suv`?.45:.65,roughness:e===`suv`?.7:.5}),a=new K({color:13160664,metalness:.9,roughness:.28}),o=new K({color:921618,metalness:.05,roughness:.95}),s=new K({color:e===`sedan`?11581632:3817028,metalness:.75,roughness:.4}),c=new K({color:1711136,roughness:.9}),l=t,u=e===`suv`?2.08:e===`pickup`?2.02:1.88,d=e===`suv`?.38:e===`pickup`?.34:.28,f=e===`suv`?1.08:e===`pickup`?.92:.82,p=e===`suv`?.88:e===`pickup`?.72:.62,m=e===`pickup`?.58:e===`suv`?.08:.12,h=e===`pickup`?l*.36:e===`suv`?l*.56:l*.5,g=e===`suv`?.44:e===`pickup`?.42:.38,_=f*.5+d,v=new W(new G(u,f,l*.92),this.bodyMaterial);v.position.y=_,v.castShadow=!0,v.receiveShadow=!0,cd(v.geometry),this.visual.add(v);let y=new W(new G(u*.94,f*.42,l*.28),this.bodyMaterial);y.position.set(0,_+f*.12,l*.32),y.castShadow=!0,cd(y.geometry),this.visual.add(y);let b=new W(new G(u*.86,p,h),this.bodyMaterial);b.position.set(0,_+f*.42+p*.38,m),b.castShadow=!0,cd(b.geometry),this.visual.add(b);let x=new W(new G(u*.78,p*.22,h*.88),this.bodyMaterial);x.position.set(0,b.position.y+p*.42,b.position.z-h*.02),cd(x.geometry),this.visual.add(x);let S=new W(new G(u*.76,p*.62,.05),r);S.position.set(0,b.position.y+.02,b.position.z+h*.48),S.rotation.x=-.18,this.visual.add(S);let C=new W(new G(u*.72,p*.55,.05),r);C.position.set(0,b.position.y+.02,b.position.z-h*.48),C.rotation.x=.12,this.visual.add(C);for(let e of[-1,1]){let t=new W(new G(.04,p*.48,h*.72),r);t.position.set(e*u*.44,b.position.y+.02,b.position.z),this.visual.add(t);let n=new W(new G(.12,.1,.18),i);n.position.set(u*.48*e,b.position.y-p*.05,b.position.z+h*.35),this.visual.add(n);let o=new W(new G(.04,.08,.14),a);o.position.set(u*.52*e,b.position.y-p*.05,b.position.z+h*.35),this.visual.add(o)}let w=e===`suv`?i:e===`pickup`?a:c,T=new W(new G(u*.98,f*.28,.22),w);T.position.set(0,d+f*.28,l*.48),this.visual.add(T);let E=new W(new G(u*.96,f*.26,.18),w);E.position.set(0,d+f*.26,-l*.48),this.visual.add(E);let D=new W(new G(u*.55,f*.32,.08),e===`sedan`?a:i);if(D.position.set(0,d+f*.55,l*.47),this.visual.add(D),e===`pickup`){let e=new W(new G(u*.9,f*.48,l*.4),i);e.position.set(0,d+f*.28,-l*.28),e.castShadow=!0,this.visual.add(e);for(let e of[-1,1]){let t=new W(new G(.06,f*.35,l*.38),a);t.position.set(e*u*.44,d+f*.55,-l*.28),this.visual.add(t)}}if(e===`suv`){for(let e of[-1,1]){let t=new W(new G(.06,.05,h*.85),a);t.position.set(e*u*.28,x.position.y+p*.18,b.position.z),this.visual.add(t)}let e=new W(new G(u*.7,.08,.35),i);e.position.set(0,d+.06,l*.42),this.visual.add(e)}if(e===`sedan`){let e=new W(new G(u*1.01,.04,l*.7),a);e.position.set(0,_+f*.35,.05),this.visual.add(e)}let O=new Bi(g,g,.3,14);O.rotateZ(Math.PI/2);let k=new Bi(g*.45,g*.45,.32,10);k.rotateZ(Math.PI/2);let A=[{z:l*.32,y:g},{z:-l*.3,y:g}];for(let e of A)for(let t of[-1,1]){let n=new W(O,o);n.position.set(u*.52*t,e.y,e.z),n.castShadow=!0,this.visual.add(n);let r=new W(k,s);r.position.set(t*(u*.52+.02*t),e.y,e.z),this.visual.add(r)}this.carHeight=b.position.y+p*.55;let ee={x:-u*.3,y:b.position.y+p*.02,z:b.position.z+h*.18},j=this.pendingSeat?{x:this.pendingSeat.x,y:V.clamp(this.pendingSeat.y,b.position.y-p*.2,b.position.y+p*.32),z:this.pendingSeat.z}:ee;this.applyDriverSeat(j,this.pendingLookPitch);let M=new Qn(new H(-u*.55,0,-l*.5),new H(u*.55,this.carHeight,l*.5));this.addLights(M),n&&this.addTivGear(M),this.markCarLayer()}addTivGear(e){let t=new K({color:3817544,metalness:.85,roughness:.35}),n=new K({color:1711136,metalness:.7,roughness:.45}),r=new K({color:2764340,metalness:.4,roughness:.7,side:2}),i=[{x:e.min.x+.15,z:e.max.z-.55},{x:e.max.x-.15,z:e.max.z-.55},{x:e.min.x+.15,z:e.min.z+.55},{x:e.max.x-.15,z:e.min.z+.55}];for(let e of i){let r=new On,i=new W(new Bi(.08,.1,.85,8),t);i.position.y=-.15,r.add(i);let a=new W(new Vi(.14,.55,6),n);a.position.y=-.75,a.rotation.x=Math.PI,r.add(a),r.position.set(e.x,.35,e.z),this.visual.add(r),this.claws.push(r),this.clawRestY.push(.35)}for(let t of[-1,1]){let n=new W(new G(.08,.55,3.6),r);n.position.set(t*(Math.abs(e.min.x)+.05),.55,0),this.visual.add(n),this.skirts.push(n)}}addLights(e){let t=new K({color:16774624,emissive:16771248,emissiveIntensity:.9,roughness:.25}),n=new K({color:1711136,metalness:.5,roughness:.45});for(let r of[-.55,.55]){let i=new W(new G(.28,.16,.12),n);i.position.set(r,.7,e.max.z-.08),this.visual.add(i);let a=new W(new Gi(.09,10,8),t);a.position.set(r,.7,e.max.z-.02),this.visual.add(a)}this.headLightL.position.set(-.5,.75,e.max.z),this.headLightR.position.set(.5,.75,e.max.z),this.headLightL.target.position.set(-.5,.2,e.max.z+20),this.headLightR.target.position.set(.5,.2,e.max.z+20),this.visual.add(this.headLightL),this.visual.add(this.headLightR),this.visual.add(this.headLightL.target),this.visual.add(this.headLightR.target);let r=new K({color:6684672,emissive:16717077,emissiveIntensity:.15,roughness:.5});for(let t of[-.55,.55]){let n=new W(new G(.28,.12,.06),r.clone());n.position.set(t,.72,e.min.z+.1),this.visual.add(n),this.brakeGlow.push(n)}let i=new W(new G(.55,.06,.04),r.clone());i.position.set(0,Math.max(1.1,e.max.y*.85),e.min.z+.08),this.visual.add(i),this.brakeGlow.push(i)}markCarLayer(){this.visual.traverse(e=>{e.layers.set(1)}),this.dust.layers.set(1)}setExteriorVisible(e){this.visual.visible=e}setDriverView(e,t){this.cabinLight.intensity=e?.6:0;let n=e?.4:1.6;this.headLightL.intensity=n,this.headLightR.intensity=n,e?t.layers.disable(1):t.layers.enable(1)}getDriverSeatWorld(e){return this.group.updateWorldMatrix(!0,!0),e.copy(this.driverLocal).applyMatrix4(this.mesh.matrixWorld)}reset(){this.group.position.set(0,Y(0,40),40),this.heading=0,this.speed=0,this.lateral=0,this.steerAngle=0,this.pitch=0,this.lean=0,this.damage=0,this.wetness=0,this.airborne=!1,this.overturned=!1,this.airVel.set(0,0,0),this.tossSpin=0,this.angVel.set(0,0,0),this.flipTimer=0,this.deployed=!1,this.deployAmount=0,this.mesh.rotation.set(0,0,0),this.mesh.position.y=0;for(let e=0;e<this.claws.length;e++)this.claws[e].position.y=this.clawRestY[e];for(let e of this.skirts)e.position.y=.55;this.bodyMaterial.color.setHex(this.paintHex),this.bodyMaterial.roughness=.42,this.bodyMaterial.metalness=.45;for(let e of this.brakeGlow){let t=e.material;t.emissiveIntensity=.15}}applyDebrisKick(e,t){this.deployed||this.deployAmount>.85||(this.airVel.x+=e.x,this.airVel.y+=e.y,this.airVel.z+=e.z,this.lateral+=e.x*.35,this.angVel.x+=e.z*.15+(Math.random()-.5)*t*8,this.angVel.z+=-e.x*.2+(Math.random()-.5)*t*10,this.angVel.y+=(Math.random()-.5)*t*4,(e.y>1.2||e.length()>4)&&(this.airborne=!0,this.airVel.y=Math.max(this.airVel.y,3+e.y)),this.applyStormDamage(t),this.refreshOverturned())}applyStormDamage(e){if(this.deployed||this.deployAmount>.85)return;let t=e/Math.max(.55,this.armorMult);this.damage=Math.min(1,this.damage+t);let n=this.damage,r=new U(this.paintHex);this.bodyMaterial.color.setRGB(r.r*(1-n*.35),r.g*(1-n*.4),r.b*(1-n*.45)),this.bodyMaterial.roughness=.42+n*.4,this.bodyMaterial.metalness=.45-n*.25}setWetness(e){this.wetness=V.clamp(e,0,1),this.bodyMaterial.roughness=V.lerp(.42+this.damage*.4,.18,this.wetness)}updateBrakeLights(e){for(let t of this.brakeGlow){let n=t.material;n.emissiveIntensity=e?1.4:.12}}chassisUpY(){return this.chassisUp.set(0,1,0).applyQuaternion(this.mesh.quaternion),this.chassisUp.applyQuaternion(this.group.quaternion),this.chassisUp.y}refreshOverturned(){this.overturned=this.chassisUpY()<.45}tryFlip(){return this.airborne?`Can't flip while airborne`:this.deployed?`Retract claws (R) before flipping`:this.flipTimer>0?null:(this.refreshOverturned(),!this.overturned&&this.chassisUpY()>.75?`Already upright`:(this.flipTimer=.55,this.angVel.set(0,0,0),this.tossSpin=0,this.speed*=.2,this.lateral=0,`Flipping upright…`))}tryToggleDeploy(){return this.hasTiv?this.airborne?`Can't deploy while airborne`:this.overturned?`Flip upright (G) before deploying`:!this.deployed&&Math.abs(this.speed)>4.5?`Slow below ~10 mph to deploy claws`:(this.deployed=!this.deployed,this.deployed?(this.speed=0,this.lateral=0,this.steerAngle=0,this.deployAmount=1,this.airVel.set(0,0,0),this.tossSpin=0,this.angVel.set(0,0,0),this.mesh.rotation.x=0,this.mesh.rotation.z=0,this.overturned=!1,`TIV claws DEPLOYED — planted, storm damage blocked`):`Claws retracted — mobile again`):`This ride has no TIV claws`}tickFlip(e){this.flipTimer<=0||(this.flipTimer-=e,this.tmpEuler.set(0,0,0),this.tmpQuat.setFromEuler(this.tmpEuler),this.mesh.quaternion.slerp(this.tmpQuat,1-Math.exp(-10*e)),this.mesh.rotation.setFromQuaternion(this.mesh.quaternion),this.flipTimer<=0&&(this.mesh.rotation.set(0,0,0),this.lean=0,this.pitch=0,this.overturned=!1,this.angVel.set(0,0,0)))}snapToNearestRestPose(){let e=this.mesh.rotation.x,t=this.mesh.rotation.z,n=[0,Math.PI/2,-Math.PI/2,Math.PI,-Math.PI],r=0,i=0,a=1/0;for(let o of n)for(let s of n){let n=Math.abs(V.euclideanModulo(e-o+Math.PI,Math.PI*2)-Math.PI)+Math.abs(V.euclideanModulo(t-s+Math.PI,Math.PI*2)-Math.PI);n<a&&(a=n,r=o,i=s)}this.mesh.rotation.x=r,this.mesh.rotation.z=i,this.mesh.rotation.y=0}updateDeployVisuals(e){let t=+!!this.deployed;this.deployAmount=this.deployed?1:V.damp(this.deployAmount,t,8,e);let n=this.deployAmount;for(let e=0;e<this.claws.length;e++)this.claws[e].position.y=this.clawRestY[e]-n*1.15;for(let e of this.skirts)e.position.y=.55-n*.42;this.mesh.position.y=this.susp*.04-n*.12}pinToGround(){let e=Y(this.group.position.x,this.group.position.z);this.group.position.y=e,this.airborne=!1,this.airVel.set(0,0,0),this.tossSpin=0,this.speed=0,this.lateral=0,this.mesh.rotation.x=0,this.mesh.rotation.z=0}update(e,t,n,r){let i=this.group.position.x,a=this.group.position.z;this.onRoad=Zu(i,a),td(i,a,this.normal);let o=V.clamp(1-this.normal.y,0,.55),s=this.damage,c=this.wetness,l=vd*this.speedMult,u=(this.onRoad?Ad:jd)*this.gripMult*(1-s*.35)*(1-c*.28)*(1-o*.45),d=(this.onRoad?Sd:Cd)*(1+s*.5)*(1+c*.2)*(1+o*2.4),f=(this.onRoad?1:.58)*(1-s*.25)*(1-o*.55),p=Math.abs(this.speed),m=V.clamp(1-p/l,.22,1);if(this.updateDeployVisuals(e),this.deployed){this.pinToGround(),n&&n.lengthSq()>.25&&(this.windScratch.copy(n),this.windScratch.y=0,this.windScratch.multiplyScalar(e*.012),this.group.position.add(this.windScratch),this.pinToGround()),td(this.group.position.x,this.group.position.z,this.normal),this.groundQuat.setFromUnitVectors(this.up,this.normal),this.yawQuat.setFromAxisAngle(this.up,this.heading),this.lookQuat.copy(this.groundQuat).multiply(this.yawQuat),this.group.quaternion.slerp(this.lookQuat,1-Math.exp(-8*e)),this.lean=V.damp(this.lean,0,8,e),this.pitch=V.damp(this.pitch,0,8,e),this.mesh.rotation.z=this.lean,this.mesh.rotation.x=this.pitch,this.updateBrakeLights(!0),this.dustMat.opacity=V.damp(this.dustMat.opacity,0,4,e);return}if(this.tickFlip(e),n&&!this.airborne&&this.flipTimer<=0){let t=Math.hypot(n.x,n.z);if(t>6.5||n.y>1.1){let r=(t-5)*.09*e+Math.max(0,n.y-.8)*.35*e+Math.abs(this.lateral)*.015*e,i=Math.sign(n.x*Math.cos(this.heading)-n.z*Math.sin(this.heading)||1);this.angVel.z+=i*r*(9+t*.8),this.angVel.x+=(Math.random()-.5)*r*4,this.mesh.rotation.z+=this.angVel.z*e,this.mesh.rotation.x+=this.angVel.x*e*.6,this.refreshOverturned(),(this.overturned||Math.abs(this.mesh.rotation.z)>.85)&&(this.overturned=!0,this.speed*=.55),(n.y>1.4||t>11&&this.overturned)&&(this.airborne=!0,this.airVel.set(this.speed*Math.sin(this.heading)*.35+n.x*.5,Math.max(4,n.y*.55),this.speed*Math.cos(this.heading)*.35+n.z*.5),this.angVel.x+=(Math.random()-.5)*(5+n.y),this.angVel.y+=(Math.random()-.5)*3,this.angVel.z+=i*(4+t*.4))}}if(n&&n.y>1.4&&(this.airborne||(this.airVel.y=Math.max(this.airVel.y,8+n.y*.35),this.airVel.x+=n.x*.4+this.speed*Math.sin(this.heading)*.2,this.airVel.z+=n.z*.4+this.speed*Math.cos(this.heading)*.2,this.angVel.x+=(Math.random()-.5)*(5+n.y*.9),this.angVel.z+=(Math.random()-.5)*(6+n.y*1.2),this.angVel.y+=(Math.random()-.5)*3),this.airborne=!0,this.airVel.x+=n.x*e*3.4,this.airVel.z+=n.z*e*3.4,this.airVel.y+=n.y*e*2.8,this.tossSpin+=(.9+n.y*.18)*e,this.angVel.x+=n.z*e*.55+n.y*e*.25,this.angVel.z+=-n.x*e*.55,this.angVel.y+=(n.x*.15-n.z*.1)*e,this.applyStormDamage(.22*e)),this.airborne){this.airVel.y-=16*e,n&&n.y>.35&&(this.airVel.x+=n.x*e*2.2,this.airVel.z+=n.z*e*2.2,this.airVel.y+=n.y*e*1.55,this.tossSpin+=n.y*e*.45,this.angVel.x+=n.z*e*.4+(Math.random()-.5)*n.y*e,this.angVel.z+=-n.x*e*.4+(Math.random()-.5)*n.y*e,this.angVel.y+=(Math.random()-.5)*n.y*e*.6),this.group.position.x+=this.airVel.x*e,this.group.position.y+=this.airVel.y*e,this.group.position.z+=this.airVel.z*e,this.mesh.rotation.x+=(this.angVel.x+this.tossSpin*.45)*e,this.mesh.rotation.y+=this.angVel.y*e,this.mesh.rotation.z+=(this.angVel.z+this.tossSpin*.75)*e,this.speed*=Math.max(0,1-1.2*e),this.lateral*=Math.max(0,1-1.6*e);let t=Y(this.group.position.x,this.group.position.z);if(this.group.position.y<=t+.4&&this.airVel.y<=0){let e=Math.min(1.4,Math.abs(this.airVel.y)/22);this.group.position.y=t,this.applyStormDamage(.1+e*.22),e>.55&&Math.random()<.55+e*.2?(this.airVel.y=e*9+Math.random()*4,this.airVel.x*=.7,this.airVel.z*=.7,this.angVel.x+=(Math.random()-.5)*e*8,this.angVel.z+=(Math.random()-.5)*e*10,this.angVel.y+=(Math.random()-.5)*e*3,this.tossSpin*=.7):(this.airborne=!1,this.airVel.x*=.45,this.airVel.z*=.45,this.airVel.y=0,this.speed=this.airVel.x*Math.sin(this.heading)+this.airVel.z*Math.cos(this.heading),this.lateral=this.airVel.x*Math.cos(this.heading)-this.airVel.z*Math.sin(this.heading),this.tossSpin*=.25,this.angVel.multiplyScalar(.45+e*.35),this.refreshOverturned(),!this.overturned&&this.chassisUpY()>.88&&e<.28?(this.mesh.rotation.x=0,this.mesh.rotation.z=0,this.angVel.set(0,0,0)):this.angVel.lengthSq()<1.2&&(this.snapToNearestRestPose(),this.refreshOverturned()))}let r=Ru-40;this.group.position.x=V.clamp(this.group.position.x,-r,r),this.group.position.z=V.clamp(this.group.position.z,-r,r),this.updateBrakeLights(!1);return}if(this.overturned&&this.flipTimer<=0){this.group.position.y=Y(this.group.position.x,this.group.position.z),n&&n.lengthSq()>4&&(this.angVel.x+=n.z*e*.25,this.angVel.z+=-n.x*e*.35,this.angVel.y+=(Math.random()-.5)*e,this.lateral+=(n.x*.4+n.z*.2)*e),this.angVel.multiplyScalar(Math.max(0,1-2.2*e)),this.mesh.rotation.x+=this.angVel.x*e,this.mesh.rotation.y+=this.angVel.y*e*.55,this.mesh.rotation.z+=this.angVel.z*e,this.group.position.x+=(Math.sin(this.heading)*this.speed+this.lateral*.6)*e,this.group.position.z+=(Math.cos(this.heading)*this.speed-this.lateral*.35)*e,this.speed*=Math.max(0,1-2.8*e),this.lateral*=Math.max(0,1-3.2*e),this.angVel.lengthSq()>2.5&&Math.random()<.02&&(this.airborne=!0,this.airVel.set(this.lateral*.4,3+Math.random()*4,this.speed*.3)),this.angVel.lengthSq()<.06&&Math.abs(this.speed)<.8&&(this.snapToNearestRestPose(),this.angVel.set(0,0,0)),Math.abs(t.throttle)>.2&&(this.speed+=t.throttle*3*e,this.speed=V.clamp(this.speed,-5,7),this.angVel.z+=t.steer*2.2*e),this.refreshOverturned(),this.updateBrakeLights(!0),this.dustMat.opacity=V.damp(this.dustMat.opacity,.2,4,e);return}if(this.deployed||this.deployAmount>.35)this.speed=V.damp(this.speed,0,14,e),this.lateral=V.damp(this.lateral,0,16,e),this.steerAngle=V.damp(this.steerAngle,0,10,e),this.deployed&&(this.speed=0,this.lateral=0);else if(t.steer!==0){let n=tu()?Td:wd;this.steerAngle+=t.steer*n*m*e}else this.steerAngle=V.damp(this.steerAngle,0,Ed,e);let h=tu()?Od:Dd;this.steerAngle=V.clamp(this.steerAngle,-h,h);let g=t.boost&&this.onRoad?kd:t.boost?1.15:1;if(!(this.deployed||this.deployAmount>.35)){if(t.brake){let t=Math.sign(this.speed)||0;this.speed-=t*bd*e,this.lateral*=Math.max(0,1-4*e),Math.abs(this.speed)<.35&&(this.speed=0)}else if(t.throttle>0)this.speed+=yd*g*f*e;else if(t.throttle<0)this.speed-=yd*.65*f*e;else{let t=d+xd*p,n=Math.sign(this.speed);this.speed-=n*t*e,Math.abs(this.speed)<.12&&(this.speed=0)}}let _=this.onRoad?l*g:l*.72;this.speed=V.clamp(this.speed,-14,_);let v=V.clamp(p/8,0,1),y=V.clamp(1-p/(l*1.2),.4,1);p>.15&&(this.heading-=this.steerAngle*v*y*2.5*Math.sign(this.speed)*e);let b=this.steerAngle*p*(.45+c*.25);this.lateral=V.damp(this.lateral,b,u*.32,e),this.lateral*=Math.max(0,1-u*.07*e);let x=Math.sin(this.heading),S=Math.cos(this.heading),C=S,w=-x;this.group.position.x+=(x*this.speed+C*this.lateral)*e,this.group.position.z+=(S*this.speed+w*this.lateral)*e,n&&n.lengthSq()>.25&&(this.windScratch.copy(n),this.windScratch.y=0,this.windScratch.multiplyScalar(e*.45),this.group.position.add(this.windScratch),this.lateral+=n.x*.05*e);let T=Ru-40;if(this.group.position.x=V.clamp(this.group.position.x,-T,T),this.group.position.z=V.clamp(this.group.position.z,-T,T),r){let t=r.resolve(this.group.position.x,this.group.position.z,1.25);if(this.group.position.x=t.x,this.group.position.z=t.z,t.hit){let n=Math.abs(this.speed)*.55+Math.abs(this.lateral)*.35,r=this.speed*Math.sin(this.heading)*t.nx+this.speed*Math.cos(this.heading)*t.nz;r<0&&(this.speed-=r*1.35),this.speed*=Math.max(.15,1-5.5*e),this.lateral*=Math.max(0,1-7*e),this.lateral+=t.nx*n*.35,n>8&&!this.deployed&&this.applyStormDamage(Math.min(.08,n*.004)),t.depth>1.2&&(this.speed*=.45)}}let E=this.group.position.x,D=this.group.position.z,O=Y(E,D),k=Y(E+x*2.2,D+S*2.2),A=Y(E-x*2,D-S*2),ee=O*.5+k*.3+A*.2;td(E,D,this.normal);let j=ee,M=this.group.position.y;Math.abs(M-j)>1.25?this.group.position.y=j:this.group.position.y=V.damp(M,j,26,e);let N=this.group.position.y-M;if(this.susp=V.damp(this.susp,N*7,6.5,e),this.groundQuat.setFromUnitVectors(this.up,this.normal),this.yawQuat.setFromAxisAngle(this.up,this.heading),this.lookQuat.copy(this.groundQuat).multiply(this.yawQuat),this.group.quaternion.slerp(this.lookQuat,1-Math.exp(-10*e)),this.flipTimer<=0){if(this.angVel.lengthSq()>.8||Math.abs(this.mesh.rotation.z)>.55||Math.abs(this.mesh.rotation.x)>.55)this.mesh.rotation.x+=this.angVel.x*e,this.mesh.rotation.z+=this.angVel.z*e,this.mesh.rotation.y+=this.angVel.y*e*.4,this.angVel.multiplyScalar(Math.max(0,1-1.5*e)),this.refreshOverturned();else{let n=-this.steerAngle*.12*(p/l)-this.lateral*.02;this.lean=V.damp(this.lean,n,5.5,e);let r=-this.susp*.1+(t.throttle>0?-.035:0)+(t.brake?.06:0);this.pitch=V.damp(this.pitch,r,6.5,e),this.mesh.rotation.z=this.lean,this.mesh.rotation.x=this.pitch,this.mesh.rotation.y=0,this.overturned=!1}}this.updateBrakeLights(t.brake),this.headLightL.intensity<.5&&(this.headLightL.intensity=1.6,this.headLightR.intensity=1.6);let te=!this.onRoad&&p>6;if(this.dustMat.opacity=te?Math.min(.55,p/l):V.damp(this.dustMat.opacity,0,4,e),te){let t=this.dust.geometry.attributes.position,n=t.array;for(let e=0;e<3;e++){let e=this.dustIdx%(n.length/3);this.dustIdx++;let t=e*3;n[t]=(Math.random()-.5)*1.6-x*2.5,n[t+1]=.2+Math.random()*1.2,n[t+2]=(Math.random()-.5)*1.6-S*2.5}for(let t=0;t<n.length/3;t++)n[t*3+1]+=1.8*e,n[t*3]-=x*p*.15*e,n[t*3+2]-=S*p*.15*e;t.needsUpdate=!0}}getSpeedMph(){let e=Math.hypot(this.speed,this.lateral*.5);return Math.round(e*2.237)}getCameraAnchor(e){return e.set(0,this.carHeight*.7,0).applyMatrix4(this.group.matrixWorld)}getForward(e){return e.set(Math.sin(this.heading),0,Math.cos(this.heading))}},Nd=class{cells=new Map;cellSize=48;all=[];clear(){this.cells.clear(),this.all.length=0}reset(){for(let e of this.all)e.active=!0}disableNear(e,t,n){let r=0,i=this.cellSize,a=Math.floor((e-n)/i),o=Math.floor((e+n)/i),s=Math.floor((t-n)/i),c=Math.floor((t+n)/i),l=new Set;for(let i=a;i<=o;i++)for(let a=s;a<=c;a++){let o=this.cells.get(this.key(i,a));if(o)for(let i of o)i.active&&!l.has(i)&&(l.add(i),Math.hypot(i.x-e,i.z-t)<=n+i.r&&(i.active=!1,r++))}return r}key(e,t){return`${e},${t}`}add(e){this.all.push(e);let t=this.cellSize,n=Math.floor((e.x-e.r)/t),r=Math.floor((e.x+e.r)/t),i=Math.floor((e.z-e.r)/t),a=Math.floor((e.z+e.r)/t);for(let t=n;t<=r;t++)for(let n=i;n<=a;n++){let r=this.key(t,n),i=this.cells.get(r);i||(i=[],this.cells.set(r,i)),i.push(e)}}registerBuildings(e){for(let t of e){let e=1.2,n=1.2;for(let r of t.children){let t=r;if(!t.geometry)continue;t.geometry.boundingBox||t.geometry.computeBoundingBox();let i=t.geometry.boundingBox;if(!i)continue;let a=Math.abs(r.scale.x)||1,o=Math.abs(r.scale.z)||1,s=Math.max(Math.abs(i.min.x),Math.abs(i.max.x))*a,c=Math.max(Math.abs(i.min.z),Math.abs(i.max.z))*o;e=Math.max(e,s),n=Math.max(n,c)}let r=Math.min(18,Math.max(1.4,Math.max(e,n)*.88));this.add({x:t.position.x,z:t.position.z,r,active:!0})}}registerTreeBatches(e){for(let t of e)for(let e=0;e<t.count;e++){let n=Math.max(.35,Math.min(2.2,t.wide[e]*.12));this.add({x:t.x[e],z:t.z[e],r:n,active:!0})}}registerProps(e){for(let t of e){let e=Math.max(t.scale.x,t.scale.z,1),n=t.name===`cow`?.85*e:Math.max(.7,.9*e*.5);this.add({x:t.position.x,z:t.position.z,r:n,active:!0})}}resolve(e,t,n){let r=e,i=t,a=!1,o=0,s=0,c=0,l=this.cellSize,u=n+14,d=Math.floor((r-u)/l),f=Math.floor((r+u)/l),p=Math.floor((i-u)/l),m=Math.floor((i+u)/l);for(let e=0;e<4;e++){let e=!1;for(let t=d;t<=f;t++)for(let l=p;l<=m;l++){let u=this.cells.get(this.key(t,l));if(u)for(let t of u){if(!t.active)continue;let l=r-t.x,u=i-t.z,d=Math.hypot(l,u),f=n+t.r;if(d<1e-4){r+=f*.55,o=1,s=0,c=Math.max(c,f),e=!0,a=!0;continue}if(d>=f)continue;let p=(f-d)/d;r+=l*p,i+=u*p;let m=1/d;o=l*m,s=u*m,c=Math.max(c,f-d),e=!0,a=!0}}if(!e)break}return{x:r,z:i,hit:a,nx:o,nz:s,depth:c}}},Pd=null,Fd=null,Id={uFlash:{value:0},uSkyDark:{value:0},uTime:{value:0},uSunTint:{value:new U(1,1,1)},uLayer:{value:1}};function Ld(e){let t=Math.sin(e*127.1)*43758.5453;return t-Math.floor(t)}function Rd(){if(Pd)return Pd;let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`),r=n.createImageData(128,128);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=(e*128+t)*4,i=0,a=.5,o=1;for(let n=0;n<4;n++){let r=Math.floor(t/128*8*o),s=Math.floor(e/128*8*o),c=t/128*8*o%1,l=e/128*8*o%1,u=Ld(r+s*57+n*13),d=Ld(r+1+s*57+n*13),f=Ld(r+(s+1)*57+n*13),p=Ld(r+1+(s+1)*57+n*13),m=c*c*(3-2*c),h=l*l*(3-2*l);i+=(u+(d-u)*m+(f-u)*h+(u-d-f+p)*m*h)*a,a*=.5,o*=2}let s=Math.floor(40+i*180);r.data[n]=s,r.data[n+1]=s+4,r.data[n+2]=s+8,r.data[n+3]=255}return n.putImageData(r,0,0),Pd=new Fi(t),Pd.wrapS=Pd.wrapT=e,Pd.colorSpace=Re,Pd.needsUpdate=!0,Pd}function zd(){if(Fd)return Fd;let n=document.createElement(`canvas`);n.width=64,n.height=256;let r=n.getContext(`2d`);r.clearRect(0,0,64,256);let i=r.createLinearGradient(0,0,0,256);i.addColorStop(0,`rgba(90,100,115,0)`),i.addColorStop(.12,`rgba(70,80,95,0.55)`),i.addColorStop(.55,`rgba(55,65,78,0.7)`),i.addColorStop(.88,`rgba(50,58,70,0.35)`),i.addColorStop(1,`rgba(40,48,58,0)`),r.fillStyle=i,r.fillRect(0,0,64,256);for(let e=0;e<48;e++){let e=Math.random()*64,t=.4+Math.random()*1.6,n=.15+Math.random()*.45,i=40+Math.random()*196,a=Math.random()*(256-i),o=r.createLinearGradient(e,a,e+(Math.random()-.5)*4,a+i);o.addColorStop(0,`rgba(120,130,145,0)`),o.addColorStop(.15,`rgba(100,112,128,${n})`),o.addColorStop(.85,`rgba(70,80,95,${n*.7})`),o.addColorStop(1,`rgba(50,58,68,0)`),r.strokeStyle=o,r.lineWidth=t,r.beginPath(),r.moveTo(e,a),r.lineTo(e+(Math.random()-.5)*6,a+i),r.stroke()}return Fd=new Fi(n),Fd.wrapS=e,Fd.wrapT=t,Fd.colorSpace=Re,Fd.needsUpdate=!0,Fd}var Bd={billow:0,deck:1,base:2,wall:3,tower:4};function Vd(t,n,r=0){let i=Rd(),a=new K({color:t,map:i,transparent:!0,opacity:r,roughness:n===`billow`?.92:1,metalness:0,depthWrite:!1,side:2});return a.userData.layer=n,a.userData.layerCode=Bd[n],a.onBeforeCompile=e=>{e.uniforms.uFlash=Id.uFlash,e.uniforms.uSkyDark=Id.uSkyDark,e.uniforms.uTime=Id.uTime,e.uniforms.uSunTint=Id.uSunTint,e.uniforms.uLayer={value:Bd[n]},e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uFlash;
        uniform float uSkyDark;
        uniform float uTime;
        uniform vec3 uSunTint;
        uniform float uLayer;
        `).replace(`#include <output_fragment>`,`
        // Layered storm shading — dark bases, lit rims, billow tops
        float underside = smoothstep(0.15, -0.55, normal.y);
        float crown = smoothstep(-0.1, 0.75, normal.y);
        vec3 viewDir = normalize(vViewPosition);
        float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

        vec3 stormCol = outgoingLight;
        // Heavy base / wall: deepen underside
        float darkAmt = mix(0.22, 0.55, step(1.5, uLayer));
        if (uLayer > 2.5) darkAmt = 0.62; // wall
        stormCol *= 1.0 - underside * darkAmt * (0.7 + uSkyDark * 0.5);
        // Billow / upper deck: soft highlight on crowns + rims
        float lit = mix(0.08, 0.28, 1.0 - step(1.5, uLayer));
        if (uLayer < 0.5) lit = 0.38;
        stormCol += uSunTint * (crown * lit + rim * (0.12 + lit * 0.5));
        // Density flicker along the noise map UVs
        #ifdef USE_MAP
          float dens = 0.92 + 0.08 * sin(uTime * 0.35 + vMapUv.x * 12.0 + vMapUv.y * 9.0);
        #else
          float dens = 0.95 + 0.05 * sin(uTime * 0.35);
        #endif
        stormCol *= dens;
        // Lightning flash — cool lift without washing to white
        stormCol += vec3(0.55, 0.62, 0.78) * uFlash * (0.25 + rim * 0.55 + crown * 0.2);
        // Dawn / dusk tint + storm murk
        stormCol *= mix(vec3(1.0), uSunTint, 0.35);
        stormCol *= 1.0 - uSkyDark * 0.18;

        outgoingLight = stormCol;
        #include <output_fragment>
        `),a.userData.shader=e},a.customProgramCacheKey=()=>`storm-cloud-${n}`,a.map&&(a.map=i.clone(),a.map.wrapS=a.map.wrapT=e,a.map.offset.set(Math.random(),Math.random()),a.map.repeat.set(.6+Math.random()*1.4,.6+Math.random()*1.4),a.map.needsUpdate=!0),a}function Hd(e,t=0){let n=Vd(new U(e[0],e[1],e[2]).getHex(),`wall`,t);return n.roughness=1,n.color.setRGB(e[0],e[1],e[2]),n}function Ud(){return new Ur({map:zd(),color:6977672,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:1})}function Wd(e,t,n,r=`day`){Id.uFlash.value=e,Id.uSkyDark.value=t,Id.uTime.value=n;let i=Id.uSunTint.value;r===`dawn`?i.setRGB(1.05,.88,.72):r===`dusk`?i.setRGB(1.08,.72,.55):i.setRGB(.92,.95,1.02)}var Gd=class{rain;rainMat;hail;hailMat;mist;mistMat;anvil;towers;shelf;flanking;inflowBands;rainCurtains;gust=new H;nearPrecip=0;nearHail=0;pilotView=!1;timeOfDay=`day`;rainPositions;rainSpeed;hailPositions;mistPositions;anvilMats=[];anvilLayers=[];towerMats=[];shelfMats=[];flankMats=[];inflowMats=[];curtains=[];baseFog;time=0;lightningT=8;flash=0;flashLight;bolt;boltMat;boltLife=0;rainPhase=0;precipCore;precipCoreMat;rainFx=0;rainFz=1;rainRx=1;rainRz=0;constructor(e){this.baseFog=e.fog;let t=16e3;this.rainPositions=new Float32Array(t*3),this.rainSpeed=new Float32Array(t);for(let e=0;e<t;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*1600*.5;this.rainPositions[e*3]=Math.cos(t)*n,this.rainPositions[e*3+1]=Math.random()*220*.85,this.rainPositions[e*3+2]=Math.sin(t)*n*.85,this.rainSpeed[e]=55+Math.random()*70}let n=new jr;n.setAttribute(`position`,new gr(this.rainPositions,3)),this.rainMat=new Di({color:5925496,size:.42,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),this.rain=new Mi(n,this.rainMat),this.rain.frustumCulled=!1,e.add(this.rain);let r=2500;this.hailPositions=new Float32Array(r*3);for(let e=0;e<r;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*280;this.hailPositions[e*3]=Math.cos(t)*n,this.hailPositions[e*3+1]=Math.random()*95,this.hailPositions[e*3+2]=Math.sin(t)*n}let i=new jr;i.setAttribute(`position`,new gr(this.hailPositions,3)),this.hailMat=new Di({color:10134704,size:.18,transparent:!0,opacity:0,depthWrite:!1}),this.hail=new Mi(i,this.hailMat),this.hail.frustumCulled=!1,e.add(this.hail);let a=4200;this.mistPositions=new Float32Array(a*3);for(let e=0;e<a;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*700;this.mistPositions[e*3]=Math.cos(t)*n,this.mistPositions[e*3+1]=Math.random()*5,this.mistPositions[e*3+2]=Math.sin(t)*n*.85}let o=new jr;o.setAttribute(`position`,new gr(this.mistPositions,3)),this.mistMat=new Di({color:10530492,size:2.8,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),this.mist=new Mi(o,this.mistMat),e.add(this.mist),this.precipCoreMat=new Ur({color:4871520,transparent:!0,opacity:0,depthWrite:!1,side:2}),this.precipCore=new W(new Gi(1,16,12),this.precipCoreMat),this.precipCore.scale.set(520,90,440),this.precipCore.renderOrder=1,e.add(this.precipCore),this.flashLight=new Ja(13162751,0,1100,1.4),this.flashLight.position.set(0,180,0),e.add(this.flashLight),this.boltMat=new _i({color:15266047,transparent:!0,opacity:0}),this.bolt=new Ti(new jr().setFromPoints([new H(0,180,0),new H(0,0,0)]),this.boltMat),this.bolt.visible=!1,e.add(this.bolt),this.towers=new On,e.add(this.towers);for(let e=0;e<10;e++){let e=new On,t=(Math.random()-.5)*160,n=(Math.random()-.5)*160;for(let r=0;r<5;r++){let i=Vd(r<2?3029062:r<4?3818836:4871524,r<2?`base`:r<4?`tower`:`billow`),a=new W(new Gi(14+Math.random()*12-r*1.2,12,10),i);a.position.set(t+(Math.random()-.5)*8,18+r*16+Math.random()*6,n+(Math.random()-.5)*8),a.scale.set(1.15+(r<2?.2:0),.55+r*.1+(r>3?.15:0),1.1+(r<2?.15:0)),e.add(a),this.towerMats.push(i)}this.towers.add(e)}this.anvil=new On,e.add(this.anvil);for(let e=0;e<34;e++){let t,n,r,i;e<10?(t=`base`,n=1317410,r=-18-Math.random()*14,i=.32+Math.random()*.18):e<24?(t=`deck`,n=1976372,r=(Math.random()-.4)*22,i=.42+Math.random()*.22):(t=`billow`,n=2766148,r=12+Math.random()*28,i=.55+Math.random()*.35);let a=Vd(n,t),o=24+Math.random()*(t===`base`?85:65),s=t===`billow`?12:10,c=new W(new Gi(o,s,s-2),a);c.position.set((Math.random()-.5)*240,r,(Math.random()-.5)*200),c.scale.set(1.2+Math.random()*.6,i,1.05+Math.random()*.45),t===`base`&&(c.rotation.z=(Math.random()-.5)*.25,c.rotation.x=(Math.random()-.5)*.15),this.anvil.add(c),this.anvilMats.push(a),this.anvilLayers.push(t)}this.shelf=new On,e.add(this.shelf);for(let e=0;e<14;e++){let t=Vd(3818576,`base`),n=new W(new Gi(16+Math.random()*18,10,8),t);n.position.set(-50+e*12,22+Math.random()*10,50+(Math.random()-.5)*18),n.scale.set(1.6,.45,.95),this.shelf.add(n),this.shelfMats.push(t)}this.flanking=new On,e.add(this.flanking);for(let e=0;e<14;e++){let t=Vd(4871524,`deck`),n=new W(new Gi(11+Math.random()*14,9,7),t);n.position.set(-28-e*16,48+Math.random()*28,-18-e*11),n.scale.set(1.2,.7,1),this.flanking.add(n),this.flankMats.push(t)}this.inflowBands=new On,e.add(this.inflowBands);for(let e=0;e<10;e++){let t=Vd(3819092,`deck`),n=new W(new Gi(1,8,6),t);n.scale.set(6+Math.random()*4,3,35+Math.random()*40),n.position.set(48+e*11,16+Math.random()*10,-28-e*9),n.rotation.y=.35+e*.04,this.inflowBands.add(n),this.inflowMats.push(t)}this.rainCurtains=new On,e.add(this.rainCurtains);let s=new Wi(1,1,1,1);for(let e=0;e<10;e++){let t=Ud(),n=new W(s,t);n.frustumCulled=!1,n.renderOrder=0;let r=-40+e%5*70+(Math.random()-.5)*30,i=40+Math.floor(e/5)*90+(Math.random()-.5)*40,a=e>=7;this.curtains.push({mesh:n,mat:t,along:a?-30-(e-7)*45:r,across:a?-20-(e-7)*35:i,phase:Math.random()*Math.PI*2}),this.rainCurtains.add(n)}}setPilotView(e){this.pilotView=e}setTimeOfDay(e){this.timeOfDay=e}update(e,t,n){this.time+=e;let r=this.pilotView?.82:1;Wd(this.flash,n.skyDark,this.time,this.timeOfDay);let i=n.motion.x*.85+Math.sin(this.time*.28)*.9,a=n.motion.z*.7+Math.cos(this.time*.22)*.75,o=Math.max(0,Math.sin(this.time*.55))**3,s=(.35+n.organization*.9)*(1+o*2.5);this.gust.set(i*s,0,a*s);let c=Math.hypot(n.motion.x,n.motion.z)||1;this.rainFx=n.motion.x/c,this.rainFz=n.motion.z/c,this.rainRx=this.rainFz,this.rainRz=-this.rainFx;let l=n.cell.clone();l.x+=this.rainFx*(-40-n.rfd*25)+this.rainRx*(70+n.rfd*20),l.z+=this.rainFz*(-40-n.rfd*25)+this.rainRz*(70+n.rfd*20),this.rain.position.copy(l),this.hail.position.copy(l),this.mist.position.copy(l),this.precipCore.position.set(l.x,77,l.z);let u=t.distanceTo(l);this.nearPrecip=V.clamp(1-u/900,0,1)*n.precip;let d=V.clamp(1-u/1100,.15,1),f=(n.precip*.85+n.rfd*.55+n.tornadoStrength*.25)*d*r;this.rainMat.opacity=Math.min(.95,f),this.rainMat.size=.32+n.precip*.22+n.tornadoStrength*.12+this.gust.length()*.012,this.timeOfDay===`dusk`?this.rainMat.color.setHex(6971504):this.timeOfDay===`dawn`?this.rainMat.color.setHex(6975608):this.rainMat.color.setHex(5925496),this.hailMat.opacity=0,this.nearHail=0,this.hail.visible=!1,this.mistMat.opacity=0,this.mist.visible=!1,this.precipCoreMat.opacity=0,this.precipCore.visible=!1;let p=n.precip>.12?V.clamp((n.precip*.45+n.rfd*.2)*d*r,0,.42):0;this.rainCurtains.visible=p>.02;let m=Y(n.cell.x,n.cell.z);if(p>.02){this.rainCurtains.position.set(n.cell.x,m,n.cell.z);for(let e=0;e<this.curtains.length;e++){let t=this.curtains[e],r=Math.sin(this.time*.7+t.phase)*8,i=t.along*this.rainFx+(t.across+r)*this.rainRx,a=t.along*this.rainFz+(t.across+r)*this.rainRz,o=220*(.55+n.precip*.2);t.mesh.position.set(i,220*.42,a);let s=.7+n.precip*.55+e%3*.08;t.mesh.scale.set(90+e%4*25,o,1),t.mesh.rotation.y=Math.atan2(this.rainRx,this.rainRz)+e%2*.35+.15,t.mat.opacity=p*s*(.55+e%5*.08),t.mat.color.setRGB(.35-n.precip*.08,.4-n.precip*.06,.48-n.precip*.04),t.mat.map&&(t.mat.map.offset.y=(this.time*.12+t.phase*.05)%1)}}else for(let e of this.curtains)e.mat.opacity=0;if(f>.02){let t=this.rain.geometry.attributes.position,r=t.array,i=n.organization*14+n.wallCloud*10,a=this.gust.x*3.2+n.tornadoStrength*18,o=this.gust.z*2.4+n.tornadoStrength*10;this.rainPhase=1-this.rainPhase;let s=this.rainPhase,c=e*2,l=this.rainFx,u=this.rainFz,d=this.rainRx,f=this.rainRz,p=n.organization;for(let e=s;e<this.rainSpeed.length;e+=2){let t=e*3,s=t+1,m=t+2;r[s]-=this.rainSpeed[e]*(1.05+n.precip*1.2)*c;let h=r[t],g=-r[m]*i*.012,_=h*i*.012;if(r[t]+=(a+g)*c,r[m]+=(o*.65+_)*c,r[s]<0){let e=Math.random(),n,i;if(p>.4&&e<.38){let e=Math.random(),t=-2.3+e*2,r=160-e*90+(Math.random()-.5)*70;n=Math.cos(t)*r,i=Math.sin(t)*r}else e<.78?(n=40+(Math.random()-.3)*420,i=90+(Math.random()-.5)*380):(n=(Math.random()-.5)*900,i=(Math.random()-.5)*700);r[t]=n*l+i*d-55,r[m]=n*u+i*f-40,r[s]=198*(.35+Math.random()*.55)}}t.needsUpdate=!0}if(this.hailMat.opacity>.02){let t=this.hail.geometry.attributes.position,r=t.array;for(let t=0;t<r.length/3;t++)if(r[t*3+1]-=(80+n.precip*50)*e,r[t*3]+=this.gust.x*.9*e,r[t*3+1]<0){let e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*320;r[t*3+1]=50+Math.random()*70,r[t*3]=Math.cos(e)*n,r[t*3+2]=Math.sin(e)*n}t.needsUpdate=!0}if(this.mistMat.opacity>.02){let t=this.mist.geometry.attributes.position,n=t.array;for(let t=0;t<n.length/3;t++)n[t*3]+=this.gust.x*.55*e,n[t*3+2]+=this.gust.z*.55*e,n[t*3+1]=.35+Math.random()*4,n[t*3]*n[t*3]+n[t*3+2]*n[t*3+2]>49e4&&(n[t*3]*=.4,n[t*3+2]*=.4);t.needsUpdate=!0}let h=n.phase===`clear`||n.phase===`towers`?n.organization*.7:0;for(let e=0;e<this.towerMats.length;e++)this.towerMats[e].opacity=h*(.55+e%5*.08)*r;let g=n.phase===`towers`?.85+n.organization*1.35:.95;this.towers.position.set(n.cell.x,m+77,n.cell.z),this.towers.scale.set(5*g,5*g*.55,5*g),this.anvil.position.set(n.cell.x+49,m+220+40,n.cell.z-90*.35);let _=n.phase===`clear`?0:V.clamp(n.organization*.88,0,.85)*r;for(let e=0;e<this.anvilMats.length;e++){let t=this.anvilLayers[e],r=t===`base`?.92:t===`deck`?.78:.62,i=t===`base`?n.organization*.12+n.wallCloud*.08:t===`billow`?-n.skyDark*.05:n.organization*.05;this.anvilMats[e].opacity=V.clamp(_*(r+i),0,.95)}let v=.004+n.organization*.028+n.wallCloud*.045+n.tornadoStrength*.02;this.anvil.rotation.y+=v*e,this.towers.rotation.y+=v*.55*e;let y=1+Math.sin(this.time*.15)*.02*n.organization;this.anvil.scale.set(5*(1+n.organization*.55)*y,(1.35+n.organization*.35+n.wallCloud*.12)*y,5*(1+n.organization*.4)*y),this.anvil.visible=_>.02,this.shelf.visible=!1;for(let e of this.shelfMats)e.opacity=0;this.flanking.visible=!1;for(let e of this.flankMats)e.opacity=0;this.inflowBands.visible=!1;for(let e of this.inflowMats)e.opacity=0;if(this.lightningT-=e,this.flash=V.damp(this.flash,0,9,e),this.boltLife=Math.max(0,this.boltLife-e),this.boltMat.opacity=this.boltLife>0?Math.min(1,this.boltLife*9):0,this.bolt.visible=this.boltMat.opacity>.02,this.lightningT<=0&&n.organization>.4){this.flash=1;let e=n.cell.x+(Math.random()-.5)*150,t=n.cell.z+(Math.random()-.5)*150;if(this.flashLight.position.set(e,420+Math.random()*120,t),this.flashLight.intensity=55+n.organization*65,this.lightningT=3+Math.random()*8-n.organization*2.5,Math.random()>.3){let n=[],r=e+(Math.random()-.5)*28,i=t+(Math.random()-.5)*28,a=520;for(n.push(new H(r,a,i));a>1;)a-=14+Math.random()*26,r+=(Math.random()-.5)*20,i+=(Math.random()-.5)*20,n.push(new H(r,Math.max(0,a),i));this.bolt.geometry.dispose(),this.bolt.geometry=new jr().setFromPoints(n),this.boltLife=.16+Math.random()*.14}}else this.flashLight.intensity=this.flash*(32+n.organization*40);if(this.baseFog){let e=new U().setHSL(.6,.12,V.lerp(.48,.08,n.skyDark));this.flash>.2&&e.offsetHSL(0,0,this.flash*.25),this.timeOfDay===`dusk`&&e.offsetHSL(-.04,.05,-.02),this.timeOfDay===`dawn`&&e.offsetHSL(.02,.04,.02),this.baseFog.color.copy(e);let t=2e-4+n.skyDark*38e-5+n.precip*d*22e-5+n.tornadoStrength*2e-4;this.baseFog.density=this.pilotView?t*.4:t}}},Kd=class{group=new On;fallen=new On;tube;tubeMat;ropeSegs=[];vortices=[];lastTopR=-1;lastBotR=-1;cloudCap;cloudCapMats=[];wallWisps=[];wallWispMats=[];dust;dustMat;dustPos;dustCol;cloud=[];chunks=[];chunkVel=[];chunkLife=[];chunkGrounded=[];chunkSpawnAcc=0;time=0;grounded=!1;variant=`cone`;pilotView=!1;cownado=!1;cloudBaseHeight=210;position=new H;liftForce=0;destroyRadius=0;constructor(){this.group.visible=!1,this.tubeMat=new Ur({color:new U(.08,.085,.09),transparent:!0,opacity:0,side:2,depthWrite:!1}),this.tube=new W(this.buildRaggedFunnel(.92,1,56,14),this.tubeMat),this.tube.frustumCulled=!1,this.tube.renderOrder=2,this.group.add(this.tube);for(let e=0;e<10;e++){let e=new W(new Bi(1,1,1,16,1,!0),this.tubeMat);e.visible=!1,e.frustumCulled=!1,e.renderOrder=2,this.group.add(e),this.ropeSegs.push(e)}for(let e=0;e<4;e++){let e=this.tubeMat.clone(),t=new W(new Bi(.45,1,1,24,4,!0),e);t.visible=!1,t.frustumCulled=!1,t.renderOrder=2,this.group.add(t),this.vortices.push(t)}this.cloudCap=new On;let e=[[.07,.08,.1],[.1,.11,.13],[.12,.13,.15],[.08,.09,.11],[.14,.15,.17],[.06,.07,.09]];for(let t=0;t<26;t++){let n=e[t%e.length],r=Hd(n,0),i=new W(new Gi(20+t%5*11,12,9),r),a=t/26*Math.PI*2+t%3*.12,o=14+t%7*15+t%5*3;i.position.set(Math.cos(a)*o*(.75+t%4*.08),t%4*5-12-t%3*3,Math.sin(a)*o*(.65+t%3*.1)),i.scale.set(1.55+t%4*.4+t%2*.2,.28+t%3*.14+t%5*.04,1.35+t%3*.3),i.rotation.y=a*.4,i.rotation.z=t%5*.06-.12,this.cloudCap.add(i),this.cloudCapMats.push(r)}{let e=Hd([.05,.055,.065],0),t=new W(new Gi(38,14,10),e);t.scale.set(1.6,.42,1.35),t.position.set(0,-14,0),this.cloudCap.add(t),this.cloudCapMats.push(e)}for(let e=0;e<10;e++){let t=Hd([.09+e%3*.02,.1,.12],0),n=new W(new Gi(8+e%4*4,8,6),t),r=e/10*Math.PI*2;n.position.set(Math.cos(r)*55,-18-e%3*4,Math.sin(r)*48),n.scale.set(1.8+e%3*.4,.22+e%2*.1,.9),this.cloudCap.add(n),this.wallWisps.push(n),this.wallWispMats.push(t),this.cloudCapMats.push(t)}this.cloudCap.renderOrder=1,this.group.add(this.cloudCap);let t=1400;this.dustPos=new Float32Array(t*3),this.dustCol=new Float32Array(t*3);for(let e=0;e<t;e++){let t=Math.random()*Math.PI*2,n=2+Math.random()*55,r=Math.random()*Math.random()*28,i=2+Math.random()*14,a=1.2+Math.random()*2.8;this.cloud.push({ang:t,radius:n,y:r,rise:i,spin:a,size:.6+Math.random()}),this.dustPos[e*3]=Math.cos(t)*n,this.dustPos[e*3+1]=r,this.dustPos[e*3+2]=Math.sin(t)*n;let o=.12+Math.random()*.16,s=Math.random()*.06;this.dustCol[e*3]=o+s,this.dustCol[e*3+1]=o*.85,this.dustCol[e*3+2]=o*.65}let n=new jr;n.setAttribute(`position`,new gr(this.dustPos,3)),n.setAttribute(`color`,new gr(this.dustCol,3)),this.dustMat=new Di({size:4.8,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,vertexColors:!0,blending:1}),this.dust=new Mi(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.renderOrder=3,this.group.add(this.dust);let r=[{c:6969928,m:0,r:1},{c:4866100,m:0,r:.95},{c:9075296,m:.05,r:.9},{c:3814440,m:0,r:1},{c:6045744,m:0,r:.92},{c:8022616,m:0,r:.88},{c:6975616,m:.55,r:.4},{c:9080984,m:.65,r:.35},{c:4861984,m:0,r:.98}];for(let e=0;e<110;e++){let t=e%5,n;n=t===0?new G(.9+Math.random()*2.6,.08+Math.random()*.22,.3+Math.random()*.9):t===1?new Ui(.3+Math.random()*.85,0):t===2?new G(.6+Math.random()*1.8,.04+Math.random()*.08,.5+Math.random()*1.4):t===3?new Bi(.06+Math.random()*.1,.1+Math.random()*.14,.8+Math.random()*1.6,5):new Ki(.35+Math.random()*.7,0);let i=r[e%r.length],a=new W(n,new K({color:i.c,metalness:i.m,roughness:i.r,flatShading:!0}));a.visible=!1,a.castShadow=!0,this.group.add(a),this.chunks.push(a),this.chunkVel.push(new H),this.chunkLife.push(0),this.chunkGrounded.push(!1)}}buildRaggedFunnel(e,t,n=56,r=14){let i=new Bi(Math.max(.15,e),Math.max(.12,t),1,n,r,!0),a=i.attributes.position;for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getY(e),r=a.getZ(e),i=n+.5,o=Math.atan2(r,t),s=1+(Math.sin(o*5+i*9.3)*.045+Math.sin(o*11-i*5.1)*.028+Math.sin(o*3+i*2.7)*.02)*(.55+i*.7);a.setXYZ(e,t*s,n,r*s)}return a.needsUpdate=!0,i.computeVertexNormals(),i}setVariant(e){this.variant=e===`rope`?`cone`:e}setPilotView(e){this.pilotView=e}ropeOutAmount(e){return e.phase===`weakening`||e.phase===`dissipated`?1:e.phase===`tornado`?V.smoothstep(e.phaseProgress,.68,.95):0}variantWidth(){switch(this.variant){case`wedge`:return 1.85;case`violent`:return 1.55;case`catastrophic`:return 2.05;case`multivortex`:return 1.05;case`rainwrapped`:return 1.15;default:return .9}}variantPower(){switch(this.variant){case`violent`:return 1.25;case`catastrophic`:return 1.55;case`wedge`:return 1.15;case`multivortex`:return 1.1;default:return 1}}funnelRadii(e){switch(this.variant){case`wedge`:return{top:e*1.05,bot:e*1.85};case`violent`:return{top:e*.95,bot:e*1.22};case`catastrophic`:return{top:e*1.15,bot:e*1.7};case`multivortex`:return{top:e*.78,bot:e*1.05};case`rainwrapped`:return{top:e*1.05,bot:e*.82};case`cone`:return{top:e*.72,bot:e*1.05};case`rope`:return{top:e*.5,bot:e*.22};default:return{top:e*.85,bot:e*.95}}}setFunnelGeometry(e,t){Math.abs(e-this.lastTopR)<.35&&Math.abs(t-this.lastBotR)<.35||(this.lastTopR=e,this.lastBotR=t,this.tube.geometry.dispose(),this.tube.geometry=this.buildRaggedFunnel(e,t,56,14))}update(e,t){this.time+=e;let n=Y(t.cell.x,t.cell.z);this.position.set(t.cell.x,n,t.cell.z),this.group.position.set(t.cell.x,n,t.cell.z);let r=t.tornadoStrength,i=t.wallCloud,a=r>.02||i>.2;if(this.group.visible=a,!a){this.liftForce=0,this.destroyRadius=0,this.dustMat.opacity=0;for(let e of this.cloudCapMats)e.opacity=0;for(let e of this.ropeSegs)e.visible=!1;for(let e of this.vortices)e.visible=!1;return}this.grounded=t.phase===`tornado`||t.phase===`weakening`&&r>.08||t.phase===`funnel`&&r>.4;let o=this.variantPower(),s=this.ropeOutAmount(t),c=this.cloudBaseHeight,l=this.grounded?.5:V.lerp(c*.45,28,r),u=this.grounded?c*(.95+.2*r)*(.92+o*.08):c*.55*(.55+.45*r),d=this.variantWidth()*(3.2+r*32),f=.28*(2.2+r*10),p=V.lerp(d,f,s),m=this.funnelRadii(d),h={top:f*.22,bot:f*.16},g={top:V.lerp(m.top,h.top,s),bot:V.lerp(m.bot,h.bot,s)};this.liftForce=this.grounded?r*r*(.7+this.variantWidth()*.4*(1-s*.6))*o:0,this.destroyRadius=this.grounded?(28+r*70*this.variantWidth()*(1-s*.55))*(.9+o*.28):0;let _=this.pilotView?.72:.9,v=s>.55,y=this.variant===`multivortex`&&s<.45;if(this.setFunnelGeometry(g.top,g.bot),this.tube.scale.set(1,u,1),this.tube.position.set(0,l+u*.5,0),this.tube.rotation.y+=(.9+r*2.2)*e,this.tube.visible=!v,this.tubeMat.opacity=Math.max(0,(.62+r*.32)*_*(1-Math.max(0,s-.55)*2)),this.cownado)this.tubeMat.color.setRGB(.55+r*.2,.48+r*.12,.38+r*.08);else if(this.variant===`rainwrapped`){let e=.09+r*.06;this.tubeMat.color.setRGB(e*.85,e*.9,e)}else if(this.variant===`wedge`||this.variant===`catastrophic`){let e=.05+r*.04;this.tubeMat.color.setRGB(e,e+.005,e+.01)}else if(this.variant===`violent`){let e=.06+r*.05;this.tubeMat.color.setRGB(e+.01,e,e)}else{let e=.07+r*.05;this.tubeMat.color.setRGB(e,e+.008,e+.015)}if(s>.25){let e=u/this.ropeSegs.length,t=Math.max(.25,g.bot),n=V.clamp((s-.25)/.45,0,1);this.tubeMat.opacity=Math.max(this.tubeMat.opacity,(.35+r*.2)*_*n);for(let n=0;n<this.ropeSegs.length;n++){let i=this.ropeSegs[n],a=n/(this.ropeSegs.length-1),o=this.time*2.4+a*6.5,c=(1.2+r*4+a*3)*s;i.visible=!0,i.scale.set(t*(.85+a*.35),e*1.05,t*(.85+a*.35)),i.position.set(Math.sin(o)*c,l+e*(n+.5),Math.cos(o*1.15)*c),i.rotation.y=o,i.rotation.x=Math.sin(o*.7)*.18,i.rotation.z=Math.cos(o*.55)*.18}}else for(let e of this.ropeSegs)e.visible=!1;if(y&&this.grounded)for(let e=0;e<this.vortices.length;e++){let t=this.vortices[e],n=this.time*(1.6+e*.35)+e/this.vortices.length*Math.PI*2,r=p*(.35+e%2*.25),i=u*(.55+e%3*.12);t.visible=!0,t.scale.set(p*.28,i,p*.28),t.position.set(Math.cos(n)*r,l+i*.5,Math.sin(n)*r),t.rotation.y=n*2;let a=t.material;a.opacity=this.tubeMat.opacity*.85,a.color.copy(this.tubeMat.color)}else for(let e of this.vortices)e.visible=!1;let b=i>.12||r>.04;if(this.cloudCap.visible=b,b){let t=V.clamp(i*.55+r*.45,0,1),n=V.lerp(1.55,1.05,t)+r*.35,a=.7+i*.45+r*.2,o=4+i*16+r*10;this.cloudCap.position.set(0,c-o,0),this.cloudCap.scale.set(n,a,n*.92),this.cloudCap.rotation.y+=e*(.1+i*.55+r*.85);let s=(.5+i*.42+r*.15)*(this.pilotView?.7:.92),l=this.cloudCapMats.length-1-this.wallWispMats.length;for(let e=0;e<this.cloudCapMats.length;e++){let t=this.cloudCapMats[e];t.opacity=e>=this.cloudCapMats.length-this.wallWispMats.length?s*(.28+i*.25)*(.6+e%3*.12):e===l?s:s*(.65+e%5*.05)}for(let e=0;e<this.wallWisps.length;e++){let n=this.wallWisps[e],r=this.time*(.35+i*.4)+e/this.wallWisps.length*Math.PI*2,a=48+e%4*8-t*10;n.position.set(Math.cos(r)*a,-16-e%3*5-i*4,Math.sin(r)*a*.88),n.scale.y=.18+i*.12+Math.sin(this.time+e)*.04}}else for(let e of this.cloudCapMats)e.opacity=0;this.updateDebrisCloud(e,r,p,o)}updateDebrisCloud(e,t,n,r){if(!this.grounded||t<.12){this.dustMat.opacity=V.damp(this.dustMat.opacity,0,4,e);for(let e=0;e<this.chunks.length;e++)this.chunkGrounded[e]||(this.chunks[e].visible=!1,this.chunkLife[e]=0);return}let i=10+t*62*r,a=Math.max(22,n*1.45+14+t*32);this.dustMat.opacity=Math.min(.72,(.32+t*.42)*(this.pilotView?.65:1)),this.dustMat.size=1.8+t*1.6*r;let o=this.dust.geometry.attributes.position,s=o.array,c=Math.floor(this.time*30)&1,l=e*2;for(let e=c;e<this.cloud.length;e+=2){let r=this.cloud[e];r.ang+=r.spin*(1.8+t*3.5)*(12/Math.max(r.radius,4))*l,r.radius+=(n*.55-r.radius)*(.35+t)*l,r.y+=r.rise*(.6+t*1.4)*l,(r.y>i||r.radius<n*.35)&&(r.ang=Math.random()*Math.PI*2,r.radius=n*.7+Math.random()*a,r.y=Math.random()*3,r.rise=2+Math.random()*(10+t*16));let o=1+r.y/i*.35;s[e*3]=Math.cos(r.ang)*r.radius*o,s[e*3+1]=r.y,s[e*3+2]=Math.sin(r.ang)*r.radius*o}o.needsUpdate=!0;let u=this.group.position.y,d=Math.max(12,this.destroyRadius);for(let e=0;e<this.chunks.length;e++){if(!this.chunkGrounded[e]||!this.chunks[e].visible)continue;let n=this.chunks[e],i=n.position.x-this.group.position.x,a=n.position.z-this.group.position.z;if(Math.hypot(i,a)>d+6)continue;n.parent===this.fallen&&this.fallen.remove(n),this.group.add(n),n.position.set(i,n.position.y-this.group.position.y,a),this.chunkGrounded[e]=!1,this.chunkLife[e]=6+Math.random()*4;let o=Math.atan2(a,i),s=new H(-Math.sin(o),0,Math.cos(o)),c=new H(-Math.cos(o),0,-Math.sin(o));this.chunkVel[e].set(s.x*(14+t*30)+c.x*6+(Math.random()-.5)*6,8+t*26*r+Math.random()*10,s.z*(14+t*30)+c.z*6+(Math.random()-.5)*6)}this.chunkSpawnAcc+=e;let f=.04/r;for(;this.chunkSpawnAcc>f;){this.chunkSpawnAcc-=f;let e=-1;for(let t=0;t<this.chunks.length;t++)if(this.chunkLife[t]<=0&&!this.chunkGrounded[t]){e=t;break}if(e<0)break;let n=Math.random()*Math.PI*2,i=4+Math.random()*a*.85,o=this.chunks[e];o.position.set(Math.cos(n)*i,.4+Math.random()*2,Math.sin(n)*i),o.scale.setScalar(.7+t*1.4*Math.random()),o.visible=!0,this.chunkGrounded[e]=!1,this.chunkLife[e]=7+Math.random()*4;let s=new H(-Math.sin(n),0,Math.cos(n)),c=new H(-Math.cos(n),0,-Math.sin(n));this.chunkVel[e].set(s.x*(14+t*32)+c.x*5+(Math.random()-.5)*5,6+t*24*r+Math.random()*8,s.z*(14+t*32)+c.z*5+(Math.random()-.5)*5)}this.collideChunks();for(let r=0;r<this.chunks.length;r++){if(this.chunkLife[r]<=0||this.chunkGrounded[r])continue;this.chunkLife[r]-=e;let a=this.chunks[r],o=this.chunkVel[r],s=a.position.x,c=a.position.z,l=Math.hypot(s,c)||.1,d=(Math.max(3.5,n*(.35+r%5*.08))-l)*(4+t*5);o.x+=(-c/l*(48+t*55)+s/l*d)*e,o.z+=(s/l*(48+t*55)+c/l*d)*e;let f=4+t*i*.55;o.y+=(f-a.position.y)*2.4*e+(8+t*14)*e,o.x*=Math.max(0,1-.45*e),o.z*=Math.max(0,1-.45*e),o.y*=Math.max(0,1-.3*e),a.position.addScaledVector(o,e),a.rotation.x+=o.y*.05*e,a.rotation.y+=3.2*e,a.rotation.z+=o.x*.04*e,this.chunkLife[r]<2&&(this.chunkLife[r]=2.5+Math.random());let p=Y(this.group.position.x+s,this.group.position.z+c)-u;if(a.position.y<p+.4&&o.y<0){if(a.position.y=p+.5,o.y=Math.abs(o.y)*.55+5+t*12,l>n*2.4&&Math.random()<.12){let e=this.group.position.x+a.position.x,t=this.group.position.z+a.position.z,n=Y(e,t);a.parent===this.group&&this.group.remove(a),this.fallen.add(a),a.position.set(e,n+.15,t),a.visible=!0,this.chunkLife[r]=0,this.chunkGrounded[r]=!0,o.set(0,0,0)}}else a.position.y>i*1.85&&(a.position.y=2+Math.random()*i*.35,o.y=-Math.abs(o.y)*.3)}}collideChunks(){let e=[];for(let t=0;t<this.chunks.length;t++)this.chunkLife[t]>0&&!this.chunkGrounded[t]&&this.chunks[t].visible&&e.push(t);let t=0;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){if(t++>50)return;let i=e[n],a=e[r],o=this.chunks[i],s=this.chunks[a],c=s.position.x-o.position.x,l=s.position.y-o.position.y,u=s.position.z-o.position.z,d=Math.hypot(c,l,u),f=1.4;if(d>=f||d<1e-4)continue;let p=c/d,m=l/d,h=u/d,g=(f-d)*.5;o.position.x-=p*g,o.position.y-=m*g,o.position.z-=h*g,s.position.x+=p*g,s.position.y+=m*g,s.position.z+=h*g;let _=this.chunkVel[i],v=this.chunkVel[a],y=(v.x-_.x)*p+(v.y-_.y)*m+(v.z-_.z)*h;if(y>=0)continue;let b=-y*.75;_.x-=p*b,_.y-=m*b,_.z-=h*b,v.x+=p*b,v.y+=m*b,v.z+=h*b,Math.abs(y)>14&&(_.x-=p*10,_.z-=h*10,v.x+=p*10,v.z+=h*10)}}resetDebris(){for(let e=0;e<this.chunks.length;e++){let t=this.chunks[e];t.parent===this.fallen&&this.fallen.remove(t),t.parent!==this.group&&this.group.add(t),t.visible=!1,this.chunkLife[e]=0,this.chunkGrounded[e]=!1,this.chunkVel[e].set(0,0,0)}}distanceTo(e){return this.group.position.distanceTo(e)}windAt(e,t){if(t.set(0,0,0),!this.grounded||!this.group.visible)return t;let n=e.x-this.group.position.x,r=e.z-this.group.position.z,i=Math.hypot(n,r),a=(55+this.liftForce*70)*(this.cownado?1.85:1);if(i>a)return t;let o=Math.max(i,.5),s=V.clamp(1-o/a,0,1);s=s*s*(.45+this.liftForce);let c=V.clamp(1-o/(this.cownado?34:22),0,1),l=this.cownado?18:14,u=this.cownado?12:8;return t.set(-r/o,0,n/o).multiplyScalar(s*l+c*10),t.x-=n/o*(s*u+c*18),t.z-=r/o*(s*u+c*18),t.y=s*(this.cownado?36:28)*(.5+this.liftForce)+c*c*(this.cownado?55:42),t}},qd=class{mode=`third`;camera;desired=new H;lookAt=new H;forward=new H;right=new H;up=new H(0,1,0);shake=new H;lookDir=new H;seat=new H;eye=new H;wasFirstPerson=!1;seatCarId=``;yaw=0;pitch=.22;targetYaw=0;targetPitch=.22;shakeAmp=0;zoom=1;targetZoom=1;thirdDist=8.2;tornadoDist=210;sensitivity=.00165;constructor(e){this.camera=e,this.camera.layers.enable(1),this.camera.far=14e3}toggle(){this.mode!==`onfoot`&&this.mode!==`tornado`&&(this.mode=this.mode===`third`?`first`:`third`,this.targetYaw=0,this.targetPitch=this.mode===`third`?.22:-.08,this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.mode!==`first`&&(this.wasFirstPerson=!1))}setOnFoot(e,t=0){e?(this.mode=`onfoot`,this.targetYaw=0,this.targetPitch=.05,this.yaw=0,this.pitch=.05,this.camera.layers.enable(1)):(this.mode=`third`,this.targetYaw=0,this.targetPitch=.22,this.yaw=0,this.pitch=.22)}setTornado(e){e?(this.mode=`tornado`,this.targetYaw=.55,this.targetPitch=.72,this.yaw=.55,this.pitch=.72,this.camera.layers.enable(1)):(this.mode=`third`,this.targetYaw=0,this.targetPitch=.22,this.yaw=0,this.pitch=.22)}adjustZoom(e){this.targetZoom=V.clamp(this.targetZoom+e,.55,4.2)}label(){if(this.mode===`onfoot`)return`On Foot`;if(this.mode===`tornado`)return`Tornado Cam`;let e=this.zoom>1.35?` · Zoomed out`:this.zoom<.8?` · Zoomed in`:``;return(this.mode===`third`?`Third Person`:`Driver Seat`)+e}addShake(e){this.shakeAmp=Math.min(1.2,this.shakeAmp+e)}clampLook(){this.mode===`third`?(this.targetPitch=V.clamp(this.targetPitch,-.45,1.25),this.targetYaw=V.clamp(this.targetYaw,-Math.PI*.98,Math.PI*.98)):this.mode===`first`?(this.targetPitch=V.clamp(this.targetPitch,-1.05,.95),this.targetYaw=V.clamp(this.targetYaw,-1.15,1.15)):this.targetPitch=this.mode===`tornado`?V.clamp(this.targetPitch,.2,1.2):V.clamp(this.targetPitch,-.95,.95)}update(e,t,n,r,i){if(this.targetYaw-=n.mouseDX*this.sensitivity,this.targetPitch-=n.mouseDY*this.sensitivity,this.targetYaw+=n.lookYaw*2.1*e,this.targetPitch+=n.lookPitch*1.65*e,n.zoomDelta&&this.adjustZoom(n.zoomDelta),this.clampLook(),this.yaw=V.damp(this.yaw,this.targetYaw,16,e),this.pitch=V.damp(this.pitch,this.targetPitch,16,e),this.zoom=V.damp(this.zoom,this.targetZoom,10,e),this.shakeAmp=V.damp(this.shakeAmp,0,4,e),this.shake.set((Math.random()-.5)*this.shakeAmp*.15,(Math.random()-.5)*this.shakeAmp*.12,(Math.random()-.5)*this.shakeAmp*.08),this.mode===`tornado`&&i){t.setDriverView(!1,this.camera),this.camera.near=1;let n=(this.tornadoDist+this.pitch*55)*this.zoom,r=95+this.pitch*70+(this.zoom-1)*40,a=this.yaw;this.desired.set(i.x-Math.sin(a)*n,i.y+r,i.z-Math.cos(a)*n),this.desired.addScaledVector(this.shake,.35),this.camera.position.lerp(this.desired,1-Math.exp(-5.5*e)),this.lookAt.set(i.x,i.y+4,i.z),this.camera.lookAt(this.lookAt),this.camera.fov=V.damp(this.camera.fov,58,6,e),this.camera.updateProjectionMatrix();return}if(this.mode===`onfoot`&&r){r.heading+=-n.mouseDX*this.sensitivity,r.heading+=n.lookYaw*1.85*e,this.targetYaw=0,this.yaw=0,r.getForward(this.forward);let i=r.heading;this.lookDir.set(Math.sin(i)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(i)*Math.cos(this.pitch)),this.camera.near=.12,t.setDriverView(!1,this.camera),r.getEyeWorld(this.eye),this.camera.position.copy(this.eye),this.shakeAmp>.02&&this.camera.position.addScaledVector(this.shake,.08),this.lookAt.copy(this.camera.position).addScaledVector(this.lookDir,40),this.camera.lookAt(this.lookAt),this.camera.fov=V.damp(this.camera.fov,72,6,e),this.camera.updateProjectionMatrix();return}t.getForward(this.forward),this.right.set(this.forward.z,0,-this.forward.x);let a=this.mode===`first`;if(t.setDriverView(a,this.camera),a&&(!this.wasFirstPerson||this.seatCarId!==t.carId)){let e=t.getDriverLookPitch();this.targetPitch=e,this.pitch=e,this.targetYaw=0,this.yaw=0,this.seatCarId=t.carId}a||(this.seatCarId=``),this.wasFirstPerson=a;let o=Math.min(Math.abs(t.speed)*.035,1.4),s=t.heading+this.yaw;if(this.lookDir.set(Math.sin(s)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(s)*Math.cos(this.pitch)),a)this.camera.near=.08,t.getDriverSeatWorld(this.seat),this.camera.position.copy(this.seat),this.shakeAmp>.02&&this.camera.position.addScaledVector(this.shake,.06),this.lookAt.copy(this.camera.position).addScaledVector(this.lookDir,55).addScaledVector(this.forward,1.2).addScaledVector(this.up,-.55),this.camera.lookAt(this.lookAt);else{this.camera.near=.1;let n=(this.thirdDist+o)*this.zoom,r=1.55+this.pitch*2.8+Math.max(0,this.zoom-1)*3.5;this.desired.copy(t.group.position).addScaledVector(this.lookDir,-n).addScaledVector(this.up,r),this.desired.y=Math.max(this.desired.y,t.group.position.y+1.4+Math.max(0,-this.pitch)*.5),this.desired.add(this.shake),this.camera.position.lerp(this.desired,1-Math.exp(-6.5*e)),this.lookAt.copy(t.group.position).addScaledVector(this.forward,4.2).setY(t.group.position.y+1.35+this.pitch*2.8),this.lookAt.add(this.shake),this.camera.lookAt(this.lookAt)}let c=(a?72:V.lerp(56,48,V.clamp((this.zoom-1)/2,0,1)))+Math.min(Math.abs(t.speed)*.16,5);this.camera.fov=V.damp(this.camera.fov,c,6,e),this.camera.updateProjectionMatrix()}};function Jd(e){return e?120:600}var Yd={random:`Random`,rope:`Rope-out (end of life)`,cone:`Cone (EF1–2)`,wedge:`Wedge (EF3)`,violent:`Violent (EF4)`,catastrophic:`Catastrophic (EF5)`,multivortex:`Multi-vortex (EF2–3)`,rainwrapped:`Rain-wrapped (EF2–4)`};function Xd(e){switch(e){case`rope`:return 1;case`cone`:return 2;case`wedge`:return 3;case`multivortex`:return 3;case`rainwrapped`:return 4;case`violent`:return 4;case`catastrophic`:return 5;default:return 2}}function Zd(e){if(e!==`random`&&e!==`rope`)return e;let t=[`cone`,`wedge`,`violent`,`catastrophic`,`multivortex`,`rainwrapped`];return t[Math.floor(Math.random()*t.length)]}var Qd=[{briefing:`Tight hook echo and a ragged wall cloud — but no ground circulation yet. Not every hook drops.`,tip:`Document the hook and clear slot. Don't force a TOR report without debris or a continuous cone.`,warning:`SVR WARNING`},{briefing:`Classic hook wrapping the meso. Wall cloud rotating hard — still rain-free under the updraft.`,tip:`Hold SE angle. Some supercells tease for minutes then rain under without ever tornading.`,warning:`SVR WARNING`},{briefing:`Inflow notch carving a clean slot. Hook looks tornadic on radar — visual still shows no funnel.`,tip:`Stay patient SE of the hook. Treat it as dangerous even if nothing is on the ground.`,warning:`SVR WARNING`}],$d={clear:[{briefing:`Moisture return ongoing. Watch towers building northwest of the highway — stay on pavement and roll north.`,tip:`Head north on the main highway. Keep developing towers off your left.`},{briefing:`Cap is eroding. Agitated cumulus lining up along the dryline east of the county roads.`,tip:`Stay mobile. Target the most sustained tower, not the first puff.`},{briefing:`Surface winds backing. Temp/dew spread collapsing — classic late-afternoon setup.`,tip:`Fill fuel, check roads north and east. Cell should fire soon.`}],towers:[{briefing:`Explosive vertical growth. Updraft glaciating — cell organizing into a supercell. SVR watch up.`,tip:`Close the gap. Aim for the SE flank once the anvil spreads.`,warning:`SVR WATCH`},{briefing:`Tower punching the anvil. Mid-level rotation hints on velocity — this one wants to go.`,tip:`Don't dive the core yet. Hold a southern approach option.`,warning:`SVR WATCH`},{briefing:`Stacked towers merging. Inflow freckling the dirt roads — organization climbing fast.`,tip:`Pick the dominant updraft. Secondary cells will waste your intercept.`,warning:`SVR WATCH`}],supercell:[{briefing:`Mesocyclone locked. Wall cloud lowering on the rear-flank. Hold the clear slot southeast of the meso.`,tip:`Stay SE of the hook. Do not drive into the forward-flank core.`,warning:`SVR WARNING`},{briefing:`Classic HP look developing. Rain-wrapped meso — keep a southern escape road open.`,tip:`Prefer the clear slot. If you lose visual, back out east.`,warning:`SVR WARNING`},{briefing:`Tight couplet and a ragged wall cloud. RFD cutting in — this can drop quick.`,tip:`Slow down near the clear slot. Cameras ready.`,warning:`SVR WARNING`}],funnel:[{briefing:`Funnel descending from the wall cloud. Not yet confirmed on the ground — document and hold angle.`,tip:`Slow down. Keep a clear southern view of the wall cloud base.`,warning:`TOR POSSIBLE`},{briefing:`Condensation cone halfway down. Dust whirls under the meso — almost there.`,tip:`Don't commit under the wall cloud. Watch for ground circulation.`,warning:`TOR POSSIBLE`},{briefing:`Multiple funnel attempts. One looks persistent — TOR possible any second.`,tip:`Hold SE angle. Report only when you see debris or a continuous cone.`,warning:`TOR POSSIBLE`}],tornado:[{briefing:`Tornado on the ground. Intercept from the southeast if roads stay clear. Watch RFD surge.`,tip:`Sweet spot ~80–200 m SE. Too close burns score. Core = hazard.`,warning:`TOR WARNING`},{briefing:`Confirmed tornado with a debris cloud. Wide circulation — treat as violent until proven otherwise.`,tip:`Give the core room. Parallel the track; don't cross ahead of it.`,warning:`TOR WARNING`},{briefing:`Cone fully condensed and wrapping rain. Dangerous — stay out of the forward flank.`,tip:`Southern view is gold. If rain wraps, fall back east.`,warning:`TOR WARNING`}],weakening:[{briefing:`Circulation rain-wrapped and thinning. Document the rope-out if you still have angle.`,tip:`Stay back — debris still airborne. Grab the rope-out angle.`,warning:`TOR WARNING`},{briefing:`Rope stage. Still lofting tin. Don't get complacent on the approach.`,tip:`Wide shot of the rope. Keep a clear exit.`,warning:`TOR WARNING`}],dissipated:[{briefing:`Tornado lifted. Residual rain shaft. Esc → Quit to Menu for a new run.`,tip:`Scenario complete. Start another chase from the menu.`},{briefing:`Circulation gone. Gusty outflow and light rain left. Esc → Quit to Menu.`,tip:`Debrief and roll a new intercept.`}]};function ef(e,t){return e[Math.floor(t()*e.length)%e.length]}function tf(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function nf(){return[{id:`clear`,duration:210,label:`CU FIELD`,briefing:``,warning:``,tip:``},{id:`towers`,duration:360,label:`TOWERING CU`,briefing:``,warning:`SVR WATCH`,tip:``},{id:`supercell`,duration:480,label:`SUPERCELL`,briefing:``,warning:`SVR WARNING`,tip:``},{id:`funnel`,duration:270,label:`FUNNEL`,briefing:``,warning:`TOR POSSIBLE`,tip:``},{id:`tornado`,duration:960,label:`TORNADO`,briefing:``,warning:`TOR WARNING`,tip:``},{id:`weakening`,duration:240,label:`ROPE-OUT`,briefing:``,warning:`TOR WARNING`,tip:``},{id:`dissipated`,duration:99999,label:`DISSIPATED`,briefing:``,warning:``,tip:``}]}function rf(e,t,n){let r=V.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)}var af=class{cell=new H(40,0,420);motion=new H(2.4,0,7.2);elapsed=0;timeScale=1;playerControlled=!1;endlessTornado=!1;hunting=!1;huntTarget=new H;networkSlave=!1;phaseIndex=0;phaseTime=0;maxEf=3;phases=nf();roll={seed:1,startX:40,startZ:420,motionX:2.4,motionZ:7.2,durationScale:1,meander:1,surgeWindow:.45,producesTornado:!0,briefings:{}};get phase(){return this.phases[this.phaseIndex].id}setVariant(e){this.maxEf=Xd(e)}applyRemoteStorm(e){this.networkSlave=!0,this.cell.set(e.cx,0,e.cz),this.motion.set(e.mx,0,e.mz),this.elapsed=e.elapsed;let t=this.phases.findIndex(t=>t.id===e.phase);if(t>=0){this.phaseIndex=t;let n=Math.max(this.phases[t].duration,.01);this.phaseTime=V.clamp(e.phaseProgress,0,1)*n}}clearNetworkSlave(){this.networkSlave=!1}efFromStrength(e){let t=V.smoothstep(.38,.97,e),n=Math.round(t*this.maxEf);return`EF${V.clamp(n,0,this.maxEf)}`}inventScenario(e=Math.random()*1e9|0,t=!1){let n=tf(e),r=(n()-.5)*Ru*.55,i=-200+n()*1600,a=.45+n()*1.1,o=1.6+n()*2.2,s=.88+n()*.22,c=.6+n()*1.1,l=.3+n()*.35,u=t||n()>.32,d={};for(let e of Object.keys($d))d[e]=ef($d[e],n);u||(d.supercell=ef(Qd,n),d.dissipated={briefing:`Hook washed out. Never got a confirmed tornado — good call holding the report.`,tip:`Scenario complete. Esc → Quit to Menu for a new run.`});let f=u?nf():nf().filter(e=>e.id!==`funnel`&&e.id!==`tornado`&&e.id!==`weakening`);this.phases=f.map(e=>{let t=d[e.id],r=$d[e.id][0],i=e.duration*s;return e.id!==`dissipated`&&(i*=.85+n()*.35),!u&&e.id===`supercell`&&(i*=1.55),e.id===`tornado`&&(i*=.9+this.maxEf*.05),{...e,duration:i,briefing:t?.briefing??r.briefing,tip:t?.tip??r.tip,warning:t?.warning??e.warning}}),this.roll={seed:e,startX:r,startZ:i,motionX:n()>.5?a:-a*.35+a*.4,motionZ:o,durationScale:s,meander:c,surgeWindow:l,producesTornado:u,briefings:d}}restart(){this.inventScenario(),this.elapsed=0,this.phaseIndex=0,this.phaseTime=0,this.playerControlled=!1,this.endlessTornado=!1,this.hunting=!1,this.timeScale=1,this.cell.set(this.roll.startX,0,this.roll.startZ),this.motion.set(this.roll.motionX,0,this.roll.motionZ)}applyFastFormation(){for(let e of this.phases)(e.id===`clear`||e.id===`towers`||e.id===`supercell`||e.id===`funnel`)&&(e.duration*=.28)}setHuntTarget(e,t){this.huntTarget.set(e,0,t)}startSurviveHunt(){this.inventScenario(Math.random()*1e9|0,!0),this.elapsed=0,this.playerControlled=!1,this.endlessTornado=!0,this.hunting=!0,this.maxEf=5;let e=0;for(let t=0;t<this.phases.length;t++){if(this.phases[t].id===`tornado`){this.phaseIndex=t;break}e+=this.phases[t].duration}this.phaseTime=this.phases[this.phaseIndex].duration*.45,this.elapsed=e+this.phaseTime,this.motion.set(0,0,0);for(let e of this.phases)e.id===`tornado`&&(e.duration=999999,e.label=`EF5 HUNT`,e.briefing=`Catastrophic tornado on the ground and hunting you. Survive the clock — do not get caught.`,e.tip=`Keep moving. Deploy TIV claws only for short holds. Never sit in the core.`,e.warning=`TOR WARNING`);this.cell.set(-420,0,980),this.huntTarget.set(0,0,40)}startTornadoFormation(){this.inventScenario(Math.random()*1e9|0,!0),this.elapsed=0,this.playerControlled=!0,this.endlessTornado=!0,this.hunting=!1,this.timeScale=1,this.cell.set(this.roll.startX,0,this.roll.startZ),this.motion.set(this.roll.motionX*.35,0,this.roll.motionZ*.35);let e=0;for(let t=0;t<this.phases.length;t++){if(this.phases[t].id===`tornado`){this.phaseIndex=t;break}e+=this.phases[t].duration}this.phaseTime=this.phases[this.phaseIndex].duration*.35,this.elapsed=e+this.phaseTime;for(let e of this.phases)e.id===`tornado`&&(e.duration=999999,e.label=`ON THE GROUND`,e.briefing=`You are the tornado. Steer the vortex across the plains — the storm will not rope out.`,e.tip=`WASD / stick to move. Hunt AI traffic and cities. Esc → Quit anytime.`,e.warning=`TOR WARNING`)}startAsTornado(){this.startTornadoFormation()}update(e){let t=this.networkSlave?0:e*this.timeScale;if(this.elapsed+=t,this.phaseTime+=t,!this.networkSlave){if(this.hunting&&!this.playerControlled){let e=this.huntTarget.x-this.cell.x,n=this.huntTarget.z-this.cell.z,r=Math.hypot(e,n)||1,i=V.clamp(1-r/550,0,1),a=V.lerp(38,24,i),o=e/r,s=n/r,c=Math.sin(this.elapsed*.7)*.22;this.cell.x+=(o*a+-s*c*8)*t,this.cell.z+=(s*a+o*c*8)*t,this.cell.x=V.clamp(this.cell.x,-Ru+80,Ru-80),this.cell.z=V.clamp(this.cell.z,-Ru+80,Ru-80),this.motion.set(o*a,0,s*a)}else this.playerControlled||(this.cell.x+=this.motion.x*t,this.cell.z+=this.motion.z*t)}let n=this.phases[this.phaseIndex],r=n.id===`tornado`;if(!this.endlessTornado||!r){if(this.phaseIndex<this.phases.length-1&&this.phaseTime>=n.duration){let e=this.phases[this.phaseIndex+1];this.endlessTornado&&e&&(e.id===`weakening`||e.id===`dissipated`)?this.phaseTime=n.duration*.5:(this.phaseTime-=n.duration,this.phaseIndex+=1)}}else this.endlessTornado&&r&&(this.phaseTime=Math.min(this.phaseTime,n.duration*.55));let i=this.phases[this.phaseIndex].id,a=this.phaseTime,o=this.phases[this.phaseIndex].duration,s=V.clamp(a/Math.max(o,.01),0,1),c=0,l=0,u=0,d=0,f=.12,p=0,m=0,h=`—`;switch(i){case`clear`:c=.08+.18*s,l=.02,f=.1+.1*s;break;case`towers`:c=.25+.4*s,l=.08+.22*s,f=.22+.28*s,m=.25*s,this.playerControlled||(this.motion.x=this.roll.motionX*(.9+.2*s),this.motion.z=this.roll.motionZ*(.9+.25*s));break;case`supercell`:c=.65+.3*s,l=.3+.38*s,d=.25+.72*s,f=.5+.28*s,p=.3+.45*s,m=.55+.35*s;break;case`funnel`:c=.94,l=.62,d=.96,u=.12+.42*rf(.08,1,s),f=.74,p=.72,m=.88,h=`FUNNEL`;break;case`tornado`:{c=1,l=.68+.25*Math.sin(s*Math.PI),d=.9;let e=this.endlessTornado?.85+.15*Math.sin(this.elapsed*.15):Math.sin(Math.min(s,1)*Math.PI),n=!this.endlessTornado&&s>this.roll.surgeWindow-.1&&s<this.roll.surgeWindow+.1?.08:this.endlessTornado&&Math.sin(this.elapsed*.4)>.85?.06:0,r=.72+this.maxEf*.056;u=Math.min(1,.42+r*e+n+(this.maxEf>=4?.06:0)),f=.78+.16*e+(this.maxEf>=4?.06:0),this.hunting&&(f=Math.min(f,.72)),p=.82+.12*Math.sin(s*Math.PI*2),m=.92,h=this.efFromStrength(u),!this.playerControlled&&!this.hunting&&(this.cell.x+=Math.sin(this.elapsed*.32)*2.4*this.roll.meander*t,this.cell.z+=Math.cos(this.elapsed*.18)*.6*this.roll.meander*t);break}case`weakening`:c=.75-.35*s,l=.78,d=.65-.5*s,u=Math.max(0,.52*(1-s)),f=.68-.2*s,p=.72,m=.4*(1-s),h=u>.12?`ROPE`:`—`;break;case`dissipated`:c=.32,l=.38,d=.04,u=0,f=.36,p=.32}let g=this.phases[this.phaseIndex];return{phase:i,phaseProgress:s,organization:c,precip:l,tornadoStrength:u,wallCloud:d,skyDark:f,rfd:p,inflow:m,efLabel:h,phaseLabel:g.label,briefing:g.briefing,warning:g.warning,elapsed:this.elapsed,cell:this.cell.clone(),motion:this.motion.clone(),warningActive:g.warning.includes(`TOR`)||g.warning.includes(`SVR WARNING`),interceptTip:g.tip}}};function of(e){let t=e.motion.x,n=e.motion.z,r=Math.hypot(t,n)||1,i=t/r,a=n/r,o=-a,s=i,c=320+e.organization*180,l=e.cell.x-i*40+i*c*.15-35,u=e.cell.z+a*50+a*c*.2+25,d=1100+e.organization*500,f=850+e.organization*350;return{points:[{x:l+i*d+o*f*.15,z:u+a*d+s*f*.15},{x:l+i*d*.2+o*f,z:u+a*d*.2+s*f},{x:l-i*d*.85+o*f*.1,z:u-a*d*.85+s*f*.1},{x:l+i*d*.2-o*f,z:u+a*d*.2-s*f}],labelX:l+i*d*.55,labelZ:u+a*d*.55}}function sf(e){return e<5?`transparent`:e<20?`rgba(4, 140, 80, 0.45)`:e<30?`rgba(20, 180, 60, 0.55)`:e<40?`rgba(60, 210, 50, 0.62)`:e<45?`rgba(210, 220, 40, 0.7)`:e<50?`rgba(240, 160, 20, 0.75)`:e<55?`rgba(230, 70, 20, 0.8)`:e<60?`rgba(200, 20, 60, 0.85)`:e<65?`rgba(180, 30, 180, 0.88)`:`rgba(250, 220, 250, 0.9)`}function cf(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function lf(e,t,n){if(n.precip<.03&&n.organization<.2)return 0;let r=n.cell.x,i=n.cell.z,a=n.motion.x,o=n.motion.z,s=Math.hypot(a,o)||1,c=a/s,l=o/s,u=l,d=-c,f=e-r,p=t-i,m=f*c+p*l,h=f*u+p*d,g=n.precip,_=n.organization,v=cf(e*.04,t*.04),y=cf(e*.11+3.1,t*.09-1.7),b=0,x=m-55,S=h+110,C=Math.hypot(x*.72,S*.95),w=480+v*90-y*55;if(C<w){let e=1-C/w,t=.82+v*.28+y*.12;b=Math.max(b,(16+g*36)*e**1.05*t)}if(C<240+v*40){let e=1-C/260;b=Math.max(b,(34+g*26)*Math.max(0,e)*(.9+v*.2))}C<95&&(b=Math.max(b,48+g*18+n.rfd*8));let T=Math.hypot(m-100,h-35);if(T<400&&g>.18&&(b=Math.max(b,(7+g*15)*(1-T/400)*(.75+v*.4))),_>.38){let e=Math.atan2(h,m),t=Math.hypot(m,h),r=-2.35;if(e>r&&e<-.15&&t>28&&t<245){let i=(e-r)/2.2,a=175-i*95,o=48+(1-i)*38+v*22-y*16,s=Math.abs(t-a);if(s<o){let e=1-s/o,r=Math.sin(i*Math.PI)*.55+.35+(1-i)*.15,a=.55+v*.55+y*.25,c=n.wallCloud*14,l=(26+_*30+c+g*10)*Math.max(0,e)**.85*r*a;b=Math.max(b,l),i>.72&&t<95&&(b=Math.max(b,(30+_*24+n.wallCloud*16)*(.7+v*.35)*(1-(t-28)/70)))}}if(t>18&&t<78&&e>-2.6&&e<.55){let e=(1-Math.abs(t-48)/32)*(.5+_*.5);e>0&&(b=Math.max(b,(22+_*20+n.wallCloud*12)*e*(.65+v*.4)))}}if(n.rfd>.12||n.inflow>.35||_>.5){let e=Math.max(n.rfd,n.inflow*.7,_*.35),t=m+15,r=h-5,i=Math.atan2(r,t),a=Math.hypot(t,r);if(i>.05&&i<1.45&&a<160+v*30){let t=1-Math.abs(i-.75)/.7,n=1-a/170,r=Math.max(0,t)*Math.max(0,n)*e;b*=Math.max(.08,1-r*.92)}let o=Math.hypot(m+55,h+10);o<110&&n.rfd>.2&&(b*=Math.max(.12,1-(1-o/110)*n.rfd*.75))}if(n.tornadoStrength>.2){let e=Math.hypot(f,p),t=20+n.tornadoStrength*16;e<t&&(b=Math.max(b,55+n.tornadoStrength*22*(1-e/t)))}return Math.min(75,b*(.55+g*.55))}function uf(e,t,n,r,i){if(t.precip<.03&&t.organization<.18)return;let a=i?.halfSpan??640,o=i?.step??Math.max(64,r*18),s=t.cell.x-30,c=t.cell.z+40,l=Math.max(3.5,o/r);for(let r=c-a;r<=c+a;r+=o)for(let i=s-a;i<=s+a;i+=o){let a=lf(i,r,t);if(a<10)continue;let o=n(i,r);e.fillStyle=sf(a),e.fillRect(o.x-l*.55,o.y-l*.55,l*1.15,l*1.15)}}function df(e,t,n,r=88,i=10){let a=[15,25,35,42,48,53,58,63,70],o=r/a.length;for(let r=0;r<a.length;r++)e.fillStyle=sf(a[r]),e.fillRect(t+r*o,n,o+.5,i);e.fillStyle=`rgba(200,220,200,0.75)`,e.font=`9px monospace`,e.fillText(`dBZ`,t+r+4,n+9)}var ff=class{canvas;ctx;size=360;range=3200;product=`refl`;constructor(e){this.canvas=document.createElement(`canvas`),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.id=`radar`,this.canvas.setAttribute(`aria-label`,`Storm radar`),e.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`)}toggleProduct(){this.product=this.product===`refl`?`vel`:`refl`}draw(e,t,n=0,r=0,i){let a=this.ctx,o=this.size,s=o/2,c=o/2,l=o/this.range,u=.22,d=V.lerp(e.x,t.cell.x,u),f=V.lerp(e.z,t.cell.z,u);a.clearRect(0,0,o,o),a.fillStyle=this.product===`refl`?`#070e0c`:`#0a0a12`,a.fillRect(0,0,o,o),a.strokeStyle=this.product===`refl`?`rgba(70, 190, 120, 0.22)`:`rgba(140, 140, 200, 0.22)`,a.lineWidth=1;for(let e of[.25,.5,.75,1]){let t=(o/2-4)*e;a.strokeRect(s-t,c-t,t*2,t*2)}a.beginPath(),a.moveTo(s,4),a.lineTo(s,o-4),a.moveTo(4,c),a.lineTo(o-4,c),a.stroke();let p=(e,t)=>{let n=(e-d)*l,r=(t-f)*l;return{x:s+n,y:c-r}};a.strokeStyle=`rgba(90, 90, 95, 0.55)`,a.lineWidth=1.5;for(let e=-4800;e<=4800;e+=800){let t=p(e,f-this.range),n=p(e,f+this.range);a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(n.x,n.y),a.stroke()}a.strokeStyle=`rgba(120, 120, 110, 0.7)`,a.lineWidth=2.2;{let e=p(0,f-this.range),t=p(0,f+this.range);a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(t.x,t.y),a.stroke()}a.strokeStyle=`rgba(90, 90, 95, 0.45)`,a.lineWidth=1.2;for(let e=-4800;e<=4800;e+=1200){let t=p(d-this.range,e),n=p(d+this.range,e);a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(n.x,n.y),a.stroke()}a.strokeStyle=`rgba(70, 75, 80, 0.4)`,a.lineWidth=.8;for(let e of Hu){let t=(e.ax+e.bx)*.5,n=(e.az+e.bz)*.5;if(Math.hypot(t-d,n-f)>this.range*.7)continue;let r=p(e.ax,e.az),i=p(e.bx,e.bz);a.beginPath(),a.moveTo(r.x,r.y),a.lineTo(i.x,i.y),a.stroke()}if(this.product===`refl`?this.drawReflectivity(a,t,p,l):this.drawVelocity(a,t,p,l),t.warningActive){let e=of(t);a.strokeStyle=t.warning.includes(`TOR`)?`rgba(255,40,40,0.9)`:`rgba(255,180,40,0.85)`,a.fillStyle=t.warning.includes(`TOR`)?`rgba(255,40,40,0.1)`:`rgba(255,180,40,0.08)`,a.lineWidth=2.5,a.beginPath();for(let t=0;t<e.points.length;t++){let n=p(e.points[t].x,e.points[t].z);t===0?a.moveTo(n.x,n.y):a.lineTo(n.x,n.y)}a.closePath(),a.fill(),a.stroke();let n=p(e.labelX,e.labelZ);a.font=`bold 12px monospace`,a.fillStyle=a.strokeStyle,a.fillText(t.warning||`WARN`,n.x-36,n.y)}let m=t.phase===`funnel`||t.phase===`tornado`||t.phase===`weakening`||t.tornadoStrength>.05,h=p(t.cell.x,t.cell.z);if(m){let e=t.phase===`tornado`||t.phase===`weakening`||t.tornadoStrength>.35;a.strokeStyle=e?`#ff3344`:`#ffaa33`,a.fillStyle=e?`rgba(255,40,50,0.25)`:`rgba(255,170,40,0.2)`;let n=3+t.tornadoStrength*6;a.lineWidth=2,a.beginPath(),a.arc(h.x,h.y,n,0,Math.PI*2),a.fill(),a.stroke(),a.fillStyle=e?`#ff4455`:`#ffcc55`,a.beginPath(),a.arc(h.x,h.y,2,0,Math.PI*2),a.fill()}else t.organization>.4&&(a.strokeStyle=`#66ccff`,a.lineWidth=1.5,a.beginPath(),a.arc(h.x,h.y,7,0,Math.PI*2),a.stroke());{let e=t.motion.x,n=t.motion.z,r=Math.hypot(e,n);if(r>.5){let i=p(t.cell.x+e/r*55,t.cell.z+n/r*55);a.strokeStyle=m?`rgba(255,70,80,0.95)`:`rgba(255,255,255,0.55)`,a.fillStyle=a.strokeStyle,a.lineWidth=2,a.beginPath(),a.moveTo(h.x,h.y),a.lineTo(i.x,i.y),a.stroke();let o=Math.atan2(i.y-h.y,i.x-h.x);a.beginPath(),a.moveTo(i.x,i.y),a.lineTo(i.x-Math.cos(o-.5)*8,i.y-Math.sin(o-.5)*8),a.lineTo(i.x-Math.cos(o+.5)*8,i.y-Math.sin(o+.5)*8),a.closePath(),a.fill()}}if(i)for(let e of i){let t=p(e.x,e.z);a.fillStyle=`#3a9cff`,a.beginPath(),a.arc(t.x,t.y,4,0,Math.PI*2),a.fill(),a.strokeStyle=`#9ed0ff`,a.lineWidth=1,a.stroke(),a.fillStyle=`#9ed0ff`,a.font=`10px monospace`,a.fillText(e.name.slice(0,10),t.x+6,t.y-4)}let g=p(e.x,e.z),_=Math.sin(r)*8,v=-Math.cos(r)*8,y=Math.sin(r+2.5)*7,b=-Math.cos(r+2.5)*7,x=Math.sin(r-2.5)*7,S=-Math.cos(r-2.5)*7;a.fillStyle=`#ffffff`,a.beginPath(),a.moveTo(g.x+_,g.y+v),a.lineTo(g.x+y,g.y+b),a.lineTo(g.x+x,g.y+S),a.closePath(),a.fill(),a.fillStyle=`rgba(255, 220, 120, 0.9)`,a.font=`bold 12px monospace`,a.fillText(`N`,s-4,16),a.fillStyle=this.product===`refl`?`rgba(120, 220, 150, 0.8)`:`rgba(160, 160, 255, 0.85)`,a.font=`11px monospace`,a.fillText(this.product===`refl`?`BASE REFL`:`STORM VEL`,12,o-14),a.fillText(`${(this.range/1609).toFixed(1)} mi`,o-58,o-14),this.product===`refl`&&df(a,12,o-32,72,8)}drawReflectivity(e,t,n,r){let i=1/r;if(uf(e,t,n,i,{halfSpan:620,step:Math.max(70,i*18)}),t.organization>.45){let i=n(t.cell.x,t.cell.z);e.strokeStyle=`rgba(255, 90, 60, ${.35+t.organization*.35})`,e.lineWidth=1.6,e.setLineDash([4,4]),e.beginPath(),e.arc(i.x,i.y,55*r,.2,Math.PI*1.55),e.stroke(),e.setLineDash([])}if(t.inflow>.3){let r=n(t.cell.x+110,t.cell.z-70);e.strokeStyle=`rgba(120, 200, 255, ${.4*t.inflow})`,e.lineWidth=1.6,e.beginPath(),e.moveTo(r.x-28,r.y),e.lineTo(r.x+18,r.y-12),e.stroke()}}drawVelocity(e,t,n,r){if(t.organization<.25)return;let i=n(t.cell.x,t.cell.z),a=120*r*(.6+t.organization*.5);e.fillStyle=`rgba(40, 200, 90, ${.3+t.organization*.3})`,e.beginPath(),e.ellipse(i.x-a*.35,i.y,a*.55,a*.7,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(220, 50, 60, ${.3+t.organization*.3})`,e.beginPath(),e.ellipse(i.x+a*.35,i.y,a*.55,a*.7,0,0,Math.PI*2),e.fill(),t.tornadoStrength>.2&&(e.strokeStyle=`rgba(255, 255, 80, ${.5+t.tornadoStrength*.4})`,e.lineWidth=2,e.beginPath(),e.arc(i.x,i.y,18*r+t.tornadoStrength*8,0,Math.PI*2),e.stroke())}},pf=class{ctx=null;master=null;engine=null;engineHarm=null;engineGain=null;wind=null;windGain=null;rain=null;rainGain=null;roar=null;roarGain=null;started=!1;lastThunder=8;lastHail=0;lastSiren=``;async ensure(){if(this.started)return;let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.2,this.master.connect(this.ctx.destination),this.engine=this.ctx.createOscillator(),this.engine.type=`sawtooth`,this.engine.frequency.value=55;let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.value=280,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engine.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.master),this.engine.start(),this.engineHarm=this.ctx.createOscillator(),this.engineHarm.type=`triangle`,this.engineHarm.frequency.value=110;let n=this.ctx.createGain();n.gain.value=.35,this.engineHarm.connect(n),n.connect(this.engineGain),this.engineHarm.start(),this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.wind=this.makeNoise(!0),this.wind.connect(this.windGain),this.windGain.connect(this.master),this.wind.start(),this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,this.rain=this.makeNoise(!1);let r=this.ctx.createBiquadFilter();r.type=`bandpass`,r.frequency.value=2200,r.Q.value=.7,this.rain.connect(r),r.connect(this.rainGain),this.rainGain.connect(this.master),this.rain.start(),this.roarGain=this.ctx.createGain(),this.roarGain.gain.value=0,this.roar=this.makeNoise(!0);let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.value=180,this.roar.connect(i),i.connect(this.roarGain),this.roarGain.connect(this.master),this.roar.start(),this.started=!0}makeNoise(e){let t=this.ctx,n=t.sampleRate*2,r=t.createBuffer(1,n,t.sampleRate),i=r.getChannelData(0),a=0;for(let t=0;t<n;t++){let n=Math.random()*2-1;a=e?a*.95+n*.05:n,i[t]=a}let o=t.createBufferSource();return o.buffer=r,o.loop=!0,o}playWarningChirp(e){if(!this.started||!this.ctx||!this.master||!e||e===this.lastSiren)return;this.lastSiren=e;let t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type=`square`;let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.12,t+.02),r.gain.exponentialRampToValueAtTime(1e-4,t+.55),n.frequency.setValueAtTime(e.includes(`TOR`)?880:660,t),n.frequency.setValueAtTime(e.includes(`TOR`)?660:520,t+.18),n.frequency.setValueAtTime(e.includes(`TOR`)?990:720,t+.35),n.connect(r),r.connect(this.master),n.start(t),n.stop(t+.6)}update(e,t){if(!this.started||!this.ctx)return;this.ctx.state===`suspended`&&this.ctx.resume();let n=this.ctx.currentTime,r=Math.min(Math.abs(t.speed)/45,1);if(this.engine&&this.engineGain){let e=48+r*95;this.engine.frequency.setTargetAtTime(e,n,.08),this.engineHarm&&this.engineHarm.frequency.setTargetAtTime(e*2,n,.08),this.engineGain.gain.setTargetAtTime(.04+r*.2,n,.1)}if(this.windGain){let e=Math.min(1,t.wind*.45+t.tornadoNear*.9+r*.18);this.windGain.gain.setTargetAtTime(e*.42,n,.22)}this.rainGain&&this.rainGain.gain.setTargetAtTime(t.precipNear*.55,n,.28),this.roarGain&&this.roarGain.gain.setTargetAtTime(t.tornadoNear*t.tornadoNear*.7,n,.35),this.lastThunder-=e,t.flash>.55&&this.lastThunder<=0&&(this.thunder(),this.lastThunder=3+Math.random()*6),this.lastHail-=e,t.hailNear>.25&&this.lastHail<=0&&(this.hailPing(t.hailNear),this.lastHail=.08+Math.random()*.2)}hailPing(e){if(!this.ctx||!this.master)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type=`triangle`,n.frequency.setValueAtTime(1200+Math.random()*1800,t),n.frequency.exponentialRampToValueAtTime(400,t+.05);let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.04+e*.08,t+.005),r.gain.exponentialRampToValueAtTime(1e-4,t+.08),n.connect(r),r.connect(this.master),n.start(t),n.stop(t+.1)}thunder(){if(!this.ctx||!this.master)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(80,e),t.frequency.exponentialRampToValueAtTime(28,e+1.2);let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.55,e+.05),n.gain.exponentialRampToValueAtTime(1e-4,e+1.8),t.connect(n),n.connect(this.master),t.start(e),t.stop(e+2)}},mf=class{score=0;bestProximityM=1/0;interceptSeconds=0;photos=0;tickAcc=0;photoAcc=0;phaseBonuses=new Set;reset(){this.score=0,this.bestProximityM=1/0,this.interceptSeconds=0,this.photos=0,this.tickAcc=0,this.photoAcc=0,this.phaseBonuses.clear()}update(e,t,n,r){if(this.tickAcc+=e,this.photoAcc+=e,(n.phase===`funnel`||n.phase===`tornado`||n.phase===`weakening`)&&!this.phaseBonuses.has(n.phase)){let e=t.distanceTo(r);if(e<450&&e>30){this.phaseBonuses.add(n.phase);let e=n.phase===`tornado`?180:n.phase===`funnel`?90:120;this.score+=e,this.photos+=1}}if(this.tickAcc<.25)return;let i=this.tickAcc;if(this.tickAcc=0,n.tornadoStrength<.12||n.phase===`dissipated`)return;let a=t.distanceTo(r);this.bestProximityM=Math.min(this.bestProximityM,a);let o=t.x-r.x,s=t.z-r.z,c=o>-40&&s<80,l=c?1.25:.65;if(a<240&&a>28){this.interceptSeconds+=i;let e=1-(a-28)/212,t=n.tornadoStrength,r=e*e*t*l*20*i;this.score+=r,this.photoAcc>4&&a<180&&c&&t>.45&&(this.photoAcc=0,this.photos+=1,this.score+=25*t)}else a<=28&&n.tornadoStrength>.4&&(this.score=Math.max(0,this.score-10*i))}rank(){return this.score>3200?`DOMINATOR`:this.score>1600?`CORE`:this.score>700?`INTERCEPT`:this.score>220?`SCOUT`:`SPOTTER`}},hf=class{group=new On;meshes=[];loft=[];cursor=0;spawnAcc=0;last=new H(1/0,0,1/0);constructor(e){let t=[6969928,4866100,9075296,3814440,5916728,9124394,6053992,2761240];for(let e=0;e<280;e++){let n=new K({color:t[e%t.length],roughness:1,flatShading:!0}),r,i=e%5;r=i===0?new G(1.2+Math.random()*3.5,.12+Math.random()*.45,.5+Math.random()*1.8):i===1?new Ui(.35+Math.random()*1.1,0):i===2?new Vi(.4+Math.random()*.8,.6+Math.random(),5):new G(.4+Math.random()*1.6,.2+Math.random()*.9,.4+Math.random()*1.6);let a=new W(r,n);a.visible=!1,a.castShadow=!0,this.group.add(a),this.meshes.push(a),this.loft.push({vel:new H,spin:new H,life:0,flying:!1,trapped:!1,rad:.55+Math.random()*.9})}e.add(this.group)}update(e,t,n){if(this.tickLoft(e,n),t.tornadoStrength<.2||t.phase!==`tornado`&&t.phase!==`weakening`&&t.phase!==`funnel`)return;this.spawnAcc+=e;let r=this.last.distanceTo(t.cell);if(this.spawnAcc<.045||r<1.2)return;this.spawnAcc=0,this.last.copy(t.cell);let i=t.tornadoStrength,a=2+Math.floor(i*6),o=18+i*55;for(let e=0;e<a;e++){let e=-1;for(let t=0;t<this.meshes.length;t++){let n=(this.cursor+t)%this.meshes.length;if(!this.meshes[n].visible){e=n;break}}if(e<0)for(let t=0;t<this.meshes.length;t++){let n=(this.cursor+t)%this.meshes.length;if(!this.loft[n].flying){e=n;break}}e<0&&(e=this.cursor%this.meshes.length),this.cursor=e+1;let n=this.meshes[e],r=this.loft[e],a=Math.random()*Math.PI*2,s=Math.random()<.55?3+Math.random()*o*.45:8+Math.random()*o,c=t.cell.x+Math.cos(a)*s,l=t.cell.z+Math.sin(a)*s,u=Y(c,l);n.position.set(c,u+.1+Math.random()*.25,l),n.rotation.set(Math.random()*.8,Math.random()*Math.PI*2,Math.random()*.6),n.scale.setScalar(.7+i*1.5+Math.random()*.6),n.visible=!0,r.flying=!1,r.trapped=!1,r.life=0,r.vel.set(0,0,0)}}tickLoft(e,t){let n=t&&t.group.visible&&t.destroyRadius>3&&t.liftForce>.05;for(let r=0;r<this.meshes.length;r++){let i=this.meshes[r],a=this.loft[r];if(!i.visible)continue;if(a.flying){if(a.life-=e,n&&t&&a.trapped){let n=i.position.x-t.position.x,o=i.position.z-t.position.z,s=Math.hypot(n,o)||.1,c=t.destroyRadius;if(s<c*1.4){let l=-o/s,u=n/s,d=(c*(.2+r%6*.05)-s)*(3.2+t.liftForce*4);a.vel.x+=(l*(30+t.liftForce*65)+n/s*d)*e,a.vel.z+=(u*(30+t.liftForce*65)+o/s*d)*e;let f=5+t.liftForce*42;a.vel.y+=(t.position.y+f-i.position.y)*2.6*e+t.liftForce*7*e,a.vel.x*=Math.max(0,1-.5*e),a.vel.z*=Math.max(0,1-.5*e),a.life<1.5&&(a.life=2+Math.random()*2)}else a.trapped=!1,a.vel.y-=18*e}else if(a.vel.y-=20*e,n&&t&&!a.trapped){let e=i.position.x-t.position.x,n=i.position.z-t.position.z;Math.hypot(e,n)<t.destroyRadius*.8&&a.vel.length()<16&&(a.trapped=!0)}i.position.addScaledVector(a.vel,e),i.rotation.x+=a.spin.x*e,i.rotation.y+=a.spin.y*e,i.rotation.z+=a.spin.z*e;let o=Y(i.position.x,i.position.z);i.position.y<o+.25&&a.vel.y<0?a.trapped&&n&&t?(i.position.y=o+.45,a.vel.y=Math.abs(a.vel.y)*.5+5+t.liftForce*8):(i.position.y=o+.12,a.vel.multiplyScalar(.3),a.vel.y=0,(a.vel.length()<2||a.life<=0)&&(a.flying=!1,a.trapped=!1,a.life=0,a.vel.set(0,0,0))):!a.trapped&&a.life<=0&&(i.position.y=o+.12,a.flying=!1,a.trapped=!1,a.vel.set(0,0,0));continue}if(!n||!t)continue;let o=i.position.x-t.position.x,s=i.position.z-t.position.z;if(Math.hypot(o,s)>t.destroyRadius+4)continue;let c=new H(o,0,s);c.lengthSq()<.01&&c.set(Math.random()-.5,0,Math.random()-.5),c.normalize();let l=new H(-c.z,0,c.x),u=t.liftForce;a.flying=!0,a.trapped=!0,a.life=6+Math.random()*4,a.vel.set(l.x*(12+u*30)-c.x*5+(Math.random()-.5)*6,9+u*28+Math.random()*10,l.z*(12+u*30)-c.z*5+(Math.random()-.5)*6),a.spin.set((Math.random()-.5)*12,(Math.random()-.5)*14,(Math.random()-.5)*12)}this.collideFlying()}collideFlying(){let e=[];for(let t=0;t<this.meshes.length;t++)this.meshes[t].visible&&this.loft[t].flying&&e.push(t);if(e.length<2)return;let t=new Map;for(let n of e){let e=this.meshes[n].position,r=`${Math.floor(e.x/6)}:${Math.floor(e.y/6)}:${Math.floor(e.z/6)}`,i=t.get(r);i||(i=[],t.set(r,i)),i.push(n)}let n=0;for(let e of t.values())for(let t=0;t<e.length;t++)for(let r=t+1;r<e.length;r++){if(n++>70)return;let i=e[t],a=e[r],o=this.meshes[i],s=this.meshes[a],c=this.loft[i],l=this.loft[a],u=s.position.x-o.position.x,d=s.position.y-o.position.y,f=s.position.z-o.position.z,p=Math.hypot(u,d,f),m=c.rad+l.rad;if(p>=m||p<1e-4)continue;let h=u/p,g=d/p,_=f/p,v=(m-p)*.5;o.position.x-=h*v,o.position.y-=g*v,o.position.z-=_*v,s.position.x+=h*v,s.position.y+=g*v,s.position.z+=_*v;let y=(l.vel.x-c.vel.x)*h+(l.vel.y-c.vel.y)*g+(l.vel.z-c.vel.z)*_;if(y>=0)continue;let b=-y*.8;c.vel.x-=h*b,c.vel.y-=g*b,c.vel.z-=_*b,l.vel.x+=h*b,l.vel.y+=g*b,l.vel.z+=_*b,Math.abs(y)>8&&(c.trapped=!1,l.trapped=!1,c.life=Math.min(c.life,2),l.life=Math.min(l.life,2))}}reset(){for(let e=0;e<this.meshes.length;e++)this.meshes[e].visible=!1,this.loft[e].flying=!1,this.loft[e].trapped=!1,this.loft[e].life=0,this.loft[e].vel.set(0,0,0);this.cursor=0,this.last.set(1/0,0,1/0)}},gf=class{group=new On;buildings=[];props=[];treeBatches=[];flying=[];grounded=[];rubblePool=[];treeDebrisPool=[];scars=[];rubbleIdx=0;treeDebrisIdx=0;dummy=new Dn;bCells=new Map;pCells=new Map;hashSize=80;wreckageScore=0;structureHits=0;collisions=null;maxFlying=220;scarMat=new Ur({color:2761240,transparent:!0,opacity:.55,side:2,depthWrite:!1});constructor(e){for(let e=0;e<140;e++){let t=new W(new G(.5+Math.random()*2.5,.2+Math.random()*1.2,.4+Math.random()*2),new K({color:[6969928,9124394,4866100,9080984,3816e3][e%5],roughness:1,flatShading:!0}));t.visible=!1,t.castShadow=!0,this.group.add(t),this.rubblePool.push(t)}for(let e=0;e<160;e++){let t=e%2==0,n=new W(t?new Vi(1.2+Math.random(),2.5+Math.random()*2,5):new Bi(.12,.2,2+Math.random()*3,5),new K({color:t?3099176:4864040,roughness:1,flatShading:!0}));n.visible=!1,n.castShadow=!0,this.group.add(n),this.treeDebrisPool.push(n)}e.add(this.group)}cellKey(e,t){let n=this.hashSize;return`${Math.floor(e/n)},${Math.floor(t/n)}`}hashPush(e,t,n,r){let i=this.cellKey(t,n),a=e.get(i);a||(a=[],e.set(i,a)),a.push(r)}registerBuildings(e){this.buildings.length=0,this.bCells.clear();for(let t of e){let e=2,n=2,r=[];for(let i of t.children){r.push({mesh:i,localPos:i.position.clone(),localRot:i.rotation.clone(),localScale:i.scale.clone()});let t=i;if(!t.geometry)continue;t.geometry.boundingBox||t.geometry.computeBoundingBox();let a=t.geometry.boundingBox;if(!a)continue;let o=Math.abs(i.scale.x)||1,s=Math.abs(i.scale.z)||1;e=Math.max(e,Math.max(Math.abs(a.min.x),Math.abs(a.max.x))*o),n=Math.max(n,Math.max(Math.abs(a.min.z),Math.abs(a.max.z))*s)}let i=this.buildings.length;this.buildings.push({root:t,alive:!0,radius:Math.min(16,Math.max(1.6,Math.max(e,n)*.9)),pieces:r}),this.hashPush(this.bCells,t.position.x,t.position.z,i)}}registerTreeBatches(e){this.treeBatches.length=0;for(let t of e)this.treeBatches.push({batch:t,alive:new Uint8Array(t.count).fill(1)})}registerProps(e){this.props.length=0,this.pCells.clear();for(let t of e){let e=this.props.length;this.props.push({mesh:t,alive:!0,radius:t.name===`cow`?1.2:1.5,home:t.position.clone(),homeRot:t.rotation.clone(),homeScale:t.scale.clone(),parent:t.parent}),this.hashPush(this.pCells,t.position.x,t.position.z,e)}}forCellsNear(e,t,n,r,i){let a=this.hashSize,o=Math.floor((t-r)/a),s=Math.floor((t+r)/a),c=Math.floor((n-r)/a),l=Math.floor((n+r)/a),u=new Set;for(let t=o;t<=s;t++)for(let n=c;n<=l;n++){let r=e.get(`${t},${n}`);if(r)for(let e of r)u.has(e)||(u.add(e),i(e))}}reset(){this.wreckageScore=0,this.structureHits=0;for(let e of this.flying)e.pooled?e.mesh.visible=!1:e.mesh.parent===this.group&&this.group.remove(e.mesh);this.flying.length=0;for(let e of this.grounded)e.pooled?e.mesh.visible=!1:e.mesh.parent===this.group&&this.group.remove(e.mesh);this.grounded.length=0;for(let e of this.scars){e.parent&&e.parent.remove(e),e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}this.scars.length=0;for(let e of this.rubblePool)e.visible=!1,e.rotation.set(0,0,0),e.scale.set(1,1,1);for(let e of this.treeDebrisPool)e.visible=!1,e.rotation.set(0,0,0),e.scale.set(1,1,1);for(let e of this.buildings){e.alive=!0,e.root.visible=!0;for(let t of e.pieces)t.mesh.parent!==e.root&&(t.mesh.parent&&t.mesh.parent.remove(t.mesh),e.root.add(t.mesh)),t.mesh.visible=!0,t.mesh.position.copy(t.localPos),t.mesh.rotation.copy(t.localRot),t.mesh.scale.copy(t.localScale)}for(let e of this.props)e.alive=!0,e.mesh.visible=!0,e.parent&&e.mesh.parent!==e.parent&&(e.mesh.parent&&e.mesh.parent.remove(e.mesh),e.parent.add(e.mesh)),e.mesh.position.copy(e.home),e.mesh.rotation.copy(e.homeRot),e.mesh.scale.copy(e.homeScale);for(let e of this.treeBatches)e.alive.fill(1),this.restoreTreeBatch(e)}restoreTreeBatch(e){let{batch:t}=e,n=new $t;for(let e=0;e<t.count;e++)n.fromArray(t.canopyMats,e*16),t.canopy.setMatrixAt(e,n),t.trunks&&t.trunkMats&&(n.fromArray(t.trunkMats,e*16),t.trunks.setMatrixAt(e,n));t.canopy.instanceMatrix.needsUpdate=!0,t.trunks&&(t.trunks.instanceMatrix.needsUpdate=!0)}update(e,t,n){if(this.tickFlying(e,n),!n.group.visible||n.destroyRadius<3||t.tornadoStrength<.18)return;let r=n.position.x,i=n.position.z,a=n.destroyRadius,o=t.tornadoStrength;this.reloftGrounded(n,o);let s=3,c=8;this.forCellsNear(this.bCells,r,i,a+20,e=>{if(s<=0)return;let t=this.buildings[e];if(!t.alive)return;let c=t.root.position.x-r,l=t.root.position.z-i;Math.hypot(c,l)>a+t.radius||(this.destroyBuilding(t,n,o),s--)}),this.forCellsNear(this.pCells,r,i,a+8,e=>{if(c<=0)return;let t=this.props[e];if(!t.alive)return;let s=t.mesh.position.x-r,l=t.mesh.position.z-i;Math.hypot(s,l)>a+t.radius||(this.destroyProp(t,n,o),c--)});for(let e of this.treeBatches)this.destroyTreesInReach(e,r,i,a,n,o)}reloftGrounded(e,t){let n=e.position.x,r=e.position.z,i=e.destroyRadius,a=0;for(let e=this.grounded.length-1;e>=0&&!(a>=8);e--){let o=this.grounded[e];if(!o.mesh.visible){this.grounded.splice(e,1);continue}let s=o.mesh.position.x-n,c=o.mesh.position.z-r;if(Math.hypot(s,c)>i+5)continue;this.grounded.splice(e,1),a+=1;let l=new H(s,0,c);l.lengthSq()<.01&&l.set(Math.random()-.5,0,Math.random()-.5),l.normalize(),this.flying.push({mesh:o.mesh,vel:this.orbitKick(l,t,1),spin:new H((Math.random()-.5)*14,(Math.random()-.5)*16,(Math.random()-.5)*14),life:8+Math.random()*6,pooled:o.pooled,trapped:!0,rad:.9+Math.random()*1.2})}}orbitKick(e,t,n=1){let r=e.clone().normalize(),i=new H(-r.z,0,r.x);return new H(i.x*(12+t*28)*n+r.x*(-4-t*6)+(Math.random()-.5)*6,10+t*28*n+Math.random()*10,i.z*(12+t*28)*n+r.z*(-4-t*6)+(Math.random()-.5)*6)}destroyTreesInReach(e,t,n,r,i,a){let{batch:o}=e,s=!1,c=0,l=(r+8)*(r+8);for(let u=0;u<o.count;u++){if(!e.alive[u])continue;let d=o.x[u]-t,f=o.z[u]-n;if(!(d*d+f*f>l)&&!(Math.hypot(d,f)>r+Math.max(1.2,o.wide[u]*.2))&&(e.alive[u]=0,c+=1,s=!0,this.structureHits+=1,this.wreckageScore+=12+a*25,c===1&&this.collisions?.disableNear(t,n,Math.min(r,40)),this.dummy.position.set(o.x[u],-500,o.z[u]),this.dummy.scale.set(.001,.001,.001),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),o.canopy.setMatrixAt(u,this.dummy.matrix),o.trunks&&o.trunks.setMatrixAt(u,this.dummy.matrix),this.spawnTreeDebris(o.x[u],o.y[u],o.z[u],o.tall[u],o.wide[u],i,a),c>=10))break}s&&(o.canopy.instanceMatrix.needsUpdate=!0,o.trunks&&(o.trunks.instanceMatrix.needsUpdate=!0))}spawnTreeDebris(e,t,n,r,i,a,o){if(this.flying.length>this.maxFlying)return;let s=1+Math.floor(o*1.5);for(let c=0;c<s;c++){let s=this.treeDebrisPool[this.treeDebrisIdx%this.treeDebrisPool.length];this.treeDebrisIdx++,s.visible=!0,s.position.set(e+(Math.random()-.5)*i,t+r*(.2+Math.random()*.6),n+(Math.random()-.5)*i);let c=.6+Math.random()*1.4;s.scale.setScalar(c);let l=new H(e-a.position.x,0,n-a.position.z);l.lengthSq()<.01&&l.set(Math.random()-.5,0,Math.random()-.5),l.normalize(),this.flying.push({mesh:s,vel:this.orbitKick(l,o,1.1),spin:new H((Math.random()-.5)*14,(Math.random()-.5)*16,(Math.random()-.5)*14),life:7+Math.random()*5,pooled:!0,trapped:!0,rad:.7+Math.random()})}}destroyProp(e,t,n){e.alive=!1,this.structureHits+=1,this.wreckageScore+=20+n*40,this.collisions?.disableNear(e.mesh.position.x,e.mesh.position.z,e.radius+.5);let r=e.mesh.position.clone();e.mesh.parent&&e.mesh.parent.remove(e.mesh),this.group.add(e.mesh),e.mesh.position.copy(r),e.mesh.visible=!0;let i=new H(e.mesh.position.x-t.position.x,0,e.mesh.position.z-t.position.z);i.lengthSq()<.01&&i.set(Math.random()-.5,0,Math.random()-.5),i.normalize(),this.flying.push({mesh:e.mesh,vel:this.orbitKick(i,n,.95),spin:new H((Math.random()-.5)*10,(Math.random()-.5)*12,(Math.random()-.5)*10),life:7+Math.random()*4,pooled:!1,trapped:!0,rad:Math.max(.6,e.radius*.55)})}destroyBuilding(e,t,n){e.alive=!1,this.structureHits+=1,this.wreckageScore+=80+n*140,this.collisions?.disableNear(e.root.position.x,e.root.position.z,e.radius+1);let r=new W(new zi(e.radius*.9,16),this.scarMat.clone());r.rotation.x=-Math.PI/2,r.position.set(e.root.position.x,Y(e.root.position.x,e.root.position.z)+.1,e.root.position.z),this.group.add(r),this.scars.push(r);let i=0,a=Math.max(2,Math.min(6,this.maxFlying-this.flying.length));for(let r of e.pieces){let e=r.mesh;if(i>=a){e.visible=!1;continue}let o=new H,s=new kt;e.getWorldPosition(o),e.getWorldQuaternion(s),e.parent&&e.parent.remove(e),this.group.add(e),e.position.copy(o),e.quaternion.copy(s),e.visible=!0,i++;let c=new H(e.position.x-t.position.x,0,e.position.z-t.position.z);c.lengthSq()<.01&&c.set(Math.random()-.5,0,Math.random()-.5),c.normalize(),this.flying.push({mesh:e,vel:this.orbitKick(c,n,1.05),spin:new H((Math.random()-.5)*12,(Math.random()-.5)*14,(Math.random()-.5)*12),life:9+Math.random()*5,pooled:!1,trapped:!0,rad:1.1+Math.random()*1.4})}let o=Math.min(4,2+Math.floor(n*3),Math.max(0,this.maxFlying-this.flying.length));for(let r=0;r<o;r++){let r=this.rubblePool[this.rubbleIdx%this.rubblePool.length];this.rubbleIdx++;let i=Math.random()*Math.PI*2,a=Math.random()*e.radius;r.position.set(e.root.position.x+Math.cos(i)*a,Y(e.root.position.x,e.root.position.z)+1+Math.random()*4,e.root.position.z+Math.sin(i)*a),r.visible=!0,r.scale.setScalar(.7+Math.random()*1.4);let o=new H(r.position.x-t.position.x,0,r.position.z-t.position.z);o.lengthSq()<.01&&o.set(Math.random()-.5,0,Math.random()-.5),this.flying.push({mesh:r,vel:this.orbitKick(o,n,.9),spin:new H(Math.random()*10,Math.random()*10,Math.random()*10),life:7+Math.random()*4,pooled:!0,trapped:!0,rad:.8+Math.random()})}e.root.visible=!1}tickFlying(e,t){for(;this.flying.length>this.maxFlying;){let e=this.flying.shift();if(!e)break;e.pooled?e.mesh.visible=!1:this.grounded.push({mesh:e.mesh,pooled:!1})}let n=t.group.visible&&t.destroyRadius>3&&t.liftForce>.05,r=t.position.x,i=t.position.z,a=t.destroyRadius,o=t.liftForce;for(let s=this.flying.length-1;s>=0;s--){let c=this.flying[s];if(c.life-=e,n){let n=c.mesh.position.x-r,l=c.mesh.position.z-i,u=Math.hypot(n,l)||.1;if(c.trapped&&u<a*1.35){let r=-l/u,i=n/u,d=(a*(.22+s%5*.06)-u)*(3.4+o*4);c.vel.x+=(r*(32+o*70)+n/u*d)*e,c.vel.z+=(i*(32+o*70)+l/u*d)*e;let f=6+o*48+Math.sin(performance.now()*.002+s)*8,p=t.position.y;c.vel.y+=(p+f-c.mesh.position.y)*2.8*e+o*8*e,c.vel.x*=Math.max(0,1-.55*e),c.vel.z*=Math.max(0,1-.55*e),c.vel.y*=Math.max(0,1-.35*e),c.life<2&&(c.life=2+Math.random()*2)}else!c.trapped&&u<a*.85&&c.vel.length()<18?c.trapped=!0:c.vel.y-=18*e}else c.trapped=!1,c.vel.y-=22*e;c.mesh.position.addScaledVector(c.vel,e),c.mesh.rotation.x+=c.spin.x*e,c.mesh.rotation.y+=c.spin.y*e,c.mesh.rotation.z+=c.spin.z*e;let l=Y(c.mesh.position.x,c.mesh.position.z),u=!1;c.mesh.position.y<l+.35&&c.vel.y<0&&(c.trapped&&n?(c.mesh.position.y=l+.5,c.vel.y=Math.abs(c.vel.y)*.55+6+o*10,c.spin.x+=(Math.random()-.5)*4,c.spin.z+=(Math.random()-.5)*4):(c.mesh.position.y=l+.2,c.vel.multiplyScalar(.4),c.vel.y*=-.25,c.spin.multiplyScalar(.65),(c.vel.length()<3.2||c.life<=0)&&(c.vel.set(0,0,0),c.spin.multiplyScalar(.15),u=!0))),(!c.trapped&&(c.life<=0||u)||!n&&u)&&(c.mesh.position.y=l+.15,c.mesh.visible=!0,c.trapped=!1,this.grounded.push({mesh:c.mesh,pooled:c.pooled}),this.flying.splice(s,1))}this.collideFlying(e)}collideFlying(e){let t=this.flying.length;if(t<2)return;let n=new Map;for(let e=0;e<t;e++){let t=this.flying[e].mesh.position,r=`${Math.floor(t.x/7)}:${Math.floor(t.y/7)}:${Math.floor(t.z/7)}`,i=n.get(r);i||(i=[],n.set(r,i)),i.push(e)}let r=0,i=new H;for(let e of n.values())for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){if(r++>90)return;let a=e[t],o=e[n],s=this.flying[a],c=this.flying[o];i.subVectors(c.mesh.position,s.mesh.position);let l=i.length(),u=s.rad+c.rad;if(l>=u||l<1e-4)continue;let d=i.x/l,f=i.y/l,p=i.z/l,m=u-l;s.mesh.position.x-=d*m*.5,s.mesh.position.y-=f*m*.5,s.mesh.position.z-=p*m*.5,c.mesh.position.x+=d*m*.5,c.mesh.position.y+=f*m*.5,c.mesh.position.z+=p*m*.5;let h=c.vel.x-s.vel.x,g=c.vel.y-s.vel.y,_=c.vel.z-s.vel.z,v=h*d+g*f+_*p;if(v>=0)continue;let y=-v*.85;s.vel.x-=d*y,s.vel.y-=f*y,s.vel.z-=p*y,c.vel.x+=d*y,c.vel.y+=f*y,c.vel.z+=p*y,s.spin.x+=(Math.random()-.5)*8,s.spin.z+=(Math.random()-.5)*8,c.spin.x+=(Math.random()-.5)*8,c.spin.z+=(Math.random()-.5)*8;let b=Math.abs(v);b>9&&(s.trapped=!1,c.trapped=!1,s.life=Math.min(s.life,2.5),c.life=Math.min(c.life,2.5),s.vel.x-=d*b*.35,s.vel.z-=p*b*.35,c.vel.x+=d*b*.35,c.vel.z+=p*b*.35)}}hitVehicle(e,t,n){n.set(0,0,0);let r=0,i=0;for(let a of this.flying){let o=a.mesh.position.x-e.x,s=a.mesh.position.y-e.y,c=a.mesh.position.z-e.z,l=Math.hypot(o,s,c),u=t+a.rad;if(l>=u||l<1e-4)continue;let d=o/l,f=s/l,p=c/l,m=u-l;a.mesh.position.x+=d*m,a.mesh.position.y+=f*m,a.mesh.position.z+=p*m;let h=a.vel.length();if(a.vel.x+=d*(8+h*.4),a.vel.y+=Math.abs(f)*6+4,a.vel.z+=p*(8+h*.4),a.trapped=!1,a.life=Math.min(a.life,2.2),n.x-=d*h*.08,n.y+=h*.03,n.z-=p*h*.08,r+=Math.min(.09,.012+h*.0025),++i>=6)break}return r}},_f={clear:[`KTLX… towers going up northwest of the highway.`,`Moisture's in. Keep eyes on that Cu field.`],towers:[`Explosive growth. That updraft's glaciating hard.`,`SVR watch just dropped. Cell's organizing.`],supercell:[`We've got a meso. Wall cloud lowering on the RFB.`,`Clear slot looks good on the southeast flank.`,`RFD's starting to wrap. Stay out of the core.`],funnel:[`Funnel's coming out of the wall cloud — not confirmed yet.`,`Condensation tube halfway down. Hold your angle.`],tornado:[`Tornado on the ground! Confirming circulation.`,`Multi-vortex — satellites spinning off the main tube.`,`Debris cloud confirmed. Do not take the core.`],weakening:[`She's roping out. Still dangerous — debris aloft.`,`Rain-wrapped. Document the rope if you've got the view.`],dissipated:[`Circulation lifted. Residual rain shaft only.`,`Nice chase. Reset when you're ready.`]},vf=class{line=``;phase=``;idx=0;timer=0;reset(){this.line=``,this.phase=``,this.idx=0,this.timer=0}update(e,t){if(t.phase!==this.phase){this.phase=t.phase,this.idx=0,this.timer=.5;let e=_f[t.phase]||[];return this.line=e[0]||``,this.line}if(this.timer-=e,this.timer<=0){let e=_f[t.phase]||[];e.length>1&&(this.idx=(this.idx+1)%e.length,this.line=e[this.idx]),this.timer=12+Math.random()*8}return this.line}},yf=class{mesh;mat;hemi;fill;timeOfDay=`day`;constructor(e){this.mat=new ta({side:1,depthWrite:!1,uniforms:{uTop:{value:new U(6978192)},uHorizon:{value:new U(12109008)},uGround:{value:new U(9080984)},uStormDark:{value:0},uFlash:{value:0},uGreenCast:{value:0}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = normalize(wp.xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        uniform float uStormDark;
        uniform float uFlash;
        uniform float uGreenCast;
        varying vec3 vWorld;
        void main() {
          float h = clamp(vWorld.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 col = mix(uGround, uHorizon, smoothstep(0.0, 0.42, h));
          col = mix(col, uTop, smoothstep(0.38, 0.95, h));
          // Deep navy murk under a mature cell; faint cool teal at the horizon edge
          col *= 1.0 - uStormDark * 0.72;
          col = mix(col, vec3(0.16, 0.26, 0.32), uStormDark * 0.4 * (1.0 - h));
          col = mix(col, vec3(0.22, 0.42, 0.38), uGreenCast * 0.22 * (1.0 - h));
          col += vec3(uFlash) * 0.7;
          gl_FragColor = vec4(col, 1.0);
        }
      `}),this.mesh=new W(new Gi(4200,32,16),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,e.add(this.mesh),this.hemi=new Ma(11583700,4872752,.95),e.add(this.hemi),this.fill=new Za(10137800,.35),this.fill.position.set(60,40,-30),e.add(this.fill)}setTimeOfDay(e){this.timeOfDay=e}update(e,t,n,r){this.mesh.position.copy(t),this.mesh.position.y=0;let i=n.skyDark,a=n.organization>.5?V.clamp((n.organization-.5)*1.4,0,1)*(.4+n.wallCloud*.6):0,o=this.timeOfDay,s=o===`dawn`?.08:o===`dusk`?.05:.58,c=o===`day`?.18:.28,l=o===`dawn`?.42:o===`dusk`?.38:.48,u=new U().setHSL(V.lerp(s,.62,i*.7),V.lerp(c,.12,i),V.lerp(l,.05,i)),d=new U().setHSL(V.lerp(o===`day`?.1:.06,.55,i*.65+a*.2),V.lerp(o===`day`?.12:.35,.1,i),V.lerp(o===`day`?.72:.55,.14,i)),f=new U().setHSL(.58,.06,V.lerp(.42,.07,i));this.mat.uniforms.uTop.value.copy(u),this.mat.uniforms.uHorizon.value.copy(d),this.mat.uniforms.uGround.value.copy(f),this.mat.uniforms.uStormDark.value=V.damp(this.mat.uniforms.uStormDark.value,i,1.2,e),this.mat.uniforms.uGreenCast.value=V.damp(this.mat.uniforms.uGreenCast.value,a,1.5,e),this.mat.uniforms.uFlash.value=r,this.hemi.intensity=V.lerp(1.05,.48,i)+r*.9,this.hemi.color.copy(d),this.hemi.groundColor.setHSL(.55,.12,V.lerp(.2,.1,i)),this.fill.intensity=V.lerp(.45,.18,i)}},bf=4.2,xf=7.2,Sf=1.65,Cf=class{group=new On;mesh=new On;heading=0;active=!1;photos=0;reports=0;normal=new H(0,1,0);up=new H(0,1,0);groundQuat=new kt;yawQuat=new kt;lookQuat=new kt;eyeLocal=new H(0,Sf,0);constructor(){let e=new K({color:12888194,roughness:.85}),t=new K({color:2771562,roughness:.8}),n=new K({color:2764338,roughness:.9}),r=new W(new G(.38,.7,.28),n);r.position.y=.35,r.castShadow=!0,this.mesh.add(r);let i=new W(new G(.48,.55,.32),t);i.position.y=.95,i.castShadow=!0,this.mesh.add(i);let a=new W(new G(.35,.4,.18),new K({color:3813416,roughness:.85}));a.position.set(0,1,-.22),this.mesh.add(a);let o=new W(new Gi(.16,10,8),e);o.position.y=1.42,o.castShadow=!0,this.mesh.add(o);let s=new W(new Bi(.18,.2,.08,10),new K({color:1710618,roughness:.7}));s.position.y=1.55,this.mesh.add(s),this.group.add(this.mesh),this.group.visible=!1}spawnAt(e,t){this.heading=t,this.group.position.set(e.x,Y(e.x,e.z),e.z),this.group.visible=!0,this.active=!0}enterVehicle(){this.active=!1,this.group.visible=!1}getEyeWorld(e){return this.group.updateWorldMatrix(!0,!0),e.copy(this.eyeLocal).applyMatrix4(this.group.matrixWorld)}getForward(e){return e.set(Math.sin(this.heading),0,Math.cos(this.heading))}update(e,t){if(!this.active)return;let n=t.boost?xf:bf,r=t.throttle,i=t.steer;if(Math.abs(r)>.01||Math.abs(i)>.01){let t=Math.sin(this.heading),a=Math.cos(this.heading),o=-a,s=t;this.group.position.x+=(t*r+o*i)*n*e,this.group.position.z+=(a*r+s*i)*n*e}let a=Ru-40;this.group.position.x=V.clamp(this.group.position.x,-a,a),this.group.position.z=V.clamp(this.group.position.z,-a,a);let o=this.group.position.x,s=this.group.position.z,c=Y(o,s);this.group.position.y=V.damp(this.group.position.y,c,14,e),td(o,s,this.normal),this.groundQuat.setFromUnitVectors(this.up,this.normal),this.yawQuat.setFromAxisAngle(this.up,this.heading),this.lookQuat.copy(this.groundQuat).multiply(this.yawQuat),this.group.quaternion.slerp(this.lookQuat,1-Math.exp(-10*e));let l=Math.abs(r)+Math.abs(i)>.1;this.mesh.position.y=l?Math.sin(performance.now()*.012)*.03:0}},wf=class{el;canvas;ctx;open=!1;size=640;zoom=1;panX=0;panZ=0;dragging=!1;lastMX=0;lastMY=0;briefingEl;tipEl;constructor(e){this.el=document.createElement(`div`),this.el.id=`full-map`,this.el.className=`hidden`,this.el.innerHTML=`<div class="full-map-frame">
      <header>CHASE MAP <span>pinch/scroll zoom · drag look · M close</span></header>
      <div class="map-brief">
        <div class="map-brief-label">STORM STATUS</div>
        <div class="map-briefing">—</div>
        <div class="map-tip-label">WHAT TO DO</div>
        <div class="map-tip">—</div>
      </div>
    </div>`,e.appendChild(this.el);let t=this.el.querySelector(`.full-map-frame`);this.briefingEl=this.el.querySelector(`.map-briefing`),this.tipEl=this.el.querySelector(`.map-tip`),this.canvas=document.createElement(`canvas`),this.canvas.width=this.size,this.canvas.height=this.size,t.appendChild(this.canvas),this.ctx=this.canvas.getContext(`2d`),this.canvas.addEventListener(`wheel`,e=>{this.open&&(e.preventDefault(),e.stopPropagation(),this.zoom=V.clamp(this.zoom+Math.sign(e.deltaY)*.18,.45,6))},{passive:!1});let n=0,r=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);this.canvas.addEventListener(`touchstart`,e=>{this.open&&e.touches.length===2&&(e.preventDefault(),this.dragging=!1,n=r(e.touches))},{passive:!1}),this.canvas.addEventListener(`touchmove`,e=>{if(!this.open||e.touches.length!==2)return;e.preventDefault();let t=r(e.touches);n>0&&(this.zoom=V.clamp(this.zoom+(n-t)/180,.45,6)),n=t},{passive:!1}),this.canvas.addEventListener(`touchend`,e=>{e.touches.length<2&&(n=0)},{passive:!0}),this.canvas.addEventListener(`pointerdown`,e=>{this.open&&(e.pointerType!==`touch`||e.isPrimary!==!1)&&(this.dragging=!0,this.lastMX=e.clientX,this.lastMY=e.clientY,this.canvas.setPointerCapture(e.pointerId))}),this.canvas.addEventListener(`pointermove`,e=>{if(!this.dragging||!this.open||n>0)return;let t=4e3*this.zoom,r=this.size/t,i=e.clientX-this.lastMX,a=e.clientY-this.lastMY;this.lastMX=e.clientX,this.lastMY=e.clientY,this.panX-=i/r,this.panZ+=a/r,this.clampPan()});let i=e=>{this.dragging=!1;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}};this.canvas.addEventListener(`pointerup`,i),this.canvas.addEventListener(`pointercancel`,i)}clampPan(){let e=Ru*.95;this.panX=V.clamp(this.panX,-e,e),this.panZ=V.clamp(this.panZ,-e,e)}handleKeys(e){if(!this.open)return;let t=4e3*this.zoom*.02;e.left&&(this.panX-=t),e.right&&(this.panX+=t),e.up&&(this.panZ+=t),e.down&&(this.panZ-=t),e.zoomOut&&(this.zoom=Math.min(6,this.zoom+.06)),e.zoomIn&&(this.zoom=Math.max(.45,this.zoom-.06)),this.clampPan()}toggle(){this.open=!this.open,this.el.classList.toggle(`hidden`,!this.open),this.open||(this.dragging=!1)}setOpen(e){this.open=e,this.el.classList.toggle(`hidden`,!this.open),e||(this.dragging=!1)}draw(e,t,n=``,r=``,i=0,a){if(!this.open)return;this.briefingEl.textContent=n||t.briefing||`—`,this.tipEl.textContent=r||t.interceptTip||`—`;let o=this.ctx,s=this.size,c=s/2,l=s/2,u=4e3*this.zoom,d=s/u,f=e.x+this.panX,p=e.z+this.panZ;o.fillStyle=`#0c1410`,o.fillRect(0,0,s,s);let m=(e,t)=>({x:c+(e-f)*d,y:l-(t-p)*d});o.fillStyle=`#1a2818`,o.fillRect(0,0,s,s),o.strokeStyle=`#3a3a3c`,o.lineWidth=Math.max(1.2,3.5/this.zoom);for(let e=-Ru;e<=Ru;e+=800){let t=m(e,p-u),n=m(e,p+u);o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(n.x,n.y),o.stroke()}o.strokeStyle=`#4a4a4c`,o.lineWidth=Math.max(1.5,5/this.zoom);{let e=m(0,p-u),t=m(0,p+u);o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(t.x,t.y),o.stroke()}o.strokeStyle=`#3a3a3c`,o.lineWidth=Math.max(1.2,3/this.zoom);for(let e=-Ru;e<=Ru;e+=1200){let t=m(f-u,e),n=m(f+u,e);o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(n.x,n.y),o.stroke()}o.strokeStyle=`#4a4e52`,o.lineWidth=Math.max(.7,1.6/this.zoom);for(let e of Hu){let t=(e.ax+e.bx)*.5,n=(e.az+e.bz)*.5;if(Math.hypot(t-f,n-p)>u*.85)continue;let r=m(e.ax,e.az),i=m(e.bx,e.bz);o.beginPath(),o.moveTo(r.x,r.y),o.lineTo(i.x,i.y),o.stroke()}o.strokeStyle=`rgba(200,180,60,0.55)`,o.lineWidth=1,o.setLineDash([8,10]);{let e=m(0,p-u),t=m(0,p+u);o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(t.x,t.y),o.stroke()}o.setLineDash([]),o.fillStyle=`rgba(160,170,180,0.85)`,o.font=`${Math.max(9,11/Math.sqrt(this.zoom))}px monospace`;for(let e of Uu){let t=m(e.x,e.z);o.fillStyle=`rgba(90,100,110,0.55)`,o.fillRect(t.x-18,t.y-10,36,14),o.fillStyle=`rgba(220,230,240,0.9)`,o.fillText(e.name,t.x-16,t.y)}if(uf(o,t,m,1/d,{halfSpan:720,step:Math.max(60,1/d*14)}),df(o,14,this.size-28,96,9),t.warningActive){let e=of(t);o.strokeStyle=t.warning.includes(`TOR`)?`rgba(255,50,50,0.95)`:`rgba(255,180,40,0.9)`,o.fillStyle=t.warning.includes(`TOR`)?`rgba(255,40,40,0.12)`:`rgba(255,180,40,0.1)`,o.lineWidth=2.5,o.beginPath();for(let t=0;t<e.points.length;t++){let n=m(e.points[t].x,e.points[t].z);t===0?o.moveTo(n.x,n.y):o.lineTo(n.x,n.y)}o.closePath(),o.fill(),o.stroke();let n=m(e.labelX,e.labelZ);o.font=`bold 12px monospace`,o.fillStyle=o.strokeStyle,o.fillText(t.warning||`WARN`,n.x-30,n.y-6)}let h=m(t.cell.x,t.cell.z),g=t.phase===`funnel`||t.phase===`tornado`||t.phase===`weakening`||t.tornadoStrength>.05;if(g){let e=t.phase===`tornado`||t.phase===`weakening`||t.tornadoStrength>.35,n=e?7+t.tornadoStrength*14:5+t.wallCloud*8;o.fillStyle=e?`rgba(255,40,50,0.22)`:`rgba(255,160,40,0.18)`,o.beginPath(),o.arc(h.x,h.y,n,0,Math.PI*2),o.fill(),o.strokeStyle=e?`#ff3344`:`#ffaa33`,o.lineWidth=2.5,o.beginPath(),o.arc(h.x,h.y,n,0,Math.PI*2),o.stroke(),o.fillStyle=e?`#ff2244`:`#ffcc55`,o.beginPath(),o.arc(h.x,h.y,3,0,Math.PI*2),o.fill(),o.fillStyle=e?`#ff6688`:`#ffcc66`,o.font=`bold 12px monospace`,o.fillText(e?`TORNADO`:`FUNNEL`,h.x+12,h.y-6)}else t.organization>.4&&(o.strokeStyle=`#66ccff`,o.lineWidth=2,o.beginPath(),o.arc(h.x,h.y,8,0,Math.PI*2),o.stroke(),o.fillStyle=`#66ccff`,o.font=`11px monospace`,o.fillText(`MESO`,h.x+10,h.y-4));{let e=t.motion.x,n=t.motion.z,r=Math.hypot(e,n);if(r>.5){let i=28+Math.min(40,r*1.2),a=e/r,s=n/r,c=m(t.cell.x+a*i,t.cell.z+s*i),l=h;o.strokeStyle=g?`rgba(255, 80, 90, 0.95)`:`rgba(255,255,255,0.7)`,o.fillStyle=o.strokeStyle,o.lineWidth=3,o.beginPath(),o.moveTo(l.x,l.y),o.lineTo(c.x,c.y),o.stroke();let u=Math.atan2(c.y-l.y,c.x-l.x);o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(c.x-Math.cos(u-.45)*11,c.y-Math.sin(u-.45)*11),o.lineTo(c.x-Math.cos(u+.45)*11,c.y-Math.sin(u+.45)*11),o.closePath(),o.fill()}}if(a)for(let e of a){let t=m(e.x,e.z),n=e.heading??0,r=Math.sin(n)*7,i=-Math.cos(n)*7;o.fillStyle=`#3a9cff`,o.beginPath(),o.moveTo(t.x+r,t.y+i),o.lineTo(t.x+Math.sin(n+2.5)*6,t.y-Math.cos(n+2.5)*6),o.lineTo(t.x+Math.sin(n-2.5)*6,t.y-Math.cos(n-2.5)*6),o.closePath(),o.fill(),o.fillStyle=`#9ed0ff`,o.font=`11px monospace`,o.fillText(e.name.slice(0,12),t.x+10,t.y+4)}let _=m(e.x,e.z),v=Math.sin(i)*9,y=-Math.cos(i)*9;o.fillStyle=`#ffffff`,o.beginPath(),o.moveTo(_.x+v,_.y+y),o.lineTo(_.x+Math.sin(i+2.5)*8,_.y-Math.cos(i+2.5)*8),o.lineTo(_.x+Math.sin(i-2.5)*8,_.y-Math.cos(i-2.5)*8),o.closePath(),o.fill(),o.fillStyle=`#9ec8ff`,o.font=`11px monospace`,o.fillText(`YOU`,_.x+10,_.y+4),o.fillStyle=`rgba(180,220,180,0.85)`,o.font=`11px monospace`,o.fillText(`N ↑  ·  scroll zoom  ·  drag look around`,12,s-14),o.fillText(`${(u/1609).toFixed(1)} mi across`,s-110,s-14)}},Tf=[16722474,15210520,16729156,13373456,16724787,13901856,16718362,15740976],Ef=class{group=new On;cars=[];windScratch=new H;normal=new H(0,1,0);up=new H(0,1,0);groundQuat=new kt;yawQuat=new kt;lookQuat=new kt;count;destroyed=0;constructor(e=14){this.count=e;for(let t=0;t<e;t++)this.cars.push(this.spawnCar(t))}makeBody(e){let t=new On,n=new K({color:e,metalness:.2,roughness:.42,emissive:new U(e).multiplyScalar(.35),emissiveIntensity:.55}),r=new K({color:1706506,roughness:.8}),i=new K({color:1054752,metalness:.7,roughness:.15,transparent:!0,opacity:.75}),a=new W(new G(2,.68,4),n);a.position.y=.62,a.castShadow=!0,t.add(a);let o=new W(new G(1.85,.28,1.1),n);o.position.set(0,.85,1.15),t.add(o);let s=new W(new G(1.65,.55,1.9),r);s.position.set(0,1.18,-.1),s.castShadow=!0,t.add(s);let c=new W(new G(1.5,.4,.05),i);c.position.set(0,1.2,.85),c.rotation.x=-.2,t.add(c);let l=new W(new G(1.95,.2,.18),r);l.position.set(0,.4,2.05),t.add(l);for(let e of[-.55,.55]){let n=new W(new Gi(.08,6,6),new K({color:16773328,emissive:16771232,emissiveIntensity:.6}));n.position.set(e,.55,2.05),t.add(n)}let u=new W(new G(1.35,.12,.26),new K({color:16772846,emissive:16720418,emissiveIntensity:1.2,roughness:.4}));u.position.set(0,1.5,.05),t.add(u);for(let[e,n]of[[-.88,1.2],[.88,1.2],[-.88,-1.3],[.88,-1.3]]){let i=new W(new Bi(.34,.34,.26,10),r);i.rotation.z=Math.PI/2,i.position.set(e,.34,n),t.add(i)}return t}spawnCar(e){let t=e%2==0,n=[-2400,-1600,-800,0,800,1600,2400],r=[-2400,-1200,0,1200,2400],i=t?n[e%n.length]:r[e%r.length],a=e*917%5e3-2500,o=t?i:a,s=t?a:i,c=t?e%4<2?0:Math.PI:e%4<2?Math.PI/2:-Math.PI/2,l=this.makeBody(Tf[e%Tf.length]),u=new On;return u.add(l),u.position.set(o,Y(o,s),s),this.group.add(u),{group:u,visual:l,heading:c,speed:12+e%7*2.2,lane:i,preferNS:t,airborne:!1,airVel:new H,toss:0,damage:0,alive:!0,fleeBoost:0}}reset(){this.destroyed=0;for(let e of this.cars)this.group.remove(e.group);this.cars.length=0;let e=Math.random()*40|0;for(let t=0;t<this.count;t++)this.cars.push(this.spawnCar(t+e))}update(e,t,n){let r=0;for(let i of this.cars){if(!i.alive)continue;if(n&&(n(i.group.position,this.windScratch),this.windScratch.y>2.6&&(i.airborne=!0,i.airVel.x+=this.windScratch.x*e*3.2,i.airVel.z+=this.windScratch.z*e*3.2,i.airVel.y+=this.windScratch.y*e*2.8,i.toss+=this.windScratch.y*e*1.4,i.damage=Math.min(1,i.damage+.35*e),r+=70*e)),i.airborne){i.airVel.y-=18*e,i.group.position.x+=i.airVel.x*e,i.group.position.y+=i.airVel.y*e,i.group.position.z+=i.airVel.z*e,i.visual.rotation.x+=i.toss*e*.9,i.visual.rotation.z+=i.toss*e*1.1;let t=Y(i.group.position.x,i.group.position.z);i.group.position.y<=t+.1&&i.airVel.y<=0&&(i.group.position.y=t,i.airborne=!1,i.airVel.set(0,0,0),i.damage=Math.min(1,i.damage+.35),i.visual.rotation.set(0,0,Math.random()>.5?1.4:-1.4),i.damage>=.85&&(i.alive=!1,i.group.visible=!1,this.destroyed+=1,r+=280));continue}let a=0,o=14+(i.lane===0?8:0);if(t&&t.strength>.2){let n=i.group.position.x-t.x,o=i.group.position.z-t.z,s=Math.hypot(n,o)||1;if(s<220){i.fleeBoost=Math.max(i.fleeBoost,1-s/220);let c=Math.atan2(n/s,o/s)-i.heading;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;a=V.clamp(-c*2.2,-1,1),s<90&&(i.group.position.x+=n/s*6*e,i.group.position.z+=o/s*6*e),s<40&&(r+=12*e*t.strength)}else i.fleeBoost=V.damp(i.fleeBoost,0,2,e),a=this.laneSteer(i)}else i.fleeBoost=V.damp(i.fleeBoost,0,2,e),a=this.laneSteer(i);let s=o*(1+i.fleeBoost*.85)*(1-i.damage*.4);i.speed=V.damp(i.speed,s,3,e),i.heading+=a*Math.min(1,i.speed/12)*1.8*e,i.group.position.x+=Math.sin(i.heading)*i.speed*e,i.group.position.z+=Math.cos(i.heading)*i.speed*e;let c=Ru-120;(Math.abs(i.group.position.x)>c||Math.abs(i.group.position.z)>c)&&(i.heading+=Math.PI,i.group.position.x=V.clamp(i.group.position.x,-c,c),i.group.position.z=V.clamp(i.group.position.z,-c,c));let l=i.group.position.x,u=i.group.position.z,d=Y(l,u);i.group.position.y=V.damp(i.group.position.y,d,12,e),td(l,u,this.normal),this.groundQuat.setFromUnitVectors(this.up,this.normal),this.yawQuat.setFromAxisAngle(this.up,i.heading),this.lookQuat.copy(this.groundQuat).multiply(this.yawQuat),i.group.quaternion.slerp(this.lookQuat,1-Math.exp(-8*e))}return r}laneSteer(e){let t=e.heading;if(e.preferNS){let n=e.lane-e.group.position.x,r=Math.cos(e.heading)>=0?0:Math.PI;t=Math.abs(n)>5?Math.atan2(Math.sign(n),Math.cos(r)>=0?1:-1):r}else{let n=e.lane-e.group.position.z,r=Math.sin(e.heading)>=0?Math.PI/2:-Math.PI/2;t=Math.abs(n)>5?Math.atan2(Math.cos(r)>=0?1:-1,Math.sign(n)):r}let n=t-e.heading;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return V.clamp(-n*1.5,-1,1)}aliveCount(){let e=0;for(let t of this.cars)t.alive&&e++;return e}},Df={id:`1.3.8`,name:`Car Economy`,summary:`Chase pay · priced garage rides · Store unlocks`};function Of(){return`Update ${Df.id} — ${Df.name}`}var kf=[3837183,3066993,15965202,10181046,1752220,15105570];function Af(){let e=new URLSearchParams(location.search).get(`ws`);if(e)return e;let t=location.protocol===`https:`?`wss:`:`ws:`;return location.port===`43123`||location.hostname===`127.0.0.1`?`ws://${location.hostname}:5002`:`${t}//${location.host}/ws`}function jf(e){let t=new On,n=new K({color:e,metalness:.2,roughness:.45,emissive:new U(e).multiplyScalar(.25),emissiveIntensity:.45}),r=new K({color:1711136,roughness:.8}),i=new W(new G(2.1,.75,4.4),n);i.position.y=.7,i.castShadow=!0,t.add(i);let a=new W(new G(1.7,.55,2.1),r);return a.position.set(0,1.25,-.1),t.add(a),t}function Mf(){let e=new On,t=new Ur({color:3816002,transparent:!0,opacity:.55,depthWrite:!1}),n=new W(new Bi(2,14,48,16,1,!0),t);return n.position.y=24,e.add(n),e}var Nf=class{connected=!1;isHost=!1;roomCode=null;playerId=null;myRole=`chaser`;peers=new Map;lobbyPlayers=[];lastStorm=null;pendingStart=null;ws=null;peerMeshes=new Map;group=new On;status=`Solo`;onStatus=null;onStart=null;onRoster=null;sendAcc=0;colorIdx=0;playerName=`Chaser`;attach(e){e.add(this.group)}setName(e){this.playerName=(e||`Chaser`).slice(0,16)}onStatusChange(e){this.onStatus=e,e(this.status)}onHostStart(e){this.onStart=e}onRosterChange(e){this.onRoster=e}setStatus(e){this.status=e,this.onStatus?.(e)}getStatus(){return this.status}async createRoom(e=!1){return await this.ensureSocket(),this.awaitCode(`create`,{type:`create`,name:this.playerName,public:e})}async findLobby(){return await this.ensureSocket(),this.awaitCode(`find`,{type:`find`,name:this.playerName})}awaitCode(e,t){return new Promise(e=>{let n=t=>{let r=this.parse(t.data);if(r){if(r.type===`created`||r.type===`joined`){this.ws?.removeEventListener(`message`,n),this.isHost=r.type===`created`||!!r.host;let t=String(r.code??``);this.roomCode=t,this.playerId=String(r.id??``),this.applyRoster(r),this.setStatus(r.type===`joined`?`Joined ${t}`:`Room ${t} · host`),e(t)}else r.type===`error`&&(this.ws?.removeEventListener(`message`,n),this.setStatus(`Error: ${String(r.message??`unknown`)}`),e(null))}};this.ws.addEventListener(`message`,n),this.send(t),setTimeout(()=>{this.ws?.removeEventListener(`message`,n),e(this.roomCode)},5e3)})}async joinRoom(e){let t=e.trim().toUpperCase().replace(/[^A-Z0-9]/g,``).slice(0,6);return t.length<3?(this.setStatus(`Enter a valid room code`),!1):(await this.ensureSocket(),new Promise(e=>{let n=t=>{let r=this.parse(t.data);if(r){if(r.type===`joined`){if(this.ws?.removeEventListener(`message`,n),this.isHost=!1,this.roomCode=String(r.code??``),this.playerId=String(r.id??``),this.applyRoster(r),Array.isArray(r.peers))for(let e of r.peers)this.upsertPeer(e);this.setStatus(`Joined ${this.roomCode}`),e(!0)}else r.type===`error`&&(this.ws?.removeEventListener(`message`,n),this.setStatus(`Error: ${String(r.message??`unknown`)}`),e(!1))}};this.ws.addEventListener(`message`,n),this.send({type:`join`,code:t,name:this.playerName}),setTimeout(()=>{this.ws?.removeEventListener(`message`,n),e(!1)},5e3)}))}setRole(e){this.myRole=e,this.send({type:`role`,role:e})}leave(){this.ws&&this.ws.readyState===WebSocket.OPEN&&(this.send({type:`leave`}),this.ws.close()),this.ws=null,this.connected=!1,this.isHost=!1,this.roomCode=null,this.playerId=null,this.lastStorm=null,this.pendingStart=null,this.lobbyPlayers=[],this.myRole=`chaser`;for(let[,e]of this.peerMeshes)this.group.remove(e);this.peerMeshes.clear(),this.peers.clear(),this.setStatus(`Solo`)}broadcastStart(e){this.connected&&this.isHost&&this.send({type:`start`,config:{...e,playMode:e.playMode===`survive`||e.playMode===`cows`?`chase`:e.playMode}})}tick(e,t,n){this.sendAcc+=e,!this.connected||!this.ws||this.ws.readyState!==WebSocket.OPEN||this.sendAcc>=1/15&&(this.sendAcc=0,this.send({type:`pose`,x:t.x,y:t.y,z:t.z,heading:t.heading,speed:t.speed,mode:t.mode,role:this.myRole,name:this.playerName,tornadoStrength:t.tornadoStrength??0}),this.isHost&&n&&this.send({type:`storm`,...n})),this.updateMeshes(e)}updateMeshes(e){for(let[t,n]of this.peers){let r=this.peerMeshes.get(t),i=n.role===`tornado`;if(r&&r.userData.kind!==(i?`tornado`:`car`)&&(this.group.remove(r),this.peerMeshes.delete(t),r=void 0),!r){let e=kf[this.colorIdx++%kf.length];r=i?Mf():jf(e),r.userData.kind=i?`tornado`:`car`,this.peerMeshes.set(t,r),this.group.add(r)}let a=Y(n.x,n.z);if(r.position.x=V.damp(r.position.x,n.x,12,e),r.position.z=V.damp(r.position.z,n.z,12,e),r.position.y=V.damp(r.position.y,Math.max(n.y,a),12,e),i){r.rotation.y+=e*1.2;let t=.7+n.tornadoStrength*1.4;r.scale.setScalar(V.damp(r.scale.x,t,6,e))}else{let t=n.heading-r.rotation.y;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;r.rotation.y+=t*Math.min(1,14*e)}r.visible=!0}for(let[e,t]of this.peerMeshes)this.peers.has(e)||(this.group.remove(t),this.peerMeshes.delete(e))}applyRoster(e){let t=Array.isArray(e.players)?e.players:[];this.lobbyPlayers=t.map(e=>({id:String(e.id),name:String(e.name||`Chaser`).slice(0,16),role:e.role===`tornado`?`tornado`:`chaser`,ready:!!e.ready,host:!!e.host})),this.roomCode&&this.onRoster?.(this.lobbyPlayers,this.roomCode,String(e.hostId??``))}async ensureSocket(){this.ws&&this.ws.readyState===WebSocket.OPEN||(this.ws&&this.ws.readyState===WebSocket.CONNECTING?await new Promise(e=>{this.ws.addEventListener(`open`,()=>e(),{once:!0}),this.ws.addEventListener(`error`,()=>e(),{once:!0})}):(this.setStatus(`Connecting…`),await new Promise((e,t)=>{try{this.ws=new WebSocket(Af())}catch(e){this.setStatus(`Multiplayer unavailable`),t(e);return}let n=setTimeout(()=>{this.setStatus(`Multiplayer server offline`),t(Error(`timeout`))},4e3);this.ws.onopen=()=>{clearTimeout(n),this.connected=!0,this.setStatus(`Connected — Find Lobby or create a room`),e()},this.ws.onerror=()=>{clearTimeout(n),this.setStatus(`Multiplayer server offline`),t(Error(`ws error`))},this.ws.onclose=()=>{this.connected=!1,this.roomCode&&this.setStatus(`Disconnected`)},this.ws.onmessage=e=>this.onMessage(e)})))}onMessage(e){let t=this.parse(e.data);if(t)switch(t.type){case`peer`:this.upsertPeer(t);break;case`peer_left`:this.peers.delete(String(t.id??``));break;case`roster`:this.applyRoster(t),this.setStatus(`Room ${String(t.code??this.roomCode)} · ${this.lobbyPlayers.length} player(s)`);break;case`storm`:this.isHost||(this.lastStorm=t);break;case`start`:if(!this.isHost){let e=t.roles||{};this.pendingStart={config:t.config,hostId:String(t.hostId??``),roles:e,players:this.lobbyPlayers},this.onStart?.(this.pendingStart)}break;case`room`:this.setStatus(`Room ${String(t.code)} · ${Number(t.count)||0} player(s)`);break;case`error`:this.setStatus(`Error: ${String(t.message??`unknown`)}`)}}upsertPeer(e){let t=String(e.id??``);t&&t!==this.playerId&&this.peers.set(t,{id:t,x:Number(e.x)||0,y:Number(e.y)||0,z:Number(e.z)||0,heading:Number(e.heading)||0,speed:Number(e.speed)||0,mode:e.mode||`chase`,role:e.role===`tornado`?`tornado`:`chaser`,name:String(e.name||`Chaser`).slice(0,16),tornadoStrength:Number(e.tornadoStrength)||0})}send(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}parse(e){try{return typeof e==`string`?JSON.parse(e):null}catch{return null}}},Pf=3.2,Ff=24,If=class{count=0;cooldown=0;root=new On;planted=[];ledMats=[];constructor(e){e.add(this.root)}reset(){for(let e of this.planted)this.root.remove(e.mesh),e.mesh.traverse(e=>{if(e instanceof W){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}});this.planted.length=0,this.ledMats.length=0,this.count=0,this.cooldown=0}tick(e){this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e));let t=performance.now()*.006;for(let e=0;e<this.ledMats.length;e++)this.ledMats[e].emissiveIntensity=.35+.65*(.5+.5*Math.sin(t+e));for(let t of this.planted)t.age+=e}walkSample(e,t,n,r){if(r<.15||this.planted.length===0)return 0;let i=0;for(let a of this.planted){if(t.distanceTo(a.pos)>28)continue;let o=a.pos.distanceTo(n);if(o>320||o<12)continue;let s=1-o/320;i+=s*r*4.5*e}return i}tryPlant(e,t,n,r){if(this.cooldown>0)return`Probe cooling down (${this.cooldown.toFixed(1)}s)`;if(this.planted.length>=Ff){let e=this.planted.shift();this.root.remove(e.mesh)}let i=Math.sin(t),a=Math.cos(t),o=e.x+i*1.1,s=e.z+a*1.1,c=Y(o,s),l=this.buildProbeMesh();l.position.set(o,c,s),l.rotation.y=t,this.root.add(l);let u=new H(o,c,s),d=u.distanceTo(n),f=Math.max(0,r);this.planted.push({mesh:l,age:0,strength:f,pos:u}),this.count+=1,this.cooldown=Pf;let p=Math.round(18+f*95*Math.max(0,1-d/380)+Math.random()*8),m=Math.round(1012-f*42*Math.max(0,1-d/300)-Math.random()*4),h=35;return f>.2&&d<280&&d>18?h+=Math.round((1-(d-18)/262)*f*160):d<=18&&f>.35&&(h+=20),{windMph:p,pressureMb:m,distM:Math.round(d),score:h}}buildProbeMesh(){let e=new On,t=new K({color:4871520,metalness:.7,roughness:.4}),n=new K({color:13943946,metalness:.15,roughness:.65}),r=new K({color:2293606,emissive:2293606,emissiveIntensity:.8,roughness:.3});this.ledMats.push(r);let i=new W(new Bi(.04,.055,1.15,6),t);i.position.y=.55,i.castShadow=!0,e.add(i);let a=new W(new Vi(.07,.22,6),t);a.position.y=.05,a.rotation.x=Math.PI,e.add(a);let o=new W(new G(.28,.22,.18),n);o.position.y=.95,o.castShadow=!0,e.add(o);let s=new W(new Bi(.015,.015,.45,5),t);s.position.set(.08,1.25,0),e.add(s);let c=new W(new Gi(.045,8,6),r);return c.position.set(-.1,1.08,.1),e.add(c),e}},Lf=67e-6/100,Rf=class{group=new On;loaded=!1;active=!1;body=new On;mat=new K({color:8001608,emissive:12593272,emissiveIntensity:.35,metalness:.55,roughness:.42,side:2,fog:!0});coreGlow=new Ja(16729241,2.8,280,1.6);rimGlow=new Ja(11167487,1.8,320,1.4);time=0;target=new H;anchor=new H;prev=new H;spawned=!1;constructor(e){this.group.visible=!1,this.coreGlow.position.set(0,4,8),this.rimGlow.position.set(0,-6,-20),this.body.add(this.coreGlow),this.body.add(this.rimGlow),this.group.add(this.body),e.add(this.group)}rollSpawn(){return this.active=Math.random()<Lf,this.group.visible=this.active&&this.loaded,this.active}async load(e=`/models/eternatus.stl`){if(!this.loaded)try{let t=await new Fu().loadAsync(e);t.computeBoundingBox();let n=t.boundingBox,r=new H;n.getCenter(r),t.translate(-r.x,-r.y,-r.z),t.rotateX(Math.PI/2),t.rotateZ(Math.PI),t.computeBoundingBox();let i=new H;t.boundingBox.getSize(i);let a=220/Math.max(i.x,i.y,i.z,1e-6);t.scale(a,a,a),t.computeVertexNormals();let o=new W(t,this.mat);o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,o.renderOrder=5,this.body.add(o),this.loaded=!0,this.group.visible=this.active}catch(e){console.warn(`Eternatus STL load failed`,e)}}update(e,t,n,r){if(!this.active||!this.loaded)return;this.time+=e,this.anchor.copy(t);let i=Y(this.anchor.x,this.anchor.z)+308+120,a=220+r*100+Math.sin(this.time*.35)*50,o=this.time*.7,s=i+Math.sin(this.time*.35)*18;this.target.set(this.anchor.x+Math.cos(o)*a,s,this.anchor.z+Math.sin(o)*a),this.spawned?this.group.position.lerp(this.target,1-Math.exp(-6*e)):(this.group.position.copy(this.target),this.prev.copy(this.target),this.spawned=!0),this.prev.copy(this.group.position),this.group.rotation.set(0,0,0),this.body.rotation.set(0,Math.PI+this.time*-.5,0);let c=.35+.25*Math.sin(this.time*1.8)+r*.2;this.mat.emissiveIntensity=.28+c*.35,this.coreGlow.intensity=1.6+c*1.8,this.rimGlow.intensity=1.1+c*1.2}reset(){this.time=0,this.spawned=!1,this.active=!1,this.group.visible=!1,this.body.rotation.set(0,0,0)}},zf=2e5,Bf=zf,Vf=5e3,Hf=4e3,Uf=2e4,Wf=class{group=new On;mesh;x=new Float32Array(Bf);y=new Float32Array(Bf);z=new Float32Array(Bf);heading=new Float32Array(Bf);speed=new Float32Array(Bf);wander=new Float32Array(Bf);airborne=new Uint8Array(Bf);vx=new Float32Array(Bf);vy=new Float32Array(Bf);vz=new Float32Array(Bf);tumbleX=new Float32Array(Bf);tumbleY=new Float32Array(Bf);tumbleZ=new Float32Array(Bf);spinX=new Float32Array(Bf);spinY=new Float32Array(Bf);spinZ=new Float32Array(Bf);scale=new Float32Array(Bf);seed=new Float32Array(Bf);dummy=new Dn;wind=new H;pos=new H;euler=new un;quat=new kt;yawAxis=new H(0,1,0);active=!1;time=0;physCursor=0;wanderCursor=0;matrixFillAt=Bf;matrixDirty=!1;lofted=0;constructor(e){this.group.visible=!1;let t=Gf(),n=new K({color:15920870,roughness:.92,metalness:.02,vertexColors:!0});this.mesh=new fi(t,n,Bf),this.mesh.instanceMatrix.setUsage(We),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.group.add(this.mesh);for(let e=0;e<Bf;e++)this.seed[e]=Math.random(),this.scale[e]=1.15+e%8*.06;e.add(this.group)}setActive(e){this.active=e,this.group.visible=e}resetAround(e,t){this.time=0,this.lofted=0,this.physCursor=0,this.wanderCursor=0;let n=Y(e,t);for(let r=0;r<Bf;r++){let i=Math.random();this.seed[r]=i;let a=i*Math.PI*2+r*314e-7,o=r%16,s=o<5?8+i*75:o<10?75+i*160:o<13?160+i*260:260+r%2e4*.035;this.x[r]=e+Math.cos(a)*s,this.z[r]=t+Math.sin(a)*s,this.y[r]=n,this.heading[r]=a+Math.PI*.5,this.speed[r]=1.4+i*2,this.wander[r]=i*8,this.airborne[r]=0,this.vx[r]=this.vy[r]=this.vz[r]=0,this.tumbleX[r]=this.tumbleY[r]=this.tumbleZ[r]=0,this.spinX[r]=this.spinY[r]=this.spinZ[r]=0,this.scale[r]=1.15+i*.4}let r=25e3;for(let e=0;e<r;e++)this.writeMatrix(e);this.matrixFillAt=r,this.mesh.instanceMatrix.needsUpdate=!0}update(e,t,n,r,i){if(!this.active)return;if(this.time+=e,this.matrixDirty=!1,this.matrixFillAt<Bf){let e=Math.min(Bf,this.matrixFillAt+Uf);for(let t=this.matrixFillAt;t<e;t++)this.writeMatrix(t);this.matrixFillAt=e,this.matrixDirty=!0}let a=n>.05,o=Math.max(90,r*2.2+n*160),s=o*1.85,c=Y(t.x,t.z),l=o*o,u=s*s;for(let r=0;r<Vf;r++){let s;s=r<Vf*.6?(this.physCursor+r*3)%Math.min(Bf,8e4):(this.physCursor+r)%Bf,this.stepCow(s,e,t,n,a,c,o,l,u,i)}this.physCursor=(this.physCursor+Vf)%Bf;for(let n=0;n<Hf;n++){let r=(this.wanderCursor+n)%Bf;if(this.airborne[r])continue;let i=this.x[r]-t.x,a=this.z[r]-t.z,o=i*i+a*a;if(!(o<l*1.4)){if(this.wander[r]+=e,this.heading[r]+=Math.sin(this.wander[r]*.5+this.seed[r]*7)*.3*e,this.x[r]+=Math.sin(this.heading[r])*this.speed[r]*e,this.z[r]+=Math.cos(this.heading[r])*this.speed[r]*e,o>722500){let e=this.seed[r]*Math.PI*2+this.time*.03,n=50+this.seed[r]*180;this.x[r]=t.x+Math.cos(e)*n,this.z[r]=t.z+Math.sin(e)*n,this.y[r]=c}else n%8==0&&(this.y[r]=Y(this.x[r],this.z[r]));this.writeMatrix(r)}}this.wanderCursor=(this.wanderCursor+Hf)%Bf,this.matrixDirty&&(this.mesh.instanceMatrix.needsUpdate=!0)}stepCow(e,t,n,r,i,a,o,s,c,l){let u=this.x[e]-n.x,d=this.z[e]-n.z,f=u*u+d*d;if(this.airborne[e]){f<s*1.5?(this.pos.set(this.x[e],this.y[e]+.7,this.z[e]),l(this.pos,this.wind)):this.wind.set(0,0,0),this.vx[e]+=this.wind.x*3.2*t,this.vz[e]+=this.wind.z*3.2*t,this.vy[e]+=this.wind.y*2.5*t-18*t;let c=1-Math.min(.5,.36*t);this.vx[e]*=c,this.vy[e]*=c,this.vz[e]*=c,this.x[e]+=this.vx[e]*t,this.y[e]+=this.vy[e]*t,this.z[e]+=this.vz[e]*t,this.spinX[e]+=(this.tumbleX[e]+1.1)*t,this.spinY[e]+=(this.tumbleY[e]+1.2)*t,this.spinZ[e]+=(this.tumbleZ[e]+1.1)*t;let p=Math.sqrt(f)||.01;if(i&&p<o&&p>5){let i=Math.atan2(d,u)+t*(2.4+r*3.5),o=Math.max(4,p-(22+r*40)*t);this.x[e]=n.x+Math.cos(i)*o,this.z[e]=n.z+Math.sin(i)*o,this.y[e]=Math.max(this.y[e],a+5+this.seed[e]*55)}let m=Ru-40;this.x[e]=V.clamp(this.x[e],-m,m),this.z[e]=V.clamp(this.z[e],-m,m);let h=Y(this.x[e],this.z[e]);this.y[e]<=h&&this.vy[e]<=0&&(this.y[e]=h,Math.hypot(this.vx[e],this.vy[e],this.vz[e])>18?(this.vy[e]=Math.abs(this.vy[e])*.2,this.vx[e]*=.35,this.vz[e]*=.35):(this.airborne[e]=0,this.vx[e]=this.vy[e]=this.vz[e]=0,this.spinX[e]=this.spinY[e]=this.spinZ[e]=0)),this.writeMatrix(e);return}if(!i||f>c){this.wander[e]+=t,this.heading[e]+=Math.sin(this.wander[e]*.55+this.seed[e]*8)*.35*t,this.x[e]+=Math.sin(this.heading[e])*this.speed[e]*t,this.z[e]+=Math.cos(this.heading[e])*this.speed[e]*t,e%5==0&&(this.y[e]=Y(this.x[e],this.z[e])),this.writeMatrix(e);return}let p=Math.sqrt(f)||.01,m=p<32+r*40;f<s&&(this.pos.set(this.x[e],this.y[e]+.7,this.z[e]),l(this.pos,this.wind),this.wind.y>2.1||m)?(this.airborne[e]=1,this.vx[e]+=this.wind.x*.55,this.vz[e]+=this.wind.z*.55,this.vy[e]+=Math.max(9,this.wind.y*1.15),this.tumbleX[e]=(Math.random()-.5)*4,this.tumbleY[e]=(Math.random()-.5)*3,this.tumbleZ[e]=(Math.random()-.5)*4,this.lofted++,this.writeMatrix(e)):(this.x[e]-=u/p*(16+r*36)*t,this.z[e]-=d/p*(16+r*36)*t,this.heading[e]=Math.atan2(-u,-d),e%4==0&&(this.y[e]=Y(this.x[e],this.z[e])),this.writeMatrix(e))}writeMatrix(e){this.dummy.position.set(this.x[e],this.y[e],this.z[e]),this.dummy.scale.setScalar(this.scale[e]),this.airborne[e]?(this.euler.set(this.spinX[e],this.heading[e]+this.spinY[e],this.spinZ[e]),this.dummy.quaternion.setFromEuler(this.euler)):(this.quat.setFromAxisAngle(this.yawAxis,this.heading[e]),this.dummy.quaternion.copy(this.quat)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),this.matrixDirty=!0}aliveAi(){return Bf}};function Gf(){let e=new U(15920870),t=new U(1842204),n=new U(13934736),r=[],i=(e,t)=>{let n=e.attributes.position.count,i=new Float32Array(n*3);for(let e=0;e<n;e++)i[e*3]=t.r,i[e*3+1]=t.g,i[e*3+2]=t.b;e.setAttribute(`color`,new gr(i,3)),r.push(e)},a=new G(1.1,.8,2);a.translate(0,.9,0),i(a,e);let o=new G(.45,.35,.5);o.translate(.15,1,.1),i(o,t);let s=new G(.5,.45,.6);s.translate(0,1.2,1.15),i(s,e);let c=new G(.32,.25,.28);c.translate(0,1.05,1.45),i(c,n);for(let[e,n]of[[-.32,.65],[.32,.65],[-.32,-.65],[.32,-.65]]){let r=new G(.16,.65,.16);r.translate(e,.32,n),i(r,t)}let l=Iu(r,!1);for(let e of r)e.dispose();if(!l){let e=new G(1.2,1,2);return e.translate(0,.7,0),e}return l.computeVertexNormals(),l}var Kf=`stormchase.wallet.v1`,qf=320,Jf=`sedan`,Yf=qf,Xf=new Set([Jf]),Zf=!1;function Qf(){try{let e={version:1,money:Math.max(0,Math.floor(Yf)),owned:[...Xf]};localStorage.setItem(Kf,JSON.stringify(e))}catch{}}function $f(){if(!Zf){Zf=!0;try{let e=localStorage.getItem(Kf);if(e){let t=JSON.parse(e);if(Yf=Math.max(0,Math.floor(Number(t.money)||0)),Xf.clear(),Xf.add(Jf),Array.isArray(t.owned))for(let e of t.owned)typeof e==`string`&&dd.some(t=>t.id===e)&&Xf.add(e)}else{Yf=qf,Xf.clear(),Xf.add(Jf);let e=md();e&&Xf.add(e);for(let e of dd)e.price<=0&&Xf.add(e.id);Qf()}}catch{Yf=qf,Xf.clear(),Xf.add(Jf)}}}function ep(){return $f(),Yf}function tp(e){return`$${Math.max(0,Math.floor(e)).toLocaleString(`en-US`)}`}function np(e){return $f(),pd(e).price<=0||Xf.has(e)}function rp(e){$f();let t=pd(e);return np(e)?!0:Yf>=t.price}function ip(e){$f();let t=pd(e);return np(e)?{ok:!1,reason:`owned`,need:0,money:Yf}:Yf<t.price?{ok:!1,reason:`funds`,need:t.price-Yf,money:Yf}:(Yf-=t.price,Xf.add(e),Qf(),{ok:!0,money:Yf})}function ap(e){return $f(),Yf+=Math.max(0,Math.floor(e)),Qf(),Yf}function op(e){$f();let t=Math.floor(Math.max(0,e.score)*.42),n=e.photos*18+e.reports*35+e.probes*40,r=0;e.rank===`DOMINATOR`?r+=400:e.rank===`CORE`?r+=220:e.rank===`INTERCEPT`?r+=100:e.rank===`SCOUT`&&(r+=40),e.mode===`survive`&&e.survived&&(r+=700),(e.mode===`chase`||e.mode===`cows`)&&(r+=50);let i=Math.max(e.score>40?60:0,t+n+r);return ap(i),{pay:i,breakdown:`${tp(i)} chase pay`}}function sp(e){return $f(),np(e)?e:np(Jf)?Jf:dd.find(e=>np(e.id))?.id??Jf}var cp=document.querySelector(`#game`),lp=document.querySelector(`#loading`),up=document.querySelector(`#title-screen`),dp=document.querySelector(`#main-menu`),fp=document.querySelector(`#howto`),pp=document.querySelector(`#pause-menu`),mp=document.querySelector(`#store-screen`),hp=document.querySelector(`#credits-screen`),gp=document.querySelector(`#hud`),_p=document.querySelector(`#speed`),vp=document.querySelector(`#surface`),yp=document.querySelector(`#cam-mode`),bp=document.querySelector(`#cell-dist`),xp=document.querySelector(`#chase-clock`),Sp=document.querySelector(`#phase-label`),Cp=document.querySelector(`#ef-label`),wp=document.querySelector(`#tor-variant`),Tp=document.querySelector(`#briefing`),Ep=document.querySelector(`#warning`),Dp=document.querySelector(`#chase-score`),Op=document.querySelector(`#chase-rank`),kp=document.querySelector(`#intercept-tip`),Ap=document.querySelector(`#bearing`),jp=document.querySelector(`#photos`),Mp=document.querySelector(`#reports`),Np=document.querySelector(`#damage`),Pp=document.querySelector(`#rain-overlay`),Fp=document.querySelector(`#cabin-vignette`),Ip=document.querySelector(`#photo-flash`),Lp=document.querySelector(`#chase-summary`),Rp=document.querySelector(`#summary-body`),zp=document.querySelector(`#radio-line`),Bp=document.querySelector(`#toast`),Vp=document.querySelector(`#radar-wrap`),Hp=document.querySelector(`#app`),Up=document.querySelector(`#opt-mode`),Wp=document.querySelector(`#opt-biome`),Gp=document.querySelector(`#opt-tod`),Kp=document.querySelector(`#opt-tornado`),qp=document.querySelector(`#opt-tornado-wrap`),Jp=document.querySelector(`#opt-fast`),Yp=document.querySelector(`#opt-mp-name`),Xp=document.querySelector(`#opt-mp-code`),Zp=document.querySelector(`#mp-status`),Qp=document.querySelector(`#btn-mp-leave`),$p=document.querySelector(`#mp-hud`),em=document.querySelector(`#lobby-screen`),tm=document.querySelector(`#lobby-players`),nm=document.querySelector(`#lobby-code-label`),rm=document.querySelector(`#lobby-status`),im=document.querySelector(`#btn-lobby-launch`),am=document.querySelector(`#card-survive`),om=document.querySelector(`#car-shop`),sm=document.querySelector(`#car-shop-status`),cm=document.querySelector(`#store-car-shop`),lm=document.querySelector(`#store-car-status`),um=document.querySelector(`#store-balance`),dm=document.querySelector(`#garage-balance`),fm={},pm=document.querySelector(`#probes-count`),X=new Nf;$f();var mm=sp(md());hd(mm);var hm=!1;function gm(){let e=tp(ep());um&&(um.textContent=e),dm&&(dm.textContent=e)}function _m(e,t,n,r){if(!e)return;e.innerHTML=``,gm();for(let t of dd){let i=np(t.id);if(r===`garage`&&!i)continue;let a=document.createElement(`button`);a.type=`button`,a.className=`select-card car-card`,t.id===mm&&a.classList.add(`active`),t.optional&&n[t.id]===!1&&a.classList.add(`pending`);let o=ep(),s=``;if(r===`store`){if(i)s=`<span class="card-price owned">OWNED</span>`;else if(t.price<=0)s=`<span class="card-price owned">FREE</span>`;else if(o>=t.price)s=`<span class="card-price">${tp(t.price)} · tap to buy</span>`;else{let e=t.price-o;a.classList.add(`locked-buy`),s=`<span class="card-price short">${tp(t.price)}</span>
          <span class="buy-hint">Need ${tp(e)} more</span>`}}else s=`<span class="card-price owned">READY</span>`;a.dataset.carId=t.id,a.innerHTML=`
      <span class="card-icon">${t.tiv?`TIV`:t.id===`custom`?`WRK`:`CAR`}</span>
      <span class="card-title">${t.name}</span>
      <span class="card-desc">${t.tagline}</span>
      <span class="card-stats">
        <span class="stat-row"><span>Speed</span><span class="stat-pips">${_d(t.stats.speed)}</span></span>
        <span class="stat-row"><span>Grip</span><span class="stat-pips">${_d(t.stats.grip)}</span></span>
        <span class="stat-row"><span>Armor</span><span class="stat-pips">${_d(t.stats.armor)}</span></span>
      </span>
      ${s}`,a.addEventListener(`click`,()=>{bm(t,r)}),e.appendChild(a)}let i=pd(mm);t&&(t.textContent=r===`store`&&!np(i.id)?`Balance ${tp(ep())} — buy a ride or select an owned one`:i.optional&&n[i.id]===!1?`${i.name} — waiting on models/custom-car.stl (using stand-in)`:`Selected: ${i.name} · ${tp(ep())}`)}function vm(e=fm){fm=e,_m(om,sm,e,`garage`),_m(cm,lm,e,`store`)}function ym(e){sm&&(sm.textContent=e),lm&&(lm.textContent=e)}async function bm(e,t){if(t===`store`&&!np(e.id)){if(!rp(e.id)){let t=e.price-ep();ym(`Need ${tp(t)} more for ${e.name}`),Dh(`Need ${tp(t)} more`,2),vm();return}let t=ip(e.id);if(!t.ok){t.reason===`funds`&&(ym(`Need ${tp(t.need)} more for ${e.name}`),Dh(`Need ${tp(t.need)} more`,2)),vm();return}Dh(`Purchased ${e.name} · ${tp(t.money)} left`,2.2),await xm(e),vm()}else np(e.id)?(await xm(e),vm()):Dh(`Buy this ride in the Store first`,2)}async function xm(e){if(!np(e.id))Dh(`Buy this ride in the Store first`,2);else if(hm||e.id===mm)vm();else{mm=e.id,hd(e.id),document.querySelectorAll(`.car-card`).forEach(t=>t.classList.toggle(`active`,t.dataset.carId===e.id)),ym(`Loading ${e.name}…`),hm=!0;try{await Z.loadFromDef(e),ym(`Selected: ${e.name} · ${tp(ep())}`),Dh(`${e.name} ready`,1.6)}catch(t){console.error(t),ym(`Failed to load ${e.name}`),Dh(`Car load failed — check console`,2)}finally{hm=!1}}}function Sm(e){let{pay:t,breakdown:n}=op({score:oh.score,photos:oh.photos+Q.photos,reports:Q.reports,probes:Xm.count,rank:oh.rank(),mode:$,survived:e?.survived});return gm(),{pay:t,breakdown:n}}async function Cm(){let e={};await Promise.all(dd.map(async t=>{e[t.id]=await gd(t)})),vm(e)}function wm(){document.querySelectorAll(`.select-card[data-group]`).forEach(e=>{e.addEventListener(`click`,()=>{if(e.disabled||e.classList.contains(`locked`))return;let t=e.dataset.group;document.querySelectorAll(`.select-card[data-group="${t}"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),t===`mode`&&e.dataset.mode&&(Up.value=e.dataset.mode,Om()),t===`biome`&&e.dataset.biome&&(Wp.value=e.dataset.biome),t===`tod`&&e.dataset.tod&&(Gp.value=e.dataset.tod),t===`tornado`&&e.dataset.tornado&&(Kp.value=e.dataset.tornado)})})}wm();var Tm=document.querySelector(`#card-cows`);function Em(){let e=!!X.roomCode;am&&(am.classList.toggle(`locked`,e),am.disabled=e),Tm&&(Tm.classList.toggle(`locked`,e),Tm.disabled=e),e&&(Up.value===`survive`||Up.value===`cows`)&&(Up.value=`chase`,document.querySelectorAll(`.select-card[data-group="mode"]`).forEach(e=>e.classList.toggle(`active`,e.dataset.mode===`chase`)),Om())}function Dm(){if(tm&&X.roomCode){nm.textContent=`ROOM ${X.roomCode}`,tm.innerHTML=``;for(let e of X.lobbyPlayers){let t=document.createElement(`li`),n=e.id===X.playerId?` (you)`:``,r=e.host?` · host`:``;t.innerHTML=`<span>${e.name}${n}${r}</span><span class="role-tag">${e.role}</span>`,tm.appendChild(t)}rm.textContent=X.isHost?`Host — launch when everyone has a role`:`Waiting for host to launch`,im&&(im.disabled=!X.isHost||X.lobbyPlayers.length<1),document.querySelectorAll(`.role-card`).forEach(e=>{e.classList.toggle(`active`,e.dataset.role===X.myRole)})}}function Om(){let e=Up.value===`tornado`;qp.classList.toggle(`hidden`,!e)}Up.addEventListener(`change`,Om),Om(),document.querySelectorAll(`.role-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.role||`chaser`;X.setRole(t),Dm()})});var km=document.querySelector(`#hint`),Am=document.querySelector(`#hint-tornado`),jm=document.querySelector(`#brand`),Mm=document.querySelector(`#shots-label`),Nm=document.querySelector(`#rpts-label`),Pm=document.querySelector(`#title-update`),Fm=document.querySelector(`#title-update-summary`),Im=document.querySelector(`#menu-update`),Lm=document.querySelector(`#hud-update`);Pm.textContent=Of(),Fm.textContent=Df.summary,Im.textContent=Of(),Lm.textContent=`Update ${Df.id}`,document.title=`Storm Chase ${Df.id} — ${Df.name}`;var Rm=new Il({canvas:cp,antialias:!0,powerPreference:`high-performance`});Rm.setPixelRatio(Math.min(window.devicePixelRatio,2)),Rm.setSize(window.innerWidth,window.innerHeight),Rm.shadowMap.enabled=!0,Rm.shadowMap.type=2,Rm.outputColorSpace=Re,Rm.toneMapping=4,Rm.toneMappingExposure=1.02;var zm=new Ln,Bm=new Wa(56,window.innerWidth/window.innerHeight,.1,9e3),Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym=!1,Z=new Md;zm.add(Z.group);var Q=new Cf;zm.add(Q.group);var Xm=new If(zm),Zm=new Rf(zm),Qm=new Wf(zm),$m=new Ef(14);zm.add($m.group);var eh=new af,th=new Kd;zm.add(th.group),zm.add(th.fallen);var nh=new qd(Bm),rh=new ff(Vp),ih=new wf(Hp),ah=new pf,oh=new mf,sh=new vf,ch=new H,lh=new H,uh=`title`,dh=!1,fh=``,ph=``,mh=``,hh=0,gh=`—`,$=`chase`,_h=0,vh=0,yh=600,bh=0,xh=`none`,Sh=Zl();Ql(Hp),Mu(cp,{mobile:Sh}),X.attach(zm),X.onStatusChange(e=>{Zp.textContent=e,Qp.classList.toggle(`hidden`,!X.roomCode),Em(),X.roomCode?($p.textContent=`ROOM ${X.roomCode}${X.isHost?` · HOST`:``}`,$p.classList.remove(`hidden`)):$p.classList.add(`hidden`)}),X.onRosterChange(()=>Dm()),X.onHostStart(e=>{if(uh===`playing`||wh)return;let t=X.playerId||``,n=e.roles[t]||X.myRole;X.myRole=n,Up.value=n===`tornado`?`tornado`:`chase`,Wp.value=e.config.biome,Gp.value=e.config.timeOfDay,Kp.value=e.config.tornadoVariant,Jp.checked=e.config.fast,Om(),Dh(`Launching as ${n} · room ${X.roomCode}`),Nh({fromNetwork:!0,mpRole:n})});var Ch=()=>{ah.ensure(),window.removeEventListener(`pointerdown`,Ch),window.removeEventListener(`keydown`,Ch)};window.addEventListener(`pointerdown`,Ch),window.addEventListener(`keydown`,Ch);var wh=!1,Th=!1;function Eh(e){let t=document.querySelector(`#btn-start`);t&&(t.disabled=!e,t.textContent=e?`Start`:`Loading world…`)}function Dh(e,t=2.5){Bp.textContent=e,Bp.classList.remove(`hidden`),hh=t}function Oh(e){uh=e,up.classList.toggle(`hidden`,e!==`title`),dp.classList.toggle(`hidden`,e!==`menu`),fp.classList.toggle(`hidden`,e!==`howto`),em.classList.toggle(`hidden`,e!==`lobby`),pp.classList.toggle(`hidden`,e!==`paused`),mp.classList.toggle(`hidden`,e!==`store`),hp.classList.toggle(`hidden`,e!==`credits`),gp.classList.toggle(`hidden`,e!==`playing`&&e!==`paused`),eu(e===`playing`),e===`lobby`&&Dm(),e===`store`&&vm(),e!==`playing`&&(ih.setOpen(!1),Nu())}function kh(e){return e===`scrub`?{hills:1.55,rough:1.35,tint:6969912}:e===`farmland`?{hills:.85,rough:.95,tint:5926960}:{hills:1.15,rough:1.1,tint:5926456}}function Ah(e){let t=kh(e.biome);ed(t.hills,t.rough),Um.color.setHex(t.tint),Wm.setTimeOfDay(e.timeOfDay),Gm.setTimeOfDay(e.timeOfDay),e.timeOfDay===`dawn`?Vm.color.setHex(16763040):e.timeOfDay===`dusk`?Vm.color.setHex(16756864):Vm.color.setHex(16769732)}function jh(){return eh.phase===`tornado`?.85:eh.phase===`funnel`?.45:eh.phase===`supercell`?.25:eh.phase===`towers`?.12:eh.phase===`weakening`?.3:.08}function Mh(){let e=Z.group.position.x-eh.cell.x,t=Z.group.position.z-eh.cell.z,n=Math.hypot(e,t)||1,r=Math.atan2(e/n,t/n)-Z.heading;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;let i=V.clamp(-r*1.8,-1,1),a=n<120;return{throttle:a?1:.7,steer:i,brake:!1,boost:a&&n<70,toggleDeploy:!1,flipVehicle:!1,toggleCamera:!1,toggleRadar:!1,toggleMap:!1,exitVehicle:!1,takePhoto:!1,reportTornado:!1,plantProbe:!1,pause:!1,confirm:!1,lookYaw:0,lookPitch:0,mouseDX:0,mouseDY:0,zoomDelta:0}}function Nh(e){if(!wh){if(!Ym)Th=!0,Dh(`Building plains — starting as soon as ready…`),Eh(!1);else if(X.roomCode&&!e?.fromNetwork)Em(),Oh(`lobby`);else{wh=!0,Th=!1;try{let t=Up.value;e?.mpRole===`tornado`&&(t=`tornado`),e?.mpRole===`chaser`&&(t=`chase`),X.roomCode&&(t===`survive`||t===`cows`)&&(t=`chase`);let n={biome:Wp.value,timeOfDay:Gp.value,tornadoVariant:t===`tornado`||t===`cows`?Kp.value:`random`,playMode:t,fast:Jp.checked||new URLSearchParams(location.search).has(`fast`)};$=n.playMode,Ah(n),eh.clearNetworkSlave(),X.roomCode&&!X.isHost&&X.myRole!==`tornado`&&(eh.networkSlave=!0);let r=$===`survive`?`catastrophic`:$===`cows`?`wedge`:Zd(n.tornadoVariant);if(th.setVariant(r),th.cownado=$===`cows`,eh.setVariant(r),gh=$===`cows`?`Cownado`:Yd[r],wp.textContent=$===`survive`?`EF5 Hunt`:$===`cows`?`Cownado`:$===`chase`?`Random`:gh,Z.reset(),Q.enterVehicle(),Q.photos=0,Q.reports=0,Xm.reset(),Zm.reset(),Zm.rollSpawn()&&Zm.load(`/models/eternatus.stl`).then(()=>{Zm.active&&(Zm.group.visible=!0,Dh(`…something ancient stirs in the clouds`))}),Qm.setActive(!1),oh.reset(),Km.reset(),qm.reset(),th.resetDebris(),Jm.reset(),sh.reset(),$m.reset(),_h=0,vh=0,bh=0,xh=`none`,yh=Jd(n.fast),dh=!1,ph=``,mh=``,fh=``,Lp.classList.add(`hidden`),$===`tornado`||$===`cows`){eh.startTornadoFormation();{let e=eh.cell.x+40,t=eh.cell.z+160;Z.group.position.set(e,Y(e,t),t),Z.heading=0}th.setPilotView(!0),Gm.setPilotView(!0),nh.setTornado(!0),$===`cows`?(Qm.setActive(!0),Qm.resetAround(eh.cell.x,eh.cell.z),jm.textContent=`COW TAKEOVER`,Mm.textContent=`Lofted`,Nm.textContent=`Herd`,Dh(`Cownado on the ground — ${zf.toLocaleString()} cows are adventuring. Steer the moo.`)):(jm.textContent=`BECOME THE TORNADO`,Mm.textContent=`Wrecks`,Nm.textContent=`Alive`,Dh(`${gh} — on the ground. Steer now.`)),km.classList.add(`hidden`),Am.classList.toggle(`hidden`,Sh)}else $===`survive`?(eh.startSurviveHunt(),Z.group.position.set(0,Y(0,40),40),Z.heading=0,eh.setHuntTarget(0,40),th.setPilotView(!1),Gm.setPilotView(!1),nh.setTornado(!1),nh.setOnFoot(!1),jm.textContent=`SURVIVE THE EF5`,km.classList.toggle(`hidden`,Sh),Am.classList.add(`hidden`),Mm.textContent=`Left`,Nm.textContent=`Goal`,Dh(`EF5 is hunting you — survive ${Math.round(yh/60)} minutes`)):(eh.restart(),n.fast&&eh.applyFastFormation(),th.setPilotView(!1),Gm.setPilotView(!1),nh.setTornado(!1),nh.setOnFoot(!1),jm.textContent=`STORM CHASE`,km.classList.toggle(`hidden`,Sh),Am.classList.add(`hidden`),Mm.textContent=`Shots`,Nm.textContent=`Rpts`,Dh(`Chase live — morphology rolled randomly`));Oh(`playing`)}catch(e){console.error(`startChase failed`,e),Dh(`Failed to start — see console`),Oh(`menu`)}finally{wh=!1}}}}function Ph(e,t){let n=document.querySelector(e);n?n.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),t()}):console.error(`Missing control`,e)}Ph(`#btn-enter`,()=>Oh(`menu`)),Ph(`#btn-store`,()=>Oh(`store`)),Ph(`#btn-credits`,()=>Oh(`credits`)),Ph(`#btn-store-back`,()=>Oh(`title`)),Ph(`#btn-credits-back`,()=>Oh(`title`)),Ph(`#btn-start`,()=>Nh()),Ph(`#btn-howto`,()=>Oh(`howto`)),Ph(`#btn-howto-back`,()=>Oh(`menu`)),Ph(`#btn-resume`,()=>Oh(`playing`)),Ph(`#btn-quit-menu`,()=>{ih.setOpen(!1),Lp.classList.add(`hidden`),dh=!1,Oh(`title`)}),Ph(`#btn-mp-find`,async()=>{X.setName(Yp.value||`Chaser`);let e=await X.findLobby().catch(()=>null);e?(Xp.value=e,Em(),Oh(`lobby`),Dh(`Lobby ${e}`)):Dh(`Find lobby failed — server offline?`)}),Ph(`#btn-mp-create`,async()=>{X.setName(Yp.value||`Chaser`);let e=await X.createRoom(!1).catch(()=>null);e?(Xp.value=e,Em(),Oh(`lobby`),Dh(`Room ${e} — share this code`)):Dh(`Could not create room — is the MP server up?`)}),Ph(`#btn-mp-join`,async()=>{X.setName(Yp.value||`Chaser`),await X.joinRoom(Xp.value).catch(()=>!1)?(Em(),Oh(`lobby`),Dh(`Joined room ${X.roomCode}`)):Dh(`Join failed — check code / server`)}),Ph(`#btn-mp-leave`,()=>{X.leave(),eh.clearNetworkSlave(),Em(),uh===`lobby`&&Oh(`menu`),Dh(`Left multiplayer room`)}),Ph(`#btn-lobby-back`,()=>Oh(`menu`)),Ph(`#btn-lobby-launch`,()=>{if(!X.isHost){Dh(`Only the host can launch`);return}let e={biome:Wp.value,timeOfDay:Gp.value,tornadoVariant:X.myRole===`tornado`?Kp.value:`random`,playMode:X.myRole===`tornado`?`tornado`:`chase`,fast:Jp.checked||new URLSearchParams(location.search).has(`fast`)};X.broadcastStart(e),Nh({fromNetwork:!0,mpRole:X.myRole})});function Fh(){Bm.aspect=window.innerWidth/window.innerHeight,Bm.updateProjectionMatrix(),Rm.setSize(window.innerWidth,window.innerHeight)}window.addEventListener(`resize`,Fh);function Ih(e){return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`}function Lh(e,t,n){let r=t.x-e.x,i=t.z-e.z,a=Math.atan2(r,i)*180/Math.PI-n*180/Math.PI;for(;a>180;)a-=360;for(;a<-180;)a+=360;let o=(Math.round((a+360)%360/30)+12)%12||12;return`${Math.abs(a)<22?`DEAD AHEAD`:a>0?`${Math.abs(Math.round(a))}° R`:`${Math.abs(Math.round(a))}° L`} · ${o} o'clock`}var Rh=new go,zh=0;function Bh(){requestAnimationFrame(Bh);let e=Math.min(Rh.getDelta(),.05),t=Pu();if(uh===`title`||uh===`menu`||uh===`howto`||uh===`lobby`||uh===`store`||uh===`credits`){t.confirm&&(uh===`title`?Oh(`menu`):uh===`menu`?Nh():uh===`lobby`&&X.isHost?document.querySelector(`#btn-lobby-launch`)?.click():uh===`howto`?Oh(`menu`):(uh===`store`||uh===`credits`)&&Oh(`title`)),t.pause&&(uh===`store`||uh===`credits`)&&Oh(`title`),Rm.setClearColor(1712684),Rm.clear();return}if(!Ym)return;if(t.pause&&(uh===`playing`||uh===`paused`)&&Oh(uh===`playing`?`paused`:`playing`),uh===`paused`){Rm.render(zm,Bm);return}if(uh!==`playing`)return;t.toggleMap&&ih.toggle(),ih.open&&ih.handleKeys({left:t.steer<-.2||!1,right:t.steer>.2||!1,up:t.throttle>.2,down:t.throttle<-.2,zoomIn:t.zoomDelta<0,zoomOut:t.zoomDelta>0});let n=$===`chase`||$===`survive`,r=$===`tornado`||$===`cows`;if(t.toggleCamera&&n&&!Q.active&&(nh.toggle(),yp.textContent=nh.label()),t.toggleRadar&&rh.toggleProduct(),n&&!Q.active&&t.toggleDeploy){let e=Z.tryToggleDeploy();e&&Dh(e,2.2)}if(n&&!Q.active&&t.flipVehicle){let e=Z.tryFlip();e&&Dh(e,1.8)}if(n&&t.exitVehicle&&!Z.airborne){if(Q.active)Q.group.position.distanceTo(Z.group.position)<6?(Q.enterVehicle(),nh.setOnFoot(!1),yp.textContent=nh.label(),Dh(`Back in the chase vehicle`)):Dh(`Get closer to the vehicle to enter`);else if(Z.deployed)Dh(`Retract claws (R) before exiting`);else if(Z.overturned)Dh(`Flip upright (G) before exiting`);else{let e=new H(Math.cos(Z.heading)*2.2,0,-Math.sin(Z.heading)*2.2),t=Z.group.position.clone().add(e);Q.spawnAt(t,Z.heading),nh.setOnFoot(!0,Z.heading),yp.textContent=nh.label(),Dh(`On foot — P photo · T report · B probe · F re-enter`)}}if(r&&eh.playerControlled&&!eh.networkSlave){let n=(t.boost?62:38)*(.75+jh()),r=nh.yaw,i=Math.sin(r),a=Math.cos(r),o=-a,s=i,c=(i*t.throttle+o*t.steer)*n*e,l=(a*t.throttle+s*t.steer)*n*e;eh.cell.x=V.clamp(eh.cell.x+c,-Ru+80,Ru-80),eh.cell.z=V.clamp(eh.cell.z+l,-Ru+80,Ru-80);let u=Math.hypot(c,l);u>.01&&(vh+=u*.15,oh.score+=u*.12)}let i=r?eh.cell:Q.active?Q.group.position:Z.group.position;$===`survive`&&xh===`none`&&eh.setHuntTarget(i.x,i.z),X.connected&&!X.isHost&&X.myRole!==`tornado`&&X.lastStorm&&eh.applyRemoteStorm(X.lastStorm);let a=eh.update(e);th.update(e,a);{let t=X.isHost?{cx:a.cell.x,cz:a.cell.z,mx:a.motion.x,mz:a.motion.z,phase:a.phase,phaseProgress:a.phaseProgress,tornadoStrength:a.tornadoStrength,organization:a.organization,precip:a.precip,wallCloud:a.wallCloud,skyDark:a.skyDark,rfd:a.rfd,inflow:a.inflow,warning:a.warning,warningActive:a.warningActive,efLabel:a.efLabel,phaseLabel:a.phaseLabel,briefing:a.briefing,interceptTip:a.interceptTip,elapsed:a.elapsed}:null,n=$===`tornado`||X.myRole===`tornado`,r=n?eh.cell:Q.active?Q.group.position:Z.group.position;X.tick(e,{x:r.x,y:n?Y(r.x,r.z):r.y,z:r.z,heading:n?nh.yaw:Q.active?Q.heading:Z.heading,speed:n||Q.active?0:Z.speed,mode:$,tornadoStrength:n?a.tornadoStrength:0},t)}if($===`survive`&&xh===`none`&&!dh){bh+=e;let t=th.distanceTo(i),n=!Q.active&&Z.damage>=.98,r=!Q.active&&Z.deployed,o=t<(Q.active?18:14)&&a.tornadoStrength>.5&&!r;if(n||o)xh=`lost`,dh=!0,Rp.innerHTML=`
        <div><span>Result</span><b>CAUGHT</b></div>
        <div><span>Survived</span><b>${Ih(bh)}</b></div>
        <div><span>Goal</span><b>${Ih(yh)}</b></div>
        <div><span>Damage</span><b>${Math.round(Z.damage*100)}%</b></div>
        <div><span>Score</span><b>${Math.floor(oh.score)}</b></div>
        <p>The EF5 got you. <kbd>Esc</kbd> → Quit to Menu.</p>`,Lp.classList.remove(`hidden`),Dh(`You were caught by the EF5`,3);else if(bh>=yh){xh=`won`,dh=!0,oh.score+=2500;let e=Sm({survived:!0});Rp.innerHTML=`
        <div><span>Result</span><b>SURVIVED</b></div>
        <div><span>Time</span><b>${Ih(yh)}</b></div>
        <div><span>Final score</span><b>${Math.floor(oh.score)}</b></div>
        <div><span>Chase pay</span><b>${tp(e.pay)}</b></div>
        <div><span>Bankroll</span><b>${tp(ep())}</b></div>
        <div><span>Damage</span><b>${Math.round(Z.damage*100)}%</b></div>
        <div><span>Rank</span><b>${oh.rank()}</b></div>
        <p>You outran the EF5. <kbd>Esc</kbd> → Quit to Menu.</p>`,Lp.classList.remove(`hidden`),Dh(`Survived! ${e.breakdown}`,3)}}if(Gm.update(e,i,a),th.cloudBaseHeight=220,Wm.update(e,i,a,Gm.flash),Zm.update(e,eh.cell,i,a.tornadoStrength),$===`cows`&&Qm.update(e,eh.cell,a.tornadoStrength,th.destroyRadius,(e,t)=>th.windAt(e,t)),Km.update(e,a,th),qm.update(e,a,th),qm.wreckageScore>0&&(oh.score+=qm.wreckageScore,qm.wreckageScore=0),th.windAt(Z.group.position,ch),n&&!Q.active){let e=qm.hitVehicle(Z.group.position,2.1,lh);e>0&&(Z.applyDebrisKick(lh,e),nh.addShake(Math.min(.12,e*1.4)))}let o=a.tornadoStrength>.08?{x:eh.cell.x,z:eh.cell.z,strength:a.tornadoStrength}:null,s=$m.update(e,o,(e,t)=>th.windAt(e,t));if(r&&s>0&&(oh.score+=s),r){Z.setWetness(V.damp(Z.wetness,Gm.nearPrecip,1.8,e));let t=ih.open?{...Mh(),throttle:0,steer:0}:Mh();Z.update(e,t,ch,Jm);let n=th.distanceTo(Z.group.position);if(n<28&&a.tornadoStrength>.35){let t=(1-n/28)*a.tornadoStrength*45*e;oh.score+=t,n<16&&Z.airborne&&(_h+=e,oh.score+=80*e)}nh.addShake(.004+a.tornadoStrength*.006)}else if(Q.active){if(Q.update(e,t),th.liftForce>.4){let e=th.distanceTo(Q.group.position);e<35&&(nh.addShake((1-e/35)*.06),Dh(`Hazard — get clear of the circulation!`,1.2))}}else if(Z.setWetness(V.damp(Z.wetness,Gm.nearPrecip,1.8,e)),Z.update(e,ih.open?{...t,throttle:0,steer:0,zoomDelta:0}:t,ch,Jm),Z.deployed&&a.tornadoStrength>.25){let t=th.distanceTo(Z.group.position);if(t>45&&t<220){let n=1-Math.abs(t-110)/110,r=Math.max(0,n)*a.tornadoStrength*55*e;oh.score+=r,nh.addShake(.008+a.tornadoStrength*.012)}else t<=45&&a.tornadoStrength>.55&&(oh.score+=a.tornadoStrength*12*e,nh.addShake(.03*a.tornadoStrength))}if(n&&Q.active&&t.takePhoto&&(Q.photos+=1,oh.score+=40+a.tornadoStrength*80,Ip.classList.add(`on`),setTimeout(()=>Ip.classList.remove(`on`),90),Dh(`Photo logged`)),n&&Q.active&&t.reportTornado){let e=th.distanceTo(Q.group.position);a.tornadoStrength>.2&&e<400?(Q.reports+=1,oh.score+=120+a.tornadoStrength*100,Dh(`Tornado report filed — NWS`)):Dh(`No confirmable circulation in range`)}if(n&&Q.active&&(Xm.tick(e),oh.score+=Xm.walkSample(e,Q.group.position,th.group.position,a.tornadoStrength),t.plantProbe)){let e=Xm.tryPlant(Q.group.position,Q.heading,th.group.position,a.tornadoStrength);typeof e==`string`?Dh(e,1.6):(oh.score+=e.score,Dh(`Probe #${Xm.count} · ${e.windMph} mph · ${e.pressureMb} mb · ${e.distM} m`,2.4))}if($===`survive`&&xh===`none`&&(oh.score+=3.5*e),a.phase===`dissipated`&&!dh&&a.elapsed>10&&!eh.endlessTornado){dh=!0;let e=oh.bestProximityM<1e8?`${Math.round(oh.bestProximityM)} m`:`—`,t=Sm();Rp.innerHTML=r?$===`cows`?`
        <div><span>Final score</span><b>${Math.floor(oh.score)}</b></div>
        <div><span>Rank</span><b>${oh.rank()}</b></div>
        <div><span>Chase pay</span><b>${tp(t.pay)}</b></div>
        <div><span>Bankroll</span><b>${tp(ep())}</b></div>
        <div><span>Cows lofted</span><b>${Qm.lofted.toLocaleString()}</b></div>
        <div><span>Herd</span><b>${zf.toLocaleString()}</b></div>
        <div><span>Storm</span><b>Cownado</b></div>
        <p><kbd>Esc</kbd> → Quit to Menu for a new run.</p>`:`
        <div><span>Final score</span><b>${Math.floor(oh.score)}</b></div>
        <div><span>Rank</span><b>${oh.rank()}</b></div>
        <div><span>Chase pay</span><b>${tp(t.pay)}</b></div>
        <div><span>Bankroll</span><b>${tp(ep())}</b></div>
        <div><span>Path score</span><b>${Math.floor(vh)}</b></div>
        <div><span>Vehicles destroyed</span><b>${$m.destroyed}</b></div>
        <div><span>Chase truck loft</span><b>${_h.toFixed(1)}s</b></div>
        <div><span>Structure hits</span><b>${qm.structureHits}</b></div>
        <div><span>Tornado</span><b>${gh}</b></div>
        <p><kbd>Esc</kbd> → Quit to Menu for a new run.</p>`:`
        <div><span>Final score</span><b>${Math.floor(oh.score)}</b></div>
        <div><span>Rank</span><b>${oh.rank()}</b></div>
        <div><span>Chase pay</span><b>${tp(t.pay)}</b></div>
        <div><span>Bankroll</span><b>${tp(ep())}</b></div>
        <div><span>Shots</span><b>${oh.photos+Q.photos}</b></div>
          <div><span>Reports</span><b>${Q.reports}</b></div>
        <div><span>Probes</span><b>${Xm.count}</b></div>
        <div><span>Tornado</span><b>${gh}</b></div>
        <div><span>Best approach</span><b>${e}</b></div>
        <p><kbd>Esc</kbd> → Quit to Menu for a new run.</p>`,Lp.classList.remove(`hidden`),Dh(t.breakdown,2.4)}let c=th.distanceTo(Z.group.position);n&&(c<55&&a.tornadoStrength>.4&&nh.addShake((1-c/55)*a.tornadoStrength*.05),c<30&&a.tornadoStrength>.5&&!Q.active&&nh.addShake(.04*a.tornadoStrength)),Gm.nearHail>.3&&nh.addShake(Gm.nearHail*.01),hh>0&&(hh-=e,hh<=0&&Bp.classList.add(`hidden`));let l=sh.update(e,a);l!==fh&&(fh=l,zp.textContent=$===`cows`?`MOO — one million cows have taken the plains. Steer the cownado.`:$===`tornado`?`You are circulation — chase vehicle attempting escape.`:$===`survive`?`EF5 is tracking your vehicle — keep moving, do not park under the core.`:l),$===`chase`&&oh.update(e,i,a,th.group.position),nh.update(e,Z,ih.open?{...t,zoomDelta:0,mouseDX:0,mouseDY:0}:t,Q,eh.cell),ah.update(e,{speed:r||Q.active?0:Z.speed,precipNear:Gm.nearPrecip,hailNear:Gm.nearHail,wind:a.inflow*.5+a.organization*.3,flash:Gm.flash,tornadoNear:r?.85*a.tornadoStrength:V.clamp(1-c/180,0,1)*a.tornadoStrength});let u=nh.mode===`first`;Fp.classList.toggle(`hidden`,!u);let d=u||nh.mode===`onfoot`?Math.min(.55,Gm.nearPrecip*.45+Gm.nearHail*.12+a.tornadoStrength*.22):r?Math.min(.28,Gm.nearPrecip*.2+a.tornadoStrength*.12):Math.min(.38,Gm.nearPrecip*.32+a.tornadoStrength*.18);if(Pp.style.opacity=String(d),Um.roughness=V.lerp(.95,.55,Gm.nearPrecip),Vm.position.set(i.x-140,V.lerp(88,35,a.skyDark),i.z+40),Vm.target.position.copy(i),Vm.target.updateMatrixWorld(),Vm.intensity=V.lerp(1.35,.42,a.skyDark),Gm.flash>.15&&(Vm.intensity+=Gm.flash*1.1),r||$===`survive`?(Vm.intensity=Math.max(Vm.intensity,$===`survive`?.7:.62),Rm.toneMappingExposure=V.lerp(1.15,$===`survive`?1.05:1,a.skyDark*.4)):Rm.toneMappingExposure=V.lerp(1.08,.88,a.skyDark),zh+=e,zh>.08){zh=0;let e=Q.active?Q.heading:Z.heading;if(r){let e=Math.hypot(t.throttle,t.steer)*(t.boost?62:38);_p.textContent=String(Math.round(e*2.237)),vp.textContent=$===`cows`?t.boost?`MOO SURGE`:`COWNADO`:t.boost?`SURGE`:`VORTEX`,vp.style.color=$===`cows`?`#e8d4a8`:t.boost?`#ff6688`:`#c8a060`;let n=c,r=n/1609;bp.textContent=r<.1?`${Math.round(n)} m`:`${r.toFixed(2)} mi`,Ap.textContent=Lh(eh.cell,Z.group.position,0).replace(`DEAD AHEAD`,$===`cows`?`HERD`:`PREY`),a.phase===`tornado`?(kp.textContent=$===`cows`?`Cownado forever — ${zf.toLocaleString()} cows adventuring. Shift = surge.`:`Grounded forever — hunt traffic + towns. ${$m.aliveCount()} cars left. Shift = surge.`,Tp.textContent=$===`cows`?`Cow Takeover in progress. The plains belong to the herd.`:a.briefing):(kp.textContent=a.interceptTip,Tp.textContent=`Forming (${a.phaseLabel}): ${a.briefing}`)}else{_p.textContent=Q.active?String(Math.round((t.throttle!==0||t.steer!==0?t.boost?7:4:0)*2.237)):String(Z.getSpeedMph()),Q.active?(vp.textContent=`FOOT`,vp.style.color=`#b8d4a8`):Z.deployed?(vp.textContent=`TIV DEPLOYED`,vp.style.color=`#f0c14a`):Z.airborne?(vp.textContent=`AIRBORNE`,vp.style.color=`#ff6688`):Z.overturned?(vp.textContent=`ROLLED — G FLIP`,vp.style.color=`#ff8866`):Z.onRoad?(vp.textContent=`ROAD`,vp.style.color=`#9ec8ff`):(vp.textContent=`DIRT`,vp.style.color=`#e0b060`);let n=th.distanceTo(i),r=n/1609;bp.textContent=r<.1?`${Math.round(n)} m`:`${r.toFixed(2)} mi`,Ap.textContent=Lh(i,a.cell,e)}if($===`survive`){xp.textContent=Ih(bh);let e=Math.max(0,yh-bh);jp.textContent=Ih(e),Mp.textContent=Ih(yh),kp.textContent=xh===`won`?`You made it. Esc → Quit to Menu.`:xh===`lost`?`Caught. Esc → Quit to Menu.`:`EF5 hunting — ${Ih(e)} left. Keep moving · R for short TIV holds.`,Tp.textContent=a.briefing}else xp.textContent=Ih(a.elapsed),jp.textContent=String($===`cows`?Qm.lofted:$===`tornado`?$m.destroyed:oh.photos+Q.photos),Mp.textContent=String($===`cows`?zf:$===`tornado`?$m.aliveCount():Q.reports),pm&&(pm.textContent=String(r?`—`:Xm.count));Dp.textContent=String(Math.floor(oh.score)),Op.textContent=oh.rank(),Np.textContent=String(Math.round(Z.damage*100)),Np.style.color=Z.damage>.55?`#ff6a6a`:Z.damage>.25?`#f0c14a`:`#e8eef5`,yp.textContent=nh.label(),a.phaseLabel!==ph&&(ph=a.phaseLabel,Sp.textContent=a.phaseLabel,$===`chase`&&(Tp.textContent=a.briefing,kp.textContent=a.interceptTip)),Cp.textContent=$===`survive`?`EF5`:$===`cows`?`MOO`:a.efLabel,$===`chase`&&(a.phase===`weakening`||a.efLabel===`ROPE`?wp.textContent=`Rope-out`:a.phase===`tornado`&&a.phaseProgress>.68?wp.textContent=`${gh} → rope`:(a.phase===`tornado`||a.phase===`funnel`)&&(wp.textContent=gh)),a.warning!==mh&&(mh=a.warning,a.warning?(Ep.textContent=$===`cows`?`COW TAKEOVER`:$===`tornado`?`YOU ARE THE WARNING`:$===`survive`?`EF5 HUNT — SURVIVE`:a.warning,Ep.classList.remove(`hidden`),Ep.classList.toggle(`svr`,!a.warning.includes(`TOR`)),n&&ah.playWarningChirp(a.warning)):Ep.classList.add(`hidden`));let o=i,s=[...X.peers.values()].map(e=>({x:e.x,z:e.z,name:e.name,heading:e.heading}));(a.precip>.25||a.tornadoStrength>.15)&&Math.floor(a.elapsed*20)&1||rh.draw(o,a,0,e,s),ih.open&&ih.draw(o,a,a.briefing,a.interceptTip,e,s)}Rm.render(zm,Bm)}Oh(`title`),Eh(!1),Bh(),lp.classList.remove(`hidden`),lp.textContent=`Loading garage…`,await Cm(),lp.textContent=`Loading chase vehicle…`;try{await Z.loadFromDef(pd(mm))}catch(e){console.error(`Vehicle load failed`,e),Dh(`Vehicle model missing — using placeholder`)}lp.textContent=`Herding the plains…`,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),ed(1.2,1.1);try{let e=sd(zm);Vm=e.sun,Hm=e.ground,Um=Hm.material,Wm=new yf(zm),Gm=new Gd(zm),Km=new hf(zm),qm=new gf(zm),qm.registerBuildings(e.buildings),qm.registerTreeBatches(e.treeBatches),qm.registerProps(e.props),Jm=new Nd,Jm.registerBuildings(e.buildings),Jm.registerTreeBatches(e.treeBatches),Jm.registerProps(e.props),qm.collisions=Jm,Ym=!0}catch(e){console.error(`World build failed`,e),lp.textContent=`World build failed — refresh`,Dh(`World build failed — try refresh`)}lp.classList.add(`hidden`),Ym?(Eh(!0),Th&&(Th=!1,Nh())):(Eh(!1),Dh(`World failed to load — refresh the page`));