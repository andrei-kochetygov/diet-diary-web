const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProfileView-ZZw7iLMN.js","assets/AuthenticatedLayout.vue_vue_type_script_setup_true_lang-GBUriouV.js","assets/Input.vue_vue_type_script_setup_true_lang-BeKPNiSG.js","assets/Input-hFaK2ZpT.css","assets/AuthenticatedLayout-DQd-FZsf.css","assets/ProfileView-D1_NHzU_.css","assets/IntakesView-DWPhMzPl.js","assets/Modal.vue_vue_type_script_setup_true_lang-DfU8_Asu.js","assets/Modal-BcH7-EBS.css","assets/IntakesView-C6ceMtXc.css","assets/ProductsView-DFv13wdH.js","assets/ProductsView-DhT_eTac.css","assets/LoginView-E8nqaKs9.js","assets/LoginView-Dmh4s0tZ.css"])))=>i.map(i=>d[i]);
var Ao=t=>{throw TypeError(t)};var qs=(t,e,n)=>e.has(t)||Ao("Cannot "+n);var b=(t,e,n)=>(qs(t,e,"read from private field"),n?n.call(t):e.get(t)),te=(t,e,n)=>e.has(t)?Ao("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Q=(t,e,n,r)=>(qs(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),Ee=(t,e,n)=>(qs(t,e,"access private method"),n);var Kr=(t,e,n,r)=>({set _(s){Q(t,e,s,n)},get _(){return b(t,e,r)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Oo={};/**
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
 */const yc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Xu;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zu=function(t){const e=yc(t);return _c.encodeByteArray(e,!0)},os=function(t){return Zu(t).replace(/\./g,"")},vc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tf=()=>ef().__FIREBASE_DEFAULTS__,nf=()=>{if(typeof process>"u"||typeof Oo>"u")return;const t=Oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vc(t[1]);return e&&JSON.parse(e)},Ts=()=>{try{return tf()||nf()||rf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bc=t=>{var e,n;return(n=(e=Ts())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ov=t=>{const e=bc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ec=()=>{var t;return(t=Ts())===null||t===void 0?void 0:t.config},wc=t=>{var e;return(e=Ts())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function av(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[os(JSON.stringify(n)),os(JSON.stringify(o)),""].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function af(){var t;const e=(t=Ts())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ff(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cv(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function df(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pf="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pf,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,a,r)}}function gf(t,e){return t.replace(mf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mf=/\{\$([^}]+)}/g;function yf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function as(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ko(i)&&ko(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ko(t){return t!==null&&typeof t=="object"}/**
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
 */function Mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _f(t,e){const n=new vf(t,e);return n.subscribe.bind(n)}class vf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gs),s.error===void 0&&(s.error=Gs),s.complete===void 0&&(s.complete=Gs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gs(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const an="[DEFAULT]";/**
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
 */class Ef{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(If(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wf(t){return t===an?void 0:t}function If(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ef(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Tf={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Cf=oe.INFO,Pf={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Rf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=Cf,this._logHandler=Rf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Af=(t,e)=>e.some(n=>t instanceof n);let Do,Mo;function Of(){return Do||(Do=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kf(){return Mo||(Mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sc=new WeakMap,yi=new WeakMap,Tc=new WeakMap,zs=new WeakMap,Wi=new WeakMap;function Df(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sc.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Mf(t){if(yi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nf(t){_i=t(_i)}function xf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qs(this),e,...n);return Tc.set(r,e.sort?e.sort():[e]),Kt(r)}:kf().includes(t)?function(...e){return t.apply(Qs(this),e),Kt(Sc.get(this))}:function(...e){return Kt(t.apply(Qs(this),e))}}function Lf(t){return typeof t=="function"?xf(t):(t instanceof IDBTransaction&&Mf(t),Af(t,Of())?new Proxy(t,_i):t)}function Kt(t){if(t instanceof IDBRequest)return Df(t);if(zs.has(t))return zs.get(t);const e=Lf(t);return e!==t&&(zs.set(t,e),Wi.set(e,t)),e}const Qs=t=>Wi.get(t);function Uf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ff=["get","getKey","getAll","getAllKeys","count"],jf=["put","add","delete","clear"],Js=new Map;function No(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ff.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Js.set(e,i),i}Nf(t=>({...t,get:(e,n,r)=>No(e,n)||t.get(e,n,r),has:(e,n)=>!!No(e,n)||t.has(e,n)}));/**
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
 */class Hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($f(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $f(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",xo="0.10.17";/**
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
 */const It=new Ic("@firebase/app"),Bf="@firebase/app-compat",Vf="@firebase/analytics-compat",Wf="@firebase/analytics",Kf="@firebase/app-check-compat",qf="@firebase/app-check",Gf="@firebase/auth",zf="@firebase/auth-compat",Qf="@firebase/database",Jf="@firebase/data-connect",Yf="@firebase/database-compat",Xf="@firebase/functions",Zf="@firebase/functions-compat",eh="@firebase/installations",th="@firebase/installations-compat",nh="@firebase/messaging",rh="@firebase/messaging-compat",sh="@firebase/performance",ih="@firebase/performance-compat",oh="@firebase/remote-config",ah="@firebase/remote-config-compat",ch="@firebase/storage",lh="@firebase/storage-compat",uh="@firebase/firestore",fh="@firebase/vertexai",hh="@firebase/firestore-compat",dh="firebase",ph="11.1.0";/**
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
 */const bi="[DEFAULT]",gh={[vi]:"fire-core",[Bf]:"fire-core-compat",[Wf]:"fire-analytics",[Vf]:"fire-analytics-compat",[qf]:"fire-app-check",[Kf]:"fire-app-check-compat",[Gf]:"fire-auth",[zf]:"fire-auth-compat",[Qf]:"fire-rtdb",[Jf]:"fire-data-connect",[Yf]:"fire-rtdb-compat",[Xf]:"fire-fn",[Zf]:"fire-fn-compat",[eh]:"fire-iid",[th]:"fire-iid-compat",[nh]:"fire-fcm",[rh]:"fire-fcm-compat",[sh]:"fire-perf",[ih]:"fire-perf-compat",[oh]:"fire-rc",[ah]:"fire-rc-compat",[ch]:"fire-gcs",[lh]:"fire-gcs-compat",[uh]:"fire-fst",[hh]:"fire-fst-compat",[fh]:"fire-vertex","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const cs=new Map,mh=new Map,Ei=new Map;function Lo(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(Ei.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Ei.set(e,t);for(const n of cs.values())Lo(n,t);for(const n of mh.values())Lo(n,t);return!0}function Cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
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
 */const yh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Dr("app","Firebase",yh);/**
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
 */class _h{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=ph;function Pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(n||(n=Ec()),!n)throw qt.create("no-options");const i=cs.get(s);if(i){if(as(n,i.options)&&as(r,i.config))return i;throw qt.create("duplicate-app",{appName:s})}const o=new Sf(s);for(const c of Ei.values())o.addComponent(c);const a=new _h(n,r,o);return cs.set(s,a),a}function vh(t=bi){const e=cs.get(t);if(!e&&t===bi&&Ec())return Pc();if(!e)throw qt.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=gh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}mr(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bh="firebase-heartbeat-database",Eh=1,yr="firebase-heartbeat-store";let Ys=null;function Rc(){return Ys||(Ys=Uf(bh,Eh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yr)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Ys}async function wh(t){try{const n=(await Rc()).transaction(yr),r=await n.objectStore(yr).get(Ac(t));return await n.done,r}catch(e){if(e instanceof Xt)It.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(n.message)}}}async function Uo(t,e){try{const r=(await Rc()).transaction(yr,"readwrite");await r.objectStore(yr).put(e,Ac(t)),await r.done}catch(n){if(n instanceof Xt)It.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(r.message)}}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ih=1024,Sh=30*24*60*60*1e3;class Th{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){It.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fo(),{heartbeatsToSend:r,unsentEntries:s}=Ch(this._heartbeatsCache.heartbeats),i=os(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return It.warn(n),""}}}function Fo(){return new Date().toISOString().substring(0,10)}function Ch(t,e=Ih){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?df().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jo(t){return os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rh(t){mr(new Vn("platform-logger",e=>new Hf(e),"PRIVATE")),mr(new Vn("heartbeat",e=>new Th(e),"PRIVATE")),sr(vi,xo,t),sr(vi,xo,"esm2017"),sr("fire-js","")}Rh("");var Cs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},xr=typeof window>"u"||"Deno"in globalThis;function Qe(){}function Ah(t,e){return typeof t=="function"?t(e):t}function Oh(t){return typeof t=="number"&&t>=0&&t!==1/0}function kh(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ho(t,e){return typeof t=="function"?t(e):t}function Dh(t,e){return typeof t=="function"?t(e):t}function $o(t,e){const{type:n="all",exact:r,fetchStatus:s,predicate:i,queryKey:o,stale:a}=t;if(o){if(r){if(e.queryHash!==Ki(o,e.options))return!1}else if(!vr(e.queryKey,o))return!1}if(n!=="all"){const c=e.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||i&&!i(e))}function Bo(t,e){const{exact:n,status:r,predicate:s,mutationKey:i}=t;if(i){if(!e.options.mutationKey)return!1;if(n){if(_r(e.options.mutationKey)!==_r(i))return!1}else if(!vr(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function Ki(t,e){return((e==null?void 0:e.queryKeyHashFn)||_r)(t)}function _r(t){return JSON.stringify(t,(e,n)=>wi(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function vr(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!vr(t[n],e[n])):!1}function Oc(t,e){if(t===e)return t;const n=Vo(t)&&Vo(e);if(n||wi(t)&&wi(e)){const r=n?t:Object.keys(t),s=r.length,i=n?e:Object.keys(e),o=i.length,a=n?[]:{};let c=0;for(let l=0;l<o;l++){const u=n?l:i[l];(!n&&r.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,c++):(a[u]=Oc(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&c++)}return s===o&&c===s?t:a}return e}function lv(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Vo(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function wi(t){if(!Wo(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Wo(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Wo(t){return Object.prototype.toString.call(t)==="[object Object]"}function Mh(t){return new Promise(e=>{setTimeout(e,t)})}function Nh(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Oc(t,e):e}function xh(t,e,n=0){const r=[...t,e];return n&&r.length>n?r.slice(1):r}function Lh(t,e,n=0){const r=[e,...t];return n&&r.length>n?r.slice(0,-1):r}var qi=Symbol();function kc(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===qi?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ln,Ht,Nn,lc,Uh=(lc=class extends Cs{constructor(){super();te(this,ln);te(this,Ht);te(this,Nn);Q(this,Nn,e=>{if(!xr&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){b(this,Ht)||this.setEventListener(b(this,Nn))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,Ht))==null||e.call(this),Q(this,Ht,void 0))}setEventListener(e){var n;Q(this,Nn,e),(n=b(this,Ht))==null||n.call(this),Q(this,Ht,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){b(this,ln)!==e&&(Q(this,ln,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof b(this,ln)=="boolean"?b(this,ln):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ln=new WeakMap,Ht=new WeakMap,Nn=new WeakMap,lc),Dc=new Uh,xn,$t,Ln,uc,Fh=(uc=class extends Cs{constructor(){super();te(this,xn,!0);te(this,$t);te(this,Ln);Q(this,Ln,e=>{if(!xr&&window.addEventListener){const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){b(this,$t)||this.setEventListener(b(this,Ln))}onUnsubscribe(){var e;this.hasListeners()||((e=b(this,$t))==null||e.call(this),Q(this,$t,void 0))}setEventListener(e){var n;Q(this,Ln,e),(n=b(this,$t))==null||n.call(this),Q(this,$t,e(this.setOnline.bind(this)))}setOnline(e){b(this,xn)!==e&&(Q(this,xn,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return b(this,xn)}},xn=new WeakMap,$t=new WeakMap,Ln=new WeakMap,uc),ls=new Fh;function jh(){let t,e;const n=new Promise((s,i)=>{t=s,e=i});n.status="pending",n.catch(()=>{});function r(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{r({status:"fulfilled",value:s}),t(s)},n.reject=s=>{r({status:"rejected",reason:s}),e(s)},n}function Hh(t){return Math.min(1e3*2**t,3e4)}function Mc(t){return(t??"online")==="online"?ls.isOnline():!0}var Nc=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Xs(t){return t instanceof Nc}function xc(t){let e=!1,n=0,r=!1,s;const i=jh(),o=y=>{var D;r||(p(new Nc(y)),(D=t.abort)==null||D.call(t))},a=()=>{e=!0},c=()=>{e=!1},l=()=>Dc.isFocused()&&(t.networkMode==="always"||ls.isOnline())&&t.canRun(),u=()=>Mc(t.networkMode)&&t.canRun(),f=y=>{var D;r||(r=!0,(D=t.onSuccess)==null||D.call(t,y),s==null||s(),i.resolve(y))},p=y=>{var D;r||(r=!0,(D=t.onError)==null||D.call(t,y),s==null||s(),i.reject(y))},g=()=>new Promise(y=>{var D;s=A=>{(r||l())&&y(A)},(D=t.onPause)==null||D.call(t)}).then(()=>{var y;s=void 0,r||(y=t.onContinue)==null||y.call(t)}),E=()=>{if(r)return;let y;const D=n===0?t.initialPromise:void 0;try{y=D??t.fn()}catch(A){y=Promise.reject(A)}Promise.resolve(y).then(f).catch(A=>{var G;if(r)return;const O=t.retry??(xr?0:3),P=t.retryDelay??Hh,C=typeof P=="function"?P(n,A):P,F=O===!0||typeof O=="number"&&n<O||typeof O=="function"&&O(n,A);if(e||!F){p(A);return}n++,(G=t.onFail)==null||G.call(t,n,A),Mh(C).then(()=>l()?void 0:g()).then(()=>{e?p(A):E()})})};return{promise:i,cancel:o,continue:()=>(s==null||s(),i),cancelRetry:a,continueRetry:c,canStart:u,start:()=>(u()?E():g().then(E),i)}}function $h(){let t=[],e=0,n=a=>{a()},r=a=>{a()},s=a=>setTimeout(a,0);const i=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{r(()=>{a.forEach(c=>{n(c)})})})};return{batch:a=>{let c;e++;try{c=a()}finally{e--,e||o()}return c},batchCalls:a=>(...c)=>{i(()=>{a(...c)})},schedule:i,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{s=a}}}var Ae=$h(),un,fc,Lc=(fc=class{constructor(){te(this,un)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Oh(this.gcTime)&&Q(this,un,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(xr?1/0:5*60*1e3))}clearGcTimeout(){b(this,un)&&(clearTimeout(b(this,un)),Q(this,un,void 0))}},un=new WeakMap,fc),Un,Fn,Ve,we,Or,fn,Je,gt,hc,Bh=(hc=class extends Lc{constructor(e){super();te(this,Je);te(this,Un);te(this,Fn);te(this,Ve);te(this,we);te(this,Or);te(this,fn);Q(this,fn,!1),Q(this,Or,e.defaultOptions),this.setOptions(e.options),this.observers=[],Q(this,Ve,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Q(this,Un,Wh(this.options)),this.state=e.state??b(this,Un),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=b(this,we))==null?void 0:e.promise}setOptions(e){this.options={...b(this,Or),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&b(this,Ve).remove(this)}setData(e,n){const r=Nh(this.state.data,e,this.options);return Ee(this,Je,gt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(e,n){Ee(this,Je,gt).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var r,s;const n=(r=b(this,we))==null?void 0:r.promise;return(s=b(this,we))==null||s.cancel(e),n?n.then(Qe).catch(Qe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(b(this,Un))}isActive(){return this.observers.some(e=>Dh(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===qi||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!kh(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,we))==null||n.continue()}onOnline(){var n;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=b(this,we))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),b(this,Ve).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(b(this,we)&&(b(this,fn)?b(this,we).cancel({revert:!0}):b(this,we).cancelRetry()),this.scheduleGc()),b(this,Ve).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,Je,gt).call(this,{type:"invalidate"})}fetch(e,n){var c,l,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(b(this,we))return b(this,we).continueRetry(),b(this,we).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(p=>p.options.queryFn);f&&this.setOptions(f.options)}const r=new AbortController,s=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(Q(this,fn,!0),r.signal)})},i=()=>{const f=kc(this.options,n),p={queryKey:this.queryKey,meta:this.meta};return s(p),Q(this,fn,!1),this.options.persister?this.options.persister(f,p,this):f(p)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};s(o),(c=this.options.behavior)==null||c.onFetch(o,this),Q(this,Fn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((l=o.fetchOptions)==null?void 0:l.meta))&&Ee(this,Je,gt).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=f=>{var p,g,E,y;Xs(f)&&f.silent||Ee(this,Je,gt).call(this,{type:"error",error:f}),Xs(f)||((g=(p=b(this,Ve).config).onError)==null||g.call(p,f,this),(y=(E=b(this,Ve).config).onSettled)==null||y.call(E,this.state.data,f,this)),this.scheduleGc()};return Q(this,we,xc({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:r.abort.bind(r),onSuccess:f=>{var p,g,E,y;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(D){a(D);return}(g=(p=b(this,Ve).config).onSuccess)==null||g.call(p,f,this),(y=(E=b(this,Ve).config).onSettled)==null||y.call(E,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,p)=>{Ee(this,Je,gt).call(this,{type:"failed",failureCount:f,error:p})},onPause:()=>{Ee(this,Je,gt).call(this,{type:"pause"})},onContinue:()=>{Ee(this,Je,gt).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),b(this,we).start()}},Un=new WeakMap,Fn=new WeakMap,Ve=new WeakMap,we=new WeakMap,Or=new WeakMap,fn=new WeakMap,Je=new WeakSet,gt=function(e){const n=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Vh(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Xs(s)&&s.revert&&b(this,Fn)?{...b(this,Fn),fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=n(this.state),Ae.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),b(this,Ve).notify({query:this,type:"updated",action:e})})},hc);function Vh(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Mc(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Wh(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,r=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var st,dc,Uc=(dc=class extends Cs{constructor(n={}){super();te(this,st);this.config=n,Q(this,st,new Map)}build(n,r,s){const i=r.queryKey,o=r.queryHash??Ki(i,r);let a=this.get(o);return a||(a=new Bh({cache:this,queryKey:i,queryHash:o,options:n.defaultQueryOptions(r),state:s,defaultOptions:n.getQueryDefaults(i)}),this.add(a)),a}add(n){b(this,st).has(n.queryHash)||(b(this,st).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=b(this,st).get(n.queryHash);r&&(n.destroy(),r===n&&b(this,st).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Ae.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return b(this,st).get(n)}getAll(){return[...b(this,st).values()]}find(n){const r={exact:!0,...n};return this.getAll().find(s=>$o(r,s))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(s=>$o(n,s)):r}notify(n){Ae.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){Ae.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Ae.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},st=new WeakMap,dc),it,Ce,hn,ot,kt,pc,Kh=(pc=class extends Lc{constructor(e){super();te(this,ot);te(this,it);te(this,Ce);te(this,hn);this.mutationId=e.mutationId,Q(this,Ce,e.mutationCache),Q(this,it,[]),this.state=e.state||qh(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){b(this,it).includes(e)||(b(this,it).push(e),this.clearGcTimeout(),b(this,Ce).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Q(this,it,b(this,it).filter(n=>n!==e)),this.scheduleGc(),b(this,Ce).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){b(this,it).length||(this.state.status==="pending"?this.scheduleGc():b(this,Ce).remove(this))}continue(){var e;return((e=b(this,hn))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var s,i,o,a,c,l,u,f,p,g,E,y,D,A,O,P,C,F,G,K;Q(this,hn,xc({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(L,U)=>{Ee(this,ot,kt).call(this,{type:"failed",failureCount:L,error:U})},onPause:()=>{Ee(this,ot,kt).call(this,{type:"pause"})},onContinue:()=>{Ee(this,ot,kt).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>b(this,Ce).canRun(this)}));const n=this.state.status==="pending",r=!b(this,hn).canStart();try{if(!n){Ee(this,ot,kt).call(this,{type:"pending",variables:e,isPaused:r}),await((i=(s=b(this,Ce).config).onMutate)==null?void 0:i.call(s,e,this));const U=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));U!==this.state.context&&Ee(this,ot,kt).call(this,{type:"pending",context:U,variables:e,isPaused:r})}const L=await b(this,hn).start();return await((l=(c=b(this,Ce).config).onSuccess)==null?void 0:l.call(c,L,e,this.state.context,this)),await((f=(u=this.options).onSuccess)==null?void 0:f.call(u,L,e,this.state.context)),await((g=(p=b(this,Ce).config).onSettled)==null?void 0:g.call(p,L,null,this.state.variables,this.state.context,this)),await((y=(E=this.options).onSettled)==null?void 0:y.call(E,L,null,e,this.state.context)),Ee(this,ot,kt).call(this,{type:"success",data:L}),L}catch(L){try{throw await((A=(D=b(this,Ce).config).onError)==null?void 0:A.call(D,L,e,this.state.context,this)),await((P=(O=this.options).onError)==null?void 0:P.call(O,L,e,this.state.context)),await((F=(C=b(this,Ce).config).onSettled)==null?void 0:F.call(C,void 0,L,this.state.variables,this.state.context,this)),await((K=(G=this.options).onSettled)==null?void 0:K.call(G,void 0,L,e,this.state.context)),L}finally{Ee(this,ot,kt).call(this,{type:"error",error:L})}}finally{b(this,Ce).runNext(this)}}},it=new WeakMap,Ce=new WeakMap,hn=new WeakMap,ot=new WeakSet,kt=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ae.batch(()=>{b(this,it).forEach(r=>{r.onMutationUpdate(e)}),b(this,Ce).notify({mutation:this,type:"updated",action:e})})},pc);function qh(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var je,kr,gc,Fc=(gc=class extends Cs{constructor(n={}){super();te(this,je);te(this,kr);this.config=n,Q(this,je,new Map),Q(this,kr,Date.now())}build(n,r,s){const i=new Kh({mutationCache:this,mutationId:++Kr(this,kr)._,options:n.defaultMutationOptions(r),state:s});return this.add(i),i}add(n){const r=qr(n),s=b(this,je).get(r)??[];s.push(n),b(this,je).set(r,s),this.notify({type:"added",mutation:n})}remove(n){var s;const r=qr(n);if(b(this,je).has(r)){const i=(s=b(this,je).get(r))==null?void 0:s.filter(o=>o!==n);i&&(i.length===0?b(this,je).delete(r):b(this,je).set(r,i))}this.notify({type:"removed",mutation:n})}canRun(n){var s;const r=(s=b(this,je).get(qr(n)))==null?void 0:s.find(i=>i.state.status==="pending");return!r||r===n}runNext(n){var s;const r=(s=b(this,je).get(qr(n)))==null?void 0:s.find(i=>i!==n&&i.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}clear(){Ae.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}getAll(){return[...b(this,je).values()].flat()}find(n){const r={exact:!0,...n};return this.getAll().find(s=>Bo(r,s))}findAll(n={}){return this.getAll().filter(r=>Bo(n,r))}notify(n){Ae.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){const n=this.getAll().filter(r=>r.state.isPaused);return Ae.batch(()=>Promise.all(n.map(r=>r.continue().catch(Qe))))}},je=new WeakMap,kr=new WeakMap,gc);function qr(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Ko(t){return{onFetch:(e,n)=>{var u,f,p,g,E;const r=e.options,s=(p=(f=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:p.direction,i=((g=e.state.data)==null?void 0:g.pages)||[],o=((E=e.state.data)==null?void 0:E.pageParams)||[];let a={pages:[],pageParams:[]},c=0;const l=async()=>{let y=!1;const D=P=>{Object.defineProperty(P,"signal",{enumerable:!0,get:()=>(e.signal.aborted?y=!0:e.signal.addEventListener("abort",()=>{y=!0}),e.signal)})},A=kc(e.options,e.fetchOptions),O=async(P,C,F)=>{if(y)return Promise.reject();if(C==null&&P.pages.length)return Promise.resolve(P);const G={queryKey:e.queryKey,pageParam:C,direction:F?"backward":"forward",meta:e.options.meta};D(G);const K=await A(G),{maxPages:L}=e.options,U=F?Lh:xh;return{pages:U(P.pages,K,L),pageParams:U(P.pageParams,C,L)}};if(s&&i.length){const P=s==="backward",C=P?Gh:qo,F={pages:i,pageParams:o},G=C(r,F);a=await O(F,G,P)}else{const P=t??i.length;do{const C=c===0?o[0]??r.initialPageParam:qo(r,a);if(c>0&&C==null)break;a=await O(a,C),c++}while(c<P)}return a};e.options.persister?e.fetchFn=()=>{var y,D;return(D=(y=e.options).persister)==null?void 0:D.call(y,l,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=l}}}function qo(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function Gh(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var pe,Bt,Vt,jn,Hn,Wt,$n,Bn,mc,zh=(mc=class{constructor(e={}){te(this,pe);te(this,Bt);te(this,Vt);te(this,jn);te(this,Hn);te(this,Wt);te(this,$n);te(this,Bn);Q(this,pe,e.queryCache||new Uc),Q(this,Bt,e.mutationCache||new Fc),Q(this,Vt,e.defaultOptions||{}),Q(this,jn,new Map),Q(this,Hn,new Map),Q(this,Wt,0)}mount(){Kr(this,Wt)._++,b(this,Wt)===1&&(Q(this,$n,Dc.subscribe(async e=>{e&&(await this.resumePausedMutations(),b(this,pe).onFocus())})),Q(this,Bn,ls.subscribe(async e=>{e&&(await this.resumePausedMutations(),b(this,pe).onOnline())})))}unmount(){var e,n;Kr(this,Wt)._--,b(this,Wt)===0&&((e=b(this,$n))==null||e.call(this),Q(this,$n,void 0),(n=b(this,Bn))==null||n.call(this),Q(this,Bn,void 0))}isFetching(e){return b(this,pe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return b(this,Bt).findAll({...e,status:"pending"}).length}getQueryData(e){var r;const n=this.defaultQueryOptions({queryKey:e});return(r=b(this,pe).get(n.queryHash))==null?void 0:r.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),r=b(this,pe).build(this,n),s=r.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime(Ho(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return b(this,pe).findAll(e).map(({queryKey:n,state:r})=>{const s=r.data;return[n,s]})}setQueryData(e,n,r){const s=this.defaultQueryOptions({queryKey:e}),i=b(this,pe).get(s.queryHash),o=i==null?void 0:i.state.data,a=Ah(n,o);if(a!==void 0)return b(this,pe).build(this,s).setData(a,{...r,manual:!0})}setQueriesData(e,n,r){return Ae.batch(()=>b(this,pe).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,r)]))}getQueryState(e){var r;const n=this.defaultQueryOptions({queryKey:e});return(r=b(this,pe).get(n.queryHash))==null?void 0:r.state}removeQueries(e){const n=b(this,pe);Ae.batch(()=>{n.findAll(e).forEach(r=>{n.remove(r)})})}resetQueries(e,n){const r=b(this,pe),s={type:"active",...e};return Ae.batch(()=>(r.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries(s,n)))}cancelQueries(e,n={}){const r={revert:!0,...n},s=Ae.batch(()=>b(this,pe).findAll(e).map(i=>i.cancel(r)));return Promise.all(s).then(Qe).catch(Qe)}invalidateQueries(e,n={}){return Ae.batch(()=>{if(b(this,pe).findAll(e).forEach(s=>{s.invalidate()}),(e==null?void 0:e.refetchType)==="none")return Promise.resolve();const r={...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"};return this.refetchQueries(r,n)})}refetchQueries(e,n={}){const r={...n,cancelRefetch:n.cancelRefetch??!0},s=Ae.batch(()=>b(this,pe).findAll(e).filter(i=>!i.isDisabled()).map(i=>{let o=i.fetch(void 0,r);return r.throwOnError||(o=o.catch(Qe)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(Qe)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const r=b(this,pe).build(this,n);return r.isStaleByTime(Ho(n.staleTime,r))?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Qe).catch(Qe)}fetchInfiniteQuery(e){return e.behavior=Ko(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Qe).catch(Qe)}ensureInfiniteQueryData(e){return e.behavior=Ko(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ls.isOnline()?b(this,Bt).resumePausedMutations():Promise.resolve()}getQueryCache(){return b(this,pe)}getMutationCache(){return b(this,Bt)}getDefaultOptions(){return b(this,Vt)}setDefaultOptions(e){Q(this,Vt,e)}setQueryDefaults(e,n){b(this,jn).set(_r(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...b(this,jn).values()],r={};return n.forEach(s=>{vr(e,s.queryKey)&&Object.assign(r,s.defaultOptions)}),r}setMutationDefaults(e,n){b(this,Hn).set(_r(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...b(this,Hn).values()];let r={};return n.forEach(s=>{vr(e,s.mutationKey)&&(r={...r,...s.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;const n={...b(this,Vt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Ki(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===qi&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...b(this,Vt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){b(this,pe).clear(),b(this,Bt).clear()}},pe=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,jn=new WeakMap,Hn=new WeakMap,Wt=new WeakMap,$n=new WeakMap,Bn=new WeakMap,mc);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ae={},Pn=[],ct=()=>{},Qh=()=>!1,Ps=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zi=t=>t.startsWith("onUpdate:"),ve=Object.assign,Qi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jh=Object.prototype.hasOwnProperty,re=(t,e)=>Jh.call(t,e),W=Array.isArray,Rn=t=>Rs(t)==="[object Map]",jc=t=>Rs(t)==="[object Set]",q=t=>typeof t=="function",ge=t=>typeof t=="string",Tt=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Hc=t=>(fe(t)||q(t))&&q(t.then)&&q(t.catch),$c=Object.prototype.toString,Rs=t=>$c.call(t),Yh=t=>Rs(t).slice(8,-1),Bc=t=>Rs(t)==="[object Object]",Ji=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ir=Gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),As=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xh=/-(\w)/g,Ge=As(t=>t.replace(Xh,(e,n)=>n?n.toUpperCase():"")),Zh=/\B([A-Z])/g,yn=As(t=>t.replace(Zh,"-$1").toLowerCase()),Os=As(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zs=As(t=>t?`on${Os(t)}`:""),Gt=(t,e)=>!Object.is(t,e),ei=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ed=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Go;const ks=()=>Go||(Go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yi(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?sd(r):Yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||fe(t))return t}const td=/;(?![^(]*\))/g,nd=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function sd(t){const e={};return t.replace(rd,"").split(td).forEach(n=>{if(n){const r=n.split(nd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xi(t){let e="";if(ge(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Xi(t[n]);r&&(e+=r+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",od=Gi(id);function Wc(t){return!!t||t===""}const Kc=t=>!!(t&&t.__v_isRef===!0),ad=t=>ge(t)?t:t==null?"":W(t)||fe(t)&&(t.toString===$c||!q(t.toString))?Kc(t)?ad(t.value):JSON.stringify(t,qc,2):String(t),qc=(t,e)=>Kc(e)?qc(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ti(r,i)+" =>"]=s,n),{})}:jc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ti(n))}:Tt(e)?ti(e):fe(e)&&!W(e)&&!Bc(e)?String(e):e,ti=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Gc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zc(t){return new Gc(t)}function Qc(){return Re}function cd(t,e=!1){Re&&Re.cleanups.push(t)}let le;const ni=new WeakSet;class Jc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ni.has(this)&&(ni.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zo(this),Zc(this);const e=le,n=Ye;le=this,Ye=!0;try{return this.fn()}finally{el(this),le=e,Ye=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)to(e);this.deps=this.depsTail=void 0,zo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ni.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ii(this)&&this.run()}get dirty(){return Ii(this)}}let Yc=0,or,ar;function Xc(t,e=!1){if(t.flags|=8,e){t.next=ar,ar=t;return}t.next=or,or=t}function Zi(){Yc++}function eo(){if(--Yc>0)return;if(ar){let e=ar;for(ar=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;or;){let e=or;for(or=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Zc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function el(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),to(r),ld(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ii(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function tl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===br))return;t.globalVersion=br;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ii(t)){t.flags&=-3;return}const n=le,r=Ye;le=t,Ye=!0;try{Zc(t);const s=t.fn(t._value);(e.version===0||Gt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{le=n,Ye=r,el(t),t.flags&=-3}}function to(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)to(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ld(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ye=!0;const nl=[];function en(){nl.push(Ye),Ye=!1}function tn(){const t=nl.pop();Ye=t===void 0?!0:t}function zo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=le;le=void 0;try{e()}finally{le=n}}}let br=0;class ud{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class no{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!le||!Ye||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new ud(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,rl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=r)}return n}trigger(e){this.version++,br++,this.notify(e)}notify(e){Zi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{eo()}}}function rl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)rl(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const us=new WeakMap,dn=Symbol(""),Si=Symbol(""),Er=Symbol("");function Ie(t,e,n){if(Ye&&le){let r=us.get(t);r||us.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new no),s.map=r,s.key=n),s.track()}}function yt(t,e,n,r,s,i){const o=us.get(t);if(!o){br++;return}const a=c=>{c&&c.trigger()};if(Zi(),e==="clear")o.forEach(a);else{const c=W(t),l=c&&Ji(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Er||!Tt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Er)),e){case"add":c?l&&a(o.get("length")):(a(o.get(dn)),Rn(t)&&a(o.get(Si)));break;case"delete":c||(a(o.get(dn)),Rn(t)&&a(o.get(Si)));break;case"set":Rn(t)&&a(o.get(dn));break}}eo()}function fd(t,e){const n=us.get(t);return n&&n.get(e)}function En(t){const e=X(t);return e===t?e:(Ie(e,"iterate",Er),Ke(t)?e:e.map(Se))}function Ds(t){return Ie(t=X(t),"iterate",Er),t}const hd={__proto__:null,[Symbol.iterator](){return ri(this,Symbol.iterator,Se)},concat(...t){return En(this).concat(...t.map(e=>W(e)?En(e):e))},entries(){return ri(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return dt(this,"every",t,e,void 0,arguments)},filter(t,e){return dt(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return dt(this,"find",t,e,Se,arguments)},findIndex(t,e){return dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dt(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return si(this,"includes",t)},indexOf(...t){return si(this,"indexOf",t)},join(t){return En(this).join(t)},lastIndexOf(...t){return si(this,"lastIndexOf",t)},map(t,e){return dt(this,"map",t,e,void 0,arguments)},pop(){return Yn(this,"pop")},push(...t){return Yn(this,"push",t)},reduce(t,...e){return Qo(this,"reduce",t,e)},reduceRight(t,...e){return Qo(this,"reduceRight",t,e)},shift(){return Yn(this,"shift")},some(t,e){return dt(this,"some",t,e,void 0,arguments)},splice(...t){return Yn(this,"splice",t)},toReversed(){return En(this).toReversed()},toSorted(t){return En(this).toSorted(t)},toSpliced(...t){return En(this).toSpliced(...t)},unshift(...t){return Yn(this,"unshift",t)},values(){return ri(this,"values",Se)}};function ri(t,e,n){const r=Ds(t),s=r[e]();return r!==t&&!Ke(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const dd=Array.prototype;function dt(t,e,n,r,s,i){const o=Ds(t),a=o!==t&&!Ke(t),c=o[e];if(c!==dd[e]){const f=c.apply(t,i);return a?Se(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,Se(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Qo(t,e,n,r){const s=Ds(t);let i=n;return s!==t&&(Ke(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Se(a),c,t)}),s[e](i,...r)}function si(t,e,n){const r=X(t);Ie(r,"iterate",Er);const s=r[e](...n);return(s===-1||s===!1)&&io(n[0])?(n[0]=X(n[0]),r[e](...n)):s}function Yn(t,e,n=[]){en(),Zi();const r=X(t)[e].apply(t,n);return eo(),tn(),r}const pd=Gi("__proto__,__v_isRef,__isVue"),sl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function gd(t){Tt(t)||(t=String(t));const e=X(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class il{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Td:ll:i?cl:al).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){let c;if(o&&(c=hd[n]))return c;if(n==="hasOwnProperty")return gd}const a=Reflect.get(e,n,de(e)?e:r);return(Tt(n)?sl.has(n):pd(n))||(s||Ie(e,"get",n),i)?a:de(a)?o&&Ji(n)?a:a.value:fe(a)?s?fl(a):Lr(a):a}}class ol extends il{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gn(i);if(!Ke(r)&&!gn(r)&&(i=X(i),r=X(r)),!W(e)&&de(i)&&!de(r))return c?!1:(i.value=r,!0)}const o=W(e)&&Ji(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,r,de(e)?e:s);return e===X(s)&&(o?Gt(r,i)&&yt(e,"set",n,r):yt(e,"add",n,r)),a}deleteProperty(e,n){const r=re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!sl.has(n))&&Ie(e,"has",n),r}ownKeys(e){return Ie(e,"iterate",W(e)?"length":dn),Reflect.ownKeys(e)}}class md extends il{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yd=new ol,_d=new md,vd=new ol(!0);const Ti=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function bd(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=Rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ti:e?Ci:Se;return!e&&Ie(i,"iterate",c?Si:dn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function zr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ed(t,e){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);t||(Gt(s,a)&&Ie(o,"get",s),Ie(o,"get",a));const{has:c}=Gr(o),l=e?Ti:t?Ci:Se;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ie(X(s),"iterate",dn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=X(i),a=X(s);return t||(Gt(s,a)&&Ie(o,"has",s),Ie(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=e?Ti:t?Ci:Se;return!t&&Ie(c,"iterate",dn),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ve(n,t?{add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear")}:{add(s){!e&&!Ke(s)&&!gn(s)&&(s=X(s));const i=X(this);return Gr(i).has.call(i,s)||(i.add(s),yt(i,"add",s,s)),this},set(s,i){!e&&!Ke(i)&&!gn(i)&&(i=X(i));const o=X(this),{has:a,get:c}=Gr(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Gt(i,u)&&yt(o,"set",s,i):yt(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=Gr(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&yt(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&yt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bd(s,t,e)}),n}function ro(t,e){const n=Ed(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const wd={get:ro(!1,!1)},Id={get:ro(!1,!0)},Sd={get:ro(!0,!1)};const al=new WeakMap,cl=new WeakMap,ll=new WeakMap,Td=new WeakMap;function Cd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pd(t){return t.__v_skip||!Object.isExtensible(t)?0:Cd(Yh(t))}function Lr(t){return gn(t)?t:so(t,!1,yd,wd,al)}function ul(t){return so(t,!1,vd,Id,cl)}function fl(t){return so(t,!0,_d,Sd,ll)}function so(t,e,n,r,s){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Pd(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return gn(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Ke(t){return!!(t&&t.__v_isShallow)}function io(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function oo(t){return!re(t,"__v_skip")&&Object.isExtensible(t)&&Vc(t,"__v_skip",!0),t}const Se=t=>fe(t)?Lr(t):t,Ci=t=>fe(t)?fl(t):t;function de(t){return t?t.__v_isRef===!0:!1}function Ur(t){return hl(t,!1)}function Rd(t){return hl(t,!0)}function hl(t,e){return de(t)?t:new Ad(t,e)}class Ad{constructor(e,n){this.dep=new no,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ke(e)||gn(e);e=r?e:X(e),Gt(e,n)&&(this._rawValue=e,this._value=r?e:Se(e),this.dep.trigger())}}function Qt(t){return de(t)?t.value:t}const Od={get:(t,e,n)=>e==="__v_raw"?t:Qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dl(t){return zt(t)?t:new Proxy(t,Od)}function kd(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Md(t,n);return e}class Dd{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fd(X(this._object),this._key)}}function Md(t,e,n){const r=t[e];return de(r)?r:new Dd(t,e,n)}class Nd{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new no(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Xc(this,!0),!0}get value(){const e=this.dep.track();return tl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xd(t,e,n=!1){let r,s;return q(t)?r=t:(r=t.get,s=t.set),new Nd(r,s,n)}const Qr={},fs=new WeakMap;let cn;function Ld(t,e=!1,n=cn){if(n){let r=fs.get(n);r||fs.set(n,r=[]),r.push(t)}}function Ud(t,e,n=ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=C=>s?C:Ke(C)||s===!1||s===0?_t(C,1):_t(C);let u,f,p,g,E=!1,y=!1;if(de(t)?(f=()=>t.value,E=Ke(t)):zt(t)?(f=()=>l(t),E=!0):W(t)?(y=!0,E=t.some(C=>zt(C)||Ke(C)),f=()=>t.map(C=>{if(de(C))return C.value;if(zt(C))return l(C);if(q(C))return c?c(C,2):C()})):q(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){en();try{p()}finally{tn()}}const C=cn;cn=u;try{return c?c(t,3,[g]):t(g)}finally{cn=C}}:f=ct,e&&s){const C=f,F=s===!0?1/0:s;f=()=>_t(C(),F)}const D=Qc(),A=()=>{u.stop(),D&&D.active&&Qi(D.effects,u)};if(i&&e){const C=e;e=(...F)=>{C(...F),A()}}let O=y?new Array(t.length).fill(Qr):Qr;const P=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(e){const F=u.run();if(s||E||(y?F.some((G,K)=>Gt(G,O[K])):Gt(F,O))){p&&p();const G=cn;cn=u;try{const K=[F,O===Qr?void 0:y&&O[0]===Qr?[]:O,g];c?c(e,3,K):e(...K),O=F}finally{cn=G}}}else u.run()};return a&&a(P),u=new Jc(f),u.scheduler=o?()=>o(P,!1):P,g=C=>Ld(C,!1,u),p=u.onStop=()=>{const C=fs.get(u);if(C){if(c)c(C,4);else for(const F of C)F();fs.delete(u)}},e?r?P(!0):O=u.run():o?o(P.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function _t(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,de(t))_t(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)_t(t[r],e,n);else if(jc(t)||Rn(t))t.forEach(r=>{_t(r,e,n)});else if(Bc(t)){for(const r in t)_t(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&_t(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fr(t,e,n,r){try{return r?t(...r):t()}catch(s){Ms(s,e,n)}}function ft(t,e,n,r){if(q(t)){const s=Fr(t,e,n,r);return s&&Hc(s)&&s.catch(i=>{Ms(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ft(t[i],e,n,r));return s}}function Ms(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ae;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){en(),Fr(i,null,10,[t,c,l]),tn();return}}Fd(t,n,s,r,o)}function Fd(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Oe=[];let rt=-1;const An=[];let Mt=null,Sn=0;const pl=Promise.resolve();let hs=null;function Ns(t){const e=hs||pl;return t?e.then(this?t.bind(this):t):e}function jd(t){let e=rt+1,n=Oe.length;for(;e<n;){const r=e+n>>>1,s=Oe[r],i=wr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ao(t){if(!(t.flags&1)){const e=wr(t),n=Oe[Oe.length-1];!n||!(t.flags&2)&&e>=wr(n)?Oe.push(t):Oe.splice(jd(e),0,t),t.flags|=1,gl()}}function gl(){hs||(hs=pl.then(yl))}function Hd(t){W(t)?An.push(...t):Mt&&t.id===-1?Mt.splice(Sn+1,0,t):t.flags&1||(An.push(t),t.flags|=1),gl()}function Jo(t,e,n=rt+1){for(;n<Oe.length;n++){const r=Oe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Oe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ml(t){if(An.length){const e=[...new Set(An)].sort((n,r)=>wr(n)-wr(r));if(An.length=0,Mt){Mt.push(...e);return}for(Mt=e,Sn=0;Sn<Mt.length;Sn++){const n=Mt[Sn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,Sn=0}}const wr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yl(t){try{for(rt=0;rt<Oe.length;rt++){const e=Oe[rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rt<Oe.length;rt++){const e=Oe[rt];e&&(e.flags&=-2)}rt=-1,Oe.length=0,ml(),hs=null,(Oe.length||An.length)&&yl()}}let me=null,_l=null;function ds(t){const e=me;return me=t,_l=t&&t.type.__scopeId||null,e}function $d(t,e=me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ca(-1);const i=ds(e);let o;try{o=t(...s)}finally{ds(i),r._d&&ca(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dv(t,e){if(me===null)return t;const n=Fs(me),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ae]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&_t(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(en(),ft(c,n,8,[t.el,a,t,e]),tn())}}const vl=Symbol("_vte"),Bd=t=>t.__isTeleport,cr=t=>t&&(t.disabled||t.disabled===""),Yo=t=>t&&(t.defer||t.defer===""),Xo=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Zo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Pi=(t,e)=>{const n=t&&t.to;return ge(n)?e?e(n):null:n},bl={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:p,o:{insert:g,querySelector:E,createText:y,createComment:D}}=l,A=cr(e.props);let{shapeFlag:O,children:P,dynamicChildren:C}=e;if(t==null){const F=e.el=y(""),G=e.anchor=y("");g(F,n,r),g(G,n,r);const K=(U,Z)=>{O&16&&(s&&s.isCE&&(s.ce._teleportTarget=U),u(P,U,Z,s,i,o,a,c))},L=()=>{const U=e.target=Pi(e.props,E),Z=El(U,e,y,g);U&&(o!=="svg"&&Xo(U)?o="svg":o!=="mathml"&&Zo(U)&&(o="mathml"),A||(K(U,Z),Xr(e,!1)))};A&&(K(n,G),Xr(e,!0)),Yo(e.props)?Pe(()=>{L(),e.el.__isMounted=!0},i):L()}else{if(Yo(e.props)&&!t.el.__isMounted){Pe(()=>{bl.process(t,e,n,r,s,i,o,a,c,l),delete t.el.__isMounted},i);return}e.el=t.el,e.targetStart=t.targetStart;const F=e.anchor=t.anchor,G=e.target=t.target,K=e.targetAnchor=t.targetAnchor,L=cr(t.props),U=L?n:G,Z=L?F:K;if(o==="svg"||Xo(G)?o="svg":(o==="mathml"||Zo(G))&&(o="mathml"),C?(p(t.dynamicChildren,C,U,s,i,o,a),ho(t,e,!0)):c||f(t,e,U,Z,s,i,o,a,!1),A)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Jr(e,n,F,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ye=e.target=Pi(e.props,E);ye&&Jr(e,ye,null,l,0)}else L&&Jr(e,G,K,l,1);Xr(e,A)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:p}=t;if(f&&(s(l),s(u)),i&&s(c),o&16){const g=i||!cr(p);for(let E=0;E<a.length;E++){const y=a[E];r(y,e,n,g,!!y.dynamicChildren)}}},move:Jr,hydrate:Vd};function Jr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&r(o,e,n),(!f||cr(u))&&c&16)for(let p=0;p<l.length;p++)s(l[p],e,n,2);f&&r(a,e,n)}function Vd(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const p=e.target=Pi(e.props,c);if(p){const g=cr(e.props),E=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)e.anchor=f(o(t),e,a(t),n,r,s,i),e.targetStart=E,e.targetAnchor=E&&o(E);else{e.anchor=o(t);let y=E;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")e.targetStart=y;else if(y.data==="teleport anchor"){e.targetAnchor=y,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}y=o(y)}e.targetAnchor||El(p,e,u,l),f(E&&o(E),e,p,n,r,s,i)}Xr(e,g)}return e.anchor&&o(e.anchor)}const pv=bl;function Xr(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function El(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[vl]=i,t&&(r(s,t),r(i,t)),i}function co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function lo(t,e){return q(t)?ve({name:t.name},e,{setup:t}):t}function gv(){const t=Bp();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function wl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ps(t,e,n,r,s=!1){if(W(t)){t.forEach((E,y)=>ps(E,e&&(W(e)?e[y]:e),n,r,s));return}if(On(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ps(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState,p=X(f),g=f===ae?()=>!1:E=>re(p,E);if(l!=null&&l!==c&&(ge(l)?(u[l]=null,g(l)&&(f[l]=null)):de(l)&&(l.value=null)),q(c))Fr(c,a,12,[o,u]);else{const E=ge(c),y=de(c);if(E||y){const D=()=>{if(t.f){const A=E?g(c)?f[c]:u[c]:c.value;s?W(A)&&Qi(A,i):W(A)?A.includes(i)||A.push(i):E?(u[c]=[i],g(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else E?(u[c]=o,g(c)&&(f[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(D.id=-1,Pe(D,n)):D()}}}ks().requestIdleCallback;ks().cancelIdleCallback;const On=t=>!!t.type.__asyncLoader,Il=t=>t.type.__isKeepAlive;function Wd(t,e){Sl(t,"a",e)}function Kd(t,e){Sl(t,"da",e)}function Sl(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Il(s.parent.vnode)&&qd(r,e,n,s),s=s.parent}}function qd(t,e,n,r){const s=xs(e,t,r,!0);Tl(()=>{Qi(r[e],s)},n)}function xs(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{en();const a=jr(n),c=ft(e,n,t,o);return a(),tn(),c});return r?s.unshift(i):s.push(i),i}}const Ct=t=>(e,n=_e)=>{(!Tr||t==="sp")&&xs(t,(...r)=>e(...r),n)},Gd=Ct("bm"),zd=Ct("m"),Qd=Ct("bu"),Jd=Ct("u"),Yd=Ct("bum"),Tl=Ct("um"),Xd=Ct("sp"),Zd=Ct("rtg"),ep=Ct("rtc");function tp(t,e=_e){xs("ec",t,e)}const np="components",Cl=Symbol.for("v-ndc");function mv(t){return ge(t)?rp(np,t,!1)||t:t||Cl}function rp(t,e,n=!0,r=!1){const s=me||_e;if(s){const i=s.type;{const a=Gp(i,!1);if(a&&(a===e||a===Ge(e)||a===Os(Ge(e))))return i}const o=ea(s[t]||i[t],e)||ea(s.appContext[t],e);return!o&&r?i:o}}function ea(t,e){return t&&(t[e]||t[Ge(e)]||t[Os(Ge(e))])}function yv(t,e,n,r){let s;const i=n,o=W(t);if(o||ge(t)){const a=o&&zt(t);let c=!1;a&&(c=!Ke(t),t=Ds(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?Se(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(fe(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}function _v(t,e,n={},r,s){if(me.ce||me.parent&&On(me.parent)&&me.parent.ce)return e!=="default"&&(n.name=e),ms(),ys(We,null,[Ne("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),ms();const o=i&&Pl(i(n)),a=n.key||o&&o.key,c=ys(We,{key:(a&&!Tt(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Pl(t){return t.some(e=>Sr(e)?!(e.type===Yt||e.type===We&&!Pl(e.children)):!0)?t:null}const Ri=t=>t?ql(t)?Fs(t):Ri(t.parent):null,lr=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ri(t.parent),$root:t=>Ri(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>uo(t),$forceUpdate:t=>t.f||(t.f=()=>{ao(t.update)}),$nextTick:t=>t.n||(t.n=Ns.bind(t.proxy)),$watch:t=>Cp.bind(t)}),ii=(t,e)=>t!==ae&&!t.__isScriptSetup&&re(t,e),sp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ii(r,e))return o[e]=1,r[e];if(s!==ae&&re(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,i[e];if(n!==ae&&re(n,e))return o[e]=4,n[e];Ai&&(o[e]=0)}}const u=lr[e];let f,p;if(u)return e==="$attrs"&&Ie(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ae&&re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ii(s,e)?(s[e]=n,!0):r!==ae&&re(r,e)?(r[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ae&&re(t,o)||ii(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(lr,o)||re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ta(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ai=!0;function ip(t){const e=uo(t),n=t.proxy,r=t.ctx;Ai=!1,e.beforeCreate&&na(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:E,activated:y,deactivated:D,beforeDestroy:A,beforeUnmount:O,destroyed:P,unmounted:C,render:F,renderTracked:G,renderTriggered:K,errorCaptured:L,serverPrefetch:U,expose:Z,inheritAttrs:ye,components:xe,directives:De,filters:rn}=e;if(l&&op(l,r,null),o)for(const z in o){const ee=o[z];q(ee)&&(r[z]=ee.bind(n))}if(s){const z=s.call(n,n);fe(z)&&(t.data=Lr(z))}if(Ai=!0,i)for(const z in i){const ee=i[z],ht=q(ee)?ee.bind(n,n):q(ee.get)?ee.get.bind(n,n):ct,Rt=!q(ee)&&q(ee.set)?ee.set.bind(n):ct,et=He({get:ht,set:Rt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>et.value,set:Me=>et.value=Me})}if(a)for(const z in a)Rl(a[z],r,n,z);if(c){const z=q(c)?c.call(n):c;Reflect.ownKeys(z).forEach(ee=>{Zr(ee,z[ee])})}u&&na(u,t,"c");function ue(z,ee){W(ee)?ee.forEach(ht=>z(ht.bind(n))):ee&&z(ee.bind(n))}if(ue(Gd,f),ue(zd,p),ue(Qd,g),ue(Jd,E),ue(Wd,y),ue(Kd,D),ue(tp,L),ue(ep,G),ue(Zd,K),ue(Yd,O),ue(Tl,C),ue(Xd,U),W(Z))if(Z.length){const z=t.exposed||(t.exposed={});Z.forEach(ee=>{Object.defineProperty(z,ee,{get:()=>n[ee],set:ht=>n[ee]=ht})})}else t.exposed||(t.exposed={});F&&t.render===ct&&(t.render=F),ye!=null&&(t.inheritAttrs=ye),xe&&(t.components=xe),De&&(t.directives=De),U&&wl(t)}function op(t,e,n=ct){W(t)&&(t=Oi(t));for(const r in t){const s=t[r];let i;fe(s)?"default"in s?i=qe(s.from||r,s.default,!0):i=qe(s.from||r):i=qe(s),de(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function na(t,e,n){ft(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rl(t,e,n,r){let s=r.includes(".")?Hl(n,r):()=>n[r];if(ge(t)){const i=e[t];q(i)&&ur(s,i)}else if(q(t))ur(s,t.bind(n));else if(fe(t))if(W(t))t.forEach(i=>Rl(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&ur(s,i,t)}}function uo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>gs(c,l,o,!0)),gs(c,e,o)),fe(e)&&i.set(e,c),c}function gs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gs(t,i,n,!0),s&&s.forEach(o=>gs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ap[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ap={data:ra,props:sa,emits:sa,methods:rr,computed:rr,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:rr,directives:rr,watch:lp,provide:ra,inject:cp};function ra(t,e){return e?t?function(){return ve(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function cp(t,e){return rr(Oi(t),Oi(e))}function Oi(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function rr(t,e){return t?ve(Object.create(null),t,e):e}function sa(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:ve(Object.create(null),ta(t),ta(e??{})):e}function lp(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Al(){return{app:null,config:{isNativeTag:Qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let up=0;function fp(t,e){return function(r,s=null){q(r)||(r=ve({},r)),s!=null&&!fe(s)&&(s=null);const i=Al(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:up++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qp,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...f)):q(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const g=l._ceVNode||Ne(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Fs(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(ft(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=pn;pn=l;try{return u()}finally{pn=f}}};return l}}let pn=null;function Zr(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function qe(t,e,n=!1){const r=_e||me;if(r||pn){const s=pn?pn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function hp(){return!!(_e||me||pn)}const Ol={},kl=()=>Object.create(Ol),Dl=t=>Object.getPrototypeOf(t)===Ol;function dp(t,e,n,r=!1){const s={},i=kl();t.propsDefaults=Object.create(null),Ml(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ul(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pp(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Ls(t.emitsOptions,p))continue;const g=e[p];if(c)if(re(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const E=Ge(p);s[E]=ki(c,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ml(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!re(e,f)&&((u=yn(f))===f||!re(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ki(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!re(e,f))&&(delete i[f],l=!0)}l&&yt(t.attrs,"set","")}function Ml(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ir(c))continue;const l=e[c];let u;s&&re(s,u=Ge(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ls(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ki(s,c,f,l[f],t,!re(l,f))}}return o}function ki(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=jr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===yn(n))&&(r=!0))}return r}const gp=new WeakMap;function Nl(t,e,n=!1){const r=n?gp:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=f=>{c=!0;const[p,g]=Nl(f,e,!0);ve(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return fe(t)&&r.set(t,Pn),Pn;if(W(i))for(let u=0;u<i.length;u++){const f=Ge(i[u]);ia(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=Ge(u);if(ia(f)){const p=i[u],g=o[f]=W(p)||q(p)?{type:p}:ve({},p),E=g.type;let y=!1,D=!0;if(W(E))for(let A=0;A<E.length;++A){const O=E[A],P=q(O)&&O.name;if(P==="Boolean"){y=!0;break}else P==="String"&&(D=!1)}else y=q(E)&&E.name==="Boolean";g[0]=y,g[1]=D,(y||re(g,"default"))&&a.push(f)}}const l=[o,a];return fe(t)&&r.set(t,l),l}function ia(t){return t[0]!=="$"&&!ir(t)}const xl=t=>t[0]==="_"||t==="$stable",fo=t=>W(t)?t.map(at):[at(t)],mp=(t,e,n)=>{if(e._n)return e;const r=$d((...s)=>fo(e(...s)),n);return r._c=!1,r},Ll=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xl(s))continue;const i=t[s];if(q(i))e[s]=mp(s,i,r);else if(i!=null){const o=fo(i);e[s]=()=>o}}},Ul=(t,e)=>{const n=fo(e);t.slots.default=()=>n},Fl=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},yp=(t,e,n)=>{const r=t.slots=kl();if(t.vnode.shapeFlag&32){const s=e._;s?(Fl(r,e,n),n&&Vc(r,"_",s,!0)):Ll(e,r)}else e&&Ul(t,e)},_p=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Fl(s,e,n):(i=!e.$stable,Ll(e,s)),o=e}else e&&(Ul(t,e),o={default:1});if(i)for(const a in s)!xl(a)&&o[a]==null&&delete s[a]},Pe=Mp;function vp(t){return bp(t)}function bp(t,e){const n=ks();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ct,insertStaticContent:E}=t,y=(h,d,m,w=null,_=null,I=null,k=void 0,R=null,T=!!d.dynamicChildren)=>{if(h===d)return;h&&!Xn(h,d)&&(w=v(h),Me(h,_,I,!0),h=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:S,ref:$,shapeFlag:N}=d;switch(S){case Us:D(h,d,m,w);break;case Yt:A(h,d,m,w);break;case ci:h==null&&O(d,m,w,k);break;case We:xe(h,d,m,w,_,I,k,R,T);break;default:N&1?F(h,d,m,w,_,I,k,R,T):N&6?De(h,d,m,w,_,I,k,R,T):(N&64||N&128)&&S.process(h,d,m,w,_,I,k,R,T,j)}$!=null&&_&&ps($,h&&h.ref,I,d||h,!d)},D=(h,d,m,w)=>{if(h==null)r(d.el=a(d.children),m,w);else{const _=d.el=h.el;d.children!==h.children&&l(_,d.children)}},A=(h,d,m,w)=>{h==null?r(d.el=c(d.children||""),m,w):d.el=h.el},O=(h,d,m,w)=>{[h.el,h.anchor]=E(h.children,d,m,w,h.el,h.anchor)},P=({el:h,anchor:d},m,w)=>{let _;for(;h&&h!==d;)_=p(h),r(h,m,w),h=_;r(d,m,w)},C=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),s(h),h=m;s(d)},F=(h,d,m,w,_,I,k,R,T)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),h==null?G(d,m,w,_,I,k,R,T):U(h,d,_,I,k,R,T)},G=(h,d,m,w,_,I,k,R)=>{let T,S;const{props:$,shapeFlag:N,transition:H,dirs:V}=h;if(T=h.el=o(h.type,I,$&&$.is,$),N&8?u(T,h.children):N&16&&L(h.children,T,null,w,_,oi(h,I),k,R),V&&sn(h,null,w,"created"),K(T,h,h.scopeId,k,w),$){for(const ce in $)ce!=="value"&&!ir(ce)&&i(T,ce,null,$[ce],I,w);"value"in $&&i(T,"value",null,$.value,I),(S=$.onVnodeBeforeMount)&&nt(S,w,h)}V&&sn(h,null,w,"beforeMount");const Y=Ep(_,H);Y&&H.beforeEnter(T),r(T,d,m),((S=$&&$.onVnodeMounted)||Y||V)&&Pe(()=>{S&&nt(S,w,h),Y&&H.enter(T),V&&sn(h,null,w,"mounted")},_)},K=(h,d,m,w,_)=>{if(m&&g(h,m),w)for(let I=0;I<w.length;I++)g(h,w[I]);if(_){let I=_.subTree;if(d===I||Bl(I.type)&&(I.ssContent===d||I.ssFallback===d)){const k=_.vnode;K(h,k,k.scopeId,k.slotScopeIds,_.parent)}}},L=(h,d,m,w,_,I,k,R,T=0)=>{for(let S=T;S<h.length;S++){const $=h[S]=R?Nt(h[S]):at(h[S]);y(null,$,d,m,w,_,I,k,R)}},U=(h,d,m,w,_,I,k)=>{const R=d.el=h.el;let{patchFlag:T,dynamicChildren:S,dirs:$}=d;T|=h.patchFlag&16;const N=h.props||ae,H=d.props||ae;let V;if(m&&on(m,!1),(V=H.onVnodeBeforeUpdate)&&nt(V,m,d,h),$&&sn(d,h,m,"beforeUpdate"),m&&on(m,!0),(N.innerHTML&&H.innerHTML==null||N.textContent&&H.textContent==null)&&u(R,""),S?Z(h.dynamicChildren,S,R,m,w,oi(d,_),I):k||ee(h,d,R,null,m,w,oi(d,_),I,!1),T>0){if(T&16)ye(R,N,H,m,_);else if(T&2&&N.class!==H.class&&i(R,"class",null,H.class,_),T&4&&i(R,"style",N.style,H.style,_),T&8){const Y=d.dynamicProps;for(let ce=0;ce<Y.length;ce++){const ie=Y[ce],Le=N[ie],be=H[ie];(be!==Le||ie==="value")&&i(R,ie,Le,be,_,m)}}T&1&&h.children!==d.children&&u(R,d.children)}else!k&&S==null&&ye(R,N,H,m,_);((V=H.onVnodeUpdated)||$)&&Pe(()=>{V&&nt(V,m,d,h),$&&sn(d,h,m,"updated")},w)},Z=(h,d,m,w,_,I,k)=>{for(let R=0;R<d.length;R++){const T=h[R],S=d[R],$=T.el&&(T.type===We||!Xn(T,S)||T.shapeFlag&70)?f(T.el):m;y(T,S,$,null,w,_,I,k,!0)}},ye=(h,d,m,w,_)=>{if(d!==m){if(d!==ae)for(const I in d)!ir(I)&&!(I in m)&&i(h,I,d[I],null,_,w);for(const I in m){if(ir(I))continue;const k=m[I],R=d[I];k!==R&&I!=="value"&&i(h,I,R,k,_,w)}"value"in m&&i(h,"value",d.value,m.value,_)}},xe=(h,d,m,w,_,I,k,R,T)=>{const S=d.el=h?h.el:a(""),$=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:H,slotScopeIds:V}=d;V&&(R=R?R.concat(V):V),h==null?(r(S,m,w),r($,m,w),L(d.children||[],m,$,_,I,k,R,T)):N>0&&N&64&&H&&h.dynamicChildren?(Z(h.dynamicChildren,H,m,_,I,k,R),(d.key!=null||_&&d===_.subTree)&&ho(h,d,!0)):ee(h,d,m,$,_,I,k,R,T)},De=(h,d,m,w,_,I,k,R,T)=>{d.slotScopeIds=R,h==null?d.shapeFlag&512?_.ctx.activate(d,m,w,k,T):rn(d,m,w,_,I,k,T):Pt(h,d,T)},rn=(h,d,m,w,_,I,k)=>{const R=h.component=$p(h,w,_);if(Il(h)&&(R.ctx.renderer=j),Vp(R,!1,k),R.asyncDep){if(_&&_.registerDep(R,ue,k),!h.el){const T=R.subTree=Ne(Yt);A(null,T,d,m)}}else ue(R,h,d,m,_,I,k)},Pt=(h,d,m)=>{const w=d.component=h.component;if(kp(h,d,m))if(w.asyncDep&&!w.asyncResolved){z(w,d,m);return}else w.next=d,w.update();else d.el=h.el,w.vnode=d},ue=(h,d,m,w,_,I,k)=>{const R=()=>{if(h.isMounted){let{next:N,bu:H,u:V,parent:Y,vnode:ce}=h;{const Ue=jl(h);if(Ue){N&&(N.el=ce.el,z(h,N,k)),Ue.asyncDep.then(()=>{h.isUnmounted||R()});return}}let ie=N,Le;on(h,!1),N?(N.el=ce.el,z(h,N,k)):N=ce,H&&ei(H),(Le=N.props&&N.props.onVnodeBeforeUpdate)&&nt(Le,Y,N,ce),on(h,!0);const be=ai(h),ze=h.subTree;h.subTree=be,y(ze,be,f(ze.el),v(ze),h,_,I),N.el=be.el,ie===null&&Dp(h,be.el),V&&Pe(V,_),(Le=N.props&&N.props.onVnodeUpdated)&&Pe(()=>nt(Le,Y,N,ce),_)}else{let N;const{el:H,props:V}=d,{bm:Y,m:ce,parent:ie,root:Le,type:be}=h,ze=On(d);if(on(h,!1),Y&&ei(Y),!ze&&(N=V&&V.onVnodeBeforeMount)&&nt(N,ie,d),on(h,!0),H&&he){const Ue=()=>{h.subTree=ai(h),he(H,h.subTree,h,_,null)};ze&&be.__asyncHydrate?be.__asyncHydrate(H,h,Ue):Ue()}else{Le.ce&&Le.ce._injectChildStyle(be);const Ue=h.subTree=ai(h);y(null,Ue,m,w,h,_,I),d.el=Ue.el}if(ce&&Pe(ce,_),!ze&&(N=V&&V.onVnodeMounted)){const Ue=d;Pe(()=>nt(N,ie,Ue),_)}(d.shapeFlag&256||ie&&On(ie.vnode)&&ie.vnode.shapeFlag&256)&&h.a&&Pe(h.a,_),h.isMounted=!0,d=m=w=null}};h.scope.on();const T=h.effect=new Jc(R);h.scope.off();const S=h.update=T.run.bind(T),$=h.job=T.runIfDirty.bind(T);$.i=h,$.id=h.uid,T.scheduler=()=>ao($),on(h,!0),S()},z=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,pp(h,d.props,w,m),_p(h,d.children,m),en(),Jo(h),tn()},ee=(h,d,m,w,_,I,k,R,T=!1)=>{const S=h&&h.children,$=h?h.shapeFlag:0,N=d.children,{patchFlag:H,shapeFlag:V}=d;if(H>0){if(H&128){Rt(S,N,m,w,_,I,k,R,T);return}else if(H&256){ht(S,N,m,w,_,I,k,R,T);return}}V&8?($&16&&Be(S,_,I),N!==S&&u(m,N)):$&16?V&16?Rt(S,N,m,w,_,I,k,R,T):Be(S,_,I,!0):($&8&&u(m,""),V&16&&L(N,m,w,_,I,k,R,T))},ht=(h,d,m,w,_,I,k,R,T)=>{h=h||Pn,d=d||Pn;const S=h.length,$=d.length,N=Math.min(S,$);let H;for(H=0;H<N;H++){const V=d[H]=T?Nt(d[H]):at(d[H]);y(h[H],V,m,null,_,I,k,R,T)}S>$?Be(h,_,I,!0,!1,N):L(d,m,w,_,I,k,R,T,N)},Rt=(h,d,m,w,_,I,k,R,T)=>{let S=0;const $=d.length;let N=h.length-1,H=$-1;for(;S<=N&&S<=H;){const V=h[S],Y=d[S]=T?Nt(d[S]):at(d[S]);if(Xn(V,Y))y(V,Y,m,null,_,I,k,R,T);else break;S++}for(;S<=N&&S<=H;){const V=h[N],Y=d[H]=T?Nt(d[H]):at(d[H]);if(Xn(V,Y))y(V,Y,m,null,_,I,k,R,T);else break;N--,H--}if(S>N){if(S<=H){const V=H+1,Y=V<$?d[V].el:w;for(;S<=H;)y(null,d[S]=T?Nt(d[S]):at(d[S]),m,Y,_,I,k,R,T),S++}}else if(S>H)for(;S<=N;)Me(h[S],_,I,!0),S++;else{const V=S,Y=S,ce=new Map;for(S=Y;S<=H;S++){const Fe=d[S]=T?Nt(d[S]):at(d[S]);Fe.key!=null&&ce.set(Fe.key,S)}let ie,Le=0;const be=H-Y+1;let ze=!1,Ue=0;const Jn=new Array(be);for(S=0;S<be;S++)Jn[S]=0;for(S=V;S<=N;S++){const Fe=h[S];if(Le>=be){Me(Fe,_,I,!0);continue}let tt;if(Fe.key!=null)tt=ce.get(Fe.key);else for(ie=Y;ie<=H;ie++)if(Jn[ie-Y]===0&&Xn(Fe,d[ie])){tt=ie;break}tt===void 0?Me(Fe,_,I,!0):(Jn[tt-Y]=S+1,tt>=Ue?Ue=tt:ze=!0,y(Fe,d[tt],m,null,_,I,k,R,T),Le++)}const Po=ze?wp(Jn):Pn;for(ie=Po.length-1,S=be-1;S>=0;S--){const Fe=Y+S,tt=d[Fe],Ro=Fe+1<$?d[Fe+1].el:w;Jn[S]===0?y(null,tt,m,Ro,_,I,k,R,T):ze&&(ie<0||S!==Po[ie]?et(tt,m,Ro,2):ie--)}}},et=(h,d,m,w,_=null)=>{const{el:I,type:k,transition:R,children:T,shapeFlag:S}=h;if(S&6){et(h.component.subTree,d,m,w);return}if(S&128){h.suspense.move(d,m,w);return}if(S&64){k.move(h,d,m,j);return}if(k===We){r(I,d,m);for(let N=0;N<T.length;N++)et(T[N],d,m,w);r(h.anchor,d,m);return}if(k===ci){P(h,d,m);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(I),r(I,d,m),Pe(()=>R.enter(I),_);else{const{leave:N,delayLeave:H,afterLeave:V}=R,Y=()=>r(I,d,m),ce=()=>{N(I,()=>{Y(),V&&V()})};H?H(I,Y,ce):ce()}else r(I,d,m)},Me=(h,d,m,w=!1,_=!1)=>{const{type:I,props:k,ref:R,children:T,dynamicChildren:S,shapeFlag:$,patchFlag:N,dirs:H,cacheIndex:V}=h;if(N===-2&&(_=!1),R!=null&&ps(R,null,m,h,!0),V!=null&&(d.renderCache[V]=void 0),$&256){d.ctx.deactivate(h);return}const Y=$&1&&H,ce=!On(h);let ie;if(ce&&(ie=k&&k.onVnodeBeforeUnmount)&&nt(ie,d,h),$&6)Wr(h.component,m,w);else{if($&128){h.suspense.unmount(m,w);return}Y&&sn(h,null,d,"beforeUnmount"),$&64?h.type.remove(h,d,m,j,w):S&&!S.hasOnce&&(I!==We||N>0&&N&64)?Be(S,d,m,!1,!0):(I===We&&N&384||!_&&$&16)&&Be(T,d,m),w&&vn(h)}(ce&&(ie=k&&k.onVnodeUnmounted)||Y)&&Pe(()=>{ie&&nt(ie,d,h),Y&&sn(h,null,d,"unmounted")},m)},vn=h=>{const{type:d,el:m,anchor:w,transition:_}=h;if(d===We){bn(m,w);return}if(d===ci){C(h);return}const I=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(h.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:R}=_,T=()=>k(m,I);R?R(h.el,I,T):T()}else I()},bn=(h,d)=>{let m;for(;h!==d;)m=p(h),s(h),h=m;s(d)},Wr=(h,d,m)=>{const{bum:w,scope:_,job:I,subTree:k,um:R,m:T,a:S}=h;oa(T),oa(S),w&&ei(w),_.stop(),I&&(I.flags|=8,Me(k,h,d,m)),R&&Pe(R,d),Pe(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Be=(h,d,m,w=!1,_=!1,I=0)=>{for(let k=I;k<h.length;k++)Me(h[k],d,m,w,_)},v=h=>{if(h.shapeFlag&6)return v(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const d=p(h.anchor||h.el),m=d&&d[vl];return m?p(m):d};let x=!1;const M=(h,d,m)=>{h==null?d._vnode&&Me(d._vnode,null,null,!0):y(d._vnode||null,h,d,null,null,null,m),d._vnode=h,x||(x=!0,Jo(),ml(),x=!1)},j={p:y,um:Me,m:et,r:vn,mt:rn,mc:L,pc:ee,pbc:Z,n:v,o:t};let se,he;return{render:M,hydrate:se,createApp:fp(M,se)}}function oi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function on({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ep(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ho(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ho(o,a)),a.type===Us&&(a.el=o.el)}}function wp(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jl(e)}function oa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ip=Symbol.for("v-scx"),Sp=()=>qe(Ip);function Tp(t,e){return po(t,null,e)}function ur(t,e,n){return po(t,e,n)}function po(t,e,n=ae){const{immediate:r,deep:s,flush:i,once:o}=n,a=ve({},n),c=e&&r||!e&&i!=="post";let l;if(Tr){if(i==="sync"){const g=Sp();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=ct,g.resume=ct,g.pause=ct,g}}const u=_e;a.call=(g,E,y)=>ft(g,u,E,y);let f=!1;i==="post"?a.scheduler=g=>{Pe(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,E)=>{E?g():ao(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Ud(t,e,a);return Tr&&(l?l.push(p):c&&p()),p}function Cp(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?Hl(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=jr(this),a=po(s,i.bind(r),n);return o(),a}function Hl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Pp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ge(e)}Modifiers`]||t[`${yn(e)}Modifiers`];function Rp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let s=n;const i=e.startsWith("update:"),o=i&&Pp(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ge(u)?u.trim():u)),o.number&&(s=n.map(ed)));let a,c=r[a=Zs(e)]||r[a=Zs(Ge(e))];!c&&i&&(c=r[a=Zs(yn(e))]),c&&ft(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(l,t,6,s)}}function $l(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=$l(l,e,!0);u&&(a=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):ve(o,i),fe(t)&&r.set(t,o),o)}function Ls(t,e){return!t||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,yn(e))||re(t,e))}function ai(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:g,ctx:E,inheritAttrs:y}=t,D=ds(t);let A,O;try{if(n.shapeFlag&4){const C=s||r,F=C;A=at(l.call(F,C,u,f,g,p,E)),O=a}else{const C=e;A=at(C.length>1?C(f,{attrs:a,slots:o,emit:c}):C(f,null)),O=e.props?a:Ap(a)}}catch(C){fr.length=0,Ms(C,t,1),A=Ne(Yt)}let P=A;if(O&&y!==!1){const C=Object.keys(O),{shapeFlag:F}=P;C.length&&F&7&&(i&&C.some(zi)&&(O=Op(O,i)),P=Wn(P,O,!1,!0))}return n.dirs&&(P=Wn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&co(P,n.transition),A=P,ds(D),A}const Ap=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ps(n))&&((e||(e={}))[n]=t[n]);return e},Op=(t,e)=>{const n={};for(const r in t)(!zi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kp(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?aa(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Ls(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?aa(r,o,l):!0:!!o;return!1}function aa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ls(n,i))return!0}return!1}function Dp({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bl=t=>t.__isSuspense;function Mp(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Hd(t)}const We=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),ci=Symbol.for("v-stc"),fr=[];let $e=null;function ms(t=!1){fr.push($e=t?null:[])}function Np(){fr.pop(),$e=fr[fr.length-1]||null}let Ir=1;function ca(t,e=!1){Ir+=t,t<0&&$e&&e&&($e.hasOnce=!0)}function Vl(t){return t.dynamicChildren=Ir>0?$e||Pn:null,Np(),Ir>0&&$e&&$e.push(t),t}function vv(t,e,n,r,s,i){return Vl(Kl(t,e,n,r,s,i,!0))}function ys(t,e,n,r,s){return Vl(Ne(t,e,n,r,s,!0))}function Sr(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const Wl=({key:t})=>t??null,es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||de(t)||q(t)?{i:me,r:t,k:e,f:!!n}:t:null);function Kl(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wl(e),ref:e&&es(e),scopeId:_l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return a?(go(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Ir>0&&!o&&$e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$e.push(c),c}const Ne=xp;function xp(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Cl)&&(t=Yt),Sr(t)){const a=Wn(t,e,!0);return n&&go(a,n),Ir>0&&!i&&$e&&(a.shapeFlag&6?$e[$e.indexOf(t)]=a:$e.push(a)),a.patchFlag=-2,a}if(zp(t)&&(t=t.__vccOpts),e){e=Lp(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Xi(a)),fe(c)&&(io(c)&&!W(c)&&(c=ve({},c)),e.style=Yi(c))}const o=ge(t)?1:Bl(t)?128:Bd(t)?64:fe(t)?4:q(t)?2:0;return Kl(t,e,n,r,s,o,i,!0)}function Lp(t){return t?io(t)||Dl(t)?ve({},t):t:null}function Wn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Fp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Wl(l),ref:e&&e.ref?n&&i?W(i)?i.concat(es(e)):[i,es(e)]:es(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&co(u,c.clone(u)),u}function Up(t=" ",e=0){return Ne(Us,null,t,e)}function bv(t="",e=!1){return e?(ms(),ys(Yt,null,t)):Ne(Yt,null,t)}function at(t){return t==null||typeof t=="boolean"?Ne(Yt):W(t)?Ne(We,null,t.slice()):Sr(t)?Nt(t):Ne(Us,null,String(t))}function Nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wn(t)}function go(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),go(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dl(e)?e._ctx=me:s===3&&me&&(me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:me},n=32):(e=String(e),r&64?(n=16,e=[Up(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xi([e.class,r.class]));else if(s==="style")e.style=Yi([e.style,r.style]);else if(Ps(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nt(t,e,n,r=null){ft(t,e,7,[n,r])}const jp=Al();let Hp=0;function $p(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jp,i={uid:Hp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nl(r,s),emitsOptions:$l(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rp.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const Bp=()=>_e||me;let _s,Di;{const t=ks(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_s=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Di=e("__VUE_SSR_SETTERS__",n=>Tr=n)}const jr=t=>{const e=_e;return _s(t),t.scope.on(),()=>{t.scope.off(),_s(e)}},la=()=>{_e&&_e.scope.off(),_s(null)};function ql(t){return t.vnode.shapeFlag&4}let Tr=!1;function Vp(t,e=!1,n=!1){e&&Di(e);const{props:r,children:s}=t.vnode,i=ql(t);dp(t,r,i,e),yp(t,s,n);const o=i?Wp(t,e):void 0;return e&&Di(!1),o}function Wp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sp);const{setup:r}=n;if(r){en();const s=t.setupContext=r.length>1?qp(t):null,i=jr(t),o=Fr(r,t,0,[t.props,s]),a=Hc(o);if(tn(),i(),(a||t.sp)&&!On(t)&&wl(t),a){if(o.then(la,la),e)return o.then(c=>{ua(t,c,e)}).catch(c=>{Ms(c,t,0)});t.asyncDep=o}else ua(t,o,e)}else Gl(t,e)}function ua(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=dl(e)),Gl(t,n)}let fa;function Gl(t,e,n){const r=t.type;if(!t.render){if(!e&&fa&&!r.render){const s=r.template||uo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=fa(s,l)}}t.render=r.render||ct}{const s=jr(t);en();try{ip(t)}finally{tn(),s()}}}const Kp={get(t,e){return Ie(t,"get",""),t[e]}};function qp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kp),slots:t.slots,emit:t.emit,expose:e}}function Fs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dl(oo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)},has(e,n){return n in e||n in lr}})):t.proxy}function Gp(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function zp(t){return q(t)&&"__vccOpts"in t}const He=(t,e)=>xd(t,e,Tr);function zl(t,e,n){const r=arguments.length;return r===2?fe(e)&&!W(e)?Sr(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),Ne(t,e,n))}const Qp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mi;const ha=typeof window<"u"&&window.trustedTypes;if(ha)try{Mi=ha.createPolicy("vue",{createHTML:t=>t})}catch{}const Ql=Mi?t=>Mi.createHTML(t):t=>t,Jp="http://www.w3.org/2000/svg",Yp="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,da=mt&&mt.createElement("template"),Xp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mt.createElementNS(Jp,t):e==="mathml"?mt.createElementNS(Yp,t):n?mt.createElement(t,{is:n}):mt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{da.innerHTML=Ql(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=da.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zp=Symbol("_vtc");function eg(t,e,n){const r=t[Zp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vs=Symbol("_vod"),Jl=Symbol("_vsh"),Ev={beforeMount(t,{value:e},{transition:n}){t[vs]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Zn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Zn(t,!0),r.enter(t)):r.leave(t,()=>{Zn(t,!1)}):Zn(t,e))},beforeUnmount(t,{value:e}){Zn(t,e)}};function Zn(t,e){t.style.display=e?t[vs]:"none",t[Jl]=!e}const tg=Symbol(""),ng=/(^|;)\s*display\s*:/;function rg(t,e,n){const r=t.style,s=ge(n);let i=!1;if(n&&!s){if(e)if(ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ts(r,a,"")}else for(const o in e)n[o]==null&&ts(r,o,"");for(const o in n)o==="display"&&(i=!0),ts(r,o,n[o])}else if(s){if(e!==n){const o=r[tg];o&&(n+=";"+o),r.cssText=n,i=ng.test(n)}}else e&&t.removeAttribute("style");vs in t&&(t[vs]=i?r.display:"",t[Jl]&&(r.display="none"))}const pa=/\s*!important$/;function ts(t,e,n){if(W(n))n.forEach(r=>ts(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sg(t,e);pa.test(n)?t.setProperty(yn(r),n.replace(pa,""),"important"):t[r]=n}}const ga=["Webkit","Moz","ms"],li={};function sg(t,e){const n=li[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return li[e]=r;r=Os(r);for(let s=0;s<ga.length;s++){const i=ga[s]+r;if(i in t)return li[e]=i}return e}const ma="http://www.w3.org/1999/xlink";function ya(t,e,n,r,s,i=od(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ma,e.slice(6,e.length)):t.setAttributeNS(ma,e,n):n==null||i&&!Wc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function _a(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ql(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Wc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ig(t,e,n,r){t.addEventListener(e,n,r)}function og(t,e,n,r){t.removeEventListener(e,n,r)}const va=Symbol("_vei");function ag(t,e,n,r,s=null){const i=t[va]||(t[va]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cg(e);if(r){const l=i[e]=fg(r,s);ig(t,a,l,c)}else o&&(og(t,a,o,c),i[e]=void 0)}}const ba=/(?:Once|Passive|Capture)$/;function cg(t){let e;if(ba.test(t)){e={};let r;for(;r=t.match(ba);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yn(t.slice(2)),e]}let ui=0;const lg=Promise.resolve(),ug=()=>ui||(lg.then(()=>ui=0),ui=Date.now());function fg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ft(hg(r,n.value),e,5,[r])};return n.value=t,n.attached=ug(),n}function hg(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dg=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?eg(t,r,o):e==="style"?rg(t,n,r):Ps(e)?zi(e)||ag(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pg(t,e,r,o))?(_a(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ya(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(r))?_a(t,Ge(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ya(t,e,r,o))};function pg(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ea(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ea(e)&&ge(n)?!1:e in t}const gg=["ctrl","shift","alt","meta"],mg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gg.some(n=>t[`${n}Key`]&&!e.includes(n))},wv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=mg[e[o]];if(a&&a(s,e))return}return t(s,...i)})},yg=ve({patchProp:dg},Xp);let wa;function _g(){return wa||(wa=vp(yg))}const vg=(...t)=>{const e=_g().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Eg(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eg(t){return ge(t)?document.querySelector(t):t}var wg=!1,Ig="VUE_QUERY_CLIENT";function Sg(t){const e=t?`:${t}`:"";return`${Ig}${e}`}function Iv(t,e){Object.keys(t).forEach(n=>{t[n]=e[n]})}function Ni(t,e,n="",r=0){if(e){const s=e(t,n,r);if(s===void 0&&de(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,i)=>Ni(s,e,String(i),r+1));if(typeof t=="object"&&Cg(t)){const s=Object.entries(t).map(([i,o])=>[i,Ni(o,e,i,r+1)]);return Object.fromEntries(s)}return t}function Tg(t,e){return Ni(t,e)}function J(t,e=!1){return Tg(t,(n,r,s)=>{if(s===1&&r==="queryKey")return J(n,!0);if(e&&Pg(n))return J(n(),e);if(de(n))return J(Qt(n),e)})}function Cg(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Pg(t){return typeof t=="function"}function Sv(t,e){return typeof t=="function"?t(...e):!!t}var Rg=class extends Uc{find(t){return super.find(J(t))}findAll(t={}){return super.findAll(J(t))}},Ag=class extends Fc{find(t){return super.find(J(t))}findAll(t={}){return super.findAll(J(t))}},Og=class extends zh{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new Rg,mutationCache:t.mutationCache||new Ag};super(e),this.isRestoring=Ur(!1)}isFetching(t={}){return super.isFetching(J(t))}isMutating(t={}){return super.isMutating(J(t))}getQueryData(t){return super.getQueryData(J(t))}ensureQueryData(t){return super.ensureQueryData(J(t))}getQueriesData(t){return super.getQueriesData(J(t))}setQueryData(t,e,n={}){return super.setQueryData(J(t),e,J(n))}setQueriesData(t,e,n={}){return super.setQueriesData(J(t),e,J(n))}getQueryState(t){return super.getQueryState(J(t))}removeQueries(t={}){return super.removeQueries(J(t))}resetQueries(t={},e={}){return super.resetQueries(J(t),J(e))}cancelQueries(t={},e={}){return super.cancelQueries(J(t),J(e))}invalidateQueries(t={},e={}){const n=J(t),r=J(e);if(super.invalidateQueries({...n,refetchType:"none"},r),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return Ns().then(()=>super.refetchQueries(s,r))}refetchQueries(t={},e={}){return super.refetchQueries(J(t),J(e))}fetchQuery(t){return super.fetchQuery(J(t))}prefetchQuery(t){return super.prefetchQuery(J(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(J(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(J(t))}setDefaultOptions(t){super.setDefaultOptions(J(t))}setQueryDefaults(t,e){super.setQueryDefaults(J(t),J(e))}getQueryDefaults(t){return super.getQueryDefaults(J(t))}setMutationDefaults(t,e){super.setMutationDefaults(J(t),J(e))}getMutationDefaults(t){return super.getMutationDefaults(J(t))}},kg={install:(t,e={})=>{const n=Sg(e.queryClientKey);let r;if("queryClient"in e&&e.queryClient)r=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;r=new Og(o)}xr||r.mount();let s=()=>{};if(e.clientPersister){r.isRestoring.value=!0;const[o,a]=e.clientPersister(r);s=o,a.then(()=>{var c;r.isRestoring.value=!1,(c=e.clientPersisterOnSuccess)==null||c.call(e,r)})}const i=()=>{r.unmount(),s()};if(t.onUnmount)t.onUnmount(i);else{const o=t.unmount;t.unmount=function(){i(),o()}}t.provide(n,r)}};/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Yl;const js=t=>Yl=t,Xl=Symbol();function xi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hr||(hr={}));function Dg(){const t=zc(!0),e=t.run(()=>Ur({}));let n=[],r=[];const s=oo({install(i){js(s),s._a=i,i.provide(Xl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!wg?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Zl=()=>{};function Ia(t,e,n,r=Zl){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qc()&&cd(s),s}function wn(t,...e){t.slice().forEach(n=>{n(...e)})}const Mg=t=>t(),Sa=Symbol(),fi=Symbol();function Li(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];xi(s)&&xi(r)&&t.hasOwnProperty(n)&&!de(r)&&!zt(r)?t[n]=Li(s,r):t[n]=r}return t}const Ng=Symbol();function xg(t){return!xi(t)||!t.hasOwnProperty(Ng)}const{assign:Dt}=Object;function Lg(t){return!!(de(t)&&t.effect)}function Ug(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=kd(n.state.value[t]);return Dt(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=oo(He(()=>{js(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return c=eu(t,l,e,n,r,!0),c}function eu(t,e,n={},r,s,i){let o;const a=Dt({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Ur({});let y;function D(L){let U;l=u=!1,typeof L=="function"?(L(r.state.value[t]),U={type:hr.patchFunction,storeId:t,events:g}):(Li(r.state.value[t],L),U={type:hr.patchObject,payload:L,storeId:t,events:g});const Z=y=Symbol();Ns().then(()=>{y===Z&&(l=!0)}),u=!0,wn(f,U,r.state.value[t])}const A=i?function(){const{state:U}=n,Z=U?U():{};this.$patch(ye=>{Dt(ye,Z)})}:Zl;function O(){o.stop(),f=[],p=[],r._s.delete(t)}const P=(L,U="")=>{if(Sa in L)return L[fi]=U,L;const Z=function(){js(r);const ye=Array.from(arguments),xe=[],De=[];function rn(z){xe.push(z)}function Pt(z){De.push(z)}wn(p,{args:ye,name:Z[fi],store:F,after:rn,onError:Pt});let ue;try{ue=L.apply(this&&this.$id===t?this:F,ye)}catch(z){throw wn(De,z),z}return ue instanceof Promise?ue.then(z=>(wn(xe,z),z)).catch(z=>(wn(De,z),Promise.reject(z))):(wn(xe,ue),ue)};return Z[Sa]=!0,Z[fi]=U,Z},C={_p:r,$id:t,$onAction:Ia.bind(null,p),$patch:D,$reset:A,$subscribe(L,U={}){const Z=Ia(f,L,U.detached,()=>ye()),ye=o.run(()=>ur(()=>r.state.value[t],xe=>{(U.flush==="sync"?u:l)&&L({storeId:t,type:hr.direct,events:g},xe)},Dt({},c,U)));return Z},$dispose:O},F=Lr(C);r._s.set(t,F);const K=(r._a&&r._a.runWithContext||Mg)(()=>r._e.run(()=>(o=zc()).run(()=>e({action:P}))));for(const L in K){const U=K[L];if(de(U)&&!Lg(U)||zt(U))i||(E&&xg(U)&&(de(U)?U.value=E[L]:Li(U,E[L])),r.state.value[t][L]=U);else if(typeof U=="function"){const Z=P(U,L);K[L]=Z,a.actions[L]=U}}return Dt(F,K),Dt(X(F),K),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:L=>{D(U=>{Dt(U,L)})}}),r._p.forEach(L=>{Dt(F,o.run(()=>L({store:F,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(F.$state,E),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function Fg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=hp();return a=a||(l?qe(Xl,null):null),a&&js(a),a=Yl,a._s.has(r)||(i?eu(r,e,s,a):Ug(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Tn=typeof document<"u";function tu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&tu(t.default)}const ne=Object.assign;function hi(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const dr=()=>{},Xe=Array.isArray,nu=/#/g,Hg=/&/g,$g=/\//g,Bg=/=/g,Vg=/\?/g,ru=/\+/g,Wg=/%5B/g,Kg=/%5D/g,su=/%5E/g,qg=/%60/g,iu=/%7B/g,Gg=/%7C/g,ou=/%7D/g,zg=/%20/g;function mo(t){return encodeURI(""+t).replace(Gg,"|").replace(Wg,"[").replace(Kg,"]")}function Qg(t){return mo(t).replace(iu,"{").replace(ou,"}").replace(su,"^")}function Ui(t){return mo(t).replace(ru,"%2B").replace(zg,"+").replace(nu,"%23").replace(Hg,"%26").replace(qg,"`").replace(iu,"{").replace(ou,"}").replace(su,"^")}function Jg(t){return Ui(t).replace(Bg,"%3D")}function Yg(t){return mo(t).replace(nu,"%23").replace(Vg,"%3F")}function Xg(t){return t==null?"":Yg(t).replace($g,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Zg=/\/$/,em=t=>t.replace(Zg,"");function di(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sm(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Cr(o)}}function tm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kn(e.matched[r],n.matched[s])&&au(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function au(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rm(t[n],e[n]))return!1;return!0}function rm(t,e){return Xe(t)?Ca(t,e):Xe(e)?Ca(e,t):t===e}function Ca(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pr;(function(t){t.pop="pop",t.push="push"})(Pr||(Pr={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function im(t){if(!t)if(Tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),em(t)}const om=/^[^#]+#/;function am(t,e){return t.replace(om,"#")+e}function cm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hs=()=>({left:window.scrollX,top:window.scrollY});function lm(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pa(t,e){return(history.state?history.state.position-e:-1)+t}const Fi=new Map;function um(t,e){Fi.set(t,e)}function fm(t){const e=Fi.get(t);return Fi.delete(t),e}let hm=()=>location.protocol+"//"+location.host;function cu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ta(c,"")}return Ta(n,t)+r+s}function dm(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=cu(t,location),E=n.value,y=e.value;let D=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}D=y?p.position-y.position:0}else r(g);s.forEach(A=>{A(n.value,E,{delta:D,type:Pr.pop,direction:D?D>0?pr.forward:pr.back:pr.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:Hs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ra(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hs():null}}function pm(t){const{history:e,location:n}=window,r={value:cu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:hm()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ne({},e.state,Ra(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ne({},s.value,e.state,{forward:c,scroll:Hs()});i(u.current,u,!0);const f=ne({},Ra(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function gm(t){t=im(t);const e=pm(t),n=dm(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:am.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mm(t){return typeof t=="string"||t&&typeof t=="object"}function lu(t){return typeof t=="string"||typeof t=="symbol"}const uu=Symbol("");var Aa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Aa||(Aa={}));function qn(t,e){return ne(new Error,{type:t,[uu]:!0},e)}function pt(t,e){return t instanceof Error&&uu in t&&(e==null||!!(t.type&e))}const Oa="[^/]+?",ym={sensitive:!1,strict:!1,start:!0,end:!0},_m=/[.+*?^${}()[\]/\\]/g;function vm(t,e){const n=ne({},ym,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(_m,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:y,optional:D,regexp:A}=p;i.push({name:E,repeatable:y,optional:D});const O=A||Oa;if(O!==Oa){g+=10;try{new RegExp(`(${O})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+C.message)}}let P=y?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(P=D&&l.length<2?`(?:/${P})`:"/"+P),D&&(P+="?"),s+=P,g+=20,D&&(g+=-8),y&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",E=i[p-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:y,optional:D}=g,A=E in l?l[E]:"";if(Xe(A)&&!y)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=Xe(A)?A.join("/"):A;if(!O)if(D)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function bm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ka(r))return 1;if(ka(s))return-1}return s.length-r.length}function ka(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Em={type:0,value:""},wm=/[a-zA-Z0-9_]/;function Im(t){if(!t)return[[]];if(t==="/")return[[Em]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:wm.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Sm(t,e,n){const r=vm(Im(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tm(t,e){const n=[],r=new Map;e=xa({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const E=!g,y=Ma(f);y.aliasOf=g&&g.record;const D=xa(e,f),A=[y];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of C)A.push(Ma(ne({},y,{components:g?g.record.components:y.components,path:F,aliasOf:g?g.record:y})))}let O,P;for(const C of A){const{path:F}=C;if(p&&F[0]!=="/"){const G=p.record.path,K=G[G.length-1]==="/"?"":"/";C.path=p.record.path+(F&&K+F)}if(O=Sm(C,p,D),g?g.alias.push(O):(P=P||O,P!==O&&P.alias.push(O),E&&f.name&&!Na(O)&&o(f.name)),hu(O)&&c(O),y.children){const G=y.children;for(let K=0;K<G.length;K++)i(G[K],O,g&&g.children[K])}g=g||O}return P?()=>{o(P)}:dr}function o(f){if(lu(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=Rm(f,n);n.splice(p,0,f),f.record.name&&!Na(f)&&r.set(f.record.name,f)}function l(f,p){let g,E={},y,D;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw qn(1,{location:f});D=g.record.name,E=ne(Da(p.params,g.keys.filter(P=>!P.optional).concat(g.parent?g.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Da(f.params,g.keys.map(P=>P.name))),y=g.stringify(E)}else if(f.path!=null)y=f.path,g=n.find(P=>P.re.test(y)),g&&(E=g.parse(y),D=g.record.name);else{if(g=p.name?r.get(p.name):n.find(P=>P.re.test(p.path)),!g)throw qn(1,{location:f,currentLocation:p});D=g.record.name,E=ne({},p.params,f.params),y=g.stringify(E)}const A=[];let O=g;for(;O;)A.unshift(O.record),O=O.parent;return{name:D,path:y,params:E,matched:A,meta:Pm(A)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Da(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ma(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Cm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pm(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function xa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rm(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;fu(t,e[i])<0?r=i:n=i+1}const s=Am(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Am(t){let e=t;for(;e=e.parent;)if(hu(e)&&fu(t,e)===0)return e}function hu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Om(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ru," "),o=i.indexOf("="),a=Cr(o<0?i:i.slice(0,o)),c=o<0?null:Cr(i.slice(o+1));if(a in e){let l=e[a];Xe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function La(t){let e="";for(let n in t){const r=t[n];if(n=Jg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&Ui(i)):[r&&Ui(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function km(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Dm=Symbol(""),Ua=Symbol(""),$s=Symbol(""),du=Symbol(""),ji=Symbol("");function er(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(qn(4,{from:n,to:e})):p instanceof Error?c(p):mm(p)?c(qn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function pi(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(tu(c)){const u=(c.__vccOpts||c)[e];u&&i.push(xt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=jg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&xt(g,n,r,o,a,s)()}))}}return i}function Fa(t){const e=qe($s),n=qe(du),r=He(()=>{const c=Qt(t.to);return e.resolve(c)}),s=He(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Kn.bind(null,u));if(p>-1)return p;const g=ja(c[l-2]);return l>1&&ja(u)===g&&f[f.length-1].path!==g?f.findIndex(Kn.bind(null,c[l-2])):p}),i=He(()=>s.value>-1&&Um(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&au(n.params,r.value.params));function a(c={}){if(Lm(c)){const l=e[Qt(t.replace)?"replace":"push"](Qt(t.to)).catch(dr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Mm(t){return t.length===1?t[0]:t}const Nm=lo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fa,setup(t,{slots:e}){const n=Lr(Fa(t)),{options:r}=qe($s),s=He(()=>({[Ha(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ha(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Mm(e.default(n));return t.custom?i:zl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xm=Nm;function Lm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Um(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ja(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ha=(t,e,n)=>t??e??n,Fm=lo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qe(ji),s=He(()=>t.route||r.value),i=qe(Ua,0),o=He(()=>{let l=Qt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=He(()=>s.value.matched[o.value]);Zr(Ua,He(()=>o.value+1)),Zr(Dm,a),Zr(ji,s);const c=Ur();return ur(()=>[c.value,a.value,t.name],([l,u,f],[p,g,E])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Kn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return $a(n.default,{Component:p,route:l});const g=f.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,D=zl(p,ne({},E,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return $a(n.default,{Component:D,route:l})||D}}});function $a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pu=Fm;function jm(t){const e=Tm(t.routes,t),n=t.parseQuery||Om,r=t.stringifyQuery||La,s=t.history,i=er(),o=er(),a=er(),c=Rd(At);let l=At;Tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hi.bind(null,v=>""+v),f=hi.bind(null,Xg),p=hi.bind(null,Cr);function g(v,x){let M,j;return lu(v)?(M=e.getRecordMatcher(v),j=x):j=v,e.addRoute(j,M)}function E(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(v=>v.record)}function D(v){return!!e.getRecordMatcher(v)}function A(v,x){if(x=ne({},x||c.value),typeof v=="string"){const d=di(n,v,x.path),m=e.resolve({path:d.path},x),w=s.createHref(d.fullPath);return ne(d,m,{params:p(m.params),hash:Cr(d.hash),redirectedFrom:void 0,href:w})}let M;if(v.path!=null)M=ne({},v,{path:di(n,v.path,x.path).path});else{const d=ne({},v.params);for(const m in d)d[m]==null&&delete d[m];M=ne({},v,{params:f(d)}),x.params=f(x.params)}const j=e.resolve(M,x),se=v.hash||"";j.params=u(p(j.params));const he=tm(r,ne({},v,{hash:Qg(se),path:j.path})),h=s.createHref(he);return ne({fullPath:he,hash:se,query:r===La?km(v.query):v.query||{}},j,{redirectedFrom:void 0,href:h})}function O(v){return typeof v=="string"?di(n,v,c.value.path):ne({},v)}function P(v,x){if(l!==v)return qn(8,{from:x,to:v})}function C(v){return K(v)}function F(v){return C(ne(O(v),{replace:!0}))}function G(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:M}=x;let j=typeof M=="function"?M(v):M;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=O(j):{path:j},j.params={}),ne({query:v.query,hash:v.hash,params:j.path!=null?{}:v.params},j)}}function K(v,x){const M=l=A(v),j=c.value,se=v.state,he=v.force,h=v.replace===!0,d=G(M);if(d)return K(ne(O(d),{state:typeof d=="object"?ne({},se,d.state):se,force:he,replace:h}),x||M);const m=M;m.redirectedFrom=x;let w;return!he&&nm(r,j,M)&&(w=qn(16,{to:m,from:j}),et(j,j,!0,!1)),(w?Promise.resolve(w):Z(m,j)).catch(_=>pt(_)?pt(_,2)?_:Rt(_):ee(_,m,j)).then(_=>{if(_){if(pt(_,2))return K(ne({replace:h},O(_.to),{state:typeof _.to=="object"?ne({},se,_.to.state):se,force:he}),x||m)}else _=xe(m,j,!0,h,se);return ye(m,j,_),_})}function L(v,x){const M=P(v,x);return M?Promise.reject(M):Promise.resolve()}function U(v){const x=bn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function Z(v,x){let M;const[j,se,he]=Hm(v,x);M=pi(j.reverse(),"beforeRouteLeave",v,x);for(const d of j)d.leaveGuards.forEach(m=>{M.push(xt(m,v,x))});const h=L.bind(null,v,x);return M.push(h),Be(M).then(()=>{M=[];for(const d of i.list())M.push(xt(d,v,x));return M.push(h),Be(M)}).then(()=>{M=pi(se,"beforeRouteUpdate",v,x);for(const d of se)d.updateGuards.forEach(m=>{M.push(xt(m,v,x))});return M.push(h),Be(M)}).then(()=>{M=[];for(const d of he)if(d.beforeEnter)if(Xe(d.beforeEnter))for(const m of d.beforeEnter)M.push(xt(m,v,x));else M.push(xt(d.beforeEnter,v,x));return M.push(h),Be(M)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),M=pi(he,"beforeRouteEnter",v,x,U),M.push(h),Be(M))).then(()=>{M=[];for(const d of o.list())M.push(xt(d,v,x));return M.push(h),Be(M)}).catch(d=>pt(d,8)?d:Promise.reject(d))}function ye(v,x,M){a.list().forEach(j=>U(()=>j(v,x,M)))}function xe(v,x,M,j,se){const he=P(v,x);if(he)return he;const h=x===At,d=Tn?history.state:{};M&&(j||h?s.replace(v.fullPath,ne({scroll:h&&d&&d.scroll},se)):s.push(v.fullPath,se)),c.value=v,et(v,x,M,h),Rt()}let De;function rn(){De||(De=s.listen((v,x,M)=>{if(!Wr.listening)return;const j=A(v),se=G(j);if(se){K(ne(se,{replace:!0,force:!0}),j).catch(dr);return}l=j;const he=c.value;Tn&&um(Pa(he.fullPath,M.delta),Hs()),Z(j,he).catch(h=>pt(h,12)?h:pt(h,2)?(K(ne(O(h.to),{force:!0}),j).then(d=>{pt(d,20)&&!M.delta&&M.type===Pr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(M.delta&&s.go(-M.delta,!1),ee(h,j,he))).then(h=>{h=h||xe(j,he,!1),h&&(M.delta&&!pt(h,8)?s.go(-M.delta,!1):M.type===Pr.pop&&pt(h,20)&&s.go(-1,!1)),ye(j,he,h)}).catch(dr)}))}let Pt=er(),ue=er(),z;function ee(v,x,M){Rt(v);const j=ue.list();return j.length?j.forEach(se=>se(v,x,M)):console.error(v),Promise.reject(v)}function ht(){return z&&c.value!==At?Promise.resolve():new Promise((v,x)=>{Pt.add([v,x])})}function Rt(v){return z||(z=!v,rn(),Pt.list().forEach(([x,M])=>v?M(v):x()),Pt.reset()),v}function et(v,x,M,j){const{scrollBehavior:se}=t;if(!Tn||!se)return Promise.resolve();const he=!M&&fm(Pa(v.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return Ns().then(()=>se(v,x,he)).then(h=>h&&lm(h)).catch(h=>ee(h,v,x))}const Me=v=>s.go(v);let vn;const bn=new Set,Wr={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:y,resolve:A,options:t,push:C,replace:F,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:ht,install(v){const x=this;v.component("RouterLink",xm),v.component("RouterView",pu),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(c)}),Tn&&!vn&&c.value===At&&(vn=!0,C(s.location).catch(se=>{}));const M={};for(const se in At)Object.defineProperty(M,se,{get:()=>c.value[se],enumerable:!0});v.provide($s,x),v.provide(du,ul(M)),v.provide(ji,c);const j=v.unmount;bn.add(v),v.unmount=function(){bn.delete(v),bn.size<1&&(l=At,De&&De(),De=null,c.value=At,vn=!1,z=!1),j()}}};function Be(v){return v.reduce((x,M)=>x.then(()=>U(M)),Promise.resolve())}return Wr}function Hm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Kn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Kn(l,c))||s.push(c))}return[n,r,s]}function gu(){return qe($s)}function yo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $m=mu,yu=new Dr("auth","Firebase",mu());/**
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
 */const bs=new Ic("@firebase/auth");function Bm(t,...e){bs.logLevel<=oe.WARN&&bs.warn(`Auth (${Nr}): ${t}`,...e)}function ns(t,...e){bs.logLevel<=oe.ERROR&&bs.error(`Auth (${Nr}): ${t}`,...e)}/**
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
 */function Ze(t,...e){throw _o(t,...e)}function lt(t,...e){return _o(t,...e)}function _u(t,e,n){const r=Object.assign(Object.assign({},$m()),{[e]:n});return new Dr("auth","Firebase",r).create(e,{appName:t.name})}function Jt(t){return _u(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _o(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yu.create(t,...e)}function B(t,e,...n){if(!t)throw _o(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function St(t,e){t||bt(e)}/**
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
 */function Hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vm(){return Ba()==="http:"||Ba()==="https:"}function Ba(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Wm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vm()||lf()||"connection"in navigator)?navigator.onLine:!0}function Km(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hr{constructor(e,n){this.shortDelay=e,this.longDelay=n,St(n>e,"Short delay should be less than long delay!"),this.isMobile=of()||uf()}get(){return Wm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vo(t,e){St(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gm=new Hr(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nn(t,e,n,r,s={}){return bu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return cf()||(l.referrerPolicy="no-referrer"),vu.fetch()(Eu(t,t.config.apiHost,n,a),l)})}async function bu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qm),e);try{const s=new Qm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _u(t,u,l);Ze(t,u)}}catch(s){if(s instanceof Xt)throw s;Ze(t,"network-request-failed",{message:String(s)})}}async function Bs(t,e,n,r,s={}){const i=await nn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Eu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vo(t.config,s):`${t.config.apiScheme}://${s}`}function zm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),Gm.get())})}}function Yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=lt(t,e,r);return s.customData._tokenResponse=n,s}function Va(t){return t!==void 0&&t.enterprise!==void 0}class Jm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ym(t,e){return nn(t,"GET","/v2/recaptchaConfig",_n(t,e))}/**
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
 */async function Xm(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function wu(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=bo(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gr(gi(s.auth_time)),issuedAtTime:gr(gi(s.iat)),expirationTime:gr(gi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gi(t){return Number(t)*1e3}function bo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const s=vc(n);return s?JSON.parse(s):(ns("Failed to decode base64 JWT payload"),null)}catch(s){return ns("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wa(t){const e=bo(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&ey(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ey({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $i{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rr(t,wu(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Iu(i.providerUserInfo):[],a=ry(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $i(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function ny(t){const e=Zt(t);await Es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ry(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Iu(t){return t.map(e=>{var{providerId:n}=e,r=yo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sy(t,e){const n=await bu(t,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Eu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iy(t,e){return nn(t,"POST","/v2/accounts:revokeToken",_n(t,e))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Wa(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new kn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function Ot(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $i(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zm(this,e)}reload(){return ny(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await Rr(this,Xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:C,isAnonymous:F,providerData:G,stsTokenManager:K}=n;B(P&&K,e,"internal-error");const L=kn.fromJSON(this.name,K);B(typeof P=="string",e,"internal-error"),Ot(f,e.name),Ot(p,e.name),B(typeof C=="boolean",e,"internal-error"),B(typeof F=="boolean",e,"internal-error"),Ot(g,e.name),Ot(E,e.name),Ot(y,e.name),Ot(D,e.name),Ot(A,e.name),Ot(O,e.name);const U=new Et({uid:P,auth:e,email:p,emailVerified:C,displayName:f,isAnonymous:F,photoURL:E,phoneNumber:g,tenantId:y,stsTokenManager:L,createdAt:A,lastLoginAt:O});return G&&Array.isArray(G)&&(U.providerData=G.map(Z=>Object.assign({},Z))),D&&(U._redirectEventId=D),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new kn;s.updateFromServerResponse(n);const i=new Et({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Es(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Iu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new kn;a.updateFromIdToken(r);const c=new Et({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $i(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Ka=new Map;function wt(t){St(t instanceof Function,"Expected a class definition");let e=Ka.get(t);return e?(St(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ka.set(t,e),e)}/**
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
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Su.type="NONE";const qa=Su;/**
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
 */function rs(t,e,n){return`firebase:${t}:${e}:${n}`}class Dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rs(this.userKey,s.apiKey,i),this.fullPersistenceKey=rs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dn(wt(qa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||wt(qa);const o=rs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Et._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Dn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Dn(i,e,r))}}/**
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
 */function Ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ou(e))return"Blackberry";if(ku(e))return"Webos";if(Cu(e))return"Safari";if((e.includes("chrome/")||Pu(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tu(t=ke()){return/firefox\//i.test(t)}function Cu(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pu(t=ke()){return/crios\//i.test(t)}function Ru(t=ke()){return/iemobile/i.test(t)}function Au(t=ke()){return/android/i.test(t)}function Ou(t=ke()){return/blackberry/i.test(t)}function ku(t=ke()){return/webos/i.test(t)}function Eo(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oy(t=ke()){var e;return Eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ay(){return ff()&&document.documentMode===10}function Du(t=ke()){return Eo(t)||Au(t)||ku(t)||Ou(t)||/windows phone/i.test(t)||Ru(t)}/**
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
 */function Mu(t,e=[]){let n;switch(t){case"Browser":n=Ga(ke());break;case"Worker":n=`${Ga(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
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
 */class cy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ly(t,e={}){return nn(t,"GET","/v2/passwordPolicy",_n(t,e))}/**
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
 */const uy=6;class fy{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hy{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new za(this),this.idTokenSubscription=new za(this),this.beforeStateQueue=new cy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wu(this,{idToken:e}),r=await Et._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Jt(this));const n=e?Zt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ly(this),n=new fy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Bm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return Zt(t)}class za{constructor(e){this.auth=e,this.observer=null,this.addObserver=_f(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dy(t){Vs=t}function Nu(t){return Vs.loadJS(t)}function py(){return Vs.recaptchaEnterpriseScript}function gy(){return Vs.gapiScript}function my(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class yy{constructor(){this.enterprise=new _y}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _y{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vy="recaptcha-enterprise",xu="NO_RECAPTCHA";class by{constructor(e){this.type=vy,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ym(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Va(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(xu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yy().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Va(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=py();c.length!==0&&(c+=a),Nu(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Qa(t,e,n,r=!1,s=!1){const i=new by(t);let o;if(s)o=xu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ja(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qa(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Qa(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function Ey(t,e){const n=Cc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(as(i,e??{}))return s;Ze(s,"already-initialized")}return n.initialize({options:e})}function wy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Iy(t,e,n){const r=zn(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lu(e),{host:o,port:a}=Sy(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ty()}function Lu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sy(t){const e=Lu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ya(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ya(o)}}}function Ya(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ty(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function Cy(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Py(t,e){return Bs(t,"POST","/v1/accounts:signInWithPassword",_n(t,e))}/**
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
 */async function Ry(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}async function Ay(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}/**
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
 */class Ar extends wo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ar(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,n,"signInWithPassword",Py);case"emailLink":return Ry(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,r,"signUpPassword",Cy);case"emailLink":return Ay(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mn(t,e){return Bs(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
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
 */const Oy="http://localhost";class mn extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mn(e,n)}buildRequest(){const e={requestUri:Oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mr(n)}return e}}/**
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
 */function ky(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dy(t){const e=tr(nr(t)).link,n=e?tr(nr(e)).deep_link_id:null,r=tr(nr(t)).deep_link_id;return(r?tr(nr(r)).link:null)||r||n||e||t}class Io{constructor(e){var n,r,s,i,o,a;const c=tr(nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=ky((s=c.mode)!==null&&s!==void 0?s:null);B(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dy(e);try{return new Io(n)}catch{return null}}}/**
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
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Io.parseLink(n);return B(r,"argument-error"),Ar._fromEmailAndCode(e,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $r extends Uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends $r{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Ft extends $r{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class jt extends $r{constructor(){super("twitter.com")}static credential(e,n){return mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Et._fromIdTokenResponse(e,r,s),o=Xa(r);return new Gn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xa(r);return new Gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ws extends Xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ws.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ws(e,n,r,s)}}function Fu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ws._fromErrorAndOperation(t,i,e,r):i})}async function My(t,e,n=!1){const r=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
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
 */async function Ny(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Jt(r));const s="reauthenticate";try{const i=await Rr(t,Fu(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=bo(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),Gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),i}}/**
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
 */async function ju(t,e,n=!1){if(vt(t.app))return Promise.reject(Jt(t));const r="signIn",s=await Fu(t,r,e),i=await Gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xy(t,e){return ju(zn(t),e)}/**
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
 */async function Ly(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Uy(t,e,n){return vt(t.app)?Promise.reject(Jt(t)):xy(Zt(t),Qn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ly(t),r})}function Fy(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function jy(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}function Hy(t,e,n,r){return Zt(t).onAuthStateChanged(e,n,r)}const Is="__sak";/**
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
 */class Hu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $y=1e3,By=10;class $u extends Hu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Du(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ay()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,By):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$y)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$u.type="LOCAL";const Vy=$u;/**
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
 */class Bu extends Hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bu.type="SESSION";const Vu=Bu;/**
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
 */function Wy(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ws{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ws(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Wy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
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
 */function So(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ky{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=So("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ut(){return window}function qy(t){ut().location.href=t}/**
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
 */function Wu(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qy(){return Wu()?self:null}/**
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
 */const Ku="firebaseLocalStorageDb",Jy=1,Ss="firebaseLocalStorage",qu="fbase_key";class Br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Yy(){const t=indexedDB.deleteDatabase(Ku);return new Br(t).toPromise()}function Bi(){const t=indexedDB.open(Ku,Jy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ss,{keyPath:qu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ss)?e(r):(r.close(),await Yy(),e(await Bi()))})})}async function Za(t,e,n){const r=Ks(t,!0).put({[qu]:e,value:n});return new Br(r).toPromise()}async function Xy(t,e){const n=Ks(t,!1).get(e),r=await new Br(n).toPromise();return r===void 0?null:r.value}function ec(t,e){const n=Ks(t,!0).delete(e);return new Br(n).toPromise()}const Zy=800,e_=3;class Gu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Qy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gy(),!this.activeServiceWorker)return;this.sender=new Ky(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await Za(e,Is,"1"),await ec(e,Is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Za(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ec(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gu.type="LOCAL";const t_=Gu;new Hr(3e4,6e4);/**
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
 */function n_(t,e){return e?wt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class To extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r_(t){return ju(t.auth,new To(t),t.bypassAuthState)}function s_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Ny(n,new To(t),t.bypassAuthState)}async function i_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),My(n,new To(t),t.bypassAuthState)}/**
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
 */class zu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r_;case"linkViaPopup":case"linkViaRedirect":return i_;case"reauthViaPopup":case"reauthViaRedirect":return s_;default:Ze(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o_=new Hr(2e3,1e4);class Cn extends zu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o_.get())};e()}}Cn.currentPopupAction=null;/**
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
 */const a_="pendingRedirect",ss=new Map;class c_ extends zu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ss.get(this.auth._key());if(!e){try{const r=await l_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l_(t,e){const n=h_(e),r=f_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function u_(t,e){ss.set(t._key(),e)}function f_(t){return wt(t._redirectPersistence)}function h_(t){return rs(a_,t.config.apiKey,t.name)}async function d_(t,e,n=!1){if(vt(t.app))return Promise.reject(Jt(t));const r=zn(t),s=n_(r,e),o=await new c_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const p_=10*60*1e3;class g_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p_&&this.cachedEventUids.clear(),this.cachedEventUids.has(tc(e))}saveEventToCache(e){this.cachedEventUids.add(tc(e)),this.lastProcessedEventTime=Date.now()}}function tc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qu(t);default:return!1}}/**
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
 */async function y_(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
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
 */const __=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v_=/^https?/;async function b_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y_(t);for(const n of e)try{if(E_(n))return}catch{}Ze(t,"unauthorized-domain")}function E_(t){const e=Hi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v_.test(n))return!1;if(__.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const w_=new Hr(3e4,6e4);function nc(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I_(t){return new Promise((e,n)=>{var r,s,i;function o(){nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nc(),n(lt(t,"network-request-failed"))},timeout:w_.get()})}if(!((s=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const a=my("iframefcb");return ut()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},Nu(`${gy()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw is=null,e})}let is=null;function S_(t){return is=is||I_(t),is}/**
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
 */const T_=new Hr(5e3,15e3),C_="__/auth/iframe",P_="emulator/auth/iframe",R_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O_(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vo(e,P_):`https://${t.config.authDomain}/${C_}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},s=A_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mr(r).slice(1)}`}async function k_(t){const e=await S_(t),n=ut().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:O_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ut().setTimeout(()=>{i(o)},T_.get());function c(){ut().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const D_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M_=500,N_=600,x_="_blank",L_="http://localhost";class rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U_(t,e,n,r=M_,s=N_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},D_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=Pu(l)?x_:n),Tu(l)&&(e=e||L_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(oy(l)&&a!=="_self")return F_(e||"",a),new rc(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new rc(f)}function F_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j_="__/auth/handler",H_="emulator/auth/handler",$_=encodeURIComponent("fac");async function sc(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:s};if(e instanceof Uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof $r){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$_}=${encodeURIComponent(c)}`:"";return`${B_(t)}?${Mr(a).slice(1)}${l}`}function B_({config:t}){return t.emulator?vo(t,H_):`https://${t.authDomain}/${j_}`}/**
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
 */const mi="webStorageSupport";class V_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=d_,this._overrideRedirectResult=u_}async _openPopup(e,n,r,s){var i;St((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sc(e,n,r,Hi(),s);return U_(e,o,So())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await sc(e,n,r,Hi(),s);return qy(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(St(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await k_(e),r=new g_(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mi,{type:mi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mi];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Du()||Cu()||Eo()}}const W_=V_;var ic="@firebase/auth",oc="1.8.1";/**
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
 */class K_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function q_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G_(t){mr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mu(t)},l=new hy(r,s,i,c);return wy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new Vn("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new K_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(ic,oc,q_(t)),sr(ic,oc,"esm2017")}/**
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
 */const z_=5*60,Q_=wc("authIdTokenMaxAge")||z_;let ac=null;const J_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q_)return;const s=n==null?void 0:n.token;ac!==s&&(ac=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Y_(t=vh()){const e=Cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ey(t,{popupRedirectResolver:W_,persistence:[t_,Vy,Vu]}),r=wc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=J_(i.toString());jy(n,o,()=>o(n.currentUser)),Fy(n,a=>o(a))}}const s=bc("auth");return s&&Iy(n,`http://${s}`),n}function X_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",X_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G_("Browser");const Ju=Symbol();function Z_(){return qe(Ju)}const Co=Fg("auth",()=>{const t=Z_(),e=Y_(t),n=Ur(null),r=He(()=>n.value!==null);Hy(e,o=>{n.value=o});async function s(o){const{email:a,password:c}=o;return await Uy(e,a,c),n}async function i(){await e.signOut()}return{isPerformed:r,login:s,logout:i,user:n}}),Tv=()=>{const t=Co(),e=gu();return t.isPerformed?t.user:(e.push({name:"login"}),null)},ev=lo({__name:"App",setup(t){const e=Co(),n=gu();return Tp(()=>{n.currentRoute.value.meta.secured&&!e.isPerformed&&n.push({name:"login"}),n.currentRoute.value.meta.guest&&e.isPerformed&&n.push({name:"products"})}),(r,s)=>(ms(),ys(Qt(pu)))}}),tv="modulepreload",nv=function(t){return"/diet-diary-web/"+t},cc={},In=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=nv(c),c in cc)return;cc[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":tv,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Vi=jm({history:gm("/diet-diary-web"),routes:[{component:()=>In(()=>import("./ProfileView-ZZw7iLMN.js"),__vite__mapDeps([0,1,2,3,4,5])),meta:{secured:!0},name:"profile",path:"/profile"},{component:()=>In(()=>import("./IntakesView-DWPhMzPl.js"),__vite__mapDeps([6,1,2,3,4,7,8,9])),meta:{secured:!0},name:"intakes",path:"/intakes"},{component:()=>In(()=>import("./ProductsView-DFv13wdH.js"),__vite__mapDeps([10,1,2,3,4,7,8,11])),meta:{secured:!0},name:"products",path:"/products"},{component:()=>In(()=>import("./LoginView-E8nqaKs9.js"),__vite__mapDeps([12,2,3,13])),meta:{guest:!0},name:"login",path:"/login"},{component:()=>In(()=>import("./LogoutView-DBAGJuZX.js"),[]),meta:{secured:!0},name:"logout",path:"/logout"},{component:()=>In(()=>import("./ProductsView-DFv13wdH.js"),__vite__mapDeps([10,1,2,3,4,7,8,11])),meta:{secured:!0},name:"notFound",path:"/:catchAll(.*)"}]});Vi.beforeEach((t,e,n)=>{const r=Co();if(Vi.getRoutes().some(s=>s.path===t.path),t.meta.guest&&r.isPerformed){n({name:"home"});return}if(t.meta.secured&&!r.isPerformed){n({name:"login"});return}n()});const rv={apiKey:"AIzaSyB7prWjocxdvIh6PhMPpmP4stg1lH0xlHg",appId:"1:636029346099:web:c1ec9cf5be73a3704f9e46",authDomain:"diet-diary-3ee89.firebaseapp.com",messagingSenderId:"636029346099",projectId:"diet-diary-3ee89",storageBucket:"diet-diary-3ee89.firebasestorage.app"},sv=Pc(rv),Vr=vg(ev);Vr.use(Dg());Vr.use(Vi);Vr.use(kg,{queryClientConfig:{defaultOptions:{mutations:{gcTime:0,networkMode:"online",retry:!1,throwOnError:!1},queries:{enabled:!0,gcTime:0,networkMode:"online",placeholderData:null,refetchInterval:!1,refetchIntervalInBackground:!1,refetchOnMount:!0,refetchOnReconnect:!0,refetchOnWindowFocus:!1,retry:!1,retryOnMount:!1,staleTime:0,structuralSharing:!0,throwOnError:!1}}}});Vr.provide(Ju,sv);Vr.mount("#app");export{Vn as $,lv as A,Ho as B,Qe as C,xr as D,Oh as E,We as F,kh as G,Dc as H,Vh as I,Nh as J,Ae as K,_r as L,qh as M,hp as N,qe as O,Sg as P,J as Q,ul as R,Cs as S,pv as T,Iv as U,cd as V,Sv as W,kd as X,mv as Y,Ic as Z,mr as _,lo as a,sr as a0,Xt as a1,oe as a2,Nr as a3,Zt as a4,vh as a5,Cc as a6,ov as a7,av as a8,cv as a9,ke as aa,Z_ as ab,de as ac,gv as ad,Co as ae,xm as af,zd as ag,ys as b,He as c,Fg as d,$d as e,Ne as f,Up as g,Qt as h,vv as i,yv as j,Ur as k,bv as l,wv as m,Xi as n,ms as o,Kl as p,dv as q,Lr as r,Fp as s,ad as t,Tv as u,Ev as v,ur as w,_v as x,jh as y,Dh as z};
