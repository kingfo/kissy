/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 2 18:05
*/
KISSY.add("flash/base",function(){return{swfs:{},length:0,version:"1.3"}});
KISSY.add("flash/ua",function(i,k){function n(h){var j=i.isString(h)?h.match(/(\d)+/g).splice(0,3):h;h=h;if(i.isArray(j))h=parseFloat(j[0]+"."+e(j[1],3)+e(j[2],5));return h||0}function e(h,j){for(var q=(h+"").length;q++<j;)h="0"+h;return h}var p,l,o=true;k.fpv=function(h){if(h||o){o=false;var j;if(navigator.plugins&&navigator.mimeTypes.length)j=(navigator.plugins["Shockwave Flash"]||0).description;else if(window.ActiveXObject)try{j=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(q){}p=
j?j.match(/(\d)+/g).splice(0,3):void 0;l=n(p)}return p};k.fpvGEQ=function(h,j){o&&k.fpv(j);return!!l&&l>=n(h)}},{requires:["ua"]});
KISSY.add("flash/embed",function(i,k,n,e,p){function l(a,b){return j+a+q+r+b+r}function o(a,b){return'<param name="'+a+'" value="'+b+'" />'}var h=/^(?:object|embed)/i,j=" ",q="=",r='"',s=Object.prototype,t=encodeURIComponent,u={wmode:"",allowscriptaccess:"",allownetworking:"",allowfullscreen:"",play:"false",loop:"",menu:"",quality:"",scale:"",salign:"",bgcolor:"",devicefont:"",base:"",swliveconnect:"",seamlesstabbing:""},v={params:{},attrs:{width:215,height:138},version:9};i.mix(e,{fpv:k.fpv,fpvGEQ:k.fpvGEQ,
add:function(a,b,c){var f,g,d,m;b=e._normalize(b);b=i.merge(v,b);b.attrs=i.merge(v.attrs,b.attrs);g=a.replace("#","");if(!(a=n.get(a))){a=n.create("<div id="+g+"/>");document.body.appendChild(a)}m=a.nodeName.toLowerCase();d=!h.test(m);if(!a.id)a.id=i.guid("ks-flash-container-");g=a.id;if(!b.id)b.id=i.guid("ks-flash-");b.attrs.id=b.id;if(k.fpv()){if(!k.fpvGEQ(b.version)){e._callback(c,0,g,a,d);if(!((f=b.xi)&&i.isString(f)))return;b.src=f}if(d)b.src?e._embed(a,b,c):e._callback(c,-3,g,a,d);else{if(m==
"object")if(k.gecko||k.opera||k.chrome>7)a=n.query("object",a)[0]||a;b.attrs.id=g;e._register(a,b,c,d)}}else e._callback(c,-1,g,a,d)},get:function(a){return e.swfs[a]},remove:function(a){if(a=e.get(a)){n.remove(a);delete e.swfs[a.id];e.length-=1}},contains:function(a){var b=e.swfs,c,f=false;if(i.isString(a))f=a in b;else for(c in b)if(b[c]===a){f=true;break}return f},_register:function(a,b,c,f){b=b.attrs.id;e._addSWF(b,a);e._callback(c,1,b,a,f)},_embed:function(a,b,c){a.innerHTML=e._stringSWF(b);
a=n.get("#"+b.id);e._register(a,b,c,true)},_callback:function(a,b,c,f,g){b&&i.isFunction(a)&&a({status:b,id:c,swf:f,dynamic:!!g})},_addSWF:function(a,b){if(a&&b){e.swfs[a]=b;e.length+=1}},_stringSWF:function(a){var b;var c=b="",f=a.src,g=a.attrs;a=a.params;var d,m;if(k.ie){m="object";for(d in g)if(g[d]!=s[d])if(d!="classid"&&d!="data")b+=l(d,g[d]);b+=l("classid","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");for(d in a)if(d in u)c+=o(d,a[d]);c+=o("movie",f);if(a.flashvars)c+=o("flashvars",e.toFlashVars(a.flashvars));
b="<"+m+b+">"+c+"</"+m+">"}else{m="embed";b+=l("src",f);for(d in g)if(g[d]!=s[d])if(d!="classid"&&d!="data")b+=l(d,g[d]);b+=l("type","application/x-shockwave-flash");for(d in a)if(d in u)c+=l(d,a[d]);if(a.flashvars)c+=l("flashvars",e.toFlashVars(a.flashvars));b="<"+m+b+c+"/>"}return b},_normalize:function(a){var b,c,f,g=a||{};if(i.isPlainObject(a)){g={};for(f in a){b=f.toLowerCase();c=a[f];if(b!=="flashvars")c=e._normalize(c);g[b]=c}}return g},toFlashVars:function(a){if(!i.isPlainObject(a))return"";
var b,c,f=[];for(b in a){c=a[b];if(i.isString(c))c=t(c);else{c=p.stringify(c);if(!c)continue;c=c.replace(/:"([^"]+)/g,function(g,d){return':"'+t(d)})}f.push(b+"="+c)}return f.join("&").replace(/"/g,"'")}});return e},{requires:["ua","dom","flash/base","json","flash/ua"]});KISSY.add("flash",function(i,k){return i.Flash=k},{requires:["flash/base","flash/embed"]});
