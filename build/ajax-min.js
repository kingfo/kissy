/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 2 18:05
*/
KISSY.add("ajax/base",function(i,h,j,f){function c(e){e=i.mix(i.clone(r),e||{},undefined,undefined,true);if(e.crossDomain==null){var k=p.exec(e.url.toLowerCase());e.crossDomain=!!(k&&(k[1]!=n[1]||k[2]!=n[2]||(k[3]||(k[1]==="http:"?80:443))!=(n[3]||(n[1]==="http:"?80:443))))}if(e.processData&&e.data&&!i.isString(e.data))e.data=i.param(e.data,undefined,undefined,e.serializeArray);e.type=e.type.toUpperCase();e.hasContent=!q.test(e.type);if(!e.hasContent){if(e.data)e.url+=(/\?/.test(e.url)?"&":"?")+e.data;
if(e.cache===false)e.url+=(/\?/.test(e.url)?"&":"?")+"_ksTS="+(i.now()+"_"+i.guid())}e.dataType=i.trim(e.dataType||"*").split(g);e.context=e.context||e;return e}function a(e,k){d.fire(e,{ajaxConfig:k.config,xhr:k})}function b(e){var k=this.config;e=e.type;this.timeoutTimer&&clearTimeout(this.timeoutTimer);k[e]&&k[e].call(k.context,this.responseData,this.statusText,this);a(e,this)}function d(e){if(e.url){e=c(e);var k=new f(e);a("start",k);var v=new (s[e.dataType[0]]||s["*"])(k);k.transport=v;e.contentType&&
k.setRequestHeader("Content-Type",e.contentType);var t=e.dataType[0],u=e.accepts;k.setRequestHeader("Accept",t&&u[t]?u[t]+(t!=="*"?", */*; q=0.01":""):u["*"]);for(var w in e.headers)k.setRequestHeader(w,e.headers[w]);k.on("complete success error",b);k.readyState=1;a("send",k);if(e.async&&e.timeout>0)k.timeoutTimer=setTimeout(function(){k.abort("timeout")},e.timeout);try{k.state=1;v.send()}catch(x){k.status<2&&k.callback(-1,x)}return k}}var g=/\s+/,p=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
l=function(e){return e},q=/^(?:GET|HEAD)$/,o,n;try{o=location.href}catch(m){o=document.createElement("a");o.href="";o=o.href}n=p.exec(o);o=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(n[1]);var s={},r={type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",async:true,serializeArray:true,processData:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},converters:{text:{json:h.parse,
html:l,text:l,xml:i.parseXML}},contents:{xml:/xml/,html:/html/,json:/json/}};r.converters.html=r.converters.text;i.mix(d,j.Target);i.mix(d,{isLocal:o,setupConfig:function(e){i.mix(r,e,undefined,undefined,true)},setupTransport:function(e,k){s[e]=k},getTransport:function(e){return s[e]},getConfig:function(){return r}});return d},{requires:["json","event","./xhrobject"]});
KISSY.add("ajax/form-serializer",function(i,h){return{serialize:function(j){j=h.get(j);var f={};i.each(j.elements,function(c){c.disabled||(f[c.name]=h.val(c))});return i.param(f,undefined,undefined,false)}}},{requires:["dom"]});
KISSY.add("ajax/form",function(i,h,j,f){h.on("start",function(c){c=c.xhr.config;if(c.form){var a=j.get(c.form);if((a.encoding||a.enctype).toLowerCase()!="multipart/form-data"){if(a=f.serialize(a))if(c.hasContent){c.data=c.data||"";if(c.data)c.data+="&";c.data+=a}else c.url+=(/\?/.test(c.url)?"&":"?")+a}else{a=c.dataType[0];if(a=="*")a="text";c.dataType.length=2;c.dataType[0]="iframe";c.dataType[1]=a}}});return h},{requires:["./base","dom","./form-serializer"]});
KISSY.add("ajax/iframe-upload",function(i,h,j,f){function c(b){this.xhr=b}var a=document;f.setupConfig({converters:{iframe:f.getConfig().converters.text,text:{iframe:function(b){return b}}}});i.augment(c,{send:function(){var b=this.xhr,d=b.config,g,p=h.get(d.form);this.attrs={target:h.attr(p,"target")||"",action:h.attr(p,"action")||""};this.form=p;var l=i.guid("ajax-iframe");b.iframe=h.create("<iframe  id='"+l+"' name='"+l+"' style='position:absolute;left:-9999px;top:-9999px;'/>");b.iframeId=l;h.prepend(b.iframe,
a.body||a.documentElement);h.attr(p,{target:b.iframeId,action:d.url});if(d.data){g=d.data;d=d.serializeArray;g=i.unparam(g);l=[];for(var q in g)for(var o=i.makeArray(g[q]),n=0;n<o.length;n++){var m=a.createElement("input");m.type="hidden";m.name=q+(d?"[]":"");m.value=o[n];h.append(m,p);l.push(m)}g=l}this.fields=g;j.on(b.iframe,"load error",this._callback,this);p.submit()},_callback:function(b){var d=this.xhr;b=b.type;var g=d.iframe;if(g){h.attr(this.form,this.attrs);if(b=="load"){b=g.contentWindow.document;
d.responseXML=b;d.responseText=h.text(b.body);d.callback(200,"success")}else b=="error"&&d.callback(500,"error");h.remove(this.fields);j.detach(g);setTimeout(function(){h.remove(g)},30);d.iframe=null}},abort:function(){this._callback(0,1)}});f.setupTransport("iframe",c);return f},{requires:["dom","event","./base"]});
KISSY.add("ajax/jsonp",function(i,h){h.setupConfig({jsonp:"callback",jsonpCallback:function(){return i.guid("jsonp")}});h.on("start",function(j){j=j.xhr;var f=j.config;if(f.dataType[0]=="jsonp"){var c,a=f.jsonpCallback,b=i.isFunction(a)?a():a,d=window[b];f.url+=(/\?/.test(f.url)?"&":"?")+f.jsonp+"="+b;window[b]=function(g){if(arguments.length>1)g=i.makeArray(arguments);c=[g]};j.on("complete",function(){window[b]=d;if(d===undefined)try{delete window[b]}catch(g){}else c&&d(c[0])});j.converters=j.converters||
{};j.converters.script=j.converters.script||{};j.converters.script.json=function(){return c[0]};f.dataType.length=2;f.dataType[0]="script";f.dataType[1]="json"}});return h},{requires:["./base"]});
KISSY.add("ajax/script",function(i,h){function j(c){if(!c.config.crossDomain&&!c.config.forceScript)return new (h.getTransport("*"))(c);this.xhrObj=c;return 0}var f=document;h.setupConfig({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{text:{script:function(c){i.globalEval(c);return c}}}});i.augment(j,{send:function(){var c=this,a,b=this.xhrObj.config,d=f.head||f.getElementsByTagName("head")[0]||
f.documentElement;c.head=d;a=f.createElement("script");c.script=a;a.async="async";if(b.scriptCharset)a.charset=b.scriptCharset;a.src=b.url;a.onerror=a.onload=a.onreadystatechange=function(g){g=g||window.event;c._callback((g.type||"error").toLowerCase())};d.insertBefore(a,d.firstChild)},_callback:function(c,a){var b=this.script,d=this.xhrObj,g=this.head;if(b)if(a||!b.readyState||/loaded|complete/.test(b.readyState)||c=="error"){b.onerror=b.onload=b.onreadystatechange=null;if(g&&b.parentNode){b.src=
"#";g.removeChild(b)}this.head=this.script=undefined;if(!a&&c!="error")d.callback(200,"success");else c=="error"&&d.callback(500,"scripterror")}},abort:function(){this._callback(0,1)}});h.setupTransport("script",j);return h},{requires:["./base","./xhr"]});
KISSY.add("ajax/xhr",function(i,h){function j(){try{return new window.XMLHttpRequest}catch(a){}}h.xhr=window.ActiveXObject?function(){var a;if(!(a=!h.isLocal&&j()))a:{try{a=new window.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:j;var f=h.xhr(),c=false;if(f){if("withCredentials"in f)c=true;f=function(a){this.xhrObj=a};i.augment(f,{send:function(){var a=this,b=a.xhrObj,d=b.config;if(!(d.crossDomain&&!c)){var g=h.xhr(),p,l;a.xhr=g;d.username?g.open(d.type,d.url,d.async,d.username,
d.password):g.open(d.type,d.url,d.async);if(p=d.xhrFields)for(l in p)g[l]=p[l];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType);if(!d.crossDomain&&!b.requestHeaders["X-Requested-With"])b.requestHeaders["X-Requested-With"]="XMLHttpRequest";try{for(l in b.requestHeaders)g.setRequestHeader(l,b.requestHeaders[l])}catch(q){}g.send(d.hasContent&&d.data||null);if(!d.async||g.readyState==4)a._callback();else g.onreadystatechange=function(){a._callback()}}},abort:function(){this._callback(0,
1)},_callback:function(a,b){try{var d=this.xhr,g=this.xhrObj,p=g.config;if(b||d.readyState==4){d.onreadystatechange=i.noop;if(b)d.readyState!==4&&d.abort();else{var l=d.status;g.responseHeadersString=d.getAllResponseHeaders();var q=d.responseXML;if(q&&q.documentElement)g.responseXML=q;g.responseText=d.responseText;try{var o=d.statusText}catch(n){o=""}if(!l&&h.isLocal&&!p.crossDomain)l=g.responseText?200:404;else if(l===1223)l=204;g.callback(l,o)}}}catch(m){d.onreadystatechange=i.noop;b||g.callback(-1,
m)}}});h.setupTransport("*",f);return h}},{requires:["./base"]});
KISSY.add("ajax/xhrobject",function(i,h){function j(a){var b=a.responseText,d=a.responseXML,g=a.config,p=g.converters,l=a.converters||{},q,o,n=g.contents,m=g.dataType;if(b||d){for(g=a.mimeType||a.getResponseHeader("Content-Type");m[0]=="*";)m.shift();if(!m.length)for(q in n)if(n[q].test(g)){m[0]!=q&&m.unshift(q);break}m[0]=m[0]||"text";if(m[0]=="text"&&b!=undefined)o=b;else if(m[0]=="xml"&&d!=undefined)o=d;else i.each(["text","xml"],function(r){var e=m[0];if(l[r]&&l[r][e]||p[r]&&p[r][e]){m.unshift(r);
o=r=="text"?b:d;return false}})}n=m[0];for(g=1;g<m.length;g++){q=m[g];var s=l[n]&&l[n][q]||p[n]&&p[n][q];if(!s)throw"no covert for "+n+" => "+q;o=s(o);n=q}a.responseData=o}function f(a){i.mix(this,{responseData:null,config:a||{},timeoutTimer:null,responseText:null,responseXML:null,responseHeadersString:"",responseHeaders:null,requestHeaders:{},readyState:0,state:0,statusText:null,status:0,transport:null})}var c=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg;i.augment(f,h.Target,{setRequestHeader:function(a,b){this.requestHeaders[a]=
b;return this},getAllResponseHeaders:function(){return this.state===2?this.responseHeadersString:null},getResponseHeader:function(a){var b;if(this.state===2){if(!this.responseHeaders)for(this.responseHeaders={};b=c.exec(this.responseHeadersString);)this.responseHeaders[b[1]]=b[2];b=this.responseHeaders[a]}return b===undefined?null:b},overrideMimeType:function(a){if(!this.state)this.mimeType=a;return this},abort:function(a){a=a||"abort";this.transport&&this.transport.abort(a);this.callback(0,a);return this},
callback:function(a,b){if(this.state!=2){this.state=2;this.readyState=4;var d;if(a>=200&&a<300||a==304)if(a==304){b="notmodified";d=true}else try{j(this);b="success";d=true}catch(g){b="parsererror : "+g}else if(a<0)a=0;this.status=a;this.statusText=b;d?this.fire("success"):this.fire("error");this.fire("complete");this.transport=undefined}}});return f},{requires:["event"]});
KISSY.add("ajax",function(i,h){i.mix(h,{get:function(j,f,c,a,b){if(i.isFunction(f)){a=c;c=f;f=undefined}return h({type:b||"get",url:j,data:f,success:c,dataType:a})},post:function(j,f,c,a){if(i.isFunction(f)){a=c;c=f;f=undefined}return h.get(j,f,c,a,"post")},jsonp:function(j,f,c){if(i.isFunction(f)){c=f;f=undefined}return h.get(j,f,c,"jsonp")},getScript:i.getScript,getJSON:function(j,f,c){if(i.isFunction(f)){c=f;f=undefined}return h.get(j,f,c,"json")},upload:function(j,f,c,a,b){if(i.isFunction(c)){b=
a;a=c;c=undefined}return h({url:j,type:"post",dataType:b,form:f,data:c,success:a})}});return h},{requires:["ajax/base","ajax/xhrobject","ajax/xhr","ajax/script","ajax/jsonp","ajax/form","ajax/iframe-upload"]});
