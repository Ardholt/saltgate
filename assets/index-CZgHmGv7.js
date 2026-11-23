var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,ee=1030,te=1031,ne=1033,j=33776,re=33777,M=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,N=37496,de=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,P=2300,Ie=2301,Le=2302,Re=2303,F=2400,ze=2401,I=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,L(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*st}function Ct(e){return e*ct}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kt(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function At(e,t){if(t.constructor===Float32Array)return e;let n=Ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var jt={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:z,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:At,denormalize:kt},B=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new V,Pt=new Mt,Ft=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new Ft,Lt=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Xe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new V,Xt=class e extends it{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=lt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Xt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*j,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*j,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*j,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*j,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new V,an=new nn,on=new V(0,0,0),sn=new V(1,1,1),cn=new V,ln=new V,un=new V,dn=new nn,fn=new Mt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new V,_n=new Mt,vn=new nn,yn=new V,bn=new V,xn=new V,Sn=new Mt,Cn=new V(1,0,0),wn=new V(0,1,0),Tn=new V(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new pn,r=new Mt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new Ft}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new V(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ut(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Pn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Bt.workingToColorSpace(Rn.copy(this),e),Math.round(z(Rn.r*255,0,255))*65536+Math.round(z(Rn.g*255,0,255))*256+Math.round(z(Rn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Rn.copy(this),t);let n=Rn.r,r=Rn.g,i=Rn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Ve){Bt.workingToColorSpace(Rn.copy(this),e);let t=Rn.r,n=Rn.g,r=Rn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=pt(Fn.h,In.h,t),r=pt(Fn.s,In.s,t),i=pt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new H;H.NAMES=Pn;var zn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new V,Zn=new Zt,Qn=new Zt,$n=new Zt,er=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vn.subVectors(r,t),Hn.subVectors(n,t),Un.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Hn),s=Vn.dot(Un),c=Hn.dot(Hn),l=Hn.dot(Un),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Wn.x),s.addScaledVector(a,Wn.y),s.addScaledVector(o,Wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zn.setScalar(0),Qn.setScalar(0),$n.setScalar(0),Zn.fromBufferAttribute(e,t),Qn.fromBufferAttribute(e,n),$n.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zn,i.x),a.addScaledVector(Qn,i.y),a.addScaledVector($n,i.z),a}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Hn.subVectors(e,t),Vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gn.subVectors(r,n),Kn.subVectors(i,n),Jn.subVectors(e,n);let s=Gn.dot(Jn),c=Kn.dot(Jn);if(s<=0&&c<=0)return t.copy(n);Yn.subVectors(e,r);let l=Gn.dot(Yn),u=Kn.dot(Yn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Gn,a);Xn.subVectors(e,i);let f=Gn.dot(Xn),p=Kn.dot(Xn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rr):rr.fromBufferAttribute(r,t),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ir.copy(e.boundingBox)),ir.applyMatrix4(e.matrixWorld),this.union(ir)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fr.subVectors(this.max,dr),ar.subVectors(e.a,dr),or.subVectors(e.b,dr),sr.subVectors(e.c,dr),cr.subVectors(or,ar),lr.subVectors(sr,or),ur.subVectors(ar,sr);let t=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-ur.z,ur.y,cr.z,0,-cr.x,lr.z,0,-lr.x,ur.z,0,-ur.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-ur.y,ur.x,0];return!hr(t,ar,or,sr,fr)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,ar,or,sr,fr))?!1:(pr.crossVectors(cr,lr),t=[pr.x,pr.y,pr.z],hr(t,ar,or,sr,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nr=[new V,new V,new V,new V,new V,new V,new V,new V],rr=new V,ir=new tr,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V,mr=new V;function hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mr.fromArray(e,a);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),s=t.dot(mr),c=n.dot(mr),l=r.dot(mr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gr=new V,_r=new B,vr=0,yr=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=_,this.version=0,this._normalizationScale=e===void 0?void 0:Ot(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.array):Math.round(e*t)}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Sr=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cr=new tr,wr=new V,Tr=new V,Er=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Cr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Tr)),this.expandByPoint(wr.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dr=0,Or=new nn,kr=new An,Ar=new V,jr=new tr,Mr=new tr,Nr=new V,Pr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Je(e)?xr:br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ft().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Or.makeRotationFromQuaternion(e),this.applyMatrix4(Or),this}rotateX(e){return Or.makeRotationX(e),this.applyMatrix4(Or),this}rotateY(e){return Or.makeRotationY(e),this.applyMatrix4(Or),this}rotateZ(e){return Or.makeRotationZ(e),this.applyMatrix4(Or),this}translate(e,t,n){return Or.makeTranslation(e,t,n),this.applyMatrix4(Or),this}scale(e,t,n){return Or.makeScale(e,t,n),this.applyMatrix4(Or),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Sr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(this.boundingBox.min,jr.min),this.boundingBox.expandByPoint(Nr),Nr.addVectors(this.boundingBox.max,jr.max),this.boundingBox.expandByPoint(Nr)):(this.boundingBox.expandByPoint(jr.min),this.boundingBox.expandByPoint(jr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(jr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Nr.addVectors(jr.min,Mr.min),jr.expandByPoint(Nr),Nr.addVectors(jr.max,Mr.max),jr.expandByPoint(Nr)):(jr.expandByPoint(Mr.min),jr.expandByPoint(Mr.max))}jr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Nr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Nr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Nr.fromBufferAttribute(a,t),o&&(Ar.fromBufferAttribute(e,t),Nr.add(Ar)),r=Math.max(r,n.distanceToSquared(Nr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nr.fromBufferAttribute(e,t),Nr.normalize(),e.setXYZ(t,Nr.x,Nr.y,Nr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=lt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ir(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ir(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ir(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=lt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Lr=new V,Rr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Ot(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix4(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyNormalMatrix(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.transformDirection(e),this.setXYZ(t,Lr.x,Lr.y,Lr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){$e(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new yr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$e(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?kt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?At(e,this.data.array):Math.round(e*t)}},zr=new V,Br=new V,Vr=new Ft,Hr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=class extends Wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kr,qr=new V,Jr=new V,Yr=new V,Xr=new B,Zr=new B,Qr=new nn,$r=new V,ei=new V,ti=new V,ni=new B,ri=new B,ii=new B,ai=class extends An{constructor(e=new Gr){if(super(),this.isSprite=!0,this.type=`Sprite`,Kr===void 0){Kr=new Pr;let e=new Fr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute(`position`,new Rr(e,3,0,!1)),Kr.setAttribute(`uv`,new Rr(e,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Jr.setFromMatrixScale(this.matrixWorld),Qr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Yr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;oi($r.set(-.5,-.5,0),Yr,a,Jr,r,i),oi(ei.set(.5,-.5,0),Yr,a,Jr,r,i),oi(ti.set(.5,.5,0),Yr,a,Jr,r,i),ni.set(0,0),ri.set(1,0),ii.set(1,1);let o=e.ray.intersectTriangle($r,ei,ti,!1,qr);if(o===null&&(oi(ei.set(-.5,.5,0),Yr,a,Jr,r,i),ri.set(0,1),o=e.ray.intersectTriangle($r,ti,ei,!1,qr),o===null))return;let s=e.ray.origin.distanceTo(qr);s<e.near||s>e.far||t.push({distance:s,point:qr.clone(),uv:er.getInterpolation(qr,$r,ei,ti,ni,ri,ii,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function oi(e,t,n,r,i,a){Xr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Zr.copy(Xr):(Zr.x=a*Xr.x-i*Xr.y,Zr.y=i*Xr.x+a*Xr.y),e.copy(t),e.x+=Zr.x,e.y+=Zr.y,e.applyMatrix4(Qr)}var si=new V,ci=new V,li=new V,ui=new V,di=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ci.copy(e).add(t).multiplyScalar(.5),li.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ci);let i=e.distanceTo(t)*.5,a=-this.direction.dot(li),o=ui.dot(this.direction),s=-ui.dot(li),c=ui.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ci).addScaledVector(li,d),f}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=O-j*A,se=k-re*A,ce=ee-j*ne,le=te-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*A+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pi=new nn,mi=new di,hi=new Er,gi=new V,_i=new V,vi=new V,yi=new V,bi=new V,xi=new V,Si=new V,Ci=new V,U=class extends An{constructor(e=new Pr,t=new fi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(bi.fromBufferAttribute(s,e),a?xi.addScaledVector(bi,r):xi.addScaledVector(bi.sub(t),r))}t.add(xi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hi.copy(n.boundingSphere),hi.applyMatrix4(i),mi.copy(e.ray).recast(e.near),hi.containsPoint(mi.origin)===!1&&(mi.intersectSphere(hi,gi)===null||mi.origin.distanceToSquared(gi)>(e.far-e.near)**2)||(pi.copy(i).invert(),mi.copy(e.ray).applyMatrix4(pi),(n.boundingBox===null||mi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function wi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ci.copy(s),Ci.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ci);return l<n.near||l>n.far?null:{distance:l,point:Ci.clone(),object:e}}function Ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_i),e.getVertexPosition(c,vi),e.getVertexPosition(l,yi);let u=wi(e,t,n,r,_i,vi,yi,Si);if(u){let e=new V;er.getBarycoord(Si,_i,vi,yi,e),i&&(u.uv=er.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=er.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=er.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};er.getNormal(_i,vi,yi,t.normal),u.face=t,u.barycoord=e}return u}var Ei=class extends Xt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=class extends yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Oi=new nn,ki=new nn,Ai=[],ji=new tr,Mi=new nn,Ni=new U,Pi=new Er,Fi=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Mi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),ji.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(ji)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),Pi.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(Pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),e.ray.intersectsSphere(Pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Oi),ki.multiplyMatrices(n,Oi),Ni.matrixWorld=ki,Ni.raycast(e,Ai);for(let e=0,n=Ai.length;e<n;e++){let n=Ai[e];n.instanceId=i,n.object=this,t.push(n)}Ai.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ii=new Er,Li=new B(.5,.5),Ri=new V,zi=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476+Li.distanceTo(e.center),Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ri.x=r.normal.x>0?e.max.x:e.min.x,Ri.y=r.normal.y>0?e.max.y:e.min.y,Ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bi=new nn,Vi=class e{constructor(){this.coordinateSystem=qe,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Bi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new zi),n[e].setFromProjectionMatrix(Bi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new zi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Hi=class extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ui=new V,Wi=new V,Gi=new nn,Ki=new di,qi=new Er,Ji=new V,Yi=new V,Xi=class extends An{constructor(e=new Pr,t=new Hi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ui.fromBufferAttribute(t,e-1),Wi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ui.distanceTo(Wi);e.setAttribute(`lineDistance`,new Sr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),qi.radius+=i,e.ray.intersectsSphere(qi)===!1)return;Gi.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Zi(this,e,Ki,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Zi(this,e,Ki,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Zi(this,e,Ki,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Zi(this,e,Ki,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Zi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ui.fromBufferAttribute(s,i),Wi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ui,Wi,Ji,Yi)>r)return;Ji.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ji);if(!(c<t.near||c>t.far))return{distance:c,point:Yi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Qi=new V,$i=new V,ea=class extends Xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Qi.fromBufferAttribute(t,e),$i.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Qi.distanceTo($i);e.setAttribute(`lineDistance`,new Sr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ta=class extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},na=new nn,ra=new di,ia=new Er,aa=new V,oa=class extends An{constructor(e=new Pr,t=new ta){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),ia.radius+=i,e.ray.intersectsSphere(ia)===!1)return;na.copy(r).invert(),ra.copy(e.ray).applyMatrix4(na);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);aa.fromBufferAttribute(l,n),sa(aa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)aa.fromBufferAttribute(l,a),sa(aa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function sa(e,t,n,r,i,a,o){let s=ra.distanceSqToPoint(e);if(s<n){let n=new V;ra.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ca=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},la=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ua=class extends Xt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},da=class extends ua{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pa=class e extends Pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ma=class e extends Pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Sr(u,3)),this.setAttribute(`normal`,new Sr(d,3)),this.setAttribute(`uv`,new Sr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class e extends ma{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new nn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_a=class extends ga{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},va=class extends _a{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ya(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ba=new V,xa=new V,Sa=new ya,Ca=new ya,wa=new ya,Ta=class extends ga{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(xa.subVectors(r[0],r[1]).add(r[0]),c=xa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ba.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ba),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Sa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ca.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),wa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Sa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ca.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),wa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Sa.calc(s),Ca.calc(s),wa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ea(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Da(e,t){let n=1-e;return n*n*t}function Oa(e,t){return 2*(1-e)*e*t}function ka(e,t){return e*e*t}function Aa(e,t,n,r){return Da(e,t)+Oa(e,n)+ka(e,r)}function ja(e,t){let n=1-e;return n*n*n*t}function Ma(e,t){let n=1-e;return 3*n*n*e*t}function Na(e,t){return 3*(1-e)*e*e*t}function Pa(e,t){return e*e*e*t}function Fa(e,t,n,r,i){return ja(e,t)+Ma(e,n)+Na(e,r)+Pa(e,i)}var Ia=class extends ga{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,r.x,i.x,a.x,o.x),Fa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},La=class extends ga{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Fa(e,r.x,i.x,a.x,o.x),Fa(e,r.y,i.y,a.y,o.y),Fa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends ga{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends ga{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends ga{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Aa(e,r.x,i.x,a.x),Aa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends ga{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Aa(e,r.x,i.x,a.x),Aa(e,r.y,i.y,a.y),Aa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends ga{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ea(o,s.x,c.x,l.x,u.x),Ea(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},Ua=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:Ta,CubicBezierCurve:Ia,CubicBezierCurve3:La,EllipseCurve:_a,LineCurve:Ra,LineCurve3:za,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:Va,SplineCurve:Ha}),Wa=class extends ga{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ua[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ua[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ga=class extends Wa{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ba(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ia(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ha([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new _a(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ka=class extends Ga{constructor(e){super(e),this.uuid=lt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ga().fromJSON(n))}return this}};function qa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ja(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=to(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Xa(a,o,n,s,c,l,0),o}function Ja(e,t,n,r,i){let a;if(i===Eo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Co(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Co(i/r|0,e[i],e[i+1],a);return a&&ho(a,a.next)&&(wo(a),a=a.next),a}function Ya(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ho(n,n.next)||mo(n.prev,n,n.next)===0)){if(wo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Xa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&oo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Qa(e,r,i,a):Za(e))t.push(c.i,e.i,l.i),wo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=$a(Ya(e),t),Xa(e,t,n,r,i,a,2)):o===2&&eo(e,t,n,r,i,a):Xa(Ya(e),t,n,r,i,a,1);break}}}function Za(e){let t=e.prev,n=e,r=e.next;if(mo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&fo(i,s,a,c,o,l,m.x,m.y)&&mo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(mo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=co(p,m,t,n,r),v=co(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&fo(s,u,c,d,l,f,y.x,y.y)&&mo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&fo(s,u,c,d,l,f,b.x,b.y)&&mo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&fo(s,u,c,d,l,f,y.x,y.y)&&mo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&fo(s,u,c,d,l,f,b.x,b.y)&&mo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $a(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ho(r,i)&&go(r,n,n.next,i)&&bo(r,i)&&bo(i,r)&&(t.push(r.i,n.i,i.i),wo(n),wo(n.next),n=e=i),n=n.next}while(n!==e);return Ya(n)}function eo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&po(o,e)){let s=So(o,e);o=Ya(o,o.next),s=Ya(s,s.next),Xa(o,t,n,r,i,a,0),Xa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function to(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ja(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(lo(o))}i.sort(no);for(let e=0;e<i.length;e++)n=ro(i[e],n);return n}function no(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ro(e,t){let n=io(e,t);if(!n)return t;let r=So(n,e);return Ya(r,r.next),Ya(n,n.next)}function io(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ho(e,n))return n;do{if(ho(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&uo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);bo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ao(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ao(e,t){return mo(e.prev,e,t.prev)<0&&mo(t.next,e,e.next)<0}function oo(e,t,n,r){let i=e;do i.z===0&&(i.z=co(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,so(i)}function so(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function co(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function lo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function uo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function fo(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&uo(e,t,n,r,i,a,o,s)}function po(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!yo(e,t)&&(bo(e,t)&&bo(t,e)&&xo(e,t)&&(mo(e.prev,e,t.prev)||mo(e,t.prev,t))||ho(e,t)&&mo(e.prev,e,e.next)>0&&mo(t.prev,t,t.next)>0)}function mo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ho(e,t){return e.x===t.x&&e.y===t.y}function go(e,t,n,r){let i=vo(mo(e,t,n)),a=vo(mo(e,t,r)),o=vo(mo(n,r,e)),s=vo(mo(n,r,t));return!!(i!==a&&o!==s||i===0&&_o(e,n,t)||a===0&&_o(e,r,t)||o===0&&_o(n,e,r)||s===0&&_o(n,t,r))}function _o(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function vo(e){return e>0?1:e<0?-1:0}function yo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&go(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function bo(e,t){return mo(e.prev,e,e.next)<0?mo(e,t,e.next)>=0&&mo(e,e.prev,t)>=0:mo(e,t,e.prev)<0||mo(e,e.next,t)<0}function xo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function So(e,t){let n=To(e.i,e.x,e.y),r=To(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Co(e,t,n,r){let i=To(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function wo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function To(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Do=class{static triangulate(e,t,n=2){return qa(e,t,n)}},Oo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ko(e),Ao(n,e);let a=e.length;t.forEach(ko);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ao(n,t[e]);let o=Do.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ko(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ao(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var jo=class e extends Pr{constructor(e=new Ka([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`uv`,new Sr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Mo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Oo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Oo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let te=[],ne,j=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=A(t[e],t[r],t[i]);te.push(ne),j=j.concat(ne)}let re;if(p===0)re=Oo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],ne[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=Oo.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],ne[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];le(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return No(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ua[i.type]().fromJSON(i)),new e(r,t.options)}},Mo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function No(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Po=class e extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Fo=class e extends Pr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Sr(s,3)),this.setAttribute(`normal`,new Sr(c,3)),this.setAttribute(`uv`,new Sr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Io=class e extends Pr{constructor(e=new Ka([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Sr(r,3)),this.setAttribute(`normal`,new Sr(i,3)),this.setAttribute(`uv`,new Sr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Oo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Oo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Oo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Lo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Lo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Ro=class e extends Pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Sr(p,3)),this.setAttribute(`normal`,new Sr(m,3)),this.setAttribute(`uv`,new Sr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},zo=class e extends Pr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Sr(c,3)),this.setAttribute(`normal`,new Sr(l,3)),this.setAttribute(`uv`,new Sr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Bo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ho(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ho(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Vo(e){let t={};for(let n=0;n<e.length;n++){let r=Bo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ho(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Uo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var Go={clone:Bo,merge:Vo},Ko=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jo=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ko,this.fragmentShader=qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=Uo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ft().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yo=class extends Jo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Xo=class extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zo=class extends Wr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qo=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ts(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ns=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},rs=class extends ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F,endingEnd:F}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},is=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},as=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},os=class extends ns{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ls(n,t,g,y,r);i[p]=ss(x,o,_,b,m)}return i}};function ss(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function cs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ls(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ss(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=cs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var us=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ts(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new as(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new os(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case P:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return P;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ts(this.settings)&&(ds(this.settings.inTangents,e),ds(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ts(this.settings)&&(fs(this.settings.inTangents,e),fs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ts(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ds(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function fs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}us.prototype.ValueTypeName=``,us.prototype.TimeBufferType=Float32Array,us.prototype.ValueBufferType=Float32Array,us.prototype.DefaultInterpolation=Ie;var ps=class extends us{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName=`bool`,ps.prototype.ValueBufferType=Array,ps.prototype.DefaultInterpolation=P,ps.prototype.InterpolantFactoryMethodLinear=void 0,ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends us{constructor(e,t,n,r){super(e,t,n,r)}};ms.prototype.ValueTypeName=`color`;var hs=class extends us{constructor(e,t,n,r){super(e,t,n,r)}};hs.prototype.ValueTypeName=`number`;var gs=class extends ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},_s=class extends us{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new gs(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName=`quaternion`,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends us{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName=`string`,vs.prototype.ValueBufferType=Array,vs.prototype.DefaultInterpolation=P,vs.prototype.InterpolantFactoryMethodLinear=void 0,vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends us{constructor(e,t,n,r){super(e,t,n,r)}};ys.prototype.ValueTypeName=`vector`;var bs=class extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xs=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ss=new nn,Cs=new V,ws=new V,Ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cs),ws.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ws),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ss.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ss,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Es=new V,Ds=new Mt,Os=new V,ks=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Es,Ds,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ds,Os.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Es,Ds,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,Ds,Os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},As=new V,js=new B,Ms=new B,Ns=class extends ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,js,Ms),t.subVectors(Ms,js)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=class extends ks{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fs=class extends Ts{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Fs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ls=-90,Rs=1,zs=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ns(Ls,Rs,e,t);r.layers=this.layers,this.add(r);let i=new Ns(Ls,Rs,e,t);i.layers=this.layers,this.add(i);let a=new Ns(Ls,Rs,e,t);a.layers=this.layers,this.add(a);let o=new Ns(Ls,Rs,e,t);o.layers=this.layers,this.add(o);let s=new Ns(Ls,Rs,e,t);s.layers=this.layers,this.add(s);let c=new Ns(Ls,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bs=class extends Ns{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Vs=`\\[\\]\\.:\\/`,Hs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Us=`[^\\[\\]\\.:\\/]`,Ws=`[^`+Vs.replace(`\\.`,``)+`]`,Gs=`((?:WC+[\\/:])*)`.replace(`WC`,Us),Ks=`(WCOD+)?`.replace(`WCOD`,Ws),qs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Us),Js=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Us),Ys=RegExp(`^`+Gs+Ks+qs+Js+`$`),Xs=[`material`,`materials`,`bones`,`map`],Zs=class{constructor(e,t,n){let r=n||Qs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Hs,``)}static parseTrackName(e){let t=Ys.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qs.Composite=Zs,Qs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qs.prototype.GetterByBindingType=[Qs.prototype._getValue_direct,Qs.prototype._getValue_array,Qs.prototype._getValue_arrayElement,Qs.prototype._getValue_toArray],Qs.prototype.SetterByBindingTypeAndVersioning=[[Qs.prototype._setValue_direct,Qs.prototype._setValue_direct_setNeedsUpdate,Qs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qs.prototype._setValue_array,Qs.prototype._setValue_array_setNeedsUpdate,Qs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qs.prototype._setValue_arrayElement,Qs.prototype._setValue_arrayElement_setNeedsUpdate,Qs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qs.prototype._setValue_fromArray,Qs.prototype._setValue_fromArray_setNeedsUpdate,Qs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $s=new nn,ec=class{constructor(e,t,n=0,r=1/0){this.ray=new di(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return $s.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($s),this}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(tc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)nc(e[r],this,n,t);return n.sort(tc),n}};function tc(e,t){return e.distance-t.distance}function nc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)nc(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function rc(e,t,n,r){let i=ic(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ic(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ac(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function oc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var sc={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
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
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},cc={basic:{uniforms:Vo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:sc.meshbasic_vert,fragmentShader:sc.meshbasic_frag},lambert:{uniforms:Vo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:sc.meshlambert_vert,fragmentShader:sc.meshlambert_frag},phong:{uniforms:Vo([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:sc.meshphong_vert,fragmentShader:sc.meshphong_frag},standard:{uniforms:Vo([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:sc.meshphysical_vert,fragmentShader:sc.meshphysical_frag},toon:{uniforms:Vo([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:sc.meshtoon_vert,fragmentShader:sc.meshtoon_frag},matcap:{uniforms:Vo([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:sc.meshmatcap_vert,fragmentShader:sc.meshmatcap_frag},points:{uniforms:Vo([W.points,W.fog]),vertexShader:sc.points_vert,fragmentShader:sc.points_frag},dashed:{uniforms:Vo([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:sc.linedashed_vert,fragmentShader:sc.linedashed_frag},depth:{uniforms:Vo([W.common,W.displacementmap]),vertexShader:sc.depth_vert,fragmentShader:sc.depth_frag},normal:{uniforms:Vo([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:sc.meshnormal_vert,fragmentShader:sc.meshnormal_frag},sprite:{uniforms:Vo([W.sprite,W.fog]),vertexShader:sc.sprite_vert,fragmentShader:sc.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:sc.background_vert,fragmentShader:sc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:sc.backgroundCube_vert,fragmentShader:sc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:sc.cube_vert,fragmentShader:sc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:sc.equirect_vert,fragmentShader:sc.equirect_frag},distance:{uniforms:Vo([W.common,W.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:sc.distance_vert,fragmentShader:sc.distance_frag},shadow:{uniforms:Vo([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:sc.shadow_vert,fragmentShader:sc.shadow_frag}};cc.physical={uniforms:Vo([cc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:sc.meshphysical_vert,fragmentShader:sc.meshphysical_frag};var lc={r:0,b:0,g:0},uc=new nn,dc=new Ft;dc.set(-1,0,0,0,1,0,0,0,1);function fc(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new U(new pa(1,1,1),new Jo({name:`BackgroundCubeMaterial`,uniforms:Bo(cc.backgroundCube.uniforms),vertexShader:cc.backgroundCube.vertexShader,fragmentShader:cc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dc),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new Po(2,2),new Jo({name:`BackgroundMaterial`,uniforms:Bo(cc.background.uniforms),vertexShader:cc.background.vertexShader,fragmentShader:cc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(lc,Wo(e)),n.buffers.color.setClear(lc.r,lc.g,lc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function pc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function mc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function hc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function gc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var _c=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pa(5,5,5),i=new Jo({name:`CubemapFromEquirect`,uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},vc=256,yc=3,bc=20,xc=256,Sc=16,Cc=3,wc=new V,Tc=new H,Ec=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new U(new pa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Tc));let h=new zs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vc,Et(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?vc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Dc(e,!1,!1),n=Math.log2(e)-yc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Dc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=kc(),this._integrationMaterial=Ac());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Sc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Cc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(xc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=jc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Dc(e,t,n){return new _c(e,{minFilter:u,generateMipmaps:t,type:v,colorSpace:He,depthBuffer:n})}function Oc(e,t,n){return new Jo({name:e,uniforms:t,vertexShader:sc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function kc(){return Oc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ac(){return Oc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jc(){return Oc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mc(){return Oc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nc(){return Oc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new _c(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ec(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ec(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Fc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ic(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?xr:br)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Lc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Rc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function zc(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Bc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Vc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Hc(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Pr;u.setAttribute(`position`,new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Sr([0,2,0,0,2,0],2));let d=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new U(u,d),p=new Ps(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,S=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ua(t,n),a===!0&&(l.format=O,l.type=x)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Bt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Vc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Uc=new Xt,Wc=new ua(1,1),Gc=new da(1),Kc=new en,qc=new tn,Jc=new ca,Yc=[],Xc=[],Zc=new Float32Array(16),Qc=new Float32Array(9),$c=new Float32Array(4);function el(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Yc[i];if(a===void 0&&(a=new Float32Array(i),Yc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function tl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function rl(e,t){let n=Xc[t];n===void 0&&(n=new Int32Array(t),Xc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2fv(this.addr,t),nl(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tl(n,t))return;e.uniform3fv(this.addr,t),nl(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4fv(this.addr,t),nl(n,t)}}function cl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;$c.set(r),e.uniformMatrix2fv(this.addr,!1,$c),nl(n,r)}}function ll(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;Qc.set(r),e.uniformMatrix3fv(this.addr,!1,Qc),nl(n,r)}}function ul(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;Zc.set(r),e.uniformMatrix4fv(this.addr,!1,Zc),nl(n,r)}}function dl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2iv(this.addr,t),nl(n,t)}}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tl(n,t))return;e.uniform3iv(this.addr,t),nl(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4iv(this.addr,t),nl(n,t)}}function hl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2uiv(this.addr,t),nl(n,t)}}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tl(n,t))return;e.uniform3uiv(this.addr,t),nl(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4uiv(this.addr,t),nl(n,t)}}function yl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?yl(Wc):Uc,n.setTexture2D(t||a,i)}function xl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||qc,i)}function Sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?yl(Gc):Jc,n.setTextureCube(t||a,i)}function Cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Kc,i)}function wl(e){switch(e){case 5126:return il;case 35664:return al;case 35665:return ol;case 35666:return sl;case 35674:return cl;case 35675:return ll;case 35676:return ul;case 5124:case 35670:return dl;case 35667:case 35671:return fl;case 35668:case 35672:return pl;case 35669:case 35673:return ml;case 5125:return hl;case 36294:return gl;case 36295:return _l;case 36296:return vl;case 35678:case 36198:case 36298:case 36306:case 35682:return bl;case 35679:case 36299:case 36307:return xl;case 35680:case 36300:case 36308:case 36293:return Sl;case 36289:case 36303:case 36311:case 36292:return Cl}}function Tl(e,t){e.uniform1fv(this.addr,t)}function El(e,t){let n=el(t,this.size,2);e.uniform2fv(this.addr,n)}function Dl(e,t){let n=el(t,this.size,3);e.uniform3fv(this.addr,n)}function Ol(e,t){let n=el(t,this.size,4);e.uniform4fv(this.addr,n)}function kl(e,t){let n=el(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Al(e,t){let n=el(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jl(e,t){let n=el(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ml(e,t){e.uniform1iv(this.addr,t)}function Nl(e,t){e.uniform2iv(this.addr,t)}function Pl(e,t){e.uniform3iv(this.addr,t)}function Fl(e,t){e.uniform4iv(this.addr,t)}function Il(e,t){e.uniform1uiv(this.addr,t)}function Ll(e,t){e.uniform2uiv(this.addr,t)}function Rl(e,t){e.uniform3uiv(this.addr,t)}function zl(e,t){e.uniform4uiv(this.addr,t)}function Bl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?yl(Wc):Uc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||qc,a[e])}function Hl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?yl(Gc):Jc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ul(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Kc,a[e])}function Wl(e){switch(e){case 5126:return Tl;case 35664:return El;case 35665:return Dl;case 35666:return Ol;case 35674:return kl;case 35675:return Al;case 35676:return jl;case 5124:case 35670:return Ml;case 35667:case 35671:return Nl;case 35668:case 35672:return Pl;case 35669:case 35673:return Fl;case 5125:return Il;case 36294:return Ll;case 36295:return Rl;case 36296:return zl;case 35678:case 36198:case 36298:case 36306:case 35682:return Bl;case 35679:case 36299:case 36307:return Vl;case 35680:case 36300:case 36308:case 36293:return Hl;case 36289:case 36303:case 36311:case 36292:return Ul}}var Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wl(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wl(t.type)}},ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Yl(e,t){e.seq.push(t),e.map[t.id]=t}function Xl(e,t,n){let r=e.name,i=r.length;for(Jl.lastIndex=0;;){let a=Jl.exec(r),o=Jl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Yl(n,l===void 0?new Gl(s,e,t):new Kl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ql(s),Yl(n,e)),n=e}}}var Zl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ql(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $l=37297,eu=0;function tu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nu=new Ft;function ru(e){Bt._getMatrix(nu,Bt.workingColorSpace,e);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function iu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tu(e.getShaderSource(t),r)}return i}function au(e,t){let n=ru(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ou={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function su(e,t){let n=ou[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cu=new V;function lu(){return Bt.getLuminanceCoefficients(cu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cu.x.toFixed(4)}, ${cu.y.toFixed(4)}, ${cu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function uu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pu).join(`
`)}function du(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pu(e){return e!==``}function mu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gu=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(e){return e.replace(gu,vu)}function vu(e,t){let n=sc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return _u(n)}var yu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(e){return e.replace(yu,xu)}function xu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Su(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Cu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function wu(e){return Cu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Tu={302:`ENVMAP_MODE_REFRACTION`};function Eu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Tu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Du={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ou(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Du[e.combine]||`ENVMAP_BLENDING_NONE`}function ku(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=wu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Eu(n),d=Ou(n),f=uu(n),p=du(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(pu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(pu).join(`
`),g.length>0&&(g+=`
`)):(h=[Su(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pu).join(`
`),g=[Su(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:sc.tonemapping_pars_fragment,n.toneMapping===0?``:su(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,sc.colorspace_pars_fragment,au(`linearToOutputTexel`,n.outputColorSpace),lu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pu).join(`
`)),o=_u(o),o=mu(o,n),o=hu(o,n),s=_u(s),s=mu(s,n),s=hu(s,n),o=bu(o),s=bu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ql(i,i.VERTEX_SHADER,v),x=Ql(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=iu(i,b,`vertex`),n=iu(i,x,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Zl(i,m),w=fu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,$l)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Au=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mu(e),t.set(e,n)),n}},Mu=class{constructor(e){this.id=Au++,this.code=e,this.usedTimes=0}};function Nu(e){return e===1030||e===37490||e===36285}function Pu(e,t,n,r,i,a){let o=new mn,s=new ju,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=cc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,j=!!i.map,re=!!i.matcap,M=!!b,ie=M&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?F.length-1:null,envMapSize:ie?F[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Nu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:j&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(j||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=cc[t];n=Go.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new ku(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Fu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Iu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ru(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Iu),r.length>1&&r.sort(t||Lu),i.length>1&&i.sort(t||Lu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function zu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ru,e.set(t,[i])):n>=r.length?(i=new Ru,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Bu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new H};break;case`SpotLight`:n={position:new V,direction:new V,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Vu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Hu=0;function Uu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Wu(e){let t=new Bu,n=Vu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Uu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Hu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Gu(e){let t=new Wu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ku(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Gu(e),t.set(n,[a])):r>=i.length?(a=new Gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var qu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ju=`uniform sampler2D shadow_pass;
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
}`,Yu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Xu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Zu=new nn,Qu=new V,$u=new V;function ed(e,t,n){let r=new zi,i=new B,o=new B,s=new Zt,l=new Qo,u=new $o,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Jo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:qu,fragmentShader:Ju}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Pr;y.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new U(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:ee,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ua(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new _c(i.x),p.map.depthTexture=new da(i.x,g)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new ua(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Qu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Qu),$u.copy(e.position),$u.add(Yu[t]),e.up.copy(Xu[t]),e.lookAt($u),e.updateMatrixWorld(),n.makeTranslation(-Qu.x,-Qu.y,-Qu.z),Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Zu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:ee,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function td(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Zt().fromArray(ae),ce=new Zt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+te-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:Be}}function nd(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Xe(`canvas`)}function D(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ue:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ne(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),M(e),le(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),N(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ue(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ue(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function N(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&oe(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let de=0;function fe(){de=0}function pe(){return de}function me(e){de=e}function he(){let e=de;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),de+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(t,n){let r=f.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Oe(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function ye(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Oe(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function be(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ke(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let xe={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},Se={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ie),re(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ge(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ue(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=Ee(r.start,n.width,4),c=Ee(t.start,n.width,4);r.start<=i+1&&s===c&&Ee(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Oe(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=Te(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=D(n.image,!1,p.maxTextureSize);t=I(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=te(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);we(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=j(n,t);if(n.isDepthTexture)u=ne(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&De(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=rc(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=rc(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Be(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Be(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);k(n)&&n.mipmapsAutoUpdate===!0&&A(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ke(t,n,r){if(n.image.length!==6)return;let i=Te(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Bt.getPrimaries(Bt.workingColorSpace),s=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=D(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=I(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=te(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(n,h);we(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=ne(n.format===O,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Be(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}k(n)&&n.mipmapsAutoUpdate===!0&&A(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ae(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=te(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),F(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Re(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ne(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=te(a.internalFormat,o,s,a.normalized,a.colorSpace);F(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?be(n.depthTexture,0):_e(n.depthTexture,0);let s=a.__webglTexture,c=Re(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)F(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)F(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Me(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(n.__webglFramebuffer[0],t,0):Me(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),je(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),je(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,r){let i=f.get(t);n!==void 0&&Ae(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Ne(t)}function Fe(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,ae),re(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&F(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=te(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),je(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),we(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Ae(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Ae(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);k(n)?A(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),we(s,i),Ae(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),k(i)&&A(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),we(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Ae(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Ae(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);k(n)?A(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(p.maxSamples,e.samples)}function F(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=he,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=ce}function rd(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var id=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ad=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jo({vertexShader:id,fragmentShader:ad,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new od,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new B,k=null,A=null,ee=new Ns;ee.viewport=new Zt;let te=new Ns;te.viewport=new Zt;let ne=[ee,te],j=new Bs,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new ua(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=te.near=ee.near=t,j.far=te.far=ee.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,ee.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new Ns,o.layers.enable(n),o.viewport=new Zt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new fa,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let N=new ac;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},cd=new nn,ld=new Ft;ld.set(-1,0,0,0,1,0,0,0,1);function ud(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Wo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(cd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ld),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function dd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var fd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pd=null;function md(){return pd===null&&(pd=new Ei(fd,16,16,ee,v),pd.name=`DFG_LUT`,pd.minFilter=c,pd.magFilter=c,pd.wrapS=r,pd.wrapT=r,pd.generateMipmaps=!1,pd.needsUpdate=!0),pd}var hd=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([ne,te,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,ee=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=Ve;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Zt,me=new Zt,he=null,ge=new H(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Zt(0,0,ve,ye),we=new Zt(0,0,ve,ye),Te=!1,Ee=new zi,De=new Vi,Oe=!1,ke=!1,Ae=new nn,je=new V,Me=new Zt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return N===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,Be,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function lt(){Le=new Fc(P),Le.init(),ot=new rd(P,Le),Re=new hc(P,Le,e,ot),F=new td(P,Le),Re.reversedDepthBuffer&&p&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),ze=new Rc(P),I=new Fu,Be=new nd(P,Le,F,I,Re,ot,ze),He=new Pc(M),Ue=new oc(P),st=new pc(P,Ue),We=new Ic(P,Ue,ze,st),Ge=new Bc(P,We,Ue,st,ze),rt=new zc(P,Re,Be),Qe=new gc(I),Ke=new Pu(M,He,Le,Re,st,Qe),Je=new ud(M,I),Ye=new zu,Xe=new Ku(Le),tt=new fc(M,He,F,Ge,_,s),et=new ed(M,Ge,Re),ct=new dd(P,ze,Re,F),it=new mc(P,Le,ze),at=new Lc(P,Le,ze),ze.programs=Ke.programs,M.capabilities=Re,M.extensions=Le,M.properties=I,M.renderLists=Ye,M.shadowMap=et,M.state=F,M.info=ze}S!==1009&&(re=new Hc(S,t.width,t.height,o,r,i));let z=new sd(M,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){z.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Ye.dispose(),Xe.dispose(),Be.dispose(),I.dispose(),He.dispose(),Ge.dispose(),We.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),z.dispose(),z.removeEventListener(`sessionstart`,yt),z.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),ie=!0}function dt(){$e(`WebGLRenderer: Context Restored.`),ie=!1;let e=ze.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;lt(),ze.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=B(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),Oe===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),k=Xe.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),ae!==null&&ae.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=Qe.init(this.clippingPlanes,ke),Oe===!0&&Qe.setGlobalState(this.clippingPlanes,t),ae!==null&&et.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new ac;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,z.setAnimationLoop(e),e===null?xt.stop():xt.start()},z.addEventListener(`sessionstart`,yt),z.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=z.enabled===!0&&z.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(t),t=z.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),k=Xe.get(e,j.length),k.init(t),k.state.textureUnits=Be.getTextureUnits(),j.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,qe,t.reversedDepth),ke=this.localClippingEnabled,Oe=Qe.init(this.clippingPlanes,ke),O=Ye.get(e,ee.length),O.init(),ee.push(O),this.info.render.frame++,z.enabled===!0&&z.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(k.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Pe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Pe&&tt.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Qe.beginShadows();let i=k.state.shadowsArray;if(et.render(i,e,t),Oe===!0&&Qe.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&tt.render(e),Ct(O,e,t)}N!==null&&ue===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),st.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(k=j[j.length-1],Be.setTextureUnits(k.state.textureUnits),Oe===!0&&Qe.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,ee.pop(),O=ee.length>0?ee[ee.length-1]:null,ae!==null&&ae.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Qe.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Pe&&tt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Qe.setGlobalState(M.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Ke.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),jt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Dt(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function kt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ot(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function B(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==fe)){let t=e===fe&&r.id===de;Qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Dt(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?kt(r,t,i,s,h):Ot(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==de&&(de=r.id,w=!0),C||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,Be),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&rt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=md()),w){if(E.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Mt(O,T),a&&r.fog===!0&&Je.refreshFogUniforms(O,a),Je.refreshMaterialUniforms(O,r,be,ye,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Zl.upload(P,At(v),O,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zl.upload(P,At(v),O,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,S),ct.bind(n,S)}}return S}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}};function gd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Pr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=_d(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=_d(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function _d(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var vd=[`http://localhost:4590`,`http://localhost:4591`,`http://127.0.0.1:4590`,`http://127.0.0.1:4591`],yd={numericBounds:{fps:[0,1e3],heap_mb:[0,65536],sample_rate:[1e-6,1]},keys:[`level`,`mode`,`difficulty`,`score`,`duration_ms`,`result`,`step`,`board`,`fps`,`heap_mb`,`sample_rate`],bytesMax:1024,stringCharsMax:120,digitRunMin:9},bd={boardKeyCharsMax:48,boardLabelCharsMax:60,boardColumnsMax:8,boardColumnKeyCharsMax:32,boardColumnLabelCharsMax:24,boardVariantsMax:3,boardVariantValuesMax:12,boardVariantCombosMax:48,boardRunsPerPlayerMax:100},xd={keys:{label:`string`,mode:`string`,level:`string`,character:`string`,duration_ms:`number`,accuracy:`number`,combo:`number`},maxStringLength:24,maxBytes:384,digitRunMin:9,reservedLabels:[`Before OpenGame`]},Sd=[`Before OpenGame`],Cd=[`https://opengame.io`,`https://admin.opengame.io`],wd={sampleRate:.1,sampleWindowMs:5e3,sampleIntervalMs:6e4,samplesPerSessionMax:20,errorsPerSessionMax:20,errorIntervalMs:1e3};async function Td(e,t,n){let r=e.body?.getReader();if(!r)throw Error(`invalid_response`);let i=()=>{r.cancel().catch(()=>{})};n.addEventListener(`abort`,i,{once:!0});let a=new TextDecoder,o=0,s=``;try{if(n.aborted)throw Error(`timeout`);for(;;){let{value:e,done:i}=await r.read();if(n.aborted)throw Error(`timeout`);if(i)break;if(o+=e.byteLength,o>t)throw Error(`response_too_large`);s+=a.decode(e,{stream:!0})}return JSON.parse(s+a.decode())}finally{n.removeEventListener(`abort`,i),i(),r.releaseLock()}}function Ed(e){e.body?.cancel().catch(()=>{})}var Dd=class{constructor(e,t=()=>{}){this.session=e,this.note=t}session;note;validId(e){return typeof e==`string`&&e.length<=48&&/^[a-z0-9][a-z0-9_-]*$/.test(e)}async request(e){let t=this.session();if(t.disposed)return{ok:!1,error:`disposed`};if(t.preview)return{ok:!1,error:`unavailable_in_preview`};if(!t.token)return{ok:!1,error:`unavailable`};let n=()=>{let e=this.session();return e.disposed?{ok:!1,error:`disposed`}:e.generation!==t.generation||e.token!==t.token?{ok:!1,error:`session_changed`}:null};try{let r=AbortSignal.timeout(1e4),i=await fetch(new URL(`/v1/achievements`,`https://api.opengame.gg`),{method:e===void 0?`GET`:`POST`,credentials:`omit`,cache:`no-store`,redirect:`error`,referrerPolicy:`no-referrer`,signal:r,headers:{Authorization:`Bearer ${t.token}`,...e?{"Content-Type":`application/json`}:{}},...e?{body:JSON.stringify({achievement:e})}:{}}),a=n();if(a||!i.ok||i.status===202)return Ed(i),a??{ok:!1,error:i.status===400?`invalid_achievement`:`achievement_unavailable`};let o;try{o=await Td(i,131072,r)}catch{return n()??{ok:!1,error:r.aborted?`network`:`invalid_response`}}let s=o,c=e===void 0?Array.isArray(o)&&o.every(e=>e&&typeof e==`object`&&this.validId(e.achievementId)&&typeof e.title==`string`&&typeof e.description==`string`&&typeof e.unlocked==`boolean`&&(e.unlocked?typeof e.unlockedAt==`string`:e.unlockedAt===null)&&e.source===`game_reported`):s&&typeof s==`object`&&s.achievementId===e&&s.unlocked===!0&&typeof s.firstUnlock==`boolean`&&typeof s.unlockedAt==`string`&&s.source===`game_reported`;return n()??(c?{ok:!0,value:o}:{ok:!1,error:`invalid_response`})}catch{return n()??{ok:!1,error:`network`}}}unlock(e){return this.note(`achievement_unlock`),this.validId(e)?this.request(e):Promise.resolve({ok:!1,error:`invalid_achievement`})}list(){return this.note(`achievement_list`),this.request()}};function Od(e,t,n,r){let i=!1,a=0,o,s=0,c=0,l=-1/0,u=[],d=Math.random()<t.sampleRate,f=()=>{for(;u.length&&r(`runtime_error`,u[0]);)u.shift()},p=n=>{let r=Date.now();if(i||c>=t.errorsPerSessionMax||r-l<t.errorIntervalMs)return;c++,l=r;let a=n.type===`unhandledrejection`,o;try{o=(a?n.reason:n.error)?.name}catch{}let s={TypeError:`type_error`,RangeError:`range_error`,ReferenceError:`reference_error`,SyntaxError:`syntax_error`,SecurityError:`security_error`,NetworkError:`network_error`,Error:`error`};u.push({result:typeof o==`string`&&Object.hasOwn(s,o)?s[o]:`unknown`,step:a?`rejection`:n.target&&n.target!==e?`resource`:`exception`}),f()},m=()=>{if(f(),!d||i||a||s>=t.samplesPerSessionMax||!n()||!e.requestAnimationFrame)return;let o,c=0,l=u=>{if(a=0,i||!n())return;o===void 0?o=u:c++;let d=u-o;if(d<t.sampleWindowMs){a=e.requestAnimationFrame(l);return}let f={fps:c*1e3/d,sample_rate:t.sampleRate},p=e.performance.memory?.usedJSHeapSize;typeof p==`number`&&Number.isFinite(p)&&p>=0&&(f.heap_mb=p/1048576),r(`runtime_performance`,f)&&s++};a=e.requestAnimationFrame(l)};return e.addEventListener(`error`,p,!0),e.addEventListener(`unhandledrejection`,p),{reset(){a&&e.cancelAnimationFrame(a),a=0,u.length=0},resume(){f(),n()?d&&!i&&(m(),o||=setInterval(m,t.sampleIntervalMs)):(a&&e.cancelAnimationFrame(a),a=0,clearInterval(o),o=void 0)},stop(){i=!0,clearInterval(o),a&&e.cancelAnimationFrame(a),u.length=0,e.removeEventListener(`error`,p,!0),e.removeEventListener(`unhandledrejection`,p)}}}var kd=Symbol.for(`opengame.sdk`),Ad=globalThis;function jd(){if(!Object.hasOwn(Ad,kd))return;let e=Ad[kd];if(e&&Object.hasOwn(e,`major`)&&e.major===0&&Object.hasOwn(e,`capabilities`))return e.capabilities}function Md(e){let t=jd();return t&&Object.hasOwn(t,e)?t[e]:void 0}function Nd(e,t,n=!1){return Ad[kd]=Object.freeze({major:0,capabilities:Object.freeze({...n?{}:jd(),[e]:t})}),t}function Pd(e,t,n=[]){if(typeof e!=`string`||!e||e.length>t||/[\s\\\u0000-\u001f\u007f]/u.test(e)||!/^https:\/\//i.test(e))return null;let r=e.slice(8).split(/[/?#]/u)[0];if(!r||/[%@]/u.test(r)||!/^[\x21-\x7e]+$/u.test(r))return null;try{let i=new URL(e);return r.toLowerCase()!==i.host.toLowerCase()||i.protocol!==`https:`||i.username||i.password||!i.hostname||n.includes(i.origin)?null:i.href.length<=t?i.href:null}catch{return null}}function Fd(e){let t=Array.isArray(e)?e[0]:e;if(typeof t!=`string`)return null;if(/^[\w-]{22}$/.test(t))return t;let n=t.toUpperCase().replace(/[^A-Z0-9]/g,``);return/^[A-Z0-9]{4,12}$/.test(n)?n:null}function Id(e,t){if(typeof e!=`string`||Fd(t)!==t)return null;try{let n=new URL(e);return n.searchParams.set(`join`,t),n.hash=``,n.href}catch{return null}}var Ld=/^[a-z]{1,16}(\.[a-z]{1,16}){2}(\.[a-z]{1,16}(\.(male|female)(\.[a-z]{1,16}){0,4})?)?$/;function Rd(e){return typeof e==`string`&&Ld.exec(e)?.[0]===e?e:null}var zd=/^c[1-9]\d*(?:\.[a-z]{1,16}(?:-[a-z]{1,16})*){5,}$/;function Bd(e){return typeof e==`string`&&e.length<=256&&zd.test(e)?e:null}function Vd(e,t){let n={};if(!e||typeof e!=`object`)return n;let r=RegExp(`\\p{Nd}{${t.digitRunMin},}`,`u`),i=e=>e.split(/\s+/u).some(e=>e.split(`@`).some((e,t,n)=>{let r=e.indexOf(`.`,1);return t>0&&n[t-1].length>0&&r>0&&r<e.length-1}));for(let a of t.keys){if(!Object.hasOwn(e,a))continue;let o=e[a],s=t.numericBounds?.[a];if(s&&(typeof o!=`number`||!Number.isFinite(o)||o<s[0]||o>s[1]))continue;if(typeof o==`number`){if(!Number.isFinite(o)||Math.abs(o)>=10**(t.digitRunMin-1))continue}else if(typeof o==`string`){if(o.length>t.bytesMax)continue;let e=o.normalize(`NFKC`);if(e.length>t.bytesMax||i(e)||r.test(e))continue;o=o.slice(0,t.stringCharsMax)}else if(typeof o!=`boolean`)continue;let c={...n,[a]:o};new TextEncoder().encode(JSON.stringify(c)).byteLength>t.bytesMax||(n[a]=o)}return n}var Hd={а:`a`,ɑ:`a`,е:`e`,ε:`e`,і:`i`,ι:`i`,ı:`i`,ӏ:`l`,ɡ:`g`,о:`o`,ο:`o`,р:`p`,ρ:`p`,с:`c`,ϲ:`c`,ѕ:`s`,т:`t`,τ:`t`,у:`y`,х:`x`,χ:`x`,κ:`k`,п:`n`},Ud={0:`o`,1:`i`,3:`e`,4:`a`,5:`s`,7:`t`,"@":`a`,$:`s`};function Wd(e){let t=e.normalize(`NFKC`).toLowerCase().normalize(`NFD`).replace(/[\p{M}\p{Cf}]/gu,``).replace(/./gu,e=>Hd[e]??e),n=t.replace(/[013457@$]/g,e=>Ud[e]);return t.includes(`1`)?[n,t.replace(/[013457@$]/g,e=>e===`1`?`l`:Ud[e])]:[n]}function Gd(e,t){if(e==null)return{ok:!0,meta:{}};if(typeof e!=`object`||Array.isArray(e))return{ok:!1,reason:`meta must be an object`};let n={};for(let[r,i]of Object.entries(e)){let e=Object.hasOwn(t.keys,r)?t.keys[r]:void 0;if(e===void 0)return{ok:!1,reason:`meta key not allowed: ${r}`};if(typeof i!==e)return{ok:!1,reason:`meta.${r} must be a ${e}`};if(e===`string`){if(i.length>t.maxStringLength)return{ok:!1,reason:`meta.${r} is longer than ${t.maxStringLength}`};let e=Vd({[r]:i},{keys:[r],bytesMax:t.maxBytes,stringCharsMax:t.maxStringLength,digitRunMin:t.digitRunMin});if(!Object.hasOwn(e,r))return{ok:!1,reason:`meta.${r} contains a private contact value`}}else if(e===`number`&&!Number.isFinite(i))return{ok:!1,reason:`meta.${r} must be finite`};n[r]=i}return new TextEncoder().encode(JSON.stringify(n)).byteLength>t.maxBytes?{ok:!1,reason:`meta is larger than ${t.maxBytes} bytes`}:{ok:!0,meta:n}}function Kd(e,t,n){if(!Number.isFinite(e))return{state:`rejected`,stored:0};let r=t.plausible_max,i=t.plausible_min;return r!==null&&e>r?{state:e>r*n?`rejected`:`clamped`,stored:r}:i!==null&&e<i?{state:e*n<i?`rejected`:`clamped`,stored:i}:{state:`ok`,stored:e}}function qd(e,t){if(typeof e!=`string`||!Array.isArray(t)||t.length===0)return!1;let n=e=>Wd(e).map(e=>e.replace(/[^\p{L}\p{N}]/gu,``)),r=new Set(n(e));return t.some(e=>typeof e==`string`&&n(e).some(e=>r.has(e)))}var Jd=Object.freeze([`number`,`integer`,`duration_ms`,`duration_s`,`percent`,`distance_m`]),Yd=Object.freeze([`best`,`runs`,`career`]),Xd=Object.freeze([`sum`,`count`,`max`,`min`]),Zd=Object.freeze([`count`,`sum`,`max`,`min`,`avg`,`ratio`]),Qd=Object.freeze([`eq`,`lt`,`lte`,`gt`,`gte`]),$d=`score`,ef=new Set([$d,`rank`,`player`,`name`,`all`]),tf=/^[a-z][a-z0-9_]*$/,nf=/^[a-z0-9][a-z0-9_-]*$/,rf=e=>!(!e||typeof e!=`object`||Array.isArray(e)),af=e=>typeof e==`number`&&Number.isFinite(e),of=(e,t)=>typeof e==`string`&&e.trim().length>0&&[...e.trim()].length<=t,G=e=>({ok:!1,reason:e});function sf(e,t){if(!rf(e))return G(`A leaderboard must be an object.`);let n=new Set([`key`,`label`,`order`,`min`,`max`,`scoreLabel`,`format`,`keep`,`runsPerPlayer`,`columns`,`variants`,`from`,`scoreAgg`]);for(let t of Object.keys(e))if(!n.has(t))return G(`Unknown leaderboard field: ${t.slice(0,32)}.`);if(typeof e.key!=`string`||!tf.test(e.key)||e.key.length>t.boardKeyCharsMax)return G(`Use a lowercase board key.`);if(e.order!==`asc`&&e.order!==`desc`)return G(`${e.key}: order must be asc or desc.`);if(e.label!==void 0&&!of(e.label,t.boardLabelCharsMax))return G(`${e.key}: label is empty or too long.`);let r=lf(e,e.key);if(r)return G(r);if(e.scoreLabel!==void 0&&!of(e.scoreLabel,t.boardColumnLabelCharsMax))return G(`${e.key}: scoreLabel is empty or too long.`);if(e.format!==void 0&&!Jd.includes(e.format))return G(`${e.key}: format must be one of ${Jd.join(`, `)}.`);if(e.keep!==void 0&&!Yd.includes(e.keep))return G(`${e.key}: keep must be best, runs or career.`);let i=e.keep??`best`,a=i===`career`;if(a!==(e.from!==void 0)||a!==(e.scoreAgg!==void 0))return G(`${e.key}: a career board names the board it is fed from and its scoreAgg, and only a career board does.`);if(a){if(typeof e.from!=`string`||!tf.test(e.from)||e.from.length>t.boardKeyCharsMax||e.from===e.key)return G(`${e.key}: from names another board of this game by its key.`);if(!Xd.includes(e.scoreAgg))return G(`${e.key}: scoreAgg must be one of ${Xd.join(`, `)}.`);if(e.min!==void 0||e.max!==void 0)return G(`${e.key}: a career board has no bounds of its own; its source board's bounds hold every run it counts.`)}if(i===`runs`!=(e.runsPerPlayer!==void 0)||e.runsPerPlayer!==void 0&&(!Number.isSafeInteger(e.runsPerPlayer)||e.runsPerPlayer<1||e.runsPerPlayer>t.boardRunsPerPlayerMax))return G(`${e.key}: a board that keeps runs sets runsPerPlayer, a whole number from 1 to ${t.boardRunsPerPlayerMax}, and only such a board sets it.`);let o=[];if(e.columns!==void 0){if(!Array.isArray(e.columns)||e.columns.length>t.boardColumnsMax)return G(`${e.key}: at most ${t.boardColumnsMax} columns.`);for(let n of e.columns){let r=uf(n,t,e.key,a);if(!r.ok)return r;if(o.some(e=>e.key===r.column.key))return G(`${e.key}: column ${r.column.key} is declared twice.`);let i=r.column.agg===`ratio`?r.column:null;if(i&&i.of.some(e=>!o.some(t=>t.key===e&&t.agg!==`ratio`)))return G(`${e.key}.${i.key}: a ratio divides two columns declared before it.`);if(i?.requires&&!o.some(e=>e.key===i.requires.column&&e.agg!==`ratio`))return G(`${e.key}.${i.key}: requires names a column declared before it.`);o.push(r.column)}}if(a){let t=2;for(let e of o)t+=e.agg===`avg`?3*e.key.length+8+90:e.key.length+30;if(t>1024)return G(`${e.key}: its columns could outgrow a row's 1024 bytes of stats; use fewer columns, shorter keys or fewer averages.`)}let s=[];if(e.variants!==void 0){if(!Array.isArray(e.variants)||e.variants.length>t.boardVariantsMax)return G(`${e.key}: at most ${t.boardVariantsMax} variants.`);let n=1;for(let r of e.variants){let i=pf(r,t,e.key);if(!i.ok)return i;if(s.some(e=>e.key===i.variant.key))return G(`${e.key}: variant ${i.variant.key} is declared twice.`);s.push(i.variant),n*=i.variant.values.length+1}if(n>t.boardVariantCombosMax)return G(`${e.key}: its variants make ${n} combinations, more than ${t.boardVariantCombosMax}.`)}return{ok:!0,shape:Object.freeze({key:e.key,label:e.label?.trim()??null,order:e.order,min:af(e.min)?e.min:null,max:af(e.max)?e.max:null,scoreLabel:e.scoreLabel?.trim()??null,format:e.format??`number`,keep:i,runsPerPlayer:i===`runs`?e.runsPerPlayer:1,columns:Object.freeze(o),variants:Object.freeze(s),...a?{from:e.from,scoreAgg:e.scoreAgg}:{}})}}var cf=e=>e==null||af(e)&&(e===0||Math.abs(e)>=1e-300&&Math.abs(e)<=1e300);function lf(e,t){return cf(e.min)?cf(e.max)?af(e.min)&&af(e.max)&&e.min>e.max?`${t}: min is greater than max.`:null:`${t}: max must be a number between -1e300 and 1e300.`:`${t}: min must be a number between -1e300 and 1e300.`}function uf(e,t,n,r=!1){if(!rf(e))return G(`${n}: a column must be an object.`);let i=[`key`,`label`,`format`,`order`,`sortable`,`min`,`max`,`decimals`,...r?[`agg`,`of`,`where`,`scale`,`requires`]:[]];for(let t of Object.keys(e))if(!i.includes(t))return G(`${n}: unknown column field ${t.slice(0,32)}${r?``:` (agg, of and where belong to career boards)`}.`);if(typeof e.key!=`string`||!tf.test(e.key)||e.key.length>t.boardColumnKeyCharsMax)return G(`${n}: use a lowercase column key.`);if(ef.has(e.key))return G(`${n}: ${e.key} is reserved; pick another column key.`);if(!of(e.label,t.boardColumnLabelCharsMax))return G(`${n}.${e.key}: label is empty or too long.`);if(e.format!==void 0&&!Jd.includes(e.format))return G(`${n}.${e.key}: format must be one of ${Jd.join(`, `)}.`);if(e.order!==void 0&&e.order!==`asc`&&e.order!==`desc`)return G(`${n}.${e.key}: order must be asc or desc.`);if(e.sortable!==void 0&&typeof e.sortable!=`boolean`)return G(`${n}.${e.key}: sortable must be true or false.`);let a=lf(e,`${n}.${e.key}`);if(a)return G(a);let o={key:e.key,label:e.label.trim(),format:e.format??`number`,order:e.order??`desc`,sortable:e.sortable??!0,min:af(e.min)?e.min:null,max:af(e.max)?e.max:null};if(e.decimals!==void 0&&(!Number.isSafeInteger(e.decimals)||e.decimals<0||e.decimals>4))return G(`${n}.${e.key}: decimals is a whole number from 0 to 4.`);if(e.decimals!==void 0&&(o.decimals=e.decimals),!r)return{ok:!0,column:Object.freeze(o)};o.decimals===void 0&&(e.agg===`avg`||e.agg===`ratio`)&&(o.decimals=1);let s=df(e,`${n}.${e.key}`);return s.ok?e.min!==void 0||e.max!==void 0?G(`${n}.${e.key}: a career column has no bounds; the runs it counts were held to the source board's.`):{ok:!0,column:Object.freeze({...o,...s.agg})}:s}function df(e,t){if(!Zd.includes(e.agg))return G(`${t}: agg must be one of ${Zd.join(`, `)}.`);let n=e=>e===$d||typeof e==`string`&&tf.test(e)&&e.length<=32;if(e.agg===`ratio`){if(!Array.isArray(e.of)||e.of.length!==2||!e.of.every(n)||e.of[0]===e.of[1])return G(`${t}: a ratio's of is two column keys, [numerator, denominator].`);if(e.where!==void 0)return G(`${t}: a ratio has no where.`);if(e.scale!==void 0&&(!af(e.scale)||e.scale<=0||e.scale>1e6))return G(`${t}: scale is a positive number, such as 100 for a percentage.`);let r=null;if(e.requires!==void 0){if(!rf(e.requires)||Object.keys(e.requires).some(e=>e!==`column`&&e!==`atLeast`)||!n(e.requires.column)||!af(e.requires.atLeast)||e.requires.atLeast<0)return G(`${t}: requires is { column, atLeast }, such as { "column": "matches", "atLeast": 5 }.`);r={column:e.requires.column,atLeast:e.requires.atLeast}}return{ok:!0,agg:{agg:`ratio`,of:[...e.of],scale:e.scale??1,requires:r}}}if(e.scale!==void 0||e.requires!==void 0)return G(`${t}: scale and requires belong to a ratio.`);if(e.agg===`count`?e.of!==void 0&&!n(e.of):!n(e.of))return G(`${t}: of names what is aggregated, score or a column of the source board${e.agg===`count`?` (a count may leave it out)`:``}.`);let r=null;if(e.where!==void 0){if(!rf(e.where)||Object.keys(e.where).some(e=>![`of`,`op`,`value`].includes(e))||!n(e.where.of)||!Qd.includes(e.where.op)||!af(e.where.value))return G(`${t}: where is { of, op, value }, op one of ${Qd.join(`, `)}, such as { "of": "placement", "op": "eq", "value": 1 }.`);r={of:e.where.of,op:e.where.op,value:e.where.value}}return{ok:!0,agg:{agg:e.agg,of:e.of??null,where:r}}}function ff(e){for(let t of e.filter(e=>e.keep===`career`)){let n=e.find(e=>e.key===t.from);if(!n)return`${t.key}: it is fed from ${t.from}, which this game does not declare.`;if(n.keep===`career`)return`${t.key}: a career board is fed by a board of runs or bests, not by ${t.from}, another career board.`;let r=new Set([$d,...n.columns.map(e=>e.key)]);for(let e of t.columns){let n=(e.agg===`ratio`?[]:[e.of,e.where?.of].filter(Boolean)).find(e=>!r.has(e));if(n)return`${t.key}.${e.key}: ${n} is not ${t.from}'s score or one of its columns.`}for(let e of t.variants){let r=n.variants.find(t=>t.key===e.key);if(!r||e.values.some(e=>!r.values.some(t=>t.key===e.key)))return`${t.key}: variant ${e.key} must be one of ${t.from}'s, with values it has.`}}return null}function pf(e,t,n){if(!rf(e))return G(`${n}: a variant must be an object.`);for(let t of Object.keys(e))if(![`key`,`label`,`values`].includes(t))return G(`${n}: unknown variant field ${t.slice(0,32)}.`);if(typeof e.key!=`string`||!tf.test(e.key)||e.key.length>t.boardColumnKeyCharsMax)return G(`${n}: use a lowercase variant key.`);if(!of(e.label,t.boardColumnLabelCharsMax))return G(`${n}.${e.key}: label is empty or too long.`);if(!Array.isArray(e.values)||e.values.length<1||e.values.length>t.boardVariantValuesMax)return G(`${n}.${e.key}: declare from 1 to ${t.boardVariantValuesMax} values.`);let r=[];for(let i of e.values){if(!rf(i)||Object.keys(i).some(e=>e!==`key`&&e!==`label`)||typeof i.key!=`string`||!nf.test(i.key)||i.key.length>t.boardColumnKeyCharsMax||i.key===`all`||!of(i.label,t.boardColumnLabelCharsMax))return G(`${n}.${e.key}: each value needs a lowercase key (not "all") and a label.`);if(r.some(e=>e.key===i.key))return G(`${n}.${e.key}: value ${i.key} is declared twice.`);r.push(Object.freeze({key:i.key,label:i.label.trim()}))}return{ok:!0,variant:Object.freeze({key:e.key,label:e.label.trim(),values:Object.freeze(r)})}}function mf(e,t){if(e==null)return{ok:!0,tags:{}};if(!rf(e))return G(`tags must be an object`);let n={};for(let[r,i]of Object.entries(e)){let e=t.find(e=>e.key===r);if(!e)return G(`tags.${r.slice(0,32)} is not a variant of this board`);if(typeof i!=`string`||!e.values.some(e=>e.key===i))return G(`tags.${r} must be one of ${e.values.map(e=>e.key).join(`, `)}`);n[r]=i}return{ok:!0,tags:n}}function hf(e,t,n){if(e==null)return{ok:!0,stats:{},ignored:[],state:`ok`};if(!rf(e))return G(`stats must be an object`);let r={},i=[],a=`ok`;for(let[o,s]of Object.entries(e)){let e=t.find(e=>e.key===o);if(!e){i.length<8&&i.push(`stats.${o.slice(0,24)}`);continue}if(!gf(s))return G(`stats.${o} must be a finite number from -1e15 to 1e15, and 0 or at least 1e-6 from it`);let c=_f(s,e.min,e.max,n.clampTolerance);r[o]=c.stored,a=yf(a,c.state)}return new TextEncoder().encode(JSON.stringify(r)).byteLength>n.statsBytesMax?G(`stats is larger than ${n.statsBytesMax} bytes`):{ok:!0,stats:r,ignored:i,state:a}}var gf=e=>af(e)&&Math.abs(e)<=0x38d7ea4c68000&&(e===0||Math.abs(e)>=1e-6);function _f(e,t,n,r){return af(e)?n!==null&&e>n?{state:e>n*r?`rejected`:`clamped`,stored:n}:t!==null&&e<t?{state:e*r<t?`rejected`:`clamped`,stored:t}:{state:`ok`,stored:e}:{state:`rejected`,stored:0}}var vf={ok:0,clamped:1,rejected:2};function yf(e,t){return vf[t]>vf[e]?t:e}function bf(e,t){if(e==null||e===``||e===$d)return{key:$d,order:t.order};let n=t.columns.find(t=>t.key===e&&t.sortable);return n?{key:n.key,order:n.order}:null}function xf(e){return Object.keys(e??{}).sort().map(t=>`${t}:${e[t]}`).join(`,`)}var K=(e,t)=>({ok:!1,error:e,reason:t}),Sf=e=>!(!e||typeof e!=`object`||Array.isArray(e)),Cf=e=>typeof e==`number`&&Number.isFinite(e);function wf(e,t){return e==null?Object.freeze({}):!Sf(e)||!Object.values(e).every(t)?null:Object.freeze({...e})}var Tf=e=>typeof e==`string`,Ef=/^[a-z][a-z0-9_]*$/,Df=/^[a-z0-9][a-z0-9_-]*$/,Of=({key:e,order:t,min:n,max:r,runsPerPlayer:i,columns:a,...o})=>Object.freeze({...o,columns:Object.freeze(a.map(({min:e,max:t,...n})=>Object.freeze(n)))}),kf=class{constructor(e,t,n=()=>{}){this.context=e,this.initialize=t,this.note=n}context;initialize;note;generation=0;cancellation=`session_changed`;suppliedManifest;rawManifest=null;manifest=null;requests=new Set;isHostedOrigin(e=this.context().win?.location.hostname){let t=new URL(`https://api.opengame.gg`).hostname.replace(/^api\./,``);return e===t||!!e?.endsWith(`.${t}`)}configure(e){this.suppliedManifest=e}cancel(e){this.generation++,this.cancellation=e;for(let t of this.requests)t.abort(e)}board(e){return Object.freeze({submit:(t,n)=>this.submit(e,{value:t,meta:n}),submitRun:t=>Sf(t)?this.submit(e,t):Promise.resolve(K(`invalid_score`,`Pass a run object with a finite value.`)),top:t=>this.read(e,`top`,t),me:async t=>{let n=await this.read(e,`me`,t);return n.ok?{ok:!0,value:n.value.entries[0]??null}:n},around:t=>this.read(e,`around`,t)})}async stats(){this.note(`player_stats`),await this.initialize();let e=this.context(),t=this.generation;if(e.disposed||!e.win||!e.enabled)return K(`unavailable`,e.disposed?`disposed`:`leaderboards_unavailable`);if(!e.local&&!e.token)return K(`unavailable`,`session_unavailable`);let n=(e,t,n,r)=>Object.freeze({board:e,label:typeof t==`string`?t:null,keep:n===`runs`||n===`career`?n:`best`,entry:r}),r=e=>e&&Object.freeze({score:e.score,stats:e.stats,tags:e.tags,meta:e.meta,createdAt:e.createdAt,imported:e.imported});if(e.local){let e=await this.definitions();if(!e.ok)return e;try{let t=[...e.value].sort((e,t)=>e.key<t.key?-1:1).map(e=>{let t=e.keep===`career`?null:this.stored(e);return n(e.key,e.label,e.keep,r(t?.state===`ok`?t.entry:null))});return{ok:!0,value:Object.freeze({boards:Object.freeze(t),preview:!1,source:`game_reported`})}}catch{return K(`unavailable`,`local_storage_unavailable`)}}if(!this.host(e))return K(`unavailable`,`unsupported_game_origin`);let i=await this.json(new URL(`/v1/player/stats`,`https://api.opengame.gg`),{headers:{Authorization:`Bearer ${e.token}`},cache:`no-store`},131072,t);if(!i.ok)return i;if(this.context().disposed||t!==this.generation||!this.context().enabled)return K(`unavailable`,`session_changed`);let a=i.value;if(!Sf(a)||a.source!==`game_reported`||!!a.preview!==e.preview||!Array.isArray(a.boards))return K(`unavailable`,`invalid_response`);let o=[];for(let e of a.boards){if(!Sf(e)||typeof e.board!=`string`)return K(`unavailable`,`invalid_response`);let t=e.entry===null?null:this.entry(Sf(e.entry)?{...e.entry,rank:1,player_name:null}:null);if(e.entry!==null&&!t)return K(`unavailable`,`invalid_response`);o.push(n(e.board,e.label,e.keep,r(t)))}return{ok:!0,value:Object.freeze({boards:Object.freeze(o),preview:e.preview,source:`game_reported`})}}validKey(e){return typeof e==`string`&&e.length<=48&&/^[a-z][a-z0-9_]*$/.test(e)}async state(e){if(!this.validKey(e))return K(`invalid_board`,`Use a board key declared in opengame.json.`);await this.initialize();let t=this.context();return t.disposed||!t.win||!t.enabled?K(`unavailable`,t.disposed?`disposed`:`leaderboards_unavailable`):!t.local&&!t.token?K(`unavailable`,`session_unavailable`):{ok:!0,value:{...t,generation:this.generation}}}host(e){let t=new URL(`https://api.opengame.gg`).hostname.replace(/^api\./,``),n=e.win.location.hostname;if(!n.endsWith(`.${t}`))return null;let r=n.slice(0,-(t.length+1));return/^[a-z0-9][a-z0-9-]*$/.test(r)?r:null}async json(e,t,n,r=this.generation){if(r!==this.generation||this.context().disposed)return K(`unavailable`,this.cancellation);let i=new AbortController;this.requests.add(i);let a=setTimeout(()=>i.abort(`timeout`),5e3);try{let r=await fetch(e,{...t,credentials:`omit`,redirect:`error`,referrerPolicy:`no-referrer`,signal:i.signal});if(i.signal.aborted)throw Error(`cancelled`);return r.ok?Number(r.headers.get(`content-length`))>n||!r.body?(Ed(r),K(`unavailable`,`invalid_response`)):{ok:!0,value:await Td(r,n,i.signal)}:(Ed(r),r.status===404?K(`board_unavailable`,`board_not_found`):r.status===401||r.status===403?K(`unavailable`,`session_rejected`):r.status===429?K(`rate_limited`,`Try again after the rate-limit window.`):K(r.status>=500?`unavailable`:`invalid_request`,`http_${r.status}`))}catch(e){return K(`unavailable`,i.signal.aborted?String(i.signal.reason):e?.message===`response_too_large`?`response_too_large`:`network_or_invalid_response`)}finally{clearTimeout(a),this.requests.delete(i)}}manifestInput(){return this.rawManifest||(this.rawManifest=(async()=>{if(this.suppliedManifest!==void 0)return{ok:!0,value:this.suppliedManifest};let e=this.context().win;if(!e)return K(`unavailable`,`local_manifest_unavailable`);let t=await this.json(new URL(`./opengame.json`,e.location.href),{cache:`no-store`},65536);return t.ok?t:K(`unavailable`,`local_manifest_unavailable`)})(),this.rawManifest.then(e=>{e.ok||(this.rawManifest=null)})),this.rawManifest}async definitions(){if(this.manifest)return this.manifest;this.manifest=(async()=>{let e=await this.manifestInput();if(!e.ok)return e;let t=e.value;if(!Sf(t)||t.leaderboards!==void 0&&!Array.isArray(t.leaderboards))return K(`invalid_manifest`,`Invalid leaderboard declarations.`);let n=t.leaderboards??[];if(n.length>25)return K(`invalid_manifest`,`Too many leaderboard declarations.`);let r=[];for(let e of n){let t=sf(e,bd);if(!t.ok)return K(`invalid_manifest`,t.reason);if(r.some(e=>e.key===t.shape.key))return K(`invalid_manifest`,`${t.shape.key} is declared twice.`);r.push(t.shape)}let i=ff(r);return i?K(`invalid_manifest`,i):{ok:!0,value:r}})();let e=await this.manifest;return e.ok||(this.manifest=null),e}async localBoard(e){let t=await this.definitions();if(!t.ok)return t;let n=t.value.find(t=>t.key===e);return n?{ok:!0,value:n}:K(`board_unavailable`,`Declare this board in opengame.json.`)}storageKey(e){return`og:dev:leaderboard:v1:${new URL(`./opengame.json`,this.context().win.location.href).pathname}:${e}`}definition(e){let{label:t,scoreLabel:n,format:r,...i}=e;return JSON.stringify(i)}stored(e){let t=this.context().win.localStorage.getItem(this.storageKey(e.key));if(!t)return null;if(t.length>131072)throw Error(`invalid local score`);let n=JSON.parse(t);if(!Sf(n)||typeof n.definition!=`string`)throw Error(`invalid local score`);if(n.definition!==this.definition(e))return null;if(!Sf(n.entry)||n.state!==`ok`&&n.state!==`clamped`&&n.state!==`rejected`)throw Error(`invalid local score`);let r=this.entry(n.entry,!0);if(!r)throw Error(`invalid local score`);return{entry:r,state:n.state}}entry(e,t=!1){if(!Sf(e)||!Cf(e.score)||!Number.isSafeInteger(e.rank)||Number(e.rank)<1||e.player_name!==null&&typeof e.player_name!=`string`||typeof e.created_at!=`string`||!Number.isFinite(Date.parse(e.created_at)))return null;let n=Gd(e.meta,xd),r=wf(e.stats,Cf),i=wf(e.tags,Tf);return!n.ok||!r||!i?null:Object.freeze({name:e.player_name,score:e.score,stats:r,tags:i,meta:n.meta,createdAt:e.created_at,rank:Number(e.rank),isMe:t||e.is_me===!0,imported:e.imported===!0})}shape(e){if(e==null)return null;if(!Sf(e)||![`best`,`runs`,`career`].includes(e.keep)||!Array.isArray(e.columns)||!Array.isArray(e.variants))return!1;let t=e=>typeof e==`string`?e:null,n=e=>Jd.includes(e)?e:`number`,r=e.columns.filter(Sf).filter(e=>Tf(e.key)&&Tf(e.label)).map(({agg:e,of:t,where:r,scale:i,requires:a,...o})=>Object.freeze({key:o.key,label:o.label,format:n(o.format),order:o.order===`asc`?`asc`:`desc`,sortable:o.sortable!==!1,...Number.isSafeInteger(o.decimals)&&o.decimals>=0&&o.decimals<=4?{decimals:o.decimals}:{},...Tf(e)?{agg:e,of:Tf(t)||Array.isArray(t)?t:null,...e===`ratio`?{scale:Cf(i)?i:1,requires:Sf(a)?a:null}:{where:Sf(r)?r:null}}:{}})),i=e.variants.filter(Sf).filter(e=>Tf(e.key)&&Tf(e.label)&&Array.isArray(e.values)).map(e=>Object.freeze({key:e.key,label:e.label,values:Object.freeze(e.values.filter(Sf).filter(e=>Tf(e.key)&&Tf(e.label)).map(e=>Object.freeze({key:e.key,label:e.label})))}));return Object.freeze({label:t(e.label),scoreLabel:t(e.scoreLabel),format:n(e.format),keep:e.keep,...Tf(e.from)?{from:e.from}:{},...Tf(e.scoreAgg)?{scoreAgg:e.scoreAgg}:{},columns:Object.freeze(r),variants:Object.freeze(i)})}async read(e,t,n={}){this.note(`score_read`);let r=n.limit,i=n.offset??0,a=n.filter??{};if(r!==void 0&&(!Number.isSafeInteger(r)||r<1))return K(`invalid_limit`,`Use a positive integer limit.`);if(!Number.isSafeInteger(i)||i<0||i>1e4||i&&t!==`top`)return K(`invalid_query`,`offset is a whole number from 0 to 10000, on top() only.`);if(n.sort!==void 0&&(typeof n.sort!=`string`||!Ef.test(n.sort)))return K(`invalid_query`,`sort is score or a sortable column key.`);if(!Sf(a)||Object.entries(a).some(([e,t])=>!Ef.test(e)||typeof t!=`string`||!Df.test(t)))return K(`invalid_query`,`filter names a variant key and one of its value keys, such as { mode: "solo" }.`);let o=n.sort??`score`,s=xf(a),c=Math.min(r??50,100),l=await this.state(e);if(!l.ok)return l;let u=l.value;if(u.generation!==this.generation||this.context().disposed)return K(`unavailable`,this.cancellation);if(u.local){let t=await this.localBoard(e);if(!t.ok)return t;if(this.context().disposed||!this.context().local)return K(`unavailable`,`session_changed`);if(!bf(o,t.value))return K(`invalid_query`,`${o} is not a sortable column of this board.`);let n=mf(a,t.value.variants);if(!n.ok)return K(`invalid_query`,n.reason);try{let e=this.stored(t.value),n=e?.state===`ok`&&Object.entries(a).every(([t,n])=>e.entry.tags[t]===n)?e.entry:null,r=i?null:n;return{ok:!0,value:{entries:r?[r]:[],order:t.value.order,preview:!1,source:`game_reported`,total:+!!n,offset:i,sort:o,filter:Object.freeze({...a}),shape:Of(t.value)}}}catch{return K(`unavailable`,`local_storage_unavailable`)}}let d=this.host(u);if(!d)return K(`unavailable`,`unsupported_game_origin`);let f=new URL(`/v1/scores`,`https://api.opengame.gg`),p=new URLSearchParams(u.preview?{board:e,view:t,limit:String(c)}:{board:e,host:d,view:t,limit:String(c)});i&&p.set(`offset`,String(i)),n.sort!==void 0&&p.set(`sort`,o),s&&p.set(`filter`,s),f.search=p.toString();let m=await this.json(f,{headers:{Authorization:`Bearer ${u.token}`},cache:t===`top`?`default`:`no-store`},131072,u.generation);if(!m.ok)return m;if(this.context().disposed||u.generation!==this.generation||!this.context().enabled)return K(`unavailable`,`session_changed`);let h=m.value,g=t===`top`?c:t===`me`?1:21;if(!Sf(h)||h.board!==e||h.source!==`game_reported`||h.direction!==`asc`&&h.direction!==`desc`||!!h.preview!==u.preview||!Array.isArray(h.entries)||h.entries.length>g)return K(`unavailable`,`invalid_response`);let _=wf(h.filter,Tf),v=this.shape(h.shape);if(!_||xf(_)!==s||(h.sort??`score`)!==o||(h.offset??0)!==i||v===!1||!(h.total===void 0||h.total===null||Number.isSafeInteger(h.total)&&Number(h.total)>=0))return K(`unavailable`,`invalid_response`);let y=[];for(let e of h.entries){let t=this.entry(e);if(!t)return K(`unavailable`,`invalid_response`);y.push(t)}return t!==`top`&&y.length&&y.filter(e=>e.isMe).length!==1?K(`unavailable`,`invalid_response`):{ok:!0,value:{entries:y,order:h.direction,preview:u.preview,source:`game_reported`,total:typeof h.total==`number`?h.total:null,offset:i,sort:o,filter:_,shape:v}}}async submit(e,t){this.note(`score_submit`);let{value:n}=t;if(!Cf(n))return K(`invalid_score`,`Use a finite number.`);let r=Gd(t.meta,xd);if(!r.ok)return K(`invalid_meta`,r.reason);if(qd(r.meta.label,Sd))return K(`invalid_meta`,`meta.label is reserved for imported scores`);if(!wf(t.stats,Cf))return K(`invalid_run`,`stats maps column keys to finite numbers.`);if(!wf(t.tags,Tf))return K(`invalid_run`,`tags maps variant keys to value keys.`);let i=await this.state(e);if(!i.ok)return i;let a=i.value;if(a.generation!==this.generation||this.context().disposed)return K(`unavailable`,this.cancellation);if(a.local){let i=await this.localBoard(e);if(!i.ok)return i;if(i.value.from)return K(`invalid_run`,`${e} is a career board, fed by ${i.value.from}; submit runs there.`);let o=hf(t.stats,i.value.columns,{clampTolerance:10,statsBytesMax:512});if(!o.ok)return K(`invalid_run`,o.reason);let s=mf(t.tags,i.value.variants);if(!s.ok)return K(`invalid_run`,s.reason);let c=()=>{if(this.context().disposed||!this.context().local)return K(`unavailable`,`session_changed`);let t=Kd(n,{plausible_min:i.value.min,plausible_max:i.value.max},10),a={stored:t.stored,state:yf(t.state,o.state)},c=this.stored(i.value),l=c&&(i.value.order===`asc`?a.stored<c.entry.score:a.stored>c.entry.score),u=!c||a.state!==`rejected`&&(c.state===`rejected`||a.state===`ok`&&c.state!==`ok`||a.state===c.state&&!!l);return u&&this.context().win.localStorage.setItem(this.storageKey(e),JSON.stringify({definition:this.definition(i.value),state:a.state,entry:{player_name:`dev`,score:a.stored,stats:o.stats,tags:s.tags,meta:r.meta,created_at:new Date().toISOString(),rank:1}})),{ok:!0,value:{state:a.state,score:a.stored,best:u,preview:!1,ignored:Object.freeze(o.ignored)}}};try{let t=a.win.navigator?.locks;if(!t)return c();let n=new AbortController;this.requests.add(n);let r=setTimeout(()=>n.abort(`timeout`),5e3);try{return await t.request(this.storageKey(e),{signal:n.signal},c)}finally{clearTimeout(r),this.requests.delete(n)}}catch{return K(`unavailable`,`local_storage_unavailable`)}}if(!this.host(a))return K(`unavailable`,`unsupported_game_origin`);let o=await this.json(new URL(`/v1/scores`,`https://api.opengame.gg`),{method:`POST`,cache:`no-store`,headers:{Authorization:`Bearer ${a.token}`,"Content-Type":`application/json`},body:JSON.stringify({board:e,value:n,meta:r.meta,stats:t.stats,tags:t.tags})},131072,a.generation);if(!o.ok)return o;if(this.context().disposed||a.generation!==this.generation||!this.context().enabled)return K(`unavailable`,`session_changed`);let s=o.value;return!Sf(s)||s.ok!==!0||!Cf(s.stored)||typeof s.best!=`boolean`||s.state!==`ok`&&s.state!==`clamped`&&s.state!==`rejected`||!!s.preview!==a.preview?K(`unavailable`,`invalid_response`):{ok:!0,value:{score:s.stored,state:s.state,best:s.best,preview:a.preview,ignored:Object.freeze(Array.isArray(s.ignored)?s.ignored.filter(Tf):[])}}}},Af=Cd,jf=new Set([`identity`,`leaderboards`,`analytics`,`external-links`,`avatar`]),Mf=Object.freeze({id:null,handle:null,ogNumber:null,signedIn:!1}),Nf=e=>e===`localhost`||e===`127.0.0.1`||e===`[::1]`,Pf={guest:Object.freeze({id:`dev-guest`,handle:null,ogNumber:null,signedIn:!1}),"signed-in":Object.freeze({id:`dev-account`,handle:`dev`,ogNumber:1,signedIn:!0,avatar:Object.freeze({seed:1,palette:`sky`,look:`circle.classic.white`,character:`c4.classic.regular.hoodie.jeans.cape-watch.retro.avatar.avatar.avatar.avatar`})}),"no-handle":Object.freeze({id:`dev-account`,handle:null,ogNumber:null,signedIn:!0})};function Ff(){let e=crypto.getRandomValues(new Uint8Array(10)),t=Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``),n=Date.now().toString(16).padStart(12,`0`);return`${n.slice(0,8)}-${n.slice(8)}-7${t.slice(0,3)}-${(8+(e[9]&3)).toString(16)}${t.slice(3,6)}-${t.slice(6,18)}`}var If=14;function Lf(e,t){if(Af.includes(e))return!0;try{let n=new URL(e),r=new URL(t);return(n.protocol===`http:`||n.protocol===`https:`)&&Nf(n.hostname)&&(r.protocol===`http:`||r.protocol===`https:`)&&Nf(r.hostname)&&n.origin===e}catch{return!1}}function Rf(e,t){for(let n of e)try{n(t)}catch{}}function zf(e,t,n){e.add(t);try{t(n)}catch{}return()=>{e.delete(t)}}var Bf=new Set([`paper`,`ink`,`sky`,`meadow`,`coral`,`iris`,`honey`,`tide`]);function Vf(e,t){if(!e||typeof e!=`object`||Array.isArray(e))return null;let n=e,r=Rd(n.look),i=r&&Bd(t),a={seed:Number(n.seed),palette:n.palette,...r?{look:r}:{}};return Object.keys(n).length!==Object.keys(a).length||!Number.isSafeInteger(n.seed)||a.seed<0||!Bf.has(a.palette)?null:Object.freeze(i?{...a,character:i}:a)}function Hf(e,t=!1){if(!e||typeof e!=`object`)return null;let n=e;if(typeof n.id!=`string`||!n.id||typeof n.signedIn!=`boolean`||n.handle!==null&&typeof n.handle!=`string`||!(n.ogNumber===null||Number.isSafeInteger(n.ogNumber)&&Number(n.ogNumber)>0))return null;let r=t&&n.signedIn?Vf(n.avatar,n.character):null;return Object.freeze({id:n.id,handle:n.handle,ogNumber:n.ogNumber,signedIn:n.signedIn,...r?{avatar:r}:{}})}var Uf=!1;function Wf(e,t){if(Uf)return;try{let{protocol:t,hostname:n}=e.location;if(t!==`file:`&&!Nf(n)||/jsdom|happy-?dom/i.test(e.navigator?.userAgent??``))return}catch{return}Uf=!0;let n=t===`signed-in`;globalThis.console?.info?.(`OpenGame SDK 0.5.1: local mock
Playing as ${n?`@dev, signed in`:t===`guest`?`a guest`:`an account with no handle yet`}. Add ?og-dev-player=${n?`guest`:`signed-in`} to switch.
Scores stay in this browser.`)}var Gf=class{win;localMode=!1;sessionToken=null;account=``;devPlayer=`guest`;onParentMessage(e){return this.parentListeners.add(e),()=>{this.parentListeners.delete(e)}}postToParent(e){return this.send(e)}parentListeners=new Set;boards=new kf(()=>({win:this.win,local:this.localMode,token:this.sessionToken,enabled:this.capabilities.includes(`leaderboards`),preview:this.env.preview,disposed:this.disposed}),()=>this.init(),e=>this.feature(e));parentOrigin=null;initialization=null;settle=null;extendedHandshake=!1;handshakeTimer;initRetry;readyRetry;readyDeadline;batchTimer;readySent=!1;readyReported=!1;readyElapsed=0;inputReported=!1;attentionReported=!1;health;bootedAt=Date.now();sessionGeneration=0;startupOpen=!0;disposed=!1;hostPaused=!1;held=!1;playWaiters=new Set;paused=!1;muted=!1;full=!1;playerValue=Mf;environment=Object.freeze({embedded:!1,connected:!1,preview:!1,sdkVersion:`0.5.1`,capabilities:Object.freeze([])});playerListeners=new Set;muteListeners=new Set;pauseListeners=new Set;fullscreenListeners=new Set;cancelLink=null;achievements=new Dd(()=>({token:this.sessionToken,preview:this.env.preview,disposed:this.disposed,generation:this.sessionGeneration}),e=>this.feature(e));events=[];flushing=!1;eventsRecorded=0;eventTimes=[];get env(){return this.environment}get capabilities(){return this.environment.capabilities}player=(()=>{let e=this;return{get id(){return e.playerValue.id},get handle(){return e.playerValue.handle},get ogNumber(){return e.playerValue.ogNumber},get signedIn(){return e.playerValue.signedIn},get avatar(){return e.feature(`avatar`),e.playerValue.avatar??null},onChange:e=>zf(this.playerListeners,e,this.playerValue),stats:()=>this.boards.stats(),requestSignIn:()=>(this.feature(`sign_in`),this.capabilities.includes(`identity`)?this.localMode?(this.playerValue.signedIn||this.setLocalPlayer(`signed-in`),{ok:!0,value:void 0}):this.send({type:`sign-in`}):{ok:!1,error:`unavailable`})}})();audio=(()=>{let e=this;return{get muted(){return e.muted},onHostMute:e=>(this.feature(`mute`),zf(this.muteListeners,e,this.muted))}})();fullscreen=(()=>{let e=this;return{get active(){return e.full},request:()=>(this.feature(`fullscreen`),this.send({type:`fullscreen`})),onChange:e=>zf(this.fullscreenListeners,e,this.full)}})();onPause(e){return this.feature(`pause`),zf(this.pauseListeners,e,this.paused)}invite=(()=>{let e=this;return{get code(){return e.feature(`invite`),e.joinCode},link:t=>(e.feature(`invite`),Id(e.localMode?e.localInvitePage():e.invitePage,t))}})();invitePage=null;joinCode=null;openLink(e){if(this.feature(`open_link`),this.disposed)return Promise.resolve({ok:!1,error:`disposed`});if(!this.capabilities.includes(`external-links`)||!this.parentOrigin)return Promise.resolve({ok:!1,error:`unavailable`});let t=Pd(e,2048,[this.parentOrigin,this.win?.location.origin??``]);return t?this.win?.navigator.userActivation?.isActive?this.cancelLink?Promise.resolve({ok:!1,error:`busy`}):new Promise(e=>{let{port1:n,port2:r}=new MessageChannel,i=!1,a=t=>{i||(i=!0,clearTimeout(o),n.close(),r.close(),this.cancelLink=null,e(t))},o=setTimeout(()=>a({ok:!1,error:`timeout`}),30500);this.cancelLink=e=>a({ok:!1,error:e}),n.onmessage=e=>{let t=e.data;!t||t.og!==1||t.type!==`open-link`||typeof t.ok!=`boolean`||a(t.ok?{ok:!0,value:void 0}:{ok:!1,error:typeof t.error==`string`?t.error:`cancelled`})},n.onmessageerror=()=>a({ok:!1,error:`invalid_response`});let s=this.send({type:`open-link`,url:t},[r]);s.ok||a(s)}):Promise.resolve({ok:!1,error:`gesture_required`}):Promise.resolve({ok:!1,error:`invalid_request`})}waitForPlay(e){return this.disposed?Promise.resolve({ok:!1,error:`disposed`}):this.held?new Promise(t=>{let n=i=>{this.playWaiters.delete(n),e?.removeEventListener(`abort`,r),t(i)},r=()=>n({ok:!1,error:`cancelled`});this.playWaiters.add(n),e?.aborted?r():e?.addEventListener(`abort`,r,{once:!0})}):Promise.resolve({ok:!0,value:void 0})}finishPlayWaiters(e){for(let t of this.playWaiters)t(e)}leaderboard(e){return this.boards.board(e)}connect(){let e=typeof window>`u`?void 0:window;this.win||this.disposed||!e||e.parent===e||!this.boards.isHostedOrigin(e.location.hostname)||(this.attach(e),this.handshake())}attach(e){let t=!!(e&&e.parent!==e);this.win=e,this.environment=Object.freeze({...this.environment,embedded:t,preview:!!(e&&/^p-[a-z2-7]{52}\./.test(e.location.hostname))}),t&&e.addEventListener(`message`,this.receive)}handshake(){clearTimeout(this.handshakeTimer),clearInterval(this.initRetry),this.handshakeTimer=setTimeout(()=>this.finish(),4e3);let e=()=>this.send({type:`ready`,phase:`init`,sdk:`0.5.1`,isolated:this.win?.crossOriginIsolated===!0});this.initRetry=setInterval(e,500),e()}init(e={}){if(this.initialization)return this.initialization;if(this.disposed)return Promise.resolve(this.environment);this.boards.configure(e.manifest),e.dev?.player&&Object.hasOwn(Pf,e.dev.player)&&(this.devPlayer=e.dev.player),this.win||this.attach(typeof window>`u`?void 0:window);let t=this.win,n=this.environment.embedded;return this.initialization=new Promise(e=>{this.settle=e}),t?.document.addEventListener(`visibilitychange`,this.visibility),t?.addEventListener(`pointerdown`,this.firstInput,!0),t?.addEventListener(`keydown`,this.firstInput,!0),t&&(this.health=Od(t,wd,()=>this.readySent&&(this.localMode||!!this.sessionToken)&&this.capabilities.includes(`analytics`)&&!this.paused&&!this.held,(e,t)=>this.track(e,t).ok)),this.visibility(),!t||!n?(this.finish(),this.initialization):(t.addEventListener(`pagehide`,this.flush),this.batchTimer??=setInterval(this.flush,1e4),this.environment.connected?this.finish():this.extendedHandshake?(clearTimeout(this.handshakeTimer),this.handshakeTimer=setTimeout(()=>this.finish(),10500)):this.initRetry===void 0&&this.handshake(),this.initialization)}ready(){if(this.readySent||this.disposed||(this.init(),this.readySent=!0,this.readyElapsed=Date.now()-this.bootedAt,this.reportReady(),!this.win))return;if(this.win.parent===this.win){try{this.win.postMessage({og:1,type:`ready`,phase:`playable`,sdk:`0.5.1`,isolated:this.win.crossOriginIsolated===!0},this.win.location.origin)}catch{}return}let e=()=>this.send({type:`ready`,phase:`playable`,sdk:`0.5.1`,isolated:this.win?.crossOriginIsolated===!0});this.readyRetry=setInterval(e,500),this.readyDeadline=setTimeout(()=>clearInterval(this.readyRetry),4e3),e()}finish(){if(!this.disposed&&this.win&&!this.environment.connected&&!this.boards.isHostedOrigin()&&this.win.__OG_DEV__===1){this.localMode=!0;let e=null;try{e=new URL(this.win.location.href)}catch{}let t=e?.searchParams.get(`og-dev-player`);t&&Object.hasOwn(Pf,t)&&(this.devPlayer=t),this.joinCode=Fd(e?.searchParams.get(`join`)),this.invitePage=e?.href??null,this.setLocalPlayer(this.devPlayer),Wf(this.win,this.devPlayer)}clearTimeout(this.handshakeTimer),clearInterval(this.initRetry),this.initRetry=void 0,this.settle?.(this.environment),this.settle=null}localInvitePage(){if(!this.invitePage)return null;let e=new URL(this.invitePage);return e.searchParams.set(`og-dev-player`,this.devPlayer===`guest`?`signed-in`:`guest`),e.href}setLocalPlayer(e){let t=Pf[e];this.playerValue!==t&&(this.environment=Object.freeze({...this.environment,capabilities:Object.freeze([`identity`,`leaderboards`,`analytics`].concat(t.avatar?`avatar`:[]))}),this.devPlayer=e,this.playerValue=t,this.account=`local:${t.id}:${t.signedIn}`,Rf(this.playerListeners,t))}send(e,t){let n=this.win;if(!n||n.parent===n||this.disposed)return{ok:!1,error:`unavailable`};if(t){if(!this.parentOrigin)return{ok:!1,error:`unavailable`};try{n.parent.postMessage({...e,og:1},this.parentOrigin,t)}catch{return{ok:!1,error:`unavailable`}}return{ok:!0,value:void 0}}let r=this.parentOrigin?[this.parentOrigin]:[...Af,...vd.filter(e=>Lf(e,n.location.origin))];try{let e=new URL(n.document.referrer||n.location.ancestorOrigins?.[0]||``).origin;!this.parentOrigin&&Lf(e,n.location.origin)&&(r=[e])}catch{}for(let t of r)try{n.parent.postMessage({...e,og:1},t)}catch{}return{ok:!0,value:void 0}}receive=e=>{let t=this.win;if(!t||e.source!==t.parent||!Lf(e.origin,t.location.origin)||this.parentOrigin&&e.origin!==this.parentOrigin)return;let n=e.data;if(n&&typeof n==`object`&&n.og===1){for(let e of this.parentListeners)try{e(n)}catch{}if(n.type===`session-pending`)!this.settle&&this.initialization||this.extendedHandshake||(this.extendedHandshake=!0,this.parentOrigin=e.origin,clearInterval(this.initRetry),clearTimeout(this.handshakeTimer),this.handshakeTimer=setTimeout(()=>this.finish(),10500));else if(n.type===`session-request`)this.send({type:`ready`,phase:`init`,sdk:`0.5.1`,isolated:t.crossOriginIsolated===!0});else if(n.type===`ready-ack`&&n.phase===`playable`)clearInterval(this.readyRetry),clearTimeout(this.readyDeadline);else if(n.type===`session`){if(typeof n.token!=`string`&&n.token!==null)return;let t=this.environment.preview||n.preview===!0,r=(Array.isArray(n.capabilities)?[...new Set(n.capabilities.filter(e=>jf.has(e)))]:[`leaderboards`,`analytics`]).filter(e=>!t||e!==`identity`&&e!==`avatar`),i=Hf(n.player,r.includes(`avatar`))??Mf;i.avatar||(r=r.filter(e=>e!==`avatar`));let a=i.id===null?JSON.stringify([`token`,n.token,t]):JSON.stringify([`player`,i.id,i.signedIn,n.token!==null,t]);r.includes(`external-links`)||this.cancelLink?.(`unavailable`),(this.localMode||a!==this.account)&&(this.cancelLink?.(`session_changed`),this.finishPlayWaiters({ok:!1,error:`session_changed`}),this.boards.cancel(`session_changed`));let o=this.sessionToken!==n.token,s=this.account!==a,c=r.includes(`analytics`)!==this.capabilities.includes(`analytics`);if((o||s||t!==this.env.preview||c)&&this.sessionGeneration++,s&&(this.attentionReported=!1,this.inputReported=!1),this.account=a,this.sessionToken=n.token,!r.includes(`analytics`))this.events=this.events.filter(e=>e.token!==null),this.startupOpen=!1;else if(n.token&&this.startupOpen)for(let e of this.events)e.token===null&&(e.token=n.token);n.token&&(this.startupOpen=!1),(o||s||c)&&this.health?.reset(),this.localMode=!1,this.held=n.held===!0,this.held||this.finishPlayWaiters({ok:!0,value:void 0}),this.parentOrigin=e.origin;let l=null;try{l=new URL(n.page)}catch{}this.invitePage=l?.origin===e.origin&&/^\/g\/[^/]+$/.test(l.pathname)?l.href:null,this.joinCode=Fd(n.join),r.includes(`leaderboards`)||this.boards.cancel(`leaderboards_unavailable`),this.environment=Object.freeze({...this.environment,connected:!0,preview:t,capabilities:Object.freeze(r)}),JSON.stringify(i)!==JSON.stringify(this.playerValue)&&(this.playerValue=i,Rf(this.playerListeners,i)),this.finish(),this.reportReady()}else n.type===`mute`&&typeof n.muted==`boolean`&&this.muted!==n.muted?(this.muted=n.muted,Rf(this.muteListeners,this.muted)):n.type===`activity`&&typeof n.active==`boolean`?(this.hostPaused=!n.active,this.visibility()):n.type===`fullscreen`&&typeof n.active==`boolean`&&this.full!==n.active?(this.full=n.active,Rf(this.fullscreenListeners,this.full)):n.type===`play`&&(this.held=!1,this.finishPlayWaiters({ok:!0,value:void 0}),this.hostPaused=!1,this.visibility())}};reportReady=()=>{this.readySent&&!this.readyReported&&(this.localMode||this.sessionToken)&&this.capabilities.includes(`analytics`)&&this.track(`sdk_ready`,{duration_ms:this.readyElapsed}).ok&&(this.readyReported=!0),this.reportAttention(),this.features(),this.health?.resume()};feature(e){!this.hushed&&(this.used.has(e)||this.used.size<If)&&(this.used.add(e),this.features())}hush(e){this.hushed=!0;try{e()}finally{this.hushed=!1}}hushed=!1;used=new Set;noted=new Set;features(){if(!this.localMode){if(this.sessionToken&&!this.capabilities.includes(`analytics`))this.used.clear();else if(this.sessionToken&&this.readySent)for(let e of this.used)!this.noted.has(e)&&this.record(`sdk_feature`,{feature:e},!0).ok&&this.noted.add(e)}}reportAttention=()=>!this.readySent||!this.sessionToken||this.paused||this.held||!this.capabilities.includes(`analytics`)?!1:(!this.attentionReported&&this.track(`attention_coverage`,{result:`sdk_v1`}).ok&&(this.attentionReported=!0),this.attentionReported);firstInput=e=>{!e.isTrusted||this.disposed||this.reportAttention()&&!this.inputReported&&this.track(`first_input`,{duration_ms:Date.now()-this.bootedAt}).ok&&(this.inputReported=!0)};visibility=()=>{let e=this.hostPaused||this.win?.document.visibilityState===`hidden`;e!==this.paused&&(this.paused=e,Rf(this.pauseListeners,e)),this.reportAttention(),this.health?.resume()};track(e,t={}){return e===`sdk_feature`?{ok:!1,error:`invalid_event`}:this.record(e,t,!1)}record(e,t,n){let r=this.startupOpen&&this.initialization&&!this.sessionToken;if(this.disposed||!this.initialization||!this.localMode&&!r&&(!this.sessionToken||!this.capabilities.includes(`analytics`)))return{ok:!1,error:`unavailable`};if(typeof e!=`string`||!/^[a-z][a-z0-9_]*$/.test(e)||e.length>48)return{ok:!1,error:`invalid_event`};let i=Vd(t,yd);if(e===`attention_coverage`){if(i.result!==`sdk_v1`)return{ok:!1,error:`invalid_event`};i={result:`sdk_v1`}}if(e===`sdk_feature`?i={feature:String(t.feature)}:e===`sdk_ready`?i.sdk_version=`0.5.1`:/^(runtime_|first_input|attention_)/.test(e)||this.feature(`track`),e===`runtime_performance`&&(typeof i.fps!=`number`||typeof i.sample_rate!=`number`)||new TextEncoder().encode(JSON.stringify({name:e,props:i})).byteLength>1024)return{ok:!1,error:`invalid_event`};let a=Date.now();this.eventTimes=this.eventTimes.filter(e=>e>a-6e4);let o=!(n&&e===`sdk_feature`);if(o&&(this.eventTimes.length>=600||this.eventsRecorded>=5e3))return{ok:!1,error:`rate_limited`};let s;try{s=Ff()}catch{return{ok:!1,error:`unavailable`}}let c={name:e,props:i,token:this.sessionToken,eventId:s,occurredAt:new Date(a).toISOString()},{token:l,...u}=c;return new TextEncoder().encode(JSON.stringify({events:[u]})).byteLength>65536?{ok:!1,error:`invalid_event`}:(o&&(this.eventTimes.push(a),this.eventsRecorded++),this.events.push(c),this.batchTimer||=setInterval(this.flush,1e4),{ok:!0,value:void 0})}flush=()=>{if(!this.events.length||this.flushing)return;if(this.localMode){let e=this.events.splice(0);typeof globalThis.console?.debug==`function`&&globalThis.console.debug(`[opengame] events`,e);return}let e=this.events[0]?.token;if(!e)return;let t=[];for(let{token:n,...r}of this.events){if(n!==e||t.length>=200||new TextEncoder().encode(JSON.stringify({events:[...t,r]})).byteLength>65536)break;t.push(r)}if(!t.length)return;let n=new Set(t.map(e=>e.eventId)),r=t=>{this.disposed||(this.events=this.events.filter(n=>n.token!==e||!t.has(n.eventId)))};this.flushing=!0,(async()=>{try{let i=AbortSignal.timeout(1e4),a=await fetch(new URL(`/v1/events`,`https://api.opengame.gg`),{method:`POST`,credentials:`omit`,cache:`no-store`,redirect:`error`,referrerPolicy:`no-referrer`,keepalive:!0,signal:i,headers:{Authorization:`Bearer ${e}`,"Content-Type":`application/json`},body:JSON.stringify({events:t})});if(!a.ok){[400,401,403,404,410,413,422].includes(a.status)&&r(n),Ed(a);return}if(a.status===202){Ed(a);return}let o=await Td(a,65536,i);if(!o||typeof o!=`object`||Array.isArray(o)||o.queued===!0)return;let{accepted:s,refused:c=0,limited:l=0,acceptedIds:u}=o;if(![s,c,l].every(e=>typeof e==`number`&&Number.isSafeInteger(e)&&e>=0&&e<=t.length)||s+c+l>t.length||c>0&&o.limited===void 0||u!==void 0&&(!Array.isArray(u)||u.length!==s||new Set(u).size!==u.length||!u.every(e=>typeof e==`string`&&n.has(e))))return;let d=s+c===t.length&&l===0;(d||u!==void 0)&&r(d?n:new Set(u))}catch{}finally{this.flushing=!1}})()};dispose(){this.disposed||(this.cancelLink?.(`disposed`),this.finishPlayWaiters({ok:!1,error:`disposed`}),this.flush(),this.events=[],this.disposed=!0,this.sessionGeneration++,this.sessionToken=null,this.boards.cancel(`disposed`),this.finish(),clearInterval(this.batchTimer),clearInterval(this.readyRetry),clearTimeout(this.readyDeadline),this.win?.removeEventListener(`message`,this.receive),this.win?.removeEventListener(`pagehide`,this.flush),this.win?.removeEventListener(`pointerdown`,this.firstInput,!0),this.win?.removeEventListener(`keydown`,this.firstInput,!0),this.health?.stop(),this.win?.document.removeEventListener(`visibilitychange`,this.visibility),this.playerListeners.clear(),this.muteListeners.clear(),this.pauseListeners.clear(),this.fullscreenListeners.clear(),this.parentListeners.clear())}},Kf=Md(`core`),qf=Kf&&Object.hasOwn(Kf,`og`)&&Object.hasOwn(Kf,`OpenGameClient`)&&typeof Kf.OpenGameClient==`function`&&Kf.og instanceof Kf.OpenGameClient?Kf:Nd(`core`,{OpenGameClient:Gf,og:new Gf},!0);if(!(`invite`in qf.og))try{Object.defineProperty(qf.og,"invite",{value:Object.freeze({code:null,link:()=>null})})}catch{}var{OpenGameClient:Jf,og:Yf}=qf,Xf={title:`Saltgate`};function Zf(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Qf(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function $f(e){let t=Zf(e),n=new Uint8Array(512),r=new Float32Array(256);for(let e=0;e<256;e++)n[e]=e,r[e]=t()*2-1;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}for(let e=0;e<256;e++)n[e+256]=n[e];let i=(e,t)=>r[n[n[e&255]+t&511]],a=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),a=e-n,o=t-r,s=a*a*(3-2*a),c=o*o*(3-2*o),l=i(n,r),u=i(n+1,r),d=i(n,r+1),f=i(n+1,r+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c};return a.fbm=(e,t,n=4,r=2,i=.5)=>{let o=0,s=1,c=1,l=0;for(let u=0;u<n;u++)o+=s*a(e*c,t*c),l+=s,s*=i,c*=r;return o/l},a}var ep=(e,t,n)=>e<t?t:e>n?n:e,tp=(e,t,n)=>e+(t-e)*n,np=(e,t,n)=>{let r=ep((n-e)/(t-e),0,1);return r*r*(3-2*r)},rp=.42,ip=1.48,ap=e=>e-128,op=e=>e-128,sp=e=>Math.round(e+128),cp=e=>Math.round(e+128);function lp(e){let t=Zf(e),n=$f(e^40503),r=$f(e^20973),i=$f(e^11291),a=new Float32Array(65536),o=new Uint8Array(65536),s=e=>186+n.fbm(e*.018,3.3,3)*16;for(let e=0;e<256;e++)for(let t=0;t<256;t++){ap(t),op(e);let o=s(t),c=1.12+n.fbm(t*.035,e*.035,4)*.32+i(t*.15,e*.15)*.04,l=e-o,u=tp(.35,-1.9,np(-2,26,l))+r.fbm(t*.05,e*.05,3)*.25,d=l<-6?c:tp(c,u,np(-6,3,l));d=Math.min(d,tp(d,-3.6,np(30,60,l)));let f=np(70,10,e),p=Math.max(np(52,6,t),np(204,250,t))*np(196,150,e),m=1.3+r.fbm(t*.02,e*.02,4)*1.6+2.6*Math.max(f,p)**1.4;d=tp(d,Math.max(d,m),Math.max(f,p)),a[e*256+t]=d}let c=[],l=(e,t,n,r)=>{for(let i=0;i<e.length;i++){let[s,c]=e[i],l=i/(e.length-1),u=t(l),d=n(l),f=Math.ceil(d+2),p=sp(s),m=cp(c);for(let e=-f;e<=f;e++)for(let t=-f;t<=f;t++){let n=p+t,i=m+e;if(n<0||i<0||n>=256||i>=256)continue;let l=Math.hypot(ap(n)-s,op(i)-c);if(l>d+1.6)continue;let f=i*256+n,h=l<=d?(l/d)**2*.35:.35+.65*np(d,d+1.6,l),g=tp(u,a[f],h);g<a[f]&&(a[f]=g,l<d&&(o[f]=r))}}},u=(e,t,n,r,a,o,s)=>{let c=[],l=Math.atan2(r,n),u=l;for(let n=0;n<a;n+=.5)c.push([e,t]),l=u+i(n*.045+s,s)*o,e+=Math.cos(l)*.5,t+=Math.sin(l)*.5;return c},d=u(-4+(t()-.5)*8,104,0,-1,128,.9,11.3);l(d,e=>tp(-2,-.35,e**.8),e=>tp(4.2,1.6,e),1),c.push(d);for(let e=0;e<6;e++){let n=Math.floor(tp(.12,.8,(e+t()*.6)/6)*d.length),[r,i]=d[n],a=e%2==0?1:-1,o=24+t()*30,s=u(r,i,a,-.35-t()*.5,o,1.1,37.1+e*13.7),f=tp(-1.6,-.35,n/d.length);l(s,e=>tp(f+.2,.75,e),e=>tp(2,.7,e),1),c.push(s)}let f=d[d.length-1],p={x:f[0]+9,z:f[1]-6};for(let e=0;e<256;e++)for(let t=0;t<256;t++){let r=Math.hypot(ap(t)-p.x,op(e)-p.z),i=e*256+t,s=np(17,9,r);s>0&&(a[i]=tp(a[i],Math.max(a[i],2.25+n(t*.2,e*.2)*.12),s),s>.5&&(o[i]=5))}let m=0,h=1e9;for(let e=0;e<d.length;e++){let t=Math.abs(d[e][1]-24);t<h&&(h=t,m=e)}let[g,_]=d[m],v=cp(_),y=sp(g)+2+15,b=v,x={i0:y+1,j0:v-3,w:9,d:7},S=(e,t,n,r)=>{let i=t*256+e;a[i]=n,o[i]=r};for(let e=x.j0-3;e<x.j0+x.d+3;e++)for(let t=x.i0-2;t<x.i0+x.w+3;t++){let n=e*256+t;a[n]=Math.max(.9,Math.min(a[n],1.08))}for(let e=sp(g);e<y;e++){let t=(e-sp(g))/(y-sp(g));for(let n=-1;n<=1;n++){let r=(v+n)*256+e,i=n===0?tp(-.7,-.3,t):tp(.2,.55,t);i<a[r]&&(a[r]=i,o[r]=2)}}for(let e=x.j0-1;e<=x.j0+x.d;e++)for(let t=x.i0-1;t<=x.i0+x.w;t++){let n=t>=x.i0&&t<x.i0+x.w&&e>=x.j0&&e<x.j0+x.d;S(t,e,n?rp:ip,n?4:3)}S(y,b,-.3,2);let C={i:y,j:b,dir:`x`},w=null;for(let e=1;e<c.length&&!w;e++){let t=c[e];if(t[3][0]>t[0][0])continue;let[n,r]=t[Math.floor(t.length*.22)],[i,a]=t[Math.floor(t.length*.22)+2];w={x:n,z:r,ang:Math.atan2(a-r,i-n)+Math.PI/2}}return{seed:e,h:a,kind:o,creeks:c,main:d,village:p,gate:C,pan:x,weir:w,coastJ:s,noise:n,rnd:t}}var up=e=>new H(e),q={mudDeep:up(`#4f4a3f`),mud:up(`#857760`),mudWet:up(`#4a4234`),sand:up(`#c4ad84`),sandWet:up(`#7d6c52`),marshLow:up(`#6f7a43`),marshHigh:up(`#8f9150`),marshGold:up(`#a99a58`),lavender:up(`#8a7a96`),hill:up(`#9c9762`),gorse:up(`#56603a`),village:up(`#9a8c6a`),clay:up(`#a48764`),clayWet:up(`#6b5641`),panFloor:up(`#a29682`),salt:up(`#f5f1e8`),bankDug:up(`#6f5f48`),waterShallow:up(`#8fa59a`),waterDeep:up(`#2f4b52`),foam:up(`#f1ede2`),brine:up(`#bda899`),timber:up(`#4a3b2c`),timberLight:up(`#7d6449`),tar:up(`#2c2925`),limewash:up(`#e6dcc6`),ochre:up(`#a5583a`),thatch:up(`#b0975f`),sail:up(`#d9c7a2`),sailOchre:up(`#b8693f`),iron:up(`#3a3b3a`)},dp=[[-.35,`#18223a`,`#34405e`,`#9fb4e0`,0,.66],[-.08,`#283554`,`#6f6482`,`#c08a7a`,.15,.6],[.03,`#4a5a80`,`#e0a070`,`#ffd0ab`,.9,.62],[.18,`#6688ae`,`#f2c48e`,`#ffdab0`,2,.78],[.4,`#7298bf`,`#efd6b0`,`#ffe2b8`,2.8,.9],[.95,`#7aa0c6`,`#e8dcc4`,`#fff0dc`,3,.95]],fp=t({DAY:()=>90,HW_HOUR:()=>15,MSL:()=>0,SEASON_DAYS:()=>14,START_DAY:()=>2,START_HOUR:()=>14,START_T:()=>mp,SURGE_END:()=>_p,SURGE_PEAK:()=>hp,SURGE_START:()=>gp,SURGE_WARNING:()=>vp,TIDE:()=>45,amplitude:()=>xp,clockText:()=>Op,dayNumber:()=>Ep,dayOf:()=>Tp,hourOf:()=>Dp,hourToT:()=>pp,level:()=>Sp,moonPhase:()=>kp,nextTurn:()=>wp,rate:()=>Cp,springNeapWord:()=>Ap,sunState:()=>jp,surge:()=>bp,weather:()=>Np}),pp=(e,t)=>(e+t/24)*90,mp=pp(2,14),hp=mp+1125+3,gp=hp-48,_p=hp+48,vp=mp+810,yp=56.25;function bp(e){return e<=gp||e>=_p?0:Math.cos((e-hp)/48*Math.PI/2)**2}function xp(e){let t=e/90,n=.95-.36*Math.cos(2*Math.PI*t/14);return n+(1.32-n)*bp(e)}function Sp(e){let t=2*Math.PI*(e-yp)/45;return 0+xp(e)*(Math.cos(t)+.08*Math.cos(2*t-.6))+bp(e)*1.45}function Cp(e){return(Sp(e+.25)-Sp(e-.25))*2}function wp(e,t){let n=.25,r=Cp(e);for(let i=e+n;i<e+54;i+=n){let e=Cp(i);if(t===`high`&&r>0&&e<=0||t===`low`&&r<0&&e>=0)return i;r=e}return e+45}var Tp=e=>Math.floor(e/90),Ep=e=>Math.floor(e/90+1e-9)-2+1,Dp=e=>(e/90%1+1)%1*24;function Op(e){let t=Dp(e),n=Math.floor(t),r=Math.floor((t-n)*60);return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function kp(e){return Math.PI/2+Math.PI*e/1260}function Ap(e){if(bp(e)>.01)return`Equinox storm surge`;let t=xp(e);return t>1.18?`Spring tides`:t<.72?`Neap tides`:Math.sin(2*Math.PI*(e/90)/14)>0?`Range growing`:`Range shrinking`}function jp(e){let t=Dp(e),n=(t-3.5)/18;return{h:t,dayFrac:n,elev:Math.sin(Math.PI*n)*.62,az:Math.PI*(n-.5)*1.6}}var Mp=(e,t,n)=>Math.min(1,Math.max(0,(e-t)/(n-t)));function Np(e){let t=.3*Mp(e,vp+20,gp-30)**2,n=Mp(e,gp-30,gp+8)*(1-Mp(e,_p-10,_p+22)),r=Math.max(t*(1-Mp(e,_p,_p+22)),n);return r*r*(3-2*r)}var Pp=new H,Fp=class{constructor(e,t){this.world=t;let n=new hd({canvas:e,antialias:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.shadowMap.enabled=!0,n.shadowMap.type=1,n.toneMapping=4,n.toneMappingExposure=1,this.r=n,this.scene=new Bn,this.camera=new Ns(42,1,.5,2400),this.scene.fog=new zn(14731424,120,520),this.sun=new Is(16777215,2.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let r=this.sun.shadow.camera;r.left=-70,r.right=70,r.top=70,r.bottom=-70,r.near=1,r.far=400,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target),this.hemi=new xs(12571878,7035456,.9),this.scene.add(this.hemi),this.moonLight=new Is(10466528,0),this.scene.add(this.moonLight,this.moonLight.target),this.uniforms={uTime:{value:0},uSunDir:{value:new V(0,1,0)},uSunColor:{value:new H(1,1,1)},uZenith:{value:new H},uHorizon:{value:new H},uMoonDir:{value:new V(0,1,0)},uMoonPhase:{value:0},uNight:{value:0},uFogColor:{value:this.scene.fog.color},uFogNear:{value:120},uFogFar:{value:520},uTide:{value:0},uStorm:{value:0},uFlash:{value:0}},this.buildSky(),this.buildTerrain(),this.buildWater(),this.buildSea()}buildSky(){let e=new Ro(1800,48,24),t=new Jo({side:1,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,fragmentShader:`
        uniform vec3 uZenith, uHorizon, uSunColor, uSunDir, uMoonDir;
        uniform float uMoonPhase, uNight, uTime, uStorm, uFlash;
        varying vec3 vDir;
        float vn3(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5453);
          float c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5453), e=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5453);
          return mix(mix(a,b,f.x), mix(c,e,f.x), f.y); }
        float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        void main() {
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));
          // below the horizon: the sea haze
          col = mix(col, uHorizon * 0.92, smoothstep(0.0, -0.08, d.y));
          float sd = max(dot(d, uSunDir), 0.0);
          col += uSunColor * (pow(sd, 6.0) * 0.18 + pow(sd, 90.0) * 0.5) * (1.0 - uNight);
          col += uSunColor * smoothstep(0.9995, 0.99975, sd) * 3.0 * (1.0 - uNight);
          // stars
          vec3 sp = floor(d * 260.0);
          float st = step(0.9975, hash(sp)) * smoothstep(0.05, 0.3, d.y);
          col += vec3(st) * uNight * 0.9;
          // the moon, with its phase: it is the tide's clock
          float md = dot(d, uMoonDir);
          if (md > 0.9993) {
            vec3 up = abs(uMoonDir.y) > 0.99 ? vec3(1,0,0) : vec3(0,1,0);
            vec3 mx = normalize(cross(up, uMoonDir));
            vec3 my = cross(uMoonDir, mx);
            vec3 rel = d - uMoonDir;
            vec2 uv = vec2(dot(rel, mx), dot(rel, my)) / 0.0374;
            float r2 = dot(uv, uv);
            if (r2 < 1.0) {
              vec3 n = vec3(uv, sqrt(1.0 - r2));
              vec3 L = vec3(sin(uMoonPhase), 0.0, -cos(uMoonPhase));
              float lit = smoothstep(-0.05, 0.1, dot(n, L));
              vec3 moonCol = vec3(0.95, 0.93, 0.85) * (0.12 + 0.88 * lit);
              col = mix(col, moonCol * mix(0.9, 1.4, uNight), smoothstep(1.0, 0.85, r2));
            }
          }
          col += uMoonDir.y > 0.0 ? vec3(0.6,0.7,0.9) * pow(max(md, 0.0), 300.0) * 0.25 * uNight : vec3(0.0);
          // fair-weather cloud streaks always; a low racing deck as the gale sets in
          vec2 cp = d.xz / max(d.y + 0.12, 0.05);
          float cl = vn3(cp * 1.3 + vec2(uTime * 0.01, 0.0)) * 0.6 + vn3(cp * 3.7 - vec2(uTime * 0.02, uTime * 0.005)) * 0.4;
          float fair = smoothstep(0.62, 0.9, cl) * smoothstep(0.0, 0.25, d.y) * 0.35;
          float deck = smoothstep(0.25 - uStorm * 0.3, 0.75, vn3(cp * 2.2 + vec2(uTime * 0.09, uTime * 0.03)) * 0.55 + cl * 0.45);
          vec3 cloudLit = mix(uHorizon, vec3(1.0), 0.35) * (1.0 - uNight * 0.75);
          col = mix(col, cloudLit, fair * (1.0 - uStorm));
          col = mix(col, uZenith * 0.72 + uHorizon * 0.12, deck * uStorm * smoothstep(-0.05, 0.12, d.y));
          col += vec3(0.75, 0.8, 0.95) * uFlash * (0.4 + 0.6 * deck);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.sky=new U(e,t),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}buildTerrain(){let{h:e}=this.world,t=65536,n=new Float32Array(t*3);for(let t=0;t<256;t++)for(let r=0;r<256;r++){let i=t*256+r;n[i*3]=ap(r),n[i*3+1]=e[i],n[i*3+2]=op(t)}let r=new Uint32Array(390150),i=0;for(let e=0;e<255;e++)for(let t=0;t<255;t++){let n=e*256+t,a=n+1,o=n+256,s=o+1;t+e&1?(r[i++]=n,r[i++]=o,r[i++]=a,r[i++]=a,r[i++]=o,r[i++]=s):(r[i++]=n,r[i++]=o,r[i++]=s,r[i++]=n,r[i++]=s,r[i++]=a)}let a=new Pr;a.setAttribute(`position`,new yr(n,3)),a.setAttribute(`normal`,new yr(new Float32Array(t*3),3)),a.setAttribute(`color`,new yr(new Float32Array(t*3),3)),a.setAttribute(`aWet`,new yr(new Float32Array(t),1)),a.setIndex(new yr(r,1)),this.tGeo=a,this.baseCol=new Float32Array(t*3),this.recomputeTerrain(0,0,255,255);let o=new Xo({vertexColors:!0,roughness:.95,metalness:0});o.onBeforeCompile=e=>{e.uniforms.uTime=this.uniforms.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aWet;
varying float vWet;
varying vec3 vWPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vWet = aWet;
vWPos = (modelMatrix * vec4(position,1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
          varying float vWet; varying vec3 vWPos; uniform float uTime;
          float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
          float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
            return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
          float g = vn(vWPos.xz * 2.3) * 0.6 + vn(vWPos.xz * 7.1) * 0.4;
          float rip = sin(vWPos.x * 3.1 + vn(vWPos.xz * 0.6) * 6.0) * 0.5 + 0.5;
          diffuseColor.rgb *= 0.86 + 0.24 * g + 0.05 * rip * vWet;
          // close up, grass breaks into brush strokes and mud into speckle; far off both fade out
          float grassy = smoothstep(0.0, 0.03, diffuseColor.g - max(diffuseColor.r * 0.82, diffuseColor.b * 1.4)) * (1.0 - vWet);
          vec2 q = mat2(0.8, -0.6, 0.6, 0.8) * vWPos.xz;
          float stroke = vn(q * vec2(7.0, 1.9)) * 0.6 + vn(q * vec2(15.0, 3.5)) * 0.4;
          float fine = 1.0 - smoothstep(0.15, 0.6, fwidth(q.x * 7.0));
          diffuseColor.rgb *= 1.0 + fine * (grassy * (stroke - 0.5) * 0.42 + (1.0 - grassy) * (vn(vWPos.xz * 11.0) - 0.5) * 0.14);
          diffuseColor.rgb += fine * grassy * smoothstep(0.78, 0.95, stroke) * vec3(0.05, 0.045, 0.01);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
          // salt crust glints: it is the brightest thing on the marsh
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float saltK = smoothstep(0.6, 0.8, lum);
          float glint = step(0.985, h21(floor(vWPos.xz * 7.0) + floor(uTime * 2.5)));
          totalEmissiveRadiance += diffuseColor.rgb * saltK * (0.18 + 1.6 * glint);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
          roughnessFactor = mix(0.97, 0.82, smoothstep(0.35, 1.0, vWet));`)},this.terrain=new U(a,o),this.terrain.receiveShadow=!0,this.scene.add(this.terrain)}baseColorAt(e,t,n){let{h:r,kind:i,noise:a}=this.world,o=t*256+e,s=r[o],c=i[o],l=a(e*.11,t*.11)*.5+.5,u=a(e*.31+50,t*.31)*.5+.5;if(c===3)n.copy(q.clay).multiplyScalar(.92+u*.12);else if(c===4)n.copy(q.panFloor);else if(c===6)n.copy(q.sand).lerp(q.bankDug,l*.25);else if(c===5)n.copy(q.village).lerp(q.marshHigh,l*.35);else if(c===2)n.copy(q.bankDug);else if(s<.55){n.copy(q.mudDeep).lerp(q.mud,np(-2.2,.3,s));let r=this.world.coastJ(e);n.lerp(q.sand,np(r+2,r+12,t)*np(-1.6,0,s)*.8)}else if(s<1)n.copy(q.mud).lerp(q.marshLow,np(.55,1,s)*(.6+l*.4));else if(s<2){let r=a(e*.028+20,t*.028-7)*.5+.5;n.copy(q.marshLow).lerp(q.marshHigh,np(1,1.5,s+l*.3)),n.lerp(q.marshGold,u*.25+np(.55,.85,r)*.45),n.lerp(q.gorse,np(.4,.15,r)*.45),u>.78&&s<1.45&&n.lerp(q.lavender,(u-.78)*2.2)}else n.copy(q.marshHigh).lerp(q.hill,np(2,3,s)),l>.66&&n.lerp(q.gorse,np(.66,.85,l)*.8)}recomputeTerrain(e,t,n,r){let{h:i}=this.world,a=this.tGeo.attributes.position.array,o=this.tGeo.attributes.normal.array;e=Math.max(0,e),t=Math.max(0,t),n=Math.min(255,n),r=Math.min(255,r);for(let s=t;s<=r;s++)for(let t=e;t<=n;t++){let e=s*256+t;a[e*3+1]=i[e];let n=i[s*256+Math.max(0,t-1)],r=i[s*256+Math.min(255,t+1)],c=i[Math.max(0,s-1)*256+t],l=i[Math.min(255,s+1)*256+t],u=n-r,d=c-l,f=Math.hypot(u,2,d);o[e*3]=u/f,o[e*3+1]=2/f,o[e*3+2]=d/f,this.baseColorAt(t,s,Pp),this.baseCol[e*3]=Pp.r,this.baseCol[e*3+1]=Pp.g,this.baseCol[e*3+2]=Pp.b}this.tGeo.attributes.position.needsUpdate=!0,this.tGeo.attributes.normal.needsUpdate=!0,this.tGeo.computeBoundingSphere()}shadeTerrain(e,t,n,r){let i=this.tGeo.attributes.color.array,a=this.tGeo.attributes.aWet.array,{h:o}=this.world,s=this.baseCol,c=(e,t)=>{let n=1-.42*t;i[e*3]=s[e*3]*n,i[e*3+1]=s[e*3+1]*n,i[e*3+2]=s[e*3+2]*(n+.03*t),a[e]=t};if(r)for(let e=0;e<256;e++)for(let n=0;n<256;n++){if(n>=64&&n<192&&e>=96&&e<224)continue;let r=e*256+n;c(r,np(t+.25,t-.02,o[r]))}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let o=t*128+r,s=(96+t)*256+64+r;c(s,e.wet[o]);let l=Math.min(.8,(this.world.silt?.[s]||0)*1.8);l>0&&(i[s*3]=tp(i[s*3],q.mud.r,l),i[s*3+1]=tp(i[s*3+1],q.mud.g,l),i[s*3+2]=tp(i[s*3+2],q.mud.b,l));let u=n(o);if(u>0){let n=this.world.noise((64+r)*.45,(96+t)*.45)*.5+.5,c=ep(u*1.5-n*.25,0,1)*(1-.6*np(.02,.12,e.d[o]));i[s*3]=tp(i[s*3],q.salt.r,c),i[s*3+1]=tp(i[s*3+1],q.salt.g,c),i[s*3+2]=tp(i[s*3+2],q.salt.b,c),a[s]=Math.max(a[s],c*.7)}}this.tGeo.attributes.color.needsUpdate=!0,this.tGeo.attributes.aWet.needsUpdate=!0}waterShader(e){return new Jo({transparent:!0,depthWrite:!1,uniforms:{...this.uniforms,uHeight:{value:null}},vertexShader:`
        ${e?``:`attribute float aDepth; attribute vec2 aFlow; attribute float aBrine;`}
        varying float vDepth; varying vec2 vFlow; varying float vBrine; varying vec3 vWPos;
        ${e?`uniform sampler2D uHeight; uniform float uTide;`:``}
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          ${e?`
            wp.y = uTide;
            vec2 uv = (wp.xz + vec2(128.0, 128.0) + 0.5) / vec2(256.0, 256.0);
            float bed = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -5.0 : texture2D(uHeight, uv).r;
            vDepth = uTide - bed; vFlow = vec2(0.0); vBrine = -1.0;`:`
            vDepth = aDepth; vFlow = aFlow; vBrine = aBrine;`}
          vWPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,fragmentShader:`
        uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uFogColor;
        uniform float uTime, uNight, uFogNear, uFogFar, uStorm, uFlash;
        ${e?`uniform sampler2D uHeight; uniform float uTide;`:``}
        varying float vDepth; varying vec2 vFlow; varying float vBrine; varying vec3 vWPos;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
        float waves(vec2 p) {
          vec2 fl = clamp(vFlow, -2.0, 2.0) * 0.6;
          float ph = fract(uTime * 0.1);
          p += vec2(uTime * 1.6, uTime * 0.7) * uStorm;
          return vn(p * 0.9 + vec2(uTime * 0.21, uTime * 0.13) - fl * ph * 6.0) * 0.5
               + vn(p * 2.3 - vec2(uTime * 0.17, -uTime * 0.29)) * 0.3
               + vn(p * 5.7 + vec2(uTime * 0.4, uTime * 0.05)) * 0.2;
        }
        void main() {
          ${e?`
          vec2 uvh = (vWPos.xz + vec2(128.0, 128.0) + 0.5) / vec2(256.0, 256.0);
          float depth = vDepth;
          if (uvh.x >= 0.0 && uvh.x <= 1.0 && uvh.y >= 0.0 && uvh.y <= 1.0) depth = uTide - texture2D(uHeight, uvh).r;
          vec2 rel = vWPos.xz - vec2(${ap(64)}.0, ${op(96)}.0);
          if (rel.x > 0.5 && rel.y > 0.5 && rel.x < 126.5 && rel.y < 126.5) discard;
          if (depth <= 0.0) discard;`:`
          float depth = vDepth;
          if (depth <= 0.002) discard;`}
          vec2 p = vWPos.xz;
          float e = 0.15;
          float w0 = waves(p);
          float panWater = smoothstep(-0.2, 0.0, vBrine);
          float amp = (0.32 + 0.9 * uStorm * (1.0 - panWater)) * smoothstep(0.0, 0.5, depth) + 0.05;
          vec3 n = normalize(vec3((waves(p - vec2(e, 0.0)) - waves(p + vec2(e, 0.0))) * amp, 1.0,
                                  (waves(p - vec2(0.0, e)) - waves(p + vec2(0.0, e))) * amp));
          vec3 V = normalize(cameraPosition - vWPos);
          float fres = pow(1.0 - max(dot(n, V), 0.0), 4.0);
          float dd = smoothstep(0.0, 2.2, depth);
          vec3 shallow = vec3(${q.waterShallow.r.toFixed(4)}, ${q.waterShallow.g.toFixed(4)}, ${q.waterShallow.b.toFixed(4)});
          vec3 deep = vec3(${q.waterDeep.r.toFixed(4)}, ${q.waterDeep.g.toFixed(4)}, ${q.waterDeep.b.toFixed(4)});
          vec3 brine = vec3(${q.brine.r.toFixed(4)}, ${q.brine.g.toFixed(4)}, ${q.brine.b.toFixed(4)});
          vec3 col = mix(shallow, deep, dd);
          // Still brine is translucent green, becoming rose as it concentrates.
          col = mix(col, shallow * 0.55 + deep * 0.45, panWater * 0.8);
          col = mix(col, brine, clamp(vBrine, 0.0, 1.0) * 0.5);
          col *= 1.0 + panWater * (w0 - 0.5) * 0.22;
          float light = 0.35 + 0.65 * max(uSunDir.y, 0.0) + 0.22 * uNight;
          vec3 lit = mix(vec3(0.38, 0.45, 0.62), uSunColor * 0.55 + 0.45, smoothstep(-0.05, 0.15, uSunDir.y)) * light + 0.08 + 0.05 * uNight;
          col *= lit;
          vec3 sky = mix(uHorizon, uZenith, 0.35);
          col = mix(col, sky, fres * 0.75);
          vec3 R = reflect(-V, n);
          float spec = pow(max(dot(R, uSunDir), 0.0), 180.0) * 3.0 + pow(max(dot(R, uSunDir), 0.0), 18.0) * 0.18;
          col += uSunColor * spec * mix(1.0, 0.25, panWater) * (1.0 - uNight) * (1.0 - 0.85 * uStorm) * step(0.0, uSunDir.y);
          // foam on the shallow edge and where the water runs fast
          float speed = length(vFlow);
          // a lace of foam only on the moving edge; a thin film just reads as wet
          float edge = smoothstep(0.004, 0.02, depth) * (1.0 - smoothstep(0.05, 0.16, depth));
          float lace = smoothstep(0.3, 0.7, vn(p * 4.0 + uTime * 0.3) * 0.65 + vn(p * 11.0 - uTime * 0.2) * 0.35);
          // a second, broken line further out that breathes in and out with the wavelets
          float swash = 0.5 + 0.5 * sin(depth * 38.0 - uTime * 1.7 + vn(p * 0.7) * 6.0);
          float outer = smoothstep(0.08, 0.14, depth) * (1.0 - smoothstep(0.2, 0.32, depth)) * smoothstep(0.7, 0.95, swash) * lace;
          // fast water churns white: over a weir, through an open sluice, past a mill wheel
          vec2 drift = vFlow * fract(uTime * 0.25) * 4.0;
          float churn = vn(p * 3.0 - drift) * 0.6 + vn(p * 7.5 - drift * 1.7 + uTime * 0.5) * 0.4;
          float streak = smoothstep(0.64, 0.90, churn) * smoothstep(0.8, 2.0, speed) * 0.5;
          float caps = smoothstep(0.7, 0.86, vn(p * vec2(0.3, 0.9) + vec2(uTime * 0.8, uTime * 0.35)) * 0.5 + vn(p * vec2(1.2, 3.0) + vec2(uTime * 1.3, 0.0)) * 0.2 + w0 * 0.3) * smoothstep(0.4, 1.5, depth) * uStorm * 0.75;
          ${e?`
          float surf = smoothstep(0.75, 0.97, 0.5 + 0.5 * sin(depth * 5.0 + uTime * 1.25 + vn(p * 0.15) * 5.0)) * (1.0 - smoothstep(0.25, 1.6 + uStorm * 2.0, depth));
          outer = max(outer, surf * lace * (0.14 + 0.45 * uStorm)); // flooded marsh stays water, not white patches`:``}
          float foam = clamp(edge * lace * ${e?`0.4`:`0.95`} + outer * 0.55 + streak * 0.6 + caps * 0.8, 0.0, 1.0);
          vec3 foamCol = vec3(0.95, 0.93, 0.88) * min(vec3(1.0), lit * 1.25);
          col = mix(col, foamCol, foam * 0.85 * (1.0 - panWater));
          float alpha = mix(0.5, 0.93, smoothstep(0.0, 1.2, depth));
          alpha = max(alpha, foam * 0.7) * smoothstep(0.0, 0.05, depth);
          alpha = mix(alpha, 1.0, fres * 0.4);
          alpha = mix(alpha, max(alpha, 0.82) * smoothstep(0.0, 0.03, depth), panWater);
          col += vec3(0.6, 0.65, 0.8) * uFlash * 0.35;
          float fd = length(cameraPosition - vWPos);
          col = mix(col, uFogColor, smoothstep(uFogNear, uFogFar, fd));
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`})}buildWater(){let e=16384,t=new Float32Array(e*3);for(let e=0;e<128;e++)for(let n=0;n<128;n++){let r=e*128+n;t[r*3]=ap(64+n),t[r*3+2]=op(96+e)}let n=new Uint32Array(96774),r=0;for(let e=0;e<127;e++)for(let t=0;t<127;t++){let i=e*128+t,a=i+1,o=i+128,s=o+1;64+t+96+e&1?(n[r++]=i,n[r++]=o,n[r++]=a,n[r++]=a,n[r++]=o,n[r++]=s):(n[r++]=i,n[r++]=o,n[r++]=s,n[r++]=i,n[r++]=s,n[r++]=a)}let i=new Pr;i.setAttribute(`position`,new yr(t,3)),i.setAttribute(`aDepth`,new yr(new Float32Array(e),1)),i.setAttribute(`aFlow`,new yr(new Float32Array(e*2),2)),i.setAttribute(`aBrine`,new yr(new Float32Array(e),1)),i.setIndex(new yr(n,1)),i.boundingSphere=new Er(new V(ap(128),0,op(160)),128),this.wGeo=i,this.water=new U(i,this.waterShader(!1)),this.water.renderOrder=2,this.water.frustumCulled=!1,this.scene.add(this.water)}updateWater(e,t){let n=this.wGeo.attributes.position.array,r=this.wGeo.attributes.aDepth.array,i=this.wGeo.attributes.aFlow.array,a=this.wGeo.attributes.aBrine.array,{b:o,d:s,vx:c,vz:l}=e;for(let e=0;e<128;e++)for(let u=0;u<128;u++){let d=e*128+u,f;if(s[d]>.004)f=o[d]+s[d],r[d]=s[d];else{let t=-1e9;u>0&&s[d-1]>.004&&(t=Math.max(t,o[d-1]+s[d-1])),u<127&&s[d+1]>.004&&(t=Math.max(t,o[d+1]+s[d+1])),e>0&&s[d-128]>.004&&(t=Math.max(t,o[d-128]+s[d-128])),e<127&&s[d+128]>.004&&(t=Math.max(t,o[d+128]+s[d+128])),f=t>-1e8?Math.min(t,o[d]+.02):o[d]-.4,r[d]=t>-1e8?Math.max(0,t-o[d])*.5:0}n[d*3+1]=f,i[d*2]=c[d],i[d*2+1]=l[d],a[d]=t(d)}this.wGeo.attributes.position.needsUpdate=!0,this.wGeo.attributes.aDepth.needsUpdate=!0,this.wGeo.attributes.aFlow.needsUpdate=!0,this.wGeo.attributes.aBrine.needsUpdate=!0}buildSea(){let e=new Ei(this.world.h,256,256,k,_);e.magFilter=c,e.minFilter=c,e.needsUpdate=!0,this.heightTex=e;let t=new Po(3600,3600,1,1).rotateX(-Math.PI/2),n=this.waterShader(!0);n.uniforms.uHeight.value=e,n.uniforms.uTide=this.uniforms.uTide,this.sea=new U(t,n),this.sea.renderOrder=1,this.sea.frustumCulled=!1,this.scene.add(this.sea)}updateLight(e,t,n=e){let r=jp(e),i=this.uniforms;i.uTime.value=n%400;let a=r.dayFrac>=0&&r.dayFrac<=1?r.elev:-Math.min(.35,Math.min(Math.abs(r.dayFrac),Math.abs(r.dayFrac-1))*1.4),o=r.az+Math.PI*.62,s=new V(Math.cos(a)*Math.sin(o),Math.sin(a),Math.cos(a)*Math.cos(o)).normalize();i.uSunDir.value.copy(s);let c=0;for(;c<dp.length-2&&a>dp[c+1][0];)c++;let l=dp[c],u=dp[c+1],d=ep((a-l[0])/(u[0]-l[0]),0,1);i.uZenith.value.set(l[1]).lerp(Pp.set(u[1]),d),i.uHorizon.value.set(l[2]).lerp(Pp.set(u[2]),d),i.uSunColor.value.set(l[3]).lerp(Pp.set(u[3]),d);let f=Np(e);i.uStorm.value=f;let p=1-.62*np(.12,-.18,a);i.uZenith.value.lerp(Pp.set(`#2c3a44`).multiplyScalar(p),f*.9),i.uHorizon.value.lerp(Pp.set(`#6f7d78`).multiplyScalar(p),f*.85),i.uSunColor.value.lerp(Pp.set(`#b9c9cc`),f*.75);let m=n,h=Math.floor(m/3.7),g=m-h*3.7,_=Math.abs(Math.sin(h*91.7)*4375.85)%1,v=f>.7&&_<.45?Math.max(0,1-g/.12)+Math.max(0,1-Math.abs(g-.25)/.1)*.7:0;i.uFlash.value=v*(f-.7)/.3;let y=tp(l[4],u[4],d),b=tp(l[5],u[5],d),x=np(.12,-.18,a);i.uNight.value=x,this.scene.fog.color.copy(i.uHorizon.value).lerp(i.uZenith.value,.15+f*.2),this.scene.fog.near=tp(120,30,f),this.scene.fog.far=tp(520,230,f),i.uFogNear.value=this.scene.fog.near,i.uFogFar.value=this.scene.fog.far,this.r.setClearColor(this.scene.fog.color),this.sun.color.copy(i.uSunColor.value),this.sun.intensity=y*(1-f*.78),this.sun.position.set(t.x+s.x*160,Math.max(s.y,.05)*160,t.z+s.z*160),this.sun.target.position.set(t.x,0,t.z),this.sun.visible=y>.01;let S=f*np(.2,-.08,a);this.hemi.color.copy(i.uZenith.value).lerp(Pp.set(`#ffffff`),.35+.25*x+.15*S),this.hemi.groundColor.set(`#5f523e`).multiplyScalar(.6+.4*(1-x)),this.hemi.intensity=(b*1.05+x*.75)*(1-f*.12)+f*x*.15+S*.45+i.uFlash.value*1.6;let C=2*Math.PI*(e/90-15/24),w=Math.cos(C)*.95,T=Math.PI*.62+Math.sin(C)*1.4;i.uMoonDir.value.set(Math.cos(w)*Math.sin(T),Math.sin(w),Math.cos(w)*Math.cos(T)).normalize(),i.uMoonPhase.value=kp(e);let E=np(-.05,.2,i.uMoonDir.value.y),D=.5-.5*Math.cos(kp(e));this.moonLight.intensity=x*(.45+E*(.4+.6*D))+S*.4;let O=i.uMoonDir.value;return this.moonLight.position.set(t.x+O.x*150,Math.max(O.y,.1+S*.35)*150,t.z+O.z*150),this.moonLight.target.position.set(t.x,0,t.z),this.r.toneMappingExposure=1+x*.5,{elev:a,night:x}}resize(e,t){this.lastSize=[e,t],this.r.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setQuality(e){this.pixelCap=e.pixel,this.r.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixel)),this.sun.castShadow=e.shadow>0,e.shadow>0&&this.sun.shadow.mapSize.x!==e.shadow&&(this.sun.shadow.mapSize.set(e.shadow,e.shadow),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.lastSize&&this.resize(this.lastSize[0],this.lastSize[1])}render(){this.r.render(this.scene,this.camera)}},Ip=(e,t={})=>new Xo({color:e,roughness:.9,metalness:0,flatShading:!0,...t}),J={timber:Ip(q.timber),timberLight:Ip(q.timberLight),tar:Ip(q.tar),limewash:Ip(q.limewash),ochre:Ip(q.ochre),thatch:Ip(q.thatch),hull:Ip(`#5b4733`,{emissive:`#5b4733`}),sail:Ip(q.sail,{side:2,emissive:q.sail}),sailOchre:Ip(q.sailOchre,{side:2,emissive:q.sailOchre}),iron:Ip(q.iron,{roughness:.6}),window:new Xo({color:`#2a2622`,emissive:`#ffb45a`,emissiveIntensity:0,roughness:.5}),salt:Ip(q.salt,{roughness:.6}),fish:new Xo({color:`#b9c3c4`,roughness:.3,metalness:.4,flatShading:!0})};function Lp(e,t,n){let r=t+128,i=n+128,a=Math.max(0,Math.min(254,Math.floor(r))),o=Math.max(0,Math.min(254,Math.floor(i))),s=Math.min(1,Math.max(0,r-a)),c=Math.min(1,Math.max(0,i-o)),l=e.h,u=l[o*256+a],d=l[o*256+a+1],f=l[(o+1)*256+a],p=l[(o+1)*256+a+1];return u*(1-s)*(1-c)+d*s*(1-c)+f*(1-s)*c+p*s*c}var Rp=(e,t,n,r=0,i=0,a=0)=>new pa(e,t,n).translate(r,i,a),zp=(e,t,n,r,i=0,a=0,o=0)=>new ma(e,t,n,r).translate(i,a,o);function Bp(e,t,n){let r=new Ka;r.moveTo(-t/2-.15,0),r.lineTo(0,n),r.lineTo(t/2+.15,0),r.lineTo(-t/2-.15,0);let i=new jo(r,{depth:e+.3,bevelEnabled:!1});return i.translate(0,0,-(e+.3)/2).rotateY(Math.PI/2),i}function Vp(e,t){let n=Zf(e.seed^119),r=new jn,i=[],{village:a}=e,o=[];for(let t=0;t<200&&i.length<10;t++){let t=n()*Math.PI*2,s=3+n()*9,c=a.x+Math.cos(t)*s,l=a.z+Math.sin(t)*s*.8;if(i.some(e=>Math.hypot(e.x-c,e.z-l)<4.6))continue;let u=Lp(e,c,l);if(u<1.7)continue;i.push({x:c,z:l});let d=i.length%3,f=3+n()*1.6,p=2.2+n()*.6,m=1.6+n()*.5,h=new jn,g=d===1?J.tar:J.limewash,_=d===0?J.thatch:J.ochre,v=new U(Rp(f,m,p,0,m/2,0),g),y=new U(Bp(f,p,1.2+n()*.4).translate(0,m,0),_),b=new U(Rp(f+.2,.5,p+.2,0,-.15,0),J.timber),x=new U(gd([Rp(.45,.45,.06,-f*.25,m*.55,p/2+.01),Rp(.45,.45,.06,f*.22,m*.55,p/2+.01),Rp(.45,.45,.06,0,m*.55,-p/2-.01)]),J.window),S=new U(Rp(.6,1,.08,f*.02,.5,p/2+.02),J.timber);h.add(v,y,b,x,S),d!==1&&h.add(new U(Rp(.4,1,.4,f*.35,m+.9,0),J.limewash)),h.position.set(c,u,l),h.rotation.y=Math.atan2(e.main[e.main.length-1][0]-c,e.main[e.main.length-1][1]-l)+(n()-.5)*.5,h.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),r.add(h),o.push(h)}let s=e.main[e.main.length-6],c=e.main[e.main.length-14],l=Math.atan2(s[0]-c[0],s[1]-c[1]),u=new jn,d=[];for(let e=0;e<6;e++)d.push(Rp(.5,.12,2.6,0,0,e*.55));let f=new U(gd(d).rotateY(Math.PI/2),J.timberLight);u.add(f);for(let e=0;e<4;e++)for(let t of[-1.2,1.2]){let n=new U(zp(.12,.14,3.2,6),J.timber);n.position.set(e*.9,-1.4,t),u.add(n)}return u.position.set(s[0]+1.5,1.9,s[1]),u.rotation.y=l,u.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),r.add(u),t.add(r),{group:r,houses:o,quay:u}}function Hp(e=J.sail){let t=new jn,n=5.2,r=1.6,i=new Ka;i.moveTo(-5.2/2,0),i.quadraticCurveTo(-2,r/2,0,r/2),i.quadraticCurveTo(n/2-.4,r/2,n/2,0),i.quadraticCurveTo(n/2-.4,-1.6/2,0,-1.6/2),i.quadraticCurveTo(-2,-1.6/2,-5.2/2,0);let a=new jo(i,{depth:.9,bevelEnabled:!0,bevelThickness:.25,bevelSize:.18,bevelSegments:2,steps:1,curveSegments:10});a.rotateX(Math.PI/2).translate(0,.35,0);let o=a.attributes.position;for(let e=0;e<o.count;e++)o.getY(e)<0&&(o.setX(e,o.getX(e)*.85),o.setZ(e,o.getZ(e)*.55));a.computeVertexNormals();let s=new U(a,J.hull),c=new U(Rp(n*.82,.12,r*.98,0,.36,0),J.ochre),l=new U(zp(.06,.08,5.2,6,.5,2.9,0),J.timber),u=new Ka;u.moveTo(0,0),u.lineTo(2.6,.2),u.lineTo(2.1,3.6),u.lineTo(0,4.3),u.lineTo(0,0);let d=new U(new Io(u).translate(-2.4,0,0).rotateY(Math.PI),e);return d.position.set(.5,.9,0),t.add(s,c,l,d),t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t.userData.sail=d,t}function Up(e,t,n=9e3){let r=Zf(e.seed^1009),i=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2+r(),n=.55+r()*.5,a=new Pr,o=Math.cos(t)*.13,s=Math.sin(t)*.13,c=Math.cos(t)*.22,l=Math.sin(t)*.22;a.setAttribute(`position`,new Sr([-s,0,o,s,0,-o,c,n,l],3)),a.setAttribute(`normal`,new Sr([0,1,0,0,1,0,0,1,0],3)),i.push(a)}let a=gd(i),o=new Xo({color:`#ffffff`,roughness:1,side:2});o.onBeforeCompile=e=>{e.uniforms.uTime={value:0},o.userData.shader=e,e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`float faceDirection = 1.0; vec3 normal = normalize(vNormal); vec3 nonPerturbedNormal = normal;`),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0,0.0,0.0,1.0);
        float sway = sin(uTime * 1.7 + ip.x * 0.35 + ip.z * 0.21) * 0.5 + sin(uTime * 3.1 + ip.x * 1.3) * 0.2;
        transformed.x += sway * 0.12 * position.y;
        transformed.z += sway * 0.05 * position.y;`)};let s=new Fi(a,o,n),c=new nn,l=new Mt,u=new V,d=new V,f=new H,p=new Int32Array(n),m=0;for(let t=0;t<n*6&&m<n;t++){let t=(r()-.5)*248,n=(r()-.5)*248,i=sp(t),a=cp(n),o=a*256+i;if(e.kind[o]!==0)continue;let h=Lp(e,t,n),g=e.noise(i*.07+9,a*.07)*.5+.5;if(h<.85||h>2.6||r()>g*1.3-.2)continue;l.setFromAxisAngle(new V(0,1,0),r()*6.28);let _=.7+r()*.9*np(.85,1.4,h);u.set(_,_*(.8+r()*.6),_),d.set(t,h-.03,n),c.compose(d,l,u),s.setMatrixAt(m,c),f.copy(q.marshLow).lerp(q.marshGold,r()*.8).multiplyScalar(.85+r()*.3),r()<.06&&f.copy(q.lavender),s.setColorAt(m,f),p[m]=o,m++}return s.count=m,s.receiveShadow=!0,t.add(s),{mesh:s,mat:o,clear:e=>{let t=new Set(e),n=new nn().makeScale(0,0,0);for(let e=0;e<m;e++)t.has(p[e])&&s.setMatrixAt(e,n);s.instanceMatrix.needsUpdate=!0}}}var Wp=4.4,Gp={};function Kp(e){let t=e?`open`:`shut`;if(Gp[t]||typeof document>`u`)return Gp[t]||null;let n=document.createElement(`canvas`);n.width=128,n.height=52;let r=n.getContext(`2d`);r.fillStyle=e?`#2c8a4b`:`#b3321f`,r.strokeStyle=`#fff6df`,r.lineWidth=5,r.beginPath(),r.roundRect(4,4,120,44,20),r.fill(),r.stroke(),r.fillStyle=`#fff6df`,r.font=`700 28px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e?`OPEN`:`SHUT`,64,28);let i=new la(n);return i.colorSpace=Ve,Gp[t]=i}function qp(e,t){let n=e.userData.mark;n&&n.userData.open!==t&&(n.userData.open=t,n.material.map=Kp(t),n.material.needsUpdate=!0)}function Jp(e){let t=new jn,n=new U(gd([Rp(.32,3.2,.32,0,1.2,-.95),Rp(.32,3.2,.32,0,1.2,.95),Rp(.4,.3,2.5,0,2.75,0),Rp(.9,.18,2.6,0,1.75,0)]),J.limewash),r=new U(gd([Rp(.16,1.6,1.62,0,0,0),Rp(.2,.12,1.66,0,.55,0),Rp(.2,.12,1.66,0,-.55,0)]),J.timberLight),i=new U(zp(.05,.05,2,6,0,1.6,0),J.iron),a=new U(gd([new zo(.42,.06,6,14).toNonIndexed(),Rp(.78,.055,.055,0,0,0).toNonIndexed(),Rp(.055,.78,.055,0,0,0).toNonIndexed()]),J.thatch);a.position.set(0,3.3,0),a.rotation.y=Math.PI/2;let o=new jn;if(o.add(r,i),t.add(n,o,a),typeof document<`u`){let e=new ai(new Gr({map:Kp(!0),sizeAttenuation:!1,depthTest:!1,transparent:!0}));e.scale.set(5.12/52,.04,1),e.position.set(0,Wp,0),e.renderOrder=8,e.userData.open=!0,t.add(e),t.userData.mark=e}return e||(t.rotation.y=Math.PI/2),t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t.userData.door=o,t.userData.wheel=a,t}function Yp(e,t,n,r,i=4.2){let a=new jn,o=[],s=[],c=Math.cos(r),l=Math.sin(r),u=[];for(let r=-i;r<=i+.01;r+=.42){let a=(i-Math.abs(r))*.35,s=t+c*r-l*a,d=n+l*r+c*a,f=Lp(e,s,d);u.push([s,f,d]),o.push(zp(.05,.07,2.2,5,s-t,f+.7,d-n))}for(let e=0;e<u.length-1;e++){let[r,i,a]=u[e],[o,c,l]=u[e+1],d=Rp(Math.hypot(o-r,l-a),.9,.06,0,0,0);d.rotateY(-Math.atan2(l-a,o-r)),d.translate((r+o)/2-t,Math.min(i,c)+.55,(a+l)/2-n),s.push(d)}let d=u[Math.floor(u.length/2)],f=d[0]-t-l*.6,p=d[2]-n+c*.6,m=Math.max(1.85,d[1]+.25),h=m-.3,g=Rp(1.5,.12,1.05);g.rotateY(-r).translate(f,h,p),o.push(g);for(let r of[-.58,.58]){let i=f+c*r,a=p+l*r,u=Lp(e,t+i,n+a)-.25,d=m+.7;o.push(zp(.1,.13,d-u,5,i,(d+u)/2,a)),s.push(zp(.12,.12,.35,5,i,d-.1,a))}a.add(new U(gd(o),J.timber)),a.add(new U(gd(s),J.thatch)),a.position.set(t,0,n),a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)});let _=new U(zp(.6,.46,.6,10),J.thatch);_.position.set(f,m,p),_.castShadow=!0;let v=new U(new Ro(.36,8,4,0,Math.PI*2,0,Math.PI/2),J.fish);return v.position.copy(_.position).add(new V(0,.3,0)),v.scale.set(1,.01,1),v.visible=!1,a.add(_,v),a.userData.fish=v,a.userData.pts=u,a}function Xp(e,t,n){let r=new jn,i=[];for(let r=0;r<26;r++){let a=r*2.4,o=.35+r%7*.23,s=Math.cos(a)*o,c=Math.sin(a)*o,l=new Ro(.23,6,3).scale(1,.24,.7);l.rotateY(a).translate(s,Lp(e,t+s,n+c)+.06,c),i.push(l)}r.add(new U(gd(i),J.limewash));for(let i of[-1.8,1.8]){let a=Lp(e,t+i,n);r.add(new U(zp(.06,.08,1.8,5,i,a+.7,0),J.timberLight))}return r.position.set(t,0,n),r.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),r}function Zp(e){let t=new jn,n=[J.ochre,J.tar,J.sail,J.timberLight][e%4],r=new U(zp(.2,.3,.85,6,0,.8,0),n),i=new U(new Ro(.21,8,5).translate(0,1.44,0),J.limewash),a=new U(zp(.26,.32,.12,8,0,1.62,0),J.thatch),o=new U(gd([Rp(.15,.45,.2,-.13,.22,0),Rp(.15,.45,.2,.13,.22,0)]),J.tar),s=new U(gd([Rp(.13,.65,.15,-.3,-.2,0),Rp(.13,.65,.15,.3,-.2,0)]),n);return s.position.y=1.1,t.add(r,i,a,o,s),t.userData.arms=s,t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}var Qp=420,$p=.995,em=1/30,tm=class{constructor(e){let t=16384;this.world=e,this.b=new Float32Array(t),this.d=new Float32Array(t),this.fL=new Float32Array(t),this.fR=new Float32Array(t),this.fT=new Float32Array(t),this.fB=new Float32Array(t),this.vx=new Float32Array(t),this.vz=new Float32Array(t),this.wet=new Float32Array(t),this.block=new Uint8Array(t),this.edge=new Uint8Array(t),this.pan=new Int16Array(t).fill(-1),this.weir=new Int16Array(t).fill(-1),this.syncBed();for(let e=0;e<128;e++)for(let t=0;t<128;t++)(t===0||e===0||t===127||e===127)&&(this.edge[e*128+t]=1)}syncBed(){let e=this.world.h;for(let t=0;t<128;t++)for(let n=0;n<128;n++)this.b[t*128+n]=e[(96+t)*256+64+n]}floodFrom(e){let{b:t,d:n,edge:r}=this,i=new Uint8Array(16384),a=[];for(let n=0;n<16384;n++)r[n]&&t[n]<e&&(a.push(n),i[n]=1);for(;a.length;){let r=a.pop();n[r]=e-t[r];let o=r%128,s=r/128|0,c=[o>0?r-1:-1,o<127?r+1:-1,s>0?r-128:-1,s<127?r+128:-1];for(let n of c)n>=0&&!i[n]&&!this.block[n]&&t[n]<e&&(i[n]=1,a.push(n))}for(let e=0;e<16384;e++)this.wet[e]=+(n[e]>.01)}step(e,t){let{b:n,d:r,fL:i,fR:a,fT:o,fB:s,block:c,edge:l}=this;for(let e=0;e<16384;e++)l[e]&&(r[e]=Math.max(0,t-n[e]));for(let t=0;t<128;t++)for(let l=0;l<128;l++){let u=t*128+l;if(c[u]||r[u]<=0){i[u]=a[u]=o[u]=s[u]=0;continue}let d=n[u]+r[u],f=0,p=0,m=0,h=0;l>0&&!c[u-1]&&(f=Math.max(0,i[u]*$p+e*Qp*(d-n[u-1]-r[u-1]))),l<127&&!c[u+1]&&(p=Math.max(0,a[u]*$p+e*Qp*(d-n[u+1]-r[u+1]))),t>0&&!c[u-128]&&(m=Math.max(0,o[u]*$p+e*Qp*(d-n[u-128]-r[u-128]))),t<127&&!c[u+128]&&(h=Math.max(0,s[u]*$p+e*Qp*(d-n[u+128]-r[u+128])));let g=(f+p+m+h)*e;if(g>r[u]&&g>0){let e=r[u]/g;f*=e,p*=e,m*=e,h*=e}i[u]=f,a[u]=p,o[u]=m,s[u]=h}let{vx:u,vz:d}=this;for(let t=0;t<128;t++)for(let n=0;n<128;n++){let c=t*128+n,l=n>0?a[c-1]:0,f=n<127?i[c+1]:0,p=t>0?s[c-128]:0,m=t<127?o[c+128]:0,h=e*(l+f+p+m-i[c]-a[c]-o[c]-s[c]),g=r[c],_=g+h;_<0&&(_=0),r[c]=_;let v=Math.max(.05,(g+_)*.5);u[c]=(l-i[c]+a[c]-f)*.5/v,d[c]=(p-o[c]+s[c]-m)*.5/v}}dry(e,t){let{d:n,wet:r}=this,i=.018+.05*Math.max(0,t);for(let t=0;t<16384;t++)n[t]>.015?r[t]=1:r[t]>0&&(r[t]=Math.max(0,r[t]-i*e))}surfaceAt(e,t){let n=t*128+e;return this.b[n]+this.d[n]}},nm=(e,t)=>(t-96)*128+e-64,rm=e=>[64+e%128,96+Math.floor(e/128)],im=class{constructor(e){this.game=e,this.hands=[],this.wetSeconds=0,this.work=0}jobs(){let e=this.game;return[...e.pans,...e.weirs,...e.oysters].map(t=>({thing:t,label:t.kind===`pan`?`Pan ${e.pans.indexOf(t)+1}`:t.kind===`weir`?`Weir ${e.weirs.indexOf(t)+1}`:`Oysters ${e.oysters.indexOf(t)+1}`}))}hire(){let e=this.game;if(this.hands.length>=(e.works?.maxHands()||4)||!e.spend(24,`Hired hand`))return!1;let t=this.jobs().filter(e=>!this.hands.some(t=>t.job===e.thing)),n={pan:0,oyster:1,weir:2},r=t.sort((e,t)=>n[e.thing.kind]-n[t.thing.kind])[0]||this.jobs()[0],i=e.works?.houses.at(-1),a=i?.i??sp(e.world.village.x),o=i?.j??cp(e.world.village.z),s=Zp(this.hands.length),c={name:[`Ada`,`Kit`,`Rowan`,`Wren`,`Bryn`,`Moss`,`Nell`,`Ash`][this.hands.length],x:ap(a),z:op(o),job:r.thing,mesh:s,path:null,at:0,retry:0,nextWork:0,owed:0,status:`Looking for dry footing`};return this.hands.push(c),e.view.scene.add(s),s.position.set(c.x,this.height(a,o),c.z),e.emit(`hired`,{hand:c}),!0}restoreHand(e,t){let n=this.game;if(!t)return null;let r=Zp(this.hands.length),i={name:e.name,x:e.x,z:e.z,job:t,mesh:r,path:e.path,at:e.at,retry:e.retry,nextWork:e.nextWork,status:e.status,connected:e.connected,checkHome:e.checkHome};return this.hands.push(i),n.view.scene.add(r),r.position.set(i.x,this.height(sp(i.x),cp(i.z)),i.z),i}homes(){let e=this.game;return[e.world.village,...(e.works?.houses||[]).map(e=>({x:ap(e.i),z:op(e.j)}))]}hireProblem(){let e=this.game;if(this._hp&&e.t-this._hp.t<1.5&&this._hp.n===this.jobs().length)return this._hp.v;let t=this.jobs(),n=null;if(t.length){let e=t.filter(e=>!this.homes().some(t=>this.route({x:t.x,z:t.z,job:e.thing})));e.length===t.length&&(n=`needs a causeway: hands cannot reach ${e.slice(0,3).map(e=>e.label).join(`, `)}${e.length>3?` and more`:``} on dry ground (Causeway, key 7)`)}return this._hp={t:e.t,n:t.length,v:n},n}assign(e,t){!this.game.ended&&this.jobs().some(e=>e.thing===t)&&(e.job=t,e.path=null,e.retry=0,e.checkHome=0)}dry(e,t){if(e<64||t<96||e>=192||t>=224)return!1;let n=t*256+e;return this.game.world.kind[n]!==4&&this.game.sim.b[nm(e,t)]+this.game.sim.d[nm(e,t)]-this.height(e,t)<=.12}height(e,t){let n=t*256+e,r=this.game.works?.deck[n];return r?Math.max(this.game.world.h[n],r):this.game.world.h[n]}destinations(e){let t=[];if(e.kind===`pan`){for(let n=e.i0-1;n<=e.i0+e.w;n++)t.push([n,e.j0-1],[n,e.j0+e.d]);for(let n=e.j0;n<e.j0+e.d;n++)t.push([e.i0-1,n],[e.i0+e.w,n])}else{let n=e.kind===`weir`?sp(e.x):e.i,r=e.kind===`weir`?cp(e.z):e.j;for(let e=-3;e<=3;e++)for(let i=-3;i<=3;i++)Math.hypot(i,e)<=3&&t.push([n+i,r+e])}return new Set(t.filter(([e,t])=>this.dry(e,t)).map(([e,t])=>nm(e,t)))}route(e){let t=this.destinations(e.job);if(!t.size)return null;let n=nm(sp(e.x),cp(e.z)),r=new Int32Array(16384).fill(-1),i=new Int32Array(16384);r[n]=n,i[0]=n;let a=0,o=1,s=-1;for(;a<o;){let e=i[a++];if(t.has(e)){s=e;break}let[n,c]=rm(e);for(let[t,a]of[[n-1,c],[n+1,c],[n,c-1],[n,c+1]]){if(!this.dry(t,a))continue;let s=nm(t,a);r[s]===-1&&(Math.abs(this.height(t,a)-this.height(n,c))>.85||(r[s]=e,i[o++]=s))}}if(s<0)return null;let c=[];for(let e=s;e!==n;e=r[e])c.push(rm(e));return c.reverse()}tend(e){let t=this.game,n=e.job;if(n.maintaining)e.status=`Dredging crew at work`;else if(n.damage)e.status=`Storm damage · repair (R)`;else if(n.kind===`pan`){if(n.ready||n.V/n.cells.length<=.03&&n.crust>=.2){this.work+=t.rake(n);return}let r=t.gates.find(e=>e.i>=n.i0-1&&e.i<=n.i0+n.w&&e.j>=n.j0-1&&e.j<=n.j0+n.d);if(!r){e.status=`Pan needs a sluice`;return}if(t.storm?.preparing){r.open&&t.toggleGate(r),e.status=`Storm watch · holding the sluice shut`;return}let i=n.V/n.cells.length,a=Sp(t.t),o=Cp(t.t)>0;(!r.open&&i<.03&&n.crust<.2&&!(n.pump?.enabled&&t.works.energy>1)||r.open&&i>.05&&(!o||i>=(a-t.panFloor(n))*.75&&wp(t.t,`high`)-t.t<5))&&t.toggleGate(r),e.status=n.ready?`Raking salt`:r.open?`Watching the flood`:`Tending brine`}else n.kind===`weir`?(this.work+=t.collect(n),e.status=`Emptying the fish basket`):(this.work+=t.gather(n),e.status=n.exposed?`Raking oysters`:`Waiting for exposed mud`)}update(e){let t=this.game;for(let n of this.hands){if(n.owed>0){n.status=`Unpaid · waiting for wages`;continue}let r=this.dry(sp(n.x),cp(n.z));if(r||(this.wetSeconds+=e),!n.path&&t.t>=n.retry&&(n.path=this.route(n),n.at=0,n.retry=t.t+2),!n.path)n.status=r?`No dry route · build a causeway`:`Cut off · waiting for the ebb`;else if(n.at<n.path.length){let[r,i]=n.path[n.at];if(!this.dry(r,i)){n.path=null,n.retry=0,n.checkHome=0;continue}let a=ap(r)-n.x,o=op(i)-n.z,s=Math.hypot(a,o),c=Math.min(s,e*3.2);s>0&&(n.x+=a/s*c,n.z+=o/s*c,n.mesh.rotation.y=Math.atan2(a,o)),s<=c+.001&&n.at++,n.status=`Walking to work`,n.mesh.position.set(n.x,this.height(sp(n.x),cp(n.z))+Math.abs(Math.sin(t.t*8))*.06,n.z),n.mesh.userData.arms.rotation.x=Math.sin(t.t*8)*.35}else if(r){if(t.t>=(n.checkHome||0)&&(n.connected=this.homes().some(e=>this.route({...n,...e})!==null),n.checkHome=t.t+2),!n.connected){n.status=`Cut off from village · causeway needed`;continue}n.mesh.userData.arms.rotation.x=Math.sin(t.t*3)*.25,t.t>=n.nextWork&&(this.tend(n),n.nextWork=t.t+1)}else n.status=`Cut off · waiting for the ebb`,n.path=null}}},am=class{constructor(e){this.game=e,this.depth=e.world.silt=new Float32Array(65536),this.clock=0,this.job=null,this.completed=0,this.removed=0,this.dirty=!1,this.mesh=new jn;let t=new U(new pa(2.5,.35,1.1),J.tar),n=new U(new ha(.55,.45,5),J.thatch);n.position.set(-.55,.3,0),this.arm=new U(new pa(.12,2.4,.12),J.timberLight),this.arm.position.set(.7,1.1,0),this.mesh.add(t,n,this.arm),this.mesh.visible=!1,e.view.scene.add(this.mesh)}panDepth(e){let t=0;for(let n of e.cells)t+=this.depth[(96+Math.floor(n/128))*256+64+n%128];return t/e.cells.length}target(e,t){let n=this.game,r=n.pans.find(n=>e>=n.i0-1&&e<=n.i0+n.w&&t>=n.j0-1&&t<=n.j0+n.d),i=[];if(r)i.push(...r.cells);else for(let r=t-2;r<=t+2;r++)for(let t=e-2;t<=e+2;t++)t<=64||r<=96||t>=191||r>=223||[1,2].includes(n.world.kind[r*256+t])&&i.push((r-96)*128+t-64);return{cells:i,pan:r,amount:i.reduce((e,t)=>e+this.depth[(96+Math.floor(t/128))*256+64+t%128],0),wet:i.length?i.reduce((e,t)=>e+n.sim.d[t],0)/i.length:0,cost:r?14:8,duration:r?12:8,i:e,j:t}}start(e,t){let n=this.game,r=this.target(e,t);if(n.ended||this.job||r.amount<.05||r.wet>.25||!n.spend(r.cost,`Dredging`))return!1;if(r.left=r.duration,r.cellSet=new Set(r.cells),r.loads=r.cells.map(e=>this.depth[(96+Math.floor(e/128))*256+64+e%128]),r.pan){r.pan.maintaining=!0;for(let e of n.gates)e.open&&e.i>=r.pan.i0-1&&e.i<=r.pan.i0+r.pan.w&&e.j>=r.pan.j0-1&&e.j<=r.pan.j0+r.pan.d&&n.toggleGate(e)}return this.job=r,this.mesh.visible=!0,n.emit(`dredgeStart`,{job:r}),!0}update(e){let t=this.game,{h:n,kind:r}=t.world;if(this.job){let r=this.job;r.wet=r.cells.reduce((e,n)=>e+t.sim.d[n],0)/r.cells.length;let i=r.j*256+r.i,a=(r.j-96)*128+r.i-64;if(this.mesh.position.set(ap(r.i),n[i]+(t.sim.d[a]||0)+.25,op(r.j)),this.arm.rotation.z=Math.sin(t.t*3)*(r.wet<=.25?.5:.04),r.wet<=.25){let i=Math.min(e,r.left);r.cells.forEach((e,a)=>{let o=(96+Math.floor(e/128))*256+64+e%128,s=Math.min(this.depth[o],r.loads[a]*i/r.duration);this.depth[o]-=s,n[o]-=s,t.sim.b[e]=n[o],this.removed+=s}),r.left-=i,this.dirty=!0,r.left<1e-6&&(r.pan&&(r.pan.maintaining=!1),this.completed++,this.job=null,this.mesh.visible=!1,t.emit(`dredgeDone`))}}if(this.clock+=e,this.clock<2)return;let i=this.clock;if(this.clock=0,t.t-mp>=180)for(let e=97;e<223;e++)for(let a=65;a<191;a++){let o=e*256+a,s=(e-96)*128+a-64,c=r[o];if(c!==1&&c!==2&&c!==4||t.sim.d[s]<.025||this.job?.cellSet.has(s)||t.pans[t.sim.pan[s]]?.maintaining)continue;let l=Math.hypot(t.sim.vx[s],t.sim.vz[s]),u=Math.min(.55-this.depth[o],i*(c===4?.0018:9e-4)/(1+l*3));u<=0||(this.depth[o]+=u,n[o]+=u,t.sim.b[s]=n[o],this.dirty=!0)}this.dirty&&=(t.view.renderer.recomputeTerrain(64,96,191,223),t.view.renderer.heightTex.needsUpdate=!0,!1)}},om=(e,t,n,r,i,a,o,s)=>{let c=new U(new pa(n,r,i),t);return c.position.set(a,o,s),c.castShadow=c.receiveShadow=!0,e.add(c),c};function sm(e){let t=new Map;for(let n of[...e.children]){if(!n.isMesh)continue;let r=`${n.material.uuid}:${n.castShadow}:${n.receiveShadow}`;t.has(r)||t.set(r,{material:n.material,cast:n.castShadow,receive:n.receiveShadow,geometries:[]}),n.updateMatrix(),t.get(r).geometries.push(n.geometry.clone().applyMatrix4(n.matrix)),e.remove(n),n.geometry.dispose()}for(let{material:n,cast:r,receive:i,geometries:a}of t.values()){let t=new U(gd(a),n);t.castShadow=r,t.receiveShadow=i,e.add(t);for(let e of a)e.dispose()}return e}function cm(){let e=new jn;for(let t of[-1.3,1.3])for(let n of[-1,1])om(e,J.timber,.25,4.4,.25,t,.5,n);om(e,J.timberLight,3.2,.25,2.7,0,2.5,0),om(e,J.limewash,2.4,2,2.2,0,3.6,0);let t=new U(new ha(2.3,1.4,4),J.ochre);t.rotation.y=Math.PI/4,t.position.y=5.2,t.scale.z=.85,e.add(t),om(e,J.tar,.65,1.35,.08,0,3.3,1.15);let n=new jn;n.position.set(2,.7,0);for(let e of[-.55,.55]){let t=new U(new zo(1.5,.1,5,20),J.timber);t.rotation.y=Math.PI/2,t.position.x=e,n.add(t)}for(let e=0;e<10;e++){let t=e*Math.PI/5,r=om(n,J.timberLight,.14,2.95,.13,0,0,0);r.rotation.x=t;let i=om(n,J.timber,1.25,.4,.15,0,Math.cos(t)*1.45,Math.sin(t)*1.45);i.rotation.x=t}return sm(n),e.add(n),e.userData.wheel=n,sm(e)}function lm(e){let t=new jn,n=3.05-e;for(let e of[-1.2,1.2])for(let r of[-1.1,1.1])om(t,J.timber,.22,n+.6,.22,e,n/2-.3,r);om(t,J.timberLight,3,.22,2.8,0,n,0),om(t,J.limewash,2.55,1.8,2.25,0,n+1,0);let r=new U(new ha(2.2,1.3,4),J.thatch);r.rotation.y=Math.PI/4,r.position.y=n+2.55,t.add(r),om(t,J.tar,.6,1.35,.06,0,n+.8,1.16);for(let e of[-.8,.8])om(t,J.window,.4,.45,.08,e,n+1.1,1.16);for(let e=1;e<=5;e++)om(t,J.timberLight,1,.16,.58,0,n*(1-e/6),1.5+e*.45);return sm(t)}function um(){let e=new jn;om(e,J.timber,1.7,.3,1.2,0,0,0),om(e,J.limewash,.8,.85,.8,0,.5,0),om(e,J.iron,.16,1.5,.16,.5,.5,0);let t=new U(new zo(.48,.07,5,12),J.iron);return t.position.set(0,1.1,.45),e.add(t),e.userData.wheel=t,e}function dm(){let e=new jn;for(let t of[-1.7,1.7]){let n=om(e,J.timberLight,.18,2.3,.18,t,.6,0);n.rotation.z=Math.sign(t)*.45}return sm(e)}function fm(e,t){let n=new jn;return e.forEach((e,r)=>{om(n,J.timberLight,1,.16,1.05,0,e-.08,-r-1);for(let i of[-.4,.4]){let a=Math.max(.1,e-t[r]);om(n,J.timber,.12,a,.12,i,e-a/2,-r-1)}}),sm(n)}var pm=[{id:`house`,day:3,cost:80,name:`Stilt house`,key:`H`,detail:`A raised local home for two more hands; keeps 30 stored cargo above the surge.`},{id:`mill`,day:5,cost:140,name:`Tide mill`,key:`T`,detail:`Build in a flowing creek. The wheel banks 120 power for pumps; slack water makes none.`},{id:`pump`,day:8,cost:90,name:`Brine pump`,key:`P`,detail:`Click a pan to install. Uses mill power to lift brine through neaps and drain storm water.`},{id:`bank`,day:10,cost:65,name:`Storm banks`,key:`B`,detail:`Click a pan for +3.05 m banks, or a mill, weir or oyster bed for storm bracing. Shut sluices before the surge.`}],mm=(e,t)=>(t-96)*128+e-64,hm=(e,t)=>e>67&&t>99&&e<187&&t<219,gm=class{constructor(e){this.game=e,this.mills=[],this.houses=[],this.pumps=[],this.energy=0,this.generated=0,this.used=0,this.lifted=0,this.rateFrom=null,this.seen=new Set,this.deck=new Float32Array(65536)}day(){return Math.min(14,Math.max(1,Ep(this.game.t)))}unlocked(e){return this.day()>=pm.find(t=>t.id===e)?.day}rates(){let e=this.rateFrom,t=e?(this.game.t-e.t)/90:0;return!e||t<.25?null:{gen:(this.generated-e.gen)/t,used:(this.used-e.used)/t,lifted:(this.lifted-e.lifted)/t,days:t}}maxHands(){return Math.min(8,4+this.houses.length*2)}occupied(e,t,n=2.5){return[...this.mills,...this.houses].some(r=>Math.hypot(r.i-e,r.j-t)<n+2)}siteOK(e,t,n){return!this.siteProblem(e,t,n)}siteProblem(e,t,n){let r=this.game,{kind:i,h:a}=r.world,o=e===`mill`?`tide mill`:`stilt house`;if(!hm(t,n))return`Too near the edge of the marsh for a ${o}`;if(this.occupied(t,n))return`Too close to another house or mill (keep about 4.5 cells apart)`;if(r.gates.some(e=>Math.hypot(e.i-t,e.j-n)<4))return`Too close to a sluice gate (4 cells)`;if(r.oysters.some(e=>Math.hypot(e.i-t,e.j-n)<5))return`Too close to an oyster bed (5 cells)`;if(r.weirs.some(e=>Math.hypot(sp(e.x)-t,cp(e.z)-n)<6))return`Too close to a fish weir (6 cells)`;if(e===`mill`){if(![1,2].includes(i[n*256+t]))return`A tide mill goes in a creek or channel, where the tide flows`;if(a[n*256+t]>.3)return`Too high: the creek bed here is above the flow`;for(let e=n-2;e<=n+2;e++)for(let n=t-2;n<=t+2;n++)if(i[e*256+n]>=3)return`Needs 2 clear cells around it: a pan, gate or bed is in the way`;return null}if(e===`house`){for(let e=n-1;e<=n+4;e++)for(let n=t-1;n<=t+1;n++){let t=e*256+n;if(i[t]!==0||a[t]<.65||a[t]>2.2)return`A stilt house needs a 3 x 6 patch of dry marsh, not water or built ground`}return null}return`Not a buildable work`}build(e,t,n){let r=this.game,i=pm.find(t=>t.id===e);if(!i||!this.unlocked(e)||!this.siteOK(e,t,n)||!r.spend(i.cost,i.name))return null;let a=e===`mill`?cm():lm(r.world.h[n*256+t]),o={kind:e,name:i.name,i:t,j:n,mesh:a,braced:!1,damage:0,output:0};if(a.position.set(ap(t),e===`mill`?0:r.world.h[n*256+t],op(n)),r.view.scene.add(a),e===`mill`)this.mills.push(o);else{this.houses.push(o);for(let e=n-1;e<=n+4;e++)for(let i=t-1;i<=t+1;i++){let t=e*256+i;e<=n+1?this.deck[t]=3.05:this.deck[t]=Math.max(r.world.h[t],3.05-(e-n-1)*.6),r.world.kind[t]=7}}return r.emit(`built`,{thing:o}),o}installPump(e){let t=this.game;if(!this.unlocked(`pump`)||e?.kind!==`pan`||e.pump||!this.mills.length||!t.spend(90,`Brine pump`))return!1;let n=um();n.position.set(ap(e.i0+e.w),1.6,op(e.j0+e.d/2)),t.view.scene.add(n);let r={kind:`pump`,name:`Brine pump`,pan:e,mesh:n,enabled:!0,active:!1};return e.pump=r,this.pumps.push(r),t.emit(`built`,{thing:r}),!0}restoreBuilding(e,t,n){let r=this.game,i=pm.find(t=>t.id===e),a=e===`mill`?cm():lm(r.world.h[n*256+t]),o={kind:e,name:i.name,i:t,j:n,mesh:a,braced:!1,damage:0,output:0};return a.position.set(ap(t),e===`mill`?0:r.world.h[n*256+t],op(n)),r.view.scene.add(a),(e===`mill`?this.mills:this.houses).push(o),o}restorePump(e){let t=um();t.position.set(ap(e.i0+e.w),1.6,op(e.j0+e.d/2)),this.game.view.scene.add(t);let n={kind:`pump`,name:`Brine pump`,pan:e,mesh:t,enabled:!0,active:!1};return e.pump=n,this.pumps.push(n),n}label(e){let t=this.game;return e.kind===`pan`?`Pan ${t.pans.indexOf(e)+1}`:e.kind===`weir`?`Weir ${t.weirs.indexOf(e)+1}`:e.kind===`oyster`?`Oysters ${t.oysters.indexOf(e)+1}`:e.name}protectProblem(e){let t=this.game,n=pm.find(e=>e.id===`bank`);return t.ended?`The season has ended.`:this.unlocked(`bank`)?!e||![`pan`,`mill`,`weir`,`oyster`].includes(e.kind)?`Nothing to protect under the cursor. Click a pan, tide mill, fish weir or oyster bed.`:e.braced?`${this.label(e)} already has storm banks.`:t.store.coin<n.cost?`Storm banks cost ${n.cost} shillings; you have ${Math.floor(t.store.coin)}.`:null:`Storm banks open on day ${n.day}; it is day ${this.day()}.`}stormPlan(){let e=this.game,t=pm.find(e=>e.id===`bank`),n=e.storm.assets(),r=n.filter(e=>e.braced).length,i=n.length,a;if(e.storm.passed)a=e.storm.damageCount?`The surge has passed. Repair damaged works (R).`:`The surge has passed. Trade the last tides.`;else if(!this.unlocked(`bank`))a=`Storm banks open on day ${t.day} (${t.cost} sh each): keep a purse.`;else{let r=n.find(e=>!e.braced),i=e.pans.find(t=>t.braced&&e.panOpen(t));a=r?e.store.coin<t.cost?`Need ${Math.ceil(t.cost-e.store.coin)} more shillings for banks on ${this.label(r)}.`:`Next: press B, then click ${this.label(r)} (${t.cost} sh).`:i?`${this.label(i)} has banks but its sluice is open: shut it before the surge.`:`Every work is protected. Keep the sluices shut through the surge.`}return{braced:r,total:i,text:a}}protectAllInfo(){let e=this.game,t=pm.find(e=>e.id===`bank`),n=e.storm.assets().filter(e=>!e.braced).length,r=Math.min(n,Math.floor(e.store.coin/t.cost));return{n,cost:t.cost,all:n*t.cost,afford:r,live:this.unlocked(`bank`)&&!e.storm.passed&&!e.ended}}protectAffordable(){let e=this.game,t={pan:0,mill:1,weir:2,oyster:3},n=e.storm.assets().filter(e=>!e.braced).sort((e,n)=>(t[e.kind]??9)-(t[n.kind]??9)),r=0;for(let e of n)if(this.protect(e))r++;else break;return r}protect(e){let t=this.game;return this.protectProblem(e)||!t.spend(65,`Storm protection`)?!1:(this.brace(e),t.emit(`protected`,{thing:e}),!0)}brace(e){let t=this.game;if(e.braced=!0,e.kind===`pan`){for(let n=e.j0-1;n<=e.j0+e.d;n++)for(let r=e.i0-1;r<=e.i0+e.w;r++)r!==e.i0-1&&r!==e.i0+e.w&&n!==e.j0-1&&n!==e.j0+e.d||t.gates.some(e=>e.i===r&&e.j===n)||(t.world.h[n*256+r]=3.05);t.afterEdit(e.i0-2,e.j0-2,e.i0+e.w+2,e.j0+e.d+2),e.pump&&(e.pump.mesh.position.y=3.17);let n=[],r=[];for(let i=1;i<=3;i++){let a=(e.j0-1-i)*256+e.i0+Math.floor(e.w/2);this.deck[a]=Math.max(t.world.h[a],3.05-i*.6),n.push(this.deck[a]),r.push(t.world.h[a])}let i=fm(n,r);i.position.set(ap(e.i0+Math.floor(e.w/2)),0,op(e.j0-1)),t.view.scene.add(i)}else e.mesh.add(dm())}update(e){let t=this.game;for(let e of pm)this.unlocked(e.id)&&!this.seen.has(e.id)&&(this.seen.add(e.id),t.emit(`unlock`,{unlock:e}));this.mills.length&&!this.rateFrom&&(this.rateFrom={t:t.t,gen:this.generated,used:this.used,lifted:this.lifted});for(let n of this.mills){let r=mm(n.i,n.j),i=Math.hypot(t.sim.vx[r],t.sim.vz[r])*Math.min(1,t.sim.d[r]);n.output=n.damage?0:Math.min(2.5,i*.65);let a=Math.min(Math.max(0,this.mills.length*120-this.energy),n.output*e);this.energy+=a,this.generated+=a,n.mesh.userData.wheel.rotation.x+=n.output*e*(Cp(t.t)>=0?1:-1)}for(let n of this.pumps){n.active=!1;let r=n.pan;if(!n.enabled||r.maintaining||this.energy<e*.65||t.panOpen(r))continue;let i=r.V/r.cells.length;i<.03&&r.crust<.2&&(n.filling=!0),(i>=.25||r.crust>=.2)&&(n.filling=!1);let a=0;if(t.storm?.active&&i>.12){let n=r.V;for(let n of r.cells){let r=Math.min(t.sim.d[n],e*.03);t.sim.d[n]-=r,a+=r}r.D*=Math.max(0,1-a/Math.max(.01,n)),t.panVolume(r)}else if(n.filling&&!t.storm?.preparing&&!t.storm?.active&&i<.25&&r.crust<.2&&!r.damage){let n=t.gates.find(e=>e.i>=r.i0-1&&e.i<=r.i0+r.w&&e.j>=r.j0-1&&e.j<=r.j0+r.d);if(!n)continue;let o=[[n.i-1,n.j],[n.i+1,n.j],[n.i,n.j-1],[n.i,n.j+1]].filter(([e,t])=>e<r.i0-1||e>r.i0+r.w||t<r.j0-1||t>r.j0+r.d).map(([e,t])=>mm(e,t)).find(e=>t.sim.d[e]>.08);if(o===void 0)continue;a=Math.min(t.sim.d[o]-.05,e*.75,(.25-i)*r.cells.length),t.sim.d[o]-=a;for(let e of r.cells)t.sim.d[e]+=a/r.cells.length;r.D+=a*.18,t.panVolume(r),this.lifted+=a}a>0&&(this.energy-=e*.65,this.used+=e*.65,n.active=!0,n.mesh.userData.wheel.rotation.z+=e*3)}}},_m=(e,t)=>(t-96)*128+e-64,vm=class{constructor(e){this.game=e,this.warned=!1,this.started=!1,this.passed=!1,this.damageCount=0,this.repaired=0,this.cargoLost=0,this.cargoBefore=0,this.repairJob=null,this.peakLevel=0,this.assetsAtStart=[],this.losses={salt:0,fish:0,oysters:0}}get active(){return this.game.t>=gp&&this.game.t<_p}get preparing(){return this.game.t>=gp-45&&this.game.t<_p}assets(){let e=this.game;return[...e.pans,...e.weirs,...e.oysters,...e.works.mills]}repair(e){let t=this.game;return!e?.damage||this.repairJob||this.active||!this.assets().includes(e)||!t.spend(24,`Storm repairs`)?!1:(this.repairJob={thing:e,left:10},t.emit(`repairStart`,{thing:e}),!0)}damage(e){let t=this.game;if(!e.damage){if(e.damage=1,this.damageCount++,e.kind===`pan`){let n=e.crust+e.D*.6;t.stats.dissolved+=n,e.crust=0,e.D*=.4,e.ready=!1;let r=e.i0+e.w,i=e.j0+Math.floor(e.d/2);e.breach={i:r,j:i},t.world.h[i*256+r]=.7,t.afterEdit(r-1,i-1,r+1,i+1)}else e.kind===`weir`?e.catch*=.25:e.kind===`oyster`&&(e.stock*=.25);e.mesh&&(e.mesh.rotation.z=.16),t.emit(`stormDamage`,{thing:e})}}update(e){let t=this.game;if(!this.warned&&t.t>=vp&&(this.warned=!0,t.emit(`stormWarning`)),!this.started&&t.t>=gp&&(this.started=!0,this.assetsAtStart=this.assets(),this.wetAtStart=t.people.wetSeconds,t.emit(`stormStart`)),this.active){this.peakLevel=Math.max(this.peakLevel,Sp(t.t));for(let n of this.assets()){if(n.damage)continue;let r;if(n.kind===`pan`)r=n.cells.reduce((e,n)=>e+t.sim.b[n]+t.sim.d[n],0)/n.cells.length;else{let e=_m(n.i??sp(n.x),n.j??cp(n.z));r=t.sim.b[e]+t.sim.d[e]}let i=n.braced&&n.kind!==`pan`?3.15:1.95;n.exposure=r>i?(n.exposure||0)+e:Math.max(0,(n.exposure||0)-e),n.exposure>=3&&this.damage(n)}if(!this.cargoChecked&&t.t>=hp){this.cargoChecked=!0;let e=t.works.houses.length*30;for(let n of[`salt`,`fish`,`oysters`]){let r=t.store[n];this.cargoBefore+=r;let i=Math.min(e,r);e-=i;let a=Math.floor((r-i)*.45);t.store[n]-=a,this.losses[n]=a,this.cargoLost+=a}this.cargoLost&&t.emit(`cargoLost`,{amount:this.cargoLost})}}if(this.started&&!this.passed&&t.t>=_p&&(this.passed=!0,this.wetDuring=t.people.wetSeconds-this.wetAtStart,t.emit(`stormPassed`)),this.repairJob&&(this.repairJob.left-=e,this.repairJob.left<=0)){let e=this.repairJob.thing;if(e.damage=0,e.exposure=0,e.breach){let{i:n,j:r}=e.breach;t.world.h[r*256+n]=e.braced?3.05:ip,t.afterEdit(n-1,r-1,n+1,r+1),e.breach=null}e.mesh&&(e.mesh.rotation.z=0),this.repaired++,this.repairJob=null,t.emit(`repairDone`,{thing:e})}}account(){let e=this.assetsAtStart.length,t=65*this.damageCount/Math.max(1,e),n=25*this.cargoLost/Math.max(1,this.cargoBefore),r=10*this.repaired/Math.max(1,this.damageCount),i=this.passed?Math.round(Math.max(0,Math.min(100,100-t-n+r))):0;return{score:i,grade:i>=90?`Stormkeeper`:i>=70?`Weathered well`:i>=40?`Battered, still trading`:`Caught unprepared`,total:e,damaged:this.damageCount,repaired:this.repaired,unrepaired:this.assets().filter(e=>e.damage).length,cargoLost:this.cargoLost,losses:{...this.losses},peak:+this.peakLevel.toFixed(2),wetSeconds:Math.round(this.wetDuring||0)}}},ym=[`salt`,`fish`,`oysters`],bm={salt:3,fish:3,oysters:4},xm=1300,Sm=1700,Cm={salt:65,fish:36,oysters:65},wm=[{day:5,cost:110},{day:8,cost:190},{day:11,cost:300}],Tm=mp+1260,Em=e=>Math.round(e*10)/10,Dm=class{constructor(e){this.game=e,this.pressure={salt:0,fish:0,oysters:0},this.selling={salt:!0,fish:!0,oysters:!0},this.sold={salt:0,fish:0,oysters:0},this.revenue={salt:0,fish:0,oysters:0},this.earned=0,this.spent=0,this.visits=0,this.ledger=[],this.high=wp(e.t-10,`high`),this.state=`away`,this.progress=0,this.quay=0,this.wages=0,this.capacity=48,this.lastSale=-1/0,this.record(`Founding purse`,60)}record(e,t){this.ledger.unshift({t:this.game.t,label:e,amount:Em(t)}),this.ledger.length=Math.min(12,this.ledger.length)}price(e,t=this.pressure[e]){return Em(bm[e]*ep(1.15-t/Cm[e],.4,1.15))}recoverDays(e){let t=.15*Cm[e],n=this.pressure[e];return n<=t?0:Math.log(n/t)}spend(e,t){if(this.game.ended||this.game.store.coin<e)return!1;this.game.store.coin=Em(this.game.store.coin-e),this.spent=Em(this.spent+e);let n=this.ledger[0];return n?.label===t&&n.amount<0&&this.game.t-n.t<2?n.amount=Em(n.amount-e):this.record(t,-e),!0}cap(){return 48+24*this.quay}nextQuay(){return wm[this.quay]||null}quayOpen(){let e=this.nextQuay();return!!e&&Ep(this.game.t)>=e.day}extendQuay(){let e=this.nextQuay();return!e||!this.quayOpen()||!this.spend(e.cost,`Quay berth`)?!1:(this.quay++,this.capacity+=24,this.game.emit(`quayExtended`,{quay:this.quay}),!0)}owe(){for(let e of this.game.people?.hands||[])e.owed=(e.owed||0)+1}settle(){for(let e of this.game.people?.hands||[])for(;e.owed>0&&this.spend(6,`Hands' wages`);)e.owed--,this.wages+=6}toggle(e){ym.includes(e)&&!this.game.ended&&(this.selling[e]=!this.selling[e])}update(e){let t=this.game;for(let t of ym)this.pressure[t]*=Math.exp(-e/90);for(;t.t>this.high+12;)this.high=wp(this.high+2,`high`);if(t.storm?.active){this.state=`sheltering`,this.progress=0;return}let n=t.t-this.high;this.state=n<-10?`away`:n<-1.5?`arriving`:n<3&&Sp(t.t)>.5?`docked`:n<12?`leaving`:`away`,this.progress=this.state===`arriving`?ep((n+10)/8.5,0,1):this.state===`docked`?1:this.state===`leaving`?ep(1-(n-3)/9,0,1):0,this.state===`docked`&&this.lastVisitHigh!==this.high&&(this.lastVisitHigh=this.high,this.visits++,this.capacity=this.cap(),this.owe(),this.settle(),t.emit(`traderArrived`)),this.state===`docked`&&t.t-this.lastSale>=.75&&(this.lastSale=t.t,this.trade())}fillOrder(){return ym.filter(e=>this.selling[e]).map((e,t)=>({g:e,k:t,p:this.price(e)})).sort((e,t)=>t.p-e.p||e.k-t.k).map(e=>e.g)}plan(){let e=this.state===`docked`?this.capacity:this.cap(),t=e,n={salt:0,fish:0,oysters:0},r={salt:0,fish:0,oysters:0};for(let e of this.fillOrder()){let i=Math.floor(this.game.store[e]);n[e]=Math.min(i,t),t-=n[e],r[e]=i-n[e]}return{room:e,takes:n,left:r,total:ym.reduce((e,t)=>e+n[t],0)}}trade(){let e=this.game;if(e.ended||this.state!==`docked`||Sp(e.t)<=.5)return 0;let t=0;for(let n of this.fillOrder()){let r=Math.min(Math.floor(e.store[n]),this.capacity);if(!r)continue;let i=0;for(let e=0;e<r;e++)i+=this.price(n),this.pressure[n]++;i=Em(i),e.store[n]-=r,this.capacity-=r,this.sold[n]+=r,this.revenue[n]=Em(this.revenue[n]+i),t+=i,this.record(`${r} ${n} sold`,i)}return t=Em(t),t&&(e.store.coin=Em(e.store.coin+t),this.earned=Em(this.earned+t),e.emit(`trade`,{amount:t}),this.settle()),t}},Om=(e,t)=>e>=64&&e<192&&t>=96&&t<224,km=(e,t)=>(t-96)*128+(e-64),Am={dig:1,gate:12,pan:30,weir:15,oyster:18,causeway:2},jm=.45,Mm=.18,Nm=.8,Pm=.0145,Fm=class{constructor(e,t){this.world=e,this.view=t,this.sim=new tm(e),this.t=mp,this.speed=1,this.paused=!1,this.hostPaused=!1,this.hintHold=!1,this.store={salt:0,fish:0,oysters:0,coin:60},this.stats={raked:0,fished:0,oysters:0,dissolved:0},this.ended=!1,this.economy=new Dm(this),this.gates=[],this.pans=[],this.weirs=[],this.oysters=[],this.events=[],this.acc=0,this.sunElev=.5,this.people=new im(this);let{gate:n,pan:r,weir:i}=e;this.addPan(r.i0,r.j0,r.w,r.d,!0),this.addGate(n.i,n.j,!0,!0),i&&this.addWeir(i.x,i.z,i.ang,!0);let a=null,o=1/0;for(let e=99;e<221;e++)for(let t=67;t<189;t++){if(!this.oysterSiteOK(t,e))continue;let r=Math.hypot(t-(n.i-10),e-(n.j+10));r<o&&(o=r,a={i:t,j:e})}a&&this.addOysters(a.i,a.j,!0),this.sim.floodFrom(Sp(this.t));for(let e of this.pans)this.panVolume(e),e.D=e.V*Mm;this.sediment=new am(this),this.works=new gm(this),this.storm=new vm(this),this.base={h:e.h.slice(),kind:e.kind.slice()},this.start={gates:this.gates.length,pans:this.pans.length,weirs:this.weirs.length,oysters:this.oysters.length}}emit(e,t={}){this.events.push({type:e,...t})}spend(e,t){return this.economy.spend(e,t)}finishSeason(){if(this.ended)return;this.ended=!0,this.acc=0;let e=this.economy,t=this.storm.account();this.result={success:e.earned>=1300&&t.score>=70,tradeSuccess:e.earned>=xm,master:e.earned>=Sm,earned:e.earned,spent:e.spent,salt:this.stats.raked,fish:this.stats.fished,oysters:this.stats.oysters,losses:Math.round(this.stats.dissolved*4),coin:this.store.coin,workerHarvest:this.people.work,wetSeconds:Math.round(this.people.wetSeconds),sold:{...e.sold},revenue:{...e.revenue},stock:{...this.store},visits:e.visits,storm:t,dredges:this.sediment.completed,siltRemoved:+this.sediment.removed.toFixed(1),power:+this.works.generated.toFixed(1),lifted:+this.works.lifted.toFixed(1)},this.result.score=Math.max(0,Math.round(e.earned+this.stats.raked*2+this.stats.fished*3+this.stats.oysters*4-this.result.losses+t.score*10)),this.emit(`seasonEnd`,{result:this.result})}addGate(e,t,n=!0,r=!1){let{h:i}=this.world,a=t*256+e,o=i[a-1]+i[a+1]<i[a-256]+i[a+256],s=o?Math.min(i[a-1],i[a+1]):Math.min(i[a-256],i[a+256]);i[a]=Math.min(i[a],Math.max(s,-.6)),this.sediment&&(this.sediment.depth[a]=0),this.world.kind[a]=2;let c=Jp(o);c.position.set(ap(e),i[a]+.1,op(t)),this.view.scene.add(c);let l={kind:`gate`,i:e,j:t,open:n,anim:+!!n,mesh:c,name:`Sluice gate`};return this.gates.push(l),qp(c,n),this.afterEdit(e-1,t-1,e+1,t+1),this.applyGate(l),l}applyGate(e){Om(e.i,e.j)&&(this.sim.block[km(e.i,e.j)]=+!e.open)}toggleGate(e){this.ended||(e.open||!this.pans.some(t=>t.maintaining&&e.i>=t.i0-1&&e.i<=t.i0+t.w&&e.j>=t.j0-1&&e.j<=t.j0+t.d))&&(e.open=!e.open,qp(e.mesh,e.open),this.applyGate(e),this.emit(`gate`,{gate:e}))}addPan(e,t,n,r,i=!1){let{h:a,kind:o}=this.world,s=[];for(let i=t-1;i<=t+r;i++)for(let c=e-1;c<=e+n;c++){let l=c>=e&&c<e+n&&i>=t&&i<t+r,u=i*256+c;(o[u]!==2||l)&&(a[u]=l?rp:Math.max(ip,a[u]),this.sediment&&(this.sediment.depth[u]=0),o[u]=l?4:3,l&&s.push(km(c,i)))}let c={kind:`pan`,id:this.pans.length,i0:e,j0:t,w:n,d:r,cells:s,V:0,D:0,crust:0,name:`Salt pan`,ready:!1};for(let e of s)this.sim.pan[e]=c.id;return this.pans.push(c),this.afterEdit(e-2,t-2,e+n+2,t+r+2),c}addWeir(e,t,n,r=!1){let i=Yp(this.world,e,t,n);this.view.scene.add(i);let a=new Set;for(let[e,,t]of i.userData.pts){let n=sp(e),r=cp(t);Om(n,r)&&a.add(km(n,r))}let o={kind:`weir`,x:e,z:t,ang:n,mesh:i,cells:[...a],catch:0,name:`Fish weir`};return this.weirs.push(o),o}oysterSiteOK(e,t){return!this.oysterProblem(e,t)}oysterProblem(e,t){if(!Om(e,t)||e<=66||t<=98||e>=189||t>=221)return`Too near the edge of the marsh`;let n=t*256+e,r=this.world.h[n],i=this.world.kind[n];return i>=3?`Cell taken`:i===2?`Not on the bank: that is a channel`:r<=-.8?`Too deep: always under water`:r>=.35?`Too high: the flood barely reaches it`:this.works?.occupied(e,t)?`Too close to a house or mill`:this.oysters.some(n=>Math.hypot(n.i-e,n.j-t)<4)?`Too close to another bed (4 cells apart)`:null}addOysters(e,t,n=!1){let r=Xp(this.world,ap(e),op(t));this.view.scene.add(r);let i={kind:`oyster`,i:e,j:t,mesh:r,stock:n?6:0,name:`Oyster bed`,exposed:!1};return this.oysters.push(i),i}updateOysters(e){for(let t of this.oysters){let n=this.sim.d[km(t.i,t.j)];t.exposed=n<.12,n>.2&&!t.damage&&(t.stock=Math.min(12,t.stock+e*.07))}}gather(e){if(this.ended||this.sim.d[km(e.i,e.j)]>=.12)return 0;let t=Math.floor(e.stock);return t?(e.stock-=t,this.store.oysters+=t,this.stats.oysters+=t,this.emit(`oysters`,{bed:e,amount:t}),t):0}causewaySiteOK(e,t){if(!Om(e,t)||e<=64||t<=96||e>=191||t>=223)return!1;let n=t*256+e;return this.world.kind[n]<3&&this.world.h[n]<1.65&&!this.works?.occupied(e,t)&&!this.gates.some(n=>Math.abs(n.i-e)+Math.abs(n.j-t)<2)&&!this.oysters.some(n=>Math.hypot(n.i-e,n.j-t)<3)}causeway(e,t){if(!this.causewaySiteOK(e,t)||!this.spend(Am.causeway,`Causeway`))return!1;let n=t*256+e,r=km(e,t),i=this.sim.b[r]+this.sim.d[r];return this.world.h[n]=1.65,this.world.kind[n]=6,this.sim.d[r]=Math.max(0,i-1.65),this.afterEdit(e-1,t-1,e+1,t+1),!0}dig(e,t){let{h:n,kind:r}=this.world,i=t*256+e;if(this.oysters.some(n=>Math.hypot(n.i-e,n.j-t)<2.5)||!Om(e,t)||r[i]>=4||this.works?.occupied(e,t)||this.gates.some(n=>n.i===e&&n.j===t)||(this.sediment?.depth[i]||0)>.01||this.sediment?.job?.cells.includes(km(e,t))||n[i]<=-.2)return!1;n[i]=-.25,r[i]=2;for(let[i,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=(t+a)*256+e+i;r[o]===0&&n[o]>.9&&(n[o]=n[o]*.75+.225)}return this.afterEdit(e-1,t-1,e+1,t+1),!0}afterEdit(e,t,n,r){this.sim.syncBed(),this.view.renderer.recomputeTerrain(e-1,t-1,n+1,r+1);let i=[];for(let a=t;a<=r;a++)for(let t=e;t<=n;t++)this.world.kind[a*256+t]!==0&&i.push(a*256+t);this.view.reeds?.clear(i),this.view.renderer.heightTex.needsUpdate=!0}panSiteOK(e,t,n,r){return!this.panProblem(e,t,n,r)}panProblem(e,t,n,r){let{kind:i,h:a}=this.world;for(let o=t-1;o<=t+r;o++)for(let t=e-1;t<=e+n;t++){if(!Om(t,o)||t<=64||o<=96||t>=191||o>=223)return`Too near the edge of the marsh`;let e=o*256+t;if(this.oysters.some(e=>Math.hypot(e.i-t,e.j-o)<2.5))return`Too close to an oyster bed`;if(i[e]>=3)return`Cell taken: a pan, bank, house or causeway is in the way`;if(this.works?.occupied(t,o))return`Too close to a house or mill`;if(this.sediment?.job?.cells.includes(km(t,o)))return`The dredging crew is working here`;if(i[e]===1&&a[e]<.3)return`A creek is in the way`}return null}panVolume(e){let t=0;for(let n of e.cells)t+=this.sim.d[n];return e.V=t,t}panOpen(e){return!!e.breach||this.gates.some(t=>t.open&&t.i>=e.i0-1&&t.i<=e.i0+e.w&&t.j>=e.j0-1&&t.j<=e.j0+e.d)}panFloor(e){return rp+(this.sediment?.panDepth(e)||0)}updatePans(e){let t=Math.max(0,this.sunElev);for(let n of this.pans){let r=n.V,i=this.panOpen(n),a=Pm*(.3+.7*np(0,.3,t))*e*(n.damage?.35:1);for(let e of n.cells)this.sim.d[e]>0&&(this.sim.d[e]=Math.max(0,this.sim.d[e]-a));let o=this.panVolume(n);if(i&&(o>r?n.D+=(o-r)*Mm:r>0&&(n.D*=o/r),n.crust>0&&o>.5)){let t=Math.min(n.crust,n.crust*.6*e);n.crust-=t,n.D+=t,this.stats.dissolved+=t,!n.warnedMelt&&n.crust>.1&&(n.warnedMelt=!0,this.emit(`melt`,{pan:n}))}let s=o*jm;n.D>s&&(n.crust+=n.D-s,n.D=s),n.conc=o>.01?n.D/o/Mm:0;let c=n.ready;n.ready=n.crust>1,n.ready&&!c&&this.emit(`saltReady`,{pan:n})}}rake(e){if(this.ended||e.crust<.2)return 0;let t=Math.round(e.crust*4);return e.crust=0,e.warnedMelt=!1,e.ready=!1,this.store.salt+=t,this.stats.raked+=t,this.emit(`rake`,{pan:e,amount:t}),t}saltAt(e){let t=this.sim.pan[e];if(t<0)return 0;let n=this.pans[t];return ep(n.crust/(n.cells.length*.045),0,1)}brineAt(e){let t=this.sim.pan[e];if(t<0)return-1;let n=this.pans[t];return ep(((n.conc||1)-1)/1.6,0,1)}updateWeirs(e){let t=Cp(this.t)<0;for(let n of this.weirs){let r=0;for(let e of n.cells)r+=Math.hypot(this.sim.vx[e],this.sim.vz[e])*Math.min(1,this.sim.d[e]);t&&!n.damage&&(n.catch=Math.min(24,n.catch+r*e*.02/(1+Nm*this.weirs.indexOf(n))));let i=Math.min(1,n.catch/12);n.mesh.userData.fish.visible=n.catch>=1,n.mesh.userData.fish.scale.set(.4+i*.6,.01+i*.9,.4+i*.6),n.catch>=3&&!n.told&&(n.told=!0,this.emit(`fishReady`,{weir:n}))}}collect(e){if(this.ended)return 0;let t=Math.floor(e.catch);return t<1?0:(e.catch-=t,e.told=!1,e.mesh.userData.fish.visible=!1,this.store.fish+=t,this.stats.fished+=t,this.emit(`fish`,{weir:e,amount:t}),t)}tick(e){if(this.paused||this.hostPaused||this.hintHold||this.frozen||this.held||this.ended)return 0;this.acc+=Math.min(e,1)*this.speed;let t=0,n=60;for(;this.acc>=.03333333333333333&&n-->0;){let e=Sp(this.t);for(let t=0;t<4;t++)this.sim.step(em/4,e);if(this.t+=em,this.sunElev=jp(this.t).elev,this.updatePans(em),this.updateWeirs(em),this.updateOysters(em),this.sediment.update(em),this.works.update(em),this.storm.update(em),this.sim.dry(em,this.sunElev),this.people.update(em),this.economy.update(em),this.acc-=em,t+=em,this.t>=Tm-1e-6){this.t=Tm,this.finishSeason();break}}n<=0&&(this.acc=0);for(let t of this.gates){let n=+!!t.open;t.anim+=ep(n-t.anim,-e*1.6,e*1.6),t.mesh.userData.door.position.y=-.05+t.anim*1.55,t.mesh.userData.wheel.rotation.x=t.anim*6,qp(t.mesh,t.open)}return t}thingAt(e,t){let n=sp(e),r=cp(t);for(let e of[...this.works.mills,...this.works.houses])if(Math.hypot(e.i-n,e.j-r)<3)return e;for(let n of this.works.pumps)if(Math.hypot(n.mesh.position.x-e,n.mesh.position.z-t)<1.2)return n;for(let e of this.gates)if(Math.abs(e.i-n)<=1&&Math.abs(e.j-r)<=1)return e;for(let n of this.weirs)for(let[r,,i]of n.mesh.userData.pts)if(Math.hypot(r-e,i-t)<1.1)return n;for(let e of this.oysters)if(Math.hypot(e.i-n,e.j-r)<2.4)return e;for(let e of this.pans)if(n>=e.i0-1&&n<=e.i0+e.w&&r>=e.j0-1&&r<=e.j0+e.d)return e;return null}centerOf(e){return e.kind===`pump`?e.mesh.position.clone().add(new V(0,1,0)):e.kind===`mill`||e.kind===`house`?e.mesh.position.clone().add(new V(0,4,0)):e.kind===`gate`?new V(ap(e.i),this.world.h[e.j*256+e.i]+3.6,op(e.j)):e.kind===`pan`?new V(ap(e.i0+e.w/2-.5),rp+.6,op(e.j0+e.d/2-.5)):e.kind===`oyster`?new V(ap(e.i),this.world.h[e.j*256+e.i]+1.4,op(e.j)):e.kind===`weir`?e.mesh.position.clone().add(e.mesh.userData.fish.position):new V}},Im=.18,Lm=class{constructor(e,t,n){this.cam=e,this.world=t,this.dom=n,this.target=new V(0,0,0),this.goal={x:0,z:0,yaw:.6,pitch:.62,dist:52},this.cur={...this.goal},this.keys=new Set,this.bounds={x0:-60,x1:60,z0:-40,z1:90},this.drag=null,this.onClick=null,this.leftPans=!0,this.bind()}set(e,t,n,r,i,a=!0){Object.assign(this.goal,{x:e,z:t,yaw:n,pitch:r,dist:ep(i,14,120)}),a?Object.assign(this.cur,this.goal):(this.glide=!0,this.glideAt=performance.now())}zoomBy(e){this.goal.dist=ep(this.goal.dist*Math.exp(e*Im),14,120)}gliding(){let e=this.goal,t=this.cur;return Math.abs(e.x-t.x)+Math.abs(e.z-t.z)+Math.abs(e.dist-t.dist)>.05}settle(){Object.assign(this.cur,this.goal),this.glide=!1,this.follow(0),this.cam.updateMatrixWorld(!0)}bind(){let e=this.dom;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,t=>{e.setPointerCapture(t.pointerId),this.drag={b:t.button,x:t.clientX,y:t.clientY,sx:t.clientX,sy:t.clientY,moved:!1,shift:t.shiftKey}}),e.addEventListener(`pointermove`,e=>{let t=this.drag;if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,Math.hypot(e.clientX-t.sx,e.clientY-t.sy)>5&&(t.moved=!0),t.moved&&(t.b===2||t.b===0&&t.shift?(this.goal.yaw-=n*.006,this.goal.pitch=ep(this.goal.pitch+r*.004,.28,1.35)):(t.b===1||t.b===0&&this.leftPans)&&this.panScreen(n,r))}),e.addEventListener(`pointerup`,e=>{let t=this.drag;this.drag=null,t&&t.b===0&&this.onClick&&this.onClick(e,t.moved)}),e.addEventListener(`wheel`,e=>{e.preventDefault(),e.deltaY&&this.zoomBy(Math.sign(e.deltaY))},{passive:!1}),this.held=new Map,window.addEventListener(`keydown`,e=>{this.locked||e.target?.closest?.(`input, select, textarea`)||(this.held.has(e.code)||this.held.set(e.code,performance.now()),this.keys.add(e.code))}),window.addEventListener(`keyup`,e=>{let t=this.held.get(e.code);t!==void 0&&this.applyKeys(new Set([e.code]),(performance.now()-t)/1e3),this.held.delete(e.code),this.keys.delete(e.code)}),window.addEventListener(`blur`,()=>{this.keys.clear(),this.held.clear()})}panScreen(e,t){let n=this.cur.dist*.0021,r=Math.cos(this.cur.yaw),i=Math.sin(this.cur.yaw);this.goal.x-=(e*r+t*i/Math.max(.5,Math.sin(this.cur.pitch)))*n,this.goal.z-=(-e*i+t*r/Math.max(.5,Math.sin(this.cur.pitch)))*n}lock(e){this.locked=e,e&&(this.keys.clear(),this.held.clear())}update(e){let t=performance.now();for(let[e,n]of this.held)this.applyKeys(new Set([e]),Math.min(.5,(t-n)/1e3)),this.held.set(e,t);this.follow(e)}applyKeys(e,t){let n=this.goal,r=this.cur.dist*.9*t,i=0,a=0;if((e.has(`KeyW`)||e.has(`ArrowUp`))&&--a,(e.has(`KeyS`)||e.has(`ArrowDown`))&&(a+=1),(e.has(`KeyA`)||e.has(`ArrowLeft`))&&--i,(e.has(`KeyD`)||e.has(`ArrowRight`))&&(i+=1),i||a){let e=Math.cos(this.cur.yaw),t=Math.sin(this.cur.yaw);n.x+=(i*e+a*t)*r,n.z+=(-i*t+a*e)*r}e.has(`KeyQ`)&&(n.yaw+=t*1.6),e.has(`KeyE`)&&(n.yaw-=t*1.6),e.has(`KeyR`)&&(n.pitch=ep(n.pitch+t*.8,.28,1.35)),e.has(`KeyF`)&&(n.pitch=ep(n.pitch-t*.8,.28,1.35)),(e.has(`Equal`)||e.has(`NumpadAdd`))&&(n.dist=ep(n.dist*(1-t),14,120)),(e.has(`Minus`)||e.has(`NumpadSubtract`))&&(n.dist=ep(n.dist*(1+t),14,120))}follow(e){let t=this.goal;t.x=ep(t.x,this.bounds.x0,this.bounds.x1),t.z=ep(t.z,this.bounds.z0,this.bounds.z1),this.glide&&(!this.gliding()||performance.now()-this.glideAt>700)&&(this.gliding()&&Object.assign(this.cur,this.goal),this.glide=!1);let n=1-Math.exp(-e*(this.glide?20:9)),r=this.cur;r.x=tp(r.x,t.x,n),r.z=tp(r.z,t.z,n),r.yaw=tp(r.yaw,t.yaw,n),r.pitch=tp(r.pitch,t.pitch,n),r.dist=tp(r.dist,t.dist,n);let i=Math.max(.4,Lp(this.world,r.x,r.z));this.target.set(r.x,i,r.z);let a=Math.cos(r.pitch),o=r.x+Math.sin(r.yaw)*a*r.dist,s=r.z+Math.cos(r.yaw)*a*r.dist,c=i+Math.sin(r.pitch)*r.dist;c=Math.max(c,Lp(this.world,o,s)+2.5),this.cam.position.set(o,c,s),this.cam.lookAt(this.target)}pick(e,t){let n=this.dom.getBoundingClientRect(),r=new B((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),i=new ec;i.setFromCamera(r,this.cam);let a=i.ray.origin,o=i.ray.direction,s=0,c=a.y-Lp(this.world,a.x,a.z);for(let e=0;e<600;e++){s+=Math.max(.15,s*.01);let e=a.x+o.x*s,t=a.y+o.y*s,n=a.z+o.z*s,r=t-Lp(this.world,e,n);if(r<0){let e=s-r/(r-c)*Math.max(.15,s*.01);return new V(a.x+o.x*e,a.y+o.y*e,a.z+o.z*e)}c=r}return null}},Y=e=>document.getElementById(e),Rm={dredge:`Clear silt from a pan (14 shillings, 12 seconds) or a 5×5 channel patch (8 shillings, 8 seconds). One crew; works in shallow water and waits out the flood.`,hand:`Click gates to open or shut them. Click pans, weirs and exposed oyster beds to gather the harvest.`,dig:`Drag from a creek to carry the tide to your pans. Costs 1 shilling per cell.`,gate:`Set a sluice in a channel or pan bank. Open to fill; shut near high water to trap brine. Costs 12 shillings.`,pan:`Drag on clear marsh to size a salt pan. Add a sluice and a channel from a creek. Costs 30 shillings.`,weir:`Build across a creek. The ebb fills its fish basket. Click to collect. Costs 15 shillings.`,oyster:`Plant on a low mud bank. Grows under the flood; rake when exposed. Costs 18 shillings.`,causeway:`Drag a raised route from the village to the works. Stays dry through spring tides, but blocks water and takes pan space. Costs 2 shillings per cell.`},zm={dredge:`<path d="M3 24 H28 L24 29 H7 Z" fill="#4a3b2c"/><path d="M14 23 V5 L26 15 L23 22" stroke="#7d5f33" stroke-width="3" fill="none"/><path d="M20 20 L27 21 L24 25 Z" fill="#8a8c8a"/>`,causeway:`<path d="M3 25 L11 10 L21 10 L29 25 Z" fill="#c4ad84" stroke="#2d2a24" stroke-width="1.6"/><path d="M10 21 H23 M12 17 H21 M14 13 H19" stroke="#7d6449"/>`,oyster:`<path d="M8 26 C-2 10 13 1 22 7 C35 17 21 30 8 26 Z" fill="#b5b1a3" stroke="#2d2a24" stroke-width="1.6"/><path d="M11 23 Q8 10 21 11 M14 24 Q13 15 23 15" fill="none" stroke="#6c7775"/>`,hand:`<path d="M11 28 C7 22 6 18 8 16 C9.5 15 11 16 12 18 L12 7 C12 5 15 5 15 7 L15 15 L15 5 C15 3 18 3 18 5 L18 15 L18 6 C18 4 21 4 21 6 L21 16 L21 9 C21 7 24 7 24 9 L24 20 C24 25 21 28 17 28 Z" fill="#f2e6cc" stroke="#2d2a24" stroke-width="1.5" stroke-linejoin="round"/>`,dig:`<path d="M7 25 L19 13" stroke="#5a4630" stroke-width="2.6" stroke-linecap="round"/><path d="M17 8 L24 15 L21 18 C18 21 13 19 13 15 Z" fill="#8a8c8a" stroke="#2d2a24" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 28 C9 25 14 29 21 26 C25 24.5 28 26 30 27" stroke="#3f6168" stroke-width="1.8" fill="none"/>`,gate:`<rect x="6" y="5" width="3.2" height="23" fill="#4a3b2c" stroke="#2d2a24"/><rect x="22.8" y="5" width="3.2" height="23" fill="#4a3b2c" stroke="#2d2a24"/><rect x="9.2" y="10" width="13.6" height="10" fill="#9b7d58" stroke="#2d2a24" stroke-width="1.3"/><path d="M4 5 H28" stroke="#2d2a24" stroke-width="2.4"/><path d="M9 25 C12 23 20 27 23 25" stroke="#3f6168" stroke-width="1.8" fill="none"/>`,pan:`<rect x="4" y="9" width="24" height="15" rx="1.5" fill="#a48764" stroke="#2d2a24" stroke-width="1.5"/><rect x="7.5" y="12" width="17" height="9" fill="#f3efe4" stroke="#8a7a62"/><path d="M10 17 l2 -2 l2 2 M17 15 l2 -2 l2 2" stroke="#c9bfae" fill="none"/>`,weir:`<path d="M4 12 L16 20 L28 12" stroke="#b0975f" stroke-width="4" fill="none" stroke-linejoin="round"/><g stroke="#4a3b2c" stroke-width="1.8"><path d="M4 8 V16"/><path d="M10 12 V20"/><path d="M16 16 V24"/><path d="M22 12 V20"/><path d="M28 8 V16"/></g><path d="M3 27 C9 24 23 30 29 26" stroke="#3f6168" stroke-width="1.8" fill="none"/>`},Bm=[{id:`hand`,key:`1`,name:`Work`,cost:`click works`},{id:`dig`,key:`2`,name:`Channel`,cost:`${Am.dig} / cell`},{id:`gate`,key:`3`,name:`Sluice`,cost:`${Am.gate}`},{id:`pan`,key:`4`,name:`Salt pan`,cost:`${Am.pan}`},{id:`weir`,key:`5`,name:`Fish weir`,cost:`${Am.weir}`},{id:`oyster`,key:`6`,name:`Oyster bed`,cost:`${Am.oyster}`},{id:`causeway`,key:`7`,name:`Causeway`,cost:`${Am.causeway} / cell`},{id:`dredge`,key:`8`,name:`Dredge`,cost:`8 / 14`}],Vm=class{constructor(e,t,n){this.game=e,this.chart=Y(`chart`),this.cx=this.chart.getContext(`2d`),this.moon=Y(`moon`),this.mx=this.moon.getContext(`2d`),this.lastStore={salt:-1,fish:-1,coin:-1},this.highlightLevel=null;let r=Y(`tools`);r.innerHTML=Bm.map(e=>`<button class="tool${e.id===`hand`?` on`:``}" data-tool="${e.id}" aria-label="${e.name}, shortcut ${e.key}" aria-describedby="tool-help">
      <svg viewBox="0 0 32 32">${zm[e.id]}</svg><span class="nm">${e.name}<span class="key">${e.key}</span></span><span class="cs">${e.cost}</span></button>`).join(``),r.addEventListener(`click`,e=>{let n=e.target.closest(`[data-tool]`);n&&t(n.dataset.tool)});let i=e=>{let t=e.target.closest(`[data-tool]`);if(!t)return;let n=Bm.find(e=>e.id===t.dataset.tool),r=Y(`tool-help`);r.innerHTML=`<b>${n.name} · ${n.key}</b><span>${Rm[n.id]}</span>`,r.hidden=!1;let i=t.getBoundingClientRect(),a=r.offsetWidth;r.style.left=Math.max(8,Math.min(innerWidth-a-8,i.x+i.width/2-a/2))+`px`,r.style.bottom=innerHeight-i.top+14+`px`};r.addEventListener(`pointerover`,i),r.addEventListener(`focusin`,i),r.addEventListener(`pointerleave`,()=>{Y(`tool-help`).hidden=!0}),r.addEventListener(`focusout`,()=>{Y(`tool-help`).hidden=!0}),r.addEventListener(`click`,()=>{Y(`tool-help`).hidden=!0}),Y(`speed`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-speed]`);t&&n(+t.dataset.speed)}),this.tip=Y(`tip`),this.hint=Y(`hint`),Y(`market`).innerHTML=ym.map(e=>`<tr><td>${e}<small id="rec-${e}"></small></td><td id="price-${e}"></td><td><button class="btn" data-cargo="${e}" aria-pressed="true">Selling: ON</button></td></tr>`).join(``),Y(`market`).addEventListener(`click`,t=>{let n=t.target.closest(`[data-cargo]`);if(n){let t=n.dataset.cargo;e.economy.toggle(t),this.updateEconomy();let r=e.economy.selling[t];this.message(r?`Selling ${t} at the next landing: ON.`:`Selling ${t} at the next landing: OFF. It stays in store until you switch it back ON.`,3200)}}),Y(`play-again`).addEventListener(`click`,()=>location.reload()),Y(`goal-progress`).max=xm,Y(`trade-fold`).addEventListener(`click`,()=>{let e=Y(`trade-card`).classList.toggle(`folded`);Y(`trade-fold`).textContent=e?`Open`:`Fold`,Y(`trade-fold`).setAttribute(`aria-expanded`,String(!e))}),Y(`works-tools`).innerHTML=pm.map(e=>`<button class="btn" data-work="${e.id}" title="${e.detail}"><b>${e.name} <span class="key">${e.key}</span></b><span>${e.cost} sh · day ${e.day}</span></button>`).join(``),Y(`works-tools`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-work]`);n&&t(n.dataset.work)}),this.fitChart(),this.chartResize=new ResizeObserver(()=>{this.fitChart(),this.drawChart()}),this.chartResize.observe(this.chart)}fitChart(){let e=this.chart.getBoundingClientRect(),t=Math.min(2,window.devicePixelRatio||1),n=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t));this.chart.width!==n&&(this.chart.width=n),this.chart.height!==r&&(this.chart.height=r),this.dpr=t}setTool(e){for(let t of document.querySelectorAll(`.tool`))t.classList.toggle(`on`,t.dataset.tool===e);for(let t of document.querySelectorAll(`[data-work]`))t.classList.toggle(`on`,t.dataset.work===e);let t=pm.find(t=>t.id===e);Y(`repair`).classList.toggle(`on`,e===`repair`),Y(`work-help`).textContent=t?t.detail:e===`repair`?`Click damaged works after the surge. Repairs cost 24 shillings and take 10 seconds.`:``}setSpeed(e,t){for(let n of document.querySelectorAll(`[data-speed]`)){let r=+n.dataset.speed;n.classList.toggle(`on`,t?r===0:r===e)}Y(`paused`).classList.toggle(`show`,t)}update(){let e=this.game,t=e.t;Y(`clock`).textContent=`Day ${Math.min(15,Ep(t))} · ${Op(t)}`,Y(`spring`).textContent=Ap(t);let n=Sp(t),r=Cp(t);Y(`level`).textContent=`${n>=0?`+`:`−`}${Math.abs(n).toFixed(2)} m`,Y(`trend`).textContent=Math.abs(r)<.004?`slack water`:r>0?`flood, rising`:`ebb, falling`;let i=wp(t,`high`),a=wp(t,`low`),o=i<a?`High ${Op(i)}`:`Low ${Op(a)}`;Y(`nexts`).textContent=o;for(let t of[`salt`,`fish`,`oysters`,`coin`]){let n=t===`coin`?Math.round(e.store[t]*10)/10:Math.floor(e.store[t]);if(n!==this.lastStore[t]){let e=Y(`st-`+t);e.querySelector(`b`).textContent=t===`coin`?n.toFixed(1):n,this.lastStore[t]>=0&&n>this.lastStore[t]&&(e.classList.remove(`bump`),e.offsetWidth,e.classList.add(`bump`)),this.lastStore[t]=n}}this.updateEconomy(),this.drawChart(),this.drawMoon()}updateEconomy(){let e=this.game,t=e.economy,n=t.state===`leaving`?wp(t.high+2,`high`):t.high,r=Math.max(0,n-1.5-e.t);Y(`boat-status`).textContent={away:`Waiting offshore`,arriving:`Sailing up the creek`,docked:`At the quay · room for ${t.capacity} cargo`,leaving:`Out on the ebb`,sheltering:`Sheltering from the surge`}[t.state],Y(`boat-next`).textContent=t.state===`sheltering`?`Trade resumes after the storm. Stilt homes shelter stored cargo.`:t.state===`docked`?`Trading until the ebb. Holds ${t.cap()} cargo per visit.`:n-1.5>=Tm?`No more landings: the season account is drawn at Day 15 · 14:00, before the trader returns.`:`Next landing ${Op(n-1.5)} · ${Math.ceil(r)}s at 1×`,!this.traderSeen&&(t.state===`docked`||t.visits>0)&&(this.traderSeen=!0,Y(`trade-card`).hidden=!1,t.visits<=1&&e.t-mp<90&&this.message(`The trader has landed. The trade panel is at right: marked cargo sells at every high water.`,6e3));let i=t.nextQuay(),a=Y(`quay-btn`);a.hidden=!i,i&&(a.textContent=t.quayOpen()?`Add a quay berth · +24 cargo per visit · ${i.cost} sh`:`Quay berth: opens day ${i.day} · ${i.cost} sh`,a.disabled=e.ended||!t.quayOpen());for(let n of ym){Y(`price-`+n).textContent=t.price(n).toFixed(1);let r=t.recoverDays(n),i=Math.floor(e.store[n]);Y(`rec-`+n).textContent=r===0?`at its usual price (${bm[n].toFixed(1)})`:`price recovers to ${bm[n].toFixed(1)} in about ${r<1?`a day`:r<1.5?`1 day`:Math.round(r)+` days`} if you hold it${i?` · ${i} in store`:``}`;let a=document.querySelector(`[data-cargo="${n}"]`);a.textContent=t.selling[n]?`Selling: ON`:`Selling: OFF`,a.title=`${n}: ${t.selling[n]?`will be sold at the next landing. Click to keep it in store instead.`:`kept in store, not sold. Click to sell it at the next landing.`}`,a.setAttribute(`aria-label`,`Selling ${n} at next landing: ${t.selling[n]?`ON`:`OFF`}`),a.classList.toggle(`holding`,!t.selling[n]),a.setAttribute(`aria-pressed`,String(t.selling[n]))}Y(`ledger-summary`).textContent=`Ledger · +${t.earned.toFixed(1)} earned / −${t.spent.toFixed(1)} spent`;let o=t.ledger.map(e=>`<div class="receipt"><span>${Op(e.t)} · ${e.label}</span><b>${e.amount>=0?`+`:`−`}${Math.abs(e.amount).toFixed(1)}</b></div>`).join(``);this.receipts!==o&&(Y(`ledger`).innerHTML=o,this.receipts=o),Y(`goal-title`).textContent=`Goal: ${xm} shillings by Day 15 · 14:00`,Y(`goal-progress`).max=xm,Y(`goal-text`).textContent=`${t.earned.toFixed(1)} / ${xm} shillings earned from trade`,Y(`goal-progress`).value=t.earned,Y(`goal-master`).textContent=t.earned>=1700?`Master trader: ${Sm} reached`:`Master trader: ${Sm}${t.earned>=1300?` · ${Math.ceil(Sm-t.earned)} to go`:` (second goal)`}`;let s=t.plan(),c=ym.filter(e=>t.selling[e]),l=ym.filter(e=>t.selling[e]&&s.left[e]>0),u=l.reduce((e,n)=>e+s.left[n]*t.price(n),0);Y(`cargo-plan`).textContent=`Next landing takes ${s.total} of ${c.reduce((t,n)=>t+Math.floor(e.store[n]),0)} (room ${s.room}, highest price first): ${ym.map(e=>`${e} ${s.takes[e]}`).join(`, `)}.${l.length?` Left over: ${l.map(e=>`${s.left[e]} ${e}`).join(`, `)} (about ${Math.round(u)} sh). Hold is full: add a quay berth or turn a cheap cargo OFF.`:``}`,Y(`cargo-plan`).classList.toggle(`warn`,l.length>0),Y(`goal-time`).textContent=t.earned>=1300?e.storm.passed?`Surge ${e.storm.account().score}/100 · repair damage before season end`:`Trade goal met. Weather the surge with at least 70/100.`:`${Math.ceil(Math.max(0,Tm-e.t)/90)} tide-days left${e.storm.passed?``:e.storm.active?` · the surge is here`:` · prepare for the surge on day 13`}`,Y(`hand-summary`).textContent=`Village hands · ${e.people.hands.length} / ${e.works.maxHands()}`;let d=e.people.hireProblem(),f=e.people.hands.length>=e.works.maxHands();Y(`hire`).disabled=e.ended||f||e.store.coin<24,Y(`hire`).title=f?`Homes support ${e.works.maxHands()} hands: a stilt house adds two.`:e.store.coin<24?`Hiring costs 24 shillings.`:d?`Hire anyway: ${d}. Wages run at 6 sh per landing.`:`Hire a hand: 24 sh, then 6 sh per landing.`,Y(`hire`).classList.toggle(`warn`,!!d),Y(`hire-note`).textContent=d?`Needs a causeway: hands cannot reach ${d.slice(d.indexOf(`reach `)+6).replace(/ on dry ground.*/,``)}.`:``;let p=e.oysters.filter(t=>t.stock>=2&&!e.people.hands.some(e=>e.job===t));Y(`hand-note`).textContent=p.length?`${p.map(t=>`Oysters ${e.oysters.indexOf(t)+1}: ${Math.floor(t.stock)} ready, no hand`).join(` · `)}. A hand does one work only: set a hand's work to the bed, or rake it yourself at low water.`:e.oysters.length&&e.people.hands.length?`Each hand tends one work. Oyster beds are raked only by a hand set to that bed.`:``;let m=e.people.jobs(),h=`${m.length}:${e.people.hands.length}`;this.handsVersion!==h&&(Y(`hands`).innerHTML=e.people.hands.map((e,t)=>`<div class="hand-row"><label>${e.name} <select data-hand="${t}" aria-label="${e.name}'s work">${m.map((t,n)=>`<option value="${n}" ${t.thing===e.job?`selected`:``}>${t.label}</option>`).join(``)}</select></label><span id="hand-${t}"></span><button class="btn fix" data-fix="${t}" hidden>Build a causeway to ${e.job===void 0?`it`:m.find(t=>t.thing===e.job)?.label||`its work`}</button></div>`).join(``),this.handsVersion=h),e.people.hands.forEach((e,t)=>{Y(`hand-`+t).textContent=e.status;let n=document.querySelector(`[data-fix="${t}"]`);if(n){n.hidden=!/Cut off|No dry route|causeway/.test(e.status);let t=`Fix: build a causeway to ${m.find(t=>t.thing===e.job)?.label||`its work`}`;n.textContent!==t&&(n.textContent=t)}}),Y(`works-card`).hidden=e.works.day()<3;for(let t of pm){let n=document.querySelector(`[data-work="${t.id}"]`);n.disabled=e.ended||!e.works.unlocked(t.id),n.lastElementChild.textContent=e.works.unlocked(t.id)?`${t.cost} sh`:`Opens day ${t.day}`}let g=pm.find(t=>!e.works.unlocked(t.id));Y(`works-next`).textContent=g?`Next: ${g.name.toLowerCase()} on day ${g.day}`:(({braced:e,total:t,text:n})=>`${e} / ${t} works protected · ${n}`)(e.works.stormPlan());let _=e.works.rates(),v=e.works.pumps.filter(e=>e.active).length;Y(`power`).textContent=e.works.mills.length?`Mill power ${Math.floor(e.works.energy)} / ${e.works.mills.length*120} · ${e.works.mills.some(e=>e.output>.05)?`wheel turning`:`wheel resting (slack water)`} · ${v} of ${e.works.pumps.length} pumps working${_?` · per tide-day: +${_.gen.toFixed(0)} power, pumps use ${_.used.toFixed(0)}, lift ${_.lifted.toFixed(1)} m³`:``}`:`Build with the tide. Prepare for the equinox.`;let y=!e.sediment.job&&e.pans.some(t=>!t.maintaining&&e.sediment.panDepth(t)>.16&&t.V/t.cells.length<.05);document.querySelector(`.tool[data-tool="dredge"]`)?.classList.toggle(`attn`,y&&!e.ended&&!document.querySelector(`.tool[data-tool="dredge"]`).classList.contains(`on`));let b=e.sediment.job;Y(`dredge-status`).textContent=b?`Dredging · ${Math.ceil(b.left)}s left${b.wet>.25?` · waiting for the ebb`:``}`:`Silt in first pan: ${(e.sediment.panDepth(e.pans[0])*100).toFixed(0)} cm · Dredge (8)`;let x=e.storm;Y(`storm-note`).hidden=!x.warned,Y(`storm-title`).textContent=x.passed?`Surge passed · ${x.account().grade}`:x.active?`Storm surge · hold your sluices shut`:`Surge on day 13 · ${Math.ceil(gp-e.t)}s to landfall`,Y(`storm-detail`).textContent=x.passed?`${x.damageCount} damaged works · ${x.cargoLost} cargo lost · Repair (R)`:(({braced:e,total:t,text:n})=>`Forecast crest +2.9 m. ${e} / ${t} works protected. ${n}`)(e.works.stormPlan());let S=e.works.protectAllInfo();Y(`storm-cost`).textContent=S.live&&S.n?`Protect all ${S.n}: ${S.all} sh (you have ${Math.floor(e.store.coin)}).${S.afford<S.n?` Cheapest ${S.afford||0}: ${S.afford*S.cost} sh now.`:``}`:``,Y(`protect-all`).hidden=!(S.live&&S.n),Y(`protect-all`).disabled=S.afford<1;let C=S.afford?`Protect ${S.afford} work${S.afford>1?`s`:``} now · ${S.afford*S.cost} sh`:`Need ${S.cost} sh for one bank`;Y(`protect-all`).textContent!==C&&(Y(`protect-all`).textContent=C),Y(`repair`).disabled=e.ended||!x.passed,Y(`repair-status`).textContent=x.repairJob?`Repairing ${x.repairJob.thing.name.toLowerCase()} · ${Math.ceil(x.repairJob.left)}s`:x.passed?`${x.account().unrepaired} works need repair`:``;let w=Y(`card`).getBoundingClientRect().bottom+10;Y(`works-card`).style.top=`${w}px`,Y(`works-card`).style.maxHeight=`${Math.max(80,Y(`tools`).getBoundingClientRect().top-w-14)}px`,e.ended&&!this.endShown&&this.showEnd()}showEnd(){this.endShown=!0;let e=this.game.result;Y(`end-title`).textContent=e.success?`A living, through the storm.`:`Every tide teaches.`;let t=e.tradeSuccess?`Goal met: ${e.earned.toFixed(1)} of ${xm} shillings traded.`:`Goal missed by ${Math.max(1,Math.round(xm-e.earned))} shillings.`,n=e.master?`Master trader: ${Sm} reached.`:e.tradeSuccess?`Master trader (${Sm}): missed by ${Math.max(1,Math.round(Sm-e.earned))}.`:``;Y(`end-verdict`).textContent=[t,n,`${e.storm.grade}: ${e.storm.score}/100 through the surge${e.storm.score>=70?``:` (70 needed)`}.`].filter(Boolean).join(` `),Y(`end-sub`).textContent=`${e.earned.toFixed(1)} / ${xm} shillings traded. ${e.success?`Your water machine held.`:`The account shows what your next season can protect.`}`;let r=[[`Salt raked · score at list value 2 each`,`${e.salt} × 2 = ${e.salt*2} points (not money)`],[`Fish landed · score at list value 3 each`,`${e.fish} × 3 = ${e.fish*3} points (not money)`],[`Oysters gathered · score at list value 4 each`,`${e.oysters} × 4 = ${e.oysters*4} points (not money)`],[`Salt sold at the quay (prices actually paid)`,`${e.sold.salt} for ${e.revenue.salt.toFixed(1)} sh · ${e.sold.salt?(e.revenue.salt/e.sold.salt).toFixed(1):`0.0`} each`],[`Fish sold at the quay (prices actually paid)`,`${e.sold.fish} for ${e.revenue.fish.toFixed(1)} sh · ${e.sold.fish?(e.revenue.fish/e.sold.fish).toFixed(1):`0.0`} each`],[`Oysters sold at the quay (prices actually paid)`,`${e.sold.oysters} for ${e.revenue.oysters.toFixed(1)} sh · ${e.sold.oysters?(e.revenue.oysters/e.sold.oysters).toFixed(1):`0.0`} each`],[`Trade income (the three sales above added up)`,`+${e.earned.toFixed(1)}`],[`Salt dissolved by floods`,`−${e.losses}`],[`Stormkeeping bonus`,`${e.storm.score} × 10 = ${e.storm.score*10}`],[`Season score = trade income + list-value points − dissolved salt + stormkeeping`,`${e.earned.toFixed(1)} + ${e.salt*2+e.fish*3+e.oysters*4} − ${e.losses} + ${e.storm.score*10} = ${e.score}`],[`Surge damage / exposed works`,`${e.storm.damaged} / ${e.storm.total}`],[`Works repaired / still damaged`,`${e.storm.repaired} / ${e.storm.unrepaired}`],[`Cargo swept away`,`${e.storm.cargoLost} · salt ${e.storm.losses.salt}, fish ${e.storm.losses.fish}, oysters ${e.storm.losses.oysters}`],[`Highest storm water`,`+${e.storm.peak.toFixed(2)} m`],[`Dredging completed`,`${e.dredges} jobs · ${e.siltRemoved} m³`],[`Mill power / brine lifted`,`${e.power} power · ${e.lifted} m³`],[`Harvest gathered by hands`,e.workerHarvest],[`Wet footing`,`${e.wetSeconds} worker-seconds`],[`Building & hiring costs`,`${e.spent.toFixed(1)} sh`],[`Closing purse`,`${e.coin.toFixed(1)} sh`],[`Cargo sold`,`${e.sold.salt} salt · ${e.sold.fish} fish · ${e.sold.oysters} oysters`],[`Unsold stores`,`${e.stock.salt} salt · ${e.stock.fish} fish · ${e.stock.oysters} oysters`]];Y(`score-lines`).innerHTML=r.map(([e,t])=>`<div class="receipt"><span>${e}</span><b>${t}</b></div>`).join(``),Y(`end-card`).hidden=!1,Y(`paused`).classList.remove(`show`),this.hideHint(),this.hideTip(),Y(`play-again`).focus()}drawChart(){let e=this.cx,t=this.chart.width,n=this.chart.height,r=this.dpr,i=this.game.t,a=67.5,o=i-90*.12,s=o+a,c=-1.6,l=s>=gp&&o<=_p?3.5:2,u=e=>(e-o)/a*t,d=e=>n-(e-c)/(l-c)*n;e.clearRect(0,0,t,n),e.fillStyle=`#f7efdc`,e.fillRect(0,0,t,n),e.strokeStyle=`#d9c9a6`,e.lineWidth=1;let f=90/24;for(let i=Math.ceil(o/f)*f;i<s;i+=f){let a=Math.round(Dp(i));if(e.globalAlpha=a%6==0?.9:.35,e.beginPath(),e.moveTo(u(i),0),e.lineTo(u(i),n),e.stroke(),a%6==0){e.fillStyle=`#8a7c62`,e.font=`${13*r}px 'Alegreya Sans', sans-serif`;let o=`${String(a%24).padStart(2,`0`)}:00`;e.fillText(o,Math.max(3*r,Math.min(t-e.measureText(o).width-3*r,u(i)+3*r)),n-4*r)}}e.globalAlpha=1,e.fillStyle=`rgba(48,58,90,0.10)`;for(let t=o;t<s;t+=f/4){let r=jp(t);(r.dayFrac<0||r.dayFrac>1)&&e.fillRect(u(t),0,u(t+f/4)-u(t)+1,n)}let p=(n,i,a)=>{e.setLineDash([4*r,4*r]),e.strokeStyle=a,e.lineWidth=1.2*r,e.beginPath(),e.moveTo(0,d(n)),e.lineTo(t,d(n)),e.stroke(),e.setLineDash([]),e.fillStyle=a,e.font=`${13*r}px 'Alegreya Sans', sans-serif`,e.fillText(i,t-e.measureText(i).width-4*r,Math.max(14*r,d(n)-3*r))};p(this.game.panFloor(this.game.pans[0]),`pan floor`,`#9a7a52`),p(ip,`bank top`,`#9a4b31`),l>2&&p(3.05,`storm banks`,`#47736c`),e.beginPath();for(let n=0;n<=t;n+=2*r){let r=Sp(o+n/t*a);n===0?e.moveTo(n,d(r)):e.lineTo(n,d(r))}e.lineTo(t,n),e.lineTo(0,n),e.closePath(),e.fillStyle=`rgba(63,97,104,0.16)`,e.fill(),e.beginPath();for(let n=0;n<=t;n+=2*r){let r=Sp(o+n/t*a);n===0?e.moveTo(n,d(r)):e.lineTo(n,d(r))}e.strokeStyle=`#2f4b52`,e.lineWidth=2*r,e.stroke(),e.font=`700 ${13*r}px 'Alegreya Sans', sans-serif`;let m=o;for(let i=0;i<4;i++){let i=wp(m,`high`),a=wp(m,`low`);for(let[c,l]of[[i,`HW`],[a,`LW`]])if(c<s&&c>o){let i=Sp(c);e.fillStyle=`#2f4b52`,e.beginPath(),e.arc(u(c),d(i),2.6*r,0,7),e.fill();let a=`${l} ${Op(c)}`,o=e.measureText(a).width,s=l===`HW`?d(i)+(d(i)<24*r?18:-7)*r:d(i)+(d(i)>n-34*r?-8:16)*r;e.fillText(a,Math.max(3*r,Math.min(t-o-3*r,u(c)-o/2)),Math.max(14*r,Math.min(n-18*r,s)))}m=Math.min(i,a)+1}let h=u(i),g=Sp(i);e.strokeStyle=`#a8834e`,e.lineWidth=2*r,e.beginPath(),e.moveTo(h,0),e.lineTo(h,n),e.stroke(),e.fillStyle=`#a8834e`,e.beginPath(),e.arc(h,d(g),4.5*r,0,7),e.fill(),e.strokeStyle=`#2d2a24`,e.lineWidth=1.2*r,e.stroke(),e.fillStyle=`#7d5f33`,e.font=`700 ${13*r}px 'Alegreya Sans', sans-serif`,e.fillText(`now`,h+5*r,14*r)}drawMoon(){let e=this.mx,t=this.moon.width,n=t*.4,r=t/2,i=t/2,a=kp(this.game.t)%(Math.PI*2);e.clearRect(0,0,t,t),e.fillStyle=`#2b3349`,e.beginPath(),e.arc(r,i,n+3,0,7),e.fill(),e.fillStyle=`#3e4766`,e.beginPath(),e.arc(r,i,n,0,7),e.fill();let o=Math.cos(a),s=a<Math.PI;e.fillStyle=`#f1ead6`,e.beginPath(),e.arc(r,i,n,-Math.PI/2,Math.PI/2,!s),e.ellipse(r,i,Math.abs(o)*n,n,0,Math.PI/2,-Math.PI/2,s?o>0:o<0),e.fill(),e.strokeStyle=`#a8834e`,e.lineWidth=2,e.beginPath(),e.arc(r,i,n+3,0,7),e.stroke()}showTip(e,t,n,r,i,a=!1){let o=this.tip;o.hidden=!1,o.classList.toggle(`bad`,!!a),o.querySelector(`.n`).textContent=n,o.querySelector(`.l`).innerHTML=r.join(`<br>`),o.querySelector(`.a`).textContent=i||``,o.classList.add(`show`);let s=o.offsetWidth,c=o.offsetHeight;o.style.left=Math.max(8,Math.min(window.innerWidth-s-8,e+18))+`px`;let l=Y(`tools`).getBoundingClientRect().top,u=t<l?l-c-8:window.innerHeight-c-8;o.style.top=Math.max(8,Math.min(u,t+18))+`px`,this.separateHint()}separateHint(){let e=this.hint.getBoundingClientRect(),t=this.tip.getBoundingClientRect();this.hintCovered=this.hint.classList.contains(`show`)&&this.tip.classList.contains(`show`)&&e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top,this.hint.style.visibility=this.hintCovered?`hidden`:``}hideTip(){this.tip.classList.remove(`show`),this.tip.hidden=!0,this.hint.style.visibility=``}showHint(e,t,n,r,i,a=!1){let o=this.hint;o.dataset.text!==e+t&&(o.querySelector(`.t`).textContent=e,o.querySelector(`.s`).textContent=t||``,o.dataset.text=e+t),o.classList.toggle(`free`,!!i),o.classList.toggle(`below`,!i&&a);let s=o.offsetWidth,c=o.offsetHeight,l=Math.max(s/2+8,Math.min(window.innerWidth-s/2-8,n));if(o.style.left=l+`px`,!i&&a){let e=document.getElementById(`tools`).getBoundingClientRect().top-c-30;o.style.top=Math.max(8,Math.min(e,r))+`px`}else o.style.top=Math.max(c+(i?8:26),r)+`px`;o.classList.add(`show`),this.tip.classList.contains(`show`)?this.separateHint():o.style.visibility=``}hideHint(){this.hint.classList.remove(`show`)}avoidRects(e,t){let n=this.hint;for(let r=0;r<4;r++){let r=n.getBoundingClientRect(),i=e.find(e=>r.left<e.right&&r.right>e.left&&r.top<e.bottom&&r.bottom>e.top);if(!i)return;n.style.top=parseFloat(n.style.top)+(t?i.bottom+6-r.top:-(r.bottom-i.top+6))+`px`}}note(e,t){let n=Y(e);t?(n.textContent!==t&&(n.textContent=t),n.classList.add(`show`)):n.classList.remove(`show`)}gain(e,t,n){let r=document.createElement(`div`);r.className=`gain`,r.textContent=n,r.style.left=e+`px`,r.style.top=t+`px`,Y(`hud`).appendChild(r),setTimeout(()=>r.remove(),1700)}message(e,t=2200){let n=Y(`msg`);n.textContent=e,n.classList.add(`show`),clearTimeout(this._mt),this._mt=setTimeout(()=>n.classList.remove(`show`),t)}},Hm=3,Um=5,Wm=class{constructor(e){this.game=e,this.since=0,this.extra=null,this.done=new Set,this.rakes=0,this.goalLeft=0,this.prevVolumes=new Map,this.askedShut=new Set}onEvent(e){let t=this.game;e.type===`rake`&&(this.rakes++,this.rakes===1&&(this.goalLeft=10)),e.type===`fishReady`&&!this.done.has(`fish`)&&this.rakes>0&&(this.done.add(`fish`),this.extra={text:`The weir caught fish on the ebb.`,sub:`Click the weir to empty its basket`,thing:e.weir,act:!0,until:t.t+14}),e.type===`fish`&&this.extra?.thing===e.weir&&(this.extra=null),e.type===`melt`&&!this.done.has(`melt`)&&(this.done.add(`melt`),this.extra={text:`Flood water is dissolving the salt!`,sub:`Rake a pan before you open its gate`,thing:e.pan,until:t.t+8}),e.type===`built`&&this.done.add(`built`)}loop(e=this.game.pans[0]){let t=this.game,n=t.gates.find(t=>t.i>=e.i0-1&&t.i<=e.i0+e.w&&t.j>=e.j0-1&&t.j<=e.j0+e.d),r=Sp(t.t),i=Cp(t.t)>0,a=wp(t.t,`high`),o=Op(a),s=e.V/e.cells.length,c=t.sunElev>.04,l=t.panFloor(e);if(e.damage)return{text:`The storm breached this pan. Repair its bank.`,sub:t.storm.active?`Wait for the surge to pass; then Repair (R)`:`Repair (R) · 24 shillings · 10 seconds`,thing:e,urgent:!0};if(t.storm.preparing&&n?.open)return{text:`The surge is coming. Shut this sluice.`,sub:`Storm banks hold only with the gate shut`,thing:n,act:!0};if(t.storm.preparing)return{text:`Keep the sluice shut through the surge.`,sub:e.braced?`Storm banks ready · watch the water rise`:`Raise storm banks (B) before the water reaches them`,thing:e,urgent:!0};if(e.maintaining)return{text:`The dredging crew is clearing the pan.`,sub:`The sluice stays shut until the crew finishes`,thing:e};if(t.sediment.panDepth(e)>.16&&s<.05&&e.crust<.2)return{text:`Silt is lifting this pan above the tide.`,sub:`Dredge (8) · 14 shillings · 12 seconds at low water`,thing:e,urgent:!0};if(e.crust>=.2&&s<=.03&&!t.panOpen(e))return{text:`Rake the last salt before the next flood.`,sub:`${Math.round(e.crust*4)} salt ready`,thing:e,act:!0};if(e.ready)return{text:`Salt! Click the pan to rake it in.`,sub:`${Math.round(e.crust*4)} salt ready`,thing:e,act:!0};if(n?.open&&e.pump?.enabled&&t.works.energy>1&&s<.03)return{text:`Shut the sluice so the pump can lift brine.`,sub:`The tide mill powers this pan even through neaps`,thing:n,act:!0};if(!n)return{text:`This pan needs a sluice in its bank.`,sub:`Press 3, then click a pulsing bank cell · dig a channel to a creek (2)`,thing:e,act:!0,needsGate:!0};if((!n.open||s<=.05)&&this.askedShut.delete(e.id),!n.open){if(s>.03){let t=e.conc||1,n=e.crust>.05?`Crystals are gathering on the clay…`:`Brine ${t.toFixed(1)}× · the falling water leaves salt behind`;return c?{text:`The gate holds. Watch the brine thicken and crystals gather.`,sub:n,thing:e}:{text:`Slow work after dark: the brine waits for the sun.`,sub:n,thing:e}}return e.crust>.6?{text:`The last brine is drying to salt.`,sub:`Salt is crystallising…`,thing:e}:e.pump?.enabled&&t.works.energy>1?{text:`Mill power lifts the next brine into this pan.`,sub:`Keep the sluice shut · pump waits for water in its channel`,thing:e}:{text:`The pan is empty. Open the gate to let the next flood in.`,sub:`Click the gate · high water ${o}`,thing:n,act:!0}}if(e.crust>.2&&r>l)return{text:`The flood will dissolve that salt!`,sub:`Shut the gate, then rake the pan`,thing:n,act:!0};let u=e.V>(this.prevVolumes.get(e.id)||0)+1e-4,d=s>.05&&s>=.75*(r-l);return s>.05&&!i&&!u?{text:`The tide has turned. Shut the gate now, before the pan drains!`,sub:`Click the gate`,thing:n,act:!0}:s>.05&&(this.askedShut.has(e.id)||d&&(!i||a-t.t<Um))?(this.askedShut.add(e.id),i&&a-t.t>1.9?{text:`Shut the gate by high water at ${o}.`,sub:`Click the gate · it is marked on the tide graph`,thing:n,act:!0}:{text:`High water. Shut the gate to trap the brine.`,sub:`Click the gate`,thing:n,act:!0}):(i||u)&&r>l?{text:`The flood is filling the pan. Shut the gate at high water.`,sub:i?`High water ${o}`:`Nearly full…`,thing:e}:{text:`The tide is too low to reach the pan floor.`,sub:`Next high water ${o}. Try 8× to get there`,thing:e}}current(e){let t=this.game;if(this.since+=e,t.ended||this.since<.8)return null;let n=t.pans.find(e=>e.ready);if(n)return this.loop(n);let r=t.pans.filter(e=>!t.people.hands.some(t=>t.job===e)).map(e=>this.loop(e)),i=r.find(e=>e.act)||r[0]||this.loop();for(let e of t.pans)this.prevVolumes.set(e.id,e.V);if(i.act&&i.thing.kind===`gate`&&i.thing.open||i.urgent)return i;if(this.extra){if(t.t<this.extra.until&&!(this.extra.thing.kind===`weir`&&this.extra.thing.catch<3)&&!(this.extra.thing.kind===`pan`&&this.extra.thing.crust<.05))return this.extra;this.extra=null}if(this.goalLeft>0&&!this.game.pans[0].ready&&!this.done.has(`built`))return this.goalLeft-=e,{text:`The trader buys at high water. Earn ${xm} shillings this season.`,sub:`Sell or Hold in the ledger · more pans, more trade`,thing:null,free:!0};if(!i.act&&this.rakes>0){let e=t.oysters.find(e=>e.exposed&&e.stock>=2&&!t.people.hands.some(t=>t.job===e));if(e)return{text:`The mud is exposed. Rake oysters before the flood.`,sub:`${Math.floor(e.stock)} oysters ready · Oysters button finds the bed`,thing:e,act:!0};let n=t.weirs.find(e=>e.catch>=3&&!t.people.hands.some(t=>t.job===e));if(n){let e=n.catch>=23.5;return{text:e?`The fish basket is full at 24. Click to collect; more fish are lost.`:`The ebb filled the fish basket. Click to collect.`,sub:`${Math.floor(n.catch)} fish${e?` (full)`:``} · Weir button finds the basket`,thing:n,act:!0}}}return this.rakes>=Hm&&!i.act&&t.people.hands.length?{text:`Your hands work the tide. Keep their paths dry.`,sub:`Spring tides cover low marsh · Causeway (7) raises a route`,thing:null,free:!0}:i}},Gm=class{constructor(e){this.positions=new Float32Array(1152),this.geo=new Pr,this.geo.setAttribute(`position`,new yr(this.positions,3)),this.points=new oa(this.geo,new ta({color:`#ece5c3`,size:.11,transparent:!0,opacity:.42,depthWrite:!1})),this.points.frustumCulled=!1,e.add(this.points)}update(e){let t=0;for(let n of e.pans)if(!(n.V<.5||e.panOpen(n)||e.sunElev<.03))for(let r=0;r<20&&t<384;r++,t++){let i=((e.t*.2+r*.618)%1+1)%1,a=ap(n.i0)+r*.7549%1*(n.w-1),o=op(n.j0)+r*.5698%1*(n.d-1);this.positions[t*3]=a+Math.sin(i*3+r)*.16,this.positions[t*3+1]=e.panFloor(n)+n.V/n.cells.length+i*.6,this.positions[t*3+2]=o+i*.3}this.geo.setDrawRange(0,t),this.geo.attributes.position.needsUpdate=!0}},X=Math.random,Km=class{constructor(e,t=700){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.age=new Float32Array(t),this.size=new Float32Array(t),this.grav=new Float32Array(t),this.alpha=new Float32Array(t);let n=new Pr;n.setAttribute(`position`,new yr(this.pos,3)),n.setAttribute(`aSize`,new yr(this.size,1)),n.setAttribute(`aAlpha`,new yr(this.alpha,1)),this.geo=n,this.uniforms={uColor:{value:new H(`#f4efe4`)},uScale:{value:600}};let r=new Jo({transparent:!0,depthWrite:!1,uniforms:this.uniforms,vertexShader:`
        attribute float aSize; attribute float aAlpha; varying float vA;
        uniform float uScale;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / -mv.z, 1.0, 48.0);
          vA = aAlpha;
        }`,fragmentShader:`
        uniform vec3 uColor; varying float vA;
        void main() {
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float r = dot(q, q);
          if (r > 1.0) discard;
          gl_FragColor = vec4(uColor, vA * (1.0 - r));
          #include <colorspace_fragment>
        }`});this.points=new oa(n,r),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points)}emit(e,t,n,r,i,a,o,s,c=6){if(this.n>=this.max)return;let l=this.n++;this.pos[l*3]=e,this.pos[l*3+1]=t,this.pos[l*3+2]=n,this.vel[l*3]=r,this.vel[l*3+1]=i,this.vel[l*3+2]=a,this.life[l]=o,this.age[l]=0,this.size[l]=s,this.grav[l]=c}update(e,t){let n=0;for(;n<this.n;){if(this.age[n]+=e,this.age[n]>=this.life[n]){let e=--this.n;for(let t of[this.pos,this.vel])t[n*3]=t[e*3],t[n*3+1]=t[e*3+1],t[n*3+2]=t[e*3+2];this.life[n]=this.life[e],this.age[n]=this.age[e],this.size[n]=this.size[e],this.grav[n]=this.grav[e];continue}let r=this.grav[n]>0?.6:1.6;this.vel[n*3]+=(t.x-this.vel[n*3])*Math.min(1,r*e)*(this.grav[n]>0?1:.2),this.vel[n*3+2]+=(t.z-this.vel[n*3+2])*Math.min(1,r*e)*(this.grav[n]>0?1:.2),this.vel[n*3+1]-=this.grav[n]*e,this.grav[n]<=0&&(this.vel[n*3+1]*=1-Math.min(1,3*e)),this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e;let i=this.age[n]/this.life[n];this.alpha[n]=Math.min(1,i*6)*(1-i)*.75,n++}this.geo.setDrawRange(0,this.n);for(let e of[`position`,`aSize`,`aAlpha`])this.geo.attributes[e].needsUpdate=!0}},qm=class{constructor(e,t=1600){this.max=t,this.drops=new Float32Array(t*3);for(let e=0;e<t;e++)this.drops[e*3]=(X()-.5)*90,this.drops[e*3+1]=X()*34,this.drops[e*3+2]=(X()-.5)*90;this.pos=new Float32Array(t*6);let n=new Pr;n.setAttribute(`position`,new yr(this.pos,3)),this.geo=n,this.mat=new Hi({color:`#c9d3d6`,transparent:!0,opacity:.32,depthWrite:!1,fog:!0}),this.lines=new ea(n,this.mat),this.lines.frustumCulled=!1,this.lines.renderOrder=7,this.lines.visible=!1,e.add(this.lines)}update(e,t,n,r,i){let a=Math.floor(this.max*Math.min(1,t*1.25-.1));if(this.lines.visible=a>0,!this.lines.visible)return;let o=.07;for(let t=0;t<a;t++){let i=this.drops;i[t*3]+=r.x*e,i[t*3+1]-=26*e,i[t*3+2]+=r.z*e,i[t*3+1]<0&&(i[t*3+1]+=34,i[t*3]=(X()-.5)*90,i[t*3+2]=(X()-.5)*90);let a=n.x+i[t*3],s=n.y-4+i[t*3+1],c=n.z+i[t*3+2],l=this.pos;l[t*6]=a,l[t*6+1]=s,l[t*6+2]=c,l[t*6+3]=a-r.x*o,l[t*6+4]=s+26*o,l[t*6+5]=c-r.z*o}this.geo.setDrawRange(0,a*2),this.geo.attributes.position.needsUpdate=!0,this.mat.opacity=.22+.18*t+.4*i}};function Jm(){let e=[],t=[],n=[],r=[.93,.92,.88],i=[.62,.64,.66],a=[.12,.12,.13],o=[.85,.62,.2],s=(r,i,a,o,s,c,l,u,d)=>{e.push(...r,...i,...a),t.push(...o,...s,...c),n.push(l,u,d)},c=(e,t,n,r,i,a,o,c,l,u,d,f)=>{s(e,t,n,i,a,o,l,u,d),s(e,n,r,i,o,c,l,d,f)},l=[0,0,.32],u=[0,.02,-.3],d=[0,.09,0],f=[0,-.07,0],p=[-.08,0,0],m=[.08,0,0];for(let[e,t]of[[d,m],[m,f],[f,p],[p,d]])s(l,e,t,r,r,r,0,0,0),s(u,t,e,r,i,i,0,0,0);s([0,.01,.42],[.02,0,.3],[-.02,0,.3],o,o,o,0,0,0);for(let e of[-1,1]){let t=[.06*e,.03,.1],n=[.06*e,.03,-.1],o=[.36*e,.04,.06],l=[.36*e,.04,-.14],u=[.7*e,.03,-.16];c(t,o,l,n,i,i,i,i,.05,.5,.5,.05),s(o,u,l,i,a,a,.5,1,.5),c(n,l,o,t,r,r,r,r,.05,.5,.5,.05),s(l,u,o,r,a,r,.5,1,.5)}let h=new Pr;return h.setAttribute(`position`,new Sr(e,3)),h.setAttribute(`color`,new Sr(t,3)),h.setAttribute(`aWing`,new Sr(n,1)),h.computeVertexNormals(),h}var Ym=class{constructor(e,t=18){this.count=t;let n=Jm();this.anim=new Di(new Float32Array(t*3),3),n.setAttribute(`aBird`,this.anim);let r=new Zo({vertexColors:!0,side:2});this.uTime={value:0},r.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aWing; attribute vec3 aBird; uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
          float wingSide = sign(position.x);
          transformed.x = mix(transformed.x, transformed.x * 0.22, aBird.z * step(0.01, aWing));
          transformed.z -= aBird.z * aWing * 0.12;
          transformed.y += sin(aBird.x) * aBird.y * aWing * 0.42 * (1.0 - aBird.z) + aBird.z * aWing * 0.06;`)},this.mesh=new Fi(n,r,t),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh),this.birds=[];for(let e=0;e<t;e++)this.birds.push({state:`fly`,x:X()*60-30,y:10+X()*6,z:X()*60-10,yaw:X()*6.28,ang:X()*6.28,rad:14+X()*22,h:8+X()*9,spin:(.16+X()*.12)*(X()<.5?-1:1),phase:X()*6.28,rate:5.5+X()*2,fold:0,tx:0,tz:0,ty:0,wait:X()*8,peck:0});this.targets=[],this.scanAt=0,this.time=0,this.home=new V(ap(128),0,op(160)),this.m=new nn,this.q=new Mt,this.e=new pn(0,0,0,`YXZ`),this.v=new V,this.s=new V(1,1,1)}scan(e){let{sim:t}=e,n=[];for(let e=0;e<500&&n.length<40;e++){let e=X()*128*128|0;if(t.pan[e]>=0||t.d[e]>.004||t.wet[e]<.2)continue;let r=e%128,i=e/128|0;n.push([ap(64+r),t.b[e],op(96+i),e])}this.targets=n}update(e,t,n,r){let i=this.time+=e;this.uTime.value=i%400,i>this.scanAt&&(this.scanAt=i+2,this.scan(t));let a=Cp(t.t)<0,o=this.anim.array;this.birds.forEach((s,c)=>{if(s.wait-=e,s.state===`fly`){let t=n>.35;s.ang+=s.spin*e*(t?2.5:1);let o=t?150+s.rad:s.rad,l=t?s.h+18:s.h+Math.sin(i*.3+c)*2,u=this.home.x+Math.cos(s.ang)*o-(t?60:0),d=this.home.z+Math.sin(s.ang)*o-(t?120:0);if(this.steer(s,u,l,d,e,t?14:7),s.fold=Math.max(0,s.fold-e*3),s.wait<0&&!t&&this.targets.length&&(a||r>.6)){let e=this.targets[X()*this.targets.length|0];s.state=`land`,s.tx=e[0]+X()-.5,s.ty=e[1],s.tz=e[2]+X()-.5,s.cell=e[3]}else s.wait<0&&(s.wait=3+X()*6)}else if(s.state===`land`){if(t.sim.d[s.cell]>.03||n>.25){s.state=`fly`,s.wait=4,s.ang=Math.atan2(s.z-this.home.z,s.x-this.home.x);return}this.steer(s,s.tx,s.ty+.12,s.tz,e,6)<.6&&(s.state=`stand`,s.wait=8+X()*25,s.y=s.ty+.12)}else s.fold=Math.min(1,s.fold+e*4),s.peck=Math.max(0,Math.sin(i*2.3+c*1.7))**8,(t.sim.d[s.cell]>.03||n>.25||s.wait<0&&r<.6)&&(s.state=`fly`,s.wait=4+X()*10,s.h=7+X()*9,s.ang=Math.atan2(s.z-this.home.z,s.x-this.home.x));s.phase+=e*s.rate*(s.state===`stand`?0:s.vy>.4||s.state===`land`?1.6:1);let l=s.state===`stand`?0:Math.sin(i*.7+c*2.1)>.1||s.state===`land`||n>.35?1:.12;o[c*3]=s.phase,o[c*3+1]=l,o[c*3+2]=s.fold,this.e.set(s.state===`stand`?-.15-s.peck*.5:-(s.vy||0)*.08,s.yaw,s.state===`stand`?0:-(s.turn||0)*.9),this.q.setFromEuler(this.e),this.v.set(s.x,s.y,s.z),this.s.setScalar(s.state===`stand`?.8:1),this.m.compose(this.v,this.q,this.s),this.mesh.setMatrixAt(c,this.m)}),this.mesh.instanceMatrix.needsUpdate=!0,this.anim.needsUpdate=!0}steer(e,t,n,r,i,a){let o=t-e.x,s=n-e.y,c=r-e.z,l=Math.hypot(o,s,c),u=Math.atan2(o,c)-e.yaw;u=Math.atan2(Math.sin(u),Math.cos(u));let d=Math.max(-2.2,Math.min(2.2,u*2.5))*i;e.turn=d/Math.max(i,.001)/2.2,e.yaw+=d;let f=Math.min(a,l*1.5+.5);return e.x+=Math.sin(e.yaw)*f*i,e.z+=Math.cos(e.yaw)*f*i,e.vy=Math.max(-3,Math.min(3,s*1.2)),e.y+=e.vy*i,l}},Xm=class{constructor(e,t){this.spray=new Km(e),this.rain=new qm(e),this.gulls=new Ym(e),this.wind=new V,this.acc=0;let n=document.createElement(`div`);n.id=`grade`,n.style.cssText=`position:fixed;inset:0;pointer-events:none;opacity:0;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 45%, rgba(14,22,26,0.62) 100%);`,t.after(n),this.vignette=n,this.canvas=t,this.filter=``}count(){return{spray:this.spray.n,rain:this.rain.lines.visible?this.rain.geo.drawRange.count/2:0,gulls:this.gulls.count,groundedGulls:this.gulls.birds.filter(e=>e.state===`stand`).length}}update(e,t,n,r,i={}){let a=n.uniforms.uStorm.value,o=n.uniforms.uNight.value,s=n.uniforms.uFlash.value,c=Math.max(0,n.uniforms.uSunDir.value.y),l=n.uniforms.uTime.value;this.wind.set(-3-9*a+Math.sin(l*.4)*2*a,0,-1.5-5*a);let u=(.4+.6*Math.min(1,c*3))*(1-.35*a)*(1-.55*o)+.12+s*.6;this.spray.uniforms.uColor.value.setRGB(.96*u,.94*u,.9*u),this.spray.uniforms.uScale.value=n.r.domElement.height*.55;let d=t.paused||t.ended||t.hostPaused?0:e*Math.min(3,t.speed||1);this.acc+=d;let{sim:f}=t;for(;this.acc>.05;){this.acc-=.05;for(let e of t.gates){if(!e.open)continue;let t=(e.j-96)*128+e.i-64,n=Math.hypot(f.vx[t],f.vz[t]);if(!(f.d[t]<.05||n<.45))for(let r=0;r<Math.min(4,n*2);r++)this.spray.emit(ap(e.i)+X()-.5,f.b[t]+f.d[t]+.05,op(e.j)+X()-.5,f.vx[t]*.8+(X()-.5),1.2+X()*1.4,f.vz[t]*.8+(X()-.5),.5+X()*.4,.09+X()*.06)}for(let e of t.weirs)for(let t=0;t<e.cells.length;t+=2){let n=e.cells[t],r=Math.hypot(f.vx[n],f.vz[n]);f.d[n]<.08||r<.4||X()>r*.5||this.spray.emit(ap(64+n%128)+X()-.5,f.b[n]+f.d[n]+.03,op(96+(n/128|0))+X()-.5,f.vx[n]*.5,.8+X(),f.vz[n]*.5,.45+X()*.3,.08+X()*.05)}for(let e of t.works?.mills||[]){if(!(e.output>.25))continue;let t=e.mesh.position;for(let n=0;n<e.output*2;n++)this.spray.emit(t.x+(X()-.5)*1.6,t.y+.3+X()*.8,t.z+(X()-.5)*1.6,(X()-.5)*1.5,1+X()*1.5,(X()-.5)*1.5,.6,.08)}let e=i.trader;if(e&&i.moving){let t=e.rotation.y,n=e.position.x-Math.cos(t)*1.6,r=e.position.z+Math.sin(t)*1.6;for(let i=0;i<3;i++){let i=(X()-.5)*2;this.spray.emit(n+i*.3,e.position.y+.08,r,Math.sin(t)*i*.6,0,Math.cos(t)*i*.6,2.4+X(),.16,0)}}if(a>.3)for(let e=0;e<a*10;e++){let e=r.x+(X()-.5)*70,n=r.z+(X()-.5)*70,i=Math.round(e+128)-64,a=Math.round(n+128)-96,o=Sp(t.t);if(i>=0&&a>=0&&i<128&&a<128){let e=a*128+i;if(f.d[e]<.3)continue;o=f.b[e]+f.d[e]}this.spray.emit(e,o+.1,n,this.wind.x,1.5+X()*2,this.wind.z,.9+X()*.5,.12+X()*.08,2.5)}}this.spray.update(d,this.wind),this.rain.update(d,a,r,this.wind,s),this.gulls.update(d,t,a,o);let p=Math.min(.8,a*.6+o*.3);this.vignette.style.opacity=p.toFixed(2);let m=Math.round(a*20)/20,h=m>0?`saturate(${(1-.32*m).toFixed(2)}) contrast(${(1+.08*m).toFixed(2)}) brightness(${(1+s*.25).toFixed(2)})`:``;h!==this.filter&&(this.filter=h,this.canvas.style.filter=h)}},Zm=class{constructor(){this.ctx=null,this.muted=!1,this.hostMuted=!1,this.tabHidden=!1,this.vol={master:80,music:65,effects:85}}level(){return this.muted||this.hostMuted||this.tabHidden?0:this.vol.master/100}setVolumes(e){this.vol={...this.vol,...e},this.applyLevels()}applyLevels(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=e?.001:.05;this.amb.gain.setTargetAtTime(this.vol.music/65,t,n),this.fx.gain.setTargetAtTime(this.vol.effects/85,t,n),this.master.gain.setTargetAtTime(this.level(),t,n)}start(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.level(),this.master.connect(t.destination),this.amb=t.createGain(),this.amb.connect(this.master),this.fx=t.createGain(),this.fx.connect(this.master),this.applyLevels(!0);let n=t.sampleRate*4,r=t.createBuffer(1,n,t.sampleRate),i=r.getChannelData(0),a=0;for(let e=0;e<n;e++)a=(a+.02*(Math.random()*2-1))/1.02,i[e]=a*3.5;this.noise=r;let o=t.createBufferSource();o.buffer=r,o.loop=!0,this.surfFilter=t.createBiquadFilter(),this.surfFilter.type=`lowpass`,this.surfFilter.frequency.value=600,this.surfGain=t.createGain(),this.surfGain.gain.value=0,o.connect(this.surfFilter).connect(this.surfGain).connect(this.amb),o.start();let s=t.createBufferSource();s.buffer=r,s.loop=!0,s.playbackRate.value=1.7;let c=t.createBiquadFilter();c.type=`bandpass`,c.frequency.value=1800,c.Q.value=.6,this.windGain=t.createGain(),this.windGain.gain.value=.05,s.connect(c).connect(this.windGain).connect(this.amb),s.start();let l=t.createBufferSource();l.buffer=r,l.loop=!0,l.playbackRate.value=.7;let u=t.createBiquadFilter();u.type=`highpass`,u.frequency.value=2800,this.brineGain=t.createGain(),this.brineGain.gain.value=0,l.connect(u).connect(this.brineGain).connect(this.amb),l.start()}setMuted(e){this.muted=e,this.apply()}setHostMuted(e){this.hostMuted=e,this.apply()}setTabHidden(e){this.tabHidden=e,this.apply()}apply(){this.master&&this.master.gain.setTargetAtTime(this.level(),this.ctx.currentTime,.05)}update(e,t,n,r,i=!1){if(!this.ctx)return;let a=this.ctx.currentTime,o=.5+.5*Math.sin(a*.9)*Math.sin(a*.37+1),s=(.1+.22*Math.max(0,(e+1.4)/3))*(.5+.5*n)*(.7+.3*o)*(1.2-r*.5);this.surfGain.gain.setTargetAtTime(s,a,.3),this.brineGain.gain.setTargetAtTime(i?.045+o*.025:0,a,.5),this.surfFilter.frequency.setTargetAtTime(380+500*o+Math.abs(t)*4e3,a,.3)}creak(e){if(!this.ctx)return;let t=this.ctx,n=t.currentTime,r=t.createOscillator();r.type=`sawtooth`;let i=t.createBiquadFilter();i.type=`bandpass`,i.Q.value=8,i.frequency.value=420;let a=t.createGain();a.gain.value=0,r.frequency.setValueAtTime(e?95:70,n),r.frequency.linearRampToValueAtTime(e?70:105,n+.9),a.gain.linearRampToValueAtTime(.08,n+.08);for(let e=0;e<6;e++)a.gain.setValueAtTime(e%2?.03:.08,n+.1+e*.13);a.gain.linearRampToValueAtTime(0,n+1),r.connect(i).connect(a).connect(this.fx),r.start(n),r.stop(n+1.05),this.thump(n+(e?.95:.2),e?.5:.2)}thump(e,t){let n=this.ctx,r=n.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(110,e),r.frequency.exponentialRampToValueAtTime(45,e+.25);let i=n.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(t,e+.01),i.gain.exponentialRampToValueAtTime(.001,e+.35),r.connect(i).connect(this.fx),r.start(e),r.stop(e+.4)}chime(e=3){if(!this.ctx)return;let t=this.ctx,n=t.currentTime,r=[659.3,784,987.8,1174.7,1318.5];for(let i=0;i<e;i++){let e=t.createOscillator();e.type=`triangle`,e.frequency.value=r[i%r.length];let a=t.createGain(),o=n+i*.07;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.09,o+.008),a.gain.exponentialRampToValueAtTime(.001,o+.7),e.connect(a).connect(this.fx),e.start(o),e.stop(o+.75)}let i=t.createBufferSource();i.buffer=this.noise;let a=t.createBiquadFilter();a.type=`highpass`,a.frequency.value=2500;let o=t.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.25,n+.05),o.gain.exponentialRampToValueAtTime(.001,n+.45),i.connect(a).connect(o).connect(this.fx),i.start(n,Math.random()*2,.5)}tick(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type=`square`,n.frequency.value=1400;let r=e.createGain();r.gain.setValueAtTime(.02,t),r.gain.exponentialRampToValueAtTime(5e-4,t+.05),n.connect(r).connect(this.fx),n.start(t),n.stop(t+.06)}dig(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;let r=e.createBiquadFilter();r.type=`lowpass`,r.frequency.value=900;let i=e.createGain();i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(r).connect(i).connect(this.fx),n.start(t,Math.random()*3,.2)}},Qm=`saltgate.save`,$m={read(){try{return{text:localStorage.getItem(Qm),blocked:!1}}catch{return{text:null,blocked:!0}}},write(e){try{return localStorage.setItem(Qm,e),!0}catch{return!1}},clear(){try{return localStorage.removeItem(Qm),!0}catch{return!1}}},eh=e=>{let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode.apply(null,t.subarray(e,e+32768));return btoa(n)},th=(e,t,n)=>{if(typeof e!=`string`)throw Error(`bad array`);let r=atob(e);if(r.length!==n*t.BYTES_PER_ELEMENT)throw Error(`bad array length`);let i=new Uint8Array(r.length);for(let e=0;e<r.length;e++)i[e]=r.charCodeAt(e);return new t(i.buffer)},nh=(e,t)=>{let n=[];for(let r=0;r<e.length;r++)t&&e[r]===t[r]||n.push(r,e[r]);return n},rh=(e,t,n)=>{if(t?e.set(t):e.fill(0),!Array.isArray(n)||n.length%2)throw Error(`bad sparse list`);for(let t=0;t<n.length;t+=2){let r=n[t],i=n[t+1];if(!Number.isInteger(r)||r<0||r>=e.length||typeof i!=`number`||!Number.isFinite(i))throw Error(`bad sparse entry`);e[r]=i}},ih=[`d`,`fL`,`fR`,`fT`,`fB`,`vx`,`vz`,`wet`],ah=new Set([`mesh`,`cells`,`pan`,`pump`,`job`,`cellSet`,`loads`,`ledger`,`name`,`kind`,`anim`]),oh=e=>{let t={};for(let[n,r]of Object.entries(e))ah.has(n)||(typeof r==`number`||typeof r==`boolean`||typeof r==`string`||r===null?t[n]=Number.isFinite(r)||typeof r!=`number`?r:null:r&&typeof r==`object`&&!Array.isArray(r)&&Object.values(r).every(e=>typeof e==`number`)&&`i`in r&&(t[n]={...r}));return t},sh=e=>({pan:e.pans,weir:e.weirs,oyster:e.oysters,mill:e.works.mills}),ch=(e,t)=>t?{k:t.kind,n:sh(e)[t.kind].indexOf(t)}:null,lh=(e,t)=>{if(!t)return null;let n=sh(e)[t.k]?.[t.n];if(!n)throw Error(`bad reference`);return n};function uh(e,t,n){let r=e,{sim:i,world:a,economy:o,storm:s,sediment:c,works:l}=r;return{v:1,seed:n,savedAt:Date.now(),t:r.t,speed:r.speed,acc:r.acc,store:{...r.store},stats:{...r.stats},sim:Object.fromEntries(ih.map(e=>[e,eh(i[e])])),h:nh(a.h,r.base.h),kind:nh(a.kind,r.base.kind),silt:nh(c.depth),deck:nh(l.deck),gates:r.gates.map(e=>({i:e.i,j:e.j,open:e.open})),pans:r.pans.map(e=>({i0:e.i0,j0:e.j0,w:e.w,d:e.d,...oh(e)})),weirs:r.weirs.map(e=>({x:e.x,z:e.z,ang:e.ang,...oh(e)})),oysters:r.oysters.map(e=>({i:e.i,j:e.j,...oh(e)})),mills:l.mills.map(oh),houses:l.houses.map(oh),pumps:l.pumps.map(e=>({pan:r.pans.indexOf(e.pan),enabled:e.enabled,active:e.active,filling:!!e.filling})),works:{energy:l.energy,generated:l.generated,used:l.used,lifted:l.lifted,seen:[...l.seen]},hands:r.people.hands.map(e=>({name:e.name,x:e.x,z:e.z,job:ch(r,e.job),path:e.path,at:e.at,retry:e.retry,nextWork:e.nextWork,status:e.status,connected:!!e.connected,checkHome:e.checkHome||0})),people:{work:r.people.work,wetSeconds:r.people.wetSeconds},economy:{pressure:{...o.pressure},selling:{...o.selling},sold:{...o.sold},earned:o.earned,spent:o.spent,visits:o.visits,ledger:o.ledger.map(e=>({...e})),high:o.high,state:o.state,progress:o.progress,capacity:o.capacity,quay:o.quay,wages:o.wages,lastSale:Number.isFinite(o.lastSale)?o.lastSale:null,lastVisitHigh:o.lastVisitHigh??null},storm:{...oh(s),losses:{...s.losses},assetsAtStart:s.assetsAtStart.map(e=>ch(r,e)),repairJob:s.repairJob?{thing:ch(r,s.repairJob.thing),left:s.repairJob.left}:null},sediment:{clock:c.clock,completed:c.completed,removed:c.removed,dirty:c.dirty,job:c.job?{...oh(c.job),cells:[...c.job.cells],loads:[...c.job.loads],pan:c.job.pan?r.pans.indexOf(c.job.pan):-1}:null},hints:t?{done:[...t.done],rakes:t.rakes,goalLeft:t.goalLeft,askedShut:[...t.askedShut],prevVolumes:[...t.prevVolumes]}:null}}var dh=e=>JSON.stringify(e);function fh(e,t,n){let r=uh(e,t,n);r.savedAt=0;let i=JSON.stringify(r),a=2166136261,o=461845907;for(let e=0;e<i.length;e++){let t=i.charCodeAt(e);a=Math.imul(a^t,16777619)>>>0,o=Math.imul(o+t,2246822519)>>>0}return`${a.toString(16).padStart(8,`0`)}${o.toString(16).padStart(8,`0`)}:${i.length}`}var ph=e=>typeof e==`number`&&Number.isFinite(e),mh=e=>e&&typeof e==`object`&&!Array.isArray(e),hh=(e,t)=>Number.isInteger(e)&&Number.isInteger(t)&&e>2&&t>2&&e<253&&t<253;function gh(e,t,n){try{if(typeof e!=`string`||!e)return{ok:!1,why:`empty`};let r=JSON.parse(e);if(!mh(r))return{ok:!1,why:`not an object`};if(r.v!==1)return{ok:!1,why:`version`};if(r.seed!==t)return{ok:!1,why:`other coast`};if(![r.t,r.speed,r.acc].every(ph)||r.t<mp-1e-6||r.t>mp+1260)return{ok:!1,why:`time`};if(!mh(r.store)||!mh(r.stats)||!mh(r.economy)||!mh(r.storm)||!mh(r.sediment)||!mh(r.works)||!mh(r.people)||!mh(r.sim))return{ok:!1,why:`shape`};for(let e of[`salt`,`fish`,`oysters`,`coin`])if(!ph(r.store[e]))return{ok:!1,why:`store`};for(let e of ih)th(r.sim[e],Float32Array,16384);for(let e of[`gates`,`pans`,`weirs`,`oysters`,`mills`,`houses`,`pumps`,`hands`])if(!Array.isArray(r[e]))return{ok:!1,why:e};if(r.gates.length<n.start.gates||r.pans.length<n.start.pans||r.weirs.length<n.start.weirs||r.oysters.length<n.start.oysters)return{ok:!1,why:`missing works`};if(r.gates.length>60||r.pans.length>60||r.weirs.length>60||r.oysters.length>60||r.mills.length>20||r.houses.length>20||r.hands.length>8)return{ok:!1,why:`size`};for(let e of r.gates)if(!hh(e.i,e.j)||typeof e.open!=`boolean`)return{ok:!1,why:`gate`};for(let e of r.pans)if(!hh(e.i0,e.j0)||!(e.w>0&&e.w<40&&e.d>0&&e.d<40)||!hh(e.i0+e.w,e.j0+e.d))return{ok:!1,why:`pan`};for(let e of r.weirs)if(![e.x,e.z,e.ang].every(ph))return{ok:!1,why:`weir`};for(let e of r.oysters)if(!hh(e.i,e.j))return{ok:!1,why:`oysters`};for(let e of[...r.mills,...r.houses])if(!hh(e.i,e.j))return{ok:!1,why:`building`};for(let e of r.pumps)if(!Number.isInteger(e.pan)||e.pan<0||e.pan>=r.pans.length)return{ok:!1,why:`pump`};for(let e of r.hands)if(![e.x,e.z].every(ph)||!mh(e.job)||![`pan`,`weir`,`oyster`].includes(e.job.k))return{ok:!1,why:`hand`};for(let e of[`h`,`kind`,`silt`,`deck`])if(!Array.isArray(r[e])||r[e].length%2)return{ok:!1,why:e};return{ok:!0,snap:r}}catch{return{ok:!1,why:`unreadable`}}}var _h=(e,t,n=[])=>{for(let[r,i]of Object.entries(t))!n.includes(r)&&!ah.has(r)&&(e[r]=i)};function vh(e,t,n){let r=e,{world:i,sim:a}=r,o=()=>{rh(i.h,r.base.h,n.h),rh(i.kind,r.base.kind,n.kind),rh(r.sediment.depth,null,n.silt),rh(r.works.deck,null,n.deck)};o();for(let e=r.start.gates;e<n.gates.length;e++)r.addGate(n.gates[e].i,n.gates[e].j,n.gates[e].open,!0);for(let e=r.start.pans;e<n.pans.length;e++)r.addPan(n.pans[e].i0,n.pans[e].j0,n.pans[e].w,n.pans[e].d,!0);for(let e=r.start.weirs;e<n.weirs.length;e++)r.addWeir(n.weirs[e].x,n.weirs[e].z,n.weirs[e].ang,!0);for(let e=r.start.oysters;e<n.oysters.length;e++)r.addOysters(n.oysters[e].i,n.oysters[e].j,!0);for(let e of n.mills)r.works.restoreBuilding(`mill`,e.i,e.j);for(let e of n.houses)r.works.restoreBuilding(`house`,e.i,e.j);for(let e of n.pumps)r.works.restorePump(r.pans[e.pan]);n.gates.forEach((e,t)=>{r.gates[t].open=e.open}),n.pans.forEach((e,t)=>_h(r.pans[t],e,[`i0`,`j0`,`w`,`d`])),n.weirs.forEach((e,t)=>_h(r.weirs[t],e,[`x`,`z`,`ang`])),n.oysters.forEach((e,t)=>_h(r.oysters[t],e,[`i`,`j`])),n.mills.forEach((e,t)=>_h(r.works.mills[t],e)),n.houses.forEach((e,t)=>_h(r.works.houses[t],e)),n.pumps.forEach((e,t)=>{let n=r.works.pumps[t];n.enabled=e.enabled,n.active=e.active,n.filling=e.filling});for(let e of[...r.pans,...r.weirs,...r.oysters,...r.works.mills])e.braced&&(e.braced=!1,r.works.brace(e)),e.damage&&e.mesh&&(e.mesh.rotation.z=.16);o(),a.syncBed();for(let e of ih)a[e].set(th(n.sim[e],Float32Array,16384));a.block.fill(0);for(let e of r.gates)r.applyGate(e);a.pan.fill(-1);for(let e of r.pans)for(let t of e.cells)a.pan[t]=e.id;r.gates.forEach(e=>{e.anim=+!!e.open,qp(e.mesh,e.open)}),r.t=n.t,r.speed=n.speed,r.acc=n.acc,r.paused=!1,r.ended=!1,r.sunElev=jp(r.t).elev,r.store={...n.store},r.stats={...r.stats,...n.stats};let s=r.economy,c=n.economy;Object.assign(s,{pressure:{...c.pressure},selling:{...c.selling},sold:{...c.sold},earned:c.earned,spent:c.spent,visits:c.visits,ledger:c.ledger.map(e=>({...e})),high:c.high,state:c.state,progress:c.progress,capacity:c.capacity,quay:c.quay|0,wages:c.wages||0,lastSale:c.lastSale===null?-1/0:c.lastSale}),c.lastVisitHigh===null?delete s.lastVisitHigh:s.lastVisitHigh=c.lastVisitHigh,Object.assign(r.works,{energy:n.works.energy,generated:n.works.generated,used:n.works.used,lifted:n.works.lifted,seen:new Set(n.works.seen)});let l=r.storm,u=n.storm;_h(l,u,[`losses`,`assetsAtStart`,`repairJob`]),l.losses={...u.losses},l.assetsAtStart=u.assetsAtStart.map(e=>lh(r,e)),l.repairJob=u.repairJob?{thing:lh(r,u.repairJob.thing),left:u.repairJob.left}:null;let d=r.sediment,f=n.sediment;if(Object.assign(d,{clock:f.clock,completed:f.completed,removed:f.removed,dirty:f.dirty}),d.job=null,d.mesh.visible=!1,f.job){let e={...f.job,pan:f.job.pan>=0?r.pans[f.job.pan]:void 0};e.cellSet=new Set(e.cells),d.job=e,d.mesh.visible=!0}r.people.work=n.people.work,r.people.wetSeconds=n.people.wetSeconds;for(let e of n.hands)if(!r.people.restoreHand(e,lh(r,e.job)))throw Error(`hand`);r.view.renderer.recomputeTerrain(0,0,255,255);let p=[];for(let e=0;e<i.kind.length;e++)i.kind[e]!==0&&p.push(e);r.view.reeds?.clear(p),r.view.renderer.heightTex.needsUpdate=!0,r.updateWeirs(0);for(let e of r.gates)e.mesh.position.y=i.h[e.j*256+e.i]+.1,e.mesh.userData.door.position.y=-.05+e.anim*1.55,e.mesh.userData.wheel.rotation.x=e.anim*6;t&&n.hints&&(t.done=new Set(n.hints.done),t.rakes=n.hints.rakes,t.goalLeft=n.hints.goalLeft,t.askedShut=new Set(n.hints.askedShut),t.prevVolumes=new Map(n.hints.prevVolumes))}function yh(){try{if(!(`serviceWorker`in navigator)||!window.isSecureContext||new URLSearchParams(location.search).has(`nosw`))return;let e=()=>{try{navigator.serviceWorker.register(new URL(`sw.js`,document.baseURI).href).catch(()=>{})}catch{}};document.readyState===`complete`?setTimeout(e,1500):addEventListener(`load`,()=>setTimeout(e,1500),{once:!0})}catch{}}var bh=`saltgate.settings`,xh={master:80,music:65,effects:85,quality:`high`},Sh={low:{pixel:1,shadow:0,spray:250,rain:500,gulls:6},medium:{pixel:1.25,shadow:1024,spray:450,rain:1e3,gulls:12},high:{pixel:1.5,shadow:2048,spray:700,rain:1600,gulls:18}},Ch=(e,t)=>typeof e==`number`&&Number.isFinite(e)?Math.max(0,Math.min(100,Math.round(e))):t;function wh(e){let t=e&&typeof e==`object`?e:{};return{master:Ch(t.master,xh.master),music:Ch(t.music,xh.music),effects:Ch(t.effects,xh.effects),quality:Object.prototype.hasOwnProperty.call(Sh,t.quality)?t.quality:xh.quality}}var Th={read(){try{let e=localStorage.getItem(bh);return e?JSON.parse(e):null}catch{return null}},write(e){try{return localStorage.setItem(bh,JSON.stringify(e)),!0}catch{return!1}}},Eh=()=>wh(Th.read()),Dh=e=>document.getElementById(e),Oh=`button:not([disabled]), input:not([disabled]), [href], select, [tabindex]:not([tabindex="-1"])`;function kh({settings:e,applySettings:t,canvas:n,hud:r,game:i,clockText:a,onNewSeason:o,onModal:s}){let c=Dh(`sg-title-screen`),l=Dh(`sg-title-veil`),u={settings:Dh(`sg-settings-overlay`),pause:Dh(`sg-pause-overlay`),confirm:Dh(`sg-pause-confirm-overlay`)},d=Dh(`hud`),f=!0,p=`title`,m=null,h=null,g={},_=()=>f||Object.values(u).some(e=>!e.hidden);function v(){let e=Object.values(u).some(e=>!e.hidden);d.inert=f||e,e?d.setAttribute(`aria-hidden`,`true`):d.removeAttribute(`aria-hidden`),c.inert=u.settings&&!u.settings.hidden,s(_())}function y(e,t){for(let[t,n]of Object.entries(u))n.hidden=t!==e;m=e,v();let n=u[e];(Dh(t)||n.querySelector(Oh))?.focus()}function b(){for(let e of Object.values(u))e.hidden=!0;m=null,v()}function x(e){f=!0;let t=!!e;Dh(`sg-btn-continue`).hidden=!t,t&&(Dh(`sg-save-summary`).textContent=e),Dh(`sg-btn-new`).className=`sg-btn `+(t?`sg-btn--title-secondary`:`sg-btn--title-primary`),c.hidden=l.hidden=!1,d.hidden=!0,v(),Dh(t?`sg-btn-continue`:`sg-btn-new`).focus()}function S(){f=!1,c.hidden=l.hidden=!0,d.hidden=!1,v(),n.focus()}Dh(`sg-btn-continue`).addEventListener(`click`,()=>{S(),g.continue?.()}),Dh(`sg-btn-new`).addEventListener(`click`,()=>{S(),g.new?.()}),Dh(`sg-btn-settings`).addEventListener(`click`,()=>{p=`title`,h=Dh(`sg-btn-settings`),y(`settings`,`sg-vol-master`)});let C={master:Dh(`sg-vol-master`),music:Dh(`sg-vol-music`),effects:Dh(`sg-vol-effects`)},w=e=>{let t=C[e];t.style.setProperty(`--sg-fill`,t.value+`%`),Dh(`sg-vol-`+e+`-out`).textContent=t.value+`%`},T=()=>{Th.write(e)||(Dh(`sg-settings-note`).textContent=`This browser will not keep settings; they last until you close the tab.`)};for(let[n,r]of Object.entries(C))r.value=e[n],w(n),r.addEventListener(`input`,()=>{e[n]=+r.value,w(n),t(e),T()}),r.addEventListener(`keydown`,e=>{(e.key===`PageUp`||e.key===`PageDown`)&&(e.preventDefault(),r.value=Math.max(0,Math.min(100,+r.value+(e.key===`PageUp`?10:-10))),r.dispatchEvent(new Event(`input`)))});for(let n of document.querySelectorAll(`input[name="quality"]`))n.checked=n.value===e.quality,n.addEventListener(`change`,()=>{n.checked&&(e.quality=n.value,t(e),T())});let E=document.querySelector(`#sg-settings-overlay .sg-panel-footer .sg-help-note`);E&&(E.id=`sg-settings-note`);function D(){b(),p===`pause`?y(`pause`,`sg-pause-settings`):(v(),(h||Dh(`sg-btn-settings`))?.focus())}Dh(`sg-settings-back`).addEventListener(`click`,D),Dh(`sg-settings-close`).addEventListener(`click`,D);let O=()=>!f&&!i.held&&!i.ended&&!_();function k(){return O()?(i.paused=!0,r.setSpeed(i.speed,!0),Dh(`sg-pause-eyebrow`).textContent=`Saltgate · `+a(),y(`pause`,`sg-pause-resume`),!0):!1}function A(){b(),i.paused=!1,r.setSpeed(i.speed,!1),n.focus()}Dh(`sg-pause-resume`).addEventListener(`click`,A),Dh(`sg-pause-menu`).addEventListener(`click`,()=>g.mainMenu?.()),Dh(`sg-pause-settings`).addEventListener(`click`,()=>{p=`pause`,y(`settings`,`sg-vol-master`)}),Dh(`sg-pause-new`).addEventListener(`click`,()=>{Dh(`sg-confirm-season`).textContent=g.summary?.()||a(),y(`confirm`,`sg-confirm-cancel`)}),Dh(`sg-confirm-cancel`).addEventListener(`click`,()=>y(`pause`,`sg-pause-new`)),Dh(`sg-confirm-ok`).addEventListener(`click`,()=>{b(),o()}),Dh(`menu-btn`).addEventListener(`click`,()=>{k()});function ee(e){if(!_())return!1;if(e.code===`Escape`&&!e.repeat)m===`settings`?D():m===`confirm`?y(`pause`,`sg-pause-new`):m===`pause`&&A(),e.preventDefault();else if(e.code===`Tab`){let t=[...(m?u[m]:c).querySelectorAll(Oh)].filter(e=>!e.hidden&&e.offsetParent!==null);if(t.length){let n=t.indexOf(document.activeElement);t[e.shiftKey?n<=0?t.length-1:n-1:n===t.length-1?0:n+1].focus(),e.preventDefault()}}return!0}return{modal:_,handleKey:ee,enter:S,openPause:k,resume:A,showTitle:x,playing:O,set handlers(e){g=e},state:()=>({onTitle:f,overlay:m})}}var Ah=new URLSearchParams(location.search),jh=Qf(Ah.get(`seed`)||`saltgate-1`),Mh=document.getElementById(`c`),Nh=lp(jh),Ph=new Fp(Mh,Nh),Fh=Up(Nh,Ph.scene),Ih=Vp(Nh,Ph.scene),Z=new Fm(Nh,{renderer:Ph,reeds:Fh,scene:Ph.scene});Ah.has(`judge`)&&(Z.frozen=!0);var Lh=new Lm(Ph.camera,Nh,Mh),Rh=new Zm,zh=new Wm(Z),Bh=new Gm(Ph.scene),Vh=new Xm(Ph.scene,Mh),Hh=0,Uh=!1,Wh=0,Gh=!1;{let e=Z.pans[0],t=ap(e.i0+e.w/2)-4,n=op(e.j0+e.d/2);Lh.set(t,n,.85,.6,46)}var Kh=Hp(J.sail);Kh.scale.setScalar(.7);var qh=Ih.quay.position;Kh.position.set(qh.x-1.6,0,qh.z+2.5),Kh.rotation.y=Ih.quay.rotation.y+Math.PI/2,Ph.scene.add(Kh);var Jh=Hp(J.sailOchre);Ph.scene.add(Jh);var Yh=[[Nh.main[0][0]+12,145],...Nh.main.filter((e,t)=>t%6==0&&t<Nh.main.length-6),Nh.main[Nh.main.length-6]];function Xh(e){let t=sp(Kh.position.x)-64,n=cp(Kh.position.z)-96,r=Lp(Nh,Kh.position.x,Kh.position.z)+.1,i=!0;if(t>=0&&n>=0&&t<128&&n<128){let e=n*128+t;Z.sim.d[e]>.35&&(r=Z.sim.b[e]+Z.sim.d[e]-.05,i=!1)}let a=Wh,o=Gh?1-Math.exp(-e*5):1;Kh.position.y+=(r-Kh.position.y)*o,Kh.rotation.z+=((i?.12:Math.sin(a*1.3)*.03)-Kh.rotation.z)*o,Kh.userData.sail.scale.y=.16;let s=Z.economy.progress,c=Yh,l=s*(c.length-1),u=Math.min(c.length-2,Math.floor(l)),d=l-u,[f,p]=c[u],[m,h]=c[u+1],g=f+(m-f)*d,_=p+(h-p)*d,v=sp(g)-64,y=cp(_)-96,b=Sp(Z.t);v>=0&&y>=0&&v<128&&y<128&&(b=Z.sim.surfaceAt(v,y)),Jh.position.set(g,b-.05+Math.sin(a*1.1)*.04,_);let x=Math.atan2(-(h-p),m-f)+(Z.economy.state===`leaving`?Math.PI:0),S=Math.atan2(Math.sin(x-Jh.rotation.y),Math.cos(x-Jh.rotation.y));Jh.rotation.y+=S*o;let C=Z.economy.state===`docked`||Z.economy.state===`sheltering`,w=Jh.userData.sail;w.scale.y+=((C?.18:1)-w.scale.y)*o,w.scale.x=1+Math.sin(a*2.1)*.04*w.scale.y,w.rotation.y=Math.sin(a*1.7)*.035*w.scale.y,Uh=Math.abs(s-Hh)>1e-6&&Z.economy.state!==`sheltering`,Hh=s,Jh.rotation.z=Math.sin(a*.9)*.05,Gh=!0}var Q=`hand`;function Zh(e){pm.some(t=>t.id===e)&&!Z.works.unlocked(e)?$.message(`This work opens later in the season.`):(Q=e,$.setTool(e),Lh.leftPans=e===`hand`,Mh.classList.toggle(`tool`,e!==`hand`),fg(),Tg=null,Rh.tick())}function Qh(e){Z.ended||(e===0?Z.paused=!Z.paused:(Z.speed=e,Z.paused=!1),$.setSpeed(Z.speed,Z.paused),Rh.tick())}var $=new Vm(Z,Zh,Qh),$h=Eh();function eg(e){Rh.setVolumes({master:e.master,music:e.music,effects:e.effects});let t=Sh[e.quality];Ph.setQuality(t),Vh.spray.max=t.spray,Vh.rain.max=t.rain,Vh.gulls.mesh.count=t.gulls}eg($h);var tg=Ah.has(`nosave`)||Ah.has(`judge`)||Ah.has(`notitle`)||Ah.get(`new`)===`1`,ng=()=>`Day ${Math.min(15,Ep(Z.t))} · ${Op(Z.t)}`,rg=kh({settings:$h,applySettings:eg,canvas:Mh,hud:$,game:Z,clockText:ng,onModal:e=>Lh.lock(e),onNewSeason:()=>$g.newSeason()});tg||(Z.held=!0);var ig=null;function ag(e){ig={thing:e,until:performance.now()+6e3};let t=Z.centerOf(e);Lh.set(t.x,t.z,Lh.cur.yaw,.65,42,!1),Zh(`hand`)}document.getElementById(`look-at`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-look]`);if(!t)return;let n=t.dataset.look;n===`pan`&&ag(Z.pans[0]),n===`fish`&&ag(Z.weirs[0]),n===`oysters`&&ag(Z.oysters[0]),n===`quay`&&Lh.set(qh.x,qh.z,Lh.cur.yaw,.65,42,!1)}),document.getElementById(`hire`).addEventListener(`click`,()=>{Rh.start(),Z.people.hire()?(Rh.chime(2),$.message(Z.people.hireProblem()?`A hand is hired, but ${Z.people.hireProblem()}.`:`A hand walks from the village. Keep a dry route to the works.`,5500)):$.message(`Hiring costs 24 shillings. Homes currently support ${Z.works.maxHands()} hands.`)}),document.getElementById(`hands`).addEventListener(`change`,e=>{let t=Z.people.hands[+e.target.dataset.hand],n=Z.people.jobs()[+e.target.value];t&&n&&Z.people.assign(t,n.thing)}),document.getElementById(`hands`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-fix]`),n=t&&Z.people.hands[+t.dataset.fix];if(!n)return;let r=Z.centerOf(n.job);Lh.set(r.x,r.z,Lh.cur.yaw,.65,42,!1),Zh(`causeway`),$.message(`Causeway tool on. Drag a raised dry route from the village (or a stilt house) to ${Z.people.jobs().find(e=>e.thing===n.job)?.label||`the work`}; ${n.name} then walks it.`,6e3)}),document.getElementById(`repair`).addEventListener(`click`,()=>Zh(`repair`)),document.getElementById(`protect-all`).addEventListener(`click`,()=>{let e=Z.works.protectAffordable();$.message(e?`Storm banks raised on ${e} work${e>1?`s`:``} (${e*65} sh).`:`Not enough shillings: each storm bank costs 65 and you have ${Math.floor(Z.store.coin)}.`,3200)}),document.getElementById(`quay-btn`).addEventListener(`click`,()=>{Rh.start();let e=Z.economy,t=e.nextQuay();e.extendQuay()?(Rh.chime(2),$.message(`Quay berth built: the trader now carries ${e.cap()} cargo per visit.`,5e3)):$.message(t?e.quayOpen()?`A berth costs ${t.cost} shillings; you have ${Math.floor(Z.store.coin)}.`:`The next berth opens on day ${t.day}.`:`The quay is as large as the creek allows.`)});var og=new Po(.94,.94).rotateX(-Math.PI/2),sg=new Fi(og,new fi({transparent:!0,opacity:.55,depthWrite:!1}),400);sg.count=0,sg.renderOrder=5,sg.frustumCulled=!1,Ph.scene.add(sg);var cg=new H(`#f3e7c4`),lg=new H(`#b8432e`),ug=new H(`#c99a52`),dg=new nn;function fg(){sg.count=0}function pg(e,t,n){if(sg.count>=400)return;let r=Math.max(Nh.h[t*256+e],Sp(Z.t)*0)+.12,i=Nh.h[t*256+e];e>=64&&t>=96&&e<192&&t<224&&(i+=Z.sim.d[(t-96)*128+e-64]),dg.makeTranslation(ap(e),Math.max(r,i+.06),op(t)),sg.setMatrixAt(sg.count,dg),sg.setColorAt(sg.count,n),sg.count++,sg.instanceMatrix.needsUpdate=!0,sg.instanceColor.needsUpdate=!0}var mg=new Fi(og,new fi({color:`#ff8a00`,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1}),400);mg.count=0,mg.renderOrder=7,mg.frustumCulled=!1,Ph.scene.add(mg);var hg=e=>Z.gates.some(t=>t.i>=e.i0-1&&t.i<=e.i0+e.w&&t.j>=e.j0-1&&t.j<=e.j0+e.d);function gg(e){let t=[];for(let n=e.j0-1;n<=e.j0+e.d;n++)for(let r=e.i0-1;r<=e.i0+e.w;r++){let i=r===e.i0-1||r===e.i0+e.w,a=n===e.j0-1||n===e.j0+e.d;if(!(i||a)||i&&a||Yg(`gate`,r,n,null,!0))continue;let o=i?r<e.i0?-1:1:0,s=a?n<e.j0?-1:1:0,c=Nh.kind[(n+s)*256+r+o];t.push({i:r,j:n,wet:c===1||c===2})}return t.some(e=>e.wet)?t.filter(e=>e.wet):t}function _g(e,t){let n=new Set;if(!Z.ended&&!Z.held&&(e?.needsGate&&e.thing?.kind===`pan`&&n.add(e.thing),Q===`gate`))for(let e of Z.pans)hg(e)||n.add(e);let r=0;for(let e of n)for(let t of gg(e)){if(r>=400)break;dg.makeTranslation(ap(t.i),Nh.h[t.j*256+t.i]+.25,op(t.j)),mg.setMatrixAt(r++,dg)}mg.count=r,mg.instanceMatrix.needsUpdate=!0,mg.material.opacity=.7+.3*Math.sin(t/200)}var vg=new U(new Fo(1,1.18,40).rotateX(-Math.PI/2),new fi({color:`#e9c98a`,transparent:!0,opacity:.9,depthWrite:!1}));vg.renderOrder=6,vg.visible=!1,Ph.scene.add(vg);var yg=vg.clone();yg.material=vg.material.clone(),yg.material.color.set(`#fff3d6`),Ph.scene.add(yg);var bg=new Map;function xg(e,t){let n=e.id+`:`+t.uuid;if(!bg.has(n)){let r=e.w+1,i=e.d+1,a=.28,o=new U(gd([new pa(r+a,.08,a).translate(0,0,-i/2),new pa(r+a,.08,a).translate(0,0,i/2),new pa(a,.08,i-a).translate(-r/2,0,0),new pa(a,.08,i-a).translate(r/2,0,0)]),t);o.position.set(ap(e.i0)+(e.w-1)/2,ip+.06,op(e.j0)+(e.d-1)/2),o.renderOrder=6,o.visible=!1,Ph.scene.add(o),bg.set(n,o)}return bg.get(n).position.y=(e.braced?3.05:ip)+.06,bg.get(n)}function Sg(e){for(let[t,n]of bg)t.endsWith(e.uuid)&&(n.visible=!1)}var Cg=null,wg={x:-1,y:-1,in:!1},Tg=null,Eg=!1,Dg=null;Mh.addEventListener(`pointermove`,e=>{wg.x=e.clientX,wg.y=e.clientY,wg.in=!0,Eg&&Og(e)}),Mh.addEventListener(`pointerleave`,()=>{wg.in=!1}),Mh.addEventListener(`pointerdown`,e=>{if(Rh.start(),Mh.focus(),!(e.button!==0||e.shiftKey)&&((Q===`dig`||Q===`causeway`)&&(Eg=!0,Dg=null,Og(e)),Q===`pan`)){let t=Lh.pick(e.clientX,e.clientY);t&&(Tg={i:sp(t.x),j:cp(t.z),i1:sp(t.x),j1:cp(t.z)})}}),window.addEventListener(`pointerup`,()=>{Eg=!1});function Og(e){if(Z.ended)return;let t=Lh.pick(e.clientX,e.clientY);if(!t)return;let n=sp(t.x),r=cp(t.z),i=[];if(Dg){let e=Dg.i,t=Dg.j;for(;e!==n||t!==r;)Math.abs(n-e)>=Math.abs(r-t)?e+=Math.sign(n-e):t+=Math.sign(r-t),i.push([e,t])}else i.push([n,r]);Dg={i:n,j:r};for(let[e,t]of i)if(Q===`causeway`)Z.causeway(e,t)&&Rh.dig();else{if(Z.store.coin<Am.dig){$.message(`Out of shillings. Rake salt or collect fish; the trader buys at high water.`);return}Z.dig(e,t)&&(Z.spend(Am.dig,`Channel digging`),Rh.dig(),zh.onEvent({type:`built`}))}}function kg(e,t){let n=0,r=1e9;for(let i=0;i<8;i++){let a=i/8*Math.PI,o=Math.cos(a),s=Math.sin(a),c=0;for(let n of[1,-1])for(let r=1;r<10;r++){let i=Math.round(t+s*r*n)*256+Math.round(e+o*r*n);if(Nh.h[i]>.7)break;c++}c<r&&(r=c,n=a)}return{ang:n,half:Math.min(6,r/2+1.6)}}function Ag(e){let t=Ug(new V(e.mesh.position.x,e.mesh.position.y+Wp,e.mesh.position.z));return t.behind?null:{left:t.x-56,right:t.x+56,top:t.y-24,bottom:t.y+24}}function jg(e,t){for(let n of Z.gates){let r=Ag(n);if(r&&e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom)return n}let n=null,r=1e9;for(let i of Z.gates){let a=Ug(Z.centerOf(i)),o=Ug(new V(ap(i.i),Nh.h[i.j*256+i.i]+.4,op(i.j)));if(a.behind)continue;let s=Math.max(1,Math.hypot(a.x-o.x,a.y-o.y)),c=jt.clamp(((e-o.x)*(a.x-o.x)+(t-o.y)*(a.y-o.y))/(s*s),0,1.15),l=Math.hypot(e-(o.x+(a.x-o.x)*c),t-(o.y+(a.y-o.y)*c));l<Math.max(16,Math.min(24,s*.3))&&l<r&&(r=l,n=i)}return n}function Mg(e,t,n){for(let r of n){let n=Z.centerOf(r),i=Ug(n),a=Ug(new V(n.x,Lp(Nh,n.x,n.z)+.1,n.z));if(i.behind)continue;let o=i.x-a.x,s=i.y-a.y,c=o*o+s*s,l=jt.clamp(((e-a.x)*o+(t-a.y)*s)/Math.max(1,c),0,1);if(Math.hypot(e-a.x-l*o,t-a.y-l*s)<22)return r}return null}var Ng=34,Pg=16;function Fg(e,t,n){let r=null,i=1e9,a=(e,t,n)=>{t<n&&t<i&&(i=t,r=e)};for(let r of Z.oysters){let i=new V(ap(r.i),Lp(Nh,ap(r.i),op(r.j))+.3,op(r.j)),o=Ug(i);if(o.behind)continue;let s=Ug(i.clone().add(new V(2.4,0,0))),c=Ug(i.clone().add(new V(0,0,2.4))),l=Math.max(Math.hypot(s.x-o.x,s.y-o.y),Math.hypot(c.x-o.x,c.y-o.y)),u=Ug(Z.centerOf(r));a(r,Math.min(Math.hypot(e-o.x,t-o.y),Math.hypot(e-u.x,t-u.y)),Math.max(n,l*(n>Pg?1.1:.7)))}for(let r of Z.weirs){let i=[...r.mesh.userData.pts.map(([e,t,n])=>new V(e,t,n)),Z.centerOf(r)];for(let o of i){let i=Ug(o);i.behind||a(r,Math.hypot(e-i.x,t-i.y),n)}}return r}function Ig(e,t,n){return jg(e,t)||Mg(e,t,[...Z.works.pumps,...Z.works.mills,...Z.works.houses])||Fg(e,t,Pg)||(n?Z.thingAt(n.x,n.z):null)||Fg(e,t,Ng)}var Lg=null;Mh.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;let t=Lh.pick(e.clientX,e.clientY);Lg={thing:Ig(e.clientX,e.clientY,t),glide:Lh.gliding()}},!0),Lh.onClick=(e,t)=>{if(Z.ended||t&&Q===`hand`)return;let n=Lh.pick(e.clientX,e.clientY);if(Lg&&(Lg.glide||Lh.gliding())&&!t){if(Q===`hand`&&Lg.thing){Lg.glide=!1,Z.hintHold&&c_(),Rg(Lg.thing,e.clientX,e.clientY);return}Lh.settle(),n=Lh.pick(e.clientX,e.clientY)}if(Z.hintHold&&!t){if(Q===`hand`&&(!f_||Ig(e.clientX,e.clientY,n)!==f_)){$.message(`The clock is still stopped. Click the highlighted thing, or press any key, to run it.`,2600);return}c_()}if(Q===`pan`&&Tg){let e=zg();if(Tg=null,fg(),!e)return;let t=Yg(`pan`,0,0,e);if(t){$.message(t+`.`);return}Z.spend(Am.pan,`Salt pan`),Z.addPan(e.i0,e.j0,e.w,e.d),Rh.dig(),Rh.thump(Rh.ctx?Rh.ctx.currentTime:0,.3),zh.onEvent({type:`built`}),$.message(`Pan built. Give it a sluice in its bank to let the tide in (3).`,3500);return}if(Q===`hand`){let t=Ig(e.clientX,e.clientY,n);t&&Rg(t,e.clientX,e.clientY);return}if(Q===`repair`){let t=Ig(e.clientX,e.clientY,n),r=t?.kind===`pump`?t.pan:t;Z.storm.repair(r)?(Rh.dig(),$.message(`Repairs underway · 10 seconds.`)):$.message(Z.storm.active?`Wait for the surge to pass before repairing.`:Z.storm.repairJob?`The repair crew is busy.`:r?r.damage?Z.store.coin<24?`Repairs cost 24 shillings; you have ${Math.floor(Z.store.coin)}.`:`Click damaged works to repair them for 24 shillings.`:`${r.name} is not damaged.`:`No work under the cursor. Click the damaged work itself.`);return}if(Q===`pump`||Q===`bank`){let t=Ig(e.clientX,e.clientY,n),r=t?.kind===`pump`?t.pan:t,i=Q===`bank`?Z.works.protectProblem(r):null;if(Q===`pump`?Z.works.installPump(r):!i&&Z.works.protect(r)){Rh.dig();let e=Z.works.stormPlan();$.message(Q===`pump`?`Pump installed. Mill power lifts brine with the sluice shut.`:`Storm banks built: ${e.braced}/${e.total} works protected. ${!Z.storm.passed&&r.kind===`pan`&&Z.panOpen(r)?`Its sluice is open: shut it before the surge.`:e.text}`,6e3)}else $.message(Q===`pump`?`Not built, nothing charged: ${r?.kind===`pan`?r.pump?`this pan already has a pump`:Z.works.mills.length?Z.store.coin<90?`a pump costs 90 shillings and you have ${Math.floor(Z.store.coin)}`:`it cannot go there`:`a pump needs a tide mill first (T)`:`click a salt pan to give it a pump`}.`:i||`Storm banks could not be built there.`,5e3);return}if(!n)return;let r=sp(n.x),i=cp(n.z);if(i*256+r,Q===`house`||Q===`mill`){let e=pm.find(e=>e.id===Q),t=Z.works.siteProblem(Q,r,i);!t&&Z.store.coin<e.cost?$.message(`Not built, nothing charged: a ${e.name.toLowerCase()} costs ${e.cost} shillings and you have ${Math.floor(Z.store.coin)}.`,4500):!t&&Z.works.build(Q,r,i)?(Rh.dig(),$.message(Q===`house`?`Stilt house built (${e.cost} sh charged). Two more hands can join the village.`:`Tide mill built (${e.cost} sh charged). The wheel turns while the creek runs; power is stored for pumps.`,5e3)):$.message(`Not built, nothing charged: ${t||`it cannot go there`}.`,5e3)}else if(Q===`dredge`){let e=Z.sediment.target(r,i);Z.sediment.start(r,i)?(Rh.dig(),$.message(`Dredging started. The crew waits when the flood is too deep.`)):$.message(Z.sediment.job?`One dredging crew at a time.`:e.amount<.05?`This bed is still clear of silt.`:e.wet>.25?`Wait for shallow water before dredging.`:`Dredging costs ${e.cost} shillings.`)}else if(Q===`gate`){let e=Yg(`gate`,r,i);if(e){$.message(e+`.`);return}Z.spend(Am.gate,`Sluice gate`),Z.addGate(r,i,!0),Rh.creak(!1),zh.onEvent({type:`built`})}else if(Q===`oyster`){let e=Yg(`oyster`,r,i);if(e){$.message(e+`.`);return}if(!Z.spend(Am.oyster,`Oyster bed`))return;Z.addOysters(r,i),Rh.dig(),zh.onEvent({type:`built`})}else if(Q===`weir`){let e=Yg(`weir`,r,i);if(e){$.message(e+`.`);return}let{ang:t,half:a}=kg(r,i);Z.spend(Am.weir,`Fish weir`),Z.addWeir(n.x,n.z,t,!1),Z.weirs[Z.weirs.length-1].mesh.userData.half=a,Rh.dig(),zh.onEvent({type:`built`})}};function Rg(e,t,n){if(e.kind===`pump`)e.enabled=!e.enabled,Rh.tick(),$.message(e.enabled?`Pump working when power and water are available.`:`Pump stopped. Power is saved.`);else if(e.kind===`mill`)$.message(`Wheel ${e.output.toFixed(1)} power/s · ${Math.floor(Z.works.energy)} stored. Pumps use this power.`);else if(e.kind===`house`)$.message(`Stilt home: dry local footing, room for two hands, and shelter for 30 cargo.`);else if(e.kind===`gate`)Z.toggleGate(e),Rh.creak(!e.open);else if(e.kind===`pan`){let r=Z.rake(e);r>0?(Rh.chime(4),$.gain(t,n-20,`+${r} salt`)):$.message(e.V>.5?`Still brine. Let the sun work it, gate shut.`:`Nothing to rake yet.`)}else if(e.kind===`oyster`){let r=Z.gather(e);r?(Rh.chime(3),$.gain(t,n-20,`+${r} oysters`)):$.message(e.exposed?`The bed is growing. Oysters feed under the flood.`:`Wait for low water to rake this bed.`)}else if(e.kind===`weir`){let r=Z.collect(e);r>0?(Rh.chime(2),$.gain(t,n-20,`+${r} fish`)):$.message(`The basket is empty. Weirs catch on the ebb.`)}}function zg(){if(!Tg)return null;let{i:e,j:t,i1:n,j1:r}=Tg;return Math.abs(n-e)<2&&Math.abs(r-t)<2&&(e-=3,t-=2,n=e+6,r=t+4),{i0:Math.min(e,n),j0:Math.min(t,r),w:Math.min(12,Math.max(3,Math.abs(n-e)+1)),d:Math.min(10,Math.max(3,Math.abs(r-t)+1))}}window.addEventListener(`keydown`,e=>{if(rg.handleKey(e)||e.target?.closest?.(`input, select, textarea`)||e.code===`Space`&&e.target?.closest?.(`button`)||e.repeat)return;let t={Digit1:`hand`,Digit2:`dig`,Digit3:`gate`,Digit4:`pan`,Digit5:`weir`,Digit6:`oyster`,Digit7:`causeway`,Digit8:`dredge`,KeyH:`house`,KeyT:`mill`,KeyP:`pump`,KeyB:`bank`,KeyR:`repair`}[e.code];t&&Zh(t),e.code===`Escape`&&(Q===`hand`?rg.openPause():Zh(`hand`)),e.code===`Space`&&(e.preventDefault(),Qh(0)),e.code===`Period`&&Qh(Z.speed===1?3:8),e.code===`Comma`&&Qh(Z.speed===8?3:1),e.code===`KeyM`&&Vg()});var Bg=document.getElementById(`sound`);function Vg(){Rh.start(),Rh.setMuted(!Rh.muted),Bg.textContent=Rh.muted?`Sound off`:`Sound on`}Bg.addEventListener(`click`,Vg);var Hg=new V;function Ug(e){return Hg.copy(e).project(Ph.camera),{x:(Hg.x*.5+.5)*window.innerWidth,y:(-Hg.y*.5+.5)*window.innerHeight,behind:Hg.z>1}}function Wg(e,t){let n=Sp(Z.t),r=Z.panFloor(e),i=Z.gates.find(t=>t.i>=e.i0-1&&t.i<=e.i0+e.w&&t.j>=e.j0-1&&t.j<=e.j0+e.d),a=`Dredge at low water: 14 sh (press 8)`;return i?t>16?[`Dry: ${t} cm of silt lifts the floor to +${r.toFixed(2)} m, above the tide.`,a]:i.open?n<=r?[`Dry: the tide (${n>=0?`+`:`−`}${Math.abs(n).toFixed(2)} m) is below the floor (+${r.toFixed(2)} m). Wait for high water.`,...t>8?[a]:[]]:[`Dry: the gate is open but no water reaches it. Dig a channel (2) from a creek to the gate.`]:[`Dry: its sluice is shut. Click the gate to open it on the flood.`]:[`Dry: no sluice in its bank. Press 3 and click a bank cell; a channel (2) must reach a creek.`]}function Gg(){let e=Z.works.rates();return e?`Makes about ${e.gen.toFixed(0)} power per tide-day (measured over ${e.days.toFixed(1)} days); a pump spends about 0.65 power per second it lifts.`:`Makes power while the creek runs (mid-tide); a pump spends about 0.65 per second it lifts.`}function Kg(){let e=Z.works.rates();return e?`Spends about ${e.used.toFixed(0)} power and lifts ${e.lifted.toFixed(1)} m³ per tide-day (all pumps).`:`Lifts brine into a shut pan through neaps. No daily figure yet.`}function qg(e){if(e.damage)return[[`${e.name} damaged by the surge`,e.kind===`pan`?`A breached bank leaks brine. Salt dries slowly.`:`Production stopped until repaired.`],`Repair (R) · 24 shillings · 10 seconds after the surge`];if(e.kind===`mill`)return[[`${e.output.toFixed(1)} power/s now · ${Math.floor(Z.works.energy)} / ${Z.works.mills.length*120} stored`,Gg(),e.braced?`Braced for the surge`:`Unbraced · storm banks (B) protect the wheel`],e.output>.05?`Charging: the creek is running`:`Resting: slack water. It charges when the creek runs, mid-tide.`];if(e.kind===`house`)return[[`Raised deck +3.05 m · homes for two hands`,`30 stored cargo sheltered from the surge`],`Hire hands in the village ledger`];if(e.kind===`pump`)return[[e.enabled?e.active?`Working on stored mill power`:`Waiting for power or water`:`Switched off`,Kg(),`Active only with its sluice shut, mill power stored and the pan below 25 cm; also drains storm water.`],`Click to switch on / off`];if(e.kind===`gate`)return[e.open?`Open: the tide runs in and out.`:`Shut: water stays where it is.`,e.open?`Click to shut it`:`Click to open it`];if(e.kind===`pan`){let t=[],n=e.V/e.cells.length,r=Math.round(Z.sediment.panDepth(e)*100);n<=.01?t.push(...Wg(e,r)):t.push(`Brine ${n.toFixed(2)} m deep, ${(e.conc||1).toFixed(1)}× sea salt`),e.crust>.05&&t.push(`Salt crust: ${Math.round(e.crust*4)} salt`),t.push(`Floor +${Z.panFloor(e).toFixed(2)} m · silt ${(Z.sediment.panDepth(e)*100).toFixed(0)} cm`),t.push(e.braced?`Storm banks +3.05 m · shut the sluice before the surge`:`Banks +1.48 m · storm protection opens on day 10`),e.maintaining&&t.push(`Dredging · ${Math.ceil(Z.sediment.job.left)}s of shallow water left`);let i=r>16&&n<.05&&e.crust<.2;return r>10&&!i&&!e.maintaining&&t.push(`Silt is building: Dredge (8) at low water · 14 sh`),[t,e.crust>.1?`Click to rake the salt`:i?`Press 8, click the pan: Dredge at low water · 14 sh`:Z.panOpen(e)?`Its sluice is open`:`Its sluice is shut`]}return e.kind===`oyster`?[[`${Math.floor(e.stock)} oysters · ${e.exposed?`bed exposed`:`under water`}`,`Feeds on the flood; rake when the mud is exposed.`],e.exposed&&e.stock>=1?`Click to rake oysters`:`Wait for low water`]:e.kind===`weir`?[[`${Math.floor(e.catch)} fish in the basket`,`Catches fish on the ebb`],e.catch>=1?`Click to empty the basket`:``]:[[],``]}function Jg(e){let t=sp(e.x)-64,n=cp(e.z)-96;if(t>=0&&n>=0&&t<128&&n<128){let e=n*128+t;return Z.sim.b[e]+Z.sim.d[e]+.12}return Math.max(Lp(Nh,e.x,e.z),Sp(Z.t))+.12}function Yg(e,t,n,r,i=!1){let a=n*256+t,o=Nh.kind[a],s=e=>!i&&Z.store.coin<e?`Needs ${e} sh`:null;return e===`pan`?Z.panProblem(r.i0,r.j0,r.w,r.d)||s(Am.pan):e===`oyster`?Z.oysterProblem(t,n)||s(Am.oyster):e===`weir`?o===1?Nh.h[a]>.6?`Too high and dry: the ebb does not run here`:Z.works.occupied(t,n)?`Too close to a house or mill`:s(Am.weir):`Not on a creek: weirs go across a creek`:e===`gate`?t>64&&n>96&&t<191&&n<223?o!==1&&o!==2&&o!==3?`Not on a channel, creek or pan bank`:Z.works.occupied(t,n)?`Too close to a house or mill`:Z.sediment.job?.cells.includes((n-96)*128+t-64)?`The dredging crew is working here`:Z.gates.some(e=>Math.abs(e.i-t)+Math.abs(e.j-n)<2)?`Too close to another sluice`:s(Am.gate):`Too near the edge of the marsh`:null}function Xg(){if(Cg=null,Zg(),Sg(vg.material),!wg.in||Lh.drag?.moved){$.hideTip(),vg.visible=!1,Mh.classList.remove(`over`);return}let e=Lh.pick(wg.x,wg.y);if(Q===`hand`){let t=Ig(wg.x,wg.y,e);if(Cg=t,Mh.classList.toggle(`over`,!!t),t){let e=Z.centerOf(t);vg.visible=t.kind!==`pan`,t.kind===`pan`&&(xg(t,vg.material).visible=!0);let n=t.kind===`weir`?3.2:1.6;vg.scale.setScalar(n),vg.position.set(e.x,t.kind===`pan`?ip+.08:Math.max(e.y-3.2,Jg(e)),e.z);let[r,i]=qg(t);$.showTip(wg.x,wg.y,t.name,Array.isArray(r)?r:[r],i)}else vg.visible=!1,$.hideTip();return}if(vg.visible=!1,!e){$.hideTip();return}let t=sp(e.x),n=cp(e.z);if(n*256+t,fg(),Q===`house`||Q===`mill`){let e=pm.find(e=>e.id===Q),r=Z.works.siteProblem(Q,t,n),i=!r&&Z.store.coin>=e.cost;for(let e=n-1;e<=n+(Q===`house`?4:1);e++)for(let n=t-1;n<=t+1;n++)pg(n,e,i?cg:lg);$.showTip(wg.x,wg.y,e.name,[e.detail,...Q===`mill`?[Gg()]:[]],r?r+`.`:Z.store.coin<e.cost?`Needs ${e.cost} sh (you have ${Math.floor(Z.store.coin)})`:`${e.cost} shillings · click to build`,!i)}else if(Q===`repair`)pg(t,n,ug),$.showTip(wg.x,wg.y,`Storm repairs`,[`Click a damaged pan, mill, weir or oyster bed after the surge.`],`24 shillings · 10 seconds · one crew`);else if(Q===`pump`||Q===`bank`){let e=pm.find(e=>e.id===Q);pg(t,n,ug),$.showTip(wg.x,wg.y,e.name,[e.detail],`${e.cost} shillings · click a work`)}else if(Q===`dredge`){let e=Z.sediment.target(t,n),r=!Z.sediment.job&&e.amount>=.05&&e.wet<=.25&&Z.store.coin>=e.cost;for(let t of e.cells)pg(64+t%128,96+Math.floor(t/128),r?cg:lg);$.showTip(wg.x,wg.y,e.pan?`Dredge this pan`:`Dredge channel`,[`${e.amount.toFixed(1)} m³ silt · ${e.wet.toFixed(2)} m water`,`The crew works below 0.25 m depth.`],`${e.cost} shillings · ${e.duration} seconds · click to start`)}else if(Q===`causeway`)pg(t,n,Z.causewaySiteOK(t,n)&&Z.store.coin>=Am.causeway?cg:lg),$.showTip(wg.x,wg.y,`Raised causeway`,[`Drag a dry route from the village to the works. Takes the same land as pans and blocks water.`],`${Am.causeway} shillings a cell · +1.65 m`);else if(Q===`dig`)pg(t,n,Z.store.coin>=Am.dig?cg:lg),$.showTip(wg.x,wg.y,`Dig a channel`,[`Drag from a creek to lead the tide where you want it.`],`${Am.dig} shilling a cell`);else if(Q===`gate`){let e=Yg(`gate`,t,n);pg(t,n,e?lg:cg),$.showTip(wg.x,wg.y,`Sluice gate`,[`Across a channel or a pan bank. Open lets the tide through; shut holds water in.`],e||`${Am.gate} shillings`,!!e)}else if(Q===`pan`){Tg&&(Tg.i1=t,Tg.j1=n);let e=zg()||{i0:t-3,j0:n-2,w:7,d:5},r=Yg(`pan`,t,n,e),i=!r;for(let t=e.j0-1;t<=e.j0+e.d;t++)for(let n=e.i0-1;n<=e.i0+e.w;n++){let r=n===e.i0-1||t===e.j0-1||n===e.i0+e.w||t===e.j0+e.d;pg(n,t,i?r?ug:cg:lg)}$.showTip(wg.x,wg.y,`Salt pan ${e.w}×${e.d}`,[`Drag to size it. A clay bank holds the brine. It also needs a sluice in its bank AND a dug channel (2) from a creek to fill it.`],r||`${Am.pan} shillings`,!!r)}else if(Q===`oyster`){let e=Yg(`oyster`,t,n);pg(t,n,e?lg:cg);let r=null;if(Z.oysterProblem(t,n))for(let e=1;e<=40&&!r;e++){let i=1/0;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++){if(Math.max(Math.abs(o),Math.abs(a))!==e||Z.oysterProblem(t+o,n+a))continue;let s=Math.hypot(o,a);s<i&&(i=s,r={i:t+o,j:n+a})}}r&&pg(r.i,r.j,ug);let i=r?` Nearest valid mud (gold cell): ${Math.round(Math.hypot(r.i-t,r.j-n))} cells ${r.j<n?`north`:r.j>n?`south`:``}${r.i>t?`east`:r.i<t?`west`:``}.`:e?` No valid mud within 40 cells.`:``;$.showTip(wg.x,wg.y,`Oyster bed`,[`On a low mud bank (between -0.8 m and +0.35 m), 4 cells from other beds. Oysters grow under water and are raked at low tide.`],e?e+`.`+i:`${Am.oyster} shillings`,!!e)}else if(Q===`weir`){let e=Yg(`weir`,t,n);pg(t,n,e?lg:cg),$.showTip(wg.x,wg.y,`Fish weir`,[`Across a creek. Fish are caught as the ebb runs out.`],e||`${Am.weir} shillings`,!!e)}}function Zg(){Q===`hand`&&fg()}function Qg(){Ph.resize(window.innerWidth,window.innerHeight),$.fitChart(),wg.in=!1,Xg(),document.getElementById(`tool-help`).hidden=!0}window.addEventListener(`resize`,Qg),Qg();var $g=(()=>{let e=!Ah.has(`nosave`),t=!1,n=performance.now(),r=!1,i=!1,a=e=>$.message(e,6e3),o=()=>{if(!t||Z.held)return!1;if(Z.ended)return i||(i=!0,$m.clear()),!1;if(Z.t-mp<10)return!1;n=performance.now();let e=!1;try{e=$m.write(dh(uh(Z,zh,jh)))}catch{e=!1}return!e&&!r&&(r=!0,a(`This browser will not keep your season: saving is blocked or full.`)),e},s=()=>{t=e,Z.held=!1,n=performance.now(),Rh.start()},c=()=>{$m.clear();let e=new URL(location.href);e.searchParams.set(`fresh`,`1`),location.replace(e)},l=null,u=()=>{if(l){let e=l;l=null,setTimeout(()=>a(e),400)}},d=e=>{rg.handlers={summary:()=>`${ng()} · ${Math.round(Z.store.coin)} shillings`,continue:()=>{try{vh(Z,zh,e)}catch(e){console.warn(`save could not be restored`,e),c();return}$.setSpeed(Z.speed,Z.paused),s(),$.update(),a(Z.paused?`Season resumed, paused.`:`Season resumed at ${Z.speed}× speed.`)},new:()=>{e&&$m.clear(),s(),u()},mainMenu:()=>$g.toTitle()};let t=e?Math.min(15,Ep(e.t)):0;rg.showTitle(e?`Day ${t} · ${Op(e.t)} · ${Math.round(e.store.coin)} shillings`:null)};if(tg)rg.enter(),s();else if(e){if(Ah.get(`fresh`)===`1`){Ah.delete(`fresh`);let e=new URL(location.href);e.searchParams.delete(`fresh`),history.replaceState(null,``,e),l=`The saved season could not be read, so this is a new one.`,d(null)}else{let{text:e,blocked:t}=$m.read();if(t)l=`This browser blocks saving; the season will not be kept.`,d(null);else if(e){let t=gh(e,jh,Z);t.ok?d(t.snap):($m.clear(),l=`The saved season could not be read, so this is a new one.`,d(null))}else d(null)}}if(Ah.get(`new`)===`1`){Ah.delete(`new`);let e=new URL(location.href);e.searchParams.delete(`new`),history.replaceState(null,``,e)}return window.addEventListener(`pagehide`,o),document.addEventListener(`visibilitychange`,()=>{let e=document.visibilityState===`hidden`;Rh.setTabHidden(e),e&&(rg.openPause(),o())}),{frame(e){e-n>=8e3&&o()},save:o,newSeason:()=>{t=!1,$m.clear();let e=new URL(location.href);e.searchParams.set(`new`,`1`),e.searchParams.delete(`fresh`),location.replace(e)},toTitle:()=>{o(),t=!1,location.reload()}}})(),e_=performance.now(),t_=0,n_=!1,r_=!1,i_=Promise.race([Yf.init({manifest:Xf}).then(()=>{Yf.onPause(e=>{Z.hostPaused=e}),Yf.audio.onHostMute(e=>Rh.setHostMuted(e))}).catch(()=>{}),new Promise(e=>setTimeout(e,3e3))]),a_=Ah.has(`nohold`),o_=2,s_={seen:new Set},c_=()=>{Z.hintHold&&(Z.hintHold=!1,$.note(`hold-note`,null),$.message(`Clock running.`,1400),e_=performance.now())};window.addEventListener(`pointerdown`,e=>{e.target!==Mh&&c_()},!0),window.addEventListener(`keydown`,e=>{[`Shift`,`Control`,`Alt`,`Meta`].includes(e.key)||(Z.hintHold&&e.code===`Space`&&!Z.paused&&(e.preventDefault(),e.stopImmediatePropagation()),c_())},!0);var l_=`TIME IS STOPPED while you read. Press any key, or click the highlighted thing, and the clock runs again (a number key also picks its tool).`,u_=`TIME IS STOPPED: the game is paused. Press Space to run the clock.`,d_=(e,t)=>{a_||Z.held||Z.ended||Z.hintHold||rg.modal()||s_.seen.has(e)||Z.t-mp>=o_*90||(s_.seen.add(e),Z.hintHold=!0,$.note(`hold-note`,t))},f_=null,p_={n:null},m_=Z.t,h_=0,g_=!0,__=!1;function v_(e){e?.act&&(f_=e.thing||null,d_(`hint:`+e.text.replace(/\d\d:\d\d/g,`HH:MM`),l_)),Z.hintHold&&$.note(`hold-note`,Z.paused?u_:l_),document.body.classList.toggle(`clock-stopped`,!!Z.hintHold),document.getElementById(`msg`).style.top=document.getElementById(`notes`).getBoundingClientRect().bottom+8+`px`;let t=Z.economy,n=t.state===`leaving`?wp(t.high+2,`high`):t.high,r=Math.max(0,Math.ceil(n-1.5-Z.t));$.note(`trader-cue`,Z.ended||Z.held||Z.hintHold||!$.traderSeen?null:t.state===`arriving`?`Trader arriving at the quay${Z.stats.raked?` · selling marked cargo`:``}`:t.state===`away`&&r>0&&r<=12&&!Z.storm?.active?`Trader lands at high water, in ${r}s`:null);let i=Z.store.salt+Z.store.fish+Z.store.oysters,a=Z.pans.some(e=>e.V/e.cells.length>.03&&!Z.panOpen(e)||e.crust>.05);(i>h_||a||Z.held||g_)&&(m_=Z.t),g_=Z.held,h_=i;let o=null;!Z.ended&&!Z.held&&!Z.storm?.active&&Z.t-m_>45&&(o=Z.storm?.preparing?null:Z.pans.length&&Z.pans.every(e=>Z.panOpen(e))?`Every gate is open, so nothing is being made. Shut one at high water to trap brine.`:`Nothing has been made for a whole tide. Open a pan gate on the flood, then shut it at high water.`),$.note(`nudge`,Z.hintHold||rg.modal()?null:o);let s=Tm-Z.t;!__&&s<=180&&s>0&&!Z.held&&(__=!0,$.message(`Two tide-days left. The account is drawn at Day 15 · 14:00: sell your stock at the last landing (the trader will not return after it), repair damage, spend your purse.`,9e3));let c=Ep(Z.t),l=Z.economy;if(p_.n===null||c<p_.n||c>p_.n+1)p_={n:c,earned:l.earned,spent:l.spent,wages:l.wages,prev:null,text:``};else if(c===p_.n+1){let e={earned:l.earned-p_.earned,wages:l.wages-p_.wages,other:l.spent-p_.spent-(l.wages-p_.wages)};e.net=e.earned-e.wages-e.other;let t=``,n=p_.prev;if(n&&e.net<n.net-1){let r=[[n.earned-e.earned,`sales fell ${Math.round(n.earned-e.earned)} sh (cargo prices are lower or less was sold)`],[e.wages-n.wages,`wages rose ${Math.round(e.wages-n.wages)} sh`],[e.other-n.other,`building, dredging and repairs cost ${Math.round(e.other-n.other)} sh more`]].sort((e,t)=>t[0]-e[0]);r[0][0]>1&&(t=`Day ${c-1} net ${Math.round(e.net)} sh, down from ${Math.round(n.net)}: ${r[0][1]}.`)}p_={n:c,earned:l.earned,spent:l.spent,wages:l.wages,prev:e,text:t}}$.note(`net-note`,Z.ended||Z.held||Z.hintHold||rg.modal()?null:p_.text||null),$.note(`season-note`,Z.ended||Z.held||Z.hintHold||rg.modal()||s>90?null:`Last tide-day: the season account is drawn at 14:00.`)}function y_(){let e=performance.now(),t=Math.min(1,(e-e_)/1e3),n=Math.min(.1,t);e_=e,Z.tick(t),$g.frame(e);let r=Z.paused||Z.hostPaused||Z.hintHold||Z.ended?0:n*Math.min(3,Z.speed);Wh+=r;for(let e of Z.events)zh.onEvent(e),e.type===`saltReady`&&Rh.chime(2),e.type===`trade`&&(Rh.chime(3),$.message(`Trader paid ${e.amount.toFixed(1)} shillings. Receipt in the ledger.`,3500)),e.type===`traderArrived`&&Z.stats.raked&&$.message(`The trader is at the quay. Selling marked cargo.`,2500),e.type===`unlock`&&(Rh.chime(3),$.message(`Day ${e.unlock.day}: ${e.unlock.name} now available (${e.unlock.key}).`,6e3)),e.type===`stormWarning`&&(Rh.chime(2),$.message(`Equinox forecast: a +2.9 m surge on day 13. Raise banks and shelter cargo.`,7e3)),e.type===`stormStart`&&(Rh.creak(!1),$.message(`The surge is here. Keep sluices shut. The trader is sheltering.`,7e3)),e.type===`stormDamage`&&(Rh.creak(!0),$.message(`${e.thing.name} damaged! Repair (R) after the surge.`,5e3)),e.type===`stormPassed`&&(Rh.chime(3),$.message(`The surge has passed. Repair damaged works and trade the last tides.`,6e3)),e.type===`dredgeDone`&&(Rh.chime(2),$.message(`Dredging finished. The bed is clear again.`)),e.type===`repairDone`&&(Rh.chime(2),$.message(`${e.thing.name} repaired. Production can resume.`));Z.events.length=0,Lh.update(n);let{night:i}=Ph.updateLight(Z.t+(window.__lookShift||0),Lh.target,Wh);Ph.uniforms.uTide.value=Sp(Z.t),Ph.shadeTerrain(Z.sim,Sp(Z.t),e=>Z.saltAt(e),t_%12==0),Ph.updateWater(Z.sim,e=>Z.brineAt(e)),Fh.mat.userData.shader&&(Fh.mat.userData.shader.uniforms.uTime.value=Wh%400),J.window.emissiveIntensity=i*1.6+.1*(1-i)*0,J.hull.emissiveIntensity=J.sail.emissiveIntensity=J.sailOchre.emissiveIntensity=i*.32,Xh(r),Bh.update(Z),Vh.update(n,Z,Ph,Lh.target,{trader:Jh,moving:Uh}),t_%2==0&&Xg();let a=zh.current(Z.held||rg.modal()?0:t);if(a?.act&&a.thing?.kind===`weir`&&a.thing.catch<1&&(a=null),v_(a),_g(a,e),a){if(a.thing){let t=Z.centerOf(a.thing),n=Ug(t),r=!1;if(a.thing.kind===`pan`){let e=a.thing,t=ap(e.i0-1),i=ap(e.i0+e.w),o=op(e.j0-1),s=op(e.j0+e.d),c=null;for(let[n,r]of[[t,o],[i,o],[t,s],[i,s]]){let t=Ug(new V(n,e.braced?3.05:ip,r));(!c||t.y>c.y)&&(c=t)}n={...n,y:c.y},r=!0}let i=document.getElementById(`tools`).getBoundingClientRect(),o=[`card`,`trade-card`,`stores`,`works-card`].map(e=>document.getElementById(e).getBoundingClientRect()),s=!n.behind&&n.x>24&&n.x<innerWidth-24&&n.y>50&&n.y<i.top-30&&!o.some(e=>n.x>=e.left&&n.x<=e.right&&n.y>=e.top&&n.y<=e.bottom);if(!s&&!a.act&&!a.urgent&&(a.thing.kind===`pan`||a.thing.kind===`gate`))$.hideHint();else if(!s)$.showHint(a.text,a.sub,innerWidth/2,i.top-20,!0);else if(Cg===a.thing)$.hideHint();else{$.showHint(a.text,a.sub,n.x,n.y,!1,r);let e=[];for(let t of Z.gates){let n=Ag(t);n&&e.push(n)}{let t=document.getElementById(`msg`);if(t.classList.contains(`show`)){let n=t.getBoundingClientRect();e.push({left:n.left,right:n.right,top:n.top,bottom:n.bottom})}}$.avoidRects(e,r)}Sg(yg.material),yg.visible=s&&a.thing.kind!==`pan`,a.thing.kind===`pan`&&(xg(a.thing,yg.material).visible=s);let c=1+.18*Math.sin(e/220),l=a.thing.kind===`weir`?3.2:a.thing.kind===`oyster`?2.4:1.7;yg.scale.setScalar(l*c),yg.position.set(t.x,a.thing.kind===`pan`?ip+.1:Math.max(t.y-3.3,Jg(t)),t.z),yg.material.opacity=.5+.4*Math.sin(e/220)}else{let e=document.getElementById(`tools`).getBoundingClientRect();$.showHint(a.text,a.sub,window.innerWidth/2,e.top-16,!0),yg.visible=!1,Sg(yg.material)}}else $.hideHint(),yg.visible=!1,Sg(yg.material);if(ig&&e>ig.until&&(ig=null),ig&&!Z.ended){let t=ig.thing,n=Z.centerOf(t),r=1+.2*Math.sin(e/200);Sg(yg.material),yg.visible=t.kind!==`pan`,t.kind===`pan`&&(xg(t,yg.material).visible=!0),yg.scale.setScalar((t.kind===`weir`?3.6:2.6)*r),yg.position.set(n.x,t.kind===`pan`?ip+.1:Math.max(n.y-3.3,Jg(n)),n.z),yg.material.opacity=.85}t_%3==0&&$.update(),Rh.update(Sp(Z.t),Cp(Z.t),jt.clamp((Lh.cur.z+20)/100,0,1),Lh.cur.dist/120,Z.pans.some(e=>e.V>.5&&!Z.panOpen(e))&&!Z.paused&&!Z.ended),Ph.render(),t_++,r_||(r_=!0,i_.then(()=>{if(!n_){n_=!0;try{Yf.ready(),window.__sgReady=performance.now()}catch{}}}))}Ph.r.setAnimationLoop(y_),window.__sg={game:Z,rig:Lh,hints:zh,hud:$,tide:fp,setTool:Zh,setSpeed:Qh,act:Rg,view:Ph,sound:Rh,menus:rg,settings:$h,fxCount:()=>({...Vh.count(),evaporation:Bh.geo.drawRange.count,limits:{spray:Vh.spray.max,rain:Vh.rain.max,gulls:Vh.gulls.count,evaporation:Bh.positions.length/3}}),refresh:()=>$.update(),saveNow:()=>$g.save(),digest:()=>fh(Z,zh,jh),advance(e){let t=1/30,n=Z.paused,r=Z.frozen,i=Z.hintHold;Z.paused=!1,Z.frozen=!1,Z.hintHold=!1;for(let n=Math.round(e/t);n>0;n--)Z.acc+=t,Z.tick(0);Z.hintHold=i,Z.paused=n,Z.frozen=r},freeze(e){Z.frozen=e},to(e){e>Z.t&&this.advance(e-Z.t)},toScreen:(e,t,n)=>Ug(new V(e,t,n)),centerOf:e=>Ug(Z.centerOf(e)),thingUnder:(e,t)=>Ig(e,t,Lh.pick(e,t)),cell:(e,t)=>{let n=Lh.pick(e,t);return n?{i:sp(n.x),j:cp(n.z)}:null},cellScreen:(e,t)=>Ug(new V(ap(e),Nh.h[t*256+e],op(t))),sluiceMarkCount:()=>mg.count,placeProblem:Yg},yh();