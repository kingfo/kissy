/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 12 14:49
*/
(function(b,r){var s=this,m={mix:function(c,g,f,k,t){if(!g||!c)return c;if(f===r)f=true;var q,n,u;if(k&&(u=k.length))for(q=0;q<u;q++){n=k[q];n in g&&i(n,c,g,f,t)}else for(n in g)i(n,c,g,f,t);return c}},i=function(c,g,f,k,t){if(k||!(c in g)){var q=g[c],n=f[c];if(q!==n)if(t&&n&&(b.isArray(n)||b.isPlainObject(n))){f=q&&(b.isArray(q)||b.isPlainObject(q))?q:b.isArray(n)?[]:{};g[c]=b.mix(f,n,k,r,true)}else if(n!==r)g[c]=f[c]}},d=s&&s[b]||{},e=0;s=d.__HOST||(d.__HOST=s||{});b=s[b]=m.mix(d,m,false);b.mix(b,
{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.20dev",buildTime:"20110812144902",merge:function(){var c={},g,f=arguments.length;for(g=0;g<f;g++)b.mix(c,arguments[g]);return c},augment:function(){var c=b.makeArray(arguments),g=c.length-2,f=c[0],k=c[g],t=c[g+1],q=1;if(!b.isArray(t)){k=t;t=r;g++}if(!b.isBoolean(k)){k=r;g++}for(;q<g;q++)b.mix(f.prototype,c[q].prototype||c[q],k,t);return f},extend:function(c,g,f,k){if(!g||!c)return c;var t=Object.create?function(u,v){return Object.create(u,
{constructor:{value:v}})}:function(u,v){function y(){}y.prototype=u;var x=new y;x.constructor=v;return x},q=g.prototype,n;n=t(q,c);c.prototype=b.mix(n,c.prototype);c.superclass=t(q,g);f&&b.mix(n,f);k&&b.mix(c,k);return c},__init:function(){this.Config=this.Config||{};this.Env=this.Env||{};this.Config.debug=""},namespace:function(){var c=b.makeArray(arguments),g=c.length,f=null,k,t,q,n=c[g-1]===true&&g--;for(k=0;k<g;k++){q=(""+c[k]).split(".");f=n?s:this;for(t=s[q[0]]===f?1:0;t<q.length;++t)f=
f[q[t]]=f[q[t]]||{}}return f},app:function(c,g){var f=b.isString(c),k=f?s[c]||{}:c,t=0,q=b.__APP_INIT_METHODS.length;for(b.mix(k,this,true,b.__APP_MEMBERS);t<q;t++)b[b.__APP_INIT_METHODS[t]].call(k);b.mix(k,b.isFunction(g)?g():g);f&&(s[c]=k);return k},config:function(c){for(var g in c)this["_"+g]&&this["_"+g](c[g])},log:function(c,g,f){if(b.Config.debug){if(f)c=f+": "+c;if(s.console!==r&&console.log)console[g&&console[g]?g:"log"](c)}},error:function(c){if(b.Config.debug)throw c;},guid:function(c){return(c||
"")+e++}});b.__init();return b})("KISSY",undefined);
(function(b,r){function s(){if(E)return E;var a=x;b.each(C,function(h){a+=h+"|"});a=a.slice(0,-1);return E=RegExp(a,"g")}function m(){if(F)return F;var a=x;b.each(G,function(h){a+=h+"|"});a+="&#(\\d{1,5});";return F=RegExp(a,"g")}function i(a){var h=typeof a;return d(a)||h!=="object"&&h!=="function"}function d(a){return b.isNull(a)||b.isUndefined(a)}function e(a,h,j){var l=a,p,o,w;if(a&&((p=b.isArray(a))||b.isPlainObject(a)||b.isDate(a)||b.isRegExp(a))){if(a[B])return j[a[B]].r;a[B]=w=b.guid();l=
p?h?b.filter(a,h):a.concat():b.isDate(a)?new Date(+a):b.isRegExp(a)?RegExp(a):{};j[w]={r:l,o:a}}if(a&&(p||b.isPlainObject(a)))if(p)for(a=0;a<l.length;a++)l[a]=e(l[a],h,j);else for(o in a)if(o!==B&&a.hasOwnProperty(o)&&(!h||h.call(a,a[o],o,a)!==false))l[o]=e(a[o],h,j);return l}function c(a,h,j,l){if(a[A]===h&&h[A]===a)return true;a[A]=h;h[A]=a;var p=function(w,z){return w!==null&&w!==r&&w[z]!==r},o;for(o in h)!p(a,o)&&p(h,o)&&j.push("expected has key '"+o+"', but missing from actual.");for(o in a)!p(h,
o)&&p(a,o)&&j.push("expected missing key '"+o+"', but present in actual.");for(o in h)if(o!=A)b.equals(a[o],h[o],j,l)||l.push("'"+o+"' was '"+(h[o]?h[o].toString():h[o])+"' in expected, but was '"+(a[o]?a[o].toString():a[o])+"' in actual.");b.isArray(a)&&b.isArray(h)&&a.length!=h.length&&l.push("arrays were not the same length");delete a[A];delete h[A];return j.length===0&&l.length===0}var g=b.__HOST,f=Object.prototype,k=f.toString,t=f.hasOwnProperty;f=Array.prototype;var q=f.indexOf,n=f.lastIndexOf,
u=f.filter,v=String.prototype.trim,y=f.map,x="",B="__~ks_cloned",A="__~ks_compared",I=/^\s+|\s+$/g,D=encodeURIComponent,J=decodeURIComponent,K={},C={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"'},G={},E,F,H;for(H in C)G[C[H]]=H;b.mix(b,{noop:function(){},type:function(a){return d(a)?String(a):K[k.call(a)]||"object"},isNullOrUndefined:d,isNull:function(a){return a===null},isUndefined:function(a){return a===r},isEmptyObject:function(a){for(var h in a)if(h!==r)return false;return true},isPlainObject:function(a){return a&&
k.call(a)==="[object Object]"&&"isPrototypeOf"in a},equals:function(a,h,j,l){j=j||[];l=l||[];if(a===h)return true;if(a===r||a===null||h===r||h===null)return d(a)&&d(h);if(a instanceof Date&&h instanceof Date)return a.getTime()==h.getTime();if(b.isString(a)&&b.isString(h))return a==h;if(b.isNumber(a)&&b.isNumber(h))return a==h;if(typeof a==="object"&&typeof h==="object")return c(a,h,j,l);return a===h},clone:function(a,h){var j={},l=e(a,h,j);b.each(j,function(p){p=p.o;if(p[B])try{delete p[B]}catch(o){p[B]=
r}});j=r;return l},trim:v?function(a){return d(a)?x:v.call(a)}:function(a){return d(a)?x:a.toString().replace(I,x)},substitute:function(a,h,j){if(!b.isString(a)||!b.isPlainObject(h))return a;return a.replace(j||/\\?\{([^{}]+)\}/g,function(l,p){if(l.charAt(0)==="\\")return l.slice(1);return h[p]===r?x:h[p]})},each:function(a,h,j){if(a){var l,p=0,o=a&&a.length,w=o===r||b.type(a)==="function";j=j||g;if(w)for(l in a){if(h.call(j,a[l],l,a)===false)break}else for(l=a[0];p<o&&h.call(j,l,p,a)!==false;l=a[++p]);
}return a},indexOf:q?function(a,h){return q.call(h,a)}:function(a,h){for(var j=0,l=h.length;j<l;++j)if(h[j]===a)return j;return-1},lastIndexOf:n?function(a,h){return n.call(h,a)}:function(a,h){for(var j=h.length-1;j>=0;j--)if(h[j]===a)break;return j},unique:function(a,h){var j=a.slice();h&&j.reverse();for(var l=0,p,o;l<j.length;){for(o=j[l];(p=b.lastIndexOf(o,j))!==l;)j.splice(p,1);l+=1}h&&j.reverse();return j},inArray:function(a,h){return b.indexOf(a,h)>-1},filter:u?function(a,h,j){return u.call(a,
h,j||this)}:function(a,h,j){var l=[];b.each(a,function(p,o,w){if(h.call(j||this,p,o,w))l.push(p)});return l},map:y?function(a,h,j){return y.call(a,h,j||this)}:function(a,h,j){for(var l=a.length,p=Array(l),o=0;o<l;o++){var w=b.isString(a)?a.charAt(o):a[o];if(w||o in a)p[o]=h.call(j||this,w,o,a)}return p},reduce:function(a,h){var j=a.length;if(typeof h!=="function")throw new TypeError("callback is not function!");if(j===0&&arguments.length==2)throw new TypeError("arguments invalid");var l=0,p;if(arguments.length>=
3)p=arguments[2];else{do{if(l in a){p=a[l++];break}l+=1;if(l>=j)throw new TypeError;}while(1)}for(;l<j;){if(l in a)p=h.call(r,p,a[l],l,a);l++}return p},bind:function(a,h){var j=[].slice,l=j.call(arguments,2),p=function(){},o=function(){return a.apply(this instanceof p?this:h,l.concat(j.call(arguments)))};p.prototype=a.prototype;o.prototype=new p;return o},now:Date.now||function(){return+new Date},fromUnicode:function(a){return a.replace(/\\u([a-f\d]{4})/ig,function(h,j){return String.fromCharCode(parseInt(j,
16))})},escapeHTML:function(a){return a.replace(s(),function(h){return G[h]})},unEscapeHTML:function(a){return a.replace(m(),function(h,j){return C[h]||String.fromCharCode(+j)})},makeArray:function(a){if(d(a))return[];if(b.isArray(a))return a;if(typeof a.length!=="number"||b.isString(a)||b.isFunction(a))return[a];for(var h=[],j=0,l=a.length;j<l;j++)h[j]=a[j];return h},param:function(a,h,j,l){if(!b.isPlainObject(a))return x;h=h||"&";j=j||"=";if(b.isUndefined(l))l=true;var p=[],o,w;for(o in a){w=a[o];
o=D(o);if(i(w))p.push(o,j,D(w+x),h);else if(b.isArray(w)&&w.length)for(var z=0,L=w.length;z<L;++z)if(i(w[z]))p.push(o,l?D("[]"):x,j,D(w[z]+x),h)}p.pop();return p.join(x)},unparam:function(a,h,j){if(typeof a!=="string"||(a=b.trim(a)).length===0)return{};h=h||"&";j=j||"=";var l={};a=a.split(h);for(var p,o,w=0,z=a.length;w<z;++w){h=a[w].split(j);p=J(h[0]);try{o=J(h[1]||x)}catch(L){o=h[1]||x}if(b.endsWith(p,"[]"))p=p.substring(0,p.length-2);if(t.call(l,p))if(b.isArray(l[p]))l[p].push(o);else l[p]=[l[p],
o];else l[p]=o}return l},later:function(a,h,j,l,p){h=h||0;l=l||{};var o=a,w=b.makeArray(p),z;if(b.isString(a))o=l[a];a=function(){o.apply(l,w)};z=j?setInterval(a,h):setTimeout(a,h);return{id:z,interval:j,cancel:function(){this.interval?clearInterval(z):clearTimeout(z)}}},startsWith:function(a,h){return a.lastIndexOf(h,0)===0},endsWith:function(a,h){var j=a.length-h.length;return j>=0&&a.indexOf(h,j)==j}});b.mix(b,{isBoolean:i,isNumber:i,isString:i,isFunction:i,isArray:i,isDate:i,isRegExp:i,isObject:i});
b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,h){K["[object "+a+"]"]=h=a.toLowerCase();b["is"+a]=function(j){return b.type(j)==h}});b.isNullOrUndefined=d})(KISSY,undefined);(function(b){if(!("require"in this)){b.__loader={};b.__loaderUtils={};b.__loaderData={}}})(KISSY);(function(b,r){"require"in this||b.mix(r,{LOADING:1,LOADED:2,ERROR:3,ATTACHED:4})})(KISSY,KISSY.__loaderData);
(function(b,r,s){if(!b.use){b.mix(s,{isWebKit:!!navigator.userAgent.match(/AppleWebKit/),IE:!!navigator.userAgent.match(/MSIE/),isCss:function(d){return/\.css(?:\?|$)/i.test(d)},isLinkNode:function(d){return d.nodeName.toLowerCase()=="link"},normalizePath:function(d){d=d.split("/");for(var e=[],c,g=0;g<d.length;g++){c=d[g];if(c!=".")c==".."?e.pop():e.push(c)}return e.join("/")},normalDepModuleName:function d(e,c){if(!c)return c;if(b.isArray(c)){for(var g=0;g<c.length;g++)c[g]=d(e,c[g]);return c}if(m(c,
"../")||m(c,"./")){g="";var f;if((f=e.lastIndexOf("/"))!=-1)g=e.substring(0,f+1);return i(g+c)}else return c.indexOf("./")!=-1||c.indexOf("../")!=-1?i(c):c},removePostfix:function(d){return d.replace(/(-min)?\.js[^/]*$/i,"")},normalBasePath:function(d){if(d.charAt(d.length-1)!="/")d+="/";d=b.trim(d);if(!d.match(/^(http(s)?)|(file):/i)&&!m(d,"/"))d=r.__pagePath+d;return i(d)},indexMapping:function(d){for(var e=0;e<d.length;e++)if(d[e].match(/\/$/))d[e]+="index";return d}});var m=b.startsWith,i=s.normalizePath}})(KISSY,
KISSY.__loader,KISSY.__loaderUtils);
(function(b,r){function s(){var c=true,g;for(g in e){var f=e[g],k=f.node;f=f.callbacks;var t=false;if(m){if(k.sheet)t=true}else if(k.sheet)try{if(k.sheet.cssRules)t=true}catch(q){if(q.name==="NS_ERROR_DOM_SECURITY_ERR")t=true}if(t){b.each(f,function(n){n.call(k)});delete e[g]}else c=false}d=c?null:setTimeout(s,i)}if(!b.use){var m=r.isWebKit,i=100,d=null,e={};b.mix(r,{scriptOnload:document.addEventListener?function(c,g){if(r.isLinkNode(c))return r.styleOnload(c,g);c.addEventListener("load",g,false)}:
function(c,g){if(r.isLinkNode(c))return r.styleOnload(c,g);var f=c.onreadystatechange;c.onreadystatechange=function(){if(/loaded|complete/i.test(c.readyState)){c.onreadystatechange=null;f&&f();g.call(this)}}},styleOnload:window.attachEvent?function(c,g){function f(){c.detachEvent("onload",f);g.call(c)}c.attachEvent("onload",f)}:function(c,g){var f=c.href;if(e[f])e[f].callbacks.push(g);else e[f]={node:c,callbacks:[g]};d||s()}})}})(KISSY,KISSY.__loaderUtils);
(function(b,r){if(!("require"in this)){var s=r.scriptOnload;b.mix(b,{getStyle:function(m,i,d){var e=document,c=e.head||e.getElementsByTagName("head")[0];e=e.createElement("link");var g=i;if(b.isPlainObject(g)){i=g.success;d=g.charset}e.href=m;e.rel="stylesheet";if(d)e.charset=d;i&&r.scriptOnload(e,i);c.appendChild(e);return e},getScript:function(m,i,d){if(r.isCss(m))return b.getStyle(m,i,d);var e=document,c=e.head||e.getElementsByTagName("head")[0],g=e.createElement("script"),f=i,k,t,q;if(b.isPlainObject(f)){i=
f.success;k=f.error;t=f.timeout;d=f.charset}g.src=m;g.async=true;if(d)g.charset=d;if(i||k){s(g,function(){if(q){q.cancel();q=undefined}b.isFunction(i)&&i.call(g)});if(b.isFunction(k)){e.addEventListener&&g.addEventListener("error",function(){if(q){q.cancel();q=undefined}k.call(g)},false);q=b.later(function(){q=undefined;k()},(t||this.Config.timeout)*1E3)}}c.insertBefore(g,c.firstChild);return g}})}})(KISSY,KISSY.__loaderUtils);
(function(b,r,s){if(!("require"in this)){var m=s.IE;b.__HOST.document.getElementsByTagName("head");var i=b.mix;b.mix(r,{add:function(d,e,c){var g=this.Env.mods,f;if(b.isString(d)&&!c&&b.isPlainObject(e)){f={};f[d]=e;d=f}if(b.isPlainObject(d)){b.each(d,function(t,q){t.name=q;g[q]&&i(t,g[q],false)});i(g,d);return this}if(b.isString(d)){var k;if(c&&(k=c.host)){d=g[k];if(!d)return this;if(this.__isAttached(k))e.call(this,this);else{d.fns=d.fns||[];d.fns.push(e)}return this}this.__registerModule(d,e,c);
if(c&&c.attach===false)return this;e=g[d];d=s.normalDepModuleName(d,e.requires);if(this.__isAttached(d))this.__attachMod(e);else if(this.Config.debug&&!e)for(d=b.makeArray(d).length-1;d>=0;d--);return this}if(b.isFunction(d)){c=e;e=d;if(m){d=this.__findModuleNameByInteractive();this.__registerModule(d,e,c);this.__startLoadModuleName=null;this.__startLoadTime=0}else this.__currentModule={def:e,config:c};return this}return this}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(b,r,s,m){"require"in this||b.mix(r,{__buildPath:function(i,d){function e(g,f){if(!i[g]&&i[f]){i[f]=s.normalDepModuleName(i.name,i[f]);i[g]=(d||c.base)+i[f]}if(i[g]&&c.debug)i[g]=i[g].replace(/-min/ig,"");if(i[g]&&!i[g].match(/\?t=/)&&i.tag)i[g]+="?t="+i.tag}var c=this.Config;e("fullpath","path");i.cssfullpath!==m.LOADED&&e("cssfullpath","csspath")}})})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(b,r){"require"in this||b.mix(r,{__mixMods:function(s){var m=this.Env.mods,i=s.Env.mods,d;for(d in i)this.__mixMod(m,i,d,s)},__mixMod:function(s,m,i,d){var e=s[i]||{},c=e.status;b.mix(e,b.clone(m[i]));if(c)e.status=c;d&&this.__buildPath(e,d.Config.base);s[i]=e}})})(KISSY,KISSY.__loader);
(function(b,r,s){"require"in this||b.mix(r,{__findModuleNameByInteractive:function(){for(var m=document.getElementsByTagName("script"),i,d,e=0;e<m.length;e++){d=m[e];if(d.readyState=="interactive"){i=d;break}}if(!i)return this.__startLoadModuleName;m=i.src;if(m.lastIndexOf(this.Config.base,0)===0)return s.removePostfix(m.substring(this.Config.base.length));i=this.__packages;for(var c in i){d=i[c].path;if(i.hasOwnProperty(c)&&m.lastIndexOf(d,0)===0)return s.removePostfix(m.substring(d.length))}}})})(KISSY,
KISSY.__loader,KISSY.__loaderUtils);
(function(b,r,s,m){if(!("require"in this)){var i=s.IE;b.__HOST.document.getElementsByTagName("head");var d=m.LOADING,e=m.LOADED,c=m.ERROR,g=m.ATTACHED;b.mix(r,{__load:function(f,k,t){function q(){y[u]=e;if(f.status!==c){if(f.status!==g)f.status=e;k()}}var n=this,u=f.fullpath,v=s.isCss(u),y=n.Env._loadQueue,x=y[u];f.status=f.status||0;if(f.status<d&&x)f.status=x.nodeName?d:e;if(b.isString(f.cssfullpath)){b.getScript(f.cssfullpath);f.cssfullpath=f.csspath=e}if(f.status<d&&u){f.status=d;if(i&&!v){n.__startLoadModuleName=
f.name;n.__startLoadTime=Number(+new Date)}x=b.getScript(u,{success:function(){if(!v){if(n.__currentModule){n.__registerModule(f.name,n.__currentModule.def,n.__currentModule.config);n.__currentModule=null}t.global&&n.__mixMod(n.Env.mods,t.global.Env.mods,f.name,t.global);if(!(f.fns&&f.fns.length>0))f.status=c}q()},error:function(){f.status=c;q()},charset:f.charset});y[u]=x}else f.status===d?s.scriptOnload(x,q):k()}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(b,r,s){if(!("require"in this)){b.__HOST.document.getElementsByTagName("head");var m=s.ATTACHED;s=b.mix;s(r,{__pagePath:location.href.replace(location.hash,"").replace(/[^/]*$/i,""),__currentModule:null,__startLoadTime:0,__startLoadModuleName:null,__isAttached:function(i){var d=this.Env.mods,e=true;b.each(i,function(c){c=d[c];if(!c||c.status!==m)return e=false});return e}})}})(KISSY,KISSY.__loader,KISSY.__loaderData);
(function(b,r,s){if(!("require"in this)){b.__HOST.document.getElementsByTagName("head");b.mix(r,{_packages:function(m){var i;i=this.__packages=this.__packages||{};b.each(m,function(d){i[d.name]=d;d.path=d.path&&s.normalBasePath(d.path);d.tag=d.tag&&encodeURIComponent(d.tag)})},__getPackagePath:function(m){if(m.packagepath)return m.packagepath;var i=this._combine(m.name),d=this.__packages||{},e="",c;for(c in d)if(d.hasOwnProperty(c)&&b.startsWith(i,c)&&c.length>e)e=c;d=(i=d[e])&&i.path||this.Config.base;
m.charset=i&&i.charset;m.tag=i?i.tag:encodeURIComponent(b.Config.tag||b.buildTime);return m.packagepath=d},_combine:function(m,i){var d=this,e;if(b.isObject(m))b.each(m,function(c,g){b.each(c,function(f){d._combine(f,g)})});else{e=d.__combines=d.__combines||{};if(i)e[m]=i;else return e[m]||m}}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils);
(function(b,r,s){if(!("require"in this)){b.__HOST.document.getElementsByTagName("head");var m=s.LOADED,i=b.mix;b.mix(r,{__registerModule:function(d,e,c){c=c||{};var g=this.Env.mods,f=g[d]||{};i(f,{name:d,status:m});f.fns=f.fns||[];f.fns.push(e);i(g[d]=f,c)}})}})(KISSY,KISSY.__loader,KISSY.__loaderData);
(function(b,r,s,m){if(!("require"in this)){b.__HOST.document.getElementsByTagName("head");var i=m.LOADED,d=m.ATTACHED;b.mix(r,{use:function(e,c,g){e=e.replace(/\s+/g,"").split(",");s.indexMapping(e);g=g||{};var f=this,k;g.global&&f.__mixMods(g.global);if(f.__isAttached(e)){var t=f.__getModules(e);c&&c.apply(f,t)}else{b.each(e,function(q){f.__attachModByName(q,function(){if(!k&&f.__isAttached(e)){k=true;var n=f.__getModules(e);c&&c.apply(f,n)}},g)});return f}},__getModules:function(e){var c=this,g=
[c];b.each(e,function(f){s.isCss(f)||g.push(c.require(f))});return g},require:function(e){e=b.Env.mods[e];var c=b.onRequire&&b.onRequire(e);if(c!==undefined)return c;return e&&e.value},__attachModByName:function(e,c,g){var f=this.Env.mods,k=f[e];if(!k){k=this.Config.componentJsName||function(t){var q="js";if(/(.+)\.(js|css)$/i.test(t)){q=RegExp.$2;t=RegExp.$1}return t+"-min."+q};k={path:b.isFunction(k)?k(this._combine(e)):k,charset:"utf-8"};f[e]=k}k.name=e;k&&k.status===d||this.__attach(k,c,g)},__attach:function(e,
c,g){function f(){if(!n&&k.__isAttached(e.requires)){e.status===i&&k.__attachMod(e);if(e.status===d){n=true;c()}}}var k=this,t=k.Env.mods,q=(e.requires||[]).concat();e.requires=q;b.each(q,function(u,v,y){u=y[v]=s.normalDepModuleName(e.name,u);(v=t[u])&&v.status===d||k.__attachModByName(u,f,g)});k.__buildPath(e,k.__getPackagePath(e));k.__load(e,function(){e.requires=e.requires||[];b.each(e.requires,function(u,v,y){u=y[v]=s.normalDepModuleName(e.name,u);v=t[u];y=b.inArray(u,q);v&&v.status===d||y||k.__attachModByName(u,
f,g)});f()},g);var n=false},__attachMod:function(e){var c=this,g=e.fns;g&&b.each(g,function(f){f=b.isFunction(f)?f.apply(c,c.__getModules(e.requires)):f;e.value=e.value||f});e.status=d}})}})(KISSY,KISSY.__loader,KISSY.__loaderUtils,KISSY.__loaderData);
(function(b,r,s){function m(e){var c=e.src,g=e.getAttribute("data-combo-prefix")||"??";e=e.getAttribute("data-combo-sep")||",";e=c.split(e);var f,k=e[0];g=k.indexOf(g);if(g==-1)f=c.replace(i,"$1");else{f=k.substring(0,g);c=k.substring(g+2,k.length);if(c.match(d))f+=c.replace(i,"$1");else b.each(e,function(t){if(t.match(d)){f+=t.replace(i,"$1");return false}})}return f}if(!("require"in this)){b.mix(b,r);var i=/^(.*)(seed|kissy)(-aio)?(-min)?\.js[^/]*/i,d=/(seed|kissy)(-aio)?(-min)?\.js/i;b.__initLoader=
function(){this.Env.mods=this.Env.mods||{};this.Env._loadQueue={}};b.__initLoader();(function(){var e=document.getElementsByTagName("script");e=m(e[e.length-1]);b.Config.base=s.normalBasePath(e);b.Config.timeout=10})();b.each(r,function(e,c){b.__APP_MEMBERS.push(c)});b.__APP_INIT_METHODS.push("__initLoader")}})(KISSY,KISSY.__loader,KISSY.__loaderUtils);
(function(b,r){function s(){var n=d.documentElement.doScroll,u=n?"onreadystatechange":"DOMContentLoaded",v=function(){m()};f=true;if(d.readyState==="complete")m();else{if(d.addEventListener){var y=function(){d.removeEventListener(u,y,false);m()};d.addEventListener(u,y,false);i.addEventListener("load",v,false)}else{var x=function(){if(d.readyState==="complete"){d.detachEvent(u,x);m()}};d.attachEvent(u,x);i.attachEvent("onload",v);v=false;try{v=i.frameElement===null}catch(B){}if(n&&v){var A=function(){try{n("left");
m()}catch(I){setTimeout(A,k)}};A()}}return 0}}function m(){if(!c){c=true;if(g){for(var n,u=0;n=g[u++];)n.call(i,b);g=null}}}var i=b.__HOST,d=i.document,e=d.documentElement,c=false,g=[],f=false,k=40,t=/^#?([\w-]+)$/,q=/\S/;b.mix(b,{isWindow:function(n){return b.type(n)==="object"&&"setInterval"in n&&"document"in n&&n.document.nodeType==9},parseXML:function(n){var u;try{if(window.DOMParser)u=(new DOMParser).parseFromString(n,"text/xml");else{u=new ActiveXObject("Microsoft.XMLDOM");u.async="false";u.loadXML(n)}}catch(v){u=
r}!u||!u.documentElement||u.getElementsByTagName("parsererror");return u},globalEval:function(n){if(n&&q.test(n)){var u=d.getElementsByTagName("head")[0]||e,v=d.createElement("script");v.text=n;u.insertBefore(v,u.firstChild);u.removeChild(v)}},ready:function(n){f||s();c?n.call(i,this):g.push(n);return this},available:function(n,u){if((n=(n+"").match(t)[1])&&b.isFunction(u))var v=1,y=b.later(function(){if(d.getElementById(n)&&(u()||1)||++v>500)y.cancel()},k,true)}});if(location&&(location.search||
"").indexOf("ks-debug")!==-1)b.Config.debug=true})(KISSY);(function(b){b.config({combine:{core:["dom","ua","event","node","json","ajax","anim","base","cookie"]}})})(KISSY);
