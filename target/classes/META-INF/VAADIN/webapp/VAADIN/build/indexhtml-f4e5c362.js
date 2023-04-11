(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;const yo="modulepreload",wo=function(o,e){return new URL(o,e).href},ut={},qe=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=wo(n,r),n in ut)return;ut[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const h=i[p];if(h.href===n&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":yo,a||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),a)return new Promise((p,h)=>{l.addEventListener("load",p),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function Ce(o){return o=o||[],Array.isArray(o)?o:[o]}function I(o){return`[Vaadin.Router] ${o}`}function bo(o){if(typeof o!="object")return String(o);const e=Object.prototype.toString.call(o).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(o)}`:e}const $e="module",Te="nomodule",Je=[$e,Te];function mt(o){if(!o.match(/.+\.[m]?js$/))throw new Error(I(`Unsupported type for bundle "${o}": .js or .mjs expected.`))}function Bt(o){if(!o||!k(o.path))throw new Error(I('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=o.bundle,t=["component","redirect","bundle"];if(!B(o.action)&&!Array.isArray(o.children)&&!B(o.children)&&!Re(e)&&!t.some(r=>k(o[r])))throw new Error(I(`Expected route config "${o.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(k(e))mt(e);else if(Je.some(r=>r in e))Je.forEach(r=>r in e&&mt(e[r]));else throw new Error(I('Expected route bundle to include either "'+Te+'" or "'+$e+'" keys, or both'));o.redirect&&["bundle","component"].forEach(r=>{r in o&&console.warn(I(`Route config "${o.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function pt(o){Ce(o).forEach(e=>Bt(e))}function ht(o,e){let t=document.head.querySelector('script[src="'+o+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",o),e===$e?t.setAttribute("type",$e):e===Te&&t.setAttribute(Te,""),t.async=!0),new Promise((r,i)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,r(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),i(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function _o(o){return k(o)?ht(o):Promise.race(Je.filter(e=>e in o).map(e=>ht(o[e],e)))}function ie(o,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${o}`,{cancelable:o==="go",detail:e}))}function Re(o){return typeof o=="object"&&!!o}function B(o){return typeof o=="function"}function k(o){return typeof o=="string"}function Dt(o){const e=new Error(I(`Page not found (${o.pathname})`));return e.context=o,e.code=404,e}const Y=new class{};function So(o){const e=o.port,t=o.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?o.hostname:o.host;return`${t}//${n}`}function ft(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let e=o.target;const t=o.composedPath?o.composedPath():o.path||[];for(let c=0;c<t.length;c++){const s=t[c];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||So(e))!==window.location.origin)return;const{pathname:i,search:n,hash:a}=e;ie("go",{pathname:i,search:n,hash:a})&&(o.preventDefault(),o&&o.type==="click"&&window.scrollTo(0,0))}const Eo={activate(){window.document.addEventListener("click",ft)},inactivate(){window.document.removeEventListener("click",ft)}},Ao=/Trident/.test(navigator.userAgent);Ao&&!B(window.PopStateEvent)&&(window.PopStateEvent=function(o,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(o,Boolean(e.bubbles),Boolean(e.cancelable)),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function gt(o){if(o.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;ie("go",{pathname:e,search:t,hash:r})}const Co={activate(){window.addEventListener("popstate",gt)},inactivate(){window.removeEventListener("popstate",gt)}};var oe=qt,$o=et,To=ko,Ro=Wt,zo=Qt,Ht="/",Vt="./",Lo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function et(o,e){for(var t=[],r=0,i=0,n="",a=e&&e.delimiter||Ht,c=e&&e.delimiters||Vt,s=!1,l;(l=Lo.exec(o))!==null;){var p=l[0],h=l[1],u=l.index;if(n+=o.slice(i,u),i=u+p.length,h){n+=h[1],s=!0;continue}var f="",N=o[i],R=l[2],he=l[3],Ie=l[4],T=l[5];if(!s&&n.length){var O=n.length-1;c.indexOf(n[O])>-1&&(f=n[O],n=n.slice(0,O))}n&&(t.push(n),n="",s=!1);var H=f!==""&&N!==void 0&&N!==f,V=T==="+"||T==="*",Oe=T==="?"||T==="*",U=f||a,fe=he||Ie;t.push({name:R||r++,prefix:f,delimiter:U,optional:Oe,repeat:V,partial:H,pattern:fe?Io(fe):"[^"+P(U)+"]+?"})}return(n||i<o.length)&&t.push(n+o.substr(i)),t}function ko(o,e){return Wt(et(o,e))}function Wt(o){for(var e=new Array(o.length),t=0;t<o.length;t++)typeof o[t]=="object"&&(e[t]=new RegExp("^(?:"+o[t].pattern+")$"));return function(r,i){for(var n="",a=i&&i.encode||encodeURIComponent,c=0;c<o.length;c++){var s=o[c];if(typeof s=="string"){n+=s;continue}var l=r?r[s.name]:void 0,p;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(l.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(p=a(l[h],s),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');n+=(h===0?s.prefix:s.delimiter)+p}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(p=a(String(l),s),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+p+'"');n+=s.prefix+p;continue}if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return n}}function P(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Io(o){return o.replace(/([=!:$/()])/g,"\\$1")}function Gt(o){return o&&o.sensitive?"":"i"}function Oo(o,e){if(!e)return o;var t=o.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return o}function No(o,e,t){for(var r=[],i=0;i<o.length;i++)r.push(qt(o[i],e,t).source);return new RegExp("(?:"+r.join("|")+")",Gt(t))}function Uo(o,e,t){return Qt(et(o,t),e,t)}function Qt(o,e,t){t=t||{};for(var r=t.strict,i=t.start!==!1,n=t.end!==!1,a=P(t.delimiter||Ht),c=t.delimiters||Vt,s=[].concat(t.endsWith||[]).map(P).concat("$").join("|"),l=i?"^":"",p=o.length===0,h=0;h<o.length;h++){var u=o[h];if(typeof u=="string")l+=P(u),p=h===o.length-1&&c.indexOf(u[u.length-1])>-1;else{var f=u.repeat?"(?:"+u.pattern+")(?:"+P(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=P(u.prefix)+"("+f+")?":l+="(?:"+P(u.prefix)+"("+f+"))?":l+=P(u.prefix)+"("+f+")"}}return n?(r||(l+="(?:"+a+")?"),l+=s==="$"?"$":"(?="+s+")"):(r||(l+="(?:"+a+"(?="+s+"))?"),p||(l+="(?="+a+"|"+s+")")),new RegExp(l,Gt(t))}function qt(o,e,t){return o instanceof RegExp?Oo(o,e):Array.isArray(o)?No(o,e,t):Uo(o,e,t)}oe.parse=$o;oe.compile=To;oe.tokensToFunction=Ro;oe.tokensToRegExp=zo;const{hasOwnProperty:Po}=Object.prototype,Ke=new Map;Ke.set("|false",{keys:[],pattern:/(?:)/});function vt(o){try{return decodeURIComponent(o)}catch{return o}}function Mo(o,e,t,r,i){t=!!t;const n=`${o}|${t}`;let a=Ke.get(n);if(!a){const l=[];a={keys:l,pattern:oe(o,l,{end:t,strict:o===""})},Ke.set(n,a)}const c=a.pattern.exec(e);if(!c)return null;const s=Object.assign({},i);for(let l=1;l<c.length;l++){const p=a.keys[l-1],h=p.name,u=c[l];(u!==void 0||!Po.call(s,h))&&(p.repeat?s[h]=u?u.split(p.delimiter).map(vt):[]:s[h]=u&&vt(u))}return{path:c[0],keys:(r||[]).concat(a.keys),params:s}}function Jt(o,e,t,r,i){let n,a,c=0,s=o.path||"";return s.charAt(0)==="/"&&(t&&(s=s.substr(1)),t=!0),{next(l){if(o===l)return{done:!0};const p=o.__children=o.__children||o.children;if(!n&&(n=Mo(s,e,!p,r,i),n))return{done:!1,value:{route:o,keys:n.keys,params:n.params,path:n.path}};if(n&&p)for(;c<p.length;){if(!a){const u=p[c];u.parent=o;let f=n.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),a=Jt(u,e.substr(f),t,n.keys,n.params)}const h=a.next(l);if(!h.done)return{done:!1,value:h.value};a=null,c++}return{done:!0}}}}function Fo(o){if(B(o.route.action))return o.route.action(o)}function jo(o,e){let t=e;for(;t;)if(t=t.parent,t===o)return!0;return!1}function Bo(o){let e=`Path '${o.pathname}' is not properly resolved due to an error.`;const t=(o.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Do(o,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const i={path:r,route:t};if(!o.chain)o.chain=[];else if(t.parent){let n=o.chain.length;for(;n--&&o.chain[n].route&&o.chain[n].route!==t.parent;)o.chain.pop()}o.chain.push(i)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Fo,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){pt(e);const t=[...Ce(e)];this.root.__children=t}addRoutes(e){return pt(e),this.root.__children.push(...Ce(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,k(e)?{pathname:e}:e),r=Jt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let n=null,a=null,c=t;function s(l,p=n.value.route,h){const u=h===null&&n.value.route;return n=a||r.next(u),a=null,!l&&(n.done||!jo(p,n.value.route))?(a=n,Promise.resolve(Y)):n.done?Promise.reject(Dt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),Do(c,n.value),Promise.resolve(i(c)).then(f=>f!=null&&f!==Y?(c.result=f.result||f,c):s(l,p,f)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(l=>{const p=Bo(c);if(l?console.warn(p):l=new Error(p),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}se.pathToRegexp=oe;const{pathToRegexp:xt}=se,yt=new Map;function Kt(o,e,t){const r=e.name||e.component;if(r&&(o.has(r)?o.get(r).push(e):o.set(r,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const n=t[i];n.parent=e,Kt(o,n,n.__children||n.children)}}function wt(o,e){const t=o.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function bt(o){let e=o.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Ho(o,e={}){if(!(o instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,i)=>{let n=wt(t,r);if(!n&&(t.clear(),Kt(t,o.root,o.root.__children),n=wt(t,r),!n))throw new Error(`Route "${r}" not found`);let a=yt.get(n.fullPath);if(!a){let s=bt(n),l=n.parent;for(;l;){const f=bt(l);f&&(s=f.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),l=l.parent}const p=xt.parse(s),h=xt.tokensToFunction(p),u=Object.create(null);for(let f=0;f<p.length;f++)k(p[f])||(u[p[f].name]=!0);a={toPath:h,keys:u},yt.set(s,a),n.fullPath=s}let c=a.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const s={},l=Object.keys(i);for(let h=0;h<l.length;h++){const u=l[h];a.keys[u]||(s[u]=i[u])}const p=e.stringifyQueryParams(s);p&&(c+=p.charAt(0)==="?"?p:`?${p}`)}return c}}let _t=[];function Vo(o){_t.forEach(e=>e.inactivate()),o.forEach(e=>e.activate()),_t=o}const Wo=o=>{const e=getComputedStyle(o).getPropertyValue("animation-name");return e&&e!=="none"},Go=(o,e)=>{const t=()=>{o.removeEventListener("animationend",t),e()};o.addEventListener("animationend",t)};function St(o,e){return o.classList.add(e),new Promise(t=>{if(Wo(o)){const r=o.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;o.setAttribute("style",`position: absolute; ${i}`),Go(o,()=>{o.classList.remove(e),o.removeAttribute("style"),t()})}else o.classList.remove(e),t()})}const Qo=256;function Me(o){return o!=null}function qo(o){const e=Object.assign({},o);return delete e.next,e}function z({pathname:o="",search:e="",hash:t="",chain:r=[],params:i={},redirectFrom:n,resolver:a},c){const s=r.map(l=>l.route);return{baseUrl:a&&a.baseUrl||"",pathname:o,search:e,hash:t,routes:s,route:c||s.length&&s[s.length-1]||null,params:i,redirectFrom:n,getUrl:(l={})=>Se(F.pathToRegexp.compile(Yt(s))(Object.assign({},i,l)),a)}}function Et(o,e){const t=Object.assign({},o.params);return{redirect:{pathname:e,from:o.pathname,params:t}}}function Jo(o,e){e.location=z(o);const t=o.chain.map(r=>r.route).indexOf(o.route);return o.chain[t].element=e,e}function _e(o,e,t){if(B(o))return o.apply(t,e)}function At(o,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return _e(t[o],e,t)}}function Ko(o,e){if(!Array.isArray(o)&&!Re(o))throw new Error(I(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${o}`));e.__children=[];const t=Ce(o);for(let r=0;r<t.length;r++)Bt(t[r]),e.__children.push(t[r])}function we(o){if(o&&o.length){const e=o[0].parentNode;for(let t=0;t<o.length;t++)e.removeChild(o[t])}}function Se(o,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(o.replace(/^\//,""),t).pathname:o}function Yt(o){return o.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class F extends se{constructor(e,t){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&se.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const n=F.NavigationTrigger;F.setTriggers.apply(F,Object.keys(n).map(a=>n[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=z({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();B(t.children)&&(r=r.then(()=>t.children(qo(e))).then(n=>{!Me(n)&&!B(t.children)&&(n=t.children),Ko(n,t)}));const i={redirect:n=>Et(e,n),component:n=>{const a=document.createElement(n);return this.__createdByRouter.set(a,!0),a}};return r.then(()=>{if(this.__isLatestRender(e))return _e(t.action,[e,i],t)}).then(n=>{if(Me(n)&&(n instanceof HTMLElement||n.redirect||n===Y))return n;if(k(t.redirect))return i.redirect(t.redirect);if(t.bundle)return _o(t.bundle).then(()=>{},()=>{throw new Error(I(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(Me(n))return n;if(k(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},k(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const a=this.__previousContext;if(n===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=z(n),t&&this.__updateBrowserHistory(n,r===1),ie("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,a),this.__previousContext=n,this.location;this.__addAppearingContent(n,a);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,a),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),we(this.__outlet&&this.__outlet.children),this.location=z(Object.assign(i,{resolver:this})),ie("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const n=r!==t?r:e,c=Se(Yt(r.chain),r.resolver)===r.pathname,s=(l,p=l.route,h)=>l.next(void 0,p,h).then(u=>u===null||u===Y?c?l:p.parent!==null?s(l,p.parent,u):u:u);return s(r).then(l=>{if(l===null||l===Y)throw Dt(n);return l&&l!==Y&&l!==r?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Jo(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(I(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${bo(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],i=e.chain;let n=Promise.resolve();const a=()=>({cancel:!0}),c=s=>Et(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let s=0;s<Math.min(r.length,i.length)&&!(r[s].route!==i[s].route||r[s].path!==i[s].path&&r[s].element!==i[s].element||!this.__isReusableElement(r[s].element,i[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=i.length===r.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=i.length-1;s>=0;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},r[s]);for(let s=0;s<i.length;s++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},i[s]),r[s].element.location=z(e,r[s].route)}else for(let s=r.length-1;s>=e.__divergedChainIndex;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},r[s])}if(!e.__skipAttach)for(let s=0;s<i.length;s++)s<e.__divergedChainIndex?s<r.length&&r[s].element&&(r[s].element.location=z(e,r[s].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},i[s]),i[s].element&&(i[s].element.location=z(e,i[s].route)));return n.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,i){const n=z(t);return e.then(a=>{if(this.__isLatestRender(t))return At("onBeforeLeave",[n,r,this],i.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,r,i){const n=z(t,i.route);return e.then(a=>{if(this.__isLatestRender(t))return At("onBeforeEnter",[n,r,this],i.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>Qo)throw new Error(I(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(I(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const n=i?"replaceState":"pushState";window.history[n](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const n=t&&t.chain[i].element;if(n)if(n.parentNode===r)e.chain[i].element=n,r=n;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let i=r;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const a=e.chain[n].element;a&&(i.appendChild(a),this.__addedByRouter.set(a,!0),i===r&&this.__appearingContent.push(a),i=a)}}__removeDisappearingContent(){this.__disappearingContent&&we(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(we(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const i=t.chain[r].element;if(i)try{const n=z(e);_e(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&we(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},i=z(e,e.chain[t].route);_e(r.onAfterEnter,[i,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],n=e.chain;let a;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){a=n[c-1].route.animate;break}if(t&&r&&a){const c=Re(a)&&a.leave||"leaving",s=Re(a)&&a.enter||"entering";i.push(St(t,c)),i.push(St(r,s))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:i}=e?e.detail:window.location;k(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:i},!0))}static setTriggers(...e){Vo(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ho(this)),Se(this.__urlForName(e,t),this)}urlForPath(e,t){return Se(F.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:i}=k(e)?this.__createUrl(e,"http://a"):e;return ie("go",{pathname:t,search:r,hash:i})}}const Yo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ee=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xo(){function o(){return!0}return Xt(o)}function Zo(){try{return er()?!0:tr()?Ee?!or():!Xo():!1}catch{return!1}}function er(){return localStorage.getItem("vaadin.developmentmode.force")}function tr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function or(){return!!(Ee&&Object.keys(Ee).map(e=>Ee[e]).filter(e=>e.productionMode).length>0)}function Xt(o,e){if(typeof o!="function")return;const t=Yo.exec(o.toString());if(t)try{o=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return o(e)}window.Vaadin=window.Vaadin||{};const Ct=function(o,e){if(window.Vaadin.developmentMode)return Xt(o,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Zo());function rr(){}const nr=function(){if(typeof Ct=="function")return Ct(rr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});nr();F.NavigationTrigger={POPSTATE:Co,CLICK:Eo};var Fe,y;(function(o){o.CONNECTED="connected",o.LOADING="loading",o.RECONNECTING="reconnecting",o.CONNECTION_LOST="connection-lost"})(y||(y={}));class ir{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var r;(r=t==null?void 0:t.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=y.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(y.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(y.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const r of this.stateChangeListeners)r(t,this.connectionState)}}get online(){return this.connectionState===y.CONNECTED||this.connectionState===y.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=y.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const be=window;!((Fe=be.Vaadin)===null||Fe===void 0)&&Fe.connectionState||(be.Vaadin=be.Vaadin||{},be.Vaadin.connectionState=new ir(navigator.onLine?y.CONNECTED:y.CONNECTION_LOST));function C(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(n=(i<3?a(n):i>3?a(e,t,n):a(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=window,tt=Ae.ShadowRoot&&(Ae.ShadyCSS===void 0||Ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),$t=new WeakMap;let rt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(tt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=$t.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&$t.set(t,e))}return e}toString(){return this.cssText}};const A=o=>new rt(typeof o=="string"?o:o+"",void 0,ot),x=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new rt(t,o,ot)},ar=(o,e)=>{tt?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),i=Ae.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},Tt=tt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return A(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;const ze=window,Rt=ze.trustedTypes,sr=Rt?Rt.emptyScript:"",zt=ze.reactiveElementPolyfillSupport,Ye={toAttribute(o,e){switch(e){case Boolean:o=o?sr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Zt=(o,e)=>e!==o&&(e==e||o==o),Be={attribute:!0,type:String,converter:Ye,reflect:!1,hasChanged:Zt};let K=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Tt(i))}else e!==void 0&&t.push(Tt(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ar(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Be){var i;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const a=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Ye).toAttribute(t,r.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:Ye;this._$El=n,this[n]=c.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Zt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},zt==null||zt({ReactiveElement:K}),((je=ze.reactiveElementVersions)!==null&&je!==void 0?je:ze.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const Le=window,Z=Le.trustedTypes,Lt=Z?Z.createPolicy("lit-html",{createHTML:o=>o}):void 0,Xe="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,eo="?"+M,lr=`<${eo}>`,ee=document,le=()=>ee.createComment(""),ce=o=>o===null||typeof o!="object"&&typeof o!="function",to=Array.isArray,cr=o=>to(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",He=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,It=/>/g,j=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Nt=/"/g,oo=/^(?:script|style|textarea|title)$/i,ro=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),dr=ro(1),sn=ro(2),D=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Ut=new WeakMap,X=ee.createTreeWalker(ee,129,null,!1),ur=(o,e)=>{const t=o.length-1,r=[];let i,n=e===2?"<svg>":"",a=re;for(let s=0;s<t;s++){const l=o[s];let p,h,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,h=a.exec(l),h!==null);)f=a.lastIndex,a===re?h[1]==="!--"?a=kt:h[1]!==void 0?a=It:h[2]!==void 0?(oo.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=j):h[3]!==void 0&&(a=j):a===j?h[0]===">"?(a=i??re,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,p=h[1],a=h[3]===void 0?j:h[3]==='"'?Nt:Ot):a===Nt||a===Ot?a=j:a===kt||a===It?a=re:(a=j,i=void 0);const N=a===j&&o[s+1].startsWith("/>")?" ":"";n+=a===re?l+lr:u>=0?(r.push(p),l.slice(0,u)+Xe+l.slice(u)+M+N):l+M+(u===-2?(r.push(void 0),s):N)}const c=n+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Lt!==void 0?Lt.createHTML(c):c,r]};class de{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,a=0;const c=e.length-1,s=this.parts,[l,p]=ur(e,t);if(this.el=de.createElement(l,r),X.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=X.nextNode())!==null&&s.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(Xe)||u.startsWith(M)){const f=p[a++];if(h.push(u),f!==void 0){const N=i.getAttribute(f.toLowerCase()+Xe).split(M),R=/([.?@])?(.*)/.exec(f);s.push({type:1,index:n,name:R[2],strings:N,ctor:R[1]==="."?pr:R[1]==="?"?fr:R[1]==="@"?gr:ke})}else s.push({type:6,index:n})}for(const u of h)i.removeAttribute(u)}if(oo.test(i.tagName)){const h=i.textContent.split(M),u=h.length-1;if(u>0){i.textContent=Z?Z.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],le()),X.nextNode(),s.push({type:2,index:++n});i.append(h[u],le())}}}else if(i.nodeType===8)if(i.data===eo)s.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(M,h+1))!==-1;)s.push({type:7,index:n}),h+=M.length-1}n++}}static createElement(e,t){const r=ee.createElement("template");return r.innerHTML=e,r}}function te(o,e,t=o,r){var i,n,a,c;if(e===D)return e;let s=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl;const l=ce(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((n=s==null?void 0:s._$AO)===null||n===void 0||n.call(s,!1),l===void 0?s=void 0:(s=new l(o),s._$AT(o,t,r)),r!==void 0?((a=(c=t)._$Co)!==null&&a!==void 0?a:c._$Co=[])[r]=s:t._$Cl=s),s!==void 0&&(e=te(o,s._$AS(o,e.values),s,r)),e}class mr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ee).importNode(r,!0);X.currentNode=n;let a=X.nextNode(),c=0,s=0,l=i[0];for(;l!==void 0;){if(c===l.index){let p;l.type===2?p=new me(a,a.nextSibling,this,e):l.type===1?p=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(p=new vr(a,this,e)),this._$AV.push(p),l=i[++s]}c!==(l==null?void 0:l.index)&&(a=X.nextNode(),c++)}return n}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class me{constructor(e,t,r,i){var n;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),ce(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):cr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(ee.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=de.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(r);else{const a=new mr(n,this),c=a.u(this.options);a.v(r),this.$(c),this._$AH=a}}_$AC(e){let t=Ut.get(e.strings);return t===void 0&&Ut.set(e.strings,t=new de(e)),t}T(e){to(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new me(this.k(le()),this.k(le()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ke{constructor(e,t,r,i,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let a=!1;if(n===void 0)e=te(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{const c=e;let s,l;for(e=n[0],s=0;s<n.length-1;s++)l=te(this,c[r+s],t,s),l===D&&(l=this._$AH[s]),a||(a=!ce(l)||l!==this._$AH[s]),l===w?e=w:e!==w&&(e+=(l??"")+n[s+1]),this._$AH[s]=l}a&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pr extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const hr=Z?Z.emptyScript:"";class fr extends ke{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,hr):this.element.removeAttribute(this.name)}}class gr extends ke{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=te(this,e,t,0))!==null&&r!==void 0?r:w)===D)return;const i=this._$AH,n=e===w&&i!==w||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==w&&(i===w||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class vr{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}}const Pt=Le.litHtmlPolyfillSupport;Pt==null||Pt(de,me),((De=Le.litHtmlVersions)!==null&&De!==void 0?De:Le.litHtmlVersions=[]).push("2.7.2");const xr=(o,e,t)=>{var r,i;const n=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let a=n._$litPart$;if(a===void 0){const c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=a=new me(e.insertBefore(le(),c),c,void 0,t??{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ve,We;class ae extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return D}}ae.finalized=!0,ae._$litElement$=!0,(Ve=globalThis.litElementHydrateSupport)===null||Ve===void 0||Ve.call(globalThis,{LitElement:ae});const Mt=globalThis.litElementPolyfillSupport;Mt==null||Mt({LitElement:ae});((We=globalThis.litElementVersions)!==null&&We!==void 0?We:globalThis.litElementVersions=[]).push("3.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function $(o){return(e,t)=>t!==void 0?((r,i,n)=>{i.constructor.createProperty(n,r)})(o,e,t):yr(o,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge;((Ge=window.HTMLSlotElement)===null||Ge===void 0?void 0:Ge.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},br=o=>(...e)=>({_$litDirective$:o,values:e});class _r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=br(class extends _r{constructor(o){var e;if(super(o),o.type!==wr.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,r;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}const i=o.element.classList;this.it.forEach(n=>{n in e||(i.remove(n),this.it.delete(n))});for(const n in e){const a=!!e[n];a===this.it.has(n)||!((r=this.nt)===null||r===void 0)&&r.has(n)||(a?(i.add(n),this.it.add(n)):(i.remove(n),this.it.delete(n)))}return D}}),Qe="css-loading-indicator";var L;(function(o){o.IDLE="",o.FIRST="first",o.SECOND="second",o.THIRD="third"})(L||(L={}));class b extends ae{constructor(){super(),this.firstDelay=300,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=L.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=y.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,t;const r=window;return!((e=r.Vaadin)===null||e===void 0)&&e.connectionIndicator||(r.Vaadin=r.Vaadin||{},r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(t=r.Vaadin)===null||t===void 0?void 0:t.connectionIndicator}render(){return dr`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Sr({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;!((e=t.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=t===y.CONNECTION_LOST,this.reconnecting=t===y.RECONNECTING,this.updateLoading(t===y.LOADING),this.loading?!1:t!==this.lastMessageState?(this.lastMessageState=t,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=L.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=L.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=L.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=L.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Qe)){const e=document.createElement("style");e.id=Qe,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(Qe);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case L.IDLE:return"display: none";case L.FIRST:case L.SECOND:case L.THIRD:return"display: block";default:return""}}timeoutFor(e,t,r,i){return e!==0&&window.clearTimeout(e),t?window.setTimeout(r,i):0}static get instance(){return b.create()}}C([$({type:Number})],b.prototype,"firstDelay",void 0);C([$({type:Number})],b.prototype,"secondDelay",void 0);C([$({type:Number})],b.prototype,"thirdDelay",void 0);C([$({type:Number})],b.prototype,"expandedDuration",void 0);C([$({type:String})],b.prototype,"onlineText",void 0);C([$({type:String})],b.prototype,"offlineText",void 0);C([$({type:String})],b.prototype,"reconnectingText",void 0);C([$({type:Boolean,reflect:!0})],b.prototype,"offline",void 0);C([$({type:Boolean,reflect:!0})],b.prototype,"reconnecting",void 0);C([$({type:Boolean,reflect:!0})],b.prototype,"expanded",void 0);C([$({type:Boolean,reflect:!0})],b.prototype,"loading",void 0);C([$({type:String})],b.prototype,"loadingBarState",void 0);C([$({type:Boolean})],b.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",b);b.instance;const ue=window;ue.Vaadin=ue.Vaadin||{};ue.Vaadin.registrations=ue.Vaadin.registrations||[];ue.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.17"});class Ft extends Error{}const ne=window.document.body,v=window;class Er{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,ne.$=ne.$||[],this.config=e||{},v.Vaadin=v.Vaadin||{},v.Vaadin.Flow=v.Vaadin.Flow||{},v.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,v.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,v.Vaadin.connectionState.loadingFinished()}get action(){return async e=>{if(this.pathname=e.pathname,v.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof Ft)return v.Vaadin.connectionState.state=y.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,r)=>this.flowNavigate(t,r),this.container.onBeforeLeave=(t,r)=>this.flowLeave(t,r),this.container}}async flowLeave(e,t){const{connectionState:r}=v.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(i=>{this.loadingStarted(),this.container.serverConnected=n=>{i(t&&n?t.prevent():{}),this.loadingFinished()},ne.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,t){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(i,n)=>{t&&i?r(t.prevent()):t&&t.redirect&&n?r(t.redirect(n.pathname)):(this.container.style.display="",r(this.container)),this.loadingFinished()},ne.$server.connectClient(this.container.localName,this.container.id,this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state)}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(e=!1){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi(e),this.response.appConfig.clientRouting=!e;const{pushScript:t,appConfig:r}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:i}=r;await(await qe(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(i),await this.config.imports());const a=await qe(()=>import("./FlowClient-e0ae8105.js"),[],import.meta.url);if(await this.flowInitClient(a),!e){const c=`flow-container-${i.toLowerCase()}`;this.container=document.createElement(c),ne.$[i]=this.container,this.container.id=i}this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,r)=>{const i=document.createElement("script");i.onload=()=>t(),i.onerror=r,i.src=e,document.body.appendChild(i)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",t),document.body.append(r)}async flowInitClient(e){return e.init(),new Promise(t=>{const r=setInterval(()=>{Object.keys(v.Vaadin.Flow.clients).filter(n=>n!=="TypeScript").reduce((n,a)=>n||v.Vaadin.Flow.clients[a].isActive(),!1)||(clearInterval(r),t())},5)})}async flowInitUi(e){const t=v.Vaadin&&v.Vaadin.TypeScript&&v.Vaadin.TypeScript.initial;return t?(v.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((r,i)=>{const a=new XMLHttpRequest,c=e?"&serverSideRouting":"",s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}${c}`;a.open("GET",s),a.onerror=()=>i(new Ft(`Invalid server response when initializing Flow UI.
        ${a.status}
        ${a.responseText}`)),a.onload=()=>{const l=a.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?r(JSON.parse(a.responseText)):a.onerror()},a.send()})}addConnectionIndicator(){b.create(),v.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){v.Vaadin.connectionState.state=y.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{v.Vaadin.connectionState.state=y.CONNECTED},e.onerror=()=>{v.Vaadin.connectionState.state=y.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),v.addEventListener("offline",()=>{this.isFlowClientLoaded()||(v.Vaadin.connectionState.state=y.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),t="./offline-stub.html";e.setAttribute("src",t),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const i=()=>{r!==void 0&&(v.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return e.onBeforeEnter=(n,a,c)=>{r=()=>{v.Vaadin.connectionState.online&&(i(),c.render(n,!1))},v.Vaadin.connectionState.addStateChangeListener(r)},e.onBeforeLeave=(n,a,c)=>{i()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:Ar}=new Er({imports:()=>qe(()=>import("./generated-flow-imports-2d130c49.js").then(o=>o.aG),[],import.meta.url)}),Cr=[...Ar],$r=new F(document.querySelector("#outlet"));$r.setRoutes(Cr);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var o="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),t=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,a=/@import.+?;?$/gm;function c(d){var m=d.replace(a,"");return m!==d&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),m.trim()}function s(d){return"isConnected"in d?d.isConnected:document.contains(d)}function l(d){return d.filter(function(m,g){return d.indexOf(m)===g})}function p(d,m){return d.filter(function(g){return m.indexOf(g)===-1})}function h(d){d.parentNode.removeChild(d)}function u(d){return d.shadowRoot||t.get(d)}var f=["addRule","deleteRule","insertRule","removeRule"],N=CSSStyleSheet,R=N.prototype;R.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},R.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function he(d){return typeof d=="object"?W.isPrototypeOf(d)||R.isPrototypeOf(d):!1}function Ie(d){return typeof d=="object"?R.isPrototypeOf(d):!1}var T=new WeakMap,O=new WeakMap,H=new WeakMap,V=new WeakMap;function Oe(d,m){var g=document.createElement("style");return H.get(d).set(m,g),O.get(d).push(m),g}function U(d,m){return H.get(d).get(m)}function fe(d,m){H.get(d).delete(m),O.set(d,O.get(d).filter(function(g){return g!==m}))}function nt(d,m){requestAnimationFrame(function(){m.textContent=T.get(d).textContent,V.get(d).forEach(function(g){return m.sheet[g.method].apply(m.sheet,g.args)})})}function ge(d){if(!T.has(d))throw new TypeError("Illegal invocation")}function Ne(){var d=this,m=document.createElement("style");e.body.appendChild(m),T.set(d,m),O.set(d,[]),H.set(d,new WeakMap),V.set(d,[])}var W=Ne.prototype;W.replace=function(m){try{return this.replaceSync(m),Promise.resolve(this)}catch(g){return Promise.reject(g)}},W.replaceSync=function(m){if(ge(this),typeof m=="string"){var g=this;T.get(g).textContent=c(m),V.set(g,[]),O.get(g).forEach(function(S){S.isConnected()&&nt(g,U(g,S))})}},i(W,"cssRules",{configurable:!0,enumerable:!0,get:function(){return ge(this),T.get(this).sheet.cssRules}}),i(W,"media",{configurable:!0,enumerable:!0,get:function(){return ge(this),T.get(this).sheet.media}}),f.forEach(function(d){W[d]=function(){var m=this;ge(m);var g=arguments;V.get(m).push({method:d,args:g}),O.get(m).forEach(function(E){if(E.isConnected()){var _=U(m,E).sheet;_[d].apply(_,g)}});var S=T.get(m).sheet;return S[d].apply(S,g)}}),i(Ne,Symbol.hasInstance,{configurable:!0,value:he});var it={childList:!0,subtree:!0},at=new WeakMap;function G(d){var m=at.get(d);return m||(m=new ct(d),at.set(d,m)),m}function st(d){i(d.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(m){G(this).update(m)}})}function Ue(d,m){for(var g=document.createNodeIterator(d,NodeFilter.SHOW_ELEMENT,function(E){return u(E)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),S=void 0;S=g.nextNode();)m(u(S))}var ve=new WeakMap,Q=new WeakMap,xe=new WeakMap;function vo(d,m){return m instanceof HTMLStyleElement&&Q.get(d).some(function(g){return U(g,d)})}function lt(d){var m=ve.get(d);return m instanceof Document?m.body:m}function Pe(d){var m=document.createDocumentFragment(),g=Q.get(d),S=xe.get(d),E=lt(d);S.disconnect(),g.forEach(function(_){m.appendChild(U(_,d)||Oe(_,d))}),E.insertBefore(m,null),S.observe(E,it),g.forEach(function(_){nt(_,U(_,d))})}function ct(d){var m=this;m.sheets=[],ve.set(m,d),Q.set(m,[]),xe.set(m,new MutationObserver(function(g,S){if(!document){S.disconnect();return}g.forEach(function(E){o||n.call(E.addedNodes,function(_){_ instanceof Element&&Ue(_,function(q){G(q).connect()})}),n.call(E.removedNodes,function(_){_ instanceof Element&&(vo(m,_)&&Pe(m),o||Ue(_,function(q){G(q).disconnect()}))})})}))}if(ct.prototype={isConnected:function(){var d=ve.get(this);return d instanceof Document?d.readyState!=="loading":s(d.host)},connect:function(){var d=lt(this);xe.get(this).observe(d,it),Q.get(this).length>0&&Pe(this),Ue(d,function(m){G(m).connect()})},disconnect:function(){xe.get(this).disconnect()},update:function(d){var m=this,g=ve.get(m)===document?"Document":"ShadowRoot";if(!Array.isArray(d))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Iterator getter is not callable.");if(!d.every(he))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Failed to convert value to 'CSSStyleSheet'");if(d.some(Ie))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+g+": Can't adopt non-constructed stylesheets");m.sheets=d;var S=Q.get(m),E=l(d),_=p(S,E);_.forEach(function(q){h(U(q,m)),fe(q,m)}),Q.set(m,E),m.isConnected()&&E.length>0&&Pe(m)}},window.CSSStyleSheet=Ne,st(Document),"ShadowRoot"in window){st(ShadowRoot);var dt=Element.prototype,xo=dt.attachShadow;dt.attachShadow=function(m){var g=xo.call(this,m);return m.mode==="closed"&&t.set(this,g),g}}var ye=G(document);ye.isConnected()?ye.connect():document.addEventListener("DOMContentLoaded",ye.connect.bind(ye))})();/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tr=o=>class extends o{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,r,i){super.attributeChangedCallback(t,r,i),t==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=[];function io(o){return o&&Object.prototype.hasOwnProperty.call(o,"__themes")}function Rr(o){return io(customElements.get(o))}function zr(o=[]){return[o].flat(1/0).filter(e=>e instanceof rt?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function pe(o,e,t={}){o&&Rr(o)&&console.warn(`The custom element definition for "${o}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=zr(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(o,e,t):no.push({themeFor:o,styles:e,include:t.include,moduleId:t.moduleId})}function Ze(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():no}function Lr(o,e){return(o||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function kr(o=""){let e=0;return o.startsWith("lumo-")||o.startsWith("material-")?e=1:o.startsWith("vaadin-")&&(e=2),e}function ao(o){const e=[];return o.include&&[].concat(o.include).forEach(t=>{const r=Ze().find(i=>i.moduleId===t);r?e.push(...ao(r),...r.styles):console.warn(`Included moduleId ${t} not found in style registry`)},o.styles),e}function Ir(o,e){const t=document.createElement("style");t.innerHTML=o.map(r=>r.cssText).join(`
`),e.content.appendChild(t)}function Or(o){const e=`${o}-default-theme`,t=Ze().filter(r=>r.moduleId!==e&&Lr(r.themeFor,o)).map(r=>({...r,styles:[...ao(r),...r.styles],includePriority:kr(r.moduleId)})).sort((r,i)=>i.includePriority-r.includePriority);return t.length>0?t:Ze().filter(r=>r.moduleId===e)}const cn=o=>class extends Tr(o){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||io(this)||Ir(this.getStylesForThis(),t)}static finalizeStyles(t){const r=this.getStylesForThis();return t?[...super.finalizeStyles(t),...r]:r}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),r=(t?t.constructor.__themes:[])||[];this.__themes=[...r,...Or(this.is)];const i=this.__themes.flatMap(n=>n.styles);return i.filter((n,a)=>a===i.lastIndexOf(n))}},{toString:Nr}=Object.prototype;function Ur(o){return Nr.call(o)==="[object RegExp]"}function Pr(o,{preserve:e=!0,whitespace:t=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let i=e,n;typeof e=="function"?(i=!1,n=e):Ur(e)&&(i=!1,n=p=>e.test(p));let a=!1,c="",s="",l="";for(let p=0;p<o.length;p++){if(c=o[p],o[p-1]!=="\\"&&(c==='"'||c==="'")&&(a===c?a=!1:a||(a=c)),!a&&c==="/"&&o[p+1]==="*"){const h=o[p+2]==="!";let u=p+2;for(;u<o.length;u++){if(o[u]==="*"&&o[u+1]==="/"){i&&h||n&&n(s)?l+=`/*${s}*/`:t||(o[u+2]===`
`?u++:o[u+2]+o[u+3]===`\r
`&&(u+=2)),s="";break}s+=o[u]}p=u+1;continue}l+=c}return l}const Mr=x`vaadin-scroller[slot=drawer]{padding:var(--lumo-space-s)}[slot=drawer]:is(header,footer){display:flex;align-items:center;gap:var(--lumo-space-s);padding:var(--lumo-space-s) var(--lumo-space-m);min-height:var(--lumo-size-xl);box-sizing:border-box}[slot=drawer]:is(header,footer):is(:empty){display:none}@media screen and (max-width: 740px){.talk-view{flex-direction:column-reverse}.talk-view aside{width:100%!important;flex-direction:row}.talk-view aside header{display:none}.talk-view aside vaadin-tabs{flex:1 1 auto;overflow:auto}.talk-view aside vaadin-tabs vaadin-tab.justify-between{justify-content:flex-start}}.accounts-view{display:block;height:100%}.accounts-view vaadin-grid{height:100%;line-height:var(--lumo-line-height-m)}.accounts-view vaadin-grid,.accounts-view vaadin-grid-cell-content{background-color:var(--lumo-contrast-10pct)}.accounts-view .card{background-color:var(--lumo-base-color);border-radius:var(--lumo-border-radius);box-shadow:var(--lumo-box-shadow-xs);padding:calc(var(--lumo-space-s) * 1.5) var(--lumo-space-m)}.accounts-view img{border-radius:50%;flex-shrink:0;height:var(--lumo-size-m);margin-right:calc(var(--lumo-space-s) * 1.5);width:var(--lumo-size-m)}.accounts-view .header{align-items:baseline}.accounts-view .name{font-size:var(--lumo-font-size-s);font-weight:700;margin-right:var(--lumo-space-s)}.accounts-view .date{color:var(--lumo-tertiary-text-color);font-size:var(--lumo-font-size-xs)}.accounts-view .post{color:var(--lumo-secondary-text-color);font-size:var(--lumo-font-size-s);margin-bottom:var(--lumo-space-s);white-space:normal}.accounts-view .actions{align-items:center}.accounts-view .icon{color:var(--lumo-tertiary-text-color);height:calc(var(--lumo-icon-size-s) * .8);margin-right:var(--lumo-space-s);width:calc(var(--lumo-icon-size-s) * .8)}.accounts-view .likes,.accounts-view .comments,.accounts-view .shares{color:var(--lumo-tertiary-text-color);font-size:var(--lumo-font-size-xs);margin-right:var(--lumo-space-l)}.lab-view ol{grid-template-columns:repeat(auto-fill,minmax(256px,1fr))}.lab-view li{transition:all .2s cubic-bezier(.4,0,.2,1);transition-property:background-color,box-shadow}.lab-view li:hover{background-color:var(--lumo-base-color);box-shadow:var(--lumo-box-shadow-s)}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(${A(""+new URL("roboto-mono-cyrillic-ext-400-normal-89d35836.woff2",import.meta.url).href)}) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(${A(""+new URL("roboto-mono-cyrillic-400-normal-59a50722.woff2",import.meta.url).href)}) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(${A(""+new URL("roboto-mono-greek-400-normal-217a3b3a.woff2",import.meta.url).href)}) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0370-03FF}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(data:font/woff2;base64,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) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(${A(""+new URL("roboto-mono-latin-ext-400-normal-f80216c7.woff2",import.meta.url).href)}) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto Mono;font-style:normal;font-display:swap;font-weight:400;src:url(${A(""+new URL("roboto-mono-latin-400-normal-e1fd013a.woff2",import.meta.url).href)}) format("woff2"),url(${A(""+new URL("roboto-mono-all-400-normal-0bdd8d40.woff",import.meta.url).href)}) format("woff");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}html{--lumo-font-family: Roboto Mono}[theme~=dark]{--lumo-base-color: hsl(239, 35%, 21%);--lumo-primary-color: hsl(165, 100%, 50%);--lumo-primary-color-50pct: hsla(165, 100%, 50%, .5);--lumo-primary-color-10pct: hsla(165, 100%, 50%, .1);--lumo-body-text-color: hsla(62, 100%, 50%, .9);--lumo-error-text-color: hsl(3, 100%, 50%)}
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fr extends HTMLElement{static get version(){return"24.0.2"}}customElements.define("vaadin-lumo-styles",Fr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=x`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,so=x`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;pe("",so,{moduleId:"lumo-typography"});const lo=document.createElement("template");lo.innerHTML=`<style>${jr.toString().replace(":host","html")}</style>`;document.head.appendChild(lo.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=x`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,co=document.createElement("template");co.innerHTML=`<style>${Br.toString().replace(":host","html")}</style>`;document.head.appendChild(co.content);const uo=x`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;pe("",uo,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mo=x`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,po=document.createElement("template");po.innerHTML=`<style>${mo.toString().replace(":host","html")}</style>`;document.head.appendChild(po.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=x`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;x`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
  }
`;const ho=document.createElement("template");ho.innerHTML=`<style>${Dr.toString().replace(":host","html")}$</style>`;document.head.appendChild(ho.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fo=x`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;pe("",fo,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hr=x`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=x`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=x`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=x`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qr=x`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=x`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=x`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=x`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=x`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const go=x`
${Hr}
${Vr}
${Wr}
${qr}
${Gr}
${Qr}
${Jr}
${Kr}
${Yr}
`;pe("",go,{moduleId:"lumo-utility"});const Xr=x`:host(:not([theme~="tertiary"])){background-image:linear-gradient(var(--lumo-tint-5pct),var(--lumo-shade-5pct));box-shadow:inset 0 0 0 1px var(--lumo-contrast-20pct)}:host(:not([theme~="tertiary"]):not([theme~="primary"]):not([theme~="error"]):not([theme~="success"])){color:var(--lumo-body-text-color)}:host([focus-ring]:not([theme~="tertiary"])){box-shadow:0 0 0 2px var(--lumo-primary-color-50pct),inset 0 0 0 1px var(--lumo-primary-color)}:host([focus-ring][theme~="primary"]){box-shadow:0 0 0 2px var(--lumo-primary-color-50pct),inset 0 0 0 1px var(--lumo-primary-contrast-color)}:host([theme~="primary"]){text-shadow:0 -1px 0 var(--lumo-shade-20pct)}
`,Zr=(o,e)=>{const t=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(o)!=null&&(o=Pr(o));for(var r,i=o;(r=t.exec(o))!==null;){i=i.replace(r[0],"");const n=document.createElement("link");n.rel="stylesheet",n.href=r[2]||r[4];const a=r[1]||r[5];a&&(n.media=a),e===document?document.head.appendChild(n):e.appendChild(n)}return i},J=(o,e,t)=>{if(e===document){const i=en(o);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const r=new CSSStyleSheet;r.replaceSync(Zr(o,e)),t?e.adoptedStyleSheets=[r,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function jt(o){let e,t,r=2166136261;for(e=0,t=o.length;e<t;e++)r^=o.charCodeAt(e),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function en(o){let e=jt(o);return e+jt(e+o)}const tn=o=>{J(Mr.toString(),o),document._vaadintheme_futurex_componentCss||(pe("vaadin-button",A(Xr.toString())),document._vaadintheme_futurex_componentCss=!0),J(so.cssText,o,!0),J(uo.cssText,o,!0),J(mo.cssText,o,!0),J(fo.cssText,o,!0),J(go.cssText,o,!0)},on=tn;on(document);export{w as A,xr as B,cn as T,qe as _,Tr as a,_r as b,D as c,br as d,$ as e,sn as f,no as g,A as h,x as i,uo as j,so as k,pe as r,ae as s,wr as t,dr as x};
