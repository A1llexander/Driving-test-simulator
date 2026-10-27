(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Pl="178",ff=0,_c=1,pf=2,mu=1,gu=2,Hn=3,si=0,Gt=1,gn=2,ti=0,dr=1,vc=2,xc=3,Mc=4,mf=5,Si=100,gf=101,_f=102,vf=103,xf=104,Mf=200,yf=201,Sf=202,wf=203,Ia=204,Ua=205,Ef=206,bf=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,Df=214,Na=0,Fa=1,Oa=2,gr=3,za=4,ka=5,Ba=6,Ha=7,_u=0,If=1,Uf=2,ni=0,Nf=1,Ff=2,Of=3,vu=4,zf=5,kf=6,Bf=7,xu=300,_r=301,vr=302,Ga=303,Va=304,Po=306,xr=1e3,Ti=1001,Wa=1002,en=1003,Hf=1004,Cs=1005,bn=1006,Oo=1007,Ai=1008,Cn=1009,Mu=1010,yu=1011,us=1012,Ll=1013,Pi=1014,Tn=1015,Ms=1016,Dl=1017,Il=1018,ds=1020,Su=35902,wu=1021,Eu=1022,vn=1023,fs=1026,ps=1027,Ul=1028,Nl=1029,bu=1030,Fl=1031,Ol=1033,ao=33776,lo=33777,co=33778,ho=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ka=37492,Ja=37496,ja=37808,Qa=37809,el=37810,tl=37811,nl=37812,il=37813,rl=37814,sl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,ul=37821,uo=36492,dl=36494,fl=36495,Tu=36283,pl=36284,ml=36285,gl=36286,Gf=3200,Vf=3201,Au=0,Wf=1,Qn="",Wt="srgb",Mr="srgb-linear",go="linear",lt="srgb",Oi=7680,yc=519,Xf=512,qf=513,Yf=514,Ru=515,Zf=516,$f=517,Kf=518,Jf=519,Sc=35044,wc="300 es",Gn=2e3,_o=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const ts=Math.PI/180,ms=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function zl(n,e){return(n%e+e)%e}function jf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Qf(n,e,t){return n!==e?(t-n)/(e-n):0}function ns(n,e,t){return(1-t)*n+t*e}function ep(n,e,t,i){return ns(n,e,1-Math.exp(-t*i))}function tp(n,e=1){return e-Math.abs(zl(n,e*2)-e)}function np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sp(n,e){return n+Math.random()*(e-n)}function op(n){return n*(.5-Math.random())}function ap(n){n!==void 0&&(Ec=n);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(n){return n*ts}function cp(n){return n*ms}function hp(n){return(n&n-1)===0&&n!==0}function up(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pp={DEG2RAD:ts,RAD2DEG:ms,generateUUID:Ii,clamp:Ze,euclideanModulo:zl,mapLinear:jf,inverseLerp:Qf,lerp:ns,damp:ep,pingpong:tp,smoothstep:np,smootherstep:ip,randInt:rp,randFloat:sp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:fp,normalize:zt,denormalize:ir};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,f*E);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new N,bc=new ys;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],E=r[1],y=r[4],v=r[7],D=r[2],C=r[5],b=r[8];return s[0]=o*_+a*E+l*D,s[3]=o*m+a*y+l*C,s[6]=o*f+a*v+l*b,s[1]=c*_+h*E+u*D,s[4]=c*m+h*y+u*C,s[7]=c*f+h*v+u*b,s[2]=d*_+p*E+g*D,s[5]=d*m+p*y+g*C,s[8]=d*f+p*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new qe;function Cu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mp(){const n=vo("canvas");return n.style.display="block",n}const Tc={};function fr(n){n in Tc||(Tc[n]=!0,console.warn(n))}function gp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function _p(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ac=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?go:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:go,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const tt=xp();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class Mp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=vo("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yp=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bo(r[o].image)):s.push(Bo(r[o]))}else s=Bo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sp=0;const Ho=new N;class Lt extends Dr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ti,r=Ti,s=bn,o=Ai,a=vn,l=Cn,c=Lt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ii(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=xu;Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,D=(f+1)/2,C=(h+d)/4,b=(u+_)/4,P=(g+m)/4;return y>v&&y>D?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=b/i):v>D?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=P/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=b/s,r=P/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends Dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends wp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Ls.subVectors(this.max,Br),ki.subVectors(e.a,Br),Bi.subVectors(e.b,Br),Hi.subVectors(e.c,Br),Yn.subVectors(Bi,ki),Zn.subVectors(Hi,Bi),di.subVectors(ki,Hi);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!Go(t,ki,Bi,Hi,Ls)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,ki,Bi,Hi,Ls))?!1:(Ds.crossVectors(Yn,Zn),t=[Ds.x,Ds.y,Ds.z],Go(t,ki,Bi,Hi,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,Ps=new Ui,ki=new N,Bi=new N,Hi=new N,Yn=new N,Zn=new N,di=new N,Br=new N,Ls=new N,Ds=new N,fi=new N;function Go(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bp=new Ui,Hr=new N,Vo=new N;class Ss{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Vo)),this.expandByPoint(Hr.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new N,Wo=new N,Is=new N,$n=new N,Xo=new N,Us=new N,qo=new N;class Tp{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wo.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Wo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=$n.dot(this.direction),l=-$n.dot(Is),c=$n.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Wo).addScaledVector(Is,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){Xo.subVectors(t,e),Us.subVectors(i,e),qo.crossVectors(Xo,Us);let o=this.direction.dot(qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(Us.crossVectors($n,Us));if(l<0)return null;const c=a*this.direction.dot(Xo.cross($n));if(c<0||l+c>o)return null;const h=-a*$n.dot(qo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,o,a,l,c,h,u,d,p,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,Rp)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Kn.crossVectors(i,$t),Kn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Kn.crossVectors(i,$t)),Kn.normalize(),Ns.crossVectors($t,Kn),r[0]=Kn.x,r[4]=Ns.x,r[8]=$t.x,r[1]=Kn.y,r[5]=Ns.y,r[9]=$t.y,r[2]=Kn.z,r[6]=Ns.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],y=i[7],v=i[11],D=i[15],C=r[0],b=r[4],P=r[8],S=r[12],M=r[1],L=r[5],V=r[9],U=r[13],O=r[2],A=r[6],I=r[10],G=r[14],B=r[3],J=r[7],ne=r[11],de=r[15];return s[0]=o*C+a*M+l*O+c*B,s[4]=o*b+a*L+l*A+c*J,s[8]=o*P+a*V+l*I+c*ne,s[12]=o*S+a*U+l*G+c*de,s[1]=h*C+u*M+d*O+p*B,s[5]=h*b+u*L+d*A+p*J,s[9]=h*P+u*V+d*I+p*ne,s[13]=h*S+u*U+d*G+p*de,s[2]=g*C+_*M+m*O+f*B,s[6]=g*b+_*L+m*A+f*J,s[10]=g*P+_*V+m*I+f*ne,s[14]=g*S+_*U+m*G+f*de,s[3]=E*C+y*M+v*O+D*B,s[7]=E*b+y*L+v*A+D*J,s[11]=E*P+y*V+v*I+D*ne,s[15]=E*S+y*U+v*G+D*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,D=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=t*E+i*y+r*v+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=E*b,e[1]=(_*d*s-u*m*s-_*r*p+i*m*p+u*r*f-i*d*f)*b,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*f+i*l*f)*b,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*b,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*b,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*b,e[8]=v*b,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*f-t*u*f)*b,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*f+t*a*f)*b,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*p-t*a*p)*b,e[12]=D*b,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*m+t*u*m)*b,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*b,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,E=l*c,y=l*h,v=l*u,D=i.x,C=i.y,b=i.z;return r[0]=(1-(_+f))*D,r[1]=(p+v)*D,r[2]=(g-y)*D,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+f))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(g+y)*b,r[9]=(m-E)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Gn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_o)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gn){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,p=(i+r)*h;let g,_;if(a===Gn)g=(o+s)*u,_=-2*u;else if(a===_o)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new N,hn=new ot,Ap=new N(0,0,0),Rp=new N(1,1,1),Kn=new N,Ns=new N,$t=new N,Cc=new ot,Pc=new ys;class Pn{constructor(e=0,t=0,i=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cp=0;const Lc=new N,Vi=new ys,zn=new ot,Fs=new N,Gr=new N,Pp=new N,Lp=new ys,Dc=new N(1,0,0),Ic=new N(0,1,0),Uc=new N(0,0,1),Nc={type:"added"},Dp={type:"removed"},Wi={type:"childadded",child:null},Yo={type:"childremoved",child:null};class bt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,t=new Pn,i=new ys,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new qe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Gr,Fs,this.up):zn.lookAt(Fs,Gr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(zn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dp),Yo.child=e,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new N,kn=new N,Zo=new N,Bn=new N,Xi=new N,qi=new N,Fc=new N,$o=new N,Ko=new N,Jo=new N,jo=new ct,Qo=new ct,ea=new ct;class _n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),kn.subVectors(i,t),Zo.subVectors(e,t);const o=un.dot(un),a=un.dot(kn),l=un.dot(Zo),c=kn.dot(kn),h=kn.dot(Zo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return jo.setScalar(0),Qo.setScalar(0),ea.setScalar(0),jo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,i),ea.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(jo,s.x),o.addScaledVector(Qo,s.y),o.addScaledVector(ea,s.z),o}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),kn.subVectors(e,t),un.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),un.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Xi.subVectors(r,i),qi.subVectors(s,i),$o.subVectors(e,i);const l=Xi.dot($o),c=qi.dot($o);if(l<=0&&c<=0)return t.copy(i);Ko.subVectors(e,r);const h=Xi.dot(Ko),u=qi.dot(Ko);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Xi,o);Jo.subVectors(e,s);const p=Xi.dot(Jo),g=qi.dot(Jo);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(qi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Fc.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Fc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=zl(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ta(o,s,e+1/3),this.g=ta(o,s,e),this.b=ta(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Du[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return tt.workingToColorSpace(It.copy(this),e),Math.round(Ze(It.r*255,0,255))*65536+Math.round(Ze(It.g*255,0,255))*256+Math.round(Ze(It.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Wt){tt.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Os);const i=ns(Jn.h,Os.h,t),r=ns(Jn.s,Os.s,t),s=ns(Jn.l,Os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Qe;Qe.NAMES=Du;let Ip=0;class ws extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=dr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Ua,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ai extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new N,zs=new ue;let Up=0;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Up++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class Iu extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wt extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Np=0;const rn=new ot,na=new bt,Yi=new N,Kt=new Ui,Vr=new Ui,Rt=new N;class qt extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?Uu:Iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Kt.min,Vr.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,Vr.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(Vr.min),Kt.expandByPoint(Vr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),Rt.add(Yi)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,h=new N,u=new N,d=new ue,p=new ue,g=new ue,_=new N,m=new N;function f(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[S].add(_),a[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,S=E.length;P<S;++P){const M=E[P],L=M.start,V=M.count;for(let U=L,O=L+V;U<O;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new N,v=new N,D=new N,C=new N;function b(P){D.fromBufferAttribute(r,P),C.copy(D);const S=a[P];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),v.crossVectors(C,S);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,S=E.length;P<S;++P){const M=E[P],L=M.start,V=M.count;for(let U=L,O=L+V;U<O;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new ot,pi=new Tp,ks=new Ss,zc=new N,Bs=new N,Hs=new N,Gs=new N,ia=new N,Vs=new N,kc=new N,Ws=new N;class De extends bt{constructor(e=new qt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ia.fromBufferAttribute(u,e),o?Vs.addScaledVector(ia,h):Vs.addScaledVector(ia.sub(t),h))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(ks.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ks,zc)===null||pi.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Oc.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Oc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,D=y;v<D;v+=3){const C=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);r=Xs(this,f,e,i,c,h,u,C,b,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Xs(this,o,e,i,c,h,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,D=y;v<D;v+=3){const C=v,b=v+1,P=v+2;r=Xs(this,f,e,i,c,h,u,C,b,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,y=m+1,v=m+2;r=Xs(this,o,e,i,c,h,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fp(n,e,t,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Bs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Gs);const h=Fp(n,e,t,i,Bs,Hs,Gs,kc);if(h){const u=new N;_n.getBarycoord(kc,Bs,Hs,Gs,u),r&&(h.uv=_n.getInterpolatedAttribute(r,a,l,c,u,new ue)),s&&(h.uv1=_n.getInterpolatedAttribute(s,a,l,c,u,new ue)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};_n.getNormal(Bs,Hs,Gs,d.normal),h.face=d,h.barycoord=u}return h}class yt extends qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(_,m,f,E,y,v,D,C,b,P,S){const M=v/b,L=D/P,V=v/2,U=D/2,O=C/2,A=b+1,I=P+1;let G=0,B=0;const J=new N;for(let ne=0;ne<I;ne++){const de=ne*L-U;for(let Le=0;Le<A;Le++){const He=Le*M-V;J[_]=He*E,J[m]=de*y,J[f]=O,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(Le/b),u.push(1-ne/P),G+=1}}for(let ne=0;ne<P;ne++)for(let de=0;de<b;de++){const Le=d+de+A*ne,He=d+de+A*(ne+1),Z=d+(de+1)+A*(ne+1),le=d+(de+1)+A*ne;l.push(Le,He,le),l.push(He,Z,le),B+=6}a.addGroup(p,B,S),p+=B,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Op(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const zp={clone:yr,merge:kt};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new N,Bc=new ue,Hc=new ue;class Nt extends Fu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,Hc),t.subVectors(Hc,Bc)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,$i=1;class Hp extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(Zi,$i,e,t);r.layers=this.layers,this.add(r);const s=new Nt(Zi,$i,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Zi,$i,e,t);o.layers=this.layers,this.add(o);const a=new Nt(Zi,$i,e,t);a.layers=this.layers,this.add(a);const l=new Nt(Zi,$i,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Zi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ou extends Lt{constructor(e=[],t=_r,i,r,s,o,a,l,c,h){super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ou(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yt(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ti});s.uniforms.tEquirect.value=t;const o=new De(r,s),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=bn),new Hp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Xt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hl extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wp extends Lt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc extends an{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new ot,Vc=new ot,qs=[],Wc=new Ui,Xp=new ot,Wr=new De,Xr=new Ss;class Lo extends De{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ki),Wc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ki),Xr.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),e.ray.intersectsSphere(Xr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ki),Vc.multiplyMatrices(i,Ki),Wr.matrixWorld=Vc,Wr.raycast(e,qs);for(let o=0,a=qs.length;o<a;o++){const l=qs[o];l.instanceId=s,l.object=this,t.push(l)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wp(new Float32Array(r*this.count),r,this.count,Ul,Tn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sa=new N,qp=new N,Yp=new qe;class Mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sa.subVectors(i,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yp.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Ss,Zp=new ue(.5,.5),Ys=new N;class Gl{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],E=r[13],y=r[14],v=r[15];if(i[0].setComponents(l-s,d-c,m-p,v-f).normalize(),i[1].setComponents(l+s,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+g,v+E).normalize(),i[3].setComponents(l-o,d-h,m-g,v-E).normalize(),i[4].setComponents(l-a,d-u,m-_,v-y).normalize(),t===Gn)i[5].setComponents(l+a,d+u,m+_,v+y).normalize();else if(t===_o)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Zp.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zu extends Lt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ku extends Lt{constructor(e,t,i=Pi,r,s,o,a=en,l=en,c,h=fs,u=1){if(h!==fs&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rn extends qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function E(){const v=new N,D=new N;let C=0;const b=(t-e)/i;for(let P=0;P<=s;P++){const S=[],M=P/s,L=M*(t-e)+e;for(let V=0;V<=r;V++){const U=V/r,O=U*l+a,A=Math.sin(O),I=Math.cos(O);D.x=L*A,D.y=-M*i+m,D.z=L*I,u.push(D.x,D.y,D.z),v.set(A,b,I).normalize(),d.push(v.x,v.y,v.z),p.push(U,1-M),S.push(g++)}_.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const M=_[S][P],L=_[S+1][P],V=_[S+1][P+1],U=_[S][P+1];(e>0||S!==0)&&(h.push(M,L,U),C+=3),(t>0||S!==s-1)&&(h.push(L,V,U),C+=3)}c.addGroup(f,C,0),f+=C}function y(v){const D=g,C=new ue,b=new N;let P=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const O=V/r*l+a,A=Math.cos(O),I=Math.sin(O);b.x=S*I,b.y=m*M,b.z=S*A,u.push(b.x,b.y,b.z),d.push(0,M,0),C.x=A*.5+.5,C.y=I*.5*M+.5,p.push(C.x,C.y),g++}for(let V=0;V<r;V++){const U=D+V,O=L+V;v===!0?h.push(O,O+1,U):h.push(O+1,O,U),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vl extends qt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(s.slice(),3)),this.setAttribute("uv",new wt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new N,v=new N,D=new N;for(let C=0;C<t.length;C+=3)p(t[C+0],y),p(t[C+1],v),p(t[C+2],D),l(y,v,D,E)}function l(E,y,v,D){const C=D+1,b=[];for(let P=0;P<=C;P++){b[P]=[];const S=E.clone().lerp(v,P/C),M=y.clone().lerp(v,P/C),L=C-P;for(let V=0;V<=L;V++)V===0&&P===C?b[P][V]=S:b[P][V]=S.clone().lerp(M,V/L)}for(let P=0;P<C;P++)for(let S=0;S<2*(C-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(b[P][M+1]),d(b[P+1][M]),d(b[P][M])):(d(b[P][M+1]),d(b[P+1][M+1]),d(b[P+1][M]))}}function c(E){const y=new N;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(E),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const E=new N;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const v=m(E)/2/Math.PI+.5,D=f(E)/Math.PI+.5;o.push(v,1-D)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const y=o[E+0],v=o[E+2],D=o[E+4],C=Math.max(y,v,D),b=Math.min(y,v,D);C>.9&&b<.1&&(y<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),D<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function p(E,y){const v=E*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const E=new N,y=new N,v=new N,D=new N,C=new ue,b=new ue,P=new ue;for(let S=0,M=0;S<s.length;S+=9,M+=6){E.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),C.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),D.copy(E).add(y).add(v).divideScalar(3);const L=m(D);_(C,M+0,E,L),_(b,M+2,y,L),_(P,M+4,v,L)}}function _(E,y,v,D){D<0&&E.x===1&&(o[y]=E.x-1),v.x===0&&v.z===0&&(o[y]=D/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.vertices,e.indices,e.radius,e.details)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,r=[],s=[],o=[],a=new N,l=new ot;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wl extends Un{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $p extends Wl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Zs=new N,oa=new Xl,aa=new Xl,la=new Xl;class Kp extends Un{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Zs.subVectors(r[0],r[1]).add(r[0]),c=Zs);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Zs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),aa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),la.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),aa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),la.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(oa.calc(l),aa.calc(l),la.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Jp(n,e){const t=1-n;return t*t*e}function jp(n,e){return 2*(1-n)*n*e}function Qp(n,e){return n*n*e}function is(n,e,t,i){return Jp(n,e)+jp(n,t)+Qp(n,i)}function em(n,e){const t=1-n;return t*t*t*e}function tm(n,e){const t=1-n;return 3*t*t*n*e}function nm(n,e){return 3*(1-n)*n*n*e}function im(n,e){return n*n*n*e}function rs(n,e,t,i,r){return em(n,e)+tm(n,t)+nm(n,i)+im(n,r)}class Bu extends Un{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(rs(e,r.x,s.x,o.x,a.x),rs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends Un{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(rs(e,r.x,s.x,o.x,a.x),rs(e,r.y,s.y,o.y,a.y),rs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hu extends Un{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sm extends Un{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends Un{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(is(e,r.x,s.x,o.x),is(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends Un{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(is(e,r.x,s.x,o.x),is(e,r.y,s.y,o.y),is(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Xc(a,l.x,c.x,h.x,u.x),Xc(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:Kp,CubicBezierCurve:Bu,CubicBezierCurve3:rm,EllipseCurve:Wl,LineCurve:Hu,LineCurve3:sm,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:om,SplineCurve:Vu});class am extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new _l[r.type]().fromJSON(r))}return this}}class qc extends am{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hu(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Gu(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Bu(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Vu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Wl(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wu extends qc{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new qc().fromJSON(r))}return this}}function lm(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Xu(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=fm(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<r;d+=t){const p=n[d],g=n[d+1];p<a&&(a=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return gs(s,o,t,a,l,c,0),o}function Xu(n,e,t,i,r){let s;if(r===Em(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Yc(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Yc(o/i|0,n[o],n[o+1],s);return s&&Sr(s,s.next)&&(vs(s),s=s.next),s}function Li(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Sr(t,t.next)||xt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function gs(n,e,t,i,r,s,o){if(!n)return;!o&&s&&vm(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?hm(n,i,r,s):cm(n)){e.push(l.i,n.i,c.i),vs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=um(Li(n),e),gs(n,e,t,i,r,s,2)):o===2&&dm(n,e,t,i,r,s):gs(Li(n),e,t,i,r,s,1);break}}}function cm(n){const e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(r,s,o),u=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&jr(r,a,s,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hm(n,e,t,i){const r=n.prev,s=n,o=n.next;if(xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),f=vl(p,g,e,t,i),E=vl(_,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=f&&v&&v.z<=E;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&jr(a,h,l,u,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&jr(a,h,l,u,c,d,v.x,v.y)&&xt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&jr(a,h,l,u,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&jr(a,h,l,u,c,d,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function um(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Sr(i,r)&&Yu(i,t,t.next,r)&&_s(i,r)&&_s(r,i)&&(e.push(i.i,t.i,r.i),vs(t),vs(t.next),t=n=r),t=t.next}while(t!==n);return Li(t)}function dm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ym(o,a)){let l=Zu(o,a);o=Li(o,o.next),l=Li(l,l.next),gs(o,e,t,i,r,s,0),gs(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function fm(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Xu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Mm(c))}r.sort(pm);for(let s=0;s<r.length;s++)t=mm(r[s],t);return t}function pm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function mm(n,e){const t=gm(n,e);if(!t)return e;const i=Zu(t,n);return Li(i,i.next),Li(t,t.next)}function gm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Sr(n,t))return t;do{if(Sr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&qu(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);_s(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&_m(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function _m(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function vm(n,e,t,i){let r=n;do r.z===0&&(r.z=vl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,xm(r)}function xm(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function vl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Mm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qu(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function jr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&qu(n,e,t,i,r,s,o,a)}function ym(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Sm(n,e)&&(_s(n,e)&&_s(e,n)&&wm(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||Sr(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Sr(n,e){return n.x===e.x&&n.y===e.y}function Yu(n,e,t,i){const r=Ks(xt(n,e,t)),s=Ks(xt(n,e,i)),o=Ks(xt(t,i,n)),a=Ks(xt(t,i,e));return!!(r!==s&&o!==a||r===0&&$s(n,t,e)||s===0&&$s(n,i,e)||o===0&&$s(t,n,i)||a===0&&$s(t,e,i))}function $s(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ks(n){return n>0?1:n<0?-1:0}function Sm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _s(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function wm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zu(n,e){const t=xl(n.i,n.x,n.y),i=xl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Yc(n,e,t,i){const r=xl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function vs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function xl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Em(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class bm{static triangulate(e,t,i=2){return lm(e,t,i)}}class sr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return sr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Zc(e),$c(i,e);let o=e.length;t.forEach(Zc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,$c(i,t[l]);const a=bm.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Zc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $c(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ql extends qt{constructor(e=new Wu([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new wt(r,3)),this.setAttribute("uv",new wt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Tm;let y,v=!1,D,C,b,P;f&&(y=f.getSpacedPoints(h),v=!0,d=!1,D=f.computeFrenetFrames(h,!1),C=new N,b=new N,P=new N),d||(m=0,p=0,g=0,_=0);const S=a.extractPoints(c);let M=S.shape;const L=S.holes;if(!sr.isClockWise(M)){M=M.reverse();for(let T=0,ce=L.length;T<ce;T++){const ee=L[T];sr.isClockWise(ee)&&(L[T]=ee.reverse())}}function U(T){const ee=10000000000000001e-36;let he=T[0];for(let $=1;$<=T.length;$++){const xe=$%T.length,ie=T[xe],Me=ie.x-he.x,Ge=ie.y-he.y,R=Me*Me+Ge*Ge,x=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(he.x),Math.abs(he.y)),H=ee*x*x;if(R<=H){T.splice(xe,1),$--;continue}he=ie}}U(M),L.forEach(U);const O=L.length,A=M;for(let T=0;T<O;T++){const ce=L[T];M=M.concat(ce)}function I(T,ce,ee){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(ce,ee)}const G=M.length;function B(T,ce,ee){let he,$,xe;const ie=T.x-ce.x,Me=T.y-ce.y,Ge=ee.x-T.x,R=ee.y-T.y,x=ie*ie+Me*Me,H=ie*R-Me*Ge;if(Math.abs(H)>Number.EPSILON){const q=Math.sqrt(x),j=Math.sqrt(Ge*Ge+R*R),Y=ce.x-Me/q,Ae=ce.y+ie/q,fe=ee.x-R/j,Ee=ee.y+Ge/j,Re=((fe-Y)*R-(Ee-Ae)*Ge)/(ie*R-Me*Ge);he=Y+ie*Re-T.x,$=Ae+Me*Re-T.y;const Q=he*he+$*$;if(Q<=2)return new ue(he,$);xe=Math.sqrt(Q/2)}else{let q=!1;ie>Number.EPSILON?Ge>Number.EPSILON&&(q=!0):ie<-Number.EPSILON?Ge<-Number.EPSILON&&(q=!0):Math.sign(Me)===Math.sign(R)&&(q=!0),q?(he=-Me,$=ie,xe=Math.sqrt(x)):(he=ie,$=Me,xe=Math.sqrt(x/2))}return new ue(he/xe,$/xe)}const J=[];for(let T=0,ce=A.length,ee=ce-1,he=T+1;T<ce;T++,ee++,he++)ee===ce&&(ee=0),he===ce&&(he=0),J[T]=B(A[T],A[ee],A[he]);const ne=[];let de,Le=J.concat();for(let T=0,ce=O;T<ce;T++){const ee=L[T];de=[];for(let he=0,$=ee.length,xe=$-1,ie=he+1;he<$;he++,xe++,ie++)xe===$&&(xe=0),ie===$&&(ie=0),de[he]=B(ee[he],ee[xe],ee[ie]);ne.push(de),Le=Le.concat(de)}let He;if(m===0)He=sr.triangulateShape(A,L);else{const T=[],ce=[];for(let ee=0;ee<m;ee++){const he=ee/m,$=p*Math.cos(he*Math.PI/2),xe=g*Math.sin(he*Math.PI/2)+_;for(let ie=0,Me=A.length;ie<Me;ie++){const Ge=I(A[ie],J[ie],xe);We(Ge.x,Ge.y,-$),he===0&&T.push(Ge)}for(let ie=0,Me=O;ie<Me;ie++){const Ge=L[ie];de=ne[ie];const R=[];for(let x=0,H=Ge.length;x<H;x++){const q=I(Ge[x],de[x],xe);We(q.x,q.y,-$),he===0&&R.push(q)}he===0&&ce.push(R)}}He=sr.triangulateShape(T,ce)}const Z=He.length,le=g+_;for(let T=0;T<G;T++){const ce=d?I(M[T],Le[T],le):M[T];v?(b.copy(D.normals[0]).multiplyScalar(ce.x),C.copy(D.binormals[0]).multiplyScalar(ce.y),P.copy(y[0]).add(b).add(C),We(P.x,P.y,P.z)):We(ce.x,ce.y,0)}for(let T=1;T<=h;T++)for(let ce=0;ce<G;ce++){const ee=d?I(M[ce],Le[ce],le):M[ce];v?(b.copy(D.normals[T]).multiplyScalar(ee.x),C.copy(D.binormals[T]).multiplyScalar(ee.y),P.copy(y[T]).add(b).add(C),We(P.x,P.y,P.z)):We(ee.x,ee.y,u/h*T)}for(let T=m-1;T>=0;T--){const ce=T/m,ee=p*Math.cos(ce*Math.PI/2),he=g*Math.sin(ce*Math.PI/2)+_;for(let $=0,xe=A.length;$<xe;$++){const ie=I(A[$],J[$],he);We(ie.x,ie.y,u+ee)}for(let $=0,xe=L.length;$<xe;$++){const ie=L[$];de=ne[$];for(let Me=0,Ge=ie.length;Me<Ge;Me++){const R=I(ie[Me],de[Me],he);v?We(R.x,R.y+y[h-1].y,y[h-1].x+ee):We(R.x,R.y,u+ee)}}}Ce(),ve();function Ce(){const T=r.length/3;if(d){let ce=0,ee=G*ce;for(let he=0;he<Z;he++){const $=He[he];Ue($[2]+ee,$[1]+ee,$[0]+ee)}ce=h+m*2,ee=G*ce;for(let he=0;he<Z;he++){const $=He[he];Ue($[0]+ee,$[1]+ee,$[2]+ee)}}else{for(let ce=0;ce<Z;ce++){const ee=He[ce];Ue(ee[2],ee[1],ee[0])}for(let ce=0;ce<Z;ce++){const ee=He[ce];Ue(ee[0]+G*h,ee[1]+G*h,ee[2]+G*h)}}i.addGroup(T,r.length/3-T,0)}function ve(){const T=r.length/3;let ce=0;Pe(A,ce),ce+=A.length;for(let ee=0,he=L.length;ee<he;ee++){const $=L[ee];Pe($,ce),ce+=$.length}i.addGroup(T,r.length/3-T,1)}function Pe(T,ce){let ee=T.length;for(;--ee>=0;){const he=ee;let $=ee-1;$<0&&($=T.length-1);for(let xe=0,ie=h+m*2;xe<ie;xe++){const Me=G*xe,Ge=G*(xe+1),R=ce+he+Me,x=ce+$+Me,H=ce+$+Ge,q=ce+he+Ge;dt(R,x,H,q)}}}function We(T,ce,ee){l.push(T),l.push(ce),l.push(ee)}function Ue(T,ce,ee){Je(T),Je(ce),Je(ee);const he=r.length/3,$=E.generateTopUV(i,r,he-3,he-2,he-1);Xe($[0]),Xe($[1]),Xe($[2])}function dt(T,ce,ee,he){Je(T),Je(ce),Je(he),Je(ce),Je(ee),Je(he);const $=r.length/3,xe=E.generateSideWallUV(i,r,$-6,$-3,$-2,$-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[3]),Xe(xe[1]),Xe(xe[2]),Xe(xe[3])}function Je(T){r.push(l[T*3+0]),r.push(l[T*3+1]),r.push(l[T*3+2])}function Xe(T){s.push(T.x),s.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Am(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new _l[r.type]().fromJSON(r)),new ql(i,e.options)}}const Tm={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-u),new ue(d,1-g),new ue(_,1-f)]:[new ue(a,1-l),new ue(h,1-u),new ue(p,1-g),new ue(m,1-f)]}};function Am(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yl extends Vl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class Ln extends qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let y=0;y<c;y++){const v=y*u-s;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,v=E+c*(f+1),D=E+1+c*(f+1),C=E+1+c*f;p.push(y,v,C),p.push(v,D,C)}this.setIndex(p),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zl extends qt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,E=(r+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _t extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rm extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cm extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $l extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pm extends $l{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ca=new ot,Kc=new N,Jc=new N;class $u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jc=new ot,qr=new N,ha=new N;class Lm extends $u{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(qr),ha.copy(i.position),ha.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ha),i.updateMatrixWorld(),r.makeTranslation(-qr.x,-qr.y,-qr.z),jc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class Dm extends $l{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kl extends Fu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Im extends $u{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nm extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Qc(n,e,t,i){const r=Fm(i);switch(t){case wu:return n*e;case Ul:return n*e/r.components*r.byteLength;case Nl:return n*e/r.components*r.byteLength;case bu:return n*e*2/r.components*r.byteLength;case Fl:return n*e*2/r.components*r.byteLength;case Eu:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case Ol:return n*e*4/r.components*r.byteLength;case ao:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:case Za:return Math.max(n,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(n,8)*Math.max(e,8)/2;case $a:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uo:case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tu:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fm(n){switch(n){case Cn:case Mu:return{byteLength:1,components:1};case us:case yu:case Ms:return{byteLength:2,components:1};case Dl:case Il:return{byteLength:2,components:4};case Pi:case Ll:case Tn:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);function Ku(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Om(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
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
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
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
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cg=`vec3 transformedNormal = objectNormal;
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
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Fg=`struct PhysicalMaterial {
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
}`,Og=`
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,r_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Bm,alphamap_pars_fragment:Hm,alphatest_fragment:Gm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:Zm,beginnormal_vertex:$m,bsdfs:Km,iridescence_fragment:Jm,bumpmap_pars_fragment:jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:tg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:rg,color_pars_vertex:sg,color_vertex:og,common:ag,cube_uv_reflection_fragment:lg,defaultnormal_vertex:cg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:dg,emissivemap_pars_fragment:fg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:_g,envmap_pars_fragment:vg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Pg,envmap_vertex:Mg,fog_vertex:yg,fog_pars_vertex:Sg,fog_fragment:wg,fog_pars_fragment:Eg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Ug,lights_physical_fragment:Ng,lights_physical_pars_fragment:Fg,lights_fragment_begin:Og,lights_fragment_maps:zg,lights_fragment_end:kg,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:$g,morphinstance_vertex:Kg,morphcolor_vertex:Jg,morphnormal_vertex:jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:r0,normal_vertex:s0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:M0,shadowmap_vertex:y0,shadowmask_pars_fragment:S0,skinbase_vertex:w0,skinning_pars_vertex:E0,skinning_vertex:b0,skinnormal_vertex:T0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:I0,uv_pars_vertex:U0,uv_vertex:N0,worldpos_vertex:F0,background_vert:O0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:B0,cube_vert:H0,cube_frag:G0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:$0,linedashed_frag:K0,meshbasic_vert:J0,meshbasic_frag:j0,meshlambert_vert:Q0,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:r_,meshphong_vert:s_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},wn={basic:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:kt([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:kt([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:kt([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:kt([me.common,me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:kt([me.lights,me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};wn.physical={uniforms:kt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Js={r:0,b:0,g:0},gi=new Pn,__=new ot;function v_(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const D=g(y);D===null?f(a,l):D&&D.isColor&&(f(D,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const D=g(v);D&&(D.isCubeTexture||D.mapping===Po)?(h===void 0&&(h=new De(new yt(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:yr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),gi.copy(v.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(gi)),h.material.toneMapped=tt.getTransfer(D.colorSpace)!==lt,(u!==D||d!==D.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new De(new Ln(2,2),new li({name:"BackgroundMaterial",uniforms:yr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(D.colorSpace)!==lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=D,d=D.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Js,Nu(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m,dispose:E}}function x_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,V,U,O){let A=!1;const I=u(U,V,L);s!==I&&(s=I,c(s.object)),A=p(M,U,V,O),A&&g(M,U,V,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,v(M,L,V,U),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,V){const U=V.wireframe===!0;let O=i[M.id];O===void 0&&(O={},i[M.id]=O);let A=O[L.id];A===void 0&&(A={},O[L.id]=A);let I=A[U];return I===void 0&&(I=d(l()),A[U]=I),I}function d(M){const L=[],V=[],U=[];for(let O=0;O<t;O++)L[O]=0,V[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,L,V,U){const O=s.attributes,A=L.attributes;let I=0;const G=V.getAttributes();for(const B in G)if(G[B].location>=0){const ne=O[B];let de=A[B];if(de===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;I++}return s.attributesNum!==I||s.index!==U}function g(M,L,V,U){const O={},A=L.attributes;let I=0;const G=V.getAttributes();for(const B in G)if(G[B].location>=0){let ne=A[B];ne===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),O[B]=de,I++}s.attributes=O,s.attributesNum=I,s.index=U}function _(){const M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const V=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;V[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),O[M]!==L&&(n.vertexAttribDivisor(M,L),O[M]=L)}function E(){const M=s.newAttributes,L=s.enabledAttributes;for(let V=0,U=L.length;V<U;V++)L[V]!==M[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function y(M,L,V,U,O,A,I){I===!0?n.vertexAttribIPointer(M,L,V,O,A):n.vertexAttribPointer(M,L,V,U,O,A)}function v(M,L,V,U){_();const O=U.attributes,A=V.getAttributes(),I=L.defaultAttributeValues;for(const G in A){const B=A[G];if(B.location>=0){let J=O[G];if(J===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const ne=J.normalized,de=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const He=Le.buffer,Z=Le.type,le=Le.bytesPerElement,Ce=Z===n.INT||Z===n.UNSIGNED_INT||J.gpuType===Ll;if(J.isInterleavedBufferAttribute){const ve=J.data,Pe=ve.stride,We=J.offset;if(ve.isInstancedInterleavedBuffer){for(let Ue=0;Ue<B.locationSize;Ue++)f(B.location+Ue,ve.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)m(B.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ue=0;Ue<B.locationSize;Ue++)y(B.location+Ue,de/B.locationSize,Z,ne,Pe*le,(We+de/B.locationSize*Ue)*le,Ce)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)f(B.location+ve,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<B.locationSize;ve++)m(B.location+ve);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,de/B.locationSize,Z,ne,de*le,de/B.locationSize*ve*le,Ce)}}else if(I!==void 0){const ne=I[G];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(B.location,ne);break;case 3:n.vertexAttrib3fv(B.location,ne);break;case 4:n.vertexAttrib4fv(B.location,ne);break;default:n.vertexAttrib1fv(B.location,ne)}}}}E()}function D(){P();for(const M in i){const L=i[M];for(const V in L){const U=L[V];for(const O in U)h(U[O].object),delete U[O];delete L[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const V in L){const U=L[V];for(const O in U)h(U[O].object),delete U[O];delete L[V]}delete i[M.id]}function b(M){for(const L in i){const V=i[L];if(V[M.id]===void 0)continue;const U=V[M.id];for(const O in U)h(U[O].object),delete U[O];delete V[M.id]}}function P(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function M_(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==vn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Cn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Tn&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:D,maxSamples:C}}function S_(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const E=s?0:i,y=E*4;let v=f.clippingState||null;l.value=v,v=h(g,d,y,p);for(let D=0;D!==y;++D)v[D]=t[D];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function w_(n){let e=new WeakMap;function t(o,a){return a===Ga?o.mapping=_r:a===Va&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ga||a===Va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const or=4,eh=[.125,.215,.35,.446,.526,.582],wi=20,ua=new Kl,th=new Qe;let da=null,fa=0,pa=0,ma=!1;const yi=(1+Math.sqrt(5))/2,Ji=1/yi,nh=[new N(-yi,Ji,0),new N(yi,Ji,0),new N(-Ji,0,yi),new N(Ji,0,yi),new N(0,yi,-Ji),new N(0,yi,Ji),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],E_=new N;class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=E_}=s;da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ms,format:vn,colorSpace:Mr,depthBuffer:!1},r=ih(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(s)),this._blurMaterial=T_(s,e,t)}return r}_compileMaterial(e){const t=new De(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,i,r,s){const l=new Nt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(th),u.toneMapping=ni,u.autoClear=!1;const g=new ai({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new De(new yt,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(th),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const v=this._cubeSize;js(r,y*v,E>2?v:0,v,v),u.setRenderTarget(r),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_r||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nh[(r-s-1)%nh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new De(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const f=[];let E=0;for(let b=0;b<wi;++b){const P=b/_,S=Math.exp(-P*P/2);f.push(S),b===0?E+=S:b<m&&(E+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const v=this._sizeLods[r],D=3*v*(r>y-or?r-y+or:0),C=4*(this._cubeSize-v);js(t,D,C,3*v,2*v),l.setRenderTarget(t),l.render(u,ua)}}function b_(n){const e=[],t=[],i=[];let r=n;const s=n-or+1+eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-or?l=eh[o-n+or-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,P=C>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(S,_*g*C),y.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,f*g*C)}const D=new qt;D.setAttribute("position",new an(E,_)),D.setAttribute("uv",new an(y,m)),D.setAttribute("faceIndex",new an(v,f)),e.push(D),r>or&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ih(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function T_(n,e,t){const i=new Float32Array(wi),r=new N(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rh(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function sh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function A_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ga||l===Va,h=l===_r||l===vr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ml(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Ml(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function R_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function C_(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let y=0,v=E.length;y<v;y+=3){const D=E[y+0],C=E[y+1],b=E[y+2];d.push(D,C,C,b,b,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const D=y+0,C=y+1,b=y+2;d.push(D,C,C,b,b,D)}}else return;const m=new(Cu(d)?Uu:Iu)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function P_(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function D_(n,e,t){const i=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=a.attributes.position.count*v,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const b=new Float32Array(D*C*4*u),P=new Pu(b,D,C,u);P.type=Tn,P.needsUpdate=!0;const S=v*4;for(let L=0;L<u;L++){const V=f[L],U=E[L],O=y[L],A=D*C*4*L;for(let I=0;I<V.count;I++){const G=I*S;g===!0&&(r.fromBufferAttribute(V,I),b[A+G+0]=r.x,b[A+G+1]=r.y,b[A+G+2]=r.z,b[A+G+3]=0),_===!0&&(r.fromBufferAttribute(U,I),b[A+G+4]=r.x,b[A+G+5]=r.y,b[A+G+6]=r.z,b[A+G+7]=0),m===!0&&(r.fromBufferAttribute(O,I),b[A+G+8]=r.x,b[A+G+9]=r.y,b[A+G+10]=r.z,b[A+G+11]=O.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new ue(D,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function I_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ju=new Lt,oh=new ku(1,1),ju=new Pu,Qu=new Ep,ed=new Ou,ah=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ah[r];if(s===void 0&&(s=new Float32Array(r),ah[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=lh[e];t===void 0&&(t=new Int32Array(e),lh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function U_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;uh.set(i),n.uniformMatrix2fv(this.addr,!1,uh),At(t,i)}}function k_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;hh.set(i),n.uniformMatrix3fv(this.addr,!1,hh),At(t,i)}}function B_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;ch.set(i),n.uniformMatrix4fv(this.addr,!1,ch),At(t,i)}}function H_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function X_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function $_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(oh.compareFunction=Ru,s=oh):s=Ju,t.setTexture2D(e||s,r)}function K_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qu,r)}function J_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ed,r)}function j_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ju,r)}function Q_(n){switch(n){case 5126:return U_;case 35664:return N_;case 35665:return F_;case 35666:return O_;case 35674:return z_;case 35675:return k_;case 35676:return B_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return j_}}function ev(n,e){n.uniform1fv(this.addr,e)}function tv(n,e){const t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function nv(n,e){const t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function iv(n,e){const t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function rv(n,e){const t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sv(n,e){const t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ov(n,e){const t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function av(n,e){n.uniform1iv(this.addr,e)}function lv(n,e){n.uniform2iv(this.addr,e)}function cv(n,e){n.uniform3iv(this.addr,e)}function hv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function dv(n,e){n.uniform2uiv(this.addr,e)}function fv(n,e){n.uniform3uiv(this.addr,e)}function pv(n,e){n.uniform4uiv(this.addr,e)}function mv(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ju,s[o])}function gv(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qu,s[o])}function _v(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ed,s[o])}function vv(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ju,s[o])}function xv(n){switch(n){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return vv}}class Mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function dh(n,e){n.seq.push(e),n.map[e.id]=e}function wv(n,e,t){const i=n.name,r=i.length;for(ga.lastIndex=0;;){const s=ga.exec(i),o=ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dh(t,c===void 0?new Mv(a,n,e):new yv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Sv(a),dh(t,u)),t=u}}}class fo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);wv(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ev=37297;let bv=0;function Tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ph=new qe;function Av(n){tt._getMatrix(ph,tt.workingColorSpace,n);const e=`mat3( ${ph.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case go:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tv(n.getShaderSource(e),o)}else return r}function Rv(n,e){const t=Av(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cv(n,e){let t;switch(e){case Nf:t="Linear";break;case Ff:t="Reinhard";break;case Of:t="Cineon";break;case vu:t="ACESFilmic";break;case kf:t="AgX";break;case Bf:t="Neutral";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new N;function Pv(){tt.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Dv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function gh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(Uv,Fv)}const Nv=new Map;function Fv(n,e){let t=Ye[e];if(t===void 0){const i=Nv.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(n){return n.replace(Ov,zv)}function zv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function kv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vr&&(e="ENVMAP_MODE_REFRACTION"),e}function Gv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Wv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kv(t),c=Bv(t),h=Hv(t),u=Gv(t),d=Vv(t),p=Lv(t),g=Dv(s),_=r.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ni?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=yl(o),o=gh(o,t),o=_h(o,t),a=yl(a),a=gh(a,t),a=_h(a,t),o=vh(o),a=vh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,v=E+f+a,D=fh(r,r.VERTEX_SHADER,y),C=fh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,D),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(L){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(D).trim(),O=r.getShaderInfoLog(C).trim();let A=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(A=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,D,C);else{const G=mh(r,D,"vertex"),B=mh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+G+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||O==="")&&(I=!1);I&&(L.diagnostics={runnable:A,programLog:V,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(D),r.deleteShader(C),P=new fo(r,_),S=Iv(r,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Ev)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yv(e),t.set(e,i)),i}}class Yv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Zv(n,e,t,i,r,s,o){const a=new Lu,l=new qv,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,U){const O=V.fog,A=U.geometry,I=S.isMeshStandardMaterial?V.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||I),B=G&&G.mapping===Po?G.image.height:null,J=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ne=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,de=ne!==void 0?ne.length:0;let Le=0;A.morphAttributes.position!==void 0&&(Le=1),A.morphAttributes.normal!==void 0&&(Le=2),A.morphAttributes.color!==void 0&&(Le=3);let He,Z,le,Ce;if(J){const it=wn[J];He=it.vertexShader,Z=it.fragmentShader}else He=S.vertexShader,Z=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const ve=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),We=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,dt=!!S.map,Je=!!S.matcap,Xe=!!G,T=!!S.aoMap,ce=!!S.lightMap,ee=!!S.bumpMap,he=!!S.normalMap,$=!!S.displacementMap,xe=!!S.emissiveMap,ie=!!S.metalnessMap,Me=!!S.roughnessMap,Ge=S.anisotropy>0,R=S.clearcoat>0,x=S.dispersion>0,H=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,Y=Ge&&!!S.anisotropyMap,Ae=R&&!!S.clearcoatMap,fe=R&&!!S.clearcoatNormalMap,Ee=R&&!!S.clearcoatRoughnessMap,Re=H&&!!S.iridescenceMap,Q=H&&!!S.iridescenceThicknessMap,ye=q&&!!S.sheenColorMap,Oe=q&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,pe=!!S.specularColorMap,Be=!!S.specularIntensityMap,F=j&&!!S.transmissionMap,ge=j&&!!S.thicknessMap,te=!!S.gradientMap,we=!!S.alphaMap,re=S.alphaTest>0,K=!!S.alphaHash,be=!!S.extensions;let Ve=ni;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const ft={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:Z,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:We,instancingColor:We&&U.instanceColor!==null,instancingMorph:We&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Mr,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Je,envMap:Xe,envMapMode:Xe&&G.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:ce,bumpMap:ee,normalMap:he,displacementMap:d&&$,emissiveMap:xe,normalMapObjectSpace:he&&S.normalMapType===Wf,normalMapTangentSpace:he&&S.normalMapType===Au,metalnessMap:ie,roughnessMap:Me,anisotropy:Ge,anisotropyMap:Y,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:H,iridescenceMap:Re,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:ye,sheenRoughnessMap:Oe,specularMap:Fe,specularColorMap:pe,specularIntensityMap:Be,transmission:j,transmissionMap:F,thicknessMap:ge,gradientMap:te,opaque:S.transparent===!1&&S.blending===dr&&S.alphaToCoverage===!1,alphaMap:we,alphaTest:re,alphaHash:K,combine:S.combine,mapUv:dt&&_(S.map.channel),aoMapUv:T&&_(S.aoMap.channel),lightMapUv:ce&&_(S.lightMap.channel),bumpMapUv:ee&&_(S.bumpMap.channel),normalMapUv:he&&_(S.normalMap.channel),displacementMapUv:$&&_(S.displacementMap.channel),emissiveMapUv:xe&&_(S.emissiveMap.channel),metalnessMapUv:ie&&_(S.metalnessMap.channel),roughnessMapUv:Me&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(S.sheenRoughnessMap.channel),specularMapUv:Fe&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:Be&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:we&&_(S.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(he||Ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!A.attributes.uv&&(dt||we),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:U.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:xe&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let L;if(M){const V=wn[M];L=zp.clone(V.uniforms)}else L=S.uniforms;return L}function D(S,M){let L;for(let V=0,U=h.length;V<U;V++){const O=h[V];if(O.cacheKey===M){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Wv(n,M,S,s),h.push(L)),L}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:P}}function $v(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Kv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Kv),i.length>1&&i.sort(d||Mh),r.length>1&&r.sort(d||Mh)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Jv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new yh,n.set(i,[o])):r>=s.length?(o=new yh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Qv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ex=0;function tx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nx(n){const e=new jv,t=Qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ot,o=new ot;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,y=0,v=0,D=0,C=0,b=0;c.sort(tx);for(let S=0,M=c.length;S<M;S++){const L=c[S],V=L.color,U=L.intensity,O=L.distance,A=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*U,u+=V.g*U,d+=V.b*U;else if(L.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(L.sh.coefficients[I],U);b++}else if(L.isDirectionalLight){const I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=A,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=I,p++}else if(L.isSpotLight){const I=e.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(V).multiplyScalar(U),I.distance=O,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,i.spot[_]=I;const G=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,G.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=G.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=A,v++}_++}else if(L.isRectAreaLight){const I=e.get(L);I.color.copy(V).multiplyScalar(U),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=I,m++}else if(L.isPointLight){const I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),I.distance=L.distance,I.decay=L.decay,L.castShadow){const G=L.shadow,B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=I,g++}else if(L.isHemisphereLight){const I=e.get(L);I.skyColor.copy(L.color).multiplyScalar(U),I.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[f]=I,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=b,i.version=ex++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Sh(n){const e=new nx(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ix(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sh(n),e.set(r,[a])):s>=o.length?(a=new Sh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function ox(n,e,t){let i=new Gl;const r=new ue,s=new ue,o=new ct,a=new Rm({depthPacking:Vf}),l=new Cm,c={},h=t.maxTextureSize,u={[si]:Gt,[Gt]:si,[gn]:gn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let f=this.type;this.render=function(C,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ti),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=f!==Hn&&this.type===Hn,O=f===Hn&&this.type!==Hn;for(let A=0,I=C.length;A<I;A++){const G=C[A],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const J=B.getFrameExtents();if(r.multiply(J),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,B.mapSize.y=s.y)),B.map===null||U===!0||O===!0){const de=this.type!==Hn?{minFilter:en,magFilter:en}:{};B.map!==null&&B.map.dispose(),B.map=new oi(r.x,r.y,de),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ne=B.getViewportCount();for(let de=0;de<ne;de++){const Le=B.getViewport(de);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),V.viewport(o),B.updateMatrices(G,de),i=B.getFrustum(),v(b,P,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===Hn&&E(B,P),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function E(C,b){const P=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,P,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,P,p,_,null)}function y(C,b,P,S){let M=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=M.uuid,U=b.uuid;let O=c[V];O===void 0&&(O={},c[V]=O);let A=O[U];A===void 0&&(A=M.clone(),O[U]=A,b.addEventListener("dispose",D)),M=A}if(M.visible=b.visible,M.wireframe=b.wireframe,S===Hn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=n.properties.get(M);V.light=P}return M}function v(C,b,P,S,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const U=e.update(C),O=C.material;if(Array.isArray(O)){const A=U.groups;for(let I=0,G=A.length;I<G;I++){const B=A[I],J=O[B.materialIndex];if(J&&J.visible){const ne=y(C,J,S,M);C.onBeforeShadow(n,C,b,P,U,ne,B),n.renderBufferDirect(P,null,U,ne,C,B),C.onAfterShadow(n,C,b,P,U,ne,B)}}}else if(O.visible){const A=y(C,O,S,M);C.onBeforeShadow(n,C,b,P,U,A,null),n.renderBufferDirect(P,null,U,A,C,null),C.onAfterShadow(n,C,b,P,U,A,null)}}const V=C.children;for(let U=0,O=V.length;U<O;U++)v(V[U],b,P,S,M)}function D(C){C.target.removeEventListener("dispose",D);for(const P in c){const S=c[P],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const ax={[Na]:Fa,[Oa]:Ba,[za]:Ha,[gr]:ka,[Fa]:Na,[Ba]:Oa,[Ha]:za,[ka]:gr};function lx(n,e){function t(){let F=!1;const ge=new ct;let te=null;const we=new ct(0,0,0,0);return{setMask:function(re){te!==re&&!F&&(n.colorMask(re,re,re,re),te=re)},setLocked:function(re){F=re},setClear:function(re,K,be,Ve,ft){ft===!0&&(re*=Ve,K*=Ve,be*=Ve),ge.set(re,K,be,Ve),we.equals(ge)===!1&&(n.clearColor(re,K,be,Ve),we.copy(ge))},reset:function(){F=!1,te=null,we.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,te=null,we=null,re=null;return{setReversed:function(K){if(ge!==K){const be=e.get("EXT_clip_control");K?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ge=K;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return ge},setTest:function(K){K?ve(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(K){te!==K&&!F&&(n.depthMask(K),te=K)},setFunc:function(K){if(ge&&(K=ax[K]),we!==K){switch(K){case Na:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case Oa:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Ba:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=K}},setLocked:function(K){F=K},setClear:function(K){re!==K&&(ge&&(K=1-K),n.clearDepth(K),re=K)},reset:function(){F=!1,te=null,we=null,re=null,ge=!1}}}function r(){let F=!1,ge=null,te=null,we=null,re=null,K=null,be=null,Ve=null,ft=null;return{setTest:function(it){F||(it?ve(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(it){ge!==it&&!F&&(n.stencilMask(it),ge=it)},setFunc:function(it,ln,Nn){(te!==it||we!==ln||re!==Nn)&&(n.stencilFunc(it,ln,Nn),te=it,we=ln,re=Nn)},setOp:function(it,ln,Nn){(K!==it||be!==ln||Ve!==Nn)&&(n.stencilOp(it,ln,Nn),K=it,be=ln,Ve=Nn)},setLocked:function(it){F=it},setClear:function(it){ft!==it&&(n.clearStencil(it),ft=it)},reset:function(){F=!1,ge=null,te=null,we=null,re=null,K=null,be=null,Ve=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,D=null,C=null,b=new Qe(0,0,0),P=0,S=!1,M=null,L=null,V=null,U=null,O=null;const A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=G>=2);let J=null,ne={};const de=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),He=new ct().fromArray(de),Z=new ct().fromArray(Le);function le(F,ge,te,we){const re=new Uint8Array(4),K=n.createTexture();n.bindTexture(F,K),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<te;be++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ge+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return K}const Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(gr),ee(!1),he(_c),ve(n.CULL_FACE),T(ti);function ve(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function We(F,ge){return u[F]!==ge?(n.bindFramebuffer(F,ge),u[F]=ge,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ue(F,ge){let te=p,we=!1;if(F){te=d.get(ge),te===void 0&&(te=[],d.set(ge,te));const re=F.textures;if(te.length!==re.length||te[0]!==n.COLOR_ATTACHMENT0){for(let K=0,be=re.length;K<be;K++)te[K]=n.COLOR_ATTACHMENT0+K;te.length=re.length,we=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,we=!0);we&&n.drawBuffers(te)}function dt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Je={[Si]:n.FUNC_ADD,[gf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};Je[vf]=n.MIN,Je[xf]=n.MAX;const Xe={[Mf]:n.ZERO,[yf]:n.ONE,[Sf]:n.SRC_COLOR,[Ia]:n.SRC_ALPHA,[Rf]:n.SRC_ALPHA_SATURATE,[Tf]:n.DST_COLOR,[Ef]:n.DST_ALPHA,[wf]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[bf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Pf]:n.ONE_MINUS_CONSTANT_COLOR,[Lf]:n.CONSTANT_ALPHA,[Df]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,ge,te,we,re,K,be,Ve,ft,it){if(F===ti){_===!0&&(Pe(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),F!==mf){if(F!==m||it!==S){if((f!==Si||v!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,v=Si),it)switch(F){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,y=null,D=null,C=null,b.set(0,0,0),P=0,m=F,S=it}return}re=re||ge,K=K||te,be=be||we,(ge!==f||re!==v)&&(n.blendEquationSeparate(Je[ge],Je[re]),f=ge,v=re),(te!==E||we!==y||K!==D||be!==C)&&(n.blendFuncSeparate(Xe[te],Xe[we],Xe[K],Xe[be]),E=te,y=we,D=K,C=be),(Ve.equals(b)===!1||ft!==P)&&(n.blendColor(Ve.r,Ve.g,Ve.b,ft),b.copy(Ve),P=ft),m=F,S=!1}function ce(F,ge){F.side===gn?Pe(n.CULL_FACE):ve(n.CULL_FACE);let te=F.side===Gt;ge&&(te=!te),ee(te),F.blending===dr&&F.transparent===!1?T(ti):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const we=F.stencilWrite;a.setTest(we),we&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function he(F){F!==ff?(ve(n.CULL_FACE),F!==L&&(F===_c?n.cullFace(n.BACK):F===pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),L=F}function $(F){F!==V&&(I&&n.lineWidth(F),V=F)}function xe(F,ge,te){F?(ve(n.POLYGON_OFFSET_FILL),(U!==ge||O!==te)&&(n.polygonOffset(ge,te),U=ge,O=te)):Pe(n.POLYGON_OFFSET_FILL)}function ie(F){F?ve(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function Me(F){F===void 0&&(F=n.TEXTURE0+A-1),J!==F&&(n.activeTexture(F),J=F)}function Ge(F,ge,te){te===void 0&&(J===null?te=n.TEXTURE0+A-1:te=J);let we=ne[te];we===void 0&&(we={type:void 0,texture:void 0},ne[te]=we),(we.type!==F||we.texture!==ge)&&(J!==te&&(n.activeTexture(te),J=te),n.bindTexture(F,ge||Ce[F]),we.type=F,we.texture=ge)}function R(){const F=ne[J];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){He.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function Oe(F){Z.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Fe(F,ge){let te=c.get(ge);te===void 0&&(te=new WeakMap,c.set(ge,te));let we=te.get(F);we===void 0&&(we=n.getUniformBlockIndex(ge,F.name),te.set(F,we))}function pe(F,ge){const we=c.get(ge).get(F);l.get(ge)!==we&&(n.uniformBlockBinding(ge,we,F.__bindingPointIndex),l.set(ge,we))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,ne={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,y=null,v=null,D=null,C=null,b=new Qe(0,0,0),P=0,S=!1,M=null,L=null,V=null,U=null,O=null,He.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Pe,bindFramebuffer:We,drawBuffers:Ue,useProgram:dt,setBlending:T,setMaterial:ce,setFlipSided:ee,setCullFace:he,setLineWidth:$,setPolygonOffset:xe,setScissorTest:ie,activeTexture:Me,bindTexture:Ge,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:Re,texImage3D:Q,updateUBOMapping:Fe,uniformBlockBinding:pe,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:ye,viewport:Oe,reset:Be}}function cx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return p?new OffscreenCanvas(R,x):vo("canvas")}function _(R,x,H){let q=1;const j=Ge(R);if((j.width>H||j.height>H)&&(q=H/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*j.width),Ae=Math.floor(q*j.height);u===void 0&&(u=g(Y,Ae));const fe=x?g(Y,Ae):u;return fe.width=Y,fe.height=Ae,fe.getContext("2d").drawImage(R,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Ae+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,x,H,q,j=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=x;if(x===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),x===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RG8UI),H===n.UNSIGNED_SHORT&&(Y=n.RG16UI),H===n.UNSIGNED_INT&&(Y=n.RG32UI),H===n.BYTE&&(Y=n.RG8I),H===n.SHORT&&(Y=n.RG16I),H===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),H===n.UNSIGNED_INT&&(Y=n.RGB32UI),H===n.BYTE&&(Y=n.RGB8I),H===n.SHORT&&(Y=n.RGB16I),H===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),H===n.UNSIGNED_INT&&(Y=n.RGBA32UI),H===n.BYTE&&(Y=n.RGBA8I),H===n.SHORT&&(Y=n.RGBA16I),H===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const Ae=j?go:tt.getTransfer(q);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=Ae===lt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,x){let H;return R?x===null||x===Pi||x===ds?H=n.DEPTH24_STENCIL8:x===Tn?H=n.DEPTH32F_STENCIL8:x===us&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===ds?H=n.DEPTH_COMPONENT24:x===Tn?H=n.DEPTH_COMPONENT32F:x===us&&(H=n.DEPTH_COMPONENT16),H}function D(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==bn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){const x=R.target;x.removeEventListener("dispose",C),P(x),x.isVideoTexture&&h.delete(x)}function b(R){const x=R.target;x.removeEventListener("dispose",b),M(x)}function P(R){const x=i.get(R);if(x.__webglInit===void 0)return;const H=R.source,q=d.get(H);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(q).length===0&&d.delete(H)}i.remove(R)}function S(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const H=R.source,q=d.get(H);delete q[x.__cacheKey],o.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[q][j]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=R.textures;for(let q=0,j=H.length;q<j;q++){const Y=i.get(H[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(H[q])}i.remove(R)}let L=0;function V(){L=0}function U(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function O(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function A(R,x){const H=i.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(H,R,x);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function I(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Ce(H,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function G(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Ce(H,R,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function B(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ve(H,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const J={[xr]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},ne={[en]:n.NEAREST,[Hf]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},de={[Xf]:n.NEVER,[Jf]:n.ALWAYS,[qf]:n.LESS,[Ru]:n.LEQUAL,[Yf]:n.EQUAL,[Kf]:n.GEQUAL,[Zf]:n.GREATER,[$f]:n.NOTEQUAL};function Le(R,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===bn||x.magFilter===Oo||x.magFilter===Cs||x.magFilter===Ai||x.minFilter===bn||x.minFilter===Oo||x.minFilter===Cs||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,J[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ne[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ne[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Cs&&x.minFilter!==Ai||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function He(R,x){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));const q=x.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const Y=O(x);if(Y!==R.__cacheKey){j[Y]===void 0&&(j[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[Y].usedTimes++;const Ae=j[R.__cacheKey];Ae!==void 0&&(j[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(x)),R.__cacheKey=Y,R.__webglTexture=j[Y].texture}return H}function Z(R,x,H){return Math.floor(Math.floor(R/H)/x)}function le(R,x,H,q){const Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,q,x.data);else{Y.sort((Q,ye)=>Q.start-ye.start);let Ae=0;for(let Q=1;Q<Y.length;Q++){const ye=Y[Ae],Oe=Y[Q],Fe=ye.start+ye.count,pe=Z(Oe.start,x.width,4),Be=Z(ye.start,x.width,4);Oe.start<=Fe+1&&pe===Be&&Z(Oe.start+Oe.count-1,x.width,4)===pe?ye.count=Math.max(ye.count,Oe.start+Oe.count-ye.start):(++Ae,Y[Ae]=Oe)}Y.length=Ae+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ye=Y.length;Q<ye;Q++){const Oe=Y[Q],Fe=Math.floor(Oe.start/4),pe=Math.ceil(Oe.count/4),Be=Fe%x.width,F=Math.floor(Fe/x.width),ge=pe,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Be,F,ge,te,H,q,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Ce(R,x,H){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const j=He(R,x),Y=x.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+H);const Ae=i.get(Y);if(Y.version!==Ae.__version||j===!0){t.activeTexture(n.TEXTURE0+H);const fe=tt.getPrimaries(tt.workingColorSpace),Ee=x.colorSpace===Qn?null:tt.getPrimaries(x.colorSpace),Re=x.colorSpace===Qn||fe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Q=_(x.image,!1,r.maxTextureSize);Q=Me(x,Q);const ye=s.convert(x.format,x.colorSpace),Oe=s.convert(x.type);let Fe=y(x.internalFormat,ye,Oe,x.colorSpace,x.isVideoTexture);Le(q,x);let pe;const Be=x.mipmaps,F=x.isVideoTexture!==!0,ge=Ae.__version===void 0||j===!0,te=Y.dataReady,we=D(x,Q);if(x.isDepthTexture)Fe=v(x.format===ps,x.type),ge&&(F?t.texStorage2D(n.TEXTURE_2D,1,Fe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Q.width,Q.height,0,ye,Oe,null));else if(x.isDataTexture)if(Be.length>0){F&&ge&&t.texStorage2D(n.TEXTURE_2D,we,Fe,Be[0].width,Be[0].height);for(let re=0,K=Be.length;re<K;re++)pe=Be[re],F?te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,Oe,pe.data):t.texImage2D(n.TEXTURE_2D,re,Fe,pe.width,pe.height,0,ye,Oe,pe.data);x.generateMipmaps=!1}else F?(ge&&t.texStorage2D(n.TEXTURE_2D,we,Fe,Q.width,Q.height),te&&le(x,Q,ye,Oe)):t.texImage2D(n.TEXTURE_2D,0,Fe,Q.width,Q.height,0,ye,Oe,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Fe,Be[0].width,Be[0].height,Q.depth);for(let re=0,K=Be.length;re<K;re++)if(pe=Be[re],x.format!==vn)if(ye!==null)if(F){if(te)if(x.layerUpdates.size>0){const be=Qc(pe.width,pe.height,x.format,x.type);for(const Ve of x.layerUpdates){const ft=pe.data.subarray(Ve*be/pe.data.BYTES_PER_ELEMENT,(Ve+1)*be/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ve,pe.width,pe.height,1,ye,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,ye,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Fe,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,ye,Oe,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Fe,pe.width,pe.height,Q.depth,0,ye,Oe,pe.data)}else{F&&ge&&t.texStorage2D(n.TEXTURE_2D,we,Fe,Be[0].width,Be[0].height);for(let re=0,K=Be.length;re<K;re++)pe=Be[re],x.format!==vn?ye!==null?F?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,ye,Oe,pe.data):t.texImage2D(n.TEXTURE_2D,re,Fe,pe.width,pe.height,0,ye,Oe,pe.data)}else if(x.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Fe,Q.width,Q.height,Q.depth),te)if(x.layerUpdates.size>0){const re=Qc(Q.width,Q.height,x.format,x.type);for(const K of x.layerUpdates){const be=Q.data.subarray(K*re/Q.data.BYTES_PER_ELEMENT,(K+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ye,Oe,be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ye,Oe,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Q.width,Q.height,Q.depth,0,ye,Oe,Q.data);else if(x.isData3DTexture)F?(ge&&t.texStorage3D(n.TEXTURE_3D,we,Fe,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ye,Oe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Q.width,Q.height,Q.depth,0,ye,Oe,Q.data);else if(x.isFramebufferTexture){if(ge)if(F)t.texStorage2D(n.TEXTURE_2D,we,Fe,Q.width,Q.height);else{let re=Q.width,K=Q.height;for(let be=0;be<we;be++)t.texImage2D(n.TEXTURE_2D,be,Fe,re,K,0,ye,Oe,null),re>>=1,K>>=1}}else if(Be.length>0){if(F&&ge){const re=Ge(Be[0]);t.texStorage2D(n.TEXTURE_2D,we,Fe,re.width,re.height)}for(let re=0,K=Be.length;re<K;re++)pe=Be[re],F?te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye,Oe,pe):t.texImage2D(n.TEXTURE_2D,re,Fe,ye,Oe,pe);x.generateMipmaps=!1}else if(F){if(ge){const re=Ge(Q);t.texStorage2D(n.TEXTURE_2D,we,Fe,re.width,re.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Oe,Q)}else t.texImage2D(n.TEXTURE_2D,0,Fe,ye,Oe,Q);m(x)&&f(q),Ae.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ve(R,x,H){if(x.image.length!==6)return;const q=He(R,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const Y=i.get(j);if(j.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+H);const Ae=tt.getPrimaries(tt.workingColorSpace),fe=x.colorSpace===Qn?null:tt.getPrimaries(x.colorSpace),Ee=x.colorSpace===Qn||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let K=0;K<6;K++)!Re&&!Q?ye[K]=_(x.image[K],!0,r.maxCubemapSize):ye[K]=Q?x.image[K].image:x.image[K],ye[K]=Me(x,ye[K]);const Oe=ye[0],Fe=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),Be=y(x.internalFormat,Fe,pe,x.colorSpace),F=x.isVideoTexture!==!0,ge=Y.__version===void 0||q===!0,te=j.dataReady;let we=D(x,Oe);Le(n.TEXTURE_CUBE_MAP,x);let re;if(Re){F&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Be,Oe.width,Oe.height);for(let K=0;K<6;K++){re=ye[K].mipmaps;for(let be=0;be<re.length;be++){const Ve=re[be];x.format!==vn?Fe!==null?F?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,Ve.width,Ve.height,Fe,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,Be,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,Ve.width,Ve.height,Fe,pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,Be,Ve.width,Ve.height,0,Fe,pe,Ve.data)}}}else{if(re=x.mipmaps,F&&ge){re.length>0&&we++;const K=Ge(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Be,K.width,K.height)}for(let K=0;K<6;K++)if(Q){F?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye[K].width,ye[K].height,Fe,pe,ye[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ye[K].width,ye[K].height,0,Fe,pe,ye[K].data);for(let be=0;be<re.length;be++){const ft=re[be].image[K].image;F?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,ft.width,ft.height,Fe,pe,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,Be,ft.width,ft.height,0,Fe,pe,ft.data)}}else{F?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Fe,pe,ye[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Fe,pe,ye[K]);for(let be=0;be<re.length;be++){const Ve=re[be];F?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,Fe,pe,Ve.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,Be,Fe,pe,Ve.image[K])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),Y.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Pe(R,x,H,q,j,Y){const Ae=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),Ee=y(H.internalFormat,Ae,fe,H.colorSpace),Re=i.get(x),Q=i.get(H);if(Q.__renderTarget=x,!Re.__hasExternalTextures){const ye=Math.max(1,x.width>>Y),Oe=Math.max(1,x.height>>Y);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,Ee,ye,Oe,x.depth,0,Ae,fe,null):t.texImage2D(j,Y,Ee,ye,Oe,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,Q.__webglTexture,0,$(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,Q.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,j),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=$(x);xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{const q=x.textures;for(let j=0;j<q.length;j++){const Y=q[j],Ae=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),Ee=y(Y.internalFormat,Ae,fe,Y.colorSpace),Re=$(x);H&&xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ee,x.width,x.height):xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),A(x.depthTexture,0);const j=q.__webglTexture,Y=$(x);if(x.depthTexture.format===fs)xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===ps)xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function dt(R){const x=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?Ue(x.__webglFramebuffer[0],R):Ue(x.__webglFramebuffer,R)}else if(H){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),We(x.__webglDepthbuffer[q],R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),We(x.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(R,x,H){const q=i.get(R);x!==void 0&&Pe(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&dt(R)}function Xe(R){const x=R.texture,H=i.get(R),q=i.get(x);R.addEventListener("dispose",b);const j=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Ae=j.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)H.__webglFramebuffer[fe][Ee]=n.createFramebuffer()}else H.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)H.__webglFramebuffer[fe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,Ee=j.length;fe<Ee;fe++){const Re=i.get(j[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const Ee=j[fe];H.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const Re=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),ye=y(Ee.internalFormat,Re,Q,Ee.colorSpace,R.isXRRenderTarget===!0),Oe=$(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ye,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),We(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Pe(H.__webglFramebuffer[fe][Ee],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else Pe(H.__webglFramebuffer[fe],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Ee=j.length;fe<Ee;fe++){const Re=j[fe],Q=i.get(Re);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Le(n.TEXTURE_2D,Re),Pe(H.__webglFramebuffer,R,Re,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Re)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),Le(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)Pe(H.__webglFramebuffer[Ee],R,x,n.COLOR_ATTACHMENT0,fe,Ee);else Pe(H.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&f(fe),t.unbindTexture()}R.depthBuffer&&dt(R)}function T(R){const x=R.textures;for(let H=0,q=x.length;H<q;H++){const j=x[H];if(m(j)){const Y=E(R),Ae=i.get(j).__webglTexture;t.bindTexture(Y,Ae),f(Y),t.unbindTexture()}}}const ce=[],ee=[];function he(R){if(R.samples>0){if(xe(R)===!1){const x=R.textures,H=R.width,q=R.height;let j=n.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),fe=x.length>1;if(fe)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Q=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,H,q,0,0,H,q,j,n.NEAREST),l===!0&&(ce.length=0,ee.length=0,ce.push(n.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ce.push(Y),ee.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const Q=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function $(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ie(R){const x=o.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function Me(R,x){const H=R.colorSpace,q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Mr&&H!==Qn&&(tt.getTransfer(H)===lt?(q!==vn||j!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=A,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=xe}function hx(n,e){function t(i,r=Qn){let s;const o=tt.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return n.BYTE;if(i===yu)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Ms)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Eu)return n.RGB;if(i===vn)return n.RGBA;if(i===fs)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Nl)return n.RED_INTEGER;if(i===bu)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===Ol)return n.RGBA_INTEGER;if(i===ao||i===lo||i===co||i===ho)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===qa||i===Ya||i===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ka||i===Ja)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$a||i===Ka)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uo||i===dl||i===fl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uo)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tu||i===pl||i===ml||i===gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dx=`
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

}`;class fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:ux,fragmentShader:dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class px extends Dr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new fx,m=t.getContextAttributes();let f=null,E=null;const y=[],v=[],D=new ue;let C=null;const b=new Nt;b.viewport=new ct;const P=new Nt;P.viewport=new ct;const S=[b,P],M=new Nm;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=y[Z];return le===void 0&&(le=new ra,y[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=y[Z];return le===void 0&&(le=new ra,y[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=y[Z];return le===void 0&&(le=new ra,y[Z]=le),le.getHandSpace()};function U(Z){const le=v.indexOf(Z.inputSource);if(le===-1)return;const Ce=y[le];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,c||o),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",A);for(let Z=0;Z<y.length;Z++){const le=v[Z];le!==null&&(v[Z]=null,y[Z].disconnect(le))}L=null,V=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,E=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",A),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ve=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=m.stencil?ps:fs,ve=m.stencil?ds:Pi);const We={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new oi(d.textureWidth,d.textureHeight,{format:vn,type:Cn,depthTexture:new ku(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new oi(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function A(Z){for(let le=0;le<Z.removed.length;le++){const Ce=Z.removed[le],ve=v.indexOf(Ce);ve>=0&&(v[ve]=null,y[ve].disconnect(Ce))}for(let le=0;le<Z.added.length;le++){const Ce=Z.added[le];let ve=v.indexOf(Ce);if(ve===-1){for(let We=0;We<y.length;We++)if(We>=v.length){v.push(Ce),ve=We;break}else if(v[We]===null){v[We]=Ce,ve=We;break}if(ve===-1)break}const Pe=y[ve];Pe&&Pe.connect(Ce)}}const I=new N,G=new N;function B(Z,le,Ce){I.setFromMatrixPosition(le.matrixWorld),G.setFromMatrixPosition(Ce.matrixWorld);const ve=I.distanceTo(G),Pe=le.projectionMatrix.elements,We=Ce.projectionMatrix.elements,Ue=Pe[14]/(Pe[10]-1),dt=Pe[14]/(Pe[10]+1),Je=(Pe[9]+1)/Pe[5],Xe=(Pe[9]-1)/Pe[5],T=(Pe[8]-1)/Pe[0],ce=(We[8]+1)/We[0],ee=Ue*T,he=Ue*ce,$=ve/(-T+ce),xe=$*-T;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xe),Z.translateZ($),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ie=Ue+$,Me=dt+$,Ge=ee-xe,R=he+(ve-xe),x=Je*dt/Me*ie,H=Xe*dt/Me*ie;Z.projectionMatrix.makePerspective(Ge,R,x,H,ie,Me),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,Ce=Z.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(Ce=_.depthFar)),M.near=P.near=b.near=le,M.far=P.far=b.far=Ce,(L!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far),b.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=b.layers.mask|P.layers.mask;const ve=Z.parent,Pe=M.cameras;J(M,ve);for(let We=0;We<Pe.length;We++)J(Pe[We],ve);Pe.length===2?B(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),ne(Z,M,ve)};function ne(Z,le,Ce){Ce===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let de=null;function Le(Z,le){if(h=le.getViewerPose(c||o),g=le,h!==null){const Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ve=!1;Ce.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let Ue=0;Ue<Ce.length;Ue++){const dt=Ce[Ue];let Je=null;if(p!==null)Je=p.getViewport(dt);else{const T=u.getViewSubImage(d,dt);Je=T.viewport,Ue===0&&(e.setRenderTargetTextures(E,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(E))}let Xe=S[Ue];Xe===void 0&&(Xe=new Nt,Xe.layers.enable(Ue),Xe.viewport=new ct,S[Ue]=Xe),Xe.matrix.fromArray(dt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(dt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Je.x,Je.y,Je.width,Je.height),Ue===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Xe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ue=u.getDepthInformation(Ce[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let Ce=0;Ce<y.length;Ce++){const ve=v[Ce],Pe=y[Ce];ve!==null&&Pe!==void 0&&Pe.update(ve,le,c||o)}de&&de(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const He=new Ku;He.setAnimationLoop(Le),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}const _i=new Pn,mx=new ot;function gx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Nu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _x(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const v=y.program;i.uniformBlockBinding(E,v)}function c(E,y){let v=r[E.id];v===void 0&&(g(E),v=h(E),r[E.id]=v,E.addEventListener("dispose",m));const D=y.program;i.updateUBOMapping(E,D);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function h(E){const y=u();E.__bindingPointIndex=y;const v=n.createBuffer(),D=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],v=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,b=v.length;C<b;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,M=P.length;S<M;S++){const L=P[S];if(p(L,C,S,D)===!0){const V=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let A=0;A<U.length;A++){const I=U[A],G=_(I);typeof I=="number"||typeof I=="boolean"?(L.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,V+O,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=0,L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=0,L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=0):(I.toArray(L.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,v,D){const C=E.value,b=y+"_"+v;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{const P=D[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(E){const y=E.uniforms;let v=0;const D=16;for(let b=0,P=y.length;b<P;b++){const S=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,L=S.length;M<L;M++){const V=S[M],U=Array.isArray(V.value)?V.value:[V.value];for(let O=0,A=U.length;O<A;O++){const I=U[O],G=_(I),B=v%D,J=B%G.boundary,ne=B+J;v+=J,ne!==0&&D-ne<G.storage&&(v+=D-ne),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=G.storage}}}const C=v%D;return C>0&&(v+=D-C),E.__size=v,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class vx{constructor(e={}){const{canvas:t=mp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let D=!1;this._outputColorSpace=Wt;let C=0,b=0,P=null,S=-1,M=null;const L=new ct,V=new ct;let U=null;const O=new Qe(0);let A=0,I=t.width,G=t.height,B=1,J=null,ne=null;const de=new ct(0,0,I,G),Le=new ct(0,0,I,G);let He=!1;const Z=new Gl;let le=!1,Ce=!1;const ve=new ot,Pe=new ot,We=new N,Ue=new ct,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Xe(){return P===null?B:1}let T=i;function ce(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",K,!1),T===null){const z="webgl2";if(T=ce(z,w),T===null)throw ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,he,$,xe,ie,Me,Ge,R,x,H,q,j,Y,Ae,fe,Ee,Re,Q,ye,Oe,Fe,pe,Be,F;function ge(){ee=new R_(T),ee.init(),pe=new hx(T,ee),he=new y_(T,ee,e,pe),$=new lx(T,ee),he.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),xe=new L_(T),ie=new $v,Me=new cx(T,ee,$,ie,he,pe,xe),Ge=new w_(v),R=new A_(v),x=new Om(T),Be=new x_(T,x),H=new C_(T,x,xe,Be),q=new I_(T,H,x,xe),ye=new D_(T,he,Me),Ee=new S_(ie),j=new Zv(v,Ge,R,ee,he,Be,Ee),Y=new gx(v,ie),Ae=new Jv,fe=new ix(ee),Q=new v_(v,Ge,R,$,q,p,l),Re=new ox(v,q,he),F=new _x(T,xe,he,$),Oe=new M_(T,ee,xe),Fe=new P_(T,ee,xe),xe.programs=j.programs,v.capabilities=he,v.extensions=ee,v.properties=ie,v.renderLists=Ae,v.shadowMap=Re,v.state=$,v.info=xe}ge();const te=new px(v,T);this.xr=te,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(I,G,!1))},this.getSize=function(w){return w.set(I,G)},this.setSize=function(w,z,W=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,G=z,t.width=Math.floor(w*B),t.height=Math.floor(z*B),W===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(I*B,G*B).floor()},this.setDrawingBufferSize=function(w,z,W){I=w,G=z,B=W,t.width=Math.floor(w*W),t.height=Math.floor(z*W),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,z,W,X){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,z,W,X),$.viewport(L.copy(de).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,z,W,X){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,z,W,X),$.scissor(V.copy(Le).multiplyScalar(B).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){$.setScissorTest(He=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,W=!0){let X=0;if(w){let k=!1;if(P!==null){const se=P.texture.format;k=se===Ol||se===Fl||se===Nl}if(k){const se=P.texture.type,_e=se===Cn||se===Pi||se===us||se===ds||se===Dl||se===Il,Te=Q.getClearColor(),Se=Q.getClearAlpha(),ze=Te.r,ke=Te.g,Ie=Te.b;_e?(g[0]=ze,g[1]=ke,g[2]=Ie,g[3]=Se,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=ze,_[1]=ke,_[2]=Ie,_[3]=Se,T.clearBufferiv(T.COLOR,0,_))}else X|=T.COLOR_BUFFER_BIT}z&&(X|=T.DEPTH_BUFFER_BIT),W&&(X|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Q.dispose(),Ae.dispose(),fe.dispose(),ie.dispose(),Ge.dispose(),R.dispose(),q.dispose(),Be.dispose(),F.dispose(),j.dispose(),te.dispose(),te.removeEventListener("sessionstart",hc),te.removeEventListener("sessionend",uc),hi.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=xe.autoReset,z=Re.enabled,W=Re.autoUpdate,X=Re.needsUpdate,k=Re.type;ge(),xe.autoReset=w,Re.enabled=z,Re.autoUpdate=W,Re.needsUpdate=X,Re.type=k}function K(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){const z=w.target;z.removeEventListener("dispose",be),Ve(z)}function Ve(w){ft(w),ie.remove(w)}function ft(w){const z=ie.get(w).programs;z!==void 0&&(z.forEach(function(W){j.releaseProgram(W)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,W,X,k,se){z===null&&(z=dt);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Te=af(w,z,W,X,k);$.setMaterial(X,_e);let Se=W.index,ze=1;if(X.wireframe===!0){if(Se=H.getWireframeAttribute(W),Se===void 0)return;ze=2}const ke=W.drawRange,Ie=W.attributes.position;let Ke=ke.start*ze,at=(ke.start+ke.count)*ze;se!==null&&(Ke=Math.max(Ke,se.start*ze),at=Math.min(at,(se.start+se.count)*ze)),Se!==null?(Ke=Math.max(Ke,0),at=Math.min(at,Se.count)):Ie!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Ie.count));const Mt=at-Ke;if(Mt<0||Mt===1/0)return;Be.setup(k,X,Te,W,Se);let pt,ht=Oe;if(Se!==null&&(pt=x.get(Se),ht=Fe,ht.setIndex(pt)),k.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Xe()),ht.setMode(T.LINES)):ht.setMode(T.TRIANGLES);else if(k.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),$.setLineWidth(Ne*Xe()),k.isLineSegments?ht.setMode(T.LINES):k.isLineLoop?ht.setMode(T.LINE_LOOP):ht.setMode(T.LINE_STRIP)}else k.isPoints?ht.setMode(T.POINTS):k.isSprite&&ht.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,vt=k._multiDrawCounts,et=k._multiDrawCount,Yt=Se?x.get(Se).bytesPerElement:1,Fi=ie.get(X).currentProgram.getUniforms();for(let Zt=0;Zt<et;Zt++)Fi.setValue(T,"_gl_DrawID",Zt),ht.render(Ne[Zt]/Yt,vt[Zt])}else if(k.isInstancedMesh)ht.renderInstances(Ke,Mt,k.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Ne);ht.renderInstances(Ke,Mt,vt)}else ht.render(Ke,Mt)};function it(w,z,W){w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,Rs(w,z,W),w.side=si,w.needsUpdate=!0,Rs(w,z,W),w.side=gn):Rs(w,z,W)}this.compile=function(w,z,W=null){W===null&&(W=w),f=fe.get(W),f.init(z),y.push(f),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const Te=se[_e];it(Te,W,k),X.add(Te)}else it(se,W,k),X.add(se)}),f=y.pop(),X},this.compileAsync=function(w,z,W=null){const X=this.compile(w,z,W);return new Promise(k=>{function se(){if(X.forEach(function(_e){ie.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){k(w);return}setTimeout(se,10)}ee.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ln=null;function Nn(w){ln&&ln(w)}function hc(){hi.stop()}function uc(){hi.start()}const hi=new Ku;hi.setAnimationLoop(Nn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){ln=w,te.setAnimationLoop(w),w===null?hi.stop():hi.start()},te.addEventListener("sessionstart",hc),te.addEventListener("sessionend",uc),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,P),f=fe.get(w,y.length),f.init(z),y.push(f),Pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(Pe),Ce=this.localClippingEnabled,le=Ee.init(this.clippingPlanes,Ce),m=Ae.get(w,E.length),m.init(),E.push(m),te.enabled===!0&&te.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&No(se,z,-1/0,v.sortObjects)}No(w,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,ne),Je=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Je&&Q.addToRenderList(m,w),this.info.render.frame++,le===!0&&Ee.beginShadows();const W=f.state.shadowsArray;Re.render(W,w,z),le===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(f.setupLights(),z.isArrayCamera){const se=z.cameras;if(k.length>0)for(let _e=0,Te=se.length;_e<Te;_e++){const Se=se[_e];fc(X,k,w,Se)}Je&&Q.render(w);for(let _e=0,Te=se.length;_e<Te;_e++){const Se=se[_e];dc(m,w,Se,Se.viewport)}}else k.length>0&&fc(X,k,w,z),Je&&Q.render(w),dc(m,w,z);P!==null&&b===0&&(Me.updateMultisampleRenderTarget(P),Me.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,z),Be.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],le===!0&&Ee.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function No(w,z,W,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){X&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pe);const _e=q.update(w),Te=w.material;Te.visible&&m.push(w,_e,Te,W,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const _e=q.update(w),Te=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(Pe)),Array.isArray(Te)){const Se=_e.groups;for(let ze=0,ke=Se.length;ze<ke;ze++){const Ie=Se[ze],Ke=Te[Ie.materialIndex];Ke&&Ke.visible&&m.push(w,_e,Ke,W,Ue.z,Ie)}}else Te.visible&&m.push(w,_e,Te,W,Ue.z,null)}}const se=w.children;for(let _e=0,Te=se.length;_e<Te;_e++)No(se[_e],z,W,X)}function dc(w,z,W,X){const k=w.opaque,se=w.transmissive,_e=w.transparent;f.setupLightsView(W),le===!0&&Ee.setGlobalState(v.clippingPlanes,W),X&&$.viewport(L.copy(X)),k.length>0&&As(k,z,W),se.length>0&&As(se,z,W),_e.length>0&&As(_e,z,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function fc(w,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new oi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ms:Cn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const se=f.state.transmissionRenderTarget[X.id],_e=X.viewport||L;se.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),Se=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(se),v.getClearColor(O),A=v.getClearAlpha(),A<1&&v.setClearColor(16777215,.5),v.clear(),Je&&Q.render(W);const ke=v.toneMapping;v.toneMapping=ni;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),le===!0&&Ee.setGlobalState(v.clippingPlanes,X),As(w,W,X),Me.updateMultisampleRenderTarget(se),Me.updateRenderTargetMipmap(se),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let at=0,Mt=z.length;at<Mt;at++){const pt=z[at],ht=pt.object,Ne=pt.geometry,vt=pt.material,et=pt.group;if(vt.side===gn&&ht.layers.test(X.layers)){const Yt=vt.side;vt.side=Gt,vt.needsUpdate=!0,pc(ht,W,X,Ne,vt,et),vt.side=Yt,vt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Me.updateMultisampleRenderTarget(se),Me.updateRenderTargetMipmap(se))}v.setRenderTarget(Te,Se,ze),v.setClearColor(O,A),Ie!==void 0&&(X.viewport=Ie),v.toneMapping=ke}function As(w,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,se=w.length;k<se;k++){const _e=w[k],Te=_e.object,Se=_e.geometry,ze=_e.group;let ke=_e.material;ke.allowOverride===!0&&X!==null&&(ke=X),Te.layers.test(W.layers)&&pc(Te,z,W,Se,ke,ze)}}function pc(w,z,W,X,k,se){w.onBeforeRender(v,z,W,X,k,se),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,z,W,X,w,se),k.transparent===!0&&k.side===gn&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,w,se),k.side=si,k.needsUpdate=!0,v.renderBufferDirect(W,z,X,k,w,se),k.side=gn):v.renderBufferDirect(W,z,X,k,w,se),w.onAfterRender(v,z,W,X,k,se)}function Rs(w,z,W){z.isScene!==!0&&(z=dt);const X=ie.get(w),k=f.state.lights,se=f.state.shadowsArray,_e=k.state.version,Te=j.getParameters(w,k.state,se,z,W),Se=j.getProgramCacheKey(Te);let ze=X.programs;X.environment=w.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(w.isMeshStandardMaterial?R:Ge).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",be),ze=new Map,X.programs=ze);let ke=ze.get(Se);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===_e)return gc(w,Te),ke}else Te.uniforms=j.getUniforms(w),w.onBeforeCompile(Te,v),ke=j.acquireProgram(Te,Se),ze.set(Se,ke),X.uniforms=Te.uniforms;const Ie=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Ee.uniform),gc(w,Te),X.needsLights=cf(w),X.lightsStateVersion=_e,X.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function mc(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=fo.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function gc(w,z){const W=ie.get(w);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function af(w,z,W,X,k){z.isScene!==!0&&(z=dt),Me.resetTextureUnits();const se=z.fog,_e=X.isMeshStandardMaterial?z.environment:null,Te=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mr,Se=(X.isMeshStandardMaterial?R:Ge).get(X.envMap||_e),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let Mt=ni;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=pt!==void 0?pt.length:0,Ne=ie.get(X),vt=f.state.lights;if(le===!0&&(Ce===!0||w!==M)){const Ot=w===M&&X.id===S;Ee.setState(X,w,Ot)}let et=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==vt.state.version||Ne.outputColorSpace!==Te||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Se||X.fog===!0&&Ne.fog!==se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ee.numPlanes||Ne.numIntersection!==Ee.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==ke||Ne.morphTargets!==Ie||Ne.morphNormals!==Ke||Ne.morphColors!==at||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==ht)&&(et=!0):(et=!0,Ne.__version=X.version);let Yt=Ne.currentProgram;et===!0&&(Yt=Rs(X,z,k));let Fi=!1,Zt=!1,kr=!1;const mt=Yt.getUniforms(),tn=Ne.uniforms;if($.useProgram(Yt.program)&&(Fi=!0,Zt=!0,kr=!0),X.id!==S&&(S=X.id,Zt=!0),Fi||M!==w){$.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),_p(ve),vp(ve),mt.setValue(T,"projectionMatrix",ve)):mt.setValue(T,"projectionMatrix",w.projectionMatrix),mt.setValue(T,"viewMatrix",w.matrixWorldInverse);const Vt=mt.map.cameraPosition;Vt!==void 0&&Vt.setValue(T,We.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&mt.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Zt=!0,kr=!0)}if(k.isSkinnedMesh){mt.setOptional(T,k,"bindMatrix"),mt.setOptional(T,k,"bindMatrixInverse");const Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(T,"boneTexture",Ot.boneTexture,Me))}k.isBatchedMesh&&(mt.setOptional(T,k,"batchingTexture"),mt.setValue(T,"batchingTexture",k._matricesTexture,Me),mt.setOptional(T,k,"batchingIdTexture"),mt.setValue(T,"batchingIdTexture",k._indirectTexture,Me),mt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(T,"batchingColorTexture",k._colorsTexture,Me));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ye.update(k,W,Yt),(Zt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,mt.setValue(T,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tn.envMap.value=Se,tn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),Zt&&(mt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&lf(tn,kr),se&&X.fog===!0&&Y.refreshFogUniforms(tn,se),Y.refreshMaterialUniforms(tn,X,B,G,f.state.transmissionRenderTarget[w.id]),fo.upload(T,mc(Ne),tn,Me)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(fo.upload(T,mc(Ne),tn,Me),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(T,"center",k.center),mt.setValue(T,"modelViewMatrix",k.modelViewMatrix),mt.setValue(T,"normalMatrix",k.normalMatrix),mt.setValue(T,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ot=X.uniformsGroups;for(let Vt=0,Fo=Ot.length;Vt<Fo;Vt++){const ui=Ot[Vt];F.update(ui,Yt),F.bind(ui,Yt)}}return Yt}function lf(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function cf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,z,W){const X=ie.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ie.get(w.texture).__webglTexture=z,ie.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const W=ie.get(w);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const hf=T.createFramebuffer();this.setRenderTarget=function(w,z=0,W=0){P=w,C=z,b=W;let X=!0,k=null,se=!1,_e=!1;if(w){const Se=ie.get(w);if(Se.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(T.FRAMEBUFFER,null),X=!1;else if(Se.__webglFramebuffer===void 0)Me.setupRenderTarget(w);else if(Se.__hasExternalTextures)Me.rebindTextures(w,ie.get(w.texture).__webglTexture,ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(Se.__boundDepthTexture!==Ie){if(Ie!==null&&ie.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(w)}}const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const ke=ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?k=ke[z][W]:k=ke[z],se=!0):w.samples>0&&Me.useMultisampledRTT(w)===!1?k=ie.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[W]:k=ke,L.copy(w.viewport),V.copy(w.scissor),U=w.scissorTest}else L.copy(de).multiplyScalar(B).floor(),V.copy(Le).multiplyScalar(B).floor(),U=He;if(W!==0&&(k=hf),$.bindFramebuffer(T.FRAMEBUFFER,k)&&X&&$.drawBuffers(w,k),$.viewport(L),$.scissor(V),$.setScissorTest(U),se){const Se=ie.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,W)}else if(_e){const Se=ie.get(w.texture),ze=z;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Se.__webglTexture,W,ze)}else if(w!==null&&W!==0){const Se=ie.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(w,z,W,X,k,se,_e,Te=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){$.bindFramebuffer(T.FRAMEBUFFER,Se);try{const ze=w.textures[Te],ke=ze.format,Ie=ze.type;if(!he.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&W>=0&&W<=w.height-k&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(z,W,X,k,pe.convert(ke),pe.convert(Ie),se))}finally{const ze=P!==null?ie.get(P).__webglFramebuffer:null;$.bindFramebuffer(T.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,z,W,X,k,se,_e,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se)if(z>=0&&z<=w.width-X&&W>=0&&W<=w.height-k){$.bindFramebuffer(T.FRAMEBUFFER,Se);const ze=w.textures[Te],ke=ze.format,Ie=ze.type;if(!he.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.bufferData(T.PIXEL_PACK_BUFFER,se.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(z,W,X,k,pe.convert(ke),pe.convert(Ie),0);const at=P!==null?ie.get(P).__webglFramebuffer:null;$.bindFramebuffer(T.FRAMEBUFFER,at);const Mt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await gp(T,Mt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,se),T.deleteBuffer(Ke),T.deleteSync(Mt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,W=0){const X=Math.pow(2,-W),k=Math.floor(w.image.width*X),se=Math.floor(w.image.height*X),_e=z!==null?z.x:0,Te=z!==null?z.y:0;Me.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,W,0,0,_e,Te,k,se),$.unbindTexture()};const uf=T.createFramebuffer(),df=T.createFramebuffer();this.copyTextureToTexture=function(w,z,W=null,X=null,k=0,se=null){se===null&&(k!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let _e,Te,Se,ze,ke,Ie,Ke,at,Mt;const pt=w.isCompressedTexture?w.mipmaps[se]:w.image;if(W!==null)_e=W.max.x-W.min.x,Te=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,ze=W.min.x,ke=W.min.y,Ie=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-k);_e=Math.floor(pt.width*nn),Te=Math.floor(pt.height*nn),w.isDataArrayTexture?Se=pt.depth:w.isData3DTexture?Se=Math.floor(pt.depth*nn):Se=1,ze=0,ke=0,Ie=0}X!==null?(Ke=X.x,at=X.y,Mt=X.z):(Ke=0,at=0,Mt=0);const ht=pe.convert(z.format),Ne=pe.convert(z.type);let vt;z.isData3DTexture?(Me.setTexture3D(z,0),vt=T.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Me.setTexture2DArray(z,0),vt=T.TEXTURE_2D_ARRAY):(Me.setTexture2D(z,0),vt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const et=T.getParameter(T.UNPACK_ROW_LENGTH),Yt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Fi=T.getParameter(T.UNPACK_SKIP_PIXELS),Zt=T.getParameter(T.UNPACK_SKIP_ROWS),kr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,pt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ze),T.pixelStorei(T.UNPACK_SKIP_ROWS,ke),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ie);const mt=w.isDataArrayTexture||w.isData3DTexture,tn=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const nn=ie.get(w),Ot=ie.get(z),Vt=ie.get(nn.__renderTarget),Fo=ie.get(Ot.__renderTarget);$.bindFramebuffer(T.READ_FRAMEBUFFER,Vt.__webglFramebuffer),$.bindFramebuffer(T.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let ui=0;ui<Se;ui++)mt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(w).__webglTexture,k,Ie+ui),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ie.get(z).__webglTexture,se,Mt+ui)),T.blitFramebuffer(ze,ke,_e,Te,Ke,at,_e,Te,T.DEPTH_BUFFER_BIT,T.NEAREST);$.bindFramebuffer(T.READ_FRAMEBUFFER,null),$.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||ie.has(w)){const nn=ie.get(w),Ot=ie.get(z);$.bindFramebuffer(T.READ_FRAMEBUFFER,uf),$.bindFramebuffer(T.DRAW_FRAMEBUFFER,df);for(let Vt=0;Vt<Se;Vt++)mt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,nn.__webglTexture,k,Ie+Vt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,nn.__webglTexture,k),tn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ot.__webglTexture,se,Mt+Vt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ot.__webglTexture,se),k!==0?T.blitFramebuffer(ze,ke,_e,Te,Ke,at,_e,Te,T.COLOR_BUFFER_BIT,T.NEAREST):tn?T.copyTexSubImage3D(vt,se,Ke,at,Mt+Vt,ze,ke,_e,Te):T.copyTexSubImage2D(vt,se,Ke,at,ze,ke,_e,Te);$.bindFramebuffer(T.READ_FRAMEBUFFER,null),$.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else tn?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(vt,se,Ke,at,Mt,_e,Te,Se,ht,Ne,pt.data):z.isCompressedArrayTexture?T.compressedTexSubImage3D(vt,se,Ke,at,Mt,_e,Te,Se,ht,pt.data):T.texSubImage3D(vt,se,Ke,at,Mt,_e,Te,Se,ht,Ne,pt):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,se,Ke,at,_e,Te,ht,Ne,pt.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,se,Ke,at,pt.width,pt.height,ht,pt.data):T.texSubImage2D(T.TEXTURE_2D,se,Ke,at,_e,Te,ht,Ne,pt);T.pixelStorei(T.UNPACK_ROW_LENGTH,et),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Yt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Fi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,kr),se===0&&z.generateMipmaps&&T.generateMipmap(vt),$.unbindTexture()},this.copyTextureToTexture3D=function(w,z,W=null,X=null,k=0){return fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,W,X,k)},this.initRenderTarget=function(w){ie.get(w).__webglFramebuffer===void 0&&Me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Me.setTextureCube(w,0):w.isData3DTexture?Me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Me.setTexture2DArray(w,0):Me.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){C=0,b=0,P=null,$.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class xx extends Hl{constructor(){super();const e=new yt;e.deleteAttribute("uv");const t=new _t({side:Gt}),i=new _t,r=new Dm(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new De(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Lo(e,i,6),a=new bt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new De(e,ji(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new De(e,ji(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new De(e,ji(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new De(e,ji(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new De(e,ji(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new De(e,ji(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ji(n){const e=new ai;return e.color.setScalar(n),e}const wh=250;class Mx{latched=!1;pressedAt=null;press(e){this.pressedAt===null&&(this.pressedAt=e)}release(e){this.pressedAt!==null&&(e-this.pressedAt<wh&&(this.latched=!this.latched),this.pressedAt=null)}cancel(){this.pressedAt=null}reset(){this.latched=!1,this.pressedAt=null}target(e){return this.pressedAt!==null?e-this.pressedAt>=wh?"back":"pillar":this.latched?"pillar":"ahead"}}const Eh={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"reverse",KeyS:"reverse",ArrowLeft:"steerLeft",KeyA:"steerLeft",ArrowRight:"steerRight",KeyD:"steerRight",Space:"handbrake"},_a=[1,2,3],yx=n=>{const e=n;if(!e)return!1;const t=(e.tagName??"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||e.isContentEditable===!0},Sx=n=>_a[(_a.indexOf(n)+1)%_a.length];class wx{constructor(e={}){this.events=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.releaseAll),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()})}events;pressed=new Set;touchHeld=new Set;head=new Mx;lookLeftHeld=!1;lookLeftTouch=!1;setTouchControl(e,t){t?this.touchHeld.add(e):this.touchHeld.delete(e)}setTouchLookLeft(e){this.lookLeftTouch=e}headPress(){this.head.press(performance.now())}headRelease(){this.head.release(performance.now())}releaseAll=()=>{this.pressed.clear(),this.touchHeld.clear(),this.head.cancel(),this.lookLeftHeld=!1,this.lookLeftTouch=!1};headTarget(){return this.head.target(performance.now())}resetHead(){this.head.reset()}lookLeft(){return this.lookLeftHeld||this.lookLeftTouch}controls(){const e=t=>this.pressed.has(t)||this.touchHeld.has(t);return{throttle:e("throttle"),reverse:e("reverse"),steerLeft:e("steerLeft"),steerRight:e("steerRight"),handbrake:e("handbrake")}}onKeyDown=e=>{if(yx(e.target))return;const t=Eh[e.code];if(t){e.preventDefault(),this.pressed.add(t);return}e.code==="Digit1"&&this.events.onView?.(1),e.code==="Digit2"&&this.events.onView?.(2),e.code==="Digit3"&&this.events.onView?.(3),e.code==="KeyR"&&this.events.onRestart?.(),e.code==="Escape"&&this.events.onMenu?.(),e.code==="KeyB"&&this.events.onToggleEagle?.(),e.code==="KeyC"&&this.events.onToggleReverseAids?.(),e.code==="KeyH"&&this.events.onToggleCoach?.(),e.code==="KeyE"&&this.head.press(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!0)};onKeyUp=e=>{const t=Eh[e.code];t&&this.pressed.delete(t),e.code==="KeyE"&&this.head.release(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!1)}}const oe={wheelbase:2.7,width:1.8,length:4.5,rearOverhang:.9,steeringRatio:15.5,maxWheelDeg:558,wheelTurnRate:420,centerRate:540,centerSnapDeg:15,detentSnapDeg:45,accel:2,brakeDecel:5,handbrakeDecel:8,drag:.9,rollingResistance:.15,maxFwdSpeed:1.39},td=(n,e,t)=>({x:n,z:e,heading:t,speed:0,wheelDeg:0,gear:"D"}),nd=n=>n.wheelDeg/oe.steeringRatio*Math.PI/180,id=(n,e,t)=>Math.min(t,Math.max(e,n)),Ei=(n,e,t)=>n<e?Math.min(n+t,e):Math.max(n-t,e),va=.01,Ex=(n,e,t)=>{const i=(e.steerLeft?1:0)-(e.steerRight?1:0),r=e.detentDeg;if(i!==0){const s=id(n.wheelDeg+i*oe.wheelTurnRate*t,-558,oe.maxWheelDeg);return r!==void 0&&(n.wheelDeg-r)*(s-r)<0?r:s}if(r!==void 0&&Math.abs(n.wheelDeg-r)<=oe.detentSnapDeg)return Ei(n.wheelDeg,r,oe.wheelTurnRate*t);if(Math.abs(n.wheelDeg)<=oe.centerSnapDeg)return 0;if(Math.abs(n.speed)>.1){const s=oe.centerRate*Math.min(1,Math.abs(n.speed)/2);return Ei(n.wheelDeg,0,s*t)}return n.wheelDeg},xa=n=>id(n,-1.39,oe.maxFwdSpeed),bx=(n,e,t,i)=>{const{speed:r,gear:s}=n,o=()=>({speed:Ei(r,0,oe.brakeDecel*t),gear:s});if(e.handbrake)return{speed:Ei(r,0,oe.handbrakeDecel*t),gear:s};if(e.throttle)return r<-va?o():{speed:xa(Ei(r,oe.maxFwdSpeed,oe.accel*t)+i*t),gear:"D"};if(e.reverse)return r>va||s==="D"&&r<-va?o():{speed:xa(Ei(r,-1.39,oe.accel*t)+i*t),gear:"R"};const a=i===0?oe.drag:oe.rollingResistance;return{speed:xa(Ei(r,0,a*t)+i*t),gear:s}},Tx=(n,e,t,i=0)=>{const r=Ex(n,e,t),{speed:s,gear:o}=bx(n,e,t,i),a=r/oe.steeringRatio*Math.PI/180,l=n.heading+s/oe.wheelbase*Math.tan(a)*t,c=n.x+Math.sin(l)*s*t,h=n.z+Math.cos(l)*s*t;return{x:c,z:h,heading:l,speed:s,wheelDeg:r,gear:o}},rd=n=>n.z0+n.up+n.top+n.down,Ax=n=>[{z:n.z0,y:0},{z:n.z0+n.up,y:n.height},{z:n.z0+n.up+n.top,y:n.height},{z:rd(n),y:0}],xo=(n,e,t)=>{for(const i of n){if(Math.abs(e-i.cx)>i.hw)continue;const r=t-i.z0,s=rd(i);if(!(r<=0||t>=s))return r<i.up?i.height*r/i.up:r<i.up+i.top?i.height:i.height*(s-t)/i.down}return 0},sd=(n,e)=>{if(n.length===0)return 0;const t=xo(n,e.x,e.z),i=xo(n,e.x+Math.sin(e.heading)*oe.wheelbase,e.z+Math.cos(e.heading)*oe.wheelbase);return Math.atan2(i-t,oe.wheelbase)},Rx=(n,e)=>{const t=sd(n,e);return t===0?0:-9.81*Math.sin(t)},st={x:.42,y:1.31,z:1.5},ss={x:.75,y:1.14,z:1.95},Cx=()=>Math.atan2(st.x+ss.x,ss.z-st.z)*180/Math.PI,xn={yawDeg:140,eye:{x:.3,y:1.31,z:1.4},seconds:.35},Ma={yawDeg:70,eye:{x:.47,y:1.31,z:1.5},seconds:.25},je={trimX:.76,beltY:1.1,roofY:1.4,bPillar:{z:1.1,width:.1},divider:{z:.58,width:.04},quarterTopY:1.24,quarterRearZ:.25,cPillarRearZ:.13},Ht={x:1.03,y:1.074,z:2.12,w:.25,h:.15,d:.1},od=.98,Mo={y:.74,behindBumper:.2},ad=(n,e)=>{const t=n-Mo.behindBumper-st.z;return Math.max(0,st.y-(st.y-Mo.y)/t*e)},Bt={fovDeg:32,aspect:1.5,yawOut:.3,pitch:-.1,glassBack:.06},bh=(n,e,t)=>{const r={x:-1*Ht.x,y:Ht.y,z:Ht.z-Bt.glassBack},s=ar(n,r,t);return(s>0?180-s:-180-s)-Bt.yawOut*180/Math.PI},Px=n=>{const e=Ht.y-Ht.h/2,t=Ht.z-Ht.d/2;return st.z+(t-st.z)*st.y/(st.y-e)-n},on=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading);return{x:n.x+e.x*i+e.z*t,y:e.y,z:n.z-e.x*t+e.z*i}},ar=(n,e,t)=>{const i=on(n,e),r=Math.atan2(t.x-i.x,t.z-i.z);let s=(n.heading-r)*180/Math.PI;for(;s>180;)s-=360;for(;s<=-180;)s+=360;return s},ld=()=>{const n=xn.eye,e=je.quarterRearZ-n.z;return Math.atan2(1.06,e)*180/Math.PI},Dn=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle),i={x:t,z:-e},r={x:e,z:t},s=[];for(const o of[-1,1])for(const a of[-1,1])s.push({x:n.cx+o*n.hw*i.x+a*n.hl*r.x,z:n.cz+o*n.hw*i.z+a*n.hl*r.z});return s},Th=(n,e)=>{let t=1/0,i=-1/0;for(const r of n){const s=r.x*e.x+r.z*e.z;s<t&&(t=s),s>i&&(i=s)}return[t,i]},Ah=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle);return[{x:t,z:-e},{x:e,z:t}]},Rh=(n,e)=>{const t=Dn(n),i=Dn(e);for(const r of[...Ah(n),...Ah(e)]){const[s,o]=Th(t,r),[a,l]=Th(i,r);if(o<a||l<s)return!1}return!0},cd=(n,e)=>{const t=Math.sin(n.angle),i=Math.cos(n.angle);for(const r of Dn(e)){const s=r.x-n.cx,o=r.z-n.cz,a=s*i-o*t,l=s*t+o*i;if(Math.abs(a)>n.hw||Math.abs(l)>n.hl)return!1}return!0},Et=n=>{const e=oe.length/2-oe.rearOverhang;return{cx:n.x+Math.sin(n.heading)*e,cz:n.z+Math.cos(n.heading)*e,hw:oe.width/2,hl:oe.length/2,angle:n.heading}},yo=1.6,Lx=.1,jl=.1,lr=.12,Dx=.05,Ix=1,Ux=oe.length-oe.rearOverhang-oe.wheelbase,Nx=n=>({nextCheckpoint:0,lineTouches:0,onLine:!1,hill:n.stopLine?{phase:"approach",hold:0,stopGap:null,anchorZ:0,rollback:0,missedStop:!1}:null,poleHits:0,onPole:!1}),Ch=n=>({cx:n.x,cz:n.z,hw:lr,hl:lr,angle:0}),wr=n=>{const e=Math.sin(n.heading),t=Math.cos(n.heading),i=[];for(const r of[0,oe.wheelbase])for(const s of[yo/2,-yo/2])i.push({x:n.x+e*r+t*s,z:n.z+t*r-e*s});return i},Fx=(n,e)=>{const t=e.x2-e.x1,i=e.z2-e.z1,r=t*t+i*i,s=r===0?0:Math.min(1,Math.max(0,((n.x-e.x1)*t+(n.z-e.z1)*i)/r));return Math.hypot(n.x-(e.x1+s*t),n.z-(e.z1+s*i))},Ox=(n,e)=>{const t=jl/2+Lx;return wr(n).some(i=>e.some(r=>Fx(i,r)<=t))},zx=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),r=n.x-e.cx,s=n.z-e.cz;return Math.abs(r*i-s*t)<=e.hw&&Math.abs(r*t+s*i)<=e.hl},Ql=n=>n.z+Math.cos(n.heading)*(oe.wheelbase+Ux),kx=(n,e,t,i)=>{const r=n.stopLine;if(!r||e.phase==="done")return e;const s=r.z-Ql(t);if(e.phase==="approach"){if(s<0)return{...e,phase:"done",missedStop:!0};const l=Math.abs(t.speed)<Dx&&s<=r.zone?e.hold+i:0;return l>=Ix?{...e,phase:"restart",hold:l,stopGap:s,anchorZ:t.z,rollback:0}:{...e,hold:l}}const o=Math.max(e.rollback,e.anchorZ-t.z);return{...e,rollback:o,phase:s<0?"done":"restart"}},Bx=(n,e,t,i,r)=>{const s=e.poleHits+(r&&!e.onPole?1:0),o=Ox(t,n.boundaries),a=e.lineTouches+(o&&!e.onLine?1:0),l=Et(t),c=n.checkpoints[e.nextCheckpoint],h=c&&zx({x:l.cx,z:l.cz},c)?e.nextCheckpoint+1:e.nextCheckpoint,u=e.hill?kx(n,e.hill,t,i):null;return{nextCheckpoint:h,lineTouches:a,onLine:o,hill:u,poleHits:s,onPole:r}},hd=(n,e)=>e.nextCheckpoint>=n.checkpoints.length&&(e.hill===null||e.hill.phase==="done"),Hx=(n,e,t)=>e.hill&&e.hill.phase!=="done"&&n.stopLine?{cx:n.stopLine.cx,cz:n.stopLine.z,hw:0,hl:0,angle:0}:n.checkpoints[e.nextCheckpoint]??t,Gx=(n,e,t)=>{const i=e.hill,r=n.stopLine;if(i&&r&&i.phase==="approach"){const o=r.z-Ql(t);return o<=6?`Stop line ${o.toFixed(2)} m · stop ≤ ${r.maxGap} m before it`:"Hill ahead — stop before the line"}if(i&&r&&i.phase==="restart")return`Move off · rollback ${i.rollback.toFixed(2)} m (max ${r.warnRollback} m)`;const s=n.checkpoints.length;return e.nextCheckpoint<s?`Gate ${e.nextCheckpoint+1} / ${s}`:"Gates done — finish in the green box"},dn={position:25,angle:25,perCollision:20,perExtraReversal:5,reversalCap:15,time:10,posDeadZone:.3,angleFreeDeg:3,angleFullDevDeg:12},bi=n=>Math.min(1,Math.max(0,n)),Ph=(n,e)=>bi((n-e)/(1-e)),ud=n=>n>=95?"S":n>=85?"A":n>=70?"B":n>=50?"C":"F",Vx=n=>{const e=Ph(n.latMargin>0?bi(n.latOffset/n.latMargin):0,dn.posDeadZone),t=Ph(n.longMargin>0?bi(n.longOffset/n.longMargin):0,dn.posDeadZone),i=dn.position*bi(.75*e+.25*t),r=n.angleDevRad*180/Math.PI,s=dn.angle*bi((r-dn.angleFreeDeg)/(dn.angleFullDevDeg-dn.angleFreeDeg)),o=dn.perCollision*n.collisions,a=Math.max(0,n.reversals-n.par.reversals),l=Math.min(dn.reversalCap,dn.perExtraReversal*a),c=Math.max(0,n.timeSec-n.par.timeSec),h=dn.time*bi(c/n.par.timeSec),u=[];i>.005&&u.push({label:"Position offset",delta:-i}),s>.005&&u.push({label:"Angle deviation",delta:-s}),o>0&&u.push({label:`Collisions ×${n.collisions}`,delta:-o}),l>0&&u.push({label:`Extra gear reversals ×${a}`,delta:-l}),h>.005&&u.push({label:"Over par time",delta:-h});const d=100-i-s-o-l-h,p=Math.max(0,Math.round(d));return{total:p,grade:ud(p),lines:u}},Wx={perPoleHit:20,perLineTouch:10,perCollision:20,missedStop:20,stopTooFar:10,rollback:10,bigRollback:20,perExtraReversal:5,reversalCap:15,time:10},Xx=n=>{const e=Wx,t=[],i=(a,l)=>{l>.005&&t.push({label:a,delta:-l})};if(i(`Pole hits ×${n.poleHits}`,e.perPoleHit*n.poleHits),i(`Wheel on a line ×${n.lineTouches}`,e.perLineTouch*n.lineTouches),i(`Collisions ×${n.collisions}`,e.perCollision*n.collisions),n.stopLineMissed&&i("Crossed the stop line without stopping",e.missedStop),n.stopGap!==null&&n.stopGap>n.maxStopGap&&i(`Stopped ${n.stopGap.toFixed(1)} m before the stop line (max ${n.maxStopGap} m)`,e.stopTooFar),n.rollback!==null&&n.rollback>n.warnRollback){const a=n.rollback>n.bigRollback;i(`Rolled back ${n.rollback.toFixed(2)} m on the hill`,a?e.bigRollback:e.rollback)}const r=Math.max(0,n.reversals-n.par.reversals);i(`Extra gear reversals ×${r}`,Math.min(e.reversalCap,e.perExtraReversal*r));const s=Math.max(0,n.timeSec-n.par.timeSec);i("Over par time",e.time*bi(s/n.par.timeSec));const o=Math.max(0,Math.round(100+t.reduce((a,l)=>a+l.delta,0)));return{total:o,grade:ud(o),lines:t}},qx=.05,dd=1.5,fd=Math.PI/6,Yx=.5,Lh=3,pd=(n,e)=>{let t=(n-e)%(2*Math.PI);return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},Zx=n=>({cx:n.x,cz:n.z,hw:oe.width/2,hl:oe.length/2,angle:n.heading}),ec=n=>({scenario:n,car:td(n.spawn.x,n.spawn.z,n.spawn.heading),obstacles:[...n.parkedCars.map(Zx),...n.solids.map(e=>e.rect),...(n.poles??[]).map(Ch)],poles:(n.course?.poles??[]).map(Ch),course:n.course?Nx(n.course):null,time:0,collisions:0,reversals:0,inContact:!1,settle:0,complete:!1,flash:0}),$x=(n,e,t)=>Math.abs(e.speed)>qx||n.scenario.course&&t&&!hd(n.scenario.course,t)||Math.abs(pd(e.heading,n.scenario.bay.requiredHeading))>fd?!1:cd(n.scenario.bay,Et(e)),tc=(n,e,t)=>{if(n.complete)return n;const i=n.scenario.course?.hill,r=Tx(n.car,e,t,i?Rx([i],n.car):0),s=Et(r),o=n.obstacles.some(_=>Rh(s,_)),a=n.poles.some(_=>Math.abs(_.cx-s.cx)<Lh&&Math.abs(_.cz-s.cz)<Lh&&Rh(s,_)),c=o||a?{...n.car,speed:0,wheelDeg:r.wheelDeg,gear:r.gear}:r,h=o&&!n.inContact,u=n.reversals+(c.gear!==n.car.gear?1:0),d=n.scenario.course&&n.course?Bx(n.scenario.course,n.course,c,t,a):null,p=$x(n,c,d)?n.settle+t:0,g=p>=dd;return{...n,car:c,time:n.time+t,collisions:n.collisions+(h?1:0),reversals:u,inContact:o,course:d,settle:p,complete:g,flash:h?Yx:Math.max(0,n.flash-t)}},Kx=n=>Math.min(1,n.settle/dd),md=n=>{const e=n.scenario.bay,t=Et(n.car),i=t.cx-e.cx,r=t.cz-e.cz,s=Math.sin(e.angle),o=Math.cos(e.angle),a=Math.abs(i*o-r*s),l=Math.abs(i*s+r*o),c=Math.abs(pd(n.car.heading,e.requiredHeading));return{lat:a,long:l,angleDev:c,dist:Math.hypot(i,r),aligned:a<=e.hw-oe.width/2&&l<=e.hl-oe.length/2&&c<=fd}},Jx=n=>{const e=n.scenario.bay,t=n.scenario.course;if(t&&n.course){const r=n.course.hill;return Xx({poleHits:n.course.poleHits,stopLineMissed:r?r.missedStop:!1,lineTouches:n.course.lineTouches,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par,stopGap:r?r.stopGap:null,maxStopGap:t.stopLine?.maxGap??0,rollback:r?r.rollback:null,warnRollback:t.stopLine?.warnRollback??0,bigRollback:t.stopLine?.bigRollback??0})}const i=md(n);return Vx({latOffset:i.lat,longOffset:i.long,angleDevRad:i.angleDev,latMargin:e.hw-oe.width/2,longMargin:e.hl-oe.length/2,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par})},jx={V:4.485,H:1.706},{V:vi,H:ya}=jx,Xn={parallel:{bayLength:2*vi,forwardZone:vi+1,bayWidth:ya+1,laneWidth:ya+2},snake:{poleSpacing:1.5*vi+.5,corridorWidth:2*vi},turnaround:{zoneWidth:2*vi},garage:{bayLength:vi+1,bayWidth:ya+1},hill:{stopZone:vi+1,maxGap:1}},ii=(n,e,t,i)=>({x1:n,z1:e,x2:t,z2:i}),Yr=(n,e,t,i,r,s)=>{const o=[];for(let a=0;a<s;a++){const l=i+(r-i)*a/s,c=i+(r-i)*(a+1)/s;o.push(ii(n+t*Math.cos(l),e+t*Math.sin(l),n+t*Math.cos(c),e+t*Math.sin(c)))}return o},Qx=(n,e,t)=>{const i=[];for(let r=e;r<t;r+=1)i.push({x1:r,z1:n,x2:Math.min(r+.5,t),z2:n,width:.12});return i},eM=(n,e,t)=>{const i=[];for(let r=e;r<t;r+=3)i.push({x1:n,z1:r,x2:n,z2:Math.min(r+1.5,t),width:.1});return i},So=.5,pn=.5,Zr=(n,e,t,i)=>{const r=Math.max(1,Math.round(Math.abs(i-t)*e/So));return Array.from({length:r+1},(s,o)=>{const a=t+(i-t)*o/r;return{x:n.x+e*Math.cos(a),z:n.z+e*Math.sin(a)}})},Sa=(n,e,t,i,r=So)=>{const s=Math.max(1,Math.round(Math.hypot(t-n,i-e)/r));return Array.from({length:s+1},(o,a)=>({x:n+(t-n)*a/s,z:e+(i-e)*a/s}))},Ri={spacing:Xn.snake.poleSpacing,poles:5,halfWidth:Xn.snake.corridorWidth/2,firstZ:-20},Dh=Array.from({length:Ri.poles},(n,e)=>({x:0,z:Ri.firstZ+e*Ri.spacing})),tM={id:"snake",name:"Snake",description:`Weave through 5 poles ${Xn.snake.poleSpacing.toFixed(1)} m apart — first pole on your left, then alternate. No pole contact, no wheel on the side lines.`,spawn:{x:-4.535/2,z:-31,heading:0},bay:{cx:0,cz:29,hw:2.5,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:Dh,boundaries:[ii(-4.485,-34,-4.485,33),ii(Ri.halfWidth,-34,Ri.halfWidth,33)],checkpoints:Dh.map((n,e)=>{const t=e%2===0?-1:1,i=.3;return{cx:t*(i+Ri.halfWidth)/2,cz:n.z,hw:(Ri.halfWidth-i)/2,hl:.6,angle:0}})}},gt={halfWidth:Xn.turnaround.zoneWidth/2,end:14,zoneStart:5,roadStart:-14,poleStep:1},Qi=gt.halfWidth+pn,eo=gt.end+pn,nM=[...Sa(-Qi,gt.zoneStart,-Qi,eo,gt.poleStep),...Sa(Qi,gt.zoneStart,Qi,eo,gt.poleStep),...Sa(-Qi,eo,Qi,eo,gt.poleStep).slice(1,-1)],iM={id:"turnaround",name:"Dead-end turnaround",description:"Drive into the dead end, turn around between the lines using forward and reverse (3-point turn), and stop in the box facing back. Poles surround the dead end — each hit costs 20 points.",spawn:{x:-1.75,z:-10,heading:0},bay:{cx:1.75,cz:-7,hw:1.6,hl:3,angle:0,requiredHeading:Math.PI},parkedCars:[],solids:[],paint:[...Qx(gt.zoneStart,-4.485,gt.halfWidth),...eM(0,-14,gt.zoneStart-1)],par:{reversals:2,timeSec:90},course:{poles:nM,boundaries:[ii(-4.485,gt.roadStart,-4.485,gt.end),ii(gt.halfWidth,gt.roadStart,gt.halfWidth,gt.end),ii(-4.485,gt.end,gt.halfWidth,gt.end)],checkpoints:[{cx:0,cz:(gt.zoneStart+gt.end)/2,hw:gt.halfWidth,hl:(gt.end-gt.zoneStart)/2,angle:0}]}},$e={inner:3.5,outer:3.5+3.5*1.1,dist:11.5,tilt:19*Math.PI/180,gapFrom:-107*Math.PI/180,gapTo:-30*Math.PI/180,startBack:9},ut={x:0,z:0},Pt={x:-11.5*Math.sin($e.tilt),z:$e.dist*Math.cos($e.tilt)},An=($e.inner+$e.outer)/2,Mn=Math.atan2(Pt.z-ut.z,Pt.x-ut.x),ei=Math.acos($e.dist/(2*$e.outer)),rM=(n,e)=>({cx:n.x+An*Math.cos(e),cz:n.z+An*Math.sin(e),hw:($e.outer-$e.inner)/2,hl:.6,angle:-e}),Ih=(n,e)=>({x1:n.x+(An-.4)*Math.cos(e),z1:n.z+(An-.4)*Math.sin(e),x2:n.x+(An+.4)*Math.cos(e),z2:n.z+(An+.4)*Math.sin(e),width:.12}),Uh=[[ut,Math.PI],[Pt,Mn-Math.PI/2],[Pt,Mn],[Pt,Mn+Math.PI/2],[ut,0]],Nh=(n,e)=>t=>Math.hypot(t.x-n.x,t.z-n.z)>=e,sM=[...Zr(ut,$e.inner-pn,0,2*Math.PI-So/$e.inner),...Zr(Pt,$e.inner-pn,0,2*Math.PI-So/$e.inner),...[...Zr(ut,$e.outer+pn,Mn+ei,2*Math.PI+$e.gapFrom),...Zr(ut,$e.outer+pn,$e.gapTo,Mn-ei)].filter(Nh(Pt,$e.outer+pn)),...Zr(Pt,$e.outer+pn,Mn+Math.PI+ei,Mn+3*Math.PI-ei).filter(Nh(ut,$e.outer+pn))],xs=-45*Math.PI/180,to=Math.atan2(Math.sin(xs),-Math.cos(xs)),Fh={x:ut.x+An*Math.cos(xs),z:ut.z+An*Math.sin(xs)},Oh=12,oM={x:ut.x+($e.outer+pn)*Math.cos($e.gapFrom),z:ut.z+($e.outer+pn)*Math.sin($e.gapFrom)},zh={x:(ut.x+Pt.x)/2,z:(ut.z+Pt.z)/2},kh=Math.sqrt($e.outer**2-($e.dist/2)**2),Bh={x:(Pt.x-ut.x)/$e.dist,z:(Pt.z-ut.z)/$e.dist},Hh={x:zh.x+(kh+.4)*Bh.z,z:zh.z-(kh+.4)*Bh.x},aM={id:"figure-eight",name:"Figure eight",description:'Enter through the gap to the bottom of the near ring. Drive an "S": up its right side turning left, through the middle, round the far ring turning right, back through the middle, round the near ring again, then straight out through the gap into the box. Yellow-banded poles 1 and 2 are the references. Poles line every marking — each hit costs 20 points.',spawn:{x:ut.x+$e.startBack,z:ut.z-An,heading:-Math.PI/2},bay:{cx:Fh.x+Math.sin(to)*Oh,cz:Fh.z+Math.cos(to)*Oh,hw:1.6,hl:3,angle:to,requiredHeading:to},parkedCars:[],solids:[],paint:[...Uh.map(([n,e])=>Ih(n,e)),Ih(ut,-Math.PI/2)],par:{reversals:0,timeSec:110},course:{poles:[...sM,Hh],refPoles:[oM,Hh],boundaries:[...Yr(ut.x,ut.z,$e.inner,0,2*Math.PI,36),...Yr(Pt.x,Pt.z,$e.inner,0,2*Math.PI,36),...Yr(ut.x,ut.z,$e.outer,Mn+ei,2*Math.PI+$e.gapFrom,30),...Yr(ut.x,ut.z,$e.outer,$e.gapTo,Mn-ei,20),...Yr(Pt.x,Pt.z,$e.outer,Mn+Math.PI+ei,Mn+3*Math.PI-ei,48)],checkpoints:Uh.map(([n,e])=>rM(n,e))}},Gh=.14,fn={cx:0,hw:1.5*1.25,z0:0,up:1/Gh,top:3,down:1/Gh,height:1},lM=fn.z0+fn.up,cM={id:"hill-start",name:"Hill start",description:"Climb the 14 % ramp, stop no more than 1 m before the stop line, hold with the handbrake (Space), then move off rolling back < 0.3 m.",spawn:{x:0,z:-10,heading:0},bay:{cx:0,cz:25,hw:1.75,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:[],boundaries:[ii(-fn.hw+.05,-4,-fn.hw+.05,21.5),ii(fn.hw-.05,-4,fn.hw-.05,21.5)],checkpoints:[{cx:0,cz:lM+fn.top/2,hw:fn.hw,hl:fn.top/2,angle:0}],hill:fn,stopLine:{z:5,cx:0,hw:fn.hw,maxGap:Xn.hill.maxGap,zone:Xn.hill.stopZone,warnRollback:.3,bigRollback:1}}},hM=[tM,iM,aM,cM],uM=70,os=oe.maxWheelDeg,ri=-558,gd=6,dM=.01,fM=oe.maxWheelDeg/.35,Di=n=>Math.atan2(Math.sin(n),Math.cos(n)),Vh=n=>Math.abs(n.car.speed)<dM,_d=(n,e)=>Math.abs(n.car.wheelDeg-e)<=gd,cr=(n,e)=>_d(n,e);class pM{constructor(e){this.steps=e}steps;index=0;start=null;quarter=0;get total(){return this.steps.length}update(e){for(this.start??=e;this.index<this.steps.length-1&&this.steps[this.index].done(e,this.start);)for(this.index++,this.start=e;this.index<this.steps.length-1&&this.steps[this.index].skip?.(e);)this.index++;const t=this.steps[this.index];let i=t.wheel;if(typeof i=="object"&&"aim"in i&&i.quarters){const r=xd(e,i.aim(e),t.pedal==="reverse");Math.abs(r-this.quarter)>uM&&(this.quarter=mM(r)),i=this.quarter}return{step:this.index+1,total:this.steps.length,say:t.say,look:t.look,pedal:t.pedal,wheel:i,handbrake:t.handbrake??!1}}}const mM=n=>{const e=Math.max(-6,Math.min(6,Math.round(n/90)))*90,t=Math.sign(n)*oe.maxWheelDeg;return Math.abs(n-t)<Math.abs(n-e)?t:e},vd=n=>Math.max(-558,Math.min(oe.maxWheelDeg,n)),xd=(n,e,t)=>{const{car:i}=n,r=t?i.heading+Math.PI:i.heading,s=Di(Math.atan2(e.x-i.x,e.z-i.z)-r),o=Math.max(1,Math.hypot(e.x-i.x,e.z-i.z));let a=Math.atan(2*oe.wheelbase*Math.sin(s)/o);return t&&(a=-a),vd(a*180/Math.PI*oe.steeringRatio)},gM=(n,e,t)=>{if(typeof e=="number")return e;if("aim"in e)return xd(n,e.aim(n),t==="reverse");const i=Di(e.heading-n.car.heading);return vd((t==="reverse"?-1:1)*fM*i)},Md=n=>{if(Math.abs(n)>=oe.maxWheelDeg-gd)return n>0?"full left":"full right";const e=Math.round(Math.abs(n)/90);return e===0?"straight":`${["","¼","½","¾","1","1¼","1½"][Math.min(e,6)]} turn${e>4?"s":""} ${n>0?"left":"right"}`},yd=(n,e=2.5,t={i:0})=>i=>{const r=o=>Math.hypot(n[o].x-i.car.x,n[o].z-i.car.z);let s=t.near??0;for(;s<n.length-1&&r(s+1)<=r(s);)s++;for(t.near=s;t.i<n.length-1&&r(t.i)<e;)t.i++;return n[t.i]},po=oe.wheelbase/Math.tan(oe.maxWheelDeg/oe.steeringRatio*Math.PI/180),Vn=.12,no=jl/2,as=1.15,io=1,Wh=(n,e)=>Math.abs(Di(e-n.car.heading)),Ur=n=>({say:"Stop and pull the handbrake. Hold still to finish.",look:n,pedal:"stop",wheel:0,done:()=>!1}),_M=n=>{const e=n.bay,t=e.cz-e.hl,i=n.poles.filter(l=>Math.abs(l.z-t)<1e-9).reduce((l,c)=>c.x>l.x?c:l),r=ld(),s=l=>ar(l.car,xn.eye,i),o=(l,c)=>{const h=c*Vn,u={...l.car,x:l.car.x+Math.sin(l.car.heading)*h,z:l.car.z+Math.cos(l.car.heading)*h};return ar(u,xn.eye,i)},a=(()=>{const l={...n.spawn,speed:0,wheelDeg:0,gear:"D"};for(let c=l.x;c<i.x+10;c+=.01)if(ar({...l,x:c},xn.eye,i)>=r)return ar({...l,x:c+Vn},xn.eye,i);return r})();return[{say:"Drive forward slowly, past the garage, about 2.3 m from its entrance line.",look:"The garage is on your right. Follow the wheel hint to hold the line.",pedal:"forward",wheel:{aim:l=>({x:l.car.x+6*Math.sin(n.spawn.heading),z:n.spawn.z})},done:l=>s(l)>=r-30},{say:"Keep going. Stop when the nearest garage pole reaches the back edge of the small rear side window.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>s(l)>=r},{say:"Stop. Keep the wheel straight.",pedal:"stop",wheel:0,done:Vh},{say:"Too far. Reverse slowly, wheel straight, until the pole is back at the window edge.",look:"Hold E to look over your right shoulder.",pedal:"reverse",wheel:0,done:l=>o(l,-1)<=a,skip:l=>s(l)<=a+io},{say:"Not far enough. Creep forward until the pole reaches the window edge.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>o(l,1)>=a,skip:l=>s(l)>=a-io},{say:"Stop. Keep the wheel straight.",pedal:"stop",wheel:0,done:Vh},{say:"Too far. Reverse slowly, wheel straight, until the pole is back at the window edge.",look:"Hold E to look over your right shoulder.",pedal:"reverse",wheel:0,done:l=>o(l,-1)<=a,skip:l=>s(l)<=a+io},{say:"Not far enough. Creep forward until the pole reaches the window edge.",look:"Hold E to look over your right shoulder.",pedal:"forward",wheel:0,done:l=>o(l,1)>=a,skip:l=>s(l)>=a-io},{say:"Stop. Turn the wheel fully right.",pedal:"stop",wheel:ri,done:l=>cr(l,ri)},{say:"Reverse slowly, wheel fully right.",look:"Right mirror: the near pole passes just outside the car.",pedal:"reverse",wheel:ri,done:l=>Wh(l,e.requiredHeading)<.35},{say:"Straighten the wheel gradually as the car lines up with the garage.",look:"Both mirrors: the side poles line up parallel to the car.",pedal:"reverse",wheel:{heading:e.requiredHeading},done:l=>Wh(l,e.requiredHeading)<.02},{say:"Reverse straight in.",look:"Stop when the second side pole is level with your door mirror.",pedal:"reverse",wheel:{heading:e.requiredHeading},done:l=>Et(l.car).cz>=e.cz},Ur()]},$r={stopPastPole:.25,firstArcDeg:40,gapGain:1,nominalGap:.85,landShort:.25},vM=n=>{const e=n.bay,t=e.requiredHeading,i=e.cx+e.hl,r=e.cz-e.hw,s=c=>Di(c.car.heading-t),o=c=>{const h=r-(c.car.z+oe.width/2);return i+$r.stopPastPole+$r.gapGain*(h-$r.nominalGap)},a=$r.firstArcDeg*Math.PI/180;return[{say:"Drive forward slowly with the wheel straight, along the space.",look:"The space between the poles is on your right.",pedal:"forward",wheel:{heading:t},done:c=>c.car.x>=i-1.5},{say:"Stop when the front pole of the space is level with your rear wheel.",look:"Right mirror: the pole is in the middle of the mirror.",pedal:"forward",wheel:{heading:t},done:c=>c.car.x>=o(c)-Vn},{say:"Stop. Turn the wheel fully right.",pedal:"stop",wheel:ri,done:c=>cr(c,ri)},{say:"Reverse slowly, wheel fully right.",look:"Tap E to look right. Stop when the front pole is level with the middle pillar (about 40°).",pedal:"reverse",wheel:ri,done:c=>s(c)>=a-Vn/po},{say:"Stop. Straighten the wheel.",pedal:"stop",wheel:0,done:c=>cr(c,0)},{say:"Reverse straight back, slowly.",look:"Tap E to look right. Stop when the front pole is level with your front wheel.",pedal:"reverse",wheel:0,done:c=>c.car.z+po*(1-Math.cos(s(c)))>=e.cz-$r.landShort},{say:"Stop. Turn the wheel fully left.",pedal:"stop",wheel:os,done:c=>cr(c,os)},{say:"Reverse slowly, wheel fully left.",look:"The front swings in. Stop when the car is parallel to the curb.",pedal:"reverse",wheel:os,done:c=>s(c)<=Vn/po},{say:"Stop. Straighten the wheel.",pedal:"stop",wheel:0,done:c=>cr(c,0)},{say:"Drive forward slowly to straighten up, to the middle of the space.",look:"Leave the same gap to the front and rear poles.",pedal:"forward",wheel:{heading:t},done:c=>Et(c.car).cx>=e.cx-Vn,skip:c=>Et(c.car).cx>=e.cx-.6&&Math.abs(s(c))<.02},Ur()]},xM=4,MM=n=>{const e=n.course.poles,t=e[0].z,i=e[1].z-t,r=e[e.length-1].z,s=h=>h<t?-2:h<=r+i/2?-2*Math.cos(Math.PI*(h-t)/i):0,o=[];for(let h=n.spawn.z;h<=n.bay.cz+n.bay.hl;h+=.5)o.push({x:s(h),z:h});const a=yd(o,xM),l=h=>Et(h.car).cz,c=e.map((h,u)=>{const d=u%2===0?"left":"right";return{say:`Pole ${u+1} on your ${d}: steer round it, then back across the row.`,look:u===0?"Set the wheel to the hint and hold it; it changes as you go.":`Keep about 2 m from pole ${u+1}, wheels clear of the side lines.`,pedal:"forward",wheel:{aim:a,quarters:!0},done:p=>l(p)>=h.z}});return c.push({say:"Straighten up and drive into the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:{aim:a,quarters:!0},done:h=>l(h)>=n.bay.cz-Vn}),c.push(Ur()),c},xi={wheelMargin:.4,bodyMargin:.75,lastLegMargin:.1},yM=n=>{const e=n.course,t=e.checkpoints[0],i=t.hw,r=t.cz+t.hl,s=t.cz-t.hl,o=Math.max(...e.poles.map(y=>Math.abs(y.x))),a=Math.max(...e.poles.map(y=>y.z)),l=n.bay.requiredHeading,c=y=>Dn(Et(y.car)),h=-i+no+.5+yo/2,u=y=>Math.abs(Di(l-y.car.heading))<.35,d=(y,v=!1)=>{const D=v?xi.lastLegMargin:xi.wheelMargin,C=v?xi.lastLegMargin:xi.bodyMargin,b=i-no-D,P=r-no-D,S=o-lr-C,M=a-lr-C;return wr(y.car).some(L=>L.x>b||L.z>P)||c(y).some(L=>L.x>S||L.z>M)},p=y=>{const v=i-no-xi.wheelMargin,D=o-lr-xi.bodyMargin,C=a-lr-xi.bodyMargin;return wr(y.car).some(b=>b.x<-v)||c(y).some(b=>b.x<-D||b.z>C)},g=(y,v)=>{const D=y==="left"?os:ri;return{say:`Stop. Turn the wheel fully ${y}.`,pedal:"stop",wheel:D,done:C=>cr(C,D),skip:v}},_=oe.length-oe.rearOverhang,m=y=>{const v=on(y.car,st);return e.poles.some(D=>{const C=Math.hypot(D.x-v.x,D.z-v.z),b=Di(Math.atan2(D.x-v.x,D.z-v.z)-y.car.heading);return Math.abs(b)<10*Math.PI/180&&ad(_,C)>=as/3})},f=(y,v=!1)=>({say:"Drive forward slowly, wheel fully left.",look:"Stop when the bonnet hides the bottom third of the pole straight ahead.",pedal:"forward",wheel:os,done:D=>!v&&m(D)||d(D,v)||u(D),skip:y}),E=y=>({say:"Reverse slowly, wheel fully right.",look:"Stop when the line behind you sinks into the lower half of both mirrors, or sooner once the car points back down the road.",pedal:"reverse",wheel:ri,done:v=>p(v)||u(v),skip:y});return[{say:"Drive into the dead end close to the right line, about half a metre from it.",look:"Right mirror: the line runs just beside your right wheels.",pedal:"forward",wheel:{aim:y=>({x:h,z:y.car.z+5})},done:y=>y.car.z>=s-1.5},{say:"Stop when your rear wheels reach the dashed line across the road.",look:"Hold Q to look out of your window at the dashed line.",pedal:"forward",wheel:{aim:y=>({x:h,z:y.car.z+5})},done:y=>y.car.z>=s-.5},g("left"),f(),g("right"),E(),g("left"),{...f(void 0,!0),say:"Drive forward slowly, wheel fully left, until the car faces back down the road.",look:"Then straighten the wheel."},g("right",u),E(u),g("left",u),f(u),{say:"Straighten up on the right side of the road and drive to the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:{aim:y=>({x:n.bay.cx,z:y.car.z-5})},done:y=>Et(y.car).cz<=n.bay.cz+Vn},Ur()]},SM=n=>{const{path:e,marks:t}=wM(n),i={i:0},r=yd(e,4,i),s=l=>()=>(i.near??0)>=l,o={aim:r,quarters:!0},a="Keep to the middle of the lane, the same gap to the island line all round.";return[{say:"Drive in through the gap, wheel straight.",look:"Pole 1 (yellow band) is on the outer line ahead, to your right.",pedal:"forward",wheel:o,done:s(t.nearIn)},{say:"When pole 1 is level with your right mirror, turn left about 1¼ turns: round the near ring.",look:a,pedal:"forward",wheel:o,done:s(t.outLeave)},{say:"When pole 2 goes behind your left windscreen pillar, straighten up and cross the middle.",look:"Pole 2 (yellow band) is where the outer lines meet, ahead on your left.",pedal:"forward",wheel:o,done:s(t.farIn)},{say:"Turn right, about 1¼ turns, round the far ring.",look:a,pedal:"forward",wheel:o,done:s(t.backLeave)},{say:"When pole 2 is over your right front corner, straighten up and cross back.",look:"Back through the middle.",pedal:"forward",wheel:o,done:s(t.nearAgain)},{say:"Turn left, about 1¼ turns, round the near ring to the gap.",look:a,pedal:"forward",wheel:o,done:s(t.exit)},{say:"Straighten the wheel and drive straight out through the gap into the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:o,done:l=>cd(n.bay,Et(l.car))&&Math.abs(Di(l.car.heading-n.bay.requiredHeading))<.1},Ur()]},wM=n=>{const e=An,t=ut,i=Pt,r=(C,b)=>({x:C.x+e*Math.cos(b),z:C.z+e*Math.sin(b)}),s=(C,b)=>Array.from({length:C+1},(P,S)=>b(S/C)),o=(C,b,P)=>{let S={err:1/0,leave:0,arrive:0};for(let M=0;M<4e3;M++){const L=2*Math.PI*M/4e3,V=r(C,L),U={x:-Math.sin(L)*P,z:Math.cos(L)*P},O={x:b.x-V.x,z:b.z-V.z},A=O.x*U.x+O.z*U.z,I=P===1?O.x*U.z-O.z*U.x:-(O.x*U.z-O.z*U.x),G=Math.abs(I-e);if(A>0&&G<S.err){const B={x:V.x+U.x*A,z:V.z+U.z*A};S={err:G,leave:L,arrive:Math.atan2(B.z-b.z,B.x-b.x)}}}return S},a=o(t,i,-1),l=o(i,t,1),c=(C,b,P)=>s(Math.ceil(Math.abs(P-b)*e/.25),S=>r(C,b+(P-b)*S)),h=-Math.PI/2;let u=a.leave;for(;u>=h;)u-=2*Math.PI;let d=l.leave;for(;d<=a.arrive;)d+=2*Math.PI;let p=xs;for(;p>=l.arrive;)p-=2*Math.PI;const g=n.bay.requiredHeading,_=[s(36,C=>({x:t.x+$e.startBack*(1-C),z:t.z-e})),c(t,h,u),c(i,a.arrive,d),c(t,l.arrive,p)],m=r(t,p),f=Math.hypot(n.bay.cx-m.x,n.bay.cz-m.z)+8;_.push(s(Math.ceil(f/.25),C=>({x:m.x+Math.sin(g)*f*C,z:m.z+Math.cos(g)*f*C})));const E=_.flat(),y=C=>_.slice(0,C).reduce((b,P)=>b+P.length,0),v=y(2),D=y(3);return{path:E,marks:{nearIn:y(1)-6,outLeave:v-8,farIn:v,backLeave:D-8,nearAgain:D,exit:y(4)-8}}},EM=n=>{const e=n.course.stopLine,t=r=>e.z-Ql(r.car),i={aim:r=>({x:e.cx,z:r.car.z+4})};return[{say:"Drive up the ramp slowly with the wheel straight.",look:"The stop line, just past the left door mirror.",pedal:"forward",wheel:i,done:r=>t(r)<=3},{say:"Stop as soon as the stop line touches the bottom edge of the left mirror.",look:"That puts your bumper about 30 cm before the line.",pedal:"forward",wheel:i,done:r=>t(r)<=Px(oe.length-oe.rearOverhang)},{say:"Stop and pull the handbrake. Hold for a second.",look:"The car must not roll back.",pedal:"stop",wheel:0,done:r=>r.course?.hill?.phase!=="approach"},{say:"Keep the handbrake on and press the gas.",pedal:"forward",handbrake:!0,wheel:0,done:(r,s)=>r.time-s.time>=.6},{say:"Release the handbrake and drive on over the hill.",pedal:"forward",wheel:i,done:r=>r.course?.hill?.phase==="done"&&t(r)<-2},{say:"Drive on and stop in the box.",look:"Stop when the whole car is inside the box.",pedal:"forward",wheel:i,done:r=>Et(r.car).cz>=n.bay.cz-Vn},Ur()]},Sd={"reverse-in":_M,parallel:vM,snake:MM,turnaround:yM,"figure-eight":SM,"hill-start":EM},bM=n=>{const e=Sd[n.id];return e?new pM(e(n)):null},TM=n=>n.id in Sd;class AM{latched=null;lastWheel=null;apply(e,t,i){const r=this.lastWheel;if(this.lastWheel=t,i===void 0)return this.latched=null,e;this.latched&&!e[this.latched]&&(this.latched=null),r!==null&&r!==i&&t===i&&!this.latched&&e.steerLeft!==e.steerRight&&(this.latched=e.steerLeft?"steerLeft":"steerRight");const o={...e,detentDeg:i};return this.latched&&(o[this.latched]=!1),o}reset(){this.latched=null,this.lastWheel=null}}const Xh=(n,e,t,i)=>{const r=[],s=new Set;for(const a of n)s.add(a-i),s.add(a+i);for(const a of s)r.push({x1:a,z1:e,x2:a,z2:t,width:.1});const o=[...s].sort((a,l)=>a-l);return r.push({x1:o[0],z1:t,x2:o[o.length-1],z2:t,width:.1}),r},RM=1,ls=(n,e,t,i)=>{const r=Math.max(1,Math.round(Math.hypot(t-n,i-e)/RM));return Array.from({length:r+1},(s,o)=>({x:n+(t-n)*o/r,z:e+(i-e)*o/r}))},wd=[-5.6,-2.8,0,2.8,5.6],Ed=1.4,CM=5.4,PM=3,qh={hw:Xn.garage.bayWidth/2,depth:Xn.garage.bayLength},LM=n=>n-(Ht.z-(oe.length/2-oe.rearOverhang)),bd=(n,e,t,i)=>{const r=PM,s=r+t,o=r+t/2,a=LM(o);return{bay:{cx:0,cz:o,hw:e,hl:t/2,angle:0,requiredHeading:n},parkedCars:[],poles:[{x:-e,z:r},{x:e,z:r},...ls(-e,a,-e,s),...ls(e,a,e,s),...ls(-e,s,e,s).slice(1,-1)],solids:[{rect:{cx:0,cz:s+.55,hw:7.6,hl:.15,angle:0},height:.5,color:10132116}],paint:[...Xh(i,r,s,e),...Xh(wd,-4,-9,Ed)]}},DM={id:"head-in",name:"Perpendicular · head-in",description:"Drive forward into the empty 90° bay. Good warm-up for lot parking.",spawn:{x:-8,z:-.5,heading:Math.PI/2},...bd(0,Ed,CM,wd),par:{reversals:1,timeSec:60}},IM={id:"reverse-in",name:"Perpendicular · reverse-in",description:'Back into the empty 90° bay (the exam "garage") so the nose faces the aisle. Poles mark the entrance; hold E to look back over your shoulder.',spawn:{x:-8,z:-.25,heading:Math.PI/2},...bd(Math.PI,qh.hw,qh.depth,[0]),par:{reversals:2,timeSec:80}},Er=Xn.parallel,jt=Er.bayLength/2,Sn=3.2,er=Sn+Er.bayWidth,wa=Sn-Er.laneWidth,Yh=-jt,Ea=jt+Er.forwardZone,UM={id:"parallel",name:"Parallel parking",description:"Reverse into the curbside space between the poles at its ends. Watch the mirrors and the curb.",spawn:{x:Yh-6,z:Sn-.85-oe.width/2,heading:Math.PI/2},bay:{cx:0,cz:Sn+Er.bayWidth/2,hw:Er.bayWidth/2,hl:jt,angle:Math.PI/2,requiredHeading:Math.PI/2},parkedCars:[],poles:[...ls(-jt,Sn,-jt,er),...ls(jt,Sn,jt,er)],solids:[{rect:{cx:0,cz:er+.2,hw:25,hl:.2,angle:0},height:.14,color:11578528}],paint:[{x1:Yh-8,z1:wa,x2:Ea+3,z2:wa,width:.1},{x1:-jt,z1:Sn,x2:-jt,z2:er,width:.1},{x1:jt,z1:Sn,x2:jt,z2:er,width:.1},{x1:-jt,z1:Sn,x2:jt,z2:Sn,width:.1},{x1:Ea,z1:wa,x2:Ea,z2:er,width:.1}],par:{reversals:3,timeSec:100}},br=[DM,IM,UM,...hM],Td=1,Sl=.85,Zh=.07,NM=4,wl=24,El=.03,FM=n=>{const e=NM/wl,t=[{x:0,z:0,theta:0}];let{x:i,z:r,theta:s}=t[0];for(let o=0;o<wl;o++)s-=Math.tan(n)/oe.wheelbase*e,i-=Math.sin(s)*e,r-=Math.cos(s)*e,t.push({x:i,z:r,theta:s});return t},$h=(n,e,t,i)=>{for(let r=0;r<t.length;r++){const s=t[r],o=Math.cos(s.theta),a=-Math.sin(s.theta),l=i-Zh/2,c=i+Zh/2,h=e+r*6;n[h]=s.x+o*l,n[h+1]=El,n[h+2]=s.z+a*l,n[h+3]=s.x+o*c,n[h+4]=El,n[h+5]=s.z+a*c}},Kh=(n,e)=>{const t=[];for(let i=0;i<n-1;i++){const r=e+i*2;t.push(r,r+1,r+2,r+1,r+3,r+2)}return t},ba=(n,e)=>{const t=new De(new Ln(Sl*2-.1,.07),new ai({color:e,transparent:!0,opacity:.9}));return t.rotation.x=-Math.PI/2,t.position.set(0,El-.005,-.9-n),t},OM=()=>{const n=new Xt;n.add(ba(.5,14826286)),n.add(ba(1,16106818)),n.add(ba(2,3590510));const e=wl+1,t=new Float32Array(e*2*3*2),i=new qt;i.setAttribute("position",new an(t,3)),i.setIndex([...Kh(e,0),...Kh(e,e*2)]);const r=new De(i,new ai({color:16765500,transparent:!0,opacity:.85,side:gn}));n.add(r),n.traverse(a=>a.layers.set(Td));let s=1/0;const o=a=>{if(Math.abs(a-s)<.004)return;s=a;const l=FM(a);$h(t,0,l,Sl),$h(t,e*6,l,-Sl),i.attributes.position.needsUpdate=!0,i.computeBoundingSphere()};return o(0),{group:n,update:o}},Kr=new N;function sn(n,e,t,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Kr.copy(e),Kr[i]=0,Kr.normalize();const c=.5*o/(o+a),h=1-Kr.angleTo(n)/l;return Math.sign(Kr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class rr extends yt{constructor(e=1,t=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,i/2,s),super(e,t,i,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,l=new N,c=new N(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new N,_=.5/r;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*s,h[m+1]=c.y*Math.sign(a.y)+l.y*s,h[m+2]=c.z*Math.sign(a.z)+l.z*s,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=sn(g,l,"z","y",s,i),d[f+1]=1-sn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),d[f+0]=1-sn(g,l,"z","y",s,i),d[f+1]=1-sn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),d[f+0]=1-sn(g,l,"x","z",s,e),d[f+1]=sn(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),d[f+0]=1-sn(g,l,"x","z",s,e),d[f+1]=1-sn(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),d[f+0]=1-sn(g,l,"x","y",s,e),d[f+1]=1-sn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),d[f+0]=sn(g,l,"x","y",s,e),d[f+1]=1-sn(g,l,"y","x",s,t);break}}}const Ta=.32,cs=oe.length-oe.rearOverhang,En=-.9,Jr=1.74,bl=.95,wo=.82,zM=[[En,.3],[cs,.3],[cs,.6],[cs-Mo.behindBumper,Mo.y],[2.2,wo-.01],[En+.15,wo-.01],[En,.7]],kM=[[2.24,.8],[1.7,1.43],[.12,1.45],[En+.18,.98],[En+.18,bl]],Jh=(n,e,t)=>{const i=new Wu(n.map(([s,o])=>new ue(s,o))),r=new ql(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:2,curveSegments:1});return r.rotateY(-Math.PI/2),r.translate((e-2*t)/2,0,0),r.computeVertexNormals(),r},ro=(n,e)=>{const t=new bt;t.position.set(n,Ta,e);const i=new De(new Rn(Ta,Ta,.24,20),new _t({color:1250327,roughness:.95}));i.rotation.z=Math.PI/2,i.castShadow=!0;const r=new De(new Rn(.17,.17,.25,14),new _t({color:12172998,roughness:.3,metalness:.9}));return r.rotation.z=Math.PI/2,t.add(i,r),t},jh=(n,e,t,i)=>{const r=new De(new rr(.42,.09,.08,2,.03),new _t({color:n,emissive:n,emissiveIntensity:.6}));return r.position.set(e,i,t),r},BM=()=>{const n=new Xt,e=new _t({color:2303532,roughness:.75}),t=new _t({color:3948875,roughness:.6}),i=new De(new Zl(.185,.022,10,32),e),r=new De(new Rn(.05,.05,.04,16),t);r.rotation.x=Math.PI/2;const s=new De(new yt(.34,.042,.026),t),o=new De(new yt(.042,.17,.026),t);return o.position.y=-.09,n.add(i,r,s,o),n.position.set(.42,.97,2.08),n.rotation.x=-1,n},Aa=1.7,Ut=Ht,tr=(n,e,t,i,r,s)=>{const o=new De(new yt(.05,r-i,t-e),s);return o.position.set(n*je.trimX,(i+r)/2,(e+t)/2),o},HM=n=>{const e=new Xt,t=2.15;for(const l of[-1,1]){const c=je.bPillar.z+je.bPillar.width/2;e.add(tr(l,je.cPillarRearZ,c,.3,je.beltY,n)),e.add(tr(l,c,t,.3,od,n)),e.add(tr(l,je.cPillarRearZ,Aa,je.roofY,je.roofY+.05,n));const h=(u,d)=>tr(l,u-d/2,u+d/2,je.beltY,je.roofY,n);e.add(h(je.bPillar.z,je.bPillar.width),h(je.divider.z,je.divider.width)),e.add(tr(l,je.quarterRearZ,je.divider.z,je.quarterTopY,je.roofY,n)),e.add(tr(l,je.cPillarRearZ,je.quarterRearZ,je.beltY,je.roofY,n))}const i=new _t({color:3356220,roughness:.95}),r=new De(new yt(1.57,.06,Aa-je.cPillarRearZ),new _t({color:7040627,roughness:.95}));r.position.set(0,je.roofY+.04,(Aa+je.cPillarRearZ)/2),e.add(r);const s=new De(new yt(2*je.trimX,.02,t-je.cPillarRearZ),n);s.position.set(0,.84,(t+je.cPillarRearZ)/2),e.add(s);const o=new De(new yt(1.4,.42,.1),i);o.position.set(0,.74,.2);const a=new De(new yt(1.4,.14,.5),i);return a.position.set(0,.5,.48),e.add(o,a),e},Ad=(n,e=!1)=>{const t=new Xt,i=new _t({color:n,roughness:.42,metalness:.25});i.envMapIntensity=.6;const r=new _t({color:1844012,roughness:.08,metalness:.9}),s=new _t({color:2303530,roughness:.8}),o=new De(Jh(zM,Jr,.06),i);o.castShadow=!0,t.add(o);for(const _ of[-1,1]){const m=new De(new yt(.05,bl-wo+.02,2.2-(En+.15)),i);m.position.set(_*(Jr/2-.03),(bl+wo)/2,(2.2+En+.15)/2),t.add(m)}const a=new De(new rr(Jr,.3,.24,2,.05),i);a.position.set(0,.84,En+.11),a.castShadow=!0,t.add(a);const l=new De(Jh(kM,1.58,.04),r);l.castShadow=!0,t.add(l);const c=new De(new rr(1.46,.05,1.56,2,.02),i);c.position.set(0,1.465,.91),c.castShadow=!0,t.add(c);for(const _ of[-1,1]){const m=new De(new yt(.045,.78,.055),s);m.position.set(_*ss.x,ss.y,ss.z),m.rotation.x=-.71,t.add(m)}for(const[_,m]of[[cs,1],[En,-1]]){const f=new De(new rr(Jr+.02,.2,.14,2,.05),s);f.position.set(0,.4,_-m*.07),f.castShadow=!0,t.add(f)}const h=ro(-.8,0),u=ro(.8,0),d=ro(-.8,oe.wheelbase),p=ro(.8,oe.wheelbase);t.add(h,u,d,p);for(const _ of[-.58,.58])t.add(jh(16774344,_,cs-.16,.66)),t.add(jh(14492177,_,En-.005,.84));for(const _ of[-1,1]){const m=Ut.x-Ut.w/2,f=Jr/2-.06,E=new De(new yt(m-f,.06,.08),i);E.position.set(_*(m+f)/2,Ut.y-.04,Ut.z);const y=new De(new rr(Ut.w,Ut.h,Ut.d,2,.035),i);y.position.set(_*Ut.x,Ut.y,Ut.z),y.castShadow=!0;const v=new De(new yt(Ut.w-.04,Ut.h-.035,.01),r);v.position.set(_*Ut.x,Ut.y,Ut.z-Ut.d/2-.004),t.add(E,y,v)}const g={group:t,frontWheelPivots:[d,p]};if(e){const _=new _t({color:2764600,roughness:.9}),m=new De(new rr(1.55,.14,.2,2,.05),_);m.position.set(0,.92,1.99);const f=new De(new yt(1.6,.07,.27),_);f.position.set(0,.825,2.185),t.add(m,f),t.add(HM(s));const E=BM();t.add(E),g.steeringWheel=E}return g},Qh=oe.length/2-oe.rearOverhang,Ra={up:4.2,back:7.5},GM=26;class VM{cockpit;chase;top;view=1;lookTarget=0;leftTarget=0;look=0;lookLeft=0;constructor(e,t){this.cockpit=new Nt(72,t,.05,140),this.cockpit.position.set(st.x,st.y,st.z),this.cockpit.rotation.order="YXZ",this.cockpit.rotation.y=Math.PI,this.cockpit.rotation.x=-.09,e.add(this.cockpit),this.chase=new Nt(60,t,.1,200),this.top=new Nt(55,t,.1,200),this.top.up.set(0,0,-1)}setHeadTarget(e){this.lookTarget=e}setLookLeft(e){this.leftTarget=e?1:0}get headTurn(){return Math.max(this.look,this.lookLeft)}setView(e){this.view=e}get activeView(){return this.view}get active(){return this.view===1?this.cockpit:this.view===2?this.chase:this.top}setAspect(e){for(const t of[this.cockpit,this.chase,this.top])t.aspect=e,t.updateProjectionMatrix()}update(e,t){const i=(g,_,m)=>Math.abs(_-g)<1e-4?_:g+(_-g)*(1-Math.exp(-4*t/m));this.look=i(this.look,this.lookTarget,xn.seconds),this.lookLeft=i(this.lookLeft,this.leftTarget,Ma.seconds);const r=this.look,s=this.lookLeft,o=xn.eye,a=Ma.eye;this.cockpit.position.set(st.x+(o.x-st.x)*r+(a.x-st.x)*s,st.y+(o.y-st.y)*r+(a.y-st.y)*s,st.z+(o.z-st.z)*r+(a.z-st.z)*s),this.cockpit.rotation.y=Math.PI-(xn.yawDeg*r-Ma.yawDeg*s)*Math.PI/180,this.cockpit.rotation.x=-.09+.04*r;const l=Math.sin(e.heading),c=Math.cos(e.heading),h=e.x+l*Qh,u=e.z+c*Qh,d=new N(h-l*Ra.back,Ra.up,u-c*Ra.back),p=1-Math.exp(-5*t);this.chase.position.lengthSq()===0&&this.chase.position.copy(d),this.chase.position.lerp(d,p),this.chase.lookAt(h+l*1.5,.6,u+c*1.5),this.top.position.set(h,GM,u),this.top.lookAt(h,0,u)}}const eu=[Ht.y,Ht.z-Bt.glassBack],so=(n,e,t)=>Math.min(t,Math.max(e,n)),Rd=[{id:"left",fov:Bt.fovDeg,aspect:Bt.aspect,rtSize:[512,342],flip:!0,pose:{pos:[Ht.x,...eu],rotY:-.3,rotX:Bt.pitch},layout:(n,e)=>{const t=so(n*.17,170,330);return{x:12,y:e*.58,w:t,h:t/1.5}}},{id:"right",fov:Bt.fovDeg,aspect:Bt.aspect,rtSize:[512,342],flip:!0,pose:{pos:[-1.03,...eu],rotY:Bt.yawOut,rotX:Bt.pitch},layout:(n,e)=>{const t=so(n*.17,170,330);return{x:n-t-12,y:e*.58,w:t,h:t/1.5}}},{id:"backup",fov:62,aspect:1.62,rtSize:[820,506],flip:!0,pose:{pos:[0,.8,-.98],rotY:0,rotX:-.42},layout:n=>{const e=so(n*.25,240,440);return{x:(n-e)/2,y:4,w:e,h:e/1.62}}},{id:"eagle",fov:55,aspect:1.35,rtSize:[560,415],flip:!1,layout:(n,e)=>{const t=so(n*.2,220,420),i=t/1.35;return{x:(n-t)/2,y:e-i-8,w:t,h:i}}}],tu=(n,e,t)=>{const i=Rd.find(s=>s.id===n);if(!i)throw new Error(`unknown inset ${n}`);const r=i.layout(e,t);return{left:r.x-4,right:r.x+r.w+4,top:t-(r.y+r.h)-4,bottom:t-r.y+4}};class WM{views=[];overlayScene=new Hl;overlayCamera=new Kl(0,1,1,0,-10,10);constructor(e){for(const t of Rd){const i=new Nt(t.fov,t.aspect,.05,120);t.pose&&(i.position.set(...t.pose.pos),i.rotation.order="YXZ",i.rotation.y=t.pose.rotY,i.rotation.x=t.pose.rotX,e.add(i)),t.id==="backup"&&i.layers.enable(Td);const r=new oi(t.rtSize[0],t.rtSize[1]);t.flip&&(r.texture.wrapS=xr,r.texture.repeat.x=-1,r.texture.offset.x=1);const s=new De(new Ln(1,1),new ai({color:658189})),o=new De(new Ln(1,1),new ai({map:r.texture}));s.position.z=-1,this.overlayScene.add(s,o),this.views.push({def:t,camera:i,rt:r,frame:s,image:o})}}setEagleTarget(e){const t=this.views.find(i=>i.def.id==="eagle");t&&(t.camera.position.set(e.cx,15,e.cz),t.camera.up.set(Math.sin(e.angle),0,Math.cos(e.angle)),t.camera.lookAt(e.cx,0,e.cz))}setSize(e,t){this.overlayCamera.right=e,this.overlayCamera.top=t,this.overlayCamera.updateProjectionMatrix();for(const i of this.views){const r=i.def.layout(e,t);i.image.position.set(r.x+r.w/2,r.y+r.h/2,0),i.image.scale.set(r.w,r.h,1),i.frame.position.set(r.x+r.w/2,r.y+r.h/2,-1),i.frame.scale.set(r.w+8,r.h+8,1)}}render(e,t,i){let r=!1;for(const s of this.views){const o=s.def.id==="backup"?i.backup:s.def.id==="eagle"?i.eagle:i.mirrors;s.image.visible=o,s.frame.visible=o,o&&(r=!0,e.setRenderTarget(s.rt),e.render(t,s.camera))}if(e.setRenderTarget(null),r){const s=e.autoClear;e.autoClear=!1,e.clearDepth(),e.render(this.overlayScene,this.overlayCamera),e.autoClear=s}}}const XM=n=>(n.userData.shared=!0,n),qM=n=>{for(const e of Object.values(n))e instanceof Lt&&!e.userData.shared&&e.dispose();n.dispose()},YM=n=>{n.removeFromParent(),n.traverse(e=>{if(e instanceof Lo&&e.dispose(),e instanceof De){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)qM(i)}})},nu=90,ZM=()=>{const n=document.createElement("canvas");n.width=16,n.height=512;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#4f7cb2"),t.addColorStop(.55,"#8fb2d6"),t.addColorStop(.8,"#cfdfec"),t.addColorStop(1,"#e4ebf0"),e.fillStyle=t,e.fillRect(0,0,16,512);const i=new zu(n);return i.colorSpace=Wt,i},$M=()=>{const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#43464d",e.fillRect(0,0,256,256);for(let i=0;i<12e3;i++){const r=45+Math.floor(Math.random()*55);e.fillStyle=`rgba(${r},${r},${r+6},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,1.6,1.6)}for(let i=0;i<40;i++)e.fillStyle=`rgba(30,32,36,${.05+Math.random()*.08})`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,8+Math.random()*26,0,Math.PI*2),e.fill();const t=new zu(n);return t.wrapS=xr,t.wrapT=xr,t.repeat.set(26,26),t.colorSpace=Wt,t.anisotropy=8,t},KM=()=>{const n=new Hl;n.background=ZM(),n.fog=new Bl(12834020,60,115),n.add(new Pm(13624575,5263950,1.15));const e=new Um(16773853,1.8);e.position.set(28,42,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.radius=4;const t=e.shadow.camera;return t.left=-30,t.right=30,t.top=30,t.bottom=-30,t.far=110,n.add(e),n};let iu=null;const JM=()=>{iu??=XM($M());const n=new De(new Ln(nu,nu),new _t({map:iu,roughness:.96}));return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n},jM=(n,e,t,i,r)=>{const s=t-n,o=i-e,a=Math.hypot(s,o),l=new De(new Ln(r,a),new _t({color:14211282,roughness:.8}));return l.rotation.order="YXZ",l.rotation.y=Math.atan2(s,o),l.rotation.x=-Math.PI/2,l.position.set((n+t)/2,.012,(e+i)/2),l},QM=n=>{const{bay:e}=n,t=new Xt,i=new ai({color:3590510,transparent:!0,opacity:.8}),r=.08,s=(o,a,l,c)=>{const h=new De(new Ln(l,c),i);h.rotation.x=-Math.PI/2,h.position.set(o,.02,a),t.add(h)};return s(-e.hw,0,r,e.hl*2),s(e.hw,0,r,e.hl*2),s(0,-e.hl,e.hw*2,r),s(0,e.hl,e.hw*2,r),t.position.set(e.cx,0,e.cz),t.rotation.y=e.angle,t},ey=(n,e,t)=>{const i=new De(new yt(n.hw*2,e,n.hl*2),new _t({color:t,roughness:.9}));return i.position.set(n.cx,e/2,n.cz),i.rotation.y=n.angle,i.castShadow=!0,i.receiveShadow=!0,i},Ca=(n,e)=>{const t=new Xt,i=new De(new Rn(.14,.2,1.6,8),new _t({color:5916210}));i.position.y=.8;const r=new De(new Yl(1.3,1),new _t({color:4946490,roughness:1}));return r.position.y=2.3,r.castShadow=!0,t.add(i,r),t.position.set(n,0,e),t},ty=(n,e,t,i,r,s)=>{const o=new De(new yt(t,i,r),new _t({color:s,roughness:.85}));return o.position.set(n,i/2,e),o.castShadow=!0,o},ny=(n,e)=>{const t=n.course;if(!t)return null;const i=[n.spawn.x,n.bay.cx],r=[n.spawn.z,n.bay.cz];for(const s of t.boundaries)i.push(s.x1,s.x2),r.push(s.z1,s.z2);for(const s of t.poles)i.push(s.x),r.push(s.z);return{x0:Math.min(...i)-e,x1:Math.max(...i)+e,z0:Math.min(...r)-e,z1:Math.max(...r)+e}},iy=n=>{const e=new Xt,t=(r,s,o,a)=>!n||r+o<n.x0||r-o>n.x1||s+a<n.z0||s-a>n.z1,i=[[0,32,40,9,10,12103842],[-32,-6,8,6,30,10134700],[30,14,10,7,16,11509136]];for(const[r,s,o,a,l,c]of i)t(r,s,o/2,l/2)&&e.add(ty(r,s,o,a,l,c));for(const[r,s]of[[-16,12],[16,12],[-20,-14],[22,-12],[12,22]])t(r,s,1.3,1.3)&&e.add(Ca(r,s));if(n)for(let r=n.z0;r<=n.z1;r+=9)e.add(Ca(n.x0-4,r),Ca(n.x1+4,r));return e},ru=(n,e,t,i,r,s,o)=>{const a=Math.hypot(i-e,r-t),l=Math.max(1,Math.ceil(a/.25)),c=(r-t)/a,h=-(i-e)/a,u=[],d=[];for(let g=0;g<=l;g++){const _=e+(i-e)*g/l,m=t+(r-t)*g/l,f=xo(n,_,m)+.02;for(const E of[-1,1])u.push(_+E*c*s/2,f,m+E*h*s/2);if(g<l){const E=g*2;d.push(E,E+2,E+1,E+1,E+2,E+3)}}const p=new qt;return p.setAttribute("position",new wt(u,3)),p.setIndex(d),p.computeVertexNormals(),new De(p,o)},ry=n=>{const e=Ax(n),t=n.cx-n.hw,i=n.cx+n.hw,r=[],s=(l,c,h,u)=>{r.push(...l,...c,...h,...l,...h,...u)};for(let l=0;l<e.length-1;l++){const c=e[l],h=e[l+1];s([t,c.y,c.z],[t,h.y,h.z],[i,h.y,h.z],[i,c.y,c.z]),s([t,0,c.z],[t,0,h.z],[t,h.y,h.z],[t,c.y,c.z]),s([i,0,c.z],[i,c.y,c.z],[i,h.y,h.z],[i,0,h.z])}const o=new qt;o.setAttribute("position",new wt(r,3)),o.computeVertexNormals();const a=new De(o,new _t({color:4736842,roughness:.95,side:gn}));return a.castShadow=!0,a.receiveShadow=!0,a},Cd=n=>{const e=new Xt;if(n.length===0)return e;const t=[[new Rn(.12,.14,.05,16),2763566,.025,!1],[new Rn(.045,.045,1.1,12),16738842,.6,!0],[new Rn(.047,.047,.16,12),15921902,.95,!1]],i=new ot;for(const[r,s,o,a]of t){const l=new Lo(r,new _t({color:s,roughness:s===2763566?.9:.6}),n.length);n.forEach((c,h)=>l.setMatrixAt(h,i.makeTranslation(c.x,o,c.z))),l.instanceMatrix.needsUpdate=!0,l.castShadow=a,e.add(l)}return e},sy=n=>{const e=new Lo(new Rn(.05,.05,.22,12),new _t({color:16765471,roughness:.5,emissive:3812352}),n.length),t=new ot;return n.forEach((i,r)=>e.setMatrixAt(r,t.makeTranslation(i.x,.95,i.z))),e.instanceMatrix.needsUpdate=!0,e},oy=n=>{const e=new Xt,t=n.hill?[n.hill]:[];n.hill&&e.add(ry(n.hill));const i=new _t({color:15132384,roughness:.8});for(const s of n.boundaries)e.add(ru(t,s.x1,s.z1,s.x2,s.z2,jl,i));const r=n.stopLine;if(r){const s=new _t({color:14170155,roughness:.7});e.add(ru(t,r.cx-r.hw,r.z,r.cx+r.hw,r.z,.3,s))}return e.add(Cd(n.poles)),n.refPoles?.length&&e.add(sy(n.refPoles)),e},Pd=n=>{const e=new Xt;e.add(JM());for(const t of n.paint)e.add(jM(t.x1,t.z1,t.x2,t.z2,t.width));e.add(QM(n));for(const t of n.solids)e.add(ey(t.rect,t.height,t.color));for(const t of n.parkedCars){const{group:i}=Ad(t.color),r=oe.length/2-oe.rearOverhang;i.position.set(t.x-Math.sin(t.heading)*r,0,t.z-Math.cos(t.heading)*r),i.rotation.y=t.heading,e.add(i)}return n.course&&e.add(oy(n.course)),n.poles&&e.add(Cd(n.poles)),e.add(iy(ny(n,3))),e},ay=1.5,su=1,ly=.25,Ld=(n,e=1/0)=>Math.min(n,ay,e),cy=n=>n<=su?n:Math.max(su,n-ly);class hy{constructor(e=2e3,t=25,i=250){this.windowMs=e,this.slowMs=t,this.maxGapMs=i}windowMs;slowMs;maxGapMs;elapsed=0;frames=0;feed(e){if(e<=0||e>this.maxGapMs||(this.elapsed+=e,this.frames+=1,this.elapsed<this.windowMs))return!1;const t=this.elapsed/this.frames>this.slowMs;return this.elapsed=0,this.frames=0,t}reset(){this.elapsed=0,this.frames=0}}const uy={1:"Cockpit",2:"Chase",3:"Top-down"},rt=(n,e)=>{const t=document.createElement("div");return t.className=e,n.appendChild(t),t};class dy{last=new Map;changed(e,t){return this.last.get(e)===t?!1:(this.last.set(e,t),!0)}}const fy=n=>{const e=Math.round(Math.abs(n.wheelDeg)),t=Math.abs(nd(n)*180/Math.PI).toFixed(1);if(e===0)return["Wheel centered",""];const i=n.wheelDeg>0?"L":"R";return[`Wheel ${e}° ${i}`,`tires ${t}° ${i}`]};class py{root;status;gear;speed;steering;steeringWheel;steeringWheelPart;steeringSep;steeringTiresPart;settle;settleFill;viewLabel;flash;target;coach;coachStep;coachSay;coachLook;coachDo;layer;topCenter;steerLeftSlot;steerRightSlot;writes=new dy;constructor(e){this.root=rt(e,"hud hidden"),this.layer=this.root,this.flash=rt(this.root,"flash"),this.status=rt(this.root,"panel status");const t=rt(this.root,"panel drive");this.gear=rt(t,"gear"),this.speed=rt(t,"speed");const i=rt(this.root,"panel steer");this.steerLeftSlot=rt(i,"steer-slot");const r=rt(i,"steer-center");this.steerRightSlot=rt(i,"steer-slot"),this.steeringWheel=rt(r,"steer-wheel"),this.steeringWheel.innerHTML='<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="41" fill="none" stroke="#dfe3e9" stroke-width="9"/><line x1="12" y1="50" x2="88" y2="50" stroke="#dfe3e9" stroke-width="6"/><line x1="50" y1="50" x2="50" y2="88" stroke="#dfe3e9" stroke-width="6"/><circle cx="50" cy="50" r="9" fill="#dfe3e9"/><circle cx="50" cy="13" r="4" fill="#4a9fe8"/></svg>',this.steering=rt(r,"steer-text"),this.steeringWheelPart=rt(this.steering,"steer-part"),this.steeringSep=rt(this.steering,"steer-sep"),this.steeringSep.textContent=" · ",this.steeringTiresPart=rt(this.steering,"steer-part"),this.settle=rt(this.root,"settle hidden"),rt(this.settle,"settle-text").textContent="In position — hold still";const s=rt(this.settle,"settle-bar");this.settleFill=rt(s,"settle-fill");const o=rt(this.root,"top-right");this.viewLabel=rt(o,"panel view-label"),this.topCenter=rt(this.root,"top-center"),this.target=rt(this.topCenter,"target-chip hidden"),this.coach=rt(this.topCenter,"coach hidden"),this.coachStep=rt(this.coach,"coach-step"),this.coachSay=rt(this.coach,"coach-say"),this.coachLook=rt(this.coach,"coach-look"),this.coachDo=rt(this.coach,"coach-do");const a=rt(o,"panel help");a.innerHTML="<b>↑/W</b> drive · <b>↓/S</b> brake → reverse · <b>←/→</b> steer · <b>Space</b> handbrake · <b>Q</b> look left · <b>E</b> tap: right pillar, hold: look back · <b>1/2/3</b> view · <b>B</b> bird's-eye · <b>C</b> reverse camera · <b>H</b> hints · <b>R</b> restart · <b>Esc</b> menu"}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}update(e,t,i=!0){const{car:r}=e,s=e.time,o=Math.floor(s/60),a=Math.floor(s%60).toString().padStart(2,"0"),l=e.course?` · Line touches ${e.course.lineTouches} · Pole hits ${e.course.poleHits}`:"",c=this.writes,h=`<b>${e.scenario.name}</b><br>Time ${o}:${a} · Collisions ${e.collisions} · Gear changes ${e.reversals}${l}`;c.changed("status",h)&&(this.status.innerHTML=h),c.changed("gear",r.gear)&&(this.gear.textContent=r.gear,this.gear.classList.toggle("reverse",r.gear==="R"));const u=`${(Math.abs(r.speed)*3.6).toFixed(1)} km/h`;c.changed("speed",u)&&(this.speed.textContent=u);const[d,p]=fy(r);c.changed("wheel",d)&&(this.steeringWheelPart.textContent=d),c.changed("tires",p)&&(this.steeringTiresPart.textContent=p,this.steeringSep.classList.toggle("hidden",p===""));const g=`rotate(${-r.wheelDeg}deg)`;c.changed("wheelRot",g)&&(this.steeringWheel.style.transform=g);const _=Kx(e);c.changed("settle",String(_))&&(this.settle.classList.toggle("hidden",_===0),this.settleFill.style.width=`${_*100}%`);const m=md(e),f=e.scenario.course,E=f&&e.course&&!(hd(f,e.course)&&m.dist<=12),y=document.documentElement.classList.contains("touch");y&&this.status.parentElement!==this.topCenter?this.topCenter.insertBefore(this.status,this.target):!y&&this.status.parentElement!==this.root&&this.root.appendChild(this.status);const v=Math.min(Math.max(window.innerWidth*.2,220),420)/1.35,D=i?`${v+18}px`:y?"6px":"12px";if(c.changed("top",D)&&(this.topCenter.style.top=D),this.target.classList.toggle("warn",!!e.course?.onLine),E&&f&&e.course){this.target.classList.remove("hidden","good");const P=`⌖ ${Gx(f,e.course,r)}`;c.changed("target",P)&&(this.target.textContent=P)}else if(this.target.classList.toggle("hidden",m.dist>12),m.dist<=12){const P=(m.angleDev*180/Math.PI).toFixed(0),S=`⌖ ${m.dist.toFixed(1)} m · ${P}° off`;c.changed("target",S)&&(this.target.textContent=S),this.target.classList.toggle("good",m.aligned)}const C=`${uy[t]} view`;c.changed("view",C)&&(this.viewLabel.textContent=C);const b=String(e.flash*1.4);c.changed("flash",b)&&(this.flash.style.opacity=b)}updateCoach(e,t){const i=this.writes;if(i.changed("coachShown",String(e!==null))&&this.coach.classList.toggle("hidden",e===null),!e)return;const r=document.documentElement.classList.contains("touch"),s=`Step ${e.step} of ${e.total} · H hides hints`;i.changed("coachStep",s)&&(this.coachStep.textContent=s);const o=r?ou(e.say):e.say;i.changed("coachSay",o)&&(this.coachSay.textContent=o);const a=e.look?`Look: ${r?ou(e.look):e.look}`:"";i.changed("coachLook",a)&&(this.coachLook.textContent=a,this.coachLook.classList.toggle("hidden",a===""));const l=gM(t,e.wheel,e.pedal),c=`${my[e.pedal]}${e.handbrake?" + handbrake":""} · Wheel: ${Md(l)}`;i.changed("coachDo",c)&&(this.coachDo.textContent=c);const h=String(_d(t,l));i.changed("coachOk",h)&&this.coachDo.classList.toggle("ok",h==="true")}}const ou=n=>n.replace(/\bTap E\b/g,"Tap the right eye button").replace(/\bHold E\b/g,"Hold the right eye button"),my={forward:"Drive forward",reverse:"Reverse",stop:"Stop"},gy="https://api.web3forms.com/submit",Dd=2e3,Id=200,Ud=()=>"e8291eea-7d84-484b-86ee-595fd750b32a".trim(),_y=(n,e)=>({access_key:n,subject:"Driving test simulator feedback",from_name:"Driving test simulator",message:e.message.trim().slice(0,Dd),contact:e.contact.trim().slice(0,Id)||"—",page:e.page,user_agent:e.userAgent,botcheck:e.botcheck});async function vy(n,e,t=(i,r)=>fetch(i,r)){if(e.message.trim()==="")return"empty";if(e.botcheck)return"sent";try{const i=await t(gy,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(_y(n,e))});return i.ok&&(await i.json()).success?"sent":"error"}catch{return"error"}}function Es(n,e){try{window.goatcounter?.count({path:n,title:e,event:!0})}catch{}}const xy=()=>Ud()!=="";function My(){if(document.querySelector(".feedback-overlay"))return;const n=Ud(),e=document.createElement("div");e.className="overlay feedback-overlay",e.innerHTML=`
    <form class="menu-panel feedback-panel" novalidate>
      <h2>Feedback</h2>
      <p class="subtitle">Bug, idea or a missing exercise — tell me. No account needed.</p>
      <textarea name="message" rows="6" maxlength="${Dd}" required
        placeholder="Your message"></textarea>
      <input name="contact" type="text" maxlength="${Id}" autocomplete="email"
        placeholder="Email or Telegram, if you want a reply (optional)" />
      <input name="botcheck" type="checkbox" class="feedback-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <p class="feedback-status" role="status"></p>
      <div class="buttons">
        <button type="button" class="btn" data-act="cancel">Cancel</button>
        <button type="submit" class="btn primary" data-act="send">Send</button>
      </div>
    </form>`;const t=e.querySelector("form"),i=t.elements.namedItem("message"),r=t.elements.namedItem("contact"),s=t.elements.namedItem("botcheck"),o=t.querySelector(".feedback-status"),a=t.querySelector('[data-act="send"]'),l=t.querySelector('[data-act="cancel"]'),c=()=>e.remove(),h=(d,p="")=>{o.textContent=d,o.className=`feedback-status ${p}`},u=d=>{d.stopPropagation(),d.type==="keydown"&&d.key==="Escape"&&c()};e.addEventListener("keydown",u),e.addEventListener("keyup",u),e.addEventListener("click",d=>{d.target===e&&c()}),l.addEventListener("click",c),t.addEventListener("submit",async d=>{if(d.preventDefault(),i.value.trim()===""){h("Please write a message first.","err"),i.focus();return}a.disabled=!0,h("Sending…"),await vy(n,{message:i.value,contact:r.value,botcheck:s.checked,page:location.href,userAgent:navigator.userAgent})==="sent"?(Es("feedback/sent","Feedback sent"),h("Thank you! Message sent.","ok"),i.disabled=!0,r.disabled=!0,a.classList.add("hidden"),l.textContent="Close"):(h("Could not send — check your connection and try again.","err"),a.disabled=!1)}),document.body.appendChild(e),i.focus()}const yy=(n,e,t,i,r=[])=>{n.innerHTML="",n.className="overlay";const s=document.createElement("div");s.className="menu-panel",s.innerHTML=`<h1>🚗 Driving test simulator</h1><p class="subtitle">Train the driving-test exercises and parking from the driver's seat — mirrors, look-back and every fault scored.</p>`,i&&s.appendChild(i);const o=(l,c)=>{if(c.length===0)return;const h=document.createElement("h3");h.className="menu-section",h.textContent=l;const u=document.createElement("div");u.className="card-grid";for(const d of c){const p=document.createElement("button");p.className="card";const g=TM(d)?'<em class="card-badge">step-by-step hints</em>':"";p.innerHTML=`<b>${d.name}</b><span>${d.description}</span>${g}`,p.addEventListener("click",()=>t(d)),u.appendChild(p)}s.append(h,u)};if(r.length>0){const l=document.createElement("h3");l.className="menu-section",l.textContent="Learn";const c=document.createElement("div");c.className="card-grid";for(const h of r){const u=document.createElement("button");u.className="card card-learn",u.innerHTML=`<b>🎬 ${h.title}</b><span>${h.text}</span><em class="card-badge">lesson</em>`,u.addEventListener("click",h.open),c.appendChild(u)}s.append(l,c)}o("Parking",e.filter(l=>!l.course)),o("Driving-test exercises",e.filter(l=>l.course));const a=document.createElement("p");if(a.className="menu-help",a.innerHTML="<b>↑/W</b> drive · <b>↓/S</b> brake, then reverse · <b>←/→</b> steer (3.1 turns lock-to-lock, 15.5:1 ratio) · <b>Space</b> handbrake · <b>1/2/3</b> camera views · <b>Q</b> (hold) look left out the driver's window · <b>E</b> tap: look at the right A-pillar (tap again to return), hold: look over right shoulder · <b>B</b> bird's-eye view on/off · <b>C</b> reverse camera and guidelines on/off · <b>H</b> step-by-step hints on/off",s.appendChild(a),xy()){const l=document.createElement("button");l.className="btn feedback-btn",l.textContent="💬 Send feedback",l.addEventListener("click",My),s.appendChild(l)}n.appendChild(s)},Sy=n=>{n.innerHTML="",n.className="overlay hidden"},Nd=Math.tan(Bt.fovDeg*Math.PI/360),wy=Nd*Bt.aspect,Fd=(n,e)=>{const t=e.x-n.x,i=e.z-n.z,r=Math.sin(n.heading),s=Math.cos(n.heading);return{x:t*s-i*r,y:e.y??0,z:t*r+i*s}},hr=(n,e)=>{const t=n==="left"?1:-1,i={x:t*Ht.x,y:Ht.y,z:Ht.z-Bt.glassBack},r=Bt.yawOut,s=Bt.pitch,o=t*Math.sin(r),a=-Math.cos(r),l=t*Math.cos(r),c=Math.sin(r),h={x:o*Math.cos(s),y:Math.sin(s),z:a*Math.cos(s)},u={x:-o*Math.sin(s),y:Math.cos(s),z:-a*Math.sin(s)},d={x:e.x-i.x,y:e.y-i.y,z:e.z-i.z},p=d.x*h.x+d.y*h.y+d.z*h.z,g=(d.x*l+d.z*c)/p/wy,_=(d.x*u.x+d.y*u.y+d.z*u.z)/p/Nd;return{X:g,Y:_,depth:p}},Pa={centerY:.31,radius:.4},Od=(n,e=16)=>{const t=(n==="left"?1:-1)*(oe.width/2),i=[];for(let r=0;r<=e;r++){const s=Math.PI*r/e;i.push({x:t,y:Pa.centerY+Pa.radius*Math.sin(s),z:Pa.radius*Math.cos(s)})}return i},zd=1/120,Ey=2,Tl=7200,by=.01,Ty=.31,kd=.2,Ay=.12,nc=n=>{const e=n.bay,t=e.cz-e.hl,i=n.poles.filter(a=>Math.abs(a.z-t)<1e-9),r=Math.sign(Math.sin(n.spawn.heading))||1,s=[...i].sort((a,l)=>r*(l.x-a.x)),o=s[0];return{pole1:o,pole2:s[1],backCorner:{x:o.x,z:e.cz+e.hl},windowEdgeDeg:ld()}},Eo=(n,e)=>ar(n,xn.eye,e.pole1),Ci=(n,e)=>{const t=Et(n),i=Math.sin(t.angle),r=Math.cos(t.angle),s=e.x-t.cx,o=e.z-t.cz,a=s*r-o*i,l=s*i+o*r,c=Math.max(0,Math.abs(a)-t.hw),h=Math.max(0,Math.abs(l)-t.hl);return Math.hypot(c,h)-.12},Ry=(n,e)=>-((e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading))-oe.width/2-Ay,Cy=1.15,Py=(n,e)=>{const t=(e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading),i=st.x-t,r=st.x+je.trimX,s=st.y-(st.y-od)*i/r;return Math.max(0,Math.min(1,s/Cy))},Al=(n,e)=>(e.x-n.x)*Math.sin(n.heading)+(e.z-n.z)*Math.cos(n.heading),Ly=(n,e)=>{const t=hr("right",Od("right").at(-1));return hr("right",Fd(n,e.backCorner)).Y-t.Y},bo=(n,e)=>{const t=Math.sign(n.speed);return{...n,x:n.x+Math.sin(n.heading)*e*t,z:n.z+Math.cos(n.heading)*e*t}},Tr=n=>n.speed*n.speed/(2*oe.handbrakeDecel),Bd=(n,e)=>Math.abs(Math.atan2(Math.sin(e-n.heading),Math.cos(e-n.heading))),Hd=(n,e,t,i)=>({throttle:!i&&e==="forward",reverse:!i&&e==="reverse",handbrake:i||e==="stop",steerLeft:t>n.wheelDeg+4,steerRight:t<n.wheelDeg-4,detentDeg:t}),Dy=(n,e)=>Math.abs(n.wheelDeg-e)<1,Rl=n=>{const e=[[],[],[],[]];return n.forEach((t,i)=>{i%4&&i!==n.length-1||wr(t).forEach((r,s)=>e[s].push(r))}),e};class qn{constructor(e){this.s=e}s;steps=[];ghostKinds=[];add(e){const t=[this.s.car];let i=!1,r=0;for(;r<Tl;r++){const s=this.s.car;if(e.pedal==="stop"||i){if(Math.abs(s.speed)<by&&Dy(s,e.wheel))break}else if(e.until?.(s)){i=!0;continue}this.s={...tc(this.s,Hd(s,e.pedal,e.wheel,i),zd),settle:0,complete:!1},r%Ey===0&&t.push(this.s.car)}if(r>=Tl)throw new Error(`lesson step never finished: ${e.say}`);return t[t.length-1]!==this.s.car&&t.push(this.s.car),this.steps.push({say:e.say,look:e.look,pedal:e.pedal,wheel:e.wheel,frames:t,overlays:e.overlays??[]}),this.ghostKinds.push(e.ghost),this}hold(e,t,i,r,s=this.s.car.wheelDeg){return this.steps.push({say:e,look:t,pedal:"stop",wheel:s,frames:[this.s.car],overlays:i}),this.ghostKinds.push(r),this}finish(e,t,i,r,s,o){return this.steps.forEach((a,l)=>{const c=this.ghostKinds[l];if(c==="future"){const h=this.steps.slice(l+1).find(u=>u.pedal!=="stop");h&&(a.ghost={lines:Rl(h.frames),tone:"ok"})}c==="keep"&&(a.ghost=Oy(this.sessionAt(a),o??0,a.wheel))}),{id:e,title:t,summary:i,tone:r,scenario:this.s.scenario,refs:s,steps:this.steps,collisions:this.s.collisions}}sessionAt(e){const t=e.frames[e.frames.length-1];return{...ec(this.s.scenario),car:{...t,speed:0}}}}const Iy=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),r=n.x-e.cx,s=n.z-e.cz,o=r*i-s*t,a=r*t+s*i;return Math.hypot(Math.max(0,Math.abs(o)-e.hw),Math.max(0,Math.abs(a)-e.hl))},Uy=(n,e)=>{const t=e.poles??[],i=t.length?t.reduce((o,a)=>Ci(n,a)<Ci(n,o)?a:o):null,r=Dn(Et(n));let s=i?{gap:Ci(n,i),at:{x:i.x,z:i.z}}:null;for(const o of e.solids)for(const a of r){const l=Iy(a,o.rect);(!s||l<s.gap)&&(s={gap:l,at:a})}return s.at},Ny=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading),r=e.x-n.x,s=e.z-n.z,o=r*i-s*t,a=r*t+s*i;return{x:Math.max(-1.8/2,Math.min(oe.width/2,o)),z:Math.max(-.9,Math.min(oe.length-oe.rearOverhang,a))}},Fy=(n,e,t,i)=>{if(Math.abs(e)<1)return;const r=e/oe.steeringRatio*Math.PI/180,s=au(n,oe.wheelbase/Math.tan(r),0),a=Dn(Et(n)).map(l=>({center:s,radius:Math.hypot(l.x-s.x,l.z-s.z),hit:!1}));if(t&&i){const l=Ny(i,t),c=au(n,l.x,l.z);a.push({center:s,radius:Math.hypot(c.x-s.x,c.z-s.z),hit:!0})}return a},au=(n,e,t)=>{const i=Math.sin(n.heading),r=Math.cos(n.heading);return{x:n.x+e*r+t*i,z:n.z-e*i+t*r}},Oy=(n,e,t=-558)=>{let i=n;const r=[i.car];for(let s=0;s<Tl;s++){const o=tc(i,Hd(i.car,"reverse",t,!1),zd);if(o.collisions>i.collisions||o.car.speed===0&&s>10){const a=Uy(i.car,n.scenario);return{lines:Rl([...r,i.car]),tone:"bad",hit:a,circles:Fy(n.car,t,a,i.car)}}if(i=o,r.push(i.car),Bd(i.car,e)<.02)break}return{lines:Rl(r),tone:"bad"}},yn=-558,Gd=2.1,ic=n=>n.bay.cz-n.bay.hl-Gd-oe.width/2,Io=(n,e)=>{const t=ec(n);return{...t,car:{...t.car,z:e}}},zy="Look over your right shoulder at the small rear side window.",rc=(n,e,t,i,r,s)=>{n.add({say:"Drive slowly past the garage, wheel straight.",look:"Look right through the passenger window as pole 1 passes.",pedal:"forward",wheel:0,until:o=>Eo(o,e)>=90,overlays:[{kind:"door"}]}),n.hold("Check your distance: how much of pole 1 does the door hide?",t,[{kind:"door"}]),n.add({say:"Keep going. Watch pole 1 over your right shoulder.",look:zy,pedal:"forward",wheel:0,until:o=>Eo(o,e)>=e.windowEdgeDeg+i,overlays:[{kind:"sight"}]}),n.hold(r,s,[{kind:"sight"}])},ky="About a third of it: the right distance (a quarter to a bit over a third is fine).",sc=(n,e,t,i=!0)=>{const r=e.bay.requiredHeading;return n.add({say:"Turn the wheel fully right while standing.",look:"The dashed lines are the wheel tracks. Full lock does the steering from here.",pedal:"stop",wheel:yn,ghost:"future"}),i&&n.hold("Why this point works: the small rear side window sits right above the right rear wheel.","At full lock that wheel runs on the small inner circle. Pole 1 is just inside it, and the car never comes closer to the center, so it misses pole 1.",[{kind:"circle"}],"future"),n.add({say:"Reverse slowly. Keep the wheel fully right.",look:"Right mirror: pole 1 passes just outside the rear corner.",pedal:"reverse",wheel:yn,until:s=>Bd(s,r)<.012,ghost:"future"}),n.hold("Stop when the car is straight in the garage.","Both mirrors: the garage side lines run parallel to the car, equal gaps on both sides.",[{kind:"parallel"}]),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,overlays:[{kind:"parallel"}]}),n.add({say:"Reverse straight in, slowly.",look:"Right mirror: watch the end of the side line move down toward the rear wheel arch.",pedal:"reverse",wheel:0,until:s=>Ly(bo(s,Tr(s)),t)<=0,overlays:[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}]}),n.hold("Stop when, in the right mirror, the end of the side line is level with the back of the rear wheel arch.","Where the arch meets the sill. You see it with or without poles. The car is in, centered. Done.",[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}],void 0,0),n},By=(n,e=ic(n))=>{const t=nc(n),i=new qn(Io(n,e));return i.hold("Reverse into the garage on your right. Pole 1 is the near entrance pole, pole 2 the far one.",`You drive past the garage about ${Gd} m from the entrance poles, then reverse in.`,[]),rc(i,t,ky,0,"Stop when pole 1 reaches the back edge of the small rear side window.","The dashed line is your view to pole 1. It now meets the window edge: this is the start point."),sc(i,n,t).finish("garage-ok","Reverse into the garage","The reference run: one stop point, full lock, straighten, depth.","ok",t)},Hy=4,Vd=-.8,Wd=(n,e=ic(n),t=Hy,i=Vd,r=kd,s)=>{const o=nc(n),a=n.bay.requiredHeading,l=new qn(Io(n,e));return s?rc(l,o,s.verdict,t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From further out the usual point is too late. Watch what happens."):l.add({say:"Mistake: the car drove too far past the garage before stopping.",look:"Pole 1 is already past the back edge of the small rear side window.",pedal:"forward",wheel:0,until:c=>Eo(c,o)>=o.windowEdgeDeg+t,overlays:[{kind:"sight"}]}),l.add({say:"Full right lock, as usual.",pedal:"stop",wheel:yn}),l.add({say:"Reverse slowly, wheel fully right.",look:"Right mirror: pole 1 comes closer to the side of the car.",pedal:"reverse",wheel:yn,until:c=>Al(c,o.pole1)<0&&Ry(c,o.pole1)<=r,overlays:[{kind:"danger"}]}),l.hold("Stop! Pole 1 is about to disappear behind the body in the right mirror.","Red path: keep going and the side of the car hits pole 1.",[{kind:"danger"},{kind:"mirror",side:"right",mark:"pole1"}],"keep"),l.add({say:"Straighten the wheel while standing.",look:"With the wheel straight the gap to pole 1 stays the same as you reverse.",pedal:"stop",wheel:0,overlays:[{kind:"bumper"}]}),l.add({say:"Reverse straight, slowly.",look:"Right mirror: pole 1 slides along the side of the car toward the rear bumper.",pedal:"reverse",wheel:0,until:c=>Al(c,o.pole1)>=i,overlays:[{kind:"bumper"}]}),l.hold("Stop when pole 1 has just passed the rear corner and stands beside the rear bumper.","Now full lock swings the rear past pole 1. Overshot by much more? Drive forward and start again.",[{kind:"bumper"}]),sc(l,n,o,!1).finish(s?.id??"garage-too-far",s?.title??"Mistake: drove too far",s?.summary??"Pole 1 comes at the rear corner. Straighten, reverse until it is beside the bumper, then swing in.","mistake",o,a)},Gy=4,Xd=.3,qd=1,Yd=(n,e=ic(n),t=Gy,i=Xd,r=qd,s)=>{const o=nc(n),a=new qn(Io(n,e));return s?rc(a,o,s.verdict,-t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From this close the usual point is too early. Watch what happens."):a.add({say:"Mistake: the car stopped too early, before the reference point.",look:"Pole 1 has not reached the back edge of the small rear side window yet.",pedal:"forward",wheel:0,until:l=>Eo(l,o)>=o.windowEdgeDeg-t,overlays:[{kind:"sight"}]}),a.add({say:"Full right lock, as usual.",pedal:"stop",wheel:yn}),a.add({say:"Reverse slowly, wheel fully right.",look:"Look back through the rear window: pole 2 comes at the left rear corner.",pedal:"reverse",wheel:yn,until:l=>Ci(bo(l,Tr(l)),o.pole2)<=i,overlays:[{kind:"danger",pole:2}]}),a.hold("Stop! The left rear corner is about to hit pole 2.","You see it looking back through the rear window, not in the mirror: the pole is behind the car. Red path: keep going and it hits.",[{kind:"danger",pole:2}],"keep"),a.add({say:"Turn the wheel fully left while standing.",look:"Forward on left lock swings the rear away from pole 2 and straightens the car a little.",pedal:"stop",wheel:-yn,overlays:[{kind:"gap"}]}),a.add({say:"Drive forward slowly, wheel fully left.",look:"Look back: the gap between the left rear corner and pole 2 opens up.",pedal:"forward",wheel:-yn,until:l=>Ci(bo(l,Tr(l)),o.pole2)>=r,overlays:[{kind:"gap"}]}),a.hold("Stop when there is about 1 m between the left rear corner and pole 2.","Now full right lock and reverse again. Much too early? Drive forward and start again.",[{kind:"gap"}]),sc(a,n,o,!1).finish(s?.id??"garage-too-early",s?.title??"Mistake: started too early",s?.summary??"The left rear corner comes at pole 2. Stop, full left lock, forward until 1 m clear, then swing in again.","mistake",o,n.bay.requiredHeading)},Vy=1.6,Wy=2.6,Xy=(n,e=Vy)=>Yd(n,n.bay.cz-n.bay.hl-e-oe.width/2,0,Xd,qd,{id:"garage-close",title:"Approach: too close",summary:"Passed the garage too close: the usual point is too early, the car comes at pole 2. Same fix as starting too early.",verdict:"Almost half of it: you are too close (normal: about a third). Better: drive on, come back wider."}),qy=(n,e=Wy)=>Wd(n,n.bay.cz-n.bay.hl-e-oe.width/2,0,Vd,kd,{id:"garage-wide",title:"Approach: too wide",summary:"Passed the garage too wide: the usual point is too late, the car comes at pole 1. Same fix as driving too far.",verdict:"Only a fifth of it: you are too far out (normal: about a third). Better: drive on, come back closer."}),Yy=n=>[By(n),Wd(n),Yd(n),Xy(n),qy(n)],Zy=60,$y=1400,ae={ground:"#3b4048",paint:"#e9edf2",wall:"#8a9099",pole:"#ff8a1f",car:"#2f6fce",carEdge:"#173b70",glass:"#9fd0ff",quarter:"#ffe066",wheel:"#14161a",ok:"#7fd1ff",bad:"#ff5d5d",sight:"#ffe066",guide:"#6be38a",label:"#0f1115"},Ky=(n,e,t)=>{n.innerHTML="",n.className="overlay";const i=document.createElement("div");i.className="learn-panel",i.innerHTML=`
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
    </div>`,n.appendChild(i);const r=O=>i.querySelector(O);r(".learn-head h2").textContent=t.title;const s=r("canvas"),o=r(".learn-stage"),a=s.getContext("2d"),l=r(".learn-tabs"),c=r(".learn-next"),h=r(".learn-back"),u=r(".learn-auto");let d=0,p=0,g=performance.now(),_=!1,m=0,f=e[0].refs,E=lu(e[0]);const y=()=>e[d],v=()=>y().steps[p],D=()=>p===y().steps.length-1;e.forEach((O,A)=>{const I=document.createElement("button");I.className="learn-tab",I.setAttribute("role","tab"),I.textContent=O.title,I.addEventListener("click",()=>C(A)),l.appendChild(I)});function C(O){d=O,f=y().refs,E=lu(y()),l.querySelectorAll(".learn-tab").forEach((A,I)=>{A.classList.toggle("active",I===O),A.classList.toggle("mistake",e[I].tone==="mistake"),A.setAttribute("aria-selected",String(I===O))}),b(0)}function b(O){p=Math.max(0,Math.min(y().steps.length-1,O)),g=performance.now(),m=0;const A=v();r(".learn-step").textContent=`Step ${p+1} / ${y().steps.length}`,r(".learn-say").textContent=A.say;const I=r(".learn-look");I.textContent=A.look??"",I.classList.toggle("hidden",!A.look),h.disabled=p===0;const G=e[d+1];c.textContent=D()?G?`${G.title} ▶`:"Practice it ▶":"Next ▶"}function P(){if(!D())return b(p+1);if(d<e.length-1)return C(d+1);S(),t.onPractice(y().scenario)}const S=()=>{window.removeEventListener("keydown",M,!0),V.disconnect()};c.addEventListener("click",P),h.addEventListener("click",()=>b(p-1)),r(".learn-replay").addEventListener("click",()=>b(p)),u.addEventListener("click",()=>{_=!_,u.setAttribute("aria-pressed",String(_)),u.classList.toggle("primary",_)}),r(".learn-close").addEventListener("click",()=>{S(),t.onMenu()});const M=O=>{if(!i.isConnected)return S();const I={ArrowRight:P," ":P,Enter:P,ArrowLeft:()=>b(p-1),r:()=>b(p),R:()=>b(p),Escape:()=>{S(),t.onMenu()}}[O.key];I&&(O.preventDefault(),O.stopPropagation(),I())};window.addEventListener("keydown",M,!0);const L=()=>{const O=Math.min(window.devicePixelRatio||1,2);s.width=Math.max(1,Math.round(o.clientWidth*O)),s.height=Math.max(1,Math.round(o.clientHeight*O))},V=new ResizeObserver(L);V.observe(o),L();const U=O=>{if(!i.isConnected)return S();requestAnimationFrame(U);const A=v(),I=Math.min(A.frames.length-1,Math.floor((O-g)/1e3*Zy)),G=A.frames[I];I===A.frames.length-1&&!m&&(m=O),_&&m&&O-m>$y&&!(D()&&d===e.length-1)&&P(),r(".learn-pedal").textContent=Math.abs(G.speed)>.02?G.speed>0?"Forward":"Reverse":"Stopped",r(".learn-wheel").textContent=`Wheel: ${Md(G.wheelDeg)}`,Jy(a,s,E,y(),f,A,G,O)};C(0),requestAnimationFrame(U)};function lu(n){const e=[],t=[];for(const l of n.steps)for(const c of l.frames)for(const h of Dn(Et(c)))e.push(h.x),t.push(h.z);for(const l of n.scenario.poles??[])e.push(l.x),t.push(l.z);const i=1.2,r=Math.min(...e)-i,s=Math.max(...e)+i,o=Math.min(...t)-i,a=Math.max(...t)+i;return{cx:(r+s)/2,cz:(o+a)/2,w:s-r,h:a-o}}function Jy(n,e,t,i,r,s,o,a){const l=e.width,c=e.height,h=Math.min(l/t.w,c/t.h),u=A=>[l/2-(A.x-t.cx)*h,c/2-(A.z-t.cz)*h],d=A=>A*h;n.fillStyle=ae.ground,n.fillRect(0,0,l,c);const p=(A,I,G,B,J=[])=>{n.beginPath(),n.setLineDash(J.map(ne=>ne*h)),n.strokeStyle=G,n.lineWidth=Math.max(1,B*h),n.moveTo(...u(A)),n.lineTo(...u(I)),n.stroke(),n.setLineDash([])},g=(A,I,G)=>{n.beginPath(),A.forEach((B,J)=>J?n.lineTo(...u(B)):n.moveTo(...u(B))),n.closePath(),n.fillStyle=I,n.fill(),G&&(n.strokeStyle=G,n.lineWidth=Math.max(1,.04*h),n.stroke())},_=(A,I,G,B,J=.04)=>{n.beginPath(),n.arc(...u(A),Math.max(3,d(I)),0,Math.PI*2),n.fillStyle=G,n.fill(),B&&(n.strokeStyle=B,n.lineWidth=Math.max(1.5,J*h),n.stroke())},m=(A,I,G,B=0,J=0)=>{const[ne,de]=u(A),Le=Math.max(11,Math.min(18,.32*h));n.font=`600 ${Le}px system-ui, sans-serif`;const He=n.measureText(I).width+Le*.7,Z=ne+B*Le-He/2,le=de+J*Le-Le*.75;n.fillStyle=G,n.beginPath(),n.roundRect(Z,le,He,Le*1.5,Le*.4),n.fill(),n.fillStyle=ae.label,n.textAlign="center",n.textBaseline="middle",n.fillText(I,Z+He/2,le+Le*.75)},f=(A,I)=>on(o,{x:A,y:0,z:I});for(const A of i.scenario.solids){const I=Dn(A.rect);g([I[0],I[1],I[3],I[2]],ae.wall),m({x:A.rect.cx-A.rect.hw+1.2,z:A.rect.cz},A.height<.5?"curb":"wall",ae.wall)}for(const A of i.scenario.paint)p({x:A.x1,z:A.z1},{x:A.x2,z:A.z2},ae.paint,A.width);const E=A=>s.overlays.some(I=>I.kind===A),y=.5+.5*Math.sin(a/160);if(E("parallel")){const A=i.scenario.bay;for(const I of[-1,1]){const G=A.cx+I*A.hw;p({x:G,z:A.cz-A.hl-1},{x:G,z:A.cz+A.hl},ae.guide,.04,[.2,.15]);const B=f(I*oe.width/2,oe.length-oe.rearOverhang+1),J=f(I*oe.width/2,-.9-1.5);p(B,J,ae.guide,.035)}}if(s.ghost){const A=s.ghost.tone==="ok"?ae.ok:ae.bad;s.ghost.lines.forEach((I,G)=>{I.length<2||(n.beginPath(),n.setLineDash([.22*h,.16*h]),n.strokeStyle=A,n.globalAlpha=G<2?1:.45,n.lineWidth=Math.max(1.5,.06*h),I.forEach((B,J)=>J?n.lineTo(...u(B)):n.moveTo(...u(B))),n.stroke(),n.setLineDash([]),n.globalAlpha=1)});for(const I of s.ghost.circles??[])n.beginPath(),n.setLineDash(I.hit?[.3*h,.12*h]:[.12*h,.16*h]),n.strokeStyle=I.hit?ae.bad:"rgba(255,255,255,0.28)",n.lineWidth=Math.max(1.2,(I.hit?.06:.03)*h),n.arc(...u(I.center),I.radius*h,0,Math.PI*2),n.stroke(),n.setLineDash([]);s.ghost.circles?.length&&_(s.ghost.circles[0].center,.08,"rgba(255,255,255,0.6)"),s.ghost.hit&&(_(s.ghost.hit,.35,"rgba(255,93,93,0.25)",ae.bad,.06),m(s.ghost.hit,"hit",ae.bad,0,-1.8))}for(const A of i.scenario.poles??[])_(A,.12,ae.pole,"#5a2a00",.02);const v=s.overlays.find(A=>A.kind==="danger"),D=v!==void 0,C=v?.pole===2?r.pole2:r.pole1;D&&_(C,.3+.12*y,"rgba(255,93,93,0.25)",ae.bad,.05),m(r.pole1,"1",D&&v?.pole!==2?ae.bad:ae.pole,0,1.6),m(r.pole2,"2",D&&v?.pole===2?ae.bad:ae.pole,0,1.6),r.pole3&&m(r.pole3,"3",ae.pole,0,-1.6);const b=oe.width/2,P=oe.length-oe.rearOverhang,S=-.9,M=wr(o),L=o.wheelDeg/oe.steeringRatio*Math.PI/180,V=[f(b,S),f(b,P),f(-b,P),f(-b,S)];g(V,ae.car,ae.carEdge),g([f(.8,2.6),f(.8,P-.05),f(-.8,P-.05),f(-.8,2.6)],"#2860b6"),g([f(.72,1.95),f(.64,2.6),f(-.64,2.6),f(-.72,1.95)],ae.glass),g([f(.72,1.95),f(.72,.15),f(-.72,.15),f(-.72,1.95)],"#3f82e0"),g([f(.66,.15),f(.6,-.2),f(-.6,-.2),f(-.66,.15)],ae.glass);for(const A of[1,-1])g([f(A*.82,P-.02),f(A*.82,P-.2),f(A*.5,P-.12),f(A*.5,P-.02)],"#fff6c8"),g([f(A*.84,S+.02),f(A*.84,S+.16),f(A*.56,S+.08),f(A*.56,S+.02)],"#e2453c");M.forEach((A,I)=>{const G=o.heading+(I>=2?L:0),B=Math.sin(G),J=Math.cos(G),ne=Ty,de=.11,Le=[{x:A.x+B*ne+J*de,z:A.z+J*ne-B*de},{x:A.x+B*ne-J*de,z:A.z+J*ne+B*de},{x:A.x-B*ne-J*de,z:A.z-J*ne+B*de},{x:A.x-B*ne+J*de,z:A.z-J*ne-B*de}],He=(E("depth")||E("circle"))&&I===1;g(Le,He?ae.sight:ae.wheel,"#cfd6df")});const U=-b+.02;if(p(f(U,je.divider.z),f(U,je.quarterRearZ),ae.quarter,.09),E("sight")){const A=on(o,xn.eye),I=f(-.76,je.quarterRearZ),G=I.x-A.x,B=I.z-A.z,J=Math.hypot(G,B),ne={x:A.x+G/J*7,z:A.z+B/J*7};p(A,ne,"rgba(255,224,102,0.55)",.035),p(A,r.pole1,ae.sight,.05,[.2,.14]),_(A,.09,ae.sight),m(ne,"window edge",ae.quarter,0,0)}if(D&&v?.pole!==2&&p(f(-b,P),f(-b,S-4),ae.bad,.04,[.2,.14]),E("depth")&&r.backCorner){const A=i.scenario.bay;p({x:r.backCorner.x,z:A.cz-A.hl},r.backCorner,ae.sight,.07),_(r.backCorner,.24,"rgba(255,224,102,0.25)",ae.sight,.05),m(r.backCorner,"end of side line",ae.sight,-5,0),m(M[1],"rear wheel",ae.sight,-4.2,0)}if(E("gap")){const A=f(b,S);p(A,r.pole2,ae.guide,.05);const I=Math.max(0,Math.hypot(A.x-r.pole2.x,A.z-r.pole2.z)-.12);m({x:(A.x+r.pole2.x)/2,z:(A.z+r.pole2.z)/2},`${I.toFixed(1)} m`,ae.guide,2.2,0)}if(E("circle")){const A=oe.wheelbase/Math.tan(oe.maxWheelDeg/oe.steeringRatio*Math.PI/180),I=f(-A,0),G=A-yo/2;n.beginPath(),n.setLineDash([.18*h,.14*h]),n.arc(...u(I),G*h,0,Math.PI*2),n.strokeStyle=ae.guide,n.lineWidth=Math.max(1.5,.05*h),n.stroke(),n.setLineDash([]),p(I,M[1],ae.guide,.03),_(I,.1,ae.guide),m(I,"turn center",ae.guide,0,1.5),_(r.pole1,.26,"rgba(107,227,138,0.2)",ae.guide,.05),m(M[1],"right rear wheel",ae.sight,0,-1.7)}if(E("bumper")&&(p(f(-b-2.2,S),f(b,S),ae.sight,.05,[.2,.14]),m(f(-b-2.2,S),"rear bumper",ae.sight,0,0)),s.overlays.some(A=>A.kind==="level")){const I=(r.pole1.x-o.x)*Math.cos(o.heading)-(r.pole1.z-o.z)*Math.sin(o.heading),G=Math.min(-b-.6,I-.5);p(f(b,0),f(G,0),ae.sight,.05,[.2,.14]),m(f(b,0),"middle of the rear wheel",ae.sight,0,-1.6)}if(E("curbDanger")&&r.curbZ!==void 0){const I=Dn(Et(o)).reduce((G,B)=>B.z>G.z?B:G);_(I,.3+.12*y,"rgba(255,93,93,0.25)",ae.bad,.05),p({x:I.x-1.5,z:r.curbZ},{x:I.x+1.5,z:r.curbZ},ae.bad,.1),m({x:I.x,z:r.curbZ},`${Math.max(0,r.curbZ-I.z).toFixed(1)} m to the curb`,ae.bad,0,-1.6)}if(E("wheelLine")&&r.edgeZ!==void 0){const A=i.scenario.bay,I=M[0],G=I.z-r.edgeZ>=.15;p({x:A.cx-A.hl-3,z:r.edgeZ},{x:A.cx+A.hl,z:r.edgeZ},ae.sight,.08),_(I,.36,G?"rgba(107,227,138,0.25)":"rgba(255,224,102,0.2)",G?ae.guide:ae.sight,.05),m(I,G?"left rear wheel: across":"left rear wheel",G?ae.guide:ae.sight,0,1.8)}if(E("pole3")&&r.pole3){const A=on(o,{x:-1.03,y:0,z:2.06});p(A,f(-b,S-6),"rgba(255,224,102,0.45)",.035),p(A,r.pole3,ae.sight,.05,[.2,.14]),_(A,.09,ae.sight),_(r.pole3,.26,"rgba(255,224,102,0.25)",ae.sight,.05)}if(E("laneGap")&&r.edgeZ!==void 0){const A=f(-b,0),I={x:A.x,z:r.edgeZ};p(A,I,ae.sight,.05),p({x:A.x-3,z:r.edgeZ},{x:A.x+3,z:r.edgeZ},ae.sight,.06),m(I,`${Math.round(Math.abs(r.edgeZ-A.z)*100)} cm`,ae.sight,2.2,0)}if(E("door")){const A=on(o,st);p(A,r.pole1,ae.sight,.05,[.2,.14]),_(A,.09,ae.sight);const I=Py(o,r.pole1);m(r.pole1,`door hides ${Math.round(I*100)}%`,ae.sight,0,3.4)}if(E("bonnet")){const A=on(o,st);p(A,r.pole1,ae.sight,.05,[.2,.14]),_(A,.09,ae.sight),m(r.pole1,"lower part hidden by the bonnet",ae.sight,0,-1.8)}if(E("curb")&&r.curbZ!==void 0&&r.edgeZ!==void 0){const A=i.scenario.bay;for(const I of[r.curbZ,r.edgeZ])p({x:A.cx-A.hl,z:I},{x:A.cx+A.hl,z:I},ae.guide,.05,[.25,.15]);for(const I of[-1,1])p(f(I*b,P+1),f(I*b,S-1.5),ae.guide,.035)}if(E("edge")&&r.edgeZ!==void 0){const A=i.scenario.bay,[I,,G]=M,B=Math.min(I.z,G.z)-.1<=r.edgeZ+.05,J=B?ae.bad:ae.guide;p({x:A.cx-A.hl,z:r.edgeZ},{x:A.cx+A.hl,z:r.edgeZ},J,.08);for(const ne of[I,G])_(ne,.3,B?"rgba(255,93,93,0.25)":"rgba(107,227,138,0.2)",J,.04);m({x:A.cx+A.hl+1.2,z:r.edgeZ},B?"wheels on the line":"wheels inside",J)}if(E("endGaps")){const A=Et(o),I=Math.sin(o.heading),G=Math.cos(o.heading),B={x:A.cx+I*A.hl,z:A.cz+G*A.hl},J={x:A.cx-I*A.hl,z:A.cz-G*A.hl};for(const[ne,de]of[[B,r.pole1],[J,r.pole2]]){const Le={x:de.x,z:ne.z};p(ne,Le,ae.guide,.04);const He=Math.max(0,Math.abs(de.x-ne.x)-.12);m({x:(ne.x+Le.x)/2,z:ne.z},`${He.toFixed(1)} m`,ae.guide,0,-1.4)}}const O=s.overlays.find(A=>A.kind==="mirror");O&&jy(n,l,c,o,i,r,O.side,O.mark)}function jy(n,e,t,i,r,s,o,a){const l=Math.min(e*.36,t*.55*1.5),c=l/1.5,h=Math.max(8,e*.015),u=e-l-h,d=t-c-h,p=U=>{const O=hr(o,U);if(O.depth<.15)return null;const A=o==="right"?(O.X+1)/2:(1-O.X)/2;return[u+A*l,d+(1-O.Y)/2*c]},g=(U,O=0)=>Fd(i,{x:U.x,z:U.z,y:O}),_=U=>{let O=!1;for(const A of U){const I=p(A);if(!I){O=!1;continue}O?n.lineTo(...I):n.moveTo(...I),O=!0}};n.save(),n.beginPath(),n.roundRect(u,d,l,c,c*.18),n.clip();const m=o==="left"?1:-1,f=p({x:m*60,y:0,z:-200}),E=f?Math.max(d,Math.min(d+c,f[1])):d+c*.3;n.fillStyle="#9cc4e8",n.fillRect(u,d,l,E-d),n.fillStyle=ae.ground,n.fillRect(u,E,l,d+c-E),n.strokeStyle=ae.paint,n.lineCap="round";for(const U of r.scenario.paint){const O=[];for(let A=0;A<=40;A++){const I=A/40;O.push(g({x:U.x1+(U.x2-U.x1)*I,z:U.z1+(U.z2-U.z1)*I}))}n.beginPath(),n.lineWidth=Math.max(1.5,l*.008),_(O),n.stroke()}const y=[...r.scenario.poles??[]].sort((U,O)=>hr(o,g(O)).depth-hr(o,g(U)).depth);for(const U of y){const O=p(g(U)),A=p(g(U,as));if(!O||!A)continue;const I=hr(o,g(U)).depth,G=Math.tan(16*Math.PI/180)*1.5;n.globalAlpha=.55,n.strokeStyle=ae.pole,n.lineWidth=Math.max(1.5,.1/(I*G)*(l/2)),n.beginPath(),n.moveTo(...O),n.lineTo(...A),n.stroke(),n.globalAlpha=1}const v=m*(oe.width/2),D=[];for(let U=1.9;U>=-.9-1e-9;U-=.1)D.push(U);const C=[...D.map(U=>({x:v,y:1,z:U})),...[...D].reverse().map(U=>({x:v,y:.3,z:U}))];n.beginPath(),_(C),n.closePath(),n.fillStyle=ae.car,n.fill(),n.strokeStyle=ae.carEdge,n.lineWidth=2,n.stroke();const b=Od(o);n.beginPath(),_([...b,{...b.at(-1),y:0},{...b[0],y:0}]),n.closePath(),n.fillStyle="#1b1e24",n.fill();const P=[];for(let U=0;U<=24;U++){const O=Math.PI*2*U/24;P.push({x:m*(oe.width/2-.08),y:.31+.3*Math.sin(O),z:.3*Math.cos(O)})}n.beginPath(),_(P),n.closePath(),n.fillStyle="#0c0d10",n.fill();const S=(U,O)=>{const A=U&&p(U);A&&(n.beginPath(),n.arc(...A,Math.max(6,l*.035),0,Math.PI*2),n.strokeStyle=O,n.lineWidth=2.5,n.stroke())};if(a==="corner"){S(g(s.backCorner),ae.sight),S(b.at(-1),ae.sight);const U=p(g(s.backCorner)),O=p(b.at(-1));if(U&&O){n.setLineDash([6,5]),n.beginPath(),n.moveTo(u,O[1]),n.lineTo(u+l,O[1]),n.strokeStyle=ae.sight,n.lineWidth=1.5,n.stroke(),n.setLineDash([]);const A=Math.max(10,l*.04);n.font=`600 ${A}px system-ui, sans-serif`,n.textAlign="right",n.textBaseline="bottom",n.fillStyle=ae.sight,n.fillText(U[1]>O[1]-2?"level: stop":"line end ↓ arch",u+l-c*.12,O[1]-4)}}else if(a==="edge"&&s.edgeZ!==void 0){const U=on(i,{x:0,y:0,z:-3});S(g({x:U.x,z:s.edgeZ}),ae.sight)}else if(a==="edgeNear"&&s.edgeZ!==void 0){const U=on(i,{x:0,y:0,z:-.7});S(g({x:U.x,z:s.edgeZ}),ae.sight)}else if(a==="curb"&&s.curbZ!==void 0){const U=on(i,{x:-.9,y:0,z:-1.3});S(g({x:U.x,z:s.curbZ}),ae.bad)}else a==="rearWheel"?S({x:m*(oe.width/2-.08),y:.05,z:0},ae.sight):a==="pole3"&&s.pole3?S(g(s.pole3,as*.55),ae.sight):S(g(s.pole1,as*.55),a==="pole1"?ae.sight:ae.bad);n.restore(),n.strokeStyle="#11141a",n.lineWidth=Math.max(3,l*.012),n.beginPath(),n.roundRect(u,d,l,c,c*.18),n.stroke();const M=Math.max(11,l*.045);n.font=`600 ${M}px system-ui, sans-serif`,n.fillStyle="#11141a",n.textAlign="left",n.textBaseline="top";const L=o==="right"?"Right mirror":"Left mirror",V=n.measureText(L).width;n.fillStyle="rgba(17,20,26,0.75)",n.fillRect(u+c*.12,d+c*.06,V+M*.8,M*1.4),n.fillStyle="#eef1f5",n.fillText(L,u+c*.12+M*.4,d+c*.06+M*.2)}const Ar=-yn,ci=n=>{const e=n.bay,t=e.cz-e.hw,i=e.cz+e.hw;return{pole1:{x:e.cx+e.hl,z:t},pole2:{x:e.cx-e.hl,z:t},pole3:{x:e.cx-e.hl,z:i},edgeZ:t,curbZ:i}},Zd=.4,Nr=(n,e=Zd)=>ci(n).edgeZ-e-oe.width/2,Fr=(n,e)=>{const t=Io(n,e);return{...t,car:{...t.car,x:ci(n).pole2.x-3}}},$d=(n,e)=>Math.atan2(Math.sin(n.heading-e.bay.requiredHeading),Math.cos(n.heading-e.bay.requiredHeading)),Qy={x:-1.8/2,y:0,z:-.9},eS=(n,e)=>bh(n,"right",e.pole3)-bh(n,"right",on(n,Qy)),Kd=(n,e)=>wr(n)[0].z-e.edgeZ,tS=(n,e)=>{const t=on(n,st);return ad(oe.length-oe.rearOverhang,Math.hypot(e.pole1.x-t.x,e.pole1.z-t.z))/as},nS=0,iS=.4,rS=.15,sS=.3,Or=()=>({laneGap:Zd,startPast:nS,pole3Stop:iS,wheelCross:rS,fixBonnet:sS}),Jd=n=>Tr(n)/po,In=n=>bo(n,Tr(n)),cu={kind:"mirror",side:"right",mark:"pole3"},Cl=()=>[{kind:"laneGap"},{kind:"mirror",side:"right",mark:"edgeNear"}],oS="The edge line meets the bottom of the mirror about a quarter of the way out from the car: about 40 cm. Right.",To={kind:"mirror",side:"left",mark:"rearWheel"},oc=(n,e,t,i)=>{n.add({say:t?"Fix: turn the wheel fully right while standing.":"Turn the wheel fully right while standing.",look:t?"Then the usual script: reverse until pole 3 comes up to the car in the right mirror.":void 0,pedal:"stop",wheel:yn,ghost:"future"}),n.add({say:"Reverse slowly, wheel fully right. The rear swings in toward the curb.",look:"Right mirror: pole 3 slides toward the side of the car.",pedal:"reverse",wheel:yn,until:r=>eS(In(r),e)-.85*(Jd(r)*180/Math.PI)<=i.pole3Stop,overlays:[{kind:"pole3"},cu]}),n.hold("Stop when pole 3 comes up to the side of the car in the right mirror, still fully visible.","Pole 3 is the rear pole of the space at the curb. Stop before the car hides its bottom: then you went too far.",[{kind:"pole3"},cu])},Ni=(n,e)=>{n.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Ar,ghost:"future"}),n.add({say:"Reverse slowly, wheel fully left. The front swings in.",look:"Right mirror: the curb comes parallel to the car.",pedal:"reverse",wheel:Ar,until:t=>$d(t,e)-Jd(t)<=0,overlays:[{kind:"curb"}]})},zr=(n,e,t,i,r)=>(t&&n.hold("Parallel park into the space on your right. Pole 1 is its front end, pole 2 its rear end, pole 3 the rear pole at the curb.",`Drive past about ${Math.round(i.laneGap*100)} cm from the space's edge line, then reverse in.`,[{kind:"pole3"}]),n.add({say:"Drive forward slowly along the space, wheel straight.",pedal:"forward",wheel:0,until:s=>s.x>=e.pole1.x-1.5}),r&&n.hold("Check your distance in the right mirror.",r,Cl()),n.add({say:"Keep going. Watch pole 1 in the right mirror.",look:"It moves back along the car toward the rear wheel.",pedal:"forward",wheel:0,until:s=>-Al(In(s),e.pole1)>=i.startPast,overlays:[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]}),n.hold("Stop when pole 1 is level with the middle of your rear wheel.","Right mirror: pole 1 stands right beside the rear wheel.",[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]),oc(n,e,!1,i),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,ghost:"future"}),n),aS=(n,e,t,i,r,s)=>(zr(n,t,i,s),Rr(n,t,r),Ni(n,e),n),Rr=(n,e,t)=>{const i=t<0,r=t<-.4;n.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line.",pedal:"reverse",wheel:0,until:s=>Kd(In(s),e)>=t,overlays:[{kind:"wheelLine"},To]}),n.hold(i?r?"Mistake: stopped the straight part far too early. The left rear wheel is still well before the edge line.":"Mistake: stopped the straight part too early. The left rear wheel has only reached the edge line, not crossed it.":"Stop when, in the left mirror, the left rear wheel has crossed the edge line.",i?r?"Full left from here swings the front into pole 1. Watch.":"The car will end up too far out. Watch what happens.":"The whole tire is past the line. From here, full left brings the car in.",[{kind:"wheelLine"},To])},bs=(n,e)=>(n.hold("Stop when the car is parallel to the curb.","Both mirrors: the curb and the edge line run parallel to the car.",[{kind:"curb"}]),n.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,overlays:[{kind:"curb"}]}),n.add({say:"Drive forward slowly to the middle of the space.",look:"Leave about the same gap to pole 1 ahead and pole 2 behind.",pedal:"forward",wheel:0,until:t=>Et(In(t)).cx>=e.bay.cx,overlays:[{kind:"endGaps"}]}),n.hold("Stop in the middle: equal gaps to both poles, all wheels inside the lines. Done.",void 0,[{kind:"endGaps"},{kind:"curb"}]),n),lS=(n,e={})=>{const t={...Or(),...e},i=ci(n),r=zr(new qn(Fr(n,Nr(n,t.laneGap))),i,!0,t,oS);return Rr(r,i,t.wheelCross),Ni(r,n),bs(r,n).finish("parallel-ok","Parallel parking","Pole 1 behind the rear wheel, full right until pole 3 comes up to the car in the right mirror, straight back until the left rear wheel crosses the line, full left to parallel.","ok",i)},cS=-.15,hS=(n,e={},t=cS)=>{const i={...Or(),...e},r=ci(n),s=aS(new qn(Fr(n,Nr(n,i.laneGap))),n,r,!1,t,i);return s.hold("Parallel, but too far out: the left wheels are on the edge line.","Left mirror: the edge line runs under the left wheels instead of beside the car. That is a fault.",[{kind:"edge"},{kind:"mirror",side:"left",mark:"edge"}]),s.add({say:"Fix: straighten the wheel while standing.",look:"First make room: driving forward is easy to judge, the poles behind are already clear.",pedal:"stop",wheel:0,overlays:[{kind:"edge"}],ghost:"future"}),s.add({say:"Drive forward slowly, wheel straight.",look:"Watch pole 1 ahead over the bonnet.",pedal:"forward",wheel:0,until:o=>tS(In(o),r)>=i.fixBonnet,overlays:[{kind:"bonnet"}]}),s.hold("Stop when the bonnet hides about a third of pole 1.","That is about 1 m to the pole: room for the S back.",[{kind:"bonnet"}]),oc(s,r,!0,i),Ni(s,n),s.hold("Stop when parallel. All wheels are inside the lines. Done.","Left mirror: the edge line is beside the car. No need to drive forward again.",[{kind:"edge"},{kind:"endGaps"},{kind:"mirror",side:"left",mark:"edge"}]),s.finish("parallel-out","Mistake: stayed on the line","Straight part too short: the car ends on the edge line. Fix: forward until the bonnet hides a third of pole 1, then the same S back.","mistake",r)},uS=(n,e)=>e.curbZ-Math.max(...Dn(Et(n)).map(t=>t.z)),dS=.35,fS=(n,e={},t=dS)=>{const i={...Or(),...e},r=ci(n),s=zr(new qn(Fr(n,Nr(n,i.laneGap))),r,!1,i);return s.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line… and the stop is missed.",pedal:"reverse",wheel:0,until:o=>uS(In(o),r)<=t,overlays:[{kind:"wheelLine"}]}),s.hold("Stop! Too deep: the rear is about to hit the curb and the rear poles.","Right mirror: the curb is right at the rear corner. Red path: keep reversing and you hit them.",[{kind:"curbDanger"},{kind:"mirror",side:"right",mark:"curb"}],"keep"),s.add({say:"Fix: drive forward slowly, wheel straight.",look:"Forward is easy to judge: the car goes back out along the same line.",pedal:"forward",wheel:0,until:o=>Kd(In(o),r)<=i.wheelCross,overlays:[{kind:"wheelLine"},To]}),s.hold("Stop when the left rear wheel is back just across the edge line.","That is the normal point again: full left from here.",[{kind:"wheelLine"},To]),Ni(s,n),bs(s,n).finish("parallel-deep","Mistake: too deep","Missed the stop on the straight part: the rear closes on the curb. Fix: forward until the left rear wheel is back at the line, then full left.","mistake",r,n.bay.requiredHeading)},pS=-1.2,mS=.15,gS=(n,e={},t=pS,i=mS)=>{const r={...Or(),...e},s=ci(n),o=zr(new qn(Fr(n,Nr(n,r.laneGap))),s,!1,r);return Rr(o,s,t),o.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Ar}),o.add({say:"Reverse slowly, wheel fully left. The front swings toward pole 1.",look:"Look right through the windscreen: pole 1 comes at the right front corner.",pedal:"reverse",wheel:Ar,until:a=>Ci(In(a),s.pole1)<=i,overlays:[{kind:"danger",pole:1}]}),o.hold("Stop! The right front corner is about to hit pole 1.","Red path: keep turning and the front hits it.",[{kind:"danger",pole:1}],"keep"),oc(o,s,!0,r),o.add({say:"Straighten the wheel while standing.",pedal:"stop",wheel:0,ghost:"future"}),Rr(o,s,r.wheelCross),Ni(o,n),bs(o,n).finish("parallel-pole1","Mistake: hits pole 1","Straight part far too short: full left swings the front into pole 1. Fix: full right, then the usual script from pole 3.","mistake",s,n.bay.requiredHeading)},_S=.9,vS=.15,xS=.25,MS=1,hu=(n,e,t)=>Math.min(...(e.poles??[]).filter(i=>Math.abs(i.x-t.pole2.x)<1e-9).map(i=>Ci(n,i))),yS=(n,e=_S)=>{const t={...Or(),laneGap:e},i=ci(n),r=zr(new qn(Fr(n,Nr(n,e))),i,!1,t,`The edge line meets the bottom of the mirror near its middle: about ${Math.round(e*100)} cm, too far out (normal: a quarter of the way out). Better: drive on and come back closer.`);return Rr(r,i,t.wheelCross),r.add({say:"Turn the wheel fully left while standing.",pedal:"stop",wheel:Ar}),r.add({say:"Reverse slowly, wheel fully left. The front swings in.",look:"Look back through the rear window: the rear poles come close.",pedal:"reverse",wheel:Ar,until:s=>hu(In(s),n,i)<=xS,overlays:[{kind:"danger",pole:2}]}),r.hold("Stop! From further out the car comes in deep: the rear is about to hit the rear poles.","Red path and circles: keep turning and the rear hits them.",[{kind:"danger",pole:2}],"keep"),r.add({say:"Fix: straighten the wheel while standing.",look:"Make room behind first: forward is easy to judge.",pedal:"stop",wheel:0,ghost:"future"}),r.add({say:"Drive forward slowly, wheel straight.",look:"Look back: the gap to the rear poles opens up.",pedal:"forward",wheel:0,until:s=>hu(In(s),n,i)>=MS,overlays:[{kind:"endGaps"}]}),r.hold("Stop when there is about 1 m behind.","Now full left again, to parallel.",[{kind:"endGaps"}]),Ni(r,n),bs(r,n).finish("parallel-wide","Approach: too wide","Passed too far out: the car comes in deep and the rear closes on the rear poles. Fix: straighten, forward until 1 m behind, full left again.","mistake",i,n.bay.requiredHeading)},SS=2,wS=1.5,ES=(n,e=vS,t=wS)=>{const i=Or(),r=ci(n),s=new qn(Fr(n,Nr(n,e)));s.add({say:"Drive forward slowly along the space, wheel straight.",pedal:"forward",wheel:0,until:a=>a.x>=r.pole2.x+SS}),s.hold("Check your distance in the right mirror early, while there is room ahead.",`The edge line meets the bottom of the mirror right next to the car: about ${Math.round(e*100)} cm. Too close: pole 1 would pass a few cm from your door.`,Cl());let o;return s.add({say:`Fix: half a turn left, drive forward slowly about ${t} m.`,look:"The car moves out, away from the line.",pedal:"forward",wheel:180,until:a=>(o??=a.x,a.x-o>=t)}),s.add({say:"Now half a turn right, until the car is straight again.",pedal:"forward",wheel:-180,until:a=>$d(a,n)-Tr(a)/13<=0}),s.add({say:"Straighten the wheel.",pedal:"stop",wheel:0}),s.hold("Check again: the line now meets the mirror bottom about a quarter of the way out.","Right distance. Carry on as usual.",Cl()),zr(s,r,!1,i),Rr(s,r,i.wheelCross),Ni(s,n),bs(s,n).finish("parallel-close","Approach: too close","Passing too close to the space: spot it in the right mirror early, move out with a small S, then park as usual.","mistake",r)},bS=n=>[lS(n),hS(n),fS(n),gS(n),ES(n),yS(n)],TS=(n,e,t,i)=>{n.innerHTML="",n.className="overlay";const r=document.createElement("div");r.className="menu-panel results",r.innerHTML=`<div class="grade grade-${t.grade}">${t.grade}</div><h2>${e.scenario.name}</h2><div class="score">${t.total} / 100</div>`;const s=document.createElement("div");s.className="breakdown",t.lines.length===0&&(s.innerHTML='<div class="line"><span>Flawless — no deductions</span><b>±0</b></div>');for(const c of t.lines){const h=document.createElement("div");h.className="line",h.innerHTML=`<span>${c.label}</span><b>${c.delta.toFixed(1)}</b>`,s.appendChild(h)}r.appendChild(s);const o=document.createElement("p");o.className="menu-help",o.textContent=`Time ${e.time.toFixed(0)}s · Collisions ${e.collisions} · Gear changes ${e.reversals}`,r.appendChild(o);const a=document.createElement("div");a.className="buttons";const l=(c,h,u=!1)=>{const d=document.createElement("button");d.className=u?"btn primary":"btn",d.textContent=c,d.addEventListener("click",h),a.appendChild(d)};l("Retry (R)",i.onRetry,!0),i.onNext&&l("Next scenario",i.onNext),l("Menu (Esc)",i.onMenu),r.appendChild(a),n.appendChild(r)},Jt=(n,e,t,i)=>{const r=document.createElement("button");return r.type="button",r.className=`touch-btn ${e}`,r.innerHTML=t,r.title=i,r.setAttribute("aria-label",i),r.addEventListener("contextmenu",s=>s.preventDefault()),n.appendChild(r),r},oo=n=>'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="'+(n==="left"?"M17 4 L6 12 L17 20 Z":"M7 4 L18 12 L7 20 Z")+'"/></svg>',uu='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',La=(n,e,t)=>{let i=null;n.addEventListener("pointerdown",s=>{s.preventDefault(),i===null&&(i=s.pointerId,n.setPointerCapture(s.pointerId),n.classList.add("active"),e())});const r=s=>{s.pointerId===i&&(i=null,n.classList.remove("active"),t())};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("lostpointercapture",r)},nr=(n,e)=>{n.addEventListener("click",t=>{t.preventDefault(),e()})},AS=()=>{const n=document.documentElement;window.matchMedia?.("(pointer: coarse)").matches&&n.classList.add("touch"),window.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&n.classList.add("touch")},{capture:!0})},RS=(n,e,t)=>{const i=(c,h)=>La(c,()=>e.setTouchControl(h,!0),()=>e.setTouchControl(h,!1)),r=document.createElement("div");r.className="touch-ui pedals",n.layer.appendChild(r),i(Jt(r,"handbrake","P","Handbrake"),"handbrake"),i(Jt(r,"pedal brake","▼<small>brake · R</small>","Brake, then reverse"),"reverse"),i(Jt(r,"pedal gas","▲<small>drive</small>","Drive"),"throttle");const s=Jt(n.steerLeftSlot,"look",uu+oo("left"),"Look left (hold)");La(s,()=>e.setTouchLookLeft(!0),()=>e.setTouchLookLeft(!1)),i(Jt(n.steerLeftSlot,"arrow",oo("left"),"Steer left"),"steerLeft");const o=Jt(n.steerRightSlot,"look",oo("right")+uu,"Tap: right pillar · hold: look back");La(o,()=>e.headPress(),()=>e.headRelease()),i(Jt(n.steerRightSlot,"arrow",oo("right"),"Steer right"),"steerRight");const a=document.createElement("div");a.className="touch-ui touch-bar",n.topCenter.prepend(a),nr(Jt(a,"small","🎥","Change view"),t.onCycleView),nr(Jt(a,"small","🗺","Bird's-eye view on/off"),t.onToggleEagle),nr(Jt(a,"small","📷","Reverse camera on/off"),t.onToggleReverseAids),nr(Jt(a,"small","💡","Hints on/off"),t.onToggleCoach),nr(Jt(a,"small","↻","Restart"),t.onRestart),nr(Jt(a,"small","☰","Menu"),t.onMenu);const l=document.createElement("div");l.className="touch-ui rotate-hint",l.innerHTML="<div>⟳</div><p>Turn your phone to landscape</p>",n.layer.appendChild(l)},CS=(n,e)=>n.left<e.right&&e.left<n.right&&n.top<e.bottom&&e.top<n.bottom,PS=(n,e,t)=>{const i=[["left mirror",tu("left",e,t)],["right mirror",tu("right",e,t)]],r=[];for(const{name:s,rect:o}of n)for(const[a,l]of i)CS(o,l)&&r.push(`${s} covers ${a}`);return r},LS=()=>{const n=document.querySelectorAll(".hud .panel, .hud .touch-btn"),e=[];n.forEach(i=>{const r=i.getBoundingClientRect();r.width===0||r.height===0||e.push({name:i.className||i.tagName,rect:r})});const t=PS(e,window.innerWidth,window.innerHeight);for(const i of t)console.warn(`[layout] ${i}`);return t},DS=/swiftshader|llvmpipe|softpipe|basic render driver|software rasterizer/i,IS=n=>!!n&&DS.test(n),US=n=>{try{const e=n.getExtension("WEBGL_debug_renderer_info"),t=n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER);return typeof t=="string"?t:null}catch{return null}},NS=()=>{try{const n=document.createElement("canvas"),e={failIfMajorPerformanceCaveat:!0},t=n.getContext("webgl2",e)??n.getContext("webgl",e);return t?(t.getExtension("WEBGL_lose_context")?.loseContext(),!1):!0}catch{return!1}},FS=n=>IS(US(n))||NS(),jd="gpu.warningDismissed",OS=()=>{try{return localStorage.getItem(jd)==="1"}catch{return!1}},zS=()=>{const n=document.createElement("div");n.className="gpu-warning",n.setAttribute("role","alert"),n.innerHTML="<p><b>Your browser is drawing 3D without the graphics card, so the simulator will lag.</b> Turn on <i>Use graphics acceleration when available</i> (Chrome, Brave: Settings → System; Edge: Settings → System and performance), then restart the browser.</p>";const e=document.createElement("button");return e.type="button",e.className="btn",e.textContent="Got it",e.addEventListener("click",()=>{try{localStorage.setItem(jd,"1")}catch{}n.remove()}),n.appendChild(e),n},Da=1/120,kS=.1,BS=1e3/30,Uo=document.getElementById("ui"),Ft=new vx({antialias:!0});let Qd=1/0;const ef=new hy;Ft.setPixelRatio(Ld(window.devicePixelRatio));Ft.shadowMap.enabled=!0;Ft.shadowMap.type=gu;Ft.shadowMap.autoUpdate=!1;Ft.toneMapping=vu;Ft.toneMappingExposure=1.15;document.body.appendChild(Ft.domElement);const tf=FS(Ft.getContext());tf&&window.addEventListener("load",()=>Es("gpu/software","Software WebGL rendering"),{once:!0});const Cr=KM(),HS=new Ml(Ft);Cr.environment=HS.fromScene(new xx,.04).texture;const Qt=Ad(2781140,!0);Qt.group.rotation.order="YXZ";Cr.add(Qt.group);const Ct=new VM(Qt.group,1),Ao=new WM(Qt.group),nf=OM();Qt.group.add(nf.group);const Pr=new py(document.body);let mn="menu",nt=null,es=null;const rf=new AM;let ur=null,mo=0,du=performance.now(),fu=0;const ac=n=>{let e=(()=>{try{return localStorage.getItem(n)!=="off"}catch{return!0}})();return{on:()=>e,toggle:()=>{e=!e;try{localStorage.setItem(n,e?"on":"off")}catch{}}}},Ro=ac("parking.eagle"),lc=ac("parking.reverseAids"),Co=ac("parking.coach"),hs=new wx({onView:n=>Ct.setView(n),onRestart:()=>nt&&Lr(nt.scenario),onMenu:()=>Ts(),onToggleEagle:Ro.toggle,onToggleReverseAids:lc.toggle,onToggleCoach:Co.toggle});AS();RS(Pr,hs,{onCycleView:()=>Ct.setView(Sx(Ct.activeView)),onToggleEagle:Ro.toggle,onToggleReverseAids:lc.toggle,onToggleCoach:Co.toggle,onRestart:()=>nt&&Lr(nt.scenario),onMenu:()=>Ts()});function cc(){const n=window.innerWidth,e=window.innerHeight;Ft.setPixelRatio(Ld(window.devicePixelRatio,Qd)),Ft.setSize(n,e),Ct.setAspect(n/e),Ao.setSize(n,e)}window.addEventListener("resize",cc);cc();function Ts(){mn="menu",nt=null,Pr.hide(),yy(Uo,br,Lr,tf&&!OS()?zS():void 0,[{title:"Reverse into a garage",text:"Animated lesson from above: where to stop, what to look at, and how to fix starting too late or too early.",open:()=>pu("reverse-in","Learn: reverse into a garage",Yy)},{title:"Parallel parking",text:"Animated lesson: the reference cues step by step, and how to fix ending up on the edge line.",open:()=>pu("parallel","Learn: parallel parking",bS)}])}function pu(n,e,t){const i=br.find(r=>r.id===n);i&&(Es(`learn/${n}`,e),Ky(Uo,t(i),{onPractice:Lr,onMenu:Ts,title:e}))}function Lr(n){hs.resetHead(),ur&&YM(ur),ur=Pd(n),Cr.add(ur),Ao.setEagleTarget(n.bay),nt=ec(n),es=bM(n),rf.reset(),mo=0,ef.reset(),mn="playing",Sy(Uo),Pr.show(),Ct.setView(1),sf(nt),Ct.update(nt.car,1),Es(`start/${n.id}`,`Start: ${n.name}`)}function GS(n){mn="results",Pr.hide();const e=Jx(n);Es(`finish/${n.scenario.id}/${e.grade}`,`Finish: ${n.scenario.name} (${e.grade})`);const t=br.findIndex(r=>r.id===n.scenario.id),i=br[t+1];TS(Uo,n,e,{onRetry:()=>Lr(n.scenario),onNext:i?()=>Lr(i):void 0,onMenu:Ts})}function sf(n){const{car:e}=n,t=n.scenario.course?.hill?[n.scenario.course.hill]:[];Qt.group.position.set(e.x,xo(t,e.x,e.z),e.z),Qt.group.rotation.y=e.heading,Qt.group.rotation.x=-sd(t,e);const i=nd(e);for(const r of Qt.frontWheelPivots)r.rotation.y=i;Qt.steeringWheel&&(Qt.steeringWheel.rotation.z=-pp.degToRad(e.wheelDeg)),nf.update(i)}function of(n){requestAnimationFrame(of);const e=n-du,t=Math.min(e/1e3,kS);if(du=n,mn==="playing"&&nt){if(ef.feed(e)){const o=cy(Ft.getPixelRatio());o!==Ft.getPixelRatio()&&(Qd=o,cc())}mo+=t;const r=hs.controls();for(;mo>=Da;){const o=Co.on()&&es?es.update(nt):null,a=o&&typeof o.wheel=="number"?o.wheel:void 0;nt=tc(nt,rf.apply(r,nt.car.wheelDeg,a),Da),mo-=Da}sf(nt),nt.scenario.course&&nt.course&&Ao.setEagleTarget(Hx(nt.scenario.course,nt.course,nt.scenario.bay)),Pr.update(nt,Ct.activeView,Ro.on()&&Ct.activeView!==3);const s=es?es.update(nt):null;Pr.updateCoach(Co.on()?s:null,nt),nt.complete&&GS(nt)}const i=mn==="playing"?hs.headTarget():"ahead";Ct.setHeadTarget(i==="back"?1:i==="pillar"?Cx()/xn.yawDeg:0),Ct.setLookLeft(mn==="playing"&&hs.lookLeft()),Ct.update(nt?.car??VS,t),!(mn!=="playing"&&n-fu<BS-1)&&(fu=n,Ft.shadowMap.needsUpdate=!0,Ft.render(Cr,Ct.active),Ao.render(Ft,Cr,{mirrors:mn==="playing"&&Ct.activeView===1&&Ct.headTurn<.2,backup:mn==="playing"&&nt?.car.gear==="R"&&lc.on(),eagle:mn==="playing"&&Ct.activeView!==3&&Ro.on()}))}window.__parking={getSession:()=>nt,setCar:(n,e,t)=>{nt&&(nt={...nt,car:{...nt.car,x:n,z:e,heading:t,speed:0}})}};new URLSearchParams(window.location.search).get("debug")==="layout"&&window.setInterval(()=>{mn==="playing"&&Ct.activeView===1&&LS()},1e3);const mr=br[0].spawn,VS=td(mr.x,mr.z,mr.heading);ur=Pd(br[0]);Cr.add(ur);Qt.group.position.set(mr.x,0,mr.z);Qt.group.rotation.y=mr.heading;Ct.setView(2);Ts();requestAnimationFrame(of);
