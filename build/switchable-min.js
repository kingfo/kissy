/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("switchable/base",function(f,g,q,s){function o(b,c){c=c||{};if(!("markupType"in c))if(c.panelCls)c.markupType=1;else if(c.panels)c.markupType=2;for(var e=this.constructor;e;){c=f.merge(e.Config,c);e=e.superclass?e.superclass.constructor:null}this.container=g.get(b);this.config=c;this.ingIndex=this.activeIndex=c.activeIndex;this._init();this._initPlugins();this.fire(l);this.activeIndex>-1||f.isNumber(c.switchTo)&&this.switchTo(c.switchTo)}var v=f.require("event/target"),l="init";o.Config=
{markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:-1,activeTriggerCls:"ks-active",switchTo:0,steps:1,viewSize:[]};o.Plugins=[];f.augment(o,v,{_initPlugins:function(){for(var b=this,c=b.constructor;c;){f.each(c.Plugins,function(e){e.init&&e.init(b)});c=c.superclass?c.superclass.constructor:null}},_init:function(){var b=this.config;
this._parseMarkup();b.hasTriggers&&this._bindTriggers()},_parseMarkup:function(){var b=this.container,c=this.config,e,k,h=[],r=[];switch(c.markupType){case 0:if(e=g.get("."+c.navCls,b))h=g.children(e);k=g.get("."+c.contentCls,b);r=g.children(k);break;case 1:h=g.query("."+c.triggerCls,b);r=g.query("."+c.panelCls,b);break;case 2:h=c.triggers;r=c.panels}b=r.length;this.length=b/c.steps;if(c.hasTriggers&&b>0&&h.length===0)h=this._generateTriggersMarkup(this.length);this.triggers=f.makeArray(h);this.panels=
f.makeArray(r);this.content=k||r[0].parentNode;this.nav=e||c.hasTriggers&&h[0].parentNode},_generateTriggersMarkup:function(b){var c=this.config,e=g.create("<ul>"),k,h;e.className=c.navCls;for(h=0;h<b;h++){k=g.create("<li>");if(h===this.activeIndex)k.className=c.activeTriggerCls;k.innerHTML=h+1;e.appendChild(k)}this.container.appendChild(e);return g.children(e)},_bindTriggers:function(){var b=this,c=b.config,e=b.triggers,k,h,r=e.length;for(h=0;h<r;h++)(function(u){k=e[u];q.on(k,"click",function(w){b._onFocusTrigger(u,
w)});if(c.triggerType==="mouse"){q.on(k,"mouseenter",function(w){b._onMouseEnterTrigger(u,w)});q.on(k,"mouseleave",function(w){b._onMouseLeaveTrigger(u,w)})}})(h)},_onFocusTrigger:function(b,c){if(this._triggerIsValid(b)){this._cancelSwitchTimer();this.switchTo(b,s,c)}},_onMouseEnterTrigger:function(b,c){var e=this;if(e._triggerIsValid(b))e.switchTimer=f.later(function(){e.switchTo(b,s,c)},e.config.delay*1E3)},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(b){return this.ingIndex!==
b},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=s}},switchTo:function(b,c,e,k){var h=this,r=h.config,u=h.triggers,w=h.panels,t=h.ingIndex,n=r.steps,p=t*n,m=b*n;if(!h._triggerIsValid(b))return h;if(h.fire("beforeSwitch",{toIndex:b})===false)return h;if(r.hasTriggers)h._switchTrigger(t>-1?u[t]:null,u[b]);if(c===s)c=b>t?"forward":"backward";h.ingIndex=b;h._switchView(t>-1?w.slice(p,p+n):null,w.slice(m,m+n),b,c,e,function(){k&&k.call(h,b);h.activeIndex=
b});return h},_switchTrigger:function(b,c){var e=this.config.activeTriggerCls;b&&g.removeClass(b,e);g.addClass(c,e)},_switchView:function(b,c,e,k,h,r){b&&g.css(b,"display","none");g.css(c,"display","block");this._fireOnSwitch(e,h);r&&r.call(this)},_fireOnSwitch:function(b,c){this.fire("switch",f.mix(c||{},{currentIndex:b}))},prev:function(b){var c=this.activeIndex;this.switchTo(c>0?c-1:this.length-1,"backward",b)},next:function(b){var c=this.activeIndex;this.switchTo(c<this.length-1?c+1:0,"forward",
b)}});return o},{requires:["dom","event"]});
KISSY.add("switchable/aria",function(f,g,q,s){function o(){this.stop&&this.stop()}function v(){this.start&&this.start()}s.Plugins.push({name:"aria",init:function(b){if(b.config.aria){var c=b.container;q.on(c,"focusin",o,b);q.on(c,"focusout",v,b)}}});var l=["a","input","button","object"];return{setTabIndex:function(b,c){b.tabIndex=c;g.query("*",b).each(function(e){var k=e.nodeName.toLowerCase();if(f.inArray(k,l)){g.hasAttr(e,"oriTabIndex")||g.attr(e,"oriTabIndex",e.tabIndex);e.tabIndex=c!=-1?g.attr(e,
"oriTabIndex"):c}})}}},{requires:["dom","event","./base"]});
KISSY.add("switchable/accordion/base",function(f,g,q){function s(o,v){if(!(this instanceof s))return new s(o,v);s.superclass.constructor.apply(this,arguments);return 0}f.extend(s,q,{_switchTrigger:function(o,v){var l=this.config;l.multiple?g.toggleClass(v,l.activeTriggerCls):s.superclass._switchTrigger.apply(this,arguments)},_triggerIsValid:function(o){return s.superclass._triggerIsValid.call(this,o)||this.config.multiple},_switchView:function(o,v,l,b,c,e){var k=v[0];if(this.config.multiple){g.toggle(k);
this._fireOnSwitch(l,c);e.call(this)}else s.superclass._switchView.apply(this,arguments)}});s.Plugins=[];s.Config={markupType:1,triggerType:"click",multiple:false};return s},{requires:["dom","../base"]});
KISSY.add("switchable/accordion/aria",function(f,g,q){function s(d){var x;f.each(this.triggers,function(B){if(B==d||r.contains(B,d))x=B});return x}function o(d){switch(d.keyCode){case u:case w:d.ctrlKey&&!d.altKey&&!d.shiftKey&&d.halt();break;case j:d.ctrlKey&&!d.altKey&&d.halt()}}function v(d){var x=d.target,B=this.triggers,C=!d.ctrlKey&&!d.shiftKey&&!d.altKey,E=d.ctrlKey&&!d.shiftKey&&!d.altKey;switch(d.keyCode){case y:case z:if(s.call(this,x)&&C){this.switchTo(this.focusIndex);d.halt()}break;case p:case m:if(s.call(this,
x)){b.call(this);d.halt()}break;case a:case i:if(s.call(this,x)){c.call(this);d.halt()}break;case w:if(E){d.halt();c.call(this)}break;case u:if(E){d.halt();b.call(this)}break;case n:if(C){x=this.focusIndex;this.focusIndex=0;l.call(this,x,0,true);d.halt()}break;case t:if(C){x=B.length-1;B=this.focusIndex;this.focusIndex=x;l.call(this,B,x,true);d.halt()}break;case j:if(d.ctrlKey&&!d.altKey){d.halt();d.shiftKey?b.call(this):c.call(this)}}}function l(d,x,B){var C=this.triggers;if(f.isNumber(d))var E=
C[d];d=C[x];if(E){A(E,"-1");r.removeClass(E,k);E.setAttribute("aria-selected","false")}B&&d.focus();A(d,"0");r.addClass(d,k);d.setAttribute("aria-selected","true")}function b(){var d=this.triggers,x=this.focusIndex;d=this.focusIndex=x==0?d.length-1:x-1;l.call(this,x,d,true)}function c(){var d=this.focusIndex,x=this.focusIndex=d==this.triggers.length-1?0:d+1;l.call(this,d,x,true)}function e(d){var x=!!d.originalEvent.target,B=this.config.multiple,C=this.activeIndex;d=d.currentIndex;var E=this.triggers[d],
F=this.panels[d];if(C>-1){var D=this.triggers[C];C=this.panels[C];A(D,"-1");x&&E.focus();if(!B){C.setAttribute("aria-hidden","true");D.setAttribute("aria-expanded","false")}}A(E,"0");x=F.getAttribute("aria-hidden");F.setAttribute("aria-hidden",x=="false"?"true":"false");E.setAttribute("aria-expanded",x=="false"?"false":"true");l.call(this,this.focusIndex,d);this.focusIndex=d}var k="ks-switchable-select",h=f.Event,r=f.DOM,u=33,w=34,t=35,n=36,p=37,m=38,a=39,i=40,j=9,z=32,y=13;f.mix(q.Config,{aria:true});
q.Plugins.push({name:"aria",init:function(d){if(d.config.aria){var x=d.container,B=d.activeIndex;r.attr(x,"aria-multiselectable",d.config.multiple?"true":"false");r.attr(x,"role","tablist");var C=d.triggers,E=d.panels,F=0;f.each(E,function(D){if(!D.id)D.id=f.guid("ks-switchable-tab-panel")});f.each(C,function(D){if(!D.id)D.id=f.guid("ks-switchable-tab")});f.each(C,function(D){D.setAttribute("role","tab");D.setAttribute("aria-expanded",B==F?"true":"false");D.setAttribute("aria-selected",B==F?"true":
"false");D.setAttribute("aria-controls",E[F].id);A(D,B==F?"0":"-1");F++});F=0;f.each(E,function(D){var G=C[F];D.setAttribute("role","tabpanel");D.setAttribute("aria-hidden",B==F?"false":"true");D.setAttribute("aria-labelledby",G.id);F++});d.on("switch",e,d);if(B>-1)d.focusIndex=B;h.on(x,"keydown",v,d);h.on(x,"keypress",o,d)}}});var A=g.setTabIndex},{requires:["../aria","./base"]});
KISSY.add("switchable/autoplay",function(f,g,q,s){f.mix(q.Config,{autoplay:false,interval:5,pauseOnHover:true});q.Plugins.push({name:"autoplay",init:function(o){function v(){c=f.later(function(){o.paused||o.switchTo(o.activeIndex<o.length-1?o.activeIndex+1:0,"forward")},b,true)}var l=o.config,b=l.interval*1E3,c;if(l.autoplay){if(l.pauseOnHover){g.on(o.container,"mouseenter",function(){o.stop()});g.on(o.container,"mouseleave",function(){o.start()})}v();o.stop=function(){if(c){c.cancel();c=s}o.paused=
true};o.start=function(){if(c){c.cancel();c=s}o.paused=false;v()}}}});return q},{requires:["event","./base"]});KISSY.add("switchable/autorender",function(f,g,q,s){s.autoRender=function(o,v){o="."+(o||"KS_Widget");g.query(o,v).each(function(l){var b=l.getAttribute("data-widget-type"),c;if(b&&"Switchable Tabs Slide Carousel Accordion".indexOf(b)>-1)try{if(c=l.getAttribute("data-widget-config"))c=c.replace(/'/g,'"');new f[b](l,q.parse(c))}catch(e){}})}},{requires:["dom","json","switchable/base"]});
KISSY.add("switchable/carousel/base",function(f,g,q,s,o){function v(l,b){if(!(this instanceof v))return new v(l,b);v.superclass.constructor.apply(this,arguments);return 0}v.Config={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};v.Plugins=[];f.extend(v,s,{_init:function(){var l=this;v.superclass._init.call(l);var b=l.config,c=b.disableBtnCls,e=false;f.each(["prev","next"],function(k){var h=l[k+"Btn"]=g.get("."+b[k+"BtnCls"],
l.container);q.on(h,"click",function(r){r.preventDefault();e||g.hasClass(h,c)||l[k]()})});if(!b.circular){l.on("beforeSwitch",function(){e=true});l.on("switch",function(k){k=k.currentIndex;k=k===0?l.prevBtn:k===l.length-1?l.nextBtn:o;g.removeClass([l.prevBtn,l.nextBtn],c);k&&g.addClass(k,c);e=false})}q.on(l.panels,"click",function(){l.fire("itemSelected",{item:this})})}});return v},{requires:["dom","event","../base"]});
KISSY.add("switchable/carousel/aria",function(f,g,q,s,o){function v(m){var a=m.currentIndex,i=this.activeIndex,j=this.panels,z=j[a*this.config.steps],y=this.triggers;a=y[a];if((m=!!m.originalEvent.target)||i==-1){f.each(y,function(A){p(A,-1)});f.each(j,function(A){p(A,-1)});p(a,0);p(z,0);m&&z.focus()}}function l(m){var a;f.each(this.triggers,function(i){if(i==m||g.contains(i,m)){a=i;return false}});return a}function b(m){var a=m.target;switch(m.keyCode){case w:case u:if(a=l.call(this,a)){a=a;var i=
g.next(a),j=this.triggers;i||(i=j[0]);p(a,-1);p(i,0);i.focus();m.halt()}break;case r:case h:if(a=l.call(this,a)){a=a;i=g.prev(a);j=this.triggers;i||(i=j[j.length-1]);p(a,-1);p(i,0);i.focus();m.halt()}break;case n:case t:if(a=l.call(this,a)){this.switchTo(f.indexOf(a,this.triggers),undefined,m);m.halt()}}}function c(m){var a;f.each(this.panels,function(i){if(i==m||g.contains(i,m)){a=i;return false}});return a}function e(m){var a=f.indexOf(m,this.panels),i=this.config.steps,j=Math.floor(a/i);if(j==
this.activeIndex)return 1;if(a%i==0||a%i==i-1){this.switchTo(j,undefined,undefined,function(){m.focus()});return 0}return 1}function k(m){var a=m.target;switch(m.keyCode){case w:case u:if(a=c.call(this,a)){a=a;var i=g.next(a),j=this.panels;i||(i=j[0]);p(a,-1);p(i,0);e.call(this,i)&&i.focus();m.halt()}break;case r:case h:if(a=c.call(this,a)){a=a;i=g.prev(a);j=this.panels;i||(i=j[j.length-1]);p(a,-1);p(i,0);e.call(this,i)&&i.focus();m.halt()}break;case n:case t:if(a=c.call(this,a)){this.fire("itemSelected",
{item:a});m.halt()}}}var h=37,r=38,u=39,w=40,t=32,n=13,p=s.setTabIndex;f.mix(o.Config,{aria:true});o.Plugins.push({name:"aria",init:function(m){if(m.config.aria){var a=m.triggers,i=m.panels,j=m.content,z=m.activeIndex;if(!j.id)j.id=f.guid("ks-switchbale-content");j.setAttribute("role","listbox");var y=0;f.each(a,function(d){p(d,z==y?"0":"-1");d.setAttribute("role","button");d.setAttribute("aria-controls",j.id);y++});y=0;f.each(i,function(d){p(d,"-1");d.setAttribute("role","option");y++});m.on("switch",
v,m);(i=m.nav)&&q.on(i,"keydown",b,m);q.on(j,"keydown",k,m);i=m.prevBtn;var A=m.nextBtn;if(i){p(i,0);i.setAttribute("role","button");q.on(i,"keydown",function(d){if(d.keyCode==n||d.keyCode==t)m.switchTo(m.activeIndex>0?m.activeIndex-1:a.length-1,undefined,d)})}if(A){p(A,0);A.setAttribute("role","button");q.on(A,"keydown",function(d){if(d.keyCode==n||d.keyCode==t)m.switchTo(m.activeIndex==a-1?m.activeIndex+1:0,undefined,d)})}}}})},{requires:["dom","event","../aria","./base"]});
KISSY.add("switchable/effect",function(f,g,q,s,o,v){var l;f.mix(o.Config,{effect:"none",duration:0.5,easing:"easeNone",nativeAnim:true});o.Effects={none:function(b,c,e){b&&g.css(b,"display","none");g.css(c,"display","block");e()},fade:function(b,c,e){b&&b.length!==1&&f.error("fade effect only supports steps == 1.");var k=this,h=k.config,r=b?b[0]:null,u=c[0];k.anim&&k.anim.stop();g.css(u,"opacity",1);if(r)k.anim=(new s(r,{opacity:0},h.duration,h.easing,function(){k.anim=v;g.css(u,"z-index",9);g.css(r,
"z-index",1);e&&e()},h.nativeAnim)).run();else{g.css(u,"z-index",9);e&&e()}},scroll:function(b,c,e,k){var h=this;b=h.config;c=b.effect==="scrollx";var r={};r[c?"left":"top"]=-(h.viewSize[c?0:1]*k)+"px";h.anim&&h.anim.stop();h.anim=(new s(h.content,r,b.duration,b.easing,function(){h.anim=v;e()},b.nativeAnim)).run()}};l=o.Effects;l.scrollx=l.scrolly=l.scroll;o.Plugins.push({name:"effect",init:function(b){var c=b.config,e=c.effect,k=b.panels,h=b.content,r=c.steps,u=b.activeIndex,w=k.length;b.viewSize=
[c.viewSize[0]||k[0].offsetWidth*r,c.viewSize[1]||k[0].offsetHeight*r];if(e!=="none"){f.each(k,function(m){g.css(m,"display","block")});switch(e){case "scrollx":case "scrolly":g.css(h,"position","absolute");g.css(h.parentNode,"position","relative");if(e==="scrollx"){g.css(k,"float","left");g.width(h,b.viewSize[0]*(w/r))}break;case "fade":var t=u*r,n=t+r-1,p;f.each(k,function(m,a){p=a>=t&&a<=n;g.css(m,{opacity:p?1:0,position:"absolute",zIndex:p?9:1})})}}}});f.augment(o,{_switchView:function(b,c,e,
k,h,r){var u=this,w=u.config.effect;(f.isFunction(w)?w:l[w]).call(u,b,c,function(){u._fireOnSwitch(e,h);r&&r.call(u)},e,k)}});return o},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/circular",function(f,g,q,s){function o(n,p,m,a,i){var j=this;n=j.config;p=j.length;var z=j.activeIndex,y=n.scrollType===t,A=y?e:k,d=j.viewSize[y?0:1];y=-d*a;var x={},B,C=i===w;if(B=C&&z===0&&a===p-1||i===u&&z===p-1&&a===0)y=v.call(j,j.panels,a,C,A,d);x[A]=y+r;j.anim&&j.anim.stop();j.anim=(new q(j.content,x,n.duration,n.easing,function(){B&&l.call(j,j.panels,a,C,A,d);j.anim=undefined;m()},n.nativeAnim)).run()}function v(n,p,m,a,i){var j=this.config.steps;p=this.length;var z=m?
p-1:0,y=(z+1)*j;for(j=z*j;j<y;j++){g.css(n[j],b,c);g.css(n[j],a,(m?-1:1)*i*p)}return m?i:-i*p}function l(n,p,m,a,i){var j=this.config.steps;p=this.length;var z=m?p-1:0,y=(z+1)*j;for(j=z*j;j<y;j++){g.css(n[j],b,h);g.css(n[j],a,h)}g.css(this.content,a,m?-i*(p-1):h)}var b="position",c="relative",e="left",k="top",h="",r="px",u="forward",w="backward",t="scrollx";f.mix(s.Config,{circular:false});s.Plugins.push({name:"circular",init:function(n){n=n.config;if(n.circular&&(n.effect===t||n.effect==="scrolly")){n.scrollType=
n.effect;n.effect=o}}})},{requires:["dom","anim","switchable/base","switchable/effect"]});
KISSY.add("switchable/countdown",function(f,g,q,s,o,v){f.mix(o.Config,{countdown:false,countdownFromStyle:"",countdownToStyle:"width: 0"});o.Plugins.push({name:"countdown",init:function(l){function b(n){c();t=(new s(r[n],w,h-1)).run()}function c(){if(k){clearTimeout(k);k=null}if(t){t.stop();t=v}}var e=l.config,k,h=e.interval,r=[],u=e.countdownFromStyle,w=e.countdownToStyle,t;if(!(!e.autoplay||!e.hasTriggers||!e.countdown)){f.each(l.triggers,function(n,p){n.innerHTML='<div class="ks-switchable-trigger-mask"></div><div class="ks-switchable-trigger-content">'+
n.innerHTML+"</div>";r[p]=n.firstChild});if(e.pauseOnHover){q.on(l.container,"mouseenter",function(){c();var n=r[l.ingIndex];if(u)t=(new s(n,u,0.2,"easeOut")).run();else g.removeAttr(n,"style")});q.on(l.container,"mouseleave",function(){c();var n=l.ingIndex;g.removeAttr(r[n],"style");k=setTimeout(function(){b(n)},200)})}l.on("beforeSwitch",function(){c();g.attr(r[l.activeIndex],"style",u||"")});l.on("switch",function(n){l.paused||b(n.currentIndex)})}}});return o},{requires:["dom","event","anim","switchable/base"]});
KISSY.add("switchable/lazyload",function(f,g,q){var s="beforeSwitch",o="img-src",v="area-data",l={};l[o]="data-ks-lazyload-custom";l[v]="ks-datalazyload-custom";f.mix(q.Config,{lazyDataType:v});q.Plugins.push({name:"lazyload",init:function(b){function c(u){var w=k.steps;u=u.toIndex*w;e.loadCustomLazyData(b.panels.slice(u,u+w),h);a:{var t,n;if(u=(w=h===o)?"img":h===v?"textarea":""){u=g.query(u,b.container);t=0;for(n=u.length;t<n;t++)if(w?g.attr(u[t],r):g.hasClass(u[t],r)){w=false;break a}}w=true}w&&
b.detach(s,c)}var e=f.require("datalazyload"),k=b.config,h=k.lazyDataType,r=l[h];!e||!h||!r||b.on(s,c)}});return q},{requires:["dom","switchable/base"]});KISSY.add("switchable/slide/base",function(f,g){function q(s,o){if(!(this instanceof q))return new q(s,o);q.superclass.constructor.apply(this,arguments);return 0}q.Config={autoplay:true,circular:true};q.Plugins=[];f.extend(q,g);return q},{requires:["../base"]});
KISSY.add("switchable/slide/aria",function(f,g,q,s,o){function v(t){var n=this.panels,p=this.__slideIndex;switch(t.keyCode){case k:case e:p++;if(p==n.length)p=0;this.__slideIndex=p;this.switchTo(p,h,undefined,function(){n[p].focus()});t.halt();break;case c:case b:p--;if(p==-1)p=n.length-1;this.__slideIndex=p;this.switchTo(p,r,undefined,function(){n[p].focus()});t.halt()}}function l(t){var n=this;if(f.inArray(t.target,n.panels)){if(w){clearTimeout(w);w=undefined}switch(t.keyCode){case k:case c:case b:case e:t.halt()}w=
setTimeout(function(){v.call(n,t);w=undefined},200)}}var b=37,c=38,e=39,k=40,h="forward",r="backward";f.mix(o.Config,{aria:true});var u=s.setTabIndex;o.Plugins.push({name:"aria",init:function(t){if(t.config.aria){var n=t.panels,p=0,m=t.activeIndex;f.each(t.triggers,function(i){u(i,"-1");p++});p=0;f.each(n,function(i){u(i,m==p?"0":"-1");g.attr(i,"role","option");p++});var a=t.content;g.attr(a,"role","listbox");q.on(a,"keydown",l,t);u(n[0],0);if(m>-1)t.__slideIndex=m;t.on("switch",function(i){i=i.currentIndex;
var j=t.activeIndex;t.__slideIndex=i;j!=-1&&u(n[j],-1);u(n[i],0)})}}});var w},{requires:["dom","event","../aria","./base"]});KISSY.add("switchable/tabs/base",function(f,g){function q(s,o){if(!(this instanceof q))return new q(s,o);q.superclass.constructor.call(this,s,o);return 0}f.extend(q,g);q.Config={};q.Plugins=[];return q},{requires:["../base"]});
KISSY.add("switchable/tabs/aria",function(f,g,q){function s(a){var i;f.each(this.triggers,function(j){if(j==a||c.contains(j,a))i=j});return i}function o(a){switch(a.keyCode){case e:case k:a.ctrlKey&&!a.altKey&&!a.shiftKey&&a.halt();break;case p:a.ctrlKey&&!a.altKey&&a.halt()}}function v(a){var i=a.target,j=this.triggers,z=!a.ctrlKey&&!a.shiftKey&&!a.altKey,y=a.ctrlKey&&!a.shiftKey&&!a.altKey;switch(a.keyCode){case u:case w:if(s.call(this,i)){this.prev(a);a.halt()}break;case t:case n:if(s.call(this,
i)){this.next(a);a.halt()}break;case k:if(y){a.halt();this.next(a)}break;case e:if(y){a.halt();this.prev(a)}break;case r:if(z){this.switchTo(0,undefined,a);a.halt()}break;case h:if(z){this.switchTo(j.length-1,undefined,a);a.halt()}break;case p:if(a.ctrlKey&&!a.altKey){a.halt();a.shiftKey?this.prev(a):this.next(a)}}}function l(a){var i=!!a.originalEvent.target,j=this.activeIndex,z=a.currentIndex;if(j!=z){a=this.triggers[j];var y=this.triggers[z];j=this.panels[j];z=this.panels[z];a&&m(a,"-1");m(y,"0");
i&&y.focus();j&&j.setAttribute("aria-hidden","true");z.setAttribute("aria-hidden","false")}}var b=f.Event,c=f.DOM,e=33,k=34,h=35,r=36,u=37,w=38,t=39,n=40,p=9;f.mix(q.Config,{aria:true});q.Plugins.push({name:"aria",init:function(a){if(a.config.aria){var i=a.triggers,j=a.activeIndex,z=a.panels,y=a.container;c.attr(y,"role","tablist");var A=0;f.each(i,function(d){d.setAttribute("role","tab");m(d,j==A?"0":"-1");if(!d.id)d.id=f.guid("ks-switchable");A++});A=0;f.each(z,function(d){var x=i[A];d.setAttribute("role",
"tabpanel");d.setAttribute("aria-hidden",j==A?"false":"true");d.setAttribute("aria-labelledby",x.id);A++});a.on("switch",l,a);b.on(y,"keydown",v,a);b.on(y,"keypress",o,a)}}});var m=g.setTabIndex},{requires:["../aria","./base"]});
KISSY.add("switchable",function(f,g,q,s,o,v,l,b,c,e,k,h,r,u,w,t){f.Switchable=g;q={Accordion:s,Carousel:b,Slide:u,Tabs:t};f.mix(f,q);f.mix(g,q);return g},{requires:["switchable/base","switchable/aria","switchable/accordion/base","switchable/accordion/aria","switchable/autoplay","switchable/autorender","switchable/carousel/base","switchable/carousel/aria","switchable/circular","switchable/countdown","switchable/effect","switchable/lazyload","switchable/slide/base","switchable/slide/aria","switchable/tabs/base",
"switchable/tabs/aria"]});
