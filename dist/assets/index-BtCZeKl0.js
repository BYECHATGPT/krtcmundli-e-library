(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ay={exports:{}},Lu={},Ry={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),X0=Symbol.for("react.portal"),Y0=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),Z0=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),sI=Symbol.for("react.lazy"),Om=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Py=Object.assign,Cy={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||ky}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ny(){}Ny.prototype=Ds.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||ky}var Ud=Fd.prototype=new Ny;Ud.constructor=Fd;Py(Ud,Ds.prototype);Ud.isPureReactComponent=!0;var Vm=Array.isArray,Dy=Object.prototype.hasOwnProperty,jd={current:null},xy={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dy.call(e,r)&&!xy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_a,type:t,key:s,ref:o,props:i,_owner:jd.current}}function aI(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function Al(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case X0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,Vm(i)?(n="",t!=null&&(n=t.replace(bm,"$&/")+"/"),Al(i,e,n,"",function(h){return h})):i!=null&&(Bd(i)&&(i=aI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=Al(s,e,n,u,i)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=Al(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var r=[],i=0;return Al(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Rl={transition:null},cI={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:jd};function Vy(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ds;ae.Fragment=Y0;ae.Profiler=Z0;ae.PureComponent=Fd;ae.StrictMode=J0;ae.Suspense=rI;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;ae.act=Vy;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Py({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Dy.call(e,u)&&!xy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:_a,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};ae.createElement=Oy;ae.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:nI,render:t}};ae.isValidElement=Bd;ae.lazy=function(t){return{$$typeof:sI,_payload:{_status:-1,_result:t},_init:uI}};ae.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};ae.unstable_act=Vy;ae.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ae.useContext=function(t){return Rt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ae.useId=function(){return Rt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ae.useRef=function(t){return Rt.current.useRef(t)};ae.useState=function(t){return Rt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Rt.current.useTransition()};ae.version="18.3.1";Ry.exports=ae;var it=Ry.exports;const Ft=Q0(it);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hI=it,dI=Symbol.for("react.element"),fI=Symbol.for("react.fragment"),pI=Object.prototype.hasOwnProperty,mI=hI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gI={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pI.call(e,r)&&!gI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dI,type:t,key:s,ref:o,props:i,_owner:mI.current}}Lu.Fragment=fI;Lu.jsx=by;Lu.jsxs=by;Ay.exports=Lu;var B=Ay.exports,Ly={exports:{}},Wt={},My={exports:{}},Fy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ee){var ne=W.length;W.push(ee);e:for(;0<ne;){var Ee=ne-1>>>1,ge=W[Ee];if(0<i(ge,ee))W[Ee]=ee,W[ne]=ge,ne=Ee;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ee=W[0],ne=W.pop();if(ne!==ee){W[0]=ne;e:for(var Ee=0,ge=W.length,ke=ge>>>1;Ee<ke;){var nn=2*(Ee+1)-1,Gt=W[nn],rn=nn+1,Lt=W[rn];if(0>i(Gt,ne))rn<ge&&0>i(Lt,Gt)?(W[Ee]=Lt,W[rn]=ne,Ee=rn):(W[Ee]=Gt,W[nn]=ne,Ee=nn);else if(rn<ge&&0>i(Lt,ne))W[Ee]=Lt,W[rn]=ne,Ee=rn;else break e}}return ee}function i(W,ee){var ne=W.sortIndex-ee.sortIndex;return ne!==0?ne:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,R=!1,C=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var ee=n(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=W)r(h),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(h)}}function O(W){if(N=!1,S(W),!C)if(n(u)!==null)C=!0,Be(F);else{var ee=n(h);ee!==null&&ze(O,ee.startTime-W)}}function F(W,ee){C=!1,N&&(N=!1,T(_),_=-1),R=!0;var ne=g;try{for(S(ee),p=n(u);p!==null&&(!(p.expirationTime>ee)||W&&!k());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,g=p.priorityLevel;var ge=Ee(p.expirationTime<=ee);ee=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(u)&&r(u),S(ee)}else r(u);p=n(u)}if(p!==null)var ke=!0;else{var nn=n(h);nn!==null&&ze(O,nn.startTime-ee),ke=!1}return ke}finally{p=null,g=ne,R=!1}}var z=!1,w=null,_=-1,v=5,I=-1;function k(){return!(t.unstable_now()-I<v)}function P(){if(w!==null){var W=t.unstable_now();I=W;var ee=!0;try{ee=w(!0,W)}finally{ee?E():(z=!1,w=null)}}else z=!1}var E;if(typeof y=="function")E=function(){y(P)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ne=ce.port2;ce.port1.onmessage=P,E=function(){Ne.postMessage(null)}}else E=function(){V(P,0)};function Be(W){w=W,z||(z=!0,E())}function ze(W,ee){_=V(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||R||(C=!0,Be(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ne=g;g=ee;try{return W()}finally{g=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=g;g=W;try{return ee()}finally{g=ne}},t.unstable_scheduleCallback=function(W,ee,ne){var Ee=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ee+ne:Ee):ne=Ee,W){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ne+ge,W={id:f++,callback:ee,priorityLevel:W,startTime:ne,expirationTime:ge,sortIndex:-1},ne>Ee?(W.sortIndex=ne,e(h,W),n(u)===null&&W===n(h)&&(N?(T(_),_=-1):N=!0,ze(O,ne-Ee))):(W.sortIndex=ge,e(u,W),C||R||(C=!0,Be(F))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var ee=g;return function(){var ne=g;g=ee;try{return W.apply(this,arguments)}finally{g=ne}}}})(Fy);My.exports=Fy;var _I=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yI=it,Ht=_I;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uy=new Set,$o={};function Ii(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for($o[t]=e,t=0;t<e.length;t++)Uy.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Mm={};function EI(t){return Eh.call(Mm,t)?!0:Eh.call(Lm,t)?!1:vI.test(t)?Mm[t]=!0:(Lm[t]=!0,!1)}function wI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TI(t,e,n,r){if(e===null||typeof e>"u"||wI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,$d);ut[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,$d);ut[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,$d);ut[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qd(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TI(e,n,i,r)&&(n=null),r||i===null?EI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),jy=Symbol.for("react.provider"),By=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Oc;function mo(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Vc=!1;function bc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function II(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qi:return"Fragment";case Gi:return"Portal";case wh:return"Profiler";case Hd:return"StrictMode";case Th:return"Suspense";case Ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case By:return(t.displayName||"Context")+".Consumer";case jy:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function SI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AI(t){var e=$y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=AI(t))}function qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&qd(t,"checked",e,!1)}function Rh(t,e){Hy(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(go(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Wy(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ky(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ky(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,Gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RI=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){RI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function Qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function Xy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kI=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(kI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,ls=null,us=null;function $m(t){if(t=Ea(t)){if(typeof Oh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Bu(e),Oh(t.stateNode,t.type,e))}}function Yy(t){ls?us?us.push(t):us=[t]:ls=t}function Jy(){if(ls){var t=ls,e=us;if(us=ls=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function Zy(t,e){return t(e)}function ev(){}var Lc=!1;function tv(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return Zy(t,e,n)}finally{Lc=!1,(ls!==null||us!==null)&&(ev(),Jy())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Vh=!1;if(Qn)try{var io={};Object.defineProperty(io,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Vh=!1}function PI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ro=!1,Kl=null,Gl=!1,bh=null,CI={onError:function(t){Ro=!0,Kl=t}};function NI(t,e,n,r,i,s,o,l,u){Ro=!1,Kl=null,PI.apply(CI,arguments)}function DI(t,e,n,r,i,s,o,l,u){if(NI.apply(this,arguments),Ro){if(Ro){var h=Kl;Ro=!1,Kl=null}else throw Error(j(198));Gl||(Gl=!0,bh=h)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(Si(t)!==t)throw Error(j(188))}function xI(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function rv(t){return t=xI(t),t!==null?iv(t):null}function iv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iv(t);if(e!==null)return e;t=t.sibling}return null}var sv=Ht.unstable_scheduleCallback,Hm=Ht.unstable_cancelCallback,OI=Ht.unstable_shouldYield,VI=Ht.unstable_requestPaint,je=Ht.unstable_now,bI=Ht.unstable_getCurrentPriorityLevel,Qd=Ht.unstable_ImmediatePriority,ov=Ht.unstable_UserBlockingPriority,Ql=Ht.unstable_NormalPriority,LI=Ht.unstable_LowPriority,av=Ht.unstable_IdlePriority,Mu=null,Rn=null;function MI(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:jI,FI=Math.log,UI=Math.LN2;function jI(t){return t>>>=0,t===0?32:31-(FI(t)/UI|0)|0}var sl=64,ol=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_o(l):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function BI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=BI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lv(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function $I(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cv,Yd,hv,dv,fv,Mh=!1,al=[],Ir=null,Sr=null,Ar=null,Wo=new Map,Ko=new Map,dr=[],qI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ea(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HI(t,e,n,r,i){switch(e){case"focusin":return Ir=so(Ir,t,e,n,r,i),!0;case"dragenter":return Sr=so(Sr,t,e,n,r,i),!0;case"mouseover":return Ar=so(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,so(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,so(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function pv(t){var e=ti(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=nv(n),e!==null){t.blockedOn=e,fv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=Ea(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){kl(t)&&n.delete(e)}function WI(){Mh=!1,Ir!==null&&kl(Ir)&&(Ir=null),Sr!==null&&kl(Sr)&&(Sr=null),Ar!==null&&kl(Ar)&&(Ar=null),Wo.forEach(Km),Ko.forEach(Km)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,WI)))}function Go(t){function e(i){return oo(i,t)}if(0<al.length){oo(al[0],t);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&oo(Ir,t),Sr!==null&&oo(Sr,t),Ar!==null&&oo(Ar,t),Wo.forEach(e),Ko.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)pv(n),n.blockedOn===null&&dr.shift()}var cs=rr.ReactCurrentBatchConfig,Yl=!0;function KI(t,e,n,r){var i=_e,s=cs.transition;cs.transition=null;try{_e=1,Jd(t,e,n,r)}finally{_e=i,cs.transition=s}}function GI(t,e,n,r){var i=_e,s=cs.transition;cs.transition=null;try{_e=4,Jd(t,e,n,r)}finally{_e=i,cs.transition=s}}function Jd(t,e,n,r){if(Yl){var i=Fh(t,e,n,r);if(i===null)Kc(t,e,r,Jl,n),Wm(t,r);else if(HI(i,t,e,n,r))r.stopPropagation();else if(Wm(t,r),e&4&&-1<qI.indexOf(t)){for(;i!==null;){var s=Ea(i);if(s!==null&&cv(s),s=Fh(t,e,n,r),s===null&&Kc(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Jl=null;function Fh(t,e,n,r){if(Jl=null,t=Gd(r),t=ti(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bI()){case Qd:return 1;case ov:return 4;case Ql:case LI:return 16;case av:return 536870912;default:return 16}default:return 16}}var Er=null,Zd=null,Pl=null;function gv(){if(Pl)return Pl;var t,e=Zd,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function Gm(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:Gm,this.isPropagationStopped=Gm,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Kt(xs),va=Oe({},xs,{view:0,detail:0}),QI=Kt(va),Fc,Uc,ao,Fu=Oe({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Fc=t.screenX-ao.screenX,Uc=t.screenY-ao.screenY):Uc=Fc=0,ao=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Qm=Kt(Fu),XI=Oe({},Fu,{dataTransfer:0}),YI=Kt(XI),JI=Oe({},va,{relatedTarget:0}),jc=Kt(JI),ZI=Oe({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Kt(ZI),tS=Oe({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nS=Kt(tS),rS=Oe({},xs,{data:0}),Xm=Kt(rS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oS[t])?!!e[t]:!1}function tf(){return aS}var lS=Oe({},va,{key:function(t){if(t.key){var e=iS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=Kt(lS),cS=Oe({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Kt(cS),hS=Oe({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),dS=Kt(hS),fS=Oe({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pS=Kt(fS),mS=Oe({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=Kt(mS),_S=[9,13,27,32],nf=Qn&&"CompositionEvent"in window,ko=null;Qn&&"documentMode"in document&&(ko=document.documentMode);var yS=Qn&&"TextEvent"in window&&!ko,_v=Qn&&(!nf||ko&&8<ko&&11>=ko),Jm=" ",Zm=!1;function yv(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function vS(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function ES(t,e){if(Xi)return t==="compositionend"||!nf&&yv(t,e)?(t=gv(),Pl=Zd=Er=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function Ev(t,e,n,r){Yy(r),e=Zl(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Po=null,Qo=null;function TS(t){Dv(t,0)}function Uu(t){var e=Zi(t);if(qy(e))return t}function IS(t,e){if(t==="change")return e}var wv=!1;if(Qn){var Bc;if(Qn){var zc="oninput"in document;if(!zc){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),zc=typeof tg.oninput=="function"}Bc=zc}else Bc=!1;wv=Bc&&(!document.documentMode||9<document.documentMode)}function ng(){Po&&(Po.detachEvent("onpropertychange",Tv),Qo=Po=null)}function Tv(t){if(t.propertyName==="value"&&Uu(Qo)){var e=[];Ev(e,Qo,t,Gd(t)),tv(TS,e)}}function SS(t,e,n){t==="focusin"?(ng(),Po=e,Qo=n,Po.attachEvent("onpropertychange",Tv)):t==="focusout"&&ng()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Qo)}function RS(t,e){if(t==="click")return Uu(e)}function kS(t,e){if(t==="input"||t==="change")return Uu(e)}function PS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:PS;function Xo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eh.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function Iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CS(t){var e=Sv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Iv(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ig(n,s);var o=ig(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NS=Qn&&"documentMode"in document&&11>=document.documentMode,Yi=null,Uh=null,Co=null,jh=!1;function sg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jh||Yi==null||Yi!==Wl(r)||(r=Yi,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Xo(Co,r)||(Co=r,r=Zl(Uh,"onSelect"),0<r.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ji={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},$c={},Av={};Qn&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function ju(t){if($c[t])return $c[t];if(!Ji[t])return t;var e=Ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Av)return $c[t]=e[n];return t}var Rv=ju("animationend"),kv=ju("animationiteration"),Pv=ju("animationstart"),Cv=ju("transitionend"),Nv=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){Nv.set(t,e),Ii(e,[t])}for(var qc=0;qc<og.length;qc++){var Hc=og[qc],DS=Hc.toLowerCase(),xS=Hc[0].toUpperCase()+Hc.slice(1);jr(DS,"on"+xS)}jr(Rv,"onAnimationEnd");jr(kv,"onAnimationIteration");jr(Pv,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Cv,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DI(r,e,void 0,t),t.currentTarget=null}function Dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,h),s=u}}}if(Gl)throw t=bh,Gl=!1,bh=null,t}function Ie(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(xv(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),xv(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[cl]){t[cl]=!0,Uy.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,Wc("selectionchange",!1,e))}}function xv(t,e,n,r){switch(mv(e)){case 1:var i=KI;break;case 4:i=GI;break;default:i=Jd}n=i.bind(null,e,n,t),i=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ti(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}tv(function(){var h=s,f=Gd(n),p=[];e:{var g=Nv.get(t);if(g!==void 0){var R=ef,C=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":R=uS;break;case"focusin":C="focus",R=jc;break;case"focusout":C="blur",R=jc;break;case"beforeblur":case"afterblur":R=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=YI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=dS;break;case Rv:case kv:case Pv:R=eS;break;case Cv:R=pS;break;case"scroll":R=QI;break;case"wheel":R=gS;break;case"copy":case"cut":case"paste":R=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ym}var N=(e&4)!==0,V=!N&&t==="scroll",T=N?g!==null?g+"Capture":null:g;N=[];for(var y=h,S;y!==null;){S=y;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Ho(y,T),O!=null&&N.push(Jo(y,O,S)))),V)break;y=y.return}0<N.length&&(g=new R(g,C,null,n,f),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==xh&&(C=n.relatedTarget||n.fromElement)&&(ti(C)||C[Xn]))break e;if((R||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,R?(C=n.relatedTarget||n.toElement,R=h,C=C?ti(C):null,C!==null&&(V=Si(C),C!==V||C.tag!==5&&C.tag!==6)&&(C=null)):(R=null,C=h),R!==C)){if(N=Qm,O="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ym,O="onPointerLeave",T="onPointerEnter",y="pointer"),V=R==null?g:Zi(R),S=C==null?g:Zi(C),g=new N(O,y+"leave",R,n,f),g.target=V,g.relatedTarget=S,O=null,ti(f)===h&&(N=new N(T,y+"enter",C,n,f),N.target=S,N.relatedTarget=V,O=N),V=O,R&&C)t:{for(N=R,T=C,y=0,S=N;S;S=ji(S))y++;for(S=0,O=T;O;O=ji(O))S++;for(;0<y-S;)N=ji(N),y--;for(;0<S-y;)T=ji(T),S--;for(;y--;){if(N===T||T!==null&&N===T.alternate)break t;N=ji(N),T=ji(T)}N=null}else N=null;R!==null&&lg(p,g,R,N,!1),C!==null&&V!==null&&lg(p,V,C,N,!0)}}e:{if(g=h?Zi(h):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var F=IS;else if(eg(g))if(wv)F=kS;else{F=AS;var z=SS}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=RS);if(F&&(F=F(t,h))){Ev(p,F,n,f);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&kh(g,"number",g.value)}switch(z=h?Zi(h):window,t){case"focusin":(eg(z)||z.contentEditable==="true")&&(Yi=z,Uh=h,Co=null);break;case"focusout":Co=Uh=Yi=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,sg(p,n,f);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":sg(p,n,f)}var w;if(nf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xi?yv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(_v&&n.locale!=="ko"&&(Xi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xi&&(w=gv()):(Er=f,Zd="value"in Er?Er.value:Er.textContent,Xi=!0)),z=Zl(h,_),0<z.length&&(_=new Xm(_,t,null,n,f),p.push({event:_,listeners:z}),w?_.data=w:(w=vv(n),w!==null&&(_.data=w)))),(w=yS?vS(t,n):ES(t,n))&&(h=Zl(h,"onBeforeInput"),0<h.length&&(f=new Xm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}Dv(p,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Jo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Jo(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ho(n,s),u!=null&&o.unshift(Jo(n,u,l))):i||(u=Ho(n,s),u!=null&&o.push(Jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(VS,`
`).replace(bS,"")}function hl(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(j(425))}function eu(){}var Bh=null,zh=null;function $h(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(FS)}:qh;function FS(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),In="__reactFiber$"+Os,Zo="__reactProps$"+Os,Xn="__reactContainer$"+Os,Hh="__reactEvents$"+Os,US="__reactListeners$"+Os,jS="__reactHandles$"+Os;function ti(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[In])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[In]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Bu(t){return t[Zo]||null}var Wh=[],es=-1;function Br(t){return{current:t}}function Ae(t){0>es||(t.current=Wh[es],Wh[es]=null,es--)}function we(t,e){es++,Wh[es]=t.current,t.current=e}var br={},vt=Br(br),Ot=Br(!1),hi=br;function ys(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function tu(){Ae(Ot),Ae(vt)}function dg(t,e,n){if(vt.current!==br)throw Error(j(168));we(vt,e),we(Ot,n)}function Ov(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,SI(t)||"Unknown",i));return Oe({},n,r)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,hi=vt.current,we(vt,t),we(Ot,Ot.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Ov(t,e,hi),r.__reactInternalMemoizedMergedChildContext=t,Ae(Ot),Ae(vt),we(vt,t)):Ae(Ot),we(Ot,n)}var Un=null,zu=!1,Qc=!1;function Vv(t){Un===null?Un=[t]:Un.push(t)}function BS(t){zu=!0,Vv(t)}function zr(){if(!Qc&&Un!==null){Qc=!0;var t=0,e=_e;try{var n=Un;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,zu=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),sv(Qd,zr),i}finally{_e=e,Qc=!1}}return null}var ts=[],ns=0,ru=null,iu=0,Qt=[],Xt=0,di=null,jn=1,Bn="";function Jr(t,e){ts[ns++]=iu,ts[ns++]=ru,ru=t,iu=e}function bv(t,e,n){Qt[Xt++]=jn,Qt[Xt++]=Bn,Qt[Xt++]=di,di=t;var r=jn;t=Bn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-pn(e)+i|n<<i|r,Bn=s+t}else jn=1<<s|n<<i|r,Bn=t}function sf(t){t.return!==null&&(Jr(t,1),bv(t,1,0))}function of(t){for(;t===ru;)ru=ts[--ns],ts[ns]=null,iu=ts[--ns],ts[ns]=null;for(;t===di;)di=Qt[--Xt],Qt[Xt]=null,Bn=Qt[--Xt],Qt[Xt]=null,jn=Qt[--Xt],Qt[Xt]=null}var $t=null,Bt=null,Ce=!1,cn=null;function Lv(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Bt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:jn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Bt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gh(t){if(Ce){var e=Bt;if(e){var n=e;if(!pg(t,e)){if(Kh(t))throw Error(j(418));e=Rr(n.nextSibling);var r=$t;e&&pg(t,e)?Lv(r,n):(t.flags=t.flags&-4097|2,Ce=!1,$t=t)}}else{if(Kh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ce=!1,$t=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function dl(t){if(t!==$t)return!1;if(!Ce)return mg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$h(t.type,t.memoizedProps)),e&&(e=Bt)){if(Kh(t))throw Mv(),Error(j(418));for(;e;)Lv(t,e),e=Rr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=$t?Rr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=Bt;t;)t=Rr(t.nextSibling)}function vs(){Bt=$t=null,Ce=!1}function af(t){cn===null?cn=[t]:cn.push(t)}var zS=rr.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function Fv(t){function e(T,y){if(t){var S=T.deletions;S===null?(T.deletions=[y],T.flags|=16):S.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=Nr(T,y),T.index=0,T.sibling=null,T}function s(T,y,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<y?(T.flags|=2,y):S):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,y,S,O){return y===null||y.tag!==6?(y=nh(S,T.mode,O),y.return=T,y):(y=i(y,S),y.return=T,y)}function u(T,y,S,O){var F=S.type;return F===Qi?f(T,y,S.props.children,O,S.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&gg(F)===y.type)?(O=i(y,S.props),O.ref=lo(T,y,S),O.return=T,O):(O=Ll(S.type,S.key,S.props,null,T.mode,O),O.ref=lo(T,y,S),O.return=T,O)}function h(T,y,S,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=rh(S,T.mode,O),y.return=T,y):(y=i(y,S.children||[]),y.return=T,y)}function f(T,y,S,O,F){return y===null||y.tag!==7?(y=ai(S,T.mode,O,F),y.return=T,y):(y=i(y,S),y.return=T,y)}function p(T,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=nh(""+y,T.mode,S),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nl:return S=Ll(y.type,y.key,y.props,null,T.mode,S),S.ref=lo(T,null,y),S.return=T,S;case Gi:return y=rh(y,T.mode,S),y.return=T,y;case cr:var O=y._init;return p(T,O(y._payload),S)}if(go(y)||ro(y))return y=ai(y,T.mode,S,null),y.return=T,y;fl(T,y)}return null}function g(T,y,S,O){var F=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(T,y,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:return S.key===F?u(T,y,S,O):null;case Gi:return S.key===F?h(T,y,S,O):null;case cr:return F=S._init,g(T,y,F(S._payload),O)}if(go(S)||ro(S))return F!==null?null:f(T,y,S,O,null);fl(T,S)}return null}function R(T,y,S,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,l(y,T,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case nl:return T=T.get(O.key===null?S:O.key)||null,u(y,T,O,F);case Gi:return T=T.get(O.key===null?S:O.key)||null,h(y,T,O,F);case cr:var z=O._init;return R(T,y,S,z(O._payload),F)}if(go(O)||ro(O))return T=T.get(S)||null,f(y,T,O,F,null);fl(y,O)}return null}function C(T,y,S,O){for(var F=null,z=null,w=y,_=y=0,v=null;w!==null&&_<S.length;_++){w.index>_?(v=w,w=null):v=w.sibling;var I=g(T,w,S[_],O);if(I===null){w===null&&(w=v);break}t&&w&&I.alternate===null&&e(T,w),y=s(I,y,_),z===null?F=I:z.sibling=I,z=I,w=v}if(_===S.length)return n(T,w),Ce&&Jr(T,_),F;if(w===null){for(;_<S.length;_++)w=p(T,S[_],O),w!==null&&(y=s(w,y,_),z===null?F=w:z.sibling=w,z=w);return Ce&&Jr(T,_),F}for(w=r(T,w);_<S.length;_++)v=R(w,T,_,S[_],O),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?_:v.key),y=s(v,y,_),z===null?F=v:z.sibling=v,z=v);return t&&w.forEach(function(k){return e(T,k)}),Ce&&Jr(T,_),F}function N(T,y,S,O){var F=ro(S);if(typeof F!="function")throw Error(j(150));if(S=F.call(S),S==null)throw Error(j(151));for(var z=F=null,w=y,_=y=0,v=null,I=S.next();w!==null&&!I.done;_++,I=S.next()){w.index>_?(v=w,w=null):v=w.sibling;var k=g(T,w,I.value,O);if(k===null){w===null&&(w=v);break}t&&w&&k.alternate===null&&e(T,w),y=s(k,y,_),z===null?F=k:z.sibling=k,z=k,w=v}if(I.done)return n(T,w),Ce&&Jr(T,_),F;if(w===null){for(;!I.done;_++,I=S.next())I=p(T,I.value,O),I!==null&&(y=s(I,y,_),z===null?F=I:z.sibling=I,z=I);return Ce&&Jr(T,_),F}for(w=r(T,w);!I.done;_++,I=S.next())I=R(w,T,_,I.value,O),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?_:I.key),y=s(I,y,_),z===null?F=I:z.sibling=I,z=I);return t&&w.forEach(function(P){return e(T,P)}),Ce&&Jr(T,_),F}function V(T,y,S,O){if(typeof S=="object"&&S!==null&&S.type===Qi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:e:{for(var F=S.key,z=y;z!==null;){if(z.key===F){if(F=S.type,F===Qi){if(z.tag===7){n(T,z.sibling),y=i(z,S.props.children),y.return=T,T=y;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===cr&&gg(F)===z.type){n(T,z.sibling),y=i(z,S.props),y.ref=lo(T,z,S),y.return=T,T=y;break e}n(T,z);break}else e(T,z);z=z.sibling}S.type===Qi?(y=ai(S.props.children,T.mode,O,S.key),y.return=T,T=y):(O=Ll(S.type,S.key,S.props,null,T.mode,O),O.ref=lo(T,y,S),O.return=T,T=O)}return o(T);case Gi:e:{for(z=S.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(T,y.sibling),y=i(y,S.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=rh(S,T.mode,O),y.return=T,T=y}return o(T);case cr:return z=S._init,V(T,y,z(S._payload),O)}if(go(S))return C(T,y,S,O);if(ro(S))return N(T,y,S,O);fl(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,S),y.return=T,T=y):(n(T,y),y=nh(S,T.mode,O),y.return=T,T=y),o(T)):n(T,y)}return V}var Es=Fv(!0),Uv=Fv(!1),su=Br(null),ou=null,rs=null,lf=null;function uf(){lf=rs=ou=null}function cf(t){var e=su.current;Ae(su),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ou=t,lf=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(ou===null)throw Error(j(308));rs=t,ou.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var ni=null;function hf(t){ni===null?ni=[t]:ni.push(t)}function jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,hf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,R=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(g=e,R=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(R,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,g=typeof C=="function"?C.call(R,p,g):C,g==null)break e;p=Oe({},p,g);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=p):f=f.next=R,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pi|=o,t.lanes=o,t.memoizedState=p}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var wa={},kn=Br(wa),ea=Br(wa),ta=Br(wa);function ri(t){if(t===wa)throw Error(j(174));return t}function ff(t,e){switch(we(ta,e),we(ea,t),we(kn,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}Ae(kn),we(kn,e)}function ws(){Ae(kn),Ae(ea),Ae(ta)}function zv(t){ri(ta.current);var e=ri(kn.current),n=Ch(e,t.type);e!==n&&(we(ea,t),we(kn,n))}function pf(t){ea.current===t&&(Ae(kn),Ae(ea))}var De=Br(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function mf(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var Dl=rr.ReactCurrentDispatcher,Yc=rr.ReactCurrentBatchConfig,fi=0,xe=null,Qe=null,et=null,uu=!1,No=!1,na=0,$S=0;function ft(){throw Error(j(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,i,s){if(fi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?KS:GS,t=n(r,i),No){s=0;do{if(No=!1,na=0,25<=s)throw Error(j(301));s+=1,et=Qe=null,e.updateQueue=null,Dl.current=QS,t=n(r,i)}while(No)}if(Dl.current=cu,e=Qe!==null&&Qe.next!==null,fi=0,et=Qe=xe=null,uu=!1,e)throw Error(j(300));return t}function yf(){var t=na!==0;return na=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?xe.memoizedState=et=t:et=et.next=t,et}function tn(){if(Qe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?xe.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(j(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?xe.memoizedState=et=t:et=et.next=t}return et}function ra(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((fi&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,xe.lanes|=f,pi|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,gn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $v(){}function qv(t,e){var n=xe,r=tn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,vf(Kv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,ia(9,Wv.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(j(349));fi&30||Hv(n,e,i)}return i}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Qv(t)}function Kv(t,e,n){return n(function(){Gv(e)&&Qv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function Qv(t){var e=Yn(t,1);e!==null&&mn(e,t,1,-1)}function vg(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=WS.bind(null,xe,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xv(){return tn().memoizedState}function xl(t,e,n,r){var i=wn();xe.flags|=t,i.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&gf(r,o.deps)){i.memoizedState=ia(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ia(1|e,n,s,r)}function Eg(t,e){return xl(8390656,8,t,e)}function vf(t,e){return $u(2048,8,t,e)}function Yv(t,e){return $u(4,2,t,e)}function Jv(t,e){return $u(4,4,t,e)}function Zv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eE(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,Zv.bind(null,e,t),n)}function Ef(){}function tE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rE(t,e,n){return fi&21?(gn(n,e)||(n=lv(),xe.lanes|=n,pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function qS(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{_e=n,Yc.transition=r}}function iE(){return tn().memoizedState}function HS(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sE(t))oE(e,n);else if(n=jv(t,e,n,r),n!==null){var i=At();mn(n,t,r,i),aE(n,e,r)}}function WS(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sE(t))oE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,o)){var u=e.interleaved;u===null?(i.next=i,hf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=jv(t,e,i,r),n!==null&&(i=At(),mn(n,t,r,i),aE(n,e,r))}}function sE(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function oE(t,e){No=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var cu={readContext:en,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},KS={readContext:en,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,Zv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HS.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:Ef,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=qS.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=wn();if(Ce){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),tt===null)throw Error(j(349));fi&30||Hv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(Kv.bind(null,r,s,t),[t]),r.flags|=2048,ia(9,Wv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wn(),e=tt.identifierPrefix;if(Ce){var n=Bn,r=jn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:en,useCallback:tE,useContext:en,useEffect:vf,useImperativeHandle:eE,useInsertionEffect:Yv,useLayoutEffect:Jv,useMemo:nE,useReducer:Jc,useRef:Xv,useState:function(){return Jc(ra)},useDebugValue:Ef,useDeferredValue:function(t){var e=tn();return rE(e,Qe.memoizedState,t)},useTransition:function(){var t=Jc(ra)[0],e=tn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:qv,useId:iE,unstable_isNewReconciler:!1},QS={readContext:en,useCallback:tE,useContext:en,useEffect:vf,useImperativeHandle:eE,useInsertionEffect:Yv,useLayoutEffect:Jv,useMemo:nE,useReducer:Zc,useRef:Xv,useState:function(){return Zc(ra)},useDebugValue:Ef,useDeferredValue:function(t){var e=tn();return Qe===null?e.memoizedState=t:rE(e,Qe.memoizedState,t)},useTransition:function(){var t=Zc(ra)[0],e=tn().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:qv,useId:iE,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Cr(t),s=Hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(mn(e,t,i,r),Nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Cr(t),s=Hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(mn(e,t,i,r),Nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Cr(t),i=Hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(mn(e,t,r,n),Nl(e,t,r))}};function wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function lE(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Vt(e)?hi:vt.current,r=e.contextTypes,s=(r=r!=null)?ys(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Vt(e)?hi:vt.current,i.context=ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qu.enqueueReplaceState(i,i.state,null),au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=II(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function uE(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,ld=r),Jh(t,e)},n}function cE(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jh(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cA.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ag(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var YS=rr.ReactCurrentOwner,xt=!1;function St(t,e,n,r){e.child=t===null?Uv(e,null,n,r):Es(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=_f(t,e,n,r,s,i),n=yf(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ce&&n&&sf(e),e.flags|=1,St(t,e,r,i),e.child)}function kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hE(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xo(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return Zh(t,e,n,r,i)}function dE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ss,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(ss,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(ss,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(ss,Ut),Ut|=r;return St(t,e,i,n),e.child}function fE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,i){var s=Vt(n)?hi:vt.current;return s=ys(e,s),hs(e,i),n=_f(t,e,n,r,s,i),r=yf(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ce&&r&&sf(e),e.flags|=1,St(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(Vt(n)){var s=!0;nu(e)}else s=!1;if(hs(e,i),e.stateNode===null)Ol(t,e),lE(e,n,r),Yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=en(h):(h=Vt(n)?hi:vt.current,h=ys(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Tg(e,o,r,h),hr=!1;var g=e.memoizedState;o.state=g,au(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Ot.current||hr?(typeof f=="function"&&(Xh(e,n,f,r),u=e.memoizedState),(l=hr||wg(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:ln(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Vt(n)?hi:vt.current,u=ys(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Tg(e,o,r,u),hr=!1,g=e.memoizedState,o.state=g,au(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||Ot.current||hr?(typeof R=="function"&&(Xh(e,n,R,r),C=e.memoizedState),(h=hr||wg(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,s,i)}function ed(t,e,n,r,i,s){fE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fg(e,n,!1),Jn(t,e,s);r=e.stateNode,YS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,l,s)):St(t,e,l,s),e.memoizedState=r.state,i&&fg(e,n,!0),e.child}function pE(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),ff(t,e.containerInfo)}function Cg(t,e,n,r,i){return vs(),af(i),e.flags|=256,St(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function mE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(De,i&1),t===null)return Gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nr(l,s):(s=ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,r){return r!==null&&af(r),Es(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(j(422))),pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ku({mode:"visible",children:r.children},i,0,null),s=ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=eh(s,r,void 0),pl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),mn(r,t,i,-1))}return kf(),r=eh(Error(j(421))),pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Rr(i.nextSibling),$t=e,Ce=!0,cn=null,t!==null&&(Qt[Xt++]=jn,Qt[Xt++]=Bn,Qt[Xt++]=di,jn=t.id,Bn=t.overflow,di=e),e=wf(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(St(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,s);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZS(t,e,n){switch(e.tag){case 3:pE(e),vs();break;case 5:zv(e);break;case 1:Vt(e.type)&&nu(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?mE(t,e,n):(we(De,De.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);we(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,dE(t,e,n)}return Jn(t,e,n)}var _E,rd,yE,vE;_E=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};yE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ri(kn.current);var s=null;switch(n){case"input":i=Ah(t,i),r=Ah(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Ph(t,i),r=Ph(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eu)}Nh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&($o.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&($o.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};vE=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eA(t,e,n){var r=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Vt(e.type)&&tu(),pt(e),null;case 3:return r=e.stateNode,ws(),Ae(Ot),Ae(vt),mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(hd(cn),cn=null))),rd(t,e),pt(e),null;case 5:pf(e);var i=ri(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)yE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return pt(e),null}if(t=ri(kn.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)Ie(yo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Um(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Bm(r,s),Ie("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,l,t),i=["children",""+l]):$o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":rl(r),jm(r,s,!0);break;case"textarea":rl(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ky(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Zo]=r,_E(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)Ie(yo[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Um(t,r),i=Ah(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Bm(t,r),i=Ph(t,r),Ie("invalid",t);break;default:i=r}Nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Xy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qo(t,u):typeof u=="number"&&qo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&qd(t,s,u,o))}switch(n){case"input":rl(t),jm(t,r,!1);break;case"textarea":rl(t),zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)vE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ri(ta.current),ri(kn.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return pt(e),null;case 13:if(Ae(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Bt!==null&&e.mode&1&&!(e.flags&128))Mv(),vs(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[In]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else cn!==null&&(hd(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):kf())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return ws(),rd(t,e),t===null&&Yo(e.stateNode.containerInfo),pt(e),null;case 10:return cf(e.type._context),pt(e),null;case 17:return Vt(e.type)&&tu(),pt(e),null;case 19:if(Ae(De),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>Is&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return pt(e),null}else 2*je()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=De.current,we(De,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function tA(t,e){switch(of(e),e.tag){case 1:return Vt(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),Ae(Ot),Ae(vt),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(Ae(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(De),null;case 4:return ws(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var ml=!1,_t=!1,nA=typeof WeakSet=="function"?WeakSet:Set,Q=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Dg=!1;function rA(t,e){if(Bh=Yl,t=Sv(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var R;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(R=p.firstChild)!==null;)g=p,p=R;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(R=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Yl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,V=C.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:ln(e.type,N),V);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){Me(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return C=Dg,Dg=!1,C}function Do(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&id(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function EE(t){var e=t.alternate;e!==null&&(t.alternate=null,EE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Zo],delete e[Hh],delete e[US],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wE(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var rt=null,un=!1;function lr(t,e,n){for(n=n.child;n!==null;)TE(t,e,n),n=n.sibling}function TE(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:_t||is(n,e);case 6:var r=rt,i=un;rt=null,lr(t,e,n),rt=r,un=i,rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(un?(t=rt,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Go(t)):Gc(rt,n.stateNode));break;case 4:r=rt,i=un,rt=n.stateNode.containerInfo,un=!0,lr(t,e,n),rt=r,un=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!_t&&(is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Me(n,e,l)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,lr(t,e,n),_t=r):lr(t,e,n);break;default:lr(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nA),e.forEach(function(r){var i=dA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,un=!1;break e;case 3:rt=l.stateNode.containerInfo,un=!0;break e;case 4:rt=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(rt===null)throw Error(j(160));TE(s,o,i),rt=null,un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Me(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IE(e,t),e=e.sibling}function IE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),En(t),r&4){try{Do(3,t,t.return),Hu(3,t)}catch(N){Me(t,t.return,N)}try{Do(5,t,t.return)}catch(N){Me(t,t.return,N)}}break;case 1:on(e,t),En(t),r&512&&n!==null&&is(n,n.return);break;case 5:if(on(e,t),En(t),r&512&&n!==null&&is(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(N){Me(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hy(i,s),Dh(l,o);var h=Dh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Xy(i,p):f==="dangerouslySetInnerHTML"?Gy(i,p):f==="children"?qo(i,p):qd(i,f,p,h)}switch(l){case"input":Rh(i,s);break;case"textarea":Wy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?as(i,!!s.multiple,R,!1):g!==!!s.multiple&&(s.defaultValue!=null?as(i,!!s.multiple,s.defaultValue,!0):as(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zo]=s}catch(N){Me(t,t.return,N)}}break;case 6:if(on(e,t),En(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Me(t,t.return,N)}}break;case 3:if(on(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(N){Me(t,t.return,N)}break;case 4:on(e,t),En(t);break;case 13:on(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sf=je())),r&4&&Og(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(h=_t)||f,on(e,t),_t=h):on(e,t),En(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(g=Q,R=g.child,g.tag){case 0:case 11:case 14:case 15:Do(4,g,g.return);break;case 1:is(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Me(r,n,N)}}break;case 5:is(g,g.return);break;case 22:if(g.memoizedState!==null){bg(p);continue}}R!==null?(R.return=g,Q=R):bg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qy("display",o))}catch(N){Me(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){Me(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(e,t),En(t),r&4&&Og(t);break;case 21:break;default:on(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wE(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=xg(t);ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xg(t);od(t,l,o);break;default:throw Error(j(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iA(t,e,n){Q=t,SE(t)}function SE(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ml;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||_t;l=ml;var h=_t;if(ml=o,(_t=u)&&!h)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Lg(i):u!==null?(u.return=o,Q=u):Lg(i);for(;s!==null;)Q=s,SE(s),s=s.sibling;Q=i,ml=l,_t=h}Vg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Vg(t)}}function Vg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Go(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}_t||e.flags&512&&sd(e)}catch(g){Me(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function bg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Lg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{sd(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{sd(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var sA=Math.ceil,hu=rr.ReactCurrentDispatcher,Tf=rr.ReactCurrentOwner,Zt=rr.ReactCurrentBatchConfig,de=0,tt=null,He=null,at=0,Ut=0,ss=Br(0),Xe=0,sa=null,pi=0,Wu=0,If=0,xo=null,Dt=null,Sf=0,Is=1/0,Fn=null,du=!1,ld=null,Pr=null,gl=!1,wr=null,fu=0,Oo=0,ud=null,Vl=-1,bl=0;function At(){return de&6?je():Vl!==-1?Vl:Vl=je()}function Cr(t){return t.mode&1?de&2&&at!==0?at&-at:zS.transition!==null?(bl===0&&(bl=lv()),bl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:mv(t.type)),t):1}function mn(t,e,n,r){if(50<Oo)throw Oo=0,ud=null,Error(j(185));ya(t,n,r),(!(de&2)||t!==tt)&&(t===tt&&(!(de&2)&&(Wu|=n),Xe===4&&fr(t,at)),bt(t,r),n===1&&de===0&&!(e.mode&1)&&(Is=je()+500,zu&&zr()))}function bt(t,e){var n=t.callbackNode;zI(t,e);var r=Xl(t,t===tt?at:0);if(r===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?BS(Mg.bind(null,t)):Vv(Mg.bind(null,t)),MS(function(){!(de&6)&&zr()}),n=null;else{switch(uv(r)){case 1:n=Qd;break;case 4:n=ov;break;case 16:n=Ql;break;case 536870912:n=av;break;default:n=Ql}n=xE(n,AE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AE(t,e){if(Vl=-1,bl=0,de&6)throw Error(j(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Xl(t,t===tt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pu(t,r);else{e=r;var i=de;de|=2;var s=kE();(tt!==t||at!==e)&&(Fn=null,Is=je()+500,oi(t,e));do try{lA();break}catch(l){RE(t,l)}while(!0);uf(),hu.current=s,de=i,He!==null?e=0:(tt=null,at=0,e=Xe)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(r=i,e=cd(t,i))),e===1)throw n=sa,oi(t,0),fr(t,r),bt(t,je()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oA(i)&&(e=pu(t,r),e===2&&(s=Lh(t),s!==0&&(r=s,e=cd(t,s))),e===1))throw n=sa,oi(t,0),fr(t,r),bt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Zr(t,Dt,Fn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=Sf+500-je(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(Zr.bind(null,t,Dt,Fn),e);break}Zr(t,Dt,Fn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sA(r/1960))-r,10<r){t.timeoutHandle=qh(Zr.bind(null,t,Dt,Fn),r);break}Zr(t,Dt,Fn);break;case 5:Zr(t,Dt,Fn);break;default:throw Error(j(329))}}}return bt(t,je()),t.callbackNode===n?AE.bind(null,t):null}function cd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=pu(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&hd(e)),t}function hd(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function oA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~If,e&=~Wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if(de&6)throw Error(j(327));ds();var e=Xl(t,0);if(!(e&1))return bt(t,je()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=sa,oi(t,0),fr(t,e),bt(t,je()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Dt,Fn),bt(t,je()),null}function Af(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Is=je()+500,zu&&zr())}}function mi(t){wr!==null&&wr.tag===0&&!(de&6)&&ds();var e=de;de|=1;var n=Zt.transition,r=_e;try{if(Zt.transition=null,_e=1,t)return t()}finally{_e=r,Zt.transition=n,de=e,!(de&6)&&zr()}}function Rf(){Ut=ss.current,Ae(ss)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LS(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tu();break;case 3:ws(),Ae(Ot),Ae(vt),mf();break;case 5:pf(r);break;case 4:ws();break;case 13:Ae(De);break;case 19:Ae(De);break;case 10:cf(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(tt=t,He=t=Nr(t.current,null),at=Ut=e,Xe=0,sa=null,If=Wu=pi=0,Dt=xo=null,ni!==null){for(e=0;e<ni.length;e++)if(n=ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ni=null}return t}function RE(t,e){do{var n=He;try{if(uf(),Dl.current=cu,uu){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uu=!1}if(fi=0,et=Qe=xe=null,No=!1,na=0,Tf.current=null,n===null||n.return===null){Xe=1,sa=e,He=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=at,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Sg(o);if(R!==null){R.flags&=-257,Ag(R,o,l,s,e),R.mode&1&&Ig(s,h,e),e=R,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Ig(s,h,e),kf();break e}u=Error(j(426))}}else if(Ce&&l.mode&1){var V=Sg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ag(V,o,l,s,e),af(Ts(u,l));break e}}s=u=Ts(u,l),Xe!==4&&(Xe=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=uE(s,u,e);_g(s,T);break e;case 1:l=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pr===null||!Pr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=cE(s,l,e);_g(s,O);break e}}s=s.return}while(s!==null)}CE(n)}catch(F){e=F,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function kE(){var t=hu.current;return hu.current=cu,t===null?cu:t}function kf(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(pi&268435455)&&!(Wu&268435455)||fr(tt,at)}function pu(t,e){var n=de;de|=2;var r=kE();(tt!==t||at!==e)&&(Fn=null,oi(t,e));do try{aA();break}catch(i){RE(t,i)}while(!0);if(uf(),de=n,hu.current=r,He!==null)throw Error(j(261));return tt=null,at=0,Xe}function aA(){for(;He!==null;)PE(He)}function lA(){for(;He!==null&&!OI();)PE(He)}function PE(t){var e=DE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?CE(t):He=e,Tf.current=null}function CE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tA(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,He=null;return}}else if(n=eA(n,e,Ut),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Xe===0&&(Xe=5)}function Zr(t,e,n){var r=_e,i=Zt.transition;try{Zt.transition=null,_e=1,uA(t,e,n,r)}finally{Zt.transition=i,_e=r}return null}function uA(t,e,n,r){do ds();while(wr!==null);if(de&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($I(t,s),t===tt&&(He=tt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,xE(Ql,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=_e;_e=1;var l=de;de|=4,Tf.current=null,rA(t,n),IE(n,t),CS(zh),Yl=!!Bh,zh=Bh=null,t.current=n,iA(n),VI(),de=l,_e=o,Zt.transition=s}else t.current=n;if(gl&&(gl=!1,wr=t,fu=i),s=t.pendingLanes,s===0&&(Pr=null),MI(n.stateNode),bt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=ld,ld=null,t;return fu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===ud?Oo++:(Oo=0,ud=t):Oo=0,zr(),null}function ds(){if(wr!==null){var t=uv(fu),e=Zt.transition,n=_e;try{if(Zt.transition=null,_e=16>t?16:t,wr===null)var r=!1;else{if(t=wr,wr=null,fu=0,de&6)throw Error(j(331));var i=de;for(de|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Do(8,f,s)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var g=f.sibling,R=f.return;if(EE(f),f===h){Q=null;break}if(g!==null){g.return=R,Q=g;break}Q=R}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Q=T;break e}Q=s.return}}var y=t.current;for(Q=y;Q!==null;){o=Q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Q=S;else e:for(o=y;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(F){Me(l,l.return,F)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(de=i,zr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Mu,t)}catch{}r=!0}return r}finally{_e=n,Zt.transition=e}}return!1}function Fg(t,e,n){e=Ts(n,e),e=uE(t,e,1),t=kr(t,e,1),e=At(),t!==null&&(ya(t,1,e),bt(t,e))}function Me(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ts(n,t),t=cE(e,t,1),e=kr(e,t,1),t=At(),e!==null&&(ya(e,1,t),bt(e,t));break}}e=e.return}}function cA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(at&n)===n&&(Xe===4||Xe===3&&(at&130023424)===at&&500>je()-Sf?oi(t,0):If|=n),bt(t,e)}function NE(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=At();t=Yn(t,e),t!==null&&(ya(t,e,n),bt(t,n))}function hA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),NE(t,n)}function dA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),NE(t,n)}var DE;DE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,ZS(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ce&&e.flags&1048576&&bv(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=ys(e,vt.current);hs(e,n),i=_f(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,nu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,df(e),i.updater=qu,e.stateNode=i,i._reactInternals=e,Yh(e,r,t,n),e=ed(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&sf(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pA(r),t=ln(r,t),i){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,ln(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Pg(t,e,r,i,n);case 3:e:{if(pE(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bv(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(j(423)),e),e=Cg(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(j(424)),e),e=Cg(t,e,r,n,i);break e}else for(Bt=Rr(e.stateNode.containerInfo.firstChild),$t=e,Ce=!0,cn=null,n=Uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Jn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return zv(e),t===null&&Gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$h(r,i)?o=null:s!==null&&$h(r,s)&&(e.flags|=32),fE(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Gh(e),null;case 13:return mE(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Rg(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(su,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Ot.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Hn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Qh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=en(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),kg(t,e,r,i,n);case 15:return hE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Ol(t,e),e.tag=1,Vt(r)?(t=!0,nu(e)):t=!1,hs(e,n),lE(e,r,i),Yh(e,r,i,n),ed(null,e,r,!0,t,n);case 19:return gE(t,e,n);case 22:return dE(t,e,n)}throw Error(j(156,e.tag))};function xE(t,e){return sv(t,e)}function fA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new fA(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pA(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Kd)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qi:return ai(n.children,i,s,e);case Hd:o=8,i|=8;break;case wh:return t=Jt(12,n,e,i|2),t.elementType=wh,t.lanes=s,t;case Th:return t=Jt(13,n,e,i),t.elementType=Th,t.lanes=s,t;case Ih:return t=Jt(19,n,e,i),t.elementType=Ih,t.lanes=s,t;case zy:return Ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jy:o=10;break e;case By:o=9;break e;case Wd:o=11;break e;case Kd:o=14;break e;case cr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=zy,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,i,s,o,l,u){return t=new mA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function gA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function OE(t){if(!t)return br;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Vt(n))return Ov(t,n,e)}return e}function VE(t,e,n,r,i,s,o,l,u){return t=Cf(n,r,!0,t,i,s,o,l,u),t.context=OE(null),n=t.current,r=At(),i=Cr(n),s=Hn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,ya(t,i,r),bt(t,r),t}function Gu(t,e,n,r){var i=e.current,s=At(),o=Cr(i);return n=OE(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(mn(t,i,o,s),Nl(t,i,o)),o}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function _A(){return null}var bE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}Qu.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Gu(t,e,null,null)};Qu.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mi(function(){Gu(null,t,null,null)}),e[Xn]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&pv(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function yA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=mu(o);s.call(h)}}var o=VE(e,r,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[Xn]=o.current,Yo(t.nodeType===8?t.parentNode:t),mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=mu(u);l.call(h)}}var u=Cf(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=u,t[Xn]=u.current,Yo(t.nodeType===8?t.parentNode:t),mi(function(){Gu(e,u,n,r)}),u}function Yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=mu(o);l.call(u)}}Gu(e,o,t,i)}else o=yA(n,e,t,i,r);return mu(o)}cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Xd(e,n|1),bt(e,je()),!(de&6)&&(Is=je()+500,zr()))}break;case 13:mi(function(){var r=Yn(t,1);if(r!==null){var i=At();mn(r,t,1,i)}}),Nf(t,1)}};Yd=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=At();mn(e,t,134217728,n)}Nf(t,134217728)}};hv=function(t){if(t.tag===13){var e=Cr(t),n=Yn(t,e);if(n!==null){var r=At();mn(n,t,e,r)}Nf(t,e)}};dv=function(){return _e};fv=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Oh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bu(r);if(!i)throw Error(j(90));qy(r),Rh(r,i)}}}break;case"textarea":Wy(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Zy=Af;ev=mi;var vA={usingClientEntryPoint:!1,Events:[Ea,Zi,Bu,Yy,Jy,Af]},co={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rv(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||_A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Mu=_l.inject(EA),Rn=_l}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vA;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(j(200));return gA(t,e,null,n)};Wt.createRoot=function(t,e){if(!xf(t))throw Error(j(299));var n=!1,r="",i=bE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,i),t[Xn]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Df(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=rv(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return mi(t)};Wt.hydrate=function(t,e,n){if(!Xu(e))throw Error(j(200));return Yu(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[Xn]=e.current,Yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qu(e)};Wt.render=function(t,e,n){if(!Xu(e))throw Error(j(200));return Yu(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(j(40));return t._reactRootContainer?(mi(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Af;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Yu(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function LE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LE)}catch(t){console.error(t)}}LE(),Ly.exports=Wt;var wA=Ly.exports,ME,Bg=wA;ME=Bg.createRoot,Bg.hydrateRoot;var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},UE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(g=64)),r.push(n[f],n[p],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new IA;const g=s<<2|l>>4;if(r.push(g),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SA=function(t){const e=FE(t);return UE.encodeByteArray(e,!0)},gu=function(t){return SA(t).replace(/\./g,"")},jE=function(t){try{return UE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=()=>AA().__FIREBASE_DEFAULTS__,kA=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jE(t[1]);return e&&JSON.parse(e)},Ju=()=>{try{return RA()||kA()||PA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},BE=t=>{var e,n;return(n=(e=Ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zE=t=>{const e=BE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$E=()=>{var t;return(t=Ju())===null||t===void 0?void 0:t.config},qE=t=>{var e;return(e=Ju())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function DA(){var t;const e=(t=Ju())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bA(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LA(){return!DA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MA(){try{return typeof indexedDB=="object"}catch{return!1}}function FA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UA,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,l,r)}}function jA(t,e){return t.replace(BA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BA=/\{\$([^}]+)}/g;function zA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($g(s)&&$g(o)){if(!_u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $g(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $A(t,e){const n=new qA(t,e);return n.subscribe.bind(n)}class qA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GA(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KA(t){return t===ei?void 0:t}function GA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const XA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},YA=ue.INFO,JA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},ZA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=YA,this._logHandler=ZA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const eR=(t,e)=>e.some(n=>t instanceof n);let qg,Hg;function tR(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nR(){return Hg||(Hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WE=new WeakMap,dd=new WeakMap,KE=new WeakMap,sh=new WeakMap,Vf=new WeakMap;function rR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WE.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function iR(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sR(t){fd=t(fd)}function oR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return KE.set(r,e.sort?e.sort():[e]),Dr(r)}:nR().includes(t)?function(...e){return t.apply(oh(this),e),Dr(WE.get(this))}:function(...e){return Dr(t.apply(oh(this),e))}}function aR(t){return typeof t=="function"?oR(t):(t instanceof IDBTransaction&&iR(t),eR(t,tR())?new Proxy(t,fd):t)}function Dr(t){if(t instanceof IDBRequest)return rR(t);if(sh.has(t))return sh.get(t);const e=aR(t);return e!==t&&(sh.set(t,e),Vf.set(e,t)),e}const oh=t=>Vf.get(t);function lR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const uR=["get","getKey","getAll","getAllKeys","count"],cR=["put","add","delete","clear"],ah=new Map;function Wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ah.set(e,s),s}sR(t=>({...t,get:(e,n,r)=>Wg(e,n)||t.get(e,n,r),has:(e,n)=>!!Wg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",Kg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Of("@firebase/app"),fR="@firebase/app-compat",pR="@firebase/analytics-compat",mR="@firebase/analytics",gR="@firebase/app-check-compat",_R="@firebase/app-check",yR="@firebase/auth",vR="@firebase/auth-compat",ER="@firebase/database",wR="@firebase/data-connect",TR="@firebase/database-compat",IR="@firebase/functions",SR="@firebase/functions-compat",AR="@firebase/installations",RR="@firebase/installations-compat",kR="@firebase/messaging",PR="@firebase/messaging-compat",CR="@firebase/performance",NR="@firebase/performance-compat",DR="@firebase/remote-config",xR="@firebase/remote-config-compat",OR="@firebase/storage",VR="@firebase/storage-compat",bR="@firebase/firestore",LR="@firebase/vertexai-preview",MR="@firebase/firestore-compat",FR="firebase",UR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",jR={[pd]:"fire-core",[fR]:"fire-core-compat",[mR]:"fire-analytics",[pR]:"fire-analytics-compat",[_R]:"fire-app-check",[gR]:"fire-app-check-compat",[yR]:"fire-auth",[vR]:"fire-auth-compat",[ER]:"fire-rtdb",[wR]:"fire-data-connect",[TR]:"fire-rtdb-compat",[IR]:"fire-fn",[SR]:"fire-fn-compat",[AR]:"fire-iid",[RR]:"fire-iid-compat",[kR]:"fire-fcm",[PR]:"fire-fcm-compat",[CR]:"fire-perf",[NR]:"fire-perf-compat",[DR]:"fire-rc",[xR]:"fire-rc-compat",[OR]:"fire-gcs",[VR]:"fire-gcs-compat",[bR]:"fire-fst",[MR]:"fire-fst-compat",[LR]:"fire-vertex","fire-js":"fire-js",[FR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new Map,BR=new Map,gd=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(gd.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of yu.values())Gg(n,t);for(const n of BR.values())Gg(n,t);return!0}function Zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ta("app","Firebase",zR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=UR;function GE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=$E()),!n)throw xr.create("no-options");const s=yu.get(i);if(s){if(_u(n,s.options)&&_u(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new QA(i);for(const u of gd.values())o.addComponent(u);const l=new $R(n,r,o);return yu.set(i,l),l}function bf(t=md){const e=yu.get(t);if(!e&&t===md&&$E())return GE();if(!e)throw xr.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=jR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(l.join(" "));return}gi(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebase-heartbeat-database",HR=1,oa="firebase-heartbeat-store";let lh=null;function QE(){return lh||(lh=lR(qR,HR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),lh}async function WR(t){try{const n=(await QE()).transaction(oa),r=await n.objectStore(oa).get(XE(t));return await n.done,r}catch(e){if(e instanceof Vn)Zn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function Qg(t,e){try{const r=(await QE()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,XE(t)),await r.done}catch(n){if(n instanceof Vn)Zn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function XE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=1024,GR=30*24*60*60*1e3;class QR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xg(),{heartbeatsToSend:r,unsentEntries:i}=XR(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function XR(t,e=KR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MA()?FA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){gi(new Lr("platform-logger",e=>new hR(e),"PRIVATE")),gi(new Lr("heartbeat",e=>new QR(e),"PRIVATE")),Pn(pd,Kg,t),Pn(pd,Kg,"esm2017"),Pn("fire-js","")}JR("");var ZR="firebase",ek="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(ZR,ek,"app");function Lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function YE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tk=YE,JE=new Ta("auth","Firebase",YE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Of("@firebase/auth");function nk(t,...e){vu.logLevel<=ue.WARN&&vu.warn(`Auth (${Ai}): ${t}`,...e)}function Ml(t,...e){vu.logLevel<=ue.ERROR&&vu.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw Mf(t,...e)}function Cn(t,...e){return Mf(t,...e)}function ZE(t,e,n){const r=Object.assign(Object.assign({},tk()),{[e]:n});return new Ta("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return ZE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function te(t,e,...n){if(!t)throw Mf(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function er(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rk(){return Jg()==="http:"||Jg()==="https:"}function Jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rk()||OA()||"connection"in navigator)?navigator.onLine:!0}function sk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=NA()||VA()}get(){return ik()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=new Sa(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return tw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return xA()||(h.referrerPolicy="no-referrer"),ew.fetch()(nw(t,t.config.apiHost,n,l),h)})}async function tw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ok),e);try{const i=new uk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw yl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ZE(t,f,h);_n(t,f)}}catch(i){if(i instanceof Vn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Aa(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`}function lk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),ak.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function Zg(t){return t!==void 0&&t.enterprise!==void 0}class ck{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hk(t,e){return qr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function rw(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=Uf(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(uh(i.auth_time)),issuedAtTime:Vo(uh(i.iat)),expirationTime:Vo(uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=jE(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function e_(t){const e=Uf(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&fk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await aa(t,rw(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sw(s.providerUserInfo):[],l=gk(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function mk(t){const e=Ge(t);await Eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sw(t){return t.map(e=>{var{providerId:n}=e,r=Lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){const n=await tw(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ew.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yk(t,e){return qr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=e_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _k(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iw(this,e)}reload(){return mk(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await aa(this,dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:O,isAnonymous:F,providerData:z,stsTokenManager:w}=n;te(S&&w,e,"internal-error");const _=fs.fromJSON(this.name,w);te(typeof S=="string",e,"internal-error"),ur(p,e.name),ur(g,e.name),te(typeof O=="boolean",e,"internal-error"),te(typeof F=="boolean",e,"internal-error"),ur(R,e.name),ur(C,e.name),ur(N,e.name),ur(V,e.name),ur(T,e.name),ur(y,e.name);const v=new $n({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:R,tenantId:N,stsTokenManager:_,createdAt:T,lastLoginAt:y});return z&&Array.isArray(z)&&(v.providerData=z.map(I=>Object.assign({},I))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Eu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new fs;l.updateFromIdToken(r);const u=new $n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;function qn(t){er(t instanceof Function,"Expected a class definition");let e=t_.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,t_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ow.type="NONE";const n_=ow;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(qn(n_),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||qn(n_);const o=Fl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=$n._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ps(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ps(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dw(e))return"Blackberry";if(fw(e))return"Webos";if(lw(e))return"Safari";if((e.includes("chrome/")||uw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aw(t=Et()){return/firefox\//i.test(t)}function lw(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uw(t=Et()){return/crios\//i.test(t)}function cw(t=Et()){return/iemobile/i.test(t)}function hw(t=Et()){return/android/i.test(t)}function dw(t=Et()){return/blackberry/i.test(t)}function fw(t=Et()){return/webos/i.test(t)}function jf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vk(t=Et()){var e;return jf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ek(){return bA()&&document.documentMode===10}function pw(t=Et()){return jf(t)||hw(t)||fw(t)||dw(t)||/windows phone/i.test(t)||cw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t,e=[]){let n;switch(t){case"Browser":n=r_(Et());break;case"Worker":n=`${r_(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e={}){return qr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=6;class Sk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ik,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i_(this),this.idTokenSubscription=new i_(this),this.beforeStateQueue=new wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rw(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Wn(this));const n=e?Ge(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tk(this),n=new Sk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ri(t){return Ge(t)}class i_{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rk(t){ec=t}function gw(t){return ec.loadJS(t)}function kk(){return ec.recaptchaEnterpriseScript}function Pk(){return ec.gapiScript}function Ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Nk="recaptcha-enterprise",Dk="NO_RECAPTCHA";class xk{constructor(e){this.type=Nk,this.auth=Ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{hk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new ck(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Zg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Dk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Zg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kk();u.length!==0&&(u+=l),gw(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function s_(t,e,n,r=!1){const i=new xk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await s_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await s_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e){const n=Zu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_u(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function Vk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bk(t,e,n){const r=Ri(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_w(e),{host:o,port:l}=Lk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mk()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lk(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:o_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:o_(o)}}}function o_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function Fk(t,e){return qr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return Aa(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function Bk(t,e){return Aa(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,n,"signInWithPassword",Uk);case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,r,"signUpPassword",Fk);case"emailLink":return Bk(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return Aa(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="http://localhost";class _i extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:zk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qk(t){const e=vo(Eo(t)).link,n=e?vo(Eo(e)).deep_link_id:null,r=vo(Eo(t)).deep_link_id;return(r?vo(Eo(r)).link:null)||r||n||e||t}class zf{constructor(e){var n,r,i,s,o,l;const u=vo(Eo(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=$k((i=u.mode)!==null&&i!==void 0?i:null);te(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=qk(e);try{return new zf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zf.parseLink(n);return te(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ra{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ra{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ra{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){return Aa(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $n._fromIdTokenResponse(e,r,i),o=a_(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=a_(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function a_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function vw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function Wk(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Wn(r));const i="reauthenticate";try{const s=await aa(t,vw(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Uf(s.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e,n=!1){if(Sn(t.app))return Promise.reject(Wn(t));const r="signIn",i=await vw(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gk(t,e){return Ew(Ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t){const e=Ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qk(t,e,n){if(Sn(t.app))return Promise.reject(Wn(t));const r=Ri(t),o=await vd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ww(t),u}),l=await yi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Xk(t,e,n){return Sn(t.app)?Promise.reject(Wn(t)):Gk(Ge(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ww(t),r})}function Yk(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function Jk(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Zk(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function eP(t){return Ge(t).signOut()}const Tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=1e3,nP=10;class Iw extends Tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ek()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const rP=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw extends Tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sw.type="SESSION";const Aw=Sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await iP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=$f("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function oP(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function aP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uP(){return Rw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="firebaseLocalStorageDb",cP=1,Iu="firebaseLocalStorage",Pw="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function hP(){const t=indexedDB.deleteDatabase(kw);return new ka(t).toPromise()}function Ed(){const t=indexedDB.open(kw,cP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:Pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await hP(),e(await Ed()))})})}async function l_(t,e,n){const r=nc(t,!0).put({[Pw]:e,value:n});return new ka(r).toPromise()}async function dP(t,e){const n=nc(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function u_(t,e){const n=nc(t,!0).delete(e);return new ka(n).toPromise()}const fP=800,pP=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(uP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aP(),!this.activeServiceWorker)return;this.sender=new sP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await l_(e,Tu,"1"),await u_(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nc(i,!1).getAll();return new ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const mP=Cw;new Sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e){return e?qn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _P(t){return Ew(t.auth,new qf(t),t.bypassAuthState)}function yP(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Kk(n,new qf(t),t.bypassAuthState)}async function vP(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Wk(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _P;case"linkViaPopup":case"linkViaRedirect":return vP;case"reauthViaPopup":case"reauthViaRedirect":return yP;default:_n(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=new Sa(2e3,1e4);class os extends Nw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EP.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="pendingRedirect",Ul=new Map;class TP extends Nw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await IP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IP(t,e){const n=RP(e),r=AP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SP(t,e){Ul.set(t._key(),e)}function AP(t){return qn(t._redirectPersistence)}function RP(t){return Fl(wP,t.config.apiKey,t.name)}async function kP(t,e,n=!1){if(Sn(t.app))return Promise.reject(Wn(t));const r=Ri(t),i=gP(r,e),o=await new TP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=10*60*1e3;class CP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function VP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DP(t);for(const n of e)try{if(bP(n))return}catch{}_n(t,"unauthorized-domain")}function bP(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OP.test(n))return!1;if(xP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new Sa(3e4,6e4);function h_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MP(t){return new Promise((e,n)=>{var r,i,s;function o(){h_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(Cn(t,"network-request-failed"))},timeout:LP.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const l=Ck("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},gw(`${Pk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function FP(t){return jl=jl||MP(t),jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new Sa(5e3,15e3),jP="__/auth/iframe",BP="emulator/auth/iframe",zP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qP(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,BP):`https://${t.config.authDomain}/${jP}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=$P.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function HP(t){const e=await FP(t),n=Nn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:qP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Nn().setTimeout(()=>{s(o)},UP.get());function u(){Nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,GP=600,QP="_blank",XP="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YP(t,e,n,r=KP,i=GP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},WP),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Et().toLowerCase();n&&(l=uw(h)?QP:n),aw(h)&&(e=e||XP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[R,C])=>`${g}${R}=${C},`,"");if(vk(h)&&l!=="_self")return JP(e||"",l),new d_(null);const p=window.open(e||"",l,f);te(p,t,"popup-blocked");try{p.focus()}catch{}return new d_(p)}function JP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="__/auth/handler",eC="emulator/auth/handler",tC=encodeURIComponent("fac");async function f_(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ra){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${tC}=${encodeURIComponent(u)}`:"";return`${nC(t)}?${Ia(l).slice(1)}${h}`}function nC({config:t}){return t.emulator?Ff(t,eC):`https://${t.authDomain}/${ZP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="webStorageSupport";class rC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=kP,this._overrideRedirectResult=SP}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await f_(e,n,r,_d(),i);return YP(e,o,$f())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await f_(e,n,r,_d(),i);return oP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HP(e),r=new CP(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ch];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pw()||lw()||jf()}}const iC=rC;var p_="@firebase/auth",m_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aC(t){gi(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mw(t)},h=new Ak(r,i,s,u);return Vk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Lr("auth-internal",e=>{const n=Ri(e.getProvider("auth").getImmediate());return(r=>new sC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(p_,m_,oC(t)),Pn(p_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=5*60,uC=qE("authIdTokenMaxAge")||lC;let g_=null;const cC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uC)return;const i=n==null?void 0:n.token;g_!==i&&(g_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hf(t=bf()){const e=Zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ok(t,{popupRedirectResolver:iC,persistence:[mP,rP,Aw]}),r=qE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cC(s.toString());Jk(n,o,()=>o(n.currentUser)),Yk(n,l=>o(l))}}const i=BE("auth");return i&&bk(n,`http://${i}`),n}function hC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Rk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aC("Browser");var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li,xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,k,P){for(var E=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)E[ce-2]=arguments[ce];return _.prototype[k].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,v){v||(v=0);var I=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)I[k]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(k=0;16>k;++k)I[k]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],k=w.g[2];var P=w.g[3],E=_+(P^v&(k^P))+I[0]+3614090360&4294967295;_=v+(E<<7&4294967295|E>>>25),E=P+(k^_&(v^k))+I[1]+3905402710&4294967295,P=_+(E<<12&4294967295|E>>>20),E=k+(v^P&(_^v))+I[2]+606105819&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(_^k&(P^_))+I[3]+3250441966&4294967295,v=k+(E<<22&4294967295|E>>>10),E=_+(P^v&(k^P))+I[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=P+(k^_&(v^k))+I[5]+1200080426&4294967295,P=_+(E<<12&4294967295|E>>>20),E=k+(v^P&(_^v))+I[6]+2821735955&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(_^k&(P^_))+I[7]+4249261313&4294967295,v=k+(E<<22&4294967295|E>>>10),E=_+(P^v&(k^P))+I[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=P+(k^_&(v^k))+I[9]+2336552879&4294967295,P=_+(E<<12&4294967295|E>>>20),E=k+(v^P&(_^v))+I[10]+4294925233&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(_^k&(P^_))+I[11]+2304563134&4294967295,v=k+(E<<22&4294967295|E>>>10),E=_+(P^v&(k^P))+I[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=P+(k^_&(v^k))+I[13]+4254626195&4294967295,P=_+(E<<12&4294967295|E>>>20),E=k+(v^P&(_^v))+I[14]+2792965006&4294967295,k=P+(E<<17&4294967295|E>>>15),E=v+(_^k&(P^_))+I[15]+1236535329&4294967295,v=k+(E<<22&4294967295|E>>>10),E=_+(k^P&(v^k))+I[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(_^v))+I[6]+3225465664&4294967295,P=_+(E<<9&4294967295|E>>>23),E=k+(_^v&(P^_))+I[11]+643717713&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^_&(k^P))+I[0]+3921069994&4294967295,v=k+(E<<20&4294967295|E>>>12),E=_+(k^P&(v^k))+I[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(_^v))+I[10]+38016083&4294967295,P=_+(E<<9&4294967295|E>>>23),E=k+(_^v&(P^_))+I[15]+3634488961&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^_&(k^P))+I[4]+3889429448&4294967295,v=k+(E<<20&4294967295|E>>>12),E=_+(k^P&(v^k))+I[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(_^v))+I[14]+3275163606&4294967295,P=_+(E<<9&4294967295|E>>>23),E=k+(_^v&(P^_))+I[3]+4107603335&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^_&(k^P))+I[8]+1163531501&4294967295,v=k+(E<<20&4294967295|E>>>12),E=_+(k^P&(v^k))+I[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=P+(v^k&(_^v))+I[2]+4243563512&4294967295,P=_+(E<<9&4294967295|E>>>23),E=k+(_^v&(P^_))+I[7]+1735328473&4294967295,k=P+(E<<14&4294967295|E>>>18),E=v+(P^_&(k^P))+I[12]+2368359562&4294967295,v=k+(E<<20&4294967295|E>>>12),E=_+(v^k^P)+I[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=P+(_^v^k)+I[8]+2272392833&4294967295,P=_+(E<<11&4294967295|E>>>21),E=k+(P^_^v)+I[11]+1839030562&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^_)+I[14]+4259657740&4294967295,v=k+(E<<23&4294967295|E>>>9),E=_+(v^k^P)+I[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=P+(_^v^k)+I[4]+1272893353&4294967295,P=_+(E<<11&4294967295|E>>>21),E=k+(P^_^v)+I[7]+4139469664&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^_)+I[10]+3200236656&4294967295,v=k+(E<<23&4294967295|E>>>9),E=_+(v^k^P)+I[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=P+(_^v^k)+I[0]+3936430074&4294967295,P=_+(E<<11&4294967295|E>>>21),E=k+(P^_^v)+I[3]+3572445317&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^_)+I[6]+76029189&4294967295,v=k+(E<<23&4294967295|E>>>9),E=_+(v^k^P)+I[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=P+(_^v^k)+I[12]+3873151461&4294967295,P=_+(E<<11&4294967295|E>>>21),E=k+(P^_^v)+I[15]+530742520&4294967295,k=P+(E<<16&4294967295|E>>>16),E=v+(k^P^_)+I[2]+3299628645&4294967295,v=k+(E<<23&4294967295|E>>>9),E=_+(k^(v|~P))+I[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=P+(v^(_|~k))+I[7]+1126891415&4294967295,P=_+(E<<10&4294967295|E>>>22),E=k+(_^(P|~v))+I[14]+2878612391&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~_))+I[5]+4237533241&4294967295,v=k+(E<<21&4294967295|E>>>11),E=_+(k^(v|~P))+I[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=P+(v^(_|~k))+I[3]+2399980690&4294967295,P=_+(E<<10&4294967295|E>>>22),E=k+(_^(P|~v))+I[10]+4293915773&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~_))+I[1]+2240044497&4294967295,v=k+(E<<21&4294967295|E>>>11),E=_+(k^(v|~P))+I[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=P+(v^(_|~k))+I[15]+4264355552&4294967295,P=_+(E<<10&4294967295|E>>>22),E=k+(_^(P|~v))+I[6]+2734768916&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~_))+I[13]+1309151649&4294967295,v=k+(E<<21&4294967295|E>>>11),E=_+(k^(v|~P))+I[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=P+(v^(_|~k))+I[11]+3174756917&4294967295,P=_+(E<<10&4294967295|E>>>22),E=k+(_^(P|~v))+I[2]+718787259&4294967295,k=P+(E<<15&4294967295|E>>>17),E=v+(P^(k|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,I=this.B,k=this.h,P=0;P<_;){if(k==0)for(;P<=v;)i(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<_;)if(I[k++]=w.charCodeAt(P++),k==this.blockSize){i(this,I),k=0;break}}else for(;P<_;)if(I[k++]=w[P++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var I=0;32>I;I+=8)w[v++]=this.g[_]>>>I&255;return w};function s(w,_){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function o(w,_){this.h=_;for(var v=[],I=!0,k=w.length-1;0<=k;k--){var P=w[k]|0;I&&P==_||(v[k]=P,I=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return V(h(-w));for(var _=[],v=1,I=0;w>=v;I++)_[I]=w/v|0,v*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return V(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),I=p,k=0;k<w.length;k+=8){var P=Math.min(8,w.length-k),E=parseInt(w.substring(k,k+P),_);8>P?(P=h(Math.pow(_,P)),I=I.j(P).add(h(E))):(I=I.j(v),I=I.add(h(E)))}return I}var p=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var _=h(Math.pow(w,6)),v=this,I="";;){var k=O(v,_).g;v=T(v,k.j(_));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=k,C(v))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=T(this,w),N(w)?-1:C(w)?0:1};function V(w){for(var _=w.g.length,v=[],I=0;I<_;I++)v[I]=~w.g[I];return new o(v,~w.h).add(g)}t.abs=function(){return N(this)?V(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],I=0,k=0;k<=_;k++){var P=I+(this.i(k)&65535)+(w.i(k)&65535),E=(P>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);I=E>>>16,P&=65535,E&=65535,v[k]=E<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function T(w,_){return w.add(V(_))}t.j=function(w){if(C(this)||C(w))return p;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<w.g.length;k++){var P=this.i(I)>>>16,E=this.i(I)&65535,ce=w.i(k)>>>16,Ne=w.i(k)&65535;v[2*I+2*k]+=E*Ne,y(v,2*I+2*k),v[2*I+2*k+1]+=P*Ne,y(v,2*I+2*k+1),v[2*I+2*k+1]+=E*ce,y(v,2*I+2*k+1),v[2*I+2*k+2]+=P*ce,y(v,2*I+2*k+2)}for(I=0;I<_;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=_;I<2*_;I++)v[I]=0;return new o(v,0)};function y(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function S(w,_){this.g=w,this.h=_}function O(w,_){if(C(_))throw Error("division by zero");if(C(w))return new S(p,p);if(N(w))return _=O(V(w),_),new S(V(_.g),V(_.h));if(N(_))return _=O(w,V(_)),new S(V(_.g),_.h);if(30<w.g.length){if(N(w)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,I=_;0>=I.l(w);)v=F(v),I=F(I);var k=z(v,1),P=z(I,1);for(I=z(I,2),v=z(v,2);!C(I);){var E=P.add(I);0>=E.l(w)&&(k=k.add(v),P=E),I=z(I,1),v=z(v,1)}return _=T(w,k.j(_)),new S(k,_)}for(k=p;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=h(v),E=P.j(_);N(E)||0<E.l(w);)v-=I,P=h(v),E=P.j(_);C(P)&&(P=g),k=k.add(P),w=T(w,E)}return new S(k,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)&w.i(I);return new o(v,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)|w.i(I);return new o(v,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],I=0;I<_;I++)v[I]=this.i(I)^w.i(I);return new o(v,this.h^w.h)};function F(w){for(var _=w.g.length+1,v=[],I=0;I<_;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(v,w.h)}function z(w,_){var v=_>>5;_%=32;for(var I=w.g.length-v,k=[],P=0;P<I;P++)k[P]=0<_?w.i(P+v)>>>_|w.i(P+v+1)<<32-_:w.i(P+v);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,li=o}).apply(typeof __<"u"?__:typeof self<"u"?self:typeof window<"u"?window:{});var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ow,wo,Vw,Bl,wd,bw,Lw,Mw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof vl=="object"&&vl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var D=a[m];if(!(D in d))break e;d=d[D]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,D={next:function(){if(!m&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,m),a.apply(c,D)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,D,b){for(var H=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)H[ve-2]=arguments[ve];return c.prototype[D].apply(m,H)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const D=a.length||0,b=m.length||0;a.length=D+b;for(let H=0;H<b;H++)a[D+H]=m[H]}else a.push(m)}}class T{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function z(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,m;for(let D=1;D<arguments.length;D++){m=arguments[D];for(d in m)a[d]=m[d];for(let b=0;b<v.length;b++)d=v[b],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function k(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function E(){var a=ee;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ce{constructor(){this.h=this.g=null}add(c,d){const m=Ne.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ne=new T(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,W=!1,ee=new ce,ne=()=>{const a=l.Promise.resolve(void 0);ze=()=>{a.then(Ee)}};var Ee=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){P(d)}var c=Ne;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}W=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Gt(a,c){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{O(c.nodeName);var D=!0;break e}catch{}D=!1}D||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}C(Gt,ke);var rn={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),Ma=0;function Bs(a,c,d,m,D){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=D,this.key=++Ma,this.da=this.fa=!1}function ir(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,c,d,m,D){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var H=zs(a,c,m,D);return-1<H?(c=a[H],d||(c.fa=!1)):(c=new Bs(c,this.src,b,!!m,D),c.fa=d,a.push(c)),c};function Ni(a,c){var d=c.type;if(d in a.g){var m=a.g[d],D=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=D)&&Array.prototype.splice.call(m,D,1),b&&(ir(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function zs(a,c,d,m){for(var D=0;D<a.length;++D){var b=a[D];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==m)return D}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),xi={};function Fa(a,c,d,m,D){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Fa(a,c[b],d,m,D);return null}return d=$(d),a&&a[Lt]?a.K(c,d,h(m)?!!m.capture:!1,D):gc(a,c,d,!1,m,D)}function gc(a,c,d,m,D,b){if(!c)throw Error("Invalid event type");var H=h(D)?!!D.capture:!!D,ve=K(a);if(ve||(a[Di]=ve=new Ci(a)),d=ve.add(c,d,m,H,b),d.proxy)return d;if(m=Bp(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)nn||(D=H),D===void 0&&(D=!1),a.addEventListener(c.toString(),m,D);else if(a.attachEvent)a.attachEvent(x(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Bp(){function a(d){return c.call(a.src,a.listener,d)}const c=L;return a}function $s(a,c,d,m,D){if(Array.isArray(c))for(var b=0;b<c.length;b++)$s(a,c[b],d,m,D);else m=h(m)?!!m.capture:!!m,d=$(d),a&&a[Lt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=zs(b,d,m,D),-1<d&&(ir(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=K(a))&&(c=a.g[c.toString()],a=-1,c&&(a=zs(c,d,m,D)),(d=-1<a?c[a]:null)&&A(d))}function A(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Lt])Ni(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(x(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=K(c))?(Ni(d,a),d.h==0&&(d.src=null,c[Di]=null)):ir(a)}}}function x(a){return a in xi?xi[a]:xi[a]="on"+a}function L(a,c){if(a.da)a=!0;else{c=new Gt(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&A(a),a=d.call(m,c)}return a}function K(a){return a=a[Di],a instanceof Ci?a:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function $(a){return typeof a=="function"?a:(a[q]||(a[q]=function(c){return a.handleEvent(c)}),a[q])}function G(){ge.call(this),this.i=new Ci(this),this.M=this,this.F=null}C(G,ge),G.prototype[Lt]=!0,G.prototype.removeEventListener=function(a,c,d,m){$s(this,a,c,d,m)};function ie(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new ke(c,a);else if(c instanceof ke)c.target=c.target||a;else{var D=c;c=new ke(m,a),I(c,D)}if(D=!0,d)for(var b=d.length-1;0<=b;b--){var H=c.g=d[b];D=me(H,m,!0,c)&&D}if(H=c.g=a,D=me(H,m,!0,c)&&D,D=me(H,m,!1,c)&&D,d)for(b=0;b<d.length;b++)H=c.g=d[b],D=me(H,m,!1,c)&&D}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)ir(d[m]);delete a.g[c],a.h--}}this.F=null},G.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},G.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function me(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var D=!0,b=0;b<c.length;++b){var H=c[b];if(H&&!H.da&&H.capture==d){var ve=H.listener,nt=H.ha||H.src;H.fa&&Ni(a.i,H),D=ve.call(nt,m)!==!1&&D}}return D&&!m.defaultPrevented}function wt(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Wr(a){a.g=wt(()=>{a.g=null,a.i&&(a.i=!1,Wr(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class vn extends ge{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(a){ge.call(this),this.h=a,this.g={}}C(Kr,ge);var Oi=[];function Vi(a){z(a.g,function(c,d){this.g.hasOwnProperty(d)&&A(c)},a),a.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),Vi(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qs=l.JSON.stringify,Ua=l.JSON.parse,_c=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bi(){}bi.prototype.h=null;function zp(a){return a.h||(a.h=a.i())}function $p(){}var Hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yc(){ke.call(this,"d")}C(yc,ke);function vc(){ke.call(this,"c")}C(vc,ke);var Gr={},qp=null;function ja(){return qp=qp||new G}Gr.La="serverreachability";function Hp(a){ke.call(this,Gr.La,a)}C(Hp,ke);function Ws(a){const c=ja();ie(c,new Hp(c))}Gr.STAT_EVENT="statevent";function Wp(a,c){ke.call(this,Gr.STAT_EVENT,a),this.stat=c}C(Wp,ke);function Tt(a){const c=ja();ie(c,new Wp(c,a))}Gr.Ma="timingevent";function Kp(a,c){ke.call(this,Gr.Ma,a),this.size=c}C(Kp,ke);function Ks(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function R0(a,c,d,m,D,b){a.info(function(){if(a.g)if(b)for(var H="",ve=b.split("&"),nt=0;nt<ve.length;nt++){var fe=ve[nt].split("=");if(1<fe.length){var ht=fe[0];fe=fe[1];var dt=ht.split("_");H=2<=dt.length&&dt[1]=="type"?H+(ht+"="+fe+"&"):H+(ht+"=redacted&")}}else H=null;else H=b;return"XMLHTTP REQ ("+m+") [attempt "+D+"]: "+c+`
`+d+`
`+H})}function k0(a,c,d,m,D,b,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+D+"]: "+c+`
`+d+`
`+b+" "+H})}function Li(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+C0(a,d)+(m?" "+m:"")})}function P0(a,c){a.info(function(){return"TIMEOUT: "+c})}Gs.prototype.info=function(){};function C0(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var D=m[1];if(Array.isArray(D)&&!(1>D.length)){var b=D[0];if(b!="noop"&&b!="stop"&&b!="close")for(var H=1;H<D.length;H++)D[H]=""}}}}return qs(d)}catch{return c}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ec;function za(){}C(za,bi),za.prototype.g=function(){return new XMLHttpRequest},za.prototype.i=function(){return{}},Ec=new za;function sr(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var Xp={},wc={};function Tc(a,c,d){a.L=1,a.v=Wa(bn(c)),a.m=d,a.P=!0,Yp(a,null)}function Yp(a,c){a.F=Date.now(),$a(a),a.A=bn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),hm(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Qp,a.g=Cm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new vn(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Oi[0]=D.toString()),D=Oi);for(var b=0;b<D.length;b++){var H=Fa(d,D[b],m||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ws(),R0(a.i,a.u,a.A,a.l,a.R,a.m)}sr.prototype.ca=function(a){a=a.target;const c=this.M;c&&Ln(a)==3?c.j():this.Y(a)},sr.prototype.Y=function(a){try{if(a==this.g)e:{const dt=Ln(this.g);var c=this.g.Ba();const Ui=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||ym(this.g)))){this.J||dt!=4||c==7||(c==8||0>=Ui?Ws(3):Ws(2)),Ic(this);var d=this.g.Z();this.X=d;t:if(Jp(this)){var m=ym(this.g);a="";var D=m.length,b=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Qs(this);var H="";break t}this.h.i=new l.TextDecoder}for(c=0;c<D;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(b&&c==D-1)});m.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,k0(this.i,this.u,this.A,this.l,this.R,dt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,nt=this.g;if((ve=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ve)){var fe=ve;break t}}fe=null}if(d=fe)Li(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,d);else{this.o=!1,this.s=3,Tt(12),Qr(this),Qs(this);break e}}if(this.P){d=!0;let sn;for(;!this.J&&this.C<H.length;)if(sn=N0(this,H),sn==wc){dt==4&&(this.s=4,Tt(14),d=!1),Li(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Xp){this.s=4,Tt(15),Li(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else Li(this.i,this.l,sn,null),Sc(this,sn);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||H.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Li(this.i,this.l,H,"[Invalid Chunked Response]"),Qr(this),Qs(this);else if(0<H.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Nc(ht),ht.M=!0,Tt(11))}}else Li(this.i,this.l,H,null),Sc(this,H);dt==4&&Qr(this),this.o&&!this.J&&(dt==4?Am(this.j,this):(this.o=!1,$a(this)))}else K0(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Qr(this),Qs(this)}}}catch{}finally{}};function Jp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function N0(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?wc:(d=Number(c.substring(d,m)),isNaN(d)?Xp:(m+=1,m+d>c.length?wc:(c=c.slice(m,m+d),a.C=m+d,c)))}sr.prototype.cancel=function(){this.J=!0,Qr(this)};function $a(a){a.S=Date.now()+a.I,Zp(a,a.I)}function Zp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ks(g(a.ba,a),c)}function Ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}sr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(P0(this.i,this.A),this.L!=2&&(Ws(),Tt(17)),Qr(this),this.s=2,Qs(this)):Zp(this,this.S-a)};function Qs(a){a.j.G==0||a.J||Am(a.j,a)}function Qr(a){Ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vi(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Sc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ac(d.h,a))){if(!a.K&&Ac(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var D=m;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ja(d),Xa(d);else break e;Cc(d),Tt(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ks(g(d.Za,d),6e3));if(1>=nm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yr(d,11)}else if((a.K||d.g==a)&&Ja(d),!y(c))for(D=d.Da.g.parse(c),c=0;c<D.length;c++){let fe=D[c];if(d.T=fe[0],fe=fe[1],d.G==2)if(fe[0]=="c"){d.K=fe[1],d.ia=fe[2];const ht=fe[3];ht!=null&&(d.la=ht,d.j.info("VER="+d.la));const dt=fe[4];dt!=null&&(d.Aa=dt,d.j.info("SVER="+d.Aa));const Ui=fe[5];Ui!=null&&typeof Ui=="number"&&0<Ui&&(m=1.5*Ui,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const sn=a.g;if(sn){const el=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(el){var b=m.h;b.g||el.indexOf("spdy")==-1&&el.indexOf("quic")==-1&&el.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Rc(b,b.h),b.h=null))}if(m.D){const Dc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(m.ya=Dc,Te(m.I,m.D,Dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var H=a;if(m.qa=Pm(m,m.J?m.ia:null,m.W),H.K){rm(m.h,H);var ve=H,nt=m.L;nt&&(ve.I=nt),ve.B&&(Ic(ve),$a(ve)),m.g=H}else Im(m);0<d.i.length&&Ya(d)}else fe[0]!="stop"&&fe[0]!="close"||Yr(d,7);else d.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Yr(d,7):Pc(d):fe[0]!="noop"&&d.l&&d.l.ta(fe),d.v=0)}}Ws(4)}catch{}}var D0=class{constructor(a,c){this.g=a,this.map=c}};function em(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function Ac(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Rc(a,c){a.g?a.g.add(c):a.h=c}function rm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}em.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function x0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function O0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function sm(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=O0(a),m=x0(a),D=m.length,b=0;b<D;b++)c.call(void 0,m[b],d&&d[b],a)}var om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function V0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),D=null;if(0<=m){var b=a[d].substring(0,m);D=a[d].substring(m+1)}else b=a[d];c(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xr){this.h=a.h,qa(this,a.j),this.o=a.o,this.g=a.g,Ha(this,a.s),this.l=a.l;var c=a.i,d=new Js;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),am(this,d),this.m=a.m}else a&&(c=String(a).match(om))?(this.h=!1,qa(this,c[1]||"",!0),this.o=Xs(c[2]||""),this.g=Xs(c[3]||"",!0),Ha(this,c[4]),this.l=Xs(c[5]||"",!0),am(this,c[6]||"",!0),this.m=Xs(c[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}Xr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ys(c,lm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ys(c,lm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ys(d,d.charAt(0)=="/"?M0:L0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ys(d,U0)),a.join("")};function bn(a){return new Xr(a)}function qa(a,c,d){a.j=d?Xs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ha(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function am(a,c,d){c instanceof Js?(a.i=c,j0(a.i,a.h)):(d||(c=Ys(c,F0)),a.i=new Js(c,a.h))}function Te(a,c,d){a.i.set(c,d)}function Wa(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,b0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function b0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,L0=/[#\?:]/g,M0=/[#\?]/g,F0=/[#\?@]/g,U0=/#/g;function Js(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function or(a){a.g||(a.g=new Map,a.h=0,a.i&&V0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Js.prototype,t.add=function(a,c){or(this),this.i=null,a=Mi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function um(a,c){or(a),c=Mi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function cm(a,c){return or(a),c=Mi(a,c),a.g.has(c)}t.forEach=function(a,c){or(this),this.g.forEach(function(d,m){d.forEach(function(D){a.call(c,D,m,this)},this)},this)},t.na=function(){or(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const D=a[m];for(let b=0;b<D.length;b++)d.push(c[m])}return d},t.V=function(a){or(this);let c=[];if(typeof a=="string")cm(this,a)&&(c=c.concat(this.g.get(Mi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return or(this),this.i=null,a=Mi(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function hm(a,c,d){um(a,c),0<d.length&&(a.i=null,a.g.set(Mi(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const b=encodeURIComponent(String(m)),H=this.V(m);for(m=0;m<H.length;m++){var D=b;H[m]!==""&&(D+="="+encodeURIComponent(String(H[m]))),a.push(D)}}return this.i=a.join("&")};function Mi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function j0(a,c){c&&!a.j&&(or(a),a.i=null,a.g.forEach(function(d,m){var D=m.toLowerCase();m!=D&&(um(this,m),hm(this,D,d))},a)),a.j=c}function B0(a,c){const d=new Gs;if(l.Image){const m=new Image;m.onload=R(ar,d,"TestLoadImage: loaded",!0,c,m),m.onerror=R(ar,d,"TestLoadImage: error",!1,c,m),m.onabort=R(ar,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=R(ar,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function z0(a,c){const d=new Gs,m=new AbortController,D=setTimeout(()=>{m.abort(),ar(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(D),b.ok?ar(d,"TestPingServer: ok",!0,c):ar(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),ar(d,"TestPingServer: error",!1,c)})}function ar(a,c,d,m,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),m(d)}catch{}}function $0(){this.g=new _c}function q0(a,c,d){const m=d||"";try{sm(a,function(D,b){let H=D;h(D)&&(H=qs(D)),c.push(m+b+"="+encodeURIComponent(H))})}catch(D){throw c.push(m+"type="+encodeURIComponent("_badmap")),D}}function Ka(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ka,bi),Ka.prototype.g=function(){return new Ga(this.l,this.j)},Ka.prototype.i=function(a){return function(){return a}}({});function Ga(a,c){G.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ga,G),t=Ga.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,eo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Zs(this):eo(this),this.readyState==3&&dm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Qa=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,eo(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function eo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fm(a){let c="";return z(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function kc(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Te(a,c,d))}function Le(a){G.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Le,G);var H0=/^https?$/i,W0=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ec.g(),this.v=this.o?zp(this.o):zp(Ec),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){pm(this,b);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var D in m)d.set(D,m[D]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(W0,c,void 0))||m||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,H]of d)this.g.setRequestHeader(b,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_m(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){pm(this,b)}};function pm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,mm(a),Qa(a)}function mm(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qa(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gm(this):this.bb())},t.bb=function(){gm(this)};function gm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)wt(a.Ea,0,a);else if(ie(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=H===0){var D=String(a.D).match(om)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),m=!H0.test(D?D.toLowerCase():"")}d=m}if(d)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var b=2<Ln(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",mm(a)}}finally{Qa(a)}}}}function Qa(a,c){if(a.g){_m(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ie(a,"ready");try{d.onreadystatechange=m}catch{}}}function _m(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ua(c)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function K0(a){const c={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=k(a[m]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[D]||[];c[D]=b,b.push(d)}w(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function vm(a){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,a),this.cb=to("retryDelaySeedMs",1e4,a),this.Wa=to("forwardChannelMaxRetries",2,a),this.wa=to("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new em(a&&a.concurrentRequestLimit),this.Da=new $0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){Tt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Pm(this,null,this.W),Ya(this)};function Pc(a){if(Em(a),a.G==3){var c=a.U++,d=bn(a.I);if(Te(d,"SID",a.K),Te(d,"RID",c),Te(d,"TYPE","terminate"),no(a,d),c=new sr(a,a.j,c),c.L=2,c.v=Wa(bn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Cm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),$a(c)}km(a)}function Xa(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function Em(a){Xa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ja(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ya(a){if(!tm(a.h)&&!a.s){a.s=!0;var c=a.Ga;ze||ne(),W||(ze(),W=!0),ee.add(c,a),a.B=0}}function G0(a,c){return nm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ks(g(a.Ga,a,c),Rm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new sr(this,this.j,a);let b=this.o;if(this.S&&(b?(b=_(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(D.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Tm(this,D,c),d=bn(this.I),Te(d,"RID",a),Te(d,"CVER",22),this.D&&Te(d,"X-HTTP-Session-Id",this.D),no(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(fm(b)))+"&"+c:this.m&&kc(d,this.m,b)),Rc(this.h,D),this.Ua&&Te(d,"TYPE","init"),this.P?(Te(d,"$req",c),Te(d,"SID","null"),D.T=!0,Tc(D,d,null)):Tc(D,d,c),this.G=2}}else this.G==3&&(a?wm(this,a):this.i.length==0||tm(this.h)||wm(this))};function wm(a,c){var d;c?d=c.l:d=a.U++;const m=bn(a.I);Te(m,"SID",a.K),Te(m,"RID",d),Te(m,"AID",a.T),no(a,m),a.m&&a.o&&kc(m,a.m,a.o),d=new sr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Tm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Rc(a.h,d),Tc(d,m,c)}function no(a,c){a.H&&z(a.H,function(d,m){Te(c,m,d)}),a.l&&sm({},function(d,m){Te(c,m,d)})}function Tm(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let b=-1;for(;;){const H=["count="+d];b==-1?0<d?(b=D[0].g,H.push("ofs="+b)):b=0:H.push("ofs="+b);let ve=!0;for(let nt=0;nt<d;nt++){let fe=D[nt].g;const ht=D[nt].map;if(fe-=b,0>fe)b=Math.max(0,D[nt].g-100),ve=!1;else try{q0(ht,H,"req"+fe+"_")}catch{m&&m(ht)}}if(ve){m=H.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Im(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ze||ne(),W||(ze(),W=!0),ee.add(c,a),a.v=0}}function Cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ks(g(a.Fa,a),Rm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ks(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Xa(this),Sm(this))};function Nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sm(a){a.g=new sr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=bn(a.qa);Te(c,"RID","rpc"),Te(c,"SID",a.K),Te(c,"AID",a.T),Te(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(c,"TO",a.ja),Te(c,"TYPE","xmlhttp"),no(a,c),a.m&&a.o&&kc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Wa(bn(c)),d.m=null,d.P=!0,Yp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Xa(this),Cc(this),Tt(19))};function Ja(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Am(a,c){var d=null;if(a.g==c){Ja(a),Nc(a),a.g=null;var m=2}else if(Ac(a.h,c))d=c.D,rm(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var D=a.B;m=ja(),ie(m,new Kp(m,d)),Ya(a)}else Im(a);else if(D=c.s,D==3||D==0&&0<c.X||!(m==1&&G0(a,c)||m==2&&Cc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),D){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Rm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Yr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const D=!m;m=new Xr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qa(m,"https"),Wa(m),D?B0(m.toString(),d):z0(m.toString(),d)}else Tt(2);a.G=0,a.l&&a.l.sa(c),km(a),Em(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function km(a){if(a.G=0,a.ka=[],a.l){const c=im(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Pm(a,c,d){var m=d instanceof Xr?bn(d):new Xr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Ha(m,m.s);else{var D=l.location;m=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;var b=new Xr(null);m&&qa(b,m),c&&(b.g=c),D&&Ha(b,D),d&&(b.l=d),m=b}return d=a.D,c=a.ya,d&&c&&Te(m,d,c),Te(m,"VER",a.la),no(a,m),m}function Cm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Le(new Ka({eb:d})):new Le(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Za(){}Za.prototype.g=function(a,c){return new Mt(a,c)};function Mt(a,c){G.call(this),this.g=new vm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!y(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Fi(this)}C(Mt,G),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Pc(this.g)},Mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=qs(a),a=d);c.i.push(new D0(c.Ya++,a)),c.G==3&&Ya(c)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,Mt.aa.N.call(this)};function Dm(a){yc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Dm,yc);function xm(){vc.call(this),this.status=1}C(xm,vc);function Fi(a){this.g=a}C(Fi,Nm),Fi.prototype.ua=function(){ie(this.g,"a")},Fi.prototype.ta=function(a){ie(this.g,new Dm(a))},Fi.prototype.sa=function(a){ie(this.g,new xm)},Fi.prototype.ra=function(){ie(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Mw=function(){return new Za},Lw=function(){return ja()},bw=Gr,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Bl=Ba,Gp.COMPLETE="complete",Vw=Gp,$p.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",G.prototype.listen=G.prototype.K,wo=$p,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,Ow=Le}).apply(typeof vl<"u"?vl:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Of("@firebase/firestore");function ho(){return vi.logLevel}function Y(t,...e){if(vi.logLevel<=ue.DEBUG){const n=e.map(Wf);vi.debug(`Firestore (${bs}): ${t}`,...n)}}function tr(t,...e){if(vi.logLevel<=ue.ERROR){const n=e.map(Wf);vi.error(`Firestore (${bs}): ${t}`,...n)}}function Ss(t,...e){if(vi.logLevel<=ue.WARN){const n=e.map(Wf);vi.warn(`Firestore (${bs}): ${t}`,...n)}}function Wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function ye(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class fC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pC{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ui,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new Fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new gt(e)}}class mC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ye(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new _C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Ye(0,0))}static max(){return new se(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ua{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const EC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends ua{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return EC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new X(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new X(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Se.fromString(e))}static fromName(e){return new Z(Se.fromString(e).popFirst(5))}static empty(){return new Z(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Se(e.slice()))}}function wC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Mr(i,Z.empty(),e)}function TC(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(se.min(),Z.empty(),-1)}static max(){return new Mr(se.max(),Z.empty(),-1)}}function IC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==SC)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Kf.oe=-1;function rc(t){return t==null}function Su(t){return t===0&&1/t==-1/0}function kC(t){return typeof t=="number"&&Number.isInteger(t)&&!Su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new fn([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bw("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=PC.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qf(t){const e=t.mapValue.fields.__previous_value__;return Gf(e)?Qf(e):e}function ca(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={mapValue:{}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gf(t)?4:DC(t)?9007199254740991:NC(t)?10:11:re()}function On(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ca(t).isEqual(ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),l=Fr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ei(i.bytesValue).isEqual(Ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?Su(o)===Su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(v_(o)!==v_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!On(o[u],l[u])))return!1;return!0}(t,e);default:return re()}}function da(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(ca(t),ca(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ei(s),u=Ei(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=pe(l[h],u[h]);if(f!==0)return f}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=pe(Fe(s.latitude),Fe(o.latitude));return l!==0?l:pe(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return T_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},R=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=pe(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:T_(R,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===wl.mapValue&&o===wl.mapValue)return 0;if(s===wl.mapValue)return 1;if(o===wl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=pe(u[p],f[p]);if(g!==0)return g;const R=Rs(l[u[p]],h[f[p]]);if(R!==0)return R}return pe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Fr(t),r=Fr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function T_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rs(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function ks(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Td(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Td(n.fields[o])}`;return i+"}"}(t.mapValue):re()}function I_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Id(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function S_(t){return!!t&&"nullValue"in t}function A_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zl(t){return!!t&&"mapValue"in t}function NC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=bo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(bo(this.value))}}function zw(t){const e=[];return Ls(t.fields,(n,r)=>{const i=new ot([n]);if(zl(r)){const s=zw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,se.min(),se.min(),se.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,se.min(),se.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,se.min(),se.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function R_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function k_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{}class We extends $w{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VC(e,n,r):n==="array-contains"?new MC(e,r):n==="in"?new FC(e,r):n==="not-in"?new UC(e,r):n==="array-contains-any"?new jC(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bC(e,r):new LC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends $w{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qw(t){return t.op==="and"}function Hw(t){return OC(t)&&qw(t)}function OC(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Sd(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(Hw(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function Ww(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Ww(o,i.filters[l]),!0):!1}(t,e):void re()}function Kw(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Kw).join(" ,")+"}"}(t):"Filter"}class VC extends We{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class bC extends We{constructor(e,n){super(e,"in",n),this.keys=Gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LC extends We{constructor(e,n){super(e,"not-in",n),this.keys=Gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class MC extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&da(n.arrayValue,this.value)}}class FC extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&da(this.value.arrayValue,n)}}class UC extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!da(this.value.arrayValue,n)}}class jC extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>da(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function P_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BC(t,e,n,r,i,s,o)}function Yf(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k_(t.startAt,e.startAt)&&k_(t.endAt,e.endAt)}function Ad(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zC(t,e,n,r,i,s,o,l){return new Ms(t,e,n,r,i,s,o,l)}function Zf(t){return new Ms(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qw(t){return t.collectionGroup!==null}function Lo(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fa(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new fa(ot.keyField(),r))}return e.ce}function Dn(t){const e=oe(t);return e.le||(e.le=$C(e,Lo(t))),e.le}function $C(t,e){if(t.limitType==="F")return P_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fa(i.field,s)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return P_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rd(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return Jf(Dn(t),Dn(e))&&t.limitType===e.limitType}function Xw(t){return`${Yf(Dn(t))}|lt:${t.limitType}`}function $i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Kw(i)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=R_(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Lo(r),i)||r.endAt&&!function(o,l,u){const h=R_(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Lo(r),i))}(t,e)}function qC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yw(t){return(e,n)=>{let r=!1;for(const i of Lo(t)){const s=HC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HC(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Rs(u,h):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new Ve(Z.comparator);function nr(){return WC}const Jw=new Ve(Z.comparator);function To(...t){let e=Jw;for(const n of t)e=e.insert(n.key,n);return e}function Zw(t){let e=Jw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ii(){return Mo()}function eT(){return Mo()}function Mo(){return new Fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const KC=new Ve(Z.comparator),GC=new lt(Z.comparator);function le(...t){let e=GC;for(const n of t)e=e.add(n);return e}const QC=new lt(pe);function XC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function tT(t){return{integerValue:""+t}}function YC(t,e){return kC(e)?tT(e):ep(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._=void 0}}function JC(t,e,n){return t instanceof pa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gf(s)&&(s=Qf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ma?rT(t,e):t instanceof ga?iT(t,e):function(i,s){const o=nT(i,s),l=N_(o)+N_(i.Pe);return Id(o)&&Id(i.Pe)?tT(l):ep(i.serializer,l)}(t,e)}function ZC(t,e,n){return t instanceof ma?rT(t,e):t instanceof ga?iT(t,e):n}function nT(t,e){return t instanceof ku?function(r){return Id(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pa extends oc{}class ma extends oc{constructor(e){super(),this.elements=e}}function rT(t,e){const n=sT(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class ga extends oc{constructor(e){super(),this.elements=e}}function iT(t,e){let n=sT(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class ku extends oc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function N_(t){return Fe(t.integerValue||t.doubleValue)}function sT(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.field=e,this.transform=n}}function t1(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ma&&i instanceof ma||r instanceof ga&&i instanceof ga?As(r.elements,i.elements,On):r instanceof ku&&i instanceof ku?On(r.Pe,i.Pe):r instanceof pa&&i instanceof pa}(t.transform,e.transform)}class n1{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function oT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lT(t.key,Kn.none()):new Na(t.key,t.data,Kn.none());{const n=t.data,r=Yt.empty();let i=new lt(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ki(t.key,r,new fn(i.toArray()),Kn.none())}}function r1(t,e,n){t instanceof Na?function(i,s,o){const l=i.value.clone(),u=x_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ki?function(i,s,o){if(!$l(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=x_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof Na?function(s,o,l,u){if(!$l(s.precondition,o))return l;const h=s.value.clone(),f=O_(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ki?function(s,o,l,u){if(!$l(s.precondition,o))return l;const h=O_(s.fieldTransforms,u,o),f=o.data;return f.setAll(aT(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return $l(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function i1(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nT(r.transform,i||null);s!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,s))}return n||null}function D_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>t1(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends ac{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ki extends ac{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x_(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ZC(o,l,n[i]))}return r}function O_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JC(s,o,e))}return r}class lT extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s1 extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r1(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=oT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>D_(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>D_(n,r))}}class tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return KC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,he;function u1(t){switch(t){default:return re();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function uT(t){if(t===void 0)return tr("GRPC error has no .code"),M.UNKNOWN;switch(t){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return re()}}(he=qe||(qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new li([4294967295,4294967295],0);function V_(t){const e=c1().encode(t),n=new xw;return n.update(e),new Uint8Array(n.digest())}function b_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new li([n,r],0),new li([i,s],0)]}class np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Io(`Invalid padding: ${n}`);if(r<0)throw new Io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Io(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=li.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(li.fromNumber(r)));return i.compare(h1)===1&&(i=new li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=V_(e),[r,i]=b_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new np(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=V_(e),[r,i]=b_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lc(se.min(),i,new Ve(pe),nr(),le())}}class Da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class cT{constructor(e,n){this.targetId=e,this.me=n}}class hT{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L_{constructor(){this.fe=0,this.ge=F_(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=F_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class d1{constructor(e){this.Le=e,this.Be=new Map,this.ke=nr(),this.qe=M_(),this.Qe=new Ve(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ad(s))if(r===0){const o=new Z(s.path);this.Ue(n,o,yt.newNoDocument(o,se.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ei(r).toUint8Array()}catch(u){if(u instanceof Bw)return Ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new np(o,i,s)}catch(u){return Ss(u instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ad(l.target)){const u=new Z(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=le();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new lc(e,n,this.Qe,this.ke,r);return this.ke=nr(),this.qe=M_(),this.Qe=new Ve(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new L_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function M_(){return new Ve(Z.comparator)}function F_(){return new Ve(Z.comparator)}const f1={asc:"ASCENDING",desc:"DESCENDING"},p1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m1={and:"AND",or:"OR"};class g1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function Pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _1(t,e){return Pu(t,e.toTimestamp())}function xn(t){return ye(!!t),se.fromTimestamp(function(n){const r=Fr(n);return new Ye(r.seconds,r.nanos)}(t))}function rp(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function fT(t){const e=Se.fromString(t);return ye(yT(e)),e}function Cd(t,e){return rp(t.databaseId,e.path)}function hh(t,e){const n=fT(e);if(n.get(1)!==t.databaseId.projectId)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(mT(n))}function pT(t,e){return rp(t.databaseId,e)}function y1(t){const e=fT(t);return e.length===4?Se.emptyPath():mT(e)}function Nd(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mT(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function U_(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function v1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string"),ct.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:uT(h.code);return new X(f,h.message||"")}(o);n=new hT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hh(t,r.document.name),s=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):se.min(),l=new Yt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ql(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hh(t,r.document),s=r.readTime?xn(r.readTime):se.min(),o=yt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hh(t,r.document),s=r.removedTargetIds||[];n=new ql([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new l1(i,s),l=r.targetId;n=new cT(l,o)}}return n}function E1(t,e){let n;if(e instanceof Na)n={update:U_(t,e.key,e.value)};else if(e instanceof lT)n={delete:Cd(t,e.key)};else if(e instanceof ki)n={update:U_(t,e.key,e.data),updateMask:C1(e.fieldMask)};else{if(!(e instanceof s1))return re();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ku)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(t,e.precondition)),n}function w1(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?xn(i.updateTime):xn(s);return o.isEqual(se.min())&&(o=xn(s)),new n1(o,i.transformResults||[])}(n,e))):[]}function T1(t,e){return{documents:[pT(t,e.path)]}}function I1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pT(t,i);const s=function(h){if(h.length!==0)return _T(yn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:qi(g.field),direction:R1(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function S1(t){let e=y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=gT(p);return g instanceof yn&&Hw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new fa(Hi(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,rc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,R=p.values||[];return new Au(R,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,R=p.values||[];return new Au(R,g)}(n.endAt)),zC(e,i,o,s,l,"F",u,h)}function A1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hi(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hi(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hi(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>gT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function R1(t){return f1[t]}function k1(t){return p1[t]}function P1(t){return m1[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return ot.fromServerFormat(t.fieldPath)}function _T(t){return t instanceof We?function(n){if(n.op==="=="){if(A_(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NAN"}};if(S_(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A_(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NAN"}};if(S_(n.value))return{unaryFilter:{field:qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(n.field),op:k1(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>_T(i));return r.length===1?r[0]:{compositeFilter:{op:P1(n.op),filters:r}}}(t):re()}function C1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.ct=e}}function D1(t){const e=S1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.un=new O1}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Mr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class O1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ps(0)}static kn(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.changes=new Fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,fn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=ii();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=To();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=Mo(),l=function(){return Mo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ki)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Fo(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):o.set(h.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new b1(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Mo();let i=new Ve((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||fn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=eT();f.forEach(g=>{if(!s.has(g)){const R=oT(n.get(g),r.get(g));R!==null&&p.set(g,R),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ii());let l=-1,u=s;return o.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:Zw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=To();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=To();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const h=function(p,g){return new Ms(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))});let l=To();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Fo(f.mutation,h,fn.empty(),Ye.now()),sc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:xn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:D1(i.bundledQuery),readTime:xn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.overlays=new Ve(Z.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ii();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ii(),s=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ii(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ii(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a1(n,r));let s=this.Ir.get(n);s===void 0&&(s=le(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Tr=new lt(Ze.Er),this.dr=new lt(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(Ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o1(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(pe);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Z.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new Z(s),0);let l=new lt(pe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.Mr=e,this.docs=function(){return new Ve(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new Z(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||IC(TC(f),r)<=0||(i.has(f.key)||sc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new z1(this)}getSize(e){return U.resolve(this.size)}}class z1 extends V1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.persistence=e,this.Nr=new Fs(n=>Yf(n),Jf),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ip,this.targetCount=0,this.kr=Ps.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Kf(0),this.Kr=!1,this.Kr=!0,this.$r=new U1,this.referenceDelegate=e(this),this.Ur=new $1(this),this.indexManager=new x1,this.remoteDocumentCache=function(i){return new B1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new N1(n),this.Gr=new M1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new j1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new H1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class H1 extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Jr=new ip,this.Yr=null}static Zr(e){return new sp(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new op(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LA()?8:RC(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new W1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ho()<=ue.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",$i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(ho()<=ue.DEBUG&&Y("QueryEngine","Query:",$i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ho()<=ue.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",$i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):U.resolve())}Yi(e,n){if(C_(n))return U.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ru(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ru(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return C_(n)||i.isEqual(se.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(ho()<=ue.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$i(n)),this.rs(e,o,n,wC(i,-1)).next(l=>l))})}ts(e,n){let r=new lt(Yw(e));return n.forEach((i,s)=>{sc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ho()<=ue.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",$i(n)),this.Ji.getDocumentsMatchingQuery(e,n,Mr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ve(pe),this._s=new Fs(s=>Yf(s),Jf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Q1(t,e,n,r){return new G1(t,e,n,r)}async function vT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function X1(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let R=U.resolve();return g.forEach(C=>{R=R.next(()=>f.getEntry(u,C)).next(N=>{const V=h.docVersions.get(C);ye(V!==null),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ET(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Y1(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let R=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(ct.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(p,R),function(N,V,T){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=nr(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(J1(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function J1(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Z1(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eN(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=oe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ca(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function j_(t,e,n){const r=oe(t);let i=se.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=oe(u),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Dn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:le())).next(l=>(tN(r,qC(e),l),{documents:l,Ts:s})))}function tN(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class B_{constructor(){this.activeTargetIds=XC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nN{constructor(){this.so=new B_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new B_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl=null;function dh(){return Tl===null?Tl=function(){return 268435456+Math.round(2147483648*Math.random())}():Tl++,"0x"+Tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class oN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=dh(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ss("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=iN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=dh();return new Promise((o,l)=>{const u=new Ow;u.setWithCredentials(!0),u.listenOnce(Vw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bl.NO_ERROR:const f=u.getResponseJson();Y(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Bl.TIMEOUT:Y(mt,`RPC '${e}' ${s} timed out`),l(new X(M.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const p=u.getStatus();if(Y(mt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g==null?void 0:g.error;if(R&&R.status&&R.message){const C=function(V){const T=V.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(R.status);l(new X(C,R.message))}else l(new X(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(M.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(mt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);Y(mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=dh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mw(),l=Lw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");Y(mt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,R=!1;const C=new sN({Io:V=>{R?Y(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||(Y(mt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Y(mt,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},To:()=>p.close()}),N=(V,T,y)=>{V.listen(T,S=>{try{y(S)}catch(O){setTimeout(()=>{throw O},0)}})};return N(p,wo.EventType.OPEN,()=>{R||(Y(mt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(p,wo.EventType.CLOSE,()=>{R||(R=!0,Y(mt,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(p,wo.EventType.ERROR,V=>{R||(R=!0,Ss(mt,`RPC '${e}' stream ${i} transport errored:`,V),C.So(new X(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,wo.EventType.MESSAGE,V=>{var T;if(!R){const y=V.data[0];ye(!!y);const S=y,O=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(O){Y(mt,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let z=function(v){const I=qe[v];if(I!==void 0)return uT(I)}(F),w=O.message;z===void 0&&(z=M.INTERNAL,w="Unknown error status: "+F+" with message "+O.message),R=!0,C.So(new X(z,w)),p.close()}else Y(mt,`RPC '${e}' stream ${i} received:`,y),C.bo(y)}}),N(l,bw.STAT_EVENT,V=>{V.stat===wd.PROXY?Y(mt,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===wd.NOPROXY&&Y(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new g1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new X(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aN extends TT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=v1(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?xn(o.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ad(u)?{documents:T1(s,u)}:{query:I1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=dT(s,o.resumeToken);const h=kd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=Pu(s,o.snapshotVersion.toTimestamp());const h=kd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=A1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.a_(n)}}class lN extends TT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=w1(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Nd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E1(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(tr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Pi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.L_.add(4),await xa(h),h.q_.set("Unknown"),h.L_.delete(4),await cc(h)}(this))})}),this.q_=new cN(r,i)}}async function cc(t){if(Pi(t))for(const e of t.B_)await e(!0)}async function xa(t){for(const e of t.B_)await e(!1)}function IT(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),cp(n)?up(n):Us(n).r_()&&lp(n,e))}function ap(t,e){const n=oe(t),r=Us(n);n.N_.delete(e),r.r_()&&ST(n,e),n.N_.size===0&&(r.r_()?r.o_():Pi(n)&&n.q_.set("Unknown"))}function lp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).A_(e)}function ST(t,e){t.Q_.xe(e),Us(t).R_(e)}function up(t){t.Q_=new d1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.q_.v_()}function cp(t){return Pi(t)&&!Us(t).n_()&&t.N_.size>0}function Pi(t){return oe(t).L_.size===0}function AT(t){t.Q_=void 0}async function dN(t){t.q_.set("Online")}async function fN(t){t.N_.forEach((e,n)=>{lp(t,e)})}async function pN(t,e){AT(t),cp(t)?(t.q_.M_(e),up(t)):t.q_.set("Unknown")}async function mN(t,e,n){if(t.q_.set("Online"),e instanceof hT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cu(t,r)}else if(e instanceof ql?t.Q_.Ke(e):e instanceof cT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await ET(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),ST(s,u);const p=new Tr(f.target,u,h,f.sequenceNumber);lp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Cu(t,r)}}async function Cu(t,e,n){if(!Ca(e))throw e;t.L_.add(1),await xa(t),t.q_.set("Offline"),n||(n=()=>ET(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await cc(t)})}function RT(t,e){return e().catch(n=>Cu(t,n,e))}async function hc(t){const e=oe(t),n=Ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;gN(e);)try{const i=await Z1(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_N(e,i)}catch(i){await Cu(e,i)}kT(e)&&PT(e)}function gN(t){return Pi(t)&&t.O_.length<10}function _N(t,e){t.O_.push(e);const n=Ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function kT(t){return Pi(t)&&!Ur(t).n_()&&t.O_.length>0}function PT(t){Ur(t).start()}async function yN(t){Ur(t).p_()}async function vN(t){const e=Ur(t);for(const n of t.O_)e.m_(n.mutations)}async function EN(t,e,n){const r=t.O_.shift(),i=tp.from(r,e,n);await RT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hc(t)}async function wN(t,e){e&&Ur(t).V_&&await async function(r,i){if(function(o){return u1(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Ur(r).s_(),await RT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hc(r)}}(t,e),kT(t)&&PT(t)}async function $_(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Pi(n);n.L_.add(3),await xa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await cc(n)}async function TN(t,e){const n=oe(t);e?(n.L_.delete(2),await cc(n)):e||(n.L_.add(2),await xa(n),n.q_.set("Unknown"))}function Us(t){return t.K_||(t.K_=function(n,r,i){const s=oe(n);return s.w_(),new aN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:dN.bind(null,t),Ro:fN.bind(null,t),mo:pN.bind(null,t),d_:mN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),cp(t)?up(t):t.q_.set("Unknown")):(await t.K_.stop(),AT(t))})),t.K_}function Ur(t){return t.U_||(t.U_=function(n,r,i){const s=oe(n);return s.w_(),new lN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yN.bind(null,t),mo:wN.bind(null,t),f_:vN.bind(null,t),g_:EN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await hc(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Ca(t))return new X(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=To(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.W_=new Ve(Z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Cs(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class SN{constructor(){this.queries=H_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=H_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new X(M.ABORTED,"Firestore shutting down"))}}function H_(){return new Fs(t=>Xw(t),ic)}async function AN(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new IN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dp(o,`Initialization of query '${$i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fp(n)}async function RN(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kN(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&fp(n)}function PN(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fp(t){t.Y_.forEach(e=>{e.next()})}var xd,W_;(W_=xd||(xd={})).ea="default",W_.Cache="cache";class CN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.key=e}}class NT{constructor(e){this.key=e}}class NN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Yw(e),this.Ra=new gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new q_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),R=sc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;g&&R?g.data.isEqual(R.data)?C!==N&&(r.track({type:3,doc:R}),V=!0):this.ga(g,R)||(r.track({type:2,doc:R}),V=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),V=!0):g&&!R&&(r.track({type:1,doc:g}),V=!0,(u||h)&&(l=!0)),V&&(R?(o=o.add(R),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(R,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return N(R)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Cs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new q_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new NT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new CT(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class DN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xN{constructor(e){this.key=e,this.va=!1}}class ON{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Fs(l=>Xw(l),ic),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(Z.comparator),this.Na=new Map,this.La=new ip,this.Ba={},this.ka=new Map,this.qa=Ps.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function VN(t,e,n=!0){const r=LT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await DT(r,e,n,!0),i}async function bN(t,e){const n=LT(t);await DT(n,e,!0,!1)}async function DT(t,e,n,r){const i=await eN(t.localStore,Dn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await LN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IT(t.remoteStore,i),l}async function LN(t,e,n,r,i){t.Ka=(p,g,R)=>async function(N,V,T,y){let S=V.view.ma(T);S.ns&&(S=await j_(N.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,S)));const O=y&&y.targetChanges.get(V.targetId),F=y&&y.targetMismatches.get(V.targetId)!=null,z=V.view.applyChanges(S,N.isPrimaryClient,O,F);return G_(N,V.targetId,z.wa),z.snapshot}(t,p,g,R);const s=await j_(t.localStore,e,!0),o=new NN(e,s.Ts),l=o.ma(s.documents),u=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);G_(t,n,h.wa);const f=new DN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function MN(t,e,n){const r=oe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ic(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ap(r.remoteStore,i.targetId),Od(r,i.targetId)}).catch(Pa)):(Od(r,i.targetId),await Dd(r.localStore,i.targetId,!0))}async function FN(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ap(n.remoteStore,r.targetId))}async function UN(t,e,n){const r=WN(t);try{const i=await function(o,l){const u=oe(o),h=Ye.now(),f=l.reduce((R,C)=>R.add(C.key),le());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=nr(),N=le();return u.cs.getEntries(R,f).next(V=>{C=V,C.forEach((T,y)=>{y.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(V=>{p=V;const T=[];for(const y of l){const S=i1(y,p.get(y.key).overlayedDocument);S!=null&&T.push(new ki(y.key,S,zw(S.value.mapValue),Kn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,T,l)}).next(V=>{g=V;const T=V.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(R,V.batchId,T)})}).then(()=>({batchId:g.batchId,changes:Zw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ve(pe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Oa(r,i.changes),await hc(r.remoteStore)}catch(i){const s=dp(i,"Failed to persist write");n.reject(s)}}async function xT(t,e){const n=oe(t);try{const r=await Y1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ye(o.va):i.removedDocuments.size>0&&(ye(o.va),o.va=!1))}),await Oa(n,r,e)}catch(r){await Pa(r)}}function K_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&fp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jN(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ve(Z.comparator);o=o.insert(s,yt.newNoDocument(s,se.min()));const l=le().add(s),u=new lc(se.min(),new Map,new Ve(pe),o,l);await xT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),pp(r)}else await Dd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(Pa)}async function BN(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await X1(n.localStore,e);VT(n,r,null),OT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oa(n,i)}catch(i){await Pa(i)}}async function zN(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ye(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);VT(r,e,n),OT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oa(r,i)}catch(i){await Pa(i)}}function OT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function VT(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||bT(t,r)})}function bT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ap(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pp(t))}function G_(t,e,n){for(const r of n)r instanceof CT?(t.La.addReference(r.key,e),$N(t,r)):r instanceof NT?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||bT(t,r.key)):re()}function $N(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),pp(t))}function pp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Z(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new xN(n)),t.Oa=t.Oa.insert(n,r),IT(t.remoteStore,new Tr(Dn(Zf(n.path)),r,"TargetPurposeLimboResolution",Kf.oe))}}async function Oa(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=op.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>U.forEach(g.Ui,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!Ca(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const R=f.os.get(g),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(g,N)}}}(r.localStore,s))}async function qN(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new X(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oa(n,r.hs)}}function HN(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let i=le();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function LT(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.Ca.d_=kN.bind(null,e.eventManager),e.Ca.$a=PN.bind(null,e.eventManager),e}function WN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zN.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Q1(this.persistence,new K1,e.initialUser,this.serializer)}Ga(e){return new q1(sp.Zr,this.serializer)}Wa(e){return new nN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qN.bind(null,this.syncEngine),await TN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SN}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),r=function(s){return new oN(s)}(e.databaseInfo);return function(s,o,l,u){return new uN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new hN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>K_(this.syncEngine,n,0),function(){return z_.D()?new z_:new rN}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new ON(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await xa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vd.provider={build:()=>new Vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ph(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QN(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$_(e.remoteStore,i)),t._onlineComponents=e}async function QN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await ph(t,new Nu)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await ph(t,new Nu);return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Q_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Q_(t,new Vd))),t._onlineComponents}function XN(t){return MT(t).then(e=>e.syncEngine)}async function X_(t){const e=await MT(t),n=e.eventManager;return n.onListen=VN.bind(null,e.syncEngine),n.onUnlisten=MN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FN.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e,n){if(!n)throw new X(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YN(t,e,n,r){if(e===!0&&r===!0)throw new X(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J_(t){if(!Z.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Z_(t){if(Z.isDocumentKey(t))throw new X(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Uo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dc(t);throw new X(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dC;switch(r.type){case"firstParty":return new gC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y_.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Y_.delete(n),r.terminate())}(this),Promise.resolve()}}function JN(t,e,n,r={}){var i;const s=(t=Uo(t,fc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=gt.MOCK_USER;else{l=HE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new X(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(h)}t._authCredentials=new fC(new Fw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Or extends Hr{constructor(e,n,r){super(e,n,Zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new Z(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function jT(t,e,...n){if(t=Ge(t),UT("collection","path",e),t instanceof fc){const r=Se.fromString(e,...n);return Z_(r),new Or(t,null,r)}{if(!(t instanceof qt||t instanceof Or))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Z_(r),new Or(t.firestore,null,r)}}function ZN(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=Uw.newId()),UT("doc","path",e),t instanceof fc){const r=Se.fromString(e,...n);return J_(r),new qt(t,null,new Z(r))}{if(!(t instanceof qt||t instanceof Or))throw new X(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return J_(r),new qt(t.firestore,t instanceof Or?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wT(this,"async_queue_retry"),this.Vu=()=>{const r=fh();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ui;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ca(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=hp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ny(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Du extends fc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ty,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ty(e),this._firestoreClient=void 0,await e}}}function eD(t,e){const n=typeof t=="object"?t:bf(),r=typeof t=="string"?t:"(default)",i=Zu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zE("firestore");s&&JN(i,...s)}return i}function BT(t){if(t._terminated)throw new X(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tD(t),t._firestoreClient}function tD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new CC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,FT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new GN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(ct.fromBase64String(e))}catch(n){throw new X(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=/^__.*__$/;class rD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ki(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}function zT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(zT(this.Cu)&&nD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class iD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}Qu(e,n,r,i=!1){return new vp({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $T(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new iD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sD(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);WT("Data must be an object, but it was:",o,r);const l=qT(r,o);let u,h;if(s.merge)u=new fn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=aD(e,p,n);if(!o.contains(g))throw new X(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uD(f,g)||f.push(g)}u=new fn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new rD(new Yt(l),u,h)}class Ep extends gp{_toFieldTransform(e){return new e1(e.path,new pa)}isEqual(e){return e instanceof Ep}}function oD(t,e,n,r=!1){return wp(n,t.Qu(r?4:3,e))}function wp(t,e){if(HT(t=Ge(t)))return WT("Unsupported field value:",e,t),qT(t,e);if(t instanceof gp)return function(r,i){if(!zT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=wp(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Pu(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pu(i.serializer,s)}}if(r instanceof _p)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:dT(i.serializer,r._byteString)};if(r instanceof qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ep(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${dc(r)}`)}(t,e)}function qT(t,e){const n={};return jw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,i)=>{const s=wp(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof _p||t instanceof Ns||t instanceof qt||t instanceof gp||t instanceof yp)}function WT(t,e,n){if(!HT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function aD(t,e,n){if((e=Ge(e))instanceof mp)return e._internalPath;if(typeof e=="string")return KT(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const lD=new RegExp("[~\\*/\\[\\]]");function KT(t,e,n){if(e.search(lD)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mp(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new X(M.INVALID_ARGUMENT,l+t+u)}function uD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cD extends GT{data(){return super.data()}}function Tp(t,e){return typeof e=="string"?KT(t,e):e instanceof mp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{}class Sp extends Ip{}function dD(t,e,...n){let r=[];e instanceof Ip&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rp).length,l=s.filter(u=>u instanceof Ap).length;if(o>1||o>0&&l>0)throw new X(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ap extends Sp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ap(e,n,r)}_apply(e){const n=this._parse(e);return QT(e._query,n),new Hr(e.firestore,e.converter,Rd(e._query,n))}_parse(e){const n=$T(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){iy(p,f);const R=[];for(const C of p)R.push(ry(u,s,C));g={arrayValue:{values:R}}}else g=ry(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||iy(p,f),g=oD(l,o,p,f==="in"||f==="not-in");return We.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rp extends Ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)QT(o,u),o=Rd(o,u)}(e._query,n),new Hr(e.firestore,e.converter,Rd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends Sp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new X(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fa(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ms(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function fD(t,e="asc"){const n=e,r=Tp("orderBy",t);return kp._create(r,n)}class Pp extends Sp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Pp(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function pD(t){return Pp._create("limit",t,"F")}function ry(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new X(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qw(e)&&n.indexOf("/")!==-1)throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Z.isDocumentKey(r))throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I_(t,new Z(r))}if(n instanceof qt)return I_(t,n._key);throw new X(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(n)}.`)}function iy(t,e){if(!Array.isArray(t)||t.length===0)throw new X(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mD{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new yp(s)}convertGeoPoint(e){return new _p(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ca(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ye(yT(r));const i=new ha(r.get(1),r.get(3)),s=new Z(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class XT extends GT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends XT{data(e={}){return super.data(e)}}class _D{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new So(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new So(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new So(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:yD(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class YT extends mD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function vD(t,e){const n=Uo(t.firestore,Du),r=ZN(t),i=gD(t.converter,e);return wD(n,[sD($T(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kn.exists(!1))]).then(()=>r)}function ED(t,...e){var n,r,i;t=Ge(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ny(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ny(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof qt)h=Uo(t.firestore,Du),f=Zf(t._key.path),u={next:p=>{e[o]&&e[o](TD(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Uo(t,Hr);h=Uo(p.firestore,Du),f=p._query;const g=new YT(h);u={next:R=>{e[o]&&e[o](new _D(h,g,p,R))},error:e[o+1],complete:e[o+2]},hD(t._query)}return function(g,R,C,N){const V=new KN(N),T=new CN(R,V,C);return g.asyncQueue.enqueueAndForget(async()=>AN(await X_(g),T)),()=>{V.Za(),g.asyncQueue.enqueueAndForget(async()=>RN(await X_(g),T))}}(BT(h),f,l,u)}function wD(t,e){return function(r,i){const s=new ui;return r.asyncQueue.enqueueAndForget(async()=>UN(await XN(r),i,s)),s.promise}(BT(t),e)}function TD(t,e,n){const r=n.docs.get(e._key),i=new YT(t);return new XT(t,i,e._key,r,new So(n.hasPendingWrites,n.fromCache),e.converter)}function ID(){return new Ep("serverTimestamp")}(function(e,n=!0){(function(i){bs=i})(Ai),gi(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Du(new pC(r.getProvider("auth-internal")),new yC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Pn(y_,"4.7.3",e),Pn(y_,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebasestorage.googleapis.com",ZT="storageBucket",SD=2*60*1e3,AD=10*60*1e3,RD=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Vn{constructor(e,n,r=0){super(mh(e),`Firebase Storage: ${n} (${mh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return mh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function mh(t){return"storage/"+t}function Cp(){const t="An unknown error occurred, please check the error payload for server response.";return new be(Re.UNKNOWN,t)}function kD(t){return new be(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PD(t){return new be(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Re.UNAUTHENTICATED,t)}function ND(){return new be(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DD(t){return new be(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function e0(){return new be(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function t0(){return new be(Re.CANCELED,"User canceled the upload/download.")}function xD(t){return new be(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function OD(t){return new be(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function VD(){return new be(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ZT+"' property when initializing the app?")}function n0(){return new be(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bD(){return new be(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function LD(){return new be(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MD(t){return new be(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bd(t){return new be(Re.INVALID_ARGUMENT,t)}function r0(){return new be(Re.APP_DELETED,"The Firebase app was deleted.")}function FD(t){return new be(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jo(t,e){return new be(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function fo(t){throw new be(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw OD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",R=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),C={bucket:1,path:3},N=n===JT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",T=new RegExp(`^https?://${N}/${i}/${V}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:R,indices:C,postModify:h},{regex:T,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<S.length;O++){const F=S[O],z=F.regex.exec(e);if(z){const w=z[F.indices.bucket];let _=z[F.indices.path];_||(_=""),r=new zt(w,_),F.postModify(r);break}}if(r==null)throw xD(e);return r}}class UD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function p(V){i=setTimeout(()=>{i=null,t(R,u())},V)}function g(){s&&clearTimeout(s)}function R(V,...T){if(h){g();return}if(V){g(),f.call(null,V,...T);return}if(u()||o){g(),f.call(null,V,...T);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let C=!1;function N(V){C||(C=!0,g(),!h&&(i!==null?(V||(l=2),clearTimeout(i),p(0)):V||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function BD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t){return t!==void 0}function $D(t){return typeof t=="function"}function qD(t){return typeof t=="object"&&!Array.isArray(t)}function pc(t){return typeof t=="string"||t instanceof String}function sy(t){return Np()&&t instanceof Blob}function Np(){return typeof Blob<"u"}function oy(t,e,n,r){if(r<e)throw bd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function i0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ci;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ci||(ci={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,i,s,o,l,u,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,C)=>{this.resolve_=R,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Il(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ci.NO_ERROR,u=s.getStatus();if(!l||s0(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===ci.ABORT;r(!1,new Il(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Il(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());zD(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Cp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?r0():t0();o(u)}else{const u=e0();o(u)}};this.canceled_?n(!1,new Il(!1,null,!0)):this.backoffId_=jD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Il{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XD(t,e,n,r,i,s,o=!0){const l=i0(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return GD(h,e),WD(h,n),KD(h,s),QD(h,r),new HD(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JD(...t){const e=YD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Np())return new Blob(t);throw new be(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){if(typeof atob>"u")throw MD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gh{constructor(e,n){this.data=e,this.contentType=n||null}}function tx(t,e){switch(t){case An.RAW:return new gh(o0(e));case An.BASE64:case An.BASE64URL:return new gh(a0(t,e));case An.DATA_URL:return new gh(rx(e),ix(e))}throw Cp()}function o0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nx(t){let e;try{e=decodeURIComponent(t)}catch{throw jo(An.DATA_URL,"Malformed data URL.")}return o0(e)}function a0(t,e){switch(t){case An.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw jo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw jo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ex(e)}catch(i){throw i.message.includes("polyfill")?i:jo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class l0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw jo(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rx(t){const e=new l0(t);return e.base64?a0(An.BASE64,e.rest):nx(e.rest)}function ix(t){return new l0(t).contentType}function sx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){let r=0,i="";sy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(sy(this.data_)){const r=this.data_,i=ZD(r,e,n);return i===null?null:new yr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yr(r,!0)}}static getBlob(...e){if(Np()){const n=e.map(r=>r instanceof yr?r.data_:r);return new yr(JD.apply(null,n))}else{const n=e.map(o=>pc(o)?tx(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new yr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){let e;try{e=JSON.parse(t)}catch{return null}return qD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ax(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function c0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){return e}class It{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||lx}}let Sl=null;function ux(t){return!pc(t)||t.length<2?t:c0(t)}function h0(){if(Sl)return Sl;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(s,o){return ux(o)}const n=new It("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new It("size");return i.xform=r,t.push(i),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),Sl=t,Sl}function cx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new zt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function hx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cx(r,t),r}function d0(t,e,n){const r=u0(e);return r===null?null:hx(t,r,n)}function dx(t,e,n,r){const i=u0(e);if(i===null||!pc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),R=Va(g,n,r),C=i0({alt:"media",token:h});return R+C})[0]}function f0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class js{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!t)throw Cp()}function Dp(t,e){function n(r,i){const s=d0(t,i,e);return Gn(s!==null),s}return n}function fx(t,e){function n(r,i){const s=d0(t,i,e);return Gn(s!==null),dx(s,i,t.host,t._protocol)}return n}function ba(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ND():i=CD():n.getStatus()===402?i=PD(t.bucket):n.getStatus()===403?i=DD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function p0(t){const e=ba(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kD(t.path)),s.serverResponse=i.serverResponse,s}return n}function px(t,e,n){const r=e.fullServerUrl(),i=Va(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new js(i,s,Dp(t,n),o);return l.errorHandler=p0(e),l}function mx(t,e,n){const r=e.fullServerUrl(),i=Va(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new js(i,s,fx(t,n),o);return l.errorHandler=p0(e),l}function gx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function m0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gx(null,e)),r}function _x(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=m0(e,r,i),f=f0(h,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",R=yr.getBlob(p,r,g);if(R===null)throw n0();const C={name:h.fullPath},N=Va(s,t.host,t._protocol),V="POST",T=t.maxUploadRetryTime,y=new js(N,V,Dp(t,n),T);return y.urlParams=C,y.headers=o,y.body=R.uploadData(),y.errorHandler=ba(e),y}class Ou{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function xp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gn(!1)}return Gn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function yx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=m0(e,r,i),l={name:o.fullPath},u=Va(s,t.host,t._protocol),h="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=f0(o,n),g=t.maxUploadRetryTime;function R(N){xp(N);let V;try{V=N.getResponseHeader("X-Goog-Upload-URL")}catch{Gn(!1)}return Gn(pc(V)),V}const C=new js(u,h,R,g);return C.urlParams=l,C.headers=f,C.body=p,C.errorHandler=ba(e),C}function vx(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(h){const f=xp(h,["active","final"]);let p=null;try{p=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gn(!1)}p||Gn(!1);const g=Number(p);return Gn(!isNaN(g)),new Ou(g,r.size(),f==="final")}const o="POST",l=t.maxUploadRetryTime,u=new js(n,o,s,l);return u.headers=i,u.errorHandler=ba(e),u}const ay=256*1024;function Ex(t,e,n,r,i,s,o,l){const u=new Ou(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw bD();const h=u.total-u.current;let f=h;i>0&&(f=Math.min(f,i));const p=u.current,g=p+f;let R="";f===0?R="finalize":h===f?R="upload, finalize":R="upload";const C={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${u.current}`},N=r.slice(p,g);if(N===null)throw n0();function V(O,F){const z=xp(O,["active","final"]),w=u.current+f,_=r.size();let v;return z==="final"?v=Dp(e,s)(O,F):v=null,new Ou(w,_,z==="final",v)}const T="POST",y=e.maxUploadRetryTime,S=new js(n,T,V,y);return S.headers=C,S.body=N.uploadData(),S.progressCallback=l||null,S.errorHandler=ba(t),S}const Ct={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _h(t){switch(t){case"running":case"pausing":case"canceling":return Ct.RUNNING;case"paused":return Ct.PAUSED;case"success":return Ct.SUCCESS;case"canceled":return Ct.CANCELED;case"error":return Ct.ERROR;default:return Ct.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,r){if($D(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Tx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ci.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ci.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ci.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw fo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ix extends Tx{initXhr(){this.xhr_.responseType="text"}}function Wi(){return new Ix}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=h0(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(s0(i.status,[]))if(s)i=e0();else{this.sleepTime=Math.max(this.sleepTime*2,RD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=yx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=vx(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Wi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ay*this._chunkMultiplier,n=new Ou(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Ex(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Wi,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ay*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=px(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Wi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=_x(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=t0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_h(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new wx(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_h(this._state)){case Ct.SUCCESS:Bi(this._resolve.bind(null,this.snapshot))();break;case Ct.CANCELED:case Ct.ERROR:const n=this._reject;Bi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_h(this._state)){case Ct.RUNNING:case Ct.PAUSED:e.next&&Bi(e.next.bind(e,this.snapshot))();break;case Ct.SUCCESS:e.complete&&Bi(e.complete.bind(e))();break;case Ct.CANCELED:case Ct.ERROR:e.error&&Bi(e.error.bind(e,this._error))();break;default:e.error&&Bi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ti(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return c0(this._location.path)}get storage(){return this._service}get parent(){const e=ox(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new Ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FD(e)}}function Ax(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Sx(t,new yr(e),n)}function Rx(t){t._throwIfRoot("getDownloadURL");const e=mx(t.storage,t._location,h0());return t.storage.makeRequestWithTokens(e,Wi).then(n=>{if(n===null)throw LD();return n})}function kx(t,e){const n=ax(t._location.path,e),r=new zt(t._location.bucket,n);return new Ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){return/^[A-Za-z]+:\/\//.test(t)}function Cx(t,e){return new Ti(t,e)}function g0(t,e){if(t instanceof Op){const n=t;if(n._bucket==null)throw VD();const r=new Ti(n,n._bucket);return e!=null?g0(r,e):r}else return e!==void 0?kx(t,e):t}function Nx(t,e){if(e&&Px(e)){if(t instanceof Op)return Cx(t,e);throw bd("To use ref(service, url), the first argument must be a Storage instance.")}else return g0(t,e)}function ly(t,e){const n=e==null?void 0:e[ZT];return n==null?null:zt.makeFromBucketSpec(n,t)}function Dx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:HE(i,t.app.options.projectId))}class Op{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=JT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SD,this._maxUploadRetryTime=AD,this._requests=new Set,i!=null?this._bucket=zt.makeFromBucketSpec(i,this._host):this._bucket=ly(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=ly(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){oy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){oy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UD(r0());{const o=XD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const uy="@firebase/storage",cy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="storage";function xx(t,e,n){return t=Ge(t),Ax(t,e,n)}function Ox(t){return t=Ge(t),Rx(t)}function Vx(t,e){return t=Ge(t),Nx(t,e)}function bx(t=bf(),e){t=Ge(t);const r=Zu(t,_0).getImmediate({identifier:e}),i=zE("storage");return i&&Lx(r,...i),r}function Lx(t,e,n,r={}){Dx(t,e,n,r)}function Mx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Op(n,r,i,e,Ai)}function Fx(){gi(new Lr(_0,Mx,"PUBLIC").setMultipleInstances(!0)),Pn(uy,cy,""),Pn(uy,cy,"esm2017")}Fx();var La=t=>t.type==="checkbox",si=t=>t instanceof Date,Nt=t=>t==null;const y0=t=>typeof t=="object";var Ke=t=>!Nt(t)&&!Array.isArray(t)&&y0(t)&&!si(t),Ux=t=>Ke(t)&&t.target?La(t.target)?t.target.checked:t.target.value:t,jx=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,Bx=(t,e)=>t.has(jx(e)),zx=t=>{const e=t.constructor&&t.constructor.prototype;return Ke(e)&&e.hasOwnProperty("isPrototypeOf")},Vp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Je(t){let e;const n=Array.isArray(t),r=typeof FileList<"u"?t instanceof FileList:!1;if(t instanceof Date)e=new Date(t);else if(!(Vp&&(t instanceof Blob||r))&&(n||Ke(t)))if(e=n?[]:Object.create(Object.getPrototypeOf(t)),!n&&!zx(t))e=t;else for(const i in t)t.hasOwnProperty(i)&&(e[i]=Je(t[i]));else return t;return e}var mc=t=>/^\w*$/.test(t),Ue=t=>t===void 0,bp=t=>Array.isArray(t)?t.filter(Boolean):[],Lp=t=>bp(t.replace(/["|']|\]/g,"").split(/\.|\[/)),J=(t,e,n)=>{if(!e||!Ke(t))return n;const r=(mc(e)?[e]:Lp(e)).reduce((i,s)=>Nt(i)?i:i[s],t);return Ue(r)||r===t?Ue(t[e])?n:t[e]:r},Tn=t=>typeof t=="boolean",Pe=(t,e,n)=>{let r=-1;const i=mc(e)?[e]:Lp(e),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let u=n;if(r!==o){const h=t[l];u=Ke(h)||Array.isArray(h)?h:isNaN(+i[r+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;t[l]=u,t=t[l]}};const hy={BLUR:"blur",FOCUS_OUT:"focusout"},hn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Mn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},$x=Ft.createContext(null);$x.displayName="HookFormContext";var qx=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==hn.all&&(e._proxyFormState[o]=!r||hn.all),t[o]}});return i};const Hx=typeof window<"u"?Ft.useLayoutEffect:Ft.useEffect;var jt=t=>typeof t=="string",Wx=(t,e,n,r,i)=>jt(t)?(r&&e.watch.add(t),J(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),J(n,s))):(r&&(e.watchAll=!0),n),Ld=t=>Nt(t)||!y0(t);function vr(t,e,n=new WeakSet){if(Ld(t)||Ld(e))return t===e;if(si(t)&&si(e))return t.getTime()===e.getTime();const r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;if(n.has(t)||n.has(e))return!0;n.add(t),n.add(e);for(const s of r){const o=t[s];if(!i.includes(s))return!1;if(s!=="ref"){const l=e[s];if(si(o)&&si(l)||Ke(o)&&Ke(l)||Array.isArray(o)&&Array.isArray(l)?!vr(o,l,n):o!==l)return!1}}return!0}var Kx=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},Bo=t=>Array.isArray(t)?t:[t],dy=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}};function v0(t,e){const n={};for(const r in t)if(t.hasOwnProperty(r)){const i=t[r],s=e[r];if(i&&Ke(i)&&s){const o=v0(i,s);Ke(o)&&(n[r]=o)}else t[r]&&(n[r]=s)}return n}var Pt=t=>Ke(t)&&!Object.keys(t).length,Mp=t=>t.type==="file",dn=t=>typeof t=="function",Vu=t=>{if(!Vp)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},E0=t=>t.type==="select-multiple",Fp=t=>t.type==="radio",Gx=t=>Fp(t)||La(t),yh=t=>Vu(t)&&t.isConnected;function Qx(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ue(t)?r++:t[e[r++]];return t}function Xx(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ue(t[e]))return!1;return!0}function $e(t,e){const n=Array.isArray(e)?e:mc(e)?[e]:Lp(e),r=n.length===1?t:Qx(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Ke(r)&&Pt(r)||Array.isArray(r)&&Xx(r))&&$e(t,n.slice(0,-1)),t}var Yx=t=>{for(const e in t)if(dn(t[e]))return!0;return!1};function w0(t){return Array.isArray(t)||Ke(t)&&!Yx(t)}function Md(t,e={}){for(const n in t)w0(t[n])?(e[n]=Array.isArray(t[n])?[]:{},Md(t[n],e[n])):Ue(t[n])||(e[n]=!0);return e}function Ki(t,e,n){n||(n=Md(e));for(const r in t)w0(t[r])?Ue(e)||Ld(n[r])?n[r]=Md(t[r],Array.isArray(t[r])?[]:{}):Ki(t[r],Nt(e)?{}:e[r],n[r]):n[r]=!vr(t[r],e[r]);return n}const fy={value:!1,isValid:!1},py={value:!0,isValid:!0};var T0=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ue(t[0].attributes.value)?Ue(t[0].value)||t[0].value===""?py:{value:t[0].value,isValid:!0}:py:fy}return fy},I0=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ue(t)?t:e?t===""?NaN:t&&+t:n&&jt(t)?new Date(t):r?r(t):t;const my={isValid:!1,value:null};var S0=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,my):my;function gy(t){const e=t.ref;return Mp(e)?e.files:Fp(e)?S0(t.refs).value:E0(e)?[...e.selectedOptions].map(({value:n})=>n):La(e)?T0(t.refs).value:I0(Ue(e.value)?t.ref.value:e.value,t)}var Jx=(t,e,n,r)=>{const i={};for(const s of t){const o=J(e,s);o&&Pe(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},bu=t=>t instanceof RegExp,po=t=>Ue(t)?t:bu(t)?t.source:Ke(t)?bu(t.value)?t.value.source:t.value:t,_y=t=>({isOnSubmit:!t||t===hn.onSubmit,isOnBlur:t===hn.onBlur,isOnChange:t===hn.onChange,isOnAll:t===hn.all,isOnTouch:t===hn.onTouched});const yy="AsyncFunction";var Zx=t=>!!t&&!!t.validate&&!!(dn(t.validate)&&t.validate.constructor.name===yy||Ke(t.validate)&&Object.values(t.validate).find(e=>e.constructor.name===yy)),eO=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate),vy=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const zo=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=J(t,i);if(s){const{_f:o,...l}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)return!0;if(o.ref&&e(o.ref,o.name)&&!r)return!0;if(zo(l,e))break}else if(Ke(l)&&zo(l,e))break}}};function Ey(t,e,n){const r=J(t,n);if(r||mc(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=J(e,s),l=J(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};if(l&&l.root&&l.root.type)return{name:`${s}.root`,error:l.root};i.pop()}return{name:n}}var tO=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Pt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||hn.all))},nO=(t,e,n)=>!t||!e||t===e||Bo(t).some(r=>r&&(n?r===e:r.startsWith(e)||e.startsWith(r))),rO=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,iO=(t,e)=>!bp(J(t,e)).length&&$e(t,e),sO=(t,e,n)=>{const r=Bo(J(t,n));return Pe(r,"root",e[n]),Pe(t,n,r),t};function wy(t,e,n="validate"){if(jt(t)||Array.isArray(t)&&t.every(jt)||Tn(t)&&!t)return{type:n,message:jt(t)?t:"",ref:e}}var zi=t=>Ke(t)&&!bu(t)?t:{value:t,message:""},Ty=async(t,e,n,r,i,s)=>{const{ref:o,refs:l,required:u,maxLength:h,minLength:f,min:p,max:g,pattern:R,validate:C,name:N,valueAsNumber:V,mount:T}=t._f,y=J(n,N);if(!T||e.has(N))return{};const S=l?l[0]:o,O=P=>{i&&S.reportValidity&&(S.setCustomValidity(Tn(P)?"":P||""),S.reportValidity())},F={},z=Fp(o),w=La(o),_=z||w,v=(V||Mp(o))&&Ue(o.value)&&Ue(y)||Vu(o)&&o.value===""||y===""||Array.isArray(y)&&!y.length,I=Kx.bind(null,N,r,F),k=(P,E,ce,Ne=Mn.maxLength,Be=Mn.minLength)=>{const ze=P?E:ce;F[N]={type:P?Ne:Be,message:ze,ref:o,...I(P?Ne:Be,ze)}};if(s?!Array.isArray(y)||!y.length:u&&(!_&&(v||Nt(y))||Tn(y)&&!y||w&&!T0(l).isValid||z&&!S0(l).isValid)){const{value:P,message:E}=jt(u)?{value:!!u,message:u}:zi(u);if(P&&(F[N]={type:Mn.required,message:E,ref:S,...I(Mn.required,E)},!r))return O(E),F}if(!v&&(!Nt(p)||!Nt(g))){let P,E;const ce=zi(g),Ne=zi(p);if(!Nt(y)&&!isNaN(y)){const Be=o.valueAsNumber||y&&+y;Nt(ce.value)||(P=Be>ce.value),Nt(Ne.value)||(E=Be<Ne.value)}else{const Be=o.valueAsDate||new Date(y),ze=ne=>new Date(new Date().toDateString()+" "+ne),W=o.type=="time",ee=o.type=="week";jt(ce.value)&&y&&(P=W?ze(y)>ze(ce.value):ee?y>ce.value:Be>new Date(ce.value)),jt(Ne.value)&&y&&(E=W?ze(y)<ze(Ne.value):ee?y<Ne.value:Be<new Date(Ne.value))}if((P||E)&&(k(!!P,ce.message,Ne.message,Mn.max,Mn.min),!r))return O(F[N].message),F}if((h||f)&&!v&&(jt(y)||s&&Array.isArray(y))){const P=zi(h),E=zi(f),ce=!Nt(P.value)&&y.length>+P.value,Ne=!Nt(E.value)&&y.length<+E.value;if((ce||Ne)&&(k(ce,P.message,E.message),!r))return O(F[N].message),F}if(R&&!v&&jt(y)){const{value:P,message:E}=zi(R);if(bu(P)&&!y.match(P)&&(F[N]={type:Mn.pattern,message:E,ref:o,...I(Mn.pattern,E)},!r))return O(E),F}if(C){if(dn(C)){const P=await C(y,n),E=wy(P,S);if(E&&(F[N]={...E,...I(Mn.validate,E.message)},!r))return O(E.message),F}else if(Ke(C)){let P={};for(const E in C){if(!Pt(P)&&!r)break;const ce=wy(await C[E](y,n),S,E);ce&&(P={...ce,...I(E,ce.message)},O(ce.message),r&&(F[N]=P))}if(!Pt(P)&&(F[N]={ref:S,...P},!r))return F}}return O(!0),F};const oO={mode:hn.onSubmit,reValidateMode:hn.onChange,shouldFocusError:!0};function aO(t={}){let e={...oO,...t},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:dn(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Ke(e.defaultValues)||Ke(e.values)?Je(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:Je(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},u,h=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let p={...f};const g={array:dy(),state:dy()},R=e.criteriaMode===hn.all,C=A=>x=>{clearTimeout(h),h=setTimeout(A,x)},N=async A=>{if(!e.disabled&&(f.isValid||p.isValid||A)){const x=e.resolver?Pt((await w()).errors):await v(r,!0);x!==n.isValid&&g.state.next({isValid:x})}},V=(A,x)=>{!e.disabled&&(f.isValidating||f.validatingFields||p.isValidating||p.validatingFields)&&((A||Array.from(l.mount)).forEach(L=>{L&&(x?Pe(n.validatingFields,L,x):$e(n.validatingFields,L))}),g.state.next({validatingFields:n.validatingFields,isValidating:!Pt(n.validatingFields)}))},T=(A,x=[],L,K,q=!0,$=!0)=>{if(K&&L&&!e.disabled){if(o.action=!0,$&&Array.isArray(J(r,A))){const G=L(J(r,A),K.argA,K.argB);q&&Pe(r,A,G)}if($&&Array.isArray(J(n.errors,A))){const G=L(J(n.errors,A),K.argA,K.argB);q&&Pe(n.errors,A,G),iO(n.errors,A)}if((f.touchedFields||p.touchedFields)&&$&&Array.isArray(J(n.touchedFields,A))){const G=L(J(n.touchedFields,A),K.argA,K.argB);q&&Pe(n.touchedFields,A,G)}(f.dirtyFields||p.dirtyFields)&&(n.dirtyFields=Ki(i,s)),g.state.next({name:A,isDirty:k(A,x),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Pe(s,A,x)},y=(A,x)=>{Pe(n.errors,A,x),g.state.next({errors:n.errors})},S=A=>{n.errors=A,g.state.next({errors:n.errors,isValid:!1})},O=(A,x,L,K)=>{const q=J(r,A);if(q){const $=J(s,A,Ue(L)?J(i,A):L);Ue($)||K&&K.defaultChecked||x?Pe(s,A,x?$:gy(q._f)):ce(A,$),o.mount&&N()}},F=(A,x,L,K,q)=>{let $=!1,G=!1;const ie={name:A};if(!e.disabled){if(!L||K){(f.isDirty||p.isDirty)&&(G=n.isDirty,n.isDirty=ie.isDirty=k(),$=G!==ie.isDirty);const me=vr(J(i,A),x);G=!!J(n.dirtyFields,A),me?$e(n.dirtyFields,A):Pe(n.dirtyFields,A,!0),ie.dirtyFields=n.dirtyFields,$=$||(f.dirtyFields||p.dirtyFields)&&G!==!me}if(L){const me=J(n.touchedFields,A);me||(Pe(n.touchedFields,A,L),ie.touchedFields=n.touchedFields,$=$||(f.touchedFields||p.touchedFields)&&me!==L)}$&&q&&g.state.next(ie)}return $?ie:{}},z=(A,x,L,K)=>{const q=J(n.errors,A),$=(f.isValid||p.isValid)&&Tn(x)&&n.isValid!==x;if(e.delayError&&L?(u=C(()=>y(A,L)),u(e.delayError)):(clearTimeout(h),u=null,L?Pe(n.errors,A,L):$e(n.errors,A)),(L?!vr(q,L):q)||!Pt(K)||$){const G={...K,...$&&Tn(x)?{isValid:x}:{},errors:n.errors,name:A};n={...n,...G},g.state.next(G)}},w=async A=>{V(A,!0);const x=await e.resolver(s,e.context,Jx(A||l.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return V(A),x},_=async A=>{const{errors:x}=await w(A);if(A)for(const L of A){const K=J(x,L);K?Pe(n.errors,L,K):$e(n.errors,L)}else n.errors=x;return x},v=async(A,x,L={valid:!0})=>{for(const K in A){const q=A[K];if(q){const{_f:$,...G}=q;if($){const ie=l.array.has($.name),me=q._f&&Zx(q._f);me&&f.validatingFields&&V([$.name],!0);const wt=await Ty(q,l.disabled,s,R,e.shouldUseNativeValidation&&!x,ie);if(me&&f.validatingFields&&V([$.name]),wt[$.name]&&(L.valid=!1,x))break;!x&&(J(wt,$.name)?ie?sO(n.errors,wt,$.name):Pe(n.errors,$.name,wt[$.name]):$e(n.errors,$.name))}!Pt(G)&&await v(G,x,L)}}return L.valid},I=()=>{for(const A of l.unMount){const x=J(r,A);x&&(x._f.refs?x._f.refs.every(L=>!yh(L)):!yh(x._f.ref))&&Lt(A)}l.unMount=new Set},k=(A,x)=>!e.disabled&&(A&&x&&Pe(s,A,x),!vr(ne(),i)),P=(A,x,L)=>Wx(A,l,{...o.mount?s:Ue(x)?i:jt(A)?{[A]:x}:x},L,x),E=A=>bp(J(o.mount?s:i,A,e.shouldUnregister?J(i,A,[]):[])),ce=(A,x,L={})=>{const K=J(r,A);let q=x;if(K){const $=K._f;$&&(!$.disabled&&Pe(s,A,I0(x,$)),q=Vu($.ref)&&Nt(x)?"":x,E0($.ref)?[...$.ref.options].forEach(G=>G.selected=q.includes(G.value)):$.refs?La($.ref)?$.refs.forEach(G=>{(!G.defaultChecked||!G.disabled)&&(Array.isArray(q)?G.checked=!!q.find(ie=>ie===G.value):G.checked=q===G.value||!!q)}):$.refs.forEach(G=>G.checked=G.value===q):Mp($.ref)?$.ref.value="":($.ref.value=q,$.ref.type||g.state.next({name:A,values:Je(s)})))}(L.shouldDirty||L.shouldTouch)&&F(A,q,L.shouldTouch,L.shouldDirty,!0),L.shouldValidate&&ee(A)},Ne=(A,x,L)=>{for(const K in x){if(!x.hasOwnProperty(K))return;const q=x[K],$=A+"."+K,G=J(r,$);(l.array.has(A)||Ke(q)||G&&!G._f)&&!si(q)?Ne($,q,L):ce($,q,L)}},Be=(A,x,L={})=>{const K=J(r,A),q=l.array.has(A),$=Je(x);Pe(s,A,$),q?(g.array.next({name:A,values:Je(s)}),(f.isDirty||f.dirtyFields||p.isDirty||p.dirtyFields)&&L.shouldDirty&&g.state.next({name:A,dirtyFields:Ki(i,s),isDirty:k(A,$)})):K&&!K._f&&!Nt($)?Ne(A,$,L):ce(A,$,L),vy(A,l)&&g.state.next({...n,name:A}),g.state.next({name:o.mount?A:void 0,values:Je(s)})},ze=async A=>{o.mount=!0;const x=A.target;let L=x.name,K=!0;const q=J(r,L),$=me=>{K=Number.isNaN(me)||si(me)&&isNaN(me.getTime())||vr(me,J(s,L,me))},G=_y(e.mode),ie=_y(e.reValidateMode);if(q){let me,wt;const Wr=x.type?gy(q._f):Ux(A),vn=A.type===hy.BLUR||A.type===hy.FOCUS_OUT,Kr=!eO(q._f)&&!e.resolver&&!J(n.errors,L)&&!q._f.deps||rO(vn,J(n.touchedFields,L),n.isSubmitted,ie,G),Oi=vy(L,l,vn);Pe(s,L,Wr),vn?(!x||!x.readOnly)&&(q._f.onBlur&&q._f.onBlur(A),u&&u(0)):q._f.onChange&&q._f.onChange(A);const Vi=F(L,Wr,vn),qs=!Pt(Vi)||Oi;if(!vn&&g.state.next({name:L,type:A.type,values:Je(s)}),Kr)return(f.isValid||p.isValid)&&(e.mode==="onBlur"?vn&&N():vn||N()),qs&&g.state.next({name:L,...Oi?{}:Vi});if(!vn&&Oi&&g.state.next({...n}),e.resolver){const{errors:Ua}=await w([L]);if($(Wr),K){const _c=Ey(n.errors,r,L),bi=Ey(Ua,r,_c.name||L);me=bi.error,L=bi.name,wt=Pt(Ua)}}else V([L],!0),me=(await Ty(q,l.disabled,s,R,e.shouldUseNativeValidation))[L],V([L]),$(Wr),K&&(me?wt=!1:(f.isValid||p.isValid)&&(wt=await v(r,!0)));K&&(q._f.deps&&(!Array.isArray(q._f.deps)||q._f.deps.length>0)&&ee(q._f.deps),z(L,wt,me,Vi))}},W=(A,x)=>{if(J(n.errors,x)&&A.focus)return A.focus(),1},ee=async(A,x={})=>{let L,K;const q=Bo(A);if(e.resolver){const $=await _(Ue(A)?A:q);L=Pt($),K=A?!q.some(G=>J($,G)):L}else A?(K=(await Promise.all(q.map(async $=>{const G=J(r,$);return await v(G&&G._f?{[$]:G}:G)}))).every(Boolean),!(!K&&!n.isValid)&&N()):K=L=await v(r);return g.state.next({...!jt(A)||(f.isValid||p.isValid)&&L!==n.isValid?{}:{name:A},...e.resolver||!A?{isValid:L}:{},errors:n.errors}),x.shouldFocus&&!K&&zo(r,W,A?q:l.mount),K},ne=(A,x)=>{let L={...o.mount?s:i};return x&&(L=v0(x.dirtyFields?n.dirtyFields:n.touchedFields,L)),Ue(A)?L:jt(A)?J(L,A):A.map(K=>J(L,K))},Ee=(A,x)=>({invalid:!!J((x||n).errors,A),isDirty:!!J((x||n).dirtyFields,A),error:J((x||n).errors,A),isValidating:!!J(n.validatingFields,A),isTouched:!!J((x||n).touchedFields,A)}),ge=A=>{A&&Bo(A).forEach(x=>$e(n.errors,x)),g.state.next({errors:A?n.errors:{}})},ke=(A,x,L)=>{const K=(J(r,A,{_f:{}})._f||{}).ref,q=J(n.errors,A)||{},{ref:$,message:G,type:ie,...me}=q;Pe(n.errors,A,{...me,...x,ref:K}),g.state.next({name:A,errors:n.errors,isValid:!1}),L&&L.shouldFocus&&K&&K.focus&&K.focus()},nn=(A,x)=>dn(A)?g.state.subscribe({next:L=>"values"in L&&A(P(void 0,x),L)}):P(A,x,!0),Gt=A=>g.state.subscribe({next:x=>{nO(A.name,x.name,A.exact)&&tO(x,A.formState||f,gc,A.reRenderRoot)&&A.callback({values:{...s},...n,...x,defaultValues:i})}}).unsubscribe,rn=A=>(o.mount=!0,p={...p,...A.formState},Gt({...A,formState:p})),Lt=(A,x={})=>{for(const L of A?Bo(A):l.mount)l.mount.delete(L),l.array.delete(L),x.keepValue||($e(r,L),$e(s,L)),!x.keepError&&$e(n.errors,L),!x.keepDirty&&$e(n.dirtyFields,L),!x.keepTouched&&$e(n.touchedFields,L),!x.keepIsValidating&&$e(n.validatingFields,L),!e.shouldUnregister&&!x.keepDefaultValue&&$e(i,L);g.state.next({values:Je(s)}),g.state.next({...n,...x.keepDirty?{isDirty:k()}:{}}),!x.keepIsValid&&N()},Ma=({disabled:A,name:x})=>{(Tn(A)&&o.mount||A||l.disabled.has(x))&&(A?l.disabled.add(x):l.disabled.delete(x))},Bs=(A,x={})=>{let L=J(r,A);const K=Tn(x.disabled)||Tn(e.disabled);return Pe(r,A,{...L||{},_f:{...L&&L._f?L._f:{ref:{name:A}},name:A,mount:!0,...x}}),l.mount.add(A),L?Ma({disabled:Tn(x.disabled)?x.disabled:e.disabled,name:A}):O(A,!0,x.value),{...K?{disabled:x.disabled||e.disabled}:{},...e.progressive?{required:!!x.required,min:po(x.min),max:po(x.max),minLength:po(x.minLength),maxLength:po(x.maxLength),pattern:po(x.pattern)}:{},name:A,onChange:ze,onBlur:ze,ref:q=>{if(q){Bs(A,x),L=J(r,A);const $=Ue(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,G=Gx($),ie=L._f.refs||[];if(G?ie.find(me=>me===$):$===L._f.ref)return;Pe(r,A,{_f:{...L._f,...G?{refs:[...ie.filter(yh),$,...Array.isArray(J(i,A))?[{}]:[]],ref:{type:$.type,name:A}}:{ref:$}}}),O(A,!1,void 0,$)}else L=J(r,A,{}),L._f&&(L._f.mount=!1),(e.shouldUnregister||x.shouldUnregister)&&!(Bx(l.array,A)&&o.action)&&l.unMount.add(A)}}},ir=()=>e.shouldFocusError&&zo(r,W,l.mount),Ci=A=>{Tn(A)&&(g.state.next({disabled:A}),zo(r,(x,L)=>{const K=J(r,L);K&&(x.disabled=K._f.disabled||A,Array.isArray(K._f.refs)&&K._f.refs.forEach(q=>{q.disabled=K._f.disabled||A}))},0,!1))},Ni=(A,x)=>async L=>{let K;L&&(L.preventDefault&&L.preventDefault(),L.persist&&L.persist());let q=Je(s);if(g.state.next({isSubmitting:!0}),e.resolver){const{errors:$,values:G}=await w();n.errors=$,q=Je(G)}else await v(r);if(l.disabled.size)for(const $ of l.disabled)$e(q,$);if($e(n.errors,"root"),Pt(n.errors)){g.state.next({errors:{}});try{await A(q,L)}catch($){K=$}}else x&&await x({...n.errors},L),ir(),setTimeout(ir);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Pt(n.errors)&&!K,submitCount:n.submitCount+1,errors:n.errors}),K)throw K},zs=(A,x={})=>{J(r,A)&&(Ue(x.defaultValue)?Be(A,Je(J(i,A))):(Be(A,x.defaultValue),Pe(i,A,Je(x.defaultValue))),x.keepTouched||$e(n.touchedFields,A),x.keepDirty||($e(n.dirtyFields,A),n.isDirty=x.defaultValue?k(A,Je(J(i,A))):k()),x.keepError||($e(n.errors,A),f.isValid&&N()),g.state.next({...n}))},Di=(A,x={})=>{const L=A?Je(A):i,K=Je(L),q=Pt(A),$=q?i:K;if(x.keepDefaultValues||(i=L),!x.keepValues){if(x.keepDirtyValues){const G=new Set([...l.mount,...Object.keys(Ki(i,s))]);for(const ie of Array.from(G))J(n.dirtyFields,ie)?Pe($,ie,J(s,ie)):Be(ie,J($,ie))}else{if(Vp&&Ue(A))for(const G of l.mount){const ie=J(r,G);if(ie&&ie._f){const me=Array.isArray(ie._f.refs)?ie._f.refs[0]:ie._f.ref;if(Vu(me)){const wt=me.closest("form");if(wt){wt.reset();break}}}}if(x.keepFieldsRef)for(const G of l.mount)Be(G,J($,G));else r={}}s=e.shouldUnregister?x.keepDefaultValues?Je(i):{}:Je($),g.array.next({values:{...$}}),g.state.next({values:{...$}})}l={mount:x.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!f.isValid||!!x.keepIsValid||!!x.keepDirtyValues,o.watch=!!e.shouldUnregister,g.state.next({submitCount:x.keepSubmitCount?n.submitCount:0,isDirty:q?!1:x.keepDirty?n.isDirty:!!(x.keepDefaultValues&&!vr(A,i)),isSubmitted:x.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:q?{}:x.keepDirtyValues?x.keepDefaultValues&&s?Ki(i,s):n.dirtyFields:x.keepDefaultValues&&A?Ki(i,A):x.keepDirty?n.dirtyFields:{},touchedFields:x.keepTouched?n.touchedFields:{},errors:x.keepErrors?n.errors:{},isSubmitSuccessful:x.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},xi=(A,x)=>Di(dn(A)?A(s):A,x),Fa=(A,x={})=>{const L=J(r,A),K=L&&L._f;if(K){const q=K.refs?K.refs[0]:K.ref;q.focus&&(q.focus(),x.shouldSelect&&dn(q.select)&&q.select())}},gc=A=>{n={...n,...A}},$s={control:{register:Bs,unregister:Lt,getFieldState:Ee,handleSubmit:Ni,setError:ke,_subscribe:Gt,_runSchema:w,_focusError:ir,_getWatch:P,_getDirty:k,_setValid:N,_setFieldArray:T,_setDisabledField:Ma,_setErrors:S,_getFieldArray:E,_reset:Di,_resetDefaultValues:()=>dn(e.defaultValues)&&e.defaultValues().then(A=>{xi(A,e.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:I,_disableForm:Ci,_subjects:g,_proxyFormState:f,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(A){o=A},get _defaultValues(){return i},get _names(){return l},set _names(A){l=A},get _formState(){return n},get _options(){return e},set _options(A){e={...e,...A}}},subscribe:rn,trigger:ee,register:Bs,handleSubmit:Ni,watch:nn,setValue:Be,getValues:ne,reset:xi,resetField:zs,clearErrors:ge,unregister:Lt,setError:ke,setFocus:Fa,getFieldState:Ee};return{...$s,formControl:$s}}function Up(t={}){const e=Ft.useRef(void 0),n=Ft.useRef(void 0),[r,i]=Ft.useState({isDirty:!1,isValidating:!1,isLoading:dn(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,isReady:!1,defaultValues:dn(t.defaultValues)?void 0:t.defaultValues});if(!e.current)if(t.formControl)e.current={...t.formControl,formState:r},t.defaultValues&&!dn(t.defaultValues)&&t.formControl.reset(t.defaultValues,t.resetOptions);else{const{formControl:o,...l}=aO(t);e.current={...l,formState:r}}const s=e.current.control;return s._options=t,Hx(()=>{const o=s._subscribe({formState:s._proxyFormState,callback:()=>i({...s._formState}),reRenderRoot:!0});return i(l=>({...l,isReady:!0})),s._formState.isReady=!0,o},[s]),Ft.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),Ft.useEffect(()=>{t.mode&&(s._options.mode=t.mode),t.reValidateMode&&(s._options.reValidateMode=t.reValidateMode)},[s,t.mode,t.reValidateMode]),Ft.useEffect(()=>{t.errors&&(s._setErrors(t.errors),s._focusError())},[s,t.errors]),Ft.useEffect(()=>{t.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,t.shouldUnregister]),Ft.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Ft.useEffect(()=>{t.values&&!vr(t.values,n.current)?(s._reset(t.values,{keepFieldsRef:!0,...s._options.resetOptions}),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[s,t.values]),Ft.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=qx(r,s),e.current}const lO={apiKey:"AIzaSyDg-J6enkiX96a9QBNLmmVwxleCGC5PU7c",authDomain:"krtc-mundali-e-library.firebaseapp.com",projectId:"krtc-mundali-e-library",storageBucket:"krtc-mundali-e-library.firebasestorage.app",messagingSenderId:"374231682571",appId:"1:374231682571:web:3ae899f426eff2c38ec10e",measurementId:"G-GB14RRPX31"},jp=GE(lO),Iy=Hf(jp),Sy=eD(jp),uO=bx(jp),an={navy:"#0B2545",gold:"#C69C4E",red:"#A62B2B",cream:"#F6EFE6"};function cO(){const[t,e]=it.useState(null),[n,r]=it.useState(!0),[i,s]=it.useState("en"),[o,l]=it.useState("library"),[u,h]=it.useState([]),[f,p]=it.useState(""),[g,R]=it.useState("All"),[C,N]=it.useState(!1);it.useEffect(()=>{const T=Zk(Iy,async y=>{if(e(y),y){const S=await iw(y,!0).catch(()=>null);N(!!(S&&S.claims&&S.claims.admin))}else N(!1);r(!1)});return()=>T()},[]),it.useEffect(()=>{const T=dD(jT(Sy,"books"),fD("createdAt","desc"),pD(200)),y=ED(T,S=>{h(S.docs.map(O=>({id:O.id,...O.data()})))},S=>{console.error("books listener error",S)});return()=>y()},[]);const V=(T,y)=>i==="en"?T:y;return n?B.jsxs("div",{style:{padding:20},children:[" ",V("Loading...","लोड हो रहा है...")]}):t?B.jsxs("div",{style:{background:an.cream,minHeight:"100vh",color:an.navy,padding:12,fontFamily:"Inter, sans-serif"},children:[B.jsxs("header",{style:{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",padding:12},children:[B.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[B.jsx("img",{src:"/logo.png",alt:"logo",style:{width:64,height:64,objectFit:"contain"}}),B.jsxs("div",{children:[B.jsx("div",{style:{fontSize:20,fontWeight:700},children:"KRTC MUNDALI"}),B.jsx("div",{style:{fontSize:12,color:an.red},children:V("Constable Trainee & Staff Library","कांस्टेबल प्रशिक्षणार्थी और स्टाफ पुस्तकालय")})]})]}),B.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[B.jsx(A0,{lang:i,setLang:s,COLORS:an}),B.jsx("button",{onClick:()=>eP(Iy),style:{background:an.red,color:"#fff",padding:"8px 12px",borderRadius:8,border:"none"},children:V("Sign out","साइन आउट")})]})]}),B.jsxs("main",{style:{maxWidth:900,margin:"12px auto",background:"#fff",borderRadius:16,padding:12,boxShadow:"0 6px 18px rgba(0,0,0,0.08)"},children:[B.jsxs("nav",{style:{display:"flex",gap:8,marginBottom:12},children:[B.jsx(vh,{active:o==="library",onClick:()=>l("library"),label:V("Library","पुस्तकालय"),COLORS:an}),B.jsx(vh,{active:o==="upload",onClick:()=>l("upload"),label:V("Upload","अपलोड"),COLORS:an}),B.jsx(vh,{active:o==="profile",onClick:()=>l("profile"),label:V("Profile","प्रोफ़ाइल"),COLORS:an})]}),o==="library"&&B.jsx(pO,{books:u,T:V,queryText:f,setQueryText:p,filterSection:g,setFilterSection:R,COLORS:an}),o==="upload"&&B.jsx(gO,{user:t,db:Sy,storage:uO,T:V,COLORS:an,isAdmin:C}),o==="profile"&&B.jsx(_O,{user:t,T:V,COLORS:an,isAdmin:C})]}),B.jsxs("footer",{style:{maxWidth:900,margin:"8px auto",textAlign:"center",color:"#666"},children:["© ",new Date().getFullYear()," KRTC MUNDALI — ",V("For trainees & staff only","केवल प्रशिक्षुओं और स्टाफ के लिए")]})]}):B.jsx(hO,{setLang:s,lang:i,T:V})}function A0({lang:t,setLang:e,COLORS:n}){return B.jsxs("div",{style:{display:"flex",gap:6},children:[B.jsx("button",{onClick:()=>e("en"),style:{padding:"6px 8px",borderRadius:8,border:`1px solid ${n.navy}`,background:t==="en"?n.navy:"#fff",color:t==="en"?"#fff":n.navy},children:"EN"}),B.jsx("button",{onClick:()=>e("hi"),style:{padding:"6px 8px",borderRadius:8,border:`1px solid ${n.navy}`,background:t==="hi"?n.navy:"#fff",color:t==="hi"?"#fff":n.navy},children:"हिन्दी"})]})}function vh({active:t,onClick:e,label:n,COLORS:r}){return B.jsx("button",{onClick:e,style:{flex:1,padding:10,borderRadius:10,border:"none",background:t?r.navy:r.gold,color:t?"#fff":r.navy,fontWeight:700},children:n})}function hO({setLang:t,lang:e,T:n}){const[r,i]=it.useState(!1);return B.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f3efe6"},children:B.jsxs("div",{style:{width:"96%",maxWidth:420,background:"#fff",padding:20,borderRadius:14,boxShadow:"0 8px 30px rgba(0,0,0,0.08)"},children:[B.jsxs("div",{style:{textAlign:"center",marginBottom:12},children:[B.jsx("img",{src:"/logo.png",alt:"logo",style:{width:80}}),B.jsx("h2",{style:{margin:6},children:"KRTC MUNDALI"}),B.jsx("p",{style:{color:"#666"},children:n("Login for trainees & staff","प्रशिक्षुओं और स्टाफ के लिए लॉगिन")})]}),r?B.jsx(fO,{onSwitch:()=>i(!1),T:n}):B.jsx(dO,{onSwitch:()=>i(!0),T:n}),B.jsx("div",{style:{marginTop:10,display:"flex",justifyContent:"center"},children:B.jsx(A0,{lang:e,setLang:t,COLORS:{navy:"#0B2545"}})})]})})}function dO({onSwitch:t,T:e}){const{register:n,handleSubmit:r}=Up(),[i,s]=it.useState(""),o=async l=>{s("");try{await Xk(Hf(),l.email,l.password)}catch(u){s(u.message),console.error(u)}};return B.jsxs("form",{onSubmit:r(o),style:{display:"flex",flexDirection:"column",gap:10},children:[B.jsx("input",{...n("email"),placeholder:e("Email","ईमेल"),style:{padding:10,borderRadius:8,border:"1px solid #ddd"}}),B.jsx("input",{...n("password"),placeholder:e("Password","पासवर्ड"),type:"password",style:{padding:10,borderRadius:8,border:"1px solid #ddd"}}),B.jsx("button",{style:{padding:10,borderRadius:8,background:"#A62B2B",color:"#fff",border:"none"},children:e("Sign in","साइन इन")}),i&&B.jsx("div",{style:{color:"red"},children:i}),B.jsx("div",{style:{textAlign:"center"},children:B.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",color:"#0B2545",textDecoration:"underline"},children:e("Register a new account","नया खाता पंजीकरण करें")})})]})}function fO({onSwitch:t,T:e}){const{register:n,handleSubmit:r}=Up(),[i,s]=it.useState(""),o=async l=>{try{await Qk(Hf(),l.email,l.password),alert(e("Account created — please login","खाता बना लिया गया — कृपया लॉगिन करें"))}catch(u){s(u.message),console.error(u)}};return B.jsxs("form",{onSubmit:r(o),style:{display:"flex",flexDirection:"column",gap:10},children:[B.jsx("input",{...n("email"),placeholder:e("Email (use school email if any)","ईमेल (यदि स्कूल ईमेल है तो उपयोग करें)"),style:{padding:10,borderRadius:8,border:"1px solid #ddd"}}),B.jsx("input",{...n("password"),placeholder:e("Password","पासवर्ड"),type:"password",style:{padding:10,borderRadius:8,border:"1px solid #ddd"}}),B.jsxs("select",{...n("role"),style:{padding:10,borderRadius:8},children:[B.jsx("option",{value:"trainee",children:e("Trainee","प्रशिक्षु")}),B.jsx("option",{value:"staff",children:e("Staff","स्टाफ")})]}),B.jsx("button",{style:{padding:10,borderRadius:8,background:"#0B2545",color:"#fff",border:"none"},children:e("Create account","खाता बनाएँ")}),i&&B.jsx("div",{style:{color:"red"},children:i}),B.jsx("div",{style:{textAlign:"center"},children:B.jsx("button",{type:"button",onClick:t,style:{background:"none",border:"none",color:"#0B2545",textDecoration:"underline"},children:e("Back to login","लॉगिन पर वापस जाएँ")})})]})}function pO({books:t,T:e,queryText:n,setQueryText:r,filterSection:i,setFilterSection:s,COLORS:o}){const l=["All","Drill & Parade","Tactics","Weapon Training","Law","Fitness","Computer & Cyber","General"],u=t.filter(h=>{if(i!=="All"&&h.section!==i)return!1;const f=(n||"").trim().toLowerCase();return f?(h.title||"").toLowerCase().includes(f)||(h.author||"").toLowerCase().includes(f):!0});return B.jsxs("div",{children:[B.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[B.jsx("input",{value:n,onChange:h=>r(h.target.value),placeholder:e("Search by title or author","शीर्षक या लेखक द्वारा खोजें"),style:{flex:1,padding:10,borderRadius:8,border:"1px solid #eee"}}),B.jsx("select",{value:i,onChange:h=>s(h.target.value),style:{padding:10,borderRadius:8},children:l.map(h=>B.jsx("option",{value:h,children:e(h,h)},h))})]}),B.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12},children:u.map(h=>B.jsx(mO,{b:h,T:e,COLORS:o},h.id))}),u.length===0&&B.jsx("div",{style:{textAlign:"center",padding:20},children:e("No books found","कोई पुस्तक नहीं मिली")})]})}function mO({b:t,T:e,COLORS:n}){return B.jsxs("div",{style:{background:"rgba(198,156,78,0.08)",padding:12,borderRadius:12,display:"flex",gap:10,alignItems:"flex-start"},children:[B.jsx("div",{style:{width:56,height:80,background:"#fff",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:n.navy},children:"PDF"}),B.jsxs("div",{style:{flex:1},children:[B.jsx("div",{style:{fontWeight:700},children:t.title}),B.jsx("div",{style:{fontSize:12,color:"#666"},children:t.author}),B.jsxs("div",{style:{marginTop:8,display:"flex",gap:8},children:[B.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",style:{padding:"6px 10px",borderRadius:8,background:n.navy,color:"#fff",textDecoration:"none"},children:e("Open","खोलें")}),B.jsx("a",{href:t.url,download:!0,style:{padding:"6px 10px",borderRadius:8,background:n.red,color:"#fff",textDecoration:"none"},children:e("Download","डाउनलोड")})]})]})]})}function gO({user:t,db:e,storage:n,T:r,COLORS:i,isAdmin:s}){const{register:o,handleSubmit:l,reset:u}=Up(),[h,f]=it.useState(null),p=async g=>{if(!g.file[0])return alert(r("Choose a file","कृपया फ़ाइल चुनें"));const R=g.file[0],C=`${Date.now()}_${R.name}`,N=Vx(n,`books/${C}`),V=xx(N,R);V.on("state_changed",T=>{f(Math.round(T.bytesTransferred/T.totalBytes*100))},T=>{alert(T.message),f(null)},async()=>{const T=await Ox(V.snapshot.ref);await vD(jT(e,"books"),{title:g.title||R.name,author:g.author||"",section:g.section||"General",url:T,uploadedBy:t.email,createdAt:ID()}),f(null),u(),alert(r("Uploaded successfully","सफलतापूर्वक अपलोड हुआ"))})};return B.jsxs("div",{children:[B.jsx("h3",{style:{marginBottom:8},children:r("Upload book / PDF","पुस्तक / PDF अपलोड करें")}),B.jsxs("form",{onSubmit:l(p),style:{display:"flex",flexDirection:"column",gap:8},children:[B.jsx("input",{...o("title"),placeholder:r("Title","शीर्षक"),style:{padding:10,borderRadius:8,border:"1px solid #eee"}}),B.jsx("input",{...o("author"),placeholder:r("Author","लेखक"),style:{padding:10,borderRadius:8,border:"1px solid #eee"}}),B.jsxs("select",{...o("section"),style:{padding:10,borderRadius:8},children:[B.jsx("option",{value:"General",children:r("General","सामान्य")}),B.jsx("option",{value:"Drill & Parade",children:r("Drill & Parade","ड्रिल एवं परेड")}),B.jsx("option",{value:"Tactics",children:r("Tactics","रणनीति")}),B.jsx("option",{value:"Weapon Training",children:r("Weapon Training","शस्त्र प्रशिक्षण")}),B.jsx("option",{value:"Fitness",children:r("Fitness","फिजिकल फिटनेस")}),B.jsx("option",{value:"Computer & Cyber",children:r("Computer & Cyber","कम्प्यूटर एवं साइबर")}),B.jsx("option",{value:"Law",children:r("Law","कानून")})]}),B.jsx("input",{type:"file",...o("file"),accept:"application/pdf"}),B.jsx("button",{style:{padding:10,borderRadius:8,background:i.navy,color:"#fff",border:"none"},children:r("Upload","अपलोड")})]}),h!==null&&B.jsxs("div",{style:{marginTop:8},children:[r("Uploading","अपलोड हो रहा है"),"... ",h,"%"]})]})}function _O({user:t,T:e,COLORS:n,isAdmin:r}){return B.jsxs("div",{children:[B.jsx("h3",{children:e("Profile","प्रोफ़ाइल")}),B.jsxs("div",{style:{background:"#f7f7f7",padding:12,borderRadius:8},children:[B.jsxs("div",{style:{fontSize:14},children:[e("Email","ईमेल"),": ",t.email]}),B.jsxs("div",{style:{fontSize:12,color:"#666"},children:[e("UID","यूआईडी"),": ",t.uid]}),B.jsx("div",{style:{marginTop:8},children:B.jsx("strong",{children:r?e("Admin","एडमिन"):e("User","उपयोगकर्ता")})})]})]})}ME(document.getElementById("root")).render(B.jsx(cO,{}));
