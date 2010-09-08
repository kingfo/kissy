/*
Copyright 2010, KISSY UI Library v1.1.3
MIT Licensed
build time: Sep 8 14:14
*/
(function(o,g,p){if(o[g]===p)o[g]={};g=o[g];var s=o.document,x=location,q=function(a,c,e,d){if(!c||!a)return a;if(e===p)e=true;var f,i,l;if(d&&(l=d.length))for(f=0;f<l;f++){i=d[f];if(i in c)if(e||!(i in a))a[i]=c[i]}else for(i in c)if(e||!(i in a))a[i]=c[i];return a},y=false,t=[],v=false,z=/^#?([\w-]+)$/,A=0;q(g,{version:"1.1.3",__init:function(){this.Env={mods:{},_loadQueue:{}};var a=s.getElementsByTagName("script");this.Config={debug:"",base:a[a.length-1].src.replace(/^(.*)(seed|kissy).*$/i,
"$1"),timeout:10}},ready:function(a){v||this._bindReady();y?a.call(o,this):t.push(a);return this},_bindReady:function(){var a=this,c=s.documentElement.doScroll,e=c?"onreadystatechange":"DOMContentLoaded",d=function(){a._fireReady()};v=true;if(s.readyState==="complete")return d();if(s.addEventListener){var f=function(){s.removeEventListener(e,f,false);d()};s.addEventListener(e,f,false);o.addEventListener("load",d,false)}else{var i=function(){if(s.readyState==="complete"){s.detachEvent(e,i);d()}};s.attachEvent(e,
i);o.attachEvent("onload",d);if(o==o.top){var l=function(){try{c("left");d()}catch(u){setTimeout(l,1)}};l()}}},_fireReady:function(){if(!y){y=true;if(t){for(var a,c=0;a=t[c++];)a.call(o,this);t=null}}},available:function(a,c){if((a=(a+"").match(z)[1])&&g.isFunction(c))var e=1,d=g.later(function(){if(s.getElementById(a)&&(c()||1)||++e>500)d.cancel()},40,true)},mix:q,merge:function(){var a={},c,e=arguments.length;for(c=0;c<e;++c)q(a,arguments[c]);return a},augment:function(){var a=arguments,c=a.length-
2,e=a[0],d=a[c],f=a[c+1],i=1;if(!g.isArray(f)){d=f;f=p;c++}if(!g.isBoolean(d)){d=p;c++}for(;i<c;i++)q(e.prototype,a[i].prototype||a[i],d,f);return e},extend:function(a,c,e,d){if(!c||!a)return a;var f=Object.prototype,i=c.prototype,l=function(u){function m(){}m.prototype=u;return new m}(i);a.prototype=l;l.constructor=a;a.superclass=i;if(c!==Object&&i.constructor===f.constructor)i.constructor=c;e&&q(l,e);d&&q(a,d);return a},namespace:function(){var a=arguments.length,c=null,e,d,f;for(e=0;e<a;++e){f=
(""+arguments[e]).split(".");c=this;for(d=o[f[0]]===c?1:0;d<f.length;++d)c=c[f[d]]=c[f[d]]||{}}return c},app:function(a,c){var e=g.isString(a),d=e?o[a]||{}:a;q(d,this,true,g.__APP_MEMBERS);d.__init();q(d,g.isFunction(c)?c():c);e&&(o[a]=d);return d},log:function(a,c,e){if(g.Config.debug){if(e)a=e+": "+a;if(o.console!==p&&console.log)console[c&&console[c]?c:"log"](a)}},error:function(a){if(g.Config.debug)throw a;},guid:function(a){var c=A++ +"";return a?a+c:c}});g.__init();g.__APP_MEMBERS=["__init",
"namespace"];if(x&&(x.search||"").indexOf("ks-debug")!==-1)g.Config.debug=true})(window,"KISSY");
(function(o,g,p){function s(b){var h=typeof b;return b===null||h!=="object"&&h!=="function"}function x(b){return t.slice.call(b)}var q=document,y=q.documentElement,t=Array.prototype,v=t.indexOf,z=t.lastIndexOf,A=t.filter,a=String.prototype.trim,c=Object.prototype.toString,e=encodeURIComponent,d=decodeURIComponent,f=e("[]"),i=/^\s+|\s+$/g,l=/^(\w+)\[\]$/,u=/\S/;g.mix(g,{isUndefined:function(b){return b===p},isBoolean:function(b){return c.call(b)==="[object Boolean]"},isString:function(b){return c.call(b)===
"[object String]"},isNumber:function(b){return c.call(b)==="[object Number]"&&isFinite(b)},isPlainObject:function(b){return b&&c.call(b)==="[object Object]"&&!b.nodeType&&!b.setInterval},isEmptyObject:function(b){for(var h in b)return false;return true},isFunction:function(b){return c.call(b)==="[object Function]"},isArray:function(b){return c.call(b)==="[object Array]"},trim:a?function(b){return b==p?"":a.call(b)}:function(b){return b==p?"":b.toString().replace(i,"")},substitute:function(b,h,j){if(!g.isString(b)||
!g.isPlainObject(h))return b;return b.replace(j||/\\?\{([^{}]+)\}/g,function(k,n){if(k.charAt(0)==="\\")return k.slice(1);return h[n]!==p?h[n]:""})},each:function(b,h,j){var k,n=0,r=b.length,w=r===p||g.isFunction(b);j=j||o;if(w)for(k in b){if(h.call(j,b[k],k,b)===false)break}else for(k=b[0];n<r&&h.call(j,k,n,b)!==false;k=b[++n]);return b},indexOf:v?function(b,h){return v.call(h,b)}:function(b,h){for(var j=0,k=h.length;j<k;++j)if(h[j]===b)return j;return-1},lastIndexOf:z?function(b,h){return z.call(h,
b)}:function(b,h){for(var j=h.length-1;j>=0;j--)if(h[j]===b)break;return j},unique:function(b,h){h&&b.reverse();b=b.slice();for(var j=0,k,n;j<b.length;){for(n=b[j];(k=g.lastIndexOf(n,b))!==j;)b.splice(k,1);j+=1}h&&b.reverse();return b},inArray:function(b,h){return g.indexOf(b,h)>-1},makeArray:function(b){if(b===null||b===p)return[];if(g.isArray(b))return b;if(typeof b.length!=="number"||g.isString(b)||g.isFunction(b))return[b];return x(b)},filter:A?function(b,h,j){return A.call(b,h,j)}:function(b,
h,j){var k=[];g.each(b,function(n,r,w){h.call(j,n,r,w)&&k.push(n)});return k},param:function(b,h){if(!g.isPlainObject(b))return"";h=h||"&";var j=[],k,n;for(k in b){n=b[k];k=e(k);if(s(n))j.push(k,"=",e(n+""),h);else if(g.isArray(n)&&n.length)for(var r=0,w=n.length;r<w;++r)s(n[r])&&j.push(k,f+"=",e(n[r]+""),h)}j.pop();return j.join("")},unparam:function(b,h){if(typeof b!=="string"||(b=g.trim(b)).length===0)return{};var j={};b=b.split(h||"&");for(var k,n,r,w=0,B=b.length;w<B;++w){h=b[w].split("=");k=
d(h[0]);try{n=d(h[1]||"")}catch(C){n=h[1]||""}if((r=k.match(l))&&r[1]){j[r[1]]=j[r[1]]||[];j[r[1]].push(n)}else j[k]=n}return j},later:function(b,h,j,k,n){h=h||0;k=k||{};var r=b,w=g.makeArray(n),B;if(g.isString(b))r=k[b];r||g.error("method undefined");b=function(){r.apply(k,w)};B=j?setInterval(b,h):setTimeout(b,h);return{id:B,interval:j,cancel:function(){this.interval?clearInterval(B):clearTimeout(B)}}},clone:function(b){var h=b,j,k;if(b&&((j=g.isArray(b))||g.isPlainObject(b))){h=j?[]:{};for(k in b)if(b.hasOwnProperty(k))h[k]=
g.clone(b[k])}return h},now:function(){return(new Date).getTime()},globalEval:function(b){if(b&&u.test(b)){var h=q.getElementsByTagName("head")[0]||y,j=q.createElement("script");j.text=b;h.insertBefore(j,h.firstChild);h.removeChild(j)}}});try{x(y.childNodes)}catch(m){x=function(b){for(var h=[],j=b.length-1;j>=0;j--)h[j]=b[j];return h}}})(window,KISSY);
(function(o,g,p){var s=o.document,x=s.getElementsByTagName("head")[0]||s.documentElement,q=2,y=3,t=4,v=g.mix,z=s.createElement("script").readyState?function(a,c){var e=a.onreadystatechange;a.onreadystatechange=function(){var d=a.readyState;if(d==="loaded"||d==="complete"){a.onreadystatechange=null;e&&e();c.call(this)}}}:function(a,c){a.addEventListener("load",c,false)},A=/\.css(?:\?|$)/i;o={add:function(a,c,e){var d=this.Env.mods,f;if(g.isString(a)&&!e&&g.isPlainObject(c)){f={};f[a]=c;a=f}if(g.isPlainObject(a)){g.each(a,
function(i,l){i.name=l;d[l]&&v(i,d[l],false)});v(d,a)}else{e=e||{};f=d[a]||{};a=e.host||f.host||a;f=d[a]||{};v(f,{name:a,status:q});if(!f.fns)f.fns=[];c&&f.fns.push(c);v(d[a]=f,e);f.attach!==false&&this.__isAttached(f.requires)&&this.__attachMod(f)}return this},use:function(a,c,e){a=a.replace(/\s+/g,"").split(",");e=e||{};var d=this,f=d.Env.mods,i=(e||0).global,l,u=a.length,m,b,h;i&&d.__mixMods(i);if(d.__isAttached(a))c&&c(d);else{for(l=0;l<u&&(m=f[a[l]]);l++)if(m.status!==t){if(e.order&&l>0){if(!m.requires)m.requires=
[];m._requires=m.requires.concat();b=a[l-1];if(!g.inArray(b,m.requires)&&!g.inArray(m.name,f[b].requires||[]))m.requires.push(b)}d.__attach(m,function(){if(!h&&d.__isAttached(a)){h=true;if(m._requires)m.requires=m._requires;c&&c(d)}},i)}return d}},__attach:function(a,c,e){function d(){if(f.__isAttached(i)){a.status===q&&f.__attachMod(a);a.status===t&&c()}}for(var f=this,i=a.requires||[],l=0,u=i.length;l<u;l++)f.__attach(f.Env.mods[i[l]],d,e);f.__buildPath(a);f.__load(a,d,e)},__mixMods:function(a){var c=
this.Env.mods,e=a.Env.mods,d;for(d in e)this.__mixMod(c,e,d,a)},__mixMod:function(a,c,e,d){var f=a[e]||{},i=f.status;g.mix(f,g.clone(c[e]));if(i)f.status=i;d&&this.__buildPath(f,d.Config.base);a[e]=f},__attachMod:function(a){var c=this;if(a.fns){g.each(a.fns,function(e){e&&e(c)});a.fns=p}a.status=t},__isAttached:function(a){for(var c=this.Env.mods,e,d=(a=g.makeArray(a)).length-1;d>=0&&(e=c[a[d]]);d--)if(e.status!==t)return false;return true},__load:function(a,c,e){function d(){f();if(a.status!==y){e&&
i.__mixMod(i.Env.mods,e.Env.mods,a.name,e);if(a.status!==t)a.status=q;c()}}function f(){u[l]=q}var i=this,l=a.fullpath,u=g.Env._loadQueue,m=u[l];a.status=a.status||0;if(a.status<1&&m)a.status=m.nodeName?1:q;if(g.isString(a.cssfullpath)){i.getScript(a.cssfullpath);a.cssfullpath=q}if(a.status<1&&l){a.status=1;m=i.getScript(l,{success:function(){KISSY.log(a.name+" is loaded.","info");d()},error:function(){a.status=y;f()},charset:a.charset});A.test(l)||(u[l]=m)}else a.status===1?z(m,d):c()},__buildPath:function(a,
c){function e(f,i){if(!a[i]&&a[f])a[i]=(c||d.base)+a[f];if(a[i]&&d.debug)a[i]=a[i].replace(/-min/g,"")}var d=this.Config;e("path","fullpath");a.cssfullpath!==q&&e("csspath","cssfullpath")},getScript:function(a,c,e){var d=A.test(a),f=s.createElement(d?"link":"script"),i=c,l,u,m;if(g.isPlainObject(i)){c=i.success;l=i.error;u=i.timeout;e=i.charset}if(d){f.href=a;f.rel="stylesheet"}else{f.src=a;f.async=true}if(e)f.charset=e;if(g.isFunction(c))d?c.call(f):z(f,function(){if(m){m.cancel();m=p}c.call(f)});
if(g.isFunction(l))m=g.later(function(){m=p;l()},(u||this.Config.timeout)*1E3);x.insertBefore(f,x.firstChild);return f}};v(g,o);g.each(o,function(a,c){g.__APP_MEMBERS.push(c)})})(window,KISSY);(function(o){var g={core:{path:"packages/core-min.js",charset:"utf-8"}};o.each(["sizzle","datalazyload","flash","switchable","suggest"],function(p){g[p]={path:p+"/"+p+"-pkg-min.js",requires:["core"],charset:"utf-8"}});o.add(g)})(KISSY);
