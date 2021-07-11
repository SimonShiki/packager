!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=509)}({172:function(e,t){e.exports='.sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n\n.sa-gamepad-spacer {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  background-color: white;\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*="modal_header-item-title"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode="editor"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-store-settings {\n  display: none;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n.sa-gamepad-has-controller .sa-gamepad-store-settings {\n  display: block;\n}\n'},509:function(e,t,n){"use strict";n.r(t);let s=window.console;const i=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],a=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],r=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],o=e=>{if("object"!=typeof e||!e)return s.warn("invalid mapping",e),{type:"key",high:null,low:null};const t=Object.assign({},e);if("key"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.high&&(t.high=""),void 0===t.low&&(t.low="");else if("mousedown"===t.type)void 0===t.deadZone&&(t.deadZone=.5);else{if("virtual_cursor"!==t.type)return s.warn("unknown mapping type",t.type),{type:"key",high:null,low:null};void 0===t.high&&(t.high=""),void 0===t.low&&(t.low=""),void 0===t.sensitivity&&(t.sensitivity=10),void 0===t.deadZone&&(t.deadZone=.5)}return t},d=(e,t)=>{for(;e.length<t;)e.push({type:"key",high:null,low:null});return e.length=t,e},h=e=>({usesArrows:e.has("ArrowUp")||e.has("ArrowDown")||e.has("ArrowRight")||e.has("ArrowLeft"),usesWASD:e.has("w")&&e.has("s")||e.has("a")&&e.has("d")}),u=e=>`${e.id} (${e.index})`;class l{constructor(e,t){this.gamepad=e,this.gamepadLib=t,this.buttonMappings=this.getDefaultButtonMappings().map(o),this.axesMappings=this.getDefaultAxisMappings().map(o)}getDefaultButtonMappings(){let e;if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.buttons;else{const t=this.gamepadLib.hints.usedKeys,n=new Set,{usesArrows:s,usesWASD:i}=h(t);i&&(n.add("w"),n.add("a"),n.add("s"),n.add("d"));const a=["p","q","r"],r=[" ","Enter","e","f","z","x","c",...Array.from(t).filter(e=>1===e.length&&!a.includes(e))],o=e=>{for(const s of e)if(t.has(s)&&!n.has(s))return n.add(s),s;return null},d=()=>o(r),u=()=>o(a),l=()=>s||!i?"ArrowUp":"w",c=()=>s||!i?"ArrowDown":"s",p=()=>s||!i?"ArrowRight":"d",m=()=>s||!i?"ArrowLeft":"a",g=(()=>s&&t.has("ArrowUp")?"ArrowUp":i&&t.has("w")?"w":o(r))();let w=d(),y=d(),A=d();!g||w||y||A||(w=g,y=g,A=g),g&&w&&!y&&!A&&(y=g,A=w),e=[],e[0]={type:"key",high:g},e[1]={type:"key",high:w},e[2]={type:"key",high:y},e[3]={type:"key",high:A},e[4]={type:"mousedown"},e[5]={type:"mousedown"},e[6]={type:"mousedown"},e[7]={type:"mousedown"},e[9]={type:"key",high:u()},e[8]={type:"key",high:u()},e[10]={type:"key",high:null,low:null},e[11]={type:"key",high:null,low:null},e[12]={type:"key",high:l()},e[13]={type:"key",high:c()},e[14]={type:"key",high:m()},e[15]={type:"key",high:p()}}return d(e,this.gamepad.buttons.length)}getDefaultAxisMappings(){let e=[];if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.axes;else if(4===this.gamepad.axes.length){const t=this.gamepadLib.hints.usedKeys,{usesArrows:n,usesWASD:s}=h(t);s?(e.push(a[0]),e.push(a[1])):n?(e.push(i[0]),e.push(i[1])):(e.push(r[0]),e.push(r[1])),e.push(r[0]),e.push(r[1])}return d(e,this.gamepad.axes.length)}}class c extends EventTarget{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:1/0,minX:-1/0,maxY:1/0,minY:-1/0,modified:!1},this._editor=null,this.connectCallbacks=[],this.hints={usedKeys:new Set,importedSettings:null,generated:!1},this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseDownThisFrame=!1,this.oldMouseDown=!1,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise(e=>{this.connectCallbacks.push(e)})}ensureHintsGenerated(){this.hints.generated||(this.getHintsLazily&&Object.assign(this.hints,this.getHintsLazily()),this.hints.generated=!0)}handleConnect(e){this.ensureHintsGenerated();for(const e of this.connectCallbacks)e();this.connectCallbacks=[];const t=e.gamepad,n=u(t);s.log("connected",t);const i=new l(t,this);this.gamepads.set(n,i),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:i}))}handleDisconnect(e){const t=e.gamepad,n=u(t);s.log("disconnected",t);const i=this.gamepads.get(n);this.gamepads.delete(n),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:i})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(e,t){t?this.dispatchEvent(new CustomEvent("keydown",{detail:e})):this.dispatchEvent(new CustomEvent("keyup",{detail:e}))}dispatchMouseDown(e){e?this.dispatchEvent(new CustomEvent("mousedown")):this.dispatchEvent(new CustomEvent("mouseup"))}dispatchMouseMove(e,t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:e,y:t}}))}updateButton(e,t){if("key"===t.type)e>=t.deadZone?t.high&&this.keysPressedThisFrame.add(t.high):e<=-t.deadZone&&t.low&&this.keysPressedThisFrame.add(t.low);else if("mousedown"===t.type){Math.abs(e)>=t.deadZone&&(this.mouseDownThisFrame=!0)}else if("virtual_cursor"===t.type){const n=t.deadZone;let s;if(e>=n&&(s=t.high),e<=-n&&(s=t.low),s){const i=(Math.abs(e)-n)/(1-n),a=i*i*t.sensitivity*this.deltaTime;"+x"===s?this.virtualCursor.x+=a:"-x"===s?this.virtualCursor.x-=a:"+y"===s?this.virtualCursor.y+=a:"-y"===s&&(this.virtualCursor.y-=a),this.virtualCursor.modified=!0}}}update(e){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseDown=this.mouseDownThisFrame,this.keysPressedThisFrame=new Set,this.mouseDownThisFrame=!1,null===this.currentTime?this.deltaTime=0:this.deltaTime=e-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=e,this.animationFrame=requestAnimationFrame(this.update);const t=navigator.getGamepads();for(const e of t){if(null===e)continue;const t=u(e),n=this.gamepads.get(t);for(let t=0;t<e.buttons.length;t++){const s=e.buttons[t].value,i=n.buttonMappings[t];this.updateButton(s,i)}for(let t=0;t<e.axes.length;t++){const s=e.axes[t],i=n.axesMappings[t];this.updateButton(s,i)}}this._editor&&this._editor.update(t);for(const e of this.keysPressedThisFrame)this.oldKeysPressed.has(e)||this.dispatchKey(e,!0);for(const e of this.oldKeysPressed)this.keysPressedThisFrame.has(e)||this.dispatchKey(e,!1);this.mouseDownThisFrame&&!this.oldMouseDown?this.dispatchMouseDown(!0):!this.mouseDownThisFrame&&this.oldMouseDown&&this.dispatchMouseDown(!1),this.virtualCursor.modified&&(this.virtualCursor.modified=!1,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.x<this.virtualCursor.minX&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.y<this.virtualCursor.minY&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){throw new Error("removed")}}c.browserHasBrokenGamepadAPI=()=>!navigator.getGamepads||(!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Linux"))||!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Mac OS"))),c.setConsole=e=>s=e;var p=c;var m=async function(e){const t=e.vm;await new Promise(e=>{if(t.editingTarget)return e();t.runtime.once("PROJECT_LOADED",e)});const n=()=>null!==t.runtime._steppingInterval,s=e=>{switch(e){case"right arrow":return"ArrowRight";case"up arrow":return"ArrowUp";case"left arrow":return"ArrowLeft";case"down arrow":return"ArrowDown";case"enter":return"Enter";case"space":return" "}return e.toLowerCase().charAt(0)},i=()=>{const e=[t.runtime.getTargetForStage(),...t.runtime.targets].filter(e=>e.isOriginal).map(e=>e.blocks),n=new Set;for(const t of e)for(const e of Object.values(t._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue;const t=e.fields.KEY_OPTION.value;n.add(s(t))}return n};p.setConsole(console);const a=new p,r=(()=>{const e=(()=>{const e=t.runtime.getTargetForStage().comments;for(const t of Object.values(e))if(t.text.includes(" // _gamepad_"))return t;return null})();if(!e)return null;const n=e.text.split("\n").find(e=>e.endsWith(" // _gamepad_"));if(!n)return console.warn("Gamepad comment does not contain valid line"),null;const s=n.substr(0,n.length-" // _gamepad_".length);let i;try{if(i=JSON.parse(s),!i||"object"!=typeof i||!Array.isArray(i.buttons)||!Array.isArray(i.axes))throw new Error("Invalid data")}catch(e){return console.warn("Gamepad comment has invalid JSON",e),null}return i})();a.getHintsLazily=()=>r?{importedSettings:r}:{usedKeys:i()};const o=t.runtime.renderer,d=o._xRight-o._xLeft,h=o._yTop-o._yBottom,u=o.canvas,l=document.createElement("img");let c;l.hidden=!0,l.className="sa-gamepad-cursor",l.src=(e=>{if("/active.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAgSURBVBhXY/z//z8DKmCC0kgAKsQIBhA2FlXEmMXAAAC+2gYLeDM0CAAAAABJRU5ErkJggg==";if("/close.svg"===e)return"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+Cg==";if("/cursor.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAVSURBVBhXYyAF/AcDCJsJQpEKGBgAjmQF/WBrfi0AAAAASUVORK5CYII=";if("/dot.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPgo=";throw new Error("Unknown asset: "+e)})("/cursor.png");const m=e=>{l.hidden=!e,clearTimeout(c),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),c=setTimeout(g,8e3))},g=()=>{m(!1)},w=e=>{m(!0),l.classList.toggle("sa-gamepad-cursor-down",e)};let y;if(document.addEventListener("mousemove",()=>{m(!1),document.body.classList.remove("sa-gamepad-hide-cursor")}),window.ResizeObserver){let e=d,t=h;new ResizeObserver(n=>{for(const s of n)e=s.contentRect.width,t=s.contentRect.height}).observe(u),y=()=>[e,t]}else y=()=>{const e=u.getBoundingClientRect();return[e.width,e.height]};let A=0,v=0;const f=e=>{if(!n())return;const[s,i]=y();t.postIOData("mouse",{...e,canvasWidth:s,canvasHeight:i,x:(A+d/2)*(s/d),y:i/h*(h/2-v)})},x=(e,s)=>{n()&&t.postIOData("keyboard",{key:e,isDown:s})};a.virtualCursor.maxX=o._xRight,a.virtualCursor.minX=o._xLeft,a.virtualCursor.maxY=o._yTop,a.virtualCursor.minY=o._yBottom,a.addEventListener("keydown",e=>x(e.detail,!0)),a.addEventListener("keyup",e=>x(e.detail,!1)),a.addEventListener("mousedown",()=>{w(!0),f({isDown:!0})}),a.addEventListener("mouseup",()=>{w(!1),f({isDown:!1})}),a.addEventListener("mousemove",e=>{A=e.detail.x,v=e.detail.y,((e,t)=>{m(!0);const n=d/2+e-3,s=h/2-t-3;l.style.transform=`translate(${n}px, ${s}px)`})(A,v),f({})}),e._overlays.appendChild(l)},g=n(172),w=n.n(g);window.ScaffoldingAddons={run:e=>{m(e),(e=>{const t=document.createElement("style");t.textContent=e,document.head.appendChild(t)})(w.a)}}}});
// 81bb981b0adc72a6e4d9702ee73b7e4a4b7e6dc72a9ae65e76b062717f50a34e =^..^=