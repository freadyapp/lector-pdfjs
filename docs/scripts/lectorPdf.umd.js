(function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('process'), require('canvas'), require('fs'), require('zlib'), require('http'), require('https'), require('url')) :
      typeof define === 'function' && define.amd ? define(['exports', 'process', 'canvas', 'fs', 'zlib', 'http', 'https', 'url'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lectorPdf = {}, global.process$1, global.require$$0, global.require$$1, global.require$$2, global.require$$3, global.require$$4, global.require$$5));
}(this, (function (exports, process$1, require$$0, require$$1, require$$2, require$$3, require$$4, require$$5) { 'use strict';

      function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

      var process__default = /*#__PURE__*/_interopDefaultLegacy(process$1);
      var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
      var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
      var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
      var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
      var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
      var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);

      function e$1(t,e=null,n=["rerun the code 10 times"],i=null,r=!1){if(!O$2()&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function n$1(){if(!O$2())return null;console.log(...arguments);}function i$1(){if(!O$2())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class r$1{constructor(t){this.self=t,this.actions=new Map,this.delete=this.destroy;}addWithKey(t,e=null){return e=e||this.actions.size,this.actions.set(e,t),e}add(...t){let e=[];for(let n of t)e.push(this.addWithKey(n));return e.length>1?e:e[0]}forAction(t){for(let[e,n]of this.actions)t(e,n);}exec(...t){this.execAs(this.self,...t);}destroy(...t){t.forEach((t=>this.actions.delete(t)));}execAs(t,...e){this.forAction(((n,i)=>{let r=null;if(r="function"==typeof i.bind?i.bind(t)(...e):i(...e),"function"==typeof r){r({key:n,action:i,replaceWith:t=>{},selfDestruct:()=>{this.destroy(n);}});}}));}}function s$1(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function o$1(){return a$1(8)}function a$1(t=7){return t<5?s$1():(s$1()+a$1(t-5)).substring(0,t)}function l$2(t){return a$1(t)}function h$2(t,e){for(let[n,i]of Object.entries(e))t[n]=i;return t}const c$2=t=>t.replace(/([-_]\w)/g,(t=>t[1].toUpperCase()));function u$2(t,e){let n=`${t}Chain`,i=`on${t.capitalize()}`;return e[n]=new r$1(e),e[i]=function(t,i){e[n].addWithKey(t,i);},{chainName:n,eventName:i}}function f$2(t,...e){for(let n of e)u$2(n,t);}function d$2(t,e){let n=u$2(t,e),i=`is${t.capitalize()}ed`;e[n.chainName].add((()=>{e[i]=!0;})),e[n.eventName]=function(t){if(e[i])return t(e);e[n.chainName].add(t);};}function p$2(t,...e){for(let n of e)d$2(n,t);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const m$2=t=>t.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),p$2(globalThis.pragmaSpace,"docLoad");const g$2=globalThis.pragmaSpace.onDocLoad;function y$2(){globalThis.pragmaSpace.isDocLoaded||(i$1("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}"complete"===document.readyState?y$2():(document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&y$2();})),document.addEventListener("turbolinks:load",(()=>{i$1("🚀 TURBOLINKS loaded"),y$2();})));var v$2=/[#.]/g;function b$2(t,e="div"){var n=t||"",i={tag:e},r=0;let s,o,a;for(;r<n.length;)v$2.lastIndex=r,a=v$2.exec(n),s=n.slice(r,a?a.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),a&&(o=a[0],r++);return i}function x$2(t,n,i){if(!Array.isArray(t))return e$1(`Could not ${i} class [${t}] -> [${n}]`);for(let e of t){let t=e.split(" ");t.length>1?x$2(t,n,i):n.classList[i](e);}}function $$2(t,e){x$2(t,e,"add");}function _$2(t,e){x$2(t,e,"remove");}function C$2(t,e){x$2(t,e,"toggle");}function E$2(t){t=t.trim();try{let e=document.querySelector(t);if(e)return e}catch{}let e=b$2(t),n=document.createElement(e.tag||"div");return e.id&&(n.id=e.id),e.class&&$$2(e.class,n),n}function T$2(t){return document.createRange().createContextualFragment(t)}function A$2(t){return t instanceof Element?t:"string"==typeof t?"<"===t[0]?T$2(t):E$2(t):e$1(`Could not find/create element from [${t}]`)}const w$2={html:(t,e)=>{e.innerHTML=t;},pcss:(t,e)=>{for(let[n,i]of S$2.cssToDict(t))e.style[c$2(n)]=i;}},S$2={cssToDict:t=>{t=t.replace(/\n/g,";").replace(/:/g," ");let n=new Map;for(let e of t.split(";")){if(e.replace(/\s/g,"").length<2)continue;e=e.trim().split(" ");let t=e[0];e.shift(),n.set(t.trim(),e.join(" ").trim());}let i=[];for(const[t,e]of n.entries())CSS.supports(t,e)||i.push(`${t.trim()}: ${e.trim()}`);return i.length>0&&e$1("CSS syntax error","typos",i),n},css:t=>{let e="";for(let[n,i]of S$2.cssToDict(t))e+=`${n}:${i};`;return e},html:t=>t};function O$2(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process__default['default']&&process__default['default'].env&&"development"===process__default['default'].env.NODE_ENV;var M$2=Object.freeze({__proto__:null,_deving:O$2,throwSoft:e$1,log:n$1,suc:i$1,whenDOM:g$2,parseQuery:b$2,addClassAryTo:$$2,removeClassAryFrom:_$2,toggleClassAryOf:C$2,selectOrCreateDOM:E$2,elementFrom:A$2,toHTMLAttr:m$2,fragmentFromString:T$2,fillSVG:function(t,e){j$2(t).findAll("path").forEach((t=>{const n=t.attr("fill");"none"!=n&&"transparent"!=n&&t.attr("fill",e);}));},generateRandomKey:l$2,objDiff:h$2,aryDiff:function(t,e){return t.filter((t=>e.indexOf(t)<0))},_extend:function(t,e){Object.setPrototypeOf(t,h$2(Object.getPrototypeOf(t),e));},overwrite:function(t,e,n){let i=t[e];t[`_${e}`]=i.bind(t),t[e]=n;},createEventChains:p$2,createChains:f$2,snake2camel:c$2,mimic:function(t,e,n){for(let i of n||Object.keys(e)){let n=Object.getOwnPropertyDescriptor(e,i);if(!n)break;Object.defineProperty(t,i,n);}},bench:function(t,e){console.time(e),t(),console.timeEnd(e);},addStyles:function(t,e="injected-pragma-style"){j$2(`style#${e}-${s$1()}`,t).appendTo("head");},redirectTo:function(t,e=!1){history?.pushState({},document.title),Y$2`<a href="${t}" ${e?'target="_blank"':""}</a>`.click();},rk:a$1,rk5:s$1,rk8:o$1,parse:S$2,apply:w$2,createTemplate:t=>(new q$2).run((function(){f$2(this,"config"),this.config=function(t){return this.configChain.exec(t),this},this.onConfig(((t={})=>{["events","chains","exports","persistentExports"].forEach((e=>{t[e]&&(this[`_${e}`]=t[e],delete t[e]);})),this._events&&p$2(this,...this._events),this._chains&&f$2(this,...this._chains);for(let[e,n]of Object.entries(t))this[e]=n,this.export(e);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof t&&this.config(t);}))});function k$2(t){if(null==t||null==t)return e$1(`Could not find a DOM element for ${t}`);if(t.element)return k$2(t.element);return A$2(t)}function j$2(t,n){let i=k$2(t);return i?(i.constructor===DocumentFragment&&(r=i,(s=document.createElement("template")).appendChild(r.cloneNode(!0)),i=s.firstChild),i instanceof Element&&(i.init(),i._render()),"string"==typeof n&&i.html(n),i):e$1(`${t} could not be found/created`);var r,s;}const L$2={init:function(){this.isPragmaElement=!0,p$2(this,"docLoad","render"),g$2((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(t){return this.onDocLoad((()=>{this._parentElement=k$2(t),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(t){return this.onDocLoad((()=>{this._parentElement=k$2(t),this._parentElement.prepend(this),this._render();})),this},append:function(...t){return this.onRender((()=>{for(let e of t){let t=k$2(e);this.appendChild(t);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(t){return this.onRender((()=>{w$2.pcss(t,this);})),this},setText:function(t){return t?(this.onRender((()=>{this.textContent=t;})),this):this.text},html:function(t){return null==t?this.innerHTML:(this.onRender((()=>{w$2.html(t,this);})),this)},setId:function(t){return this.id=t,this},setData:function(t){for(let[e,n]of Object.entries(t))this.dataset[e]=n;return this},getData:function(t){return this.dataset[t]},addClass:function(...t){return $$2(t,this),this},removeClass:function(...t){return _$2(t,this),this},toggleClass:function(...t){return C$2(t,this),this},listenTo:function(...t){return this.onRender((()=>{this.addEventListener(...t);})),this},clone:function(t=!0){return this.cloneNode(t)},attr:function(t,e=null){if("string"==typeof t){if(null===e)return this.getAttribute(t);const n=t;(t={})[n]=e;}for(let[e,n]of Object.entries(t))this.setAttribute(e,n);return this},find:function(){return j$2(this.query(...arguments))},define:function(t){this.setData(t);for(let[e,n]of Object.entries(t))this[e]=this.id?`#${this.id}>${n}`:n;return this},findAll:function(t){return Array.from(this.queryAll(t)).map((t=>j$2(t)))},query:function(){return this.querySelector(...arguments)},queryAll:function(t){return this.querySelectorAll(t)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(t){let e=Array.from(this.queryAll(t));for(let n of this.children)e=e.concat(n.deepQueryAll(t));return e},deepFindAll:function(t){return this.deepQueryAll(t).map((t=>j$2(t)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(t){if(t){["width","height","left","right","top","bottom"].forEach((e=>{e in t&&(this.style[e]=t[e]+"px");}));}var e=this.rect();return {top:e.top+window.scrollY,left:e.left+window.scrollX}},x:function(t){return this.left+this.width/2-t/2}},D$2={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[t,e]of Object.entries(L$2))Element.prototype[t]=e;for(let[t,e]of Object.entries(D$2))Object.defineProperty(Element.prototype,t,{get:e,configurable:!0});class P$2{constructor(t){this._childMap=new Map,this.key="string"==typeof t?t:o$1(),this.containsKey=this.childMap.has;}set childMap(t){for(let[e,n]of t)n instanceof P$2&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let n=e.allChildren;n&&(t=t.concat(n));}return t}get(t){return this.childMap.get(t)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let e of this.childMap.values()){let n;try{n=e.find(t);}catch{}if(n)return n}}adopt(...t){for(let e of t)this.add(e);return this}add(t,n=!1){return t?!n&&this.childMap.has(t.key)?(t.key=`${t.key}<${s$1()}`,this.add(t)):(t.parent=this,void this.childMap.set(t.key,t)):e$1(`Could not add [${t}] to [${this.id}]`)}delete(t){return this.remove(t)}remove(t){this.childMap.get(t)&&this.childMap.delete(t);}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let n of this.children)e+=n.shapePrefix(t);}return e}}const R$2={parent:(t,e)=>{t.parent=e;},value:(t,e)=>{t.value=e;},key:(t,e)=>{t.key=e;},class:(t,e)=>{t._class=e;},element:(t,n)=>{if(!(n instanceof Element))return e$1(`Could not add ${n} as the element of [${t}]`);t.element=n;},children:(t,e)=>{if(e.constructor==Array)return t.buildAry(e);t.build(e);},childTemplate:(t,e)=>{}};function z$2(t,e){return {val:t,set:e}}function N$2(t,e){return t=e.min?Math.max(e.min,t):t,t=e.max?Math.min(e.max,t):t}function K$2(t,n){return function(t){return t&&null!=t.min&&null!=t.max}(n)?(null==t&&(t=n.min),t=(t=t>n.max?n.min:t)<n.min?n.max:t):e$1(`Could not loop value, since range (${JSON.stringify(n)}) is unbounded`)}class q$2 extends P$2{constructor(t,e){super(),p$2(this,"export"),this.actionChain=new r$1,this._events=new Map,"object"==typeof t?function(t,e){let n=new Map;for(let[i,r]of Object.entries(t))R$2.hasOwnProperty(i)?R$2[i](e,r):n.set(i,r);e.element&&e.element.whenInDOM((t=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();t.listenTo(n,(()=>{e.action(r);}));}}));}(t,this):this.key=t,this.element||this.as(),this.init(...arguments);}init(){return this}listenTo(t,e){return this.element.listenTo(t,e.bind(this)),this}_createEvent(t){let e=new r$1(this);return this._events.set(t,e),e}createEvent(t,...e){return this._createEvent(t),e.length>0&&this.on(t,e),this}createEvents(...t){return t.forEach((t=>this._createEvent(t))),this}_getOrCreateEvent(t){return this._events.get(t)||this._createEvent(t)}_addToEventChain(t,...e){let n=this._getOrCreateEvent(t);if(n){let i=n.add(...e);return this._events.set(t,n),i}return null}triggerEvent(t,...e){return this._getOrCreateEvent(t).execAs(this,...e),this}triggerEvents(t,...e){return t.forEach((t=>this.triggerEvent(t,...e))),this}_on(t,...e){return this._addToEventChain(t,...e)}on(){return this._on(...arguments),this}_onNext(t,e){this._on(t,(function(){return e(...arguments),t=>{t.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...t){return t.forEach((t=>this.createWire(t))),this}createWire(t,e){let n={change:`${t}Change`,set:`${t}Set`};return this.createEvents(n.change,n.set),Object.defineProperty(this,t,{set:e=>{let i=function(t,e,n){if(n)return z$2(K$2(t,n),!0);if(e){let n=N$2(t,e);return z$2(n,n===t)}return z$2(t,!0)}(e,this[`_${t}Range`],this[`_${t}Loop`]);const r=this[`_${t}`];i.set&&i.val!==r&&(this[`_${t}`]=i.val,this.triggerEvent(n.change,i.val,r)),this.triggerEvent(n.set,e,r);},get:()=>this[`_${t}`]}),this[`set${t.capitalize()}`]=e=>(this[`${t}`]=e,this),this[`set${t.capitalize()}Silently`]=e=>(this[`_${t}`]=e,this),this[`set${t.capitalize()}Loop`]=(e,n)=>(this[`_${t}Loop`]={min:e,max:n},this),this[`set${t.capitalize()}Range`]=(e,n)=>(this[`_${t}Range`]={min:e,max:n},this),void 0!==e&&(this[`_${t}`]=e),this}get _e(){return this.element}setElement(t,e=!0){return this.elementDOM=t,e&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(t){this.setElement(t);}setRange(t=null,e=null){return this.range=this.range||{},this.range.min=null===t?this.range.min:t,this.range.max=null===e?this.range.max:e,this}breakLoop(){return this._loopVal=!1,this}setLoop(t,e){return this.setRange(t,e),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(t){return this.value=t,this}set value(t){let e=function(t,e,n){if(!e)return z$2(t,!0);if(n)return z$2(K$2(t,e),!0);let i=N$2(t,e);return z$2(i,i==t)}(t,this.range,this._loopVal);e.set&&(this._lv=this.v,this.v=e.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(t){return this.key=t,this}set key(t){this._KEY=null==t?l$2():t;}get key(){return this._KEY}set id(t){this.element&&(this.element.id=this.id);}get id(){return m$2(this.key)}buildAry(t){for(let e of t)this.add(new q$2(e,this));return this}build(...t){return this.buildAry(t)}as(t=null,e){return t=t||`div#${this.id}.pragma`,this.setElement(j$2(t,e),!1),this}asClone(t,e){return this.as(j$2(t).clone(),e),this}addExport(t){this.exports=this.exports||new Set,this.exports.add(t);}export(...t){for(let e of t)this.addExport(e);}import(...e){let n=new r$1;for(let i of e)"function"==typeof i&&(i=i()),i.exports&&M$2.mimic(this,i,i.exports),i.exportChain&&n.add((t=>{i.exportChain.exec(this);}));return n.exec(),this}from(e){return e.exports&&M$2.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(t){let e=this;return t.do((function(){e.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,n){return M$2.overwrite(this,e,n),this}define({...t}){for(let[e,n]of Object.entries(t)){if(!e)return console.error("could not define, no name passed",n);"function"==typeof n?this[e]=n:"string"==typeof n?this[e]=this.element.find(n):console.error("could not define",e);}return this}run(...t){let n=t[0];return "function"==typeof n?this._runAry(t):"object"==typeof n?this._runAry(Object.values(n)):e$1(`Could not run [${t}] as [${this}]`),this}_runAry(t){for(let e of t)this.runAs(e);}runAs(t){return t.bind(this)()}containAry(t,n="append"){for(let i of t)super.add(i),i.isRendered?e$1(`[${i}] is already appended`):this.element[n](i);return this}contain(...t){return this.containAry(t)}containFirst(...t){return this.containAry(t.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(t){return this.element.appendTo(t),this}renderTo(t){return j$2(t).html("").append(this.element),this.triggerEvent("render"),this}addListeners(t){for(let[e,n]of Object.entries(t))this.on(e).do(n);return this}}const W$2=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let t of W$2)q$2.prototype[t]=function(){return this.element[t](...arguments),this};const F$2=["getData"];for(let t of F$2)q$2.prototype[t]=function(){return this.element[t](...arguments)};const I$2=["offset","text","top","left","width","height","x","classArray"];for(let t of I$2)Object.defineProperty(q$2.prototype,t,{get:function(){return this.element[t]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(t){"function"==typeof t&&(q$2.prototype.bind=function(e,n,i){let r=this;return t.bind(e,(function(){return r.runAs(n)}),i),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i$1("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(t){n$1("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class V$2{static map=new Set;static load(t,e=s$1()){return new Promise((n=>{console.time(`[${e}] ${t} load`);let i=`${e}-script`;if(V$2.map.has(t)||0!=j$2("head").findAll(`#${i}`).length)return n();V$2.map.add(t);let r=Y$2`
        <script id="${i}" crossorigin src="${t}"></script>
      `.appendTo("head").listenTo("load",(function(){n(r),console.timeEnd(`[${i}] ${t} load`);}));}))}}function U$2(t){let e=`\n    onmessage = e => postMessage(JSON.stringify((${t.toString()})(e.data))) \n  `;var n=new Blob([e],{type:"application/javascript"}),i=new Worker(URL.createObjectURL(n));return function(){return i.postMessage(arguments),new Promise((t=>{i.addEventListener("message",(e=>t(JSON.parse(e.data))));}))}}function B$2(t){return new Promise((e=>e(t())))}function Q$2(...t){return B$2((()=>{for(let e of t)B$2(e);}))}const H$2=(t,e)=>new q$2(t,e),J$2=H$2;function Y$2(t,...e){return j$2(e.reduce(((e,n,i)=>`${e}${n}${t[i+1]}`),t[0]).trim())}function G$2(t,...e){let n=Y$2(t,...e);return J$2().as(n)}const X$2=["_e","_p","Pragma","util","block","html"];function Z$2(){let t=(globalThis||window).pragma;if(t&&"undefined"!==t&&t.__esModule)for(let e of X$2)globalThis[e]=t[e];else console.error("[pragmajs] seems to be missing...");}

      var pragma_esm = /*#__PURE__*/Object.freeze({
            __proto__: null,
            ActionChain: r$1,
            Pragma: q$2,
            Script: V$2,
            _e: j$2,
            _p: J$2,
            _runAsync: B$2,
            _thread: U$2,
            block: G$2,
            globalify: Z$2,
            html: Y$2,
            runAsync: Q$2,
            util: M$2,
            π: H$2
      });

      /*
       * anime.js v3.2.1
       * (c) 2020 Julian Garnier
       * Released under the MIT license
       * animejs.com
       */

      // Defaults

      var defaultInstanceSettings = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: 'normal',
        autoplay: true,
        timelineOffset: 0
      };

      var defaultTweenSettings = {
        duration: 1000,
        delay: 0,
        endDelay: 0,
        easing: 'easeOutElastic(1, .5)',
        round: 0
      };

      var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

      // Caching

      var cache = {
        CSS: {},
        springs: {}
      };

      // Utils

      function minMax(val, min, max) {
        return Math.min(Math.max(val, min), max);
      }

      function stringContains(str, text) {
        return str.indexOf(text) > -1;
      }

      function applyArguments(func, args) {
        return func.apply(null, args);
      }

      var is = {
        arr: function (a) { return Array.isArray(a); },
        obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
        pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
        svg: function (a) { return a instanceof SVGElement; },
        inp: function (a) { return a instanceof HTMLInputElement; },
        dom: function (a) { return a.nodeType || is.svg(a); },
        str: function (a) { return typeof a === 'string'; },
        fnc: function (a) { return typeof a === 'function'; },
        und: function (a) { return typeof a === 'undefined'; },
        nil: function (a) { return is.und(a) || a === null; },
        hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
        rgb: function (a) { return /^rgb/.test(a); },
        hsl: function (a) { return /^hsl/.test(a); },
        col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
        key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
      };

      // Easings

      function parseEasingParameters(string) {
        var match = /\(([^)]+)\)/.exec(string);
        return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
      }

      // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

      function spring(string, duration) {

        var params = parseEasingParameters(string);
        var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
        var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
        var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
        var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
        var w0 = Math.sqrt(stiffness / mass);
        var zeta = damping / (2 * Math.sqrt(stiffness * mass));
        var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
        var a = 1;
        var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

        function solver(t) {
          var progress = duration ? (duration * t) / 1000 : t;
          if (zeta < 1) {
            progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
          } else {
            progress = (a + b * progress) * Math.exp(-progress * w0);
          }
          if (t === 0 || t === 1) { return t; }
          return 1 - progress;
        }

        function getDuration() {
          var cached = cache.springs[string];
          if (cached) { return cached; }
          var frame = 1/6;
          var elapsed = 0;
          var rest = 0;
          while(true) {
            elapsed += frame;
            if (solver(elapsed) === 1) {
              rest++;
              if (rest >= 16) { break; }
            } else {
              rest = 0;
            }
          }
          var duration = elapsed * frame * 1000;
          cache.springs[string] = duration;
          return duration;
        }

        return duration ? solver : getDuration;

      }

      // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

      function steps(steps) {
        if ( steps === void 0 ) steps = 10;

        return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
      }

      // BezierEasing https://github.com/gre/bezier-easing

      var bezier = (function () {

        var kSplineTableSize = 11;
        var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

        function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
        function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
        function C(aA1)      { return 3.0 * aA1 }

        function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
        function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i = 0;
          do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
          } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
          return currentT;
        }

        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < 4; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) { return aGuessT; }
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }

        function bezier(mX1, mY1, mX2, mY2) {

          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
          var sampleValues = new Float32Array(kSplineTableSize);

          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          }

          function getTForX(aX) {

            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }

            --currentSample;

            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);

            if (initialSlope >= 0.001) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
              return guessForT;
            } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }

          }

          return function (x) {
            if (mX1 === mY1 && mX2 === mY2) { return x; }
            if (x === 0 || x === 1) { return x; }
            return calcBezier(getTForX(x), mY1, mY2);
          }

        }

        return bezier;

      })();

      var penner = (function () {

        // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var eases = { linear: function () { return function (t) { return t; }; } };

        var functionEasings = {
          Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
          Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
          Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
          Bounce: function () { return function (t) {
            var pow2, b = 4;
            while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
            return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
          }; },
          Elastic: function (amplitude, period) {
            if ( amplitude === void 0 ) amplitude = 1;
            if ( period === void 0 ) period = .5;

            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function (t) {
              return (t === 0 || t === 1) ? t : 
                -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
            }
          }
        };

        var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

        baseEasings.forEach(function (name, i) {
          functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
        });

        Object.keys(functionEasings).forEach(function (name) {
          var easeIn = functionEasings[name];
          eases['easeIn' + name] = easeIn;
          eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
          eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
            1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
          eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
            (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
        });

        return eases;

      })();

      function parseEasings(easing, duration) {
        if (is.fnc(easing)) { return easing; }
        var name = easing.split('(')[0];
        var ease = penner[name];
        var args = parseEasingParameters(easing);
        switch (name) {
          case 'spring' : return spring(easing, duration);
          case 'cubicBezier' : return applyArguments(bezier, args);
          case 'steps' : return applyArguments(steps, args);
          default : return applyArguments(ease, args);
        }
      }

      // Strings

      function selectString(str) {
        try {
          var nodes = document.querySelectorAll(str);
          return nodes;
        } catch(e) {
          return;
        }
      }

      // Arrays

      function filterArray(arr, callback) {
        var len = arr.length;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        var result = [];
        for (var i = 0; i < len; i++) {
          if (i in arr) {
            var val = arr[i];
            if (callback.call(thisArg, val, i, arr)) {
              result.push(val);
            }
          }
        }
        return result;
      }

      function flattenArray(arr) {
        return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
      }

      function toArray(o) {
        if (is.arr(o)) { return o; }
        if (is.str(o)) { o = selectString(o) || o; }
        if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
        return [o];
      }

      function arrayContains(arr, val) {
        return arr.some(function (a) { return a === val; });
      }

      // Objects

      function cloneObject(o) {
        var clone = {};
        for (var p in o) { clone[p] = o[p]; }
        return clone;
      }

      function replaceObjectProps(o1, o2) {
        var o = cloneObject(o1);
        for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
        return o;
      }

      function mergeObjects(o1, o2) {
        var o = cloneObject(o1);
        for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
        return o;
      }

      // Colors

      function rgbToRgba(rgbValue) {
        var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
        return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
      }

      function hexToRgba(hexValue) {
        var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
        var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        var r = parseInt(rgb[1], 16);
        var g = parseInt(rgb[2], 16);
        var b = parseInt(rgb[3], 16);
        return ("rgba(" + r + "," + g + "," + b + ",1)");
      }

      function hslToRgba(hslValue) {
        var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
        var h = parseInt(hsl[1], 10) / 360;
        var s = parseInt(hsl[2], 10) / 100;
        var l = parseInt(hsl[3], 10) / 100;
        var a = hsl[4] || 1;
        function hue2rgb(p, q, t) {
          if (t < 0) { t += 1; }
          if (t > 1) { t -= 1; }
          if (t < 1/6) { return p + (q - p) * 6 * t; }
          if (t < 1/2) { return q; }
          if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
          return p;
        }
        var r, g, b;
        if (s == 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
        }
        return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
      }

      function colorToRgb(val) {
        if (is.rgb(val)) { return rgbToRgba(val); }
        if (is.hex(val)) { return hexToRgba(val); }
        if (is.hsl(val)) { return hslToRgba(val); }
      }

      // Units

      function getUnit(val) {
        var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
        if (split) { return split[1]; }
      }

      function getTransformUnit(propName) {
        if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
        if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
      }

      // Values

      function getFunctionValue(val, animatable) {
        if (!is.fnc(val)) { return val; }
        return val(animatable.target, animatable.id, animatable.total);
      }

      function getAttribute(el, prop) {
        return el.getAttribute(prop);
      }

      function convertPxToUnit(el, value, unit) {
        var valueUnit = getUnit(value);
        if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
        var cached = cache.CSS[value + unit];
        if (!is.und(cached)) { return cached; }
        var baseline = 100;
        var tempEl = document.createElement(el.tagName);
        var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
        parentEl.appendChild(tempEl);
        tempEl.style.position = 'absolute';
        tempEl.style.width = baseline + unit;
        var factor = baseline / tempEl.offsetWidth;
        parentEl.removeChild(tempEl);
        var convertedUnit = factor * parseFloat(value);
        cache.CSS[value + unit] = convertedUnit;
        return convertedUnit;
      }

      function getCSSValue(el, prop, unit) {
        if (prop in el.style) {
          var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
          return unit ? convertPxToUnit(el, value, unit) : value;
        }
      }

      function getAnimationType(el, prop) {
        if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
        if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
        if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
        if (el[prop] != null) { return 'object'; }
      }

      function getElementTransforms(el) {
        if (!is.dom(el)) { return; }
        var str = el.style.transform || '';
        var reg  = /(\w+)\(([^)]*)\)/g;
        var transforms = new Map();
        var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
        return transforms;
      }

      function getTransformValue(el, propName, animatable, unit) {
        var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
        var value = getElementTransforms(el).get(propName) || defaultVal;
        if (animatable) {
          animatable.transforms.list.set(propName, value);
          animatable.transforms['last'] = propName;
        }
        return unit ? convertPxToUnit(el, value, unit) : value;
      }

      function getOriginalTargetValue(target, propName, unit, animatable) {
        switch (getAnimationType(target, propName)) {
          case 'transform': return getTransformValue(target, propName, animatable, unit);
          case 'css': return getCSSValue(target, propName, unit);
          case 'attribute': return getAttribute(target, propName);
          default: return target[propName] || 0;
        }
      }

      function getRelativeValue(to, from) {
        var operator = /^(\*=|\+=|-=)/.exec(to);
        if (!operator) { return to; }
        var u = getUnit(to) || 0;
        var x = parseFloat(from);
        var y = parseFloat(to.replace(operator[0], ''));
        switch (operator[0][0]) {
          case '+': return x + y + u;
          case '-': return x - y + u;
          case '*': return x * y + u;
        }
      }

      function validateValue(val, unit) {
        if (is.col(val)) { return colorToRgb(val); }
        if (/\s/g.test(val)) { return val; }
        var originalUnit = getUnit(val);
        var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
        if (unit) { return unitLess + unit; }
        return unitLess;
      }

      // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
      // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

      function getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      }

      function getCircleLength(el) {
        return Math.PI * 2 * getAttribute(el, 'r');
      }

      function getRectLength(el) {
        return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
      }

      function getLineLength(el) {
        return getDistance(
          {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
          {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
        );
      }

      function getPolylineLength(el) {
        var points = el.points;
        var totalLength = 0;
        var previousPos;
        for (var i = 0 ; i < points.numberOfItems; i++) {
          var currentPos = points.getItem(i);
          if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
          previousPos = currentPos;
        }
        return totalLength;
      }

      function getPolygonLength(el) {
        var points = el.points;
        return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
      }

      // Path animation

      function getTotalLength(el) {
        if (el.getTotalLength) { return el.getTotalLength(); }
        switch(el.tagName.toLowerCase()) {
          case 'circle': return getCircleLength(el);
          case 'rect': return getRectLength(el);
          case 'line': return getLineLength(el);
          case 'polyline': return getPolylineLength(el);
          case 'polygon': return getPolygonLength(el);
        }
      }

      function setDashoffset(el) {
        var pathLength = getTotalLength(el);
        el.setAttribute('stroke-dasharray', pathLength);
        return pathLength;
      }

      // Motion path

      function getParentSvgEl(el) {
        var parentEl = el.parentNode;
        while (is.svg(parentEl)) {
          if (!is.svg(parentEl.parentNode)) { break; }
          parentEl = parentEl.parentNode;
        }
        return parentEl;
      }

      function getParentSvg(pathEl, svgData) {
        var svg = svgData || {};
        var parentSvgEl = svg.el || getParentSvgEl(pathEl);
        var rect = parentSvgEl.getBoundingClientRect();
        var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
        var width = rect.width;
        var height = rect.height;
        var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
        return {
          el: parentSvgEl,
          viewBox: viewBox,
          x: viewBox[0] / 1,
          y: viewBox[1] / 1,
          w: width,
          h: height,
          vW: viewBox[2],
          vH: viewBox[3]
        }
      }

      function getPath(path, percent) {
        var pathEl = is.str(path) ? selectString(path)[0] : path;
        var p = percent || 100;
        return function(property) {
          return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
          }
        }
      }

      function getPathProgress(path, progress, isPathTargetInsideSVG) {
        function point(offset) {
          if ( offset === void 0 ) offset = 0;

          var l = progress + offset >= 1 ? progress + offset : 0;
          return path.el.getPointAtLength(l);
        }
        var svg = getParentSvg(path.el, path.svg);
        var p = point();
        var p0 = point(-1);
        var p1 = point(+1);
        var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
        var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
        switch (path.property) {
          case 'x': return (p.x - svg.x) * scaleX;
          case 'y': return (p.y - svg.y) * scaleY;
          case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
        }
      }

      // Decompose value

      function decomposeValue(val, unit) {
        // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
        // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
        var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
        var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
        return {
          original: value,
          numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
          strings: (is.str(val) || unit) ? value.split(rgx) : []
        }
      }

      // Animatables

      function parseTargets(targets) {
        var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
        return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
      }

      function getAnimatables(targets) {
        var parsed = parseTargets(targets);
        return parsed.map(function (t, i) {
          return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
        });
      }

      // Properties

      function normalizePropertyTweens(prop, tweenSettings) {
        var settings = cloneObject(tweenSettings);
        // Override duration if easing is a spring
        if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
        if (is.arr(prop)) {
          var l = prop.length;
          var isFromTo = (l === 2 && !is.obj(prop[0]));
          if (!isFromTo) {
            // Duration divided by the number of tweens
            if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
          } else {
            // Transform [from, to] values shorthand to a valid tween value
            prop = {value: prop};
          }
        }
        var propArray = is.arr(prop) ? prop : [prop];
        return propArray.map(function (v, i) {
          var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
          // Default delay value should only be applied to the first tween
          if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
          // Default endDelay value should only be applied to the last tween
          if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
          return obj;
        }).map(function (k) { return mergeObjects(k, settings); });
      }


      function flattenKeyframes(keyframes) {
        var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
        .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
        var properties = {};
        var loop = function ( i ) {
          var propName = propertyNames[i];
          properties[propName] = keyframes.map(function (key) {
            var newKey = {};
            for (var p in key) {
              if (is.key(p)) {
                if (p == propName) { newKey.value = key[p]; }
              } else {
                newKey[p] = key[p];
              }
            }
            return newKey;
          });
        };

        for (var i = 0; i < propertyNames.length; i++) loop( i );
        return properties;
      }

      function getProperties(tweenSettings, params) {
        var properties = [];
        var keyframes = params.keyframes;
        if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
        for (var p in params) {
          if (is.key(p)) {
            properties.push({
              name: p,
              tweens: normalizePropertyTweens(params[p], tweenSettings)
            });
          }
        }
        return properties;
      }

      // Tweens

      function normalizeTweenValues(tween, animatable) {
        var t = {};
        for (var p in tween) {
          var value = getFunctionValue(tween[p], animatable);
          if (is.arr(value)) {
            value = value.map(function (v) { return getFunctionValue(v, animatable); });
            if (value.length === 1) { value = value[0]; }
          }
          t[p] = value;
        }
        t.duration = parseFloat(t.duration);
        t.delay = parseFloat(t.delay);
        return t;
      }

      function normalizeTweens(prop, animatable) {
        var previousTween;
        return prop.tweens.map(function (t) {
          var tween = normalizeTweenValues(t, animatable);
          var tweenValue = tween.value;
          var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
          var toUnit = getUnit(to);
          var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
          var previousValue = previousTween ? previousTween.to.original : originalValue;
          var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
          var fromUnit = getUnit(from) || getUnit(originalValue);
          var unit = toUnit || fromUnit;
          if (is.und(to)) { to = previousValue; }
          tween.from = decomposeValue(from, unit);
          tween.to = decomposeValue(getRelativeValue(to, from), unit);
          tween.start = previousTween ? previousTween.end : 0;
          tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
          tween.easing = parseEasings(tween.easing, tween.duration);
          tween.isPath = is.pth(tweenValue);
          tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
          tween.isColor = is.col(tween.from.original);
          if (tween.isColor) { tween.round = 1; }
          previousTween = tween;
          return tween;
        });
      }

      // Tween progress

      var setProgressValue = {
        css: function (t, p, v) { return t.style[p] = v; },
        attribute: function (t, p, v) { return t.setAttribute(p, v); },
        object: function (t, p, v) { return t[p] = v; },
        transform: function (t, p, v, transforms, manual) {
          transforms.list.set(p, v);
          if (p === transforms.last || manual) {
            var str = '';
            transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
            t.style.transform = str;
          }
        }
      };

      // Set Value helper

      function setTargetsValue(targets, properties) {
        var animatables = getAnimatables(targets);
        animatables.forEach(function (animatable) {
          for (var property in properties) {
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
          }
        });
      }

      // Animations

      function createAnimation(animatable, prop) {
        var animType = getAnimationType(animatable.target, prop.name);
        if (animType) {
          var tweens = normalizeTweens(prop, animatable);
          var lastTween = tweens[tweens.length - 1];
          return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
          }
        }
      }

      function getAnimations(animatables, properties) {
        return filterArray(flattenArray(animatables.map(function (animatable) {
          return properties.map(function (prop) {
            return createAnimation(animatable, prop);
          });
        })), function (a) { return !is.und(a); });
      }

      // Create Instance

      function getInstanceTimings(animations, tweenSettings) {
        var animLength = animations.length;
        var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
        var timings = {};
        timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
        timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
        timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
        return timings;
      }

      var instanceID = 0;

      function createNewInstance(params) {
        var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
        var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
        var properties = getProperties(tweenSettings, params);
        var animatables = getAnimatables(params.targets);
        var animations = getAnimations(animatables, properties);
        var timings = getInstanceTimings(animations, tweenSettings);
        var id = instanceID;
        instanceID++;
        return mergeObjects(instanceSettings, {
          id: id,
          children: [],
          animatables: animatables,
          animations: animations,
          duration: timings.duration,
          delay: timings.delay,
          endDelay: timings.endDelay
        });
      }

      // Core

      var activeInstances = [];

      var engine = (function () {
        var raf;

        function play() {
          if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
            raf = requestAnimationFrame(step);
          }
        }
        function step(t) {
          // memo on algorithm issue:
          // dangerous iteration over mutable `activeInstances`
          // (that collection may be updated from within callbacks of `tick`-ed animation instances)
          var activeInstancesLength = activeInstances.length;
          var i = 0;
          while (i < activeInstancesLength) {
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
              activeInstance.tick(t);
              i++;
            } else {
              activeInstances.splice(i, 1);
              activeInstancesLength--;
            }
          }
          raf = i > 0 ? requestAnimationFrame(step) : undefined;
        }

        function handleVisibilityChange() {
          if (!anime.suspendWhenDocumentHidden) { return; }

          if (isDocumentHidden()) {
            // suspend ticks
            raf = cancelAnimationFrame(raf);
          } else { // is back to active tab
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(
              function (instance) { return instance ._onDocumentVisibility(); }
            );
            engine();
          }
        }
        if (typeof document !== 'undefined') {
          document.addEventListener('visibilitychange', handleVisibilityChange);
        }

        return play;
      })();

      function isDocumentHidden() {
        return !!document && document.hidden;
      }

      // Public Instance

      function anime(params) {
        if ( params === void 0 ) params = {};


        var startTime = 0, lastTime = 0, now = 0;
        var children, childrenLength = 0;
        var resolve = null;

        function makePromise(instance) {
          var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
          instance.finished = promise;
          return promise;
        }

        var instance = createNewInstance(params);
        makePromise(instance);

        function toggleInstanceDirection() {
          var direction = instance.direction;
          if (direction !== 'alternate') {
            instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
          }
          instance.reversed = !instance.reversed;
          children.forEach(function (child) { return child.reversed = instance.reversed; });
        }

        function adjustTime(time) {
          return instance.reversed ? instance.duration - time : time;
        }

        function resetTime() {
          startTime = 0;
          lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
        }

        function seekChild(time, child) {
          if (child) { child.seek(time - child.timelineOffset); }
        }

        function syncInstanceChildren(time) {
          if (!instance.reversePlayback) {
            for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
          } else {
            for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
          }
        }

        function setAnimationsProgress(insTime) {
          var i = 0;
          var animations = instance.animations;
          var animationsLength = animations.length;
          while (i < animationsLength) {
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = (void 0);
            for (var n = 0; n < toNumbersLength; n++) {
              var value = (void 0);
              var toNumber = tween.to.numbers[n];
              var fromNumber = tween.from.numbers[n] || 0;
              if (!tween.isPath) {
                value = fromNumber + (eased * (toNumber - fromNumber));
              } else {
                value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
              }
              if (round) {
                if (!(tween.isColor && n > 2)) {
                  value = Math.round(value * round) / round;
                }
              }
              numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) {
              progress = numbers[0];
            } else {
              progress = strings[0];
              for (var s = 0; s < stringsLength; s++) {
                strings[s];
                var b = strings[s + 1];
                var n$1 = numbers[s];
                if (!isNaN(n$1)) {
                  if (!b) {
                    progress += n$1 + ' ';
                  } else {
                    progress += n$1 + b;
                  }
                }
              }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
          }
        }

        function setCallback(cb) {
          if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
        }

        function countIteration() {
          if (instance.remaining && instance.remaining !== true) {
            instance.remaining--;
          }
        }

        function setInstanceProgress(engineTime) {
          var insDuration = instance.duration;
          var insDelay = instance.delay;
          var insEndDelay = insDuration - instance.endDelay;
          var insTime = adjustTime(engineTime);
          instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
          instance.reversePlayback = insTime < instance.currentTime;
          if (children) { syncInstanceChildren(insTime); }
          if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback('begin');
          }
          if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback('loopBegin');
          }
          if (insTime <= insDelay && instance.currentTime !== 0) {
            setAnimationsProgress(0);
          }
          if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
            setAnimationsProgress(insDuration);
          }
          if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
              instance.changeBegan = true;
              instance.changeCompleted = false;
              setCallback('changeBegin');
            }
            setCallback('change');
            setAnimationsProgress(insTime);
          } else {
            if (instance.changeBegan) {
              instance.changeCompleted = true;
              instance.changeBegan = false;
              setCallback('changeComplete');
            }
          }
          instance.currentTime = minMax(insTime, 0, insDuration);
          if (instance.began) { setCallback('update'); }
          if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
              instance.paused = true;
              if (!instance.completed) {
                instance.completed = true;
                setCallback('loopComplete');
                setCallback('complete');
                if (!instance.passThrough && 'Promise' in window) {
                  resolve();
                  makePromise(instance);
                }
              }
            } else {
              startTime = now;
              setCallback('loopComplete');
              instance.loopBegan = false;
              if (instance.direction === 'alternate') {
                toggleInstanceDirection();
              }
            }
          }
        }

        instance.reset = function() {
          var direction = instance.direction;
          instance.passThrough = false;
          instance.currentTime = 0;
          instance.progress = 0;
          instance.paused = true;
          instance.began = false;
          instance.loopBegan = false;
          instance.changeBegan = false;
          instance.completed = false;
          instance.changeCompleted = false;
          instance.reversePlayback = false;
          instance.reversed = direction === 'reverse';
          instance.remaining = instance.loop;
          children = instance.children;
          childrenLength = children.length;
          for (var i = childrenLength; i--;) { instance.children[i].reset(); }
          if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
          setAnimationsProgress(instance.reversed ? instance.duration : 0);
        };

        // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
        instance._onDocumentVisibility = resetTime;

        // Set Value helper

        instance.set = function(targets, properties) {
          setTargetsValue(targets, properties);
          return instance;
        };

        instance.tick = function(t) {
          now = t;
          if (!startTime) { startTime = now; }
          setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
        };

        instance.seek = function(time) {
          setInstanceProgress(adjustTime(time));
        };

        instance.pause = function() {
          instance.paused = true;
          resetTime();
        };

        instance.play = function() {
          if (!instance.paused) { return; }
          if (instance.completed) { instance.reset(); }
          instance.paused = false;
          activeInstances.push(instance);
          resetTime();
          engine();
        };

        instance.reverse = function() {
          toggleInstanceDirection();
          instance.completed = instance.reversed ? false : true;
          resetTime();
        };

        instance.restart = function() {
          instance.reset();
          instance.play();
        };

        instance.remove = function(targets) {
          var targetsArray = parseTargets(targets);
          removeTargetsFromInstance(targetsArray, instance);
        };

        instance.reset();

        if (instance.autoplay) { instance.play(); }

        return instance;

      }

      // Remove targets from animation

      function removeTargetsFromAnimations(targetsArray, animations) {
        for (var a = animations.length; a--;) {
          if (arrayContains(targetsArray, animations[a].animatable.target)) {
            animations.splice(a, 1);
          }
        }
      }

      function removeTargetsFromInstance(targetsArray, instance) {
        var animations = instance.animations;
        var children = instance.children;
        removeTargetsFromAnimations(targetsArray, animations);
        for (var c = children.length; c--;) {
          var child = children[c];
          var childAnimations = child.animations;
          removeTargetsFromAnimations(targetsArray, childAnimations);
          if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
        }
        if (!animations.length && !children.length) { instance.pause(); }
      }

      function removeTargetsFromActiveInstances(targets) {
        var targetsArray = parseTargets(targets);
        for (var i = activeInstances.length; i--;) {
          var instance = activeInstances[i];
          removeTargetsFromInstance(targetsArray, instance);
        }
      }

      // Stagger helpers

      function stagger(val, params) {
        if ( params === void 0 ) params = {};

        var direction = params.direction || 'normal';
        var easing = params.easing ? parseEasings(params.easing) : null;
        var grid = params.grid;
        var axis = params.axis;
        var fromIndex = params.from || 0;
        var fromFirst = fromIndex === 'first';
        var fromCenter = fromIndex === 'center';
        var fromLast = fromIndex === 'last';
        var isRange = is.arr(val);
        var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
        var val2 = isRange ? parseFloat(val[1]) : 0;
        var unit = getUnit(isRange ? val[1] : val) || 0;
        var start = params.start || 0 + (isRange ? val1 : 0);
        var values = [];
        var maxValue = 0;
        return function (el, i, t) {
          if (fromFirst) { fromIndex = 0; }
          if (fromCenter) { fromIndex = (t - 1) / 2; }
          if (fromLast) { fromIndex = t - 1; }
          if (!values.length) {
            for (var index = 0; index < t; index++) {
              if (!grid) {
                values.push(Math.abs(fromIndex - index));
              } else {
                var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
                var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
                var toX = index%grid[0];
                var toY = Math.floor(index/grid[0]);
                var distanceX = fromX - toX;
                var distanceY = fromY - toY;
                var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (axis === 'x') { value = -distanceX; }
                if (axis === 'y') { value = -distanceY; }
                values.push(value);
              }
              maxValue = Math.max.apply(Math, values);
            }
            if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
            if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
          }
          var spacing = isRange ? (val2 - val1) / maxValue : val1;
          return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
        }
      }

      // Timeline

      function timeline(params) {
        if ( params === void 0 ) params = {};

        var tl = anime(params);
        tl.duration = 0;
        tl.add = function(instanceParams, timelineOffset) {
          var tlIndex = activeInstances.indexOf(tl);
          var children = tl.children;
          if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
          function passThrough(ins) { ins.passThrough = true; }
          for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
          var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
          insParams.targets = insParams.targets || params.targets;
          var tlDuration = tl.duration;
          insParams.autoplay = false;
          insParams.direction = tl.direction;
          insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
          passThrough(tl);
          tl.seek(insParams.timelineOffset);
          var ins = anime(insParams);
          passThrough(ins);
          children.push(ins);
          var timings = getInstanceTimings(children, params);
          tl.delay = timings.delay;
          tl.endDelay = timings.endDelay;
          tl.duration = timings.duration;
          tl.seek(0);
          tl.reset();
          if (tl.autoplay) { tl.play(); }
          return tl;
        };
        return tl;
      }

      anime.version = '3.2.1';
      anime.speed = 1;
      // TODO:#review: naming, documentation
      anime.suspendWhenDocumentHidden = true;
      anime.running = activeInstances;
      anime.remove = removeTargetsFromActiveInstances;
      anime.get = getOriginalTargetValue;
      anime.set = setTargetsValue;
      anime.convertPx = convertPxToUnit;
      anime.path = getPath;
      anime.setDashoffset = setDashoffset;
      anime.stagger = stagger;
      anime.timeline = timeline;
      anime.easing = parseEasings;
      anime.penner = penner;
      anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

      const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");var t=function(t){let r=(t=t||"_")+"-";for(let t=0;t<7;t++)r+=e[Math.floor(Math.random()*e.length)];return r};let r={"!":"¡","?":"¿Ɂ",'"':'“”"❝❞',"'":"‘‛❛❜","-":"—–",a:"ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАадѦѧӐӑӒӓƛɅæ",b:"ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",c:"¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾСсєҀҁҪҫ",d:"ÐĎďĐđƉƊȡƋƌǷ",e:"ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ",f:"ƑƒϜϝӺӻҒғſ",g:"ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",h:"ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",I:"ÌÍÎÏ",i:"ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",j:"ĴĵǰȷɈɉϳЈј",k:"ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",l:"ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",m:"ΜϺϻМмӍӎ",n:"ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",o:"ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ",p:"ƤƿΡρϷϸϼРрҎҏÞ",q:"Ɋɋ",r:"ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",s:"ŚśŜŝŞşŠšƧƨȘșȿЅѕ",t:"ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",u:"µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύ",v:"νѴѵѶѷ",w:"ŴŵƜωώϖϢϣШЩшщѡѿ",x:"×ΧχϗϰХхҲҳӼӽӾӿ",y:"ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",z:"ŹźŻżŽžƩƵƶȤȥɀΖζ"},a={};Object.keys(r).forEach((function(e){r[e].split("").forEach((function(t){a[t]=e;}));}));var n=e=>{let t=e.split("");return t.forEach((e,r)=>{a[e]&&(t[r]=a[e]);}),t.join("")};const i=/([A-Z]\.)+[A-Z]?,?$/,o=/^[A-Z]\.,?$/,s=/[A-Z]{2,}('s|,)?$/,l$1=/([a-z]\.)+[a-z]\.?$/;var u$1=function(e){return !0===i.test(e)||(!0===l$1.test(e)||(!0===o.test(e)||!0===s.test(e)))};const c$1=/[a-z\u00C0-\u00FF] ?\/ ?[a-z\u00C0-\u00FF]/;var h$1=function(e){let t=e=(e=(e=e||"").toLowerCase()).trim();return e=n(e),!0===c$1.test(e)&&(e=e.replace(/\/.*/,"")),e=(e=(e=(e=(e=(e=(e=e.replace(/^[#@]/,"")).replace(/[,;.!?]+$/,"")).replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g,"'")).replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g,'"')).replace(/\u2026/g,"...")).replace(/\u2013/g,"-")).replace(/([aeiou][ktrp])in$/,"$1ing"),!0===/^(re|un)-?[^aeiou]./.test(e)&&(e=e.replace("-","")),u$1(e)&&(e=e.replace(/\./g,"")),!1===/^[:;]/.test(e)&&(e=(e=(e=e.replace(/\.{3,}$/g,"")).replace(/[",\.!:;\?\)]+$/g,"")).replace(/^['"\(]+/g,"")),""===(e=(e=e.replace(/[\u200B-\u200D\uFEFF]/g,"")).trim())&&(e=t),e=e.replace(/([0-9]),([0-9])/g,"$1$2")};var d$1=function(e){return e=(e=e.replace(/['’]s$/,"")).replace(/s['’]$/,"s")};const g$1=/^[ \n\t\.\[\](){}⟨⟩:,،、‒–—―…!‹›«»‐\-?‘’;\/⁄·&*•^†‡°¡¿※№÷×ºª%‰+−=‱¶′″‴§~\|‖¦©℗®℠™¤₳฿\u0022\uFF02\u0027\u201C\u201F\u201B\u201E\u2E42\u201A\u2035\u2036\u2037\u301D\u0060\u301F]+/,p$1=/[ \n\t\.'\[\](){}⟨⟩:,،、‒–—―…!‹›«»‐\-?‘’;\/⁄·&*@•^†‡°¡¿※#№÷×ºª‰+−=‱¶′″‴§~\|‖¦©℗®℠™¤₳฿\u0022\uFF02\u201D\u00B4\u301E]+$/,m$1=/\//,f$1=/['’]/,b$1=/^[a-z]\.([a-z]\.)+/i,v$1=/^[-+\.][0-9]/,y$1=/^'[0-9]{2}/;var w$1=e=>{let t=e,r="",a="";""===(e=(e=e.replace(g$1,t=>(r=t,"-"!==r&&"+"!==r&&"."!==r||!v$1.test(e)?"'"===r&&y$1.test(e)?(r="",t):"":(r="",t)))).replace(p$1,n=>(a=n,f$1.test(n)&&/[sn]['’]$/.test(t)&&!1===f$1.test(r)?(a=a.replace(f$1,""),"'"):!0===b$1.test(e)?(a=a.replace(/\./,""),"."):"")))&&(t=t.replace(/ *$/,e=>(a=e||"","")),e=t,r="",a=a);let n=h$1(e);const i={text:e,clean:n,reduced:d$1(n),pre:r,post:a};return m$1.test(e)&&e.split(m$1).forEach(e=>{i.alias=i.alias||{},i.alias[e.trim()]=!0;}),i};function k$1(e){var t={exports:{}};return e(t,t.exports),t.exports}var A$1=k$1((function(e,t){const r=/^[A-Z][a-z'\u00C0-\u00FF]/,a=/^[A-Z]+s?$/;t.toUpperCase=function(){return this.text=this.text.toUpperCase(),this},t.toLowerCase=function(){return this.text=this.text.toLowerCase(),this},t.toTitleCase=function(){return this.text=this.text.replace(/^ *[a-z\u00C0-\u00FF]/,e=>e.toUpperCase()),this},t.isUpperCase=function(){return a.test(this.text)},t.isTitleCase=function(){return r.test(this.text)},t.titleCase=t.isTitleCase;})),D$1=k$1((function(e,t){const r=/(\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)/,a=/(\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E)/;t.hasPost=function(e){return -1!==this.post.indexOf(e)},t.hasPre=function(e){return -1!==this.pre.indexOf(e)},t.hasQuote=function(){return r.test(this.pre)||a.test(this.post)},t.hasQuotation=t.hasQuote,t.hasComma=function(){return this.hasPost(",")},t.hasPeriod=function(){return !0===this.hasPost(".")&&!1===this.hasPost("...")},t.hasExclamation=function(){return this.hasPost("!")},t.hasQuestionMark=function(){return this.hasPost("?")||this.hasPost("¿")},t.hasEllipses=function(){return this.hasPost("..")||this.hasPost("…")||this.hasPre("..")||this.hasPre("…")},t.hasSemicolon=function(){return this.hasPost(";")},t.hasSlash=function(){return /\//.test(this.text)},t.hasHyphen=function(){const e=/^(-|–|—)$/;return e.test(this.post)||e.test(this.pre)},t.hasDash=function(){const e=/ (-|–|—) /;return e.test(this.post)||e.test(this.pre)},t.hasContraction=function(){return Boolean(this.implicit)},t.addPunctuation=function(e){return ","!==e&&";"!==e||(this.post=this.post.replace(e,"")),this.post=e+this.post,this};}));var $$1=function(e,t,r=3){if(e===t)return 1;if(e.length<r||t.length<r)return 0;const a=function(e,t){let r=e.length,a=t.length;if(0===r)return a;if(0===a)return r;let n=(a>r?a:r)+1;if(Math.abs(r-a)>(n||100))return n||100;let i,o,s,l,u,c,h=[];for(let e=0;e<n;e++)h[e]=[e],h[e].length=n;for(let e=0;e<n;e++)h[0][e]=e;for(let n=1;n<=r;++n)for(o=e[n-1],i=1;i<=a;++i){if(n===i&&h[n][i]>4)return r;s=t[i-1],l=o===s?0:1,u=h[n-1][i]+1,(c=h[n][i-1]+1)<u&&(u=c),(c=h[n-1][i-1]+l)<u&&(u=c);let a=n>1&&i>1&&o===t[i-2]&&e[n-2]===s&&(c=h[n-2][i-2]+l)<u;h[n][i]=a?c:u;}return h[r][a]}(e,t);let n=Math.max(e.length,t.length);return 1-(0===n?0:a/n)};let P$1=function(){};P$1=function(e,t,r,a){let n=function(e,t,r,a){if(t.id===e.id)return !0;if(!0===t.anything)return !0;if(!0===t.start&&0!==r)return !1;if(!0===t.end&&r!==a-1)return !1;if(void 0!==t.word){if(null!==e.implicit&&e.implicit===t.word)return !0;if(void 0!==e.alias&&e.alias.hasOwnProperty(t.word))return !0;if(!0===t.soft&&t.word===e.root)return !0;if(void 0!==t.fuzzy){let r=$$1(t.word,e.reduced);if(r>t.fuzzy)return !0;if(!0===t.soft&&(r=$$1(t.word,e.root),r>t.fuzzy))return !0}return t.word===e.clean||t.word===e.text||t.word===e.reduced}return void 0!==t.tag?!0===e.tags[t.tag]:void 0!==t.method?"function"==typeof e[t.method]&&!0===e[t.method]():void 0!==t.regex?t.regex.test(e.clean):void 0!==t.fastOr?!(!e.implicit||!0!==t.fastOr.hasOwnProperty(e.implicit))||t.fastOr.hasOwnProperty(e.reduced)||t.fastOr.hasOwnProperty(e.text):void 0!==t.choices&&("and"===t.operator?t.choices.every(t=>P$1(e,t,r,a)):t.choices.some(t=>P$1(e,t,r,a)))}(e,t,r,a);return !0===t.negative?!n:n};var E$1=P$1;const H$1={};var j$1={doesMatch:function(e,t,r){return E$1(this,e,t,r)},isAcronym:function(){return u$1(this.text)},isImplicit:function(){return ""===this.text&&Boolean(this.implicit)},isKnown:function(){return Object.keys(this.tags).some(e=>!0!==H$1[e])},setRoot:function(e){let t=e.transforms,r=this.implicit||this.clean;if(this.tags.Plural&&(r=t.toSingular(r,e)),this.tags.Verb&&!this.tags.Negative&&!this.tags.Infinitive){let a=null;this.tags.PastTense?a="PastTense":this.tags.Gerund?a="Gerund":this.tags.PresentTense?a="PresentTense":this.tags.Participle?a="Participle":this.tags.Actor&&(a="Actor"),r=t.toInfinitive(r,e,a);}this.root=r;}};const N$1=/[\s-]/,x$1=/^[A-Z-]+$/;var F$1={textOut:function(e,t,r){e=e||{};let a=this.text,i=this.pre,o=this.post;return !0===e.reduced&&(a=this.reduced||""),!0===e.root&&(a=this.root||""),!0===e.implicit&&this.implicit&&(a=this.implicit||""),!0===e.normal&&(a=this.clean||this.text||""),!0===e.root&&(a=this.root||this.reduced||""),!0===e.unicode&&(a=n(a)),!0===e.titlecase&&(this.tags.ProperNoun&&!this.titleCase()||(this.tags.Acronym?a=a.toUpperCase():x$1.test(a)&&!this.tags.Acronym&&(a=a.toLowerCase()))),!0===e.lowercase&&(a=a.toLowerCase()),!0===e.acronyms&&this.tags.Acronym&&(a=a.replace(/\./g,"")),!0!==e.whitespace&&!0!==e.root||(i="",o=" ",!1!==N$1.test(this.post)&&!e.last||this.implicit||(o="")),!0!==e.punctuation||e.root||(!0===this.hasPost(".")?o="."+o:!0===this.hasPost("?")?o="?"+o:!0===this.hasPost("!")?o="!"+o:!0===this.hasPost(",")?o=","+o:!0===this.hasEllipses()&&(o="..."+o)),!0!==t&&(i=""),!0!==r&&(o=""),!0===e.abbreviations&&this.tags.Abbreviation&&(o=o.replace(/^\./,"")),i+a+o}};const C$1={Auxiliary:1,Possessive:1};var B$1=function(e,t){let r=Object.keys(e.tags);const a=t.tags;return r=r.sort((e,t)=>C$1[t]||!a[t]?-1:a[t]?a[e]?a[e].lineage.length>a[t].lineage.length?1:a[e].isA.length>a[t].isA.length?-1:0:0:1),r};const G$1={text:!0,tags:!0,implicit:!0,whitespace:!0,clean:!1,id:!1,index:!1,offset:!1,bestTag:!1};var z$1={json:function(e,t){e=e||{};let r={};return (e=Object.assign({},G$1,e)).text&&(r.text=this.text),e.normal&&(r.normal=this.clean),e.tags&&(r.tags=Object.keys(this.tags)),e.clean&&(r.clean=this.clean),(e.id||e.offset)&&(r.id=this.id),e.implicit&&null!==this.implicit&&(r.implicit=this.implicit),e.whitespace&&(r.pre=this.pre,r.post=this.post),e.bestTag&&(r.bestTag=B$1(this,t)[0]),r}},I$1=Object.assign({},A$1,D$1,j$1,F$1,z$1);function O$1(){return "undefined"!=typeof window&&window.document}const T$1=function(e,t){for(e=e.toString();e.length<t;)e+=" ";return e};var V$1=function(e,t,r){if(O$1())return void console.log("%c"+T$1(e.clean,3)+"  + "+t+" ","color: #6accb2;");let a="[33m"+T$1(e.clean,15)+"[0m + [32m"+t+"[0m ";r&&(a=T$1(a,35)+" "+r),console.log(a);},M$1=function(e,t,r){if(O$1())return void console.log("%c"+T$1(e.clean,3)+"  - "+t+" ","color: #AB5850;");let a="[33m"+T$1(e.clean,3)+" [31m - #"+t+"[0m ";r&&(a=T$1(a,35)+" "+r),console.log(a);},J$1=e=>e.charAt(0).toUpperCase()+e.substr(1);const L$1=function(e,t,r,a){let n=a.tags;if(""===t||"."===t||"-"===t)return;if("#"===t[0]&&(t=t.replace(/^#/,"")),t=J$1(t),!0===e.tags[t])return;const i=a.isVerbose();!0===i&&V$1(e,t,r),e.tags[t]=!0,!0===n.hasOwnProperty(t)&&(n[t].isA.forEach(t=>{e.tags[t]=!0,!0===i&&V$1(e,"→ "+t);}),e.unTag(n[t].notA,"←",a));};var S$1=function(e,t,r,a){if("string"!=typeof t)for(let n=0;n<t.length;n++)L$1(e,t[n],r,a);else L$1(e,t,r,a);};const _$1=/^[a-z]/,K$1=function(e,t,r,a){const n=a.isVerbose();if("*"===t)return e.tags={},e;var i;t=t.replace(/^#/,""),!0===_$1.test(t)&&(t=(i=t).charAt(0).toUpperCase()+i.substr(1)),!0===e.tags[t]&&(delete e.tags[t],!0===n&&M$1(e,t,r));const o=a.tags;if(o[t]){let r=o[t].lineage;for(let t=0;t<r.length;t++)!0===e.tags[r[t]]&&(delete e.tags[r[t]],!0===n&&M$1(e," - "+r[t]));}return e};var q$1=function(e,t,r,a){if("string"!=typeof t&&t)for(let n=0;n<t.length;n++)K$1(e,t[n],r,a);else K$1(e,t,r,a);};const W$1=function(e,t,r){const a=r.tags;if("#"===t[0]&&(t=t.replace(/^#/,"")),void 0===a[t])return !0;let n=a[t].notA||[];for(let t=0;t<n.length;t++)if(!0===e.tags[n[t]])return !1;return void 0===a[t].isA||W$1(e,a[t].isA,r)};var R$1=W$1,U$1={tag:function(e,t,r){return S$1(this,e,t,r),this},tagSafe:function(e,t,r){return R$1(this,e,r)&&S$1(this,e,t,r),this},unTag:function(e,t,r){return q$1(this,e,t,r),this},canBe:function(e,t){return R$1(this,e,t)}};class Q$1{constructor(e=""){e=String(e);let r=w$1(e);this.text=r.text||"",this.clean=r.clean,this.reduced=r.reduced,this.root=null,this.implicit=null,this.pre=r.pre||"",this.post=r.post||"",this.tags={},this.prev=null,this.next=null,this.id=t(r.clean),this.isA="Term",r.alias&&(this.alias=r.alias);}set(e){let t=w$1(e);return this.text=t.text,this.clean=t.clean,this.reduced=t.reduced,this.root=null,this.implicit=null,this}}Q$1.prototype.clone=function(){let e=new Q$1(this.text);return e.pre=this.pre,e.post=this.post,e.clean=this.clean,e.reduced=this.reduced,e.root=this.root,e.implicit=this.implicit,e.tags=Object.assign({},this.tags),e},Object.assign(Q$1.prototype,I$1),Object.assign(Q$1.prototype,U$1);var Z$1=Q$1,X$1={terms:function(e){if(0===this.length)return [];if(this.cache.terms)return void 0!==e?this.cache.terms[e]:this.cache.terms;let t=[this.pool.get(this.start)];for(let r=0;r<this.length-1;r+=1){let a=t[t.length-1].next;if(null===a){console.error("Compromise error: Linked list broken in phrase '"+this.start+"'");break}let n=this.pool.get(a);if(t.push(n),void 0!==e&&e===r)return t[e]}return void 0===e&&(this.cache.terms=t),void 0!==e?t[e]:t},clone:function(e){if(e){let e=this.buildFrom(this.start,this.length);return e.cache=this.cache,e}let t=this.terms().map(e=>e.clone());return t.forEach((e,r)=>{this.pool.add(e),t[r+1]&&(e.next=t[r+1].id),t[r-1]&&(e.prev=t[r-1].id);}),this.buildFrom(t[0].id,t.length)},lastTerm:function(){let e=this.terms();return e[e.length-1]},hasId:function(e){if(0===this.length||!e)return !1;if(this.start===e)return !0;if(this.cache.terms){let t=this.cache.terms;for(let r=0;r<t.length;r++)if(t[r].id===e)return !0;return !1}let t=this.start;for(let r=0;r<this.length-1;r+=1){let r=this.pool.get(t);if(void 0===r)return console.error(`Compromise error: Linked list broken. Missing term '${t}' in phrase '${this.start}'\n`),!1;if(r.next===e)return !0;t=r.next;}return !1},wordCount:function(){return this.terms().filter(e=>""!==e.text).length},fullSentence:function(){let e=this.terms(0);for(;e.prev;)e=this.pool.get(e.prev);let t=e.id,r=1;for(;e.next;)e=this.pool.get(e.next),r+=1;return this.buildFrom(t,r)}};var Y$1={text:function(e={},t,r){"string"==typeof e&&(e="normal"===e?{whitespace:!0,unicode:!0,lowercase:!0,punctuation:!0,acronyms:!0,abbreviations:!0,implicit:!0,normal:!0}:"clean"===e?{titlecase:!1,lowercase:!0,punctuation:!0,whitespace:!0,unicode:!0,implicit:!0,normal:!0}:"reduced"===e?{punctuation:!1,titlecase:!1,lowercase:!0,whitespace:!0,unicode:!0,implicit:!0,reduced:!0}:"implicit"===e?{punctuation:!0,implicit:!0,whitespace:!0,trim:!0}:"root"===e?{titlecase:!1,lowercase:!0,punctuation:!0,whitespace:!0,unicode:!0,implicit:!0,root:!0}:{});let a=this.terms(),n=!1;a[0]&&null===a[0].prev&&null===a[a.length-1].next&&(n=!0);let i=a.reduce((i,o,s)=>{if(0===s&&""===o.text&&null!==o.implicit&&!e.implicit)return i;e.last=r&&s===a.length-1;let l=!0,u=!0;return !1===n&&(0===s&&t&&(l=!1),s===a.length-1&&r&&(u=!1)),i+o.textOut(e,l,u)},"");return !0===n&&r&&(i=i.replace(/ +$/,"")),!0===e.trim&&(i=i.trim()),i}},ee={trim:function(){let e=this.terms();if(e.length>0){e[0].pre=e[0].pre.replace(/^\s+/,"");let t=e[e.length-1];t.post=t.post.replace(/\s+$/,"");}return this}};const te=/[.?!]\s*$/,re=function(e,t){t[0].pre=e[0].pre;let r=e[e.length-1],a=t[t.length-1];a.post=function(e,t){if(te.test(t))return t+e.match(/\s*$/);return e}(r.post,a.post),r.post="",""===r.post&&(r.post+=" ");};var ae=function(e,t,r){let a=e.terms(),n=t.terms();re(a,n),function(e,t,r){let a=e[e.length-1],n=t[t.length-1],i=a.next;a.next=t[0].id,n.next=i,i&&(r.get(i).prev=n.id);let o=e[0].id;o&&(t[0].prev=o);}(a,n,e.pool);let i=[e],o=e.start,s=[r];return s=s.concat(r.parents()),s.forEach(e=>{let t=e.list.filter(e=>e.hasId(o));i=i.concat(t);}),i=function(e){return e.filter((t,r)=>e.indexOf(t)===r)}(i),i.forEach(e=>{e.length+=t.length;}),e.cache={},e};const ne=/ /;var ie=function(e,t,r){const a=e.start;let n=t.terms();!function(e){let t=e[e.length-1];!1===ne.test(t.post)&&(t.post+=" ");}(n),function(e,t,r){let a=r[r.length-1];a.next=e.start;let n=e.pool,i=n.get(e.start);i.prev&&(n.get(i.prev).next=t.start);r[0].prev=e.terms(0).prev,e.terms(0).prev=a.id;}(e,t,n);let i=[e],o=[r];return o=o.concat(r.parents()),o.forEach(e=>{let r=e.list.filter(e=>e.hasId(a)||e.hasId(t.start));i=i.concat(r);}),i=function(e){return e.filter((t,r)=>e.indexOf(t)===r)}(i),i.forEach(e=>{e.length+=t.length,e.start===a&&(e.start=t.start),e.cache={};}),e};var oe=function(e,t){let r=t.pool(),a=e.terms(),n=r.get(a[0].prev)||{},i=r.get(a[a.length-1].next)||{};a[0].implicit&&n.implicit&&(n.set(n.implicit),n.post+=" "),function(e,t,r,a){let n=e.parents();n.push(e),n.forEach(e=>{let n=e.list.find(e=>e.hasId(t));n&&(n.length-=r,n.start===t&&(n.start=a.id),n.cache={});}),e.list=e.list.filter(e=>!(!e.start||!e.length));}(t,e.start,e.length,i),n&&(n.next=i.id),i&&(i.prev=n.id);},se={append:function(e,t){return ae(this,e,t),this},prepend:function(e,t){return ie(this,e,t),this},delete:function(e){return oe(this,e),this},replace:function(e,t){let r=this.length;ae(this,e,t);let a=this.buildFrom(this.start,this.length);a.length=r,oe(a,t);},splitOn:function(e){let t=this.terms(),r={before:null,match:null,after:null},a=t.findIndex(t=>t.id===e.start);if(-1===a)return r;let n=t.slice(0,a);n.length>0&&(r.before=this.buildFrom(n[0].id,n.length));let i=t.slice(a,a+e.length);i.length>0&&(r.match=this.buildFrom(i[0].id,i.length));let o=t.slice(a+e.length,t.length);return o.length>0&&(r.after=this.buildFrom(o[0].id,o.length,this.pool)),r}},le={json:function(e={},t){let r={};return e.text&&(r.text=this.text()),e.normal&&(r.normal=this.text("normal")),e.clean&&(r.clean=this.text("clean")),e.reduced&&(r.reduced=this.text("reduced")),e.implicit&&(r.implicit=this.text("implicit")),e.root&&(r.root=this.text("root")),e.trim&&(r.text&&(r.text=r.text.trim()),r.normal&&(r.normal=r.normal.trim()),r.reduced&&(r.reduced=r.reduced.trim())),e.terms&&(!0===e.terms&&(e.terms={}),r.terms=this.terms().map(r=>r.json(e.terms,t))),r}},ue={lookAhead:function(e){e||(e=".*");let t=this.pool,r=[];const a=function(e){let n=t.get(e);n&&(r.push(n),n.prev&&a(n.next));};let n=this.terms(),i=n[n.length-1];return a(i.next),0===r.length?[]:this.buildFrom(r[0].id,r.length).match(e)},lookBehind:function(e){e||(e=".*");let t=this.pool,r=[];const a=function(e){let n=t.get(e);n&&(r.push(n),n.prev&&a(n.prev));};let n=t.get(this.start);return a(n.prev),0===r.length?[]:this.buildFrom(r[r.length-1].id,r.length).match(e)}},ce=Object.assign({},X$1,Y$1,ee,se,le,ue);var he=function(e,t){if(0===t.length)return !0;for(let e=0;e<t.length;e+=1){let r=t[e];if(!0!==r.optional&&!0!==r.negative&&!0===r.start&&e>0)return !0;if(!0===r.anything&&!0===r.negative)return !0}return !1},de=k$1((function(e,t){t.getGreedy=function(e,t){let r=Object.assign({},e.regs[e.r],{start:!1,end:!1}),a=e.t;for(;e.t<e.terms.length;e.t+=1){if(t&&e.terms[e.t].doesMatch(t,e.start_i+e.t,e.phrase_length))return e.t;let n=e.t-a+1;if(void 0!==r.max&&n===r.max)return e.t;if(!1===e.terms[e.t].doesMatch(r,e.start_i+e.t,e.phrase_length))return void 0!==r.min&&n<r.min?null:e.t}return e.t},t.greedyTo=function(e,t){let r=e.t;if(!t)return e.terms.length;for(;r<e.terms.length;r+=1)if(!0===e.terms[r].doesMatch(t,e.start_i+r,e.phrase_length))return r;return null},t.isEndGreedy=function(e,t){if(!0===e.end&&!0===e.greedy&&t.start_i+t.t<t.phrase_length-1){let r=Object.assign({},e,{end:!1});if(!0===t.terms[t.t].doesMatch(r,t.start_i+t.t,t.phrase_length))return !0}return !1},t.doOrBlock=function(e,r=0){let a=e.regs[e.r],n=!1;for(let t=0;t<a.choices.length;t+=1){let i=a.choices[t];if(n=i.every((t,a)=>{let n=0,i=e.t+a+r+n;if(void 0===e.terms[i])return !1;let o=e.terms[i].doesMatch(t,i+e.start_i,e.phrase_length);if(!0===o&&!0===t.greedy)for(let r=1;r<e.terms.length;r+=1){let a=e.terms[i+r];if(a){if(!0!==a.doesMatch(t,e.start_i+r,e.phrase_length))break;n+=1;}}return r+=n,o}),n){r+=i.length;break}}return n&&!0===a.greedy?t.doOrBlock(e,r):r},t.doAndBlock=function(e){let t=0;return !0===e.regs[e.r].choices.every(r=>{let a=r.every((t,r)=>{let a=e.t+r;return void 0!==e.terms[a]&&e.terms[a].doesMatch(t,a,e.phrase_length)});return !0===a&&r.length>t&&(t=r.length),a})&&t},t.getGroup=function(e,t,r){if(e.groups[e.groupId])return e.groups[e.groupId];const a=e.terms[t].id;return e.groups[e.groupId]={group:String(r),start:a,length:0},e.groups[e.groupId]};}));var ge=function(e,r,a,n){let i={t:0,terms:e,r:0,regs:r,groups:{},start_i:a,phrase_length:n,hasGroup:!1,groupId:null,previousGroup:null};for(;i.r<r.length;i.r+=1){let e=r[i.r];if(i.hasGroup="string"==typeof e.named||"number"==typeof e.named,!0===i.hasGroup){const a=r[i.r-1];a&&a.named===e.named&&i.previousGroup?i.groupId=i.previousGroup:(i.groupId=t(e.named),i.previousGroup=i.groupId);}if(!i.terms[i.t]){if(!1===r.slice(i.r).some(e=>!e.optional))break;return null}if(!0===e.anything&&!0===e.greedy){let t=de.greedyTo(i,r[i.r+1]);if(null===t||0===t)return null;if(void 0!==e.min&&t-i.t<e.min)return null;if(void 0!==e.max&&t-i.t>e.max){i.t=i.t+e.max;continue}if(!0===i.hasGroup){de.getGroup(i,i.t,e.named).length=t-i.t;}i.t=t;continue}if(void 0!==e.choices&&"or"===e.operator){let t=de.doOrBlock(i);if(t){if(!0===e.negative)return null;if(!0===i.hasGroup){de.getGroup(i,i.t,e.named).length+=t;}i.t+=t;continue}if(!e.optional)return null}if(void 0!==e.choices&&"and"===e.operator){let t=de.doAndBlock(i);if(t){if(!0===e.negative)return null;if(!0===i.hasGroup){de.getGroup(i,i.t,e.named).length+=t;}i.t+=t;continue}if(!e.optional)return null}let a=i.terms[i.t],o=a.doesMatch(e,i.start_i+i.t,i.phrase_length);if(!0===e.anything||!0===o||de.isEndGreedy(e,i)){let t=i.t;if(e.optional&&r[i.r+1]&&e.negative)continue;if(e.optional&&r[i.r+1]){let t=a.doesMatch(r[i.r+1],i.start_i+i.t,i.phrase_length);if(e.negative||t){let e=i.terms[i.t+1];e&&e.doesMatch(r[i.r+1],i.start_i+i.t,i.phrase_length)||(i.r+=1);}}if(i.t+=1,!0===e.end&&i.t!==i.terms.length&&!0!==e.greedy)return null;if(!0===e.greedy){if(i.t=de.getGreedy(i,r[i.r+1]),null===i.t)return null;if(e.min&&e.min>i.t)return null;if(!0===e.end&&i.start_i+i.t!==n)return null}if(!0===i.hasGroup){const r=de.getGroup(i,t,e.named);i.t>1&&e.greedy?r.length+=i.t-t:r.length++;}}else {if(e.negative){let t=Object.assign({},e);if(t.negative=!1,!0===i.terms[i.t].doesMatch(t,i.start_i+i.t,i.phrase_length))return null}if(!0!==e.optional){if(i.terms[i.t].isImplicit()&&r[i.r-1]&&i.terms[i.t+1]){if(i.terms[i.t-1]&&i.terms[i.t-1].implicit===r[i.r-1].word)return null;if(i.terms[i.t+1].doesMatch(e,i.start_i+i.t,i.phrase_length)){i.t+=2;continue}}return null}}}return {match:i.terms.slice(0,i.t),groups:i.groups}};var pe=function(e,t,r){if(!r||0===r.length)return r;if(t.some(e=>e.end)){let t=e[e.length-1];r=r.filter(({match:e})=>-1!==e.indexOf(t));}return r};const me=/(?:^|\s)([\!\[\^]*(?:<[^<]*>)?\/.*?[^\\\/]\/[\?\]\+\*\$~]*)(?:\s|$)/,fe=/([\!\[\^]*(?:<[^<]*>)?\([^\)]+[^\\\)]\)[\?\]\+\*\$~]*)(?:\s|$)/,be=/ /g,ve=e=>/^[\!\[\^]*(<[^<]*>)?\//.test(e)&&/\/[\?\]\+\*\$~]*$/.test(e),ye=function(e){return e=(e=e.map(e=>e.trim())).filter(e=>e)};var we=function(e){let t=e.split(me),r=[];t.forEach(e=>{ve(e)?r.push(e):r=r.concat(e.split(fe));}),r=ye(r);let a=[];return r.forEach(e=>{(e=>/^[\!\[\^]*(<[^<]*>)?\(/.test(e)&&/\)[\?\]\+\*\$~]*$/.test(e))(e)||ve(e)?a.push(e):a=a.concat(e.split(be));}),a=ye(a),a};const ke=/\{([0-9]+,?[0-9]*)\}/,Ae=/&&/,De=new RegExp(/^<\s*?(\S+)\s*?>/),$e=function(e){return e[e.length-1]},Pe=function(e){return e[0]},Ee=function(e){return e.substr(1)},He=function(e){return e.substr(0,e.length-1)},je=function(e){return e=Ee(e),e=He(e)},Ne=function(e){let t={};for(let r=0;r<2;r+=1){if("$"===$e(e)&&(t.end=!0,e=He(e)),"^"===Pe(e)&&(t.start=!0,e=Ee(e)),("["===Pe(e)||"]"===$e(e))&&(t.named=!0,"["===Pe(e)?t.groupType="]"===$e(e)?"single":"start":t.groupType="end",e=(e=e.replace(/^\[/,"")).replace(/\]$/,""),"<"===Pe(e))){const r=De.exec(e);r.length>=2&&(t.named=r[1],e=e.replace(r[0],""));}if("+"===$e(e)&&(t.greedy=!0,e=He(e)),"*"!==e&&"*"===$e(e)&&"\\*"!==e&&(t.greedy=!0,e=He(e)),"?"===$e(e)&&(t.optional=!0,e=He(e)),"!"===Pe(e)&&(t.negative=!0,e=Ee(e)),"("===Pe(e)&&")"===$e(e)){Ae.test(e)?(t.choices=e.split(Ae),t.operator="and"):(t.choices=e.split("|"),t.operator="or"),t.choices[0]=Ee(t.choices[0]);let r=t.choices.length-1;t.choices[r]=He(t.choices[r]),t.choices=t.choices.map(e=>e.trim()),t.choices=t.choices.filter(e=>e),t.choices=t.choices.map(e=>e.split(/ /g).map(Ne)),e="";}if("/"===Pe(e)&&"/"===$e(e))return e=je(e),t.regex=new RegExp(e),t;if("~"===Pe(e)&&"~"===$e(e))return e=je(e),t.soft=!0,t.word=e,t}return !0===ke.test(e)&&(e=e.replace(ke,(e,r)=>{let a=r.split(/,/g);return 1===a.length?(t.min=Number(a[0]),t.max=Number(a[0])):(t.min=Number(a[0]),t.max=Number(a[1]||999)),t.greedy=!0,t.optional=!0,""})),"#"===Pe(e)?(t.tag=Ee(e),t.tag=(r=t.tag).charAt(0).toUpperCase()+r.substr(1),t):"@"===Pe(e)?(t.method=Ee(e),t):"."===e?(t.anything=!0,t):"*"===e?(t.anything=!0,t.greedy=!0,t.optional=!0,t):(e&&(e=(e=e.replace("\\*","*")).replace("\\.","."),t.word=e.toLowerCase()),t);var r;};var xe=Ne;var Fe=function(e,t={}){return e.filter(e=>e.groupType).length>0&&(e=function(e){let t,r=!1,a=-1;for(let n=0;n<e.length;n++){const i=e[n];"single"!==i.groupType||!0!==i.named?("start"===i.groupType&&(r=!0,"string"==typeof i.named||"number"==typeof i.named?t=i.named:(a+=1,t=a)),r&&(i.named=t),"end"===i.groupType&&(r=!1)):(a+=1,i.named=a);}return e}(e)),t.fuzzy||(e=function(e){return e.map(e=>{if(void 0!==e.choices&&!0===e.choices.every(e=>{if(1!==e.length)return !1;let t=e[0];return void 0!==t.word&&!0!==t.negative&&!0!==t.optional&&!0!==t.method})){let t={};e.choices.forEach(e=>{t[e[0].word]=!0;}),e.fastOr=t,delete e.choices;}return e})}(e)),e};var Ce=function(e,t={}){if(null==e||""===e)return [];if("object"==typeof e){if(function(e){return "[object Array]"===Object.prototype.toString.call(e)}(e)){if(0===e.length||!e[0])return [];if("object"==typeof e[0])return e;if("string"==typeof e[0])return function(e){return [{choices:e.map(e=>[{word:e}]),operator:"or"}]}(e)}return e&&"Doc"===e.isA?function(e){if(!e||!e.list||!e.list[0])return [];let t=[];return e.list.forEach(e=>{let r=[];e.terms().forEach(e=>{r.push(e.id);}),t.push(r);}),[{idBlocks:t}]}(e):[]}"number"==typeof e&&(e=String(e));let r=we(e);return r=r.map(e=>xe(e)),r=Fe(r,t),r=function(e,t){return !0===t.fuzzy&&(t.fuzzy=.85),"number"==typeof t.fuzzy&&(e=e.map(e=>(t.fuzzy>0&&e.word&&(e.fuzzy=t.fuzzy),e.choices&&e.choices.forEach(e=>{e.forEach(e=>{e.fuzzy=t.fuzzy;});}),e))),e}(r,t),r};var Be=function(e,t){let r=[],a=t[0].idBlocks;for(let t=0;t<e.length;t+=1)a.forEach(a=>{if(0===a.length)return;a.every((r,a)=>e[t+a].id===r)&&(r.push({match:e.slice(t,t+a.length)}),t+=a.length-1);});return r};var Ge=function(e,t,r=!1){if("string"==typeof t&&(t=Ce(t)),!0===he(e,t))return [];const a=t.filter(e=>!0!==e.optional&&!0!==e.negative).length;let n=e.terms(),i=[];if(t[0].idBlocks){let e=Be(n,t);if(e&&e.length>0)return pe(n,t,e)}if(!0===t[0].start){let e=ge(n,t,0,n.length);return e&&e.match&&e.match.length>0&&(e.match=e.match.filter(e=>e),i.push(e)),pe(n,t,i)}for(let e=0;e<n.length&&!(e+a>n.length);e+=1){let a=ge(n.slice(e),t,e,n.length);if(a&&a.match&&a.match.length>0&&(e+=a.match.length-1,a.match=a.match.filter(e=>e),i.push(a),!0===r))return pe(n,t,i)}return pe(n,t,i)};var ze=function(e,t){let r={};Ge(e,t).forEach(({match:e})=>{e.forEach(e=>{r[e.id]=!0;});});let a=e.terms(),n=[],i=[];return a.forEach(e=>{!0!==r[e.id]?i.push(e):i.length>0&&(n.push(i),i=[]);}),i.length>0&&n.push(i),n},Ie={match:function(e,t=!1){let r=Ge(this,e,t);return r=r.map(({match:e,groups:t})=>{let r=this.buildFrom(e[0].id,e.length,t);return r.cache.terms=e,r}),r},has:function(e){return Ge(this,e,!0).length>0},not:function(e){let t=ze(this,e);return t=t.map(e=>this.buildFrom(e[0].id,e.length)),t},canBe:function(e,t){let r=[],a=this.terms(),n=!1;for(let i=0;i<a.length;i+=1){let o=a[i].canBe(e,t);!0===o&&(!0===n?r[r.length-1].push(a[i]):r.push([a[i]]),n=o);}return r=r.filter(e=>e.length>0).map(e=>this.buildFrom(e[0].id,e.length)),r}};class Oe{constructor(e,t,r){this.start=e,this.length=t,this.isA="Phrase",Object.defineProperty(this,"pool",{enumerable:!1,writable:!0,value:r}),Object.defineProperty(this,"cache",{enumerable:!1,writable:!0,value:{}}),Object.defineProperty(this,"groups",{enumerable:!1,writable:!0,value:{}});}}Oe.prototype.buildFrom=function(e,t,r){let a=new Oe(e,t,this.pool);return r&&Object.keys(r).length>0?a.groups=r:a.groups=this.groups,a},Object.assign(Oe.prototype,Ie),Object.assign(Oe.prototype,ce);const Te={term:"terms"};Object.keys(Te).forEach(e=>Oe.prototype[e]=Oe.prototype[Te[e]]);var Ve=Oe;class Me{constructor(e={}){Object.defineProperty(this,"words",{enumerable:!1,value:e});}add(e){return this.words[e.id]=e,this}get(e){return this.words[e]}remove(e){delete this.words[e];}merge(e){return Object.assign(this.words,e.words),this}stats(){return {words:Object.keys(this.words).length}}}Me.prototype.clone=function(){let e=Object.keys(this.words).reduce((e,t)=>{let r=this.words[t].clone();return e[r.id]=r,e},{});return new Me(e)};var Je=Me;var Le=e=>{e.forEach((t,r)=>{r>0&&(t.prev=e[r-1].id),e[r+1]&&(t.next=e[r+1].id);});};const Se=/(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g,_e=/\S/,Ke=/[ .][A-Z]\.? *$/i,qe=/(?:\u2026|\.{2,}) *$/,We=/((?:\r?\n|\r)+)/,Re=/[a-z0-9\u00C0-\u00FF\u00a9\u00ae\u2000-\u3300\ud000-\udfff]/i,Ue=/^\s+/,Qe=function(e,t){if(!0===Ke.test(e))return !1;if(!0===qe.test(e))return !1;if(!1===Re.test(e))return !1;let r=e.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/,"").split(" "),a=r[r.length-1].toLowerCase();return !t.hasOwnProperty(a)};var Ze=function(e,t){let r=t.cache.abbreviations;e=e||"";let a=[],n=[];if(!(e=String(e))||"string"!=typeof e||!1===_e.test(e))return a;let i=function(e){let t=[],r=e.split(We);for(let e=0;e<r.length;e++){let a=r[e].split(Se);for(let e=0;e<a.length;e++)t.push(a[e]);}return t}(e=e.replace(" "," "));for(let e=0;e<i.length;e++){let t=i[e];if(void 0!==t&&""!==t){if(!1===_e.test(t)){if(n[n.length-1]){n[n.length-1]+=t;continue}if(i[e+1]){i[e+1]=t+i[e+1];continue}}n.push(t);}}for(let e=0;e<n.length;e++){let t=n[e];n[e+1]&&!1===Qe(t,r)?n[e+1]=t+(n[e+1]||""):t&&t.length>0&&(a.push(t),n[e]="");}if(0===a.length)return [e];for(let e=1;e<a.length;e+=1){let t=a[e].match(Ue);null!==t&&(a[e-1]+=t[0],a[e]=a[e].replace(Ue,""));}return a};const Xe=/\S/,Ye=/^[!?.]+$/,et$1=/(\S+)/,tt$1=/[a-z] ?\/ ?[a-z]*$/;let rt$1=[".","?","!",":",";","-","–","—","--","...","(",")","[","]",'"',"'","`"];rt$1=rt$1.reduce((e,t)=>(e[t]=!0,e),{});const at$1=function(e){if(!0===/^(re|un|micro|macro|trans|bi|mono|over)-?[^aeiou]./.test(e))return !1;if(!0===/^([a-z\u00C0-\u00FF/]+)(-|–|—)(like|ish|less|able)/i.test(e))return !1;if(!0===/^([a-z\u00C0-\u00FF`"'/]+)(-|–|—)([a-z0-9\u00C0-\u00FF].*)/i.test(e))return !0;return !0===/^([0-9]{1,4})(-|–|—)([a-z\u00C0-\u00FF`"'/-]+$)/i.test(e)},nt$1=function(e){let t=[];const r=e.split(/[-–—]/);let a="-",n=e.match(/[-–—]/);n&&n[0]&&(a=n);for(let e=0;e<r.length;e++)e===r.length-1?t.push(r[e]):t.push(r[e]+a);return t};var it$1=function(e){let t=[],r=[];if("number"==typeof(e=e||"")&&(e=String(e)),function(e){return "[object Array]"===Object.prototype.toString.call(e)}(e))return e;const a=e.split(et$1);for(let e=0;e<a.length;e++)!0!==at$1(a[e])?r.push(a[e]):r=r.concat(nt$1(a[e]));let n="";for(let e=0;e<r.length;e++){let a=r[e];!0===Xe.test(a)&&!1===rt$1.hasOwnProperty(a)&&!1===Ye.test(a)?(t.length>0?(t[t.length-1]+=n,t.push(a)):t.push(n+a),n=""):n+=a;}return n&&(0===t.length&&(t[0]=""),t[t.length-1]+=n),t=function(e){for(let t=1;t<e.length-1;t++)tt$1.test(e[t])&&(e[t-1]+=e[t]+e[t+1],e[t]=null,e[t+1]=null);return e}(t),t=function(e){const t=/^[0-9]{1,4}(:[0-9][0-9])?([a-z]{1,2})? ?(-|–|—) ?$/,r=/^[0-9]{1,4}([a-z]{1,2})? ?$/;for(let a=0;a<e.length-1;a+=1)e[a+1]&&t.test(e[a])&&r.test(e[a+1])&&(e[a]=e[a]+e[a+1],e[a+1]=null);return e}(t),t=t.filter(e=>e),t};var ot$1=function(e="",t,r){let a=null;return "string"!=typeof e&&("number"==typeof e?e=String(e):function(e){return "[object Array]"===Object.prototype.toString.call(e)}(e)&&(a=e)),a=a||Ze(e,t),a=a.map(e=>it$1(e)),r=r||new Je,a.map(e=>{e=e.map(e=>{let t=new Z$1(e);return r.add(t),t}),Le(e);let t=new Ve(e[0].id,e.length,r);return t.cache.terms=e,t})};var st$1=function(e,t){let r=new Je;return e.map((e,a)=>{let n=e.terms.map((n,i)=>{let o=new Z$1(n.text);return o.pre=void 0!==n.pre?n.pre:"",void 0===n.post&&(n.post=" ",i>=e.terms.length-1&&(n.post=". ",a>=e.terms.length-1&&(n.post="."))),o.post=void 0!==n.post?n.post:" ",n.tags&&n.tags.forEach(e=>o.tag(e,"",t)),r.add(o),o});return Le(n),new Ve(n[0].id,n.length,r)})};const lt$1=["Person","Place","Organization"];var ut$1={Noun:{notA:["Verb","Adjective","Adverb"]},Singular:{isA:"Noun",notA:"Plural"},ProperNoun:{isA:"Noun"},Person:{isA:["ProperNoun","Singular"],notA:["Place","Organization","Date"]},FirstName:{isA:"Person"},MaleName:{isA:"FirstName",notA:["FemaleName","LastName"]},FemaleName:{isA:"FirstName",notA:["MaleName","LastName"]},LastName:{isA:"Person",notA:["FirstName"]},NickName:{isA:"Person",notA:["FirstName","LastName"]},Honorific:{isA:"Noun",notA:["FirstName","LastName","Value"]},Place:{isA:"Singular",notA:["Person","Organization"]},Country:{isA:["Place","ProperNoun"],notA:["City"]},City:{isA:["Place","ProperNoun"],notA:["Country"]},Region:{isA:["Place","ProperNoun"]},Address:{isA:"Place"},Organization:{isA:["Singular","ProperNoun"],notA:["Person","Place"]},SportsTeam:{isA:"Organization"},School:{isA:"Organization"},Company:{isA:"Organization"},Plural:{isA:"Noun",notA:["Singular"]},Uncountable:{isA:"Noun"},Pronoun:{isA:"Noun",notA:lt$1},Actor:{isA:"Noun",notA:lt$1},Activity:{isA:"Noun",notA:["Person","Place"]},Unit:{isA:"Noun",notA:lt$1},Demonym:{isA:["Noun","ProperNoun"],notA:lt$1},Possessive:{isA:"Noun"}},ct$1={Verb:{notA:["Noun","Adjective","Adverb","Value","Expression"]},PresentTense:{isA:"Verb",notA:["PastTense","FutureTense"]},Infinitive:{isA:"PresentTense",notA:["PastTense","Gerund"]},Imperative:{isA:"Infinitive"},Gerund:{isA:"PresentTense",notA:["PastTense","Copula","FutureTense"]},PastTense:{isA:"Verb",notA:["FutureTense"]},FutureTense:{isA:"Verb"},Copula:{isA:"Verb"},Modal:{isA:"Verb",notA:["Infinitive"]},PerfectTense:{isA:"Verb",notA:"Gerund"},Pluperfect:{isA:"Verb"},Participle:{isA:"PastTense"},PhrasalVerb:{isA:"Verb"},Particle:{isA:"PhrasalVerb"},Auxiliary:{notA:["Noun","Adjective","Value"]}},ht$1={Value:{notA:["Verb","Adjective","Adverb"]},Ordinal:{isA:"Value",notA:["Cardinal"]},Cardinal:{isA:"Value",notA:["Ordinal"]},Fraction:{isA:"Value",notA:["Noun"]},RomanNumeral:{isA:"Cardinal",notA:["Ordinal","TextValue"]},TextValue:{isA:"Value",notA:["NumericValue"]},NumericValue:{isA:"Value",notA:["TextValue"]},Money:{isA:"Cardinal"},Percent:{isA:"Value"}};const dt$1=["Noun","Verb","Adjective","Adverb","Value","QuestionWord"];var gt$1={Adjective:{notA:["Noun","Verb","Adverb","Value"]},Comparable:{isA:["Adjective"]},Comparative:{isA:["Adjective"]},Superlative:{isA:["Adjective"],notA:["Comparative"]},NumberRange:{},Adverb:{notA:["Noun","Verb","Adjective","Value"]},Date:{notA:["Verb","Adverb","Preposition","Adjective"]},Month:{isA:["Date","Singular"],notA:["Year","WeekDay","Time"]},WeekDay:{isA:["Date","Noun"]},Timezone:{isA:["Date","Noun"],notA:["Adjective","ProperNoun"]},Time:{isA:["Date"],notA:["AtMention"]},Determiner:{notA:dt$1},Conjunction:{notA:dt$1},Preposition:{notA:dt$1},QuestionWord:{notA:["Determiner"]},Currency:{isA:["Noun"]},Expression:{notA:["Noun","Adjective","Verb","Adverb"]},Abbreviation:{},Url:{notA:["HashTag","PhoneNumber","Verb","Adjective","Value","AtMention","Email"]},PhoneNumber:{notA:["HashTag","Verb","Adjective","Value","AtMention","Email"]},HashTag:{},AtMention:{isA:["Noun"],notA:["HashTag","Verb","Adjective","Value","Email"]},Emoji:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Emoticon:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Email:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Acronym:{notA:["Plural","RomanNumeral"]},Negative:{notA:["Noun","Adjective","Value"]},Condition:{notA:["Verb","Adjective","Noun","Value"]}};const pt$1={Noun:"blue",Verb:"green",Negative:"green",Date:"red",Value:"red",Adjective:"magenta",Preposition:"cyan",Conjunction:"cyan",Determiner:"cyan",Adverb:"cyan"};var mt$1=function(e){return Object.keys(e).forEach(t=>{e[t].color?e[t].color=e[t].color:pt$1[t]?e[t].color=pt$1[t]:e[t].isA.some(r=>!!pt$1[r]&&(e[t].color=pt$1[r],!0));}),e};var ft$1=function(e){return Object.keys(e).forEach(t=>{let r=e[t],a=r.isA.length;for(let t=0;t<a;t++){let a=r.isA[t];e[a]&&(r.isA=r.isA.concat(e[a].isA));}r.isA=function(e){return e.filter((e,t,r)=>r.indexOf(e)===t)}(r.isA);}),e};var bt$1=function(e){let t=Object.keys(e);return t.forEach(r=>{let a=e[r];a.notA=a.notA||[],a.isA.forEach(t=>{if(e[t]&&e[t].notA){let r="string"==typeof e[t].notA?[e[t].isA]:e[t].notA||[];a.notA=a.notA.concat(r);}});for(let n=0;n<t.length;n++){const i=t[n];-1!==e[i].notA.indexOf(r)&&a.notA.push(i);}a.notA=function(e){return e.filter((e,t,r)=>r.indexOf(e)===t)}(a.notA);}),e};var vt$1=function(e){let t=Object.keys(e);return t.forEach(r=>{let a=e[r];a.lineage=[];for(let n=0;n<t.length;n++)-1!==e[t[n]].isA.indexOf(r)&&a.lineage.push(t[n]);}),e};var yt$1=function(e){return e=function(e){return Object.keys(e).forEach(t=>{let r=e[t];r.isA=r.isA||[],"string"==typeof r.isA&&(r.isA=[r.isA]),r.notA=r.notA||[],"string"==typeof r.notA&&(r.notA=[r.notA]);}),e}(e),e=ft$1(e),e=bt$1(e),e=mt$1(e),e=vt$1(e)};const wt$1=function(e,t){Object.keys(e).forEach(r=>{t[r]=e[r];});};var kt$1=(()=>{let e={};return wt$1(ut$1,e),wt$1(ct$1,e),wt$1(ht$1,e),wt$1(gt$1,e),e=yt$1(e),e})(),At={Comparative:"true¦better",Superlative:"true¦earlier",PresentTense:"true¦is,sounds",Value:"true¦a few",Noun:"true¦a5b4c2f1here,ie,lit,m0no doubt,pd,tce;a,d;t,y;a,ca,o0;l,rp;a,l;d,l,rc",Copula:"true¦a1is,w0;as,ere;m,re",PastTense:"true¦be3came,d2had,lied,meant,sa2taken,w0;as,e0;nt,re;id;en,gan",Condition:"true¦if,lest,unless",Preposition:"true¦'o,-,aLbIcHdGexcept,fFiDmidQnotwithstandiRoBpSqua,sAt6u3vi2w0;/o,hereNith0;!in,oR;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oJ;ans,ince,o that;',f0n2ut;!f;f,n0;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut",Gerund:"true¦accord0be0develop0go0result0stain0;ing",Negative:"true¦n0;ever,o0;!n,t",QuestionWord:"true¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s",Plural:"true¦records",Conjunction:"true¦&,aFbBcuz,how9in caEno8o7p5supposing,t2v1wh0yet;eth9ile;ers4s;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh",Abbreviation:"true¦a0Jb0Gc0Ad08e05f02g01h00iYjWkanVlTmNnKoJpFque,rDs8t6u5v2w0;is0r,y0B;!c;a,b,e1i0ol,s,t;tro,vo;r,t;niv,safa,t;ce,e0;l,mp,nn,x;ask,e2fc,gt,i1q,r,s,t,u0;pt,rg;r,tu;c,nJp0;!t;b,d,e0;pGs,v;a,d,ennNhd,l,p,r1s0vt;!eud;ef,o0;b,f,n;ct,kla,nt;e0ov;b0e;!r;a4d,essrs,i1lle,me,r7s0t;!tr;n1s0;c,ter;!n;!j,r,sc;at,it,lb,ng,t0;!d;!s;an,d,r,u0;l,n;a,da,e,n0;c,f;on,wy;a,en,ov;e1ig,l0m,r,t,y;!a;b,m;a,g,ng,s1tc,x0;!p;p,q,t;ak,e0ist,r;c,f,pt,t;a3ca,l,m2o0pl,res,yn;!l0m1nn,rp;!o;dr;!l0pt;!if;a,c,l1r0;ig,os;!dg,vd;d4l3p2r1ss0tty,ug,ve;n,t;c,iz;prox,r,t;!ta;!j,m,v",Pronoun:"true¦'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s",Singular:"true¦0:15;1:12;2:18;a15b0Sc0Jd0Ce09f04gZhViUjel0kitty,lSmOnNoMpHquestionGrEs9t6u4w3;ay,om02;nc0Zs 3;doll0Kst0M; rex,a4h3ic,ragedy,v show;ere,i2;l0x return;i6ky,omeoMt3uper bowl,yst14;ep4ri2u3;de0Xff;faSmoS;st1ze;al0i2o3;om,se;! mark;a6i1la5r4u3;dPrpoH;eroga00ie0Gobl0U;te,y1;rt,te0N;bjWceJthers,verview;othi2umb1;a5ee08o3;del,m3nopo0rni2th1;!my;n,yf0;i3unch;ne;ci2nsect;ead start,o3uman right;l0me4u3;se;! run;adf0entlem6irl02laci1od,rand4u3;l0y; slam,fa3mo3;th1;an;a6ella,ly,ol0r4un3;di2;ee market,iWo3;nti1sP;mi0th1;conomy,gg,ner7ven4x3;ampTecu9;i2t;ad8e5inn1o3ragonf0ude;cumentGg3i0l0or;gy;ath,t3;ec3;tive;!dy;a9eili2h7i5o3redit card;ttage,u3;ri1sin;ty,vil w3;ar;andeli1ocol3;ate;n3rF;ary;aCel0lesJo8r5u3;n3tterf0;ti2;eakfa4o3;!th1;st;dy,tt5y3;!fri3;end;le;nki2r3;ri1;er;d5l0noma0u3;nt;ly; homin5verti3;si2;ng;em",FemaleName:"true¦0:J3;1:J7;2:IG;3:IF;4:IX;5:IK;6:JO;7:H0;8:JG;9:JK;A:HN;B:HY;C:IT;D:IP;E:JD;F:HC;G:I0;aGRbFLcDPdCYeBOfB4gADh9Ti9Gj8Gk7Gl60m49n3No3Jp37qu36r2Ds16t0Eu0Cv02wVxiTyOzH;aLeIineb,oHsof2;e3Uf2la,ra;h3iKlIna,ynH;ab,ep;da,ma;da,h3iHra;nab;aKeJi0Fol5BuIvH;etAonDO;i0na;le0sen2;el,gm3Jn,rGJs8W;aoHme0nyi;m62yAE;aMendDYhiDFiH;dele8lJnH;if48niHo0;e,f47;a,helmi0lHma;a,ow;ka0nB;aNeKiHusa5;cIktoriBMlAole7viH;anC3enJ0;kF9tor2;da,lA9nus,rHs0;a,nHoniH4;a,iFQ;leHnesH4;nIHrH;i1y;g8rHxH5;su5te;aYeUhRiNoLrIuHy3;i,la;acIZiHu0L;c2na,sH;hBPta;nHr0H;iBNya;aJffaEOnHs6;a,gtiH;ng;!nFQra;aIeHomasi0;a,l9Po8Ares1;l2ndolwethu;g9Go88rIssH;!a,ie;eHi,ri9;sa,za;bPlNmLnJrIs6tHwa0;ia0um;a63yn;iHya;a,ka,s6;arB6e3iHmEDra;!ka;a,iH;a,t6;at6it6;a0Fcarlet3We0BhXiTkye,neza0oRtNuIyH;bIBlvi1;e,ha,mayIEni7sIzH;an3MetAie,y;anHi9;!a,e,nH;aDe;aJeH;fHl5GphH;an4;cHZr5;b2fiA8m0OnHphi1;d3ia,ja,ya;er3lJmon1nIobh8PtH;a,i;dy;lEPv2;aMeIirHo0risF7y5;a,lDK;ba,e0i5lJrH;iHrDOyl;!d8Hfa;ia,lDX;hd,iMki3nJrIu0w0yH;la,ma,na;i,le8on,ron;aIda,ia,nHon;a,on;!ya;k6mH;!aa;lJrItaye81vH;da,inj;e0ife;en1i0ma;anA5bNd3Nh1RiBkMlLmJndIrHs6vannaD;aDi0;ra,y;aHi3;nt6ra;lDKma,ome;ee0in8Ru3;in1ri0;a05e00hYiVoIuH;by,thDH;bScRghQl2KnPsJwIxH;anAXie,y;an,e0;aIeHie,lE; merBLann9ll1marDBt7;!lHnn1;iHyn;e,nH;a,d9K;da,i,na;ayy8D;hel62io;bDKer7yn;a,cIkHmas,n9Fta,ya;ki,o;helGki;ea,iannGDoH;da,n1K;an0bJem9Agi0iInHta,y0;a88ee;han83na;a,eH;cEAkaD;bi0chIe,i0mo0nHquEKvCy0;di,ia;aEIelHiB;!e,le;een4ia0;aNeMhKipaluk,oJrHute66;iHudenCQ;scil3LyamvaB;lly,rt2;ilome0oebe,ylH;is,lis;arl,ggy,nelope,r5t3;ige,m0TnKo5rvaDGtIulH;a,etAin1;ricHsy,tBY;a,e,ia;do3i06;ctav2dIfCZis6lHphCZumC3yunbileg;a,ga,iv2;eHvAC;l2tA;aWeUiMoIurHy5;!ay,ul;a,eJor,rIuH;f,r;aDeCma;ll1mi;aNcLhariBOkKlaJna,sHta,vi;anHha;ur;!y;a,iDTki;hoGk9VolH;a,eDJ;!mh;hir,lHna,risFsreC;!a,lBT;asuLdKh2i6CnJomi9rgEPtHzanin zah3;aHhal4;li1s6;cy,etA;a,e8iEV;nngu30;a09ckenz4e01iMoJrignayani,uriDDyH;a,rH;a,lNna,tG;bi0i3llBInH;a,iH;ca,ka,qD3;a,cTkaSlNmi,nLrItzi,yH;ar;aIiam,lH;anEO;!l,nB;dy,eHh,n4;nhGrva;aKdJiCPlH;iHy;cent,e;red;!gros;!e5;ae5hH;ae5el3Z;ag5EgNi,lKrH;edi79iIjem,on,yH;em,l;em,sF;an4iHliF;nHsCE;a,da;!an,han;b0DcASd0Be,g09ha,i08ja,l06n04rLsoum60tKuIv82x9IyHz4;a,bell,ra,soB9;de,rH;a,eC;h8Fild1t4;a,cYgUiKjor4l7Sn4s6tJwa,yH;!aHbe6Wja8lAE;m,nBH;a,ha,in1;!aJbCBeIja,lEna,sHt64;!a,ol,sa;!l1H;! Jh,mInH;!a,e,n1;!awit,i;aliAHcJeduarBfernIjHlui5Y;o6Ful2;anB;ecil2la3;arJeIie,oHr44ueriA;!t;!ry;et42i37;el4Ui76y;dHon,ue5;akran7y;ak,en,iHk,lo3O;a,ka,nB;a,re,s4te;daHg4;!l3A;alEd4elHge,isDBon0;ei8in1yn;el,le;a0Ne0CiYoQuLyH;d2la,nH;!a,dIeBGnHsCL;!a,eBF;a,sCJ;aCWcJel0PiFlIna,pHz;e,i7;a,u,wa;iHy;a0Se,ja,l2JnB;is,l1SrJttIuHvel4;el5is1;e,ie;aKeIi9na,rH;a86i9;lHn1t7;ei;!in1;aSbb9CdRepa,lMnJsIv2zH;!a,be5LetAz4;a,etA;!a,dH;a,sHy;ay,ey,i,y;a,iJja,lHy;iHy;aA0e;!aH;!n5F;ia,ya;!nH;!a,ne;aPda,e0iNjYla,nMoKsJtHx4y5;iHt4;c2t2;e2LlCG;la,nHra;a,ie,o3;a,or1;a,gh,laH;!ni;!h,nH;a,d3e,n5P;cOdon97iNkes6mi9Ana,rMtJurIvHxmi,y5;ern1in2;a,e54ie,yn;as6iIoH;nya,ya;fa,s6;a,isF;a,la;ey,ie,y;a04eZhXiOlAKoNrJyH;lHra;a,ee,ie;istHy6D;a,en,iIyH;!na;!e,n59;nul,ri,urtnB0;aOerNlAZmJrHzzy;a,stH;en,in;!berlImernH;aq;eHi,y;e,y;a,stC;!na,ra;aHei3ongordzol;dij1w5;el7QiKjsi,lJnIrH;a,i,ri;d3na,za;ey,i,lBDs4y;ra,s6;bi7cAJdiat7IeB2iRlQmPnyakuma19rNss6KtKvi7yH;!e,lH;a,eH;e,i8L;a6DeIhHi4NlEri0y;ar6Ber6Bie,leCrB2y;!lyn8Gri0;a,en,iHl5Soli0yn;!ma,n3VsF;a5il1;ei8Ei,l4;a,tl6L;a07eYiVoNuH;anLdKliHst63;a8HeHsF;!n8tH;!a,te;e5Ji3Jy;a,i7;!anNcelEd6RelGhan7RlLni,sIva0yH;a,ce;eHie;fHlEph5U;a,in1;eHie;en,n1;!a,e,n41;lHng;!i1ClH;!i1B;anMle0nJrIsH;i8Csi8C;i,ri;!a,elGif2CnH;a,etAiHy;!e,f2A;a,e8EiInH;a,e8DiH;e,n1;cMd1mi,nIque4Xsmin3Ovie3y8zH;min9;a9eIiH;ce,e,n1s;!lHsFt0F;e,le;inIk4lEquelH;in1yn;da,ta;lRmPnOo0rNsIvaHzaro;!a0lu,na;aJiIlaHob84;!n9N;do3;!belHdo3;!a,e,l39;a77en1i0ma;a,di3es,gr6Yji;a8elBogH;en1;a,e8iHo0se;a0na;aSeOiJoHusFyacin2B;da,ll4rten23snH;a,i9Q;lImaH;ri;aIdHlaI;a,egard;ry;ath1CiJlInriet7rmi8sH;sa,t1B;en2Sga,mi;di;bi2Dil8IlNnMrJsItHwa,yl8Iz7H;i5St4;n5Yti;iHmo51ri52;etH;!te;aDnaD;a,ey,l4;a03eXiSlQoOrKunJwH;enHyne1Q;!dolE;ay,el;acIetHiselB;a,chC;e,ieH;!la;ld1AogooH;sh;adys,enHor2yn2H;a,da,na;aKgi,lIna,ov89selHta;a,e,le;da,liH;an;!n0;mLnJorgIrH;ald3Pi,m3Ctru8B;etAi4W;a,eHna;s26vieve;ma;bIil,le,mHrnet,yG;al5Ni5;i5FrielH;a,l1;aVeSiRloOoz2rH;anJeIiH;da,eB;da,ja;!cH;esIiHoi0O;n1s61;!ca;!rH;a,encH;e,ia;en,o0;lIn0rnH;!anB;ec2ic2;jr,n7rKtHy9;emIiHma,ouma7;ha,ma,n;eh;ah,iBrah,za0;cr4Nd0Ne0Mi0Lk7l04mWn4YrTsNtMuLvH;aJelIiH;!e,ta;in0Gyn;!ngel2S;geni1la,ni45;h5Sta;mLperanKtH;eIhHrel5;er;l30r9;za;a,eralB;iHma,nest2Jyn;cHka,n;a,ka;a,eMiJmH;aHie,y;!li8;lHn1;ee,iHy;a,e,ja;lHrald;da,y;aWeUiNlMma,no3oKsJvH;a,iH;na,ra;a,ie;iHuiH;se;a,en,ie,y;a0c2da,f,nMsJzaH;!betHve7;e,h;aHe,ka;!beH;th;!a,or;anor,nH;!a;!in1na;leCs6;vi;eIiHna,wi0;e,th;l,n;aYeMh2iLjeneKoHul30;lor5Tminiq4In3FrHtt4;a,eCis,la,othHthy;ea,y;ba;an0AnaDon8x4ya;anQbPde,eOiMja,lJmetr2nHsir5K;a,iH;ce,se;a,iIla,orHphi8;es,is;a,l6D;dHrdH;re;!d5Cna;!b2HoraDra;a,d3nH;!a,e;hl2i0l0HmNnLphn1rIvi1XyH;le,na;a,by,cIia,lH;a,en1;ey,ie;a,etAiH;!ca,el1Cka,z;arHia;is;a0Se0Oh05i03lVoKrIynH;di,th2;istHy05;al,i0;lPnMrIurH;tn1E;aJd2NiHn2Nri8;!nH;a,e,n1;!l1X;cepci59n4sH;tanHuelo;ce,za;eHleC;en,tA;aJeoIotH;il51;!pat3;ir9rJudH;etAiH;a,ne;a,e,iH;ce,sZ;a3er3ndH;i,y;aReNloe,rH;isJyH;stH;al;sy,tH;a1Ren,iHy;!an1e,n1;deJlseIrH;!i9yl;a,y;li8;nMrH;isKlImH;ai8;a,eHotA;n1tA;!sa;d3elGtH;al,elG;cIlH;esAi44;el2ilH;e,ia,y;itlZlYmilXndWrOsMtHy5;aKeJhHri0;erHleCrEy;in1;ri0;li0ri0;a33sH;a32ie;a,iNlLmeJolIrH;ie,ol;!e,in1yn;lHn;!a,la;a,eHie,o7y;ne,y;na,sF;a0Hi0H;a,e,l1;is7l4;in,yn;a0Ie02iZlXoUrH;andSeQiJoIyH;an0nn;nwEok9;an3DdgLg0XtH;n2XtH;!aInH;ey,i,y;ny;etH;!t9;an0e,nH;da,na;i9y;bbi9glarIlo05nH;i7n4;ka;ancHossom,ythe;a,he;an17lja0nHsm3I;i7tH;ou;aUcky,linTni7rPssOtJulaDvH;!erlH;ey,y;hJsy,tH;e,iHy9;e,na;!anH;ie,y;!ie;nHt6yl;adIiH;ce;etAi8;ay,da;!triH;ce,z;rbJyaH;rmH;aa;a3ie,o3ra;a2Sb2Md23g1Zi1Qj5l16m0Xn09oi,r04sUtTuPvOwa,yIzH;ra,u0;aKes6gJlIseH;!l;in;un;!nH;a,na;a,i2Ir2J;drJgus1RrIsteH;ja;el2;a,ey,i,y;aahua,he0;hIi2Gja,mi7s2DtrH;id;aMlIraqHt21;at;eIi9yH;!n;e,iHy;gh;!nH;ti;iJleIo6pi7;ta;en,n1tA;aHelG;!n1J;a00dje5eYgUiSjQnJohito,toHya;inetAnH;el5ia;!aKeIiHmJ;e,ka;!mHtA;ar4;!belIliFmU;sa;!le;a,eliH;ca;ka,sHta;a,sa;elHie;a,iH;a,ca,n1qH;ue;!tA;te;! JbImHstasiNya;ar2;el;cla3jul2pau5;aLberKeliJiHy;e,l2naH;!ta;a,ja;!ly;hGiIl2nB;da;a,ra;le;aWba,ePiMlKma,thJyH;a,c2sH;a,on,sa;ea;iHys0N;e,s0M;a,cIn1sHza;a,e,ha,on,sa;e,ia,ja;c2is6jaKksaKna,sJxH;aHia;!nd3;ia,saH;nd3;ra;ia;i0nIyH;ah,na;a,is,naDoud;la;c6da,leCmNnLsH;haDlH;inHyY;g,n;!h;a,o,slH;ey;ee;en;at6g4nIusH;ti0;es;ie;aWdiTelMrH;eJiH;anMenH;a,e,ne;an0;na;!aLeKiIyH;nn;a,n1;a,e;!ne;!iH;de;e,lEsH;on;yn;!lH;i8yn;ne;aKbIiHrL;!gaK;ey,i9y;!e;gaH;il;dKliyJradhIs6;ha;ya;ah;a,ya",Actor:"true¦aJbGcFdCengineIfAgardenIh9instructPjournalLlawyIm8nurse,opeOp5r3s1t0;echnCherapK;ailNcientJecretary,oldiGu0;pervKrgeon;e0oofE;ceptionGsearC;hotographClumbColi1r0sychologF;actitionBogrammB;cem6t5;echanic,inist9us4;airdress8ousekeep8;arm7ire0;fight6m2;eputy,iet0;ici0;an;arpent2lerk;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt",Honorific:"true¦a01bYcQdPeOfiJgIhon,jr,king,lHmCoffic00p7queen,r3s0taoiseach,vice6;e1fc,gt,ir,r,u0;ltRpt,rg;cond liInBrgeaJ;abbi,e0;ar1p9s,v0;!erend; admirX;astOhd,r0vt;esideDi1of0;!essM;me mini4nce0;!ss;a3essrs,i2lle,me,r1s0;!tr;!s;stK;gistrate,j,r6yF;i3lb,t;en,ov;eld mar3rst l0;ady,i0;eutena0;nt;shG;sq,xcellency;et,oct6r,utchess;apt6hance4mdr,o0pl;lonel,m2ngress0unci3;m0wom0;an;dr,mand5;ll0;or;!ain;ldg,rig0;!adi0;er;d0sst,tty,yatullah;j,m0v;!ir0;al",SportsTeam:"true¦0:1A;1:1H;2:1G;a1Eb16c0Td0Kfc dallas,g0Ihouston 0Hindiana0Gjacksonville jagua0k0El0Bm01newToQpJqueens parkIreal salt lake,sAt5utah jazz,vancouver whitecaps,w3yW;ashington 3est ham0Rh10;natio1Oredski2wizar0W;ampa bay 6e5o3;ronto 3ttenham hotspur;blue ja0Mrapto0;nnessee tita2xasC;buccanee0ra0K;a7eattle 5heffield0Kporting kansas0Wt3;. louis 3oke0V;c1Frams;marine0s3;eah15ounG;cramento Rn 3;antonio spu0diego 3francisco gJjose earthquak1;char08paA; ran07;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat1steele0;il3oenix su2;adelphia 3li1;eagl1philNunE;dr1;akland 3klahoma city thunder,rlando magic;athle0Mrai3;de0; 3castle01;england 7orleans 6york 3;city fc,g4je0FknXme0Fred bul0Yy3;anke1;ian0D;pelica2sain0C;patrio0Brevolut3;ion;anchester Be9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Fvi3;kings;imberwolv1wi2;rewe0uc0K;dolphi2heat,marli2;mphis grizz3ts;li1;cXu08;a4eicesterVos angeles 3;clippe0dodDla9; galaxy,ke0;ansas city 3nE;chiefs,roya0E; pace0polis colU;astr06dynamo,rockeTtexa2;olden state warrio0reen bay pac3;ke0;.c.Aallas 7e3i05od5;nver 5troit 3;lio2pisto2ti3;ge0;broncZnuggeM;cowbo4maver3;ic00;ys; uQ;arCelKh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki1;brow2cavalie0india2;bengaWre3;ds;arlotte horAicago 3;b4cubs,fire,wh3;iteB;ea0ulR;diff3olina panthe0; c3;ity;altimore 9lackburn rove0oston 5rooklyn 3uffalo bilN;ne3;ts;cel4red3; sox;tics;rs;oriol1rave2;rizona Ast8tlanta 3;brav1falco2h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls",Uncountable:"true¦0:1I;1:16;2:1X;a1Rb1Jc1Ad17e10f0Ug0Nh0Ii0Ej0Dknowled1Ql08mYnews,oXpTrOsDt8vi7w3;a5ea0Bi4oo3;d,l;ldlife,ne;rmth,t0;neg17ol0Ctae;e6h5oothpaste,r3una;affTou3;ble,sers,t;ermod1Mund0;a,nnis;aBcene0Aeri1hAil9kittl1now,o8p6t4u3;g10nshi0Q;ati1Le3;am,el;ace1Ee3;ci1ed;ap,cc0;k,v0;eep,ingl1;d0Dfe18l3nd,tish;m11t;a6e4ic3;e,ke0M;c3laxa0Isearch;ogni0Hrea0H;bi1in;aPe5hys2last9o3ress04;l3rk,w0;it2yA;a12trZ;bstetr2il,xygen;aAe8ilk,o5u3;mps,s3;ic;n3o0I;ey,o3;gamy;a3chan2;sl1t;chine3il,themat2; learn0Bry;aught0e5i4ogi0Su3;ck,g0I;ce,ghtn08ngui0QteratN;a3isM;th0;ewelAusti0L;ce,mp3nformaUtself;a3ortan0J;ti3;en0H;a6isto5o3;ck3mework,n3spitali0B;ey;ry;ir,libut,ppiD;ene6o4r3um,ymna0D;aCound;l3ssip;d,f; 3t2;editQpo3;ol;i7lour,o4urnit3;ure;od,rgive3uri0wl;ne3;ss;c9sh;conom2duca8lectr7n5quip6th2very3;body,o3thH;ne;joy3tertain3;ment;iciPon2;tiI;ar4iabet1raugh4;es;ts;aAelcius,h6iv2l5o3urrency;al,ld w3nfusiDttD;ar;ass2oth5;aos,e3;e4w3;ing;se;r7sh;a7eef,i4lood,owls,read,utt0;er;lliar4s3;on;ds;g3ss;ga3;ge;c8dvi7ero5ir4mnes3rt,thlet2;ty;craft;b2d3naut2;ynam2;ce;id,ou3;st2;ics",Infinitive:"true¦0:6S;1:76;2:5C;3:74;4:73;5:67;6:6F;7:6Y;8:6Q;9:72;A:70;B:5X;C:6X;D:6L;E:77;F:5B;a6Kb66c57d4De3Xf3Jg3Dh37i2Uj2Sk2Ql2Hm26n23o1Yp1Jr0Rs06tYuTvOwHyG;awn,e31ield;aJe1Zhist6iIoGre6D;nd0rG;k,ry;pe,sh,th0;lk,nHrGsh,tDve;n,raE;d0t;aJiHoG;te,w;eGsC;!w;l6Jry;nHpGr4se;gra4Pli41;dGi9lo5Zpub3Q;erGo;mi5Cw1I;aMeLhKig5SoJrHuGwi7;ne,rn;aGe0Mi5Uu7y;de,in,nsf0p,v5J;r2ZuD;ank,reatB;nd,st;lk,rg1Qs9;aZcWeVhTi4Dkip,lSmRnee3Lo52pQtJuGwitD;bmCck,ff0gge7ppHrGspe5;ge,pri1rou4Zvi3;ly,o36;aLeKoJrHuG;dy,mb6;aFeGi3;ngthBss,tD;p,re;m,p;in,ke,r0Qy;la58oil,rink6;e1Zi6o3J;am,ip;a2iv0oG;ck,rtBut;arDem,le5n1r3tt6;aHo2rG;atDew;le,re;il,ve;a05eIisk,oHuG;in,le,sh;am,ll;a01cZdu8fYgXje5lUmTnt,pQquPsKtJvGwa5V;eGiew,o36;al,l,rG;se,t;aFi2u44;eJi7oItG;!o2rG;i5uc20;l3rt;mb6nt,r3;e7i2;air,eHlGo43r0K;a8y;at;aFemb0i3Zo3;aHeGi3y;a1nt;te,x;a5Dr0J;act1Yer,le5u1;a13ei3k5PoGyc6;gni2Cnci6rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlOoMrIuG;b21ll,mp,rGsh;cha1s4Q;ai1eIiEoG;cGdu8greAhibCmi1te7vi2W;eAlaim;di5pa2ss,veE;iEp,rtr46sGur;e,t;aHead,uG;g,n4;n,y;ck,le;fo34mCsi7;ck,iErt4Mss,u1;bJccur,ff0pera9utweIverGwe;co47lap,ta22u1wG;helm;igh;ser3taF;eHotG;e,i8;ed,gle5;aMeLiIoHuG;ltip3Grd0;nit13ve;nHrr12sreprG;eseE;d,g6us;asu2lt,n0Nr4;intaFna4rHtG;ch,t0;ch,kGry;et;aMeLiJoGu1C;aHck,oGve;k,sB;d,n;ft,g35ke,mCnk,st2YveG;!n;a2Fc0Et;b0Nck,uG;gh,nD;iGno34;ck,ll,ss;am,oFuG;d4mp;gno2mQnGss3H;cOdica9flu0MhNsKtIvG;eGol3;nt,st;erGrodu8;a5fe2;i7tG;aGru5;ll;abCibC;lu1Fr1D;agi24pG;lemeEo22ro3;aKeIi2oHuG;nt,rry;n02pe,st;aGlp;d,t;nd6ppBrm,te;aKloAove1PrIuG;arGeAi15;ant39d;aGip,ow,umb6;b,sp;in,th0ze;aReaQiOlMoJrHuncG;ti3J;acGeshB;tu2;cus,lHrG;ce,eca7m,s30;d,l24;a1ZoG;at,od,w;gu2lGni1Xt,x;e,l;r,tu2;il,stBvG;or;a15cho,le5mSnPstNvalua9xG;a0AcLerKi7pGte19;a18eHi2laFoGreA;rt,se;ct,riG;en8;ci1t;el,han4;abGima9;li1J;ab6couXdHfor8ga4han8j03riDsu2t0vG;isi2Vy;!u2;body,er4pG;hasiGow0;ze;a07eUiLoKrHuG;mp;aHeAiG;ft;g,in;d4ubt;ff0p,re5sHvG;iZor8;aKcHliGmiApl1Btingui14;ke;oGuA;uGv0;ra4;gr1YppG;ear,ro3;cOeNfLliv0ma0Fny,pKsHterG;mi0G;cribe,er3iHtrG;oy;gn,re;a0Be0Ai5osC;eGi0By;at,ct;m,pB;iIlHrG;ea1;a2i06;de;ma4n8rGte;e,kB;a0Ae09h06i9l04oJrG;aHeGoAu0Hy;a9dC;ck,ve;llZmSnHok,py,uGv0;gh,nt;cePdu5fMsKtIvG;eGin8;rt,y;aFin0VrG;a7ibu9ol;iGtitu9;d0st;iHoGroE;rm;gu2rm;rn;biLfoKmaJpG;a2laF;in;re;nd;rt;ne;ap1e5;aGip,o1;im,w;aHeG;at,ck,w;llen4n4r4se;a1nt0;ll,ncIrGt0u1;eGry;!en;el;aSePloOoMrIuG;lGry;ly;igHuG;sh;htB;en;a7mb,o7rrGth0un8;ow;ck;ar,lHnefCtrG;ay;ie3ong;ng,se;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waC;acIeHra5;ct;m0Fnd;h,k;k,sG;eIiHocia9uG;me;gn,st;mb6rt;le;chHgGri3;ue;!i3;eaJlIroG;aDve;ch;aud,y;l,r;noun8sw0tG;icipa9;ce;lHt0;er;e4ow;ee;rd;aRdIju7mCoR;it;st;!reA;ss;cJhie3knowled4tiva9;te;ge;ve;eIouEu1;se;nt;pt;on",Unit:"true¦0:19;a14b12c0Od0Ne0Lf0Gg0Ch09in0Hjoule0k02l00mNnMoLpIqHsqCt7volts,w6y4z3°2µ1;g,s;c,f,n;b,e2;a0Nb,d0Dears old,o1;tt0H;att0b;able4b3d,e2on1sp;!ne0;a2r0D;!l,sp;spo04; ft,uare 1;c0Id0Hf3i0Fkilo0Jm1ya0E;e0Mil1;e0li0H;eet0o0D;t,uart0;ascals,e2i1ou0Pt;c0Mnt0;rcent,t02;hms,uYz;an0JewtT;/s,b,e9g,i3l,m2p1²,³;h,s;!²;!/h,cro5l1;e1li08;! pFs1²;! 1;anEpD;g06s0B;gQter1;! 2s1;! 1;per second;b,i00m,u1x;men0x0;b,elvin0g,ilo2m1nR;!/h,ph,²;byZgXmeter1;! p2s1;! p1;er1; hour;e1g,r0z;ct1rtz0;aXogQ;al2b,igAra1;in0m0;!l1;on0;a4emtPl2t1;²,³; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s",Organization:"true¦0:46;a3Ab2Qc2Ad21e1Xf1Tg1Lh1Gi1Dj19k17l13m0Sn0Go0Dp07qu06rZsStFuBv8w3y1;amaha,m0Xou1w0X;gov,tu2S;a3e1orld trade organizati41;lls fargo,st1;fie22inghou16;l1rner br3D;-m11gree31l street journ25m11;an halNeriz3Wisa,o1;dafo2Gl1;kswagLvo;bs,kip,n2ps,s1;a tod2Rps;es35i1;lev2Xted natio2Uv; mobi2Kaco bePd bMeAgi frida9h3im horto2Tmz,o1witt2W;shiba,y1;ota,s r Y;e 1in lizzy;b3carpen33daily ma2Xguess w2holli0rolling st1Ms1w2;mashing pumpki2Ouprem0;ho;ea1lack eyed pe3Fyrds;ch bo1tl0;ys;l2s1;co,la m12;efoni07us;a6e4ieme2Gnp,o2pice gir5ta1ubaru;rbucks,to2N;ny,undgard1;en;a2Rx pisto1;ls;few25insbu26msu1X;.e.m.,adiohead,b6e3oyal 1yan2X;b1dutch she4;ank;/max,aders dige1Ed 1vl32;bu1c1Uhot chili peppe2Klobst28;ll;c,s;ant2Vizno2F;an5bs,e3fiz24hilip morrBi2r1;emier27octer & gamb1Rudenti14;nk floyd,zza hut;psi28tro1uge08;br2Qchina,n2Q; 2ason1Xda2G;ld navy,pec,range juli2xf1;am;us;a9b8e5fl,h4i3o1sa,wa;kia,tre dame,vart1;is;ke,ntendo,ss0K;l,s;c,st1Etflix,w1; 1sweek;kids on the block,york08;a,c;nd1Us2t1;ional aca2Fo,we0Q;a,cYd0O;aAcdonald9e5i3lb,o1tv,yspace;b1Nnsanto,ody blu0t1;ley crue,or0O;crosoft,t1;as,subisO;dica3rcedes2talli1;ca;!-benz;id,re;'s,s;c's milk,tt13z1Y;'ore09a3e1g,ittle caesa1Ktd;novo,x1;is,mark; pres5-z-boy,bour party;atv,fc,kk,m1od1K;art;iffy lu0Lo3pmorgan1sa;! cha1;se;hnson & johns1Sy d1R;bm,hop,n1tv;c,g,te1;l,rpol; & m,asbro,ewlett-packaTi3o1sbc,yundai;me dep1n1J;ot;tac1zbollah;hi;eneral 6hq,l5mb,o2reen d0Iu1;cci,ns n ros0;ldman sachs,o1;dye1g0B;ar;axo smith kliZencore;electr0Im1;oto0V;a3bi,da,edex,i1leetwood mac,oGrito-l0A;at,nancial1restoV; tim0;cebook,nnie mae;b06sa,u3xxon1; m1m1;ob0H;!rosceptics;aiml0Ae5isney,o3u1;nkin donuts,po0Wran dur1;an;j,w j1;on0;a,f leppa3ll,p2r spiegZstiny's chi1;ld;eche mode,t;rd;aEbc,hBi9nn,o3r1;aigsli5eedence clearwater reviv1ossra05;al;!ca c5l4m1o0Ast05;ca2p1;aq;st;dplMgate;ola;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r0Hy;dbury,pital o1rl's jr;ne;aGbc,eCfAl6mw,ni,o2p,r1;exiteeWos;ei3mbardiJston 1;glo1pizza;be;ng;ack & deckFo2ue c1;roX;ckbuster video,omingda1;le; g1g1;oodriN;cht3e ge0n & jer2rkshire hathaw1;ay;ryH;el;nana republ3s1xt5y5;f,kin robbi1;ns;ic;bXcSdidRerosmith,ig,lLmFnheuser-busEol,ppleAr7s3t&t,v2y1;er;is,on;hland2s1;n,ociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 4catel2t1;air;!-luce1;nt;jazeera,qae1;da;as;/dc,a3er,t1;ivisi1;on;demy of scienc0;es;ba,c",Demonym:"true¦0:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an",Possessive:"true¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne",Currency:"true¦$,aud,bScQdLeurKfJgbp,hkd,iIjpy,kGlEp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotySł;en,uanR;af,of;h0t5;e0il5;k0q0;elM;iel,oubleLp,upeeL;e2ound st0;er0;lingI;n0soH;ceGn0;ies,y;e0i8;i,mpi7;n,r0wanzaCyatC;!onaBw;ls,nr;ori7ranc9;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s",City:"true¦0:73;1:61;2:6G;3:5U;4:5R;a68b54c4Id4Ae46f3Yg3Jh38i2Zj2Uk2Dl22m1Kn19o16p0Uq0Sr0Ls01tPuOvLwDxiBy9z5;a7h5i4Muri4O;a5e5ongsh0;ng3J;greb,nzib5G;ang2e5okoha3Uunfu;katerin3Jrev0;a5n0O;m5Hn;arsBeAi6roclBu5;h0xi,zh5P;c7n5;d5nipeg,terth4;hoek,s1K;hi5Zkl3C;l63xford;aw;a6ern2i5ladivost5Molgogr6K;en3lni6R;lenc6Dncouv2Yr3ughn;lan bat1Drumqi,trecht;aDbilisi,eCheBi9o8r7u5;l21n63r5;in,ku;ipoli,ondh62;kyo,m34ron1QulouS;an5jua3l2Zmisoa6Era3;j4Xshui; hag65ssaloni2L;gucigal28hr0l av1W;briz,i6llinn,mpe5Ang5rtu,shk2X;i2Msh0;an,chu1n0p2Iyu0;aEeDh8kopje,owe1It7u5ydney;ra5zh51;ba0Jt;aten is59ockholm,rasbou6Auttga31;an8e6i5;jiazhua1llo1m60y0;f54n5;ya1zh4L;gh3Ot4U;att4Ao1Yv49;cramen18int DlBn5o paulo,ppo3Wrajevo; 7aa,t5;a 5ia3Io domin3I;a3fe,m1O;antonCdie3Gfrancisco,j5ped3Ssalv8;o5u0;se;em,v5z2B;ad0I;lou59peters29;aAe9i7o5;me,sar5t5A;io;ga,o5yadh;! de janei3I;cife,ykjavik;b4Uip4lei2Mnc2Swalpindi;ingdao,u5;ez2i0Q;aEeDhCiBo8r7u6yong5;ya1;eb5Aya1;ag54etor53;rt5zn0; 5la4Fo;au prin0Nelizabe29sa05;ls3Srae5Ctts2B;iladelph4Ynom pe1Doenix;r26tah tik3I;ler00naji,r4Pt5;na,r36;ak47des0Lm1Rr6s5ttawa;a3Ylo;an,d07;a8ew6i5ovosibir1Oyc;ng2Hs; 5cast39;del27orlea46taip16york;g8iro4Xn5pl2Zshv36v0;ch6ji1t5;es,o1;a1o1;a6o5p4;ya;no,sa0Y;aFeCi9o6u5;mb2Cni28sc40;gadishu,nt6s5;c17ul;evideo,re31;ami,l6n18s5;kolc,sissauga;an,waukee;cca,d5lbour2Pmph41;an,ell5i3;in,ín;cau,drAkass2Tl9n8r5shh4A;aca6ib5rakesh,se2N;or;i1Ty;a4EchEdal12i47;mo;id;aCeiAi8o6u5vRy2;anLckn0Rdhia3;n5s angel28;d2g bea1O;brev2De3Kma5nz,sb2verpo2A;!ss29;c5pzig;est0C; p6g5ho2Yn0Gusan27;os;az,la35;aHharFiClaipeBo9rak0Hu7y5;iv,o5;to;ala lump4n5;mi1sh0;be,hi0Llka2Zpavog4si5wlo2;ce;da;ev,n5rkuk;gSsha5;sa;k5toum;iv;bIdu3llakuric0Tmpa3Gn6ohsiu1ra5un1Lwaguc0T;c0Sj;d5o,p4;ah1Vy;a7e6i5ohannesZ;l1Xn0;dd37rusalem;ip4k5;ar2J;bad0mph1QnBrkutYs8ta01z5̇zm7;m6tapala5;pa;ir;fah0l6tanb5;ul;am2Zi2I;che2d5;ianap2Lo21;aBe8o5yder2W; chi mi6ms,nolulu,u5;st2;nh;f6lsin5rakli2;ki;ei;ifa,lifax,m7n5rb1Dva3;gAnov5oi;er;bu2Wilt2;aFdanEenDhCiPlasgBo9raz,u5;a5jr21;dal6ng5yaquil;zh1H;aja2Lupe;ld coa18then5;bu2P;ow;ent;e0Toa;sk;lw7n5za;dhi5gt1C;nag0S;ay;aisal26es,o8r6ukuya5;ma;ankfu5esno;rt;rt5sh0; wor6ale5;za;th;d5indhov0Nl paso;in5mont2;bur5;gh;aAe8ha0Visp4o7resd0Ju5;b5esseldorf,rb0shanbe;ai,l0G;ha,nggu0rtmu11;hradRl5troit;hi;donghHe5k08li0masc1Xr es sala1HugavpiY;gu,je2;aKebu,hAo5raio03uriti1P;lo7n6penhag0Ar5;do1Nk;akLst0V;gVm5;bo;aBen8i6ongqi1ristchur5;ch;ang m7ca5ttago1;go;g6n5;ai;du,zho1;n5ttogr12;digarh,g5;ch8sha,zh06;i9lga8mayenJn6pe town,r5;acCdiff;ber18c5;un;ry;ro;aUeMhJirmingh0ToIr9u5;chareRdapeRenos air7r5s0tu0;g5sa;as;es;a9is6usse5;ls;ba6t5;ol;ne;sil0Mtisla7zzav5;il5;le;va;goZst2;op6ubaneshw5;ar;al;iBl9ng8r5;g6l5n;in;en;aluru,hazi;fa5grade,o horizonte;st;ji1rut;ghd0BkGnAot9r7s6yan n4;ur;el,r07;celo3ranquil09;na;ou;du1g6ja lu5;ka;alo6k5;ok;re;ng;ers5u;field;a04b01cc00ddis abaZgartaYhmedWizawl,lQmNnHqaZrEsBt7uck5;la5;nd;he7l5;an5;ta;ns;h5unci2;dod,gab5;at;li5;ngt2;on;a6chora5kaNtwerp;ge;h7p5;ol5;is;eim;aravati,m0s5;terd5;am; 8buquerq7e5giers,maty;ppo,xandr5;ia;ue;basrah al qadim5mawsil al jadid5;ah;ab5;ad;la;ba;ra;idj0u dha5;bi;an;lbo6rh5;us;rg",Country:"true¦0:39;1:2M;a2Xb2Ec22d1Ye1Sf1Mg1Ch1Ai14j12k0Zl0Um0Gn05om3DpZqat1KrXsKtCu6v4wal3yemTz2;a25imbabwe;es,lis and futu2Y;a2enezue32ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2Y;k.,s.2; 28a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Ys and caic1U; and 2-2;toba1K;go,kel0Znga;iw2Wji2nz2S;ki2U;aCcotl1eBi8lov7o5pa2Cri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Rriname;lomon1Wmal0uth 2;afr2JkLsud2P;ak0en0;erra leoEn2;gapo1Xt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele25luc0mart20;epublic of ir0Dom2Duss0w2;an26;a3eHhilippinTitcairn1Lo2uerto riM;l1rtugE;ki2Cl3nama,pua new0Ura2;gu6;au,esti2;ne;aAe8i6or2;folk1Hth3w2;ay; k2ern mariana1C;or0N;caragua,ger2ue;!ia;p2ther19w zeal1;al;mib0u2;ru;a6exi5icro0Ao2yanm05;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagasc00l6r4urit3yot2;te;an0i15;shall0Wtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed01;a5e4i2uxembourg;b2echtenste11thu1F;er0ya;ban0Hsotho;os,tv0;azakh1Ee3iriba03o2uwait,yrgyz1E;rWsovo;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an",Region:"true¦0:2M;1:2S;2:2J;a2Pb2Cc1Yd1Tes1Sf1Qg1Kh1Gi1Bj17k12l0Zm0On07o05pZqWrTsKtFuCv9w5y3zacatec2T;akut0o0Du3;cat2k07;a4est 3isconsin,yomi1L;bengal,vi6;rwick2Ashington3;! dc;er4i3;rgin0;acruz,mont;dmurt0t3;ah,tar3; 2Ka0W;a5e4laxca1Qripu1Wu3;scaDva;langa1nnessee,x2E;bas0Um3smNtar24;aulip2Cil nadu;a8i6o4taf10u3ylh1E;ffYrr03s19;me1Bno1Puth 3;cVdU;ber0c3kkim,naloa;hu2ily;n4skatchew2xo3;ny; luis potosi,ta catari1;a3hode9;j3ngp06;asth2shahi;ingh24u3;e3intana roo;bec,en5reta0Q;ara7e5rince edward3unjab; i3;sl0A;i,nnsylv3rnambu0A;an0;!na;axa0Xdisha,h3klaho1Zntar3reg6ss0Ax0F;io;aIeDo5u3;evo le3nav0V;on;r3tt16va scot0;f8mandy,th3; 3ampton15;c5d4yo3;rk13;ako1M;aroli1;olk;bras1Lva0Bw3; 4foundland3;! and labrador;brunswick,hamp0Wjers3mexiRyork state;ey;galOyarit;a9eghala0Mi5o3;nta1r3;dov0elos;ch5dlanCn4ss3zor11;issippi,ouri;as geraOneso18;ig2oac2;dhy12harasht0Gine,ni4r3ssachusetts;anhao,i el,ylF;p3toba;ur;anca0Ie3incoln0IouisH;e3iR;ds;a5e4h3omi;aka06ul1;ntucky,ra01;bardino,lmyk0ns0Qr3;achay,el0nata0X;alis5har3iangxi;kh3;and;co;daho,llino6n3owa;d4gush3;et0;ia1;is;a5ert4i3un2;dalFm0D;fordZ;mpYrya1waii;ansu,eorg0lou7oa,u3;an4erre3izhou,jarat;ro;ajuato,gdo3;ng;cesterS;lori3uji2;da;sex;ageTe6o4uran3;go;rs3;et;lawaLrbyK;aEeaDh8o3rimea ,umbr0;ahui6l5nnectic4rsi3ventry;ca;ut;i02orado;la;e4hattisgarh,i3uvash0;apQhuahua;chn4rke3;ss0;ya;ra;lFm3;bridge6peche;a8ihar,r7u3;ck3ryat0;ingham3;shi3;re;emen,itish columb0;h0ja cal7lk6s3v6;hkorto3que;st2;an;ar0;iforn0;ia;dygea,guascalientes,lAndhr8r4ss3;am;izo1kans4un3;achal 6;as;na;a 3;pradesh;a5ber4t3;ai;ta;ba4s3;ka;ma",Place:"true¦a0Eb0Bc04d03e02f00gVhUiRjfk,kOlMmJneGoFpBque,rd,s9t6u5v4w1y0;akutOyz;ake isFis1y0;!o;!c;a,ostok,t;laanbaatar,p02safa,t;ahiti,e1he 0;bronx,hamptons;nn,x;a0fo,oho,t,under7yd;khalNsk;a2e1h0itcairn;l,x;k,nnN;!cif04;kla,nt,rd;b1w eng0;land;!r;a1co,i0t,uc;dNnn;gadZlibu,nhattZ;a0gw,hr;s,x;an1osrae,rasnoyar0ul;sk;!s;a1cn,da,nd0st;ianRochina;!x;arlem,kg,nd,oHwy;a3re0;at 0enwich;brita0lakH;in;!y village;co,l0ra;!a;urope,vergladC;ak,en,fw,ist,own4xb;al5dg,gk,h2l1o0rA;lo,nn;!t;a1ina0uuk;town;morro,tham;!if;cn,e1kk,l0rooklyn;vd;l air,verly hills;frica,lta,m7n3r2sia,tl1ve,zor0;es;!ant2;ct1iz;adyr,tarct0;ic0; oce0;an;ericas,s",MaleName:"true¦0:E5;1:D6;2:DO;3:AY;4:D2;5:CG;6:B6;7:CW;8:C8;9:DK;A:DL;B:A6;C:C2;aCObBLcAJd9He8Nf85g7Ih6Ui6Ej5Ek52l4Dm35n2To2Np2Fqu2Dr1Ls11t0Eu0Dv07wTxSyIzD;aDor0;cDh9Tkaria,n5W;hEkD;!aCM;ar5WeCL;aLoFuD;sDu2KvBY;if,uf;nFsEusD;ouf,sD;ef;aDg;s,tD;an,h0;hli,nBMssX;avi3ho4;aMeKiFoDyaC2;jcie8Clfgang,odrow,utD;!er;lDnst1;bFey,frD1lD;aBDiD;am,e,s;e9Fur;i,nde6sD;!l8t1;de,lErrAyD;l1ne;lDt3;aAAy;aGiDladimir,ojte7Z;cEha0kt69nceDrgAJva0;!nt;e3Vt67;lentDnA5;in4Y;ghBVlyss5Cnax,sm0;aXeShOiMoHrFuEyD;!l3ro7s1;n9r5C;avAWeDist0oy,um0;ntAOv5Zy;bGdFmDny;!as,mDoharu;aCTie,y;!d;iBy;mDt5;!my,othy;adFeoEia8GomD;!as;!do8P;!de5;dGrD;en9LrD;an9KeDy;ll,n9J;!dy;dgh,ha,iDnn3req,tsu4T;cB5ka;aTcotRePhLiJoHpenc3tDur1Vylve9Kzym1;anFeDua8D;f0phBTvDwa8C;e62ie;!islaw,l8;lom1nBFuD;leyma7ta;dDlBm1yabonga;!dhart7Bn8;aFeD;lDrm0;d1t1;h7Une,qu10un,wn,y7;aDbasti0k2Al4Rrg4Oth,ymoAU;m5n;!tD;!ie,y;lEmDnti2Eq5Bul;!ke5MmCu4;ik,vato7X;aYeUheAAiQoHuEyD;an,ou;b7NdEf5pe7SssD;!elBZ;ol3Fy;an,bKcJdIel,geHh0landBQmGnFry,sEyD;!ce;coe,s;!aAHnC;an,eo;l47r;e5Og3n8olfo,ri7A;co,ky;bCeB7;cDl8;ar6Pc6OhEkDo;!ey,ie,y;a99ie;gEid,ubAx,yDza;an1InY;gA8iD;naA4s;ch70fa4lHmGndFpha4sEul,wi2HyD;an,mo82;h7Vm5;alBDol2Uy;iATon;f,ph;ent2inD;cy,t1;aIeGhilFier72ol,rD;aka16eD;m,st1;!ip,lip;dALrcy,tD;ar,e3Gr1X;b4Kdra7Ft4ZulD;!o17;ctav3Fi3liv3mAFndrej,rHsEtDum9wA;is,to;aEc9k9m0vD;al5Z;ma;i,l53vL;aLeJiFoDu3A;aDel,j5l0ma0r3K;h,m;cEg4i49kD;!au,h7Uola;holBkDolB;!olB;al,d,il,ls1vD;il8Y;hom,thD;anDy;!a4i4;aZeWiMoHuEyD;l2Jr1;hamEr6XstaD;fa,p5C;ed,mH;di0We,hamFis2FntEsDussa;es,he;e,y;ad,ed,mD;ad,ed;cIgu4hai,kGlFnEtchD;!e6;a8Aik;house,o0Bt1;ae5YeA4olD;aj;ah,hDk8;aEeD;al,l;el,l;hElv2rD;le,ri6v2;di,met;ay0ck,hTjd,ks2DlRmadWnQrKs1tFuricExD;!imilian9Nwe6;e,io;eGhEiBtDus,yB;!eo,hew,ia;eDis;us,w;j,o;cHio,kGlFqu7Dsha6tDv2;iDy;!m,n;in,on;!el,oPus;!el9IoOus;iGu4;achDcolm,ik;ai,y;amEdi,eDmoud;sh;adDm5T;ou;aXeQiOlo3EoKuEyD;le,nd1;cGiFkDth3uk;aDe;!s;gi,s,z;as,iaD;no;g0nn7SrenFuDv8Jwe6;!iD;e,s;!zo;am,oD;n4r;a8Cevi,la5JnIoGst3thaFvD;eDi;nte;bo;!nD;!a6Sel;!ny;mFnErDur5Hwr5H;ry,s;ce,d1;ar,o5A;aLeGhaled,iDrist5Iu4Vy6X;er0p,rD;by,k,ollD;os;en0iGnDrmit,v44;!dEnDt5Z;e1Ay;a6ri59;r,th;cp3j5m66na73rEsp9them,uD;ri;im,l;a02eUiSoGuD;an,lDst2;en,iD;an,en,o,us;aNeLhnKkubBnIrGsD;eEhDi8Bue;!ua;!ph;dDge;an,i,on;!aDny;h,s,th5I;!ath5Hie,nC;!l,sDy;ph;o,qu2;an,mD;!mC;d,ffIrFsD;sDus;!e;a6BemEmai7oDry;me,ni0Y;i7Ty;!e60rD;ey,y;cKdAkImHrFsEvi3yD;!dAs1;on,p3;ed,od,rDv56;e5Nod;al,es4Xis1;a,e,oDub;b,v;k,ob,quD;es;aWbQchiPgNkeMlija,nuLonut,rJsFtDv0;ai,suD;ki;aEha0i7DmaDsac;el,il;ac,iaD;h,s;a,vinDw2;!g;k,nngu5S;!r;nacDor;io;ka;ai,rahD;im;aPeJoIuDyd9;be2KgGmber4WsD;eyEsD;a2e2;in,n;h,o;m3ra3Gsse2wa4B;aHctGitGnrErD;be2Dm0;iDy;!q11;or;th;bMlLmza,nKo,rFsEyD;a4JdA;an,s0;lGo50rFuDv8;hi4Gki,tD;a,o;is1y;an,ey;k,s;!im;ib;aVeRiPlenOoLrHuD;ilEsD;!tavo;herme,lerD;mo;aFegDov3;!g,orD;io,y;dy,h5Wnt;nzaErD;an,d1;lo;!n;lbe5Ano,oD;rg3Hvan5A;ne,oFrD;aDry;ld,rd5H;ffr8rge;brElArDv2;la28r3Sth,y;e3EielD;!i5;aTePiNlLorr0NrD;anFedDitz;!dCeDri2B;ri2A;cFkD;!ie,lD;in,yn;esLisD;!co,z36;etch3oD;yd;d4lDnn,onn;ip;deriFliEng,rnD;an06;pe,x;co;bi0di,hd;ar04dZfrYit0lSmKnHo2rFsteb0th0uge7vDymAzra;an,eD;ns,re36;gi,i0DnDrol,v2w2;est4Pie;oEriqDzo;ue;ch;aJerIiEmD;aIe2Z;lErD;!h0;!iD;o,s;s1y;nu4;be0Cd1iGliFmEt1viDwood;n,s;er,o;ot1Ys;!as,j4NsD;ha;a2en;!dCg9mGoEuEwD;a2Din;arD;do;o0Wu0W;l,nD;est;a01eRiOoHrGuFwEylD;an,l0;ay7ight;a7dl8nc0st2;ag0ew;minGnEri0ugDvydBy2D;!lB;!a2MnDov0;e6ie,y;go,iDykB;cDk;!k;armuEeDll1on,rk;go;id;anKj0lbeJmetri5nHon,rGsFvEwDxt3;ay7ey;en,in;hawn,mo0B;ek,ri0I;is,nDv3;is,y;rt;!dD;re;an,lNmLnKrGvD;e,iD;! lucDd;as,ca;en,iFne6rDyl;eDin,yl;l3Bn;n,o,us;!e,i4ny;iDon;an,en,on;e,lB;as;a09e07hYiar0lNoIrGuEyrD;il,us;rtD;!is;aDistob0U;ig;dy,lGnErD;ey,neli5y;or,rD;ad;by,e,in,l2t1;aIeFiDyK;fDnt;fo0Ft1;meEt5velaD;nd;nt;rFuEyD;!t1;de;enD;ce;aIeGrisEuD;ck;!tD;i0oph3;st3;er;d,rDs;b4leD;s,y;cDdric,s9;il;lGmer1rD;ey,lEro6y;ll;!os,t1;eb,v2;a07eZiVlaUoRrEuDyr1;ddy,rtK;aLeGiFuEyD;an,ce,on;ce,no;an,ce;nEtD;!t;dEtD;!on;an,on;dEndD;en,on;!foDl8y;rd;bErDyd;is;!by;i7ke;bFlEshD;al;al,lC;ek;nHrDshoi;at,nEtD;!r1C;aDie;rd14;!edict,iEjam2nC;ie,y;to;kaMlazs,nHrD;n8rDt;eDy;tt;ey;dDeE;ar,iD;le;ar17b0Vd0Rf0Pgust2hm0Mi0Jja0Il04m00nSputsiRrIsaHuFveEyDziz;a0kh0;ry;gust5st2;us;hi;aKchJiIjun,maHnFon,tDy0;hDu09;ur;av,oD;ld;an,nd0H;!el,ki;ie;ta;aq;as,dIgel0CtD;hoGoD;i7nD;!i09y;ne;ny;er,reDy;!as,i,s,w;iFmaDos;nu4r;el;ne,r,t;an,bePdAeJfHi,lGonFphXt1vD;aNin;on;so,zo;an,en;onTrD;edU;c,jaGksandFssaGxD;!andD;er,ru;ar,er;ndD;ro;rtN;ni;dAm9;ar;en;ad,eD;d,t;in;onD;so;aEi,olfDri0vik;!o;mDn;!a;dHeGraEuD;!bakr,lfazl;hDm;am;!l;allIelFoulaye,ulD;!lDrF;ah,o;! rD;ahm0;an;ah;av,on",LastName:"true¦0:9F;1:9V;2:9H;3:9X;4:9N;5:8J;6:9K;7:A0;8:9E;9:88;A:6E;B:77;C:6J;a9Ub8Lc7Kd6Xe6Rf6Dg5Vh58i54j4Pk45l3Nm2Rn2Eo26p1Nquispe,r17s0Ft05vVwOxNyGzD;aytsADhD;aDou,u;ng,o;aGeun7ZiDoshiA9un;!lD;diDmaz;rim,z;maDng;da,guc97mo6UsDzaB;aBhiA7;iao,u;aHeGiEoDright,u;jc8Sng;lDmm0nkl0sniewsB;liA1s3;b0iss,lt0;a5Rgn0lDng,tanabe;k0sh;aHeGiEoDukA;lk5roby5;dAllalDnogr2Zr0Zss0val37;ba,obos;lasEsel7N;lGn dFrg8EsEzD;qu7;ily9Oqu7silj9O;en b35ijk,yk;enzue95verde;aLeix1JhHi4j6ka3IoGrFsui,uD;om4ZrD;c4n0un1;an,embl8TynisB;dor95lst31m2rr9th;at5Mi7LoD;mErD;are6Ylaci64;ps3s0Y;hirAkah8Dnaka;a00chWeThPiNmKoItFuEvDzabo;en8Aobod34;ar7bot2lliv4zuB;aEein0oD;i67j3Lyan8V;l6rm0;kol5lovy5re6Psa,to,uD;ng,sa;iDy5Z;rn5tD;!h;l5YmDngh,rbu;mo6Do6J;aFeDimizu;hu,vchD;en7Cuk;la,r17;gu8mDoh,pulve8Trra4R;jDyD;on5;evi6Filtz,miDneid0roed0ulz,warz;dEtD;!z;!t;ar42h6ito,lFnDr2saBto,v2;ch7d0AtDz;a4Pe,os;as,ihAm3Zo0Q;aOeNiKoGuEyD;a66oo,u;bio,iz,sD;so,u;bEc7Bdrigue57g03j73mDosevelt,ssi,ta7Nux,w3Z;a4Be0O;ertsDins3;!on;bei0LcEes,vDzzo;as,e8;ci,hards3;ag4es,it0ut0y9;dFmEnDsmu7Zv5F;tan1;ir7os;ic,u;aSeLhJiGoErDut6;asad,if5Zochazk1W;lishc24pDrti62u55we66;e2Tov48;cEe09nD;as,to;as60hl0;aDillips;k,m,n5K;de3AetIna,rGtD;ersErovDtersC;!a,ic;en,on;eDic,ry,ss3;i8ra,tz,z;ers;h71k,rk0tEvD;ic,l3T;el,t2O;bJconnor,g2ClGnei5PrEzD;demir,turk;ella3MtDwe5N;ega,iz;iDof6GsC;vDyn1F;ei8;aPri1;aLeJguy1iFoDune44ym4;rodahl,vDwak;ak3Uik5otn56;eEkolDlsCx3;ic,ov6X;ls1miD;!n1;ils3mD;co42ec;gy,kaEray4varD;ro;jiDmu8shiD;ma;aXcVeQiPoIuD;lGnFrDssoli5T;atDpUr68;i,ov2;oz,te4B;d0l0;h4lIo0HrEsDza0Z;er,s;aFeEiDoz5r3Ete4B;!n6F;au,i8no,t4M;!l9;i2Rl0;crac5Ohhail5kke3Qll0;hmeGij0j2ElFndErci0ssiDyer19;!er;e3Bo2Z;n0Io;dAti;cartDlaughl6;hy;dMe6Dgnu5Ei0jer34kLmJnci59rFtEyD;er,r;ei,ic,su1N;iEkAqu9roqu6tinD;ez,s;a54c,nD;!o;a52mD;ad5;e5Oin1;rig4Ns1;aSeMiIoGuEyD;!nch;k2nDo;d,gu;mbarDpe2Rvr2;di;!nDu,yana1R;coln,dD;bDholm;erg;bed5TfeGhtFitn0kaEn6rDw2G;oy;!j;in1on1;bvDvD;re;iDmmy,rsCu,voie;ne,t11;aTennedy,h4iSlQnez46oJrGuEvar4woD;k,n;cerDmar58znets5;a,o2G;aDem0i2Zyeziu;sni3PvD;ch3U;bay4Frh0Jsk0TvaFwalDzl5;czDsB;yk;cFlD;!cDen3Q;huk;!ev2ic,s;e6uiveD;rt;eff0l2mu8nnun1;hn,lloe,minsBrEstra31to,ur,yDzl5;a,s0;j0GlsC;aMenLha2Pim0QoEuD;ng,r2;e2JhFnErge2Ju2NvD;anA;es,ss3;anEnsD;en,on,t3;nesDsC;en,s1;ki26s1;cGkob3RnsDrv06;en,sD;enDon;!s;ks3obs1;brahimAglesi3Ake4Ll0CnoZoneFshikEto,vanoD;u,v4A;awa;scu;aPeIitchcock,jaltal6oFrist46uD;!aDb0gh9ynh;m4ng;a23dz2fEjga2Sk,rDx3B;ak0Yvat;er,fm3B;iGmingw3NnErD;nand7re8;dDriks1;ers3;kkiEnD;on1;la,n1;dz2g1lvoLmJnsCqIrr0SsFuEyD;as36es;g1ng;anEhiD;mo0Q;i,ov08;ue;alaD;in1;rs1;aMeorgLheorghe,iJjonIoGrEuDw3;o,staf2Utierr7zm4;ayDg2iffitUub0;li1G;lub3Rme0JnD;calv9zale0I;aj,i;l,mDordaL;en7;iev3B;gnJlGmaFnd2No,rDs2Nuthi0;cDza;ia;ge;eaElD;agh0i,o;no;e,on;ab0erMiIjeldsted,lor9oGrFuD;cDent9ji3F;hs;an1Wiedm4;ntaDrt6st0urni0;na;lipEsD;ch0;ovD;!ic;hatAnandeVrD;arDei8;a,i;ov2;dHinste6riksCsDva0D;cob2ZpDtra2X;inoDosiM;za;en,s3;er,is3wards;aUeMiKjurhuJoHrisco0YuEvorakD;!oQ;arte,boEmitru,rDt2U;and,ic;is;g4he0Hmingu7n2Ord19tD;to;us;aDmitr29ssanayake;s,z; GbnaFlEmirDrvis1Lvi,w4;!ov2;gado,ic;th;bo0groot,jo03lEsilDvri9;va;a cruz,e3uD;ca;hl,mcevsBnErw6t2EviD;d5es,s;ieDku1S;ls1;ki;a05e00hNiobMlarkLoFrD;ivDuz;elli;h1lGntFop0rDs26x;byn,reD;a,ia;i,rer0O;em4liD;ns;!e;anu;aLeIiu,oGriDuJwe;stD;eDiaD;ns1;i,ng,uFwDy;!dhury;!n,onEuD;ng;!g;kEnDtterjee,v7;!d,g;ma,raboD;rty;bGl09ng2rD;eghetEnD;a,y;ti;an,ota0M;cer9lder3mpbeIrFstDvadi08;iDro;llo;doEt0uDvalho;so;so,zo;ll;es;a09eXhUiSlNoGrFyD;rne,tyD;qi;ank5iem,ooks,yant;gdan5nFruya,su,uchEyHziD;c,n5;ard;darDik;enD;ko;ov;aEondD;al;nEzD;ev2;co;ancRshwD;as;a01oDuiy4;umDwmD;ik;ckNethov1gu,ktLnJrD;gGisFnD;ascoDds1;ni;ha;er,mD;ann;gtDit7nett;ss3;asD;hi;er,ham;b2ch,ez,hMiley,kk0nHrDu0;bEnDua;es,i0;ieDosa;ri;dDik;a8yopadhyD;ay;ra;er;k,ng;ic;cosZdYguilXkhtXlSnJrGsl4yD;aEd6;in;la;aEsl4;an;ujo,ya;dFgelD;ovD;!a;ersGov,reD;aDjL;ss1;en;en,on,s3;on;eksejGiyGmeiFvD;ar7es;ez;da;ev;ar;ams;ta",WeekDay:"true¦fri2mon2s1t0wednesd3;hurs1ues1;aturd1und1;!d0;ay0;!s",Month:"true¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il",Date:"true¦ago,t2week0yesterd4; e0e0;nd;mr2o0;d0morrow;ay;!w",FirstName:"true¦aKblair,cGdevFgabrieEhinaDjBk8l7m3nelly,quinn,re2sh0;ay,e0iloh;a,lby;g6ne;a1el0ina,org5;!okuh9;naia,r0;ion,lo;ashawn,uca;asCe1ir0rE;an;lsAnyat2rry;am0ess6ie,ude;ie,m5;ta;le;an,on;as2h0;arl0eyenne;ie;ey,sidy;lex2ndr1ubr0;ey;a,ea;is",Person:"true¦ashton kutchTbScNdLeJgastOhHinez,jFkEleDmCnettKoBp9r4s3t2v0;a0irgin maH;lentino rossi,n go3;aylor,heresa may,iger woods,yra banks;addam hussain,carlett johanssKlobodan milosevic,uC;ay romano,e3o1ush limbau0;gh;d stewart,nald0;inho,o;ese witherspoFilly;a0ipJ;lmIris hiltD;prah winfrFra;essiaen,itt romnEubarek;bron james,e;anye west,iefer sutherland,obe bryant;aime,effers8k rowli0;ng;alle ber0itlBulk hogan;ry;ff0meril lagasse,zekiel;ie;a0enzel washingt2ick wolf;lt1nte;ar1lint0;on;dinal wols1son0;! palm2;ey;arack obama,rock;er",Verb:"true¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en",PhrasalVerb:"true¦0:7L;1:79;2:7X;3:7N;4:72;5:80;6:7P;7:6V;8:78;9:7J;A:6W;B:5Z;C:7S;D:7K;a81b6Lc5Rd5Me5Lf4Kg41h3Kiron0j3Gk3Bl2Vm2Jn2Ho2Fp1Wquiet7Ar1Js0CtSuQvacuum 1wHyammer9zE;eroBip FonE;e0k0;by,up;aLeHhGiForErit5G;d 1k33;mp0n2Vpe0r7s7;eel Dip 85;aFiEn2J;gh 09rd0;n Dr E;d2in,o5J;it 61k7lk6rm 6Csh 7Nt6Qv51;rge9sE;e AherB;aTeRhPiLoJrGuEype 69;ckBrn E;d2in,o3Sup;aFiEot0y 2I;ckle6Rp 7T;ck6Qde Y;ne6Pp Es4O;d2o73up;ck GdFe Egh6Bme0p o0Gre0;aw3ba4d2in,up;e 61y 1;by,o7D;ink Erow 6D;ba4ov8up;aEe 5Zll53;m 1r X;ck9ke Flk E;ov8u54;aEba4d2in,o3Cup;ba4ft8p59w3;a0Jc0Ie0Ch08i05l01m00nZoYpTquare StKuIwE;earGiE;ngFtch E;aw3ba4o77; by;ck Eit 1m 1ss0;in,up;aJe0WiIoGrEuc3G;aigh1WiE;ke 6Gn3A;p Erm1Z;by,in,o6T;n3Br 1tc3T;c3Amp0nd Er6Zve6y 1;ba4d2up;d2o6Pup;ar37eHiGlFrEur9;ing9uc7;a3Fit 5B;l13n 1;e5Sll0;be2Wrt0;ap 4Sow D;ash 5Foke0;eep FiEow A;c3Wp 1;in,oE;ff,v8;gn 4XngFt Ez7;d2o5up; al54le0;aGoEu4T;ot Eut0w 6D;aw3ba4f3Go67;c2PdeBk58ve6;e Ill1And HtE; Etl4H;d2in,o5upE;!on;aw3ba4d2in,o27up;o5Mto;al51out0rap51;il6v7;aPeMiLoHuE;b 4Ule0n Estl7;aEba4d2in5Jo3Ut39u3S;c26w3;ll Got FuE;g2Tnd6;a27f30o5;arCin,o5;ng 53p6;aEel6inBnt0;c5Dd E;o31u0I;c24t0;aSeRiPlNoLrIsyc2HuE;ll Gt E;aEba4d2in,o1Ot3Gup;p3Lw3;ap3Kd2in,o5t3Eup;attle9ess FiHoE;p 1;ah1Oon;iEp 5Hr3Yur4Jwer 5H;nt0;ay4DuE;gBmp A;ck Eg0le9n Ap4A;o2Yup;el 4KncilB;c42ir 3Un0ss GtFy E;ba4o54; d2c24;aw3ba4o18;pEw3X;e3Wt D;arrow46erd0oE;d6te45;aMeJiIoGuE;ddl7lE;l 3I;c1Dp 1uth6ve E;al3Nd2in,o5up;ss0x 1;asur7lFss E;a1Gup;t A;ke Fn ArEs1Px0;k Ary6;do,o48up;aRePiKoEuck0;aIc3Hg HoEse0;k Ese3F;aft8ba4d2forw2Jin46ov8uE;nd8p;in,o0M;d A;e HghtGnFsEv1V;ten 4M;e 1k 1; 1e37;arCd2;av1Jt 37velE; o3U;c7p 1sh Etch9ugh6y20;in3Uo5;eFick6nock E;d2o3Q;eEyB;l 2Pp E;aw3ba4d2fTin,o07to,up;aGoFuE;ic7mpB;ke31t35;c3Azz 1;aQeLiIoFuE;nker32rry 1s0W;lEneBrse2X;d Ee 1;ba4d2fast,o01up;de Ft E;ba4on,up;aw3o5;aElp0;d Gl 2Ar Et 1;fEof;rom;in,oTu1H;c02m 1nFve Ez25;it,to;d Eg 2FkerG;d2in,o5;aTeMive Kloss 22oGrFunE; f0N;in3How 2B; Eof 21;aFb1Dit,oErCt0Pu18;ff,n,v8;bo5ft8hKw3;aw3ba4d2in,oEup,w3;ff,n,ut;aJek0t E;aFb17d2oErCup;ff,n,ut,v8;cFhEl1XrCt,w3;ead;ross;r 1;d aFnE;g 1;bo5;a08e01iSlOoKrGuE;cEel 1;k 1;eFighten Eown9y 1;aw3o2S;eEshe1N; 1z7;lGol E;aEwi1G;bo5rC;d Alow 1;aFeEip0;sh0;g Ake0mErE;e 2R;gLlJnHrFsEzzle0;h 2P;e Em 1;aw3ba4up;d0isE;h 1;e El 19;aw3fJ;ht ba4ure0;eJnFsE;s 1;cGd E;fEo25;or;e D;dVl 1;cIll Erm0t0W;ap04bGd2in,oFtE;hrough;ff,ut,v8;a4ehi20;e 0L;at0dge0nd 0Ky7;oHrE;aFess Aop E;aw3bUin,o1E;g9w9; 0Dubl7;aXhUlean AoHrEut 10;ack9eep Eoss D;by,d2oEup;n,ut;me HoFuntE; o1Q;k 1l E;d2o1I;aKbJforHin,oGtFuE;nd8;ogeth8;ut,v8;th,wE;ard;a4y;pErCw3;art;eEipB;ck Der E;on,up;lKncel0rHsGtch FveB; in;o19up;h Dt6;ry FvE;e Y;aw3o15;l Em05;aEba4d2o13up;rCw3;a0Ke0Bl04oVrJuE;bblGcklWil02lk AndlWrn 08st FtEy 13zz6;t D;in,o5up;e E;ov8;anOeaMiFush E;o0Oup;ghIng E;aFba4d2forEin,o5up;th;bo5lErCw3;ong;teE;n 1;k E;d2in,o5up;ch0;arLgKil An7oHssGttlFunce Ex D;aw3ba4;e A; arC;k Dt 1;e 1;d2up; d2;d 1;aJeed0oEurt0;cGw E;aw3ba4d2o5up;ck;k E;in,oL;ck0nk0st6; oKaHef 1nd E;d2ov8up;er;up;r0t E;d2in,oEup;ff,ut;ff,nE;to;ck Kil0nGrgFsE;h D;ain9e D;g Dk9; on;in,o5; o5;aw3d2o5up;ay;cNdJsk Guction6; oE;ff;arCo5;ouE;nd;d E;d2oEup;ff,n;own;t E;o5up;ut",Modal:"true¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to,a;ay,ight,ust;an,o0;uld",Adjective:"true¦0:7P;1:84;2:83;3:8A;4:7W;5:5S;6:4N;7:4O;8:58;9:6I;A:81;a6Wb6Gc63d5Je54f4Hg49h3Wi39j37k36l2Vm2Ln2Bo1Wp1Dquack,r12s0Ft07uMvJwByear5;arp0eFholeEiDoB;man5oBu6P;d6Rzy;despr7Ls5S;!sa7;eClBste2A;co1Nl o4W;!k5;aCiBola4M;b89ce versa,ol5H;ca3gabo6Gnilla;ltUnHpCrb5Msu4tterB;!mo7G; Eb1SpDsBti1M;ca7etBide dKtairs;!ti2;er,i3U;f36to da1;aLbeco75convin29deIeHfair,ivers4knGprecedVrEsCwB;iel3Nritt6A;i1XuB;pervis0spec3Y;eBu5;cognHgul6Tl6T;own;ndi2v64xpect0;cid0rB;!grou5ZsB;iz0tood;b7pp0Dssu6UuthorB;iz0;i26ra;aGeEhDi6AoCrB;i1oubl0us3M;geth8p,rp6Vuc67;ough4Wril33;en60l32mpBrr2X;o6Ati2;boo,lBn;ent0;aWcVeThSiQmug,nobbi3LoOpNqueami3LtFuBymb6H;bDi gener5DpBrpri6D;erBre0N;! dup8b,i2C;du0seq52;anda77eGiFrBunni2y3F;aightCiB;ki2p0; fBfB;or5K;ll,r5S;aBreotyp0;dfa6Cmi2;a55ec2Gir1Hlend6Cot on; call0le,mb8phist1XrBu0Vvi48;d6Ary;gnifica3nB;ce51g7;am2Re8ocki2ut;cBda1em5lfi32ni1Wpa6Jre6;o1Er42;at5Gient28reec5G;cr0me;aJeEiCoB;bu60tt51uQy4;ghtBv4;!-2Bf9;ar,bel,condi1du6Dfres5AlEpublic42sCtard0vB;ea26;is4CoB;lu1na3;aQe1Cuc4A;b5TciBllyi2;al,st;aOeLicayu6lac5Ropuli5QrCuB;bl5Jmp0n51;eGiDoB;!b07fu5RmiBp8;ne3si2;mCor,sBva1;ti6;a53e;ci5MmB;a0EiB;er,um;ac20rBti1;feAma2XpleBv38;xi2;rBst;allelDtB;-tiBi4;me;!ed;bLffJkIld fashion0nHpGrg1Eth8utFvB;al,erB;!all,niCt,wB;eiBrouB;ght;do0Ter,g2Qsi4B;en,posi1; boa5Og2Oli6;!ay; gua5MbBli6;eat;eDsB;cBer0Eole1;e6u3O;d2Xse;aJeIiHoBua4X;nFrCtB;ab7;thB;!eB;rn;chala3descri58stop;ght5;arby,cessa44ighbor5xt;k0usia1A;aIeGiDoBultip7;bi7derBl0Vnth5ot,st;a1n;nBx0;dblo0RiaBor;tu37;ande3Qdi4NnaBre;ci2;cBgenta,in,j01keshift,le,mmoth,ny,sculi6;ab33ho;aKeFiCoBu15;uti14vi2;mCteraB;l,te;it0;ftEgBth4;al,eCitiB;ma1;nda3K;!-0C;ngu3Zst,tt8;ap1Xind5no0A;agg0uB;niMstifi0veni7;de4gno4Klleg4mQnEpso 20rB;a1rB;eleBita0J;va3; KaJbr0corIdGfluenQiQnFsEtCviB;go0Fti2;aAen3SoxB;ic3B;a6i2Vul0D;a1er,oce3;iCoB;or;reA;deq3Qppr33;fBsitu,vitro;ro3;mFpB;arDerfeAoBrop8;li1rtB;a3ed;ti4;eBi0S;d2Vn3C;aIeFiDoBumdr3I;ne36ok0rrBs08ur5;if2Z;ghfalut1QspB;an2X;aClB;liYpf9;li2;lEnDrB;d04roB;wi2;dy;f,low0;ainf9ener2Oiga24lHoGraDuB;ilBng ho;ty;cCtB;ef9is;ef9;ne,od;ea2Iob4;aTeNinMlKoFrB;a1VeDoz1MustB;raB;ti2;e2Gq10tf9;oDrB; keeps,eBm8tuna1;g03ign;liB;sh;aBue3;g31tte1P;al,i1;dFmCrB;ti7;a7ini6;ne;le; up;bl0i3l27r Cux,voB;ri1uri1;oBreac1E;ff;aLfficie3lKmHnFreAthere4veExB;aAcess,pe1QtraCuB;be2Nl0E;!va1E;n,ryday; BcouraEti0O;rou1sui1;erCiB;ne3;gi2;abo23dMe17i1;g8sB;t,ygB;oi2;er;aReJiDoBrea14ue;mina3ne,ubB;le,tf9;dact1Bfficu1OsCvB;er1K;creDeas0gruntl0hone1FordCtB;a3ressM;er5;et; HadpGfFgene1PliDrang0spe1PtCvoB;ut;ail0ermin0;be1Mca1ghB;tf9;ia3;an;facto;i5magBngeroUs0G;ed,i2;ly;ertaMhief,ivil,oDrB;aBowd0u0G;mp0vZz0;loImGnCrrBve0P;eAu1I;cre1fu0LgrDsCtB;empo0Dra0E;ta3;ue3;mer08pleB;te,x;ni4ss4;in;aNeIizarHlFoCrB;and new,isk,okN;gCna fiUttom,urgeoB;is;us;ank,indB;!i2;re;autif9hiDloCnBst,yoD;eUt;v0w;nd;ul;ckCnkru0WrrB;en;!wards; priori,b0Mc0Jd09fra08g04h03lYmWntiquVppSrMsIttracti06utheHvEwB;aCkB;wa0T;ke,re;ant garCerB;age;de;ntU;leep,piDsuDtonB;isB;hi2;ri2;ab,bitEroDtiB;fiB;ci4;ga3;raB;ry;are3etiNrB;oprB;ia1;at0;aJuB;si2;arEcohCeBiIl,oof;rt;olB;ic;mi2;ead;ainDgressiConiB;zi2;ve;st;id; IeGuFvB;aCerB;se;nc0;ed;lt;pt,qB;ua1;hoc,infinitB;um;cuCtu4u1;al;ra1;erLlKoIruHsCuB;nda3;e3oCtraA;ct;lu1rbi2;ng;te;pt;aBve;rd;aze,e;ra3;nt",Comparable:"true¦0:41;1:4I;2:45;3:2Y;4:4B;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Jm1Dn17o15p0Vqu0Tr0KsTtMuIvFw7y6za13;ell27ou4;aBe9hi1Yi7r6;o4y;ck0Ode,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sK;m,y;a7e6ulgar;nge5rda2xi4;g9in,st;g0n6pco3Mse5;like0t6;i1r6;ue;aAen9hi8i7ough,r6;anqu2Oen1ue;dy,g3Sme0ny,r09;ck,n,rs2P;d40se;ll,me,rt,s6wd45;te5;aVcarUeThRiQkin0FlMmKoHpGqua1FtAu7w6;eet,ift;b7dd13per0Gr6;e,re2H;sta2Ft3;aAe9iff,r7u6;pXr1;a6ict,o4;ig3Fn0U;a1ep,rn;le,rk;e22i3Fright0;ci28ft,l7o6re,ur;n,thi4;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g35m6;!y;ek,nd3D;ck,l0mp3;a6iTort,rill,y;dy,ll0Xrp;cu0Rve0Rxy;ce,ed,y;d,fe,int0l1Vv14;aBe9i8o6ude;mantic,o1Isy,u6;gh,nd;ch,pe,tzy;a6d,mo0H;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aEhoDi1QlCoBr8u6;ny,r6;e,p3;egna2ic7o6;fouYud;ey,k0;li04or,te1B;ain,easa2;ny;in5le;dd,f6i0ld,ranQ;fi10;aAe8i7o6;b3isy,rm15sy;ce,mb3;a6w;r,t;ive,rr01;aAe8ild,o7u6;nda19te;ist,o1;a6ek,llX;n,s0ty;d,tuQ;aBeAi9o6ucky;f0Un7o1Du6ve0w17y0T;d,sy;e0g;g1Tke0tt3ve0;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti4;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b3id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t3uiY;u1y;aIeeb3iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi4;gey,lm8r6;e5i4;ful;!i4;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i4;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd",TextOrdinal:"true¦bGeDf9hundredHmGnin7qu6s4t0zeroH;enGh1rFwe0;lfFn9;ir0ousandE;d,t4;e0ixt9;cond,ptAvent8xtA;adr9int9;et0th;e6ie8;i2o0;r0urt3;tie5;ft1rst;ight0lev1;e0h,ie2;en1;illion0;th",Cardinal:"true¦bHeEf8hundred,mHnineAone,qu6s4t0zero;en,h2rGw0;e0o;lve,n8;irt9ousandEree;e0ix5;pt1ven4xt1;adr0int0;illion;i3o0;r1ur0;!t2;ty;ft0ve;e2y;ight0lev1;!e0y;en;illion0;!s",Expression:"true¦a02b01dXeVfuck,gShLlImHnGoDpBshAtsk,u7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la",Adverb:"true¦a08by 06d02eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,well,ye0;p,s; to,wards5;h1iny bit,o0wiO;o,t6ward;en,us;eldom,o0uch;!me1rt0; of;hYtimes,w09;a1e0;alT;ndomSthN;ar excellDer0oint blank; Nhaps;f3n0;ce0ly;! 0;ag02moW; courIten;ewKo0; longEt 0;onIwithstanding;aybe,eanwhiAore0;!ovB;! aboU;deed,steV;en0;ce;or2u0;lArther0;!moJ; 0ev3;examp0good,suH;le;n1v0;er; mas0ough;se;e0irect1; 1finite0;ly;ju8trop;far,n0;ow; DbroCd nauseam,gBl6ny3part,s2t 0w4;be6l0mo6wor6;arge,ea5; soon,ide;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori",Determiner:"true¦aBboth,d9e6few,l4mu8neiDown,plenty,s3th2various,wh0;at0ich0;evC;at,e4is,ose;everal,ome;a,e0;!ast,s;a1i6l0very;!se;ch;e0u;!s;!n0;!o0y;th0;er"};const Dt="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",$t=Dt.split("").reduce((function(e,t,r){return e[t]=r,e}),{});var Pt$1=function(e){if(void 0!==$t[e])return $t[e];let t=0,r=1,a=36,n=1;for(;r<e.length;t+=a,r++,a*=36);for(let r=e.length-1;r>=0;r--,n*=36){let a=e.charCodeAt(r)-48;a>10&&(a-=7),t+=a*n;}return t};const Et$1=function(e,t,r){const a=Pt$1(t);return a<e.symCount?e.syms[a]:r+a+1-e.symCount};var Ht$1=function(e){const t={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&function(e){const t=new RegExp("([0-9A-Z]+):([0-9A-Z]+)");for(let r=0;r<e.nodes.length;r++){const a=t.exec(e.nodes[r]);if(!a){e.symCount=r;break}e.syms[Pt$1(a[1])]=Pt$1(a[2]);}e.nodes=e.nodes.slice(e.symCount,e.nodes.length);}(t),function(e){const t=[],r=(a,n)=>{let i=e.nodes[a];"!"===i[0]&&(t.push(n),i=i.slice(1));const o=i.split(/([A-Z0-9,]+)/g);for(let i=0;i<o.length;i+=2){const s=o[i],l=o[i+1];if(!s)continue;const u=n+s;if(","===l||void 0===l){t.push(u);continue}const c=Et$1(e,l,a);r(c,u);}};return r(0,""),t}(t)},jt=function(e){const t=e.split("|").reduce((e,t)=>{const r=t.split("¦");return e[r[0]]=r[1],e},{}),r={};return Object.keys(t).forEach((function(e){const a=Ht$1(t[e]);"true"===e&&(e=!0);for(let t=0;t<a.length;t++){const n=a[t];!0===r.hasOwnProperty(n)?!1===Array.isArray(r[n])?r[n]=[r[n],e]:r[n].push(e):r[n]=e;}})),r},Nt={"20th century fox":"Organization","7 eleven":"Organization","motel 6":"Organization",g8:"Organization",vh1:"Organization",q1:"Date",q2:"Date",q3:"Date",q4:"Date",her:["Possessive","Pronoun"],his:["Possessive","Pronoun"],their:["Possessive","Pronoun"],themselves:["Possessive","Pronoun"],your:["Possessive","Pronoun"],our:["Possessive","Pronoun"],my:["Possessive","Pronoun"],its:["Possessive","Pronoun"]};const xt$1={Unit:(e,t)=>{e[t]=["Abbreviation","Unit"];},Cardinal:(e,t)=>{e[t]=["TextValue","Cardinal"];},TextOrdinal:(e,t)=>{e[t]=["Ordinal","TextValue"],e[t+"s"]=["TextValue","Fraction"];},Singular:(e,t,r)=>{e[t]="Singular";let a=r.transforms.toPlural(t,r);e[a]=e[a]||"Plural";},Infinitive:(e,t,r)=>{e[t]="Infinitive";let a=r.transforms.conjugate(t,r),n=Object.keys(a);for(let t=0;t<n.length;t++){let r=a[n[t]];e[r]=e[r]||n[t];}},Comparable:(e,t,r)=>{e[t]="Comparable";let a=r.transforms.adjectives(t),n=Object.keys(a);for(let t=0;t<n.length;t++){let r=a[n[t]];e[r]=e[r]||n[t];}},PhrasalVerb:(e,t,r)=>{e[t]=["PhrasalVerb","Infinitive"];let a=t.split(" "),n=r.transforms.conjugate(a[0],r),i=Object.keys(n);for(let t=0;t<i.length;t++){let o=n[i[t]]+" "+a[1];e[o]=e[o]||["PhrasalVerb",i[t]],r.hasCompound[n[i[t]]]=!0;}},Demonym:(e,t,r)=>{e[t]="Demonym";let a=r.transforms.toPlural(t,r);e[a]=e[a]||["Demonym","Plural"];}},Ft=function(e,t,r){Object.keys(e).forEach(a=>{let n=e[a];"Abbreviation"!==n&&"Unit"!==n||(r.cache.abbreviations[a]=!0);let i=a.split(" ");i.length>1&&(r.hasCompound[i[0]]=!0),void 0===xt$1[n]?void 0!==t[a]?("string"==typeof t[a]&&(t[a]=[t[a]]),"string"==typeof n?t[a].push(n):t[a]=t[a].concat(n)):t[a]=n:xt$1[n](t,a,r);});};var Ct$1=function(e){let t=Object.assign({},Nt);return Object.keys(At).forEach(r=>{let a=jt(At[r]);Object.keys(a).forEach(e=>{a[e]=r;}),Ft(a,t,e);}),t},Bt=Ft;var Gt=function(e){let t=e.irregulars.nouns,r=Object.keys(t);for(let a=0;a<r.length;a++){const n=r[a];e.words[n]="Singular",e.words[t[n]]="Plural";}let a=e.irregulars.verbs,n=Object.keys(a);for(let t=0;t<n.length;t++){const r=n[t];e.words[r]=e.words[r]||"Infinitive";let i=e.transforms.conjugate(r,e);i=Object.assign(i,a[r]),Object.keys(i).forEach(t=>{e.words[i[t]]=e.words[i[t]]||t,"Participle"===e.words[i[t]]&&(e.words[i[t]]=t);});}};const zt={g:"Gerund",prt:"Participle",perf:"PerfectTense",pst:"PastTense",fut:"FuturePerfect",pres:"PresentTense",pluperf:"Pluperfect",a:"Actor"};let It={act:{a:"_or"},ache:{pst:"ached",g:"aching"},age:{g:"ageing",pst:"aged",pres:"ages"},aim:{a:"_er",g:"_ing",pst:"_ed"},arise:{prt:"_n",pst:"arose"},babysit:{a:"_ter",pst:"babysat"},ban:{a:"",g:"_ning",pst:"_ned"},be:{a:"",g:"am",prt:"been",pst:"was",pres:"is"},beat:{a:"_er",g:"_ing",prt:"_en"},become:{prt:"_"},begin:{g:"_ning",prt:"begun",pst:"began"},being:{g:"are",pst:"were",pres:"are"},bend:{prt:"bent"},bet:{a:"_ter",prt:"_"},bind:{pst:"bound"},bite:{g:"biting",prt:"bitten",pst:"bit"},bleed:{pst:"bled",prt:"bled"},blow:{prt:"_n",pst:"blew"},boil:{a:"_er"},brake:{prt:"broken"},break:{pst:"broke"},breed:{pst:"bred"},bring:{pst:"brought",prt:"brought"},broadcast:{pst:"_"},budget:{pst:"_ed"},build:{pst:"built",prt:"built"},burn:{prt:"_ed"},burst:{prt:"_"},buy:{pst:"bought",prt:"bought"},can:{a:"",fut:"_",g:"",pst:"could",perf:"could",pluperf:"could",pres:"_"},catch:{pst:"caught"},choose:{g:"choosing",prt:"chosen",pst:"chose"},cling:{prt:"clung"},come:{prt:"_",pst:"came",g:"coming"},compete:{a:"competitor",g:"competing",pst:"_d"},cost:{pst:"_"},creep:{prt:"crept"},cut:{prt:"_"},deal:{pst:"_t",prt:"_t"},develop:{a:"_er",g:"_ing",pst:"_ed"},die:{g:"dying",pst:"_d"},dig:{g:"_ging",pst:"dug",prt:"dug"},dive:{prt:"_d"},do:{pst:"did",pres:"_es"},draw:{prt:"_n",pst:"drew"},dream:{prt:"_t"},drink:{prt:"drunk",pst:"drank"},drive:{g:"driving",prt:"_n",pst:"drove"},drop:{g:"_ping",pst:"_ped"},eat:{a:"_er",g:"_ing",prt:"_en",pst:"ate"},edit:{pst:"_ed",g:"_ing"},egg:{pst:"_ed"},fall:{prt:"_en",pst:"fell"},feed:{prt:"fed",pst:"fed"},feel:{a:"_er",pst:"felt"},fight:{pst:"fought",prt:"fought"},find:{pst:"found"},flee:{g:"_ing",prt:"fled"},fling:{prt:"flung"},fly:{prt:"flown",pst:"flew"},forbid:{pst:"forbade"},forget:{g:"_ing",prt:"forgotten",pst:"forgot"},forgive:{g:"forgiving",prt:"_n",pst:"forgave"},free:{a:"",g:"_ing"},freeze:{g:"freezing",prt:"frozen",pst:"froze"},get:{pst:"got",prt:"gotten"},give:{g:"giving",prt:"_n",pst:"gave"},go:{prt:"_ne",pst:"went",pres:"goes"},grow:{prt:"_n"},guide:{pst:"_d"},hang:{pst:"hung",prt:"hung"},have:{g:"having",pst:"had",prt:"had",pres:"has"},hear:{pst:"_d",prt:"_d"},hide:{prt:"hidden",pst:"hid"},hit:{prt:"_"},hold:{pst:"held",prt:"held"},hurt:{pst:"_",prt:"_"},ice:{g:"icing",pst:"_d"},imply:{pst:"implied",pres:"implies"},is:{a:"",g:"being",pst:"was",pres:"_"},keep:{prt:"kept"},kneel:{prt:"knelt"},know:{prt:"_n"},lay:{pst:"laid",prt:"laid"},lead:{pst:"led",prt:"led"},leap:{prt:"_t"},leave:{pst:"left",prt:"left"},lend:{prt:"lent"},lie:{g:"lying",pst:"lay"},light:{pst:"lit",prt:"lit"},log:{g:"_ging",pst:"_ged"},loose:{prt:"lost"},lose:{g:"losing",pst:"lost"},make:{pst:"made",prt:"made"},mean:{pst:"_t",prt:"_t"},meet:{a:"_er",g:"_ing",pst:"met",prt:"met"},miss:{pres:"_"},name:{g:"naming"},patrol:{g:"_ling",pst:"_led"},pay:{pst:"paid",prt:"paid"},prove:{prt:"_n"},puke:{g:"puking"},put:{prt:"_"},quit:{prt:"_"},read:{pst:"_",prt:"_"},ride:{prt:"ridden"},reside:{pst:"_d"},ring:{pst:"rang",prt:"rung"},rise:{fut:"will have _n",g:"rising",prt:"_n",pst:"rose",pluperf:"had _n"},rub:{g:"_bing",pst:"_bed"},run:{g:"_ning",prt:"_",pst:"ran"},say:{pst:"said",prt:"said",pres:"_s"},seat:{pst:"sat",prt:"sat"},see:{g:"_ing",prt:"_n",pst:"saw"},seek:{prt:"sought"},sell:{pst:"sold",prt:"sold"},send:{prt:"sent"},set:{prt:"_"},sew:{prt:"_n"},shake:{prt:"_n"},shave:{prt:"_d"},shed:{g:"_ding",pst:"_",pres:"_s"},shine:{pst:"shone",prt:"shone"},shoot:{pst:"shot",prt:"shot"},show:{pst:"_ed"},shut:{prt:"_"},sing:{prt:"sung",pst:"sang"},sink:{pst:"sank",pluperf:"had sunk"},sit:{pst:"sat"},ski:{pst:"_ied"},slay:{prt:"slain"},sleep:{prt:"slept"},slide:{pst:"slid",prt:"slid"},smash:{pres:"_es"},sneak:{prt:"snuck"},speak:{fut:"will have spoken",prt:"spoken",pst:"spoke",perf:"have spoken",pluperf:"had spoken"},speed:{prt:"sped"},spend:{prt:"spent"},spill:{prt:"_ed",pst:"spilt"},spin:{g:"_ning",pst:"spun",prt:"spun"},spit:{prt:"spat"},split:{prt:"_"},spread:{pst:"_"},spring:{prt:"sprung"},stand:{pst:"stood"},steal:{a:"_er",pst:"stole"},stick:{pst:"stuck"},sting:{pst:"stung"},stink:{pst:"stunk",prt:"stunk"},stream:{a:"_er"},strew:{prt:"_n"},strike:{g:"striking",pst:"struck"},suit:{a:"_er",g:"_ing",pst:"_ed"},sware:{prt:"sworn"},swear:{pst:"swore"},sweep:{prt:"swept"},swim:{g:"_ming",pst:"swam"},swing:{pst:"swung"},take:{fut:"will have _n",pst:"took",perf:"have _n",pluperf:"had _n"},teach:{pst:"taught",pres:"_es"},tear:{pst:"tore"},tell:{pst:"told"},think:{pst:"thought"},thrive:{prt:"_d"},tie:{g:"tying",pst:"_d"},undergo:{prt:"_ne"},understand:{pst:"understood"},upset:{prt:"_"},wait:{a:"_er",g:"_ing",pst:"_ed"},wake:{pst:"woke"},wear:{pst:"wore"},weave:{prt:"woven"},wed:{pst:"wed"},weep:{prt:"wept"},win:{g:"_ning",pst:"won"},wind:{prt:"wound"},withdraw:{pst:"withdrew"},wring:{prt:"wrung"},write:{g:"writing",prt:"written",pst:"wrote"}},Ot=Object.keys(It);for(let e=0;e<Ot.length;e++){const t=Ot[e];let r={};Object.keys(It[t]).forEach(e=>{let a=It[t][e];a=a.replace("_",t),r[zt[e]]=a;}),It[t]=r;}var Tt$1=It;var Vt={b:[{reg:/([^aeiou][aeiou])b$/i,repl:{pr:"$1bs",pa:"$1bbed",gr:"$1bbing"}}],d:[{reg:/(end)$/i,repl:{pr:"$1s",pa:"ent",gr:"$1ing",ar:"$1er"}},{reg:/(eed)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing",ar:"$1er"}},{reg:/(ed)$/i,repl:{pr:"$1s",pa:"$1ded",ar:"$1der",gr:"$1ding"}},{reg:/([^aeiou][ou])d$/i,repl:{pr:"$1ds",pa:"$1dded",gr:"$1dding"}}],e:[{reg:/(eave)$/i,repl:{pr:"$1s",pa:"$1d",gr:"eaving",ar:"$1r"}},{reg:/(ide)$/i,repl:{pr:"$1s",pa:"ode",gr:"iding",ar:"ider"}},{reg:/(t|sh?)(ake)$/i,repl:{pr:"$1$2s",pa:"$1ook",gr:"$1aking",ar:"$1$2r"}},{reg:/w(ake)$/i,repl:{pr:"w$1s",pa:"woke",gr:"waking",ar:"w$1r"}},{reg:/m(ake)$/i,repl:{pr:"m$1s",pa:"made",gr:"making",ar:"m$1r"}},{reg:/(a[tg]|i[zn]|ur|nc|gl|is)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/([bd]l)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/(om)e$/i,repl:{pr:"$1es",pa:"ame",gr:"$1ing"}}],g:[{reg:/([^aeiou][aou])g$/i,repl:{pr:"$1gs",pa:"$1gged",gr:"$1gging"}}],h:[{reg:/(..)([cs]h)$/i,repl:{pr:"$1$2es",pa:"$1$2ed",gr:"$1$2ing"}}],k:[{reg:/(ink)$/i,repl:{pr:"$1s",pa:"unk",gr:"$1ing",ar:"$1er"}}],m:[{reg:/([^aeiou][aeiou])m$/i,repl:{pr:"$1ms",pa:"$1mmed",gr:"$1mming"}}],n:[{reg:/(en)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}}],p:[{reg:/(e)(ep)$/i,repl:{pr:"$1$2s",pa:"$1pt",gr:"$1$2ing",ar:"$1$2er"}},{reg:/([^aeiou][aeiou])p$/i,repl:{pr:"$1ps",pa:"$1pped",gr:"$1pping"}},{reg:/([aeiu])p$/i,repl:{pr:"$1ps",pa:"$1p",gr:"$1pping"}}],r:[{reg:/([td]er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}}],s:[{reg:/(ish|tch|ess)$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}}],t:[{reg:/(ion|end|e[nc]t)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(.eat)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/([aeiu])t$/i,repl:{pr:"$1ts",pa:"$1t",gr:"$1tting"}},{reg:/([^aeiou][aeiou])t$/i,repl:{pr:"$1ts",pa:"$1tted",gr:"$1tting"}}],w:[{reg:/(.llow)$/i,repl:{pr:"$1s",pa:"$1ed"}},{reg:/(..)(ow)$/i,repl:{pr:"$1$2s",pa:"$1ew",gr:"$1$2ing",prt:"$1$2n"}}],y:[{reg:/(i|f|rr)y$/i,repl:{pr:"$1ies",pa:"$1ied",gr:"$1ying"}}],z:[{reg:/([aeiou]zz)$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}}]};const Mt$1={pr:"PresentTense",pa:"PastTense",gr:"Gerund",prt:"Participle",ar:"Actor"},Jt=function(e,t){let r={},a=Object.keys(t.repl);for(let n=0;n<a.length;n+=1){let i=a[n];r[Mt$1[i]]=e.replace(t.reg,t.repl[i]);}return r};var Lt$1=function(e=""){let t=e[e.length-1];if(!0===Vt.hasOwnProperty(t))for(let r=0;r<Vt[t].length;r+=1){if(!0===Vt[t][r].reg.test(e))return Jt(e,Vt[t][r])}return {}};const St$1=/[bcdfghjklmnpqrstvwxz]y$/;var _t$1={Gerund:e=>"e"===e.charAt(e.length-1)?e.replace(/e$/,"ing"):e+"ing",PresentTense:e=>"s"===e.charAt(e.length-1)?e+"es":!0===St$1.test(e)?e.slice(0,-1)+"ies":e+"s",PastTense:e=>"e"===e.charAt(e.length-1)?e+"d":"ed"===e.substr(-2)?e:!0===St$1.test(e)?e.slice(0,-1)+"ied":e+"ed"};var Kt=function(e="",t){let r={};return t&&t.irregulars&&!0===t.irregulars.verbs.hasOwnProperty(e)&&(r=Object.assign({},t.irregulars.verbs[e])),r=Object.assign({},Lt$1(e),r),void 0===r.Gerund&&(r.Gerund=_t$1.Gerund(e)),void 0===r.PastTense&&(r.PastTense=_t$1.PastTense(e)),void 0===r.PresentTense&&(r.PresentTense=_t$1.PresentTense(e)),r};const qt=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/oud$/,/...p$/],Wt=[/ary$/],Rt={nice:"nicest",late:"latest",hard:"hardest",inner:"innermost",outer:"outermost",far:"furthest",worse:"worst",bad:"worst",good:"best",big:"biggest",large:"largest"},Ut=[{reg:/y$/i,repl:"iest"},{reg:/([aeiou])t$/i,repl:"$1ttest"},{reg:/([aeou])de$/i,repl:"$1dest"},{reg:/nge$/i,repl:"ngest"},{reg:/([aeiou])te$/i,repl:"$1test"}];const Qt=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/old$/,/oud$/,/e[ae]p$/],Zt=[/ary$/,/ous$/],Xt={grey:"greyer",gray:"grayer",green:"greener",yellow:"yellower",red:"redder",good:"better",well:"better",bad:"worse",sad:"sadder",big:"bigger"},Yt=[{reg:/y$/i,repl:"ier"},{reg:/([aeiou])t$/i,repl:"$1tter"},{reg:/([aeou])de$/i,repl:"$1der"},{reg:/nge$/i,repl:"nger"}];const er={toSuperlative:function(e){if(Rt.hasOwnProperty(e))return Rt[e];for(let t=0;t<Ut.length;t++)if(Ut[t].reg.test(e))return e.replace(Ut[t].reg,Ut[t].repl);for(let t=0;t<Wt.length;t++)if(!0===Wt[t].test(e))return null;for(let t=0;t<qt.length;t++)if(!0===qt[t].test(e))return "e"===e.charAt(e.length-1)?e+"st":e+"est";return e+"est"},toComparative:function(e){if(Xt.hasOwnProperty(e))return Xt[e];for(let t=0;t<Yt.length;t++)if(!0===Yt[t].reg.test(e))return e.replace(Yt[t].reg,Yt[t].repl);for(let t=0;t<Zt.length;t++)if(!0===Zt[t].test(e))return null;for(let t=0;t<Qt.length;t++)if(!0===Qt[t].test(e))return e+"er";return !0===/e$/.test(e)?e+"r":e+"er"}};var tr=function(e){let t={},r=er.toSuperlative(e);r&&(t.Superlative=r);let a=er.toComparative(e);return a&&(t.Comparative=a),t};var rr={a:[[/(antenn|formul|nebul|vertebr|vit)a$/i,"$1ae"],[/([ti])a$/i,"$1a"]],e:[[/(kn|l|w)ife$/i,"$1ives"],[/(hive)$/i,"$1s"],[/([m|l])ouse$/i,"$1ice"],[/([m|l])ice$/i,"$1ice"]],f:[[/^(dwar|handkerchie|hoo|scar|whar)f$/i,"$1ves"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i,"$1ves"]],i:[[/(octop|vir)i$/i,"$1i"]],m:[[/([ti])um$/i,"$1a"]],n:[[/^(oxen)$/i,"$1"]],o:[[/(al|ad|at|er|et|ed|ad)o$/i,"$1oes"]],s:[[/(ax|test)is$/i,"$1es"],[/(alias|status)$/i,"$1es"],[/sis$/i,"ses"],[/(bu)s$/i,"$1ses"],[/(sis)$/i,"ses"],[/^(?!talis|.*hu)(.*)man$/i,"$1men"],[/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,"$1i"]],x:[[/(matr|vert|ind|cort)(ix|ex)$/i,"$1ices"],[/^(ox)$/i,"$1en"]],y:[[/([^aeiouy]|qu)y$/i,"$1ies"]],z:[[/(quiz)$/i,"$1zes"]]};const ar=/(x|ch|sh|s|z)$/;var nr=function(e="",t){let r=t.irregulars.nouns;if(r.hasOwnProperty(e))return r[e];let a=function(e){let t=e[e.length-1];if(!0===rr.hasOwnProperty(t))for(let r=0;r<rr[t].length;r+=1){let a=rr[t][r][0];if(!0===a.test(e))return e.replace(a,rr[t][r][1])}return null}(e);return null!==a?a:ar.test(e)?e+"es":e+"s"},ir=[[/([^v])ies$/i,"$1y"],[/ises$/i,"isis"],[/(kn|[^o]l|w)ives$/i,"$1ife"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i,"$1f"],[/^(dwar|handkerchie|hoo|scar|whar)ves$/i,"$1f"],[/(antenn|formul|nebul|vertebr|vit)ae$/i,"$1a"],[/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i,"$1us"],[/(buffal|tomat|tornad)(oes)$/i,"$1o"],[/(eas)es$/i,"$1e"],[/(..[aeiou]s)es$/i,"$1"],[/(vert|ind|cort)(ices)$/i,"$1ex"],[/(matr|append)(ices)$/i,"$1ix"],[/(x|ch|ss|sh|z|o)es$/i,"$1"],[/men$/i,"man"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/([m|l])ice$/i,"$1ouse"],[/(cris|ax|test)es$/i,"$1is"],[/(alias|status)es$/i,"$1"],[/(ss)$/i,"$1"],[/(ics)$/i,"$1"],[/s$/i,""]];var or=function(e,t){let r=t.irregulars.nouns,a=(n=r,Object.keys(n).reduce((e,t)=>(e[n[t]]=t,e),{}));var n;if(a.hasOwnProperty(e))return a[e];for(let t=0;t<ir.length;t++)if(!0===ir[t][0].test(e))return e=e.replace(ir[t][0],ir[t][1]);return e};var sr={Participle:[{reg:/own$/i,to:"ow"},{reg:/(.)un([g|k])$/i,to:"$1in$2"}],Actor:[{reg:/(er)er$/i,to:"$1"}],PresentTense:[{reg:/(..)(ies)$/i,to:"$1y"},{reg:/(tch|sh)es$/i,to:"$1"},{reg:/(ss|zz)es$/i,to:"$1"},{reg:/([tzlshicgrvdnkmu])es$/i,to:"$1e"},{reg:/(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,to:"$1"},{reg:/(ow)s$/i,to:"$1"},{reg:/(op)s$/i,to:"$1"},{reg:/([eirs])ts$/i,to:"$1t"},{reg:/(ll)s$/i,to:"$1"},{reg:/(el)s$/i,to:"$1"},{reg:/(ip)es$/i,to:"$1e"},{reg:/ss$/i,to:"ss"},{reg:/s$/i,to:""}],Gerund:[{reg:/(..)(p|d|t|g){2}ing$/i,to:"$1$2"},{reg:/(ll|ss|zz)ing$/i,to:"$1"},{reg:/([^aeiou])ying$/i,to:"$1y"},{reg:/([^ae]i.)ing$/i,to:"$1e"},{reg:/(ea[dklnrtv])ing$/i,to:"$1"},{reg:/(ch|sh)ing$/i,to:"$1"},{reg:/(z)ing$/i,to:"$1e"},{reg:/(a[gdkvtc])ing$/i,to:"$1e"},{reg:/(u[rtcbn])ing$/i,to:"$1e"},{reg:/([^o]o[bdknprv])ing$/i,to:"$1e"},{reg:/([tbckg]l)ing$/i,to:"$1e"},{reg:/(c|s)ing$/i,to:"$1e"},{reg:/(..)ing$/i,to:"$1"}],PastTense:[{reg:/(ued)$/i,to:"ue"},{reg:/ea(rn|l|m)ed$/i,to:"ea$1"},{reg:/a([^aeiouy])ed$/i,to:"a$1e"},{reg:/([aeiou]zz)ed$/i,to:"$1"},{reg:/(e|i)lled$/i,to:"$1ll"},{reg:/(.)(sh|ch)ed$/i,to:"$1$2"},{reg:/(tl|gl)ed$/i,to:"$1e"},{reg:/(um?pt?)ed$/i,to:"$1"},{reg:/(ss)ed$/i,to:"$1"},{reg:/pped$/i,to:"p"},{reg:/tted$/i,to:"t"},{reg:/(..)gged$/i,to:"$1g"},{reg:/(..)lked$/i,to:"$1lk"},{reg:/([^aeiouy][aeiou])ked$/i,to:"$1ke"},{reg:/(.[aeiou])led$/i,to:"$1l"},{reg:/(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,to:"$1$2"},{reg:/(.ut)ed$/i,to:"$1e"},{reg:/(.pt)ed$/i,to:"$1"},{reg:/(us)ed$/i,to:"$1e"},{reg:/(dd)ed$/i,to:"$1"},{reg:/(..[^aeiouy])ed$/i,to:"$1e"},{reg:/(..)ied$/i,to:"$1y"},{reg:/(.o)ed$/i,to:"$1o"},{reg:/(..i)ed$/i,to:"$1"},{reg:/(.a[^aeiou])ed$/i,to:"$1"},{reg:/([aeiou][^aeiou])ed$/i,to:"$1e"},{reg:/([rl])ew$/i,to:"$1ow"},{reg:/([pl])t$/i,to:"$1t"}]};let lr={Gerund:["ing"],Actor:["erer"],Infinitive:["ate","ize","tion","rify","then","ress","ify","age","nce","ect","ise","ine","ish","ace","ash","ure","tch","end","ack","and","ute","ade","ock","ite","ase","ose","use","ive","int","nge","lay","est","ain","ant","ent","eed","er","le","own","unk","ung","en"],PastTense:["ed","lt","nt","pt","ew","ld"],PresentTense:["rks","cks","nks","ngs","mps","tes","zes","ers","les","acks","ends","ands","ocks","lays","eads","lls","els","ils","ows","nds","ays","ams","ars","ops","ffs","als","urs","lds","ews","ips","es","ts","ns"]};lr=Object.keys(lr).reduce((e,t)=>(lr[t].forEach(r=>e[r]=t),e),{});var ur=lr;const cr={nouns:{addendum:"addenda",alga:"algae",alumna:"alumnae",alumnus:"alumni",analysis:"analyses",antenna:"antennae",appendix:"appendices",avocado:"avocados",axis:"axes",bacillus:"bacilli",barracks:"barracks",beau:"beaux",bus:"buses",cactus:"cacti",chateau:"chateaux",child:"children",circus:"circuses",clothes:"clothes",corpus:"corpora",criterion:"criteria",curriculum:"curricula",database:"databases",deer:"deer",diagnosis:"diagnoses",echo:"echoes",embargo:"embargoes",epoch:"epochs",foot:"feet",formula:"formulae",fungus:"fungi",genus:"genera",goose:"geese",halo:"halos",hippopotamus:"hippopotami",index:"indices",larva:"larvae",leaf:"leaves",libretto:"libretti",loaf:"loaves",man:"men",matrix:"matrices",memorandum:"memoranda",modulus:"moduli",mosquito:"mosquitoes",mouse:"mice",nebula:"nebulae",nucleus:"nuclei",octopus:"octopi",opus:"opera",ovum:"ova",ox:"oxen",parenthesis:"parentheses",person:"people",phenomenon:"phenomena",prognosis:"prognoses",quiz:"quizzes",radius:"radii",referendum:"referenda",rodeo:"rodeos",sex:"sexes",shoe:"shoes",sombrero:"sombreros",stimulus:"stimuli",stomach:"stomachs",syllabus:"syllabi",synopsis:"synopses",tableau:"tableaux",thesis:"theses",thief:"thieves",tooth:"teeth",tornado:"tornados",tuxedo:"tuxedos",vertebra:"vertebrae"},verbs:Tt$1},hr={conjugate:Kt,adjectives:tr,toPlural:nr,toSingular:or,toInfinitive:function(e,t,r){if(!e)return "";if(!0===t.words.hasOwnProperty(e)){let r=t.irregulars.verbs,a=Object.keys(r);for(let t=0;t<a.length;t++){let n=Object.keys(r[a[t]]);for(let i=0;i<n.length;i++)if(e===r[a[t]][n[i]])return a[t]}}if((r=r||function(e){let t=e.substr(e.length-3);if(!0===ur.hasOwnProperty(t))return ur[t];let r=e.substr(e.length-2);return !0===ur.hasOwnProperty(r)?ur[r]:"s"===e.substr(e.length-1)?"PresentTense":null}(e))&&sr[r])for(let t=0;t<sr[r].length;t++){const a=sr[r][t];if(!0===a.reg.test(e))return e.replace(a.reg,a.to)}return e}};let dr=!1;class gr{constructor(){Object.defineProperty(this,"words",{enumerable:!1,value:{},writable:!0}),Object.defineProperty(this,"hasCompound",{enumerable:!1,value:{},writable:!0}),Object.defineProperty(this,"irregulars",{enumerable:!1,value:cr,writable:!0}),Object.defineProperty(this,"tags",{enumerable:!1,value:Object.assign({},kt$1),writable:!0}),Object.defineProperty(this,"transforms",{enumerable:!1,value:hr,writable:!0}),Object.defineProperty(this,"taggers",{enumerable:!1,value:[],writable:!0}),Object.defineProperty(this,"cache",{enumerable:!1,value:{abbreviations:{}}}),this.words=Ct$1(this),Gt(this);}verbose(e){return dr=e,this}isVerbose(){return dr}addWords(e){let t={};Object.keys(e).forEach(r=>{let a=e[r];r=r.toLowerCase().trim(),t[r]=a;}),Bt(t,this.words,this);}addConjugations(e){return Object.assign(this.irregulars.verbs,e),this}addPlurals(e){return Object.assign(this.irregulars.nouns,e),this}addTags(e){return e=Object.assign({},e),this.tags=Object.assign(this.tags,e),this.tags=yt$1(this.tags),this}postProcess(e){return this.taggers.push(e),this}stats(){return {words:Object.keys(this.words).length,plurals:Object.keys(this.irregulars.nouns).length,conjugations:Object.keys(this.irregulars.verbs).length,compounds:Object.keys(this.hasCompound).length,postProcessors:this.taggers.length}}}const pr=function(e){return JSON.parse(JSON.stringify(e))};gr.prototype.clone=function(){let e=new gr;return e.words=Object.assign({},this.words),e.hasCompound=Object.assign({},this.hasCompound),e.irregulars=pr(this.irregulars),e.tags=pr(this.tags),e.transforms=this.transforms,e.taggers=this.taggers,e};var mr=gr,fr=k$1((function(e,t){t.all=function(){return this.parents()[0]||this},t.parent=function(){return this.from?this.from:this},t.parents=function(e){let t=[];const r=function(e){e.from&&(t.push(e.from),r(e.from));};return r(this),t=t.reverse(),"number"==typeof e?t[e]:t},t.clone=function(e){let t=this.list.map(t=>t.clone(e));return this.buildFrom(t)},t.wordCount=function(){return this.list.reduce((e,t)=>e+=t.wordCount(),0)},t.wordcount=t.wordCount;})),br=k$1((function(e,t){t.first=function(e){return void 0===e?this.get(0):this.slice(0,e)},t.last=function(e){if(void 0===e)return this.get(this.list.length-1);let t=this.list.length;return this.slice(t-e,t)},t.slice=function(e,t){let r=this.list.slice(e,t);return this.buildFrom(r)},t.eq=function(e){let t=this.list[e];return void 0===t?this.buildFrom([]):this.buildFrom([t])},t.get=t.eq,t.firstTerms=function(){return this.match("^.")},t.firstTerm=t.firstTerms,t.lastTerms=function(){return this.match(".$")},t.lastTerm=t.lastTerms,t.termList=function(e){let t=[];for(let r=0;r<this.list.length;r++){let a=this.list[r].terms();for(let r=0;r<a.length;r++)if(t.push(a[r]),void 0!==e&&void 0!==t[e])return t[e]}return t};t.groups=function(e){return void 0===e?function(e){let t={};const r={};for(let t=0;t<e.list.length;t++){const a=e.list[t],n=Object.keys(a.groups).map(e=>a.groups[e]);for(let e=0;e<n.length;e++){const{group:t,start:i,length:o}=n[e];r[t]||(r[t]=[]),r[t].push(a.buildFrom(i,o));}}const a=Object.keys(r);for(let n=0;n<a.length;n++){const i=a[n];t[i]=e.buildFrom(r[i]);}return t}(this):("number"==typeof e&&(e=String(e)),function(e,t){const r=[];for(let a=0;a<e.list.length;a++){const n=e.list[a];let i=Object.keys(n.groups);i=i.filter(e=>n.groups[e].group===t),i.forEach(e=>{r.push(n.buildFrom(n.groups[e].start,n.groups[e].length));});}return e.buildFrom(r)}(this,e)||this.buildFrom([]))},t.group=t.groups,t.sentences=function(e){let t=[];return this.list.forEach(e=>{t.push(e.fullSentence());}),"number"==typeof e?this.buildFrom([t[e]]):this.buildFrom(t)},t.sentence=t.sentences;}));var vr=function(e,t){if(e._cache&&!0===e._cache.set){let{words:r,tags:a}=function(e){let t=[],r=[];return e.forEach(e=>{!0!==e.optional&&!0!==e.negative&&(void 0!==e.tag&&t.push(e.tag),void 0!==e.word&&r.push(e.word));}),{tags:t,words:r}}(t);for(let t=0;t<r.length;t++)if(void 0===e._cache.words[r[t]])return !1;for(let t=0;t<a.length;t++)if(void 0===e._cache.tags[a[t]])return !1}return !0},yr=k$1((function(e,t){t.match=function(e,t={}){"string"!=typeof t&&"number"!=typeof t&&null!==t||(t={group:t});let r=Ce(e,t);if(0===r.length)return this.buildFrom([]);if(!1===vr(this,r))return this.buildFrom([]);let a=this.list.reduce((e,t)=>e.concat(t.match(r)),[]);return void 0!==t.group&&null!==t.group&&""!==t.group?this.buildFrom(a).groups(t.group):this.buildFrom(a)},t.not=function(e,t={}){let r=Ce(e,t);if(0===r.length||!1===vr(this,r))return this;let a=this.list.reduce((e,t)=>e.concat(t.not(r)),[]);return this.buildFrom(a)},t.matchOne=function(e,t={}){let r=Ce(e,t);if(!1===vr(this,r))return this.buildFrom([]);for(let e=0;e<this.list.length;e++){let t=this.list[e].match(r,!0);return this.buildFrom(t)}return this.buildFrom([])},t.if=function(e,t={}){let r=Ce(e,t);if(!1===vr(this,r))return this.buildFrom([]);let a=this.list.filter(e=>!0===e.has(r));return this.buildFrom(a)},t.ifNo=function(e,t={}){let r=Ce(e,t),a=this.list.filter(e=>!1===e.has(r));return this.buildFrom(a)},t.has=function(e,t={}){let r=Ce(e,t);return !1!==vr(this,r)&&this.list.some(e=>!0===e.has(r))},t.lookAhead=function(e,t={}){e||(e=".*");let r=Ce(e,t),a=[];return this.list.forEach(e=>{a=a.concat(e.lookAhead(r));}),a=a.filter(e=>e),this.buildFrom(a)},t.lookAfter=t.lookAhead,t.lookBehind=function(e,t={}){e||(e=".*");let r=Ce(e,t),a=[];return this.list.forEach(e=>{a=a.concat(e.lookBehind(r));}),a=a.filter(e=>e),this.buildFrom(a)},t.lookBefore=t.lookBehind,t.before=function(e,t={}){let r=Ce(e,t),a=this.if(r).list.map(e=>{let t=e.terms().map(e=>e.id),a=e.match(r)[0],n=t.indexOf(a.start);return 0===n||-1===n?null:e.buildFrom(e.start,n)});return a=a.filter(e=>null!==e),this.buildFrom(a)},t.after=function(e,t={}){let r=Ce(e,t),a=this.if(r).list.map(e=>{let t=e.terms(),a=t.map(e=>e.id),n=e.match(r)[0],i=a.indexOf(n.start);if(-1===i||!t[i+n.length])return null;let o=t[i+n.length].id,s=e.length-i-n.length;return e.buildFrom(o,s)});return a=a.filter(e=>null!==e),this.buildFrom(a)},t.hasAfter=function(e,t={}){return this.filter(r=>r.lookAfter(e,t).found)},t.hasBefore=function(e,t={}){return this.filter(r=>r.lookBefore(e,t).found)};}));var wr=function(e,t,r,a){let n=[];"string"==typeof e&&(n=e.split(" ")),t.list.forEach(i=>{let o=i.terms();!0===r&&(o=o.filter(r=>r.canBe(e,t.world))),o.forEach((r,i)=>{n.length>1?n[i]&&"."!==n[i]&&r.tag(n[i],a,t.world):r.tag(e,a,t.world);});});},kr={tag:function(e,t){return e?(wr(e,this,!1,t),this):this},tagSafe:function(e,t){return e?(wr(e,this,!0,t),this):this},unTag:function(e,t){return this.list.forEach(r=>{r.terms().forEach(r=>r.unTag(e,t,this.world));}),this},canBe:function(e){if(!e)return this;let t=this.world,r=this.list.reduce((r,a)=>r.concat(a.canBe(e,t)),[]);return this.buildFrom(r)}},Ar={map:function(e){if(!e)return this;let t=this.list.map((t,r)=>{let a=this.buildFrom([t]);a.from=null;let n=e(a,r);return n&&n.list&&n.list[0]?n.list[0]:n});return t=t.filter(e=>e),0===t.length?this.buildFrom(t):"object"!=typeof t[0]||"Phrase"!==t[0].isA?t:this.buildFrom(t)},forEach:function(e,t){return e?(this.list.forEach((r,a)=>{let n=this.buildFrom([r]);!0===t&&(n.from=null),e(n,a);}),this):this},filter:function(e){if(!e)return this;let t=this.list.filter((t,r)=>{let a=this.buildFrom([t]);return a.from=null,e(a,r)});return this.buildFrom(t)},find:function(e){if(!e)return this;let t=this.list.find((t,r)=>{let a=this.buildFrom([t]);return a.from=null,e(a,r)});return t?this.buildFrom([t]):void 0},some:function(e){return e?this.list.some((t,r)=>{let a=this.buildFrom([t]);return a.from=null,e(a,r)}):this},random:function(e){if(!this.found)return this;let t=Math.floor(Math.random()*this.list.length);if(void 0===e){let e=[this.list[t]];return this.buildFrom(e)}return t+e>this.length&&(t=this.length-e,t=t<0?0:t),this.slice(t,t+e)}};var Dr=function(e,t,r){let a=function(e,t=[]){let r={};return e.forEach((e,a)=>{let n=!0;void 0!==t[a]&&(n=t[a]);let i=function(e){return e.split(/[ -]/g)}(e=(e=(e||"").toLowerCase()).replace(/[,;.!?]+$/,"")).map(e=>e.trim());r[i[0]]=r[i[0]]||{},1===i.length?r[i[0]].value=n:(r[i[0]].more=r[i[0]].more||[],r[i[0]].more.push({rest:i.slice(1),value:n}));}),r}(e,t),n=[];for(let e=0;e<r.list.length;e++){const t=r.list[e];let i=t.terms().map(e=>e.reduced);for(let e=0;e<i.length;e++)void 0!==a[i[e]]&&(void 0!==a[i[e]].more&&a[i[e]].more.forEach(r=>{if(void 0===i[e+r.rest.length])return;!0===r.rest.every((t,r)=>t===i[e+r+1])&&n.push({id:t.terms()[e].id,value:r.value,length:r.rest.length+1});}),void 0!==a[i[e]].value&&n.push({id:t.terms()[e].id,value:a[i[e]].value,length:1}));}return n},$r=k$1((function(e,t){t.lookup=function(e){let t=[],r=(a=e)&&"[object Object]"===Object.prototype.toString.call(a);var a;!0===r&&(e=Object.keys(e).map(r=>(t.push(e[r]),r))),"string"==typeof e&&(e=[e]),!0!==this._cache.set&&this.cache();let n=Dr(e,t,this),i=this.list[0];if(!0===r){let e={};return n.forEach(t=>{e[t.value]=e[t.value]||[],e[t.value].push(i.buildFrom(t.id,t.length));}),Object.keys(e).forEach(t=>{e[t]=this.buildFrom(e[t]);}),e}return n=n.map(e=>i.buildFrom(e.id,e.length)),this.buildFrom(n)},t.lookUp=t.lookup;})),Pr={cache:function(e){e=e||{};let t={},r={};return this._cache.words=t,this._cache.tags=r,this._cache.set=!0,this.list.forEach((a,n)=>{a.cache=a.cache||{},a.terms().forEach(a=>{t[a.reduced]&&!t.hasOwnProperty(a.reduced)||(t[a.reduced]=t[a.reduced]||[],t[a.reduced].push(n),Object.keys(a.tags).forEach(e=>{r[e]=r[e]||[],r[e].push(n);}),e.root&&(a.setRoot(this.world),t[a.root]=[n]));});}),this},uncache:function(){return this._cache={},this.list.forEach(e=>{e.cache={};}),this.parents().forEach(e=>{e._cache={},e.list.forEach(e=>{e.cache={};});}),this}};var Er={replaceWith:function(e,t={}){return e?(!0===t&&(t={keepTags:!0}),!1===t&&(t={keepTags:!1}),t=t||{},this.uncache(),this.list.forEach(r=>{let a,n=e;if("function"==typeof e&&(n=e(r)),n&&"object"==typeof n&&"Doc"===n.isA)a=n.list,this.pool().merge(n.pool());else {if("string"!=typeof n)return;{!1!==t.keepCase&&r.terms(0).isTitleCase()&&(n=(i=n).charAt(0).toUpperCase()+i.substr(1)),a=ot$1(n,this.world,this.pool());let e=this.buildFrom(a);e.tagger(),a=e.list;}}var i;if(!0===t.keepTags){let e=r.json({terms:{tags:!0}}).terms;a[0].terms().forEach((t,r)=>{e[r]&&t.tagSafe(e[r].tags,"keptTag",this.world);});}r.replace(a[0],this);}),this):this.delete()},replace:function(e,t,r){return void 0===t?this.replaceWith(e,r):(this.match(e).replaceWith(t,r),this)}},Hr=k$1((function(e,t){const r=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},a=function(e,t){let r=ot$1(e,t.world)[0],a=t.buildFrom([r]);return a.tagger(),t.list=a.list,t};t.append=function(e=""){return e?this.found?(this.uncache(),this.list.forEach(t=>{let a;r(e)&&"Doc"===e.isA?a=e.list[0].clone():"string"==typeof e&&(a=ot$1(e,this.world,this.pool())[0]),this.buildFrom([a]).tagger(),t.append(a,this);}),this):a(e,this):this},t.insertAfter=t.append,t.insertAt=t.append,t.prepend=function(e){return e?this.found?(this.uncache(),this.list.forEach(t=>{let a;r(e)&&"Doc"===e.isA?a=e.list[0].clone():"string"==typeof e&&(a=ot$1(e,this.world,this.pool())[0]),this.buildFrom([a]).tagger(),t.prepend(a,this);}),this):a(e,this):this},t.insertBefore=t.prepend,t.concat=function(){this.uncache();let e=this.list.slice(0);for(let t=0;t<arguments.length;t++){let r=arguments[t];if("string"==typeof r){let t=ot$1(r,this.world);e=e.concat(t);}else "Doc"===r.isA?e=e.concat(r.list):"Phrase"===r.isA&&e.push(r);}return this.buildFrom(e)},t.delete=function(e){this.uncache();let t=this;return e&&(t=this.match(e)),t.list.forEach(e=>e.delete(this)),this},t.remove=t.delete;}));const jr={clean:!0,reduced:!0,root:!0};var Nr={text:function(e){e=e||{};let t=!1;0===this.parents().length&&(t=!0),("root"===e||"object"==typeof e&&e.root)&&this.list.forEach(e=>{e.terms().forEach(e=>{null===e.root&&e.setRoot(this.world);});});let r=this.list.reduce((r,a,n)=>{const i=!t&&0===n,o=!t&&n===this.list.length-1;return r+a.text(e,i,o)},"");return !0!==jr[e]&&!0!==e.reduced&&!0!==e.clean&&!0!==e.root||(r=r.trim()),r}};var xr=function(e,t,r){let a=function(e){let t=0,r=0,a={};return e.termList().forEach(e=>{a[e.id]={index:r,start:t+e.pre.length,length:e.text.length},t+=e.pre.length+e.text.length+e.post.length,r+=1;}),a}(e.all());(r.terms.index||r.index)&&t.forEach(e=>{e.terms.forEach(e=>{e.index=a[e.id].index;}),e.index=e.terms[0].index;}),(r.terms.offset||r.offset)&&t.forEach(e=>{e.terms.forEach(e=>{e.offset=a[e.id]||{};}),e.offset={index:e.terms[0].offset.index,start:e.terms[0].offset.start-e.text.indexOf(e.terms[0].text),length:e.text.length};});},Fr=k$1((function(e,t){const r={text:!0,terms:!0,trim:!0};t.json=function(e={}){if("number"==typeof e&&this.list[e])return this.list[e].json(r);!0===(e=function(e){return (e=Object.assign({},r,e)).unique&&(e.reduced=!0),e.offset&&(e.text=!0,e.terms&&!0!==e.terms||(e.terms={}),e.terms.offset=!0),(e.index||e.terms.index)&&(e.terms=!0===e.terms?{}:e.terms,e.terms.id=!0),e}(e)).root&&this.list.forEach(e=>{e.terms().forEach(e=>{null===e.root&&e.setRoot(this.world);});});let t=this.list.map(t=>t.json(e,this.world));if((e.terms.offset||e.offset||e.terms.index||e.index)&&xr(this,t,e),e.frequency||e.freq||e.count){let e={};this.list.forEach(t=>{let r=t.text("reduced");e[r]=e[r]||0,e[r]+=1;}),this.list.forEach((r,a)=>{t[a].count=e[r.text("reduced")];});}if(e.unique){let e={};t=t.filter(t=>!0!==e[t.reduced]&&(e[t.reduced]=!0,!0));}return t},t.data=t.json;})),Cr=k$1((function(e){const t="[0m",r=function(e,t){for(e=e.toString();e.length<t;)e+=" ";return e};const a={green:"#7f9c6c",red:"#914045",blue:"#6699cc",magenta:"#6D5685",cyan:"#2D85A8",yellow:"#e6d7b3",black:"#303b50"},n={green:function(e){return "[32m"+e+t},red:function(e){return "[31m"+e+t},blue:function(e){return "[34m"+e+t},magenta:function(e){return "[35m"+e+t},cyan:function(e){return "[36m"+e+t},yellow:function(e){return "[33m"+e+t},black:function(e){return "[30m"+e+t}};e.exports=function(e){return "undefined"!=typeof window&&window.document?(function(e){let t=e.world.tags;e.list.forEach(e=>{console.log('\n%c"'+e.text()+'"',"color: #e6d7b3;"),e.terms().forEach(e=>{let n=Object.keys(e.tags),i=e.text||"-";e.implicit&&(i="["+e.implicit+"]");let o="'"+i+"'";o=r(o,8);let s=n.find(e=>t[e]&&t[e].color),l="steelblue";t[s]&&(l=t[s].color,l=a[l]),console.log(`   ${o}  -  %c${n.join(", ")}`,`color: ${l||"steelblue"};`);});});}(e),e):(console.log(n.blue("=====")),e.list.forEach(t=>{console.log(n.blue("  -----")),t.terms().forEach(t=>{let a=Object.keys(t.tags),i=t.text||"-";t.implicit&&(i="["+t.implicit+"]"),i=n.yellow(i);let o="'"+i+"'";o=r(o,18);let s=n.blue("  ｜ ")+o+"  - "+function(e,t){return (e=e.map(e=>{if(!t.tags.hasOwnProperty(e))return e;const r=t.tags[e].color||"blue";return n[r](e)})).join(", ")}(a,e.world);console.log(s);});}),console.log(""),e)};}));var Br=function(e){let t=e.json({text:!1,terms:!1,reduced:!0}),r={};t.forEach(e=>{r[e.reduced]||(e.count=0,r[e.reduced]=e),r[e.reduced].count+=1;});let a=Object.keys(r).map(e=>r[e]);return a.sort((e,t)=>e.count>t.count?-1:e.count<t.count?1:0),a},Gr={debug:function(){return Cr(this),this},out:function(e){if("text"===e)return this.text();if("normal"===e)return this.text("normal");if("json"===e)return this.json();if("offset"===e||"offsets"===e)return this.json({offset:!0});if("array"===e)return this.json({terms:!1}).map(e=>e.text).filter(e=>e);if("freq"===e||"frequency"===e)return Br(this);if("terms"===e){let e=[];return this.json({text:!1,terms:{text:!0}}).forEach(t=>{let r=t.terms.map(e=>e.text);r=r.filter(e=>e),e=e.concat(r);}),e}return "tags"===e?this.list.map(e=>e.terms().reduce((e,t)=>(e[t.clean||t.implicit]=Object.keys(t.tags),e),{})):"debug"===e?(Cr(this),this):this.text()}};const zr={alpha:(e,t)=>{let r=e.text("clean"),a=t.text("clean");return r<a?-1:r>a?1:0},length:(e,t)=>{let r=e.text().trim().length,a=t.text().trim().length;return r<a?1:r>a?-1:0},wordCount:(e,t)=>{let r=e.wordCount(),a=t.wordCount();return r<a?1:r>a?-1:0}};zr.alphabetical=zr.alpha,zr.wordcount=zr.wordCount;const Ir={index:!0,sequence:!0,seq:!0,sequential:!0,chron:!0,chronological:!0};var Or={sort:function(e){return "freq"===(e=e||"alpha")||"frequency"===e||"topk"===e?function(e){let t={};const r={case:!0,punctuation:!1,whitespace:!0,unicode:!0};return e.list.forEach(e=>{let a=e.text(r);t[a]=t[a]||0,t[a]+=1;}),e.list.sort((e,a)=>{let n=t[e.text(r)],i=t[a.text(r)];return n<i?1:n>i?-1:0}),e}(this):Ir.hasOwnProperty(e)?function(e){let t={};return e.json({terms:{offset:!0}}).forEach(e=>{t[e.terms[0].id]=e.terms[0].offset.start;}),e.list=e.list.sort((e,r)=>t[e.start]>t[r.start]?1:t[e.start]<t[r.start]?-1:0),e}(this):"function"==typeof(e=zr[e]||e)?(this.list=this.list.sort(e),this):this},reverse:function(){let e=[].concat(this.list);return e=e.reverse(),this.buildFrom(e)},unique:function(){let e=[].concat(this.list),t={};return e=e.filter(e=>{let r=e.text("reduced").trim()||e.text("implicit").trim();return !0!==t.hasOwnProperty(r)&&(t[r]=!0,!0)}),this.buildFrom(e)}};const Tr=/[\[\]{}⟨⟩:,،、‒–—―…‹›«»‐\-;\/⁄·*\•^†‡°¡¿※№÷×ºª%‰=‱¶§~|‖¦©℗®℠™¤₳฿]/g,Vr=/['‘’“”"′″‴]+/g;var Mr={whitespace:function(e){let t=e.list.map(e=>e.terms());t.forEach((e,r)=>{e.forEach((a,n)=>{!0!==a.hasDash()?(a.pre=a.pre.replace(/\s/g,""),a.post=a.post.replace(/\s/g,""),(e.length-1!==n||t[r+1])&&(a.implicit&&!0===Boolean(a.text)||!0!==a.hasHyphen()&&(a.post+=" "))):a.post=" - ";});});},punctuation:function(e){e.forEach(e=>{!0===e.hasHyphen()&&(e.post=" "),e.pre=e.pre.replace(Tr,""),e.post=e.post.replace(Tr,""),e.post=e.post.replace(/\.\.\./,""),!0===/!/.test(e.post)&&(e.post=e.post.replace(/!/g,""),e.post="!"+e.post),!0===/\?/.test(e.post)&&(e.post=e.post.replace(/[\?!]*/,""),e.post="?"+e.post);});},unicode:function(e){e.forEach(e=>{!0!==e.isImplicit()&&(e.text=n(e.text));});},quotations:function(e){e.forEach(e=>{e.post=e.post.replace(Vr,""),e.pre=e.pre.replace(Vr,"");});},adverbs:function(e){e.match("#Adverb").not("(not|nary|seldom|never|barely|almost|basically|so)").remove();},abbreviations:function(e){e.list.forEach(e=>{let t=e.terms();t.forEach((e,r)=>{!0===e.tags.Abbreviation&&t[r+1]&&(e.post=e.post.replace(/^\./,""));});});}};const Jr={whitespace:!0,unicode:!0,punctuation:!0,emoji:!0,acronyms:!0,abbreviations:!0,case:!1,contractions:!1,parentheses:!1,quotations:!1,adverbs:!1,possessives:!1,verbs:!1,nouns:!1,honorifics:!1},Lr={light:{},medium:{case:!0,contractions:!0,parentheses:!0,quotations:!0,adverbs:!0}};Lr.heavy=Object.assign({},Lr.medium,{possessives:!0,verbs:!0,nouns:!0,honorifics:!0});var Sr={normalize:function(e){"string"==typeof(e=e||{})&&(e=Lr[e]||{}),e=Object.assign({},Jr,e),this.uncache();let t=this.termList();return e.case&&this.toLowerCase(),e.whitespace&&Mr.whitespace(this),e.unicode&&Mr.unicode(t),e.punctuation&&Mr.punctuation(t),e.emoji&&this.remove("(#Emoji|#Emoticon)"),e.acronyms&&this.acronyms().strip(),e.abbreviations&&Mr.abbreviations(this),(e.contraction||e.contractions)&&this.contractions().expand(),e.parentheses&&this.parentheses().unwrap(),(e.quotations||e.quotes)&&Mr.quotations(t),e.adverbs&&Mr.adverbs(this),(e.possessive||e.possessives)&&this.possessives().strip(),e.verbs&&this.verbs().toInfinitive(),(e.nouns||e.plurals)&&this.nouns().toSingular(),e.honorifics&&this.remove("#Honorific"),this}},_r=k$1((function(e,t){t.splitOn=function(e){if(!e){return this.parent().splitOn(this)}let t=Ce(e),r=[];return this.list.forEach(e=>{let a=e.match(t);if(0===a.length)return void r.push(e);let n=e;a.forEach(e=>{let t=n.splitOn(e);t.before&&r.push(t.before),t.match&&r.push(t.match),n=t.after;}),n&&r.push(n);}),this.buildFrom(r)},t.splitAfter=function(e){if(!e){return this.parent().splitAfter(this)}let t=Ce(e),r=[];return this.list.forEach(e=>{let a=e.match(t);if(0===a.length)return void r.push(e);let n=e;a.forEach(e=>{let t=n.splitOn(e);t.before&&t.match?(t.before.length+=t.match.length,r.push(t.before)):t.match&&r.push(t.match),n=t.after;}),n&&r.push(n);}),this.buildFrom(r)},t.split=t.splitAfter,t.splitBefore=function(e){if(!e){return this.parent().splitBefore(this)}let t=Ce(e),r=[];return this.list.forEach(e=>{let a=e.match(t);if(0===a.length)return void r.push(e);let n=e;a.forEach(e=>{let t=n.splitOn(e);t.before&&r.push(t.before),t.match&&t.after&&(t.match.length+=t.after.length),n=t.match;}),n&&r.push(n);}),this.buildFrom(r)},t.segment=function(e,t){e=e||{},t=t||{text:!0};let r=this,a=Object.keys(e);return a.forEach(e=>{r=r.splitOn(e);}),r.list.forEach(t=>{for(let r=0;r<a.length;r+=1)if(t.has(a[r]))return void(t.segment=e[a[r]])}),r.list.map(e=>{let r=e.json(t);return r.segment=e.segment||null,r})};}));const Kr=function(e,t){let r=e.world;return e.list.forEach(e=>{e.terms().forEach(e=>e[t](r));}),e};var qr={toLowerCase:function(){return Kr(this,"toLowerCase")},toUpperCase:function(){return Kr(this,"toUpperCase")},toTitleCase:function(){return Kr(this,"toTitleCase")},toCamelCase:function(){return this.list.forEach(e=>{let t=e.terms();t.forEach((e,r)=>{0!==r&&e.toTitleCase(),r!==t.length-1&&(e.post="");});}),this}},Wr=k$1((function(e,t){t.pre=function(e,t){return void 0===e?this.list[0].terms(0).pre:(this.list.forEach(r=>{let a=r.terms(0);!0===t?a.pre+=e:a.pre=e;}),this)},t.post=function(e,t){return void 0===e?this.list.map(e=>{let t=e.terms();return t[t.length-1].post}):(this.list.forEach(r=>{let a=r.terms(),n=a[a.length-1];!0===t?n.post+=e:n.post=e;}),this)},t.trim=function(){return this.list=this.list.map(e=>e.trim()),this},t.hyphenate=function(){return this.list.forEach(e=>{let t=e.terms();t.forEach((e,r)=>{0!==r&&(e.pre=""),t[r+1]&&(e.post="-");});}),this},t.dehyphenate=function(){const e=/(-|–|—)/;return this.list.forEach(t=>{t.terms().forEach(t=>{e.test(t.post)&&(t.post=" ");});}),this},t.deHyphenate=t.dehyphenate,t.toQuotations=function(e,t){return e=e||'"',t=t||'"',this.list.forEach(r=>{let a=r.terms();a[0].pre=e+a[0].pre;let n=a[a.length-1];n.post=t+n.post;}),this},t.toQuotation=t.toQuotations,t.toParentheses=function(e,t){return e=e||"(",t=t||")",this.list.forEach(r=>{let a=r.terms();a[0].pre=e+a[0].pre;let n=a[a.length-1];n.post=t+n.post;}),this};})),Rr={join:function(e){this.uncache();let t=this.list[0],r=t.length,a={};for(let r=1;r<this.list.length;r++){const n=this.list[r];a[n.start]=!0;let i=t.lastTerm();e&&(i.post+=e),i.next=n.start,n.terms(0).prev=i.id,t.length+=n.length,t.cache={};}let n=t.length-r;return this.parents().forEach(e=>{e.list.forEach(e=>{let r=e.terms();for(let a=0;a<r.length;a++)if(r[a].id===t.start){e.length+=n;break}e.cache={};}),e.list=e.list.filter(e=>!0!==a[e.start]);}),this.buildFrom([t])}};const Ur=/[,\)"';:\-–—\.…]/,Qr=function(e,t){if(!e.found)return;let r=e.termList();for(let e=0;e<r.length-1;e++){const t=r[e];if(Ur.test(t.post))return}r.forEach(e=>{e.implicit=e.clean;}),r[0].text+=t,r.slice(1).forEach(e=>{e.text="";});for(let e=0;e<r.length-1;e++){const t=r[e];t.post=t.post.replace(/ /,"");}};var Zr={contract:function(){let e=this.not("@hasContraction"),t=e.match("(we|they|you) are");return Qr(t,"'re"),t=e.match("(he|she|they|it|we|you) will"),Qr(t,"'ll"),t=e.match("(he|she|they|it|we) is"),Qr(t,"'s"),t=e.match("#Person is"),Qr(t,"'s"),t=e.match("#Person would"),Qr(t,"'d"),t=e.match("(is|was|had|would|should|could|do|does|have|has|can) not"),Qr(t,"n't"),t=e.match("(i|we|they) have"),Qr(t,"'ve"),t=e.match("(would|should|could) have"),Qr(t,"'ve"),t=e.match("i am"),Qr(t,"'m"),t=e.match("going to"),this}},Xr=Object.assign({},fr,br,yr,kr,Ar,$r,Pr,Er,Hr,Nr,Fr,Gr,Or,Sr,_r,qr,Wr,Rr,Zr);let Yr={};[["terms","."],["hyphenated","@hasHyphen ."],["adjectives","#Adjective"],["hashTags","#HashTag"],["emails","#Email"],["emoji","#Emoji"],["emoticons","#Emoticon"],["atMentions","#AtMention"],["urls","#Url"],["adverbs","#Adverb"],["pronouns","#Pronoun"],["conjunctions","#Conjunction"],["prepositions","#Preposition"]].forEach(e=>{Yr[e[0]]=function(t){let r=this.match(e[1]);return "number"==typeof t&&(r=r.get(t)),r};}),Yr.emojis=Yr.emoji,Yr.atmentions=Yr.atMentions,Yr.words=Yr.terms,Yr.phoneNumbers=function(e){let t=this.splitAfter("@hasComma");return t=t.match("#PhoneNumber+"),"number"==typeof e&&(t=t.get(e)),t},Yr.money=function(e){let t=this.match("#Money #Currency?");return "number"==typeof e&&(t=t.get(e)),t},Yr.places=function(e){let t=this.match("(#City && @hasComma) (#Region|#Country)"),r=this.not(t).splitAfter("@hasComma");return r=r.concat(t),r.sort("index"),r=r.match("#Place+"),"number"==typeof e&&(r=r.get(e)),r},Yr.organizations=function(e){let t=this.clauses();return t=t.match("#Organization+"),"number"==typeof e&&(t=t.get(e)),t},Yr.entities=function(e){let t=this.clauses(),r=t.people();r=r.concat(t.places()),r=r.concat(t.organizations());return r=r.not(["someone","man","woman","mother","brother","sister","father"]),r.sort("sequence"),"number"==typeof e&&(r=r.get(e)),r},Yr.things=Yr.entities,Yr.topics=Yr.entities;var ea=Yr;const ta=/^(under|over)-?/,ra=function(e,t,r){let a=r.words,n=e[t].reduced+" "+e[t+1].reduced;return void 0!==a[n]&&!0===a.hasOwnProperty(n)?(e[t].tag(a[n],"lexicon-two",r),e[t+1].tag(a[n],"lexicon-two",r),1):t+2<e.length&&(n+=" "+e[t+2].reduced,void 0!==a[n]&&!0===a.hasOwnProperty(n))?(e[t].tag(a[n],"lexicon-three",r),e[t+1].tag(a[n],"lexicon-three",r),e[t+2].tag(a[n],"lexicon-three",r),2):t+3<e.length&&(n+=" "+e[t+3].reduced,void 0!==a[n]&&!0===a.hasOwnProperty(n))?(e[t].tag(a[n],"lexicon-four",r),e[t+1].tag(a[n],"lexicon-four",r),e[t+2].tag(a[n],"lexicon-four",r),e[t+3].tag(a[n],"lexicon-four",r),3):0};var aa=function(e,t){let r=t.words,a=t.hasCompound;for(let n=0;n<e.length;n+=1){let i=e[n].clean;if(!0===a[i]&&n+1<e.length){let r=ra(e,n,t);if(r>0){n+=r;continue}}if(void 0===r[i]||!0!==r.hasOwnProperty(i))if(i===e[n].reduced||!0!==r.hasOwnProperty(e[n].reduced)){if(!0===ta.test(i)){let a=i.replace(ta,"");!0===r.hasOwnProperty(a)&&e[n].tag(r[a],"noprefix-lexicon",t);}}else e[n].tag(r[e[n].reduced],"lexicon",t);else e[n].tag(r[i],"lexicon",t);}return e};const na=/[\'‘’‛‵′`´]$/,ia=/^(m|k|cm|km|m)\/(s|h|hr)$/;var oa=[[/^[\w\.]+@[\w\.]+\.[a-z]{2,3}$/,"Email"],[/^#[a-z0-9_\u00C0-\u00FF]{2,}$/,"HashTag"],[/^@1?[0-9](am|pm)$/i,"Time"],[/^@1?[0-9]:[0-9]{2}(am|pm)?$/i,"Time"],[/^@\w{2,}$/,"AtMention"],[/^(https?:\/\/|www\.)+\w+\.[a-z]{2,3}/,"Url"],[/^[a-z0-9./].+\.(com|net|gov|org|ly|edu|info|biz|dev|ru|jp|de|in|uk|br|io|ai)/,"Url"],[/^'[0-9]{2}$/,"Year"],[/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$/,"Time"],[/^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$/i,"Time"],[/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$/i,"Time"],[/^[PMCE]ST$/,"Time"],[/^utc ?[+-]?[0-9]+?$/,"Time"],[/^[a-z0-9]*? o\'?clock$/,"Time"],[/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/i,"Date"],[/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$/,"Date"],[/^[0-9]{1,4}\/[0-9]{1,2}\/[0-9]{1,4}$/,"Date"],[/^[0-9]{1,4}-[a-z]{2,9}-[0-9]{1,4}$/i,"Date"],[/^gmt[+-][0-9][0-9]?$/i,"Timezone"],[/^utc[+-][0-9][0-9]?$/i,"Timezone"],[/^ma?c\'.*/,"LastName"],[/^o\'[drlkn].*/,"LastName"],[/^ma?cd[aeiou]/,"LastName"],[/^(lol)+[sz]$/,"Expression"],[/^woo+a*?h?$/,"Expression"],[/^(un|de|re)\\-[a-z\u00C0-\u00FF]{2}/,"Verb"],[/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/,"Date"],[/^[0-9]{3}-[0-9]{4}$/,"PhoneNumber"],[/^(\+?[0-9][ -])?[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$/,"PhoneNumber"],[/^[-+]?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6][-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(k|m|b|bn)?\+?$/,["Money","Value"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]\+?$/,["Money","Value"]],[/^[-+]?[\$£]?[0-9]([0-9,.])+?(usd|eur|jpy|gbp|cad|aud|chf|cny|hkd|nzd|kr|rub)$/i,["Money","Value"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?\+?$/,["Cardinal","NumericValue"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(st|nd|rd|r?th)$/,["Ordinal","NumericValue"]],[/^\.[0-9]+\+?$/,["Cardinal","NumericValue"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?%\+?$/,["Percent","Cardinal","NumericValue"]],[/^\.[0-9]+%$/,["Percent","Cardinal","NumericValue"]],[/^[0-9]{1,4}\/[0-9]{1,4}(st|nd|rd|th)?s?$/,["Fraction","NumericValue"]],[/^[0-9.]{1,3}[a-z]{0,2}[-–—][0-9]{1,3}[a-z]{0,2}$/,["Value","NumberRange"]],[/^[0-9][0-9]?(:[0-9][0-9])?(am|pm)? ?[-–—] ?[0-9][0-9]?(:[0-9][0-9])?(am|pm)?$/,["Time","NumberRange"]],[/^[0-9.]+([a-z]{1,4})$/,"Value"]];const sa=/^[IVXLCDM]{2,}$/,la=/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;const ua="Adjective",ca="Infinitive",ha="PresentTense",da="Singular",ga="PastTense",pa="Expression";var ma={a:[[/.[aeiou]na$/,"Noun"],[/.[oau][wvl]ska$/,"LastName"],[/.[^aeiou]ica$/,da],[/^([hyj]a)+$/,pa]],c:[[/.[^aeiou]ic$/,ua]],d:[[/[aeiou](pp|ll|ss|ff|gg|tt|rr|bb|nn|mm)ed$/,ga],[/.[aeo]{2}[bdgmnprvz]ed$/,ga],[/.[aeiou][sg]hed$/,ga],[/.[aeiou]red$/,ga],[/.[aeiou]r?ried$/,ga],[/.[bcdgtr]led$/,ga],[/.[aoui]f?led$/,ga],[/.[iao]sed$/,ga],[/[aeiou]n?[cs]ed$/,ga],[/[aeiou][rl]?[mnf]ed$/,ga],[/[aeiou][ns]?c?ked$/,ga],[/[aeiou][nl]?ged$/,ga],[/.[tdbwxz]ed$/,ga],[/[^aeiou][aeiou][tvx]ed$/,ga],[/.[cdlmnprstv]ied$/,ga],[/[^aeiou]ard$/,da],[/[aeiou][^aeiou]id$/,ua],[/.[vrl]id$/,ua]],e:[[/.[lnr]ize$/,ca],[/.[^aeiou]ise$/,ca],[/.[aeiou]te$/,ca],[/.[^aeiou][ai]ble$/,ua],[/.[^aeiou]eable$/,ua],[/.[ts]ive$/,ua],[/[a-z]-like$/,ua]],h:[[/.[^aeiouf]ish$/,ua],[/.v[iy]ch$/,"LastName"],[/^ug?h+$/,pa],[/^uh[ -]?oh$/,pa],[/[a-z]-ish$/,ua]],i:[[/.[oau][wvl]ski$/,"LastName"]],k:[[/^(k){2}$/,pa]],l:[[/.[gl]ial$/,ua],[/.[^aeiou]ful$/,ua],[/.[nrtumcd]al$/,ua],[/.[^aeiou][ei]al$/,ua]],m:[[/.[^aeiou]ium$/,da],[/[^aeiou]ism$/,da],[/^h*u*m+$/,pa],[/^\d+ ?[ap]m$/,"Date"]],n:[[/.[lsrnpb]ian$/,ua],[/[^aeiou]ician$/,"Actor"],[/[aeiou][ktrp]in$/,"Gerund"]],o:[[/^no+$/,pa],[/^(yo)+$/,pa],[/^woo+[pt]?$/,pa]],r:[[/.[bdfklmst]ler$/,"Noun"],[/[aeiou][pns]er$/,da],[/[^i]fer$/,ca],[/.[^aeiou][ao]pher$/,"Actor"],[/.[lk]er$/,"Noun"],[/.ier$/,"Comparative"]],t:[[/.[di]est$/,"Superlative"],[/.[icldtgrv]ent$/,ua],[/[aeiou].*ist$/,ua],[/^[a-z]et$/,"Verb"]],s:[[/.[^aeiou]ises$/,ha],[/.[rln]ates$/,ha],[/.[^z]ens$/,"Verb"],[/.[lstrn]us$/,da],[/.[aeiou]sks$/,ha],[/.[aeiou]kes$/,ha],[/[aeiou][^aeiou]is$/,da],[/[a-z]\'s$/,"Noun"],[/^yes+$/,pa]],v:[[/.[^aeiou][ai][kln]ov$/,"LastName"]],y:[[/.[cts]hy$/,ua],[/.[st]ty$/,ua],[/.[gk]y$/,ua],[/.[tnl]ary$/,ua],[/.[oe]ry$/,da],[/[rdntkbhs]ly$/,"Adverb"],[/...lly$/,"Adverb"],[/[bszmp]{2}y$/,ua],[/.(gg|bb|zz)ly$/,ua],[/.[ai]my$/,ua],[/[ea]{2}zy$/,ua],[/.[^aeiou]ity$/,da]]};const fa="Adjective",ba="Infinitive",va="PresentTense",ya="Singular",wa="PastTense",ka="Adverb",Aa="Plural",Da="Verb",$a="LastName";var Pa=[null,null,{ea:ya,ia:"Noun",ic:fa,ly:ka,"'n":Da,"'t":Da},{oed:wa,ued:wa,xed:wa," so":ka,"'ll":"Modal","'re":"Copula",azy:fa,eer:"Noun",end:Da,ped:wa,ffy:fa,ify:ba,ing:"Gerund",ize:ba,lar:fa,mum:fa,nes:va,nny:fa,oid:fa,ous:fa,que:fa,rol:ya,sis:ya,zes:va},{amed:wa,aped:wa,ched:wa,lked:wa,nded:wa,cted:wa,dged:wa,akis:$a,cede:ba,chuk:$a,czyk:$a,ects:va,ends:Da,enko:$a,ette:ya,fies:va,fore:ka,gate:ba,gone:fa,ices:Aa,ints:Aa,ines:Aa,ions:Aa,less:ka,llen:fa,made:fa,nsen:$a,oses:va,ould:"Modal",some:fa,sson:$a,tage:ba,teen:"Value",tion:ya,tive:fa,tors:"Noun",vice:ya},{tized:wa,urned:wa,eased:wa,ances:Aa,bound:fa,ettes:Aa,fully:ka,ishes:va,ities:Aa,marek:$a,nssen:$a,ology:"Noun",ports:Aa,rough:fa,tches:va,tieth:"Ordinal",tures:Aa,wards:ka,where:ka},{auskas:$a,keeper:"Actor",logist:"Actor",teenth:"Value"},{opoulos:$a,borough:"Place",sdottir:$a}];var Ea={":(":!0,":)":!0,":P":!0,":p":!0,":O":!0,":3":!0,":|":!0,":/":!0,":\\":!0,":$":!0,":*":!0,":@":!0,":-(":!0,":-)":!0,":-P":!0,":-p":!0,":-O":!0,":-3":!0,":-|":!0,":-/":!0,":-\\":!0,":-$":!0,":-*":!0,":-@":!0,":^(":!0,":^)":!0,":^P":!0,":^p":!0,":^O":!0,":^3":!0,":^|":!0,":^/":!0,":^\\":!0,":^$":!0,":^*":!0,":^@":!0,"):":!0,"(:":!0,"$:":!0,"*:":!0,")-:":!0,"(-:":!0,"$-:":!0,"*-:":!0,")^:":!0,"(^:":!0,"$^:":!0,"*^:":!0,"<3":!0,"</3":!0,"<\\3":!0};const Ha=/^(\u00a9|\u00ae|[\u2319-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;const ja={lexicon:aa,punctuation:function(e,t,r){let a=e[t];if(na.test(a.text)&&!na.test(a.pre)&&!na.test(a.post)&&a.clean.length>2){let e=a.clean[a.clean.length-2];if("s"===e)return void a.tag(["Possessive","Noun"],"end-tick",r);"n"===e&&a.tag(["Gerund"],"chillin",r);}ia.test(a.text)&&a.tag("Unit","per-sec",r);},regex:function(e,t){let r=e.text;for(let a=0;a<oa.length;a+=1)if(!0===oa[a][0].test(r)){e.tagSafe(oa[a][1],"prefix #"+a,t);break}e.text.length>=2&&sa.test(r)&&la.test(r)&&e.tag("RomanNumeral","xvii",t);},suffix:function(e,t){!function(e,t){const r=e.clean.length;let a=7;r<=a&&(a=r-1);for(let n=a;n>1;n-=1){let a=e.clean.substr(r-n,r);if(!0===Pa[a.length].hasOwnProperty(a)){let r=Pa[a.length][a];e.tagSafe(r,"suffix -"+a,t);break}}}(e,t),function(e,t){let r=e.clean,a=r[r.length-1];if(!0===ma.hasOwnProperty(a)){let n=ma[a];for(let i=0;i<n.length;i+=1)if(!0===n[i][0].test(r)){e.tagSafe(n[i][1],`endReg ${a} #${i}`,t);break}}}(e,t);},emoji:(e,t)=>{let r=e.pre+e.text+e.post;var a;r=r.trim(),r=r.replace(/[.!?,]$/,""),!0===(e=>!(":"!==e.charAt(0)||null===e.match(/:.?$/)||e.match(" ")||e.length>35))(r)&&(e.tag("Emoji","comma-emoji",t),e.text=r,e.pre=e.pre.replace(":",""),e.post=e.post.replace(":","")),e.text.match(Ha)&&(e.tag("Emoji","unicode-emoji",t),e.text=r),!0===(a=(a=r).replace(/^[:;]/,":"),Ea.hasOwnProperty(a))&&(e.tag("Emoticon","emoticon-emoji",t),e.text=r);}};var Na=function(e,t){let r=e.world;ja.lexicon(t,r);for(let e=0;e<t.length;e+=1){let a=t[e];ja.punctuation(t,e,r),ja.regex(a,r),ja.suffix(a,r),ja.emoji(a,r);}return e};var xa={beforeThisWord:{there:"Verb",me:"Verb",man:"Adjective",only:"Verb",him:"Verb",were:"Noun",took:"Noun",himself:"Verb",went:"Noun",who:"Noun",jr:"Person"},afterThisWord:{i:"Verb",first:"Noun",it:"Verb",there:"Verb",not:"Verb",because:"Noun",if:"Noun",but:"Noun",who:"Verb",this:"Noun",his:"Noun",when:"Noun",you:"Verb",very:"Adjective",old:"Noun",never:"Verb",before:"Noun"},beforeThisPos:{Copula:"Noun",PastTense:"Noun",Conjunction:"Noun",Modal:"Noun",Pluperfect:"Noun",PerfectTense:"Verb"},afterThisPos:{Adjective:"Noun",Possessive:"Noun",Determiner:"Noun",Adverb:"Verb",Pronoun:"Verb",Value:"Noun",Ordinal:"Noun",Modal:"Verb",Superlative:"Noun",Demonym:"Noun",Honorific:"Person"}};const Fa=Object.keys(xa.afterThisPos),Ca=Object.keys(xa.beforeThisPos);var Ba=function(e,t){for(let r=0;r<e.length;r+=1){let a=e[r];if(!0===a.isKnown())continue;let n=e[r-1];if(n){if(!0===xa.afterThisWord.hasOwnProperty(n.clean)){let e=xa.afterThisWord[n.clean];a.tag(e,"after-"+n.clean,t);continue}let e=Fa.find(e=>n.tags[e]);if(void 0!==e){let r=xa.afterThisPos[e];a.tag(r,"after-"+e,t);continue}}let i=e[r+1];if(i){if(!0===xa.beforeThisWord.hasOwnProperty(i.clean)){let e=xa.beforeThisWord[i.clean];a.tag(e,"before-"+i.clean,t);continue}let e=Ca.find(e=>i.tags[e]);if(void 0!==e){let r=xa.beforeThisPos[e];a.tag(r,"before-"+e,t);continue}}}};const Ga=/^[A-Z][a-z'\u00C0-\u00FF]/,za=/[0-9]/;var Ia=function(e){let t=e.world;e.list.forEach(e=>{let r=e.terms();for(let e=1;e<r.length;e++){const a=r[e];!0===Ga.test(a.text)&&!1===za.test(a.text)&&void 0===a.tags.Date&&a.tag("ProperNoun","titlecase-noun",t);}});};const Oa=/^(re|un)-?[a-z\u00C0-\u00FF]/,Ta=/^(re|un)-?/;var Va=function(e,t){let r=t.words;e.forEach(e=>{if(!0!==e.isKnown()&&!0===Oa.test(e.clean)){let a=e.clean.replace(Ta,"");a&&a.length>3&&void 0!==r[a]&&!0===r.hasOwnProperty(a)&&e.tag(r[a],"stem-"+a,t);}});};var Ma={isSingular:[/(ax|test)is$/i,/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,/(octop|vir)i$/i,/(rl)f$/i,/(alias|status)$/i,/(bu)s$/i,/(al|ad|at|er|et|ed|ad)o$/i,/(ti)um$/i,/(ti)a$/i,/sis$/i,/(?:(^f)fe|(lr)f)$/i,/hive$/i,/s[aeiou]+ns$/i,/(^aeiouy|qu)y$/i,/(x|ch|ss|sh|z)$/i,/(matr|vert|ind|cort)(ix|ex)$/i,/(m|l)ouse$/i,/(m|l)ice$/i,/(antenn|formul|nebul|vertebr|vit)a$/i,/.sis$/i,/^(?!talis|.*hu)(.*)man$/i],isPlural:[/(^v)ies$/i,/ises$/i,/ives$/i,/(antenn|formul|nebul|vertebr|vit)ae$/i,/(octop|vir|radi|nucle|fung|cact|stimul)i$/i,/(buffal|tomat|tornad)oes$/i,/(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,/(vert|ind|cort)ices$/i,/(matr|append)ices$/i,/(x|ch|ss|sh|s|z|o)es$/i,/is$/i,/men$/i,/news$/i,/.tia$/i,/(^f)ves$/i,/(lr)ves$/i,/(^aeiouy|qu)ies$/i,/(m|l)ice$/i,/(cris|ax|test)es$/i,/(alias|status)es$/i,/ics$/i]};const Ja=["Uncountable","Pronoun","Place","Value","Person","Month","WeekDay","Holiday"],La=[/ss$/,/sis$/,/[^aeiou][uo]s$/,/'s$/],Sa=[/i$/,/ae$/];var _a=function(e,t){if(e.tags.Noun&&!e.tags.Acronym){let r=e.clean;if(e.tags.Singular||e.tags.Plural)return;if(r.length<=3)return void e.tag("Singular","short-singular",t);if(Ja.find(t=>e.tags[t]))return;if(Ma.isPlural.find(e=>e.test(r)))return void e.tag("Plural","plural-rules",t);if(Ma.isSingular.find(e=>e.test(r)))return void e.tag("Singular","singular-rules",t);if(!0===/s$/.test(r)){if(La.find(e=>e.test(r)))return;return void e.tag("Plural","plural-fallback",t)}if(Sa.find(e=>e.test(r)))return;e.tag("Singular","singular-fallback",t);}};var Ka=["academy","administration","agence","agences","agencies","agency","airlines","airways","army","assoc","associates","association","assurance","authority","autorite","aviation","bank","banque","board","boys","brands","brewery","brotherhood","brothers","building society","bureau","cafe","caisse","capital","care","cathedral","center","central bank","centre","chemicals","choir","chronicle","church","circus","clinic","clinique","club","co","coalition","coffee","collective","college","commission","committee","communications","community","company","comprehensive","computers","confederation","conference","conseil","consulting","containers","corporation","corps","corp","council","crew","daily news","data","departement","department","department store","departments","design","development","directorate","division","drilling","education","eglise","electric","electricity","energy","ensemble","enterprise","enterprises","entertainment","estate","etat","evening news","faculty","federation","financial","fm","foundation","fund","gas","gazette","girls","government","group","guild","health authority","herald","holdings","hospital","hotel","hotels","inc","industries","institut","institute","institute of technology","institutes","insurance","international","interstate","investment","investments","investors","journal","laboratory","labs","liberation army","limited","local authority","local health authority","machines","magazine","management","marine","marketing","markets","media","memorial","mercantile exchange","ministere","ministry","military","mobile","motor","motors","musee","museum","news","news service","observatory","office","oil","optical","orchestra","organization","partners","partnership","people's party","petrol","petroleum","pharmacare","pharmaceutical","pharmaceuticals","pizza","plc","police","polytechnic","post","power","press","productions","quartet","radio","regional authority","regional health authority","reserve","resources","restaurant","restaurants","savings","school","securities","service","services","social club","societe","society","sons","standard","state police","state university","stock exchange","subcommittee","syndicat","systems","telecommunications","telegraph","television","times","tribunal","tv","union","university","utilities","workers"].reduce((function(e,t){return e[t]="Noun",e}),{});const qa=function(e){return !!e.tags.Noun&&(!(e.tags.Pronoun||e.tags.Comma||e.tags.Possessive)&&!!(e.tags.Organization||e.tags.Acronym||e.tags.Place||e.titleCase()))};const Wa=/^[A-Z]('s|,)?$/,Ra=/([A-Z]\.){2}[A-Z]?/i,Ua={I:!0,A:!0};const Qa={neighbours:Ba,case:Ia,stem:Va,plural:_a,organizations:function(e,t){for(let r=0;r<e.length;r+=1){let a=e[r];if(void 0!==Ka[a.clean]&&!0===Ka.hasOwnProperty(a.clean)){let n=e[r-1];if(void 0!==n&&!0===qa(n)){n.tagSafe("Organization","org-word-1",t),a.tagSafe("Organization","org-word-2",t);continue}let i=e[r+1];if(void 0!==i&&"of"===i.clean&&e[r+2]&&qa(e[r+2])){a.tagSafe("Organization","org-of-word-1",t),i.tagSafe("Organization","org-of-word-2",t),e[r+2].tagSafe("Organization","org-of-word-3",t);continue}}}},acronyms:function(e,t){e.forEach(e=>{!0!==e.tags.RomanNumeral&&(!0===Ra.test(e.text)&&e.tag("Acronym","period-acronym",t),e.isUpperCase()&&function(e,t){let r=e.reduced;return !!e.tags.Acronym||!t.words[r]&&!(r.length>5)&&e.isAcronym()}(e,t)?(e.tag("Acronym","acronym-step",t),e.tag("Noun","acronym-infer",t)):!Ua.hasOwnProperty(e.text)&&Wa.test(e.text)&&(e.tag("Acronym","one-letter-acronym",t),e.tag("Noun","one-letter-infer",t)),e.tags.Organization&&e.text.length<=3&&e.tag("Acronym","acronym-org",t),e.tags.Organization&&e.isUpperCase()&&e.text.length<=6&&e.tag("Acronym","acronym-org-case",t));});}};var Za=function(e,t){let r=e.world;return Qa.neighbours(t,r),Qa.case(e),Qa.stem(t,r),t.forEach(t=>{!1===t.isKnown()&&t.tag("Noun","noun-fallback",e.world);}),Qa.organizations(t,r),Qa.acronyms(t,r),t.forEach(t=>{Qa.plural(t,e.world);}),e};const Xa=/n't$/,Ya={"won't":["will","not"],wont:["will","not"],"can't":["can","not"],cant:["can","not"],cannot:["can","not"],"shan't":["should","not"],dont:["do","not"],dun:["do","not"]};var en=function(e,t){if(!0===Ya.hasOwnProperty(e.clean))return Ya[e.clean];if("ain't"===e.clean||"aint"===e.clean)return function(e,t){let r=t.terms(),a=r.indexOf(e),n=r.slice(0,a).find(e=>e.tags.Noun);return n&&n.tags.Plural?["are","not"]:["is","not"]}(e,t);if(!0===Xa.test(e.clean)){return [e.clean.replace(Xa,""),"not"]}return null};const tn=/([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i,rn={ll:"will",ve:"have",re:"are",m:"am","n't":"not"};var an=function(e){let t=e.text.match(tn);return null===t?null:rn.hasOwnProperty(t[2])?[t[1],rn[t[2]]]:null};const nn={wanna:["want","to"],gonna:["going","to"],im:["i","am"],alot:["a","lot"],ive:["i","have"],imma:["I","will"],"where'd":["where","did"],whered:["where","did"],"when'd":["when","did"],whend:["when","did"],howd:["how","did"],whatd:["what","did"],dunno:["do","not","know"],brb:["be","right","back"],gtg:["got","to","go"],irl:["in","real","life"],tbh:["to","be","honest"],imo:["in","my","opinion"],til:["today","i","learned"],rn:["right","now"],twas:["it","was"],"@":["at"]};var on=function(e){return nn.hasOwnProperty(e.clean)?nn[e.clean]:null};const sn=/([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]s$/i,ln={that:!0,there:!0},un={here:!0,there:!0,everywhere:!0};var cn=function(e,t,r){let a=e.text.match(sn);if(null!==a){if(!0===((e,t)=>{if(e.tags.Possessive)return !0;if(e.tags.Pronoun||e.tags.QuestionWord)return !1;if(ln.hasOwnProperty(e.reduced))return !1;let r=t.get(e.next);if(!r)return !0;if(r.tags.Verb)return !!r.tags.Infinitive||!!r.tags.PresentTense;if(r.tags.Noun)return !0!==un.hasOwnProperty(r.reduced);let a=t.get(r.next);return !(!a||!a.tags.Noun||a.tags.Pronoun)||(r.tags.Adjective||r.tags.Adverb||r.tags.Verb,!1)})(e,t.pool))return e.tag("#Possessive","isPossessive",r),null;if(null!==a)return ((e,t)=>{let r=t.terms(),a=r.indexOf(e);return r.slice(a+1,a+3).find(e=>e.tags.PastTense)})(e,t)?[a[1],"has"]:[a[1],"is"]}return null};const hn=/[a-z\u00C0-\u00FF]'d$/,dn={how:!0,what:!0};var gn=function(e,t){if(hn.test(e.clean)){let r=e.clean.replace(/'d$/,""),a=t.terms(),n=a.indexOf(e),i=a.slice(n+1,n+4);for(let e=0;e<i.length;e++){let t=i[e];if(t.tags.Verb)return t.tags.PastTense?[r,"had"]:!0===dn[r]?[r,"did"]:[r,"would"]}return [r,"would"]}return null};const pn=/^([0-9.]{1,3}[a-z]{0,2}) ?[-–—] ?([0-9]{1,3}[a-z]{0,2})$/i,mn=/^([0-9][0-9]?(:[0-9][0-9])?(am|pm)?) ?[-–—] ?([0-9][0-9]?(:[0-9][0-9])?(am|pm)?)$/i;var fn=function(e){if(!0===e.tags.PhoneNumber)return null;let t=e.text.match(pn);return null!==t?[t[1],"to",t[2]]:(t=e.text.match(mn),null!==t?[t[1],"to",t[4]]:null)};const bn=/^(l|c|d|j|m|n|qu|s|t)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z\u00C0-\u00FF]+)$/i,vn={l:"le",c:"ce",d:"de",j:"je",m:"me",n:"ne",qu:"que",s:"se",t:"tu"};var yn=function(e){let t=e.text.match(bn);if(null===t||!1===vn.hasOwnProperty(t[1]))return null;let r=[vn[t[1]],t[2]];return r[0]&&r[1]?r:null};const wn=/^[0-9]+$/,kn=/^[0-9]+(st|nd|rd|th)$/,An=/^[0-9:]+(am|pm)?$/,Dn=function(e,t){let r=ot$1(e.join(" "),t.world,t.pool())[0],a=r.terms();aa(a,t.world);let n=a[0];return kn.test(n.text)?(a[0].tag("Ordinal","ord-range",t.world),a[2].tag("Ordinal","ord-range",t.world)):wn.test(n.text)?(a[0].tag("Cardinal","num-range",t.world),a[2].tag("Cardinal","num-range",t.world)):An.test(n.text)&&(a[0].tag("Time","time-range",t.world),a[1].tag("Date","time-range",t.world),a[2].tag("Time","time-range",t.world)),a.forEach(e=>{e.implicit=e.text,e.text="",e.clean="",e.pre="",e.post="",0===Object.keys(e.tags).length&&(e.tags.Noun=!0);}),r};var $n=function(e){let t=e.world;return e.list.forEach(r=>{let a=r.terms();for(let n=0;n<a.length;n+=1){let i=a[n],o=en(i,r);if(o=o||an(i),o=o||on(i),o=o||cn(i,r,t),o=o||gn(i,r),o=o||fn(i),o=o||yn(i),null!==o){let t=Dn(o,e);!0===r.has("#NumberRange")&&e.buildFrom([t]).tag("NumberRange"),t.terms(0).text=i.text,r.buildFrom(i.id,1,e.pool()).replace(t,e,!0);}}}),e};const Pn=function(e,t){let r=e._cache.tags[t]||[];return r=r.map(t=>e.list[t]),e.buildFrom(r)};var En=function(e){let t=Pn(e,"Infinitive");return t.found&&(t=t.ifNo("@hasQuestionMark"),t=t.ifNo("(i|we|they)"),t.not("will be").match("[#Infinitive] (#Determiner|#Possessive) #Noun").notIf("(our|their)").match("#Infinitive").tag("Imperative","shut-the"),t.match("^[#Infinitive] #Adverb?$",0).tag("Imperative","go-fast"),t.match("[(do && #Infinitive)] not? #Verb",0).tag("Imperative","do-not"),t.match("[#Infinitive] (it|some) (#Comparative|#Preposition|please|now|again)",0).tag("Imperative","do-it")),t=function(e,t){let r=e._cache.words[t]||[];return r=r.map(t=>e.list[t]),e.buildFrom(r)}(e,"like"),t.match("#Adverb like").notIf("(really|generally|typically|usually|sometimes|often|just) [like]").tag("Adverb","adverb-like"),t=Pn(e,"Adjective"),t.match("#Determiner #Adjective$").notIf("(#Comparative|#Superlative)").terms(1).tag("Noun","the-adj-1"),t=Pn(e,"FirstName"),t.match("#FirstName (#Noun|@titleCase)").ifNo("^#Possessive").ifNo("(#Pronoun|#Plural)").ifNo("@hasComma .").lastTerm().tag("#LastName","firstname-noun"),t=Pn(e,"Value"),t=t.match("#Value #PresentTense").ifNo("#Copula"),t.found&&(!0===t.has("(one|1)")?t.terms(1).tag("Singular","one-presentTense"):t.terms(1).tag("Plural","value-presentTense")),e.match("^(well|so|okay)").tag("Expression","well-"),e.match("#Value [of a second]",0).unTag("Value","of-a-second"),e.match("#Value [seconds]",0).unTag("Value","30-seconds").tag(["Unit","Plural"]),t=Pn(e,"Gerund"),t.match("(be|been) (#Adverb|not)+? #Gerund").not("#Verb$").tag("Auxiliary","be-walking"),e.match("(try|use|attempt|build|make) #Verb").ifNo("(@hasComma|#Negative|#PhrasalVerb|#Copula|will|be)").lastTerm().tag("#Noun","do-verb"),t=Pn(e,"Possessive"),t=t.match("#Possessive [#Infinitive]",0),t.lookBehind("(let|made|make|force|ask)").found||t.tag("Noun","her-match"),e};var Hn=function(e){let t={};for(let r=0;r<e.length;r++)t[e[r]]=!0;return Object.keys(t)};var jn=[{match:"too much",tag:"Adverb Adjective",reason:"bit-4"},{match:"u r",tag:"Pronoun Copula",reason:"u r"},{match:"#Copula (pretty|dead|full|well|sure) (#Adjective|#Noun)",tag:"#Copula #Adverb #Adjective",reason:"sometimes-adverb"},{match:"(#Pronoun|#Person) (had|#Adverb)? [better] #PresentTense",group:0,tag:"Modal",reason:"i-better"},{match:"[#Gerund] #Adverb? not? #Copula",group:0,tag:"Activity",reason:"gerund-copula"},{match:"[#Gerund] #Modal",group:0,tag:"Activity",reason:"gerund-modal"},{match:"holy (shit|fuck|hell)",tag:"Expression",reason:"swears-expression"},{match:"#Noun #Actor",tag:"Actor",reason:"thing-doer"},{match:"#Conjunction [u]",group:0,tag:"Pronoun",reason:"u-pronoun-2"},{match:"[u] #Verb",group:0,tag:"Pronoun",reason:"u-pronoun-1"},{match:"#Noun [(who|whom)]",group:0,tag:"Determiner",reason:"captain-who"},{match:"a bit much",tag:"Determiner Adverb Adjective",reason:"bit-3"},{match:"#Verb #Adverb? #Noun [(that|which)]",group:0,tag:"Preposition",reason:"that-prep"},{match:"@hasComma [which] (#Pronoun|#Verb)",group:0,tag:"Preposition",reason:"which-copula"},{match:"#Copula just [like]",group:0,tag:"Preposition",reason:"like-preposition"},{match:"#Noun [like] #Noun",group:0,tag:"Preposition",reason:"noun-like"},{match:"[had] #Noun+ #PastTense",group:0,tag:"Condition",reason:"had-he"},{match:"[were] #Noun+ to #Infinitive",group:0,tag:"Condition",reason:"were-he"},{match:"^how",tag:"QuestionWord",reason:"how-question"},{match:"[how] (#Determiner|#Copula|#Modal|#PastTense)",group:0,tag:"QuestionWord",reason:"how-is"},{match:"^which",tag:"QuestionWord",reason:"which-question"},{match:"[so] #Noun",group:0,tag:"Conjunction",reason:"so-conj"},{match:"[(who|what|where|why|how|when)] #Noun #Copula #Adverb? (#Verb|#Adjective)",group:0,tag:"Conjunction",reason:"how-he-is-x"}],Nn={adverbAdjective:["dark","bright","flat","light","soft","pale","dead","dim","faux","little","wee","sheer","most","near","good","extra","all"],personDate:["april","june","may","jan","august","eve"],personMonth:["january","april","may","june","jan","sep"],personAdjective:["misty","rusty","dusty","rich","randy","young"],personVerb:["pat","wade","ollie","will","rob","buck","bob","mark","jack"],personPlace:["darwin","hamilton","paris","alexandria","houston","kobe","santiago","salvador","sydney","victoria"],personNoun:["art","baker","berg","bill","brown","charity","chin","christian","cliff","daisy","dawn","dick","dolly","faith","franco","gene","green","hall","hill","holly","hope","jean","jewel","joy","kelvin","king","kitty","lane","lily","melody","mercedes","miles","olive","penny","ray","reed","robin","rod","rose","sky","summer","trinity","van","viola","violet","wang","white"]};const xn=`(${Nn.personDate.join("|")})`;var Fn=[{match:"#Holiday (day|eve)",tag:"Holiday",reason:"holiday-day"},{match:"[sun] the #Ordinal",tag:"WeekDay",reason:"sun-the-5th"},{match:"[sun] #Date",group:0,tag:"WeekDay",reason:"sun-feb"},{match:"#Date (on|this|next|last|during)? [sun]",group:0,tag:"WeekDay",reason:"1pm-sun"},{match:"(in|by|before|during|on|until|after|of|within|all) [sat]",group:0,tag:"WeekDay",reason:"sat"},{match:"(in|by|before|during|on|until|after|of|within|all) [wed]",group:0,tag:"WeekDay",reason:"wed"},{match:"(in|by|before|during|on|until|after|of|within|all) [march]",group:0,tag:"Month",reason:"march"},{match:"[sat] #Date",group:0,tag:"WeekDay",reason:"sat-feb"},{match:"#Preposition [(march|may)]",group:0,tag:"Month",reason:"in-month"},{match:"this [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"next [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"last [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"[(march|may)] the? #Value",group:0,tag:"Month",reason:"march-5th"},{match:"#Value of? [(march|may)]",group:0,tag:"Month",reason:"5th-of-march"},{match:"[(march|may)] .? #Date",group:0,tag:"Month",reason:"march-and-feb"},{match:"#Date .? [(march|may)]",group:0,tag:"Month",reason:"feb-and-march"},{match:"#Adverb [(march|may)]",group:0,tag:"Verb",reason:"quickly-march"},{match:"[(march|may)] #Adverb",group:0,tag:"Verb",reason:"march-quickly"},{match:"#Value of #Month",tag:"Date",reason:"value-of-month"},{match:"#Cardinal #Month",tag:"Date",reason:"cardinal-month"},{match:"#Month #Value to #Value",tag:"Date",reason:"value-to-value"},{match:"#Month the #Value",tag:"Date",reason:"month-the-value"},{match:"(#WeekDay|#Month) #Value",tag:"Date",reason:"date-value"},{match:"#Value (#WeekDay|#Month)",tag:"Date",reason:"value-date"},{match:"(#TextValue && #Date) #TextValue",tag:"Date",reason:"textvalue-date"},{match:`in [${xn}]`,group:0,tag:"Date",reason:"in-june"},{match:`during [${xn}]`,group:0,tag:"Date",reason:"in-june"},{match:`on [${xn}]`,group:0,tag:"Date",reason:"in-june"},{match:`by [${xn}]`,group:0,tag:"Date",reason:"by-june"},{match:`after [${xn}]`,group:0,tag:"Date",reason:"after-june"},{match:`#Date [${xn}]`,group:0,tag:"Date",reason:"in-june"},{match:xn+" #Value",tag:"Date",reason:"june-5th"},{match:xn+" #Date",tag:"Date",reason:"june-5th"},{match:xn+" #ProperNoun",tag:"Person",reason:"june-smith",safe:!0},{match:xn+" #Acronym? (#ProperNoun && !#Month)",tag:"Person",reason:"june-smith-jr"},{match:"#Cardinal [second]",tag:"Unit",reason:"one-second"},{match:"#Month #NumberRange",tag:"Date",reason:"aug 20-21"},{match:"(#Place|#Demonmym|#Time) (standard|daylight|central|mountain)? time",tag:"Timezone",reason:"std-time"},{match:"(eastern|mountain|pacific|central|atlantic) (standard|daylight|summer)? time",tag:"Timezone",reason:"eastern-time"},{match:"#Time [(eastern|mountain|pacific|central|est|pst|gmt)]",group:0,tag:"Timezone",reason:"5pm-central"},{match:"(central|western|eastern) european time",tag:"Timezone",reason:"cet"}];const Cn=`(${Nn.personAdjective.join("|")})`;var Bn=[{match:"[all] #Determiner? #Noun",group:0,tag:"Adjective",reason:"all-noun"},{match:`#Adverb [${Cn}]`,group:0,tag:"Adjective",reason:"really-rich"},{match:Cn+" #Person",tag:"Person",reason:"randy-smith"},{match:Cn+" #Acronym? #ProperNoun",tag:"Person",reason:"rusty-smith"},{match:"#Copula [(just|alone)]$",group:0,tag:"Adjective",reason:"not-adverb"},{match:"#Singular is #Adverb? [#PastTense$]",group:0,tag:"Adjective",reason:"is-filled"},{match:"[#PastTense] #Singular is",group:0,tag:"Adjective",reason:"smoked-poutine"},{match:"[#PastTense] #Plural are",group:0,tag:"Adjective",reason:"baked-onions"},{match:"well [#PastTense]",group:0,tag:"Adjective",reason:"well-made"},{match:"#Copula [fucked up?]",tag:"Adjective",reason:"swears-adjective"},{match:"#Singular (seems|appears) #Adverb? [#PastTense$]",group:0,tag:"Adjective",reason:"seems-filled"},{match:"(a|an) [#Gerund]",group:0,tag:"Adjective",reason:"a|an"},{match:"as [#Gerund] as",group:0,tag:"Adjective",reason:"as-gerund-as"},{match:"more [#Gerund] than",group:0,tag:"Adjective",reason:"more-gerund-than"},{match:"(so|very|extremely) [#Gerund]",group:0,tag:"Adjective",reason:"so-gerund"},{match:"(it|he|she|everything|something) #Adverb? was #Adverb? [#Gerund]",group:0,tag:"Adjective",reason:"it-was-gerund"},{match:"(found|found) it #Adverb? [#Gerund]",group:0,tag:"Adjective",reason:"found-it-gerund"},{match:"a (little|bit|wee) bit? [#Gerund]",group:0,tag:"Adjective",reason:"a-bit-gerund"},{match:"#Copula #Adjective? [(out|in|through)]$",group:0,tag:"Adjective",reason:"still-out"},{match:"^[#Adjective] (the|your) #Noun",group:0,tag:"Infinitive",reason:"shut-the"}],Gn=[{match:"there (are|were) #Adjective? [#PresentTense]",group:0,tag:"Plural",reason:"there-are"},{match:"#Determiner [sun]",group:0,tag:"Singular",reason:"the-sun"},{match:"#Verb (a|an) [#Value]",group:0,tag:"Singular",reason:"did-a-value"},{match:"the [(can|will|may)]",group:0,tag:"Singular",reason:"the can"},{match:"#FirstName #Acronym? (#Possessive && #LastName)",tag:"Possessive",reason:"name-poss"},{match:"#Organization+ #Possessive",tag:"Possessive",reason:"org-possessive"},{match:"#Place+ #Possessive",tag:"Possessive",reason:"place-possessive"},{match:"(#Verb && !#Modal) (all|every|each|most|some|no) [#PresentTense]",group:0,tag:"Noun",reason:"all-presentTense"},{match:"#Determiner [#Adjective] #Copula",group:0,tag:"Noun",reason:"the-adj-is"},{match:"#Adjective [#Adjective] #Copula",group:0,tag:"Noun",reason:"adj-adj-is"},{match:"(had|have|#PastTense) #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"adj-presentTense"},{match:"^#Adjective [#PresentTense]",group:0,tag:"Noun",reason:"start adj-presentTense"},{match:"#Value #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"one-big-reason"},{match:"#PastTense #Adjective+ [#PresentTense]",group:0,tag:"Noun",reason:"won-wide-support"},{match:"(many|few|several|couple) [#PresentTense]",group:0,tag:"Noun",reason:"many-poses"},{match:"#Adverb #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"very-big-dream"},{match:"#Adjective [#Infinitive] #Noun",group:0,tag:"Noun",reason:"good-wait-staff"},{match:"#Adjective #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"adorable-little-store"},{match:"#Preposition #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"of-basic-training"},{match:"#Adjective [#Gerund]",group:0,tag:"Noun",reason:"early-warning"},{match:"#Gerund #Adverb? #Comparative [#PresentTense]",group:0,tag:"Noun",reason:"higher-costs"},{match:"#Infinitive (this|that|the) [#Infinitive]",group:0,tag:"Noun",reason:"do-this-dance"},{match:"(his|her|its) [#Adjective]",group:0,tag:"Noun",reason:"his-fine"},{match:"some [#Verb] #Plural",group:0,tag:"Noun",reason:"determiner6"},{match:"more #Noun",tag:"Noun",reason:"more-noun"},{match:"(#Noun && @hasComma) #Noun (and|or) [#PresentTense]",group:0,tag:"Noun",reason:"noun-list"},{match:"(right|rights) of .",tag:"Noun",reason:"right-of"},{match:"a [bit]",group:0,tag:"Noun",reason:"bit-2"},{match:"#Possessive #Ordinal [#PastTense]",group:0,tag:"Noun",reason:"first-thought"},{match:"#Gerund #Determiner [#Infinitive]",group:0,tag:"Noun",reason:"running-a-show"},{match:"#Determiner #Adverb [#Infinitive]",group:0,tag:"Noun",reason:"the-reason"},{match:"(the|this|those|these) #Adjective [#Verb]",group:0,tag:"Noun",reason:"the-adj-verb"},{match:"(the|this|those|these) #Adverb #Adjective [#Verb]",group:0,tag:"Noun",reason:"determiner4"},{match:"#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)",group:0,tag:"Noun",reason:"the-adj-2"},{match:"(the|this|a|an) [#Infinitive] #Adverb? #Verb",group:0,tag:"Noun",reason:"determiner5"},{match:"#Determiner [#Infinitive] #Noun",group:0,tag:"Noun",reason:"determiner7"},{match:"#Determiner #Adjective #Adjective? [#Infinitive]",group:0,tag:"Noun",reason:"a-nice-inf"},{match:"the [#Verb] #Preposition .",group:0,tag:"Noun",reason:"determiner1"},{match:"#Determiner [#Verb] of",group:0,tag:"Noun",reason:"the-verb-of"},{match:"#Adjective #Noun+ [#Infinitive] #Copula",group:0,tag:"Noun",reason:"career-move"},{match:"#Determiner #Noun of [#Verb]",group:0,tag:"Noun",reason:"noun-of-noun"},{match:"#Determiner [(western|eastern|northern|southern|central)] #Noun",group:0,tag:"Noun",reason:"western-line"},{match:"#Possessive [#Gerund]",group:0,tag:"Noun",reason:"her-polling"},{match:"(his|her|its) [#PresentTense]",group:0,tag:"Noun",reason:"its-polling"},{match:"(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun",group:0,tag:"Noun",reason:"technical-noun"},{match:"(the|those|these|a|an) [#Participle] #Noun",group:0,tag:"Adjective",reason:"blown-motor"},{match:"(the|those|these|a|an) #Adjective? [#Infinitive]",group:0,tag:"Noun",reason:"det-inf"},{match:"(the|those|these|a|an) #Adjective? [#PresentTense]",group:0,tag:"Noun",reason:"det-pres"},{match:"(the|those|these|a|an) #Adjective? [#PastTense]",group:0,tag:"Noun",reason:"det-past"},{match:"(this|that) [#Gerund]",group:0,tag:"Noun",reason:"this-gerund"},{match:"at some [#Infinitive]",group:0,tag:"Noun",reason:"at-some-inf"},{match:"(#Noun && @hasHyphen) #Verb",tag:"Noun",reason:"hyphen-verb"},{match:"is no [#Verb]",group:0,tag:"Noun",reason:"is-no-verb"},{match:"[#Verb] than",group:0,tag:"Noun",reason:"correction"},{match:"(go|goes|went) to [#Infinitive]",group:0,tag:"Noun",reason:"goes-to-verb"},{match:"(a|an) #Noun [#Infinitive] (#Preposition|#Noun)",group:0,tag:"Noun",reason:"a-noun-inf"},{match:"(a|an) #Noun [#Infinitive]$",group:0,tag:"Noun",reason:"a-noun-inf2"},{match:"do [so]",group:0,tag:"Noun",reason:"so-noun"},{match:"#Copula [#Infinitive] #Noun",group:0,tag:"Noun",reason:"is-pres-noun"},{match:"#Determiner #Adverb? [close]",group:0,tag:"Adjective",reason:"a-close"},{match:"#Determiner [(shit|damn|hell)]",group:0,tag:"Noun",reason:"swears-noun"},{match:"(the|these) [#Singular] (were|are)",group:0,tag:"Plural",reason:"singular-were"},{match:"#Gerund #Adjective? for [#Infinitive]",group:0,tag:"Noun",reason:"running-for"},{match:"#Gerund #Adjective to [#Infinitive]",group:0,tag:"Noun",reason:"running-to"},{match:"(many|any|some|several) [#PresentTense] for",group:0,tag:"Noun",reason:"any-verbs-for"},{match:"(have|had) [#Adjective] #Preposition .",group:0,tag:"Noun",reason:"have-fun"},{match:"co #Noun",tag:"Actor",reason:"co-noun"},{match:"to #PresentTense #Noun [#PresentTense] #Preposition",group:0,tag:"Noun",reason:"gas-exchange"},{match:"a #Noun+ or #Adverb+? [#Verb]",group:0,tag:"Noun",reason:"noun-or-noun"}];var zn=[{match:"[still] #Adjective",group:0,tag:"Adverb",reason:"still-advb"},{match:"[still] #Verb",group:0,tag:"Adverb",reason:"still-verb"},{match:"[so] #Adjective",group:0,tag:"Adverb",reason:"so-adv"},{match:"[way] #Comparative",group:0,tag:"Adverb",reason:"way-adj"},{match:"[way] #Adverb #Adjective",group:0,tag:"Adverb",reason:"way-too-adj"},{match:"[all] #Verb",group:0,tag:"Adverb",reason:"all-verb"},{match:"(#Verb && !#Modal) [like]",group:0,tag:"Adverb",reason:"verb-like"},{match:"(barely|hardly) even",tag:"Adverb",reason:"barely-even"},{match:"[even] #Verb",group:0,tag:"Adverb",reason:"even-walk"},{match:"even left",tag:"#Adverb #Verb",reason:"even-left"},{match:"(#PresentTense && !#Copula) [(hard|quick|long|bright|slow|fast|backwards|forwards)]",group:0,tag:"Adverb",reason:"lazy-ly"},{match:"[much] #Adjective",group:0,tag:"Adverb",reason:"bit-1"},{match:"#Copula [#Adverb]$",group:0,tag:"Adjective",reason:"is-well"},{match:"a [(little|bit|wee) bit?] #Adjective",group:0,tag:"Adverb",reason:"a-bit-cold"},{match:`[${`(${Nn.adverbAdjective.join("|")})`}] #Adjective`,group:0,tag:"Adverb",reason:"dark-green"},{match:"#Adverb [#Adverb]$",group:0,tag:"Adjective",reason:"kinda-sparkly"},{match:"#Adverb [#Adverb] (and|or|then)",group:0,tag:"Adjective",reason:"kinda-sparkly-and"}],In=[{match:"1 #Value #PhoneNumber",tag:"PhoneNumber",reason:"1-800-Value"},{match:"#NumericValue #PhoneNumber",tag:"PhoneNumber",reason:"(800) PhoneNumber"},{match:"#Demonym #Currency",tag:"Currency",reason:"demonym-currency"},{match:"[second] #Noun",group:0,tag:"Ordinal",reason:"second-noun"},{match:"#Value+ [#Currency]",group:0,tag:"Unit",reason:"5-yan"},{match:"#Value [(foot|feet)]",group:0,tag:"Unit",reason:"foot-unit"},{match:"(minus|negative) #Value",tag:"Value",reason:"minus-value"},{match:"#Value [#Abbreviation]",group:0,tag:"Unit",reason:"value-abbr"},{match:"#Value [k]",group:0,tag:"Unit",reason:"value-k"},{match:"#Unit an hour",tag:"Unit",reason:"unit-an-hour"},{match:"#Value (point|decimal) #Value",tag:"Value",reason:"value-point-value"},{match:"(#Value|a) [(buck|bucks|grand)]",group:0,tag:"Currency",reason:"value-bucks"},{match:"#Determiner [(half|quarter)] #Ordinal",group:0,tag:"Value",reason:"half-ordinal"},{match:"a #Value",tag:"Value",reason:"a-value"},{match:"[#Value+] #Currency",group:0,tag:"Money",reason:"15 usd"},{match:"(hundred|thousand|million|billion|trillion|quadrillion)+ and #Value",tag:"Value",reason:"magnitude-and-value"},{match:"!once [(a|an)] (#Duration|hundred|thousand|million|billion|trillion)",group:0,tag:"Value",reason:"a-is-one"}];const On=`(${Nn.personVerb.join("|")})`;var Tn=[{match:"[#Adjective] #Possessive #Noun",group:0,tag:"Verb",reason:"gerund-his-noun"},{match:"[#Adjective] (us|you)",group:0,tag:"Gerund",reason:"loving-you"},{match:"(slowly|quickly) [#Adjective]",group:0,tag:"Gerund",reason:"slowly-adj"},{match:"(#Modal|i|they|we|do) not? [like]",group:0,tag:"PresentTense",reason:"modal-like"},{match:"do (simply|just|really|not)+ [(#Adjective|like)]",group:0,tag:"Verb",reason:"do-simply-like"},{match:"does (#Adverb|not)? [#Adjective]",group:0,tag:"PresentTense",reason:"does-mean"},{match:"i (#Adverb|do)? not? [mean]",group:0,tag:"PresentTense",reason:"i-mean"},{match:"#Noun #Adverb? [left]",group:0,tag:"PastTense",reason:"left-verb"},{match:"(this|that) [#Plural]",group:0,tag:"PresentTense",reason:"this-verbs"},{match:"[#Copula (#Adverb|not)+?] (#Gerund|#PastTense)",group:0,tag:"Auxiliary",reason:"copula-walking"},{match:"[(has|had) (#Adverb|not)+?] #PastTense",group:0,tag:"Auxiliary",reason:"had-walked"},{match:"#Adverb+? [(#Modal|did)+ (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"modal-verb"},{match:"[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"would-have"},{match:"[(has|had) (#Adverb|not)+?] #PastTense",group:0,tag:"Auxiliary",reason:"had-walked"},{match:"[(do|does|will|have|had)] (not|#Adverb)+? #Verb",group:0,tag:"Auxiliary",reason:"have-had"},{match:"[about to] #Adverb? #Verb",group:0,tag:["Auxiliary","Verb"],reason:"about-to"},{match:"#Modal (#Adverb|not)+? be (#Adverb|not)+? #Verb",group:0,tag:"Auxiliary",reason:"would-be"},{match:"(were|was) being [#PresentTense]",group:0,tag:"PastTense",reason:"was-being"},{match:"[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"would-have"},{match:"(#Modal|had|has) (#Adverb|not)+? been (#Adverb|not)+? #Verb",group:0,tag:"Auxiliary",reason:"had-been"},{match:"[(be|being|been)] #Participle",group:0,tag:"Auxiliary",reason:"being-foo"},{match:"(#Verb && @hasHyphen) up",tag:"PhrasalVerb",reason:"foo-up"},{match:"(#Verb && @hasHyphen) off",tag:"PhrasalVerb",reason:"foo-off"},{match:"(#Verb && @hasHyphen) over",tag:"PhrasalVerb",reason:"foo-over"},{match:"(#Verb && @hasHyphen) out",tag:"PhrasalVerb",reason:"foo-out"},{match:"#PhrasalVerb [#PhrasalVerb]",group:0,tag:"Particle",reason:"phrasal-particle"},{match:"(lived|went|crept|go) [on] for",group:0,tag:"PhrasalVerb",reason:"went-on"},{match:"#Verb (him|her|it|us|himself|herself|itself|everything|something) [(up|down)]",group:0,tag:"Adverb",reason:"phrasal-pronoun-advb"},{match:"[will #Adverb? not? #Adverb? be] #Gerund",group:0,tag:"Copula",reason:"will-be-copula"},{match:"will #Adverb? not? #Adverb? [be] #Adjective",group:0,tag:"Copula",reason:"be-copula"},{match:"[march] (up|down|back|to|toward)",group:0,tag:"Infinitive",reason:"march-to"},{match:"#Modal [march]",group:0,tag:"Infinitive",reason:"must-march"},{match:"(let|make|made) (him|her|it|#Person|#Place|#Organization)+ [#Singular] (a|an|the|it)",group:0,tag:"Infinitive",reason:"let-him-glue"},{match:"will [#Adjective]",group:0,tag:"Verb",reason:"will-adj"},{match:"#Pronoun [#Adjective] #Determiner #Adjective? #Noun",group:0,tag:"Verb",reason:"he-adj-the"},{match:"#Copula [#Adjective to] #Verb",group:0,tag:"Verb",reason:"adj-to"},{match:"[open] #Determiner",group:0,tag:"Infinitive",reason:"open-the"},{match:"[#PresentTense] (are|were|was) #Adjective",group:0,tag:"Plural",reason:"compromises-are-possible"},{match:`#Modal [${On}]`,group:0,tag:"Verb",reason:"would-mark"},{match:`#Adverb [${On}]`,group:0,tag:"Verb",reason:"really-mark"},{match:"(to|#Modal) [mark]",group:0,tag:"PresentTense",reason:"to-mark"},{match:"^[#Infinitive] (is|was)",group:0,tag:"Noun",reason:"checkmate-is"},{match:On+" #Person",tag:"Person",reason:"rob-smith"},{match:On+" #Acronym #ProperNoun",tag:"Person",reason:"rob-a-smith"},{match:"[shit] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear1-verb"},{match:"[damn] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear2-verb"},{match:"[fuck] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear3-verb"}];var Vn=[{match:"(west|north|south|east|western|northern|southern|eastern)+ #Place",tag:"Region",reason:"west-norfolk"},{match:"#City [(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|pa|sc|tn|tx|ut|vt|pr)]",group:0,tag:"Region",reason:"us-state"},{match:"portland [or]",group:0,tag:"Region",reason:"portland-or"},{match:"#ProperNoun+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)",tag:"Region",reason:"foo-district"},{match:"(district|region|province|municipality|territory|burough|state) of #ProperNoun",tag:"Region",reason:"district-of-Foo"},{match:"in [#ProperNoun] #Place",group:0,tag:"Place",reason:"propernoun-place"},{match:"#Value #Noun (st|street|rd|road|crescent|cr|way|tr|terrace|avenue|ave)",tag:"Address",reason:"address-st"}];const Mn=`(${Nn.personNoun.join("|")})`,Jn=`(${Nn.personMonth.join("|")})`;var Ln=[{match:"[(1st|2nd|first|second)] #Honorific",group:0,tag:"Honorific",reason:"ordinal-honorific"},{match:"[(private|general|major|corporal|lord|lady|secretary|premier)] #Honorific? #Person",group:0,tag:"Honorific",reason:"ambg-honorifics"},{match:"#Copula [(#Noun|#PresentTense)] #LastName",group:0,tag:"FirstName",reason:"copula-noun-lastname"},{match:"(lady|queen|sister) #ProperNoun",tag:"FemaleName",reason:"lady-titlecase",safe:!0},{match:"(king|pope|father) #ProperNoun",tag:"MaleName",reason:"pope-titlecase",safe:!0},{match:"[(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill)] #LastName",group:0,tag:"FirstName",reason:"maybe-lastname"},{match:"#FirstName [#Determiner #Noun] #LastName",group:0,tag:"NickName",reason:"first-noun-last"},{match:"#Possessive [#FirstName]",group:0,tag:"Person",reason:"possessive-name"},{match:"#ProperNoun (b|c|d|e|f|g|h|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z) #ProperNoun",tag:"Person",reason:"titlecase-acronym-titlecase",safe:!0},{match:"#Acronym #LastName",tag:"Person",reason:"acronym-latname",safe:!0},{match:"#Person (jr|sr|md)",tag:"Person",reason:"person-honorific"},{match:"#Person #Person the? #RomanNumeral",tag:"Person",reason:"roman-numeral"},{match:"#FirstName [/^[^aiurck]$/]",group:0,tag:["Acronym","Person"],reason:"john-e"},{match:"#Honorific #Person",tag:"Person",reason:"honorific-person"},{match:"#Honorific #Acronym",tag:"Person",reason:"Honorific-TitleCase"},{match:"#Noun van der? #Noun",tag:"Person",reason:"van der noun",safe:!0},{match:"(king|queen|prince|saint|lady) of #Noun",tag:"Person",reason:"king-of-noun",safe:!0},{match:"(prince|lady) #Place",tag:"Person",reason:"lady-place"},{match:"(king|queen|prince|saint) #ProperNoun",tag:"Person",reason:"saint-foo"},{match:"[#ProperNoun] #Person",group:0,tag:"Person",reason:"proper-person",safe:!0},{match:"al (#Person|#ProperNoun)",tag:"Person",reason:"al-borlen",safe:!0},{match:"#FirstName de #Noun",tag:"Person",reason:"bill-de-noun"},{match:"#FirstName (bin|al) #Noun",tag:"Person",reason:"bill-al-noun"},{match:"#FirstName #Acronym #ProperNoun",tag:"Person",reason:"bill-acronym-title"},{match:"#FirstName #FirstName #ProperNoun",tag:"Person",reason:"bill-firstname-title"},{match:"#Honorific #FirstName? #ProperNoun",tag:"Person",reason:"dr-john-Title"},{match:"#FirstName the #Adjective",tag:"Person",reason:"name-the-great"},{match:"#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)",tag:"Person",reason:"bill-green"},{match:Mn+" #Person",tag:"Person",reason:"ray-smith",safe:!0},{match:Mn+" #Acronym? #ProperNoun",tag:"Person",reason:"ray-a-smith",safe:!0},{match:`#Infinitive #Determiner? #Adjective? #Noun? (to|for) [${Jn}]`,group:0,tag:"Person",reason:"ambig-person"},{match:`#Infinitive [${Jn}]`,group:0,tag:"Person",reason:"infinitive-person"},{match:`[${Jn}] #Modal`,group:0,tag:"Person",reason:"ambig-modal"},{match:"[may] be",group:0,tag:"Verb",reason:"may-be"},{match:`#Modal [${Jn}]`,group:0,tag:"Person",reason:"modal-ambig"},{match:`#Copula [${Jn}]`,group:0,tag:"Person",reason:"is-may"},{match:`[${Jn}] #Copula`,group:0,tag:"Person",reason:"may-is"},{match:`that [${Jn}]`,group:0,tag:"Person",reason:"that-month"},{match:`with [${Jn}]`,group:0,tag:"Person",reason:"with-month"},{match:`for [${Jn}]`,group:0,tag:"Person",reason:"for-month"},{match:`this [${Jn}]`,group:0,tag:"Month",reason:"this-may"},{match:`next [${Jn}]`,group:0,tag:"Month",reason:"next-may"},{match:`last [${Jn}]`,group:0,tag:"Month",reason:"last-may"},{match:`#Date [${Jn}]`,group:0,tag:"Month",reason:"date-may"},{match:`[${Jn}] the? #Value`,group:0,tag:"Month",reason:"may-5th"},{match:`#Value of [${Jn}]`,group:0,tag:"Month",reason:"5th-of-may"},{match:"#ProperNoun (van|al|bin) #ProperNoun",tag:"Person",reason:"title-van-title",safe:!0},{match:"#ProperNoun (de|du) la? #ProperNoun",tag:"Person",reason:"title-de-title",safe:!0},{match:"#Singular #Acronym #LastName",tag:"#Person",reason:"title-acro-noun",safe:!0},{match:"#FirstName (#Noun && #ProperNoun) #ProperNoun?",tag:"Person",reason:"firstname-titlecase"},{match:"#FirstName #Acronym #Noun",tag:"Person",reason:"n-acro-noun",safe:!0},{match:"#FirstName [(de|di|du|van|von) #Person]",group:0,tag:"LastName",reason:"de-firstname"},{match:`[${`(${Nn.personPlace.join("|")})`}] (#ProperNoun && !#Place)`,group:0,tag:"FirstName",reason:"place-firstname"}];let Sn=[];Sn=Sn.concat(jn),Sn=Sn.concat(Fn),Sn=Sn.concat(Bn),Sn=Sn.concat(Gn),Sn=Sn.concat(zn),Sn=Sn.concat(In),Sn=Sn.concat(Tn),Sn=Sn.concat(Vn),Sn=Sn.concat([{match:"#Noun (&|n) #Noun",tag:"Organization",reason:"Noun-&-Noun"},{match:"#Organization of the? #ProperNoun",tag:"Organization",reason:"org-of-place",safe:!0},{match:"#Organization #Country",tag:"Organization",reason:"org-country"},{match:"#ProperNoun #Organization",tag:"Organization",reason:"titlecase-org"},{match:"#ProperNoun (ltd|co|inc|dept|assn|bros)",tag:"Organization",reason:"org-abbrv"},{match:"the [#Acronym]",group:0,tag:"Organization",reason:"the-acronym",safe:!0},{match:"(world|global|international|national|#Demonym) #Organization",tag:"Organization",reason:"global-org"},{match:"#Noun+ (public|private) school",tag:"School",reason:"noun-public-school"}]),Sn=Sn.concat(Ln);let _n=[];Sn.forEach(e=>{e.reg=Ce(e.match);let t=function(e){let t=[];if(1===e.reg.filter(e=>void 0!==e.fastOr).length){let r=e.reg.findIndex(e=>void 0!==e.fastOr);Object.keys(e.reg[r].fastOr).forEach(a=>{let n=Object.assign({},e);n.reg=n.reg.slice(0),n.reg[r]=Object.assign({},n.reg[r]),n.reg[r].word=a,delete n.reg[r].operator,delete n.reg[r].fastOr,t.push(n);});}return t}(e);t.length>0?_n=_n.concat(t):_n.push(e);}),_n.forEach(e=>(e.required=function(e){let t=[],r=[];return e.forEach(e=>{!0!==e.optional&&!0!==e.negative&&(void 0!==e.tag&&t.push(e.tag),void 0!==e.word&&r.push(e.word));}),{tags:Hn(t),words:Hn(r)}}(e.reg),e));var Kn=_n;var qn=function(e){Kn.forEach(t=>{let r=[];t.required.words.forEach(t=>{r.push(e._cache.words[t]||[]);}),t.required.tags.forEach(t=>{r.push(e._cache.tags[t]||[]);});let a=function(e){if(0===e.length)return [];let t={};e.forEach(e=>{e=Hn(e);for(let r=0;r<e.length;r++)t[e[r]]=t[e[r]]||0,t[e[r]]+=1;});let r=Object.keys(t);return r=r.filter(r=>t[r]===e.length),r=r.map(e=>Number(e)),r}(r);if(0===a.length)return;let n=a.map(t=>e.list[t]),i=e.buildFrom(n).match(t.reg,t.group);i.found&&(!0===t.safe?i.tagSafe(t.tag,t.reason):i.tag(t.tag,t.reason));});};var Wn=function(e){return qn(e),En(e),e};var Rn=function(e){let t=e.termList();return e=Na(e,t),e=Za(e,t),(e=$n(e)).cache(),(e=Wn(e)).uncache(),e.world.taggers.forEach(t=>{t(e);}),e};var Un=function(e){class t extends e{stripPeriods(){return this.termList().forEach(e=>{!0===e.tags.Abbreviation&&e.next&&(e.post=e.post.replace(/^\./,""));let t=e.text.replace(/\./,"");e.set(t);}),this}addPeriods(){return this.termList().forEach(e=>{e.post=e.post.replace(/^\./,""),e.post="."+e.post;}),this}}return t.prototype.unwrap=t.prototype.stripPeriods,e.prototype.abbreviations=function(e){let r=this.match("#Abbreviation");return "number"==typeof e&&(r=r.get(e)),new t(r.list,this,this.world)},e};const Qn=/\./;var Zn=function(e){class t extends e{stripPeriods(){return this.termList().forEach(e=>{let t=e.text.replace(/\./g,"");e.set(t);}),this}addPeriods(){return this.termList().forEach(e=>{let t=e.text.replace(/\./g,"");t=t.split("").join("."),!1===Qn.test(e.post)&&(t+="."),e.set(t);}),this}}return t.prototype.unwrap=t.prototype.stripPeriods,t.prototype.strip=t.prototype.stripPeriods,e.prototype.acronyms=function(e){let r=this.match("#Acronym");return "number"==typeof e&&(r=r.get(e)),new t(r.list,this,this.world)},e};var Xn=function(e){return e.prototype.clauses=function(t){let r=this.if("@hasComma").notIf("@hasComma @hasComma").notIf("@hasComma . .? (and|or) .").notIf("(#City && @hasComma) #Country").notIf("(#WeekDay && @hasComma) #Date").notIf("(#Date && @hasComma) #Year").notIf("@hasComma (too|also)$").match("@hasComma"),a=this.splitAfter(r),n=a.quotations();a=a.splitOn(n);let i=a.parentheses();a=a.splitOn(i);let o=a.if("#Copula #Adjective #Conjunction (#Pronoun|#Determiner) #Verb").match("#Conjunction");a=a.splitBefore(o);let s=a.if("if .{2,9} then .").match("then");a=a.splitBefore(s),a=a.splitBefore("as well as ."),a=a.splitBefore("such as ."),a=a.splitBefore("in addition to ."),a=a.splitAfter("@hasSemicolon"),a=a.splitAfter("@hasDash");let l=a.filter(e=>e.wordCount()>5&&e.match("#Verb+").length>=2);if(l.found){let e=l.splitAfter("#Noun .* #Verb .* #Noun+");a=a.splitOn(e.eq(0));}return "number"==typeof t&&(a=a.get(t)),new e(a.list,this,this.world)},e};var Yn=function(e){class t extends e{constructor(e,t,r){super(e,t,r),this.contracted=null;}expand(){return this.list.forEach(e=>{let t=e.terms(),r=t[0].isTitleCase();t.forEach((e,r)=>{e.set(e.implicit||e.text),e.implicit=void 0,r<t.length-1&&""===e.post&&(e.post+=" ");}),r&&t[0].toTitleCase();}),this}}return e.prototype.contractions=function(e){let r=this.match("@hasContraction+");return "number"==typeof e&&(r=r.get(e)),new t(r.list,this,this.world)},e.prototype.expanded=e.prototype.isExpanded,e.prototype.contracted=e.prototype.isContracted,e};var ei=function(e){const t=function(e){let t=e.splitAfter("@hasComma").splitOn("(and|or) not?").not("(and|or) not?"),r=e.match("[.] (and|or)",0);return {things:t,conjunction:e.match("(and|or) not?"),beforeLast:r,hasOxford:r.has("@hasComma")}};class r extends e{conjunctions(){return this.match("(and|or)")}parts(){return this.splitAfter("@hasComma").splitOn("(and|or) not?")}items(){return t(this).things}add(e){return this.forEach(r=>{let a=t(r).beforeLast;a.append(e),a.termList(0).addPunctuation(",");}),this}remove(e){return this.items().if(e).remove()}hasOxfordComma(){return this.filter(e=>t(e).hasOxford)}addOxfordComma(){let e=this.items(),t=e.eq(e.length-2);return t.found&&!1===t.has("@hasComma")&&t.post(", "),this}removeOxfordComma(){let e=this.items(),t=e.eq(e.length-2);return t.found&&!0===t.has("@hasComma")&&t.post(" "),this}}return r.prototype.things=r.prototype.items,e.prototype.lists=function(e){let t=this.if("@hasComma+ .? (and|or) not? ."),a=t.match("(#Noun|#Adjective|#Determiner|#Article)+ #Conjunction not? (#Article|#Determiner)? #Adjective? #Noun+").if("#Noun"),n=t.match("(#Adjective|#Adverb)+ #Conjunction not? #Adverb? #Adjective+"),i=t.match("(#Verb|#Adverb)+ #Conjunction not? #Adverb? #Verb+"),o=a.concat(n);return o=o.concat(i),o=o.if("@hasComma"),"number"==typeof e&&(o=t.get(e)),new r(o.list,this,this.world)},e};var ti=function(e){return !0===e.has("#Plural")||!0!==e.has("(#Pronoun|#Place|#Value|#Person|#Uncountable|#Month|#WeekDay|#Holiday|#Possessive)")};const ri={hour:"an",heir:"an",heirloom:"an",honest:"an",honour:"an",honor:"an",uber:"an"},ai={a:!0,e:!0,f:!0,h:!0,i:!0,l:!0,m:!0,n:!0,o:!0,r:!0,s:!0,x:!0},ni=[/^onc?e/i,/^u[bcfhjkqrstn][aeiou]/i,/^eul/i];var ii=function(e){if(e.has("#Person")||e.has("#Place"))return "";if(e.has("#Plural"))return "the";let t=e.text("normal").trim();if(ri.hasOwnProperty(t))return ri[t];let r=t.substr(0,1);if(e.has("^@isAcronym")&&ai.hasOwnProperty(r))return "an";for(let e=0;e<ni.length;e++)if(ni[e].test(t))return "a";return /^[aeiou]/i.test(t)?"an":"a"};var oi={isSingular:[/(ax|test)is$/i,/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,/(octop|vir)i$/i,/(rl)f$/i,/(alias|status)$/i,/(bu)s$/i,/(al|ad|at|er|et|ed|ad)o$/i,/(ti)um$/i,/(ti)a$/i,/sis$/i,/(?:(^f)fe|(lr)f)$/i,/hive$/i,/(^aeiouy|qu)y$/i,/(x|ch|ss|sh|z)$/i,/(matr|vert|ind|cort)(ix|ex)$/i,/(m|l)ouse$/i,/(m|l)ice$/i,/(antenn|formul|nebul|vertebr|vit)a$/i,/.sis$/i,/^(?!talis|.*hu)(.*)man$/i],isPlural:[/(antenn|formul|nebul|vertebr|vit)ae$/i,/(octop|vir|radi|nucle|fung|cact|stimul)i$/i,/men$/i,/.tia$/i,/(m|l)ice$/i]};const si=/s$/;var li=function(e){return !oi.isSingular.find(t=>t.test(e))&&(!0===si.test(e)||(!!oi.isPlural.find(t=>t.test(e))||null))};const ui={he:"his",she:"hers",they:"theirs",we:"ours",i:"mine",you:"yours",her:"hers",their:"theirs",our:"ours",my:"mine",your:"yours"};var ci=function(e){let t=e.text("text").trim();return ui.hasOwnProperty(t)?(e.replaceWith(ui[t],!0),void e.tag("Possessive","toPossessive")):/s$/.test(t)?(t+="'",e.replaceWith(t,!0),void e.tag("Possessive","toPossessive")):(t+="'s",e.replaceWith(t,!0),void e.tag("Possessive","toPossessive"))};var hi=function(e){let t={main:e};if(e.has("#Noun (of|by|for) .")){let r=e.splitAfter("[#Noun+]",0);t.main=r.eq(0),t.post=r.eq(1);}return t};var di={json:function(e){let t=null;"number"==typeof e&&(t=e,e=null),e=e||{text:!0,normal:!0,trim:!0,terms:!0};let r=[];return this.forEach(t=>{let a=t.json(e)[0];a.article=ii(t),r.push(a);}),null!==t?r[t]:r},adjectives:function(){let e=this.lookAhead("^(that|who|which)? (was|is|will)? be? #Adverb? #Adjective+");return e=e.concat(this.lookBehind("#Adjective+ #Adverb?$")),e=e.match("#Adjective"),e.sort("index")},isPlural:function(){return this.if("#Plural")},hasPlural:function(){return this.filter(e=>ti(e))},toPlural:function(e){let t=this.world.transforms.toPlural;return this.forEach(r=>{if(r.has("#Plural")||!1===ti(r))return;let a=hi(r).main,n=a.text("reduced");if((a.has("#Singular")||!0!==li(n))&&(n=t(n,this.world),a.replace(n).tag("#Plural"),e)){let e=a.lookBefore("(an|a) #Adjective?$").not("#Adjective");!0===e.found&&e.remove();}}),this},toSingular:function(e){let t=this.world.transforms.toSingular;return this.forEach(r=>{if(r.has("^#Singular+$")||!1===ti(r))return;let a=hi(r).main,n=a.text("reduced");if((a.has("#Plural")||!0===li(n))&&(n=t(n,this.world),a.replace(n).tag("#Singular"),e)){let e=r,t=r.lookBefore("#Adjective");t.found&&(e=t);let a=ii(e);e.insertBefore(a);}}),this},toPossessive:function(){return this.forEach(e=>{ci(e);}),this}};var gi=function(e){class t extends e{}return Object.assign(t.prototype,di),e.prototype.nouns=function(e,r={}){let a=this.match("(#City && @hasComma) (#Region|#Country)"),n=this.not(a).splitAfter("@hasComma");n=n.concat(a);let i=n.quotations();return i.found&&(n=n.splitOn(i.eq(0))),n=n.match("#Noun+ (of|by)? the? #Noun+?"),!0!==r.keep_anaphora&&(n=n.not("#Pronoun"),n=n.not("(there|these)"),n=n.not("(#Month|#WeekDay)"),n=n.not("(my|our|your|their|her|his)")),n=n.not("(of|for|by|the)$"),"number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e};const pi=/\(/,mi=/\)/;var fi=function(e){class t extends e{unwrap(){return this.list.forEach(e=>{let t=e.terms(0);t.pre=t.pre.replace(pi,"");let r=e.lastTerm();r.post=r.post.replace(mi,"");}),this}}return e.prototype.parentheses=function(e){let r=[];return this.list.forEach(e=>{let t=e.terms();for(let a=0;a<t.length;a+=1){const n=t[a];if(pi.test(n.pre))for(let i=a;i<t.length;i+=1)if(mi.test(t[i].post)){let t=i-a+1;r.push(e.buildFrom(n.id,t)),a=i;break}}}),"number"==typeof e?(r=r[e]?[r[e]]:[],new t(r,this,this.world)):new t(r,this,this.world)},e};var bi=function(e){class t extends e{constructor(e,t,r){super(e,t,r),this.contracted=null;}strip(){return this.list.forEach(e=>{e.terms().forEach(e=>{let t=e.text.replace(/'s$/,"");e.set(t||e.text);});}),this}}return e.prototype.possessives=function(e){let r=this.match("#Noun+? #Possessive");return "number"==typeof e&&(r=r.get(e)),new t(r.list,this,this.world)},e};const vi={'"':'"',"＂":"＂","'":"'","“":"”","‘":"’","‟":"”","‛":"’","„":"”","⹂":"”","‚":"’","«":"»","‹":"›","‵":"′","‶":"″","‷":"‴","〝":"〞","`":"´","〟":"〞"},yi=RegExp("("+Object.keys(vi).join("|")+")");var wi=function(e){class t extends e{unwrap(){return this}}return e.prototype.quotations=function(e){let r=[];return this.list.forEach(e=>{let t=e.terms();for(let a=0;a<t.length;a+=1){const n=t[a];if(yi.test(n.pre)){let i=(n.pre.match(yi)||[])[0],o=vi[i];for(let i=a;i<t.length;i+=1)if(-1!==t[i].post.indexOf(o)){let t=i-a+1;r.push(e.buildFrom(n.id,t)),a=i;break}}}}),"number"==typeof e?(r=r[e]?[r[e]]:[],new t(r,this,this.world)):new t(r,this,this.world)},e.prototype.quotes=e.prototype.quotations,e};var ki=function(e,t){let r=e.verb,a=r.text("reduced");if(r.has("#Infinitive"))return a;let n=null;return r.has("#PastTense")?n="PastTense":r.has("#Gerund")?n="Gerund":r.has("#PresentTense")?n="PresentTense":r.has("#Participle")?n="Participle":r.has("#Actor")&&(n="Actor"),t.transforms.toInfinitive(a,t,n)};var Ai=function(e){let t=e.verb;if(t.has("(are|were|does)")||e.auxiliary.has("(are|were|does)"))return !0;let r=function(e){return e.lookBehind("#Noun+").last()}(t);return !r.has("(he|she|many|both)")&&(!!r.has("(we|they|you|i)")||!r.has("#Person")&&(!!r.has("#Plural")||!r.has("#Singular")&&(!t.has("(is|am|do|was)")&&(!(e.auxiliary.has("(is|am|do|was)")&&!e.negative.found)&&null))))};var Di=function(e,t){let r=e.verb;if(!e.negative.found){if(e.auxiliary.found)return e.auxiliary.eq(0).append("not"),void(e.auxiliary.has("#Modal have not")&&e.auxiliary.replace("have not","not have"));if(r.has("(#Copula|will|has|had|do)"))r.append("not");else {if(r.has("#PastTense")){let a=ki(e,t);return r.replaceWith(a,!0),void r.prepend("did not")}if(r.has("#PresentTense")){let a=ki(e,t);return r.replaceWith(a,!0),void(Ai(e)?r.prepend("do not"):r.prepend("does not"))}if(r.has("#Gerund")){let a=ki(e,t);return r.replaceWith(a,!0),void r.prepend("not")}Ai(e)?r.prepend("does not"):r.prepend("do not");}}};var $i=function(e){let t=e.lookBehind(),r=t.nouns(null,{keep_anaphora:!0}).last();return r.found||(r=t.match("(that|this|each)").last(),r=r.tag("#Noun").nouns()),r};var Pi=function(e){let t={adverb:e.match("#Adverb+"),negative:e.match("#Negative"),auxiliary:e.match("#Auxiliary+").not("(#Negative|#Adverb)"),particle:e.match("#Particle"),verb:e.match("#Verb+").not("(#Adverb|#Negative|#Auxiliary|#Particle)"),original:e,subject:$i(e)};if(t.verb.has("(#PresentTense|#PastTense|#Infinitive) #Gerund$")&&(t.verb=t.verb.not("#Gerund$")),!t.verb.found)return Object.keys(t).forEach(e=>{t[e]=t[e].not(".");}),t.verb=e,t;if(t.adverb&&t.adverb.found){let r=t.adverb.text("reduced")+"$";e.has(r)&&(t.adverbAfter=!0);}return t};var Ei=e=>{let t=!1,r=Ai(e),a=e.negative.found;e.verb.lookBehind("i (#Adverb|#Verb)?$").found&&(t=!0);let n={PastTense:"was",PresentTense:"is",FutureTense:"will be",Infinitive:"is",Gerund:"being",Actor:"",PerfectTense:"been",Pluperfect:"been"};return r&&(n.PastTense="were",n.PresentTense="are",n.Infinitive="are"),!0===t&&(n.PastTense="was",n.PresentTense="am",n.Infinitive="am"),a&&(n.PastTense+=" not",n.PresentTense+=" not",n.FutureTense="will not be",n.Infinitive+=" not",n.PerfectTense="not "+n.PerfectTense,n.Pluperfect="not "+n.Pluperfect,n.Gerund="not "+n.Gerund),n};var Hi=function(e){let t=e.verb.text();return {PastTense:t+" have",PresentTense:t,FutureTense:t,Infinitive:t}};var ji=function(e,t){let r=e.verb;if(r.has("#Copula")||"be"===r.out("normal")&&e.auxiliary.has("will"))return Ei(e);if(e.auxiliary.has("are")&&r.has("#Gerund")){let r=e.original.clone(),a=r.clone().replace("are","were"),n=r.clone().replace("are","will be"),i=ki(e,t);return {PastTense:a.text(),PresentTense:r.text(),FutureTense:n.text(),Infinitive:i}}if(r.has("#Modal"))return Hi(e);let a=ki(e,t);if(!a)return {};let n=t.transforms.conjugate(a,t);n.Infinitive=a;let i=Ai(e);!0===i&&(n.PresentTense=n.Infinitive);let o=e.verb.termList(0).hasHyphen();if(e.particle.found){let t=e.particle.text(),r=!0===o?"-":" ";Object.keys(n).forEach(e=>n[e]+=r+t);}const s=e.negative.found;return n.FutureTense=n.FutureTense||"will "+n.Infinitive,s&&(n.PastTense="did not "+n.Infinitive,n.FutureTense="will not "+n.Infinitive,i?(n.PresentTense="do not "+n.Infinitive,n.Infinitive="do not "+n.Infinitive):(n.PresentTense="does not "+n.Infinitive,n.Infinitive="does not "+n.Infinitive),n.Gerund="not "+n.Gerund),n};var Ni={useParticiple:function(e){return !!e.auxiliary.has("(could|should|would|may|can|must)")||(!!e.auxiliary.has("am .+? being")||!!e.auxiliary.has("had .+? been"))},toParticiple:function(e,t){if(e.auxiliary.has("(have|had)")&&e.verb.has("#Participle"))return;let r=ji(e,t),a=r.Participle||r.PastTense;a&&e.verb.replaceWith(a,!1),e.auxiliary.has("am .+? being")&&(e.auxiliary.remove("am"),e.auxiliary.replace("being","have been")),e.auxiliary.has("have")||e.auxiliary.append("have"),e.verb.tag("Participle","toParticiple"),e.auxiliary.replace("can","could"),e.auxiliary.replace("be have","have been"),e.auxiliary.replace("not have","have not"),e.auxiliary.tag("Auxiliary");}};const{toParticiple:xi,useParticiple:Fi}=Ni,Ci=function(e){return e.auxiliary.remove("(will|are|am|being)"),e.auxiliary.remove("(did|does)"),e.auxiliary.remove("(had|has|have)"),e.particle.remove(),e.negative.remove(),e};var Bi={json:function(e){let t=null;"number"==typeof e&&(t=e,e=null),e=e||{text:!0,normal:!0,trim:!0,terms:!0};let r=[];return this.forEach(t=>{let a=t.json(e)[0],n=Pi(t);a.parts={},Object.keys(n).forEach(e=>{n[e]&&"Doc"===n[e].isA?a.parts[e]=n[e].text("normal"):a.parts[e]=n[e];}),a.isNegative=t.has("#Negative"),a.conjugations=ji(n,this.world),r.push(a);}),null!==t?r[t]:r},adverbs:function(){let e=[];this.forEach(t=>{let r=Pi(t).adverb;r.found&&(e=e.concat(r.list));});let t=this.lookBehind("#Adverb+$");return t.found&&(e=t.list.concat(e)),t=this.lookAhead("^#Adverb+"),t.found&&(e=e.concat(t.list)),this.buildFrom(e)},isPlural:function(){let e=[];return this.forEach(t=>{let r=Pi(t);!0===Ai(r,this.world)&&e.push(t.list[0]);}),this.buildFrom(e)},isSingular:function(){let e=[];return this.forEach(t=>{let r=Pi(t);!1===Ai(r,this.world)&&e.push(t.list[0]);}),this.buildFrom(e)},conjugate:function(){let e=[];return this.forEach(t=>{let r=Pi(t),a=ji(r,this.world);e.push(a);}),e},toPastTense:function(){return this.forEach(e=>{let t=Pi(e);if(Fi(t))return void xi(t,this.world);if(e.has("#Imperative"))return;if(e.has("be")&&e.lookBehind("to$").found)return;if(t.verb.has("#Gerund")&&t.auxiliary.has("(is|will|was)"))return void e.replace("is","was");let r=ji(t,this.world).PastTense;r&&(t=Ci(t),t.verb.replaceWith(r,!1),t.auxiliary.remove("(do|did|will)"));}),this},toPresentTense:function(){return this.forEach(e=>{if(e.has("#Imperative"))return;let t=Pi(e),r=ji(t,this.world),a=r.PresentTense;if(e.lookBehind("(i|we) (#Adverb|#Verb)?$").found&&(a=r.Infinitive),a){if(t.auxiliary.has("(have|had) been"))return t.auxiliary.replace("(have|had) been","am being"),void(r.Particle&&(a=r.Particle||r.PastTense));t.verb.replaceWith(a,!1),t.verb.tag("PresentTense"),t=Ci(t),t.auxiliary.remove("#Modal"),t.auxiliary.remove("(do|did|will)");}}),this},toFutureTense:function(){return this.forEach(e=>{let t=Pi(e);if(Fi(t))return;if(e.has("#Imperative"))return;let r=ji(t,this.world).FutureTense;r&&(t=Ci(t),t.auxiliary.remove("#Modal"),t.verb.replaceWith(r,!1),t.verb.tag("FutureTense"),t.auxiliary.remove("(do|did|will)"));}),this},toInfinitive:function(){return this.forEach(e=>{let t=Pi(e),r=ji(t,this.world).Infinitive;r&&(e.replaceWith(r,!1),e.tag("Infinitive"));}),this},toGerund:function(){return this.forEach(e=>{let t=Pi(e),r=ji(t,this.world).Gerund;r&&(e.replaceWith(r,!1),e.tag("Gerund"));}),this},toParticiple:function(){return this.forEach(e=>{let t=Pi(e),r=!t.auxiliary.found;xi(t,this.world),r&&(t.verb.prepend(t.auxiliary.text()),t.auxiliary.remove());}),this},isNegative:function(){return this.if("#Negative")},isPositive:function(){return this.ifNo("#Negative")},isImperative:function(){return this.if("#Imperative")},toNegative:function(){return this.list.forEach(e=>{let t=this.buildFrom([e]),r=Pi(t);Di(r,t.world);}),this},toPositive:function(){let e=this.match("do not #Verb");return e.found&&e.remove("do not"),this.remove("#Negative")},subject:function(){let e=[];return this.forEach(t=>{let r=$i(t);r.list[0]&&e.push(r.list[0]);}),this.buildFrom(e)}};const Gi=[Un,Zn,Xn,Yn,ei,gi,fi,bi,wi,function(e){class t extends e{}return Object.assign(t.prototype,Bi),t.prototype.negate=t.prototype.toNegative,e.prototype.verbs=function(e){let r=this.match("(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+");r=r.not("^#Adverb+"),r=r.not("#Adverb+$");let a=r.match("(#Adverb && @hasComma) #Adverb"),n=r.not(a).splitAfter("@hasComma");return n=n.concat(a),n.sort("index"),n=n.if("#Verb"),n.has("(is|was)$")&&(n=n.splitBefore("(is|was)$")),n.has("#PresentTense #Adverb #PresentTense")&&(n=n.splitBefore("#Adverb #PresentTense")),"number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e},function(e){class t extends e{}return e.prototype.people=function(e){let r=this.splitAfter("@hasComma");return r=r.match("#Person+"),"number"==typeof e&&(r=r.get(e)),new t(r.list,this,this.world)},e}];var zi=function(e){return Object.keys(ea).forEach(t=>e.prototype[t]=ea[t]),Gi.forEach(t=>t(e)),e};const Ii={misc:Xr,selections:ea};class Oi{constructor(e,t,r){this.list=e,Object.defineProperty(this,"from",{enumerable:!1,value:t,writable:!0}),void 0===r&&void 0!==t&&(r=t.world),Object.defineProperty(this,"world",{enumerable:!1,value:r,writable:!0}),Object.defineProperty(this,"_cache",{enumerable:!1,writable:!0,value:{}}),Object.defineProperty(this,"found",{get:()=>this.list.length>0}),Object.defineProperty(this,"length",{get:()=>this.list.length}),Object.defineProperty(this,"isA",{get:()=>"Doc"});}tagger(){return Rn(this)}pool(){return this.list.length>0?this.list[0].pool:this.all().list[0].pool}}Oi.prototype.buildFrom=function(e){return e=e.map(e=>e.clone(!0)),new Oi(e,this,this.world)},Oi.prototype.fromText=function(e){let t=ot$1(e,this.world,this.pool());return this.buildFrom(t)},Object.assign(Oi.prototype,Ii.misc),Object.assign(Oi.prototype,Ii.selections),zi(Oi);const Ti={untag:"unTag",and:"match",notIf:"ifNo",only:"if",onlyIf:"if"};Object.keys(Ti).forEach(e=>Oi.prototype[e]=Oi.prototype[Ti[e]]);var Vi=Oi;var Mi=function(e){let t=e.termList();return aa(t,e.world),e.world.taggers.forEach(t=>{t(e);}),e};var Ji=function e(t){let r=t;const a=function(e="",t){t&&r.addWords(t);let a=ot$1(e,r),n=new Vi(a,null,r);return n.tagger(),n};return a.tokenize=function(e="",t){let a=r;t&&(a=a.clone(),a.words={},a.addWords(t));let n=ot$1(e,a),i=new Vi(n,null,a);return (t||i.world.taggers.length>0)&&Mi(i),i},a.extend=function(e){return e(Vi,r,this,Ve,Z$1,Je),this},a.fromJSON=function(e){let t=st$1(e,r);return new Vi(t,null,r)},a.clone=function(){return e(r.clone())},a.verbose=function(e=!0){return r.verbose(e),this},a.world=function(){return r},a.parseMatch=function(e,t){return Ce(e,t)},a.version="13.11.2",a.import=a.load,a.plugin=a.extend,a}(new mr);

      var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

      function createCommonjsModule(fn) {
        var module = { exports: {} };
      	return fn(module, module.exports), module.exports;
      }

      function commonjsRequire (target) {
      	throw new Error('Could not dynamically require "' + target + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.');
      }

      /*global define:false */

      createCommonjsModule(function (module) {
      /**
       * Copyright 2012-2017 Craig Campbell
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * Mousetrap is a simple keyboard shortcut library for Javascript with
       * no external dependencies
       *
       * @version 1.6.5
       * @url craig.is/killing/mice
       */
      (function(window, document, undefined$1) {

          // Check if mousetrap is used inside browser, if not, return
          if (!window) {
              return;
          }

          /**
           * mapping of special keycodes to their corresponding keys
           *
           * everything in this dictionary cannot use keypress events
           * so it has to be here to map to the correct keycodes for
           * keyup/keydown events
           *
           * @type {Object}
           */
          var _MAP = {
              8: 'backspace',
              9: 'tab',
              13: 'enter',
              16: 'shift',
              17: 'ctrl',
              18: 'alt',
              20: 'capslock',
              27: 'esc',
              32: 'space',
              33: 'pageup',
              34: 'pagedown',
              35: 'end',
              36: 'home',
              37: 'left',
              38: 'up',
              39: 'right',
              40: 'down',
              45: 'ins',
              46: 'del',
              91: 'meta',
              93: 'meta',
              224: 'meta'
          };

          /**
           * mapping for special characters so they can support
           *
           * this dictionary is only used incase you want to bind a
           * keyup or keydown event to one of these keys
           *
           * @type {Object}
           */
          var _KEYCODE_MAP = {
              106: '*',
              107: '+',
              109: '-',
              110: '.',
              111 : '/',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: '\''
          };

          /**
           * this is a mapping of keys that require shift on a US keypad
           * back to the non shift equivelents
           *
           * this is so you can use keyup events with these keys
           *
           * note that this will only work reliably on US keyboards
           *
           * @type {Object}
           */
          var _SHIFT_MAP = {
              '~': '`',
              '!': '1',
              '@': '2',
              '#': '3',
              '$': '4',
              '%': '5',
              '^': '6',
              '&': '7',
              '*': '8',
              '(': '9',
              ')': '0',
              '_': '-',
              '+': '=',
              ':': ';',
              '\"': '\'',
              '<': ',',
              '>': '.',
              '?': '/',
              '|': '\\'
          };

          /**
           * this is a list of special strings you can use to map
           * to modifier keys when you specify your keyboard shortcuts
           *
           * @type {Object}
           */
          var _SPECIAL_ALIASES = {
              'option': 'alt',
              'command': 'meta',
              'return': 'enter',
              'escape': 'esc',
              'plus': '+',
              'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
          };

          /**
           * variable to store the flipped version of _MAP from above
           * needed to check if we should use keypress or not when no action
           * is specified
           *
           * @type {Object|undefined}
           */
          var _REVERSE_MAP;

          /**
           * loop through the f keys, f1 to f19 and add them to the map
           * programatically
           */
          for (var i = 1; i < 20; ++i) {
              _MAP[111 + i] = 'f' + i;
          }

          /**
           * loop through to map numbers on the numeric keypad
           */
          for (i = 0; i <= 9; ++i) {

              // This needs to use a string cause otherwise since 0 is falsey
              // mousetrap will never fire for numpad 0 pressed as part of a keydown
              // event.
              //
              // @see https://github.com/ccampbell/mousetrap/pull/258
              _MAP[i + 96] = i.toString();
          }

          /**
           * cross browser add event method
           *
           * @param {Element|HTMLDocument} object
           * @param {string} type
           * @param {Function} callback
           * @returns void
           */
          function _addEvent(object, type, callback) {
              if (object.addEventListener) {
                  object.addEventListener(type, callback, false);
                  return;
              }

              object.attachEvent('on' + type, callback);
          }

          /**
           * takes the event and returns the key character
           *
           * @param {Event} e
           * @return {string}
           */
          function _characterFromEvent(e) {

              // for keypress events we should return the character as is
              if (e.type == 'keypress') {
                  var character = String.fromCharCode(e.which);

                  // if the shift key is not pressed then it is safe to assume
                  // that we want the character to be lowercase.  this means if
                  // you accidentally have caps lock on then your key bindings
                  // will continue to work
                  //
                  // the only side effect that might not be desired is if you
                  // bind something like 'A' cause you want to trigger an
                  // event when capital A is pressed caps lock will no longer
                  // trigger the event.  shift+a will though.
                  if (!e.shiftKey) {
                      character = character.toLowerCase();
                  }

                  return character;
              }

              // for non keypress events the special maps are needed
              if (_MAP[e.which]) {
                  return _MAP[e.which];
              }

              if (_KEYCODE_MAP[e.which]) {
                  return _KEYCODE_MAP[e.which];
              }

              // if it is not in the special map

              // with keydown and keyup events the character seems to always
              // come in as an uppercase character whether you are pressing shift
              // or not.  we should make sure it is always lowercase for comparisons
              return String.fromCharCode(e.which).toLowerCase();
          }

          /**
           * checks if two arrays are equal
           *
           * @param {Array} modifiers1
           * @param {Array} modifiers2
           * @returns {boolean}
           */
          function _modifiersMatch(modifiers1, modifiers2) {
              return modifiers1.sort().join(',') === modifiers2.sort().join(',');
          }

          /**
           * takes a key event and figures out what the modifiers are
           *
           * @param {Event} e
           * @returns {Array}
           */
          function _eventModifiers(e) {
              var modifiers = [];

              if (e.shiftKey) {
                  modifiers.push('shift');
              }

              if (e.altKey) {
                  modifiers.push('alt');
              }

              if (e.ctrlKey) {
                  modifiers.push('ctrl');
              }

              if (e.metaKey) {
                  modifiers.push('meta');
              }

              return modifiers;
          }

          /**
           * prevents default for this event
           *
           * @param {Event} e
           * @returns void
           */
          function _preventDefault(e) {
              if (e.preventDefault) {
                  e.preventDefault();
                  return;
              }

              e.returnValue = false;
          }

          /**
           * stops propogation for this event
           *
           * @param {Event} e
           * @returns void
           */
          function _stopPropagation(e) {
              if (e.stopPropagation) {
                  e.stopPropagation();
                  return;
              }

              e.cancelBubble = true;
          }

          /**
           * determines if the keycode specified is a modifier key or not
           *
           * @param {string} key
           * @returns {boolean}
           */
          function _isModifier(key) {
              return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
          }

          /**
           * reverses the map lookup so that we can look for specific keys
           * to see what can and can't use keypress
           *
           * @return {Object}
           */
          function _getReverseMap() {
              if (!_REVERSE_MAP) {
                  _REVERSE_MAP = {};
                  for (var key in _MAP) {

                      // pull out the numeric keypad from here cause keypress should
                      // be able to detect the keys from the character
                      if (key > 95 && key < 112) {
                          continue;
                      }

                      if (_MAP.hasOwnProperty(key)) {
                          _REVERSE_MAP[_MAP[key]] = key;
                      }
                  }
              }
              return _REVERSE_MAP;
          }

          /**
           * picks the best action based on the key combination
           *
           * @param {string} key - character for key
           * @param {Array} modifiers
           * @param {string=} action passed in
           */
          function _pickBestAction(key, modifiers, action) {

              // if no action was picked in we should try to pick the one
              // that we think would work best for this key
              if (!action) {
                  action = _getReverseMap()[key] ? 'keydown' : 'keypress';
              }

              // modifier keys don't work as expected with keypress,
              // switch to keydown
              if (action == 'keypress' && modifiers.length) {
                  action = 'keydown';
              }

              return action;
          }

          /**
           * Converts from a string key combination to an array
           *
           * @param  {string} combination like "command+shift+l"
           * @return {Array}
           */
          function _keysFromString(combination) {
              if (combination === '+') {
                  return ['+'];
              }

              combination = combination.replace(/\+{2}/g, '+plus');
              return combination.split('+');
          }

          /**
           * Gets info for a specific key combination
           *
           * @param  {string} combination key combination ("command+s" or "a" or "*")
           * @param  {string=} action
           * @returns {Object}
           */
          function _getKeyInfo(combination, action) {
              var keys;
              var key;
              var i;
              var modifiers = [];

              // take the keys from this pattern and figure out what the actual
              // pattern is all about
              keys = _keysFromString(combination);

              for (i = 0; i < keys.length; ++i) {
                  key = keys[i];

                  // normalize key names
                  if (_SPECIAL_ALIASES[key]) {
                      key = _SPECIAL_ALIASES[key];
                  }

                  // if this is not a keypress event then we should
                  // be smart about using shift keys
                  // this will only work for US keyboards however
                  if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                      key = _SHIFT_MAP[key];
                      modifiers.push('shift');
                  }

                  // if this key is a modifier then add it to the list of modifiers
                  if (_isModifier(key)) {
                      modifiers.push(key);
                  }
              }

              // depending on what the key combination is
              // we will try to pick the best event for it
              action = _pickBestAction(key, modifiers, action);

              return {
                  key: key,
                  modifiers: modifiers,
                  action: action
              };
          }

          function _belongsTo(element, ancestor) {
              if (element === null || element === document) {
                  return false;
              }

              if (element === ancestor) {
                  return true;
              }

              return _belongsTo(element.parentNode, ancestor);
          }

          function Mousetrap(targetElement) {
              var self = this;

              targetElement = targetElement || document;

              if (!(self instanceof Mousetrap)) {
                  return new Mousetrap(targetElement);
              }

              /**
               * element to attach key events to
               *
               * @type {Element}
               */
              self.target = targetElement;

              /**
               * a list of all the callbacks setup via Mousetrap.bind()
               *
               * @type {Object}
               */
              self._callbacks = {};

              /**
               * direct map of string combinations to callbacks used for trigger()
               *
               * @type {Object}
               */
              self._directMap = {};

              /**
               * keeps track of what level each sequence is at since multiple
               * sequences can start out with the same sequence
               *
               * @type {Object}
               */
              var _sequenceLevels = {};

              /**
               * variable to store the setTimeout call
               *
               * @type {null|number}
               */
              var _resetTimer;

              /**
               * temporary state where we will ignore the next keyup
               *
               * @type {boolean|string}
               */
              var _ignoreNextKeyup = false;

              /**
               * temporary state where we will ignore the next keypress
               *
               * @type {boolean}
               */
              var _ignoreNextKeypress = false;

              /**
               * are we currently inside of a sequence?
               * type of action ("keyup" or "keydown" or "keypress") or false
               *
               * @type {boolean|string}
               */
              var _nextExpectedAction = false;

              /**
               * resets all sequence counters except for the ones passed in
               *
               * @param {Object} doNotReset
               * @returns void
               */
              function _resetSequences(doNotReset) {
                  doNotReset = doNotReset || {};

                  var activeSequences = false,
                      key;

                  for (key in _sequenceLevels) {
                      if (doNotReset[key]) {
                          activeSequences = true;
                          continue;
                      }
                      _sequenceLevels[key] = 0;
                  }

                  if (!activeSequences) {
                      _nextExpectedAction = false;
                  }
              }

              /**
               * finds all callbacks that match based on the keycode, modifiers,
               * and action
               *
               * @param {string} character
               * @param {Array} modifiers
               * @param {Event|Object} e
               * @param {string=} sequenceName - name of the sequence we are looking for
               * @param {string=} combination
               * @param {number=} level
               * @returns {Array}
               */
              function _getMatches(character, modifiers, e, sequenceName, combination, level) {
                  var i;
                  var callback;
                  var matches = [];
                  var action = e.type;

                  // if there are no events related to this keycode
                  if (!self._callbacks[character]) {
                      return [];
                  }

                  // if a modifier key is coming up on its own we should allow it
                  if (action == 'keyup' && _isModifier(character)) {
                      modifiers = [character];
                  }

                  // loop through all callbacks for the key that was pressed
                  // and see if any of them match
                  for (i = 0; i < self._callbacks[character].length; ++i) {
                      callback = self._callbacks[character][i];

                      // if a sequence name is not specified, but this is a sequence at
                      // the wrong level then move onto the next match
                      if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                          continue;
                      }

                      // if the action we are looking for doesn't match the action we got
                      // then we should keep going
                      if (action != callback.action) {
                          continue;
                      }

                      // if this is a keypress event and the meta key and control key
                      // are not pressed that means that we need to only look at the
                      // character, otherwise check the modifiers as well
                      //
                      // chrome will not fire a keypress if meta or control is down
                      // safari will fire a keypress if meta or meta+shift is down
                      // firefox will fire a keypress if meta or control is down
                      if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                          // when you bind a combination or sequence a second time it
                          // should overwrite the first one.  if a sequenceName or
                          // combination is specified in this call it does just that
                          //
                          // @todo make deleting its own method?
                          var deleteCombo = !sequenceName && callback.combo == combination;
                          var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                          if (deleteCombo || deleteSequence) {
                              self._callbacks[character].splice(i, 1);
                          }

                          matches.push(callback);
                      }
                  }

                  return matches;
              }

              /**
               * actually calls the callback function
               *
               * if your callback function returns false this will use the jquery
               * convention - prevent default and stop propogation on the event
               *
               * @param {Function} callback
               * @param {Event} e
               * @returns void
               */
              function _fireCallback(callback, e, combo, sequence) {

                  // if this event should not happen stop here
                  if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                      return;
                  }

                  if (callback(e, combo) === false) {
                      _preventDefault(e);
                      _stopPropagation(e);
                  }
              }

              /**
               * handles a character key event
               *
               * @param {string} character
               * @param {Array} modifiers
               * @param {Event} e
               * @returns void
               */
              self._handleKey = function(character, modifiers, e) {
                  var callbacks = _getMatches(character, modifiers, e);
                  var i;
                  var doNotReset = {};
                  var maxLevel = 0;
                  var processedSequenceCallback = false;

                  // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
                  for (i = 0; i < callbacks.length; ++i) {
                      if (callbacks[i].seq) {
                          maxLevel = Math.max(maxLevel, callbacks[i].level);
                      }
                  }

                  // loop through matching callbacks for this key event
                  for (i = 0; i < callbacks.length; ++i) {

                      // fire for all sequence callbacks
                      // this is because if for example you have multiple sequences
                      // bound such as "g i" and "g t" they both need to fire the
                      // callback for matching g cause otherwise you can only ever
                      // match the first one
                      if (callbacks[i].seq) {

                          // only fire callbacks for the maxLevel to prevent
                          // subsequences from also firing
                          //
                          // for example 'a option b' should not cause 'option b' to fire
                          // even though 'option b' is part of the other sequence
                          //
                          // any sequences that do not match here will be discarded
                          // below by the _resetSequences call
                          if (callbacks[i].level != maxLevel) {
                              continue;
                          }

                          processedSequenceCallback = true;

                          // keep a list of which sequences were matches for later
                          doNotReset[callbacks[i].seq] = 1;
                          _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                          continue;
                      }

                      // if there were no sequence matches but we are still here
                      // that means this is a regular match so we should fire that
                      if (!processedSequenceCallback) {
                          _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                      }
                  }

                  // if the key you pressed matches the type of sequence without
                  // being a modifier (ie "keyup" or "keypress") then we should
                  // reset all sequences that were not matched by this event
                  //
                  // this is so, for example, if you have the sequence "h a t" and you
                  // type "h e a r t" it does not match.  in this case the "e" will
                  // cause the sequence to reset
                  //
                  // modifier keys are ignored because you can have a sequence
                  // that contains modifiers such as "enter ctrl+space" and in most
                  // cases the modifier key will be pressed before the next key
                  //
                  // also if you have a sequence such as "ctrl+b a" then pressing the
                  // "b" key will trigger a "keypress" and a "keydown"
                  //
                  // the "keydown" is expected when there is a modifier, but the
                  // "keypress" ends up matching the _nextExpectedAction since it occurs
                  // after and that causes the sequence to reset
                  //
                  // we ignore keypresses in a sequence that directly follow a keydown
                  // for the same character
                  var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
                  if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                      _resetSequences(doNotReset);
                  }

                  _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
              };

              /**
               * handles a keydown event
               *
               * @param {Event} e
               * @returns void
               */
              function _handleKeyEvent(e) {

                  // normalize e.which for key events
                  // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
                  if (typeof e.which !== 'number') {
                      e.which = e.keyCode;
                  }

                  var character = _characterFromEvent(e);

                  // no character found then stop
                  if (!character) {
                      return;
                  }

                  // need to use === for the character check because the character can be 0
                  if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                      _ignoreNextKeyup = false;
                      return;
                  }

                  self.handleKey(character, _eventModifiers(e), e);
              }

              /**
               * called to set a 1 second timeout on the specified sequence
               *
               * this is so after each key press in the sequence you have 1 second
               * to press the next key before you have to start over
               *
               * @returns void
               */
              function _resetSequenceTimer() {
                  clearTimeout(_resetTimer);
                  _resetTimer = setTimeout(_resetSequences, 1000);
              }

              /**
               * binds a key sequence to an event
               *
               * @param {string} combo - combo specified in bind call
               * @param {Array} keys
               * @param {Function} callback
               * @param {string=} action
               * @returns void
               */
              function _bindSequence(combo, keys, callback, action) {

                  // start off by adding a sequence level record for this combination
                  // and setting the level to 0
                  _sequenceLevels[combo] = 0;

                  /**
                   * callback to increase the sequence level for this sequence and reset
                   * all other sequences that were active
                   *
                   * @param {string} nextAction
                   * @returns {Function}
                   */
                  function _increaseSequence(nextAction) {
                      return function() {
                          _nextExpectedAction = nextAction;
                          ++_sequenceLevels[combo];
                          _resetSequenceTimer();
                      };
                  }

                  /**
                   * wraps the specified callback inside of another function in order
                   * to reset all sequence counters as soon as this sequence is done
                   *
                   * @param {Event} e
                   * @returns void
                   */
                  function _callbackAndReset(e) {
                      _fireCallback(callback, e, combo);

                      // we should ignore the next key up if the action is key down
                      // or keypress.  this is so if you finish a sequence and
                      // release the key the final key will not trigger a keyup
                      if (action !== 'keyup') {
                          _ignoreNextKeyup = _characterFromEvent(e);
                      }

                      // weird race condition if a sequence ends with the key
                      // another sequence begins with
                      setTimeout(_resetSequences, 10);
                  }

                  // loop through keys one at a time and bind the appropriate callback
                  // function.  for any key leading up to the final one it should
                  // increase the sequence. after the final, it should reset all sequences
                  //
                  // if an action is specified in the original bind call then that will
                  // be used throughout.  otherwise we will pass the action that the
                  // next key in the sequence should match.  this allows a sequence
                  // to mix and match keypress and keydown events depending on which
                  // ones are better suited to the key provided
                  for (var i = 0; i < keys.length; ++i) {
                      var isFinal = i + 1 === keys.length;
                      var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                      _bindSingle(keys[i], wrappedCallback, action, combo, i);
                  }
              }

              /**
               * binds a single keyboard combination
               *
               * @param {string} combination
               * @param {Function} callback
               * @param {string=} action
               * @param {string=} sequenceName - name of sequence if part of sequence
               * @param {number=} level - what part of the sequence the command is
               * @returns void
               */
              function _bindSingle(combination, callback, action, sequenceName, level) {

                  // store a direct mapped reference for use with Mousetrap.trigger
                  self._directMap[combination + ':' + action] = callback;

                  // make sure multiple spaces in a row become a single space
                  combination = combination.replace(/\s+/g, ' ');

                  var sequence = combination.split(' ');
                  var info;

                  // if this pattern is a sequence of keys then run through this method
                  // to reprocess each pattern one key at a time
                  if (sequence.length > 1) {
                      _bindSequence(combination, sequence, callback, action);
                      return;
                  }

                  info = _getKeyInfo(combination, action);

                  // make sure to initialize array if this is the first time
                  // a callback is added for this key
                  self._callbacks[info.key] = self._callbacks[info.key] || [];

                  // remove an existing match if there is one
                  _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

                  // add this call back to the array
                  // if it is a sequence put it at the beginning
                  // if not put it at the end
                  //
                  // this is important because the way these are processed expects
                  // the sequence ones to come first
                  self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                      callback: callback,
                      modifiers: info.modifiers,
                      action: info.action,
                      seq: sequenceName,
                      level: level,
                      combo: combination
                  });
              }

              /**
               * binds multiple combinations to the same callback
               *
               * @param {Array} combinations
               * @param {Function} callback
               * @param {string|undefined} action
               * @returns void
               */
              self._bindMultiple = function(combinations, callback, action) {
                  for (var i = 0; i < combinations.length; ++i) {
                      _bindSingle(combinations[i], callback, action);
                  }
              };

              // start!
              _addEvent(targetElement, 'keypress', _handleKeyEvent);
              _addEvent(targetElement, 'keydown', _handleKeyEvent);
              _addEvent(targetElement, 'keyup', _handleKeyEvent);
          }

          /**
           * binds an event to mousetrap
           *
           * can be a single key, a combination of keys separated with +,
           * an array of keys, or a sequence of keys separated by spaces
           *
           * be sure to list the modifier keys first to make sure that the
           * correct key ends up getting bound (the last key in the pattern)
           *
           * @param {string|Array} keys
           * @param {Function} callback
           * @param {string=} action - 'keypress', 'keydown', or 'keyup'
           * @returns void
           */
          Mousetrap.prototype.bind = function(keys, callback, action) {
              var self = this;
              keys = keys instanceof Array ? keys : [keys];
              self._bindMultiple.call(self, keys, callback, action);
              return self;
          };

          /**
           * unbinds an event to mousetrap
           *
           * the unbinding sets the callback function of the specified key combo
           * to an empty function and deletes the corresponding key in the
           * _directMap dict.
           *
           * TODO: actually remove this from the _callbacks dictionary instead
           * of binding an empty function
           *
           * the keycombo+action has to be exactly the same as
           * it was defined in the bind method
           *
           * @param {string|Array} keys
           * @param {string} action
           * @returns void
           */
          Mousetrap.prototype.unbind = function(keys, action) {
              var self = this;
              return self.bind.call(self, keys, function() {}, action);
          };

          /**
           * triggers an event that has already been bound
           *
           * @param {string} keys
           * @param {string=} action
           * @returns void
           */
          Mousetrap.prototype.trigger = function(keys, action) {
              var self = this;
              if (self._directMap[keys + ':' + action]) {
                  self._directMap[keys + ':' + action]({}, keys);
              }
              return self;
          };

          /**
           * resets the library back to its initial state.  this is useful
           * if you want to clear out the current keyboard shortcuts and bind
           * new ones - for example if you switch to another page
           *
           * @returns void
           */
          Mousetrap.prototype.reset = function() {
              var self = this;
              self._callbacks = {};
              self._directMap = {};
              return self;
          };

          /**
           * should we stop this event before firing off callbacks
           *
           * @param {Event} e
           * @param {Element} element
           * @return {boolean}
           */
          Mousetrap.prototype.stopCallback = function(e, element) {
              var self = this;

              // if the element has the class "mousetrap" then no need to stop
              if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
                  return false;
              }

              if (_belongsTo(element, self.target)) {
                  return false;
              }

              // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
              // not the initial event target in the shadow tree. Note that not all events cross the
              // shadow boundary.
              // For shadow trees with `mode: 'open'`, the initial event target is the first element in
              // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
              // target cannot be obtained.
              if ('composedPath' in e && typeof e.composedPath === 'function') {
                  // For open shadow trees, update `element` so that the following check works.
                  var initialEventTarget = e.composedPath()[0];
                  if (initialEventTarget !== e.target) {
                      element = initialEventTarget;
                  }
              }

              // stop for input, select, and textarea
              return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
          };

          /**
           * exposes _handleKey publicly so it can be overwritten by extensions
           */
          Mousetrap.prototype.handleKey = function() {
              var self = this;
              return self._handleKey.apply(self, arguments);
          };

          /**
           * allow custom key mappings
           */
          Mousetrap.addKeycodes = function(object) {
              for (var key in object) {
                  if (object.hasOwnProperty(key)) {
                      _MAP[key] = object[key];
                  }
              }
              _REVERSE_MAP = null;
          };

          /**
           * Init the global mousetrap functions
           *
           * This method is needed to allow the global mousetrap functions to work
           * now that mousetrap is a constructor function.
           */
          Mousetrap.init = function() {
              var documentMousetrap = Mousetrap(document);
              for (var method in documentMousetrap) {
                  if (method.charAt(0) !== '_') {
                      Mousetrap[method] = (function(method) {
                          return function() {
                              return documentMousetrap[method].apply(documentMousetrap, arguments);
                          };
                      } (method));
                  }
              }
          };

          Mousetrap.init();

          // expose mousetrap to the global object
          window.Mousetrap = Mousetrap;

          // expose as a common js module
          if (module.exports) {
              module.exports = Mousetrap;
          }

          // expose mousetrap as an AMD module
          if (typeof undefined$1 === 'function' && undefined$1.amd) {
              undefined$1(function() {
                  return Mousetrap;
              });
          }
      }) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);
      });

      function l(i){return i instanceof q$2&&(i=i.element),i.isPragmaElement||(i=j$2(i)),i}function h(t,e=100){if(!t)return console.error(`couldnt not evaluate if [${t}] is on screen`);t=l(t);let i=window.scrollY;return function(t,e={}){let i=t.offset(),n=i.top,o=i.top+t.rect().height;return n<=e.bot&&o>=e.top||n<=e.top&&o>=e.bot}(t,{top:i+e,bot:i+window.innerHeight-e})}function c(){return d.scrollTo(...arguments)}function p(t){return d.on("userScroll",t)}globalThis.lectorSpace=globalThis.lectorSpace||{};const d=J$2().createWires("scrollData","scrollTarget","scrolling").createEvents("scrollStart","userScroll","scroll","scrollEnd","userScrollEnd","newScrollTarget").define({scrollTo(t,i="smooth",n="center"){return this._selfScrolling=!0,j$2(t).scrollIntoView({block:"center",behavior:i,inline:n}),new Promise(((t,e)=>{this.onNext("scrollEnd",(()=>{setTimeout((()=>{this._selfScrolling=!1,t();}),10);}));}))}}).run((function(){let t=0,i=!1;document.addEventListener("scroll",(n=>{this.setScrollTarget(n.target),t=n.target===document?window.scrollY:j$2(n.target).scrollTop,i||(window.requestAnimationFrame((()=>{this.setScrollData([t,n]),i=!1;})),i=!0);}),!0);})).on("scrollTargetChange",(function(t,e){t!==e&&this.triggerEvent("newScrollTarget");})).on("scrollDataChange",(function(t,e){let i=e?t[0]-e[0]:void 0;this.triggerEvent("scroll",t[0],i,t[1]);})).on("scroll",(function(t,e,i){this.scrolling||(this.triggerEvent("scrollStart",t,e,i),this.scrolling=!0,this.onNext("scrollEnd",(()=>{this.scrolling=!1;})));})).on("scroll",(function(t,e,i){this._selfScrolling||(this.triggerEvent("userScroll",t,e,i),this._userScrollEndTimeout&&clearTimeout(this._userScrollEndTimeout),this._userScrollEndTimeout=setTimeout((n=>{this.triggerEvent("userScrollEnd",t,e,i);}),150)),this._scrollEndTimeout&&clearTimeout(this._scrollEndTimeout),this._scrollEndTimeout=setTimeout((n=>{this.triggerEvent("scrollEnd",t,e,i);}),50);})),g=["an","an","ap","di","dy","ec","eg","en","em","eo","ep","eu","id","is","my","ne","od","oo","ot","sy","ur","ur","zo","pto","pyl","acr","aer","agr","ana","ant","apo","aut","bar","bio","cac","cat","cen","cen","con","cub","cyn","dec","dek","dem","dia","dox","eco","ego","eme","eos","epi","erg","eso","eth","eur","exo","geo","gen","hem","hal","hen","hex","hod","hol","hor","hor","hyo","hyp","ide","idi","iso","kil","lei","lep","lip","log","meg","mei","men","mer","mes","mim","mis","mit","mne","mon","myx","nes","nom","oct","oed","oen","omm","ont","opt","pan","pam","par","ped","pin","pis","pol","por","pro","rhe","sei","sit","syn","syl","sym","tax","the","the","tom","ton","top","tox","tri","ulo","uro","uro","xen","xer","zon","zyg","psil","prot","pros","amph","anem","anti","anth","arct","astr","athl","auto","basi","bibl","briz","brom","brom","call","carp","carp","cata","chir","cine","cirr","clad","clav","coel","copr","cosm","crep","cris","crit","cten","cyan","cycl","cyst","deca","deka","delt","derm","dexi","dino","dipl","ecto","endo","engy","eoso","etho","ethi","ethm","ethn","etym","fant","glia","gram","gymn","haem","hapl","heli","hemi","hept","herp","heur","hipp","home","horm","hyal","hydr","hygr","hypn","icos","kine","lamp","leps","leuc","leuk","lith","metr","meta","micr","myri","myth","narc","naut","necr","nect","nema","neur","noth","noto","oeco","ogdo","olig","onom","ophi","orch","orth","pach","paed","pale","path","patr","pect","pent","pept","peri","petr","phae","phag","pher","phil","phob","phon","phor","phos","phot","phyl","phys","plac","plas","plec","plut","pneu","poie","pole","poli","poli","poly","raph","rhag","rhig","rhin","rhiz","rhod","sarc","scel","scop","sema","siph","soma","soph","stea","steg","sten","stig","stom","styl","tach","tars","taur","tele","tele","temn","tetr","than","thus","ther","thym","thyr","trag","trit","trop","xiph","proct","ptych","amphi","arche","archi","arche","arist","arthr","bathy","batho","blenn","blast","botan","brady","bront","calli","calyp","cardi","centr","ceram","cerat","chlor","chore","chrom","chron","chrys","clast","clist","cochl","corac","cotyl","crani","cross","crypt","dendr","dodec","dynam","ennea","gastr","graph","heter","homal","hyper","klept","lekan","macro","melan","meter","morph","nephr","nomad","odont","organ","osteo","palae","palin","peran","phleg","phloe","phren","phryn","phyll","plagi","platy","plesi","pleth","pleur","pogon","polem","potam","rhabd","rhomb","scaph","schem","schis","scler","scoli","scept","scyph","selen","solen","sperm","sphen","spher","stern","stich","stoch","taeni","techn","therm","thyre","traum","trema","trich","troch","troph","xanth","psych","archae","brachi","brachy","bronch","cathar","cephal","chelon","cleist","cosmet","cylind","dactyl","deuter","dogmat","erythr","galact","hendec","ichthy","mening","myrmec","omphal","opisth","opoter","ornith","ostrac","persic","phalar","phaner","phragm","plinth","prasin","presby","rhynch","scalen","strept","stroph","thalam","theori","trachy","trapez","tympan","aesthet","anthrop","branchi","cleithr","epistem","parthen","phalang","pharmac","porphyr","sacchar","sphinct","stalact","stalagm","thalass","oesophag","ophthalm","physalid","pentecost","treiskaidek"];function u(t){return t<=1?4:t<=7?2/6*(t-1)+4:t<=8?1*(t-7)+6:3/8*(t-8)+7}function m(t){let e=0,i=Ji(t.text);i.has("#Verb")&&(e+=.5),i.has("#Acronym")&&(e+=.8);let n=function(t){let e=t.length;if(e<5)return 0;for(let i of g){if(i.length>=e-3)return 0;if(i==t.substring(0,i.length))return i.length}return 0}(t.text);return n>1&&(e+=n/10),Math.min(1,Math.min(e,1))}function f(t,e){return u(t.text.length)*(e+1)}function C(t){return 1e3/(t/60*4.7)}class w extends q$2{constructor(){super(...arguments),this.isShadowPragma=!0;}as(t){if(!t)return;let i=(t=j$2(t)).cloneNode(!0);return t.html(" ").attachShadow({mode:"open"}),t.shadowRoot.appendChild(i),super.as(t)}get shadow(){return j$2(this.element.shadowRoot.firstChild)}injectStyle(t,e){return this.element.shadowRoot.appendChild(Y$2`<style id='${e||M$2.rk5()}-styles'>${t}</style>`),this}injectStyles(...t){for(let e of t)this.injectStyle(e);return this}}function b(){return new w(...arguments)}class v{constructor(t){let e=null,i=null;const n=new Promise(((n,o)=>(e=o,i=n,t(n,o))));return n.cancel=e,n.resolve=i,n}}class x{constructor(t){this.afkChain=new Map,this.activeChain=new Map,this.idleTime=t,this.isIdle=!1;["load","mousemove"].forEach((t=>{window.addEventListener(t,(t=>this.reset()));}));}generateActionKey(t){return null==t&&(t=this.afkChain.size),t}onAfk(t,e){return this.afkChain.set(this.generateActionKey(e),t),this}onActive(t,e){return this.activeChain.set(this.generateActionKey(e),t),this}reset(){return clearTimeout(this.t),this.t=setTimeout((()=>this.idle()),this.idleTime),this.active(),this}idle(){return !this.isIdle&&(this.isIdle=!0,y(this.afkChain),this)}active(){return !!this.isIdle&&(this.isIdle=!1,y(this.activeChain),this)}}function y(t){for(const[e,i]of t.entries())i();}function k(t,e){if("SCRIPT"!=t.nodeName&&"STYLE"!=t.nodeName){e(t);for(var i=0;i<t.childNodes.length;i++)k(t.childNodes[i],e);}}function L(t){return t.addClass("wfying"),new Promise((e=>{console.time("wfying...");var i=[];function n(t,e){null!==t&&e.parentNode.insertBefore(t,e);}function o(t){t.parentNode.removeChild(t);}function s(t){if(!(e=t)||""===e.trim())return null;var e,i=document.createElement("w");return i.appendChild(r(t)),i}function r(t){return document.createTextNode(t)}k(t,(function(t){3==t.nodeType&&i.push(t);}));for(var a=0;a<i.length;a++){var l=i[a],h=l.nodeValue.split(" ");n(s(h[0]),l);for(var c=1;c<h.length;c++)n(r(" "),l),n(s(h[c]),l);o(l);}t.removeClass("wfying"),e(),console.timeEnd("wfying...");}))}const T=8,M=8;function _(t=0,e=0){return e>T?t:t*(T-e)/M+t}function P(t,e,i){for(var n=[t],o=t;o<e;)n.push(o+=i||1);return n}function H(t,i){let n=(i=j$2(i)).rect().x,o=i.rect().y,s=i.rect().width,r=i.rect().height,a=n<t.x&&n+s>t.x,l=o<t.y&&o+r>t.y;return a&&l}function E(t){return t.css("opacity 0"),t.addClass("collapsed"),t.setData({collapsed:!0}),t}function S(t){(t=j$2(t)).show(),anime({targets:t,opacity:1,duration:110,easing:"easeInOutSine"}),t.removeClass("collapsed"),t.setData({collapsed:!1});}function V(t,e=0){if(!t)return !1;var i=t.getBoundingClientRect(),n=i.top,o=i.height;t=t.parentNode;if(i.bottom<0)return !1;if(n>document.documentElement.clientHeight)return !1;do{if(!t.getBoundingClientRect)return;if(n<=(i=t.getBoundingClientRect()).bottom==!1)return !1;if(n+o<=i.top)return !1;t=t.parentNode;}while(t!=document.body);return !0}function F(t){return t&&t.parent&&!V(t.element)?F(t.parent):t}var U=Object.freeze({__proto__:null,PinkyPromise:v,Idle:x,range:P,isClickWithin:H,collapse:E,expand:S,fadeTo:function(t,i,n=500){return (t=j$2(t)).css(`\n    transition opacity ${n}ms \n    opacity ${i}\n  `),new Promise((e=>{setTimeout((()=>{0==i?t.hide():t.show(),e();}),n);}))},visibleY:V,firstVisibleParent:F,isOnScreen:h,isMostlyInScreen:function(t,e=.5){return t?h(t=l(t),e*t.rect().height):console.error(`couldnt not evaluate if [${t}] is on screen`)},scrollTo:c,onScroll:p,_scroller:d,crush:u,generateDifficultyIndex:m,wordValue:f,charsMsAt:C,_shadow:b,ShadowPragma:w,wfy:L,airway:_});class Z extends q$2{constructor(){super(arguments),this.isPragmaLector=!0,this.createEvents("load","beforeRead","read","pause"),this.on("load",(()=>this._loaded=!0)),this.async=J$2().define({async beforeRead(){},async beforeSummon(){}});}whenLoad(){return new Promise(((t,e)=>{this._loaded?t(this):this.on("load",(()=>t(this)));}))}appendToRoot(...t){for(let e of t)this.root.appendChild(e);return this}get root(){let t=this.element.getRootNode();return t===document?document.body:t}get lector(){return this}get mark(){return this._mark}set mark(t){this.adopt(t),this._mark=t;}get settings(){return this._settings}set settings(t){this.adopt(t),this._settings=t;}get isReading(){return this.w.isReading}get currentWord(){return this.w.currentWord}get currentParent(){return this.currentWord.parent}connectTo(t){return this.w=t,this.add(t),this}removeWord(t){let e=this.w.get(t);console.log("removing",t,e),e?.currentWord,this.currentWord,this.w.remove(t);}addWord(t,e=!1){return t.value=t.value??0,this.w.add(t),this}toggle(){return this.isReading?this.pause():this.read()}async read(){return this.w.hasKids?(await this.async.beforeRead(),new Promise((async(t,e)=>{await this.summonToCurrentWord(),this.w.read(!0),this.triggerEvent("read"),t();}))):console.error("nothing to read")}summonToCurrentWord(){return this.resetMark()}async summonTo(t=0){return await this.resetMark(),0!==t&&(this.currentParent.value+=t),this.currentWord?this.currentWord.summon():new Promise((t=>t()))}async resetMark(){return await this.async.beforeSummon(),new Promise((t=>{if(this._resettingMark)return t();this._resettingMark=!0,this.whenLoad().then((()=>{this.currentWord&&this.currentWord.getData("wordAtom")&&this.currentWord.summon().then((e=>{this._resettingMark=!1,t(e);}));}));}))}goToNext(){this.summonTo(1);}goToPre(){this.summonTo(-1);}pause(){return this.triggerEvent("pause"),this.w.pause()}setFont(t){this.w.css(`font-family ${t}`);}}class z extends q$2{constructor(t){super(t),this.isPragmaWord=!0,this.do((function(){this.hasKids&&this.parent&&(this.parent.value=this.key);}));}destroy(){return null}get lector(){if(this.parent)return this.parent.lector;M$2.throwSoft("could not find lector for");}get txt(){return this.text}get index(){return parseInt(this.key)}get mark(){return this.parent?this.parent.mark:null}set mark(t){return this.parent&&(this.parent.mark=t),null}get isReading(){return null!=this.currentPromise}get currentWord(){if(!this.hasKids)return this;let t=this.get(this.value);return t?t.currentWord:M$2.throwSoft(`Could not find current Word of ${this.key}`)}getFromBottom(t){return this.get(this.kidsum-t)}sibling(t){if(!this.parent)return null;let e=this.parent.get(this.index+t);return e||("function"!=typeof this.parent.sibling?null:t<0?this.parent.sibling(-1)?.getFromBottom(t):this.parent.sibling(1)?.get(t))}get next(){return this.sibling(1)}get pre(){return this.sibling(-1)}isInTheSameLine(t){return null!=this.sibling(t)&&(this.sibling(t).top-this.top)**2<10}get isFirstInLine(){return !this.isInTheSameLine(-1)}get isLastInLine(){return !this.isInTheSameLine(1)}time(t=250){return C(t)*f(this,m(this))}pause(){return new v((t=>{this.currentPromise?(this.currentPromise.catch((e=>{this.mark.pause().catch((t=>{console.warn("prevent pause event from bubbling. Chill on the keyboard bro",t);})).then((()=>{this.currentPromise=null,t("done pausing");}));})),this.currentPromise.cancel("pause")):t("already paused");}))}set currentPromise(t){if(this.parent)return this.parent.currentPromise=t;this.currentPromiseVal=new v(((e,i)=>{t.catch((t=>{console.warn(t);})).then((()=>{e(),this.currentPromiseVal=null;}));}));}get currentPromise(){return this.parent?this.parent.currentPromise:this.currentPromiseVal}promiseRead(t){return this.currentPromise=new v(((e,i)=>{function n(){let n=t?500:null;console.time(this.text),this.mark.guide(this,n).then((()=>{console.timeEnd(this.text),this.parent.value=this.index+1,e(` read [ ${this.text} ] `);})).catch((t=>{console.warn("rejected promise read",t),i(t);}));}let o=this;t?new Promise((t=>{t();})).then((t=>{n.bind(o)();})):n.bind(o)();})),this.currentPromise}read(t=!1){return this.currentPromise?new Promise(((t,e)=>{t("already reading");})):this.hasKids?this.currentWord?this.currentWord.read(t):(this.next.value=0,this.next.read()):(this.promiseRead(t),new v((t=>{this.currentPromise.then((()=>(t(),this.currentPromise=null,this.parent.read()))).catch((e=>t("pause")));})))}summon(t=!1){return new v((e=>{this.parent.pause().catch((()=>console.log("no need to pause"))).then((()=>{this.mark.mark(this,50,!1).then((()=>{e();})),t||(this.parent.value=this.index);}));}))}}const $={hotbox:t=>`background ${t}`,underneath:t=>` background transparent\n                        border-bottom 3px solid ${t}\n                        border-radius 4px`,faded:t=>`\n      background: rgb(255,255,255);\n      background: -moz-linear-gradient(90deg, rgba(255,255,255,0) 0%, ${t} 25%, ${t} 75%, rgba(255,255,255,0) 100%);\n      background: -webkit-linear-gradient(90deg, rgba(255,255,255,0) 0%, ${t} 25%, ${t} 75%, rgba(255,255,255,0) 100%);\n      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, ${t} 25%, ${t} 75%, rgba(255,255,255,0) 100%);\n    `};const I=(t,e=t._mode,i=t._color)=>{if(!i)return console.error("could not mode_ify");let n=function(t,e){return "border 0\n               border-radius 3px\n               z-index 10\n               opacity 1\n               mix-blend-mode darken;"+$[t](e)}(e=(e||"hotbox").toString().toLowerCase(),i);return t&&t.css(n),n},B={"#a8f19a":"Grass","#eddd6e":"Pasta","#edd1b0":"Floor","#96adfc":"Water"},A={HotBox:"marker is a block",Underneath:"marker is slim and underneat the words",Faded:"marker's boundaries loose their essence"},D={color:"#eddd6e",mode:"Faded",fovea:4,wpm:250,page:1,scale:100};class W extends q$2{constructor(){super("marker"),this.element=j$2("marker"),this.hide(),this.css("\n  position absolute\n  outline solid 0px red\n  background-color #ffdf6c\n  width 10px\n  height 20px\n  z-index 10\n  opacity 1\n  mix-blend-mode darken\n  border-radius 3px\n"),this.currentlyMarking=null,window.addEventListener("resize",(()=>{this.mark(this.last_marked,0);})),this.runningFor=0,this.pausing=!1,this.setColor(D.color),this.setMode(D.mode),this.setWpm(D.wpm),this.setFovea(D.fovea),this.createEvents("changeLine","changeLine:down","changeLine:up","mark"),this.createWire("lastMark");}hide(){this._hidden||(this._hidden=!0,this.element.hide());}show(){this._hidden&&(this._hidden=!1,this.element.show());}set last_marked(t){this.value=t;}get last_marked(){return this.value}get settings(){return this.parent?this.parent.settings:console.error("mark has no settings attached")}get cw(){return 30*this._fovea}get wpm(){return this._wpm||260}setMode(t){this._mode=t,I(this);}setWpm(t){this._wpm=t;}setColor(t){this._color=t,I(this);}setFovea(t){this._fovea=t,this.css(`width ${this.cw}px`);}pause(){return new Promise(((t,e)=>{if(this.pausing)return e("already pausing");if(this.pausing=!0,this.currentlyMarking&&this.current_anime&&this.last_marked){let i=this.last_marked;this.runningFor=0,this.current_anime.complete(),this.current_anime.remove("marker"),this.mark(i,80,!1).then((()=>{t("paused");})).catch((t=>{e("could not mark");})).then((t=>{this.pausing=!1;}));}}))}_compareBlueprintsAndTriggerEvents(t,e){t&&e&&(t.top+t.height<e.top?(this.triggerEvent("changeLine"),this.triggerEvent("changeLine:down")):t.top>e.top+e.height&&(this.triggerEvent("changeLine"),this.triggerEvent("changeLine:up")));}_correctBlueprint(t,e){console.time("correcting blueprint");let i=this.correctBlueprint(t,e);return console.timeEnd("correcting blueprint"),i}moveTo(t,e,i=(()=>{}),n=!0){return this.show(),this.currentlyMarking?new Promise(((t,e)=>t())):new Promise(((o,s)=>{n&&(t=this._correctBlueprint(t,this.lastMark)),this.currentlyMarking=t,this.triggerEvent("beforeMark",t),this.current_anime=anime({targets:this.element,left:t.left,top:t.top,height:t.height,width:t.width,easing:t.ease||"easeInOutExpo",duration:e,complete:e=>{this.triggerEvent("mark",t),this._compareBlueprintsAndTriggerEvents(this.lastMark,t),this.lastMark=this.currentlyMarking,this.currentlyMarking=null,i(),o();}});}))}mark(e,i=200,n=!1,o="easeInOutExpo",s=!1){if(!(e instanceof q$2))return new Promise((t=>{console.warn("cannot mark"),t("error");}));let r=n?e.width+5:this.cw;return this.moveTo({top:e.top,left:e.x(r),height:e.height,width:r,ease:o},i,(()=>{this.last_marked=e;}),s)}guide(e,i){return e instanceof q$2?new v(((t,n)=>{let o=e.isFirstInLine?"easeInOutCubic":"linear";return this.moveTo({top:e.top,left:e.x(this.width)-e.width/2,height:e.height,width:this.cw,ease:o},i||this.calcDuration(e,1)).then((()=>{this.last_marked=e,this.runningFor+=1,this.mark(e,this.calcDuration(e,2),!1,"linear",!0).then((()=>{t();}));}))})):new Promise(((t,e)=>{console.warn("cannot guide thru"),e("error");}))}calcDuration(e,i=1){if(!(e instanceof q$2))return this.throw(`Could not calculate marking duration for [${e}] since it does not appear to be a Pragma Object`);if(1!=i&&2!=i)return this.throw(`Could not calculate duration for ${e.text} since dw was not 1 or 2`);if(e.isFirstInLine)return Math.max(80,650-this.wpm);if(!this.last_marked)return 0;const n=1==i?.4:.6;let o=(1==i?this.last_marked:e).time(this.wpm);return [t=>t*n,_].forEach((t=>{o=t(o,this.runningFor);})),o}}var N={"arrow-down":'<svg width="78" height="42" viewBox="0 0 78 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M38.7444 41.8242L0.316898 5.9643L5.69674 0.943914L38.7444 31.7834L71.792 0.94392L77.1719 5.96431L38.7444 41.8242Z" fill="white"/>\n</svg>\n',"zoomout-white-af":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3711H6.22266V12.4452H16.593V10.3711Z" fill="white"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407V20.7407Z" fill="white"/>\n</svg>\n',"Underneath-icon":'<svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M40 23.375H0" stroke="white" stroke-width="2.5"/>\n<path d="M13.945 9.34375H16.1712L17 13.455L17.2762 15.795H17.5037L17.845 13.455L18.82 9.34375H21.03L22.0537 13.455L22.395 15.795H22.59L22.8662 13.455L23.76 9.34375H25.84L23.76 17.875H21.2737L20.315 13.715L20.0062 11.4238H19.7787L19.47 13.715L18.5112 17.875H16.025L13.945 9.34375Z" fill="white"/>\n</svg>',clickBoat:'<svg width="365" height="143" viewBox="0 0 365 143" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line x1="4.32031" y1="13.5" x2="131.017" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="147.859" y1="13.5" x2="274.556" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="291.398" y1="13.5" x2="361.5" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="3.5" y1="97.5" x2="185.972" y2="97.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="207.734" y1="97.5" x2="361.498" y2="97.5" stroke="#2B6CCE" stroke-width="7" stroke-linecap="round"/>\n<line x1="3.5" y1="139.5" x2="236.826" y2="139.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="4.32031" y1="55.5" x2="140.86" y2="55.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="158.523" y1="55.5" x2="361.501" y2="55.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<rect x="31.168" width="99.2472" height="26" rx="5" fill="#A6F29A"/>\n<path d="M319.32 130.43C318.449 129.183 317.578 127.001 315.836 124.194C314.965 122.635 312.352 119.517 311.481 118.27C310.9 117.022 310.9 116.399 311.191 115.152C311.481 113.281 313.223 111.722 315.256 111.722C316.707 111.722 318.159 112.969 319.32 113.904C319.901 114.528 320.772 115.775 321.353 116.399C321.933 117.022 321.933 117.334 322.514 117.958C323.095 118.893 323.385 119.517 323.095 118.27C322.804 116.711 322.514 114.216 321.933 111.722C321.643 109.851 321.353 109.539 321.062 108.292C320.772 106.733 320.482 105.797 320.191 104.238C319.901 103.303 319.611 100.808 319.32 99.5608C319.03 98.0017 319.03 95.1953 320.191 93.9481C321.062 93.0126 322.804 92.7008 323.966 93.3244C325.417 94.2599 326.289 96.4426 326.579 97.3781C327.16 98.9371 327.74 101.12 328.031 103.614C328.611 106.733 329.482 111.41 329.482 112.345C329.482 111.098 329.192 108.915 329.482 107.668C329.773 106.733 330.353 105.485 331.515 105.173C332.386 104.862 333.257 104.862 334.128 104.862C334.999 105.173 335.87 105.797 336.45 106.421C337.612 108.292 337.612 112.345 337.612 112.033C337.902 110.786 337.902 108.292 338.483 107.044C338.773 106.421 339.935 105.797 340.515 105.485C341.386 105.173 342.548 105.173 343.419 105.485C343.999 105.485 345.161 106.421 345.451 107.044C346.032 107.98 346.322 111.098 346.612 112.345C346.612 112.657 346.903 111.098 347.483 110.162C348.645 108.292 352.71 107.668 353 112.033C353 114.216 353 113.904 353 115.463C353 117.022 353 117.958 353 119.205C353 120.452 352.71 123.259 352.419 124.506C352.129 125.441 351.258 127.624 350.387 128.871C350.387 128.871 347.193 132.613 346.903 134.484C346.612 136.355 346.612 136.355 346.612 137.602C346.612 138.85 346.903 140.409 346.903 140.409C346.903 140.409 344.58 140.72 343.419 140.409C342.257 140.097 340.806 137.914 340.515 136.979C339.935 136.043 339.064 136.043 338.483 136.979C337.902 138.226 336.45 140.409 335.289 140.409C333.257 140.72 329.192 140.409 326.289 140.409C326.289 140.409 326.869 137.29 325.708 136.043C324.837 135.108 323.385 133.549 322.514 132.613L319.32 130.43Z" fill="white"/>\n<path d="M319.32 130.43C318.449 129.183 317.578 127.001 315.836 124.194C314.965 122.635 312.352 119.517 311.481 118.27C310.9 117.022 310.9 116.399 311.191 115.152C311.481 113.281 313.223 111.722 315.256 111.722C316.707 111.722 318.159 112.969 319.32 113.904C319.901 114.528 320.772 115.775 321.353 116.399C321.933 117.022 321.933 117.334 322.514 117.958C323.095 118.893 323.385 119.517 323.095 118.27C322.804 116.711 322.514 114.216 321.933 111.722C321.643 109.851 321.353 109.539 321.062 108.292C320.772 106.733 320.482 105.797 320.191 104.238C319.901 103.303 319.611 100.808 319.32 99.5608C319.03 98.0017 319.03 95.1953 320.191 93.9481C321.062 93.0126 322.804 92.7008 323.966 93.3244C325.417 94.2599 326.289 96.4426 326.579 97.3781C327.16 98.9371 327.74 101.12 328.031 103.614C328.611 106.733 329.482 111.41 329.482 112.345C329.482 111.098 329.192 108.915 329.482 107.668C329.773 106.733 330.353 105.485 331.515 105.173C332.386 104.862 333.257 104.862 334.128 104.862C334.999 105.173 335.87 105.797 336.45 106.421C337.612 108.292 337.612 112.345 337.612 112.033C337.902 110.786 337.902 108.292 338.483 107.044C338.773 106.421 339.935 105.797 340.515 105.485C341.386 105.173 342.548 105.173 343.419 105.485C343.999 105.485 345.161 106.421 345.451 107.044C346.032 107.98 346.322 111.098 346.612 112.345C346.612 112.657 346.903 111.098 347.483 110.162C348.645 108.292 352.71 107.668 353 112.033C353 114.216 353 113.904 353 115.463C353 117.022 353 117.958 353 119.205C353 120.452 352.71 123.259 352.419 124.506C352.129 125.441 351.258 127.624 350.387 128.871C350.387 128.871 347.193 132.613 346.903 134.484C346.612 136.355 346.612 136.355 346.612 137.602C346.612 138.85 346.903 140.409 346.903 140.409C346.903 140.409 344.58 140.72 343.419 140.409C342.257 140.097 340.806 137.914 340.515 136.979C339.935 136.043 339.064 136.043 338.483 136.979C337.902 138.226 336.45 140.409 335.289 140.409C333.257 140.72 329.192 140.409 326.289 140.409C326.289 140.409 326.869 137.29 325.708 136.043C324.837 135.108 323.385 133.549 322.514 132.613L319.32 130.43Z" stroke="black" stroke-width="4.50615" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M343.418 131.367V120.766" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n<path d="M337.615 131.367L337.324 120.766" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n<path d="M331.805 120.766V131.367" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n</svg>\n',"mode-icon":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M22.75 3.5H5.25C4.78603 3.50053 4.34122 3.68508 4.01315 4.01315C3.68508 4.34122 3.50053 4.78603 3.5 5.25V22.75C3.50053 23.214 3.68508 23.6588 4.01315 23.9868C4.34122 24.3149 4.78603 24.4995 5.25 24.5H22.75C23.214 24.4995 23.6588 24.3149 23.9868 23.9868C24.3149 23.6588 24.4995 23.214 24.5 22.75V5.25C24.4995 4.78603 24.3149 4.34122 23.9868 4.01315C23.6588 3.68508 23.214 3.50053 22.75 3.5ZM19.25 22.75V19.25H15.75V22.75H12.25V19.25H8.75V15.75H12.25V12.25H8.75V8.75H12.25V5.25H15.75V8.75H19.25V5.25H22.75V22.75H19.25Z" fill="#909090"/>\n<path d="M15.75 8.75H12.25V12.25H15.75V8.75Z" fill="#909090"/>\n<path d="M15.75 15.75H12.25V19.25H15.75V15.75Z" fill="#909090"/>\n<path d="M19.25 12.25H15.75V15.75H19.25V12.25Z" fill="#909090"/>\n</svg>',"back-icon":'<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.75117e-08 6.5L6.14035 7.3223e-08L7 0.91L1.7193 6.5L7 12.09L6.14035 13L7.75117e-08 6.5Z" fill="white"/>\n</svg>',"zoomin-white-af":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3708H12.4449V6.22266H10.3708V10.3708H6.22266V12.4449H10.3708V16.593H12.4449V12.4449H16.593V10.3708Z" fill="white"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407V20.7407Z" fill="white"/>\n</svg>\n',increase:'<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.5 0L17 7.89474L15.81 9L8.5 2.21053L1.19 9L0 7.89474L8.5 0Z" fill="white"/>\n</svg>',"spacebar-3d":'<svg width="267" height="64" viewBox="0 0 267 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="0.5" y="0.5" width="259.977" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="6.52344" y="4.5" width="259.977" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M71.3017 47.4182C69.3269 47.4182 67.6426 47.0465 66.2487 46.303C64.8547 45.5364 63.6699 44.4909 62.6941 43.1667L64.8547 41.3545C65.7143 42.4929 66.6668 43.3641 67.7123 43.9682C68.7577 44.549 69.9891 44.8394 71.4062 44.8394C73.1487 44.8394 74.4729 44.4212 75.379 43.5848C76.3082 42.7485 76.7729 41.6333 76.7729 40.2394C76.7729 39.0778 76.4244 38.1833 75.7274 37.5561C75.0305 36.9288 73.8805 36.4293 72.2774 36.0576L70.2911 35.6045C68.0608 35.0934 66.3532 34.3268 65.1683 33.3045C64.0067 32.2591 63.4259 30.7955 63.4259 28.9136C63.4259 27.8449 63.6234 26.8924 64.0183 26.0561C64.4133 25.2197 64.9593 24.5227 65.6562 23.9652C66.3764 23.4076 67.2244 22.9894 68.2002 22.7106C69.1992 22.4086 70.2911 22.2576 71.4759 22.2576C73.3113 22.2576 74.8795 22.5944 76.1805 23.2682C77.5047 23.9419 78.6199 24.9293 79.5259 26.2303L77.3305 27.8333C76.6567 26.904 75.8436 26.1722 74.8911 25.6379C73.9385 25.1035 72.7537 24.8364 71.3365 24.8364C69.78 24.8364 68.5487 25.1732 67.6426 25.847C66.7598 26.4975 66.3183 27.4848 66.3183 28.8091C66.3183 29.9707 66.6901 30.8535 67.4335 31.4576C68.2002 32.0384 69.3502 32.503 70.8835 32.8515L72.8699 33.3045C75.2628 33.8389 76.9936 34.652 78.0623 35.7439C79.131 36.8359 79.6653 38.2879 79.6653 40.1C79.6653 41.2152 79.4678 42.2258 79.0729 43.1318C78.7012 44.0379 78.1552 44.8045 77.435 45.4318C76.7148 46.0591 75.832 46.547 74.7865 46.8955C73.7643 47.2439 72.6027 47.4182 71.3017 47.4182ZM84.4415 29.0182H87.2293V31.9455H87.3687C87.8334 30.8071 88.5071 29.9707 89.3899 29.4364C90.296 28.8788 91.3763 28.6 92.6309 28.6C93.746 28.6 94.7566 28.8207 95.6627 29.2621C96.5687 29.7035 97.3354 30.3308 97.9627 31.1439C98.6132 31.9571 99.1011 32.9444 99.4263 34.1061C99.7748 35.2677 99.949 36.5687 99.949 38.0091C99.949 39.4495 99.7748 40.7505 99.4263 41.9121C99.1011 43.0737 98.6132 44.0611 97.9627 44.8742C97.3354 45.6874 96.5687 46.3146 95.6627 46.7561C94.7566 47.1975 93.746 47.4182 92.6309 47.4182C90.1915 47.4182 88.4374 46.303 87.3687 44.0727H87.2293V53.9697H84.4415V29.0182ZM91.8642 44.9091C93.444 44.9091 94.6869 44.4212 95.593 43.4455C96.499 42.4465 96.9521 41.1455 96.9521 39.5424V36.4758C96.9521 34.8727 96.499 33.5833 95.593 32.6076C94.6869 31.6086 93.444 31.1091 91.8642 31.1091C91.2369 31.1091 90.6329 31.202 90.0521 31.3879C89.4945 31.5505 89.0066 31.7828 88.5884 32.0848C88.1703 32.3869 87.8334 32.7586 87.5778 33.2C87.3455 33.6182 87.2293 34.0712 87.2293 34.5591V41.25C87.2293 41.8308 87.3455 42.3535 87.5778 42.8182C87.8334 43.2596 88.1703 43.6429 88.5884 43.9682C89.0066 44.2702 89.4945 44.5025 90.0521 44.6652C90.6329 44.8278 91.2369 44.9091 91.8642 44.9091ZM117.724 47C116.679 47 115.924 46.7212 115.459 46.1636C115.018 45.6061 114.739 44.9091 114.623 44.0727H114.449C114.054 45.1879 113.403 46.0242 112.497 46.5818C111.591 47.1394 110.511 47.4182 109.256 47.4182C107.351 47.4182 105.864 46.9303 104.796 45.9545C103.75 44.9788 103.228 43.6545 103.228 41.9818C103.228 40.2859 103.843 38.9848 105.074 38.0788C106.329 37.1727 108.269 36.7197 110.894 36.7197H114.449V34.9424C114.449 33.6646 114.1 32.6889 113.403 32.0152C112.706 31.3414 111.638 31.0045 110.197 31.0045C109.105 31.0045 108.188 31.2485 107.444 31.7364C106.724 32.2242 106.12 32.8747 105.632 33.6879L103.959 32.1197C104.447 31.1439 105.226 30.3192 106.294 29.6455C107.363 28.9485 108.71 28.6 110.337 28.6C112.52 28.6 114.216 29.1343 115.424 30.203C116.633 31.2717 117.237 32.7586 117.237 34.6636V44.5606H119.293V47H117.724ZM109.709 45.0485C110.406 45.0485 111.045 44.9672 111.626 44.8045C112.207 44.6419 112.706 44.4096 113.124 44.1076C113.543 43.8056 113.868 43.4571 114.1 43.0621C114.333 42.6672 114.449 42.2374 114.449 41.7727V38.8106H110.755C109.152 38.8106 107.979 39.0429 107.235 39.5076C106.515 39.9722 106.155 40.646 106.155 41.5288V42.2606C106.155 43.1434 106.468 43.8288 107.096 44.3167C107.746 44.8045 108.617 45.0485 109.709 45.0485ZM129.963 47.4182C128.708 47.4182 127.581 47.1975 126.582 46.7561C125.583 46.3146 124.735 45.6874 124.038 44.8742C123.365 44.0611 122.842 43.0737 122.47 41.9121C122.122 40.7505 121.947 39.4495 121.947 38.0091C121.947 36.5687 122.122 35.2677 122.47 34.1061C122.842 32.9444 123.365 31.9571 124.038 31.1439C124.735 30.3308 125.583 29.7035 126.582 29.2621C127.581 28.8207 128.708 28.6 129.963 28.6C131.751 28.6 133.18 28.9949 134.249 29.7848C135.341 30.5515 136.154 31.5621 136.688 32.8167L134.353 34.0015C134.028 33.0722 133.494 32.352 132.75 31.8409C132.007 31.3298 131.078 31.0742 129.963 31.0742C129.126 31.0742 128.394 31.2136 127.767 31.4924C127.14 31.748 126.617 32.1197 126.199 32.6076C125.781 33.0722 125.467 33.6414 125.258 34.3152C125.049 34.9657 124.944 35.6859 124.944 36.4758V39.5424C124.944 41.1222 125.363 42.4232 126.199 43.4455C127.059 44.4444 128.313 44.9439 129.963 44.9439C132.216 44.9439 133.842 43.8985 134.841 41.8076L136.863 43.1667C136.282 44.4677 135.411 45.5015 134.249 46.2682C133.111 47.0348 131.682 47.4182 129.963 47.4182ZM147.354 47.4182C146.123 47.4182 145.008 47.1975 144.009 46.7561C143.033 46.3146 142.185 45.6874 141.465 44.8742C140.768 44.0379 140.222 43.0505 139.827 41.9121C139.455 40.7505 139.27 39.4495 139.27 38.0091C139.27 36.5919 139.455 35.3025 139.827 34.1409C140.222 32.9793 140.768 31.9919 141.465 31.1788C142.185 30.3424 143.033 29.7035 144.009 29.2621C145.008 28.8207 146.123 28.6 147.354 28.6C148.562 28.6 149.643 28.8207 150.595 29.2621C151.548 29.7035 152.361 30.3192 153.035 31.1091C153.708 31.8758 154.22 32.7934 154.568 33.8621C154.94 34.9308 155.126 36.104 155.126 37.3818V38.7061H142.197V39.5424C142.197 40.3091 142.313 41.0293 142.545 41.703C142.801 42.3535 143.149 42.9227 143.591 43.4106C144.055 43.8985 144.613 44.2818 145.264 44.5606C145.937 44.8394 146.692 44.9788 147.529 44.9788C148.667 44.9788 149.654 44.7116 150.491 44.1773C151.35 43.6429 152.012 42.8763 152.477 41.8773L154.464 43.3061C153.883 44.5374 152.977 45.5364 151.745 46.303C150.514 47.0465 149.05 47.4182 147.354 47.4182ZM147.354 30.9348C146.588 30.9348 145.891 31.0742 145.264 31.353C144.636 31.6086 144.09 31.9803 143.626 32.4682C143.184 32.9561 142.836 33.5369 142.58 34.2106C142.325 34.8611 142.197 35.5813 142.197 36.3712V36.6152H152.129V36.2318C152.129 34.6288 151.687 33.351 150.804 32.3985C149.945 31.4227 148.795 30.9348 147.354 30.9348ZM159.72 21.2121H162.508V31.9455H162.647C163.112 30.8071 163.785 29.9707 164.668 29.4364C165.574 28.8788 166.654 28.6 167.909 28.6C169.024 28.6 170.035 28.8207 170.941 29.2621C171.847 29.7035 172.614 30.3308 173.241 31.1439C173.891 31.9571 174.379 32.9444 174.704 34.1061C175.053 35.2677 175.227 36.5687 175.227 38.0091C175.227 39.4495 175.053 40.7505 174.704 41.9121C174.379 43.0737 173.891 44.0611 173.241 44.8742C172.614 45.6874 171.847 46.3146 170.941 46.7561C170.035 47.1975 169.024 47.4182 167.909 47.4182C165.47 47.4182 163.716 46.303 162.647 44.0727H162.508V47H159.72V21.2121ZM167.142 44.9091C168.722 44.9091 169.965 44.4212 170.871 43.4455C171.777 42.4465 172.23 41.1455 172.23 39.5424V36.4758C172.23 34.8727 171.777 33.5833 170.871 32.6076C169.965 31.6086 168.722 31.1091 167.142 31.1091C166.515 31.1091 165.911 31.202 165.33 31.3879C164.773 31.5505 164.285 31.7828 163.867 32.0848C163.448 32.3869 163.112 32.7586 162.856 33.2C162.624 33.6182 162.508 34.0712 162.508 34.5591V41.25C162.508 41.8308 162.624 42.3535 162.856 42.8182C163.112 43.2596 163.448 43.6429 163.867 43.9682C164.285 44.2702 164.773 44.5025 165.33 44.6652C165.911 44.8278 166.515 44.9091 167.142 44.9091ZM193.003 47C191.957 47 191.202 46.7212 190.738 46.1636C190.296 45.6061 190.017 44.9091 189.901 44.0727H189.727C189.332 45.1879 188.681 46.0242 187.775 46.5818C186.869 47.1394 185.789 47.4182 184.534 47.4182C182.629 47.4182 181.143 46.9303 180.074 45.9545C179.028 44.9788 178.506 43.6545 178.506 41.9818C178.506 40.2859 179.121 38.9848 180.353 38.0788C181.607 37.1727 183.547 36.7197 186.172 36.7197H189.727V34.9424C189.727 33.6646 189.378 32.6889 188.681 32.0152C187.984 31.3414 186.916 31.0045 185.475 31.0045C184.383 31.0045 183.466 31.2485 182.722 31.7364C182.002 32.2242 181.398 32.8747 180.91 33.6879L179.238 32.1197C179.725 31.1439 180.504 30.3192 181.572 29.6455C182.641 28.9485 183.989 28.6 185.615 28.6C187.799 28.6 189.495 29.1343 190.703 30.203C191.911 31.2717 192.515 32.7586 192.515 34.6636V44.5606H194.571V47H193.003ZM184.988 45.0485C185.684 45.0485 186.323 44.9672 186.904 44.8045C187.485 44.6419 187.984 44.4096 188.403 44.1076C188.821 43.8056 189.146 43.4571 189.378 43.0621C189.611 42.6672 189.727 42.2374 189.727 41.7727V38.8106H186.033C184.43 38.8106 183.257 39.0429 182.513 39.5076C181.793 39.9722 181.433 40.646 181.433 41.5288V42.2606C181.433 43.1434 181.747 43.8288 182.374 44.3167C183.024 44.8045 183.896 45.0485 184.988 45.0485ZM198.55 47V29.0182H201.338V32.3288H201.512C201.837 31.4692 202.418 30.7025 203.254 30.0288C204.091 29.355 205.241 29.0182 206.704 29.0182H207.785V31.8061H206.147C204.637 31.8061 203.452 32.0965 202.592 32.6773C201.756 33.2348 201.338 33.9434 201.338 34.803V47H198.55Z" fill="white"/>\n</svg>\n',"speed-icon":'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M22.4979 15.7501C22.4969 13.7461 21.9163 11.7851 20.8261 10.1035L19.7422 11.1875C20.564 12.5675 20.9978 14.1439 20.9979 15.7501L22.4979 15.7501Z" fill="#909090"/>\n<path d="M21 7.8105L19.9394 6.75L13.5143 13.1752C13.057 12.8997 12.5338 12.7528 12 12.75C11.4067 12.75 10.8266 12.9259 10.3333 13.2556C9.83994 13.5852 9.45543 14.0538 9.22836 14.602C9.0013 15.1501 8.94189 15.7533 9.05765 16.3353C9.1734 16.9172 9.45912 17.4518 9.87868 17.8713C10.2982 18.2909 10.8328 18.5766 11.4147 18.6924C11.9967 18.8081 12.5999 18.7487 13.1481 18.5216C13.6962 18.2946 14.1648 17.9101 14.4944 17.4167C14.8241 16.9234 15 16.3433 15 15.75C14.9972 15.2162 14.8503 14.693 14.5748 14.2357L21 7.8105ZM12 17.25C11.7033 17.25 11.4133 17.162 11.1666 16.9972C10.92 16.8324 10.7277 16.5981 10.6142 16.324C10.5007 16.0499 10.4709 15.7483 10.5288 15.4574C10.5867 15.1664 10.7296 14.8991 10.9393 14.6893C11.1491 14.4796 11.4164 14.3367 11.7074 14.2788C11.9983 14.2209 12.2999 14.2506 12.574 14.3642C12.8481 14.4777 13.0824 14.67 13.2472 14.9166C13.412 15.1633 13.5 15.4533 13.5 15.75C13.4995 16.1477 13.3414 16.529 13.0602 16.8102C12.779 17.0914 12.3977 17.2495 12 17.25Z" fill="#909090"/>\n<path d="M12 6.75002C13.6061 6.75077 15.1822 7.18457 16.5625 8.00574L17.6527 6.91554C16.0679 5.89651 14.2378 5.32343 12.3548 5.2566C10.4719 5.18976 8.60573 5.63164 6.95268 6.53575C5.29964 7.43986 3.92082 8.77277 2.96128 10.3943C2.00174 12.0158 1.49695 13.8659 1.50001 15.75L3.00001 15.75C3.00273 13.3639 3.95182 11.0763 5.63906 9.38906C7.32629 7.70182 9.6139 6.75274 12 6.75002Z" fill="#909090"/>\n</svg>\n',decrease:'<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.5 9L2.13343e-07 1.10526L1.19 -1.40286e-06L8.5 6.78947L15.81 -1.24738e-07L17 1.10526L8.5 9Z" fill="white"/>\n</svg>\n',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>',"Faded-icon":'<svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M40.1053 26H0" stroke="white" stroke-width="2.50658"/>\n<path d="M40.1053 2.1875H0" stroke="white" stroke-width="2.50658"/>\n<path d="M13.9656 11.5457H16.026L16.7931 15.3507L17.0487 17.5164H17.2593L17.5751 15.3507L18.4775 11.5457H20.5228L21.4703 15.3507L21.7862 17.5164H21.9666L22.2223 15.3507L23.0495 11.5457H24.9745L23.0495 19.4414H20.7484L19.8611 15.5913L19.5754 13.4707H19.3648L19.0791 15.5913L18.1917 19.4414H15.8907L13.9656 11.5457Z" fill="white"/>\n</svg>',"zoom-in":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3708H12.4449V6.22266H10.3708V10.3708H6.22266V12.4449H10.3708V16.593H12.4449V12.4449H16.593V10.3708Z" fill="white" fill-opacity="0.6"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407Z" fill="white" fill-opacity="0.6"/>\n</svg>\n',speedBoat:'<svg width="442" height="77" viewBox="0 0 442 77" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect y="71" width="64" height="268.075" rx="7.58491" transform="rotate(-90 0 71)" fill="#262626"/>\n<path d="M159.213 51L159.213 46.2113L147.188 46.2113L147.188 43.6248L157.744 26.6023L162.009 26.6023L162.009 43.7995L165.644 43.7995L165.644 46.2113L162.009 46.2113L162.009 51L159.213 51ZM149.81 43.7995L159.213 43.7995L159.213 28.8743L159.073 28.8743L149.81 43.7995ZM185.729 51L169.44 51L169.44 47.994L177.585 40.6537C178.773 39.5818 179.752 38.4865 180.521 37.368C181.29 36.2262 181.674 35.0261 181.674 33.7678L181.674 33.3483C181.674 31.8803 181.29 30.7501 180.521 29.9578C179.752 29.1422 178.61 28.7344 177.095 28.7344C175.604 28.7344 174.45 29.1189 173.635 29.8879C172.842 30.6336 172.248 31.6356 171.852 32.8939L169.231 31.9152C169.464 31.1929 169.778 30.4938 170.174 29.818C170.594 29.1189 171.118 28.5014 171.747 27.9655C172.376 27.4295 173.134 26.9984 174.019 26.6722C174.928 26.3459 175.977 26.1828 177.165 26.1828C178.377 26.1828 179.449 26.3576 180.381 26.7071C181.336 27.0567 182.129 27.546 182.758 28.1752C183.41 28.8043 183.9 29.55 184.226 30.4122C184.575 31.2744 184.75 32.2182 184.75 33.2435C184.75 34.1756 184.61 35.0494 184.331 35.865C184.074 36.6806 183.701 37.4612 183.212 38.2069C182.746 38.9526 182.175 39.6866 181.499 40.409C180.847 41.1081 180.113 41.8072 179.297 42.5062L172.481 48.4484L185.729 48.4484L185.729 51ZM198.403 51.4194C196.912 51.4194 195.63 51.1398 194.558 50.5806C193.487 49.998 192.601 49.1708 191.902 48.0988C191.203 47.0269 190.69 45.7103 190.364 44.1491C190.038 42.5878 189.875 40.8051 189.875 38.8011C189.875 36.8204 190.038 35.0494 190.364 33.4882C190.69 31.9036 191.203 30.5753 191.902 29.5034C192.601 28.4315 193.487 27.6159 194.558 27.0567C195.63 26.4741 196.912 26.1828 198.403 26.1828C199.895 26.1828 201.176 26.4741 202.248 27.0567C203.32 27.6159 204.206 28.4315 204.905 29.5034C205.604 30.5753 206.116 31.9036 206.443 33.4882C206.769 35.0494 206.932 36.8204 206.932 38.8011C206.932 40.8051 206.769 42.5878 206.443 44.1491C206.116 45.7103 205.604 47.0269 204.905 48.0988C204.206 49.1708 203.32 49.998 202.248 50.5806C201.176 51.1398 199.895 51.4194 198.403 51.4194ZM198.403 48.8678C199.382 48.8678 200.221 48.6814 200.92 48.3086C201.619 47.9124 202.178 47.3648 202.598 46.6657C203.041 45.9667 203.367 45.1278 203.577 44.1491C203.786 43.1471 203.891 42.0285 203.891 40.7935L203.891 36.8088C203.891 35.597 203.786 34.4902 203.577 33.4882C203.367 32.4861 203.041 31.6356 202.598 30.9365C202.178 30.2375 201.619 29.7015 200.92 29.3287C200.221 28.9325 199.382 28.7344 198.403 28.7344C197.425 28.7344 196.586 28.9325 195.887 29.3287C195.188 29.7015 194.617 30.2375 194.174 30.9365C193.755 31.6356 193.44 32.4861 193.23 33.4882C193.02 34.4902 192.916 35.597 192.916 36.8088L192.916 40.7935C192.916 42.0285 193.02 43.1471 193.23 44.1491C193.44 45.1278 193.755 45.9667 194.174 46.6657C194.617 47.3648 195.188 47.9124 195.887 48.3086C196.586 48.6814 197.425 48.8678 198.403 48.8678ZM198.403 40.8634C197.588 40.8634 197.017 40.7003 196.691 40.3741C196.388 40.0478 196.236 39.6517 196.236 39.1856L196.236 38.4166C196.236 37.9506 196.388 37.5544 196.691 37.2282C197.017 36.902 197.588 36.7389 198.403 36.7389C199.219 36.7389 199.778 36.902 200.081 37.2282C200.407 37.5544 200.57 37.9506 200.57 38.4166L200.57 39.1856C200.57 39.6517 200.407 40.0478 200.081 40.3741C199.778 40.7003 199.219 40.8634 198.403 40.8634Z" fill="white"/>\n<path d="M51.9814 28.5721H47.1988C46.6156 25.8892 44.2827 23.9062 41.4832 23.9062C38.6836 23.9062 36.3507 25.8892 35.7675 28.5721H19.3203V30.905H35.7675C36.3507 33.5879 38.6836 35.5709 41.4832 35.5709C44.2827 35.5709 46.6156 33.5879 47.1988 30.905H51.9814V28.5721ZM41.4832 33.238C39.5002 33.238 37.9838 31.7216 37.9838 29.7386C37.9838 27.7556 39.5002 26.2392 41.4832 26.2392C43.4662 26.2392 44.9826 27.7556 44.9826 29.7386C44.9826 31.7216 43.4662 33.238 41.4832 33.238Z" fill="white"/>\n<path d="M19.3203 47.2371H24.1028C24.6861 49.9199 27.019 51.9029 29.8185 51.9029C32.618 51.9029 34.951 49.9199 35.5342 47.2371H51.9814V44.9041H35.5342C34.951 42.2213 32.618 40.2383 29.8185 40.2383C27.019 40.2383 24.6861 42.2213 24.1028 44.9041H19.3203V47.2371ZM29.8185 42.5712C31.8015 42.5712 33.3179 44.0876 33.3179 46.0706C33.3179 48.0536 31.8015 49.57 29.8185 49.57C27.8355 49.57 26.3191 48.0536 26.3191 46.0706C26.3191 44.0876 27.8355 42.5712 29.8185 42.5712Z" fill="white"/>\n<line x1="69.6643" y1="22.6992" x2="69.6643" y2="57.6778" stroke="#545454" stroke-width="1.66447"/>\n<path d="M237.284 23.9062L247.548 33.4395L246.111 34.7742L237.284 26.5756L228.457 34.7742L227.02 33.4395L237.284 23.9062Z" fill="white"/>\n<path d="M237.283 57.7187L227.019 48.1855L228.456 46.8508L237.283 55.0494L246.11 46.8508L247.547 48.1855L237.283 57.7187Z" fill="white"/>\n<path d="M125.589 44.4384C125.587 41.6723 124.786 38.9656 123.281 36.6445L121.785 38.1407C122.919 40.0456 123.518 42.2214 123.518 44.4384H125.589Z" fill="#6F6F6F"/>\n<path d="M123.52 33.4833L122.056 32.0195L113.188 40.8881C112.557 40.5078 111.835 40.305 111.098 40.3012C110.279 40.3012 109.478 40.5441 108.797 40.9991C108.116 41.4541 107.586 42.1008 107.272 42.8574C106.959 43.6141 106.877 44.4466 107.037 45.2499C107.196 46.0531 107.591 46.7909 108.17 47.3701C108.749 47.9492 109.487 48.3435 110.29 48.5033C111.093 48.6631 111.926 48.5811 112.682 48.2677C113.439 47.9543 114.086 47.4235 114.541 46.7426C114.996 46.0616 115.239 45.261 115.239 44.442C115.235 43.7052 115.032 42.983 114.652 42.3519L123.52 33.4833ZM111.098 46.5125C110.688 46.5125 110.288 46.391 109.948 46.1635C109.607 45.936 109.342 45.6127 109.185 45.2344C109.028 44.856 108.987 44.4397 109.067 44.0381C109.147 43.6365 109.344 43.2676 109.634 42.978C109.923 42.6885 110.292 42.4913 110.694 42.4114C111.096 42.3315 111.512 42.3725 111.89 42.5292C112.269 42.6859 112.592 42.9513 112.819 43.2918C113.047 43.6323 113.168 44.0326 113.168 44.442C113.168 44.991 112.949 45.5172 112.561 45.9054C112.173 46.2935 111.647 46.5118 111.098 46.5125Z" fill="#6F6F6F"/>\n<path d="M111.098 32.0158C113.315 32.0168 115.491 32.6156 117.396 33.749L118.901 32.2442C116.713 30.8377 114.187 30.0467 111.588 29.9544C108.989 29.8622 106.413 30.4721 104.132 31.72C101.85 32.9679 99.9469 34.8077 98.6224 37.0458C97.298 39.2839 96.6013 41.8376 96.6055 44.4383H98.6759C98.6797 41.1448 99.9897 37.9872 102.319 35.6584C104.647 33.3295 107.805 32.0195 111.098 32.0158Z" fill="#6F6F6F"/>\n<rect x="301.5" y="8.5" width="59" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="307.5" y="12.5" width="59" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M335.739 53.2221V43.8578H327.002V40.811H335.739V31.4468H339.144V40.811H347.881V43.8578H339.144V53.2221H335.739Z" fill="white"/>\n<rect x="376.5" y="8.5" width="59" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="382.5" y="12.5" width="59" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M404.103 45.48V40.3661H419.623V45.48H404.103Z" fill="white"/>\n</svg>\n',"zoom-out":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3711H6.22266V12.4452H16.593V10.3711Z" fill="white" fill-opacity="0.6"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407Z" fill="white" fill-opacity="0.6"/>\n</svg>\n',"HotBox-icon":'<svg width="41" height="27" viewBox="0 0 41 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-1-inside-1" fill="white">\n<rect y="0.6875" width="40.0952" height="26.3125" rx="1.25298"/>\n</mask>\n<rect y="0.6875" width="40.0952" height="26.3125" rx="1.25298" stroke="white" stroke-width="5.0119" mask="url(#path-1-inside-1)"/>\n<path d="M13.9617 11.2273H16.0216L16.7884 15.0314L17.044 17.1965H17.2545L17.5703 15.0314L18.4724 11.2273H20.5173L21.4645 15.0314L21.7803 17.1965H21.9607L22.2163 15.0314L23.0433 11.2273H24.9678L23.0433 19.1211H20.7428L19.8557 15.272L19.57 13.1519H19.3595L19.0738 15.272L18.1867 19.1211H15.8863L13.9617 11.2273Z" fill="white"/>\n</svg>\n',"color-icon":'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.75 0.5L2.25 0.5C1.78605 0.500579 1.34127 0.685139 1.0132 1.0132C0.685139 1.34127 0.500579 1.78605 0.5 2.25L0.5 19.75C0.500579 20.214 0.685139 20.6587 1.0132 20.9868C1.34127 21.3149 1.78605 21.4994 2.25 21.5L19.75 21.5C20.214 21.4994 20.6587 21.3149 20.9868 20.9868C21.3149 20.6587 21.4994 20.214 21.5 19.75L21.5 2.25C21.4994 1.78605 21.3149 1.34127 20.9868 1.0132C20.6587 0.685139 20.214 0.500579 19.75 0.5ZM2.25 19.75L19.75 2.25L19.75 19.75L2.25 19.75Z" fill="#919191"/>\n</svg>',"exit-icon":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z" fill="white"/>\n</svg>\n',"fovea-icon":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M26.249 14L19.249 21L18.0117 19.7628L23.7745 14L18.0117 8.23725L19.249 7L26.249 14Z" fill="#909090"/>\n<path d="M14 19.25C13.8851 19.2502 13.7713 19.2276 13.6651 19.1836C13.559 19.1396 13.4625 19.075 13.3814 18.9937L9.00641 14.6187C8.92512 14.5374 8.86064 14.441 8.81664 14.3349C8.77265 14.2287 8.75 14.1149 8.75 14C8.75 13.8851 8.77265 13.7714 8.81664 13.6652C8.86064 13.5591 8.92512 13.4626 9.00641 13.3814L13.3814 9.00641C13.4626 8.92512 13.5591 8.86064 13.6652 8.81664C13.7713 8.77265 13.8851 8.75 14 8.75C14.1149 8.75 14.2287 8.77265 14.3349 8.81664C14.441 8.86064 14.5374 8.92512 14.6187 9.00641L18.9937 13.3814C19.0749 13.4626 19.1394 13.5591 19.1834 13.6652C19.2274 13.7714 19.2501 13.8851 19.2501 14C19.2501 14.1149 19.2274 14.2287 19.1834 14.3349C19.1394 14.441 19.0749 14.5374 18.9937 14.6187L14.6187 18.9937C14.5375 19.075 14.4411 19.1396 14.3349 19.1836C14.2288 19.2276 14.115 19.2502 14 19.25ZM10.8624 14L14 17.1377L17.1377 14L14 10.8624L10.8624 14Z" fill="#909090"/>\n<path d="M1.75 14L8.75 7L9.98725 8.23725L4.2245 14L9.98725 19.7628L8.75 21L1.75 14Z" fill="#909090"/>\n</svg>',"settings-icon-white":'<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.0474 3.86392H23.0869C22.6039 1.64217 20.672 0 18.3536 0C16.0353 0 14.1033 1.64217 13.6203 3.86392H0V5.79588H13.6203C14.1033 8.01763 16.0353 9.65979 18.3536 9.65979C20.672 9.65979 22.6039 8.01763 23.0869 5.79588H27.0474V3.86392ZM18.3536 7.72784C16.7114 7.72784 15.4557 6.47206 15.4557 4.8299C15.4557 3.18773 16.7114 1.93196 18.3536 1.93196C19.9958 1.93196 21.2516 3.18773 21.2516 4.8299C21.2516 6.47206 19.9958 7.72784 18.3536 7.72784Z" fill="white"/>\n<path d="M0 19.3193H3.96052C4.44351 21.5411 6.37547 23.1832 8.69382 23.1832C11.0122 23.1832 12.9441 21.5411 13.4271 19.3193H27.0474V17.3874H13.4271C12.9441 15.1656 11.0122 13.5234 8.69382 13.5234C6.37547 13.5234 4.44351 15.1656 3.96052 17.3874H0V19.3193ZM8.69382 15.4554C10.336 15.4554 11.5918 16.7112 11.5918 18.3533C11.5918 19.9955 10.336 21.2513 8.69382 21.2513C7.05165 21.2513 5.79588 19.9955 5.79588 18.3533C5.79588 16.7112 7.05165 15.4554 8.69382 15.4554Z" fill="white"/>\n</svg>\n'};class j extends q$2{init(t){return this.setting=t,this.as((t=>j$2(`\n    <div id='${t.key}-editor' class='editor collapsable' data-setting-target='editor'>\n        <div data-setting-target='back'> \n            <div class="back-icon">${N["back-icon"]}</div> \n            <div class="back-copy">${t.displayName||t.getData("setting")} </div>\n        </div>\n\n        <div class='editor-content' data-editor-target='content'>\n        </div>\n    </div>\n    `.trim()))(t)).appendTo(t.element),this.createEvents("hide"),this.createWire("content"),this.on("contentChange",(t=>{this._setContent(t);})),this.editorContent=this.element.find('[data-editor-target="content"]'),this.element.findAll("[data-setting-target='back']").forEach((t=>t.listenTo("mousedown",(()=>{this.triggerEvent("hide");})))),this.on("hide",(()=>{t.close(),this._collapse();})),this._collapse(),this}_collapse(){E(this.element),setTimeout((()=>{this.element.hide();}),100);}_setContent(e,...i){"string"==typeof e?this.editorContent.html(e):e instanceof q$2&&(this.editorContent.append(e,...i),this.triggerEvent("contentChange"));}}let R=({key:t,title:i,htmlTemp:n=((t,e)=>`<div class='title' id='${t}-title'>${e}</div>`)})=>j$2(`div.section#${t}-section`).html(n(t,i)).append((t=>j$2(`div#${t}-display.display`,0).setData({settingTarget:"display",pragmaTarget:`${t} monitor`}))(t)),O=(t,i)=>j$2(`div.setting.inline#${i}`).setData({setting:i}).append(R({key:i,title:t.displayName}));class K extends q$2{init(t,e,{displayName:i,displayTemplate:n=((t,e)=>t.html(e)),settingTemplate:o}={}){t.adopt(this),t.create(this,e),this._displayTemplate=n,this.displayName=i||e,this.createEvents("input").on("input",(function(t){this.updateDisplay(t);})).on(`${e}Change`,((t,e,i=!1)=>{i||t===e||this.triggerEvent("input",t,e);})),this.as((o||O)(this,e));}updateDisplay(t){pragmaSpace.onDocLoad((()=>{this.element.findAll("[data-setting-target='display']").forEach((e=>this._displayTemplate(e,t)));}));}}let Y=({key:t,title:i,htmlTemp:n=((t,e)=>`<div class='title' id='${t}-title'>${e}</div>`)})=>j$2(`div.collapsed-section.collapsable#${t}-section`).html(n(t,i)).append((t=>j$2(`div#${t}-display.display`,0).setData({settingTarget:"display"}))(t)),q=(t,i)=>j$2(`div.setting.collapsable#${i}`).setData({setting:i}).append(Y({key:i,title:t.displayName}));class G extends K{init(t,e,{displayName:i=e,settingTemplate:n=q,displayTemplate:o}){super.init(t,e,{displayName:i,settingTemplate:n,displayTemplate:o}),this.element.find(".collapsed-section").listenTo("mousedown",(()=>{this.open();})),this.editor=new j(this);}open(){this.parent.element.findAll(".setting.collapsable").forEach((t=>{t!==this.element&&E(t);})),this.element.findAll(".collapsed-section").forEach((t=>{E(t);})),setTimeout((()=>{this.addClass("expanded"),this._ogHeight=this.height,this.editor.element.show(),this.css(`height ${this.editor.element.scrollHeight}px`),S(this.editor);}),10);}close(){this.parent.element.findAll(".setting.collapsable").forEach((t=>{t!==this.element&&S(t);})),this.element.findAll(".collapsed-section").forEach((t=>{S(t);})),this.removeClass("expanded"),this.element.style.height=null;}}let J=(t,e)=>J$2(`\n        <div class="option" data-editor-option=${e.getData("option")}>\n        </div>\n    `.trim()).run((function(){if("string"==typeof t)return this.element.html(t);this.append(t);})).element,X=t=>t.key.toString(),Q=function(t,i){return this.as(j$2(i(t,this))).setId(M$2.rk5()).addClass("option"),this.setData({option:this.option}),this};class tt extends q$2{static fromTemplate(t,e){let i="function"==typeof t?t:X,n=J;return "object"==typeof t&&(i=t.contentTemplate||X,n=t.wrapperTemplate||J),new tt(e,i,n).setKey(e)}init(t,e,i){this.createWire("optionTemplate"),this.option=t,this._contentTemplate=e,this._wrapperTemplate=i,this.render();}render(){return this.run((function(){Q.bind(this)(this._contentTemplate(this),this._wrapperTemplate);}))}}class et extends G{init(t,e,i={}){super.init(t,e,i);let n=i.options?i.options:i;if("object"==typeof n){let t=[];for(let[e,o]of Object.entries(n))t.push(tt.fromTemplate(i,e).setData({description:o}).render());n=t;}else n=n.map((t=>tt.fromTemplate(i,t)));this.adopt(...n),this.createEvent("select"),this.createWire("currentOption"),this.on("input",(t=>{let e=this.find(t);if(!e)return console.error(`couldnt find option for ${t}`);this.currentOption=e;})),this.on("currentOptionChange",((t,e)=>{e&&t.key==e.key||this.triggerEvent("select",t,e);})),this.on("select",(t=>{this.parent.update(this.getData("setting"),t.getData("option"));})),n.forEach((t=>t.listenTo("mousedown",(()=>this.setCurrentOption(t))))),this.editor._setContent(...n);}}class it extends q$2{constructor(t,i,{valueSanitizer:n=(t=>t),monitorTemplate:o=(t=>t),size:s=4}={}){super(),this._size=s,this._monitorTemplate=o,this.createWire("val"),this.on("valChange",((e,n)=>{e!=n&&(t[i]=e),this.updateFront(t[i]);})),this.as(j$2("input").attr("type","text").setData({settingTarget:"display"}).addClass("edible-display")),this.adopt(this.element),this.element.listenTo("focus",(function(){this.value="",this.parent._listenToEsc=document.addEventListener("keydown",(t=>{"Enter"===t.key&&this.blur();}));})),this.element.listenTo("focusout",(function(){this.parent.setVal(n(this.value)),document.removeEventListener("keydown",this.parent._listenToEsc);})),this._setSize(s);}updateFront(t){this.element.value=this._monitorTemplate(t),this.element.placeholder=t;}_setSize(t){return this.element.attr("maxlength",t).attr("size",t),this}}class nt extends K{init(t,i,{displayName:n,settingTemplate:o,monitorTemplate:s,valueSanitizer:r=(t=>parseInt(t)),size:a=4,plusElement:l,minusElement:h,step:c=1}={}){if(o&&(this._content=o),this._monitorTemplate=s,this._valueSanitizer=r,this._size=a,super.init(t,i,{displayName:n,settingTemplate:(t,e)=>this._content(e)}),this.on("input",(t=>{this.setData({value:t}),this.parent.update(this.getData("setting"),t,this);})),this.element.setId(i).addClass("setting","setting-int","section"),l){this.arrows||(this.arrows=j$2("div.arrows").appendTo(this.element));let t=j$2("function"==typeof l?l(this):l).listenTo("mousedown",(()=>{this[i]+=c||1;}));this.arrows.append(t);}if(h){this.arrows||(this.arrows=j$2("div.arrows").appendTo(this.element));let t=j$2("function"==typeof h?h(this):h).listenTo("mousedown",(()=>{this[i]-=c||1;}));this.arrows.append(t);}}_content(t){return this._edible=new it(this,t,{valueSanitizer:this._valueSanitizer,monitorTemplate:this._monitorTemplate,size:this._size}),J$2().append(j$2(`div.section#${t}-section`).append(j$2("div#title.",this.displayName||t)).append(this._edible))}updateDisplay(t){pragmaSpace.onDocLoad((()=>{this._edible.updateFront(t);}));}}function ot(n,s,r={}){return J$2("infinity paginator").from(function(i,n={}){return (new q$2).from(M$2.createTemplate({pageTemplate:i,firstPage:n.first,lastPage:n.last,fetch:"function"==typeof n.fetch?n.fetch:t=>{M$2.throwSoft("no fetch source specified");},onCreate:"function"==typeof n.onCreate?n.onCreate:t=>console.log("created",t),onFetch:n.onFetch,onPageAdd:null,onPageRender:null,onPageActive:"function"==typeof n.onPageActive?n.onPageActive:function(t,e){console.log("active",t);},onPageInactive:"function"==typeof n.onPageInactive?n.onPageInactive:function(t,e){console.log("inactive",t);},onPageDestroy:n.onPageDestroy})).run((function(){let t=j$2(this.pageTemplate).hide();this.pageTemplate=t.cloneNode(!1),this._clonePage=function(){let t=j$2(this.pageTemplate.cloneNode(!1)).show();return this.adopt(t),t.lec=this.parent,M$2.createEventChains(t,"fetch"),t},this.isPageAvailable=t=>(!this.firstPage||t>=this.firstPage)&&(!this.lastPage||t<=this.lastPage),this.create=function(t=this.value,e="append"){let i=this._clonePage();new Promise((e=>{this.onCreate(i,t);let o=this.fetch(t),s=n.onFetch||function(t,i){t.html(i),e(t);};const r=i=>{let n=this.pages.get(t);n&&(s(n,i),e(n));};o instanceof Promise?o.then((t=>{r(t);})):r(o);})).then((e=>{e.fetchChain.exec(),this.onPageRender&&this.onPageRender(e,t);})),i[`${e}To`](this.parent.element),this.addPage(i,t);},this.pages=new Map,this.destroy=function(t){let e=this.pages.get(t),i=i=>{e=this.pages.get(t),this.delPage(t),e.destroy();};if(console.log("REMOV"),this.onPageDestroy){let n=this.onPageDestroy(e,t);if(n instanceof Promise)return n.then(i)}i();},this.addPage=function(t,e){e=null===e?this.pages.size:e,this.onPageAdd&&this.onPageAdd(t,e),this.pages.set(e,t);},this.delPage=function(t){return this.pages.delete(t)},this.activate=function(...t){t.forEach((t=>{let e=this.pages.get(t);e&&(e.active=!0,this.onPageActive(e,t));}));},this.inactivate=function(...t){t.forEach((t=>{let e=this.pages.get(t);e&&(e.active=!1,this.onPageInactive(e,t));}));},this.export("pageTemplate","_clonePage","create","destroy","pages","addPage","delPage","activate","firstPage","lastPage","isPageAvailable","inactivate");}))}(s,M$2.objDiff({streamer:n,fetch:n.fetch},r))).setValue(0).run({initialConfig(){this._watching=!0;const t={headspace:r.headspace||10,timeout:r.timeout||5};this.fill=function(){this.fetching=!0;let e=P(this.value>=t.headspace?this.value-t.headspace:0,this.value+t.headspace);e=e.filter((t=>this.isPageAvailable(t)));let i=Array.from(this.pages.keys()),n=M$2.aryDiff(e,i),s=M$2.aryDiff(i,e),r=n.filter((t=>t>this.value)),a=M$2.aryDiff(n,r);for(let t of r)this.create(t,"append");for(let t of a.reverse())this.create(t,"prepend");for(let t of s)this.destroy(t);setTimeout((t=>{this.fetching=!1;}),t.timeout);};},scrollSetup(){this.goTo=function(t,e){let i=this;console.log("this value",this.value,"target value",t),this.value!==t&&(this.value=t);let n=this.pages.get(t);n.onRender((function(){i._watching=!1,c(n,"auto").then((()=>{i._watching=!0,console.timeEnd("going to",t);}));}));},this.export("goTo");},findActivePages(){this.findActivePage=function(t,e){return new v((e=>{e(function(t,e){let i=null,n=999999999999;const o=e+window.innerHeight/2;for(let[e,s]of t){let t=s.top+s.height/2,r=Math.abs(t-o);r<=n&&(n=r,i=e);}return i}(this.pages,t));}))};let t=!1,e=!1;const i=(n,o)=>{if(!this.fetching&&this._watching){if(t)return e={pos:n,dp:o};t=!0,this.findActivePage(n,o).then((n=>{this.value=n,t=!1,e&&(i(e.pos,e.dp),e=null);}));}};var n;n=(t,e)=>{i(t,e);},d.on("userScrollEnd",n),p(((t,e)=>{Math.abs(e)>40&&t<350&&i(t,e);}));}}).do((function(){if(0===this.dv)return;this.activate(this.value);let t=this.value-(this.dv||1);this.inactivate(t),this.fill();}))}var st={full:"@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);body{background-color:#161616}.flex,.inline-icon,.inline-icon-2{display:flex;justify-content:center;align-items:center}.inline-icon,.inline-icon-2{width:22px}.inline-icon svg,.inline-icon-2 svg{width:22px}.inline-icon-2{width:25px}.inline-icon-2 svg{width:25px}.clickable{cursor:pointer}.meta{opacity:.5}.blurred-bg{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:9999999999999999999;background:rgba(255,255,255,0.15);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)}.popUp{width:400px;height:390px;background:#161616;border-radius:4px;position:absolute;top:30%;left:50%;margin-left:-200px;padding:30px 30px;box-sizing:border-box;transition:all ease .5s;font-family:'IBM Plex Mono',monospace !important}.popUp .next-btn,.popUp .back-btn{position:absolute;right:-50px;width:40px;height:40px;background:#161616;border-radius:50px;top:50%;margin-top:-25px;cursor:pointer}.popUp .next-btn .next-icon,.popUp .back-btn .next-icon,.popUp .back-btn .back-icon,.popUp .next-btn .exit-icon,.popUp .back-btn .exit-icon{text-align:center;position:absolute;top:46%;left:52%;transform:translate(-50%,-50%) rotate(180deg)}.popUp .next-btn .next-icon>svg,.popUp .back-btn .next-btn .back-icon>svg,.popUp .back-btn .next-icon>svg,.popUp .back-btn .back-icon>svg,.popUp .next-btn .exit-icon>svg,.popUp .back-btn .exit-icon>svg{width:10px;height:auto}.popUp .next-btn .exit-icon,.popUp .back-btn .exit-icon{transform:translate(-50%,-50%);top:55%;left:50%}.popUp .next-btn .exit-icon>svg,.popUp .back-btn .exit-icon>svg{width:15px;height:auto}.popUp .back-btn{left:-50px}.popUp .back-btn .back-icon{transform:translate(-50%,-50%);top:56%;left:47%}.popUp .popUpContent{width:100%;display:flex;height:100%;box-sizing:border-box;transition:all ease .5s;justify-content:center;align-items:center}.popUp .popUpContent .boat{width:100%;height:fit-content;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:stretch;text-align:center;transition:all ease .5s}.popUp .popUpContent .boat-title{font-family:'IBM Plex Mono',monospace !important;font-size:27px !important;color:whitesmoke;margin:0;font-weight:400;margin-top:30px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.popUp .popUpContent .boat .spacebar-icon>svg{width:230px}.popUp .popUpContent .boat .speed-icon>svg{width:315px}.popUp .popUpContent .boat .click-icon>svg{width:315px}.displayN{display:none !important}.fadein-onload,.popUp .popUpContent .boat{-webkit-animation:fadein .5s;-moz-animation:fadein .5s;-ms-animation:fadein .5s;-o-animation:fadein .5s;animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fadein-onload from,.popUp .popUpContent .boat from{opacity:0}.fadein-onload to,.popUp .popUpContent .boat to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}",slider:'@charset "utf-8";.pragma-slider{user-select:none;cursor:grab}.pragma-slider:active{cursor:grabbing}.pragma-slider-bg{width:100%;height:5px;background:#6F6F6F;border-radius:15px}.pragma-slider-bar{height:100%;width:100%;background:#2B6CCE;position:relative;transition:all .05s ease;border-radius:15px}.pragma-slider-thumb{width:5px;height:18px;background:#2b6cce;transition:all .05s ease;position:absolute;right:0;top:50%;bottom:50%;margin:auto}.slider-display{text-align:center;padding-bottom:20px}',main:'@charset "utf-8";@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap);@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&display=swap);.glass-block,.lector-mini-settings,.glass-block-border{background:rgba(35,35,35,0.55);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-radius:5px;padding:20px 40px;color:whitesmoke}.glass-block-border{border:1px solid rgba(255,255,255,0.18)}.fixed-bottom-box,.lector-mini-settings{position:fixed;bottom:20px}.lector-mini-settings{right:-10px;padding-right:40px}.lector-mini-settings .section{margin-top:25px;margin-bottom:25px}.settings-input{display:flex;flex-direction:column;align-items:center}.pragma-input-text{font-family:\'IBM Plex Mono\',monospace;font-size:22px;border-style:none;outline:none;color:whitesmoke;border-radius:2px;background-color:transparent;text-align:center}.pragma-input-text:hover{background:#393939}.active-select-template{display:flex;flex-direction:row;flex-wrap:no wrap;justify-content:space-around;align-items:center;width:100%}.active-select-template .option{user-select:none;cursor:pointer}.active-select-template .active{opacity:1 !important;background-color:gray;position:relative;transform-style:preserve-3d}.active-select-template .active::after{height:32px;top:-6px;left:-10px}.active-select-template .active::before{width:30px;height:30px;top:-4px;border-radius:2px;left:-4px;background-color:#6F6F6F;position:absolute;border-radius:50%;content:"";z-index:-1;transform:translateZ(-1px);transition:ease all .2s;-webkit-transition:all 1s;-moz-transition:all 1s;animation:sheen 1s forwards}.active-select-template .inactive{background-color:#1a1a1a}.word-element{cursor:pointer;transition:all .05s ease;border-radius:1px;border-bottom:1px solid transparent;margin-bottom:-1px}.word-element.hover-0{background-color:#2b6cce37;outline:2px solid #2b6cce37;border-radius:0}.word-element.hover-1{background-color:rgba(184,184,184,0.249)}.word-element.hover-2{background-color:rgba(184,184,184,0.119)}.word-element.hover-3{background-color:rgba(184,184,184,0.043)}.word-element.mark-is-here{border-bottom:1px solid #2b6cce;background-color:#2b6cce19}.fade-onload,#mark-indicator{-webkit-animation:fadein .5s;-moz-animation:fadein .5s;-ms-animation:fadein .5s;-o-animation:fadein .5s;animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from,#mark-indicator from{opacity:0}.fade-onload to,#mark-indicator to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.mark-obscurer{background-color:#262626}#mark-indicator{position:fixed;bottom:20px;left:50%;padding:7px;margin-left:-20px;border-radius:5px;background-color:#262626;cursor:pointer;width:15px;height:15px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center}#mark-indicator>svg{height:auto;width:15px}#mark-indicator.upwards{top:20px;transform:rotate(180deg)}',settings:"@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);.collapsable,.settings #popup{overflow:hidden;transition:all .15s ease;height:auto;flex:1}.collapsable.collapsed,.settings #popup.collapsed{flex:0}.box-container,.settings #popup,.bar{background-color:#262626;border-radius:4px;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:stretch;height:auto;padding:10px 15px;width:166px}.bar{width:fit-content;flex-direction:row;justify-content:space-between;align-items:center}.settings{z-index:999999999999999;font-family:'IBM Plex Sans',sans-serif;font-size:18px;bottom:10px;left:10px;color:whitesmoke;position:fixed}.settings #popup{display:block;position:absolute;bottom:55px}.settings #wpm{width:120px;padding-left:8px;margin-left:15px;border-left:1px solid gray}.settings [data-setting-target=back]{cursor:pointer;height:24px;display:flex;align-items:center;margin-bottom:27px}.settings [data-setting-target=back]::after{content:'';height:2px;width:120%;background-color:#6f6f66;position:absolute;top:40px;left:0}.settings [data-setting-target=back] .back-icon{margin-right:10px;margin-right:18px;margin-left:7px}.settings [data-setting-target=back] .back-copy{margin-bottom:3px}.settings #page-bar{position:fixed;right:10px;bottom:10px}.settings #zoom-bar{position:fixed;right:10px;top:20px;padding:8px 5px}.settings #zoom-bar .setting{height:fit-content}.settings #zoom-bar .setting .arrows{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:stretch;height:70px}.settings #zoom-bar .setting .arrows>svg{height:auto;width:24px}.edible-display{background:#39393950;padding:1px 5px !important;font-family:'IBM Plex Mono',monospace;font-size:18px;border-style:none;outline:none;color:whitesmoke;border-radius:2px;text-align:center}.edible-display:hover{background:#7b7b7b35}.setting{display:flex;flex-wrap:nowrap;justify-content:flex-start;height:30px;user-select:none;-webkit-user-select:none}.setting.collapsable,.settings #popup.setting{height:40px}.setting.inline{height:30px;width:100%}.setting.expanded{height:200px}.setting.collapsed{height:0;flex:0}.setting .section,.setting .collapsed-section{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:stretch;cursor:pointer}.setting .editor-content .option{display:flex;margin:15px 0;cursor:pointer;opacity:70%}.setting .editor-content .option.selected{opacity:100%}.setting .color-blob{width:22px;height:22px;border-radius:30px;margin-right:10px}.setting .color-blob.selected{border:10px solid red}.setting .mode-icon{margin-right:20px}.setting .arrows{display:flex;flex-direction:column;padding:5px;justify-content:center;align-items:center}.setting .arrows svg,.setting .arrows div{opacity:.7;cursor:pointer;padding:2px 0}.setting .arrows svg:hover,.setting .arrows div:hover{opacity:1}[data-setting='mode'] [data-option='Underneath']{margin:0 0 20px 0 !important;display:flex;align-items:center}.-selector *,.-settings-section-list .option.selected *,.settings>#popup #color .option.selected *,.settings>#popup #mode .option.selected *,.-color-selector *{z-index:99}.-selector::before,.-settings-section-list .option.selected::before,.settings>#popup #color .option.selected::before,.settings>#popup #mode .option.selected::before,.-color-selector::before{content:'';height:50px;width:120%;background-color:#515151;position:absolute;z-index:0 !important;left:0;margin-top:-11px}.-selector::after,.-settings-section-list .option.selected::after,.settings>#popup #color .option.selected::after,.settings>#popup #mode .option.selected::after,.-color-selector::after{content:'';width:5px;height:50px;background-color:#2b6cce;position:absolute;left:0;margin-top:-11px}.-color-selector::before,.settings>#popup #color .option.selected::before{height:40px}.-color-selector::after,.settings>#popup #color .option.selected::after{height:40px}.-settings-section-list .option,.settings>#popup #color .option,.settings>#popup #mode .option{transition:all ease .2s;align-items:stretch !important}.lottie{position:relative;transition:all ease 0,5s}.lottie[data-loading=true]::before{content:\"\";position:absolute;margin:auto;width:25px;left:50%;height:25px}.lottie.click-lottie{margin-top:-10px;height:200px}"};function rt(t={}){this._n=function(){let t=this.range||{min:1,max:100};return 100/(t.max||100-t.min||1)},this.do((function(){this.updateTo(this.value);})),this.updateTo=function(t){this.element.setData({value:t}),this._setBarTo(t*this._n());},this._setBarTo=t=>{this._bar.css(`width ${t}%`),this._thumb.offset();},this._clipValue=t=>{let e=Math.round(t/this._n());this._lv!==e&&(this.value=e);},this._input=j$2("div.").addClass("pragma-slider-bg"),this._bar=j$2("div.").addClass("pragma-slider-bar"),this._thumb=j$2("div.pragma-slider-thumb"),this._bar.append(this._thumb),this._input.append(this._bar);let i=function(){this._clicked=!0;};this._input.listenTo("mousedown",i),this._thumb.listenTo("mousedown",i),document.addEventListener("mouseup",(()=>{this._input._clicked=!1;}));let n=!1;document.addEventListener("mousemove",(t=>{this._input._clicked&&!n&&(window.requestAnimationFrame((()=>{n=!1;let e=t.pageX-this._input.offset().left,i=Math.round(100*Math.min(e/this._input.rect().width,1));this._clipValue(i);})),n=!0);})),this.adopt(this._input),this.append(this._input),this.element.addClass("pragma-slider");}function at(){M$2.createChains(this,"idle","active"),this.setIdleTime=function(t=5e3){var e,i;return this._idler=(e=()=>{this.idleChain.exec();},i=()=>{this.activeChain.exec();},new x(t).onAfk((()=>{e&&e();})).onActive((()=>{i&&i();}))),this},this.extend("onIdle",(function(){return this._onIdle(...arguments),this})),this.extend("onActive",(function(){return this._onActive(...arguments),this}));}M$2.addStyles(st.slider);class lt extends q$2{constructor(t,e=70){super(),this.target=t,this._duration=e,this.target.css(`transition transform ${this._duration}ms ease; transform-origin top`),this.createWire("scale"),this.scale=100,this.on("scaleChange",(function(t,e){if(t==e)return !1;this.value=this.scale,this._scaleTo(this.scale);}));}setTarget(t){return this.target=t,this}set scaleStep(t){this._scaleStep=t;}get scaleStep(){return this._scaleStep||5}scaleUp(){this.scale+=this.scaleStep;}scaleDown(){this.scale-=this.scaleStep;}scaleTo(t){this.scale=t;}_scaleTo(t){return this.target.css(`transform scale(${t/100})`),this.currentPromise=new Promise((t=>{setTimeout((()=>{t(),this.currentPromise=null;}),this._duration+25);})),this.currentPromise}}let ht=t=>"\n    <div data-setting-target='display' class=\"slider-display\">\n        8\n    </div>\n    <div data-setting-target='slider'> =====|-- </div>\n".trim();class ct extends G{init(t,e,n={contentTemplate:ht}){super.init(...arguments),this.slider=J$2().run(rt).run((function(){n.min&&n.max&&this.setRange(n.min,n.max);})).do((()=>{this[e]=this.slider.value;})),this.editor._setContent(ht()),this.editor.element.findAll("[data-setting-target='slider']").forEach((t=>{t.html(" "),this.slider.appendTo(t);})),this.on("input",(t=>{this.setData({value:t}),this.parent.update(this.getData("setting"),t,this),this.slider.updateTo(t);}));}}class pt extends q$2{constructor(){super(),this.init();}init(){this.settingsMap=new Map,this.pragmaMap=new Map,this.createEvents("update","load");}_set(t,e){return e!==this.settingsMap.get(t)&&this.settingsMap.set(t,e)}create(t,e){const i=e,n=t._events.get(`${e}Change`);if(this.pragmaMap.set(e,t),!n){let i=t[e];t.createWire(e),t[e]=i;}this.adopt(t),t.on(`${e}Change`,((n,o)=>{console.log(`[${e} pragma]`,n,o),this.update(i,n,t);}));}update(t,e,i){e&&(t={[t]:e});for(let[e,n]of Object.entries(t))i||this.pragmaMap.get(e)[`set${e.capitalize()}`](n),this._set(e,n)&&this.triggerEvent("update",e,n,i);}get(...t){return 0==t.length&&(t=Array.from(this.pragmaMap.keys())),t.reduce(((t,e)=>("string"==typeof t?t={[t]:this.settingsMap.get(t)}:t[e]=this.settingsMap.get(e),t)))}toObj(){let t=new Map;for(let[e,i]of this.pragmaMap)t.set(e,i[e]);return t}toJSON(){return JSON.stringify(this.toObj())}}let dt=j$2("div.settings");function gt(t){const n={changeColor(i=this.value){j$2("body").findAll("[data-lector-marker-color]").forEach((t=>{t.css(`${t.getData("lectorMarkerColor")} ${i}`);})),t.mark.setColor(i);},changeFovea(e=this.value){t.mark.setFovea(e);},changeWpm(e=this.value){t.mark.setWpm(e);},changeFont(e=this.value){t.setFont(e);},changeMode(i=this.value){t.mark.setMode(i),j$2("body").findAll("[data-lector-marker-mode]").forEach((e=>{I(e,i,t.mark._color);}));},changePage(e=this.value){console.log("[ PAGINATOR ] change page to ",e),t.paginator&&t.paginator.goTo(e);},changeScale(e=this.value){t.scaler&&t.scaler.scaleTo(e);}};function o(t,e){t.addClass("selected"),e&&e.removeClass("selected");}function s(t){if(null==t)return;let i=j$2("div.color-blob.").css(`background-color ${t}`).setId(`${t}`).html(" ");return j$2("div#color.").append(i).html()}t.settings=(new pt).as(dt).on("update",(function(t,e,i){console.log("[SETTING]","syncing",this.toObj());})).run((function(){t.appendToRoot(this.element);}));let r=new et(t.settings,"color",{displayName:"Color",options:B,contentTemplate:t=>`${s(t.getData("option"))}\n\t\t\t<span> ${t.getData("description")} </span>\n  \t\t`.trim(),displayTemplate:(t,e)=>t.html(s(e))}).on("select",o).on("select",(t=>{n.changeColor(t.option);}));function a(t,e=""){return `<div class="mode-icon${e?"-"+e:""}" id="${t}">${N[`${t}-icon`]}</div>`}let l=new et(t.settings,"mode",{displayName:"Mode",options:A,contentTemplate:t=>`\n    ${a(t.getData("option"))} <span> ${t.getData("option")} </span>\n  `.trim(),displayTemplate:(t,e)=>{t.html(a(e,"menu"));}}).on("select",o).on("select",(function(t){n.changeMode(t.getData("option"));})),h=new nt(t.settings,"wpm",{displayName:"Speed",plusElement:N.increase,minusElement:N.decrease,step:5}).run((function(){this.element.find("#title").html(N["speed-icon"]).addClass("inline-icon-2");})).setWpmRange(20,2e3).on("input",(t=>{n.changeWpm(t);})).bind("+",(function(){this.wpm+=5;})).bind("-",(function(){this.wpm-=5;})),c=new ct(t.settings,"fovea",{displayName:"Fovea",displayTemplate:(t,e)=>{t.html(`${e}<span class='meta'>°</span>`);},min:2,max:10}).on("input",(t=>{n.changeFovea(t);})).bind("]",(function(){this.fovea+=5;})).bind("[",(function(){this.fovea-=5;})),p=new nt(t.settings,"page",{displayName:"Page"}).run((function(){this.createEvent("update"),this.element.find("#title").destroy(),this.element.append(j$2("div#meta.flex.meta").html("/420"));})).on("update",(function(t){this.setPageSilently(t),this.triggerEvent("pageChange",t,!0);})).on("input",(function(t,e){"boolean"!=typeof e&&(console.log("INPUT",t,e),n.changePage(t)),this.setPage(t);})).bind("shift+down",(function(){this.triggerEvent("input",this.page+1);}),"keyup").bind("shift+up",(function(){this.triggerEvent("input",this.page-1);}),"keyup"),d=j$2("div.bar#page-bar").append(p),g=new nt(t.settings,"scale",{plusElement:N["zoomin-white-af"],minusElement:N["zoomout-white-af"],step:5}).setScaleRange(20,200).run((function(){this.element.find("#scale-section").destroy();})).on("input",(t=>{n.changeScale(t);})).bind("ctrl+=",(function(){this.setScale(this.scale+5);})).bind("ctrl+-",(function(){this.setScale(this.scale-5);})),u=j$2("div.bar#zoom-bar").append(g),m=J$2("popup").append(r,l,c),f=j$2("div.inline-icon.clickable#settings-icon").html(N["settings-icon-white"]),C=J$2("settings-bar").addClass("bar").append(f,h);t.settings.append(m,C,d,u),m.createWire("hidden").on("hiddenChange",(function(t){t?this.element.hide():this.element.show();})),m.setHidden(!0),document.addEventListener("mousedown",(t=>{if(H(t,f))return m.setHidden(!m.hidden);m.setHidden(!H(t,m));})),t.on("load",(function(){let e=J$2("fader").run(at,(function(){this.elements=[],this.include=function(){let t=Array.from(arguments);return t.forEach((t=>t.listenTo("mouseover",(function(){this._hovered=this;})).listenTo("mouseout",(function(){this._hovered=!1;})))),this.elements=this.elements.concat(t),this};})).setIdleTime(3e3).include(t.settings).onIdle((function(){this.elements.forEach((t=>{t._hovered||t.css("opacity 0");}));})).onActive((function(){this.elements.forEach((t=>t.css("opacity 1")));}));if(t.settings.fader=e,t.paginator){let e=t.paginator;p.setPageRange(e.firstPage,e.lastPage),p._edible._setSize(e.lastPage.toString().length),p.element.find("#meta").html(`/${e.lastPage}`);}else d.hide();t.settings.update(D);}));}class ut extends q$2{constructor(){super(),this.background,this.popUp,this.popUpContent,this.nextBtn,this.backBtn;}render(){this.background=j$2("div.blurred-bg").appendTo("body"),this.popUpContent=j$2("div.popUpContent"),this.popUp=J$2("popUpPragma").as(j$2("div.popUp")).appendTo(this.background).append(this.popUpContent),this.nextBtn=j$2("div.next-btn").html(`<div class="next-icon">${N["back-icon"]}</div>`).appendTo(this.popUp),this.backBtn=j$2("div.back-btn").html(`<div class="back-icon">${N["back-icon"]}</div>`).appendTo(this.popUp);}}class mt extends q$2{async init(t,e){mt.loadedScript||V$2.load("https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js","lottie"),mt.loadedScript=!0,this.createEvent("load"),this.createElement(t,e);}createElement(t,e=M$2.rk8()){let i=this;this.as(Y$2`
                <lottie-player id="${e}" class='lottie' src="${t}" 
                    background="transparent"
                    speed="1" 
                    loop autoplay>
                </lottie-player>
            `.setData({loading:!0}).css("\n                transition all ease 0.3s\n                opacity 0\n            ").listenTo("load",(function(){this.setData({loading:!1}),this.css("opacity 1"),i.triggerEvent("load");})));}}var ft,Ct,wt;wt=!1,(Ct="loadedScript")in(ft=mt)?Object.defineProperty(ft,Ct,{value:wt,enumerable:!0,configurable:!0,writable:!0}):ft[Ct]=wt;const bt={click:"https://assets9.lottiefiles.com/private_files/lf30_thomociq.json",space:"https://assets4.lottiefiles.com/private_files/lf30_mohfpxha.json",speed:"https://assets8.lottiefiles.com/private_files/lf30_7sexuvbq.json"};class vt extends ut{constructor(){super(),this.render(),this.addContent();}addContent(){let t=[];function i(i,n){let o=j$2("div.boat.").html(`\n                            <h1 class="boat-title">${n}</h1>\n                        `).append(function(){return new mt(...arguments)}(bt[i],i).addClass(`${i}-lottie`)).hide();return t.push(o),o}i("click","Place the pointer by clicking on words").show(),i("space","Press space to start & stop the pointer"),i("speed","Change speed through the menu or keyboard"),this.popUpContent.append(...t),this.popUp.adopt(...t).value=0,this.nextBtn.listenTo("mousedown",(()=>{this.popUp.value++,this.popUp.children[this.popUp.value].show(),this.popUp.children[this.popUp._lv].hide(),2==this.popUp.value&&(this.popUp.value=0,this.nextBtn.html(`<div class="exit-icon">${N["exit-icon"]}</div>`).listenTo("mousedown",(()=>{this.background.hide(),this.popUpContent.hide();})));})),this.backBtn.listenTo("mousedown",(()=>{0==this.popUp.value?this.popUp.value=2:this.popUp.value--,this.popUp.children[this.popUp.value].show(),this.popUp.children[this.popUp._lv].hide();}));}}var xt=Object.freeze({__proto__:null,scrollingThresholdToPauseMark:50,scrollingThresholdToScroll:250});function yt(t,e){return new Promise(((i,n)=>{t.element.onRender((()=>{if(!t.settings)return n("no settings present");let o=t.settings.pragmaMap.get(e);if(o)return i(o);n("could not find setting");}));}))}const kt={onboarding:!1,wfy:!0,pragmatizeOnCreate:!1,experimental:!1,settings:!1,defaultsStyles:!0,debug:!1},Lt=t=>{let n,o=J$2().define({scrollIfNeeded(){return new Promise((e=>{if(console.log("checking if should auto scroll..."),console.log(this.isAutoScrolling,h(t.currentWord?.element,250)),this.isAutoScrolling||h(t.currentWord?.element,250))return e(!1);this.isAutoScrolling=!0,this.autoScroll().then((()=>{this.isAutoScrolling=!1,e(!0);}));}))},autoScroll:()=>(console.log("auto scrolling"),c(t.currentWord))}),s=new W(t).run((function(){this.autoScroller=o;})).define({correctBlueprint(t,e){if(!e)return t;let i=t.top+t.height/2;return e.height/2<t.height&&i>=e.top&&i<=e.height+e.top&&(t.height=e.height,t.top=e.top),t}}).run((function(){t.appendToRoot(this.element),t.async.define({beforeSummon:()=>new Promise((async t=>{console.log("before read.... scrolling if needed"),await o.scrollIfNeeded(),console.log("before read.... wait 300 ms"),t();}))});})).on("changeLine",(()=>{o.scrollIfNeeded();})),r=new Set,a=j$2("div#mark-indicator").listenTo("click",(()=>{console.log("current word",t.currentWord),t.summonToCurrentWord();})).html(`${N["arrow-down"]}`),l=!1,g=J$2().define({unminimizeMark(){for(let t of r)t&&(console.log(t),t.removeClass("mark-is-here"),r.delete(t));t.resetMark().then((()=>{t.mark.show(),this.minimized=!1;}));},minimizeMark(){t.mark.hide(),t.currentWord?.addClass("mark-is-here"),r.add(t.currentWord),this.minimized=!0;}}).run((function(){this.minimized=!0,t.on("load",(()=>{t.mark.on("mark",(()=>{this.minimized&&this.unminimizeMark();}));}));}));var u;return u=()=>{n&&clearTimeout(n),n=setTimeout((()=>{!function(){console.time("indicating mark");let e=1,i=-1;function n(t){if(h(t))return !1;let n=F(t);if(n===t)return null;var o=t=>t.element.top;return {surface:n,from:o(t)<=(n.isPragmaWord?o(n):window.scrollY)?e:i}}if(!t.isReading){let i=t.currentWord,o=!!i&&n(i);if(console.log("obscured by",o),o){let i=o.from===e;return o.surface.isPragmaLector?(l||(a.appendTo(t),l=!0),a[i?"addClass":"removeClass"]("upwards")):o.surface.addClass("mark-obscurer")[i?"addClass":"removeClass"]("from-top")[i?"removeClass":"addClass"]("from-bottom"),console.timeEnd("indicating mark")}}console.log("DESTROYING INDICATOR",a),a.destroy(),l=!1,t.element.findAll(".mark-obscurer").forEach((t=>t.removeClass("mark-obscurer","obscures-mark-from-top","obscures-mark-from-bottom"))),console.timeEnd("indicating mark");}();}),750);},d.on("scrollEnd",u),J$2().define({saveMark(){this._savedMark||(this._savedMark=!0,d.onNext("scrollEnd",(()=>{this._savedMark=!1;})),t.pause());}}).run((function(){p(((e,i,n)=>{console.log(Math.abs(i),xt),t.isReading?(Math.abs(i)>50||!V(t.mark.element))&&this.saveMark():g.minimizeMark();}));})),s},Tt=(t,e,i={shallow:!1})=>{let n=new z(e).as(t).setValue(0);function o(t,e="add"){function i(t,i){t[`${e}Class`](`hover-${i}`);}!function t(e,n=1,o=0){if(i(e,o),e.isInTheSameLine(1)&&n>o){t(e.next,n,o+1);}}(t,2),function t(e,n=1,o=0){if(o>0&&i(e,o),e.isInTheSameLine(-1)&&n>o){t(e.pre,n,o+1);}}(t,2);}let s=n.element.findAll("w");return null!=e&&0===s.length&&(n.setData({wordAtom:!0}),n.addClass("word-element"),n.listenTo("click",(function(){this.summon();})).listenTo("mouseover",(function(){o(this);})).listenTo("mouseout",(function(){o(this,"remove");}))),i.shallow||s.forEach(((t,e)=>{let i=Tt(t,e,{shallow:!0});n.add(i);})),n},Mt=async(t,i=kt)=>{t=j$2(t),i.wfy&&await L(t);let n=Tt(t),o=new Z("lector").as(t).setValue(0).connectTo(n);return console.log("lector root is",o.root),o.mark=Lt(o),i.settings&&gt(o),i.onboarding&&(o._popUp=new vt),i.pragmatizeOnCreate&&o.pragmatize(),i.experimental&&globalThis.pragmaSpace.mousetrapIntegration&&(o.bind("right",(t=>o.goToNext())),o.bind("left",(t=>o.goToPre())),o.bind("space",(t=>!1),"keydown"),o.bind("space",(function(){return this.toggle(),!1}),"keyup")),o};const _t=async(t,n=kt)=>{n.debug?Et():Ht();const s=n.styleInjector?(...t)=>{for(let e of t)n.styleInjector(e,st[e]);}:(...t)=>{for(let e of t)M$2.addStyles(st[e],e);};if(n.defaultStyles&&s("main","slider","settings"),n.fullStyles&&s("full"),!(a=n).stream&&!a.paginate){let e=await Mt(t,n);return pragmaSpace.onDocLoad((()=>{e.triggerEvent("load");})),e}var a;if(console.log("configuration appears to be a bit more complicated"),!n.experimental)return console.warn("EXPERIMENTAL FEATURES TURNED OFF");let l;if(n.stream&&n.paginate&&"stream"===n.paginate.from&&"infiniteScroll"===n.paginate.as){console.log("setting up streamer service");let o=(h=n.stream,J$2("streamer").setValue(0).run((function(){this.fetch=h,this.getContent=function(){return this.fetch(this.value)};}))),s=ot(o,t,n.paginate.config||{});console.log("crating reader..."),l=(await Mt(j$2(t).parentElement,n)).adopt(s,o),console.log("lector is",l),l.paginator=s,yt(l,"page").then((t=>{l.paginator.do((function(){t.triggerEvent("update",this.value);}));})).catch(),s.fill();}var h;if(n.scaler){let t=new lt(l.element);l.adopt(t),l.scaler=t,yt(l,"scale").then((t=>{l.scaler.on("scaleChange",(e=>{l.scaler.currentPromise&&(anime({targets:l.mark.element,opacity:0,duration:40}),l.scaler.currentPromise.then((()=>{anime({targets:l.mark.element,opacity:1,duration:150,easing:"easeInOutSine"}),l.resetMark();}))),t.setScale(e);}));}));}return pragmaSpace.onDocLoad((()=>{l.triggerEvent("load");})),l};var Pt=Object.freeze({__proto__:null,Settings:pt,addSettingsToLector:gt});function Ht(){console.log=console.time=console.timeEnd=console.warn=console.error=()=>{};}function Et(){console.log("dev mode");}function St(){const t={Lector:_t,Word:Tt,_e:j$2,_p:J$2,util:M$2,lecUtil:U,_shadow:b};for(let[e,i]of Object.entries(t))globalThis[e]=i;}

      var lector_esm = /*#__PURE__*/Object.freeze({
            __proto__: null,
            Lector: _t,
            Word: Tt,
            dev: Et,
            globalify: St,
            helpers: U,
            prod: Ht,
            ui: Pt
      });

      /**
       * @licstart The following is the entire license notice for the
       * Javascript code in this page
       *
       * Copyright 2020 Mozilla Foundation
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * @licend The above is the entire license notice for the
       * Javascript code in this page
       */

      var pdf = createCommonjsModule(function (module, exports) {
      (function webpackUniversalModuleDefinition(root, factory) {
      	module.exports = factory();
      })(commonjsGlobal, function() {
      return /******/ (() => { // webpackBootstrap
      /******/ 	var __webpack_modules__ = ([
      /* 0 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      Object.defineProperty(exports, "addLinkAttributes", ({
        enumerable: true,
        get: function () {
          return _display_utils.addLinkAttributes;
        }
      }));
      Object.defineProperty(exports, "getFilenameFromUrl", ({
        enumerable: true,
        get: function () {
          return _display_utils.getFilenameFromUrl;
        }
      }));
      Object.defineProperty(exports, "LinkTarget", ({
        enumerable: true,
        get: function () {
          return _display_utils.LinkTarget;
        }
      }));
      Object.defineProperty(exports, "loadScript", ({
        enumerable: true,
        get: function () {
          return _display_utils.loadScript;
        }
      }));
      Object.defineProperty(exports, "PDFDateString", ({
        enumerable: true,
        get: function () {
          return _display_utils.PDFDateString;
        }
      }));
      Object.defineProperty(exports, "RenderingCancelledException", ({
        enumerable: true,
        get: function () {
          return _display_utils.RenderingCancelledException;
        }
      }));
      Object.defineProperty(exports, "build", ({
        enumerable: true,
        get: function () {
          return _api.build;
        }
      }));
      Object.defineProperty(exports, "getDocument", ({
        enumerable: true,
        get: function () {
          return _api.getDocument;
        }
      }));
      Object.defineProperty(exports, "LoopbackPort", ({
        enumerable: true,
        get: function () {
          return _api.LoopbackPort;
        }
      }));
      Object.defineProperty(exports, "PDFDataRangeTransport", ({
        enumerable: true,
        get: function () {
          return _api.PDFDataRangeTransport;
        }
      }));
      Object.defineProperty(exports, "PDFWorker", ({
        enumerable: true,
        get: function () {
          return _api.PDFWorker;
        }
      }));
      Object.defineProperty(exports, "version", ({
        enumerable: true,
        get: function () {
          return _api.version;
        }
      }));
      Object.defineProperty(exports, "CMapCompressionType", ({
        enumerable: true,
        get: function () {
          return _util.CMapCompressionType;
        }
      }));
      Object.defineProperty(exports, "createObjectURL", ({
        enumerable: true,
        get: function () {
          return _util.createObjectURL;
        }
      }));
      Object.defineProperty(exports, "createPromiseCapability", ({
        enumerable: true,
        get: function () {
          return _util.createPromiseCapability;
        }
      }));
      Object.defineProperty(exports, "createValidAbsoluteUrl", ({
        enumerable: true,
        get: function () {
          return _util.createValidAbsoluteUrl;
        }
      }));
      Object.defineProperty(exports, "InvalidPDFException", ({
        enumerable: true,
        get: function () {
          return _util.InvalidPDFException;
        }
      }));
      Object.defineProperty(exports, "MissingPDFException", ({
        enumerable: true,
        get: function () {
          return _util.MissingPDFException;
        }
      }));
      Object.defineProperty(exports, "OPS", ({
        enumerable: true,
        get: function () {
          return _util.OPS;
        }
      }));
      Object.defineProperty(exports, "PasswordResponses", ({
        enumerable: true,
        get: function () {
          return _util.PasswordResponses;
        }
      }));
      Object.defineProperty(exports, "PermissionFlag", ({
        enumerable: true,
        get: function () {
          return _util.PermissionFlag;
        }
      }));
      Object.defineProperty(exports, "removeNullCharacters", ({
        enumerable: true,
        get: function () {
          return _util.removeNullCharacters;
        }
      }));
      Object.defineProperty(exports, "shadow", ({
        enumerable: true,
        get: function () {
          return _util.shadow;
        }
      }));
      Object.defineProperty(exports, "UnexpectedResponseException", ({
        enumerable: true,
        get: function () {
          return _util.UnexpectedResponseException;
        }
      }));
      Object.defineProperty(exports, "UNSUPPORTED_FEATURES", ({
        enumerable: true,
        get: function () {
          return _util.UNSUPPORTED_FEATURES;
        }
      }));
      Object.defineProperty(exports, "Util", ({
        enumerable: true,
        get: function () {
          return _util.Util;
        }
      }));
      Object.defineProperty(exports, "VerbosityLevel", ({
        enumerable: true,
        get: function () {
          return _util.VerbosityLevel;
        }
      }));
      Object.defineProperty(exports, "AnnotationLayer", ({
        enumerable: true,
        get: function () {
          return _annotation_layer.AnnotationLayer;
        }
      }));
      Object.defineProperty(exports, "apiCompatibilityParams", ({
        enumerable: true,
        get: function () {
          return _api_compatibility.apiCompatibilityParams;
        }
      }));
      Object.defineProperty(exports, "GlobalWorkerOptions", ({
        enumerable: true,
        get: function () {
          return _worker_options.GlobalWorkerOptions;
        }
      }));
      Object.defineProperty(exports, "renderTextLayer", ({
        enumerable: true,
        get: function () {
          return _text_layer.renderTextLayer;
        }
      }));
      Object.defineProperty(exports, "SVGGraphics", ({
        enumerable: true,
        get: function () {
          return _svg.SVGGraphics;
        }
      }));

      var _display_utils = __w_pdfjs_require__(1);

      var _api = __w_pdfjs_require__(5);

      var _util = __w_pdfjs_require__(2);

      var _annotation_layer = __w_pdfjs_require__(19);

      var _api_compatibility = __w_pdfjs_require__(9);

      var _worker_options = __w_pdfjs_require__(12);

      var _text_layer = __w_pdfjs_require__(21);

      var _svg = __w_pdfjs_require__(22);
      {
        const {
          isNodeJS
        } = __w_pdfjs_require__(4);

        if (isNodeJS) {
          const PDFNodeStream = __w_pdfjs_require__(23).PDFNodeStream;

          (0, _api.setPDFNetworkStreamFactory)(params => {
            return new PDFNodeStream(params);
          });
        } else {
          const PDFNetworkStream = __w_pdfjs_require__(26).PDFNetworkStream;

          let PDFFetchStream;

          if ((0, _display_utils.isFetchSupported)()) {
            PDFFetchStream = __w_pdfjs_require__(27).PDFFetchStream;
          }

          (0, _api.setPDFNetworkStreamFactory)(params => {
            if (PDFFetchStream && (0, _display_utils.isValidFetchUrl)(params.url)) {
              return new PDFFetchStream(params);
            }

            return new PDFNetworkStream(params);
          });
        }
      }

      /***/ }),
      /* 1 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.addLinkAttributes = addLinkAttributes;
      exports.deprecated = deprecated;
      exports.getFilenameFromUrl = getFilenameFromUrl;
      exports.isFetchSupported = isFetchSupported;
      exports.isValidFetchUrl = isValidFetchUrl;
      exports.loadScript = loadScript;
      exports.StatTimer = exports.RenderingCancelledException = exports.PDFDateString = exports.PageViewport = exports.LinkTarget = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.BaseCMapReaderFactory = exports.BaseCanvasFactory = void 0;

      var _util = __w_pdfjs_require__(2);

      const DEFAULT_LINK_REL = "noopener noreferrer nofollow";
      exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
      const SVG_NS = "http://www.w3.org/2000/svg";

      class BaseCanvasFactory {
        constructor() {
          if (this.constructor === BaseCanvasFactory) {
            (0, _util.unreachable)("Cannot initialize BaseCanvasFactory.");
          }
        }

        create(width, height) {
          (0, _util.unreachable)("Abstract method `create` called.");
        }

        reset(canvasAndContext, width, height) {
          if (!canvasAndContext.canvas) {
            throw new Error("Canvas is not specified");
          }

          if (width <= 0 || height <= 0) {
            throw new Error("Invalid canvas size");
          }

          canvasAndContext.canvas.width = width;
          canvasAndContext.canvas.height = height;
        }

        destroy(canvasAndContext) {
          if (!canvasAndContext.canvas) {
            throw new Error("Canvas is not specified");
          }

          canvasAndContext.canvas.width = 0;
          canvasAndContext.canvas.height = 0;
          canvasAndContext.canvas = null;
          canvasAndContext.context = null;
        }

      }

      exports.BaseCanvasFactory = BaseCanvasFactory;

      class DOMCanvasFactory extends BaseCanvasFactory {
        constructor({
          ownerDocument = globalThis.document
        } = {}) {
          super();
          this._document = ownerDocument;
        }

        create(width, height) {
          if (width <= 0 || height <= 0) {
            throw new Error("Invalid canvas size");
          }

          const canvas = this._document.createElement("canvas");

          const context = canvas.getContext("2d");
          canvas.width = width;
          canvas.height = height;
          return {
            canvas,
            context
          };
        }

      }

      exports.DOMCanvasFactory = DOMCanvasFactory;

      class BaseCMapReaderFactory {
        constructor({
          baseUrl = null,
          isCompressed = false
        }) {
          if (this.constructor === BaseCMapReaderFactory) {
            (0, _util.unreachable)("Cannot initialize BaseCMapReaderFactory.");
          }

          this.baseUrl = baseUrl;
          this.isCompressed = isCompressed;
        }

        async fetch({
          name
        }) {
          if (!this.baseUrl) {
            throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');
          }

          if (!name) {
            throw new Error("CMap name must be specified.");
          }

          const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
          const compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;
          return this._fetchData(url, compressionType).catch(reason => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
          });
        }

        _fetchData(url, compressionType) {
          (0, _util.unreachable)("Abstract method `_fetchData` called.");
        }

      }

      exports.BaseCMapReaderFactory = BaseCMapReaderFactory;

      class DOMCMapReaderFactory extends BaseCMapReaderFactory {
        _fetchData(url, compressionType) {
          if (isFetchSupported() && isValidFetchUrl(url, document.baseURI)) {
            return fetch(url).then(async response => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }

              let cMapData;

              if (this.isCompressed) {
                cMapData = new Uint8Array(await response.arrayBuffer());
              } else {
                cMapData = (0, _util.stringToBytes)(await response.text());
              }

              return {
                cMapData,
                compressionType
              };
            });
          }

          return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", url, true);

            if (this.isCompressed) {
              request.responseType = "arraybuffer";
            }

            request.onreadystatechange = () => {
              if (request.readyState !== XMLHttpRequest.DONE) {
                return;
              }

              if (request.status === 200 || request.status === 0) {
                let cMapData;

                if (this.isCompressed && request.response) {
                  cMapData = new Uint8Array(request.response);
                } else if (!this.isCompressed && request.responseText) {
                  cMapData = (0, _util.stringToBytes)(request.responseText);
                }

                if (cMapData) {
                  resolve({
                    cMapData,
                    compressionType
                  });
                  return;
                }
              }

              reject(new Error(request.statusText));
            };

            request.send(null);
          });
        }

      }

      exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

      class DOMSVGFactory {
        create(width, height) {
          (0, _util.assert)(width > 0 && height > 0, "Invalid SVG dimensions");
          const svg = document.createElementNS(SVG_NS, "svg:svg");
          svg.setAttribute("version", "1.1");
          svg.setAttribute("width", width + "px");
          svg.setAttribute("height", height + "px");
          svg.setAttribute("preserveAspectRatio", "none");
          svg.setAttribute("viewBox", "0 0 " + width + " " + height);
          return svg;
        }

        createElement(type) {
          (0, _util.assert)(typeof type === "string", "Invalid SVG element type");
          return document.createElementNS(SVG_NS, type);
        }

      }

      exports.DOMSVGFactory = DOMSVGFactory;

      class PageViewport {
        constructor({
          viewBox,
          scale,
          rotation,
          offsetX = 0,
          offsetY = 0,
          dontFlip = false
        }) {
          this.viewBox = viewBox;
          this.scale = scale;
          this.rotation = rotation;
          this.offsetX = offsetX;
          this.offsetY = offsetY;
          const centerX = (viewBox[2] + viewBox[0]) / 2;
          const centerY = (viewBox[3] + viewBox[1]) / 2;
          let rotateA, rotateB, rotateC, rotateD;
          rotation = rotation % 360;
          rotation = rotation < 0 ? rotation + 360 : rotation;

          switch (rotation) {
            case 180:
              rotateA = -1;
              rotateB = 0;
              rotateC = 0;
              rotateD = 1;
              break;

            case 90:
              rotateA = 0;
              rotateB = 1;
              rotateC = 1;
              rotateD = 0;
              break;

            case 270:
              rotateA = 0;
              rotateB = -1;
              rotateC = -1;
              rotateD = 0;
              break;

            case 0:
              rotateA = 1;
              rotateB = 0;
              rotateC = 0;
              rotateD = -1;
              break;

            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }

          if (dontFlip) {
            rotateC = -rotateC;
            rotateD = -rotateD;
          }

          let offsetCanvasX, offsetCanvasY;
          let width, height;

          if (rotateA === 0) {
            offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
            width = Math.abs(viewBox[3] - viewBox[1]) * scale;
            height = Math.abs(viewBox[2] - viewBox[0]) * scale;
          } else {
            offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
            width = Math.abs(viewBox[2] - viewBox[0]) * scale;
            height = Math.abs(viewBox[3] - viewBox[1]) * scale;
          }

          this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
          this.width = width;
          this.height = height;
        }

        clone({
          scale = this.scale,
          rotation = this.rotation,
          offsetX = this.offsetX,
          offsetY = this.offsetY,
          dontFlip = false
        } = {}) {
          return new PageViewport({
            viewBox: this.viewBox.slice(),
            scale,
            rotation,
            offsetX,
            offsetY,
            dontFlip
          });
        }

        convertToViewportPoint(x, y) {
          return _util.Util.applyTransform([x, y], this.transform);
        }

        convertToViewportRectangle(rect) {
          const topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);

          const bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);

          return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
        }

        convertToPdfPoint(x, y) {
          return _util.Util.applyInverseTransform([x, y], this.transform);
        }

      }

      exports.PageViewport = PageViewport;

      class RenderingCancelledException extends _util.BaseException {
        constructor(msg, type) {
          super(msg);
          this.type = type;
        }

      }

      exports.RenderingCancelledException = RenderingCancelledException;
      const LinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4
      };
      exports.LinkTarget = LinkTarget;

      function addLinkAttributes(link, {
        url,
        target,
        rel,
        enabled = true
      } = {}) {
        (0, _util.assert)(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
        const urlNullRemoved = (0, _util.removeNullCharacters)(url);

        if (enabled) {
          link.href = link.title = urlNullRemoved;
        } else {
          link.href = "";
          link.title = `Disabled: ${urlNullRemoved}`;

          link.onclick = () => {
            return false;
          };
        }

        let targetStr = "";

        switch (target) {
          case LinkTarget.NONE:
            break;

          case LinkTarget.SELF:
            targetStr = "_self";
            break;

          case LinkTarget.BLANK:
            targetStr = "_blank";
            break;

          case LinkTarget.PARENT:
            targetStr = "_parent";
            break;

          case LinkTarget.TOP:
            targetStr = "_top";
            break;
        }

        link.target = targetStr;
        link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
      }

      function getFilenameFromUrl(url) {
        const anchor = url.indexOf("#");
        const query = url.indexOf("?");
        const end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
        return url.substring(url.lastIndexOf("/", end) + 1, end);
      }

      class StatTimer {
        constructor() {
          this.started = Object.create(null);
          this.times = [];
        }

        time(name) {
          if (name in this.started) {
            (0, _util.warn)(`Timer is already running for ${name}`);
          }

          this.started[name] = Date.now();
        }

        timeEnd(name) {
          if (!(name in this.started)) {
            (0, _util.warn)(`Timer has not been started for ${name}`);
          }

          this.times.push({
            name,
            start: this.started[name],
            end: Date.now()
          });
          delete this.started[name];
        }

        toString() {
          const outBuf = [];
          let longest = 0;

          for (const time of this.times) {
            const name = time.name;

            if (name.length > longest) {
              longest = name.length;
            }
          }

          for (const time of this.times) {
            const duration = time.end - time.start;
            outBuf.push(`${time.name.padEnd(longest)} ${duration}ms\n`);
          }

          return outBuf.join("");
        }

      }

      exports.StatTimer = StatTimer;

      function isFetchSupported() {
        return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
      }

      function isValidFetchUrl(url, baseUrl) {
        try {
          const {
            protocol
          } = baseUrl ? new URL(url, baseUrl) : new URL(url);
          return protocol === "http:" || protocol === "https:";
        } catch (ex) {
          return false;
        }
      }

      function loadScript(src, removeScriptElement = false) {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;

          script.onload = function (evt) {
            if (removeScriptElement) {
              script.remove();
            }

            resolve(evt);
          };

          script.onerror = function () {
            reject(new Error(`Cannot load script at: ${script.src}`));
          };

          (document.head || document.documentElement).appendChild(script);
        });
      }

      function deprecated(details) {
        console.log("Deprecated API usage: " + details);
      }

      let pdfDateStringRegex;

      class PDFDateString {
        static toDateObject(input) {
          if (!input || !(0, _util.isString)(input)) {
            return null;
          }

          if (!pdfDateStringRegex) {
            pdfDateStringRegex = new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
          }

          const matches = pdfDateStringRegex.exec(input);

          if (!matches) {
            return null;
          }

          const year = parseInt(matches[1], 10);
          let month = parseInt(matches[2], 10);
          month = month >= 1 && month <= 12 ? month - 1 : 0;
          let day = parseInt(matches[3], 10);
          day = day >= 1 && day <= 31 ? day : 1;
          let hour = parseInt(matches[4], 10);
          hour = hour >= 0 && hour <= 23 ? hour : 0;
          let minute = parseInt(matches[5], 10);
          minute = minute >= 0 && minute <= 59 ? minute : 0;
          let second = parseInt(matches[6], 10);
          second = second >= 0 && second <= 59 ? second : 0;
          const universalTimeRelation = matches[7] || "Z";
          let offsetHour = parseInt(matches[8], 10);
          offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
          let offsetMinute = parseInt(matches[9], 10) || 0;
          offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;

          if (universalTimeRelation === "-") {
            hour += offsetHour;
            minute += offsetMinute;
          } else if (universalTimeRelation === "+") {
            hour -= offsetHour;
            minute -= offsetMinute;
          }

          return new Date(Date.UTC(year, month, day, hour, minute, second));
        }

      }

      exports.PDFDateString = PDFDateString;

      /***/ }),
      /* 2 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.arrayByteLength = arrayByteLength;
      exports.arraysToBytes = arraysToBytes;
      exports.assert = assert;
      exports.bytesToString = bytesToString;
      exports.createPromiseCapability = createPromiseCapability;
      exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
      exports.encodeToXmlString = encodeToXmlString;
      exports.escapeString = escapeString;
      exports.getModificationDate = getModificationDate;
      exports.getVerbosityLevel = getVerbosityLevel;
      exports.info = info;
      exports.isArrayBuffer = isArrayBuffer;
      exports.isArrayEqual = isArrayEqual;
      exports.isAscii = isAscii;
      exports.isBool = isBool;
      exports.isNum = isNum;
      exports.isSameOrigin = isSameOrigin;
      exports.isString = isString;
      exports.objectFromEntries = objectFromEntries;
      exports.objectSize = objectSize;
      exports.removeNullCharacters = removeNullCharacters;
      exports.setVerbosityLevel = setVerbosityLevel;
      exports.shadow = shadow;
      exports.string32 = string32;
      exports.stringToBytes = stringToBytes;
      exports.stringToPDFString = stringToPDFString;
      exports.stringToUTF16BEString = stringToUTF16BEString;
      exports.stringToUTF8String = stringToUTF8String;
      exports.unreachable = unreachable;
      exports.utf8StringToString = utf8StringToString;
      exports.warn = warn;
      exports.VerbosityLevel = exports.Util = exports.UNSUPPORTED_FEATURES = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.PageActionEventType = exports.OPS = exports.MissingPDFException = exports.IsLittleEndianCached = exports.IsEvalSupportedCached = exports.InvalidPDFException = exports.ImageKind = exports.IDENTITY_MATRIX = exports.FormatError = exports.FontType = exports.FONT_IDENTITY_MATRIX = exports.DocumentActionEventType = exports.createObjectURL = exports.CMapCompressionType = exports.BaseException = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.AnnotationActionEventType = exports.AbortException = void 0;

      __w_pdfjs_require__(3);

      const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
      exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
      const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
      exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
      const PermissionFlag = {
        PRINT: 0x04,
        MODIFY_CONTENTS: 0x08,
        COPY: 0x10,
        MODIFY_ANNOTATIONS: 0x20,
        FILL_INTERACTIVE_FORMS: 0x100,
        COPY_FOR_ACCESSIBILITY: 0x200,
        ASSEMBLE: 0x400,
        PRINT_HIGH_QUALITY: 0x800
      };
      exports.PermissionFlag = PermissionFlag;
      const TextRenderingMode = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      };
      exports.TextRenderingMode = TextRenderingMode;
      const ImageKind = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      };
      exports.ImageKind = ImageKind;
      const AnnotationType = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
      };
      exports.AnnotationType = AnnotationType;
      const AnnotationStateModelType = {
        MARKED: "Marked",
        REVIEW: "Review"
      };
      exports.AnnotationStateModelType = AnnotationStateModelType;
      const AnnotationMarkedState = {
        MARKED: "Marked",
        UNMARKED: "Unmarked"
      };
      exports.AnnotationMarkedState = AnnotationMarkedState;
      const AnnotationReviewState = {
        ACCEPTED: "Accepted",
        REJECTED: "Rejected",
        CANCELLED: "Cancelled",
        COMPLETED: "Completed",
        NONE: "None"
      };
      exports.AnnotationReviewState = AnnotationReviewState;
      const AnnotationReplyType = {
        GROUP: "Group",
        REPLY: "R"
      };
      exports.AnnotationReplyType = AnnotationReplyType;
      const AnnotationFlag = {
        INVISIBLE: 0x01,
        HIDDEN: 0x02,
        PRINT: 0x04,
        NOZOOM: 0x08,
        NOROTATE: 0x10,
        NOVIEW: 0x20,
        READONLY: 0x40,
        LOCKED: 0x80,
        TOGGLENOVIEW: 0x100,
        LOCKEDCONTENTS: 0x200
      };
      exports.AnnotationFlag = AnnotationFlag;
      const AnnotationFieldFlag = {
        READONLY: 0x0000001,
        REQUIRED: 0x0000002,
        NOEXPORT: 0x0000004,
        MULTILINE: 0x0001000,
        PASSWORD: 0x0002000,
        NOTOGGLETOOFF: 0x0004000,
        RADIO: 0x0008000,
        PUSHBUTTON: 0x0010000,
        COMBO: 0x0020000,
        EDIT: 0x0040000,
        SORT: 0x0080000,
        FILESELECT: 0x0100000,
        MULTISELECT: 0x0200000,
        DONOTSPELLCHECK: 0x0400000,
        DONOTSCROLL: 0x0800000,
        COMB: 0x1000000,
        RICHTEXT: 0x2000000,
        RADIOSINUNISON: 0x2000000,
        COMMITONSELCHANGE: 0x4000000
      };
      exports.AnnotationFieldFlag = AnnotationFieldFlag;
      const AnnotationBorderStyleType = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      };
      exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
      const AnnotationActionEventType = {
        E: "Mouse Enter",
        X: "Mouse Exit",
        D: "Mouse Down",
        U: "Mouse Up",
        Fo: "Focus",
        Bl: "Blur",
        PO: "PageOpen",
        PC: "PageClose",
        PV: "PageVisible",
        PI: "PageInvisible",
        K: "Keystroke",
        F: "Format",
        V: "Validate",
        C: "Calculate"
      };
      exports.AnnotationActionEventType = AnnotationActionEventType;
      const DocumentActionEventType = {
        WC: "WillClose",
        WS: "WillSave",
        DS: "DidSave",
        WP: "WillPrint",
        DP: "DidPrint"
      };
      exports.DocumentActionEventType = DocumentActionEventType;
      const PageActionEventType = {
        O: "PageOpen",
        C: "PageClose"
      };
      exports.PageActionEventType = PageActionEventType;
      const StreamType = {
        UNKNOWN: "UNKNOWN",
        FLATE: "FLATE",
        LZW: "LZW",
        DCT: "DCT",
        JPX: "JPX",
        JBIG: "JBIG",
        A85: "A85",
        AHX: "AHX",
        CCF: "CCF",
        RLX: "RLX"
      };
      exports.StreamType = StreamType;
      const FontType = {
        UNKNOWN: "UNKNOWN",
        TYPE1: "TYPE1",
        TYPE1C: "TYPE1C",
        CIDFONTTYPE0: "CIDFONTTYPE0",
        CIDFONTTYPE0C: "CIDFONTTYPE0C",
        TRUETYPE: "TRUETYPE",
        CIDFONTTYPE2: "CIDFONTTYPE2",
        TYPE3: "TYPE3",
        OPENTYPE: "OPENTYPE",
        TYPE0: "TYPE0",
        MMTYPE1: "MMTYPE1"
      };
      exports.FontType = FontType;
      const VerbosityLevel = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      };
      exports.VerbosityLevel = VerbosityLevel;
      const CMapCompressionType = {
        NONE: 0,
        BINARY: 1,
        STREAM: 2
      };
      exports.CMapCompressionType = CMapCompressionType;
      const OPS = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotations: 78,
        endAnnotations: 79,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintJpegXObject: 82,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91
      };
      exports.OPS = OPS;
      const UNSUPPORTED_FEATURES = {
        unknown: "unknown",
        forms: "forms",
        javaScript: "javaScript",
        smask: "smask",
        shadingPattern: "shadingPattern",
        font: "font",
        errorTilingPattern: "errorTilingPattern",
        errorExtGState: "errorExtGState",
        errorXObject: "errorXObject",
        errorFontLoadType3: "errorFontLoadType3",
        errorFontState: "errorFontState",
        errorFontMissing: "errorFontMissing",
        errorFontTranslate: "errorFontTranslate",
        errorColorSpace: "errorColorSpace",
        errorOperatorList: "errorOperatorList",
        errorFontToUnicode: "errorFontToUnicode",
        errorFontLoadNative: "errorFontLoadNative",
        errorFontGetPath: "errorFontGetPath",
        errorMarkedContent: "errorMarkedContent"
      };
      exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
      const PasswordResponses = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      exports.PasswordResponses = PasswordResponses;
      let verbosity = VerbosityLevel.WARNINGS;

      function setVerbosityLevel(level) {
        if (Number.isInteger(level)) {
          verbosity = level;
        }
      }

      function getVerbosityLevel() {
        return verbosity;
      }

      function info(msg) {
        if (verbosity >= VerbosityLevel.INFOS) {
          console.log(`Info: ${msg}`);
        }
      }

      function warn(msg) {
        if (verbosity >= VerbosityLevel.WARNINGS) {
          console.log(`Warning: ${msg}`);
        }
      }

      function unreachable(msg) {
        throw new Error(msg);
      }

      function assert(cond, msg) {
        if (!cond) {
          unreachable(msg);
        }
      }

      function isSameOrigin(baseUrl, otherUrl) {
        let base;

        try {
          base = new URL(baseUrl);

          if (!base.origin || base.origin === "null") {
            return false;
          }
        } catch (e) {
          return false;
        }

        const other = new URL(otherUrl, base);
        return base.origin === other.origin;
      }

      function _isValidProtocol(url) {
        if (!url) {
          return false;
        }

        switch (url.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;

          default:
            return false;
        }
      }

      function createValidAbsoluteUrl(url, baseUrl) {
        if (!url) {
          return null;
        }

        try {
          const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

          if (_isValidProtocol(absoluteUrl)) {
            return absoluteUrl;
          }
        } catch (ex) {}

        return null;
      }

      function shadow(obj, prop, value) {
        Object.defineProperty(obj, prop, {
          value,
          enumerable: true,
          configurable: true,
          writable: false
        });
        return value;
      }

      const BaseException = function BaseExceptionClosure() {
        function BaseException(message) {
          if (this.constructor === BaseException) {
            unreachable("Cannot initialize BaseException.");
          }

          this.message = message;
          this.name = this.constructor.name;
        }

        BaseException.prototype = new Error();
        BaseException.constructor = BaseException;
        return BaseException;
      }();

      exports.BaseException = BaseException;

      class PasswordException extends BaseException {
        constructor(msg, code) {
          super(msg);
          this.code = code;
        }

      }

      exports.PasswordException = PasswordException;

      class UnknownErrorException extends BaseException {
        constructor(msg, details) {
          super(msg);
          this.details = details;
        }

      }

      exports.UnknownErrorException = UnknownErrorException;

      class InvalidPDFException extends BaseException {}

      exports.InvalidPDFException = InvalidPDFException;

      class MissingPDFException extends BaseException {}

      exports.MissingPDFException = MissingPDFException;

      class UnexpectedResponseException extends BaseException {
        constructor(msg, status) {
          super(msg);
          this.status = status;
        }

      }

      exports.UnexpectedResponseException = UnexpectedResponseException;

      class FormatError extends BaseException {}

      exports.FormatError = FormatError;

      class AbortException extends BaseException {}

      exports.AbortException = AbortException;
      const NullCharactersRegExp = /\x00/g;

      function removeNullCharacters(str) {
        if (typeof str !== "string") {
          warn("The argument for removeNullCharacters must be a string.");
          return str;
        }

        return str.replace(NullCharactersRegExp, "");
      }

      function bytesToString(bytes) {
        assert(bytes !== null && typeof bytes === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
        const length = bytes.length;
        const MAX_ARGUMENT_COUNT = 8192;

        if (length < MAX_ARGUMENT_COUNT) {
          return String.fromCharCode.apply(null, bytes);
        }

        const strBuf = [];

        for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
          const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
          const chunk = bytes.subarray(i, chunkEnd);
          strBuf.push(String.fromCharCode.apply(null, chunk));
        }

        return strBuf.join("");
      }

      function stringToBytes(str) {
        assert(typeof str === "string", "Invalid argument for stringToBytes");
        const length = str.length;
        const bytes = new Uint8Array(length);

        for (let i = 0; i < length; ++i) {
          bytes[i] = str.charCodeAt(i) & 0xff;
        }

        return bytes;
      }

      function arrayByteLength(arr) {
        if (arr.length !== undefined) {
          return arr.length;
        }

        assert(arr.byteLength !== undefined, "arrayByteLength - invalid argument.");
        return arr.byteLength;
      }

      function arraysToBytes(arr) {
        const length = arr.length;

        if (length === 1 && arr[0] instanceof Uint8Array) {
          return arr[0];
        }

        let resultLength = 0;

        for (let i = 0; i < length; i++) {
          resultLength += arrayByteLength(arr[i]);
        }

        let pos = 0;
        const data = new Uint8Array(resultLength);

        for (let i = 0; i < length; i++) {
          let item = arr[i];

          if (!(item instanceof Uint8Array)) {
            if (typeof item === "string") {
              item = stringToBytes(item);
            } else {
              item = new Uint8Array(item);
            }
          }

          const itemLength = item.byteLength;
          data.set(item, pos);
          pos += itemLength;
        }

        return data;
      }

      function string32(value) {
        return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
      }

      function objectSize(obj) {
        return Object.keys(obj).length;
      }

      function objectFromEntries(iterable) {
        return Object.assign(Object.create(null), Object.fromEntries(iterable));
      }

      function isLittleEndian() {
        const buffer8 = new Uint8Array(4);
        buffer8[0] = 1;
        const view32 = new Uint32Array(buffer8.buffer, 0, 1);
        return view32[0] === 1;
      }

      const IsLittleEndianCached = {
        get value() {
          return shadow(this, "value", isLittleEndian());
        }

      };
      exports.IsLittleEndianCached = IsLittleEndianCached;

      function isEvalSupported() {
        try {
          new Function("");
          return true;
        } catch (e) {
          return false;
        }
      }

      const IsEvalSupportedCached = {
        get value() {
          return shadow(this, "value", isEvalSupported());
        }

      };
      exports.IsEvalSupportedCached = IsEvalSupportedCached;
      const hexNumbers = [...Array(256).keys()].map(n => n.toString(16).padStart(2, "0"));

      class Util {
        static makeHexColor(r, g, b) {
          return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
        }

        static transform(m1, m2) {
          return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
        }

        static applyTransform(p, m) {
          const xt = p[0] * m[0] + p[1] * m[2] + m[4];
          const yt = p[0] * m[1] + p[1] * m[3] + m[5];
          return [xt, yt];
        }

        static applyInverseTransform(p, m) {
          const d = m[0] * m[3] - m[1] * m[2];
          const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
          const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
          return [xt, yt];
        }

        static getAxialAlignedBoundingBox(r, m) {
          const p1 = Util.applyTransform(r, m);
          const p2 = Util.applyTransform(r.slice(2, 4), m);
          const p3 = Util.applyTransform([r[0], r[3]], m);
          const p4 = Util.applyTransform([r[2], r[1]], m);
          return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
        }

        static inverseTransform(m) {
          const d = m[0] * m[3] - m[1] * m[2];
          return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
        }

        static apply3dTransform(m, v) {
          return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
        }

        static singularValueDecompose2dScale(m) {
          const transpose = [m[0], m[2], m[1], m[3]];
          const a = m[0] * transpose[0] + m[1] * transpose[2];
          const b = m[0] * transpose[1] + m[1] * transpose[3];
          const c = m[2] * transpose[0] + m[3] * transpose[2];
          const d = m[2] * transpose[1] + m[3] * transpose[3];
          const first = (a + d) / 2;
          const second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
          const sx = first + second || 1;
          const sy = first - second || 1;
          return [Math.sqrt(sx), Math.sqrt(sy)];
        }

        static normalizeRect(rect) {
          const r = rect.slice(0);

          if (rect[0] > rect[2]) {
            r[0] = rect[2];
            r[2] = rect[0];
          }

          if (rect[1] > rect[3]) {
            r[1] = rect[3];
            r[3] = rect[1];
          }

          return r;
        }

        static intersect(rect1, rect2) {
          function compare(a, b) {
            return a - b;
          }

          const orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
          const orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
          const result = [];
          rect1 = Util.normalizeRect(rect1);
          rect2 = Util.normalizeRect(rect2);

          if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
            result[0] = orderedX[1];
            result[2] = orderedX[2];
          } else {
            return null;
          }

          if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
            result[1] = orderedY[1];
            result[3] = orderedY[2];
          } else {
            return null;
          }

          return result;
        }

      }

      exports.Util = Util;
      const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

      function stringToPDFString(str) {
        const length = str.length,
              strBuf = [];

        if (str[0] === "\xFE" && str[1] === "\xFF") {
          for (let i = 2; i < length; i += 2) {
            strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
          }
        } else if (str[0] === "\xFF" && str[1] === "\xFE") {
          for (let i = 2; i < length; i += 2) {
            strBuf.push(String.fromCharCode(str.charCodeAt(i + 1) << 8 | str.charCodeAt(i)));
          }
        } else {
          for (let i = 0; i < length; ++i) {
            const code = PDFStringTranslateTable[str.charCodeAt(i)];
            strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
          }
        }

        return strBuf.join("");
      }

      function escapeString(str) {
        return str.replace(/([()\\\n\r])/g, match => {
          if (match === "\n") {
            return "\\n";
          } else if (match === "\r") {
            return "\\r";
          }

          return `\\${match}`;
        });
      }

      function isAscii(str) {
        return /^[\x00-\x7F]*$/.test(str);
      }

      function stringToUTF16BEString(str) {
        const buf = ["\xFE\xFF"];

        for (let i = 0, ii = str.length; i < ii; i++) {
          const char = str.charCodeAt(i);
          buf.push(String.fromCharCode(char >> 8 & 0xff));
          buf.push(String.fromCharCode(char & 0xff));
        }

        return buf.join("");
      }

      function stringToUTF8String(str) {
        return decodeURIComponent(escape(str));
      }

      function utf8StringToString(str) {
        return unescape(encodeURIComponent(str));
      }

      function isBool(v) {
        return typeof v === "boolean";
      }

      function isNum(v) {
        return typeof v === "number";
      }

      function isString(v) {
        return typeof v === "string";
      }

      function isArrayBuffer(v) {
        return typeof v === "object" && v !== null && v.byteLength !== undefined;
      }

      function isArrayEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }

        return arr1.every(function (element, index) {
          return element === arr2[index];
        });
      }

      function getModificationDate(date = new Date()) {
        const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
        return buffer.join("");
      }

      function createPromiseCapability() {
        const capability = Object.create(null);
        let isSettled = false;
        Object.defineProperty(capability, "settled", {
          get() {
            return isSettled;
          }

        });
        capability.promise = new Promise(function (resolve, reject) {
          capability.resolve = function (data) {
            isSettled = true;
            resolve(data);
          };

          capability.reject = function (reason) {
            isSettled = true;
            reject(reason);
          };
        });
        return capability;
      }

      const createObjectURL = function createObjectURLClosure() {
        const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return function createObjectURL(data, contentType, forceDataSchema = false) {
          if (!forceDataSchema && URL.createObjectURL) {
            const blob = new Blob([data], {
              type: contentType
            });
            return URL.createObjectURL(blob);
          }

          let buffer = `data:${contentType};base64,`;

          for (let i = 0, ii = data.length; i < ii; i += 3) {
            const b1 = data[i] & 0xff;
            const b2 = data[i + 1] & 0xff;
            const b3 = data[i + 2] & 0xff;
            const d1 = b1 >> 2,
                  d2 = (b1 & 3) << 4 | b2 >> 4;
            const d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
            const d4 = i + 2 < ii ? b3 & 0x3f : 64;
            buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
          }

          return buffer;
        };
      }();

      exports.createObjectURL = createObjectURL;
      const XMLEntities = {
        0x3c: "&lt;",
        0x3e: "&gt;",
        0x26: "&amp;",
        0x22: "&quot;",
        0x27: "&apos;"
      };

      function encodeToXmlString(str) {
        const buffer = [];
        let start = 0;

        for (let i = 0, ii = str.length; i < ii; i++) {
          const char = str.codePointAt(i);

          if (0x20 <= char && char <= 0x7e) {
            const entity = XMLEntities[char];

            if (entity) {
              if (start < i) {
                buffer.push(str.substring(start, i));
              }

              buffer.push(entity);
              start = i + 1;
            }
          } else {
            if (start < i) {
              buffer.push(str.substring(start, i));
            }

            buffer.push(`&#x${char.toString(16).toUpperCase()};`);

            if (char > 0xd7ff && (char < 0xe000 || char > 0xfffd)) {
              i++;
            }

            start = i + 1;
          }
        }

        if (buffer.length === 0) {
          return str;
        }

        if (start < str.length) {
          buffer.push(str.substring(start, str.length));
        }

        return buffer.join("");
      }

      /***/ }),
      /* 3 */
      /***/ ((__unused_webpack_module, __unused_webpack_exports, __w_pdfjs_require__) => {



      __w_pdfjs_require__(4);

      /***/ }),
      /* 4 */
      /***/ ((__unused_webpack_module, exports) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.isNodeJS = void 0;
      const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
      exports.isNodeJS = isNodeJS;

      /***/ }),
      /* 5 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.getDocument = getDocument;
      exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
      exports.version = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultCMapReaderFactory = exports.DefaultCanvasFactory = exports.build = void 0;

      var _util = __w_pdfjs_require__(2);

      var _display_utils = __w_pdfjs_require__(1);

      var _font_loader = __w_pdfjs_require__(6);

      var _node_utils = __w_pdfjs_require__(7);

      var _annotation_storage = __w_pdfjs_require__(8);

      var _api_compatibility = __w_pdfjs_require__(9);

      var _canvas = __w_pdfjs_require__(10);

      var _worker_options = __w_pdfjs_require__(12);

      var _is_node = __w_pdfjs_require__(4);

      var _message_handler = __w_pdfjs_require__(13);

      var _metadata = __w_pdfjs_require__(14);

      var _optional_content_config = __w_pdfjs_require__(16);

      var _transport_stream = __w_pdfjs_require__(17);

      var _webgl = __w_pdfjs_require__(18);

      const DEFAULT_RANGE_CHUNK_SIZE = 65536;
      const RENDERING_CANCELLED_TIMEOUT = 100;
      const DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
      exports.DefaultCanvasFactory = DefaultCanvasFactory;
      const DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
      exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
      let createPDFNetworkStream;

      function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
        createPDFNetworkStream = pdfNetworkStreamFactory;
      }

      function getDocument(src) {
        const task = new PDFDocumentLoadingTask();
        let source;

        if (typeof src === "string") {
          source = {
            url: src
          };
        } else if ((0, _util.isArrayBuffer)(src)) {
          source = {
            data: src
          };
        } else if (src instanceof PDFDataRangeTransport) {
          source = {
            range: src
          };
        } else {
          if (typeof src !== "object") {
            throw new Error("Invalid parameter in getDocument, " + "need either Uint8Array, string or a parameter object");
          }

          if (!src.url && !src.data && !src.range) {
            throw new Error("Invalid parameter object: need either .data, .range or .url");
          }

          source = src;
        }

        const params = Object.create(null);
        let rangeTransport = null,
            worker = null;

        for (const key in source) {
          if (key === "url" && typeof window !== "undefined") {
            params[key] = new URL(source[key], window.location).href;
            continue;
          } else if (key === "range") {
            rangeTransport = source[key];
            continue;
          } else if (key === "worker") {
            worker = source[key];
            continue;
          } else if (key === "data" && !(source[key] instanceof Uint8Array)) {
            const pdfBytes = source[key];

            if (typeof pdfBytes === "string") {
              params[key] = (0, _util.stringToBytes)(pdfBytes);
            } else if (typeof pdfBytes === "object" && pdfBytes !== null && !isNaN(pdfBytes.length)) {
              params[key] = new Uint8Array(pdfBytes);
            } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
              params[key] = new Uint8Array(pdfBytes);
            } else {
              throw new Error("Invalid PDF binary data: either typed array, " + "string or array-like object is expected in the " + "data property.");
            }

            continue;
          }

          params[key] = source[key];
        }

        params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
        params.CMapReaderFactory = params.CMapReaderFactory || DefaultCMapReaderFactory;
        params.ignoreErrors = params.stopAtErrors !== true;
        params.fontExtraProperties = params.fontExtraProperties === true;
        params.pdfBug = params.pdfBug === true;

        if (!Number.isInteger(params.maxImageSize)) {
          params.maxImageSize = -1;
        }

        if (typeof params.isEvalSupported !== "boolean") {
          params.isEvalSupported = true;
        }

        if (typeof params.disableFontFace !== "boolean") {
          params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
        }

        if (typeof params.ownerDocument === "undefined") {
          params.ownerDocument = globalThis.document;
        }

        if (typeof params.disableRange !== "boolean") {
          params.disableRange = false;
        }

        if (typeof params.disableStream !== "boolean") {
          params.disableStream = false;
        }

        if (typeof params.disableAutoFetch !== "boolean") {
          params.disableAutoFetch = false;
        }

        (0, _util.setVerbosityLevel)(params.verbosity);

        if (!worker) {
          const workerParams = {
            verbosity: params.verbosity,
            port: _worker_options.GlobalWorkerOptions.workerPort
          };
          worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
          task._worker = worker;
        }

        const docId = task.docId;
        worker.promise.then(function () {
          if (task.destroyed) {
            throw new Error("Loading aborted");
          }

          const workerIdPromise = _fetchDocument(worker, params, rangeTransport, docId);

          const networkStreamPromise = new Promise(function (resolve) {
            let networkStream;

            if (rangeTransport) {
              networkStream = new _transport_stream.PDFDataTransportStream({
                length: params.length,
                initialData: params.initialData,
                progressiveDone: params.progressiveDone,
                disableRange: params.disableRange,
                disableStream: params.disableStream
              }, rangeTransport);
            } else if (!params.data) {
              networkStream = createPDFNetworkStream({
                url: params.url,
                length: params.length,
                httpHeaders: params.httpHeaders,
                withCredentials: params.withCredentials,
                rangeChunkSize: params.rangeChunkSize,
                disableRange: params.disableRange,
                disableStream: params.disableStream
              });
            }

            resolve(networkStream);
          });
          return Promise.all([workerIdPromise, networkStreamPromise]).then(function ([workerId, networkStream]) {
            if (task.destroyed) {
              throw new Error("Loading aborted");
            }

            const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
            messageHandler.postMessageTransfers = worker.postMessageTransfers;
            const transport = new WorkerTransport(messageHandler, task, networkStream, params);
            task._transport = transport;
            messageHandler.send("Ready", null);
          });
        }).catch(task._capability.reject);
        return task;
      }

      function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
        if (worker.destroyed) {
          return Promise.reject(new Error("Worker was destroyed"));
        }

        if (pdfDataRangeTransport) {
          source.length = pdfDataRangeTransport.length;
          source.initialData = pdfDataRangeTransport.initialData;
          source.progressiveDone = pdfDataRangeTransport.progressiveDone;
        }

        return worker.messageHandler.sendWithPromise("GetDocRequest", {
          docId,
          apiVersion: '2.7.570',
          source: {
            data: source.data,
            url: source.url,
            password: source.password,
            disableAutoFetch: source.disableAutoFetch,
            rangeChunkSize: source.rangeChunkSize,
            length: source.length
          },
          maxImageSize: source.maxImageSize,
          disableFontFace: source.disableFontFace,
          postMessageTransfers: worker.postMessageTransfers,
          docBaseUrl: source.docBaseUrl,
          ignoreErrors: source.ignoreErrors,
          isEvalSupported: source.isEvalSupported,
          fontExtraProperties: source.fontExtraProperties
        }).then(function (workerId) {
          if (worker.destroyed) {
            throw new Error("Worker was destroyed");
          }

          return workerId;
        });
      }

      const PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
        let nextDocumentId = 0;

        class PDFDocumentLoadingTask {
          constructor() {
            this._capability = (0, _util.createPromiseCapability)();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + nextDocumentId++;
            this.destroyed = false;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }

          get promise() {
            return this._capability.promise;
          }

          destroy() {
            this.destroyed = true;
            const transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
            return transportDestroyed.then(() => {
              this._transport = null;

              if (this._worker) {
                this._worker.destroy();

                this._worker = null;
              }
            });
          }

        }

        return PDFDocumentLoadingTask;
      }();

      class PDFDataRangeTransport {
        constructor(length, initialData, progressiveDone = false) {
          this.length = length;
          this.initialData = initialData;
          this.progressiveDone = progressiveDone;
          this._rangeListeners = [];
          this._progressListeners = [];
          this._progressiveReadListeners = [];
          this._progressiveDoneListeners = [];
          this._readyCapability = (0, _util.createPromiseCapability)();
        }

        addRangeListener(listener) {
          this._rangeListeners.push(listener);
        }

        addProgressListener(listener) {
          this._progressListeners.push(listener);
        }

        addProgressiveReadListener(listener) {
          this._progressiveReadListeners.push(listener);
        }

        addProgressiveDoneListener(listener) {
          this._progressiveDoneListeners.push(listener);
        }

        onDataRange(begin, chunk) {
          for (const listener of this._rangeListeners) {
            listener(begin, chunk);
          }
        }

        onDataProgress(loaded, total) {
          this._readyCapability.promise.then(() => {
            for (const listener of this._progressListeners) {
              listener(loaded, total);
            }
          });
        }

        onDataProgressiveRead(chunk) {
          this._readyCapability.promise.then(() => {
            for (const listener of this._progressiveReadListeners) {
              listener(chunk);
            }
          });
        }

        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (const listener of this._progressiveDoneListeners) {
              listener();
            }
          });
        }

        transportReady() {
          this._readyCapability.resolve();
        }

        requestDataRange(begin, end) {
          (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
        }

        abort() {}

      }

      exports.PDFDataRangeTransport = PDFDataRangeTransport;

      class PDFDocumentProxy {
        constructor(pdfInfo, transport) {
          this._pdfInfo = pdfInfo;
          this._transport = transport;
        }

        get annotationStorage() {
          return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
        }

        get numPages() {
          return this._pdfInfo.numPages;
        }

        get fingerprint() {
          return this._pdfInfo.fingerprint;
        }

        getPage(pageNumber) {
          return this._transport.getPage(pageNumber);
        }

        getPageIndex(ref) {
          return this._transport.getPageIndex(ref);
        }

        getDestinations() {
          return this._transport.getDestinations();
        }

        getDestination(id) {
          return this._transport.getDestination(id);
        }

        getPageLabels() {
          return this._transport.getPageLabels();
        }

        getPageLayout() {
          return this._transport.getPageLayout();
        }

        getPageMode() {
          return this._transport.getPageMode();
        }

        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }

        getOpenAction() {
          return this._transport.getOpenAction();
        }

        getAttachments() {
          return this._transport.getAttachments();
        }

        getJavaScript() {
          return this._transport.getJavaScript();
        }

        getJSActions() {
          return this._transport.getDocJSActions();
        }

        getOutline() {
          return this._transport.getOutline();
        }

        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }

        getPermissions() {
          return this._transport.getPermissions();
        }

        getMetadata() {
          return this._transport.getMetadata();
        }

        getMarkInfo() {
          return this._transport.getMarkInfo();
        }

        getData() {
          return this._transport.getData();
        }

        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }

        getStats() {
          return this._transport.getStats();
        }

        cleanup() {
          return this._transport.startCleanup();
        }

        destroy() {
          return this.loadingTask.destroy();
        }

        get loadingParams() {
          return this._transport.loadingParams;
        }

        get loadingTask() {
          return this._transport.loadingTask;
        }

        saveDocument(annotationStorage) {
          return this._transport.saveDocument(annotationStorage);
        }

        getFieldObjects() {
          return this._transport.getFieldObjects();
        }

        hasJSActions() {
          return this._transport.hasJSActions();
        }

        getCalculationOrderIds() {
          return this._transport.getCalculationOrderIds();
        }

      }

      exports.PDFDocumentProxy = PDFDocumentProxy;

      class PDFPageProxy {
        constructor(pageIndex, pageInfo, transport, ownerDocument, pdfBug = false) {
          this._pageIndex = pageIndex;
          this._pageInfo = pageInfo;
          this._ownerDocument = ownerDocument;
          this._transport = transport;
          this._stats = pdfBug ? new _display_utils.StatTimer() : null;
          this._pdfBug = pdfBug;
          this.commonObjs = transport.commonObjs;
          this.objs = new PDFObjects();
          this.cleanupAfterRender = false;
          this.pendingCleanup = false;
          this._intentStates = new Map();
          this.destroyed = false;
        }

        get pageNumber() {
          return this._pageIndex + 1;
        }

        get rotate() {
          return this._pageInfo.rotate;
        }

        get ref() {
          return this._pageInfo.ref;
        }

        get userUnit() {
          return this._pageInfo.userUnit;
        }

        get view() {
          return this._pageInfo.view;
        }

        getViewport({
          scale,
          rotation = this.rotate,
          offsetX = 0,
          offsetY = 0,
          dontFlip = false
        } = {}) {
          return new _display_utils.PageViewport({
            viewBox: this.view,
            scale,
            rotation,
            offsetX,
            offsetY,
            dontFlip
          });
        }

        getAnnotations({
          intent = null
        } = {}) {
          if (!this.annotationsPromise || this.annotationsIntent !== intent) {
            this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, intent);
            this.annotationsIntent = intent;
          }

          return this.annotationsPromise;
        }

        getJSActions() {
          return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
        }

        render({
          canvasContext,
          viewport,
          intent = "display",
          enableWebGL = false,
          renderInteractiveForms = false,
          transform = null,
          imageLayer = null,
          canvasFactory = null,
          background = null,
          annotationStorage = null,
          optionalContentConfigPromise = null
        }) {
          if (this._stats) {
            this._stats.time("Overall");
          }

          const renderingIntent = intent === "print" ? "print" : "display";
          this.pendingCleanup = false;

          if (!optionalContentConfigPromise) {
            optionalContentConfigPromise = this._transport.getOptionalContentConfig();
          }

          let intentState = this._intentStates.get(renderingIntent);

          if (!intentState) {
            intentState = Object.create(null);

            this._intentStates.set(renderingIntent, intentState);
          }

          if (intentState.streamReaderCancelTimeout) {
            clearTimeout(intentState.streamReaderCancelTimeout);
            intentState.streamReaderCancelTimeout = null;
          }

          const canvasFactoryInstance = canvasFactory || new DefaultCanvasFactory({
            ownerDocument: this._ownerDocument
          });
          const webGLContext = new _webgl.WebGLContext({
            enable: enableWebGL
          });

          if (!intentState.displayReadyCapability) {
            intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
            intentState.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: false
            };

            if (this._stats) {
              this._stats.time("Page Request");
            }

            this._pumpOperatorList({
              pageIndex: this._pageIndex,
              intent: renderingIntent,
              renderInteractiveForms: renderInteractiveForms === true,
              annotationStorage: annotationStorage?.getAll() || null
            });
          }

          const complete = error => {
            const i = intentState.renderTasks.indexOf(internalRenderTask);

            if (i >= 0) {
              intentState.renderTasks.splice(i, 1);
            }

            if (this.cleanupAfterRender || renderingIntent === "print") {
              this.pendingCleanup = true;
            }

            this._tryCleanup();

            if (error) {
              internalRenderTask.capability.reject(error);

              this._abortOperatorList({
                intentState,
                reason: error
              });
            } else {
              internalRenderTask.capability.resolve();
            }

            if (this._stats) {
              this._stats.timeEnd("Rendering");

              this._stats.timeEnd("Overall");
            }
          };

          const internalRenderTask = new InternalRenderTask({
            callback: complete,
            params: {
              canvasContext,
              viewport,
              transform,
              imageLayer,
              background
            },
            objs: this.objs,
            commonObjs: this.commonObjs,
            operatorList: intentState.operatorList,
            pageIndex: this._pageIndex,
            canvasFactory: canvasFactoryInstance,
            webGLContext,
            useRequestAnimationFrame: renderingIntent !== "print",
            pdfBug: this._pdfBug
          });

          if (!intentState.renderTasks) {
            intentState.renderTasks = [];
          }

          intentState.renderTasks.push(internalRenderTask);
          const renderTask = internalRenderTask.task;
          Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
            if (this.pendingCleanup) {
              complete();
              return;
            }

            if (this._stats) {
              this._stats.time("Rendering");
            }

            internalRenderTask.initializeGraphics({
              transparency,
              optionalContentConfig
            });
            internalRenderTask.operatorListChanged();
          }).catch(complete);
          return renderTask;
        }

        getOperatorList() {
          function operatorListChanged() {
            if (intentState.operatorList.lastChunk) {
              intentState.opListReadCapability.resolve(intentState.operatorList);
              const i = intentState.renderTasks.indexOf(opListTask);

              if (i >= 0) {
                intentState.renderTasks.splice(i, 1);
              }
            }
          }

          const renderingIntent = "oplist";

          let intentState = this._intentStates.get(renderingIntent);

          if (!intentState) {
            intentState = Object.create(null);

            this._intentStates.set(renderingIntent, intentState);
          }

          let opListTask;

          if (!intentState.opListReadCapability) {
            opListTask = Object.create(null);
            opListTask.operatorListChanged = operatorListChanged;
            intentState.opListReadCapability = (0, _util.createPromiseCapability)();
            intentState.renderTasks = [];
            intentState.renderTasks.push(opListTask);
            intentState.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: false
            };

            if (this._stats) {
              this._stats.time("Page Request");
            }

            this._pumpOperatorList({
              pageIndex: this._pageIndex,
              intent: renderingIntent
            });
          }

          return intentState.opListReadCapability.promise;
        }

        streamTextContent({
          normalizeWhitespace = false,
          disableCombineTextItems = false
        } = {}) {
          const TEXT_CONTENT_CHUNK_SIZE = 100;
          return this._transport.messageHandler.sendWithStream("GetTextContent", {
            pageIndex: this._pageIndex,
            normalizeWhitespace: normalizeWhitespace === true,
            combineTextItems: disableCombineTextItems !== true
          }, {
            highWaterMark: TEXT_CONTENT_CHUNK_SIZE,

            size(textContent) {
              return textContent.items.length;
            }

          });
        }

        getTextContent(params = {}) {
          const readableStream = this.streamTextContent(params);
          return new Promise(function (resolve, reject) {
            function pump() {
              reader.read().then(function ({
                value,
                done
              }) {
                if (done) {
                  resolve(textContent);
                  return;
                }

                Object.assign(textContent.styles, value.styles);
                textContent.items.push(...value.items);
                pump();
              }, reject);
            }

            const reader = readableStream.getReader();
            const textContent = {
              items: [],
              styles: Object.create(null)
            };
            pump();
          });
        }

        _destroy() {
          this.destroyed = true;
          this._transport.pageCache[this._pageIndex] = null;
          const waitOn = [];

          for (const [intent, intentState] of this._intentStates) {
            this._abortOperatorList({
              intentState,
              reason: new Error("Page was destroyed."),
              force: true
            });

            if (intent === "oplist") {
              continue;
            }

            for (const internalRenderTask of intentState.renderTasks) {
              waitOn.push(internalRenderTask.completed);
              internalRenderTask.cancel();
            }
          }

          this.objs.clear();
          this.annotationsPromise = null;
          this._jsActionsPromise = null;
          this.pendingCleanup = false;
          return Promise.all(waitOn);
        }

        cleanup(resetStats = false) {
          this.pendingCleanup = true;
          return this._tryCleanup(resetStats);
        }

        _tryCleanup(resetStats = false) {
          if (!this.pendingCleanup) {
            return false;
          }

          for (const {
            renderTasks,
            operatorList
          } of this._intentStates.values()) {
            if (renderTasks.length !== 0 || !operatorList.lastChunk) {
              return false;
            }
          }

          this._intentStates.clear();

          this.objs.clear();
          this.annotationsPromise = null;
          this._jsActionsPromise = null;

          if (resetStats && this._stats) {
            this._stats = new _display_utils.StatTimer();
          }

          this.pendingCleanup = false;
          return true;
        }

        _startRenderPage(transparency, intent) {
          const intentState = this._intentStates.get(intent);

          if (!intentState) {
            return;
          }

          if (this._stats) {
            this._stats.timeEnd("Page Request");
          }

          if (intentState.displayReadyCapability) {
            intentState.displayReadyCapability.resolve(transparency);
          }
        }

        _renderPageChunk(operatorListChunk, intentState) {
          for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
            intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
            intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
          }

          intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

          for (let i = 0; i < intentState.renderTasks.length; i++) {
            intentState.renderTasks[i].operatorListChanged();
          }

          if (operatorListChunk.lastChunk) {
            this._tryCleanup();
          }
        }

        _pumpOperatorList(args) {
          (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');

          const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);

          const reader = readableStream.getReader();

          const intentState = this._intentStates.get(args.intent);

          intentState.streamReader = reader;

          const pump = () => {
            reader.read().then(({
              value,
              done
            }) => {
              if (done) {
                intentState.streamReader = null;
                return;
              }

              if (this._transport.destroyed) {
                return;
              }

              this._renderPageChunk(value, intentState);

              pump();
            }, reason => {
              intentState.streamReader = null;

              if (this._transport.destroyed) {
                return;
              }

              if (intentState.operatorList) {
                intentState.operatorList.lastChunk = true;

                for (let i = 0; i < intentState.renderTasks.length; i++) {
                  intentState.renderTasks[i].operatorListChanged();
                }

                this._tryCleanup();
              }

              if (intentState.displayReadyCapability) {
                intentState.displayReadyCapability.reject(reason);
              } else if (intentState.opListReadCapability) {
                intentState.opListReadCapability.reject(reason);
              } else {
                throw reason;
              }
            });
          };

          pump();
        }

        _abortOperatorList({
          intentState,
          reason,
          force = false
        }) {
          (0, _util.assert)(reason instanceof Error || typeof reason === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');

          if (!intentState.streamReader) {
            return;
          }

          if (!force) {
            if (intentState.renderTasks.length !== 0) {
              return;
            }

            if (reason instanceof _display_utils.RenderingCancelledException) {
              intentState.streamReaderCancelTimeout = setTimeout(() => {
                this._abortOperatorList({
                  intentState,
                  reason,
                  force: true
                });

                intentState.streamReaderCancelTimeout = null;
              }, RENDERING_CANCELLED_TIMEOUT);
              return;
            }
          }

          intentState.streamReader.cancel(new _util.AbortException(reason?.message));
          intentState.streamReader = null;

          if (this._transport.destroyed) {
            return;
          }

          for (const [intent, curIntentState] of this._intentStates) {
            if (curIntentState === intentState) {
              this._intentStates.delete(intent);

              break;
            }
          }

          this.cleanup();
        }

        get stats() {
          return this._stats;
        }

      }

      exports.PDFPageProxy = PDFPageProxy;

      class LoopbackPort {
        constructor(defer = true) {
          this._listeners = [];
          this._defer = defer;
          this._deferred = Promise.resolve(undefined);
        }

        postMessage(obj, transfers) {
          function cloneValue(value) {
            if (typeof value !== "object" || value === null) {
              return value;
            }

            if (cloned.has(value)) {
              return cloned.get(value);
            }

            let buffer, result;

            if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
              if (transfers?.includes(buffer)) {
                result = new value.constructor(buffer, value.byteOffset, value.byteLength);
              } else {
                result = new value.constructor(value);
              }

              cloned.set(value, result);
              return result;
            }

            result = Array.isArray(value) ? [] : {};
            cloned.set(value, result);

            for (const i in value) {
              let desc,
                  p = value;

              while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
                p = Object.getPrototypeOf(p);
              }

              if (typeof desc.value === "undefined") {
                continue;
              }

              if (typeof desc.value === "function") {
                if (value.hasOwnProperty && value.hasOwnProperty(i)) {
                  throw new Error(`LoopbackPort.postMessage - cannot clone: ${value[i]}`);
                }

                continue;
              }

              result[i] = cloneValue(desc.value);
            }

            return result;
          }

          if (!this._defer) {
            this._listeners.forEach(listener => {
              listener.call(this, {
                data: obj
              });
            });

            return;
          }

          const cloned = new WeakMap();
          const e = {
            data: cloneValue(obj)
          };

          this._deferred.then(() => {
            this._listeners.forEach(listener => {
              listener.call(this, e);
            });
          });
        }

        addEventListener(name, listener) {
          this._listeners.push(listener);
        }

        removeEventListener(name, listener) {
          const i = this._listeners.indexOf(listener);

          this._listeners.splice(i, 1);
        }

        terminate() {
          this._listeners.length = 0;
        }

      }

      exports.LoopbackPort = LoopbackPort;

      const PDFWorker = function PDFWorkerClosure() {
        const pdfWorkerPorts = new WeakMap();
        let isWorkerDisabled = false;
        let fallbackWorkerSrc;
        let nextFakeWorkerId = 0;
        let fakeWorkerCapability;

        if (_is_node.isNodeJS && typeof commonjsRequire === "function") {
          isWorkerDisabled = true;
          fallbackWorkerSrc = "./pdf.worker.js";
        } else if (typeof document === "object" && "currentScript" in document) {
          const pdfjsFilePath = document.currentScript?.src;

          if (pdfjsFilePath) {
            fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
          }
        }

        function getWorkerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc) {
            return _worker_options.GlobalWorkerOptions.workerSrc;
          }

          if (typeof fallbackWorkerSrc !== "undefined") {
            if (!_is_node.isNodeJS) {
              (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
            }

            return fallbackWorkerSrc;
          }

          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }

        function getMainThreadWorkerMessageHandler() {
          let mainWorkerMessageHandler;

          try {
            mainWorkerMessageHandler = globalThis.pdfjsWorker?.WorkerMessageHandler;
          } catch (ex) {}

          return mainWorkerMessageHandler || null;
        }

        function setupFakeWorkerGlobal() {
          if (fakeWorkerCapability) {
            return fakeWorkerCapability.promise;
          }

          fakeWorkerCapability = (0, _util.createPromiseCapability)();

          const loader = async function () {
            const mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

            if (mainWorkerMessageHandler) {
              return mainWorkerMessageHandler;
            }

            if (_is_node.isNodeJS && typeof commonjsRequire === "function") {
              const worker = eval("require")(getWorkerSrc());
              return worker.WorkerMessageHandler;
            }

            await (0, _display_utils.loadScript)(getWorkerSrc());
            return window.pdfjsWorker.WorkerMessageHandler;
          };

          loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
          return fakeWorkerCapability.promise;
        }

        function createCDNWrapper(url) {
          const wrapper = "importScripts('" + url + "');";
          return URL.createObjectURL(new Blob([wrapper]));
        }

        class PDFWorker {
          constructor({
            name = null,
            port = null,
            verbosity = (0, _util.getVerbosityLevel)()
          } = {}) {
            if (port && pdfWorkerPorts.has(port)) {
              throw new Error("Cannot use more than one PDFWorker per port");
            }

            this.name = name;
            this.destroyed = false;
            this.postMessageTransfers = true;
            this.verbosity = verbosity;
            this._readyCapability = (0, _util.createPromiseCapability)();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;

            if (port) {
              pdfWorkerPorts.set(port, this);

              this._initializeFromPort(port);

              return;
            }

            this._initialize();
          }

          get promise() {
            return this._readyCapability.promise;
          }

          get port() {
            return this._port;
          }

          get messageHandler() {
            return this._messageHandler;
          }

          _initializeFromPort(port) {
            this._port = port;
            this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);

            this._messageHandler.on("ready", function () {});

            this._readyCapability.resolve();
          }

          _initialize() {
            if (typeof Worker !== "undefined" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
              let workerSrc = getWorkerSrc();

              try {
                if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                  workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
                }

                const worker = new Worker(workerSrc);
                const messageHandler = new _message_handler.MessageHandler("main", "worker", worker);

                const terminateEarly = () => {
                  worker.removeEventListener("error", onWorkerError);
                  messageHandler.destroy();
                  worker.terminate();

                  if (this.destroyed) {
                    this._readyCapability.reject(new Error("Worker was destroyed"));
                  } else {
                    this._setupFakeWorker();
                  }
                };

                const onWorkerError = () => {
                  if (!this._webWorker) {
                    terminateEarly();
                  }
                };

                worker.addEventListener("error", onWorkerError);
                messageHandler.on("test", data => {
                  worker.removeEventListener("error", onWorkerError);

                  if (this.destroyed) {
                    terminateEarly();
                    return;
                  }

                  if (data) {
                    this._messageHandler = messageHandler;
                    this._port = worker;
                    this._webWorker = worker;

                    if (!data.supportTransfers) {
                      this.postMessageTransfers = false;
                    }

                    this._readyCapability.resolve();

                    messageHandler.send("configure", {
                      verbosity: this.verbosity
                    });
                  } else {
                    this._setupFakeWorker();

                    messageHandler.destroy();
                    worker.terminate();
                  }
                });
                messageHandler.on("ready", data => {
                  worker.removeEventListener("error", onWorkerError);

                  if (this.destroyed) {
                    terminateEarly();
                    return;
                  }

                  try {
                    sendTest();
                  } catch (e) {
                    this._setupFakeWorker();
                  }
                });

                const sendTest = () => {
                  const testObj = new Uint8Array([this.postMessageTransfers ? 255 : 0]);

                  try {
                    messageHandler.send("test", testObj, [testObj.buffer]);
                  } catch (ex) {
                    (0, _util.warn)("Cannot use postMessage transfers.");
                    testObj[0] = 0;
                    messageHandler.send("test", testObj);
                  }
                };

                sendTest();
                return;
              } catch (e) {
                (0, _util.info)("The worker has been disabled.");
              }
            }

            this._setupFakeWorker();
          }

          _setupFakeWorker() {
            if (!isWorkerDisabled) {
              (0, _util.warn)("Setting up fake worker.");
              isWorkerDisabled = true;
            }

            setupFakeWorkerGlobal().then(WorkerMessageHandler => {
              if (this.destroyed) {
                this._readyCapability.reject(new Error("Worker was destroyed"));

                return;
              }

              const port = new LoopbackPort();
              this._port = port;
              const id = "fake" + nextFakeWorkerId++;
              const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
              WorkerMessageHandler.setup(workerHandler, port);
              const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
              this._messageHandler = messageHandler;

              this._readyCapability.resolve();

              messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }).catch(reason => {
              this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
            });
          }

          destroy() {
            this.destroyed = true;

            if (this._webWorker) {
              this._webWorker.terminate();

              this._webWorker = null;
            }

            pdfWorkerPorts.delete(this._port);
            this._port = null;

            if (this._messageHandler) {
              this._messageHandler.destroy();

              this._messageHandler = null;
            }
          }

          static fromPort(params) {
            if (!params || !params.port) {
              throw new Error("PDFWorker.fromPort - invalid method signature.");
            }

            if (pdfWorkerPorts.has(params.port)) {
              return pdfWorkerPorts.get(params.port);
            }

            return new PDFWorker(params);
          }

          static getWorkerSrc() {
            return getWorkerSrc();
          }

        }

        return PDFWorker;
      }();

      exports.PDFWorker = PDFWorker;

      class WorkerTransport {
        constructor(messageHandler, loadingTask, networkStream, params) {
          this.messageHandler = messageHandler;
          this.loadingTask = loadingTask;
          this.commonObjs = new PDFObjects();
          this.fontLoader = new _font_loader.FontLoader({
            docId: loadingTask.docId,
            onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
            ownerDocument: params.ownerDocument
          });
          this._params = params;
          this.CMapReaderFactory = new params.CMapReaderFactory({
            baseUrl: params.cMapUrl,
            isCompressed: params.cMapPacked
          });
          this.destroyed = false;
          this.destroyCapability = null;
          this._passwordCapability = null;
          this._networkStream = networkStream;
          this._fullReader = null;
          this._lastProgress = null;
          this.pageCache = [];
          this.pagePromises = [];
          this.downloadInfoCapability = (0, _util.createPromiseCapability)();
          this.setupMessageHandler();
        }

        get loadingTaskSettled() {
          return this.loadingTask._capability.settled;
        }

        destroy() {
          if (this.destroyCapability) {
            return this.destroyCapability.promise;
          }

          this.destroyed = true;
          this.destroyCapability = (0, _util.createPromiseCapability)();

          if (this._passwordCapability) {
            this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
          }

          const waitOn = [];
          this.pageCache.forEach(function (page) {
            if (page) {
              waitOn.push(page._destroy());
            }
          });
          this.pageCache.length = 0;
          this.pagePromises.length = 0;
          const terminated = this.messageHandler.sendWithPromise("Terminate", null);
          waitOn.push(terminated);

          if (this.loadingTaskSettled) {
            const annotationStorageResetModified = this.loadingTask.promise.then(pdfDocument => {
              if (pdfDocument.hasOwnProperty("annotationStorage")) {
                pdfDocument.annotationStorage.resetModified();
              }
            }).catch(() => {});
            waitOn.push(annotationStorageResetModified);
          }

          Promise.all(waitOn).then(() => {
            this.commonObjs.clear();
            this.fontLoader.clear();
            this._hasJSActionsPromise = null;

            if (this._networkStream) {
              this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
            }

            if (this.messageHandler) {
              this.messageHandler.destroy();
              this.messageHandler = null;
            }

            this.destroyCapability.resolve();
          }, this.destroyCapability.reject);
          return this.destroyCapability.promise;
        }

        setupMessageHandler() {
          const {
            messageHandler,
            loadingTask
          } = this;
          messageHandler.on("GetReader", (data, sink) => {
            (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
            this._fullReader = this._networkStream.getFullReader();

            this._fullReader.onProgress = evt => {
              this._lastProgress = {
                loaded: evt.loaded,
                total: evt.total
              };
            };

            sink.onPull = () => {
              this._fullReader.read().then(function ({
                value,
                done
              }) {
                if (done) {
                  sink.close();
                  return;
                }

                (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetReader - expected an ArrayBuffer.");
                sink.enqueue(new Uint8Array(value), 1, [value]);
              }).catch(reason => {
                sink.error(reason);
              });
            };

            sink.onCancel = reason => {
              this._fullReader.cancel(reason);

              sink.ready.catch(readyReason => {
                if (this.destroyed) {
                  return;
                }

                throw readyReason;
              });
            };
          });
          messageHandler.on("ReaderHeadersReady", data => {
            const headersCapability = (0, _util.createPromiseCapability)();
            const fullReader = this._fullReader;
            fullReader.headersReady.then(() => {
              if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                if (this._lastProgress && loadingTask.onProgress) {
                  loadingTask.onProgress(this._lastProgress);
                }

                fullReader.onProgress = evt => {
                  if (loadingTask.onProgress) {
                    loadingTask.onProgress({
                      loaded: evt.loaded,
                      total: evt.total
                    });
                  }
                };
              }

              headersCapability.resolve({
                isStreamingSupported: fullReader.isStreamingSupported,
                isRangeSupported: fullReader.isRangeSupported,
                contentLength: fullReader.contentLength
              });
            }, headersCapability.reject);
            return headersCapability.promise;
          });
          messageHandler.on("GetRangeReader", (data, sink) => {
            (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");

            const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);

            if (!rangeReader) {
              sink.close();
              return;
            }

            sink.onPull = () => {
              rangeReader.read().then(function ({
                value,
                done
              }) {
                if (done) {
                  sink.close();
                  return;
                }

                (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetRangeReader - expected an ArrayBuffer.");
                sink.enqueue(new Uint8Array(value), 1, [value]);
              }).catch(reason => {
                sink.error(reason);
              });
            };

            sink.onCancel = reason => {
              rangeReader.cancel(reason);
              sink.ready.catch(readyReason => {
                if (this.destroyed) {
                  return;
                }

                throw readyReason;
              });
            };
          });
          messageHandler.on("GetDoc", ({
            pdfInfo
          }) => {
            this._numPages = pdfInfo.numPages;

            loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
          });
          messageHandler.on("DocException", function (ex) {
            let reason;

            switch (ex.name) {
              case "PasswordException":
                reason = new _util.PasswordException(ex.message, ex.code);
                break;

              case "InvalidPDFException":
                reason = new _util.InvalidPDFException(ex.message);
                break;

              case "MissingPDFException":
                reason = new _util.MissingPDFException(ex.message);
                break;

              case "UnexpectedResponseException":
                reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                break;

              case "UnknownErrorException":
                reason = new _util.UnknownErrorException(ex.message, ex.details);
                break;
            }

            if (!(reason instanceof Error)) {
              const msg = "DocException - expected a valid Error.";
              (0, _util.warn)(msg);
            }

            loadingTask._capability.reject(reason);
          });
          messageHandler.on("PasswordRequest", exception => {
            this._passwordCapability = (0, _util.createPromiseCapability)();

            if (loadingTask.onPassword) {
              const updatePassword = password => {
                this._passwordCapability.resolve({
                  password
                });
              };

              try {
                loadingTask.onPassword(updatePassword, exception.code);
              } catch (ex) {
                this._passwordCapability.reject(ex);
              }
            } else {
              this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
            }

            return this._passwordCapability.promise;
          });
          messageHandler.on("DataLoaded", data => {
            if (loadingTask.onProgress) {
              loadingTask.onProgress({
                loaded: data.length,
                total: data.length
              });
            }

            this.downloadInfoCapability.resolve(data);
          });
          messageHandler.on("StartRenderPage", data => {
            if (this.destroyed) {
              return;
            }

            const page = this.pageCache[data.pageIndex];

            page._startRenderPage(data.transparency, data.intent);
          });
          messageHandler.on("commonobj", data => {
            if (this.destroyed) {
              return;
            }

            const [id, type, exportedData] = data;

            if (this.commonObjs.has(id)) {
              return;
            }

            switch (type) {
              case "Font":
                const params = this._params;

                if ("error" in exportedData) {
                  const exportedError = exportedData.error;
                  (0, _util.warn)(`Error during font loading: ${exportedError}`);
                  this.commonObjs.resolve(id, exportedError);
                  break;
                }

                let fontRegistry = null;

                if (params.pdfBug && globalThis.FontInspector?.enabled) {
                  fontRegistry = {
                    registerFont(font, url) {
                      globalThis.FontInspector.fontAdded(font, url);
                    }

                  };
                }

                const font = new _font_loader.FontFaceObject(exportedData, {
                  isEvalSupported: params.isEvalSupported,
                  disableFontFace: params.disableFontFace,
                  ignoreErrors: params.ignoreErrors,
                  onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                  fontRegistry
                });
                this.fontLoader.bind(font).catch(reason => {
                  return messageHandler.sendWithPromise("FontFallback", {
                    id
                  });
                }).finally(() => {
                  if (!params.fontExtraProperties && font.data) {
                    font.data = null;
                  }

                  this.commonObjs.resolve(id, font);
                });
                break;

              case "FontPath":
              case "Image":
                this.commonObjs.resolve(id, exportedData);
                break;

              default:
                throw new Error(`Got unknown common object type ${type}`);
            }
          });
          messageHandler.on("obj", data => {
            if (this.destroyed) {
              return undefined;
            }

            const [id, pageIndex, type, imageData] = data;
            const pageProxy = this.pageCache[pageIndex];

            if (pageProxy.objs.has(id)) {
              return undefined;
            }

            switch (type) {
              case "Image":
                pageProxy.objs.resolve(id, imageData);
                const MAX_IMAGE_SIZE_TO_STORE = 8000000;

                if (imageData?.data?.length > MAX_IMAGE_SIZE_TO_STORE) {
                  pageProxy.cleanupAfterRender = true;
                }

                break;

              default:
                throw new Error(`Got unknown object type ${type}`);
            }

            return undefined;
          });
          messageHandler.on("DocProgress", data => {
            if (this.destroyed) {
              return;
            }

            if (loadingTask.onProgress) {
              loadingTask.onProgress({
                loaded: data.loaded,
                total: data.total
              });
            }
          });
          messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
          messageHandler.on("FetchBuiltInCMap", (data, sink) => {
            if (this.destroyed) {
              sink.error(new Error("Worker was destroyed"));
              return;
            }

            let fetched = false;

            sink.onPull = () => {
              if (fetched) {
                sink.close();
                return;
              }

              fetched = true;
              this.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
                sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
              }).catch(function (reason) {
                sink.error(reason);
              });
            };
          });
        }

        _onUnsupportedFeature({
          featureId
        }) {
          if (this.destroyed) {
            return;
          }

          if (this.loadingTask.onUnsupportedFeature) {
            this.loadingTask.onUnsupportedFeature(featureId);
          }
        }

        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }

        getPage(pageNumber) {
          if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
            return Promise.reject(new Error("Invalid page request"));
          }

          const pageIndex = pageNumber - 1;

          if (pageIndex in this.pagePromises) {
            return this.pagePromises[pageIndex];
          }

          const promise = this.messageHandler.sendWithPromise("GetPage", {
            pageIndex
          }).then(pageInfo => {
            if (this.destroyed) {
              throw new Error("Transport destroyed");
            }

            const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.ownerDocument, this._params.pdfBug);
            this.pageCache[pageIndex] = page;
            return page;
          });
          this.pagePromises[pageIndex] = promise;
          return promise;
        }

        getPageIndex(ref) {
          return this.messageHandler.sendWithPromise("GetPageIndex", {
            ref
          }).catch(function (reason) {
            return Promise.reject(new Error(reason));
          });
        }

        getAnnotations(pageIndex, intent) {
          return this.messageHandler.sendWithPromise("GetAnnotations", {
            pageIndex,
            intent
          });
        }

        saveDocument(annotationStorage) {
          return this.messageHandler.sendWithPromise("SaveDocument", {
            numPages: this._numPages,
            annotationStorage: annotationStorage?.getAll() || null,
            filename: this._fullReader?.filename ?? null
          }).finally(() => {
            if (annotationStorage) {
              annotationStorage.resetModified();
            }
          });
        }

        getFieldObjects() {
          return this.messageHandler.sendWithPromise("GetFieldObjects", null);
        }

        hasJSActions() {
          return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
        }

        getCalculationOrderIds() {
          return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
        }

        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }

        getDestination(id) {
          if (typeof id !== "string") {
            return Promise.reject(new Error("Invalid destination request."));
          }

          return this.messageHandler.sendWithPromise("GetDestination", {
            id
          });
        }

        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }

        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }

        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }

        getViewerPreferences() {
          return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
        }

        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }

        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }

        getJavaScript() {
          return this.messageHandler.sendWithPromise("GetJavaScript", null);
        }

        getDocJSActions() {
          return this.messageHandler.sendWithPromise("GetDocJSActions", null);
        }

        getPageJSActions(pageIndex) {
          return this.messageHandler.sendWithPromise("GetPageJSActions", {
            pageIndex
          });
        }

        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }

        getOptionalContentConfig() {
          return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then(results => {
            return new _optional_content_config.OptionalContentConfig(results);
          });
        }

        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }

        getMetadata() {
          return this.messageHandler.sendWithPromise("GetMetadata", null).then(results => {
            return {
              info: results[0],
              metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
              contentDispositionFilename: this._fullReader?.filename ?? null,
              contentLength: this._fullReader?.contentLength ?? null
            };
          });
        }

        getMarkInfo() {
          return this.messageHandler.sendWithPromise("GetMarkInfo", null);
        }

        getStats() {
          return this.messageHandler.sendWithPromise("GetStats", null);
        }

        startCleanup() {
          return this.messageHandler.sendWithPromise("Cleanup", null).then(() => {
            for (let i = 0, ii = this.pageCache.length; i < ii; i++) {
              const page = this.pageCache[i];

              if (page) {
                const cleanupSuccessful = page.cleanup();

                if (!cleanupSuccessful) {
                  throw new Error(`startCleanup: Page ${i + 1} is currently rendering.`);
                }
              }
            }

            this.commonObjs.clear();
            this.fontLoader.clear();
            this._hasJSActionsPromise = null;
          });
        }

        get loadingParams() {
          const params = this._params;
          return (0, _util.shadow)(this, "loadingParams", {
            disableAutoFetch: params.disableAutoFetch,
            disableFontFace: params.disableFontFace
          });
        }

      }

      class PDFObjects {
        constructor() {
          this._objs = Object.create(null);
        }

        _ensureObj(objId) {
          if (this._objs[objId]) {
            return this._objs[objId];
          }

          return this._objs[objId] = {
            capability: (0, _util.createPromiseCapability)(),
            data: null,
            resolved: false
          };
        }

        get(objId, callback = null) {
          if (callback) {
            this._ensureObj(objId).capability.promise.then(callback);

            return null;
          }

          const obj = this._objs[objId];

          if (!obj || !obj.resolved) {
            throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
          }

          return obj.data;
        }

        has(objId) {
          const obj = this._objs[objId];
          return obj?.resolved || false;
        }

        resolve(objId, data) {
          const obj = this._ensureObj(objId);

          obj.resolved = true;
          obj.data = data;
          obj.capability.resolve(data);
        }

        clear() {
          this._objs = Object.create(null);
        }

      }

      class RenderTask {
        constructor(internalRenderTask) {
          this._internalRenderTask = internalRenderTask;
          this.onContinue = null;
        }

        get promise() {
          return this._internalRenderTask.capability.promise;
        }

        cancel() {
          this._internalRenderTask.cancel();
        }

      }

      const InternalRenderTask = function InternalRenderTaskClosure() {
        const canvasInRendering = new WeakSet();

        class InternalRenderTask {
          constructor({
            callback,
            params,
            objs,
            commonObjs,
            operatorList,
            pageIndex,
            canvasFactory,
            webGLContext,
            useRequestAnimationFrame = false,
            pdfBug = false
          }) {
            this.callback = callback;
            this.params = params;
            this.objs = objs;
            this.commonObjs = commonObjs;
            this.operatorListIdx = null;
            this.operatorList = operatorList;
            this._pageIndex = pageIndex;
            this.canvasFactory = canvasFactory;
            this.webGLContext = webGLContext;
            this._pdfBug = pdfBug;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
            this.cancelled = false;
            this.capability = (0, _util.createPromiseCapability)();
            this.task = new RenderTask(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = params.canvasContext.canvas;
          }

          get completed() {
            return this.capability.promise.catch(function () {});
          }

          initializeGraphics({
            transparency = false,
            optionalContentConfig
          }) {
            if (this.cancelled) {
              return;
            }

            if (this._canvas) {
              if (canvasInRendering.has(this._canvas)) {
                throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
              }

              canvasInRendering.add(this._canvas);
            }

            if (this._pdfBug && globalThis.StepperManager?.enabled) {
              this.stepper = globalThis.StepperManager.create(this._pageIndex);
              this.stepper.init(this.operatorList);
              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
            }

            const {
              canvasContext,
              viewport,
              transform,
              imageLayer,
              background
            } = this.params;
            this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer, optionalContentConfig);
            this.gfx.beginDrawing({
              transform,
              viewport,
              transparency,
              background
            });
            this.operatorListIdx = 0;
            this.graphicsReady = true;

            if (this.graphicsReadyCallback) {
              this.graphicsReadyCallback();
            }
          }

          cancel(error = null) {
            this.running = false;
            this.cancelled = true;

            if (this.gfx) {
              this.gfx.endDrawing();
            }

            if (this._canvas) {
              canvasInRendering.delete(this._canvas);
            }

            this.callback(error || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
          }

          operatorListChanged() {
            if (!this.graphicsReady) {
              if (!this.graphicsReadyCallback) {
                this.graphicsReadyCallback = this._continueBound;
              }

              return;
            }

            if (this.stepper) {
              this.stepper.updateOperatorList(this.operatorList);
            }

            if (this.running) {
              return;
            }

            this._continue();
          }

          _continue() {
            this.running = true;

            if (this.cancelled) {
              return;
            }

            if (this.task.onContinue) {
              this.task.onContinue(this._scheduleNextBound);
            } else {
              this._scheduleNext();
            }
          }

          _scheduleNext() {
            if (this._useRequestAnimationFrame) {
              window.requestAnimationFrame(() => {
                this._nextBound().catch(this.cancel.bind(this));
              });
            } else {
              Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this));
            }
          }

          async _next() {
            if (this.cancelled) {
              return;
            }

            this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

            if (this.operatorListIdx === this.operatorList.argsArray.length) {
              this.running = false;

              if (this.operatorList.lastChunk) {
                this.gfx.endDrawing();

                if (this._canvas) {
                  canvasInRendering.delete(this._canvas);
                }

                this.callback();
              }
            }
          }

        }

        return InternalRenderTask;
      }();

      const version = '2.7.570';
      exports.version = version;
      const build = 'f2c7338b0';
      exports.build = build;

      /***/ }),
      /* 6 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.FontLoader = exports.FontFaceObject = void 0;

      var _util = __w_pdfjs_require__(2);

      class BaseFontLoader {
        constructor({
          docId,
          onUnsupportedFeature,
          ownerDocument = globalThis.document
        }) {
          if (this.constructor === BaseFontLoader) {
            (0, _util.unreachable)("Cannot initialize BaseFontLoader.");
          }

          this.docId = docId;
          this._onUnsupportedFeature = onUnsupportedFeature;
          this._document = ownerDocument;
          this.nativeFontFaces = [];
          this.styleElement = null;
        }

        addNativeFontFace(nativeFontFace) {
          this.nativeFontFaces.push(nativeFontFace);

          this._document.fonts.add(nativeFontFace);
        }

        insertRule(rule) {
          let styleElement = this.styleElement;

          if (!styleElement) {
            styleElement = this.styleElement = this._document.createElement("style");
            styleElement.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;

            this._document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
          }

          const styleSheet = styleElement.sheet;
          styleSheet.insertRule(rule, styleSheet.cssRules.length);
        }

        clear() {
          this.nativeFontFaces.forEach(nativeFontFace => {
            this._document.fonts.delete(nativeFontFace);
          });
          this.nativeFontFaces.length = 0;

          if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = null;
          }
        }

        async bind(font) {
          if (font.attached || font.missingFile) {
            return;
          }

          font.attached = true;

          if (this.isFontLoadingAPISupported) {
            const nativeFontFace = font.createNativeFontFace();

            if (nativeFontFace) {
              this.addNativeFontFace(nativeFontFace);

              try {
                await nativeFontFace.loaded;
              } catch (ex) {
                this._onUnsupportedFeature({
                  featureId: _util.UNSUPPORTED_FEATURES.errorFontLoadNative
                });

                (0, _util.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
                font.disableFontFace = true;
                throw ex;
              }
            }

            return;
          }

          const rule = font.createFontFaceRule();

          if (rule) {
            this.insertRule(rule);

            if (this.isSyncFontLoadingSupported) {
              return;
            }

            await new Promise(resolve => {
              const request = this._queueLoadingCallback(resolve);

              this._prepareFontLoadEvent([rule], [font], request);
            });
          }
        }

        _queueLoadingCallback(callback) {
          (0, _util.unreachable)("Abstract method `_queueLoadingCallback`.");
        }

        get isFontLoadingAPISupported() {
          return (0, _util.shadow)(this, "isFontLoadingAPISupported", !!this._document?.fonts);
        }

        get isSyncFontLoadingSupported() {
          (0, _util.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
        }

        get _loadTestFont() {
          (0, _util.unreachable)("Abstract method `_loadTestFont`.");
        }

        _prepareFontLoadEvent(rules, fontsToLoad, request) {
          (0, _util.unreachable)("Abstract method `_prepareFontLoadEvent`.");
        }

      }

      let FontLoader;
      exports.FontLoader = FontLoader;
      {
        exports.FontLoader = FontLoader = class GenericFontLoader extends BaseFontLoader {
          constructor(params) {
            super(params);
            this.loadingContext = {
              requests: [],
              nextRequestId: 0
            };
            this.loadTestFontId = 0;
          }

          get isSyncFontLoadingSupported() {
            let supported = false;

            if (typeof navigator === "undefined") {
              supported = true;
            } else {
              const m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

              if (m?.[1] >= 14) {
                supported = true;
              }
            }

            return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supported);
          }

          _queueLoadingCallback(callback) {
            function completeRequest() {
              (0, _util.assert)(!request.done, "completeRequest() cannot be called twice.");
              request.done = true;

              while (context.requests.length > 0 && context.requests[0].done) {
                const otherRequest = context.requests.shift();
                setTimeout(otherRequest.callback, 0);
              }
            }

            const context = this.loadingContext;
            const request = {
              id: `pdfjs-font-loading-${context.nextRequestId++}`,
              done: false,
              complete: completeRequest,
              callback
            };
            context.requests.push(request);
            return request;
          }

          get _loadTestFont() {
            const getLoadTestFont = function () {
              return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
            };

            return (0, _util.shadow)(this, "_loadTestFont", getLoadTestFont());
          }

          _prepareFontLoadEvent(rules, fonts, request) {
            function int32(data, offset) {
              return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
            }

            function spliceString(s, offset, remove, insert) {
              const chunk1 = s.substring(0, offset);
              const chunk2 = s.substring(offset + remove);
              return chunk1 + insert + chunk2;
            }

            let i, ii;

            const canvas = this._document.createElement("canvas");

            canvas.width = 1;
            canvas.height = 1;
            const ctx = canvas.getContext("2d");
            let called = 0;

            function isFontReady(name, callback) {
              called++;

              if (called > 30) {
                (0, _util.warn)("Load test font never loaded.");
                callback();
                return;
              }

              ctx.font = "30px " + name;
              ctx.fillText(".", 0, 20);
              const imageData = ctx.getImageData(0, 0, 1, 1);

              if (imageData.data[3] > 0) {
                callback();
                return;
              }

              setTimeout(isFontReady.bind(null, name, callback));
            }

            const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
            let data = this._loadTestFont;
            const COMMENT_OFFSET = 976;
            data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
            const CFF_CHECKSUM_OFFSET = 16;
            const XXXX_VALUE = 0x58585858;
            let checksum = int32(data, CFF_CHECKSUM_OFFSET);

            for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
              checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
            }

            if (i < loadTestFontId.length) {
              checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
            }

            data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
            const url = `url(data:font/opentype;base64,${btoa(data)});`;
            const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
            this.insertRule(rule);
            const names = [];

            for (i = 0, ii = fonts.length; i < ii; i++) {
              names.push(fonts[i].loadedName);
            }

            names.push(loadTestFontId);

            const div = this._document.createElement("div");

            div.style.visibility = "hidden";
            div.style.width = div.style.height = "10px";
            div.style.position = "absolute";
            div.style.top = div.style.left = "0px";

            for (i = 0, ii = names.length; i < ii; ++i) {
              const span = this._document.createElement("span");

              span.textContent = "Hi";
              span.style.fontFamily = names[i];
              div.appendChild(span);
            }

            this._document.body.appendChild(div);

            isFontReady(loadTestFontId, () => {
              this._document.body.removeChild(div);

              request.complete();
            });
          }

        };
      }

      class FontFaceObject {
        constructor(translatedData, {
          isEvalSupported = true,
          disableFontFace = false,
          ignoreErrors = false,
          onUnsupportedFeature = null,
          fontRegistry = null
        }) {
          this.compiledGlyphs = Object.create(null);

          for (const i in translatedData) {
            this[i] = translatedData[i];
          }

          this.isEvalSupported = isEvalSupported !== false;
          this.disableFontFace = disableFontFace === true;
          this.ignoreErrors = ignoreErrors === true;
          this._onUnsupportedFeature = onUnsupportedFeature;
          this.fontRegistry = fontRegistry;
        }

        createNativeFontFace() {
          if (!this.data || this.disableFontFace) {
            return null;
          }

          const nativeFontFace = new FontFace(this.loadedName, this.data, {});

          if (this.fontRegistry) {
            this.fontRegistry.registerFont(this);
          }

          return nativeFontFace;
        }

        createFontFaceRule() {
          if (!this.data || this.disableFontFace) {
            return null;
          }

          const data = (0, _util.bytesToString)(new Uint8Array(this.data));
          const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
          const rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;

          if (this.fontRegistry) {
            this.fontRegistry.registerFont(this, url);
          }

          return rule;
        }

        getPathGenerator(objs, character) {
          if (this.compiledGlyphs[character] !== undefined) {
            return this.compiledGlyphs[character];
          }

          let cmds, current;

          try {
            cmds = objs.get(this.loadedName + "_path_" + character);
          } catch (ex) {
            if (!this.ignoreErrors) {
              throw ex;
            }

            if (this._onUnsupportedFeature) {
              this._onUnsupportedFeature({
                featureId: _util.UNSUPPORTED_FEATURES.errorFontGetPath
              });
            }

            (0, _util.warn)(`getPathGenerator - ignoring character: "${ex}".`);
            return this.compiledGlyphs[character] = function (c, size) {};
          }

          if (this.isEvalSupported && _util.IsEvalSupportedCached.value) {
            let args,
                js = "";

            for (let i = 0, ii = cmds.length; i < ii; i++) {
              current = cmds[i];

              if (current.args !== undefined) {
                args = current.args.join(",");
              } else {
                args = "";
              }

              js += "c." + current.cmd + "(" + args + ");\n";
            }

            return this.compiledGlyphs[character] = new Function("c", "size", js);
          }

          return this.compiledGlyphs[character] = function (c, size) {
            for (let i = 0, ii = cmds.length; i < ii; i++) {
              current = cmds[i];

              if (current.cmd === "scale") {
                current.args = [size, -size];
              }

              c[current.cmd].apply(c, current.args);
            }
          };
        }

      }

      exports.FontFaceObject = FontFaceObject;

      /***/ }),
      /* 7 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.NodeCMapReaderFactory = exports.NodeCanvasFactory = void 0;

      var _display_utils = __w_pdfjs_require__(1);

      var _is_node = __w_pdfjs_require__(4);

      var _util = __w_pdfjs_require__(2);

      let NodeCanvasFactory = class {
        constructor() {
          (0, _util.unreachable)("Not implemented: NodeCanvasFactory");
        }

      };
      exports.NodeCanvasFactory = NodeCanvasFactory;
      let NodeCMapReaderFactory = class {
        constructor() {
          (0, _util.unreachable)("Not implemented: NodeCMapReaderFactory");
        }

      };
      exports.NodeCMapReaderFactory = NodeCMapReaderFactory;

      if (_is_node.isNodeJS) {
        exports.NodeCanvasFactory = NodeCanvasFactory = class extends _display_utils.BaseCanvasFactory {
          create(width, height) {
            if (width <= 0 || height <= 0) {
              throw new Error("Invalid canvas size");
            }

            const Canvas = require$$0__default['default'];

            const canvas = Canvas.createCanvas(width, height);
            return {
              canvas,
              context: canvas.getContext("2d")
            };
          }

        };
        exports.NodeCMapReaderFactory = NodeCMapReaderFactory = class extends _display_utils.BaseCMapReaderFactory {
          _fetchData(url, compressionType) {
            return new Promise((resolve, reject) => {
              const fs = require$$1__default['default'];

              fs.readFile(url, (error, data) => {
                if (error || !data) {
                  reject(new Error(error));
                  return;
                }

                resolve({
                  cMapData: new Uint8Array(data),
                  compressionType
                });
              });
            });
          }

        };
      }

      /***/ }),
      /* 8 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.AnnotationStorage = void 0;

      var _util = __w_pdfjs_require__(2);

      class AnnotationStorage {
        constructor() {
          this._storage = new Map();
          this._modified = false;
          this.onSetModified = null;
          this.onResetModified = null;
        }

        getOrCreateValue(key, defaultValue) {
          if (this._storage.has(key)) {
            return this._storage.get(key);
          }

          this._storage.set(key, defaultValue);

          return defaultValue;
        }

        setValue(key, value) {
          const obj = this._storage.get(key);

          let modified = false;

          if (obj !== undefined) {
            for (const [entry, val] of Object.entries(value)) {
              if (obj[entry] !== val) {
                modified = true;
                obj[entry] = val;
              }
            }
          } else {
            this._storage.set(key, value);

            modified = true;
          }

          if (modified) {
            this._setModified();
          }
        }

        getAll() {
          if (this._storage.size === 0) {
            return null;
          }

          return (0, _util.objectFromEntries)(this._storage);
        }

        get size() {
          return this._storage.size;
        }

        _setModified() {
          if (!this._modified) {
            this._modified = true;

            if (typeof this.onSetModified === "function") {
              this.onSetModified();
            }
          }
        }

        resetModified() {
          if (this._modified) {
            this._modified = false;

            if (typeof this.onResetModified === "function") {
              this.onResetModified();
            }
          }
        }

      }

      exports.AnnotationStorage = AnnotationStorage;

      /***/ }),
      /* 9 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.apiCompatibilityParams = void 0;

      var _is_node = __w_pdfjs_require__(4);

      const compatibilityParams = Object.create(null);
      {
        (function checkFontFace() {
          if (_is_node.isNodeJS) {
            compatibilityParams.disableFontFace = true;
          }
        })();
      }
      const apiCompatibilityParams = Object.freeze(compatibilityParams);
      exports.apiCompatibilityParams = apiCompatibilityParams;

      /***/ }),
      /* 10 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.CanvasGraphics = void 0;

      var _util = __w_pdfjs_require__(2);

      var _pattern_helper = __w_pdfjs_require__(11);

      const MIN_FONT_SIZE = 16;
      const MAX_FONT_SIZE = 100;
      const MAX_GROUP_SIZE = 4096;
      const MAX_SIZE_TO_COMPILE = 1000;
      const FULL_CHUNK_HEIGHT = 16;

      function addContextCurrentTransform(ctx) {
        if (!ctx.mozCurrentTransform) {
          ctx._originalSave = ctx.save;
          ctx._originalRestore = ctx.restore;
          ctx._originalRotate = ctx.rotate;
          ctx._originalScale = ctx.scale;
          ctx._originalTranslate = ctx.translate;
          ctx._originalTransform = ctx.transform;
          ctx._originalSetTransform = ctx.setTransform;
          ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
          ctx._transformStack = [];
          Object.defineProperty(ctx, "mozCurrentTransform", {
            get: function getCurrentTransform() {
              return this._transformMatrix;
            }
          });
          Object.defineProperty(ctx, "mozCurrentTransformInverse", {
            get: function getCurrentTransformInverse() {
              const m = this._transformMatrix;
              const a = m[0],
                    b = m[1],
                    c = m[2],
                    d = m[3],
                    e = m[4],
                    f = m[5];
              const ad_bc = a * d - b * c;
              const bc_ad = b * c - a * d;
              return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
            }
          });

          ctx.save = function ctxSave() {
            const old = this._transformMatrix;

            this._transformStack.push(old);

            this._transformMatrix = old.slice(0, 6);

            this._originalSave();
          };

          ctx.restore = function ctxRestore() {
            const prev = this._transformStack.pop();

            if (prev) {
              this._transformMatrix = prev;

              this._originalRestore();
            }
          };

          ctx.translate = function ctxTranslate(x, y) {
            const m = this._transformMatrix;
            m[4] = m[0] * x + m[2] * y + m[4];
            m[5] = m[1] * x + m[3] * y + m[5];

            this._originalTranslate(x, y);
          };

          ctx.scale = function ctxScale(x, y) {
            const m = this._transformMatrix;
            m[0] = m[0] * x;
            m[1] = m[1] * x;
            m[2] = m[2] * y;
            m[3] = m[3] * y;

            this._originalScale(x, y);
          };

          ctx.transform = function ctxTransform(a, b, c, d, e, f) {
            const m = this._transformMatrix;
            this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];

            ctx._originalTransform(a, b, c, d, e, f);
          };

          ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
            this._transformMatrix = [a, b, c, d, e, f];

            ctx._originalSetTransform(a, b, c, d, e, f);
          };

          ctx.rotate = function ctxRotate(angle) {
            const cosValue = Math.cos(angle);
            const sinValue = Math.sin(angle);
            const m = this._transformMatrix;
            this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];

            this._originalRotate(angle);
          };
        }
      }

      const CachedCanvases = function CachedCanvasesClosure() {
        function CachedCanvases(canvasFactory) {
          this.canvasFactory = canvasFactory;
          this.cache = Object.create(null);
        }

        CachedCanvases.prototype = {
          getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
            let canvasEntry;

            if (this.cache[id] !== undefined) {
              canvasEntry = this.cache[id];
              this.canvasFactory.reset(canvasEntry, width, height);
              canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
            } else {
              canvasEntry = this.canvasFactory.create(width, height);
              this.cache[id] = canvasEntry;
            }

            if (trackTransform) {
              addContextCurrentTransform(canvasEntry.context);
            }

            return canvasEntry;
          },

          clear() {
            for (const id in this.cache) {
              const canvasEntry = this.cache[id];
              this.canvasFactory.destroy(canvasEntry);
              delete this.cache[id];
            }
          }

        };
        return CachedCanvases;
      }();

      function compileType3Glyph(imgData) {
        const POINT_TO_PROCESS_LIMIT = 1000;
        const width = imgData.width,
              height = imgData.height,
              width1 = width + 1;
        let i, ii, j, j0;
        const points = new Uint8Array(width1 * (height + 1));
        const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
        const lineSize = width + 7 & ~7,
              data0 = imgData.data;
        const data = new Uint8Array(lineSize * height);
        let pos = 0;

        for (i = 0, ii = data0.length; i < ii; i++) {
          const elem = data0[i];
          let mask = 128;

          while (mask > 0) {
            data[pos++] = elem & mask ? 0 : 255;
            mask >>= 1;
          }
        }

        let count = 0;
        pos = 0;

        if (data[pos] !== 0) {
          points[0] = 1;
          ++count;
        }

        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j] = data[pos] ? 2 : 1;
            ++count;
          }

          pos++;
        }

        if (data[pos] !== 0) {
          points[j] = 2;
          ++count;
        }

        for (i = 1; i < height; i++) {
          pos = i * lineSize;
          j0 = i * width1;

          if (data[pos - lineSize] !== data[pos]) {
            points[j0] = data[pos] ? 1 : 8;
            ++count;
          }

          let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

          for (j = 1; j < width; j++) {
            sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

            if (POINT_TYPES[sum]) {
              points[j0 + j] = POINT_TYPES[sum];
              ++count;
            }

            pos++;
          }

          if (data[pos - lineSize] !== data[pos]) {
            points[j0 + j] = data[pos] ? 2 : 4;
            ++count;
          }

          if (count > POINT_TO_PROCESS_LIMIT) {
            return null;
          }
        }

        pos = lineSize * (height - 1);
        j0 = i * width1;

        if (data[pos] !== 0) {
          points[j0] = 8;
          ++count;
        }

        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j0 + j] = data[pos] ? 4 : 8;
            ++count;
          }

          pos++;
        }

        if (data[pos] !== 0) {
          points[j0 + j] = 4;
          ++count;
        }

        if (count > POINT_TO_PROCESS_LIMIT) {
          return null;
        }

        const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
        const outlines = [];

        for (i = 0; count && i <= height; i++) {
          let p = i * width1;
          const end = p + width;

          while (p < end && !points[p]) {
            p++;
          }

          if (p === end) {
            continue;
          }

          const coords = [p % width1, i];
          const p0 = p;
          let type = points[p];

          do {
            const step = steps[type];

            do {
              p += step;
            } while (!points[p]);

            const pp = points[p];

            if (pp !== 5 && pp !== 10) {
              type = pp;
              points[p] = 0;
            } else {
              type = pp & 0x33 * type >> 4;
              points[p] &= type >> 2 | type << 2;
            }

            coords.push(p % width1);
            coords.push(p / width1 | 0);

            if (!points[p]) {
              --count;
            }
          } while (p0 !== p);

          outlines.push(coords);
          --i;
        }

        const drawOutline = function (c) {
          c.save();
          c.scale(1 / width, -1 / height);
          c.translate(0, -height);
          c.beginPath();

          for (let k = 0, kk = outlines.length; k < kk; k++) {
            const o = outlines[k];
            c.moveTo(o[0], o[1]);

            for (let l = 2, ll = o.length; l < ll; l += 2) {
              c.lineTo(o[l], o[l + 1]);
            }
          }

          c.fill();
          c.beginPath();
          c.restore();
        };

        return drawOutline;
      }

      const CanvasExtraState = function CanvasExtraStateClosure() {
        function CanvasExtraState() {
          this.alphaIsShape = false;
          this.fontSize = 0;
          this.fontSizeScale = 1;
          this.textMatrix = _util.IDENTITY_MATRIX;
          this.textMatrixScale = 1;
          this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
          this.leading = 0;
          this.x = 0;
          this.y = 0;
          this.lineX = 0;
          this.lineY = 0;
          this.charSpacing = 0;
          this.wordSpacing = 0;
          this.textHScale = 1;
          this.textRenderingMode = _util.TextRenderingMode.FILL;
          this.textRise = 0;
          this.fillColor = "#000000";
          this.strokeColor = "#000000";
          this.patternFill = false;
          this.fillAlpha = 1;
          this.strokeAlpha = 1;
          this.lineWidth = 1;
          this.activeSMask = null;
          this.resumeSMaskCtx = null;
          this.transferMaps = null;
        }

        CanvasExtraState.prototype = {
          clone: function CanvasExtraState_clone() {
            return Object.create(this);
          },
          setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
            this.x = x;
            this.y = y;
          }
        };
        return CanvasExtraState;
      }();

      const CanvasGraphics = function CanvasGraphicsClosure() {
        const EXECUTION_TIME = 15;
        const EXECUTION_STEPS = 10;

        function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer, optionalContentConfig) {
          this.ctx = canvasCtx;
          this.current = new CanvasExtraState();
          this.stateStack = [];
          this.pendingClip = null;
          this.pendingEOFill = false;
          this.res = null;
          this.xobjs = null;
          this.commonObjs = commonObjs;
          this.objs = objs;
          this.canvasFactory = canvasFactory;
          this.webGLContext = webGLContext;
          this.imageLayer = imageLayer;
          this.groupStack = [];
          this.processingType3 = null;
          this.baseTransform = null;
          this.baseTransformStack = [];
          this.groupLevel = 0;
          this.smaskStack = [];
          this.smaskCounter = 0;
          this.tempSMask = null;
          this.contentVisible = true;
          this.markedContentStack = [];
          this.optionalContentConfig = optionalContentConfig;
          this.cachedCanvases = new CachedCanvases(this.canvasFactory);

          if (canvasCtx) {
            addContextCurrentTransform(canvasCtx);
          }

          this._cachedGetSinglePixelWidth = null;
        }

        function putBinaryImageData(ctx, imgData, transferMaps = null) {
          if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
            ctx.putImageData(imgData, 0, 0);
            return;
          }

          const height = imgData.height,
                width = imgData.width;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0,
              destPos;
          const src = imgData.data;
          const dest = chunkImgData.data;
          let i, j, thisChunkHeight, elemsInThisChunk;
          let transferMapRed, transferMapGreen, transferMapBlue, transferMapGray;

          if (transferMaps) {
            switch (transferMaps.length) {
              case 1:
                transferMapRed = transferMaps[0];
                transferMapGreen = transferMaps[0];
                transferMapBlue = transferMaps[0];
                transferMapGray = transferMaps[0];
                break;

              case 4:
                transferMapRed = transferMaps[0];
                transferMapGreen = transferMaps[1];
                transferMapBlue = transferMaps[2];
                transferMapGray = transferMaps[3];
                break;
            }
          }

          if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
            const srcLength = src.byteLength;
            const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
            const dest32DataLength = dest32.length;
            const fullSrcDiff = width + 7 >> 3;
            let white = 0xffffffff;
            let black = _util.IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;

            if (transferMapGray) {
              if (transferMapGray[0] === 0xff && transferMapGray[0xff] === 0) {
                [white, black] = [black, white];
              }
            }

            for (i = 0; i < totalChunks; i++) {
              thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              destPos = 0;

              for (j = 0; j < thisChunkHeight; j++) {
                const srcDiff = srcLength - srcPos;
                let k = 0;
                const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                const kEndUnrolled = kEnd & ~7;
                let mask = 0;
                let srcByte = 0;

                for (; k < kEndUnrolled; k += 8) {
                  srcByte = src[srcPos++];
                  dest32[destPos++] = srcByte & 128 ? white : black;
                  dest32[destPos++] = srcByte & 64 ? white : black;
                  dest32[destPos++] = srcByte & 32 ? white : black;
                  dest32[destPos++] = srcByte & 16 ? white : black;
                  dest32[destPos++] = srcByte & 8 ? white : black;
                  dest32[destPos++] = srcByte & 4 ? white : black;
                  dest32[destPos++] = srcByte & 2 ? white : black;
                  dest32[destPos++] = srcByte & 1 ? white : black;
                }

                for (; k < kEnd; k++) {
                  if (mask === 0) {
                    srcByte = src[srcPos++];
                    mask = 128;
                  }

                  dest32[destPos++] = srcByte & mask ? white : black;
                  mask >>= 1;
                }
              }

              while (destPos < dest32DataLength) {
                dest32[destPos++] = 0;
              }

              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
            const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
            j = 0;
            elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

            for (i = 0; i < fullChunks; i++) {
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              srcPos += elemsInThisChunk;

              if (hasTransferMaps) {
                for (let k = 0; k < elemsInThisChunk; k += 4) {
                  if (transferMapRed) {
                    dest[k + 0] = transferMapRed[dest[k + 0]];
                  }

                  if (transferMapGreen) {
                    dest[k + 1] = transferMapGreen[dest[k + 1]];
                  }

                  if (transferMapBlue) {
                    dest[k + 2] = transferMapBlue[dest[k + 2]];
                  }
                }
              }

              ctx.putImageData(chunkImgData, 0, j);
              j += FULL_CHUNK_HEIGHT;
            }

            if (i < totalChunks) {
              elemsInThisChunk = width * partialChunkHeight * 4;
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));

              if (hasTransferMaps) {
                for (let k = 0; k < elemsInThisChunk; k += 4) {
                  if (transferMapRed) {
                    dest[k + 0] = transferMapRed[dest[k + 0]];
                  }

                  if (transferMapGreen) {
                    dest[k + 1] = transferMapGreen[dest[k + 1]];
                  }

                  if (transferMapBlue) {
                    dest[k + 2] = transferMapBlue[dest[k + 2]];
                  }
                }
              }

              ctx.putImageData(chunkImgData, 0, j);
            }
          } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
            const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
            thisChunkHeight = FULL_CHUNK_HEIGHT;
            elemsInThisChunk = width * thisChunkHeight;

            for (i = 0; i < totalChunks; i++) {
              if (i >= fullChunks) {
                thisChunkHeight = partialChunkHeight;
                elemsInThisChunk = width * thisChunkHeight;
              }

              destPos = 0;

              for (j = elemsInThisChunk; j--;) {
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = 255;
              }

              if (hasTransferMaps) {
                for (let k = 0; k < destPos; k += 4) {
                  if (transferMapRed) {
                    dest[k + 0] = transferMapRed[dest[k + 0]];
                  }

                  if (transferMapGreen) {
                    dest[k + 1] = transferMapGreen[dest[k + 1]];
                  }

                  if (transferMapBlue) {
                    dest[k + 2] = transferMapBlue[dest[k + 2]];
                  }
                }
              }

              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else {
            throw new Error(`bad image kind: ${imgData.kind}`);
          }
        }

        function putBinaryImageMask(ctx, imgData) {
          const height = imgData.height,
                width = imgData.width;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0;
          const src = imgData.data;
          const dest = chunkImgData.data;

          for (let i = 0; i < totalChunks; i++) {
            const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
            let destPos = 3;

            for (let j = 0; j < thisChunkHeight; j++) {
              let elem,
                  mask = 0;

              for (let k = 0; k < width; k++) {
                if (!mask) {
                  elem = src[srcPos++];
                  mask = 128;
                }

                dest[destPos] = elem & mask ? 0 : 255;
                destPos += 4;
                mask >>= 1;
              }
            }

            ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
          }
        }

        function copyCtxState(sourceCtx, destCtx) {
          const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];

          for (let i = 0, ii = properties.length; i < ii; i++) {
            const property = properties[i];

            if (sourceCtx[property] !== undefined) {
              destCtx[property] = sourceCtx[property];
            }
          }

          if (sourceCtx.setLineDash !== undefined) {
            destCtx.setLineDash(sourceCtx.getLineDash());
            destCtx.lineDashOffset = sourceCtx.lineDashOffset;
          }
        }

        function resetCtxToDefault(ctx) {
          ctx.strokeStyle = "#000000";
          ctx.fillStyle = "#000000";
          ctx.fillRule = "nonzero";
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 10;
          ctx.globalCompositeOperation = "source-over";
          ctx.font = "10px sans-serif";

          if (ctx.setLineDash !== undefined) {
            ctx.setLineDash([]);
            ctx.lineDashOffset = 0;
          }
        }

        function composeSMaskBackdrop(bytes, r0, g0, b0) {
          const length = bytes.length;

          for (let i = 3; i < length; i += 4) {
            const alpha = bytes[i];

            if (alpha === 0) {
              bytes[i - 3] = r0;
              bytes[i - 2] = g0;
              bytes[i - 1] = b0;
            } else if (alpha < 255) {
              const alpha_ = 255 - alpha;
              bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
              bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
              bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
            }
          }
        }

        function composeSMaskAlpha(maskData, layerData, transferMap) {
          const length = maskData.length;
          const scale = 1 / 255;

          for (let i = 3; i < length; i += 4) {
            const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
            layerData[i] = layerData[i] * alpha * scale | 0;
          }
        }

        function composeSMaskLuminosity(maskData, layerData, transferMap) {
          const length = maskData.length;

          for (let i = 3; i < length; i += 4) {
            const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
            layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
          }
        }

        function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
          const hasBackdrop = !!backdrop;
          const r0 = hasBackdrop ? backdrop[0] : 0;
          const g0 = hasBackdrop ? backdrop[1] : 0;
          const b0 = hasBackdrop ? backdrop[2] : 0;
          let composeFn;

          if (subtype === "Luminosity") {
            composeFn = composeSMaskLuminosity;
          } else {
            composeFn = composeSMaskAlpha;
          }

          const PIXELS_TO_PROCESS = 1048576;
          const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));

          for (let row = 0; row < height; row += chunkSize) {
            const chunkHeight = Math.min(chunkSize, height - row);
            const maskData = maskCtx.getImageData(0, row, width, chunkHeight);
            const layerData = layerCtx.getImageData(0, row, width, chunkHeight);

            if (hasBackdrop) {
              composeSMaskBackdrop(maskData.data, r0, g0, b0);
            }

            composeFn(maskData.data, layerData.data, transferMap);
            maskCtx.putImageData(layerData, 0, row);
          }
        }

        function composeSMask(ctx, smask, layerCtx, webGLContext) {
          const mask = smask.canvas;
          const maskCtx = smask.context;
          ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
          const backdrop = smask.backdrop || null;

          if (!smask.transferMap && webGLContext.isEnabled) {
            const composed = webGLContext.composeSMask({
              layer: layerCtx.canvas,
              mask,
              properties: {
                subtype: smask.subtype,
                backdrop
              }
            });
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.drawImage(composed, smask.offsetX, smask.offsetY);
            return;
          }

          genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
          ctx.drawImage(mask, 0, 0);
        }

        const LINE_CAP_STYLES = ["butt", "round", "square"];
        const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
        const NORMAL_CLIP = {};
        const EO_CLIP = {};
        CanvasGraphics.prototype = {
          beginDrawing({
            transform,
            viewport,
            transparency = false,
            background = null
          }) {
            const width = this.ctx.canvas.width;
            const height = this.ctx.canvas.height;
            this.ctx.save();
            this.ctx.fillStyle = background || "rgb(255, 255, 255)";
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.restore();

            if (transparency) {
              const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
              this.compositeCtx = this.ctx;
              this.transparentCanvas = transparentCanvas.canvas;
              this.ctx = transparentCanvas.context;
              this.ctx.save();
              this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
            }

            this.ctx.save();
            resetCtxToDefault(this.ctx);

            if (transform) {
              this.ctx.transform.apply(this.ctx, transform);
            }

            this.ctx.transform.apply(this.ctx, viewport.transform);
            this.baseTransform = this.ctx.mozCurrentTransform.slice();
            this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]);

            if (this.imageLayer) {
              this.imageLayer.beginLayout();
            }
          },

          executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
            const argsArray = operatorList.argsArray;
            const fnArray = operatorList.fnArray;
            let i = executionStartIdx || 0;
            const argsArrayLen = argsArray.length;

            if (argsArrayLen === i) {
              return i;
            }

            const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
            const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
            let steps = 0;
            const commonObjs = this.commonObjs;
            const objs = this.objs;
            let fnId;

            while (true) {
              if (stepper !== undefined && i === stepper.nextBreakPoint) {
                stepper.breakIt(i, continueCallback);
                return i;
              }

              fnId = fnArray[i];

              if (fnId !== _util.OPS.dependency) {
                this[fnId].apply(this, argsArray[i]);
              } else {
                for (const depObjId of argsArray[i]) {
                  const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;

                  if (!objsPool.has(depObjId)) {
                    objsPool.get(depObjId, continueCallback);
                    return i;
                  }
                }
              }

              i++;

              if (i === argsArrayLen) {
                return i;
              }

              if (chunkOperations && ++steps > EXECUTION_STEPS) {
                if (Date.now() > endTime) {
                  continueCallback();
                  return i;
                }

                steps = 0;
              }
            }
          },
          endDrawing: function CanvasGraphics_endDrawing() {
            while (this.stateStack.length || this.current.activeSMask !== null) {
              this.restore();
            }

            this.ctx.restore();

            if (this.transparentCanvas) {
              this.ctx = this.compositeCtx;
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.drawImage(this.transparentCanvas, 0, 0);
              this.ctx.restore();
              this.transparentCanvas = null;
            }

            this.cachedCanvases.clear();
            this.webGLContext.clear();

            if (this.imageLayer) {
              this.imageLayer.endLayout();
            }
          },
          setLineWidth: function CanvasGraphics_setLineWidth(width) {
            this.current.lineWidth = width;
            this.ctx.lineWidth = width;
          },
          setLineCap: function CanvasGraphics_setLineCap(style) {
            this.ctx.lineCap = LINE_CAP_STYLES[style];
          },
          setLineJoin: function CanvasGraphics_setLineJoin(style) {
            this.ctx.lineJoin = LINE_JOIN_STYLES[style];
          },
          setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
            this.ctx.miterLimit = limit;
          },
          setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
            const ctx = this.ctx;

            if (ctx.setLineDash !== undefined) {
              ctx.setLineDash(dashArray);
              ctx.lineDashOffset = dashPhase;
            }
          },

          setRenderingIntent(intent) {},

          setFlatness(flatness) {},

          setGState: function CanvasGraphics_setGState(states) {
            for (let i = 0, ii = states.length; i < ii; i++) {
              const state = states[i];
              const key = state[0];
              const value = state[1];

              switch (key) {
                case "LW":
                  this.setLineWidth(value);
                  break;

                case "LC":
                  this.setLineCap(value);
                  break;

                case "LJ":
                  this.setLineJoin(value);
                  break;

                case "ML":
                  this.setMiterLimit(value);
                  break;

                case "D":
                  this.setDash(value[0], value[1]);
                  break;

                case "RI":
                  this.setRenderingIntent(value);
                  break;

                case "FL":
                  this.setFlatness(value);
                  break;

                case "Font":
                  this.setFont(value[0], value[1]);
                  break;

                case "CA":
                  this.current.strokeAlpha = state[1];
                  break;

                case "ca":
                  this.current.fillAlpha = state[1];
                  this.ctx.globalAlpha = state[1];
                  break;

                case "BM":
                  this.ctx.globalCompositeOperation = value;
                  break;

                case "SMask":
                  if (this.current.activeSMask) {
                    if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                      this.suspendSMaskGroup();
                    } else {
                      this.endSMaskGroup();
                    }
                  }

                  this.current.activeSMask = value ? this.tempSMask : null;

                  if (this.current.activeSMask) {
                    this.beginSMaskGroup();
                  }

                  this.tempSMask = null;
                  break;

                case "TR":
                  this.current.transferMaps = value;
              }
            }
          },
          beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
            const activeSMask = this.current.activeSMask;
            const drawnWidth = activeSMask.canvas.width;
            const drawnHeight = activeSMask.canvas.height;
            const cacheId = "smaskGroupAt" + this.groupLevel;
            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            const currentCtx = this.ctx;
            const currentTransform = currentCtx.mozCurrentTransform;
            this.ctx.save();
            const groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
            groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);
            activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            const groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
            this.ctx.restore();
            this.ctx.save();
            copyCtxState(groupCtx, this.ctx);
            this.current.resumeSMaskCtx = groupCtx;

            const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

            this.ctx.transform.apply(this.ctx, deltaTransform);
            groupCtx.save();
            groupCtx.setTransform(1, 0, 0, 1, 0, 0);
            groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
            groupCtx.restore();
          },
          resumeSMaskGroup: function CanvasGraphics_resumeSMaskGroup() {
            const groupCtx = this.current.resumeSMaskCtx;
            const currentCtx = this.ctx;
            this.ctx = groupCtx;
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            const groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
            this.ctx.restore();
            copyCtxState(groupCtx, this.ctx);

            const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

            this.ctx.transform.apply(this.ctx, deltaTransform);
          },
          save: function CanvasGraphics_save() {
            this.ctx.save();
            const old = this.current;
            this.stateStack.push(old);
            this.current = old.clone();
            this.current.resumeSMaskCtx = null;
          },
          restore: function CanvasGraphics_restore() {
            if (this.current.resumeSMaskCtx) {
              this.resumeSMaskGroup();
            }

            if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
              this.endSMaskGroup();
            }

            if (this.stateStack.length !== 0) {
              this.current = this.stateStack.pop();
              this.ctx.restore();
              this.pendingClip = null;
              this._cachedGetSinglePixelWidth = null;
            } else {
              this.current.activeSMask = null;
            }
          },
          transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
            this.ctx.transform(a, b, c, d, e, f);
            this._cachedGetSinglePixelWidth = null;
          },
          constructPath: function CanvasGraphics_constructPath(ops, args) {
            const ctx = this.ctx;
            const current = this.current;
            let x = current.x,
                y = current.y;

            for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
              switch (ops[i] | 0) {
                case _util.OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  const width = args[j++];
                  const height = args[j++];
                  const xw = x + width;
                  const yh = y + height;
                  ctx.moveTo(x, y);

                  if (width === 0 || height === 0) {
                    ctx.lineTo(xw, yh);
                  } else {
                    ctx.lineTo(xw, y);
                    ctx.lineTo(xw, yh);
                    ctx.lineTo(x, yh);
                  }

                  ctx.closePath();
                  break;

                case _util.OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.moveTo(x, y);
                  break;

                case _util.OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.lineTo(x, y);
                  break;

                case _util.OPS.curveTo:
                  x = args[j + 4];
                  y = args[j + 5];
                  ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                  j += 6;
                  break;

                case _util.OPS.curveTo2:
                  ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                  x = args[j + 2];
                  y = args[j + 3];
                  j += 4;
                  break;

                case _util.OPS.curveTo3:
                  x = args[j + 2];
                  y = args[j + 3];
                  ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                  j += 4;
                  break;

                case _util.OPS.closePath:
                  ctx.closePath();
                  break;
              }
            }

            current.setCurrentPoint(x, y);
          },
          closePath: function CanvasGraphics_closePath() {
            this.ctx.closePath();
          },
          stroke: function CanvasGraphics_stroke(consumePath) {
            consumePath = typeof consumePath !== "undefined" ? consumePath : true;
            const ctx = this.ctx;
            const strokeColor = this.current.strokeColor;
            ctx.globalAlpha = this.current.strokeAlpha;

            if (this.contentVisible) {
              if (typeof strokeColor === "object" && strokeColor?.getPattern) {
                ctx.save();
                const transform = ctx.mozCurrentTransform;

                const scale = _util.Util.singularValueDecompose2dScale(transform)[0];

                ctx.strokeStyle = strokeColor.getPattern(ctx, this);
                const lineWidth = this.getSinglePixelWidth();
                const scaledLineWidth = this.current.lineWidth * scale;

                if (lineWidth < 0 && -lineWidth >= scaledLineWidth) {
                  ctx.resetTransform();
                  ctx.lineWidth = Math.round(this._combinedScaleFactor);
                } else {
                  ctx.lineWidth = Math.max(lineWidth, scaledLineWidth);
                }

                ctx.stroke();
                ctx.restore();
              } else {
                const lineWidth = this.getSinglePixelWidth();

                if (lineWidth < 0 && -lineWidth >= this.current.lineWidth) {
                  ctx.save();
                  ctx.resetTransform();
                  ctx.lineWidth = Math.round(this._combinedScaleFactor);
                  ctx.stroke();
                  ctx.restore();
                } else {
                  ctx.lineWidth = Math.max(lineWidth, this.current.lineWidth);
                  ctx.stroke();
                }
              }
            }

            if (consumePath) {
              this.consumePath();
            }

            ctx.globalAlpha = this.current.fillAlpha;
          },
          closeStroke: function CanvasGraphics_closeStroke() {
            this.closePath();
            this.stroke();
          },
          fill: function CanvasGraphics_fill(consumePath) {
            consumePath = typeof consumePath !== "undefined" ? consumePath : true;
            const ctx = this.ctx;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            let needRestore = false;

            if (isPatternFill) {
              ctx.save();

              if (this.baseTransform) {
                ctx.setTransform.apply(ctx, this.baseTransform);
              }

              ctx.fillStyle = fillColor.getPattern(ctx, this);
              needRestore = true;
            }

            if (this.contentVisible) {
              if (this.pendingEOFill) {
                ctx.fill("evenodd");
                this.pendingEOFill = false;
              } else {
                ctx.fill();
              }
            }

            if (needRestore) {
              ctx.restore();
            }

            if (consumePath) {
              this.consumePath();
            }
          },
          eoFill: function CanvasGraphics_eoFill() {
            this.pendingEOFill = true;
            this.fill();
          },
          fillStroke: function CanvasGraphics_fillStroke() {
            this.fill(false);
            this.stroke(false);
            this.consumePath();
          },
          eoFillStroke: function CanvasGraphics_eoFillStroke() {
            this.pendingEOFill = true;
            this.fillStroke();
          },
          closeFillStroke: function CanvasGraphics_closeFillStroke() {
            this.closePath();
            this.fillStroke();
          },
          closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
            this.pendingEOFill = true;
            this.closePath();
            this.fillStroke();
          },
          endPath: function CanvasGraphics_endPath() {
            this.consumePath();
          },
          clip: function CanvasGraphics_clip() {
            this.pendingClip = NORMAL_CLIP;
          },
          eoClip: function CanvasGraphics_eoClip() {
            this.pendingClip = EO_CLIP;
          },
          beginText: function CanvasGraphics_beginText() {
            this.current.textMatrix = _util.IDENTITY_MATRIX;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          endText: function CanvasGraphics_endText() {
            const paths = this.pendingTextPaths;
            const ctx = this.ctx;

            if (paths === undefined) {
              ctx.beginPath();
              return;
            }

            ctx.save();
            ctx.beginPath();

            for (let i = 0; i < paths.length; i++) {
              const path = paths[i];
              ctx.setTransform.apply(ctx, path.transform);
              ctx.translate(path.x, path.y);
              path.addToPath(ctx, path.fontSize);
            }

            ctx.restore();
            ctx.clip();
            ctx.beginPath();
            delete this.pendingTextPaths;
          },
          setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
            this.current.charSpacing = spacing;
          },
          setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
            this.current.wordSpacing = spacing;
          },
          setHScale: function CanvasGraphics_setHScale(scale) {
            this.current.textHScale = scale / 100;
          },
          setLeading: function CanvasGraphics_setLeading(leading) {
            this.current.leading = -leading;
          },
          setFont: function CanvasGraphics_setFont(fontRefName, size) {
            const fontObj = this.commonObjs.get(fontRefName);
            const current = this.current;

            if (!fontObj) {
              throw new Error(`Can't find font for ${fontRefName}`);
            }

            current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;

            if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
              (0, _util.warn)("Invalid font matrix for font " + fontRefName);
            }

            if (size < 0) {
              size = -size;
              current.fontDirection = -1;
            } else {
              current.fontDirection = 1;
            }

            this.current.font = fontObj;
            this.current.fontSize = size;

            if (fontObj.isType3Font) {
              return;
            }

            const name = fontObj.loadedName || "sans-serif";
            let bold = "normal";

            if (fontObj.black) {
              bold = "900";
            } else if (fontObj.bold) {
              bold = "bold";
            }

            const italic = fontObj.italic ? "italic" : "normal";
            const typeface = `"${name}", ${fontObj.fallbackName}`;
            let browserFontSize = size;

            if (size < MIN_FONT_SIZE) {
              browserFontSize = MIN_FONT_SIZE;
            } else if (size > MAX_FONT_SIZE) {
              browserFontSize = MAX_FONT_SIZE;
            }

            this.current.fontSizeScale = size / browserFontSize;
            this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
          },
          setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
            this.current.textRenderingMode = mode;
          },
          setTextRise: function CanvasGraphics_setTextRise(rise) {
            this.current.textRise = rise;
          },
          moveText: function CanvasGraphics_moveText(x, y) {
            this.current.x = this.current.lineX += x;
            this.current.y = this.current.lineY += y;
          },
          setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
            this.setLeading(-y);
            this.moveText(x, y);
          },
          setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
            this.current.textMatrix = [a, b, c, d, e, f];
            this.current.textMatrixScale = Math.sqrt(a * a + b * b);
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          nextLine: function CanvasGraphics_nextLine() {
            this.moveText(0, this.current.leading);
          },

          paintChar(character, x, y, patternTransform, resetLineWidthToOne) {
            const ctx = this.ctx;
            const current = this.current;
            const font = current.font;
            const textRenderingMode = current.textRenderingMode;
            const fontSize = current.fontSize / current.fontSizeScale;
            const fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
            const isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
            const patternFill = current.patternFill && !font.missingFile;
            let addToPath;

            if (font.disableFontFace || isAddToPathSet || patternFill) {
              addToPath = font.getPathGenerator(this.commonObjs, character);
            }

            if (font.disableFontFace || patternFill) {
              ctx.save();
              ctx.translate(x, y);
              ctx.beginPath();
              addToPath(ctx, fontSize);

              if (patternTransform) {
                ctx.setTransform.apply(ctx, patternTransform);
              }

              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fill();
              }

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                if (resetLineWidthToOne) {
                  ctx.resetTransform();
                  ctx.lineWidth = Math.round(this._combinedScaleFactor);
                }

                ctx.stroke();
              }

              ctx.restore();
            } else {
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fillText(character, x, y);
              }

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                if (resetLineWidthToOne) {
                  ctx.save();
                  ctx.moveTo(x, y);
                  ctx.resetTransform();
                  ctx.lineWidth = Math.round(this._combinedScaleFactor);
                  ctx.strokeText(character, 0, 0);
                  ctx.restore();
                } else {
                  ctx.strokeText(character, x, y);
                }
              }
            }

            if (isAddToPathSet) {
              const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
              paths.push({
                transform: ctx.mozCurrentTransform,
                x,
                y,
                fontSize,
                addToPath
              });
            }
          },

          get isFontSubpixelAAEnabled() {
            const {
              context: ctx
            } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            ctx.scale(1.5, 1);
            ctx.fillText("I", 0, 10);
            const data = ctx.getImageData(0, 0, 10, 10).data;
            let enabled = false;

            for (let i = 3; i < data.length; i += 4) {
              if (data[i] > 0 && data[i] < 255) {
                enabled = true;
                break;
              }
            }

            return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
          },

          showText: function CanvasGraphics_showText(glyphs) {
            const current = this.current;
            const font = current.font;

            if (font.isType3Font) {
              return this.showType3Text(glyphs);
            }

            const fontSize = current.fontSize;

            if (fontSize === 0) {
              return undefined;
            }

            const ctx = this.ctx;
            const fontSizeScale = current.fontSizeScale;
            const charSpacing = current.charSpacing;
            const wordSpacing = current.wordSpacing;
            const fontDirection = current.fontDirection;
            const textHScale = current.textHScale * fontDirection;
            const glyphsLength = glyphs.length;
            const vertical = font.vertical;
            const spacingDir = vertical ? 1 : -1;
            const defaultVMetrics = font.defaultVMetrics;
            const widthAdvanceScale = fontSize * current.fontMatrix[0];
            const simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
            ctx.save();
            let patternTransform;

            if (current.patternFill) {
              ctx.save();
              const pattern = current.fillColor.getPattern(ctx, this);
              patternTransform = ctx.mozCurrentTransform;
              ctx.restore();
              ctx.fillStyle = pattern;
            }

            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y + current.textRise);

            if (fontDirection > 0) {
              ctx.scale(textHScale, -1);
            } else {
              ctx.scale(textHScale, 1);
            }

            let lineWidth = current.lineWidth;
            let resetLineWidthToOne = false;
            const scale = current.textMatrixScale;

            if (scale === 0 || lineWidth === 0) {
              const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                this._cachedGetSinglePixelWidth = null;
                lineWidth = this.getSinglePixelWidth();
                resetLineWidthToOne = lineWidth < 0;
              }
            } else {
              lineWidth /= scale;
            }

            if (fontSizeScale !== 1.0) {
              ctx.scale(fontSizeScale, fontSizeScale);
              lineWidth /= fontSizeScale;
            }

            ctx.lineWidth = lineWidth;
            let x = 0,
                i;

            for (i = 0; i < glyphsLength; ++i) {
              const glyph = glyphs[i];

              if ((0, _util.isNum)(glyph)) {
                x += spacingDir * glyph * fontSize / 1000;
                continue;
              }

              let restoreNeeded = false;
              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const character = glyph.fontChar;
              const accent = glyph.accent;
              let scaledX, scaledY;
              let width = glyph.width;

              if (vertical) {
                const vmetric = glyph.vmetric || defaultVMetrics;
                const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
                const vy = vmetric[2] * widthAdvanceScale;
                width = vmetric ? -vmetric[0] : width;
                scaledX = vx / fontSizeScale;
                scaledY = (x + vy) / fontSizeScale;
              } else {
                scaledX = x / fontSizeScale;
                scaledY = 0;
              }

              if (font.remeasure && width > 0) {
                const measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

                if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                  const characterScaleX = width / measuredWidth;
                  restoreNeeded = true;
                  ctx.save();
                  ctx.scale(characterScaleX, 1);
                  scaledX /= characterScaleX;
                } else if (width !== measuredWidth) {
                  scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
                }
              }

              if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
                if (simpleFillText && !accent) {
                  ctx.fillText(character, scaledX, scaledY);
                } else {
                  this.paintChar(character, scaledX, scaledY, patternTransform, resetLineWidthToOne);

                  if (accent) {
                    const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
                    const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
                    this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform, resetLineWidthToOne);
                  }
                }
              }

              let charWidth;

              if (vertical) {
                charWidth = width * widthAdvanceScale - spacing * fontDirection;
              } else {
                charWidth = width * widthAdvanceScale + spacing * fontDirection;
              }

              x += charWidth;

              if (restoreNeeded) {
                ctx.restore();
              }
            }

            if (vertical) {
              current.y -= x;
            } else {
              current.x += x * textHScale;
            }

            ctx.restore();
          },
          showType3Text: function CanvasGraphics_showType3Text(glyphs) {
            const ctx = this.ctx;
            const current = this.current;
            const font = current.font;
            const fontSize = current.fontSize;
            const fontDirection = current.fontDirection;
            const spacingDir = font.vertical ? 1 : -1;
            const charSpacing = current.charSpacing;
            const wordSpacing = current.wordSpacing;
            const textHScale = current.textHScale * fontDirection;
            const fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            const glyphsLength = glyphs.length;
            const isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
            let i, glyph, width, spacingLength;

            if (isTextInvisible || fontSize === 0) {
              return;
            }

            this._cachedGetSinglePixelWidth = null;
            ctx.save();
            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y);
            ctx.scale(textHScale, fontDirection);

            for (i = 0; i < glyphsLength; ++i) {
              glyph = glyphs[i];

              if ((0, _util.isNum)(glyph)) {
                spacingLength = spacingDir * glyph * fontSize / 1000;
                this.ctx.translate(spacingLength, 0);
                current.x += spacingLength * textHScale;
                continue;
              }

              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const operatorList = font.charProcOperatorList[glyph.operatorListId];

              if (!operatorList) {
                (0, _util.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);
                continue;
              }

              if (this.contentVisible) {
                this.processingType3 = glyph;
                this.save();
                ctx.scale(fontSize, fontSize);
                ctx.transform.apply(ctx, fontMatrix);
                this.executeOperatorList(operatorList);
                this.restore();
              }

              const transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);

              width = transformed[0] * fontSize + spacing;
              ctx.translate(width, 0);
              current.x += width * textHScale;
            }

            ctx.restore();
            this.processingType3 = null;
          },
          setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
          setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
            this.ctx.rect(llx, lly, urx - llx, ury - lly);
            this.clip();
            this.endPath();
          },
          getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
            let pattern;

            if (IR[0] === "TilingPattern") {
              const color = IR[1];
              const baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
              const canvasGraphicsFactory = {
                createCanvasGraphics: ctx => {
                  return new CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext);
                }
              };
              pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
            } else {
              pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
            }

            return pattern;
          },
          setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          },
          setFillColorN: function CanvasGraphics_setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = true;
          },
          setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
            const color = _util.Util.makeHexColor(r, g, b);

            this.ctx.strokeStyle = color;
            this.current.strokeColor = color;
          },
          setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
            const color = _util.Util.makeHexColor(r, g, b);

            this.ctx.fillStyle = color;
            this.current.fillColor = color;
            this.current.patternFill = false;
          },
          shadingFill: function CanvasGraphics_shadingFill(patternIR) {
            if (!this.contentVisible) {
              return;
            }

            const ctx = this.ctx;
            this.save();
            const pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
            ctx.fillStyle = pattern.getPattern(ctx, this, true);
            const inv = ctx.mozCurrentTransformInverse;

            if (inv) {
              const canvas = ctx.canvas;
              const width = canvas.width;
              const height = canvas.height;

              const bl = _util.Util.applyTransform([0, 0], inv);

              const br = _util.Util.applyTransform([0, height], inv);

              const ul = _util.Util.applyTransform([width, 0], inv);

              const ur = _util.Util.applyTransform([width, height], inv);

              const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            } else {
              this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            }

            this.restore();
          },
          beginInlineImage: function CanvasGraphics_beginInlineImage() {
            (0, _util.unreachable)("Should not call beginInlineImage");
          },
          beginImageData: function CanvasGraphics_beginImageData() {
            (0, _util.unreachable)("Should not call beginImageData");
          },
          paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
            if (!this.contentVisible) {
              return;
            }

            this.save();
            this.baseTransformStack.push(this.baseTransform);

            if (Array.isArray(matrix) && matrix.length === 6) {
              this.transform.apply(this, matrix);
            }

            this.baseTransform = this.ctx.mozCurrentTransform;

            if (bbox) {
              const width = bbox[2] - bbox[0];
              const height = bbox[3] - bbox[1];
              this.ctx.rect(bbox[0], bbox[1], width, height);
              this.clip();
              this.endPath();
            }
          },
          paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
            if (!this.contentVisible) {
              return;
            }

            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
          },
          beginGroup: function CanvasGraphics_beginGroup(group) {
            if (!this.contentVisible) {
              return;
            }

            this.save();
            const currentCtx = this.ctx;

            if (!group.isolated) {
              (0, _util.info)("TODO: Support non-isolated groups.");
            }

            if (group.knockout) {
              (0, _util.warn)("Knockout groups not supported.");
            }

            const currentTransform = currentCtx.mozCurrentTransform;

            if (group.matrix) {
              currentCtx.transform.apply(currentCtx, group.matrix);
            }

            if (!group.bbox) {
              throw new Error("Bounding box is required.");
            }

            let bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);

            const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
            bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
            const offsetX = Math.floor(bounds[0]);
            const offsetY = Math.floor(bounds[1]);
            let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
            let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
            let scaleX = 1,
                scaleY = 1;

            if (drawnWidth > MAX_GROUP_SIZE) {
              scaleX = drawnWidth / MAX_GROUP_SIZE;
              drawnWidth = MAX_GROUP_SIZE;
            }

            if (drawnHeight > MAX_GROUP_SIZE) {
              scaleY = drawnHeight / MAX_GROUP_SIZE;
              drawnHeight = MAX_GROUP_SIZE;
            }

            let cacheId = "groupAt" + this.groupLevel;

            if (group.smask) {
              cacheId += "_smask_" + this.smaskCounter++ % 2;
            }

            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            const groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / scaleX, 1 / scaleY);
            groupCtx.translate(-offsetX, -offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);

            if (group.smask) {
              this.smaskStack.push({
                canvas: scratchCanvas.canvas,
                context: groupCtx,
                offsetX,
                offsetY,
                scaleX,
                scaleY,
                subtype: group.smask.subtype,
                backdrop: group.smask.backdrop,
                transferMap: group.smask.transferMap || null,
                startTransformInverse: null
              });
            } else {
              currentCtx.setTransform(1, 0, 0, 1, 0, 0);
              currentCtx.translate(offsetX, offsetY);
              currentCtx.scale(scaleX, scaleY);
            }

            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
            this.current.activeSMask = null;
          },
          endGroup: function CanvasGraphics_endGroup(group) {
            if (!this.contentVisible) {
              return;
            }

            this.groupLevel--;
            const groupCtx = this.ctx;
            this.ctx = this.groupStack.pop();

            if (this.ctx.imageSmoothingEnabled !== undefined) {
              this.ctx.imageSmoothingEnabled = false;
            } else {
              this.ctx.mozImageSmoothingEnabled = false;
            }

            if (group.smask) {
              this.tempSMask = this.smaskStack.pop();
            } else {
              this.ctx.drawImage(groupCtx.canvas, 0, 0);
            }

            this.restore();
          },
          beginAnnotations: function CanvasGraphics_beginAnnotations() {
            this.save();

            if (this.baseTransform) {
              this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            }
          },
          endAnnotations: function CanvasGraphics_endAnnotations() {
            this.restore();
          },
          beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
            this.save();
            resetCtxToDefault(this.ctx);
            this.current = new CanvasExtraState();

            if (Array.isArray(rect) && rect.length === 4) {
              const width = rect[2] - rect[0];
              const height = rect[3] - rect[1];
              this.ctx.rect(rect[0], rect[1], width, height);
              this.clip();
              this.endPath();
            }

            this.transform.apply(this, transform);
            this.transform.apply(this, matrix);
          },
          endAnnotation: function CanvasGraphics_endAnnotation() {
            this.restore();
          },
          paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
            if (!this.contentVisible) {
              return;
            }

            const ctx = this.ctx;
            const width = img.width,
                  height = img.height;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            const glyph = this.processingType3;

            if (glyph && glyph.compiled === undefined) {
              if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                glyph.compiled = compileType3Glyph({
                  data: img.data,
                  width,
                  height
                });
              } else {
                glyph.compiled = null;
              }
            }

            if (glyph?.compiled) {
              glyph.compiled(ctx);
              return;
            }

            const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
            const maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, img);
            maskCtx.globalCompositeOperation = "source-in";
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            this.paintInlineImageXObject(maskCanvas.canvas);
          },

          paintImageMaskXObjectRepeat(imgData, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
            if (!this.contentVisible) {
              return;
            }

            const width = imgData.width;
            const height = imgData.height;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;
            const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
            const maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, imgData);
            maskCtx.globalCompositeOperation = "source-in";
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            const ctx = this.ctx;

            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              ctx.save();
              ctx.transform(scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },

          paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
            if (!this.contentVisible) {
              return;
            }

            const ctx = this.ctx;
            const fillColor = this.current.fillColor;
            const isPatternFill = this.current.patternFill;

            for (let i = 0, ii = images.length; i < ii; i++) {
              const image = images[i];
              const width = image.width,
                    height = image.height;
              const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
              const maskCtx = maskCanvas.context;
              maskCtx.save();
              putBinaryImageMask(maskCtx, image);
              maskCtx.globalCompositeOperation = "source-in";
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              ctx.save();
              ctx.transform.apply(ctx, image.transform);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },
          paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
            if (!this.contentVisible) {
              return;
            }

            const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }

            this.paintInlineImageXObject(imgData);
          },
          paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
            if (!this.contentVisible) {
              return;
            }

            const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }

            const width = imgData.width;
            const height = imgData.height;
            const map = [];

            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              map.push({
                transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                x: 0,
                y: 0,
                w: width,
                h: height
              });
            }

            this.paintInlineImageXObjectGroup(imgData, map);
          },
          paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
            if (!this.contentVisible) {
              return;
            }

            const width = imgData.width;
            const height = imgData.height;
            const ctx = this.ctx;
            this.save();
            ctx.scale(1 / width, -1 / height);
            const currentTransform = ctx.mozCurrentTransformInverse;
            const a = currentTransform[0],
                  b = currentTransform[1];
            let widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
            const c = currentTransform[2],
                  d = currentTransform[3];
            let heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
            let imgToPaint, tmpCanvas, tmpCtx;

            if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
              imgToPaint = imgData;
            } else {
              tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
              tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
              imgToPaint = tmpCanvas.canvas;
            }

            let paintWidth = width,
                paintHeight = height;
            let tmpCanvasId = "prescale1";

            while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
              let newWidth = paintWidth,
                  newHeight = paintHeight;

              if (widthScale > 2 && paintWidth > 1) {
                newWidth = Math.ceil(paintWidth / 2);
                widthScale /= paintWidth / newWidth;
              }

              if (heightScale > 2 && paintHeight > 1) {
                newHeight = Math.ceil(paintHeight / 2);
                heightScale /= paintHeight / newHeight;
              }

              tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
              tmpCtx = tmpCanvas.context;
              tmpCtx.clearRect(0, 0, newWidth, newHeight);
              tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
              imgToPaint = tmpCanvas.canvas;
              paintWidth = newWidth;
              paintHeight = newHeight;
              tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
            }

            ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

            if (this.imageLayer) {
              const position = this.getCanvasPosition(0, -height);
              this.imageLayer.appendImage({
                imgData,
                left: position[0],
                top: position[1],
                width: width / currentTransform[0],
                height: height / currentTransform[3]
              });
            }

            this.restore();
          },
          paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
            if (!this.contentVisible) {
              return;
            }

            const ctx = this.ctx;
            const w = imgData.width;
            const h = imgData.height;
            const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
            const tmpCtx = tmpCanvas.context;
            putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);

            for (let i = 0, ii = map.length; i < ii; i++) {
              const entry = map[i];
              ctx.save();
              ctx.transform.apply(ctx, entry.transform);
              ctx.scale(1, -1);
              ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);

              if (this.imageLayer) {
                const position = this.getCanvasPosition(entry.x, entry.y);
                this.imageLayer.appendImage({
                  imgData,
                  left: position[0],
                  top: position[1],
                  width: w,
                  height: h
                });
              }

              ctx.restore();
            }
          },
          paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
            if (!this.contentVisible) {
              return;
            }

            this.ctx.fillRect(0, 0, 1, 1);
          },
          markPoint: function CanvasGraphics_markPoint(tag) {},
          markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
          beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
            this.markedContentStack.push({
              visible: true
            });
          },
          beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {
            if (tag === "OC") {
              this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(properties)
              });
            } else {
              this.markedContentStack.push({
                visible: true
              });
            }

            this.contentVisible = this.isContentVisible();
          },
          endMarkedContent: function CanvasGraphics_endMarkedContent() {
            this.markedContentStack.pop();
            this.contentVisible = this.isContentVisible();
          },
          beginCompat: function CanvasGraphics_beginCompat() {},
          endCompat: function CanvasGraphics_endCompat() {},
          consumePath: function CanvasGraphics_consumePath() {
            const ctx = this.ctx;

            if (this.pendingClip) {
              if (this.pendingClip === EO_CLIP) {
                ctx.clip("evenodd");
              } else {
                ctx.clip();
              }

              this.pendingClip = null;
            }

            ctx.beginPath();
          },

          getSinglePixelWidth() {
            if (this._cachedGetSinglePixelWidth === null) {
              const m = this.ctx.mozCurrentTransform;
              const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
              const sqNorm1 = m[0] ** 2 + m[2] ** 2;
              const sqNorm2 = m[1] ** 2 + m[3] ** 2;
              const pixelHeight = Math.sqrt(Math.max(sqNorm1, sqNorm2)) / absDet;

              if (sqNorm1 !== sqNorm2 && this._combinedScaleFactor * pixelHeight > 1) {
                this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * pixelHeight);
              } else if (absDet > Number.EPSILON) {
                this._cachedGetSinglePixelWidth = pixelHeight * 1.0000001;
              } else {
                this._cachedGetSinglePixelWidth = 1;
              }
            }

            return this._cachedGetSinglePixelWidth;
          },

          getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
            const transform = this.ctx.mozCurrentTransform;
            return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
          },
          isContentVisible: function CanvasGraphics_isContentVisible() {
            for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
              if (!this.markedContentStack[i].visible) {
                return false;
              }
            }

            return true;
          }
        };

        for (const op in _util.OPS) {
          CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
        }

        return CanvasGraphics;
      }();

      exports.CanvasGraphics = CanvasGraphics;

      /***/ }),
      /* 11 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.getShadingPatternFromIR = getShadingPatternFromIR;
      exports.TilingPattern = void 0;

      var _util = __w_pdfjs_require__(2);

      const ShadingIRs = {};

      function applyBoundingBox(ctx, bbox) {
        if (!bbox || typeof Path2D === "undefined") {
          return;
        }

        const width = bbox[2] - bbox[0];
        const height = bbox[3] - bbox[1];
        const region = new Path2D();
        region.rect(bbox[0], bbox[1], width, height);
        ctx.clip(region);
      }

      ShadingIRs.RadialAxial = {
        fromIR: function RadialAxial_fromIR(raw) {
          const type = raw[1];
          const bbox = raw[2];
          const colorStops = raw[3];
          const p0 = raw[4];
          const p1 = raw[5];
          const r0 = raw[6];
          const r1 = raw[7];
          return {
            getPattern: function RadialAxial_getPattern(ctx) {
              applyBoundingBox(ctx, bbox);
              let grad;

              if (type === "axial") {
                grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
              } else if (type === "radial") {
                grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
              }

              for (let i = 0, ii = colorStops.length; i < ii; ++i) {
                const c = colorStops[i];
                grad.addColorStop(c[0], c[1]);
              }

              return grad;
            }
          };
        }
      };

      const createMeshCanvas = function createMeshCanvasClosure() {
        function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
          const coords = context.coords,
                colors = context.colors;
          const bytes = data.data,
                rowSize = data.width * 4;
          let tmp;

          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }

          if (coords[p2 + 1] > coords[p3 + 1]) {
            tmp = p2;
            p2 = p3;
            p3 = tmp;
            tmp = c2;
            c2 = c3;
            c3 = tmp;
          }

          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }

          const x1 = (coords[p1] + context.offsetX) * context.scaleX;
          const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
          const x2 = (coords[p2] + context.offsetX) * context.scaleX;
          const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
          const x3 = (coords[p3] + context.offsetX) * context.scaleX;
          const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;

          if (y1 >= y3) {
            return;
          }

          const c1r = colors[c1],
                c1g = colors[c1 + 1],
                c1b = colors[c1 + 2];
          const c2r = colors[c2],
                c2g = colors[c2 + 1],
                c2b = colors[c2 + 2];
          const c3r = colors[c3],
                c3g = colors[c3 + 1],
                c3b = colors[c3 + 2];
          const minY = Math.round(y1),
                maxY = Math.round(y3);
          let xa, car, cag, cab;
          let xb, cbr, cbg, cbb;

          for (let y = minY; y <= maxY; y++) {
            if (y < y2) {
              let k;

              if (y < y1) {
                k = 0;
              } else if (y1 === y2) {
                k = 1;
              } else {
                k = (y1 - y) / (y1 - y2);
              }

              xa = x1 - (x1 - x2) * k;
              car = c1r - (c1r - c2r) * k;
              cag = c1g - (c1g - c2g) * k;
              cab = c1b - (c1b - c2b) * k;
            } else {
              let k;

              if (y > y3) {
                k = 1;
              } else if (y2 === y3) {
                k = 0;
              } else {
                k = (y2 - y) / (y2 - y3);
              }

              xa = x2 - (x2 - x3) * k;
              car = c2r - (c2r - c3r) * k;
              cag = c2g - (c2g - c3g) * k;
              cab = c2b - (c2b - c3b) * k;
            }

            let k;

            if (y < y1) {
              k = 0;
            } else if (y > y3) {
              k = 1;
            } else {
              k = (y1 - y) / (y1 - y3);
            }

            xb = x1 - (x1 - x3) * k;
            cbr = c1r - (c1r - c3r) * k;
            cbg = c1g - (c1g - c3g) * k;
            cbb = c1b - (c1b - c3b) * k;
            const x1_ = Math.round(Math.min(xa, xb));
            const x2_ = Math.round(Math.max(xa, xb));
            let j = rowSize * y + x1_ * 4;

            for (let x = x1_; x <= x2_; x++) {
              k = (xa - x) / (xa - xb);

              if (k < 0) {
                k = 0;
              } else if (k > 1) {
                k = 1;
              }

              bytes[j++] = car - (car - cbr) * k | 0;
              bytes[j++] = cag - (cag - cbg) * k | 0;
              bytes[j++] = cab - (cab - cbb) * k | 0;
              bytes[j++] = 255;
            }
          }
        }

        function drawFigure(data, figure, context) {
          const ps = figure.coords;
          const cs = figure.colors;
          let i, ii;

          switch (figure.type) {
            case "lattice":
              const verticesPerRow = figure.verticesPerRow;
              const rows = Math.floor(ps.length / verticesPerRow) - 1;
              const cols = verticesPerRow - 1;

              for (i = 0; i < rows; i++) {
                let q = i * verticesPerRow;

                for (let j = 0; j < cols; j++, q++) {
                  drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                  drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                }
              }

              break;

            case "triangles":
              for (i = 0, ii = ps.length; i < ii; i += 3) {
                drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
              }

              break;

            default:
              throw new Error("illegal figure");
          }
        }

        function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
          const EXPECTED_SCALE = 1.1;
          const MAX_PATTERN_SIZE = 3000;
          const BORDER_SIZE = 2;
          const offsetX = Math.floor(bounds[0]);
          const offsetY = Math.floor(bounds[1]);
          const boundsWidth = Math.ceil(bounds[2]) - offsetX;
          const boundsHeight = Math.ceil(bounds[3]) - offsetY;
          const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          const scaleX = boundsWidth / width;
          const scaleY = boundsHeight / height;
          const context = {
            coords,
            colors,
            offsetX: -offsetX,
            offsetY: -offsetY,
            scaleX: 1 / scaleX,
            scaleY: 1 / scaleY
          };
          const paddedWidth = width + BORDER_SIZE * 2;
          const paddedHeight = height + BORDER_SIZE * 2;
          let canvas, tmpCanvas, i, ii;

          if (webGLContext.isEnabled) {
            canvas = webGLContext.drawFigures({
              width,
              height,
              backgroundColor,
              figures,
              context
            });
            tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
            tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          } else {
            tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
            const tmpCtx = tmpCanvas.context;
            const data = tmpCtx.createImageData(width, height);

            if (backgroundColor) {
              const bytes = data.data;

              for (i = 0, ii = bytes.length; i < ii; i += 4) {
                bytes[i] = backgroundColor[0];
                bytes[i + 1] = backgroundColor[1];
                bytes[i + 2] = backgroundColor[2];
                bytes[i + 3] = 255;
              }
            }

            for (i = 0; i < figures.length; i++) {
              drawFigure(data, figures[i], context);
            }

            tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          }

          return {
            canvas,
            offsetX: offsetX - BORDER_SIZE * scaleX,
            offsetY: offsetY - BORDER_SIZE * scaleY,
            scaleX,
            scaleY
          };
        }

        return createMeshCanvas;
      }();

      ShadingIRs.Mesh = {
        fromIR: function Mesh_fromIR(raw) {
          const coords = raw[2];
          const colors = raw[3];
          const figures = raw[4];
          const bounds = raw[5];
          const matrix = raw[6];
          const bbox = raw[7];
          const background = raw[8];
          return {
            getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
              applyBoundingBox(ctx, bbox);
              let scale;

              if (shadingFill) {
                scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
              } else {
                scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);

                if (matrix) {
                  const matrixScale = _util.Util.singularValueDecompose2dScale(matrix);

                  scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                }
              }

              const temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

              if (!shadingFill) {
                ctx.setTransform.apply(ctx, owner.baseTransform);

                if (matrix) {
                  ctx.transform.apply(ctx, matrix);
                }
              }

              ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
              ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
              return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
            }
          };
        }
      };
      ShadingIRs.Dummy = {
        fromIR: function Dummy_fromIR() {
          return {
            getPattern: function Dummy_fromIR_getPattern() {
              return "hotpink";
            }
          };
        }
      };

      function getShadingPatternFromIR(raw) {
        const shadingIR = ShadingIRs[raw[0]];

        if (!shadingIR) {
          throw new Error(`Unknown IR type: ${raw[0]}`);
        }

        return shadingIR.fromIR(raw);
      }

      const TilingPattern = function TilingPatternClosure() {
        const PaintType = {
          COLORED: 1,
          UNCOLORED: 2
        };
        const MAX_PATTERN_SIZE = 3000;

        function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
          this.operatorList = IR[2];
          this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
          this.bbox = IR[4];
          this.xstep = IR[5];
          this.ystep = IR[6];
          this.paintType = IR[7];
          this.tilingType = IR[8];
          this.color = color;
          this.canvasGraphicsFactory = canvasGraphicsFactory;
          this.baseTransform = baseTransform;
          this.ctx = ctx;
        }

        TilingPattern.prototype = {
          createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
            const operatorList = this.operatorList;
            const bbox = this.bbox;
            const xstep = this.xstep;
            const ystep = this.ystep;
            const paintType = this.paintType;
            const tilingType = this.tilingType;
            const color = this.color;
            const canvasGraphicsFactory = this.canvasGraphicsFactory;
            (0, _util.info)("TilingType: " + tilingType);
            const x0 = bbox[0],
                  y0 = bbox[1],
                  x1 = bbox[2],
                  y1 = bbox[3];

            const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);

            const curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);

            const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
            const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
            const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
            const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
            const tmpCtx = tmpCanvas.context;
            const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
            graphics.groupLevel = owner.groupLevel;
            this.setFillAndStrokeStyleToContext(graphics, paintType, color);
            graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
            graphics.transform(1, 0, 0, 1, -x0, -y0);
            this.clipBbox(graphics, bbox, x0, y0, x1, y1);
            graphics.executeOperatorList(operatorList);
            this.ctx.transform(1, 0, 0, 1, x0, y0);
            this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
            return tmpCanvas.canvas;
          },
          getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
            step = Math.abs(step);
            const maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
            let size = Math.ceil(step * scale);

            if (size >= maxSize) {
              size = maxSize;
            } else {
              scale = size / step;
            }

            return {
              scale,
              size
            };
          },
          clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
            if (Array.isArray(bbox) && bbox.length === 4) {
              const bboxWidth = x1 - x0;
              const bboxHeight = y1 - y0;
              graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
              graphics.clip();
              graphics.endPath();
            }
          },
          setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
            const context = graphics.ctx,
                  current = graphics.current;

            switch (paintType) {
              case PaintType.COLORED:
                const ctx = this.ctx;
                context.fillStyle = ctx.fillStyle;
                context.strokeStyle = ctx.strokeStyle;
                current.fillColor = ctx.fillStyle;
                current.strokeColor = ctx.strokeStyle;
                break;

              case PaintType.UNCOLORED:
                const cssColor = _util.Util.makeHexColor(color[0], color[1], color[2]);

                context.fillStyle = cssColor;
                context.strokeStyle = cssColor;
                current.fillColor = cssColor;
                current.strokeColor = cssColor;
                break;

              default:
                throw new _util.FormatError(`Unsupported paint type: ${paintType}`);
            }
          },
          getPattern: function TilingPattern_getPattern(ctx, owner) {
            ctx = this.ctx;
            ctx.setTransform.apply(ctx, this.baseTransform);
            ctx.transform.apply(ctx, this.matrix);
            const temporaryPatternCanvas = this.createPatternCanvas(owner);
            return ctx.createPattern(temporaryPatternCanvas, "repeat");
          }
        };
        return TilingPattern;
      }();

      exports.TilingPattern = TilingPattern;

      /***/ }),
      /* 12 */
      /***/ ((__unused_webpack_module, exports) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.GlobalWorkerOptions = void 0;
      const GlobalWorkerOptions = Object.create(null);
      exports.GlobalWorkerOptions = GlobalWorkerOptions;
      GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
      GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? "" : GlobalWorkerOptions.workerSrc;

      /***/ }),
      /* 13 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.MessageHandler = void 0;

      var _util = __w_pdfjs_require__(2);

      const CallbackKind = {
        UNKNOWN: 0,
        DATA: 1,
        ERROR: 2
      };
      const StreamKind = {
        UNKNOWN: 0,
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };

      function wrapReason(reason) {
        if (typeof reason !== "object" || reason === null) {
          return reason;
        }

        switch (reason.name) {
          case "AbortException":
            return new _util.AbortException(reason.message);

          case "MissingPDFException":
            return new _util.MissingPDFException(reason.message);

          case "UnexpectedResponseException":
            return new _util.UnexpectedResponseException(reason.message, reason.status);

          case "UnknownErrorException":
            return new _util.UnknownErrorException(reason.message, reason.details);

          default:
            return new _util.UnknownErrorException(reason.message, reason.toString());
        }
      }

      class MessageHandler {
        constructor(sourceName, targetName, comObj) {
          this.sourceName = sourceName;
          this.targetName = targetName;
          this.comObj = comObj;
          this.callbackId = 1;
          this.streamId = 1;
          this.postMessageTransfers = true;
          this.streamSinks = Object.create(null);
          this.streamControllers = Object.create(null);
          this.callbackCapabilities = Object.create(null);
          this.actionHandler = Object.create(null);

          this._onComObjOnMessage = event => {
            const data = event.data;

            if (data.targetName !== this.sourceName) {
              return;
            }

            if (data.stream) {
              this._processStreamMessage(data);

              return;
            }

            if (data.callback) {
              const callbackId = data.callbackId;
              const capability = this.callbackCapabilities[callbackId];

              if (!capability) {
                throw new Error(`Cannot resolve callback ${callbackId}`);
              }

              delete this.callbackCapabilities[callbackId];

              if (data.callback === CallbackKind.DATA) {
                capability.resolve(data.data);
              } else if (data.callback === CallbackKind.ERROR) {
                capability.reject(wrapReason(data.reason));
              } else {
                throw new Error("Unexpected callback case");
              }

              return;
            }

            const action = this.actionHandler[data.action];

            if (!action) {
              throw new Error(`Unknown action from worker: ${data.action}`);
            }

            if (data.callbackId) {
              const cbSourceName = this.sourceName;
              const cbTargetName = data.sourceName;
              new Promise(function (resolve) {
                resolve(action(data.data));
              }).then(function (result) {
                comObj.postMessage({
                  sourceName: cbSourceName,
                  targetName: cbTargetName,
                  callback: CallbackKind.DATA,
                  callbackId: data.callbackId,
                  data: result
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName: cbSourceName,
                  targetName: cbTargetName,
                  callback: CallbackKind.ERROR,
                  callbackId: data.callbackId,
                  reason: wrapReason(reason)
                });
              });
              return;
            }

            if (data.streamId) {
              this._createStreamSink(data);

              return;
            }

            action(data.data);
          };

          comObj.addEventListener("message", this._onComObjOnMessage);
        }

        on(actionName, handler) {
          const ah = this.actionHandler;

          if (ah[actionName]) {
            throw new Error(`There is already an actionName called "${actionName}"`);
          }

          ah[actionName] = handler;
        }

        send(actionName, data, transfers) {
          this._postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: actionName,
            data
          }, transfers);
        }

        sendWithPromise(actionName, data, transfers) {
          const callbackId = this.callbackId++;
          const capability = (0, _util.createPromiseCapability)();
          this.callbackCapabilities[callbackId] = capability;

          try {
            this._postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: actionName,
              callbackId,
              data
            }, transfers);
          } catch (ex) {
            capability.reject(ex);
          }

          return capability.promise;
        }

        sendWithStream(actionName, data, queueingStrategy, transfers) {
          const streamId = this.streamId++;
          const sourceName = this.sourceName;
          const targetName = this.targetName;
          const comObj = this.comObj;
          return new ReadableStream({
            start: controller => {
              const startCapability = (0, _util.createPromiseCapability)();
              this.streamControllers[streamId] = {
                controller,
                startCall: startCapability,
                pullCall: null,
                cancelCall: null,
                isClosed: false
              };

              this._postMessage({
                sourceName,
                targetName,
                action: actionName,
                streamId,
                data,
                desiredSize: controller.desiredSize
              }, transfers);

              return startCapability.promise;
            },
            pull: controller => {
              const pullCapability = (0, _util.createPromiseCapability)();
              this.streamControllers[streamId].pullCall = pullCapability;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.PULL,
                streamId,
                desiredSize: controller.desiredSize
              });
              return pullCapability.promise;
            },
            cancel: reason => {
              (0, _util.assert)(reason instanceof Error, "cancel must have a valid reason");
              const cancelCapability = (0, _util.createPromiseCapability)();
              this.streamControllers[streamId].cancelCall = cancelCapability;
              this.streamControllers[streamId].isClosed = true;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.CANCEL,
                streamId,
                reason: wrapReason(reason)
              });
              return cancelCapability.promise;
            }
          }, queueingStrategy);
        }

        _createStreamSink(data) {
          const self = this;
          const action = this.actionHandler[data.action];
          const streamId = data.streamId;
          const sourceName = this.sourceName;
          const targetName = data.sourceName;
          const comObj = this.comObj;
          const streamSink = {
            enqueue(chunk, size = 1, transfers) {
              if (this.isCancelled) {
                return;
              }

              const lastDesiredSize = this.desiredSize;
              this.desiredSize -= size;

              if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                this.sinkCapability = (0, _util.createPromiseCapability)();
                this.ready = this.sinkCapability.promise;
              }

              self._postMessage({
                sourceName,
                targetName,
                stream: StreamKind.ENQUEUE,
                streamId,
                chunk
              }, transfers);
            },

            close() {
              if (this.isCancelled) {
                return;
              }

              this.isCancelled = true;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.CLOSE,
                streamId
              });
              delete self.streamSinks[streamId];
            },

            error(reason) {
              (0, _util.assert)(reason instanceof Error, "error must have a valid reason");

              if (this.isCancelled) {
                return;
              }

              this.isCancelled = true;
              comObj.postMessage({
                sourceName,
                targetName,
                stream: StreamKind.ERROR,
                streamId,
                reason: wrapReason(reason)
              });
            },

            sinkCapability: (0, _util.createPromiseCapability)(),
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize: data.desiredSize,
            ready: null
          };
          streamSink.sinkCapability.resolve();
          streamSink.ready = streamSink.sinkCapability.promise;
          this.streamSinks[streamId] = streamSink;
          new Promise(function (resolve) {
            resolve(action(data.data, streamSink));
          }).then(function () {
            comObj.postMessage({
              sourceName,
              targetName,
              stream: StreamKind.START_COMPLETE,
              streamId,
              success: true
            });
          }, function (reason) {
            comObj.postMessage({
              sourceName,
              targetName,
              stream: StreamKind.START_COMPLETE,
              streamId,
              reason: wrapReason(reason)
            });
          });
        }

        _processStreamMessage(data) {
          const streamId = data.streamId;
          const sourceName = this.sourceName;
          const targetName = data.sourceName;
          const comObj = this.comObj;

          switch (data.stream) {
            case StreamKind.START_COMPLETE:
              if (data.success) {
                this.streamControllers[streamId].startCall.resolve();
              } else {
                this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
              }

              break;

            case StreamKind.PULL_COMPLETE:
              if (data.success) {
                this.streamControllers[streamId].pullCall.resolve();
              } else {
                this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
              }

              break;

            case StreamKind.PULL:
              if (!this.streamSinks[streamId]) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  success: true
                });
                break;
              }

              if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
                this.streamSinks[streamId].sinkCapability.resolve();
              }

              this.streamSinks[streamId].desiredSize = data.desiredSize;
              const {
                onPull
              } = this.streamSinks[data.streamId];
              new Promise(function (resolve) {
                resolve(onPull && onPull());
              }).then(function () {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  success: true
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.PULL_COMPLETE,
                  streamId,
                  reason: wrapReason(reason)
                });
              });
              break;

            case StreamKind.ENQUEUE:
              (0, _util.assert)(this.streamControllers[streamId], "enqueue should have stream controller");

              if (this.streamControllers[streamId].isClosed) {
                break;
              }

              this.streamControllers[streamId].controller.enqueue(data.chunk);
              break;

            case StreamKind.CLOSE:
              (0, _util.assert)(this.streamControllers[streamId], "close should have stream controller");

              if (this.streamControllers[streamId].isClosed) {
                break;
              }

              this.streamControllers[streamId].isClosed = true;
              this.streamControllers[streamId].controller.close();

              this._deleteStreamController(streamId);

              break;

            case StreamKind.ERROR:
              (0, _util.assert)(this.streamControllers[streamId], "error should have stream controller");
              this.streamControllers[streamId].controller.error(wrapReason(data.reason));

              this._deleteStreamController(streamId);

              break;

            case StreamKind.CANCEL_COMPLETE:
              if (data.success) {
                this.streamControllers[streamId].cancelCall.resolve();
              } else {
                this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
              }

              this._deleteStreamController(streamId);

              break;

            case StreamKind.CANCEL:
              if (!this.streamSinks[streamId]) {
                break;
              }

              const {
                onCancel
              } = this.streamSinks[data.streamId];
              new Promise(function (resolve) {
                resolve(onCancel && onCancel(wrapReason(data.reason)));
              }).then(function () {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.CANCEL_COMPLETE,
                  streamId,
                  success: true
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.CANCEL_COMPLETE,
                  streamId,
                  reason: wrapReason(reason)
                });
              });
              this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
              this.streamSinks[streamId].isCancelled = true;
              delete this.streamSinks[streamId];
              break;

            default:
              throw new Error("Unexpected stream case");
          }
        }

        async _deleteStreamController(streamId) {
          await Promise.allSettled([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function (capability) {
            return capability && capability.promise;
          }));
          delete this.streamControllers[streamId];
        }

        _postMessage(message, transfers) {
          if (transfers && this.postMessageTransfers) {
            this.comObj.postMessage(message, transfers);
          } else {
            this.comObj.postMessage(message);
          }
        }

        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }

      }

      exports.MessageHandler = MessageHandler;

      /***/ }),
      /* 14 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.Metadata = void 0;

      var _util = __w_pdfjs_require__(2);

      var _xml_parser = __w_pdfjs_require__(15);

      class Metadata {
        constructor(data) {
          (0, _util.assert)(typeof data === "string", "Metadata: input is not a string");
          data = this._repair(data);
          const parser = new _xml_parser.SimpleXMLParser({
            lowerCaseName: true
          });
          const xmlDocument = parser.parseFromString(data);
          this._metadataMap = new Map();

          if (xmlDocument) {
            this._parse(xmlDocument);
          }

          this._data = data;
        }

        _repair(data) {
          return data.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, function (all, codes) {
            const bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
              return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
            }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
              switch (name) {
                case "amp":
                  return "&";

                case "apos":
                  return "'";

                case "gt":
                  return ">";

                case "lt":
                  return "<";

                case "quot":
                  return '"';
              }

              throw new Error(`_repair: ${name} isn't defined.`);
            });
            let chars = "";

            for (let i = 0, ii = bytes.length; i < ii; i += 2) {
              const code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

              if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
                chars += String.fromCharCode(code);
              } else {
                chars += "&#x" + (0x10000 + code).toString(16).substring(1) + ";";
              }
            }

            return ">" + chars;
          });
        }

        _getSequence(entry) {
          const name = entry.nodeName;

          if (name !== "rdf:bag" && name !== "rdf:seq" && name !== "rdf:alt") {
            return null;
          }

          return entry.childNodes.filter(node => node.nodeName === "rdf:li");
        }

        _getCreators(entry) {
          if (entry.nodeName !== "dc:creator") {
            return false;
          }

          if (!entry.hasChildNodes()) {
            return true;
          }

          const seqNode = entry.childNodes[0];
          const authors = this._getSequence(seqNode) || [];

          this._metadataMap.set(entry.nodeName, authors.map(node => node.textContent.trim()));

          return true;
        }

        _parse(xmlDocument) {
          let rdf = xmlDocument.documentElement;

          if (rdf.nodeName !== "rdf:rdf") {
            rdf = rdf.firstChild;

            while (rdf && rdf.nodeName !== "rdf:rdf") {
              rdf = rdf.nextSibling;
            }
          }

          if (!rdf || rdf.nodeName !== "rdf:rdf" || !rdf.hasChildNodes()) {
            return;
          }

          for (const desc of rdf.childNodes) {
            if (desc.nodeName !== "rdf:description") {
              continue;
            }

            for (const entry of desc.childNodes) {
              const name = entry.nodeName;

              if (name === "#text") {
                continue;
              }

              if (this._getCreators(entry)) {
                continue;
              }

              this._metadataMap.set(name, entry.textContent.trim());
            }
          }
        }

        getRaw() {
          return this._data;
        }

        get(name) {
          return this._metadataMap.get(name) ?? null;
        }

        getAll() {
          return (0, _util.objectFromEntries)(this._metadataMap);
        }

        has(name) {
          return this._metadataMap.has(name);
        }

      }

      exports.Metadata = Metadata;

      /***/ }),
      /* 15 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.SimpleXMLParser = exports.SimpleDOMNode = void 0;

      var _util = __w_pdfjs_require__(2);

      const XMLParserErrorCode = {
        NoError: 0,
        EndOfDocument: -1,
        UnterminatedCdat: -2,
        UnterminatedXmlDeclaration: -3,
        UnterminatedDoctypeDeclaration: -4,
        UnterminatedComment: -5,
        MalformedElement: -6,
        OutOfMemory: -7,
        UnterminatedAttributeValue: -8,
        UnterminatedElement: -9,
        ElementNeverBegun: -10
      };

      function isWhitespace(s, index) {
        const ch = s[index];
        return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
      }

      function isWhitespaceString(s) {
        for (let i = 0, ii = s.length; i < ii; i++) {
          if (!isWhitespace(s, i)) {
            return false;
          }
        }

        return true;
      }

      class XMLParserBase {
        _resolveEntities(s) {
          return s.replace(/&([^;]+);/g, (all, entity) => {
            if (entity.substring(0, 2) === "#x") {
              return String.fromCodePoint(parseInt(entity.substring(2), 16));
            } else if (entity.substring(0, 1) === "#") {
              return String.fromCodePoint(parseInt(entity.substring(1), 10));
            }

            switch (entity) {
              case "lt":
                return "<";

              case "gt":
                return ">";

              case "amp":
                return "&";

              case "quot":
                return '"';
            }

            return this.onResolveEntity(entity);
          });
        }

        _parseContent(s, start) {
          const attributes = [];
          let pos = start;

          function skipWs() {
            while (pos < s.length && isWhitespace(s, pos)) {
              ++pos;
            }
          }

          while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
            ++pos;
          }

          const name = s.substring(start, pos);
          skipWs();

          while (pos < s.length && s[pos] !== ">" && s[pos] !== "/" && s[pos] !== "?") {
            skipWs();
            let attrName = "",
                attrValue = "";

            while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== "=") {
              attrName += s[pos];
              ++pos;
            }

            skipWs();

            if (s[pos] !== "=") {
              return null;
            }

            ++pos;
            skipWs();
            const attrEndChar = s[pos];

            if (attrEndChar !== '"' && attrEndChar !== "'") {
              return null;
            }

            const attrEndIndex = s.indexOf(attrEndChar, ++pos);

            if (attrEndIndex < 0) {
              return null;
            }

            attrValue = s.substring(pos, attrEndIndex);
            attributes.push({
              name: attrName,
              value: this._resolveEntities(attrValue)
            });
            pos = attrEndIndex + 1;
            skipWs();
          }

          return {
            name,
            attributes,
            parsed: pos - start
          };
        }

        _parseProcessingInstruction(s, start) {
          let pos = start;

          function skipWs() {
            while (pos < s.length && isWhitespace(s, pos)) {
              ++pos;
            }
          }

          while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
            ++pos;
          }

          const name = s.substring(start, pos);
          skipWs();
          const attrStart = pos;

          while (pos < s.length && (s[pos] !== "?" || s[pos + 1] !== ">")) {
            ++pos;
          }

          const value = s.substring(attrStart, pos);
          return {
            name,
            value,
            parsed: pos - start
          };
        }

        parseXml(s) {
          let i = 0;

          while (i < s.length) {
            const ch = s[i];
            let j = i;

            if (ch === "<") {
              ++j;
              const ch2 = s[j];
              let q;

              switch (ch2) {
                case "/":
                  ++j;
                  q = s.indexOf(">", j);

                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedElement);
                    return;
                  }

                  this.onEndElement(s.substring(j, q));
                  j = q + 1;
                  break;

                case "?":
                  ++j;

                  const pi = this._parseProcessingInstruction(s, j);

                  if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== "?>") {
                    this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                    return;
                  }

                  this.onPi(pi.name, pi.value);
                  j += pi.parsed + 2;
                  break;

                case "!":
                  if (s.substring(j + 1, j + 3) === "--") {
                    q = s.indexOf("-->", j + 3);

                    if (q < 0) {
                      this.onError(XMLParserErrorCode.UnterminatedComment);
                      return;
                    }

                    this.onComment(s.substring(j + 3, q));
                    j = q + 3;
                  } else if (s.substring(j + 1, j + 8) === "[CDATA[") {
                    q = s.indexOf("]]>", j + 8);

                    if (q < 0) {
                      this.onError(XMLParserErrorCode.UnterminatedCdat);
                      return;
                    }

                    this.onCdata(s.substring(j + 8, q));
                    j = q + 3;
                  } else if (s.substring(j + 1, j + 8) === "DOCTYPE") {
                    const q2 = s.indexOf("[", j + 8);
                    let complexDoctype = false;
                    q = s.indexOf(">", j + 8);

                    if (q < 0) {
                      this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                      return;
                    }

                    if (q2 > 0 && q > q2) {
                      q = s.indexOf("]>", j + 8);

                      if (q < 0) {
                        this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                        return;
                      }

                      complexDoctype = true;
                    }

                    const doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                    this.onDoctype(doctypeContent);
                    j = q + (complexDoctype ? 2 : 1);
                  } else {
                    this.onError(XMLParserErrorCode.MalformedElement);
                    return;
                  }

                  break;

                default:
                  const content = this._parseContent(s, j);

                  if (content === null) {
                    this.onError(XMLParserErrorCode.MalformedElement);
                    return;
                  }

                  let isClosed = false;

                  if (s.substring(j + content.parsed, j + content.parsed + 2) === "/>") {
                    isClosed = true;
                  } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== ">") {
                    this.onError(XMLParserErrorCode.UnterminatedElement);
                    return;
                  }

                  this.onBeginElement(content.name, content.attributes, isClosed);
                  j += content.parsed + (isClosed ? 2 : 1);
                  break;
              }
            } else {
              while (j < s.length && s[j] !== "<") {
                j++;
              }

              const text = s.substring(i, j);
              this.onText(this._resolveEntities(text));
            }

            i = j;
          }
        }

        onResolveEntity(name) {
          return `&${name};`;
        }

        onPi(name, value) {}

        onComment(text) {}

        onCdata(text) {}

        onDoctype(doctypeContent) {}

        onText(text) {}

        onBeginElement(name, attributes, isEmpty) {}

        onEndElement(name) {}

        onError(code) {}

      }

      class SimpleDOMNode {
        constructor(nodeName, nodeValue) {
          this.nodeName = nodeName;
          this.nodeValue = nodeValue;
          Object.defineProperty(this, "parentNode", {
            value: null,
            writable: true
          });
        }

        get firstChild() {
          return this.childNodes && this.childNodes[0];
        }

        get nextSibling() {
          const childNodes = this.parentNode.childNodes;

          if (!childNodes) {
            return undefined;
          }

          const index = childNodes.indexOf(this);

          if (index === -1) {
            return undefined;
          }

          return childNodes[index + 1];
        }

        get textContent() {
          if (!this.childNodes) {
            return this.nodeValue || "";
          }

          return this.childNodes.map(function (child) {
            return child.textContent;
          }).join("");
        }

        hasChildNodes() {
          return this.childNodes && this.childNodes.length > 0;
        }

        searchNode(paths, pos) {
          if (pos >= paths.length) {
            return this;
          }

          const component = paths[pos];
          const stack = [];
          let node = this;

          while (true) {
            if (component.name === node.nodeName) {
              if (component.pos === 0) {
                const res = node.searchNode(paths, pos + 1);

                if (res !== null) {
                  return res;
                }
              } else if (stack.length === 0) {
                return null;
              } else {
                const [parent] = stack.pop();
                let siblingPos = 0;

                for (const child of parent.childNodes) {
                  if (component.name === child.nodeName) {
                    if (siblingPos === component.pos) {
                      return child.searchNode(paths, pos + 1);
                    }

                    siblingPos++;
                  }
                }

                return node.searchNode(paths, pos + 1);
              }
            }

            if (node.childNodes && node.childNodes.length !== 0) {
              stack.push([node, 0]);
              node = node.childNodes[0];
            } else if (stack.length === 0) {
              return null;
            } else {
              while (stack.length !== 0) {
                const [parent, currentPos] = stack.pop();
                const newPos = currentPos + 1;

                if (newPos < parent.childNodes.length) {
                  stack.push([parent, newPos]);
                  node = parent.childNodes[newPos];
                  break;
                }
              }

              if (stack.length === 0) {
                return null;
              }
            }
          }
        }

        dump(buffer) {
          if (this.nodeName === "#text") {
            buffer.push((0, _util.encodeToXmlString)(this.nodeValue));
            return;
          }

          buffer.push(`<${this.nodeName}`);

          if (this.attributes) {
            for (const attribute of this.attributes) {
              buffer.push(` ${attribute.name}="${(0, _util.encodeToXmlString)(attribute.value)}"`);
            }
          }

          if (this.hasChildNodes()) {
            buffer.push(">");

            for (const child of this.childNodes) {
              child.dump(buffer);
            }

            buffer.push(`</${this.nodeName}>`);
          } else if (this.nodeValue) {
            buffer.push(`>${(0, _util.encodeToXmlString)(this.nodeValue)}</${this.nodeName}>`);
          } else {
            buffer.push("/>");
          }
        }

      }

      exports.SimpleDOMNode = SimpleDOMNode;

      class SimpleXMLParser extends XMLParserBase {
        constructor({
          hasAttributes = false,
          lowerCaseName = false
        }) {
          super();
          this._currentFragment = null;
          this._stack = null;
          this._errorCode = XMLParserErrorCode.NoError;
          this._hasAttributes = hasAttributes;
          this._lowerCaseName = lowerCaseName;
        }

        parseFromString(data) {
          this._currentFragment = [];
          this._stack = [];
          this._errorCode = XMLParserErrorCode.NoError;
          this.parseXml(data);

          if (this._errorCode !== XMLParserErrorCode.NoError) {
            return undefined;
          }

          const [documentElement] = this._currentFragment;

          if (!documentElement) {
            return undefined;
          }

          return {
            documentElement
          };
        }

        onResolveEntity(name) {
          switch (name) {
            case "apos":
              return "'";
          }

          return super.onResolveEntity(name);
        }

        onText(text) {
          if (isWhitespaceString(text)) {
            return;
          }

          const node = new SimpleDOMNode("#text", text);

          this._currentFragment.push(node);
        }

        onCdata(text) {
          const node = new SimpleDOMNode("#text", text);

          this._currentFragment.push(node);
        }

        onBeginElement(name, attributes, isEmpty) {
          if (this._lowerCaseName) {
            name = name.toLowerCase();
          }

          const node = new SimpleDOMNode(name);
          node.childNodes = [];

          if (this._hasAttributes) {
            node.attributes = attributes;
          }

          this._currentFragment.push(node);

          if (isEmpty) {
            return;
          }

          this._stack.push(this._currentFragment);

          this._currentFragment = node.childNodes;
        }

        onEndElement(name) {
          this._currentFragment = this._stack.pop() || [];
          const lastElement = this._currentFragment[this._currentFragment.length - 1];

          if (!lastElement) {
            return;
          }

          for (let i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
            lastElement.childNodes[i].parentNode = lastElement;
          }
        }

        onError(code) {
          this._errorCode = code;
        }

      }

      exports.SimpleXMLParser = SimpleXMLParser;

      /***/ }),
      /* 16 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.OptionalContentConfig = void 0;

      var _util = __w_pdfjs_require__(2);

      class OptionalContentGroup {
        constructor(name, intent) {
          this.visible = true;
          this.name = name;
          this.intent = intent;
        }

      }

      class OptionalContentConfig {
        constructor(data) {
          this.name = null;
          this.creator = null;
          this._order = null;
          this._groups = new Map();

          if (data === null) {
            return;
          }

          this.name = data.name;
          this.creator = data.creator;
          this._order = data.order;

          for (const group of data.groups) {
            this._groups.set(group.id, new OptionalContentGroup(group.name, group.intent));
          }

          if (data.baseState === "OFF") {
            for (const group of this._groups) {
              group.visible = false;
            }
          }

          for (const on of data.on) {
            this._groups.get(on).visible = true;
          }

          for (const off of data.off) {
            this._groups.get(off).visible = false;
          }
        }

        isVisible(group) {
          if (group.type === "OCG") {
            if (!this._groups.has(group.id)) {
              (0, _util.warn)(`Optional content group not found: ${group.id}`);
              return true;
            }

            return this._groups.get(group.id).visible;
          } else if (group.type === "OCMD") {
            if (group.expression) {
              (0, _util.warn)("Visibility expression not supported yet.");
            }

            if (!group.policy || group.policy === "AnyOn") {
              for (const id of group.ids) {
                if (!this._groups.has(id)) {
                  (0, _util.warn)(`Optional content group not found: ${id}`);
                  return true;
                }

                if (this._groups.get(id).visible) {
                  return true;
                }
              }

              return false;
            } else if (group.policy === "AllOn") {
              for (const id of group.ids) {
                if (!this._groups.has(id)) {
                  (0, _util.warn)(`Optional content group not found: ${id}`);
                  return true;
                }

                if (!this._groups.get(id).visible) {
                  return false;
                }
              }

              return true;
            } else if (group.policy === "AnyOff") {
              for (const id of group.ids) {
                if (!this._groups.has(id)) {
                  (0, _util.warn)(`Optional content group not found: ${id}`);
                  return true;
                }

                if (!this._groups.get(id).visible) {
                  return true;
                }
              }

              return false;
            } else if (group.policy === "AllOff") {
              for (const id of group.ids) {
                if (!this._groups.has(id)) {
                  (0, _util.warn)(`Optional content group not found: ${id}`);
                  return true;
                }

                if (this._groups.get(id).visible) {
                  return false;
                }
              }

              return true;
            }

            (0, _util.warn)(`Unknown optional content policy ${group.policy}.`);
            return true;
          }

          (0, _util.warn)(`Unknown group type ${group.type}.`);
          return true;
        }

        setVisibility(id, visible = true) {
          if (!this._groups.has(id)) {
            (0, _util.warn)(`Optional content group not found: ${id}`);
            return;
          }

          this._groups.get(id).visible = !!visible;
        }

        getOrder() {
          if (!this._groups.size) {
            return null;
          }

          if (this._order) {
            return this._order.slice();
          }

          return Array.from(this._groups.keys());
        }

        getGroups() {
          if (!this._groups.size) {
            return null;
          }

          return (0, _util.objectFromEntries)(this._groups);
        }

        getGroup(id) {
          return this._groups.get(id) || null;
        }

      }

      exports.OptionalContentConfig = OptionalContentConfig;

      /***/ }),
      /* 17 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.PDFDataTransportStream = void 0;

      var _util = __w_pdfjs_require__(2);

      class PDFDataTransportStream {
        constructor(params, pdfDataRangeTransport) {
          (0, _util.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
          this._queuedChunks = [];
          this._progressiveDone = params.progressiveDone || false;
          const initialData = params.initialData;

          if (initialData?.length > 0) {
            const buffer = new Uint8Array(initialData).buffer;

            this._queuedChunks.push(buffer);
          }

          this._pdfDataRangeTransport = pdfDataRangeTransport;
          this._isStreamingSupported = !params.disableStream;
          this._isRangeSupported = !params.disableRange;
          this._contentLength = params.length;
          this._fullRequestReader = null;
          this._rangeReaders = [];

          this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
            this._onReceiveData({
              begin,
              chunk
            });
          });

          this._pdfDataRangeTransport.addProgressListener((loaded, total) => {
            this._onProgress({
              loaded,
              total
            });
          });

          this._pdfDataRangeTransport.addProgressiveReadListener(chunk => {
            this._onReceiveData({
              chunk
            });
          });

          this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          });

          this._pdfDataRangeTransport.transportReady();
        }

        _onReceiveData(args) {
          const buffer = new Uint8Array(args.chunk).buffer;

          if (args.begin === undefined) {
            if (this._fullRequestReader) {
              this._fullRequestReader._enqueue(buffer);
            } else {
              this._queuedChunks.push(buffer);
            }
          } else {
            const found = this._rangeReaders.some(function (rangeReader) {
              if (rangeReader._begin !== args.begin) {
                return false;
              }

              rangeReader._enqueue(buffer);

              return true;
            });

            (0, _util.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }

        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }

        _onProgress(evt) {
          if (evt.total === undefined) {
            const firstReader = this._rangeReaders[0];

            if (firstReader?.onProgress) {
              firstReader.onProgress({
                loaded: evt.loaded
              });
            }
          } else {
            const fullReader = this._fullRequestReader;

            if (fullReader?.onProgress) {
              fullReader.onProgress({
                loaded: evt.loaded,
                total: evt.total
              });
            }
          }
        }

        _onProgressiveDone() {
          if (this._fullRequestReader) {
            this._fullRequestReader.progressiveDone();
          }

          this._progressiveDone = true;
        }

        _removeRangeReader(reader) {
          const i = this._rangeReaders.indexOf(reader);

          if (i >= 0) {
            this._rangeReaders.splice(i, 1);
          }
        }

        getFullReader() {
          (0, _util.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const queuedChunks = this._queuedChunks;
          this._queuedChunks = null;
          return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
        }

        getRangeReader(begin, end) {
          if (end <= this._progressiveDataLength) {
            return null;
          }

          const reader = new PDFDataTransportStreamRangeReader(this, begin, end);

          this._pdfDataRangeTransport.requestDataRange(begin, end);

          this._rangeReaders.push(reader);

          return reader;
        }

        cancelAllRequests(reason) {
          if (this._fullRequestReader) {
            this._fullRequestReader.cancel(reason);
          }

          const readers = this._rangeReaders.slice(0);

          readers.forEach(function (rangeReader) {
            rangeReader.cancel(reason);
          });

          this._pdfDataRangeTransport.abort();
        }

      }

      exports.PDFDataTransportStream = PDFDataTransportStream;

      class PDFDataTransportStreamReader {
        constructor(stream, queuedChunks, progressiveDone = false) {
          this._stream = stream;
          this._done = progressiveDone || false;
          this._filename = null;
          this._queuedChunks = queuedChunks || [];
          this._loaded = 0;

          for (const chunk of this._queuedChunks) {
            this._loaded += chunk.byteLength;
          }

          this._requests = [];
          this._headersReady = Promise.resolve();
          stream._fullRequestReader = this;
          this.onProgress = null;
        }

        _enqueue(chunk) {
          if (this._done) {
            return;
          }

          if (this._requests.length > 0) {
            const requestCapability = this._requests.shift();

            requestCapability.resolve({
              value: chunk,
              done: false
            });
          } else {
            this._queuedChunks.push(chunk);
          }

          this._loaded += chunk.byteLength;
        }

        get headersReady() {
          return this._headersReady;
        }

        get filename() {
          return this._filename;
        }

        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }

        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }

        get contentLength() {
          return this._stream._contentLength;
        }

        async read() {
          if (this._queuedChunks.length > 0) {
            const chunk = this._queuedChunks.shift();

            return {
              value: chunk,
              done: false
            };
          }

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          const requestCapability = (0, _util.createPromiseCapability)();

          this._requests.push(requestCapability);

          return requestCapability.promise;
        }

        cancel(reason) {
          this._done = true;

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];
        }

        progressiveDone() {
          if (this._done) {
            return;
          }

          this._done = true;
        }

      }

      class PDFDataTransportStreamRangeReader {
        constructor(stream, begin, end) {
          this._stream = stream;
          this._begin = begin;
          this._end = end;
          this._queuedChunk = null;
          this._requests = [];
          this._done = false;
          this.onProgress = null;
        }

        _enqueue(chunk) {
          if (this._done) {
            return;
          }

          if (this._requests.length === 0) {
            this._queuedChunk = chunk;
          } else {
            const requestsCapability = this._requests.shift();

            requestsCapability.resolve({
              value: chunk,
              done: false
            });

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];
          }

          this._done = true;

          this._stream._removeRangeReader(this);
        }

        get isStreamingSupported() {
          return false;
        }

        async read() {
          if (this._queuedChunk) {
            const chunk = this._queuedChunk;
            this._queuedChunk = null;
            return {
              value: chunk,
              done: false
            };
          }

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          const requestCapability = (0, _util.createPromiseCapability)();

          this._requests.push(requestCapability);

          return requestCapability.promise;
        }

        cancel(reason) {
          this._done = true;

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];

          this._stream._removeRangeReader(this);
        }

      }

      /***/ }),
      /* 18 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.WebGLContext = void 0;

      var _util = __w_pdfjs_require__(2);

      class WebGLContext {
        constructor({
          enable = false
        }) {
          this._enabled = enable === true;
        }

        get isEnabled() {
          let enabled = this._enabled;

          if (enabled) {
            enabled = WebGLUtils.tryInitGL();
          }

          return (0, _util.shadow)(this, "isEnabled", enabled);
        }

        composeSMask({
          layer,
          mask,
          properties
        }) {
          return WebGLUtils.composeSMask(layer, mask, properties);
        }

        drawFigures({
          width,
          height,
          backgroundColor,
          figures,
          context
        }) {
          return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
        }

        clear() {
          WebGLUtils.cleanup();
        }

      }

      exports.WebGLContext = WebGLContext;

      const WebGLUtils = function WebGLUtilsClosure() {
        function loadShader(gl, code, shaderType) {
          const shader = gl.createShader(shaderType);
          gl.shaderSource(shader, code);
          gl.compileShader(shader);
          const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

          if (!compiled) {
            const errorMsg = gl.getShaderInfoLog(shader);
            throw new Error("Error during shader compilation: " + errorMsg);
          }

          return shader;
        }

        function createVertexShader(gl, code) {
          return loadShader(gl, code, gl.VERTEX_SHADER);
        }

        function createFragmentShader(gl, code) {
          return loadShader(gl, code, gl.FRAGMENT_SHADER);
        }

        function createProgram(gl, shaders) {
          const program = gl.createProgram();

          for (let i = 0, ii = shaders.length; i < ii; ++i) {
            gl.attachShader(program, shaders[i]);
          }

          gl.linkProgram(program);
          const linked = gl.getProgramParameter(program, gl.LINK_STATUS);

          if (!linked) {
            const errorMsg = gl.getProgramInfoLog(program);
            throw new Error("Error during program linking: " + errorMsg);
          }

          return program;
        }

        function createTexture(gl, image, textureId) {
          gl.activeTexture(textureId);
          const texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
          return texture;
        }

        let currentGL, currentCanvas;

        function generateGL() {
          if (currentGL) {
            return;
          }

          currentCanvas = document.createElement("canvas");
          currentGL = currentCanvas.getContext("webgl", {
            premultipliedalpha: false
          });
        }

        const smaskVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ";
        const smaskFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ";
        let smaskCache = null;

        function initSmaskGL() {
          generateGL();
          const canvas = currentCanvas;
          currentCanvas = null;
          const gl = currentGL;
          currentGL = null;
          const vertexShader = createVertexShader(gl, smaskVertexShaderCode);
          const fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
          const program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          const cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
          cache.positionLocation = gl.getAttribLocation(program, "a_position");
          cache.backdropLocation = gl.getUniformLocation(program, "u_backdrop");
          cache.subtypeLocation = gl.getUniformLocation(program, "u_subtype");
          const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
          const texLayerLocation = gl.getUniformLocation(program, "u_image");
          const texMaskLocation = gl.getUniformLocation(program, "u_mask");
          const texCoordBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(texCoordLocation);
          gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
          gl.uniform1i(texLayerLocation, 0);
          gl.uniform1i(texMaskLocation, 1);
          smaskCache = cache;
        }

        function composeSMask(layer, mask, properties) {
          const width = layer.width,
                height = layer.height;

          if (!smaskCache) {
            initSmaskGL();
          }

          const cache = smaskCache,
                canvas = cache.canvas,
                gl = cache.gl;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);

          if (properties.backdrop) {
            gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
          } else {
            gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
          }

          gl.uniform1i(cache.subtypeLocation, properties.subtype === "Luminosity" ? 1 : 0);
          const texture = createTexture(gl, layer, gl.TEXTURE0);
          const maskTexture = createTexture(gl, mask, gl.TEXTURE1);
          const buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          gl.clearColor(0, 0, 0, 0);
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          gl.flush();
          gl.deleteTexture(texture);
          gl.deleteTexture(maskTexture);
          gl.deleteBuffer(buffer);
          return canvas;
        }

        const figuresVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ";
        const figuresFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ";
        let figuresCache = null;

        function initFiguresGL() {
          generateGL();
          const canvas = currentCanvas;
          currentCanvas = null;
          const gl = currentGL;
          currentGL = null;
          const vertexShader = createVertexShader(gl, figuresVertexShaderCode);
          const fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
          const program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          const cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
          cache.scaleLocation = gl.getUniformLocation(program, "u_scale");
          cache.offsetLocation = gl.getUniformLocation(program, "u_offset");
          cache.positionLocation = gl.getAttribLocation(program, "a_position");
          cache.colorLocation = gl.getAttribLocation(program, "a_color");
          figuresCache = cache;
        }

        function drawFigures(width, height, backgroundColor, figures, context) {
          if (!figuresCache) {
            initFiguresGL();
          }

          const cache = figuresCache,
                canvas = cache.canvas,
                gl = cache.gl;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);
          let count = 0;

          for (let i = 0, ii = figures.length; i < ii; i++) {
            switch (figures[i].type) {
              case "lattice":
                const rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
                count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
                break;

              case "triangles":
                count += figures[i].coords.length;
                break;
            }
          }

          const coords = new Float32Array(count * 2);
          const colors = new Uint8Array(count * 3);
          const coordsMap = context.coords,
                colorsMap = context.colors;
          let pIndex = 0,
              cIndex = 0;

          for (let i = 0, ii = figures.length; i < ii; i++) {
            const figure = figures[i],
                  ps = figure.coords,
                  cs = figure.colors;

            switch (figure.type) {
              case "lattice":
                const cols = figure.verticesPerRow;
                const rows = ps.length / cols | 0;

                for (let row = 1; row < rows; row++) {
                  let offset = row * cols + 1;

                  for (let col = 1; col < cols; col++, offset++) {
                    coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                    coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                    coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                    coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                    coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                    coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                    colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                    colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                    colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                    colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                    colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                    colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                    colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                    colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                    colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                    coords[pIndex + 6] = coords[pIndex + 2];
                    coords[pIndex + 7] = coords[pIndex + 3];
                    coords[pIndex + 8] = coords[pIndex + 4];
                    coords[pIndex + 9] = coords[pIndex + 5];
                    coords[pIndex + 10] = coordsMap[ps[offset]];
                    coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                    colors[cIndex + 9] = colors[cIndex + 3];
                    colors[cIndex + 10] = colors[cIndex + 4];
                    colors[cIndex + 11] = colors[cIndex + 5];
                    colors[cIndex + 12] = colors[cIndex + 6];
                    colors[cIndex + 13] = colors[cIndex + 7];
                    colors[cIndex + 14] = colors[cIndex + 8];
                    colors[cIndex + 15] = colorsMap[cs[offset]];
                    colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                    colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                    pIndex += 12;
                    cIndex += 18;
                  }
                }

                break;

              case "triangles":
                for (let j = 0, jj = ps.length; j < jj; j++) {
                  coords[pIndex] = coordsMap[ps[j]];
                  coords[pIndex + 1] = coordsMap[ps[j] + 1];
                  colors[cIndex] = colorsMap[cs[j]];
                  colors[cIndex + 1] = colorsMap[cs[j] + 1];
                  colors[cIndex + 2] = colorsMap[cs[j] + 2];
                  pIndex += 2;
                  cIndex += 3;
                }

                break;
            }
          }

          if (backgroundColor) {
            gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
          } else {
            gl.clearColor(0, 0, 0, 0);
          }

          gl.clear(gl.COLOR_BUFFER_BIT);
          const coordsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          const colorsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.colorLocation);
          gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
          gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
          gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
          gl.drawArrays(gl.TRIANGLES, 0, count);
          gl.flush();
          gl.deleteBuffer(coordsBuffer);
          gl.deleteBuffer(colorsBuffer);
          return canvas;
        }

        return {
          tryInitGL() {
            try {
              generateGL();
              return !!currentGL;
            } catch (ex) {}

            return false;
          },

          composeSMask,
          drawFigures,

          cleanup() {
            if (smaskCache?.canvas) {
              smaskCache.canvas.width = 0;
              smaskCache.canvas.height = 0;
            }

            if (figuresCache?.canvas) {
              figuresCache.canvas.width = 0;
              figuresCache.canvas.height = 0;
            }

            smaskCache = null;
            figuresCache = null;
          }

        };
      }();

      /***/ }),
      /* 19 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.AnnotationLayer = void 0;

      var _display_utils = __w_pdfjs_require__(1);

      var _util = __w_pdfjs_require__(2);

      var _annotation_storage = __w_pdfjs_require__(8);

      var _scripting_utils = __w_pdfjs_require__(20);

      class AnnotationElementFactory {
        static create(parameters) {
          const subtype = parameters.data.annotationType;

          switch (subtype) {
            case _util.AnnotationType.LINK:
              return new LinkAnnotationElement(parameters);

            case _util.AnnotationType.TEXT:
              return new TextAnnotationElement(parameters);

            case _util.AnnotationType.WIDGET:
              const fieldType = parameters.data.fieldType;

              switch (fieldType) {
                case "Tx":
                  return new TextWidgetAnnotationElement(parameters);

                case "Btn":
                  if (parameters.data.radioButton) {
                    return new RadioButtonWidgetAnnotationElement(parameters);
                  } else if (parameters.data.checkBox) {
                    return new CheckboxWidgetAnnotationElement(parameters);
                  }

                  return new PushButtonWidgetAnnotationElement(parameters);

                case "Ch":
                  return new ChoiceWidgetAnnotationElement(parameters);
              }

              return new WidgetAnnotationElement(parameters);

            case _util.AnnotationType.POPUP:
              return new PopupAnnotationElement(parameters);

            case _util.AnnotationType.FREETEXT:
              return new FreeTextAnnotationElement(parameters);

            case _util.AnnotationType.LINE:
              return new LineAnnotationElement(parameters);

            case _util.AnnotationType.SQUARE:
              return new SquareAnnotationElement(parameters);

            case _util.AnnotationType.CIRCLE:
              return new CircleAnnotationElement(parameters);

            case _util.AnnotationType.POLYLINE:
              return new PolylineAnnotationElement(parameters);

            case _util.AnnotationType.CARET:
              return new CaretAnnotationElement(parameters);

            case _util.AnnotationType.INK:
              return new InkAnnotationElement(parameters);

            case _util.AnnotationType.POLYGON:
              return new PolygonAnnotationElement(parameters);

            case _util.AnnotationType.HIGHLIGHT:
              return new HighlightAnnotationElement(parameters);

            case _util.AnnotationType.UNDERLINE:
              return new UnderlineAnnotationElement(parameters);

            case _util.AnnotationType.SQUIGGLY:
              return new SquigglyAnnotationElement(parameters);

            case _util.AnnotationType.STRIKEOUT:
              return new StrikeOutAnnotationElement(parameters);

            case _util.AnnotationType.STAMP:
              return new StampAnnotationElement(parameters);

            case _util.AnnotationType.FILEATTACHMENT:
              return new FileAttachmentAnnotationElement(parameters);

            default:
              return new AnnotationElement(parameters);
          }
        }

      }

      class AnnotationElement {
        constructor(parameters, {
          isRenderable = false,
          ignoreBorder = false,
          createQuadrilaterals = false
        } = {}) {
          this.isRenderable = isRenderable;
          this.data = parameters.data;
          this.layer = parameters.layer;
          this.page = parameters.page;
          this.viewport = parameters.viewport;
          this.linkService = parameters.linkService;
          this.downloadManager = parameters.downloadManager;
          this.imageResourcesPath = parameters.imageResourcesPath;
          this.renderInteractiveForms = parameters.renderInteractiveForms;
          this.svgFactory = parameters.svgFactory;
          this.annotationStorage = parameters.annotationStorage;
          this.enableScripting = parameters.enableScripting;
          this.hasJSActions = parameters.hasJSActions;
          this._mouseState = parameters.mouseState;

          if (isRenderable) {
            this.container = this._createContainer(ignoreBorder);
          }

          if (createQuadrilaterals) {
            this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
          }
        }

        _createContainer(ignoreBorder = false) {
          const data = this.data,
                page = this.page,
                viewport = this.viewport;
          const container = document.createElement("section");
          let width = data.rect[2] - data.rect[0];
          let height = data.rect[3] - data.rect[1];
          container.setAttribute("data-annotation-id", data.id);

          const rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);

          container.style.transform = `matrix(${viewport.transform.join(",")})`;
          container.style.transformOrigin = `${-rect[0]}px ${-rect[1]}px`;

          if (!ignoreBorder && data.borderStyle.width > 0) {
            container.style.borderWidth = `${data.borderStyle.width}px`;

            if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
              width = width - 2 * data.borderStyle.width;
              height = height - 2 * data.borderStyle.width;
            }

            const horizontalRadius = data.borderStyle.horizontalCornerRadius;
            const verticalRadius = data.borderStyle.verticalCornerRadius;

            if (horizontalRadius > 0 || verticalRadius > 0) {
              const radius = `${horizontalRadius}px / ${verticalRadius}px`;
              container.style.borderRadius = radius;
            }

            switch (data.borderStyle.style) {
              case _util.AnnotationBorderStyleType.SOLID:
                container.style.borderStyle = "solid";
                break;

              case _util.AnnotationBorderStyleType.DASHED:
                container.style.borderStyle = "dashed";
                break;

              case _util.AnnotationBorderStyleType.BEVELED:
                (0, _util.warn)("Unimplemented border style: beveled");
                break;

              case _util.AnnotationBorderStyleType.INSET:
                (0, _util.warn)("Unimplemented border style: inset");
                break;

              case _util.AnnotationBorderStyleType.UNDERLINE:
                container.style.borderBottomStyle = "solid";
                break;
            }

            if (data.color) {
              container.style.borderColor = _util.Util.makeHexColor(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
            } else {
              container.style.borderWidth = 0;
            }
          }

          container.style.left = `${rect[0]}px`;
          container.style.top = `${rect[1]}px`;
          container.style.width = `${width}px`;
          container.style.height = `${height}px`;
          return container;
        }

        _createQuadrilaterals(ignoreBorder = false) {
          if (!this.data.quadPoints) {
            return null;
          }

          const quadrilaterals = [];
          const savedRect = this.data.rect;

          for (const quadPoint of this.data.quadPoints) {
            this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
            quadrilaterals.push(this._createContainer(ignoreBorder));
          }

          this.data.rect = savedRect;
          return quadrilaterals;
        }

        _createPopup(trigger, data) {
          let container = this.container;

          if (this.quadrilaterals) {
            trigger = trigger || this.quadrilaterals;
            container = this.quadrilaterals[0];
          }

          if (!trigger) {
            trigger = document.createElement("div");
            trigger.style.height = container.style.height;
            trigger.style.width = container.style.width;
            container.appendChild(trigger);
          }

          const popupElement = new PopupElement({
            container,
            trigger,
            color: data.color,
            title: data.title,
            modificationDate: data.modificationDate,
            contents: data.contents,
            hideWrapper: true
          });
          const popup = popupElement.render();
          popup.style.left = container.style.width;
          container.appendChild(popup);
        }

        _renderQuadrilaterals(className) {
          this.quadrilaterals.forEach(quadrilateral => {
            quadrilateral.className = className;
          });
          return this.quadrilaterals;
        }

        render() {
          (0, _util.unreachable)("Abstract method `AnnotationElement.render` called");
        }

      }

      class LinkAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action || parameters.data.isTooltipOnly || parameters.data.actions && (parameters.data.actions.Action || parameters.data.actions["Mouse Up"] || parameters.data.actions["Mouse Down"]));
          super(parameters, {
            isRenderable,
            createQuadrilaterals: true
          });
        }

        render() {
          const {
            data,
            linkService
          } = this;
          const link = document.createElement("a");

          if (data.url) {
            (0, _display_utils.addLinkAttributes)(link, {
              url: data.url,
              target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
              rel: linkService.externalLinkRel,
              enabled: linkService.externalLinkEnabled
            });
          } else if (data.action) {
            this._bindNamedAction(link, data.action);
          } else if (data.dest) {
            this._bindLink(link, data.dest);
          } else if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
            this._bindJSAction(link, data);
          } else {
            this._bindLink(link, "");
          }

          if (this.quadrilaterals) {
            return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral, index) => {
              const linkElement = index === 0 ? link : link.cloneNode();
              quadrilateral.appendChild(linkElement);
              return quadrilateral;
            });
          }

          this.container.className = "linkAnnotation";
          this.container.appendChild(link);
          return this.container;
        }

        _bindLink(link, destination) {
          link.href = this.linkService.getDestinationHash(destination);

          link.onclick = () => {
            if (destination) {
              this.linkService.goToDestination(destination);
            }

            return false;
          };

          if (destination || destination === "") {
            link.className = "internalLink";
          }
        }

        _bindNamedAction(link, action) {
          link.href = this.linkService.getAnchorUrl("");

          link.onclick = () => {
            this.linkService.executeNamedAction(action);
            return false;
          };

          link.className = "internalLink";
        }

        _bindJSAction(link, data) {
          link.href = this.linkService.getAnchorUrl("");
          const map = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);

          for (const name of Object.keys(data.actions)) {
            const jsName = map.get(name);

            if (!jsName) {
              continue;
            }

            link[jsName] = () => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: data.id,
                  name
                }
              });
              return false;
            };
          }

          link.className = "internalLink";
        }

      }

      class TextAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable
          });
        }

        render() {
          this.container.className = "textAnnotation";
          const image = document.createElement("img");
          image.style.height = this.container.style.height;
          image.style.width = this.container.style.width;
          image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
          image.alt = "[{{type}} Annotation]";
          image.dataset.l10nId = "text_annotation_type";
          image.dataset.l10nArgs = JSON.stringify({
            type: this.data.name
          });

          if (!this.data.hasPopup) {
            this._createPopup(image, this.data);
          }

          this.container.appendChild(image);
          return this.container;
        }

      }

      class WidgetAnnotationElement extends AnnotationElement {
        render() {
          if (this.data.alternativeText) {
            this.container.title = this.data.alternativeText;
          }

          return this.container;
        }

        _getKeyModifier(event) {
          return navigator.platform.includes("Win") && event.ctrlKey || navigator.platform.includes("Mac") && event.metaKey;
        }

        _setEventListener(element, baseName, eventName, valueGetter) {
          if (baseName.includes("mouse")) {
            element.addEventListener(baseName, event => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: eventName,
                  value: valueGetter(event),
                  shift: event.shiftKey,
                  modifier: this._getKeyModifier(event)
                }
              });
            });
          } else {
            element.addEventListener(baseName, event => {
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: eventName,
                  value: event.target.checked
                }
              });
            });
          }
        }

        _setEventListeners(element, names, getter) {
          for (const [baseName, eventName] of names) {
            if (eventName === "Action" || this.data.actions?.[eventName]) {
              this._setEventListener(element, baseName, eventName, getter);
            }
          }
        }

      }

      class TextWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(parameters) {
          const isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
          super(parameters, {
            isRenderable
          });
        }

        render() {
          const storage = this.annotationStorage;
          const id = this.data.id;
          this.container.className = "textWidgetAnnotation";
          let element = null;

          if (this.renderInteractiveForms) {
            const textContent = storage.getOrCreateValue(id, {
              value: this.data.fieldValue
            }).value;
            const elementData = {
              userValue: null,
              formattedValue: null,
              beforeInputSelectionRange: null,
              beforeInputValue: null
            };

            if (this.data.multiLine) {
              element = document.createElement("textarea");
              element.textContent = textContent;
            } else {
              element = document.createElement("input");
              element.type = "text";
              element.setAttribute("value", textContent);
            }

            elementData.userValue = textContent;
            element.setAttribute("id", id);
            element.addEventListener("input", function (event) {
              storage.setValue(id, {
                value: event.target.value
              });
            });

            let blurListener = event => {
              if (elementData.formattedValue) {
                event.target.value = elementData.formattedValue;
              }

              event.target.setSelectionRange(0, 0);
              elementData.beforeInputSelectionRange = null;
            };

            if (this.enableScripting && this.hasJSActions) {
              element.addEventListener("focus", event => {
                if (elementData.userValue) {
                  event.target.value = elementData.userValue;
                }
              });
              element.addEventListener("updatefromsandbox", function (event) {
                const {
                  detail
                } = event;
                const actions = {
                  value() {
                    elementData.userValue = detail.value || "";
                    storage.setValue(id, {
                      value: elementData.userValue.toString()
                    });

                    if (!elementData.formattedValue) {
                      event.target.value = elementData.userValue;
                    }
                  },

                  valueAsString() {
                    elementData.formattedValue = detail.valueAsString || "";

                    if (event.target !== document.activeElement) {
                      event.target.value = elementData.formattedValue;
                    }

                    storage.setValue(id, {
                      formattedValue: elementData.formattedValue
                    });
                  },

                  focus() {
                    setTimeout(() => event.target.focus({
                      preventScroll: false
                    }), 0);
                  },

                  userName() {
                    event.target.title = detail.userName;
                  },

                  hidden() {
                    event.target.style.visibility = detail.hidden ? "hidden" : "visible";
                    storage.setValue(id, {
                      hidden: detail.hidden
                    });
                  },

                  editable() {
                    event.target.disabled = !detail.editable;
                  },

                  selRange() {
                    const [selStart, selEnd] = detail.selRange;

                    if (selStart >= 0 && selEnd < event.target.value.length) {
                      event.target.setSelectionRange(selStart, selEnd);
                    }
                  },

                  strokeColor() {
                    const color = detail.strokeColor;
                    event.target.style.color = _scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));
                  }

                };
                Object.keys(detail).filter(name => name in actions).forEach(name => actions[name]());
              });

              if (this.data.actions) {
                element.addEventListener("keydown", event => {
                  elementData.beforeInputValue = event.target.value;
                  let commitKey = -1;

                  if (event.key === "Escape") {
                    commitKey = 0;
                  } else if (event.key === "Enter") {
                    commitKey = 2;
                  } else if (event.key === "Tab") {
                    commitKey = 3;
                  }

                  if (commitKey === -1) {
                    return;
                  }

                  elementData.userValue = event.target.value;
                  this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id,
                      name: "Keystroke",
                      value: event.target.value,
                      willCommit: true,
                      commitKey,
                      selStart: event.target.selectionStart,
                      selEnd: event.target.selectionEnd
                    }
                  });
                });
                const _blurListener = blurListener;
                blurListener = null;
                element.addEventListener("blur", event => {
                  if (this._mouseState.isDown) {
                    elementData.userValue = event.target.value;
                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id,
                        name: "Keystroke",
                        value: event.target.value,
                        willCommit: true,
                        commitKey: 1,
                        selStart: event.target.selectionStart,
                        selEnd: event.target.selectionEnd
                      }
                    });
                  }

                  _blurListener(event);
                });
                element.addEventListener("mousedown", event => {
                  elementData.beforeInputValue = event.target.value;
                  elementData.beforeInputSelectionRange = null;
                });
                element.addEventListener("keyup", event => {
                  if (event.target.selectionStart === event.target.selectionEnd) {
                    elementData.beforeInputSelectionRange = null;
                  }
                });
                element.addEventListener("select", event => {
                  elementData.beforeInputSelectionRange = [event.target.selectionStart, event.target.selectionEnd];
                });

                if ("Keystroke" in this.data.actions) {
                  element.addEventListener("input", event => {
                    let selStart = -1;
                    let selEnd = -1;

                    if (elementData.beforeInputSelectionRange) {
                      [selStart, selEnd] = elementData.beforeInputSelectionRange;
                    }

                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id,
                        name: "Keystroke",
                        value: elementData.beforeInputValue,
                        change: event.data,
                        willCommit: false,
                        selStart,
                        selEnd
                      }
                    });
                  });
                }

                this._setEventListeners(element, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.value);
              }
            }

            if (blurListener) {
              element.addEventListener("blur", blurListener);
            }

            element.disabled = this.data.readOnly;
            element.name = this.data.fieldName;

            if (this.data.maxLen !== null) {
              element.maxLength = this.data.maxLen;
            }

            if (this.data.comb) {
              const fieldWidth = this.data.rect[2] - this.data.rect[0];
              const combWidth = fieldWidth / this.data.maxLen;
              element.classList.add("comb");
              element.style.letterSpacing = `calc(${combWidth}px - 1ch)`;
            }
          } else {
            element = document.createElement("div");
            element.textContent = this.data.fieldValue;
            element.style.verticalAlign = "middle";
            element.style.display = "table-cell";
          }

          this._setTextStyle(element);

          this.container.appendChild(element);
          return this.container;
        }

        _setTextStyle(element) {
          const TEXT_ALIGNMENT = ["left", "center", "right"];
          const {
            fontSize,
            fontColor
          } = this.data.defaultAppearanceData;
          const style = element.style;

          if (fontSize) {
            style.fontSize = `${fontSize}px`;
          }

          style.color = _util.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);

          if (this.data.textAlignment !== null) {
            style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
          }
        }

      }

      class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(parameters) {
          super(parameters, {
            isRenderable: parameters.renderInteractiveForms
          });
        }

        render() {
          const storage = this.annotationStorage;
          const data = this.data;
          const id = data.id;
          const value = storage.getOrCreateValue(id, {
            value: data.fieldValue && data.fieldValue !== "Off"
          }).value;
          this.container.className = "buttonWidgetAnnotation checkBox";
          const element = document.createElement("input");
          element.disabled = data.readOnly;
          element.type = "checkbox";
          element.name = this.data.fieldName;

          if (value) {
            element.setAttribute("checked", true);
          }

          element.setAttribute("id", id);
          element.addEventListener("change", function (event) {
            const name = event.target.name;

            for (const checkbox of document.getElementsByName(name)) {
              if (checkbox !== event.target) {
                checkbox.checked = false;
                storage.setValue(checkbox.parentNode.getAttribute("data-annotation-id"), {
                  value: false
                });
              }
            }

            storage.setValue(id, {
              value: event.target.checked
            });
          });

          if (this.enableScripting && this.hasJSActions) {
            element.addEventListener("updatefromsandbox", event => {
              const {
                detail
              } = event;
              const actions = {
                value() {
                  event.target.checked = detail.value !== "Off";
                  storage.setValue(id, {
                    value: event.target.checked
                  });
                },

                focus() {
                  setTimeout(() => event.target.focus({
                    preventScroll: false
                  }), 0);
                },

                hidden() {
                  event.target.style.visibility = detail.hidden ? "hidden" : "visible";
                  storage.setValue(id, {
                    hidden: detail.hidden
                  });
                },

                editable() {
                  event.target.disabled = !detail.editable;
                }

              };
              Object.keys(detail).filter(name => name in actions).forEach(name => actions[name]());
            });

            this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
          }

          this.container.appendChild(element);
          return this.container;
        }

      }

      class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(parameters) {
          super(parameters, {
            isRenderable: parameters.renderInteractiveForms
          });
        }

        render() {
          this.container.className = "buttonWidgetAnnotation radioButton";
          const storage = this.annotationStorage;
          const data = this.data;
          const id = data.id;
          const value = storage.getOrCreateValue(id, {
            value: data.fieldValue === data.buttonValue
          }).value;
          const element = document.createElement("input");
          element.disabled = data.readOnly;
          element.type = "radio";
          element.name = data.fieldName;

          if (value) {
            element.setAttribute("checked", true);
          }

          element.setAttribute("pdfButtonValue", data.buttonValue);
          element.setAttribute("id", id);
          element.addEventListener("change", function (event) {
            const {
              target
            } = event;

            for (const radio of document.getElementsByName(target.name)) {
              if (radio !== target) {
                storage.setValue(radio.getAttribute("id"), {
                  value: false
                });
              }
            }

            storage.setValue(id, {
              value: target.checked
            });
          });

          if (this.enableScripting && this.hasJSActions) {
            element.addEventListener("updatefromsandbox", event => {
              const {
                detail
              } = event;
              const actions = {
                value() {
                  const fieldValue = detail.value;

                  for (const radio of document.getElementsByName(event.target.name)) {
                    const radioId = radio.getAttribute("id");

                    if (fieldValue === radio.getAttribute("pdfButtonValue")) {
                      radio.setAttribute("checked", true);
                      storage.setValue(radioId, {
                        value: true
                      });
                    } else {
                      storage.setValue(radioId, {
                        value: false
                      });
                    }
                  }
                },

                focus() {
                  setTimeout(() => event.target.focus({
                    preventScroll: false
                  }), 0);
                },

                hidden() {
                  event.target.style.visibility = detail.hidden ? "hidden" : "visible";
                  storage.setValue(id, {
                    hidden: detail.hidden
                  });
                },

                editable() {
                  event.target.disabled = !detail.editable;
                }

              };
              Object.keys(detail).filter(name => name in actions).forEach(name => actions[name]());
            });

            this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
          }

          this.container.appendChild(element);
          return this.container;
        }

      }

      class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
        render() {
          const container = super.render();
          container.className = "buttonWidgetAnnotation pushButton";

          if (this.data.alternativeText) {
            container.title = this.data.alternativeText;
          }

          return container;
        }

      }

      class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(parameters) {
          super(parameters, {
            isRenderable: parameters.renderInteractiveForms
          });
        }

        render() {
          this.container.className = "choiceWidgetAnnotation";
          const storage = this.annotationStorage;
          const id = this.data.id;
          storage.getOrCreateValue(id, {
            value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : undefined
          });
          const selectElement = document.createElement("select");
          selectElement.disabled = this.data.readOnly;
          selectElement.name = this.data.fieldName;
          selectElement.setAttribute("id", id);

          if (!this.data.combo) {
            selectElement.size = this.data.options.length;

            if (this.data.multiSelect) {
              selectElement.multiple = true;
            }
          }

          for (const option of this.data.options) {
            const optionElement = document.createElement("option");
            optionElement.textContent = option.displayValue;
            optionElement.value = option.exportValue;

            if (this.data.fieldValue.includes(option.exportValue)) {
              optionElement.setAttribute("selected", true);
            }

            selectElement.appendChild(optionElement);
          }

          function getValue(event) {
            const options = event.target.options;
            return options[options.selectedIndex].value;
          }

          if (this.enableScripting && this.hasJSActions) {
            selectElement.addEventListener("updatefromsandbox", event => {
              const {
                detail
              } = event;
              const actions = {
                value() {
                  const options = event.target.options;
                  const value = detail.value;
                  const i = options.indexOf(value);

                  if (i !== -1) {
                    options.selectedIndex = i;
                    storage.setValue(id, {
                      value
                    });
                  }
                },

                focus() {
                  setTimeout(() => event.target.focus({
                    preventScroll: false
                  }), 0);
                },

                hidden() {
                  event.target.style.visibility = detail.hidden ? "hidden" : "visible";
                  storage.setValue(id, {
                    hidden: detail.hidden
                  });
                },

                editable() {
                  event.target.disabled = !detail.editable;
                }

              };
              Object.keys(detail).filter(name => name in actions).forEach(name => actions[name]());
            });
            selectElement.addEventListener("input", event => {
              const value = getValue(event);
              storage.setValue(id, {
                value
              });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id,
                  name: "Keystroke",
                  changeEx: value,
                  willCommit: true,
                  commitKey: 1,
                  keyDown: false
                }
              });
            });

            this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], event => event.target.checked);
          } else {
            selectElement.addEventListener("input", function (event) {
              storage.setValue(id, {
                value: getValue(event)
              });
            });
          }

          this.container.appendChild(selectElement);
          return this.container;
        }

      }

      class PopupAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable
          });
        }

        render() {
          const IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
          this.container.className = "popupAnnotation";

          if (IGNORE_TYPES.includes(this.data.parentType)) {
            return this.container;
          }

          const selector = `[data-annotation-id="${this.data.parentId}"]`;
          const parentElements = this.layer.querySelectorAll(selector);

          if (parentElements.length === 0) {
            return this.container;
          }

          const popup = new PopupElement({
            container: this.container,
            trigger: Array.from(parentElements),
            color: this.data.color,
            title: this.data.title,
            modificationDate: this.data.modificationDate,
            contents: this.data.contents
          });
          const page = this.page;

          const rect = _util.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);

          const popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
          const popupTop = rect[1];
          this.container.style.transformOrigin = `${-popupLeft}px ${-popupTop}px`;
          this.container.style.left = `${popupLeft}px`;
          this.container.style.top = `${popupTop}px`;
          this.container.appendChild(popup.render());
          return this.container;
        }

      }

      class PopupElement {
        constructor(parameters) {
          this.container = parameters.container;
          this.trigger = parameters.trigger;
          this.color = parameters.color;
          this.title = parameters.title;
          this.modificationDate = parameters.modificationDate;
          this.contents = parameters.contents;
          this.hideWrapper = parameters.hideWrapper || false;
          this.pinned = false;
        }

        render() {
          const BACKGROUND_ENLIGHT = 0.7;
          const wrapper = document.createElement("div");
          wrapper.className = "popupWrapper";
          this.hideElement = this.hideWrapper ? wrapper : this.container;
          this.hideElement.setAttribute("hidden", true);
          const popup = document.createElement("div");
          popup.className = "popup";
          const color = this.color;

          if (color) {
            const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
            const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
            const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
            popup.style.backgroundColor = _util.Util.makeHexColor(r | 0, g | 0, b | 0);
          }

          const title = document.createElement("h1");
          title.textContent = this.title;
          popup.appendChild(title);

          const dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);

          if (dateObject) {
            const modificationDate = document.createElement("span");
            modificationDate.textContent = "{{date}}, {{time}}";
            modificationDate.dataset.l10nId = "annotation_date_string";
            modificationDate.dataset.l10nArgs = JSON.stringify({
              date: dateObject.toLocaleDateString(),
              time: dateObject.toLocaleTimeString()
            });
            popup.appendChild(modificationDate);
          }

          const contents = this._formatContents(this.contents);

          popup.appendChild(contents);

          if (!Array.isArray(this.trigger)) {
            this.trigger = [this.trigger];
          }

          this.trigger.forEach(element => {
            element.addEventListener("click", this._toggle.bind(this));
            element.addEventListener("mouseover", this._show.bind(this, false));
            element.addEventListener("mouseout", this._hide.bind(this, false));
          });
          popup.addEventListener("click", this._hide.bind(this, true));
          wrapper.appendChild(popup);
          return wrapper;
        }

        _formatContents(contents) {
          const p = document.createElement("p");
          const lines = contents.split(/(?:\r\n?|\n)/);

          for (let i = 0, ii = lines.length; i < ii; ++i) {
            const line = lines[i];
            p.appendChild(document.createTextNode(line));

            if (i < ii - 1) {
              p.appendChild(document.createElement("br"));
            }
          }

          return p;
        }

        _toggle() {
          if (this.pinned) {
            this._hide(true);
          } else {
            this._show(true);
          }
        }

        _show(pin = false) {
          if (pin) {
            this.pinned = true;
          }

          if (this.hideElement.hasAttribute("hidden")) {
            this.hideElement.removeAttribute("hidden");
            this.container.style.zIndex += 1;
          }
        }

        _hide(unpin = true) {
          if (unpin) {
            this.pinned = false;
          }

          if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
            this.hideElement.setAttribute("hidden", true);
            this.container.style.zIndex -= 1;
          }
        }

      }

      class FreeTextAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "freeTextAnnotation";

          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          return this.container;
        }

      }

      class LineAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "lineAnnotation";
          const data = this.data;
          const width = data.rect[2] - data.rect[0];
          const height = data.rect[3] - data.rect[1];
          const svg = this.svgFactory.create(width, height);
          const line = this.svgFactory.createElement("svg:line");
          line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
          line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
          line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
          line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
          line.setAttribute("stroke-width", data.borderStyle.width || 1);
          line.setAttribute("stroke", "transparent");
          svg.appendChild(line);
          this.container.append(svg);

          this._createPopup(line, data);

          return this.container;
        }

      }

      class SquareAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "squareAnnotation";
          const data = this.data;
          const width = data.rect[2] - data.rect[0];
          const height = data.rect[3] - data.rect[1];
          const svg = this.svgFactory.create(width, height);
          const borderWidth = data.borderStyle.width;
          const square = this.svgFactory.createElement("svg:rect");
          square.setAttribute("x", borderWidth / 2);
          square.setAttribute("y", borderWidth / 2);
          square.setAttribute("width", width - borderWidth);
          square.setAttribute("height", height - borderWidth);
          square.setAttribute("stroke-width", borderWidth || 1);
          square.setAttribute("stroke", "transparent");
          square.setAttribute("fill", "none");
          svg.appendChild(square);
          this.container.append(svg);

          this._createPopup(square, data);

          return this.container;
        }

      }

      class CircleAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "circleAnnotation";
          const data = this.data;
          const width = data.rect[2] - data.rect[0];
          const height = data.rect[3] - data.rect[1];
          const svg = this.svgFactory.create(width, height);
          const borderWidth = data.borderStyle.width;
          const circle = this.svgFactory.createElement("svg:ellipse");
          circle.setAttribute("cx", width / 2);
          circle.setAttribute("cy", height / 2);
          circle.setAttribute("rx", width / 2 - borderWidth / 2);
          circle.setAttribute("ry", height / 2 - borderWidth / 2);
          circle.setAttribute("stroke-width", borderWidth || 1);
          circle.setAttribute("stroke", "transparent");
          circle.setAttribute("fill", "none");
          svg.appendChild(circle);
          this.container.append(svg);

          this._createPopup(circle, data);

          return this.container;
        }

      }

      class PolylineAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
          this.containerClassName = "polylineAnnotation";
          this.svgElementName = "svg:polyline";
        }

        render() {
          this.container.className = this.containerClassName;
          const data = this.data;
          const width = data.rect[2] - data.rect[0];
          const height = data.rect[3] - data.rect[1];
          const svg = this.svgFactory.create(width, height);
          let points = [];

          for (const coordinate of data.vertices) {
            const x = coordinate.x - data.rect[0];
            const y = data.rect[3] - coordinate.y;
            points.push(x + "," + y);
          }

          points = points.join(" ");
          const polyline = this.svgFactory.createElement(this.svgElementName);
          polyline.setAttribute("points", points);
          polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
          polyline.setAttribute("stroke", "transparent");
          polyline.setAttribute("fill", "none");
          svg.appendChild(polyline);
          this.container.append(svg);

          this._createPopup(polyline, data);

          return this.container;
        }

      }

      class PolygonAnnotationElement extends PolylineAnnotationElement {
        constructor(parameters) {
          super(parameters);
          this.containerClassName = "polygonAnnotation";
          this.svgElementName = "svg:polygon";
        }

      }

      class CaretAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "caretAnnotation";

          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          return this.container;
        }

      }

      class InkAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
          this.containerClassName = "inkAnnotation";
          this.svgElementName = "svg:polyline";
        }

        render() {
          this.container.className = this.containerClassName;
          const data = this.data;
          const width = data.rect[2] - data.rect[0];
          const height = data.rect[3] - data.rect[1];
          const svg = this.svgFactory.create(width, height);

          for (const inkList of data.inkLists) {
            let points = [];

            for (const coordinate of inkList) {
              const x = coordinate.x - data.rect[0];
              const y = data.rect[3] - coordinate.y;
              points.push(`${x},${y}`);
            }

            points = points.join(" ");
            const polyline = this.svgFactory.createElement(this.svgElementName);
            polyline.setAttribute("points", points);
            polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
            polyline.setAttribute("stroke", "transparent");
            polyline.setAttribute("fill", "none");

            this._createPopup(polyline, data);

            svg.appendChild(polyline);
          }

          this.container.append(svg);
          return this.container;
        }

      }

      class HighlightAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }

        render() {
          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          if (this.quadrilaterals) {
            return this._renderQuadrilaterals("highlightAnnotation");
          }

          this.container.className = "highlightAnnotation";
          return this.container;
        }

      }

      class UnderlineAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }

        render() {
          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          if (this.quadrilaterals) {
            return this._renderQuadrilaterals("underlineAnnotation");
          }

          this.container.className = "underlineAnnotation";
          return this.container;
        }

      }

      class SquigglyAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }

        render() {
          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          if (this.quadrilaterals) {
            return this._renderQuadrilaterals("squigglyAnnotation");
          }

          this.container.className = "squigglyAnnotation";
          return this.container;
        }

      }

      class StrikeOutAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true,
            createQuadrilaterals: true
          });
        }

        render() {
          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          if (this.quadrilaterals) {
            return this._renderQuadrilaterals("strikeoutAnnotation");
          }

          this.container.className = "strikeoutAnnotation";
          return this.container;
        }

      }

      class StampAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          super(parameters, {
            isRenderable,
            ignoreBorder: true
          });
        }

        render() {
          this.container.className = "stampAnnotation";

          if (!this.data.hasPopup) {
            this._createPopup(null, this.data);
          }

          return this.container;
        }

      }

      class FileAttachmentAnnotationElement extends AnnotationElement {
        constructor(parameters) {
          super(parameters, {
            isRenderable: true
          });
          const {
            filename,
            content
          } = this.data.file;
          this.filename = (0, _display_utils.getFilenameFromUrl)(filename);
          this.content = content;
          this.linkService.eventBus?.dispatch("fileattachmentannotation", {
            source: this,
            id: (0, _util.stringToPDFString)(filename),
            filename,
            content
          });
        }

        render() {
          this.container.className = "fileAttachmentAnnotation";
          const trigger = document.createElement("div");
          trigger.style.height = this.container.style.height;
          trigger.style.width = this.container.style.width;
          trigger.addEventListener("dblclick", this._download.bind(this));

          if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
            this._createPopup(trigger, this.data);
          }

          this.container.appendChild(trigger);
          return this.container;
        }

        _download() {
          if (!this.downloadManager) {
            (0, _util.warn)("Download cannot be started due to unavailable download manager");
            return;
          }

          this.downloadManager.downloadData(this.content, this.filename, "");
        }

      }

      class AnnotationLayer {
        static render(parameters) {
          const sortedAnnotations = [],
                popupAnnotations = [];

          for (const data of parameters.annotations) {
            if (!data) {
              continue;
            }

            if (data.annotationType === _util.AnnotationType.POPUP) {
              popupAnnotations.push(data);
              continue;
            }

            sortedAnnotations.push(data);
          }

          if (popupAnnotations.length) {
            sortedAnnotations.push(...popupAnnotations);
          }

          for (const data of sortedAnnotations) {
            const element = AnnotationElementFactory.create({
              data,
              layer: parameters.div,
              page: parameters.page,
              viewport: parameters.viewport,
              linkService: parameters.linkService,
              downloadManager: parameters.downloadManager,
              imageResourcesPath: parameters.imageResourcesPath || "",
              renderInteractiveForms: typeof parameters.renderInteractiveForms === "boolean" ? parameters.renderInteractiveForms : true,
              svgFactory: new _display_utils.DOMSVGFactory(),
              annotationStorage: parameters.annotationStorage || new _annotation_storage.AnnotationStorage(),
              enableScripting: parameters.enableScripting,
              hasJSActions: parameters.hasJSActions,
              mouseState: parameters.mouseState || {
                isDown: false
              }
            });

            if (element.isRenderable) {
              const rendered = element.render();

              if (data.hidden) {
                rendered.style.visibility = "hidden";
              }

              if (Array.isArray(rendered)) {
                for (const renderedElement of rendered) {
                  parameters.div.appendChild(renderedElement);
                }
              } else {
                if (element instanceof PopupAnnotationElement) {
                  parameters.div.prepend(rendered);
                } else {
                  parameters.div.appendChild(rendered);
                }
              }
            }
          }
        }

        static update(parameters) {
          const transform = `matrix(${parameters.viewport.transform.join(",")})`;

          for (const data of parameters.annotations) {
            const elements = parameters.div.querySelectorAll(`[data-annotation-id="${data.id}"]`);

            if (elements) {
              elements.forEach(element => {
                element.style.transform = transform;
              });
            }
          }

          parameters.div.removeAttribute("hidden");
        }

      }

      exports.AnnotationLayer = AnnotationLayer;

      /***/ }),
      /* 20 */
      /***/ ((__unused_webpack_module, exports) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.ColorConverters = void 0;

      function makeColorComp(n) {
        return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
      }

      class ColorConverters {
        static CMYK_G([c, y, m, k]) {
          return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
        }

        static G_CMYK([g]) {
          return ["CMYK", 0, 0, 0, 1 - g];
        }

        static G_RGB([g]) {
          return ["RGB", g, g, g];
        }

        static G_HTML([g]) {
          const G = makeColorComp(g);
          return `#${G}${G}${G}`;
        }

        static RGB_G([r, g, b]) {
          return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
        }

        static RGB_HTML([r, g, b]) {
          const R = makeColorComp(r);
          const G = makeColorComp(g);
          const B = makeColorComp(b);
          return `#${R}${G}${B}`;
        }

        static T_HTML() {
          return "#00000000";
        }

        static CMYK_RGB([c, y, m, k]) {
          return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
        }

        static CMYK_HTML(components) {
          return this.RGB_HTML(this.CMYK_RGB(components));
        }

        static RGB_CMYK([r, g, b]) {
          const c = 1 - r;
          const m = 1 - g;
          const y = 1 - b;
          const k = Math.min(c, m, y);
          return ["CMYK", c, m, y, k];
        }

      }

      exports.ColorConverters = ColorConverters;

      /***/ }),
      /* 21 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.renderTextLayer = void 0;

      var _util = __w_pdfjs_require__(2);

      const renderTextLayer = function renderTextLayerClosure() {
        const MAX_TEXT_DIVS_TO_RENDER = 100000;
        const NonWhitespaceRegexp = /\S/;

        function isAllWhitespace(str) {
          return !NonWhitespaceRegexp.test(str);
        }

        function appendText(task, geom, styles) {
          const textDiv = document.createElement("span");
          const textDivProperties = {
            angle: 0,
            canvasWidth: 0,
            isWhitespace: false,
            originalTransform: null,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            scale: 1
          };

          task._textDivs.push(textDiv);

          if (isAllWhitespace(geom.str)) {
            textDivProperties.isWhitespace = true;

            task._textDivProperties.set(textDiv, textDivProperties);

            return;
          }

          const tx = _util.Util.transform(task._viewport.transform, geom.transform);

          let angle = Math.atan2(tx[1], tx[0]);
          const style = styles[geom.fontName];

          if (style.vertical) {
            angle += Math.PI / 2;
          }

          const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
          let fontAscent = fontHeight;

          if (style.ascent) {
            fontAscent = style.ascent * fontAscent;
          } else if (style.descent) {
            fontAscent = (1 + style.descent) * fontAscent;
          }

          let left, top;

          if (angle === 0) {
            left = tx[4];
            top = tx[5] - fontAscent;
          } else {
            left = tx[4] + fontAscent * Math.sin(angle);
            top = tx[5] - fontAscent * Math.cos(angle);
          }

          textDiv.style.left = `${left}px`;
          textDiv.style.top = `${top}px`;
          textDiv.style.fontSize = `${fontHeight}px`;
          textDiv.style.fontFamily = style.fontFamily;
          textDiv.textContent = geom.str;

          if (task._fontInspectorEnabled) {
            textDiv.dataset.fontName = geom.fontName;
          }

          if (angle !== 0) {
            textDivProperties.angle = angle * (180 / Math.PI);
          }

          let shouldScaleText = false;

          if (geom.str.length > 1) {
            shouldScaleText = true;
          } else if (geom.transform[0] !== geom.transform[3]) {
            const absScaleX = Math.abs(geom.transform[0]),
                  absScaleY = Math.abs(geom.transform[3]);

            if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
              shouldScaleText = true;
            }
          }

          if (shouldScaleText) {
            if (style.vertical) {
              textDivProperties.canvasWidth = geom.height * task._viewport.scale;
            } else {
              textDivProperties.canvasWidth = geom.width * task._viewport.scale;
            }
          }

          task._textDivProperties.set(textDiv, textDivProperties);

          if (task._textContentStream) {
            task._layoutText(textDiv);
          }

          if (task._enhanceTextSelection) {
            let angleCos = 1,
                angleSin = 0;

            if (angle !== 0) {
              angleCos = Math.cos(angle);
              angleSin = Math.sin(angle);
            }

            const divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
            const divHeight = fontHeight;
            let m, b;

            if (angle !== 0) {
              m = [angleCos, angleSin, -angleSin, angleCos, left, top];
              b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
            } else {
              b = [left, top, left + divWidth, top + divHeight];
            }

            task._bounds.push({
              left: b[0],
              top: b[1],
              right: b[2],
              bottom: b[3],
              div: textDiv,
              size: [divWidth, divHeight],
              m
            });
          }
        }

        function render(task) {
          if (task._canceled) {
            return;
          }

          const textDivs = task._textDivs;
          const capability = task._capability;
          const textDivsLength = textDivs.length;

          if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
            task._renderingDone = true;
            capability.resolve();
            return;
          }

          if (!task._textContentStream) {
            for (let i = 0; i < textDivsLength; i++) {
              task._layoutText(textDivs[i]);
            }
          }

          task._renderingDone = true;
          capability.resolve();
        }

        function findPositiveMin(ts, offset, count) {
          let result = 0;

          for (let i = 0; i < count; i++) {
            const t = ts[offset++];

            if (t > 0) {
              result = result ? Math.min(t, result) : t;
            }
          }

          return result;
        }

        function expand(task) {
          const bounds = task._bounds;
          const viewport = task._viewport;
          const expanded = expandBounds(viewport.width, viewport.height, bounds);

          for (let i = 0; i < expanded.length; i++) {
            const div = bounds[i].div;

            const divProperties = task._textDivProperties.get(div);

            if (divProperties.angle === 0) {
              divProperties.paddingLeft = bounds[i].left - expanded[i].left;
              divProperties.paddingTop = bounds[i].top - expanded[i].top;
              divProperties.paddingRight = expanded[i].right - bounds[i].right;
              divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

              task._textDivProperties.set(div, divProperties);

              continue;
            }

            const e = expanded[i],
                  b = bounds[i];
            const m = b.m,
                  c = m[0],
                  s = m[1];
            const points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
            const ts = new Float64Array(64);
            points.forEach(function (p, j) {
              const t = _util.Util.applyTransform(p, m);

              ts[j + 0] = c && (e.left - t[0]) / c;
              ts[j + 4] = s && (e.top - t[1]) / s;
              ts[j + 8] = c && (e.right - t[0]) / c;
              ts[j + 12] = s && (e.bottom - t[1]) / s;
              ts[j + 16] = s && (e.left - t[0]) / -s;
              ts[j + 20] = c && (e.top - t[1]) / c;
              ts[j + 24] = s && (e.right - t[0]) / -s;
              ts[j + 28] = c && (e.bottom - t[1]) / c;
              ts[j + 32] = c && (e.left - t[0]) / -c;
              ts[j + 36] = s && (e.top - t[1]) / -s;
              ts[j + 40] = c && (e.right - t[0]) / -c;
              ts[j + 44] = s && (e.bottom - t[1]) / -s;
              ts[j + 48] = s && (e.left - t[0]) / s;
              ts[j + 52] = c && (e.top - t[1]) / -c;
              ts[j + 56] = s && (e.right - t[0]) / s;
              ts[j + 60] = c && (e.bottom - t[1]) / -c;
            });
            const boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
            divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
            divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
            divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
            divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

            task._textDivProperties.set(div, divProperties);
          }
        }

        function expandBounds(width, height, boxes) {
          const bounds = boxes.map(function (box, i) {
            return {
              x1: box.left,
              y1: box.top,
              x2: box.right,
              y2: box.bottom,
              index: i,
              x1New: undefined,
              x2New: undefined
            };
          });
          expandBoundsLTR(width, bounds);
          const expanded = new Array(boxes.length);
          bounds.forEach(function (b) {
            const i = b.index;
            expanded[i] = {
              left: b.x1New,
              top: 0,
              right: b.x2New,
              bottom: 0
            };
          });
          boxes.map(function (box, i) {
            const e = expanded[i],
                  b = bounds[i];
            b.x1 = box.top;
            b.y1 = width - e.right;
            b.x2 = box.bottom;
            b.y2 = width - e.left;
            b.index = i;
            b.x1New = undefined;
            b.x2New = undefined;
          });
          expandBoundsLTR(height, bounds);
          bounds.forEach(function (b) {
            const i = b.index;
            expanded[i].top = b.x1New;
            expanded[i].bottom = b.x2New;
          });
          return expanded;
        }

        function expandBoundsLTR(width, bounds) {
          bounds.sort(function (a, b) {
            return a.x1 - b.x1 || a.index - b.index;
          });
          const fakeBoundary = {
            x1: -Infinity,
            y1: -Infinity,
            x2: 0,
            y2: Infinity,
            index: -1,
            x1New: 0,
            x2New: 0
          };
          const horizon = [{
            start: -Infinity,
            end: Infinity,
            boundary: fakeBoundary
          }];
          bounds.forEach(function (boundary) {
            let i = 0;

            while (i < horizon.length && horizon[i].end <= boundary.y1) {
              i++;
            }

            let j = horizon.length - 1;

            while (j >= 0 && horizon[j].start >= boundary.y2) {
              j--;
            }

            let horizonPart, affectedBoundary;
            let q,
                k,
                maxXNew = -Infinity;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              let xNew;

              if (affectedBoundary.x2 > boundary.x1) {
                xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
              } else if (affectedBoundary.x2New === undefined) {
                xNew = (affectedBoundary.x2 + boundary.x1) / 2;
              } else {
                xNew = affectedBoundary.x2New;
              }

              if (xNew > maxXNew) {
                maxXNew = xNew;
              }
            }

            boundary.x1New = maxXNew;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;

              if (affectedBoundary.x2New === undefined) {
                if (affectedBoundary.x2 > boundary.x1) {
                  if (affectedBoundary.index > boundary.index) {
                    affectedBoundary.x2New = affectedBoundary.x2;
                  }
                } else {
                  affectedBoundary.x2New = maxXNew;
                }
              } else if (affectedBoundary.x2New > maxXNew) {
                affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
              }
            }

            const changedHorizon = [];
            let lastBoundary = null;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              const useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;

              if (lastBoundary === useBoundary) {
                changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
              } else {
                changedHorizon.push({
                  start: horizonPart.start,
                  end: horizonPart.end,
                  boundary: useBoundary
                });
                lastBoundary = useBoundary;
              }
            }

            if (horizon[i].start < boundary.y1) {
              changedHorizon[0].start = boundary.y1;
              changedHorizon.unshift({
                start: horizon[i].start,
                end: boundary.y1,
                boundary: horizon[i].boundary
              });
            }

            if (boundary.y2 < horizon[j].end) {
              changedHorizon[changedHorizon.length - 1].end = boundary.y2;
              changedHorizon.push({
                start: boundary.y2,
                end: horizon[j].end,
                boundary: horizon[j].boundary
              });
            }

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;

              if (affectedBoundary.x2New !== undefined) {
                continue;
              }

              let used = false;

              for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                used = horizon[k].boundary === affectedBoundary;
              }

              for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                used = horizon[k].boundary === affectedBoundary;
              }

              for (k = 0; !used && k < changedHorizon.length; k++) {
                used = changedHorizon[k].boundary === affectedBoundary;
              }

              if (!used) {
                affectedBoundary.x2New = maxXNew;
              }
            }

            Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
          });
          horizon.forEach(function (horizonPart) {
            const affectedBoundary = horizonPart.boundary;

            if (affectedBoundary.x2New === undefined) {
              affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
            }
          });
        }

        function TextLayerRenderTask({
          textContent,
          textContentStream,
          container,
          viewport,
          textDivs,
          textContentItemsStr,
          enhanceTextSelection
        }) {
          this._textContent = textContent;
          this._textContentStream = textContentStream;
          this._container = container;
          this._document = container.ownerDocument;
          this._viewport = viewport;
          this._textDivs = textDivs || [];
          this._textContentItemsStr = textContentItemsStr || [];
          this._enhanceTextSelection = !!enhanceTextSelection;
          this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
          this._reader = null;
          this._layoutTextLastFontSize = null;
          this._layoutTextLastFontFamily = null;
          this._layoutTextCtx = null;
          this._textDivProperties = new WeakMap();
          this._renderingDone = false;
          this._canceled = false;
          this._capability = (0, _util.createPromiseCapability)();
          this._renderTimer = null;
          this._bounds = [];

          this._capability.promise.finally(() => {
            if (this._layoutTextCtx) {
              this._layoutTextCtx.canvas.width = 0;
              this._layoutTextCtx.canvas.height = 0;
              this._layoutTextCtx = null;
            }
          }).catch(() => {});
        }

        TextLayerRenderTask.prototype = {
          get promise() {
            return this._capability.promise;
          },

          cancel: function TextLayer_cancel() {
            this._canceled = true;

            if (this._reader) {
              this._reader.cancel(new _util.AbortException("TextLayer task cancelled."));

              this._reader = null;
            }

            if (this._renderTimer !== null) {
              clearTimeout(this._renderTimer);
              this._renderTimer = null;
            }

            this._capability.reject(new Error("TextLayer task cancelled."));
          },

          _processItems(items, styleCache) {
            for (let i = 0, len = items.length; i < len; i++) {
              this._textContentItemsStr.push(items[i].str);

              appendText(this, items[i], styleCache);
            }
          },

          _layoutText(textDiv) {
            const textDivProperties = this._textDivProperties.get(textDiv);

            if (textDivProperties.isWhitespace) {
              return;
            }

            let transform = "";

            if (textDivProperties.canvasWidth !== 0) {
              const {
                fontSize,
                fontFamily
              } = textDiv.style;

              if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                this._layoutTextCtx.font = `${fontSize} ${fontFamily}`;
                this._layoutTextLastFontSize = fontSize;
                this._layoutTextLastFontFamily = fontFamily;
              }

              const {
                width
              } = this._layoutTextCtx.measureText(textDiv.textContent);

              if (width > 0) {
                textDivProperties.scale = textDivProperties.canvasWidth / width;
                transform = `scaleX(${textDivProperties.scale})`;
              }
            }

            if (textDivProperties.angle !== 0) {
              transform = `rotate(${textDivProperties.angle}deg) ${transform}`;
            }

            if (transform.length > 0) {
              if (this._enhanceTextSelection) {
                textDivProperties.originalTransform = transform;
              }

              textDiv.style.transform = transform;
            }

            this._textDivProperties.set(textDiv, textDivProperties);

            this._container.appendChild(textDiv);
          },

          _render: function TextLayer_render(timeout) {
            const capability = (0, _util.createPromiseCapability)();
            let styleCache = Object.create(null);

            const canvas = this._document.createElement("canvas");

            canvas.mozOpaque = true;
            this._layoutTextCtx = canvas.getContext("2d", {
              alpha: false
            });

            if (this._textContent) {
              const textItems = this._textContent.items;
              const textStyles = this._textContent.styles;

              this._processItems(textItems, textStyles);

              capability.resolve();
            } else if (this._textContentStream) {
              const pump = () => {
                this._reader.read().then(({
                  value,
                  done
                }) => {
                  if (done) {
                    capability.resolve();
                    return;
                  }

                  Object.assign(styleCache, value.styles);

                  this._processItems(value.items, styleCache);

                  pump();
                }, capability.reject);
              };

              this._reader = this._textContentStream.getReader();
              pump();
            } else {
              throw new Error('Neither "textContent" nor "textContentStream"' + " parameters specified.");
            }

            capability.promise.then(() => {
              styleCache = null;

              if (!timeout) {
                render(this);
              } else {
                this._renderTimer = setTimeout(() => {
                  render(this);
                  this._renderTimer = null;
                }, timeout);
              }
            }, this._capability.reject);
          },
          expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
            if (!this._enhanceTextSelection || !this._renderingDone) {
              return;
            }

            if (this._bounds !== null) {
              expand(this);
              this._bounds = null;
            }

            const transformBuf = [],
                  paddingBuf = [];

            for (let i = 0, ii = this._textDivs.length; i < ii; i++) {
              const div = this._textDivs[i];

              const divProps = this._textDivProperties.get(div);

              if (divProps.isWhitespace) {
                continue;
              }

              if (expandDivs) {
                transformBuf.length = 0;
                paddingBuf.length = 0;

                if (divProps.originalTransform) {
                  transformBuf.push(divProps.originalTransform);
                }

                if (divProps.paddingTop > 0) {
                  paddingBuf.push(`${divProps.paddingTop}px`);
                  transformBuf.push(`translateY(${-divProps.paddingTop}px)`);
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingRight > 0) {
                  paddingBuf.push(`${divProps.paddingRight / divProps.scale}px`);
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingBottom > 0) {
                  paddingBuf.push(`${divProps.paddingBottom}px`);
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingLeft > 0) {
                  paddingBuf.push(`${divProps.paddingLeft / divProps.scale}px`);
                  transformBuf.push(`translateX(${-divProps.paddingLeft / divProps.scale}px)`);
                } else {
                  paddingBuf.push(0);
                }

                div.style.padding = paddingBuf.join(" ");

                if (transformBuf.length) {
                  div.style.transform = transformBuf.join(" ");
                }
              } else {
                div.style.padding = null;
                div.style.transform = divProps.originalTransform;
              }
            }
          }
        };

        function renderTextLayer(renderParameters) {
          const task = new TextLayerRenderTask({
            textContent: renderParameters.textContent,
            textContentStream: renderParameters.textContentStream,
            container: renderParameters.container,
            viewport: renderParameters.viewport,
            textDivs: renderParameters.textDivs,
            textContentItemsStr: renderParameters.textContentItemsStr,
            enhanceTextSelection: renderParameters.enhanceTextSelection
          });

          task._render(renderParameters.timeout);

          return task;
        }

        return renderTextLayer;
      }();

      exports.renderTextLayer = renderTextLayer;

      /***/ }),
      /* 22 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.SVGGraphics = void 0;

      var _util = __w_pdfjs_require__(2);

      var _display_utils = __w_pdfjs_require__(1);

      var _is_node = __w_pdfjs_require__(4);

      let SVGGraphics = function () {
        throw new Error("Not implemented: SVGGraphics");
      };

      exports.SVGGraphics = SVGGraphics;
      {
        const SVG_DEFAULTS = {
          fontStyle: "normal",
          fontWeight: "normal",
          fillColor: "#000000"
        };
        const XML_NS = "http://www.w3.org/XML/1998/namespace";
        const XLINK_NS = "http://www.w3.org/1999/xlink";
        const LINE_CAP_STYLES = ["butt", "round", "square"];
        const LINE_JOIN_STYLES = ["miter", "round", "bevel"];

        const convertImgDataToPng = function () {
          const PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
          const CHUNK_WRAPPER_SIZE = 12;
          const crcTable = new Int32Array(256);

          for (let i = 0; i < 256; i++) {
            let c = i;

            for (let h = 0; h < 8; h++) {
              if (c & 1) {
                c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
              } else {
                c = c >> 1 & 0x7fffffff;
              }
            }

            crcTable[i] = c;
          }

          function crc32(data, start, end) {
            let crc = -1;

            for (let i = start; i < end; i++) {
              const a = (crc ^ data[i]) & 0xff;
              const b = crcTable[a];
              crc = crc >>> 8 ^ b;
            }

            return crc ^ -1;
          }

          function writePngChunk(type, body, data, offset) {
            let p = offset;
            const len = body.length;
            data[p] = len >> 24 & 0xff;
            data[p + 1] = len >> 16 & 0xff;
            data[p + 2] = len >> 8 & 0xff;
            data[p + 3] = len & 0xff;
            p += 4;
            data[p] = type.charCodeAt(0) & 0xff;
            data[p + 1] = type.charCodeAt(1) & 0xff;
            data[p + 2] = type.charCodeAt(2) & 0xff;
            data[p + 3] = type.charCodeAt(3) & 0xff;
            p += 4;
            data.set(body, p);
            p += body.length;
            const crc = crc32(data, offset + 4, p);
            data[p] = crc >> 24 & 0xff;
            data[p + 1] = crc >> 16 & 0xff;
            data[p + 2] = crc >> 8 & 0xff;
            data[p + 3] = crc & 0xff;
          }

          function adler32(data, start, end) {
            let a = 1;
            let b = 0;

            for (let i = start; i < end; ++i) {
              a = (a + (data[i] & 0xff)) % 65521;
              b = (b + a) % 65521;
            }

            return b << 16 | a;
          }

          function deflateSync(literals) {
            if (!_is_node.isNodeJS) {
              return deflateSyncUncompressed(literals);
            }

            try {
              let input;

              if (parseInt(process.versions.node) >= 8) {
                input = literals;
              } else {
                input = Buffer.from(literals);
              }

              const output = require$$2__default['default'].deflateSync(input, {
                level: 9
              });

              return output instanceof Uint8Array ? output : new Uint8Array(output);
            } catch (e) {
              (0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
            }

            return deflateSyncUncompressed(literals);
          }

          function deflateSyncUncompressed(literals) {
            let len = literals.length;
            const maxBlockLength = 0xffff;
            const deflateBlocks = Math.ceil(len / maxBlockLength);
            const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
            let pi = 0;
            idat[pi++] = 0x78;
            idat[pi++] = 0x9c;
            let pos = 0;

            while (len > maxBlockLength) {
              idat[pi++] = 0x00;
              idat[pi++] = 0xff;
              idat[pi++] = 0xff;
              idat[pi++] = 0x00;
              idat[pi++] = 0x00;
              idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
              pi += maxBlockLength;
              pos += maxBlockLength;
              len -= maxBlockLength;
            }

            idat[pi++] = 0x01;
            idat[pi++] = len & 0xff;
            idat[pi++] = len >> 8 & 0xff;
            idat[pi++] = ~len & 0xffff & 0xff;
            idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
            idat.set(literals.subarray(pos), pi);
            pi += literals.length - pos;
            const adler = adler32(literals, 0, literals.length);
            idat[pi++] = adler >> 24 & 0xff;
            idat[pi++] = adler >> 16 & 0xff;
            idat[pi++] = adler >> 8 & 0xff;
            idat[pi++] = adler & 0xff;
            return idat;
          }

          function encode(imgData, kind, forceDataSchema, isMask) {
            const width = imgData.width;
            const height = imgData.height;
            let bitDepth, colorType, lineSize;
            const bytes = imgData.data;

            switch (kind) {
              case _util.ImageKind.GRAYSCALE_1BPP:
                colorType = 0;
                bitDepth = 1;
                lineSize = width + 7 >> 3;
                break;

              case _util.ImageKind.RGB_24BPP:
                colorType = 2;
                bitDepth = 8;
                lineSize = width * 3;
                break;

              case _util.ImageKind.RGBA_32BPP:
                colorType = 6;
                bitDepth = 8;
                lineSize = width * 4;
                break;

              default:
                throw new Error("invalid format");
            }

            const literals = new Uint8Array((1 + lineSize) * height);
            let offsetLiterals = 0,
                offsetBytes = 0;

            for (let y = 0; y < height; ++y) {
              literals[offsetLiterals++] = 0;
              literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
              offsetBytes += lineSize;
              offsetLiterals += lineSize;
            }

            if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
              offsetLiterals = 0;

              for (let y = 0; y < height; y++) {
                offsetLiterals++;

                for (let i = 0; i < lineSize; i++) {
                  literals[offsetLiterals++] ^= 0xff;
                }
              }
            }

            const ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
            const idat = deflateSync(literals);
            const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
            const data = new Uint8Array(pngLength);
            let offset = 0;
            data.set(PNG_HEADER, offset);
            offset += PNG_HEADER.length;
            writePngChunk("IHDR", ihdr, data, offset);
            offset += CHUNK_WRAPPER_SIZE + ihdr.length;
            writePngChunk("IDATA", idat, data, offset);
            offset += CHUNK_WRAPPER_SIZE + idat.length;
            writePngChunk("IEND", new Uint8Array(0), data, offset);
            return (0, _util.createObjectURL)(data, "image/png", forceDataSchema);
          }

          return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
            const kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
            return encode(imgData, kind, forceDataSchema, isMask);
          };
        }();

        class SVGExtraState {
          constructor() {
            this.fontSizeScale = 1;
            this.fontWeight = SVG_DEFAULTS.fontWeight;
            this.fontSize = 0;
            this.textMatrix = _util.IDENTITY_MATRIX;
            this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.textRenderingMode = _util.TextRenderingMode.FILL;
            this.textMatrixScale = 1;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRise = 0;
            this.fillColor = SVG_DEFAULTS.fillColor;
            this.strokeColor = "#000000";
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.lineJoin = "";
            this.lineCap = "";
            this.miterLimit = 0;
            this.dashArray = [];
            this.dashPhase = 0;
            this.dependencies = [];
            this.activeClipUrl = null;
            this.clipGroup = null;
            this.maskId = "";
          }

          clone() {
            return Object.create(this);
          }

          setCurrentPoint(x, y) {
            this.x = x;
            this.y = y;
          }

        }

        function opListToTree(opList) {
          let opTree = [];
          const tmp = [];

          for (const opListElement of opList) {
            if (opListElement.fn === "save") {
              opTree.push({
                fnId: 92,
                fn: "group",
                items: []
              });
              tmp.push(opTree);
              opTree = opTree[opTree.length - 1].items;
              continue;
            }

            if (opListElement.fn === "restore") {
              opTree = tmp.pop();
            } else {
              opTree.push(opListElement);
            }
          }

          return opTree;
        }

        function pf(value) {
          if (Number.isInteger(value)) {
            return value.toString();
          }

          const s = value.toFixed(10);
          let i = s.length - 1;

          if (s[i] !== "0") {
            return s;
          }

          do {
            i--;
          } while (s[i] === "0");

          return s.substring(0, s[i] === "." ? i : i + 1);
        }

        function pm(m) {
          if (m[4] === 0 && m[5] === 0) {
            if (m[1] === 0 && m[2] === 0) {
              if (m[0] === 1 && m[3] === 1) {
                return "";
              }

              return `scale(${pf(m[0])} ${pf(m[3])})`;
            }

            if (m[0] === m[3] && m[1] === -m[2]) {
              const a = Math.acos(m[0]) * 180 / Math.PI;
              return `rotate(${pf(a)})`;
            }
          } else {
            if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
              return `translate(${pf(m[4])} ${pf(m[5])})`;
            }
          }

          return `matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} ` + `${pf(m[5])})`;
        }

        let clipCount = 0;
        let maskCount = 0;
        let shadingCount = 0;
        exports.SVGGraphics = SVGGraphics = class SVGGraphics {
          constructor(commonObjs, objs, forceDataSchema = false) {
            this.svgFactory = new _display_utils.DOMSVGFactory();
            this.current = new SVGExtraState();
            this.transformMatrix = _util.IDENTITY_MATRIX;
            this.transformStack = [];
            this.extraStack = [];
            this.commonObjs = commonObjs;
            this.objs = objs;
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.embedFonts = false;
            this.embeddedFonts = Object.create(null);
            this.cssStyle = null;
            this.forceDataSchema = !!forceDataSchema;
            this._operatorIdMapping = [];

            for (const op in _util.OPS) {
              this._operatorIdMapping[_util.OPS[op]] = op;
            }
          }

          save() {
            this.transformStack.push(this.transformMatrix);
            const old = this.current;
            this.extraStack.push(old);
            this.current = old.clone();
          }

          restore() {
            this.transformMatrix = this.transformStack.pop();
            this.current = this.extraStack.pop();
            this.pendingClip = null;
            this.tgrp = null;
          }

          group(items) {
            this.save();
            this.executeOpTree(items);
            this.restore();
          }

          loadDependencies(operatorList) {
            const fnArray = operatorList.fnArray;
            const argsArray = operatorList.argsArray;

            for (let i = 0, ii = fnArray.length; i < ii; i++) {
              if (fnArray[i] !== _util.OPS.dependency) {
                continue;
              }

              for (const obj of argsArray[i]) {
                const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
                const promise = new Promise(resolve => {
                  objsPool.get(obj, resolve);
                });
                this.current.dependencies.push(promise);
              }
            }

            return Promise.all(this.current.dependencies);
          }

          transform(a, b, c, d, e, f) {
            const transformMatrix = [a, b, c, d, e, f];
            this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
            this.tgrp = null;
          }

          getSVG(operatorList, viewport) {
            this.viewport = viewport;

            const svgElement = this._initialize(viewport);

            return this.loadDependencies(operatorList).then(() => {
              this.transformMatrix = _util.IDENTITY_MATRIX;
              this.executeOpTree(this.convertOpList(operatorList));
              return svgElement;
            });
          }

          convertOpList(operatorList) {
            const operatorIdMapping = this._operatorIdMapping;
            const argsArray = operatorList.argsArray;
            const fnArray = operatorList.fnArray;
            const opList = [];

            for (let i = 0, ii = fnArray.length; i < ii; i++) {
              const fnId = fnArray[i];
              opList.push({
                fnId,
                fn: operatorIdMapping[fnId],
                args: argsArray[i]
              });
            }

            return opListToTree(opList);
          }

          executeOpTree(opTree) {
            for (const opTreeElement of opTree) {
              const fn = opTreeElement.fn;
              const fnId = opTreeElement.fnId;
              const args = opTreeElement.args;

              switch (fnId | 0) {
                case _util.OPS.beginText:
                  this.beginText();
                  break;

                case _util.OPS.dependency:
                  break;

                case _util.OPS.setLeading:
                  this.setLeading(args);
                  break;

                case _util.OPS.setLeadingMoveText:
                  this.setLeadingMoveText(args[0], args[1]);
                  break;

                case _util.OPS.setFont:
                  this.setFont(args);
                  break;

                case _util.OPS.showText:
                  this.showText(args[0]);
                  break;

                case _util.OPS.showSpacedText:
                  this.showText(args[0]);
                  break;

                case _util.OPS.endText:
                  this.endText();
                  break;

                case _util.OPS.moveText:
                  this.moveText(args[0], args[1]);
                  break;

                case _util.OPS.setCharSpacing:
                  this.setCharSpacing(args[0]);
                  break;

                case _util.OPS.setWordSpacing:
                  this.setWordSpacing(args[0]);
                  break;

                case _util.OPS.setHScale:
                  this.setHScale(args[0]);
                  break;

                case _util.OPS.setTextMatrix:
                  this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                  break;

                case _util.OPS.setTextRise:
                  this.setTextRise(args[0]);
                  break;

                case _util.OPS.setTextRenderingMode:
                  this.setTextRenderingMode(args[0]);
                  break;

                case _util.OPS.setLineWidth:
                  this.setLineWidth(args[0]);
                  break;

                case _util.OPS.setLineJoin:
                  this.setLineJoin(args[0]);
                  break;

                case _util.OPS.setLineCap:
                  this.setLineCap(args[0]);
                  break;

                case _util.OPS.setMiterLimit:
                  this.setMiterLimit(args[0]);
                  break;

                case _util.OPS.setFillRGBColor:
                  this.setFillRGBColor(args[0], args[1], args[2]);
                  break;

                case _util.OPS.setStrokeRGBColor:
                  this.setStrokeRGBColor(args[0], args[1], args[2]);
                  break;

                case _util.OPS.setStrokeColorN:
                  this.setStrokeColorN(args);
                  break;

                case _util.OPS.setFillColorN:
                  this.setFillColorN(args);
                  break;

                case _util.OPS.shadingFill:
                  this.shadingFill(args[0]);
                  break;

                case _util.OPS.setDash:
                  this.setDash(args[0], args[1]);
                  break;

                case _util.OPS.setRenderingIntent:
                  this.setRenderingIntent(args[0]);
                  break;

                case _util.OPS.setFlatness:
                  this.setFlatness(args[0]);
                  break;

                case _util.OPS.setGState:
                  this.setGState(args[0]);
                  break;

                case _util.OPS.fill:
                  this.fill();
                  break;

                case _util.OPS.eoFill:
                  this.eoFill();
                  break;

                case _util.OPS.stroke:
                  this.stroke();
                  break;

                case _util.OPS.fillStroke:
                  this.fillStroke();
                  break;

                case _util.OPS.eoFillStroke:
                  this.eoFillStroke();
                  break;

                case _util.OPS.clip:
                  this.clip("nonzero");
                  break;

                case _util.OPS.eoClip:
                  this.clip("evenodd");
                  break;

                case _util.OPS.paintSolidColorImageMask:
                  this.paintSolidColorImageMask();
                  break;

                case _util.OPS.paintImageXObject:
                  this.paintImageXObject(args[0]);
                  break;

                case _util.OPS.paintInlineImageXObject:
                  this.paintInlineImageXObject(args[0]);
                  break;

                case _util.OPS.paintImageMaskXObject:
                  this.paintImageMaskXObject(args[0]);
                  break;

                case _util.OPS.paintFormXObjectBegin:
                  this.paintFormXObjectBegin(args[0], args[1]);
                  break;

                case _util.OPS.paintFormXObjectEnd:
                  this.paintFormXObjectEnd();
                  break;

                case _util.OPS.closePath:
                  this.closePath();
                  break;

                case _util.OPS.closeStroke:
                  this.closeStroke();
                  break;

                case _util.OPS.closeFillStroke:
                  this.closeFillStroke();
                  break;

                case _util.OPS.closeEOFillStroke:
                  this.closeEOFillStroke();
                  break;

                case _util.OPS.nextLine:
                  this.nextLine();
                  break;

                case _util.OPS.transform:
                  this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                  break;

                case _util.OPS.constructPath:
                  this.constructPath(args[0], args[1]);
                  break;

                case _util.OPS.endPath:
                  this.endPath();
                  break;

                case 92:
                  this.group(opTreeElement.items);
                  break;

                default:
                  (0, _util.warn)(`Unimplemented operator ${fn}`);
                  break;
              }
            }
          }

          setWordSpacing(wordSpacing) {
            this.current.wordSpacing = wordSpacing;
          }

          setCharSpacing(charSpacing) {
            this.current.charSpacing = charSpacing;
          }

          nextLine() {
            this.moveText(0, this.current.leading);
          }

          setTextMatrix(a, b, c, d, e, f) {
            const current = this.current;
            current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
            current.textMatrixScale = Math.sqrt(a * a + b * b);
            current.x = current.lineX = 0;
            current.y = current.lineY = 0;
            current.xcoords = [];
            current.ycoords = [];
            current.tspan = this.svgFactory.createElement("svg:tspan");
            current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
            current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
            current.tspan.setAttributeNS(null, "y", pf(-current.y));
            current.txtElement = this.svgFactory.createElement("svg:text");
            current.txtElement.appendChild(current.tspan);
          }

          beginText() {
            const current = this.current;
            current.x = current.lineX = 0;
            current.y = current.lineY = 0;
            current.textMatrix = _util.IDENTITY_MATRIX;
            current.lineMatrix = _util.IDENTITY_MATRIX;
            current.textMatrixScale = 1;
            current.tspan = this.svgFactory.createElement("svg:tspan");
            current.txtElement = this.svgFactory.createElement("svg:text");
            current.txtgrp = this.svgFactory.createElement("svg:g");
            current.xcoords = [];
            current.ycoords = [];
          }

          moveText(x, y) {
            const current = this.current;
            current.x = current.lineX += x;
            current.y = current.lineY += y;
            current.xcoords = [];
            current.ycoords = [];
            current.tspan = this.svgFactory.createElement("svg:tspan");
            current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
            current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
            current.tspan.setAttributeNS(null, "y", pf(-current.y));
          }

          showText(glyphs) {
            const current = this.current;
            const font = current.font;
            const fontSize = current.fontSize;

            if (fontSize === 0) {
              return;
            }

            const fontSizeScale = current.fontSizeScale;
            const charSpacing = current.charSpacing;
            const wordSpacing = current.wordSpacing;
            const fontDirection = current.fontDirection;
            const textHScale = current.textHScale * fontDirection;
            const vertical = font.vertical;
            const spacingDir = vertical ? 1 : -1;
            const defaultVMetrics = font.defaultVMetrics;
            const widthAdvanceScale = fontSize * current.fontMatrix[0];
            let x = 0;

            for (const glyph of glyphs) {
              if (glyph === null) {
                x += fontDirection * wordSpacing;
                continue;
              } else if ((0, _util.isNum)(glyph)) {
                x += spacingDir * glyph * fontSize / 1000;
                continue;
              }

              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const character = glyph.fontChar;
              let scaledX, scaledY;
              let width = glyph.width;

              if (vertical) {
                let vx;
                const vmetric = glyph.vmetric || defaultVMetrics;
                vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                vx = -vx * widthAdvanceScale;
                const vy = vmetric[2] * widthAdvanceScale;
                width = vmetric ? -vmetric[0] : width;
                scaledX = vx / fontSizeScale;
                scaledY = (x + vy) / fontSizeScale;
              } else {
                scaledX = x / fontSizeScale;
                scaledY = 0;
              }

              if (glyph.isInFont || font.missingFile) {
                current.xcoords.push(current.x + scaledX);

                if (vertical) {
                  current.ycoords.push(-current.y + scaledY);
                }

                current.tspan.textContent += character;
              }

              let charWidth;

              if (vertical) {
                charWidth = width * widthAdvanceScale - spacing * fontDirection;
              } else {
                charWidth = width * widthAdvanceScale + spacing * fontDirection;
              }

              x += charWidth;
            }

            current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));

            if (vertical) {
              current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
            } else {
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
            }

            if (vertical) {
              current.y -= x;
            } else {
              current.x += x * textHScale;
            }

            current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
            current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);

            if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
              current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
            }

            if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
              current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
            }

            const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

            if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
              if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                current.tspan.setAttributeNS(null, "fill", current.fillColor);
              }

              if (current.fillAlpha < 1) {
                current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
              }
            } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
              current.tspan.setAttributeNS(null, "fill", "transparent");
            } else {
              current.tspan.setAttributeNS(null, "fill", "none");
            }

            if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
              const lineWidthScale = 1 / (current.textMatrixScale || 1);

              this._setStrokeAttributes(current.tspan, lineWidthScale);
            }

            let textMatrix = current.textMatrix;

            if (current.textRise !== 0) {
              textMatrix = textMatrix.slice();
              textMatrix[5] += current.textRise;
            }

            current.txtElement.setAttributeNS(null, "transform", `${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);
            current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
            current.txtElement.appendChild(current.tspan);
            current.txtgrp.appendChild(current.txtElement);

            this._ensureTransformGroup().appendChild(current.txtElement);
          }

          setLeadingMoveText(x, y) {
            this.setLeading(-y);
            this.moveText(x, y);
          }

          addFontStyle(fontObj) {
            if (!fontObj.data) {
              throw new Error("addFontStyle: No font data available, " + 'ensure that the "fontExtraProperties" API parameter is set.');
            }

            if (!this.cssStyle) {
              this.cssStyle = this.svgFactory.createElement("svg:style");
              this.cssStyle.setAttributeNS(null, "type", "text/css");
              this.defs.appendChild(this.cssStyle);
            }

            const url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
            this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}";` + ` src: url(${url}); }\n`;
          }

          setFont(details) {
            const current = this.current;
            const fontObj = this.commonObjs.get(details[0]);
            let size = details[1];
            current.font = fontObj;

            if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
              this.addFontStyle(fontObj);
              this.embeddedFonts[fontObj.loadedName] = fontObj;
            }

            current.fontMatrix = fontObj.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            let bold = "normal";

            if (fontObj.black) {
              bold = "900";
            } else if (fontObj.bold) {
              bold = "bold";
            }

            const italic = fontObj.italic ? "italic" : "normal";

            if (size < 0) {
              size = -size;
              current.fontDirection = -1;
            } else {
              current.fontDirection = 1;
            }

            current.fontSize = size;
            current.fontFamily = fontObj.loadedName;
            current.fontWeight = bold;
            current.fontStyle = italic;
            current.tspan = this.svgFactory.createElement("svg:tspan");
            current.tspan.setAttributeNS(null, "y", pf(-current.y));
            current.xcoords = [];
            current.ycoords = [];
          }

          endText() {
            const current = this.current;

            if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement?.hasChildNodes()) {
              current.element = current.txtElement;
              this.clip("nonzero");
              this.endPath();
            }
          }

          setLineWidth(width) {
            if (width > 0) {
              this.current.lineWidth = width;
            }
          }

          setLineCap(style) {
            this.current.lineCap = LINE_CAP_STYLES[style];
          }

          setLineJoin(style) {
            this.current.lineJoin = LINE_JOIN_STYLES[style];
          }

          setMiterLimit(limit) {
            this.current.miterLimit = limit;
          }

          setStrokeAlpha(strokeAlpha) {
            this.current.strokeAlpha = strokeAlpha;
          }

          setStrokeRGBColor(r, g, b) {
            this.current.strokeColor = _util.Util.makeHexColor(r, g, b);
          }

          setFillAlpha(fillAlpha) {
            this.current.fillAlpha = fillAlpha;
          }

          setFillRGBColor(r, g, b) {
            this.current.fillColor = _util.Util.makeHexColor(r, g, b);
            this.current.tspan = this.svgFactory.createElement("svg:tspan");
            this.current.xcoords = [];
            this.current.ycoords = [];
          }

          setStrokeColorN(args) {
            this.current.strokeColor = this._makeColorN_Pattern(args);
          }

          setFillColorN(args) {
            this.current.fillColor = this._makeColorN_Pattern(args);
          }

          shadingFill(args) {
            const width = this.viewport.width;
            const height = this.viewport.height;

            const inv = _util.Util.inverseTransform(this.transformMatrix);

            const bl = _util.Util.applyTransform([0, 0], inv);

            const br = _util.Util.applyTransform([0, height], inv);

            const ul = _util.Util.applyTransform([width, 0], inv);

            const ur = _util.Util.applyTransform([width, height], inv);

            const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
            const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
            const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
            const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
            const rect = this.svgFactory.createElement("svg:rect");
            rect.setAttributeNS(null, "x", x0);
            rect.setAttributeNS(null, "y", y0);
            rect.setAttributeNS(null, "width", x1 - x0);
            rect.setAttributeNS(null, "height", y1 - y0);
            rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));

            if (this.current.fillAlpha < 1) {
              rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
            }

            this._ensureTransformGroup().appendChild(rect);
          }

          _makeColorN_Pattern(args) {
            if (args[0] === "TilingPattern") {
              return this._makeTilingPattern(args);
            }

            return this._makeShadingPattern(args);
          }

          _makeTilingPattern(args) {
            const color = args[1];
            const operatorList = args[2];
            const matrix = args[3] || _util.IDENTITY_MATRIX;
            const [x0, y0, x1, y1] = args[4];
            const xstep = args[5];
            const ystep = args[6];
            const paintType = args[7];
            const tilingId = `shading${shadingCount++}`;

            const [tx0, ty0] = _util.Util.applyTransform([x0, y0], matrix);

            const [tx1, ty1] = _util.Util.applyTransform([x1, y1], matrix);

            const [xscale, yscale] = _util.Util.singularValueDecompose2dScale(matrix);

            const txstep = xstep * xscale;
            const tystep = ystep * yscale;
            const tiling = this.svgFactory.createElement("svg:pattern");
            tiling.setAttributeNS(null, "id", tilingId);
            tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
            tiling.setAttributeNS(null, "width", txstep);
            tiling.setAttributeNS(null, "height", tystep);
            tiling.setAttributeNS(null, "x", `${tx0}`);
            tiling.setAttributeNS(null, "y", `${ty0}`);
            const svg = this.svg;
            const transformMatrix = this.transformMatrix;
            const fillColor = this.current.fillColor;
            const strokeColor = this.current.strokeColor;
            const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
            this.svg = bbox;
            this.transformMatrix = matrix;

            if (paintType === 2) {
              const cssColor = _util.Util.makeHexColor(...color);

              this.current.fillColor = cssColor;
              this.current.strokeColor = cssColor;
            }

            this.executeOpTree(this.convertOpList(operatorList));
            this.svg = svg;
            this.transformMatrix = transformMatrix;
            this.current.fillColor = fillColor;
            this.current.strokeColor = strokeColor;
            tiling.appendChild(bbox.childNodes[0]);
            this.defs.appendChild(tiling);
            return `url(#${tilingId})`;
          }

          _makeShadingPattern(args) {
            switch (args[0]) {
              case "RadialAxial":
                const shadingId = `shading${shadingCount++}`;
                const colorStops = args[3];
                let gradient;

                switch (args[1]) {
                  case "axial":
                    const point0 = args[4];
                    const point1 = args[5];
                    gradient = this.svgFactory.createElement("svg:linearGradient");
                    gradient.setAttributeNS(null, "id", shadingId);
                    gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                    gradient.setAttributeNS(null, "x1", point0[0]);
                    gradient.setAttributeNS(null, "y1", point0[1]);
                    gradient.setAttributeNS(null, "x2", point1[0]);
                    gradient.setAttributeNS(null, "y2", point1[1]);
                    break;

                  case "radial":
                    const focalPoint = args[4];
                    const circlePoint = args[5];
                    const focalRadius = args[6];
                    const circleRadius = args[7];
                    gradient = this.svgFactory.createElement("svg:radialGradient");
                    gradient.setAttributeNS(null, "id", shadingId);
                    gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                    gradient.setAttributeNS(null, "cx", circlePoint[0]);
                    gradient.setAttributeNS(null, "cy", circlePoint[1]);
                    gradient.setAttributeNS(null, "r", circleRadius);
                    gradient.setAttributeNS(null, "fx", focalPoint[0]);
                    gradient.setAttributeNS(null, "fy", focalPoint[1]);
                    gradient.setAttributeNS(null, "fr", focalRadius);
                    break;

                  default:
                    throw new Error(`Unknown RadialAxial type: ${args[1]}`);
                }

                for (const colorStop of colorStops) {
                  const stop = this.svgFactory.createElement("svg:stop");
                  stop.setAttributeNS(null, "offset", colorStop[0]);
                  stop.setAttributeNS(null, "stop-color", colorStop[1]);
                  gradient.appendChild(stop);
                }

                this.defs.appendChild(gradient);
                return `url(#${shadingId})`;

              case "Mesh":
                (0, _util.warn)("Unimplemented pattern Mesh");
                return null;

              case "Dummy":
                return "hotpink";

              default:
                throw new Error(`Unknown IR type: ${args[0]}`);
            }
          }

          setDash(dashArray, dashPhase) {
            this.current.dashArray = dashArray;
            this.current.dashPhase = dashPhase;
          }

          constructPath(ops, args) {
            const current = this.current;
            let x = current.x,
                y = current.y;
            let d = [];
            let j = 0;

            for (const op of ops) {
              switch (op | 0) {
                case _util.OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  const width = args[j++];
                  const height = args[j++];
                  const xw = x + width;
                  const yh = y + height;
                  d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                  break;

                case _util.OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  d.push("M", pf(x), pf(y));
                  break;

                case _util.OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  d.push("L", pf(x), pf(y));
                  break;

                case _util.OPS.curveTo:
                  x = args[j + 4];
                  y = args[j + 5];
                  d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                  j += 6;
                  break;

                case _util.OPS.curveTo2:
                  d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                  x = args[j + 2];
                  y = args[j + 3];
                  j += 4;
                  break;

                case _util.OPS.curveTo3:
                  x = args[j + 2];
                  y = args[j + 3];
                  d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                  j += 4;
                  break;

                case _util.OPS.closePath:
                  d.push("Z");
                  break;
              }
            }

            d = d.join(" ");

            if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
              d = current.path.getAttributeNS(null, "d") + d;
            } else {
              current.path = this.svgFactory.createElement("svg:path");

              this._ensureTransformGroup().appendChild(current.path);
            }

            current.path.setAttributeNS(null, "d", d);
            current.path.setAttributeNS(null, "fill", "none");
            current.element = current.path;
            current.setCurrentPoint(x, y);
          }

          endPath() {
            const current = this.current;
            current.path = null;

            if (!this.pendingClip) {
              return;
            }

            if (!current.element) {
              this.pendingClip = null;
              return;
            }

            const clipId = `clippath${clipCount++}`;
            const clipPath = this.svgFactory.createElement("svg:clipPath");
            clipPath.setAttributeNS(null, "id", clipId);
            clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
            const clipElement = current.element.cloneNode(true);

            if (this.pendingClip === "evenodd") {
              clipElement.setAttributeNS(null, "clip-rule", "evenodd");
            } else {
              clipElement.setAttributeNS(null, "clip-rule", "nonzero");
            }

            this.pendingClip = null;
            clipPath.appendChild(clipElement);
            this.defs.appendChild(clipPath);

            if (current.activeClipUrl) {
              current.clipGroup = null;
              this.extraStack.forEach(function (prev) {
                prev.clipGroup = null;
              });
              clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
            }

            current.activeClipUrl = `url(#${clipId})`;
            this.tgrp = null;
          }

          clip(type) {
            this.pendingClip = type;
          }

          closePath() {
            const current = this.current;

            if (current.path) {
              const d = `${current.path.getAttributeNS(null, "d")}Z`;
              current.path.setAttributeNS(null, "d", d);
            }
          }

          setLeading(leading) {
            this.current.leading = -leading;
          }

          setTextRise(textRise) {
            this.current.textRise = textRise;
          }

          setTextRenderingMode(textRenderingMode) {
            this.current.textRenderingMode = textRenderingMode;
          }

          setHScale(scale) {
            this.current.textHScale = scale / 100;
          }

          setRenderingIntent(intent) {}

          setFlatness(flatness) {}

          setGState(states) {
            for (const [key, value] of states) {
              switch (key) {
                case "LW":
                  this.setLineWidth(value);
                  break;

                case "LC":
                  this.setLineCap(value);
                  break;

                case "LJ":
                  this.setLineJoin(value);
                  break;

                case "ML":
                  this.setMiterLimit(value);
                  break;

                case "D":
                  this.setDash(value[0], value[1]);
                  break;

                case "RI":
                  this.setRenderingIntent(value);
                  break;

                case "FL":
                  this.setFlatness(value);
                  break;

                case "Font":
                  this.setFont(value);
                  break;

                case "CA":
                  this.setStrokeAlpha(value);
                  break;

                case "ca":
                  this.setFillAlpha(value);
                  break;

                default:
                  (0, _util.warn)(`Unimplemented graphic state operator ${key}`);
                  break;
              }
            }
          }

          fill() {
            const current = this.current;

            if (current.element) {
              current.element.setAttributeNS(null, "fill", current.fillColor);
              current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
              this.endPath();
            }
          }

          stroke() {
            const current = this.current;

            if (current.element) {
              this._setStrokeAttributes(current.element);

              current.element.setAttributeNS(null, "fill", "none");
              this.endPath();
            }
          }

          _setStrokeAttributes(element, lineWidthScale = 1) {
            const current = this.current;
            let dashArray = current.dashArray;

            if (lineWidthScale !== 1 && dashArray.length > 0) {
              dashArray = dashArray.map(function (value) {
                return lineWidthScale * value;
              });
            }

            element.setAttributeNS(null, "stroke", current.strokeColor);
            element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
            element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
            element.setAttributeNS(null, "stroke-linecap", current.lineCap);
            element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
            element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
            element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
            element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
          }

          eoFill() {
            if (this.current.element) {
              this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
            }

            this.fill();
          }

          fillStroke() {
            this.stroke();
            this.fill();
          }

          eoFillStroke() {
            if (this.current.element) {
              this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
            }

            this.fillStroke();
          }

          closeStroke() {
            this.closePath();
            this.stroke();
          }

          closeFillStroke() {
            this.closePath();
            this.fillStroke();
          }

          closeEOFillStroke() {
            this.closePath();
            this.eoFillStroke();
          }

          paintSolidColorImageMask() {
            const rect = this.svgFactory.createElement("svg:rect");
            rect.setAttributeNS(null, "x", "0");
            rect.setAttributeNS(null, "y", "0");
            rect.setAttributeNS(null, "width", "1px");
            rect.setAttributeNS(null, "height", "1px");
            rect.setAttributeNS(null, "fill", this.current.fillColor);

            this._ensureTransformGroup().appendChild(rect);
          }

          paintImageXObject(objId) {
            const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!imgData) {
              (0, _util.warn)(`Dependent image with object ID ${objId} is not ready yet`);
              return;
            }

            this.paintInlineImageXObject(imgData);
          }

          paintInlineImageXObject(imgData, mask) {
            const width = imgData.width;
            const height = imgData.height;
            const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
            const cliprect = this.svgFactory.createElement("svg:rect");
            cliprect.setAttributeNS(null, "x", "0");
            cliprect.setAttributeNS(null, "y", "0");
            cliprect.setAttributeNS(null, "width", pf(width));
            cliprect.setAttributeNS(null, "height", pf(height));
            this.current.element = cliprect;
            this.clip("nonzero");
            const imgEl = this.svgFactory.createElement("svg:image");
            imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
            imgEl.setAttributeNS(null, "x", "0");
            imgEl.setAttributeNS(null, "y", pf(-height));
            imgEl.setAttributeNS(null, "width", pf(width) + "px");
            imgEl.setAttributeNS(null, "height", pf(height) + "px");
            imgEl.setAttributeNS(null, "transform", `scale(${pf(1 / width)} ${pf(-1 / height)})`);

            if (mask) {
              mask.appendChild(imgEl);
            } else {
              this._ensureTransformGroup().appendChild(imgEl);
            }
          }

          paintImageMaskXObject(imgData) {
            const current = this.current;
            const width = imgData.width;
            const height = imgData.height;
            const fillColor = current.fillColor;
            current.maskId = `mask${maskCount++}`;
            const mask = this.svgFactory.createElement("svg:mask");
            mask.setAttributeNS(null, "id", current.maskId);
            const rect = this.svgFactory.createElement("svg:rect");
            rect.setAttributeNS(null, "x", "0");
            rect.setAttributeNS(null, "y", "0");
            rect.setAttributeNS(null, "width", pf(width));
            rect.setAttributeNS(null, "height", pf(height));
            rect.setAttributeNS(null, "fill", fillColor);
            rect.setAttributeNS(null, "mask", `url(#${current.maskId})`);
            this.defs.appendChild(mask);

            this._ensureTransformGroup().appendChild(rect);

            this.paintInlineImageXObject(imgData, mask);
          }

          paintFormXObjectBegin(matrix, bbox) {
            if (Array.isArray(matrix) && matrix.length === 6) {
              this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            }

            if (bbox) {
              const width = bbox[2] - bbox[0];
              const height = bbox[3] - bbox[1];
              const cliprect = this.svgFactory.createElement("svg:rect");
              cliprect.setAttributeNS(null, "x", bbox[0]);
              cliprect.setAttributeNS(null, "y", bbox[1]);
              cliprect.setAttributeNS(null, "width", pf(width));
              cliprect.setAttributeNS(null, "height", pf(height));
              this.current.element = cliprect;
              this.clip("nonzero");
              this.endPath();
            }
          }

          paintFormXObjectEnd() {}

          _initialize(viewport) {
            const svg = this.svgFactory.create(viewport.width, viewport.height);
            const definitions = this.svgFactory.createElement("svg:defs");
            svg.appendChild(definitions);
            this.defs = definitions;
            const rootGroup = this.svgFactory.createElement("svg:g");
            rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
            svg.appendChild(rootGroup);
            this.svg = rootGroup;
            return svg;
          }

          _ensureClipGroup() {
            if (!this.current.clipGroup) {
              const clipGroup = this.svgFactory.createElement("svg:g");
              clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
              this.svg.appendChild(clipGroup);
              this.current.clipGroup = clipGroup;
            }

            return this.current.clipGroup;
          }

          _ensureTransformGroup() {
            if (!this.tgrp) {
              this.tgrp = this.svgFactory.createElement("svg:g");
              this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));

              if (this.current.activeClipUrl) {
                this._ensureClipGroup().appendChild(this.tgrp);
              } else {
                this.svg.appendChild(this.tgrp);
              }
            }

            return this.tgrp;
          }

        };
      }

      /***/ }),
      /* 23 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.PDFNodeStream = void 0;

      var _util = __w_pdfjs_require__(2);

      var _network_utils = __w_pdfjs_require__(24);

      const fs = require$$1__default['default'];

      const http = require$$3__default['default'];

      const https = require$$4__default['default'];

      const url = require$$5__default['default'];

      const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;

      function parseUrl(sourceUrl) {
        const parsedUrl = url.parse(sourceUrl);

        if (parsedUrl.protocol === "file:" || parsedUrl.host) {
          return parsedUrl;
        }

        if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
          return url.parse(`file:///${sourceUrl}`);
        }

        if (!parsedUrl.host) {
          parsedUrl.protocol = "file:";
        }

        return parsedUrl;
      }

      class PDFNodeStream {
        constructor(source) {
          this.source = source;
          this.url = parseUrl(source.url);
          this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
          this.isFsUrl = this.url.protocol === "file:";
          this.httpHeaders = this.isHttp && source.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }

        getFullReader() {
          (0, _util.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
          this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
          return this._fullRequestReader;
        }

        getRangeReader(start, end) {
          if (end <= this._progressiveDataLength) {
            return null;
          }

          const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);

          this._rangeRequestReaders.push(rangeReader);

          return rangeReader;
        }

        cancelAllRequests(reason) {
          if (this._fullRequestReader) {
            this._fullRequestReader.cancel(reason);
          }

          const readers = this._rangeRequestReaders.slice(0);

          readers.forEach(function (reader) {
            reader.cancel(reason);
          });
        }

      }

      exports.PDFNodeStream = PDFNodeStream;

      class BaseFullReader {
        constructor(stream) {
          this._url = stream.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          const source = stream.source;
          this._contentLength = source.length;
          this._loaded = 0;
          this._filename = null;
          this._disableRange = source.disableRange || false;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          this._isStreamingSupported = !source.disableStream;
          this._isRangeSupported = !source.disableRange;
          this._readableStream = null;
          this._readCapability = (0, _util.createPromiseCapability)();
          this._headersCapability = (0, _util.createPromiseCapability)();
        }

        get headersReady() {
          return this._headersCapability.promise;
        }

        get filename() {
          return this._filename;
        }

        get contentLength() {
          return this._contentLength;
        }

        get isRangeSupported() {
          return this._isRangeSupported;
        }

        get isStreamingSupported() {
          return this._isStreamingSupported;
        }

        async read() {
          await this._readCapability.promise;

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          if (this._storedError) {
            throw this._storedError;
          }

          const chunk = this._readableStream.read();

          if (chunk === null) {
            this._readCapability = (0, _util.createPromiseCapability)();
            return this.read();
          }

          this._loaded += chunk.length;

          if (this.onProgress) {
            this.onProgress({
              loaded: this._loaded,
              total: this._contentLength
            });
          }

          const buffer = new Uint8Array(chunk).buffer;
          return {
            value: buffer,
            done: false
          };
        }

        cancel(reason) {
          if (!this._readableStream) {
            this._error(reason);

            return;
          }

          this._readableStream.destroy(reason);
        }

        _error(reason) {
          this._storedError = reason;

          this._readCapability.resolve();
        }

        _setReadableStream(readableStream) {
          this._readableStream = readableStream;
          readableStream.on("readable", () => {
            this._readCapability.resolve();
          });
          readableStream.on("end", () => {
            readableStream.destroy();
            this._done = true;

            this._readCapability.resolve();
          });
          readableStream.on("error", reason => {
            this._error(reason);
          });

          if (!this._isStreamingSupported && this._isRangeSupported) {
            this._error(new _util.AbortException("streaming is disabled"));
          }

          if (this._storedError) {
            this._readableStream.destroy(this._storedError);
          }
        }

      }

      class BaseRangeReader {
        constructor(stream) {
          this._url = stream.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          this._loaded = 0;
          this._readableStream = null;
          this._readCapability = (0, _util.createPromiseCapability)();
          const source = stream.source;
          this._isStreamingSupported = !source.disableStream;
        }

        get isStreamingSupported() {
          return this._isStreamingSupported;
        }

        async read() {
          await this._readCapability.promise;

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          if (this._storedError) {
            throw this._storedError;
          }

          const chunk = this._readableStream.read();

          if (chunk === null) {
            this._readCapability = (0, _util.createPromiseCapability)();
            return this.read();
          }

          this._loaded += chunk.length;

          if (this.onProgress) {
            this.onProgress({
              loaded: this._loaded
            });
          }

          const buffer = new Uint8Array(chunk).buffer;
          return {
            value: buffer,
            done: false
          };
        }

        cancel(reason) {
          if (!this._readableStream) {
            this._error(reason);

            return;
          }

          this._readableStream.destroy(reason);
        }

        _error(reason) {
          this._storedError = reason;

          this._readCapability.resolve();
        }

        _setReadableStream(readableStream) {
          this._readableStream = readableStream;
          readableStream.on("readable", () => {
            this._readCapability.resolve();
          });
          readableStream.on("end", () => {
            readableStream.destroy();
            this._done = true;

            this._readCapability.resolve();
          });
          readableStream.on("error", reason => {
            this._error(reason);
          });

          if (this._storedError) {
            this._readableStream.destroy(this._storedError);
          }
        }

      }

      function createRequestOptions(parsedUrl, headers) {
        return {
          protocol: parsedUrl.protocol,
          auth: parsedUrl.auth,
          host: parsedUrl.hostname,
          port: parsedUrl.port,
          path: parsedUrl.path,
          method: "GET",
          headers
        };
      }

      class PDFNodeStreamFullReader extends BaseFullReader {
        constructor(stream) {
          super(stream);

          const handleResponse = response => {
            if (response.statusCode === 404) {
              const error = new _util.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = error;

              this._headersCapability.reject(error);

              return;
            }

            this._headersCapability.resolve();

            this._setReadableStream(response);

            const getResponseHeader = name => {
              return this._readableStream.headers[name.toLowerCase()];
            };

            const {
              allowRangeRequests,
              suggestedLength
            } = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader,
              isHttp: stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = allowRangeRequests;
            this._contentLength = suggestedLength || this._contentLength;
            this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
          };

          this._request = null;

          if (this._url.protocol === "http:") {
            this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
          } else {
            this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
          }

          this._request.on("error", reason => {
            this._storedError = reason;

            this._headersCapability.reject(reason);
          });

          this._request.end();
        }

      }

      class PDFNodeStreamRangeReader extends BaseRangeReader {
        constructor(stream, start, end) {
          super(stream);
          this._httpHeaders = {};

          for (const property in stream.httpHeaders) {
            const value = stream.httpHeaders[property];

            if (typeof value === "undefined") {
              continue;
            }

            this._httpHeaders[property] = value;
          }

          this._httpHeaders.Range = `bytes=${start}-${end - 1}`;

          const handleResponse = response => {
            if (response.statusCode === 404) {
              const error = new _util.MissingPDFException(`Missing PDF "${this._url}".`);
              this._storedError = error;
              return;
            }

            this._setReadableStream(response);
          };

          this._request = null;

          if (this._url.protocol === "http:") {
            this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
          } else {
            this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
          }

          this._request.on("error", reason => {
            this._storedError = reason;
          });

          this._request.end();
        }

      }

      class PDFNodeStreamFsFullReader extends BaseFullReader {
        constructor(stream) {
          super(stream);
          let path = decodeURIComponent(this._url.path);

          if (fileUriRegex.test(this._url.href)) {
            path = path.replace(/^\//, "");
          }

          fs.lstat(path, (error, stat) => {
            if (error) {
              if (error.code === "ENOENT") {
                error = new _util.MissingPDFException(`Missing PDF "${path}".`);
              }

              this._storedError = error;

              this._headersCapability.reject(error);

              return;
            }

            this._contentLength = stat.size;

            this._setReadableStream(fs.createReadStream(path));

            this._headersCapability.resolve();
          });
        }

      }

      class PDFNodeStreamFsRangeReader extends BaseRangeReader {
        constructor(stream, start, end) {
          super(stream);
          let path = decodeURIComponent(this._url.path);

          if (fileUriRegex.test(this._url.href)) {
            path = path.replace(/^\//, "");
          }

          this._setReadableStream(fs.createReadStream(path, {
            start,
            end: end - 1
          }));
        }

      }

      /***/ }),
      /* 24 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.createResponseStatusError = createResponseStatusError;
      exports.extractFilenameFromHeader = extractFilenameFromHeader;
      exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
      exports.validateResponseStatus = validateResponseStatus;

      var _util = __w_pdfjs_require__(2);

      var _content_disposition = __w_pdfjs_require__(25);

      function validateRangeRequestCapabilities({
        getResponseHeader,
        isHttp,
        rangeChunkSize,
        disableRange
      }) {
        (0, _util.assert)(rangeChunkSize > 0, "Range chunk size must be larger than zero");
        const returnValues = {
          allowRangeRequests: false,
          suggestedLength: undefined
        };
        const length = parseInt(getResponseHeader("Content-Length"), 10);

        if (!Number.isInteger(length)) {
          return returnValues;
        }

        returnValues.suggestedLength = length;

        if (length <= 2 * rangeChunkSize) {
          return returnValues;
        }

        if (disableRange || !isHttp) {
          return returnValues;
        }

        if (getResponseHeader("Accept-Ranges") !== "bytes") {
          return returnValues;
        }

        const contentEncoding = getResponseHeader("Content-Encoding") || "identity";

        if (contentEncoding !== "identity") {
          return returnValues;
        }

        returnValues.allowRangeRequests = true;
        return returnValues;
      }

      function extractFilenameFromHeader(getResponseHeader) {
        const contentDisposition = getResponseHeader("Content-Disposition");

        if (contentDisposition) {
          let filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);

          if (filename.includes("%")) {
            try {
              filename = decodeURIComponent(filename);
            } catch (ex) {}
          }

          if (/\.pdf$/i.test(filename)) {
            return filename;
          }
        }

        return null;
      }

      function createResponseStatusError(status, url) {
        if (status === 404 || status === 0 && url.startsWith("file:")) {
          return new _util.MissingPDFException('Missing PDF "' + url + '".');
        }

        return new _util.UnexpectedResponseException("Unexpected server response (" + status + ') while retrieving PDF "' + url + '".', status);
      }

      function validateResponseStatus(status) {
        return status === 200 || status === 206;
      }

      /***/ }),
      /* 25 */
      /***/ ((__unused_webpack_module, exports) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

      function getFilenameFromContentDispositionHeader(contentDisposition) {
        let needsEncodingFixup = true;
        let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);

        if (tmp) {
          tmp = tmp[1];
          let filename = rfc2616unquote(tmp);
          filename = unescape(filename);
          filename = rfc5987decode(filename);
          filename = rfc2047decode(filename);
          return fixupEncoding(filename);
        }

        tmp = rfc2231getparam(contentDisposition);

        if (tmp) {
          const filename = rfc2047decode(tmp);
          return fixupEncoding(filename);
        }

        tmp = toParamRegExp("filename", "i").exec(contentDisposition);

        if (tmp) {
          tmp = tmp[1];
          let filename = rfc2616unquote(tmp);
          filename = rfc2047decode(filename);
          return fixupEncoding(filename);
        }

        function toParamRegExp(attributePattern, flags) {
          return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
        }

        function textdecode(encoding, value) {
          if (encoding) {
            if (!/^[\x00-\xFF]+$/.test(value)) {
              return value;
            }

            try {
              const decoder = new TextDecoder(encoding, {
                fatal: true
              });
              const bytes = Array.from(value, function (ch) {
                return ch.charCodeAt(0) & 0xff;
              });
              value = decoder.decode(new Uint8Array(bytes));
              needsEncodingFixup = false;
            } catch (e) {
              if (/^utf-?8$/i.test(encoding)) {
                try {
                  value = decodeURIComponent(escape(value));
                  needsEncodingFixup = false;
                } catch (err) {}
              }
            }
          }

          return value;
        }

        function fixupEncoding(value) {
          if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
            value = textdecode("utf-8", value);

            if (needsEncodingFixup) {
              value = textdecode("iso-8859-1", value);
            }
          }

          return value;
        }

        function rfc2231getparam(contentDispositionStr) {
          const matches = [];
          let match;
          const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");

          while ((match = iter.exec(contentDispositionStr)) !== null) {
            let [, n, quot, part] = match;
            n = parseInt(n, 10);

            if (n in matches) {
              if (n === 0) {
                break;
              }

              continue;
            }

            matches[n] = [quot, part];
          }

          const parts = [];

          for (let n = 0; n < matches.length; ++n) {
            if (!(n in matches)) {
              break;
            }

            let [quot, part] = matches[n];
            part = rfc2616unquote(part);

            if (quot) {
              part = unescape(part);

              if (n === 0) {
                part = rfc5987decode(part);
              }
            }

            parts.push(part);
          }

          return parts.join("");
        }

        function rfc2616unquote(value) {
          if (value.startsWith('"')) {
            const parts = value.slice(1).split('\\"');

            for (let i = 0; i < parts.length; ++i) {
              const quotindex = parts[i].indexOf('"');

              if (quotindex !== -1) {
                parts[i] = parts[i].slice(0, quotindex);
                parts.length = i + 1;
              }

              parts[i] = parts[i].replace(/\\(.)/g, "$1");
            }

            value = parts.join('"');
          }

          return value;
        }

        function rfc5987decode(extvalue) {
          const encodingend = extvalue.indexOf("'");

          if (encodingend === -1) {
            return extvalue;
          }

          const encoding = extvalue.slice(0, encodingend);
          const langvalue = extvalue.slice(encodingend + 1);
          const value = langvalue.replace(/^[^']*'/, "");
          return textdecode(encoding, value);
        }

        function rfc2047decode(value) {
          if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
            return value;
          }

          return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (matches, charset, encoding, text) {
            if (encoding === "q" || encoding === "Q") {
              text = text.replace(/_/g, " ");
              text = text.replace(/=([0-9a-fA-F]{2})/g, function (match, hex) {
                return String.fromCharCode(parseInt(hex, 16));
              });
              return textdecode(charset, text);
            }

            try {
              text = atob(text);
            } catch (e) {}

            return textdecode(charset, text);
          });
        }

        return "";
      }

      /***/ }),
      /* 26 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.PDFNetworkStream = void 0;

      var _util = __w_pdfjs_require__(2);

      var _network_utils = __w_pdfjs_require__(24);
      const OK_RESPONSE = 200;
      const PARTIAL_CONTENT_RESPONSE = 206;

      function getArrayBuffer(xhr) {
        const data = xhr.response;

        if (typeof data !== "string") {
          return data;
        }

        const array = (0, _util.stringToBytes)(data);
        return array.buffer;
      }

      class NetworkManager {
        constructor(url, args) {
          this.url = url;
          args = args || {};
          this.isHttp = /^https?:/i.test(url);
          this.httpHeaders = this.isHttp && args.httpHeaders || {};
          this.withCredentials = args.withCredentials || false;

          this.getXhr = args.getXhr || function NetworkManager_getXhr() {
            return new XMLHttpRequest();
          };

          this.currXhrId = 0;
          this.pendingRequests = Object.create(null);
        }

        requestRange(begin, end, listeners) {
          const args = {
            begin,
            end
          };

          for (const prop in listeners) {
            args[prop] = listeners[prop];
          }

          return this.request(args);
        }

        requestFull(listeners) {
          return this.request(listeners);
        }

        request(args) {
          const xhr = this.getXhr();
          const xhrId = this.currXhrId++;
          const pendingRequest = this.pendingRequests[xhrId] = {
            xhr
          };
          xhr.open("GET", this.url);
          xhr.withCredentials = this.withCredentials;

          for (const property in this.httpHeaders) {
            const value = this.httpHeaders[property];

            if (typeof value === "undefined") {
              continue;
            }

            xhr.setRequestHeader(property, value);
          }

          if (this.isHttp && "begin" in args && "end" in args) {
            xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
            pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
          } else {
            pendingRequest.expectedStatus = OK_RESPONSE;
          }

          xhr.responseType = "arraybuffer";

          if (args.onError) {
            xhr.onerror = function (evt) {
              args.onError(xhr.status);
            };
          }

          xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
          xhr.onprogress = this.onProgress.bind(this, xhrId);
          pendingRequest.onHeadersReceived = args.onHeadersReceived;
          pendingRequest.onDone = args.onDone;
          pendingRequest.onError = args.onError;
          pendingRequest.onProgress = args.onProgress;
          xhr.send(null);
          return xhrId;
        }

        onProgress(xhrId, evt) {
          const pendingRequest = this.pendingRequests[xhrId];

          if (!pendingRequest) {
            return;
          }

          if (pendingRequest.onProgress) {
            pendingRequest.onProgress(evt);
          }
        }

        onStateChange(xhrId, evt) {
          const pendingRequest = this.pendingRequests[xhrId];

          if (!pendingRequest) {
            return;
          }

          const xhr = pendingRequest.xhr;

          if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
            pendingRequest.onHeadersReceived();
            delete pendingRequest.onHeadersReceived;
          }

          if (xhr.readyState !== 4) {
            return;
          }

          if (!(xhrId in this.pendingRequests)) {
            return;
          }

          delete this.pendingRequests[xhrId];

          if (xhr.status === 0 && this.isHttp) {
            if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }

            return;
          }

          const xhrStatus = xhr.status || OK_RESPONSE;
          const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

          if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
            if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }

            return;
          }

          const chunk = getArrayBuffer(xhr);

          if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
            const rangeHeader = xhr.getResponseHeader("Content-Range");
            const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
            pendingRequest.onDone({
              begin: parseInt(matches[1], 10),
              chunk
            });
          } else if (chunk) {
            pendingRequest.onDone({
              begin: 0,
              chunk
            });
          } else if (pendingRequest.onError) {
            pendingRequest.onError(xhr.status);
          }
        }

        getRequestXhr(xhrId) {
          return this.pendingRequests[xhrId].xhr;
        }

        isPendingRequest(xhrId) {
          return xhrId in this.pendingRequests;
        }

        abortRequest(xhrId) {
          const xhr = this.pendingRequests[xhrId].xhr;
          delete this.pendingRequests[xhrId];
          xhr.abort();
        }

      }

      class PDFNetworkStream {
        constructor(source) {
          this._source = source;
          this._manager = new NetworkManager(source.url, {
            httpHeaders: source.httpHeaders,
            withCredentials: source.withCredentials
          });
          this._rangeChunkSize = source.rangeChunkSize;
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        _onRangeRequestReaderClosed(reader) {
          const i = this._rangeRequestReaders.indexOf(reader);

          if (i >= 0) {
            this._rangeRequestReaders.splice(i, 1);
          }
        }

        getFullReader() {
          (0, _util.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
          this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
          return this._fullRequestReader;
        }

        getRangeReader(begin, end) {
          const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
          reader.onClosed = this._onRangeRequestReaderClosed.bind(this);

          this._rangeRequestReaders.push(reader);

          return reader;
        }

        cancelAllRequests(reason) {
          if (this._fullRequestReader) {
            this._fullRequestReader.cancel(reason);
          }

          const readers = this._rangeRequestReaders.slice(0);

          readers.forEach(function (reader) {
            reader.cancel(reason);
          });
        }

      }

      exports.PDFNetworkStream = PDFNetworkStream;

      class PDFNetworkStreamFullRequestReader {
        constructor(manager, source) {
          this._manager = manager;
          const args = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = source.url;
          this._fullRequestId = manager.requestFull(args);
          this._headersReceivedCapability = (0, _util.createPromiseCapability)();
          this._disableRange = source.disableRange || false;
          this._contentLength = source.length;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          this._isStreamingSupported = false;
          this._isRangeSupported = false;
          this._cachedChunks = [];
          this._requests = [];
          this._done = false;
          this._storedError = undefined;
          this._filename = null;
          this.onProgress = null;
        }

        _onHeadersReceived() {
          const fullRequestXhrId = this._fullRequestId;

          const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

          const getResponseHeader = name => {
            return fullRequestXhr.getResponseHeader(name);
          };

          const {
            allowRangeRequests,
            suggestedLength
          } = (0, _network_utils.validateRangeRequestCapabilities)({
            getResponseHeader,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
          });

          if (allowRangeRequests) {
            this._isRangeSupported = true;
          }

          this._contentLength = suggestedLength || this._contentLength;
          this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

          if (this._isRangeSupported) {
            this._manager.abortRequest(fullRequestXhrId);
          }

          this._headersReceivedCapability.resolve();
        }

        _onDone(args) {
          if (args) {
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();

              requestCapability.resolve({
                value: args.chunk,
                done: false
              });
            } else {
              this._cachedChunks.push(args.chunk);
            }
          }

          this._done = true;

          if (this._cachedChunks.length > 0) {
            return;
          }

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];
        }

        _onError(status) {
          const url = this._url;
          const exception = (0, _network_utils.createResponseStatusError)(status, url);
          this._storedError = exception;

          this._headersReceivedCapability.reject(exception);

          this._requests.forEach(function (requestCapability) {
            requestCapability.reject(exception);
          });

          this._requests = [];
          this._cachedChunks = [];
        }

        _onProgress(data) {
          if (this.onProgress) {
            this.onProgress({
              loaded: data.loaded,
              total: data.lengthComputable ? data.total : this._contentLength
            });
          }
        }

        get filename() {
          return this._filename;
        }

        get isRangeSupported() {
          return this._isRangeSupported;
        }

        get isStreamingSupported() {
          return this._isStreamingSupported;
        }

        get contentLength() {
          return this._contentLength;
        }

        get headersReady() {
          return this._headersReceivedCapability.promise;
        }

        async read() {
          if (this._storedError) {
            throw this._storedError;
          }

          if (this._cachedChunks.length > 0) {
            const chunk = this._cachedChunks.shift();

            return {
              value: chunk,
              done: false
            };
          }

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          const requestCapability = (0, _util.createPromiseCapability)();

          this._requests.push(requestCapability);

          return requestCapability.promise;
        }

        cancel(reason) {
          this._done = true;

          this._headersReceivedCapability.reject(reason);

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];

          if (this._manager.isPendingRequest(this._fullRequestId)) {
            this._manager.abortRequest(this._fullRequestId);
          }

          this._fullRequestReader = null;
        }

      }

      class PDFNetworkStreamRangeRequestReader {
        constructor(manager, begin, end) {
          this._manager = manager;
          const args = {
            onDone: this._onDone.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._requestId = manager.requestRange(begin, end, args);
          this._requests = [];
          this._queuedChunk = null;
          this._done = false;
          this.onProgress = null;
          this.onClosed = null;
        }

        _close() {
          if (this.onClosed) {
            this.onClosed(this);
          }
        }

        _onDone(data) {
          const chunk = data.chunk;

          if (this._requests.length > 0) {
            const requestCapability = this._requests.shift();

            requestCapability.resolve({
              value: chunk,
              done: false
            });
          } else {
            this._queuedChunk = chunk;
          }

          this._done = true;

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];

          this._close();
        }

        _onProgress(evt) {
          if (!this.isStreamingSupported && this.onProgress) {
            this.onProgress({
              loaded: evt.loaded
            });
          }
        }

        get isStreamingSupported() {
          return false;
        }

        async read() {
          if (this._queuedChunk !== null) {
            const chunk = this._queuedChunk;
            this._queuedChunk = null;
            return {
              value: chunk,
              done: false
            };
          }

          if (this._done) {
            return {
              value: undefined,
              done: true
            };
          }

          const requestCapability = (0, _util.createPromiseCapability)();

          this._requests.push(requestCapability);

          return requestCapability.promise;
        }

        cancel(reason) {
          this._done = true;

          this._requests.forEach(function (requestCapability) {
            requestCapability.resolve({
              value: undefined,
              done: true
            });
          });

          this._requests = [];

          if (this._manager.isPendingRequest(this._requestId)) {
            this._manager.abortRequest(this._requestId);
          }

          this._close();
        }

      }

      /***/ }),
      /* 27 */
      /***/ ((__unused_webpack_module, exports, __w_pdfjs_require__) => {



      Object.defineProperty(exports, "__esModule", ({
        value: true
      }));
      exports.PDFFetchStream = void 0;

      var _util = __w_pdfjs_require__(2);

      var _network_utils = __w_pdfjs_require__(24);

      function createFetchOptions(headers, withCredentials, abortController) {
        return {
          method: "GET",
          headers,
          signal: abortController?.signal,
          mode: "cors",
          credentials: withCredentials ? "include" : "same-origin",
          redirect: "follow"
        };
      }

      function createHeaders(httpHeaders) {
        const headers = new Headers();

        for (const property in httpHeaders) {
          const value = httpHeaders[property];

          if (typeof value === "undefined") {
            continue;
          }

          headers.append(property, value);
        }

        return headers;
      }

      class PDFFetchStream {
        constructor(source) {
          this.source = source;
          this.isHttp = /^https?:/i.test(source.url);
          this.httpHeaders = this.isHttp && source.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }

        getFullReader() {
          (0, _util.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
          this._fullRequestReader = new PDFFetchStreamReader(this);
          return this._fullRequestReader;
        }

        getRangeReader(begin, end) {
          if (end <= this._progressiveDataLength) {
            return null;
          }

          const reader = new PDFFetchStreamRangeReader(this, begin, end);

          this._rangeRequestReaders.push(reader);

          return reader;
        }

        cancelAllRequests(reason) {
          if (this._fullRequestReader) {
            this._fullRequestReader.cancel(reason);
          }

          const readers = this._rangeRequestReaders.slice(0);

          readers.forEach(function (reader) {
            reader.cancel(reason);
          });
        }

      }

      exports.PDFFetchStream = PDFFetchStream;

      class PDFFetchStreamReader {
        constructor(stream) {
          this._stream = stream;
          this._reader = null;
          this._loaded = 0;
          this._filename = null;
          const source = stream.source;
          this._withCredentials = source.withCredentials || false;
          this._contentLength = source.length;
          this._headersCapability = (0, _util.createPromiseCapability)();
          this._disableRange = source.disableRange || false;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          if (typeof AbortController !== "undefined") {
            this._abortController = new AbortController();
          }

          this._isStreamingSupported = !source.disableStream;
          this._isRangeSupported = !source.disableRange;
          this._headers = createHeaders(this._stream.httpHeaders);
          const url = source.url;
          fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
            if (!(0, _network_utils.validateResponseStatus)(response.status)) {
              throw (0, _network_utils.createResponseStatusError)(response.status, url);
            }

            this._reader = response.body.getReader();

            this._headersCapability.resolve();

            const getResponseHeader = name => {
              return response.headers.get(name);
            };

            const {
              allowRangeRequests,
              suggestedLength
            } = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = allowRangeRequests;
            this._contentLength = suggestedLength || this._contentLength;
            this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

            if (!this._isStreamingSupported && this._isRangeSupported) {
              this.cancel(new _util.AbortException("Streaming is disabled."));
            }
          }).catch(this._headersCapability.reject);
          this.onProgress = null;
        }

        get headersReady() {
          return this._headersCapability.promise;
        }

        get filename() {
          return this._filename;
        }

        get contentLength() {
          return this._contentLength;
        }

        get isRangeSupported() {
          return this._isRangeSupported;
        }

        get isStreamingSupported() {
          return this._isStreamingSupported;
        }

        async read() {
          await this._headersCapability.promise;
          const {
            value,
            done
          } = await this._reader.read();

          if (done) {
            return {
              value,
              done
            };
          }

          this._loaded += value.byteLength;

          if (this.onProgress) {
            this.onProgress({
              loaded: this._loaded,
              total: this._contentLength
            });
          }

          const buffer = new Uint8Array(value).buffer;
          return {
            value: buffer,
            done: false
          };
        }

        cancel(reason) {
          if (this._reader) {
            this._reader.cancel(reason);
          }

          if (this._abortController) {
            this._abortController.abort();
          }
        }

      }

      class PDFFetchStreamRangeReader {
        constructor(stream, begin, end) {
          this._stream = stream;
          this._reader = null;
          this._loaded = 0;
          const source = stream.source;
          this._withCredentials = source.withCredentials || false;
          this._readCapability = (0, _util.createPromiseCapability)();
          this._isStreamingSupported = !source.disableStream;

          if (typeof AbortController !== "undefined") {
            this._abortController = new AbortController();
          }

          this._headers = createHeaders(this._stream.httpHeaders);

          this._headers.append("Range", `bytes=${begin}-${end - 1}`);

          const url = source.url;
          fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(response => {
            if (!(0, _network_utils.validateResponseStatus)(response.status)) {
              throw (0, _network_utils.createResponseStatusError)(response.status, url);
            }

            this._readCapability.resolve();

            this._reader = response.body.getReader();
          }).catch(reason => {
            if (reason?.name === "AbortError") {
              return;
            }

            throw reason;
          });
          this.onProgress = null;
        }

        get isStreamingSupported() {
          return this._isStreamingSupported;
        }

        async read() {
          await this._readCapability.promise;
          const {
            value,
            done
          } = await this._reader.read();

          if (done) {
            return {
              value,
              done
            };
          }

          this._loaded += value.byteLength;

          if (this.onProgress) {
            this.onProgress({
              loaded: this._loaded
            });
          }

          const buffer = new Uint8Array(value).buffer;
          return {
            value: buffer,
            done: false
          };
        }

        cancel(reason) {
          if (this._reader) {
            this._reader.cancel(reason);
          }

          if (this._abortController) {
            this._abortController.abort();
          }
        }

      }

      /***/ })
      /******/ 	]);
      /************************************************************************/
      /******/ 	// The module cache
      /******/ 	var __webpack_module_cache__ = {};
      /******/ 	
      /******/ 	// The require function
      /******/ 	function __w_pdfjs_require__(moduleId) {
      /******/ 		// Check if module is in cache
      /******/ 		if(__webpack_module_cache__[moduleId]) {
      /******/ 			return __webpack_module_cache__[moduleId].exports;
      /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = __webpack_module_cache__[moduleId] = {
      /******/ 			// no module.id needed
      /******/ 			// no module.loaded needed
      /******/ 			exports: {}
      /******/ 		};
      /******/ 	
      /******/ 		// Execute the module function
      /******/ 		__webpack_modules__[moduleId](module, module.exports, __w_pdfjs_require__);
      /******/ 	
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
      /******/ 	
      /************************************************************************/
      /******/ 	// module exports must be returned from runtime so entry inlining is disabled
      /******/ 	// startup
      /******/ 	// Load entry module and return exports
      /******/ 	return __w_pdfjs_require__(0);
      /******/ })()
      ;
      });
      //# sourceMappingURL=pdf.js.map
      });

      class PDF {
          constructor(){
          }
          
          static fromUrl(url){
              return pdf.getDocument(url).promise
          }
      }

      /* Copyright 2012 Mozilla Foundation
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      let renderTextLayer = pdf.renderTextLayer;
      const EXPAND_DIVS_TIMEOUT = 300; // ms

      /**
       * @typedef {Object} TextLayerBuilderOptions
       * @property {HTMLDivElement} textLayerDiv - The text layer container.
       * @property {EventBus} eventBus - The application event bus.
       * @property {number} pageIndex - The page index.
       * @property {PageViewport} viewport - The viewport of the text layer.
       * @property {PDFFindController} findController
       * @property {boolean} enhanceTextSelection - Option to turn on improved
       *   text selection.
       */

      /**
       * The text layer builder provides text selection functionality for the PDF.
       * It does this by creating overlay divs over the PDF's text. These divs
       * contain text that matches the PDF text they are overlaying. This object
       * also provides a way to highlight text that is being searched for.
       */
      class TextLayerBuilder {
        constructor({
          textLayerDiv,
          eventBus,
          pageIndex,
          viewport,
          findController = null,
          enhanceTextSelection = false,
        }) {
          this.textLayerDiv = textLayerDiv;
          this.eventBus = eventBus;
          this.textContent = null;
          this.textContentItemsStr = [];
          this.textContentStream = null;
          this.renderingDone = false;
          this.pageIdx = pageIndex;
          this.pageNumber = this.pageIdx + 1;
          this.matches = [];
          this.viewport = viewport;
          this.textDivs = [];
          this.findController = findController;
          this.textLayerRenderTask = null;
          this.enhanceTextSelection = enhanceTextSelection;

          this._onUpdateTextLayerMatches = null;
          this._bindMouse();
        }

        /**
         * @private
         */
        _finishRendering() {
          this.renderingDone = true;

          if (!this.enhanceTextSelection) {
            const endOfContent = document.createElement("div");
            endOfContent.className = "endOfContent";
            this.textLayerDiv.appendChild(endOfContent);
          }

          //this.eventBus.dispatch("textlayerrendered", {
            //source: this,
            //pageNumber: this.pageNumber,
            //numTextDivs: this.textDivs.length,
          //});
        }

        /**
         * Renders the text layer.
         *
         * @param {number} [timeout] - Wait for a specified amount of milliseconds
         *                             before rendering.
         */
        render(timeout = 0) {
          if (!(this.textContent || this.textContentStream) || this.renderingDone) {
            return;
          }
          this.cancel();

          this.textDivs = [];
          const textLayerFrag = document.createDocumentFragment();
          this.textLayerRenderTask = renderTextLayer({
            textContent: this.textContent,
            textContentStream: this.textContentStream,
            container: textLayerFrag,
            viewport: this.viewport,
            textDivs: this.textDivs,
            textContentItemsStr: this.textContentItemsStr,
            timeout,
            enhanceTextSelection: this.enhanceTextSelection,
          });
          this.textLayerRenderTask.promise.then(
            () => {
              this.textLayerDiv.appendChild(textLayerFrag);
              this._finishRendering();
              this._updateMatches();
            },
            function (reason) {
              // Cancelled or failed to render text layer; skipping errors.
            }
          );

          if (!this._onUpdateTextLayerMatches) {
            this._onUpdateTextLayerMatches = evt => {
              if (evt.pageIndex === this.pageIdx || evt.pageIndex === -1) {
                this._updateMatches();
              }
            };
            //this.eventBus._on(
              //"updatetextlayermatches",
              //this._onUpdateTextLayerMatches
            //);
          }
        }

        /**
         * Cancel rendering of the text layer.
         */
        cancel() {
          if (this.textLayerRenderTask) {
            this.textLayerRenderTask.cancel();
            this.textLayerRenderTask = null;
          }
          if (this._onUpdateTextLayerMatches) {
            //this.eventBus._off(
              //"updatetextlayermatches",
              //this._onUpdateTextLayerMatches
            //);
            this._onUpdateTextLayerMatches = null;
          }
        }

        setTextContentStream(readableStream) {
          this.cancel();
          this.textContentStream = readableStream;
        }

        setTextContent(textContent) {
          this.cancel();
          this.textContent = textContent;
        }

        _convertMatches(matches, matchesLength) {
          // Early exit if there is nothing to convert.
          if (!matches) {
            return [];
          }
          const { textContentItemsStr } = this;

          let i = 0,
            iIndex = 0;
          const end = textContentItemsStr.length - 1;
          const result = [];

          for (let m = 0, mm = matches.length; m < mm; m++) {
            // Calculate the start position.
            let matchIdx = matches[m];

            // Loop over the divIdxs.
            while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length;
              i++;
            }

            if (i === textContentItemsStr.length) {
              console.error("Could not find a matching mapping");
            }

            const match = {
              begin: {
                divIdx: i,
                offset: matchIdx - iIndex,
              },
            };

            // Calculate the end position.
            matchIdx += matchesLength[m];

            // Somewhat the same array as above, but use > instead of >= to get
            // the end position right.
            while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
              iIndex += textContentItemsStr[i].length;
              i++;
            }

            match.end = {
              divIdx: i,
              offset: matchIdx - iIndex,
            };
            result.push(match);
          }
          return result;
        }

        _renderMatches(matches) {
          // Early exit if there is nothing to render.
          if (matches.length === 0) {
            return;
          }
          const { findController, pageIdx, textContentItemsStr, textDivs } = this;

          const isSelectedPage = pageIdx === findController.selected.pageIdx;
          const selectedMatchIdx = findController.selected.matchIdx;
          const highlightAll = findController.state.highlightAll;
          let prevEnd = null;
          const infinity = {
            divIdx: -1,
            offset: undefined,
          };

          function beginText(begin, className) {
            const divIdx = begin.divIdx;
            textDivs[divIdx].textContent = "";
            appendTextToDiv(divIdx, 0, begin.offset, className);
          }

          function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
            const div = textDivs[divIdx];
            const content = textContentItemsStr[divIdx].substring(
              fromOffset,
              toOffset
            );
            const node = document.createTextNode(content);
            if (className) {
              const span = document.createElement("span");
              span.className = className;
              span.appendChild(node);
              div.appendChild(span);
              return;
            }
            div.appendChild(node);
          }

          let i0 = selectedMatchIdx,
            i1 = i0 + 1;
          if (highlightAll) {
            i0 = 0;
            i1 = matches.length;
          } else if (!isSelectedPage) {
            // Not highlighting all and this isn't the selected page, so do nothing.
            return;
          }

          for (let i = i0; i < i1; i++) {
            const match = matches[i];
            const begin = match.begin;
            const end = match.end;
            const isSelected = isSelectedPage && i === selectedMatchIdx;
            const highlightSuffix = isSelected ? " selected" : "";

            if (isSelected) {
              // Attempt to scroll the selected match into view.
              findController.scrollMatchIntoView({
                element: textDivs[begin.divIdx],
                pageIndex: pageIdx,
                matchIndex: selectedMatchIdx,
              });
            }

            // Match inside new div.
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
              // If there was a previous div, then add the text at the end.
              if (prevEnd !== null) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
              }
              // Clear the divs and set the content until the starting point.
              beginText(begin);
            } else {
              appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
            }

            if (begin.divIdx === end.divIdx) {
              appendTextToDiv(
                begin.divIdx,
                begin.offset,
                end.offset,
                "highlight" + highlightSuffix
              );
            } else {
              appendTextToDiv(
                begin.divIdx,
                begin.offset,
                infinity.offset,
                "highlight begin" + highlightSuffix
              );
              for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                textDivs[n0].className = "highlight middle" + highlightSuffix;
              }
              beginText(end, "highlight end" + highlightSuffix);
            }
            prevEnd = end;
          }

          if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
          }
        }

        _updateMatches() {
          // Only show matches when all rendering is done.
          if (!this.renderingDone) {
            return;
          }
          const {
            findController,
            matches,
            pageIdx,
            textContentItemsStr,
            textDivs,
          } = this;
          let clearedUntilDivIdx = -1;

          // Clear all current matches.
          for (let i = 0, ii = matches.length; i < ii; i++) {
            const match = matches[i];
            const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
            for (let n = begin, end = match.end.divIdx; n <= end; n++) {
              const div = textDivs[n];
              div.textContent = textContentItemsStr[n];
              div.className = "";
            }
            clearedUntilDivIdx = match.end.divIdx + 1;
          }

          if (!findController?.highlightMatches) {
            return;
          }
          // Convert the matches on the `findController` into the match format
          // used for the textLayer.
          const pageMatches = findController.pageMatches[pageIdx] || null;
          const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;

          this.matches = this._convertMatches(pageMatches, pageMatchesLength);
          this._renderMatches(this.matches);
        }

        /**
         * Improves text selection by adding an additional div where the mouse was
         * clicked. This reduces flickering of the content if the mouse is slowly
         * dragged up or down.
         *
         * @private
         */
        _bindMouse() {
          const div = this.textLayerDiv;
          let expandDivsTimer = null;

          div.addEventListener("mousedown", evt => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
              this.textLayerRenderTask.expandTextDivs(true);
              if (
                (typeof PDFJSDev === "undefined" || !PDFJSDev.test("MOZCENTRAL")) &&
                expandDivsTimer
              ) {
                clearTimeout(expandDivsTimer);
                expandDivsTimer = null;
              }
              return;
            }

            const end = div.querySelector(".endOfContent");
            if (!end) {
              return;
            }
            if (typeof PDFJSDev === "undefined" || !PDFJSDev.test("MOZCENTRAL")) {
              // On non-Firefox browsers, the selection will feel better if the height
              // of the `endOfContent` div is adjusted to start at mouse click
              // location. This avoids flickering when the selection moves up.
              // However it does not work when selection is started on empty space.
              let adjustTop = evt.target !== div;
              if (typeof PDFJSDev === "undefined" || PDFJSDev.test("GENERIC")) {
                adjustTop =
                  adjustTop &&
                  window
                    .getComputedStyle(end)
                    .getPropertyValue("-moz-user-select") !== "none";
              }
              if (adjustTop) {
                const divBounds = div.getBoundingClientRect();
                const r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
                end.style.top = (r * 100).toFixed(2) + "%";
              }
            }
            end.classList.add("active");
          });

          div.addEventListener("mouseup", () => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
              if (typeof PDFJSDev === "undefined" || !PDFJSDev.test("MOZCENTRAL")) {
                expandDivsTimer = setTimeout(() => {
                  if (this.textLayerRenderTask) {
                    this.textLayerRenderTask.expandTextDivs(false);
                  }
                  expandDivsTimer = null;
                }, EXPAND_DIVS_TIMEOUT);
              } else {
                this.textLayerRenderTask.expandTextDivs(false);
              }
              return;
            }

            const end = div.querySelector(".endOfContent");
            if (!end) {
              return;
            }
            if (typeof PDFJSDev === "undefined" || !PDFJSDev.test("MOZCENTRAL")) {
              end.style.top = "";
            }
            end.classList.remove("active");
          });
        }
      }

      //var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

      // Loaded via <script> tag, create shortcut to access PDF.js exports.

      // The workerSrc property shall be specified.

      let resolution = 4;

      class PDFViewer extends q$2 {
          constructor(element){
              super();
              this.as(element);
              this.scale = 1;

              this.createEvents('load', 'render');
              
              this.css(`
            transform-origin top
            transition all .08s ease
        `
              );
          }

          set scale(n){
              this._scale = Math.min(Math.max(0.3, n), 3);
              this.scaleTo(this._scale);
          }
          
          get scale(){
              return this._scale
          }

          scaleTo(value){
              this.element.css(`transform scale(${value})`);
          }

          scaleUp(){
              this.scale += 0.05;
          }
          
          scaleDown(){
              this.scale -= 0.05;
          }


          loadFromUrl(url){
              return this.load(PDF.fromUrl(url))
          }
          
          createPage(pageIndex){
              return new Promise(resolve => {
                  this.pdf.getPage(pageIndex)
                      .then(page => {
                          var viewport = page.getViewport({ scale: resolution });
                          var pageDiv = j$2(`div.#page-${page._pageIndex+1}`)
                                          .css("position: relative");
                                    //.appendTo(this)

                          var canvas = j$2("canvas.").appendTo(pageDiv);

                          var context = canvas.getContext('2d');

                          canvas.height = viewport.height;
                          canvas.width = viewport.width;
                          
                          canvas.css(`
                        width ${viewport.width/resolution}px
                        height ${viewport.height/resolution}px
                    `);

                          var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                          };

                        // Render PDF page
                          page.render(renderContext).promise.then(function () {
                              return page.getTextContent() // Get text-fragments
                          }).then(function (textContent) {
                              // Create div which will hold text-fragments
                              var textLayerDiv = j$2("div.textLayer#");

                              textLayerDiv.css(`
                           transform-origin top left
                           transform scale(${1/resolution})
                        `);

                              pageDiv.append(textLayerDiv);

                              // Create new instance of TextLayerBuilder class
                              var textLayer = new TextLayerBuilder({
                                  textLayerDiv: textLayerDiv,
                                  pageIndex: page.pageIndex,
                                  viewport: viewport
                              });

                              // Set text-fragments
                              textLayer.setTextContent(textContent);

                              // Render text-fragments
                              textLayer.render();
                              
                              resolve(pageDiv);
                            });
                          });
                      })
          }

          render(){
             
              console.log(`viewing pdf`, this.pdf);
              let pages =[];
              for (var i = 10; i <= 20; i++) {
                  pages.push(this.createPage(i));
              }

              console.log(pages);
              let final = pages.length-1;
              pages.forEach((page, i) => page.then(data => {
                  console.log('appending yoing');
                  this.append(data);
                  if (i == final) this.triggerEvent('render');
              }));
          }
          
          async loadAndRender(pdf){
              this.load(pdf);
          }

          async load(pdf){
              //pdf is of type PDF or promise
              this._loading = true;

              this.pdf = await pdf;

              this._loading = false;
              this.triggerEvent('load');
              return this.pdf
          }
      }

      //var container = _p().as("#the-canvas")



      //loadPdf(url)
        //.then(function(pdf) {
          //// Get div#container and cache it for later use
          ////container.css(`transform scale(${1/scale})`)

          //// Loop from 1 to total_number_of_pages in PDF document
          ////for (var i = 1; i <= pdf.numPages; i++) {
          
      //})

      pdf.GlobalWorkerOptions.workerSrc = globalThis.pdfWorkerSrc || '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';

      var basic = "@charset \"utf-8\";.textLayer{position:absolute;left:0;top:0;right:0;bottom:0;line-height:1}.textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}.textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}.textLayer .highlight.begin{border-radius:4px 0 0 4px}.textLayer .highlight.end{border-radius:0 4px 4px 0}.textLayer .highlight.middle{border-radius:0}.textLayer .highlight.selected{background-color:darkgreen}.textLayer::selection{background:#00f}.textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;user-select:none}.textLayer .endOfContent.active{top:0}";
      var default_theme = "@charset \"utf-8\";body{background:#161616}.viewer-rapper{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.pdf-page{display:flex;align-items:center;justify-content:center;min-height:400px;min-width:400px}.lector-page{border-radius:3px}.lector-page.loading{width:100%;height:600px;margin:50px 0;background:rgba(255,255,255,0.077);display:flex;align-items:center;justify-content:center}.pragma-loader{margin:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:40px;height:40px}.pragma-loader div{width:10px;height:10px;border:1px solid #FFF;background-color:#FFF}.word-element{mix-blend-mode:darken !important}";
      var css = {
      	basic: basic,
      	default_theme: default_theme
      };

      //util.addStyles(`
      //.fragment-loader-element {
      //width: 1rem;
      //height: 1rem;
      //border: 1px solid #FFF;
      //background-color: #FFF;      
      //} 
      //`)

      function loader(element) {
          return createNewLoader(element)
      }

      function createNewLoader(size=4, element=".") {
          // todo convert this to pragma

          const staggerVisualizerEl = j$2(element).addClass('pragma-loader');

          // const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
          const fragment = document.createDocumentFragment();
          const grid = [size, size];
          const col = grid[0];
          const row = grid[1];
          const numberOfElements = col * row;

          for (let i = 0; i < numberOfElements; i++) {
              fragment.appendChild(document.createElement('div'));
          }

          staggerVisualizerEl.appendChild(fragment);

          const staggersAnimation = anime.timeline({
              targets: staggerVisualizerEl.querySelectorAll('div'),
              easing: 'easeInOutSine',
              delay: anime.stagger(50),
              loop: true,
              autoplay: false
          })
              .add({
                  translateX: [
                      { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'x' }) },
                      { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'x' }) }
                  ],
                  translateY: [
                      { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'y' }) },
                      { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'y' }) }
                  ],
                  duration: 1000,
                  scale: .5,
                  delay: anime.stagger(100, { grid: grid, from: 'center' })
              })

              .add({
                  translateX: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'x' }),
                  translateY: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'y' }),
                  rotate: 0,
                  scaleX: 2.5,
                  scaleY: .25,
                  delay: anime.stagger(4, { from: 'center' })
              })
              .add({
                  rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
                  delay: anime.stagger(50, { grid: grid, from: 'center' })
              })
              .add({
                  translateX: 0,
                  translateY: 0,
                  scale: .5,
                  scaleX: 1,
                  rotate: 180,
                  duration: 1000,
                  delay: anime.stagger(100, { grid: grid, from: 'center' })
              })
              .add({
                  scaleY: 1,
                  scale: 1,
                  delay: anime.stagger(20, { grid: grid, from: 'center' })
              });

          staggersAnimation.play();
          return staggerVisualizerEl
      }

      var index = /*#__PURE__*/Object.freeze({
            __proto__: null,
            loader: loader
      });

      function wfyInner(desc) {
          if (!desc) return false
          desc = j$2(desc);
          let txt = desc.textContent;
          if (txt.length === 0) return false

          let inner = "";
          for (let txt of desc.textContent.split(" ")) {
              // console.log(txt)
              let noWhiteSpace = txt.replace(/\s/g, "");
              // inner += noWhiteSpace.length != 0 ? "<w>" + txt.split(" ").join("</w> <w>") + "</w> " : txt
              inner += noWhiteSpace.length != 0 ? "<w>" + txt.replaceAll(" ", "</w> <w>") + "</w> " : txt;
          }

          desc.html(inner);
      }

      function wfyElement(element) {
          element = j$2(element);
          let nodes = element.findAll("*");
          if (nodes.length == 0) return wfyInner(element)
          nodes.forEach(desc => wfyElement(desc));
      }

      function wfy(element){
        wfyElement(element);
      }
      function injectStyles(functional=true, themeName='default'){
        if (functional) M$2.addStyles(css.basic, 'lectorjs-pdf-functional');
        let theme = themeName && css[`${themeName}_theme`];
        if (theme) M$2.addStyles(theme, `lectorjs-pdf-${themeName}-theme`);
      }

      //var pdfDoc = null,
          //pageNum = 1,
          //pageRendering = false,
          //pageNumPending = null,
          //scale = 2,
          //canvas = document.getElementById('the-canvas'),
          //ctx = canvas.getContext('2d');

      /**
       * Get page info from document, resize canvas accordingly, and render page.
       * @param num Page number.
       */
      //function renderPage(num) {
        //pageRendering = true;
        //// Using promise to fetch the page
        //pdfDoc.getPage(num).then(function(page) {
          //var viewport = page.getViewport({scale: scale});
          //canvas.height = viewport.height;
          //canvas.width = viewport.width;

          //// Render PDF page into canvas context
          //var renderContext = {
            //canvasContext: ctx,
            //viewport: viewport
          //};

          //var renderTask = page.render(renderContext);

          //// Wait for rendering to finish
          //renderTask.promise.then(function() {
            //pageRendering = false;
            //if (pageNumPending !== null) {
              //// New page rendering is pending
              //renderPage(pageNumPending);
              //pageNumPending = null;
            //}
          //}).then(function () {
              //// Get text-fragments
              //return page.getTextContent();
          //})
              //.then(function (textContent) {
                  //console.log(textContent)
                  //// Create div which will hold text-fragments
                  //var textLayerDiv = document.createElement("div");

                  //// Set it's class to textLayer which have required CSS styles
                  //textLayerDiv.setAttribute("class", "textLayer");

                  //// Append newly created div in `div#page-#{pdf_page_number}`
                  //div.appendChild(textLayerDiv);

                  //// Create new instance of TextLayerBuilder class
                  //var textLayer = new TextLayerBuilder({
                      //textLayerDiv: textLayerDiv,
                      //pageIndex: page.pageIndex,
                      //viewport: viewport
                  //});

                  //// Set text-fragments
                  //textLayer.setTextContent(textContent);

                  //// Render text-fragments
                  //textLayer.render();
              //});;
        //});

        //// Update page counters
        //document.getElementById('page_num').textContent = num;
      //}

      /**
       * If another page rendering in progress, waits until the rendering is
       * finised. Otherwise, executes rendering immediately.
       */
      //function queueRenderPage(num) {
        //if (pageRendering) {
          //pageNumPending = num;
        //} else {
          //renderPage(num);
        //}
      //}

      /**
       * Displays previous page.
       */
      //function onPrevPage() {
        //if (pageNum <= 1) {
          //return;
        //}
        //pageNum--;
        //queueRenderPage(pageNum);
      //}
      //document.getElementById('prev').addEventListener('click', onPrevPage);

      /**
       * Displays next page.
       */
      //function onNextPage() {
        //if (pageNum >= pdfDoc.numPages) {
          //return;
        //}
        //pageNum++;
        //queueRenderPage(pageNum);
      //}
      //document.getElementById('next').addEventListener('click', onNextPage);

      /**
       * Asynchronously downloads PDF.
       */
      //pdf.getDocument(url).promise.then(function(pdfDoc_) {
        //pdfDoc = pdfDoc_;
        //document.getElementById('page_count').textContent = pdfDoc.numPages;

        //// Initial/first page rendering
        //renderPage(pageNum);
      //});

      exports.Lector = _t;
      exports.PDFViewer = PDFViewer;
      exports.Word = Tt;
      exports.helpers = U;
      exports.injectStyles = injectStyles;
      exports.lector = lector_esm;
      exports.pragma = pragma_esm;
      exports.utilities = index;
      exports.wfy = wfy;
      exports.wfyElement = wfyElement;

      Object.defineProperty(exports, '__esModule', { value: true });

})));
