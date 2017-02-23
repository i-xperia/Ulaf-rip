if (self.CavalryLogger) { CavalryLogger.start_js(["b0cEs"]); }

__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};}),null);
__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};}),null);
__d('FlipDirection',['DOM','Input','Style'],(function a(b,c,d,e,f,g){var h={setDirection:function i(j){var k=c('DOM').isNodeOfType(j,'input')&&j.type=='text',l=c('DOM').isNodeOfType(j,'textarea');if(!(k||l)||j.getAttribute('data-prevent-auto-flip'))return;var m=c('Input').getValue(j),n=j.style&&j.style.direction;if(!n){var o=0,p=true;for(var q=0;q<m.length;q++){var r=m.charCodeAt(q);if(r>=48){if(p){p=false;o++;}if(r>=1470&&r<=1920){c('Style').set(j,'direction','rtl');j.setAttribute('dir','rtl');return;}if(o==5){c('Style').set(j,'direction','ltr');j.setAttribute('dir','ltr');return;}}else p=true;}}else if(m.length===0){c('Style').set(j,'direction','');j.removeAttribute('dir');}}};f.exports=h;}),null);
__d('FlipDirectionOnKeypress',['Event','FlipDirection'],(function a(b,c,d,e,f,g){var h=function i(event){var j=event.getTarget();c('FlipDirection').setDirection(j);};c('Event').listen(document.documentElement,{keyup:h,input:h});}),null);
__d('PageHooks',['Arbiter','ErrorUtils','InitialJSLoader','PageEvents'],(function a(b,c,d,e,f,g){var h={DOMREADY_HOOK:'domreadyhooks',ONLOAD_HOOK:'onloadhooks'};function i(){var p=b.CavalryLogger;if(!window.domready&&p)p.getInstance().setTimeStamp('t_prehooks');l(o.DOMREADY_HOOK);if(!window.domready&&p)p.getInstance().setTimeStamp('t_hooks');window.domready=true;c('Arbiter').inform('uipage_onload',true,c('Arbiter').BEHAVIOR_STATE);}function j(){l(o.ONLOAD_HOOK);window.loaded=true;}function k(p,q){return c('ErrorUtils').applyWithGuard(p,null,null,function(r){r.event_type=q;r.category='runhook';},'PageHooks:'+q);}function l(p){var q=p=='onbeforeleavehooks'||p=='onbeforeunloadhooks';do{var r=window[p];if(!r)break;if(!q)window[p]=null;for(var s=0;s<r.length;s++){var t=k(r[s],p);if(q&&t)return t;}}while(!q&&window[p]);}function m(){if(!window.domready){window.domready=true;l('onloadhooks');}if(!window.loaded){window.loaded=true;l('onafterloadhooks');}}function n(){c('Arbiter').registerCallback(i,[c('PageEvents').BIGPIPE_DOMREADY,c('InitialJSLoader').INITIAL_JS_READY]);c('Arbiter').registerCallback(j,[c('PageEvents').BIGPIPE_DOMREADY,c('PageEvents').BIGPIPE_ONLOAD,c('InitialJSLoader').INITIAL_JS_READY]);c('Arbiter').subscribe(c('PageEvents').NATIVE_ONBEFOREUNLOAD,function(p,q){q.warn=l('onbeforeleavehooks')||l('onbeforeunloadhooks');if(!q.warn){window.domready=false;window.loaded=false;}},c('Arbiter').SUBSCRIBE_NEW);c('Arbiter').subscribe(c('PageEvents').NATIVE_ONUNLOAD,function(p,q){l('onunloadhooks');l('onafterunloadhooks');},c('Arbiter').SUBSCRIBE_NEW);}var o=babelHelpers['extends']({_domreadyHook:i,_onloadHook:j,runHook:k,runHooks:l,keepWindowSetAsLoaded:m},h);n();b.PageHooks=f.exports=o;}),null);
__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],(function a(b,c,d,e,f,g){var h,i;c('Toggler').subscribe(['show','hide'],function(k,l){var m=c('DataStore').get(l.getActive(),'Popover');if(m)if(k==='show'){m.showLayer();}else m.hideLayer();});h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);this._root=k;this._triggerElem=l;this._behaviors=m;this._config=n||{};this._disabled=!!this._config.disabled;this._listeners=new (c('SubscriptionsHandler'))();if(!this._disabled&&(l.nodeName!=='A'||l.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();this._setupFocusListener();this._setupBlurListener();l.setAttribute('role','button');c('DataStore').set(k,'Popover',this);if(c('Toggler').getActive()===k)this.showLayer();}j.prototype.ensureInit=function(){'use strict';if(!this._layer)this._init();};j.prototype.showLayer=function(){'use strict';if(this._disabled)return;this.ensureInit();this._layer.show();c('Toggler').show(this._root);c('CSS').addClass(this._root,'selected');this.inform('show');};j.prototype.getContentRoot=function(){'use strict';return this._root;};j.prototype.getLayer=function(){'use strict';return this._layer;};j.prototype.hideLayer=function(){'use strict';this.ensureInit();this._layer.hide();};j.prototype.isShown=function(){'use strict';return this._layer&&this._layer.isShown();};j.prototype.setLayerContent=function(k){'use strict';this.ensureInit();if(this._layer.setContent)this._layer.setContent(k);};j.prototype._init=function(){'use strict';var k=this._config.layer;k.enableBehaviors([c('LayerHideOnEscape')]);c('Toggler').createInstance(k.getRoot()).setSticky(false);k.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&k.enableBehaviors(this._behaviors);this._layer=k;this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};j.prototype._onLayerHide=function(){'use strict';c('Toggler').hide(this._root);c('CSS').removeClass(this._root,'selected');this.inform('hide');if(c('KeyStatus').getKeyDownCode()===c('Keys').ESC)c('Focus').set(this._triggerElem);};j.prototype.enable=function(){'use strict';if(!this._disabled)return;this._listeners.engage();this._setupClickListener();this._setupKeyListener();this._setupFocusListener();this._setupBlurListener();this._disabled=false;};j.prototype.disable=function(){'use strict';if(this._disabled)return;if(this.isShown())this.hideLayer();this._listeners.release();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};j.prototype._setupClickListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'click',c('curry')(c('Toggler').bootstrap,this._triggerElem)));};j.prototype._setupKeyListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};j.prototype._setupFocusListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'focus',this._handleFocusEvent.bind(this)));};j.prototype._setupBlurListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'blur',this._handleBlurEvent.bind(this)));};j.prototype._handleKeyEvent=function(event){'use strict';if(event.getModifiers().any)return;var k=c('Event').getKeyCode(event);switch(k){case c('Keys').DOWN:case c('Keys').UP:if(this._config.disableArrowKeyActivation)return;if(!this.isShown())c('Toggler').bootstrap(this._triggerElem);break;case c('Keys').RETURN:if(!this._config.enableActivationOnEnter)return;if(!this.isShown())c('Toggler').bootstrap(this._triggerElem);break;case c('Keys').SPACE:c('Toggler').bootstrap(this._triggerElem);break;default:return;}event.prevent();};j.prototype._handleFocusEvent=function(event){'use strict';c('CSS').addClass(this._root,'focused');};j.prototype._handleBlurEvent=function(event){'use strict';c('CSS').removeClass(this._root,'focused');};j.prototype.destroy=function(){'use strict';this.disable();c('DataStore').remove(this._root,'Popover');};Object.assign(j.prototype,{_layer:null});f.exports=j;}),null);
__d('ContextualLayerHideOnScroll',['Event'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('contextchange',this._handleContextChange.bind(this)),this._layer.subscribe('show',this.attach.bind(this)),this._layer.subscribe('hide',this.detach.bind(this))];};h.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this.detach();};h.prototype.attach=function(){'use strict';if(this._listener)return;var i=this._layer.getContextScrollParent();if(i===window)return;this._listener=c('Event').listen(i,'scroll',this._layer.hide.bind(this._layer));};h.prototype.detach=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};h.prototype._handleContextChange=function(){'use strict';this.detach();if(this._layer.isShown())this.attach();};Object.assign(h.prototype,{_subscriptions:[]});f.exports=h;}),null);
__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ParameterizedPopover'));i=h&&h.prototype;j.prototype._init=function(){'use strict';var k=new (c('ContextualLayer'))({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:16},'data-testid':this._config['data-testid']},c('DOM').create('div'));k.enableBehaviors([c('ContextualLayerHideOnScroll')]);this._config.layer=k;if(this._config.alignh)k.setAlignment(this._config.alignh);if(this._config.layer_content)k.setContent(this._config.layer_content);if(this._config.position)k.setPosition(this._config.position);if(this._config.arrowDimensions)k.setArrowDimensions(this._config.arrowDimensions);i._init.call(this);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('VirtualCursorStatus',['Event','KeyStatus','Set','UserAgent','emptyFunction','setImmediate'],(function a(b,c,d,e,f,g){var h=false,i=false,j=null,k=false;function l(event){var q=new (c('Set'))(),r=c('KeyStatus').isKeyDown(),s=event.clientX,t=event.clientY,u=event.isPrimary,v=event.isTrusted,w=event.offsetX,x=event.offsetY,y=event.pointerType,z=event.mozInputSource,aa=event.WEBKIT_FORCE_AT_MOUSE_DOWN,ba=event.webkitForce,ca=event.getTarget(),da=ca.clientWidth,ea=ca.clientHeight;if(s===0&&t===0&&w>=0&&x>=0&&i&&v&&z==null)q.add('Chrome');if(h&&i&&!r&&ba!=null&&ba<aa&&w===0&&x===0&&z==null)q.add('Safari-edge');if(s===0&&t===0&&w<0&&x<0&&i&&z==null)q.add('Safari-old');!h&&!i&&r&&u===false&&v&&y===''&&s===0&&t===0&&w===0&&x===0&&z==null;if(!h&&!i&&!r&&v&&c('UserAgent').isBrowser('IE >= 10')&&z==null)if(s<0&&t<0){q.add('IE');}else if((w<0||w>da)&&(x<0||x>ea))q.add('MSIE');if(z===0&&v)q.add('Firefox');return q;}function m(){h=true;c('setImmediate')(function(){h=false;});}function n(){i=true;c('setImmediate')(function(){i=false;});}function o(event,q){if(j===null)j=l(event);k=j.size>0;var r=event.target.getAttribute('data-accessibilityid')==='virtual_cursor_trigger';q(k,j,r);c('setImmediate')(function(){k=false;j=null;});}var p={isVirtualCursorTriggered:function q(){return k;},add:function q(r){var s=arguments.length<=1||arguments[1]===undefined?c('emptyFunction'):arguments[1],t=c('Event').listen(r,'click',function(event){return o(event,s);}),u=c('Event').listen(r,'mousedown',m),v=c('Event').listen(r,'mouseup',n);return {remove:function w(){t.remove();u.remove();v.remove();}};}};f.exports=p;}),null);
__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);this._popover=k;this._triggerElem=l;this._getInitialMenu=typeof m!=='function'?function(){return m;}:m;this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(k.subscribe('init',this._onLayerInit.bind(this)),k.subscribe('show',this._onPopoverShow.bind(this)),k.subscribe('hide',this._onPopoverHide.bind(this)),c('Event').listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this)),c('VirtualCursorStatus').add(this._triggerElem,this._checkInitialFocus.bind(this)));n&&this.enableBehaviors(n);}j.prototype.getContentRoot=function(){'use strict';return this._popover.getContentRoot();};j.prototype.setMenu=function(k){'use strict';if(this._menu&&this._menu!==k)this._menu.destroy();this._menu=k;var l=k.getRoot();this._popover.setLayerContent(l);k.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();c('ARIA').controls(this._triggerElem,l);this.inform('setMenu',null,c('Arbiter').BEHAVIOR_PERSISTENT);};j.prototype.setInitialFocus=function(k,l){'use strict';if(l)k.focusAnItem();};j.prototype.getPopover=function(){'use strict';return this._popover;};j.prototype.getTriggerElem=function(){'use strict';return this._triggerElem;};j.prototype.getInitialMenu=function(){'use strict';return this._getInitialMenu();};j.prototype.getMenu=function(){'use strict';return this._menu;};j.prototype._onLayerInit=function(){'use strict';if(!this._menu)this.setMenu(this._getInitialMenu());this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};j.prototype._onPopoverShow=function(){'use strict';if(this._menu)this._menu.onShow();this._checkInitialFocus();this._popoverShown=true;};j.prototype._checkInitialFocus=function(){'use strict';var k=c('KeyStatus').isKeyDown()||c('VirtualCursorStatus').isVirtualCursorTriggered();if(this._menu)this.setInitialFocus(this._menu,k);};j.prototype._onPopoverHide=function(){'use strict';if(this._menu)this._menu.onHide();this._popoverShown=false;};j.prototype._handleKeyEvent=function(k,l){'use strict';if(l.target===this._triggerElem)return;var m=c('Event').getKeyCode(l);if(m===c('Keys').TAB){this._popover.hideLayer();c('Focus').set(this._triggerElem);return;}if(l.getModifiers().any)return;switch(m){case c('Keys').RETURN:if(!this.getMenu().getFocusedItem())this.inform('returnWithoutFocusedItem');return;default:if(m===c('Keys').SPACE&&l.target.type==='file')return;if(this._menu.handleKeydown(m,l)===false){this._menu.blur();this._menu.handleKeydown(m,l);}break;}l.prevent();};j.prototype._handleKeyEventOnTrigger=function(k){'use strict';var l=c('Event').getKeyCode(k),m=String.fromCharCode(l).toLowerCase();if(/^\w$/.test(m)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(l,k)===false){this._popover.hideLayer();c('Focus').set(this._triggerElem);}}};j.prototype._onMenuDone=function(k){'use strict';setTimeout(function(){this._popover.hideLayer();c('Focus').set(this._triggerElem);}.bind(this),0);};j.prototype.enable=function(){'use strict';this._popover.enable();};j.prototype.disable=function(){'use strict';this._popover.disable();};j.prototype.destroy=function(){'use strict';this._subscriptions.release();this._popover.destroy();this._getInitialMenu().destroy();this._menu&&this._menu.destroy();};Object.assign(j.prototype,{_popoverShown:false});f.exports=j;}),null);
__d("SelectableMenuUtils",[],(function a(b,c,d,e,f,g){var h={doesItemSupportSelect:function j(k){return i(k);},isSelected:function j(k){return i(k)&&k.isSelected();}};function i(j){return j.select&&j.deselect&&j.isSelected;}f.exports=h;}),null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],(function a(b,c,d,e,f,g){var h={},i={};c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){if(k.lid&&k.lid!=='0')k.arbiter.subscribe('images_displayed',function(l,m){var n=h[m.lid];if(!n)n=h[m.lid]=[];m.images.forEach(function(o){try{var q=new (c('URI'))(o);o=q.setFragment('').toString();}catch(p){return;}if(i[o])return;i[o]=true;n.push({pagelet:m.pagelet,timeslice:m.timeslice,ts:m.ts,uri:o});});});});f.exports.getImageTimings=function(j){return h[j]||[];};}),null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],(function a(b,c,d,e,f,g){var h='BigPipe/init',i='pagelet_event',j='phase_begin',k={},l=false;function m(){return {pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}};}function n(q,r,s,t){if(k[t].pagelets[r]==undefined)k[t].pagelets[r]={};k[t].pagelets[r][q]=s;}function o(q){q.subscribe(i,function(r,s){var event=s.event,t=s.ts,u=s.id,v=s.lid,w=s.phase,x=s.categories,y=s.allResources,z=s.displayResources;n(event,u,t,v);var aa=k[v],ba=aa.pagelets[u];if(event===c('PageletEventConstsJS').ARRIVE_END){ba.phase=w;aa.all_resources[u]=y;aa.display_resources[u]=z;}if((event===c('PageletEventConstsJS').ONLOAD_END||event===c('PageletEventConstsJS').DISPLAY_END)&&x)x.forEach(function(ca){if(aa.categories[ca]==undefined)aa.categories[ca]={};aa.categories[ca][event]=t;});});q.subscribe(j,function(event,r){k[r.lid].phase_start[r.phase]=r.ts;});}var p={init:function q(){if(l)return;c('Arbiter').subscribe(h,function(event,r){var s=r.lid,t=r.arbiter;k[s]=m();o(t);});l=true;},getMetrics:function q(r){if(k[r])return JSON.parse(JSON.stringify(k[r]));return null;}};f.exports=p;}),null);
__d('MenuSelectableItem',['cx','CSS','DOM','MenuItem'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('MenuItem'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this._ARIARole='menuitemcheckbox';this._selected=!!this._data.selected;}k.prototype.getIcon=function(){'use strict';return this._data.icon;};k.prototype.setIcon=function(l){'use strict';c('DOM').replace(this._data.icon,l);this._data.icon=l;};k.prototype.isSelected=function(){'use strict';return this._selected;};k.prototype.select=function(){'use strict';if(this.isDisabled())return false;c('CSS').addClass(this._root,"_54nd");this._anchor.setAttribute('aria-checked','true');this._selected=true;};k.prototype.deselect=function(){'use strict';c('CSS').removeClass(this._root,"_54nd");this._anchor.setAttribute('aria-checked','false');this._selected=false;};k.prototype.render=function(){'use strict';var l=j.render.call(this);if(this._data.selected){c('CSS').addClass(l,"_54nd");this._anchor.setAttribute('aria-checked','true');}return l;};Object.assign(k.prototype,{_selected:false});f.exports=k;}),null);
__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Menu'));i=h&&h.prototype;j.prototype.focusAnItem=function(){'use strict';for(var k=0;k<this._items.length;k++)if(c('SelectableMenuUtils').isSelected(this._items[k]))if(this._focusItem(this._items[k])!==false)return true;return i.focusAnItem.call(this);};j.prototype.setValue=function(k){'use strict';if(!this._root)this._render();var l=c('createArrayFromMixed')(k);this._items.forEach(function(m){if(c('SelectableMenuUtils').doesItemSupportSelect(m))if(c('arrayContains')(l,m.getValue())){m.select();}else if(c('SelectableMenuUtils').isSelected(m))m.deselect();});this.inform('change',this.getSelection());};j.prototype._handleItemClick=function(k,l){'use strict';if(!c('SelectableMenuUtils').doesItemSupportSelect(k))return i._handleItemClick.call(this,k,l);var m=this.inform('itemclick',{item:k,event:l});if(m)return;if(this._config.multiple){var n=c('SelectableMenuUtils').isSelected(k)?k.deselect():k.select();if(n!==false)this.inform('change',this.getSelection());}else{if(!c('SelectableMenuUtils').isSelected(k))if(k.select()!==false){this._items.forEach(function(o){if(c('SelectableMenuUtils').isSelected(o)&&o!==k)o.deselect();});this.inform('change',this.getSelection());}this.done();}return k.handleClick(l);};j.prototype.getSelection=function(){'use strict';var k=[];this._items.forEach(function(l){if(c('SelectableMenuUtils').isSelected(l))k.push({label:l.getLabel(),value:l.getValue(),item:l});});if(!this._config.multiple)k=k[0];return k;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('MenuTheme',['cx'],(function a(b,c,d,e,f,g,h){f.exports={className:"_569t"};}),null);
__d('ContextualLayerPositionClassOnContext',['cx','CSS'],(function a(b,c,d,e,f,g,h){function i(k){'use strict';this._layer=k;}i.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){c('CSS').removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};i.prototype._updateClassName=function(k,l){'use strict';var m=this._layer.getContext(),n=j(l);if(this._prevClassName){if(this._prevClassName===n)return;c('CSS').removeClass(m,this._prevClassName);}c('CSS').addClass(m,n);this._prevClassName=n;};function j(k){var l=k.getAlignment(),m=k.getPosition();if(m==='below'){if(l==='left'){return "_nk";}else if(l==='right'){return "_nl";}else return "_nm";}else if(m==='above'){if(l==='left'){return "_nn";}else if(l==='right'){return "_no";}else return "_np";}else if(m==='left'){return "_nq";}else return "_nr";}Object.assign(i.prototype,{_subscription:null,_prevClassName:null});f.exports=i;}),null);
__d('ReactSpeedHelper',['LogBuffer','ReactDOM'],(function a(b,c,d,e,f,g){var h={enableRenderMeasurements:function i(){if(!c('ReactDOM').enableRenderMeasurements)return;c('ReactDOM').enableRenderMeasurements();},getMetrics:function i(j,k){return c('LogBuffer').read('react_speed').filter(function(l){return ((j==null||l.begin>=j)&&(k==null||l.end<=k));});}};f.exports=h;}),null);
__d('sourceMetaToString',[],(function a(b,c,d,e,f,g){function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;}),null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],(function a(b,c,d,e,f,g){function h(j,k){var l={};c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){var n=k[m];if(n)l[m]=n+j;});return l;}var i={getAsyncRequestTimings:function j(k){if(!k||!c('performance').timing||!c('performance').getEntriesByName)return undefined;var l=c('performance').getEntriesByName(k);if(l.length===0)return undefined;return h(c('performance').timing.navigationStart,l[0]);},getNavTimings:function j(){if(!c('performance').timing)return undefined;return h(0,c('performance').timing);}};f.exports=i;}),null);
__d('ResourceTimingBootloaderHelper',['Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','URI','forEachObject','isEmpty','performance'],(function a(b,c,d,e,f,g){var h={},i={},j=['.mp4','.m4v','.mpd','m4a'];function k(r){for(var s=j,t=Array.isArray(s),u=0,s=t?s:s[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var v;if(t){if(u>=s.length)break;v=s[u++];}else{u=s.next();if(u.done)break;v=u.value;}var w=v;if(r.endsWith(w))return true;}return false;}function l(r,s,t,u,v,w){if(!c('performance').timing||!c('performance').getEntriesByType)return;var x={};if(t)x=c('ImageTimingHelper').getImageTimings(u).sort(function(ra,sa){return ra.ts-sa.ts;}).reduce(function(ra,sa){if(ra[sa.uri])return ra;ra[sa.uri]=sa.pagelet;return ra;},{});var y=c('performance').getEntriesByType('resource'),z=0,aa=0,ba=0,ca=0;for(var da=0;da<y.length;da++){var ea=y[da];if(ea.duration<=0||ea.startTime<s||v!=null&&ea.responseEnd!=null&&v<ea.responseEnd)continue;var fa='',ga='',ha='',ia='',ja='',ka=ea.initiatorType;switch(ka){case 'css':case 'link':case 'script':var la=p(ea.name);ga=la[0];fa=la[1];if(!ga||!fa)continue;if(fa==='css'||fa==='js'){ia=fa;var ma=i[ea.name]||aa++;ha=ma+'_'+ga;}else{var na=o(ea.name);ja=na[0];ia=na[1];ha=z+++'_'+ja;}break;case 'img':ha=z+++'_'+m(ea.name);ia='img';break;case 'iframe':ha=ba+++'_'+m(ea.name)+n(ea.name);ia='iframe';break;case 'xmlhttprequest':if(w){var oa=m(ea.name),pa=n(ea.name);if(k(pa)){ha=ca+++'_'+oa+pa;ia='video';break;}}default:continue;}if(r[ea.name]==undefined)r[ea.name]=[];var qa={};c('forEachObject')(c('ResourceTimingMetricsEnumJS'),function(ra){var sa=ea[ra];if(sa)qa[ra]=sa+c('performance').timing.navigationStart;});qa.type=ia;qa.desc=ha;if(ia=='img'&&x.hasOwnProperty(ea.name))qa.pagelet=x[ea.name];qa.transferSize=ea.transferSize;qa.encodedBodySize=ea.encodedBodySize;r[ea.name].push(qa);}}function m(r){var s=new (c('URI'))(r).getDomain();return s;}function n(r){var s=new (c('URI'))(r).getPath();return s;}function o(r){return [m(r),'img'];}function p(r){var s=r.match(/\/rsrc\.php\/.*\/([^\?]+)/);if(!s)return [];var t=s[1],u='',v=t.match(/\.(\w+)$/);if(v)u=v[1];return [t,u];}var q={addBootloaderMetricsToResourceTimings:function r(){var s=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],t=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],u=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();var v={};c('forEachObject')(i,function(y,z){v[y]=z;});var w={bootload:true,js_exec:true,start_bootload:true,tag_bootload:true},x=[];c('forEachObject')(t,function(y,z){var aa=z.indexOf('/');if(aa===-1)return;var ba=z.substring(0,aa);if(!w[ba])return;x.push(z);var ca=z.substring(aa+1),da=v[ca];if(!da){da=ca;ca=i[da];if(!ca)return;}if(da.startsWith('data:'))da='inlined resource: '+ca;if(s[da]==null)s[da]=[{}];s[da].forEach(function(ea){ea.bootloader_hash=ca;ea[ba]=y;});});if(!u)x.forEach(function(y){return delete t[y];});return s;},getLastTTIAndE2EImageResponseEnds:function r(s,t,u){var v={TTI:s,E2E:t};if(!c('performance').timing)return v;var w=u.filter(function(z){return z.ts<=s;}).map(function(z){return z.uri;}).reduce(function(z,aa){z[aa]=true;return z;},{}),x=u.map(function(z){return z.uri;}).reduce(function(z,aa){z[aa]=true;return z;},{});for(var y in h)h[y].forEach(function(z){if(z.type==='img'){if(w[y])v.TTI=Math.max(v.TTI,z.responseEnd);if(x[y])v.E2E=Math.max(v.E2E,z.responseEnd);}});return v;},getMetrics:function r(s,t,u,v,w){h={};if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();l(h,s,t,u,v,w);return h;}};f.exports=q;}),null);
__d('TimeSliceHelper',['ArtilleryExperiments','LogBuffer','Map','ReactSpeedHelper','sourceMetaToString','forEachObject'],(function a(b,c,d,e,f,g){var h=function j(k,l){return Math.round((k-l)*1000);},i={formatMetricsForTransport:function j(k){var l=[],m=[],n=[],o=[],p=new (c('Map'))(),q=new (c('Map'))(),r=0,s=function u(v,w,x){var y=void 0;if(w.has(v)){y=w.get(v);}else{y=x.length;w.set(v,y);x.push(v);}return y;},t=[];if(k!=null)k.forEach(function(u){var v=h(u.begin,r),w=h(u.end,u.begin);r=u.end;var x=s(u.name,p,l),y=[v,w,x];if(u.activeRefTreeIds!=null){var z=u.activeRefTreeIds.slice();z.unshift(t.length);o.push(z);}var aa=u.counters||{},ba=Object.keys(aa).filter(function(fa){return aa[fa]!==0;}).sort(),ca=void 0;if(ba.length>0){var da=ba.join(),ea=s(da,q,n);ca=ba.map(function(fa){return aa[fa];});ca.unshift(ea);}else ca=[];if(u.id)y.push(u.id);if(u.parentID)y.push(u.parentID);t.push(y);m.push(ca);});return {version:'compact',items:t,names:l,counters:m,counterSchemas:n,allActiveRefTreeIds:o};},getMetrics:function j(k,l,m,n,o){var p=c('LogBuffer').read('time_slice'),q=c('LogBuffer').read('time_slice_heartbeat'),r=c('ReactSpeedHelper').getMetrics().map(function(y){return babelHelpers['extends']({},y,{desc:'React['+y.name+']'});}),s=p.concat(q,r),t,u=[],v=function y(z){var aa;if(z.guard){var ba=c('sourceMetaToString')(z),ca=z.guard.toString();aa=ba?ca+' at '+ba:ca;}else if(z.desc){aa=z.desc;}else aa='JS['+z.count+']';var da={begin:z.begin,end:z.end,name:aa,counters:z.counters,activeRefTreeIds:o?z.activeRefTreeIds:[]};if(c('ArtilleryExperiments').artillery_timeslice_edges){da.id=z.id;da.parentID=z.parentID;}u.push(da);},w=function y(){if(t)v(t.count==1?t.first:t);t=null;},x=function y(z,aa){c('forEachObject')(aa,function(ba,ca){var da=z[ca]||0;z[ca]=da+ba;});};s.sort(function(y,z){if(y.begin!==z.begin){return y.begin-z.begin;}else if(y.end!==z.end){return y.end-z.end;}else return 0;}).forEach(function(y){if(k&&y.end<k||l&&y.begin>l)return;if(y.end-y.begin<m){if(t&&y.begin-t.end<n){t.end=y.end;t.count++;x(t.counters,y.counters);if(y.activeRefTreeIds)t.activeRefTreeIds.concat(y.activeRefTreeIds);}else{w();t={begin:y.begin,end:y.end,count:1,first:y,guard:false,id:undefined,parentID:undefined,counters:{},activeRefTreeIds:[]};}}else{w();v(y);}});w();return u;}};f.exports=i;}),null);
__d('PerfXFlusher',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){var i='perfx_custom_logger_endpoint',j=['perfx_page','perfx_page_type','lid'];function k(m){j.forEach(function(n){return h(n in m,'PerfXFlusher: Field "%s" missing in the PerfX payload',n);});}var l={flush:function m(n){k(n);c('Banzai').post(i,n,{signal:true});},registerToSendWithBeacon:function m(n){c('Banzai').registerToSendWithBeacon(i,n);}};f.exports=l;}),null);
__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){function h(){return self.__SW_CACHE__===1;}f.exports=h;}),null);
__d('PerfXLogger',['DataAttributeUtils','PerfXFlusher','NavigationMetrics','NavigationTimingHelper','Set','forEachObject','performanceAbsoluteNow','setTimeoutAcrossTransitions','pageLoadedViaSWCache'],(function a(b,c,d,e,f,g){var h={},i={},j=65*1000,k=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],l={},m={_listenersSetUp:false,_setupListeners:function n(){if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();c('PerfXFlusher').registerToSendWithBeacon(function(){var o=[];c('forEachObject')(h,function(p,q){if(!h[q].sent){var r=this.getPayload(q,'unload fired');if(r!=null)o.push(r);}}.bind(this));h={};return o;}.bind(this));this._listenersSetUp=true;},_init:function n(o){var p=o.lid;if(p==null)return;var q=i[p];delete i[p];h[p]=babelHelpers['extends']({tags:new (c('Set'))(q||[]),sent:false},o);this._registerTimeoutSendback(p);this._setupListeners();},initWithNavigationMetricsLID:function n(o,p){var q=c('NavigationMetrics').getFullPageLoadLid();if(!q)return;this._init(babelHelpers['extends']({},p,{lid:q}));if(o&&o.always)for(var r=0;r<o.always.length;r++)m.addTag(q,o.always[r]);if(o&&o.swCache&&c('pageLoadedViaSWCache')())for(var s=0;s<o.swCache.length;s++)m.addTag(q,o.swCache[s]);},init:function n(o,p){if(p!=null&&o.lid!=null)l[o.lid]=p;this._init(o);},addTag:function n(o,p){var q=h[o];if(q){q.tags.add(p);return;}if(!i[o])i[o]=[];i[o].push(p);},addTagWithNavigationMetricsLID:function n(o){var p=c('NavigationMetrics').getFullPageLoadLid();if(!p)return;m.addTag(p,o);},_registerTimeoutSendback:function n(o){var p=this._getFetchStart(o),q=j;if(p!=null)q-=c('performanceAbsoluteNow')()-p;c('setTimeoutAcrossTransitions')(function(){return this._uploadPayload(o,'sendback time out');}.bind(this),q);},_subscribeToNavigationMetrics:function n(){c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.EVENT_OCCURRED,function(o,p){if(!(o in h))return;if(k.includes(p.event)&&p.hasOwnProperty('timestamp')&&p.timestamp!=null){h[o][p.event]=p.timestamp;if(p.visibilityState)h[o][p.event+'_page_visibility']=p.visibilityState;}});c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(o,p){var q=p.serverLID;if(!(q in h))return;k.forEach(function(event){if(p.hasOwnProperty(event)&&p[event]!=null)h[q][event]=p[event];});this._uploadPayload(q);}.bind(this));},_getPayloadWithOffset:function n(o,p,q){var r=h[o];if(r==null)return null;var s=Object.assign({},r),t=document.querySelector('[id^="hyperfeed_story_id"]');if(t){var u=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(u)s.mf_query_id=u.qid;}s.tags=Array.from(r.tags);this._adjustValues(s,p);s.fetch_start=p;if(s.perfx_page_type==='normal'){var v=c('NavigationTimingHelper').getNavTimings();if(v!=null&&v.navigationStart!=null)s.nav_to_fetch=p-v.navigationStart;}if(q!=null)s.sendback_reason=q;delete s.sent;return s;},_uploadPayload:function n(o,p){if(h[o]!=null&&!h[o].sent){var q=this.getPayload(o,p);if(q!=null){c('PerfXFlusher').flush(q);h[o].sent=true;}}},getPayload:function n(o,p){return this._getPayloadWithOffset(o,this._getFetchStart(o),p);},_getFetchStart:function n(o){if(!(o in h))return null;var p=void 0,q=h[o].perfx_page_type;if(q=='quickling'){if(!(o in l)){return null;}else p=c('NavigationTimingHelper').getAsyncRequestTimings(l[o]);}else p=c('NavigationTimingHelper').getNavTimings();if(!p||!p.fetchStart)return null;return p.fetchStart;},_adjustValues:function n(o,p){k.forEach(function(q){if(o.hasOwnProperty(q))o[q]-=p;});}};f.exports=m;}),null);