(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))B(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&B(h)}).observe(document,{childList:!0,subtree:!0});function g(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function B(o){if(o.ep)return;o.ep=!0;const r=g(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="155",Im=0,Ad=1,im=2,qu=1,Bm=2,nC=3,QC=0,Di=1,lB=2,JC=0,_o=1,td=2,ed=3,gd=4,Cm=5,To=100,nm=101,om=102,Id=103,id=104,Em=200,Qm=201,sm=202,rm=203,_u=204,Wu=205,am=206,hm=207,cm=208,lm=209,dm=210,um=0,Dm=1,fm=2,eh=3,pm=4,wm=5,ym=6,Mm=7,Pu=0,mm=1,Rm=2,KC=0,Sm=1,Gm=2,Fm=3,Nm=4,Um=5,Ou=300,Vo=301,Zo=302,gh=303,Ih=304,nr=306,Xo=1e3,_i=1001,ir=1002,KI=1003,ih=1004,gr=1005,li=1006,Vu=1007,xn=1008,YC=1009,km=1010,Lm=1011,ch=1012,Zu=1013,xC=1014,oC=1015,uQ=1016,Xu=1017,zu=1018,Nn=1020,xm=1021,Wi=1023,bm=1024,Jm=1025,Un=1026,zo=1027,Km=1028,ju=1029,Ym=1030,$u=1031,AD=1033,Da=33776,fa=33777,pa=33778,wa=33779,Bd=35840,Cd=35841,nd=35842,od=35843,vm=36196,Ed=37492,Qd=37496,sd=37808,rd=37809,ad=37810,hd=37811,cd=37812,ld=37813,dd=37814,ud=37815,Dd=37816,fd=37817,pd=37818,wd=37819,yd=37820,Md=37821,ya=36492,Hm=36283,md=36284,Rd=36285,Sd=36286,DQ=2300,jo=2301,Ma=2302,Gd=2400,Fd=2401,Nd=2402,Tm=2500,qm=0,tD=1,Bh=2,eD=3e3,kn=3001,_m=3200,Wm=3201,lh=0,Pm=1,Ln="",tg="srgb",xB="srgb-linear",gD="display-p3",ma=7680,Om=519,Vm=512,Zm=513,Xm=514,zm=515,jm=516,$m=517,AR=518,tR=519,Ch=35044,Ud="300 es",nh=1035,EC=2e3,Br=2001;class iE{addEventListener(t,g){this._listeners===void 0&&(this._listeners={});const B=this._listeners;B[t]===void 0&&(B[t]=[]),B[t].indexOf(g)===-1&&B[t].push(g)}hasEventListener(t,g){if(this._listeners===void 0)return!1;const B=this._listeners;return B[t]!==void 0&&B[t].indexOf(g)!==-1}removeEventListener(t,g){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const r=o.indexOf(g);r!==-1&&o.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const B=this._listeners[t.type];if(B!==void 0){t.target=this;const o=B.slice(0);for(let r=0,h=o.length;r<h;r++)o[r].call(this,t);t.target=null}}}const zI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kd=1234567;const cQ=Math.PI/180,$o=180/Math.PI;function dB(){const E=Math.random()*4294967295|0,t=Math.random()*4294967295|0,g=Math.random()*4294967295|0,B=Math.random()*4294967295|0;return(zI[E&255]+zI[E>>8&255]+zI[E>>16&255]+zI[E>>24&255]+"-"+zI[t&255]+zI[t>>8&255]+"-"+zI[t>>16&15|64]+zI[t>>24&255]+"-"+zI[g&63|128]+zI[g>>8&255]+"-"+zI[g>>16&255]+zI[g>>24&255]+zI[B&255]+zI[B>>8&255]+zI[B>>16&255]+zI[B>>24&255]).toLowerCase()}function $I(E,t,g){return Math.max(t,Math.min(g,E))}function dh(E,t){return(E%t+t)%t}function eR(E,t,g,B,o){return B+(E-t)*(o-B)/(g-t)}function gR(E,t,g){return E!==t?(g-E)/(t-E):0}function lQ(E,t,g){return(1-g)*E+g*t}function IR(E,t,g,B){return lQ(E,t,1-Math.exp(-g*B))}function iR(E,t=1){return t-Math.abs(dh(E,t*2)-t)}function BR(E,t,g){return E<=t?0:E>=g?1:(E=(E-t)/(g-t),E*E*(3-2*E))}function CR(E,t,g){return E<=t?0:E>=g?1:(E=(E-t)/(g-t),E*E*E*(E*(E*6-15)+10))}function nR(E,t){return E+Math.floor(Math.random()*(t-E+1))}function oR(E,t){return E+Math.random()*(t-E)}function ER(E){return E*(.5-Math.random())}function QR(E){E!==void 0&&(kd=E);let t=kd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sR(E){return E*cQ}function rR(E){return E*$o}function oh(E){return(E&E-1)===0&&E!==0}function ID(E){return Math.pow(2,Math.ceil(Math.log(E)/Math.LN2))}function Cr(E){return Math.pow(2,Math.floor(Math.log(E)/Math.LN2))}function aR(E,t,g,B,o){const r=Math.cos,h=Math.sin,a=r(g/2),D=h(g/2),f=r((t+B)/2),m=h((t+B)/2),S=r((t-B)/2),F=h((t-B)/2),J=r((B-t)/2),P=h((B-t)/2);switch(o){case"XYX":E.set(a*m,D*S,D*F,a*f);break;case"YZY":E.set(D*F,a*m,D*S,a*f);break;case"ZXZ":E.set(D*S,D*F,a*m,a*f);break;case"XZX":E.set(a*m,D*P,D*J,a*f);break;case"YXY":E.set(D*J,a*m,D*P,a*f);break;case"ZYZ":E.set(D*P,D*J,a*m,a*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function LB(E,t){switch(t.constructor){case Float32Array:return E;case Uint32Array:return E/4294967295;case Uint16Array:return E/65535;case Uint8Array:return E/255;case Int32Array:return Math.max(E/2147483647,-1);case Int16Array:return Math.max(E/32767,-1);case Int8Array:return Math.max(E/127,-1);default:throw new Error("Invalid component type.")}}function _g(E,t){switch(t.constructor){case Float32Array:return E;case Uint32Array:return Math.round(E*4294967295);case Uint16Array:return Math.round(E*65535);case Uint8Array:return Math.round(E*255);case Int32Array:return Math.round(E*2147483647);case Int16Array:return Math.round(E*32767);case Int8Array:return Math.round(E*127);default:throw new Error("Invalid component type.")}}const hR={DEG2RAD:cQ,RAD2DEG:$o,generateUUID:dB,clamp:$I,euclideanModulo:dh,mapLinear:eR,inverseLerp:gR,lerp:lQ,damp:IR,pingpong:iR,smoothstep:BR,smootherstep:CR,randInt:nR,randFloat:oR,randFloatSpread:ER,seededRandom:QR,degToRad:sR,radToDeg:rR,isPowerOfTwo:oh,ceilPowerOfTwo:ID,floorPowerOfTwo:Cr,setQuaternionFromProperEuler:aR,normalize:_g,denormalize:LB};class Mg{constructor(t=0,g=0){Mg.prototype.isVector2=!0,this.x=t,this.y=g}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,g){return this.x=t,this.y=g,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,g){switch(t){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,g){return this.x=t.x+g.x,this.y=t.y+g.y,this}addScaledVector(t,g){return this.x+=t.x*g,this.y+=t.y*g,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,g){return this.x=t.x-g.x,this.y=t.y-g.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const g=this.x,B=this.y,o=t.elements;return this.x=o[0]*g+o[3]*B+o[6],this.y=o[1]*g+o[4]*B+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,g){return this.x=Math.max(t.x,Math.min(g.x,this.x)),this.y=Math.max(t.y,Math.min(g.y,this.y)),this}clampScalar(t,g){return this.x=Math.max(t,Math.min(g,this.x)),this.y=Math.max(t,Math.min(g,this.y)),this}clampLength(t,g){const B=this.length();return this.divideScalar(B||1).multiplyScalar(Math.max(t,Math.min(g,B)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const g=Math.sqrt(this.lengthSq()*t.lengthSq());if(g===0)return Math.PI/2;const B=this.dot(t)/g;return Math.acos($I(B,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const g=this.x-t.x,B=this.y-t.y;return g*g+B*B}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,g){return this.x+=(t.x-this.x)*g,this.y+=(t.y-this.y)*g,this}lerpVectors(t,g,B){return this.x=t.x+(g.x-t.x)*B,this.y=t.y+(g.y-t.y)*B,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,g=0){return this.x=t[g],this.y=t[g+1],this}toArray(t=[],g=0){return t[g]=this.x,t[g+1]=this.y,t}fromBufferAttribute(t,g){return this.x=t.getX(g),this.y=t.getY(g),this}rotateAround(t,g){const B=Math.cos(g),o=Math.sin(g),r=this.x-t.x,h=this.y-t.y;return this.x=r*B-h*o+t.x,this.y=r*o+h*B+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ag{constructor(t,g,B,o,r,h,a,D,f){ag.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,g,B,o,r,h,a,D,f)}set(t,g,B,o,r,h,a,D,f){const m=this.elements;return m[0]=t,m[1]=o,m[2]=a,m[3]=g,m[4]=r,m[5]=D,m[6]=B,m[7]=h,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const g=this.elements,B=t.elements;return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g[4]=B[4],g[5]=B[5],g[6]=B[6],g[7]=B[7],g[8]=B[8],this}extractBasis(t,g,B){return t.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),B.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const g=t.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,g){const B=t.elements,o=g.elements,r=this.elements,h=B[0],a=B[3],D=B[6],f=B[1],m=B[4],S=B[7],F=B[2],J=B[5],P=B[8],T=o[0],x=o[3],L=o[6],iA=o[1],j=o[4],gA=o[7],dA=o[2],fA=o[5],pA=o[8];return r[0]=h*T+a*iA+D*dA,r[3]=h*x+a*j+D*fA,r[6]=h*L+a*gA+D*pA,r[1]=f*T+m*iA+S*dA,r[4]=f*x+m*j+S*fA,r[7]=f*L+m*gA+S*pA,r[2]=F*T+J*iA+P*dA,r[5]=F*x+J*j+P*fA,r[8]=F*L+J*gA+P*pA,this}multiplyScalar(t){const g=this.elements;return g[0]*=t,g[3]*=t,g[6]*=t,g[1]*=t,g[4]*=t,g[7]*=t,g[2]*=t,g[5]*=t,g[8]*=t,this}determinant(){const t=this.elements,g=t[0],B=t[1],o=t[2],r=t[3],h=t[4],a=t[5],D=t[6],f=t[7],m=t[8];return g*h*m-g*a*f-B*r*m+B*a*D+o*r*f-o*h*D}invert(){const t=this.elements,g=t[0],B=t[1],o=t[2],r=t[3],h=t[4],a=t[5],D=t[6],f=t[7],m=t[8],S=m*h-a*f,F=a*D-m*r,J=f*r-h*D,P=g*S+B*F+o*J;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=S*T,t[1]=(o*f-m*B)*T,t[2]=(a*B-o*h)*T,t[3]=F*T,t[4]=(m*g-o*D)*T,t[5]=(o*r-a*g)*T,t[6]=J*T,t[7]=(B*D-f*g)*T,t[8]=(h*g-B*r)*T,this}transpose(){let t;const g=this.elements;return t=g[1],g[1]=g[3],g[3]=t,t=g[2],g[2]=g[6],g[6]=t,t=g[5],g[5]=g[7],g[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const g=this.elements;return t[0]=g[0],t[1]=g[3],t[2]=g[6],t[3]=g[1],t[4]=g[4],t[5]=g[7],t[6]=g[2],t[7]=g[5],t[8]=g[8],this}setUvTransform(t,g,B,o,r,h,a){const D=Math.cos(r),f=Math.sin(r);return this.set(B*D,B*f,-B*(D*h+f*a)+h+t,-o*f,o*D,-o*(-f*h+D*a)+a+g,0,0,1),this}scale(t,g){return this.premultiply(Ra.makeScale(t,g)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,g){return this.premultiply(Ra.makeTranslation(t,g)),this}makeTranslation(t,g){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,g,0,0,1),this}makeRotation(t){const g=Math.cos(t),B=Math.sin(t);return this.set(g,-B,0,B,g,0,0,0,1),this}makeScale(t,g){return this.set(t,0,0,0,g,0,0,0,1),this}equals(t){const g=this.elements,B=t.elements;for(let o=0;o<9;o++)if(g[o]!==B[o])return!1;return!0}fromArray(t,g=0){for(let B=0;B<9;B++)this.elements[B]=t[B+g];return this}toArray(t=[],g=0){const B=this.elements;return t[g]=B[0],t[g+1]=B[1],t[g+2]=B[2],t[g+3]=B[3],t[g+4]=B[4],t[g+5]=B[5],t[g+6]=B[6],t[g+7]=B[7],t[g+8]=B[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new ag;function iD(E){for(let t=E.length-1;t>=0;--t)if(E[t]>=65535)return!0;return!1}function fQ(E){return document.createElementNS("http://www.w3.org/1999/xhtml",E)}const Ld={};function dQ(E){E in Ld||(Ld[E]=!0,console.warn(E))}function Wo(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}function Sa(E){return E<.0031308?E*12.92:1.055*Math.pow(E,.41666)-.055}const cR=new ag().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),lR=new ag().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dR(E){return E.convertSRGBToLinear().applyMatrix3(lR)}function uR(E){return E.applyMatrix3(cR).convertLinearToSRGB()}const DR={[xB]:E=>E,[tg]:E=>E.convertSRGBToLinear(),[gD]:dR},fR={[xB]:E=>E,[tg]:E=>E.convertLinearToSRGB(),[gD]:uR},sB={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(E){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!E},get workingColorSpace(){return xB},set workingColorSpace(E){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(E,t,g){if(this.enabled===!1||t===g||!t||!g)return E;const B=DR[t],o=fR[g];if(B===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${g}".`);return o(B(E))},fromWorkingColorSpace:function(E,t){return this.convert(E,this.workingColorSpace,t)},toWorkingColorSpace:function(E,t){return this.convert(E,t,this.workingColorSpace)}};let yo;class BD{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let g;if(t instanceof HTMLCanvasElement)g=t;else{yo===void 0&&(yo=fQ("canvas")),yo.width=t.width,yo.height=t.height;const B=yo.getContext("2d");t instanceof ImageData?B.putImageData(t,0,0):B.drawImage(t,0,0,t.width,t.height),g=yo}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const g=fQ("canvas");g.width=t.width,g.height=t.height;const B=g.getContext("2d");B.drawImage(t,0,0,t.width,t.height);const o=B.getImageData(0,0,t.width,t.height),r=o.data;for(let h=0;h<r.length;h++)r[h]=Wo(r[h]/255)*255;return B.putImageData(o,0,0),g}else if(t.data){const g=t.data.slice(0);for(let B=0;B<g.length;B++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[B]=Math.floor(Wo(g[B]/255)*255):g[B]=Wo(g[B]);return{data:g,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pR=0;class CD{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=dB(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const g=t===void 0||typeof t=="string";if(!g&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const B={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let h=0,a=o.length;h<a;h++)o[h].isDataTexture?r.push(Ga(o[h].image)):r.push(Ga(o[h]))}else r=Ga(o);B.url=r}return g||(t.images[this.uuid]=B),B}}function Ga(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap?BD.getDataURL(E):E.data?{data:Array.from(E.data),width:E.width,height:E.height,type:E.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wR=0;class OI extends iE{constructor(t=OI.DEFAULT_IMAGE,g=OI.DEFAULT_MAPPING,B=_i,o=_i,r=li,h=xn,a=Wi,D=YC,f=OI.DEFAULT_ANISOTROPY,m=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=dB(),this.name="",this.source=new CD(t),this.mipmaps=[],this.mapping=g,this.channel=0,this.wrapS=B,this.wrapT=o,this.magFilter=r,this.minFilter=h,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=D,this.offset=new Mg(0,0),this.repeat=new Mg(1,1),this.center=new Mg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ag,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(dQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===kn?tg:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const g=t===void 0||typeof t=="string";if(!g&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const B={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(B.userData=this.userData),g||(t.textures[this.uuid]=B),B}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tg?kn:eD}set encoding(t){dQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===kn?tg:Ln}}OI.DEFAULT_IMAGE=null;OI.DEFAULT_MAPPING=Ou;OI.DEFAULT_ANISOTROPY=1;class Og{constructor(t=0,g=0,B=0,o=1){Og.prototype.isVector4=!0,this.x=t,this.y=g,this.z=B,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,g,B,o){return this.x=t,this.y=g,this.z=B,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,g){switch(t){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,g){return this.x=t.x+g.x,this.y=t.y+g.y,this.z=t.z+g.z,this.w=t.w+g.w,this}addScaledVector(t,g){return this.x+=t.x*g,this.y+=t.y*g,this.z+=t.z*g,this.w+=t.w*g,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,g){return this.x=t.x-g.x,this.y=t.y-g.y,this.z=t.z-g.z,this.w=t.w-g.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const g=this.x,B=this.y,o=this.z,r=this.w,h=t.elements;return this.x=h[0]*g+h[4]*B+h[8]*o+h[12]*r,this.y=h[1]*g+h[5]*B+h[9]*o+h[13]*r,this.z=h[2]*g+h[6]*B+h[10]*o+h[14]*r,this.w=h[3]*g+h[7]*B+h[11]*o+h[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const g=Math.sqrt(1-t.w*t.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/g,this.y=t.y/g,this.z=t.z/g),this}setAxisAngleFromRotationMatrix(t){let g,B,o,r;const D=t.elements,f=D[0],m=D[4],S=D[8],F=D[1],J=D[5],P=D[9],T=D[2],x=D[6],L=D[10];if(Math.abs(m-F)<.01&&Math.abs(S-T)<.01&&Math.abs(P-x)<.01){if(Math.abs(m+F)<.1&&Math.abs(S+T)<.1&&Math.abs(P+x)<.1&&Math.abs(f+J+L-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const j=(f+1)/2,gA=(J+1)/2,dA=(L+1)/2,fA=(m+F)/4,pA=(S+T)/4,YA=(P+x)/4;return j>gA&&j>dA?j<.01?(B=0,o=.707106781,r=.707106781):(B=Math.sqrt(j),o=fA/B,r=pA/B):gA>dA?gA<.01?(B=.707106781,o=0,r=.707106781):(o=Math.sqrt(gA),B=fA/o,r=YA/o):dA<.01?(B=.707106781,o=.707106781,r=0):(r=Math.sqrt(dA),B=pA/r,o=YA/r),this.set(B,o,r,g),this}let iA=Math.sqrt((x-P)*(x-P)+(S-T)*(S-T)+(F-m)*(F-m));return Math.abs(iA)<.001&&(iA=1),this.x=(x-P)/iA,this.y=(S-T)/iA,this.z=(F-m)/iA,this.w=Math.acos((f+J+L-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,g){return this.x=Math.max(t.x,Math.min(g.x,this.x)),this.y=Math.max(t.y,Math.min(g.y,this.y)),this.z=Math.max(t.z,Math.min(g.z,this.z)),this.w=Math.max(t.w,Math.min(g.w,this.w)),this}clampScalar(t,g){return this.x=Math.max(t,Math.min(g,this.x)),this.y=Math.max(t,Math.min(g,this.y)),this.z=Math.max(t,Math.min(g,this.z)),this.w=Math.max(t,Math.min(g,this.w)),this}clampLength(t,g){const B=this.length();return this.divideScalar(B||1).multiplyScalar(Math.max(t,Math.min(g,B)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,g){return this.x+=(t.x-this.x)*g,this.y+=(t.y-this.y)*g,this.z+=(t.z-this.z)*g,this.w+=(t.w-this.w)*g,this}lerpVectors(t,g,B){return this.x=t.x+(g.x-t.x)*B,this.y=t.y+(g.y-t.y)*B,this.z=t.z+(g.z-t.z)*B,this.w=t.w+(g.w-t.w)*B,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,g=0){return this.x=t[g],this.y=t[g+1],this.z=t[g+2],this.w=t[g+3],this}toArray(t=[],g=0){return t[g]=this.x,t[g+1]=this.y,t[g+2]=this.z,t[g+3]=this.w,t}fromBufferAttribute(t,g){return this.x=t.getX(g),this.y=t.getY(g),this.z=t.getZ(g),this.w=t.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yR extends iE{constructor(t=1,g=1,B={}){super(),this.isRenderTarget=!0,this.width=t,this.height=g,this.depth=1,this.scissor=new Og(0,0,t,g),this.scissorTest=!1,this.viewport=new Og(0,0,t,g);const o={width:t,height:g,depth:1};B.encoding!==void 0&&(dQ("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),B.colorSpace=B.encoding===kn?tg:Ln),this.texture=new OI(o,B.mapping,B.wrapS,B.wrapT,B.magFilter,B.minFilter,B.format,B.type,B.anisotropy,B.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=B.generateMipmaps!==void 0?B.generateMipmaps:!1,this.texture.internalFormat=B.internalFormat!==void 0?B.internalFormat:null,this.texture.minFilter=B.minFilter!==void 0?B.minFilter:li,this.depthBuffer=B.depthBuffer!==void 0?B.depthBuffer:!0,this.stencilBuffer=B.stencilBuffer!==void 0?B.stencilBuffer:!1,this.depthTexture=B.depthTexture!==void 0?B.depthTexture:null,this.samples=B.samples!==void 0?B.samples:0}setSize(t,g,B=1){(this.width!==t||this.height!==g||this.depth!==B)&&(this.width=t,this.height=g,this.depth=B,this.texture.image.width=t,this.texture.image.height=g,this.texture.image.depth=B,this.dispose()),this.viewport.set(0,0,t,g),this.scissor.set(0,0,t,g)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},t.texture.image);return this.texture.source=new CD(g),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends yR{constructor(t=1,g=1,B={}){super(t,g,B),this.isWebGLRenderTarget=!0}}class nD extends OI{constructor(t=null,g=1,B=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:g,height:B,depth:o},this.magFilter=KI,this.minFilter=KI,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MR extends OI{constructor(t=null,g=1,B=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:g,height:B,depth:o},this.magFilter=KI,this.minFilter=KI,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HC{constructor(t=0,g=0,B=0,o=1){this.isQuaternion=!0,this._x=t,this._y=g,this._z=B,this._w=o}static slerpFlat(t,g,B,o,r,h,a){let D=B[o+0],f=B[o+1],m=B[o+2],S=B[o+3];const F=r[h+0],J=r[h+1],P=r[h+2],T=r[h+3];if(a===0){t[g+0]=D,t[g+1]=f,t[g+2]=m,t[g+3]=S;return}if(a===1){t[g+0]=F,t[g+1]=J,t[g+2]=P,t[g+3]=T;return}if(S!==T||D!==F||f!==J||m!==P){let x=1-a;const L=D*F+f*J+m*P+S*T,iA=L>=0?1:-1,j=1-L*L;if(j>Number.EPSILON){const dA=Math.sqrt(j),fA=Math.atan2(dA,L*iA);x=Math.sin(x*fA)/dA,a=Math.sin(a*fA)/dA}const gA=a*iA;if(D=D*x+F*gA,f=f*x+J*gA,m=m*x+P*gA,S=S*x+T*gA,x===1-a){const dA=1/Math.sqrt(D*D+f*f+m*m+S*S);D*=dA,f*=dA,m*=dA,S*=dA}}t[g]=D,t[g+1]=f,t[g+2]=m,t[g+3]=S}static multiplyQuaternionsFlat(t,g,B,o,r,h){const a=B[o],D=B[o+1],f=B[o+2],m=B[o+3],S=r[h],F=r[h+1],J=r[h+2],P=r[h+3];return t[g]=a*P+m*S+D*J-f*F,t[g+1]=D*P+m*F+f*S-a*J,t[g+2]=f*P+m*J+a*F-D*S,t[g+3]=m*P-a*S-D*F-f*J,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,g,B,o){return this._x=t,this._y=g,this._z=B,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,g){const B=t._x,o=t._y,r=t._z,h=t._order,a=Math.cos,D=Math.sin,f=a(B/2),m=a(o/2),S=a(r/2),F=D(B/2),J=D(o/2),P=D(r/2);switch(h){case"XYZ":this._x=F*m*S+f*J*P,this._y=f*J*S-F*m*P,this._z=f*m*P+F*J*S,this._w=f*m*S-F*J*P;break;case"YXZ":this._x=F*m*S+f*J*P,this._y=f*J*S-F*m*P,this._z=f*m*P-F*J*S,this._w=f*m*S+F*J*P;break;case"ZXY":this._x=F*m*S-f*J*P,this._y=f*J*S+F*m*P,this._z=f*m*P+F*J*S,this._w=f*m*S-F*J*P;break;case"ZYX":this._x=F*m*S-f*J*P,this._y=f*J*S+F*m*P,this._z=f*m*P-F*J*S,this._w=f*m*S+F*J*P;break;case"YZX":this._x=F*m*S+f*J*P,this._y=f*J*S+F*m*P,this._z=f*m*P-F*J*S,this._w=f*m*S-F*J*P;break;case"XZY":this._x=F*m*S-f*J*P,this._y=f*J*S-F*m*P,this._z=f*m*P+F*J*S,this._w=f*m*S+F*J*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,g){const B=g/2,o=Math.sin(B);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(B),this._onChangeCallback(),this}setFromRotationMatrix(t){const g=t.elements,B=g[0],o=g[4],r=g[8],h=g[1],a=g[5],D=g[9],f=g[2],m=g[6],S=g[10],F=B+a+S;if(F>0){const J=.5/Math.sqrt(F+1);this._w=.25/J,this._x=(m-D)*J,this._y=(r-f)*J,this._z=(h-o)*J}else if(B>a&&B>S){const J=2*Math.sqrt(1+B-a-S);this._w=(m-D)/J,this._x=.25*J,this._y=(o+h)/J,this._z=(r+f)/J}else if(a>S){const J=2*Math.sqrt(1+a-B-S);this._w=(r-f)/J,this._x=(o+h)/J,this._y=.25*J,this._z=(D+m)/J}else{const J=2*Math.sqrt(1+S-B-a);this._w=(h-o)/J,this._x=(r+f)/J,this._y=(D+m)/J,this._z=.25*J}return this._onChangeCallback(),this}setFromUnitVectors(t,g){let B=t.dot(g)+1;return B<Number.EPSILON?(B=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=B):(this._x=0,this._y=-t.z,this._z=t.y,this._w=B)):(this._x=t.y*g.z-t.z*g.y,this._y=t.z*g.x-t.x*g.z,this._z=t.x*g.y-t.y*g.x,this._w=B),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($I(this.dot(t),-1,1)))}rotateTowards(t,g){const B=this.angleTo(t);if(B===0)return this;const o=Math.min(1,g/B);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,g){const B=t._x,o=t._y,r=t._z,h=t._w,a=g._x,D=g._y,f=g._z,m=g._w;return this._x=B*m+h*a+o*f-r*D,this._y=o*m+h*D+r*a-B*f,this._z=r*m+h*f+B*D-o*a,this._w=h*m-B*a-o*D-r*f,this._onChangeCallback(),this}slerp(t,g){if(g===0)return this;if(g===1)return this.copy(t);const B=this._x,o=this._y,r=this._z,h=this._w;let a=h*t._w+B*t._x+o*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=h,this._x=B,this._y=o,this._z=r,this;const D=1-a*a;if(D<=Number.EPSILON){const J=1-g;return this._w=J*h+g*this._w,this._x=J*B+g*this._x,this._y=J*o+g*this._y,this._z=J*r+g*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(D),m=Math.atan2(f,a),S=Math.sin((1-g)*m)/f,F=Math.sin(g*m)/f;return this._w=h*S+this._w*F,this._x=B*S+this._x*F,this._y=o*S+this._y*F,this._z=r*S+this._z*F,this._onChangeCallback(),this}slerpQuaternions(t,g,B){return this.copy(t).slerp(g,B)}random(){const t=Math.random(),g=Math.sqrt(1-t),B=Math.sqrt(t),o=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(g*Math.cos(o),B*Math.sin(r),B*Math.cos(r),g*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,g=0){return this._x=t[g],this._y=t[g+1],this._z=t[g+2],this._w=t[g+3],this._onChangeCallback(),this}toArray(t=[],g=0){return t[g]=this._x,t[g+1]=this._y,t[g+2]=this._z,t[g+3]=this._w,t}fromBufferAttribute(t,g){return this._x=t.getX(g),this._y=t.getY(g),this._z=t.getZ(g),this._w=t.getW(g),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class bA{constructor(t=0,g=0,B=0){bA.prototype.isVector3=!0,this.x=t,this.y=g,this.z=B}set(t,g,B){return B===void 0&&(B=this.z),this.x=t,this.y=g,this.z=B,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,g){switch(t){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,g){return this.x=t.x+g.x,this.y=t.y+g.y,this.z=t.z+g.z,this}addScaledVector(t,g){return this.x+=t.x*g,this.y+=t.y*g,this.z+=t.z*g,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,g){return this.x=t.x-g.x,this.y=t.y-g.y,this.z=t.z-g.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,g){return this.x=t.x*g.x,this.y=t.y*g.y,this.z=t.z*g.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,g){return this.applyQuaternion(xd.setFromAxisAngle(t,g))}applyMatrix3(t){const g=this.x,B=this.y,o=this.z,r=t.elements;return this.x=r[0]*g+r[3]*B+r[6]*o,this.y=r[1]*g+r[4]*B+r[7]*o,this.z=r[2]*g+r[5]*B+r[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const g=this.x,B=this.y,o=this.z,r=t.elements,h=1/(r[3]*g+r[7]*B+r[11]*o+r[15]);return this.x=(r[0]*g+r[4]*B+r[8]*o+r[12])*h,this.y=(r[1]*g+r[5]*B+r[9]*o+r[13])*h,this.z=(r[2]*g+r[6]*B+r[10]*o+r[14])*h,this}applyQuaternion(t){const g=this.x,B=this.y,o=this.z,r=t.x,h=t.y,a=t.z,D=t.w,f=D*g+h*o-a*B,m=D*B+a*g-r*o,S=D*o+r*B-h*g,F=-r*g-h*B-a*o;return this.x=f*D+F*-r+m*-a-S*-h,this.y=m*D+F*-h+S*-r-f*-a,this.z=S*D+F*-a+f*-h-m*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const g=this.x,B=this.y,o=this.z,r=t.elements;return this.x=r[0]*g+r[4]*B+r[8]*o,this.y=r[1]*g+r[5]*B+r[9]*o,this.z=r[2]*g+r[6]*B+r[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,g){return this.x=Math.max(t.x,Math.min(g.x,this.x)),this.y=Math.max(t.y,Math.min(g.y,this.y)),this.z=Math.max(t.z,Math.min(g.z,this.z)),this}clampScalar(t,g){return this.x=Math.max(t,Math.min(g,this.x)),this.y=Math.max(t,Math.min(g,this.y)),this.z=Math.max(t,Math.min(g,this.z)),this}clampLength(t,g){const B=this.length();return this.divideScalar(B||1).multiplyScalar(Math.max(t,Math.min(g,B)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,g){return this.x+=(t.x-this.x)*g,this.y+=(t.y-this.y)*g,this.z+=(t.z-this.z)*g,this}lerpVectors(t,g,B){return this.x=t.x+(g.x-t.x)*B,this.y=t.y+(g.y-t.y)*B,this.z=t.z+(g.z-t.z)*B,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,g){const B=t.x,o=t.y,r=t.z,h=g.x,a=g.y,D=g.z;return this.x=o*D-r*a,this.y=r*h-B*D,this.z=B*a-o*h,this}projectOnVector(t){const g=t.lengthSq();if(g===0)return this.set(0,0,0);const B=t.dot(this)/g;return this.copy(t).multiplyScalar(B)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const g=Math.sqrt(this.lengthSq()*t.lengthSq());if(g===0)return Math.PI/2;const B=this.dot(t)/g;return Math.acos($I(B,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const g=this.x-t.x,B=this.y-t.y,o=this.z-t.z;return g*g+B*B+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,g,B){const o=Math.sin(g)*t;return this.x=o*Math.sin(B),this.y=Math.cos(g)*t,this.z=o*Math.cos(B),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,g,B){return this.x=t*Math.sin(g),this.y=B,this.z=t*Math.cos(g),this}setFromMatrixPosition(t){const g=t.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(t){const g=this.setFromMatrixColumn(t,0).length(),B=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=g,this.y=B,this.z=o,this}setFromMatrixColumn(t,g){return this.fromArray(t.elements,g*4)}setFromMatrix3Column(t,g){return this.fromArray(t.elements,g*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,g=0){return this.x=t[g],this.y=t[g+1],this.z=t[g+2],this}toArray(t=[],g=0){return t[g]=this.x,t[g+1]=this.y,t[g+2]=this.z,t}fromBufferAttribute(t,g){return this.x=t.getX(g),this.y=t.getY(g),this.z=t.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,g=Math.random()*Math.PI*2,B=Math.sqrt(1-t**2);return this.x=B*Math.cos(g),this.y=B*Math.sin(g),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new bA,xd=new HC;class sC{constructor(t=new bA(1/0,1/0,1/0),g=new bA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=g}set(t,g){return this.min.copy(t),this.max.copy(g),this}setFromArray(t){this.makeEmpty();for(let g=0,B=t.length;g<B;g+=3)this.expandByPoint(eC.fromArray(t,g));return this}setFromBufferAttribute(t){this.makeEmpty();for(let g=0,B=t.count;g<B;g++)this.expandByPoint(eC.fromBufferAttribute(t,g));return this}setFromPoints(t){this.makeEmpty();for(let g=0,B=t.length;g<B;g++)this.expandByPoint(t[g]);return this}setFromCenterAndSize(t,g){const B=eC.copy(g).multiplyScalar(.5);return this.min.copy(t).sub(B),this.max.copy(t).add(B),this}setFromObject(t,g=!1){return this.makeEmpty(),this.expandByObject(t,g)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,g=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox),Mo.applyMatrix4(t.matrixWorld),this.union(Mo);else{const o=t.geometry;if(o!==void 0)if(g&&o.attributes!==void 0&&o.attributes.position!==void 0){const r=o.attributes.position;for(let h=0,a=r.count;h<a;h++)eC.fromBufferAttribute(r,h).applyMatrix4(t.matrixWorld),this.expandByPoint(eC)}else o.boundingBox===null&&o.computeBoundingBox(),Mo.copy(o.boundingBox),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const B=t.children;for(let o=0,r=B.length;o<r;o++)this.expandByObject(B[o],g);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,g){return g.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,eC),eC.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let g,B;return t.normal.x>0?(g=t.normal.x*this.min.x,B=t.normal.x*this.max.x):(g=t.normal.x*this.max.x,B=t.normal.x*this.min.x),t.normal.y>0?(g+=t.normal.y*this.min.y,B+=t.normal.y*this.max.y):(g+=t.normal.y*this.max.y,B+=t.normal.y*this.min.y),t.normal.z>0?(g+=t.normal.z*this.min.z,B+=t.normal.z*this.max.z):(g+=t.normal.z*this.max.z,B+=t.normal.z*this.min.z),g<=-t.constant&&B>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(CQ),Ns.subVectors(this.max,CQ),mo.subVectors(t.a,CQ),Ro.subVectors(t.b,CQ),So.subVectors(t.c,CQ),SC.subVectors(Ro,mo),GC.subVectors(So,Ro),pn.subVectors(mo,So);let g=[0,-SC.z,SC.y,0,-GC.z,GC.y,0,-pn.z,pn.y,SC.z,0,-SC.x,GC.z,0,-GC.x,pn.z,0,-pn.x,-SC.y,SC.x,0,-GC.y,GC.x,0,-pn.y,pn.x,0];return!Na(g,mo,Ro,So,Ns)||(g=[1,0,0,0,1,0,0,0,1],!Na(g,mo,Ro,So,Ns))?!1:(Us.crossVectors(SC,GC),g=[Us.x,Us.y,Us.z],Na(g,mo,Ro,So,Ns))}clampPoint(t,g){return g.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,eC).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(eC).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tC),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tC=[new bA,new bA,new bA,new bA,new bA,new bA,new bA,new bA],eC=new bA,Mo=new sC,mo=new bA,Ro=new bA,So=new bA,SC=new bA,GC=new bA,pn=new bA,CQ=new bA,Ns=new bA,Us=new bA,wn=new bA;function Na(E,t,g,B,o){for(let r=0,h=E.length-3;r<=h;r+=3){wn.fromArray(E,r);const a=o.x*Math.abs(wn.x)+o.y*Math.abs(wn.y)+o.z*Math.abs(wn.z),D=t.dot(wn),f=g.dot(wn),m=B.dot(wn);if(Math.max(-Math.max(D,f,m),Math.min(D,f,m))>a)return!1}return!0}const mR=new sC,nQ=new bA,Ua=new bA;class bB{constructor(t=new bA,g=-1){this.center=t,this.radius=g}set(t,g){return this.center.copy(t),this.radius=g,this}setFromPoints(t,g){const B=this.center;g!==void 0?B.copy(g):mR.setFromPoints(t).getCenter(B);let o=0;for(let r=0,h=t.length;r<h;r++)o=Math.max(o,B.distanceToSquared(t[r]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const g=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=g*g}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,g){const B=this.center.distanceToSquared(t);return g.copy(t),B>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nQ.subVectors(t,this.center);const g=nQ.lengthSq();if(g>this.radius*this.radius){const B=Math.sqrt(g),o=(B-this.radius)*.5;this.center.addScaledVector(nQ,o/B),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nQ.copy(t.center).add(Ua)),this.expandByPoint(nQ.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gC=new bA,ka=new bA,ks=new bA,FC=new bA,La=new bA,Ls=new bA,xa=new bA;class or{constructor(t=new bA,g=new bA(0,0,-1)){this.origin=t,this.direction=g}set(t,g){return this.origin.copy(t),this.direction.copy(g),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,g){return g.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gC)),this}closestPointToPoint(t,g){g.subVectors(t,this.origin);const B=g.dot(this.direction);return B<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,B)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const g=gC.subVectors(t,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(t):(gC.copy(this.origin).addScaledVector(this.direction,g),gC.distanceToSquared(t))}distanceSqToSegment(t,g,B,o){ka.copy(t).add(g).multiplyScalar(.5),ks.copy(g).sub(t).normalize(),FC.copy(this.origin).sub(ka);const r=t.distanceTo(g)*.5,h=-this.direction.dot(ks),a=FC.dot(this.direction),D=-FC.dot(ks),f=FC.lengthSq(),m=Math.abs(1-h*h);let S,F,J,P;if(m>0)if(S=h*D-a,F=h*a-D,P=r*m,S>=0)if(F>=-P)if(F<=P){const T=1/m;S*=T,F*=T,J=S*(S+h*F+2*a)+F*(h*S+F+2*D)+f}else F=r,S=Math.max(0,-(h*F+a)),J=-S*S+F*(F+2*D)+f;else F=-r,S=Math.max(0,-(h*F+a)),J=-S*S+F*(F+2*D)+f;else F<=-P?(S=Math.max(0,-(-h*r+a)),F=S>0?-r:Math.min(Math.max(-r,-D),r),J=-S*S+F*(F+2*D)+f):F<=P?(S=0,F=Math.min(Math.max(-r,-D),r),J=F*(F+2*D)+f):(S=Math.max(0,-(h*r+a)),F=S>0?r:Math.min(Math.max(-r,-D),r),J=-S*S+F*(F+2*D)+f);else F=h>0?-r:r,S=Math.max(0,-(h*F+a)),J=-S*S+F*(F+2*D)+f;return B&&B.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(ka).addScaledVector(ks,F),J}intersectSphere(t,g){gC.subVectors(t.center,this.origin);const B=gC.dot(this.direction),o=gC.dot(gC)-B*B,r=t.radius*t.radius;if(o>r)return null;const h=Math.sqrt(r-o),a=B-h,D=B+h;return D<0?null:a<0?this.at(D,g):this.at(a,g)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const g=t.normal.dot(this.direction);if(g===0)return t.distanceToPoint(this.origin)===0?0:null;const B=-(this.origin.dot(t.normal)+t.constant)/g;return B>=0?B:null}intersectPlane(t,g){const B=this.distanceToPlane(t);return B===null?null:this.at(B,g)}intersectsPlane(t){const g=t.distanceToPoint(this.origin);return g===0||t.normal.dot(this.direction)*g<0}intersectBox(t,g){let B,o,r,h,a,D;const f=1/this.direction.x,m=1/this.direction.y,S=1/this.direction.z,F=this.origin;return f>=0?(B=(t.min.x-F.x)*f,o=(t.max.x-F.x)*f):(B=(t.max.x-F.x)*f,o=(t.min.x-F.x)*f),m>=0?(r=(t.min.y-F.y)*m,h=(t.max.y-F.y)*m):(r=(t.max.y-F.y)*m,h=(t.min.y-F.y)*m),B>h||r>o||((r>B||isNaN(B))&&(B=r),(h<o||isNaN(o))&&(o=h),S>=0?(a=(t.min.z-F.z)*S,D=(t.max.z-F.z)*S):(a=(t.max.z-F.z)*S,D=(t.min.z-F.z)*S),B>D||a>o)||((a>B||B!==B)&&(B=a),(D<o||o!==o)&&(o=D),o<0)?null:this.at(B>=0?B:o,g)}intersectsBox(t){return this.intersectBox(t,gC)!==null}intersectTriangle(t,g,B,o,r){La.subVectors(g,t),Ls.subVectors(B,t),xa.crossVectors(La,Ls);let h=this.direction.dot(xa),a;if(h>0){if(o)return null;a=1}else if(h<0)a=-1,h=-h;else return null;FC.subVectors(this.origin,t);const D=a*this.direction.dot(Ls.crossVectors(FC,Ls));if(D<0)return null;const f=a*this.direction.dot(La.cross(FC));if(f<0||D+f>h)return null;const m=-a*FC.dot(xa);return m<0?null:this.at(m/h,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hg{constructor(t,g,B,o,r,h,a,D,f,m,S,F,J,P,T,x){hg.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,g,B,o,r,h,a,D,f,m,S,F,J,P,T,x)}set(t,g,B,o,r,h,a,D,f,m,S,F,J,P,T,x){const L=this.elements;return L[0]=t,L[4]=g,L[8]=B,L[12]=o,L[1]=r,L[5]=h,L[9]=a,L[13]=D,L[2]=f,L[6]=m,L[10]=S,L[14]=F,L[3]=J,L[7]=P,L[11]=T,L[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hg().fromArray(this.elements)}copy(t){const g=this.elements,B=t.elements;return g[0]=B[0],g[1]=B[1],g[2]=B[2],g[3]=B[3],g[4]=B[4],g[5]=B[5],g[6]=B[6],g[7]=B[7],g[8]=B[8],g[9]=B[9],g[10]=B[10],g[11]=B[11],g[12]=B[12],g[13]=B[13],g[14]=B[14],g[15]=B[15],this}copyPosition(t){const g=this.elements,B=t.elements;return g[12]=B[12],g[13]=B[13],g[14]=B[14],this}setFromMatrix3(t){const g=t.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(t,g,B){return t.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),B.setFromMatrixColumn(this,2),this}makeBasis(t,g,B){return this.set(t.x,g.x,B.x,0,t.y,g.y,B.y,0,t.z,g.z,B.z,0,0,0,0,1),this}extractRotation(t){const g=this.elements,B=t.elements,o=1/Go.setFromMatrixColumn(t,0).length(),r=1/Go.setFromMatrixColumn(t,1).length(),h=1/Go.setFromMatrixColumn(t,2).length();return g[0]=B[0]*o,g[1]=B[1]*o,g[2]=B[2]*o,g[3]=0,g[4]=B[4]*r,g[5]=B[5]*r,g[6]=B[6]*r,g[7]=0,g[8]=B[8]*h,g[9]=B[9]*h,g[10]=B[10]*h,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(t){const g=this.elements,B=t.x,o=t.y,r=t.z,h=Math.cos(B),a=Math.sin(B),D=Math.cos(o),f=Math.sin(o),m=Math.cos(r),S=Math.sin(r);if(t.order==="XYZ"){const F=h*m,J=h*S,P=a*m,T=a*S;g[0]=D*m,g[4]=-D*S,g[8]=f,g[1]=J+P*f,g[5]=F-T*f,g[9]=-a*D,g[2]=T-F*f,g[6]=P+J*f,g[10]=h*D}else if(t.order==="YXZ"){const F=D*m,J=D*S,P=f*m,T=f*S;g[0]=F+T*a,g[4]=P*a-J,g[8]=h*f,g[1]=h*S,g[5]=h*m,g[9]=-a,g[2]=J*a-P,g[6]=T+F*a,g[10]=h*D}else if(t.order==="ZXY"){const F=D*m,J=D*S,P=f*m,T=f*S;g[0]=F-T*a,g[4]=-h*S,g[8]=P+J*a,g[1]=J+P*a,g[5]=h*m,g[9]=T-F*a,g[2]=-h*f,g[6]=a,g[10]=h*D}else if(t.order==="ZYX"){const F=h*m,J=h*S,P=a*m,T=a*S;g[0]=D*m,g[4]=P*f-J,g[8]=F*f+T,g[1]=D*S,g[5]=T*f+F,g[9]=J*f-P,g[2]=-f,g[6]=a*D,g[10]=h*D}else if(t.order==="YZX"){const F=h*D,J=h*f,P=a*D,T=a*f;g[0]=D*m,g[4]=T-F*S,g[8]=P*S+J,g[1]=S,g[5]=h*m,g[9]=-a*m,g[2]=-f*m,g[6]=J*S+P,g[10]=F-T*S}else if(t.order==="XZY"){const F=h*D,J=h*f,P=a*D,T=a*f;g[0]=D*m,g[4]=-S,g[8]=f*m,g[1]=F*S+T,g[5]=h*m,g[9]=J*S-P,g[2]=P*S-J,g[6]=a*m,g[10]=T*S+F}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RR,t,SR)}lookAt(t,g,B){const o=this.elements;return ki.subVectors(t,g),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),NC.crossVectors(B,ki),NC.lengthSq()===0&&(Math.abs(B.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),NC.crossVectors(B,ki)),NC.normalize(),xs.crossVectors(ki,NC),o[0]=NC.x,o[4]=xs.x,o[8]=ki.x,o[1]=NC.y,o[5]=xs.y,o[9]=ki.y,o[2]=NC.z,o[6]=xs.z,o[10]=ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,g){const B=t.elements,o=g.elements,r=this.elements,h=B[0],a=B[4],D=B[8],f=B[12],m=B[1],S=B[5],F=B[9],J=B[13],P=B[2],T=B[6],x=B[10],L=B[14],iA=B[3],j=B[7],gA=B[11],dA=B[15],fA=o[0],pA=o[4],YA=o[8],$=o[12],uA=o[1],rt=o[5],Rt=o[9],TA=o[13],$A=o[2],VA=o[6],ft=o[10],it=o[14],nt=o[3],V=o[7],X=o[11],AA=o[15];return r[0]=h*fA+a*uA+D*$A+f*nt,r[4]=h*pA+a*rt+D*VA+f*V,r[8]=h*YA+a*Rt+D*ft+f*X,r[12]=h*$+a*TA+D*it+f*AA,r[1]=m*fA+S*uA+F*$A+J*nt,r[5]=m*pA+S*rt+F*VA+J*V,r[9]=m*YA+S*Rt+F*ft+J*X,r[13]=m*$+S*TA+F*it+J*AA,r[2]=P*fA+T*uA+x*$A+L*nt,r[6]=P*pA+T*rt+x*VA+L*V,r[10]=P*YA+T*Rt+x*ft+L*X,r[14]=P*$+T*TA+x*it+L*AA,r[3]=iA*fA+j*uA+gA*$A+dA*nt,r[7]=iA*pA+j*rt+gA*VA+dA*V,r[11]=iA*YA+j*Rt+gA*ft+dA*X,r[15]=iA*$+j*TA+gA*it+dA*AA,this}multiplyScalar(t){const g=this.elements;return g[0]*=t,g[4]*=t,g[8]*=t,g[12]*=t,g[1]*=t,g[5]*=t,g[9]*=t,g[13]*=t,g[2]*=t,g[6]*=t,g[10]*=t,g[14]*=t,g[3]*=t,g[7]*=t,g[11]*=t,g[15]*=t,this}determinant(){const t=this.elements,g=t[0],B=t[4],o=t[8],r=t[12],h=t[1],a=t[5],D=t[9],f=t[13],m=t[2],S=t[6],F=t[10],J=t[14],P=t[3],T=t[7],x=t[11],L=t[15];return P*(+r*D*S-o*f*S-r*a*F+B*f*F+o*a*J-B*D*J)+T*(+g*D*J-g*f*F+r*h*F-o*h*J+o*f*m-r*D*m)+x*(+g*f*S-g*a*J-r*h*S+B*h*J+r*a*m-B*f*m)+L*(-o*a*m-g*D*S+g*a*F+o*h*S-B*h*F+B*D*m)}transpose(){const t=this.elements;let g;return g=t[1],t[1]=t[4],t[4]=g,g=t[2],t[2]=t[8],t[8]=g,g=t[6],t[6]=t[9],t[9]=g,g=t[3],t[3]=t[12],t[12]=g,g=t[7],t[7]=t[13],t[13]=g,g=t[11],t[11]=t[14],t[14]=g,this}setPosition(t,g,B){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=g,o[14]=B),this}invert(){const t=this.elements,g=t[0],B=t[1],o=t[2],r=t[3],h=t[4],a=t[5],D=t[6],f=t[7],m=t[8],S=t[9],F=t[10],J=t[11],P=t[12],T=t[13],x=t[14],L=t[15],iA=S*x*f-T*F*f+T*D*J-a*x*J-S*D*L+a*F*L,j=P*F*f-m*x*f-P*D*J+h*x*J+m*D*L-h*F*L,gA=m*T*f-P*S*f+P*a*J-h*T*J-m*a*L+h*S*L,dA=P*S*D-m*T*D-P*a*F+h*T*F+m*a*x-h*S*x,fA=g*iA+B*j+o*gA+r*dA;if(fA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const pA=1/fA;return t[0]=iA*pA,t[1]=(T*F*r-S*x*r-T*o*J+B*x*J+S*o*L-B*F*L)*pA,t[2]=(a*x*r-T*D*r+T*o*f-B*x*f-a*o*L+B*D*L)*pA,t[3]=(S*D*r-a*F*r-S*o*f+B*F*f+a*o*J-B*D*J)*pA,t[4]=j*pA,t[5]=(m*x*r-P*F*r+P*o*J-g*x*J-m*o*L+g*F*L)*pA,t[6]=(P*D*r-h*x*r-P*o*f+g*x*f+h*o*L-g*D*L)*pA,t[7]=(h*F*r-m*D*r+m*o*f-g*F*f-h*o*J+g*D*J)*pA,t[8]=gA*pA,t[9]=(P*S*r-m*T*r-P*B*J+g*T*J+m*B*L-g*S*L)*pA,t[10]=(h*T*r-P*a*r+P*B*f-g*T*f-h*B*L+g*a*L)*pA,t[11]=(m*a*r-h*S*r-m*B*f+g*S*f+h*B*J-g*a*J)*pA,t[12]=dA*pA,t[13]=(m*T*o-P*S*o+P*B*F-g*T*F-m*B*x+g*S*x)*pA,t[14]=(P*a*o-h*T*o-P*B*D+g*T*D+h*B*x-g*a*x)*pA,t[15]=(h*S*o-m*a*o+m*B*D-g*S*D-h*B*F+g*a*F)*pA,this}scale(t){const g=this.elements,B=t.x,o=t.y,r=t.z;return g[0]*=B,g[4]*=o,g[8]*=r,g[1]*=B,g[5]*=o,g[9]*=r,g[2]*=B,g[6]*=o,g[10]*=r,g[3]*=B,g[7]*=o,g[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,g=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],B=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(g,B,o))}makeTranslation(t,g,B){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,g,0,0,1,B,0,0,0,1),this}makeRotationX(t){const g=Math.cos(t),B=Math.sin(t);return this.set(1,0,0,0,0,g,-B,0,0,B,g,0,0,0,0,1),this}makeRotationY(t){const g=Math.cos(t),B=Math.sin(t);return this.set(g,0,B,0,0,1,0,0,-B,0,g,0,0,0,0,1),this}makeRotationZ(t){const g=Math.cos(t),B=Math.sin(t);return this.set(g,-B,0,0,B,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,g){const B=Math.cos(g),o=Math.sin(g),r=1-B,h=t.x,a=t.y,D=t.z,f=r*h,m=r*a;return this.set(f*h+B,f*a-o*D,f*D+o*a,0,f*a+o*D,m*a+B,m*D-o*h,0,f*D-o*a,m*D+o*h,r*D*D+B,0,0,0,0,1),this}makeScale(t,g,B){return this.set(t,0,0,0,0,g,0,0,0,0,B,0,0,0,0,1),this}makeShear(t,g,B,o,r,h){return this.set(1,B,r,0,t,1,h,0,g,o,1,0,0,0,0,1),this}compose(t,g,B){const o=this.elements,r=g._x,h=g._y,a=g._z,D=g._w,f=r+r,m=h+h,S=a+a,F=r*f,J=r*m,P=r*S,T=h*m,x=h*S,L=a*S,iA=D*f,j=D*m,gA=D*S,dA=B.x,fA=B.y,pA=B.z;return o[0]=(1-(T+L))*dA,o[1]=(J+gA)*dA,o[2]=(P-j)*dA,o[3]=0,o[4]=(J-gA)*fA,o[5]=(1-(F+L))*fA,o[6]=(x+iA)*fA,o[7]=0,o[8]=(P+j)*pA,o[9]=(x-iA)*pA,o[10]=(1-(F+T))*pA,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,g,B){const o=this.elements;let r=Go.set(o[0],o[1],o[2]).length();const h=Go.set(o[4],o[5],o[6]).length(),a=Go.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),t.x=o[12],t.y=o[13],t.z=o[14],rB.copy(this);const f=1/r,m=1/h,S=1/a;return rB.elements[0]*=f,rB.elements[1]*=f,rB.elements[2]*=f,rB.elements[4]*=m,rB.elements[5]*=m,rB.elements[6]*=m,rB.elements[8]*=S,rB.elements[9]*=S,rB.elements[10]*=S,g.setFromRotationMatrix(rB),B.x=r,B.y=h,B.z=a,this}makePerspective(t,g,B,o,r,h,a=EC){const D=this.elements,f=2*r/(g-t),m=2*r/(B-o),S=(g+t)/(g-t),F=(B+o)/(B-o);let J,P;if(a===EC)J=-(h+r)/(h-r),P=-2*h*r/(h-r);else if(a===Br)J=-h/(h-r),P=-h*r/(h-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return D[0]=f,D[4]=0,D[8]=S,D[12]=0,D[1]=0,D[5]=m,D[9]=F,D[13]=0,D[2]=0,D[6]=0,D[10]=J,D[14]=P,D[3]=0,D[7]=0,D[11]=-1,D[15]=0,this}makeOrthographic(t,g,B,o,r,h,a=EC){const D=this.elements,f=1/(g-t),m=1/(B-o),S=1/(h-r),F=(g+t)*f,J=(B+o)*m;let P,T;if(a===EC)P=(h+r)*S,T=-2*S;else if(a===Br)P=r*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return D[0]=2*f,D[4]=0,D[8]=0,D[12]=-F,D[1]=0,D[5]=2*m,D[9]=0,D[13]=-J,D[2]=0,D[6]=0,D[10]=T,D[14]=-P,D[3]=0,D[7]=0,D[11]=0,D[15]=1,this}equals(t){const g=this.elements,B=t.elements;for(let o=0;o<16;o++)if(g[o]!==B[o])return!1;return!0}fromArray(t,g=0){for(let B=0;B<16;B++)this.elements[B]=t[B+g];return this}toArray(t=[],g=0){const B=this.elements;return t[g]=B[0],t[g+1]=B[1],t[g+2]=B[2],t[g+3]=B[3],t[g+4]=B[4],t[g+5]=B[5],t[g+6]=B[6],t[g+7]=B[7],t[g+8]=B[8],t[g+9]=B[9],t[g+10]=B[10],t[g+11]=B[11],t[g+12]=B[12],t[g+13]=B[13],t[g+14]=B[14],t[g+15]=B[15],t}}const Go=new bA,rB=new hg,RR=new bA(0,0,0),SR=new bA(1,1,1),NC=new bA,xs=new bA,ki=new bA,bd=new hg,Jd=new HC;class Er{constructor(t=0,g=0,B=0,o=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=g,this._z=B,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,g,B,o=this._order){return this._x=t,this._y=g,this._z=B,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,g=this._order,B=!0){const o=t.elements,r=o[0],h=o[4],a=o[8],D=o[1],f=o[5],m=o[9],S=o[2],F=o[6],J=o[10];switch(g){case"XYZ":this._y=Math.asin($I(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,J),this._z=Math.atan2(-h,r)):(this._x=Math.atan2(F,f),this._z=0);break;case"YXZ":this._x=Math.asin(-$I(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,J),this._z=Math.atan2(D,f)):(this._y=Math.atan2(-S,r),this._z=0);break;case"ZXY":this._x=Math.asin($I(F,-1,1)),Math.abs(F)<.9999999?(this._y=Math.atan2(-S,J),this._z=Math.atan2(-h,f)):(this._y=0,this._z=Math.atan2(D,r));break;case"ZYX":this._y=Math.asin(-$I(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(F,J),this._z=Math.atan2(D,r)):(this._x=0,this._z=Math.atan2(-h,f));break;case"YZX":this._z=Math.asin($I(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-S,r)):(this._x=0,this._y=Math.atan2(a,J));break;case"XZY":this._z=Math.asin(-$I(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(F,f),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,J),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,B===!0&&this._onChangeCallback(),this}setFromQuaternion(t,g,B){return bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bd,g,B)}setFromVector3(t,g=this._order){return this.set(t.x,t.y,t.z,g)}reorder(t){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],g=0){return t[g]=this._x,t[g+1]=this._y,t[g+2]=this._z,t[g+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class oD{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GR=0;const Kd=new bA,Fo=new HC,IC=new hg,bs=new bA,oQ=new bA,FR=new bA,NR=new HC,Yd=new bA(1,0,0),vd=new bA(0,1,0),Hd=new bA(0,0,1),UR={type:"added"},Td={type:"removed"};class iI extends iE{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=dB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=iI.DEFAULT_UP.clone();const t=new bA,g=new Er,B=new HC,o=new bA(1,1,1);function r(){B.setFromEuler(g,!1)}function h(){g.setFromQuaternion(B,void 0,!1)}g._onChange(r),B._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:B},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hg},normalMatrix:{value:new ag}}),this.matrix=new hg,this.matrixWorld=new hg,this.matrixAutoUpdate=iI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new oD,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,g){this.quaternion.setFromAxisAngle(t,g)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,g){return Fo.setFromAxisAngle(t,g),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(t,g){return Fo.setFromAxisAngle(t,g),this.quaternion.premultiply(Fo),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(vd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,g){return Kd.copy(t).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(g)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(vd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(IC.copy(this.matrixWorld).invert())}lookAt(t,g,B){t.isVector3?bs.copy(t):bs.set(t,g,B);const o=this.parent;this.updateWorldMatrix(!0,!1),oQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?IC.lookAt(oQ,bs,this.up):IC.lookAt(bs,oQ,this.up),this.quaternion.setFromRotationMatrix(IC),o&&(IC.extractRotation(o.matrixWorld),Fo.setFromRotationMatrix(IC),this.quaternion.premultiply(Fo.invert()))}add(t){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(UR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let B=0;B<arguments.length;B++)this.remove(arguments[B]);return this}const g=this.children.indexOf(t);return g!==-1&&(t.parent=null,this.children.splice(g,1),t.dispatchEvent(Td)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const g=this.children[t];g.parent=null,g.dispatchEvent(Td)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),IC.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),IC.multiply(t.parent.matrixWorld)),t.applyMatrix4(IC),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,g){if(this[t]===g)return this;for(let B=0,o=this.children.length;B<o;B++){const h=this.children[B].getObjectByProperty(t,g);if(h!==void 0)return h}}getObjectsByProperty(t,g){let B=[];this[t]===g&&B.push(this);for(let o=0,r=this.children.length;o<r;o++){const h=this.children[o].getObjectsByProperty(t,g);h.length>0&&(B=B.concat(h))}return B}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oQ,t,FR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oQ,NR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return t.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(t){t(this);const g=this.children;for(let B=0,o=g.length;B<o;B++)g[B].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const g=this.children;for(let B=0,o=g.length;B<o;B++)g[B].traverseVisible(t)}traverseAncestors(t){const g=this.parent;g!==null&&(t(g),g.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const g=this.children;for(let B=0,o=g.length;B<o;B++){const r=g[B];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,g){const B=this.parent;if(t===!0&&B!==null&&B.matrixWorldAutoUpdate===!0&&B.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const o=this.children;for(let r=0,h=o.length;r<h;r++){const a=o[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const g=t===void 0||typeof t=="string",B={};g&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},B.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function r(a,D){return a[D.uuid]===void 0&&(a[D.uuid]=D.toJSON(t)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const D=a.shapes;if(Array.isArray(D))for(let f=0,m=D.length;f<m;f++){const S=D[f];r(t.shapes,S)}else r(t.shapes,D)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let D=0,f=this.material.length;D<f;D++)a.push(r(t.materials,this.material[D]));o.material=a}else o.material=r(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const D=this.animations[a];o.animations.push(r(t.animations,D))}}if(g){const a=h(t.geometries),D=h(t.materials),f=h(t.textures),m=h(t.images),S=h(t.shapes),F=h(t.skeletons),J=h(t.animations),P=h(t.nodes);a.length>0&&(B.geometries=a),D.length>0&&(B.materials=D),f.length>0&&(B.textures=f),m.length>0&&(B.images=m),S.length>0&&(B.shapes=S),F.length>0&&(B.skeletons=F),J.length>0&&(B.animations=J),P.length>0&&(B.nodes=P)}return B.object=o,B;function h(a){const D=[];for(const f in a){const m=a[f];delete m.metadata,D.push(m)}return D}}clone(t){return new this.constructor().copy(this,t)}copy(t,g=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),g===!0)for(let B=0;B<t.children.length;B++){const o=t.children[B];this.add(o.clone())}return this}}iI.DEFAULT_UP=new bA(0,1,0);iI.DEFAULT_MATRIX_AUTO_UPDATE=!0;iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const aB=new bA,iC=new bA,ba=new bA,BC=new bA,No=new bA,Uo=new bA,qd=new bA,Ja=new bA,Ka=new bA,Ya=new bA;let Js=!1;class cB{constructor(t=new bA,g=new bA,B=new bA){this.a=t,this.b=g,this.c=B}static getNormal(t,g,B,o){o.subVectors(B,g),aB.subVectors(t,g),o.cross(aB);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(t,g,B,o,r){aB.subVectors(o,g),iC.subVectors(B,g),ba.subVectors(t,g);const h=aB.dot(aB),a=aB.dot(iC),D=aB.dot(ba),f=iC.dot(iC),m=iC.dot(ba),S=h*f-a*a;if(S===0)return r.set(-2,-1,-1);const F=1/S,J=(f*D-a*m)*F,P=(h*m-a*D)*F;return r.set(1-J-P,P,J)}static containsPoint(t,g,B,o){return this.getBarycoord(t,g,B,o,BC),BC.x>=0&&BC.y>=0&&BC.x+BC.y<=1}static getUV(t,g,B,o,r,h,a,D){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),this.getInterpolation(t,g,B,o,r,h,a,D)}static getInterpolation(t,g,B,o,r,h,a,D){return this.getBarycoord(t,g,B,o,BC),D.setScalar(0),D.addScaledVector(r,BC.x),D.addScaledVector(h,BC.y),D.addScaledVector(a,BC.z),D}static isFrontFacing(t,g,B,o){return aB.subVectors(B,g),iC.subVectors(t,g),aB.cross(iC).dot(o)<0}set(t,g,B){return this.a.copy(t),this.b.copy(g),this.c.copy(B),this}setFromPointsAndIndices(t,g,B,o){return this.a.copy(t[g]),this.b.copy(t[B]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,g,B,o){return this.a.fromBufferAttribute(t,g),this.b.fromBufferAttribute(t,B),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return aB.subVectors(this.c,this.b),iC.subVectors(this.a,this.b),aB.cross(iC).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cB.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,g){return cB.getBarycoord(t,this.a,this.b,this.c,g)}getUV(t,g,B,o,r){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),cB.getInterpolation(t,this.a,this.b,this.c,g,B,o,r)}getInterpolation(t,g,B,o,r){return cB.getInterpolation(t,this.a,this.b,this.c,g,B,o,r)}containsPoint(t){return cB.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cB.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,g){const B=this.a,o=this.b,r=this.c;let h,a;No.subVectors(o,B),Uo.subVectors(r,B),Ja.subVectors(t,B);const D=No.dot(Ja),f=Uo.dot(Ja);if(D<=0&&f<=0)return g.copy(B);Ka.subVectors(t,o);const m=No.dot(Ka),S=Uo.dot(Ka);if(m>=0&&S<=m)return g.copy(o);const F=D*S-m*f;if(F<=0&&D>=0&&m<=0)return h=D/(D-m),g.copy(B).addScaledVector(No,h);Ya.subVectors(t,r);const J=No.dot(Ya),P=Uo.dot(Ya);if(P>=0&&J<=P)return g.copy(r);const T=J*f-D*P;if(T<=0&&f>=0&&P<=0)return a=f/(f-P),g.copy(B).addScaledVector(Uo,a);const x=m*P-J*S;if(x<=0&&S-m>=0&&J-P>=0)return qd.subVectors(r,o),a=(S-m)/(S-m+(J-P)),g.copy(o).addScaledVector(qd,a);const L=1/(x+T+F);return h=T*L,a=F*L,g.copy(B).addScaledVector(No,h).addScaledVector(Uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kR=0;class uB extends iE{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=dB(),this.name="",this.type="Material",this.blending=_o,this.side=QC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=Wu,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const g in t){const B=t[g];if(B===void 0){console.warn(`THREE.Material: parameter '${g}' has value of undefined.`);continue}const o=this[g];if(o===void 0){console.warn(`THREE.Material: '${g}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(B):o&&o.isVector3&&B&&B.isVector3?o.copy(B):this[g]=B}}toJSON(t){const g=t===void 0||typeof t=="string";g&&(t={textures:{},images:{}});const B={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.color&&this.color.isColor&&(B.color=this.color.getHex()),this.roughness!==void 0&&(B.roughness=this.roughness),this.metalness!==void 0&&(B.metalness=this.metalness),this.sheen!==void 0&&(B.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(B.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(B.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(B.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(B.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(B.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(B.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(B.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(B.shininess=this.shininess),this.clearcoat!==void 0&&(B.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(B.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(B.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(B.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(B.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,B.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(B.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(B.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(B.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(B.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(B.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(B.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(B.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(B.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(B.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(B.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(B.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(B.lightMap=this.lightMap.toJSON(t).uuid,B.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(B.aoMap=this.aoMap.toJSON(t).uuid,B.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(B.bumpMap=this.bumpMap.toJSON(t).uuid,B.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(B.normalMap=this.normalMap.toJSON(t).uuid,B.normalMapType=this.normalMapType,B.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(B.displacementMap=this.displacementMap.toJSON(t).uuid,B.displacementScale=this.displacementScale,B.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(B.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(B.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(B.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(B.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(B.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(B.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(B.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(B.combine=this.combine)),this.envMapIntensity!==void 0&&(B.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(B.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(B.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(B.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(B.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(B.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(B.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(B.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(B.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(B.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(B.size=this.size),this.shadowSide!==null&&(B.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(B.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(B.blending=this.blending),this.side!==QC&&(B.side=this.side),this.vertexColors&&(B.vertexColors=!0),this.opacity<1&&(B.opacity=this.opacity),this.transparent===!0&&(B.transparent=this.transparent),B.depthFunc=this.depthFunc,B.depthTest=this.depthTest,B.depthWrite=this.depthWrite,B.colorWrite=this.colorWrite,B.stencilWrite=this.stencilWrite,B.stencilWriteMask=this.stencilWriteMask,B.stencilFunc=this.stencilFunc,B.stencilRef=this.stencilRef,B.stencilFuncMask=this.stencilFuncMask,B.stencilFail=this.stencilFail,B.stencilZFail=this.stencilZFail,B.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(B.rotation=this.rotation),this.polygonOffset===!0&&(B.polygonOffset=!0),this.polygonOffsetFactor!==0&&(B.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(B.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(B.linewidth=this.linewidth),this.dashSize!==void 0&&(B.dashSize=this.dashSize),this.gapSize!==void 0&&(B.gapSize=this.gapSize),this.scale!==void 0&&(B.scale=this.scale),this.dithering===!0&&(B.dithering=!0),this.alphaTest>0&&(B.alphaTest=this.alphaTest),this.alphaHash===!0&&(B.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(B.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(B.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(B.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(B.wireframe=this.wireframe),this.wireframeLinewidth>1&&(B.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(B.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(B.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(B.flatShading=this.flatShading),this.visible===!1&&(B.visible=!1),this.toneMapped===!1&&(B.toneMapped=!1),this.fog===!1&&(B.fog=!1),Object.keys(this.userData).length>0&&(B.userData=this.userData);function o(r){const h=[];for(const a in r){const D=r[a];delete D.metadata,h.push(D)}return h}if(g){const r=o(t.textures),h=o(t.images);r.length>0&&(B.textures=r),h.length>0&&(B.images=h)}return B}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const g=t.clippingPlanes;let B=null;if(g!==null){const o=g.length;B=new Array(o);for(let r=0;r!==o;++r)B[r]=g[r].clone()}return this.clippingPlanes=B,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ED={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hB={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function va(E,t,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?E+(t-E)*6*g:g<1/2?t:g<2/3?E+(t-E)*6*(2/3-g):E}class Cg{constructor(t,g,B){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,g,B)}set(t,g,B){if(g===void 0&&B===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,g,B);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,g=tg){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,sB.toWorkingColorSpace(this,g),this}setRGB(t,g,B,o=sB.workingColorSpace){return this.r=t,this.g=g,this.b=B,sB.toWorkingColorSpace(this,o),this}setHSL(t,g,B,o=sB.workingColorSpace){if(t=dh(t,1),g=$I(g,0,1),B=$I(B,0,1),g===0)this.r=this.g=this.b=B;else{const r=B<=.5?B*(1+g):B+g-B*g,h=2*B-r;this.r=va(h,r,t+1/3),this.g=va(h,r,t),this.b=va(h,r,t-1/3)}return sB.toWorkingColorSpace(this,o),this}setStyle(t,g=tg){function B(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const h=o[1],a=o[2];switch(h){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return B(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,g);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return B(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,g);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return B(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,g);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=o[1],h=r.length;if(h===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,g);if(h===6)return this.setHex(parseInt(r,16),g);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,g);return this}setColorName(t,g=tg){const B=ED[t.toLowerCase()];return B!==void 0?this.setHex(B,g):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wo(t.r),this.g=Wo(t.g),this.b=Wo(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tg){return sB.fromWorkingColorSpace(jI.copy(this),t),Math.round($I(jI.r*255,0,255))*65536+Math.round($I(jI.g*255,0,255))*256+Math.round($I(jI.b*255,0,255))}getHexString(t=tg){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,g=sB.workingColorSpace){sB.fromWorkingColorSpace(jI.copy(this),g);const B=jI.r,o=jI.g,r=jI.b,h=Math.max(B,o,r),a=Math.min(B,o,r);let D,f;const m=(a+h)/2;if(a===h)D=0,f=0;else{const S=h-a;switch(f=m<=.5?S/(h+a):S/(2-h-a),h){case B:D=(o-r)/S+(o<r?6:0);break;case o:D=(r-B)/S+2;break;case r:D=(B-o)/S+4;break}D/=6}return t.h=D,t.s=f,t.l=m,t}getRGB(t,g=sB.workingColorSpace){return sB.fromWorkingColorSpace(jI.copy(this),g),t.r=jI.r,t.g=jI.g,t.b=jI.b,t}getStyle(t=tg){sB.fromWorkingColorSpace(jI.copy(this),t);const g=jI.r,B=jI.g,o=jI.b;return t!==tg?`color(${t} ${g.toFixed(3)} ${B.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(g*255)},${Math.round(B*255)},${Math.round(o*255)})`}offsetHSL(t,g,B){return this.getHSL(hB),hB.h+=t,hB.s+=g,hB.l+=B,this.setHSL(hB.h,hB.s,hB.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,g){return this.r=t.r+g.r,this.g=t.g+g.g,this.b=t.b+g.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,g){return this.r+=(t.r-this.r)*g,this.g+=(t.g-this.g)*g,this.b+=(t.b-this.b)*g,this}lerpColors(t,g,B){return this.r=t.r+(g.r-t.r)*B,this.g=t.g+(g.g-t.g)*B,this.b=t.b+(g.b-t.b)*B,this}lerpHSL(t,g){this.getHSL(hB),t.getHSL(Ks);const B=lQ(hB.h,Ks.h,g),o=lQ(hB.s,Ks.s,g),r=lQ(hB.l,Ks.l,g);return this.setHSL(B,o,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const g=this.r,B=this.g,o=this.b,r=t.elements;return this.r=r[0]*g+r[3]*B+r[6]*o,this.g=r[1]*g+r[4]*B+r[7]*o,this.b=r[2]*g+r[5]*B+r[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,g=0){return this.r=t[g],this.g=t[g+1],this.b=t[g+2],this}toArray(t=[],g=0){return t[g]=this.r,t[g+1]=this.g,t[g+2]=this.b,t}fromBufferAttribute(t,g){return this.r=t.getX(g),this.g=t.getY(g),this.b=t.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jI=new Cg;Cg.NAMES=ED;class Fn extends uB{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Cg(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pI=new bA,Ys=new Mg;class si{constructor(t,g,B=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=g,this.count=t!==void 0?t.length/g:0,this.normalized=B,this.usage=Ch,this.updateRange={offset:0,count:-1},this.gpuType=oC,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,g,B){t*=this.itemSize,B*=g.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[t+o]=g.array[B+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let g=0,B=this.count;g<B;g++)Ys.fromBufferAttribute(this,g),Ys.applyMatrix3(t),this.setXY(g,Ys.x,Ys.y);else if(this.itemSize===3)for(let g=0,B=this.count;g<B;g++)pI.fromBufferAttribute(this,g),pI.applyMatrix3(t),this.setXYZ(g,pI.x,pI.y,pI.z);return this}applyMatrix4(t){for(let g=0,B=this.count;g<B;g++)pI.fromBufferAttribute(this,g),pI.applyMatrix4(t),this.setXYZ(g,pI.x,pI.y,pI.z);return this}applyNormalMatrix(t){for(let g=0,B=this.count;g<B;g++)pI.fromBufferAttribute(this,g),pI.applyNormalMatrix(t),this.setXYZ(g,pI.x,pI.y,pI.z);return this}transformDirection(t){for(let g=0,B=this.count;g<B;g++)pI.fromBufferAttribute(this,g),pI.transformDirection(t),this.setXYZ(g,pI.x,pI.y,pI.z);return this}set(t,g=0){return this.array.set(t,g),this}getComponent(t,g){let B=this.array[t*this.itemSize+g];return this.normalized&&(B=LB(B,this.array)),B}setComponent(t,g,B){return this.normalized&&(B=_g(B,this.array)),this.array[t*this.itemSize+g]=B,this}getX(t){let g=this.array[t*this.itemSize];return this.normalized&&(g=LB(g,this.array)),g}setX(t,g){return this.normalized&&(g=_g(g,this.array)),this.array[t*this.itemSize]=g,this}getY(t){let g=this.array[t*this.itemSize+1];return this.normalized&&(g=LB(g,this.array)),g}setY(t,g){return this.normalized&&(g=_g(g,this.array)),this.array[t*this.itemSize+1]=g,this}getZ(t){let g=this.array[t*this.itemSize+2];return this.normalized&&(g=LB(g,this.array)),g}setZ(t,g){return this.normalized&&(g=_g(g,this.array)),this.array[t*this.itemSize+2]=g,this}getW(t){let g=this.array[t*this.itemSize+3];return this.normalized&&(g=LB(g,this.array)),g}setW(t,g){return this.normalized&&(g=_g(g,this.array)),this.array[t*this.itemSize+3]=g,this}setXY(t,g,B){return t*=this.itemSize,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array)),this.array[t+0]=g,this.array[t+1]=B,this}setXYZ(t,g,B,o){return t*=this.itemSize,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array),o=_g(o,this.array)),this.array[t+0]=g,this.array[t+1]=B,this.array[t+2]=o,this}setXYZW(t,g,B,o,r){return t*=this.itemSize,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array),o=_g(o,this.array),r=_g(r,this.array)),this.array[t+0]=g,this.array[t+1]=B,this.array[t+2]=o,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ch&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class QD extends si{constructor(t,g,B){super(new Uint16Array(t),g,B)}}class sD extends si{constructor(t,g,B){super(new Uint32Array(t),g,B)}}class fi extends si{constructor(t,g,B){super(new Float32Array(t),g,B)}}let LR=0;const Ti=new hg,Ha=new iI,ko=new bA,Li=new sC,EQ=new sC,JI=new bA;class Pi extends iE{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=dB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iD(t)?sD:QD)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,g){return this.attributes[t]=g,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,g,B=0){this.groups.push({start:t,count:g,materialIndex:B})}clearGroups(){this.groups=[]}setDrawRange(t,g){this.drawRange.start=t,this.drawRange.count=g}applyMatrix4(t){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(t),g.needsUpdate=!0);const B=this.attributes.normal;if(B!==void 0){const r=new ag().getNormalMatrix(t);B.applyNormalMatrix(r),B.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,g,B){return Ti.makeTranslation(t,g,B),this.applyMatrix4(Ti),this}scale(t,g,B){return Ti.makeScale(t,g,B),this.applyMatrix4(Ti),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){const g=[];for(let B=0,o=t.length;B<o;B++){const r=t[B];g.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fi(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sC);const t=this.attributes.position,g=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new bA(-1/0,-1/0,-1/0),new bA(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),g)for(let B=0,o=g.length;B<o;B++){const r=g[B];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(JI.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(JI),JI.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(JI)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bB);const t=this.attributes.position,g=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new bA,1/0);return}if(t){const B=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),g)for(let r=0,h=g.length;r<h;r++){const a=g[r];EQ.setFromBufferAttribute(a),this.morphTargetsRelative?(JI.addVectors(Li.min,EQ.min),Li.expandByPoint(JI),JI.addVectors(Li.max,EQ.max),Li.expandByPoint(JI)):(Li.expandByPoint(EQ.min),Li.expandByPoint(EQ.max))}Li.getCenter(B);let o=0;for(let r=0,h=t.count;r<h;r++)JI.fromBufferAttribute(t,r),o=Math.max(o,B.distanceToSquared(JI));if(g)for(let r=0,h=g.length;r<h;r++){const a=g[r],D=this.morphTargetsRelative;for(let f=0,m=a.count;f<m;f++)JI.fromBufferAttribute(a,f),D&&(ko.fromBufferAttribute(t,f),JI.add(ko)),o=Math.max(o,B.distanceToSquared(JI))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,g=this.attributes;if(t===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const B=t.array,o=g.position.array,r=g.normal.array,h=g.uv.array,a=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a),4));const D=this.getAttribute("tangent").array,f=[],m=[];for(let uA=0;uA<a;uA++)f[uA]=new bA,m[uA]=new bA;const S=new bA,F=new bA,J=new bA,P=new Mg,T=new Mg,x=new Mg,L=new bA,iA=new bA;function j(uA,rt,Rt){S.fromArray(o,uA*3),F.fromArray(o,rt*3),J.fromArray(o,Rt*3),P.fromArray(h,uA*2),T.fromArray(h,rt*2),x.fromArray(h,Rt*2),F.sub(S),J.sub(S),T.sub(P),x.sub(P);const TA=1/(T.x*x.y-x.x*T.y);isFinite(TA)&&(L.copy(F).multiplyScalar(x.y).addScaledVector(J,-T.y).multiplyScalar(TA),iA.copy(J).multiplyScalar(T.x).addScaledVector(F,-x.x).multiplyScalar(TA),f[uA].add(L),f[rt].add(L),f[Rt].add(L),m[uA].add(iA),m[rt].add(iA),m[Rt].add(iA))}let gA=this.groups;gA.length===0&&(gA=[{start:0,count:B.length}]);for(let uA=0,rt=gA.length;uA<rt;++uA){const Rt=gA[uA],TA=Rt.start,$A=Rt.count;for(let VA=TA,ft=TA+$A;VA<ft;VA+=3)j(B[VA+0],B[VA+1],B[VA+2])}const dA=new bA,fA=new bA,pA=new bA,YA=new bA;function $(uA){pA.fromArray(r,uA*3),YA.copy(pA);const rt=f[uA];dA.copy(rt),dA.sub(pA.multiplyScalar(pA.dot(rt))).normalize(),fA.crossVectors(YA,rt);const TA=fA.dot(m[uA])<0?-1:1;D[uA*4]=dA.x,D[uA*4+1]=dA.y,D[uA*4+2]=dA.z,D[uA*4+3]=TA}for(let uA=0,rt=gA.length;uA<rt;++uA){const Rt=gA[uA],TA=Rt.start,$A=Rt.count;for(let VA=TA,ft=TA+$A;VA<ft;VA+=3)$(B[VA+0]),$(B[VA+1]),$(B[VA+2])}}computeVertexNormals(){const t=this.index,g=this.getAttribute("position");if(g!==void 0){let B=this.getAttribute("normal");if(B===void 0)B=new si(new Float32Array(g.count*3),3),this.setAttribute("normal",B);else for(let F=0,J=B.count;F<J;F++)B.setXYZ(F,0,0,0);const o=new bA,r=new bA,h=new bA,a=new bA,D=new bA,f=new bA,m=new bA,S=new bA;if(t)for(let F=0,J=t.count;F<J;F+=3){const P=t.getX(F+0),T=t.getX(F+1),x=t.getX(F+2);o.fromBufferAttribute(g,P),r.fromBufferAttribute(g,T),h.fromBufferAttribute(g,x),m.subVectors(h,r),S.subVectors(o,r),m.cross(S),a.fromBufferAttribute(B,P),D.fromBufferAttribute(B,T),f.fromBufferAttribute(B,x),a.add(m),D.add(m),f.add(m),B.setXYZ(P,a.x,a.y,a.z),B.setXYZ(T,D.x,D.y,D.z),B.setXYZ(x,f.x,f.y,f.z)}else for(let F=0,J=g.count;F<J;F+=3)o.fromBufferAttribute(g,F+0),r.fromBufferAttribute(g,F+1),h.fromBufferAttribute(g,F+2),m.subVectors(h,r),S.subVectors(o,r),m.cross(S),B.setXYZ(F+0,m.x,m.y,m.z),B.setXYZ(F+1,m.x,m.y,m.z),B.setXYZ(F+2,m.x,m.y,m.z);this.normalizeNormals(),B.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let g=0,B=t.count;g<B;g++)JI.fromBufferAttribute(t,g),JI.normalize(),t.setXYZ(g,JI.x,JI.y,JI.z)}toNonIndexed(){function t(a,D){const f=a.array,m=a.itemSize,S=a.normalized,F=new f.constructor(D.length*m);let J=0,P=0;for(let T=0,x=D.length;T<x;T++){a.isInterleavedBufferAttribute?J=D[T]*a.data.stride+a.offset:J=D[T]*m;for(let L=0;L<m;L++)F[P++]=f[J++]}return new si(F,m,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new Pi,B=this.index.array,o=this.attributes;for(const a in o){const D=o[a],f=t(D,B);g.setAttribute(a,f)}const r=this.morphAttributes;for(const a in r){const D=[],f=r[a];for(let m=0,S=f.length;m<S;m++){const F=f[m],J=t(F,B);D.push(J)}g.morphAttributes[a]=D}g.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let a=0,D=h.length;a<D;a++){const f=h[a];g.addGroup(f.start,f.count,f.materialIndex)}return g}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const f in D)D[f]!==void 0&&(t[f]=D[f]);return t}t.data={attributes:{}};const g=this.index;g!==null&&(t.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const B=this.attributes;for(const D in B){const f=B[D];t.data.attributes[D]=f.toJSON(t.data)}const o={};let r=!1;for(const D in this.morphAttributes){const f=this.morphAttributes[D],m=[];for(let S=0,F=f.length;S<F;S++){const J=f[S];m.push(J.toJSON(t.data))}m.length>0&&(o[D]=m,r=!0)}r&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=t.name;const B=t.index;B!==null&&this.setIndex(B.clone(g));const o=t.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(g))}const r=t.morphAttributes;for(const f in r){const m=[],S=r[f];for(let F=0,J=S.length;F<J;F++)m.push(S[F].clone(g));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let f=0,m=h.length;f<m;f++){const S=h[f];this.addGroup(S.start,S.count,S.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const D=t.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new hg,yn=new or,vs=new bB,Wd=new bA,Lo=new bA,xo=new bA,bo=new bA,Ta=new bA,Hs=new bA,Ts=new Mg,qs=new Mg,_s=new Mg,Pd=new bA,Od=new bA,Vd=new bA,Ws=new bA,Ps=new bA;class ui extends iI{constructor(t=new Pi,g=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=g,this.updateMorphTargets()}copy(t,g){return super.copy(t,g),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,B=Object.keys(g);if(B.length>0){const o=g[B[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,h=o.length;r<h;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,g){const B=this.geometry,o=B.attributes.position,r=B.morphAttributes.position,h=B.morphTargetsRelative;g.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let D=0,f=r.length;D<f;D++){const m=a[D],S=r[D];m!==0&&(Ta.fromBufferAttribute(S,t),h?Hs.addScaledVector(Ta,m):Hs.addScaledVector(Ta.sub(g),m))}g.add(Hs)}return g}raycast(t,g){const B=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(B.boundingSphere===null&&B.computeBoundingSphere(),vs.copy(B.boundingSphere),vs.applyMatrix4(r),yn.copy(t.ray).recast(t.near),!(vs.containsPoint(yn.origin)===!1&&(yn.intersectSphere(vs,Wd)===null||yn.origin.distanceToSquared(Wd)>(t.far-t.near)**2))&&(_d.copy(r).invert(),yn.copy(t.ray).applyMatrix4(_d),!(B.boundingBox!==null&&yn.intersectsBox(B.boundingBox)===!1)&&this._computeIntersections(t,g,yn)))}_computeIntersections(t,g,B){let o;const r=this.geometry,h=this.material,a=r.index,D=r.attributes.position,f=r.attributes.uv,m=r.attributes.uv1,S=r.attributes.normal,F=r.groups,J=r.drawRange;if(a!==null)if(Array.isArray(h))for(let P=0,T=F.length;P<T;P++){const x=F[P],L=h[x.materialIndex],iA=Math.max(x.start,J.start),j=Math.min(a.count,Math.min(x.start+x.count,J.start+J.count));for(let gA=iA,dA=j;gA<dA;gA+=3){const fA=a.getX(gA),pA=a.getX(gA+1),YA=a.getX(gA+2);o=Os(this,L,t,B,f,m,S,fA,pA,YA),o&&(o.faceIndex=Math.floor(gA/3),o.face.materialIndex=x.materialIndex,g.push(o))}}else{const P=Math.max(0,J.start),T=Math.min(a.count,J.start+J.count);for(let x=P,L=T;x<L;x+=3){const iA=a.getX(x),j=a.getX(x+1),gA=a.getX(x+2);o=Os(this,h,t,B,f,m,S,iA,j,gA),o&&(o.faceIndex=Math.floor(x/3),g.push(o))}}else if(D!==void 0)if(Array.isArray(h))for(let P=0,T=F.length;P<T;P++){const x=F[P],L=h[x.materialIndex],iA=Math.max(x.start,J.start),j=Math.min(D.count,Math.min(x.start+x.count,J.start+J.count));for(let gA=iA,dA=j;gA<dA;gA+=3){const fA=gA,pA=gA+1,YA=gA+2;o=Os(this,L,t,B,f,m,S,fA,pA,YA),o&&(o.faceIndex=Math.floor(gA/3),o.face.materialIndex=x.materialIndex,g.push(o))}}else{const P=Math.max(0,J.start),T=Math.min(D.count,J.start+J.count);for(let x=P,L=T;x<L;x+=3){const iA=x,j=x+1,gA=x+2;o=Os(this,h,t,B,f,m,S,iA,j,gA),o&&(o.faceIndex=Math.floor(x/3),g.push(o))}}}}function xR(E,t,g,B,o,r,h,a){let D;if(t.side===Di?D=B.intersectTriangle(h,r,o,!0,a):D=B.intersectTriangle(o,r,h,t.side===QC,a),D===null)return null;Ps.copy(a),Ps.applyMatrix4(E.matrixWorld);const f=g.ray.origin.distanceTo(Ps);return f<g.near||f>g.far?null:{distance:f,point:Ps.clone(),object:E}}function Os(E,t,g,B,o,r,h,a,D,f){E.getVertexPosition(a,Lo),E.getVertexPosition(D,xo),E.getVertexPosition(f,bo);const m=xR(E,t,g,B,Lo,xo,bo,Ws);if(m){o&&(Ts.fromBufferAttribute(o,a),qs.fromBufferAttribute(o,D),_s.fromBufferAttribute(o,f),m.uv=cB.getInterpolation(Ws,Lo,xo,bo,Ts,qs,_s,new Mg)),r&&(Ts.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,D),_s.fromBufferAttribute(r,f),m.uv1=cB.getInterpolation(Ws,Lo,xo,bo,Ts,qs,_s,new Mg),m.uv2=m.uv1),h&&(Pd.fromBufferAttribute(h,a),Od.fromBufferAttribute(h,D),Vd.fromBufferAttribute(h,f),m.normal=cB.getInterpolation(Ws,Lo,xo,bo,Pd,Od,Vd,new bA),m.normal.dot(B.direction)>0&&m.normal.multiplyScalar(-1));const S={a,b:D,c:f,normal:new bA,materialIndex:0};cB.getNormal(Lo,xo,bo,S.normal),m.face=S}return m}class BE extends Pi{constructor(t=1,g=1,B=1,o=1,r=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:g,depth:B,widthSegments:o,heightSegments:r,depthSegments:h};const a=this;o=Math.floor(o),r=Math.floor(r),h=Math.floor(h);const D=[],f=[],m=[],S=[];let F=0,J=0;P("z","y","x",-1,-1,B,g,t,h,r,0),P("z","y","x",1,-1,B,g,-t,h,r,1),P("x","z","y",1,1,t,B,g,o,h,2),P("x","z","y",1,-1,t,B,-g,o,h,3),P("x","y","z",1,-1,t,g,B,o,r,4),P("x","y","z",-1,-1,t,g,-B,o,r,5),this.setIndex(D),this.setAttribute("position",new fi(f,3)),this.setAttribute("normal",new fi(m,3)),this.setAttribute("uv",new fi(S,2));function P(T,x,L,iA,j,gA,dA,fA,pA,YA,$){const uA=gA/pA,rt=dA/YA,Rt=gA/2,TA=dA/2,$A=fA/2,VA=pA+1,ft=YA+1;let it=0,nt=0;const V=new bA;for(let X=0;X<ft;X++){const AA=X*rt-TA;for(let CA=0;CA<VA;CA++){const kA=CA*uA-Rt;V[T]=kA*iA,V[x]=AA*j,V[L]=$A,f.push(V.x,V.y,V.z),V[T]=0,V[x]=0,V[L]=fA>0?1:-1,m.push(V.x,V.y,V.z),S.push(CA/pA),S.push(1-X/YA),it+=1}}for(let X=0;X<YA;X++)for(let AA=0;AA<pA;AA++){const CA=F+AA+VA*X,kA=F+AA+VA*(X+1),qA=F+(AA+1)+VA*(X+1),gt=F+(AA+1)+VA*X;D.push(CA,kA,gt),D.push(kA,qA,gt),nt+=6}a.addGroup(J,nt,$),J+=nt,F+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new BE(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function AE(E){const t={};for(const g in E){t[g]={};for(const B in E[g]){const o=E[g][B];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[g][B]=null):t[g][B]=o.clone():Array.isArray(o)?t[g][B]=o.slice():t[g][B]=o}}return t}function Qi(E){const t={};for(let g=0;g<E.length;g++){const B=AE(E[g]);for(const o in B)t[o]=B[o]}return t}function bR(E){const t=[];for(let g=0;g<E.length;g++)t.push(E[g].clone());return t}function rD(E){return E.getRenderTarget()===null?E.outputColorSpace:xB}const JR={clone:AE,merge:Qi};var KR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends uB{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KR,this.fragmentShader=YR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=AE(t.uniforms),this.uniformsGroups=bR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const g=super.toJSON(t);g.glslVersion=this.glslVersion,g.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?g.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?g.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?g.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?g.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?g.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?g.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?g.uniforms[o]={type:"m4",value:h.toArray()}:g.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader,g.lights=this.lights,g.clipping=this.clipping;const B={};for(const o in this.extensions)this.extensions[o]===!0&&(B[o]=!0);return Object.keys(B).length>0&&(g.extensions=B),g}}class uh extends iI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hg,this.projectionMatrix=new hg,this.projectionMatrixInverse=new hg,this.coordinateSystem=EC}copy(t,g){return super.copy(t,g),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return t.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,g){super.updateWorldMatrix(t,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class di extends uh{constructor(t=50,g=1,B=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=B,this.far=o,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,g){return super.copy(t,g),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const g=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cQ*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(cQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,g,B,o,r,h){this.aspect=t/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=g,this.view.offsetX=B,this.view.offsetY=o,this.view.width=r,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let g=t*Math.tan(cQ*.5*this.fov)/this.zoom,B=2*g,o=this.aspect*B,r=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const D=h.fullWidth,f=h.fullHeight;r+=h.offsetX*o/D,g-=h.offsetY*B/f,o*=h.width/D,B*=h.height/f}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,g,g-B,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const g=super.toJSON(t);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const Jo=-90,Ko=1;class vR extends iI{constructor(t,g,B){super(),this.type="CubeCamera",this.renderTarget=B,this.coordinateSystem=null;const o=new di(Jo,Ko,t,g);o.layers=this.layers,this.add(o);const r=new di(Jo,Ko,t,g);r.layers=this.layers,this.add(r);const h=new di(Jo,Ko,t,g);h.layers=this.layers,this.add(h);const a=new di(Jo,Ko,t,g);a.layers=this.layers,this.add(a);const D=new di(Jo,Ko,t,g);D.layers=this.layers,this.add(D);const f=new di(Jo,Ko,t,g);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,g=this.children.concat(),[B,o,r,h,a,D]=g;for(const f of g)this.remove(f);if(t===EC)B.up.set(0,1,0),B.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),D.up.set(0,1,0),D.lookAt(0,0,-1);else if(t===Br)B.up.set(0,-1,0),B.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),D.up.set(0,-1,0),D.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of g)this.add(f),f.updateMatrixWorld()}update(t,g){this.parent===null&&this.updateMatrixWorld();const B=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,h,a,D,f]=this.children,m=t.getRenderTarget(),S=t.xr.enabled;t.xr.enabled=!1;const F=B.texture.generateMipmaps;B.texture.generateMipmaps=!1,t.setRenderTarget(B,0),t.render(g,o),t.setRenderTarget(B,1),t.render(g,r),t.setRenderTarget(B,2),t.render(g,h),t.setRenderTarget(B,3),t.render(g,a),t.setRenderTarget(B,4),t.render(g,D),B.texture.generateMipmaps=F,t.setRenderTarget(B,5),t.render(g,f),t.setRenderTarget(m),t.xr.enabled=S,B.texture.needsPMREMUpdate=!0}}class aD extends OI{constructor(t,g,B,o,r,h,a,D,f,m){t=t!==void 0?t:[],g=g!==void 0?g:Vo,super(t,g,B,o,r,h,a,D,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class HR extends bn{constructor(t=1,g={}){super(t,t,g),this.isWebGLCubeRenderTarget=!0;const B={width:t,height:t,depth:1},o=[B,B,B,B,B,B];g.encoding!==void 0&&(dQ("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===kn?tg:Ln),this.texture=new aD(o,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:li}fromEquirectangularTexture(t,g){this.texture.type=g.type,this.texture.colorSpace=g.colorSpace,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const B={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new BE(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:AE(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,side:Di,blending:JC});r.uniforms.tEquirect.value=g;const h=new ui(o,r),a=g.minFilter;return g.minFilter===xn&&(g.minFilter=li),new vR(1,10,this).update(t,h),g.minFilter=a,h.geometry.dispose(),h.material.dispose(),this}clear(t,g,B,o){const r=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(g,B,o);t.setRenderTarget(r)}}const qa=new bA,TR=new bA,qR=new ag;class Rn{constructor(t=new bA(1,0,0),g=0){this.isPlane=!0,this.normal=t,this.constant=g}set(t,g){return this.normal.copy(t),this.constant=g,this}setComponents(t,g,B,o){return this.normal.set(t,g,B),this.constant=o,this}setFromNormalAndCoplanarPoint(t,g){return this.normal.copy(t),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(t,g,B){const o=qa.subVectors(B,g).cross(TR.subVectors(t,g)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,g){return g.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,g){const B=t.delta(qa),o=this.normal.dot(B);if(o===0)return this.distanceToPoint(t.start)===0?g.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:g.copy(t.start).addScaledVector(B,r)}intersectsLine(t){const g=this.distanceToPoint(t.start),B=this.distanceToPoint(t.end);return g<0&&B>0||B<0&&g>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,g){const B=g||qR.getNormalMatrix(t),o=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(B).normalize();return this.constant=-o.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new bB,Vs=new bA;class Dh{constructor(t=new Rn,g=new Rn,B=new Rn,o=new Rn,r=new Rn,h=new Rn){this.planes=[t,g,B,o,r,h]}set(t,g,B,o,r,h){const a=this.planes;return a[0].copy(t),a[1].copy(g),a[2].copy(B),a[3].copy(o),a[4].copy(r),a[5].copy(h),this}copy(t){const g=this.planes;for(let B=0;B<6;B++)g[B].copy(t.planes[B]);return this}setFromProjectionMatrix(t,g=EC){const B=this.planes,o=t.elements,r=o[0],h=o[1],a=o[2],D=o[3],f=o[4],m=o[5],S=o[6],F=o[7],J=o[8],P=o[9],T=o[10],x=o[11],L=o[12],iA=o[13],j=o[14],gA=o[15];if(B[0].setComponents(D-r,F-f,x-J,gA-L).normalize(),B[1].setComponents(D+r,F+f,x+J,gA+L).normalize(),B[2].setComponents(D+h,F+m,x+P,gA+iA).normalize(),B[3].setComponents(D-h,F-m,x-P,gA-iA).normalize(),B[4].setComponents(D-a,F-S,x-T,gA-j).normalize(),g===EC)B[5].setComponents(D+a,F+S,x+T,gA+j).normalize();else if(g===Br)B[5].setComponents(a,S,T,j).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+g);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const g=t.geometry;g.boundingSphere===null&&g.computeBoundingSphere(),Mn.copy(g.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const g=this.planes,B=t.center,o=-t.radius;for(let r=0;r<6;r++)if(g[r].distanceToPoint(B)<o)return!1;return!0}intersectsBox(t){const g=this.planes;for(let B=0;B<6;B++){const o=g[B];if(Vs.x=o.normal.x>0?t.max.x:t.min.x,Vs.y=o.normal.y>0?t.max.y:t.min.y,Vs.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const g=this.planes;for(let B=0;B<6;B++)if(g[B].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hD(){let E=null,t=!1,g=null,B=null;function o(r,h){g(r,h),B=E.requestAnimationFrame(o)}return{start:function(){t!==!0&&g!==null&&(B=E.requestAnimationFrame(o),t=!0)},stop:function(){E.cancelAnimationFrame(B),t=!1},setAnimationLoop:function(r){g=r},setContext:function(r){E=r}}}function _R(E,t){const g=t.isWebGL2,B=new WeakMap;function o(f,m){const S=f.array,F=f.usage,J=E.createBuffer();E.bindBuffer(m,J),E.bufferData(m,S,F),f.onUploadCallback();let P;if(S instanceof Float32Array)P=E.FLOAT;else if(S instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(g)P=E.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else P=E.UNSIGNED_SHORT;else if(S instanceof Int16Array)P=E.SHORT;else if(S instanceof Uint32Array)P=E.UNSIGNED_INT;else if(S instanceof Int32Array)P=E.INT;else if(S instanceof Int8Array)P=E.BYTE;else if(S instanceof Uint8Array)P=E.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)P=E.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:J,type:P,bytesPerElement:S.BYTES_PER_ELEMENT,version:f.version}}function r(f,m,S){const F=m.array,J=m.updateRange;E.bindBuffer(S,f),J.count===-1?E.bufferSubData(S,0,F):(g?E.bufferSubData(S,J.offset*F.BYTES_PER_ELEMENT,F,J.offset,J.count):E.bufferSubData(S,J.offset*F.BYTES_PER_ELEMENT,F.subarray(J.offset,J.offset+J.count)),J.count=-1),m.onUploadCallback()}function h(f){return f.isInterleavedBufferAttribute&&(f=f.data),B.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=B.get(f);m&&(E.deleteBuffer(m.buffer),B.delete(f))}function D(f,m){if(f.isGLBufferAttribute){const F=B.get(f);(!F||F.version<f.version)&&B.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const S=B.get(f);S===void 0?B.set(f,o(f,m)):S.version<f.version&&(r(S.buffer,f,m),S.version=f.version)}return{get:h,remove:a,update:D}}class fh extends Pi{constructor(t=1,g=1,B=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:g,widthSegments:B,heightSegments:o};const r=t/2,h=g/2,a=Math.floor(B),D=Math.floor(o),f=a+1,m=D+1,S=t/a,F=g/D,J=[],P=[],T=[],x=[];for(let L=0;L<m;L++){const iA=L*F-h;for(let j=0;j<f;j++){const gA=j*S-r;P.push(gA,-iA,0),T.push(0,0,1),x.push(j/a),x.push(1-L/D)}}for(let L=0;L<D;L++)for(let iA=0;iA<a;iA++){const j=iA+f*L,gA=iA+f*(L+1),dA=iA+1+f*(L+1),fA=iA+1+f*L;J.push(j,gA,fA),J.push(gA,dA,fA)}this.setIndex(J),this.setAttribute("position",new fi(P,3)),this.setAttribute("normal",new fi(T,3)),this.setAttribute("uv",new fi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fh(t.width,t.height,t.widthSegments,t.heightSegments)}}var WR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PR=`#ifdef USE_ALPHAHASH
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
#endif`,OR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eS=`#ifdef USE_IRIDESCENCE
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
#endif`,gS=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sS=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,aS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
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
}`,NS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,bS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,JS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,TS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,qS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_S=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XS=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$S=`#if defined( USE_POINTS_UV )
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
#endif`,AG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eG=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IG=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,CG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QG=`#ifdef USE_NORMALMAP
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
#endif`,sG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lG=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,dG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,MG=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RG=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GG=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,FG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NG=`#ifdef USE_SKINNING
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
#endif`,UG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xG=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bG=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JG=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qG=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_G=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WG=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VG=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ZG=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,XG=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,zG=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$G=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AF=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tF=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eF=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,gF=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,iF=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,BF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,CF=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oF=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,QF=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rF=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aF=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hF=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cF=`uniform float size;
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
}`,lF=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dF=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,uF=`uniform vec3 color;
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
}`,DF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fF=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,og={alphahash_fragment:WR,alphahash_pars_fragment:PR,alphamap_fragment:OR,alphamap_pars_fragment:VR,alphatest_fragment:ZR,alphatest_pars_fragment:XR,aomap_fragment:zR,aomap_pars_fragment:jR,begin_vertex:$R,beginnormal_vertex:AS,bsdfs:tS,iridescence_fragment:eS,bumpmap_pars_fragment:gS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:iS,clipping_planes_pars_vertex:BS,clipping_planes_vertex:CS,color_fragment:nS,color_pars_fragment:oS,color_pars_vertex:ES,color_vertex:QS,common:sS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:aS,displacementmap_pars_vertex:hS,displacementmap_vertex:cS,emissivemap_fragment:lS,emissivemap_pars_fragment:dS,colorspace_fragment:uS,colorspace_pars_fragment:DS,envmap_fragment:fS,envmap_common_pars_fragment:pS,envmap_pars_fragment:wS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:bS,envmap_vertex:MS,fog_vertex:mS,fog_pars_vertex:RS,fog_fragment:SS,fog_pars_fragment:GS,gradientmap_pars_fragment:FS,lightmap_fragment:NS,lightmap_pars_fragment:US,lights_lambert_fragment:kS,lights_lambert_pars_fragment:LS,lights_pars_begin:xS,lights_toon_fragment:JS,lights_toon_pars_fragment:KS,lights_phong_fragment:YS,lights_phong_pars_fragment:vS,lights_physical_fragment:HS,lights_physical_pars_fragment:TS,lights_fragment_begin:qS,lights_fragment_maps:_S,lights_fragment_end:WS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:VS,logdepthbuf_vertex:ZS,map_fragment:XS,map_pars_fragment:zS,map_particle_fragment:jS,map_particle_pars_fragment:$S,metalnessmap_fragment:AG,metalnessmap_pars_fragment:tG,morphcolor_vertex:eG,morphnormal_vertex:gG,morphtarget_pars_vertex:IG,morphtarget_vertex:iG,normal_fragment_begin:BG,normal_fragment_maps:CG,normal_pars_fragment:nG,normal_pars_vertex:oG,normal_vertex:EG,normalmap_pars_fragment:QG,clearcoat_normal_fragment_begin:sG,clearcoat_normal_fragment_maps:rG,clearcoat_pars_fragment:aG,iridescence_pars_fragment:hG,opaque_fragment:cG,packing:lG,premultiplied_alpha_fragment:dG,project_vertex:uG,dithering_fragment:DG,dithering_pars_fragment:fG,roughnessmap_fragment:pG,roughnessmap_pars_fragment:wG,shadowmap_pars_fragment:yG,shadowmap_pars_vertex:MG,shadowmap_vertex:mG,shadowmask_pars_fragment:RG,skinbase_vertex:SG,skinning_pars_vertex:GG,skinning_vertex:FG,skinnormal_vertex:NG,specularmap_fragment:UG,specularmap_pars_fragment:kG,tonemapping_fragment:LG,tonemapping_pars_fragment:xG,transmission_fragment:bG,transmission_pars_fragment:JG,uv_pars_fragment:KG,uv_pars_vertex:YG,uv_vertex:vG,worldpos_vertex:HG,background_vert:TG,background_frag:qG,backgroundCube_vert:_G,backgroundCube_frag:WG,cube_vert:PG,cube_frag:OG,depth_vert:VG,depth_frag:ZG,distanceRGBA_vert:XG,distanceRGBA_frag:zG,equirect_vert:jG,equirect_frag:$G,linedashed_vert:AF,linedashed_frag:tF,meshbasic_vert:eF,meshbasic_frag:gF,meshlambert_vert:IF,meshlambert_frag:iF,meshmatcap_vert:BF,meshmatcap_frag:CF,meshnormal_vert:nF,meshnormal_frag:oF,meshphong_vert:EF,meshphong_frag:QF,meshphysical_vert:sF,meshphysical_frag:rF,meshtoon_vert:aF,meshtoon_frag:hF,points_vert:cF,points_frag:lF,shadow_vert:dF,shadow_frag:uF,sprite_vert:DF,sprite_frag:fF},ee={common:{diffuse:{value:new Cg(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ag},alphaMap:{value:null},alphaMapTransform:{value:new ag},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ag}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ag}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ag}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ag},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ag},normalScale:{value:new Mg(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ag},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ag}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ag}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ag}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Cg(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Cg(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ag},alphaTest:{value:0},uvTransform:{value:new ag}},sprite:{diffuse:{value:new Cg(16777215)},opacity:{value:1},center:{value:new Mg(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ag},alphaMap:{value:null},alphaMapTransform:{value:new ag},alphaTest:{value:0}}},kB={basic:{uniforms:Qi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:og.meshbasic_vert,fragmentShader:og.meshbasic_frag},lambert:{uniforms:Qi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Cg(0)}}]),vertexShader:og.meshlambert_vert,fragmentShader:og.meshlambert_frag},phong:{uniforms:Qi([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Cg(0)},specular:{value:new Cg(1118481)},shininess:{value:30}}]),vertexShader:og.meshphong_vert,fragmentShader:og.meshphong_frag},standard:{uniforms:Qi([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Cg(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:og.meshphysical_vert,fragmentShader:og.meshphysical_frag},toon:{uniforms:Qi([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Cg(0)}}]),vertexShader:og.meshtoon_vert,fragmentShader:og.meshtoon_frag},matcap:{uniforms:Qi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:og.meshmatcap_vert,fragmentShader:og.meshmatcap_frag},points:{uniforms:Qi([ee.points,ee.fog]),vertexShader:og.points_vert,fragmentShader:og.points_frag},dashed:{uniforms:Qi([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:og.linedashed_vert,fragmentShader:og.linedashed_frag},depth:{uniforms:Qi([ee.common,ee.displacementmap]),vertexShader:og.depth_vert,fragmentShader:og.depth_frag},normal:{uniforms:Qi([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:og.meshnormal_vert,fragmentShader:og.meshnormal_frag},sprite:{uniforms:Qi([ee.sprite,ee.fog]),vertexShader:og.sprite_vert,fragmentShader:og.sprite_frag},background:{uniforms:{uvTransform:{value:new ag},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:og.background_vert,fragmentShader:og.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:og.backgroundCube_vert,fragmentShader:og.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:og.cube_vert,fragmentShader:og.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:og.equirect_vert,fragmentShader:og.equirect_frag},distanceRGBA:{uniforms:Qi([ee.common,ee.displacementmap,{referencePosition:{value:new bA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:og.distanceRGBA_vert,fragmentShader:og.distanceRGBA_frag},shadow:{uniforms:Qi([ee.lights,ee.fog,{color:{value:new Cg(0)},opacity:{value:1}}]),vertexShader:og.shadow_vert,fragmentShader:og.shadow_frag}};kB.physical={uniforms:Qi([kB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ag},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ag},clearcoatNormalScale:{value:new Mg(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ag},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ag},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ag},sheen:{value:0},sheenColor:{value:new Cg(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ag},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ag},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ag},transmissionSamplerSize:{value:new Mg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ag},attenuationDistance:{value:0},attenuationColor:{value:new Cg(0)},specularColor:{value:new Cg(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ag},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ag},anisotropyVector:{value:new Mg},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ag}}]),vertexShader:og.meshphysical_vert,fragmentShader:og.meshphysical_frag};const Zs={r:0,b:0,g:0};function pF(E,t,g,B,o,r,h){const a=new Cg(0);let D=r===!0?0:1,f,m,S=null,F=0,J=null;function P(x,L){let iA=!1,j=L.isScene===!0?L.background:null;switch(j&&j.isTexture&&(j=(L.backgroundBlurriness>0?g:t).get(j)),j===null?T(a,D):j&&j.isColor&&(T(j,1),iA=!0),E.xr.getEnvironmentBlendMode()){case"opaque":iA=!0;break;case"additive":B.buffers.color.setClear(0,0,0,1,h),iA=!0;break;case"alpha-blend":B.buffers.color.setClear(0,0,0,0,h),iA=!0;break}(E.autoClear||iA)&&E.clear(E.autoClearColor,E.autoClearDepth,E.autoClearStencil),j&&(j.isCubeTexture||j.mapping===nr)?(m===void 0&&(m=new ui(new BE(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:AE(kB.backgroundCube.uniforms),vertexShader:kB.backgroundCube.vertexShader,fragmentShader:kB.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(fA,pA,YA){this.matrixWorld.copyPosition(YA.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),m.material.uniforms.envMap.value=j,m.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=j.colorSpace!==tg,(S!==j||F!==j.version||J!==E.toneMapping)&&(m.material.needsUpdate=!0,S=j,F=j.version,J=E.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):j&&j.isTexture&&(f===void 0&&(f=new ui(new fh(2,2),new Jn({name:"BackgroundMaterial",uniforms:AE(kB.background.uniforms),vertexShader:kB.background.vertexShader,fragmentShader:kB.background.fragmentShader,side:QC,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=j,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=j.colorSpace!==tg,j.matrixAutoUpdate===!0&&j.updateMatrix(),f.material.uniforms.uvTransform.value.copy(j.matrix),(S!==j||F!==j.version||J!==E.toneMapping)&&(f.material.needsUpdate=!0,S=j,F=j.version,J=E.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function T(x,L){x.getRGB(Zs,rD(E)),B.buffers.color.setClear(Zs.r,Zs.g,Zs.b,L,h)}return{getClearColor:function(){return a},setClearColor:function(x,L=1){a.set(x),D=L,T(a,D)},getClearAlpha:function(){return D},setClearAlpha:function(x){D=x,T(a,D)},render:P}}function wF(E,t,g,B){const o=E.getParameter(E.MAX_VERTEX_ATTRIBS),r=B.isWebGL2?null:t.get("OES_vertex_array_object"),h=B.isWebGL2||r!==null,a={},D=x(null);let f=D,m=!1;function S($A,VA,ft,it,nt){let V=!1;if(h){const X=T(it,ft,VA);f!==X&&(f=X,J(f.object)),V=L($A,it,ft,nt),V&&iA($A,it,ft,nt)}else{const X=VA.wireframe===!0;(f.geometry!==it.id||f.program!==ft.id||f.wireframe!==X)&&(f.geometry=it.id,f.program=ft.id,f.wireframe=X,V=!0)}nt!==null&&g.update(nt,E.ELEMENT_ARRAY_BUFFER),(V||m)&&(m=!1,YA($A,VA,ft,it),nt!==null&&E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,g.get(nt).buffer))}function F(){return B.isWebGL2?E.createVertexArray():r.createVertexArrayOES()}function J($A){return B.isWebGL2?E.bindVertexArray($A):r.bindVertexArrayOES($A)}function P($A){return B.isWebGL2?E.deleteVertexArray($A):r.deleteVertexArrayOES($A)}function T($A,VA,ft){const it=ft.wireframe===!0;let nt=a[$A.id];nt===void 0&&(nt={},a[$A.id]=nt);let V=nt[VA.id];V===void 0&&(V={},nt[VA.id]=V);let X=V[it];return X===void 0&&(X=x(F()),V[it]=X),X}function x($A){const VA=[],ft=[],it=[];for(let nt=0;nt<o;nt++)VA[nt]=0,ft[nt]=0,it[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:VA,enabledAttributes:ft,attributeDivisors:it,object:$A,attributes:{},index:null}}function L($A,VA,ft,it){const nt=f.attributes,V=VA.attributes;let X=0;const AA=ft.getAttributes();for(const CA in AA)if(AA[CA].location>=0){const qA=nt[CA];let gt=V[CA];if(gt===void 0&&(CA==="instanceMatrix"&&$A.instanceMatrix&&(gt=$A.instanceMatrix),CA==="instanceColor"&&$A.instanceColor&&(gt=$A.instanceColor)),qA===void 0||qA.attribute!==gt||gt&&qA.data!==gt.data)return!0;X++}return f.attributesNum!==X||f.index!==it}function iA($A,VA,ft,it){const nt={},V=VA.attributes;let X=0;const AA=ft.getAttributes();for(const CA in AA)if(AA[CA].location>=0){let qA=V[CA];qA===void 0&&(CA==="instanceMatrix"&&$A.instanceMatrix&&(qA=$A.instanceMatrix),CA==="instanceColor"&&$A.instanceColor&&(qA=$A.instanceColor));const gt={};gt.attribute=qA,qA&&qA.data&&(gt.data=qA.data),nt[CA]=gt,X++}f.attributes=nt,f.attributesNum=X,f.index=it}function j(){const $A=f.newAttributes;for(let VA=0,ft=$A.length;VA<ft;VA++)$A[VA]=0}function gA($A){dA($A,0)}function dA($A,VA){const ft=f.newAttributes,it=f.enabledAttributes,nt=f.attributeDivisors;ft[$A]=1,it[$A]===0&&(E.enableVertexAttribArray($A),it[$A]=1),nt[$A]!==VA&&((B.isWebGL2?E:t.get("ANGLE_instanced_arrays"))[B.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($A,VA),nt[$A]=VA)}function fA(){const $A=f.newAttributes,VA=f.enabledAttributes;for(let ft=0,it=VA.length;ft<it;ft++)VA[ft]!==$A[ft]&&(E.disableVertexAttribArray(ft),VA[ft]=0)}function pA($A,VA,ft,it,nt,V,X){X===!0?E.vertexAttribIPointer($A,VA,ft,nt,V):E.vertexAttribPointer($A,VA,ft,it,nt,V)}function YA($A,VA,ft,it){if(B.isWebGL2===!1&&($A.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;j();const nt=it.attributes,V=ft.getAttributes(),X=VA.defaultAttributeValues;for(const AA in V){const CA=V[AA];if(CA.location>=0){let kA=nt[AA];if(kA===void 0&&(AA==="instanceMatrix"&&$A.instanceMatrix&&(kA=$A.instanceMatrix),AA==="instanceColor"&&$A.instanceColor&&(kA=$A.instanceColor)),kA!==void 0){const qA=kA.normalized,gt=kA.itemSize,wt=g.get(kA);if(wt===void 0)continue;const Pt=wt.buffer,Wt=wt.type,De=wt.bytesPerElement,cg=B.isWebGL2===!0&&(Wt===E.INT||Wt===E.UNSIGNED_INT||kA.gpuType===Zu);if(kA.isInterleavedBufferAttribute){const se=kA.data,rA=se.stride,Qt=kA.offset;if(se.isInstancedInterleavedBuffer){for(let At=0;At<CA.locationSize;At++)dA(CA.location+At,se.meshPerAttribute);$A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let At=0;At<CA.locationSize;At++)gA(CA.location+At);E.bindBuffer(E.ARRAY_BUFFER,Pt);for(let At=0;At<CA.locationSize;At++)pA(CA.location+At,gt/CA.locationSize,Wt,qA,rA*De,(Qt+gt/CA.locationSize*At)*De,cg)}else{if(kA.isInstancedBufferAttribute){for(let se=0;se<CA.locationSize;se++)dA(CA.location+se,kA.meshPerAttribute);$A.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=kA.meshPerAttribute*kA.count)}else for(let se=0;se<CA.locationSize;se++)gA(CA.location+se);E.bindBuffer(E.ARRAY_BUFFER,Pt);for(let se=0;se<CA.locationSize;se++)pA(CA.location+se,gt/CA.locationSize,Wt,qA,gt*De,gt/CA.locationSize*se*De,cg)}}else if(X!==void 0){const qA=X[AA];if(qA!==void 0)switch(qA.length){case 2:E.vertexAttrib2fv(CA.location,qA);break;case 3:E.vertexAttrib3fv(CA.location,qA);break;case 4:E.vertexAttrib4fv(CA.location,qA);break;default:E.vertexAttrib1fv(CA.location,qA)}}}}fA()}function $(){Rt();for(const $A in a){const VA=a[$A];for(const ft in VA){const it=VA[ft];for(const nt in it)P(it[nt].object),delete it[nt];delete VA[ft]}delete a[$A]}}function uA($A){if(a[$A.id]===void 0)return;const VA=a[$A.id];for(const ft in VA){const it=VA[ft];for(const nt in it)P(it[nt].object),delete it[nt];delete VA[ft]}delete a[$A.id]}function rt($A){for(const VA in a){const ft=a[VA];if(ft[$A.id]===void 0)continue;const it=ft[$A.id];for(const nt in it)P(it[nt].object),delete it[nt];delete ft[$A.id]}}function Rt(){TA(),m=!0,f!==D&&(f=D,J(f.object))}function TA(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:S,reset:Rt,resetDefaultState:TA,dispose:$,releaseStatesOfGeometry:uA,releaseStatesOfProgram:rt,initAttributes:j,enableAttribute:gA,disableUnusedAttributes:fA}}function yF(E,t,g,B){const o=B.isWebGL2;let r;function h(f){r=f}function a(f,m){E.drawArrays(r,f,m),g.update(m,r,1)}function D(f,m,S){if(S===0)return;let F,J;if(o)F=E,J="drawArraysInstanced";else if(F=t.get("ANGLE_instanced_arrays"),J="drawArraysInstancedANGLE",F===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}F[J](r,f,m,S),g.update(m,r,S)}this.setMode=h,this.render=a,this.renderInstances=D}function MF(E,t,g){let B;function o(){if(B!==void 0)return B;if(t.has("EXT_texture_filter_anisotropic")===!0){const pA=t.get("EXT_texture_filter_anisotropic");B=E.getParameter(pA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else B=0;return B}function r(pA){if(pA==="highp"){if(E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.HIGH_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.HIGH_FLOAT).precision>0)return"highp";pA="mediump"}return pA==="mediump"&&E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.MEDIUM_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&E.constructor.name==="WebGL2RenderingContext";let a=g.precision!==void 0?g.precision:"highp";const D=r(a);D!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",D,"instead."),a=D);const f=h||t.has("WEBGL_draw_buffers"),m=g.logarithmicDepthBuffer===!0,S=E.getParameter(E.MAX_TEXTURE_IMAGE_UNITS),F=E.getParameter(E.MAX_VERTEX_TEXTURE_IMAGE_UNITS),J=E.getParameter(E.MAX_TEXTURE_SIZE),P=E.getParameter(E.MAX_CUBE_MAP_TEXTURE_SIZE),T=E.getParameter(E.MAX_VERTEX_ATTRIBS),x=E.getParameter(E.MAX_VERTEX_UNIFORM_VECTORS),L=E.getParameter(E.MAX_VARYING_VECTORS),iA=E.getParameter(E.MAX_FRAGMENT_UNIFORM_VECTORS),j=F>0,gA=h||t.has("OES_texture_float"),dA=j&&gA,fA=h?E.getParameter(E.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:f,getMaxAnisotropy:o,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:m,maxTextures:S,maxVertexTextures:F,maxTextureSize:J,maxCubemapSize:P,maxAttributes:T,maxVertexUniforms:x,maxVaryings:L,maxFragmentUniforms:iA,vertexTextures:j,floatFragmentTextures:gA,floatVertexTextures:dA,maxSamples:fA}}function mF(E){const t=this;let g=null,B=0,o=!1,r=!1;const h=new Rn,a=new ag,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(S,F){const J=S.length!==0||F||B!==0||o;return o=F,B=S.length,J},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(S,F){g=m(S,F,0)},this.setState=function(S,F,J){const P=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,L=E.get(S);if(!o||P===null||P.length===0||r&&!x)r?m(null):f();else{const iA=r?0:B,j=iA*4;let gA=L.clippingState||null;D.value=gA,gA=m(P,F,j,J);for(let dA=0;dA!==j;++dA)gA[dA]=g[dA];L.clippingState=gA,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=iA}};function f(){D.value!==g&&(D.value=g,D.needsUpdate=B>0),t.numPlanes=B,t.numIntersection=0}function m(S,F,J,P){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=D.value,P!==!0||x===null){const L=J+T*4,iA=F.matrixWorldInverse;a.getNormalMatrix(iA),(x===null||x.length<L)&&(x=new Float32Array(L));for(let j=0,gA=J;j!==T;++j,gA+=4)h.copy(S[j]).applyMatrix4(iA,a),h.normal.toArray(x,gA),x[gA+3]=h.constant}D.value=x,D.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function RF(E){let t=new WeakMap;function g(h,a){return a===gh?h.mapping=Vo:a===Ih&&(h.mapping=Zo),h}function B(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const a=h.mapping;if(a===gh||a===Ih)if(t.has(h)){const D=t.get(h).texture;return g(D,h.mapping)}else{const D=h.image;if(D&&D.height>0){const f=new HR(D.height/2);return f.fromEquirectangularTexture(E,h),t.set(h,f),h.addEventListener("dispose",o),g(f.texture,h.mapping)}else return null}}return h}function o(h){const a=h.target;a.removeEventListener("dispose",o);const D=t.get(a);D!==void 0&&(t.delete(a),D.dispose())}function r(){t=new WeakMap}return{get:B,dispose:r}}class ph extends uh{constructor(t=-1,g=1,B=1,o=-1,r=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=g,this.top=B,this.bottom=o,this.near=r,this.far=h,this.updateProjectionMatrix()}copy(t,g){return super.copy(t,g),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,g,B,o,r,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=g,this.view.offsetX=B,this.view.offsetY=o,this.view.width=r,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),B=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=B-t,h=B+t,a=o+g,D=o-g;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,h=r+f*this.view.width,a-=m*this.view.offsetY,D=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,h,a,D,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const g=super.toJSON(t);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const qo=4,Zd=[.125,.215,.35,.446,.526,.582],Gn=20,_a=new ph,Xd=new Cg;let Wa=null;const Sn=(1+Math.sqrt(5))/2,Yo=1/Sn,zd=[new bA(1,1,1),new bA(-1,1,1),new bA(1,1,-1),new bA(-1,1,-1),new bA(0,Sn,Yo),new bA(0,Sn,-Yo),new bA(Yo,0,Sn),new bA(-Yo,0,Sn),new bA(Sn,Yo,0),new bA(-Sn,Yo,0)];class jd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,g=0,B=.1,o=100){Wa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,B,o,r),g>0&&this._blur(r,0,0,g),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,g=null){return this._fromTexture(t,g)}fromCubemap(t,g=null){return this._fromTexture(t,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa),t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,g){t.mapping===Vo||t.mapping===Zo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget();const B=g||this._allocateTargets();return this._textureToCubeUV(t,B),this._applyPMREM(B),this._cleanup(B),B}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,B={magFilter:li,minFilter:li,generateMipmaps:!1,type:uQ,format:Wi,colorSpace:xB,depthBuffer:!1},o=$d(t,g,B);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(t,g,B);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SF(r)),this._blurMaterial=GF(r,t,g)}return o}_compileMaterial(t){const g=new ui(this._lodPlanes[0],t);this._renderer.compile(g,_a)}_sceneToCubeUV(t,g,B,o){const a=new di(90,1,g,B),D=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,F=m.toneMapping;m.getClearColor(Xd),m.toneMapping=KC,m.autoClear=!1;const J=new Fn({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1}),P=new ui(new BE,J);let T=!1;const x=t.background;x?x.isColor&&(J.color.copy(x),t.background=null,T=!0):(J.color.copy(Xd),T=!0);for(let L=0;L<6;L++){const iA=L%3;iA===0?(a.up.set(0,D[L],0),a.lookAt(f[L],0,0)):iA===1?(a.up.set(0,0,D[L]),a.lookAt(0,f[L],0)):(a.up.set(0,D[L],0),a.lookAt(0,0,f[L]));const j=this._cubeSize;Xs(o,iA*j,L>2?j:0,j,j),m.setRenderTarget(o),T&&m.render(P,a),m.render(t,a)}P.geometry.dispose(),P.material.dispose(),m.toneMapping=F,m.autoClear=S,t.background=x}_textureToCubeUV(t,g){const B=this._renderer,o=t.mapping===Vo||t.mapping===Zo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const r=o?this._cubemapMaterial:this._equirectMaterial,h=new ui(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const D=this._cubeSize;Xs(g,0,0,3*D,2*D),B.setRenderTarget(g),B.render(h,_a)}_applyPMREM(t){const g=this._renderer,B=g.autoClear;g.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=zd[(o-1)%zd.length];this._blur(t,o-1,o,r,h)}g.autoClear=B}_blur(t,g,B,o,r){const h=this._pingPongRenderTarget;this._halfBlur(t,h,g,B,o,"latitudinal",r),this._halfBlur(h,t,B,B,o,"longitudinal",r)}_halfBlur(t,g,B,o,r,h,a){const D=this._renderer,f=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,S=new ui(this._lodPlanes[o],f),F=f.uniforms,J=this._sizeLods[B]-1,P=isFinite(r)?Math.PI/(2*J):2*Math.PI/(2*Gn-1),T=r/P,x=isFinite(r)?1+Math.floor(m*T):Gn;x>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gn}`);const L=[];let iA=0;for(let pA=0;pA<Gn;++pA){const YA=pA/T,$=Math.exp(-YA*YA/2);L.push($),pA===0?iA+=$:pA<x&&(iA+=2*$)}for(let pA=0;pA<L.length;pA++)L[pA]=L[pA]/iA;F.envMap.value=t.texture,F.samples.value=x,F.weights.value=L,F.latitudinal.value=h==="latitudinal",a&&(F.poleAxis.value=a);const{_lodMax:j}=this;F.dTheta.value=P,F.mipInt.value=j-B;const gA=this._sizeLods[o],dA=3*gA*(o>j-qo?o-j+qo:0),fA=4*(this._cubeSize-gA);Xs(g,dA,fA,3*gA,2*gA),D.setRenderTarget(g),D.render(S,_a)}}function SF(E){const t=[],g=[],B=[];let o=E;const r=E-qo+1+Zd.length;for(let h=0;h<r;h++){const a=Math.pow(2,o);g.push(a);let D=1/a;h>E-qo?D=Zd[h-E+qo-1]:h===0&&(D=0),B.push(D);const f=1/(a-2),m=-f,S=1+f,F=[m,m,S,m,S,S,m,m,S,S,m,S],J=6,P=6,T=3,x=2,L=1,iA=new Float32Array(T*P*J),j=new Float32Array(x*P*J),gA=new Float32Array(L*P*J);for(let fA=0;fA<J;fA++){const pA=fA%3*2/3-1,YA=fA>2?0:-1,$=[pA,YA,0,pA+2/3,YA,0,pA+2/3,YA+1,0,pA,YA,0,pA+2/3,YA+1,0,pA,YA+1,0];iA.set($,T*P*fA),j.set(F,x*P*fA);const uA=[fA,fA,fA,fA,fA,fA];gA.set(uA,L*P*fA)}const dA=new Pi;dA.setAttribute("position",new si(iA,T)),dA.setAttribute("uv",new si(j,x)),dA.setAttribute("faceIndex",new si(gA,L)),t.push(dA),o>qo&&o--}return{lodPlanes:t,sizeLods:g,sigmas:B}}function $d(E,t,g){const B=new bn(E,t,g);return B.texture.mapping=nr,B.texture.name="PMREM.cubeUv",B.scissorTest=!0,B}function Xs(E,t,g,B,o){E.viewport.set(t,g,B,o),E.scissor.set(t,g,B,o)}function GF(E,t,g){const B=new Float32Array(Gn),o=new bA(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${E}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:B},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wh(),fragmentShader:`

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
		`,blending:JC,depthTest:!1,depthWrite:!1})}function Au(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:JC,depthTest:!1,depthWrite:!1})}function tu(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:JC,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function FF(E){let t=new WeakMap,g=null;function B(a){if(a&&a.isTexture){const D=a.mapping,f=D===gh||D===Ih,m=D===Vo||D===Zo;if(f||m)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let S=t.get(a);return g===null&&(g=new jd(E)),S=f?g.fromEquirectangular(a,S):g.fromCubemap(a,S),t.set(a,S),S.texture}else{if(t.has(a))return t.get(a).texture;{const S=a.image;if(f&&S&&S.height>0||m&&S&&o(S)){g===null&&(g=new jd(E));const F=f?g.fromEquirectangular(a):g.fromCubemap(a);return t.set(a,F),a.addEventListener("dispose",r),F.texture}else return null}}}return a}function o(a){let D=0;const f=6;for(let m=0;m<f;m++)a[m]!==void 0&&D++;return D===f}function r(a){const D=a.target;D.removeEventListener("dispose",r);const f=t.get(D);f!==void 0&&(t.delete(D),f.dispose())}function h(){t=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:B,dispose:h}}function NF(E){const t={};function g(B){if(t[B]!==void 0)return t[B];let o;switch(B){case"WEBGL_depth_texture":o=E.getExtension("WEBGL_depth_texture")||E.getExtension("MOZ_WEBGL_depth_texture")||E.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=E.getExtension("EXT_texture_filter_anisotropic")||E.getExtension("MOZ_EXT_texture_filter_anisotropic")||E.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=E.getExtension("WEBGL_compressed_texture_s3tc")||E.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=E.getExtension("WEBGL_compressed_texture_pvrtc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=E.getExtension(B)}return t[B]=o,o}return{has:function(B){return g(B)!==null},init:function(B){B.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(B){const o=g(B);return o===null&&console.warn("THREE.WebGLRenderer: "+B+" extension not supported."),o}}}function UF(E,t,g,B){const o={},r=new WeakMap;function h(S){const F=S.target;F.index!==null&&t.remove(F.index);for(const P in F.attributes)t.remove(F.attributes[P]);for(const P in F.morphAttributes){const T=F.morphAttributes[P];for(let x=0,L=T.length;x<L;x++)t.remove(T[x])}F.removeEventListener("dispose",h),delete o[F.id];const J=r.get(F);J&&(t.remove(J),r.delete(F)),B.releaseStatesOfGeometry(F),F.isInstancedBufferGeometry===!0&&delete F._maxInstanceCount,g.memory.geometries--}function a(S,F){return o[F.id]===!0||(F.addEventListener("dispose",h),o[F.id]=!0,g.memory.geometries++),F}function D(S){const F=S.attributes;for(const P in F)t.update(F[P],E.ARRAY_BUFFER);const J=S.morphAttributes;for(const P in J){const T=J[P];for(let x=0,L=T.length;x<L;x++)t.update(T[x],E.ARRAY_BUFFER)}}function f(S){const F=[],J=S.index,P=S.attributes.position;let T=0;if(J!==null){const iA=J.array;T=J.version;for(let j=0,gA=iA.length;j<gA;j+=3){const dA=iA[j+0],fA=iA[j+1],pA=iA[j+2];F.push(dA,fA,fA,pA,pA,dA)}}else if(P!==void 0){const iA=P.array;T=P.version;for(let j=0,gA=iA.length/3-1;j<gA;j+=3){const dA=j+0,fA=j+1,pA=j+2;F.push(dA,fA,fA,pA,pA,dA)}}else return;const x=new(iD(F)?sD:QD)(F,1);x.version=T;const L=r.get(S);L&&t.remove(L),r.set(S,x)}function m(S){const F=r.get(S);if(F){const J=S.index;J!==null&&F.version<J.version&&f(S)}else f(S);return r.get(S)}return{get:a,update:D,getWireframeAttribute:m}}function kF(E,t,g,B){const o=B.isWebGL2;let r;function h(F){r=F}let a,D;function f(F){a=F.type,D=F.bytesPerElement}function m(F,J){E.drawElements(r,J,a,F*D),g.update(J,r,1)}function S(F,J,P){if(P===0)return;let T,x;if(o)T=E,x="drawElementsInstanced";else if(T=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[x](r,J,a,F*D,P),g.update(J,r,P)}this.setMode=h,this.setIndex=f,this.render=m,this.renderInstances=S}function LF(E){const t={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function B(r,h,a){switch(g.calls++,h){case E.TRIANGLES:g.triangles+=a*(r/3);break;case E.LINES:g.lines+=a*(r/2);break;case E.LINE_STRIP:g.lines+=a*(r-1);break;case E.LINE_LOOP:g.lines+=a*r;break;case E.POINTS:g.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:t,render:g,programs:null,autoReset:!0,reset:o,update:B}}function xF(E,t){return E[0]-t[0]}function bF(E,t){return Math.abs(t[1])-Math.abs(E[1])}function JF(E,t,g){const B={},o=new Float32Array(8),r=new WeakMap,h=new Og,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function D(f,m,S){const F=f.morphTargetInfluences;if(t.isWebGL2===!0){const P=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,T=P!==void 0?P.length:0;let x=r.get(m);if(x===void 0||x.count!==T){let VA=function(){TA.dispose(),r.delete(m),m.removeEventListener("dispose",VA)};var J=VA;x!==void 0&&x.texture.dispose();const j=m.morphAttributes.position!==void 0,gA=m.morphAttributes.normal!==void 0,dA=m.morphAttributes.color!==void 0,fA=m.morphAttributes.position||[],pA=m.morphAttributes.normal||[],YA=m.morphAttributes.color||[];let $=0;j===!0&&($=1),gA===!0&&($=2),dA===!0&&($=3);let uA=m.attributes.position.count*$,rt=1;uA>t.maxTextureSize&&(rt=Math.ceil(uA/t.maxTextureSize),uA=t.maxTextureSize);const Rt=new Float32Array(uA*rt*4*T),TA=new nD(Rt,uA,rt,T);TA.type=oC,TA.needsUpdate=!0;const $A=$*4;for(let ft=0;ft<T;ft++){const it=fA[ft],nt=pA[ft],V=YA[ft],X=uA*rt*4*ft;for(let AA=0;AA<it.count;AA++){const CA=AA*$A;j===!0&&(h.fromBufferAttribute(it,AA),Rt[X+CA+0]=h.x,Rt[X+CA+1]=h.y,Rt[X+CA+2]=h.z,Rt[X+CA+3]=0),gA===!0&&(h.fromBufferAttribute(nt,AA),Rt[X+CA+4]=h.x,Rt[X+CA+5]=h.y,Rt[X+CA+6]=h.z,Rt[X+CA+7]=0),dA===!0&&(h.fromBufferAttribute(V,AA),Rt[X+CA+8]=h.x,Rt[X+CA+9]=h.y,Rt[X+CA+10]=h.z,Rt[X+CA+11]=V.itemSize===4?h.w:1)}}x={count:T,texture:TA,size:new Mg(uA,rt)},r.set(m,x),m.addEventListener("dispose",VA)}let L=0;for(let j=0;j<F.length;j++)L+=F[j];const iA=m.morphTargetsRelative?1:1-L;S.getUniforms().setValue(E,"morphTargetBaseInfluence",iA),S.getUniforms().setValue(E,"morphTargetInfluences",F),S.getUniforms().setValue(E,"morphTargetsTexture",x.texture,g),S.getUniforms().setValue(E,"morphTargetsTextureSize",x.size)}else{const P=F===void 0?0:F.length;let T=B[m.id];if(T===void 0||T.length!==P){T=[];for(let gA=0;gA<P;gA++)T[gA]=[gA,0];B[m.id]=T}for(let gA=0;gA<P;gA++){const dA=T[gA];dA[0]=gA,dA[1]=F[gA]}T.sort(bF);for(let gA=0;gA<8;gA++)gA<P&&T[gA][1]?(a[gA][0]=T[gA][0],a[gA][1]=T[gA][1]):(a[gA][0]=Number.MAX_SAFE_INTEGER,a[gA][1]=0);a.sort(xF);const x=m.morphAttributes.position,L=m.morphAttributes.normal;let iA=0;for(let gA=0;gA<8;gA++){const dA=a[gA],fA=dA[0],pA=dA[1];fA!==Number.MAX_SAFE_INTEGER&&pA?(x&&m.getAttribute("morphTarget"+gA)!==x[fA]&&m.setAttribute("morphTarget"+gA,x[fA]),L&&m.getAttribute("morphNormal"+gA)!==L[fA]&&m.setAttribute("morphNormal"+gA,L[fA]),o[gA]=pA,iA+=pA):(x&&m.hasAttribute("morphTarget"+gA)===!0&&m.deleteAttribute("morphTarget"+gA),L&&m.hasAttribute("morphNormal"+gA)===!0&&m.deleteAttribute("morphNormal"+gA),o[gA]=0)}const j=m.morphTargetsRelative?1:1-iA;S.getUniforms().setValue(E,"morphTargetBaseInfluence",j),S.getUniforms().setValue(E,"morphTargetInfluences",o)}}return{update:D}}function KF(E,t,g,B){let o=new WeakMap;function r(D){const f=B.render.frame,m=D.geometry,S=t.get(D,m);if(o.get(S)!==f&&(t.update(S),o.set(S,f)),D.isInstancedMesh&&(D.hasEventListener("dispose",a)===!1&&D.addEventListener("dispose",a),o.get(D)!==f&&(g.update(D.instanceMatrix,E.ARRAY_BUFFER),D.instanceColor!==null&&g.update(D.instanceColor,E.ARRAY_BUFFER),o.set(D,f))),D.isSkinnedMesh){const F=D.skeleton;o.get(F)!==f&&(F.update(),o.set(F,f))}return S}function h(){o=new WeakMap}function a(D){const f=D.target;f.removeEventListener("dispose",a),g.remove(f.instanceMatrix),f.instanceColor!==null&&g.remove(f.instanceColor)}return{update:r,dispose:h}}const cD=new OI,lD=new nD,dD=new MR,uD=new aD,eu=[],gu=[],Iu=new Float32Array(16),iu=new Float32Array(9),Bu=new Float32Array(4);function CE(E,t,g){const B=E[0];if(B<=0||B>0)return E;const o=t*g;let r=eu[o];if(r===void 0&&(r=new Float32Array(o),eu[o]=r),t!==0){B.toArray(r,0);for(let h=1,a=0;h!==t;++h)a+=g,E[h].toArray(r,a)}return r}function GI(E,t){if(E.length!==t.length)return!1;for(let g=0,B=E.length;g<B;g++)if(E[g]!==t[g])return!1;return!0}function FI(E,t){for(let g=0,B=t.length;g<B;g++)E[g]=t[g]}function Qr(E,t){let g=gu[t];g===void 0&&(g=new Int32Array(t),gu[t]=g);for(let B=0;B!==t;++B)g[B]=E.allocateTextureUnit();return g}function YF(E,t){const g=this.cache;g[0]!==t&&(E.uniform1f(this.addr,t),g[0]=t)}function vF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y)&&(E.uniform2f(this.addr,t.x,t.y),g[0]=t.x,g[1]=t.y);else{if(GI(g,t))return;E.uniform2fv(this.addr,t),FI(g,t)}}function HF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z)&&(E.uniform3f(this.addr,t.x,t.y,t.z),g[0]=t.x,g[1]=t.y,g[2]=t.z);else if(t.r!==void 0)(g[0]!==t.r||g[1]!==t.g||g[2]!==t.b)&&(E.uniform3f(this.addr,t.r,t.g,t.b),g[0]=t.r,g[1]=t.g,g[2]=t.b);else{if(GI(g,t))return;E.uniform3fv(this.addr,t),FI(g,t)}}function TF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z||g[3]!==t.w)&&(E.uniform4f(this.addr,t.x,t.y,t.z,t.w),g[0]=t.x,g[1]=t.y,g[2]=t.z,g[3]=t.w);else{if(GI(g,t))return;E.uniform4fv(this.addr,t),FI(g,t)}}function qF(E,t){const g=this.cache,B=t.elements;if(B===void 0){if(GI(g,t))return;E.uniformMatrix2fv(this.addr,!1,t),FI(g,t)}else{if(GI(g,B))return;Bu.set(B),E.uniformMatrix2fv(this.addr,!1,Bu),FI(g,B)}}function _F(E,t){const g=this.cache,B=t.elements;if(B===void 0){if(GI(g,t))return;E.uniformMatrix3fv(this.addr,!1,t),FI(g,t)}else{if(GI(g,B))return;iu.set(B),E.uniformMatrix3fv(this.addr,!1,iu),FI(g,B)}}function WF(E,t){const g=this.cache,B=t.elements;if(B===void 0){if(GI(g,t))return;E.uniformMatrix4fv(this.addr,!1,t),FI(g,t)}else{if(GI(g,B))return;Iu.set(B),E.uniformMatrix4fv(this.addr,!1,Iu),FI(g,B)}}function PF(E,t){const g=this.cache;g[0]!==t&&(E.uniform1i(this.addr,t),g[0]=t)}function OF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y)&&(E.uniform2i(this.addr,t.x,t.y),g[0]=t.x,g[1]=t.y);else{if(GI(g,t))return;E.uniform2iv(this.addr,t),FI(g,t)}}function VF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z)&&(E.uniform3i(this.addr,t.x,t.y,t.z),g[0]=t.x,g[1]=t.y,g[2]=t.z);else{if(GI(g,t))return;E.uniform3iv(this.addr,t),FI(g,t)}}function ZF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z||g[3]!==t.w)&&(E.uniform4i(this.addr,t.x,t.y,t.z,t.w),g[0]=t.x,g[1]=t.y,g[2]=t.z,g[3]=t.w);else{if(GI(g,t))return;E.uniform4iv(this.addr,t),FI(g,t)}}function XF(E,t){const g=this.cache;g[0]!==t&&(E.uniform1ui(this.addr,t),g[0]=t)}function zF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y)&&(E.uniform2ui(this.addr,t.x,t.y),g[0]=t.x,g[1]=t.y);else{if(GI(g,t))return;E.uniform2uiv(this.addr,t),FI(g,t)}}function jF(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z)&&(E.uniform3ui(this.addr,t.x,t.y,t.z),g[0]=t.x,g[1]=t.y,g[2]=t.z);else{if(GI(g,t))return;E.uniform3uiv(this.addr,t),FI(g,t)}}function $F(E,t){const g=this.cache;if(t.x!==void 0)(g[0]!==t.x||g[1]!==t.y||g[2]!==t.z||g[3]!==t.w)&&(E.uniform4ui(this.addr,t.x,t.y,t.z,t.w),g[0]=t.x,g[1]=t.y,g[2]=t.z,g[3]=t.w);else{if(GI(g,t))return;E.uniform4uiv(this.addr,t),FI(g,t)}}function AN(E,t,g){const B=this.cache,o=g.allocateTextureUnit();B[0]!==o&&(E.uniform1i(this.addr,o),B[0]=o),g.setTexture2D(t||cD,o)}function tN(E,t,g){const B=this.cache,o=g.allocateTextureUnit();B[0]!==o&&(E.uniform1i(this.addr,o),B[0]=o),g.setTexture3D(t||dD,o)}function eN(E,t,g){const B=this.cache,o=g.allocateTextureUnit();B[0]!==o&&(E.uniform1i(this.addr,o),B[0]=o),g.setTextureCube(t||uD,o)}function gN(E,t,g){const B=this.cache,o=g.allocateTextureUnit();B[0]!==o&&(E.uniform1i(this.addr,o),B[0]=o),g.setTexture2DArray(t||lD,o)}function IN(E){switch(E){case 5126:return YF;case 35664:return vF;case 35665:return HF;case 35666:return TF;case 35674:return qF;case 35675:return _F;case 35676:return WF;case 5124:case 35670:return PF;case 35667:case 35671:return OF;case 35668:case 35672:return VF;case 35669:case 35673:return ZF;case 5125:return XF;case 36294:return zF;case 36295:return jF;case 36296:return $F;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return tN;case 35680:case 36300:case 36308:case 36293:return eN;case 36289:case 36303:case 36311:case 36292:return gN}}function iN(E,t){E.uniform1fv(this.addr,t)}function BN(E,t){const g=CE(t,this.size,2);E.uniform2fv(this.addr,g)}function CN(E,t){const g=CE(t,this.size,3);E.uniform3fv(this.addr,g)}function nN(E,t){const g=CE(t,this.size,4);E.uniform4fv(this.addr,g)}function oN(E,t){const g=CE(t,this.size,4);E.uniformMatrix2fv(this.addr,!1,g)}function EN(E,t){const g=CE(t,this.size,9);E.uniformMatrix3fv(this.addr,!1,g)}function QN(E,t){const g=CE(t,this.size,16);E.uniformMatrix4fv(this.addr,!1,g)}function sN(E,t){E.uniform1iv(this.addr,t)}function rN(E,t){E.uniform2iv(this.addr,t)}function aN(E,t){E.uniform3iv(this.addr,t)}function hN(E,t){E.uniform4iv(this.addr,t)}function cN(E,t){E.uniform1uiv(this.addr,t)}function lN(E,t){E.uniform2uiv(this.addr,t)}function dN(E,t){E.uniform3uiv(this.addr,t)}function uN(E,t){E.uniform4uiv(this.addr,t)}function DN(E,t,g){const B=this.cache,o=t.length,r=Qr(g,o);GI(B,r)||(E.uniform1iv(this.addr,r),FI(B,r));for(let h=0;h!==o;++h)g.setTexture2D(t[h]||cD,r[h])}function fN(E,t,g){const B=this.cache,o=t.length,r=Qr(g,o);GI(B,r)||(E.uniform1iv(this.addr,r),FI(B,r));for(let h=0;h!==o;++h)g.setTexture3D(t[h]||dD,r[h])}function pN(E,t,g){const B=this.cache,o=t.length,r=Qr(g,o);GI(B,r)||(E.uniform1iv(this.addr,r),FI(B,r));for(let h=0;h!==o;++h)g.setTextureCube(t[h]||uD,r[h])}function wN(E,t,g){const B=this.cache,o=t.length,r=Qr(g,o);GI(B,r)||(E.uniform1iv(this.addr,r),FI(B,r));for(let h=0;h!==o;++h)g.setTexture2DArray(t[h]||lD,r[h])}function yN(E){switch(E){case 5126:return iN;case 35664:return BN;case 35665:return CN;case 35666:return nN;case 35674:return oN;case 35675:return EN;case 35676:return QN;case 5124:case 35670:return sN;case 35667:case 35671:return rN;case 35668:case 35672:return aN;case 35669:case 35673:return hN;case 5125:return cN;case 36294:return lN;case 36295:return dN;case 36296:return uN;case 35678:case 36198:case 36298:case 36306:case 35682:return DN;case 35679:case 36299:case 36307:return fN;case 35680:case 36300:case 36308:case 36293:return pN;case 36289:case 36303:case 36311:case 36292:return wN}}class MN{constructor(t,g,B){this.id=t,this.addr=B,this.cache=[],this.setValue=IN(g.type)}}class mN{constructor(t,g,B){this.id=t,this.addr=B,this.cache=[],this.size=g.size,this.setValue=yN(g.type)}}class RN{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,g,B){const o=this.seq;for(let r=0,h=o.length;r!==h;++r){const a=o[r];a.setValue(t,g[a.id],B)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Cu(E,t){E.seq.push(t),E.map[t.id]=t}function SN(E,t,g){const B=E.name,o=B.length;for(Pa.lastIndex=0;;){const r=Pa.exec(B),h=Pa.lastIndex;let a=r[1];const D=r[2]==="]",f=r[3];if(D&&(a=a|0),f===void 0||f==="["&&h+2===o){Cu(g,f===void 0?new MN(a,E,t):new mN(a,E,t));break}else{let S=g.map[a];S===void 0&&(S=new RN(a),Cu(g,S)),g=S}}}class Ir{constructor(t,g){this.seq=[],this.map={};const B=t.getProgramParameter(g,t.ACTIVE_UNIFORMS);for(let o=0;o<B;++o){const r=t.getActiveUniform(g,o),h=t.getUniformLocation(g,r.name);SN(r,h,this)}}setValue(t,g,B,o){const r=this.map[g];r!==void 0&&r.setValue(t,B,o)}setOptional(t,g,B){const o=g[B];o!==void 0&&this.setValue(t,B,o)}static upload(t,g,B,o){for(let r=0,h=g.length;r!==h;++r){const a=g[r],D=B[a.id];D.needsUpdate!==!1&&a.setValue(t,D.value,o)}}static seqWithValue(t,g){const B=[];for(let o=0,r=t.length;o!==r;++o){const h=t[o];h.id in g&&B.push(h)}return B}}function nu(E,t,g){const B=E.createShader(t);return E.shaderSource(B,g),E.compileShader(B),B}let GN=0;function FN(E,t){const g=E.split(`
`),B=[],o=Math.max(t-6,0),r=Math.min(t+6,g.length);for(let h=o;h<r;h++){const a=h+1;B.push(`${a===t?">":" "} ${a}: ${g[h]}`)}return B.join(`
`)}function NN(E){switch(E){case xB:return["Linear","( value )"];case tg:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",E),["Linear","( value )"]}}function ou(E,t,g){const B=E.getShaderParameter(t,E.COMPILE_STATUS),o=E.getShaderInfoLog(t).trim();if(B&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const h=parseInt(r[1]);return g.toUpperCase()+`

`+o+`

`+FN(E.getShaderSource(t),h)}else return o}function UN(E,t){const g=NN(t);return"vec4 "+E+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function kN(E,t){let g;switch(t){case Sm:g="Linear";break;case Gm:g="Reinhard";break;case Fm:g="OptimizedCineon";break;case Nm:g="ACESFilmic";break;case Um:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),g="Linear"}return"vec3 "+E+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function LN(E){return[E.extensionDerivatives||E.envMapCubeUVHeight||E.bumpMap||E.normalMapTangentSpace||E.clearcoatNormalMap||E.flatShading||E.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(E.extensionFragDepth||E.logarithmicDepthBuffer)&&E.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",E.extensionDrawBuffers&&E.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(E.extensionShaderTextureLOD||E.envMap||E.transmission)&&E.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hQ).join(`
`)}function xN(E){const t=[];for(const g in E){const B=E[g];B!==!1&&t.push("#define "+g+" "+B)}return t.join(`
`)}function bN(E,t){const g={},B=E.getProgramParameter(t,E.ACTIVE_ATTRIBUTES);for(let o=0;o<B;o++){const r=E.getActiveAttrib(t,o),h=r.name;let a=1;r.type===E.FLOAT_MAT2&&(a=2),r.type===E.FLOAT_MAT3&&(a=3),r.type===E.FLOAT_MAT4&&(a=4),g[h]={type:r.type,location:E.getAttribLocation(t,h),locationSize:a}}return g}function hQ(E){return E!==""}function Eu(E,t){const g=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return E.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qu(E,t){return E.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const JN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(E){return E.replace(JN,YN)}const KN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YN(E,t){let g=og[t];if(g===void 0){const B=KN.get(t);if(B!==void 0)g=og[B],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,B);else throw new Error("Can not resolve #include <"+t+">")}return Eh(g)}const vN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(E){return E.replace(vN,HN)}function HN(E,t,g,B){let o="";for(let r=parseInt(t);r<parseInt(g);r++)o+=B.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function ru(E){let t="precision "+E.precision+` float;
precision `+E.precision+" int;";return E.precision==="highp"?t+=`
#define HIGH_PRECISION`:E.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:E.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TN(E){let t="SHADOWMAP_TYPE_BASIC";return E.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":E.shadowMapType===Bm?t="SHADOWMAP_TYPE_PCF_SOFT":E.shadowMapType===nC&&(t="SHADOWMAP_TYPE_VSM"),t}function qN(E){let t="ENVMAP_TYPE_CUBE";if(E.envMap)switch(E.envMapMode){case Vo:case Zo:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _N(E){let t="ENVMAP_MODE_REFLECTION";if(E.envMap)switch(E.envMapMode){case Zo:t="ENVMAP_MODE_REFRACTION";break}return t}function WN(E){let t="ENVMAP_BLENDING_NONE";if(E.envMap)switch(E.combine){case Pu:t="ENVMAP_BLENDING_MULTIPLY";break;case mm:t="ENVMAP_BLENDING_MIX";break;case Rm:t="ENVMAP_BLENDING_ADD";break}return t}function PN(E){const t=E.envMapCubeUVHeight;if(t===null)return null;const g=Math.log2(t)-2,B=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:B,maxMip:g}}function ON(E,t,g,B){const o=E.getContext(),r=g.defines;let h=g.vertexShader,a=g.fragmentShader;const D=TN(g),f=qN(g),m=_N(g),S=WN(g),F=PN(g),J=g.isWebGL2?"":LN(g),P=xN(r),T=o.createProgram();let x,L,iA=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(x=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,P].filter(hQ).join(`
`),x.length>0&&(x+=`
`),L=[J,"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,P].filter(hQ).join(`
`),L.length>0&&(L+=`
`)):(x=[ru(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,P,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+m:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.displacementMap?"#define USE_DISPLACEMENTMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.mapUv?"#define MAP_UV "+g.mapUv:"",g.alphaMapUv?"#define ALPHAMAP_UV "+g.alphaMapUv:"",g.lightMapUv?"#define LIGHTMAP_UV "+g.lightMapUv:"",g.aoMapUv?"#define AOMAP_UV "+g.aoMapUv:"",g.emissiveMapUv?"#define EMISSIVEMAP_UV "+g.emissiveMapUv:"",g.bumpMapUv?"#define BUMPMAP_UV "+g.bumpMapUv:"",g.normalMapUv?"#define NORMALMAP_UV "+g.normalMapUv:"",g.displacementMapUv?"#define DISPLACEMENTMAP_UV "+g.displacementMapUv:"",g.metalnessMapUv?"#define METALNESSMAP_UV "+g.metalnessMapUv:"",g.roughnessMapUv?"#define ROUGHNESSMAP_UV "+g.roughnessMapUv:"",g.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+g.anisotropyMapUv:"",g.clearcoatMapUv?"#define CLEARCOATMAP_UV "+g.clearcoatMapUv:"",g.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+g.clearcoatNormalMapUv:"",g.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+g.clearcoatRoughnessMapUv:"",g.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+g.iridescenceMapUv:"",g.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+g.iridescenceThicknessMapUv:"",g.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+g.sheenColorMapUv:"",g.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+g.sheenRoughnessMapUv:"",g.specularMapUv?"#define SPECULARMAP_UV "+g.specularMapUv:"",g.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+g.specularColorMapUv:"",g.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+g.specularIntensityMapUv:"",g.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+g.transmissionMapUv:"",g.thicknessMapUv?"#define THICKNESSMAP_UV "+g.thicknessMapUv:"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+D:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hQ).join(`
`),L=[J,ru(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,P,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+f:"",g.envMap?"#define "+m:"",g.envMap?"#define "+S:"",F?"#define CUBEUV_TEXEL_WIDTH "+F.texelWidth:"",F?"#define CUBEUV_TEXEL_HEIGHT "+F.texelHeight:"",F?"#define CUBEUV_MAX_MIP "+F.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+D:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==KC?"#define TONE_MAPPING":"",g.toneMapping!==KC?og.tonemapping_pars_fragment:"",g.toneMapping!==KC?kN("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",og.colorspace_pars_fragment,UN("linearToOutputTexel",g.outputColorSpace),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(hQ).join(`
`)),h=Eh(h),h=Eu(h,g),h=Qu(h,g),a=Eh(a),a=Eu(a,g),a=Qu(a,g),h=su(h),a=su(a),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(iA=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,L=["#define varying in",g.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const j=iA+x+h,gA=iA+L+a,dA=nu(o,o.VERTEX_SHADER,j),fA=nu(o,o.FRAGMENT_SHADER,gA);if(o.attachShader(T,dA),o.attachShader(T,fA),g.index0AttributeName!==void 0?o.bindAttribLocation(T,0,g.index0AttributeName):g.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T),E.debug.checkShaderErrors){const $=o.getProgramInfoLog(T).trim(),uA=o.getShaderInfoLog(dA).trim(),rt=o.getShaderInfoLog(fA).trim();let Rt=!0,TA=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Rt=!1,typeof E.debug.onShaderError=="function")E.debug.onShaderError(o,T,dA,fA);else{const $A=ou(o,dA,"vertex"),VA=ou(o,fA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+$A+`
`+VA)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(uA===""||rt==="")&&(TA=!1);TA&&(this.diagnostics={runnable:Rt,programLog:$,vertexShader:{log:uA,prefix:x},fragmentShader:{log:rt,prefix:L}})}o.deleteShader(dA),o.deleteShader(fA);let pA;this.getUniforms=function(){return pA===void 0&&(pA=new Ir(o,T)),pA};let YA;return this.getAttributes=function(){return YA===void 0&&(YA=bN(o,T)),YA},this.destroy=function(){B.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=g.shaderType,this.name=g.shaderName,this.id=GN++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=dA,this.fragmentShader=fA,this}let VN=0;class ZN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const g=t.vertexShader,B=t.fragmentShader,o=this._getShaderStage(g),r=this._getShaderStage(B),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(r)===!1&&(h.add(r),r.usedTimes++),this}remove(t){const g=this.materialCache.get(t);for(const B of g)B.usedTimes--,B.usedTimes===0&&this.shaderCache.delete(B.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const g=this.materialCache;let B=g.get(t);return B===void 0&&(B=new Set,g.set(t,B)),B}_getShaderStage(t){const g=this.shaderCache;let B=g.get(t);return B===void 0&&(B=new XN(t),g.set(t,B)),B}}class XN{constructor(t){this.id=VN++,this.code=t,this.usedTimes=0}}function zN(E,t,g,B,o,r,h){const a=new oD,D=new ZN,f=[],m=o.isWebGL2,S=o.logarithmicDepthBuffer,F=o.vertexTextures;let J=o.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T($){return $===0?"uv":`uv${$}`}function x($,uA,rt,Rt,TA){const $A=Rt.fog,VA=TA.geometry,ft=$.isMeshStandardMaterial?Rt.environment:null,it=($.isMeshStandardMaterial?g:t).get($.envMap||ft),nt=it&&it.mapping===nr?it.image.height:null,V=P[$.type];$.precision!==null&&(J=o.getMaxPrecision($.precision),J!==$.precision&&console.warn("THREE.WebGLProgram.getParameters:",$.precision,"not supported, using",J,"instead."));const X=VA.morphAttributes.position||VA.morphAttributes.normal||VA.morphAttributes.color,AA=X!==void 0?X.length:0;let CA=0;VA.morphAttributes.position!==void 0&&(CA=1),VA.morphAttributes.normal!==void 0&&(CA=2),VA.morphAttributes.color!==void 0&&(CA=3);let kA,qA,gt,wt;if(V){const Ug=kB[V];kA=Ug.vertexShader,qA=Ug.fragmentShader}else kA=$.vertexShader,qA=$.fragmentShader,D.update($),gt=D.getVertexShaderID($),wt=D.getFragmentShaderID($);const Pt=E.getRenderTarget(),Wt=TA.isInstancedMesh===!0,De=!!$.map,cg=!!$.matcap,se=!!it,rA=!!$.aoMap,Qt=!!$.lightMap,At=!!$.bumpMap,Nt=!!$.normalMap,ut=!!$.displacementMap,fe=!!$.emissiveMap,ie=!!$.metalnessMap,Zt=!!$.roughnessMap,Fe=$.anisotropy>0,PA=$.clearcoat>0,Ag=$.iridescence>0,EA=$.sheen>0,z=$.transmission>0,NA=Fe&&!!$.anisotropyMap,xt=PA&&!!$.clearcoatMap,ht=PA&&!!$.clearcoatNormalMap,Ft=PA&&!!$.clearcoatRoughnessMap,pe=Ag&&!!$.iridescenceMap,Jt=Ag&&!!$.iridescenceThicknessMap,zA=EA&&!!$.sheenColorMap,ge=EA&&!!$.sheenRoughnessMap,me=!!$.specularMap,Ue=!!$.specularColorMap,Be=!!$.specularIntensityMap,le=z&&!!$.transmissionMap,Pe=z&&!!$.thicknessMap,Ng=!!$.gradientMap,RA=!!$.alphaMap,jt=$.alphaTest>0,tt=!!$.alphaHash,Kt=!!$.extensions,Ot=!!VA.attributes.uv1,_e=!!VA.attributes.uv2,Yg=!!VA.attributes.uv3;let zg=KC;return $.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(zg=E.toneMapping),{isWebGL2:m,shaderID:V,shaderType:$.type,shaderName:$.name,vertexShader:kA,fragmentShader:qA,defines:$.defines,customVertexShaderID:gt,customFragmentShaderID:wt,isRawShaderMaterial:$.isRawShaderMaterial===!0,glslVersion:$.glslVersion,precision:J,instancing:Wt,instancingColor:Wt&&TA.instanceColor!==null,supportsVertexTextures:F,outputColorSpace:Pt===null?E.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:xB,map:De,matcap:cg,envMap:se,envMapMode:se&&it.mapping,envMapCubeUVHeight:nt,aoMap:rA,lightMap:Qt,bumpMap:At,normalMap:Nt,displacementMap:F&&ut,emissiveMap:fe,normalMapObjectSpace:Nt&&$.normalMapType===Pm,normalMapTangentSpace:Nt&&$.normalMapType===lh,metalnessMap:ie,roughnessMap:Zt,anisotropy:Fe,anisotropyMap:NA,clearcoat:PA,clearcoatMap:xt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ft,iridescence:Ag,iridescenceMap:pe,iridescenceThicknessMap:Jt,sheen:EA,sheenColorMap:zA,sheenRoughnessMap:ge,specularMap:me,specularColorMap:Ue,specularIntensityMap:Be,transmission:z,transmissionMap:le,thicknessMap:Pe,gradientMap:Ng,opaque:$.transparent===!1&&$.blending===_o,alphaMap:RA,alphaTest:jt,alphaHash:tt,combine:$.combine,mapUv:De&&T($.map.channel),aoMapUv:rA&&T($.aoMap.channel),lightMapUv:Qt&&T($.lightMap.channel),bumpMapUv:At&&T($.bumpMap.channel),normalMapUv:Nt&&T($.normalMap.channel),displacementMapUv:ut&&T($.displacementMap.channel),emissiveMapUv:fe&&T($.emissiveMap.channel),metalnessMapUv:ie&&T($.metalnessMap.channel),roughnessMapUv:Zt&&T($.roughnessMap.channel),anisotropyMapUv:NA&&T($.anisotropyMap.channel),clearcoatMapUv:xt&&T($.clearcoatMap.channel),clearcoatNormalMapUv:ht&&T($.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&T($.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T($.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&T($.iridescenceThicknessMap.channel),sheenColorMapUv:zA&&T($.sheenColorMap.channel),sheenRoughnessMapUv:ge&&T($.sheenRoughnessMap.channel),specularMapUv:me&&T($.specularMap.channel),specularColorMapUv:Ue&&T($.specularColorMap.channel),specularIntensityMapUv:Be&&T($.specularIntensityMap.channel),transmissionMapUv:le&&T($.transmissionMap.channel),thicknessMapUv:Pe&&T($.thicknessMap.channel),alphaMapUv:RA&&T($.alphaMap.channel),vertexTangents:!!VA.attributes.tangent&&(Nt||Fe),vertexColors:$.vertexColors,vertexAlphas:$.vertexColors===!0&&!!VA.attributes.color&&VA.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:_e,vertexUv3s:Yg,pointsUvs:TA.isPoints===!0&&!!VA.attributes.uv&&(De||RA),fog:!!$A,useFog:$.fog===!0,fogExp2:$A&&$A.isFogExp2,flatShading:$.flatShading===!0,sizeAttenuation:$.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:TA.isSkinnedMesh===!0,morphTargets:VA.morphAttributes.position!==void 0,morphNormals:VA.morphAttributes.normal!==void 0,morphColors:VA.morphAttributes.color!==void 0,morphTargetsCount:AA,morphTextureStride:CA,numDirLights:uA.directional.length,numPointLights:uA.point.length,numSpotLights:uA.spot.length,numSpotLightMaps:uA.spotLightMap.length,numRectAreaLights:uA.rectArea.length,numHemiLights:uA.hemi.length,numDirLightShadows:uA.directionalShadowMap.length,numPointLightShadows:uA.pointShadowMap.length,numSpotLightShadows:uA.spotShadowMap.length,numSpotLightShadowsWithMaps:uA.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:$.dithering,shadowMapEnabled:E.shadowMap.enabled&&rt.length>0,shadowMapType:E.shadowMap.type,toneMapping:zg,useLegacyLights:E._useLegacyLights,premultipliedAlpha:$.premultipliedAlpha,doubleSided:$.side===lB,flipSided:$.side===Di,useDepthPacking:$.depthPacking>=0,depthPacking:$.depthPacking||0,index0AttributeName:$.index0AttributeName,extensionDerivatives:Kt&&$.extensions.derivatives===!0,extensionFragDepth:Kt&&$.extensions.fragDepth===!0,extensionDrawBuffers:Kt&&$.extensions.drawBuffers===!0,extensionShaderTextureLOD:Kt&&$.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||B.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||B.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||B.has("EXT_shader_texture_lod"),customProgramCacheKey:$.customProgramCacheKey()}}function L($){const uA=[];if($.shaderID?uA.push($.shaderID):(uA.push($.customVertexShaderID),uA.push($.customFragmentShaderID)),$.defines!==void 0)for(const rt in $.defines)uA.push(rt),uA.push($.defines[rt]);return $.isRawShaderMaterial===!1&&(iA(uA,$),j(uA,$),uA.push(E.outputColorSpace)),uA.push($.customProgramCacheKey),uA.join()}function iA($,uA){$.push(uA.precision),$.push(uA.outputColorSpace),$.push(uA.envMapMode),$.push(uA.envMapCubeUVHeight),$.push(uA.mapUv),$.push(uA.alphaMapUv),$.push(uA.lightMapUv),$.push(uA.aoMapUv),$.push(uA.bumpMapUv),$.push(uA.normalMapUv),$.push(uA.displacementMapUv),$.push(uA.emissiveMapUv),$.push(uA.metalnessMapUv),$.push(uA.roughnessMapUv),$.push(uA.anisotropyMapUv),$.push(uA.clearcoatMapUv),$.push(uA.clearcoatNormalMapUv),$.push(uA.clearcoatRoughnessMapUv),$.push(uA.iridescenceMapUv),$.push(uA.iridescenceThicknessMapUv),$.push(uA.sheenColorMapUv),$.push(uA.sheenRoughnessMapUv),$.push(uA.specularMapUv),$.push(uA.specularColorMapUv),$.push(uA.specularIntensityMapUv),$.push(uA.transmissionMapUv),$.push(uA.thicknessMapUv),$.push(uA.combine),$.push(uA.fogExp2),$.push(uA.sizeAttenuation),$.push(uA.morphTargetsCount),$.push(uA.morphAttributeCount),$.push(uA.numDirLights),$.push(uA.numPointLights),$.push(uA.numSpotLights),$.push(uA.numSpotLightMaps),$.push(uA.numHemiLights),$.push(uA.numRectAreaLights),$.push(uA.numDirLightShadows),$.push(uA.numPointLightShadows),$.push(uA.numSpotLightShadows),$.push(uA.numSpotLightShadowsWithMaps),$.push(uA.shadowMapType),$.push(uA.toneMapping),$.push(uA.numClippingPlanes),$.push(uA.numClipIntersection),$.push(uA.depthPacking)}function j($,uA){a.disableAll(),uA.isWebGL2&&a.enable(0),uA.supportsVertexTextures&&a.enable(1),uA.instancing&&a.enable(2),uA.instancingColor&&a.enable(3),uA.matcap&&a.enable(4),uA.envMap&&a.enable(5),uA.normalMapObjectSpace&&a.enable(6),uA.normalMapTangentSpace&&a.enable(7),uA.clearcoat&&a.enable(8),uA.iridescence&&a.enable(9),uA.alphaTest&&a.enable(10),uA.vertexColors&&a.enable(11),uA.vertexAlphas&&a.enable(12),uA.vertexUv1s&&a.enable(13),uA.vertexUv2s&&a.enable(14),uA.vertexUv3s&&a.enable(15),uA.vertexTangents&&a.enable(16),uA.anisotropy&&a.enable(17),$.push(a.mask),a.disableAll(),uA.fog&&a.enable(0),uA.useFog&&a.enable(1),uA.flatShading&&a.enable(2),uA.logarithmicDepthBuffer&&a.enable(3),uA.skinning&&a.enable(4),uA.morphTargets&&a.enable(5),uA.morphNormals&&a.enable(6),uA.morphColors&&a.enable(7),uA.premultipliedAlpha&&a.enable(8),uA.shadowMapEnabled&&a.enable(9),uA.useLegacyLights&&a.enable(10),uA.doubleSided&&a.enable(11),uA.flipSided&&a.enable(12),uA.useDepthPacking&&a.enable(13),uA.dithering&&a.enable(14),uA.transmission&&a.enable(15),uA.sheen&&a.enable(16),uA.opaque&&a.enable(17),uA.pointsUvs&&a.enable(18),$.push(a.mask)}function gA($){const uA=P[$.type];let rt;if(uA){const Rt=kB[uA];rt=JR.clone(Rt.uniforms)}else rt=$.uniforms;return rt}function dA($,uA){let rt;for(let Rt=0,TA=f.length;Rt<TA;Rt++){const $A=f[Rt];if($A.cacheKey===uA){rt=$A,++rt.usedTimes;break}}return rt===void 0&&(rt=new ON(E,uA,$,r),f.push(rt)),rt}function fA($){if(--$.usedTimes===0){const uA=f.indexOf($);f[uA]=f[f.length-1],f.pop(),$.destroy()}}function pA($){D.remove($)}function YA(){D.dispose()}return{getParameters:x,getProgramCacheKey:L,getUniforms:gA,acquireProgram:dA,releaseProgram:fA,releaseShaderCache:pA,programs:f,dispose:YA}}function jN(){let E=new WeakMap;function t(r){let h=E.get(r);return h===void 0&&(h={},E.set(r,h)),h}function g(r){E.delete(r)}function B(r,h,a){E.get(r)[h]=a}function o(){E=new WeakMap}return{get:t,remove:g,update:B,dispose:o}}function $N(E,t){return E.groupOrder!==t.groupOrder?E.groupOrder-t.groupOrder:E.renderOrder!==t.renderOrder?E.renderOrder-t.renderOrder:E.material.id!==t.material.id?E.material.id-t.material.id:E.z!==t.z?E.z-t.z:E.id-t.id}function au(E,t){return E.groupOrder!==t.groupOrder?E.groupOrder-t.groupOrder:E.renderOrder!==t.renderOrder?E.renderOrder-t.renderOrder:E.z!==t.z?t.z-E.z:E.id-t.id}function hu(){const E=[];let t=0;const g=[],B=[],o=[];function r(){t=0,g.length=0,B.length=0,o.length=0}function h(S,F,J,P,T,x){let L=E[t];return L===void 0?(L={id:S.id,object:S,geometry:F,material:J,groupOrder:P,renderOrder:S.renderOrder,z:T,group:x},E[t]=L):(L.id=S.id,L.object=S,L.geometry=F,L.material=J,L.groupOrder=P,L.renderOrder=S.renderOrder,L.z=T,L.group=x),t++,L}function a(S,F,J,P,T,x){const L=h(S,F,J,P,T,x);J.transmission>0?B.push(L):J.transparent===!0?o.push(L):g.push(L)}function D(S,F,J,P,T,x){const L=h(S,F,J,P,T,x);J.transmission>0?B.unshift(L):J.transparent===!0?o.unshift(L):g.unshift(L)}function f(S,F){g.length>1&&g.sort(S||$N),B.length>1&&B.sort(F||au),o.length>1&&o.sort(F||au)}function m(){for(let S=t,F=E.length;S<F;S++){const J=E[S];if(J.id===null)break;J.id=null,J.object=null,J.geometry=null,J.material=null,J.group=null}}return{opaque:g,transmissive:B,transparent:o,init:r,push:a,unshift:D,finish:m,sort:f}}function AU(){let E=new WeakMap;function t(B,o){const r=E.get(B);let h;return r===void 0?(h=new hu,E.set(B,[h])):o>=r.length?(h=new hu,r.push(h)):h=r[o],h}function g(){E=new WeakMap}return{get:t,dispose:g}}function tU(){const E={};return{get:function(t){if(E[t.id]!==void 0)return E[t.id];let g;switch(t.type){case"DirectionalLight":g={direction:new bA,color:new Cg};break;case"SpotLight":g={position:new bA,direction:new bA,color:new Cg,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new bA,color:new Cg,distance:0,decay:0};break;case"HemisphereLight":g={direction:new bA,skyColor:new Cg,groundColor:new Cg};break;case"RectAreaLight":g={color:new Cg,position:new bA,halfWidth:new bA,halfHeight:new bA};break}return E[t.id]=g,g}}}function eU(){const E={};return{get:function(t){if(E[t.id]!==void 0)return E[t.id];let g;switch(t.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mg};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mg};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mg,shadowCameraNear:1,shadowCameraFar:1e3};break}return E[t.id]=g,g}}}let gU=0;function IU(E,t){return(t.castShadow?2:0)-(E.castShadow?2:0)+(t.map?1:0)-(E.map?1:0)}function iU(E,t){const g=new tU,B=eU(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)o.probe.push(new bA);const r=new bA,h=new hg,a=new hg;function D(m,S){let F=0,J=0,P=0;for(let rt=0;rt<9;rt++)o.probe[rt].set(0,0,0);let T=0,x=0,L=0,iA=0,j=0,gA=0,dA=0,fA=0,pA=0,YA=0;m.sort(IU);const $=S===!0?Math.PI:1;for(let rt=0,Rt=m.length;rt<Rt;rt++){const TA=m[rt],$A=TA.color,VA=TA.intensity,ft=TA.distance,it=TA.shadow&&TA.shadow.map?TA.shadow.map.texture:null;if(TA.isAmbientLight)F+=$A.r*VA*$,J+=$A.g*VA*$,P+=$A.b*VA*$;else if(TA.isLightProbe)for(let nt=0;nt<9;nt++)o.probe[nt].addScaledVector(TA.sh.coefficients[nt],VA);else if(TA.isDirectionalLight){const nt=g.get(TA);if(nt.color.copy(TA.color).multiplyScalar(TA.intensity*$),TA.castShadow){const V=TA.shadow,X=B.get(TA);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,o.directionalShadow[T]=X,o.directionalShadowMap[T]=it,o.directionalShadowMatrix[T]=TA.shadow.matrix,gA++}o.directional[T]=nt,T++}else if(TA.isSpotLight){const nt=g.get(TA);nt.position.setFromMatrixPosition(TA.matrixWorld),nt.color.copy($A).multiplyScalar(VA*$),nt.distance=ft,nt.coneCos=Math.cos(TA.angle),nt.penumbraCos=Math.cos(TA.angle*(1-TA.penumbra)),nt.decay=TA.decay,o.spot[L]=nt;const V=TA.shadow;if(TA.map&&(o.spotLightMap[pA]=TA.map,pA++,V.updateMatrices(TA),TA.castShadow&&YA++),o.spotLightMatrix[L]=V.matrix,TA.castShadow){const X=B.get(TA);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,o.spotShadow[L]=X,o.spotShadowMap[L]=it,fA++}L++}else if(TA.isRectAreaLight){const nt=g.get(TA);nt.color.copy($A).multiplyScalar(VA),nt.halfWidth.set(TA.width*.5,0,0),nt.halfHeight.set(0,TA.height*.5,0),o.rectArea[iA]=nt,iA++}else if(TA.isPointLight){const nt=g.get(TA);if(nt.color.copy(TA.color).multiplyScalar(TA.intensity*$),nt.distance=TA.distance,nt.decay=TA.decay,TA.castShadow){const V=TA.shadow,X=B.get(TA);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,o.pointShadow[x]=X,o.pointShadowMap[x]=it,o.pointShadowMatrix[x]=TA.shadow.matrix,dA++}o.point[x]=nt,x++}else if(TA.isHemisphereLight){const nt=g.get(TA);nt.skyColor.copy(TA.color).multiplyScalar(VA*$),nt.groundColor.copy(TA.groundColor).multiplyScalar(VA*$),o.hemi[j]=nt,j++}}iA>0&&(t.isWebGL2||E.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ee.LTC_FLOAT_1,o.rectAreaLTC2=ee.LTC_FLOAT_2):E.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=ee.LTC_HALF_1,o.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=F,o.ambient[1]=J,o.ambient[2]=P;const uA=o.hash;(uA.directionalLength!==T||uA.pointLength!==x||uA.spotLength!==L||uA.rectAreaLength!==iA||uA.hemiLength!==j||uA.numDirectionalShadows!==gA||uA.numPointShadows!==dA||uA.numSpotShadows!==fA||uA.numSpotMaps!==pA)&&(o.directional.length=T,o.spot.length=L,o.rectArea.length=iA,o.point.length=x,o.hemi.length=j,o.directionalShadow.length=gA,o.directionalShadowMap.length=gA,o.pointShadow.length=dA,o.pointShadowMap.length=dA,o.spotShadow.length=fA,o.spotShadowMap.length=fA,o.directionalShadowMatrix.length=gA,o.pointShadowMatrix.length=dA,o.spotLightMatrix.length=fA+pA-YA,o.spotLightMap.length=pA,o.numSpotLightShadowsWithMaps=YA,uA.directionalLength=T,uA.pointLength=x,uA.spotLength=L,uA.rectAreaLength=iA,uA.hemiLength=j,uA.numDirectionalShadows=gA,uA.numPointShadows=dA,uA.numSpotShadows=fA,uA.numSpotMaps=pA,o.version=gU++)}function f(m,S){let F=0,J=0,P=0,T=0,x=0;const L=S.matrixWorldInverse;for(let iA=0,j=m.length;iA<j;iA++){const gA=m[iA];if(gA.isDirectionalLight){const dA=o.directional[F];dA.direction.setFromMatrixPosition(gA.matrixWorld),r.setFromMatrixPosition(gA.target.matrixWorld),dA.direction.sub(r),dA.direction.transformDirection(L),F++}else if(gA.isSpotLight){const dA=o.spot[P];dA.position.setFromMatrixPosition(gA.matrixWorld),dA.position.applyMatrix4(L),dA.direction.setFromMatrixPosition(gA.matrixWorld),r.setFromMatrixPosition(gA.target.matrixWorld),dA.direction.sub(r),dA.direction.transformDirection(L),P++}else if(gA.isRectAreaLight){const dA=o.rectArea[T];dA.position.setFromMatrixPosition(gA.matrixWorld),dA.position.applyMatrix4(L),a.identity(),h.copy(gA.matrixWorld),h.premultiply(L),a.extractRotation(h),dA.halfWidth.set(gA.width*.5,0,0),dA.halfHeight.set(0,gA.height*.5,0),dA.halfWidth.applyMatrix4(a),dA.halfHeight.applyMatrix4(a),T++}else if(gA.isPointLight){const dA=o.point[J];dA.position.setFromMatrixPosition(gA.matrixWorld),dA.position.applyMatrix4(L),J++}else if(gA.isHemisphereLight){const dA=o.hemi[x];dA.direction.setFromMatrixPosition(gA.matrixWorld),dA.direction.transformDirection(L),x++}}}return{setup:D,setupView:f,state:o}}function cu(E,t){const g=new iU(E,t),B=[],o=[];function r(){B.length=0,o.length=0}function h(S){B.push(S)}function a(S){o.push(S)}function D(S){g.setup(B,S)}function f(S){g.setupView(B,S)}return{init:r,state:{lightsArray:B,shadowsArray:o,lights:g},setupLights:D,setupLightsView:f,pushLight:h,pushShadow:a}}function BU(E,t){let g=new WeakMap;function B(r,h=0){const a=g.get(r);let D;return a===void 0?(D=new cu(E,t),g.set(r,[D])):h>=a.length?(D=new cu(E,t),a.push(D)):D=a[h],D}function o(){g=new WeakMap}return{get:B,dispose:o}}class CU extends uB{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nU extends uB{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EU=`uniform sampler2D shadow_pass;
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
}`;function QU(E,t,g){let B=new Dh;const o=new Mg,r=new Mg,h=new Og,a=new CU({depthPacking:Wm}),D=new nU,f={},m=g.maxTextureSize,S={[QC]:Di,[Di]:QC,[lB]:lB},F=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mg},radius:{value:4}},vertexShader:oU,fragmentShader:EU}),J=F.clone();J.defines.HORIZONTAL_PASS=1;const P=new Pi;P.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ui(P,F),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let L=this.type;this.render=function(dA,fA,pA){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||dA.length===0)return;const YA=E.getRenderTarget(),$=E.getActiveCubeFace(),uA=E.getActiveMipmapLevel(),rt=E.state;rt.setBlending(JC),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Rt=L!==nC&&this.type===nC,TA=L===nC&&this.type!==nC;for(let $A=0,VA=dA.length;$A<VA;$A++){const ft=dA[$A],it=ft.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;o.copy(it.mapSize);const nt=it.getFrameExtents();if(o.multiply(nt),r.copy(it.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(r.x=Math.floor(m/nt.x),o.x=r.x*nt.x,it.mapSize.x=r.x),o.y>m&&(r.y=Math.floor(m/nt.y),o.y=r.y*nt.y,it.mapSize.y=r.y)),it.map===null||Rt===!0||TA===!0){const X=this.type!==nC?{minFilter:KI,magFilter:KI}:{};it.map!==null&&it.map.dispose(),it.map=new bn(o.x,o.y,X),it.map.texture.name=ft.name+".shadowMap",it.camera.updateProjectionMatrix()}E.setRenderTarget(it.map),E.clear();const V=it.getViewportCount();for(let X=0;X<V;X++){const AA=it.getViewport(X);h.set(r.x*AA.x,r.y*AA.y,r.x*AA.z,r.y*AA.w),rt.viewport(h),it.updateMatrices(ft,X),B=it.getFrustum(),gA(fA,pA,it.camera,ft,this.type)}it.isPointLightShadow!==!0&&this.type===nC&&iA(it,pA),it.needsUpdate=!1}L=this.type,x.needsUpdate=!1,E.setRenderTarget(YA,$,uA)};function iA(dA,fA){const pA=t.update(T);F.defines.VSM_SAMPLES!==dA.blurSamples&&(F.defines.VSM_SAMPLES=dA.blurSamples,J.defines.VSM_SAMPLES=dA.blurSamples,F.needsUpdate=!0,J.needsUpdate=!0),dA.mapPass===null&&(dA.mapPass=new bn(o.x,o.y)),F.uniforms.shadow_pass.value=dA.map.texture,F.uniforms.resolution.value=dA.mapSize,F.uniforms.radius.value=dA.radius,E.setRenderTarget(dA.mapPass),E.clear(),E.renderBufferDirect(fA,null,pA,F,T,null),J.uniforms.shadow_pass.value=dA.mapPass.texture,J.uniforms.resolution.value=dA.mapSize,J.uniforms.radius.value=dA.radius,E.setRenderTarget(dA.map),E.clear(),E.renderBufferDirect(fA,null,pA,J,T,null)}function j(dA,fA,pA,YA){let $=null;const uA=pA.isPointLight===!0?dA.customDistanceMaterial:dA.customDepthMaterial;if(uA!==void 0)$=uA;else if($=pA.isPointLight===!0?D:a,E.localClippingEnabled&&fA.clipShadows===!0&&Array.isArray(fA.clippingPlanes)&&fA.clippingPlanes.length!==0||fA.displacementMap&&fA.displacementScale!==0||fA.alphaMap&&fA.alphaTest>0||fA.map&&fA.alphaTest>0){const rt=$.uuid,Rt=fA.uuid;let TA=f[rt];TA===void 0&&(TA={},f[rt]=TA);let $A=TA[Rt];$A===void 0&&($A=$.clone(),TA[Rt]=$A),$=$A}if($.visible=fA.visible,$.wireframe=fA.wireframe,YA===nC?$.side=fA.shadowSide!==null?fA.shadowSide:fA.side:$.side=fA.shadowSide!==null?fA.shadowSide:S[fA.side],$.alphaMap=fA.alphaMap,$.alphaTest=fA.alphaTest,$.map=fA.map,$.clipShadows=fA.clipShadows,$.clippingPlanes=fA.clippingPlanes,$.clipIntersection=fA.clipIntersection,$.displacementMap=fA.displacementMap,$.displacementScale=fA.displacementScale,$.displacementBias=fA.displacementBias,$.wireframeLinewidth=fA.wireframeLinewidth,$.linewidth=fA.linewidth,pA.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const rt=E.properties.get($);rt.light=pA}return $}function gA(dA,fA,pA,YA,$){if(dA.visible===!1)return;if(dA.layers.test(fA.layers)&&(dA.isMesh||dA.isLine||dA.isPoints)&&(dA.castShadow||dA.receiveShadow&&$===nC)&&(!dA.frustumCulled||B.intersectsObject(dA))){dA.modelViewMatrix.multiplyMatrices(pA.matrixWorldInverse,dA.matrixWorld);const Rt=t.update(dA),TA=dA.material;if(Array.isArray(TA)){const $A=Rt.groups;for(let VA=0,ft=$A.length;VA<ft;VA++){const it=$A[VA],nt=TA[it.materialIndex];if(nt&&nt.visible){const V=j(dA,nt,YA,$);E.renderBufferDirect(pA,null,Rt,V,dA,it)}}}else if(TA.visible){const $A=j(dA,TA,YA,$);E.renderBufferDirect(pA,null,Rt,$A,dA,null)}}const rt=dA.children;for(let Rt=0,TA=rt.length;Rt<TA;Rt++)gA(rt[Rt],fA,pA,YA,$)}}function sU(E,t,g){const B=g.isWebGL2;function o(){let RA=!1;const jt=new Og;let tt=null;const Kt=new Og(0,0,0,0);return{setMask:function(Ot){tt!==Ot&&!RA&&(E.colorMask(Ot,Ot,Ot,Ot),tt=Ot)},setLocked:function(Ot){RA=Ot},setClear:function(Ot,_e,Yg,zg,QI){QI===!0&&(Ot*=zg,_e*=zg,Yg*=zg),jt.set(Ot,_e,Yg,zg),Kt.equals(jt)===!1&&(E.clearColor(Ot,_e,Yg,zg),Kt.copy(jt))},reset:function(){RA=!1,tt=null,Kt.set(-1,0,0,0)}}}function r(){let RA=!1,jt=null,tt=null,Kt=null;return{setTest:function(Ot){Ot?Pt(E.DEPTH_TEST):Wt(E.DEPTH_TEST)},setMask:function(Ot){jt!==Ot&&!RA&&(E.depthMask(Ot),jt=Ot)},setFunc:function(Ot){if(tt!==Ot){switch(Ot){case um:E.depthFunc(E.NEVER);break;case Dm:E.depthFunc(E.ALWAYS);break;case fm:E.depthFunc(E.LESS);break;case eh:E.depthFunc(E.LEQUAL);break;case pm:E.depthFunc(E.EQUAL);break;case wm:E.depthFunc(E.GEQUAL);break;case ym:E.depthFunc(E.GREATER);break;case Mm:E.depthFunc(E.NOTEQUAL);break;default:E.depthFunc(E.LEQUAL)}tt=Ot}},setLocked:function(Ot){RA=Ot},setClear:function(Ot){Kt!==Ot&&(E.clearDepth(Ot),Kt=Ot)},reset:function(){RA=!1,jt=null,tt=null,Kt=null}}}function h(){let RA=!1,jt=null,tt=null,Kt=null,Ot=null,_e=null,Yg=null,zg=null,QI=null;return{setTest:function(Ug){RA||(Ug?Pt(E.STENCIL_TEST):Wt(E.STENCIL_TEST))},setMask:function(Ug){jt!==Ug&&!RA&&(E.stencilMask(Ug),jt=Ug)},setFunc:function(Ug,Vg,sI){(tt!==Ug||Kt!==Vg||Ot!==sI)&&(E.stencilFunc(Ug,Vg,sI),tt=Ug,Kt=Vg,Ot=sI)},setOp:function(Ug,Vg,sI){(_e!==Ug||Yg!==Vg||zg!==sI)&&(E.stencilOp(Ug,Vg,sI),_e=Ug,Yg=Vg,zg=sI)},setLocked:function(Ug){RA=Ug},setClear:function(Ug){QI!==Ug&&(E.clearStencil(Ug),QI=Ug)},reset:function(){RA=!1,jt=null,tt=null,Kt=null,Ot=null,_e=null,Yg=null,zg=null,QI=null}}}const a=new o,D=new r,f=new h,m=new WeakMap,S=new WeakMap;let F={},J={},P=new WeakMap,T=[],x=null,L=!1,iA=null,j=null,gA=null,dA=null,fA=null,pA=null,YA=null,$=!1,uA=null,rt=null,Rt=null,TA=null,$A=null;const VA=E.getParameter(E.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ft=!1,it=0;const nt=E.getParameter(E.VERSION);nt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(nt)[1]),ft=it>=1):nt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),ft=it>=2);let V=null,X={};const AA=E.getParameter(E.SCISSOR_BOX),CA=E.getParameter(E.VIEWPORT),kA=new Og().fromArray(AA),qA=new Og().fromArray(CA);function gt(RA,jt,tt,Kt){const Ot=new Uint8Array(4),_e=E.createTexture();E.bindTexture(RA,_e),E.texParameteri(RA,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(RA,E.TEXTURE_MAG_FILTER,E.NEAREST);for(let Yg=0;Yg<tt;Yg++)B&&(RA===E.TEXTURE_3D||RA===E.TEXTURE_2D_ARRAY)?E.texImage3D(jt,0,E.RGBA,1,1,Kt,0,E.RGBA,E.UNSIGNED_BYTE,Ot):E.texImage2D(jt+Yg,0,E.RGBA,1,1,0,E.RGBA,E.UNSIGNED_BYTE,Ot);return _e}const wt={};wt[E.TEXTURE_2D]=gt(E.TEXTURE_2D,E.TEXTURE_2D,1),wt[E.TEXTURE_CUBE_MAP]=gt(E.TEXTURE_CUBE_MAP,E.TEXTURE_CUBE_MAP_POSITIVE_X,6),B&&(wt[E.TEXTURE_2D_ARRAY]=gt(E.TEXTURE_2D_ARRAY,E.TEXTURE_2D_ARRAY,1,1),wt[E.TEXTURE_3D]=gt(E.TEXTURE_3D,E.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),D.setClear(1),f.setClear(0),Pt(E.DEPTH_TEST),D.setFunc(eh),ut(!1),fe(Ad),Pt(E.CULL_FACE),At(JC);function Pt(RA){F[RA]!==!0&&(E.enable(RA),F[RA]=!0)}function Wt(RA){F[RA]!==!1&&(E.disable(RA),F[RA]=!1)}function De(RA,jt){return J[RA]!==jt?(E.bindFramebuffer(RA,jt),J[RA]=jt,B&&(RA===E.DRAW_FRAMEBUFFER&&(J[E.FRAMEBUFFER]=jt),RA===E.FRAMEBUFFER&&(J[E.DRAW_FRAMEBUFFER]=jt)),!0):!1}function cg(RA,jt){let tt=T,Kt=!1;if(RA)if(tt=P.get(jt),tt===void 0&&(tt=[],P.set(jt,tt)),RA.isWebGLMultipleRenderTargets){const Ot=RA.texture;if(tt.length!==Ot.length||tt[0]!==E.COLOR_ATTACHMENT0){for(let _e=0,Yg=Ot.length;_e<Yg;_e++)tt[_e]=E.COLOR_ATTACHMENT0+_e;tt.length=Ot.length,Kt=!0}}else tt[0]!==E.COLOR_ATTACHMENT0&&(tt[0]=E.COLOR_ATTACHMENT0,Kt=!0);else tt[0]!==E.BACK&&(tt[0]=E.BACK,Kt=!0);Kt&&(g.isWebGL2?E.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function se(RA){return x!==RA?(E.useProgram(RA),x=RA,!0):!1}const rA={[To]:E.FUNC_ADD,[nm]:E.FUNC_SUBTRACT,[om]:E.FUNC_REVERSE_SUBTRACT};if(B)rA[Id]=E.MIN,rA[id]=E.MAX;else{const RA=t.get("EXT_blend_minmax");RA!==null&&(rA[Id]=RA.MIN_EXT,rA[id]=RA.MAX_EXT)}const Qt={[Em]:E.ZERO,[Qm]:E.ONE,[sm]:E.SRC_COLOR,[_u]:E.SRC_ALPHA,[dm]:E.SRC_ALPHA_SATURATE,[cm]:E.DST_COLOR,[am]:E.DST_ALPHA,[rm]:E.ONE_MINUS_SRC_COLOR,[Wu]:E.ONE_MINUS_SRC_ALPHA,[lm]:E.ONE_MINUS_DST_COLOR,[hm]:E.ONE_MINUS_DST_ALPHA};function At(RA,jt,tt,Kt,Ot,_e,Yg,zg){if(RA===JC){L===!0&&(Wt(E.BLEND),L=!1);return}if(L===!1&&(Pt(E.BLEND),L=!0),RA!==Cm){if(RA!==iA||zg!==$){if((j!==To||fA!==To)&&(E.blendEquation(E.FUNC_ADD),j=To,fA=To),zg)switch(RA){case _o:E.blendFuncSeparate(E.ONE,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case td:E.blendFunc(E.ONE,E.ONE);break;case ed:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case gd:E.blendFuncSeparate(E.ZERO,E.SRC_COLOR,E.ZERO,E.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",RA);break}else switch(RA){case _o:E.blendFuncSeparate(E.SRC_ALPHA,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case td:E.blendFunc(E.SRC_ALPHA,E.ONE);break;case ed:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case gd:E.blendFunc(E.ZERO,E.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",RA);break}gA=null,dA=null,pA=null,YA=null,iA=RA,$=zg}return}Ot=Ot||jt,_e=_e||tt,Yg=Yg||Kt,(jt!==j||Ot!==fA)&&(E.blendEquationSeparate(rA[jt],rA[Ot]),j=jt,fA=Ot),(tt!==gA||Kt!==dA||_e!==pA||Yg!==YA)&&(E.blendFuncSeparate(Qt[tt],Qt[Kt],Qt[_e],Qt[Yg]),gA=tt,dA=Kt,pA=_e,YA=Yg),iA=RA,$=!1}function Nt(RA,jt){RA.side===lB?Wt(E.CULL_FACE):Pt(E.CULL_FACE);let tt=RA.side===Di;jt&&(tt=!tt),ut(tt),RA.blending===_o&&RA.transparent===!1?At(JC):At(RA.blending,RA.blendEquation,RA.blendSrc,RA.blendDst,RA.blendEquationAlpha,RA.blendSrcAlpha,RA.blendDstAlpha,RA.premultipliedAlpha),D.setFunc(RA.depthFunc),D.setTest(RA.depthTest),D.setMask(RA.depthWrite),a.setMask(RA.colorWrite);const Kt=RA.stencilWrite;f.setTest(Kt),Kt&&(f.setMask(RA.stencilWriteMask),f.setFunc(RA.stencilFunc,RA.stencilRef,RA.stencilFuncMask),f.setOp(RA.stencilFail,RA.stencilZFail,RA.stencilZPass)),Zt(RA.polygonOffset,RA.polygonOffsetFactor,RA.polygonOffsetUnits),RA.alphaToCoverage===!0?Pt(E.SAMPLE_ALPHA_TO_COVERAGE):Wt(E.SAMPLE_ALPHA_TO_COVERAGE)}function ut(RA){uA!==RA&&(RA?E.frontFace(E.CW):E.frontFace(E.CCW),uA=RA)}function fe(RA){RA!==Im?(Pt(E.CULL_FACE),RA!==rt&&(RA===Ad?E.cullFace(E.BACK):RA===im?E.cullFace(E.FRONT):E.cullFace(E.FRONT_AND_BACK))):Wt(E.CULL_FACE),rt=RA}function ie(RA){RA!==Rt&&(ft&&E.lineWidth(RA),Rt=RA)}function Zt(RA,jt,tt){RA?(Pt(E.POLYGON_OFFSET_FILL),(TA!==jt||$A!==tt)&&(E.polygonOffset(jt,tt),TA=jt,$A=tt)):Wt(E.POLYGON_OFFSET_FILL)}function Fe(RA){RA?Pt(E.SCISSOR_TEST):Wt(E.SCISSOR_TEST)}function PA(RA){RA===void 0&&(RA=E.TEXTURE0+VA-1),V!==RA&&(E.activeTexture(RA),V=RA)}function Ag(RA,jt,tt){tt===void 0&&(V===null?tt=E.TEXTURE0+VA-1:tt=V);let Kt=X[tt];Kt===void 0&&(Kt={type:void 0,texture:void 0},X[tt]=Kt),(Kt.type!==RA||Kt.texture!==jt)&&(V!==tt&&(E.activeTexture(tt),V=tt),E.bindTexture(RA,jt||wt[RA]),Kt.type=RA,Kt.texture=jt)}function EA(){const RA=X[V];RA!==void 0&&RA.type!==void 0&&(E.bindTexture(RA.type,null),RA.type=void 0,RA.texture=void 0)}function z(){try{E.compressedTexImage2D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function NA(){try{E.compressedTexImage3D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function xt(){try{E.texSubImage2D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function ht(){try{E.texSubImage3D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function Ft(){try{E.compressedTexSubImage2D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function pe(){try{E.compressedTexSubImage3D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function Jt(){try{E.texStorage2D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function zA(){try{E.texStorage3D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function ge(){try{E.texImage2D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function me(){try{E.texImage3D.apply(E,arguments)}catch(RA){console.error("THREE.WebGLState:",RA)}}function Ue(RA){kA.equals(RA)===!1&&(E.scissor(RA.x,RA.y,RA.z,RA.w),kA.copy(RA))}function Be(RA){qA.equals(RA)===!1&&(E.viewport(RA.x,RA.y,RA.z,RA.w),qA.copy(RA))}function le(RA,jt){let tt=S.get(jt);tt===void 0&&(tt=new WeakMap,S.set(jt,tt));let Kt=tt.get(RA);Kt===void 0&&(Kt=E.getUniformBlockIndex(jt,RA.name),tt.set(RA,Kt))}function Pe(RA,jt){const Kt=S.get(jt).get(RA);m.get(jt)!==Kt&&(E.uniformBlockBinding(jt,Kt,RA.__bindingPointIndex),m.set(jt,Kt))}function Ng(){E.disable(E.BLEND),E.disable(E.CULL_FACE),E.disable(E.DEPTH_TEST),E.disable(E.POLYGON_OFFSET_FILL),E.disable(E.SCISSOR_TEST),E.disable(E.STENCIL_TEST),E.disable(E.SAMPLE_ALPHA_TO_COVERAGE),E.blendEquation(E.FUNC_ADD),E.blendFunc(E.ONE,E.ZERO),E.blendFuncSeparate(E.ONE,E.ZERO,E.ONE,E.ZERO),E.colorMask(!0,!0,!0,!0),E.clearColor(0,0,0,0),E.depthMask(!0),E.depthFunc(E.LESS),E.clearDepth(1),E.stencilMask(4294967295),E.stencilFunc(E.ALWAYS,0,4294967295),E.stencilOp(E.KEEP,E.KEEP,E.KEEP),E.clearStencil(0),E.cullFace(E.BACK),E.frontFace(E.CCW),E.polygonOffset(0,0),E.activeTexture(E.TEXTURE0),E.bindFramebuffer(E.FRAMEBUFFER,null),B===!0&&(E.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),E.bindFramebuffer(E.READ_FRAMEBUFFER,null)),E.useProgram(null),E.lineWidth(1),E.scissor(0,0,E.canvas.width,E.canvas.height),E.viewport(0,0,E.canvas.width,E.canvas.height),F={},V=null,X={},J={},P=new WeakMap,T=[],x=null,L=!1,iA=null,j=null,gA=null,dA=null,fA=null,pA=null,YA=null,$=!1,uA=null,rt=null,Rt=null,TA=null,$A=null,kA.set(0,0,E.canvas.width,E.canvas.height),qA.set(0,0,E.canvas.width,E.canvas.height),a.reset(),D.reset(),f.reset()}return{buffers:{color:a,depth:D,stencil:f},enable:Pt,disable:Wt,bindFramebuffer:De,drawBuffers:cg,useProgram:se,setBlending:At,setMaterial:Nt,setFlipSided:ut,setCullFace:fe,setLineWidth:ie,setPolygonOffset:Zt,setScissorTest:Fe,activeTexture:PA,bindTexture:Ag,unbindTexture:EA,compressedTexImage2D:z,compressedTexImage3D:NA,texImage2D:ge,texImage3D:me,updateUBOMapping:le,uniformBlockBinding:Pe,texStorage2D:Jt,texStorage3D:zA,texSubImage2D:xt,texSubImage3D:ht,compressedTexSubImage2D:Ft,compressedTexSubImage3D:pe,scissor:Ue,viewport:Be,reset:Ng}}function rU(E,t,g,B,o,r,h){const a=o.isWebGL2,D=o.maxTextures,f=o.maxCubemapSize,m=o.maxTextureSize,S=o.maxSamples,F=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,J=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),P=new WeakMap;let T;const x=new WeakMap;let L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function iA(EA,z){return L?new OffscreenCanvas(EA,z):fQ("canvas")}function j(EA,z,NA,xt){let ht=1;if((EA.width>xt||EA.height>xt)&&(ht=xt/Math.max(EA.width,EA.height)),ht<1||z===!0)if(typeof HTMLImageElement<"u"&&EA instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&EA instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&EA instanceof ImageBitmap){const Ft=z?Cr:Math.floor,pe=Ft(ht*EA.width),Jt=Ft(ht*EA.height);T===void 0&&(T=iA(pe,Jt));const zA=NA?iA(pe,Jt):T;return zA.width=pe,zA.height=Jt,zA.getContext("2d").drawImage(EA,0,0,pe,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+EA.width+"x"+EA.height+") to ("+pe+"x"+Jt+")."),zA}else return"data"in EA&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+EA.width+"x"+EA.height+")."),EA;return EA}function gA(EA){return oh(EA.width)&&oh(EA.height)}function dA(EA){return a?!1:EA.wrapS!==_i||EA.wrapT!==_i||EA.minFilter!==KI&&EA.minFilter!==li}function fA(EA,z){return EA.generateMipmaps&&z&&EA.minFilter!==KI&&EA.minFilter!==li}function pA(EA){E.generateMipmap(EA)}function YA(EA,z,NA,xt,ht=!1){if(a===!1)return z;if(EA!==null){if(E[EA]!==void 0)return E[EA];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+EA+"'")}let Ft=z;return z===E.RED&&(NA===E.FLOAT&&(Ft=E.R32F),NA===E.HALF_FLOAT&&(Ft=E.R16F),NA===E.UNSIGNED_BYTE&&(Ft=E.R8)),z===E.RED_INTEGER&&(NA===E.UNSIGNED_BYTE&&(Ft=E.R8UI),NA===E.UNSIGNED_SHORT&&(Ft=E.R16UI),NA===E.UNSIGNED_INT&&(Ft=E.R32UI),NA===E.BYTE&&(Ft=E.R8I),NA===E.SHORT&&(Ft=E.R16I),NA===E.INT&&(Ft=E.R32I)),z===E.RG&&(NA===E.FLOAT&&(Ft=E.RG32F),NA===E.HALF_FLOAT&&(Ft=E.RG16F),NA===E.UNSIGNED_BYTE&&(Ft=E.RG8)),z===E.RGBA&&(NA===E.FLOAT&&(Ft=E.RGBA32F),NA===E.HALF_FLOAT&&(Ft=E.RGBA16F),NA===E.UNSIGNED_BYTE&&(Ft=xt===tg&&ht===!1?E.SRGB8_ALPHA8:E.RGBA8),NA===E.UNSIGNED_SHORT_4_4_4_4&&(Ft=E.RGBA4),NA===E.UNSIGNED_SHORT_5_5_5_1&&(Ft=E.RGB5_A1)),(Ft===E.R16F||Ft===E.R32F||Ft===E.RG16F||Ft===E.RG32F||Ft===E.RGBA16F||Ft===E.RGBA32F)&&t.get("EXT_color_buffer_float"),Ft}function $(EA,z,NA){return fA(EA,NA)===!0||EA.isFramebufferTexture&&EA.minFilter!==KI&&EA.minFilter!==li?Math.log2(Math.max(z.width,z.height))+1:EA.mipmaps!==void 0&&EA.mipmaps.length>0?EA.mipmaps.length:EA.isCompressedTexture&&Array.isArray(EA.image)?z.mipmaps.length:1}function uA(EA){return EA===KI||EA===ih||EA===gr?E.NEAREST:E.LINEAR}function rt(EA){const z=EA.target;z.removeEventListener("dispose",rt),TA(z),z.isVideoTexture&&P.delete(z)}function Rt(EA){const z=EA.target;z.removeEventListener("dispose",Rt),VA(z)}function TA(EA){const z=B.get(EA);if(z.__webglInit===void 0)return;const NA=EA.source,xt=x.get(NA);if(xt){const ht=xt[z.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&$A(EA),Object.keys(xt).length===0&&x.delete(NA)}B.remove(EA)}function $A(EA){const z=B.get(EA);E.deleteTexture(z.__webglTexture);const NA=EA.source,xt=x.get(NA);delete xt[z.__cacheKey],h.memory.textures--}function VA(EA){const z=EA.texture,NA=B.get(EA),xt=B.get(z);if(xt.__webglTexture!==void 0&&(E.deleteTexture(xt.__webglTexture),h.memory.textures--),EA.depthTexture&&EA.depthTexture.dispose(),EA.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(NA.__webglFramebuffer[ht]))for(let Ft=0;Ft<NA.__webglFramebuffer[ht].length;Ft++)E.deleteFramebuffer(NA.__webglFramebuffer[ht][Ft]);else E.deleteFramebuffer(NA.__webglFramebuffer[ht]);NA.__webglDepthbuffer&&E.deleteRenderbuffer(NA.__webglDepthbuffer[ht])}else{if(Array.isArray(NA.__webglFramebuffer))for(let ht=0;ht<NA.__webglFramebuffer.length;ht++)E.deleteFramebuffer(NA.__webglFramebuffer[ht]);else E.deleteFramebuffer(NA.__webglFramebuffer);if(NA.__webglDepthbuffer&&E.deleteRenderbuffer(NA.__webglDepthbuffer),NA.__webglMultisampledFramebuffer&&E.deleteFramebuffer(NA.__webglMultisampledFramebuffer),NA.__webglColorRenderbuffer)for(let ht=0;ht<NA.__webglColorRenderbuffer.length;ht++)NA.__webglColorRenderbuffer[ht]&&E.deleteRenderbuffer(NA.__webglColorRenderbuffer[ht]);NA.__webglDepthRenderbuffer&&E.deleteRenderbuffer(NA.__webglDepthRenderbuffer)}if(EA.isWebGLMultipleRenderTargets)for(let ht=0,Ft=z.length;ht<Ft;ht++){const pe=B.get(z[ht]);pe.__webglTexture&&(E.deleteTexture(pe.__webglTexture),h.memory.textures--),B.remove(z[ht])}B.remove(z),B.remove(EA)}let ft=0;function it(){ft=0}function nt(){const EA=ft;return EA>=D&&console.warn("THREE.WebGLTextures: Trying to use "+EA+" texture units while this GPU supports only "+D),ft+=1,EA}function V(EA){const z=[];return z.push(EA.wrapS),z.push(EA.wrapT),z.push(EA.wrapR||0),z.push(EA.magFilter),z.push(EA.minFilter),z.push(EA.anisotropy),z.push(EA.internalFormat),z.push(EA.format),z.push(EA.type),z.push(EA.generateMipmaps),z.push(EA.premultiplyAlpha),z.push(EA.flipY),z.push(EA.unpackAlignment),z.push(EA.colorSpace),z.join()}function X(EA,z){const NA=B.get(EA);if(EA.isVideoTexture&&PA(EA),EA.isRenderTargetTexture===!1&&EA.version>0&&NA.__version!==EA.version){const xt=EA.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(NA,EA,z);return}}g.bindTexture(E.TEXTURE_2D,NA.__webglTexture,E.TEXTURE0+z)}function AA(EA,z){const NA=B.get(EA);if(EA.version>0&&NA.__version!==EA.version){De(NA,EA,z);return}g.bindTexture(E.TEXTURE_2D_ARRAY,NA.__webglTexture,E.TEXTURE0+z)}function CA(EA,z){const NA=B.get(EA);if(EA.version>0&&NA.__version!==EA.version){De(NA,EA,z);return}g.bindTexture(E.TEXTURE_3D,NA.__webglTexture,E.TEXTURE0+z)}function kA(EA,z){const NA=B.get(EA);if(EA.version>0&&NA.__version!==EA.version){cg(NA,EA,z);return}g.bindTexture(E.TEXTURE_CUBE_MAP,NA.__webglTexture,E.TEXTURE0+z)}const qA={[Xo]:E.REPEAT,[_i]:E.CLAMP_TO_EDGE,[ir]:E.MIRRORED_REPEAT},gt={[KI]:E.NEAREST,[ih]:E.NEAREST_MIPMAP_NEAREST,[gr]:E.NEAREST_MIPMAP_LINEAR,[li]:E.LINEAR,[Vu]:E.LINEAR_MIPMAP_NEAREST,[xn]:E.LINEAR_MIPMAP_LINEAR},wt={[Vm]:E.NEVER,[tR]:E.ALWAYS,[Zm]:E.LESS,[zm]:E.LEQUAL,[Xm]:E.EQUAL,[AR]:E.GEQUAL,[jm]:E.GREATER,[$m]:E.NOTEQUAL};function Pt(EA,z,NA){if(NA?(E.texParameteri(EA,E.TEXTURE_WRAP_S,qA[z.wrapS]),E.texParameteri(EA,E.TEXTURE_WRAP_T,qA[z.wrapT]),(EA===E.TEXTURE_3D||EA===E.TEXTURE_2D_ARRAY)&&E.texParameteri(EA,E.TEXTURE_WRAP_R,qA[z.wrapR]),E.texParameteri(EA,E.TEXTURE_MAG_FILTER,gt[z.magFilter]),E.texParameteri(EA,E.TEXTURE_MIN_FILTER,gt[z.minFilter])):(E.texParameteri(EA,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(EA,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),(EA===E.TEXTURE_3D||EA===E.TEXTURE_2D_ARRAY)&&E.texParameteri(EA,E.TEXTURE_WRAP_R,E.CLAMP_TO_EDGE),(z.wrapS!==_i||z.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),E.texParameteri(EA,E.TEXTURE_MAG_FILTER,uA(z.magFilter)),E.texParameteri(EA,E.TEXTURE_MIN_FILTER,uA(z.minFilter)),z.minFilter!==KI&&z.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),z.compareFunction&&(E.texParameteri(EA,E.TEXTURE_COMPARE_MODE,E.COMPARE_REF_TO_TEXTURE),E.texParameteri(EA,E.TEXTURE_COMPARE_FUNC,wt[z.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const xt=t.get("EXT_texture_filter_anisotropic");if(z.magFilter===KI||z.minFilter!==gr&&z.minFilter!==xn||z.type===oC&&t.has("OES_texture_float_linear")===!1||a===!1&&z.type===uQ&&t.has("OES_texture_half_float_linear")===!1)return;(z.anisotropy>1||B.get(z).__currentAnisotropy)&&(E.texParameterf(EA,xt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,o.getMaxAnisotropy())),B.get(z).__currentAnisotropy=z.anisotropy)}}function Wt(EA,z){let NA=!1;EA.__webglInit===void 0&&(EA.__webglInit=!0,z.addEventListener("dispose",rt));const xt=z.source;let ht=x.get(xt);ht===void 0&&(ht={},x.set(xt,ht));const Ft=V(z);if(Ft!==EA.__cacheKey){ht[Ft]===void 0&&(ht[Ft]={texture:E.createTexture(),usedTimes:0},h.memory.textures++,NA=!0),ht[Ft].usedTimes++;const pe=ht[EA.__cacheKey];pe!==void 0&&(ht[EA.__cacheKey].usedTimes--,pe.usedTimes===0&&$A(z)),EA.__cacheKey=Ft,EA.__webglTexture=ht[Ft].texture}return NA}function De(EA,z,NA){let xt=E.TEXTURE_2D;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(xt=E.TEXTURE_2D_ARRAY),z.isData3DTexture&&(xt=E.TEXTURE_3D);const ht=Wt(EA,z),Ft=z.source;g.bindTexture(xt,EA.__webglTexture,E.TEXTURE0+NA);const pe=B.get(Ft);if(Ft.version!==pe.__version||ht===!0){g.activeTexture(E.TEXTURE0+NA),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,E.NONE);const Jt=dA(z)&&gA(z.image)===!1;let zA=j(z.image,Jt,!1,m);zA=Ag(z,zA);const ge=gA(zA)||a,me=r.convert(z.format,z.colorSpace);let Ue=r.convert(z.type),Be=YA(z.internalFormat,me,Ue,z.colorSpace);Pt(xt,z,ge);let le;const Pe=z.mipmaps,Ng=a&&z.isVideoTexture!==!0,RA=pe.__version===void 0||ht===!0,jt=$(z,zA,ge);if(z.isDepthTexture)Be=E.DEPTH_COMPONENT,a?z.type===oC?Be=E.DEPTH_COMPONENT32F:z.type===xC?Be=E.DEPTH_COMPONENT24:z.type===Nn?Be=E.DEPTH24_STENCIL8:Be=E.DEPTH_COMPONENT16:z.type===oC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),z.format===Un&&Be===E.DEPTH_COMPONENT&&z.type!==ch&&z.type!==xC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=xC,Ue=r.convert(z.type)),z.format===zo&&Be===E.DEPTH_COMPONENT&&(Be=E.DEPTH_STENCIL,z.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=Nn,Ue=r.convert(z.type))),RA&&(Ng?g.texStorage2D(E.TEXTURE_2D,1,Be,zA.width,zA.height):g.texImage2D(E.TEXTURE_2D,0,Be,zA.width,zA.height,0,me,Ue,null));else if(z.isDataTexture)if(Pe.length>0&&ge){Ng&&RA&&g.texStorage2D(E.TEXTURE_2D,jt,Be,Pe[0].width,Pe[0].height);for(let tt=0,Kt=Pe.length;tt<Kt;tt++)le=Pe[tt],Ng?g.texSubImage2D(E.TEXTURE_2D,tt,0,0,le.width,le.height,me,Ue,le.data):g.texImage2D(E.TEXTURE_2D,tt,Be,le.width,le.height,0,me,Ue,le.data);z.generateMipmaps=!1}else Ng?(RA&&g.texStorage2D(E.TEXTURE_2D,jt,Be,zA.width,zA.height),g.texSubImage2D(E.TEXTURE_2D,0,0,0,zA.width,zA.height,me,Ue,zA.data)):g.texImage2D(E.TEXTURE_2D,0,Be,zA.width,zA.height,0,me,Ue,zA.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){Ng&&RA&&g.texStorage3D(E.TEXTURE_2D_ARRAY,jt,Be,Pe[0].width,Pe[0].height,zA.depth);for(let tt=0,Kt=Pe.length;tt<Kt;tt++)le=Pe[tt],z.format!==Wi?me!==null?Ng?g.compressedTexSubImage3D(E.TEXTURE_2D_ARRAY,tt,0,0,0,le.width,le.height,zA.depth,me,le.data,0,0):g.compressedTexImage3D(E.TEXTURE_2D_ARRAY,tt,Be,le.width,le.height,zA.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ng?g.texSubImage3D(E.TEXTURE_2D_ARRAY,tt,0,0,0,le.width,le.height,zA.depth,me,Ue,le.data):g.texImage3D(E.TEXTURE_2D_ARRAY,tt,Be,le.width,le.height,zA.depth,0,me,Ue,le.data)}else{Ng&&RA&&g.texStorage2D(E.TEXTURE_2D,jt,Be,Pe[0].width,Pe[0].height);for(let tt=0,Kt=Pe.length;tt<Kt;tt++)le=Pe[tt],z.format!==Wi?me!==null?Ng?g.compressedTexSubImage2D(E.TEXTURE_2D,tt,0,0,le.width,le.height,me,le.data):g.compressedTexImage2D(E.TEXTURE_2D,tt,Be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ng?g.texSubImage2D(E.TEXTURE_2D,tt,0,0,le.width,le.height,me,Ue,le.data):g.texImage2D(E.TEXTURE_2D,tt,Be,le.width,le.height,0,me,Ue,le.data)}else if(z.isDataArrayTexture)Ng?(RA&&g.texStorage3D(E.TEXTURE_2D_ARRAY,jt,Be,zA.width,zA.height,zA.depth),g.texSubImage3D(E.TEXTURE_2D_ARRAY,0,0,0,0,zA.width,zA.height,zA.depth,me,Ue,zA.data)):g.texImage3D(E.TEXTURE_2D_ARRAY,0,Be,zA.width,zA.height,zA.depth,0,me,Ue,zA.data);else if(z.isData3DTexture)Ng?(RA&&g.texStorage3D(E.TEXTURE_3D,jt,Be,zA.width,zA.height,zA.depth),g.texSubImage3D(E.TEXTURE_3D,0,0,0,0,zA.width,zA.height,zA.depth,me,Ue,zA.data)):g.texImage3D(E.TEXTURE_3D,0,Be,zA.width,zA.height,zA.depth,0,me,Ue,zA.data);else if(z.isFramebufferTexture){if(RA)if(Ng)g.texStorage2D(E.TEXTURE_2D,jt,Be,zA.width,zA.height);else{let tt=zA.width,Kt=zA.height;for(let Ot=0;Ot<jt;Ot++)g.texImage2D(E.TEXTURE_2D,Ot,Be,tt,Kt,0,me,Ue,null),tt>>=1,Kt>>=1}}else if(Pe.length>0&&ge){Ng&&RA&&g.texStorage2D(E.TEXTURE_2D,jt,Be,Pe[0].width,Pe[0].height);for(let tt=0,Kt=Pe.length;tt<Kt;tt++)le=Pe[tt],Ng?g.texSubImage2D(E.TEXTURE_2D,tt,0,0,me,Ue,le):g.texImage2D(E.TEXTURE_2D,tt,Be,me,Ue,le);z.generateMipmaps=!1}else Ng?(RA&&g.texStorage2D(E.TEXTURE_2D,jt,Be,zA.width,zA.height),g.texSubImage2D(E.TEXTURE_2D,0,0,0,me,Ue,zA)):g.texImage2D(E.TEXTURE_2D,0,Be,me,Ue,zA);fA(z,ge)&&pA(xt),pe.__version=Ft.version,z.onUpdate&&z.onUpdate(z)}EA.__version=z.version}function cg(EA,z,NA){if(z.image.length!==6)return;const xt=Wt(EA,z),ht=z.source;g.bindTexture(E.TEXTURE_CUBE_MAP,EA.__webglTexture,E.TEXTURE0+NA);const Ft=B.get(ht);if(ht.version!==Ft.__version||xt===!0){g.activeTexture(E.TEXTURE0+NA),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,E.NONE);const pe=z.isCompressedTexture||z.image[0].isCompressedTexture,Jt=z.image[0]&&z.image[0].isDataTexture,zA=[];for(let tt=0;tt<6;tt++)!pe&&!Jt?zA[tt]=j(z.image[tt],!1,!0,f):zA[tt]=Jt?z.image[tt].image:z.image[tt],zA[tt]=Ag(z,zA[tt]);const ge=zA[0],me=gA(ge)||a,Ue=r.convert(z.format,z.colorSpace),Be=r.convert(z.type),le=YA(z.internalFormat,Ue,Be,z.colorSpace),Pe=a&&z.isVideoTexture!==!0,Ng=Ft.__version===void 0||xt===!0;let RA=$(z,ge,me);Pt(E.TEXTURE_CUBE_MAP,z,me);let jt;if(pe){Pe&&Ng&&g.texStorage2D(E.TEXTURE_CUBE_MAP,RA,le,ge.width,ge.height);for(let tt=0;tt<6;tt++){jt=zA[tt].mipmaps;for(let Kt=0;Kt<jt.length;Kt++){const Ot=jt[Kt];z.format!==Wi?Ue!==null?Pe?g.compressedTexSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt,0,0,Ot.width,Ot.height,Ue,Ot.data):g.compressedTexImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt,le,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?g.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt,0,0,Ot.width,Ot.height,Ue,Be,Ot.data):g.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt,le,Ot.width,Ot.height,0,Ue,Be,Ot.data)}}}else{jt=z.mipmaps,Pe&&Ng&&(jt.length>0&&RA++,g.texStorage2D(E.TEXTURE_CUBE_MAP,RA,le,zA[0].width,zA[0].height));for(let tt=0;tt<6;tt++)if(Jt){Pe?g.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zA[tt].width,zA[tt].height,Ue,Be,zA[tt].data):g.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,le,zA[tt].width,zA[tt].height,0,Ue,Be,zA[tt].data);for(let Kt=0;Kt<jt.length;Kt++){const _e=jt[Kt].image[tt].image;Pe?g.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt+1,0,0,_e.width,_e.height,Ue,Be,_e.data):g.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt+1,le,_e.width,_e.height,0,Ue,Be,_e.data)}}else{Pe?g.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ue,Be,zA[tt]):g.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,le,Ue,Be,zA[tt]);for(let Kt=0;Kt<jt.length;Kt++){const Ot=jt[Kt];Pe?g.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt+1,0,0,Ue,Be,Ot.image[tt]):g.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Kt+1,le,Ue,Be,Ot.image[tt])}}}fA(z,me)&&pA(E.TEXTURE_CUBE_MAP),Ft.__version=ht.version,z.onUpdate&&z.onUpdate(z)}EA.__version=z.version}function se(EA,z,NA,xt,ht,Ft){const pe=r.convert(NA.format,NA.colorSpace),Jt=r.convert(NA.type),zA=YA(NA.internalFormat,pe,Jt,NA.colorSpace);if(!B.get(z).__hasExternalTextures){const me=Math.max(1,z.width>>Ft),Ue=Math.max(1,z.height>>Ft);ht===E.TEXTURE_3D||ht===E.TEXTURE_2D_ARRAY?g.texImage3D(ht,Ft,zA,me,Ue,z.depth,0,pe,Jt,null):g.texImage2D(ht,Ft,zA,me,Ue,0,pe,Jt,null)}g.bindFramebuffer(E.FRAMEBUFFER,EA),Fe(z)?F.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,xt,ht,B.get(NA).__webglTexture,0,Zt(z)):(ht===E.TEXTURE_2D||ht>=E.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=E.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&E.framebufferTexture2D(E.FRAMEBUFFER,xt,ht,B.get(NA).__webglTexture,Ft),g.bindFramebuffer(E.FRAMEBUFFER,null)}function rA(EA,z,NA){if(E.bindRenderbuffer(E.RENDERBUFFER,EA),z.depthBuffer&&!z.stencilBuffer){let xt=E.DEPTH_COMPONENT16;if(NA||Fe(z)){const ht=z.depthTexture;ht&&ht.isDepthTexture&&(ht.type===oC?xt=E.DEPTH_COMPONENT32F:ht.type===xC&&(xt=E.DEPTH_COMPONENT24));const Ft=Zt(z);Fe(z)?F.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,Ft,xt,z.width,z.height):E.renderbufferStorageMultisample(E.RENDERBUFFER,Ft,xt,z.width,z.height)}else E.renderbufferStorage(E.RENDERBUFFER,xt,z.width,z.height);E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.RENDERBUFFER,EA)}else if(z.depthBuffer&&z.stencilBuffer){const xt=Zt(z);NA&&Fe(z)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,xt,E.DEPTH24_STENCIL8,z.width,z.height):Fe(z)?F.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,xt,E.DEPTH24_STENCIL8,z.width,z.height):E.renderbufferStorage(E.RENDERBUFFER,E.DEPTH_STENCIL,z.width,z.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.RENDERBUFFER,EA)}else{const xt=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let ht=0;ht<xt.length;ht++){const Ft=xt[ht],pe=r.convert(Ft.format,Ft.colorSpace),Jt=r.convert(Ft.type),zA=YA(Ft.internalFormat,pe,Jt,Ft.colorSpace),ge=Zt(z);NA&&Fe(z)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,ge,zA,z.width,z.height):Fe(z)?F.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,ge,zA,z.width,z.height):E.renderbufferStorage(E.RENDERBUFFER,zA,z.width,z.height)}}E.bindRenderbuffer(E.RENDERBUFFER,null)}function Qt(EA,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(g.bindFramebuffer(E.FRAMEBUFFER,EA),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!B.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),X(z.depthTexture,0);const xt=B.get(z.depthTexture).__webglTexture,ht=Zt(z);if(z.depthTexture.format===Un)Fe(z)?F.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,xt,0,ht):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,xt,0);else if(z.depthTexture.format===zo)Fe(z)?F.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,xt,0,ht):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function At(EA){const z=B.get(EA),NA=EA.isWebGLCubeRenderTarget===!0;if(EA.depthTexture&&!z.__autoAllocateDepthBuffer){if(NA)throw new Error("target.depthTexture not supported in Cube render targets");Qt(z.__webglFramebuffer,EA)}else if(NA){z.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)g.bindFramebuffer(E.FRAMEBUFFER,z.__webglFramebuffer[xt]),z.__webglDepthbuffer[xt]=E.createRenderbuffer(),rA(z.__webglDepthbuffer[xt],EA,!1)}else g.bindFramebuffer(E.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=E.createRenderbuffer(),rA(z.__webglDepthbuffer,EA,!1);g.bindFramebuffer(E.FRAMEBUFFER,null)}function Nt(EA,z,NA){const xt=B.get(EA);z!==void 0&&se(xt.__webglFramebuffer,EA,EA.texture,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,0),NA!==void 0&&At(EA)}function ut(EA){const z=EA.texture,NA=B.get(EA),xt=B.get(z);EA.addEventListener("dispose",Rt),EA.isWebGLMultipleRenderTargets!==!0&&(xt.__webglTexture===void 0&&(xt.__webglTexture=E.createTexture()),xt.__version=z.version,h.memory.textures++);const ht=EA.isWebGLCubeRenderTarget===!0,Ft=EA.isWebGLMultipleRenderTargets===!0,pe=gA(EA)||a;if(ht){NA.__webglFramebuffer=[];for(let Jt=0;Jt<6;Jt++)if(a&&z.mipmaps&&z.mipmaps.length>0){NA.__webglFramebuffer[Jt]=[];for(let zA=0;zA<z.mipmaps.length;zA++)NA.__webglFramebuffer[Jt][zA]=E.createFramebuffer()}else NA.__webglFramebuffer[Jt]=E.createFramebuffer()}else{if(a&&z.mipmaps&&z.mipmaps.length>0){NA.__webglFramebuffer=[];for(let Jt=0;Jt<z.mipmaps.length;Jt++)NA.__webglFramebuffer[Jt]=E.createFramebuffer()}else NA.__webglFramebuffer=E.createFramebuffer();if(Ft)if(o.drawBuffers){const Jt=EA.texture;for(let zA=0,ge=Jt.length;zA<ge;zA++){const me=B.get(Jt[zA]);me.__webglTexture===void 0&&(me.__webglTexture=E.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&EA.samples>0&&Fe(EA)===!1){const Jt=Ft?z:[z];NA.__webglMultisampledFramebuffer=E.createFramebuffer(),NA.__webglColorRenderbuffer=[],g.bindFramebuffer(E.FRAMEBUFFER,NA.__webglMultisampledFramebuffer);for(let zA=0;zA<Jt.length;zA++){const ge=Jt[zA];NA.__webglColorRenderbuffer[zA]=E.createRenderbuffer(),E.bindRenderbuffer(E.RENDERBUFFER,NA.__webglColorRenderbuffer[zA]);const me=r.convert(ge.format,ge.colorSpace),Ue=r.convert(ge.type),Be=YA(ge.internalFormat,me,Ue,ge.colorSpace,EA.isXRRenderTarget===!0),le=Zt(EA);E.renderbufferStorageMultisample(E.RENDERBUFFER,le,Be,EA.width,EA.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+zA,E.RENDERBUFFER,NA.__webglColorRenderbuffer[zA])}E.bindRenderbuffer(E.RENDERBUFFER,null),EA.depthBuffer&&(NA.__webglDepthRenderbuffer=E.createRenderbuffer(),rA(NA.__webglDepthRenderbuffer,EA,!0)),g.bindFramebuffer(E.FRAMEBUFFER,null)}}if(ht){g.bindTexture(E.TEXTURE_CUBE_MAP,xt.__webglTexture),Pt(E.TEXTURE_CUBE_MAP,z,pe);for(let Jt=0;Jt<6;Jt++)if(a&&z.mipmaps&&z.mipmaps.length>0)for(let zA=0;zA<z.mipmaps.length;zA++)se(NA.__webglFramebuffer[Jt][zA],EA,z,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,zA);else se(NA.__webglFramebuffer[Jt],EA,z,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0);fA(z,pe)&&pA(E.TEXTURE_CUBE_MAP),g.unbindTexture()}else if(Ft){const Jt=EA.texture;for(let zA=0,ge=Jt.length;zA<ge;zA++){const me=Jt[zA],Ue=B.get(me);g.bindTexture(E.TEXTURE_2D,Ue.__webglTexture),Pt(E.TEXTURE_2D,me,pe),se(NA.__webglFramebuffer,EA,me,E.COLOR_ATTACHMENT0+zA,E.TEXTURE_2D,0),fA(me,pe)&&pA(E.TEXTURE_2D)}g.unbindTexture()}else{let Jt=E.TEXTURE_2D;if((EA.isWebGL3DRenderTarget||EA.isWebGLArrayRenderTarget)&&(a?Jt=EA.isWebGL3DRenderTarget?E.TEXTURE_3D:E.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),g.bindTexture(Jt,xt.__webglTexture),Pt(Jt,z,pe),a&&z.mipmaps&&z.mipmaps.length>0)for(let zA=0;zA<z.mipmaps.length;zA++)se(NA.__webglFramebuffer[zA],EA,z,E.COLOR_ATTACHMENT0,Jt,zA);else se(NA.__webglFramebuffer,EA,z,E.COLOR_ATTACHMENT0,Jt,0);fA(z,pe)&&pA(Jt),g.unbindTexture()}EA.depthBuffer&&At(EA)}function fe(EA){const z=gA(EA)||a,NA=EA.isWebGLMultipleRenderTargets===!0?EA.texture:[EA.texture];for(let xt=0,ht=NA.length;xt<ht;xt++){const Ft=NA[xt];if(fA(Ft,z)){const pe=EA.isWebGLCubeRenderTarget?E.TEXTURE_CUBE_MAP:E.TEXTURE_2D,Jt=B.get(Ft).__webglTexture;g.bindTexture(pe,Jt),pA(pe),g.unbindTexture()}}}function ie(EA){if(a&&EA.samples>0&&Fe(EA)===!1){const z=EA.isWebGLMultipleRenderTargets?EA.texture:[EA.texture],NA=EA.width,xt=EA.height;let ht=E.COLOR_BUFFER_BIT;const Ft=[],pe=EA.stencilBuffer?E.DEPTH_STENCIL_ATTACHMENT:E.DEPTH_ATTACHMENT,Jt=B.get(EA),zA=EA.isWebGLMultipleRenderTargets===!0;if(zA)for(let ge=0;ge<z.length;ge++)g.bindFramebuffer(E.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+ge,E.RENDERBUFFER,null),g.bindFramebuffer(E.FRAMEBUFFER,Jt.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+ge,E.TEXTURE_2D,null,0);g.bindFramebuffer(E.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ge=0;ge<z.length;ge++){Ft.push(E.COLOR_ATTACHMENT0+ge),EA.depthBuffer&&Ft.push(pe);const me=Jt.__ignoreDepthValues!==void 0?Jt.__ignoreDepthValues:!1;if(me===!1&&(EA.depthBuffer&&(ht|=E.DEPTH_BUFFER_BIT),EA.stencilBuffer&&(ht|=E.STENCIL_BUFFER_BIT)),zA&&E.framebufferRenderbuffer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.RENDERBUFFER,Jt.__webglColorRenderbuffer[ge]),me===!0&&(E.invalidateFramebuffer(E.READ_FRAMEBUFFER,[pe]),E.invalidateFramebuffer(E.DRAW_FRAMEBUFFER,[pe])),zA){const Ue=B.get(z[ge]).__webglTexture;E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ue,0)}E.blitFramebuffer(0,0,NA,xt,0,0,NA,xt,ht,E.NEAREST),J&&E.invalidateFramebuffer(E.READ_FRAMEBUFFER,Ft)}if(g.bindFramebuffer(E.READ_FRAMEBUFFER,null),g.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),zA)for(let ge=0;ge<z.length;ge++){g.bindFramebuffer(E.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+ge,E.RENDERBUFFER,Jt.__webglColorRenderbuffer[ge]);const me=B.get(z[ge]).__webglTexture;g.bindFramebuffer(E.FRAMEBUFFER,Jt.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+ge,E.TEXTURE_2D,me,0)}g.bindFramebuffer(E.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}}function Zt(EA){return Math.min(S,EA.samples)}function Fe(EA){const z=B.get(EA);return a&&EA.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function PA(EA){const z=h.render.frame;P.get(EA)!==z&&(P.set(EA,z),EA.update())}function Ag(EA,z){const NA=EA.colorSpace,xt=EA.format,ht=EA.type;return EA.isCompressedTexture===!0||EA.format===nh||NA!==xB&&NA!==Ln&&(NA===tg?a===!1?t.has("EXT_sRGB")===!0&&xt===Wi?(EA.format=nh,EA.minFilter=li,EA.generateMipmaps=!1):z=BD.sRGBToLinear(z):(xt!==Wi||ht!==YC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",NA)),z}this.allocateTextureUnit=nt,this.resetTextureUnits=it,this.setTexture2D=X,this.setTexture2DArray=AA,this.setTexture3D=CA,this.setTextureCube=kA,this.rebindTextures=Nt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Fe}function aU(E,t,g){const B=g.isWebGL2;function o(r,h=Ln){let a;if(r===YC)return E.UNSIGNED_BYTE;if(r===Xu)return E.UNSIGNED_SHORT_4_4_4_4;if(r===zu)return E.UNSIGNED_SHORT_5_5_5_1;if(r===km)return E.BYTE;if(r===Lm)return E.SHORT;if(r===ch)return E.UNSIGNED_SHORT;if(r===Zu)return E.INT;if(r===xC)return E.UNSIGNED_INT;if(r===oC)return E.FLOAT;if(r===uQ)return B?E.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xm)return E.ALPHA;if(r===Wi)return E.RGBA;if(r===bm)return E.LUMINANCE;if(r===Jm)return E.LUMINANCE_ALPHA;if(r===Un)return E.DEPTH_COMPONENT;if(r===zo)return E.DEPTH_STENCIL;if(r===nh)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Km)return E.RED;if(r===ju)return E.RED_INTEGER;if(r===Ym)return E.RG;if(r===$u)return E.RG_INTEGER;if(r===AD)return E.RGBA_INTEGER;if(r===Da||r===fa||r===pa||r===wa)if(h===tg)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===Cd||r===nd||r===od)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ed||r===Qd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ed)return h===tg?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sd||r===rd||r===ad||r===hd||r===cd||r===ld||r===dd||r===ud||r===Dd||r===fd||r===pd||r===wd||r===yd||r===Md)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===sd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ld)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Md)return h===tg?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ya)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ya)return h===tg?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Hm||r===md||r===Rd||r===Sd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ya)return a.COMPRESSED_RED_RGTC1_EXT;if(r===md)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nn?B?E.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):E[r]!==void 0?E[r]:null}return{convert:o}}class hU extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bC extends iI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cU={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new bA,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new bA),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new bA,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new bA),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const g=this._hand;if(g)for(const B of t.hand.values())this._getHandJoint(g,B)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,g,B){let o=null,r=null,h=null;const a=this._targetRay,D=this._grip,f=this._hand;if(t&&g.session.visibilityState!=="visible-blurred"){if(f&&t.hand){h=!0;for(const T of t.hand.values()){const x=g.getJointPose(T,B),L=this._getHandJoint(f,T);x!==null&&(L.matrix.fromArray(x.transform.matrix),L.matrix.decompose(L.position,L.rotation,L.scale),L.matrixWorldNeedsUpdate=!0,L.jointRadius=x.radius),L.visible=x!==null}const m=f.joints["index-finger-tip"],S=f.joints["thumb-tip"],F=m.position.distanceTo(S.position),J=.02,P=.005;f.inputState.pinching&&F>J+P?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&F<=J-P&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else D!==null&&t.gripSpace&&(r=g.getPose(t.gripSpace,B),r!==null&&(D.matrix.fromArray(r.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,r.linearVelocity?(D.hasLinearVelocity=!0,D.linearVelocity.copy(r.linearVelocity)):D.hasLinearVelocity=!1,r.angularVelocity?(D.hasAngularVelocity=!0,D.angularVelocity.copy(r.angularVelocity)):D.hasAngularVelocity=!1));a!==null&&(o=g.getPose(t.targetRaySpace,B),o===null&&r!==null&&(o=r),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cU)))}return a!==null&&(a.visible=o!==null),D!==null&&(D.visible=r!==null),f!==null&&(f.visible=h!==null),this}_getHandJoint(t,g){if(t.joints[g.jointName]===void 0){const B=new bC;B.matrixAutoUpdate=!1,B.visible=!1,t.joints[g.jointName]=B,t.add(B)}return t.joints[g.jointName]}}class lU extends OI{constructor(t,g,B,o,r,h,a,D,f,m){if(m=m!==void 0?m:Un,m!==Un&&m!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");B===void 0&&m===Un&&(B=xC),B===void 0&&m===zo&&(B=Nn),super(null,o,r,h,a,D,m,B,f),this.isDepthTexture=!0,this.image={width:t,height:g},this.magFilter=a!==void 0?a:KI,this.minFilter=D!==void 0?D:KI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const g=super.toJSON(t);return this.compareFunction!==null&&(g.compareFunction=this.compareFunction),g}}class dU extends iE{constructor(t,g){super();const B=this;let o=null,r=1,h=null,a="local-floor",D=1,f=null,m=null,S=null,F=null,J=null,P=null;const T=g.getContextAttributes();let x=null,L=null;const iA=[],j=[],gA=new di;gA.layers.enable(1),gA.viewport=new Og;const dA=new di;dA.layers.enable(2),dA.viewport=new Og;const fA=[gA,dA],pA=new hU;pA.layers.enable(1),pA.layers.enable(2);let YA=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(AA){let CA=iA[AA];return CA===void 0&&(CA=new Oa,iA[AA]=CA),CA.getTargetRaySpace()},this.getControllerGrip=function(AA){let CA=iA[AA];return CA===void 0&&(CA=new Oa,iA[AA]=CA),CA.getGripSpace()},this.getHand=function(AA){let CA=iA[AA];return CA===void 0&&(CA=new Oa,iA[AA]=CA),CA.getHandSpace()};function uA(AA){const CA=j.indexOf(AA.inputSource);if(CA===-1)return;const kA=iA[CA];kA!==void 0&&(kA.update(AA.inputSource,AA.frame,f||h),kA.dispatchEvent({type:AA.type,data:AA.inputSource}))}function rt(){o.removeEventListener("select",uA),o.removeEventListener("selectstart",uA),o.removeEventListener("selectend",uA),o.removeEventListener("squeeze",uA),o.removeEventListener("squeezestart",uA),o.removeEventListener("squeezeend",uA),o.removeEventListener("end",rt),o.removeEventListener("inputsourceschange",Rt);for(let AA=0;AA<iA.length;AA++){const CA=j[AA];CA!==null&&(j[AA]=null,iA[AA].disconnect(CA))}YA=null,$=null,t.setRenderTarget(x),J=null,F=null,S=null,o=null,L=null,X.stop(),B.isPresenting=!1,B.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(AA){r=AA,B.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(AA){a=AA,B.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||h},this.setReferenceSpace=function(AA){f=AA},this.getBaseLayer=function(){return F!==null?F:J},this.getBinding=function(){return S},this.getFrame=function(){return P},this.getSession=function(){return o},this.setSession=async function(AA){if(o=AA,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",uA),o.addEventListener("selectstart",uA),o.addEventListener("selectend",uA),o.addEventListener("squeeze",uA),o.addEventListener("squeezestart",uA),o.addEventListener("squeezeend",uA),o.addEventListener("end",rt),o.addEventListener("inputsourceschange",Rt),T.xrCompatible!==!0&&await g.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const CA={antialias:o.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};J=new XRWebGLLayer(o,g,CA),o.updateRenderState({baseLayer:J}),L=new bn(J.framebufferWidth,J.framebufferHeight,{format:Wi,type:YC,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil})}else{let CA=null,kA=null,qA=null;T.depth&&(qA=T.stencil?g.DEPTH24_STENCIL8:g.DEPTH_COMPONENT24,CA=T.stencil?zo:Un,kA=T.stencil?Nn:xC);const gt={colorFormat:g.RGBA8,depthFormat:qA,scaleFactor:r};S=new XRWebGLBinding(o,g),F=S.createProjectionLayer(gt),o.updateRenderState({layers:[F]}),L=new bn(F.textureWidth,F.textureHeight,{format:Wi,type:YC,depthTexture:new lU(F.textureWidth,F.textureHeight,kA,void 0,void 0,void 0,void 0,void 0,void 0,CA),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0});const wt=t.properties.get(L);wt.__ignoreDepthValues=F.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(D),f=null,h=await o.requestReferenceSpace(a),X.setContext(o),X.start(),B.isPresenting=!0,B.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function Rt(AA){for(let CA=0;CA<AA.removed.length;CA++){const kA=AA.removed[CA],qA=j.indexOf(kA);qA>=0&&(j[qA]=null,iA[qA].disconnect(kA))}for(let CA=0;CA<AA.added.length;CA++){const kA=AA.added[CA];let qA=j.indexOf(kA);if(qA===-1){for(let wt=0;wt<iA.length;wt++)if(wt>=j.length){j.push(kA),qA=wt;break}else if(j[wt]===null){j[wt]=kA,qA=wt;break}if(qA===-1)break}const gt=iA[qA];gt&&gt.connect(kA)}}const TA=new bA,$A=new bA;function VA(AA,CA,kA){TA.setFromMatrixPosition(CA.matrixWorld),$A.setFromMatrixPosition(kA.matrixWorld);const qA=TA.distanceTo($A),gt=CA.projectionMatrix.elements,wt=kA.projectionMatrix.elements,Pt=gt[14]/(gt[10]-1),Wt=gt[14]/(gt[10]+1),De=(gt[9]+1)/gt[5],cg=(gt[9]-1)/gt[5],se=(gt[8]-1)/gt[0],rA=(wt[8]+1)/wt[0],Qt=Pt*se,At=Pt*rA,Nt=qA/(-se+rA),ut=Nt*-se;CA.matrixWorld.decompose(AA.position,AA.quaternion,AA.scale),AA.translateX(ut),AA.translateZ(Nt),AA.matrixWorld.compose(AA.position,AA.quaternion,AA.scale),AA.matrixWorldInverse.copy(AA.matrixWorld).invert();const fe=Pt+Nt,ie=Wt+Nt,Zt=Qt-ut,Fe=At+(qA-ut),PA=De*Wt/ie*fe,Ag=cg*Wt/ie*fe;AA.projectionMatrix.makePerspective(Zt,Fe,PA,Ag,fe,ie),AA.projectionMatrixInverse.copy(AA.projectionMatrix).invert()}function ft(AA,CA){CA===null?AA.matrixWorld.copy(AA.matrix):AA.matrixWorld.multiplyMatrices(CA.matrixWorld,AA.matrix),AA.matrixWorldInverse.copy(AA.matrixWorld).invert()}this.updateCamera=function(AA){if(o===null)return;pA.near=dA.near=gA.near=AA.near,pA.far=dA.far=gA.far=AA.far,(YA!==pA.near||$!==pA.far)&&(o.updateRenderState({depthNear:pA.near,depthFar:pA.far}),YA=pA.near,$=pA.far);const CA=AA.parent,kA=pA.cameras;ft(pA,CA);for(let qA=0;qA<kA.length;qA++)ft(kA[qA],CA);kA.length===2?VA(pA,gA,dA):pA.projectionMatrix.copy(gA.projectionMatrix),it(AA,pA,CA)};function it(AA,CA,kA){kA===null?AA.matrix.copy(CA.matrixWorld):(AA.matrix.copy(kA.matrixWorld),AA.matrix.invert(),AA.matrix.multiply(CA.matrixWorld)),AA.matrix.decompose(AA.position,AA.quaternion,AA.scale),AA.updateMatrixWorld(!0);const qA=AA.children;for(let gt=0,wt=qA.length;gt<wt;gt++)qA[gt].updateMatrixWorld(!0);AA.projectionMatrix.copy(CA.projectionMatrix),AA.projectionMatrixInverse.copy(CA.projectionMatrixInverse),AA.isPerspectiveCamera&&(AA.fov=$o*2*Math.atan(1/AA.projectionMatrix.elements[5]),AA.zoom=1)}this.getCamera=function(){return pA},this.getFoveation=function(){if(!(F===null&&J===null))return D},this.setFoveation=function(AA){D=AA,F!==null&&(F.fixedFoveation=AA),J!==null&&J.fixedFoveation!==void 0&&(J.fixedFoveation=AA)};let nt=null;function V(AA,CA){if(m=CA.getViewerPose(f||h),P=CA,m!==null){const kA=m.views;J!==null&&(t.setRenderTargetFramebuffer(L,J.framebuffer),t.setRenderTarget(L));let qA=!1;kA.length!==pA.cameras.length&&(pA.cameras.length=0,qA=!0);for(let gt=0;gt<kA.length;gt++){const wt=kA[gt];let Pt=null;if(J!==null)Pt=J.getViewport(wt);else{const De=S.getViewSubImage(F,wt);Pt=De.viewport,gt===0&&(t.setRenderTargetTextures(L,De.colorTexture,F.ignoreDepthValues?void 0:De.depthStencilTexture),t.setRenderTarget(L))}let Wt=fA[gt];Wt===void 0&&(Wt=new di,Wt.layers.enable(gt),Wt.viewport=new Og,fA[gt]=Wt),Wt.matrix.fromArray(wt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(wt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),gt===0&&(pA.matrix.copy(Wt.matrix),pA.matrix.decompose(pA.position,pA.quaternion,pA.scale)),qA===!0&&pA.cameras.push(Wt)}}for(let kA=0;kA<iA.length;kA++){const qA=j[kA],gt=iA[kA];qA!==null&&gt!==void 0&&gt.update(qA,CA,f||h)}nt&&nt(AA,CA),CA.detectedPlanes&&B.dispatchEvent({type:"planesdetected",data:CA}),P=null}const X=new hD;X.setAnimationLoop(V),this.setAnimationLoop=function(AA){nt=AA},this.dispose=function(){}}}function uU(E,t){function g(x,L){x.matrixAutoUpdate===!0&&x.updateMatrix(),L.value.copy(x.matrix)}function B(x,L){L.color.getRGB(x.fogColor.value,rD(E)),L.isFog?(x.fogNear.value=L.near,x.fogFar.value=L.far):L.isFogExp2&&(x.fogDensity.value=L.density)}function o(x,L,iA,j,gA){L.isMeshBasicMaterial||L.isMeshLambertMaterial?r(x,L):L.isMeshToonMaterial?(r(x,L),S(x,L)):L.isMeshPhongMaterial?(r(x,L),m(x,L)):L.isMeshStandardMaterial?(r(x,L),F(x,L),L.isMeshPhysicalMaterial&&J(x,L,gA)):L.isMeshMatcapMaterial?(r(x,L),P(x,L)):L.isMeshDepthMaterial?r(x,L):L.isMeshDistanceMaterial?(r(x,L),T(x,L)):L.isMeshNormalMaterial?r(x,L):L.isLineBasicMaterial?(h(x,L),L.isLineDashedMaterial&&a(x,L)):L.isPointsMaterial?D(x,L,iA,j):L.isSpriteMaterial?f(x,L):L.isShadowMaterial?(x.color.value.copy(L.color),x.opacity.value=L.opacity):L.isShaderMaterial&&(L.uniformsNeedUpdate=!1)}function r(x,L){x.opacity.value=L.opacity,L.color&&x.diffuse.value.copy(L.color),L.emissive&&x.emissive.value.copy(L.emissive).multiplyScalar(L.emissiveIntensity),L.map&&(x.map.value=L.map,g(L.map,x.mapTransform)),L.alphaMap&&(x.alphaMap.value=L.alphaMap,g(L.alphaMap,x.alphaMapTransform)),L.bumpMap&&(x.bumpMap.value=L.bumpMap,g(L.bumpMap,x.bumpMapTransform),x.bumpScale.value=L.bumpScale,L.side===Di&&(x.bumpScale.value*=-1)),L.normalMap&&(x.normalMap.value=L.normalMap,g(L.normalMap,x.normalMapTransform),x.normalScale.value.copy(L.normalScale),L.side===Di&&x.normalScale.value.negate()),L.displacementMap&&(x.displacementMap.value=L.displacementMap,g(L.displacementMap,x.displacementMapTransform),x.displacementScale.value=L.displacementScale,x.displacementBias.value=L.displacementBias),L.emissiveMap&&(x.emissiveMap.value=L.emissiveMap,g(L.emissiveMap,x.emissiveMapTransform)),L.specularMap&&(x.specularMap.value=L.specularMap,g(L.specularMap,x.specularMapTransform)),L.alphaTest>0&&(x.alphaTest.value=L.alphaTest);const iA=t.get(L).envMap;if(iA&&(x.envMap.value=iA,x.flipEnvMap.value=iA.isCubeTexture&&iA.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=L.reflectivity,x.ior.value=L.ior,x.refractionRatio.value=L.refractionRatio),L.lightMap){x.lightMap.value=L.lightMap;const j=E._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=L.lightMapIntensity*j,g(L.lightMap,x.lightMapTransform)}L.aoMap&&(x.aoMap.value=L.aoMap,x.aoMapIntensity.value=L.aoMapIntensity,g(L.aoMap,x.aoMapTransform))}function h(x,L){x.diffuse.value.copy(L.color),x.opacity.value=L.opacity,L.map&&(x.map.value=L.map,g(L.map,x.mapTransform))}function a(x,L){x.dashSize.value=L.dashSize,x.totalSize.value=L.dashSize+L.gapSize,x.scale.value=L.scale}function D(x,L,iA,j){x.diffuse.value.copy(L.color),x.opacity.value=L.opacity,x.size.value=L.size*iA,x.scale.value=j*.5,L.map&&(x.map.value=L.map,g(L.map,x.uvTransform)),L.alphaMap&&(x.alphaMap.value=L.alphaMap,g(L.alphaMap,x.alphaMapTransform)),L.alphaTest>0&&(x.alphaTest.value=L.alphaTest)}function f(x,L){x.diffuse.value.copy(L.color),x.opacity.value=L.opacity,x.rotation.value=L.rotation,L.map&&(x.map.value=L.map,g(L.map,x.mapTransform)),L.alphaMap&&(x.alphaMap.value=L.alphaMap,g(L.alphaMap,x.alphaMapTransform)),L.alphaTest>0&&(x.alphaTest.value=L.alphaTest)}function m(x,L){x.specular.value.copy(L.specular),x.shininess.value=Math.max(L.shininess,1e-4)}function S(x,L){L.gradientMap&&(x.gradientMap.value=L.gradientMap)}function F(x,L){x.metalness.value=L.metalness,L.metalnessMap&&(x.metalnessMap.value=L.metalnessMap,g(L.metalnessMap,x.metalnessMapTransform)),x.roughness.value=L.roughness,L.roughnessMap&&(x.roughnessMap.value=L.roughnessMap,g(L.roughnessMap,x.roughnessMapTransform)),t.get(L).envMap&&(x.envMapIntensity.value=L.envMapIntensity)}function J(x,L,iA){x.ior.value=L.ior,L.sheen>0&&(x.sheenColor.value.copy(L.sheenColor).multiplyScalar(L.sheen),x.sheenRoughness.value=L.sheenRoughness,L.sheenColorMap&&(x.sheenColorMap.value=L.sheenColorMap,g(L.sheenColorMap,x.sheenColorMapTransform)),L.sheenRoughnessMap&&(x.sheenRoughnessMap.value=L.sheenRoughnessMap,g(L.sheenRoughnessMap,x.sheenRoughnessMapTransform))),L.clearcoat>0&&(x.clearcoat.value=L.clearcoat,x.clearcoatRoughness.value=L.clearcoatRoughness,L.clearcoatMap&&(x.clearcoatMap.value=L.clearcoatMap,g(L.clearcoatMap,x.clearcoatMapTransform)),L.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=L.clearcoatRoughnessMap,g(L.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),L.clearcoatNormalMap&&(x.clearcoatNormalMap.value=L.clearcoatNormalMap,g(L.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(L.clearcoatNormalScale),L.side===Di&&x.clearcoatNormalScale.value.negate())),L.iridescence>0&&(x.iridescence.value=L.iridescence,x.iridescenceIOR.value=L.iridescenceIOR,x.iridescenceThicknessMinimum.value=L.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=L.iridescenceThicknessRange[1],L.iridescenceMap&&(x.iridescenceMap.value=L.iridescenceMap,g(L.iridescenceMap,x.iridescenceMapTransform)),L.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=L.iridescenceThicknessMap,g(L.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),L.transmission>0&&(x.transmission.value=L.transmission,x.transmissionSamplerMap.value=iA.texture,x.transmissionSamplerSize.value.set(iA.width,iA.height),L.transmissionMap&&(x.transmissionMap.value=L.transmissionMap,g(L.transmissionMap,x.transmissionMapTransform)),x.thickness.value=L.thickness,L.thicknessMap&&(x.thicknessMap.value=L.thicknessMap,g(L.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=L.attenuationDistance,x.attenuationColor.value.copy(L.attenuationColor)),L.anisotropy>0&&(x.anisotropyVector.value.set(L.anisotropy*Math.cos(L.anisotropyRotation),L.anisotropy*Math.sin(L.anisotropyRotation)),L.anisotropyMap&&(x.anisotropyMap.value=L.anisotropyMap,g(L.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=L.specularIntensity,x.specularColor.value.copy(L.specularColor),L.specularColorMap&&(x.specularColorMap.value=L.specularColorMap,g(L.specularColorMap,x.specularColorMapTransform)),L.specularIntensityMap&&(x.specularIntensityMap.value=L.specularIntensityMap,g(L.specularIntensityMap,x.specularIntensityMapTransform))}function P(x,L){L.matcap&&(x.matcap.value=L.matcap)}function T(x,L){const iA=t.get(L).light;x.referencePosition.value.setFromMatrixPosition(iA.matrixWorld),x.nearDistance.value=iA.shadow.camera.near,x.farDistance.value=iA.shadow.camera.far}return{refreshFogUniforms:B,refreshMaterialUniforms:o}}function DU(E,t,g,B){let o={},r={},h=[];const a=g.isWebGL2?E.getParameter(E.MAX_UNIFORM_BUFFER_BINDINGS):0;function D(iA,j){const gA=j.program;B.uniformBlockBinding(iA,gA)}function f(iA,j){let gA=o[iA.id];gA===void 0&&(P(iA),gA=m(iA),o[iA.id]=gA,iA.addEventListener("dispose",x));const dA=j.program;B.updateUBOMapping(iA,dA);const fA=t.render.frame;r[iA.id]!==fA&&(F(iA),r[iA.id]=fA)}function m(iA){const j=S();iA.__bindingPointIndex=j;const gA=E.createBuffer(),dA=iA.__size,fA=iA.usage;return E.bindBuffer(E.UNIFORM_BUFFER,gA),E.bufferData(E.UNIFORM_BUFFER,dA,fA),E.bindBuffer(E.UNIFORM_BUFFER,null),E.bindBufferBase(E.UNIFORM_BUFFER,j,gA),gA}function S(){for(let iA=0;iA<a;iA++)if(h.indexOf(iA)===-1)return h.push(iA),iA;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function F(iA){const j=o[iA.id],gA=iA.uniforms,dA=iA.__cache;E.bindBuffer(E.UNIFORM_BUFFER,j);for(let fA=0,pA=gA.length;fA<pA;fA++){const YA=gA[fA];if(J(YA,fA,dA)===!0){const $=YA.__offset,uA=Array.isArray(YA.value)?YA.value:[YA.value];let rt=0;for(let Rt=0;Rt<uA.length;Rt++){const TA=uA[Rt],$A=T(TA);typeof TA=="number"?(YA.__data[0]=TA,E.bufferSubData(E.UNIFORM_BUFFER,$+rt,YA.__data)):TA.isMatrix3?(YA.__data[0]=TA.elements[0],YA.__data[1]=TA.elements[1],YA.__data[2]=TA.elements[2],YA.__data[3]=TA.elements[0],YA.__data[4]=TA.elements[3],YA.__data[5]=TA.elements[4],YA.__data[6]=TA.elements[5],YA.__data[7]=TA.elements[0],YA.__data[8]=TA.elements[6],YA.__data[9]=TA.elements[7],YA.__data[10]=TA.elements[8],YA.__data[11]=TA.elements[0]):(TA.toArray(YA.__data,rt),rt+=$A.storage/Float32Array.BYTES_PER_ELEMENT)}E.bufferSubData(E.UNIFORM_BUFFER,$,YA.__data)}}E.bindBuffer(E.UNIFORM_BUFFER,null)}function J(iA,j,gA){const dA=iA.value;if(gA[j]===void 0){if(typeof dA=="number")gA[j]=dA;else{const fA=Array.isArray(dA)?dA:[dA],pA=[];for(let YA=0;YA<fA.length;YA++)pA.push(fA[YA].clone());gA[j]=pA}return!0}else if(typeof dA=="number"){if(gA[j]!==dA)return gA[j]=dA,!0}else{const fA=Array.isArray(gA[j])?gA[j]:[gA[j]],pA=Array.isArray(dA)?dA:[dA];for(let YA=0;YA<fA.length;YA++){const $=fA[YA];if($.equals(pA[YA])===!1)return $.copy(pA[YA]),!0}}return!1}function P(iA){const j=iA.uniforms;let gA=0;const dA=16;let fA=0;for(let pA=0,YA=j.length;pA<YA;pA++){const $=j[pA],uA={boundary:0,storage:0},rt=Array.isArray($.value)?$.value:[$.value];for(let Rt=0,TA=rt.length;Rt<TA;Rt++){const $A=rt[Rt],VA=T($A);uA.boundary+=VA.boundary,uA.storage+=VA.storage}if($.__data=new Float32Array(uA.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=gA,pA>0){fA=gA%dA;const Rt=dA-fA;fA!==0&&Rt-uA.boundary<0&&(gA+=dA-fA,$.__offset=gA)}gA+=uA.storage}return fA=gA%dA,fA>0&&(gA+=dA-fA),iA.__size=gA,iA.__cache={},this}function T(iA){const j={boundary:0,storage:0};return typeof iA=="number"?(j.boundary=4,j.storage=4):iA.isVector2?(j.boundary=8,j.storage=8):iA.isVector3||iA.isColor?(j.boundary=16,j.storage=12):iA.isVector4?(j.boundary=16,j.storage=16):iA.isMatrix3?(j.boundary=48,j.storage=48):iA.isMatrix4?(j.boundary=64,j.storage=64):iA.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",iA),j}function x(iA){const j=iA.target;j.removeEventListener("dispose",x);const gA=h.indexOf(j.__bindingPointIndex);h.splice(gA,1),E.deleteBuffer(o[j.id]),delete o[j.id],delete r[j.id]}function L(){for(const iA in o)E.deleteBuffer(o[iA]);h=[],o={},r={}}return{bind:D,update:f,dispose:L}}function fU(){const E=fQ("canvas");return E.style.display="block",E}class DD{constructor(t={}){const{canvas:g=fU(),context:B=null,depth:o=!0,stencil:r=!0,alpha:h=!1,antialias:a=!1,premultipliedAlpha:D=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:S=!1}=t;this.isWebGLRenderer=!0;let F;B!==null?F=B.getContextAttributes().alpha:F=h;const J=new Uint32Array(4),P=new Int32Array(4);let T=null,x=null;const L=[],iA=[];this.domElement=g,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=tg,this._useLegacyLights=!1,this.toneMapping=KC,this.toneMappingExposure=1;const j=this;let gA=!1,dA=0,fA=0,pA=null,YA=-1,$=null;const uA=new Og,rt=new Og;let Rt=null;const TA=new Cg(0);let $A=0,VA=g.width,ft=g.height,it=1,nt=null,V=null;const X=new Og(0,0,VA,ft),AA=new Og(0,0,VA,ft);let CA=!1;const kA=new Dh;let qA=!1,gt=!1,wt=null;const Pt=new hg,Wt=new Mg,De=new bA,cg={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return pA===null?it:1}let rA=B;function Qt(BA,_A){for(let It=0;It<BA.length;It++){const HA=BA[It],et=g.getContext(HA,_A);if(et!==null)return et}return null}try{const BA={alpha:!0,depth:o,stencil:r,antialias:a,premultipliedAlpha:D,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:S};if("setAttribute"in g&&g.setAttribute("data-engine",`three.js r${hh}`),g.addEventListener("webglcontextlost",jt,!1),g.addEventListener("webglcontextrestored",tt,!1),g.addEventListener("webglcontextcreationerror",Kt,!1),rA===null){const _A=["webgl2","webgl","experimental-webgl"];if(j.isWebGL1Renderer===!0&&_A.shift(),rA=Qt(_A,BA),rA===null)throw Qt(_A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&rA instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),rA.getShaderPrecisionFormat===void 0&&(rA.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(BA){throw console.error("THREE.WebGLRenderer: "+BA.message),BA}let At,Nt,ut,fe,ie,Zt,Fe,PA,Ag,EA,z,NA,xt,ht,Ft,pe,Jt,zA,ge,me,Ue,Be,le,Pe;function Ng(){At=new NF(rA),Nt=new MF(rA,At,t),At.init(Nt),Be=new aU(rA,At,Nt),ut=new sU(rA,At,Nt),fe=new LF(rA),ie=new jN,Zt=new rU(rA,At,ut,ie,Nt,Be,fe),Fe=new RF(j),PA=new FF(j),Ag=new _R(rA,Nt),le=new wF(rA,At,Ag,Nt),EA=new UF(rA,Ag,fe,le),z=new KF(rA,EA,Ag,fe),ge=new JF(rA,Nt,Zt),pe=new mF(ie),NA=new zN(j,Fe,PA,At,Nt,le,pe),xt=new uU(j,ie),ht=new AU,Ft=new BU(At,Nt),zA=new pF(j,Fe,PA,ut,z,F,D),Jt=new QU(j,z,Nt),Pe=new DU(rA,fe,Nt,ut),me=new yF(rA,At,fe,Nt),Ue=new kF(rA,At,fe,Nt),fe.programs=NA.programs,j.capabilities=Nt,j.extensions=At,j.properties=ie,j.renderLists=ht,j.shadowMap=Jt,j.state=ut,j.info=fe}Ng();const RA=new dU(j,rA);this.xr=RA,this.getContext=function(){return rA},this.getContextAttributes=function(){return rA.getContextAttributes()},this.forceContextLoss=function(){const BA=At.get("WEBGL_lose_context");BA&&BA.loseContext()},this.forceContextRestore=function(){const BA=At.get("WEBGL_lose_context");BA&&BA.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(BA){BA!==void 0&&(it=BA,this.setSize(VA,ft,!1))},this.getSize=function(BA){return BA.set(VA,ft)},this.setSize=function(BA,_A,It=!0){if(RA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}VA=BA,ft=_A,g.width=Math.floor(BA*it),g.height=Math.floor(_A*it),It===!0&&(g.style.width=BA+"px",g.style.height=_A+"px"),this.setViewport(0,0,BA,_A)},this.getDrawingBufferSize=function(BA){return BA.set(VA*it,ft*it).floor()},this.setDrawingBufferSize=function(BA,_A,It){VA=BA,ft=_A,it=It,g.width=Math.floor(BA*It),g.height=Math.floor(_A*It),this.setViewport(0,0,BA,_A)},this.getCurrentViewport=function(BA){return BA.copy(uA)},this.getViewport=function(BA){return BA.copy(X)},this.setViewport=function(BA,_A,It,HA){BA.isVector4?X.set(BA.x,BA.y,BA.z,BA.w):X.set(BA,_A,It,HA),ut.viewport(uA.copy(X).multiplyScalar(it).floor())},this.getScissor=function(BA){return BA.copy(AA)},this.setScissor=function(BA,_A,It,HA){BA.isVector4?AA.set(BA.x,BA.y,BA.z,BA.w):AA.set(BA,_A,It,HA),ut.scissor(rt.copy(AA).multiplyScalar(it).floor())},this.getScissorTest=function(){return CA},this.setScissorTest=function(BA){ut.setScissorTest(CA=BA)},this.setOpaqueSort=function(BA){nt=BA},this.setTransparentSort=function(BA){V=BA},this.getClearColor=function(BA){return BA.copy(zA.getClearColor())},this.setClearColor=function(){zA.setClearColor.apply(zA,arguments)},this.getClearAlpha=function(){return zA.getClearAlpha()},this.setClearAlpha=function(){zA.setClearAlpha.apply(zA,arguments)},this.clear=function(BA=!0,_A=!0,It=!0){let HA=0;if(BA){let et=!1;if(pA!==null){const ne=pA.texture.format;et=ne===AD||ne===$u||ne===ju}if(et){const ne=pA.texture.type,Le=ne===YC||ne===xC||ne===ch||ne===Nn||ne===Xu||ne===zu,xe=zA.getClearColor(),Ke=zA.getClearAlpha(),eg=xe.r,Je=xe.g,Ye=xe.b;Le?(J[0]=eg,J[1]=Je,J[2]=Ye,J[3]=Ke,rA.clearBufferuiv(rA.COLOR,0,J)):(P[0]=eg,P[1]=Je,P[2]=Ye,P[3]=Ke,rA.clearBufferiv(rA.COLOR,0,P))}else HA|=rA.COLOR_BUFFER_BIT}_A&&(HA|=rA.DEPTH_BUFFER_BIT),It&&(HA|=rA.STENCIL_BUFFER_BIT),rA.clear(HA)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){g.removeEventListener("webglcontextlost",jt,!1),g.removeEventListener("webglcontextrestored",tt,!1),g.removeEventListener("webglcontextcreationerror",Kt,!1),ht.dispose(),Ft.dispose(),ie.dispose(),Fe.dispose(),PA.dispose(),z.dispose(),le.dispose(),Pe.dispose(),NA.dispose(),RA.dispose(),RA.removeEventListener("sessionstart",Ug),RA.removeEventListener("sessionend",Vg),wt&&(wt.dispose(),wt=null),sI.stop()};function jt(BA){BA.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),gA=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),gA=!1;const BA=fe.autoReset,_A=Jt.enabled,It=Jt.autoUpdate,HA=Jt.needsUpdate,et=Jt.type;Ng(),fe.autoReset=BA,Jt.enabled=_A,Jt.autoUpdate=It,Jt.needsUpdate=HA,Jt.type=et}function Kt(BA){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",BA.statusMessage)}function Ot(BA){const _A=BA.target;_A.removeEventListener("dispose",Ot),_e(_A)}function _e(BA){Yg(BA),ie.remove(BA)}function Yg(BA){const _A=ie.get(BA).programs;_A!==void 0&&(_A.forEach(function(It){NA.releaseProgram(It)}),BA.isShaderMaterial&&NA.releaseShaderCache(BA))}this.renderBufferDirect=function(BA,_A,It,HA,et,ne){_A===null&&(_A=cg);const Le=et.isMesh&&et.matrixWorld.determinant()<0,xe=WC(BA,_A,It,HA,et);ut.setMaterial(HA,Le);let Ke=It.index,eg=1;if(HA.wireframe===!0){if(Ke=EA.getWireframeAttribute(It),Ke===void 0)return;eg=2}const Je=It.drawRange,Ye=It.attributes.position;let xg=Je.start*eg,bg=(Je.start+Je.count)*eg;ne!==null&&(xg=Math.max(xg,ne.start*eg),bg=Math.min(bg,(ne.start+ne.count)*eg)),Ke!==null?(xg=Math.max(xg,0),bg=Math.min(bg,Ke.count)):Ye!=null&&(xg=Math.max(xg,0),bg=Math.min(bg,Ye.count));const lI=bg-xg;if(lI<0||lI===1/0)return;le.setup(et,HA,xe,It,Ke);let ti,qg=me;if(Ke!==null&&(ti=Ag.get(Ke),qg=Ue,qg.setIndex(ti)),et.isMesh)HA.wireframe===!0?(ut.setLineWidth(HA.wireframeLinewidth*se()),qg.setMode(rA.LINES)):qg.setMode(rA.TRIANGLES);else if(et.isLine){let Bg=HA.linewidth;Bg===void 0&&(Bg=1),ut.setLineWidth(Bg*se()),et.isLineSegments?qg.setMode(rA.LINES):et.isLineLoop?qg.setMode(rA.LINE_LOOP):qg.setMode(rA.LINE_STRIP)}else et.isPoints?qg.setMode(rA.POINTS):et.isSprite&&qg.setMode(rA.TRIANGLES);if(et.isInstancedMesh)qg.renderInstances(xg,lI,et.count);else if(It.isInstancedBufferGeometry){const Bg=It._maxInstanceCount!==void 0?It._maxInstanceCount:1/0,Wg=Math.min(It.instanceCount,Bg);qg.renderInstances(xg,lI,Wg)}else qg.render(xg,lI)},this.compile=function(BA,_A){function It(HA,et,ne){HA.transparent===!0&&HA.side===lB&&HA.forceSinglePass===!1?(HA.side=Di,HA.needsUpdate=!0,Vi(HA,et,ne),HA.side=QC,HA.needsUpdate=!0,Vi(HA,et,ne),HA.side=lB):Vi(HA,et,ne)}x=Ft.get(BA),x.init(),iA.push(x),BA.traverseVisible(function(HA){HA.isLight&&HA.layers.test(_A.layers)&&(x.pushLight(HA),HA.castShadow&&x.pushShadow(HA))}),x.setupLights(j._useLegacyLights),BA.traverse(function(HA){const et=HA.material;if(et)if(Array.isArray(et))for(let ne=0;ne<et.length;ne++){const Le=et[ne];It(Le,BA,HA)}else It(et,BA,HA)}),iA.pop(),x=null};let zg=null;function QI(BA){zg&&zg(BA)}function Ug(){sI.stop()}function Vg(){sI.start()}const sI=new hD;sI.setAnimationLoop(QI),typeof self<"u"&&sI.setContext(self),this.setAnimationLoop=function(BA){zg=BA,RA.setAnimationLoop(BA),BA===null?sI.stop():sI.start()},RA.addEventListener("sessionstart",Ug),RA.addEventListener("sessionend",Vg),this.render=function(BA,_A){if(_A!==void 0&&_A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(gA===!0)return;BA.matrixWorldAutoUpdate===!0&&BA.updateMatrixWorld(),_A.parent===null&&_A.matrixWorldAutoUpdate===!0&&_A.updateMatrixWorld(),RA.enabled===!0&&RA.isPresenting===!0&&(RA.cameraAutoUpdate===!0&&RA.updateCamera(_A),_A=RA.getCamera()),BA.isScene===!0&&BA.onBeforeRender(j,BA,_A,pA),x=Ft.get(BA,iA.length),x.init(),iA.push(x),Pt.multiplyMatrices(_A.projectionMatrix,_A.matrixWorldInverse),kA.setFromProjectionMatrix(Pt),gt=this.localClippingEnabled,qA=pe.init(this.clippingPlanes,gt),T=ht.get(BA,L.length),T.init(),L.push(T),Oi(BA,_A,0,j.sortObjects),T.finish(),j.sortObjects===!0&&T.sort(nt,V),this.info.render.frame++,qA===!0&&pe.beginShadows();const It=x.state.shadowsArray;if(Jt.render(It,BA,_A),qA===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),zA.render(T,BA),x.setupLights(j._useLegacyLights),_A.isArrayCamera){const HA=_A.cameras;for(let et=0,ne=HA.length;et<ne;et++){const Le=HA[et];VI(T,BA,Le,Le.viewport)}}else VI(T,BA,_A);pA!==null&&(Zt.updateMultisampleRenderTarget(pA),Zt.updateRenderTargetMipmap(pA)),BA.isScene===!0&&BA.onAfterRender(j,BA,_A),le.resetDefaultState(),YA=-1,$=null,iA.pop(),iA.length>0?x=iA[iA.length-1]:x=null,L.pop(),L.length>0?T=L[L.length-1]:T=null};function Oi(BA,_A,It,HA){if(BA.visible===!1)return;if(BA.layers.test(_A.layers)){if(BA.isGroup)It=BA.renderOrder;else if(BA.isLOD)BA.autoUpdate===!0&&BA.update(_A);else if(BA.isLight)x.pushLight(BA),BA.castShadow&&x.pushShadow(BA);else if(BA.isSprite){if(!BA.frustumCulled||kA.intersectsSprite(BA)){HA&&De.setFromMatrixPosition(BA.matrixWorld).applyMatrix4(Pt);const Le=z.update(BA),xe=BA.material;xe.visible&&T.push(BA,Le,xe,It,De.z,null)}}else if((BA.isMesh||BA.isLine||BA.isPoints)&&(!BA.frustumCulled||kA.intersectsObject(BA))){const Le=z.update(BA),xe=BA.material;if(HA&&(BA.boundingSphere!==void 0?(BA.boundingSphere===null&&BA.computeBoundingSphere(),De.copy(BA.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),De.copy(Le.boundingSphere.center)),De.applyMatrix4(BA.matrixWorld).applyMatrix4(Pt)),Array.isArray(xe)){const Ke=Le.groups;for(let eg=0,Je=Ke.length;eg<Je;eg++){const Ye=Ke[eg],xg=xe[Ye.materialIndex];xg&&xg.visible&&T.push(BA,Le,xg,It,De.z,Ye)}}else xe.visible&&T.push(BA,Le,xe,It,De.z,null)}}const ne=BA.children;for(let Le=0,xe=ne.length;Le<xe;Le++)Oi(ne[Le],_A,It,HA)}function VI(BA,_A,It,HA){const et=BA.opaque,ne=BA.transmissive,Le=BA.transparent;x.setupLightsView(It),qA===!0&&pe.setGlobalState(j.clippingPlanes,It),ne.length>0&&xi(et,ne,_A,It),HA&&ut.viewport(uA.copy(HA)),et.length>0&&bi(et,_A,It),ne.length>0&&bi(ne,_A,It),Le.length>0&&bi(Le,_A,It),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function xi(BA,_A,It,HA){const et=Nt.isWebGL2;wt===null&&(wt=new bn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?uQ:YC,minFilter:xn,samples:et?4:0})),j.getDrawingBufferSize(Wt),et?wt.setSize(Wt.x,Wt.y):wt.setSize(Cr(Wt.x),Cr(Wt.y));const ne=j.getRenderTarget();j.setRenderTarget(wt),j.getClearColor(TA),$A=j.getClearAlpha(),$A<1&&j.setClearColor(16777215,.5),j.clear();const Le=j.toneMapping;j.toneMapping=KC,bi(BA,It,HA),Zt.updateMultisampleRenderTarget(wt),Zt.updateRenderTargetMipmap(wt);let xe=!1;for(let Ke=0,eg=_A.length;Ke<eg;Ke++){const Je=_A[Ke],Ye=Je.object,xg=Je.geometry,bg=Je.material,lI=Je.group;if(bg.side===lB&&Ye.layers.test(HA.layers)){const ti=bg.side;bg.side=Di,bg.needsUpdate=!0,Ai(Ye,It,HA,xg,bg,lI),bg.side=ti,bg.needsUpdate=!0,xe=!0}}xe===!0&&(Zt.updateMultisampleRenderTarget(wt),Zt.updateRenderTargetMipmap(wt)),j.setRenderTarget(ne),j.setClearColor(TA,$A),j.toneMapping=Le}function bi(BA,_A,It){const HA=_A.isScene===!0?_A.overrideMaterial:null;for(let et=0,ne=BA.length;et<ne;et++){const Le=BA[et],xe=Le.object,Ke=Le.geometry,eg=HA===null?Le.material:HA,Je=Le.group;xe.layers.test(It.layers)&&Ai(xe,_A,It,Ke,eg,Je)}}function Ai(BA,_A,It,HA,et,ne){BA.onBeforeRender(j,_A,It,HA,et,ne),BA.modelViewMatrix.multiplyMatrices(It.matrixWorldInverse,BA.matrixWorld),BA.normalMatrix.getNormalMatrix(BA.modelViewMatrix),et.onBeforeRender(j,_A,It,HA,BA,ne),et.transparent===!0&&et.side===lB&&et.forceSinglePass===!1?(et.side=Di,et.needsUpdate=!0,j.renderBufferDirect(It,_A,HA,et,BA,ne),et.side=QC,et.needsUpdate=!0,j.renderBufferDirect(It,_A,HA,et,BA,ne),et.side=lB):j.renderBufferDirect(It,_A,HA,et,BA,ne),BA.onAfterRender(j,_A,It,HA,et,ne)}function Vi(BA,_A,It){_A.isScene!==!0&&(_A=cg);const HA=ie.get(BA),et=x.state.lights,ne=x.state.shadowsArray,Le=et.state.version,xe=NA.getParameters(BA,et.state,ne,_A,It),Ke=NA.getProgramCacheKey(xe);let eg=HA.programs;HA.environment=BA.isMeshStandardMaterial?_A.environment:null,HA.fog=_A.fog,HA.envMap=(BA.isMeshStandardMaterial?PA:Fe).get(BA.envMap||HA.environment),eg===void 0&&(BA.addEventListener("dispose",Ot),eg=new Map,HA.programs=eg);let Je=eg.get(Ke);if(Je!==void 0){if(HA.currentProgram===Je&&HA.lightsStateVersion===Le)return rC(BA,xe),Je}else xe.uniforms=NA.getUniforms(BA),BA.onBuild(It,xe,j),BA.onBeforeCompile(xe,j),Je=NA.acquireProgram(xe,Ke),eg.set(Ke,Je),HA.uniforms=xe.uniforms;const Ye=HA.uniforms;(!BA.isShaderMaterial&&!BA.isRawShaderMaterial||BA.clipping===!0)&&(Ye.clippingPlanes=pe.uniform),rC(BA,xe),HA.needsLights=aC(BA),HA.lightsStateVersion=Le,HA.needsLights&&(Ye.ambientLightColor.value=et.state.ambient,Ye.lightProbe.value=et.state.probe,Ye.directionalLights.value=et.state.directional,Ye.directionalLightShadows.value=et.state.directionalShadow,Ye.spotLights.value=et.state.spot,Ye.spotLightShadows.value=et.state.spotShadow,Ye.rectAreaLights.value=et.state.rectArea,Ye.ltc_1.value=et.state.rectAreaLTC1,Ye.ltc_2.value=et.state.rectAreaLTC2,Ye.pointLights.value=et.state.point,Ye.pointLightShadows.value=et.state.pointShadow,Ye.hemisphereLights.value=et.state.hemi,Ye.directionalShadowMap.value=et.state.directionalShadowMap,Ye.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ye.spotShadowMap.value=et.state.spotShadowMap,Ye.spotLightMatrix.value=et.state.spotLightMatrix,Ye.spotLightMap.value=et.state.spotLightMap,Ye.pointShadowMap.value=et.state.pointShadowMap,Ye.pointShadowMatrix.value=et.state.pointShadowMatrix);const xg=Je.getUniforms(),bg=Ir.seqWithValue(xg.seq,Ye);return HA.currentProgram=Je,HA.uniformsList=bg,Je}function rC(BA,_A){const It=ie.get(BA);It.outputColorSpace=_A.outputColorSpace,It.instancing=_A.instancing,It.instancingColor=_A.instancingColor,It.skinning=_A.skinning,It.morphTargets=_A.morphTargets,It.morphNormals=_A.morphNormals,It.morphColors=_A.morphColors,It.morphTargetsCount=_A.morphTargetsCount,It.numClippingPlanes=_A.numClippingPlanes,It.numIntersection=_A.numClipIntersection,It.vertexAlphas=_A.vertexAlphas,It.vertexTangents=_A.vertexTangents,It.toneMapping=_A.toneMapping}function WC(BA,_A,It,HA,et){_A.isScene!==!0&&(_A=cg),Zt.resetTextureUnits();const ne=_A.fog,Le=HA.isMeshStandardMaterial?_A.environment:null,xe=pA===null?j.outputColorSpace:pA.isXRRenderTarget===!0?pA.texture.colorSpace:xB,Ke=(HA.isMeshStandardMaterial?PA:Fe).get(HA.envMap||Le),eg=HA.vertexColors===!0&&!!It.attributes.color&&It.attributes.color.itemSize===4,Je=!!It.attributes.tangent&&(!!HA.normalMap||HA.anisotropy>0),Ye=!!It.morphAttributes.position,xg=!!It.morphAttributes.normal,bg=!!It.morphAttributes.color;let lI=KC;HA.toneMapped&&(pA===null||pA.isXRRenderTarget===!0)&&(lI=j.toneMapping);const ti=It.morphAttributes.position||It.morphAttributes.normal||It.morphAttributes.color,qg=ti!==void 0?ti.length:0,Bg=ie.get(HA),Wg=x.state.lights;if(qA===!0&&(gt===!0||BA!==$)){const N=BA===$&&HA.id===YA;pe.setState(HA,BA,N)}let Zg=!1;HA.version===Bg.__version?(Bg.needsLights&&Bg.lightsStateVersion!==Wg.state.version||Bg.outputColorSpace!==xe||et.isInstancedMesh&&Bg.instancing===!1||!et.isInstancedMesh&&Bg.instancing===!0||et.isSkinnedMesh&&Bg.skinning===!1||!et.isSkinnedMesh&&Bg.skinning===!0||et.isInstancedMesh&&Bg.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Bg.instancingColor===!1&&et.instanceColor!==null||Bg.envMap!==Ke||HA.fog===!0&&Bg.fog!==ne||Bg.numClippingPlanes!==void 0&&(Bg.numClippingPlanes!==pe.numPlanes||Bg.numIntersection!==pe.numIntersection)||Bg.vertexAlphas!==eg||Bg.vertexTangents!==Je||Bg.morphTargets!==Ye||Bg.morphNormals!==xg||Bg.morphColors!==bg||Bg.toneMapping!==lI||Nt.isWebGL2===!0&&Bg.morphTargetsCount!==qg)&&(Zg=!0):(Zg=!0,Bg.__version=HA.version);let wI=Bg.currentProgram;Zg===!0&&(wI=Vi(HA,_A,et));let ri=!1,Xi=!1,zi=!1;const rI=wI.getUniforms(),pi=Bg.uniforms;if(ut.useProgram(wI.program)&&(ri=!0,Xi=!0,zi=!0),HA.id!==YA&&(YA=HA.id,Xi=!0),ri||$!==BA){if(rI.setValue(rA,"projectionMatrix",BA.projectionMatrix),Nt.logarithmicDepthBuffer&&rI.setValue(rA,"logDepthBufFC",2/(Math.log(BA.far+1)/Math.LN2)),$!==BA&&($=BA,Xi=!0,zi=!0),HA.isShaderMaterial||HA.isMeshPhongMaterial||HA.isMeshToonMaterial||HA.isMeshStandardMaterial||HA.envMap){const N=rI.map.cameraPosition;N!==void 0&&N.setValue(rA,De.setFromMatrixPosition(BA.matrixWorld))}(HA.isMeshPhongMaterial||HA.isMeshToonMaterial||HA.isMeshLambertMaterial||HA.isMeshBasicMaterial||HA.isMeshStandardMaterial||HA.isShaderMaterial)&&rI.setValue(rA,"isOrthographic",BA.isOrthographicCamera===!0),(HA.isMeshPhongMaterial||HA.isMeshToonMaterial||HA.isMeshLambertMaterial||HA.isMeshBasicMaterial||HA.isMeshStandardMaterial||HA.isShaderMaterial||HA.isShadowMaterial||et.isSkinnedMesh)&&rI.setValue(rA,"viewMatrix",BA.matrixWorldInverse)}if(et.isSkinnedMesh){rI.setOptional(rA,et,"bindMatrix"),rI.setOptional(rA,et,"bindMatrixInverse");const N=et.skeleton;N&&(Nt.floatVertexTextures?(N.boneTexture===null&&N.computeBoneTexture(),rI.setValue(rA,"boneTexture",N.boneTexture,Zt),rI.setValue(rA,"boneTextureSize",N.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const KB=It.morphAttributes;if((KB.position!==void 0||KB.normal!==void 0||KB.color!==void 0&&Nt.isWebGL2===!0)&&ge.update(et,It,wI),(Xi||Bg.receiveShadow!==et.receiveShadow)&&(Bg.receiveShadow=et.receiveShadow,rI.setValue(rA,"receiveShadow",et.receiveShadow)),HA.isMeshGouraudMaterial&&HA.envMap!==null&&(pi.envMap.value=Ke,pi.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Xi&&(rI.setValue(rA,"toneMappingExposure",j.toneMappingExposure),Bg.needsLights&&Zi(pi,zi),ne&&HA.fog===!0&&xt.refreshFogUniforms(pi,ne),xt.refreshMaterialUniforms(pi,HA,it,ft,wt),Ir.upload(rA,Bg.uniformsList,pi,Zt)),HA.isShaderMaterial&&HA.uniformsNeedUpdate===!0&&(Ir.upload(rA,Bg.uniformsList,pi,Zt),HA.uniformsNeedUpdate=!1),HA.isSpriteMaterial&&rI.setValue(rA,"center",et.center),rI.setValue(rA,"modelViewMatrix",et.modelViewMatrix),rI.setValue(rA,"normalMatrix",et.normalMatrix),rI.setValue(rA,"modelMatrix",et.matrixWorld),HA.isShaderMaterial||HA.isRawShaderMaterial){const N=HA.uniformsGroups;for(let Z=0,aA=N.length;Z<aA;Z++)if(Nt.isWebGL2){const yA=N[Z];Pe.update(yA,wI),Pe.bind(yA,wI)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wI}function Zi(BA,_A){BA.ambientLightColor.needsUpdate=_A,BA.lightProbe.needsUpdate=_A,BA.directionalLights.needsUpdate=_A,BA.directionalLightShadows.needsUpdate=_A,BA.pointLights.needsUpdate=_A,BA.pointLightShadows.needsUpdate=_A,BA.spotLights.needsUpdate=_A,BA.spotLightShadows.needsUpdate=_A,BA.rectAreaLights.needsUpdate=_A,BA.hemisphereLights.needsUpdate=_A}function aC(BA){return BA.isMeshLambertMaterial||BA.isMeshToonMaterial||BA.isMeshPhongMaterial||BA.isMeshStandardMaterial||BA.isShadowMaterial||BA.isShaderMaterial&&BA.lights===!0}this.getActiveCubeFace=function(){return dA},this.getActiveMipmapLevel=function(){return fA},this.getRenderTarget=function(){return pA},this.setRenderTargetTextures=function(BA,_A,It){ie.get(BA.texture).__webglTexture=_A,ie.get(BA.depthTexture).__webglTexture=It;const HA=ie.get(BA);HA.__hasExternalTextures=!0,HA.__hasExternalTextures&&(HA.__autoAllocateDepthBuffer=It===void 0,HA.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),HA.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(BA,_A){const It=ie.get(BA);It.__webglFramebuffer=_A,It.__useDefaultFramebuffer=_A===void 0},this.setRenderTarget=function(BA,_A=0,It=0){pA=BA,dA=_A,fA=It;let HA=!0,et=null,ne=!1,Le=!1;if(BA){const Ke=ie.get(BA);Ke.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(rA.FRAMEBUFFER,null),HA=!1):Ke.__webglFramebuffer===void 0?Zt.setupRenderTarget(BA):Ke.__hasExternalTextures&&Zt.rebindTextures(BA,ie.get(BA.texture).__webglTexture,ie.get(BA.depthTexture).__webglTexture);const eg=BA.texture;(eg.isData3DTexture||eg.isDataArrayTexture||eg.isCompressedArrayTexture)&&(Le=!0);const Je=ie.get(BA).__webglFramebuffer;BA.isWebGLCubeRenderTarget?(Array.isArray(Je[_A])?et=Je[_A][It]:et=Je[_A],ne=!0):Nt.isWebGL2&&BA.samples>0&&Zt.useMultisampledRTT(BA)===!1?et=ie.get(BA).__webglMultisampledFramebuffer:Array.isArray(Je)?et=Je[It]:et=Je,uA.copy(BA.viewport),rt.copy(BA.scissor),Rt=BA.scissorTest}else uA.copy(X).multiplyScalar(it).floor(),rt.copy(AA).multiplyScalar(it).floor(),Rt=CA;if(ut.bindFramebuffer(rA.FRAMEBUFFER,et)&&Nt.drawBuffers&&HA&&ut.drawBuffers(BA,et),ut.viewport(uA),ut.scissor(rt),ut.setScissorTest(Rt),ne){const Ke=ie.get(BA.texture);rA.framebufferTexture2D(rA.FRAMEBUFFER,rA.COLOR_ATTACHMENT0,rA.TEXTURE_CUBE_MAP_POSITIVE_X+_A,Ke.__webglTexture,It)}else if(Le){const Ke=ie.get(BA.texture),eg=_A||0;rA.framebufferTextureLayer(rA.FRAMEBUFFER,rA.COLOR_ATTACHMENT0,Ke.__webglTexture,It||0,eg)}YA=-1},this.readRenderTargetPixels=function(BA,_A,It,HA,et,ne,Le){if(!(BA&&BA.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ie.get(BA).__webglFramebuffer;if(BA.isWebGLCubeRenderTarget&&Le!==void 0&&(xe=xe[Le]),xe){ut.bindFramebuffer(rA.FRAMEBUFFER,xe);try{const Ke=BA.texture,eg=Ke.format,Je=Ke.type;if(eg!==Wi&&Be.convert(eg)!==rA.getParameter(rA.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Je===uQ&&(At.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&At.has("EXT_color_buffer_float"));if(Je!==YC&&Be.convert(Je)!==rA.getParameter(rA.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===oC&&(Nt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_A>=0&&_A<=BA.width-HA&&It>=0&&It<=BA.height-et&&rA.readPixels(_A,It,HA,et,Be.convert(eg),Be.convert(Je),ne)}finally{const Ke=pA!==null?ie.get(pA).__webglFramebuffer:null;ut.bindFramebuffer(rA.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(BA,_A,It=0){const HA=Math.pow(2,-It),et=Math.floor(_A.image.width*HA),ne=Math.floor(_A.image.height*HA);Zt.setTexture2D(_A,0),rA.copyTexSubImage2D(rA.TEXTURE_2D,It,0,0,BA.x,BA.y,et,ne),ut.unbindTexture()},this.copyTextureToTexture=function(BA,_A,It,HA=0){const et=_A.image.width,ne=_A.image.height,Le=Be.convert(It.format),xe=Be.convert(It.type);Zt.setTexture2D(It,0),rA.pixelStorei(rA.UNPACK_FLIP_Y_WEBGL,It.flipY),rA.pixelStorei(rA.UNPACK_PREMULTIPLY_ALPHA_WEBGL,It.premultiplyAlpha),rA.pixelStorei(rA.UNPACK_ALIGNMENT,It.unpackAlignment),_A.isDataTexture?rA.texSubImage2D(rA.TEXTURE_2D,HA,BA.x,BA.y,et,ne,Le,xe,_A.image.data):_A.isCompressedTexture?rA.compressedTexSubImage2D(rA.TEXTURE_2D,HA,BA.x,BA.y,_A.mipmaps[0].width,_A.mipmaps[0].height,Le,_A.mipmaps[0].data):rA.texSubImage2D(rA.TEXTURE_2D,HA,BA.x,BA.y,Le,xe,_A.image),HA===0&&It.generateMipmaps&&rA.generateMipmap(rA.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(BA,_A,It,HA,et=0){if(j.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=BA.max.x-BA.min.x+1,Le=BA.max.y-BA.min.y+1,xe=BA.max.z-BA.min.z+1,Ke=Be.convert(HA.format),eg=Be.convert(HA.type);let Je;if(HA.isData3DTexture)Zt.setTexture3D(HA,0),Je=rA.TEXTURE_3D;else if(HA.isDataArrayTexture)Zt.setTexture2DArray(HA,0),Je=rA.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}rA.pixelStorei(rA.UNPACK_FLIP_Y_WEBGL,HA.flipY),rA.pixelStorei(rA.UNPACK_PREMULTIPLY_ALPHA_WEBGL,HA.premultiplyAlpha),rA.pixelStorei(rA.UNPACK_ALIGNMENT,HA.unpackAlignment);const Ye=rA.getParameter(rA.UNPACK_ROW_LENGTH),xg=rA.getParameter(rA.UNPACK_IMAGE_HEIGHT),bg=rA.getParameter(rA.UNPACK_SKIP_PIXELS),lI=rA.getParameter(rA.UNPACK_SKIP_ROWS),ti=rA.getParameter(rA.UNPACK_SKIP_IMAGES),qg=It.isCompressedTexture?It.mipmaps[0]:It.image;rA.pixelStorei(rA.UNPACK_ROW_LENGTH,qg.width),rA.pixelStorei(rA.UNPACK_IMAGE_HEIGHT,qg.height),rA.pixelStorei(rA.UNPACK_SKIP_PIXELS,BA.min.x),rA.pixelStorei(rA.UNPACK_SKIP_ROWS,BA.min.y),rA.pixelStorei(rA.UNPACK_SKIP_IMAGES,BA.min.z),It.isDataTexture||It.isData3DTexture?rA.texSubImage3D(Je,et,_A.x,_A.y,_A.z,ne,Le,xe,Ke,eg,qg.data):It.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),rA.compressedTexSubImage3D(Je,et,_A.x,_A.y,_A.z,ne,Le,xe,Ke,qg.data)):rA.texSubImage3D(Je,et,_A.x,_A.y,_A.z,ne,Le,xe,Ke,eg,qg),rA.pixelStorei(rA.UNPACK_ROW_LENGTH,Ye),rA.pixelStorei(rA.UNPACK_IMAGE_HEIGHT,xg),rA.pixelStorei(rA.UNPACK_SKIP_PIXELS,bg),rA.pixelStorei(rA.UNPACK_SKIP_ROWS,lI),rA.pixelStorei(rA.UNPACK_SKIP_IMAGES,ti),et===0&&HA.generateMipmaps&&rA.generateMipmap(Je),ut.unbindTexture()},this.initTexture=function(BA){BA.isCubeTexture?Zt.setTextureCube(BA,0):BA.isData3DTexture?Zt.setTexture3D(BA,0):BA.isDataArrayTexture||BA.isCompressedArrayTexture?Zt.setTexture2DArray(BA,0):Zt.setTexture2D(BA,0),ut.unbindTexture()},this.resetState=function(){dA=0,fA=0,pA=null,ut.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return EC}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tg?kn:eD}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===kn?tg:xB}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class pU extends DD{}pU.prototype.isWebGL1Renderer=!0;class fD extends iI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,g){return super.copy(t,g),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const g=super.toJSON(t);return this.fog!==null&&(g.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(g.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(g.object.backgroundIntensity=this.backgroundIntensity),g}}class wU{constructor(t,g){this.isInterleavedBuffer=!0,this.array=t,this.stride=g,this.count=t!==void 0?t.length/g:0,this.usage=Ch,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dB()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,g,B){t*=this.stride,B*=g.stride;for(let o=0,r=this.stride;o<r;o++)this.array[t+o]=g.array[B+o];return this}set(t,g=0){return this.array.set(t,g),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dB()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const g=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),B=new this.constructor(g,this.stride);return B.setUsage(this.usage),B}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dB()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ei=new bA;class yh{constructor(t,g,B,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=g,this.offset=B,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let g=0,B=this.data.count;g<B;g++)Ei.fromBufferAttribute(this,g),Ei.applyMatrix4(t),this.setXYZ(g,Ei.x,Ei.y,Ei.z);return this}applyNormalMatrix(t){for(let g=0,B=this.count;g<B;g++)Ei.fromBufferAttribute(this,g),Ei.applyNormalMatrix(t),this.setXYZ(g,Ei.x,Ei.y,Ei.z);return this}transformDirection(t){for(let g=0,B=this.count;g<B;g++)Ei.fromBufferAttribute(this,g),Ei.transformDirection(t),this.setXYZ(g,Ei.x,Ei.y,Ei.z);return this}setX(t,g){return this.normalized&&(g=_g(g,this.array)),this.data.array[t*this.data.stride+this.offset]=g,this}setY(t,g){return this.normalized&&(g=_g(g,this.array)),this.data.array[t*this.data.stride+this.offset+1]=g,this}setZ(t,g){return this.normalized&&(g=_g(g,this.array)),this.data.array[t*this.data.stride+this.offset+2]=g,this}setW(t,g){return this.normalized&&(g=_g(g,this.array)),this.data.array[t*this.data.stride+this.offset+3]=g,this}getX(t){let g=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(g=LB(g,this.array)),g}getY(t){let g=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(g=LB(g,this.array)),g}getZ(t){let g=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(g=LB(g,this.array)),g}getW(t){let g=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(g=LB(g,this.array)),g}setXY(t,g,B){return t=t*this.data.stride+this.offset,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array)),this.data.array[t+0]=g,this.data.array[t+1]=B,this}setXYZ(t,g,B,o){return t=t*this.data.stride+this.offset,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array),o=_g(o,this.array)),this.data.array[t+0]=g,this.data.array[t+1]=B,this.data.array[t+2]=o,this}setXYZW(t,g,B,o,r){return t=t*this.data.stride+this.offset,this.normalized&&(g=_g(g,this.array),B=_g(B,this.array),o=_g(o,this.array),r=_g(r,this.array)),this.data.array[t+0]=g,this.data.array[t+1]=B,this.data.array[t+2]=o,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let B=0;B<this.count;B++){const o=B*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)g.push(this.data.array[o+r])}return new si(new this.array.constructor(g),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let B=0;B<this.count;B++){const o=B*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)g.push(this.data.array[o+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:g,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lu=new bA,du=new Og,uu=new Og,yU=new bA,Du=new hg,vo=new bA,Va=new bB,fu=new hg,Za=new or;class MU extends ui{constructor(t,g){super(t,g),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new hg,this.bindMatrixInverse=new hg,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new sC),this.boundingBox.makeEmpty();const g=t.getAttribute("position");for(let B=0;B<g.count;B++)vo.fromBufferAttribute(g,B),this.applyBoneTransform(B,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bB),this.boundingSphere.makeEmpty();const g=t.getAttribute("position");for(let B=0;B<g.count;B++)vo.fromBufferAttribute(g,B),this.applyBoneTransform(B,vo),this.boundingSphere.expandByPoint(vo)}copy(t,g){return super.copy(t,g),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,g){const B=this.material,o=this.matrixWorld;B!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(o),t.ray.intersectsSphere(Va)!==!1&&(fu.copy(o).invert(),Za.copy(t.ray).applyMatrix4(fu),!(this.boundingBox!==null&&Za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,g,Za)))}getVertexPosition(t,g){return super.getVertexPosition(t,g),this.applyBoneTransform(t,g),g}bind(t,g){this.skeleton=t,g===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),g=this.matrixWorld),this.bindMatrix.copy(g),this.bindMatrixInverse.copy(g).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Og,g=this.geometry.attributes.skinWeight;for(let B=0,o=g.count;B<o;B++){t.fromBufferAttribute(g,B);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),g.setXYZW(B,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,g){const B=this.skeleton,o=this.geometry;du.fromBufferAttribute(o.attributes.skinIndex,t),uu.fromBufferAttribute(o.attributes.skinWeight,t),lu.copy(g).applyMatrix4(this.bindMatrix),g.set(0,0,0);for(let r=0;r<4;r++){const h=uu.getComponent(r);if(h!==0){const a=du.getComponent(r);Du.multiplyMatrices(B.bones[a].matrixWorld,B.boneInverses[a]),g.addScaledVector(yU.copy(lu).applyMatrix4(Du),h)}}return g.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,g){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,g)}}class pD extends iI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mU extends OI{constructor(t=null,g=1,B=1,o,r,h,a,D,f=KI,m=KI,S,F){super(null,h,a,D,f,m,o,r,S,F),this.isDataTexture=!0,this.image={data:t,width:g,height:B},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=new hg,RU=new hg;class Mh{constructor(t=[],g=[]){this.uuid=dB(),this.bones=t.slice(0),this.boneInverses=g,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const t=this.bones,g=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),g.length===0)this.calculateInverses();else if(t.length!==g.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let B=0,o=this.bones.length;B<o;B++)this.boneInverses.push(new hg)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,g=this.bones.length;t<g;t++){const B=new hg;this.bones[t]&&B.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(B)}}pose(){for(let t=0,g=this.bones.length;t<g;t++){const B=this.bones[t];B&&B.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,g=this.bones.length;t<g;t++){const B=this.bones[t];B&&(B.parent&&B.parent.isBone?(B.matrix.copy(B.parent.matrixWorld).invert(),B.matrix.multiply(B.matrixWorld)):B.matrix.copy(B.matrixWorld),B.matrix.decompose(B.position,B.quaternion,B.scale))}}update(){const t=this.bones,g=this.boneInverses,B=this.boneMatrices,o=this.boneTexture;for(let r=0,h=t.length;r<h;r++){const a=t[r]?t[r].matrixWorld:RU;pu.multiplyMatrices(a,g[r]),pu.toArray(B,r*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Mh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=ID(t),t=Math.max(t,4);const g=new Float32Array(t*t*4);g.set(this.boneMatrices);const B=new mU(g,t,t,Wi,oC);return B.needsUpdate=!0,this.boneMatrices=g,this.boneTexture=B,this.boneTextureSize=t,this}getBoneByName(t){for(let g=0,B=this.bones.length;g<B;g++){const o=this.bones[g];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,g){this.uuid=t.uuid;for(let B=0,o=t.bones.length;B<o;B++){const r=t.bones[B];let h=g[r];h===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),h=new pD),this.bones.push(h),this.boneInverses.push(new hg().fromArray(t.boneInverses[B]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const g=this.bones,B=this.boneInverses;for(let o=0,r=g.length;o<r;o++){const h=g[o];t.bones.push(h.uuid);const a=B[o];t.boneInverses.push(a.toArray())}return t}}class wu extends si{constructor(t,g,B,o=1){super(t,g,B),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ho=new hg,yu=new hg,zs=[],Mu=new sC,SU=new hg,QQ=new ui,sQ=new bB;class GU extends ui{constructor(t,g,B){super(t,g),this.isInstancedMesh=!0,this.instanceMatrix=new wu(new Float32Array(B*16),16),this.instanceColor=null,this.count=B,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<B;o++)this.setMatrixAt(o,SU)}computeBoundingBox(){const t=this.geometry,g=this.count;this.boundingBox===null&&(this.boundingBox=new sC),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let B=0;B<g;B++)this.getMatrixAt(B,Ho),Mu.copy(t.boundingBox).applyMatrix4(Ho),this.boundingBox.union(Mu)}computeBoundingSphere(){const t=this.geometry,g=this.count;this.boundingSphere===null&&(this.boundingSphere=new bB),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let B=0;B<g;B++)this.getMatrixAt(B,Ho),sQ.copy(t.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(sQ)}copy(t,g){return super.copy(t,g),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,g){g.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,g){g.fromArray(this.instanceMatrix.array,t*16)}raycast(t,g){const B=this.matrixWorld,o=this.count;if(QQ.geometry=this.geometry,QQ.material=this.material,QQ.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sQ.copy(this.boundingSphere),sQ.applyMatrix4(B),t.ray.intersectsSphere(sQ)!==!1))for(let r=0;r<o;r++){this.getMatrixAt(r,Ho),yu.multiplyMatrices(B,Ho),QQ.matrixWorld=yu,QQ.raycast(t,zs);for(let h=0,a=zs.length;h<a;h++){const D=zs[h];D.instanceId=r,D.object=this,g.push(D)}zs.length=0}}setColorAt(t,g){this.instanceColor===null&&(this.instanceColor=new wu(new Float32Array(this.instanceMatrix.count*3),3)),g.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,g){g.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mh extends uB{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Cg(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mu=new bA,Ru=new bA,Su=new hg,Xa=new or,js=new bB;class Rh extends iI{constructor(t=new Pi,g=new mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=g,this.updateMorphTargets()}copy(t,g){return super.copy(t,g),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const g=t.attributes.position,B=[0];for(let o=1,r=g.count;o<r;o++)mu.fromBufferAttribute(g,o-1),Ru.fromBufferAttribute(g,o),B[o]=B[o-1],B[o]+=mu.distanceTo(Ru);t.setAttribute("lineDistance",new fi(B,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,g){const B=this.geometry,o=this.matrixWorld,r=t.params.Line.threshold,h=B.drawRange;if(B.boundingSphere===null&&B.computeBoundingSphere(),js.copy(B.boundingSphere),js.applyMatrix4(o),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;Su.copy(o).invert(),Xa.copy(t.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),D=a*a,f=new bA,m=new bA,S=new bA,F=new bA,J=this.isLineSegments?2:1,P=B.index,x=B.attributes.position;if(P!==null){const L=Math.max(0,h.start),iA=Math.min(P.count,h.start+h.count);for(let j=L,gA=iA-1;j<gA;j+=J){const dA=P.getX(j),fA=P.getX(j+1);if(f.fromBufferAttribute(x,dA),m.fromBufferAttribute(x,fA),Xa.distanceSqToSegment(f,m,F,S)>D)continue;F.applyMatrix4(this.matrixWorld);const YA=t.ray.origin.distanceTo(F);YA<t.near||YA>t.far||g.push({distance:YA,point:S.clone().applyMatrix4(this.matrixWorld),index:j,face:null,faceIndex:null,object:this})}}else{const L=Math.max(0,h.start),iA=Math.min(x.count,h.start+h.count);for(let j=L,gA=iA-1;j<gA;j+=J){if(f.fromBufferAttribute(x,j),m.fromBufferAttribute(x,j+1),Xa.distanceSqToSegment(f,m,F,S)>D)continue;F.applyMatrix4(this.matrixWorld);const fA=t.ray.origin.distanceTo(F);fA<t.near||fA>t.far||g.push({distance:fA,point:S.clone().applyMatrix4(this.matrixWorld),index:j,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const g=this.geometry.morphAttributes,B=Object.keys(g);if(B.length>0){const o=g[B[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,h=o.length;r<h;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Gu=new bA,Fu=new bA;class wD extends Rh{constructor(t,g){super(t,g),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const g=t.attributes.position,B=[];for(let o=0,r=g.count;o<r;o+=2)Gu.fromBufferAttribute(g,o),Fu.fromBufferAttribute(g,o+1),B[o]=o===0?0:B[o-1],B[o+1]=B[o]+Gu.distanceTo(Fu);t.setAttribute("lineDistance",new fi(B,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FU extends Rh{constructor(t,g){super(t,g),this.isLineLoop=!0,this.type="LineLoop"}}class yD extends uB{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Cg(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Nu=new hg,Qh=new or,$s=new bB,Ar=new bA;class NU extends iI{constructor(t=new Pi,g=new yD){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=g,this.updateMorphTargets()}copy(t,g){return super.copy(t,g),this.material=t.material,this.geometry=t.geometry,this}raycast(t,g){const B=this.geometry,o=this.matrixWorld,r=t.params.Points.threshold,h=B.drawRange;if(B.boundingSphere===null&&B.computeBoundingSphere(),$s.copy(B.boundingSphere),$s.applyMatrix4(o),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;Nu.copy(o).invert(),Qh.copy(t.ray).applyMatrix4(Nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),D=a*a,f=B.index,S=B.attributes.position;if(f!==null){const F=Math.max(0,h.start),J=Math.min(f.count,h.start+h.count);for(let P=F,T=J;P<T;P++){const x=f.getX(P);Ar.fromBufferAttribute(S,x),Uu(Ar,x,D,o,t,g,this)}}else{const F=Math.max(0,h.start),J=Math.min(S.count,h.start+h.count);for(let P=F,T=J;P<T;P++)Ar.fromBufferAttribute(S,P),Uu(Ar,P,D,o,t,g,this)}}updateMorphTargets(){const g=this.geometry.morphAttributes,B=Object.keys(g);if(B.length>0){const o=g[B[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,h=o.length;r<h;r++){const a=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uu(E,t,g,B,o,r,h){const a=Qh.distanceSqToPoint(E);if(a<g){const D=new bA;Qh.closestPointToPoint(E,D),D.applyMatrix4(B);const f=o.ray.origin.distanceTo(D);if(f<o.near||f>o.far)return;r.push({distance:f,distanceToRay:Math.sqrt(a),point:D,index:t,face:null,object:h})}}class Sh extends Pi{constructor(t=1,g=.4,B=64,o=8,r=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:g,tubularSegments:B,radialSegments:o,p:r,q:h},B=Math.floor(B),o=Math.floor(o);const a=[],D=[],f=[],m=[],S=new bA,F=new bA,J=new bA,P=new bA,T=new bA,x=new bA,L=new bA;for(let j=0;j<=B;++j){const gA=j/B*r*Math.PI*2;iA(gA,r,h,t,J),iA(gA+.01,r,h,t,P),x.subVectors(P,J),L.addVectors(P,J),T.crossVectors(x,L),L.crossVectors(T,x),T.normalize(),L.normalize();for(let dA=0;dA<=o;++dA){const fA=dA/o*Math.PI*2,pA=-g*Math.cos(fA),YA=g*Math.sin(fA);S.x=J.x+(pA*L.x+YA*T.x),S.y=J.y+(pA*L.y+YA*T.y),S.z=J.z+(pA*L.z+YA*T.z),D.push(S.x,S.y,S.z),F.subVectors(S,J).normalize(),f.push(F.x,F.y,F.z),m.push(j/B),m.push(dA/o)}}for(let j=1;j<=B;j++)for(let gA=1;gA<=o;gA++){const dA=(o+1)*(j-1)+(gA-1),fA=(o+1)*j+(gA-1),pA=(o+1)*j+gA,YA=(o+1)*(j-1)+gA;a.push(dA,fA,YA),a.push(fA,pA,YA)}this.setIndex(a),this.setAttribute("position",new fi(D,3)),this.setAttribute("normal",new fi(f,3)),this.setAttribute("uv",new fi(m,2));function iA(j,gA,dA,fA,pA){const YA=Math.cos(j),$=Math.sin(j),uA=dA/gA*j,rt=Math.cos(uA);pA.x=fA*(2+rt)*.5*YA,pA.y=fA*(2+rt)*$*.5,pA.z=fA*Math.sin(uA)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Gh extends uB{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Cg(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Cg(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new Mg(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class TC extends Gh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mg(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $I(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(g){this.ior=(1+.4*g)/(1-.4*g)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Cg(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Cg(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Cg(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class MD extends uB{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new Mg(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}function UC(E,t,g){return mD(E)?new E.constructor(E.subarray(t,g!==void 0?g:E.length)):E.slice(t,g)}function tr(E,t,g){return!E||!g&&E.constructor===t?E:typeof t.BYTES_PER_ELEMENT=="number"?new t(E):Array.prototype.slice.call(E)}function mD(E){return ArrayBuffer.isView(E)&&!(E instanceof DataView)}function UU(E){function t(o,r){return E[o]-E[r]}const g=E.length,B=new Array(g);for(let o=0;o!==g;++o)B[o]=o;return B.sort(t),B}function ku(E,t,g){const B=E.length,o=new E.constructor(B);for(let r=0,h=0;h!==B;++r){const a=g[r]*t;for(let D=0;D!==t;++D)o[h++]=E[a+D]}return o}function RD(E,t,g,B){let o=1,r=E[0];for(;r!==void 0&&r[B]===void 0;)r=E[o++];if(r===void 0)return;let h=r[B];if(h!==void 0)if(Array.isArray(h))do h=r[B],h!==void 0&&(t.push(r.time),g.push.apply(g,h)),r=E[o++];while(r!==void 0);else if(h.toArray!==void 0)do h=r[B],h!==void 0&&(t.push(r.time),h.toArray(g,g.length)),r=E[o++];while(r!==void 0);else do h=r[B],h!==void 0&&(t.push(r.time),g.push(h)),r=E[o++];while(r!==void 0)}class pQ{constructor(t,g,B,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new g.constructor(B),this.sampleValues=g,this.valueSize=B,this.settings=null,this.DefaultSettings_={}}evaluate(t){const g=this.parameterPositions;let B=this._cachedIndex,o=g[B],r=g[B-1];e:{A:{let h;t:{g:if(!(t<o)){for(let a=B+2;;){if(o===void 0){if(t<r)break g;return B=g.length,this._cachedIndex=B,this.copySampleValue_(B-1)}if(B===a)break;if(r=o,o=g[++B],t<o)break A}h=g.length;break t}if(!(t>=r)){const a=g[1];t<a&&(B=2,r=a);for(let D=B-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(B===D)break;if(o=r,r=g[--B-1],t>=r)break A}h=B,B=0;break t}break e}for(;B<h;){const a=B+h>>>1;t<g[a]?h=a:B=a+1}if(o=g[B],r=g[B-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return B=g.length,this._cachedIndex=B,this.copySampleValue_(B-1)}this._cachedIndex=B,this.intervalChanged_(B,r,o)}return this.interpolate_(B,r,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const g=this.resultBuffer,B=this.sampleValues,o=this.valueSize,r=t*o;for(let h=0;h!==o;++h)g[h]=B[r+h];return g}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kU extends pQ{constructor(t,g,B,o){super(t,g,B,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(t,g,B){const o=this.parameterPositions;let r=t-2,h=t+1,a=o[r],D=o[h];if(a===void 0)switch(this.getSettings_().endingStart){case Fd:r=t,a=2*g-B;break;case Nd:r=o.length-2,a=g+o[r]-o[r+1];break;default:r=t,a=B}if(D===void 0)switch(this.getSettings_().endingEnd){case Fd:h=t,D=2*B-g;break;case Nd:h=1,D=B+o[1]-o[0];break;default:h=t-1,D=g}const f=(B-g)*.5,m=this.valueSize;this._weightPrev=f/(g-a),this._weightNext=f/(D-B),this._offsetPrev=r*m,this._offsetNext=h*m}interpolate_(t,g,B,o){const r=this.resultBuffer,h=this.sampleValues,a=this.valueSize,D=t*a,f=D-a,m=this._offsetPrev,S=this._offsetNext,F=this._weightPrev,J=this._weightNext,P=(B-g)/(o-g),T=P*P,x=T*P,L=-F*x+2*F*T-F*P,iA=(1+F)*x+(-1.5-2*F)*T+(-.5+F)*P+1,j=(-1-J)*x+(1.5+J)*T+.5*P,gA=J*x-J*T;for(let dA=0;dA!==a;++dA)r[dA]=L*h[m+dA]+iA*h[f+dA]+j*h[D+dA]+gA*h[S+dA];return r}}class LU extends pQ{constructor(t,g,B,o){super(t,g,B,o)}interpolate_(t,g,B,o){const r=this.resultBuffer,h=this.sampleValues,a=this.valueSize,D=t*a,f=D-a,m=(B-g)/(o-g),S=1-m;for(let F=0;F!==a;++F)r[F]=h[f+F]*S+h[D+F]*m;return r}}class xU extends pQ{constructor(t,g,B,o){super(t,g,B,o)}interpolate_(t){return this.copySampleValue_(t-1)}}class JB{constructor(t,g,B,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(g===void 0||g.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(g,this.TimeBufferType),this.values=tr(B,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){const g=t.constructor;let B;if(g.toJSON!==this.toJSON)B=g.toJSON(t);else{B={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};const o=t.getInterpolation();o!==t.DefaultInterpolation&&(B.interpolation=o)}return B.type=t.ValueTypeName,B}InterpolantFactoryMethodDiscrete(t){return new xU(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new LU(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kU(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let g;switch(t){case DQ:g=this.InterpolantFactoryMethodDiscrete;break;case jo:g=this.InterpolantFactoryMethodLinear;break;case Ma:g=this.InterpolantFactoryMethodSmooth;break}if(g===void 0){const B="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(B);return console.warn("THREE.KeyframeTrack:",B),this}return this.createInterpolant=g,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return DQ;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const g=this.times;for(let B=0,o=g.length;B!==o;++B)g[B]+=t}return this}scale(t){if(t!==1){const g=this.times;for(let B=0,o=g.length;B!==o;++B)g[B]*=t}return this}trim(t,g){const B=this.times,o=B.length;let r=0,h=o-1;for(;r!==o&&B[r]<t;)++r;for(;h!==-1&&B[h]>g;)--h;if(++h,r!==0||h!==o){r>=h&&(h=Math.max(h,1),r=h-1);const a=this.getValueSize();this.times=UC(B,r,h),this.values=UC(this.values,r*a,h*a)}return this}validate(){let t=!0;const g=this.getValueSize();g-Math.floor(g)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const B=this.times,o=this.values,r=B.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let h=null;for(let a=0;a!==r;a++){const D=B[a];if(typeof D=="number"&&isNaN(D)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,D),t=!1;break}if(h!==null&&h>D){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,D,h),t=!1;break}h=D}if(o!==void 0&&mD(o))for(let a=0,D=o.length;a!==D;++a){const f=o[a];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,f),t=!1;break}}return t}optimize(){const t=UC(this.times),g=UC(this.values),B=this.getValueSize(),o=this.getInterpolation()===Ma,r=t.length-1;let h=1;for(let a=1;a<r;++a){let D=!1;const f=t[a],m=t[a+1];if(f!==m&&(a!==1||f!==t[0]))if(o)D=!0;else{const S=a*B,F=S-B,J=S+B;for(let P=0;P!==B;++P){const T=g[S+P];if(T!==g[F+P]||T!==g[J+P]){D=!0;break}}}if(D){if(a!==h){t[h]=t[a];const S=a*B,F=h*B;for(let J=0;J!==B;++J)g[F+J]=g[S+J]}++h}}if(r>0){t[h]=t[r];for(let a=r*B,D=h*B,f=0;f!==B;++f)g[D+f]=g[a+f];++h}return h!==t.length?(this.times=UC(t,0,h),this.values=UC(g,0,h*B)):(this.times=t,this.values=g),this}clone(){const t=UC(this.times,0),g=UC(this.values,0),B=this.constructor,o=new B(this.name,t,g);return o.createInterpolant=this.createInterpolant,o}}JB.prototype.TimeBufferType=Float32Array;JB.prototype.ValueBufferType=Float32Array;JB.prototype.DefaultInterpolation=jo;class nE extends JB{}nE.prototype.ValueTypeName="bool";nE.prototype.ValueBufferType=Array;nE.prototype.DefaultInterpolation=DQ;nE.prototype.InterpolantFactoryMethodLinear=void 0;nE.prototype.InterpolantFactoryMethodSmooth=void 0;class SD extends JB{}SD.prototype.ValueTypeName="color";class tE extends JB{}tE.prototype.ValueTypeName="number";class bU extends pQ{constructor(t,g,B,o){super(t,g,B,o)}interpolate_(t,g,B,o){const r=this.resultBuffer,h=this.sampleValues,a=this.valueSize,D=(B-g)/(o-g);let f=t*a;for(let m=f+a;f!==m;f+=4)HC.slerpFlat(r,0,h,f-a,h,f,D);return r}}class Kn extends JB{InterpolantFactoryMethodLinear(t){return new bU(this.times,this.values,this.getValueSize(),t)}}Kn.prototype.ValueTypeName="quaternion";Kn.prototype.DefaultInterpolation=jo;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;class oE extends JB{}oE.prototype.ValueTypeName="string";oE.prototype.ValueBufferType=Array;oE.prototype.DefaultInterpolation=DQ;oE.prototype.InterpolantFactoryMethodLinear=void 0;oE.prototype.InterpolantFactoryMethodSmooth=void 0;class eE extends JB{}eE.prototype.ValueTypeName="vector";class JU{constructor(t,g=-1,B,o=Tm){this.name=t,this.tracks=B,this.duration=g,this.blendMode=o,this.uuid=dB(),this.duration<0&&this.resetDuration()}static parse(t){const g=[],B=t.tracks,o=1/(t.fps||1);for(let h=0,a=B.length;h!==a;++h)g.push(YU(B[h]).scale(o));const r=new this(t.name,t.duration,g,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const g=[],B=t.tracks,o={name:t.name,duration:t.duration,tracks:g,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,h=B.length;r!==h;++r)g.push(JB.toJSON(B[r]));return o}static CreateFromMorphTargetSequence(t,g,B,o){const r=g.length,h=[];for(let a=0;a<r;a++){let D=[],f=[];D.push((a+r-1)%r,a,(a+1)%r),f.push(0,1,0);const m=UU(D);D=ku(D,1,m),f=ku(f,1,m),!o&&D[0]===0&&(D.push(r),f.push(f[0])),h.push(new tE(".morphTargetInfluences["+g[a].name+"]",D,f).scale(1/B))}return new this(t,-1,h)}static findByName(t,g){let B=t;if(!Array.isArray(t)){const o=t;B=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<B.length;o++)if(B[o].name===g)return B[o];return null}static CreateClipsFromMorphTargetSequences(t,g,B){const o={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,D=t.length;a<D;a++){const f=t[a],m=f.name.match(r);if(m&&m.length>1){const S=m[1];let F=o[S];F||(o[S]=F=[]),F.push(f)}}const h=[];for(const a in o)h.push(this.CreateFromMorphTargetSequence(a,o[a],g,B));return h}static parseAnimation(t,g){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const B=function(S,F,J,P,T){if(J.length!==0){const x=[],L=[];RD(J,x,L,P),x.length!==0&&T.push(new S(F,x,L))}},o=[],r=t.name||"default",h=t.fps||30,a=t.blendMode;let D=t.length||-1;const f=t.hierarchy||[];for(let S=0;S<f.length;S++){const F=f[S].keys;if(!(!F||F.length===0))if(F[0].morphTargets){const J={};let P;for(P=0;P<F.length;P++)if(F[P].morphTargets)for(let T=0;T<F[P].morphTargets.length;T++)J[F[P].morphTargets[T]]=-1;for(const T in J){const x=[],L=[];for(let iA=0;iA!==F[P].morphTargets.length;++iA){const j=F[P];x.push(j.time),L.push(j.morphTarget===T?1:0)}o.push(new tE(".morphTargetInfluence["+T+"]",x,L))}D=J.length*h}else{const J=".bones["+g[S].name+"]";B(eE,J+".position",F,"pos",o),B(Kn,J+".quaternion",F,"rot",o),B(eE,J+".scale",F,"scl",o)}}return o.length===0?null:new this(r,D,o,a)}resetDuration(){const t=this.tracks;let g=0;for(let B=0,o=t.length;B!==o;++B){const r=this.tracks[B];g=Math.max(g,r.times[r.times.length-1])}return this.duration=g,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let g=0;g<this.tracks.length;g++)t=t&&this.tracks[g].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let g=0;g<this.tracks.length;g++)t.push(this.tracks[g].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function KU(E){switch(E.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tE;case"vector":case"vector2":case"vector3":case"vector4":return eE;case"color":return SD;case"quaternion":return Kn;case"bool":case"boolean":return nE;case"string":return oE}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+E)}function YU(E){if(E.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=KU(E.type);if(E.times===void 0){const g=[],B=[];RD(E.keys,g,B,"value"),E.times=g,E.values=B}return t.parse!==void 0?t.parse(E):new t(E.name,E.times,E.values,E.interpolation)}const gE={enabled:!1,files:{},add:function(E,t){this.enabled!==!1&&(this.files[E]=t)},get:function(E){if(this.enabled!==!1)return this.files[E]},remove:function(E){delete this.files[E]},clear:function(){this.files={}}};class vU{constructor(t,g,B){const o=this;let r=!1,h=0,a=0,D;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=g,this.onError=B,this.itemStart=function(m){a++,r===!1&&o.onStart!==void 0&&o.onStart(m,h,a),r=!0},this.itemEnd=function(m){h++,o.onProgress!==void 0&&o.onProgress(m,h,a),h===a&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return D?D(m):m},this.setURLModifier=function(m){return D=m,this},this.addHandler=function(m,S){return f.push(m,S),this},this.removeHandler=function(m){const S=f.indexOf(m);return S!==-1&&f.splice(S,2),this},this.getHandler=function(m){for(let S=0,F=f.length;S<F;S+=2){const J=f[S],P=f[S+1];if(J.global&&(J.lastIndex=0),J.test(m))return P}return null}}}const HU=new vU;class EE{constructor(t){this.manager=t!==void 0?t:HU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,g){const B=this;return new Promise(function(o,r){B.load(t,o,g,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}EE.DEFAULT_MATERIAL_NAME="__DEFAULT";const CC={};class TU extends Error{constructor(t,g){super(t),this.response=g}}class GD extends EE{constructor(t){super(t)}load(t,g,B,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=gE.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{g&&g(r),this.manager.itemEnd(t)},0),r;if(CC[t]!==void 0){CC[t].push({onLoad:g,onProgress:B,onError:o});return}CC[t]=[],CC[t].push({onLoad:g,onProgress:B,onError:o});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,D=this.responseType;fetch(h).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=CC[t],S=f.body.getReader(),F=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),J=F?parseInt(F):0,P=J!==0;let T=0;const x=new ReadableStream({start(L){iA();function iA(){S.read().then(({done:j,value:gA})=>{if(j)L.close();else{T+=gA.byteLength;const dA=new ProgressEvent("progress",{lengthComputable:P,loaded:T,total:J});for(let fA=0,pA=m.length;fA<pA;fA++){const YA=m[fA];YA.onProgress&&YA.onProgress(dA)}L.enqueue(gA),iA()}})}}});return new Response(x)}else throw new TU(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(D){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,a));case"json":return f.json();default:if(a===void 0)return f.text();{const S=/charset="?([^;"\s]*)"?/i.exec(a),F=S&&S[1]?S[1].toLowerCase():void 0,J=new TextDecoder(F);return f.arrayBuffer().then(P=>J.decode(P))}}}).then(f=>{gE.add(t,f);const m=CC[t];delete CC[t];for(let S=0,F=m.length;S<F;S++){const J=m[S];J.onLoad&&J.onLoad(f)}}).catch(f=>{const m=CC[t];if(m===void 0)throw this.manager.itemError(t),f;delete CC[t];for(let S=0,F=m.length;S<F;S++){const J=m[S];J.onError&&J.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class qU extends EE{constructor(t){super(t)}load(t,g,B,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,h=gE.get(t);if(h!==void 0)return r.manager.itemStart(t),setTimeout(function(){g&&g(h),r.manager.itemEnd(t)},0),h;const a=fQ("img");function D(){m(),gE.add(t,this),g&&g(this),r.manager.itemEnd(t)}function f(S){m(),o&&o(S),r.manager.itemError(t),r.manager.itemEnd(t)}function m(){a.removeEventListener("load",D,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",D,!1),a.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class _U extends EE{constructor(t){super(t)}load(t,g,B,o){const r=new OI,h=new qU(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(a){r.image=a,r.needsUpdate=!0,g!==void 0&&g(r)},B,o),r}}class sr extends iI{constructor(t,g=1){super(),this.isLight=!0,this.type="Light",this.color=new Cg(t),this.intensity=g}dispose(){}copy(t,g){return super.copy(t,g),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const g=super.toJSON(t);return g.object.color=this.color.getHex(),g.object.intensity=this.intensity,this.groundColor!==void 0&&(g.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(g.object.distance=this.distance),this.angle!==void 0&&(g.object.angle=this.angle),this.decay!==void 0&&(g.object.decay=this.decay),this.penumbra!==void 0&&(g.object.penumbra=this.penumbra),this.shadow!==void 0&&(g.object.shadow=this.shadow.toJSON()),g}}const za=new hg,Lu=new bA,xu=new bA;class Fh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mg(512,512),this.map=null,this.mapPass=null,this.matrix=new hg,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dh,this._frameExtents=new Mg(1,1),this._viewportCount=1,this._viewports=[new Og(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const g=this.camera,B=this.matrix;Lu.setFromMatrixPosition(t.matrixWorld),g.position.copy(Lu),xu.setFromMatrixPosition(t.target.matrixWorld),g.lookAt(xu),g.updateMatrixWorld(),za.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),B.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),B.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class WU extends Fh{constructor(){super(new di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const g=this.camera,B=$o*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height,r=t.distance||g.far;(B!==g.fov||o!==g.aspect||r!==g.far)&&(g.fov=B,g.aspect=o,g.far=r,g.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class PU extends sr{constructor(t,g,B=0,o=Math.PI/3,r=0,h=2){super(t,g),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(iI.DEFAULT_UP),this.updateMatrix(),this.target=new iI,this.distance=B,this.angle=o,this.penumbra=r,this.decay=h,this.map=null,this.shadow=new WU}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,g){return super.copy(t,g),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bu=new hg,rQ=new bA,ja=new bA;class OU extends Fh{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mg(4,2),this._viewportCount=6,this._viewports=[new Og(2,1,1,1),new Og(0,1,1,1),new Og(3,1,1,1),new Og(1,1,1,1),new Og(3,0,1,1),new Og(1,0,1,1)],this._cubeDirections=[new bA(1,0,0),new bA(-1,0,0),new bA(0,0,1),new bA(0,0,-1),new bA(0,1,0),new bA(0,-1,0)],this._cubeUps=[new bA(0,1,0),new bA(0,1,0),new bA(0,1,0),new bA(0,1,0),new bA(0,0,1),new bA(0,0,-1)]}updateMatrices(t,g=0){const B=this.camera,o=this.matrix,r=t.distance||B.far;r!==B.far&&(B.far=r,B.updateProjectionMatrix()),rQ.setFromMatrixPosition(t.matrixWorld),B.position.copy(rQ),ja.copy(B.position),ja.add(this._cubeDirections[g]),B.up.copy(this._cubeUps[g]),B.lookAt(ja),B.updateMatrixWorld(),o.makeTranslation(-rQ.x,-rQ.y,-rQ.z),bu.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}}class VU extends sr{constructor(t,g,B=0,o=2){super(t,g),this.isPointLight=!0,this.type="PointLight",this.distance=B,this.decay=o,this.shadow=new OU}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,g){return super.copy(t,g),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ZU extends Fh{constructor(){super(new ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XU extends sr{constructor(t,g){super(t,g),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(iI.DEFAULT_UP),this.updateMatrix(),this.target=new iI,this.shadow=new ZU}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zU extends sr{constructor(t,g){super(t,g),this.isAmbientLight=!0,this.type="AmbientLight"}}class sh{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let g="";for(let B=0,o=t.length;B<o;B++)g+=String.fromCharCode(t[B]);try{return decodeURIComponent(escape(g))}catch{return g}}static extractUrlBase(t){const g=t.lastIndexOf("/");return g===-1?"./":t.slice(0,g+1)}static resolveURL(t,g){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(g)&&/^\//.test(t)&&(g=g.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:g+t)}}class jU extends EE{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,g,B,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,h=gE.get(t);if(h!==void 0)return r.manager.itemStart(t),setTimeout(function(){g&&g(h),r.manager.itemEnd(t)},0),h;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(D){return D.blob()}).then(function(D){return createImageBitmap(D,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(D){gE.add(t,D),g&&g(D),r.manager.itemEnd(t)}).catch(function(D){o&&o(D),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}const Nh="\\[\\]\\.:\\/",$U=new RegExp("["+Nh+"]","g"),Uh="[^"+Nh+"]",Ak="[^"+Nh.replace("\\.","")+"]",tk=/((?:WC+[\/:])*)/.source.replace("WC",Uh),ek=/(WCOD+)?/.source.replace("WCOD",Ak),gk=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),Ik=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),ik=new RegExp("^"+tk+ek+gk+Ik+"$"),Bk=["material","materials","bones","map"];class Ck{constructor(t,g,B){const o=B||Tg.parseTrackName(g);this._targetGroup=t,this._bindings=t.subscribe_(g,o)}getValue(t,g){this.bind();const B=this._targetGroup.nCachedObjects_,o=this._bindings[B];o!==void 0&&o.getValue(t,g)}setValue(t,g){const B=this._bindings;for(let o=this._targetGroup.nCachedObjects_,r=B.length;o!==r;++o)B[o].setValue(t,g)}bind(){const t=this._bindings;for(let g=this._targetGroup.nCachedObjects_,B=t.length;g!==B;++g)t[g].bind()}unbind(){const t=this._bindings;for(let g=this._targetGroup.nCachedObjects_,B=t.length;g!==B;++g)t[g].unbind()}}class Tg{constructor(t,g,B){this.path=g,this.parsedPath=B||Tg.parseTrackName(g),this.node=Tg.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,g,B){return t&&t.isAnimationObjectGroup?new Tg.Composite(t,g,B):new Tg(t,g,B)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($U,"")}static parseTrackName(t){const g=ik.exec(t);if(g===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const B={nodeName:g[2],objectName:g[3],objectIndex:g[4],propertyName:g[5],propertyIndex:g[6]},o=B.nodeName&&B.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const r=B.nodeName.substring(o+1);Bk.indexOf(r)!==-1&&(B.nodeName=B.nodeName.substring(0,o),B.objectName=r)}if(B.propertyName===null||B.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return B}static findNode(t,g){if(g===void 0||g===""||g==="."||g===-1||g===t.name||g===t.uuid)return t;if(t.skeleton){const B=t.skeleton.getBoneByName(g);if(B!==void 0)return B}if(t.children){const B=function(r){for(let h=0;h<r.length;h++){const a=r[h];if(a.name===g||a.uuid===g)return a;const D=B(a.children);if(D)return D}return null},o=B(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,g){t[g]=this.targetObject[this.propertyName]}_getValue_array(t,g){const B=this.resolvedProperty;for(let o=0,r=B.length;o!==r;++o)t[g++]=B[o]}_getValue_arrayElement(t,g){t[g]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,g){this.resolvedProperty.toArray(t,g)}_setValue_direct(t,g){this.targetObject[this.propertyName]=t[g]}_setValue_direct_setNeedsUpdate(t,g){this.targetObject[this.propertyName]=t[g],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,g){this.targetObject[this.propertyName]=t[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,g){const B=this.resolvedProperty;for(let o=0,r=B.length;o!==r;++o)B[o]=t[g++]}_setValue_array_setNeedsUpdate(t,g){const B=this.resolvedProperty;for(let o=0,r=B.length;o!==r;++o)B[o]=t[g++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,g){const B=this.resolvedProperty;for(let o=0,r=B.length;o!==r;++o)B[o]=t[g++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,g){this.resolvedProperty[this.propertyIndex]=t[g]}_setValue_arrayElement_setNeedsUpdate(t,g){this.resolvedProperty[this.propertyIndex]=t[g],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,g){this.resolvedProperty[this.propertyIndex]=t[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,g){this.resolvedProperty.fromArray(t,g)}_setValue_fromArray_setNeedsUpdate(t,g){this.resolvedProperty.fromArray(t,g),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,g){this.resolvedProperty.fromArray(t,g),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,g){this.bind(),this.getValue(t,g)}_setValue_unbound(t,g){this.bind(),this.setValue(t,g)}bind(){let t=this.node;const g=this.parsedPath,B=g.objectName,o=g.propertyName;let r=g.propertyIndex;if(t||(t=Tg.findNode(this.rootNode,g.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(B){let f=g.objectIndex;switch(B){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===f){f=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[B]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[B]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}const h=t[o];if(h===void 0){const f=g.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+o+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let D=this.BindingType.Direct;if(r!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}D=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=r}else h.fromArray!==void 0&&h.toArray!==void 0?(D=this.BindingType.HasFromToArray,this.resolvedProperty=h):Array.isArray(h)?(D=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=o;this.getValue=this.GetterByBindingType[D],this.setValue=this.SetterByBindingTypeAndVersioning[D][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tg.Composite=Ck;Tg.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tg.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tg.prototype.GetterByBindingType=[Tg.prototype._getValue_direct,Tg.prototype._getValue_array,Tg.prototype._getValue_arrayElement,Tg.prototype._getValue_toArray];Tg.prototype.SetterByBindingTypeAndVersioning=[[Tg.prototype._setValue_direct,Tg.prototype._setValue_direct_setNeedsUpdate,Tg.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tg.prototype._setValue_array,Tg.prototype._setValue_array_setNeedsUpdate,Tg.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tg.prototype._setValue_arrayElement,Tg.prototype._setValue_arrayElement_setNeedsUpdate,Tg.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tg.prototype._setValue_fromArray,Tg.prototype._setValue_fromArray_setNeedsUpdate,Tg.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nk extends wD{constructor(t=1){const g=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],B=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Pi;o.setAttribute("position",new fi(g,3)),o.setAttribute("color",new fi(B,3));const r=new mh({vertexColors:!0,toneMapped:!1});super(o,r),this.type="AxesHelper"}setColors(t,g,B){const o=new Cg,r=this.geometry.attributes.color.array;return o.set(t),o.toArray(r,0),o.toArray(r,3),o.set(g),o.toArray(r,6),o.toArray(r,9),o.set(B),o.toArray(r,12),o.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);var ok=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},FD={exports:{}},H={};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ju;function Ek(){if(Ju)return H;Ju=1;const E="150",t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},B=0,o=1,r=2,h=3,a=0,D=1,f=2,m=3,S=0,F=1,J=2,P=2,T=0,x=1,L=2,iA=3,j=4,gA=5,dA=100,fA=101,pA=102,YA=103,$=104,uA=200,rt=201,Rt=202,TA=203,$A=204,VA=205,ft=206,it=207,nt=208,V=209,X=210,AA=0,CA=1,kA=2,qA=3,gt=4,wt=5,Pt=6,Wt=7,De=0,cg=1,se=2,rA=0,Qt=1,At=2,Nt=3,ut=4,fe=5,ie=300,Zt=301,Fe=302,PA=303,Ag=304,EA=306,z=1e3,NA=1001,xt=1002,ht=1003,Ft=1004,pe=1004,Jt=1005,zA=1005,ge=1006,me=1007,Ue=1007,Be=1008,le=1008,Pe=1009,Ng=1010,RA=1011,jt=1012,tt=1013,Kt=1014,Ot=1015,_e=1016,Yg=1017,zg=1018,QI=1020,Ug=1021,Vg=1023,sI=1024,Oi=1025,VI=1026,xi=1027,bi=1028,Ai=1029,Vi=1030,rC=1031,WC=1033,Zi=33776,aC=33777,BA=33778,_A=33779,It=35840,HA=35841,et=35842,ne=35843,Le=36196,xe=37492,Ke=37496,eg=37808,Je=37809,Ye=37810,xg=37811,bg=37812,lI=37813,ti=37814,qg=37815,Bg=37816,Wg=37817,Zg=37818,wI=37819,ri=37820,Xi=37821,zi=36492,rI=36283,pi=36284,KB=36285,N=36286,Z=2200,aA=2201,yA=2202,SA=2300,JA=2301,LA=2302,DA=2400,sA=2401,FA=2402,UA=2500,Tt=2501,te=0,Gt=1,Xt=2,de=3e3,re=3001,ug=3200,jg=3201,aI=0,YI=1,DB="",vg="srgb",ai="srgb-linear",tI="display-p3",dI=0,vI=7680,YB=7681,we=7682,Dg=7683,yQ=34055,QE=34056,MQ=5386,hC=512,Yn=513,vn=514,Hn=515,mQ=516,RQ=517,SQ=518,sE=519,cC=35044,GQ=35048,vB=35040,PC=35045,rE=35049,Tn=35041,HB=35046,ei=35050,aE=35042,sg="100",BI="300 es",OC=1035;class wi{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const I=this._listeners;I[A]===void 0&&(I[A]=[]),I[A].indexOf(e)===-1&&I[A].push(e)}hasEventListener(A,e){if(this._listeners===void 0)return!1;const I=this._listeners;return I[A]!==void 0&&I[A].indexOf(e)!==-1}removeEventListener(A,e){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const C=i.indexOf(e);C!==-1&&i.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const i=I.slice(0);for(let C=0,Q=i.length;C<Q;C++)i[C].call(this,A);A.target=null}}}const yI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hE=1234567;const TB=Math.PI/180,qB=180/Math.PI;function HI(){const n=Math.random()*4294967295|0,A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,I=Math.random()*4294967295|0;return(yI[n&255]+yI[n>>8&255]+yI[n>>16&255]+yI[n>>24&255]+"-"+yI[A&255]+yI[A>>8&255]+"-"+yI[A>>16&15|64]+yI[A>>24&255]+"-"+yI[e&63|128]+yI[e>>8&255]+"-"+yI[e>>16&255]+yI[e>>24&255]+yI[I&255]+yI[I>>8&255]+yI[I>>16&255]+yI[I>>24&255]).toLowerCase()}function eI(n,A,e){return Math.max(A,Math.min(e,n))}function fg(n,A){return(n%A+A)%A}function ji(n,A,e,I,i){return I+(n-A)*(i-I)/(e-A)}function qn(n,A,e){return n!==A?(e-n)/(A-n):0}function yi(n,A,e){return(1-e)*n+e*A}function FQ(n,A,e,I){return yi(n,A,1-Math.exp(-e*I))}function gg(n,A=1){return A-Math.abs(fg(n,A*2)-A)}function Y(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*(3-2*n))}function CI(n,A,e){return n<=A?0:n>=e?1:(n=(n-A)/(e-A),n*n*n*(n*(n*6-15)+10))}function _n(n,A){return n+Math.floor(Math.random()*(A-n+1))}function NQ(n,A){return n+Math.random()*(A-n)}function VC(n){return n*(.5-Math.random())}function lC(n){n!==void 0&&(hE=n);let A=hE+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function _B(n){return n*TB}function Wn(n){return n*qB}function ZC(n){return(n&n-1)===0&&n!==0}function Pn(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function On(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function UQ(n,A,e,I,i){const C=Math.cos,Q=Math.sin,s=C(e/2),c=Q(e/2),d=C((A+I)/2),p=Q((A+I)/2),y=C((A-I)/2),w=Q((A-I)/2),R=C((I-A)/2),k=Q((I-A)/2);switch(i){case"XYX":n.set(s*p,c*y,c*w,s*d);break;case"YZY":n.set(c*w,s*p,c*y,s*d);break;case"ZXZ":n.set(c*y,c*w,s*p,s*d);break;case"XZX":n.set(s*p,c*k,c*R,s*d);break;case"YXY":n.set(c*R,s*p,c*k,s*d);break;case"ZYZ":n.set(c*k,c*R,s*p,s*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pg(n,A){switch(A.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cE={DEG2RAD:TB,RAD2DEG:qB,generateUUID:HI,clamp:eI,euclideanModulo:fg,mapLinear:ji,inverseLerp:qn,lerp:yi,damp:FQ,pingpong:gg,smoothstep:Y,smootherstep:CI,randInt:_n,randFloat:NQ,randFloatSpread:VC,seededRandom:lC,degToRad:_B,radToDeg:Wn,isPowerOfTwo:ZC,ceilPowerOfTwo:Pn,floorPowerOfTwo:On,setQuaternionFromProperEuler:UQ,normalize:pg,denormalize:hi};class yt{constructor(A=0,e=0){yt.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,I=this.y,i=A.elements;return this.x=i[0]*e+i[3]*I+i[6],this.y=i[1]*e+i[4]*I+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(e,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,I=this.y-A.y;return e*e+I*I}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,I){return this.x=A.x+(e.x-A.x)*I,this.y=A.y+(e.y-A.y)*I,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const I=Math.cos(e),i=Math.sin(e),C=this.x-A.x,Q=this.y-A.y;return this.x=C*I-Q*i+A.x,this.y=C*i+Q*I+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mg{constructor(){mg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,e,I,i,C,Q,s,c,d){const p=this.elements;return p[0]=A,p[1]=i,p[2]=s,p[3]=e,p[4]=C,p[5]=c,p[6]=I,p[7]=Q,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,I=A.elements;return e[0]=I[0],e[1]=I[1],e[2]=I[2],e[3]=I[3],e[4]=I[4],e[5]=I[5],e[6]=I[6],e[7]=I[7],e[8]=I[8],this}extractBasis(A,e,I){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),I.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const I=A.elements,i=e.elements,C=this.elements,Q=I[0],s=I[3],c=I[6],d=I[1],p=I[4],y=I[7],w=I[2],R=I[5],k=I[8],G=i[0],U=i[3],v=i[6],W=i[1],K=i[4],q=i[7],IA=i[2],hA=i[5],MA=i[8];return C[0]=Q*G+s*W+c*IA,C[3]=Q*U+s*K+c*hA,C[6]=Q*v+s*q+c*MA,C[1]=d*G+p*W+y*IA,C[4]=d*U+p*K+y*hA,C[7]=d*v+p*q+y*MA,C[2]=w*G+R*W+k*IA,C[5]=w*U+R*K+k*hA,C[8]=w*v+R*q+k*MA,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],I=A[1],i=A[2],C=A[3],Q=A[4],s=A[5],c=A[6],d=A[7],p=A[8];return e*Q*p-e*s*d-I*C*p+I*s*c+i*C*d-i*Q*c}invert(){const A=this.elements,e=A[0],I=A[1],i=A[2],C=A[3],Q=A[4],s=A[5],c=A[6],d=A[7],p=A[8],y=p*Q-s*d,w=s*c-p*C,R=d*C-Q*c,k=e*y+I*w+i*R;if(k===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/k;return A[0]=y*G,A[1]=(i*d-p*I)*G,A[2]=(s*I-i*Q)*G,A[3]=w*G,A[4]=(p*e-i*c)*G,A[5]=(i*C-s*e)*G,A[6]=R*G,A[7]=(I*c-d*e)*G,A[8]=(Q*e-I*C)*G,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,I,i,C,Q,s){const c=Math.cos(C),d=Math.sin(C);return this.set(I*c,I*d,-I*(c*Q+d*s)+Q+A,-i*d,i*c,-i*(-d*Q+c*s)+s+e,0,0,1),this}scale(A,e){return this.premultiply(fB.makeScale(A,e)),this}rotate(A){return this.premultiply(fB.makeRotation(-A)),this}translate(A,e){return this.premultiply(fB.makeTranslation(A,e)),this}makeTranslation(A,e){return this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),I=Math.sin(A);return this.set(e,-I,0,I,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,I=A.elements;for(let i=0;i<9;i++)if(e[i]!==I[i])return!1;return!0}fromArray(A,e=0){for(let I=0;I<9;I++)this.elements[I]=A[I+e];return this}toArray(A=[],e=0){const I=this.elements;return A[e]=I[0],A[e+1]=I[1],A[e+2]=I[2],A[e+3]=I[3],A[e+4]=I[4],A[e+5]=I[5],A[e+6]=I[6],A[e+7]=I[7],A[e+8]=I[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const fB=new mg;function wg(n){for(let A=n.length-1;A>=0;--A)if(n[A]>=65535)return!0;return!1}const $i={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function pB(n,A){return new $i[n](A)}function WB(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class TI{constructor(A=0,e=0,I=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=I,this._w=i}static slerpFlat(A,e,I,i,C,Q,s){let c=I[i+0],d=I[i+1],p=I[i+2],y=I[i+3];const w=C[Q+0],R=C[Q+1],k=C[Q+2],G=C[Q+3];if(s===0){A[e+0]=c,A[e+1]=d,A[e+2]=p,A[e+3]=y;return}if(s===1){A[e+0]=w,A[e+1]=R,A[e+2]=k,A[e+3]=G;return}if(y!==G||c!==w||d!==R||p!==k){let U=1-s;const v=c*w+d*R+p*k+y*G,W=v>=0?1:-1,K=1-v*v;if(K>Number.EPSILON){const IA=Math.sqrt(K),hA=Math.atan2(IA,v*W);U=Math.sin(U*hA)/IA,s=Math.sin(s*hA)/IA}const q=s*W;if(c=c*U+w*q,d=d*U+R*q,p=p*U+k*q,y=y*U+G*q,U===1-s){const IA=1/Math.sqrt(c*c+d*d+p*p+y*y);c*=IA,d*=IA,p*=IA,y*=IA}}A[e]=c,A[e+1]=d,A[e+2]=p,A[e+3]=y}static multiplyQuaternionsFlat(A,e,I,i,C,Q){const s=I[i],c=I[i+1],d=I[i+2],p=I[i+3],y=C[Q],w=C[Q+1],R=C[Q+2],k=C[Q+3];return A[e]=s*k+p*y+c*R-d*w,A[e+1]=c*k+p*w+d*y-s*R,A[e+2]=d*k+p*R+s*w-c*y,A[e+3]=p*k-s*y-c*w-d*R,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,I,i){return this._x=A,this._y=e,this._z=I,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){const I=A._x,i=A._y,C=A._z,Q=A._order,s=Math.cos,c=Math.sin,d=s(I/2),p=s(i/2),y=s(C/2),w=c(I/2),R=c(i/2),k=c(C/2);switch(Q){case"XYZ":this._x=w*p*y+d*R*k,this._y=d*R*y-w*p*k,this._z=d*p*k+w*R*y,this._w=d*p*y-w*R*k;break;case"YXZ":this._x=w*p*y+d*R*k,this._y=d*R*y-w*p*k,this._z=d*p*k-w*R*y,this._w=d*p*y+w*R*k;break;case"ZXY":this._x=w*p*y-d*R*k,this._y=d*R*y+w*p*k,this._z=d*p*k+w*R*y,this._w=d*p*y-w*R*k;break;case"ZYX":this._x=w*p*y-d*R*k,this._y=d*R*y+w*p*k,this._z=d*p*k-w*R*y,this._w=d*p*y+w*R*k;break;case"YZX":this._x=w*p*y+d*R*k,this._y=d*R*y+w*p*k,this._z=d*p*k-w*R*y,this._w=d*p*y-w*R*k;break;case"XZY":this._x=w*p*y-d*R*k,this._y=d*R*y-w*p*k,this._z=d*p*k+w*R*y,this._w=d*p*y+w*R*k;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const I=e/2,i=Math.sin(I);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(I),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,I=e[0],i=e[4],C=e[8],Q=e[1],s=e[5],c=e[9],d=e[2],p=e[6],y=e[10],w=I+s+y;if(w>0){const R=.5/Math.sqrt(w+1);this._w=.25/R,this._x=(p-c)*R,this._y=(C-d)*R,this._z=(Q-i)*R}else if(I>s&&I>y){const R=2*Math.sqrt(1+I-s-y);this._w=(p-c)/R,this._x=.25*R,this._y=(i+Q)/R,this._z=(C+d)/R}else if(s>y){const R=2*Math.sqrt(1+s-I-y);this._w=(C-d)/R,this._x=(i+Q)/R,this._y=.25*R,this._z=(c+p)/R}else{const R=2*Math.sqrt(1+y-I-s);this._w=(Q-i)/R,this._x=(C+d)/R,this._y=(c+p)/R,this._z=.25*R}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let I=A.dot(e)+1;return I<Number.EPSILON?(I=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=I):(this._x=0,this._y=-A.z,this._z=A.y,this._w=I)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=I),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(eI(this.dot(A),-1,1)))}rotateTowards(A,e){const I=this.angleTo(A);if(I===0)return this;const i=Math.min(1,e/I);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const I=A._x,i=A._y,C=A._z,Q=A._w,s=e._x,c=e._y,d=e._z,p=e._w;return this._x=I*p+Q*s+i*d-C*c,this._y=i*p+Q*c+C*s-I*d,this._z=C*p+Q*d+I*c-i*s,this._w=Q*p-I*s-i*c-C*d,this._onChangeCallback(),this}slerp(A,e){if(e===0)return this;if(e===1)return this.copy(A);const I=this._x,i=this._y,C=this._z,Q=this._w;let s=Q*A._w+I*A._x+i*A._y+C*A._z;if(s<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,s=-s):this.copy(A),s>=1)return this._w=Q,this._x=I,this._y=i,this._z=C,this;const c=1-s*s;if(c<=Number.EPSILON){const R=1-e;return this._w=R*Q+e*this._w,this._x=R*I+e*this._x,this._y=R*i+e*this._y,this._z=R*C+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(c),p=Math.atan2(d,s),y=Math.sin((1-e)*p)/d,w=Math.sin(e*p)/d;return this._w=Q*y+this._w*w,this._x=I*y+this._x*w,this._y=i*y+this._y*w,this._z=C*y+this._z*w,this._onChangeCallback(),this}slerpQuaternions(A,e,I){return this.copy(A).slerp(e,I)}random(){const A=Math.random(),e=Math.sqrt(1-A),I=Math.sqrt(A),i=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(e*Math.cos(i),I*Math.sin(C),I*Math.cos(C),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class QA{constructor(A=0,e=0,I=0){QA.prototype.isVector3=!0,this.x=A,this.y=e,this.z=I}set(A,e,I){return I===void 0&&(I=this.z),this.x=A,this.y=e,this.z=I,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(lE.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(lE.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,I=this.y,i=this.z,C=A.elements;return this.x=C[0]*e+C[3]*I+C[6]*i,this.y=C[1]*e+C[4]*I+C[7]*i,this.z=C[2]*e+C[5]*I+C[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,I=this.y,i=this.z,C=A.elements,Q=1/(C[3]*e+C[7]*I+C[11]*i+C[15]);return this.x=(C[0]*e+C[4]*I+C[8]*i+C[12])*Q,this.y=(C[1]*e+C[5]*I+C[9]*i+C[13])*Q,this.z=(C[2]*e+C[6]*I+C[10]*i+C[14])*Q,this}applyQuaternion(A){const e=this.x,I=this.y,i=this.z,C=A.x,Q=A.y,s=A.z,c=A.w,d=c*e+Q*i-s*I,p=c*I+s*e-C*i,y=c*i+C*I-Q*e,w=-C*e-Q*I-s*i;return this.x=d*c+w*-C+p*-s-y*-Q,this.y=p*c+w*-Q+y*-C-d*-s,this.z=y*c+w*-s+d*-Q-p*-C,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,I=this.y,i=this.z,C=A.elements;return this.x=C[0]*e+C[4]*I+C[8]*i,this.y=C[1]*e+C[5]*I+C[9]*i,this.z=C[2]*e+C[6]*I+C[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(e,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,I){return this.x=A.x+(e.x-A.x)*I,this.y=A.y+(e.y-A.y)*I,this.z=A.z+(e.z-A.z)*I,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const I=A.x,i=A.y,C=A.z,Q=e.x,s=e.y,c=e.z;return this.x=i*c-C*s,this.y=C*Q-I*c,this.z=I*s-i*Q,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const I=A.dot(this)/e;return this.copy(A).multiplyScalar(I)}projectOnPlane(A){return Vn.copy(this).projectOnVector(A),this.sub(Vn)}reflect(A){return this.sub(Vn.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const I=this.dot(A)/e;return Math.acos(eI(I,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,I=this.y-A.y,i=this.z-A.z;return e*e+I*I+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,I){const i=Math.sin(e)*A;return this.x=i*Math.sin(I),this.y=Math.cos(e)*A,this.z=i*Math.cos(I),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,I){return this.x=A*Math.sin(e),this.y=I,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),I=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=I,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,I=Math.sqrt(1-A**2);return this.x=I*Math.cos(e),this.y=I*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vn=new QA,lE=new TI;function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function XC(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const zC=new mg().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jC=new mg().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Mi=new QA;function $C(n){return n.convertSRGBToLinear(),Mi.set(n.r,n.g,n.b).applyMatrix3(jC),n.setRGB(Mi.x,Mi.y,Mi.z)}function wB(n){return Mi.set(n.r,n.g,n.b).applyMatrix3(zC),n.setRGB(Mi.x,Mi.y,Mi.z).convertLinearToSRGB()}const kQ={[ai]:n=>n,[vg]:n=>n.convertSRGBToLinear(),[tI]:$C},LQ={[ai]:n=>n,[vg]:n=>n.convertLinearToSRGB(),[tI]:wB},NI={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ai},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,A,e){if(this.enabled===!1||A===e||!A||!e)return n;const I=kQ[A],i=LQ[e];if(I===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${e}".`);return i(I(n))},fromWorkingColorSpace:function(n,A){return this.convert(n,this.workingColorSpace,A)},toWorkingColorSpace:function(n,A){return this.convert(n,A,this.workingColorSpace)}};let yB;class dE{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let e;if(A instanceof HTMLCanvasElement)e=A;else{yB===void 0&&(yB=WB("canvas")),yB.width=A.width,yB.height=A.height;const I=yB.getContext("2d");A instanceof ImageData?I.putImageData(A,0,0):I.drawImage(A,0,0,A.width,A.height),e=yB}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=WB("canvas");e.width=A.width,e.height=A.height;const I=e.getContext("2d");I.drawImage(A,0,0,A.width,A.height);const i=I.getImageData(0,0,A.width,A.height),C=i.data;for(let Q=0;Q<C.length;Q++)C[Q]=Ji(C[Q]/255)*255;return I.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let I=0;I<e.length;I++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[I]=Math.floor(Ji(e[I]/255)*255):e[I]=Ji(e[I]);return{data:e,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class PB{constructor(A=null){this.isSource=!0,this.uuid=HI(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const I={uuid:this.uuid,url:""},i=this.data;if(i!==null){let C;if(Array.isArray(i)){C=[];for(let Q=0,s=i.length;Q<s;Q++)i[Q].isDataTexture?C.push(uE(i[Q].image)):C.push(uE(i[Q]))}else C=uE(i);I.url=C}return e||(A.images[this.uuid]=I),I}}function uE(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AB=0;class AI extends wi{constructor(A=AI.DEFAULT_IMAGE,e=AI.DEFAULT_MAPPING,I=NA,i=NA,C=ge,Q=Be,s=Vg,c=Pe,d=AI.DEFAULT_ANISOTROPY,p=de){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AB++}),this.uuid=HI(),this.name="",this.source=new PB(A),this.mipmaps=[],this.mapping=e,this.wrapS=I,this.wrapT=i,this.magFilter=C,this.minFilter=Q,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mg,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const I={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(I.userData=this.userData),e||(A.textures[this.uuid]=I),I}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ie)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case z:A.x=A.x-Math.floor(A.x);break;case NA:A.x=A.x<0?0:1;break;case xt:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case z:A.y=A.y-Math.floor(A.y);break;case NA:A.y=A.y<0?0:1;break;case xt:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}AI.DEFAULT_IMAGE=null,AI.DEFAULT_MAPPING=ie,AI.DEFAULT_ANISOTROPY=1;class Eg{constructor(A=0,e=0,I=0,i=1){Eg.prototype.isVector4=!0,this.x=A,this.y=e,this.z=I,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,I,i){return this.x=A,this.y=e,this.z=I,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,I=this.y,i=this.z,C=this.w,Q=A.elements;return this.x=Q[0]*e+Q[4]*I+Q[8]*i+Q[12]*C,this.y=Q[1]*e+Q[5]*I+Q[9]*i+Q[13]*C,this.z=Q[2]*e+Q[6]*I+Q[10]*i+Q[14]*C,this.w=Q[3]*e+Q[7]*I+Q[11]*i+Q[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,I,i,C;const c=A.elements,d=c[0],p=c[4],y=c[8],w=c[1],R=c[5],k=c[9],G=c[2],U=c[6],v=c[10];if(Math.abs(p-w)<.01&&Math.abs(y-G)<.01&&Math.abs(k-U)<.01){if(Math.abs(p+w)<.1&&Math.abs(y+G)<.1&&Math.abs(k+U)<.1&&Math.abs(d+R+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const K=(d+1)/2,q=(R+1)/2,IA=(v+1)/2,hA=(p+w)/4,MA=(y+G)/4,O=(k+U)/4;return K>q&&K>IA?K<.01?(I=0,i=.707106781,C=.707106781):(I=Math.sqrt(K),i=hA/I,C=MA/I):q>IA?q<.01?(I=.707106781,i=0,C=.707106781):(i=Math.sqrt(q),I=hA/i,C=O/i):IA<.01?(I=.707106781,i=.707106781,C=0):(C=Math.sqrt(IA),I=MA/C,i=O/C),this.set(I,i,C,e),this}let W=Math.sqrt((U-k)*(U-k)+(y-G)*(y-G)+(w-p)*(w-p));return Math.abs(W)<.001&&(W=1),this.x=(U-k)/W,this.y=(y-G)/W,this.z=(w-p)/W,this.w=Math.acos((d+R+v-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(e,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,I){return this.x=A.x+(e.x-A.x)*I,this.y=A.y+(e.y-A.y)*I,this.z=A.z+(e.z-A.z)*I,this.w=A.w+(e.w-A.w)*I,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends wi{constructor(A=1,e=1,I={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new Eg(0,0,A,e),this.scissorTest=!1,this.viewport=new Eg(0,0,A,e);const i={width:A,height:e,depth:1};this.texture=new AI(i,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.internalFormat=I.internalFormat!==void 0?I.internalFormat:null,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:ge,this.depthBuffer=I.depthBuffer!==void 0?I.depthBuffer:!0,this.stencilBuffer=I.stencilBuffer!==void 0?I.stencilBuffer:!1,this.depthTexture=I.depthTexture!==void 0?I.depthTexture:null,this.samples=I.samples!==void 0?I.samples:0}setSize(A,e,I=1){(this.width!==A||this.height!==e||this.depth!==I)&&(this.width=A,this.height=e,this.depth=I,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=I,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},A.texture.image);return this.texture.source=new PB(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ZI extends AI{constructor(A=null,e=1,I=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:I,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=NA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xQ extends mi{constructor(A=1,e=1,I=1){super(A,e),this.isWebGLArrayRenderTarget=!0,this.depth=I,this.texture=new ZI(null,A,e,I),this.texture.isRenderTargetTexture=!0}}class Zn extends AI{constructor(A=null,e=1,I=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:I,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=NA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn extends mi{constructor(A=1,e=1,I=1){super(A,e),this.isWebGL3DRenderTarget=!0,this.depth=I,this.texture=new Zn(null,A,e,I),this.texture.isRenderTargetTexture=!0}}class DE extends mi{constructor(A=1,e=1,I=1,i={}){super(A,e,i),this.isWebGLMultipleRenderTargets=!0;const C=this.texture;this.texture=[];for(let Q=0;Q<I;Q++)this.texture[Q]=C.clone(),this.texture[Q].isRenderTargetTexture=!0}setSize(A,e,I=1){if(this.width!==A||this.height!==e||this.depth!==I){this.width=A,this.height=e,this.depth=I;for(let i=0,C=this.texture.length;i<C;i++)this.texture[i].image.width=A,this.texture[i].image.height=e,this.texture[i].image.depth=I;this.dispose()}return this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let e=0,I=A.texture.length;e<I;e++)this.texture[e]=A.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}class tB{constructor(A=new QA(1/0,1/0,1/0),e=new QA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){let e=1/0,I=1/0,i=1/0,C=-1/0,Q=-1/0,s=-1/0;for(let c=0,d=A.length;c<d;c+=3){const p=A[c],y=A[c+1],w=A[c+2];p<e&&(e=p),y<I&&(I=y),w<i&&(i=w),p>C&&(C=p),y>Q&&(Q=y),w>s&&(s=w)}return this.min.set(e,I,i),this.max.set(C,Q,s),this}setFromBufferAttribute(A){let e=1/0,I=1/0,i=1/0,C=-1/0,Q=-1/0,s=-1/0;for(let c=0,d=A.count;c<d;c++){const p=A.getX(c),y=A.getY(c),w=A.getZ(c);p<e&&(e=p),y<I&&(I=y),w<i&&(i=w),p>C&&(C=p),y>Q&&(Q=y),w>s&&(s=w)}return this.min.set(e,I,i),this.max.set(C,Q,s),this}setFromPoints(A){this.makeEmpty();for(let e=0,I=A.length;e<I;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const I=MI.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(I),this.max.copy(A).add(I),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);const I=A.geometry;if(I!==void 0)if(e&&I.attributes!=null&&I.attributes.position!==void 0){const C=I.attributes.position;for(let Q=0,s=C.count;Q<s;Q++)MI.fromBufferAttribute(C,Q).applyMatrix4(A.matrixWorld),this.expandByPoint(MI)}else I.boundingBox===null&&I.computeBoundingBox(),zn.copy(I.boundingBox),zn.applyMatrix4(A.matrixWorld),this.union(zn);const i=A.children;for(let C=0,Q=i.length;C<Q;C++)this.expandByObject(i[C],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,MI),MI.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,I;return A.normal.x>0?(e=A.normal.x*this.min.x,I=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,I=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,I+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,I+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,I+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,I+=A.normal.z*this.min.z),e<=-A.constant&&I>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(An),jn.subVectors(this.max,An),eB.subVectors(A.a,An),MB.subVectors(A.b,An),dC.subVectors(A.c,An),mB.subVectors(MB,eB),gB.subVectors(dC,MB),OB.subVectors(eB,dC);let e=[0,-mB.z,mB.y,0,-gB.z,gB.y,0,-OB.z,OB.y,mB.z,0,-mB.x,gB.z,0,-gB.x,OB.z,0,-OB.x,-mB.y,mB.x,0,-gB.y,gB.x,0,-OB.y,OB.x,0];return!fE(e,eB,MB,dC,jn)||(e=[1,0,0,0,1,0,0,0,1],!fE(e,eB,MB,dC,jn))?!1:($n.crossVectors(mB,gB),e=[$n.x,$n.y,$n.z],fE(e,eB,MB,dC,jn))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,MI).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(MI).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Ri),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Ri=[new QA,new QA,new QA,new QA,new QA,new QA,new QA,new QA],MI=new QA,zn=new tB,eB=new QA,MB=new QA,dC=new QA,mB=new QA,gB=new QA,OB=new QA,An=new QA,jn=new QA,$n=new QA,VB=new QA;function fE(n,A,e,I,i){for(let C=0,Q=n.length-3;C<=Q;C+=3){VB.fromArray(n,C);const s=i.x*Math.abs(VB.x)+i.y*Math.abs(VB.y)+i.z*Math.abs(VB.z),c=A.dot(VB),d=e.dot(VB),p=I.dot(VB);if(Math.max(-Math.max(c,d,p),Math.min(c,d,p))>s)return!1}return!0}const bQ=new tB,ZB=new QA,pE=new QA;class IB{constructor(A=new QA,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const I=this.center;e!==void 0?I.copy(e):bQ.setFromPoints(A).getCenter(I);let i=0;for(let C=0,Q=A.length;C<Q;C++)i=Math.max(i,I.distanceToSquared(A[C]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const I=this.center.distanceToSquared(A);return e.copy(A),I>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;ZB.subVectors(A,this.center);const e=ZB.lengthSq();if(e>this.radius*this.radius){const I=Math.sqrt(e),i=(I-this.radius)*.5;this.center.addScaledVector(ZB,i/I),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(pE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(ZB.copy(A.center).add(pE)),this.expandByPoint(ZB.copy(A.center).sub(pE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new QA,uC=new QA,tn=new QA,iB=new QA,Ao=new QA,en=new QA,wE=new QA;class Ki{constructor(A=new QA,e=new QA(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,gi)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const I=e.dot(this.direction);return I<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,I)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=gi.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(A))}distanceSqToSegment(A,e,I,i){uC.copy(A).add(e).multiplyScalar(.5),tn.copy(e).sub(A).normalize(),iB.copy(this.origin).sub(uC);const C=A.distanceTo(e)*.5,Q=-this.direction.dot(tn),s=iB.dot(this.direction),c=-iB.dot(tn),d=iB.lengthSq(),p=Math.abs(1-Q*Q);let y,w,R,k;if(p>0)if(y=Q*c-s,w=Q*s-c,k=C*p,y>=0)if(w>=-k)if(w<=k){const G=1/p;y*=G,w*=G,R=y*(y+Q*w+2*s)+w*(Q*y+w+2*c)+d}else w=C,y=Math.max(0,-(Q*w+s)),R=-y*y+w*(w+2*c)+d;else w=-C,y=Math.max(0,-(Q*w+s)),R=-y*y+w*(w+2*c)+d;else w<=-k?(y=Math.max(0,-(-Q*C+s)),w=y>0?-C:Math.min(Math.max(-C,-c),C),R=-y*y+w*(w+2*c)+d):w<=k?(y=0,w=Math.min(Math.max(-C,-c),C),R=w*(w+2*c)+d):(y=Math.max(0,-(Q*C+s)),w=y>0?C:Math.min(Math.max(-C,-c),C),R=-y*y+w*(w+2*c)+d);else w=Q>0?-C:C,y=Math.max(0,-(Q*w+s)),R=-y*y+w*(w+2*c)+d;return I&&I.copy(this.origin).addScaledVector(this.direction,y),i&&i.copy(uC).addScaledVector(tn,w),R}intersectSphere(A,e){gi.subVectors(A.center,this.origin);const I=gi.dot(this.direction),i=gi.dot(gi)-I*I,C=A.radius*A.radius;if(i>C)return null;const Q=Math.sqrt(C-i),s=I-Q,c=I+Q;return c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const I=-(this.origin.dot(A.normal)+A.constant)/e;return I>=0?I:null}intersectPlane(A,e){const I=this.distanceToPlane(A);return I===null?null:this.at(I,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let I,i,C,Q,s,c;const d=1/this.direction.x,p=1/this.direction.y,y=1/this.direction.z,w=this.origin;return d>=0?(I=(A.min.x-w.x)*d,i=(A.max.x-w.x)*d):(I=(A.max.x-w.x)*d,i=(A.min.x-w.x)*d),p>=0?(C=(A.min.y-w.y)*p,Q=(A.max.y-w.y)*p):(C=(A.max.y-w.y)*p,Q=(A.min.y-w.y)*p),I>Q||C>i||((C>I||isNaN(I))&&(I=C),(Q<i||isNaN(i))&&(i=Q),y>=0?(s=(A.min.z-w.z)*y,c=(A.max.z-w.z)*y):(s=(A.max.z-w.z)*y,c=(A.min.z-w.z)*y),I>c||s>i)||((s>I||I!==I)&&(I=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(I>=0?I:i,e)}intersectsBox(A){return this.intersectBox(A,gi)!==null}intersectTriangle(A,e,I,i,C){Ao.subVectors(e,A),en.subVectors(I,A),wE.crossVectors(Ao,en);let Q=this.direction.dot(wE),s;if(Q>0){if(i)return null;s=1}else if(Q<0)s=-1,Q=-Q;else return null;iB.subVectors(this.origin,A);const c=s*this.direction.dot(en.crossVectors(iB,en));if(c<0)return null;const d=s*this.direction.dot(Ao.cross(iB));if(d<0||c+d>Q)return null;const p=-s*iB.dot(wE);return p<0?null:this.at(p/Q,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,e,I,i,C,Q,s,c,d,p,y,w,R,k,G,U){const v=this.elements;return v[0]=A,v[4]=e,v[8]=I,v[12]=i,v[1]=C,v[5]=Q,v[9]=s,v[13]=c,v[2]=d,v[6]=p,v[10]=y,v[14]=w,v[3]=R,v[7]=k,v[11]=G,v[15]=U,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(A){const e=this.elements,I=A.elements;return e[0]=I[0],e[1]=I[1],e[2]=I[2],e[3]=I[3],e[4]=I[4],e[5]=I[5],e[6]=I[6],e[7]=I[7],e[8]=I[8],e[9]=I[9],e[10]=I[10],e[11]=I[11],e[12]=I[12],e[13]=I[13],e[14]=I[14],e[15]=I[15],this}copyPosition(A){const e=this.elements,I=A.elements;return e[12]=I[12],e[13]=I[13],e[14]=I[14],this}setFromMatrix3(A){const e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,I){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),I.setFromMatrixColumn(this,2),this}makeBasis(A,e,I){return this.set(A.x,e.x,I.x,0,A.y,e.y,I.y,0,A.z,e.z,I.z,0,0,0,0,1),this}extractRotation(A){const e=this.elements,I=A.elements,i=1/DC.setFromMatrixColumn(A,0).length(),C=1/DC.setFromMatrixColumn(A,1).length(),Q=1/DC.setFromMatrixColumn(A,2).length();return e[0]=I[0]*i,e[1]=I[1]*i,e[2]=I[2]*i,e[3]=0,e[4]=I[4]*C,e[5]=I[5]*C,e[6]=I[6]*C,e[7]=0,e[8]=I[8]*Q,e[9]=I[9]*Q,e[10]=I[10]*Q,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){const e=this.elements,I=A.x,i=A.y,C=A.z,Q=Math.cos(I),s=Math.sin(I),c=Math.cos(i),d=Math.sin(i),p=Math.cos(C),y=Math.sin(C);if(A.order==="XYZ"){const w=Q*p,R=Q*y,k=s*p,G=s*y;e[0]=c*p,e[4]=-c*y,e[8]=d,e[1]=R+k*d,e[5]=w-G*d,e[9]=-s*c,e[2]=G-w*d,e[6]=k+R*d,e[10]=Q*c}else if(A.order==="YXZ"){const w=c*p,R=c*y,k=d*p,G=d*y;e[0]=w+G*s,e[4]=k*s-R,e[8]=Q*d,e[1]=Q*y,e[5]=Q*p,e[9]=-s,e[2]=R*s-k,e[6]=G+w*s,e[10]=Q*c}else if(A.order==="ZXY"){const w=c*p,R=c*y,k=d*p,G=d*y;e[0]=w-G*s,e[4]=-Q*y,e[8]=k+R*s,e[1]=R+k*s,e[5]=Q*p,e[9]=G-w*s,e[2]=-Q*d,e[6]=s,e[10]=Q*c}else if(A.order==="ZYX"){const w=Q*p,R=Q*y,k=s*p,G=s*y;e[0]=c*p,e[4]=k*d-R,e[8]=w*d+G,e[1]=c*y,e[5]=G*d+w,e[9]=R*d-k,e[2]=-d,e[6]=s*c,e[10]=Q*c}else if(A.order==="YZX"){const w=Q*c,R=Q*d,k=s*c,G=s*d;e[0]=c*p,e[4]=G-w*y,e[8]=k*y+R,e[1]=y,e[5]=Q*p,e[9]=-s*p,e[2]=-d*p,e[6]=R*y+k,e[10]=w-G*y}else if(A.order==="XZY"){const w=Q*c,R=Q*d,k=s*c,G=s*d;e[0]=c*p,e[4]=-y,e[8]=d*p,e[1]=w*y+G,e[5]=Q*p,e[9]=R*y-k,e[2]=k*y-R,e[6]=s*p,e[10]=G*y+w}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(BB,A,JQ)}lookAt(A,e,I){const i=this.elements;return nI.subVectors(A,e),nI.lengthSq()===0&&(nI.z=1),nI.normalize(),CB.crossVectors(I,nI),CB.lengthSq()===0&&(Math.abs(I.z)===1?nI.x+=1e-4:nI.z+=1e-4,nI.normalize(),CB.crossVectors(I,nI)),CB.normalize(),Si.crossVectors(nI,CB),i[0]=CB.x,i[4]=Si.x,i[8]=nI.x,i[1]=CB.y,i[5]=Si.y,i[9]=nI.y,i[2]=CB.z,i[6]=Si.z,i[10]=nI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const I=A.elements,i=e.elements,C=this.elements,Q=I[0],s=I[4],c=I[8],d=I[12],p=I[1],y=I[5],w=I[9],R=I[13],k=I[2],G=I[6],U=I[10],v=I[14],W=I[3],K=I[7],q=I[11],IA=I[15],hA=i[0],MA=i[4],O=i[8],nA=i[12],mA=i[1],Ct=i[5],ct=i[9],OA=i[13],vA=i[2],st=i[6],mt=i[10],qt=i[14],Dt=i[3],_t=i[7],Lt=i[11],Re=i[15];return C[0]=Q*hA+s*mA+c*vA+d*Dt,C[4]=Q*MA+s*Ct+c*st+d*_t,C[8]=Q*O+s*ct+c*mt+d*Lt,C[12]=Q*nA+s*OA+c*qt+d*Re,C[1]=p*hA+y*mA+w*vA+R*Dt,C[5]=p*MA+y*Ct+w*st+R*_t,C[9]=p*O+y*ct+w*mt+R*Lt,C[13]=p*nA+y*OA+w*qt+R*Re,C[2]=k*hA+G*mA+U*vA+v*Dt,C[6]=k*MA+G*Ct+U*st+v*_t,C[10]=k*O+G*ct+U*mt+v*Lt,C[14]=k*nA+G*OA+U*qt+v*Re,C[3]=W*hA+K*mA+q*vA+IA*Dt,C[7]=W*MA+K*Ct+q*st+IA*_t,C[11]=W*O+K*ct+q*mt+IA*Lt,C[15]=W*nA+K*OA+q*qt+IA*Re,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){const A=this.elements,e=A[0],I=A[4],i=A[8],C=A[12],Q=A[1],s=A[5],c=A[9],d=A[13],p=A[2],y=A[6],w=A[10],R=A[14],k=A[3],G=A[7],U=A[11],v=A[15];return k*(+C*c*y-i*d*y-C*s*w+I*d*w+i*s*R-I*c*R)+G*(+e*c*R-e*d*w+C*Q*w-i*Q*R+i*d*p-C*c*p)+U*(+e*d*y-e*s*R-C*Q*y+I*Q*R+C*s*p-I*d*p)+v*(-i*s*p-e*c*y+e*s*w+i*Q*y-I*Q*w+I*c*p)}transpose(){const A=this.elements;let e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,I){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=I),this}invert(){const A=this.elements,e=A[0],I=A[1],i=A[2],C=A[3],Q=A[4],s=A[5],c=A[6],d=A[7],p=A[8],y=A[9],w=A[10],R=A[11],k=A[12],G=A[13],U=A[14],v=A[15],W=y*U*d-G*w*d+G*c*R-s*U*R-y*c*v+s*w*v,K=k*w*d-p*U*d-k*c*R+Q*U*R+p*c*v-Q*w*v,q=p*G*d-k*y*d+k*s*R-Q*G*R-p*s*v+Q*y*v,IA=k*y*c-p*G*c-k*s*w+Q*G*w+p*s*U-Q*y*U,hA=e*W+I*K+i*q+C*IA;if(hA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const MA=1/hA;return A[0]=W*MA,A[1]=(G*w*C-y*U*C-G*i*R+I*U*R+y*i*v-I*w*v)*MA,A[2]=(s*U*C-G*c*C+G*i*d-I*U*d-s*i*v+I*c*v)*MA,A[3]=(y*c*C-s*w*C-y*i*d+I*w*d+s*i*R-I*c*R)*MA,A[4]=K*MA,A[5]=(p*U*C-k*w*C+k*i*R-e*U*R-p*i*v+e*w*v)*MA,A[6]=(k*c*C-Q*U*C-k*i*d+e*U*d+Q*i*v-e*c*v)*MA,A[7]=(Q*w*C-p*c*C+p*i*d-e*w*d-Q*i*R+e*c*R)*MA,A[8]=q*MA,A[9]=(k*y*C-p*G*C-k*I*R+e*G*R+p*I*v-e*y*v)*MA,A[10]=(Q*G*C-k*s*C+k*I*d-e*G*d-Q*I*v+e*s*v)*MA,A[11]=(p*s*C-Q*y*C-p*I*d+e*y*d+Q*I*R-e*s*R)*MA,A[12]=IA*MA,A[13]=(p*G*i-k*y*i+k*I*w-e*G*w-p*I*U+e*y*U)*MA,A[14]=(k*s*i-Q*G*i-k*I*c+e*G*c+Q*I*U-e*s*U)*MA,A[15]=(Q*y*i-p*s*i+p*I*c-e*y*c-Q*I*w+e*s*w)*MA,this}scale(A){const e=this.elements,I=A.x,i=A.y,C=A.z;return e[0]*=I,e[4]*=i,e[8]*=C,e[1]*=I,e[5]*=i,e[9]*=C,e[2]*=I,e[6]*=i,e[10]*=C,e[3]*=I,e[7]*=i,e[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],I=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,I,i))}makeTranslation(A,e,I){return this.set(1,0,0,A,0,1,0,e,0,0,1,I,0,0,0,1),this}makeRotationX(A){const e=Math.cos(A),I=Math.sin(A);return this.set(1,0,0,0,0,e,-I,0,0,I,e,0,0,0,0,1),this}makeRotationY(A){const e=Math.cos(A),I=Math.sin(A);return this.set(e,0,I,0,0,1,0,0,-I,0,e,0,0,0,0,1),this}makeRotationZ(A){const e=Math.cos(A),I=Math.sin(A);return this.set(e,-I,0,0,I,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){const I=Math.cos(e),i=Math.sin(e),C=1-I,Q=A.x,s=A.y,c=A.z,d=C*Q,p=C*s;return this.set(d*Q+I,d*s-i*c,d*c+i*s,0,d*s+i*c,p*s+I,p*c-i*Q,0,d*c-i*s,p*c+i*Q,C*c*c+I,0,0,0,0,1),this}makeScale(A,e,I){return this.set(A,0,0,0,0,e,0,0,0,0,I,0,0,0,0,1),this}makeShear(A,e,I,i,C,Q){return this.set(1,I,C,0,A,1,Q,0,e,i,1,0,0,0,0,1),this}compose(A,e,I){const i=this.elements,C=e._x,Q=e._y,s=e._z,c=e._w,d=C+C,p=Q+Q,y=s+s,w=C*d,R=C*p,k=C*y,G=Q*p,U=Q*y,v=s*y,W=c*d,K=c*p,q=c*y,IA=I.x,hA=I.y,MA=I.z;return i[0]=(1-(G+v))*IA,i[1]=(R+q)*IA,i[2]=(k-K)*IA,i[3]=0,i[4]=(R-q)*hA,i[5]=(1-(w+v))*hA,i[6]=(U+W)*hA,i[7]=0,i[8]=(k+K)*MA,i[9]=(U-W)*MA,i[10]=(1-(w+G))*MA,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,I){const i=this.elements;let C=DC.set(i[0],i[1],i[2]).length();const Q=DC.set(i[4],i[5],i[6]).length(),s=DC.set(i[8],i[9],i[10]).length();this.determinant()<0&&(C=-C),A.x=i[12],A.y=i[13],A.z=i[14],qI.copy(this);const d=1/C,p=1/Q,y=1/s;return qI.elements[0]*=d,qI.elements[1]*=d,qI.elements[2]*=d,qI.elements[4]*=p,qI.elements[5]*=p,qI.elements[6]*=p,qI.elements[8]*=y,qI.elements[9]*=y,qI.elements[10]*=y,e.setFromRotationMatrix(qI),I.x=C,I.y=Q,I.z=s,this}makePerspective(A,e,I,i,C,Q){const s=this.elements,c=2*C/(e-A),d=2*C/(I-i),p=(e+A)/(e-A),y=(I+i)/(I-i),w=-(Q+C)/(Q-C),R=-2*Q*C/(Q-C);return s[0]=c,s[4]=0,s[8]=p,s[12]=0,s[1]=0,s[5]=d,s[9]=y,s[13]=0,s[2]=0,s[6]=0,s[10]=w,s[14]=R,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(A,e,I,i,C,Q){const s=this.elements,c=1/(e-A),d=1/(I-i),p=1/(Q-C),y=(e+A)*c,w=(I+i)*d,R=(Q+C)*p;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-y,s[1]=0,s[5]=2*d,s[9]=0,s[13]=-w,s[2]=0,s[6]=0,s[10]=-2*p,s[14]=-R,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(A){const e=this.elements,I=A.elements;for(let i=0;i<16;i++)if(e[i]!==I[i])return!1;return!0}fromArray(A,e=0){for(let I=0;I<16;I++)this.elements[I]=A[I+e];return this}toArray(A=[],e=0){const I=this.elements;return A[e]=I[0],A[e+1]=I[1],A[e+2]=I[2],A[e+3]=I[3],A[e+4]=I[4],A[e+5]=I[5],A[e+6]=I[6],A[e+7]=I[7],A[e+8]=I[8],A[e+9]=I[9],A[e+10]=I[10],A[e+11]=I[11],A[e+12]=I[12],A[e+13]=I[13],A[e+14]=I[14],A[e+15]=I[15],A}}const DC=new QA,qI=new Ve,BB=new QA(0,0,0),JQ=new QA(1,1,1),CB=new QA,Si=new QA,nI=new QA,nB=new Ve,yE=new TI;class fC{constructor(A=0,e=0,I=0,i=fC.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=e,this._z=I,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,I,i=this._order){return this._x=A,this._y=e,this._z=I,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,I=!0){const i=A.elements,C=i[0],Q=i[4],s=i[8],c=i[1],d=i[5],p=i[9],y=i[2],w=i[6],R=i[10];switch(e){case"XYZ":this._y=Math.asin(eI(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-p,R),this._z=Math.atan2(-Q,C)):(this._x=Math.atan2(w,d),this._z=0);break;case"YXZ":this._x=Math.asin(-eI(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(s,R),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-y,C),this._z=0);break;case"ZXY":this._x=Math.asin(eI(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(-y,R),this._z=Math.atan2(-Q,d)):(this._y=0,this._z=Math.atan2(c,C));break;case"ZYX":this._y=Math.asin(-eI(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(w,R),this._z=Math.atan2(c,C)):(this._x=0,this._z=Math.atan2(-Q,d));break;case"YZX":this._z=Math.asin(eI(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-y,C)):(this._x=0,this._y=Math.atan2(s,R));break;case"XZY":this._z=Math.asin(-eI(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(w,d),this._y=Math.atan2(s,C)):(this._x=Math.atan2(-p,R),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,I===!0&&this._onChangeCallback(),this}setFromQuaternion(A,e,I){return nB.makeRotationFromQuaternion(A),this.setFromRotationMatrix(nB,e,I)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return yE.setFromEuler(this),this.setFromQuaternion(yE,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fC.DEFAULT_ORDER="XYZ";class l{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let u=0;const M=new QA,b=new TI,_=new Ve,tA=new QA,lA=new QA,wA=new QA,KA=new TI,jA=new QA(1,0,0),Ut=new QA(0,1,0),bt=new QA(0,0,1),Bt={type:"added"},Yt={type:"removed"};class St extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u++}),this.uuid=HI(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const A=new QA,e=new fC,I=new TI,i=new QA(1,1,1);function C(){I.setFromEuler(e,!1)}function Q(){e.setFromQuaternion(I,void 0,!1)}e._onChange(C),I._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:I},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new mg}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return b.setFromAxisAngle(A,e),this.quaternion.multiply(b),this}rotateOnWorldAxis(A,e){return b.setFromAxisAngle(A,e),this.quaternion.premultiply(b),this}rotateX(A){return this.rotateOnAxis(jA,A)}rotateY(A){return this.rotateOnAxis(Ut,A)}rotateZ(A){return this.rotateOnAxis(bt,A)}translateOnAxis(A,e){return M.copy(A).applyQuaternion(this.quaternion),this.position.add(M.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(jA,A)}translateY(A){return this.translateOnAxis(Ut,A)}translateZ(A){return this.translateOnAxis(bt,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(_.copy(this.matrixWorld).invert())}lookAt(A,e,I){A.isVector3?tA.copy(A):tA.set(A,e,I);const i=this.parent;this.updateWorldMatrix(!0,!1),lA.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_.lookAt(lA,tA,this.up):_.lookAt(tA,lA,this.up),this.quaternion.setFromRotationMatrix(_),i&&(_.extractRotation(i.matrixWorld),b.setFromRotationMatrix(_),this.quaternion.premultiply(b.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Bt)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.remove(arguments[I]);return this}const e=this.children.indexOf(A);return e!==-1&&(A.parent=null,this.children.splice(e,1),A.dispatchEvent(Yt)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const e=this.children[A];e.parent=null,e.dispatchEvent(Yt)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),_.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),_.multiply(A.parent.matrixWorld)),A.applyMatrix4(_),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let I=0,i=this.children.length;I<i;I++){const Q=this.children[I].getObjectByProperty(A,e);if(Q!==void 0)return Q}}getObjectsByProperty(A,e){let I=[];this[A]===e&&I.push(this);for(let i=0,C=this.children.length;i<C;i++){const Q=this.children[i].getObjectsByProperty(A,e);Q.length>0&&(I=I.concat(Q))}return I}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lA,A,wA),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lA,KA,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);const e=this.children;for(let I=0,i=e.length;I<i;I++)e[I].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const e=this.children;for(let I=0,i=e.length;I<i;I++)e[I].traverseVisible(A)}traverseAncestors(A){const e=this.parent;e!==null&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const e=this.children;for(let I=0,i=e.length;I<i;I++){const C=e[I];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,e){const I=this.parent;if(A===!0&&I!==null&&I.matrixWorldAutoUpdate===!0&&I.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let C=0,Q=i.length;C<Q;C++){const s=i[C];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(A){const e=A===void 0||typeof A=="string",I={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},I.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function C(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(A)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=C(A.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let d=0,p=c.length;d<p;d++){const y=c[d];C(A.shapes,y)}else C(A.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,d=this.material.length;c<d;c++)s.push(C(A.materials,this.material[c]));i.material=s}else i.material=C(A.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(C(A.animations,c))}}if(e){const s=Q(A.geometries),c=Q(A.materials),d=Q(A.textures),p=Q(A.images),y=Q(A.shapes),w=Q(A.skeletons),R=Q(A.animations),k=Q(A.nodes);s.length>0&&(I.geometries=s),c.length>0&&(I.materials=c),d.length>0&&(I.textures=d),p.length>0&&(I.images=p),y.length>0&&(I.shapes=y),w.length>0&&(I.skeletons=w),R.length>0&&(I.animations=R),k.length>0&&(I.nodes=k)}return I.object=i,I;function Q(s){const c=[];for(const d in s){const p=s[d];delete p.metadata,c.push(p)}return c}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),e===!0)for(let I=0;I<A.children.length;I++){const i=A.children[I];this.add(i.clone())}return this}}St.DEFAULT_UP=new QA(0,1,0),St.DEFAULT_MATRIX_AUTO_UPDATE=!0,St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ig=new QA,Ze=new QA,lg=new QA,Et=new QA,ae=new QA,Jg=new QA,Kg=new QA,mI=new QA,oI=new QA,ME=new QA;class _I{constructor(A=new QA,e=new QA,I=new QA){this.a=A,this.b=e,this.c=I}static getNormal(A,e,I,i){i.subVectors(I,e),Ig.subVectors(A,e),i.cross(Ig);const C=i.lengthSq();return C>0?i.multiplyScalar(1/Math.sqrt(C)):i.set(0,0,0)}static getBarycoord(A,e,I,i,C){Ig.subVectors(i,e),Ze.subVectors(I,e),lg.subVectors(A,e);const Q=Ig.dot(Ig),s=Ig.dot(Ze),c=Ig.dot(lg),d=Ze.dot(Ze),p=Ze.dot(lg),y=Q*d-s*s;if(y===0)return C.set(-2,-1,-1);const w=1/y,R=(d*c-s*p)*w,k=(Q*p-s*c)*w;return C.set(1-R-k,k,R)}static containsPoint(A,e,I,i){return this.getBarycoord(A,e,I,i,Et),Et.x>=0&&Et.y>=0&&Et.x+Et.y<=1}static getUV(A,e,I,i,C,Q,s,c){return this.getBarycoord(A,e,I,i,Et),c.set(0,0),c.addScaledVector(C,Et.x),c.addScaledVector(Q,Et.y),c.addScaledVector(s,Et.z),c}static isFrontFacing(A,e,I,i){return Ig.subVectors(I,e),Ze.subVectors(A,e),Ig.cross(Ze).dot(i)<0}set(A,e,I){return this.a.copy(A),this.b.copy(e),this.c.copy(I),this}setFromPointsAndIndices(A,e,I,i){return this.a.copy(A[e]),this.b.copy(A[I]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,I,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,I),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Ig.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),Ig.cross(Ze).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return _I.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return _I.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,I,i,C){return _I.getUV(A,this.a,this.b,this.c,e,I,i,C)}containsPoint(A){return _I.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return _I.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){const I=this.a,i=this.b,C=this.c;let Q,s;ae.subVectors(i,I),Jg.subVectors(C,I),mI.subVectors(A,I);const c=ae.dot(mI),d=Jg.dot(mI);if(c<=0&&d<=0)return e.copy(I);oI.subVectors(A,i);const p=ae.dot(oI),y=Jg.dot(oI);if(p>=0&&y<=p)return e.copy(i);const w=c*y-p*d;if(w<=0&&c>=0&&p<=0)return Q=c/(c-p),e.copy(I).addScaledVector(ae,Q);ME.subVectors(A,C);const R=ae.dot(ME),k=Jg.dot(ME);if(k>=0&&R<=k)return e.copy(C);const G=R*d-c*k;if(G<=0&&d>=0&&k<=0)return s=d/(d-k),e.copy(I).addScaledVector(Jg,s);const U=p*k-R*y;if(U<=0&&y-p>=0&&R-k>=0)return Kg.subVectors(C,i),s=(y-p)/(y-p+(R-k)),e.copy(i).addScaledVector(Kg,s);const v=1/(U+G+w);return Q=G*v,s=w*v,e.copy(I).addScaledVector(ae,Q).addScaledVector(Jg,s)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Ii=0;class UI extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ii++}),this.uuid=HI(),this.name="",this.type="Material",this.blending=x,this.side=S,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$A,this.blendDst=VA,this.blendEquation=dA,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qA,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vI,this.stencilZFail=vI,this.stencilZPass=vI,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const I=A[e];if(I===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(I):i&&i.isVector3&&I&&I.isVector3?i.copy(I):this[e]=I}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const I={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),this.color&&this.color.isColor&&(I.color=this.color.getHex()),this.roughness!==void 0&&(I.roughness=this.roughness),this.metalness!==void 0&&(I.metalness=this.metalness),this.sheen!==void 0&&(I.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(I.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(I.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(I.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(I.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(I.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(I.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(I.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(I.shininess=this.shininess),this.clearcoat!==void 0&&(I.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(I.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(I.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(I.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(I.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,I.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(I.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(I.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(I.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(I.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(I.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(I.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(I.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(I.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(I.lightMap=this.lightMap.toJSON(A).uuid,I.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(I.aoMap=this.aoMap.toJSON(A).uuid,I.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(I.bumpMap=this.bumpMap.toJSON(A).uuid,I.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(I.normalMap=this.normalMap.toJSON(A).uuid,I.normalMapType=this.normalMapType,I.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(I.displacementMap=this.displacementMap.toJSON(A).uuid,I.displacementScale=this.displacementScale,I.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(I.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(I.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(I.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(I.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(I.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(I.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(I.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(I.combine=this.combine)),this.envMapIntensity!==void 0&&(I.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(I.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(I.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(I.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(I.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(I.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(I.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(I.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(I.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(I.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(I.size=this.size),this.shadowSide!==null&&(I.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(I.sizeAttenuation=this.sizeAttenuation),this.blending!==x&&(I.blending=this.blending),this.side!==S&&(I.side=this.side),this.vertexColors&&(I.vertexColors=!0),this.opacity<1&&(I.opacity=this.opacity),this.transparent===!0&&(I.transparent=this.transparent),I.depthFunc=this.depthFunc,I.depthTest=this.depthTest,I.depthWrite=this.depthWrite,I.colorWrite=this.colorWrite,I.stencilWrite=this.stencilWrite,I.stencilWriteMask=this.stencilWriteMask,I.stencilFunc=this.stencilFunc,I.stencilRef=this.stencilRef,I.stencilFuncMask=this.stencilFuncMask,I.stencilFail=this.stencilFail,I.stencilZFail=this.stencilZFail,I.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(I.rotation=this.rotation),this.polygonOffset===!0&&(I.polygonOffset=!0),this.polygonOffsetFactor!==0&&(I.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(I.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(I.linewidth=this.linewidth),this.dashSize!==void 0&&(I.dashSize=this.dashSize),this.gapSize!==void 0&&(I.gapSize=this.gapSize),this.scale!==void 0&&(I.scale=this.scale),this.dithering===!0&&(I.dithering=!0),this.alphaTest>0&&(I.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(I.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(I.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(I.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(I.wireframe=this.wireframe),this.wireframeLinewidth>1&&(I.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(I.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(I.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(I.flatShading=this.flatShading),this.visible===!1&&(I.visible=!1),this.toneMapped===!1&&(I.toneMapped=!1),this.fog===!1&&(I.fog=!1),Object.keys(this.userData).length>0&&(I.userData=this.userData);function i(C){const Q=[];for(const s in C){const c=C[s];delete c.metadata,Q.push(c)}return Q}if(e){const C=i(A.textures),Q=i(A.images);C.length>0&&(I.textures=C),Q.length>0&&(I.images=Q)}return I}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let I=null;if(e!==null){const i=e.length;I=new Array(i);for(let C=0;C!==i;++C)I[C]=e[C].clone()}return this.clippingPlanes=I,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const to={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},KQ={h:0,s:0,l:0};function cr(n,A,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(A-n)*6*e:e<1/2?A:e<2/3?n+(A-n)*6*(2/3-e):n}class Qe{constructor(A,e,I){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&I===void 0?this.set(A):this.setRGB(A,e,I)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=vg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,NI.toWorkingColorSpace(this,e),this}setRGB(A,e,I,i=NI.workingColorSpace){return this.r=A,this.g=e,this.b=I,NI.toWorkingColorSpace(this,i),this}setHSL(A,e,I,i=NI.workingColorSpace){if(A=fg(A,1),e=eI(e,0,1),I=eI(I,0,1),e===0)this.r=this.g=this.b=I;else{const C=I<=.5?I*(1+e):I+e-I*e,Q=2*I-C;this.r=cr(Q,C,A+1/3),this.g=cr(Q,C,A),this.b=cr(Q,C,A-1/3)}return NI.toWorkingColorSpace(this,i),this}setStyle(A,e=vg){function I(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const Q=i[1],s=i[2];switch(Q){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(C[1],10))/255,this.g=Math.min(255,parseInt(C[2],10))/255,this.b=Math.min(255,parseInt(C[3],10))/255,NI.toWorkingColorSpace(this,e),I(C[4]),this;if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(C[1],10))/100,this.g=Math.min(100,parseInt(C[2],10))/100,this.b=Math.min(100,parseInt(C[3],10))/100,NI.toWorkingColorSpace(this,e),I(C[4]),this;break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(C[1])/360,d=parseFloat(C[2])/100,p=parseFloat(C[3])/100;return I(C[4]),this.setHSL(c,d,p,e)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=i[1],Q=C.length;if(Q===3)return this.r=parseInt(C.charAt(0)+C.charAt(0),16)/255,this.g=parseInt(C.charAt(1)+C.charAt(1),16)/255,this.b=parseInt(C.charAt(2)+C.charAt(2),16)/255,NI.toWorkingColorSpace(this,e),this;if(Q===6)return this.r=parseInt(C.charAt(0)+C.charAt(1),16)/255,this.g=parseInt(C.charAt(2)+C.charAt(3),16)/255,this.b=parseInt(C.charAt(4)+C.charAt(5),16)/255,NI.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=vg){const I=to[A.toLowerCase()];return I!==void 0?this.setHex(I,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Ji(A.r),this.g=Ji(A.g),this.b=Ji(A.b),this}copyLinearToSRGB(A){return this.r=XC(A.r),this.g=XC(A.g),this.b=XC(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=vg){return NI.fromWorkingColorSpace(XI.copy(this),A),eI(XI.r*255,0,255)<<16^eI(XI.g*255,0,255)<<8^eI(XI.b*255,0,255)<<0}getHexString(A=vg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=NI.workingColorSpace){NI.fromWorkingColorSpace(XI.copy(this),e);const I=XI.r,i=XI.g,C=XI.b,Q=Math.max(I,i,C),s=Math.min(I,i,C);let c,d;const p=(s+Q)/2;if(s===Q)c=0,d=0;else{const y=Q-s;switch(d=p<=.5?y/(Q+s):y/(2-Q-s),Q){case I:c=(i-C)/y+(i<C?6:0);break;case i:c=(C-I)/y+2;break;case C:c=(I-i)/y+4;break}c/=6}return A.h=c,A.s=d,A.l=p,A}getRGB(A,e=NI.workingColorSpace){return NI.fromWorkingColorSpace(XI.copy(this),e),A.r=XI.r,A.g=XI.g,A.b=XI.b,A}getStyle(A=vg){NI.fromWorkingColorSpace(XI.copy(this),A);const e=XI.r,I=XI.g,i=XI.b;return A!==vg?`color(${A} ${e.toFixed(3)} ${I.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${I*255|0},${i*255|0})`}offsetHSL(A,e,I){return this.getHSL(ci),ci.h+=A,ci.s+=e,ci.l+=I,this.setHSL(ci.h,ci.s,ci.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,I){return this.r=A.r+(e.r-A.r)*I,this.g=A.g+(e.g-A.g)*I,this.b=A.b+(e.b-A.b)*I,this}lerpHSL(A,e){this.getHSL(ci),A.getHSL(KQ);const I=yi(ci.h,KQ.h,e),i=yi(ci.s,KQ.s,e),C=yi(ci.l,KQ.l,e);return this.setHSL(I,i,C),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const XI=new Qe;Qe.NAMES=to;class pC extends UI{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=De,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const uI=new QA,YQ=new yt;class Pg{constructor(A,e,I=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=I,this.usage=cC,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,e,I){A*=this.itemSize,I*=e.itemSize;for(let i=0,C=this.itemSize;i<C;i++)this.array[A+i]=e.array[I+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,I=this.count;e<I;e++)YQ.fromBufferAttribute(this,e),YQ.applyMatrix3(A),this.setXY(e,YQ.x,YQ.y);else if(this.itemSize===3)for(let e=0,I=this.count;e<I;e++)uI.fromBufferAttribute(this,e),uI.applyMatrix3(A),this.setXYZ(e,uI.x,uI.y,uI.z);return this}applyMatrix4(A){for(let e=0,I=this.count;e<I;e++)uI.fromBufferAttribute(this,e),uI.applyMatrix4(A),this.setXYZ(e,uI.x,uI.y,uI.z);return this}applyNormalMatrix(A){for(let e=0,I=this.count;e<I;e++)uI.fromBufferAttribute(this,e),uI.applyNormalMatrix(A),this.setXYZ(e,uI.x,uI.y,uI.z);return this}transformDirection(A){for(let e=0,I=this.count;e<I;e++)uI.fromBufferAttribute(this,e),uI.transformDirection(A),this.setXYZ(e,uI.x,uI.y,uI.z);return this}set(A,e=0){return this.array.set(A,e),this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(A,e){return this.normalized&&(e=pg(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(A,e){return this.normalized&&(e=pg(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(A,e){return this.normalized&&(e=pg(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(A,e){return this.normalized&&(e=pg(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,I){return A*=this.itemSize,this.normalized&&(e=pg(e,this.array),I=pg(I,this.array)),this.array[A+0]=e,this.array[A+1]=I,this}setXYZ(A,e,I,i){return A*=this.itemSize,this.normalized&&(e=pg(e,this.array),I=pg(I,this.array),i=pg(i,this.array)),this.array[A+0]=e,this.array[A+1]=I,this.array[A+2]=i,this}setXYZW(A,e,I,i,C){return A*=this.itemSize,this.normalized&&(e=pg(e,this.array),I=pg(I,this.array),i=pg(i,this.array),C=pg(C,this.array)),this.array[A+0]=e,this.array[A+1]=I,this.array[A+2]=i,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==cC&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class LD extends Pg{constructor(A,e,I){super(new Int8Array(A),e,I)}}class xD extends Pg{constructor(A,e,I){super(new Uint8Array(A),e,I)}}class bD extends Pg{constructor(A,e,I){super(new Uint8ClampedArray(A),e,I)}}class JD extends Pg{constructor(A,e,I){super(new Int16Array(A),e,I)}}class lr extends Pg{constructor(A,e,I){super(new Uint16Array(A),e,I)}}class KD extends Pg{constructor(A,e,I){super(new Int32Array(A),e,I)}}class dr extends Pg{constructor(A,e,I){super(new Uint32Array(A),e,I)}}class YD extends Pg{constructor(A,e,I){super(new Uint16Array(A),e,I),this.isFloat16BufferAttribute=!0}}class Me extends Pg{constructor(A,e,I){super(new Float32Array(A),e,I)}}class vD extends Pg{constructor(A,e,I){super(new Float64Array(A),e,I)}}let HD=0;const Yi=new Ve,ur=new St,eo=new QA,Gi=new tB,mE=new tB,kI=new QA;class Qg extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HD++}),this.uuid=HI(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(wg(A)?dr:lr)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,e,I=0){this.groups.push({start:A,count:e,materialIndex:I})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(A),e.needsUpdate=!0);const I=this.attributes.normal;if(I!==void 0){const C=new mg().getNormalMatrix(A);I.applyNormalMatrix(C),I.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Yi.makeRotationFromQuaternion(A),this.applyMatrix4(Yi),this}rotateX(A){return Yi.makeRotationX(A),this.applyMatrix4(Yi),this}rotateY(A){return Yi.makeRotationY(A),this.applyMatrix4(Yi),this}rotateZ(A){return Yi.makeRotationZ(A),this.applyMatrix4(Yi),this}translate(A,e,I){return Yi.makeTranslation(A,e,I),this.applyMatrix4(Yi),this}scale(A,e,I){return Yi.makeScale(A,e,I),this.applyMatrix4(Yi),this}lookAt(A){return ur.lookAt(A),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(A){const e=[];for(let I=0,i=A.length;I<i;I++){const C=A[I];e.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tB);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new QA(-1/0,-1/0,-1/0),new QA(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),e)for(let I=0,i=e.length;I<i;I++){const C=e[I];Gi.setFromBufferAttribute(C),this.morphTargetsRelative?(kI.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(kI),kI.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(kI)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new IB);const A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new QA,1/0);return}if(A){const I=this.boundingSphere.center;if(Gi.setFromBufferAttribute(A),e)for(let C=0,Q=e.length;C<Q;C++){const s=e[C];mE.setFromBufferAttribute(s),this.morphTargetsRelative?(kI.addVectors(Gi.min,mE.min),Gi.expandByPoint(kI),kI.addVectors(Gi.max,mE.max),Gi.expandByPoint(kI)):(Gi.expandByPoint(mE.min),Gi.expandByPoint(mE.max))}Gi.getCenter(I);let i=0;for(let C=0,Q=A.count;C<Q;C++)kI.fromBufferAttribute(A,C),i=Math.max(i,I.distanceToSquared(kI));if(e)for(let C=0,Q=e.length;C<Q;C++){const s=e[C],c=this.morphTargetsRelative;for(let d=0,p=s.count;d<p;d++)kI.fromBufferAttribute(s,d),c&&(eo.fromBufferAttribute(A,d),kI.add(eo)),i=Math.max(i,I.distanceToSquared(kI))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,e=this.attributes;if(A===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const I=A.array,i=e.position.array,C=e.normal.array,Q=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pg(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,d=[],p=[];for(let mA=0;mA<s;mA++)d[mA]=new QA,p[mA]=new QA;const y=new QA,w=new QA,R=new QA,k=new yt,G=new yt,U=new yt,v=new QA,W=new QA;function K(mA,Ct,ct){y.fromArray(i,mA*3),w.fromArray(i,Ct*3),R.fromArray(i,ct*3),k.fromArray(Q,mA*2),G.fromArray(Q,Ct*2),U.fromArray(Q,ct*2),w.sub(y),R.sub(y),G.sub(k),U.sub(k);const OA=1/(G.x*U.y-U.x*G.y);isFinite(OA)&&(v.copy(w).multiplyScalar(U.y).addScaledVector(R,-G.y).multiplyScalar(OA),W.copy(R).multiplyScalar(G.x).addScaledVector(w,-U.x).multiplyScalar(OA),d[mA].add(v),d[Ct].add(v),d[ct].add(v),p[mA].add(W),p[Ct].add(W),p[ct].add(W))}let q=this.groups;q.length===0&&(q=[{start:0,count:I.length}]);for(let mA=0,Ct=q.length;mA<Ct;++mA){const ct=q[mA],OA=ct.start,vA=ct.count;for(let st=OA,mt=OA+vA;st<mt;st+=3)K(I[st+0],I[st+1],I[st+2])}const IA=new QA,hA=new QA,MA=new QA,O=new QA;function nA(mA){MA.fromArray(C,mA*3),O.copy(MA);const Ct=d[mA];IA.copy(Ct),IA.sub(MA.multiplyScalar(MA.dot(Ct))).normalize(),hA.crossVectors(O,Ct);const OA=hA.dot(p[mA])<0?-1:1;c[mA*4]=IA.x,c[mA*4+1]=IA.y,c[mA*4+2]=IA.z,c[mA*4+3]=OA}for(let mA=0,Ct=q.length;mA<Ct;++mA){const ct=q[mA],OA=ct.start,vA=ct.count;for(let st=OA,mt=OA+vA;st<mt;st+=3)nA(I[st+0]),nA(I[st+1]),nA(I[st+2])}}computeVertexNormals(){const A=this.index,e=this.getAttribute("position");if(e!==void 0){let I=this.getAttribute("normal");if(I===void 0)I=new Pg(new Float32Array(e.count*3),3),this.setAttribute("normal",I);else for(let w=0,R=I.count;w<R;w++)I.setXYZ(w,0,0,0);const i=new QA,C=new QA,Q=new QA,s=new QA,c=new QA,d=new QA,p=new QA,y=new QA;if(A)for(let w=0,R=A.count;w<R;w+=3){const k=A.getX(w+0),G=A.getX(w+1),U=A.getX(w+2);i.fromBufferAttribute(e,k),C.fromBufferAttribute(e,G),Q.fromBufferAttribute(e,U),p.subVectors(Q,C),y.subVectors(i,C),p.cross(y),s.fromBufferAttribute(I,k),c.fromBufferAttribute(I,G),d.fromBufferAttribute(I,U),s.add(p),c.add(p),d.add(p),I.setXYZ(k,s.x,s.y,s.z),I.setXYZ(G,c.x,c.y,c.z),I.setXYZ(U,d.x,d.y,d.z)}else for(let w=0,R=e.count;w<R;w+=3)i.fromBufferAttribute(e,w+0),C.fromBufferAttribute(e,w+1),Q.fromBufferAttribute(e,w+2),p.subVectors(Q,C),y.subVectors(i,C),p.cross(y),I.setXYZ(w+0,p.x,p.y,p.z),I.setXYZ(w+1,p.x,p.y,p.z),I.setXYZ(w+2,p.x,p.y,p.z);this.normalizeNormals(),I.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let e=0,I=A.count;e<I;e++)kI.fromBufferAttribute(A,e),kI.normalize(),A.setXYZ(e,kI.x,kI.y,kI.z)}toNonIndexed(){function A(s,c){const d=s.array,p=s.itemSize,y=s.normalized,w=new d.constructor(c.length*p);let R=0,k=0;for(let G=0,U=c.length;G<U;G++){s.isInterleavedBufferAttribute?R=c[G]*s.data.stride+s.offset:R=c[G]*p;for(let v=0;v<p;v++)w[k++]=d[R++]}return new Pg(w,p,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qg,I=this.index.array,i=this.attributes;for(const s in i){const c=i[s],d=A(c,I);e.setAttribute(s,d)}const C=this.morphAttributes;for(const s in C){const c=[],d=C[s];for(let p=0,y=d.length;p<y;p++){const w=d[p],R=A(w,I);c.push(R)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let s=0,c=Q.length;s<c;s++){const d=Q[s];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(A[d]=c[d]);return A}A.data={attributes:{}};const e=this.index;e!==null&&(A.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const I=this.attributes;for(const c in I){const d=I[c];A.data.attributes[c]=d.toJSON(A.data)}const i={};let C=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],p=[];for(let y=0,w=d.length;y<w;y++){const R=d[y];p.push(R.toJSON(A.data))}p.length>0&&(i[c]=p,C=!0)}C&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const s=this.boundingSphere;return s!==null&&(A.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=A.name;const I=A.index;I!==null&&this.setIndex(I.clone(e));const i=A.attributes;for(const d in i){const p=i[d];this.setAttribute(d,p.clone(e))}const C=A.morphAttributes;for(const d in C){const p=[],y=C[d];for(let w=0,R=y.length;w<R;w++)p.push(y[w].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let d=0,p=Q.length;d<p;d++){const y=Q[d];this.addGroup(y.start,y.count,y.materialIndex)}const s=A.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=A.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new Ve,RB=new Ki,vQ=new IB,Kh=new QA,RE=new QA,SE=new QA,GE=new QA,Dr=new QA,HQ=new QA,TQ=new yt,qQ=new yt,_Q=new yt,fr=new QA,WQ=new QA;class WI extends St{constructor(A=new Qg,e=new pC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,I=Object.keys(e);if(I.length>0){const i=e[I[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=i.length;C<Q;C++){const s=i[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=C}}}}getVertexPosition(A,e){const I=this.geometry,i=I.attributes.position,C=I.morphAttributes.position,Q=I.morphTargetsRelative;e.fromBufferAttribute(i,A);const s=this.morphTargetInfluences;if(C&&s){HQ.set(0,0,0);for(let c=0,d=C.length;c<d;c++){const p=s[c],y=C[c];p!==0&&(Dr.fromBufferAttribute(y,A),Q?HQ.addScaledVector(Dr,p):HQ.addScaledVector(Dr.sub(e),p))}e.add(HQ)}return this.isSkinnedMesh&&this.boneTransform(A,e),e}raycast(A,e){const I=this.geometry,i=this.material,C=this.matrixWorld;if(i===void 0||(I.boundingSphere===null&&I.computeBoundingSphere(),vQ.copy(I.boundingSphere),vQ.applyMatrix4(C),RB.copy(A.ray).recast(A.near),vQ.containsPoint(RB.origin)===!1&&(RB.intersectSphere(vQ,Kh)===null||RB.origin.distanceToSquared(Kh)>(A.far-A.near)**2))||(Jh.copy(C).invert(),RB.copy(A.ray).applyMatrix4(Jh),I.boundingBox!==null&&RB.intersectsBox(I.boundingBox)===!1))return;let Q;const s=I.index,c=I.attributes.position,d=I.attributes.uv,p=I.attributes.uv2,y=I.groups,w=I.drawRange;if(s!==null)if(Array.isArray(i))for(let R=0,k=y.length;R<k;R++){const G=y[R],U=i[G.materialIndex],v=Math.max(G.start,w.start),W=Math.min(s.count,Math.min(G.start+G.count,w.start+w.count));for(let K=v,q=W;K<q;K+=3){const IA=s.getX(K),hA=s.getX(K+1),MA=s.getX(K+2);Q=PQ(this,U,A,RB,d,p,IA,hA,MA),Q&&(Q.faceIndex=Math.floor(K/3),Q.face.materialIndex=G.materialIndex,e.push(Q))}}else{const R=Math.max(0,w.start),k=Math.min(s.count,w.start+w.count);for(let G=R,U=k;G<U;G+=3){const v=s.getX(G),W=s.getX(G+1),K=s.getX(G+2);Q=PQ(this,i,A,RB,d,p,v,W,K),Q&&(Q.faceIndex=Math.floor(G/3),e.push(Q))}}else if(c!==void 0)if(Array.isArray(i))for(let R=0,k=y.length;R<k;R++){const G=y[R],U=i[G.materialIndex],v=Math.max(G.start,w.start),W=Math.min(c.count,Math.min(G.start+G.count,w.start+w.count));for(let K=v,q=W;K<q;K+=3){const IA=K,hA=K+1,MA=K+2;Q=PQ(this,U,A,RB,d,p,IA,hA,MA),Q&&(Q.faceIndex=Math.floor(K/3),Q.face.materialIndex=G.materialIndex,e.push(Q))}}else{const R=Math.max(0,w.start),k=Math.min(c.count,w.start+w.count);for(let G=R,U=k;G<U;G+=3){const v=G,W=G+1,K=G+2;Q=PQ(this,i,A,RB,d,p,v,W,K),Q&&(Q.faceIndex=Math.floor(G/3),e.push(Q))}}}}function TD(n,A,e,I,i,C,Q,s){let c;if(A.side===F?c=I.intersectTriangle(Q,C,i,!0,s):c=I.intersectTriangle(i,C,Q,A.side===S,s),c===null)return null;WQ.copy(s),WQ.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(WQ);return d<e.near||d>e.far?null:{distance:d,point:WQ.clone(),object:n}}function PQ(n,A,e,I,i,C,Q,s,c){n.getVertexPosition(Q,RE),n.getVertexPosition(s,SE),n.getVertexPosition(c,GE);const d=TD(n,A,e,I,RE,SE,GE,fr);if(d){i&&(TQ.fromBufferAttribute(i,Q),qQ.fromBufferAttribute(i,s),_Q.fromBufferAttribute(i,c),d.uv=_I.getUV(fr,RE,SE,GE,TQ,qQ,_Q,new yt)),C&&(TQ.fromBufferAttribute(C,Q),qQ.fromBufferAttribute(C,s),_Q.fromBufferAttribute(C,c),d.uv2=_I.getUV(fr,RE,SE,GE,TQ,qQ,_Q,new yt));const p={a:Q,b:s,c,normal:new QA,materialIndex:0};_I.getNormal(RE,SE,GE,p.normal),d.face=p}return d}class wC extends Qg{constructor(A=1,e=1,I=1,i=1,C=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:I,widthSegments:i,heightSegments:C,depthSegments:Q};const s=this;i=Math.floor(i),C=Math.floor(C),Q=Math.floor(Q);const c=[],d=[],p=[],y=[];let w=0,R=0;k("z","y","x",-1,-1,I,e,A,Q,C,0),k("z","y","x",1,-1,I,e,-A,Q,C,1),k("x","z","y",1,1,A,I,e,i,Q,2),k("x","z","y",1,-1,A,I,-e,i,Q,3),k("x","y","z",1,-1,A,e,I,i,C,4),k("x","y","z",-1,-1,A,e,-I,i,C,5),this.setIndex(c),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(y,2));function k(G,U,v,W,K,q,IA,hA,MA,O,nA){const mA=q/MA,Ct=IA/O,ct=q/2,OA=IA/2,vA=hA/2,st=MA+1,mt=O+1;let qt=0,Dt=0;const _t=new QA;for(let Lt=0;Lt<mt;Lt++){const Re=Lt*Ct-OA;for(let XA=0;XA<st;XA++){const vt=XA*mA-ct;_t[G]=vt*W,_t[U]=Re*K,_t[v]=vA,d.push(_t.x,_t.y,_t.z),_t[G]=0,_t[U]=0,_t[v]=hA>0?1:-1,p.push(_t.x,_t.y,_t.z),y.push(XA/MA),y.push(1-Lt/O),qt+=1}}for(let Lt=0;Lt<O;Lt++)for(let Re=0;Re<MA;Re++){const XA=w+Re+st*Lt,vt=w+Re+st*(Lt+1),Ie=w+(Re+1)+st*(Lt+1),GA=w+(Re+1)+st*Lt;c.push(XA,vt,GA),c.push(vt,Ie,GA),Dt+=6}s.addGroup(R,Dt,nA),R+=Dt,w+=qt}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new wC(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function go(n){const A={};for(const e in n){A[e]={};for(const I in n[e]){const i=n[e][I];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?A[e][I]=i.clone():Array.isArray(i)?A[e][I]=i.slice():A[e][I]=i}}return A}function ii(n){const A={};for(let e=0;e<n.length;e++){const I=go(n[e]);for(const i in I)A[i]=I[i]}return A}function qD(n){const A=[];for(let e=0;e<n.length;e++)A.push(n[e].clone());return A}function Yh(n){return n.getRenderTarget()===null&&n.outputEncoding===re?vg:ai}const vh={clone:go,merge:ii};var _D=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class SB extends UI{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_D,this.fragmentShader=WD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=go(A.uniforms),this.uniformsGroups=qD(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const Q=this.uniforms[i].value;Q&&Q.isTexture?e.uniforms[i]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?e.uniforms[i]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?e.uniforms[i]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?e.uniforms[i]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?e.uniforms[i]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?e.uniforms[i]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?e.uniforms[i]={type:"m4",value:Q.toArray()}:e.uniforms[i]={value:Q}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const I={};for(const i in this.extensions)this.extensions[i]===!0&&(I[i]=!0);return Object.keys(I).length>0&&(e.extensions=I),e}}class OQ extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PI extends OQ{constructor(A=50,e=1,I=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=I,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=qB*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(TB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return qB*2*Math.atan(Math.tan(TB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,I,i,C,Q){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=I,this.view.offsetY=i,this.view.width=C,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(TB*.5*this.fov)/this.zoom,I=2*e,i=this.aspect*I,C=-.5*i;const Q=this.view;if(this.view!==null&&this.view.enabled){const c=Q.fullWidth,d=Q.fullHeight;C+=Q.offsetX*i/c,e-=Q.offsetY*I/d,i*=Q.width/c,I*=Q.height/d}const s=this.filmOffset;s!==0&&(C+=A*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+i,e,e-I,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Io=-90,io=1;class Hh extends St{constructor(A,e,I){super(),this.type="CubeCamera",this.renderTarget=I;const i=new PI(Io,io,A,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const C=new PI(Io,io,A,e);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(-1,0,0),this.add(C);const Q=new PI(Io,io,A,e);Q.layers=this.layers,Q.up.set(0,0,-1),Q.lookAt(0,1,0),this.add(Q);const s=new PI(Io,io,A,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new PI(Io,io,A,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const d=new PI(Io,io,A,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(A,e){this.parent===null&&this.updateMatrixWorld();const I=this.renderTarget,[i,C,Q,s,c,d]=this.children,p=A.getRenderTarget(),y=A.toneMapping,w=A.xr.enabled;A.toneMapping=rA,A.xr.enabled=!1;const R=I.texture.generateMipmaps;I.texture.generateMipmaps=!1,A.setRenderTarget(I,0),A.render(e,i),A.setRenderTarget(I,1),A.render(e,C),A.setRenderTarget(I,2),A.render(e,Q),A.setRenderTarget(I,3),A.render(e,s),A.setRenderTarget(I,4),A.render(e,c),I.texture.generateMipmaps=R,A.setRenderTarget(I,5),A.render(e,d),A.setRenderTarget(p),A.toneMapping=y,A.xr.enabled=w,I.texture.needsPMREMUpdate=!0}}class FE extends AI{constructor(A,e,I,i,C,Q,s,c,d,p){A=A!==void 0?A:[],e=e!==void 0?e:Zt,super(A,e,I,i,C,Q,s,c,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Th extends mi{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const I={width:A,height:A,depth:1},i=[I,I,I,I,I,I];this.texture=new FE(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ge}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const I={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wC(5,5,5),C=new SB({name:"CubemapFromEquirect",uniforms:go(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,side:F,blending:T});C.uniforms.tEquirect.value=e;const Q=new WI(i,C),s=e.minFilter;return e.minFilter===Be&&(e.minFilter=ge),new Hh(1,10,this).update(A,Q),e.minFilter=s,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,e,I,i){const C=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(e,I,i);A.setRenderTarget(C)}}const pr=new QA,PD=new QA,OD=new mg;class yC{constructor(A=new QA(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,I,i){return this.normal.set(A,e,I),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,I){const i=pr.subVectors(I,e).cross(PD.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e){const I=A.delta(pr),i=this.normal.dot(I);if(i===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/i;return C<0||C>1?null:e.copy(A.start).addScaledVector(I,C)}intersectsLine(A){const e=this.distanceToPoint(A.start),I=this.distanceToPoint(A.end);return e<0&&I>0||I<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const I=e||OD.getNormalMatrix(A),i=this.coplanarPoint(pr).applyMatrix4(A),C=this.normal.applyMatrix3(I).normalize();return this.constant=-i.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bo=new IB,VQ=new QA;class ZQ{constructor(A=new yC,e=new yC,I=new yC,i=new yC,C=new yC,Q=new yC){this.planes=[A,e,I,i,C,Q]}set(A,e,I,i,C,Q){const s=this.planes;return s[0].copy(A),s[1].copy(e),s[2].copy(I),s[3].copy(i),s[4].copy(C),s[5].copy(Q),this}copy(A){const e=this.planes;for(let I=0;I<6;I++)e[I].copy(A.planes[I]);return this}setFromProjectionMatrix(A){const e=this.planes,I=A.elements,i=I[0],C=I[1],Q=I[2],s=I[3],c=I[4],d=I[5],p=I[6],y=I[7],w=I[8],R=I[9],k=I[10],G=I[11],U=I[12],v=I[13],W=I[14],K=I[15];return e[0].setComponents(s-i,y-c,G-w,K-U).normalize(),e[1].setComponents(s+i,y+c,G+w,K+U).normalize(),e[2].setComponents(s+C,y+d,G+R,K+v).normalize(),e[3].setComponents(s-C,y-d,G-R,K-v).normalize(),e[4].setComponents(s-Q,y-p,G-k,K-W).normalize(),e[5].setComponents(s+Q,y+p,G+k,K+W).normalize(),this}intersectsObject(A){const e=A.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Bo.copy(e.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(Bo)}intersectsSprite(A){return Bo.center.set(0,0,0),Bo.radius=.7071067811865476,Bo.applyMatrix4(A.matrixWorld),this.intersectsSphere(Bo)}intersectsSphere(A){const e=this.planes,I=A.center,i=-A.radius;for(let C=0;C<6;C++)if(e[C].distanceToPoint(I)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let I=0;I<6;I++){const i=e[I];if(VQ.x=i.normal.x>0?A.max.x:A.min.x,VQ.y=i.normal.y>0?A.max.y:A.min.y,VQ.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(VQ)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let I=0;I<6;I++)if(e[I].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let n=null,A=!1,e=null,I=null;function i(C,Q){e(C,Q),I=n.requestAnimationFrame(i)}return{start:function(){A!==!0&&e!==null&&(I=n.requestAnimationFrame(i),A=!0)},stop:function(){n.cancelAnimationFrame(I),A=!1},setAnimationLoop:function(C){e=C},setContext:function(C){n=C}}}function VD(n,A){const e=A.isWebGL2,I=new WeakMap;function i(d,p){const y=d.array,w=d.usage,R=n.createBuffer();n.bindBuffer(p,R),n.bufferData(p,y,w),d.onUploadCallback();let k;if(y instanceof Float32Array)k=n.FLOAT;else if(y instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)k=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else k=n.UNSIGNED_SHORT;else if(y instanceof Int16Array)k=n.SHORT;else if(y instanceof Uint32Array)k=n.UNSIGNED_INT;else if(y instanceof Int32Array)k=n.INT;else if(y instanceof Int8Array)k=n.BYTE;else if(y instanceof Uint8Array)k=n.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)k=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:R,type:k,bytesPerElement:y.BYTES_PER_ELEMENT,version:d.version}}function C(d,p,y){const w=p.array,R=p.updateRange;n.bindBuffer(y,d),R.count===-1?n.bufferSubData(y,0,w):(e?n.bufferSubData(y,R.offset*w.BYTES_PER_ELEMENT,w,R.offset,R.count):n.bufferSubData(y,R.offset*w.BYTES_PER_ELEMENT,w.subarray(R.offset,R.offset+R.count)),R.count=-1),p.onUploadCallback()}function Q(d){return d.isInterleavedBufferAttribute&&(d=d.data),I.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=I.get(d);p&&(n.deleteBuffer(p.buffer),I.delete(d))}function c(d,p){if(d.isGLBufferAttribute){const w=I.get(d);(!w||w.version<d.version)&&I.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const y=I.get(d);y===void 0?I.set(d,i(d,p)):y.version<d.version&&(C(y.buffer,d,p),y.version=d.version)}return{get:Q,remove:s,update:c}}class Co extends Qg{constructor(A=1,e=1,I=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:I,heightSegments:i};const C=A/2,Q=e/2,s=Math.floor(I),c=Math.floor(i),d=s+1,p=c+1,y=A/s,w=e/c,R=[],k=[],G=[],U=[];for(let v=0;v<p;v++){const W=v*w-Q;for(let K=0;K<d;K++){const q=K*y-C;k.push(q,-W,0),G.push(0,0,1),U.push(K/s),U.push(1-v/c)}}for(let v=0;v<c;v++)for(let W=0;W<s;W++){const K=W+d*v,q=W+d*(v+1),IA=W+1+d*(v+1),hA=W+1+d*v;R.push(K,q,hA),R.push(q,IA,hA)}this.setIndex(R),this.setAttribute("position",new Me(k,3)),this.setAttribute("normal",new Me(G,3)),this.setAttribute("uv",new Me(U,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Co(A.width,A.height,A.widthSegments,A.heightSegments)}}var ZD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,XD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zD=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$D=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf="vec3 transformed = vec3( position );",ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,If=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Yf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Pf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ep=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vp=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng={alphamap_fragment:ZD,alphamap_pars_fragment:XD,alphatest_fragment:zD,alphatest_pars_fragment:jD,aomap_fragment:$D,aomap_pars_fragment:Af,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:gf,iridescence_fragment:If,bumpmap_pars_fragment:Bf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:of,clipping_planes_vertex:Ef,color_fragment:Qf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:hf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:lf,displacementmap_pars_vertex:df,displacementmap_vertex:uf,emissivemap_fragment:Df,emissivemap_pars_fragment:ff,encodings_fragment:pf,encodings_pars_fragment:wf,envmap_fragment:yf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:mf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Yf,envmap_vertex:Sf,fog_vertex:Gf,fog_pars_vertex:Ff,fog_fragment:Nf,fog_pars_fragment:Uf,gradientmap_pars_fragment:kf,lightmap_fragment:Lf,lightmap_pars_fragment:xf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Kf,lights_toon_fragment:vf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Tf,lights_phong_pars_fragment:qf,lights_physical_fragment:_f,lights_physical_pars_fragment:Wf,lights_fragment_begin:Pf,lights_fragment_maps:Of,lights_fragment_end:Vf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:jf,map_fragment:$f,map_pars_fragment:Ap,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:gp,metalnessmap_pars_fragment:Ip,morphcolor_vertex:ip,morphnormal_vertex:Bp,morphtarget_pars_vertex:Cp,morphtarget_vertex:np,normal_fragment_begin:op,normal_fragment_maps:Ep,normal_pars_fragment:Qp,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:lp,iridescence_pars_fragment:dp,output_fragment:up,packing:Dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:wp,dithering_pars_fragment:yp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Fp,skinbase_vertex:Np,skinning_pars_vertex:Up,skinning_vertex:kp,skinnormal_vertex:Lp,specularmap_fragment:xp,specularmap_pars_fragment:bp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Kp,transmission_fragment:Yp,transmission_pars_fragment:vp,uv_pars_fragment:Hp,uv_pars_vertex:Tp,uv_vertex:qp,uv2_pars_fragment:_p,uv2_pars_vertex:Wp,uv2_vertex:Pp,worldpos_vertex:Op,background_vert:`varying vec2 vUv;
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
	#include <encodings_fragment>
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
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
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
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
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
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
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
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
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
void main() {
	#include <color_vertex>
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
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},Ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mg},uv2Transform:{value:new mg},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mg}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mg}}},oB={basic:{uniforms:ii([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ng.meshbasic_vert,fragmentShader:ng.meshbasic_frag},lambert:{uniforms:ii([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ng.meshlambert_vert,fragmentShader:ng.meshlambert_frag},phong:{uniforms:ii([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ng.meshphong_vert,fragmentShader:ng.meshphong_frag},standard:{uniforms:ii([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ng.meshphysical_vert,fragmentShader:ng.meshphysical_frag},toon:{uniforms:ii([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ng.meshtoon_vert,fragmentShader:ng.meshtoon_frag},matcap:{uniforms:ii([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ng.meshmatcap_vert,fragmentShader:ng.meshmatcap_frag},points:{uniforms:ii([Ae.points,Ae.fog]),vertexShader:ng.points_vert,fragmentShader:ng.points_frag},dashed:{uniforms:ii([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ng.linedashed_vert,fragmentShader:ng.linedashed_frag},depth:{uniforms:ii([Ae.common,Ae.displacementmap]),vertexShader:ng.depth_vert,fragmentShader:ng.depth_frag},normal:{uniforms:ii([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ng.meshnormal_vert,fragmentShader:ng.meshnormal_frag},sprite:{uniforms:ii([Ae.sprite,Ae.fog]),vertexShader:ng.sprite_vert,fragmentShader:ng.sprite_frag},background:{uniforms:{uvTransform:{value:new mg},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ng.background_vert,fragmentShader:ng.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ng.backgroundCube_vert,fragmentShader:ng.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ng.cube_vert,fragmentShader:ng.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ng.equirect_vert,fragmentShader:ng.equirect_frag},distanceRGBA:{uniforms:ii([Ae.common,Ae.displacementmap,{referencePosition:{value:new QA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ng.distanceRGBA_vert,fragmentShader:ng.distanceRGBA_frag},shadow:{uniforms:ii([Ae.lights,Ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ng.shadow_vert,fragmentShader:ng.shadow_frag}};oB.physical={uniforms:ii([oB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ng.meshphysical_vert,fragmentShader:ng.meshphysical_frag};const XQ={r:0,b:0,g:0};function Vp(n,A,e,I,i,C,Q){const s=new Qe(0);let c=C===!0?0:1,d,p,y=null,w=0,R=null;function k(U,v){let W=!1,K=v.isScene===!0?v.background:null;K&&K.isTexture&&(K=(v.backgroundBlurriness>0?e:A).get(K));const q=n.xr,IA=q.getSession&&q.getSession();IA&&IA.environmentBlendMode==="additive"&&(K=null),K===null?G(s,c):K&&K.isColor&&(G(K,1),W=!0),(n.autoClear||W)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),K&&(K.isCubeTexture||K.mapping===EA)?(p===void 0&&(p=new WI(new wC(1,1,1),new SB({name:"BackgroundCubeMaterial",uniforms:go(oB.backgroundCube.uniforms),vertexShader:oB.backgroundCube.vertexShader,fragmentShader:oB.backgroundCube.fragmentShader,side:F,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(hA,MA,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=K,p.material.uniforms.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=K.encoding!==re,(y!==K||w!==K.version||R!==n.toneMapping)&&(p.material.needsUpdate=!0,y=K,w=K.version,R=n.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):K&&K.isTexture&&(d===void 0&&(d=new WI(new Co(2,2),new SB({name:"BackgroundMaterial",uniforms:go(oB.background.uniforms),vertexShader:oB.background.vertexShader,fragmentShader:oB.background.fragmentShader,side:S,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=K,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=K.encoding!==re,K.matrixAutoUpdate===!0&&K.updateMatrix(),d.material.uniforms.uvTransform.value.copy(K.matrix),(y!==K||w!==K.version||R!==n.toneMapping)&&(d.material.needsUpdate=!0,y=K,w=K.version,R=n.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function G(U,v){U.getRGB(XQ,Yh(n)),I.buffers.color.setClear(XQ.r,XQ.g,XQ.b,v,Q)}return{getClearColor:function(){return s},setClearColor:function(U,v=1){s.set(U),c=v,G(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(U){c=U,G(s,c)},render:k}}function Zp(n,A,e,I){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=I.isWebGL2?null:A.get("OES_vertex_array_object"),Q=I.isWebGL2||C!==null,s={},c=U(null);let d=c,p=!1;function y(vA,st,mt,qt,Dt){let _t=!1;if(Q){const Lt=G(qt,mt,st);d!==Lt&&(d=Lt,R(d.object)),_t=v(vA,qt,mt,Dt),_t&&W(vA,qt,mt,Dt)}else{const Lt=st.wireframe===!0;(d.geometry!==qt.id||d.program!==mt.id||d.wireframe!==Lt)&&(d.geometry=qt.id,d.program=mt.id,d.wireframe=Lt,_t=!0)}Dt!==null&&e.update(Dt,n.ELEMENT_ARRAY_BUFFER),(_t||p)&&(p=!1,O(vA,st,mt,qt),Dt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Dt).buffer))}function w(){return I.isWebGL2?n.createVertexArray():C.createVertexArrayOES()}function R(vA){return I.isWebGL2?n.bindVertexArray(vA):C.bindVertexArrayOES(vA)}function k(vA){return I.isWebGL2?n.deleteVertexArray(vA):C.deleteVertexArrayOES(vA)}function G(vA,st,mt){const qt=mt.wireframe===!0;let Dt=s[vA.id];Dt===void 0&&(Dt={},s[vA.id]=Dt);let _t=Dt[st.id];_t===void 0&&(_t={},Dt[st.id]=_t);let Lt=_t[qt];return Lt===void 0&&(Lt=U(w()),_t[qt]=Lt),Lt}function U(vA){const st=[],mt=[],qt=[];for(let Dt=0;Dt<i;Dt++)st[Dt]=0,mt[Dt]=0,qt[Dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:mt,attributeDivisors:qt,object:vA,attributes:{},index:null}}function v(vA,st,mt,qt){const Dt=d.attributes,_t=st.attributes;let Lt=0;const Re=mt.getAttributes();for(const XA in Re)if(Re[XA].location>=0){const Ie=Dt[XA];let GA=_t[XA];if(GA===void 0&&(XA==="instanceMatrix"&&vA.instanceMatrix&&(GA=vA.instanceMatrix),XA==="instanceColor"&&vA.instanceColor&&(GA=vA.instanceColor)),Ie===void 0||Ie.attribute!==GA||GA&&Ie.data!==GA.data)return!0;Lt++}return d.attributesNum!==Lt||d.index!==qt}function W(vA,st,mt,qt){const Dt={},_t=st.attributes;let Lt=0;const Re=mt.getAttributes();for(const XA in Re)if(Re[XA].location>=0){let Ie=_t[XA];Ie===void 0&&(XA==="instanceMatrix"&&vA.instanceMatrix&&(Ie=vA.instanceMatrix),XA==="instanceColor"&&vA.instanceColor&&(Ie=vA.instanceColor));const GA={};GA.attribute=Ie,Ie&&Ie.data&&(GA.data=Ie.data),Dt[XA]=GA,Lt++}d.attributes=Dt,d.attributesNum=Lt,d.index=qt}function K(){const vA=d.newAttributes;for(let st=0,mt=vA.length;st<mt;st++)vA[st]=0}function q(vA){IA(vA,0)}function IA(vA,st){const mt=d.newAttributes,qt=d.enabledAttributes,Dt=d.attributeDivisors;mt[vA]=1,qt[vA]===0&&(n.enableVertexAttribArray(vA),qt[vA]=1),Dt[vA]!==st&&((I.isWebGL2?n:A.get("ANGLE_instanced_arrays"))[I.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](vA,st),Dt[vA]=st)}function hA(){const vA=d.newAttributes,st=d.enabledAttributes;for(let mt=0,qt=st.length;mt<qt;mt++)st[mt]!==vA[mt]&&(n.disableVertexAttribArray(mt),st[mt]=0)}function MA(vA,st,mt,qt,Dt,_t){I.isWebGL2===!0&&(mt===n.INT||mt===n.UNSIGNED_INT)?n.vertexAttribIPointer(vA,st,mt,Dt,_t):n.vertexAttribPointer(vA,st,mt,qt,Dt,_t)}function O(vA,st,mt,qt){if(I.isWebGL2===!1&&(vA.isInstancedMesh||qt.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;K();const Dt=qt.attributes,_t=mt.getAttributes(),Lt=st.defaultAttributeValues;for(const Re in _t){const XA=_t[Re];if(XA.location>=0){let vt=Dt[Re];if(vt===void 0&&(Re==="instanceMatrix"&&vA.instanceMatrix&&(vt=vA.instanceMatrix),Re==="instanceColor"&&vA.instanceColor&&(vt=vA.instanceColor)),vt!==void 0){const Ie=vt.normalized,GA=vt.itemSize,ye=e.get(vt);if(ye===void 0)continue;const oe=ye.buffer,ue=ye.type,Se=ye.bytesPerElement;if(vt.isInterleavedBufferAttribute){const ke=vt.data,Xe=ke.stride,Mt=vt.offset;if(ke.isInstancedInterleavedBuffer){for(let kt=0;kt<XA.locationSize;kt++)IA(XA.location+kt,ke.meshPerAttribute);vA.isInstancedMesh!==!0&&qt._maxInstanceCount===void 0&&(qt._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let kt=0;kt<XA.locationSize;kt++)q(XA.location+kt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let kt=0;kt<XA.locationSize;kt++)MA(XA.location+kt,GA/XA.locationSize,ue,Ie,Xe*Se,(Mt+GA/XA.locationSize*kt)*Se)}else{if(vt.isInstancedBufferAttribute){for(let ke=0;ke<XA.locationSize;ke++)IA(XA.location+ke,vt.meshPerAttribute);vA.isInstancedMesh!==!0&&qt._maxInstanceCount===void 0&&(qt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ke=0;ke<XA.locationSize;ke++)q(XA.location+ke);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ke=0;ke<XA.locationSize;ke++)MA(XA.location+ke,GA/XA.locationSize,ue,Ie,GA*Se,GA/XA.locationSize*ke*Se)}}else if(Lt!==void 0){const Ie=Lt[Re];if(Ie!==void 0)switch(Ie.length){case 2:n.vertexAttrib2fv(XA.location,Ie);break;case 3:n.vertexAttrib3fv(XA.location,Ie);break;case 4:n.vertexAttrib4fv(XA.location,Ie);break;default:n.vertexAttrib1fv(XA.location,Ie)}}}}hA()}function nA(){ct();for(const vA in s){const st=s[vA];for(const mt in st){const qt=st[mt];for(const Dt in qt)k(qt[Dt].object),delete qt[Dt];delete st[mt]}delete s[vA]}}function mA(vA){if(s[vA.id]===void 0)return;const st=s[vA.id];for(const mt in st){const qt=st[mt];for(const Dt in qt)k(qt[Dt].object),delete qt[Dt];delete st[mt]}delete s[vA.id]}function Ct(vA){for(const st in s){const mt=s[st];if(mt[vA.id]===void 0)continue;const qt=mt[vA.id];for(const Dt in qt)k(qt[Dt].object),delete qt[Dt];delete mt[vA.id]}}function ct(){OA(),p=!0,d!==c&&(d=c,R(d.object))}function OA(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:y,reset:ct,resetDefaultState:OA,dispose:nA,releaseStatesOfGeometry:mA,releaseStatesOfProgram:Ct,initAttributes:K,enableAttribute:q,disableUnusedAttributes:hA}}function Xp(n,A,e,I){const i=I.isWebGL2;let C;function Q(d){C=d}function s(d,p){n.drawArrays(C,d,p),e.update(p,C,1)}function c(d,p,y){if(y===0)return;let w,R;if(i)w=n,R="drawArraysInstanced";else if(w=A.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",w===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[R](C,d,p,y),e.update(p,C,y)}this.setMode=Q,this.render=s,this.renderInstances=c}function zp(n,A,e){let I;function i(){if(I!==void 0)return I;if(A.has("EXT_texture_filter_anisotropic")===!0){const MA=A.get("EXT_texture_filter_anisotropic");I=n.getParameter(MA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else I=0;return I}function C(MA){if(MA==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";MA="mediump"}return MA==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const Q=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=C(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const d=Q||A.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),k=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),G=n.getParameter(n.MAX_VERTEX_ATTRIBS),U=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),W=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),K=w>0,q=Q||A.has("OES_texture_float"),IA=K&&q,hA=Q?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:Q,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:C,precision:s,logarithmicDepthBuffer:p,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:k,maxAttributes:G,maxVertexUniforms:U,maxVaryings:v,maxFragmentUniforms:W,vertexTextures:K,floatFragmentTextures:q,floatVertexTextures:IA,maxSamples:hA}}function jp(n){const A=this;let e=null,I=0,i=!1,C=!1;const Q=new yC,s=new mg,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(y,w){const R=y.length!==0||w||I!==0||i;return i=w,I=y.length,R},this.beginShadows=function(){C=!0,p(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(y,w){e=p(y,w,0)},this.setState=function(y,w,R){const k=y.clippingPlanes,G=y.clipIntersection,U=y.clipShadows,v=n.get(y);if(!i||k===null||k.length===0||C&&!U)C?p(null):d();else{const W=C?0:I,K=W*4;let q=v.clippingState||null;c.value=q,q=p(k,w,K,R);for(let IA=0;IA!==K;++IA)q[IA]=e[IA];v.clippingState=q,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=W}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=I>0),A.numPlanes=I,A.numIntersection=0}function p(y,w,R,k){const G=y!==null?y.length:0;let U=null;if(G!==0){if(U=c.value,k!==!0||U===null){const v=R+G*4,W=w.matrixWorldInverse;s.getNormalMatrix(W),(U===null||U.length<v)&&(U=new Float32Array(v));for(let K=0,q=R;K!==G;++K,q+=4)Q.copy(y[K]).applyMatrix4(W,s),Q.normal.toArray(U,q),U[q+3]=Q.constant}c.value=U,c.needsUpdate=!0}return A.numPlanes=G,A.numIntersection=0,U}}function $p(n){let A=new WeakMap;function e(Q,s){return s===PA?Q.mapping=Zt:s===Ag&&(Q.mapping=Fe),Q}function I(Q){if(Q&&Q.isTexture&&Q.isRenderTargetTexture===!1){const s=Q.mapping;if(s===PA||s===Ag)if(A.has(Q)){const c=A.get(Q).texture;return e(c,Q.mapping)}else{const c=Q.image;if(c&&c.height>0){const d=new Th(c.height/2);return d.fromEquirectangularTexture(n,Q),A.set(Q,d),Q.addEventListener("dispose",i),e(d.texture,Q.mapping)}else return null}}return Q}function i(Q){const s=Q.target;s.removeEventListener("dispose",i);const c=A.get(s);c!==void 0&&(A.delete(s),c.dispose())}function C(){A=new WeakMap}return{get:I,dispose:C}}class zQ extends OQ{constructor(A=-1,e=1,I=1,i=-1,C=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=I,this.bottom=i,this.near=C,this.far=Q,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,I,i,C,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=I,this.view.offsetY=i,this.view.width=C,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),I=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let C=I-A,Q=I+A,s=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=d*this.view.offsetX,Q=C+d*this.view.width,s-=p*this.view.offsetY,c=s-p*this.view.height}this.projectionMatrix.makeOrthographic(C,Q,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const no=4,_h=[.125,.215,.35,.446,.526,.582],gn=20,wr=new zQ,Wh=new Qe;let yr=null;const In=(1+Math.sqrt(5))/2,oo=1/In,Ph=[new QA(1,1,1),new QA(-1,1,1),new QA(1,1,-1),new QA(-1,1,-1),new QA(0,In,oo),new QA(0,In,-oo),new QA(oo,0,In),new QA(-oo,0,In),new QA(In,oo,0),new QA(-In,oo,0)];class Mr{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,I=.1,i=100){yr=this._renderer.getRenderTarget(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,I,i,C),e>0&&this._blur(C,0,0,e),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(yr),A.scissorTest=!1,jQ(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===Zt||A.mapping===Fe?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),yr=this._renderer.getRenderTarget();const I=e||this._allocateTargets();return this._textureToCubeUV(A,I),this._applyPMREM(I),this._cleanup(I),I}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,I={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:_e,format:Vg,encoding:de,depthBuffer:!1},i=Oh(A,e,I);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(A,e,I);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(C)),this._blurMaterial=t0(C,A,e)}return i}_compileMaterial(A){const e=new WI(this._lodPlanes[0],A);this._renderer.compile(e,wr)}_sceneToCubeUV(A,e,I,i){const s=new PI(90,1,e,I),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,y=p.autoClear,w=p.toneMapping;p.getClearColor(Wh),p.toneMapping=rA,p.autoClear=!1;const R=new pC({name:"PMREM.Background",side:F,depthWrite:!1,depthTest:!1}),k=new WI(new wC,R);let G=!1;const U=A.background;U?U.isColor&&(R.color.copy(U),A.background=null,G=!0):(R.color.copy(Wh),G=!0);for(let v=0;v<6;v++){const W=v%3;W===0?(s.up.set(0,c[v],0),s.lookAt(d[v],0,0)):W===1?(s.up.set(0,0,c[v]),s.lookAt(0,d[v],0)):(s.up.set(0,c[v],0),s.lookAt(0,0,d[v]));const K=this._cubeSize;jQ(i,W*K,v>2?K:0,K,K),p.setRenderTarget(i),G&&p.render(k,s),p.render(A,s)}k.geometry.dispose(),k.material.dispose(),p.toneMapping=w,p.autoClear=y,A.background=U}_textureToCubeUV(A,e){const I=this._renderer,i=A.mapping===Zt||A.mapping===Fe;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const C=i?this._cubemapMaterial:this._equirectMaterial,Q=new WI(this._lodPlanes[0],C),s=C.uniforms;s.envMap.value=A;const c=this._cubeSize;jQ(e,0,0,3*c,2*c),I.setRenderTarget(e),I.render(Q,wr)}_applyPMREM(A){const e=this._renderer,I=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const C=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),Q=Ph[(i-1)%Ph.length];this._blur(A,i-1,i,C,Q)}e.autoClear=I}_blur(A,e,I,i,C){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,e,I,i,"latitudinal",C),this._halfBlur(Q,A,I,I,i,"longitudinal",C)}_halfBlur(A,e,I,i,C,Q,s){const c=this._renderer,d=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,y=new WI(this._lodPlanes[i],d),w=d.uniforms,R=this._sizeLods[I]-1,k=isFinite(C)?Math.PI/(2*R):2*Math.PI/(2*gn-1),G=C/k,U=isFinite(C)?1+Math.floor(p*G):gn;U>gn&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${U} samples when the maximum is set to ${gn}`);const v=[];let W=0;for(let MA=0;MA<gn;++MA){const O=MA/G,nA=Math.exp(-O*O/2);v.push(nA),MA===0?W+=nA:MA<U&&(W+=2*nA)}for(let MA=0;MA<v.length;MA++)v[MA]=v[MA]/W;w.envMap.value=A.texture,w.samples.value=U,w.weights.value=v,w.latitudinal.value=Q==="latitudinal",s&&(w.poleAxis.value=s);const{_lodMax:K}=this;w.dTheta.value=k,w.mipInt.value=K-I;const q=this._sizeLods[i],IA=3*q*(i>K-no?i-K+no:0),hA=4*(this._cubeSize-q);jQ(e,IA,hA,3*q,2*q),c.setRenderTarget(e),c.render(y,wr)}}function A0(n){const A=[],e=[],I=[];let i=n;const C=n-no+1+_h.length;for(let Q=0;Q<C;Q++){const s=Math.pow(2,i);e.push(s);let c=1/s;Q>n-no?c=_h[Q-n+no-1]:Q===0&&(c=0),I.push(c);const d=1/(s-2),p=-d,y=1+d,w=[p,p,y,p,y,y,p,p,y,y,p,y],R=6,k=6,G=3,U=2,v=1,W=new Float32Array(G*k*R),K=new Float32Array(U*k*R),q=new Float32Array(v*k*R);for(let hA=0;hA<R;hA++){const MA=hA%3*2/3-1,O=hA>2?0:-1,nA=[MA,O,0,MA+2/3,O,0,MA+2/3,O+1,0,MA,O,0,MA+2/3,O+1,0,MA,O+1,0];W.set(nA,G*k*hA),K.set(w,U*k*hA);const mA=[hA,hA,hA,hA,hA,hA];q.set(mA,v*k*hA)}const IA=new Qg;IA.setAttribute("position",new Pg(W,G)),IA.setAttribute("uv",new Pg(K,U)),IA.setAttribute("faceIndex",new Pg(q,v)),A.push(IA),i>no&&i--}return{lodPlanes:A,sizeLods:e,sigmas:I}}function Oh(n,A,e){const I=new mi(n,A,e);return I.texture.mapping=EA,I.texture.name="PMREM.cubeUv",I.scissorTest=!0,I}function jQ(n,A,e,I,i){n.viewport.set(A,e,I,i),n.scissor.set(A,e,I,i)}function t0(n,A,e){const I=new Float32Array(gn),i=new QA(0,1,0);return new SB({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:I},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mr(),fragmentShader:`

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
		`,blending:T,depthTest:!1,depthWrite:!1})}function Vh(){return new SB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

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
		`,blending:T,depthTest:!1,depthWrite:!1})}function Zh(){return new SB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:T,depthTest:!1,depthWrite:!1})}function mr(){return`

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
	`}function e0(n){let A=new WeakMap,e=null;function I(s){if(s&&s.isTexture){const c=s.mapping,d=c===PA||c===Ag,p=c===Zt||c===Fe;if(d||p)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let y=A.get(s);return e===null&&(e=new Mr(n)),y=d?e.fromEquirectangular(s,y):e.fromCubemap(s,y),A.set(s,y),y.texture}else{if(A.has(s))return A.get(s).texture;{const y=s.image;if(d&&y&&y.height>0||p&&y&&i(y)){e===null&&(e=new Mr(n));const w=d?e.fromEquirectangular(s):e.fromCubemap(s);return A.set(s,w),s.addEventListener("dispose",C),w.texture}else return null}}}return s}function i(s){let c=0;const d=6;for(let p=0;p<d;p++)s[p]!==void 0&&c++;return c===d}function C(s){const c=s.target;c.removeEventListener("dispose",C);const d=A.get(c);d!==void 0&&(A.delete(c),d.dispose())}function Q(){A=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:I,dispose:Q}}function g0(n){const A={};function e(I){if(A[I]!==void 0)return A[I];let i;switch(I){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(I)}return A[I]=i,i}return{has:function(I){return e(I)!==null},init:function(I){I.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(I){const i=e(I);return i===null&&console.warn("THREE.WebGLRenderer: "+I+" extension not supported."),i}}}function I0(n,A,e,I){const i={},C=new WeakMap;function Q(y){const w=y.target;w.index!==null&&A.remove(w.index);for(const k in w.attributes)A.remove(w.attributes[k]);w.removeEventListener("dispose",Q),delete i[w.id];const R=C.get(w);R&&(A.remove(R),C.delete(w)),I.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,e.memory.geometries--}function s(y,w){return i[w.id]===!0||(w.addEventListener("dispose",Q),i[w.id]=!0,e.memory.geometries++),w}function c(y){const w=y.attributes;for(const k in w)A.update(w[k],n.ARRAY_BUFFER);const R=y.morphAttributes;for(const k in R){const G=R[k];for(let U=0,v=G.length;U<v;U++)A.update(G[U],n.ARRAY_BUFFER)}}function d(y){const w=[],R=y.index,k=y.attributes.position;let G=0;if(R!==null){const W=R.array;G=R.version;for(let K=0,q=W.length;K<q;K+=3){const IA=W[K+0],hA=W[K+1],MA=W[K+2];w.push(IA,hA,hA,MA,MA,IA)}}else{const W=k.array;G=k.version;for(let K=0,q=W.length/3-1;K<q;K+=3){const IA=K+0,hA=K+1,MA=K+2;w.push(IA,hA,hA,MA,MA,IA)}}const U=new(wg(w)?dr:lr)(w,1);U.version=G;const v=C.get(y);v&&A.remove(v),C.set(y,U)}function p(y){const w=C.get(y);if(w){const R=y.index;R!==null&&w.version<R.version&&d(y)}else d(y);return C.get(y)}return{get:s,update:c,getWireframeAttribute:p}}function i0(n,A,e,I){const i=I.isWebGL2;let C;function Q(w){C=w}let s,c;function d(w){s=w.type,c=w.bytesPerElement}function p(w,R){n.drawElements(C,R,s,w*c),e.update(R,C,1)}function y(w,R,k){if(k===0)return;let G,U;if(i)G=n,U="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),U="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[U](C,R,s,w*c,k),e.update(R,C,k)}this.setMode=Q,this.setIndex=d,this.render=p,this.renderInstances=y}function B0(n){const A={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function I(C,Q,s){switch(e.calls++,Q){case n.TRIANGLES:e.triangles+=s*(C/3);break;case n.LINES:e.lines+=s*(C/2);break;case n.LINE_STRIP:e.lines+=s*(C-1);break;case n.LINE_LOOP:e.lines+=s*C;break;case n.POINTS:e.points+=s*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:A,render:e,programs:null,autoReset:!0,reset:i,update:I}}function C0(n,A){return n[0]-A[0]}function n0(n,A){return Math.abs(A[1])-Math.abs(n[1])}function o0(n,A,e){const I={},i=new Float32Array(8),C=new WeakMap,Q=new Eg,s=[];for(let d=0;d<8;d++)s[d]=[d,0];function c(d,p,y){const w=d.morphTargetInfluences;if(A.isWebGL2===!0){const k=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,G=k!==void 0?k.length:0;let U=C.get(p);if(U===void 0||U.count!==G){let st=function(){OA.dispose(),C.delete(p),p.removeEventListener("dispose",st)};var R=st;U!==void 0&&U.texture.dispose();const K=p.morphAttributes.position!==void 0,q=p.morphAttributes.normal!==void 0,IA=p.morphAttributes.color!==void 0,hA=p.morphAttributes.position||[],MA=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let nA=0;K===!0&&(nA=1),q===!0&&(nA=2),IA===!0&&(nA=3);let mA=p.attributes.position.count*nA,Ct=1;mA>A.maxTextureSize&&(Ct=Math.ceil(mA/A.maxTextureSize),mA=A.maxTextureSize);const ct=new Float32Array(mA*Ct*4*G),OA=new ZI(ct,mA,Ct,G);OA.type=Ot,OA.needsUpdate=!0;const vA=nA*4;for(let mt=0;mt<G;mt++){const qt=hA[mt],Dt=MA[mt],_t=O[mt],Lt=mA*Ct*4*mt;for(let Re=0;Re<qt.count;Re++){const XA=Re*vA;K===!0&&(Q.fromBufferAttribute(qt,Re),ct[Lt+XA+0]=Q.x,ct[Lt+XA+1]=Q.y,ct[Lt+XA+2]=Q.z,ct[Lt+XA+3]=0),q===!0&&(Q.fromBufferAttribute(Dt,Re),ct[Lt+XA+4]=Q.x,ct[Lt+XA+5]=Q.y,ct[Lt+XA+6]=Q.z,ct[Lt+XA+7]=0),IA===!0&&(Q.fromBufferAttribute(_t,Re),ct[Lt+XA+8]=Q.x,ct[Lt+XA+9]=Q.y,ct[Lt+XA+10]=Q.z,ct[Lt+XA+11]=_t.itemSize===4?Q.w:1)}}U={count:G,texture:OA,size:new yt(mA,Ct)},C.set(p,U),p.addEventListener("dispose",st)}let v=0;for(let K=0;K<w.length;K++)v+=w[K];const W=p.morphTargetsRelative?1:1-v;y.getUniforms().setValue(n,"morphTargetBaseInfluence",W),y.getUniforms().setValue(n,"morphTargetInfluences",w),y.getUniforms().setValue(n,"morphTargetsTexture",U.texture,e),y.getUniforms().setValue(n,"morphTargetsTextureSize",U.size)}else{const k=w===void 0?0:w.length;let G=I[p.id];if(G===void 0||G.length!==k){G=[];for(let q=0;q<k;q++)G[q]=[q,0];I[p.id]=G}for(let q=0;q<k;q++){const IA=G[q];IA[0]=q,IA[1]=w[q]}G.sort(n0);for(let q=0;q<8;q++)q<k&&G[q][1]?(s[q][0]=G[q][0],s[q][1]=G[q][1]):(s[q][0]=Number.MAX_SAFE_INTEGER,s[q][1]=0);s.sort(C0);const U=p.morphAttributes.position,v=p.morphAttributes.normal;let W=0;for(let q=0;q<8;q++){const IA=s[q],hA=IA[0],MA=IA[1];hA!==Number.MAX_SAFE_INTEGER&&MA?(U&&p.getAttribute("morphTarget"+q)!==U[hA]&&p.setAttribute("morphTarget"+q,U[hA]),v&&p.getAttribute("morphNormal"+q)!==v[hA]&&p.setAttribute("morphNormal"+q,v[hA]),i[q]=MA,W+=MA):(U&&p.hasAttribute("morphTarget"+q)===!0&&p.deleteAttribute("morphTarget"+q),v&&p.hasAttribute("morphNormal"+q)===!0&&p.deleteAttribute("morphNormal"+q),i[q]=0)}const K=p.morphTargetsRelative?1:1-W;y.getUniforms().setValue(n,"morphTargetBaseInfluence",K),y.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:c}}function E0(n,A,e,I){let i=new WeakMap;function C(c){const d=I.render.frame,p=c.geometry,y=A.get(c,p);return i.get(y)!==d&&(A.update(y),i.set(y,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER)),y}function Q(){i=new WeakMap}function s(c){const d=c.target;d.removeEventListener("dispose",s),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:C,dispose:Q}}const Xh=new AI,zh=new ZI,jh=new Zn,$h=new FE,Ac=[],tc=[],ec=new Float32Array(16),gc=new Float32Array(9),Ic=new Float32Array(4);function Eo(n,A,e){const I=n[0];if(I<=0||I>0)return n;const i=A*e;let C=Ac[i];if(C===void 0&&(C=new Float32Array(i),Ac[i]=C),A!==0){I.toArray(C,0);for(let Q=1,s=0;Q!==A;++Q)s+=e,n[Q].toArray(C,s)}return C}function RI(n,A){if(n.length!==A.length)return!1;for(let e=0,I=n.length;e<I;e++)if(n[e]!==A[e])return!1;return!0}function SI(n,A){for(let e=0,I=A.length;e<I;e++)n[e]=A[e]}function $Q(n,A){let e=tc[A];e===void 0&&(e=new Int32Array(A),tc[A]=e);for(let I=0;I!==A;++I)e[I]=n.allocateTextureUnit();return e}function Q0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1f(this.addr,A),e[0]=A)}function s0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2f(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(RI(e,A))return;n.uniform2fv(this.addr,A),SI(e,A)}}function r0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3f(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else if(A.r!==void 0)(e[0]!==A.r||e[1]!==A.g||e[2]!==A.b)&&(n.uniform3f(this.addr,A.r,A.g,A.b),e[0]=A.r,e[1]=A.g,e[2]=A.b);else{if(RI(e,A))return;n.uniform3fv(this.addr,A),SI(e,A)}}function a0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4f(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(RI(e,A))return;n.uniform4fv(this.addr,A),SI(e,A)}}function h0(n,A){const e=this.cache,I=A.elements;if(I===void 0){if(RI(e,A))return;n.uniformMatrix2fv(this.addr,!1,A),SI(e,A)}else{if(RI(e,I))return;Ic.set(I),n.uniformMatrix2fv(this.addr,!1,Ic),SI(e,I)}}function c0(n,A){const e=this.cache,I=A.elements;if(I===void 0){if(RI(e,A))return;n.uniformMatrix3fv(this.addr,!1,A),SI(e,A)}else{if(RI(e,I))return;gc.set(I),n.uniformMatrix3fv(this.addr,!1,gc),SI(e,I)}}function l0(n,A){const e=this.cache,I=A.elements;if(I===void 0){if(RI(e,A))return;n.uniformMatrix4fv(this.addr,!1,A),SI(e,A)}else{if(RI(e,I))return;ec.set(I),n.uniformMatrix4fv(this.addr,!1,ec),SI(e,I)}}function d0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1i(this.addr,A),e[0]=A)}function u0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2i(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(RI(e,A))return;n.uniform2iv(this.addr,A),SI(e,A)}}function D0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3i(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(RI(e,A))return;n.uniform3iv(this.addr,A),SI(e,A)}}function f0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4i(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(RI(e,A))return;n.uniform4iv(this.addr,A),SI(e,A)}}function p0(n,A){const e=this.cache;e[0]!==A&&(n.uniform1ui(this.addr,A),e[0]=A)}function w0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y)&&(n.uniform2ui(this.addr,A.x,A.y),e[0]=A.x,e[1]=A.y);else{if(RI(e,A))return;n.uniform2uiv(this.addr,A),SI(e,A)}}function y0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z)&&(n.uniform3ui(this.addr,A.x,A.y,A.z),e[0]=A.x,e[1]=A.y,e[2]=A.z);else{if(RI(e,A))return;n.uniform3uiv(this.addr,A),SI(e,A)}}function M0(n,A){const e=this.cache;if(A.x!==void 0)(e[0]!==A.x||e[1]!==A.y||e[2]!==A.z||e[3]!==A.w)&&(n.uniform4ui(this.addr,A.x,A.y,A.z,A.w),e[0]=A.x,e[1]=A.y,e[2]=A.z,e[3]=A.w);else{if(RI(e,A))return;n.uniform4uiv(this.addr,A),SI(e,A)}}function m0(n,A,e){const I=this.cache,i=e.allocateTextureUnit();I[0]!==i&&(n.uniform1i(this.addr,i),I[0]=i),e.setTexture2D(A||Xh,i)}function R0(n,A,e){const I=this.cache,i=e.allocateTextureUnit();I[0]!==i&&(n.uniform1i(this.addr,i),I[0]=i),e.setTexture3D(A||jh,i)}function S0(n,A,e){const I=this.cache,i=e.allocateTextureUnit();I[0]!==i&&(n.uniform1i(this.addr,i),I[0]=i),e.setTextureCube(A||$h,i)}function G0(n,A,e){const I=this.cache,i=e.allocateTextureUnit();I[0]!==i&&(n.uniform1i(this.addr,i),I[0]=i),e.setTexture2DArray(A||zh,i)}function F0(n){switch(n){case 5126:return Q0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return h0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return d0;case 35667:case 35671:return u0;case 35668:case 35672:return D0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return w0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return G0}}function N0(n,A){n.uniform1fv(this.addr,A)}function U0(n,A){const e=Eo(A,this.size,2);n.uniform2fv(this.addr,e)}function k0(n,A){const e=Eo(A,this.size,3);n.uniform3fv(this.addr,e)}function L0(n,A){const e=Eo(A,this.size,4);n.uniform4fv(this.addr,e)}function x0(n,A){const e=Eo(A,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b0(n,A){const e=Eo(A,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function J0(n,A){const e=Eo(A,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function K0(n,A){n.uniform1iv(this.addr,A)}function Y0(n,A){n.uniform2iv(this.addr,A)}function v0(n,A){n.uniform3iv(this.addr,A)}function H0(n,A){n.uniform4iv(this.addr,A)}function T0(n,A){n.uniform1uiv(this.addr,A)}function q0(n,A){n.uniform2uiv(this.addr,A)}function _0(n,A){n.uniform3uiv(this.addr,A)}function W0(n,A){n.uniform4uiv(this.addr,A)}function P0(n,A,e){const I=this.cache,i=A.length,C=$Q(e,i);RI(I,C)||(n.uniform1iv(this.addr,C),SI(I,C));for(let Q=0;Q!==i;++Q)e.setTexture2D(A[Q]||Xh,C[Q])}function O0(n,A,e){const I=this.cache,i=A.length,C=$Q(e,i);RI(I,C)||(n.uniform1iv(this.addr,C),SI(I,C));for(let Q=0;Q!==i;++Q)e.setTexture3D(A[Q]||jh,C[Q])}function V0(n,A,e){const I=this.cache,i=A.length,C=$Q(e,i);RI(I,C)||(n.uniform1iv(this.addr,C),SI(I,C));for(let Q=0;Q!==i;++Q)e.setTextureCube(A[Q]||$h,C[Q])}function Z0(n,A,e){const I=this.cache,i=A.length,C=$Q(e,i);RI(I,C)||(n.uniform1iv(this.addr,C),SI(I,C));for(let Q=0;Q!==i;++Q)e.setTexture2DArray(A[Q]||zh,C[Q])}function X0(n){switch(n){case 5126:return N0;case 35664:return U0;case 35665:return k0;case 35666:return L0;case 35674:return x0;case 35675:return b0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return Y0;case 35668:case 35672:return v0;case 35669:case 35673:return H0;case 5125:return T0;case 36294:return q0;case 36295:return _0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return Z0}}class z0{constructor(A,e,I){this.id=A,this.addr=I,this.cache=[],this.setValue=F0(e.type)}}class j0{constructor(A,e,I){this.id=A,this.addr=I,this.cache=[],this.size=e.size,this.setValue=X0(e.type)}}class $0{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,I){const i=this.seq;for(let C=0,Q=i.length;C!==Q;++C){const s=i[C];s.setValue(A,e[s.id],I)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function ic(n,A){n.seq.push(A),n.map[A.id]=A}function Aw(n,A,e){const I=n.name,i=I.length;for(Rr.lastIndex=0;;){const C=Rr.exec(I),Q=Rr.lastIndex;let s=C[1];const c=C[2]==="]",d=C[3];if(c&&(s=s|0),d===void 0||d==="["&&Q+2===i){ic(e,d===void 0?new z0(s,n,A):new j0(s,n,A));break}else{let y=e.map[s];y===void 0&&(y=new $0(s),ic(e,y)),e=y}}}class As{constructor(A,e){this.seq=[],this.map={};const I=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let i=0;i<I;++i){const C=A.getActiveUniform(e,i),Q=A.getUniformLocation(e,C.name);Aw(C,Q,this)}}setValue(A,e,I,i){const C=this.map[e];C!==void 0&&C.setValue(A,I,i)}setOptional(A,e,I){const i=e[I];i!==void 0&&this.setValue(A,I,i)}static upload(A,e,I,i){for(let C=0,Q=e.length;C!==Q;++C){const s=e[C],c=I[s.id];c.needsUpdate!==!1&&s.setValue(A,c.value,i)}}static seqWithValue(A,e){const I=[];for(let i=0,C=A.length;i!==C;++i){const Q=A[i];Q.id in e&&I.push(Q)}return I}}function Bc(n,A,e){const I=n.createShader(A);return n.shaderSource(I,e),n.compileShader(I),I}let tw=0;function ew(n,A){const e=n.split(`
`),I=[],i=Math.max(A-6,0),C=Math.min(A+6,e.length);for(let Q=i;Q<C;Q++){const s=Q+1;I.push(`${s===A?">":" "} ${s}: ${e[Q]}`)}return I.join(`
`)}function gw(n){switch(n){case de:return["Linear","( value )"];case re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Cc(n,A,e){const I=n.getShaderParameter(A,n.COMPILE_STATUS),i=n.getShaderInfoLog(A).trim();if(I&&i==="")return"";const C=/ERROR: 0:(\d+)/.exec(i);if(C){const Q=parseInt(C[1]);return e.toUpperCase()+`

`+i+`

`+ew(n.getShaderSource(A),Q)}else return i}function Iw(n,A){const e=gw(A);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function iw(n,A){let e;switch(A){case Qt:e="Linear";break;case At:e="Reinhard";break;case Nt:e="OptimizedCineon";break;case ut:e="ACESFilmic";break;case fe:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Bw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(NE).join(`
`)}function Cw(n){const A=[];for(const e in n){const I=n[e];I!==!1&&A.push("#define "+e+" "+I)}return A.join(`
`)}function nw(n,A){const e={},I=n.getProgramParameter(A,n.ACTIVE_ATTRIBUTES);for(let i=0;i<I;i++){const C=n.getActiveAttrib(A,i),Q=C.name;let s=1;C.type===n.FLOAT_MAT2&&(s=2),C.type===n.FLOAT_MAT3&&(s=3),C.type===n.FLOAT_MAT4&&(s=4),e[Q]={type:C.type,location:n.getAttribLocation(A,Q),locationSize:s}}return e}function NE(n){return n!==""}function nc(n,A){const e=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function oc(n,A){return n.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(n){return n.replace(ow,Ew)}function Ew(n,A){const e=ng[A];if(e===void 0)throw new Error("Can not resolve #include <"+A+">");return Sr(e)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(n){return n.replace(Qw,sw)}function sw(n,A,e,I){let i="";for(let C=parseInt(A);C<parseInt(e);C++)i+=I.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return i}function Qc(n){let A="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?A+=`
#define HIGH_PRECISION`:n.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function rw(n){let A="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===D?A="SHADOWMAP_TYPE_PCF":n.shadowMapType===f?A="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===m&&(A="SHADOWMAP_TYPE_VSM"),A}function aw(n){let A="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zt:case Fe:A="ENVMAP_TYPE_CUBE";break;case EA:A="ENVMAP_TYPE_CUBE_UV";break}return A}function hw(n){let A="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fe:A="ENVMAP_MODE_REFRACTION";break}return A}function cw(n){let A="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case De:A="ENVMAP_BLENDING_MULTIPLY";break;case cg:A="ENVMAP_BLENDING_MIX";break;case se:A="ENVMAP_BLENDING_ADD";break}return A}function lw(n){const A=n.envMapCubeUVHeight;if(A===null)return null;const e=Math.log2(A)-2,I=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:I,maxMip:e}}function dw(n,A,e,I){const i=n.getContext(),C=e.defines;let Q=e.vertexShader,s=e.fragmentShader;const c=rw(e),d=aw(e),p=hw(e),y=cw(e),w=lw(e),R=e.isWebGL2?"":Bw(e),k=Cw(C),G=i.createProgram();let U,v,W=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(U=[k].filter(NE).join(`
`),U.length>0&&(U+=`
`),v=[R,k].filter(NE).join(`
`),v.length>0&&(v+=`
`)):(U=[Qc(e),"#define SHADER_NAME "+e.shaderName,k,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(NE).join(`
`),v=[R,Qc(e),"#define SHADER_NAME "+e.shaderName,k,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+y:"",w?"#define CUBEUV_TEXEL_WIDTH "+w.texelWidth:"",w?"#define CUBEUV_TEXEL_HEIGHT "+w.texelHeight:"",w?"#define CUBEUV_MAX_MIP "+w.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rA?"#define TONE_MAPPING":"",e.toneMapping!==rA?ng.tonemapping_pars_fragment:"",e.toneMapping!==rA?iw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ng.encodings_pars_fragment,Iw("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(NE).join(`
`)),Q=Sr(Q),Q=nc(Q,e),Q=oc(Q,e),s=Sr(s),s=nc(s,e),s=oc(s,e),Q=Ec(Q),s=Ec(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(W=`#version 300 es
`,U=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+U,v=["#define varying in",e.glslVersion===BI?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===BI?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const K=W+U+Q,q=W+v+s,IA=Bc(i,i.VERTEX_SHADER,K),hA=Bc(i,i.FRAGMENT_SHADER,q);if(i.attachShader(G,IA),i.attachShader(G,hA),e.index0AttributeName!==void 0?i.bindAttribLocation(G,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(G,0,"position"),i.linkProgram(G),n.debug.checkShaderErrors){const nA=i.getProgramInfoLog(G).trim(),mA=i.getShaderInfoLog(IA).trim(),Ct=i.getShaderInfoLog(hA).trim();let ct=!0,OA=!0;if(i.getProgramParameter(G,i.LINK_STATUS)===!1){ct=!1;const vA=Cc(i,IA,"vertex"),st=Cc(i,hA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(G,i.VALIDATE_STATUS)+`

Program Info Log: `+nA+`
`+vA+`
`+st)}else nA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nA):(mA===""||Ct==="")&&(OA=!1);OA&&(this.diagnostics={runnable:ct,programLog:nA,vertexShader:{log:mA,prefix:U},fragmentShader:{log:Ct,prefix:v}})}i.deleteShader(IA),i.deleteShader(hA);let MA;this.getUniforms=function(){return MA===void 0&&(MA=new As(i,G)),MA};let O;return this.getAttributes=function(){return O===void 0&&(O=nw(i,G)),O},this.destroy=function(){I.releaseStatesOfProgram(this),i.deleteProgram(G),this.program=void 0},this.name=e.shaderName,this.id=tw++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=IA,this.fragmentShader=hA,this}let uw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const e=A.vertexShader,I=A.fragmentShader,i=this._getShaderStage(e),C=this._getShaderStage(I),Q=this._getShaderCacheForMaterial(A);return Q.has(i)===!1&&(Q.add(i),i.usedTimes++),Q.has(C)===!1&&(Q.add(C),C.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const I of e)I.usedTimes--,I.usedTimes===0&&this.shaderCache.delete(I.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let I=e.get(A);return I===void 0&&(I=new Set,e.set(A,I)),I}_getShaderStage(A){const e=this.shaderCache;let I=e.get(A);return I===void 0&&(I=new fw(A),e.set(A,I)),I}}class fw{constructor(A){this.id=uw++,this.code=A,this.usedTimes=0}}function pw(n,A,e,I,i,C,Q){const s=new l,c=new Dw,d=[],p=i.isWebGL2,y=i.logarithmicDepthBuffer,w=i.vertexTextures;let R=i.precision;const k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(O,nA,mA,Ct,ct){const OA=Ct.fog,vA=ct.geometry,st=O.isMeshStandardMaterial?Ct.environment:null,mt=(O.isMeshStandardMaterial?e:A).get(O.envMap||st),qt=mt&&mt.mapping===EA?mt.image.height:null,Dt=k[O.type];O.precision!==null&&(R=i.getMaxPrecision(O.precision),R!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",R,"instead."));const _t=vA.morphAttributes.position||vA.morphAttributes.normal||vA.morphAttributes.color,Lt=_t!==void 0?_t.length:0;let Re=0;vA.morphAttributes.position!==void 0&&(Re=1),vA.morphAttributes.normal!==void 0&&(Re=2),vA.morphAttributes.color!==void 0&&(Re=3);let XA,vt,Ie,GA;if(Dt){const Xe=oB[Dt];XA=Xe.vertexShader,vt=Xe.fragmentShader}else XA=O.vertexShader,vt=O.fragmentShader,c.update(O),Ie=c.getVertexShaderID(O),GA=c.getFragmentShaderID(O);const ye=n.getRenderTarget(),oe=O.alphaTest>0,ue=O.clearcoat>0,Se=O.iridescence>0;return{isWebGL2:p,shaderID:Dt,shaderName:O.type,vertexShader:XA,fragmentShader:vt,defines:O.defines,customVertexShaderID:Ie,customFragmentShaderID:GA,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:R,instancing:ct.isInstancedMesh===!0,instancingColor:ct.isInstancedMesh===!0&&ct.instanceColor!==null,supportsVertexTextures:w,outputEncoding:ye===null?n.outputEncoding:ye.isXRRenderTarget===!0?ye.texture.encoding:de,map:!!O.map,matcap:!!O.matcap,envMap:!!mt,envMapMode:mt&&mt.mapping,envMapCubeUVHeight:qt,lightMap:!!O.lightMap,aoMap:!!O.aoMap,emissiveMap:!!O.emissiveMap,bumpMap:!!O.bumpMap,normalMap:!!O.normalMap,objectSpaceNormalMap:O.normalMapType===YI,tangentSpaceNormalMap:O.normalMapType===aI,decodeVideoTexture:!!O.map&&O.map.isVideoTexture===!0&&O.map.encoding===re,clearcoat:ue,clearcoatMap:ue&&!!O.clearcoatMap,clearcoatRoughnessMap:ue&&!!O.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!O.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!O.iridescenceMap,iridescenceThicknessMap:Se&&!!O.iridescenceThicknessMap,displacementMap:!!O.displacementMap,roughnessMap:!!O.roughnessMap,metalnessMap:!!O.metalnessMap,specularMap:!!O.specularMap,specularIntensityMap:!!O.specularIntensityMap,specularColorMap:!!O.specularColorMap,opaque:O.transparent===!1&&O.blending===x,alphaMap:!!O.alphaMap,alphaTest:oe,gradientMap:!!O.gradientMap,sheen:O.sheen>0,sheenColorMap:!!O.sheenColorMap,sheenRoughnessMap:!!O.sheenRoughnessMap,transmission:O.transmission>0,transmissionMap:!!O.transmissionMap,thicknessMap:!!O.thicknessMap,combine:O.combine,vertexTangents:!!O.normalMap&&!!vA.attributes.tangent,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!vA.attributes.color&&vA.attributes.color.itemSize===4,vertexUvs:!!O.map||!!O.bumpMap||!!O.normalMap||!!O.specularMap||!!O.alphaMap||!!O.emissiveMap||!!O.roughnessMap||!!O.metalnessMap||!!O.clearcoatMap||!!O.clearcoatRoughnessMap||!!O.clearcoatNormalMap||!!O.iridescenceMap||!!O.iridescenceThicknessMap||!!O.displacementMap||!!O.transmissionMap||!!O.thicknessMap||!!O.specularIntensityMap||!!O.specularColorMap||!!O.sheenColorMap||!!O.sheenRoughnessMap,uvsVertexOnly:!(O.map||O.bumpMap||O.normalMap||O.specularMap||O.alphaMap||O.emissiveMap||O.roughnessMap||O.metalnessMap||O.clearcoatNormalMap||O.iridescenceMap||O.iridescenceThicknessMap||O.transmission>0||O.transmissionMap||O.thicknessMap||O.specularIntensityMap||O.specularColorMap||O.sheen>0||O.sheenColorMap||O.sheenRoughnessMap)&&!!O.displacementMap,fog:!!OA,useFog:O.fog===!0,fogExp2:OA&&OA.isFogExp2,flatShading:!!O.flatShading,sizeAttenuation:O.sizeAttenuation,logarithmicDepthBuffer:y,skinning:ct.isSkinnedMesh===!0,morphTargets:vA.morphAttributes.position!==void 0,morphNormals:vA.morphAttributes.normal!==void 0,morphColors:vA.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Re,numDirLights:nA.directional.length,numPointLights:nA.point.length,numSpotLights:nA.spot.length,numSpotLightMaps:nA.spotLightMap.length,numRectAreaLights:nA.rectArea.length,numHemiLights:nA.hemi.length,numDirLightShadows:nA.directionalShadowMap.length,numPointLightShadows:nA.pointShadowMap.length,numSpotLightShadows:nA.spotShadowMap.length,numSpotLightShadowsWithMaps:nA.numSpotLightShadowsWithMaps,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:O.dithering,shadowMapEnabled:n.shadowMap.enabled&&mA.length>0,shadowMapType:n.shadowMap.type,toneMapping:O.toneMapped?n.toneMapping:rA,useLegacyLights:n.useLegacyLights,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===J,flipSided:O.side===F,useDepthPacking:!!O.depthPacking,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionDerivatives:O.extensions&&O.extensions.derivatives,extensionFragDepth:O.extensions&&O.extensions.fragDepth,extensionDrawBuffers:O.extensions&&O.extensions.drawBuffers,extensionShaderTextureLOD:O.extensions&&O.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||I.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||I.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||I.has("EXT_shader_texture_lod"),customProgramCacheKey:O.customProgramCacheKey()}}function U(O){const nA=[];if(O.shaderID?nA.push(O.shaderID):(nA.push(O.customVertexShaderID),nA.push(O.customFragmentShaderID)),O.defines!==void 0)for(const mA in O.defines)nA.push(mA),nA.push(O.defines[mA]);return O.isRawShaderMaterial===!1&&(v(nA,O),W(nA,O),nA.push(n.outputEncoding)),nA.push(O.customProgramCacheKey),nA.join()}function v(O,nA){O.push(nA.precision),O.push(nA.outputEncoding),O.push(nA.envMapMode),O.push(nA.envMapCubeUVHeight),O.push(nA.combine),O.push(nA.vertexUvs),O.push(nA.fogExp2),O.push(nA.sizeAttenuation),O.push(nA.morphTargetsCount),O.push(nA.morphAttributeCount),O.push(nA.numDirLights),O.push(nA.numPointLights),O.push(nA.numSpotLights),O.push(nA.numSpotLightMaps),O.push(nA.numHemiLights),O.push(nA.numRectAreaLights),O.push(nA.numDirLightShadows),O.push(nA.numPointLightShadows),O.push(nA.numSpotLightShadows),O.push(nA.numSpotLightShadowsWithMaps),O.push(nA.shadowMapType),O.push(nA.toneMapping),O.push(nA.numClippingPlanes),O.push(nA.numClipIntersection),O.push(nA.depthPacking)}function W(O,nA){s.disableAll(),nA.isWebGL2&&s.enable(0),nA.supportsVertexTextures&&s.enable(1),nA.instancing&&s.enable(2),nA.instancingColor&&s.enable(3),nA.map&&s.enable(4),nA.matcap&&s.enable(5),nA.envMap&&s.enable(6),nA.lightMap&&s.enable(7),nA.aoMap&&s.enable(8),nA.emissiveMap&&s.enable(9),nA.bumpMap&&s.enable(10),nA.normalMap&&s.enable(11),nA.objectSpaceNormalMap&&s.enable(12),nA.tangentSpaceNormalMap&&s.enable(13),nA.clearcoat&&s.enable(14),nA.clearcoatMap&&s.enable(15),nA.clearcoatRoughnessMap&&s.enable(16),nA.clearcoatNormalMap&&s.enable(17),nA.iridescence&&s.enable(18),nA.iridescenceMap&&s.enable(19),nA.iridescenceThicknessMap&&s.enable(20),nA.displacementMap&&s.enable(21),nA.specularMap&&s.enable(22),nA.roughnessMap&&s.enable(23),nA.metalnessMap&&s.enable(24),nA.gradientMap&&s.enable(25),nA.alphaMap&&s.enable(26),nA.alphaTest&&s.enable(27),nA.vertexColors&&s.enable(28),nA.vertexAlphas&&s.enable(29),nA.vertexUvs&&s.enable(30),nA.vertexTangents&&s.enable(31),nA.uvsVertexOnly&&s.enable(32),O.push(s.mask),s.disableAll(),nA.fog&&s.enable(0),nA.useFog&&s.enable(1),nA.flatShading&&s.enable(2),nA.logarithmicDepthBuffer&&s.enable(3),nA.skinning&&s.enable(4),nA.morphTargets&&s.enable(5),nA.morphNormals&&s.enable(6),nA.morphColors&&s.enable(7),nA.premultipliedAlpha&&s.enable(8),nA.shadowMapEnabled&&s.enable(9),nA.useLegacyLights&&s.enable(10),nA.doubleSided&&s.enable(11),nA.flipSided&&s.enable(12),nA.useDepthPacking&&s.enable(13),nA.dithering&&s.enable(14),nA.specularIntensityMap&&s.enable(15),nA.specularColorMap&&s.enable(16),nA.transmission&&s.enable(17),nA.transmissionMap&&s.enable(18),nA.thicknessMap&&s.enable(19),nA.sheen&&s.enable(20),nA.sheenColorMap&&s.enable(21),nA.sheenRoughnessMap&&s.enable(22),nA.decodeVideoTexture&&s.enable(23),nA.opaque&&s.enable(24),O.push(s.mask)}function K(O){const nA=k[O.type];let mA;if(nA){const Ct=oB[nA];mA=vh.clone(Ct.uniforms)}else mA=O.uniforms;return mA}function q(O,nA){let mA;for(let Ct=0,ct=d.length;Ct<ct;Ct++){const OA=d[Ct];if(OA.cacheKey===nA){mA=OA,++mA.usedTimes;break}}return mA===void 0&&(mA=new dw(n,nA,O,C),d.push(mA)),mA}function IA(O){if(--O.usedTimes===0){const nA=d.indexOf(O);d[nA]=d[d.length-1],d.pop(),O.destroy()}}function hA(O){c.remove(O)}function MA(){c.dispose()}return{getParameters:G,getProgramCacheKey:U,getUniforms:K,acquireProgram:q,releaseProgram:IA,releaseShaderCache:hA,programs:d,dispose:MA}}function ww(){let n=new WeakMap;function A(C){let Q=n.get(C);return Q===void 0&&(Q={},n.set(C,Q)),Q}function e(C){n.delete(C)}function I(C,Q,s){n.get(C)[Q]=s}function i(){n=new WeakMap}return{get:A,remove:e,update:I,dispose:i}}function yw(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.material.id!==A.material.id?n.material.id-A.material.id:n.z!==A.z?n.z-A.z:n.id-A.id}function sc(n,A){return n.groupOrder!==A.groupOrder?n.groupOrder-A.groupOrder:n.renderOrder!==A.renderOrder?n.renderOrder-A.renderOrder:n.z!==A.z?A.z-n.z:n.id-A.id}function rc(){const n=[];let A=0;const e=[],I=[],i=[];function C(){A=0,e.length=0,I.length=0,i.length=0}function Q(y,w,R,k,G,U){let v=n[A];return v===void 0?(v={id:y.id,object:y,geometry:w,material:R,groupOrder:k,renderOrder:y.renderOrder,z:G,group:U},n[A]=v):(v.id=y.id,v.object=y,v.geometry=w,v.material=R,v.groupOrder=k,v.renderOrder=y.renderOrder,v.z=G,v.group=U),A++,v}function s(y,w,R,k,G,U){const v=Q(y,w,R,k,G,U);R.transmission>0?I.push(v):R.transparent===!0?i.push(v):e.push(v)}function c(y,w,R,k,G,U){const v=Q(y,w,R,k,G,U);R.transmission>0?I.unshift(v):R.transparent===!0?i.unshift(v):e.unshift(v)}function d(y,w){e.length>1&&e.sort(y||yw),I.length>1&&I.sort(w||sc),i.length>1&&i.sort(w||sc)}function p(){for(let y=A,w=n.length;y<w;y++){const R=n[y];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:e,transmissive:I,transparent:i,init:C,push:s,unshift:c,finish:p,sort:d}}function Mw(){let n=new WeakMap;function A(I,i){const C=n.get(I);let Q;return C===void 0?(Q=new rc,n.set(I,[Q])):i>=C.length?(Q=new rc,C.push(Q)):Q=C[i],Q}function e(){n=new WeakMap}return{get:A,dispose:e}}function mw(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={direction:new QA,color:new Qe};break;case"SpotLight":e={position:new QA,direction:new QA,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new QA,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new QA,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":e={color:new Qe,position:new QA,halfWidth:new QA,halfHeight:new QA};break}return n[A.id]=e,e}}}function Rw(){const n={};return{get:function(A){if(n[A.id]!==void 0)return n[A.id];let e;switch(A.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[A.id]=e,e}}}let Sw=0;function Gw(n,A){return(A.castShadow?2:0)-(n.castShadow?2:0)+(A.map?1:0)-(n.map?1:0)}function Fw(n,A){const e=new mw,I=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)i.probe.push(new QA);const C=new QA,Q=new Ve,s=new Ve;function c(p,y){let w=0,R=0,k=0;for(let Ct=0;Ct<9;Ct++)i.probe[Ct].set(0,0,0);let G=0,U=0,v=0,W=0,K=0,q=0,IA=0,hA=0,MA=0,O=0;p.sort(Gw);const nA=y===!0?Math.PI:1;for(let Ct=0,ct=p.length;Ct<ct;Ct++){const OA=p[Ct],vA=OA.color,st=OA.intensity,mt=OA.distance,qt=OA.shadow&&OA.shadow.map?OA.shadow.map.texture:null;if(OA.isAmbientLight)w+=vA.r*st*nA,R+=vA.g*st*nA,k+=vA.b*st*nA;else if(OA.isLightProbe)for(let Dt=0;Dt<9;Dt++)i.probe[Dt].addScaledVector(OA.sh.coefficients[Dt],st);else if(OA.isDirectionalLight){const Dt=e.get(OA);if(Dt.color.copy(OA.color).multiplyScalar(OA.intensity*nA),OA.castShadow){const _t=OA.shadow,Lt=I.get(OA);Lt.shadowBias=_t.bias,Lt.shadowNormalBias=_t.normalBias,Lt.shadowRadius=_t.radius,Lt.shadowMapSize=_t.mapSize,i.directionalShadow[G]=Lt,i.directionalShadowMap[G]=qt,i.directionalShadowMatrix[G]=OA.shadow.matrix,q++}i.directional[G]=Dt,G++}else if(OA.isSpotLight){const Dt=e.get(OA);Dt.position.setFromMatrixPosition(OA.matrixWorld),Dt.color.copy(vA).multiplyScalar(st*nA),Dt.distance=mt,Dt.coneCos=Math.cos(OA.angle),Dt.penumbraCos=Math.cos(OA.angle*(1-OA.penumbra)),Dt.decay=OA.decay,i.spot[v]=Dt;const _t=OA.shadow;if(OA.map&&(i.spotLightMap[MA]=OA.map,MA++,_t.updateMatrices(OA),OA.castShadow&&O++),i.spotLightMatrix[v]=_t.matrix,OA.castShadow){const Lt=I.get(OA);Lt.shadowBias=_t.bias,Lt.shadowNormalBias=_t.normalBias,Lt.shadowRadius=_t.radius,Lt.shadowMapSize=_t.mapSize,i.spotShadow[v]=Lt,i.spotShadowMap[v]=qt,hA++}v++}else if(OA.isRectAreaLight){const Dt=e.get(OA);Dt.color.copy(vA).multiplyScalar(st),Dt.halfWidth.set(OA.width*.5,0,0),Dt.halfHeight.set(0,OA.height*.5,0),i.rectArea[W]=Dt,W++}else if(OA.isPointLight){const Dt=e.get(OA);if(Dt.color.copy(OA.color).multiplyScalar(OA.intensity*nA),Dt.distance=OA.distance,Dt.decay=OA.decay,OA.castShadow){const _t=OA.shadow,Lt=I.get(OA);Lt.shadowBias=_t.bias,Lt.shadowNormalBias=_t.normalBias,Lt.shadowRadius=_t.radius,Lt.shadowMapSize=_t.mapSize,Lt.shadowCameraNear=_t.camera.near,Lt.shadowCameraFar=_t.camera.far,i.pointShadow[U]=Lt,i.pointShadowMap[U]=qt,i.pointShadowMatrix[U]=OA.shadow.matrix,IA++}i.point[U]=Dt,U++}else if(OA.isHemisphereLight){const Dt=e.get(OA);Dt.skyColor.copy(OA.color).multiplyScalar(st*nA),Dt.groundColor.copy(OA.groundColor).multiplyScalar(st*nA),i.hemi[K]=Dt,K++}}W>0&&(A.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=w,i.ambient[1]=R,i.ambient[2]=k;const mA=i.hash;(mA.directionalLength!==G||mA.pointLength!==U||mA.spotLength!==v||mA.rectAreaLength!==W||mA.hemiLength!==K||mA.numDirectionalShadows!==q||mA.numPointShadows!==IA||mA.numSpotShadows!==hA||mA.numSpotMaps!==MA)&&(i.directional.length=G,i.spot.length=v,i.rectArea.length=W,i.point.length=U,i.hemi.length=K,i.directionalShadow.length=q,i.directionalShadowMap.length=q,i.pointShadow.length=IA,i.pointShadowMap.length=IA,i.spotShadow.length=hA,i.spotShadowMap.length=hA,i.directionalShadowMatrix.length=q,i.pointShadowMatrix.length=IA,i.spotLightMatrix.length=hA+MA-O,i.spotLightMap.length=MA,i.numSpotLightShadowsWithMaps=O,mA.directionalLength=G,mA.pointLength=U,mA.spotLength=v,mA.rectAreaLength=W,mA.hemiLength=K,mA.numDirectionalShadows=q,mA.numPointShadows=IA,mA.numSpotShadows=hA,mA.numSpotMaps=MA,i.version=Sw++)}function d(p,y){let w=0,R=0,k=0,G=0,U=0;const v=y.matrixWorldInverse;for(let W=0,K=p.length;W<K;W++){const q=p[W];if(q.isDirectionalLight){const IA=i.directional[w];IA.direction.setFromMatrixPosition(q.matrixWorld),C.setFromMatrixPosition(q.target.matrixWorld),IA.direction.sub(C),IA.direction.transformDirection(v),w++}else if(q.isSpotLight){const IA=i.spot[k];IA.position.setFromMatrixPosition(q.matrixWorld),IA.position.applyMatrix4(v),IA.direction.setFromMatrixPosition(q.matrixWorld),C.setFromMatrixPosition(q.target.matrixWorld),IA.direction.sub(C),IA.direction.transformDirection(v),k++}else if(q.isRectAreaLight){const IA=i.rectArea[G];IA.position.setFromMatrixPosition(q.matrixWorld),IA.position.applyMatrix4(v),s.identity(),Q.copy(q.matrixWorld),Q.premultiply(v),s.extractRotation(Q),IA.halfWidth.set(q.width*.5,0,0),IA.halfHeight.set(0,q.height*.5,0),IA.halfWidth.applyMatrix4(s),IA.halfHeight.applyMatrix4(s),G++}else if(q.isPointLight){const IA=i.point[R];IA.position.setFromMatrixPosition(q.matrixWorld),IA.position.applyMatrix4(v),R++}else if(q.isHemisphereLight){const IA=i.hemi[U];IA.direction.setFromMatrixPosition(q.matrixWorld),IA.direction.transformDirection(v),U++}}}return{setup:c,setupView:d,state:i}}function ac(n,A){const e=new Fw(n,A),I=[],i=[];function C(){I.length=0,i.length=0}function Q(y){I.push(y)}function s(y){i.push(y)}function c(y){e.setup(I,y)}function d(y){e.setupView(I,y)}return{init:C,state:{lightsArray:I,shadowsArray:i,lights:e},setupLights:c,setupLightsView:d,pushLight:Q,pushShadow:s}}function Nw(n,A){let e=new WeakMap;function I(C,Q=0){const s=e.get(C);let c;return s===void 0?(c=new ac(n,A),e.set(C,[c])):Q>=s.length?(c=new ac(n,A),s.push(c)):c=s[Q],c}function i(){e=new WeakMap}return{get:I,dispose:i}}class Gr extends UI{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Fr extends UI{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new QA,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
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
`):typeof readline=="function"&&(u=readline())!==null&&(u+=`
`);if(!u)return null;l.input=qn(u,!0)}return l.input.shift()},put_char:function(l,u){u===null||u===10?(ug(hC(l.output,0)),l.output=[]):u!=0&&l.output.push(u)},fsync:function(l){l.output&&l.output.length>0&&(ug(hC(l.output,0)),l.output=[])}},default_tty1_ops:{put_char:function(l,u){u===null||u===10?(jg(hC(l.output,0)),l.output=[]):u!=0&&l.output.push(u)},fsync:function(l){l.output&&l.output.length>0&&(jg(hC(l.output,0)),l.output=[])}}};function FQ(l){HB()}var gg={ops_table:null,mount:function(l){return gg.createNode(null,"/",16895,0)},createNode:function(l,u,M,b){if(Y.isBlkdev(M)||Y.isFIFO(M))throw new Y.ErrnoError(63);gg.ops_table||(gg.ops_table={dir:{node:{getattr:gg.node_ops.getattr,setattr:gg.node_ops.setattr,lookup:gg.node_ops.lookup,mknod:gg.node_ops.mknod,rename:gg.node_ops.rename,unlink:gg.node_ops.unlink,rmdir:gg.node_ops.rmdir,readdir:gg.node_ops.readdir,symlink:gg.node_ops.symlink},stream:{llseek:gg.stream_ops.llseek}},file:{node:{getattr:gg.node_ops.getattr,setattr:gg.node_ops.setattr},stream:{llseek:gg.stream_ops.llseek,read:gg.stream_ops.read,write:gg.stream_ops.write,allocate:gg.stream_ops.allocate,mmap:gg.stream_ops.mmap,msync:gg.stream_ops.msync}},link:{node:{getattr:gg.node_ops.getattr,setattr:gg.node_ops.setattr,readlink:gg.node_ops.readlink},stream:{}},chrdev:{node:{getattr:gg.node_ops.getattr,setattr:gg.node_ops.setattr},stream:Y.chrdev_stream_ops}});var _=Y.createNode(l,u,M,b);return Y.isDir(_.mode)?(_.node_ops=gg.ops_table.dir.node,_.stream_ops=gg.ops_table.dir.stream,_.contents={}):Y.isFile(_.mode)?(_.node_ops=gg.ops_table.file.node,_.stream_ops=gg.ops_table.file.stream,_.usedBytes=0,_.contents=null):Y.isLink(_.mode)?(_.node_ops=gg.ops_table.link.node,_.stream_ops=gg.ops_table.link.stream):Y.isChrdev(_.mode)&&(_.node_ops=gg.ops_table.chrdev.node,_.stream_ops=gg.ops_table.chrdev.stream),_.timestamp=Date.now(),l&&(l.contents[u]=_,l.timestamp=_.timestamp),_},getFileDataAsTypedArray:function(l){return l.contents?l.contents.subarray?l.contents.subarray(0,l.usedBytes):new Uint8Array(l.contents):new Uint8Array(0)},expandFileStorage:function(l,u){var M=l.contents?l.contents.length:0;if(!(M>=u)){u=Math.max(u,M*(M<1048576?2:1.125)>>>0),M!=0&&(u=Math.max(u,256));var b=l.contents;l.contents=new Uint8Array(u),l.usedBytes>0&&l.contents.set(b.subarray(0,l.usedBytes),0)}},resizeFileStorage:function(l,u){if(l.usedBytes!=u)if(u==0)l.contents=null,l.usedBytes=0;else{var M=l.contents;l.contents=new Uint8Array(u),M&&l.contents.set(M.subarray(0,Math.min(u,l.usedBytes))),l.usedBytes=u}},node_ops:{getattr:function(l){var u={};return u.dev=Y.isChrdev(l.mode)?l.id:1,u.ino=l.id,u.mode=l.mode,u.nlink=1,u.uid=0,u.gid=0,u.rdev=l.rdev,Y.isDir(l.mode)?u.size=4096:Y.isFile(l.mode)?u.size=l.usedBytes:Y.isLink(l.mode)?u.size=l.link.length:u.size=0,u.atime=new Date(l.timestamp),u.mtime=new Date(l.timestamp),u.ctime=new Date(l.timestamp),u.blksize=4096,u.blocks=Math.ceil(u.size/u.blksize),u},setattr:function(l,u){u.mode!==void 0&&(l.mode=u.mode),u.timestamp!==void 0&&(l.timestamp=u.timestamp),u.size!==void 0&&gg.resizeFileStorage(l,u.size)},lookup:function(l,u){throw Y.genericErrors[44]},mknod:function(l,u,M,b){return gg.createNode(l,u,M,b)},rename:function(l,u,M){if(Y.isDir(l.mode)){var b;try{b=Y.lookupNode(u,M)}catch{}if(b)for(var _ in b.contents)throw new Y.ErrnoError(55)}delete l.parent.contents[l.name],l.parent.timestamp=Date.now(),l.name=M,u.contents[M]=l,u.timestamp=l.parent.timestamp,l.parent=u},unlink:function(l,u){delete l.contents[u],l.timestamp=Date.now()},rmdir:function(l,u){var M=Y.lookupNode(l,u);for(var b in M.contents)throw new Y.ErrnoError(55);delete l.contents[u],l.timestamp=Date.now()},readdir:function(l){var u=[".",".."];for(var M in l.contents)l.contents.hasOwnProperty(M)&&u.push(M);return u},symlink:function(l,u,M){var b=gg.createNode(l,u,41471,0);return b.link=M,b},readlink:function(l){if(!Y.isLink(l.mode))throw new Y.ErrnoError(28);return l.link}},stream_ops:{read:function(l,u,M,b,_){var tA=l.node.contents;if(_>=l.node.usedBytes)return 0;var lA=Math.min(l.node.usedBytes-_,b);if(lA>8&&tA.subarray)u.set(tA.subarray(_,_+lA),M);else for(var wA=0;wA<lA;wA++)u[M+wA]=tA[_+wA];return lA},write:function(l,u,M,b,_,tA){if(u.buffer===tI.buffer&&(tA=!1),!b)return 0;var lA=l.node;if(lA.timestamp=Date.now(),u.subarray&&(!lA.contents||lA.contents.subarray)){if(tA)return lA.contents=u.subarray(M,M+b),lA.usedBytes=b,b;if(lA.usedBytes===0&&_===0)return lA.contents=u.slice(M,M+b),lA.usedBytes=b,b;if(_+b<=lA.usedBytes)return lA.contents.set(u.subarray(M,M+b),_),b}if(gg.expandFileStorage(lA,_+b),lA.contents.subarray&&u.subarray)lA.contents.set(u.subarray(M,M+b),_);else for(var wA=0;wA<b;wA++)lA.contents[_+wA]=u[M+wA];return lA.usedBytes=Math.max(lA.usedBytes,_+b),b},llseek:function(l,u,M){var b=u;if(M===1?b+=l.position:M===2&&Y.isFile(l.node.mode)&&(b+=l.node.usedBytes),b<0)throw new Y.ErrnoError(28);return b},allocate:function(l,u,M){gg.expandFileStorage(l.node,u+M),l.node.usedBytes=Math.max(l.node.usedBytes,u+M)},mmap:function(l,u,M,b,_){if(!Y.isFile(l.node.mode))throw new Y.ErrnoError(43);var tA,lA,wA=l.node.contents;if(2&_||wA.buffer!==ai){if((M>0||M+u<wA.length)&&(wA=wA.subarray?wA.subarray(M,M+u):Array.prototype.slice.call(wA,M,M+u)),lA=!0,!(tA=FQ()))throw new Y.ErrnoError(48);tI.set(wA,tA)}else lA=!1,tA=wA.byteOffset;return{ptr:tA,allocated:lA}},msync:function(l,u,M,b,_){if(!Y.isFile(l.node.mode))throw new Y.ErrnoError(43);return 2&_||gg.stream_ops.write(l,u,0,b,M,!1),0}}},Y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(l=ji.resolve(Y.cwd(),l)))return{path:"",node:null};if((u=Object.assign({follow_mount:!0,recurse_count:0},u)).recurse_count>8)throw new Y.ErrnoError(32);for(var M=fg.normalizeArray(l.split("/").filter(function(jA){return!!jA}),!1),b=Y.root,_="/",tA=0;tA<M.length;tA++){var lA=tA===M.length-1;if(lA&&u.parent)break;if(b=Y.lookupNode(b,M[tA]),_=fg.join2(_,M[tA]),Y.isMountpoint(b)&&(!lA||lA&&u.follow_mount)&&(b=b.mounted.root),!lA||u.follow)for(var wA=0;Y.isLink(b.mode);){var KA=Y.readlink(_);if(_=ji.resolve(fg.dirname(_),KA),b=Y.lookupPath(_,{recurse_count:u.recurse_count+1}).node,wA++>40)throw new Y.ErrnoError(32)}}return{path:_,node:b}},getPath:function(l){for(var u;;){if(Y.isRoot(l)){var M=l.mount.mountpoint;return u?M[M.length-1]!=="/"?M+"/"+u:M+u:M}u=u?l.name+"/"+u:l.name,l=l.parent}},hashName:function(l,u){for(var M=0,b=0;b<u.length;b++)M=(M<<5)-M+u.charCodeAt(b)|0;return(l+M>>>0)%Y.nameTable.length},hashAddNode:function(l){var u=Y.hashName(l.parent.id,l.name);l.name_next=Y.nameTable[u],Y.nameTable[u]=l},hashRemoveNode:function(l){var u=Y.hashName(l.parent.id,l.name);if(Y.nameTable[u]===l)Y.nameTable[u]=l.name_next;else for(var M=Y.nameTable[u];M;){if(M.name_next===l){M.name_next=l.name_next;break}M=M.name_next}},lookupNode:function(l,u){var M=Y.mayLookup(l);if(M)throw new Y.ErrnoError(M,l);for(var b=Y.hashName(l.id,u),_=Y.nameTable[b];_;_=_.name_next){var tA=_.name;if(_.parent.id===l.id&&tA===u)return _}return Y.lookup(l,u)},createNode:function(l,u,M,b){var _=new Y.FSNode(l,u,M,b);return Y.hashAddNode(_),_},destroyNode:function(l){Y.hashRemoveNode(l)},isRoot:function(l){return l===l.parent},isMountpoint:function(l){return!!l.mounted},isFile:function(l){return(61440&l)==32768},isDir:function(l){return(61440&l)==16384},isLink:function(l){return(61440&l)==40960},isChrdev:function(l){return(61440&l)==8192},isBlkdev:function(l){return(61440&l)==24576},isFIFO:function(l){return(61440&l)==4096},isSocket:function(l){return(49152&l)==49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(l){var u=Y.flagModes[l];if(u===void 0)throw new Error("Unknown file open mode: "+l);return u},flagsToPermissionString:function(l){var u=["r","w","rw"][3&l];return 512&l&&(u+="w"),u},nodePermissions:function(l,u){return Y.ignorePermissions||(!u.includes("r")||292&l.mode)&&(!u.includes("w")||146&l.mode)&&(!u.includes("x")||73&l.mode)?0:2},mayLookup:function(l){return Y.nodePermissions(l,"x")||(l.node_ops.lookup?0:2)},mayCreate:function(l,u){try{return Y.lookupNode(l,u),20}catch{}return Y.nodePermissions(l,"wx")},mayDelete:function(l,u,M){var b;try{b=Y.lookupNode(l,u)}catch(tA){return tA.errno}var _=Y.nodePermissions(l,"wx");if(_)return _;if(M){if(!Y.isDir(b.mode))return 54;if(Y.isRoot(b)||Y.getPath(b)===Y.cwd())return 10}else if(Y.isDir(b.mode))return 31;return 0},mayOpen:function(l,u){return l?Y.isLink(l.mode)?32:Y.isDir(l.mode)&&(Y.flagsToPermissionString(u)!=="r"||512&u)?31:Y.nodePermissions(l,Y.flagsToPermissionString(u)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Y.MAX_OPEN_FDS,M=l;M<=u;M++)if(!Y.streams[M])return M;throw new Y.ErrnoError(33)},getStream:function(l){return Y.streams[l]},createStream:function(l,u,M){Y.FSStream||(Y.FSStream=function(){this.shared={}},Y.FSStream.prototype={},Object.defineProperties(Y.FSStream.prototype,{object:{get:function(){return this.node},set:function(_){this.node=_}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return(2097155&this.flags)!=0}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(_){this.shared.flags=_}},position:{get:function(){return this.shared.position},set:function(_){this.shared.position=_}}})),l=Object.assign(new Y.FSStream,l);var b=Y.nextfd(u,M);return l.fd=b,Y.streams[b]=l,l},closeStream:function(l){Y.streams[l]=null},chrdev_stream_ops:{open:function(l){var u=Y.getDevice(l.node.rdev);l.stream_ops=u.stream_ops,l.stream_ops.open&&l.stream_ops.open(l)},llseek:function(){throw new Y.ErrnoError(70)}},major:function(l){return l>>8},minor:function(l){return 255&l},makedev:function(l,u){return l<<8|u},registerDevice:function(l,u){Y.devices[l]={stream_ops:u}},getDevice:function(l){return Y.devices[l]},getMounts:function(l){for(var u=[],M=[l];M.length;){var b=M.pop();u.push(b),M.push.apply(M,b.mounts)}return u},syncfs:function(l,u){typeof l=="function"&&(u=l,l=!1),Y.syncFSRequests++,Y.syncFSRequests>1&&jg("warning: "+Y.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var M=Y.getMounts(Y.root.mount),b=0;function _(lA){return Y.syncFSRequests--,u(lA)}function tA(lA){if(lA)return tA.errored?void 0:(tA.errored=!0,_(lA));++b>=M.length&&_(null)}M.forEach(function(lA){if(!lA.type.syncfs)return tA(null);lA.type.syncfs(lA,l,tA)})},mount:function(l,u,M){var b,_=M==="/",tA=!M;if(_&&Y.root)throw new Y.ErrnoError(10);if(!_&&!tA){var lA=Y.lookupPath(M,{follow_mount:!1});if(M=lA.path,b=lA.node,Y.isMountpoint(b))throw new Y.ErrnoError(10);if(!Y.isDir(b.mode))throw new Y.ErrnoError(54)}var wA={type:l,opts:u,mountpoint:M,mounts:[]},KA=l.mount(wA);return KA.mount=wA,wA.root=KA,_?Y.root=KA:b&&(b.mounted=wA,b.mount&&b.mount.mounts.push(wA)),KA},unmount:function(l){var u=Y.lookupPath(l,{follow_mount:!1});if(!Y.isMountpoint(u.node))throw new Y.ErrnoError(28);var M=u.node,b=M.mounted,_=Y.getMounts(b);Object.keys(Y.nameTable).forEach(function(lA){for(var wA=Y.nameTable[lA];wA;){var KA=wA.name_next;_.includes(wA.mount)&&Y.destroyNode(wA),wA=KA}}),M.mounted=null;var tA=M.mount.mounts.indexOf(b);M.mount.mounts.splice(tA,1)},lookup:function(l,u){return l.node_ops.lookup(l,u)},mknod:function(l,u,M){var b=Y.lookupPath(l,{parent:!0}).node,_=fg.basename(l);if(!_||_==="."||_==="..")throw new Y.ErrnoError(28);var tA=Y.mayCreate(b,_);if(tA)throw new Y.ErrnoError(tA);if(!b.node_ops.mknod)throw new Y.ErrnoError(63);return b.node_ops.mknod(b,_,u,M)},create:function(l,u){return u=u!==void 0?u:438,u&=4095,u|=32768,Y.mknod(l,u,0)},mkdir:function(l,u){return u=u!==void 0?u:511,u&=1023,u|=16384,Y.mknod(l,u,0)},mkdirTree:function(l,u){for(var M=l.split("/"),b="",_=0;_<M.length;++_)if(M[_]){b+="/"+M[_];try{Y.mkdir(b,u)}catch(tA){if(tA.errno!=20)throw tA}}},mkdev:function(l,u,M){return M===void 0&&(M=u,u=438),u|=8192,Y.mknod(l,u,M)},symlink:function(l,u){if(!ji.resolve(l))throw new Y.ErrnoError(44);var M=Y.lookupPath(u,{parent:!0}).node;if(!M)throw new Y.ErrnoError(44);var b=fg.basename(u),_=Y.mayCreate(M,b);if(_)throw new Y.ErrnoError(_);if(!M.node_ops.symlink)throw new Y.ErrnoError(63);return M.node_ops.symlink(M,b,l)},rename:function(l,u){var M,b,_=fg.dirname(l),tA=fg.dirname(u),lA=fg.basename(l),wA=fg.basename(u);if(M=Y.lookupPath(l,{parent:!0}).node,b=Y.lookupPath(u,{parent:!0}).node,!M||!b)throw new Y.ErrnoError(44);if(M.mount!==b.mount)throw new Y.ErrnoError(75);var KA,jA=Y.lookupNode(M,lA),Ut=ji.relative(l,tA);if(Ut.charAt(0)!==".")throw new Y.ErrnoError(28);if((Ut=ji.relative(u,_)).charAt(0)!==".")throw new Y.ErrnoError(55);try{KA=Y.lookupNode(b,wA)}catch{}if(jA!==KA){var bt=Y.isDir(jA.mode),Bt=Y.mayDelete(M,lA,bt);if(Bt)throw new Y.ErrnoError(Bt);if(Bt=KA?Y.mayDelete(b,wA,bt):Y.mayCreate(b,wA))throw new Y.ErrnoError(Bt);if(!M.node_ops.rename)throw new Y.ErrnoError(63);if(Y.isMountpoint(jA)||KA&&Y.isMountpoint(KA))throw new Y.ErrnoError(10);if(b!==M&&(Bt=Y.nodePermissions(M,"w")))throw new Y.ErrnoError(Bt);Y.hashRemoveNode(jA);try{M.node_ops.rename(jA,b,wA)}catch(Yt){throw Yt}finally{Y.hashAddNode(jA)}}},rmdir:function(l){var u=Y.lookupPath(l,{parent:!0}).node,M=fg.basename(l),b=Y.lookupNode(u,M),_=Y.mayDelete(u,M,!0);if(_)throw new Y.ErrnoError(_);if(!u.node_ops.rmdir)throw new Y.ErrnoError(63);if(Y.isMountpoint(b))throw new Y.ErrnoError(10);u.node_ops.rmdir(u,M),Y.destroyNode(b)},readdir:function(l){var u=Y.lookupPath(l,{follow:!0}).node;if(!u.node_ops.readdir)throw new Y.ErrnoError(54);return u.node_ops.readdir(u)},unlink:function(l){var u=Y.lookupPath(l,{parent:!0}).node;if(!u)throw new Y.ErrnoError(44);var M=fg.basename(l),b=Y.lookupNode(u,M),_=Y.mayDelete(u,M,!1);if(_)throw new Y.ErrnoError(_);if(!u.node_ops.unlink)throw new Y.ErrnoError(63);if(Y.isMountpoint(b))throw new Y.ErrnoError(10);u.node_ops.unlink(u,M),Y.destroyNode(b)},readlink:function(l){var u=Y.lookupPath(l).node;if(!u)throw new Y.ErrnoError(44);if(!u.node_ops.readlink)throw new Y.ErrnoError(28);return ji.resolve(Y.getPath(u.parent),u.node_ops.readlink(u))},stat:function(l,u){var M=Y.lookupPath(l,{follow:!u}).node;if(!M)throw new Y.ErrnoError(44);if(!M.node_ops.getattr)throw new Y.ErrnoError(63);return M.node_ops.getattr(M)},lstat:function(l){return Y.stat(l,!0)},chmod:function(l,u,M){var b;if(!(b=typeof l=="string"?Y.lookupPath(l,{follow:!M}).node:l).node_ops.setattr)throw new Y.ErrnoError(63);b.node_ops.setattr(b,{mode:4095&u|-4096&b.mode,timestamp:Date.now()})},lchmod:function(l,u){Y.chmod(l,u,!0)},fchmod:function(l,u){var M=Y.getStream(l);if(!M)throw new Y.ErrnoError(8);Y.chmod(M.node,u)},chown:function(l,u,M,b){var _;if(!(_=typeof l=="string"?Y.lookupPath(l,{follow:!b}).node:l).node_ops.setattr)throw new Y.ErrnoError(63);_.node_ops.setattr(_,{timestamp:Date.now()})},lchown:function(l,u,M){Y.chown(l,u,M,!0)},fchown:function(l,u,M){var b=Y.getStream(l);if(!b)throw new Y.ErrnoError(8);Y.chown(b.node,u,M)},truncate:function(l,u){if(u<0)throw new Y.ErrnoError(28);var M;if(!(M=typeof l=="string"?Y.lookupPath(l,{follow:!0}).node:l).node_ops.setattr)throw new Y.ErrnoError(63);if(Y.isDir(M.mode))throw new Y.ErrnoError(31);if(!Y.isFile(M.mode))throw new Y.ErrnoError(28);var b=Y.nodePermissions(M,"w");if(b)throw new Y.ErrnoError(b);M.node_ops.setattr(M,{size:u,timestamp:Date.now()})},ftruncate:function(l,u){var M=Y.getStream(l);if(!M)throw new Y.ErrnoError(8);if(!(2097155&M.flags))throw new Y.ErrnoError(28);Y.truncate(M.node,u)},utime:function(l,u,M){var b=Y.lookupPath(l,{follow:!0}).node;b.node_ops.setattr(b,{timestamp:Math.max(u,M)})},open:function(l,u,M){if(l==="")throw new Y.ErrnoError(44);var b;if(M=M===void 0?438:M,M=64&(u=typeof u=="string"?Y.modeStringToFlags(u):u)?4095&M|32768:0,iA(l)=="object")b=l;else{l=fg.normalize(l);try{b=Y.lookupPath(l,{follow:!(131072&u)}).node}catch{}}var _=!1;if(64&u)if(b){if(128&u)throw new Y.ErrnoError(20)}else b=Y.mknod(l,M,0),_=!0;if(!b)throw new Y.ErrnoError(44);if(Y.isChrdev(b.mode)&&(u&=-513),65536&u&&!Y.isDir(b.mode))throw new Y.ErrnoError(54);if(!_){var tA=Y.mayOpen(b,u);if(tA)throw new Y.ErrnoError(tA)}512&u&&!_&&Y.truncate(b,0),u&=-131713;var lA=Y.createStream({node:b,path:Y.getPath(b),flags:u,seekable:!0,position:0,stream_ops:b.stream_ops,ungotten:[],error:!1});return lA.stream_ops.open&&lA.stream_ops.open(lA),!N.logReadFiles||1&u||(Y.readFiles||(Y.readFiles={}),l in Y.readFiles||(Y.readFiles[l]=1)),lA},close:function(l){if(Y.isClosed(l))throw new Y.ErrnoError(8);l.getdents&&(l.getdents=null);try{l.stream_ops.close&&l.stream_ops.close(l)}catch(u){throw u}finally{Y.closeStream(l.fd)}l.fd=null},isClosed:function(l){return l.fd===null},llseek:function(l,u,M){if(Y.isClosed(l))throw new Y.ErrnoError(8);if(!l.seekable||!l.stream_ops.llseek)throw new Y.ErrnoError(70);if(M!=0&&M!=1&&M!=2)throw new Y.ErrnoError(28);return l.position=l.stream_ops.llseek(l,u,M),l.ungotten=[],l.position},read:function(l,u,M,b,_){if(b<0||_<0)throw new Y.ErrnoError(28);if(Y.isClosed(l))throw new Y.ErrnoError(8);if((2097155&l.flags)==1)throw new Y.ErrnoError(8);if(Y.isDir(l.node.mode))throw new Y.ErrnoError(31);if(!l.stream_ops.read)throw new Y.ErrnoError(28);var tA=_!==void 0;if(tA){if(!l.seekable)throw new Y.ErrnoError(70)}else _=l.position;var lA=l.stream_ops.read(l,u,M,b,_);return tA||(l.position+=lA),lA},write:function(l,u,M,b,_,tA){if(b<0||_<0)throw new Y.ErrnoError(28);if(Y.isClosed(l))throw new Y.ErrnoError(8);if(!(2097155&l.flags))throw new Y.ErrnoError(8);if(Y.isDir(l.node.mode))throw new Y.ErrnoError(31);if(!l.stream_ops.write)throw new Y.ErrnoError(28);l.seekable&&1024&l.flags&&Y.llseek(l,0,2);var lA=_!==void 0;if(lA){if(!l.seekable)throw new Y.ErrnoError(70)}else _=l.position;var wA=l.stream_ops.write(l,u,M,b,_,tA);return lA||(l.position+=wA),wA},allocate:function(l,u,M){if(Y.isClosed(l))throw new Y.ErrnoError(8);if(u<0||M<=0)throw new Y.ErrnoError(28);if(!(2097155&l.flags))throw new Y.ErrnoError(8);if(!Y.isFile(l.node.mode)&&!Y.isDir(l.node.mode))throw new Y.ErrnoError(43);if(!l.stream_ops.allocate)throw new Y.ErrnoError(138);l.stream_ops.allocate(l,u,M)},mmap:function(l,u,M,b,_){if(2&b&&!(2&_)&&(2097155&l.flags)!=2)throw new Y.ErrnoError(2);if((2097155&l.flags)==1)throw new Y.ErrnoError(2);if(!l.stream_ops.mmap)throw new Y.ErrnoError(43);return l.stream_ops.mmap(l,u,M,b,_)},msync:function(l,u,M,b,_){return l&&l.stream_ops.msync?l.stream_ops.msync(l,u,M,b,_):0},munmap:function(l){return 0},ioctl:function(l,u,M){if(!l.stream_ops.ioctl)throw new Y.ErrnoError(59);return l.stream_ops.ioctl(l,u,M)},readFile:function(l){var u,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(M.flags=M.flags||0,M.encoding=M.encoding||"binary",M.encoding!=="utf8"&&M.encoding!=="binary")throw new Error('Invalid encoding type "'+M.encoding+'"');var b=Y.open(l,M.flags),_=Y.stat(l).size,tA=new Uint8Array(_);return Y.read(b,tA,0,_,0),M.encoding==="utf8"?u=hC(tA,0):M.encoding==="binary"&&(u=tA),Y.close(b),u},writeFile:function(l,u){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};M.flags=M.flags||577;var b=Y.open(l,M.flags,M.mode);if(typeof u=="string"){var _=new Uint8Array(Hn(u)+1),tA=vn(u,_,0,_.length);Y.write(b,_,0,tA,void 0,M.canOwn)}else{if(!ArrayBuffer.isView(u))throw new Error("Unsupported data type");Y.write(b,u,0,u.byteLength,void 0,M.canOwn)}Y.close(b)},cwd:function(){return Y.currentPath},chdir:function(l){var u=Y.lookupPath(l,{follow:!0});if(u.node===null)throw new Y.ErrnoError(44);if(!Y.isDir(u.node.mode))throw new Y.ErrnoError(54);var M=Y.nodePermissions(u.node,"x");if(M)throw new Y.ErrnoError(M);Y.currentPath=u.path},createDefaultDirectories:function(){Y.mkdir("/tmp"),Y.mkdir("/home"),Y.mkdir("/home/web_user")},createDefaultDevices:function(){Y.mkdir("/dev"),Y.registerDevice(Y.makedev(1,3),{read:function(){return 0},write:function(u,M,b,_,tA){return _}}),Y.mkdev("/dev/null",Y.makedev(1,3)),yi.register(Y.makedev(5,0),yi.default_tty_ops),yi.register(Y.makedev(6,0),yi.default_tty1_ops),Y.mkdev("/dev/tty",Y.makedev(5,0)),Y.mkdev("/dev/tty1",Y.makedev(6,0));var l=function(){if((typeof crypto>"u"?"undefined":iA(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var u=new Uint8Array(1);return function(){return crypto.getRandomValues(u),u[0]}}if(Xt)try{var M=J(654);return function(){return M.randomBytes(1)[0]}}catch{}return function(){return HB("randomDevice")}}();Y.createDevice("/dev","random",l),Y.createDevice("/dev","urandom",l),Y.mkdir("/dev/shm"),Y.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){Y.mkdir("/proc");var l=Y.mkdir("/proc/self");Y.mkdir("/proc/self/fd"),Y.mount({mount:function(){var u=Y.createNode(l,"fd",16895,73);return u.node_ops={lookup:function(M,b){var _=+b,tA=Y.getStream(_);if(!tA)throw new Y.ErrnoError(8);var lA={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return tA.path}}};return lA.parent=lA,lA}},u}},{},"/proc/self/fd")},createStandardStreams:function(){N.stdin?Y.createDevice("/dev","stdin",N.stdin):Y.symlink("/dev/tty","/dev/stdin"),N.stdout?Y.createDevice("/dev","stdout",null,N.stdout):Y.symlink("/dev/tty","/dev/stdout"),N.stderr?Y.createDevice("/dev","stderr",null,N.stderr):Y.symlink("/dev/tty1","/dev/stderr"),Y.open("/dev/stdin",0),Y.open("/dev/stdout",1),Y.open("/dev/stderr",1)},ensureErrnoError:function(){Y.ErrnoError||(Y.ErrnoError=function(l,u){this.node=u,this.setErrno=function(M){this.errno=M},this.setErrno(l),this.message="FS error"},Y.ErrnoError.prototype=new Error,Y.ErrnoError.prototype.constructor=Y.ErrnoError,[44].forEach(function(l){Y.genericErrors[l]=new Y.ErrnoError(l),Y.genericErrors[l].stack="<generic error, no stack>"}))},staticInit:function(){Y.ensureErrnoError(),Y.nameTable=new Array(4096),Y.mount(gg,{},"/"),Y.createDefaultDirectories(),Y.createDefaultDevices(),Y.createSpecialDirectories(),Y.filesystems={MEMFS:gg}},init:function(l,u,M){Y.init.initialized=!0,Y.ensureErrnoError(),N.stdin=l||N.stdin,N.stdout=u||N.stdout,N.stderr=M||N.stderr,Y.createStandardStreams()},quit:function(){Y.init.initialized=!1;for(var l=0;l<Y.streams.length;l++){var u=Y.streams[l];u&&Y.close(u)}},getMode:function(l,u){var M=0;return l&&(M|=365),u&&(M|=146),M},findObject:function(l,u){var M=Y.analyzePath(l,u);return M.exists?M.object:null},analyzePath:function(l,u){try{l=(b=Y.lookupPath(l,{follow:!u})).path}catch{}var M={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var b=Y.lookupPath(l,{parent:!0});M.parentExists=!0,M.parentPath=b.path,M.parentObject=b.node,M.name=fg.basename(l),b=Y.lookupPath(l,{follow:!u}),M.exists=!0,M.path=b.path,M.object=b.node,M.name=b.node.name,M.isRoot=b.path==="/"}catch(_){M.error=_.errno}return M},createPath:function(l,u,M,b){l=typeof l=="string"?l:Y.getPath(l);for(var _=u.split("/").reverse();_.length;){var tA=_.pop();if(tA){var lA=fg.join2(l,tA);try{Y.mkdir(lA)}catch{}l=lA}}return lA},createFile:function(l,u,M,b,_){var tA=fg.join2(typeof l=="string"?l:Y.getPath(l),u),lA=Y.getMode(b,_);return Y.create(tA,lA)},createDataFile:function(l,u,M,b,_,tA){var lA=u;l&&(l=typeof l=="string"?l:Y.getPath(l),lA=u?fg.join2(l,u):l);var wA=Y.getMode(b,_),KA=Y.create(lA,wA);if(M){if(typeof M=="string"){for(var jA=new Array(M.length),Ut=0,bt=M.length;Ut<bt;++Ut)jA[Ut]=M.charCodeAt(Ut);M=jA}Y.chmod(KA,146|wA);var Bt=Y.open(KA,577);Y.write(Bt,M,0,M.length,0,tA),Y.close(Bt),Y.chmod(KA,wA)}return KA},createDevice:function(l,u,M,b){var _=fg.join2(typeof l=="string"?l:Y.getPath(l),u),tA=Y.getMode(!!M,!!b);Y.createDevice.major||(Y.createDevice.major=64);var lA=Y.makedev(Y.createDevice.major++,0);return Y.registerDevice(lA,{open:function(wA){wA.seekable=!1},close:function(wA){b&&b.buffer&&b.buffer.length&&b(10)},read:function(wA,KA,jA,Ut,bt){for(var Bt=0,Yt=0;Yt<Ut;Yt++){var St;try{St=M()}catch{throw new Y.ErrnoError(29)}if(St===void 0&&Bt===0)throw new Y.ErrnoError(6);if(St==null)break;Bt++,KA[jA+Yt]=St}return Bt&&(wA.node.timestamp=Date.now()),Bt},write:function(wA,KA,jA,Ut,bt){for(var Bt=0;Bt<Ut;Bt++)try{b(KA[jA+Bt])}catch{throw new Y.ErrnoError(29)}return Ut&&(wA.node.timestamp=Date.now()),Bt}}),Y.mkdev(_,tA,lA)},forceLoadFile:function(l){if(l.isDevice||l.isFolder||l.link||l.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!yA)throw new Error("Cannot load without read() or XMLHttpRequest.");try{l.contents=qn(yA(l.url),!0),l.usedBytes=l.contents.length}catch{throw new Y.ErrnoError(29)}},createLazyFile:function(l,u,M,b,_){function tA(){this.lengthKnown=!1,this.chunks=[]}if(tA.prototype.get=function(bt){if(!(bt>this.length-1||bt<0)){var Bt=bt%this.chunkSize,Yt=bt/this.chunkSize|0;return this.getter(Yt)[Bt]}},tA.prototype.setDataGetter=function(bt){this.getter=bt},tA.prototype.cacheLength=function(){var bt=new XMLHttpRequest;if(bt.open("HEAD",M,!1),bt.send(null),!(bt.status>=200&&bt.status<300||bt.status===304))throw new Error("Couldn't load "+M+". Status: "+bt.status);var Bt,Yt=Number(bt.getResponseHeader("Content-length")),St=(Bt=bt.getResponseHeader("Accept-Ranges"))&&Bt==="bytes",Ig=(Bt=bt.getResponseHeader("Content-Encoding"))&&Bt==="gzip",Ze=1048576;St||(Ze=Yt);var lg=this;lg.setDataGetter(function(Et){var ae=Et*Ze,Jg=(Et+1)*Ze-1;if(Jg=Math.min(Jg,Yt-1),lg.chunks[Et]===void 0&&(lg.chunks[Et]=function(Kg,mI){if(Kg>mI)throw new Error("invalid range ("+Kg+", "+mI+") or no bytes requested!");if(mI>Yt-1)throw new Error("only "+Yt+" bytes available! programmer error!");var oI=new XMLHttpRequest;if(oI.open("GET",M,!1),Yt!==Ze&&oI.setRequestHeader("Range","bytes="+Kg+"-"+mI),oI.responseType="arraybuffer",oI.overrideMimeType&&oI.overrideMimeType("text/plain; charset=x-user-defined"),oI.send(null),!(oI.status>=200&&oI.status<300||oI.status===304))throw new Error("Couldn't load "+M+". Status: "+oI.status);return oI.response!==void 0?new Uint8Array(oI.response||[]):qn(oI.responseText||"",!0)}(ae,Jg)),lg.chunks[Et]===void 0)throw new Error("doXHR failed!");return lg.chunks[Et]}),!Ig&&Yt||(Ze=Yt=1,Yt=this.getter(0).length,Ze=Yt,ug("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Yt,this._chunkSize=Ze,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!Gt)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lA=new tA;Object.defineProperties(lA,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var wA={isDevice:!1,contents:lA}}else wA={isDevice:!1,url:M};var KA=Y.createFile(l,u,wA,b,_);wA.contents?KA.contents=wA.contents:wA.url&&(KA.contents=null,KA.url=wA.url),Object.defineProperties(KA,{usedBytes:{get:function(){return this.contents.length}}});var jA={};function Ut(bt,Bt,Yt,St,Ig){var Ze=bt.node.contents;if(Ig>=Ze.length)return 0;var lg=Math.min(Ze.length-Ig,St);if(Ze.slice)for(var Et=0;Et<lg;Et++)Bt[Yt+Et]=Ze[Ig+Et];else for(Et=0;Et<lg;Et++)Bt[Yt+Et]=Ze.get(Ig+Et);return lg}return Object.keys(KA.stream_ops).forEach(function(bt){var Bt=KA.stream_ops[bt];jA[bt]=function(){return Y.forceLoadFile(KA),Bt.apply(null,arguments)}}),jA.read=function(bt,Bt,Yt,St,Ig){return Y.forceLoadFile(KA),Ut(bt,Bt,Yt,St,Ig)},jA.mmap=function(bt,Bt,Yt,St,Ig){Y.forceLoadFile(KA);var Ze=FQ();if(!Ze)throw new Y.ErrnoError(48);return Ut(bt,tI,Ze,Bt,Yt),{ptr:Ze,allocated:!0}},KA.stream_ops=jA,KA},createPreloadedFile:function(l,u,M,b,_,tA,lA,wA,KA,jA){var Ut=u?ji.resolve(fg.join2(l,u)):l;function bt(Bt){function Yt(St){jA&&jA(),wA||Y.createDataFile(l,u,St,b,_,KA),tA&&tA(),Tn()}Browser.handledByPreloadPlugin(Bt,Ut,Yt,function(){lA&&lA(),Tn()})||Yt(Bt)}rE(),typeof M=="string"?function(Bt,Yt,St,Ig){var Ze="al "+Bt;SA(Bt,function(lg){vg(lg,'Loading data file "'+Bt+'" failed (no arrayBuffer).'),bt(new Uint8Array(lg)),Ze&&Tn()},function(lg){if(!St)throw'Loading data file "'+Bt+'" failed.';St()}),Ze&&rE()}(M,0,lA):bt(M)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(l,u,M){u=u||function(){},M=M||function(){};var b=Y.indexedDB();try{var _=b.open(Y.DB_NAME(),Y.DB_VERSION)}catch(tA){return M(tA)}_.onupgradeneeded=function(){ug("creating db"),_.result.createObjectStore(Y.DB_STORE_NAME)},_.onsuccess=function(){var tA=_.result.transaction([Y.DB_STORE_NAME],"readwrite"),lA=tA.objectStore(Y.DB_STORE_NAME),wA=0,KA=0,jA=l.length;function Ut(){KA==0?u():M()}l.forEach(function(bt){var Bt=lA.put(Y.analyzePath(bt).object.contents,bt);Bt.onsuccess=function(){++wA+KA==jA&&Ut()},Bt.onerror=function(){KA++,wA+KA==jA&&Ut()}}),tA.onerror=M},_.onerror=M},loadFilesFromDB:function(l,u,M){u=u||function(){},M=M||function(){};var b=Y.indexedDB();try{var _=b.open(Y.DB_NAME(),Y.DB_VERSION)}catch(tA){return M(tA)}_.onupgradeneeded=M,_.onsuccess=function(){var tA=_.result;try{var lA=tA.transaction([Y.DB_STORE_NAME],"readonly")}catch(Bt){return void M(Bt)}var wA=lA.objectStore(Y.DB_STORE_NAME),KA=0,jA=0,Ut=l.length;function bt(){jA==0?u():M()}l.forEach(function(Bt){var Yt=wA.get(Bt);Yt.onsuccess=function(){Y.analyzePath(Bt).exists&&Y.unlink(Bt),Y.createDataFile(fg.dirname(Bt),fg.basename(Bt),Yt.result,!0,!0,!0),++KA+jA==Ut&&bt()},Yt.onerror=function(){jA++,KA+jA==Ut&&bt()}}),lA.onerror=M},_.onerror=M}},CI={DEFAULT_POLLMASK:5,calculateAt:function(l,u,M){if(fg.isAbs(u))return u;var b;if(b=l===-100?Y.cwd():CI.getStreamFromFD(l).path,u.length==0){if(!M)throw new Y.ErrnoError(44);return b}return fg.join2(b,u)},doStat:function(l,u,M){try{var b=l(u)}catch(_){if(_&&_.node&&fg.normalize(u)!==fg.normalize(Y.getPath(_.node)))return-54;throw _}return we[M>>2]=b.dev,we[M+8>>2]=b.ino,we[M+12>>2]=b.mode,Dg[M+16>>2]=b.nlink,we[M+20>>2]=b.uid,we[M+24>>2]=b.gid,we[M+28>>2]=b.rdev,BI=[b.size>>>0,(sg=b.size,+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[M+40>>2]=BI[0],we[M+44>>2]=BI[1],we[M+48>>2]=4096,we[M+52>>2]=b.blocks,BI=[Math.floor(b.atime.getTime()/1e3)>>>0,(sg=Math.floor(b.atime.getTime()/1e3),+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[M+56>>2]=BI[0],we[M+60>>2]=BI[1],Dg[M+64>>2]=0,BI=[Math.floor(b.mtime.getTime()/1e3)>>>0,(sg=Math.floor(b.mtime.getTime()/1e3),+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[M+72>>2]=BI[0],we[M+76>>2]=BI[1],Dg[M+80>>2]=0,BI=[Math.floor(b.ctime.getTime()/1e3)>>>0,(sg=Math.floor(b.ctime.getTime()/1e3),+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[M+88>>2]=BI[0],we[M+92>>2]=BI[1],Dg[M+96>>2]=0,BI=[b.ino>>>0,(sg=b.ino,+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[M+104>>2]=BI[0],we[M+108>>2]=BI[1],0},doMsync:function(l,u,M,b,_){var tA=dI.slice(l,l+M);Y.msync(u,tA,_,M,b)},varargs:void 0,get:function(){return CI.varargs+=4,we[CI.varargs-4>>2]},getStr:function(l){return Yn(l)},getStreamFromFD:function(l){var u=Y.getStream(l);if(!u)throw new Y.ErrnoError(8);return u}},_n={};function NQ(l){for(;l.length;){var u=l.pop();l.pop()(u)}}function VC(l){return this.fromWireType(we[l>>2])}var lC={},_B={},Wn={};function ZC(l){if(l===void 0)return"_unknown";var u=(l=l.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return u>=48&&u<=57?"_"+l:l}function Pn(l,u){return l=ZC(l),new Function("body","return function "+l+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(u)}function On(l,u){var M=Pn(u,function(b){this.name=u,this.message=b;var _=new Error(b).stack;_!==void 0&&(this.stack=this.toString()+`
`+_.replace(/^Error(:[^\n]*)?\n/,""))});return M.prototype=Object.create(l.prototype),M.prototype.constructor=M,M.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},M}var UQ=void 0;function hi(l){throw new UQ(l)}function pg(l,u,M){function b(wA){var KA=M(wA);KA.length!==l.length&&hi("Mismatched type converter count");for(var jA=0;jA<l.length;++jA)$i(l[jA],KA[jA])}l.forEach(function(wA){Wn[wA]=u});var _=new Array(u.length),tA=[],lA=0;u.forEach(function(wA,KA){_B.hasOwnProperty(wA)?_[KA]=_B[wA]:(tA.push(wA),lC.hasOwnProperty(wA)||(lC[wA]=[]),lC[wA].push(function(){_[KA]=_B[wA],++lA===tA.length&&b(_)}))}),tA.length===0&&b(_)}function cE(l){switch(l){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+l)}}var yt=void 0;function mg(l){for(var u="",M=l;dI[M];)u+=yt[dI[M++]];return u}var fB=void 0;function wg(l){throw new fB(l)}function $i(l,u){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in u))throw new TypeError("registerType registeredInstance requires argPackAdvance");var b=u.name;if(l||wg('type "'+b+'" must have a positive integer typeid pointer'),_B.hasOwnProperty(l)){if(M.ignoreDuplicateRegistrations)return;wg("Cannot register type '"+b+"' twice")}if(_B[l]=u,delete Wn[l],lC.hasOwnProperty(l)){var _=lC[l];delete lC[l],_.forEach(function(tA){return tA()})}}function pB(l){wg(l.$$.ptrType.registeredClass.name+" instance already deleted")}var WB=!1;function TI(l){}function QA(l){l.count.value-=1,l.count.value===0&&function(u){u.smartPtr?u.smartPtrType.rawDestructor(u.smartPtr):u.ptrType.registeredClass.rawDestructor(u.ptr)}(l)}function Vn(l,u,M){if(u===M)return l;if(M.baseClass===void 0)return null;var b=Vn(l,u,M.baseClass);return b===null?null:M.downcast(b)}var lE={},Ji=[];function XC(){for(;Ji.length;){var l=Ji.pop();l.$$.deleteScheduled=!1,l.delete()}}var zC=void 0,jC={};function Mi(l,u){return u.ptrType&&u.ptr||hi("makeClassHandle requires ptr and ptrType"),!!u.smartPtrType!=!!u.smartPtr&&hi("Both smartPtrType and smartPtr must be specified"),u.count={value:1},$C(Object.create(l,{$$:{value:u}}))}function $C(l){return typeof FinalizationRegistry>"u"?($C=function(u){return u},l):(WB=new FinalizationRegistry(function(u){QA(u.$$)}),$C=function(u){var M=u.$$;if(M.smartPtr){var b={$$:M};WB.register(u,b,u)}return u},TI=function(u){return WB.unregister(u)},$C(l))}function wB(){}function kQ(l,u,M){if(l[u].overloadTable===void 0){var b=l[u];l[u]=function(){return l[u].overloadTable.hasOwnProperty(arguments.length)||wg("Function '"+M+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+l[u].overloadTable+")!"),l[u].overloadTable[arguments.length].apply(this,arguments)},l[u].overloadTable=[],l[u].overloadTable[b.argCount]=b}}function LQ(l,u,M){N.hasOwnProperty(l)?((M===void 0||N[l].overloadTable!==void 0&&N[l].overloadTable[M]!==void 0)&&wg("Cannot register public name '"+l+"' twice"),kQ(N,l,l),N.hasOwnProperty(M)&&wg("Cannot register multiple overloads of a function with the same number of arguments ("+M+")!"),N[l].overloadTable[M]=u):(N[l]=u,M!==void 0&&(N[l].numArguments=M))}function NI(l,u,M,b,_,tA,lA,wA){this.name=l,this.constructor=u,this.instancePrototype=M,this.rawDestructor=b,this.baseClass=_,this.getActualType=tA,this.upcast=lA,this.downcast=wA,this.pureVirtualFunctions=[]}function yB(l,u,M){for(;u!==M;)u.upcast||wg("Expected null or instance of "+M.name+", got an instance of "+u.name),l=u.upcast(l),u=u.baseClass;return l}function dE(l,u){if(u===null)return this.isReference&&wg("null is not a valid "+this.name),0;u.$$||wg('Cannot pass "'+MB(u)+'" as a '+this.name),u.$$.ptr||wg("Cannot pass deleted object as a pointer of type "+this.name);var M=u.$$.ptrType.registeredClass;return yB(u.$$.ptr,M,this.registeredClass)}function PB(l,u){var M;if(u===null)return this.isReference&&wg("null is not a valid "+this.name),this.isSmartPointer?(M=this.rawConstructor(),l!==null&&l.push(this.rawDestructor,M),M):0;u.$$||wg('Cannot pass "'+MB(u)+'" as a '+this.name),u.$$.ptr||wg("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&u.$$.ptrType.isConst&&wg("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);var b=u.$$.ptrType.registeredClass;if(M=yB(u.$$.ptr,b,this.registeredClass),this.isSmartPointer)switch(u.$$.smartPtr===void 0&&wg("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:u.$$.smartPtrType===this?M=u.$$.smartPtr:wg("Cannot convert argument of type "+(u.$$.smartPtrType?u.$$.smartPtrType.name:u.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:M=u.$$.smartPtr;break;case 2:if(u.$$.smartPtrType===this)M=u.$$.smartPtr;else{var _=u.clone();M=this.rawShare(M,eB.toHandle(function(){_.delete()})),l!==null&&l.push(this.rawDestructor,M)}break;default:wg("Unsupporting sharing policy")}return M}function uE(l,u){if(u===null)return this.isReference&&wg("null is not a valid "+this.name),0;u.$$||wg('Cannot pass "'+MB(u)+'" as a '+this.name),u.$$.ptr||wg("Cannot pass deleted object as a pointer of type "+this.name),u.$$.ptrType.isConst&&wg("Cannot convert argument of type "+u.$$.ptrType.name+" to parameter type "+this.name);var M=u.$$.ptrType.registeredClass;return yB(u.$$.ptr,M,this.registeredClass)}function AB(l,u,M,b,_,tA,lA,wA,KA,jA,Ut){this.name=l,this.registeredClass=u,this.isReference=M,this.isConst=b,this.isSmartPointer=_,this.pointeeType=tA,this.sharingPolicy=lA,this.rawGetPointee=wA,this.rawConstructor=KA,this.rawShare=jA,this.rawDestructor=Ut,_||u.baseClass!==void 0?this.toWireType=PB:b?(this.toWireType=dE,this.destructorFunction=null):(this.toWireType=uE,this.destructorFunction=null)}function AI(l,u,M){N.hasOwnProperty(l)||hi("Replacing nonexistant public symbol"),N[l].overloadTable!==void 0&&M!==void 0?N[l].overloadTable[M]=u:(N[l]=u,N[l].argCount=M)}function Eg(l){return RQ.get(l)}function mi(l,u,M){return l.includes("j")?function(b,_,tA){var lA=N["dynCall_"+b];return tA&&tA.length?lA.apply(null,[_].concat(tA)):lA.call(null,_)}(l,u,M):Eg(u).apply(null,M)}function ZI(l,u){var M,b,_,tA=(l=mg(l)).includes("j")?(M=l,b=u,_=[],function(){return _.length=0,Object.assign(_,arguments),mi(M,b,_)}):Eg(u);return typeof tA!="function"&&wg("unknown function pointer with signature "+l+": "+u),tA}var xQ=void 0;function Zn(l){var u=CB(l),M=mg(u);return BB(u),M}function Xn(l,u){var M=[],b={};throw u.forEach(function _(tA){b[tA]||_B[tA]||(Wn[tA]?Wn[tA].forEach(_):(M.push(tA),b[tA]=!0))}),new xQ(l+": "+M.map(Zn).join([", "]))}function DE(l,u){for(var M=[],b=0;b<l;b++)M.push(Dg[u+4*b>>2]);return M}function tB(l,u,M,b,_){var tA=u.length;tA<2&&wg("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var lA=u[1]!==null&&M!==null,wA=!1,KA=1;KA<u.length;++KA)if(u[KA]!==null&&u[KA].destructorFunction===void 0){wA=!0;break}var jA=u[0].name!=="void",Ut="",bt="";for(KA=0;KA<tA-2;++KA)Ut+=(KA!==0?", ":"")+"arg"+KA,bt+=(KA!==0?", ":"")+"arg"+KA+"Wired";var Bt="return function "+ZC(l)+"("+Ut+`) {
if (arguments.length !== `+(tA-2)+`) {
throwBindingError('function `+l+" called with ' + arguments.length + ' arguments, expected "+(tA-2)+` args!');
}
`;wA&&(Bt+=`var destructors = [];
`);var Yt=wA?"destructors":"null",St=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Ig=[wg,b,_,NQ,u[0],u[1]];for(lA&&(Bt+="var thisWired = classParam.toWireType("+Yt+`, this);
`),KA=0;KA<tA-2;++KA)Bt+="var arg"+KA+"Wired = argType"+KA+".toWireType("+Yt+", arg"+KA+"); // "+u[KA+2].name+`
`,St.push("argType"+KA),Ig.push(u[KA+2]);if(lA&&(bt="thisWired"+(bt.length>0?", ":"")+bt),Bt+=(jA?"var rv = ":"")+"invoker(fn"+(bt.length>0?", ":"")+bt+`);
`,wA)Bt+=`runDestructors(destructors);
`;else for(KA=lA?1:2;KA<u.length;++KA){var Ze=KA===1?"thisWired":"arg"+(KA-2)+"Wired";u[KA].destructorFunction!==null&&(Bt+=Ze+"_dtor("+Ze+"); // "+u[KA].name+`
`,St.push(Ze+"_dtor"),Ig.push(u[KA].destructorFunction))}return jA&&(Bt+=`var ret = retType.fromWireType(rv);
return ret;
`),Bt+=`}
`,St.push(Bt),function(lg,Et){if(!(lg instanceof Function))throw new TypeError("new_ called with constructor type "+iA(lg)+" which is not a function");var ae=Pn(lg.name||"unknownFunctionName",function(){});ae.prototype=lg.prototype;var Jg=new ae,Kg=lg.apply(Jg,Et);return Kg instanceof Object?Kg:Jg}(Function,St).apply(null,Ig)}var Ri=[],MI=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function zn(l){l>4&&--MI[l].refcount==0&&(MI[l]=void 0,Ri.push(l))}var eB={toValue:function(l){return l||wg("Cannot use deleted val. handle = "+l),MI[l].value},toHandle:function(l){switch(l){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var u=Ri.length?Ri.pop():MI.length;return MI[u]={refcount:1,value:l},u}}};function MB(l){if(l===null)return"null";var u=iA(l);return u==="object"||u==="array"||u==="function"?l.toString():""+l}function dC(l,u){switch(u){case 2:return function(M){return this.fromWireType(yQ[M>>2])};case 3:return function(M){return this.fromWireType(QE[M>>3])};default:throw new TypeError("Unknown float type: "+l)}}function mB(l,u,M){switch(u){case 0:return M?function(b){return tI[b]}:function(b){return dI[b]};case 1:return M?function(b){return vI[b>>1]}:function(b){return YB[b>>1]};case 2:return M?function(b){return we[b>>2]}:function(b){return Dg[b>>2]};default:throw new TypeError("Unknown integer type: "+l)}}var gB=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function OB(l,u){for(var M=l,b=M>>1,_=b+u/2;!(b>=_)&&YB[b];)++b;if((M=b<<1)-l>32&&gB)return gB.decode(dI.subarray(l,M));for(var tA="",lA=0;!(lA>=u/2);++lA){var wA=vI[l+2*lA>>1];if(wA==0)break;tA+=String.fromCharCode(wA)}return tA}function An(l,u,M){if(M===void 0&&(M=2147483647),M<2)return 0;for(var b=u,_=(M-=2)<2*l.length?M/2:l.length,tA=0;tA<_;++tA){var lA=l.charCodeAt(tA);vI[u>>1]=lA,u+=2}return vI[u>>1]=0,u-b}function jn(l){return 2*l.length}function $n(l,u){for(var M=0,b="";!(M>=u/4);){var _=we[l+4*M>>2];if(_==0)break;if(++M,_>=65536){var tA=_-65536;b+=String.fromCharCode(55296|tA>>10,56320|1023&tA)}else b+=String.fromCharCode(_)}return b}function VB(l,u,M){if(M===void 0&&(M=2147483647),M<4)return 0;for(var b=u,_=b+M-4,tA=0;tA<l.length;++tA){var lA=l.charCodeAt(tA);if(lA>=55296&&lA<=57343&&(lA=65536+((1023&lA)<<10)|1023&l.charCodeAt(++tA)),we[u>>2]=lA,(u+=4)+4>_)break}return we[u>>2]=0,u-b}function fE(l){for(var u=0,M=0;M<l.length;++M){var b=l.charCodeAt(M);b>=55296&&b<=57343&&++M,u+=4}return u}function bQ(l){var u=Hn(l)+1,M=qI(u);return M&&vn(l,tI,M,u),M}var ZB=[];function pE(l){try{return aI.grow(l-ai.byteLength+65535>>>16),mQ(aI.buffer),1}catch{}}var IB={};function gi(){if(!gi.strings){var l={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":iA(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:UA||"./this.program"};for(var u in IB)IB[u]===void 0?delete l[u]:l[u]=IB[u];var M=[];for(var u in l)M.push(u+"="+l[u]);gi.strings=M}return gi.strings}function uC(l){return l%4==0&&(l%100!=0||l%400==0)}var tn=[31,29,31,30,31,30,31,31,30,31,30,31],iB=[31,28,31,30,31,30,31,31,30,31,30,31];function Ao(l,u,M,b){var _=we[b+40>>2],tA={tm_sec:we[b>>2],tm_min:we[b+4>>2],tm_hour:we[b+8>>2],tm_mday:we[b+12>>2],tm_mon:we[b+16>>2],tm_year:we[b+20>>2],tm_wday:we[b+24>>2],tm_yday:we[b+28>>2],tm_isdst:we[b+32>>2],tm_gmtoff:we[b+36>>2],tm_zone:_?Yn(_):""},lA=Yn(M),wA={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var KA in wA)lA=lA.replace(new RegExp(KA,"g"),wA[KA]);var jA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ut=["January","February","March","April","May","June","July","August","September","October","November","December"];function bt(Et,ae,Jg){for(var Kg=typeof Et=="number"?Et.toString():Et||"";Kg.length<ae;)Kg=Jg[0]+Kg;return Kg}function Bt(Et,ae){return bt(Et,ae,"0")}function Yt(Et,ae){function Jg(mI){return mI<0?-1:mI>0?1:0}var Kg;return(Kg=Jg(Et.getFullYear()-ae.getFullYear()))===0&&(Kg=Jg(Et.getMonth()-ae.getMonth()))===0&&(Kg=Jg(Et.getDate()-ae.getDate())),Kg}function St(Et){switch(Et.getDay()){case 0:return new Date(Et.getFullYear()-1,11,29);case 1:return Et;case 2:return new Date(Et.getFullYear(),0,3);case 3:return new Date(Et.getFullYear(),0,2);case 4:return new Date(Et.getFullYear(),0,1);case 5:return new Date(Et.getFullYear()-1,11,31);case 6:return new Date(Et.getFullYear()-1,11,30)}}function Ig(Et){var ae=function(ME,_I){for(var Ii=new Date(ME.getTime());_I>0;){var UI=uC(Ii.getFullYear()),to=Ii.getMonth(),ci=(UI?tn:iB)[to];if(!(_I>ci-Ii.getDate()))return Ii.setDate(Ii.getDate()+_I),Ii;_I-=ci-Ii.getDate()+1,Ii.setDate(1),to<11?Ii.setMonth(to+1):(Ii.setMonth(0),Ii.setFullYear(Ii.getFullYear()+1))}return Ii}(new Date(Et.tm_year+1900,0,1),Et.tm_yday),Jg=new Date(ae.getFullYear(),0,4),Kg=new Date(ae.getFullYear()+1,0,4),mI=St(Jg),oI=St(Kg);return Yt(mI,ae)<=0?Yt(oI,ae)<=0?ae.getFullYear()+1:ae.getFullYear():ae.getFullYear()-1}var Ze={"%a":function(Et){return jA[Et.tm_wday].substring(0,3)},"%A":function(Et){return jA[Et.tm_wday]},"%b":function(Et){return Ut[Et.tm_mon].substring(0,3)},"%B":function(Et){return Ut[Et.tm_mon]},"%C":function(Et){return Bt((Et.tm_year+1900)/100|0,2)},"%d":function(Et){return Bt(Et.tm_mday,2)},"%e":function(Et){return bt(Et.tm_mday,2," ")},"%g":function(Et){return Ig(Et).toString().substring(2)},"%G":function(Et){return Ig(Et)},"%H":function(Et){return Bt(Et.tm_hour,2)},"%I":function(Et){var ae=Et.tm_hour;return ae==0?ae=12:ae>12&&(ae-=12),Bt(ae,2)},"%j":function(Et){return Bt(Et.tm_mday+function(ae,Jg){for(var Kg=0,mI=0;mI<=Jg;Kg+=ae[mI++]);return Kg}(uC(Et.tm_year+1900)?tn:iB,Et.tm_mon-1),3)},"%m":function(Et){return Bt(Et.tm_mon+1,2)},"%M":function(Et){return Bt(Et.tm_min,2)},"%n":function(){return`
`},"%p":function(Et){return Et.tm_hour>=0&&Et.tm_hour<12?"AM":"PM"},"%S":function(Et){return Bt(Et.tm_sec,2)},"%t":function(){return"	"},"%u":function(Et){return Et.tm_wday||7},"%U":function(Et){var ae=Et.tm_yday+7-Et.tm_wday;return Bt(Math.floor(ae/7),2)},"%V":function(Et){var ae=Math.floor((Et.tm_yday+7-(Et.tm_wday+6)%7)/7);if((Et.tm_wday+371-Et.tm_yday-2)%7<=2&&ae++,ae){if(ae==53){var Jg=(Et.tm_wday+371-Et.tm_yday)%7;Jg==4||Jg==3&&uC(Et.tm_year)||(ae=1)}}else{ae=52;var Kg=(Et.tm_wday+7-Et.tm_yday-1)%7;(Kg==4||Kg==5&&uC(Et.tm_year%400-1))&&ae++}return Bt(ae,2)},"%w":function(Et){return Et.tm_wday},"%W":function(Et){var ae=Et.tm_yday+7-(Et.tm_wday+6)%7;return Bt(Math.floor(ae/7),2)},"%y":function(Et){return(Et.tm_year+1900).toString().substring(2)},"%Y":function(Et){return Et.tm_year+1900},"%z":function(Et){var ae=Et.tm_gmtoff,Jg=ae>=0;return ae=(ae=Math.abs(ae)/60)/60*100+ae%60,(Jg?"+":"-")+("0000"+ae).slice(-4)},"%Z":function(Et){return Et.tm_zone},"%%":function(){return"%"}};for(var KA in lA=lA.replace(/%%/g,"\0\0"),Ze)lA.includes(KA)&&(lA=lA.replace(new RegExp(KA,"g"),Ze[KA](tA)));var lg=qn(lA=lA.replace(/\0\0/g,"%"),!1);return lg.length>u?0:(function(Et,ae){tI.set(Et,ae)}(lg,l),lg.length-1)}var en=function(l,u,M,b){l||(l=this),this.parent=l,this.mount=l.mount,this.mounted=null,this.id=Y.nextInode++,this.name=u,this.mode=M,this.node_ops={},this.stream_ops={},this.rdev=b};Object.defineProperties(en.prototype,{read:{get:function(){return(365&this.mode)==365},set:function(l){l?this.mode|=365:this.mode&=-366}},write:{get:function(){return(146&this.mode)==146},set:function(l){l?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return Y.isDir(this.mode)}},isDevice:{get:function(){return Y.isChrdev(this.mode)}}}),Y.FSNode=en,Y.staticInit(),UQ=N.InternalError=On(Error,"InternalError"),function(){for(var l=new Array(256),u=0;u<256;++u)l[u]=String.fromCharCode(u);yt=l}(),fB=N.BindingError=On(Error,"BindingError"),wB.prototype.isAliasOf=function(l){if(!(this instanceof wB)||!(l instanceof wB))return!1;for(var u=this.$$.ptrType.registeredClass,M=this.$$.ptr,b=l.$$.ptrType.registeredClass,_=l.$$.ptr;u.baseClass;)M=u.upcast(M),u=u.baseClass;for(;b.baseClass;)_=b.upcast(_),b=b.baseClass;return u===b&&M===_},wB.prototype.clone=function(){if(this.$$.ptr||pB(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l,u=$C(Object.create(Object.getPrototypeOf(this),{$$:{value:(l=this.$$,{count:l.count,deleteScheduled:l.deleteScheduled,preservePointerOnDelete:l.preservePointerOnDelete,ptr:l.ptr,ptrType:l.ptrType,smartPtr:l.smartPtr,smartPtrType:l.smartPtrType})}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},wB.prototype.delete=function(){this.$$.ptr||pB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wg("Object already scheduled for deletion"),TI(this),QA(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},wB.prototype.isDeleted=function(){return!this.$$.ptr},wB.prototype.deleteLater=function(){return this.$$.ptr||pB(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wg("Object already scheduled for deletion"),Ji.push(this),Ji.length===1&&zC&&zC(XC),this.$$.deleteScheduled=!0,this},N.getInheritedInstanceCount=function(){return Object.keys(jC).length},N.getLiveInheritedInstances=function(){var l=[];for(var u in jC)jC.hasOwnProperty(u)&&l.push(jC[u]);return l},N.flushPendingDeletes=XC,N.setDelayFunction=function(l){zC=l,Ji.length&&zC&&zC(XC)},AB.prototype.getPointee=function(l){return this.rawGetPointee&&(l=this.rawGetPointee(l)),l},AB.prototype.destructor=function(l){this.rawDestructor&&this.rawDestructor(l)},AB.prototype.argPackAdvance=8,AB.prototype.readValueFromPointer=VC,AB.prototype.deleteObject=function(l){l!==null&&l.delete()},AB.prototype.fromWireType=function(l){var u=this.getPointee(l);if(!u)return this.destructor(l),null;var M=function(jA,Ut){return Ut=function(bt,Bt){for(Bt===void 0&&wg("ptr should not be undefined");bt.baseClass;)Bt=bt.upcast(Bt),bt=bt.baseClass;return Bt}(jA,Ut),jC[Ut]}(this.registeredClass,u);if(M!==void 0){if(M.$$.count.value===0)return M.$$.ptr=u,M.$$.smartPtr=l,M.clone();var b=M.clone();return this.destructor(l),b}function _(){return this.isSmartPointer?Mi(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:u,smartPtrType:this,smartPtr:l}):Mi(this.registeredClass.instancePrototype,{ptrType:this,ptr:l})}var tA,lA=this.registeredClass.getActualType(u),wA=lE[lA];if(!wA)return _.call(this);tA=this.isConst?wA.constPointerType:wA.pointerType;var KA=Vn(u,this.registeredClass,tA.registeredClass);return KA===null?_.call(this):this.isSmartPointer?Mi(tA.registeredClass.instancePrototype,{ptrType:tA,ptr:KA,smartPtrType:this,smartPtr:l}):Mi(tA.registeredClass.instancePrototype,{ptrType:tA,ptr:KA})},xQ=N.UnboundTypeError=On(Error,"UnboundTypeError"),N.count_emval_handles=function(){for(var l=0,u=5;u<MI.length;++u)MI[u]!==void 0&&++l;return l},N.get_first_emval=function(){for(var l=5;l<MI.length;++l)if(MI[l]!==void 0)return MI[l];return null};var wE=typeof atob=="function"?atob:function(l){var u,M,b,_,tA,lA,wA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",KA="",jA=0;l=l.replace(/[^A-Za-z0-9\+\/\=]/g,"");do u=wA.indexOf(l.charAt(jA++))<<2|(_=wA.indexOf(l.charAt(jA++)))>>4,M=(15&_)<<4|(tA=wA.indexOf(l.charAt(jA++)))>>2,b=(3&tA)<<6|(lA=wA.indexOf(l.charAt(jA++))),KA+=String.fromCharCode(u),tA!==64&&(KA+=String.fromCharCode(M)),lA!==64&&(KA+=String.fromCharCode(b));while(jA<l.length);return KA};function Ki(l){if(wi(l))return function(u){if(typeof Xt=="boolean"&&Xt){var M=Buffer.from(u,"base64");return new Uint8Array(M.buffer,M.byteOffset,M.byteLength)}try{for(var b=wE(u),_=new Uint8Array(b.length),tA=0;tA<b.length;++tA)_[tA]=b.charCodeAt(tA);return _}catch{throw new Error("Converting base64 string to bytes failed.")}}(l.slice(OC.length))}var Ve,DC={g:function(l){return qI(l+24)+24},f:function(l,u,M){throw new eI(l).init(u,M),l},o:function(l,u,M){CI.varargs=M;try{var b=CI.getStreamFromFD(l);switch(u){case 0:return(_=CI.get())<0?-28:Y.createStream(b,_).fd;case 1:case 2:case 6:case 7:return 0;case 3:return b.flags;case 4:var _=CI.get();return b.flags|=_,0;case 5:return _=CI.get(),vI[_+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return we[JQ()>>2]=28,-1}}catch(tA){if(Y===void 0||!(tA instanceof Y.ErrnoError))throw tA;return-tA.errno}},G:function(l,u,M){CI.varargs=M;try{var b=CI.getStreamFromFD(l);switch(u){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return b.tty?0:-59;case 21519:if(!b.tty)return-59;var _=CI.get();return we[_>>2]=0,0;case 21520:return b.tty?-28:-59;case 21531:return _=CI.get(),Y.ioctl(b,u,_);default:return-28}}catch(tA){if(Y===void 0||!(tA instanceof Y.ErrnoError))throw tA;return-tA.errno}},H:function(l,u,M,b){CI.varargs=b;try{u=CI.getStr(u),u=CI.calculateAt(l,u);var _=b?CI.get():0;return Y.open(u,M,_).fd}catch(tA){if(Y===void 0||!(tA instanceof Y.ErrnoError))throw tA;return-tA.errno}},R:function(l){var u=_n[l];delete _n[l];var M=u.rawConstructor,b=u.rawDestructor,_=u.fields;pg([l],_.map(function(tA){return tA.getterReturnType}).concat(_.map(function(tA){return tA.setterArgumentType})),function(tA){var lA={};return _.forEach(function(wA,KA){var jA=wA.fieldName,Ut=tA[KA],bt=wA.getter,Bt=wA.getterContext,Yt=tA[KA+_.length],St=wA.setter,Ig=wA.setterContext;lA[jA]={read:function(Ze){return Ut.fromWireType(bt(Bt,Ze))},write:function(Ze,lg){var Et=[];St(Ig,Ze,Yt.toWireType(Et,lg)),NQ(Et)}}}),[{name:u.name,fromWireType:function(wA){var KA={};for(var jA in lA)KA[jA]=lA[jA].read(wA);return b(wA),KA},toWireType:function(wA,KA){for(var jA in lA)if(!(jA in KA))throw new TypeError('Missing field:  "'+jA+'"');var Ut=M();for(jA in lA)lA[jA].write(Ut,KA[jA]);return wA!==null&&wA.push(b,Ut),Ut},argPackAdvance:8,readValueFromPointer:VC,destructorFunction:b}]})},y:function(l,u,M,b,_){},L:function(l,u,M,b,_){var tA=cE(M);$i(l,{name:u=mg(u),fromWireType:function(lA){return!!lA},toWireType:function(lA,wA){return wA?b:_},argPackAdvance:8,readValueFromPointer:function(lA){var wA;if(M===1)wA=tI;else if(M===2)wA=vI;else{if(M!==4)throw new TypeError("Unknown boolean type size: "+u);wA=we}return this.fromWireType(wA[lA>>tA])},destructorFunction:null})},U:function(l,u,M,b,_,tA,lA,wA,KA,jA,Ut,bt,Bt){Ut=mg(Ut),tA=ZI(_,tA),wA&&(wA=ZI(lA,wA)),jA&&(jA=ZI(KA,jA)),Bt=ZI(bt,Bt);var Yt=ZC(Ut);LQ(Yt,function(){Xn("Cannot construct "+Ut+" due to unbound types",[b])}),pg([l,u,M],b?[b]:[],function(St){var Ig,Ze;St=St[0],Ze=b?(Ig=St.registeredClass).instancePrototype:wB.prototype;var lg=Pn(Yt,function(){if(Object.getPrototypeOf(this)!==Et)throw new fB("Use 'new' to construct "+Ut);if(ae.constructor_body===void 0)throw new fB(Ut+" has no accessible constructor");var oI=ae.constructor_body[arguments.length];if(oI===void 0)throw new fB("Tried to invoke ctor of "+Ut+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(ae.constructor_body).toString()+") parameters instead!");return oI.apply(this,arguments)}),Et=Object.create(Ze,{constructor:{value:lg}});lg.prototype=Et;var ae=new NI(Ut,lg,Et,Bt,Ig,tA,wA,jA),Jg=new AB(Ut,ae,!0,!1,!1),Kg=new AB(Ut+"*",ae,!1,!1,!1),mI=new AB(Ut+" const*",ae,!1,!0,!1);return lE[l]={pointerType:Kg,constPointerType:mI},AI(Yt,lg),[Jg,Kg,mI]})},Q:function(l,u,M,b,_,tA){vg(u>0);var lA=DE(u,M);_=ZI(b,_),pg([],[l],function(wA){var KA="constructor "+(wA=wA[0]).name;if(wA.registeredClass.constructor_body===void 0&&(wA.registeredClass.constructor_body=[]),wA.registeredClass.constructor_body[u-1]!==void 0)throw new fB("Cannot register multiple constructors with identical number of parameters ("+(u-1)+") for class '"+wA.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return wA.registeredClass.constructor_body[u-1]=function(){Xn("Cannot construct "+wA.name+" due to unbound types",lA)},pg([],lA,function(jA){return jA.splice(1,0,null),wA.registeredClass.constructor_body[u-1]=tB(KA,jA,null,_,tA),[]}),[]})},h:function(l,u,M,b,_,tA,lA,wA){var KA=DE(M,b);u=mg(u),tA=ZI(_,tA),pg([],[l],function(jA){var Ut=(jA=jA[0]).name+"."+u;function bt(){Xn("Cannot call "+Ut+" due to unbound types",KA)}u.startsWith("@@")&&(u=Symbol[u.substring(2)]),wA&&jA.registeredClass.pureVirtualFunctions.push(u);var Bt=jA.registeredClass.instancePrototype,Yt=Bt[u];return Yt===void 0||Yt.overloadTable===void 0&&Yt.className!==jA.name&&Yt.argCount===M-2?(bt.argCount=M-2,bt.className=jA.name,Bt[u]=bt):(kQ(Bt,u,Ut),Bt[u].overloadTable[M-2]=bt),pg([],KA,function(St){var Ig=tB(Ut,St,jA,tA,lA);return Bt[u].overloadTable===void 0?(Ig.argCount=M-2,Bt[u]=Ig):Bt[u].overloadTable[M-2]=Ig,[]}),[]})},s:function(l,u,M){l=mg(l),pg([],[u],function(b){return b=b[0],N[l]=b.fromWireType(M),[]})},K:function(l,u){$i(l,{name:u=mg(u),fromWireType:function(M){var b=eB.toValue(M);return zn(M),b},toWireType:function(M,b){return eB.toHandle(b)},argPackAdvance:8,readValueFromPointer:VC,destructorFunction:null})},r:function(l,u,M){var b=cE(M);$i(l,{name:u=mg(u),fromWireType:function(_){return _},toWireType:function(_,tA){return tA},argPackAdvance:8,readValueFromPointer:dC(u,b),destructorFunction:null})},d:function(l,u,M,b,_,tA){var lA=DE(u,M);l=mg(l),_=ZI(b,_),LQ(l,function(){Xn("Cannot call "+l+" due to unbound types",lA)},u-1),pg([],lA,function(wA){var KA=[wA[0],null].concat(wA.slice(1));return AI(l,tB(l,KA,null,_,tA),u-1),[]})},e:function(l,u,M,b,_){u=mg(u);var tA=cE(M),lA=function(jA){return jA};if(b===0){var wA=32-8*M;lA=function(jA){return jA<<wA>>>wA}}var KA=u.includes("unsigned");$i(l,{name:u,fromWireType:lA,toWireType:KA?function(jA,Ut){return this.name,Ut>>>0}:function(jA,Ut){return this.name,Ut},argPackAdvance:8,readValueFromPointer:mB(u,tA,b!==0),destructorFunction:null})},c:function(l,u,M){var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][u];function _(tA){var lA=Dg,wA=lA[tA>>=2],KA=lA[tA+1];return new b(ai,KA,wA)}$i(l,{name:M=mg(M),fromWireType:_,argPackAdvance:8,readValueFromPointer:_},{ignoreDuplicateRegistrations:!0})},q:function(l,u){var M=(u=mg(u))==="std::string";$i(l,{name:u,fromWireType:function(b){var _,tA=Dg[b>>2],lA=b+4;if(M)for(var wA=lA,KA=0;KA<=tA;++KA){var jA=lA+KA;if(KA==tA||dI[jA]==0){var Ut=Yn(wA,jA-wA);_===void 0?_=Ut:(_+=String.fromCharCode(0),_+=Ut),wA=jA+1}}else{var bt=new Array(tA);for(KA=0;KA<tA;++KA)bt[KA]=String.fromCharCode(dI[lA+KA]);_=bt.join("")}return BB(b),_},toWireType:function(b,_){var tA;_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var lA=typeof _=="string";lA||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array||wg("Cannot pass non-string to std::string"),tA=M&&lA?Hn(_):_.length;var wA=qI(4+tA+1),KA=wA+4;if(Dg[wA>>2]=tA,M&&lA)vn(_,dI,KA,tA+1);else if(lA)for(var jA=0;jA<tA;++jA){var Ut=_.charCodeAt(jA);Ut>255&&(BB(KA),wg("String has UTF-16 code units that do not fit in 8 bits")),dI[KA+jA]=Ut}else for(jA=0;jA<tA;++jA)dI[KA+jA]=_[jA];return b!==null&&b.push(BB,wA),wA},argPackAdvance:8,readValueFromPointer:VC,destructorFunction:function(b){BB(b)}})},l:function(l,u,M){var b,_,tA,lA,wA;M=mg(M),u===2?(b=OB,_=An,lA=jn,tA=function(){return YB},wA=1):u===4&&(b=$n,_=VB,lA=fE,tA=function(){return Dg},wA=2),$i(l,{name:M,fromWireType:function(KA){for(var jA,Ut=Dg[KA>>2],bt=tA(),Bt=KA+4,Yt=0;Yt<=Ut;++Yt){var St=KA+4+Yt*u;if(Yt==Ut||bt[St>>wA]==0){var Ig=b(Bt,St-Bt);jA===void 0?jA=Ig:(jA+=String.fromCharCode(0),jA+=Ig),Bt=St+u}}return BB(KA),jA},toWireType:function(KA,jA){typeof jA!="string"&&wg("Cannot pass non-string to C++ string type "+M);var Ut=lA(jA),bt=qI(4+Ut+u);return Dg[bt>>2]=Ut>>wA,_(jA,bt+4,Ut+u),KA!==null&&KA.push(BB,bt),bt},argPackAdvance:8,readValueFromPointer:VC,destructorFunction:function(KA){BB(KA)}})},T:function(l,u,M,b,_,tA){_n[l]={name:mg(u),rawConstructor:ZI(M,b),rawDestructor:ZI(_,tA),fields:[]}},S:function(l,u,M,b,_,tA,lA,wA,KA,jA){_n[l].fields.push({fieldName:mg(u),getterReturnType:M,getter:ZI(b,_),getterContext:tA,setterArgumentType:lA,setter:ZI(wA,KA),setterContext:jA})},M:function(l,u){$i(l,{isVoid:!0,name:u=mg(u),argPackAdvance:0,fromWireType:function(){},toWireType:function(M,b){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:zn,P:function(l){l>4&&(MI[l].refcount+=1)},N:function(l,u){var M,b;(b=_B[M=l])===void 0&&wg("_emval_take_value has unknown type "+Zn(M));var _=(l=b).readValueFromPointer(u);return eB.toHandle(_)},I:function(l,u){var M,b=new Date(1e3*(Dg[(M=l)>>2]+4294967296*we[M+4>>2]));we[u>>2]=b.getSeconds(),we[u+4>>2]=b.getMinutes(),we[u+8>>2]=b.getHours(),we[u+12>>2]=b.getDate(),we[u+16>>2]=b.getMonth(),we[u+20>>2]=b.getFullYear()-1900,we[u+24>>2]=b.getDay();var _=new Date(b.getFullYear(),0,1),tA=(b.getTime()-_.getTime())/864e5|0;we[u+28>>2]=tA,we[u+36>>2]=-60*b.getTimezoneOffset();var lA=new Date(b.getFullYear(),6,1).getTimezoneOffset(),wA=_.getTimezoneOffset(),KA=0|(lA!=wA&&b.getTimezoneOffset()==Math.min(wA,lA));we[u+32>>2]=KA},J:function l(u,M,b){l.called||(l.called=!0,function(_,tA,lA){var wA=new Date().getFullYear(),KA=new Date(wA,0,1),jA=new Date(wA,6,1),Ut=KA.getTimezoneOffset(),bt=jA.getTimezoneOffset(),Bt=Math.max(Ut,bt);function Yt(Et){var ae=Et.toTimeString().match(/\(([A-Za-z ]+)\)$/);return ae?ae[1]:"GMT"}we[_>>2]=60*Bt,we[tA>>2]=+(Ut!=bt);var St=Yt(KA),Ig=Yt(jA),Ze=bQ(St),lg=bQ(Ig);bt<Ut?(Dg[lA>>2]=Ze,Dg[lA+4>>2]=lg):(Dg[lA>>2]=lg,Dg[lA+4>>2]=Ze)}(u,M,b))},a:function(){HB("")},i:function(l,u,M){var b=function(_,tA){var lA;for(ZB.length=0,tA>>=2;lA=dI[_++];)tA+=lA!=105&tA,ZB.push(lA==105?we[tA]:QE[tA++>>1]),++tA;return ZB}(u,M);return TB[l].apply(null,b)},B:function(l){var u=dI.length,M=2147483648;if((l>>>=0)>M)return!1;for(var b,_=1;_<=4;_*=2){var tA=u*(1+.2/_);if(tA=Math.min(tA,l+100663296),pE(Math.min(M,(b=Math.max(l,tA))+(65536-b%65536)%65536)))return!0}return!1},C:function(l,u){var M=0;return gi().forEach(function(b,_){var tA=u+M;Dg[l+4*_>>2]=tA,function(lA,wA,KA){for(var jA=0;jA<lA.length;++jA)tI[wA++>>0]=lA.charCodeAt(jA);tI[wA>>0]=0}(b,tA),M+=b.length+1}),0},D:function(l,u){var M=gi();Dg[l>>2]=M.length;var b=0;return M.forEach(function(_){b+=_.length+1}),Dg[u>>2]=b,0},b:function(l,u){var M;M=l,GQ()||(N.onExit&&N.onExit(M),DB=!0),Tt(M,new qB(M))},m:function(l){try{var u=CI.getStreamFromFD(l);return Y.close(u),0}catch(M){if(Y===void 0||!(M instanceof Y.ErrnoError))throw M;return M.errno}},F:function(l,u,M,b){try{var _=function(tA,lA,wA,KA){for(var jA=0,Ut=0;Ut<wA;Ut++){var bt=Dg[lA>>2],Bt=Dg[lA+4>>2];lA+=8;var Yt=Y.read(tA,tI,bt,Bt,void 0);if(Yt<0)return-1;if(jA+=Yt,Yt<Bt)break}return jA}(CI.getStreamFromFD(l),u,M);return Dg[b>>2]=_,0}catch(tA){if(Y===void 0||!(tA instanceof Y.ErrnoError))throw tA;return tA.errno}},x:function(l,u,M,b,_){try{var tA=(KA=M)+2097152>>>0<4194305-!!(wA=u)?(wA>>>0)+4294967296*KA:NaN;if(isNaN(tA))return 61;var lA=CI.getStreamFromFD(l);return Y.llseek(lA,tA,b),BI=[lA.position>>>0,(sg=lA.position,+Math.abs(sg)>=1?sg>0?(0|Math.min(+Math.floor(sg/4294967296),4294967295))>>>0:~~+Math.ceil((sg-+(~~sg>>>0))/4294967296)>>>0:0)],we[_>>2]=BI[0],we[_+4>>2]=BI[1],lA.getdents&&tA===0&&b===0&&(lA.getdents=null),0}catch(jA){if(Y===void 0||!(jA instanceof Y.ErrnoError))throw jA;return jA.errno}var wA,KA},n:function(l,u,M,b){try{var _=function(tA,lA,wA,KA){for(var jA=0,Ut=0;Ut<wA;Ut++){var bt=Dg[lA>>2],Bt=Dg[lA+4>>2];lA+=8;var Yt=Y.write(tA,tI,bt,Bt,void 0);if(Yt<0)return-1;jA+=Yt}return jA}(CI.getStreamFromFD(l),u,M);return Dg[b>>2]=_,0}catch(tA){if(Y===void 0||!(tA instanceof Y.ErrnoError))throw tA;return tA.errno}},t:function(l,u){var M=nI();try{return Eg(l)(u)}catch(b){if(nB(M),b!==b+0)throw b;Si(1,0)}},v:function(l,u,M){var b=nI();try{return Eg(l)(u,M)}catch(_){if(nB(b),_!==_+0)throw _;Si(1,0)}},u:function(l,u,M,b){var _=nI();try{return Eg(l)(u,M,b)}catch(tA){if(nB(_),tA!==tA+0)throw tA;Si(1,0)}},j:function(l,u){var M=nI();try{Eg(l)(u)}catch(b){if(nB(M),b!==b+0)throw b;Si(1,0)}},w:function(l,u,M){var b=nI();try{Eg(l)(u,M)}catch(_){if(nB(b),_!==_+0)throw _;Si(1,0)}},E:function(l,u,M,b){var _=nI();try{Eg(l)(u,M,b)}catch(tA){if(nB(_),tA!==tA+0)throw tA;Si(1,0)}},k:function(l,u,M,b,_){var tA=nI();try{Eg(l)(u,M,b,_)}catch(lA){if(nB(tA),lA!==lA+0)throw lA;Si(1,0)}},V:Ao,z:function(l,u,M,b){return Ao(l,u,M,b)}},qI=(function(){var l={a:DC};function u(_,tA){var lA,wA=_.exports;N.asm=wA,mQ((aI=N.asm.W).buffer),RQ=N.asm.$,lA=N.asm.X,sE.unshift(lA),Tn()}function M(_){u(_.instance)}function b(_){return function(){if(!re&&(te||Gt)){if(typeof fetch=="function"&&!yI(ei))return fetch(ei,{credentials:"same-origin"}).then(function(tA){if(!tA.ok)throw"failed to load wasm binary file at '"+ei+"'";return tA.arrayBuffer()}).catch(function(){return hE(ei)});if(SA)return new Promise(function(tA,lA){SA(ei,function(wA){tA(new Uint8Array(wA))},lA)})}return Promise.resolve().then(function(){return hE(ei)})}().then(function(tA){return WebAssembly.instantiate(tA,l)}).then(function(tA){return tA}).then(_,function(tA){jg("failed to asynchronously prepare wasm: "+tA),HB(tA)})}if(rE(),N.instantiateWasm)try{return N.instantiateWasm(l,u)}catch(_){return jg("Module.instantiateWasm callback failed with error: "+_),!1}(re||typeof WebAssembly.instantiateStreaming!="function"||wi(ei)||yI(ei)||Xt||typeof fetch!="function"?b(M):fetch(ei,{credentials:"same-origin"}).then(function(_){return WebAssembly.instantiateStreaming(_,l).then(M,function(tA){return jg("wasm streaming compile failed: "+tA),jg("falling back to ArrayBuffer instantiation"),b(M)})})).catch(aA)}(),N.___wasm_call_ctors=function(){return(N.___wasm_call_ctors=N.asm.X).apply(null,arguments)},N._malloc=function(){return(qI=N._malloc=N.asm.Y).apply(null,arguments)}),BB=N._free=function(){return(BB=N._free=N.asm.Z).apply(null,arguments)},JQ=N.___errno_location=function(){return(JQ=N.___errno_location=N.asm._).apply(null,arguments)},CB=N.___getTypeName=function(){return(CB=N.___getTypeName=N.asm.aa).apply(null,arguments)},Si=(N.__embind_initialize_bindings=function(){return(N.__embind_initialize_bindings=N.asm.ba).apply(null,arguments)},N._setThrew=function(){return(Si=N._setThrew=N.asm.ca).apply(null,arguments)}),nI=N.stackSave=function(){return(nI=N.stackSave=N.asm.da).apply(null,arguments)},nB=N.stackRestore=function(){return(nB=N.stackRestore=N.asm.ea).apply(null,arguments)},yE=N.___cxa_is_pointer_type=function(){return(yE=N.___cxa_is_pointer_type=N.asm.fa).apply(null,arguments)};function fC(l){function u(){Ve||(Ve=!0,N.calledRun=!0,DB||(N.noFSInit||Y.init.initialized||Y.init(),Y.ignorePermissions=!1,HI(sE),Z(N),N.onRuntimeInitialized&&N.onRuntimeInitialized(),function(){if(N.postRun)for(typeof N.postRun=="function"&&(N.postRun=[N.postRun]);N.postRun.length;)M=N.postRun.shift(),cC.unshift(M);var M;HI(cC)}()))}vB>0||(function(){if(N.preRun)for(typeof N.preRun=="function"&&(N.preRun=[N.preRun]);N.preRun.length;)M=N.preRun.shift(),SQ.unshift(M);var M;HI(SQ)}(),vB>0||(N.setStatus?(N.setStatus("Running..."),setTimeout(function(){setTimeout(function(){N.setStatus("")},1),u()},1)):u()))}if(N.dynCall_jiji=function(){return(N.dynCall_jiji=N.asm.ga).apply(null,arguments)},N.dynCall_viijii=function(){return(N.dynCall_viijii=N.asm.ha).apply(null,arguments)},N.dynCall_iiiiij=function(){return(N.dynCall_iiiiij=N.asm.ia).apply(null,arguments)},N.dynCall_iiiiijj=function(){return(N.dynCall_iiiiijj=N.asm.ja).apply(null,arguments)},N.dynCall_iiiiiijj=function(){return(N.dynCall_iiiiiijj=N.asm.ka).apply(null,arguments)},N.FS=Y,PC=function l(){Ve||fC(),Ve||(PC=l)},N.preInit)for(typeof N.preInit=="function"&&(N.preInit=[N.preInit]);N.preInit.length>0;)N.preInit.pop()();return fC(),N.ready});const uA=$;function rt(N,Z){return function(){return N.apply(Z,arguments)}}const{toString:Rt}=Object.prototype,{getPrototypeOf:TA}=Object,$A=(VA=Object.create(null),N=>{const Z=Rt.call(N);return VA[Z]||(VA[Z]=Z.slice(8,-1).toLowerCase())});var VA;const ft=N=>(N=N.toLowerCase(),Z=>$A(Z)===N),it=N=>Z=>typeof Z===N,{isArray:nt}=Array,V=it("undefined"),X=ft("ArrayBuffer"),AA=it("string"),CA=it("function"),kA=it("number"),qA=N=>N!==null&&typeof N=="object",gt=N=>{if($A(N)!=="object")return!1;const Z=TA(N);return!(Z!==null&&Z!==Object.prototype&&Object.getPrototypeOf(Z)!==null||Symbol.toStringTag in N||Symbol.iterator in N)},wt=ft("Date"),Pt=ft("File"),Wt=ft("Blob"),De=ft("FileList"),cg=ft("URLSearchParams");function se(N,Z,{allOwnKeys:aA=!1}={}){if(N==null)return;let yA,SA;if(typeof N!="object"&&(N=[N]),nt(N))for(yA=0,SA=N.length;yA<SA;yA++)Z.call(null,N[yA],yA,N);else{const JA=aA?Object.getOwnPropertyNames(N):Object.keys(N),LA=JA.length;let DA;for(yA=0;yA<LA;yA++)DA=JA[yA],Z.call(null,N[DA],DA,N)}}function rA(N,Z){Z=Z.toLowerCase();const aA=Object.keys(N);let yA,SA=aA.length;for(;SA-- >0;)if(yA=aA[SA],Z===yA.toLowerCase())return yA;return null}const Qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:f.g,At=N=>!V(N)&&N!==Qt,Nt=(ut=typeof Uint8Array<"u"&&TA(Uint8Array),N=>ut&&N instanceof ut);var ut;const fe=ft("HTMLFormElement"),ie=(({hasOwnProperty:N})=>(Z,aA)=>N.call(Z,aA))(Object.prototype),Zt=ft("RegExp"),Fe=(N,Z)=>{const aA=Object.getOwnPropertyDescriptors(N),yA={};se(aA,(SA,JA)=>{Z(SA,JA,N)!==!1&&(yA[JA]=SA)}),Object.defineProperties(N,yA)},PA={isArray:nt,isArrayBuffer:X,isBuffer:function(N){return N!==null&&!V(N)&&N.constructor!==null&&!V(N.constructor)&&CA(N.constructor.isBuffer)&&N.constructor.isBuffer(N)},isFormData:N=>{const Z="[object FormData]";return N&&(typeof FormData=="function"&&N instanceof FormData||Rt.call(N)===Z||CA(N.toString)&&N.toString()===Z)},isArrayBufferView:function(N){let Z;return Z=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(N):N&&N.buffer&&X(N.buffer),Z},isString:AA,isNumber:kA,isBoolean:N=>N===!0||N===!1,isObject:qA,isPlainObject:gt,isUndefined:V,isDate:wt,isFile:Pt,isBlob:Wt,isRegExp:Zt,isFunction:CA,isStream:N=>qA(N)&&CA(N.pipe),isURLSearchParams:cg,isTypedArray:Nt,isFileList:De,forEach:se,merge:function N(){const{caseless:Z}=At(this)&&this||{},aA={},yA=(SA,JA)=>{const LA=Z&&rA(aA,JA)||JA;gt(aA[LA])&&gt(SA)?aA[LA]=N(aA[LA],SA):gt(SA)?aA[LA]=N({},SA):nt(SA)?aA[LA]=SA.slice():aA[LA]=SA};for(let SA=0,JA=arguments.length;SA<JA;SA++)arguments[SA]&&se(arguments[SA],yA);return aA},extend:(N,Z,aA,{allOwnKeys:yA}={})=>(se(Z,(SA,JA)=>{aA&&CA(SA)?N[JA]=rt(SA,aA):N[JA]=SA},{allOwnKeys:yA}),N),trim:N=>N.trim?N.trim():N.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:N=>(N.charCodeAt(0)===65279&&(N=N.slice(1)),N),inherits:(N,Z,aA,yA)=>{N.prototype=Object.create(Z.prototype,yA),N.prototype.constructor=N,Object.defineProperty(N,"super",{value:Z.prototype}),aA&&Object.assign(N.prototype,aA)},toFlatObject:(N,Z,aA,yA)=>{let SA,JA,LA;const DA={};if(Z=Z||{},N==null)return Z;do{for(SA=Object.getOwnPropertyNames(N),JA=SA.length;JA-- >0;)LA=SA[JA],yA&&!yA(LA,N,Z)||DA[LA]||(Z[LA]=N[LA],DA[LA]=!0);N=aA!==!1&&TA(N)}while(N&&(!aA||aA(N,Z))&&N!==Object.prototype);return Z},kindOf:$A,kindOfTest:ft,endsWith:(N,Z,aA)=>{N=String(N),(aA===void 0||aA>N.length)&&(aA=N.length),aA-=Z.length;const yA=N.indexOf(Z,aA);return yA!==-1&&yA===aA},toArray:N=>{if(!N)return null;if(nt(N))return N;let Z=N.length;if(!kA(Z))return null;const aA=new Array(Z);for(;Z-- >0;)aA[Z]=N[Z];return aA},forEachEntry:(N,Z)=>{const aA=(N&&N[Symbol.iterator]).call(N);let yA;for(;(yA=aA.next())&&!yA.done;){const SA=yA.value;Z.call(N,SA[0],SA[1])}},matchAll:(N,Z)=>{let aA;const yA=[];for(;(aA=N.exec(Z))!==null;)yA.push(aA);return yA},isHTMLForm:fe,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:Fe,freezeMethods:N=>{Fe(N,(Z,aA)=>{if(CA(N)&&["arguments","caller","callee"].indexOf(aA)!==-1)return!1;const yA=N[aA];CA(yA)&&(Z.enumerable=!1,"writable"in Z?Z.writable=!1:Z.set||(Z.set=()=>{throw Error("Can not rewrite read-only method '"+aA+"'")}))})},toObjectSet:(N,Z)=>{const aA={},yA=SA=>{SA.forEach(JA=>{aA[JA]=!0})};return nt(N)?yA(N):yA(String(N).split(Z)),aA},toCamelCase:N=>N.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(Z,aA,yA){return aA.toUpperCase()+yA}),noop:()=>{},toFiniteNumber:(N,Z)=>(N=+N,Number.isFinite(N)?N:Z),findKey:rA,global:Qt,isContextDefined:At,toJSONObject:N=>{const Z=new Array(10),aA=(yA,SA)=>{if(qA(yA)){if(Z.indexOf(yA)>=0)return;if(!("toJSON"in yA)){Z[SA]=yA;const JA=nt(yA)?[]:{};return se(yA,(LA,DA)=>{const sA=aA(LA,SA+1);!V(sA)&&(JA[DA]=sA)}),Z[SA]=void 0,JA}}return yA};return aA(N,0)}};function Ag(N,Z,aA,yA,SA){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=N,this.name="AxiosError",Z&&(this.code=Z),aA&&(this.config=aA),yA&&(this.request=yA),SA&&(this.response=SA)}PA.inherits(Ag,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:PA.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const EA=Ag.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(N=>{z[N]={value:N}}),Object.defineProperties(Ag,z),Object.defineProperty(EA,"isAxiosError",{value:!0}),Ag.from=(N,Z,aA,yA,SA,JA)=>{const LA=Object.create(EA);return PA.toFlatObject(N,LA,function(DA){return DA!==Error.prototype},DA=>DA!=="isAxiosError"),Ag.call(LA,N.message,Z,aA,yA,SA),LA.cause=N,LA.name=N.name,JA&&Object.assign(LA,JA),LA};const NA=Ag,xt=J(230);function ht(N){return PA.isPlainObject(N)||PA.isArray(N)}function Ft(N){return PA.endsWith(N,"[]")?N.slice(0,-2):N}function pe(N,Z,aA){return N?N.concat(Z).map(function(yA,SA){return yA=Ft(yA),!aA&&SA?"["+yA+"]":yA}).join(aA?".":""):Z}const Jt=PA.toFlatObject(PA,{},null,function(N){return/^is[A-Z]/.test(N)}),zA=function(N,Z,aA){if(!PA.isObject(N))throw new TypeError("target must be an object");Z=Z||new(xt||FormData);const yA=(aA=PA.toFlatObject(aA,{metaTokens:!0,dots:!1,indexes:!1},!1,function(Gt,Xt){return!PA.isUndefined(Xt[Gt])})).metaTokens,SA=aA.visitor||UA,JA=aA.dots,LA=aA.indexes,DA=(aA.Blob||typeof Blob<"u"&&Blob)&&(sA=Z)&&PA.isFunction(sA.append)&&sA[Symbol.toStringTag]==="FormData"&&sA[Symbol.iterator];var sA;if(!PA.isFunction(SA))throw new TypeError("visitor must be a function");function FA(Gt){if(Gt===null)return"";if(PA.isDate(Gt))return Gt.toISOString();if(!DA&&PA.isBlob(Gt))throw new NA("Blob is not supported. Use a Buffer instead.");return PA.isArrayBuffer(Gt)||PA.isTypedArray(Gt)?DA&&typeof Blob=="function"?new Blob([Gt]):Buffer.from(Gt):Gt}function UA(Gt,Xt,de){let re=Gt;if(Gt&&!de&&typeof Gt=="object"){if(PA.endsWith(Xt,"{}"))Xt=yA?Xt:Xt.slice(0,-2),Gt=JSON.stringify(Gt);else if(PA.isArray(Gt)&&function(ug){return PA.isArray(ug)&&!ug.some(ht)}(Gt)||PA.isFileList(Gt)||PA.endsWith(Xt,"[]")&&(re=PA.toArray(Gt)))return Xt=Ft(Xt),re.forEach(function(ug,jg){!PA.isUndefined(ug)&&ug!==null&&Z.append(LA===!0?pe([Xt],jg,JA):LA===null?Xt:Xt+"[]",FA(ug))}),!1}return!!ht(Gt)||(Z.append(pe(de,Xt,JA),FA(Gt)),!1)}const Tt=[],te=Object.assign(Jt,{defaultVisitor:UA,convertValue:FA,isVisitable:ht});if(!PA.isObject(N))throw new TypeError("data must be an object");return function Gt(Xt,de){if(!PA.isUndefined(Xt)){if(Tt.indexOf(Xt)!==-1)throw Error("Circular reference detected in "+de.join("."));Tt.push(Xt),PA.forEach(Xt,function(re,ug){(!(PA.isUndefined(re)||re===null)&&SA.call(Z,re,PA.isString(ug)?ug.trim():ug,de,te))===!0&&Gt(re,de?de.concat(ug):[ug])}),Tt.pop()}}(N),Z};function ge(N){const Z={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(N).replace(/[!'()~]|%20|%00/g,function(aA){return Z[aA]})}function me(N,Z){this._pairs=[],N&&zA(N,this,Z)}const Ue=me.prototype;Ue.append=function(N,Z){this._pairs.push([N,Z])},Ue.toString=function(N){const Z=N?function(aA){return N.call(this,aA,ge)}:ge;return this._pairs.map(function(aA){return Z(aA[0])+"="+Z(aA[1])},"").join("&")};const Be=me;function le(N){return encodeURIComponent(N).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(N,Z,aA){if(!Z)return N;const yA=aA&&aA.encode||le,SA=aA&&aA.serialize;let JA;if(JA=SA?SA(Z,aA):PA.isURLSearchParams(Z)?Z.toString():new Be(Z,aA).toString(yA),JA){const LA=N.indexOf("#");LA!==-1&&(N=N.slice(0,LA)),N+=(N.indexOf("?")===-1?"?":"&")+JA}return N}const Ng=class{constructor(){this.handlers=[]}use(N,Z,aA){return this.handlers.push({fulfilled:N,rejected:Z,synchronous:!!aA&&aA.synchronous,runWhen:aA?aA.runWhen:null}),this.handlers.length-1}eject(N){this.handlers[N]&&(this.handlers[N]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(N){PA.forEach(this.handlers,function(Z){Z!==null&&N(Z)})}},RA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jt=typeof URLSearchParams<"u"?URLSearchParams:Be,tt=FormData,Kt=(()=>{let N;return(typeof navigator>"u"||(N=navigator.product)!=="ReactNative"&&N!=="NativeScript"&&N!=="NS")&&typeof window<"u"&&typeof document<"u"})(),Ot=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",_e={isBrowser:!0,classes:{URLSearchParams:jt,FormData:tt,Blob},isStandardBrowserEnv:Kt,isStandardBrowserWebWorkerEnv:Ot,protocols:["http","https","file","blob","url","data"]},Yg=function(N){function Z(aA,yA,SA,JA){let LA=aA[JA++];const DA=Number.isFinite(+LA),sA=JA>=aA.length;return LA=!LA&&PA.isArray(SA)?SA.length:LA,sA?(PA.hasOwnProp(SA,LA)?SA[LA]=[SA[LA],yA]:SA[LA]=yA,!DA):(SA[LA]&&PA.isObject(SA[LA])||(SA[LA]=[]),Z(aA,yA,SA[LA],JA)&&PA.isArray(SA[LA])&&(SA[LA]=function(FA){const UA={},Tt=Object.keys(FA);let te;const Gt=Tt.length;let Xt;for(te=0;te<Gt;te++)Xt=Tt[te],UA[Xt]=FA[Xt];return UA}(SA[LA])),!DA)}if(PA.isFormData(N)&&PA.isFunction(N.entries)){const aA={};return PA.forEachEntry(N,(yA,SA)=>{Z(function(JA){return PA.matchAll(/\w+|\[(\w*)]/g,JA).map(LA=>LA[0]==="[]"?"":LA[1]||LA[0])}(yA),SA,aA,0)}),aA}return null},zg={"Content-Type":void 0},QI={transitional:RA,adapter:["xhr","http"],transformRequest:[function(N,Z){const aA=Z.getContentType()||"",yA=aA.indexOf("application/json")>-1,SA=PA.isObject(N);if(SA&&PA.isHTMLForm(N)&&(N=new FormData(N)),PA.isFormData(N))return yA&&yA?JSON.stringify(Yg(N)):N;if(PA.isArrayBuffer(N)||PA.isBuffer(N)||PA.isStream(N)||PA.isFile(N)||PA.isBlob(N))return N;if(PA.isArrayBufferView(N))return N.buffer;if(PA.isURLSearchParams(N))return Z.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),N.toString();let JA;if(SA){if(aA.indexOf("application/x-www-form-urlencoded")>-1)return function(LA,DA){return zA(LA,new _e.classes.URLSearchParams,Object.assign({visitor:function(sA,FA,UA,Tt){return _e.isNode&&PA.isBuffer(sA)?(this.append(FA,sA.toString("base64")),!1):Tt.defaultVisitor.apply(this,arguments)}},DA))}(N,this.formSerializer).toString();if((JA=PA.isFileList(N))||aA.indexOf("multipart/form-data")>-1){const LA=this.env&&this.env.FormData;return zA(JA?{"files[]":N}:N,LA&&new LA,this.formSerializer)}}return SA||yA?(Z.setContentType("application/json",!1),function(LA,DA,sA){if(PA.isString(LA))try{return(0,JSON.parse)(LA),PA.trim(LA)}catch(FA){if(FA.name!=="SyntaxError")throw FA}return(0,JSON.stringify)(LA)}(N)):N}],transformResponse:[function(N){const Z=this.transitional||QI.transitional,aA=Z&&Z.forcedJSONParsing,yA=this.responseType==="json";if(N&&PA.isString(N)&&(aA&&!this.responseType||yA)){const SA=!(Z&&Z.silentJSONParsing)&&yA;try{return JSON.parse(N)}catch(JA){if(SA)throw JA.name==="SyntaxError"?NA.from(JA,NA.ERR_BAD_RESPONSE,this,null,this.response):JA}}return N}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(N){return N>=200&&N<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};PA.forEach(["delete","get","head"],function(N){QI.headers[N]={}}),PA.forEach(["post","put","patch"],function(N){QI.headers[N]=PA.merge(zg)});const Ug=QI,Vg=PA.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sI=Symbol("internals");function Oi(N){return N&&String(N).trim().toLowerCase()}function VI(N){return N===!1||N==null?N:PA.isArray(N)?N.map(VI):String(N)}function xi(N,Z,aA,yA){return PA.isFunction(yA)?yA.call(this,Z,aA):PA.isString(Z)?PA.isString(yA)?Z.indexOf(yA)!==-1:PA.isRegExp(yA)?yA.test(Z):void 0:void 0}class bi{constructor(Z){Z&&this.set(Z)}set(Z,aA,yA){const SA=this;function JA(DA,sA,FA){const UA=Oi(sA);if(!UA)throw new Error("header name must be a non-empty string");const Tt=PA.findKey(SA,UA);(!Tt||SA[Tt]===void 0||FA===!0||FA===void 0&&SA[Tt]!==!1)&&(SA[Tt||sA]=VI(DA))}const LA=(DA,sA)=>PA.forEach(DA,(FA,UA)=>JA(FA,UA,sA));return PA.isPlainObject(Z)||Z instanceof this.constructor?LA(Z,aA):PA.isString(Z)&&(Z=Z.trim())&&!/^[-_a-zA-Z]+$/.test(Z.trim())?LA((DA=>{const sA={};let FA,UA,Tt;return DA&&DA.split(`
`).forEach(function(te){Tt=te.indexOf(":"),FA=te.substring(0,Tt).trim().toLowerCase(),UA=te.substring(Tt+1).trim(),!FA||sA[FA]&&Vg[FA]||(FA==="set-cookie"?sA[FA]?sA[FA].push(UA):sA[FA]=[UA]:sA[FA]=sA[FA]?sA[FA]+", "+UA:UA)}),sA})(Z),aA):Z!=null&&JA(aA,Z,yA),this}get(Z,aA){if(Z=Oi(Z)){const yA=PA.findKey(this,Z);if(yA){const SA=this[yA];if(!aA)return SA;if(aA===!0)return function(JA){const LA=Object.create(null),DA=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let sA;for(;sA=DA.exec(JA);)LA[sA[1]]=sA[2];return LA}(SA);if(PA.isFunction(aA))return aA.call(this,SA,yA);if(PA.isRegExp(aA))return aA.exec(SA);throw new TypeError("parser must be boolean|regexp|function")}}}has(Z,aA){if(Z=Oi(Z)){const yA=PA.findKey(this,Z);return!(!yA||aA&&!xi(0,this[yA],yA,aA))}return!1}delete(Z,aA){const yA=this;let SA=!1;function JA(LA){if(LA=Oi(LA)){const DA=PA.findKey(yA,LA);!DA||aA&&!xi(0,yA[DA],DA,aA)||(delete yA[DA],SA=!0)}}return PA.isArray(Z)?Z.forEach(JA):JA(Z),SA}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(Z){const aA=this,yA={};return PA.forEach(this,(SA,JA)=>{const LA=PA.findKey(yA,JA);if(LA)return aA[LA]=VI(SA),void delete aA[JA];const DA=Z?function(sA){return sA.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(FA,UA,Tt)=>UA.toUpperCase()+Tt)}(JA):String(JA).trim();DA!==JA&&delete aA[JA],aA[DA]=VI(SA),yA[DA]=!0}),this}concat(...Z){return this.constructor.concat(this,...Z)}toJSON(Z){const aA=Object.create(null);return PA.forEach(this,(yA,SA)=>{yA!=null&&yA!==!1&&(aA[SA]=Z&&PA.isArray(yA)?yA.join(", "):yA)}),aA}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([Z,aA])=>Z+": "+aA).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(Z){return Z instanceof this?Z:new this(Z)}static concat(Z,...aA){const yA=new this(Z);return aA.forEach(SA=>yA.set(SA)),yA}static accessor(Z){const aA=(this[sI]=this[sI]={accessors:{}}).accessors,yA=this.prototype;function SA(JA){const LA=Oi(JA);aA[LA]||(function(DA,sA){const FA=PA.toCamelCase(" "+sA);["get","set","has"].forEach(UA=>{Object.defineProperty(DA,UA+FA,{value:function(Tt,te,Gt){return this[UA].call(this,sA,Tt,te,Gt)},configurable:!0})})}(yA,JA),aA[LA]=!0)}return PA.isArray(Z)?Z.forEach(SA):SA(Z),this}}bi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),PA.freezeMethods(bi.prototype),PA.freezeMethods(bi);const Ai=bi;function Vi(N,Z){const aA=this||Ug,yA=Z||aA,SA=Ai.from(yA.headers);let JA=yA.data;return PA.forEach(N,function(LA){JA=LA.call(aA,JA,SA.normalize(),Z?Z.status:void 0)}),SA.normalize(),JA}function rC(N){return!(!N||!N.__CANCEL__)}function WC(N,Z,aA){NA.call(this,N??"canceled",NA.ERR_CANCELED,Z,aA),this.name="CanceledError"}PA.inherits(WC,NA,{__CANCEL__:!0});const Zi=WC,aC=_e.isStandardBrowserEnv?{write:function(N,Z,aA,yA,SA,JA){const LA=[];LA.push(N+"="+encodeURIComponent(Z)),PA.isNumber(aA)&&LA.push("expires="+new Date(aA).toGMTString()),PA.isString(yA)&&LA.push("path="+yA),PA.isString(SA)&&LA.push("domain="+SA),JA===!0&&LA.push("secure"),document.cookie=LA.join("; ")},read:function(N){const Z=document.cookie.match(new RegExp("(^|;\\s*)("+N+")=([^;]*)"));return Z?decodeURIComponent(Z[3]):null},remove:function(N){this.write(N,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function BA(N,Z){return N&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(Z)?function(aA,yA){return yA?aA.replace(/\/+$/,"")+"/"+yA.replace(/^\/+/,""):aA}(N,Z):Z}const _A=_e.isStandardBrowserEnv?function(){const N=/(msie|trident)/i.test(navigator.userAgent),Z=document.createElement("a");let aA;function yA(SA){let JA=SA;return N&&(Z.setAttribute("href",JA),JA=Z.href),Z.setAttribute("href",JA),{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:Z.pathname.charAt(0)==="/"?Z.pathname:"/"+Z.pathname}}return aA=yA(window.location.href),function(SA){const JA=PA.isString(SA)?yA(SA):SA;return JA.protocol===aA.protocol&&JA.host===aA.host}}():function(){return!0};function It(N,Z){let aA=0;const yA=function(SA,JA){SA=SA||10;const LA=new Array(SA),DA=new Array(SA);let sA,FA=0,UA=0;return JA=JA!==void 0?JA:1e3,function(Tt){const te=Date.now(),Gt=DA[UA];sA||(sA=te),LA[FA]=Tt,DA[FA]=te;let Xt=UA,de=0;for(;Xt!==FA;)de+=LA[Xt++],Xt%=SA;if(FA=(FA+1)%SA,FA===UA&&(UA=(UA+1)%SA),te-sA<JA)return;const re=Gt&&te-Gt;return re?Math.round(1e3*de/re):void 0}}(50,250);return SA=>{const JA=SA.loaded,LA=SA.lengthComputable?SA.total:void 0,DA=JA-aA,sA=yA(DA);aA=JA;const FA={loaded:JA,total:LA,progress:LA?JA/LA:void 0,bytes:DA,rate:sA||void 0,estimated:sA&&LA&&JA<=LA?(LA-JA)/sA:void 0,event:SA};FA[Z?"download":"upload"]=!0,N(FA)}}const HA={http:null,xhr:typeof XMLHttpRequest<"u"&&function(N){return new Promise(function(Z,aA){let yA=N.data;const SA=Ai.from(N.headers).normalize(),JA=N.responseType;let LA;function DA(){N.cancelToken&&N.cancelToken.unsubscribe(LA),N.signal&&N.signal.removeEventListener("abort",LA)}PA.isFormData(yA)&&(_e.isStandardBrowserEnv||_e.isStandardBrowserWebWorkerEnv)&&SA.setContentType(!1);let sA=new XMLHttpRequest;if(N.auth){const te=N.auth.username||"",Gt=N.auth.password?unescape(encodeURIComponent(N.auth.password)):"";SA.set("Authorization","Basic "+btoa(te+":"+Gt))}const FA=BA(N.baseURL,N.url);function UA(){if(!sA)return;const te=Ai.from("getAllResponseHeaders"in sA&&sA.getAllResponseHeaders());(function(Gt,Xt,de){const re=de.config.validateStatus;de.status&&re&&!re(de.status)?Xt(new NA("Request failed with status code "+de.status,[NA.ERR_BAD_REQUEST,NA.ERR_BAD_RESPONSE][Math.floor(de.status/100)-4],de.config,de.request,de)):Gt(de)})(function(Gt){Z(Gt),DA()},function(Gt){aA(Gt),DA()},{data:JA&&JA!=="text"&&JA!=="json"?sA.response:sA.responseText,status:sA.status,statusText:sA.statusText,headers:te,config:N,request:sA}),sA=null}if(sA.open(N.method.toUpperCase(),Pe(FA,N.params,N.paramsSerializer),!0),sA.timeout=N.timeout,"onloadend"in sA?sA.onloadend=UA:sA.onreadystatechange=function(){sA&&sA.readyState===4&&(sA.status!==0||sA.responseURL&&sA.responseURL.indexOf("file:")===0)&&setTimeout(UA)},sA.onabort=function(){sA&&(aA(new NA("Request aborted",NA.ECONNABORTED,N,sA)),sA=null)},sA.onerror=function(){aA(new NA("Network Error",NA.ERR_NETWORK,N,sA)),sA=null},sA.ontimeout=function(){let te=N.timeout?"timeout of "+N.timeout+"ms exceeded":"timeout exceeded";const Gt=N.transitional||RA;N.timeoutErrorMessage&&(te=N.timeoutErrorMessage),aA(new NA(te,Gt.clarifyTimeoutError?NA.ETIMEDOUT:NA.ECONNABORTED,N,sA)),sA=null},_e.isStandardBrowserEnv){const te=(N.withCredentials||_A(FA))&&N.xsrfCookieName&&aC.read(N.xsrfCookieName);te&&SA.set(N.xsrfHeaderName,te)}yA===void 0&&SA.setContentType(null),"setRequestHeader"in sA&&PA.forEach(SA.toJSON(),function(te,Gt){sA.setRequestHeader(Gt,te)}),PA.isUndefined(N.withCredentials)||(sA.withCredentials=!!N.withCredentials),JA&&JA!=="json"&&(sA.responseType=N.responseType),typeof N.onDownloadProgress=="function"&&sA.addEventListener("progress",It(N.onDownloadProgress,!0)),typeof N.onUploadProgress=="function"&&sA.upload&&sA.upload.addEventListener("progress",It(N.onUploadProgress)),(N.cancelToken||N.signal)&&(LA=te=>{sA&&(aA(!te||te.type?new Zi(null,N,sA):te),sA.abort(),sA=null)},N.cancelToken&&N.cancelToken.subscribe(LA),N.signal&&(N.signal.aborted?LA():N.signal.addEventListener("abort",LA)));const Tt=function(te){const Gt=/^([-+\w]{1,25})(:?\/\/|:)/.exec(te);return Gt&&Gt[1]||""}(FA);Tt&&_e.protocols.indexOf(Tt)===-1?aA(new NA("Unsupported protocol "+Tt+":",NA.ERR_BAD_REQUEST,N)):sA.send(yA||null)})}};function et(N){if(N.cancelToken&&N.cancelToken.throwIfRequested(),N.signal&&N.signal.aborted)throw new Zi(null,N)}function ne(N){return et(N),N.headers=Ai.from(N.headers),N.data=Vi.call(N,N.transformRequest),["post","put","patch"].indexOf(N.method)!==-1&&N.headers.setContentType("application/x-www-form-urlencoded",!1),(Z=>{Z=PA.isArray(Z)?Z:[Z];const{length:aA}=Z;let yA,SA;for(let JA=0;JA<aA&&(yA=Z[JA],!(SA=PA.isString(yA)?HA[yA.toLowerCase()]:yA));JA++);if(!SA)throw SA===!1?new NA(`Adapter ${yA} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(PA.hasOwnProp(HA,yA)?`Adapter '${yA}' is not available in the build`:`Unknown adapter '${yA}'`);if(!PA.isFunction(SA))throw new TypeError("adapter is not a function");return SA})(N.adapter||Ug.adapter)(N).then(function(Z){return et(N),Z.data=Vi.call(N,N.transformResponse,Z),Z.headers=Ai.from(Z.headers),Z},function(Z){return rC(Z)||(et(N),Z&&Z.response&&(Z.response.data=Vi.call(N,N.transformResponse,Z.response),Z.response.headers=Ai.from(Z.response.headers))),Promise.reject(Z)})}PA.forEach(HA,(N,Z)=>{if(N){try{Object.defineProperty(N,"name",{value:Z})}catch{}Object.defineProperty(N,"adapterName",{value:Z})}});const Le=N=>N instanceof Ai?N.toJSON():N;function xe(N,Z){Z=Z||{};const aA={};function yA(FA,UA,Tt){return PA.isPlainObject(FA)&&PA.isPlainObject(UA)?PA.merge.call({caseless:Tt},FA,UA):PA.isPlainObject(UA)?PA.merge({},UA):PA.isArray(UA)?UA.slice():UA}function SA(FA,UA,Tt){return PA.isUndefined(UA)?PA.isUndefined(FA)?void 0:yA(void 0,FA,Tt):yA(FA,UA,Tt)}function JA(FA,UA){if(!PA.isUndefined(UA))return yA(void 0,UA)}function LA(FA,UA){return PA.isUndefined(UA)?PA.isUndefined(FA)?void 0:yA(void 0,FA):yA(void 0,UA)}function DA(FA,UA,Tt){return Tt in Z?yA(FA,UA):Tt in N?yA(void 0,FA):void 0}const sA={url:JA,method:JA,data:JA,baseURL:LA,transformRequest:LA,transformResponse:LA,paramsSerializer:LA,timeout:LA,timeoutMessage:LA,withCredentials:LA,adapter:LA,responseType:LA,xsrfCookieName:LA,xsrfHeaderName:LA,onUploadProgress:LA,onDownloadProgress:LA,decompress:LA,maxContentLength:LA,maxBodyLength:LA,beforeRedirect:LA,transport:LA,httpAgent:LA,httpsAgent:LA,cancelToken:LA,socketPath:LA,responseEncoding:LA,validateStatus:DA,headers:(FA,UA)=>SA(Le(FA),Le(UA),!0)};return PA.forEach(Object.keys(N).concat(Object.keys(Z)),function(FA){const UA=sA[FA]||SA,Tt=UA(N[FA],Z[FA],FA);PA.isUndefined(Tt)&&UA!==DA||(aA[FA]=Tt)}),aA}const Ke={};["object","boolean","number","function","string","symbol"].forEach((N,Z)=>{Ke[N]=function(aA){return typeof aA===N||"a"+(Z<1?"n ":" ")+N}});const eg={};Ke.transitional=function(N,Z,aA){function yA(SA,JA){return"[Axios v1.2.4] Transitional option '"+SA+"'"+JA+(aA?". "+aA:"")}return(SA,JA,LA)=>{if(N===!1)throw new NA(yA(JA," has been removed"+(Z?" in "+Z:"")),NA.ERR_DEPRECATED);return Z&&!eg[JA]&&(eg[JA]=!0,console.warn(yA(JA," has been deprecated since v"+Z+" and will be removed in the near future"))),!N||N(SA,JA,LA)}};const Je={assertOptions:function(N,Z,aA){if(typeof N!="object")throw new NA("options must be an object",NA.ERR_BAD_OPTION_VALUE);const yA=Object.keys(N);let SA=yA.length;for(;SA-- >0;){const JA=yA[SA],LA=Z[JA];if(LA){const DA=N[JA],sA=DA===void 0||LA(DA,JA,N);if(sA!==!0)throw new NA("option "+JA+" must be "+sA,NA.ERR_BAD_OPTION_VALUE)}else if(aA!==!0)throw new NA("Unknown option "+JA,NA.ERR_BAD_OPTION)}},validators:Ke},Ye=Je.validators;class xg{constructor(Z){this.defaults=Z,this.interceptors={request:new Ng,response:new Ng}}request(Z,aA){typeof Z=="string"?(aA=aA||{}).url=Z:aA=Z||{},aA=xe(this.defaults,aA);const{transitional:yA,paramsSerializer:SA,headers:JA}=aA;let LA;yA!==void 0&&Je.assertOptions(yA,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),SA!==void 0&&Je.assertOptions(SA,{encode:Ye.function,serialize:Ye.function},!0),aA.method=(aA.method||this.defaults.method||"get").toLowerCase(),LA=JA&&PA.merge(JA.common,JA[aA.method]),LA&&PA.forEach(["delete","get","head","post","put","patch","common"],Xt=>{delete JA[Xt]}),aA.headers=Ai.concat(LA,JA);const DA=[];let sA=!0;this.interceptors.request.forEach(function(Xt){typeof Xt.runWhen=="function"&&Xt.runWhen(aA)===!1||(sA=sA&&Xt.synchronous,DA.unshift(Xt.fulfilled,Xt.rejected))});const FA=[];let UA;this.interceptors.response.forEach(function(Xt){FA.push(Xt.fulfilled,Xt.rejected)});let Tt,te=0;if(!sA){const Xt=[ne.bind(this),void 0];for(Xt.unshift.apply(Xt,DA),Xt.push.apply(Xt,FA),Tt=Xt.length,UA=Promise.resolve(aA);te<Tt;)UA=UA.then(Xt[te++],Xt[te++]);return UA}Tt=DA.length;let Gt=aA;for(te=0;te<Tt;){const Xt=DA[te++],de=DA[te++];try{Gt=Xt(Gt)}catch(re){de.call(this,re);break}}try{UA=ne.call(this,Gt)}catch(Xt){return Promise.reject(Xt)}for(te=0,Tt=FA.length;te<Tt;)UA=UA.then(FA[te++],FA[te++]);return UA}getUri(Z){return Pe(BA((Z=xe(this.defaults,Z)).baseURL,Z.url),Z.params,Z.paramsSerializer)}}PA.forEach(["delete","get","head","options"],function(N){xg.prototype[N]=function(Z,aA){return this.request(xe(aA||{},{method:N,url:Z,data:(aA||{}).data}))}}),PA.forEach(["post","put","patch"],function(N){function Z(aA){return function(yA,SA,JA){return this.request(xe(JA||{},{method:N,headers:aA?{"Content-Type":"multipart/form-data"}:{},url:yA,data:SA}))}}xg.prototype[N]=Z(),xg.prototype[N+"Form"]=Z(!0)});const bg=xg;class lI{constructor(Z){if(typeof Z!="function")throw new TypeError("executor must be a function.");let aA;this.promise=new Promise(function(SA){aA=SA});const yA=this;this.promise.then(SA=>{if(!yA._listeners)return;let JA=yA._listeners.length;for(;JA-- >0;)yA._listeners[JA](SA);yA._listeners=null}),this.promise.then=SA=>{let JA;const LA=new Promise(DA=>{yA.subscribe(DA),JA=DA}).then(SA);return LA.cancel=function(){yA.unsubscribe(JA)},LA},Z(function(SA,JA,LA){yA.reason||(yA.reason=new Zi(SA,JA,LA),aA(yA.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(Z){this.reason?Z(this.reason):this._listeners?this._listeners.push(Z):this._listeners=[Z]}unsubscribe(Z){if(!this._listeners)return;const aA=this._listeners.indexOf(Z);aA!==-1&&this._listeners.splice(aA,1)}static source(){let Z;return{token:new lI(function(aA){Z=aA}),cancel:Z}}}const ti=lI,qg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qg).forEach(([N,Z])=>{qg[Z]=N});const Bg=qg,Wg=function N(Z){const aA=new bg(Z),yA=rt(bg.prototype.request,aA);return PA.extend(yA,bg.prototype,aA,{allOwnKeys:!0}),PA.extend(yA,aA,null,{allOwnKeys:!0}),yA.create=function(SA){return N(xe(Z,SA))},yA}(Ug);Wg.Axios=bg,Wg.CanceledError=Zi,Wg.CancelToken=ti,Wg.isCancel=rC,Wg.VERSION="1.2.4",Wg.toFormData=zA,Wg.AxiosError=NA,Wg.Cancel=Wg.CanceledError,Wg.all=function(N){return Promise.all(N)},Wg.spread=function(N){return function(Z){return N.apply(null,Z)}},Wg.isAxiosError=function(N){return PA.isObject(N)&&N.isAxiosError===!0},Wg.mergeConfig=xe,Wg.AxiosHeaders=Ai,Wg.formToJSON=N=>Yg(PA.isHTMLForm(N)?new FormData(N):N),Wg.HttpStatusCode=Bg,Wg.default=Wg;const Zg=Wg;var wI=function(){function N(){L(this,N)}var Z;return dA(N,null,[{key:"fetchRemoteData",value:(Z=x(YA().mark(function aA(yA){var SA;return YA().wrap(function(JA){for(;;)switch(JA.prev=JA.next){case 0:return JA.prev=0,JA.next=3,Zg.get(yA,{responseType:"arraybuffer"});case 3:return SA=JA.sent,JA.abrupt("return",new Uint8Array(SA.data));case 7:throw JA.prev=7,JA.t0=JA.catch(0),JA.t0;case 10:case"end":return JA.stop()}},aA,null,[[0,7]])})),function(aA){return Z.apply(this,arguments)})},{key:"string2Uint8Data",value:function(aA){for(var yA=new Uint8Array(aA.length),SA=0;SA<yA.length;SA++)yA[SA]=255&aA.charCodeAt(SA);return yA}},{key:"uint8Data2String",value:function(aA){return String.fromCharCode.apply(String,aA)}},{key:"parseMultiFile",value:function(aA){var yA=N.uint8Data2String(aA).split(`
`),SA=[],JA=0;return yA.forEach(function(LA){if((LA=LA.trim())&&!LA.startsWith("#"))switch(JA){case 0:return void(JA=1);case 1:LA.match(/^\d+$/)||SA.push(LA);case 2:case 3:case 4:return void JA++;case 5:return void(JA=1)}}),SA}}]),N}(),ri=function(){function N(){L(this,N),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var Z,aA,yA,SA,JA;return dA(N,[{key:"init",value:(JA=x(YA().mark(function LA(){var DA;return YA().wrap(function(sA){for(;;)switch(sA.prev=sA.next){case 0:return sA.next=2,new Promise(function(FA){uA({onRuntimeInitialized:function(){FA({instance:this})}})});case 2:return DA=sA.sent,this.instance=DA.instance,this._decorate(),(typeof window<"u"?window:J.g).artoolkit=this,sA.abrupt("return",this);case 8:case"end":return sA.stop()}},LA,this)})),function(){return JA.apply(this,arguments)})},{key:"_decorate",value:function(){var LA=this;for(var DA in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(sA){LA[sA]=LA.instance[sA]}),this.instance)DA.match(/^AR/)&&(this[DA]=this.instance[DA])}},{key:"loadCamera",value:(SA=x(YA().mark(function LA(DA){var sA,FA;return YA().wrap(function(UA){for(;;)switch(UA.prev=UA.next){case 0:if(sA="/camera_param_"+this.cameraCount++,!(DA instanceof Uint8Array)){UA.next=5;break}FA=DA,UA.next=14;break;case 5:return UA.prev=5,UA.next=8,wI.fetchRemoteData(DA);case 8:FA=UA.sent,UA.next=14;break;case 11:throw UA.prev=11,UA.t0=UA.catch(5),UA.t0;case 14:return this._storeDataFile(FA,sA),UA.abrupt("return",this.instance._loadCamera(sA));case 16:case"end":return UA.stop()}},LA,this,[[5,11]])})),function(LA){return SA.apply(this,arguments)})},{key:"addMarker",value:(yA=x(YA().mark(function LA(DA,sA){var FA,UA;return YA().wrap(function(Tt){for(;;)switch(Tt.prev=Tt.next){case 0:if(FA="/marker_"+this.markerCount++,sA.indexOf(`
Name: `+qA.name+`
Message: `+qA.message,wt.setAttribute("id","error-popup"),document.body.appendChild(wt)}},1e3)};var CA=document.createElement("video");if(CA.setAttribute("autoplay",""),CA.setAttribute("muted",""),CA.setAttribute("playsinline",""),CA.style.width=this.parameters.displayWidth+"px",CA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var kA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?kA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?kA="navigator.mediaDevices.getUserMedia":console.assert(!1);return X({name:"",message:"WebRTC issue-! "+kA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(qA){var gt={audio:!1,video:{facingMode:"environment",width:{ideal:AA.parameters.sourceWidth},height:{ideal:AA.parameters.sourceHeight}}};AA.parameters.deviceId!==null&&(gt.video.deviceId={exact:AA.parameters.deviceId}),navigator.mediaDevices.getUserMedia(gt).then(function(wt){CA.srcObject=wt;var Pt=new CustomEvent("camera-init",{stream:wt});window.dispatchEvent(Pt),document.body.addEventListener("click",AA.onInitialClick,{once:!0}),V()}).catch(function(wt){X({name:wt.name,message:wt.message})})}).catch(function(qA){X({message:qA.message})}),CA},rt.prototype.dispose=function(){switch(this.ready=!1,this.parameters.sourceType){case"image":this._disposeSourceImage();break;case"video":this._disposeSourceVideo();break;case"webcam":this._disposeSourceWebcam()}this.domElement=null,document.body.removeEventListener("click",this.onInitialClick,{once:!0})},rt.prototype._disposeSourceImage=function(){var V=document.querySelector("#arjs-video");V&&V.remove()},rt.prototype._disposeSourceVideo=function(){var V=document.querySelector("#arjs-video");V&&(V.pause(),V.removeAttribute("src"),V.load(),V.remove())},rt.prototype._disposeSourceWebcam=function(){var V=document.querySelector("#arjs-video");V&&(V.srcObject&&V.srcObject.getTracks&&V.srcObject.getTracks().map(X=>X.stop()),V.remove())},rt.prototype.hasMobileTorch=function(){var V=arToolkitSource.domElement.srcObject;if(V instanceof MediaStream==0)return!1;this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var X=V.getVideoTracks()[0];return X.getCapabilities!==void 0&&!!X.getCapabilities().torch},rt.prototype.toggleMobileTorch=function(){console.assert(this.hasMobileTorch()===!0);var V=arToolkitSource.domElement.srcObject;if(V instanceof MediaStream!=0){this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var X=V.getVideoTracks()[0];X.getCapabilities().torch?(this._currentTorchStatus=this._currentTorchStatus===!1,X.applyConstraints({advanced:[{torch:this._currentTorchStatus}]}).catch(function(CA){console.log(CA)})):document.getElementById("error-popup")||((AA=document.createElement("div")).innerHTML="no mobile torch is available on your camera",AA.setAttribute("id","error-popup"),document.body.appendChild(AA))}else{var AA;document.getElementById("error-popup")||((AA=document.createElement("div")).innerHTML="enabling mobile torch is available only on webcam",AA.setAttribute("id","error-popup"),document.body.appendChild(AA))}},rt.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},rt.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},rt.prototype.onResizeElement=function(){var V=window.innerWidth,X=window.innerHeight;if(console.assert(arguments.length===0),this.domElement.nodeName==="IMG")var AA=this.domElement.naturalWidth,CA=this.domElement.naturalHeight;else this.domElement.nodeName==="VIDEO"?(AA=this.domElement.videoWidth,CA=this.domElement.videoHeight):console.assert(!1);var kA=AA/CA;if(V/X<kA){var qA=kA*X;this.domElement.style.width=qA+"px",this.domElement.style.marginLeft=-(qA-V)/2+"px",this.domElement.style.height=X+"px",this.domElement.style.marginTop="0px"}else{var gt=1/(kA/V);this.domElement.style.height=gt+"px",this.domElement.style.marginTop=-(gt-X)/2+"px",this.domElement.style.width=V+"px",this.domElement.style.marginLeft="0px"}},rt.prototype.copyElementSizeTo=function(V){window.innerWidth>window.innerHeight?(V.style.width=this.domElement.style.width,V.style.height=this.domElement.style.height,V.style.marginLeft=this.domElement.style.marginLeft,V.style.marginTop=this.domElement.style.marginTop):(V.style.height=this.domElement.style.height,V.style.width=4*parseInt(V.style.height)/3+"px",V.style.marginLeft=(window.innerWidth-parseInt(V.style.width))/2+"px",V.style.marginTop=0)},rt.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},rt.prototype.onResize=function(V,X,AA){if(arguments.length!==3)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var CA=V.parameters.trackingBackend;CA==="artoolkit"?(this.onResizeElement(),!X.domElement.dataset.aframeCanvas&&this.copyElementSizeTo(X.domElement),V.arController!==null&&this.copyElementSizeTo(V.arController.canvas)):console.assert(!1,"unhandled trackingBackend "+CA),CA==="artoolkit"?V.arController!==null&&AA.projectionMatrix.copy(V.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+CA)};const Rt=rt,TA=function(V,X,AA){var CA=this;f.call(this,X),arguments.length>3&&console.assert("wrong api for",TA),this.parameters={subMarkersControls:AA.subMarkersControls,subMarkerPoses:AA.subMarkerPoses,changeMatrixMode:AA.changeMatrixMode!==void 0?AA.changeMatrixMode:"modelViewMatrix"},this.object3d.visible=!1,this.subMarkersControls=this.parameters.subMarkersControls,this.subMarkerPoses=this.parameters.subMarkerPoses,V.addEventListener("sourceProcessed",function(){CA._onSourceProcessed()})};TA.prototype=Object.create(f.prototype),TA.prototype.constructor=TA,TA.prototype._onSourceProcessed=function(){var V=this,X={count:0,position:{sum:new a.Vector3(0,0,0),average:new a.Vector3(0,0,0)},quaternion:{sum:new a.Quaternion(0,0,0,0),average:new a.Quaternion(0,0,0,0)},scale:{sum:new a.Vector3(0,0,0),average:new a.Vector3(0,0,0)}},AA=V.parameters.subMarkersControls[0].object3d.quaternion;if(this.parameters.subMarkersControls.forEach(function(kA,qA){var gt=kA.object3d;if(gt.visible!==!1){var wt=gt.matrix.clone(),Pt=V.parameters.subMarkerPoses[qA];wt.multiply(new a.Matrix4().copy(Pt).invert());var Wt=new a.Vector3,De=new a.Quaternion,cg=new a.Vector3;wt.decompose(Wt,De,cg),X.count++,TA.averageVector3(X.position.sum,Wt,X.count,X.position.average),TA.averageQuaternion(X.quaternion.sum,De,AA,X.count,X.quaternion.average),TA.averageVector3(X.scale.sum,cg,X.count,X.scale.average)}}),X.count>0?V.object3d.visible=!0:V.object3d.visible=!1,X.count>0){var CA=new a.Matrix4;CA.compose(X.position.average,X.quaternion.average,X.scale.average),this.parameters.changeMatrixMode==="modelViewMatrix"?V.object3d.matrix.copy(CA):this.parameters.changeMatrixMode==="cameraTransformMatrix"?V.object3d.matrix.copy(CA).invert():console.assert(!1),V.object3d.matrix.decompose(V.object3d.position,V.object3d.quaternion,V.object3d.scale)}},TA.averageQuaternion=function(V,X,AA,CA,kA){return kA=kA||new a.Quaternion,console.assert(AA instanceof a.Quaternion==1),X.dot(AA)>0&&(X=new a.Quaternion(-X.x,-X.y,-X.z,-X.w)),V.x+=X.x,V.y+=X.y,V.z+=X.z,V.w+=X.w,kA.x=V.x/CA,kA.y=V.y/CA,kA.z=V.z/CA,kA.w=V.w/CA,kA.normalize(),kA},TA.averageVector3=function(V,X,AA,CA){return CA=CA||new a.Vector3,V.x+=X.x,V.y+=X.y,V.z+=X.z,CA.x=V.x/AA,CA.y=V.y/AA,CA.z=V.z/AA,CA},TA.computeCenter=function(V){var X=JSON.parse(V),AA={count:0,position:{sum:new a.Vector3(0,0,0),average:new a.Vector3(0,0,0)},quaternion:{sum:new a.Quaternion(0,0,0,0),average:new a.Quaternion(0,0,0,0)},scale:{sum:new a.Vector3(0,0,0),average:new a.Vector3(0,0,0)}},CA=new a.Quaternion;X.subMarkersControls.forEach(function(qA){var gt=new a.Matrix4().fromArray(qA.poseMatrix),wt=new a.Vector3,Pt=new a.Quaternion,Wt=new a.Vector3;gt.decompose(wt,Pt,Wt),AA.count++,TA.averageVector3(AA.position.sum,wt,AA.count,AA.position.average),TA.averageQuaternion(AA.quaternion.sum,Pt,CA,AA.count,AA.quaternion.average),TA.averageVector3(AA.scale.sum,Wt,AA.count,AA.scale.average)});var kA=new a.Matrix4;return kA.compose(AA.position.average,AA.quaternion.average,AA.scale.average),kA},TA.computeBoundingBox=function(V){var X=JSON.parse(V),AA=new a.Box3;return X.subMarkersControls.forEach(function(CA){var kA=new a.Matrix4().fromArray(CA.poseMatrix),qA=new a.Vector3,gt=new a.Quaternion,wt=new a.Vector3;kA.decompose(qA,gt,wt),AA.expandByPoint(qA)}),AA},TA.prototype.updateSmoothedControls=function(V,X){X===void 0&&(X=[[.4,.1,.3],[.5,.1,.4],[.5,.2,.5],[.6,.2,.7],[.6,.2,.7]]);var AA=0;if(this.parameters.subMarkersControls.forEach(function(kA,qA){kA.object3d.visible===!0&&AA++}),X[AA-1]!==void 0)var CA=X[AA-1];else CA=X[X.length-1];V.parameters.lerpPosition=CA[0],V.parameters.lerpQuaternion=CA[1],V.parameters.lerpScale=CA[2]},TA.fromJSON=function(V,X,AA,CA,kA){var qA=JSON.parse(CA),gt=[],wt=[];return kA=kA||{},qA.subMarkersControls.forEach(function(Pt){var Wt=new a.Object3D;X.add(Wt);var De=new L(V,Wt,Pt.parameters);gt.push(De),wt.push(new a.Matrix4().fromArray(Pt.poseMatrix))}),kA.subMarkersControls=gt,kA.subMarkerPoses=wt,new $A(V,AA,kA)};const $A=TA,VA=function(V,X){var AA=this;this._arToolkitContext=V,this.subMarkersControls=X,this.enabled=!0,V.addEventListener("sourceProcessed",function(){AA._onSourceProcessed()})};VA.prototype._onSourceProcessed=function(){var V=this.subMarkersControls[0].object3d.quaternion;if(this.enabled!==!1)for(var X=this.subMarkersControls.filter(function(rA){return rA.object3d.visible===!0}),AA=Object.keys(X).length,CA=new THREE.Vector3,kA=new THREE.Quaternion,qA=new THREE.Vector3,gt=new THREE.Matrix4,wt=0;wt<AA;wt++)for(var Pt=X[wt],Wt=0;Wt<AA;Wt++){var De=X[Wt];if(wt!==Wt){Pt.object3d.userData.seenCouples===void 0&&(Pt.object3d.userData.seenCouples={});var cg=Pt.object3d.userData.seenCouples;cg[De.id]===void 0&&(cg[De.id]={count:0,position:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)},quaternion:{sum:new THREE.Quaternion(0,0,0,0),average:new THREE.Quaternion(0,0,0,0)},scale:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)}}),gt.copy(Pt.object3d.matrix).invert(),gt.multiply(De.object3d.matrix),gt.decompose(CA,kA,qA);var se=cg[De.id];se.count++,$A.averageVector3(se.position.sum,CA,se.count,se.position.average),$A.averageQuaternion(se.quaternion.sum,kA,V,se.count,se.quaternion.average),$A.averageVector3(se.scale.sum,qA,se.count,se.scale.average)}}},VA.prototype.computeResult=function(){var V=this,X=this.subMarkersControls[0];this.deleteResult(),X.object3d.userData.result={averageMatrix:new THREE.Matrix4,confidenceFactor:1};do{var AA=!1;this.subMarkersControls.forEach(function(CA){var kA=CA.object3d.userData.result;if(!(kA!==void 0&&kA.confidenceFactor>=1)){var qA=V._getLearnedCoupleStats(CA);if(qA!==null){var gt=V._getSubMarkerControlsByID(qA),wt=CA.object3d.userData.seenCouples[qA],Pt=new THREE.Matrix4;Pt.compose(wt.position.average,wt.quaternion.average,wt.scale.average);var Wt=gt.object3d.userData.result.averageMatrix,De=new THREE.Matrix4().getInverse(Wt).multiply(Pt);De=new THREE.Matrix4().getInverse(De),console.assert(CA.object3d.userData.result===void 0),CA.object3d.userData.result={averageMatrix:De,confidenceFactor:1},AA=!0}}})}while(AA===!0)},VA.prototype._getLearnedCoupleStats=function(V){if(V.object3d.userData.seenCouples===void 0)return null;for(var X=V.object3d.userData.seenCouples,AA=Object.keys(X).map(Number),CA=0;CA<AA.length;CA++){var kA=AA[CA],qA=this._getSubMarkerControlsByID(kA).object3d.userData.result;if(qA!==void 0&&qA.confidenceFactor>=1)return kA}return null},VA.prototype._getSubMarkerControlsByID=function(V){for(var X=0;X<this.subMarkersControls.length;X++){var AA=this.subMarkersControls[X];if(AA.id===V)return AA}return null},VA.prototype.toJSON=function(){this.computeResult();var V={meta:{createdBy:"Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION,createdAt:new Date().toJSON()},trackingBackend:this._arToolkitContext.parameters.trackingBackend,subMarkersControls:[]},X=this.subMarkersControls[0];return new THREE.Matrix4().copy(X.object3d.matrix).invert(),this.subMarkersControls.forEach(function(AA,CA){if(AA.object3d.userData.result!==void 0){var kA=AA.object3d.userData.result.averageMatrix;console.assert(kA instanceof THREE.Matrix4);var qA={parameters:{},poseMatrix:kA.toArray()};AA.parameters.type==="pattern"?(qA.parameters.type=AA.parameters.type,qA.parameters.patternUrl=AA.parameters.patternUrl):AA.parameters.type==="barcode"?(qA.parameters.type=AA.parameters.type,qA.parameters.barcodeValue=AA.parameters.barcodeValue):console.assert(!1),V.subMarkersControls.push(qA)}}),JSON.stringify(V,null,"	")},VA.prototype.resetStats=function(){this.deleteResult(),this.subMarkersControls.forEach(function(V){delete V.object3d.userData.seenCouples})},VA.prototype.deleteResult=function(){this.subMarkersControls.forEach(function(V){delete V.object3d.userData.result})};const ft=VA,it={navigateToLearnerPage:function(V,X){var AA={backURL:location.href,trackingBackend:X,markersControlsParameters:it.createDefaultMarkersControlsParameters(X)};location.href=V+"?"+encodeURIComponent(JSON.stringify(AA))},storeDefaultMultiMarkerFile:function(V){var X=it.createDefaultMultiMarkerFile(V);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(X))},createDefaultMultiMarkerFile:function(V){console.assert(V);var X=document.createElement("a");X.href=pA.baseURL;var AA=X.href,CA={meta:{createdBy:"AR.js "+pA.REVISION+" - Default Marker",createdAt:new Date().toJSON()},trackingBackend:V,subMarkersControls:[]};return CA.subMarkersControls[0]={parameters:{},poseMatrix:new a.Matrix4().makeTranslation(0,0,0).toArray()},V==="artoolkit"?(CA.subMarkersControls[0].parameters.type="pattern",CA.subMarkersControls[0].parameters.patternUrl=AA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"):console.assert(!1),CA},createDefaultMarkersControlsParameters:function(V){var X=document.createElement("a");X.href=pA.baseURL;var AA=X.href;if(V==="artoolkit")var CA=[{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"},{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-kanji.patt"},{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"},{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"},{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"},{type:"pattern",patternUrl:AA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt"}];else console.assert(!1);return CA},storeMarkersAreaFileFromResolution:function(V,X,AA){var CA=this.buildMarkersAreaFileFromResolution(V,X,AA);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(CA))},buildMarkersAreaFileFromResolution:function(V,X,AA){var CA={meta:{createdBy:"AR.js - Augmented Website",createdAt:new Date().toJSON()},trackingBackend:V,subMarkersControls:[]};if(X>AA)var kA=.4*AA;else X<AA?kA=.4*X:X===AA?kA=.33*X:console.assert(!1);var qA=.8*kA,gt=(X-kA)/2/qA,wt=(AA-kA)/2/qA,Pt=Wt("center",0,0);return CA.subMarkersControls.push(Pt),Pt=Wt("topleft",-gt,-wt),CA.subMarkersControls.push(Pt),Pt=Wt("topright",+gt,-wt),CA.subMarkersControls.push(Pt),Pt=Wt("bottomleft",-gt,+wt),CA.subMarkersControls.push(Pt),Pt=Wt("bottomright",+gt,+wt),CA.subMarkersControls.push(Pt),CA;function Wt(De,cg,se){console.log("buildSubMarkerControls",De,cg,se);var rA={parameters:{},poseMatrix:new a.Matrix4().makeTranslation(cg,0,se).toArray()};return V==="artoolkit"?function(Qt,At){var Nt=document.createElement("a");Nt.href=pA.baseURL;var ut=Nt.href,fe={center:ie(ut+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"),topleft:ie(ut+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"),topright:ie(ut+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"),bottomleft:ie(ut+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"),bottomright:ie(ut+"examples/marker-training/examples/pattern-files/pattern-letterF.patt")};return console.assert(fe[At]!==void 0),Qt.type="pattern",void(Qt.patternUrl=fe[At]);function ie(Zt){var Fe=document.createElement("a");return Fe.href=Zt,Fe.href}}(rA.parameters,De):console.assert(!1),rA}}},nt=it})(),h})())})(FD);var vC=FD.exports;function Ku(E,t){if(t===qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),E;if(t===Bh||t===tD){let g=E.getIndex();if(g===null){const h=[],a=E.getAttribute("position");if(a!==void 0){for(let D=0;D<a.count;D++)h.push(D);E.setIndex(h),g=E.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),E}const B=g.count-2,o=[];if(t===Bh)for(let h=1;h<=B;h++)o.push(g.getX(0)),o.push(g.getX(h)),o.push(g.getX(h+1));else for(let h=0;h<B;h++)h%2===0?(o.push(g.getX(h)),o.push(g.getX(h+1)),o.push(g.getX(h+2))):(o.push(g.getX(h+2)),o.push(g.getX(h+1)),o.push(g.getX(h)));o.length/3!==B&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=E.clone();return r.setIndex(o),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),E}class Qk extends EE{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(g){return new ck(g)}),this.register(function(g){return new yk(g)}),this.register(function(g){return new Mk(g)}),this.register(function(g){return new mk(g)}),this.register(function(g){return new dk(g)}),this.register(function(g){return new uk(g)}),this.register(function(g){return new Dk(g)}),this.register(function(g){return new fk(g)}),this.register(function(g){return new hk(g)}),this.register(function(g){return new pk(g)}),this.register(function(g){return new lk(g)}),this.register(function(g){return new wk(g)}),this.register(function(g){return new rk(g)}),this.register(function(g){return new Rk(g)}),this.register(function(g){return new Sk(g)})}load(t,g,B,o){const r=this;let h;this.resourcePath!==""?h=this.resourcePath:this.path!==""?h=this.path:h=sh.extractUrlBase(t),this.manager.itemStart(t);const a=function(f){o?o(f):console.error(f),r.manager.itemError(t),r.manager.itemEnd(t)},D=new GD(this.manager);D.setPath(this.path),D.setResponseType("arraybuffer"),D.setRequestHeader(this.requestHeader),D.setWithCredentials(this.withCredentials),D.load(t,function(f){try{r.parse(f,h,function(m){g(m),r.manager.itemEnd(t)},a)}catch(m){a(m)}},B,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,g,B,o){let r;const h={},a={},D=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(D.decode(new Uint8Array(t,0,4))===ND){try{h[yg.KHR_BINARY_GLTF]=new Gk(t)}catch(S){o&&o(S);return}r=JSON.parse(h[yg.KHR_BINARY_GLTF].content)}else r=JSON.parse(D.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new Tk(r,{path:g||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const S=this.pluginCallbacks[m](f);a[S.name]=S,h[S.name]=!0}if(r.extensionsUsed)for(let m=0;m<r.extensionsUsed.length;++m){const S=r.extensionsUsed[m],F=r.extensionsRequired||[];switch(S){case yg.KHR_MATERIALS_UNLIT:h[S]=new ak;break;case yg.KHR_DRACO_MESH_COMPRESSION:h[S]=new Fk(r,this.dracoLoader);break;case yg.KHR_TEXTURE_TRANSFORM:h[S]=new Nk;break;case yg.KHR_MESH_QUANTIZATION:h[S]=new Uk;break;default:F.indexOf(S)>=0&&a[S]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+S+'".')}}f.setExtensions(h),f.setPlugins(a),f.parse(B,o)}parseAsync(t,g){const B=this;return new Promise(function(o,r){B.parse(t,g,o,r)})}}function sk(){let E={};return{get:function(t){return E[t]},add:function(t,g){E[t]=g},remove:function(t){delete E[t]},removeAll:function(){E={}}}}const yg={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rk{constructor(t){this.parser=t,this.name=yg.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,g=this.parser.json.nodes||[];for(let B=0,o=g.length;B<o;B++){const r=g[B];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const g=this.parser,B="light:"+t;let o=g.cache.get(B);if(o)return o;const r=g.json,D=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let f;const m=new Cg(16777215);D.color!==void 0&&m.fromArray(D.color);const S=D.range!==void 0?D.range:0;switch(D.type){case"directional":f=new XU(m),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new VU(m),f.distance=S;break;case"spot":f=new PU(m),f.distance=S,D.spot=D.spot||{},D.spot.innerConeAngle=D.spot.innerConeAngle!==void 0?D.spot.innerConeAngle:0,D.spot.outerConeAngle=D.spot.outerConeAngle!==void 0?D.spot.outerConeAngle:Math.PI/4,f.angle=D.spot.outerConeAngle,f.penumbra=1-D.spot.innerConeAngle/D.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+D.type)}return f.position.set(0,0,0),f.decay=2,LC(f,D),D.intensity!==void 0&&(f.intensity=D.intensity),f.name=g.createUniqueName(D.name||"light_"+t),o=Promise.resolve(f),g.cache.add(B,o),o}getDependency(t,g){if(t==="light")return this._loadLight(g)}createNodeAttachment(t){const g=this,B=this.parser,r=B.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(D){return B._getNodeRef(g.cache,a,D)})}}class ak{constructor(){this.name=yg.KHR_MATERIALS_UNLIT}getMaterialType(){return Fn}extendParams(t,g,B){const o=[];t.color=new Cg(1,1,1),t.opacity=1;const r=g.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const h=r.baseColorFactor;t.color.fromArray(h),t.opacity=h[3]}r.baseColorTexture!==void 0&&o.push(B.assignTexture(t,"map",r.baseColorTexture,tg))}return Promise.all(o)}}class hk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,g){const o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=o.extensions[this.name].emissiveStrength;return r!==void 0&&(g.emissiveIntensity=r),Promise.resolve()}}class ck{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];if(h.clearcoatFactor!==void 0&&(g.clearcoat=h.clearcoatFactor),h.clearcoatTexture!==void 0&&r.push(B.assignTexture(g,"clearcoatMap",h.clearcoatTexture)),h.clearcoatRoughnessFactor!==void 0&&(g.clearcoatRoughness=h.clearcoatRoughnessFactor),h.clearcoatRoughnessTexture!==void 0&&r.push(B.assignTexture(g,"clearcoatRoughnessMap",h.clearcoatRoughnessTexture)),h.clearcoatNormalTexture!==void 0&&(r.push(B.assignTexture(g,"clearcoatNormalMap",h.clearcoatNormalTexture)),h.clearcoatNormalTexture.scale!==void 0)){const a=h.clearcoatNormalTexture.scale;g.clearcoatNormalScale=new Mg(a,a)}return Promise.all(r)}}class lk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];return h.iridescenceFactor!==void 0&&(g.iridescence=h.iridescenceFactor),h.iridescenceTexture!==void 0&&r.push(B.assignTexture(g,"iridescenceMap",h.iridescenceTexture)),h.iridescenceIor!==void 0&&(g.iridescenceIOR=h.iridescenceIor),g.iridescenceThicknessRange===void 0&&(g.iridescenceThicknessRange=[100,400]),h.iridescenceThicknessMinimum!==void 0&&(g.iridescenceThicknessRange[0]=h.iridescenceThicknessMinimum),h.iridescenceThicknessMaximum!==void 0&&(g.iridescenceThicknessRange[1]=h.iridescenceThicknessMaximum),h.iridescenceThicknessTexture!==void 0&&r.push(B.assignTexture(g,"iridescenceThicknessMap",h.iridescenceThicknessTexture)),Promise.all(r)}}class dk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_SHEEN}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[];g.sheenColor=new Cg(0,0,0),g.sheenRoughness=0,g.sheen=1;const h=o.extensions[this.name];return h.sheenColorFactor!==void 0&&g.sheenColor.fromArray(h.sheenColorFactor),h.sheenRoughnessFactor!==void 0&&(g.sheenRoughness=h.sheenRoughnessFactor),h.sheenColorTexture!==void 0&&r.push(B.assignTexture(g,"sheenColorMap",h.sheenColorTexture,tg)),h.sheenRoughnessTexture!==void 0&&r.push(B.assignTexture(g,"sheenRoughnessMap",h.sheenRoughnessTexture)),Promise.all(r)}}class uk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];return h.transmissionFactor!==void 0&&(g.transmission=h.transmissionFactor),h.transmissionTexture!==void 0&&r.push(B.assignTexture(g,"transmissionMap",h.transmissionTexture)),Promise.all(r)}}class Dk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_VOLUME}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];g.thickness=h.thicknessFactor!==void 0?h.thicknessFactor:0,h.thicknessTexture!==void 0&&r.push(B.assignTexture(g,"thicknessMap",h.thicknessTexture)),g.attenuationDistance=h.attenuationDistance||1/0;const a=h.attenuationColor||[1,1,1];return g.attenuationColor=new Cg(a[0],a[1],a[2]),Promise.all(r)}}class fk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_IOR}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=o.extensions[this.name];return g.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_SPECULAR}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];g.specularIntensity=h.specularFactor!==void 0?h.specularFactor:1,h.specularTexture!==void 0&&r.push(B.assignTexture(g,"specularIntensityMap",h.specularTexture));const a=h.specularColorFactor||[1,1,1];return g.specularColor=new Cg(a[0],a[1],a[2]),h.specularColorTexture!==void 0&&r.push(B.assignTexture(g,"specularColorMap",h.specularColorTexture,tg)),Promise.all(r)}}class wk{constructor(t){this.parser=t,this.name=yg.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const B=this.parser.json.materials[t];return!B.extensions||!B.extensions[this.name]?null:TC}extendMaterialParams(t,g){const B=this.parser,o=B.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],h=o.extensions[this.name];return h.anisotropyStrength!==void 0&&(g.anisotropy=h.anisotropyStrength),h.anisotropyRotation!==void 0&&(g.anisotropyRotation=h.anisotropyRotation),h.anisotropyTexture!==void 0&&r.push(B.assignTexture(g,"anisotropyMap",h.anisotropyTexture)),Promise.all(r)}}class yk{constructor(t){this.parser=t,this.name=yg.KHR_TEXTURE_BASISU}loadTexture(t){const g=this.parser,B=g.json,o=B.textures[t];if(!o.extensions||!o.extensions[this.name])return null;const r=o.extensions[this.name],h=g.options.ktx2Loader;if(!h){if(B.extensionsRequired&&B.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return g.loadTextureImage(t,r.source,h)}}class Mk{constructor(t){this.parser=t,this.name=yg.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const g=this.name,B=this.parser,o=B.json,r=o.textures[t];if(!r.extensions||!r.extensions[g])return null;const h=r.extensions[g],a=o.images[h.source];let D=B.textureLoader;if(a.uri){const f=B.options.manager.getHandler(a.uri);f!==null&&(D=f)}return this.detectSupport().then(function(f){if(f)return B.loadTextureImage(t,h.source,D);if(o.extensionsRequired&&o.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return B.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const g=new Image;g.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",g.onload=g.onerror=function(){t(g.height===1)}})),this.isSupported}}class mk{constructor(t){this.parser=t,this.name=yg.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const g=this.name,B=this.parser,o=B.json,r=o.textures[t];if(!r.extensions||!r.extensions[g])return null;const h=r.extensions[g],a=o.images[h.source];let D=B.textureLoader;if(a.uri){const f=B.options.manager.getHandler(a.uri);f!==null&&(D=f)}return this.detectSupport().then(function(f){if(f)return B.loadTextureImage(t,h.source,D);if(o.extensionsRequired&&o.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return B.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const g=new Image;g.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",g.onload=g.onerror=function(){t(g.height===1)}})),this.isSupported}}class Rk{constructor(t){this.name=yg.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const g=this.parser.json,B=g.bufferViews[t];if(B.extensions&&B.extensions[this.name]){const o=B.extensions[this.name],r=this.parser.getDependency("buffer",o.buffer),h=this.parser.options.meshoptDecoder;if(!h||!h.supported){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const D=o.byteOffset||0,f=o.byteLength||0,m=o.count,S=o.byteStride,F=new Uint8Array(a,D,f);return h.decodeGltfBufferAsync?h.decodeGltfBufferAsync(m,S,F,o.mode,o.filter).then(function(J){return J.buffer}):h.ready.then(function(){const J=new ArrayBuffer(m*S);return h.decodeGltfBuffer(new Uint8Array(J),m,S,F,o.mode,o.filter),J})})}else return null}}class Sk{constructor(t){this.name=yg.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const g=this.parser.json,B=g.nodes[t];if(!B.extensions||!B.extensions[this.name]||B.mesh===void 0)return null;const o=g.meshes[B.mesh];for(const f of o.primitives)if(f.mode!==qi.TRIANGLES&&f.mode!==qi.TRIANGLE_STRIP&&f.mode!==qi.TRIANGLE_FAN&&f.mode!==void 0)return null;const h=B.extensions[this.name].attributes,a=[],D={};for(const f in h)a.push(this.parser.getDependency("accessor",h[f]).then(m=>(D[f]=m,D[f])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(f=>{const m=f.pop(),S=m.isGroup?m.children:[m],F=f[0].count,J=[];for(const P of S){const T=new hg,x=new bA,L=new HC,iA=new bA(1,1,1),j=new GU(P.geometry,P.material,F);for(let gA=0;gA<F;gA++)D.TRANSLATION&&x.fromBufferAttribute(D.TRANSLATION,gA),D.ROTATION&&L.fromBufferAttribute(D.ROTATION,gA),D.SCALE&&iA.fromBufferAttribute(D.SCALE,gA),j.setMatrixAt(gA,T.compose(x,L,iA));for(const gA in D)gA!=="TRANSLATION"&&gA!=="ROTATION"&&gA!=="SCALE"&&P.geometry.setAttribute(gA,D[gA]);iI.prototype.copy.call(j,P),this.parser.assignFinalMaterial(j),J.push(j)}return m.isGroup?(m.clear(),m.add(...J),m):J[0]}))}}const ND="glTF",aQ=12,Yu={JSON:1313821514,BIN:5130562};class Gk{constructor(t){this.name=yg.KHR_BINARY_GLTF,this.content=null,this.body=null;const g=new DataView(t,0,aQ),B=new TextDecoder;if(this.header={magic:B.decode(new Uint8Array(t.slice(0,4))),version:g.getUint32(4,!0),length:g.getUint32(8,!0)},this.header.magic!==ND)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-aQ,r=new DataView(t,aQ);let h=0;for(;h<o;){const a=r.getUint32(h,!0);h+=4;const D=r.getUint32(h,!0);if(h+=4,D===Yu.JSON){const f=new Uint8Array(t,aQ+h,a);this.content=B.decode(f)}else if(D===Yu.BIN){const f=aQ+h;this.body=t.slice(f,f+a)}h+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Fk{constructor(t,g){if(!g)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yg.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=g,this.dracoLoader.preload()}decodePrimitive(t,g){const B=this.json,o=this.dracoLoader,r=t.extensions[this.name].bufferView,h=t.extensions[this.name].attributes,a={},D={},f={};for(const m in h){const S=rh[m]||m.toLowerCase();a[S]=h[m]}for(const m in t.attributes){const S=rh[m]||m.toLowerCase();if(h[m]!==void 0){const F=B.accessors[t.attributes[m]],J=Po[F.componentType];f[S]=J.name,D[S]=F.normalized===!0}}return g.getDependency("bufferView",r).then(function(m){return new Promise(function(S){o.decodeDracoFile(m,function(F){for(const J in F.attributes){const P=F.attributes[J],T=D[J];T!==void 0&&(P.normalized=T)}S(F)},a,f)})})}}class Nk{constructor(){this.name=yg.KHR_TEXTURE_TRANSFORM}extendTexture(t,g){return(g.texCoord===void 0||g.texCoord===t.channel)&&g.offset===void 0&&g.rotation===void 0&&g.scale===void 0||(t=t.clone(),g.texCoord!==void 0&&(t.channel=g.texCoord),g.offset!==void 0&&t.offset.fromArray(g.offset),g.rotation!==void 0&&(t.rotation=g.rotation),g.scale!==void 0&&t.repeat.fromArray(g.scale),t.needsUpdate=!0),t}}class Uk{constructor(){this.name=yg.KHR_MESH_QUANTIZATION}}class UD extends pQ{constructor(t,g,B,o){super(t,g,B,o)}copySampleValue_(t){const g=this.resultBuffer,B=this.sampleValues,o=this.valueSize,r=t*o*3+o;for(let h=0;h!==o;h++)g[h]=B[r+h];return g}interpolate_(t,g,B,o){const r=this.resultBuffer,h=this.sampleValues,a=this.valueSize,D=a*2,f=a*3,m=o-g,S=(B-g)/m,F=S*S,J=F*S,P=t*f,T=P-f,x=-2*J+3*F,L=J-F,iA=1-x,j=L-F+S;for(let gA=0;gA!==a;gA++){const dA=h[T+gA+a],fA=h[T+gA+D]*m,pA=h[P+gA+a],YA=h[P+gA]*m;r[gA]=iA*dA+j*fA+x*pA+L*YA}return r}}const kk=new HC;class Lk extends UD{interpolate_(t,g,B,o){const r=super.interpolate_(t,g,B,o);return kk.fromArray(r).normalize().toArray(r),r}}const qi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vu={9728:KI,9729:li,9984:ih,9985:Vu,9986:gr,9987:xn},Hu={33071:_i,33648:ir,10497:Xo},$a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xk={CUBICSPLINE:void 0,LINEAR:jo,STEP:DQ},Ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bk(E){return E.DefaultMaterial===void 0&&(E.DefaultMaterial=new Gh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:QC})),E.DefaultMaterial}function mn(E,t,g){for(const B in g.extensions)E[B]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[B]=g.extensions[B])}function LC(E,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(E.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Jk(E,t,g){let B=!1,o=!1,r=!1;for(let f=0,m=t.length;f<m;f++){const S=t[f];if(S.POSITION!==void 0&&(B=!0),S.NORMAL!==void 0&&(o=!0),S.COLOR_0!==void 0&&(r=!0),B&&o&&r)break}if(!B&&!o&&!r)return Promise.resolve(E);const h=[],a=[],D=[];for(let f=0,m=t.length;f<m;f++){const S=t[f];if(B){const F=S.POSITION!==void 0?g.getDependency("accessor",S.POSITION):E.attributes.position;h.push(F)}if(o){const F=S.NORMAL!==void 0?g.getDependency("accessor",S.NORMAL):E.attributes.normal;a.push(F)}if(r){const F=S.COLOR_0!==void 0?g.getDependency("accessor",S.COLOR_0):E.attributes.color;D.push(F)}}return Promise.all([Promise.all(h),Promise.all(a),Promise.all(D)]).then(function(f){const m=f[0],S=f[1],F=f[2];return B&&(E.morphAttributes.position=m),o&&(E.morphAttributes.normal=S),r&&(E.morphAttributes.color=F),E.morphTargetsRelative=!0,E})}function Kk(E,t){if(E.updateMorphTargets(),t.weights!==void 0)for(let g=0,B=t.weights.length;g<B;g++)E.morphTargetInfluences[g]=t.weights[g];if(t.extras&&Array.isArray(t.extras.targetNames)){const g=t.extras.targetNames;if(E.morphTargetInfluences.length===g.length){E.morphTargetDictionary={};for(let B=0,o=g.length;B<o;B++)E.morphTargetDictionary[g[B]]=B}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yk(E){let t;const g=E.extensions&&E.extensions[yg.KHR_DRACO_MESH_COMPRESSION];if(g?t="draco:"+g.bufferView+":"+g.indices+":"+th(g.attributes):t=E.indices+":"+th(E.attributes)+":"+E.mode,E.targets!==void 0)for(let B=0,o=E.targets.length;B<o;B++)t+=":"+th(E.targets[B]);return t}function th(E){let t="";const g=Object.keys(E).sort();for(let B=0,o=g.length;B<o;B++)t+=g[B]+":"+E[g[B]]+";";return t}function ah(E){switch(E){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vk(E){return E.search(/\.jpe?g($|\?)/i)>0||E.search(/^data\:image\/jpeg/)===0?"image/jpeg":E.search(/\.webp($|\?)/i)>0||E.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hk=new hg;class Tk{constructor(t={},g={}){this.json=t,this.extensions={},this.plugins={},this.options=g,this.cache=new sk,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let B=!1,o=!1,r=-1;typeof navigator<"u"&&(B=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,o=navigator.userAgent.indexOf("Firefox")>-1,r=o?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||B||o&&r<98?this.textureLoader=new _U(this.options.manager):this.textureLoader=new jU(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new GD(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,g){const B=this,o=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(h){return h._markDefs&&h._markDefs()}),Promise.all(this._invokeAll(function(h){return h.beforeRoot&&h.beforeRoot()})).then(function(){return Promise.all([B.getDependencies("scene"),B.getDependencies("animation"),B.getDependencies("camera")])}).then(function(h){const a={scene:h[0][o.scene||0],scenes:h[0],animations:h[1],cameras:h[2],asset:o.asset,parser:B,userData:{}};mn(r,a,o),LC(a,o),Promise.all(B._invokeAll(function(D){return D.afterRoot&&D.afterRoot(a)})).then(function(){t(a)})}).catch(g)}_markDefs(){const t=this.json.nodes||[],g=this.json.skins||[],B=this.json.meshes||[];for(let o=0,r=g.length;o<r;o++){const h=g[o].joints;for(let a=0,D=h.length;a<D;a++)t[h[a]].isBone=!0}for(let o=0,r=t.length;o<r;o++){const h=t[o];h.mesh!==void 0&&(this._addNodeRef(this.meshCache,h.mesh),h.skin!==void 0&&(B[h.mesh].isSkinnedMesh=!0)),h.camera!==void 0&&this._addNodeRef(this.cameraCache,h.camera)}}_addNodeRef(t,g){g!==void 0&&(t.refs[g]===void 0&&(t.refs[g]=t.uses[g]=0),t.refs[g]++)}_getNodeRef(t,g,B){if(t.refs[g]<=1)return B;const o=B.clone(),r=(h,a)=>{const D=this.associations.get(h);D!=null&&this.associations.set(a,D);for(const[f,m]of h.children.entries())r(m,a.children[f])};return r(B,o),o.name+="_instance_"+t.uses[g]++,o}_invokeOne(t){const g=Object.values(this.plugins);g.push(this);for(let B=0;B<g.length;B++){const o=t(g[B]);if(o)return o}return null}_invokeAll(t){const g=Object.values(this.plugins);g.unshift(this);const B=[];for(let o=0;o<g.length;o++){const r=t(g[o]);r&&B.push(r)}return B}getDependency(t,g){const B=t+":"+g;let o=this.cache.get(B);if(!o){switch(t){case"scene":o=this.loadScene(g);break;case"node":o=this._invokeOne(function(r){return r.loadNode&&r.loadNode(g)});break;case"mesh":o=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(g)});break;case"accessor":o=this.loadAccessor(g);break;case"bufferView":o=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(g)});break;case"buffer":o=this.loadBuffer(g);break;case"material":o=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(g)});break;case"texture":o=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(g)});break;case"skin":o=this.loadSkin(g);break;case"animation":o=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(g)});break;case"camera":o=this.loadCamera(g);break;default:if(o=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,g)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(B,o)}return o}getDependencies(t){let g=this.cache.get(t);if(!g){const B=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];g=Promise.all(o.map(function(r,h){return B.getDependency(t,h)})),this.cache.add(t,g)}return g}loadBuffer(t){const g=this.json.buffers[t],B=this.fileLoader;if(g.type&&g.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+g.type+" buffer type is not supported.");if(g.uri===void 0&&t===0)return Promise.resolve(this.extensions[yg.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(r,h){B.load(sh.resolveURL(g.uri,o.path),r,void 0,function(){h(new Error('THREE.GLTFLoader: Failed to load buffer "'+g.uri+'".'))})})}loadBufferView(t){const g=this.json.bufferViews[t];return this.getDependency("buffer",g.buffer).then(function(B){const o=g.byteLength||0,r=g.byteOffset||0;return B.slice(r,r+o)})}loadAccessor(t){const g=this,B=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){const h=$a[o.type],a=Po[o.componentType],D=o.normalized===!0,f=new a(o.count*h);return Promise.resolve(new si(f,h,D))}const r=[];return o.bufferView!==void 0?r.push(this.getDependency("bufferView",o.bufferView)):r.push(null),o.sparse!==void 0&&(r.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(r).then(function(h){const a=h[0],D=$a[o.type],f=Po[o.componentType],m=f.BYTES_PER_ELEMENT,S=m*D,F=o.byteOffset||0,J=o.bufferView!==void 0?B.bufferViews[o.bufferView].byteStride:void 0,P=o.normalized===!0;let T,x;if(J&&J!==S){const L=Math.floor(F/J),iA="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+L+":"+o.count;let j=g.cache.get(iA);j||(T=new f(a,L*J,o.count*J/m),j=new wU(T,J/m),g.cache.add(iA,j)),x=new yh(j,D,F%J/m,P)}else a===null?T=new f(o.count*D):T=new f(a,F,o.count*D),x=new si(T,D,P);if(o.sparse!==void 0){const L=$a.SCALAR,iA=Po[o.sparse.indices.componentType],j=o.sparse.indices.byteOffset||0,gA=o.sparse.values.byteOffset||0,dA=new iA(h[1],j,o.sparse.count*L),fA=new f(h[2],gA,o.sparse.count*D);a!==null&&(x=new si(x.array.slice(),x.itemSize,x.normalized));for(let pA=0,YA=dA.length;pA<YA;pA++){const $=dA[pA];if(x.setX($,fA[pA*D]),D>=2&&x.setY($,fA[pA*D+1]),D>=3&&x.setZ($,fA[pA*D+2]),D>=4&&x.setW($,fA[pA*D+3]),D>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(t){const g=this.json,B=this.options,r=g.textures[t].source,h=g.images[r];let a=this.textureLoader;if(h.uri){const D=B.manager.getHandler(h.uri);D!==null&&(a=D)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,g,B){const o=this,r=this.json,h=r.textures[t],a=r.images[g],D=(a.uri||a.bufferView)+":"+h.sampler;if(this.textureCache[D])return this.textureCache[D];const f=this.loadImageSource(g,B).then(function(m){m.flipY=!1,m.name=h.name||a.name||"",m.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(m.name=a.uri);const F=(r.samplers||{})[h.sampler]||{};return m.magFilter=vu[F.magFilter]||li,m.minFilter=vu[F.minFilter]||xn,m.wrapS=Hu[F.wrapS]||Xo,m.wrapT=Hu[F.wrapT]||Xo,o.associations.set(m,{textures:t}),m}).catch(function(){return null});return this.textureCache[D]=f,f}loadImageSource(t,g){const B=this,o=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(S=>S.clone());const h=o.images[t],a=self.URL||self.webkitURL;let D=h.uri||"",f=!1;if(h.bufferView!==void 0)D=B.getDependency("bufferView",h.bufferView).then(function(S){f=!0;const F=new Blob([S],{type:h.mimeType});return D=a.createObjectURL(F),D});else if(h.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const m=Promise.resolve(D).then(function(S){return new Promise(function(F,J){let P=F;g.isImageBitmapLoader===!0&&(P=function(T){const x=new OI(T);x.needsUpdate=!0,F(x)}),g.load(sh.resolveURL(S,r.path),P,void 0,J)})}).then(function(S){return f===!0&&a.revokeObjectURL(D),S.userData.mimeType=h.mimeType||vk(h.uri),S}).catch(function(S){throw console.error("THREE.GLTFLoader: Couldn't load texture",D),S});return this.sourceCache[t]=m,m}assignTexture(t,g,B,o){const r=this;return this.getDependency("texture",B.index).then(function(h){if(!h)return null;if(B.texCoord!==void 0&&B.texCoord>0&&(h=h.clone(),h.channel=B.texCoord),r.extensions[yg.KHR_TEXTURE_TRANSFORM]){const a=B.extensions!==void 0?B.extensions[yg.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const D=r.associations.get(h);h=r.extensions[yg.KHR_TEXTURE_TRANSFORM].extendTexture(h,a),r.associations.set(h,D)}}return o!==void 0&&(h.colorSpace=o),t[g]=h,h})}assignFinalMaterial(t){const g=t.geometry;let B=t.material;const o=g.attributes.tangent===void 0,r=g.attributes.color!==void 0,h=g.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+B.uuid;let D=this.cache.get(a);D||(D=new yD,uB.prototype.copy.call(D,B),D.color.copy(B.color),D.map=B.map,D.sizeAttenuation=!1,this.cache.add(a,D)),B=D}else if(t.isLine){const a="LineBasicMaterial:"+B.uuid;let D=this.cache.get(a);D||(D=new mh,uB.prototype.copy.call(D,B),D.color.copy(B.color),D.map=B.map,this.cache.add(a,D)),B=D}if(o||r||h){let a="ClonedMaterial:"+B.uuid+":";o&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),h&&(a+="flat-shading:");let D=this.cache.get(a);D||(D=B.clone(),r&&(D.vertexColors=!0),h&&(D.flatShading=!0),o&&(D.normalScale&&(D.normalScale.y*=-1),D.clearcoatNormalScale&&(D.clearcoatNormalScale.y*=-1)),this.cache.add(a,D),this.associations.set(D,this.associations.get(B))),B=D}t.material=B}getMaterialType(){return Gh}loadMaterial(t){const g=this,B=this.json,o=this.extensions,r=B.materials[t];let h;const a={},D=r.extensions||{},f=[];if(D[yg.KHR_MATERIALS_UNLIT]){const S=o[yg.KHR_MATERIALS_UNLIT];h=S.getMaterialType(),f.push(S.extendParams(a,r,g))}else{const S=r.pbrMetallicRoughness||{};if(a.color=new Cg(1,1,1),a.opacity=1,Array.isArray(S.baseColorFactor)){const F=S.baseColorFactor;a.color.fromArray(F),a.opacity=F[3]}S.baseColorTexture!==void 0&&f.push(g.assignTexture(a,"map",S.baseColorTexture,tg)),a.metalness=S.metallicFactor!==void 0?S.metallicFactor:1,a.roughness=S.roughnessFactor!==void 0?S.roughnessFactor:1,S.metallicRoughnessTexture!==void 0&&(f.push(g.assignTexture(a,"metalnessMap",S.metallicRoughnessTexture)),f.push(g.assignTexture(a,"roughnessMap",S.metallicRoughnessTexture))),h=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(t)}),f.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=lB);const m=r.alphaMode||Ah.OPAQUE;if(m===Ah.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,m===Ah.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&h!==Fn&&(f.push(g.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Mg(1,1),r.normalTexture.scale!==void 0)){const S=r.normalTexture.scale;a.normalScale.set(S,S)}return r.occlusionTexture!==void 0&&h!==Fn&&(f.push(g.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&h!==Fn&&(a.emissive=new Cg().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&h!==Fn&&f.push(g.assignTexture(a,"emissiveMap",r.emissiveTexture,tg)),Promise.all(f).then(function(){const S=new h(a);return r.name&&(S.name=r.name),LC(S,r),g.associations.set(S,{materials:t}),r.extensions&&mn(o,S,r),S})}createUniqueName(t){const g=Tg.sanitizeNodeName(t||"");return g in this.nodeNamesUsed?g+"_"+ ++this.nodeNamesUsed[g]:(this.nodeNamesUsed[g]=0,g)}loadGeometries(t){const g=this,B=this.extensions,o=this.primitiveCache;function r(a){return B[yg.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,g).then(function(D){return Tu(D,a,g)})}const h=[];for(let a=0,D=t.length;a<D;a++){const f=t[a],m=Yk(f),S=o[m];if(S)h.push(S.promise);else{let F;f.extensions&&f.extensions[yg.KHR_DRACO_MESH_COMPRESSION]?F=r(f):F=Tu(new Pi,f,g),o[m]={primitive:f,promise:F},h.push(F)}}return Promise.all(h)}loadMesh(t){const g=this,B=this.json,o=this.extensions,r=B.meshes[t],h=r.primitives,a=[];for(let D=0,f=h.length;D<f;D++){const m=h[D].material===void 0?bk(this.cache):this.getDependency("material",h[D].material);a.push(m)}return a.push(g.loadGeometries(h)),Promise.all(a).then(function(D){const f=D.slice(0,D.length-1),m=D[D.length-1],S=[];for(let J=0,P=m.length;J<P;J++){const T=m[J],x=h[J];let L;const iA=f[J];if(x.mode===qi.TRIANGLES||x.mode===qi.TRIANGLE_STRIP||x.mode===qi.TRIANGLE_FAN||x.mode===void 0)L=r.isSkinnedMesh===!0?new MU(T,iA):new ui(T,iA),L.isSkinnedMesh===!0&&L.normalizeSkinWeights(),x.mode===qi.TRIANGLE_STRIP?L.geometry=Ku(L.geometry,tD):x.mode===qi.TRIANGLE_FAN&&(L.geometry=Ku(L.geometry,Bh));else if(x.mode===qi.LINES)L=new wD(T,iA);else if(x.mode===qi.LINE_STRIP)L=new Rh(T,iA);else if(x.mode===qi.LINE_LOOP)L=new FU(T,iA);else if(x.mode===qi.POINTS)L=new NU(T,iA);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(L.geometry.morphAttributes).length>0&&Kk(L,r),L.name=g.createUniqueName(r.name||"mesh_"+t),LC(L,r),x.extensions&&mn(o,L,x),g.assignFinalMaterial(L),S.push(L)}for(let J=0,P=S.length;J<P;J++)g.associations.set(S[J],{meshes:t,primitives:J});if(S.length===1)return r.extensions&&mn(o,S[0],r),S[0];const F=new bC;r.extensions&&mn(o,F,r),g.associations.set(F,{meshes:t});for(let J=0,P=S.length;J<P;J++)F.add(S[J]);return F})}loadCamera(t){let g;const B=this.json.cameras[t],o=B[B.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return B.type==="perspective"?g=new di(hR.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):B.type==="orthographic"&&(g=new ph(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),B.name&&(g.name=this.createUniqueName(B.name)),LC(g,B),Promise.resolve(g)}loadSkin(t){const g=this.json.skins[t],B=[];for(let o=0,r=g.joints.length;o<r;o++)B.push(this._loadNodeShallow(g.joints[o]));return g.inverseBindMatrices!==void 0?B.push(this.getDependency("accessor",g.inverseBindMatrices)):B.push(null),Promise.all(B).then(function(o){const r=o.pop(),h=o,a=[],D=[];for(let f=0,m=h.length;f<m;f++){const S=h[f];if(S){a.push(S);const F=new hg;r!==null&&F.fromArray(r.array,f*16),D.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',g.joints[f])}return new Mh(a,D)})}loadAnimation(t){const g=this.json,B=this,o=g.animations[t],r=o.name?o.name:"animation_"+t,h=[],a=[],D=[],f=[],m=[];for(let S=0,F=o.channels.length;S<F;S++){const J=o.channels[S],P=o.samplers[J.sampler],T=J.target,x=T.node,L=o.parameters!==void 0?o.parameters[P.input]:P.input,iA=o.parameters!==void 0?o.parameters[P.output]:P.output;T.node!==void 0&&(h.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",L)),D.push(this.getDependency("accessor",iA)),f.push(P),m.push(T))}return Promise.all([Promise.all(h),Promise.all(a),Promise.all(D),Promise.all(f),Promise.all(m)]).then(function(S){const F=S[0],J=S[1],P=S[2],T=S[3],x=S[4],L=[];for(let iA=0,j=F.length;iA<j;iA++){const gA=F[iA],dA=J[iA],fA=P[iA],pA=T[iA],YA=x[iA];if(gA===void 0)continue;gA.updateMatrix&&gA.updateMatrix();const $=B._createAnimationTracks(gA,dA,fA,pA,YA);if($)for(let uA=0;uA<$.length;uA++)L.push($[uA])}return new JU(r,void 0,L)})}createNodeMesh(t){const g=this.json,B=this,o=g.nodes[t];return o.mesh===void 0?null:B.getDependency("mesh",o.mesh).then(function(r){const h=B._getNodeRef(B.meshCache,o.mesh,r);return o.weights!==void 0&&h.traverse(function(a){if(a.isMesh)for(let D=0,f=o.weights.length;D<f;D++)a.morphTargetInfluences[D]=o.weights[D]}),h})}loadNode(t){const g=this.json,B=this,o=g.nodes[t],r=B._loadNodeShallow(t),h=[],a=o.children||[];for(let f=0,m=a.length;f<m;f++)h.push(B.getDependency("node",a[f]));const D=o.skin===void 0?Promise.resolve(null):B.getDependency("skin",o.skin);return Promise.all([r,Promise.all(h),D]).then(function(f){const m=f[0],S=f[1],F=f[2];F!==null&&m.traverse(function(J){J.isSkinnedMesh&&J.bind(F,Hk)});for(let J=0,P=S.length;J<P;J++)m.add(S[J]);return m})}_loadNodeShallow(t){const g=this.json,B=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=g.nodes[t],h=r.name?o.createUniqueName(r.name):"",a=[],D=o._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(t)});return D&&a.push(D),r.camera!==void 0&&a.push(o.getDependency("camera",r.camera).then(function(f){return o._getNodeRef(o.cameraCache,r.camera,f)})),o._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(t)}).forEach(function(f){a.push(f)}),this.nodeCache[t]=Promise.all(a).then(function(f){let m;if(r.isBone===!0?m=new pD:f.length>1?m=new bC:f.length===1?m=f[0]:m=new iI,m!==f[0])for(let S=0,F=f.length;S<F;S++)m.add(f[S]);if(r.name&&(m.userData.name=r.name,m.name=h),LC(m,r),r.extensions&&mn(B,m,r),r.matrix!==void 0){const S=new hg;S.fromArray(r.matrix),m.applyMatrix4(S)}else r.translation!==void 0&&m.position.fromArray(r.translation),r.rotation!==void 0&&m.quaternion.fromArray(r.rotation),r.scale!==void 0&&m.scale.fromArray(r.scale);return o.associations.has(m)||o.associations.set(m,{}),o.associations.get(m).nodes=t,m}),this.nodeCache[t]}loadScene(t){const g=this.extensions,B=this.json.scenes[t],o=this,r=new bC;B.name&&(r.name=o.createUniqueName(B.name)),LC(r,B),B.extensions&&mn(g,r,B);const h=B.nodes||[],a=[];for(let D=0,f=h.length;D<f;D++)a.push(o.getDependency("node",h[D]));return Promise.all(a).then(function(D){for(let m=0,S=D.length;m<S;m++)r.add(D[m]);const f=m=>{const S=new Map;for(const[F,J]of o.associations)(F instanceof uB||F instanceof OI)&&S.set(F,J);return m.traverse(F=>{const J=o.associations.get(F);J!=null&&S.set(F,J)}),S};return o.associations=f(r),r})}_createAnimationTracks(t,g,B,o,r){const h=[],a=t.name?t.name:t.uuid,D=[];kC[r.path]===kC.weights?t.traverse(function(F){F.morphTargetInfluences&&D.push(F.name?F.name:F.uuid)}):D.push(a);let f;switch(kC[r.path]){case kC.weights:f=tE;break;case kC.rotation:f=Kn;break;case kC.position:case kC.scale:f=eE;break;default:switch(B.itemSize){case 1:f=tE;break;case 2:case 3:default:f=eE;break}break}const m=o.interpolation!==void 0?xk[o.interpolation]:jo,S=this._getArrayFromAccessor(B);for(let F=0,J=D.length;F<J;F++){const P=new f(D[F]+"."+kC[r.path],g.array,S,m);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(P),h.push(P)}return h}_getArrayFromAccessor(t){let g=t.array;if(t.normalized){const B=ah(g.constructor),o=new Float32Array(g.length);for(let r=0,h=g.length;r<h;r++)o[r]=g[r]*B;g=o}return g}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(B){const o=this instanceof Kn?Lk:UD;return new o(this.times,this.values,this.getValueSize()/3,B)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qk(E,t,g){const B=t.attributes,o=new sC;if(B.POSITION!==void 0){const a=g.json.accessors[B.POSITION],D=a.min,f=a.max;if(D!==void 0&&f!==void 0){if(o.set(new bA(D[0],D[1],D[2]),new bA(f[0],f[1],f[2])),a.normalized){const m=ah(Po[a.componentType]);o.min.multiplyScalar(m),o.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new bA,D=new bA;for(let f=0,m=r.length;f<m;f++){const S=r[f];if(S.POSITION!==void 0){const F=g.json.accessors[S.POSITION],J=F.min,P=F.max;if(J!==void 0&&P!==void 0){if(D.setX(Math.max(Math.abs(J[0]),Math.abs(P[0]))),D.setY(Math.max(Math.abs(J[1]),Math.abs(P[1]))),D.setZ(Math.max(Math.abs(J[2]),Math.abs(P[2]))),F.normalized){const T=ah(Po[F.componentType]);D.multiplyScalar(T)}a.max(D)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(a)}E.boundingBox=o;const h=new bB;o.getCenter(h.center),h.radius=o.min.distanceTo(o.max)/2,E.boundingSphere=h}function Tu(E,t,g){const B=t.attributes,o=[];function r(h,a){return g.getDependency("accessor",h).then(function(D){E.setAttribute(a,D)})}for(const h in B){const a=rh[h]||h.toLowerCase();a in E.attributes||o.push(r(B[h],a))}if(t.indices!==void 0&&!E.index){const h=g.getDependency("accessor",t.indices).then(function(a){E.setIndex(a)});o.push(h)}return LC(E,t),qk(E,t,g),Promise.all(o).then(function(){return t.targets!==void 0?Jk(E,t.targets,g):E})}vC.ArToolkitContext.baseURL="./";console.log("ARScene mounted");var qC=new DD({antialias:!0,alpha:!0});qC.setClearColor(new Cg("lightgrey"),0);qC.setSize(window.innerWidth,window.innerHeight);qC.domElement.style.position="absolute";qC.domElement.style.top="0px";qC.domElement.style.left="0px";document.body.appendChild(qC.domElement);var kh=[],rr=new fD,Lh=new uh;rr.add(Lh);const ar=new vC.ArToolkitProfile;ar.sourceWebcam();let _k={sourceWidth:Window.innerWidth,sourceHeight:Window.innerHeight,displayWidth:Window.innerWidth,displayHeight:Window.innerHeight};Object.assign(ar.sourceParameters,_k);console.log(ar.sourceParameters);const Oo=new vC.ArToolkitSource(ar.sourceParameters);Oo.init(function(){kD()});window.addEventListener("resize",function(){kD()});function kD(){Oo.onResizeElement(),Oo.copyElementSizeTo(qC.domElement),IE.arController!==null&&Oo.copyElementSizeTo(IE.arController.canvas)}var IE=new vC.ArToolkitContext({debug:!0,cameraParametersUrl:vC.ArToolkitContext.baseURL+"camera_para.dat",detectionMode:"color",canvasWidth:Window.innerWidth,canvasHeight:Window.innerHeight,imageSmoothingEnabled:!0});IE.init(function(){Lh.projectionMatrix.copy(IE.getProjectionMatrix())});kh.push(function(){Oo.ready!==!1&&IE.update(Oo.domElement)});var xh=new bC;rr.add(xh);new vC.ArMarkerControls(IE,xh,{type:"pattern",patternUrl:vC.ArToolkitContext.baseURL+"pattern-marker.patt",smooth:!0,smoothCount:5,smoothTolerance:.01,smoothThreshold:2});var wQ=new fD;xh.add(wQ);var _C=new nk;wQ.add(_C);var hr=new BE(1,1,1),bh=new MD({transparent:!0,opacity:.5,side:lB}),_C=new ui(hr,bh);_C.position.y=hr.parameters.height/2;wQ.add(_C);var hr=new Sh(.3,.1,64,16),bh=new MD,_C=new ui(hr,bh);_C.position.y=.5;wQ.add(_C);kh.push(function(E){_C.rotation.x+=E*Math.PI});const Wk=new Qk;Wk.load(vC.ArToolkitContext.baseURL+"bull_w_texturemockup2.glb",function(E){E.scene.scale.x=.1,E.scene.scale.y=.1,E.scene.scale.z=.1,wQ.add(E.scene)});var Pk=new zU(16777215);rr.add(Pk);var er=null;requestAnimationFrame(function E(t){qC.render(rr,Lh),requestAnimationFrame(E),er=er||t-1e3/60;var g=Math.min(200,t-er);er=t,kh.forEach(function(B){B(g/1e3,t/1e3)})});