(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Cl="178",yf=0,mc=1,Sf=2,pu=1,mu=2,Vn=3,oi=0,Gt=1,vn=2,ii=0,ds=1,gc=2,_c=3,vc=4,Ef=5,Ei=100,wf=101,bf=102,Tf=103,Af=104,Rf=200,Cf=201,Pf=202,Lf=203,La=204,Da=205,Df=206,If=207,Uf=208,Nf=209,zf=210,Ff=211,Of=212,kf=213,Bf=214,Ia=0,Ua=1,Na=2,gs=3,za=4,Fa=5,Oa=6,ka=7,gu=0,Hf=1,Gf=2,si=0,Vf=1,Wf=2,Xf=3,_u=4,qf=5,Yf=6,Zf=7,vu=300,_s=301,vs=302,Ba=303,Ha=304,bo=306,xs=1e3,Ai=1001,Ga=1002,en=1003,$f=1004,br=1005,An=1006,Io=1007,Ri=1008,Dn=1009,xu=1010,Mu=1011,or=1012,Pl=1013,Di=1014,Rn=1015,_r=1016,Ll=1017,Dl=1018,ar=1020,yu=35902,Su=1021,Eu=1022,Mn=1023,lr=1026,cr=1027,Il=1028,Ul=1029,wu=1030,Nl=1031,zl=1033,so=33776,ro=33777,oo=33778,ao=33779,Va=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,$a=37496,Ka=37808,Ja=37809,ja=37810,Qa=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,lo=36492,hl=36494,ul=36495,bu=36283,dl=36284,fl=36285,pl=36286,Kf=3200,Jf=3201,Tu=0,jf=1,ti="",Wt="srgb",Ms="srgb-linear",fo="linear",ut="srgb",Bi=7680,xc=519,Qf=512,ep=513,tp=514,Au=515,np=516,ip=517,sp=518,rp=519,Mc=35044,yc="300 es",Wn=2e3,po=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Qs=Math.PI/180,hr=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Fl(n,e){return(n%e+e)%e}function op(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ap(n,e,t){return n!==e?(t-n)/(e-n):0}function er(n,e,t){return(1-t)*n+t*e}function lp(n,e,t,i){return er(n,e,1-Math.exp(-t*i))}function cp(n,e=1){return e-Math.abs(Fl(n,e*2)-e)}function hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fp(n,e){return n+Math.random()*(e-n)}function pp(n){return n*(.5-Math.random())}function mp(n){n!==void 0&&(Sc=n);let e=Sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gp(n){return n*Qs}function _p(n){return n*hr}function vp(n){return(n&n-1)===0&&n!==0}function xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sp={DEG2RAD:Qs,RAD2DEG:hr,generateUUID:Ui,clamp:je,euclideanModulo:Fl,mapLinear:op,inverseLerp:ap,lerp:er,damp:lp,pingpong:cp,smoothstep:hp,smootherstep:up,randInt:dp,randFloat:fp,randFloatSpread:pp,seededRandom:mp,degToRad:gp,radToDeg:_p,isPowerOfTwo:vp,ceilPowerOfTwo:xp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:yp,normalize:kt,denormalize:os};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),C=Math.atan2(I,p*E);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const v=a*E;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new U,Ec=new vr;class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],S=s[4],v=s[7],I=s[2],C=s[5],b=s[8];return r[0]=o*_+a*E+l*I,r[3]=o*m+a*S+l*C,r[6]=o*p+a*v+l*b,r[1]=c*_+h*E+u*I,r[4]=c*m+h*S+u*C,r[7]=c*p+h*v+u*b,r[2]=d*_+f*E+g*I,r[5]=d*m+f*S+g*C,r[8]=d*p+f*v+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Ke;function Ru(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ep(){const n=mo("canvas");return n.style.display="block",n}const wc={};function fs(n){n in wc||(wc[n]=!0,console.warn(n))}function wp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function bp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ap(){const n={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ms]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const st=Ap();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class Rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=mo("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cp=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zo(s[o].image)):r.push(zo(s[o]))}else r=zo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;const Fo=new U;class It extends Ds{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Ai,s=Ai,r=An,o=Ri,a=Mn,l=Dn,c=It.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ui(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=vu;It.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,I=(p+1)/2,C=(h+d)/4,b=(u+_)/4,P=(g+m)/4;return S>v&&S>I?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=b/i):v>I?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=P/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=b/r,s=P/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lp extends Ds{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new It(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Lp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cu extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dp extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Ar.subVectors(this.max,Bs),Gi.subVectors(e.a,Bs),Vi.subVectors(e.b,Bs),Wi.subVectors(e.c,Bs),$n.subVectors(Vi,Gi),Kn.subVectors(Wi,Vi),fi.subVectors(Gi,Wi);let t=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!Oo(t,Gi,Vi,Wi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Gi,Vi,Wi,Ar))?!1:(Rr.crossVectors($n,Kn),t=[Rr.x,Rr.y,Rr.z],Oo(t,Gi,Vi,Wi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,Tr=new Ni,Gi=new U,Vi=new U,Wi=new U,$n=new U,Kn=new U,fi=new U,Bs=new U,Ar=new U,Rr=new U,pi=new U;function Oo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pi.fromArray(n,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=i.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ip=new Ni,Hs=new U,ko=new U;class xr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ip.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Hs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(ko)),this.expandByPoint(Hs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const kn=new U,Bo=new U,Cr=new U,Jn=new U,Ho=new U,Pr=new U,Go=new U;class Up{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=Jn.dot(this.direction),l=-Jn.dot(Cr),c=Jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bo).addScaledVector(Cr,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),s=kn.dot(kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,s,r){Ho.subVectors(t,e),Pr.subVectors(i,e),Go.crossVectors(Ho,Pr);let o=this.direction.dot(Go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(Jn,Pr));if(l<0)return null;const c=a*this.direction.dot(Ho.cross(Jn));if(c<0||l+c>o)return null;const h=-a*Jn.dot(Go);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,zp)}lookAt(e,t,i){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),jn.crossVectors(i,$t),jn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),jn.crossVectors(i,$t)),jn.normalize(),Lr.crossVectors($t,jn),s[0]=jn.x,s[4]=Lr.x,s[8]=$t.x,s[1]=jn.y,s[5]=Lr.y,s[9]=$t.y,s[2]=jn.z,s[6]=Lr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],S=i[7],v=i[11],I=i[15],C=s[0],b=s[4],P=s[8],y=s[12],x=s[1],A=s[5],z=s[9],O=s[13],W=s[2],L=s[6],N=s[10],V=s[14],H=s[3],se=s[7],me=s[11],D=s[15];return r[0]=o*C+a*x+l*W+c*H,r[4]=o*b+a*A+l*L+c*se,r[8]=o*P+a*z+l*N+c*me,r[12]=o*y+a*O+l*V+c*D,r[1]=h*C+u*x+d*W+f*H,r[5]=h*b+u*A+d*L+f*se,r[9]=h*P+u*z+d*N+f*me,r[13]=h*y+u*O+d*V+f*D,r[2]=g*C+_*x+m*W+p*H,r[6]=g*b+_*A+m*L+p*se,r[10]=g*P+_*z+m*N+p*me,r[14]=g*y+_*O+m*V+p*D,r[3]=E*C+S*x+v*W+I*H,r[7]=E*b+S*A+v*L+I*se,r[11]=E*P+S*z+v*N+I*me,r[15]=E*y+S*O+v*V+I*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=t*E+i*S+s*v+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=E*b,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*b,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*b,e[4]=S*b,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*b,e[8]=v*b,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*b,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*b,e[12]=I*b,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*b,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*b,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=l*c,S=l*h,v=l*u,I=i.x,C=i.y,b=i.z;return s[0]=(1-(_+p))*I,s[1]=(f+v)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(f-v)*C,s[5]=(1-(d+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(g+S)*b,s[9]=(m-E)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===Wn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===po)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h;let g,_;if(a===Wn)g=(o+r)*u,_=-2*u;else if(a===po)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new U,fn=new lt,Np=new U(0,0,0),zp=new U(1,1,1),jn=new U,Lr=new U,$t=new U,Ac=new lt,Rc=new vr;class In{constructor(e=0,t=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fp=0;const Cc=new U,qi=new vr,Bn=new lt,Dr=new U,Gs=new U,Op=new U,kp=new vr,Pc=new U(1,0,0),Lc=new U(0,1,0),Dc=new U(0,0,1),Ic={type:"added"},Bp={type:"removed"},Yi={type:"childadded",child:null},Vo={type:"childremoved",child:null};class At extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,t=new In,i=new vr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Gs,Dr,this.up):Bn.lookAt(Dr,Gs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bp),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new U,Hn=new U,Wo=new U,Gn=new U,Zi=new U,$i=new U,Uc=new U,Xo=new U,qo=new U,Yo=new U,Zo=new dt,$o=new dt,Ko=new dt;class xn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),Hn.subVectors(i,t),Wo.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Hn),l=pn.dot(Wo),c=Hn.dot(Hn),h=Hn.dot(Wo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Zo.setScalar(0),$o.setScalar(0),Ko.setScalar(0),Zo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,i),Ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zo,r.x),o.addScaledVector($o,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),Hn.subVectors(e,t),pn.cross(Hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),pn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,i),$i.subVectors(r,i),Xo.subVectors(e,i);const l=Zi.dot(Xo),c=$i.dot(Xo);if(l<=0&&c<=0)return t.copy(i);qo.subVectors(e,s);const h=Zi.dot(qo),u=$i.dot(qo);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Zi,o);Yo.subVectors(e,r);const f=Zi.dot(Yo),g=$i.dot(Yo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector($i,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Uc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Uc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Zi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Fl(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Jo(o,r,e+1/3),this.g=Jo(o,r,e),this.b=Jo(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Lu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return st.workingToColorSpace(Nt.copy(this),e),Math.round(je(Nt.r*255,0,255))*65536+Math.round(je(Nt.g*255,0,255))*256+Math.round(je(Nt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Wt){st.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(Ir);const i=er(Qn.h,Ir.h,t),s=er(Qn.s,Ir.s,t),r=er(Qn.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new nt;nt.NAMES=Lu;let Hp=0;class Mr extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ds,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new U,Ur=new ve;let Gp=0;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class Du extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Iu extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vp=0;const rn=new lt,jo=new At,Ki=new U,Kt=new Ni,Vs=new Ni,Pt=new U;class qt extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Iu:Du)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Kt.min,Vs.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,Vs.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(Vs.min),Kt.expandByPoint(Vs.max))}Kt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Pt.add(Ki)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,h=new U,u=new U,d=new ve,f=new ve,g=new ve,_=new U,m=new U;function p(P,y,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(_),a[y].add(_),a[x].add(_),l[P].add(m),l[y].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,y=E.length;P<y;++P){const x=E[P],A=x.start,z=x.count;for(let O=A,W=A+z;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new U,v=new U,I=new U,C=new U;function b(P){I.fromBufferAttribute(s,P),C.copy(I);const y=a[P];S.copy(y),S.sub(I.multiplyScalar(I.dot(y))).normalize(),v.crossVectors(C,y);const A=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,A)}for(let P=0,y=E.length;P<y;++P){const x=E[P],A=x.start,z=x.count;for(let O=A,W=A+z;O<W;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new lt,mi=new Up,Nr=new xr,zc=new U,zr=new U,Fr=new U,Or=new U,Qo=new U,kr=new U,Fc=new U,Br=new U;class ze extends At{constructor(e=new qt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qo.fromBufferAttribute(u,e),o?kr.addScaledVector(Qo,h):kr.addScaledVector(Qo.sub(t),h))}t.add(kr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Nr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Nr,zc)===null||mi.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Nc),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,I=S;v<I;v+=3){const C=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);s=Hr(this,p,e,i,c,h,u,C,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Hr(this,o,e,i,c,h,u,E,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,I=S;v<I;v+=3){const C=v,b=v+1,P=v+2;s=Hr(this,p,e,i,c,h,u,C,b,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,v=m+2;s=Hr(this,o,e,i,c,h,u,E,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wp(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;Br.copy(a),Br.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:n}}function Hr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,zr),n.getVertexPosition(l,Fr),n.getVertexPosition(c,Or);const h=Wp(n,e,t,i,zr,Fr,Or,Fc);if(h){const u=new U;xn.getBarycoord(Fc,zr,Fr,Or,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new ve)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new ve)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};xn.getNormal(zr,Fr,Or,d.normal),h.face=d,h.barycoord=u}return h}class wt extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(_,m,p,E,S,v,I,C,b,P,y){const x=v/b,A=I/P,z=v/2,O=I/2,W=C/2,L=b+1,N=P+1;let V=0,H=0;const se=new U;for(let me=0;me<N;me++){const D=me*A-O;for(let Z=0;Z<L;Z++){const re=Z*x-z;se[_]=re*E,se[m]=D*S,se[p]=W,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=C>0?1:-1,h.push(se.x,se.y,se.z),u.push(Z/b),u.push(1-me/P),V+=1}}for(let me=0;me<P;me++)for(let D=0;D<b;D++){const Z=d+D+L*me,re=d+D+L*(me+1),G=d+(D+1)+L*(me+1),$=d+(D+1)+L*me;l.push(Z,re,$),l.push(re,G,$),H+=6}a.addGroup(f,H,y),f+=H,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const s in i)e[s]=i[s]}return e}function Xp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const qp={clone:ys,merge:Bt};var Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new U,Oc=new ve,kc=new ve;class Ft extends Nu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,kc),t.subVectors(kc,Oc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,ji=1;class $p extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(Ji,ji,e,t);s.layers=this.layers,this.add(s);const r=new Ft(Ji,ji,e,t);r.layers=this.layers,this.add(r);const o=new Ft(Ji,ji,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Ji,ji,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Ji,ji,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Ji,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zu extends It{constructor(e=[],t=_s,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new zu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wt(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:ii});r.uniforms.tEquirect.value=t;const o=new ze(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=An),new $p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Xt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jp={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bl extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jp extends It{constructor(e=null,t=1,i=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bc extends hn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new lt,Hc=new lt,Gr=[],Gc=new Ni,Qp=new lt,Ws=new ze,Xs=new xr;class To extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Gc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Xs.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),Hc.multiplyMatrices(i,Qi),Ws.matrixWorld=Hc,Ws.raycast(e,Gr);for(let o=0,a=Gr.length;o<a;o++){const l=Gr[o];l.instanceId=r,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jp(new Float32Array(s*this.count),s,this.count,Il,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ta=new U,em=new U,tm=new Ke;class yi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ta.subVectors(i,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tm.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new xr,nm=new ve(.5,.5),Vr=new U;class Hl{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],S=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-f,v-p).normalize(),i[1].setComponents(l+r,d+c,m+f,v+p).normalize(),i[2].setComponents(l+o,d+h,m+g,v+E).normalize(),i[3].setComponents(l-o,d-h,m-g,v-E).normalize(),i[4].setComponents(l-a,d-u,m-_,v-S).normalize(),t===Wn)i[5].setComponents(l+a,d+u,m+_,v+S).normalize();else if(t===po)i[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=nm.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends It{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ou extends It{constructor(e,t,i=Di,s,r,o,a=en,l=en,c,h=lr,u=1){if(h!==lr&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cn extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function E(){const v=new U,I=new U;let C=0;const b=(t-e)/i;for(let P=0;P<=r;P++){const y=[],x=P/r,A=x*(t-e)+e;for(let z=0;z<=s;z++){const O=z/s,W=O*l+a,L=Math.sin(W),N=Math.cos(W);I.x=A*L,I.y=-x*i+m,I.z=A*N,u.push(I.x,I.y,I.z),v.set(L,b,N).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-x),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const x=_[y][P],A=_[y+1][P],z=_[y+1][P+1],O=_[y][P+1];(e>0||y!==0)&&(h.push(x,A,O),C+=3),(t>0||y!==r-1)&&(h.push(A,z,O),C+=3)}c.addGroup(p,C,0),p+=C}function S(v){const I=g,C=new ve,b=new U;let P=0;const y=v===!0?e:t,x=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const A=g;for(let z=0;z<=s;z++){const W=z/s*l+a,L=Math.cos(W),N=Math.sin(W);b.x=y*N,b.y=m*x,b.z=y*L,u.push(b.x,b.y,b.z),d.push(0,x,0),C.x=L*.5+.5,C.y=N*.5*x+.5,f.push(C.x,C.y),g++}for(let z=0;z<s;z++){const O=I+z,W=A+z;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new U,v=new U,I=new U;for(let C=0;C<t.length;C+=3)f(t[C+0],S),f(t[C+1],v),f(t[C+2],I),l(S,v,I,E)}function l(E,S,v,I){const C=I+1,b=[];for(let P=0;P<=C;P++){b[P]=[];const y=E.clone().lerp(v,P/C),x=S.clone().lerp(v,P/C),A=C-P;for(let z=0;z<=A;z++)z===0&&P===C?b[P][z]=y:b[P][z]=y.clone().lerp(x,z/A)}for(let P=0;P<C;P++)for(let y=0;y<2*(C-P)-1;y++){const x=Math.floor(y/2);y%2===0?(d(b[P][x+1]),d(b[P+1][x]),d(b[P][x])):(d(b[P][x+1]),d(b[P+1][x+1]),d(b[P+1][x]))}}function c(E){const S=new U;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(E),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const E=new U;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const v=m(E)/2/Math.PI+.5,I=p(E)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const S=o[E+0],v=o[E+2],I=o[E+4],C=Math.max(S,v,I),b=Math.min(S,v,I);C>.9&&b<.1&&(S<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),I<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,S){const v=E*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const E=new U,S=new U,v=new U,I=new U,C=new ve,b=new ve,P=new ve;for(let y=0,x=0;y<r.length;y+=9,x+=6){E.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),C.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),I.copy(E).add(S).add(v).divideScalar(3);const A=m(I);_(C,x+0,E,A),_(b,x+2,S,A),_(P,x+4,v,A)}}function _(E,S,v,I){I<0&&E.x===1&&(o[S]=E.x-1),v.x===0&&v.z===0&&(o[S]=I/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.vertices,e.indices,e.radius,e.details)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ve:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],o=[],a=new U,l=new lt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class im extends Vl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Wr=new U,na=new Wl,ia=new Wl,sa=new Wl;class sm extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),c=Wr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),na.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ia.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),sa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(na.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ia.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(na.calc(l),ia.calc(l),sa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vc(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function rm(n,e){const t=1-n;return t*t*e}function om(n,e){return 2*(1-n)*n*e}function am(n,e){return n*n*e}function tr(n,e,t,i){return rm(n,e)+om(n,t)+am(n,i)}function lm(n,e){const t=1-n;return t*t*t*e}function cm(n,e){const t=1-n;return 3*t*t*n*e}function hm(n,e){return 3*(1-n)*n*n*e}function um(n,e){return n*n*n*e}function nr(n,e,t,i,s){return lm(n,e)+cm(n,t)+hm(n,i)+um(n,s)}class ku extends zn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dm extends zn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y),nr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bu extends zn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends zn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends zn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pm extends zn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y),tr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Vc(a,l.x,c.x,h.x,u.x),Vc(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var ml=Object.freeze({__proto__:null,ArcCurve:im,CatmullRomCurve3:sm,CubicBezierCurve:ku,CubicBezierCurve3:dm,EllipseCurve:Vl,LineCurve:Bu,LineCurve3:fm,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:pm,SplineCurve:Gu});class mm extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ml[s.type]().fromJSON(s))}return this}}class Wc extends mm{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Bu(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Hu(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new ku(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Gu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Vl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vu extends Wc{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Wc().fromJSON(s))}return this}}function gm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Wu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ym(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ur(r,o,t,a,l,c,0),o}function Wu(n,e,t,i,s){let r;if(s===Dm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Xc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Xc(o/i|0,n[o],n[o+1],r);return r&&Ss(r,r.next)&&(fr(r),r=r.next),r}function Ii(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ss(t,t.next)||St(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Tm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?vm(n,i,s,r):_m(n)){e.push(l.i,n.i,c.i),fr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=xm(Ii(n),e),ur(n,e,t,i,s,r,2)):o===2&&Mm(n,e,t,i,s,r):ur(Ii(n),e,t,i,s,r,1);break}}}function _m(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Js(s,a,r,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=gl(f,g,e,t,i),E=gl(_,m,e,t,i);let S=n.prevZ,v=n.nextZ;for(;S&&S.z>=p&&v&&v.z<=E;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Js(a,h,l,u,c,d,S.x,S.y)&&St(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Js(a,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Js(a,h,l,u,c,d,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Js(a,h,l,u,c,d,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ss(i,s)&&qu(i,t,t.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Ii(t)}function Mm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cm(o,a)){let l=Yu(o,a);o=Ii(o,o.next),l=Ii(l,l.next),ur(o,e,t,i,s,r,0),ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ym(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Wu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Rm(c))}s.sort(Sm);for(let r=0;r<s.length;r++)t=Em(s[r],t);return t}function Sm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Em(n,e){const t=wm(n,e);if(!t)return e;const i=Yu(t,n);return Ii(i,i.next),Ii(t,t.next)}function wm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ss(n,t))return t;do{if(Ss(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Xu(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);dr(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&bm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function bm(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function Tm(n,e,t,i){let s=n;do s.z===0&&(s.z=gl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function gl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Js(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Xu(n,e,t,i,s,r,o,a)}function Cm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Pm(n,e)&&(dr(n,e)&&dr(e,n)&&Lm(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Ss(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ss(n,e){return n.x===e.x&&n.y===e.y}function qu(n,e,t,i){const s=qr(St(n,e,t)),r=qr(St(n,e,i)),o=qr(St(t,i,n)),a=qr(St(t,i,e));return!!(s!==r&&o!==a||s===0&&Xr(n,t,e)||r===0&&Xr(n,i,e)||o===0&&Xr(t,n,i)||a===0&&Xr(t,e,i))}function Xr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qr(n){return n>0?1:n<0?-1:0}function Pm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dr(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Lm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yu(n,e){const t=_l(n.i,n.x,n.y),i=_l(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xc(n,e,t,i){const s=_l(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _l(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Im{static triangulate(e,t,i=2){return gm(e,t,i)}}class ls{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ls.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];qc(e),Yc(i,e);let o=e.length;t.forEach(qc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Yc(i,t[l]);const a=Im.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xl extends qt{constructor(e=new Vu([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Um;let S,v=!1,I,C,b,P;p&&(S=p.getSpacedPoints(h),v=!0,d=!1,I=p.computeFrenetFrames(h,!1),C=new U,b=new U,P=new U),d||(m=0,f=0,g=0,_=0);const y=a.extractPoints(c);let x=y.shape;const A=y.holes;if(!ls.isClockWise(x)){x=x.reverse();for(let T=0,pe=A.length;T<pe;T++){const ne=A[T];ls.isClockWise(ne)&&(A[T]=ne.reverse())}}function O(T){const ne=10000000000000001e-36;let _e=T[0];for(let j=1;j<=T.length;j++){const we=j%T.length,ue=T[we],be=ue.x-_e.x,Ze=ue.y-_e.y,R=be*be+Ze*Ze,M=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(_e.x),Math.abs(_e.y)),X=ne*M*M;if(R<=X){T.splice(we,1),j--;continue}_e=ue}}O(x),A.forEach(O);const W=A.length,L=x;for(let T=0;T<W;T++){const pe=A[T];x=x.concat(pe)}function N(T,pe,ne){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(pe,ne)}const V=x.length;function H(T,pe,ne){let _e,j,we;const ue=T.x-pe.x,be=T.y-pe.y,Ze=ne.x-T.x,R=ne.y-T.y,M=ue*ue+be*be,X=ue*R-be*Ze;if(Math.abs(X)>Number.EPSILON){const K=Math.sqrt(M),ee=Math.sqrt(Ze*Ze+R*R),J=pe.x-be/K,De=pe.y+ue/K,xe=ne.x-R/ee,Ce=ne.y+Ze/ee,Ie=((xe-J)*R-(Ce-De)*Ze)/(ue*R-be*Ze);_e=J+ue*Ie-T.x,j=De+be*Ie-T.y;const ie=_e*_e+j*j;if(ie<=2)return new ve(_e,j);we=Math.sqrt(ie/2)}else{let K=!1;ue>Number.EPSILON?Ze>Number.EPSILON&&(K=!0):ue<-Number.EPSILON?Ze<-Number.EPSILON&&(K=!0):Math.sign(be)===Math.sign(R)&&(K=!0),K?(_e=-be,j=ue,we=Math.sqrt(M)):(_e=ue,j=be,we=Math.sqrt(M/2))}return new ve(_e/we,j/we)}const se=[];for(let T=0,pe=L.length,ne=pe-1,_e=T+1;T<pe;T++,ne++,_e++)ne===pe&&(ne=0),_e===pe&&(_e=0),se[T]=H(L[T],L[ne],L[_e]);const me=[];let D,Z=se.concat();for(let T=0,pe=W;T<pe;T++){const ne=A[T];D=[];for(let _e=0,j=ne.length,we=j-1,ue=_e+1;_e<j;_e++,we++,ue++)we===j&&(we=0),ue===j&&(ue=0),D[_e]=H(ne[_e],ne[we],ne[ue]);me.push(D),Z=Z.concat(D)}let re;if(m===0)re=ls.triangulateShape(L,A);else{const T=[],pe=[];for(let ne=0;ne<m;ne++){const _e=ne/m,j=f*Math.cos(_e*Math.PI/2),we=g*Math.sin(_e*Math.PI/2)+_;for(let ue=0,be=L.length;ue<be;ue++){const Ze=N(L[ue],se[ue],we);Fe(Ze.x,Ze.y,-j),_e===0&&T.push(Ze)}for(let ue=0,be=W;ue<be;ue++){const Ze=A[ue];D=me[ue];const R=[];for(let M=0,X=Ze.length;M<X;M++){const K=N(Ze[M],D[M],we);Fe(K.x,K.y,-j),_e===0&&R.push(K)}_e===0&&pe.push(R)}}re=ls.triangulateShape(T,pe)}const G=re.length,$=g+_;for(let T=0;T<V;T++){const pe=d?N(x[T],Z[T],$):x[T];v?(b.copy(I.normals[0]).multiplyScalar(pe.x),C.copy(I.binormals[0]).multiplyScalar(pe.y),P.copy(S[0]).add(b).add(C),Fe(P.x,P.y,P.z)):Fe(pe.x,pe.y,0)}for(let T=1;T<=h;T++)for(let pe=0;pe<V;pe++){const ne=d?N(x[pe],Z[pe],$):x[pe];v?(b.copy(I.normals[T]).multiplyScalar(ne.x),C.copy(I.binormals[T]).multiplyScalar(ne.y),P.copy(S[T]).add(b).add(C),Fe(P.x,P.y,P.z)):Fe(ne.x,ne.y,u/h*T)}for(let T=m-1;T>=0;T--){const pe=T/m,ne=f*Math.cos(pe*Math.PI/2),_e=g*Math.sin(pe*Math.PI/2)+_;for(let j=0,we=L.length;j<we;j++){const ue=N(L[j],se[j],_e);Fe(ue.x,ue.y,u+ne)}for(let j=0,we=A.length;j<we;j++){const ue=A[j];D=me[j];for(let be=0,Ze=ue.length;be<Ze;be++){const R=N(ue[be],D[be],_e);v?Fe(R.x,R.y+S[h-1].y,S[h-1].x+ne):Fe(R.x,R.y,u+ne)}}}ae(),ce();function ae(){const T=s.length/3;if(d){let pe=0,ne=V*pe;for(let _e=0;_e<G;_e++){const j=re[_e];oe(j[2]+ne,j[1]+ne,j[0]+ne)}pe=h+m*2,ne=V*pe;for(let _e=0;_e<G;_e++){const j=re[_e];oe(j[0]+ne,j[1]+ne,j[2]+ne)}}else{for(let pe=0;pe<G;pe++){const ne=re[pe];oe(ne[2],ne[1],ne[0])}for(let pe=0;pe<G;pe++){const ne=re[pe];oe(ne[0]+V*h,ne[1]+V*h,ne[2]+V*h)}}i.addGroup(T,s.length/3-T,0)}function ce(){const T=s.length/3;let pe=0;ge(L,pe),pe+=L.length;for(let ne=0,_e=A.length;ne<_e;ne++){const j=A[ne];ge(j,pe),pe+=j.length}i.addGroup(T,s.length/3-T,1)}function ge(T,pe){let ne=T.length;for(;--ne>=0;){const _e=ne;let j=ne-1;j<0&&(j=T.length-1);for(let we=0,ue=h+m*2;we<ue;we++){const be=V*we,Ze=V*(we+1),R=pe+_e+be,M=pe+j+be,X=pe+j+Ze,K=pe+_e+Ze;Ne(R,M,X,K)}}}function Fe(T,pe,ne){l.push(T),l.push(pe),l.push(ne)}function oe(T,pe,ne){ke(T),ke(pe),ke(ne);const _e=s.length/3,j=E.generateTopUV(i,s,_e-3,_e-2,_e-1);Ue(j[0]),Ue(j[1]),Ue(j[2])}function Ne(T,pe,ne,_e){ke(T),ke(pe),ke(_e),ke(pe),ke(ne),ke(_e);const j=s.length/3,we=E.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);Ue(we[0]),Ue(we[1]),Ue(we[3]),Ue(we[1]),Ue(we[2]),Ue(we[3])}function ke(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function Ue(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ml[s.type]().fromJSON(s)),new Xl(i,e.options)}}const Um={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,o),new ve(a,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-u),new ve(d,1-g),new ve(_,1-p)]:[new ve(a,1-l),new ve(h,1-u),new ve(f,1-g),new ve(m,1-p)]}};function Nm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ql extends Gl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}class Un extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-o;for(let S=0;S<c;S++){const v=S*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,v=E+c*(p+1),I=E+1+c*(p+1),C=E+1+c*p;f.push(S,v,C),f.push(v,I,C)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yl extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mt extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zm extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fm extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Om extends Zl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ra=new lt,Zc=new U,$c=new U;class Zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kc=new lt,qs=new U,oa=new U;class km extends Zu{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),i.position.copy(qs),oa.copy(i.position),oa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(oa),i.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),Kc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc)}}class Bm extends Zl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new km}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $l extends Nu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hm extends Zu{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Hm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jc(n,e,t,i){const s=Wm(i);switch(t){case Su:return n*e;case Il:return n*e/s.components*s.byteLength;case Ul:return n*e/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Eu:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case zl:return n*e*4/s.components*s.byteLength;case so:case ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(n,16)*Math.max(e,8)/4;case Va:case Xa:return Math.max(n,8)*Math.max(e,8)/2;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lo:case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bu:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wm(n){switch(n){case Dn:case xu:return{byteLength:1,components:1};case or:case Mu:case _r:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Di:case Pl:case Rn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function $u(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xm(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Wg=`struct PhysicalMaterial {
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
}`,Xg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,f_=`#define PHONG
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
}`,p_=`#define PHONG
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
}`,m_=`#define STANDARD
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
}`,g_=`#define STANDARD
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
}`,__=`#define TOON
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
}`,v_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Zm,alphamap_pars_fragment:$m,alphatest_fragment:Km,alphatest_pars_fragment:Jm,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:fg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:Mg,emissivemap_pars_fragment:yg,colorspace_fragment:Sg,colorspace_pars_fragment:Eg,envmap_fragment:wg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:zg,lights_pars_begin:Fg,lights_toon_fragment:kg,lights_toon_pars_fragment:Bg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Jg,map_fragment:jg,map_pars_fragment:Qg,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:x0,packing:M0,premultiplied_alpha_fragment:y0,project_vertex:S0,dithering_fragment:E0,dithering_pars_fragment:w0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:I0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:z0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:k0,transmission_pars_fragment:B0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:V0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:$0,cube_frag:K0,depth_vert:J0,depth_frag:j0,distanceRGBA_vert:Q0,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:o_,meshlambert_vert:a_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:v_,points_vert:x_,points_frag:M_,shadow_vert:y_,shadow_frag:S_,sprite_vert:E_,sprite_frag:w_},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},bn={basic:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Bt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Bt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Bt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Bt([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Bt([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bn.physical={uniforms:Bt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yr={r:0,b:0,g:0},_i=new In,b_=new lt;function T_(n,e,t,i,s,r,o){const a=new nt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const I=g(S);I===null?p(a,l):I&&I.isColor&&(p(I,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){const I=g(v);I&&(I.isCubeTexture||I.mapping===bo)?(h===void 0&&(h=new ze(new wt(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ys(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(_i)),h.material.toneMapped=st.getTransfer(I.colorSpace)!==ut,(u!==I||d!==I.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ze(new Un(2,2),new ci({name:"BackgroundMaterial",uniforms:ys(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Yr,Uu(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:E}}function A_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,A,z,O,W){let L=!1;const N=u(O,z,A);r!==N&&(r=N,c(r.object)),L=f(x,O,z,W),L&&g(x,O,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(x,A,z,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,A,z){const O=z.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let L=W[A.id];L===void 0&&(L={},W[A.id]=L);let N=L[O];return N===void 0&&(N=d(l()),L[O]=N),N}function d(x){const A=[],z=[],O=[];for(let W=0;W<t;W++)A[W]=0,z[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,A,z,O){const W=r.attributes,L=A.attributes;let N=0;const V=z.getAttributes();for(const H in V)if(V[H].location>=0){const me=W[H];let D=L[H];if(D===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(D=x.instanceColor)),me===void 0||me.attribute!==D||D&&me.data!==D.data)return!0;N++}return r.attributesNum!==N||r.index!==O}function g(x,A,z,O){const W={},L=A.attributes;let N=0;const V=z.getAttributes();for(const H in V)if(V[H].location>=0){let me=L[H];me===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const D={};D.attribute=me,me&&me.data&&(D.data=me.data),W[H]=D,N++}r.attributes=W,r.attributesNum=N,r.index=O}function _(){const x=r.newAttributes;for(let A=0,z=x.length;A<z;A++)x[A]=0}function m(x){p(x,0)}function p(x,A){const z=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),W[x]!==A&&(n.vertexAttribDivisor(x,A),W[x]=A)}function E(){const x=r.newAttributes,A=r.enabledAttributes;for(let z=0,O=A.length;z<O;z++)A[z]!==x[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function S(x,A,z,O,W,L,N){N===!0?n.vertexAttribIPointer(x,A,z,W,L):n.vertexAttribPointer(x,A,z,O,W,L)}function v(x,A,z,O){_();const W=O.attributes,L=z.getAttributes(),N=A.defaultAttributeValues;for(const V in L){const H=L[V];if(H.location>=0){let se=W[V];if(se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){const me=se.normalized,D=se.itemSize,Z=e.get(se);if(Z===void 0)continue;const re=Z.buffer,G=Z.type,$=Z.bytesPerElement,ae=G===n.INT||G===n.UNSIGNED_INT||se.gpuType===Pl;if(se.isInterleavedBufferAttribute){const ce=se.data,ge=ce.stride,Fe=se.offset;if(ce.isInstancedInterleavedBuffer){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,ce.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,re);for(let oe=0;oe<H.locationSize;oe++)S(H.location+oe,D/H.locationSize,G,me,ge*$,(Fe+D/H.locationSize*oe)*$,ae)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce,se.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ce=0;ce<H.locationSize;ce++)S(H.location+ce,D/H.locationSize,G,me,D*$,D/H.locationSize*ce*$,ae)}}else if(N!==void 0){const me=N[V];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(H.location,me);break;case 3:n.vertexAttrib3fv(H.location,me);break;case 4:n.vertexAttrib4fv(H.location,me);break;default:n.vertexAttrib1fv(H.location,me)}}}}E()}function I(){P();for(const x in i){const A=i[x];for(const z in A){const O=A[z];for(const W in O)h(O[W].object),delete O[W];delete A[z]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const z in A){const O=A[z];for(const W in O)h(O[W].object),delete O[W];delete A[z]}delete i[x.id]}function b(x){for(const A in i){const z=i[A];if(z[x.id]===void 0)continue;const O=z[x.id];for(const W in O)h(O[W].object),delete O[W];delete z[x.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function R_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Mn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Dn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:I,maxSamples:C}}function P_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new yi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,S=E*4;let v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let I=0;I!==S;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L_(n){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=_s:a===Ha&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===Ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const cs=4,jc=[.125,.215,.35,.446,.526,.582],wi=20,aa=new $l,Qc=new nt;let la=null,ca=0,ha=0,ua=!1;const Si=(1+Math.sqrt(5))/2,es=1/Si,eh=[new U(-Si,es,0),new U(Si,es,0),new U(-es,0,Si),new U(es,0,Si),new U(0,Si,-es),new U(0,Si,es),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],D_=new U;class vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=D_}=r;la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:_r,format:Mn,colorSpace:Ms,depthBuffer:!1},s=th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=U_(r,e,t)}return s}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,i,s,r){const l=new Ft(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qc),u.toneMapping=si,u.autoClear=!1;const g=new li({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new ze(new wt,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Qc),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const v=this._cubeSize;Zr(s,S*v,E>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===_s||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eh[(s-r-1)%eh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let E=0;for(let b=0;b<wi;++b){const P=b/_,y=Math.exp(-P*P/2);p.push(y),b===0?E+=y:b<m&&(E+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const v=this._sizeLods[s],I=3*v*(s>S-cs?s-S+cs:0),C=4*(this._cubeSize-v);Zr(t,I,C,3*v,2*v),l.setRenderTarget(t),l.render(u,aa)}}function I_(n){const e=[],t=[],i=[];let s=n;const r=n-cs+1+jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-cs?l=jc[o-n+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const b=C%3*2/3-1,P=C>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(y,_*g*C),S.set(d,m*g*C);const x=[C,C,C,C,C,C];v.set(x,p*g*C)}const I=new qt;I.setAttribute("position",new hn(E,_)),I.setAttribute("uv",new hn(S,m)),I.setAttribute("faceIndex",new hn(v,p)),e.push(I),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function th(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function U_(n,e,t){const i=new Float32Array(wi),s=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function nh(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ih(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function N_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===Ha,h=l===_s||l===vs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new vl(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new vl(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function z_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function F_(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let S=0,v=E.length;S<v;S+=3){const I=E[S+0],C=E[S+1],b=E[S+2];d.push(I,C,C,b,b,I)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const I=S+0,C=S+1,b=S+2;d.push(I,C,C,b,b,I)}}else return;const m=new(Ru(d)?Iu:Du)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function O_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function B_(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=a.attributes.position.count*v,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const b=new Float32Array(I*C*4*u),P=new Cu(b,I,C,u);P.type=Rn,P.needsUpdate=!0;const y=v*4;for(let A=0;A<u;A++){const z=p[A],O=E[A],W=S[A],L=I*C*4*A;for(let N=0;N<z.count;N++){const V=N*y;g===!0&&(s.fromBufferAttribute(z,N),b[L+V+0]=s.x,b[L+V+1]=s.y,b[L+V+2]=s.z,b[L+V+3]=0),_===!0&&(s.fromBufferAttribute(O,N),b[L+V+4]=s.x,b[L+V+5]=s.y,b[L+V+6]=s.z,b[L+V+7]=0),m===!0&&(s.fromBufferAttribute(W,N),b[L+V+8]=s.x,b[L+V+9]=s.y,b[L+V+10]=s.z,b[L+V+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ve(I,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function H_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ku=new It,sh=new Ou(1,1),Ju=new Cu,ju=new Dp,Qu=new zu,rh=[],oh=[],ah=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function G_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function q_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ch.set(i),n.uniformMatrix2fv(this.addr,!1,ch),Ct(t,i)}}function Y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;lh.set(i),n.uniformMatrix3fv(this.addr,!1,lh),Ct(t,i)}}function Z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ah.set(i),n.uniformMatrix4fv(this.addr,!1,ah),Ct(t,i)}}function $_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function j_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Q_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function iv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sh.compareFunction=Au,r=sh):r=Ku,t.setTexture2D(e||r,s)}function sv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ju,s)}function rv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qu,s)}function ov(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ju,s)}function av(n){switch(n){case 5126:return G_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return j_;case 5125:return Q_;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}function lv(n,e){n.uniform1fv(this.addr,e)}function cv(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function uv(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function dv(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fv(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pv(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mv(n,e){n.uniform1iv(this.addr,e)}function gv(n,e){n.uniform2iv(this.addr,e)}function _v(n,e){n.uniform3iv(this.addr,e)}function vv(n,e){n.uniform4iv(this.addr,e)}function xv(n,e){n.uniform1uiv(this.addr,e)}function Mv(n,e){n.uniform2uiv(this.addr,e)}function yv(n,e){n.uniform3uiv(this.addr,e)}function Sv(n,e){n.uniform4uiv(this.addr,e)}function Ev(n,e,t){const i=this.cache,s=e.length,r=Ao(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ku,r[o])}function wv(n,e,t){const i=this.cache,s=e.length,r=Ao(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ju,r[o])}function bv(n,e,t){const i=this.cache,s=e.length,r=Ao(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qu,r[o])}function Tv(n,e,t){const i=this.cache,s=e.length,r=Ao(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ju,r[o])}function Av(n){switch(n){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return Mv;case 36295:return yv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Tv}}class Rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=av(t.type)}}class Cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Av(t.type)}}class Pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function Lv(n,e,t){const i=n.name,s=i.length;for(da.lastIndex=0;;){const r=da.exec(i),o=da.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hh(t,c===void 0?new Rv(a,n,e):new Cv(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Pv(a),hh(t,u)),t=u}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Lv(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Dv=37297;let Iv=0;function Uv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const dh=new Ke;function Nv(n){st._getMatrix(dh,st.workingColorSpace,n);const e=`mat3( ${dh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case fo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Uv(n.getShaderSource(e),o)}else return s}function zv(n,e){const t=Nv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fv(n,e){let t;switch(e){case Vf:t="Linear";break;case Wf:t="Reinhard";break;case Xf:t="Cineon";break;case _u:t="ACESFilmic";break;case Yf:t="AgX";break;case Zf:t="Neutral";break;case qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new U;function Ov(){st.getLuminanceCoefficients($r);const n=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Bv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function js(n){return n!==""}function ph(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(Gv,Wv)}const Vv=new Map;function Wv(n,e){let t=Je[e];if(t===void 0){const i=Vv.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(n){return n.replace(Xv,qv)}function qv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Yv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vs&&(e="ENVMAP_MODE_REFRACTION"),e}function Kv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function Jv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yv(t),c=Zv(t),h=$v(t),u=Kv(t),d=Jv(t),f=kv(t),g=Bv(r),_=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Je.tonemapping_pars_fragment:"",t.toneMapping!==si?Fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),Ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=xl(o),o=ph(o,t),o=mh(o,t),a=xl(a),a=ph(a,t),a=mh(a,t),o=gh(o),a=gh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,v=E+p+a,I=uh(s,s.VERTEX_SHADER,S),C=uh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(A){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(C).trim();let L=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const V=fh(s,I,"vertex"),H=fh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+V+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||W==="")&&(N=!1);N&&(A.diagnostics={runnable:L,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(C),P=new co(s,_),y=Hv(s,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Dv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let Qv=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new tx(e),t.set(e,i)),i}}class tx{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}}function nx(n,e,t,i,s,r,o){const a=new Pu,l=new ex,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,A,z,O){const W=z.fog,L=O.geometry,N=y.isMeshStandardMaterial?z.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),H=V&&V.mapping===bo?V.image.height:null,se=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const me=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,D=me!==void 0?me.length:0;let Z=0;L.morphAttributes.position!==void 0&&(Z=1),L.morphAttributes.normal!==void 0&&(Z=2),L.morphAttributes.color!==void 0&&(Z=3);let re,G,$,ae;if(se){const ot=bn[se];re=ot.vertexShader,G=ot.fragmentShader}else re=y.vertexShader,G=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const ce=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,oe=O.isBatchedMesh===!0,Ne=!!y.map,ke=!!y.matcap,Ue=!!V,T=!!y.aoMap,pe=!!y.lightMap,ne=!!y.bumpMap,_e=!!y.normalMap,j=!!y.displacementMap,we=!!y.emissiveMap,ue=!!y.metalnessMap,be=!!y.roughnessMap,Ze=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,X=y.iridescence>0,K=y.sheen>0,ee=y.transmission>0,J=Ze&&!!y.anisotropyMap,De=R&&!!y.clearcoatMap,xe=R&&!!y.clearcoatNormalMap,Ce=R&&!!y.clearcoatRoughnessMap,Ie=X&&!!y.iridescenceMap,ie=X&&!!y.iridescenceThicknessMap,Te=K&&!!y.sheenColorMap,Ve=K&&!!y.sheenRoughnessMap,He=!!y.specularMap,Me=!!y.specularColorMap,qe=!!y.specularIntensityMap,F=ee&&!!y.transmissionMap,Se=ee&&!!y.thicknessMap,le=!!y.gradientMap,Re=!!y.alphaMap,de=y.alphaTest>0,Q=!!y.alphaHash,Pe=!!y.extensions;let $e=si;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&($e=n.toneMapping);const mt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:G,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:oe,batchingColor:oe&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ms,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:ke,envMap:Ue,envMapMode:Ue&&V.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:pe,bumpMap:ne,normalMap:_e,displacementMap:d&&j,emissiveMap:we,normalMapObjectSpace:_e&&y.normalMapType===jf,normalMapTangentSpace:_e&&y.normalMapType===Tu,metalnessMap:ue,roughnessMap:be,anisotropy:Ze,anisotropyMap:J,clearcoat:R,clearcoatMap:De,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ce,dispersion:M,iridescence:X,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Me,specularIntensityMap:qe,transmission:ee,transmissionMap:F,thicknessMap:Se,gradientMap:le,opaque:y.transparent===!1&&y.blending===ds&&y.alphaToCoverage===!1,alphaMap:Re,alphaTest:de,alphaHash:Q,combine:y.combine,mapUv:Ne&&_(y.map.channel),aoMapUv:T&&_(y.aoMap.channel),lightMapUv:pe&&_(y.lightMap.channel),bumpMapUv:ne&&_(y.bumpMap.channel),normalMapUv:_e&&_(y.normalMap.channel),displacementMapUv:j&&_(y.displacementMap.channel),emissiveMapUv:we&&_(y.emissiveMap.channel),metalnessMapUv:ue&&_(y.metalnessMap.channel),roughnessMapUv:be&&_(y.roughnessMap.channel),anisotropyMapUv:J&&_(y.anisotropyMap.channel),clearcoatMapUv:De&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(y.sheenRoughnessMap.channel),specularMapUv:He&&_(y.specularMap.channel),specularColorMapUv:Me&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:Se&&_(y.thicknessMap.channel),alphaMapUv:Re&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||Ze),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Ne||Re),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Z,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:we&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vn,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)x.push(A),x.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(E(x,y),S(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=g[y.type];let A;if(x){const z=bn[x];A=qp.clone(z.uniforms)}else A=y.uniforms;return A}function I(y,x){let A;for(let z=0,O=h.length;z<O;z++){const W=h[z];if(W.cacheKey===x){A=W,++A.usedTimes;break}}return A===void 0&&(A=new jv(n,x,y,r),h.push(A)),A}function C(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:P}}function ix(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||sx),i.length>1&&i.sort(d||vh),s.length>1&&s.sort(d||vh)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function rx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new xh,n.set(i,[o])):s>=r.length?(o=new xh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new nt};break;case"SpotLight":t={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function ax(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let lx=0;function cx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hx(n){const e=new ox,t=ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new lt,o=new lt;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,S=0,v=0,I=0,C=0,b=0;c.sort(cx);for(let y=0,x=c.length;y<x;y++){const A=c[y],z=A.color,O=A.intensity,W=A.distance,L=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(A.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(A.sh.coefficients[N],O);b++}else if(A.isDirectionalLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const V=A.shadow,H=t.get(A);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=A.shadow.matrix,E++}i.directional[f]=N,f++}else if(A.isSpotLight){const N=e.get(A);N.position.setFromMatrixPosition(A.matrixWorld),N.color.copy(z).multiplyScalar(O),N.distance=W,N.coneCos=Math.cos(A.angle),N.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),N.decay=A.decay,i.spot[_]=N;const V=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,V.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[_]=V.matrix,A.castShadow){const H=t.get(A);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=L,v++}_++}else if(A.isRectAreaLight){const N=e.get(A);N.color.copy(z).multiplyScalar(O),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=N,m++}else if(A.isPointLight){const N=e.get(A);if(N.color.copy(A.color).multiplyScalar(A.intensity),N.distance=A.distance,N.decay=A.decay,A.castShadow){const V=A.shadow,H=t.get(A);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=A.shadow.matrix,S++}i.point[g]=N,g++}else if(A.isHemisphereLight){const N=e.get(A);N.skyColor.copy(A.color).multiplyScalar(O),N.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==I||P.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=I,P.numLightProbes=b,i.version=lx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Mh(n){const e=new hx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ux(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Mh(n),e.set(s,[a])):r>=o.length?(a=new Mh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(n,e,t){let i=new Hl;const s=new ve,r=new ve,o=new dt,a=new zm({depthPacking:Jf}),l=new Fm,c={},h=t.maxTextureSize,u={[oi]:Gt,[Gt]:oi,[vn]:vn},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let p=this.type;this.render=function(C,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ii),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Vn&&this.type===Vn,W=p===Vn&&this.type!==Vn;for(let L=0,N=C.length;L<N;L++){const V=C[L],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();if(s.multiply(se),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||O===!0||W===!0){const D=this.type!==Vn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new ai(s.x,s.y,D),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const me=H.getViewportCount();for(let D=0;D<me;D++){const Z=H.getViewport(D);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),z.viewport(o),H.updateMatrices(V,D),i=H.getFrustum(),v(b,P,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Vn&&E(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,A)};function E(C,b){const P=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,P,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,P,f,_,null)}function S(C,b,P,y){let x=null;const A=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=x.uuid,O=b.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let L=W[O];L===void 0&&(L=x.clone(),W[O]=L,b.addEventListener("dispose",I)),x=L}if(x.visible=b.visible,x.wireframe=b.wireframe,y===Vn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=P}return x}function v(C,b,P,y,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Vn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const O=e.update(C),W=C.material;if(Array.isArray(W)){const L=O.groups;for(let N=0,V=L.length;N<V;N++){const H=L[N],se=W[H.materialIndex];if(se&&se.visible){const me=S(C,se,y,x);C.onBeforeShadow(n,C,b,P,O,me,H),n.renderBufferDirect(P,null,O,me,C,H),C.onAfterShadow(n,C,b,P,O,me,H)}}}else if(W.visible){const L=S(C,W,y,x);C.onBeforeShadow(n,C,b,P,O,L,null),n.renderBufferDirect(P,null,O,L,C,null),C.onAfterShadow(n,C,b,P,O,L,null)}}const z=C.children;for(let O=0,W=z.length;O<W;O++)v(z[O],b,P,y,x)}function I(C){C.target.removeEventListener("dispose",I);for(const P in c){const y=c[P],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const mx={[Ia]:Ua,[Na]:Oa,[za]:ka,[gs]:Fa,[Ua]:Ia,[Oa]:Na,[ka]:za,[Fa]:gs};function gx(n,e){function t(){let F=!1;const Se=new dt;let le=null;const Re=new dt(0,0,0,0);return{setMask:function(de){le!==de&&!F&&(n.colorMask(de,de,de,de),le=de)},setLocked:function(de){F=de},setClear:function(de,Q,Pe,$e,mt){mt===!0&&(de*=$e,Q*=$e,Pe*=$e),Se.set(de,Q,Pe,$e),Re.equals(Se)===!1&&(n.clearColor(de,Q,Pe,$e),Re.copy(Se))},reset:function(){F=!1,le=null,Re.set(-1,0,0,0)}}}function i(){let F=!1,Se=!1,le=null,Re=null,de=null;return{setReversed:function(Q){if(Se!==Q){const Pe=e.get("EXT_clip_control");Q?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Se=Q;const $e=de;de=null,this.setClear($e)}},getReversed:function(){return Se},setTest:function(Q){Q?ce(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Q){le!==Q&&!F&&(n.depthMask(Q),le=Q)},setFunc:function(Q){if(Se&&(Q=mx[Q]),Re!==Q){switch(Q){case Ia:n.depthFunc(n.NEVER);break;case Ua:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Fa:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=Q}},setLocked:function(Q){F=Q},setClear:function(Q){de!==Q&&(Se&&(Q=1-Q),n.clearDepth(Q),de=Q)},reset:function(){F=!1,le=null,Re=null,de=null,Se=!1}}}function s(){let F=!1,Se=null,le=null,Re=null,de=null,Q=null,Pe=null,$e=null,mt=null;return{setTest:function(ot){F||(ot?ce(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){Se!==ot&&!F&&(n.stencilMask(ot),Se=ot)},setFunc:function(ot,un,Fn){(le!==ot||Re!==un||de!==Fn)&&(n.stencilFunc(ot,un,Fn),le=ot,Re=un,de=Fn)},setOp:function(ot,un,Fn){(Q!==ot||Pe!==un||$e!==Fn)&&(n.stencilOp(ot,un,Fn),Q=ot,Pe=un,$e=Fn)},setLocked:function(ot){F=ot},setClear:function(ot){mt!==ot&&(n.clearStencil(ot),mt=ot)},reset:function(){F=!1,Se=null,le=null,Re=null,de=null,Q=null,Pe=null,$e=null,mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,I=null,C=null,b=new nt(0,0,0),P=0,y=!1,x=null,A=null,z=null,O=null,W=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=V>=2);let se=null,me={};const D=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),re=new dt().fromArray(D),G=new dt().fromArray(Z);function $(F,Se,le,Re){const de=new Uint8Array(4),Q=n.createTexture();n.bindTexture(F,Q),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<le;Pe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Se+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Q}const ae={};ae[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(gs),ne(!1),_e(mc),ce(n.CULL_FACE),T(ii);function ce(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Fe(F,Se){return u[F]!==Se?(n.bindFramebuffer(F,Se),u[F]=Se,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Se),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function oe(F,Se){let le=f,Re=!1;if(F){le=d.get(Se),le===void 0&&(le=[],d.set(Se,le));const de=F.textures;if(le.length!==de.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Pe=de.length;Q<Pe;Q++)le[Q]=n.COLOR_ATTACHMENT0+Q;le.length=de.length,Re=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Re=!0);Re&&n.drawBuffers(le)}function Ne(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ke={[Ei]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[bf]:n.FUNC_REVERSE_SUBTRACT};ke[Tf]=n.MIN,ke[Af]=n.MAX;const Ue={[Rf]:n.ZERO,[Cf]:n.ONE,[Pf]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[zf]:n.SRC_ALPHA_SATURATE,[Uf]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[Nf]:n.ONE_MINUS_DST_COLOR,[If]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[Of]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Bf]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,Se,le,Re,de,Q,Pe,$e,mt,ot){if(F===ii){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(ce(n.BLEND),_=!0),F!==Ef){if(F!==m||ot!==y){if((p!==Ei||v!==Ei)&&(n.blendEquation(n.FUNC_ADD),p=Ei,v=Ei),ot)switch(F){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,S=null,I=null,C=null,b.set(0,0,0),P=0,m=F,y=ot}return}de=de||Se,Q=Q||le,Pe=Pe||Re,(Se!==p||de!==v)&&(n.blendEquationSeparate(ke[Se],ke[de]),p=Se,v=de),(le!==E||Re!==S||Q!==I||Pe!==C)&&(n.blendFuncSeparate(Ue[le],Ue[Re],Ue[Q],Ue[Pe]),E=le,S=Re,I=Q,C=Pe),($e.equals(b)===!1||mt!==P)&&(n.blendColor($e.r,$e.g,$e.b,mt),b.copy($e),P=mt),m=F,y=!1}function pe(F,Se){F.side===vn?ge(n.CULL_FACE):ce(n.CULL_FACE);let le=F.side===Gt;Se&&(le=!le),ne(le),F.blending===ds&&F.transparent===!1?T(ii):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),we(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){x!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),x=F)}function _e(F){F!==yf?(ce(n.CULL_FACE),F!==A&&(F===mc?n.cullFace(n.BACK):F===Sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),A=F}function j(F){F!==z&&(N&&n.lineWidth(F),z=F)}function we(F,Se,le){F?(ce(n.POLYGON_OFFSET_FILL),(O!==Se||W!==le)&&(n.polygonOffset(Se,le),O=Se,W=le)):ge(n.POLYGON_OFFSET_FILL)}function ue(F){F?ce(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function be(F){F===void 0&&(F=n.TEXTURE0+L-1),se!==F&&(n.activeTexture(F),se=F)}function Ze(F,Se,le){le===void 0&&(se===null?le=n.TEXTURE0+L-1:le=se);let Re=me[le];Re===void 0&&(Re={type:void 0,texture:void 0},me[le]=Re),(Re.type!==F||Re.texture!==Se)&&(se!==le&&(n.activeTexture(le),se=le),n.bindTexture(F,Se||ae[F]),Re.type=F,Re.texture=Se)}function R(){const F=me[se];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function Ve(F){G.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function He(F,Se){let le=c.get(Se);le===void 0&&(le=new WeakMap,c.set(Se,le));let Re=le.get(F);Re===void 0&&(Re=n.getUniformBlockIndex(Se,F.name),le.set(F,Re))}function Me(F,Se){const Re=c.get(Se).get(F);l.get(Se)!==Re&&(n.uniformBlockBinding(Se,Re,F.__bindingPointIndex),l.set(Se,Re))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,me={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,I=null,C=null,b=new nt(0,0,0),P=0,y=!1,x=null,A=null,z=null,O=null,W=null,re.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:ge,bindFramebuffer:Fe,drawBuffers:oe,useProgram:Ne,setBlending:T,setMaterial:pe,setFlipSided:ne,setCullFace:_e,setLineWidth:j,setPolygonOffset:we,setScissorTest:ue,activeTexture:be,bindTexture:Ze,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:Ie,texImage3D:ie,updateUBOMapping:He,uniformBlockBinding:Me,texStorage2D:xe,texStorage3D:Ce,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:Te,viewport:Ve,reset:qe}}function _x(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):mo("canvas")}function _(R,M,X){let K=1;const ee=Ze(R);if((ee.width>X||ee.height>X)&&(K=X/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(K*ee.width),De=Math.floor(K*ee.height);u===void 0&&(u=g(J,De));const xe=M?g(J,De):u;return xe.width=J,xe.height=De,xe.getContext("2d").drawImage(R,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+De+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,X,K,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===n.RED&&(X===n.FLOAT&&(J=n.R32F),X===n.HALF_FLOAT&&(J=n.R16F),X===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.R8UI),X===n.UNSIGNED_SHORT&&(J=n.R16UI),X===n.UNSIGNED_INT&&(J=n.R32UI),X===n.BYTE&&(J=n.R8I),X===n.SHORT&&(J=n.R16I),X===n.INT&&(J=n.R32I)),M===n.RG&&(X===n.FLOAT&&(J=n.RG32F),X===n.HALF_FLOAT&&(J=n.RG16F),X===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RG8UI),X===n.UNSIGNED_SHORT&&(J=n.RG16UI),X===n.UNSIGNED_INT&&(J=n.RG32UI),X===n.BYTE&&(J=n.RG8I),X===n.SHORT&&(J=n.RG16I),X===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGB8UI),X===n.UNSIGNED_SHORT&&(J=n.RGB16UI),X===n.UNSIGNED_INT&&(J=n.RGB32UI),X===n.BYTE&&(J=n.RGB8I),X===n.SHORT&&(J=n.RGB16I),X===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),X===n.UNSIGNED_INT&&(J=n.RGBA32UI),X===n.BYTE&&(J=n.RGBA8I),X===n.SHORT&&(J=n.RGBA16I),X===n.INT&&(J=n.RGBA32I)),M===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const De=ee?fo:st.getTransfer(K);X===n.FLOAT&&(J=n.RGBA32F),X===n.HALF_FLOAT&&(J=n.RGBA16F),X===n.UNSIGNED_BYTE&&(J=De===ut?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,M){let X;return R?M===null||M===Di||M===ar?X=n.DEPTH24_STENCIL8:M===Rn?X=n.DEPTH32F_STENCIL8:M===or&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===ar?X=n.DEPTH_COMPONENT24:M===Rn?X=n.DEPTH_COMPONENT32F:M===or&&(X=n.DEPTH_COMPONENT16),X}function I(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),P(M),M.isVideoTexture&&h.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),x(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,K=d.get(X);if(K){const ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys(K).length===0&&d.delete(X)}i.remove(R)}function y(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const X=R.source,K=d.get(X);delete K[M.__cacheKey],o.memory.textures--}function x(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let K=0,ee=X.length;K<ee;K++){const J=i.get(X[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(X[K])}i.remove(R)}let A=0;function z(){A=0}function O(){const R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const X=i.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,R,M);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function N(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ae(X,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function V(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ae(X,R,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function H(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ce(X,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}const se={[xs]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},me={[en]:n.NEAREST,[$f]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Io]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},D={[Qf]:n.NEVER,[rp]:n.ALWAYS,[ep]:n.LESS,[Au]:n.LEQUAL,[tp]:n.EQUAL,[sp]:n.GEQUAL,[np]:n.GREATER,[ip]:n.NOTEQUAL};function Z(R,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===Io||M.magFilter===br||M.magFilter===Ri||M.minFilter===An||M.minFilter===Io||M.minFilter===br||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,se[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,D[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==br&&M.minFilter!==Ri||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));const J=W(M);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[J].usedTimes++;const De=ee[R.__cacheKey];De!==void 0&&(ee[R.__cacheKey].usedTimes--,De.usedTimes===0&&y(M)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return X}function G(R,M,X){return Math.floor(Math.floor(R/X)/M)}function $(R,M,X,K){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,X,K,M.data);else{J.sort((ie,Te)=>ie.start-Te.start);let De=0;for(let ie=1;ie<J.length;ie++){const Te=J[De],Ve=J[ie],He=Te.start+Te.count,Me=G(Ve.start,M.width,4),qe=G(Te.start,M.width,4);Ve.start<=He+1&&Me===qe&&G(Ve.start+Ve.count-1,M.width,4)===Me?Te.count=Math.max(Te.count,Ve.start+Ve.count-Te.start):(++De,J[De]=Ve)}J.length=De+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ie=0,Te=J.length;ie<Te;ie++){const Ve=J[ie],He=Math.floor(Ve.start/4),Me=Math.ceil(Ve.count/4),qe=He%M.width,F=Math.floor(He/M.width),Se=Me,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,qe,F,Se,le,X,K,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function ae(R,M,X){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);const ee=re(R,M),J=M.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+X);const De=i.get(J);if(J.version!==De.__version||ee===!0){t.activeTexture(n.TEXTURE0+X);const xe=st.getPrimaries(st.workingColorSpace),Ce=M.colorSpace===ti?null:st.getPrimaries(M.colorSpace),Ie=M.colorSpace===ti||xe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=_(M.image,!1,s.maxTextureSize);ie=be(M,ie);const Te=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type);let He=S(M.internalFormat,Te,Ve,M.colorSpace,M.isVideoTexture);Z(K,M);let Me;const qe=M.mipmaps,F=M.isVideoTexture!==!0,Se=De.__version===void 0||ee===!0,le=J.dataReady,Re=I(M,ie);if(M.isDepthTexture)He=v(M.format===cr,M.type),Se&&(F?t.texStorage2D(n.TEXTURE_2D,1,He,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Te,Ve,null));else if(M.isDataTexture)if(qe.length>0){F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,qe[0].width,qe[0].height);for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],F?le&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Ve,Me.data):t.texImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Te,Ve,Me.data);M.generateMipmaps=!1}else F?(Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,ie.width,ie.height),le&&$(M,ie,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Te,Ve,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,He,qe[0].width,qe[0].height,ie.depth);for(let de=0,Q=qe.length;de<Q;de++)if(Me=qe[de],M.format!==Mn)if(Te!==null)if(F){if(le)if(M.layerUpdates.size>0){const Pe=Jc(Me.width,Me.height,M.format,M.type);for(const $e of M.layerUpdates){const mt=Me.data.subarray($e*Pe/Me.data.BYTES_PER_ELEMENT,($e+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,$e,Me.width,Me.height,1,Te,mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ie.depth,Te,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,He,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ie.depth,Te,Ve,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,He,Me.width,Me.height,ie.depth,0,Te,Ve,Me.data)}else{F&&Se&&t.texStorage2D(n.TEXTURE_2D,Re,He,qe[0].width,qe[0].height);for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],M.format!==Mn?Te!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?le&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Te,Ve,Me.data):t.texImage2D(n.TEXTURE_2D,de,He,Me.width,Me.height,0,Te,Ve,Me.data)}else if(M.isDataArrayTexture)if(F){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,He,ie.width,ie.height,ie.depth),le)if(M.layerUpdates.size>0){const de=Jc(ie.width,ie.height,M.format,M.type);for(const Q of M.layerUpdates){const Pe=ie.data.subarray(Q*de/ie.data.BYTES_PER_ELEMENT,(Q+1)*de/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Te,Ve,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ve,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ie.width,ie.height,ie.depth,0,Te,Ve,ie.data);else if(M.isData3DTexture)F?(Se&&t.texStorage3D(n.TEXTURE_3D,Re,He,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ve,ie.data)):t.texImage3D(n.TEXTURE_3D,0,He,ie.width,ie.height,ie.depth,0,Te,Ve,ie.data);else if(M.isFramebufferTexture){if(Se)if(F)t.texStorage2D(n.TEXTURE_2D,Re,He,ie.width,ie.height);else{let de=ie.width,Q=ie.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,He,de,Q,0,Te,Ve,null),de>>=1,Q>>=1}}else if(qe.length>0){if(F&&Se){const de=Ze(qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,He,de.width,de.height)}for(let de=0,Q=qe.length;de<Q;de++)Me=qe[de],F?le&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Te,Ve,Me):t.texImage2D(n.TEXTURE_2D,de,He,Te,Ve,Me);M.generateMipmaps=!1}else if(F){if(Se){const de=Ze(ie);t.texStorage2D(n.TEXTURE_2D,Re,He,de.width,de.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,ie)}else t.texImage2D(n.TEXTURE_2D,0,He,Te,Ve,ie);m(M)&&p(K),De.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ce(R,M,X){if(M.image.length!==6)return;const K=re(R,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const J=i.get(ee);if(ee.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+X);const De=st.getPrimaries(st.workingColorSpace),xe=M.colorSpace===ti?null:st.getPrimaries(M.colorSpace),Ce=M.colorSpace===ti||De===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let Q=0;Q<6;Q++)!Ie&&!ie?Te[Q]=_(M.image[Q],!0,s.maxCubemapSize):Te[Q]=ie?M.image[Q].image:M.image[Q],Te[Q]=be(M,Te[Q]);const Ve=Te[0],He=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),qe=S(M.internalFormat,He,Me,M.colorSpace),F=M.isVideoTexture!==!0,Se=J.__version===void 0||K===!0,le=ee.dataReady;let Re=I(M,Ve);Z(n.TEXTURE_CUBE_MAP,M);let de;if(Ie){F&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){de=Te[Q].mipmaps;for(let Pe=0;Pe<de.length;Pe++){const $e=de[Pe];M.format!==Mn?He!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,0,0,$e.width,$e.height,He,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,qe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,0,0,$e.width,$e.height,He,Me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe,qe,$e.width,$e.height,0,He,Me,$e.data)}}}else{if(de=M.mipmaps,F&&Se){de.length>0&&Re++;const Q=Ze(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te[Q].width,Te[Q].height,He,Me,Te[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Te[Q].width,Te[Q].height,0,He,Me,Te[Q].data);for(let Pe=0;Pe<de.length;Pe++){const mt=de[Pe].image[Q].image;F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,0,0,mt.width,mt.height,He,Me,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,qe,mt.width,mt.height,0,He,Me,mt.data)}}else{F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,Me,Te[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,He,Me,Te[Q]);for(let Pe=0;Pe<de.length;Pe++){const $e=de[Pe];F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,0,0,He,Me,$e.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe+1,qe,He,Me,$e.image[Q])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,X,K,ee,J){const De=r.convert(X.format,X.colorSpace),xe=r.convert(X.type),Ce=S(X.internalFormat,De,xe,X.colorSpace),Ie=i.get(M),ie=i.get(X);if(ie.__renderTarget=M,!Ie.__hasExternalTextures){const Te=Math.max(1,M.width>>J),Ve=Math.max(1,M.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,Ce,Te,Ve,M.depth,0,De,xe,null):t.texImage2D(ee,J,Ce,Te,Ve,0,De,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,ie.__webglTexture,0,j(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(R,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,J=v(M.stencilBuffer,ee),De=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=j(M);we(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,J,M.width,M.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,R)}else{const K=M.textures;for(let ee=0;ee<K.length;ee++){const J=K[ee],De=r.convert(J.format,J.colorSpace),xe=r.convert(J.type),Ce=S(J.internalFormat,De,xe,J.colorSpace),Ie=j(M);X&&we(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Ce,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const ee=K.__webglTexture,J=j(M);if(M.depthTexture.format===lr)we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===cr)we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?oe(M.__webglFramebuffer[0],R):oe(M.__webglFramebuffer,R)}else if(X){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),Fe(M.__webglDepthbuffer[K],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Fe(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(R,M,X){const K=i.get(R);M!==void 0&&ge(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Ne(R)}function Ue(R){const M=R.texture,X=i.get(R),K=i.get(M);R.addEventListener("dispose",b);const ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,De=ee.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)X.__webglFramebuffer[xe][Ce]=n.createFramebuffer()}else X.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)X.__webglFramebuffer[xe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(De)for(let xe=0,Ce=ee.length;xe<Ce;xe++){const Ie=i.get(ee[xe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<ee.length;xe++){const Ce=ee[xe];X.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const Ie=r.convert(Ce.format,Ce.colorSpace),ie=r.convert(Ce.type),Te=S(Ce.internalFormat,Ie,ie,Ce.colorSpace,R.isXRRenderTarget===!0),Ve=j(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Z(n.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ge(X.__webglFramebuffer[xe][Ce],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else ge(X.__webglFramebuffer[xe],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Ce=ee.length;xe<Ce;xe++){const Ie=ee[xe],ie=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Z(n.TEXTURE_2D,Ie),ge(X.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),Z(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)ge(X.__webglFramebuffer[Ce],R,M,n.COLOR_ATTACHMENT0,xe,Ce);else ge(X.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,xe,0);m(M)&&p(xe),t.unbindTexture()}R.depthBuffer&&Ne(R)}function T(R){const M=R.textures;for(let X=0,K=M.length;X<K;X++){const ee=M[X];if(m(ee)){const J=E(R),De=i.get(ee).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const pe=[],ne=[];function _e(R){if(R.samples>0){if(we(R)===!1){const M=R.textures,X=R.width,K=R.height;let ee=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(R),xe=M.length>1;if(xe)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const ie=i.get(M[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,X,K,0,0,X,K,ee,n.NEAREST),l===!0&&(pe.length=0,ne.length=0,pe.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(J),ne.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ie]);const ie=i.get(M[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function j(R){return Math.min(s.maxSamples,R.samples)}function we(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function be(R,M){const X=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Ms&&X!==ti&&(st.getTransfer(X)===ut?(K!==Mn||ee!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=ke,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=we}function vx(n,e){function t(i,s=ti){let r;const o=st.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xu)return n.BYTE;if(i===Mu)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===_r)return n.HALF_FLOAT;if(i===Su)return n.ALPHA;if(i===Eu)return n.RGB;if(i===Mn)return n.RGBA;if(i===lr)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===Il)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===zl)return n.RGBA_INTEGER;if(i===so||i===ro||i===oo||i===ao)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Va||i===Wa||i===Xa||i===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Za||i===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===Za)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$a)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===Ja||i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ka)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===hl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bu||i===dl||i===fl||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ci({vertexShader:xx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Ds{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new yx,m=t.getContextAttributes();let p=null,E=null;const S=[],v=[],I=new ve;let C=null;const b=new Ft;b.viewport=new dt;const P=new Ft;P.viewport=new dt;const y=[b,P],x=new Vm;let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=S[G];return $===void 0&&($=new ea,S[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=S[G];return $===void 0&&($=new ea,S[G]=$),$.getGripSpace()},this.getHand=function(G){let $=S[G];return $===void 0&&($=new ea,S[G]=$),$.getHandSpace()};function O(G){const $=v.indexOf(G.inputSource);if($===-1)return;const ae=S[$];ae!==void 0&&(ae.update(G.inputSource,G.frame,c||o),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let G=0;G<S.length;G++){const $=v[G];$!==null&&(v[G]=null,S[G].disconnect($))}A=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ce=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?cr:lr,ce=m.stencil?ar:Di);const Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ai(d.textureWidth,d.textureHeight,{format:Mn,type:Dn,depthTexture:new Ou(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ai(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function L(G){for(let $=0;$<G.removed.length;$++){const ae=G.removed[$],ce=v.indexOf(ae);ce>=0&&(v[ce]=null,S[ce].disconnect(ae))}for(let $=0;$<G.added.length;$++){const ae=G.added[$];let ce=v.indexOf(ae);if(ce===-1){for(let Fe=0;Fe<S.length;Fe++)if(Fe>=v.length){v.push(ae),ce=Fe;break}else if(v[Fe]===null){v[Fe]=ae,ce=Fe;break}if(ce===-1)break}const ge=S[ce];ge&&ge.connect(ae)}}const N=new U,V=new U;function H(G,$,ae){N.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);const ce=N.distanceTo(V),ge=$.projectionMatrix.elements,Fe=ae.projectionMatrix.elements,oe=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],Ue=(ge[9]-1)/ge[5],T=(ge[8]-1)/ge[0],pe=(Fe[8]+1)/Fe[0],ne=oe*T,_e=oe*pe,j=ce/(-T+pe),we=j*-T;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(we),G.translateZ(j),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ge[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ue=oe+j,be=Ne+j,Ze=ne-we,R=_e+(ce-we),M=ke*Ne/be*ue,X=Ue*Ne/be*ue;G.projectionMatrix.makePerspective(Ze,R,M,X,ue,be),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function se(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,ae=G.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),x.near=P.near=b.near=$,x.far=P.far=b.far=ae,(A!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,z=x.far),b.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,x.layers.mask=b.layers.mask|P.layers.mask;const ce=G.parent,ge=x.cameras;se(x,ce);for(let Fe=0;Fe<ge.length;Fe++)se(ge[Fe],ce);ge.length===2?H(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),me(G,x,ce)};function me(G,$,ae){ae===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=hr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let D=null;function Z(G,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let ce=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let oe=0;oe<ae.length;oe++){const Ne=ae[oe];let ke=null;if(f!==null)ke=f.getViewport(Ne);else{const T=u.getViewSubImage(d,Ne);ke=T.viewport,oe===0&&(e.setRenderTargetTextures(E,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(E))}let Ue=y[oe];Ue===void 0&&(Ue=new Ft,Ue.layers.enable(oe),Ue.viewport=new dt,y[oe]=Ue),Ue.matrix.fromArray(Ne.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ne.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),oe===0&&(x.matrix.copy(Ue.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Ue)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const oe=u.getDepthInformation(ae[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,s.renderState)}}for(let ae=0;ae<S.length;ae++){const ce=v[ae],ge=S[ae];ce!==null&&ge!==void 0&&ge.update(ce,$,c||o)}D&&D(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const re=new $u;re.setAnimationLoop(Z),this.setAnimationLoop=function(G){D=G},this.dispose=function(){}}}const vi=new In,Ex=new lt;function wx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,vi.copy(v),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(vi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;i.uniformBlockBinding(E,v)}function c(E,S){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(E,I);const C=e.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function h(E){const S=u();E.__bindingPointIndex=S;const v=n.createBuffer(),I=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],v=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,b=v.length;C<b;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,x=P.length;y<x;y++){const A=P[y];if(f(A,C,y,I)===!0){const z=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let L=0;L<O.length;L++){const N=O[L],V=_(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+W,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,S,v,I){const C=E.value,b=S+"_"+v;if(I[b]===void 0)return typeof C=="number"||typeof C=="boolean"?I[b]=C:I[b]=C.clone(),!0;{const P=I[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(E){const S=E.uniforms;let v=0;const I=16;for(let b=0,P=S.length;b<P;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,A=y.length;x<A;x++){const z=y[x],O=Array.isArray(z.value)?z.value:[z.value];for(let W=0,L=O.length;W<L;W++){const N=O[W],V=_(N),H=v%I,se=H%V.boundary,me=H+se;v+=se,me!==0&&I-me<V.storage&&(v+=I-me),z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=V.storage}}}const C=v%I;return C>0&&(v+=I-C),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Tx{constructor(e={}){const{canvas:t=Ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let I=!1;this._outputColorSpace=Wt;let C=0,b=0,P=null,y=-1,x=null;const A=new dt,z=new dt;let O=null;const W=new nt(0);let L=0,N=t.width,V=t.height,H=1,se=null,me=null;const D=new dt(0,0,N,V),Z=new dt(0,0,N,V);let re=!1;const G=new Hl;let $=!1,ae=!1;const ce=new lt,ge=new lt,Fe=new U,oe=new dt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Ue(){return P===null?H:1}let T=i;function pe(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),T===null){const k="webgl2";if(T=pe(k,w),T===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,_e,j,we,ue,be,Ze,R,M,X,K,ee,J,De,xe,Ce,Ie,ie,Te,Ve,He,Me,qe,F;function Se(){ne=new z_(T),ne.init(),Me=new vx(T,ne),_e=new C_(T,ne,e,Me),j=new gx(T,ne),_e.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),we=new k_(T),ue=new ix,be=new _x(T,ne,j,ue,_e,Me,we),Ze=new L_(v),R=new N_(v),M=new Xm(T),qe=new A_(T,M),X=new F_(T,M,we,qe),K=new H_(T,X,M,we),Te=new B_(T,_e,be),Ce=new P_(ue),ee=new nx(v,Ze,R,ne,_e,qe,Ce),J=new wx(v,ue),De=new rx,xe=new ux(ne),ie=new T_(v,Ze,R,j,K,f,l),Ie=new px(v,K,_e),F=new bx(T,we,_e,j),Ve=new R_(T,ne,we),He=new O_(T,ne,we),we.programs=ee.programs,v.capabilities=_e,v.extensions=ne,v.properties=ue,v.renderLists=De,v.shadowMap=Ie,v.state=j,v.info=we}Se();const le=new Sx(v,T);this.xr=le,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(N,V,!1))},this.getSize=function(w){return w.set(N,V)},this.setSize=function(w,k,q=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,V=k,t.width=Math.floor(w*H),t.height=Math.floor(k*H),q===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(N*H,V*H).floor()},this.setDrawingBufferSize=function(w,k,q){N=w,V=k,H=q,t.width=Math.floor(w*q),t.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,k,q,Y){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,k,q,Y),j.viewport(A.copy(D).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,k,q,Y){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,k,q,Y),j.scissor(z.copy(Z).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){j.setScissorTest(re=w)},this.setOpaqueSort=function(w){se=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let Y=0;if(w){let B=!1;if(P!==null){const fe=P.texture.format;B=fe===zl||fe===Nl||fe===Ul}if(B){const fe=P.texture.type,Ee=fe===Dn||fe===Di||fe===or||fe===ar||fe===Ll||fe===Dl,Le=ie.getClearColor(),Ae=ie.getClearAlpha(),We=Le.r,Xe=Le.g,Oe=Le.b;Ee?(g[0]=We,g[1]=Xe,g[2]=Oe,g[3]=Ae,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=We,_[1]=Xe,_[2]=Oe,_[3]=Ae,T.clearBufferiv(T.COLOR,0,_))}else Y|=T.COLOR_BUFFER_BIT}k&&(Y|=T.DEPTH_BUFFER_BIT),q&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ie.dispose(),De.dispose(),xe.dispose(),ue.dispose(),Ze.dispose(),R.dispose(),K.dispose(),qe.dispose(),F.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",lc),le.removeEventListener("sessionend",cc),ui.stop()};function Re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=we.autoReset,k=Ie.enabled,q=Ie.autoUpdate,Y=Ie.needsUpdate,B=Ie.type;Se(),we.autoReset=w,Ie.enabled=k,Ie.autoUpdate=q,Ie.needsUpdate=Y,Ie.type=B}function Q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const k=w.target;k.removeEventListener("dispose",Pe),$e(k)}function $e(w){mt(w),ue.remove(w)}function mt(w){const k=ue.get(w).programs;k!==void 0&&(k.forEach(function(q){ee.releaseProgram(q)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,Y,B,fe){k===null&&(k=Ne);const Ee=B.isMesh&&B.matrixWorld.determinant()<0,Le=mf(w,k,q,Y,B);j.setMaterial(Y,Ee);let Ae=q.index,We=1;if(Y.wireframe===!0){if(Ae=X.getWireframeAttribute(q),Ae===void 0)return;We=2}const Xe=q.drawRange,Oe=q.attributes.position;let Qe=Xe.start*We,ct=(Xe.start+Xe.count)*We;fe!==null&&(Qe=Math.max(Qe,fe.start*We),ct=Math.min(ct,(fe.start+fe.count)*We)),Ae!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ae.count)):Oe!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Oe.count));const Et=ct-Qe;if(Et<0||Et===1/0)return;qe.setup(B,Y,Le,q,Ae);let gt,ft=Ve;if(Ae!==null&&(gt=M.get(Ae),ft=He,ft.setIndex(gt)),B.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*Ue()),ft.setMode(T.LINES)):ft.setMode(T.TRIANGLES);else if(B.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),j.setLineWidth(Be*Ue()),B.isLineSegments?ft.setMode(T.LINES):B.isLineLoop?ft.setMode(T.LINE_LOOP):ft.setMode(T.LINE_STRIP)}else B.isPoints?ft.setMode(T.POINTS):B.isSprite&&ft.setMode(T.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,yt=B._multiDrawCounts,it=B._multiDrawCount,Yt=Ae?M.get(Ae).bytesPerElement:1,ki=ue.get(Y).currentProgram.getUniforms();for(let Zt=0;Zt<it;Zt++)ki.setValue(T,"_gl_DrawID",Zt),ft.render(Be[Zt]/Yt,yt[Zt])}else if(B.isInstancedMesh)ft.renderInstances(Qe,Et,B.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Be);ft.renderInstances(Qe,Et,yt)}else ft.render(Qe,Et)};function ot(w,k,q){w.transparent===!0&&w.side===vn&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,wr(w,k,q),w.side=oi,w.needsUpdate=!0,wr(w,k,q),w.side=vn):wr(w,k,q)}this.compile=function(w,k,q=null){q===null&&(q=w),p=xe.get(q),p.init(k),S.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let Ee=0;Ee<fe.length;Ee++){const Le=fe[Ee];ot(Le,q,B),Y.add(Le)}else ot(fe,q,B),Y.add(fe)}),p=S.pop(),Y},this.compileAsync=function(w,k,q=null){const Y=this.compile(w,k,q);return new Promise(B=>{function fe(){if(Y.forEach(function(Ee){ue.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){B(w);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let un=null;function Fn(w){un&&un(w)}function lc(){ui.stop()}function cc(){ui.start()}const ui=new $u;ui.setAnimationLoop(Fn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(w){un=w,le.setAnimationLoop(w),w===null?ui.stop():ui.start()},le.addEventListener("sessionstart",lc),le.addEventListener("sessionend",cc),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,P),p=xe.get(w,S.length),p.init(k),S.push(p),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,$=Ce.init(this.clippingPlanes,ae),m=De.get(w,E.length),m.init(),E.push(m),le.enabled===!0&&le.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Lo(fe,k,-1/0,v.sortObjects)}Lo(w,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,me),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&ie.addToRenderList(m,w),this.info.render.frame++,$===!0&&Ce.beginShadows();const q=p.state.shadowsArray;Ie.render(q,w,k),$===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const fe=k.cameras;if(B.length>0)for(let Ee=0,Le=fe.length;Ee<Le;Ee++){const Ae=fe[Ee];uc(Y,B,w,Ae)}ke&&ie.render(w);for(let Ee=0,Le=fe.length;Ee<Le;Ee++){const Ae=fe[Ee];hc(m,w,Ae,Ae.viewport)}}else B.length>0&&uc(Y,B,w,k),ke&&ie.render(w),hc(m,w,k);P!==null&&b===0&&(be.updateMultisampleRenderTarget(P),be.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,k),qe.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],$===!0&&Ce.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Lo(w,k,q,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){Y&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const Ee=K.update(w),Le=w.material;Le.visible&&m.push(w,Ee,Le,q,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const Ee=K.update(w),Le=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),oe.copy(Ee.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Le)){const Ae=Ee.groups;for(let We=0,Xe=Ae.length;We<Xe;We++){const Oe=Ae[We],Qe=Le[Oe.materialIndex];Qe&&Qe.visible&&m.push(w,Ee,Qe,q,oe.z,Oe)}}else Le.visible&&m.push(w,Ee,Le,q,oe.z,null)}}const fe=w.children;for(let Ee=0,Le=fe.length;Ee<Le;Ee++)Lo(fe[Ee],k,q,Y)}function hc(w,k,q,Y){const B=w.opaque,fe=w.transmissive,Ee=w.transparent;p.setupLightsView(q),$===!0&&Ce.setGlobalState(v.clippingPlanes,q),Y&&j.viewport(A.copy(Y)),B.length>0&&Er(B,k,q),fe.length>0&&Er(fe,k,q),Ee.length>0&&Er(Ee,k,q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function uc(w,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?_r:Dn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const fe=p.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||A;fe.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const Le=v.getRenderTarget(),Ae=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(fe),v.getClearColor(W),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ie.render(q);const Xe=v.toneMapping;v.toneMapping=si;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),$===!0&&Ce.setGlobalState(v.clippingPlanes,Y),Er(w,q,Y),be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,Et=k.length;ct<Et;ct++){const gt=k[ct],ft=gt.object,Be=gt.geometry,yt=gt.material,it=gt.group;if(yt.side===vn&&ft.layers.test(Y.layers)){const Yt=yt.side;yt.side=Gt,yt.needsUpdate=!0,dc(ft,q,Y,Be,yt,it),yt.side=Yt,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(be.updateMultisampleRenderTarget(fe),be.updateRenderTargetMipmap(fe))}v.setRenderTarget(Le,Ae,We),v.setClearColor(W,L),Oe!==void 0&&(Y.viewport=Oe),v.toneMapping=Xe}function Er(w,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let B=0,fe=w.length;B<fe;B++){const Ee=w[B],Le=Ee.object,Ae=Ee.geometry,We=Ee.group;let Xe=Ee.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),Le.layers.test(q.layers)&&dc(Le,k,q,Ae,Xe,We)}}function dc(w,k,q,Y,B,fe){w.onBeforeRender(v,k,q,Y,B,fe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,k,q,Y,w,fe),B.transparent===!0&&B.side===vn&&B.forceSinglePass===!1?(B.side=Gt,B.needsUpdate=!0,v.renderBufferDirect(q,k,Y,B,w,fe),B.side=oi,B.needsUpdate=!0,v.renderBufferDirect(q,k,Y,B,w,fe),B.side=vn):v.renderBufferDirect(q,k,Y,B,w,fe),w.onAfterRender(v,k,q,Y,B,fe)}function wr(w,k,q){k.isScene!==!0&&(k=Ne);const Y=ue.get(w),B=p.state.lights,fe=p.state.shadowsArray,Ee=B.state.version,Le=ee.getParameters(w,B.state,fe,k,q),Ae=ee.getProgramCacheKey(Le);let We=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?R:Ze).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Pe),We=new Map,Y.programs=We);let Xe=We.get(Ae);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===Ee)return pc(w,Le),Xe}else Le.uniforms=ee.getUniforms(w),w.onBeforeCompile(Le,v),Xe=ee.acquireProgram(Le,Ae),We.set(Ae,Xe),Y.uniforms=Le.uniforms;const Oe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=Ce.uniform),pc(w,Le),Y.needsLights=_f(w),Y.lightsStateVersion=Ee,Y.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function fc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=co.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function pc(w,k){const q=ue.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function mf(w,k,q,Y,B){k.isScene!==!0&&(k=Ne),be.resetTextureUnits();const fe=k.fog,Ee=Y.isMeshStandardMaterial?k.environment:null,Le=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,Ae=(Y.isMeshStandardMaterial?R:Ze).get(Y.envMap||Ee),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let Et=si;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=v.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=gt!==void 0?gt.length:0,Be=ue.get(Y),yt=p.state.lights;if($===!0&&(ae===!0||w!==x)){const Ot=w===x&&Y.id===y;Ce.setState(Y,w,Ot)}let it=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==yt.state.version||Be.outputColorSpace!==Le||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Ae||Y.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ce.numPlanes||Be.numIntersection!==Ce.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Xe||Be.morphTargets!==Oe||Be.morphNormals!==Qe||Be.morphColors!==ct||Be.toneMapping!==Et||Be.morphTargetsCount!==ft)&&(it=!0):(it=!0,Be.__version=Y.version);let Yt=Be.currentProgram;it===!0&&(Yt=wr(Y,k,B));let ki=!1,Zt=!1,ks=!1;const vt=Yt.getUniforms(),nn=Be.uniforms;if(j.useProgram(Yt.program)&&(ki=!0,Zt=!0,ks=!0),Y.id!==y&&(y=Y.id,Zt=!0),ki||x!==w){j.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),bp(ce),Tp(ce),vt.setValue(T,"projectionMatrix",ce)):vt.setValue(T,"projectionMatrix",w.projectionMatrix),vt.setValue(T,"viewMatrix",w.matrixWorldInverse);const Vt=vt.map.cameraPosition;Vt!==void 0&&Vt.setValue(T,Fe.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Zt=!0,ks=!0)}if(B.isSkinnedMesh){vt.setOptional(T,B,"bindMatrix"),vt.setOptional(T,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(T,"boneTexture",Ot.boneTexture,be))}B.isBatchedMesh&&(vt.setOptional(T,B,"batchingTexture"),vt.setValue(T,"batchingTexture",B._matricesTexture,be),vt.setOptional(T,B,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",B._indirectTexture,be),vt.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",B._colorsTexture,be));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Te.update(B,q,Yt),(Zt||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,vt.setValue(T,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(nn.envMap.value=Ae,nn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),Zt&&(vt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&gf(nn,ks),fe&&Y.fog===!0&&J.refreshFogUniforms(nn,fe),J.refreshMaterialUniforms(nn,Y,H,V,p.state.transmissionRenderTarget[w.id]),co.upload(T,fc(Be),nn,be)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(co.upload(T,fc(Be),nn,be),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(T,"center",B.center),vt.setValue(T,"modelViewMatrix",B.modelViewMatrix),vt.setValue(T,"normalMatrix",B.normalMatrix),vt.setValue(T,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ot=Y.uniformsGroups;for(let Vt=0,Do=Ot.length;Vt<Do;Vt++){const di=Ot[Vt];F.update(di,Yt),F.bind(di,Yt)}}return Yt}function gf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function _f(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,q){const Y=ue.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=k,ue.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const q=ue.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const vf=T.createFramebuffer();this.setRenderTarget=function(w,k=0,q=0){P=w,C=k,b=q;let Y=!0,B=null,fe=!1,Ee=!1;if(w){const Ae=ue.get(w);if(Ae.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(T.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)be.setupRenderTarget(w);else if(Ae.__hasExternalTextures)be.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(Ae.__boundDepthTexture!==Oe){if(Oe!==null&&ue.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(w)}}const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);const Xe=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?B=Xe[k][q]:B=Xe[k],fe=!0):w.samples>0&&be.useMultisampledRTT(w)===!1?B=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?B=Xe[q]:B=Xe,A.copy(w.viewport),z.copy(w.scissor),O=w.scissorTest}else A.copy(D).multiplyScalar(H).floor(),z.copy(Z).multiplyScalar(H).floor(),O=re;if(q!==0&&(B=vf),j.bindFramebuffer(T.FRAMEBUFFER,B)&&Y&&j.drawBuffers(w,B),j.viewport(A),j.scissor(z),j.setScissorTest(O),fe){const Ae=ue.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,q)}else if(Ee){const Ae=ue.get(w.texture),We=k;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ae.__webglTexture,q,We)}else if(w!==null&&q!==0){const Ae=ue.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ae.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(w,k,q,Y,B,fe,Ee,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){j.bindFramebuffer(T.FRAMEBUFFER,Ae);try{const We=w.textures[Le],Xe=We.format,Oe=We.type;if(!_e.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-B&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),T.readPixels(k,q,Y,B,Me.convert(Xe),Me.convert(Oe),fe))}finally{const We=P!==null?ue.get(P).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,Y,B,fe,Ee,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-B){j.bindFramebuffer(T.FRAMEBUFFER,Ae);const We=w.textures[Le],Xe=We.format,Oe=We.type;if(!_e.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.bufferData(T.PIXEL_PACK_BUFFER,fe.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Le),T.readPixels(k,q,Y,B,Me.convert(Xe),Me.convert(Oe),0);const ct=P!==null?ue.get(P).__webglFramebuffer:null;j.bindFramebuffer(T.FRAMEBUFFER,ct);const Et=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await wp(T,Et,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,fe),T.deleteBuffer(Qe),T.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,q=0){const Y=Math.pow(2,-q),B=Math.floor(w.image.width*Y),fe=Math.floor(w.image.height*Y),Ee=k!==null?k.x:0,Le=k!==null?k.y:0;be.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Ee,Le,B,fe),j.unbindTexture()};const xf=T.createFramebuffer(),Mf=T.createFramebuffer();this.copyTextureToTexture=function(w,k,q=null,Y=null,B=0,fe=null){fe===null&&(B!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let Ee,Le,Ae,We,Xe,Oe,Qe,ct,Et;const gt=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(q!==null)Ee=q.max.x-q.min.x,Le=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Xe=q.min.y,Oe=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-B);Ee=Math.floor(gt.width*sn),Le=Math.floor(gt.height*sn),w.isDataArrayTexture?Ae=gt.depth:w.isData3DTexture?Ae=Math.floor(gt.depth*sn):Ae=1,We=0,Xe=0,Oe=0}Y!==null?(Qe=Y.x,ct=Y.y,Et=Y.z):(Qe=0,ct=0,Et=0);const ft=Me.convert(k.format),Be=Me.convert(k.type);let yt;k.isData3DTexture?(be.setTexture3D(k,0),yt=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(be.setTexture2DArray(k,0),yt=T.TEXTURE_2D_ARRAY):(be.setTexture2D(k,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const it=T.getParameter(T.UNPACK_ROW_LENGTH),Yt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ki=T.getParameter(T.UNPACK_SKIP_PIXELS),Zt=T.getParameter(T.UNPACK_SKIP_ROWS),ks=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,We),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Oe);const vt=w.isDataArrayTexture||w.isData3DTexture,nn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const sn=ue.get(w),Ot=ue.get(k),Vt=ue.get(sn.__renderTarget),Do=ue.get(Ot.__renderTarget);j.bindFramebuffer(T.READ_FRAMEBUFFER,Vt.__webglFramebuffer),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,Do.__webglFramebuffer);for(let di=0;di<Ae;di++)vt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,B,Oe+di),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ue.get(k).__webglTexture,fe,Et+di)),T.blitFramebuffer(We,Xe,Ee,Le,Qe,ct,Ee,Le,T.DEPTH_BUFFER_BIT,T.NEAREST);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||ue.has(w)){const sn=ue.get(w),Ot=ue.get(k);j.bindFramebuffer(T.READ_FRAMEBUFFER,xf),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,Mf);for(let Vt=0;Vt<Ae;Vt++)vt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,sn.__webglTexture,B,Oe+Vt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,sn.__webglTexture,B),nn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,Et+Vt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ot.__webglTexture,fe),B!==0?T.blitFramebuffer(We,Xe,Ee,Le,Qe,ct,Ee,Le,T.COLOR_BUFFER_BIT,T.NEAREST):nn?T.copyTexSubImage3D(yt,fe,Qe,ct,Et+Vt,We,Xe,Ee,Le):T.copyTexSubImage2D(yt,fe,Qe,ct,We,Xe,Ee,Le);j.bindFramebuffer(T.READ_FRAMEBUFFER,null),j.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(yt,fe,Qe,ct,Et,Ee,Le,Ae,ft,Be,gt.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,fe,Qe,ct,Et,Ee,Le,Ae,ft,gt.data):T.texSubImage3D(yt,fe,Qe,ct,Et,Ee,Le,Ae,ft,Be,gt):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,fe,Qe,ct,Ee,Le,ft,Be,gt.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,fe,Qe,ct,gt.width,gt.height,ft,gt.data):T.texSubImage2D(T.TEXTURE_2D,fe,Qe,ct,Ee,Le,ft,Be,gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,it),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Yt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ki),T.pixelStorei(T.UNPACK_SKIP_ROWS,Zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ks),fe===0&&k.generateMipmaps&&T.generateMipmap(yt),j.unbindTexture()},this.copyTextureToTexture3D=function(w,k,q=null,Y=null,B=0){return fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,q,Y,B)},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?be.setTextureCube(w,0):w.isData3DTexture?be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?be.setTexture2DArray(w,0):be.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){C=0,b=0,P=null,j.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Ax extends Bl{constructor(){super();const e=new wt;e.deleteAttribute("uv");const t=new Mt({side:Gt}),i=new Mt,s=new Bm(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new To(e,i,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new ze(e,ts(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ze(e,ts(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ze(e,ts(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new ze(e,ts(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new ze(e,ts(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new ze(e,ts(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ts(n){const e=new li;return e.color.setScalar(n),e}const yh=250;class Rx{latched=!1;pressedAt=null;press(e){this.pressedAt===null&&(this.pressedAt=e)}release(e){this.pressedAt!==null&&(e-this.pressedAt<yh&&(this.latched=!this.latched),this.pressedAt=null)}cancel(){this.pressedAt=null}reset(){this.latched=!1,this.pressedAt=null}target(e){return this.pressedAt!==null?e-this.pressedAt>=yh?"back":"pillar":this.latched?"pillar":"ahead"}}const Sh={ArrowUp:"throttle",KeyW:"throttle",ArrowDown:"reverse",KeyS:"reverse",ArrowLeft:"steerLeft",KeyA:"steerLeft",ArrowRight:"steerRight",KeyD:"steerRight",Space:"handbrake"},fa=[1,2,3],Cx=n=>{const e=n;if(!e)return!1;const t=(e.tagName??"").toUpperCase();return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||e.isContentEditable===!0},Px=n=>fa[(fa.indexOf(n)+1)%fa.length];class Lx{constructor(e={}){this.events=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.releaseAll),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()})}events;pressed=new Set;touchHeld=new Set;head=new Rx;lookLeftHeld=!1;lookLeftTouch=!1;setTouchControl(e,t){t?this.touchHeld.add(e):this.touchHeld.delete(e)}setTouchLookLeft(e){this.lookLeftTouch=e}headPress(){this.head.press(performance.now())}headRelease(){this.head.release(performance.now())}releaseAll=()=>{this.pressed.clear(),this.touchHeld.clear(),this.head.cancel(),this.lookLeftHeld=!1,this.lookLeftTouch=!1};headTarget(){return this.head.target(performance.now())}resetHead(){this.head.reset()}lookLeft(){return this.lookLeftHeld||this.lookLeftTouch}controls(){const e=t=>this.pressed.has(t)||this.touchHeld.has(t);return{throttle:e("throttle"),reverse:e("reverse"),steerLeft:e("steerLeft"),steerRight:e("steerRight"),handbrake:e("handbrake")}}onKeyDown=e=>{if(Cx(e.target))return;const t=Sh[e.code];if(t){e.preventDefault(),this.pressed.add(t);return}e.code==="Digit1"&&this.events.onView?.(1),e.code==="Digit2"&&this.events.onView?.(2),e.code==="Digit3"&&this.events.onView?.(3),e.code==="KeyR"&&this.events.onRestart?.(),e.code==="Escape"&&this.events.onMenu?.(),e.code==="KeyB"&&this.events.onToggleEagle?.(),e.code==="KeyC"&&this.events.onToggleReverseAids?.(),e.code==="KeyH"&&this.events.onToggleCoach?.(),e.code==="KeyE"&&this.head.press(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!0)};onKeyUp=e=>{const t=Sh[e.code];t&&this.pressed.delete(t),e.code==="KeyE"&&this.head.release(performance.now()),e.code==="KeyQ"&&(this.lookLeftHeld=!1)}}const he={wheelbase:2.7,width:1.8,length:4.5,rearOverhang:.9,steeringRatio:15.5,maxWheelDeg:558,wheelTurnRate:420,centerRate:540,centerSnapDeg:15,detentSnapDeg:45,accel:2,brakeDecel:5,handbrakeDecel:8,drag:.9,rollingResistance:.15,maxFwdSpeed:1.39},ed=(n,e,t)=>({x:n,z:e,heading:t,speed:0,wheelDeg:0,gear:"D"}),td=n=>n.wheelDeg/he.steeringRatio*Math.PI/180,nd=(n,e,t)=>Math.min(t,Math.max(e,n)),bi=(n,e,t)=>n<e?Math.min(n+t,e):Math.max(n-t,e),pa=.01,Dx=(n,e,t)=>{const i=(e.steerLeft?1:0)-(e.steerRight?1:0),s=e.detentDeg;if(i!==0){const r=nd(n.wheelDeg+i*he.wheelTurnRate*t,-558,he.maxWheelDeg);return s!==void 0&&(n.wheelDeg-s)*(r-s)<0?s:r}if(s!==void 0&&Math.abs(n.wheelDeg-s)<=he.detentSnapDeg)return bi(n.wheelDeg,s,he.wheelTurnRate*t);if(Math.abs(n.wheelDeg)<=he.centerSnapDeg)return 0;if(Math.abs(n.speed)>.1){const r=he.centerRate*Math.min(1,Math.abs(n.speed)/2);return bi(n.wheelDeg,0,r*t)}return n.wheelDeg},ma=n=>nd(n,-1.39,he.maxFwdSpeed),Ix=(n,e,t,i)=>{const{speed:s,gear:r}=n,o=()=>({speed:bi(s,0,he.brakeDecel*t),gear:r});if(e.handbrake)return{speed:bi(s,0,he.handbrakeDecel*t),gear:r};if(e.throttle)return s<-pa?o():{speed:ma(bi(s,he.maxFwdSpeed,he.accel*t)+i*t),gear:"D"};if(e.reverse)return s>pa||r==="D"&&s<-pa?o():{speed:ma(bi(s,-1.39,he.accel*t)+i*t),gear:"R"};const a=i===0?he.drag:he.rollingResistance;return{speed:ma(bi(s,0,a*t)+i*t),gear:r}},Ux=(n,e,t,i=0)=>{const s=Dx(n,e,t),{speed:r,gear:o}=Ix(n,e,t,i),a=s/he.steeringRatio*Math.PI/180,l=n.heading+r/he.wheelbase*Math.tan(a)*t,c=n.x+Math.sin(l)*r*t,h=n.z+Math.cos(l)*r*t;return{x:c,z:h,heading:l,speed:r,wheelDeg:s,gear:o}},pr=n=>n.z0+n.up+n.top+n.down,Nx=n=>[{z:n.z0,y:0},{z:n.z0+n.up,y:n.height},{z:n.z0+n.up+n.top,y:n.height},{z:pr(n),y:0}],jt=(n,e,t)=>{for(const i of n){if(Math.abs(e-i.cx)>i.hw)continue;const s=t-i.z0,r=pr(i);if(!(s<=0||t>=r))return s<i.up?i.height*s/i.up:s<i.up+i.top?i.height:i.height*(r-t)/i.down}return 0},Ro=(n,e)=>{if(n.length===0)return 0;const t=jt(n,e.x,e.z),i=jt(n,e.x+Math.sin(e.heading)*he.wheelbase,e.z+Math.cos(e.heading)*he.wheelbase);return Math.atan2(i-t,he.wheelbase)},zx=(n,e)=>{const t=Ro(n,e);return t===0?0:-9.81*Math.sin(t)},Ge={x:.42,y:1.31,z:1.5},Pi={x:.75,y:1.14,z:1.95},Fx=()=>Math.atan2(Ge.x+Pi.x,Pi.z-Ge.z)*180/Math.PI,Li={yawDeg:140,eye:{x:.3,y:1.31,z:1.4},seconds:.35},ga={yawDeg:70,eye:{x:.47,y:1.31,z:1.5},seconds:.25},tt={trimX:.76,beltY:1.1,roofY:1.4,bPillar:{z:1.1,width:.1},divider:{z:.58,width:.04},quarterTopY:1.24,quarterRearZ:.25,cPillarRearZ:.13},pt={x:1.03,y:1.074,z:2.12,w:.25,h:.15,d:.1},id=.98,go={y:.74,behindBumper:.2},Ox=(n,e)=>{const t=n-go.behindBumper-Ge.z;return Math.max(0,Ge.y-(Ge.y-go.y)/t*e)},Ht={fovDeg:32,aspect:1.5,yawOut:.3,pitch:-.1,glassBack:.06},Eh=(n,e,t)=>{const s={x:-1*pt.x,y:pt.y,z:pt.z-Ht.glassBack},r=sd(n,s,t);return(r>0?180-r:-180-r)-Ht.yawOut*180/Math.PI},kx=n=>{const e=pt.y-pt.h/2,t=pt.z-pt.d/2;return Ge.z+(t-Ge.z)*Ge.y/(Ge.y-e)-n},cn=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading);return{x:n.x+e.x*i+e.z*t,y:e.y,z:n.z-e.x*t+e.z*i}},sd=(n,e,t)=>{const i=cn(n,e),s=Math.atan2(t.x-i.x,t.z-i.z);let r=(n.heading-s)*180/Math.PI;for(;r>180;)r-=360;for(;r<=-180;)r+=360;return r},Bx=()=>{const n=Li.eye,e=tt.quarterRearZ-n.z;return Math.atan2(1.06,e)*180/Math.PI},qn=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle),i={x:t,z:-e},s={x:e,z:t},r=[];for(const o of[-1,1])for(const a of[-1,1])r.push({x:n.cx+o*n.hw*i.x+a*n.hl*s.x,z:n.cz+o*n.hw*i.z+a*n.hl*s.z});return r},wh=(n,e)=>{let t=1/0,i=-1/0;for(const s of n){const r=s.x*e.x+s.z*e.z;r<t&&(t=r),r>i&&(i=r)}return[t,i]},bh=n=>{const e=Math.sin(n.angle),t=Math.cos(n.angle);return[{x:t,z:-e},{x:e,z:t}]},Th=(n,e)=>{const t=qn(n),i=qn(e);for(const s of[...bh(n),...bh(e)]){const[r,o]=wh(t,s),[a,l]=wh(i,s);if(o<a||l<r)return!1}return!0},rd=(n,e)=>{const t=Math.sin(n.angle),i=Math.cos(n.angle);for(const s of qn(e)){const r=s.x-n.cx,o=s.z-n.cz,a=r*i-o*t,l=r*t+o*i;if(Math.abs(a)>n.hw||Math.abs(l)>n.hl)return!1}return!0},tn=n=>{const e=he.length/2-he.rearOverhang;return{cx:n.x+Math.sin(n.heading)*e,cz:n.z+Math.cos(n.heading)*e,hw:he.width/2,hl:he.length/2,angle:n.heading}},_o=1.6,od=.1,Jl=.1,Ah=.12,Hx=.05,Gx=1,Vx=he.length-he.rearOverhang-he.wheelbase,Wx=n=>({nextCheckpoint:0,lineTouches:0,onLine:!1,hill:n.stopLine?{phase:"approach",hold:0,stopGap:null,anchorZ:0,rollback:0,missedStop:!1}:null,poleHits:0,onPole:!1}),Rh=n=>({cx:n.x,cz:n.z,hw:Ah,hl:Ah,angle:0}),zi=n=>{const e=Math.sin(n.heading),t=Math.cos(n.heading),i=[];for(const s of[0,he.wheelbase])for(const r of[_o/2,-_o/2])i.push({x:n.x+e*s+t*r,z:n.z+t*s-e*r});return i},Xx=(n,e)=>{const t=e.x2-e.x1,i=e.z2-e.z1,s=t*t+i*i,r=s===0?0:Math.min(1,Math.max(0,((n.x-e.x1)*t+(n.z-e.z1)*i)/s));return Math.hypot(n.x-(e.x1+r*t),n.z-(e.z1+r*i))},qx=(n,e)=>{const t=Jl/2+od;return zi(n).some(i=>e.some(s=>Xx(i,s)<=t))},Yx=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),s=n.x-e.cx,r=n.z-e.cz;return Math.abs(s*i-r*t)<=e.hw&&Math.abs(s*t+r*i)<=e.hl},mr=n=>n.z+Math.cos(n.heading)*(he.wheelbase+Vx),Zx=(n,e,t,i)=>{const s=n.stopLine;if(!s||e.phase==="done")return e;const r=s.z-mr(t);if(e.phase==="approach"){if(r<0)return{...e,phase:"done",missedStop:!0};const l=Math.abs(t.speed)<Hx&&r<=s.zone?e.hold+i:0;return l>=Gx?{...e,phase:"restart",hold:l,stopGap:r,anchorZ:t.z,rollback:0}:{...e,hold:l}}const o=Math.max(e.rollback,e.anchorZ-t.z);return{...e,rollback:o,phase:r<0?"done":"restart"}},$x=(n,e,t,i,s)=>{const r=e.poleHits+(s&&!e.onPole?1:0),o=qx(t,n.boundaries),a=e.lineTouches+(o&&!e.onLine?1:0),l=tn(t),c=n.checkpoints[e.nextCheckpoint],h=c&&Yx({x:l.cx,z:l.cz},c)?e.nextCheckpoint+1:e.nextCheckpoint,u=e.hill?Zx(n,e.hill,t,i):null;return{nextCheckpoint:h,lineTouches:a,onLine:o,hill:u,poleHits:r,onPole:s}},ad=(n,e)=>e.nextCheckpoint>=n.checkpoints.length&&(e.hill===null||e.hill.phase==="done"),Kx=(n,e,t)=>e.hill&&e.hill.phase!=="done"&&n.stopLine?{cx:n.stopLine.cx,cz:n.stopLine.z,hw:0,hl:0,angle:0}:n.checkpoints[e.nextCheckpoint]??t,Jx=(n,e,t)=>{const i=e.hill,s=n.stopLine;if(i&&s&&i.phase==="approach"){const o=s.z-mr(t);return o<=6?`Stop line ${o.toFixed(2)} m · stop ≤ ${s.maxGap} m before it`:"Hill ahead — stop before the line"}if(i&&s&&i.phase==="restart")return`Move off · rollback ${i.rollback.toFixed(2)} m (max ${s.warnRollback} m)`;const r=n.checkpoints.length;return e.nextCheckpoint<r?`Gate ${e.nextCheckpoint+1} / ${r}`:"Gates done — finish in the green box"},mn={position:25,angle:25,perCollision:20,perExtraReversal:5,reversalCap:15,time:10,posDeadZone:.3,angleFreeDeg:3,angleFullDevDeg:12},Ti=n=>Math.min(1,Math.max(0,n)),Ch=(n,e)=>Ti((n-e)/(1-e)),ld=n=>n>=95?"S":n>=85?"A":n>=70?"B":n>=50?"C":"F",jx=n=>{const e=Ch(n.latMargin>0?Ti(n.latOffset/n.latMargin):0,mn.posDeadZone),t=Ch(n.longMargin>0?Ti(n.longOffset/n.longMargin):0,mn.posDeadZone),i=mn.position*Ti(.75*e+.25*t),s=n.angleDevRad*180/Math.PI,r=mn.angle*Ti((s-mn.angleFreeDeg)/(mn.angleFullDevDeg-mn.angleFreeDeg)),o=mn.perCollision*n.collisions,a=Math.max(0,n.reversals-n.par.reversals),l=Math.min(mn.reversalCap,mn.perExtraReversal*a),c=Math.max(0,n.timeSec-n.par.timeSec),h=mn.time*Ti(c/n.par.timeSec),u=[];i>.005&&u.push({label:"Position offset",delta:-i}),r>.005&&u.push({label:"Angle deviation",delta:-r}),o>0&&u.push({label:`Collisions ×${n.collisions}`,delta:-o}),l>0&&u.push({label:`Extra gear reversals ×${a}`,delta:-l}),h>.005&&u.push({label:"Over par time",delta:-h});const d=100-i-r-o-l-h,f=Math.max(0,Math.round(d));return{total:f,grade:ld(f),lines:u}},Qx={perPoleHit:20,perLineTouch:10,perCollision:20,missedStop:20,stopTooFar:10,rollback:10,bigRollback:20,perExtraReversal:5,reversalCap:15,time:10},eM=n=>{const e=Qx,t=[],i=(a,l)=>{l>.005&&t.push({label:a,delta:-l})};if(i(`Pole hits ×${n.poleHits}`,e.perPoleHit*n.poleHits),i(`Wheel on a line ×${n.lineTouches}`,e.perLineTouch*n.lineTouches),i(`Collisions ×${n.collisions}`,e.perCollision*n.collisions),n.stopLineMissed&&i("Crossed the stop line without stopping",e.missedStop),n.stopGap!==null&&n.stopGap>n.maxStopGap&&i(`Stopped ${n.stopGap.toFixed(1)} m before the stop line (max ${n.maxStopGap} m)`,e.stopTooFar),n.rollback!==null&&n.rollback>n.warnRollback){const a=n.rollback>n.bigRollback;i(`Rolled back ${n.rollback.toFixed(2)} m on the hill`,a?e.bigRollback:e.rollback)}const s=Math.max(0,n.reversals-n.par.reversals);i(`Extra gear reversals ×${s}`,Math.min(e.reversalCap,e.perExtraReversal*s));const r=Math.max(0,n.timeSec-n.par.timeSec);i("Over par time",e.time*Ti(r/n.par.timeSec));const o=Math.max(0,Math.round(100+t.reduce((a,l)=>a+l.delta,0)));return{total:o,grade:ld(o),lines:t}},tM=.05,cd=1.5,hd=Math.PI/6,nM=.5,Ph=3,ud=(n,e)=>{let t=(n-e)%(2*Math.PI);return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},iM=n=>({cx:n.x,cz:n.z,hw:he.width/2,hl:he.length/2,angle:n.heading}),Us=n=>({scenario:n,car:ed(n.spawn.x,n.spawn.z,n.spawn.heading),obstacles:[...n.parkedCars.map(iM),...n.solids.map(e=>e.rect),...(n.poles??[]).map(Rh)],poles:(n.course?.poles??[]).map(Rh),course:n.course?Wx(n.course):null,time:0,collisions:0,reversals:0,inContact:!1,settle:0,complete:!1,flash:0}),sM=(n,e,t)=>Math.abs(e.speed)>tM||n.scenario.course&&t&&!ad(n.scenario.course,t)||Math.abs(ud(e.heading,n.scenario.bay.requiredHeading))>hd?!1:rd(n.scenario.bay,tn(e)),Fi=(n,e,t)=>{if(n.complete)return n;const i=n.scenario.course?.hill,s=Ux(n.car,e,t,i?zx([i],n.car):0),r=tn(s),o=n.obstacles.some(_=>Th(r,_)),a=n.poles.some(_=>Math.abs(_.cx-r.cx)<Ph&&Math.abs(_.cz-r.cz)<Ph&&Th(r,_)),c=o||a?{...n.car,speed:0,wheelDeg:s.wheelDeg,gear:s.gear}:s,h=o&&!n.inContact,u=n.reversals+(c.gear!==n.car.gear?1:0),d=n.scenario.course&&n.course?$x(n.scenario.course,n.course,c,t,a):null,f=sM(n,c,d)?n.settle+t:0,g=f>=cd;return{...n,car:c,time:n.time+t,collisions:n.collisions+(h?1:0),reversals:u,inContact:o,course:d,settle:f,complete:g,flash:h?nM:Math.max(0,n.flash-t)}},rM=n=>Math.min(1,n.settle/cd),dd=n=>{const e=n.scenario.bay,t=tn(n.car),i=t.cx-e.cx,s=t.cz-e.cz,r=Math.sin(e.angle),o=Math.cos(e.angle),a=Math.abs(i*o-s*r),l=Math.abs(i*r+s*o),c=Math.abs(ud(n.car.heading,e.requiredHeading));return{lat:a,long:l,angleDev:c,dist:Math.hypot(i,s),aligned:a<=e.hw-he.width/2&&l<=e.hl-he.length/2&&c<=hd}},oM=n=>{const e=n.scenario.bay,t=n.scenario.course;if(t&&n.course){const s=n.course.hill;return eM({poleHits:n.course.poleHits,stopLineMissed:s?s.missedStop:!1,lineTouches:n.course.lineTouches,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par,stopGap:s?s.stopGap:null,maxStopGap:t.stopLine?.maxGap??0,rollback:s?s.rollback:null,warnRollback:t.stopLine?.warnRollback??0,bigRollback:t.stopLine?.bigRollback??0})}const i=dd(n);return jx({latOffset:i.lat,longOffset:i.long,angleDevRad:i.angleDev,latMargin:e.hw-he.width/2,longMargin:e.hl-he.length/2,collisions:n.collisions,reversals:n.reversals,timeSec:n.time,par:n.scenario.par})},fd=6,aM=he.maxWheelDeg/.35,pd=n=>Math.atan2(Math.sin(n),Math.cos(n)),lM=(n,e)=>Math.abs(n.car.wheelDeg-e)<=fd,md=n=>Math.max(-558,Math.min(he.maxWheelDeg,n)),jl=(n,e,t)=>{const{car:i}=n,s=t?i.heading+Math.PI:i.heading,r=pd(Math.atan2(e.x-i.x,e.z-i.z)-s),o=Math.max(1,Math.hypot(e.x-i.x,e.z-i.z));let a=Math.atan(2*he.wheelbase*Math.sin(r)/o);return t&&(a=-a),md(a*180/Math.PI*he.steeringRatio)},cM=(n,e,t)=>{if(typeof e=="number")return e;if("aim"in e)return jl(n,e.aim(n),t==="reverse");const i=pd(e.heading-n.car.heading);return md((t==="reverse"?-1:1)*aM*i)},gd=n=>{if(Math.abs(n)>=he.maxWheelDeg-fd)return n>0?"full left":"full right";const e=Math.round(Math.abs(n)/90);return e===0?"straight":`${["","¼","½","¾","1","1¼","1½"][Math.min(e,6)]} turn${e>4?"s":""} ${n>0?"left":"right"}`},_d=(n,e=2.5,t={i:0})=>i=>{const s=o=>Math.hypot(n[o].x-i.car.x,n[o].z-i.car.z);let r=t.near??0;for(;r<n.length-1&&s(r+1)<=s(r);)r++;for(t.near=r;t.i<n.length-1&&s(t.i)<e;)t.i++;return n[t.i]},hM={V:4.485,H:1.706},{V:xi,H:_a}=hM,Yn={parallel:{bayLength:2*xi,forwardZone:xi+1,bayWidth:_a+1,laneWidth:_a+2},snake:{poleSpacing:1.5*xi+.5,corridorWidth:2*xi},turnaround:{zoneWidth:2*xi},garage:{bayLength:xi+1,bayWidth:_a+1},hill:{stopZone:xi+1,maxGap:1}},ri=(n,e,t,i)=>({x1:n,z1:e,x2:t,z2:i}),Ys=(n,e,t,i,s,r)=>{const o=[];for(let a=0;a<r;a++){const l=i+(s-i)*a/r,c=i+(s-i)*(a+1)/r;o.push(ri(n+t*Math.cos(l),e+t*Math.sin(l),n+t*Math.cos(c),e+t*Math.sin(c)))}return o},uM=(n,e,t)=>{const i=[];for(let s=e;s<t;s+=1)i.push({x1:s,z1:n,x2:Math.min(s+.5,t),z2:n,width:.12});return i},dM=(n,e,t)=>{const i=[];for(let s=e;s<t;s+=3)i.push({x1:n,z1:s,x2:n,z2:Math.min(s+1.5,t),width:.1});return i},vo=.5,_n=.5,Zs=(n,e,t,i)=>{const s=Math.max(1,Math.round(Math.abs(i-t)*e/vo));return Array.from({length:s+1},(r,o)=>{const a=t+(i-t)*o/s;return{x:n.x+e*Math.cos(a),z:n.z+e*Math.sin(a)}})},va=(n,e,t,i,s=vo)=>{const r=Math.max(1,Math.round(Math.hypot(t-n,i-e)/s));return Array.from({length:r+1},(o,a)=>({x:n+(t-n)*a/r,z:e+(i-e)*a/r}))},Ci={spacing:Yn.snake.poleSpacing,poles:5,halfWidth:Yn.snake.corridorWidth/2,firstZ:-20},Lh=Array.from({length:Ci.poles},(n,e)=>({x:0,z:Ci.firstZ+e*Ci.spacing})),fM={id:"snake",name:"Snake",description:`Weave through 5 poles ${Yn.snake.poleSpacing.toFixed(1)} m apart — first pole on your left, then alternate. No pole contact, no wheel on the side lines.`,spawn:{x:-4.535/2,z:-31,heading:0},bay:{cx:0,cz:29,hw:2.5,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:Lh,boundaries:[ri(-4.485,-34,-4.485,33),ri(Ci.halfWidth,-34,Ci.halfWidth,33)],checkpoints:Lh.map((n,e)=>{const t=e%2===0?-1:1,i=.3;return{cx:t*(i+Ci.halfWidth)/2,cz:n.z,hw:(Ci.halfWidth-i)/2,hl:.6,angle:0}})}},xt={halfWidth:Yn.turnaround.zoneWidth/2,end:14,zoneStart:5,roadStart:-14,poleStep:1},ns=xt.halfWidth+_n,Kr=xt.end+_n,pM=[...va(-ns,xt.zoneStart,-ns,Kr,xt.poleStep),...va(ns,xt.zoneStart,ns,Kr,xt.poleStep),...va(-ns,Kr,ns,Kr,xt.poleStep).slice(1,-1)],mM={id:"turnaround",name:"Dead-end turnaround",description:"Drive into the dead end, turn around between the lines using forward and reverse (3-point turn), and stop in the box facing back. Poles surround the dead end — each hit costs 20 points.",spawn:{x:-1.75,z:-10,heading:0},bay:{cx:1.75,cz:-7,hw:1.6,hl:3,angle:0,requiredHeading:Math.PI},parkedCars:[],solids:[],paint:[...uM(xt.zoneStart,-4.485,xt.halfWidth),...dM(0,-14,xt.zoneStart-1)],par:{reversals:2,timeSec:90},course:{poles:pM,boundaries:[ri(-4.485,xt.roadStart,-4.485,xt.end),ri(xt.halfWidth,xt.roadStart,xt.halfWidth,xt.end),ri(-4.485,xt.end,xt.halfWidth,xt.end)],checkpoints:[{cx:0,cz:(xt.zoneStart+xt.end)/2,hw:xt.halfWidth,hl:(xt.end-xt.zoneStart)/2,angle:0}]}},Ye={inner:3.5,outer:3.5+3.5*1.1,dist:11.5,tilt:19*Math.PI/180,gapFrom:-107*Math.PI/180,gapTo:-30*Math.PI/180,startBack:9},rt={x:0,z:0},_t={x:-11.5*Math.sin(Ye.tilt),z:Ye.dist*Math.cos(Ye.tilt)},yn=(Ye.inner+Ye.outer)/2,Sn=Math.atan2(_t.z-rt.z,_t.x-rt.x),ni=Math.acos(Ye.dist/(2*Ye.outer)),gM=(n,e)=>({cx:n.x+yn*Math.cos(e),cz:n.z+yn*Math.sin(e),hw:(Ye.outer-Ye.inner)/2,hl:.6,angle:-e}),Dh=(n,e)=>({x1:n.x+(yn-.4)*Math.cos(e),z1:n.z+(yn-.4)*Math.sin(e),x2:n.x+(yn+.4)*Math.cos(e),z2:n.z+(yn+.4)*Math.sin(e),width:.12}),Ih=[[rt,Math.PI],[_t,Sn-Math.PI/2],[_t,Sn],[_t,Sn+Math.PI/2],[rt,0]],Uh=(n,e)=>t=>Math.hypot(t.x-n.x,t.z-n.z)>=e,_M=[...Zs(rt,Ye.inner-_n,0,2*Math.PI-vo/Ye.inner),...Zs(_t,Ye.inner-_n,0,2*Math.PI-vo/Ye.inner),...[...Zs(rt,Ye.outer+_n,Sn+ni,2*Math.PI+Ye.gapFrom),...Zs(rt,Ye.outer+_n,Ye.gapTo,Sn-ni)].filter(Uh(_t,Ye.outer+_n)),...Zs(_t,Ye.outer+_n,Sn+Math.PI+ni,Sn+3*Math.PI-ni).filter(Uh(rt,Ye.outer+_n))],gr=-45*Math.PI/180,Jr=Math.atan2(Math.sin(gr),-Math.cos(gr)),Nh={x:rt.x+yn*Math.cos(gr),z:rt.z+yn*Math.sin(gr)},zh=12,vd={x:rt.x+(Ye.outer+_n)*Math.cos(Ye.gapFrom),z:rt.z+(Ye.outer+_n)*Math.sin(Ye.gapFrom)},Fh={x:(rt.x+_t.x)/2,z:(rt.z+_t.z)/2},Oh=Math.sqrt(Ye.outer**2-(Ye.dist/2)**2),kh={x:(_t.x-rt.x)/Ye.dist,z:(_t.z-rt.z)/Ye.dist},Ml={x:Fh.x+(Oh+.4)*kh.z,z:Fh.z-(Oh+.4)*kh.x},vM={id:"figure-eight",name:"Figure eight",description:'Enter through the gap to the bottom of the near ring. Drive an "S": up its right side turning left, through the middle, round the far ring turning right, back through the middle, round the near ring again, then straight out through the gap into the box. Yellow-banded poles 1 and 2 are the references. Poles line every marking — each hit costs 20 points.',spawn:{x:rt.x+Ye.startBack,z:rt.z-yn,heading:-Math.PI/2},bay:{cx:Nh.x+Math.sin(Jr)*zh,cz:Nh.z+Math.cos(Jr)*zh,hw:1.6,hl:3,angle:Jr,requiredHeading:Jr},parkedCars:[],solids:[],paint:[...Ih.map(([n,e])=>Dh(n,e)),Dh(rt,-Math.PI/2)],par:{reversals:0,timeSec:110},course:{poles:[..._M,Ml],refPoles:[vd,Ml],boundaries:[...Ys(rt.x,rt.z,Ye.inner,0,2*Math.PI,36),...Ys(_t.x,_t.z,Ye.inner,0,2*Math.PI,36),...Ys(rt.x,rt.z,Ye.outer,Sn+ni,2*Math.PI+Ye.gapFrom,30),...Ys(rt.x,rt.z,Ye.outer,Ye.gapTo,Sn-ni,20),...Ys(_t.x,_t.z,Ye.outer,Sn+Math.PI+ni,Sn+3*Math.PI-ni,48)],checkpoints:Ih.map(([n,e])=>gM(n,e))}},Bh=.14,gn={cx:0,hw:1.5*1.25,z0:0,up:1/Bh,top:3,down:1/Bh,height:1},xM=gn.z0+gn.up,MM={id:"hill-start",name:"Hill start",description:"Climb the 14 % ramp, stop no more than 1 m before the stop line, hold with the handbrake (Space), then move off rolling back < 0.3 m.",spawn:{x:0,z:-10,heading:0},bay:{cx:0,cz:25,hw:1.75,hl:3,angle:0,requiredHeading:0},parkedCars:[],solids:[],paint:[],par:{reversals:0,timeSec:75},course:{poles:[],boundaries:[ri(-gn.hw+.05,-4,-gn.hw+.05,21.5),ri(gn.hw-.05,-4,gn.hw-.05,21.5)],checkpoints:[{cx:0,cz:xM+gn.top/2,hw:gn.hw,hl:gn.top/2,angle:0}],hill:gn,stopLine:{z:5,cx:0,hw:gn.hw,maxGap:Yn.hill.maxGap,zone:Yn.hill.stopZone,warnRollback:.3,bigRollback:1}}},yM=[fM,mM,vM,MM],xd=Math.tan(Ht.fovDeg*Math.PI/360),SM=xd*Ht.aspect,Md=(n,e)=>{const t=e.x-n.x,i=e.z-n.z,s=Math.sin(n.heading),r=Math.cos(n.heading);return{x:t*r-i*s,y:e.y??0,z:t*s+i*r}},hs=(n,e)=>{const t=n==="left"?1:-1,i={x:t*pt.x,y:pt.y,z:pt.z-Ht.glassBack},s=Ht.yawOut,r=Ht.pitch,o=t*Math.sin(s),a=-Math.cos(s),l=t*Math.cos(s),c=Math.sin(s),h={x:o*Math.cos(r),y:Math.sin(r),z:a*Math.cos(r)},u={x:-o*Math.sin(r),y:Math.cos(r),z:-a*Math.sin(r)},d={x:e.x-i.x,y:e.y-i.y,z:e.z-i.z},f=d.x*h.x+d.y*h.y+d.z*h.z,g=(d.x*l+d.z*c)/f/SM,_=(d.x*u.x+d.y*u.y+d.z*u.z)/f/xd;return{X:g,Y:_,depth:f}},xa={centerY:.31,radius:.4},yd=(n,e=16)=>{const t=(n==="left"?1:-1)*(he.width/2),i=[];for(let s=0;s<=e;s++){const r=Math.PI*s/e;i.push({x:t,y:xa.centerY+xa.radius*Math.sin(r),z:xa.radius*Math.cos(r)})}return i},Sd=1/120,EM=2,yl=7200,wM=.01,bM=.31,Ed=.2,TM=.12,Ql=n=>{const e=n.bay,t=e.cz-e.hl,i=n.poles.filter(a=>Math.abs(a.z-t)<1e-9),s=Math.sign(Math.sin(n.spawn.heading))||1,r=[...i].sort((a,l)=>s*(l.x-a.x)),o=r[0];return{pole1:o,pole2:r[1],backCorner:{x:o.x,z:e.cz+e.hl},windowEdgeDeg:Bx()}},xo=(n,e)=>sd(n,Li.eye,e.pole1),Pn=(n,e)=>{const t=tn(n),i=Math.sin(t.angle),s=Math.cos(t.angle),r=e.x-t.cx,o=e.z-t.cz,a=r*s-o*i,l=r*i+o*s,c=Math.max(0,Math.abs(a)-t.hw),h=Math.max(0,Math.abs(l)-t.hl);return Math.hypot(c,h)-.12},AM=(n,e)=>-((e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading))-he.width/2-TM,RM=1.15,CM=(n,e)=>{const t=(e.x-n.x)*Math.cos(n.heading)-(e.z-n.z)*Math.sin(n.heading),i=Ge.x-t,s=Ge.x+tt.trimX,r=Ge.y-(Ge.y-id)*i/s;return Math.max(0,Math.min(1,r/RM))},Sl=(n,e)=>(e.x-n.x)*Math.sin(n.heading)+(e.z-n.z)*Math.cos(n.heading),PM=(n,e)=>{const t=hs("right",yd("right").at(-1));return hs("right",Md(n,e.backCorner)).Y-t.Y},Mo=(n,e)=>{const t=Math.sign(n.speed);return{...n,x:n.x+Math.sin(n.heading)*e*t,z:n.z+Math.cos(n.heading)*e*t}},Es=n=>n.speed*n.speed/(2*he.handbrakeDecel),wd=(n,e)=>Math.abs(Math.atan2(Math.sin(e-n.heading),Math.cos(e-n.heading))),bd=(n,e,t,i)=>({throttle:!i&&e==="forward",reverse:!i&&e==="reverse",handbrake:i||e==="stop",steerLeft:t>n.wheelDeg+4,steerRight:t<n.wheelDeg-4,detentDeg:t}),LM=(n,e)=>Math.abs(n.wheelDeg-e)<1,ws=n=>{const e=[[],[],[],[]];return n.forEach((t,i)=>{i%4&&i!==n.length-1||zi(t).forEach((s,r)=>e[r].push(s))}),e};class Zn{constructor(e){this.s=e}s;steps=[];ghostKinds=[];add(e){const t=[this.s.car];let i=!1,s=0;for(;s<yl;s++){const r=this.s.car;if(e.pedal==="stop"||i){if(Math.abs(r.speed)<wM&&LM(r,e.wheel))break}else if(e.until?.(r)){i=!0;continue}this.s={...Fi(this.s,bd(r,e.pedal,e.wheel,i),Sd),settle:0,complete:!1},s%EM===0&&t.push(this.s.car)}if(s>=yl)throw new Error(`lesson step never finished: ${e.say}`);return t[t.length-1]!==this.s.car&&t.push(this.s.car),this.steps.push({say:e.say,look:e.look,pedal:e.pedal,wheel:e.wheel,frames:t,overlays:e.overlays??[]}),this.ghostKinds.push(e.ghost),this}hold(e,t,i,s,r=this.s.car.wheelDeg){return this.steps.push({say:e,look:t,pedal:"stop",wheel:r,frames:[this.s.car],overlays:i}),this.ghostKinds.push(s),this}finish(e,t,i,s,r,o){return this.steps.forEach((a,l)=>{const c=this.ghostKinds[l];if(c==="future"){const h=this.steps.slice(l+1).find(u=>u.pedal!=="stop");h&&(a.ghost={lines:ws(h.frames),tone:"ok"})}c==="keep"&&(a.ghost=NM(this.sessionAt(a),o??0,a.wheel))}),{id:e,title:t,summary:i,tone:s,scenario:this.s.scenario,refs:r,steps:this.steps,collisions:this.s.collisions}}sessionAt(e){const t=e.frames[e.frames.length-1];return{...Us(this.s.scenario),car:{...t,speed:0}}}}const DM=(n,e)=>{const t=Math.sin(e.angle),i=Math.cos(e.angle),s=n.x-e.cx,r=n.z-e.cz,o=s*i-r*t,a=s*t+r*i;return Math.hypot(Math.max(0,Math.abs(o)-e.hw),Math.max(0,Math.abs(a)-e.hl))},IM=(n,e)=>{const t=e.poles??[],i=t.length?t.reduce((o,a)=>Pn(n,a)<Pn(n,o)?a:o):null,s=qn(tn(n));let r=i?{gap:Pn(n,i),at:{x:i.x,z:i.z}}:null;for(const o of e.solids)for(const a of s){const l=DM(a,o.rect);(!r||l<r.gap)&&(r={gap:l,at:a})}return r.at},UM=(n,e)=>{const t=Math.sin(n.heading),i=Math.cos(n.heading),s=e.x-n.x,r=e.z-n.z,o=s*i-r*t,a=s*t+r*i;return{x:Math.max(-1.8/2,Math.min(he.width/2,o)),z:Math.max(-.9,Math.min(he.length-he.rearOverhang,a))}},Td=(n,e,t,i)=>{if(Math.abs(e)<1)return;const s=e/he.steeringRatio*Math.PI/180,r=Hh(n,he.wheelbase/Math.tan(s),0),a=qn(tn(n)).map(l=>({center:r,radius:Math.hypot(l.x-r.x,l.z-r.z),hit:!1}));if(t&&i){const l=UM(i,t),c=Hh(n,l.x,l.z);a.push({center:r,radius:Math.hypot(c.x-r.x,c.z-r.z),hit:!0})}return a},Hh=(n,e,t)=>{const i=Math.sin(n.heading),s=Math.cos(n.heading);return{x:n.x+e*s+t*i,z:n.z-e*i+t*s}},NM=(n,e,t=-558)=>{let i=n;const s=[i.car];for(let r=0;r<yl;r++){const o=Fi(i,bd(i.car,"reverse",t,!1),Sd);if(o.collisions>i.collisions||o.car.speed===0&&r>10){const a=IM(i.car,n.scenario);return{lines:ws([...s,i.car]),tone:"bad",hit:a,circles:Td(n.car,t,a,i.car)}}if(i=o,s.push(i.car),wd(i.car,e)<.02)break}return{lines:ws(s),tone:"bad"}},En=-558,zM=2.1,ec=n=>n.bay.cz-n.bay.hl-zM-he.width/2,Co=(n,e)=>{const t=Us(n);return{...t,car:{...t.car,z:e}}},FM="Look over your right shoulder at the small rear side window.",tc=(n,e,t,i,s,r)=>{n.add({say:"Drive slowly past the garage, steering straight.",look:"Look right through the passenger window as pole 1 passes.",pedal:"forward",wheel:0,until:o=>xo(o,e)>=90,overlays:[{kind:"door"}]}),n.hold("Check your distance: how much of pole 1 does the door hide?",t,[{kind:"door"}]),n.add({say:"Keep going. Watch pole 1 over your right shoulder.",look:FM,pedal:"forward",wheel:0,until:o=>xo(o,e)>=e.windowEdgeDeg+i,overlays:[{kind:"sight"}]}),n.hold(s,r,[{kind:"sight"}])},OM="About a third of it. That is the right distance. Why: the closer the pole, the more of it the door hides.",nc=(n,e,t,i=!0)=>{const s=e.bay.requiredHeading;return n.add({say:"With the car stopped, steer fully right.",look:"The dashed lines show where the wheels will go. You do not steer again until the car is straight.",pedal:"stop",wheel:En,ghost:"future"}),i&&n.hold("Why stop here? Steering fully right, the car swings round one fixed point on the ground.","The right rear wheel draws the smallest circle, and the car never goes inside it. From this stop, pole 1 is just inside that circle, and a quarter of the swing brings the car to the middle of the garage. Stop earlier or later and the swing ends off-center. On another car the mark on the window may sit a little differently. The rule is the same.",[{kind:"circle"}],"future"),n.add({say:"Reverse slowly. Keep steering fully right.",look:"Right mirror: pole 1 passes beside the rear corner. While you can see it beside the car, you are clear of it.",pedal:"reverse",wheel:En,until:r=>wd(r,s)<.012,ghost:"future"}),n.hold("Stop when the car is straight in the garage.","Both mirrors: the garage side lines run parallel to the car, with the same gap on both sides.",[{kind:"parallel"}]),n.add({say:"With the car stopped, straighten the steering.",pedal:"stop",wheel:0,overlays:[{kind:"parallel"}]}),n.add({say:"Reverse straight in, slowly.",look:"Right mirror: watch the end of the side line move down toward the rear wheel arch.",pedal:"reverse",wheel:0,until:r=>PM(Mo(r,Es(r)),t)<=0,overlays:[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}]}),n.hold("Stop when, in the right mirror, the end of the side line is level with the back of the rear wheel arch.","That is where the arch meets the bottom edge of the body. Why this mark: the line end is painted on the ground, so it works with or without poles. The car is fully in and centered. Done.",[{kind:"depth"},{kind:"mirror",side:"right",mark:"corner"}],void 0,0),n},kM=(n,e=ec(n))=>{const t=Ql(n),i=new Zn(Co(n,e));return i.hold("Reverse into the garage on your right. Pole 1 is the near entrance pole, pole 2 the far one.","You drive past the garage, leaving a gap a bit wider than your car, then reverse in.",[]),tc(i,t,OM,0,"Stop when pole 1 reaches the back edge of the small rear side window.","The dashed line is your view to pole 1. It now touches the window edge. This is the start point."),nc(i,n,t).finish("garage-ok","Reverse into the garage","The correct run: stop at one mark, steer fully right, reverse in, straighten, stop at the depth mark.","ok",t)},BM=4,Ad=-.8,Rd=(n,e=ec(n),t=BM,i=Ad,s=Ed,r)=>{const o=Ql(n),a=n.bay.requiredHeading,l=new Zn(Co(n,e));return r?tc(l,o,r.verdict,t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From further out, the usual mark comes too late. Watch what happens."):l.add({say:"Mistake: the car drove too far past the garage before stopping.",look:"Pole 1 is already past the back edge of the small rear side window.",pedal:"forward",wheel:0,until:c=>xo(c,o)>=o.windowEdgeDeg+t,overlays:[{kind:"sight"}]}),l.add({say:"Steer fully right, as usual.",pedal:"stop",wheel:En}),l.add({say:"Reverse slowly, steering fully right.",look:"Right mirror: pole 1 comes closer to the side of the car.",pedal:"reverse",wheel:En,until:c=>Sl(c,o.pole1)<0&&AM(c,o.pole1)<=s,overlays:[{kind:"danger"}]}),l.hold("Stop! Pole 1 is about to disappear behind the body in the right mirror.","Red path: if you keep going, the side of the car hits pole 1. When the car hides the pole in the mirror, you are about to hit it.",[{kind:"danger"},{kind:"mirror",side:"right",mark:"pole1"}],"keep"),l.add({say:"With the car stopped, straighten the steering.",look:"Steering straight, the car moves back without coming closer to pole 1.",pedal:"stop",wheel:0,overlays:[{kind:"bumper"}]}),l.add({say:"Reverse straight, slowly.",look:"Right mirror: pole 1 slides along the side of the car toward the rear bumper.",pedal:"reverse",wheel:0,until:c=>Sl(c,o.pole1)>=i,overlays:[{kind:"bumper"}]}),l.hold("Stop when pole 1 has just passed the rear corner and stands beside the rear bumper.","Why here: from this point, steering fully right swings the rear of the car past pole 1 instead of into it. If you drove much further past, drive forward and start again.",[{kind:"bumper"}]),nc(l,n,o,!1).finish(r?.id??"garage-too-far",r?.title??"Mistake: drove too far",r?.summary??"The side of the car heads for pole 1. Fix: straighten, reverse until pole 1 is beside the rear bumper, then steer fully right again.","mistake",o,a)},HM=4,Cd=.3,Pd=1,Ld=(n,e=ec(n),t=HM,i=Cd,s=Pd,r)=>{const o=Ql(n),a=new Zn(Co(n,e));return r?tc(a,o,r.verdict,-t,"Stop at the usual point: pole 1 at the back edge of the small rear side window.","From this close, the usual mark comes too early. Watch what happens."):a.add({say:"Mistake: the car stopped too early, before the usual mark.",look:"Pole 1 has not reached the back edge of the small rear side window yet.",pedal:"forward",wheel:0,until:l=>xo(l,o)>=o.windowEdgeDeg-t,overlays:[{kind:"sight"}]}),a.add({say:"Steer fully right, as usual.",pedal:"stop",wheel:En}),a.add({say:"Reverse slowly, steering fully right.",look:"Look back through the rear window: pole 2 comes toward the left rear corner.",pedal:"reverse",wheel:En,until:l=>Pn(Mo(l,Es(l)),o.pole2)<=i,overlays:[{kind:"danger",pole:2}]}),a.hold("Stop! The left rear corner is about to hit pole 2.","You see this through the rear window, not in the mirrors, because the pole is behind the car. Red path: if you keep going, the corner hits it.",[{kind:"danger",pole:2}],"keep"),a.add({say:"With the car stopped, steer fully left.",look:"Why left: driving forward this way moves the rear away from pole 2 and turns the car back a little.",pedal:"stop",wheel:-En,overlays:[{kind:"gap"}]}),a.add({say:"Drive forward slowly, steering fully left.",look:"Look back: the gap between the left rear corner and pole 2 opens up.",pedal:"forward",wheel:-En,until:l=>Pn(Mo(l,Es(l)),o.pole2)>=s,overlays:[{kind:"gap"}]}),a.hold("Stop when the gap between the left rear corner and pole 2 is about half a car width.","Now steer fully right and reverse again. If you started much too early, drive forward and start again.",[{kind:"gap"}]),nc(a,n,o,!1).finish(r?.id??"garage-too-early",r?.title??"Mistake: started too early",r?.summary??"The left rear corner heads for pole 2. Fix: stop, steer fully left, drive forward until there is room, then reverse in again.","mistake",o,n.bay.requiredHeading)},GM=1.6,VM=2.6,WM=(n,e=GM)=>Ld(n,n.bay.cz-n.bay.hl-e-he.width/2,0,Cd,Pd,{id:"garage-close",title:"Approach: too close",summary:"You passed the garage too close. The usual mark then comes too early and the car heads for pole 2. Same fix as starting too early.",verdict:"Almost half of it. You are too close (normal is about a third). Best fix: drive on and come back wider."}),XM=(n,e=VM)=>Rd(n,n.bay.cz-n.bay.hl-e-he.width/2,0,Ad,Ed,{id:"garage-wide",title:"Approach: too wide",summary:"You passed the garage too wide. The usual mark then comes too late and the car heads for pole 1. Same fix as driving too far.",verdict:"Only a fifth of it. You are too far out (normal is about a third). Best fix: drive on and come back closer."}),qM=n=>[kM(n),Rd(n),Ld(n),WM(n),XM(n)],ic=1/120,Dd=2,Id=28800,sc=5.54,Ud=3,YM=(n,e)=>{let t=1/0;for(const i of e.course?.poles??[])Math.min(Math.hypot(i.x-rt.x,i.z-rt.z),Math.hypot(i.x-_t.x,i.z-_t.z))<yn-1&&(t=Math.min(t,Pn(n,i)));return t},ZM=(n,e=sc)=>{const{path:t,marks:i}=Xd(n,e),r=_d(t,Ud,{i:0}),o=Us(n);let a={...o,car:{...o.car,z:t[0].z}};const l=[a.car];let c=1/0;for(let p=0;p<Id&&!a.complete;p++){const E=rd(n.bay,tn(a.car)),S=jl(a,r(a),!1),v={throttle:!E,reverse:!1,handbrake:E,steerLeft:S>a.car.wheelDeg+4,steerRight:S<a.car.wheelDeg-4};a=Fi(a,v,ic),l.push(a.car),c=Math.min(c,YM(a.car,n))}const h=(p,E)=>{const S=t[p];let v=E,I=1/0;for(let C=E;C<l.length;C++){const b=Math.hypot(l[C].x-S.x,l[C].z-S.z);if(b<I)I=b,v=C;else if(I<1&&b>I+2)break}return v},u=h(i.nearIn+6,0),d=h(i.farIn-1,u+1),f=h(i.farIn,d+1),g=h(i.nearAgain-1,f+1),_=h(i.nearAgain,g+1),m=h(i.exit+8,_+1);return{cars:l,at:{turnIn:u,crossOut:d,farIn:f,crossBack:g,nearAgain:_,exit:m},faults:a.collisions+(a.course?.poleHits??0)+(a.course?.lineTouches??0),islandGap:c}},Nd=()=>({pole1:vd,pole2:Ml}),$M=n=>{const e=ZM(n),{cars:t,at:i}=e,s=t.length-1,r=(c,h)=>{const u=[];for(let d=c;d<=h;d+=Dd)u.push(t[d]);return u[u.length-1]!==t[h]&&u.push(t[h]),u},o=[],a=(c,h,u,d,f=[])=>{o.push({say:u,look:d,pedal:"forward",wheel:t[h].wheelDeg,frames:r(c,h),overlays:f})},l=(c,h,u,d,f)=>{const g={say:h,look:u,pedal:"stop",wheel:t[c].wheelDeg,frames:[t[c]],overlays:d};f&&(g.ghost={lines:ws(r(f[0],f[1])),tone:"ok"}),o.push(g)};return l(0,"Figure eight: pass poles 1 and 2 close, with the side of the car.","Why close to the outer poles: the rear wheels always turn tighter than the front ones. Driving wide keeps them off the inner line. You only need to watch the front of the car.",[{kind:"eightRefs"}],[0,i.turnIn]),a(0,i.turnIn,"Drive in through the gap, right side close to pole 1.","Pole 1 (yellow band) is on the outer line ahead, to your right.",[{kind:"eightMirror",side:"right",pole:1}]),l(i.turnIn,"Pole 1 is level with your right mirror. Steer left a little over one full turn.","Start turning just before, so the steering is already there at this point. The right side of the car passes close to pole 1.",[{kind:"eightMirror",side:"right",pole:1}],[i.turnIn,i.crossOut]),a(i.turnIn,i.crossOut,"Drive round the near ring, close to the outer poles.","Watch pole 2 move toward your left front corner.",[{kind:"eightCornerSight",side:"left"}]),l(i.crossOut,"Pole 2 comes in just left of your left front corner. Straighten the steering.","You see it between the corner and the windscreen pillar. Drive toward it. The left side of the car will pass close to it.",[{kind:"eightCornerSight",side:"left"}],[i.crossOut,i.farIn]),a(i.crossOut,i.farIn,"Cross the middle, left side close to pole 2.",void 0,[{kind:"eightPillarSight",side:"left"}]),l(i.farIn,"Pole 2 goes behind your left windscreen pillar. Steer right a little over one full turn.","Why now: pole 2 is beside your left front wheel. The front of the car is past it and free to turn.",[{kind:"eightPillarSight",side:"left"}],[i.farIn,i.crossBack]),a(i.farIn,i.crossBack,"Drive round the far ring, close to the outer poles.","Watch pole 2 move toward your right front corner.",[{kind:"eightCornerSight",side:"right"}]),l(i.crossBack,"Pole 2 lines up with your right front corner. Straighten the steering.","Keep pole 2 on that corner as you drive. The right side of the car will pass close to it.",[{kind:"eightCornerSight",side:"right"}],[i.crossBack,i.nearAgain]),a(i.crossBack,i.nearAgain,"Cross back, right side close to pole 2.",void 0,[{kind:"eightPillarSight",side:"right"}]),l(i.nearAgain,"Pole 2 comes beside your right front wheel. Steer left a little over one full turn.","From the seat you see it near the right windscreen pillar.",[{kind:"eightPillarSight",side:"right"}],[i.nearAgain,i.exit]),a(i.nearAgain,i.exit,"Drive round the near ring to the gap.",void 0),l(i.exit,"At the gap, straighten the steering and drive straight out.","Stop when the whole car is inside the box.",[],[i.exit,s]),a(i.exit,s,"Straight out through the gap into the box.",void 0),l(s,"Inside the box, straight. Done.",void 0,[]),{id:"eight-ok",title:"Figure eight",summary:"Stay close to the outer poles. Pole 1 at the right mirror: steer left. Pole 2 just left of the left corner: straighten. Pole 2 behind the left pillar: steer right. Pole 2 on the right corner: straighten. Pole 2 beside the right front wheel: steer left.",tone:"ok",scenario:n,refs:Nd(),steps:o,collisions:e.faults}},KM=Ye.inner,Gh=Ye.outer,zd=.1,Fd=.05,Od=(n,e,t)=>{const[i,s]=zi(n),r=t?i:s;return Math.hypot(r.x-e.x,r.z-e.z)-KM-zd-Fd},kd=(n,e,t,i)=>{const[,,s,r]=zi(n),o=t?r:s,a=Gh-Fd-(Math.hypot(o.x-e.x,o.z-e.z)+zd);let l=1/0;for(const c of i.course?.poles??[])Math.hypot(c.x-e.x,c.z-e.z)>Gh&&(l=Math.min(l,Pn(n,c)));return Math.min(a,l)},JM=n=>Math.atan(he.wheelbase/n)*180/Math.PI*he.steeringRatio,jr=JM(sc),Mi=(n,e,t,i)=>{const s=[n.s.car];for(let r=0;r<Id&&!i(n.s,r);r++){const o=n.s.car,a=e(n.s),l={throttle:o.speed<t-.03,reverse:o.speed>t+.08,handbrake:!1,steerLeft:a>o.wheelDeg+4,steerRight:a<o.wheelDeg-4};n.s=Fi(n.s,l,ic),n.aim(n.s),n.cars.push(n.s.car),r%Dd===0&&s.push(n.s.car)}return s.push(n.s.car),s},jM=(n,e,t)=>{let i=n;const s=[i.car];for(let r=0;r<1440;r++){const o={throttle:!0,reverse:!1,handbrake:!1,steerLeft:e>i.car.wheelDeg+4,steerRight:e<i.car.wheelDeg-4},a=Fi(i,o,ic);if((a.course?.lineTouches??0)>(i.course?.lineTouches??0)||(a.course?.poleHits??0)>(i.course?.poleHits??0)||a.collisions>i.collisions){const c=zi(a.car),h=t.course?.boundaries??[];let u=c[0],d=1/0;for(const f of c)for(const g of h){const _=g.x2-g.x1,m=g.z2-g.z1,p=Math.max(0,Math.min(1,((f.x-g.x1)*_+(f.z-g.z1)*m)/(_*_+m*m))),E=Math.hypot(f.x-(g.x1+_*p),f.z-(g.z1+m*p));E<d&&(d=E,u=f)}for(const f of t.course?.poles??[]){const g=Pn(a.car,f)+.1;g<d&&(d=g,u={x:f.x,z:f.z})}return{lines:ws([...s,a.car]),tone:"bad",hit:u,circles:Td(n.car,e,u,a.car)}}i=a,s.push(i.car)}return{lines:ws(s),tone:"bad"}},QM=10,ey={inner:22,outer:30},Vh=(n,e,t=120,i=e==="inner"?.5:.2,s=e==="inner"?"straight":270)=>{const{path:r,marks:o}=Xd(n,sc),a={i:0},l=_d(r,Ud,a),c=Us(n),h={s:{...c,car:{...c.car,z:r[0].z}},cars:[],aim:l},u=L=>jl(L,l(L),!1),d=he.maxFwdSpeed,f=.5,g=e==="inner",_=_t,m=!1,p=L=>g?Od(L,_,m):kd(L,_,m,n),E=[],S=(L,N,V,H,se="forward")=>{E.push({say:N,look:V,pedal:se,wheel:L[L.length-1].wheelDeg,frames:L,overlays:H})},v=(L,N,V,H)=>{E.push({say:L,look:N,pedal:"stop",wheel:h.s.car.wheelDeg,frames:[h.s.car],overlays:V,ghost:H})},I={kind:"ringGap",ring:"far",side:g?"inner":"outer"},C=g?[I,{kind:"mirror",side:"right",mark:"rearWheel"}]:[I],b=L=>()=>(a.near??0)>=L,P=o.farIn;Mi(h,u,d,b(P-QM)),h.cars.length=0,v(g?"Mistake: too much steering in the far ring.":"Mistake: too little steering in the far ring.",g?"The car turns tighter than the ring and moves inward. The right rear wheel heads for the inner line.":"The car turns wider than the ring and moves outward. The left front corner heads for the outer line.",[{kind:"eightRefs"}]);const y=Mi(h,u,d,b(P+ey[e])),x=p(h.s.car);S(y,"Past pole 2 into the far ring, steering right a little over one full turn.",g?"Right mirror: a strip of road between the rear wheel and the inner line. It should stay like this all the way round.":"Over the bonnet: the outer line runs well left of the left front corner. It should stay like this all the way round.",C);const A=g?-(jr+t):-(jr-t);S(Mi(h,()=>A,d,L=>p(L.car)<=i),g?"Too much steering: the car turns tighter.":"Too little steering: the car runs wide.",g?"Right mirror: the inner line moves toward the rear wheel. The strip of road gets thin.":"Over the bonnet: the outer line slides toward the left front corner.",C),v(g?"The right rear wheel is close to the inner line.":"The left front corner is close to the outer line.",g?"Right mirror: the line is almost at the wheel. Red: if you hold this steering, the rear wheel runs onto the line. The rear wheel always turns tighter than the front one.":"Over the bonnet: the line is about to go under the corner. Red: if you hold this steering, the front runs onto the line and the outer poles.",C,jM(h.s,A,n));const z=s==="straight"?0:A-s,O=g?Math.min(x-.1,i+.2):x-.05;let W=1/0;return g||S(Mi(h,()=>A,f,L=>L.car.speed<=f+.03),"Fix: first slow down until the car barely moves.","Why: now your hands finish turning the steering before the car has gone far, so the turn tightens sooner.",C),S(Mi(h,()=>z,f,(L,N)=>{const V=p(L.car);return W=Math.min(W,V),N>60&&(V>=O||s==="straight"&&V>=W+.04)}),g?"Fix: straighten the steering and slow down until the car barely moves.":"Now add steering to the right, almost all the way.",g?"Steering straight, the car moves out toward the outer line, away from the inner line. The rear wheel still moves in for a moment, so act early.":"The car turns tighter and the front moves away from the outer line. The path depends on the steering, not on the speed.",C),v(g?"The rear wheel stops moving in. The strip of road starts to widen.":"The front is clear of the outer line. Go back to a little over one full turn right and hold it.",g?"Right mirror: keep that strip of road from here on.":"Over the bonnet: the line is clear of the corner again. Keep it there.",C),g&&S(Mi(h,()=>-(jr+40),f,(L,N)=>N>30&&Math.abs(L.car.wheelDeg+jr+40)<5),"Go back to a little over one full turn right, still barely moving.","The car barely moves while you steer, so it turns without running out to the outer line.",C),S(Mi(h,u,d,(L,N)=>N>360),"Back on the path. Carry on as usual.",void 0,C),{id:g?"eight-inner":"eight-outer",title:g?"Mistake: near the inner line":"Mistake: near the outer line",summary:g?"Too much steering after pole 2, so the rear wheel moves toward the inner line. Fix: straighten, slow right down, then go back to a little over one full turn.":"Too little steering after pole 2, so the front runs wide toward the outer line. Fix: slow right down, add steering, then go back to a little over one full turn.",tone:"mistake",scenario:n,refs:Nd(),viewBox:{cx:_t.x,cz:_t.z-.8,w:2*(Ye.outer+1.6),h:2*(Ye.outer+1.6)+1.6},steps:E,collisions:h.s.collisions+(h.s.course?.poleHits??0)+(h.s.course?.lineTouches??0)}},ty=n=>[$M(n),Vh(n,"inner"),Vh(n,"outer")],ny=1/120,iy=2,sy=14400,ry=he.length-he.rearOverhang,Bd=kx(ry),Qr={y:pt.y-pt.h/2,z:pt.z-pt.d/2,xIn:pt.x-pt.w/2,xOut:pt.x+pt.w/2},oy=()=>{const n=Ge.y/(Ge.y-Qr.y);return{z:Ge.z+(Qr.z-Ge.z)*n,xIn:Ge.x+(Qr.xIn-Ge.x)*n,xOut:Ge.x+(Qr.xOut-Ge.x)*n}},ay=.15,ly=n=>-Math.max(...n.course.boundaries.map(t=>-Math.min(t.x1,t.x2)))+Jl/2+od+ay+_o/2,cy=(n,e)=>n.course.stopLine.z-mr(e),hy=n=>{const e=ly(n),t=Us(n);let i={...t,car:{...t.car,x:e,z:-2.2,heading:0,speed:0,wheelDeg:0}};const s=[],r=u=>cy(n,u),o=(u,d)=>{const f=[i.car];for(let g=0;g<sy&&!d(i,g);g++){const _=i.car,m={throttle:u.throttle??(u.speed!==void 0&&_.speed<u.speed),reverse:!1,handbrake:u.handbrake??!1,steerLeft:!1,steerRight:!1};i={...Fi(i,m,ny),settle:0,complete:!1},g%iy===0&&f.push(i.car)}return f.push(i.car),f},a=(u,d,f,g,_)=>{s.push({say:d,look:f,pedal:g,wheel:0,frames:u,overlays:_})},l=(u,d,f)=>{s.push({say:u,look:d,pedal:"stop",wheel:0,frames:[i.car],overlays:f})},c=.45;l("Hill start: stop just before the stop line, then move off without rolling back.","Keep to the right of the ramp, right tyres close to the edge line. Why: only from there does the stop line reach under your left mirror. From the middle of the ramp it ends before the mirror and you have to guess.",[{kind:"hillSight"},{kind:"hillPlan",compare:!0}]),a(o({speed:c},u=>r(u.car)<=2.5),"Drive up the ramp slowly, steering straight, close to the right edge.","Look at the ground just under the left mirror.","forward",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({speed:c},u=>r(u.car)<=Bd),"Watch the line come up under the mirror.","The drawn line shows where you look: from your eyes, past the bottom of the mirror, down to the road.","forward",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({handbrake:!0},(u,d)=>d>120*1.2&&Math.abs(u.car.speed)<.01),"The stop line is right under the mirror: stop and pull the handbrake.","Why this mark: the bonnet hides the road right in front of the car, but past the mirror you can still see it. The bumper is now a short step before the line, well within the allowed distance. Hold still for a second.","stop",[{kind:"hillSight"},{kind:"hillPlan"}]),l("In a real car, check this mark before you rely on it.","Stop before a line, get out and see how far the bumper is from it. Then sit back in and note where the line is against your left mirror. The mark depends on the car, on your height and on how you sit.",[{kind:"hillSight"},{kind:"hillPlan"}]),a(o({handbrake:!0,throttle:!0},(u,d)=>d>120*.6),"Keep the handbrake on and press the gas.","Why: the engine is already pulling when you release the handbrake, so the car cannot roll back.","stop",[{kind:"hillSight"}]),a(o({speed:c},u=>r(u.car)<-1),"Release the handbrake and drive on over the line.",void 0,"forward",[{kind:"hillSight"}]);const h=i.course?.hill;return{id:"hill-ok",title:"Stop at the line",summary:"Keep right, stop when the stop line shows up right under the left mirror.",tone:"ok",view:"side",scenario:n,refs:{pole1:{x:0,z:0},pole2:{x:0,z:0}},steps:s,collisions:i.collisions+(i.course?.lineTouches??0)+(h?.missedStop?1:0)+(h&&h.rollback>=.3?1:0)}},uy=n=>[hy(n)],bs=-En,hi=n=>{const e=n.bay,t=e.cz-e.hw,i=e.cz+e.hw;return{pole1:{x:e.cx+e.hl,z:t},pole2:{x:e.cx-e.hl,z:t},pole3:{x:e.cx-e.hl,z:i},edgeZ:t,curbZ:i}},Hd=.4,Ns=(n,e=Hd)=>hi(n).edgeZ-e-he.width/2,zs=(n,e)=>{const t=Co(n,e);return{...t,car:{...t.car,x:hi(n).pole2.x-3}}},Gd=(n,e)=>Math.atan2(Math.sin(n.heading-e.bay.requiredHeading),Math.cos(n.heading-e.bay.requiredHeading)),dy={x:-1.8/2,y:0,z:-.9},fy=(n,e)=>Eh(n,"right",e.pole3)-Eh(n,"right",cn(n,dy)),Vd=(n,e)=>zi(n)[0].z-e.edgeZ,py=(n,e)=>{const t=cn(n,Ge);return Ox(he.length-he.rearOverhang,Math.hypot(e.pole1.x-t.x,e.pole1.z-t.z))/ho},my=0,gy=.4,_y=.15,vy=.3,Fs=()=>({laneGap:Hd,startPast:my,pole3Stop:gy,wheelCross:_y,fixBonnet:vy}),Wd=n=>Es(n)/ky,Nn=n=>Mo(n,Es(n)),Wh={kind:"mirror",side:"right",mark:"pole3"},El=()=>[{kind:"laneGap"},{kind:"mirror",side:"right",mark:"edgeNear"}],xy="The edge line meets the bottom of the mirror about a quarter of the way out from the car. That is the right distance.",yo={kind:"mirror",side:"left",mark:"rearWheel"},rc=(n,e,t,i)=>{n.add({say:t?"Fix: with the car stopped, steer fully right.":"With the car stopped, steer fully right.",look:t?"Then the usual steps: reverse until pole 3 comes up to the car in the right mirror.":void 0,pedal:"stop",wheel:En,ghost:"future"}),n.add({say:"Reverse slowly, steering fully right. The rear of the car moves in toward the curb.",look:"Right mirror: pole 3 slides toward the side of the car.",pedal:"reverse",wheel:En,until:s=>fy(Nn(s),e)-.85*(Wd(s)*180/Math.PI)<=i.pole3Stop,overlays:[{kind:"pole3"},Wh]}),n.hold("Stop when pole 3 comes up to the side of the car in the right mirror, still fully visible.","Pole 3 is the rear pole at the curb. Why this mark: the right side of the car now points straight at pole 3, the back corner of the space. If the car hides the bottom of the pole, you went too far.",[{kind:"pole3"},Wh])},Oi=(n,e)=>{n.add({say:"With the car stopped, steer fully left.",pedal:"stop",wheel:bs,ghost:"future"}),n.add({say:"Reverse slowly, steering fully left. The front of the car moves in.",look:"Right mirror: the curb comes parallel to the car.",pedal:"reverse",wheel:bs,until:t=>Gd(t,e)-Wd(t)<=0,overlays:[{kind:"curb"}]})},Os=(n,e,t,i,s)=>(t&&n.hold("Parallel park into the space on your right. Pole 1 is its front end, pole 2 its rear end, pole 3 the rear pole at the curb.","Drive past close to the edge line of the space, then reverse in.",[{kind:"pole3"}]),n.add({say:"Drive forward slowly along the space, steering straight.",pedal:"forward",wheel:0,until:r=>r.x>=e.pole1.x-1.5}),s&&n.hold("Check your distance in the right mirror.",s,El()),n.add({say:"Keep going. Watch pole 1 in the right mirror.",look:"It moves back along the car toward the rear wheel.",pedal:"forward",wheel:0,until:r=>-Sl(Nn(r),e.pole1)>=i.startPast,overlays:[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]}),n.hold("Stop when pole 1 is level with the middle of your rear wheel.","Right mirror: pole 1 stands right beside the rear wheel. Why here: the car turns around its rear wheels. With them level with pole 1, the rear swings in just behind the pole.",[{kind:"level",at:"rearWheel"},{kind:"mirror",side:"right",mark:"pole1"}]),rc(n,e,!1,i),n.add({say:"With the car stopped, straighten the steering.",pedal:"stop",wheel:0,ghost:"future"}),n),My=(n,e,t,i,s,r)=>(Os(n,t,i,r),Ts(n,t,s),Oi(n,e),n),Ts=(n,e,t)=>{const i=t<0,s=t<-.4;n.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line.",pedal:"reverse",wheel:0,until:r=>Vd(Nn(r),e)>=t,overlays:[{kind:"wheelLine"},yo]}),n.hold(i?s?"Mistake: stopped the straight part far too early. The left rear wheel is still well before the edge line.":"Mistake: stopped the straight part too early. The left rear wheel has only reached the edge line, not crossed it.":"Stop when, in the left mirror, the left rear wheel has crossed the edge line.",i?s?"Steering fully left from here swings the front into pole 1. Watch.":"The car will end up too far out. Watch what happens.":"The whole tire is past the line. Why here: steering fully left from this point brings the front in and leaves all the wheels inside the line.",[{kind:"wheelLine"},yo])},yr=(n,e)=>(n.hold("Stop when the car is parallel to the curb.","Both mirrors: the curb and the edge line run parallel to the car.",[{kind:"curb"}]),n.add({say:"With the car stopped, straighten the steering.",pedal:"stop",wheel:0,overlays:[{kind:"curb"}]}),n.add({say:"Drive forward slowly to the middle of the space.",look:"Leave about the same gap to pole 1 ahead and pole 2 behind.",pedal:"forward",wheel:0,until:t=>tn(Nn(t)).cx>=e.bay.cx,overlays:[{kind:"endGaps"}]}),n.hold("Stop in the middle: equal gaps to both poles, all wheels inside the lines. Done.",void 0,[{kind:"endGaps"},{kind:"curb"}]),n),yy=(n,e={})=>{const t={...Fs(),...e},i=hi(n),s=Os(new Zn(zs(n,Ns(n,t.laneGap))),i,!0,t,xy);return Ts(s,i,t.wheelCross),Oi(s,n),yr(s,n).finish("parallel-ok","Parallel parking","Stop with pole 1 beside the rear wheel. Steer fully right and reverse until pole 3 comes up to the car in the right mirror. Reverse straight until the left rear wheel crosses the line. Steer fully left until parallel.","ok",i)},Sy=-.15,Ey=(n,e={},t=Sy)=>{const i={...Fs(),...e},s=hi(n),r=My(new Zn(zs(n,Ns(n,i.laneGap))),n,s,!1,t,i);return r.hold("Parallel, but too far out: the left wheels are on the edge line.","Left mirror: the edge line runs under the left wheels instead of beside the car. That is a fault.",[{kind:"edge"},{kind:"mirror",side:"left",mark:"edge"}]),r.add({say:"Fix: with the car stopped, straighten the steering.",look:"First make room ahead. Driving forward is easy to judge, and the poles behind are already clear.",pedal:"stop",wheel:0,overlays:[{kind:"edge"}],ghost:"future"}),r.add({say:"Drive forward slowly, steering straight.",look:"Watch pole 1 ahead over the bonnet.",pedal:"forward",wheel:0,until:o=>py(Nn(o),s)>=i.fixBonnet,overlays:[{kind:"bonnet"}]}),r.hold("Stop when the bonnet hides about a third of pole 1.","Why this mark: the closer the pole, the more of it the bonnet hides. A third hidden leaves enough room to reverse in again.",[{kind:"bonnet"}]),rc(r,s,!0,i),Oi(r,n),r.hold("Stop when parallel. All wheels are inside the lines. Done.","Left mirror: the edge line is beside the car. No need to drive forward again.",[{kind:"edge"},{kind:"endGaps"},{kind:"mirror",side:"left",mark:"edge"}]),r.finish("parallel-out","Mistake: stayed on the line","The straight part was too short, so the car ends on the edge line. Fix: drive forward until the bonnet hides a third of pole 1, then reverse in again the same way.","mistake",s)},wy=(n,e)=>e.curbZ-Math.max(...qn(tn(n)).map(t=>t.z)),by=.35,Ty=(n,e={},t=by)=>{const i={...Fs(),...e},s=hi(n),r=Os(new Zn(zs(n,Ns(n,i.laneGap))),s,!1,i);return r.add({say:"Reverse straight back, slowly.",look:"Left mirror: the left rear wheel comes up to the edge line… and the stop is missed.",pedal:"reverse",wheel:0,until:o=>wy(Nn(o),s)<=t,overlays:[{kind:"wheelLine"}]}),r.hold("Stop! Too deep: the rear is about to hit the curb and the rear poles.","Right mirror: the curb is right at the rear corner. Red path: keep reversing and you hit them.",[{kind:"curbDanger"},{kind:"mirror",side:"right",mark:"curb"}],"keep"),r.add({say:"Fix: drive forward slowly, steering straight.",look:"Driving forward is easy to judge. The car goes back out along the same path.",pedal:"forward",wheel:0,until:o=>Vd(Nn(o),s)<=i.wheelCross,overlays:[{kind:"wheelLine"},yo]}),r.hold("Stop when the left rear wheel is back just across the edge line.","That is the usual mark again. Steer fully left from here.",[{kind:"wheelLine"},yo]),Oi(r,n),yr(r,n).finish("parallel-deep","Mistake: too deep","You missed the stop on the straight part, so the rear comes close to the curb. Fix: drive forward until the left rear wheel is back at the line, then steer fully left.","mistake",s,n.bay.requiredHeading)},Ay=-1.2,Ry=.15,Cy=(n,e={},t=Ay,i=Ry)=>{const s={...Fs(),...e},r=hi(n),o=Os(new Zn(zs(n,Ns(n,s.laneGap))),r,!1,s);return Ts(o,r,t),o.add({say:"With the car stopped, steer fully left.",pedal:"stop",wheel:bs}),o.add({say:"Reverse slowly, steering fully left. The front swings toward pole 1.",look:"Look right through the windscreen: pole 1 comes toward the right front corner.",pedal:"reverse",wheel:bs,until:a=>Pn(Nn(a),r.pole1)<=i,overlays:[{kind:"danger",pole:1}]}),o.hold("Stop! The right front corner is about to hit pole 1.","Red path: keep turning and the front hits it.",[{kind:"danger",pole:1}],"keep"),rc(o,r,!0,s),o.add({say:"With the car stopped, straighten the steering.",pedal:"stop",wheel:0,ghost:"future"}),Ts(o,r,s.wheelCross),Oi(o,n),yr(o,n).finish("parallel-pole1","Mistake: hits pole 1","The straight part was far too short, so steering fully left swings the front into pole 1. Fix: steer fully right, then repeat the usual steps from pole 3.","mistake",r,n.bay.requiredHeading)},Py=.9,Ly=.15,Dy=.25,Iy=1,Xh=(n,e,t)=>Math.min(...(e.poles??[]).filter(i=>Math.abs(i.x-t.pole2.x)<1e-9).map(i=>Pn(n,i))),Uy=(n,e=Py)=>{const t={...Fs()},i=hi(n),s=Os(new Zn(zs(n,Ns(n,e))),i,!1,t,"The edge line meets the bottom of the mirror near its middle. That is too far out (normal is a quarter of the way out). Best fix: drive on and come back closer.");return Ts(s,i,t.wheelCross),s.add({say:"With the car stopped, steer fully left.",pedal:"stop",wheel:bs}),s.add({say:"Reverse slowly, steering fully left. The front of the car moves in.",look:"Look back through the rear window: the rear poles come close.",pedal:"reverse",wheel:bs,until:r=>Xh(Nn(r),n,i)<=Dy,overlays:[{kind:"danger",pole:2}]}),s.hold("Stop! From further out the car goes in too deep. The rear is about to hit the rear poles.","Red path and circles: keep turning and the rear hits them.",[{kind:"danger",pole:2}],"keep"),s.add({say:"Fix: with the car stopped, straighten the steering.",look:"First make room behind. Driving forward is easy to judge.",pedal:"stop",wheel:0,ghost:"future"}),s.add({say:"Drive forward slowly, steering straight.",look:"Look back: the gap to the rear poles opens up.",pedal:"forward",wheel:0,until:r=>Xh(Nn(r),n,i)>=Iy,overlays:[{kind:"endGaps"}]}),s.hold("Stop when the gap behind is about half a car width.","Now steer fully left again, until parallel.",[{kind:"endGaps"}]),Oi(s,n),yr(s,n).finish("parallel-wide","Approach: too wide","You passed too far out, so the car goes in too deep and the rear comes close to the rear poles. Fix: straighten, drive forward to make room behind, then steer fully left again.","mistake",i,n.bay.requiredHeading)},Ny=2,zy=1.5,Fy=(n,e=Ly,t=zy)=>{const i=Fs(),s=hi(n),r=new Zn(zs(n,Ns(n,e)));r.add({say:"Drive forward slowly along the space, steering straight.",pedal:"forward",wheel:0,until:a=>a.x>=s.pole2.x+Ny}),r.hold("Check your distance in the right mirror early, while there is room ahead.","The edge line meets the bottom of the mirror right next to the car. That is too close: pole 1 would almost touch your door.",El());let o;return r.add({say:"Fix: steer half a turn left and drive forward slowly, about a third of a car length.",look:"The car moves out, away from the line.",pedal:"forward",wheel:180,until:a=>(o??=a.x,a.x-o>=t)}),r.add({say:"Now steer half a turn right until the car is straight again.",pedal:"forward",wheel:-180,until:a=>Gd(a,n)-Es(a)/13<=0}),r.add({say:"Straighten the steering.",pedal:"stop",wheel:0}),r.hold("Check again: the line now meets the mirror bottom about a quarter of the way out.","Right distance. Carry on as usual.",El()),Os(r,s,!1,i),Ts(r,s,i.wheelCross),Oi(r,n),yr(r,n).finish("parallel-close","Approach: too close","You are passing too close to the space. Spot it early in the right mirror, move out a little, then park as usual.","mistake",s)},Oy=n=>[yy(n),Ey(n),Ty(n),Cy(n),Fy(n),Uy(n)],ky=he.wheelbase/Math.tan(he.maxWheelDeg/he.steeringRatio*Math.PI/180),ho=1.15,Xd=(n,e=yn)=>{const t=rt,i=_t,s=(C,b)=>({x:C.x+e*Math.cos(b),z:C.z+e*Math.sin(b)}),r=(C,b)=>Array.from({length:C+1},(P,y)=>b(y/C)),o=(C,b,P)=>{let y={err:1/0,leave:0,arrive:0};for(let x=0;x<4e3;x++){const A=2*Math.PI*x/4e3,z=s(C,A),O={x:-Math.sin(A)*P,z:Math.cos(A)*P},W={x:b.x-z.x,z:b.z-z.z},L=W.x*O.x+W.z*O.z,N=P===1?W.x*O.z-W.z*O.x:-(W.x*O.z-W.z*O.x),V=Math.abs(N-e);if(L>0&&V<y.err){const H={x:z.x+O.x*L,z:z.z+O.z*L};y={err:V,leave:A,arrive:Math.atan2(H.z-b.z,H.x-b.x)}}}return y},a=o(t,i,-1),l=o(i,t,1),c=(C,b,P)=>r(Math.ceil(Math.abs(P-b)*e/.25),y=>s(C,b+(P-b)*y)),h=-Math.PI/2;let u=a.leave;for(;u>=h;)u-=2*Math.PI;let d=l.leave;for(;d<=a.arrive;)d+=2*Math.PI;let f=gr;for(;f>=l.arrive;)f-=2*Math.PI;const g=n.bay.requiredHeading,_=[r(36,C=>({x:t.x+Ye.startBack*(1-C),z:t.z-e})),c(t,h,u),c(i,a.arrive,d),c(t,l.arrive,f)],m=s(t,f),p=Math.hypot(n.bay.cx-m.x,n.bay.cz-m.z)+8;_.push(r(Math.ceil(p/.25),C=>({x:m.x+Math.sin(g)*p*C,z:m.z+Math.cos(g)*p*C})));const E=_.flat(),S=C=>_.slice(0,C).reduce((b,P)=>b+P.length,0),v=S(2),I=S(3);return{path:E,marks:{nearIn:S(1)-6,outLeave:v-8,farIn:v,backLeave:I-8,nearAgain:I,exit:S(4)-8}}};class By{latched=null;lastWheel=null;apply(e,t,i){const s=this.lastWheel;if(this.lastWheel=t,i===void 0)return this.latched=null,e;this.latched&&!e[this.latched]&&(this.latched=null),s!==null&&s!==i&&t===i&&!this.latched&&e.steerLeft!==e.steerRight&&(this.latched=e.steerLeft?"steerLeft":"steerRight");const o={...e,detentDeg:i};return this.latched&&(o[this.latched]=!1),o}reset(){this.latched=null,this.lastWheel=null}}const qh=(n,e,t,i)=>{const s=[],r=new Set;for(const a of n)r.add(a-i),r.add(a+i);for(const a of r)s.push({x1:a,z1:e,x2:a,z2:t,width:.1});const o=[...r].sort((a,l)=>a-l);return s.push({x1:o[0],z1:t,x2:o[o.length-1],z2:t,width:.1}),s},Hy=1,ir=(n,e,t,i)=>{const s=Math.max(1,Math.round(Math.hypot(t-n,i-e)/Hy));return Array.from({length:s+1},(r,o)=>({x:n+(t-n)*o/s,z:e+(i-e)*o/s}))},qd=[-5.6,-2.8,0,2.8,5.6],Yd=1.4,Gy=5.4,Vy=3,Yh={hw:Yn.garage.bayWidth/2,depth:Yn.garage.bayLength},Wy=n=>n-(pt.z-(he.length/2-he.rearOverhang)),Zd=(n,e,t,i)=>{const s=Vy,r=s+t,o=s+t/2,a=Wy(o);return{bay:{cx:0,cz:o,hw:e,hl:t/2,angle:0,requiredHeading:n},parkedCars:[],poles:[{x:-e,z:s},{x:e,z:s},...ir(-e,a,-e,r),...ir(e,a,e,r),...ir(-e,r,e,r).slice(1,-1)],solids:[{rect:{cx:0,cz:r+.55,hw:7.6,hl:.15,angle:0},height:.5,color:10132116}],paint:[...qh(i,s,r,e),...qh(qd,-4,-9,Yd)]}},Xy={id:"head-in",name:"Perpendicular · head-in",description:"Drive forward into the empty 90° bay. Good warm-up for lot parking.",spawn:{x:-8,z:-.5,heading:Math.PI/2},...Zd(0,Yd,Gy,qd),par:{reversals:1,timeSec:60}},qy={id:"reverse-in",name:"Perpendicular · reverse-in",description:'Back into the empty 90° bay (the exam "garage") so the nose faces the aisle. Poles mark the entrance; hold E to look back over your shoulder.',spawn:{x:-8,z:-.25,heading:Math.PI/2},...Zd(Math.PI,Yh.hw,Yh.depth,[0]),par:{reversals:2,timeSec:80}},As=Yn.parallel,Jt=As.bayLength/2,wn=3.2,is=wn+As.bayWidth,Ma=wn-As.laneWidth,Zh=-Jt,ya=Jt+As.forwardZone,Yy={id:"parallel",name:"Parallel parking",description:"Reverse into the curbside space between the poles at its ends. Watch the mirrors and the curb.",spawn:{x:Zh-6,z:wn-.85-he.width/2,heading:Math.PI/2},bay:{cx:0,cz:wn+As.bayWidth/2,hw:As.bayWidth/2,hl:Jt,angle:Math.PI/2,requiredHeading:Math.PI/2},parkedCars:[],poles:[...ir(-Jt,wn,-Jt,is),...ir(Jt,wn,Jt,is)],solids:[{rect:{cx:0,cz:is+.2,hw:25,hl:.2,angle:0},height:.14,color:11578528}],paint:[{x1:Zh-8,z1:Ma,x2:ya+3,z2:Ma,width:.1},{x1:-Jt,z1:wn,x2:-Jt,z2:is,width:.1},{x1:Jt,z1:wn,x2:Jt,z2:is,width:.1},{x1:-Jt,z1:wn,x2:Jt,z2:wn,width:.1},{x1:ya,z1:Ma,x2:ya,z2:is,width:.1}],par:{reversals:3,timeSec:100}},Rs=[Xy,qy,Yy,...yM],$d=1,wl=.85,$h=.07,Zy=4,bl=24,Tl=.03,$y=n=>{const e=Zy/bl,t=[{x:0,z:0,theta:0}];let{x:i,z:s,theta:r}=t[0];for(let o=0;o<bl;o++)r-=Math.tan(n)/he.wheelbase*e,i-=Math.sin(r)*e,s-=Math.cos(r)*e,t.push({x:i,z:s,theta:r});return t},Kh=(n,e,t,i)=>{for(let s=0;s<t.length;s++){const r=t[s],o=Math.cos(r.theta),a=-Math.sin(r.theta),l=i-$h/2,c=i+$h/2,h=e+s*6;n[h]=r.x+o*l,n[h+1]=Tl,n[h+2]=r.z+a*l,n[h+3]=r.x+o*c,n[h+4]=Tl,n[h+5]=r.z+a*c}},Jh=(n,e)=>{const t=[];for(let i=0;i<n-1;i++){const s=e+i*2;t.push(s,s+1,s+2,s+1,s+3,s+2)}return t},Sa=(n,e)=>{const t=new ze(new Un(wl*2-.1,.07),new li({color:e,transparent:!0,opacity:.9}));return t.rotation.x=-Math.PI/2,t.position.set(0,Tl-.005,-.9-n),t},Ky=()=>{const n=new Xt;n.add(Sa(.5,14826286)),n.add(Sa(1,16106818)),n.add(Sa(2,3590510));const e=bl+1,t=new Float32Array(e*2*3*2),i=new qt;i.setAttribute("position",new hn(t,3)),i.setIndex([...Jh(e,0),...Jh(e,e*2)]);const s=new ze(i,new li({color:16765500,transparent:!0,opacity:.85,side:vn}));n.add(s),n.traverse(a=>a.layers.set($d));let r=1/0;const o=a=>{if(Math.abs(a-r)<.004)return;r=a;const l=$y(a);Kh(t,0,l,wl),Kh(t,e*6,l,-wl),i.attributes.position.needsUpdate=!0,i.computeBoundingSphere()};return o(0),{group:n,update:o}},$s=new U;function on(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;$s.copy(e),$s[i]=0,$s.normalize();const c=.5*o/(o+a),h=1-$s.angleTo(n)/l;return Math.sign($s[t])===1?h*c:a/(o+a)+c+c*(1-h)}class as extends wt{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(e,t,i,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,l=new U,c=new U(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new U,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=on(g,l,"z","y",r,i),d[p+1]=1-on(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-on(g,l,"z","y",r,i),d[p+1]=1-on(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-on(g,l,"x","z",r,e),d[p+1]=on(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-on(g,l,"x","z",r,e),d[p+1]=1-on(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-on(g,l,"x","y",r,e),d[p+1]=1-on(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=on(g,l,"x","y",r,e),d[p+1]=1-on(g,l,"y","x",r,t);break}}}const Ea=.32,sr=he.length-he.rearOverhang,Tn=-.9,Ks=1.74,Al=.95,So=.82,Jy=[[Tn,.3],[sr,.3],[sr,.6],[sr-go.behindBumper,go.y],[2.2,So-.01],[Tn+.15,So-.01],[Tn,.7]],jy=[[2.24,.8],[1.7,1.43],[.12,1.45],[Tn+.18,.98],[Tn+.18,Al]],jh=(n,e,t)=>{const i=new Vu(n.map(([r,o])=>new ve(r,o))),s=new Xl(i,{depth:e-2*t,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:2,curveSegments:1});return s.rotateY(-Math.PI/2),s.translate((e-2*t)/2,0,0),s.computeVertexNormals(),s},eo=(n,e)=>{const t=new At;t.position.set(n,Ea,e);const i=new ze(new Cn(Ea,Ea,.24,20),new Mt({color:1250327,roughness:.95}));i.rotation.z=Math.PI/2,i.castShadow=!0;const s=new ze(new Cn(.17,.17,.25,14),new Mt({color:12172998,roughness:.3,metalness:.9}));return s.rotation.z=Math.PI/2,t.add(i,s),t},Qh=(n,e,t,i)=>{const s=new ze(new as(.42,.09,.08,2,.03),new Mt({color:n,emissive:n,emissiveIntensity:.6}));return s.position.set(e,i,t),s},Qy=()=>{const n=new Xt,e=new Mt({color:2303532,roughness:.75}),t=new Mt({color:3948875,roughness:.6}),i=new ze(new Yl(.185,.022,10,32),e),s=new ze(new Cn(.05,.05,.04,16),t);s.rotation.x=Math.PI/2;const r=new ze(new wt(.34,.042,.026),t),o=new ze(new wt(.042,.17,.026),t);return o.position.y=-.09,n.add(i,s,r,o),n.position.set(.42,.97,2.08),n.rotation.x=-1,n},wa=1.7,zt=pt,ss=(n,e,t,i,s,r)=>{const o=new ze(new wt(.05,s-i,t-e),r);return o.position.set(n*tt.trimX,(i+s)/2,(e+t)/2),o},eS=n=>{const e=new Xt,t=2.15;for(const l of[-1,1]){const c=tt.bPillar.z+tt.bPillar.width/2;e.add(ss(l,tt.cPillarRearZ,c,.3,tt.beltY,n)),e.add(ss(l,c,t,.3,id,n)),e.add(ss(l,tt.cPillarRearZ,wa,tt.roofY,tt.roofY+.05,n));const h=(u,d)=>ss(l,u-d/2,u+d/2,tt.beltY,tt.roofY,n);e.add(h(tt.bPillar.z,tt.bPillar.width),h(tt.divider.z,tt.divider.width)),e.add(ss(l,tt.quarterRearZ,tt.divider.z,tt.quarterTopY,tt.roofY,n)),e.add(ss(l,tt.cPillarRearZ,tt.quarterRearZ,tt.beltY,tt.roofY,n))}const i=new Mt({color:3356220,roughness:.95}),s=new ze(new wt(1.57,.06,wa-tt.cPillarRearZ),new Mt({color:7040627,roughness:.95}));s.position.set(0,tt.roofY+.04,(wa+tt.cPillarRearZ)/2),e.add(s);const r=new ze(new wt(2*tt.trimX,.02,t-tt.cPillarRearZ),n);r.position.set(0,.84,(t+tt.cPillarRearZ)/2),e.add(r);const o=new ze(new wt(1.4,.42,.1),i);o.position.set(0,.74,.2);const a=new ze(new wt(1.4,.14,.5),i);return a.position.set(0,.5,.48),e.add(o,a),e},Kd=(n,e=!1)=>{const t=new Xt,i=new Mt({color:n,roughness:.42,metalness:.25});i.envMapIntensity=.6;const s=new Mt({color:1844012,roughness:.08,metalness:.9}),r=new Mt({color:2303530,roughness:.8}),o=new ze(jh(Jy,Ks,.06),i);o.castShadow=!0,t.add(o);for(const _ of[-1,1]){const m=new ze(new wt(.05,Al-So+.02,2.2-(Tn+.15)),i);m.position.set(_*(Ks/2-.03),(Al+So)/2,(2.2+Tn+.15)/2),t.add(m)}const a=new ze(new as(Ks,.3,.24,2,.05),i);a.position.set(0,.84,Tn+.11),a.castShadow=!0,t.add(a);const l=new ze(jh(jy,1.58,.04),s);l.castShadow=!0,t.add(l);const c=new ze(new as(1.46,.05,1.56,2,.02),i);c.position.set(0,1.465,.91),c.castShadow=!0,t.add(c);for(const _ of[-1,1]){const m=new ze(new wt(.045,.78,.055),r);m.position.set(_*Pi.x,Pi.y,Pi.z),m.rotation.x=-.71,t.add(m)}for(const[_,m]of[[sr,1],[Tn,-1]]){const p=new ze(new as(Ks+.02,.2,.14,2,.05),r);p.position.set(0,.4,_-m*.07),p.castShadow=!0,t.add(p)}const h=eo(-.8,0),u=eo(.8,0),d=eo(-.8,he.wheelbase),f=eo(.8,he.wheelbase);t.add(h,u,d,f);for(const _ of[-.58,.58])t.add(Qh(16774344,_,sr-.16,.66)),t.add(Qh(14492177,_,Tn-.005,.84));for(const _ of[-1,1]){const m=zt.x-zt.w/2,p=Ks/2-.06,E=new ze(new wt(m-p,.06,.08),i);E.position.set(_*(m+p)/2,zt.y-.04,zt.z);const S=new ze(new as(zt.w,zt.h,zt.d,2,.035),i);S.position.set(_*zt.x,zt.y,zt.z),S.castShadow=!0;const v=new ze(new wt(zt.w-.04,zt.h-.035,.01),s);v.position.set(_*zt.x,zt.y,zt.z-zt.d/2-.004),t.add(E,S,v)}const g={group:t,frontWheelPivots:[d,f]};if(e){const _=new Mt({color:2764600,roughness:.9}),m=new ze(new as(1.55,.14,.2,2,.05),_);m.position.set(0,.92,1.99);const p=new ze(new wt(1.6,.07,.27),_);p.position.set(0,.825,2.185),t.add(m,p),t.add(eS(r));const E=Qy();t.add(E),g.steeringWheel=E}return g},eu=he.length/2-he.rearOverhang,ba={up:4.2,back:7.5},tS=26;class nS{cockpit;chase;top;view=1;lookTarget=0;leftTarget=0;look=0;lookLeft=0;constructor(e,t){this.cockpit=new Ft(72,t,.05,140),this.cockpit.position.set(Ge.x,Ge.y,Ge.z),this.cockpit.rotation.order="YXZ",this.cockpit.rotation.y=Math.PI,this.cockpit.rotation.x=-.09,e.add(this.cockpit),this.chase=new Ft(60,t,.1,200),this.top=new Ft(55,t,.1,200),this.top.up.set(0,0,-1)}setHeadTarget(e){this.lookTarget=e}setLookLeft(e){this.leftTarget=e?1:0}get headTurn(){return Math.max(this.look,this.lookLeft)}setView(e){this.view=e}get activeView(){return this.view}get active(){return this.view===1?this.cockpit:this.view===2?this.chase:this.top}setAspect(e){for(const t of[this.cockpit,this.chase,this.top])t.aspect=e,t.updateProjectionMatrix()}update(e,t){const i=(g,_,m)=>Math.abs(_-g)<1e-4?_:g+(_-g)*(1-Math.exp(-4*t/m));this.look=i(this.look,this.lookTarget,Li.seconds),this.lookLeft=i(this.lookLeft,this.leftTarget,ga.seconds);const s=this.look,r=this.lookLeft,o=Li.eye,a=ga.eye;this.cockpit.position.set(Ge.x+(o.x-Ge.x)*s+(a.x-Ge.x)*r,Ge.y+(o.y-Ge.y)*s+(a.y-Ge.y)*r,Ge.z+(o.z-Ge.z)*s+(a.z-Ge.z)*r),this.cockpit.rotation.y=Math.PI-(Li.yawDeg*s-ga.yawDeg*r)*Math.PI/180,this.cockpit.rotation.x=-.09+.04*s;const l=Math.sin(e.heading),c=Math.cos(e.heading),h=e.x+l*eu,u=e.z+c*eu,d=new U(h-l*ba.back,ba.up,u-c*ba.back),f=1-Math.exp(-5*t);this.chase.position.lengthSq()===0&&this.chase.position.copy(d),this.chase.position.lerp(d,f),this.chase.lookAt(h+l*1.5,.6,u+c*1.5),this.top.position.set(h,tS,u),this.top.lookAt(h,0,u)}}const tu=[pt.y,pt.z-Ht.glassBack],to=(n,e,t)=>Math.min(t,Math.max(e,n)),Jd=[{id:"left",fov:Ht.fovDeg,aspect:Ht.aspect,rtSize:[512,342],flip:!0,pose:{pos:[pt.x,...tu],rotY:-.3,rotX:Ht.pitch},layout:(n,e)=>{const t=to(n*.17,170,330);return{x:12,y:e*.58,w:t,h:t/1.5}}},{id:"right",fov:Ht.fovDeg,aspect:Ht.aspect,rtSize:[512,342],flip:!0,pose:{pos:[-1.03,...tu],rotY:Ht.yawOut,rotX:Ht.pitch},layout:(n,e)=>{const t=to(n*.17,170,330);return{x:n-t-12,y:e*.58,w:t,h:t/1.5}}},{id:"backup",fov:62,aspect:1.62,rtSize:[820,506],flip:!0,pose:{pos:[0,.8,-.98],rotY:0,rotX:-.42},layout:n=>{const e=to(n*.25,240,440);return{x:(n-e)/2,y:4,w:e,h:e/1.62}}},{id:"eagle",fov:55,aspect:1.35,rtSize:[560,415],flip:!1,layout:(n,e)=>{const t=to(n*.2,220,420),i=t/1.35;return{x:(n-t)/2,y:e-i-8,w:t,h:i}}}],nu=(n,e,t)=>{const i=Jd.find(r=>r.id===n);if(!i)throw new Error(`unknown inset ${n}`);const s=i.layout(e,t);return{left:s.x-4,right:s.x+s.w+4,top:t-(s.y+s.h)-4,bottom:t-s.y+4}};class iS{views=[];overlayScene=new Bl;overlayCamera=new $l(0,1,1,0,-10,10);constructor(e){for(const t of Jd){const i=new Ft(t.fov,t.aspect,.05,120);t.pose&&(i.position.set(...t.pose.pos),i.rotation.order="YXZ",i.rotation.y=t.pose.rotY,i.rotation.x=t.pose.rotX,e.add(i)),t.id==="backup"&&i.layers.enable($d);const s=new ai(t.rtSize[0],t.rtSize[1]);t.flip&&(s.texture.wrapS=xs,s.texture.repeat.x=-1,s.texture.offset.x=1);const r=new ze(new Un(1,1),new li({color:658189})),o=new ze(new Un(1,1),new li({map:s.texture}));r.position.z=-1,this.overlayScene.add(r,o),this.views.push({def:t,camera:i,rt:s,frame:r,image:o})}}setEagleTarget(e){const t=this.views.find(i=>i.def.id==="eagle");t&&(t.camera.position.set(e.cx,15,e.cz),t.camera.up.set(Math.sin(e.angle),0,Math.cos(e.angle)),t.camera.lookAt(e.cx,0,e.cz))}setSize(e,t){this.overlayCamera.right=e,this.overlayCamera.top=t,this.overlayCamera.updateProjectionMatrix();for(const i of this.views){const s=i.def.layout(e,t);i.image.position.set(s.x+s.w/2,s.y+s.h/2,0),i.image.scale.set(s.w,s.h,1),i.frame.position.set(s.x+s.w/2,s.y+s.h/2,-1),i.frame.scale.set(s.w+8,s.h+8,1)}}render(e,t,i){let s=!1;for(const r of this.views){const o=r.def.id==="backup"?i.backup:r.def.id==="eagle"?i.eagle:i.mirrors;r.image.visible=o,r.frame.visible=o,o&&(s=!0,e.setRenderTarget(r.rt),e.render(t,r.camera))}if(e.setRenderTarget(null),s){const r=e.autoClear;e.autoClear=!1,e.clearDepth(),e.render(this.overlayScene,this.overlayCamera),e.autoClear=r}}}const sS=n=>(n.userData.shared=!0,n),rS=n=>{for(const e of Object.values(n))e instanceof It&&!e.userData.shared&&e.dispose();n.dispose()},oS=n=>{n.removeFromParent(),n.traverse(e=>{if(e instanceof To&&e.dispose(),e instanceof ze){e.geometry.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)rS(i)}})},iu=90,aS=()=>{const n=document.createElement("canvas");n.width=16,n.height=512;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#4f7cb2"),t.addColorStop(.55,"#8fb2d6"),t.addColorStop(.8,"#cfdfec"),t.addColorStop(1,"#e4ebf0"),e.fillStyle=t,e.fillRect(0,0,16,512);const i=new Fu(n);return i.colorSpace=Wt,i},lS=()=>{const n=document.createElement("canvas");n.width=256,n.height=256;const e=n.getContext("2d");e.fillStyle="#43464d",e.fillRect(0,0,256,256);for(let i=0;i<12e3;i++){const s=45+Math.floor(Math.random()*55);e.fillStyle=`rgba(${s},${s},${s+6},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,1.6,1.6)}for(let i=0;i<40;i++)e.fillStyle=`rgba(30,32,36,${.05+Math.random()*.08})`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,8+Math.random()*26,0,Math.PI*2),e.fill();const t=new Fu(n);return t.wrapS=xs,t.wrapT=xs,t.repeat.set(26,26),t.colorSpace=Wt,t.anisotropy=8,t},cS=()=>{const n=new Bl;n.background=aS(),n.fog=new kl(12834020,60,115),n.add(new Om(13624575,5263950,1.15));const e=new Gm(16773853,1.8);e.position.set(28,42,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.radius=4;const t=e.shadow.camera;return t.left=-30,t.right=30,t.top=30,t.bottom=-30,t.far=110,n.add(e),n};let su=null;const hS=()=>{su??=sS(lS());const n=new ze(new Un(iu,iu),new Mt({map:su,roughness:.96}));return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n},uS=(n,e,t,i,s)=>{const r=t-n,o=i-e,a=Math.hypot(r,o),l=new ze(new Un(s,a),new Mt({color:14211282,roughness:.8}));return l.rotation.order="YXZ",l.rotation.y=Math.atan2(r,o),l.rotation.x=-Math.PI/2,l.position.set((n+t)/2,.012,(e+i)/2),l},dS=n=>{const{bay:e}=n,t=new Xt,i=new li({color:3590510,transparent:!0,opacity:.8}),s=.08,r=(o,a,l,c)=>{const h=new ze(new Un(l,c),i);h.rotation.x=-Math.PI/2,h.position.set(o,.02,a),t.add(h)};return r(-e.hw,0,s,e.hl*2),r(e.hw,0,s,e.hl*2),r(0,-e.hl,e.hw*2,s),r(0,e.hl,e.hw*2,s),t.position.set(e.cx,0,e.cz),t.rotation.y=e.angle,t},fS=(n,e,t)=>{const i=new ze(new wt(n.hw*2,e,n.hl*2),new Mt({color:t,roughness:.9}));return i.position.set(n.cx,e/2,n.cz),i.rotation.y=n.angle,i.castShadow=!0,i.receiveShadow=!0,i},Ta=(n,e)=>{const t=new Xt,i=new ze(new Cn(.14,.2,1.6,8),new Mt({color:5916210}));i.position.y=.8;const s=new ze(new ql(1.3,1),new Mt({color:4946490,roughness:1}));return s.position.y=2.3,s.castShadow=!0,t.add(i,s),t.position.set(n,0,e),t},pS=(n,e,t,i,s,r)=>{const o=new ze(new wt(t,i,s),new Mt({color:r,roughness:.85}));return o.position.set(n,i/2,e),o.castShadow=!0,o},mS=(n,e)=>{const t=n.course;if(!t)return null;const i=[n.spawn.x,n.bay.cx],s=[n.spawn.z,n.bay.cz];for(const r of t.boundaries)i.push(r.x1,r.x2),s.push(r.z1,r.z2);for(const r of t.poles)i.push(r.x),s.push(r.z);return{x0:Math.min(...i)-e,x1:Math.max(...i)+e,z0:Math.min(...s)-e,z1:Math.max(...s)+e}},gS=n=>{const e=new Xt,t=(s,r,o,a)=>!n||s+o<n.x0||s-o>n.x1||r+a<n.z0||r-a>n.z1,i=[[0,32,40,9,10,12103842],[-32,-6,8,6,30,10134700],[30,14,10,7,16,11509136]];for(const[s,r,o,a,l,c]of i)t(s,r,o/2,l/2)&&e.add(pS(s,r,o,a,l,c));for(const[s,r]of[[-16,12],[16,12],[-20,-14],[22,-12],[12,22]])t(s,r,1.3,1.3)&&e.add(Ta(s,r));if(n)for(let s=n.z0;s<=n.z1;s+=9)e.add(Ta(n.x0-4,s),Ta(n.x1+4,s));return e},ru=(n,e,t,i,s,r,o)=>{const a=Math.hypot(i-e,s-t),l=Math.max(1,Math.ceil(a/.25)),c=(s-t)/a,h=-(i-e)/a,u=[],d=[];for(let g=0;g<=l;g++){const _=e+(i-e)*g/l,m=t+(s-t)*g/l,p=jt(n,_,m)+.02;for(const E of[-1,1])u.push(_+E*c*r/2,p,m+E*h*r/2);if(g<l){const E=g*2;d.push(E,E+2,E+1,E+1,E+2,E+3)}}const f=new qt;return f.setAttribute("position",new Tt(u,3)),f.setIndex(d),f.computeVertexNormals(),new ze(f,o)},_S=n=>{const e=Nx(n),t=n.cx-n.hw,i=n.cx+n.hw,s=[],r=(l,c,h,u)=>{s.push(...l,...c,...h,...l,...h,...u)};for(let l=0;l<e.length-1;l++){const c=e[l],h=e[l+1];r([t,c.y,c.z],[t,h.y,h.z],[i,h.y,h.z],[i,c.y,c.z]),r([t,0,c.z],[t,0,h.z],[t,h.y,h.z],[t,c.y,c.z]),r([i,0,c.z],[i,c.y,c.z],[i,h.y,h.z],[i,0,h.z])}const o=new qt;o.setAttribute("position",new Tt(s,3)),o.computeVertexNormals();const a=new ze(o,new Mt({color:4736842,roughness:.95,side:vn}));return a.castShadow=!0,a.receiveShadow=!0,a},jd=n=>{const e=new Xt;if(n.length===0)return e;const t=[[new Cn(.12,.14,.05,16),2763566,.025,!1],[new Cn(.045,.045,1.1,12),16738842,.6,!0],[new Cn(.047,.047,.16,12),15921902,.95,!1]],i=new lt;for(const[s,r,o,a]of t){const l=new To(s,new Mt({color:r,roughness:r===2763566?.9:.6}),n.length);n.forEach((c,h)=>l.setMatrixAt(h,i.makeTranslation(c.x,o,c.z))),l.instanceMatrix.needsUpdate=!0,l.castShadow=a,e.add(l)}return e},vS=n=>{const e=new To(new Cn(.05,.05,.22,12),new Mt({color:16765471,roughness:.5,emissive:3812352}),n.length),t=new lt;return n.forEach((i,s)=>e.setMatrixAt(s,t.makeTranslation(i.x,.95,i.z))),e.instanceMatrix.needsUpdate=!0,e},xS=n=>{const e=new Xt,t=n.hill?[n.hill]:[];n.hill&&e.add(_S(n.hill));const i=new Mt({color:15132384,roughness:.8});for(const r of n.boundaries)e.add(ru(t,r.x1,r.z1,r.x2,r.z2,Jl,i));const s=n.stopLine;if(s){const r=new Mt({color:14170155,roughness:.7});e.add(ru(t,s.cx-s.hw,s.z,s.cx+s.hw,s.z,.3,r))}return e.add(jd(n.poles)),n.refPoles?.length&&e.add(vS(n.refPoles)),e},Qd=n=>{const e=new Xt;e.add(hS());for(const t of n.paint)e.add(uS(t.x1,t.z1,t.x2,t.z2,t.width));e.add(dS(n));for(const t of n.solids)e.add(fS(t.rect,t.height,t.color));for(const t of n.parkedCars){const{group:i}=Kd(t.color),s=he.length/2-he.rearOverhang;i.position.set(t.x-Math.sin(t.heading)*s,0,t.z-Math.cos(t.heading)*s),i.rotation.y=t.heading,e.add(i)}return n.course&&e.add(xS(n.course)),n.poles&&e.add(jd(n.poles)),e.add(gS(mS(n,3))),e},MS=1.5,ou=1,yS=.25,ef=(n,e=1/0)=>Math.min(n,MS,e),SS=n=>n<=ou?n:Math.max(ou,n-yS);class ES{constructor(e=2e3,t=25,i=250){this.windowMs=e,this.slowMs=t,this.maxGapMs=i}windowMs;slowMs;maxGapMs;elapsed=0;frames=0;feed(e){if(e<=0||e>this.maxGapMs||(this.elapsed+=e,this.frames+=1,this.elapsed<this.windowMs))return!1;const t=this.elapsed/this.frames>this.slowMs;return this.elapsed=0,this.frames=0,t}reset(){this.elapsed=0,this.frames=0}}const wS={1:"Cockpit",2:"Chase",3:"Top-down"},at=(n,e)=>{const t=document.createElement("div");return t.className=e,n.appendChild(t),t};class bS{last=new Map;changed(e,t){return this.last.get(e)===t?!1:(this.last.set(e,t),!0)}}const TS=n=>{const e=Math.round(Math.abs(n.wheelDeg)),t=Math.abs(td(n)*180/Math.PI).toFixed(1);if(e===0)return["Wheel centered",""];const i=n.wheelDeg>0?"L":"R";return[`Wheel ${e}° ${i}`,`tires ${t}° ${i}`]};class AS{root;status;gear;speed;steering;steeringWheel;steeringWheelPart;steeringSep;steeringTiresPart;settle;settleFill;viewLabel;flash;target;coach;coachStep;coachSay;coachLook;coachDo;layer;topCenter;steerLeftSlot;steerRightSlot;writes=new bS;constructor(e){this.root=at(e,"hud hidden"),this.layer=this.root,this.flash=at(this.root,"flash"),this.status=at(this.root,"panel status");const t=at(this.root,"panel drive");this.gear=at(t,"gear"),this.speed=at(t,"speed");const i=at(this.root,"panel steer");this.steerLeftSlot=at(i,"steer-slot");const s=at(i,"steer-center");this.steerRightSlot=at(i,"steer-slot"),this.steeringWheel=at(s,"steer-wheel"),this.steeringWheel.innerHTML='<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="41" fill="none" stroke="#dfe3e9" stroke-width="9"/><line x1="12" y1="50" x2="88" y2="50" stroke="#dfe3e9" stroke-width="6"/><line x1="50" y1="50" x2="50" y2="88" stroke="#dfe3e9" stroke-width="6"/><circle cx="50" cy="50" r="9" fill="#dfe3e9"/><circle cx="50" cy="13" r="4" fill="#4a9fe8"/></svg>',this.steering=at(s,"steer-text"),this.steeringWheelPart=at(this.steering,"steer-part"),this.steeringSep=at(this.steering,"steer-sep"),this.steeringSep.textContent=" · ",this.steeringTiresPart=at(this.steering,"steer-part"),this.settle=at(this.root,"settle hidden"),at(this.settle,"settle-text").textContent="In position — hold still";const r=at(this.settle,"settle-bar");this.settleFill=at(r,"settle-fill");const o=at(this.root,"top-right");this.viewLabel=at(o,"panel view-label"),this.topCenter=at(this.root,"top-center"),this.target=at(this.topCenter,"target-chip hidden"),this.coach=at(this.topCenter,"coach hidden"),this.coachStep=at(this.coach,"coach-step"),this.coachSay=at(this.coach,"coach-say"),this.coachLook=at(this.coach,"coach-look"),this.coachDo=at(this.coach,"coach-do");const a=at(o,"panel help");a.innerHTML=RS()}show(){this.root.classList.remove("hidden")}hide(){this.root.classList.add("hidden")}update(e,t,i=!0){const{car:s}=e,r=e.time,o=Math.floor(r/60),a=Math.floor(r%60).toString().padStart(2,"0"),l=e.course?` · Line touches ${e.course.lineTouches} · Pole hits ${e.course.poleHits}`:"",c=this.writes,h=`<b>${e.scenario.name}</b><br>Time ${o}:${a} · Collisions ${e.collisions} · Gear changes ${e.reversals}${l}`;c.changed("status",h)&&(this.status.innerHTML=h),c.changed("gear",s.gear)&&(this.gear.textContent=s.gear,this.gear.classList.toggle("reverse",s.gear==="R"));const u=`${(Math.abs(s.speed)*3.6).toFixed(1)} km/h`;c.changed("speed",u)&&(this.speed.textContent=u);const[d,f]=TS(s);c.changed("wheel",d)&&(this.steeringWheelPart.textContent=d),c.changed("tires",f)&&(this.steeringTiresPart.textContent=f,this.steeringSep.classList.toggle("hidden",f===""));const g=`rotate(${-s.wheelDeg}deg)`;c.changed("wheelRot",g)&&(this.steeringWheel.style.transform=g);const _=rM(e);c.changed("settle",String(_))&&(this.settle.classList.toggle("hidden",_===0),this.settleFill.style.width=`${_*100}%`);const m=dd(e),p=e.scenario.course,E=p&&e.course&&!(ad(p,e.course)&&m.dist<=12),S=document.documentElement.classList.contains("touch");S&&this.status.parentElement!==this.topCenter?this.topCenter.insertBefore(this.status,this.target):!S&&this.status.parentElement!==this.root&&this.root.appendChild(this.status);const v=Math.min(Math.max(window.innerWidth*.2,220),420)/1.35,I=i?`${v+18}px`:S?"6px":"12px";if(c.changed("top",I)&&(this.topCenter.style.top=I),this.target.classList.toggle("warn",!!e.course?.onLine),E&&p&&e.course){this.target.classList.remove("hidden","good");const P=`⌖ ${Jx(p,e.course,s)}`;c.changed("target",P)&&(this.target.textContent=P)}else if(this.target.classList.toggle("hidden",m.dist>12),m.dist<=12){const P=(m.angleDev*180/Math.PI).toFixed(0),y=`⌖ ${m.dist.toFixed(1)} m · ${P}° off`;c.changed("target",y)&&(this.target.textContent=y),this.target.classList.toggle("good",m.aligned)}const C=`${wS[t]} view`;c.changed("view",C)&&(this.viewLabel.textContent=C);const b=String(e.flash*1.4);c.changed("flash",b)&&(this.flash.style.opacity=b)}updateCoach(e,t){const i=this.writes;if(i.changed("coachShown",String(e!==null))&&this.coach.classList.toggle("hidden",e===null),!e)return;const s=document.documentElement.classList.contains("touch"),r=`Step ${e.step} of ${e.total} · H hides hints`;i.changed("coachStep",r)&&(this.coachStep.textContent=r);const o=s?au(e.say):e.say;i.changed("coachSay",o)&&(this.coachSay.textContent=o);const a=e.look?`Look: ${s?au(e.look):e.look}`:"";i.changed("coachLook",a)&&(this.coachLook.textContent=a,this.coachLook.classList.toggle("hidden",a===""));const l=cM(t,e.wheel,e.pedal),c=`${CS[e.pedal]}${e.handbrake?" + handbrake":""} · Wheel: ${gd(l)}`;i.changed("coachDo",c)&&(this.coachDo.textContent=c);const h=String(lM(t,l));i.changed("coachOk",h)&&this.coachDo.classList.toggle("ok",h==="true")}}const RS=n=>"<b>↑/W</b> drive · <b>↓/S</b> brake → reverse · <b>←/→</b> steer · <b>Space</b> handbrake · <b>Q</b> look left · <b>E</b> tap: right pillar, hold: look back · <b>1/2/3</b> view · <b>B</b> bird's-eye · <b>C</b> reverse camera · <b>R</b> restart · <b>Esc</b> menu",au=n=>n.replace(/\bTap E\b/g,"Tap the right eye button").replace(/\bHold E\b/g,"Hold the right eye button").replace(/\bHold Q\b/g,"Hold the left eye button"),CS={forward:"Drive forward",reverse:"Reverse",stop:"Stop"},PS="https://api.web3forms.com/submit",tf=2e3,nf=200,sf=()=>"e8291eea-7d84-484b-86ee-595fd750b32a".trim(),LS=(n,e)=>({access_key:n,subject:"Driving test simulator feedback",from_name:"Driving test simulator",message:e.message.trim().slice(0,tf),contact:e.contact.trim().slice(0,nf)||"—",page:e.page,user_agent:e.userAgent,botcheck:e.botcheck});async function DS(n,e,t=(i,s)=>fetch(i,s)){if(e.message.trim()==="")return"empty";if(e.botcheck)return"sent";try{const i=await t(PS,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(LS(n,e))});return i.ok&&(await i.json()).success?"sent":"error"}catch{return"error"}}function Ln(n,e){try{window.goatcounter?.count({path:n,title:e,event:!0})}catch{}}function IS(n,e){document.readyState==="complete"?Ln(n,e):window.addEventListener("load",()=>Ln(n,e),{once:!0})}const US=(n,e=0)=>/iPhone|iPad|iPod/.test(n)||/Macintosh/.test(n)&&e>1?"ios":/Android/.test(n)?"android":"desktop",NS=()=>sf()!=="";function zS(){if(document.querySelector(".feedback-overlay"))return;const n=sf(),e=document.createElement("div");e.className="overlay feedback-overlay",e.innerHTML=`
    <form class="menu-panel feedback-panel" novalidate>
      <h2>Feedback</h2>
      <p class="subtitle">Bug, idea or a missing exercise — tell me. No account needed.</p>
      <textarea name="message" rows="6" maxlength="${tf}" required
        placeholder="Your message"></textarea>
      <input name="contact" type="text" maxlength="${nf}" autocomplete="email"
        placeholder="Email or Telegram, if you want a reply (optional)" />
      <input name="botcheck" type="checkbox" class="feedback-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <p class="feedback-status" role="status"></p>
      <div class="buttons">
        <button type="button" class="btn" data-act="cancel">Cancel</button>
        <button type="submit" class="btn primary" data-act="send">Send</button>
      </div>
    </form>`;const t=e.querySelector("form"),i=t.elements.namedItem("message"),s=t.elements.namedItem("contact"),r=t.elements.namedItem("botcheck"),o=t.querySelector(".feedback-status"),a=t.querySelector('[data-act="send"]'),l=t.querySelector('[data-act="cancel"]'),c=()=>e.remove(),h=(d,f="")=>{o.textContent=d,o.className=`feedback-status ${f}`},u=d=>{d.stopPropagation(),d.type==="keydown"&&d.key==="Escape"&&c()};e.addEventListener("keydown",u),e.addEventListener("keyup",u),e.addEventListener("click",d=>{d.target===e&&c()}),l.addEventListener("click",c),t.addEventListener("submit",async d=>{if(d.preventDefault(),i.value.trim()===""){h("Please write a message first.","err"),i.focus();return}a.disabled=!0,h("Sending…"),await DS(n,{message:i.value,contact:s.value,botcheck:r.checked,page:location.href,userAgent:navigator.userAgent})==="sent"?(Ln("feedback/sent","Feedback sent"),h("Thank you! Message sent.","ok"),i.disabled=!0,s.disabled=!0,a.classList.add("hidden"),l.textContent="Close"):(h("Could not send — check your connection and try again.","err"),a.disabled=!1)}),document.body.appendChild(e),i.focus()}const FS=(n,e,t,i,s=[])=>{n.innerHTML="",n.className="overlay";const r=document.createElement("div");r.className="menu-panel",r.innerHTML=`<h1>🚗 Driving test simulator</h1><p class="subtitle">Train the driving-test exercises and parking from the driver's seat — mirrors, look-back and every fault scored.</p>`,i&&r.appendChild(i);const o=(l,c)=>{if(c.length===0)return;const h=document.createElement("h3");h.className="menu-section",h.textContent=l;const u=document.createElement("div");u.className="card-grid";for(const d of c){const f=document.createElement("button");f.className="card";const g="";f.innerHTML=`<b>${d.name}</b><span>${d.description}</span>${g}`,f.addEventListener("click",()=>t(d)),u.appendChild(f)}r.append(h,u)};if(s.length>0){const l=document.createElement("h3");l.className="menu-section",l.textContent="Learn";const c=document.createElement("div");c.className="card-grid";for(const h of s){const u=document.createElement("button");u.className="card card-learn",u.innerHTML=`<b>🎬 ${h.title}</b><span>${h.text}</span><em class="card-badge">lesson</em>`,u.addEventListener("click",h.open),c.appendChild(u)}r.append(l,c)}o("Parking",e.filter(l=>!l.course)),o("Driving-test exercises",e.filter(l=>l.course));const a=document.createElement("p");if(a.className="menu-help",a.innerHTML="<b>↑/W</b> drive · <b>↓/S</b> brake, then reverse · <b>←/→</b> steer (3.1 turns lock-to-lock, 15.5:1 ratio) · <b>Space</b> handbrake · <b>1/2/3</b> camera views · <b>Q</b> (hold) look left out the driver's window · <b>E</b> tap: look at the right A-pillar (tap again to return), hold: look over right shoulder · <b>B</b> bird's-eye view on/off · <b>C</b> reverse camera and guidelines on/off",r.appendChild(a),NS()){const l=document.createElement("button");l.className="btn feedback-btn",l.textContent="💬 Send feedback",l.addEventListener("click",zS),r.appendChild(l)}n.appendChild(r)},OS=n=>{n.innerHTML="",n.className="overlay hidden"},kS=n=>n<.12?"almost none of":n<.225?"a fifth of":n<.29?"a quarter of":n<.4?"a third of":n<.56?"almost half of":"more than half of",BS=["a quarter of a car width","half a car width","three quarters of a car width","one car width","one and a quarter car widths","one and a half car widths","one and three quarters car widths","two car widths"],Aa=n=>{const e=Math.round(Math.max(0,n)/he.width*4);return e===0?"almost touching":BS[e-1]??`${Math.round(e/4)} car widths`},HS=n=>n<.3?"too close":n<=.55?"the right distance":"too far out",GS=n=>n<.15?"at the line":n<=.6?"a short step":n<=1?"one long step":"more than a step",ht={sky:"#2b3038",ground:"#3b4048",ramp:"#6d737c",rampTop:"#9aa1ab",car:"#2f6fce",carEdge:"#173b70",glass:"#9fd0ff",wheel:"#14161a",stop:"#ff5d5d",sight:"#ffe066",guide:"#6be38a",paint:"#e9edf2",label:"#0f1115"},VS=[[-.9,.28],[-.92,.85],[-.55,1.05],[.05,1.42],[1.55,1.45],[2.3,.97],[3.35,.8],[3.6,.62],[3.6,.28]],WS=[[-.35,1.06],[.12,1.36],[1.5,1.39],[2.15,.99],[-.35,.99]];function XS(n,e,t,i,s){const r=e.width,o=e.height,a=t.scenario,l=a.course.hill,c=a.course.stopLine,h=[l],u=Math.min(...t.steps.map(A=>A.frames[0].z))-he.rearOverhang-.6,d=c.z+2.6,f=Math.min(r/(d-u),o*.5/2.7),g=o*.94,_=(A,z)=>[(A-u)*f+(r-(d-u)*f)/2,g-z*f],m=A=>i.overlays.some(z=>z.kind===A),p=A=>A.forEach((z,O)=>O?n.lineTo(...z):n.moveTo(...z)),E=(A,z,O,W=0)=>{const L=Math.max(12,Math.min(17,.3*f));n.font=`600 ${L}px system-ui, sans-serif`;const N=n.measureText(z).width+L*.7,V=Math.max(4,Math.min(r-N-4,A[0]-N/2)),H=A[1]+W*L-L*.75;n.fillStyle=O,n.beginPath(),n.roundRect(V,H,N,L*1.5,L*.4),n.fill(),n.fillStyle=ht.label,n.fillText(z,V+L*.35,H+L*1.08)};n.fillStyle=ht.sky,n.fillRect(0,0,r,o),n.fillStyle=ht.ground,n.fillRect(0,g,r,o-g);const S=[];for(let A=l.z0;A<=pr(l);A+=.1)S.push(_(A,jt(h,l.cx,A)));S.push(_(pr(l),0)),n.beginPath(),p([_(l.z0,0),...S]),n.closePath(),n.fillStyle=ht.ramp,n.fill(),n.beginPath(),p([_(u-5,0),_(l.z0,0),...S,_(d+20,0)]),n.strokeStyle=ht.rampTop,n.lineWidth=Math.max(2,.05*f),n.stroke();const v=A=>_(A,jt(h,l.cx,A));n.lineCap="butt",n.beginPath(),p([v(c.z-c.maxGap),v(c.z)]),n.strokeStyle="rgba(107,227,138,0.75)",n.lineWidth=Math.max(4,.09*f),n.stroke(),n.beginPath(),p([v(c.z),v(c.z+.3)]),n.strokeStyle=ht.stop,n.lineWidth=Math.max(6,.14*f),n.stroke(),E(v(c.z+1.4),"stop line",ht.stop,1.6);const I=Ro(h,s),C=jt(h,s.x,s.z),b=(A,z)=>_(s.z+A*Math.cos(I)-z*Math.sin(I),C+A*Math.sin(I)+z*Math.cos(I)),P=(A,z,O)=>{n.beginPath(),p(A.map(([W,L])=>b(W,L))),n.closePath(),n.fillStyle=z,n.fill(),O&&(n.strokeStyle=O,n.lineWidth=Math.max(1.5,.03*f),n.stroke())};P(VS,ht.car,ht.carEdge),P(WS,ht.glass);for(const A of[0,he.wheelbase])n.beginPath(),n.arc(...b(A,.31),.31*f,0,Math.PI*2),n.fillStyle=ht.wheel,n.fill();n.beginPath(),n.arc(...b(Ge.z-.08,Ge.y+.02),.13*f,0,Math.PI*2),n.fillStyle="#e8c4a0",n.fill();const y=pt;if(P([[y.z-y.d/2,y.y-y.h/2],[y.z+y.d/2,y.y-y.h/2],[y.z+y.d/2,y.y+y.h/2],[y.z-y.d/2,y.y+y.h/2]],"#1d2a3c",ht.sight),m("hillSight")){const A=oy(),z=b(Ge.z,Ge.y),O=s.z+A.z*Math.cos(I),W=b(A.z,0),L=c.z-mr(s),N=Math.abs(O-(c.z+.15))<.2,V=N?ht.guide:ht.sight;n.beginPath(),n.setLineDash([.18*f,.12*f]),p([z,W]),n.strokeStyle=V,n.lineWidth=Math.max(2,.045*f),n.stroke(),n.setLineDash([]);for(const H of[z,W])n.beginPath(),n.arc(...H,Math.max(4,.07*f),0,Math.PI*2),n.fillStyle=V,n.fill();if(E(z,"eye",ht.sight,-1.6),E(W,N?"under the mirror: stop":"under the mirror",V,-3.2),L>-.2&&L<2.6){const H=mr(s),se=v(H),me=v(c.z);n.beginPath(),p([[se[0],se[1]+.2*f],[me[0],me[1]+.2*f]]),n.strokeStyle=ht.paint,n.lineWidth=2,n.stroke(),E([(se[0]+me[0])/2,(se[1]+me[1])/2+.2*f],GS(L),ht.paint,1.6)}}const x=i.overlays.find(A=>A.kind==="hillPlan");if(x){const z=Math.min(o*.4,330);if(x.compare){const O=c.z-Bd-(he.length-he.rearOverhang),W=Math.min((r-30)/2,z*1.5),L=(r-2*W-10)/2;Ra(n,[L,10,W,z],t,{...s,x:l.cx,z:O},"middle of the ramp: the line ends before the mirror",ht.stop),Ra(n,[L+W+10,10,W,z],t,{...s,z:O},"kept right: the line reaches under the mirror",ht.guide)}else{const O=Math.min(r-20,z*1.5);Ra(n,[(r-O)/2,10,O,z],t,s,"your view to the left",ht.sight)}}}function Ra(n,[e,t,i,s],r,o,a,l){const c=r.scenario,h=c.course.hill,u=c.course.stopLine,d=[h],f=Ro(d,o),g=jt(d,o.x,o.z),_=pt,m=Math.atan2(_.x-Ge.x,_.z-Ge.z),p=Math.atan2(_.y-_.h/2-Ge.y,Math.hypot(_.x-Ge.x,_.z-Ge.z))-.05,E=i/2/Math.tan(70*Math.PI/360),S={x:Math.sin(m)*Math.cos(p),y:Math.sin(p),z:Math.cos(m)*Math.cos(p)},v={x:-Math.cos(m),y:0,z:Math.sin(m)},I={x:-Math.sin(m)*Math.sin(p),y:Math.cos(p),z:-Math.cos(m)*Math.sin(p)},C=oe=>{const Ne={x:oe.x-Ge.x,y:oe.y-Ge.y,z:oe.z-Ge.z};return{x:Ne.x*v.x+Ne.y*v.y+Ne.z*v.z,y:Ne.x*I.x+Ne.y*I.y+Ne.z*I.z,z:Ne.x*S.x+Ne.y*S.y+Ne.z*S.z}},b=.05,P=oe=>[e+i/2+oe.x/oe.z*E,t+s/2-oe.y/oe.z*E],y=oe=>{const Ne=C(oe);return Ne.z<b?null:P(Ne)},x=oe=>{const Ne=oe.map(C),ke=[];return Ne.forEach((Ue,T)=>{const pe=Ne[(T+1)%Ne.length];if(Ue.z>=b&&ke.push(Ue),Ue.z>=b!=pe.z>=b){const ne=(b-Ue.z)/(pe.z-Ue.z);ke.push({x:Ue.x+(pe.x-Ue.x)*ne,y:Ue.y+(pe.y-Ue.y)*ne,z:b})}}),ke.map(P)},A=(oe,Ne,ke)=>{const Ue=ke-o.z,T=Ne-g;return{x:oe-o.x,y:-Ue*Math.sin(f)+T*Math.cos(f),z:Ue*Math.cos(f)+T*Math.sin(f)}},z=(oe,Ne,ke)=>A(oe,Ne,ke),O=(oe,Ne,ke,Ue=1.5)=>{const T=x(oe);T.length<3||(n.beginPath(),T.forEach((pe,ne)=>ne?n.lineTo(...pe):n.moveTo(...pe)),n.closePath(),n.fillStyle=Ne,n.fill(),ke&&(n.strokeStyle=ke,n.lineWidth=Ue,n.stroke()))};n.save(),n.beginPath(),n.roundRect(e,t,i,s,8),n.fillStyle="#4a5260",n.fill(),n.clip();const W=o.z+1,L=o.z+30;O([z(-20,0,W),z(40,0,W),z(40,0,L),z(-20,0,L)],"#3b4048");const N=[],V=[],H=[];for(let oe=W;oe<=Math.min(L,pr(h));oe+=.25)H.push(oe);for(const oe of H)N.push(z(h.cx-h.hw,jt(d,h.cx,oe),oe));for(const oe of[...H].reverse())N.push(z(h.cx+h.hw,jt(d,h.cx,oe),oe));for(const oe of H)V.push(z(h.cx+h.hw,jt(d,h.cx,oe),oe));for(const oe of[...H].reverse())V.push(z(h.cx+h.hw,0,oe));O(V,"#555b64"),O(N,"#6d737c");for(const oe of c.course.boundaries){if(oe.x1<h.cx)continue;const Ne=H.map(ke=>y(z(oe.x1,jt(d,h.cx,ke)+.01,ke)));n.beginPath(),Ne.forEach((ke,Ue)=>ke&&(Ue?n.lineTo(...ke):n.moveTo(...ke))),n.strokeStyle=ht.paint,n.lineWidth=2,n.stroke()}const se=oe=>jt(d,h.cx,oe)+.01;O([z(u.cx-u.hw,se(u.z),u.z),z(u.cx+u.hw,se(u.z),u.z),z(u.cx+u.hw,se(u.z+.3),u.z+.3),z(u.cx-u.hw,se(u.z+.3),u.z+.3)],ht.stop);const me=.98;O([{x:.9,y:me,z:.6},{x:.9,y:me,z:2.35},{x:.9,y:-1,z:2.35},{x:.9,y:-1,z:.6}],ht.car,ht.carEdge),O([{x:.88,y:me,z:2.35},{x:.8,y:.8,z:3.4},{x:-.8,y:.8,z:3.4},{x:-.88,y:me,z:2.35}],ht.car,ht.carEdge),O([{x:.86,y:me,z:2.38},{x:.82,y:me,z:2.22},{x:.66,y:1.42,z:1.62},{x:.7,y:1.42,z:1.78}],"#14181f");const D=_.x-_.w/2,Z=_.x+_.w/2,re=_.y-_.h/2,G=_.y+_.h/2,$=_.z-_.d/2;O([{x:D,y:re,z:$},{x:Z,y:re,z:$},{x:Z,y:G,z:$},{x:D,y:G,z:$}],"#1d2a3c",ht.sight,2);const ae=y({x:D,y:re,z:$}),ce=y({x:Z,y:re,z:$});if(ae&&ce){const oe=ce[0]-ae[0],Ne=ce[1]-ae[1];n.beginPath(),n.setLineDash([7,5]),n.moveTo(ae[0]-oe*40,ae[1]-Ne*40),n.lineTo(ae[0]+oe*40,ae[1]+Ne*40),n.strokeStyle="rgba(255,224,102,0.8)",n.lineWidth=1.5,n.stroke(),n.setLineDash([])}n.restore();const ge=Math.max(11,Math.min(14,i/30));n.font=`600 ${ge}px system-ui, sans-serif`;const Fe=n.measureText(a).width+ge*.7;n.fillStyle=l,n.beginPath(),n.roundRect(e+6,t+6,Fe,ge*1.5,ge*.4),n.fill(),n.fillStyle=ht.label,n.fillText(a,e+6+ge*.35,t+6+ge*1.08)}const qS=60,YS=(n,e)=>Math.max(0,Math.min(e-1,Math.floor(n/1e3*qS))),ZS=1400,te={ground:"#3b4048",paint:"#e9edf2",wall:"#8a9099",pole:"#ff8a1f",car:"#2f6fce",carEdge:"#173b70",glass:"#9fd0ff",quarter:"#ffe066",wheel:"#14161a",ok:"#7fd1ff",bad:"#ff5d5d",sight:"#ffe066",guide:"#6be38a",label:"#0f1115"},$S=(n,e,t)=>{n.innerHTML="",n.className="overlay";const i=document.createElement("div");i.className="learn-panel",i.innerHTML=`
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
    </div>`,n.appendChild(i);const s=L=>i.querySelector(L);s(".learn-head h2").textContent=t.title;const r=s("canvas"),o=s(".learn-stage"),a=r.getContext("2d"),l=s(".learn-tabs"),c=s(".learn-next"),h=s(".learn-back"),u=s(".learn-auto");let d=0,f=0,g=performance.now(),_=!1,m=0,p=e[0].refs,E=lu(e[0]);const S=new Set,v=()=>e[d],I=()=>v().steps[f],C=()=>f===v().steps.length-1;e.forEach((L,N)=>{const V=document.createElement("button");V.className="learn-tab",V.setAttribute("role","tab"),V.textContent=L.title,V.addEventListener("click",()=>b(N)),l.appendChild(V)});function b(L){d=L,p=v().refs,E=lu(v()),l.querySelectorAll(".learn-tab").forEach((N,V)=>{N.classList.toggle("active",V===L),N.classList.toggle("mistake",e[V].tone==="mistake"),N.setAttribute("aria-selected",String(V===L))}),P(0)}function P(L){f=Math.max(0,Math.min(v().steps.length-1,L)),g=performance.now(),m=0;const N=I();s(".learn-step").textContent=`Step ${f+1} / ${v().steps.length}`,s(".learn-say").textContent=N.say;const V=s(".learn-look");V.textContent=N.look??"",V.classList.toggle("hidden",!N.look),h.disabled=f===0;const H=e[d+1];c.textContent=C()?H?`${H.title} ▶`:"Practice it ▶":"Next ▶",C()&&!S.has(d)&&(S.add(d),t.onLessonEnd?.(d,e.length))}function y(){if(!C())return P(f+1);if(d<e.length-1)return b(d+1);x(),t.onPractice(v().scenario)}const x=()=>{window.removeEventListener("keydown",A,!0),O.disconnect()};c.addEventListener("click",y),h.addEventListener("click",()=>P(f-1)),s(".learn-replay").addEventListener("click",()=>P(f)),u.addEventListener("click",()=>{_=!_,u.setAttribute("aria-pressed",String(_)),u.classList.toggle("primary",_)}),s(".learn-close").addEventListener("click",()=>{x(),t.onMenu()});const A=L=>{if(!i.isConnected)return x();const V={ArrowRight:y," ":y,Enter:y,ArrowLeft:()=>P(f-1),r:()=>P(f),R:()=>P(f),Escape:()=>{x(),t.onMenu()}}[L.key];V&&(L.preventDefault(),L.stopPropagation(),V())};window.addEventListener("keydown",A,!0);const z=()=>{const L=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.round(o.clientWidth*L)),r.height=Math.max(1,Math.round(o.clientHeight*L))},O=new ResizeObserver(z);O.observe(o),z();const W=L=>{if(!i.isConnected)return x();requestAnimationFrame(W);const N=I(),V=YS(L-g,N.frames.length),H=N.frames[V];V===N.frames.length-1&&!m&&(m=L),_&&m&&L-m>ZS&&!(C()&&d===e.length-1)&&y();const se=Math.round(Math.abs(H.speed)*3.6*10)/10;s(".learn-pedal").textContent=Math.abs(H.speed)>.02?`${H.speed>0?"Forward":"Reverse"} ${se.toFixed(1)} km/h`:"Stopped",s(".learn-wheel").textContent=`Wheel: ${gd(H.wheelDeg)}`,v().view==="side"?XS(a,r,v(),N,H):KS(a,r,E,v(),p,N,H,L)};b(0),requestAnimationFrame(W)};function lu(n){if(n.viewBox)return n.viewBox;const e=[],t=[];for(const l of n.steps)for(const c of l.frames)for(const h of qn(tn(c)))e.push(h.x),t.push(h.z);for(const l of[...n.scenario.poles??[],...n.scenario.course?.poles??[]])e.push(l.x),t.push(l.z);const i=1.2,s=Math.min(...e)-i,r=Math.max(...e)+i,o=Math.min(...t)-i,a=Math.max(...t)+i;return{cx:(s+r)/2,cz:(o+a)/2,w:r-s,h:a-o}}function KS(n,e,t,i,s,r,o,a){const l=e.width,c=e.height,h=Math.min(l/t.w,c/t.h),u=D=>[l/2-(D.x-t.cx)*h,c/2-(D.z-t.cz)*h],d=D=>D*h;n.fillStyle=te.ground,n.fillRect(0,0,l,c);const f=(D,Z,re,G,$=[])=>{n.beginPath(),n.setLineDash($.map(ae=>ae*h)),n.strokeStyle=re,n.lineWidth=Math.max(1,G*h),n.moveTo(...u(D)),n.lineTo(...u(Z)),n.stroke(),n.setLineDash([])},g=(D,Z,re)=>{n.beginPath(),D.forEach((G,$)=>$?n.lineTo(...u(G)):n.moveTo(...u(G))),n.closePath(),n.fillStyle=Z,n.fill(),re&&(n.strokeStyle=re,n.lineWidth=Math.max(1,.04*h),n.stroke())},_=(D,Z,re,G,$=.04)=>{n.beginPath(),n.arc(...u(D),Math.max(3,d(Z)),0,Math.PI*2),n.fillStyle=re,n.fill(),G&&(n.strokeStyle=G,n.lineWidth=Math.max(1.5,$*h),n.stroke())},m=(D,Z,re,G=0,$=0)=>{const[ae,ce]=u(D),ge=Math.max(11,Math.min(18,.32*h));n.font=`600 ${ge}px system-ui, sans-serif`;const Fe=n.measureText(Z).width+ge*.7,oe=ae+G*ge-Fe/2,Ne=ce+$*ge-ge*.75;n.fillStyle=re,n.beginPath(),n.roundRect(oe,Ne,Fe,ge*1.5,ge*.4),n.fill(),n.fillStyle=te.label,n.textAlign="center",n.textBaseline="middle",n.fillText(Z,oe+Fe/2,Ne+ge*.75)},p=(D,Z)=>cn(o,{x:D,y:0,z:Z});for(const D of i.scenario.solids){const Z=qn(D.rect);g([Z[0],Z[1],Z[3],Z[2]],te.wall),m({x:D.rect.cx-D.rect.hw+1.2,z:D.rect.cz},D.height<.5?"curb":"wall",te.wall)}for(const D of i.scenario.paint)f({x:D.x1,z:D.z1},{x:D.x2,z:D.z2},te.paint,D.width);for(const D of i.scenario.course?.boundaries??[])f({x:D.x1,z:D.z1},{x:D.x2,z:D.z2},te.paint,.1);const E=D=>r.overlays.some(Z=>Z.kind===D),S=.5+.5*Math.sin(a/160);if(E("parallel")){const D=i.scenario.bay;for(const Z of[-1,1]){const re=D.cx+Z*D.hw;f({x:re,z:D.cz-D.hl-1},{x:re,z:D.cz+D.hl},te.guide,.04,[.2,.15]);const G=p(Z*he.width/2,he.length-he.rearOverhang+1),$=p(Z*he.width/2,-.9-1.5);f(G,$,te.guide,.035)}}if(r.ghost){const D=r.ghost.tone==="ok"?te.ok:te.bad;r.ghost.lines.forEach((Z,re)=>{Z.length<2||(n.beginPath(),n.setLineDash([.22*h,.16*h]),n.strokeStyle=D,n.globalAlpha=re<2?1:.45,n.lineWidth=Math.max(1.5,.06*h),Z.forEach((G,$)=>$?n.lineTo(...u(G)):n.moveTo(...u(G))),n.stroke(),n.setLineDash([]),n.globalAlpha=1)});for(const Z of r.ghost.circles??[])n.beginPath(),n.setLineDash(Z.hit?[.3*h,.12*h]:[.12*h,.16*h]),n.strokeStyle=Z.hit?te.bad:"rgba(255,255,255,0.28)",n.lineWidth=Math.max(1.2,(Z.hit?.06:.03)*h),n.arc(...u(Z.center),Z.radius*h,0,Math.PI*2),n.stroke(),n.setLineDash([]);r.ghost.circles?.length&&_(r.ghost.circles[0].center,.08,"rgba(255,255,255,0.6)"),r.ghost.hit&&(_(r.ghost.hit,.35,"rgba(255,93,93,0.25)",te.bad,.06),m(r.ghost.hit,"hit",te.bad,0,-1.8))}for(const D of[...i.scenario.poles??[],...i.scenario.course?.poles??[]])_(D,.12,te.pole,"#5a2a00",.02);for(const D of i.scenario.course?.refPoles??[])_(D,.2,te.quarter,"#5a2a00",.03);if(E("eightRefs"))for(const D of i.scenario.course?.refPoles??[])_(D,.4+.1*S,"rgba(255,224,102,0.2)",te.sight,.05);const v=r.overlays.find(D=>D.kind==="danger"),I=v!==void 0,C=v?.pole===2?s.pole2:s.pole1;I&&_(C,.3+.12*S,"rgba(255,93,93,0.25)",te.bad,.05),m(s.pole1,"1",I&&v?.pole!==2?te.bad:te.pole,0,1.6),m(s.pole2,"2",I&&v?.pole===2?te.bad:te.pole,0,1.6),s.pole3&&m(s.pole3,"3",te.pole,0,-1.6);const b=he.width/2,P=he.length-he.rearOverhang,y=-.9,x=zi(o),A=o.wheelDeg/he.steeringRatio*Math.PI/180,z=[p(b,y),p(b,P),p(-b,P),p(-b,y)];g(z,te.car,te.carEdge),g([p(.8,2.6),p(.8,P-.05),p(-.8,P-.05),p(-.8,2.6)],"#2860b6"),g([p(.72,1.95),p(.64,2.6),p(-.64,2.6),p(-.72,1.95)],te.glass),g([p(.72,1.95),p(.72,.15),p(-.72,.15),p(-.72,1.95)],"#3f82e0"),g([p(.66,.15),p(.6,-.2),p(-.6,-.2),p(-.66,.15)],te.glass);for(const D of[1,-1])g([p(D*.82,P-.02),p(D*.82,P-.2),p(D*.5,P-.12),p(D*.5,P-.02)],"#fff6c8"),g([p(D*.84,y+.02),p(D*.84,y+.16),p(D*.56,y+.08),p(D*.56,y+.02)],"#e2453c");x.forEach((D,Z)=>{const re=o.heading+(Z>=2?A:0),G=Math.sin(re),$=Math.cos(re),ae=bM,ce=.11,ge=[{x:D.x+G*ae+$*ce,z:D.z+$*ae-G*ce},{x:D.x+G*ae-$*ce,z:D.z+$*ae+G*ce},{x:D.x-G*ae-$*ce,z:D.z-$*ae+G*ce},{x:D.x-G*ae+$*ce,z:D.z-$*ae-G*ce}],Fe=(E("depth")||E("circle"))&&Z===1;g(ge,Fe?te.sight:te.wheel,"#cfd6df")});const O=-b+.02;if(f(p(O,tt.divider.z),p(O,tt.quarterRearZ),te.quarter,.09),E("sight")){const D=cn(o,Li.eye),Z=p(-.76,tt.quarterRearZ),re=Z.x-D.x,G=Z.z-D.z,$=Math.hypot(re,G),ae={x:D.x+re/$*7,z:D.z+G/$*7};f(D,ae,"rgba(255,224,102,0.55)",.035),f(D,s.pole1,te.sight,.05,[.2,.14]),_(D,.09,te.sight),m(ae,"window edge",te.quarter,0,0)}if(I&&v?.pole!==2&&f(p(-b,P),p(-b,y-4),te.bad,.04,[.2,.14]),E("depth")&&s.backCorner){const D=i.scenario.bay;f({x:s.backCorner.x,z:D.cz-D.hl},s.backCorner,te.sight,.07),_(s.backCorner,.24,"rgba(255,224,102,0.25)",te.sight,.05),m(s.backCorner,"end of side line",te.sight,-5,0),m(x[1],"rear wheel",te.sight,-4.2,0)}if(E("gap")){const D=p(b,y);f(D,s.pole2,te.guide,.05);const Z=Math.max(0,Math.hypot(D.x-s.pole2.x,D.z-s.pole2.z)-.12);m({x:(D.x+s.pole2.x)/2,z:(D.z+s.pole2.z)/2},Aa(Z),te.guide,2.2,0)}if(E("circle")){const D=he.wheelbase/Math.tan(he.maxWheelDeg/he.steeringRatio*Math.PI/180),Z=p(-D,0),re=D-_o/2;n.beginPath(),n.setLineDash([.18*h,.14*h]),n.arc(...u(Z),re*h,0,Math.PI*2),n.strokeStyle=te.guide,n.lineWidth=Math.max(1.5,.05*h),n.stroke(),n.setLineDash([]),f(Z,x[1],te.guide,.03),_(Z,.1,te.guide),m(Z,"turn center",te.guide,0,1.5),_(s.pole1,.26,"rgba(107,227,138,0.2)",te.guide,.05),m(x[1],"right rear wheel",te.sight,0,-1.7)}if(E("bumper")&&(f(p(-b-2.2,y),p(b,y),te.sight,.05,[.2,.14]),m(p(-b-2.2,y),"rear bumper",te.sight,0,0)),r.overlays.some(D=>D.kind==="level")){const Z=(s.pole1.x-o.x)*Math.cos(o.heading)-(s.pole1.z-o.z)*Math.sin(o.heading),re=Math.min(-b-.6,Z-.5);f(p(b,0),p(re,0),te.sight,.05,[.2,.14]),m(p(b,0),"middle of the rear wheel",te.sight,0,-1.6)}if(E("curbDanger")&&s.curbZ!==void 0){const Z=qn(tn(o)).reduce((re,G)=>G.z>re.z?G:re);_(Z,.3+.12*S,"rgba(255,93,93,0.25)",te.bad,.05),f({x:Z.x-1.5,z:s.curbZ},{x:Z.x+1.5,z:s.curbZ},te.bad,.1),m({x:Z.x,z:s.curbZ},`curb: ${Aa(s.curbZ-Z.z)}`,te.bad,0,-1.6)}if(E("wheelLine")&&s.edgeZ!==void 0){const D=i.scenario.bay,Z=x[0],re=Z.z-s.edgeZ>=.15;f({x:D.cx-D.hl-3,z:s.edgeZ},{x:D.cx+D.hl,z:s.edgeZ},te.sight,.08),_(Z,.36,re?"rgba(107,227,138,0.25)":"rgba(255,224,102,0.2)",re?te.guide:te.sight,.05),m(Z,re?"left rear wheel: across":"left rear wheel",re?te.guide:te.sight,0,1.8)}if(E("pole3")&&s.pole3){const D=cn(o,{x:-1.03,y:0,z:2.06});f(D,p(-b,y-6),"rgba(255,224,102,0.45)",.035),f(D,s.pole3,te.sight,.05,[.2,.14]),_(D,.09,te.sight),_(s.pole3,.26,"rgba(255,224,102,0.25)",te.sight,.05)}if(E("laneGap")&&s.edgeZ!==void 0){const D=p(-b,0),Z={x:D.x,z:s.edgeZ};f(D,Z,te.sight,.05),f({x:D.x-3,z:s.edgeZ},{x:D.x+3,z:s.edgeZ},te.sight,.06),m(Z,HS(Math.abs(s.edgeZ-D.z)),te.sight,2.2,0)}const W=r.overlays.find(D=>D.kind==="ringGap");if(W){const D=W.ring==="near"?rt:_t,Z=W.ring==="near",re=W.side==="inner",G=re?x[Z?0:1]:x[Z?3:2],$=Math.hypot(G.x-D.x,G.z-D.z),ae=re?Ye.inner:Ye.outer,ce={x:D.x+(G.x-D.x)/$*ae,z:D.z+(G.z-D.z)/$*ae},ge=cu(o,i,W),Fe=ge?te.bad:te.sight;f(G,ce,Fe,.06),_(G,.32,ge?"rgba(255,93,93,0.22)":"rgba(255,224,102,0.2)",Fe,.04)}const L=r.overlays.find(D=>D.kind==="eightMirror");if(L){const D=L.side==="left"?1:-1,Z=L.pole===1?s.pole1:s.pole2,re=pt.z,G=(Z.x-o.x)*Math.cos(o.heading)-(Z.z-o.z)*Math.sin(o.heading),$=D*Math.max(b+.6,D*G+.4);f(p(-D*b,re),p($,re),te.sight,.05,[.2,.14]),_(p(D*pt.x,re),.1,te.sight),m(p(-D*b,re),`${L.side} mirror`,te.sight,0,1.8)}const N=r.overlays.find(D=>D.kind==="eightCornerSight"||D.kind==="eightPillarSight")??void 0;if(N){const D=N.side==="left"?1:-1,Z=N.kind==="eightPillarSight",re=cn(o,Ge),G=Z?p(D*Pi.x,Pi.z):p(D*b,P),$=Math.hypot(s.pole2.x-re.x,s.pole2.z-re.z)+1,ae=G.x-re.x,ce=G.z-re.z,ge=Math.hypot(ae,ce);f(re,{x:re.x+ae/ge*$,z:re.z+ce/ge*$},"rgba(255,224,102,0.5)",.035),f(re,s.pole2,te.sight,.05,[.2,.14]),_(re,.09,te.sight),_(G,.1,te.sight),m(re,`eye – ${N.side} ${Z?"pillar":"front corner"} – pole 2`,te.sight,0,Z?-2.2:1.9),Z&&_(x[D>0?2:3],.32,"rgba(255,224,102,0.2)",te.sight,.04)}if(E("door")){const D=cn(o,Ge);f(D,s.pole1,te.sight,.05,[.2,.14]),_(D,.09,te.sight);const Z=CM(o,s.pole1);m(s.pole1,`door hides ${kS(Z)} pole 1`,te.sight,0,3.4)}if(E("bonnet")){const D=cn(o,Ge);f(D,s.pole1,te.sight,.05,[.2,.14]),_(D,.09,te.sight),m(s.pole1,"lower part hidden by the bonnet",te.sight,0,-1.8)}if(E("curb")&&s.curbZ!==void 0&&s.edgeZ!==void 0){const D=i.scenario.bay;for(const Z of[s.curbZ,s.edgeZ])f({x:D.cx-D.hl,z:Z},{x:D.cx+D.hl,z:Z},te.guide,.05,[.25,.15]);for(const Z of[-1,1])f(p(Z*b,P+1),p(Z*b,y-1.5),te.guide,.035)}if(E("edge")&&s.edgeZ!==void 0){const D=i.scenario.bay,[Z,,re]=x,G=Math.min(Z.z,re.z)-.1<=s.edgeZ+.05,$=G?te.bad:te.guide;f({x:D.cx-D.hl,z:s.edgeZ},{x:D.cx+D.hl,z:s.edgeZ},$,.08);for(const ae of[Z,re])_(ae,.3,G?"rgba(255,93,93,0.25)":"rgba(107,227,138,0.2)",$,.04);m({x:D.cx+D.hl+1.2,z:s.edgeZ},G?"wheels on the line":"wheels inside",$)}if(E("endGaps")){const D=tn(o),Z=Math.sin(o.heading),re=Math.cos(o.heading),G={x:D.cx+Z*D.hl,z:D.cz+re*D.hl},$={x:D.cx-Z*D.hl,z:D.cz-re*D.hl};for(const[ae,ce]of[[G,s.pole1],[$,s.pole2]]){const ge={x:ce.x,z:ae.z};f(ae,ge,te.guide,.04);const Fe=Math.max(0,Math.abs(ce.x-ae.x)-.12);m({x:(ae.x+ge.x)/2,z:ae.z},Aa(Fe),te.guide,0,-1.4)}}const V=r.overlays.find(D=>D.kind==="mirror"),H=W!==void 0&&cu(o,i,W),se=W&&W.side==="inner"?W.ring==="near"?rt:_t:void 0,me=se?D=>Math.abs(Math.hypot((D.x1+D.x2)/2-se.x,(D.z1+D.z2)/2-se.z)-Ye.inner)<.3:void 0;V&&JS(n,l,c,o,i,s,V.side,V.mark,H,me)}function JS(n,e,t,i,s,r,o,a,l=!1,c){const h=Math.min(e*.36,t*.55*1.5),u=h/1.5,d=Math.max(8,e*.015),f=e-h-d,g=t-u-d,_=L=>{const N=hs(o,L);if(N.depth<.15)return null;const V=o==="right"?(N.X+1)/2:(1-N.X)/2;return[f+V*h,g+(1-N.Y)/2*u]},m=(L,N=0)=>Md(i,{x:L.x,z:L.z,y:N}),p=L=>{let N=!1;for(const V of L){const H=_(V);if(!H){N=!1;continue}N?n.lineTo(...H):n.moveTo(...H),N=!0}};n.save(),n.beginPath(),n.roundRect(f,g,h,u,u*.18),n.clip();const E=o==="left"?1:-1,S=_({x:E*60,y:0,z:-200}),v=S?Math.max(g,Math.min(g+u,S[1])):g+u*.3;n.fillStyle="#9cc4e8",n.fillRect(f,g,h,v-g),n.fillStyle=te.ground,n.fillRect(f,v,h,g+u-v),n.strokeStyle=te.paint,n.lineCap="round";for(const L of[...s.scenario.paint,...s.scenario.course?.boundaries??[]]){const N=[];for(let H=0;H<=40;H++){const se=H/40;N.push(m({x:L.x1+(L.x2-L.x1)*se,z:L.z1+(L.z2-L.z1)*se}))}const V=c?.(L)??!1;n.strokeStyle=V?l?te.bad:te.sight:te.paint,n.beginPath(),n.lineWidth=Math.max(1.5,h*(V?.014:.008)),p(N),n.stroke()}const I=[...s.scenario.poles??[],...s.scenario.course?.poles??[]].sort((L,N)=>hs(o,m(N)).depth-hs(o,m(L)).depth);for(const L of I){const N=_(m(L)),V=_(m(L,ho));if(!N||!V)continue;const H=hs(o,m(L)).depth,se=Math.tan(16*Math.PI/180)*1.5,me=(s.scenario.course?.poles?.length??0)>0;n.globalAlpha=me?.3:.55,n.strokeStyle=te.pole,n.lineWidth=Math.max(1.5,Math.min(me?h*.012:1/0,.1/(H*se)*(h/2))),n.beginPath(),n.moveTo(...N),n.lineTo(...V),n.stroke(),n.globalAlpha=1}const C=E*(he.width/2),b=[];for(let L=1.9;L>=-.9-1e-9;L-=.1)b.push(L);const P=[...b.map(L=>({x:C,y:1,z:L})),...[...b].reverse().map(L=>({x:C,y:.3,z:L}))];n.beginPath(),p(P),n.closePath(),n.fillStyle=te.car,n.fill(),n.strokeStyle=te.carEdge,n.lineWidth=2,n.stroke();const y=yd(o);n.beginPath(),p([...y,{...y.at(-1),y:0},{...y[0],y:0}]),n.closePath(),n.fillStyle="#1b1e24",n.fill();const x=[];for(let L=0;L<=24;L++){const N=Math.PI*2*L/24;x.push({x:E*(he.width/2-.08),y:.31+.3*Math.sin(N),z:.3*Math.cos(N)})}n.beginPath(),p(x),n.closePath(),n.fillStyle="#0c0d10",n.fill();const A=(L,N)=>{const V=L&&_(L);V&&(n.beginPath(),n.arc(...V,Math.max(6,h*.035),0,Math.PI*2),n.strokeStyle=N,n.lineWidth=2.5,n.stroke())};if(a==="corner"){A(m(r.backCorner),te.sight),A(y.at(-1),te.sight);const L=_(m(r.backCorner)),N=_(y.at(-1));if(L&&N){n.setLineDash([6,5]),n.beginPath(),n.moveTo(f,N[1]),n.lineTo(f+h,N[1]),n.strokeStyle=te.sight,n.lineWidth=1.5,n.stroke(),n.setLineDash([]);const V=Math.max(10,h*.04);n.font=`600 ${V}px system-ui, sans-serif`,n.textAlign="right",n.textBaseline="bottom",n.fillStyle=te.sight,n.fillText(L[1]>N[1]-2?"level: stop":"line end ↓ arch",f+h-u*.12,N[1]-4)}}else if(a==="edge"&&r.edgeZ!==void 0){const L=cn(i,{x:0,y:0,z:-3});A(m({x:L.x,z:r.edgeZ}),te.sight)}else if(a==="edgeNear"&&r.edgeZ!==void 0){const L=cn(i,{x:0,y:0,z:-.7});A(m({x:L.x,z:r.edgeZ}),te.sight)}else if(a==="curb"&&r.curbZ!==void 0){const L=cn(i,{x:-.9,y:0,z:-1.3});A(m({x:L.x,z:r.curbZ}),te.bad)}else a==="rearWheel"?A({x:E*(he.width/2-.08),y:.05,z:0},l?te.bad:te.sight):a==="pole3"&&r.pole3?A(m(r.pole3,ho*.55),te.sight):A(m(r.pole1,ho*.55),a==="pole1"?te.sight:te.bad);n.restore(),n.strokeStyle="#11141a",n.lineWidth=Math.max(3,h*.012),n.beginPath(),n.roundRect(f,g,h,u,u*.18),n.stroke();const z=Math.max(11,h*.045);n.font=`600 ${z}px system-ui, sans-serif`,n.fillStyle="#11141a",n.textAlign="left",n.textBaseline="top";const O=o==="right"?"Right mirror":"Left mirror",W=n.measureText(O).width;n.fillStyle="rgba(17,20,26,0.75)",n.fillRect(f+u*.12,g+u*.06,W+z*.8,z*1.4),n.fillStyle="#eef1f5",n.fillText(O,f+u*.12+z*.4,g+u*.06+z*.2)}function cu(n,e,t){const i=t.ring==="near"?rt:_t,s=t.ring==="near",r=t.side==="inner";return(r?Od(n,i,s):kd(n,i,s,e.scenario))<(r?.35:.24)}const jS=(n,e,t,i)=>{n.innerHTML="",n.className="overlay";const s=document.createElement("div");s.className="menu-panel results",s.innerHTML=`<div class="grade grade-${t.grade}">${t.grade}</div><h2>${e.scenario.name}</h2><div class="score">${t.total} / 100</div>`;const r=document.createElement("div");r.className="breakdown",t.lines.length===0&&(r.innerHTML='<div class="line"><span>Flawless — no deductions</span><b>±0</b></div>');for(const c of t.lines){const h=document.createElement("div");h.className="line",h.innerHTML=`<span>${c.label}</span><b>${c.delta.toFixed(1)}</b>`,r.appendChild(h)}s.appendChild(r);const o=document.createElement("p");o.className="menu-help",o.textContent=`Time ${e.time.toFixed(0)}s · Collisions ${e.collisions} · Gear changes ${e.reversals}`,s.appendChild(o);const a=document.createElement("div");a.className="buttons";const l=(c,h,u=!1)=>{const d=document.createElement("button");d.className=u?"btn primary":"btn",d.textContent=c,d.addEventListener("click",h),a.appendChild(d)};l("Retry (R)",i.onRetry,!0),i.onNext&&l("Next scenario",i.onNext),l("Menu (Esc)",i.onMenu),s.appendChild(a),n.appendChild(s)},an=(n,e,t,i)=>{const s=document.createElement("button");return s.type="button",s.className=`touch-btn ${e}`,s.innerHTML=t,s.title=i,s.setAttribute("aria-label",i),s.addEventListener("contextmenu",r=>r.preventDefault()),n.appendChild(s),s},no=n=>'<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="'+(n==="left"?"M17 4 L6 12 L17 20 Z":"M7 4 L18 12 L7 20 Z")+'"/></svg>',hu='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',Ca=(n,e,t)=>{let i=null;n.addEventListener("pointerdown",r=>{r.preventDefault(),i===null&&(i=r.pointerId,n.setPointerCapture(r.pointerId),n.classList.add("active"),e())});const s=r=>{r.pointerId===i&&(i=null,n.classList.remove("active"),t())};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("lostpointercapture",s)},rs=(n,e)=>{n.addEventListener("click",t=>{t.preventDefault(),e()})},QS=()=>{const n=document.documentElement;window.matchMedia?.("(pointer: coarse)").matches&&n.classList.add("touch"),window.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&n.classList.add("touch")},{capture:!0})},eE=(n,e,t)=>{const i=(h,u)=>Ca(h,()=>e.setTouchControl(u,!0),()=>e.setTouchControl(u,!1)),s=document.createElement("div");s.className="touch-ui pedals",n.layer.appendChild(s),i(an(s,"handbrake","P","Handbrake"),"handbrake"),i(an(s,"pedal brake","▼<small>brake · R</small>","Brake, then reverse"),"reverse"),i(an(s,"pedal gas","▲<small>drive</small>","Drive"),"throttle");const r=an(n.steerLeftSlot,"look",hu+no("left"),"Look left (hold)");Ca(r,()=>e.setTouchLookLeft(!0),()=>e.setTouchLookLeft(!1)),i(an(n.steerLeftSlot,"arrow",no("left"),"Steer left"),"steerLeft");const o=an(n.steerRightSlot,"look",no("right")+hu,"Tap: right pillar · hold: look back");Ca(o,()=>e.headPress(),()=>e.headRelease()),i(an(n.steerRightSlot,"arrow",no("right"),"Steer right"),"steerRight");const a=document.createElement("div");a.className="touch-ui touch-bar",n.topCenter.prepend(a),rs(an(a,"small","🎥","Change view"),t.onCycleView),rs(an(a,"small","🗺","Bird's-eye view on/off"),t.onToggleEagle),rs(an(a,"small","📷","Reverse camera on/off"),t.onToggleReverseAids),rs(an(a,"small","↻","Restart"),t.onRestart),rs(an(a,"small","☰","Menu"),t.onMenu);const l=document.createElement("div");l.className="touch-ui rotate-hint",l.innerHTML='<div>⟳</div><p>Turn your phone to landscape</p><p class="rotate-note">Screen not turning? Turn off rotation lock on your phone.</p>';const c=document.createElement("button");c.type="button",c.className="btn",c.textContent="☰ Back to menu",rs(c,t.onMenu),l.appendChild(c),n.layer.appendChild(l)},tE=(n,e)=>n.left<e.right&&e.left<n.right&&n.top<e.bottom&&e.top<n.bottom,nE=(n,e,t)=>{const i=[["left mirror",nu("left",e,t)],["right mirror",nu("right",e,t)]],s=[];for(const{name:r,rect:o}of n)for(const[a,l]of i)tE(o,l)&&s.push(`${r} covers ${a}`);return s},iE=()=>{const n=document.querySelectorAll(".hud .panel, .hud .touch-btn"),e=[];n.forEach(i=>{const s=i.getBoundingClientRect();s.width===0||s.height===0||e.push({name:i.className||i.tagName,rect:s})});const t=nE(e,window.innerWidth,window.innerHeight);for(const i of t)console.warn(`[layout] ${i}`);return t},sE=/swiftshader|llvmpipe|softpipe|basic render driver|software rasterizer/i,rE=n=>!!n&&sE.test(n),oE=n=>{try{const e=n.getExtension("WEBGL_debug_renderer_info"),t=n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER);return typeof t=="string"?t:null}catch{return null}},aE=()=>{try{const n=document.createElement("canvas"),e={failIfMajorPerformanceCaveat:!0},t=n.getContext("webgl2",e)??n.getContext("webgl",e);return t?(t.getExtension("WEBGL_lose_context")?.loseContext(),!1):!0}catch{return!1}},lE=n=>rE(oE(n))||aE(),rf="gpu.warningDismissed",cE=()=>{try{return localStorage.getItem(rf)==="1"}catch{return!1}},hE=()=>{const n=document.createElement("div");n.className="gpu-warning",n.setAttribute("role","alert"),n.innerHTML="<p><b>Your browser is drawing 3D without the graphics card, so the simulator will lag.</b> Turn on <i>Use graphics acceleration when available</i> (Chrome, Brave: Settings → System; Edge: Settings → System and performance), then restart the browser.</p>";const e=document.createElement("button");return e.type="button",e.className="btn",e.textContent="Got it",e.addEventListener("click",()=>{try{localStorage.setItem(rf,"1")}catch{}n.remove()}),n.appendChild(e),n},Pa=1/120,uE=.1,dE=1e3/30,Po=document.getElementById("ui"),Dt=new Tx({antialias:!0});let of=1/0;const af=new ES;Dt.setPixelRatio(ef(window.devicePixelRatio));Dt.shadowMap.enabled=!0;Dt.shadowMap.type=mu;Dt.shadowMap.autoUpdate=!1;Dt.toneMapping=_u;Dt.toneMappingExposure=1.15;document.body.appendChild(Dt.domElement);const lf=lE(Dt.getContext());lf&&window.addEventListener("load",()=>Ln("gpu/software","Software WebGL rendering"),{once:!0});const Cs=cS(),fE=new vl(Dt);Cs.environment=fE.fromScene(new Ax,.04).texture;const Qt=Kd(2781140,!0);Qt.group.rotation.order="YXZ";Cs.add(Qt.group);const Lt=new nS(Qt.group,1),Eo=new iS(Qt.group),cf=Ky();Qt.group.add(cf.group);const Ps=new AS(document.body);let ln="menu",et=null,Rl=null;const hf=new By;let us=null,uo=0,uu=performance.now(),du=0,fu=!1;function uf(){ln!=="playing"||!et||et.complete||Ln(`abort/${et.scenario.id}`,`Abort: ${et.scenario.name}`)}window.addEventListener("pagehide",uf);const df=n=>{let e=(()=>{try{return localStorage.getItem(n)!=="off"}catch{return!0}})();return{on:()=>e,toggle:()=>{e=!e;try{localStorage.setItem(n,e?"on":"off")}catch{}}}},wo=df("parking.eagle"),oc=df("parking.reverseAids"),rr=new Lx({onView:n=>Lt.setView(n),onRestart:()=>et&&Ls(et.scenario),onMenu:()=>Sr(),onToggleEagle:wo.toggle,onToggleReverseAids:oc.toggle,onToggleCoach:void 0});QS();eE(Ps,rr,{onCycleView:()=>Lt.setView(Px(Lt.activeView)),onToggleEagle:wo.toggle,onToggleReverseAids:oc.toggle,onRestart:()=>et&&Ls(et.scenario),onMenu:()=>Sr()});function ac(){const n=window.innerWidth,e=window.innerHeight;Dt.setPixelRatio(ef(window.devicePixelRatio,of)),Dt.setSize(n,e),Lt.setAspect(n/e),Eo.setSize(n,e)}window.addEventListener("resize",ac);ac();function Sr(){uf(),ln="menu",et=null,Ps.hide(),FS(Po,Rs,Ls,lf&&!cE()?hE():void 0,[{title:"Reverse into a garage",text:"Animated lesson from above: where to stop, what to look at, and how to fix starting too late or too early.",open:()=>io("reverse-in","Learn: reverse into a garage",qM)},{title:"Parallel parking",text:"Animated lesson: the reference cues step by step, and how to fix ending up on the edge line.",open:()=>io("parallel","Learn: parallel parking",Oy)},{title:"Figure eight",text:"Animated lesson from above: when to turn and when to straighten, by the two yellow-banded poles.",open:()=>io("figure-eight","Learn: figure eight",ty)},{title:"Hill start",text:"Animated lesson from the side: where to keep on the ramp and when the stop line is under the mirror.",open:()=>io("hill-start","Learn: hill start",uy)}])}function io(n,e,t){const i=Rs.find(r=>r.id===n);if(!i)return;Ln(`learn/${n}`,e);const s=e.replace(/^Learn: /,"");$S(Po,t(i),{onPractice:Ls,onMenu:Sr,title:e,onLessonEnd:(r,o)=>{r===0&&Ln(`learn-ref/${n}`,`Learn, reference run watched: ${s}`),r===o-1&&Ln(`learn-done/${n}`,`Learn, all lessons watched: ${s}`)}})}function Ls(n){rr.resetHead(),us&&oS(us),us=Qd(n),Cs.add(us),Eo.setEagleTarget(n.bay),et=Us(n),Rl=null,hf.reset(),uo=0,af.reset(),ln="playing",OS(Po),Ps.show(),Lt.setView(1),ff(et),Lt.update(et.car,1),Ln(`start/${n.id}`,`Start: ${n.name}`)}function pE(n){ln="results",Ps.hide();const e=oM(n);Ln(`finish/${n.scenario.id}/${e.grade}`,`Finish: ${n.scenario.name} (${e.grade})`);const t=Rs.findIndex(s=>s.id===n.scenario.id),i=Rs[t+1];jS(Po,n,e,{onRetry:()=>Ls(n.scenario),onNext:i?()=>Ls(i):void 0,onMenu:Sr})}function ff(n){const{car:e}=n,t=n.scenario.course?.hill?[n.scenario.course.hill]:[];Qt.group.position.set(e.x,jt(t,e.x,e.z),e.z),Qt.group.rotation.y=e.heading,Qt.group.rotation.x=-Ro(t,e);const i=td(e);for(const s of Qt.frontWheelPivots)s.rotation.y=i;Qt.steeringWheel&&(Qt.steeringWheel.rotation.z=-Sp.degToRad(e.wheelDeg)),cf.update(i)}function pf(n){requestAnimationFrame(pf);const e=n-uu,t=Math.min(e/1e3,uE);if(uu=n,ln==="playing"&&et){if(af.feed(e)){const r=SS(Dt.getPixelRatio());r!==Dt.getPixelRatio()&&(of=r,ac())}uo+=t;const s=rr.controls();for(;uo>=Pa;)et=Fi(et,hf.apply(s,et.car.wheelDeg,void 0),Pa),uo-=Pa;ff(et),et.scenario.course&&et.course&&Eo.setEagleTarget(Kx(et.scenario.course,et.course,et.scenario.bay)),Ps.update(et,Lt.activeView,wo.on()&&Lt.activeView!==3),Rl&&Rl.update(et),Ps.updateCoach(null,et),et.complete&&pE(et)}const i=ln==="playing"?rr.headTarget():"ahead";if(Lt.setHeadTarget(i==="back"?1:i==="pillar"?Fx()/Li.yawDeg:0),Lt.setLookLeft(ln==="playing"&&rr.lookLeft()),Lt.update(et?.car??mE,t),!(ln!=="playing"&&n-du<dE-1)&&(du=n,Dt.shadowMap.needsUpdate=!0,Dt.render(Cs,Lt.active),Eo.render(Dt,Cs,{mirrors:ln==="playing"&&Lt.activeView===1&&Lt.headTurn<.2,backup:ln==="playing"&&et?.car.gear==="R"&&oc.on(),eagle:ln==="playing"&&Lt.activeView!==3&&wo.on()}),!fu&&!Dt.getContext().isContextLost())){fu=!0;const s=US(navigator.userAgent,navigator.maxTouchPoints);IS(`loaded/${s}`,`Scene rendered (${s})`)}}window.__parking={getSession:()=>et,setCar:(n,e,t)=>{et&&(et={...et,car:{...et.car,x:n,z:e,heading:t,speed:0}})}};new URLSearchParams(window.location.search).get("debug")==="layout"&&window.setInterval(()=>{ln==="playing"&&Lt.activeView===1&&iE()},1e3);const ms=Rs[0].spawn,mE=ed(ms.x,ms.z,ms.heading);us=Qd(Rs[0]);Cs.add(us);Qt.group.position.set(ms.x,0,ms.z);Qt.group.rotation.y=ms.heading;Lt.setView(2);Sr();requestAnimationFrame(pf);
