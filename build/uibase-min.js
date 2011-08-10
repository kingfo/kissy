/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 10 13:16
*/
KISSY.add("uibase/align",function(h,k,d,i){function q(a){var c=a.ownerDocument.body,g=d.css(a,"position"),l=g=="fixed"||g=="absolute";for(a=a.parentNode;a&&a!=c;a=a.parentNode){g=d.css(a,"position");l=l&&g=="static";if(d.css(a,"overflow")!="visible"&&(!l||g=="fixed"||g=="absolute"||g=="relative"))return a}return null}function b(a){for(var c in a)if(c.indexOf("fail")===0)return true;return false}function e(a){var c=a.offset,g=a.node,l=a.points,m,f=this.get("el");c=c||[0,0];m=f.offset();g=j(g,l[0]);
l=j(f,l[1]);l=[l.left-g.left,l.top-g.top];m={left:m.left-l[0]+ +c[0],top:m.top-l[1]+ +c[1]};a:{c=m;m=this.get("el");f={};l={width:m[0].offsetWidth,height:m[0].offsetHeight};g=h.clone(l);if(!h.isEmptyObject(a.overflow)){f={left:0,right:Infinity,top:0,bottom:Infinity};for(var o=m[0];o=q(o);){var r=o.clientWidth;if(!k.ie||r!==0){var s=o.clientLeft,t=o.clientTop;r=d.offset(o);s={left:s,top:t};r.left+=s.left;r.top+=s.top;f.top=Math.max(f.top,r.top);f.right=Math.min(f.right,r.left+o.clientWidth);f.bottom=
Math.min(f.bottom,r.top+o.clientHeight);f.left=Math.max(f.left,r.left)}}o=d.scrollLeft();r=d.scrollTop();f.left=Math.max(f.left,o);f.top=Math.max(f.top,r);f.right=Math.min(f.right,o+d.viewportWidth());f.bottom=Math.min(f.bottom,r+d.viewportHeight());f=f.top>=0&&f.left>=0&&f.bottom>f.top&&f.right>f.left?f:null;a=a.overflow||{};o={};if(c.left<f.left&&a.adjustX){c.left=f.left;o.adjustX=1}if(c.left<f.left&&c.left+g.width>f.right&&a.resizeWidth){g.width-=c.left+g.width-f.right;o.resizeWidth=1}if(c.left+
g.width>f.right&&a.adjustX){c.left=Math.max(f.right-g.width,f.left);o.adjustX=1}if(a.failX)o.failX=c.left<f.left||c.left+g.width>f.right;if(c.top<f.top&&a.adjustY){c.top=f.top;o.adjustY=1}if(c.top>=f.top&&c.top+g.height>f.bottom&&a.resizeHeight){g.height-=c.top+g.height-f.bottom;o.resizeHeight=1}if(c.top+g.height>f.bottom&&a.adjustY){c.top=Math.max(f.bottom-g.height,f.top);o.adjustY=1}if(a.failY)o.failY=c.top<f.top||c.top+g.height>f.bottom;f=o;if(b(f)){a=f;break a}}this.set("x",c.left);this.set("y",
c.top);if(g.width!=l.width||g.height!=l.height){m.width(g.width);m.height(g.height)}a=f}return a}function n(a,c,g){var l=[];h.each(a,function(m){l.push(m.replace(c,function(f){return g[f]}))});return l}function p(){}function j(a,c){var g=c.charAt(0),l=c.charAt(1),m,f,o,r;if(a){a=i.one(a);m=a.offset();f=a[0].offsetWidth;o=a[0].offsetHeight}else{m={left:d.scrollLeft(),top:d.scrollTop()};f=d.viewportWidth();o=d.viewportHeight()}r=m.left;m=m.top;if(g==="c")m+=o/2;else if(g==="b")m+=o;if(l==="c")r+=f/
2;else if(l==="r")r+=f;return{left:r,top:m}}p.ATTRS={align:{}};p.prototype={_uiSetAlign:function(a){h.isPlainObject(a)&&this.align(a.node,a.points,a.offset,a.overflow)},align:function(a,c,g,l){var m={};l=h.clone(l||{});g=g&&[].concat(g)||[0,0];if(l.failX)m.failX=1;if(l.failY)m.failY=1;var f=e.call(this,{node:a,points:c,offset:g,overflow:m});if(b(f)){if(f.failX){c=n(c,/[lr]/ig,{l:"r",r:"l"});g=g;g[0]=-g[0];g=g}if(f.failY){c=n(c,/[tb]/ig,{t:"b",b:"t"});f=g;f[1]=-f[1];g=f}}f=e.call(this,{node:a,points:c,
offset:g,overflow:m});if(b(f)){delete l.failX;delete l.failY;e.call(this,{node:a,points:c,offset:g,overflow:l})}},center:function(a){this.set("align",{node:a,points:["cc","cc"],offset:[0,0]})}};return p},{requires:["ua","dom","node"]});
KISSY.add("uibase/base",function(h,k,d,i){function q(j){j+="";return j.charAt(0).toUpperCase()+j.substring(1)}function b(j){k.apply(this,arguments);for(var a=this.constructor;a;){if(j&&j[p]&&a.HTML_PARSER)if(j[p]=i.one(j[p])){var c=j[p],g=a.HTML_PARSER,l=void 0,m=void 0;for(l in g)if(g.hasOwnProperty(l)){m=g[l];if(h.isFunction(m))this.__set(l,m.call(this,c));else if(h.isString(m))this.__set(l,c.one(m));else h.isArray(m)&&m[0]&&this.__set(l,c.all(m[0]))}}a=a.superclass&&a.superclass.constructor}e(this,
"initializer","constructor");j&&j.autoRender&&this.render()}function e(j,a,c){for(var g=j.constructor,l=[],m,f,o,r;g;){r=[];if(o=g.__ks_exts)for(var s=0;s<o.length;s++)if(m=o[s]){if(c!="constructor")m=m.prototype.hasOwnProperty(c)?m.prototype[c]:null;m&&r.push(m)}if(g.prototype.hasOwnProperty(a)&&(f=g.prototype[a]))r.push(f);r.length&&l.push.apply(l,r.reverse());g=g.superclass&&g.superclass.constructor}for(s=l.length-1;s>=0;s--)l[s]&&l[s].call(j)}function n(j,a){if(!a)return j;for(var c in a)if(h.isObject(a[c])&&
h.isObject(j[c]))n(j[c],a[c]);else c in j||(j[c]=a[c])}var p="srcNode";d=function(){};b.HTML_PARSER={};b.ATTRS={rendered:{value:false},created:{value:false}};h.extend(b,k,{create:function(){if(!this.get("created")){this._createDom();this.fire("createDom");e(this,"createDom","__createDom");this.fire("afterCreateDom");this.set("created",true)}},render:function(){if(!this.get("rendered")){this.create();this._renderUI();this.fire("renderUI");e(this,"renderUI","__renderUI");this.fire("afterRenderUI");
this._bindUI();this.fire("bindUI");e(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();this.fire("syncUI");e(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_createDom:d,_renderUI:d,renderUI:d,_bindUI:function(){var j=this,a=j.__attrs,c,g;for(c in a)if(a.hasOwnProperty(c)){g="_uiSet"+q(c);j[g]&&function(l,m){j.on("after"+q(l)+"Change",function(f){j[m](f.newVal,f)})}(c,g)}},bindUI:d,_syncUI:function(){var j=this.__attrs,a;for(a in j)if(j.hasOwnProperty(a)){var c=
"_uiSet"+q(a);this[c]&&j[a].sync!==false&&this.get(a)!==undefined&&this[c](this.get(a))}},syncUI:d,destroy:function(){for(var j=this.constructor,a,c,g;j;){j.prototype.hasOwnProperty("destructor")&&j.prototype.destructor.apply(this);if(a=j.__ks_exts)for(g=a.length-1;g>=0;g--)(c=a[g]&&a[g].prototype.__destructor)&&c.apply(this);j=j.superclass&&j.superclass.constructor}this.fire("destroy");this.detach()}});b.create=function(j,a,c,g){function l(){b.apply(this,arguments)}if(h.isArray(j)){g=c;c=a;a=j;j=
b}j=j||b;if(h.isObject(a)){g=c;c=a;a=[]}h.extend(l,j,c,g);if(a){l.__ks_exts=a;h.each(a,function(m){if(m){h.each(["ATTRS","HTML_PARSER"],function(o){if(m[o]){l[o]=l[o]||{};n(l[o],m[o])}});for(var f in m.prototype)if(!l.prototype.hasOwnProperty(f)&&m.prototype.hasOwnProperty(f))l.prototype[f]=m.prototype[f]}})}return l};return b},{requires:["base","dom","node"]});
KISSY.add("uibase/box",function(){function h(){}h.ATTRS={html:{view:true,sync:false},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elBefore:{view:true},el:{view:true},render:{view:true},visibleMode:{value:"display",view:true},visible:{view:true},srcNode:{view:true}};h.HTML_PARSER={el:function(k){this.decorateInternal&&this.decorateInternal(k);return k}};h.prototype={_uiSetVisible:function(k){this.fire(k?"show":"hide")},show:function(){this.render();
this.set("visible",true)},hide:function(){this.set("visible",false)}};return h});
KISSY.add("uibase/boxrender",function(h,k){function d(){}function i(b,e,n,p,j,a){e=e||{};if(n)e.width=n;if(p)e.height=p;n="";for(var c in e)if(e.hasOwnProperty(c))n+=c+":"+e[c]+";";e="";for(var g in a)if(a.hasOwnProperty(g))e+=" "+g+"='"+a[g]+"' ";return"<"+j+(n?" style='"+n+"' ":"")+e+(b?" class='"+b+"' ":"")+"></"+j+">"}var q=h.all;d.ATTRS={el:{setter:function(b){return q(b)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elBefore:{},render:{},html:{sync:false},visible:{},
visibleMode:{}};d.construct=i;d.HTML_PARSER={html:function(b){return b.html()}};d.prototype={__renderUI:function(){if(this.__boxRenderNew){var b=this.get("render"),e=this.get("el"),n=this.get("elBefore");if(n)e.insertBefore(n);else b?e.appendTo(b):e.appendTo("body")}},__createDom:function(){var b=this.get("el");if(!b){this.__boxRenderNew=true;b=new k(i(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.set("el",b);this.get("html")&&
b.html(this.get("html"))}},_uiSetElAttrs:function(b){this.get("el").attr(b)},_uiSetElCls:function(b){this.get("el").addClass(b)},_uiSetElStyle:function(b){this.get("el").css(b)},_uiSetWidth:function(b){this.get("el").width(b)},_uiSetHeight:function(b){this.get("el").height(b)},_uiSetHtml:function(b){this.get("el").html(b)},_uiSetVisible:function(b){var e=this.get("el");this.get("visibleMode")=="visibility"?e.css("visibility",b?"visible":"hidden"):e.css("display",b?"":"none")},show:function(){this.render();
this.set("visible",true)},hide:function(){this.set("visible",false)},__destructor:function(){var b=this.get("el");if(b){b.detach();b.remove()}}};return d},{requires:["node"]});KISSY.add("uibase/close",function(){function h(){}h.ATTRS={closable:{view:true},closeAction:{value:"hide"}};var k={hide:"hide",destroy:"destroy"};h.prototype={__bindUI:function(){var d=this,i=d.get("view").get("closeBtn");i&&i.on("click",function(q){d[k[d.get("closeAction")]||"hide"]();q.halt()})}};return h});
KISSY.add("uibase/closerender",function(h,k){function d(){}d.ATTRS={closable:{value:true},closeBtn:{}};d.HTML_PARSER={closeBtn:function(i){return i.one("."+this.get("prefixCls")+"ext-close")}};d.prototype={_uiSetClosable:function(i){var q=this.get("closeBtn");if(q)i?q.css("display",""):q.css("display","none")},__renderUI:function(){var i=this.get("closeBtn"),q=this.get("el");if(!i&&q){i=(new k("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(q);this.set("closeBtn",i)}},__destructor:function(){var i=this.get("closeBtn");i&&i.detach()}};return d},{requires:["node"]});
KISSY.add("uibase/constrain",function(h,k,d){function i(){}function q(b){var e;if(!b)return e;var n=this.get("el");if(b!==true){b=d.one(b);e=b.offset();h.mix(e,{maxLeft:e.left+b[0].offsetWidth-n[0].offsetWidth,maxTop:e.top+b[0].offsetHeight-n[0].offsetHeight})}else{b=document.documentElement.clientWidth;e={left:k.scrollLeft(),top:k.scrollTop()};h.mix(e,{maxLeft:e.left+b-n[0].offsetWidth,maxTop:e.top+k.viewportHeight()-n[0].offsetHeight})}return e}i.ATTRS={constrain:{value:false}};i.prototype={__renderUI:function(){var b=
this,e=b.__getDefAttrs(),n=e.x;e=e.y;var p=n.setter,j=e.setter;n.setter=function(a){var c=p&&p.call(b,a);if(c===undefined)c=a;if(!b.get("constrain"))return c;a=q.call(b,b.get("constrain"));return Math.min(Math.max(c,a.left),a.maxLeft)};e.setter=function(a){var c=j&&j.call(b,a);if(c===undefined)c=a;if(!b.get("constrain"))return c;a=q.call(b,b.get("constrain"));return Math.min(Math.max(c,a.top),a.maxTop)};b.addAttr("x",n);b.addAttr("y",e)}};return i},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function h(){}h.ATTRS={content:{view:true,sync:false},contentEl:{view:true},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};h.prototype={};return h});
KISSY.add("uibase/contentboxrender",function(h,k,d){function i(){}function q(e,n){var p=e.get("contentEl");p.html("");n&&p.append(n)}i.ATTRS={contentEl:{},contentElAttrs:{},contentElCls:{value:""},contentElStyle:{},contentTagName:{value:"div"},content:{sync:false}};i.HTML_PARSER={content:function(e){return e.html()}};var b=d.construct;i.prototype={__renderUI:function(){},__createDom:function(){var e,n;e=this.get("el");n=h.makeArray(e[0].childNodes);e=(new k(b(this.get("prefixCls")+"contentbox "+this.get("contentElCls"),
this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),this.get("contentElAttrs")))).appendTo(e);this.set("contentEl",e);if(n.length)for(var p=0;p<n.length;p++)e.append(n[p]);else if(n=this.get("content"))q(this,n)},_uiSetContentElCls:function(e){this.get("contentEl").addClass(e)},_uiSetContentElAttrs:function(e){this.get("contentEl").attr(e)},_uiSetContentElStyle:function(e){this.get("contentEl").css(e)},_uiSetContent:function(e){q(this,e)}};return i},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(h){function k(){}k.ATTRS={handlers:{value:[]},draggable:{value:true}};k.prototype={_uiSetHandlers:function(d){d&&d.length>0&&this.__drag&&this.__drag.set("handlers",d)},__bindUI:function(){var d=h.require("dd/draggable"),i=this.get("el");if(this.get("draggable")&&d)this.__drag=new d({node:i,handlers:this.get("handlers")})},_uiSetDraggable:function(d){var i=this.__drag;if(i)if(d){i.detach("drag");i.on("drag",this._dragExtAction,this)}else i.detach("drag")},_dragExtAction:function(d){this.set("xy",
[d.left,d.top])},__destructor:function(){var d=this.__drag;d&&d.destroy()}};return k});KISSY.add("uibase/loading",function(){function h(){}h.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return h});
KISSY.add("uibase/loadingrender",function(h,k){function d(){}d.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new k("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var i=this._loadingExtEl;i&&i.hide()}};return d},{requires:["node"]});
KISSY.add("uibase/mask",function(){function h(){}h.ATTRS={mask:{value:false}};h.prototype={_uiSetMask:function(k){if(k){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return h},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(h,k,d,i){function q(){e=(new i("<div class='"+this.get("prefixCls")+"ext-mask'/>")).prependTo("body");e.css({position:"absolute",left:0,top:0,width:k.ie==6?d.docWidth():"100%",height:d.docHeight()});if(k.ie==6)n=(new i("<iframe style='position:absolute;left:0;top:0;background:red;width:"+d.docWidth()+"px;height:"+d.docHeight()+"px;filter:alpha(opacity=0);z-index:-1;'/>")).insertBefore(e);h.Event.on(window,"resize",function(){var j={width:k.ie==6?d.docWidth():
"100%",height:d.docHeight()};n&&n.css(j);e.css(j)});e.unselectable();e.on("mousedown click",function(j){j.halt()})}function b(){}var e,n,p=0;b.prototype={_maskExtShow:function(){e||q.call(this);var j=this.get("zIndex")-1;e.css("z-index",j);n&&n.css("z-index",j);p++;e.css("display","");n&&n.css("display","")},_maskExtHide:function(){p--;if(p<=0)p=0;if(!p){e&&e.css("display","none");n&&n.css("display","none")}},__destructor:function(){this._maskExtHide()}};return b},{requires:["ua","dom","node"]});
KISSY.add("uibase/position",function(h){function k(){}k.ATTRS={x:{view:true},y:{view:true},xy:{setter:function(d){var i=h.makeArray(d);if(i.length){i[0]&&this.set("x",i[0]);i[1]&&this.set("y",i[1])}return d},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true}};k.prototype={move:function(d,i){if(h.isArray(d)){i=d[1];d=d[0]}this.set("xy",[d,i])}};return k});
KISSY.add("uibase/positionrender",function(){function h(){}h.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999}};h.prototype={__renderUI:function(){var k=this.get("el");k.addClass(this.get("prefixCls")+"ext-position");k.css({visibility:"visible",display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(k){this.get("el").css("z-index",k)},_uiSetX:function(k){this.get("el").offset({left:k})},
_uiSetY:function(k){this.get("el").offset({top:k})}};return h});KISSY.add("uibase/resize",function(h){function k(){}k.ATTRS={resize:{value:{}}};k.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(d){var i=h.require("resizable");if(i){this.resizer&&this.resizer.destroy();d.node=this.get("el");d.autoRender=true;if(d.handlers)this.resizer=new i(d)}}};return k});
KISSY.add("uibase/shimrender",function(h,k){function d(){}d.ATTRS={shim:{value:true}};d.prototype={_uiSetShim:function(i){var q=this.get("el");if(i&&!this.__shimEl){this.__shimEl=new k("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>");q.prepend(this.__shimEl)}else if(!i&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};return d},
{requires:["node"]});KISSY.add("uibase/stdmod",function(){function h(){}h.ATTRS={header:{view:true},body:{view:true},footer:{view:true},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};h.prototype={};return h});
KISSY.add("uibase/stdmodrender",function(h,k){function d(){}function i(b,e){var n=b.get("contentEl"),p=b.get(e);if(!p){p=(new k("<div class='"+b.get("prefixCls")+q+e+"'/>")).appendTo(n);b.set(e,p)}}var q="stdmod-";d.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};d.HTML_PARSER={header:function(b){return b.one("."+this.get("prefixCls")+q+"header")},body:function(b){return b.one("."+this.get("prefixCls")+q+"body")},footer:function(b){return b.one("."+
this.get("prefixCls")+q+"footer")}};d.prototype={_setStdModContent:function(b,e){if(h.isString(e))this.get(b).html(e);else{this.get(b).html("");this.get(b).append(e)}},_uiSetBodyStyle:function(b){this.get("body").css(b)},_uiSetHeaderStyle:function(b){this.get("header").css(b)},_uiSetFooterStyle:function(b){this.get("footer").css(b)},_uiSetBodyContent:function(b){this._setStdModContent("body",b)},_uiSetHeaderContent:function(b){this._setStdModContent("header",b)},_uiSetFooterContent:function(b){this._setStdModContent("footer",
b)},__renderUI:function(){i(this,"header");i(this,"body");i(this,"footer")}};return d},{requires:["node"]});
KISSY.add("uibase",function(h,k,d,i,q,b,e,n,p,j,a,c,g,l,m,f,o,r,s,t,u){b.Render=e;c.Render=g;l.Render=m;f.Render=o;t.Render=u;i.Render=q;p.Render=j;h.mix(k,{Align:d,Box:i,Close:b,Contrain:n,Contentbox:p,Drag:a,Loading:c,Mask:l,Position:f,Shim:{Render:r},Resize:s,StdMod:t});return h.UIBase=k},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
