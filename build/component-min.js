/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 8 16:00
*/
KISSY.add("component/container",function(h,i,d,c,e,g){return i.create(d,[e,g])},{requires:["uibase","./modelcontrol","./uistore","./delegatechildren","./decoratechildren"]});KISSY.add("component/decoratechild",function(h,i){function d(){}h.augment(d,i,{decorateInternal:function(c){this.set("el",c);var e=this.get("decorateChildCls"),g=this.get("prefixCls");if(c=c.one("."+this.getCls(e)))(e=this._findUIByClass(c))?this.decorateChildrenInternal(e,c,g):this.decorateChildren(c)}});return d},{requires:["./decoratechildren"]});
KISSY.add("component/decoratechildren",function(h,i){function d(){}h.augment(d,{decorateInternal:function(c){this.set("el",c);this.decorateChildren(c)},decorateChildrenInternal:function(c,e,g){this.addChild(new c({srcNode:e,prefixCls:g}))},_findUIByClass:function(c){c=c.attr("class")||"";var e=this.get("prefixCls");c=c.replace(RegExp("\\b"+e,"ig"),"");return i.getUIByClass(c)},decorateChildren:function(c){var e=this;c=c.children();var g=e.get("prefixCls");c.each(function(k){var l=e._findUIByClass(k);
e.decorateChildrenInternal(l,k,g)})}});return d},{requires:["./uistore"]});
KISSY.add("component/delegatechildren",function(h){function i(){}h.augment(i,{__bindUI:function(){this.get("el").on("mousedown mouseup mouseover mouseout dblclick",this._handleChildMouseEvents,this)},_handleChildMouseEvents:function(d){var c=this.getOwnerControl(d.target);if(c)switch(d.type){case "mousedown":c._handleMouseDown(d);break;case "mouseup":c._handleMouseUp(d);break;case "mouseover":c._handleMouseOver(d);break;case "mouseout":c._handleMouseOut(d);break;case "dblclick":c._handleDblClick(d)}},
getOwnerControl:function(d){for(var c=this.get("children"),e=c.length,g=this.get("el")[0];d&&d!==g;){for(var k=0;k<e;k++)if(c[k].get("el")[0]===d)return c[k];d=d.parentNode}return null}});return i});
KISSY.add("component/modelcontrol",function(h,i,d,c,e){function g(a){return function(b){b=b.newVal;this.get("view")&&this.get("view").set(a,b)}}function k(a){return function(b){return b===undefined?this.get("view")&&this.get("view").get(a):b}}function l(a){a+="";return a.charAt(0).toUpperCase()+a.substring(1)}return d.create([d.Box],{getCls:c.getCls,initializer:function(){var a=this.__attrs,b;for(b in a)if(a.hasOwnProperty(b)){var f=a[b];if(f.view){this.on("after"+l(b)+"Change",g(b));f.getter=k(b)}}},
renderUI:function(){this.get("view").render();var a=this.get("children");h.each(a,function(b){b.render()})},createDom:function(){var a;if(!(a=this.get("view"))){a=this.constructor;for(var b;a&&!b;){b=a.DefaultRender;a=a.superclass&&a.superclass.constructor}if(b){a=this.__attrs;var f={},j;for(j in a)if(a.hasOwnProperty(j)){var m;if(a[j].view)if((m=this.get(j))!==undefined)f[j]=m}a=new b(f)}else a=0}if(b=a){b.create();this.get("allowTextSelection_")||b.get("el").unselectable();this.set("view",b)}},
getContentElement:function(){var a=this.get("view");return a&&a.getContentElement()},_initChild:function(a,b){this.create();var f=this.getContentElement();a.set("parent",this);a.set("render",f);a.set("elBefore",b);if(this.get("rendered"))a.render();else{a.create();f[0].insertBefore(a.get("el")[0],b&&b[0]||null)}},addChild:function(a,b){var f=this.get("children"),j=f[b];b?f.splice(b,0,a):f.push(a);this._initChild(a,j)},removeChild:function(a,b){var f=this.get("children"),j=h.indexOf(a,f);j!=-1&&f.splice(j,
1);b&&a.destroy()},removeChildren:function(a){var b=[];h.each(this.get("children"),function(j){b.push(j)});var f=this;h.each(b,function(j){f.removeChild(j,a)});this.set("children",[])},getChildAt:function(a){return this.get("children")[a]},_uiSetHandleMouseEvents:function(a){var b=this.get("view").get("el");if(a){b.on("mouseenter",this._handleMouseEnter,this);b.on("mouseleave",this._handleMouseLeave,this);b.on("mousedown",this._handleMouseDown,this);b.on("mouseup",this._handleMouseUp,this);b.on("dblclick",
this._handleDblClick,this)}else{b.detach("mouseenter",this._handleMouseEnter,this);b.detach("mouseleave",this._handleMouseLeave,this);b.detach("mousedown",this._handleMouseDown,this);b.detach("mouseup",this._handleMouseUp,this);b.detach("dblclick",this._handleDblClick,this)}},_handleDblClick:function(a){this.get("disabled")||this._performInternal(a)},isMouseEventWithinElement_:function(a,b){var f=a.relatedTarget;f=f&&h.one(f)[0];if(!f)return false;if(f===b[0]||b.contains(f))return true},_handleMouseOver:function(a){if(this.get("disabled"))return true;
var b=this.get("view").get("el");this.isMouseEventWithinElement_(a,b)||this._handleMouseEnter(a)},_handleMouseOut:function(a){if(this.get("disabled"))return true;var b=this.get("view").get("el");this.isMouseEventWithinElement_(a,b)||this._handleMouseLeave(a)},_handleMouseEnter:function(){if(this.get("disabled"))return true;this.set("highlighted",true)},_handleMouseLeave:function(){if(this.get("disabled"))return true;this.set("active",false);this.set("highlighted",false)},_handleMouseDown:function(a){if(this.get("disabled"))return true;
a.which==1&&this.get("activeable")&&this.set("active",true);var b=this.getKeyEventTarget();a.which==1&&b.attr("tabindex")>=0&&this.getKeyEventTarget()[0].focus();a.which==1&&!this.get("allowTextSelection_")&&a.preventDefault()},_uiSetFocusable:function(a){var b=this.getKeyEventTarget();if(a){b.on("focus",this._handleFocus,this);b.on("blur",this._handleBlur,this);b.on("keydown",this._handleKeydown,this)}else{b.detach("focus",this._handleFocus,this);b.detach("blur",this._handleBlur,this);b.detach("keydown",
this._handleKeydown,this)}},getKeyEventTarget:function(){return this.get("view").getKeyEventTarget()},_handleMouseUp:function(a){if(this.get("disabled"))return true;if(this.get("active")&&a.which==1){this._performInternal(a);this.set("active",false)}},_handleFocus:function(){this.set("focused",true)},_handleBlur:function(){this.set("focused",false)},_handleKeyEventInternal:function(a){if(a.keyCode==i.KeyCodes.ENTER)return this._performInternal(a)},_handleKeydown:function(a){if(this.get("disabled"))return true;
if(this._handleKeyEventInternal(a)){a.halt();return true}},_performInternal:function(){},destructor:function(){var a=this.get("children");h.each(a,function(b){b.destroy()});(a=this.get("view"))&&a.destroy()}},{ATTRS:{handleMouseEvents:{value:true},focusable:{view:true},activeable:{value:true},focused:{view:true},active:{view:true},highlighted:{view:true},children:{value:[],setter:function(a){var b=this;h.each(a,function(f){b._initChild(f)})}},srcNode:{view:true},prefixCls:{view:true},render:{view:true},
parent:{},view:{},disabled:{view:true},allowTextSelection_:{value:false}},DefaultRender:e})},{requires:["event","uibase","./uistore","./render"]});
KISSY.add("component/render",function(h,i,d){return i.create([i.Box.Render],{getCls:d.getCls,getKeyEventTarget:function(){return this.get("el")},getContentElement:function(){return this.get("contentEl")||this.get("el")},_uiSetFocusable:function(c){var e=this.getKeyEventTarget(),g=e.attr("tabindex");if(g>=0&&!c)e.attr("tabindex",-1);else!(g>=0)&&c&&e.attr("tabindex",0)}},{ATTRS:{srcNode:{},prefixCls:{value:"ks-"},focusable:{value:true},highlighted:{},focused:{},active:{},render:{},disabled:{}}})},
{requires:["uibase","./uistore"]});KISSY.add("component/uistore",function(h){var i={};return{getCls:function(d){d=h.trim(d).split(/\s+/);for(var c=0;c<d.length;c++)d[c]=this.get("prefixCls")+d[c];return d.join(" ")},getUIByClass:function(d){d=d.split(/\s+/);for(var c=null,e=0;e<d.length;e++){var g=i[d[e]];if(g&&g.priority>-1)c=g.ui}return c},setUIByClass:function(d,c){i[d]=c},PRIORITY:{LEVEL1:10,LEVEL2:20,LEVEL3:30,LEVEL4:40,LEVEL5:50,LEVEL6:60}}});
KISSY.add("component",function(h,i,d,c,e,g,k,l){return{ModelControl:i,Render:d,Container:c,UIStore:e,DelegateChildren:g,DecorateChild:l,DecorateChildren:k}},{requires:["component/modelcontrol","component/render","component/container","component/uistore","component/delegatechildren","component/decoratechildren","component/decoratechild"]});
