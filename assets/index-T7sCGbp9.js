(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ql="178",Ff=0,Ic=1,Of=2,Du=1,Iu=2,Wn=3,ci=0,Vt=1,vn=2,ri=0,vs=1,Uc=2,Nc=3,zc=4,kf=5,Ai=100,Bf=101,Hf=102,Gf=103,Vf=104,Wf=200,Xf=201,qf=202,Yf=203,$a=204,Za=205,$f=206,Zf=207,Kf=208,Jf=209,jf=210,Qf=211,ep=212,tp=213,np=214,Ka=0,Ja=1,ja=2,Ss=3,Qa=4,el=5,tl=6,nl=7,Uu=0,ip=1,sp=2,oi=0,rp=1,op=2,ap=3,Nu=4,lp=5,cp=6,hp=7,zu=300,ws=301,Es=302,il=303,sl=304,Bo=306,bs=1e3,Li=1001,rl=1002,sn=1003,up=1004,Or=1005,Rn=1006,Jo=1007,Di=1008,Dn=1009,Fu=1010,Ou=1011,vr=1012,Yl=1013,Ni=1014,Cn=1015,Cr=1016,$l=1017,Zl=1018,xr=1020,ku=35902,Bu=1021,Hu=1022,Mn=1023,Mr=1026,yr=1027,Kl=1028,Jl=1029,Gu=1030,jl=1031,Ql=1033,Mo=33776,yo=33777,So=33778,wo=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,vl=37813,xl=37814,Ml=37815,yl=37816,Sl=37817,wl=37818,El=37819,bl=37820,Tl=37821,Eo=36492,Al=36494,Rl=36495,Vu=36283,Cl=36284,Pl=36285,Ll=36286,dp=3200,fp=3201,Wu=0,pp=1,ii="",Xt="srgb",Ts="srgb-linear",Ro="linear",ut="srgb",Vi=7680,Fc=519,mp=512,gp=513,_p=514,Xu=515,vp=516,xp=517,Mp=518,yp=519,Oc=35044,kc="300 es",Xn=2e3,Co=2001;class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const cr=Math.PI/180,Sr=180/Math.PI;function Oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function ec(n,e){return(n%e+e)%e}function Sp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wp(n,e,t){return n!==e?(t-n)/(e-n):0}function hr(n,e,t){return(1-t)*n+t*e}function Ep(n,e,t,i){return hr(n,e,1-Math.exp(-t*i))}function bp(n,e=1){return e-Math.abs(ec(n,e*2)-e)}function Tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ap(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cp(n,e){return n+Math.random()*(e-n)}function Pp(n){return n*(.5-Math.random())}function Lp(n){n!==void 0&&(Bc=n);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dp(n){return n*cr}function Ip(n){return n*Sr}function Up(n){return(n&n-1)===0&&n!==0}function Np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Op={DEG2RAD:cr,RAD2DEG:Sr,generateUUID:Oi,clamp:je,euclideanModulo:ec,mapLinear:Sp,inverseLerp:wp,lerp:hr,damp:Ep,pingpong:bp,smoothstep:Tp,smootherstep:Ap,randInt:Rp,randFloat:Cp,randFloatSpread:Pp,seededRandom:Lp,degToRad:Dp,radToDeg:Ip,isPowerOfTwo:Up,ceilPowerOfTwo:Np,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Fp,normalize:Bt,denormalize:cs};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),R=Math.atan2(L,p*w);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const v=a*w;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new U,Hc=new Pr;class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],x=s[4],v=s[7],L=s[2],R=s[5],b=s[8];return r[0]=o*_+a*w+l*L,r[3]=o*m+a*x+l*R,r[6]=o*p+a*v+l*b,r[1]=c*_+h*w+u*L,r[4]=c*m+h*x+u*R,r[7]=c*p+h*v+u*b,r[2]=f*_+d*w+g*L,r[5]=f*m+d*x+g*R,r[8]=f*p+d*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Ke;function qu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kp(){const n=Po("canvas");return n.style.display="block",n}const Gc={};function xs(n){n in Gc||(Gc[n]=!0,console.warn(n))}function Bp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const n={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ro:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ts]:{primaries:e,whitePoint:i,transfer:Ro,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const it=Vp();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=Po("canvas")),Wi.width=e.width,Wi.height=e.height;const s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ea(s[o].image)):r.push(ea(s[o]))}else r=ea(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;const ta=new U;class It extends ks{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Li,s=Li,r=Rn,o=Di,a=Mn,l=Dn,c=It.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Oi(),this.name="",this.source=new tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=zu;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,L=(p+1)/2,R=(h+f)/4,b=(u+_)/4,P=(g+m)/4;return x>v&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=b/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=b/r,s=P/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends ks{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new It(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Yp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yu extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $p extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Br.subVectors(this.max,$s),Xi.subVectors(e.a,$s),qi.subVectors(e.b,$s),Yi.subVectors(e.c,$s),Jn.subVectors(qi,Xi),jn.subVectors(Yi,qi),gi.subVectors(Xi,Yi);let t=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-gi.y,gi.x,0];return!na(t,Xi,qi,Yi,Br)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Xi,qi,Yi,Br))?!1:(Hr.crossVectors(Jn,jn),t=[Hr.x,Hr.y,Hr.z],na(t,Xi,qi,Yi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,kr=new ki,Xi=new U,qi=new U,Yi=new U,Jn=new U,jn=new U,gi=new U,$s=new U,Br=new U,Hr=new U,_i=new U;function na(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_i.fromArray(n,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=i.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Zp=new ki,Zs=new U,ia=new U;class Lr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ia)),this.expandByPoint(Zs.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new U,sa=new U,Gr=new U,Qn=new U,ra=new U,Vr=new U,oa=new U;class Kp{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sa.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=Qn.dot(this.direction),l=-Qn.dot(Gr),c=Qn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(Gr,f),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,s,r){ra.subVectors(t,e),Vr.subVectors(i,e),oa.crossVectors(ra,Vr);let o=this.direction.dot(oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(Vr.crossVectors(Qn,Vr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(Qn));if(c<0||l+c>o)return null;const h=-a*Qn.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,jp)}lookAt(e,t,i){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ei.crossVectors(i,Kt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ei.crossVectors(i,Kt)),ei.normalize(),Wr.crossVectors(Kt,ei),s[0]=ei.x,s[4]=Wr.x,s[8]=Kt.x,s[1]=ei.y,s[5]=Wr.y,s[9]=Kt.y,s[2]=ei.z,s[6]=Wr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],x=i[7],v=i[11],L=i[15],R=s[0],b=s[4],P=s[8],S=s[12],M=s[1],A=s[5],z=s[9],O=s[13],k=s[2],D=s[6],N=s[10],X=s[14],V=s[3],re=s[7],me=s[11],I=s[15];return r[0]=o*R+a*M+l*k+c*V,r[4]=o*b+a*A+l*D+c*re,r[8]=o*P+a*z+l*N+c*me,r[12]=o*S+a*O+l*X+c*I,r[1]=h*R+u*M+f*k+d*V,r[5]=h*b+u*A+f*D+d*re,r[9]=h*P+u*z+f*N+d*me,r[13]=h*S+u*O+f*X+d*I,r[2]=g*R+_*M+m*k+p*V,r[6]=g*b+_*A+m*D+p*re,r[10]=g*P+_*z+m*N+p*me,r[14]=g*S+_*O+m*X+p*I,r[3]=w*R+x*M+v*k+L*V,r[7]=w*b+x*A+v*D+L*re,r[11]=w*P+x*z+v*N+L*me,r[15]=w*S+x*O+v*X+L*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,L=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,R=t*w+i*x+s*v+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=w*b,e[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*b,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*b,e[4]=x*b,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*b,e[8]=v*b,e[9]=(g*u*r-h*_*r-g*i*d+t*_*d+h*i*p-t*u*p)*b,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*b,e[12]=L*b,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*b,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*b,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=l*c,x=l*h,v=l*u,L=i.x,R=i.y,b=i.z;return s[0]=(1-(_+p))*L,s[1]=(d+v)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(f+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+x)*b,s[9]=(m-w)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===Xn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Co)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h;let g,_;if(a===Xn)g=(o+r)*u,_=-2*u;else if(a===Co)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new U,dn=new lt,Jp=new U(0,0,0),jp=new U(1,1,1),ei=new U,Wr=new U,Kt=new U,Xc=new lt,qc=new Pr;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const Yc=new U,Zi=new Pr,Hn=new lt,Xr=new U,Ks=new U,em=new U,tm=new Pr,$c=new U(1,0,0),Zc=new U(0,1,0),Kc=new U(0,0,1),Jc={type:"added"},nm={type:"removed"},Ki={type:"childadded",child:null},aa={type:"childremoved",child:null};class Rt extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new U,t=new In,i=new Pr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return Yc.copy(e).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ks,Xr,this.up):Hn.lookAt(Xr,Ks,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new U,Gn=new U,la=new U,Vn=new U,Ji=new U,ji=new U,jc=new U,ca=new U,ha=new U,ua=new U,da=new dt,fa=new dt,pa=new dt;class xn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fn.subVectors(s,t),Gn.subVectors(i,t),la.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Gn),l=fn.dot(la),c=Gn.dot(Gn),h=Gn.dot(la),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,i),pa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(da,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(e,t,i,s){return fn.subVectors(i,t),Gn.subVectors(e,t),fn.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,i),ji.subVectors(r,i),ca.subVectors(e,i);const l=Ji.dot(ca),c=ji.dot(ca);if(l<=0&&c<=0)return t.copy(i);ha.subVectors(e,s);const h=Ji.dot(ha),u=ji.dot(ha);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ji,o);ua.subVectors(e,r);const d=Ji.dot(ua),g=ji.dot(ua);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ji,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return jc.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(jc,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Ji,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=ec(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ma(o,r,e+1/3),this.g=ma(o,r,e),this.b=ma(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Zu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(je(Nt.r*255,0,255))*65536+Math.round(je(Nt.g*255,0,255))*256+Math.round(je(Nt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Xt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(qr);const i=hr(ti.h,qr.h,t),s=hr(ti.s,qr.s,t),r=hr(ti.l,qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new tt;tt.NAMES=Zu;let im=0;class Dr extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=vs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$a&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,Yr=new ve;let sm=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class Ku extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ju extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rm=0;const an=new lt,ga=new Rt,Qi=new U,Jt=new ki,Js=new ki,Lt=new U;class Yt extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qu(e)?Ju:Ku)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Jt.min,Js.min),Jt.expandByPoint(Lt),Lt.addVectors(Jt.max,Js.max),Jt.expandByPoint(Lt)):(Jt.expandByPoint(Js.min),Jt.expandByPoint(Js.max))}Jt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Lt.add(Qi)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,h=new U,u=new U,f=new ve,d=new ve,g=new ve,_=new U,m=new U;function p(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(_),a[S].add(_),a[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,S=w.length;P<S;++P){const M=w[P],A=M.start,z=M.count;for(let O=A,k=A+z;O<k;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new U,v=new U,L=new U,R=new U;function b(P){L.fromBufferAttribute(s,P),R.copy(L);const S=a[P];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),v.crossVectors(R,S);const A=v.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,A)}for(let P=0,S=w.length;P<S;++P){const M=w[P],A=M.start,z=M.count;for(let O=A,k=A+z;O<k;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new cn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new lt,vi=new Kp,$r=new Lr,eh=new U,Zr=new U,Kr=new U,Jr=new U,_a=new U,jr=new U,th=new U,Qr=new U;class ze extends Rt{constructor(e=new Yt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(_a.fromBufferAttribute(u,e),o?jr.addScaledVector(_a,h):jr.addScaledVector(_a.sub(t),h))}t.add(jr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!($r.containsPoint(vi.origin)===!1&&(vi.intersectSphere($r,eh)===null||vi.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(Qc.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Qc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,L=x;v<L;v+=3){const R=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);s=eo(this,p,e,i,c,h,u,R,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=eo(this,o,e,i,c,h,u,w,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,L=x;v<L;v+=3){const R=v,b=v+1,P=v+2;s=eo(this,p,e,i,c,h,u,R,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,v=m+2;s=eo(this,o,e,i,c,h,u,w,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function om(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ci,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:n}}function eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Zr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Jr);const h=om(n,e,t,i,Zr,Kr,Jr,th);if(h){const u=new U;xn.getBarycoord(th,Zr,Kr,Jr,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new ve)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new ve)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};xn.getNormal(Zr,Kr,Jr,f.normal),h.face=f,h.barycoord=u}return h}class Et extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(u,2));function g(_,m,p,w,x,v,L,R,b,P,S){const M=v/b,A=L/P,z=v/2,O=L/2,k=R/2,D=b+1,N=P+1;let X=0,V=0;const re=new U;for(let me=0;me<N;me++){const I=me*A-O;for(let $=0;$<D;$++){const oe=$*M-z;re[_]=oe*w,re[m]=I*x,re[p]=k,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=R>0?1:-1,h.push(re.x,re.y,re.z),u.push($/b),u.push(1-me/P),X+=1}}for(let me=0;me<P;me++)for(let I=0;I<b;I++){const $=f+I+D*me,oe=f+I+D*(me+1),G=f+(I+1)+D*(me+1),Z=f+(I+1)+D*me;l.push($,oe,Z),l.push(oe,G,Z),V+=6}a.addGroup(d,V,S),d+=V,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=As(n[t]);for(const s in i)e[s]=i[s]}return e}function am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ju(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const lm={clone:As,merge:Ht};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qu extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new U,nh=new ve,ih=new ve;class Ft extends Qu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class um extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(es,ts,e,t);s.layers=this.layers,this.add(s);const r=new Ft(es,ts,e,t);r.layers=this.layers,this.add(r);const o=new Ft(es,ts,e,t);o.layers=this.layers,this.add(o);const a=new Ft(es,ts,e,t);a.layers=this.layers,this.add(a);const l=new Ft(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Ft(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ed extends It{constructor(e=[],t=ws,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dm extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ed(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:ri});r.uniforms.tEquirect.value=t;const o=new ze(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Rn),new um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class qt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class nc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ic extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pm extends It{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,h=sn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new lt,rh=new lt,to=[],oh=new ki,mm=new lt,js=new ze,Qs=new Lr;class Ho extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ns),oh.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(oh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ns),Qs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),rh.multiplyMatrices(i,ns),js.matrixWorld=rh,js.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const l=to[o];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pm(new Float32Array(s*this.count),s,this.count,Kl,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xa=new U,gm=new U,_m=new Ke;class bi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=xa.subVectors(i,t).cross(gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_m.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Lr,vm=new ve(.5,.5),no=new U;class sc{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-d,v-p).normalize(),i[1].setComponents(l+r,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+h,m+g,v+w).normalize(),i[3].setComponents(l-o,f-h,m-g,v-w).normalize(),i[4].setComponents(l-a,f-u,m-_,v-x).normalize(),t===Xn)i[5].setComponents(l+a,f+u,m+_,v+x).normalize();else if(t===Co)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=vm.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class td extends It{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nd extends It{constructor(e,t,i=Ni,s,r,o,a=sn,l=sn,c,h=Mr,u=1){if(h!==Mr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pn extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(d,2));function w(){const v=new U,L=new U;let R=0;const b=(t-e)/i;for(let P=0;P<=r;P++){const S=[],M=P/r,A=M*(t-e)+e;for(let z=0;z<=s;z++){const O=z/s,k=O*l+a,D=Math.sin(k),N=Math.cos(k);L.x=A*D,L.y=-M*i+m,L.z=A*N,u.push(L.x,L.y,L.z),v.set(D,b,N).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],A=_[S+1][P],z=_[S+1][P+1],O=_[S][P+1];(e>0||S!==0)&&(h.push(M,A,O),R+=3),(t>0||S!==r-1)&&(h.push(A,z,O),R+=3)}c.addGroup(p,R,0),p+=R}function x(v){const L=g,R=new ve,b=new U;let P=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const A=g;for(let z=0;z<=s;z++){const k=z/s*l+a,D=Math.cos(k),N=Math.sin(k);b.x=S*N,b.y=m*M,b.z=S*D,u.push(b.x,b.y,b.z),f.push(0,M,0),R.x=D*.5+.5,R.y=N*.5*M+.5,d.push(R.x,R.y),g++}for(let z=0;z<s;z++){const O=L+z,k=A+z;v===!0?h.push(k,k+1,O):h.push(k+1,k,O),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rc extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new U,v=new U,L=new U;for(let R=0;R<t.length;R+=3)d(t[R+0],x),d(t[R+1],v),d(t[R+2],L),l(x,v,L,w)}function l(w,x,v,L){const R=L+1,b=[];for(let P=0;P<=R;P++){b[P]=[];const S=w.clone().lerp(v,P/R),M=x.clone().lerp(v,P/R),A=R-P;for(let z=0;z<=A;z++)z===0&&P===R?b[P][z]=S:b[P][z]=S.clone().lerp(M,z/A)}for(let P=0;P<R;P++)for(let S=0;S<2*(R-P)-1;S++){const M=Math.floor(S/2);S%2===0?(f(b[P][M+1]),f(b[P+1][M]),f(b[P][M])):(f(b[P][M+1]),f(b[P+1][M+1]),f(b[P+1][M]))}}function c(w){const x=new U;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(w),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const w=new U;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];const v=m(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const x=o[w+0],v=o[w+2],L=o[w+4],R=Math.max(x,v,L),b=Math.min(x,v,L);R>.9&&b<.1&&(x<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),L<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,x){const v=w*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const w=new U,x=new U,v=new U,L=new U,R=new ve,b=new ve,P=new ve;for(let S=0,M=0;S<r.length;S+=9,M+=6){w.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),R.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(w).add(x).add(v).divideScalar(3);const A=m(L);_(R,M+0,w,A),_(b,M+2,x,A),_(P,M+4,v,A)}}function _(w,x,v,L){L<0&&w.x===1&&(o[x]=w.x-1),v.x===0&&v.z===0&&(o[x]=L/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.vertices,e.indices,e.radius,e.details)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],o=[],a=new U,l=new lt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(je(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oc extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xm extends oc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const io=new U,Ma=new ac,ya=new ac,Sa=new ac;class Mm extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ma.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ya.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Sa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ya.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Sa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ma.calc(l),ya.calc(l),Sa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ah(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ym(n,e){const t=1-n;return t*t*e}function Sm(n,e){return 2*(1-n)*n*e}function wm(n,e){return n*n*e}function ur(n,e,t,i){return ym(n,e)+Sm(n,t)+wm(n,i)}function Em(n,e){const t=1-n;return t*t*t*e}function bm(n,e){const t=1-n;return 3*t*t*n*e}function Tm(n,e){return 3*(1-n)*n*n*e}function Am(n,e){return n*n*n*e}function dr(n,e,t,i,s){return Em(n,e)+bm(n,t)+Tm(n,i)+Am(n,s)}class id extends Fn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rm extends Fn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y),dr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sd extends Fn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends Fn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends Fn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends Fn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y),ur(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class od extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ah(a,l.x,c.x,h.x,u.x),ah(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var Dl=Object.freeze({__proto__:null,ArcCurve:xm,CatmullRomCurve3:Mm,CubicBezierCurve:id,CubicBezierCurve3:Rm,EllipseCurve:oc,LineCurve:sd,LineCurve3:Cm,QuadraticBezierCurve:rd,QuadraticBezierCurve3:Pm,SplineCurve:od});class Lm extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}}class lh extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sd(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new rd(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new id(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new od(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new oc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ad extends lh{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new lh().fromJSON(s))}return this}}function Dm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=ld(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Fm(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return wr(r,o,t,a,l,c,0),o}function ld(n,e,t,i,s){let r;if(s===$m(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=ch(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=ch(o/i|0,n[o],n[o+1],r);return r&&Rs(r,r.next)&&(br(r),r=r.next),r}function zi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Rs(t,t.next)||St(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Gm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Um(n,i,s,r):Im(n)){e.push(l.i,n.i,c.i),br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Nm(zi(n),e),wr(n,e,t,i,s,r,2)):o===2&&zm(n,e,t,i,s,r):wr(zi(n),e,t,i,s,r,1);break}}}function Im(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&or(s,a,r,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(n,e,t,i){const s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=Il(d,g,e,t,i),w=Il(_,m,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&or(a,h,l,u,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&or(a,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&or(a,h,l,u,c,f,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&or(a,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Rs(i,s)&&hd(i,t,t.next,s)&&Er(i,s)&&Er(s,i)&&(e.push(i.i,t.i,s.i),br(t),br(t.next),t=n=s),t=t.next}while(t!==n);return zi(t)}function zm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xm(o,a)){let l=ud(o,a);o=zi(o,o.next),l=zi(l,l.next),wr(o,e,t,i,s,r,0),wr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Fm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ld(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Wm(c))}s.sort(Om);for(let r=0;r<s.length;r++)t=km(s[r],t);return t}function Om(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function km(n,e){const t=Bm(n,e);if(!t)return e;const i=ud(t,n);return zi(i,i.next),zi(t,t.next)}function Bm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Rs(n,t))return t;do{if(Rs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&cd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Er(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Hm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Hm(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Gm(n,e,t,i){let s=n;do s.z===0&&(s.z=Il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Vm(s)}function Vm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function cd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function or(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&cd(n,e,t,i,s,r,o,a)}function Xm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qm(n,e)&&(Er(n,e)&&Er(e,n)&&Ym(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Rs(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rs(n,e){return n.x===e.x&&n.y===e.y}function hd(n,e,t,i){const s=ro(St(n,e,t)),r=ro(St(n,e,i)),o=ro(St(t,i,n)),a=ro(St(t,i,e));return!!(s!==r&&o!==a||s===0&&so(n,t,e)||r===0&&so(n,i,e)||o===0&&so(t,n,i)||a===0&&so(t,e,i))}function so(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ro(n){return n>0?1:n<0?-1:0}function qm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Er(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Ym(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ud(n,e){const t=Ul(n.i,n.x,n.y),i=Ul(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ch(n,e,t,i){const s=Ul(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ul(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $m(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Zm{static triangulate(e,t,i=2){return Dm(e,t,i)}}class us{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];hh(e),uh(i,e);let o=e.length;t.forEach(hh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,uh(i,t[l]);const a=Zm.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lc extends Yt{constructor(e=new ad([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new At(s,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Km;let x,v=!1,L,R,b,P;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,L=p.computeFrenetFrames(h,!1),R=new U,b=new U,P=new U),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(c);let M=S.shape;const A=S.holes;if(!us.isClockWise(M)){M=M.reverse();for(let T=0,pe=A.length;T<pe;T++){const ne=A[T];us.isClockWise(ne)&&(A[T]=ne.reverse())}}function O(T){const ne=10000000000000001e-36;let _e=T[0];for(let j=1;j<=T.length;j++){const Ee=j%T.length,ue=T[Ee],be=ue.x-_e.x,$e=ue.y-_e.y,C=be*be+$e*$e,y=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(_e.x),Math.abs(_e.y)),W=ne*y*y;if(C<=W){T.splice(Ee,1),j--;continue}_e=ue}}O(M),A.forEach(O);const k=A.length,D=M;for(let T=0;T<k;T++){const pe=A[T];M=M.concat(pe)}function N(T,pe,ne){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(pe,ne)}const X=M.length;function V(T,pe,ne){let _e,j,Ee;const ue=T.x-pe.x,be=T.y-pe.y,$e=ne.x-T.x,C=ne.y-T.y,y=ue*ue+be*be,W=ue*C-be*$e;if(Math.abs(W)>Number.EPSILON){const K=Math.sqrt(y),ee=Math.sqrt($e*$e+C*C),J=pe.x-be/K,De=pe.y+ue/K,xe=ne.x-C/ee,Ce=ne.y+$e/ee,Ie=((xe-J)*C-(Ce-De)*$e)/(ue*C-be*$e);_e=J+ue*Ie-T.x,j=De+be*Ie-T.y;const ie=_e*_e+j*j;if(ie<=2)return new ve(_e,j);Ee=Math.sqrt(ie/2)}else{let K=!1;ue>Number.EPSILON?$e>Number.EPSILON&&(K=!0):ue<-Number.EPSILON?$e<-Number.EPSILON&&(K=!0):Math.sign(be)===Math.sign(C)&&(K=!0),K?(_e=-be,j=ue,Ee=Math.sqrt(y)):(_e=ue,j=be,Ee=Math.sqrt(y/2))}return new ve(_e/Ee,j/Ee)}const re=[];for(let T=0,pe=D.length,ne=pe-1,_e=T+1;T<pe;T++,ne++,_e++)ne===pe&&(ne=0),_e===pe&&(_e=0),re[T]=V(D[T],D[ne],D[_e]);const me=[];let I,$=re.concat();for(let T=0,pe=k;T<pe;T++){const ne=A[T];I=[];for(let _e=0,j=ne.length,Ee=j-1,ue=_e+1;_e<j;_e++,Ee++,ue++)Ee===j&&(Ee=0),ue===j&&(ue=0),I[_e]=V(ne[_e],ne[Ee],ne[ue]);me.push(I),$=$.concat(I)}let oe;if(m===0)oe=us.triangulateShape(D,A);else{const T=[],pe=[];for(let ne=0;ne<m;ne++){const _e=ne/m,j=d*Math.cos(_e*Math.PI/2),Ee=g*Math.sin(_e*Math.PI/2)+_;for(let ue=0,be=D.length;ue<be;ue++){const $e=N(D[ue],re[ue],Ee);Fe($e.x,$e.y,-j),_e===0&&T.push($e)}for(let ue=0,be=k;ue<be;ue++){const $e=A[ue];I=me[ue];const C=[];for(let y=0,W=$e.length;y<W;y++){const K=N($e[y],I[y],Ee);Fe(K.x,K.y,-j),_e===0&&C.push(K)}_e===0&&pe.push(C)}}oe=us.triangulateShape(T,pe)}const G=oe.length,Z=g+_;for(let T=0;T<X;T++){const pe=f?N(M[T],$[T],Z):M[T];v?(b.copy(L.normals[0]).multiplyScalar(pe.x),R.copy(L.binormals[0]).multiplyScalar(pe.y),P.copy(x[0]).add(b).add(R),Fe(P.x,P.y,P.z)):Fe(pe.x,pe.y,0)}for(let T=1;T<=h;T++)for(let pe=0;pe<X;pe++){const ne=f?N(M[pe],$[pe],Z):M[pe];v?(b.copy(L.normals[T]).multiplyScalar(ne.x),R.copy(L.binormals[T]).multiplyScalar(ne.y),P.copy(x[T]).add(b).add(R),Fe(P.x,P.y,P.z)):Fe(ne.x,ne.y,u/h*T)}for(let T=m-1;T>=0;T--){const pe=T/m,ne=d*Math.cos(pe*Math.PI/2),_e=g*Math.sin(pe*Math.PI/2)+_;for(let j=0,Ee=D.length;j<Ee;j++){const ue=N(D[j],re[j],_e);Fe(ue.x,ue.y,u+ne)}for(let j=0,Ee=A.length;j<Ee;j++){const ue=A[j];I=me[j];for(let be=0,$e=ue.length;be<$e;be++){const C=N(ue[be],I[be],_e);v?Fe(C.x,C.y+x[h-1].y,x[h-1].x+ne):Fe(C.x,C.y,u+ne)}}}le(),he();function le(){const T=s.length/3;if(f){let pe=0,ne=X*pe;for(let _e=0;_e<G;_e++){const j=oe[_e];ae(j[2]+ne,j[1]+ne,j[0]+ne)}pe=h+m*2,ne=X*pe;for(let _e=0;_e<G;_e++){const j=oe[_e];ae(j[0]+ne,j[1]+ne,j[2]+ne)}}else{for(let pe=0;pe<G;pe++){const ne=oe[pe];ae(ne[2],ne[1],ne[0])}for(let pe=0;pe<G;pe++){const ne=oe[pe];ae(ne[0]+X*h,ne[1]+X*h,ne[2]+X*h)}}i.addGroup(T,s.length/3-T,0)}function he(){const T=s.length/3;let pe=0;ge(D,pe),pe+=D.length;for(let ne=0,_e=A.length;ne<_e;ne++){const j=A[ne];ge(j,pe),pe+=j.length}i.addGroup(T,s.length/3-T,1)}function ge(T,pe){let ne=T.length;for(;--ne>=0;){const _e=ne;let j=ne-1;j<0&&(j=T.length-1);for(let Ee=0,ue=h+m*2;Ee<ue;Ee++){const be=X*Ee,$e=X*(Ee+1),C=pe+_e+be,y=pe+j+be,W=pe+j+$e,K=pe+_e+$e;Ne(C,y,W,K)}}}function Fe(T,pe,ne){l.push(T),l.push(pe),l.push(ne)}function ae(T,pe,ne){ke(T),ke(pe),ke(ne);const _e=s.length/3,j=w.generateTopUV(i,s,_e-3,_e-2,_e-1);Ue(j[0]),Ue(j[1]),Ue(j[2])}function Ne(T,pe,ne,_e){ke(T),ke(pe),ke(_e),ke(pe),ke(ne),ke(_e);const j=s.length/3,Ee=w.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);Ue(Ee[0]),Ue(Ee[1]),Ue(Ee[3]),Ue(Ee[1]),Ue(Ee[2]),Ue(Ee[3])}function ke(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function Ue(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dl[s.type]().fromJSON(s)),new lc(i,e.options)}}const Km={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,o),new ve(a,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-u),new ve(f,1-g),new ve(_,1-p)]:[new ve(a,1-l),new ve(h,1-u),new ve(d,1-g),new ve(m,1-p)]}};function Jm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cc extends rc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}class Un extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*f-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const x=w+c*p,v=w+c*(p+1),L=w+1+c*(p+1),R=w+1+c*p;d.push(x,v,R),d.push(v,L,R)}this.setIndex(d),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(_,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class hc extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mt extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jm extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class eg extends uc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new lt,dh=new U,fh=new U;class dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ph=new lt,er=new U,Ea=new U;class tg extends dd{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),i.position.copy(er),Ea.copy(i.position),Ea.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ea),i.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class ng extends uc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dc extends Qu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ig extends dd{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rg extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function mh(n,e,t,i){const s=og(i);switch(t){case Bu:return n*e;case Kl:return n*e/s.components*s.byteLength;case Jl:return n*e/s.components*s.byteLength;case Gu:return n*e*2/s.components*s.byteLength;case jl:return n*e*2/s.components*s.byteLength;case Hu:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case Ql:return n*e*4/s.components*s.byteLength;case Mo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(n,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(n,8)*Math.max(e,8)/2;case hl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vu:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(n){switch(n){case Dn:case Fu:return{byteLength:1,components:1};case vr:case Ou:case Cr:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case Ni:case Yl:case Cn:return{byteLength:4,components:1};case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);function fd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ag(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,o0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,M_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,E_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,b_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,A_=`#define NORMAL
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
}`,R_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C_=`#define PHONG
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
}`,P_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,L_=`#define STANDARD
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
}`,D_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,I_=`#define TOON
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
}`,U_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N_=`uniform float size;
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
}`,z_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,k_=`uniform float rotation;
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
}`,B_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:hg,alphamap_pars_fragment:ug,alphatest_fragment:dg,alphatest_pars_fragment:fg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:_g,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:Mg,iridescence_fragment:yg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Lg,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Ug,displacementmap_vertex:Ng,emissivemap_fragment:zg,emissivemap_pars_fragment:Fg,colorspace_fragment:Og,colorspace_pars_fragment:kg,envmap_fragment:Bg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Gg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:e0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:$g,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:x0,morphinstance_vertex:M0,morphcolor_vertex:y0,morphnormal_vertex:S0,morphtarget_pars_vertex:w0,morphtarget_vertex:E0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:z0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:k0,dithering_pars_fragment:B0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:$0,skinning_vertex:Z0,skinnormal_vertex:K0,specularmap_fragment:J0,specularmap_pars_fragment:j0,tonemapping_fragment:Q0,tonemapping_pars_fragment:e_,transmission_fragment:t_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:o_,background_vert:a_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:h_,cube_vert:u_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distanceRGBA_vert:m_,distanceRGBA_frag:g_,equirect_vert:__,equirect_frag:v_,linedashed_vert:x_,linedashed_frag:M_,meshbasic_vert:y_,meshbasic_frag:S_,meshlambert_vert:w_,meshlambert_frag:E_,meshmatcap_vert:b_,meshmatcap_frag:T_,meshnormal_vert:A_,meshnormal_frag:R_,meshphong_vert:C_,meshphong_frag:P_,meshphysical_vert:L_,meshphysical_frag:D_,meshtoon_vert:I_,meshtoon_frag:U_,points_vert:N_,points_frag:z_,shadow_vert:F_,shadow_frag:O_,sprite_vert:k_,sprite_frag:B_},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:Ht([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const oo={r:0,b:0,g:0},Mi=new In,H_=new lt;function G_(n,e,t,i,s,r,o){const a=new tt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const L=g(x);L===null?p(a,l):L&&L.isColor&&(p(L,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const L=g(v);L&&(L.isCubeTexture||L.mapping===Bo)?(h===void 0&&(h=new ze(new Et(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:As(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Mi)),h.material.toneMapped=it.getTransfer(L.colorSpace)!==ut,(u!==L||f!==L.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new ze(new Un(2,2),new di({name:"BackgroundMaterial",uniforms:As(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(L.colorSpace)!==ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(oo,ju(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:w}}function V_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,A,z,O,k){let D=!1;const N=u(O,z,A);r!==N&&(r=N,c(r.object)),D=d(M,O,z,k),D&&g(M,O,z,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(M,A,z,O),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,z){const O=z.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let D=k[A.id];D===void 0&&(D={},k[A.id]=D);let N=D[O];return N===void 0&&(N=f(l()),D[O]=N),N}function f(M){const A=[],z=[],O=[];for(let k=0;k<t;k++)A[k]=0,z[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,A,z,O){const k=r.attributes,D=A.attributes;let N=0;const X=z.getAttributes();for(const V in X)if(X[V].location>=0){const me=k[V];let I=D[V];if(I===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(I=M.instanceColor)),me===void 0||me.attribute!==I||I&&me.data!==I.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function g(M,A,z,O){const k={},D=A.attributes;let N=0;const X=z.getAttributes();for(const V in X)if(X[V].location>=0){let me=D[V];me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const I={};I.attribute=me,me&&me.data&&(I.data=me.data),k[V]=I,N++}r.attributes=k,r.attributesNum=N,r.index=O}function _(){const M=r.newAttributes;for(let A=0,z=M.length;A<z;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const z=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;z[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),k[M]!==A&&(n.vertexAttribDivisor(M,A),k[M]=A)}function w(){const M=r.newAttributes,A=r.enabledAttributes;for(let z=0,O=A.length;z<O;z++)A[z]!==M[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function x(M,A,z,O,k,D,N){N===!0?n.vertexAttribIPointer(M,A,z,k,D):n.vertexAttribPointer(M,A,z,O,k,D)}function v(M,A,z,O){_();const k=O.attributes,D=z.getAttributes(),N=A.defaultAttributeValues;for(const X in D){const V=D[X];if(V.location>=0){let re=k[X];if(re===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const me=re.normalized,I=re.itemSize,$=e.get(re);if($===void 0)continue;const oe=$.buffer,G=$.type,Z=$.bytesPerElement,le=G===n.INT||G===n.UNSIGNED_INT||re.gpuType===Yl;if(re.isInterleavedBufferAttribute){const he=re.data,ge=he.stride,Fe=re.offset;if(he.isInstancedInterleavedBuffer){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,he.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ae=0;ae<V.locationSize;ae++)x(V.location+ae,I/V.locationSize,G,me,ge*Z,(Fe+I/V.locationSize*ae)*Z,le)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)p(V.location+he,re.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let he=0;he<V.locationSize;he++)x(V.location+he,I/V.locationSize,G,me,I*Z,I/V.locationSize*he*Z,le)}}else if(N!==void 0){const me=N[X];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}w()}function L(){P();for(const M in i){const A=i[M];for(const z in A){const O=A[z];for(const k in O)h(O[k].object),delete O[k];delete A[z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const z in A){const O=A[z];for(const k in O)h(O[k].object),delete O[k];delete A[z]}delete i[M.id]}function b(M){for(const A in i){const z=i[A];if(z[M.id]===void 0)continue;const O=z[M.id];for(const k in O)h(O[k].object),delete O[k];delete z[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function W_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Mn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Dn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Cn&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function q_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new bi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,x=w*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let L=0;L!==x;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Y_(n){let e=new WeakMap;function t(o,a){return a===il?o.mapping=ws:a===sl&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===il||a===sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ds=4,gh=[.125,.215,.35,.446,.526,.582],Ri=20,ba=new dc,_h=new tt;let Ta=null,Aa=0,Ra=0,Ca=!1;const Ti=(1+Math.sqrt(5))/2,is=1/Ti,vh=[new U(-Ti,is,0),new U(Ti,is,0),new U(-is,0,Ti),new U(is,0,Ti),new U(0,Ti,-is),new U(0,Ti,is),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],$_=new U;class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=$_}=r;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Cr,format:Mn,colorSpace:Ts,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=K_(r,e,t)}return s}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,s,r){const l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_h),u.toneMapping=oi,u.autoClear=!1;const g=new ui({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new ze(new Et,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(_h),m=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const v=this._cubeSize;ao(s,x*v,w>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ws||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let w=0;for(let b=0;b<Ri;++b){const P=b/_,S=Math.exp(-P*P/2);p.push(S),b===0?w+=S:b<m&&(w+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[s],L=3*v*(s>x-ds?s-x+ds:0),R=4*(this._cubeSize-v);ao(t,L,R,3*v,2*v),l.setRenderTarget(t),l.render(u,ba)}}function Z_(n){const e=[],t=[],i=[];let s=n;const r=n-ds+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ds?l=gh[o-n+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,P=R>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];w.set(S,_*g*R),x.set(f,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const L=new Yt;L.setAttribute("position",new cn(w,_)),L.setAttribute("uv",new cn(x,m)),L.setAttribute("faceIndex",new cn(v,p)),e.push(L),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function K_(n,e,t){const i=new Float32Array(Ri),s=new U(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Mh(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function yh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===il||l===sl,h=l===ws||l===Es;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Nl(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Nl(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function j_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Q_(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let x=0,v=w.length;x<v;x+=3){const L=w[x+0],R=w[x+1],b=w[x+2];f.push(L,R,R,b,b,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){const L=x+0,R=x+1,b=x+2;f.push(L,R,R,b,b,L)}}else return;const m=new(qu(f)?Ju:Ku)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ev(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function nv(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const b=new Float32Array(L*R*4*u),P=new Yu(b,L,R,u);P.type=Cn,P.needsUpdate=!0;const S=v*4;for(let A=0;A<u;A++){const z=p[A],O=w[A],k=x[A],D=L*R*4*A;for(let N=0;N<z.count;N++){const X=N*S;g===!0&&(s.fromBufferAttribute(z,N),b[D+X+0]=s.x,b[D+X+1]=s.y,b[D+X+2]=s.z,b[D+X+3]=0),_===!0&&(s.fromBufferAttribute(O,N),b[D+X+4]=s.x,b[D+X+5]=s.y,b[D+X+6]=s.z,b[D+X+7]=0),m===!0&&(s.fromBufferAttribute(k,N),b[D+X+8]=s.x,b[D+X+9]=s.y,b[D+X+10]=s.z,b[D+X+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ve(L,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function iv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const pd=new It,Sh=new nd(1,1),md=new Yu,gd=new $p,_d=new ed,wh=[],Eh=[],bh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function lv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Pt(t,i)}}function cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Pt(t,i)}}function hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;bh.set(i),n.uniformMatrix4fv(this.addr,!1,bh),Pt(t,i)}}function uv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function xv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sh.compareFunction=Xu,r=Sh):r=pd,t.setTexture2D(e||r,s)}function Mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gd,s)}function yv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_d,s)}function Sv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||md,s)}function wv(n){switch(n){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return hv;case 5124:case 35670:return uv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Sv}}function Ev(n,e){n.uniform1fv(this.addr,e)}function bv(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Tv(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Av(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function Rv(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cv(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Pv(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lv(n,e){n.uniform1iv(this.addr,e)}function Dv(n,e){n.uniform2iv(this.addr,e)}function Iv(n,e){n.uniform3iv(this.addr,e)}function Uv(n,e){n.uniform4iv(this.addr,e)}function Nv(n,e){n.uniform1uiv(this.addr,e)}function zv(n,e){n.uniform2uiv(this.addr,e)}function Fv(n,e){n.uniform3uiv(this.addr,e)}function Ov(n,e){n.uniform4uiv(this.addr,e)}function kv(n,e,t){const i=this.cache,s=e.length,r=Go(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pd,r[o])}function Bv(n,e,t){const i=this.cache,s=e.length,r=Go(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gd,r[o])}function Hv(n,e,t){const i=this.cache,s=e.length,r=Go(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_d,r[o])}function Gv(n,e,t){const i=this.cache,s=e.length,r=Go(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||md,r[o])}function Vv(n){switch(n){case 5126:return Ev;case 35664:return bv;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return zv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class Xv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Rh(n,e){n.seq.push(e),n.map[e.id]=e}function Yv(n,e,t){const i=n.name,s=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),o=Pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(t,c===void 0?new Wv(a,n,e):new Xv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new qv(a),Rh(t,u)),t=u}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $v=37297;let Zv=0;function Kv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ph=new Ke;function Jv(n){it._getMatrix(Ph,it.workingColorSpace,n);const e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ro:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Kv(n.getShaderSource(e),o)}else return s}function jv(n,e){const t=Jv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qv(n,e){let t;switch(e){case rp:t="Linear";break;case op:t="Reinhard";break;case ap:t="Cineon";break;case Nu:t="ACESFilmic";break;case cp:t="AgX";break;case hp:t="Neutral";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new U;function ex(){it.getLuminanceCoefficients(lo);const n=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function nx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ix(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ar(n){return n!==""}function Dh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(sx,ox)}const rx=new Map;function ox(n,e){let t=Je[e];if(t===void 0){const i=rx.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(n){return n.replace(ax,lx)}function lx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Es:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function dx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uu:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case sp:e="ENVMAP_BLENDING_ADD";break}return e}function fx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function px(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cx(t),c=hx(t),h=ux(t),u=dx(t),f=fx(t),d=tx(t),g=nx(r),_=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==oi?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=zl(o),o=Dh(o,t),o=Ih(o,t),a=zl(a),a=Dh(a,t),a=Ih(a,t),o=Uh(o),a=Uh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+o,v=w+p+a,L=Ch(s,s.VERTEX_SHADER,x),R=Ch(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(A){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),k=s.getShaderInfoLog(R).trim();let D=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,R);else{const X=Lh(s,L,"vertex"),V=Lh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+X+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||k==="")&&(N=!1);N&&(A.diagnostics={runnable:D,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(L),s.deleteShader(R),P=new bo(s,_),S=ix(s,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,$v)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(n,e,t,i,s,r,o){const a=new $u,l=new gx,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,z,O){const k=z.fog,D=O.geometry,N=S.isMeshStandardMaterial?z.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),V=X&&X.mapping===Bo?X.image.height:null,re=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const me=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,I=me!==void 0?me.length:0;let $=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let oe,G,Z,le;if(re){const ot=Tn[re];oe=ot.vertexShader,G=ot.fragmentShader}else oe=S.vertexShader,G=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);const he=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,ae=O.isBatchedMesh===!0,Ne=!!S.map,ke=!!S.matcap,Ue=!!X,T=!!S.aoMap,pe=!!S.lightMap,ne=!!S.bumpMap,_e=!!S.normalMap,j=!!S.displacementMap,Ee=!!S.emissiveMap,ue=!!S.metalnessMap,be=!!S.roughnessMap,$e=S.anisotropy>0,C=S.clearcoat>0,y=S.dispersion>0,W=S.iridescence>0,K=S.sheen>0,ee=S.transmission>0,J=$e&&!!S.anisotropyMap,De=C&&!!S.clearcoatMap,xe=C&&!!S.clearcoatNormalMap,Ce=C&&!!S.clearcoatRoughnessMap,Ie=W&&!!S.iridescenceMap,ie=W&&!!S.iridescenceThicknessMap,Te=K&&!!S.sheenColorMap,Ve=K&&!!S.sheenRoughnessMap,He=!!S.specularMap,Me=!!S.specularColorMap,qe=!!S.specularIntensityMap,F=ee&&!!S.transmissionMap,Se=ee&&!!S.thicknessMap,ce=!!S.gradientMap,Re=!!S.alphaMap,de=S.alphaTest>0,Q=!!S.alphaHash,Pe=!!S.extensions;let Ze=oi;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const mt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:G,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ae,batchingColor:ae&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ts,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:ke,envMap:Ue,envMapMode:Ue&&X.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:pe,bumpMap:ne,normalMap:_e,displacementMap:f&&j,emissiveMap:Ee,normalMapObjectSpace:_e&&S.normalMapType===pp,normalMapTangentSpace:_e&&S.normalMapType===Wu,metalnessMap:ue,roughnessMap:be,anisotropy:$e,anisotropyMap:J,clearcoat:C,clearcoatMap:De,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ce,dispersion:y,iridescence:W,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Me,specularIntensityMap:qe,transmission:ee,transmissionMap:F,thicknessMap:Se,gradientMap:ce,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:Q,combine:S.combine,mapUv:Ne&&_(S.map.channel),aoMapUv:T&&_(S.aoMap.channel),lightMapUv:pe&&_(S.lightMap.channel),bumpMapUv:ne&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:j&&_(S.displacementMap.channel),emissiveMapUv:Ee&&_(S.emissiveMap.channel),metalnessMapUv:ue&&_(S.metalnessMap.channel),roughnessMapUv:be&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:De&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(S.sheenRoughnessMap.channel),specularMapUv:He&&_(S.specularMap.channel),specularColorMapUv:Me&&_(S.specularColorMap.channel),specularIntensityMapUv:qe&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:Se&&_(S.thicknessMap.channel),alphaMapUv:Re&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_e||$e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(Ne||Re),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vn,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(w(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let A;if(M){const z=Tn[M];A=lm.clone(z.uniforms)}else A=S.uniforms;return A}function L(S,M){let A;for(let z=0,O=h.length;z<O;z++){const k=h[z];if(k.cacheKey===M){A=k,++A.usedTimes;break}}return A===void 0&&(A=new px(n,M,S,r),h.push(A)),A}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:P}}function xx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Mx),i.length>1&&i.sort(f||zh),s.length>1&&s.sort(f||zh)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function yx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Fh,n.set(i,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function wx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ex=0;function bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tx(n){const e=new Sx,t=wx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new lt,o=new lt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,x=0,v=0,L=0,R=0,b=0;c.sort(bx);for(let S=0,M=c.length;S<M;S++){const A=c[S],z=A.color,O=A.intensity,k=A.distance,D=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(A.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(A.sh.coefficients[N],O);b++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,V=t.get(A);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=D,i.directionalShadowMatrix[d]=A.shadow.matrix,w++}i.directional[d]=N,d++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(z).multiplyScalar(O),N.distance=k,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,i.spot[_]=N;const X=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,X.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[_]=X.matrix,A.castShadow){const V=t.get(A);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=D,v++}_++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(z).multiplyScalar(O),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const X=A.shadow,V=t.get(A);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=A.shadow.matrix,x++}i.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(O),N.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=b,i.version=Ex++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Oh(n){const e=new Tx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ax(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Oh(n),e.set(s,[a])):r>=o.length?(a=new Oh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Px(n,e,t){let i=new sc;const s=new ve,r=new ve,o=new dt,a=new jm({depthPacking:fp}),l=new Qm,c={},h=t.maxTextureSize,u={[ci]:Vt,[Vt]:ci,[vn]:vn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(R,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Wn&&this.type===Wn,k=p===Wn&&this.type!==Wn;for(let D=0,N=R.length;D<N;D++){const X=R[D],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||O===!0||k===!0){const I=this.type!==Wn?{minFilter:sn,magFilter:sn}:{};V.map!==null&&V.map.dispose(),V.map=new hi(s.x,s.y,I),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let I=0;I<me;I++){const $=V.getViewport(I);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),z.viewport(o),V.updateMatrices(X,I),i=V.getFrustum(),v(b,P,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Wn&&w(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,A)};function w(R,b){const P=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(b,null,P,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(b,null,P,d,_,null)}function x(R,b,P,S){let M=null;const A=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=M.uuid,O=b.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let D=k[O];D===void 0&&(D=M.clone(),k[O]=D,b.addEventListener("dispose",L)),M=D}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Wn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=P}return M}function v(R,b,P,S,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Wn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=e.update(R),k=R.material;if(Array.isArray(k)){const D=O.groups;for(let N=0,X=D.length;N<X;N++){const V=D[N],re=k[V.materialIndex];if(re&&re.visible){const me=x(R,re,S,M);R.onBeforeShadow(n,R,b,P,O,me,V),n.renderBufferDirect(P,null,O,me,R,V),R.onAfterShadow(n,R,b,P,O,me,V)}}}else if(k.visible){const D=x(R,k,S,M);R.onBeforeShadow(n,R,b,P,O,D,null),n.renderBufferDirect(P,null,O,D,R,null),R.onAfterShadow(n,R,b,P,O,D,null)}}const z=R.children;for(let O=0,k=z.length;O<k;O++)v(z[O],b,P,S,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const S=c[P],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Lx={[Ka]:Ja,[ja]:tl,[Qa]:nl,[Ss]:el,[Ja]:Ka,[tl]:ja,[nl]:Qa,[el]:Ss};function Dx(n,e){function t(){let F=!1;const Se=new dt;let ce=null;const Re=new dt(0,0,0,0);return{setMask:function(de){ce!==de&&!F&&(n.colorMask(de,de,de,de),ce=de)},setLocked:function(de){F=de},setClear:function(de,Q,Pe,Ze,mt){mt===!0&&(de*=Ze,Q*=Ze,Pe*=Ze),Se.set(de,Q,Pe,Ze),Re.equals(Se)===!1&&(n.clearColor(de,Q,Pe,Ze),Re.copy(Se))},reset:function(){F=!1,ce=null,Re.set(-1,0,0,0)}}}function i(){let F=!1,Se=!1,ce=null,Re=null,de=null;return{setReversed:function(Q){if(Se!==Q){const Pe=e.get("EXT_clip_control");Q?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Se=Q;const Ze=de;de=null,this.setClear(Ze)}},getReversed:function(){return Se},setTest:function(Q){Q?he(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Q){ce!==Q&&!F&&(n.depthMask(Q),ce=Q)},setFunc:function(Q){if(Se&&(Q=Lx[Q]),Re!==Q){switch(Q){case Ka:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case Qa:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Q}},setLocked:function(Q){F=Q},setClear:function(Q){de!==Q&&(Se&&(Q=1-Q),n.clearDepth(Q),de=Q)},reset:function(){F=!1,ce=null,Re=null,de=null,Se=!1}}}function s(){let F=!1,Se=null,ce=null,Re=null,de=null,Q=null,Pe=null,Ze=null,mt=null;return{setTest:function(ot){F||(ot?he(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!F&&(n.stencilMask(ot),Se=ot)},setFunc:function(ot,hn,On){(ce!==ot||Re!==hn||de!==On)&&(n.stencilFunc(ot,hn,On),ce=ot,Re=hn,de=On)},setOp:function(ot,hn,On){(Q!==ot||Pe!==hn||Ze!==On)&&(n.stencilOp(ot,hn,On),Q=ot,Pe=hn,Ze=On)},setLocked:function(ot){F=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){F=!1,Se=null,ce=null,Re=null,de=null,Q=null,Pe=null,Ze=null,mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,L=null,R=null,b=new tt(0,0,0),P=0,S=!1,M=null,A=null,z=null,O=null,k=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=X>=2);let re=null,me={};const I=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),oe=new dt().fromArray(I),G=new dt().fromArray($);function Z(F,Se,ce,Re){const de=new Uint8Array(4),Q=n.createTexture();n.bindTexture(F,Q),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ce;Pe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Se+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Q}const le={};le[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Ss),ne(!1),_e(Ic),he(n.CULL_FACE),T(ri);function he(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Fe(F,Se){return u[F]!==Se?(n.bindFramebuffer(F,Se),u[F]=Se,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Se),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ae(F,Se){let ce=d,Re=!1;if(F){ce=f.get(Se),ce===void 0&&(ce=[],f.set(Se,ce));const de=F.textures;if(ce.length!==de.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Pe=de.length;Q<Pe;Q++)ce[Q]=n.COLOR_ATTACHMENT0+Q;ce.length=de.length,Re=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ce)}function Ne(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ke={[Ai]:n.FUNC_ADD,[Bf]:n.FUNC_SUBTRACT,[Hf]:n.FUNC_REVERSE_SUBTRACT};ke[Gf]=n.MIN,ke[Vf]=n.MAX;const Ue={[Wf]:n.ZERO,[Xf]:n.ONE,[qf]:n.SRC_COLOR,[$a]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[Kf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Yf]:n.ONE_MINUS_SRC_COLOR,[Za]:n.ONE_MINUS_SRC_ALPHA,[Jf]:n.ONE_MINUS_DST_COLOR,[Zf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[ep]:n.ONE_MINUS_CONSTANT_COLOR,[tp]:n.CONSTANT_ALPHA,[np]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,Se,ce,Re,de,Q,Pe,Ze,mt,ot){if(F===ri){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),F!==kf){if(F!==m||ot!==S){if((p!==Ai||v!==Ai)&&(n.blendEquation(n.FUNC_ADD),p=Ai,v=Ai),ot)switch(F){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFunc(n.ONE,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,x=null,L=null,R=null,b.set(0,0,0),P=0,m=F,S=ot}return}de=de||Se,Q=Q||ce,Pe=Pe||Re,(Se!==p||de!==v)&&(n.blendEquationSeparate(ke[Se],ke[de]),p=Se,v=de),(ce!==w||Re!==x||Q!==L||Pe!==R)&&(n.blendFuncSeparate(Ue[ce],Ue[Re],Ue[Q],Ue[Pe]),w=ce,x=Re,L=Q,R=Pe),(Ze.equals(b)===!1||mt!==P)&&(n.blendColor(Ze.r,Ze.g,Ze.b,mt),b.copy(Ze),P=mt),m=F,S=!1}function pe(F,Se){F.side===vn?ge(n.CULL_FACE):he(n.CULL_FACE);let ce=F.side===Vt;Se&&(ce=!ce),ne(ce),F.blending===vs&&F.transparent===!1?T(ri):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function _e(F){F!==Ff?(he(n.CULL_FACE),F!==A&&(F===Ic?n.cullFace(n.BACK):F===Of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),A=F}function j(F){F!==z&&(N&&n.lineWidth(F),z=F)}function Ee(F,Se,ce){F?(he(n.POLYGON_OFFSET_FILL),(O!==Se||k!==ce)&&(n.polygonOffset(Se,ce),O=Se,k=ce)):ge(n.POLYGON_OFFSET_FILL)}function ue(F){F?he(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function be(F){F===void 0&&(F=n.TEXTURE0+D-1),re!==F&&(n.activeTexture(F),re=F)}function $e(F,Se,ce){ce===void 0&&(re===null?ce=n.TEXTURE0+D-1:ce=re);let Re=me[ce];Re===void 0&&(Re={type:void 0,texture:void 0},me[ce]=Re),(Re.type!==F||Re.texture!==Se)&&(re!==ce&&(n.activeTexture(ce),re=ce),n.bindTexture(F,Se||le[F]),Re.type=F,Re.texture=Se)}function C(){const F=me[re];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){oe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),oe.copy(F))}function Ve(F){G.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function He(F,Se){let ce=c.get(Se);ce===void 0&&(ce=new WeakMap,c.set(Se,ce));let Re=ce.get(F);Re===void 0&&(Re=n.getUniformBlockIndex(Se,F.name),ce.set(F,Re))}function Me(F,Se){const Re=c.get(Se).get(F);l.get(Se)!==Re&&(n.uniformBlockBinding(Se,Re,F.__bindingPointIndex),l.set(Se,Re))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,me={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,L=null,R=null,b=new tt(0,0,0),P=0,S=!1,M=null,A=null,z=null,O=null,k=null,oe.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:ge,bindFramebuffer:Fe,drawBuffers:ae,useProgram:Ne,setBlending:T,setMaterial:pe,setFlipSided:ne,setCullFace:_e,setLineWidth:j,setPolygonOffset:Ee,setScissorTest:ue,activeTexture:be,bindTexture:$e,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:Ie,texImage3D:ie,updateUBOMapping:He,uniformBlockBinding:Me,texStorage2D:xe,texStorage3D:Ce,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:Te,viewport:Ve,reset:qe}}function Ix(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return d?new OffscreenCanvas(C,y):Po("canvas")}function _(C,y,W){let K=1;const ee=$e(C);if((ee.width>W||ee.height>W)&&(K=W/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(K*ee.width),De=Math.floor(K*ee.height);u===void 0&&(u=g(J,De));const xe=y?g(J,De):u;return xe.width=J,xe.height=De,xe.getContext("2d").drawImage(C,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+De+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,y,W,K,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=y;if(y===n.RED&&(W===n.FLOAT&&(J=n.R32F),W===n.HALF_FLOAT&&(J=n.R16F),W===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.R8UI),W===n.UNSIGNED_SHORT&&(J=n.R16UI),W===n.UNSIGNED_INT&&(J=n.R32UI),W===n.BYTE&&(J=n.R8I),W===n.SHORT&&(J=n.R16I),W===n.INT&&(J=n.R32I)),y===n.RG&&(W===n.FLOAT&&(J=n.RG32F),W===n.HALF_FLOAT&&(J=n.RG16F),W===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RG8UI),W===n.UNSIGNED_SHORT&&(J=n.RG16UI),W===n.UNSIGNED_INT&&(J=n.RG32UI),W===n.BYTE&&(J=n.RG8I),W===n.SHORT&&(J=n.RG16I),W===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGB8UI),W===n.UNSIGNED_SHORT&&(J=n.RGB16UI),W===n.UNSIGNED_INT&&(J=n.RGB32UI),W===n.BYTE&&(J=n.RGB8I),W===n.SHORT&&(J=n.RGB16I),W===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),W===n.UNSIGNED_INT&&(J=n.RGBA32UI),W===n.BYTE&&(J=n.RGBA8I),W===n.SHORT&&(J=n.RGBA16I),W===n.INT&&(J=n.RGBA32I)),y===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),y===n.RGBA){const De=ee?Ro:it.getTransfer(K);W===n.FLOAT&&(J=n.RGBA32F),W===n.HALF_FLOAT&&(J=n.RGBA16F),W===n.UNSIGNED_BYTE&&(J=De===ut?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,y){let W;return C?y===null||y===Ni||y===xr?W=n.DEPTH24_STENCIL8:y===Cn?W=n.DEPTH32F_STENCIL8:y===vr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===xr?W=n.DEPTH_COMPONENT24:y===Cn?W=n.DEPTH_COMPONENT32F:y===vr&&(W=n.DEPTH_COMPONENT16),W}function L(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&h.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),M(y)}function P(C){const y=i.get(C);if(y.__webglInit===void 0)return;const W=C.source,K=f.get(W);if(K){const ee=K[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(C),Object.keys(K).length===0&&f.delete(W)}i.remove(C)}function S(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const W=C.source,K=f.get(W);delete K[y.__cacheKey],o.memory.textures--}function M(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ee=0;ee<y.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=C.textures;for(let K=0,ee=W.length;K<ee;K++){const J=i.get(W[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(W[K])}i.remove(C)}let A=0;function z(){A=0}function O(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function k(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function D(C,y){const W=i.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(W,C,y);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+y)}function N(C,y){const W=i.get(C);if(C.version>0&&W.__version!==C.version){le(W,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+y)}function X(C,y){const W=i.get(C);if(C.version>0&&W.__version!==C.version){le(W,C,y);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+y)}function V(C,y){const W=i.get(C);if(C.version>0&&W.__version!==C.version){he(W,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+y)}const re={[bs]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[rl]:n.MIRRORED_REPEAT},me={[sn]:n.NEAREST,[up]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},I={[mp]:n.NEVER,[yp]:n.ALWAYS,[gp]:n.LESS,[Xu]:n.LEQUAL,[_p]:n.EQUAL,[Mp]:n.GEQUAL,[vp]:n.GREATER,[xp]:n.NOTEQUAL};function $(C,y){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Jo||y.magFilter===Or||y.magFilter===Di||y.minFilter===Rn||y.minFilter===Jo||y.minFilter===Or||y.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,re[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,re[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,re[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,me[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,I[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==Or&&y.minFilter!==Di||y.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function oe(C,y){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const J=k(y);if(J!==C.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[J].usedTimes++;const De=ee[C.__cacheKey];De!==void 0&&(ee[C.__cacheKey].usedTimes--,De.usedTimes===0&&S(y)),C.__cacheKey=J,C.__webglTexture=ee[J].texture}return W}function G(C,y,W){return Math.floor(Math.floor(C/W)/y)}function Z(C,y,W,K){const J=C.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,W,K,y.data);else{J.sort((ie,Te)=>ie.start-Te.start);let De=0;for(let ie=1;ie<J.length;ie++){const Te=J[De],Ve=J[ie],He=Te.start+Te.count,Me=G(Ve.start,y.width,4),qe=G(Te.start,y.width,4);Ve.start<=He+1&&Me===qe&&G(Ve.start+Ve.count-1,y.width,4)===Me?Te.count=Math.max(Te.count,Ve.start+Ve.count-Te.start):(++De,J[De]=Ve)}J.length=De+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ie=0,Te=J.length;ie<Te;ie++){const Ve=J[ie],He=Math.floor(Ve.start/4),Me=Math.ceil(Ve.count/4),qe=He%y.width,F=Math.floor(He/y.width),Se=Me,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,qe,F,Se,ce,W,K,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function le(C,y,W){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const ee=oe(C,y),J=y.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+W);const De=i.get(J);if(J.version!==De.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const xe=it.getPrimaries(it.workingColorSpace),Ce=y.colorSpace===ii?null:it.getPrimaries(y.colorSpace),Ie=y.colorSpace===ii||xe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=_(y.image,!1,s.maxTextureSize);ie=be(y,ie);const Te=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type);let He=x(y.internalFormat,Te,Ve,y.colorSpace,y.isVideoTexture);$(K,y);let Me;const qe=y.mipmaps,F=y.isVideoTexture!==!0,Se=De.__version===void 0||ee===!0,ce=J.dataReady,Re=L(y,ie);if(y.isDepthTexture)He=v(y.format===yr,y.type),Se&&(F?t.texStorage2D(n.TEXTURE_2D,1,He,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Te,Ve,null));else if(y.isDataTexture)if(qe.length>0){F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,qe[0].width,qe[0].height);for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],F?ce&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Ve,Me.data):t.texImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Te,Ve,Me.data);y.generateMipmaps=!1}else F?(Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,ie.width,ie.height),ce&&Z(y,ie,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Te,Ve,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,He,qe[0].width,qe[0].height,ie.depth);for(let de=0,Q=qe.length;de<Q;de++)if(Me=qe[de],y.format!==Mn)if(Te!==null)if(F){if(ce)if(y.layerUpdates.size>0){const Pe=mh(Me.width,Me.height,y.format,y.type);for(const Ze of y.layerUpdates){const mt=Me.data.subarray(Ze*Pe/Me.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ze,Me.width,Me.height,1,Te,mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ie.depth,Te,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,He,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ie.depth,Te,Ve,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,He,Me.width,Me.height,ie.depth,0,Te,Ve,Me.data)}else{F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,qe[0].width,qe[0].height);for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],y.format!==Mn?Te!==null?F?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ce&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Ve,Me.data):t.texImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Te,Ve,Me.data)}else if(y.isDataArrayTexture)if(F){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,He,ie.width,ie.height,ie.depth),ce)if(y.layerUpdates.size>0){const de=mh(ie.width,ie.height,y.format,y.type);for(const Q of y.layerUpdates){const Pe=ie.data.subarray(Q*de/ie.data.BYTES_PER_ELEMENT,(Q+1)*de/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Te,Ve,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ve,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ie.width,ie.height,ie.depth,0,Te,Ve,ie.data);else if(y.isData3DTexture)F?(Se&&t.texStorage3D(n.TEXTURE_3D,Re,He,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ve,ie.data)):t.texImage3D(n.TEXTURE_3D,0,He,ie.width,ie.height,ie.depth,0,Te,Ve,ie.data);else if(y.isFramebufferTexture){if(Se)if(F)t.texStorage2D(n.TEXTURE_2D,Re,He,ie.width,ie.height);else{let de=ie.width,Q=ie.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,He,de,Q,0,Te,Ve,null),de>>=1,Q>>=1}}else if(qe.length>0){if(F&&Se){const de=$e(qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,He,de.width,de.height)}for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],F?ce&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Te,Ve,Me):t.texImage2D(n.TEXTURE_2D,de,He,Te,Ve,Me);y.generateMipmaps=!1}else if(F){if(Se){const de=$e(ie);t.texStorage2D(n.TEXTURE_2D,Re,He,de.width,de.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,ie)}else t.texImage2D(n.TEXTURE_2D,0,He,Te,Ve,ie);m(y)&&p(K),De.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function he(C,y,W){if(y.image.length!==6)return;const K=oe(C,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const J=i.get(ee);if(ee.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+W);const De=it.getPrimaries(it.workingColorSpace),xe=y.colorSpace===ii?null:it.getPrimaries(y.colorSpace),Ce=y.colorSpace===ii||De===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let Q=0;Q<6;Q++)!Ie&&!ie?Te[Q]=_(y.image[Q],!0,s.maxCubemapSize):Te[Q]=ie?y.image[Q].image:y.image[Q],Te[Q]=be(y,Te[Q]);const Ve=Te[0],He=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),qe=x(y.internalFormat,He,Me,y.colorSpace),F=y.isVideoTexture!==!0,Se=J.__version===void 0||K===!0,ce=ee.dataReady;let Re=L(y,Ve);$(n.TEXTURE_CUBE_MAP,y);let de;if(Ie){F&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){de=Te[Q].mipmaps;for(let Pe=0;Pe<de.length;Pe++){const Ze=de[Pe];y.format!==Mn?He!==null?F?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,0,0,Ze.width,Ze.height,He,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,0,0,Ze.width,Ze.height,He,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,qe,Ze.width,Ze.height,0,He,Me,Ze.data)}}}else{if(de=y.mipmaps,F&&Se){de.length>0&&Re++;const Q=$e(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te[Q].width,Te[Q].height,He,Me,Te[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Te[Q].width,Te[Q].height,0,He,Me,Te[Q].data);for(let Pe=0;Pe<de.length;Pe++){const mt=de[Pe].image[Q].image;F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,0,0,mt.width,mt.height,He,Me,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,qe,mt.width,mt.height,0,He,Me,mt.data)}}else{F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,Me,Te[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,He,Me,Te[Q]);for(let Pe=0;Pe<de.length;Pe++){const Ze=de[Pe];F?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,0,0,He,Me,Ze.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,qe,He,Me,Ze.image[Q])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),J.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,W,K,ee,J){const De=r.convert(W.format,W.colorSpace),xe=r.convert(W.type),Ce=x(W.internalFormat,De,xe,W.colorSpace),Ie=i.get(y),ie=i.get(W);if(ie.__renderTarget=y,!Ie.__hasExternalTextures){const Te=Math.max(1,y.width>>J),Ve=Math.max(1,y.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,Ce,Te,Ve,y.depth,0,De,xe,null):t.texImage2D(ee,J,Ce,Te,Ve,0,De,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,ie.__webglTexture,0,j(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(C,y,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,ee=K&&K.isDepthTexture?K.type:null,J=v(y.stencilBuffer,ee),De=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=j(y);Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,J,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,C)}else{const K=y.textures;for(let ee=0;ee<K.length;ee++){const J=K[ee],De=r.convert(J.format,J.colorSpace),xe=r.convert(J.type),Ce=x(J.internalFormat,De,xe,J.colorSpace),Ie=j(y);W&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ce,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Ce,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const ee=K.__webglTexture,J=j(y);if(y.depthTexture.format===Mr)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===yr)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const y=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?ae(y.__webglFramebuffer[0],C):ae(y.__webglFramebuffer,C)}else if(W){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),Fe(y.__webglDepthbuffer[K],C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Fe(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(C,y,W){const K=i.get(C);y!==void 0&&ge(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ne(C)}function Ue(C){const y=C.texture,W=i.get(C),K=i.get(y);C.addEventListener("dispose",b);const ee=C.textures,J=C.isWebGLCubeRenderTarget===!0,De=ee.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<y.mipmaps.length;Ce++)W.__webglFramebuffer[xe][Ce]=n.createFramebuffer()}else W.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)W.__webglFramebuffer[xe]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(De)for(let xe=0,Ce=ee.length;xe<Ce;xe++){const Ie=i.get(ee[xe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xe=0;xe<ee.length;xe++){const Ce=ee[xe];W.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[xe]);const Ie=r.convert(Ce.format,Ce.colorSpace),ie=r.convert(Ce.type),Te=x(Ce.internalFormat,Ie,ie,Ce.colorSpace,C.isXRRenderTarget===!0),Ve=j(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,W.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),$(n.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ce=0;Ce<y.mipmaps.length;Ce++)ge(W.__webglFramebuffer[xe][Ce],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else ge(W.__webglFramebuffer[xe],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Ce=ee.length;xe<Ce;xe++){const Ie=ee[xe],ie=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),$(n.TEXTURE_2D,Ie),ge(W.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),$(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ce=0;Ce<y.mipmaps.length;Ce++)ge(W.__webglFramebuffer[Ce],C,y,n.COLOR_ATTACHMENT0,xe,Ce);else ge(W.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,xe,0);m(y)&&p(xe),t.unbindTexture()}C.depthBuffer&&Ne(C)}function T(C){const y=C.textures;for(let W=0,K=y.length;W<K;W++){const ee=y[W];if(m(ee)){const J=w(C),De=i.get(ee).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const pe=[],ne=[];function _e(C){if(C.samples>0){if(Ee(C)===!1){const y=C.textures,W=C.width,K=C.height;let ee=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(C),xe=y.length>1;if(xe)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ce=C.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const ie=i.get(y[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,W,K,0,0,W,K,ee,n.NEAREST),l===!0&&(pe.length=0,ne.length=0,pe.push(n.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(J),ne.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const ie=i.get(y[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function j(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function be(C,y){const W=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Ts&&W!==ii&&(it.getTransfer(W)===ut?(K!==Mn||ee!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function $e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=ke,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ee}function Ux(n,e){function t(i,s=ii){let r;const o=it.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fu)return n.BYTE;if(i===Ou)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===Yl)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Cr)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===Hu)return n.RGB;if(i===Mn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===Gu)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===Mo||i===yo||i===So||i===wo)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===ul||i===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===ul)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Ml||i===yl||i===Sl||i===wl||i===El||i===bl||i===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Al||i===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Eo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===Cl||i===Pl||i===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:Nx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends ks{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new Fx,m=t.getContextAttributes();let p=null,w=null;const x=[],v=[],L=new ve;let R=null;const b=new Ft;b.viewport=new dt;const P=new Ft;P.viewport=new dt;const S=[b,P],M=new rg;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=x[G];return Z===void 0&&(Z=new va,x[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=x[G];return Z===void 0&&(Z=new va,x[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=x[G];return Z===void 0&&(Z=new va,x[G]=Z),Z.getHandSpace()};function O(G){const Z=v.indexOf(G.inputSource);if(Z===-1)return;const le=x[Z];le!==void 0&&(le.update(G.inputSource,G.frame,c||o),le.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",D);for(let G=0;G<x.length;G++){const Z=v[G];Z!==null&&(v[G]=null,x[G].disconnect(Z))}A=null,z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,w=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",k),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,he=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?yr:Mr,he=m.stencil?xr:Ni);const Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new hi(f.textureWidth,f.textureHeight,{format:Mn,type:Dn,depthTexture:new nd(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new hi(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(G){for(let Z=0;Z<G.removed.length;Z++){const le=G.removed[Z],he=v.indexOf(le);he>=0&&(v[he]=null,x[he].disconnect(le))}for(let Z=0;Z<G.added.length;Z++){const le=G.added[Z];let he=v.indexOf(le);if(he===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=v.length){v.push(le),he=Fe;break}else if(v[Fe]===null){v[Fe]=le,he=Fe;break}if(he===-1)break}const ge=x[he];ge&&ge.connect(le)}}const N=new U,X=new U;function V(G,Z,le){N.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const he=N.distanceTo(X),ge=Z.projectionMatrix.elements,Fe=le.projectionMatrix.elements,ae=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],Ue=(ge[9]-1)/ge[5],T=(ge[8]-1)/ge[0],pe=(Fe[8]+1)/Fe[0],ne=ae*T,_e=ae*pe,j=he/(-T+pe),Ee=j*-T;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ee),G.translateZ(j),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ge[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ue=ae+j,be=Ne+j,$e=ne-Ee,C=_e+(he-Ee),y=ke*Ne/be*ue,W=Ue*Ne/be*ue;G.projectionMatrix.makePerspective($e,C,y,W,ue,be),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function re(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Z=G.near,le=G.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(le=_.depthFar)),M.near=P.near=b.near=Z,M.far=P.far=b.far=le,(A!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,z=M.far),b.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,M.layers.mask=b.layers.mask|P.layers.mask;const he=G.parent,ge=M.cameras;re(M,he);for(let Fe=0;Fe<ge.length;Fe++)re(ge[Fe],he);ge.length===2?V(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),me(G,M,he)};function me(G,Z,le){le===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Sr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let I=null;function $(G,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const le=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let he=!1;le.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let ae=0;ae<le.length;ae++){const Ne=le[ae];let ke=null;if(d!==null)ke=d.getViewport(Ne);else{const T=u.getViewSubImage(f,Ne);ke=T.viewport,ae===0&&(e.setRenderTargetTextures(w,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(w))}let Ue=S[ae];Ue===void 0&&(Ue=new Ft,Ue.layers.enable(ae),Ue.viewport=new dt,S[ae]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),ae===0&&(M.matrix.copy(Ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Ue)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const ae=u.getDepthInformation(le[0]);ae&&ae.isValid&&ae.texture&&_.init(e,ae,s.renderState)}}for(let le=0;le<x.length;le++){const he=v[le],ge=x[le];he!==null&&ge!==void 0&&ge.update(he,Z,c||o)}I&&I(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const oe=new fd;oe.setAnimationLoop($),this.setAnimationLoop=function(G){I=G},this.dispose=function(){}}}const yi=new In,kx=new lt;function Bx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ju(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,v=w.envMapRotation;x&&(m.envMap.value=x,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){const v=x.program;i.uniformBlockBinding(w,v)}function c(w,x){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(w,L);const R=e.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function h(w){const x=u();w.__bindingPointIndex=x;const v=n.createBuffer(),L=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],v=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,b=v.length;R<b;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,M=P.length;S<M;S++){const A=P[S];if(d(A,R,S,L)===!0){const z=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let D=0;D<O.length;D++){const N=O[D],X=_(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+k,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,x,v,L){const R=w.value,b=x+"_"+v;if(L[b]===void 0)return typeof R=="number"||typeof R=="boolean"?L[b]=R:L[b]=R.clone(),!0;{const P=L[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(w){const x=w.uniforms;let v=0;const L=16;for(let b=0,P=x.length;b<P;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,A=S.length;M<A;M++){const z=S[M],O=Array.isArray(z.value)?z.value:[z.value];for(let k=0,D=O.length;k<D;k++){const N=O[k],X=_(N),V=v%L,re=V%X.boundary,me=V+re;v+=re,me!==0&&L-me<X.storage&&(v+=L-me),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=X.storage}}}const R=v%L;return R>0&&(v+=L-R),w.__size=v,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Gx{constructor(e={}){const{canvas:t=kp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=Xt;let R=0,b=0,P=null,S=-1,M=null;const A=new dt,z=new dt;let O=null;const k=new tt(0);let D=0,N=t.width,X=t.height,V=1,re=null,me=null;const I=new dt(0,0,N,X),$=new dt(0,0,N,X);let oe=!1;const G=new sc;let Z=!1,le=!1;const he=new lt,ge=new lt,Fe=new U,ae=new dt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Ue(){return P===null?V:1}let T=i;function pe(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ql}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),T===null){const B="webgl2";if(T=pe(B,E),T===null)throw pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,_e,j,Ee,ue,be,$e,C,y,W,K,ee,J,De,xe,Ce,Ie,ie,Te,Ve,He,Me,qe,F;function Se(){ne=new j_(T),ne.init(),Me=new Ux(T,ne),_e=new X_(T,ne,e,Me),j=new Dx(T,ne),_e.reverseDepthBuffer&&f&&j.buffers.depth.setReversed(!0),Ee=new tv(T),ue=new xx,be=new Ix(T,ne,j,ue,_e,Me,Ee),$e=new Y_(v),C=new J_(v),y=new ag(T),qe=new V_(T,y),W=new Q_(T,y,Ee,qe),K=new iv(T,W,y,Ee),Te=new nv(T,_e,be),Ce=new q_(ue),ee=new vx(v,$e,C,ne,_e,qe,Ce),J=new Bx(v,ue),De=new yx,xe=new Ax(ne),ie=new G_(v,$e,C,j,K,d,l),Ie=new Px(v,K,_e),F=new Hx(T,Ee,_e,j),Ve=new W_(T,ne,Ee),He=new ev(T,ne,Ee),Ee.programs=ee.programs,v.capabilities=_e,v.extensions=ne,v.properties=ue,v.renderLists=De,v.shadowMap=Ie,v.state=j,v.info=Ee}Se();const ce=new Ox(v,T);this.xr=ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,X,!1))},this.getSize=function(E){return E.set(N,X)},this.setSize=function(E,B,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,X=B,t.width=Math.floor(E*V),t.height=Math.floor(B*V),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(N*V,X*V).floor()},this.setDrawingBufferSize=function(E,B,q){N=E,X=B,V=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,B,q,Y){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,B,q,Y),j.viewport(A.copy(I).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,B,q,Y){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,B,q,Y),j.scissor(z.copy($).multiplyScalar(V).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){j.setScissorTest(oe=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let Y=0;if(E){let H=!1;if(P!==null){const fe=P.texture.format;H=fe===Ql||fe===jl||fe===Jl}if(H){const fe=P.texture.type,we=fe===Dn||fe===Ni||fe===vr||fe===xr||fe===$l||fe===Zl,Le=ie.getClearColor(),Ae=ie.getClearAlpha(),We=Le.r,Xe=Le.g,Oe=Le.b;we?(g[0]=We,g[1]=Xe,g[2]=Oe,g[3]=Ae,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=We,_[1]=Xe,_[2]=Oe,_[3]=Ae,T.clearBufferiv(T.COLOR,0,_))}else Y|=T.COLOR_BUFFER_BIT}B&&(Y|=T.DEPTH_BUFFER_BIT),q&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ie.dispose(),De.dispose(),xe.dispose(),ue.dispose(),$e.dispose(),C.dispose(),K.dispose(),qe.dispose(),F.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Tc),ce.removeEventListener("sessionend",Ac),pi.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Ee.autoReset,B=Ie.enabled,q=Ie.autoUpdate,Y=Ie.needsUpdate,H=Ie.type;Se(),Ee.autoReset=E,Ie.enabled=B,Ie.autoUpdate=q,Ie.needsUpdate=Y,Ie.type=H}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){const B=E.target;B.removeEventListener("dispose",Pe),Ze(B)}function Ze(E){mt(E),ue.remove(E)}function mt(E){const B=ue.get(E).programs;B!==void 0&&(B.forEach(function(q){ee.releaseProgram(q)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,Y,H,fe){B===null&&(B=Ne);const we=H.isMesh&&H.matrixWorld.determinant()<0,Le=Lf(E,B,q,Y,H);j.setMaterial(Y,we);let Ae=q.index,We=1;if(Y.wireframe===!0){if(Ae=W.getWireframeAttribute(q),Ae===void 0)return;We=2}const Xe=q.drawRange,Oe=q.attributes.position;let Qe=Xe.start*We,ct=(Xe.start+Xe.count)*We;fe!==null&&(Qe=Math.max(Qe,fe.start*We),ct=Math.min(ct,(fe.start+fe.count)*We)),Ae!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ae.count)):Oe!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Oe.count));const wt=ct-Qe;if(wt<0||wt===1/0)return;qe.setup(H,Y,Le,q,Ae);let gt,ft=Ve;if(Ae!==null&&(gt=y.get(Ae),ft=He,ft.setIndex(gt)),H.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*Ue()),ft.setMode(T.LINES)):ft.setMode(T.TRIANGLES);else if(H.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),j.setLineWidth(Be*Ue()),H.isLineSegments?ft.setMode(T.LINES):H.isLineLoop?ft.setMode(T.LINE_LOOP):ft.setMode(T.LINE_STRIP)}else H.isPoints?ft.setMode(T.POINTS):H.isSprite&&ft.setMode(T.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,yt=H._multiDrawCounts,nt=H._multiDrawCount,$t=Ae?y.get(Ae).bytesPerElement:1,Gi=ue.get(Y).currentProgram.getUniforms();for(let Zt=0;Zt<nt;Zt++)Gi.setValue(T,"_gl_DrawID",Zt),ft.render(Be[Zt]/$t,yt[Zt])}else if(H.isInstancedMesh)ft.renderInstances(Qe,wt,H.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Be);ft.renderInstances(Qe,wt,yt)}else ft.render(Qe,wt)};function ot(E,B,q){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Fr(E,B,q),E.side=ci,E.needsUpdate=!0,Fr(E,B,q),E.side=vn):Fr(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),p=xe.get(q),p.init(B),x.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){const Le=fe[we];ot(Le,q,H),Y.add(Le)}else ot(fe,q,H),Y.add(fe)}),p=x.pop(),Y},this.compileAsync=function(E,B,q=null){const Y=this.compile(E,B,q);return new Promise(H=>{function fe(){if(Y.forEach(function(we){ue.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){H(E);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let hn=null;function On(E){hn&&hn(E)}function Tc(){pi.stop()}function Ac(){pi.start()}const pi=new fd;pi.setAnimationLoop(On),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(E){hn=E,ce.setAnimationLoop(E),E===null?pi.stop():pi.start()},ce.addEventListener("sessionstart",Tc),ce.addEventListener("sessionend",Ac),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,P),p=xe.get(E,x.length),p.init(B),x.push(p),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G.setFromProjectionMatrix(ge),le=this.localClippingEnabled,Z=Ce.init(this.clippingPlanes,le),m=De.get(E,w.length),m.init(),w.push(m),ce.enabled===!0&&ce.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Zo(fe,B,-1/0,v.sortObjects)}Zo(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,me),ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ke&&ie.addToRenderList(m,E),this.info.render.frame++,Z===!0&&Ce.beginShadows();const q=p.state.shadowsArray;Ie.render(q,E,B),Z===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(H.length>0)for(let we=0,Le=fe.length;we<Le;we++){const Ae=fe[we];Cc(Y,H,E,Ae)}ke&&ie.render(E);for(let we=0,Le=fe.length;we<Le;we++){const Ae=fe[we];Rc(m,E,Ae,Ae.viewport)}}else H.length>0&&Cc(Y,H,E,B),ke&&ie.render(E),Rc(m,E,B);P!==null&&b===0&&(be.updateMultisampleRenderTarget(P),be.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,B),qe.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Z===!0&&Ce.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Zo(E,B,q,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){Y&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const we=K.update(E),Le=E.material;Le.visible&&m.push(E,we,Le,q,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const we=K.update(E),Le=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ae.copy(we.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Le)){const Ae=we.groups;for(let We=0,Xe=Ae.length;We<Xe;We++){const Oe=Ae[We],Qe=Le[Oe.materialIndex];Qe&&Qe.visible&&m.push(E,we,Qe,q,ae.z,Oe)}}else Le.visible&&m.push(E,we,Le,q,ae.z,null)}}const fe=E.children;for(let we=0,Le=fe.length;we<Le;we++)Zo(fe[we],B,q,Y)}function Rc(E,B,q,Y){const H=E.opaque,fe=E.transmissive,we=E.transparent;p.setupLightsView(q),Z===!0&&Ce.setGlobalState(v.clippingPlanes,q),Y&&j.viewport(A.copy(Y)),H.length>0&&zr(H,B,q),fe.length>0&&zr(fe,B,q),we.length>0&&zr(we,B,q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Cc(E,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new hi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Cr:Dn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],we=Y.viewport||A;fe.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Le=v.getRenderTarget(),Ae=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(fe),v.getClearColor(k),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ie.render(q);const Xe=v.toneMapping;v.toneMapping=oi;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Z===!0&&Ce.setGlobalState(v.clippingPlanes,Y),zr(E,q,Y),be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,wt=B.length;ct<wt;ct++){const gt=B[ct],ft=gt.object,Be=gt.geometry,yt=gt.material,nt=gt.group;if(yt.side===vn&&ft.layers.test(Y.layers)){const $t=yt.side;yt.side=Vt,yt.needsUpdate=!0,Pc(ft,q,Y,Be,yt,nt),yt.side=$t,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe))}v.setRenderTarget(Le,Ae,We),v.setClearColor(k,D),Oe!==void 0&&(Y.viewport=Oe),v.toneMapping=Xe}function zr(E,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,fe=E.length;H<fe;H++){const we=E[H],Le=we.object,Ae=we.geometry,We=we.group;let Xe=we.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),Le.layers.test(q.layers)&&Pc(Le,B,q,Ae,Xe,We)}}function Pc(E,B,q,Y,H,fe){E.onBeforeRender(v,B,q,Y,H,fe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,B,q,Y,E,fe),H.transparent===!0&&H.side===vn&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,v.renderBufferDirect(q,B,Y,H,E,fe),H.side=ci,H.needsUpdate=!0,v.renderBufferDirect(q,B,Y,H,E,fe),H.side=vn):v.renderBufferDirect(q,B,Y,H,E,fe),E.onAfterRender(v,B,q,Y,H,fe)}function Fr(E,B,q){B.isScene!==!0&&(B=Ne);const Y=ue.get(E),H=p.state.lights,fe=p.state.shadowsArray,we=H.state.version,Le=ee.getParameters(E,H.state,fe,B,q),Ae=ee.getProgramCacheKey(Le);let We=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?C:$e).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Pe),We=new Map,Y.programs=We);let Xe=We.get(Ae);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===we)return Dc(E,Le),Xe}else Le.uniforms=ee.getUniforms(E),E.onBeforeCompile(Le,v),Xe=ee.acquireProgram(Le,Ae),We.set(Ae,Xe),Y.uniforms=Le.uniforms;const Oe=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Ce.uniform),Dc(E,Le),Y.needsLights=If(E),Y.lightsStateVersion=we,Y.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Lc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=bo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Dc(E,B){const q=ue.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Lf(E,B,q,Y,H){B.isScene!==!0&&(B=Ne),be.resetTextureUnits();const fe=B.fog,we=Y.isMeshStandardMaterial?B.environment:null,Le=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ts,Ae=(Y.isMeshStandardMaterial?C:$e).get(Y.envMap||we),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let wt=oi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(wt=v.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=gt!==void 0?gt.length:0,Be=ue.get(Y),yt=p.state.lights;if(Z===!0&&(le===!0||E!==M)){const kt=E===M&&Y.id===S;Ce.setState(Y,E,kt)}let nt=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==yt.state.version||Be.outputColorSpace!==Le||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Ae||Y.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ce.numPlanes||Be.numIntersection!==Ce.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Xe||Be.morphTargets!==Oe||Be.morphNormals!==Qe||Be.morphColors!==ct||Be.toneMapping!==wt||Be.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Be.__version=Y.version);let $t=Be.currentProgram;nt===!0&&($t=Fr(Y,B,H));let Gi=!1,Zt=!1,Ys=!1;const vt=$t.getUniforms(),rn=Be.uniforms;if(j.useProgram($t.program)&&(Gi=!0,Zt=!0,Ys=!0),Y.id!==S&&(S=Y.id,Zt=!0),Gi||M!==E){j.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),Hp(he),Gp(he),vt.setValue(T,"projectionMatrix",he)):vt.setValue(T,"projectionMatrix",E.projectionMatrix),vt.setValue(T,"viewMatrix",E.matrixWorldInverse);const Wt=vt.map.cameraPosition;Wt!==void 0&&Wt.setValue(T,Fe.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Zt=!0,Ys=!0)}if(H.isSkinnedMesh){vt.setOptional(T,H,"bindMatrix"),vt.setOptional(T,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),vt.setValue(T,"boneTexture",kt.boneTexture,be))}H.isBatchedMesh&&(vt.setOptional(T,H,"batchingTexture"),vt.setValue(T,"batchingTexture",H._matricesTexture,be),vt.setOptional(T,H,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",H._indirectTexture,be),vt.setOptional(T,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",H._colorsTexture,be));const on=q.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Te.update(H,q,$t),(Zt||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,vt.setValue(T,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(rn.envMap.value=Ae,rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),Zt&&(vt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Df(rn,Ys),fe&&Y.fog===!0&&J.refreshFogUniforms(rn,fe),J.refreshMaterialUniforms(rn,Y,V,X,p.state.transmissionRenderTarget[E.id]),bo.upload(T,Lc(Be),rn,be)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bo.upload(T,Lc(Be),rn,be),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(T,"center",H.center),vt.setValue(T,"modelViewMatrix",H.modelViewMatrix),vt.setValue(T,"normalMatrix",H.normalMatrix),vt.setValue(T,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const kt=Y.uniformsGroups;for(let Wt=0,Ko=kt.length;Wt<Ko;Wt++){const mi=kt[Wt];F.update(mi,$t),F.bind(mi,$t)}}return $t}function Df(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function If(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,q){const Y=ue.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ue.get(E.texture).__webglTexture=B,ue.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=ue.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Uf=T.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){P=E,R=B,b=q;let Y=!0,H=null,fe=!1,we=!1;if(E){const Ae=ue.get(E);if(Ae.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(T.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)be.setupRenderTarget(E);else if(Ae.__hasExternalTextures)be.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&ue.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(E)}}const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?H=Xe[B][q]:H=Xe[B],fe=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?H=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[q]:H=Xe,A.copy(E.viewport),z.copy(E.scissor),O=E.scissorTest}else A.copy(I).multiplyScalar(V).floor(),z.copy($).multiplyScalar(V).floor(),O=oe;if(q!==0&&(H=Uf),j.bindFramebuffer(T.FRAMEBUFFER,H)&&Y&&j.drawBuffers(E,H),j.viewport(A),j.scissor(z),j.setScissorTest(O),fe){const Ae=ue.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,q)}else if(we){const Ae=ue.get(E.texture),We=B;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ae.__webglTexture,q,We)}else if(E!==null&&q!==0){const Ae=ue.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,B,q,Y,H,fe,we,Le=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){j.bindFramebuffer(T.FRAMEBUFFER,Ae);try{const We=E.textures[Le],Xe=We.format,Oe=We.type;if(!_e.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-H&&(E.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),T.readPixels(B,q,Y,H,Me.convert(Xe),Me.convert(Oe),fe))}finally{const We=P!==null?ue.get(P).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,Y,H,fe,we,Le=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-H){j.bindFramebuffer(T.FRAMEBUFFER,Ae);const We=E.textures[Le],Xe=We.format,Oe=We.type;if(!_e.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.bufferData(T.PIXEL_PACK_BUFFER,fe.byteLength,T.STREAM_READ),E.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),T.readPixels(B,q,Y,H,Me.convert(Xe),Me.convert(Oe),0);const ct=P!==null?ue.get(P).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,ct);const wt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Bp(T,wt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,fe),T.deleteBuffer(Qe),T.deleteSync(wt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const Y=Math.pow(2,-q),H=Math.floor(E.image.width*Y),fe=Math.floor(E.image.height*Y),we=B!==null?B.x:0,Le=B!==null?B.y:0;be.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,we,Le,H,fe),j.unbindTexture()};const Nf=T.createFramebuffer(),zf=T.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,Y=null,H=0,fe=null){fe===null&&(H!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=H,H=0):fe=0);let we,Le,Ae,We,Xe,Oe,Qe,ct,wt;const gt=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(q!==null)we=q.max.x-q.min.x,Le=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Xe=q.min.y,Oe=q.isBox3?q.min.z:0;else{const on=Math.pow(2,-H);we=Math.floor(gt.width*on),Le=Math.floor(gt.height*on),E.isDataArrayTexture?Ae=gt.depth:E.isData3DTexture?Ae=Math.floor(gt.depth*on):Ae=1,We=0,Xe=0,Oe=0}Y!==null?(Qe=Y.x,ct=Y.y,wt=Y.z):(Qe=0,ct=0,wt=0);const ft=Me.convert(B.format),Be=Me.convert(B.type);let yt;B.isData3DTexture?(be.setTexture3D(B,0),yt=T.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(be.setTexture2DArray(B,0),yt=T.TEXTURE_2D_ARRAY):(be.setTexture2D(B,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,B.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,B.unpackAlignment);const nt=T.getParameter(T.UNPACK_ROW_LENGTH),$t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Gi=T.getParameter(T.UNPACK_SKIP_PIXELS),Zt=T.getParameter(T.UNPACK_SKIP_ROWS),Ys=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,We),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Oe);const vt=E.isDataArrayTexture||E.isData3DTexture,rn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const on=ue.get(E),kt=ue.get(B),Wt=ue.get(on.__renderTarget),Ko=ue.get(kt.__renderTarget);j.bindFramebuffer(T.READ_FRAMEBUFFER,Wt.__webglFramebuffer),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let mi=0;mi<Ae;mi++)vt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(E).__webglTexture,H,Oe+mi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(B).__webglTexture,fe,wt+mi)),T.blitFramebuffer(We,Xe,we,Le,Qe,ct,we,Le,T.DEPTH_BUFFER_BIT,T.NEAREST);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||ue.has(E)){const on=ue.get(E),kt=ue.get(B);j.bindFramebuffer(T.READ_FRAMEBUFFER,Nf),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,zf);for(let Wt=0;Wt<Ae;Wt++)vt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,on.__webglTexture,H,Oe+Wt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,on.__webglTexture,H),rn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,kt.__webglTexture,fe,wt+Wt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,kt.__webglTexture,fe),H!==0?T.blitFramebuffer(We,Xe,we,Le,Qe,ct,we,Le,T.COLOR_BUFFER_BIT,T.NEAREST):rn?T.copyTexSubImage3D(yt,fe,Qe,ct,wt+Wt,We,Xe,we,Le):T.copyTexSubImage2D(yt,fe,Qe,ct,We,Xe,we,Le);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(yt,fe,Qe,ct,wt,we,Le,Ae,ft,Be,gt.data):B.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,fe,Qe,ct,wt,we,Le,Ae,ft,gt.data):T.texSubImage3D(yt,fe,Qe,ct,wt,we,Le,Ae,ft,Be,gt):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,fe,Qe,ct,we,Le,ft,Be,gt.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,fe,Qe,ct,gt.width,gt.height,ft,gt.data):T.texSubImage2D(T.TEXTURE_2D,fe,Qe,ct,we,Le,ft,Be,gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,nt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ys),fe===0&&B.generateMipmaps&&T.generateMipmap(yt),j.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q=null,Y=null,H=0){return xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,q,Y,H)},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,j.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Vx extends ic{constructor(){super();const e=new Et;e.deleteAttribute("uv");const t=new Mt({side:Vt}),i=new Mt,s=new ng(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ho(e,i,6),a=new Rt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new ze(e,ss(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ze(e,ss(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ze(e,ss(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new ze(e,ss(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new ze(e,ss(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new ze(e,ss(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ss(n){const e=new ui;return e.color.setScalar(n),e}const kh=250;class Wx{latched=!1;pressedAt=null;press(e){this.pressedAt===null&&(this.pressedAt=e)}release(e){this.pressedAt!==null&&(e-this.pressedAt<kh&&(this.latched=!this.latched),this.pressedAt=null)}cancel(){this.pressedAt=null}reset(){this.latched=!1,this.pressedAt=null}target(e){return this.pressedAt!==null?e-this.pressedAt>=kh?"back":"pillar":this.latched?"pillar":"ahead"}}const Bh={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"reverse",KeyS:"reverse",ArrowLeft:"steerLeft",KeyA:"steerLeft",ArrowRight:"steerRight",KeyD:"steerRight",Space:"handbrake"},La=[1,2,3],Xx=n=>{const e=n;if(!e)return!1;const t=(e.tagName??"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||e.isContentEditable===!0},qx=n=>La[(La.indexOf(n)+1)%La.length];class Yx{constructor(e={}){this.events=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.releaseAll),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()})}events;pressed=new Set;touchHeld=new Set;head=new Wx;lookLeftHeld=!1;lookLeftTouch=!1;setTouchControl(e,t){t?this.touchHeld.add(e):this.touchHeld.delete(e)}setTouchLookLeft(e){this.lookLeftTouch=e}headPress(){this.head.press(performance.now())}headRelease(){this.head.release(performance.now())}releaseAll=()=>{this.pressed.clear(),this.touchHeld.clear(),this.head.cancel(),this.lookLeftHeld=!1,this.lookLeftTouch=!1};headTarget(){return this.head.target(performance.now())}resetHead(){this.head.reset()}lookLeft(){return this.lookLeftHeld||this.lookLeftTouch}controls(){const e=t=>this.pressed.has(t)||this.touchHeld.has(t);return{throttle:e("throttle"),reverse:e("reverse"),steerLeft:e("steerLeft"),steerRight:e("steerRight"),handbrake:e("handbrake")}}onKeyDown=e=>{if(Xx(e.target))return;const t=Bh[e.code];if(t){e.preventDefault(),this.pressed.add(t);return}e.code==="Digit1"&&this.events.onView?.(1),e.code==="Digit2"&&this.events.onView?.(2),e.code==="Digit3"&&this.events.onView?.(3),e.code==="KeyR"&&this.events.onRestart?.(),e.code==="Escape"&&this.events.onMenu?.(),e.code==="KeyB"&&this.events.onToggleEagle?.(),e.code==="KeyC"&&this.events.onToggleReverseAids?.(),e.code==="KeyH"&&this.events.onToggleCoach?.(),e.code==="KeyE"&&this.head.press(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!0)};onKeyUp=e=>{const t=Bh[e.code];t&&this.pressed.delete(t),e.code==="KeyE"&&this.head.release(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!1)}}const se={wheelbase:2.7,width:1.8,length:4.5,rearOverhang:.9,steeringRatio:15.5,maxWheelDeg:558,wheelTurnRate:420,centerRate:540,centerSnapDeg:15,detentSnapDeg:45,accel:2,brakeDecel:5,handbrakeDecel:8,drag:.9,rollingResistance:.15,maxFwdSpeed:1.39},vd=(n,e,t)=>({x:n,z:e,heading:t,speed:0,wheelDeg:0,gear:"D"}),xd=n=>n.wheelDeg/se.steeringRatio*Math.PI/180,Md=(n,e,t)=>Math.min(t,Math.max(e,n)),Ci=(n,e,t)=>n<e?Math.min(n+t,e):Math.max(n-t,e),Da=.01,$x=(n,e,t)=>{const i=(e.steerLeft?1:0)-(e.steerRight?1:0),s=e.detentDeg;if(i!==0){const r=Md(n.wheelDeg+i*se.wheelTurnRate*t,-558,se.maxWheelDeg);return s!==void 0&&(n.wheelDeg-s)*(r-s)<0?s:r}if(s!==void 0&&Math.abs(n.wheelDeg-s)<=se.detentSnapDeg)return Ci(n.wheelDeg,s,se.wheelTurnRate*t);if(Math.abs(n.wheelDeg)<=se.centerSnapDeg)return 0;if(Math.abs(n.speed)>.1){const r=se.centerRate*Math.min(1,Math.abs(n.speed)/2);return Ci(n.wheelDeg,0,r*t)}return n.wheelDeg},Ia=n=>Md(n,-1.39,se.maxFwdSpeed),Zx=(n,e,t,i)=>{const{speed:s,gear:r}=n,o=()=>({speed:Ci(s,0,se.brakeDecel*t),gear:r});if(e.handbrake)return{speed:Ci(s,0,se.handbrakeDecel*t),gear:r};if(e.throttle)return s<-Da?o():{speed:Ia(Ci(s,se.maxFwdSpeed,se.accel*t)+i*t),gear:"D"};if(e.reverse)return s>Da||r==="D"&&s<-Da?o():{speed:Ia(Ci(s,-1.39,se.accel*t)+i*t),gear:"R"};const a=i===0?se.drag:se.rollingResistance;return{speed:Ia(Ci(s,0,a*t)+i*t),gear:r}},Kx=(n,e,t,i=0)=>{const s=$x(n,e,t),{speed:r,gear:o}=Zx(n,e,t,i),a=s/se.steeringRatio*Math.PI/180,l=n.heading+r/se.wheelbase*Math.tan(a)*t,c=n.x+Math.sin(l)*r*t,h=n.z+Math.cos(l)*r*t;return{x:c,z:h,heading:l,speed:r,wheelDeg:s,gear:o}},Tr=n=>n.z0+n.up+n.top+n.down,Jx=n=>[{z:n.z0,y:0},{z:n.z0+n.up,y:n.height},{z:n.z0+n.up+n.top,y:n.height},{z:Tr(n),y:0}],en=(n,e,t)=>{for(const i of n){if(Math.abs(e-i.cx)>i.hw)continue;const s=t-i.z0,r=Tr(i);if(!(s<=0||t>=r))return s<i.up?i.height*s/i.up:s<i.up+i.top?i.height:i.height*(r-t)/i.down}return 0},Vo=(n,e)=>{if(n.length===0)return 0;const t=en(n,e.x,e.z),i=en(n,e.x+Math.sin(e.heading)*se.wheelbase,e.z+Math.cos(e.heading)*se.wheelbase);return Math.atan2(i-t,se.wheelbase)},jx=(n,e)=>{const t=Vo(n,e);return t===0?0:-9.81*Math.sin(t)},Ge={x:.42,y:1.31,z:1.5},Ui={x:.75,y:1.14,z:1.95},Qx=()=>Math.atan2(Ge.x+Ui.x,Ui.z-Ge.z)*180/Math.PI,yn={yawDeg:140,eye:{x:.3,y:1.31,z:1.4},seconds:.35},Ua={yawDeg:70,eye:{x:.47,y:1.31,z:1.5},seconds:.25},et={trimX:.76,beltY:1.1,roofY:1.4,bPillar:{z:1.1,width:.1},divider:{z:.58,width:.04},quarterTopY:1.24,quarterRearZ:.25,cPillarRearZ:.13},pt={x:1.03,y:1.074,z:2.12,w:.25,h:.15,d:.1},yd=.98,Lo={y:.74,behindBumper:.2},Sd=(n,e)=>{const t=n-Lo.behindBumper-Ge.z;return Math.max(0,Ge.y-(Ge.y-Lo.y)/t*e)},Gt={fovDeg:32,aspect:1.5,yawOut:.3,pitch:-.1,glassBack:.06},Hh=(n,e,t)=>{const s={x:-1*pt.x,y:pt.y,z:pt.z-Gt.glassBack},r=fs(n,s,t);return(r>0?180-r:-180-r)-Gt.yawOut*180/Math.PI},wd=n=>{const e=pt.y-pt.h/2,t=pt.z-pt.d/2;return Ge.z+(t-Ge.z)*Ge.y/(Ge.y-e)-n},tn=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading);return{x:n.x+e.x*i+e.z*t,y:e.y,z:n.z-e.x*t+e.z*i}},fs=(n,e,t)=>{const i=tn(n,e),s=Math.atan2(t.x-i.x,t.z-i.z);let r=(n.heading-s)*180/Math.PI;for(;r>180;)r-=360;for(;r<=-180;)r+=360;return r},Ed=()=>{const n=yn.eye,e=et.quarterRearZ-n.z;return Math.atan2(1.06,e)*180/Math.PI},Nn=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle),i={x:t,z:-e},s={x:e,z:t},r=[];for(const o of[-1,1])for(const a of[-1,1])r.push({x:n.cx+o*n.hw*i.x+a*n.hl*s.x,z:n.cz+o*n.hw*i.z+a*n.hl*s.z});return r},Gh=(n,e)=>{let t=1/0,i=-1/0;for(const s of n){const r=s.x*e.x+s.z*e.z;r<t&&(t=r),r>i&&(i=r)}return[t,i]},Vh=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle);return[{x:t,z:-e},{x:e,z:t}]},Wh=(n,e)=>{const t=Nn(n),i=Nn(e);for(const s of[...Vh(n),...Vh(e)]){const[r,o]=Gh(t,s),[a,l]=Gh(i,s);if(o<a||l<r)return!1}return!0},pc=(n,e)=>{const t=Math.sin(n.angle),i=Math.cos(n.angle);for(const s of Nn(e)){const r=s.x-n.cx,o=s.z-n.cz,a=r*i-o*t,l=r*t+o*i;if(Math.abs(a)>n.hw||Math.abs(l)>n.hl)return!1}return!0},bt=n=>{const e=se.length/2-se.rearOverhang;return{cx:n.x+Math.sin(n.heading)*e,cz:n.z+Math.cos(n.heading)*e,hw:se.width/2,hl:se.length/2,angle:n.heading}},Ar=1.6,bd=.1,Wo=.1,ps=.12,eM=.05,tM=1,nM=se.length-se.rearOverhang-se.wheelbase,iM=n=>({nextCheckpoint:0,lineTouches:0,onLine:!1,hill:n.stopLine?{phase:"approach",hold:0,stopGap:null,anchorZ:0,rollback:0,missedStop:!1}:null,poleHits:0,onPole:!1}),Xh=n=>({cx:n.x,cz:n.z,hw:ps,hl:ps,angle:0}),$n=n=>{const e=Math.sin(n.heading),t=Math.cos(n.heading),i=[];for(const s of[0,se.wheelbase])for(const r of[Ar/2,-Ar/2])i.push({x:n.x+e*s+t*r,z:n.z+t*s-e*r});return i},sM=(n,e)=>{const t=e.x2-e.x1,i=e.z2-e.z1,s=t*t+i*i,r=s===0?0:Math.min(1,Math.max(0,((n.x-e.x1)*t+(n.z-e.z1)*i)/s));return Math.hypot(n.x-(e.x1+r*t),n.z-(e.z1+r*i))},rM=(n,e)=>{const t=Wo/2+bd;return $n(n).some(i=>e.some(s=>sM(i,s)<=t))},oM=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),s=n.x-e.cx,r=n.z-e.cz;return Math.abs(s*i-r*t)<=e.hw&&Math.abs(s*t+r*i)<=e.hl},Cs=n=>n.z+Math.cos(n.heading)*(se.wheelbase+nM),aM=(n,e,t,i)=>{const s=n.stopLine;if(!s||e.phase==="done")return e;const r=s.z-Cs(t);if(e.phase==="approach"){if(r<0)return{...e,phase:"done",missedStop:!0};const l=Math.abs(t.speed)<eM&&r<=s.zone?e.hold+i:0;return l>=tM?{...e,phase:"restart",hold:l,stopGap:r,anchorZ:t.z,rollback:0}:{...e,hold:l}}const o=Math.max(e.rollback,e.anchorZ-t.z);return{...e,rollback:o,phase:r<0?"done":"restart"}},lM=(n,e,t,i,s)=>{const r=e.poleHits+(s&&!e.onPole?1:0),o=rM(t,n.boundaries),a=e.lineTouches+(o&&!e.onLine?1:0),l=bt(t),c=n.checkpoints[e.nextCheckpoint],h=c&&oM({x:l.cx,z:l.cz},c)?e.nextCheckpoint+1:e.nextCheckpoint,u=e.hill?aM(n,e.hill,t,i):null;return{nextCheckpoint:h,lineTouches:a,onLine:o,hill:u,poleHits:r,onPole:s}},Td=(n,e)=>e.nextCheckpoint>=n.checkpoints.length&&(e.hill===null||e.hill.phase==="done"),cM=(n,e,t)=>e.hill&&e.hill.phase!=="done"&&n.stopLine?{cx:n.stopLine.cx,cz:n.stopLine.z,hw:0,hl:0,angle:0}:n.checkpoints[e.nextCheckpoint]??t,hM=(n,e,t)=>{const i=e.hill,s=n.stopLine;if(i&&s&&i.phase==="approach"){const o=s.z-Cs(t);return o<=6?`Stop line ${o.toFixed(2)} m · stop ≤ ${s.maxGap} m before it`:"Hill ahead — stop before the line"}if(i&&s&&i.phase==="restart")return`Move off · rollback ${i.rollback.toFixed(2)} m (max ${s.warnRollback} m)`;const r=n.checkpoints.length;return e.nextCheckpoint<r?`Gate ${e.nextCheckpoint+1} / ${r}`:"Gates done — finish in the green box"},pn={position:25,angle:25,perCollision:20,perExtraReversal:5,reversalCap:15,time:10,posDeadZone:.3,angleFreeDeg:3,angleFullDevDeg:12},Pi=n=>Math.min(1,Math.max(0,n)),qh=(n,e)=>Pi((n-e)/(1-e)),Ad=n=>n>=95?"S":n>=85?"A":n>=70?"B":n>=50?"C":"F",uM=n=>{const e=qh(n.latMargin>0?Pi(n.latOffset/n.latMargin):0,pn.posDeadZone),t=qh(n.longMargin>0?Pi(n.longOffset/n.longMargin):0,pn.posDeadZone),i=pn.position*Pi(.75*e+.25*t),s=n.angleDevRad*180/Math.PI,r=pn.angle*Pi((s-pn.angleFreeDeg)/(pn.angleFullDevDeg-pn.angleFreeDeg)),o=pn.perCollision*n.collisions,a=Math.max(0,n.reversals-n.par.reversals),l=Math.min(pn.reversalCap,pn.perExtraReversal*a),c=Math.max(0,n.timeSec-n.par.timeSec),h=pn.time*Pi(c/n.par.timeSec),u=[];i>.005&&u.push({label:"Position offset",delta:-i}),r>.005&&u.push({label:"Angle deviation",delta:-r}),o>0&&u.push({label:`Collisions ×${n.collisions}`,delta:-o}),l>0&&u.push({label:`Extra gear reversals ×${a}`,delta:-l}),h>.005&&u.push({label:"Over par time",delta:-h});const f=100-i-r-o-l-h,d=Math.max(0,Math.round(f));return{total:d,grade:Ad(d),lines:u}},dM={perPoleHit:20,perLineTouch:10,perCollision:20,missedStop:20,stopTooFar:10,rollback:10,bigRollback:20,perExtraReversal:5,reversalCap:15,time:10},fM=n=>{const e=dM,t=[],i=(a,l)=>{l>.005&&t.push({label:a,delta:-l})};if(i(`Pole hits ×${n.poleHits}`,e.perPoleHit*n.poleHits),i(`Wheel on a line ×${n.lineTouches}`,e.perLineTouch*n.lineTouches),i(`Collisions ×${n.collisions}`,e.perCollision*n.collisions),n.stopLineMissed&&i("Crossed the stop line without stopping",e.missedStop),n.stopGap!==null&&n.stopGap>n.maxStopGap&&i(`Stopped ${n.stopGap.toFixed(1)} m before the stop line (max ${n.maxStopGap} m)`,e.stopTooFar),n.rollback!==null&&n.rollback>n.warnRollback){const a=n.rollback>n.bigRollback;i(`Rolled back ${n.rollback.toFixed(2)} m on the hill`,a?e.bigRollback:e.rollback)}const s=Math.max(0,n.reversals-n.par.reversals);i(`Extra gear reversals ×${s}`,Math.min(e.reversalCap,e.perExtraReversal*s));const r=Math.max(0,n.timeSec-n.par.timeSec);i("Over par time",e.time*Pi(r/n.par.timeSec));const o=Math.max(0,Math.round(100+t.reduce((a,l)=>a+l.delta,0)));return{total:o,grade:Ad(o),lines:t}},pM=.05,Rd=1.5,Cd=Math.PI/6,mM=.5,Yh=3,Pd=(n,e)=>{let t=(n-e)%(2*Math.PI);return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},gM=n=>({cx:n.x,cz:n.z,hw:se.width/2,hl:se.length/2,angle:n.heading}),Hs=n=>({scenario:n,car:vd(n.spawn.x,n.spawn.z,n.spawn.heading),obstacles:[...n.parkedCars.map(gM),...n.solids.map(e=>e.rect),...(n.poles??[]).map(Xh)],poles:(n.course?.poles??[]).map(Xh),course:n.course?iM(n.course):null,time:0,collisions:0,reversals:0,inContact:!1,settle:0,complete:!1,flash:0}),_M=(n,e,t)=>Math.abs(e.speed)>pM||n.scenario.course&&t&&!Td(n.scenario.course,t)||Math.abs(Pd(e.heading,n.scenario.bay.requiredHeading))>Cd?!1:pc(n.scenario.bay,bt(e)),Bi=(n,e,t)=>{if(n.complete)return n;const i=n.scenario.course?.hill,s=Kx(n.car,e,t,i?jx([i],n.car):0),r=bt(s),o=n.obstacles.some(_=>Wh(r,_)),a=n.poles.some(_=>Math.abs(_.cx-r.cx)<Yh&&Math.abs(_.cz-r.cz)<Yh&&Wh(r,_)),c=o||a?{...n.car,speed:0,wheelDeg:s.wheelDeg,gear:s.gear}:s,h=o&&!n.inContact,u=n.reversals+(c.gear!==n.car.gear?1:0),f=n.scenario.course&&n.course?lM(n.scenario.course,n.course,c,t,a):null,d=_M(n,c,f)?n.settle+t:0,g=d>=Rd;return{...n,car:c,time:n.time+t,collisions:n.collisions+(h?1:0),reversals:u,inContact:o,course:f,settle:d,complete:g,flash:h?mM:Math.max(0,n.flash-t)}},vM=n=>Math.min(1,n.settle/Rd),Ld=n=>{const e=n.scenario.bay,t=bt(n.car),i=t.cx-e.cx,s=t.cz-e.cz,r=Math.sin(e.angle),o=Math.cos(e.angle),a=Math.abs(i*o-s*r),l=Math.abs(i*r+s*o),c=Math.abs(Pd(n.car.heading,e.requiredHeading));return{lat:a,long:l,angleDev:c,dist:Math.hypot(i,s),aligned:a<=e.hw-se.width/2&&l<=e.hl-se.length/2&&c<=Cd}},xM=n=>{const e=n.scenario.bay,t=n.scenario.course;if(t&&n.course){const s=n.course.hill;return fM({poleHits:n.course.poleHits,stopLineMissed:s?s.missedStop:!1,lineTouches:n.course.lineTouches,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par,stopGap:s?s.stopGap:null,maxStopGap:t.stopLine?.maxGap??0,rollback:s?s.rollback:null,warnRollback:t.stopLine?.warnRollback??0,bigRollback:t.stopLine?.bigRollback??0})}const i=Ld(n);return uM({latOffset:i.lat,longOffset:i.long,angleDevRad:i.angleDev,latMargin:e.hw-se.width/2,longMargin:e.hl-se.length/2,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par})},MM={V:4.485,H:1.706},{V:Si,H:Na}=MM,Zn={parallel:{bayLength:2*Si,forwardZone:Si+1,bayWidth:Na+1,laneWidth:Na+2},snake:{poleSpacing:1.5*Si+.5,corridorWidth:2*Si},turnaround:{zoneWidth:2*Si},garage:{bayLength:Si+1,bayWidth:Na+1},hill:{stopZone:Si+1,maxGap:1}},ai=(n,e,t,i)=>({x1:n,z1:e,x2:t,z2:i}),tr=(n,e,t,i,s,r)=>{const o=[];for(let a=0;a<r;a++){const l=i+(s-i)*a/r,c=i+(s-i)*(a+1)/r;o.push(ai(n+t*Math.cos(l),e+t*Math.sin(l),n+t*Math.cos(c),e+t*Math.sin(c)))}return o},yM=(n,e,t)=>{const i=[];for(let s=e;s<t;s+=1)i.push({x1:s,z1:n,x2:Math.min(s+.5,t),z2:n,width:.12});return i},SM=(n,e,t)=>{const i=[];for(let s=e;s<t;s+=3)i.push({x1:n,z1:s,x2:n,z2:Math.min(s+1.5,t),width:.1});return i},Do=.5,gn=.5,nr=(n,e,t,i)=>{const s=Math.max(1,Math.round(Math.abs(i-t)*e/Do));return Array.from({length:s+1},(r,o)=>{const a=t+(i-t)*o/s;return{x:n.x+e*Math.cos(a),z:n.z+e*Math.sin(a)}})},za=(n,e,t,i,s=Do)=>{const r=Math.max(1,Math.round(Math.hypot(t-n,i-e)/s));return Array.from({length:r+1},(o,a)=>({x:n+(t-n)*a/r,z:e+(i-e)*a/r}))},Ii={spacing:Zn.snake.poleSpacing,poles:5,halfWidth:Zn.snake.corridorWidth/2,firstZ:-20},$h=Array.from({length:Ii.poles},(n,e)=>({x:0,z:Ii.firstZ+e*Ii.spacing})),wM={id:"snake",name:"Snake",description:`Weave through 5 poles ${Zn.snake.poleSpacing.toFixed(1)} m apart — first pole on your left, then alternate. No pole contact, no wheel on the side lines.`,spawn:{x:-4.535/2,z:-31,heading:0},bay:{cx:0,cz:29,hw:2.5,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:$h,boundaries:[ai(-4.485,-34,-4.485,33),ai(Ii.halfWidth,-34,Ii.halfWidth,33)],checkpoints:$h.map((n,e)=>{const t=e%2===0?-1:1,i=.3;return{cx:t*(i+Ii.halfWidth)/2,cz:n.z,hw:(Ii.halfWidth-i)/2,hl:.6,angle:0}})}},xt={halfWidth:Zn.turnaround.zoneWidth/2,end:14,zoneStart:5,roadStart:-14,poleStep:1},rs=xt.halfWidth+gn,co=xt.end+gn,EM=[...za(-rs,xt.zoneStart,-rs,co,xt.poleStep),...za(rs,xt.zoneStart,rs,co,xt.poleStep),...za(-rs,co,rs,co,xt.poleStep).slice(1,-1)],bM={id:"turnaround",name:"Dead-end turnaround",description:"Drive into the dead end, turn around between the lines using forward and reverse (3-point turn), and stop in the box facing back. Poles surround the dead end — each hit costs 20 points.",spawn:{x:-1.75,z:-10,heading:0},bay:{cx:1.75,cz:-7,hw:1.6,hl:3,angle:0,requiredHeading:Math.PI},parkedCars:[],solids:[],paint:[...yM(xt.zoneStart,-4.485,xt.halfWidth),...SM(0,-14,xt.zoneStart-1)],par:{reversals:2,timeSec:90},course:{poles:EM,boundaries:[ai(-4.485,xt.roadStart,-4.485,xt.end),ai(xt.halfWidth,xt.roadStart,xt.halfWidth,xt.end),ai(-4.485,xt.end,xt.halfWidth,xt.end)],checkpoints:[{cx:0,cz:(xt.zoneStart+xt.end)/2,hw:xt.halfWidth,hl:(xt.end-xt.zoneStart)/2,angle:0}]}},Ye={inner:3.5,outer:3.5+3.5*1.1,dist:11.5,tilt:19*Math.PI/180,gapFrom:-107*Math.PI/180,gapTo:-30*Math.PI/180,startBack:9},rt={x:0,z:0},_t={x:-11.5*Math.sin(Ye.tilt),z:Ye.dist*Math.cos(Ye.tilt)},Sn=(Ye.inner+Ye.outer)/2,wn=Math.atan2(_t.z-rt.z,_t.x-rt.x),si=Math.acos(Ye.dist/(2*Ye.outer)),TM=(n,e)=>({cx:n.x+Sn*Math.cos(e),cz:n.z+Sn*Math.sin(e),hw:(Ye.outer-Ye.inner)/2,hl:.6,angle:-e}),Zh=(n,e)=>({x1:n.x+(Sn-.4)*Math.cos(e),z1:n.z+(Sn-.4)*Math.sin(e),x2:n.x+(Sn+.4)*Math.cos(e),z2:n.z+(Sn+.4)*Math.sin(e),width:.12}),Kh=[[rt,Math.PI],[_t,wn-Math.PI/2],[_t,wn],[_t,wn+Math.PI/2],[rt,0]],Jh=(n,e)=>t=>Math.hypot(t.x-n.x,t.z-n.z)>=e,AM=[...nr(rt,Ye.inner-gn,0,2*Math.PI-Do/Ye.inner),...nr(_t,Ye.inner-gn,0,2*Math.PI-Do/Ye.inner),...[...nr(rt,Ye.outer+gn,wn+si,2*Math.PI+Ye.gapFrom),...nr(rt,Ye.outer+gn,Ye.gapTo,wn-si)].filter(Jh(_t,Ye.outer+gn)),...nr(_t,Ye.outer+gn,wn+Math.PI+si,wn+3*Math.PI-si).filter(Jh(rt,Ye.outer+gn))],Rr=-45*Math.PI/180,ho=Math.atan2(Math.sin(Rr),-Math.cos(Rr)),jh={x:rt.x+Sn*Math.cos(Rr),z:rt.z+Sn*Math.sin(Rr)},Qh=12,Dd={x:rt.x+(Ye.outer+gn)*Math.cos(Ye.gapFrom),z:rt.z+(Ye.outer+gn)*Math.sin(Ye.gapFrom)},eu={x:(rt.x+_t.x)/2,z:(rt.z+_t.z)/2},tu=Math.sqrt(Ye.outer**2-(Ye.dist/2)**2),nu={x:(_t.x-rt.x)/Ye.dist,z:(_t.z-rt.z)/Ye.dist},Fl={x:eu.x+(tu+.4)*nu.z,z:eu.z-(tu+.4)*nu.x},RM={id:"figure-eight",name:"Figure eight",description:'Enter through the gap to the bottom of the near ring. Drive an "S": up its right side turning left, through the middle, round the far ring turning right, back through the middle, round the near ring again, then straight out through the gap into the box. Yellow-banded poles 1 and 2 are the references. Poles line every marking — each hit costs 20 points.',spawn:{x:rt.x+Ye.startBack,z:rt.z-Sn,heading:-Math.PI/2},bay:{cx:jh.x+Math.sin(ho)*Qh,cz:jh.z+Math.cos(ho)*Qh,hw:1.6,hl:3,angle:ho,requiredHeading:ho},parkedCars:[],solids:[],paint:[...Kh.map(([n,e])=>Zh(n,e)),Zh(rt,-Math.PI/2)],par:{reversals:0,timeSec:110},course:{poles:[...AM,Fl],refPoles:[Dd,Fl],boundaries:[...tr(rt.x,rt.z,Ye.inner,0,2*Math.PI,36),...tr(_t.x,_t.z,Ye.inner,0,2*Math.PI,36),...tr(rt.x,rt.z,Ye.outer,wn+si,2*Math.PI+Ye.gapFrom,30),...tr(rt.x,rt.z,Ye.outer,Ye.gapTo,wn-si,20),...tr(_t.x,_t.z,Ye.outer,wn+Math.PI+si,wn+3*Math.PI-si,48)],checkpoints:Kh.map(([n,e])=>TM(n,e))}},iu=.14,mn={cx:0,hw:1.5*1.25,z0:0,up:1/iu,top:3,down:1/iu,height:1},CM=mn.z0+mn.up,PM={id:"hill-start",name:"Hill start",description:"Climb the 14 % ramp, stop no more than 1 m before the stop line, hold with the handbrake (Space), then move off rolling back < 0.3 m.",spawn:{x:0,z:-10,heading:0},bay:{cx:0,cz:25,hw:1.75,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:[],boundaries:[ai(-mn.hw+.05,-4,-mn.hw+.05,21.5),ai(mn.hw-.05,-4,mn.hw-.05,21.5)],checkpoints:[{cx:0,cz:CM+mn.top/2,hw:mn.hw,hl:mn.top/2,angle:0}],hill:mn,stopLine:{z:5,cx:0,hw:mn.hw,maxGap:Zn.hill.maxGap,zone:Zn.hill.stopZone,warnRollback:.3,bigRollback:1}}},LM=[wM,bM,RM,PM],DM=70,fr=se.maxWheelDeg,li=-558,Id=6,IM=.01,UM=se.maxWheelDeg/.35,Fi=n=>Math.atan2(Math.sin(n),Math.cos(n)),su=n=>Math.abs(n.car.speed)<IM,Ud=(n,e)=>Math.abs(n.car.wheelDeg-e)<=Id,ms=(n,e)=>Ud(n,e);class NM{constructor(e){this.steps=e}steps;index=0;start=null;quarter=0;get total(){return this.steps.length}update(e){for(this.start??=e;this.index<this.steps.length-1&&this.steps[this.index].done(e,this.start);)for(this.index++,this.start=e;this.index<this.steps.length-1&&this.steps[this.index].skip?.(e);)this.index++;const t=this.steps[this.index];let i=t.wheel;if(typeof i=="object"&&"aim"in i&&i.quarters){const s=Xo(e,i.aim(e),t.pedal==="reverse");Math.abs(s-this.quarter)>DM&&(this.quarter=zM(s)),i=this.quarter}return{step:this.index+1,total:this.steps.length,say:t.say,look:t.look,pedal:t.pedal,wheel:i,handbrake:t.handbrake??!1}}}const zM=n=>{const e=Math.max(-6,Math.min(6,Math.round(n/90)))*90,t=Math.sign(n)*se.maxWheelDeg;return Math.abs(n-t)<Math.abs(n-e)?t:e},Nd=n=>Math.max(-558,Math.min(se.maxWheelDeg,n)),Xo=(n,e,t)=>{const{car:i}=n,s=t?i.heading+Math.PI:i.heading,r=Fi(Math.atan2(e.x-i.x,e.z-i.z)-s),o=Math.max(1,Math.hypot(e.x-i.x,e.z-i.z));let a=Math.atan(2*se.wheelbase*Math.sin(r)/o);return t&&(a=-a),Nd(a*180/Math.PI*se.steeringRatio)},FM=(n,e,t)=>{if(typeof e=="number")return e;if("aim"in e)return Xo(n,e.aim(n),t==="reverse");const i=Fi(e.heading-n.car.heading);return Nd((t==="reverse"?-1:1)*UM*i)},zd=n=>{if(Math.abs(n)>=se.maxWheelDeg-Id)return n>0?"full left":"full right";const e=Math.round(Math.abs(n)/90);return e===0?"straight":`${["","¼","½","¾","1","1¼","1½"][Math.min(e,6)]} turn${e>4?"s":""} ${n>0?"left":"right"}`},qo=(n,e=2.5,t={i:0})=>i=>{const s=o=>Math.hypot(n[o].x-i.car.x,n[o].z-i.car.z);let r=t.near??0;for(;r<n.length-1&&s(r+1)<=s(r);)r++;for(t.near=r;t.i<n.length-1&&s(t.i)<e;)t.i++;return n[t.i]},To=se.wheelbase/Math.tan(se.maxWheelDeg/se.steeringRatio*Math.PI/180),qn=.12,uo=Wo/2,pr=1.15,fo=1,ru=(n,e)=>Math.abs(Fi(e-n.car.heading)),Gs=n=>({say:"Stop and pull the handbrake. Hold still to finish.",look:n,pedal:"stop",wheel:0,done:()=>!1}),OM=n=>{const e=n.bay,t=e.cz-e.hl,i=n.poles.filter(l=>Math.abs(l.z-t)<1e-9).reduce((l,c)=>c.x>l.x?c:l),s=Ed(),r=l=>fs(l.car,yn.eye,i),o=(l,c)=>{const h=c*qn,u={...l.car,x:l.car.x+Math.sin(l.car.heading)*h,z:l.car.z+Math.cos(l.car.heading)*h};return fs(u,yn.eye,i)},a=(()=>{const l={...n.spawn,speed:0,wheelDeg:0,gear:"D"};for(let c=l.x;c<i.x+10;c+=.01)if(fs({...l,x:c},yn.eye,i)>=s)return fs({...l,x:c+qn},yn.eye,i);return s})();return[{say:"Drive forward slowly, past the garage, about 2.3 m from its entrance line.",look:"The garage is on your right. Follow the wheel hint to hold the line.",pedal:"forward",wheel:{aim:l=>({x:l.car.x+6*Math.sin(n.spawn.heading),z:n.spawn.z})},done:l=>r(l)>=s-30},{say:"Keep going. Stop when the nearest garage pole reaches the back edge of the small rear side window.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>r(l)>=s},{say:"Stop. Keep the wheel straight.",pedal:"stop",wheel:0,done:su},{say:"Too far. Reverse slowly, wheel straight, until the pole is back at the window edge.",look:"Hold E to look over your right shoulder.",pedal:"reverse",wheel:0,done:l=>o(l,-1)<=a,skip:l=>r(l)<=a+fo},{say:"Not far enough. Creep forward until the pole reaches the window edge.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>o(l,1)>=a,skip:l=>r(l)>=a-fo},{say:"Stop. Keep the wheel straight.",pedal:"stop",wheel:0,done:su},{say:"Too far. Reverse slowly, wheel straight, until the pole is back at the window edge.",look:"Hold E to look over your right shoulder.",pedal:"reverse",wheel:0,done:l=>o(l,-1)<=a,skip:l=>r(l)<=a+fo},{say:"Not far enough. Creep forward until the pole reaches the window edge.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>o(l,1)>=a,skip:l=>r(l)>=a-fo},{say:"Stop. Turn the wheel fully right.",pedal:"stop",wheel:li,done:l=>ms(l,li)},{say:"Reverse slowly, wheel fully right.",look:"Right mirror: the near pole passes just outside the car.",pedal:"reverse",wheel:li,done:l=>ru(l,e.requiredHeading)<.35},{say:"Straighten the wheel gradually as the car lines up with the garage.",look:"Both mirrors: the side poles line up parallel to the car.",pedal:"reverse",wheel:{heading:e.requiredHeading},done:l=>ru(l,e.requiredHeading)<.02},{say:"Reverse straight in.",look:"Stop when the second side pole is level with your door mirror.",pedal:"reverse",wheel:{heading:e.requiredHeading},done:l=>bt(l.car).cz>=e.cz},Gs()]},ir={stopPastPole:.25,firstArcDeg:40,gapGain:1,nominalGap:.85,landShort:.25},kM=n=>{const e=n.bay,t=e.requiredHeading,i=e.cx+e.hl,s=e.cz-e.hw,r=c=>Fi(c.car.heading-t),o=c=>{const h=s-(c.car.z+se.width/2);return i+ir.stopPastPole+ir.gapGain*(h-ir.nominalGap)},a=ir.firstArcDeg*Math.PI/180;return[{say:"Drive forward slowly with the wheel straight, along the space.",look:"The space between the poles is on your right.",pedal:"forward",wheel:{heading:t},done:c=>c.car.x>=i-1.5},{say:"Stop when the front pole of the space is level with your rear wheel.",look:"Right mirror: the pole is in the middle of the mirror.",pedal:"forward",wheel:{heading:t},done:c=>c.car.x>=o(c)-qn},{say:"Stop. Turn the wheel fully right.",pedal:"stop",wheel:li,done:c=>ms(c,li)},{say:"Reverse slowly, wheel fully right.",look:"Tap E to look right. Stop when the front pole is level with the middle pillar (about 40°).",pedal:"reverse",wheel:li,done:c=>r(c)>=a-qn/To},{say:"Stop. Straighten the wheel.",pedal:"stop",wheel:0,done:c=>ms(c,0)},{say:"Reverse straight back, slowly.",look:"Tap E to look right. Stop when the front pole is level with your front wheel.",pedal:"reverse",wheel:0,done:c=>c.car.z+To*(1-Math.cos(r(c)))>=e.cz-ir.landShort},{say:"Stop. Turn the wheel fully left.",pedal:"stop",wheel:fr,done:c=>ms(c,fr)},{say:"Reverse slowly, wheel fully left.",look:"The front swings in. Stop when the car is parallel to the curb.",pedal:"reverse",wheel:fr,done:c=>r(c)<=qn/To},{say:"Stop. Straighten the wheel.",pedal:"stop",wheel:0,done:c=>ms(c,0)},{say:"Drive forward slowly to straighten up, to the middle of the space.",look:"Leave the same gap to the front and rear poles.",pedal:"forward",wheel:{heading:t},done:c=>bt(c.car).cx>=e.cx-qn,skip:c=>bt(c.car).cx>=e.cx-.6&&Math.abs(r(c))<.02},Gs()]},BM=4,HM=n=>{const e=n.course.poles,t=e[0].z,i=e[1].z-t,s=e[e.length-1].z,r=h=>h<t?-2:h<=s+i/2?-2*Math.cos(Math.PI*(h-t)/i):0,o=[];for(let h=n.spawn.z;h<=n.bay.cz+n.bay.hl;h+=.5)o.push({x:r(h),z:h});const a=qo(o,BM),l=h=>bt(h.car).cz,c=e.map((h,u)=>{const f=u%2===0?"left":"right";return{say:`Pole ${u+1} on your ${f}: steer round it, then back across the row.`,look:u===0?"Set the wheel to the hint and hold it; it changes as you go.":`Keep about 2 m from pole ${u+1}, wheels clear of the side lines.`,pedal:"forward",wheel:{aim:a,quarters:!0},done:d=>l(d)>=h.z}});return c.push({say:"Straighten up and drive into the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:{aim:a,quarters:!0},done:h=>l(h)>=n.bay.cz-qn}),c.push(Gs()),c},wi={wheelMargin:.4,bodyMargin:.75,lastLegMargin:.1},GM=n=>{const e=n.course,t=e.checkpoints[0],i=t.hw,s=t.cz+t.hl,r=t.cz-t.hl,o=Math.max(...e.poles.map(x=>Math.abs(x.x))),a=Math.max(...e.poles.map(x=>x.z)),l=n.bay.requiredHeading,c=x=>Nn(bt(x.car)),h=-i+uo+.5+Ar/2,u=x=>Math.abs(Fi(l-x.car.heading))<.35,f=(x,v=!1)=>{const L=v?wi.lastLegMargin:wi.wheelMargin,R=v?wi.lastLegMargin:wi.bodyMargin,b=i-uo-L,P=s-uo-L,S=o-ps-R,M=a-ps-R;return $n(x.car).some(A=>A.x>b||A.z>P)||c(x).some(A=>A.x>S||A.z>M)},d=x=>{const v=i-uo-wi.wheelMargin,L=o-ps-wi.bodyMargin,R=a-ps-wi.bodyMargin;return $n(x.car).some(b=>b.x<-v)||c(x).some(b=>b.x<-L||b.z>R)},g=(x,v)=>{const L=x==="left"?fr:li;return{say:`Stop. Turn the wheel fully ${x}.`,pedal:"stop",wheel:L,done:R=>ms(R,L),skip:v}},_=se.length-se.rearOverhang,m=x=>{const v=tn(x.car,Ge);return e.poles.some(L=>{const R=Math.hypot(L.x-v.x,L.z-v.z),b=Fi(Math.atan2(L.x-v.x,L.z-v.z)-x.car.heading);return Math.abs(b)<10*Math.PI/180&&Sd(_,R)>=pr/3})},p=(x,v=!1)=>({say:"Drive forward slowly, wheel fully left.",look:"Stop when the bonnet hides the bottom third of the pole straight ahead.",pedal:"forward",wheel:fr,done:L=>!v&&m(L)||f(L,v)||u(L),skip:x}),w=x=>({say:"Reverse slowly, wheel fully right.",look:"Stop when the line behind you sinks into the lower half of both mirrors, or sooner once the car points back down the road.",pedal:"reverse",wheel:li,done:v=>d(v)||u(v),skip:x});return[{say:"Drive into the dead end close to the right line, about half a metre from it.",look:"Right mirror: the line runs just beside your right wheels.",pedal:"forward",wheel:{aim:x=>({x:h,z:x.car.z+5})},done:x=>x.car.z>=r-1.5},{say:"Stop when your rear wheels reach the dashed line across the road.",look:"Hold Q to look out of your window at the dashed line.",pedal:"forward",wheel:{aim:x=>({x:h,z:x.car.z+5})},done:x=>x.car.z>=r-.5},g("left"),p(),g("right"),w(),g("left"),{...p(void 0,!0),say:"Drive forward slowly, wheel fully left, until the car faces back down the road.",look:"Then straighten the wheel."},g("right",u),w(u),g("left",u),p(u),{say:"Straighten up on the right side of the road and drive to the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:{aim:x=>({x:n.bay.cx,z:x.car.z-5})},done:x=>bt(x.car).cz<=n.bay.cz+qn},Gs()]},VM=n=>{const{path:e,marks:t}=mc(n),i={i:0},s=qo(e,4,i),r=l=>()=>(i.near??0)>=l,o={aim:s,quarters:!0},a="Keep to the middle of the lane, the same gap to the island line all round.";return[{say:"Drive in through the gap, wheel straight.",look:"Pole 1 (yellow band) is on the outer line ahead, to your right.",pedal:"forward",wheel:o,done:r(t.nearIn)},{say:"When pole 1 is level with your right mirror, turn left about 1¼ turns: round the near ring.",look:a,pedal:"forward",wheel:o,done:r(t.outLeave)},{say:"When pole 2 goes behind your left windscreen pillar, straighten up and cross the middle.",look:"Pole 2 (yellow band) is where the outer lines meet, ahead on your left.",pedal:"forward",wheel:o,done:r(t.farIn)},{say:"Turn right, about 1¼ turns, round the far ring.",look:a,pedal:"forward",wheel:o,done:r(t.backLeave)},{say:"When pole 2 is over your right front corner, straighten up and cross back.",look:"Back through the middle.",pedal:"forward",wheel:o,done:r(t.nearAgain)},{say:"Turn left, about 1¼ turns, round the near ring to the gap.",look:a,pedal:"forward",wheel:o,done:r(t.exit)},{say:"Straighten the wheel and drive straight out through the gap into the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:o,done:l=>pc(n.bay,bt(l.car))&&Math.abs(Fi(l.car.heading-n.bay.requiredHeading))<.1},Gs()]},mc=(n,e=Sn)=>{const t=rt,i=_t,s=(R,b)=>({x:R.x+e*Math.cos(b),z:R.z+e*Math.sin(b)}),r=(R,b)=>Array.from({length:R+1},(P,S)=>b(S/R)),o=(R,b,P)=>{let S={err:1/0,leave:0,arrive:0};for(let M=0;M<4e3;M++){const A=2*Math.PI*M/4e3,z=s(R,A),O={x:-Math.sin(A)*P,z:Math.cos(A)*P},k={x:b.x-z.x,z:b.z-z.z},D=k.x*O.x+k.z*O.z,N=P===1?k.x*O.z-k.z*O.x:-(k.x*O.z-k.z*O.x),X=Math.abs(N-e);if(D>0&&X<S.err){const V={x:z.x+O.x*D,z:z.z+O.z*D};S={err:X,leave:A,arrive:Math.atan2(V.z-b.z,V.x-b.x)}}}return S},a=o(t,i,-1),l=o(i,t,1),c=(R,b,P)=>r(Math.ceil(Math.abs(P-b)*e/.25),S=>s(R,b+(P-b)*S)),h=-Math.PI/2;let u=a.leave;for(;u>=h;)u-=2*Math.PI;let f=l.leave;for(;f<=a.arrive;)f+=2*Math.PI;let d=Rr;for(;d>=l.arrive;)d-=2*Math.PI;const g=n.bay.requiredHeading,_=[r(36,R=>({x:t.x+Ye.startBack*(1-R),z:t.z-e})),c(t,h,u),c(i,a.arrive,f),c(t,l.arrive,d)],m=s(t,d),p=Math.hypot(n.bay.cx-m.x,n.bay.cz-m.z)+8;_.push(r(Math.ceil(p/.25),R=>({x:m.x+Math.sin(g)*p*R,z:m.z+Math.cos(g)*p*R})));const w=_.flat(),x=R=>_.slice(0,R).reduce((b,P)=>b+P.length,0),v=x(2),L=x(3);return{path:w,marks:{nearIn:x(1)-6,outLeave:v-8,farIn:v,backLeave:L-8,nearAgain:L,exit:x(4)-8}}},WM=n=>{const e=n.course.stopLine,t=s=>e.z-Cs(s.car),i={aim:s=>({x:e.cx,z:s.car.z+4})};return[{say:"Drive up the ramp slowly with the wheel straight.",look:"The stop line, just past the left door mirror.",pedal:"forward",wheel:i,done:s=>t(s)<=3},{say:"Stop as soon as the stop line touches the bottom edge of the left mirror.",look:"That puts your bumper about 30 cm before the line.",pedal:"forward",wheel:i,done:s=>t(s)<=wd(se.length-se.rearOverhang)},{say:"Stop and pull the handbrake. Hold for a second.",look:"The car must not roll back.",pedal:"stop",wheel:0,done:s=>s.course?.hill?.phase!=="approach"},{say:"Keep the handbrake on and press the gas.",pedal:"forward",handbrake:!0,wheel:0,done:(s,r)=>s.time-r.time>=.6},{say:"Release the handbrake and drive on over the hill.",pedal:"forward",wheel:i,done:s=>s.course?.hill?.phase==="done"&&t(s)<-2},{say:"Drive on and stop in the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:i,done:s=>bt(s.car).cz>=n.bay.cz-qn},Gs()]},Fd={"reverse-in":OM,parallel:kM,snake:HM,turnaround:GM,"figure-eight":VM,"hill-start":WM},XM=n=>{const e=Fd[n.id];return e?new NM(e(n)):null},qM=n=>n.id in Fd;class YM{latched=null;lastWheel=null;apply(e,t,i){const s=this.lastWheel;if(this.lastWheel=t,i===void 0)return this.latched=null,e;this.latched&&!e[this.latched]&&(this.latched=null),s!==null&&s!==i&&t===i&&!this.latched&&e.steerLeft!==e.steerRight&&(this.latched=e.steerLeft?"steerLeft":"steerRight");const o={...e,detentDeg:i};return this.latched&&(o[this.latched]=!1),o}reset(){this.latched=null,this.lastWheel=null}}const ou=(n,e,t,i)=>{const s=[],r=new Set;for(const a of n)r.add(a-i),r.add(a+i);for(const a of r)s.push({x1:a,z1:e,x2:a,z2:t,width:.1});const o=[...r].sort((a,l)=>a-l);return s.push({x1:o[0],z1:t,x2:o[o.length-1],z2:t,width:.1}),s},$M=1,mr=(n,e,t,i)=>{const s=Math.max(1,Math.round(Math.hypot(t-n,i-e)/$M));return Array.from({length:s+1},(r,o)=>({x:n+(t-n)*o/s,z:e+(i-e)*o/s}))},Od=[-5.6,-2.8,0,2.8,5.6],kd=1.4,ZM=5.4,KM=3,au={hw:Zn.garage.bayWidth/2,depth:Zn.garage.bayLength},JM=n=>n-(pt.z-(se.length/2-se.rearOverhang)),Bd=(n,e,t,i)=>{const s=KM,r=s+t,o=s+t/2,a=JM(o);return{bay:{cx:0,cz:o,hw:e,hl:t/2,angle:0,requiredHeading:n},parkedCars:[],poles:[{x:-e,z:s},{x:e,z:s},...mr(-e,a,-e,r),...mr(e,a,e,r),...mr(-e,r,e,r).slice(1,-1)],solids:[{rect:{cx:0,cz:r+.55,hw:7.6,hl:.15,angle:0},height:.5,color:10132116}],paint:[...ou(i,s,r,e),...ou(Od,-4,-9,kd)]}},jM={id:"head-in",name:"Perpendicular · head-in",description:"Drive forward into the empty 90° bay. Good warm-up for lot parking.",spawn:{x:-8,z:-.5,heading:Math.PI/2},...Bd(0,kd,ZM,Od),par:{reversals:1,timeSec:60}},QM={id:"reverse-in",name:"Perpendicular · reverse-in",description:'Back into the empty 90° bay (the exam "garage") so the nose faces the aisle. Poles mark the entrance; hold E to look back over your shoulder.',spawn:{x:-8,z:-.25,heading:Math.PI/2},...Bd(Math.PI,au.hw,au.depth,[0]),par:{reversals:2,timeSec:80}},Ps=Zn.parallel,Qt=Ps.bayLength/2,bn=3.2,os=bn+Ps.bayWidth,Fa=bn-Ps.laneWidth,lu=-Qt,Oa=Qt+Ps.forwardZone,ey={id:"parallel",name:"Parallel parking",description:"Reverse into the curbside space between the poles at its ends. Watch the mirrors and the curb.",spawn:{x:lu-6,z:bn-.85-se.width/2,heading:Math.PI/2},bay:{cx:0,cz:bn+Ps.bayWidth/2,hw:Ps.bayWidth/2,hl:Qt,angle:Math.PI/2,requiredHeading:Math.PI/2},parkedCars:[],poles:[...mr(-Qt,bn,-Qt,os),...mr(Qt,bn,Qt,os)],solids:[{rect:{cx:0,cz:os+.2,hw:25,hl:.2,angle:0},height:.14,color:11578528}],paint:[{x1:lu-8,z1:Fa,x2:Oa+3,z2:Fa,width:.1},{x1:-Qt,z1:bn,x2:-Qt,z2:os,width:.1},{x1:Qt,z1:bn,x2:Qt,z2:os,width:.1},{x1:-Qt,z1:bn,x2:Qt,z2:bn,width:.1},{x1:Oa,z1:Fa,x2:Oa,z2:os,width:.1}],par:{reversals:3,timeSec:100}},Ls=[jM,QM,ey,...LM],Hd=1,Ol=.85,cu=.07,ty=4,kl=24,Bl=.03,ny=n=>{const e=ty/kl,t=[{x:0,z:0,theta:0}];let{x:i,z:s,theta:r}=t[0];for(let o=0;o<kl;o++)r-=Math.tan(n)/se.wheelbase*e,i-=Math.sin(r)*e,s-=Math.cos(r)*e,t.push({x:i,z:s,theta:r});return t},hu=(n,e,t,i)=>{for(let s=0;s<t.length;s++){const r=t[s],o=Math.cos(r.theta),a=-Math.sin(r.theta),l=i-cu/2,c=i+cu/2,h=e+s*6;n[h]=r.x+o*l,n[h+1]=Bl,n[h+2]=r.z+a*l,n[h+3]=r.x+o*c,n[h+4]=Bl,n[h+5]=r.z+a*c}},uu=(n,e)=>{const t=[];for(let i=0;i<n-1;i++){const s=e+i*2;t.push(s,s+1,s+2,s+1,s+3,s+2)}return t},ka=(n,e)=>{const t=new ze(new Un(Ol*2-.1,.07),new ui({color:e,transparent:!0,opacity:.9}));return t.rotation.x=-Math.PI/2,t.position.set(0,Bl-.005,-.9-n),t},iy=()=>{const n=new qt;n.add(ka(.5,14826286)),n.add(ka(1,16106818)),n.add(ka(2,3590510));const e=kl+1,t=new Float32Array(e*2*3*2),i=new Yt;i.setAttribute("position",new cn(t,3)),i.setIndex([...uu(e,0),...uu(e,e*2)]);const s=new ze(i,new ui({color:16765500,transparent:!0,opacity:.85,side:vn}));n.add(s),n.traverse(a=>a.layers.set(Hd));let r=1/0;const o=a=>{if(Math.abs(a-r)<.004)return;r=a;const l=ny(a);hu(t,0,l,Ol),hu(t,e*6,l,-Ol),i.attributes.position.needsUpdate=!0,i.computeBoundingSphere()};return o(0),{group:n,update:o}},sr=new U;function ln(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;sr.copy(e),sr[i]=0,sr.normalize();const c=.5*o/(o+a),h=1-sr.angleTo(n)/l;return Math.sign(sr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class hs extends Et{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(e,t,i,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,l=new U,c=new U(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new U,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=ln(g,l,"z","y",r,i),f[p+1]=1-ln(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-ln(g,l,"z","y",r,i),f[p+1]=1-ln(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-ln(g,l,"x","z",r,e),f[p+1]=ln(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-ln(g,l,"x","z",r,e),f[p+1]=1-ln(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-ln(g,l,"x","y",r,e),f[p+1]=1-ln(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=ln(g,l,"x","y",r,e),f[p+1]=1-ln(g,l,"y","x",r,t);break}}}const Ba=.32,gr=se.length-se.rearOverhang,An=-.9,rr=1.74,Hl=.95,Io=.82,sy=[[An,.3],[gr,.3],[gr,.6],[gr-Lo.behindBumper,Lo.y],[2.2,Io-.01],[An+.15,Io-.01],[An,.7]],ry=[[2.24,.8],[1.7,1.43],[.12,1.45],[An+.18,.98],[An+.18,Hl]],du=(n,e,t)=>{const i=new ad(n.map(([r,o])=>new ve(r,o))),s=new lc(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:2,curveSegments:1});return s.rotateY(-Math.PI/2),s.translate((e-2*t)/2,0,0),s.computeVertexNormals(),s},po=(n,e)=>{const t=new Rt;t.position.set(n,Ba,e);const i=new ze(new Pn(Ba,Ba,.24,20),new Mt({color:1250327,roughness:.95}));i.rotation.z=Math.PI/2,i.castShadow=!0;const s=new ze(new Pn(.17,.17,.25,14),new Mt({color:12172998,roughness:.3,metalness:.9}));return s.rotation.z=Math.PI/2,t.add(i,s),t},fu=(n,e,t,i)=>{const s=new ze(new hs(.42,.09,.08,2,.03),new Mt({color:n,emissive:n,emissiveIntensity:.6}));return s.position.set(e,i,t),s},oy=()=>{const n=new qt,e=new Mt({color:2303532,roughness:.75}),t=new Mt({color:3948875,roughness:.6}),i=new ze(new hc(.185,.022,10,32),e),s=new ze(new Pn(.05,.05,.04,16),t);s.rotation.x=Math.PI/2;const r=new ze(new Et(.34,.042,.026),t),o=new ze(new Et(.042,.17,.026),t);return o.position.y=-.09,n.add(i,s,r,o),n.position.set(.42,.97,2.08),n.rotation.x=-1,n},Ha=1.7,zt=pt,as=(n,e,t,i,s,r)=>{const o=new ze(new Et(.05,s-i,t-e),r);return o.position.set(n*et.trimX,(i+s)/2,(e+t)/2),o},ay=n=>{const e=new qt,t=2.15;for(const l of[-1,1]){const c=et.bPillar.z+et.bPillar.width/2;e.add(as(l,et.cPillarRearZ,c,.3,et.beltY,n)),e.add(as(l,c,t,.3,yd,n)),e.add(as(l,et.cPillarRearZ,Ha,et.roofY,et.roofY+.05,n));const h=(u,f)=>as(l,u-f/2,u+f/2,et.beltY,et.roofY,n);e.add(h(et.bPillar.z,et.bPillar.width),h(et.divider.z,et.divider.width)),e.add(as(l,et.quarterRearZ,et.divider.z,et.quarterTopY,et.roofY,n)),e.add(as(l,et.cPillarRearZ,et.quarterRearZ,et.beltY,et.roofY,n))}const i=new Mt({color:3356220,roughness:.95}),s=new ze(new Et(1.57,.06,Ha-et.cPillarRearZ),new Mt({color:7040627,roughness:.95}));s.position.set(0,et.roofY+.04,(Ha+et.cPillarRearZ)/2),e.add(s);const r=new ze(new Et(2*et.trimX,.02,t-et.cPillarRearZ),n);r.position.set(0,.84,(t+et.cPillarRearZ)/2),e.add(r);const o=new ze(new Et(1.4,.42,.1),i);o.position.set(0,.74,.2);const a=new ze(new Et(1.4,.14,.5),i);return a.position.set(0,.5,.48),e.add(o,a),e},Gd=(n,e=!1)=>{const t=new qt,i=new Mt({color:n,roughness:.42,metalness:.25});i.envMapIntensity=.6;const s=new Mt({color:1844012,roughness:.08,metalness:.9}),r=new Mt({color:2303530,roughness:.8}),o=new ze(du(sy,rr,.06),i);o.castShadow=!0,t.add(o);for(const _ of[-1,1]){const m=new ze(new Et(.05,Hl-Io+.02,2.2-(An+.15)),i);m.position.set(_*(rr/2-.03),(Hl+Io)/2,(2.2+An+.15)/2),t.add(m)}const a=new ze(new hs(rr,.3,.24,2,.05),i);a.position.set(0,.84,An+.11),a.castShadow=!0,t.add(a);const l=new ze(du(ry,1.58,.04),s);l.castShadow=!0,t.add(l);const c=new ze(new hs(1.46,.05,1.56,2,.02),i);c.position.set(0,1.465,.91),c.castShadow=!0,t.add(c);for(const _ of[-1,1]){const m=new ze(new Et(.045,.78,.055),r);m.position.set(_*Ui.x,Ui.y,Ui.z),m.rotation.x=-.71,t.add(m)}for(const[_,m]of[[gr,1],[An,-1]]){const p=new ze(new hs(rr+.02,.2,.14,2,.05),r);p.position.set(0,.4,_-m*.07),p.castShadow=!0,t.add(p)}const h=po(-.8,0),u=po(.8,0),f=po(-.8,se.wheelbase),d=po(.8,se.wheelbase);t.add(h,u,f,d);for(const _ of[-.58,.58])t.add(fu(16774344,_,gr-.16,.66)),t.add(fu(14492177,_,An-.005,.84));for(const _ of[-1,1]){const m=zt.x-zt.w/2,p=rr/2-.06,w=new ze(new Et(m-p,.06,.08),i);w.position.set(_*(m+p)/2,zt.y-.04,zt.z);const x=new ze(new hs(zt.w,zt.h,zt.d,2,.035),i);x.position.set(_*zt.x,zt.y,zt.z),x.castShadow=!0;const v=new ze(new Et(zt.w-.04,zt.h-.035,.01),s);v.position.set(_*zt.x,zt.y,zt.z-zt.d/2-.004),t.add(w,x,v)}const g={group:t,frontWheelPivots:[f,d]};if(e){const _=new Mt({color:2764600,roughness:.9}),m=new ze(new hs(1.55,.14,.2,2,.05),_);m.position.set(0,.92,1.99);const p=new ze(new Et(1.6,.07,.27),_);p.position.set(0,.825,2.185),t.add(m,p),t.add(ay(r));const w=oy();t.add(w),g.steeringWheel=w}return g},pu=se.length/2-se.rearOverhang,Ga={up:4.2,back:7.5},ly=26;class cy{cockpit;chase;top;view=1;lookTarget=0;leftTarget=0;look=0;lookLeft=0;constructor(e,t){this.cockpit=new Ft(72,t,.05,140),this.cockpit.position.set(Ge.x,Ge.y,Ge.z),this.cockpit.rotation.order="YXZ",this.cockpit.rotation.y=Math.PI,this.cockpit.rotation.x=-.09,e.add(this.cockpit),this.chase=new Ft(60,t,.1,200),this.top=new Ft(55,t,.1,200),this.top.up.set(0,0,-1)}setHeadTarget(e){this.lookTarget=e}setLookLeft(e){this.leftTarget=e?1:0}get headTurn(){return Math.max(this.look,this.lookLeft)}setView(e){this.view=e}get activeView(){return this.view}get active(){return this.view===1?this.cockpit:this.view===2?this.chase:this.top}setAspect(e){for(const t of[this.cockpit,this.chase,this.top])t.aspect=e,t.updateProjectionMatrix()}update(e,t){const i=(g,_,m)=>Math.abs(_-g)<1e-4?_:g+(_-g)*(1-Math.exp(-4*t/m));this.look=i(this.look,this.lookTarget,yn.seconds),this.lookLeft=i(this.lookLeft,this.leftTarget,Ua.seconds);const s=this.look,r=this.lookLeft,o=yn.eye,a=Ua.eye;this.cockpit.position.set(Ge.x+(o.x-Ge.x)*s+(a.x-Ge.x)*r,Ge.y+(o.y-Ge.y)*s+(a.y-Ge.y)*r,Ge.z+(o.z-Ge.z)*s+(a.z-Ge.z)*r),this.cockpit.rotation.y=Math.PI-(yn.yawDeg*s-Ua.yawDeg*r)*Math.PI/180,this.cockpit.rotation.x=-.09+.04*s;const l=Math.sin(e.heading),c=Math.cos(e.heading),h=e.x+l*pu,u=e.z+c*pu,f=new U(h-l*Ga.back,Ga.up,u-c*Ga.back),d=1-Math.exp(-5*t);this.chase.position.lengthSq()===0&&this.chase.position.copy(f),this.chase.position.lerp(f,d),this.chase.lookAt(h+l*1.5,.6,u+c*1.5),this.top.position.set(h,ly,u),this.top.lookAt(h,0,u)}}const mu=[pt.y,pt.z-Gt.glassBack],mo=(n,e,t)=>Math.min(t,Math.max(e,n)),Vd=[{id:"left",fov:Gt.fovDeg,aspect:Gt.aspect,rtSize:[512,342],flip:!0,pose:{pos:[pt.x,...mu],rotY:-.3,rotX:Gt.pitch},layout:(n,e)=>{const t=mo(n*.17,170,330);return{x:12,y:e*.58,w:t,h:t/1.5}}},{id:"right",fov:Gt.fovDeg,aspect:Gt.aspect,rtSize:[512,342],flip:!0,pose:{pos:[-1.03,...mu],rotY:Gt.yawOut,rotX:Gt.pitch},layout:(n,e)=>{const t=mo(n*.17,170,330);return{x:n-t-12,y:e*.58,w:t,h:t/1.5}}},{id:"backup",fov:62,aspect:1.62,rtSize:[820,506],flip:!0,pose:{pos:[0,.8,-.98],rotY:0,rotX:-.42},layout:n=>{const e=mo(n*.25,240,440);return{x:(n-e)/2,y:4,w:e,h:e/1.62}}},{id:"eagle",fov:55,aspect:1.35,rtSize:[560,415],flip:!1,layout:(n,e)=>{const t=mo(n*.2,220,420),i=t/1.35;return{x:(n-t)/2,y:e-i-8,w:t,h:i}}}],gu=(n,e,t)=>{const i=Vd.find(r=>r.id===n);if(!i)throw new Error(`unknown inset ${n}`);const s=i.layout(e,t);return{left:s.x-4,right:s.x+s.w+4,top:t-(s.y+s.h)-4,bottom:t-s.y+4}};class hy{views=[];overlayScene=new ic;overlayCamera=new dc(0,1,1,0,-10,10);constructor(e){for(const t of Vd){const i=new Ft(t.fov,t.aspect,.05,120);t.pose&&(i.position.set(...t.pose.pos),i.rotation.order="YXZ",i.rotation.y=t.pose.rotY,i.rotation.x=t.pose.rotX,e.add(i)),t.id==="backup"&&i.layers.enable(Hd);const s=new hi(t.rtSize[0],t.rtSize[1]);t.flip&&(s.texture.wrapS=bs,s.texture.repeat.x=-1,s.texture.offset.x=1);const r=new ze(new Un(1,1),new ui({color:658189})),o=new ze(new Un(1,1),new ui({map:s.texture}));r.position.z=-1,this.overlayScene.add(r,o),this.views.push({def:t,camera:i,rt:s,frame:r,image:o})}}setEagleTarget(e){const t=this.views.find(i=>i.def.id==="eagle");t&&(t.camera.position.set(e.cx,15,e.cz),t.camera.up.set(Math.sin(e.angle),0,Math.cos(e.angle)),t.camera.lookAt(e.cx,0,e.cz))}setSize(e,t){this.overlayCamera.right=e,this.overlayCamera.top=t,this.overlayCamera.updateProjectionMatrix();for(const i of this.views){const s=i.def.layout(e,t);i.image.position.set(s.x+s.w/2,s.y+s.h/2,0),i.image.scale.set(s.w,s.h,1),i.frame.position.set(s.x+s.w/2,s.y+s.h/2,-1),i.frame.scale.set(s.w+8,s.h+8,1)}}render(e,t,i){let s=!1;for(const r of this.views){const o=r.def.id==="backup"?i.backup:r.def.id==="eagle"?i.eagle:i.mirrors;r.image.visible=o,r.frame.visible=o,o&&(s=!0,e.setRenderTarget(r.rt),e.render(t,r.camera))}if(e.setRenderTarget(null),s){const r=e.autoClear;e.autoClear=!1,e.clearDepth(),e.render(this.overlayScene,this.overlayCamera),e.autoClear=r}}}const uy=n=>(n.userData.shared=!0,n),dy=n=>{for(const e of Object.values(n))e instanceof It&&!e.userData.shared&&e.dispose();n.dispose()},fy=n=>{n.removeFromParent(),n.traverse(e=>{if(e instanceof Ho&&e.dispose(),e instanceof ze){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)dy(i)}})},_u=90,py=()=>{const n=document.createElement("canvas");n.width=16,n.height=512;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#4f7cb2"),t.addColorStop(.55,"#8fb2d6"),t.addColorStop(.8,"#cfdfec"),t.addColorStop(1,"#e4ebf0"),e.fillStyle=t,e.fillRect(0,0,16,512);const i=new td(n);return i.colorSpace=Xt,i},my=()=>{const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#43464d",e.fillRect(0,0,256,256);for(let i=0;i<12e3;i++){const s=45+Math.floor(Math.random()*55);e.fillStyle=`rgba(${s},${s},${s+6},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,1.6,1.6)}for(let i=0;i<40;i++)e.fillStyle=`rgba(30,32,36,${.05+Math.random()*.08})`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,8+Math.random()*26,0,Math.PI*2),e.fill();const t=new td(n);return t.wrapS=bs,t.wrapT=bs,t.repeat.set(26,26),t.colorSpace=Xt,t.anisotropy=8,t},gy=()=>{const n=new ic;n.background=py(),n.fog=new nc(12834020,60,115),n.add(new eg(13624575,5263950,1.15));const e=new sg(16773853,1.8);e.position.set(28,42,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.radius=4;const t=e.shadow.camera;return t.left=-30,t.right=30,t.top=30,t.bottom=-30,t.far=110,n.add(e),n};let vu=null;const _y=()=>{vu??=uy(my());const n=new ze(new Un(_u,_u),new Mt({map:vu,roughness:.96}));return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n},vy=(n,e,t,i,s)=>{const r=t-n,o=i-e,a=Math.hypot(r,o),l=new ze(new Un(s,a),new Mt({color:14211282,roughness:.8}));return l.rotation.order="YXZ",l.rotation.y=Math.atan2(r,o),l.rotation.x=-Math.PI/2,l.position.set((n+t)/2,.012,(e+i)/2),l},xy=n=>{const{bay:e}=n,t=new qt,i=new ui({color:3590510,transparent:!0,opacity:.8}),s=.08,r=(o,a,l,c)=>{const h=new ze(new Un(l,c),i);h.rotation.x=-Math.PI/2,h.position.set(o,.02,a),t.add(h)};return r(-e.hw,0,s,e.hl*2),r(e.hw,0,s,e.hl*2),r(0,-e.hl,e.hw*2,s),r(0,e.hl,e.hw*2,s),t.position.set(e.cx,0,e.cz),t.rotation.y=e.angle,t},My=(n,e,t)=>{const i=new ze(new Et(n.hw*2,e,n.hl*2),new Mt({color:t,roughness:.9}));return i.position.set(n.cx,e/2,n.cz),i.rotation.y=n.angle,i.castShadow=!0,i.receiveShadow=!0,i},Va=(n,e)=>{const t=new qt,i=new ze(new Pn(.14,.2,1.6,8),new Mt({color:5916210}));i.position.y=.8;const s=new ze(new cc(1.3,1),new Mt({color:4946490,roughness:1}));return s.position.y=2.3,s.castShadow=!0,t.add(i,s),t.position.set(n,0,e),t},yy=(n,e,t,i,s,r)=>{const o=new ze(new Et(t,i,s),new Mt({color:r,roughness:.85}));return o.position.set(n,i/2,e),o.castShadow=!0,o},Sy=(n,e)=>{const t=n.course;if(!t)return null;const i=[n.spawn.x,n.bay.cx],s=[n.spawn.z,n.bay.cz];for(const r of t.boundaries)i.push(r.x1,r.x2),s.push(r.z1,r.z2);for(const r of t.poles)i.push(r.x),s.push(r.z);return{x0:Math.min(...i)-e,x1:Math.max(...i)+e,z0:Math.min(...s)-e,z1:Math.max(...s)+e}},wy=n=>{const e=new qt,t=(s,r,o,a)=>!n||s+o<n.x0||s-o>n.x1||r+a<n.z0||r-a>n.z1,i=[[0,32,40,9,10,12103842],[-32,-6,8,6,30,10134700],[30,14,10,7,16,11509136]];for(const[s,r,o,a,l,c]of i)t(s,r,o/2,l/2)&&e.add(yy(s,r,o,a,l,c));for(const[s,r]of[[-16,12],[16,12],[-20,-14],[22,-12],[12,22]])t(s,r,1.3,1.3)&&e.add(Va(s,r));if(n)for(let s=n.z0;s<=n.z1;s+=9)e.add(Va(n.x0-4,s),Va(n.x1+4,s));return e},xu=(n,e,t,i,s,r,o)=>{const a=Math.hypot(i-e,s-t),l=Math.max(1,Math.ceil(a/.25)),c=(s-t)/a,h=-(i-e)/a,u=[],f=[];for(let g=0;g<=l;g++){const _=e+(i-e)*g/l,m=t+(s-t)*g/l,p=en(n,_,m)+.02;for(const w of[-1,1])u.push(_+w*c*r/2,p,m+w*h*r/2);if(g<l){const w=g*2;f.push(w,w+2,w+1,w+1,w+2,w+3)}}const d=new Yt;return d.setAttribute("position",new At(u,3)),d.setIndex(f),d.computeVertexNormals(),new ze(d,o)},Ey=n=>{const e=Jx(n),t=n.cx-n.hw,i=n.cx+n.hw,s=[],r=(l,c,h,u)=>{s.push(...l,...c,...h,...l,...h,...u)};for(let l=0;l<e.length-1;l++){const c=e[l],h=e[l+1];r([t,c.y,c.z],[t,h.y,h.z],[i,h.y,h.z],[i,c.y,c.z]),r([t,0,c.z],[t,0,h.z],[t,h.y,h.z],[t,c.y,c.z]),r([i,0,c.z],[i,c.y,c.z],[i,h.y,h.z],[i,0,h.z])}const o=new Yt;o.setAttribute("position",new At(s,3)),o.computeVertexNormals();const a=new ze(o,new Mt({color:4736842,roughness:.95,side:vn}));return a.castShadow=!0,a.receiveShadow=!0,a},Wd=n=>{const e=new qt;if(n.length===0)return e;const t=[[new Pn(.12,.14,.05,16),2763566,.025,!1],[new Pn(.045,.045,1.1,12),16738842,.6,!0],[new Pn(.047,.047,.16,12),15921902,.95,!1]],i=new lt;for(const[s,r,o,a]of t){const l=new Ho(s,new Mt({color:r,roughness:r===2763566?.9:.6}),n.length);n.forEach((c,h)=>l.setMatrixAt(h,i.makeTranslation(c.x,o,c.z))),l.instanceMatrix.needsUpdate=!0,l.castShadow=a,e.add(l)}return e},by=n=>{const e=new Ho(new Pn(.05,.05,.22,12),new Mt({color:16765471,roughness:.5,emissive:3812352}),n.length),t=new lt;return n.forEach((i,s)=>e.setMatrixAt(s,t.makeTranslation(i.x,.95,i.z))),e.instanceMatrix.needsUpdate=!0,e},Ty=n=>{const e=new qt,t=n.hill?[n.hill]:[];n.hill&&e.add(Ey(n.hill));const i=new Mt({color:15132384,roughness:.8});for(const r of n.boundaries)e.add(xu(t,r.x1,r.z1,r.x2,r.z2,Wo,i));const s=n.stopLine;if(s){const r=new Mt({color:14170155,roughness:.7});e.add(xu(t,s.cx-s.hw,s.z,s.cx+s.hw,s.z,.3,r))}return e.add(Wd(n.poles)),n.refPoles?.length&&e.add(by(n.refPoles)),e},Xd=n=>{const e=new qt;e.add(_y());for(const t of n.paint)e.add(vy(t.x1,t.z1,t.x2,t.z2,t.width));e.add(xy(n));for(const t of n.solids)e.add(My(t.rect,t.height,t.color));for(const t of n.parkedCars){const{group:i}=Gd(t.color),s=se.length/2-se.rearOverhang;i.position.set(t.x-Math.sin(t.heading)*s,0,t.z-Math.cos(t.heading)*s),i.rotation.y=t.heading,e.add(i)}return n.course&&e.add(Ty(n.course)),n.poles&&e.add(Wd(n.poles)),e.add(wy(Sy(n,3))),e},Ay=1.5,Mu=1,Ry=.25,qd=(n,e=1/0)=>Math.min(n,Ay,e),Cy=n=>n<=Mu?n:Math.max(Mu,n-Ry);class Py{constructor(e=2e3,t=25,i=250){this.windowMs=e,this.slowMs=t,this.maxGapMs=i}windowMs;slowMs;maxGapMs;elapsed=0;frames=0;feed(e){if(e<=0||e>this.maxGapMs||(this.elapsed+=e,this.frames+=1,this.elapsed<this.windowMs))return!1;const t=this.elapsed/this.frames>this.slowMs;return this.elapsed=0,this.frames=0,t}reset(){this.elapsed=0,this.frames=0}}const Ly={1:"Cockpit",2:"Chase",3:"Top-down"},at=(n,e)=>{const t=document.createElement("div");return t.className=e,n.appendChild(t),t};class Dy{last=new Map;changed(e,t){return this.last.get(e)===t?!1:(this.last.set(e,t),!0)}}const Iy=n=>{const e=Math.round(Math.abs(n.wheelDeg)),t=Math.abs(xd(n)*180/Math.PI).toFixed(1);if(e===0)return["Wheel centered",""];const i=n.wheelDeg>0?"L":"R";return[`Wheel ${e}° ${i}`,`tires ${t}° ${i}`]};class Uy{root;status;gear;speed;steering;steeringWheel;steeringWheelPart;steeringSep;steeringTiresPart;settle;settleFill;viewLabel;flash;target;coach;coachStep;coachSay;coachLook;coachDo;layer;topCenter;steerLeftSlot;steerRightSlot;writes=new Dy;constructor(e){this.root=at(e,"hud hidden"),this.layer=this.root,this.flash=at(this.root,"flash"),this.status=at(this.root,"panel status");const t=at(this.root,"panel drive");this.gear=at(t,"gear"),this.speed=at(t,"speed");const i=at(this.root,"panel steer");this.steerLeftSlot=at(i,"steer-slot");const s=at(i,"steer-center");this.steerRightSlot=at(i,"steer-slot"),this.steeringWheel=at(s,"steer-wheel"),this.steeringWheel.innerHTML='<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="41" fill="none" stroke="#dfe3e9" stroke-width="9"/><line x1="12" y1="50" x2="88" y2="50" stroke="#dfe3e9" stroke-width="6"/><line x1="50" y1="50" x2="50" y2="88" stroke="#dfe3e9" stroke-width="6"/><circle cx="50" cy="50" r="9" fill="#dfe3e9"/><circle cx="50" cy="13" r="4" fill="#4a9fe8"/></svg>',this.steering=at(s,"steer-text"),this.steeringWheelPart=at(this.steering,"steer-part"),this.steeringSep=at(this.steering,"steer-sep"),this.steeringSep.textContent=" · ",this.steeringTiresPart=at(this.steering,"steer-part"),this.settle=at(this.root,"settle hidden"),at(this.settle,"settle-text").textContent="In position — hold still";const r=at(this.settle,"settle-bar");this.settleFill=at(r,"settle-fill");const o=at(this.root,"top-right");this.viewLabel=at(o,"panel view-label"),this.topCenter=at(this.root,"top-center"),this.target=at(this.topCenter,"target-chip hidden"),this.coach=at(this.topCenter,"coach hidden"),this.coachStep=at(this.coach,"coach-step"),this.coachSay=at(this.coach,"coach-say"),this.coachLook=at(this.coach,"coach-look"),this.coachDo=at(this.coach,"coach-do");const a=at(o,"panel help");a.innerHTML="<b>↑/W</b> drive · <b>↓/S</b> brake → reverse · <b>←/→</b> steer · <b>Space</b> handbrake · <b>Q</b> look left · <b>E</b> tap: right pillar, hold: look back · <b>1/2/3</b> view · <b>B</b> bird's-eye · <b>C</b> reverse camera · <b>H</b> hints · <b>R</b> restart · <b>Esc</b> menu"}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}update(e,t,i=!0){const{car:s}=e,r=e.time,o=Math.floor(r/60),a=Math.floor(r%60).toString().padStart(2,"0"),l=e.course?` · Line touches ${e.course.lineTouches} · Pole hits ${e.course.poleHits}`:"",c=this.writes,h=`<b>${e.scenario.name}</b><br>Time ${o}:${a} · Collisions ${e.collisions} · Gear changes ${e.reversals}${l}`;c.changed("status",h)&&(this.status.innerHTML=h),c.changed("gear",s.gear)&&(this.gear.textContent=s.gear,this.gear.classList.toggle("reverse",s.gear==="R"));const u=`${(Math.abs(s.speed)*3.6).toFixed(1)} km/h`;c.changed("speed",u)&&(this.speed.textContent=u);const[f,d]=Iy(s);c.changed("wheel",f)&&(this.steeringWheelPart.textContent=f),c.changed("tires",d)&&(this.steeringTiresPart.textContent=d,this.steeringSep.classList.toggle("hidden",d===""));const g=`rotate(${-s.wheelDeg}deg)`;c.changed("wheelRot",g)&&(this.steeringWheel.style.transform=g);const _=vM(e);c.changed("settle",String(_))&&(this.settle.classList.toggle("hidden",_===0),this.settleFill.style.width=`${_*100}%`);const m=Ld(e),p=e.scenario.course,w=p&&e.course&&!(Td(p,e.course)&&m.dist<=12),x=document.documentElement.classList.contains("touch");x&&this.status.parentElement!==this.topCenter?this.topCenter.insertBefore(this.status,this.target):!x&&this.status.parentElement!==this.root&&this.root.appendChild(this.status);const v=Math.min(Math.max(window.innerWidth*.2,220),420)/1.35,L=i?`${v+18}px`:x?"6px":"12px";if(c.changed("top",L)&&(this.topCenter.style.top=L),this.target.classList.toggle("warn",!!e.course?.onLine),w&&p&&e.course){this.target.classList.remove("hidden","good");const P=`⌖ ${hM(p,e.course,s)}`;c.changed("target",P)&&(this.target.textContent=P)}else if(this.target.classList.toggle("hidden",m.dist>12),m.dist<=12){const P=(m.angleDev*180/Math.PI).toFixed(0),S=`⌖ ${m.dist.toFixed(1)} m · ${P}° off`;c.changed("target",S)&&(this.target.textContent=S),this.target.classList.toggle("good",m.aligned)}const R=`${Ly[t]} view`;c.changed("view",R)&&(this.viewLabel.textContent=R);const b=String(e.flash*1.4);c.changed("flash",b)&&(this.flash.style.opacity=b)}updateCoach(e,t){const i=this.writes;if(i.changed("coachShown",String(e!==null))&&this.coach.classList.toggle("hidden",e===null),!e)return;const s=document.documentElement.classList.contains("touch"),r=`Step ${e.step} of ${e.total} · H hides hints`;i.changed("coachStep",r)&&(this.coachStep.textContent=r);const o=s?yu(e.say):e.say;i.changed("coachSay",o)&&(this.coachSay.textContent=o);const a=e.look?`Look: ${s?yu(e.look):e.look}`:"";i.changed("coachLook",a)&&(this.coachLook.textContent=a,this.coachLook.classList.toggle("hidden",a===""));const l=FM(t,e.wheel,e.pedal),c=`${Ny[e.pedal]}${e.handbrake?" + handbrake":""} · Wheel: ${zd(l)}`;i.changed("coachDo",c)&&(this.coachDo.textContent=c);const h=String(Ud(t,l));i.changed("coachOk",h)&&this.coachDo.classList.toggle("ok",h==="true")}}const yu=n=>n.replace(/\bTap E\b/g,"Tap the right eye button").replace(/\bHold E\b/g,"Hold the right eye button"),Ny={forward:"Drive forward",reverse:"Reverse",stop:"Stop"},zy="https://api.web3forms.com/submit",Yd=2e3,$d=200,Zd=()=>"e8291eea-7d84-484b-86ee-595fd750b32a".trim(),Fy=(n,e)=>({access_key:n,subject:"Driving test simulator feedback",from_name:"Driving test simulator",message:e.message.trim().slice(0,Yd),contact:e.contact.trim().slice(0,$d)||"—",page:e.page,user_agent:e.userAgent,botcheck:e.botcheck});async function Oy(n,e,t=(i,s)=>fetch(i,s)){if(e.message.trim()==="")return"empty";if(e.botcheck)return"sent";try{const i=await t(zy,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Fy(n,e))});return i.ok&&(await i.json()).success?"sent":"error"}catch{return"error"}}function Ir(n,e){try{window.goatcounter?.count({path:n,title:e,event:!0})}catch{}}const ky=()=>Zd()!=="";function By(){if(document.querySelector(".feedback-overlay"))return;const n=Zd(),e=document.createElement("div");e.className="overlay feedback-overlay",e.innerHTML=`
    <form class="menu-panel feedback-panel" novalidate>
      <h2>Feedback</h2>
      <p class="subtitle">Bug, idea or a missing exercise — tell me. No account needed.</p>
      <textarea name="message" rows="6" maxlength="${Yd}" required
        placeholder="Your message"></textarea>
      <input name="contact" type="text" maxlength="${$d}" autocomplete="email"
        placeholder="Email or Telegram, if you want a reply (optional)" />
      <input name="botcheck" type="checkbox" class="feedback-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <p class="feedback-status" role="status"></p>
      <div class="buttons">
        <button type="button" class="btn" data-act="cancel">Cancel</button>
        <button type="submit" class="btn primary" data-act="send">Send</button>
      </div>
    </form>`;const t=e.querySelector("form"),i=t.elements.namedItem("message"),s=t.elements.namedItem("contact"),r=t.elements.namedItem("botcheck"),o=t.querySelector(".feedback-status"),a=t.querySelector('[data-act="send"]'),l=t.querySelector('[data-act="cancel"]'),c=()=>e.remove(),h=(f,d="")=>{o.textContent=f,o.className=`feedback-status ${d}`},u=f=>{f.stopPropagation(),f.type==="keydown"&&f.key==="Escape"&&c()};e.addEventListener("keydown",u),e.addEventListener("keyup",u),e.addEventListener("click",f=>{f.target===e&&c()}),l.addEventListener("click",c),t.addEventListener("submit",async f=>{if(f.preventDefault(),i.value.trim()===""){h("Please write a message first.","err"),i.focus();return}a.disabled=!0,h("Sending…"),await Oy(n,{message:i.value,contact:s.value,botcheck:r.checked,page:location.href,userAgent:navigator.userAgent})==="sent"?(Ir("feedback/sent","Feedback sent"),h("Thank you! Message sent.","ok"),i.disabled=!0,s.disabled=!0,a.classList.add("hidden"),l.textContent="Close"):(h("Could not send — check your connection and try again.","err"),a.disabled=!1)}),document.body.appendChild(e),i.focus()}const Hy=(n,e,t,i,s=[])=>{n.innerHTML="",n.className="overlay";const r=document.createElement("div");r.className="menu-panel",r.innerHTML=`<h1>🚗 Driving test simulator</h1><p class="subtitle">Train the driving-test exercises and parking from the driver's seat — mirrors, look-back and every fault scored.</p>`,i&&r.appendChild(i);const o=(l,c)=>{if(c.length===0)return;const h=document.createElement("h3");h.className="menu-section",h.textContent=l;const u=document.createElement("div");u.className="card-grid";for(const f of c){const d=document.createElement("button");d.className="card";const g=qM(f)?'<em class="card-badge">step-by-step hints</em>':"";d.innerHTML=`<b>${f.name}</b><span>${f.description}</span>${g}`,d.addEventListener("click",()=>t(f)),u.appendChild(d)}r.append(h,u)};if(s.length>0){const l=document.createElement("h3");l.className="menu-section",l.textContent="Learn";const c=document.createElement("div");c.className="card-grid";for(const h of s){const u=document.createElement("button");u.className="card card-learn",u.innerHTML=`<b>🎬 ${h.title}</b><span>${h.text}</span><em class="card-badge">lesson</em>`,u.addEventListener("click",h.open),c.appendChild(u)}r.append(l,c)}o("Parking",e.filter(l=>!l.course)),o("Driving-test exercises",e.filter(l=>l.course));const a=document.createElement("p");if(a.className="menu-help",a.innerHTML="<b>↑/W</b> drive · <b>↓/S</b> brake, then reverse · <b>←/→</b> steer (3.1 turns lock-to-lock, 15.5:1 ratio) · <b>Space</b> handbrake · <b>1/2/3</b> camera views · <b>Q</b> (hold) look left out the driver's window · <b>E</b> tap: look at the right A-pillar (tap again to return), hold: look over right shoulder · <b>B</b> bird's-eye view on/off · <b>C</b> reverse camera and guidelines on/off · <b>H</b> step-by-step hints on/off",r.appendChild(a),ky()){const l=document.createElement("button");l.className="btn feedback-btn",l.textContent="💬 Send feedback",l.addEventListener("click",By),r.appendChild(l)}n.appendChild(r)},Gy=n=>{n.innerHTML="",n.className="overlay hidden"},Kd=Math.tan(Gt.fovDeg*Math.PI/360),Vy=Kd*Gt.aspect,Jd=(n,e)=>{const t=e.x-n.x,i=e.z-n.z,s=Math.sin(n.heading),r=Math.cos(n.heading);return{x:t*r-i*s,y:e.y??0,z:t*s+i*r}},gs=(n,e)=>{const t=n==="left"?1:-1,i={x:t*pt.x,y:pt.y,z:pt.z-Gt.glassBack},s=Gt.yawOut,r=Gt.pitch,o=t*Math.sin(s),a=-Math.cos(s),l=t*Math.cos(s),c=Math.sin(s),h={x:o*Math.cos(r),y:Math.sin(r),z:a*Math.cos(r)},u={x:-o*Math.sin(r),y:Math.cos(r),z:-a*Math.sin(r)},f={x:e.x-i.x,y:e.y-i.y,z:e.z-i.z},d=f.x*h.x+f.y*h.y+f.z*h.z,g=(f.x*l+f.z*c)/d/Vy,_=(f.x*u.x+f.y*u.y+f.z*u.z)/d/Kd;return{X:g,Y:_,depth:d}},Wa={centerY:.31,radius:.4},jd=(n,e=16)=>{const t=(n==="left"?1:-1)*(se.width/2),i=[];for(let s=0;s<=e;s++){const r=Math.PI*s/e;i.push({x:t,y:Wa.centerY+Wa.radius*Math.sin(r),z:Wa.radius*Math.cos(r)})}return i},Qd=1/120,Wy=2,Gl=7200,Xy=.01,qy=.31,ef=.2,Yy=.12,gc=n=>{const e=n.bay,t=e.cz-e.hl,i=n.poles.filter(a=>Math.abs(a.z-t)<1e-9),s=Math.sign(Math.sin(n.spawn.heading))||1,r=[...i].sort((a,l)=>s*(l.x-a.x)),o=r[0];return{pole1:o,pole2:r[1],backCorner:{x:o.x,z:e.cz+e.hl},windowEdgeDeg:Ed()}},Uo=(n,e)=>fs(n,yn.eye,e.pole1),Ln=(n,e)=>{const t=bt(n),i=Math.sin(t.angle),s=Math.cos(t.angle),r=e.x-t.cx,o=e.z-t.cz,a=r*s-o*i,l=r*i+o*s,c=Math.max(0,Math.abs(a)-t.hw),h=Math.max(0,Math.abs(l)-t.hl);return Math.hypot(c,h)-.12},$y=(n,e)=>-((e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading))-se.width/2-Yy,Zy=1.15,Ky=(n,e)=>{const t=(e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading),i=Ge.x-t,s=Ge.x+et.trimX,r=Ge.y-(Ge.y-yd)*i/s;return Math.max(0,Math.min(1,r/Zy))},Vl=(n,e)=>(e.x-n.x)*Math.sin(n.heading)+(e.z-n.z)*Math.cos(n.heading),Jy=(n,e)=>{const t=gs("right",jd("right").at(-1));return gs("right",Jd(n,e.backCorner)).Y-t.Y},No=(n,e)=>{const t=Math.sign(n.speed);return{...n,x:n.x+Math.sin(n.heading)*e*t,z:n.z+Math.cos(n.heading)*e*t}},Ds=n=>n.speed*n.speed/(2*se.handbrakeDecel),tf=(n,e)=>Math.abs(Math.atan2(Math.sin(e-n.heading),Math.cos(e-n.heading))),nf=(n,e,t,i)=>({throttle:!i&&e==="forward",reverse:!i&&e==="reverse",handbrake:i||e==="stop",steerLeft:t>n.wheelDeg+4,steerRight:t<n.wheelDeg-4,detentDeg:t}),jy=(n,e)=>Math.abs(n.wheelDeg-e)<1,Is=n=>{const e=[[],[],[],[]];return n.forEach((t,i)=>{i%4&&i!==n.length-1||$n(t).forEach((s,r)=>e[r].push(s))}),e};class Kn{constructor(e){this.s=e}s;steps=[];ghostKinds=[];add(e){const t=[this.s.car];let i=!1,s=0;for(;s<Gl;s++){const r=this.s.car;if(e.pedal==="stop"||i){if(Math.abs(r.speed)<Xy&&jy(r,e.wheel))break}else if(e.until?.(r)){i=!0;continue}this.s={...Bi(this.s,nf(r,e.pedal,e.wheel,i),Qd),settle:0,complete:!1},s%Wy===0&&t.push(this.s.car)}if(s>=Gl)throw new Error(`lesson step never finished: ${e.say}`);return t[t.length-1]!==this.s.car&&t.push(this.s.car),this.steps.push({say:e.say,look:e.look,pedal:e.pedal,wheel:e.wheel,frames:t,overlays:e.overlays??[]}),this.ghostKinds.push(e.ghost),this}hold(e,t,i,s,r=this.s.car.wheelDeg){return this.steps.push({say:e,look:t,pedal:"stop",wheel:r,frames:[this.s.car],overlays:i}),this.ghostKinds.push(s),this}finish(e,t,i,s,r,o){return this.steps.forEach((a,l)=>{const c=this.ghostKinds[l];if(c==="future"){const h=this.steps.slice(l+1).find(u=>u.pedal!=="stop");h&&(a.ghost={lines:Is(h.frames),tone:"ok"})}c==="keep"&&(a.ghost=nS(this.sessionAt(a),o??0,a.wheel))}),{id:e,title:t,summary:i,tone:s,scenario:this.s.scenario,refs:r,steps:this.steps,collisions:this.s.collisions}}sessionAt(e){const t=e.frames[e.frames.length-1];return{...Hs(this.s.scenario),car:{...t,speed:0}}}}const Qy=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),s=n.x-e.cx,r=n.z-e.cz,o=s*i-r*t,a=s*t+r*i;return Math.hypot(Math.max(0,Math.abs(o)-e.hw),Math.max(0,Math.abs(a)-e.hl))},eS=(n,e)=>{const t=e.poles??[],i=t.length?t.reduce((o,a)=>Ln(n,a)<Ln(n,o)?a:o):null,s=Nn(bt(n));let r=i?{gap:Ln(n,i),at:{x:i.x,z:i.z}}:null;for(const o of e.solids)for(const a of s){const l=Qy(a,o.rect);(!r||l<r.gap)&&(r={gap:l,at:a})}return r.at},tS=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading),s=e.x-n.x,r=e.z-n.z,o=s*i-r*t,a=s*t+r*i;return{x:Math.max(-1.8/2,Math.min(se.width/2,o)),z:Math.max(-.9,Math.min(se.length-se.rearOverhang,a))}},sf=(n,e,t,i)=>{if(Math.abs(e)<1)return;const s=e/se.steeringRatio*Math.PI/180,r=Su(n,se.wheelbase/Math.tan(s),0),a=Nn(bt(n)).map(l=>({center:r,radius:Math.hypot(l.x-r.x,l.z-r.z),hit:!1}));if(t&&i){const l=tS(i,t),c=Su(n,l.x,l.z);a.push({center:r,radius:Math.hypot(c.x-r.x,c.z-r.z),hit:!0})}return a},Su=(n,e,t)=>{const i=Math.sin(n.heading),s=Math.cos(n.heading);return{x:n.x+e*s+t*i,z:n.z-e*i+t*s}},nS=(n,e,t=-558)=>{let i=n;const s=[i.car];for(let r=0;r<Gl;r++){const o=Bi(i,nf(i.car,"reverse",t,!1),Qd);if(o.collisions>i.collisions||o.car.speed===0&&r>10){const a=eS(i.car,n.scenario);return{lines:Is([...s,i.car]),tone:"bad",hit:a,circles:sf(n.car,t,a,i.car)}}if(i=o,s.push(i.car),tf(i.car,e)<.02)break}return{lines:Is(s),tone:"bad"}},En=-558,rf=2.1,_c=n=>n.bay.cz-n.bay.hl-rf-se.width/2,Yo=(n,e)=>{const t=Hs(n);return{...t,car:{...t.car,z:e}}},iS="Look over your right shoulder at the small rear side window.",vc=(n,e,t,i,s,r)=>{n.add({say:"Drive slowly past the garage, wheel straight.",look:"Look right through the passenger window as pole 1 passes.",pedal:"forward",wheel:0,until:o=>Uo(o,e)>=90,overlays:[{kind:"door"}]}),n.hold("Check your distance: how much of pole 1 does the door hide?",t,[{kind:"door"}]),n.add({say:"Keep going. Watch pole 1 over your right shoulder.",look:iS,pedal:"forward",wheel:0,until:o=>Uo(o,e)>=e.windowEdgeDeg+i,overlays:[{kind:"sight"}]}),n.hold(s,r,[{kind:"sight"}])},sS="About a third of it: the right distance (a quarter to a bit over a third is fine).",xc=(n,e,t,i=!0)=>{const s=e.bay.requiredHeading;return n.add({say:"Turn the wheel fully right while standing.",look:"The dashed lines are the wheel tracks. Full lock does the steering from here.",pedal:"stop",wheel:En,ghost:"future"}),i&&n.hold("Why this point works: the small rear side window sits right above the right rear wheel.","At full lock that wheel runs on the small inner circle. Pole 1 is just inside it, and the car never comes closer to the center, so it misses pole 1.",[{kind:"circle"}],"future"),n.add({say:"Reverse slowly. Keep the wheel fully right.",look:"Right mirror: pole 1 passes just outside the rear corner.",pedal:"reverse",wheel:En,until:r=>tf(r,s)<.012,ghost:"future"}),n.hold("Stop when the car is straight in the garage.","Both mirrors: the garage side lines run parallel to the car, equal gaps on both sides.",[{kind:"parallel"}]),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,overlays:[{kind:"parallel"}]}),n.add({say:"Reverse straight in, slowly.",look:"Right mirror: watch the end of the side line move down toward the rear wheel arch.",pedal:"reverse",wheel:0,until:r=>Jy(No(r,Ds(r)),t)<=0,overlays:[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}]}),n.hold("Stop when, in the right mirror, the end of the side line is level with the back of the rear wheel arch.","Where the arch meets the sill. You see it with or without poles. The car is in, centered. Done.",[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}],void 0,0),n},rS=(n,e=_c(n))=>{const t=gc(n),i=new Kn(Yo(n,e));return i.hold("Reverse into the garage on your right. Pole 1 is the near entrance pole, pole 2 the far one.",`You drive past the garage about ${rf} m from the entrance poles, then reverse in.`,[]),vc(i,t,sS,0,"Stop when pole 1 reaches the back edge of the small rear side window.","The dashed line is your view to pole 1. It now meets the window edge: this is the start point."),xc(i,n,t).finish("garage-ok","Reverse into the garage","The reference run: one stop point, full lock, straighten, depth.","ok",t)},oS=4,of=-.8,af=(n,e=_c(n),t=oS,i=of,s=ef,r)=>{const o=gc(n),a=n.bay.requiredHeading,l=new Kn(Yo(n,e));return r?vc(l,o,r.verdict,t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From further out the usual point is too late. Watch what happens."):l.add({say:"Mistake: the car drove too far past the garage before stopping.",look:"Pole 1 is already past the back edge of the small rear side window.",pedal:"forward",wheel:0,until:c=>Uo(c,o)>=o.windowEdgeDeg+t,overlays:[{kind:"sight"}]}),l.add({say:"Full right lock, as usual.",pedal:"stop",wheel:En}),l.add({say:"Reverse slowly, wheel fully right.",look:"Right mirror: pole 1 comes closer to the side of the car.",pedal:"reverse",wheel:En,until:c=>Vl(c,o.pole1)<0&&$y(c,o.pole1)<=s,overlays:[{kind:"danger"}]}),l.hold("Stop! Pole 1 is about to disappear behind the body in the right mirror.","Red path: keep going and the side of the car hits pole 1.",[{kind:"danger"},{kind:"mirror",side:"right",mark:"pole1"}],"keep"),l.add({say:"Straighten the wheel while standing.",look:"With the wheel straight the gap to pole 1 stays the same as you reverse.",pedal:"stop",wheel:0,overlays:[{kind:"bumper"}]}),l.add({say:"Reverse straight, slowly.",look:"Right mirror: pole 1 slides along the side of the car toward the rear bumper.",pedal:"reverse",wheel:0,until:c=>Vl(c,o.pole1)>=i,overlays:[{kind:"bumper"}]}),l.hold("Stop when pole 1 has just passed the rear corner and stands beside the rear bumper.","Now full lock swings the rear past pole 1. Overshot by much more? Drive forward and start again.",[{kind:"bumper"}]),xc(l,n,o,!1).finish(r?.id??"garage-too-far",r?.title??"Mistake: drove too far",r?.summary??"Pole 1 comes at the rear corner. Straighten, reverse until it is beside the bumper, then swing in.","mistake",o,a)},aS=4,lf=.3,cf=1,hf=(n,e=_c(n),t=aS,i=lf,s=cf,r)=>{const o=gc(n),a=new Kn(Yo(n,e));return r?vc(a,o,r.verdict,-t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From this close the usual point is too early. Watch what happens."):a.add({say:"Mistake: the car stopped too early, before the reference point.",look:"Pole 1 has not reached the back edge of the small rear side window yet.",pedal:"forward",wheel:0,until:l=>Uo(l,o)>=o.windowEdgeDeg-t,overlays:[{kind:"sight"}]}),a.add({say:"Full right lock, as usual.",pedal:"stop",wheel:En}),a.add({say:"Reverse slowly, wheel fully right.",look:"Look back through the rear window: pole 2 comes at the left rear corner.",pedal:"reverse",wheel:En,until:l=>Ln(No(l,Ds(l)),o.pole2)<=i,overlays:[{kind:"danger",pole:2}]}),a.hold("Stop! The left rear corner is about to hit pole 2.","You see it looking back through the rear window, not in the mirror: the pole is behind the car. Red path: keep going and it hits.",[{kind:"danger",pole:2}],"keep"),a.add({say:"Turn the wheel fully left while standing.",look:"Forward on left lock swings the rear away from pole 2 and straightens the car a little.",pedal:"stop",wheel:-En,overlays:[{kind:"gap"}]}),a.add({say:"Drive forward slowly, wheel fully left.",look:"Look back: the gap between the left rear corner and pole 2 opens up.",pedal:"forward",wheel:-En,until:l=>Ln(No(l,Ds(l)),o.pole2)>=s,overlays:[{kind:"gap"}]}),a.hold("Stop when there is about 1 m between the left rear corner and pole 2.","Now full right lock and reverse again. Much too early? Drive forward and start again.",[{kind:"gap"}]),xc(a,n,o,!1).finish(r?.id??"garage-too-early",r?.title??"Mistake: started too early",r?.summary??"The left rear corner comes at pole 2. Stop, full left lock, forward until 1 m clear, then swing in again.","mistake",o,n.bay.requiredHeading)},lS=1.6,cS=2.6,hS=(n,e=lS)=>hf(n,n.bay.cz-n.bay.hl-e-se.width/2,0,lf,cf,{id:"garage-close",title:"Approach: too close",summary:"Passed the garage too close: the usual point is too early, the car comes at pole 2. Same fix as starting too early.",verdict:"Almost half of it: you are too close (normal: about a third). Better: drive on, come back wider."}),uS=(n,e=cS)=>af(n,n.bay.cz-n.bay.hl-e-se.width/2,0,of,ef,{id:"garage-wide",title:"Approach: too wide",summary:"Passed the garage too wide: the usual point is too late, the car comes at pole 1. Same fix as driving too far.",verdict:"Only a fifth of it: you are too far out (normal: about a third). Better: drive on, come back closer."}),dS=n=>[rS(n),af(n),hf(n),hS(n),uS(n)],Mc=1/120,uf=2,df=28800,yc=5.54,ff=3,fS=(n,e)=>{let t=1/0;for(const i of e.course?.poles??[])Math.min(Math.hypot(i.x-rt.x,i.z-rt.z),Math.hypot(i.x-_t.x,i.z-_t.z))<Sn-1&&(t=Math.min(t,Ln(n,i)));return t},pS=(n,e=yc)=>{const{path:t,marks:i}=mc(n,e),s={i:0},r=qo(t,ff,s),o=Hs(n);let a={...o,car:{...o.car,z:t[0].z}};const l=[a.car],c=[0];let h=1/0;for(let w=0;w<df&&!a.complete;w++){const x=pc(n.bay,bt(a.car)),v=Xo(a,r(a),!1),L={throttle:!x,reverse:!1,handbrake:x,steerLeft:v>a.car.wheelDeg+4,steerRight:v<a.car.wheelDeg-4};a=Bi(a,L,Mc),l.push(a.car),c.push(s.near??0),h=Math.min(h,fS(a.car,n))}const u=(w,x)=>{const v=t[w];let L=x,R=1/0;for(let b=x;b<l.length;b++){const P=Math.hypot(l[b].x-v.x,l[b].z-v.z);if(P<R)R=P,L=b;else if(R<1&&P>R+2)break}return L},f=u(i.nearIn+6,0),d=u(i.farIn-1,f+1),g=u(i.farIn,d+1),_=u(i.nearAgain-1,g+1),m=u(i.nearAgain,_+1),p=u(i.exit+8,m+1);return{cars:l,at:{turnIn:f,crossOut:d,farIn:g,crossBack:_,nearAgain:m,exit:p},faults:a.collisions+(a.course?.poleHits??0)+(a.course?.lineTouches??0),islandGap:h}},pf=()=>({pole1:Dd,pole2:Fl}),mS=n=>{const e=pS(n),{cars:t,at:i}=e,s=t.length-1,r=(c,h)=>{const u=[];for(let f=c;f<=h;f+=uf)u.push(t[f]);return u[u.length-1]!==t[h]&&u.push(t[h]),u},o=[],a=(c,h,u,f,d=[])=>{o.push({say:u,look:f,pedal:"forward",wheel:t[h].wheelDeg,frames:r(c,h),overlays:d})},l=(c,h,u,f,d)=>{const g={say:h,look:u,pedal:"stop",wheel:t[c].wheelDeg,frames:[t[c]],overlays:f};d&&(g.ghost={lines:Is(r(d[0],d[1])),tone:"ok"}),o.push(g)};return l(0,"The figure eight, hugging the outer poles: pass poles 1 and 2 close with the side of the car.","Both rings come out as wide as they can be, so the car stays further off the island than in the middle of the lane. You only watch the front of the car.",[{kind:"eightRefs"}],[0,i.turnIn]),a(0,i.turnIn,"Drive in through the gap, right side close to pole 1.","Pole 1 (yellow band) is on the outer line ahead, to your right.",[{kind:"eightMirror",side:"right",pole:1}]),l(i.turnIn,"Pole 1 is level with your right mirror: turn left, about 1¼ turns.","Start winding just before, so the wheel is there by now. The right side slides past pole 1.",[{kind:"eightMirror",side:"right",pole:1}],[i.turnIn,i.crossOut]),a(i.turnIn,i.crossOut,"Round the near ring, wide: close to the outer poles.","Watch pole 2 come onto your left front corner.",[{kind:"eightCornerSight",side:"left"}]),l(i.crossOut,"Pole 2 comes in just left of your left front corner: straighten up.","Between the corner and the windscreen pillar. Drive at it: the left side slides past.",[{kind:"eightCornerSight",side:"left"}],[i.crossOut,i.farIn]),a(i.crossOut,i.farIn,"Cross the middle, left side close to pole 2.",void 0,[{kind:"eightPillarSight",side:"left"}]),l(i.farIn,"Pole 2 goes behind your left windscreen pillar: turn right, about 1¼ turns.","It is beside your left front wheel now. Round the far ring, wide again.",[{kind:"eightPillarSight",side:"left"}],[i.farIn,i.crossBack]),a(i.farIn,i.crossBack,"Round the far ring, close to the outer poles.","Watch pole 2 come onto your right front corner.",[{kind:"eightCornerSight",side:"right"}]),l(i.crossBack,"Your right front corner comes onto pole 2: straighten up.","Drive with pole 2 on the corner: the right side slides past it.",[{kind:"eightCornerSight",side:"right"}],[i.crossBack,i.nearAgain]),a(i.crossBack,i.nearAgain,"Cross back, right side close to pole 2.",void 0,[{kind:"eightPillarSight",side:"right"}]),l(i.nearAgain,"Pole 2 comes beside your right front wheel: turn left, about 1¼ turns.","Seen from the seat it is near the right windscreen pillar. Round the near ring to the gap, wide.",[{kind:"eightPillarSight",side:"right"}],[i.nearAgain,i.exit]),a(i.nearAgain,i.exit,"Round the near ring to the gap.",void 0),l(i.exit,"At the gap: straighten the wheel and drive straight out.","Stop when the whole car is inside the box.",[],[i.exit,s]),a(i.exit,s,"Straight out through the gap into the box.",void 0),l(s,"Inside the box, straight. Done.",void 0,[]),{id:"eight-ok",title:"Figure eight",summary:"Hug the outer poles: pole 1 at the right mirror, turn left; pole 2 just left of the left corner, straighten; behind the left pillar, turn right; right corner on pole 2, straighten; beside the right front wheel, turn left.",tone:"ok",scenario:n,refs:pf(),steps:o,collisions:e.faults}},gS=Ye.inner,wu=Ye.outer,mf=.1,gf=.05,_f=(n,e,t)=>{const[i,s]=$n(n),r=t?i:s;return Math.hypot(r.x-e.x,r.z-e.z)-gS-mf-gf},vf=(n,e,t,i)=>{const[,,s,r]=$n(n),o=t?r:s,a=wu-gf-(Math.hypot(o.x-e.x,o.z-e.z)+mf);let l=1/0;for(const c of i.course?.poles??[])Math.hypot(c.x-e.x,c.z-e.z)>wu&&(l=Math.min(l,Ln(n,c)));return Math.min(a,l)},_S=n=>Math.atan(se.wheelbase/n)*180/Math.PI*se.steeringRatio,go=_S(yc),Ei=(n,e,t,i)=>{const s=[n.s.car];for(let r=0;r<df&&!i(n.s,r);r++){const o=n.s.car,a=e(n.s),l={throttle:o.speed<t-.03,reverse:o.speed>t+.08,handbrake:!1,steerLeft:a>o.wheelDeg+4,steerRight:a<o.wheelDeg-4};n.s=Bi(n.s,l,Mc),n.aim(n.s),n.cars.push(n.s.car),r%uf===0&&s.push(n.s.car)}return s.push(n.s.car),s},vS=(n,e,t)=>{let i=n;const s=[i.car];for(let r=0;r<1440;r++){const o={throttle:!0,reverse:!1,handbrake:!1,steerLeft:e>i.car.wheelDeg+4,steerRight:e<i.car.wheelDeg-4},a=Bi(i,o,Mc);if((a.course?.lineTouches??0)>(i.course?.lineTouches??0)||(a.course?.poleHits??0)>(i.course?.poleHits??0)||a.collisions>i.collisions){const c=$n(a.car),h=t.course?.boundaries??[];let u=c[0],f=1/0;for(const d of c)for(const g of h){const _=g.x2-g.x1,m=g.z2-g.z1,p=Math.max(0,Math.min(1,((d.x-g.x1)*_+(d.z-g.z1)*m)/(_*_+m*m))),w=Math.hypot(d.x-(g.x1+_*p),d.z-(g.z1+m*p));w<f&&(f=w,u=d)}for(const d of t.course?.poles??[]){const g=Ln(a.car,d)+.1;g<f&&(f=g,u={x:d.x,z:d.z})}return{lines:Is([...s,a.car]),tone:"bad",hit:u,circles:sf(n.car,e,u,a.car)}}i=a,s.push(i.car)}return{lines:Is(s),tone:"bad"}},xS=10,MS={inner:22,outer:30},Eu=(n,e,t=120,i=e==="inner"?.5:.2,s=e==="inner"?"straight":270)=>{const{path:r,marks:o}=mc(n,yc),a={i:0},l=qo(r,ff,a),c=Hs(n),h={s:{...c,car:{...c.car,z:r[0].z}},cars:[],aim:l},u=D=>Xo(D,l(D),!1),f=se.maxFwdSpeed,d=.5,g=e==="inner",_=_t,m=!1,p=D=>g?_f(D,_,m):vf(D,_,m,n),w=[],x=(D,N,X,V,re="forward")=>{w.push({say:N,look:X,pedal:re,wheel:D[D.length-1].wheelDeg,frames:D,overlays:V})},v=(D,N,X,V)=>{w.push({say:D,look:N,pedal:"stop",wheel:h.s.car.wheelDeg,frames:[h.s.car],overlays:X,ghost:V})},L={kind:"ringGap",ring:"far",side:g?"inner":"outer"},R=g?[L,{kind:"mirror",side:"right",mark:"rearWheel"}]:[L],b=D=>()=>(a.near??0)>=D,P=o.farIn;Ei(h,u,f,b(P-xS)),h.cars.length=0,v(g?"Mistake: too much wheel in the far ring.":"Mistake: too little wheel in the far ring.",g?"The car turns tighter than the ring and drifts in: the right rear wheel heads for the island line.":"The car turns wider than the ring and drifts out: the left front corner heads for the outer line.",[{kind:"eightRefs"}]);const S=Ei(h,u,f,b(P+MS[e])),M=p(h.s.car);x(S,"Past pole 2 into the far ring, about 1¼ turns right.",g?"Right mirror: a strip of asphalt between the rear wheel and the island line. It should stay like this all round.":"Over the bonnet: the outer line runs well left of the left front corner. It should stay like this all round.",R);const A=g?-(go+t):-(go-t);x(Ei(h,()=>A,f,D=>p(D.car)<=i),g?"Too much wheel: the car tightens the turn.":"Too little wheel: the car runs wide.",g?"Right mirror: the island line creeps toward the rear wheel, the strip of asphalt gets thin.":"Over the bonnet: the outer line slides toward the left front corner.",R),v(g?"The right rear wheel is close to the island line.":"The left front corner is close to the outer line.",g?"Right mirror: the line is almost at the wheel. Red: keep this wheel and the rear wheel runs onto the line (it cuts inside the front one).":"Over the bonnet: the line is about to go under the corner. Red: keep this wheel and the front runs onto the line and the outer poles.",R,vS(h.s,A,n));const z=s==="straight"?0:A-s,O=g?Math.min(M-.1,i+.2):M-.05;let k=1/0;return g||x(Ei(h,()=>A,d,D=>D.car.speed<=d+.03),"Fix: first slow down to a crawl.","Slower, the wheel turns quicker than the car moves: the same hands give a tighter turn sooner.",R),x(Ei(h,()=>z,d,(D,N)=>{const X=p(D.car);return k=Math.min(k,X),N>60&&(X>=O||s==="straight"&&X>=k+.04)}),g?"Fix: straighten the wheel to move off the center, and slow to a crawl.":"Now add about ¾ turn more to the right.",g?"With the wheel straight the car runs out toward the outer line, away from the island. The rear wheel still creeps in for a moment: act early.":"Toward full lock: the car tightens the turn and the front comes off the outer line. The path depends on the wheel, not the speed.",R),v(g?"The rear wheel stops creeping in: the strip of asphalt starts to widen.":"The front comes off the outer line. Wind back to about 1¼ turns right and keep it.",g?"Right mirror: keep that strip of asphalt from here on.":"Over the bonnet: the line is clear of the corner again. Keep it there.",R),g&&x(Ei(h,()=>-(go+40),d,(D,N)=>N>30&&Math.abs(D.car.wheelDeg+go+40)<5),"Wind back to about 1¼ turns right, still crawling.","The car hardly moves while your hands work: it turns without running out to the outer line.",R),x(Ei(h,u,f,(D,N)=>N>360),"Back on the line: carry on as usual.",void 0,R),{id:g?"eight-inner":"eight-outer",title:g?"Mistake: near the island":"Mistake: near the outer line",summary:g?"Too much wheel after pole 2: the rear wheel cuts toward the island. Straighten, crawl, then wind back to 1¼ turns.":"Too little wheel after pole 2: the front runs wide toward the outer line. Slow down, add ¾ turn, then back to 1¼ turns.",tone:"mistake",scenario:n,refs:pf(),viewBox:{cx:_t.x,cz:_t.z-.8,w:2*(Ye.outer+1.6),h:2*(Ye.outer+1.6)+1.6},steps:w,collisions:h.s.collisions+(h.s.course?.poleHits??0)+(h.s.course?.lineTouches??0)}},yS=n=>[mS(n),Eu(n,"inner"),Eu(n,"outer")],SS=1/120,wS=2,ES=14400,bS=se.length-se.rearOverhang,Wl=wd(bS),_o={y:pt.y-pt.h/2,z:pt.z-pt.d/2,xIn:pt.x-pt.w/2,xOut:pt.x+pt.w/2},TS=()=>{const n=Ge.y/(Ge.y-_o.y);return{z:Ge.z+(_o.z-Ge.z)*n,xIn:Ge.x+(_o.xIn-Ge.x)*n,xOut:Ge.x+(_o.xOut-Ge.x)*n}},AS=.15,RS=n=>-Math.max(...n.course.boundaries.map(t=>-Math.min(t.x1,t.x2)))+Wo/2+bd+AS+Ar/2,CS=(n,e)=>n.course.stopLine.z-Cs(e),PS=n=>{const e=RS(n),t=Hs(n);let i={...t,car:{...t.car,x:e,z:-2.2,heading:0,speed:0,wheelDeg:0}};const s=[],r=u=>CS(n,u),o=(u,f)=>{const d=[i.car];for(let g=0;g<ES&&!f(i,g);g++){const _=i.car,m={throttle:u.throttle??(u.speed!==void 0&&_.speed<u.speed),reverse:!1,handbrake:u.handbrake??!1,steerLeft:!1,steerRight:!1};i={...Bi(i,m,SS),settle:0,complete:!1},g%wS===0&&d.push(i.car)}return d.push(i.car),d},a=(u,f,d,g,_)=>{s.push({say:f,look:d,pedal:g,wheel:0,frames:u,overlays:_})},l=(u,f,d)=>{s.push({say:u,look:f,pedal:"stop",wheel:0,frames:[i.car],overlays:d})},c=.45;l("Hill start: stop no more than 1 m before the stop line.","Keep to the right of the ramp, right tyres about 15 cm off the edge line: then the stop line reaches under the left mirror. From the middle it ends before the mirror and you have to guess.",[{kind:"hillSight"},{kind:"hillPlan",compare:!0}]),a(o({speed:c},u=>r(u.car)<=2.5),"Up the ramp slowly, wheel straight, close to the right edge.","Look at the ground just under the left mirror.","forward",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({speed:c},u=>r(u.car)<=Wl),"Watch the line come up under the mirror.","The line from your eyes past the bottom of the mirror shows where you look.","forward",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({handbrake:!0},(u,f)=>f>120*1.2&&Math.abs(u.car.speed)<.01),"The stop line is right under the mirror: stop and pull the handbrake.",`That leaves the bumper about ${Math.round(Wl*100)} cm before the line (allowed: up to 1 m). Hold still for a second.`,"stop",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({handbrake:!0,throttle:!0},(u,f)=>f>120*.6),"Keep the handbrake on and press the gas.","The car must not roll back when you let go.","stop",[{kind:"hillSight"}]),a(o({speed:c},u=>r(u.car)<-1),"Release the handbrake and drive on over the line.",void 0,"forward",[{kind:"hillSight"}]);const h=i.course?.hill;return{id:"hill-ok",title:"Stop at the line",summary:"Keep right, stop when the stop line shows up right under the left mirror.",tone:"ok",view:"side",scenario:n,refs:{pole1:{x:0,z:0},pole2:{x:0,z:0}},steps:s,collisions:i.collisions+(i.course?.lineTouches??0)+(h?.missedStop?1:0)+(h&&h.rollback>=.3?1:0)}},LS=n=>[PS(n)],ht={sky:"#2b3038",ground:"#3b4048",ramp:"#6d737c",rampTop:"#9aa1ab",car:"#2f6fce",carEdge:"#173b70",glass:"#9fd0ff",wheel:"#14161a",stop:"#ff5d5d",sight:"#ffe066",guide:"#6be38a",paint:"#e9edf2",label:"#0f1115"},DS=[[-.9,.28],[-.92,.85],[-.55,1.05],[.05,1.42],[1.55,1.45],[2.3,.97],[3.35,.8],[3.6,.62],[3.6,.28]],IS=[[-.35,1.06],[.12,1.36],[1.5,1.39],[2.15,.99],[-.35,.99]];function US(n,e,t,i,s){const r=e.width,o=e.height,a=t.scenario,l=a.course.hill,c=a.course.stopLine,h=[l],u=Math.min(...t.steps.map(A=>A.frames[0].z))-se.rearOverhang-.6,f=c.z+2.6,d=Math.min(r/(f-u),o*.5/2.7),g=o*.94,_=(A,z)=>[(A-u)*d+(r-(f-u)*d)/2,g-z*d],m=A=>i.overlays.some(z=>z.kind===A),p=A=>A.forEach((z,O)=>O?n.lineTo(...z):n.moveTo(...z)),w=(A,z,O,k=0)=>{const D=Math.max(12,Math.min(17,.3*d));n.font=`600 ${D}px system-ui, sans-serif`;const N=n.measureText(z).width+D*.7,X=Math.max(4,Math.min(r-N-4,A[0]-N/2)),V=A[1]+k*D-D*.75;n.fillStyle=O,n.beginPath(),n.roundRect(X,V,N,D*1.5,D*.4),n.fill(),n.fillStyle=ht.label,n.fillText(z,X+D*.35,V+D*1.08)};n.fillStyle=ht.sky,n.fillRect(0,0,r,o),n.fillStyle=ht.ground,n.fillRect(0,g,r,o-g);const x=[];for(let A=l.z0;A<=Tr(l);A+=.1)x.push(_(A,en(h,l.cx,A)));x.push(_(Tr(l),0)),n.beginPath(),p([_(l.z0,0),...x]),n.closePath(),n.fillStyle=ht.ramp,n.fill(),n.beginPath(),p([_(u-5,0),_(l.z0,0),...x,_(f+20,0)]),n.strokeStyle=ht.rampTop,n.lineWidth=Math.max(2,.05*d),n.stroke();const v=A=>_(A,en(h,l.cx,A));n.lineCap="butt",n.beginPath(),p([v(c.z-c.maxGap),v(c.z)]),n.strokeStyle="rgba(107,227,138,0.75)",n.lineWidth=Math.max(4,.09*d),n.stroke(),n.beginPath(),p([v(c.z),v(c.z+.3)]),n.strokeStyle=ht.stop,n.lineWidth=Math.max(6,.14*d),n.stroke(),w(v(c.z+1.4),"stop line",ht.stop,1.6);const L=Vo(h,s),R=en(h,s.x,s.z),b=(A,z)=>_(s.z+A*Math.cos(L)-z*Math.sin(L),R+A*Math.sin(L)+z*Math.cos(L)),P=(A,z,O)=>{n.beginPath(),p(A.map(([k,D])=>b(k,D))),n.closePath(),n.fillStyle=z,n.fill(),O&&(n.strokeStyle=O,n.lineWidth=Math.max(1.5,.03*d),n.stroke())};P(DS,ht.car,ht.carEdge),P(IS,ht.glass);for(const A of[0,se.wheelbase])n.beginPath(),n.arc(...b(A,.31),.31*d,0,Math.PI*2),n.fillStyle=ht.wheel,n.fill();n.beginPath(),n.arc(...b(Ge.z-.08,Ge.y+.02),.13*d,0,Math.PI*2),n.fillStyle="#e8c4a0",n.fill();const S=pt;if(P([[S.z-S.d/2,S.y-S.h/2],[S.z+S.d/2,S.y-S.h/2],[S.z+S.d/2,S.y+S.h/2],[S.z-S.d/2,S.y+S.h/2]],"#1d2a3c",ht.sight),m("hillSight")){const A=TS(),z=b(Ge.z,Ge.y),O=s.z+A.z*Math.cos(L),k=b(A.z,0),D=c.z-Cs(s),N=Math.abs(O-(c.z+.15))<.2,X=N?ht.guide:ht.sight;n.beginPath(),n.setLineDash([.18*d,.12*d]),p([z,k]),n.strokeStyle=X,n.lineWidth=Math.max(2,.045*d),n.stroke(),n.setLineDash([]);for(const V of[z,k])n.beginPath(),n.arc(...V,Math.max(4,.07*d),0,Math.PI*2),n.fillStyle=X,n.fill();if(w(z,"eye",ht.sight,-1.6),w(k,N?"under the mirror: stop":"under the mirror",X,-3.2),D>-.2&&D<2.6){const V=Cs(s),re=v(V),me=v(c.z);n.beginPath(),p([[re[0],re[1]+.2*d],[me[0],me[1]+.2*d]]),n.strokeStyle=ht.paint,n.lineWidth=2,n.stroke(),w([(re[0]+me[0])/2,(re[1]+me[1])/2+.2*d],`${Math.max(0,Math.round(D*100))} cm`,ht.paint,1.6)}}const M=i.overlays.find(A=>A.kind==="hillPlan");if(M){const z=Math.min(o*.4,330);if(M.compare){const O=c.z-Wl-(se.length-se.rearOverhang),k=Math.min((r-30)/2,z*1.5),D=(r-2*k-10)/2;Xa(n,[D,10,k,z],t,{...s,x:l.cx,z:O},"middle of the ramp: the line ends before the mirror",ht.stop),Xa(n,[D+k+10,10,k,z],t,{...s,z:O},"kept right: the line reaches under the mirror",ht.guide)}else{const O=Math.min(r-20,z*1.5);Xa(n,[(r-O)/2,10,O,z],t,s,"your view to the left",ht.sight)}}}function Xa(n,[e,t,i,s],r,o,a,l){const c=r.scenario,h=c.course.hill,u=c.course.stopLine,f=[h],d=Vo(f,o),g=en(f,o.x,o.z),_=pt,m=Math.atan2(_.x-Ge.x,_.z-Ge.z),p=Math.atan2(_.y-_.h/2-Ge.y,Math.hypot(_.x-Ge.x,_.z-Ge.z))-.05,w=i/2/Math.tan(70*Math.PI/360),x={x:Math.sin(m)*Math.cos(p),y:Math.sin(p),z:Math.cos(m)*Math.cos(p)},v={x:-Math.cos(m),y:0,z:Math.sin(m)},L={x:-Math.sin(m)*Math.sin(p),y:Math.cos(p),z:-Math.cos(m)*Math.sin(p)},R=ae=>{const Ne={x:ae.x-Ge.x,y:ae.y-Ge.y,z:ae.z-Ge.z};return{x:Ne.x*v.x+Ne.y*v.y+Ne.z*v.z,y:Ne.x*L.x+Ne.y*L.y+Ne.z*L.z,z:Ne.x*x.x+Ne.y*x.y+Ne.z*x.z}},b=.05,P=ae=>[e+i/2+ae.x/ae.z*w,t+s/2-ae.y/ae.z*w],S=ae=>{const Ne=R(ae);return Ne.z<b?null:P(Ne)},M=ae=>{const Ne=ae.map(R),ke=[];return Ne.forEach((Ue,T)=>{const pe=Ne[(T+1)%Ne.length];if(Ue.z>=b&&ke.push(Ue),Ue.z>=b!=pe.z>=b){const ne=(b-Ue.z)/(pe.z-Ue.z);ke.push({x:Ue.x+(pe.x-Ue.x)*ne,y:Ue.y+(pe.y-Ue.y)*ne,z:b})}}),ke.map(P)},A=(ae,Ne,ke)=>{const Ue=ke-o.z,T=Ne-g;return{x:ae-o.x,y:-Ue*Math.sin(d)+T*Math.cos(d),z:Ue*Math.cos(d)+T*Math.sin(d)}},z=(ae,Ne,ke)=>A(ae,Ne,ke),O=(ae,Ne,ke,Ue=1.5)=>{const T=M(ae);T.length<3||(n.beginPath(),T.forEach((pe,ne)=>ne?n.lineTo(...pe):n.moveTo(...pe)),n.closePath(),n.fillStyle=Ne,n.fill(),ke&&(n.strokeStyle=ke,n.lineWidth=Ue,n.stroke()))};n.save(),n.beginPath(),n.roundRect(e,t,i,s,8),n.fillStyle="#4a5260",n.fill(),n.clip();const k=o.z+1,D=o.z+30;O([z(-20,0,k),z(40,0,k),z(40,0,D),z(-20,0,D)],"#3b4048");const N=[],X=[],V=[];for(let ae=k;ae<=Math.min(D,Tr(h));ae+=.25)V.push(ae);for(const ae of V)N.push(z(h.cx-h.hw,en(f,h.cx,ae),ae));for(const ae of[...V].reverse())N.push(z(h.cx+h.hw,en(f,h.cx,ae),ae));for(const ae of V)X.push(z(h.cx+h.hw,en(f,h.cx,ae),ae));for(const ae of[...V].reverse())X.push(z(h.cx+h.hw,0,ae));O(X,"#555b64"),O(N,"#6d737c");for(const ae of c.course.boundaries){if(ae.x1<h.cx)continue;const Ne=V.map(ke=>S(z(ae.x1,en(f,h.cx,ke)+.01,ke)));n.beginPath(),Ne.forEach((ke,Ue)=>ke&&(Ue?n.lineTo(...ke):n.moveTo(...ke))),n.strokeStyle=ht.paint,n.lineWidth=2,n.stroke()}const re=ae=>en(f,h.cx,ae)+.01;O([z(u.cx-u.hw,re(u.z),u.z),z(u.cx+u.hw,re(u.z),u.z),z(u.cx+u.hw,re(u.z+.3),u.z+.3),z(u.cx-u.hw,re(u.z+.3),u.z+.3)],ht.stop);const me=.98;O([{x:.9,y:me,z:.6},{x:.9,y:me,z:2.35},{x:.9,y:-1,z:2.35},{x:.9,y:-1,z:.6}],ht.car,ht.carEdge),O([{x:.88,y:me,z:2.35},{x:.8,y:.8,z:3.4},{x:-.8,y:.8,z:3.4},{x:-.88,y:me,z:2.35}],ht.car,ht.carEdge),O([{x:.86,y:me,z:2.38},{x:.82,y:me,z:2.22},{x:.66,y:1.42,z:1.62},{x:.7,y:1.42,z:1.78}],"#14181f");const I=_.x-_.w/2,$=_.x+_.w/2,oe=_.y-_.h/2,G=_.y+_.h/2,Z=_.z-_.d/2;O([{x:I,y:oe,z:Z},{x:$,y:oe,z:Z},{x:$,y:G,z:Z},{x:I,y:G,z:Z}],"#1d2a3c",ht.sight,2);const le=S({x:I,y:oe,z:Z}),he=S({x:$,y:oe,z:Z});if(le&&he){const ae=he[0]-le[0],Ne=he[1]-le[1];n.beginPath(),n.setLineDash([7,5]),n.moveTo(le[0]-ae*40,le[1]-Ne*40),n.lineTo(le[0]+ae*40,le[1]+Ne*40),n.strokeStyle="rgba(255,224,102,0.8)",n.lineWidth=1.5,n.stroke(),n.setLineDash([])}n.restore();const ge=Math.max(11,Math.min(14,i/30));n.font=`600 ${ge}px system-ui, sans-serif`;const Fe=n.measureText(a).width+ge*.7;n.fillStyle=l,n.beginPath(),n.roundRect(e+6,t+6,Fe,ge*1.5,ge*.4),n.fill(),n.fillStyle=ht.label,n.fillText(a,e+6+ge*.35,t+6+ge*1.08)}const NS=60,zS=1400,te={ground:"#3b4048",paint:"#e9edf2",wall:"#8a9099",pole:"#ff8a1f",car:"#2f6fce",carEdge:"#173b70",glass:"#9fd0ff",quarter:"#ffe066",wheel:"#14161a",ok:"#7fd1ff",bad:"#ff5d5d",sight:"#ffe066",guide:"#6be38a",label:"#0f1115"},FS=(n,e,t)=>{n.innerHTML="",n.className="overlay";const i=document.createElement("div");i.className="learn-panel",i.innerHTML=`
    <div class="learn-head">
      <h2></h2>
      <div class="learn-tabs" role="tablist"></div>
      <button class="btn learn-close" aria-label="Back to menu">✕</button>
    </div>
    <div class="learn-stage"><canvas></canvas></div>
    <div class="learn-caption">
      <div class="learn-meta"><span class="learn-step"></span><span class="learn-chip learn-pedal"></span><span class="learn-chip learn-wheel"></span></div>
      <p class="learn-say"></p>
      <p class="learn-look"></p>
    </div>
    <div class="learn-controls">
      <button class="btn learn-back">◀ Back</button>
      <button class="btn learn-replay">⟲ Replay</button>
      <button class="btn learn-auto" aria-pressed="false">Auto</button>
      <button class="btn primary learn-next">Next ▶</button>
    </div>`,n.appendChild(i);const s=k=>i.querySelector(k);s(".learn-head h2").textContent=t.title;const r=s("canvas"),o=s(".learn-stage"),a=r.getContext("2d"),l=s(".learn-tabs"),c=s(".learn-next"),h=s(".learn-back"),u=s(".learn-auto");let f=0,d=0,g=performance.now(),_=!1,m=0,p=e[0].refs,w=bu(e[0]);const x=()=>e[f],v=()=>x().steps[d],L=()=>d===x().steps.length-1;e.forEach((k,D)=>{const N=document.createElement("button");N.className="learn-tab",N.setAttribute("role","tab"),N.textContent=k.title,N.addEventListener("click",()=>R(D)),l.appendChild(N)});function R(k){f=k,p=x().refs,w=bu(x()),l.querySelectorAll(".learn-tab").forEach((D,N)=>{D.classList.toggle("active",N===k),D.classList.toggle("mistake",e[N].tone==="mistake"),D.setAttribute("aria-selected",String(N===k))}),b(0)}function b(k){d=Math.max(0,Math.min(x().steps.length-1,k)),g=performance.now(),m=0;const D=v();s(".learn-step").textContent=`Step ${d+1} / ${x().steps.length}`,s(".learn-say").textContent=D.say;const N=s(".learn-look");N.textContent=D.look??"",N.classList.toggle("hidden",!D.look),h.disabled=d===0;const X=e[f+1];c.textContent=L()?X?`${X.title} ▶`:"Practice it ▶":"Next ▶"}function P(){if(!L())return b(d+1);if(f<e.length-1)return R(f+1);S(),t.onPractice(x().scenario)}const S=()=>{window.removeEventListener("keydown",M,!0),z.disconnect()};c.addEventListener("click",P),h.addEventListener("click",()=>b(d-1)),s(".learn-replay").addEventListener("click",()=>b(d)),u.addEventListener("click",()=>{_=!_,u.setAttribute("aria-pressed",String(_)),u.classList.toggle("primary",_)}),s(".learn-close").addEventListener("click",()=>{S(),t.onMenu()});const M=k=>{if(!i.isConnected)return S();const N={ArrowRight:P," ":P,Enter:P,ArrowLeft:()=>b(d-1),r:()=>b(d),R:()=>b(d),Escape:()=>{S(),t.onMenu()}}[k.key];N&&(k.preventDefault(),k.stopPropagation(),N())};window.addEventListener("keydown",M,!0);const A=()=>{const k=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.round(o.clientWidth*k)),r.height=Math.max(1,Math.round(o.clientHeight*k))},z=new ResizeObserver(A);z.observe(o),A();const O=k=>{if(!i.isConnected)return S();requestAnimationFrame(O);const D=v(),N=Math.min(D.frames.length-1,Math.floor((k-g)/1e3*NS)),X=D.frames[N];N===D.frames.length-1&&!m&&(m=k),_&&m&&k-m>zS&&!(L()&&f===e.length-1)&&P();const V=Math.round(Math.abs(X.speed)*3.6*10)/10;s(".learn-pedal").textContent=Math.abs(X.speed)>.02?`${X.speed>0?"Forward":"Reverse"} ${V.toFixed(1)} km/h`:"Stopped",s(".learn-wheel").textContent=`Wheel: ${zd(X.wheelDeg)}`,x().view==="side"?US(a,r,x(),D,X):OS(a,r,w,x(),p,D,X,k)};R(0),requestAnimationFrame(O)};function bu(n){if(n.viewBox)return n.viewBox;const e=[],t=[];for(const l of n.steps)for(const c of l.frames)for(const h of Nn(bt(c)))e.push(h.x),t.push(h.z);for(const l of[...n.scenario.poles??[],...n.scenario.course?.poles??[]])e.push(l.x),t.push(l.z);const i=1.2,s=Math.min(...e)-i,r=Math.max(...e)+i,o=Math.min(...t)-i,a=Math.max(...t)+i;return{cx:(s+r)/2,cz:(o+a)/2,w:r-s,h:a-o}}function OS(n,e,t,i,s,r,o,a){const l=e.width,c=e.height,h=Math.min(l/t.w,c/t.h),u=I=>[l/2-(I.x-t.cx)*h,c/2-(I.z-t.cz)*h],f=I=>I*h;n.fillStyle=te.ground,n.fillRect(0,0,l,c);const d=(I,$,oe,G,Z=[])=>{n.beginPath(),n.setLineDash(Z.map(le=>le*h)),n.strokeStyle=oe,n.lineWidth=Math.max(1,G*h),n.moveTo(...u(I)),n.lineTo(...u($)),n.stroke(),n.setLineDash([])},g=(I,$,oe)=>{n.beginPath(),I.forEach((G,Z)=>Z?n.lineTo(...u(G)):n.moveTo(...u(G))),n.closePath(),n.fillStyle=$,n.fill(),oe&&(n.strokeStyle=oe,n.lineWidth=Math.max(1,.04*h),n.stroke())},_=(I,$,oe,G,Z=.04)=>{n.beginPath(),n.arc(...u(I),Math.max(3,f($)),0,Math.PI*2),n.fillStyle=oe,n.fill(),G&&(n.strokeStyle=G,n.lineWidth=Math.max(1.5,Z*h),n.stroke())},m=(I,$,oe,G=0,Z=0)=>{const[le,he]=u(I),ge=Math.max(11,Math.min(18,.32*h));n.font=`600 ${ge}px system-ui, sans-serif`;const Fe=n.measureText($).width+ge*.7,ae=le+G*ge-Fe/2,Ne=he+Z*ge-ge*.75;n.fillStyle=oe,n.beginPath(),n.roundRect(ae,Ne,Fe,ge*1.5,ge*.4),n.fill(),n.fillStyle=te.label,n.textAlign="center",n.textBaseline="middle",n.fillText($,ae+Fe/2,Ne+ge*.75)},p=(I,$)=>tn(o,{x:I,y:0,z:$});for(const I of i.scenario.solids){const $=Nn(I.rect);g([$[0],$[1],$[3],$[2]],te.wall),m({x:I.rect.cx-I.rect.hw+1.2,z:I.rect.cz},I.height<.5?"curb":"wall",te.wall)}for(const I of i.scenario.paint)d({x:I.x1,z:I.z1},{x:I.x2,z:I.z2},te.paint,I.width);for(const I of i.scenario.course?.boundaries??[])d({x:I.x1,z:I.z1},{x:I.x2,z:I.z2},te.paint,.1);const w=I=>r.overlays.some($=>$.kind===I),x=.5+.5*Math.sin(a/160);if(w("parallel")){const I=i.scenario.bay;for(const $ of[-1,1]){const oe=I.cx+$*I.hw;d({x:oe,z:I.cz-I.hl-1},{x:oe,z:I.cz+I.hl},te.guide,.04,[.2,.15]);const G=p($*se.width/2,se.length-se.rearOverhang+1),Z=p($*se.width/2,-.9-1.5);d(G,Z,te.guide,.035)}}if(r.ghost){const I=r.ghost.tone==="ok"?te.ok:te.bad;r.ghost.lines.forEach(($,oe)=>{$.length<2||(n.beginPath(),n.setLineDash([.22*h,.16*h]),n.strokeStyle=I,n.globalAlpha=oe<2?1:.45,n.lineWidth=Math.max(1.5,.06*h),$.forEach((G,Z)=>Z?n.lineTo(...u(G)):n.moveTo(...u(G))),n.stroke(),n.setLineDash([]),n.globalAlpha=1)});for(const $ of r.ghost.circles??[])n.beginPath(),n.setLineDash($.hit?[.3*h,.12*h]:[.12*h,.16*h]),n.strokeStyle=$.hit?te.bad:"rgba(255,255,255,0.28)",n.lineWidth=Math.max(1.2,($.hit?.06:.03)*h),n.arc(...u($.center),$.radius*h,0,Math.PI*2),n.stroke(),n.setLineDash([]);r.ghost.circles?.length&&_(r.ghost.circles[0].center,.08,"rgba(255,255,255,0.6)"),r.ghost.hit&&(_(r.ghost.hit,.35,"rgba(255,93,93,0.25)",te.bad,.06),m(r.ghost.hit,"hit",te.bad,0,-1.8))}for(const I of[...i.scenario.poles??[],...i.scenario.course?.poles??[]])_(I,.12,te.pole,"#5a2a00",.02);for(const I of i.scenario.course?.refPoles??[])_(I,.2,te.quarter,"#5a2a00",.03);if(w("eightRefs"))for(const I of i.scenario.course?.refPoles??[])_(I,.4+.1*x,"rgba(255,224,102,0.2)",te.sight,.05);const v=r.overlays.find(I=>I.kind==="danger"),L=v!==void 0,R=v?.pole===2?s.pole2:s.pole1;L&&_(R,.3+.12*x,"rgba(255,93,93,0.25)",te.bad,.05),m(s.pole1,"1",L&&v?.pole!==2?te.bad:te.pole,0,1.6),m(s.pole2,"2",L&&v?.pole===2?te.bad:te.pole,0,1.6),s.pole3&&m(s.pole3,"3",te.pole,0,-1.6);const b=se.width/2,P=se.length-se.rearOverhang,S=-.9,M=$n(o),A=o.wheelDeg/se.steeringRatio*Math.PI/180,z=[p(b,S),p(b,P),p(-b,P),p(-b,S)];g(z,te.car,te.carEdge),g([p(.8,2.6),p(.8,P-.05),p(-.8,P-.05),p(-.8,2.6)],"#2860b6"),g([p(.72,1.95),p(.64,2.6),p(-.64,2.6),p(-.72,1.95)],te.glass),g([p(.72,1.95),p(.72,.15),p(-.72,.15),p(-.72,1.95)],"#3f82e0"),g([p(.66,.15),p(.6,-.2),p(-.6,-.2),p(-.66,.15)],te.glass);for(const I of[1,-1])g([p(I*.82,P-.02),p(I*.82,P-.2),p(I*.5,P-.12),p(I*.5,P-.02)],"#fff6c8"),g([p(I*.84,S+.02),p(I*.84,S+.16),p(I*.56,S+.08),p(I*.56,S+.02)],"#e2453c");M.forEach((I,$)=>{const oe=o.heading+($>=2?A:0),G=Math.sin(oe),Z=Math.cos(oe),le=qy,he=.11,ge=[{x:I.x+G*le+Z*he,z:I.z+Z*le-G*he},{x:I.x+G*le-Z*he,z:I.z+Z*le+G*he},{x:I.x-G*le-Z*he,z:I.z-Z*le+G*he},{x:I.x-G*le+Z*he,z:I.z-Z*le-G*he}],Fe=(w("depth")||w("circle"))&&$===1;g(ge,Fe?te.sight:te.wheel,"#cfd6df")});const O=-b+.02;if(d(p(O,et.divider.z),p(O,et.quarterRearZ),te.quarter,.09),w("sight")){const I=tn(o,yn.eye),$=p(-.76,et.quarterRearZ),oe=$.x-I.x,G=$.z-I.z,Z=Math.hypot(oe,G),le={x:I.x+oe/Z*7,z:I.z+G/Z*7};d(I,le,"rgba(255,224,102,0.55)",.035),d(I,s.pole1,te.sight,.05,[.2,.14]),_(I,.09,te.sight),m(le,"window edge",te.quarter,0,0)}if(L&&v?.pole!==2&&d(p(-b,P),p(-b,S-4),te.bad,.04,[.2,.14]),w("depth")&&s.backCorner){const I=i.scenario.bay;d({x:s.backCorner.x,z:I.cz-I.hl},s.backCorner,te.sight,.07),_(s.backCorner,.24,"rgba(255,224,102,0.25)",te.sight,.05),m(s.backCorner,"end of side line",te.sight,-5,0),m(M[1],"rear wheel",te.sight,-4.2,0)}if(w("gap")){const I=p(b,S);d(I,s.pole2,te.guide,.05);const $=Math.max(0,Math.hypot(I.x-s.pole2.x,I.z-s.pole2.z)-.12);m({x:(I.x+s.pole2.x)/2,z:(I.z+s.pole2.z)/2},`${$.toFixed(1)} m`,te.guide,2.2,0)}if(w("circle")){const I=se.wheelbase/Math.tan(se.maxWheelDeg/se.steeringRatio*Math.PI/180),$=p(-I,0),oe=I-Ar/2;n.beginPath(),n.setLineDash([.18*h,.14*h]),n.arc(...u($),oe*h,0,Math.PI*2),n.strokeStyle=te.guide,n.lineWidth=Math.max(1.5,.05*h),n.stroke(),n.setLineDash([]),d($,M[1],te.guide,.03),_($,.1,te.guide),m($,"turn center",te.guide,0,1.5),_(s.pole1,.26,"rgba(107,227,138,0.2)",te.guide,.05),m(M[1],"right rear wheel",te.sight,0,-1.7)}if(w("bumper")&&(d(p(-b-2.2,S),p(b,S),te.sight,.05,[.2,.14]),m(p(-b-2.2,S),"rear bumper",te.sight,0,0)),r.overlays.some(I=>I.kind==="level")){const $=(s.pole1.x-o.x)*Math.cos(o.heading)-(s.pole1.z-o.z)*Math.sin(o.heading),oe=Math.min(-b-.6,$-.5);d(p(b,0),p(oe,0),te.sight,.05,[.2,.14]),m(p(b,0),"middle of the rear wheel",te.sight,0,-1.6)}if(w("curbDanger")&&s.curbZ!==void 0){const $=Nn(bt(o)).reduce((oe,G)=>G.z>oe.z?G:oe);_($,.3+.12*x,"rgba(255,93,93,0.25)",te.bad,.05),d({x:$.x-1.5,z:s.curbZ},{x:$.x+1.5,z:s.curbZ},te.bad,.1),m({x:$.x,z:s.curbZ},`${Math.max(0,s.curbZ-$.z).toFixed(1)} m to the curb`,te.bad,0,-1.6)}if(w("wheelLine")&&s.edgeZ!==void 0){const I=i.scenario.bay,$=M[0],oe=$.z-s.edgeZ>=.15;d({x:I.cx-I.hl-3,z:s.edgeZ},{x:I.cx+I.hl,z:s.edgeZ},te.sight,.08),_($,.36,oe?"rgba(107,227,138,0.25)":"rgba(255,224,102,0.2)",oe?te.guide:te.sight,.05),m($,oe?"left rear wheel: across":"left rear wheel",oe?te.guide:te.sight,0,1.8)}if(w("pole3")&&s.pole3){const I=tn(o,{x:-1.03,y:0,z:2.06});d(I,p(-b,S-6),"rgba(255,224,102,0.45)",.035),d(I,s.pole3,te.sight,.05,[.2,.14]),_(I,.09,te.sight),_(s.pole3,.26,"rgba(255,224,102,0.25)",te.sight,.05)}if(w("laneGap")&&s.edgeZ!==void 0){const I=p(-b,0),$={x:I.x,z:s.edgeZ};d(I,$,te.sight,.05),d({x:I.x-3,z:s.edgeZ},{x:I.x+3,z:s.edgeZ},te.sight,.06),m($,`${Math.round(Math.abs(s.edgeZ-I.z)*100)} cm`,te.sight,2.2,0)}const k=r.overlays.find(I=>I.kind==="ringGap");if(k){const I=k.ring==="near"?rt:_t,$=k.ring==="near",oe=k.side==="inner",G=oe?M[$?0:1]:M[$?3:2],Z=Math.hypot(G.x-I.x,G.z-I.z),le=oe?Ye.inner:Ye.outer,he={x:I.x+(G.x-I.x)/Z*le,z:I.z+(G.z-I.z)/Z*le},ge=Tu(o,i,k),Fe=ge?te.bad:te.sight;d(G,he,Fe,.06),_(G,.32,ge?"rgba(255,93,93,0.22)":"rgba(255,224,102,0.2)",Fe,.04)}const D=r.overlays.find(I=>I.kind==="eightMirror");if(D){const I=D.side==="left"?1:-1,$=D.pole===1?s.pole1:s.pole2,oe=pt.z,G=($.x-o.x)*Math.cos(o.heading)-($.z-o.z)*Math.sin(o.heading),Z=I*Math.max(b+.6,I*G+.4);d(p(-I*b,oe),p(Z,oe),te.sight,.05,[.2,.14]),_(p(I*pt.x,oe),.1,te.sight),m(p(-I*b,oe),`${D.side} mirror`,te.sight,0,1.8)}const N=r.overlays.find(I=>I.kind==="eightCornerSight"||I.kind==="eightPillarSight")??void 0;if(N){const I=N.side==="left"?1:-1,$=N.kind==="eightPillarSight",oe=tn(o,Ge),G=$?p(I*Ui.x,Ui.z):p(I*b,P),Z=Math.hypot(s.pole2.x-oe.x,s.pole2.z-oe.z)+1,le=G.x-oe.x,he=G.z-oe.z,ge=Math.hypot(le,he);d(oe,{x:oe.x+le/ge*Z,z:oe.z+he/ge*Z},"rgba(255,224,102,0.5)",.035),d(oe,s.pole2,te.sight,.05,[.2,.14]),_(oe,.09,te.sight),_(G,.1,te.sight),m(oe,`eye – ${N.side} ${$?"pillar":"front corner"} – pole 2`,te.sight,0,$?-2.2:1.9),$&&_(M[I>0?2:3],.32,"rgba(255,224,102,0.2)",te.sight,.04)}if(w("door")){const I=tn(o,Ge);d(I,s.pole1,te.sight,.05,[.2,.14]),_(I,.09,te.sight);const $=Ky(o,s.pole1);m(s.pole1,`door hides ${Math.round($*100)}%`,te.sight,0,3.4)}if(w("bonnet")){const I=tn(o,Ge);d(I,s.pole1,te.sight,.05,[.2,.14]),_(I,.09,te.sight),m(s.pole1,"lower part hidden by the bonnet",te.sight,0,-1.8)}if(w("curb")&&s.curbZ!==void 0&&s.edgeZ!==void 0){const I=i.scenario.bay;for(const $ of[s.curbZ,s.edgeZ])d({x:I.cx-I.hl,z:$},{x:I.cx+I.hl,z:$},te.guide,.05,[.25,.15]);for(const $ of[-1,1])d(p($*b,P+1),p($*b,S-1.5),te.guide,.035)}if(w("edge")&&s.edgeZ!==void 0){const I=i.scenario.bay,[$,,oe]=M,G=Math.min($.z,oe.z)-.1<=s.edgeZ+.05,Z=G?te.bad:te.guide;d({x:I.cx-I.hl,z:s.edgeZ},{x:I.cx+I.hl,z:s.edgeZ},Z,.08);for(const le of[$,oe])_(le,.3,G?"rgba(255,93,93,0.25)":"rgba(107,227,138,0.2)",Z,.04);m({x:I.cx+I.hl+1.2,z:s.edgeZ},G?"wheels on the line":"wheels inside",Z)}if(w("endGaps")){const I=bt(o),$=Math.sin(o.heading),oe=Math.cos(o.heading),G={x:I.cx+$*I.hl,z:I.cz+oe*I.hl},Z={x:I.cx-$*I.hl,z:I.cz-oe*I.hl};for(const[le,he]of[[G,s.pole1],[Z,s.pole2]]){const ge={x:he.x,z:le.z};d(le,ge,te.guide,.04);const Fe=Math.max(0,Math.abs(he.x-le.x)-.12);m({x:(le.x+ge.x)/2,z:le.z},`${Fe.toFixed(1)} m`,te.guide,0,-1.4)}}const X=r.overlays.find(I=>I.kind==="mirror"),V=k!==void 0&&Tu(o,i,k),re=k&&k.side==="inner"?k.ring==="near"?rt:_t:void 0,me=re?I=>Math.abs(Math.hypot((I.x1+I.x2)/2-re.x,(I.z1+I.z2)/2-re.z)-Ye.inner)<.3:void 0;X&&kS(n,l,c,o,i,s,X.side,X.mark,V,me)}function kS(n,e,t,i,s,r,o,a,l=!1,c){const h=Math.min(e*.36,t*.55*1.5),u=h/1.5,f=Math.max(8,e*.015),d=e-h-f,g=t-u-f,_=D=>{const N=gs(o,D);if(N.depth<.15)return null;const X=o==="right"?(N.X+1)/2:(1-N.X)/2;return[d+X*h,g+(1-N.Y)/2*u]},m=(D,N=0)=>Jd(i,{x:D.x,z:D.z,y:N}),p=D=>{let N=!1;for(const X of D){const V=_(X);if(!V){N=!1;continue}N?n.lineTo(...V):n.moveTo(...V),N=!0}};n.save(),n.beginPath(),n.roundRect(d,g,h,u,u*.18),n.clip();const w=o==="left"?1:-1,x=_({x:w*60,y:0,z:-200}),v=x?Math.max(g,Math.min(g+u,x[1])):g+u*.3;n.fillStyle="#9cc4e8",n.fillRect(d,g,h,v-g),n.fillStyle=te.ground,n.fillRect(d,v,h,g+u-v),n.strokeStyle=te.paint,n.lineCap="round";for(const D of[...s.scenario.paint,...s.scenario.course?.boundaries??[]]){const N=[];for(let V=0;V<=40;V++){const re=V/40;N.push(m({x:D.x1+(D.x2-D.x1)*re,z:D.z1+(D.z2-D.z1)*re}))}const X=c?.(D)??!1;n.strokeStyle=X?l?te.bad:te.sight:te.paint,n.beginPath(),n.lineWidth=Math.max(1.5,h*(X?.014:.008)),p(N),n.stroke()}const L=[...s.scenario.poles??[],...s.scenario.course?.poles??[]].sort((D,N)=>gs(o,m(N)).depth-gs(o,m(D)).depth);for(const D of L){const N=_(m(D)),X=_(m(D,pr));if(!N||!X)continue;const V=gs(o,m(D)).depth,re=Math.tan(16*Math.PI/180)*1.5,me=(s.scenario.course?.poles?.length??0)>0;n.globalAlpha=me?.3:.55,n.strokeStyle=te.pole,n.lineWidth=Math.max(1.5,Math.min(me?h*.012:1/0,.1/(V*re)*(h/2))),n.beginPath(),n.moveTo(...N),n.lineTo(...X),n.stroke(),n.globalAlpha=1}const R=w*(se.width/2),b=[];for(let D=1.9;D>=-.9-1e-9;D-=.1)b.push(D);const P=[...b.map(D=>({x:R,y:1,z:D})),...[...b].reverse().map(D=>({x:R,y:.3,z:D}))];n.beginPath(),p(P),n.closePath(),n.fillStyle=te.car,n.fill(),n.strokeStyle=te.carEdge,n.lineWidth=2,n.stroke();const S=jd(o);n.beginPath(),p([...S,{...S.at(-1),y:0},{...S[0],y:0}]),n.closePath(),n.fillStyle="#1b1e24",n.fill();const M=[];for(let D=0;D<=24;D++){const N=Math.PI*2*D/24;M.push({x:w*(se.width/2-.08),y:.31+.3*Math.sin(N),z:.3*Math.cos(N)})}n.beginPath(),p(M),n.closePath(),n.fillStyle="#0c0d10",n.fill();const A=(D,N)=>{const X=D&&_(D);X&&(n.beginPath(),n.arc(...X,Math.max(6,h*.035),0,Math.PI*2),n.strokeStyle=N,n.lineWidth=2.5,n.stroke())};if(a==="corner"){A(m(r.backCorner),te.sight),A(S.at(-1),te.sight);const D=_(m(r.backCorner)),N=_(S.at(-1));if(D&&N){n.setLineDash([6,5]),n.beginPath(),n.moveTo(d,N[1]),n.lineTo(d+h,N[1]),n.strokeStyle=te.sight,n.lineWidth=1.5,n.stroke(),n.setLineDash([]);const X=Math.max(10,h*.04);n.font=`600 ${X}px system-ui, sans-serif`,n.textAlign="right",n.textBaseline="bottom",n.fillStyle=te.sight,n.fillText(D[1]>N[1]-2?"level: stop":"line end ↓ arch",d+h-u*.12,N[1]-4)}}else if(a==="edge"&&r.edgeZ!==void 0){const D=tn(i,{x:0,y:0,z:-3});A(m({x:D.x,z:r.edgeZ}),te.sight)}else if(a==="edgeNear"&&r.edgeZ!==void 0){const D=tn(i,{x:0,y:0,z:-.7});A(m({x:D.x,z:r.edgeZ}),te.sight)}else if(a==="curb"&&r.curbZ!==void 0){const D=tn(i,{x:-.9,y:0,z:-1.3});A(m({x:D.x,z:r.curbZ}),te.bad)}else a==="rearWheel"?A({x:w*(se.width/2-.08),y:.05,z:0},l?te.bad:te.sight):a==="pole3"&&r.pole3?A(m(r.pole3,pr*.55),te.sight):A(m(r.pole1,pr*.55),a==="pole1"?te.sight:te.bad);n.restore(),n.strokeStyle="#11141a",n.lineWidth=Math.max(3,h*.012),n.beginPath(),n.roundRect(d,g,h,u,u*.18),n.stroke();const z=Math.max(11,h*.045);n.font=`600 ${z}px system-ui, sans-serif`,n.fillStyle="#11141a",n.textAlign="left",n.textBaseline="top";const O=o==="right"?"Right mirror":"Left mirror",k=n.measureText(O).width;n.fillStyle="rgba(17,20,26,0.75)",n.fillRect(d+u*.12,g+u*.06,k+z*.8,z*1.4),n.fillStyle="#eef1f5",n.fillText(O,d+u*.12+z*.4,g+u*.06+z*.2)}function Tu(n,e,t){const i=t.ring==="near"?rt:_t,s=t.ring==="near",r=t.side==="inner";return(r?_f(n,i,s):vf(n,i,s,e.scenario))<(r?.35:.24)}const Us=-En,fi=n=>{const e=n.bay,t=e.cz-e.hw,i=e.cz+e.hw;return{pole1:{x:e.cx+e.hl,z:t},pole2:{x:e.cx-e.hl,z:t},pole3:{x:e.cx-e.hl,z:i},edgeZ:t,curbZ:i}},xf=.4,Vs=(n,e=xf)=>fi(n).edgeZ-e-se.width/2,Ws=(n,e)=>{const t=Yo(n,e);return{...t,car:{...t.car,x:fi(n).pole2.x-3}}},Mf=(n,e)=>Math.atan2(Math.sin(n.heading-e.bay.requiredHeading),Math.cos(n.heading-e.bay.requiredHeading)),BS={x:-1.8/2,y:0,z:-.9},HS=(n,e)=>Hh(n,"right",e.pole3)-Hh(n,"right",tn(n,BS)),yf=(n,e)=>$n(n)[0].z-e.edgeZ,GS=(n,e)=>{const t=tn(n,Ge);return Sd(se.length-se.rearOverhang,Math.hypot(e.pole1.x-t.x,e.pole1.z-t.z))/pr},VS=0,WS=.4,XS=.15,qS=.3,Xs=()=>({laneGap:xf,startPast:VS,pole3Stop:WS,wheelCross:XS,fixBonnet:qS}),Sf=n=>Ds(n)/To,zn=n=>No(n,Ds(n)),Au={kind:"mirror",side:"right",mark:"pole3"},Xl=()=>[{kind:"laneGap"},{kind:"mirror",side:"right",mark:"edgeNear"}],YS="The edge line meets the bottom of the mirror about a quarter of the way out from the car: about 40 cm. Right.",zo={kind:"mirror",side:"left",mark:"rearWheel"},Sc=(n,e,t,i)=>{n.add({say:t?"Fix: turn the wheel fully right while standing.":"Turn the wheel fully right while standing.",look:t?"Then the usual script: reverse until pole 3 comes up to the car in the right mirror.":void 0,pedal:"stop",wheel:En,ghost:"future"}),n.add({say:"Reverse slowly, wheel fully right. The rear swings in toward the curb.",look:"Right mirror: pole 3 slides toward the side of the car.",pedal:"reverse",wheel:En,until:s=>HS(zn(s),e)-.85*(Sf(s)*180/Math.PI)<=i.pole3Stop,overlays:[{kind:"pole3"},Au]}),n.hold("Stop when pole 3 comes up to the side of the car in the right mirror, still fully visible.","Pole 3 is the rear pole of the space at the curb. Stop before the car hides its bottom: then you went too far.",[{kind:"pole3"},Au])},Hi=(n,e)=>{n.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Us,ghost:"future"}),n.add({say:"Reverse slowly, wheel fully left. The front swings in.",look:"Right mirror: the curb comes parallel to the car.",pedal:"reverse",wheel:Us,until:t=>Mf(t,e)-Sf(t)<=0,overlays:[{kind:"curb"}]})},qs=(n,e,t,i,s)=>(t&&n.hold("Parallel park into the space on your right. Pole 1 is its front end, pole 2 its rear end, pole 3 the rear pole at the curb.",`Drive past about ${Math.round(i.laneGap*100)} cm from the space's edge line, then reverse in.`,[{kind:"pole3"}]),n.add({say:"Drive forward slowly along the space, wheel straight.",pedal:"forward",wheel:0,until:r=>r.x>=e.pole1.x-1.5}),s&&n.hold("Check your distance in the right mirror.",s,Xl()),n.add({say:"Keep going. Watch pole 1 in the right mirror.",look:"It moves back along the car toward the rear wheel.",pedal:"forward",wheel:0,until:r=>-Vl(zn(r),e.pole1)>=i.startPast,overlays:[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]}),n.hold("Stop when pole 1 is level with the middle of your rear wheel.","Right mirror: pole 1 stands right beside the rear wheel.",[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]),Sc(n,e,!1,i),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,ghost:"future"}),n),$S=(n,e,t,i,s,r)=>(qs(n,t,i,r),Ns(n,t,s),Hi(n,e),n),Ns=(n,e,t)=>{const i=t<0,s=t<-.4;n.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line.",pedal:"reverse",wheel:0,until:r=>yf(zn(r),e)>=t,overlays:[{kind:"wheelLine"},zo]}),n.hold(i?s?"Mistake: stopped the straight part far too early. The left rear wheel is still well before the edge line.":"Mistake: stopped the straight part too early. The left rear wheel has only reached the edge line, not crossed it.":"Stop when, in the left mirror, the left rear wheel has crossed the edge line.",i?s?"Full left from here swings the front into pole 1. Watch.":"The car will end up too far out. Watch what happens.":"The whole tire is past the line. From here, full left brings the car in.",[{kind:"wheelLine"},zo])},Ur=(n,e)=>(n.hold("Stop when the car is parallel to the curb.","Both mirrors: the curb and the edge line run parallel to the car.",[{kind:"curb"}]),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,overlays:[{kind:"curb"}]}),n.add({say:"Drive forward slowly to the middle of the space.",look:"Leave about the same gap to pole 1 ahead and pole 2 behind.",pedal:"forward",wheel:0,until:t=>bt(zn(t)).cx>=e.bay.cx,overlays:[{kind:"endGaps"}]}),n.hold("Stop in the middle: equal gaps to both poles, all wheels inside the lines. Done.",void 0,[{kind:"endGaps"},{kind:"curb"}]),n),ZS=(n,e={})=>{const t={...Xs(),...e},i=fi(n),s=qs(new Kn(Ws(n,Vs(n,t.laneGap))),i,!0,t,YS);return Ns(s,i,t.wheelCross),Hi(s,n),Ur(s,n).finish("parallel-ok","Parallel parking","Pole 1 behind the rear wheel, full right until pole 3 comes up to the car in the right mirror, straight back until the left rear wheel crosses the line, full left to parallel.","ok",i)},KS=-.15,JS=(n,e={},t=KS)=>{const i={...Xs(),...e},s=fi(n),r=$S(new Kn(Ws(n,Vs(n,i.laneGap))),n,s,!1,t,i);return r.hold("Parallel, but too far out: the left wheels are on the edge line.","Left mirror: the edge line runs under the left wheels instead of beside the car. That is a fault.",[{kind:"edge"},{kind:"mirror",side:"left",mark:"edge"}]),r.add({say:"Fix: straighten the wheel while standing.",look:"First make room: driving forward is easy to judge, the poles behind are already clear.",pedal:"stop",wheel:0,overlays:[{kind:"edge"}],ghost:"future"}),r.add({say:"Drive forward slowly, wheel straight.",look:"Watch pole 1 ahead over the bonnet.",pedal:"forward",wheel:0,until:o=>GS(zn(o),s)>=i.fixBonnet,overlays:[{kind:"bonnet"}]}),r.hold("Stop when the bonnet hides about a third of pole 1.","That is about 1 m to the pole: room for the S back.",[{kind:"bonnet"}]),Sc(r,s,!0,i),Hi(r,n),r.hold("Stop when parallel. All wheels are inside the lines. Done.","Left mirror: the edge line is beside the car. No need to drive forward again.",[{kind:"edge"},{kind:"endGaps"},{kind:"mirror",side:"left",mark:"edge"}]),r.finish("parallel-out","Mistake: stayed on the line","Straight part too short: the car ends on the edge line. Fix: forward until the bonnet hides a third of pole 1, then the same S back.","mistake",s)},jS=(n,e)=>e.curbZ-Math.max(...Nn(bt(n)).map(t=>t.z)),QS=.35,ew=(n,e={},t=QS)=>{const i={...Xs(),...e},s=fi(n),r=qs(new Kn(Ws(n,Vs(n,i.laneGap))),s,!1,i);return r.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line… and the stop is missed.",pedal:"reverse",wheel:0,until:o=>jS(zn(o),s)<=t,overlays:[{kind:"wheelLine"}]}),r.hold("Stop! Too deep: the rear is about to hit the curb and the rear poles.","Right mirror: the curb is right at the rear corner. Red path: keep reversing and you hit them.",[{kind:"curbDanger"},{kind:"mirror",side:"right",mark:"curb"}],"keep"),r.add({say:"Fix: drive forward slowly, wheel straight.",look:"Forward is easy to judge: the car goes back out along the same line.",pedal:"forward",wheel:0,until:o=>yf(zn(o),s)<=i.wheelCross,overlays:[{kind:"wheelLine"},zo]}),r.hold("Stop when the left rear wheel is back just across the edge line.","That is the normal point again: full left from here.",[{kind:"wheelLine"},zo]),Hi(r,n),Ur(r,n).finish("parallel-deep","Mistake: too deep","Missed the stop on the straight part: the rear closes on the curb. Fix: forward until the left rear wheel is back at the line, then full left.","mistake",s,n.bay.requiredHeading)},tw=-1.2,nw=.15,iw=(n,e={},t=tw,i=nw)=>{const s={...Xs(),...e},r=fi(n),o=qs(new Kn(Ws(n,Vs(n,s.laneGap))),r,!1,s);return Ns(o,r,t),o.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Us}),o.add({say:"Reverse slowly, wheel fully left. The front swings toward pole 1.",look:"Look right through the windscreen: pole 1 comes at the right front corner.",pedal:"reverse",wheel:Us,until:a=>Ln(zn(a),r.pole1)<=i,overlays:[{kind:"danger",pole:1}]}),o.hold("Stop! The right front corner is about to hit pole 1.","Red path: keep turning and the front hits it.",[{kind:"danger",pole:1}],"keep"),Sc(o,r,!0,s),o.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,ghost:"future"}),Ns(o,r,s.wheelCross),Hi(o,n),Ur(o,n).finish("parallel-pole1","Mistake: hits pole 1","Straight part far too short: full left swings the front into pole 1. Fix: full right, then the usual script from pole 3.","mistake",r,n.bay.requiredHeading)},sw=.9,rw=.15,ow=.25,aw=1,Ru=(n,e,t)=>Math.min(...(e.poles??[]).filter(i=>Math.abs(i.x-t.pole2.x)<1e-9).map(i=>Ln(n,i))),lw=(n,e=sw)=>{const t={...Xs(),laneGap:e},i=fi(n),s=qs(new Kn(Ws(n,Vs(n,e))),i,!1,t,`The edge line meets the bottom of the mirror near its middle: about ${Math.round(e*100)} cm, too far out (normal: a quarter of the way out). Better: drive on and come back closer.`);return Ns(s,i,t.wheelCross),s.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Us}),s.add({say:"Reverse slowly, wheel fully left. The front swings in.",look:"Look back through the rear window: the rear poles come close.",pedal:"reverse",wheel:Us,until:r=>Ru(zn(r),n,i)<=ow,overlays:[{kind:"danger",pole:2}]}),s.hold("Stop! From further out the car comes in deep: the rear is about to hit the rear poles.","Red path and circles: keep turning and the rear hits them.",[{kind:"danger",pole:2}],"keep"),s.add({say:"Fix: straighten the wheel while standing.",look:"Make room behind first: forward is easy to judge.",pedal:"stop",wheel:0,ghost:"future"}),s.add({say:"Drive forward slowly, wheel straight.",look:"Look back: the gap to the rear poles opens up.",pedal:"forward",wheel:0,until:r=>Ru(zn(r),n,i)>=aw,overlays:[{kind:"endGaps"}]}),s.hold("Stop when there is about 1 m behind.","Now full left again, to parallel.",[{kind:"endGaps"}]),Hi(s,n),Ur(s,n).finish("parallel-wide","Approach: too wide","Passed too far out: the car comes in deep and the rear closes on the rear poles. Fix: straighten, forward until 1 m behind, full left again.","mistake",i,n.bay.requiredHeading)},cw=2,hw=1.5,uw=(n,e=rw,t=hw)=>{const i=Xs(),s=fi(n),r=new Kn(Ws(n,Vs(n,e)));r.add({say:"Drive forward slowly along the space, wheel straight.",pedal:"forward",wheel:0,until:a=>a.x>=s.pole2.x+cw}),r.hold("Check your distance in the right mirror early, while there is room ahead.",`The edge line meets the bottom of the mirror right next to the car: about ${Math.round(e*100)} cm. Too close: pole 1 would pass a few cm from your door.`,Xl());let o;return r.add({say:`Fix: half a turn left, drive forward slowly about ${t} m.`,look:"The car moves out, away from the line.",pedal:"forward",wheel:180,until:a=>(o??=a.x,a.x-o>=t)}),r.add({say:"Now half a turn right, until the car is straight again.",pedal:"forward",wheel:-180,until:a=>Mf(a,n)-Ds(a)/13<=0}),r.add({say:"Straighten the wheel.",pedal:"stop",wheel:0}),r.hold("Check again: the line now meets the mirror bottom about a quarter of the way out.","Right distance. Carry on as usual.",Xl()),qs(r,s,!1,i),Ns(r,s,i.wheelCross),Hi(r,n),Ur(r,n).finish("parallel-close","Approach: too close","Passing too close to the space: spot it in the right mirror early, move out with a small S, then park as usual.","mistake",s)},dw=n=>[ZS(n),JS(n),ew(n),iw(n),uw(n),lw(n)],fw=(n,e,t,i)=>{n.innerHTML="",n.className="overlay";const s=document.createElement("div");s.className="menu-panel results",s.innerHTML=`<div class="grade grade-${t.grade}">${t.grade}</div><h2>${e.scenario.name}</h2><div class="score">${t.total} / 100</div>`;const r=document.createElement("div");r.className="breakdown",t.lines.length===0&&(r.innerHTML='<div class="line"><span>Flawless — no deductions</span><b>±0</b></div>');for(const c of t.lines){const h=document.createElement("div");h.className="line",h.innerHTML=`<span>${c.label}</span><b>${c.delta.toFixed(1)}</b>`,r.appendChild(h)}s.appendChild(r);const o=document.createElement("p");o.className="menu-help",o.textContent=`Time ${e.time.toFixed(0)}s · Collisions ${e.collisions} · Gear changes ${e.reversals}`,s.appendChild(o);const a=document.createElement("div");a.className="buttons";const l=(c,h,u=!1)=>{const f=document.createElement("button");f.className=u?"btn primary":"btn",f.textContent=c,f.addEventListener("click",h),a.appendChild(f)};l("Retry (R)",i.onRetry,!0),i.onNext&&l("Next scenario",i.onNext),l("Menu (Esc)",i.onMenu),s.appendChild(a),n.appendChild(s)},jt=(n,e,t,i)=>{const s=document.createElement("button");return s.type="button",s.className=`touch-btn ${e}`,s.innerHTML=t,s.title=i,s.setAttribute("aria-label",i),s.addEventListener("contextmenu",r=>r.preventDefault()),n.appendChild(s),s},vo=n=>'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="'+(n==="left"?"M17 4 L6 12 L17 20 Z":"M7 4 L18 12 L7 20 Z")+'"/></svg>',Cu='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',qa=(n,e,t)=>{let i=null;n.addEventListener("pointerdown",r=>{r.preventDefault(),i===null&&(i=r.pointerId,n.setPointerCapture(r.pointerId),n.classList.add("active"),e())});const s=r=>{r.pointerId===i&&(i=null,n.classList.remove("active"),t())};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("lostpointercapture",s)},ls=(n,e)=>{n.addEventListener("click",t=>{t.preventDefault(),e()})},pw=()=>{const n=document.documentElement;window.matchMedia?.("(pointer: coarse)").matches&&n.classList.add("touch"),window.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&n.classList.add("touch")},{capture:!0})},mw=(n,e,t)=>{const i=(c,h)=>qa(c,()=>e.setTouchControl(h,!0),()=>e.setTouchControl(h,!1)),s=document.createElement("div");s.className="touch-ui pedals",n.layer.appendChild(s),i(jt(s,"handbrake","P","Handbrake"),"handbrake"),i(jt(s,"pedal brake","▼<small>brake · R</small>","Brake, then reverse"),"reverse"),i(jt(s,"pedal gas","▲<small>drive</small>","Drive"),"throttle");const r=jt(n.steerLeftSlot,"look",Cu+vo("left"),"Look left (hold)");qa(r,()=>e.setTouchLookLeft(!0),()=>e.setTouchLookLeft(!1)),i(jt(n.steerLeftSlot,"arrow",vo("left"),"Steer left"),"steerLeft");const o=jt(n.steerRightSlot,"look",vo("right")+Cu,"Tap: right pillar · hold: look back");qa(o,()=>e.headPress(),()=>e.headRelease()),i(jt(n.steerRightSlot,"arrow",vo("right"),"Steer right"),"steerRight");const a=document.createElement("div");a.className="touch-ui touch-bar",n.topCenter.prepend(a),ls(jt(a,"small","🎥","Change view"),t.onCycleView),ls(jt(a,"small","🗺","Bird's-eye view on/off"),t.onToggleEagle),ls(jt(a,"small","📷","Reverse camera on/off"),t.onToggleReverseAids),ls(jt(a,"small","💡","Hints on/off"),t.onToggleCoach),ls(jt(a,"small","↻","Restart"),t.onRestart),ls(jt(a,"small","☰","Menu"),t.onMenu);const l=document.createElement("div");l.className="touch-ui rotate-hint",l.innerHTML="<div>⟳</div><p>Turn your phone to landscape</p>",n.layer.appendChild(l)},gw=(n,e)=>n.left<e.right&&e.left<n.right&&n.top<e.bottom&&e.top<n.bottom,_w=(n,e,t)=>{const i=[["left mirror",gu("left",e,t)],["right mirror",gu("right",e,t)]],s=[];for(const{name:r,rect:o}of n)for(const[a,l]of i)gw(o,l)&&s.push(`${r} covers ${a}`);return s},vw=()=>{const n=document.querySelectorAll(".hud .panel, .hud .touch-btn"),e=[];n.forEach(i=>{const s=i.getBoundingClientRect();s.width===0||s.height===0||e.push({name:i.className||i.tagName,rect:s})});const t=_w(e,window.innerWidth,window.innerHeight);for(const i of t)console.warn(`[layout] ${i}`);return t},xw=/swiftshader|llvmpipe|softpipe|basic render driver|software rasterizer/i,Mw=n=>!!n&&xw.test(n),yw=n=>{try{const e=n.getExtension("WEBGL_debug_renderer_info"),t=n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER);return typeof t=="string"?t:null}catch{return null}},Sw=()=>{try{const n=document.createElement("canvas"),e={failIfMajorPerformanceCaveat:!0},t=n.getContext("webgl2",e)??n.getContext("webgl",e);return t?(t.getExtension("WEBGL_lose_context")?.loseContext(),!1):!0}catch{return!1}},ww=n=>Mw(yw(n))||Sw(),wf="gpu.warningDismissed",Ew=()=>{try{return localStorage.getItem(wf)==="1"}catch{return!1}},bw=()=>{const n=document.createElement("div");n.className="gpu-warning",n.setAttribute("role","alert"),n.innerHTML="<p><b>Your browser is drawing 3D without the graphics card, so the simulator will lag.</b> Turn on <i>Use graphics acceleration when available</i> (Chrome, Brave: Settings → System; Edge: Settings → System and performance), then restart the browser.</p>";const e=document.createElement("button");return e.type="button",e.className="btn",e.textContent="Got it",e.addEventListener("click",()=>{try{localStorage.setItem(wf,"1")}catch{}n.remove()}),n.appendChild(e),n},Ya=1/120,Tw=.1,Aw=1e3/30,$o=document.getElementById("ui"),Ot=new Gx({antialias:!0});let Ef=1/0;const bf=new Py;Ot.setPixelRatio(qd(window.devicePixelRatio));Ot.shadowMap.enabled=!0;Ot.shadowMap.type=Iu;Ot.shadowMap.autoUpdate=!1;Ot.toneMapping=Nu;Ot.toneMappingExposure=1.15;document.body.appendChild(Ot.domElement);const Tf=ww(Ot.getContext());Tf&&window.addEventListener("load",()=>Ir("gpu/software","Software WebGL rendering"),{once:!0});const zs=gy(),Rw=new Nl(Ot);zs.environment=Rw.fromScene(new Vx,.04).texture;const nn=Gd(2781140,!0);nn.group.rotation.order="YXZ";zs.add(nn.group);const Dt=new cy(nn.group,1),Fo=new hy(nn.group),Af=iy();nn.group.add(Af.group);const Fs=new Uy(document.body);let _n="menu",st=null,lr=null;const Rf=new YM;let _s=null,Ao=0,Pu=performance.now(),Lu=0;const wc=n=>{let e=(()=>{try{return localStorage.getItem(n)!=="off"}catch{return!0}})();return{on:()=>e,toggle:()=>{e=!e;try{localStorage.setItem(n,e?"on":"off")}catch{}}}},Oo=wc("parking.eagle"),Ec=wc("parking.reverseAids"),ko=wc("parking.coach"),_r=new Yx({onView:n=>Dt.setView(n),onRestart:()=>st&&Os(st.scenario),onMenu:()=>Nr(),onToggleEagle:Oo.toggle,onToggleReverseAids:Ec.toggle,onToggleCoach:ko.toggle});pw();mw(Fs,_r,{onCycleView:()=>Dt.setView(qx(Dt.activeView)),onToggleEagle:Oo.toggle,onToggleReverseAids:Ec.toggle,onToggleCoach:ko.toggle,onRestart:()=>st&&Os(st.scenario),onMenu:()=>Nr()});function bc(){const n=window.innerWidth,e=window.innerHeight;Ot.setPixelRatio(qd(window.devicePixelRatio,Ef)),Ot.setSize(n,e),Dt.setAspect(n/e),Fo.setSize(n,e)}window.addEventListener("resize",bc);bc();function Nr(){_n="menu",st=null,Fs.hide(),Hy($o,Ls,Os,Tf&&!Ew()?bw():void 0,[{title:"Reverse into a garage",text:"Animated lesson from above: where to stop, what to look at, and how to fix starting too late or too early.",open:()=>xo("reverse-in","Learn: reverse into a garage",dS)},{title:"Parallel parking",text:"Animated lesson: the reference cues step by step, and how to fix ending up on the edge line.",open:()=>xo("parallel","Learn: parallel parking",dw)},{title:"Figure eight",text:"Animated lesson from above: when to turn and when to straighten, by the two yellow-banded poles.",open:()=>xo("figure-eight","Learn: figure eight",yS)},{title:"Hill start",text:"Animated lesson from the side: where to keep on the ramp and when the stop line is under the mirror.",open:()=>xo("hill-start","Learn: hill start",LS)}])}function xo(n,e,t){const i=Ls.find(s=>s.id===n);i&&(Ir(`learn/${n}`,e),FS($o,t(i),{onPractice:Os,onMenu:Nr,title:e}))}function Os(n){_r.resetHead(),_s&&fy(_s),_s=Xd(n),zs.add(_s),Fo.setEagleTarget(n.bay),st=Hs(n),lr=XM(n),Rf.reset(),Ao=0,bf.reset(),_n="playing",Gy($o),Fs.show(),Dt.setView(1),Cf(st),Dt.update(st.car,1),Ir(`start/${n.id}`,`Start: ${n.name}`)}function Cw(n){_n="results",Fs.hide();const e=xM(n);Ir(`finish/${n.scenario.id}/${e.grade}`,`Finish: ${n.scenario.name} (${e.grade})`);const t=Ls.findIndex(s=>s.id===n.scenario.id),i=Ls[t+1];fw($o,n,e,{onRetry:()=>Os(n.scenario),onNext:i?()=>Os(i):void 0,onMenu:Nr})}function Cf(n){const{car:e}=n,t=n.scenario.course?.hill?[n.scenario.course.hill]:[];nn.group.position.set(e.x,en(t,e.x,e.z),e.z),nn.group.rotation.y=e.heading,nn.group.rotation.x=-Vo(t,e);const i=xd(e);for(const s of nn.frontWheelPivots)s.rotation.y=i;nn.steeringWheel&&(nn.steeringWheel.rotation.z=-Op.degToRad(e.wheelDeg)),Af.update(i)}function Pf(n){requestAnimationFrame(Pf);const e=n-Pu,t=Math.min(e/1e3,Tw);if(Pu=n,_n==="playing"&&st){if(bf.feed(e)){const o=Cy(Ot.getPixelRatio());o!==Ot.getPixelRatio()&&(Ef=o,bc())}Ao+=t;const s=_r.controls();for(;Ao>=Ya;){const o=ko.on()&&lr?lr.update(st):null,a=o&&typeof o.wheel=="number"?o.wheel:void 0;st=Bi(st,Rf.apply(s,st.car.wheelDeg,a),Ya),Ao-=Ya}Cf(st),st.scenario.course&&st.course&&Fo.setEagleTarget(cM(st.scenario.course,st.course,st.scenario.bay)),Fs.update(st,Dt.activeView,Oo.on()&&Dt.activeView!==3);const r=lr?lr.update(st):null;Fs.updateCoach(ko.on()?r:null,st),st.complete&&Cw(st)}const i=_n==="playing"?_r.headTarget():"ahead";Dt.setHeadTarget(i==="back"?1:i==="pillar"?Qx()/yn.yawDeg:0),Dt.setLookLeft(_n==="playing"&&_r.lookLeft()),Dt.update(st?.car??Pw,t),!(_n!=="playing"&&n-Lu<Aw-1)&&(Lu=n,Ot.shadowMap.needsUpdate=!0,Ot.render(zs,Dt.active),Fo.render(Ot,zs,{mirrors:_n==="playing"&&Dt.activeView===1&&Dt.headTurn<.2,backup:_n==="playing"&&st?.car.gear==="R"&&Ec.on(),eagle:_n==="playing"&&Dt.activeView!==3&&Oo.on()}))}window.__parking={getSession:()=>st,setCar:(n,e,t)=>{st&&(st={...st,car:{...st.car,x:n,z:e,heading:t,speed:0}})}};new URLSearchParams(window.location.search).get("debug")==="layout"&&window.setInterval(()=>{_n==="playing"&&Dt.activeView===1&&vw()},1e3);const ys=Ls[0].spawn,Pw=vd(ys.x,ys.z,ys.heading);_s=Xd(Ls[0]);zs.add(_s);nn.group.position.set(ys.x,0,ys.z);nn.group.rotation.y=ys.heading;Dt.setView(2);Nr();requestAnimationFrame(Pf);
