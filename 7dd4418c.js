function t(t,e,o,n){var i,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,o,r):i(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r}const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}const r=t=>new s("string"==typeof t?t:t+"",void 0,n),a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new s(o,t,n)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return r(e)})(t):t;var h;const c=window,d=c.trustedTypes,u=d?d.emptyScript:"",p=c.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:m};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const n=this._$Ep(o,e);void 0!==n&&(this._$Ev.set(n,o),t.push(n))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{o?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((o=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=o.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=g){var n;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:b).toAttribute(e,o.type);this._$El=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var o;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:b;this._$El=i,this[i]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(h=c.reactiveElementVersions)&&void 0!==h?h:c.reactiveElementVersions=[]).push("1.6.1");const y=window,w=y.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,S=`<${$}>`,A=document,C=()=>A.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,L=t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),P="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,z=/>/g,I=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,O=/"/g,N=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),M=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),H=new WeakMap,F=A.createTreeWalker(A,129,null,!1),V=(t,e)=>{const o=t.length-1,n=[];let i,s=2===e?"<svg>":"",r=R;for(let e=0;e<o;e++){const o=t[e];let a,l,h=-1,c=0;for(;c<o.length&&(r.lastIndex=c,l=r.exec(o),null!==l);)c=r.lastIndex,r===R?"!--"===l[1]?r=T:void 0!==l[1]?r=z:void 0!==l[2]?(N.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=null!=i?i:R,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?I:'"'===l[3]?O:U):r===O||r===U?r=I:r===T||r===z?r=R:(r=I,i=void 0);const d=r===I&&t[e+1].startsWith("/>")?" ":"";s+=r===R?o+S:h>=0?(n.push(a),o.slice(0,h)+_+o.slice(h)+x+d):o+x+(-2===h?(n.push(void 0),e):d)}const a=s+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(a):a,n]};class K{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,s=0;const r=t.length-1,a=this.parts,[l,h]=V(t,e);if(this.el=K.createElement(l,o),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=F.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(_)||e.startsWith(x)){const o=h[s++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+_).split(x),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?Z:"@"===e[1]?Q:G})}else a.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(N.test(n.tagName)){const t=n.textContent.split(x),e=t.length-1;if(e>0){n.textContent=w?w.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],C()),F.nextNode(),a.push({type:2,index:++i});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===$)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(x,t+1));)a.push({type:7,index:i}),t+=x.length-1}i++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function q(t,e,o=t,n){var i,s,r,a;if(e===M)return e;let l=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const h=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,o,n)),void 0!==n?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:o._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,n)),e}class W{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(o,!0);F.currentNode=i;let s=F.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new J(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new tt(s,this,t)),this.u.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=F.nextNode(),r++)}return i}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class J{constructor(t,e,o,n){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cm=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),E(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):L(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==B&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=K.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.p(o);else{const t=new W(i,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new K(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new J(this.S(C()),this.S(C()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,o,n,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let s=!1;if(void 0===i)t=q(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const n=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=q(this,n[o+r],e,r),a===M&&(a=this._$AH[r]),s||(s=!E(a)||a!==this._$AH[r]),a===B?t=B:t!==B&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}s&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const Y=w?w.emptyScript:"";class Z extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Q extends G{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=q(this,t,e,0))&&void 0!==o?o:B)===M)return;const n=this._$AH,i=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const et={P:_,A:x,M:$,C:1,L:V,D:W,R:L,V:q,I:J,H:G,N:Z,U:Q,F:X,B:tt},ot=y.litHtmlPolyfillSupport;null==ot||ot(K,J),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.7.0");var nt,it;class st extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new J(e.insertBefore(C(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}st.finalized=!0,st._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:st});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.0");const at=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ht(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):lt(t,e)}function ct(t){return ht({...t,state:!0})}const dt=({finisher:t,descriptor:e})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,s=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(o.key)}:{...o,key:n};return null!=t&&(s.finisher=function(e){t(e,n)}),s}{const i=o.constructor;void 0!==e&&Object.defineProperty(o,n,e(n)),null==t||t(i,n)}};function ut(t,e){return dt({descriptor:o=>{const n={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[e]&&(this[e]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}var pt;null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements;const bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mt=t=>(...e)=>({_$litDirective$:t,values:e});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:ft}=et,vt=t=>void 0===t.strings,yt=()=>document.createComment(""),wt=(t,e,o)=>{var n;const i=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=i.insertBefore(yt(),s),n=i.insertBefore(yt(),s);o=new ft(e,n,t,t.options)}else{const e=o._$AB.nextSibling,r=o._$AM,a=r!==t;if(a){let e;null===(n=o._$AQ)||void 0===n||n.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==r._$AU&&o._$AP(e)}if(e!==s||a){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,s),t=e}}}return o},kt=(t,e,o=t)=>(t._$AI(e,o),t),_t={},xt=(t,e=_t)=>t._$AH=e,$t=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const n=t._$AB.nextSibling;for(;o!==n;){const t=o.nextSibling;o.remove(),o=t}},St=(t,e,o)=>{const n=new Map;for(let i=e;i<=o;i++)n.set(t[i],i);return n},At=mt(class extends gt{constructor(t){if(super(t),t.type!==bt.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let n;void 0===o?o=e:void 0!==e&&(n=e);const i=[],s=[];let r=0;for(const e of t)i[r]=n?n(e,r):r,s[r]=o(e,r),r++;return{values:s,keys:i}}render(t,e,o){return this.ht(t,e,o).values}update(t,[e,o,n]){var i;const s=(t=>t._$AH)(t),{values:r,keys:a}=this.ht(e,o,n);if(!Array.isArray(s))return this.ut=a,r;const l=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],h=[];let c,d,u=0,p=s.length-1,b=0,m=r.length-1;for(;u<=p&&b<=m;)if(null===s[u])u++;else if(null===s[p])p--;else if(l[u]===a[b])h[b]=kt(s[u],r[b]),u++,b++;else if(l[p]===a[m])h[m]=kt(s[p],r[m]),p--,m--;else if(l[u]===a[m])h[m]=kt(s[u],r[m]),wt(t,h[m+1],s[u]),u++,m--;else if(l[p]===a[b])h[b]=kt(s[p],r[b]),wt(t,s[u],s[p]),p--,b++;else if(void 0===c&&(c=St(a,b,m),d=St(l,u,p)),c.has(l[u]))if(c.has(l[p])){const e=d.get(a[b]),o=void 0!==e?s[e]:null;if(null===o){const e=wt(t,s[u]);kt(e,r[b]),h[b]=e}else h[b]=kt(o,r[b]),wt(t,s[u],o),s[e]=null;b++}else $t(s[p]),p--;else $t(s[u]),u++;for(;b<=m;){const e=wt(t,h[m+1]);kt(e,r[b]),h[b++]=e}for(;u<=p;){const t=s[u++];null!==t&&$t(t)}return this.ut=a,xt(t,h),M}});var Ct=/[$_\p{ID_Start}]/u,Et=/[$_\u200C\u200D\p{ID_Continue}]/u;function jt(t,e){return(e?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(t)}function Lt(t,e=!1){const o=[];let n=0;for(;n<t.length;){const i=t[n],s=function(i){if(!e)throw new TypeError(i);o.push({type:"INVALID_CHAR",index:n,value:t[n++]})};if("*"!==i)if("+"!==i&&"?"!==i)if("\\"!==i)if("{"!==i)if("}"!==i)if(":"!==i)if("("!==i)o.push({type:"CHAR",index:n,value:t[n++]});else{let e=1,i="",r=n+1,a=!1;if("?"===t[r]){s(`Pattern cannot start with "?" at ${r}`);continue}for(;r<t.length;){if(!jt(t[r],!1)){s(`Invalid character '${t[r]}' at ${r}.`),a=!0;break}if("\\"!==t[r]){if(")"===t[r]){if(e--,0===e){r++;break}}else if("("===t[r]&&(e++,"?"!==t[r+1])){s(`Capturing groups are not allowed at ${r}`),a=!0;break}i+=t[r++]}else i+=t[r++]+t[r++]}if(a)continue;if(e){s(`Unbalanced pattern at ${n}`);continue}if(!i){s(`Missing pattern at ${n}`);continue}o.push({type:"PATTERN",index:n,value:i}),n=r}else{let e="",i=n+1;for(;i<t.length;){const o=t.substr(i,1);if(!(i===n+1&&Ct.test(o)||i!==n+1&&Et.test(o)))break;e+=t[i++]}if(!e){s(`Missing parameter name at ${n}`);continue}o.push({type:"NAME",index:n,value:e}),n=i}else o.push({type:"CLOSE",index:n,value:t[n++]});else o.push({type:"OPEN",index:n,value:t[n++]});else o.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});else o.push({type:"MODIFIER",index:n,value:t[n++]});else o.push({type:"ASTERISK",index:n,value:t[n++]})}return o.push({type:"END",index:n,value:""}),o}function Pt(t,e={}){const o=Lt(t),{prefixes:n="./"}=e,i=`[^${Rt(void 0===e.delimiter?"/#?":e.delimiter)}]+?`,s=[];let r=0,a=0,l="",h=new Set;const c=t=>{if(a<o.length&&o[a].type===t)return o[a++].value},d=()=>{const t=c("MODIFIER");return t||c("ASTERISK")},u=t=>{const e=c(t);if(void 0!==e)return e;const{type:n,index:i}=o[a];throw new TypeError(`Unexpected ${n} at ${i}, expected ${t}`)},p=()=>{let t,e="";for(;t=c("CHAR")||c("ESCAPED_CHAR");)e+=t;return e},b=e.encodePart||(t=>t);for(;a<o.length;){const t=c("CHAR"),e=c("NAME");let o=c("PATTERN");if(e||o||!c("ASTERISK")||(o=".*"),e||o){let a=t||"";-1===n.indexOf(a)&&(l+=a,a=""),l&&(s.push(b(l)),l="");const c=e||r++;if(h.has(c))throw new TypeError(`Duplicate name '${c}'.`);h.add(c),s.push({name:c,prefix:b(a),suffix:"",pattern:o||i,modifier:d()||""});continue}const a=t||c("ESCAPED_CHAR");if(a){l+=a;continue}if(c("OPEN")){const t=p(),e=c("NAME")||"";let o=c("PATTERN")||"";e||o||!c("ASTERISK")||(o=".*");const n=p();u("CLOSE");const a=d()||"";if(!e&&!o&&!a){l+=t;continue}if(!e&&!o&&!t)continue;l&&(s.push(b(l)),l=""),s.push({name:e||(o?r++:""),pattern:e&&!o?i:o,prefix:b(t),suffix:b(n),modifier:a})}else l&&(s.push(b(l)),l=""),u("END")}return s}function Rt(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function Tt(t){return t&&t.ignoreCase?"ui":"u"}function zt(t,e,o={}){const{strict:n=!1,start:i=!0,end:s=!0,encode:r=(t=>t)}=o,a=`[${Rt(void 0===o.endsWith?"":o.endsWith)}]|$`,l=`[${Rt(void 0===o.delimiter?"/#?":o.delimiter)}]`;let h=i?"^":"";for(const o of t)if("string"==typeof o)h+=Rt(r(o));else{const t=Rt(r(o.prefix)),n=Rt(r(o.suffix));if(o.pattern)if(e&&e.push(o),t||n)if("+"===o.modifier||"*"===o.modifier){const e="*"===o.modifier?"?":"";h+=`(?:${t}((?:${o.pattern})(?:${n}${t}(?:${o.pattern}))*)${n})${e}`}else h+=`(?:${t}(${o.pattern})${n})${o.modifier}`;else"+"===o.modifier||"*"===o.modifier?h+=`((?:${o.pattern})${o.modifier})`:h+=`(${o.pattern})${o.modifier}`;else h+=`(?:${t}${n})${o.modifier}`}if(s)n||(h+=`${l}?`),h+=o.endsWith?`(?=${a})`:"$";else{const e=t[t.length-1],o="string"==typeof e?l.indexOf(e[e.length-1])>-1:void 0===e;n||(h+=`(?:${l}(?=${a}))?`),o||(h+=`(?=${l}|${a})`)}return new RegExp(h,Tt(o))}function It(t,e,o){return t instanceof RegExp?function(t,e){if(!e)return t;const o=/\((?:\?<(.*?)>)?(?!\?)/g;let n=0,i=o.exec(t.source);for(;i;)e.push({name:i[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),i=o.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,o){const n=t.map((t=>It(t,e,o).source));return new RegExp(`(?:${n.join("|")})`,Tt(o))}(t,e,o):function(t,e,o){return zt(Pt(t,o),e,o)}(t,e,o)}var Ut={delimiter:"",prefixes:"",sensitive:!0,strict:!0},Ot={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Nt={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function Dt(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Mt(t){return!(!t||t.length<2)&&("["===t[0]||("\\"===t[0]||"{"===t[0])&&"["===t[1])}var Bt=["ftp","file","http","https","ws","wss"];function Ht(t){if(!t)return!0;for(const e of Bt)if(t.test(e))return!0;return!1}function Ft(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function Vt(t){if(""===t)return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(`Invalid protocol '${t}'.`)}function Kt(t){if(""===t)return t;const e=new URL("https://example.com");return e.username=t,e.username}function qt(t){if(""===t)return t;const e=new URL("https://example.com");return e.password=t,e.password}function Wt(t){if(""===t)return t;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))throw new TypeError(`Invalid hostname '${t}'`);const e=new URL("https://example.com");return e.hostname=t,e.hostname}function Jt(t){if(""===t)return t;if(/[^0-9a-fA-F[\]:]/g.test(t))throw new TypeError(`Invalid IPv6 hostname '${t}'`);return t.toLowerCase()}function Gt(t){if(""===t)return t;if(/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(`Invalid port '${t}'.`)}function Xt(t){if(""===t)return t;const e=new URL("https://example.com");return e.pathname="/"!==t[0]?"/-"+t:t,"/"!==t[0]?e.pathname.substring(2,e.pathname.length):e.pathname}function Yt(t){if(""===t)return t;return new URL(`data:${t}`).pathname}function Zt(t){if(""===t)return t;const e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function Qt(t){if(""===t)return t;const e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}var te=["protocol","username","password","hostname","port","pathname","search","hash"],ee="*";function oe(t,e){if("string"!=typeof t)throw new TypeError("parameter 1 is not of type 'string'.");const o=new URL(t,e);return{protocol:o.protocol.substring(0,o.protocol.length-1),username:o.username,password:o.password,hostname:o.hostname,port:o.port,pathname:o.pathname,search:""!=o.search?o.search.substring(1,o.search.length):void 0,hash:""!=o.hash?o.hash.substring(1,o.hash.length):void 0}}function ne(t,e){return e?se(t):t}function ie(t,e,o){let n;if("string"==typeof e.baseURL)try{n=new URL(e.baseURL),t.protocol=ne(n.protocol.substring(0,n.protocol.length-1),o),t.username=ne(n.username,o),t.password=ne(n.password,o),t.hostname=ne(n.hostname,o),t.port=ne(n.port,o),t.pathname=ne(n.pathname,o),t.search=ne(n.search.substring(1,n.search.length),o),t.hash=ne(n.hash.substring(1,n.hash.length),o)}catch{throw new TypeError(`invalid baseURL '${e.baseURL}'.`)}if("string"==typeof e.protocol&&(t.protocol=function(t,e){var o,n;return n=":",t=(o=t).endsWith(n)?o.substr(0,o.length-n.length):o,e||""===t?t:Vt(t)}(e.protocol,o)),"string"==typeof e.username&&(t.username=function(t,e){if(e||""===t)return t;const o=new URL("https://example.com");return o.username=t,o.username}(e.username,o)),"string"==typeof e.password&&(t.password=function(t,e){if(e||""===t)return t;const o=new URL("https://example.com");return o.password=t,o.password}(e.password,o)),"string"==typeof e.hostname&&(t.hostname=function(t,e){return e||""===t?t:Mt(t)?Jt(t):Wt(t)}(e.hostname,o)),"string"==typeof e.port&&(t.port=function(t,e,o){return Ft(e)===t&&(t=""),o||""===t?t:Gt(t)}(e.port,t.protocol,o)),"string"==typeof e.pathname){if(t.pathname=e.pathname,n&&!function(t,e){return!(!t.length||"/"!==t[0]&&(!e||t.length<2||"\\"!=t[0]&&"{"!=t[0]||"/"!=t[1]))}(t.pathname,o)){const e=n.pathname.lastIndexOf("/");e>=0&&(t.pathname=ne(n.pathname.substring(0,e+1),o)+t.pathname)}t.pathname=function(t,e,o){if(o||""===t)return t;if(e&&!Bt.includes(e))return new URL(`${e}:${t}`).pathname;const n="/"==t[0];return t=new URL(n?t:"/-"+t,"https://example.com").pathname,n||(t=t.substring(2,t.length)),t}(t.pathname,t.protocol,o)}return"string"==typeof e.search&&(t.search=function(t,e){if(t=Dt(t,"?"),e||""===t)return t;const o=new URL("https://example.com");return o.search=t,o.search?o.search.substring(1,o.search.length):""}(e.search,o)),"string"==typeof e.hash&&(t.hash=function(t,e){if(t=Dt(t,"#"),e||""===t)return t;const o=new URL("https://example.com");return o.hash=t,o.hash?o.hash.substring(1,o.hash.length):""}(e.hash,o)),t}function se(t){return t.replace(/([+*?:{}()\\])/g,"\\$1")}function re(t,e){const o=`[^${n=void 0===e.delimiter?"/#?":e.delimiter,n.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}]+?`;var n;const i=/[$_\u200C\u200D\p{ID_Continue}]/u;let s="";for(let n=0;n<t.length;++n){const r=t[n],a=n>0?t[n-1]:null,l=n<t.length-1?t[n+1]:null;if("string"==typeof r){s+=se(r);continue}if(""===r.pattern){if(""===r.modifier){s+=se(r.prefix);continue}s+=`{${se(r.prefix)}}${r.modifier}`;continue}const h="number"!=typeof r.name,c=void 0!==e.prefixes?e.prefixes:"./";let d=""!==r.suffix||""!==r.prefix&&(1!==r.prefix.length||!c.includes(r.prefix));if(!d&&h&&r.pattern===o&&""===r.modifier&&l&&!l.prefix&&!l.suffix)if("string"==typeof l){const t=l.length>0?l[0]:"";d=i.test(t)}else d="number"==typeof l.name;if(!d&&""===r.prefix&&a&&"string"==typeof a&&a.length>0){const t=a[a.length-1];d=c.includes(t)}d&&(s+="{"),s+=se(r.prefix),h&&(s+=`:${r.name}`),".*"===r.pattern?h||a&&"string"!=typeof a&&!a.modifier&&!d&&""===r.prefix?s+="(.*)":s+="*":r.pattern===o?h||(s+=`(${o})`):s+=`(${r.pattern})`,r.pattern===o&&h&&""!==r.suffix&&i.test(r.suffix[0])&&(s+="\\"),s+=se(r.suffix),d&&(s+="}"),s+=r.modifier}return s}globalThis.URLPattern||(globalThis.URLPattern=class{constructor(t={},e,o){this.regexp={},this.keys={},this.component_pattern={};try{let n;if("string"==typeof e?n=e:o=e,"string"==typeof t){const e=new class{constructor(t){this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=0,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=t}get result(){return this.internalResult}parse(){for(this.tokenList=Lt(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,"END"===this.tokenList[this.tokenIndex].type){if(0===this.state){this.rewind(),this.isHashPrefix()?this.changeState(9,1):this.isSearchPrefix()?(this.changeState(8,1),this.internalResult.hash=""):(this.changeState(7,0),this.internalResult.search="",this.internalResult.hash="");continue}if(2===this.state){this.rewindAndSetState(5);continue}this.changeState(10,0);break}if(this.groupDepth>0){if(!this.isGroupClose())continue;this.groupDepth-=1}if(this.isGroupOpen())this.groupDepth+=1;else switch(this.state){case 0:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(1));break;case 1:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();let t=7,e=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(t=2,e=3):this.shouldTreatAsStandardURL&&(t=2),this.changeState(t,e)}break;case 2:this.isIdentityTerminator()?this.rewindAndSetState(3):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(5);break;case 3:this.isPasswordPrefix()?this.changeState(4,1):this.isIdentityTerminator()&&this.changeState(5,1);break;case 4:this.isIdentityTerminator()&&this.changeState(5,1);break;case 5:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(6,1):this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 6:this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 7:this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 8:this.isHashPrefix()&&this.changeState(9,1)}}}changeState(t,e){switch(this.state){case 0:case 2:break;case 1:this.internalResult.protocol=this.makeComponentString();break;case 3:this.internalResult.username=this.makeComponentString();break;case 4:this.internalResult.password=this.makeComponentString();break;case 5:this.internalResult.hostname=this.makeComponentString();break;case 6:this.internalResult.port=this.makeComponentString();break;case 7:this.internalResult.pathname=this.makeComponentString();break;case 8:this.internalResult.search=this.makeComponentString();break;case 9:this.internalResult.hash=this.makeComponentString()}this.changeStateWithoutSettingComponent(t,e)}changeStateWithoutSettingComponent(t,e){this.state=t,this.componentStart=this.tokenIndex+e,this.tokenIndex+=e,this.tokenIncrement=0}rewind(){this.tokenIndex=this.componentStart,this.tokenIncrement=0}rewindAndSetState(t){this.rewind(),this.state=t}safeToken(t){return t<0&&(t=this.tokenList.length-t),t<this.tokenList.length?this.tokenList[t]:this.tokenList[this.tokenList.length-1]}isNonSpecialPatternChar(t,e){const o=this.safeToken(t);return o.value===e&&("CHAR"===o.type||"ESCAPED_CHAR"===o.type||"INVALID_CHAR"===o.type)}isProtocolSuffix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}nextIsAuthoritySlashes(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")}isIdentityTerminator(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")}isPasswordPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPortPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPathnameStart(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")}isSearchPrefix(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return!0;if("?"!==this.tokenList[this.tokenIndex].value)return!1;const t=this.safeToken(this.tokenIndex-1);return"NAME"!==t.type&&"PATTERN"!==t.type&&"CLOSE"!==t.type&&"ASTERISK"!==t.type}isHashPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")}isGroupOpen(){return"OPEN"==this.tokenList[this.tokenIndex].type}isGroupClose(){return"CLOSE"==this.tokenList[this.tokenIndex].type}isIPv6Open(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")}isIPv6Close(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")}makeComponentString(){const t=this.tokenList[this.tokenIndex],e=this.safeToken(this.componentStart).index;return this.input.substring(e,t.index)}computeShouldTreatAsStandardURL(){const t={};Object.assign(t,Ut),t.encodePart=Vt;const e=It(this.makeComponentString(),void 0,t);this.shouldTreatAsStandardURL=Ht(e)}}(t);if(e.parse(),t=e.result,void 0===n&&"string"!=typeof t.protocol)throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=n}else{if(!t||"object"!=typeof t)throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(n)throw new TypeError("parameter 1 is not of type 'string'.")}void 0===o&&(o={ignoreCase:!1});const i={ignoreCase:!0===o.ignoreCase},s={pathname:ee,protocol:ee,username:ee,password:ee,hostname:ee,port:ee,search:ee,hash:ee};let r;for(r of(this.pattern=ie(s,t,!0),Ft(this.pattern.protocol)===this.pattern.port&&(this.pattern.port=""),te)){if(!(r in this.pattern))continue;const t={},e=this.pattern[r];switch(this.keys[r]=[],r){case"protocol":Object.assign(t,Ut),t.encodePart=Vt;break;case"username":Object.assign(t,Ut),t.encodePart=Kt;break;case"password":Object.assign(t,Ut),t.encodePart=qt;break;case"hostname":Object.assign(t,Ot),Mt(e)?t.encodePart=Jt:t.encodePart=Wt;break;case"port":Object.assign(t,Ut),t.encodePart=Gt;break;case"pathname":Ht(this.regexp.protocol)?(Object.assign(t,Nt,i),t.encodePart=Xt):(Object.assign(t,Ut,i),t.encodePart=Yt);break;case"search":Object.assign(t,Ut,i),t.encodePart=Zt;break;case"hash":Object.assign(t,Ut,i),t.encodePart=Qt}try{const o=Pt(e,t);this.regexp[r]=zt(o,this.keys[r],t),this.component_pattern[r]=re(o,t)}catch{throw new TypeError(`invalid ${r} pattern '${this.pattern[r]}'.`)}}}catch(t){throw new TypeError(`Failed to construct 'URLPattern': ${t.message}`)}}test(t={},e){let o,n={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof t&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===t)return!1;try{n=ie(n,"object"==typeof t?t:oe(t,e),!1)}catch(t){return!1}for(o of te)if(!this.regexp[o].exec(n[o]))return!1;return!0}exec(t={},e){let o={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof t&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===t)return;try{o=ie(o,"object"==typeof t?t:oe(t,e),!1)}catch(t){return null}let n,i={};for(n of(i.inputs=e?[t,e]:[t],te)){let t=this.regexp[n].exec(o[n]);if(!t)return null;let e={};for(let[o,i]of this.keys[n].entries())if("string"==typeof i.name||"number"==typeof i.name){let n=t[o+1];e[i.name]=n}i[n]={input:o[n]||"",groups:e}}return i}get protocol(){return this.component_pattern.protocol}get username(){return this.component_pattern.username}get password(){return this.component_pattern.password}get hostname(){return this.component_pattern.hostname}get port(){return this.component_pattern.port}get pathname(){return this.component_pattern.pathname}get search(){return this.component_pattern.search}get hash(){return this.component_pattern.hash}});const ae=new WeakMap,le=t=>{if((t=>void 0!==t.pattern)(t))return t.pattern;let e=ae.get(t);return void 0===e&&ae.set(t,e=new URLPattern({pathname:t.path})),e};class he{constructor(t,e,o){this.routes=[],this.o=[],this.t={},this.i=t=>{if(t.routes===this)return;const e=t.routes;this.o.push(e),e.l=this,t.stopImmediatePropagation(),t.onDisconnect=()=>{var t;null===(t=this.o)||void 0===t||t.splice(this.o.indexOf(e)>>>0,1)};const o=ce(this.t);void 0!==o&&e.goto(o)},(this.h=t).addController(this),this.routes=[...e],this.fallback=null==o?void 0:o.fallback}link(t){var e,o;if(null==t?void 0:t.startsWith("/"))return t;if(null==t?void 0:t.startsWith("."))throw Error("Not implemented");return null!=t||(t=this.u),(null!==(o=null===(e=this.l)||void 0===e?void 0:e.link())&&void 0!==o?o:"")+t}async goto(t){var e;let o;if(0===this.routes.length&&void 0===this.fallback)o=t,this.u="",this.t={0:o};else{const n=this.v(t);if(void 0===n)throw Error("No route found for "+t);const i=le(n).exec({pathname:t}),s=null!==(e=null==i?void 0:i.pathname.groups)&&void 0!==e?e:{};if(o=ce(s),"function"==typeof n.enter&&!1===await n.enter(s))return;this.p=n,this.t=s,this.u=void 0===o?t:t.substring(0,t.length-o.length)}if(void 0!==o)for(const t of this.o)t.goto(o);this.h.requestUpdate()}outlet(){var t,e;return null===(e=null===(t=this.p)||void 0===t?void 0:t.render)||void 0===e?void 0:e.call(t,this.t)}get params(){return this.t}v(t){const e=this.routes.find((e=>le(e).test({pathname:t})));return e||void 0===this.fallback?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.h.addEventListener(de.eventName,this.i);const t=new de(this);this.h.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;null===(t=this._)||void 0===t||t.call(this),this.l=void 0}}const ce=t=>{let e;for(const o of Object.keys(t))/\d+/.test(o)&&(void 0===e||o>e)&&(e=o);return e&&t[e]};class de extends Event{constructor(t){super(de.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}de.eventName="lit-routes-connected";const ue=location.origin||location.protocol+"//"+location.host;class pe extends he{constructor(){super(...arguments),this.m=t=>{const e=0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const o=t.composedPath().find((t=>"A"===t.tagName));if(void 0===o||""!==o.target||o.hasAttribute("download")||"external"===o.getAttribute("rel"))return;const n=o.href;if(""===n||n.startsWith("mailto:"))return;const i=window.location;o.origin===ue&&(t.preventDefault(),n!==i.href&&(window.history.pushState({},"",n),this.goto(o.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}class be extends Event{constructor(t,e,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=o}}class me{constructor(t,e,o,n){var i;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=null!==(i=t.subscribe)&&void 0!==i&&i}else this.context=e,this.callback=o,this.subscribe=null!=n&&n;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new be(this.context,this.t,this.subscribe))}}class ge{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(const[t,e]of this.callbacks)t(this.o,e)},void 0!==t&&(this.value=t)}get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}addCallback(t,e){e&&(this.callbacks.has(t)||this.callbacks.set(t,(()=>{this.callbacks.delete(t)}))),t(this.value)}clearCallbacks(){this.callbacks.clear()}}class fe extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,Object.setPrototypeOf(this,new.target.prototype)}}class ve extends ge{constructor(t,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{t.context===this.context&&t.composedPath()[0]!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,t.subscribe))},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new fe(this.context))}}function ye({context:t,subscribe:e}){return dt({finisher:(o,n)=>{o.addInitializer((o=>{new me(o,{context:t,callback:t=>{o[n]=t},subscribe:e})}))}})}const we=function(t){let e=this.getBoundingClientRect(),o=document.createElement("div"),n=getComputedStyle(this).overflow,i="rgba(255,255,255,0)",s="rgba(255,255,255,.3)",r=Math.sqrt(e.width*e.width+e.height*e.height)/10;this.style.overflow="hidden",o.style=`\n      width:20px;\n      height:20px;\n      border-radius: 50%;\n      background: radial-gradient(circle, \n      ${s} 0%, ${i} 5%, ${i} 7%, \n      ${s} 13%, ${s} 17%, ${i} 30%, \n      ${i} 35%, ${s} 51%,${s} 58%,\n      ${i} 68%, ${i} 75%, ${s} 100%);\n      position: absolute;\n      opacity: 0;\n      transform-origin: 'center center';\n      left: ${t.clientX-e.left-10}px;\n      top: ${t.clientY-e.top-10}px;`,this.prepend(o);let a=o.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${r})`,opacity:.1}],{duration:600});Promise.resolve(a.finished).then((()=>{o.remove(),this.style.overflow=n}))},ke="ix-db",_e="spa-routes",xe=t=>t.replace(/\d+\|/g,(t=>`||${t}`)).substring(2).split("||").map((t=>{const[e,o]=t.split("|");return{n:e,txt:o}})),$e=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"],Se=$e.map((t=>[t])),Ae=t=>{const e=(t=>t.reduce(((t,e,o)=>(e.forEach((e=>t[e]=$e[o])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""};var Ce={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegiël","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Joël","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthiërs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthiërs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasiërs","gal","ga"],["Efesiërs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Filémon","filem","file","flm"],["Hebreërs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};const Ee={},je=t=>Ee[t];let Le,Pe,Re,Te,ze,Ie;function Ue(){if(Te=Re,Ie.last.books[Le].chapters[Pe].verse!==ze.last.books[Le].chapters[Pe].verse){let t=!1,e=!1;Pe-1>=0&&Ie.last.books[Le].chapters[Pe-1].verse!==ze.last.books[Le].chapters[Pe-1].verse&&(e=!0),Pe+1<=Ie.last.books[Le].chapter&&Ie.last.books[Le].chapters[Pe+1].verse!==ze.last.books[Le].chapters[Pe+1].verse&&(t=!0),t&&Te>Ie.last.books[Le].chapters[Pe].verse&&(Te=1,Pe+=1),e&&Ie.last.books[Le].chapters[Pe].verse>ze.last.books[Le].chapters[Pe].verse&&(Te=Re+1)}}const Oe=(t,e,o)=>{ze=je(e),Ie=je(o);const n=t.match(/^\[([\d]*):([[\d]*):([\d])*\]$/);if(n)Le=parseInt(n[1]),Pe=parseInt(n[2]),Re=parseInt(n[3]);else{const e=t.split(":");Le=parseInt(e[0]),Pe=parseInt(e[1]),Re=parseInt(e[2])}switch(Le){case 15:case 18:!function(){const t=Ie.last.books[Le].chapters[Pe].verse-ze.last.books[Le].chapters[Pe].verse;Te=Re+t,Te=t<0?Te<1?0:Te:Te>Ie.last.books[Le].chapters[Pe].verse?Ie.last.books[Le].chapters[Pe].verse:Te}();break;case 1:case 20:case 22:case 26:case 32:case 27:case 8:Ue();break;default:Te=Re}return n?`[${Le}:${Pe}:${Te}]`:`${Le}:${Pe}:${Te}`},Ne=new function(t){const e=(o=[...t,Se])?1===o.length?[...o[0]]:o.reduce(((t,e)=>((t,e)=>t.length?t.map(((t,o)=>((t,e)=>t.concat(e.filter((e=>-1===t.indexOf(e)))))(t,e[o]))):[...e])(t,e)),[]):[];var o;const n=(t=>{const e=(t=>t.reduce(((t,e)=>(e.forEach((o=>t[o]=e[0])),t)),{}))(t);return t=>e[t&&t.toLowerCase()]||""})(e),i=Ae(e),s=e.map((t=>t.join("|"))).join("|"),r="\\d{1,3}",a="\\d{1,3}",l=new RegExp(`^(${s})\\s*(${r})[ ]*:[ ]*(${a})\\b`),h=new RegExp(`^(${s})[ ]*(${r})\\b`),c=new RegExp(`^(?:${s})$`),d=new RegExp(`(^|,|;)(${s})`,"g"),u=new RegExp(`,(${s})`,"g"),p=new RegExp(`(${s})(\\d)`,"g"),b=new RegExp(`^(${r})[ ]*:[ ]*(${a})\\b`),m=new RegExp(`^(?:${s})[ ]*ff`),g=new RegExp(`^(${s})(\\d|$)`,"g");function f(t,e,o){let i,s={};return""===t?{}:e?(o.book&&o.chapter&&o.verse?s={book:o.book,chapter:o.chapter}:o.book&&o.chapter&&(s={book:o.book}),s):void 0===t?{...o}:(s=(i=t.match(l))?{book:n(i[1]),chapter:i[2],verse:i[3]}:(i=t.match(h))?{book:n(i[1]),chapter:i[2]}:(i=t.match(c))?{book:n(i[0])}:(i=t.match(b))?{book:o.book,chapter:i[1],verse:i[2]}:(i=t.match(/(\d{1,3}\b)/))?o.verse?{book:o.book,chapter:o.chapter,verse:i[1]}:{book:o.book,chapter:i[1]}:{...o},s)}function v(t,e){let o,i,s=!1,[r,a]=t.split("-").map((t=>t.trim().toLowerCase()));return(/\d{1,3}[ ]*ff$/i.test(r)||m.test(r))&&(r=r.replace(/[ ]*ff$/,""),s=!0),(o=r.match(l))?(i={book:n(o[1]),chapter:o[2],verse:o[3]},e={...i}):(o=r.match(h))?(i={book:n(o[1]),chapter:o[2],verse:"1"},e={book:i.book,chapter:i.chapter}):(o=r.match(c))?(i={book:n(o[0]),chapter:"1",verse:"1"},e={book:i.book}):(o=r.match(b))?(i={book:e.book,chapter:o[1],verse:o[2]},e={...i}):(o=r.match(/(\d{1,3}\b)/))&&(e.verse?(i={book:e.book,chapter:e.chapter,verse:o[1]},e={...i}):(i={book:e.book,chapter:o[1],verse:"1"},e={book:i.book,chapter:i.chapter})),{start:i,end:f(a,s,e),ctx:e}}this.getVerseRanges=t=>{const{ranges:e}=t.split(/[,\n;]+/g).reduce(((t,e)=>{const o=v(e,t.ctx);return t.ctx=o.ctx,o.start&&t.ranges.push({start:o.start,end:o.end}),t}),{ctx:{book:"genesis"},ranges:[]});return e},this.bookNames=e,this.normaliseBookName=n,this.normaliseBookNameShort=i,this.partToRange=v,this.compressRangesText=t=>t.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce(((t,e)=>[...t,e.split(",").reduce(((t,e)=>{const o=e.split("-").map((t=>t.replace(g,((t,e,o)=>`${i(e)}${o||""}`)))).join("-");return[...t,o]}),[])]),[]).join(";"),this.uncompressRangesText=t=>t.toLowerCase().replace(d,((t,e,o)=>`${e}${n(o)}`)).replace(u,((t,e)=>`, ${e}`)).replace(p,((t,e,o)=>`${e} ${o}`)).replace(/;/g,"\n")}([Ce,{key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]}].map((({abbreviations:t})=>t))),{bookNames:De,getVerseRanges:Me}=Ne,Be=De.reduce(((t,e,o)=>(t[e[0]]=o,t)),{}),He=De.reduce(((t,e,o)=>(t[o]=e[0],t)),{}),Fe=t=>{const e=[],o={},n={book:0,books:{}};return t.forEach(((t,i)=>{n.book=i,n.books[i]={chapter:0,chapters:{}},t.forEach(((t,s)=>{n.books[i].chapter=s,n.books[i].chapters[s]={verse:0},t.forEach((t=>{n.books[i].chapters[s].verse=+t.n,o[`${i}:${s}:${t.n}`]=e.length,e.push({hash:`${i}:${s}:${t.n}`,text:t.txt})}))}))})),{verseList:e,verseLookUp:o,last:n}},Ve=(t,e)=>void 0===t||t>e?e:t,Ke=t=>He[t],qe=t=>{const e=t.split(":");return{book:$e[+e[0]],chapter:""+(+e[1]+1),verse:e[2]}},We=({rangesText:t,versionName:e})=>Me(t||"gen - rev").map((t=>((t,e)=>{const{start:o,end:n}=e,i=je(t);if(!i)return{};const s=i.verseLookUp[`${Be[o.book]}:${o.chapter-1}:${o.verse}`],r=i.last.book,a=Ve(Be[n.book],r),l=i.last.books[a].chapter,h=Ve(n.chapter&&n.chapter-1,l),c=i.last.books[a].chapters[h].verse,d=Ve(n.verse,c),u=i.verseLookUp[`${a}:${h}:${d}`];return{start:{...o,index:s},end:{book:Ke(a),chapter:`${h+1}`,verse:`${d}`,index:u}}})(e,t))),Je=(t,e)=>{const o=((t,e)=>Ee[t].verseLookUp[e])(t,e),n=((t,e)=>Ee[t].verseList[e])(t,o);return{text:n?n.text:"",prettyRef:Xe(qe(e))}},Ge=(t,e)=>{const o=e.map((({start:e,end:o})=>((t,e,o)=>((t,e)=>{const o=[];for(let n=t;n<=e;n++)o.push(n);return o})(e,o).map((e=>je(t).verseList[e].hash)))(t,e.index,o.index)));return[].concat(...o)},Xe=({book:t,chapter:e,verse:o})=>{return`${n=t,n.replace(/\b\w/g,(t=>t.toUpperCase()))} ${e}:${o}`;var n},Ye={},Ze=(t,e)=>(Ye[t]||(Ye[t]=fetch(e).then((e=>{if(e.status>=400)throw delete Ye[t],new Error("Bad res from server");return e.text()})).then((e=>{const o=e.split("|||").map((t=>t.split("||").map(xe)));return((t,e)=>{Ee[t]=Fe(e)})(t,o),o}))),Ye[t]);let Qe="";const to=t=>{const e=t.split("\n");return e.splice(0,1),e.map(eo)},eo=t=>{const[e,o,n,i,s,r]=t.split("\t");return{key:e+"-"+o+"-"+n+":"+i,verse:e+"-"+o+"-"+n,sort:i,words:s,refs:r}};function oo(t){const[e,o,n]=t.split(":");return`${parseInt(e)+1}-${parseInt(o)+1}-${n}`}const no="/bybel2/";console.log("Github page prefix",no);var io={environment:"development",appName:"1953/KJV Interliniêre Bybel",appDescription:"Afrikaanse en Engelse Bybel met Treasury of Scripture Knowledge verwysings"},so=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,ao=(t,e,o,n)=>{for(var i,s=n>1?void 0:n?ro(e,o):e,r=t.length-1;r>=0;r--)(i=t[r])&&(s=(n?i(e,o,s):i(s))||s);return n&&s&&so(e,o,s),s};let lo="";function ho(t){lo=t}const co={name:"default",resolver:t=>function(t=""){if(!lo){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ho(e.getAttribute("data-shoelace"));else{const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),ho(o.split("/").slice(0,-1).join("/"))}}return lo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)};const uo={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '};let po=[co,{name:"system",resolver:t=>t in uo?`data:image/svg+xml,${encodeURIComponent(uo[t])}`:""}],bo=[];function mo(t){return po.find((e=>e.name===t))}function go(t,e){const o=Object.assign({waitUntilFirstUpdate:!1},e);return(e,n)=>{const{update:i}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),s=this[i];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[n](e,s))}})),i.call(this,t)}}}var fo=function(t,e,o,n){var i,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,o,r):i(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r};class vo extends st{emit(t,e){const o=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}}fo([ht()],vo.prototype,"dir",void 0),fo([ht()],vo.prototype,"lang",void 0);var yo=a`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wo=a`
  ${yo}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;const ko=Symbol(),_o=Symbol();let xo;const $o=new Map;let So=class extends vo{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let n;if(null==e?void 0:e.spriteSheet)return D`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return 410===n.status?ko:_o}catch(t){return _o}try{const t=document.createElement("div");t.innerHTML=await n.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return ko;xo||(xo=new DOMParser);const i=xo.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):ko}catch(t){return ko}}connectedCallback(){var t;super.connectedCallback(),t=this,bo.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,bo=bo.filter((e=>e!==t))}getUrl(){const t=mo(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=mo(this.library),o=this.getUrl();if(!o)return void(this.svg=null);let n=$o.get(o);if(n||(n=this.resolveIcon(o,e),$o.set(o,n)),!this.initialRender)return;const i=await n;if(i===_o&&$o.delete(o),o===this.getUrl())if(((t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e)(i))this.svg=i;else switch(i){case _o:case ko:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),null==(t=null==e?void 0:e.mutator)||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};So.styles=wo,ao([ct()],So.prototype,"svg",2),ao([ht({reflect:!0})],So.prototype,"name",2),ao([ht()],So.prototype,"src",2),ao([ht()],So.prototype,"label",2),ao([ht({reflect:!0})],So.prototype,"library",2),ao([go("label")],So.prototype,"handleLabelChange",1),ao([go(["name","src","library"])],So.prototype,"setIcon",1),So=ao([at("sl-icon")],So);const Ao=new Set,Co=new MutationObserver(Ro),Eo=new Map;let jo,Lo=document.documentElement.dir||"ltr",Po=document.documentElement.lang||navigator.language;function Ro(){Lo=document.documentElement.dir||"ltr",Po=document.documentElement.lang||navigator.language,[...Ao.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}Co.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class To{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ao.add(this.host)}hostDisconnected(){Ao.delete(this.host)}dir(){return`${this.host.dir||Lo}`.toLowerCase()}lang(){return`${this.host.lang||Po}`.toLowerCase()}getTranslationData(t){var e,o;const n=new Intl.Locale(t),i=null==n?void 0:n.language.toLowerCase(),s=null!==(o=null===(e=null==n?void 0:n.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return{locale:n,language:i,region:s,primary:Eo.get(`${i}-${s}`),secondary:Eo.get(i)}}exists(t,e){var o;const{primary:n,secondary:i}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(n&&n[t]||i&&i[t]||e.includeFallback&&jo&&jo[t])}term(t,...e){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(n&&n[t])i=n[t];else{if(!jo||!jo[t])return console.error(`No translation found for: ${String(t)}`),String(t);i=jo[t]}return"function"==typeof i?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}!function(...t){t.map((t=>{const e=t.$code.toLowerCase();Eo.has(e)?Eo.set(e,Object.assign(Object.assign({},Eo.get(e)),t)):Eo.set(e,t),jo||(jo=t)})),Ro()}({$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"});class zo extends To{}var Io=a`
  ${yo}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;let Uo=class extends vo{constructor(){super(...arguments),this.localize=new zo(this)}render(){return D`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Uo.styles=Io,Uo=ao([at("sl-spinner")],Uo);const Oo=mt(class extends gt{constructor(t){var e;if(super(t),t.type!==bt.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,n;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.nt.add(t);return this.render(e)}const i=t.element.classList;this.nt.forEach((t=>{t in e||(i.remove(t),this.nt.delete(t))}));for(const t in e){const o=!!e[t];o===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(o?(i.add(t),this.nt.add(t)):(i.remove(t),this.nt.delete(t)))}return M}}),No=new WeakMap,Do=new WeakMap,Mo=new WeakSet,Bo=new WeakMap;class Ho{constructor(t,e){(this.host=t).addController(this),this.options=Object.assign({form:t=>{if(t.hasAttribute("form")&&""!==t.getAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");if(o)return e.getElementById(o)}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!==(e=t.disabled)&&void 0!==e&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Bo.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),Bo.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction)}))}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,No.has(this.form)?No.get(this.form).add(this.host):No.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Do.has(this.form)||(Do.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&(null===(t=No.get(this.form))||void 0===t||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Do.has(this.form)&&(this.form.reportValidity=Do.get(this.form),Do.delete(this.form))),this.form=void 0}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();!e&&!i&&"string"==typeof o&&o.length>0&&void 0!==n&&(Array.isArray(n)?n.forEach((e=>{t.formData.append(o,e.toString())})):t.formData.append(o,n.toString()))}handleFormSubmit(t){var e;const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&(null===(e=No.get(this.form))||void 0===e||e.forEach((t=>{this.setUserInteracted(t,!0)}))),!this.form||this.form.noValidate||o||n(this.host)||(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Bo.set(this.host,[])}handleInteraction(t){const e=Bo.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Mo.add(t):Mo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t))}))),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return null!==(t=this.form)&&void 0!==t?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=Boolean(Mo.has(e)),n=Boolean(e.required);e.toggleAttribute("data-required",n),e.toggleAttribute("data-optional",!n),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}}const Fo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Object.assign(Object.assign({},Fo),{valid:!1,valueMissing:!0})),Object.freeze(Object.assign(Object.assign({},Fo),{valid:!1,customError:!0}));class Vo{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}}const Ko=Symbol.for(""),qo=t=>{if((null==t?void 0:t.r)===Ko)return null==t?void 0:t._$litStatic$},Wo=(t,...e)=>({_$litStatic$:e.reduce(((e,o,n)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[n+1]),t[0]),r:Ko}),Jo=new Map,Go=(t=>(e,...o)=>{const n=o.length;let i,s;const r=[],a=[];let l,h=0,c=!1;for(;h<n;){for(l=e[h];h<n&&void 0!==(s=o[h],i=qo(s));)l+=i+e[++h],c=!0;a.push(s),r.push(l),h++}if(h===n&&r.push(e[n]),c){const t=r.join("$$lit$$");void 0===(e=Jo.get(t))&&(r.raw=r,Jo.set(t,e=r)),o=a}return t(e,...o)})(D),Xo=t=>null!=t?t:B;var Yo=a`
  ${yo}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;let Zo=class extends vo{constructor(){super(),this.formControlController=new Ho(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Vo(this,"[default]","prefix","suffix"),this.localize=new zo(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=t=>{(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:Fo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Wo`a`:Wo`button`;return Go`
      <${e}
        part="base"
        class=${Oo({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Xo(t?void 0:this.disabled)}
        type=${Xo(t?void 0:this.type)}
        title=${this.title}
        name=${Xo(t?void 0:this.name)}
        value=${Xo(t?void 0:this.value)}
        href=${Xo(t?this.href:void 0)}
        target=${Xo(t?this.target:void 0)}
        download=${Xo(t?this.download:void 0)}
        rel=${Xo(t?this.rel:void 0)}
        role=${Xo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Go` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Go`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};Zo.styles=Yo,ao([ut(".button")],Zo.prototype,"button",2),ao([ct()],Zo.prototype,"hasFocus",2),ao([ct()],Zo.prototype,"invalid",2),ao([ht()],Zo.prototype,"title",2),ao([ht({reflect:!0})],Zo.prototype,"variant",2),ao([ht({reflect:!0})],Zo.prototype,"size",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"caret",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"disabled",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"loading",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"outline",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"pill",2),ao([ht({type:Boolean,reflect:!0})],Zo.prototype,"circle",2),ao([ht()],Zo.prototype,"type",2),ao([ht()],Zo.prototype,"name",2),ao([ht()],Zo.prototype,"value",2),ao([ht()],Zo.prototype,"href",2),ao([ht()],Zo.prototype,"target",2),ao([ht()],Zo.prototype,"rel",2),ao([ht()],Zo.prototype,"download",2),ao([ht()],Zo.prototype,"form",2),ao([ht({attribute:"formaction"})],Zo.prototype,"formAction",2),ao([ht({attribute:"formenctype"})],Zo.prototype,"formEnctype",2),ao([ht({attribute:"formmethod"})],Zo.prototype,"formMethod",2),ao([ht({attribute:"formnovalidate",type:Boolean})],Zo.prototype,"formNoValidate",2),ao([ht({attribute:"formtarget"})],Zo.prototype,"formTarget",2),ao([go("disabled",{waitUntilFirstUpdate:!0})],Zo.prototype,"handleDisabledChange",1),Zo=ao([at("sl-button")],Zo);var Qo=a`
  ${yo}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let tn=class extends vo{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Wo`a`:Wo`button`;return Go`
      <${e}
        part="base"
        class=${Oo({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Xo(t?void 0:this.disabled)}
        type=${Xo(t?void 0:"button")}
        href=${Xo(t?this.href:void 0)}
        target=${Xo(t?this.target:void 0)}
        download=${Xo(t?this.download:void 0)}
        rel=${Xo(t&&this.target?"noreferrer noopener":void 0)}
        role=${Xo(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Xo(this.name)}
          library=${Xo(this.library)}
          src=${Xo(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};function en(t,e,o){return new Promise((n=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=t.animate(e,Object.assign(Object.assign({},o),{duration:on()?0:o.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})}))}function on(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nn(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const o=requestAnimationFrame(e);t.addEventListener("cancel",(()=>o),{once:!0}),t.addEventListener("finish",(()=>o),{once:!0}),t.cancel()})))))}tn.styles=Qo,ao([ut(".icon-button")],tn.prototype,"button",2),ao([ct()],tn.prototype,"hasFocus",2),ao([ht()],tn.prototype,"name",2),ao([ht()],tn.prototype,"library",2),ao([ht()],tn.prototype,"src",2),ao([ht()],tn.prototype,"href",2),ao([ht()],tn.prototype,"target",2),ao([ht()],tn.prototype,"download",2),ao([ht()],tn.prototype,"label",2),ao([ht({type:Boolean,reflect:!0})],tn.prototype,"disabled",2),tn=ao([at("sl-icon-button")],tn);const sn=new Map,rn=new WeakMap;function an(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ln(t,e){sn.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function hn(t,e,o){const n=rn.get(t);if(null==n?void 0:n[e])return an(n[e],o.dir);const i=sn.get(e);return i?an(i,o.dir):{keyframes:[],options:{duration:0}}}const cn=new Set;function dn(t){if(cn.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function un(t){cn.delete(t),0===cn.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function pn(t,e){return new Promise((o=>{t.addEventListener(e,(function n(i){i.target===t&&(t.removeEventListener(e,n),o())}))}))}function bn(t){const e=t.tagName.toLowerCase();return"-1"!==t.getAttribute("tabindex")&&(!t.hasAttribute("disabled")&&((!t.hasAttribute("aria-disabled")||"false"===t.getAttribute("aria-disabled"))&&(!("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))&&(null!==t.offsetParent&&("hidden"!==window.getComputedStyle(t).visibility&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||(!!t.hasAttribute("tabindex")||(!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||["button","input","select","textarea","a","audio","video","summary"].includes(e)))))))))}let mn=[];class gn{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){mn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){mn=mn.filter((t=>t!==this.element)),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return mn[mn.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=function(t){var e,o;const n=[];return function t(e){e instanceof HTMLElement&&(n.push(e),null!==e.shadowRoot&&"open"===e.shadowRoot.mode&&t(e.shadowRoot)),[...e.children].forEach((e=>t(e)))}(t),{start:null!==(e=n.find((t=>bn(t))))&&void 0!==e?e:null,end:null!==(o=n.reverse().find((t=>bn(t))))&&void 0!==o?o:null}}(this.element),o="forward"===this.tabDirection?t:e;"function"==typeof(null==o?void 0:o.focus)&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){"Tab"===t.key&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame((()=>this.checkFocus())))}handleKeyUp(){this.tabDirection="forward"}}var fn=a`
  ${yo}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let vn=class extends vo{constructor(){super(...arguments),this.hasSlotController=new Vo(this,"footer"),this.localize=new zo(this),this.modal=new gn(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),dn(this))}disconnectedCallback(){super.disconnectedCallback(),un(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=hn(this,"dialog.denyClose",{dir:this.localize.dir()});en(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),dn(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([nn(this.dialog),nn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=hn(this,"dialog.show",{dir:this.localize.dir()}),o=hn(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([en(this.panel,e.keyframes,e.options),en(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([nn(this.dialog),nn(this.overlay)]);const t=hn(this,"dialog.hide",{dir:this.localize.dir()}),e=hn(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([en(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),en(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,un(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,pn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pn(this,"sl-after-hide")}render(){return D`
      <div
        part="base"
        class=${Oo({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Xo(this.noHeader?this.label:void 0)}
          aria-labelledby=${Xo(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":D`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};function yn(t){return t.charAt(0).toUpperCase()+t.slice(1)}vn.styles=fn,ao([ut(".dialog")],vn.prototype,"dialog",2),ao([ut(".dialog__panel")],vn.prototype,"panel",2),ao([ut(".dialog__overlay")],vn.prototype,"overlay",2),ao([ht({type:Boolean,reflect:!0})],vn.prototype,"open",2),ao([ht({reflect:!0})],vn.prototype,"label",2),ao([ht({attribute:"no-header",type:Boolean,reflect:!0})],vn.prototype,"noHeader",2),ao([go("open",{waitUntilFirstUpdate:!0})],vn.prototype,"handleOpenChange",1),vn=ao([at("sl-dialog")],vn),ln("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),ln("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),ln("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),ln("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ln("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var wn=a`
  ${yo}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;let kn=class extends vo{constructor(){super(...arguments),this.hasSlotController=new Vo(this,"footer"),this.localize=new zo(this),this.modal=new gn(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.open&&!this.contained&&"Escape"===t.key&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),dn(this)))}disconnectedCallback(){super.disconnectedCallback(),un(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=hn(this,"drawer.denyClose",{dir:this.localize.dir()});en(this.panel,t.keyframes,t.options)}else this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),dn(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([nn(this.drawer),nn(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")}));const e=hn(this,`drawer.show${yn(this.placement)}`,{dir:this.localize.dir()}),o=hn(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([en(this.panel,e.keyframes,e.options),en(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),un(this)),await Promise.all([nn(this.drawer),nn(this.overlay)]);const t=hn(this,`drawer.hide${yn(this.placement)}`,{dir:this.localize.dir()}),e=hn(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([en(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0})),en(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),dn(this)),this.open&&this.contained&&(this.modal.deactivate(),un(this))}async show(){if(!this.open)return this.open=!0,pn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pn(this,"sl-after-hide")}render(){return D`
      <div
        part="base"
        class=${Oo({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Xo(this.noHeader?this.label:void 0)}
          aria-labelledby=${Xo(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":D`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};kn.styles=wn,ao([ut(".drawer")],kn.prototype,"drawer",2),ao([ut(".drawer__panel")],kn.prototype,"panel",2),ao([ut(".drawer__overlay")],kn.prototype,"overlay",2),ao([ht({type:Boolean,reflect:!0})],kn.prototype,"open",2),ao([ht({reflect:!0})],kn.prototype,"label",2),ao([ht({reflect:!0})],kn.prototype,"placement",2),ao([ht({type:Boolean,reflect:!0})],kn.prototype,"contained",2),ao([ht({attribute:"no-header",type:Boolean,reflect:!0})],kn.prototype,"noHeader",2),ao([go("open",{waitUntilFirstUpdate:!0})],kn.prototype,"handleOpenChange",1),ao([go("contained",{waitUntilFirstUpdate:!0})],kn.prototype,"handleNoModalChange",1),kn=ao([at("sl-drawer")],kn),ln("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ln("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),ln("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ln("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),ln("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ln("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),ln("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ln("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),ln("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),ln("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ln("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var _n={...io,environment:"production"};const xn=(t,e,o)=>{let n=document.head.querySelector(`meta[${t}="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute(t,e),document.head.appendChild(n)),n.setAttribute("content",o)},$n=(t,e)=>{const o=document.head.querySelector(`meta[${t}="${e}"]`);o&&document.head.removeChild(o)},Sn=t=>{const{title:e,titleTemplate:o,description:n,image:i,url:s}=t;if(e){const t=o?o.replace("%s",e):e;document.title=t,xn("property","og:title",t)}n?(xn("name","description",n),xn("property","og:description",n)):null===n&&(xn("name","description",""),xn("property","og:description","")),i?(i.url&&xn("property","og:image",i.url),i.alt&&xn("property","og:image:alt",i.alt),i.width&&xn("property","og:image:width",i.width),i.height&&xn("property","og:image:height",i.height)):null===i&&(xn("property","og:image",""),xn("property","og:image:alt",""),xn("property","og:image:width",""),xn("property","og:image:height","")),s&&(((t,e)=>{let o=document.head.querySelector(`link[rel="${t}"]`);o||(o=document.createElement("link"),o.setAttribute("rel",t),document.head.appendChild(o)),o.setAttribute("href",e)})("canonical",s),xn("property","og:url",s))};const An=new class{constructor(t){this.delay=t,this.spinner=document.querySelector("#spinner")}start(){this.timer=setTimeout((()=>{this.spinner.classList.add("loader")}),this.delay)}stop(){void 0!==this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.spinner.classList.remove("loader")}}(500);class Cn extends st{constructor(){super(),this.defaultTitleTemplate=`%s | ${_n.appName}`,this.spinner=An}get defaultMeta(){return{url:window.location.href,titleTemplate:this.defaultTitleTemplate}}meta(){}updated(t){super.updated(t);const e=this.meta();e&&Sn({...this.defaultMeta,...(e.titleTemplate||null===e.titleTemplate)&&{titleTemplate:e.titleTemplate},...e}),this.spinner.stop()}}t([ye({context:_e})],Cn.prototype,"router",void 0),ho(`${no}resources/shoelace`);var En,jn='tool-tip {\n  --_p-inline: 1.5ch;\n  --_p-block: .75ch;\n  --_triangle-size: 7px;\n  --_bg: hsl(0, 0%, 20%);\n  --_shadow-alpha: 50%;\n\n  --isRTL: -1;\n\n  --_bottom-tip: conic-gradient(from -30deg at bottom, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) bottom / 100% 50% no-repeat;\n  --_top-tip: conic-gradient(from 150deg at top, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) top / 100% 50% no-repeat;\n  --_right-tip: conic-gradient(from -120deg at right, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) right / 50% 100% no-repeat;\n  --_left-tip: conic-gradient(from 60deg at left, rgba(0,0,0,0), #000 1deg,#000 60deg, rgba(0,0,0,0) 61deg) left / 50% 100% no-repeat;\n\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n\n  opacity: 0;\n  transform: translateX(0) translateY(0);\n  transform: translateX(var(--_x, 0)) translateY(var(--_y, 0));\n  transition: opacity .2s ease, transform .2s ease;\n\n  position: absolute;\n  z-index: 1;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 25ch;\n  text-align: left;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: normal;\n  line-height: initial;\n  padding: .75ch 1.5ch;\n  padding: var(--_p-block) var(--_p-inline);\n  margin: 0;\n  border-radius: 5px;\n  background: hsl(0, 0%, 20%);\n  background: var(--_bg);\n  color: CanvasText;\n  will-change: filter;\n  filter: \n    drop-shadow(0 3px 3px hsla(0, 0%, 0%, 0.5)) \n    drop-shadow(0 12px 12px hsla(0, 0%, 0%, 0.5));\n  filter: \n    drop-shadow(0 3px 3px hsla(0, 0%, 0%, var(--_shadow-alpha))) \n    drop-shadow(0 12px 12px hsla(0, 0%, 0%, var(--_shadow-alpha)));\n\n  /* light theme style adjustments */\n}\n\n@supports (background: conic-gradient(red 0deg, red 0deg 1deg, red 2deg)) {\ntool-tip {\n\n  --_bottom-tip: conic-gradient(from -30deg at bottom, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) bottom / 100% 50% no-repeat;\n  --_top-tip: conic-gradient(from 150deg at top, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) top / 100% 50% no-repeat;\n  --_right-tip: conic-gradient(from -120deg at right, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) right / 50% 100% no-repeat;\n  --_left-tip: conic-gradient(from 60deg at left, rgba(0,0,0,0), #000 1deg 60deg, rgba(0,0,0,0) 61deg) left / 50% 100% no-repeat;\n}\n}\n\n@media (prefers-color-scheme: light) {\n\n  tool-tip {\n    --_bg: white;\n    --_shadow-alpha: 15%;\n}\n  }\n\n[dir="rtl"] tool-tip {\n    --isRTL: 1;\n  }\n\n/* create a stacking context for elements with > tool-tips */\n\n:has(> tool-tip) {\n    position: relative;\n\n    /* when those parent elements have focus, hover, etc */\n}\n\n:has(> tool-tip):hover > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n:has(> tool-tip):focus-visible > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n:has(> tool-tip):active > tool-tip {\n      opacity: 1;\n      transition-delay: 200ms;\n    }\n\n/* prepend some prose for screen readers only */\n\ntool-tip::before {\n    content: "; Has tooltip: ";\n    clip: rect(1px, 1px, 1px, 1px);\n    -webkit-clip-path: inset(50%);\n            clip-path: inset(50%);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n  }\n\n/* tooltip shape is a pseudo element so we can cast a shadow */\n\ntool-tip::after {\n    content: "";\n    background: var(--_bg);\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    -webkit-mask: var(--_tip);\n            mask: var(--_tip);\n  }\n\n/* top tooltip styles */\n\ntool-tip[tip-position="top"],\n    tool-tip[tip-position="block-start"],\n    tool-tip:not([tip-position]),\n    tool-tip[tip-position="bottom"],\n    tool-tip[tip-position="block-end"] {\n    text-align: center;\n  }\n\n/* TOP || BLOCK START */\n\ntool-tip[tip-position="top"], tool-tip[tip-position="block-start"], tool-tip:not([tip-position]) {\n    left: 50%;\n    bottom: calc(100% + var(--_p-block) + var(--_triangle-size));\n    --_x: calc(50% * var(--isRTL));\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="top"]):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n      :has(> tool-tip[tip-position="block-start"]):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n      :has(> tool-tip:not([tip-position])):not(:hover):not(:active) tool-tip {\n        --_y: 3px;\n  }\n    }\n\ntool-tip[tip-position="top"]::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="block-start"]::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip:not([tip-position])::after {\n      --_tip: var(--_bottom-tip);\n      bottom: calc(var(--_triangle-size) * -1);\n      border-bottom: var(--_triangle-size) solid transparent;\n    }\n\n/* RIGHT || INLINE END */\n\ntool-tip[tip-position="right"], tool-tip[tip-position="inline-end"] {\n    left: calc(100% + var(--_p-inline) + var(--_triangle-size));\n    bottom: 50%;\n    --_y: 50%;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="right"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * -3px * -1);\n  }\n      :has(> tool-tip[tip-position="inline-end"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * -3px * -1);\n  }\n    }\n\ntool-tip[tip-position="right"]::after {\n      --_tip: var(--_left-tip);\n      left: calc(var(--_triangle-size) * -1);\n      border-left: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="inline-end"]::after {\n      --_tip: var(--_left-tip);\n      left: calc(var(--_triangle-size) * -1);\n      border-left: var(--_triangle-size) solid transparent;\n    }\n\n[dir="rtl"] tool-tip[tip-position="right"]::after {\n      --_tip: var(--_right-tip);\n    }\n\n[dir="rtl"] tool-tip[tip-position="inline-end"]::after {\n      --_tip: var(--_right-tip);\n    }\n\n/* BOTTOM || BLOCK END */\n\ntool-tip[tip-position="bottom"], tool-tip[tip-position="block-end"] {\n    left: 50%;\n    top: calc(100% + var(--_p-block) + var(--_triangle-size));\n    --_x: calc(50% * var(--isRTL));\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="bottom"]):not(:hover):not(:active) tool-tip {\n        --_y: -3px;\n  }\n      :has(> tool-tip[tip-position="block-end"]):not(:hover):not(:active) tool-tip {\n        --_y: -3px;\n  }\n    }\n\ntool-tip[tip-position="bottom"]::after {\n      --_tip: var(--_top-tip);\n      top: calc(var(--_triangle-size) * -1);\n      border-top: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="block-end"]::after {\n      --_tip: var(--_top-tip);\n      top: calc(var(--_triangle-size) * -1);\n      border-top: var(--_triangle-size) solid transparent;\n    }\n\n/* LEFT || INLINE START */\n\ntool-tip[tip-position="left"], tool-tip[tip-position="inline-start"] {\n    right: calc(100% + var(--_p-inline) + var(--_triangle-size));\n    bottom: 50%;\n    --_y: 50%;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n      :has(> tool-tip[tip-position="left"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * 3px * -1);\n  }\n      :has(> tool-tip[tip-position="inline-start"]):not(:hover):not(:active) tool-tip {\n        --_x: calc(var(--isRTL) * 3px * -1);\n  }\n    }\n\ntool-tip[tip-position="left"]::after {\n      --_tip: var(--_right-tip);\n      right: calc(var(--_triangle-size) * -1);\n      border-right: var(--_triangle-size) solid transparent;\n    }\n\ntool-tip[tip-position="inline-start"]::after {\n      --_tip: var(--_right-tip);\n      right: calc(var(--_triangle-size) * -1);\n      border-right: var(--_triangle-size) solid transparent;\n    }\n\n[dir="rtl"] tool-tip[tip-position="left"]::after {\n      --_tip: var(--_left-tip);\n    }\n\n[dir="rtl"] tool-tip[tip-position="inline-start"]::after {\n      --_tip: var(--_left-tip);\n    }\n',Ln=".ripple-box {\n  display: block;\n  position: relative; /* MUST HAVE for MWC-RIPPLE */\n  justify-content: center;\n  flex-direction: column;\n  padding: 4px;\n}\n.ripple-box:hover {\n    background-color: var(--sl-color-neutral-100);\n    cursor: pointer;\n  }\n.ripple-box[activated] {\n    background-color: var(--sl-color-primary-100);\n  }\n.ripple-box[activated]:hover {\n    background-color: var(--sl-color-primary-200);\n  }\n";const Pn=no;console.log("ModulePath: ",Pn);let Rn=En=class extends Cn{_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach((t=>{t.removeAttribute("activated")}))}_toggleActive(t){this._unSelect_items();t.currentTarget.setAttribute("activated","")}connectedCallback(){super.connectedCallback()}constructor(){super(),this._dbName="idxDB",this._ixdb={ixdb:void 0},this._num_chapters=10,this._selected_chapter=10,this._selected_book="",this._localRouter=new pe(this,[{path:Pn,enter:async()=>(await import("./7ccd3eec.js"),!0),render:this.render_home.bind(this)},{path:Pn+"bible",enter:async()=>(await import("./7ccd3eec.js"),!0),render:()=>D`<bible-head></bible-head>`},{path:Pn+"chat",enter:async()=>(await import("./151c93e3.js"),!0),render:()=>D`<chat-page></chat-page>`},{pattern:new URLPattern({pathname:Pn+"tooltip"}),enter:async()=>(await import("./d5935169.js"),!0),render:()=>D`<tool-tip-test></tool-tip-test>`},{pattern:new URLPattern({pathname:Pn+"about"}),enter:async()=>(await import("./fdbb266b.js"),!0),render:()=>D`<page-about></page-about>`},{pattern:new URLPattern({pathname:Pn+"about"}),enter:async()=>(await import("./fdbb266b.js"),!0),render:()=>D`<page-about></page-about>`}],{fallback:{enter:async()=>(await import("./68ded6d1.js"),!0),render:()=>D`<page-not-found></page-not-found>`}}),this._routerProvider=new ve(this,{context:_e,initialValue:this._localRouter}),this.initialize_IDB()}appendStyles(){const t=new CSSStyleSheet;t.replace(jn).then((()=>{this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,t]}))}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach((t=>{t.addEventListener("mousedown",we)}))}initialize_IDB(){const t=indexedDB.open(this._dbName,1);t.onerror=t=>{alert("Error accessing TSK database!"+t.target.result)};const e=t=>{if(En.loadingIXDB)return;En.loadingIXDB=!0,this.spinner.start();(async t=>{if(Qe)return to(Qe);const e=await fetch(t);if(!e.ok)throw new Error("Bad res from server");return Qe=await e.text(),to(Qe)})(`${window.origin}${no}resources/tsk.txt`).then((e=>{console.log("tsk loaded!");const o=t.transaction("xref","readwrite").objectStore("xref");e.forEach((t=>{o.add(t)})),this.spinner.stop(),console.log("All done!")})).catch((t=>{console.log("Failed to load TSK →",t),alert("Failed to create TSK database! No cross references are available. Try using a reload.")}))};t.onsuccess=t=>{this._ixdb.ixdb=t.target.result;const o=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();o.onsuccess=()=>{0===o.result&&e(this._ixdb.ixdb)}},t.onupgradeneeded=t=>{const o=t.target.result;console.log("Creating a new IDB instance for tsk!");const n=o.createObjectStore("xref",{keyPath:"key"});n.createIndex("verse","verse",{unique:!1}),n.transaction.oncomplete=()=>{e(o)}}}async gotoRef(t){if(void 0!==t){const e=this._localRouter.link()+t;history.pushState({},"",e),await this._localRouter.goto(e)}}_setBook(t,e){this._toggleActive(t),void 0!==je("afr")&&(this._num_chapters=je("afr").last.books[e].chapter+1,this._selected_book=$e[e],this.dialog.show())}_setChapter(t){this._selected_chapter=t,this.dialog.hide(),this.drawer.hide()}render(){return D`${this._localRouter.outlet()}`}render_home(){return D`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${function*(t,e){if(void 0!==t){let o=0;for(const n of t)yield e(n,o++)}}(function*(t,e,o=1){const n=void 0===e?0:t;null!=e||(e=t);for(let t=n;o>0?t<e:e<t;t+=o)yield t}(this._num_chapters),(t=>D`<sl-button 
            class="chapter-button"
            variant="text"
            @click=${()=>this._setChapter(t+1)}
          >
            ${t+1}
          </sl-button>`))}
      </sl-dialog>
      <sl-drawer label="Bybel boeke" placement="start">
      ${this.render_menu()}
      </sl-drawer>
      <bible-head 
        reference=${""!==this._selected_book?this._selected_book+" "+this._selected_chapter:B}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return D`
${At(Ce.abbreviations,(t=>t[0]),((t,e)=>D`
    <div class="ripple-box"
      @click=${t=>{this._setBook(t,e)}}
    >
      <p class="book-name">${t[0]}</p>
    </div>
  `))}
<hr>
<div class="ripple-box"
  @click=${()=>{this.gotoRef("about")}}
>
  <p class="book-name">🤔 1953/KJV met TSK 🤔</p>
</div>
    `}meta(){return{title:io.appName,titleTemplate:null,description:io.appDescription}}};Rn.loadingIXDB=!1,Rn.styles=[a`
    :host {
      display: block; /* customElement defaults to inline!!*/
      height: 100vh;
      padding: 0px 5px 5px 5px;
      overflow-y: scroll; /* sets where we are goining to attach the scroller evemnt listener - see BibleHead component & controller */
    }
    .book-name {
      margin: 0.5rem 2rem;
    }
    .chapter-button {
      width: 4rem;
    }
    .chapter-button::part(base):hover {
      background-color: var(--sl-color-primary-50);
    }

    `,a`${r(jn)}`,a`${r(Ln)}`],t([ut("sl-drawer")],Rn.prototype,"drawer",void 0),t([ut("sl-dialog")],Rn.prototype,"dialog",void 0),t([function({context:t}){return dt({finisher:(e,o)=>{const n=new WeakMap;e.addInitializer((e=>{n.set(e,new ve(e,{context:t}))}));const i=Object.getOwnPropertyDescriptor(e.prototype,o),s=null==i?void 0:i.set,r={...i,set:function(t){var e;null===(e=n.get(this))||void 0===e||e.setValue(t),s&&s.call(this,t)}};Object.defineProperty(e.prototype,o,r)}})}({context:ke}),ct()],Rn.prototype,"_ixdb",void 0),t([ct()],Rn.prototype,"_num_chapters",void 0),t([ct()],Rn.prototype,"_selected_chapter",void 0),t([ct()],Rn.prototype,"_selected_book",void 0),Rn=En=t([at("app-web-component")],Rn);export{B as A,we as B,We as C,Ge as D,Je as E,Ho as F,At as G,Vo as H,ke as I,jn as J,_n as K,zo as L,xn as M,Sn as N,$n as O,Cn as P,vo as S,M as T,ao as _,at as a,mt as b,yo as c,gt as d,ht as e,vt as f,ut as g,ct as h,a as i,Ln as j,t as k,Xo as l,ye as m,b as n,Oo as o,st as p,Oe as q,r,xt as s,bt as t,oo as u,An as v,go as w,D as x,no as y,Ze as z};
