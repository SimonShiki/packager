(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{417:function(e,t,n){const r=n(10),i=n(418),o="'none'",s={accelerometer:o,"ambient-light-sensor":o,autoplay:o,battery:o,camera:o,"display-capture":o,"document-domain":o,"encrypted-media":o,fullscreen:o,gamepad:"*",geolocation:o,gyroscope:o,magnetometer:o,microphone:o,midi:o,payment:o,"picture-in-picture":o,"publickey-credentials-get":o,"speaker-selection":o,usb:o,vibrate:o,vr:o,"screen-wake-lock":o,"web-share":o,"interest-cohort":o};e.exports=class{constructor(){this.id=r(),this.isRemote=!0,this.ready=!1,this.queuedMessages=[],this.iframe=document.createElement("iframe"),this.iframe.className="tw-custom-extension-frame",this.iframe.dataset.id=this.id,this.iframe.style.display="none",this.iframe.setAttribute("aria-hidden","true"),this.iframe.sandbox="allow-scripts",this.iframe.allow=Object.entries(s).map(([e,t])=>"".concat(e," ").concat(t)).join("; "),document.body.appendChild(this.iframe),window.addEventListener("message",this._onWindowMessage.bind(this));const e=new Blob(["<body><script>window.__WRAPPED_IFRAME_ID__=".concat(JSON.stringify(this.id),";").concat(i,"<\/script></body>")],{type:"text/html"});this.iframe.src=URL.createObjectURL(e)}_onWindowMessage(e){if(e.data&&e.data.vmIframeId===this.id){if(e.data.ready){this.ready=!0;for(const{data:e,transfer:t}of this.queuedMessages)this.postMessage(e,t);this.queuedMessages.length=0}e.data.message&&this.onmessage({data:e.data.message})}}onmessage(){}postMessage(e,t){this.ready?t?this.iframe.contentWindow.postMessage(e,"*",t):this.iframe.contentWindow.postMessage(e,"*"):this.queuedMessages.push({data:e,transfer:t})}}},418:function(e,t){e.exports='!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){function r(){}n(13).mixin(r),r.prototype.write=function(e,t,n){this.emit("item",e,t,n)},r.prototype.end=function(){this.emit("end"),this.removeAllListeners()},r.prototype.pipe=function(e){var t=this;function n(){e.write.apply(e,Array.prototype.slice.call(arguments))}function r(){!e._isStdio&&e.end()}return t.emit("unpipe",e),e.emit("pipe",t),t.on("item",n),t.on("end",r),t.when("unpipe",(function(i){var o=i===e||void 0===i;return o&&(t.removeListener("item",n),t.removeListener("end",r),e.emit("unpipe")),o})),e},r.prototype.unpipe=function(e){return this.emit("unpipe",e),this},r.prototype.format=function(e){throw new Error(["Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:","var Minilog = require(\'minilog\');","Minilog","  .pipe(Minilog.backends.console.formatClean)","  .pipe(Minilog.backends.console);"].join("\\n"))},r.mixin=function(e){var t,n=r.prototype;for(t in n)n.hasOwnProperty(t)&&(e.prototype[t]=n[t])},e.exports=r},function(e,t){e.exports={isWorker:!0,centralDispatchService:self}},function(e,t,n){const r=n(11);r.enable(),e.exports=r("vm")},function(e,t){var n={black:"#000",red:"#c23621",green:"#25bc26",yellow:"#bbbb00",blue:"#492ee1",magenta:"#d338d3",cyan:"#33bbc8",gray:"#808080",purple:"#708"};e.exports=function(e,t){return t?"color: #fff; background: "+n[e]+";":"color: "+n[e]+";"}},function(e,t,n){const r=n(1),i=window.__WRAPPED_IFRAME_ID__;r.isWorker=!1,r.centralDispatchService={postMessage(e,t){const n={vmIframeId:i,message:e};t?window.parent.postMessage(n,"*",t):window.parent.postMessage(n,"*")}},n(5),window.parent.postMessage({vmIframeId:i,ready:!0},"*")},function(e,t,n){(function(e){const t=n(7),r=n(8),i=n(9),o=n(2),s=n(21),{isWorker:c}=n(1);e.Scratch=e.Scratch||{},e.Scratch.ArgumentType=t,e.Scratch.BlockType=r,e.Scratch.TargetType=s;const a=new class{constructor(){this.nextExtensionId=0,this.initialRegistrations=[],this.firstRegistrationPromise=new Promise(e=>{this.firstRegistrationCallback=e}),i.waitForConnection.then(()=>{i.call("extensions","allocateWorker").then(async e=>{const[t,n]=e;this.workerId=t;try{await(e=>{if(!c)return new Promise((t,n)=>{const r=document.createElement("script");r.onload=()=>t(),r.onerror=()=>n(new Error("Cannot run script")),r.src=e,document.body.appendChild(r)});importScripts(e)})(n),await this.firstRegistrationPromise;const e=this.initialRegistrations;this.initialRegistrations=null,Promise.all(e).then(()=>i.call("extensions","onWorkerInit",t))}catch(e){o.error(e),i.call("extensions","onWorkerInit",t,"".concat(e))}})}),this.extensions=[]}register(e){const t=this.nextExtensionId++;this.extensions.push(e);const n="extension.".concat(this.workerId,".").concat(t),r=i.setService(n,e).then(()=>i.call("extensions","registerExtensionService",n));return this.initialRegistrations&&(this.firstRegistrationCallback(),this.initialRegistrations.push(r)),r}};e.Scratch.extensions={register:a.register.bind(a)}}).call(this,n(6))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={ANGLE:"angle",BOOLEAN:"Boolean",COLOR:"color",NUMBER:"number",STRING:"string",MATRIX:"matrix",NOTE:"note",IMAGE:"image"}},function(e,t){e.exports={BOOLEAN:"Boolean",BUTTON:"button",COMMAND:"command",CONDITIONAL:"conditional",EVENT:"event",HAT:"hat",LOOP:"loop",REPORTER:"reporter"}},function(e,t,n){const r=n(10),i=n(2),{centralDispatchService:o}=n(1);e.exports=new class extends r{constructor(){super(),this._connectionPromise=new Promise(e=>{this._onConnect=e}),this.services={},this._onMessage=this._onMessage.bind(this,o),"undefined"!=typeof self&&(self.onmessage=this._onMessage)}get waitForConnection(){return this._connectionPromise}setService(e,t){return this.services.hasOwnProperty(e)&&i.warn("Worker dispatch replacing existing service provider for ".concat(e)),this.services[e]=t,this.waitForConnection.then(()=>this._remoteCall(o,"dispatch","setService",e))}_getServiceProvider(e){const t=this.services[e];return{provider:t||o,isRemote:!t}}_onDispatchMessage(e,t){let n;switch(t.method){case"handshake":n=this._onConnect();break;case"terminate":setTimeout(()=>self.close(),0),n=Promise.resolve();break;default:i.error("Worker dispatch received message for unknown method: ".concat(t.method))}return n}}},function(e,t,n){const r=n(2);e.exports=class{constructor(){this.callbacks=[],this.nextResponseId=0}call(e,t,...n){return this.transferCall(e,t,null,...n)}transferCall(e,t,n,...r){try{const{provider:i,isRemote:o}=this._getServiceProvider(e);if(i){if(o)return this._remoteTransferCall(i,e,t,n,...r);const s=i[t].apply(i,r);return Promise.resolve(s)}return Promise.reject(new Error("Service not found: ".concat(e)))}catch(e){return Promise.reject(e)}}_isRemoteService(e){return this._getServiceProvider(e).isRemote}_remoteCall(e,t,n,...r){return this._remoteTransferCall(e,t,n,null,...r)}_remoteTransferCall(e,t,n,r,...i){return new Promise((o,s)=>{const c=this._storeCallbacks(o,s);i.length>0&&"function"==typeof i[i.length-1].func&&(i.pop(),i.pop()),r?e.postMessage({service:t,method:n,responseId:c,args:i},r):e.postMessage({service:t,method:n,responseId:c,args:i})})}_storeCallbacks(e,t){const n=this.nextResponseId++;return this.callbacks[n]=[e,t],n}_deliverResponse(e,t){try{const[n,r]=this.callbacks[e];delete this.callbacks[e],t.error?r(t.error):n(t.result)}catch(e){r.error("Dispatch callback failed: ".concat(e))}}_onMessage(e,t){const n=t.data;let i;n.args=n.args||[],n.service?i="dispatch"===n.service?this._onDispatchMessage(e,n):this.call(n.service,n.method,...n.args):void 0===n.responseId?r.error("Dispatch caught malformed message from a worker: ".concat(JSON.stringify(t))):this._deliverResponse(n.responseId,n),i&&(void 0===n.responseId?r.error("Dispatch message missing required response ID: ".concat(JSON.stringify(t))):i.then(t=>e.postMessage({responseId:n.responseId,result:t}),t=>e.postMessage({responseId:n.responseId,error:"".concat(t)})))}_getServiceProvider(e){throw new Error("Could not get provider for ".concat(e,": _getServiceProvider not implemented"))}_onDispatchMessage(e,t){throw new Error("Unimplemented dispatch message handler cannot handle ".concat(t.method," method"))}}},function(e,t,n){var r=n(12),i=r.enable,o=r.disable,s="undefined"!=typeof navigator&&/chrome/i.test(navigator.userAgent),c=n(15);if(r.defaultBackend=s?c.minilog:c,"undefined"!=typeof window){try{r.enable(JSON.parse(window.localStorage.minilogSettings))}catch(e){}if(window.location&&window.location.search){var a=RegExp("[?&]minilog=([^&]*)").exec(window.location.search);a&&r.enable(decodeURIComponent(a[1]))}}r.enable=function(){i.call(r,!0);try{window.localStorage.minilogSettings=JSON.stringify(!0)}catch(e){}return this},r.disable=function(){o.call(r);try{delete window.localStorage.minilogSettings}catch(e){}return this},(e.exports=r).backends={array:n(18),browser:r.defaultBackend,localStorage:n(19),jQuery:n(20)}},function(e,t,n){var r=n(0),i=n(14),o=new r,s=Array.prototype.slice;(t=e.exports=function(e){var n=function(){return o.write(e,void 0,s.call(arguments)),n};return n.debug=function(){return o.write(e,"debug",s.call(arguments)),n},n.info=function(){return o.write(e,"info",s.call(arguments)),n},n.warn=function(){return o.write(e,"warn",s.call(arguments)),n},n.error=function(){return o.write(e,"error",s.call(arguments)),n},n.log=n.debug,n.suggest=t.suggest,n.format=o.format,n}).defaultBackend=t.defaultFormatter=null,t.pipe=function(e){return o.pipe(e)},t.end=t.unpipe=t.disable=function(e){return o.unpipe(e)},t.Transform=r,t.Filter=i,t.suggest=new i,t.enable=function(){return t.defaultFormatter?o.pipe(t.suggest).pipe(t.defaultFormatter).pipe(t.defaultBackend):o.pipe(t.suggest).pipe(t.defaultBackend)}},function(e,t){function n(){this._events={}}n.prototype={on:function(e,t){this._events||(this._events={});var n=this._events;return(n[e]||(n[e]=[])).push(t),this},removeListener:function(e,t){var n,r=this._events[e]||[];for(n=r.length-1;n>=0&&r[n];n--)r[n]!==t&&r[n].cb!==t||r.splice(n,1)},removeAllListeners:function(e){e?this._events[e]&&(this._events[e]=[]):this._events={}},listeners:function(e){return this._events&&this._events[e]||[]},emit:function(e){this._events||(this._events={});var t,n=Array.prototype.slice.call(arguments,1),r=this._events[e]||[];for(t=r.length-1;t>=0&&r[t];t--)r[t].apply(this,n);return this},when:function(e,t){return this.once(e,t,!0)},once:function(e,t,n){if(!t)return this;function r(){n||this.removeListener(e,r),t.apply(this,arguments)&&n&&this.removeListener(e,r)}return r.cb=t,this.on(e,r),this}},n.mixin=function(e){var t,r=n.prototype;for(t in r)r.hasOwnProperty(t)&&(e.prototype[t]=r[t])},e.exports=n},function(e,t,n){var r=n(0),i={debug:1,info:2,warn:3,error:4};function o(){this.enabled=!0,this.defaultResult=!0,this.clear()}function s(e,t){return e.n.test?e.n.test(t):e.n==t}r.mixin(o),o.prototype.allow=function(e,t){return this._white.push({n:e,l:i[t]}),this},o.prototype.deny=function(e,t){return this._black.push({n:e,l:i[t]}),this},o.prototype.clear=function(){return this._white=[],this._black=[],this},o.prototype.test=function(e,t){var n,r=Math.max(this._white.length,this._black.length);for(n=0;n<r;n++){if(this._white[n]&&s(this._white[n],e)&&i[t]>=this._white[n].l)return!0;if(this._black[n]&&s(this._black[n],e)&&i[t]<=this._black[n].l)return!1}return this.defaultResult},o.prototype.write=function(e,t,n){if(!this.enabled||this.test(e,t))return this.emit("item",e,t,n)},e.exports=o},function(e,t,n){var r=n(0),i=/\\n+$/,o=new r;o.write=function(e,t,n){var r=n.length-1;if("undefined"!=typeof console&&console.log){if(console.log.apply)return console.log.apply(console,[e,t].concat(n));if(JSON&&JSON.stringify){n[r]&&"string"==typeof n[r]&&(n[r]=n[r].replace(i,""));try{for(r=0;r<n.length;r++)n[r]=JSON.stringify(n[r])}catch(e){}console.log(n.join(" "))}}},o.formatters=["color","minilog"],o.color=n(16),o.minilog=n(17),e.exports=o},function(e,t,n){var r=n(0),i=n(3),o={debug:["cyan"],info:["purple"],warn:["yellow",!0],error:["red",!0]},s=new r;s.write=function(e,t,n){console.log;console[t]&&console[t].apply&&console[t].apply(console,["%c"+e+" %c"+t,i("gray"),i.apply(i,o[t])].concat(n))},s.pipe=function(){},e.exports=s},function(e,t,n){var r=n(0),i=n(3),o={debug:["gray"],info:["purple"],warn:["yellow",!0],error:["red",!0]},s=new r;s.write=function(e,t,n){var r=console.log;"debug"!=t&&console[t]&&(r=console[t]);var s=0;if("info"!=t){for(;s<n.length&&"string"==typeof n[s];s++);r.apply(console,["%c"+e+" "+n.slice(0,s).join(" "),i.apply(i,o[t])].concat(n.slice(s)))}else r.apply(console,["%c"+e,i.apply(i,o[t])].concat(n))},s.pipe=function(){},e.exports=s},function(e,t,n){var r=n(0),i=[],o=new r;o.write=function(e,t,n){i.push([e,t,n])},o.get=function(){return i},o.empty=function(){i=[]},e.exports=o},function(e,t,n){var r=n(0),i=!1,o=new r;o.write=function(e,t,n){if("undefined"!=typeof window&&"undefined"!=typeof JSON&&JSON.stringify&&JSON.parse)try{i||(i=window.localStorage.minilog?JSON.parse(window.localStorage.minilog):[]),i.push([(new Date).toString(),e,t,n]),window.localStorage.minilog=JSON.stringify(i)}catch(e){}},e.exports=o},function(e,t,n){var r=n(0),i=(new Date).valueOf().toString(36);function o(e){this.url=e.url||"",this.cache=[],this.timer=null,this.interval=e.interval||3e4,this.enabled=!0,this.jQuery=window.jQuery,this.extras={}}r.mixin(o),o.prototype.write=function(e,t,n){this.timer||this.init(),this.cache.push([e,t].concat(n))},o.prototype.init=function(){if(this.enabled&&this.jQuery){var e=this;this.timer=setTimeout((function(){var t,n,r=[],o=e.url;if(0==e.cache.length)return e.init();for(t=0;t<e.cache.length;t++)try{JSON.stringify(e.cache[t]),r.push(e.cache[t])}catch(e){}e.jQuery.isEmptyObject(e.extras)?(n=JSON.stringify({logs:r}),o=e.url+"?client_id="+i):n=JSON.stringify(e.jQuery.extend({logs:r},e.extras)),e.jQuery.ajax(o,{type:"POST",cache:!1,processData:!1,data:n,contentType:"application/json",timeout:1e4}).success((function(t,n,r){t.interval&&(e.interval=Math.max(1e3,t.interval))})).error((function(){e.interval=3e4})).always((function(){e.init()})),e.cache=[]}),this.interval)}},o.prototype.end=function(){},o.jQueryWait=function(e){if("undefined"!=typeof window&&(window.jQuery||window.$))return e(window.jQuery||window.$);"undefined"!=typeof window&&setTimeout((function(){o.jQueryWait(e)}),200)},e.exports=o},function(e,t){e.exports={SPRITE:"sprite",STAGE:"stage"}}]);'}}]);
// 6715c59c450e8c595a7caf2733d75f8f1e536f9ce02e433d310bdd718145f7c5 =^..^=