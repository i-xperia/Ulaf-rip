self.CavalryLogger&&CavalryLogger.start_js(["o58me"]),__d("VideoAutoplayControllerBase",["Arbiter","DesktopHscrollUnitEventConstants","Event","VideoPlayerExperiments","VideoPlayerAbortLoadingExperiment","VideoPlayerReason","Visibility","destroyOnUnload","SubscriptionsHandler","throttle","setTimeoutAcrossTransitions","emptyFunction"],function(e,t,o,i,n,r){function l(e,t){var o=[];return function(){var i=Date.now();o.unshift(i);for(var n=0;o[++n]+t>i;);return o=o.slice(0,n),o.length<=e}}function s(e,o,i){var n=null;return function(){for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return o()?(e.apply(void 0,l),t("emptyFunction").thatReturnsFalse):(n||function(){var t=setTimeout(function(){n=null,e.apply(void 0,l)},i);n=function(){return!!n&&(clearTimeout(t),n=null,!0)}}(),n)}}function a(e){"use strict";this.$VideoAutoplayControllerBase3=null,this.$VideoAutoplayControllerBase2=null,this.$VideoAutoplayControllerBase8=[],this.$VideoAutoplayControllerBase1=e,this.$VideoAutoplayControllerBase4=null,this.$VideoAutoplayControllerBase5=new(t("SubscriptionsHandler")),t("destroyOnUnload")(function(){this.$VideoAutoplayControllerBase8=[],this.$VideoAutoplayControllerBase3=null,this.$VideoAutoplayControllerBase4&&(this.$VideoAutoplayControllerBase4.remove(),this.$VideoAutoplayControllerBase4=null),this.$VideoAutoplayControllerBase5.release()}.bind(this)),t("VideoPlayerExperiments").autoplayMaxCallsPerWindow&&(this.$VideoAutoplayControllerBase6=s(function(e){var t=this.$VideoAutoplayControllerBase3;t&&t.playWithoutUnmute(e)}.bind(this),l(t("VideoPlayerExperiments").autoplayMaxCallsPerWindow,t("VideoPlayerExperiments").autoplayThrottleWindow),t("VideoPlayerExperiments").autoplayThrottleDelay)),this.$VideoAutoplayControllerBase7=t("emptyFunction").thatReturnsFalse}var d=3e3;a.prototype.getVideoUnits=function(){"use strict";return this.$VideoAutoplayControllerBase8},a.prototype.setVideoUnits=function(e){"use strict";this.$VideoAutoplayControllerBase8=e},a.prototype.addVideoUnit=function(e){"use strict";this.$VideoAutoplayControllerBase8.push(e)},a.prototype.getPlayingVideoUnit=function(){"use strict";return this.$VideoAutoplayControllerBase3},a.prototype.setPlayingVideoUnit=function(e){"use strict";this.$VideoAutoplayControllerBase3=e,this.$VideoAutoplayControllerBase3&&this.setupPlayingVideoUnitSubscriptions()},a.prototype.playVideo=function(e,t){"use strict";if(this.setPlayingVideoUnit(e),this.$VideoAutoplayControllerBase3){var o=this.$VideoAutoplayControllerBase6;o?this.$VideoAutoplayControllerBase7=o.call(this,t):this.$VideoAutoplayControllerBase3.playWithoutUnmute(t)}},a.prototype.setupPlayingVideoUnitSubscriptions=function(){"use strict";throw new Error("Should be overridden")},a.prototype.addSubscriberVideoUnit=function(){"use strict";this.getVideoUnits().length||(this.$VideoAutoplayControllerBase5.addSubscriptions(t("Event").listen(window,"resize",this.updateAutoplay.bind(this)),t("Event").listen(window,"blur",this.$VideoAutoplayControllerBase9.bind(this)),t("Event").listen(window,"focus",this.$VideoAutoplayControllerBase10.bind(this)),t("Visibility").addListener(t("Visibility").HIDDEN,this.$VideoAutoplayControllerBase9.bind(this)),t("Visibility").addListener(t("Visibility").VISIBLE,this.$VideoAutoplayControllerBase10.bind(this)),t("Arbiter").subscribe(t("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this))),this.$VideoAutoplayControllerBase11()||this.$VideoAutoplayControllerBase12())},a.prototype.$VideoAutoplayControllerBase9=function(){"use strict";this.$VideoAutoplayControllerBase2||(this.$VideoAutoplayControllerBase2=this.getPlayingVideoUnit(),this.pausePlayingVideo(t("VideoPlayerReason").PAGE_VISIBILITY))},a.prototype.$VideoAutoplayControllerBase10=function(){"use strict";this.$VideoAutoplayControllerBase2&&(this.playVideo(this.$VideoAutoplayControllerBase2,t("VideoPlayerReason").PAGE_VISIBILITY),this.$VideoAutoplayControllerBase2=null)},a.prototype.$VideoAutoplayControllerBase12=function(){"use strict";this.$VideoAutoplayControllerBase4&&this.$VideoAutoplayControllerBase4.remove(),this.$VideoAutoplayControllerBase4=t("Event").listen(window,"scroll",t("throttle")(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase1))},a.prototype.$VideoAutoplayControllerBase11=function(){"use strict";return!!this.$VideoAutoplayControllerBase4},a.prototype.getClosestVideoUnits=function(e){"use strict";return this.$VideoAutoplayControllerBase8.filter(function(e){return e.getDistanceToViewport()>=0}).sort(function(e,t){return e.getDistanceToViewport()-t.getDistanceToViewport()}).slice(0,e)},a.prototype.getVisibleUnits=function(){"use strict";var e=[];return this.$VideoAutoplayControllerBase8.forEach(function(t){t.isVisible()?(e.push(t),t.wasVisible||(t.wasVisible=!0,t.logDisplayed())):t.wasVisible=!1}),e},a.prototype.pausePlayingVideo=function(e){"use strict";var o=this.$VideoAutoplayControllerBase3;o&&(this.$VideoAutoplayControllerBase7()||o.pause(e),t("VideoPlayerAbortLoadingExperiment").canAbort&&"function"==typeof o.getIsInChannel&&!o.getIsInChannel()&&t("setTimeoutAcrossTransitions")(function(){o.isState("playing")||"function"!=typeof o.abortLoading||o.abortLoading()},d),this.$VideoAutoplayControllerBase3=null)},a.prototype.updateAutoplay=function(){"use strict";throw new Error("Should be overridden")},n.exports=a},null),__d("XVideoAutoplayNuxAsyncController",["XController"],function(e,t,o,i,n,r){n.exports=t("XController").create("/video/autoplay/nux/",{})},null),__d("XVideoAutoplayNuxDismissAsyncController",["XController"],function(e,t,o,i,n,r){n.exports=t("XController").create("/video/autoplay/nux/dismiss/",{})},null),__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],function(e,t,o,i,n,r){n.exports=t("XController").create("/video/autoplay/nux/log/view/",{})},null),__d("VideoAutoplayControllerX",["csx","AsyncRequest","DOM","Event","Network","ifRequired","Run","SubscriptionsHandler","VideoAutoplayControllerBase","VideoPlayerExperiments","VideoPlayerPreloadExperiment","VideoPlayerReason","XVideoAutoplayNuxAsyncController","XVideoAutoplayNuxDismissAsyncController","XVideoAutoplayNuxLogViewAsyncController","destroyOnUnload","getViewportDimensions"],function(e,t,o,i,n,r,l){function s(){return!t("VideoPlayerExperiments").delayAutoplayUntilAfterLoad||c}function a(){"use strict";u.constructor.call(this,y),this.$VideoAutoplayControllerX1=new(t("SubscriptionsHandler")),this.$VideoAutoplayControllerX2=new(t("SubscriptionsHandler")),this.$VideoAutoplayControllerX3=!0,this.$VideoAutoplayControllerX4=!0,this.$VideoAutoplayControllerX5=null,this.$VideoAutoplayControllerX6=null,this.$VideoAutoplayControllerX7=!1,this.$VideoAutoplayControllerX8=null,this.$VideoAutoplayControllerX9=!1,this.$VideoAutoplayControllerX10=!1,this.$VideoAutoplayControllerX11=!1;var e=t("XVideoAutoplayNuxAsyncController").getURIBuilder().getURI();new(t("AsyncRequest"))(e).setAllowCrossPageTransition().send(),t("destroyOnUnload")(function(){this.$VideoAutoplayControllerX12(),this===p&&(p=null)}.bind(this)),t("Run").onAfterLoad(function(){c=!0,t("VideoPlayerExperiments").delayAutoplayUntilAfterLoad&&p&&p.updateAutoplay()})}var d,u,p=null,y=500,c=!1;d=babelHelpers.inherits(a,t("VideoAutoplayControllerBase")),u=d&&d.prototype,a.registerVideoUnit=function(e){"use strict";null==p&&(p=new a),p.addSubscriberVideoUnit(),p.addVideoUnit(e),t("VideoPlayerExperiments").enforceOnlyOneVideoPlayingWithAudio&&p.$VideoAutoplayControllerX13(e),p.$VideoAutoplayControllerX14(),e.isVisible()&&s()&&p.updateAutoplay(),p.shouldRestoreAllSubsequentStreamBufferSizes()&&p.restoreStreamBufferSize()},a.setShouldAutoplay=function(e){"use strict";null==p&&(p=new a),p.$VideoAutoplayControllerX3=e,p.$VideoAutoplayControllerX4=e,p.updateAutoplay()},a.prototype.$VideoAutoplayControllerX12=function(){"use strict";this.$VideoAutoplayControllerX1.release(),this.$VideoAutoplayControllerX2.release()},a.setAutoplayNux=function(e,o){"use strict";if(null!=p){p.$VideoAutoplayControllerX5=e,p.$VideoAutoplayControllerX6=o,p.$VideoAutoplayControllerX7=!0;var i=t("DOM").find(o.getContentRoot(),"._5cqr");t("Event").listen(i,"click",function(){p.$VideoAutoplayControllerX15()});var n=t("DOM").scry(o.getContentRoot(),"._36gl")[0];n&&t("Event").listen(n,"click",function(){p.$VideoAutoplayControllerX15()})}},a.prototype.$VideoAutoplayControllerX15=function(){"use strict";this.$VideoAutoplayControllerX6.hide(),this.$VideoAutoplayControllerX7=!1;var e=t("XVideoAutoplayNuxDismissAsyncController").getURIBuilder().getURI();new(t("AsyncRequest"))(e).setAllowCrossPageTransition().send()},a.prototype.setupPlayingVideoUnitSubscriptions=function(){"use strict";this.getPlayingVideoUnit().addListener&&(this.$VideoAutoplayControllerX1.release(),this.$VideoAutoplayControllerX1.engage(),this.getPlayingVideoUnit().isLooping()||this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener("finishPlayback",function(){this.setPlayingVideoUnit(null)}.bind(this))),this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener("turnOffAutoplay",function(){this.setPlayingVideoUnit(null)}.bind(this)),this.getPlayingVideoUnit().addListener("pausePlayback",function(){this.$VideoAutoplayControllerX14()}.bind(this)),this.getPlayingVideoUnit().addListener("finishPlayback",function(){this.$VideoAutoplayControllerX14()}.bind(this)),t("Network").addListener("online",function(){this.$VideoAutoplayControllerX14()}.bind(this)),t("Network").addListener("offline",function(){this.$VideoAutoplayControllerX14()}.bind(this))))},a.prototype.$VideoAutoplayControllerX14=function(){"use strict";if(t("VideoPlayerExperiments").webVideosBlockAutoplayWhenOffline){if(!t("Network").isOnline())return this.$VideoAutoplayControllerX4=this.$VideoAutoplayControllerX3,void(this.$VideoAutoplayControllerX3=!1);this.$VideoAutoplayControllerX3=this.$VideoAutoplayControllerX4}for(var e=this.getVideoUnits(),o=0;o<e.length;o++){var i=e[o].getVideoPlayerController();null!==i&&("0"===i.getDataInsertionPosition()&&(this.$VideoAutoplayControllerX9=!0,this.$VideoAutoplayControllerX10===!1&&(i.restoreStreamBufferSize(),i.once("beginPlayback",function(){this.$VideoAutoplayControllerX11=!0,this.restoreStreamBufferSize()}.bind(this)),this.$VideoAutoplayControllerX10=!0)),i.updateAutoplayRestrained())}this.$VideoAutoplayControllerX9||this.restoreStreamBufferSize()},a.prototype.shouldRestoreAllSubsequentStreamBufferSizes=function(){"use strict";return!this.$VideoAutoplayControllerX9||this.$VideoAutoplayControllerX11},a.prototype.restoreStreamBufferSize=function(){"use strict";for(var e=this.getVideoUnits(),t=0;t<e.length;t++){var o=e[t].getVideoPlayerController();null!==o&&o.restoreStreamBufferSize()}},a.prototype.$VideoAutoplayControllerX13=function(e){"use strict";if(e.addListener){var o=function(){var o=e.getVideoPlayerController();if(!o.isMuted()&&o.isState("playing")){if(this.$VideoAutoplayControllerX8&&this.$VideoAutoplayControllerX8!==e){var i=this.$VideoAutoplayControllerX8.getVideoPlayerController(),n=i.getOption("VideoWithLiveBroadcast","isLive");n?i.mute():i.pause(t("VideoPlayerReason").USER)}this.$VideoAutoplayControllerX8=e}}.bind(this);this.$VideoAutoplayControllerX2.addSubscriptions(e.addListener("beginPlayback",o),e.addListener("changeVolume",o),e.addListener("unmuteVideo",o))}},a.prototype.showAutoplayNUX=function(e){"use strict";if(this.$VideoAutoplayControllerX6&&!this.$VideoAutoplayControllerX6.isShown()){var o=e.getVideoPlayerController().getRootNode();t("DOM").prependContent(o,this.$VideoAutoplayControllerX5),this.$VideoAutoplayControllerX6.show();var i=t("XVideoAutoplayNuxLogViewAsyncController").getURIBuilder().getURI();new(t("AsyncRequest"))(i).setAllowCrossPageTransition().send()}this.$VideoAutoplayControllerX7=!1},a.getChannelVideos=function(){"use strict";return p?p.getVideoUnits().filter(function(e){return e.getIsInChannel()}):null},a.prototype.updateAutoplay=function(){"use strict";if(!this.$VideoAutoplayControllerX3)return void this.pausePlayingVideo(t("VideoPlayerReason").AUTOPLAY);var e=this.getVisibleUnits();this.getClosestVideoUnits(t("VideoPlayerPreloadExperiment").preloadVideosCount).forEach(function(e){return e.preload()});var o=e.length,i=null;if(1==o)i=e[0],i=i.isAutoplayable()?i:null;else if(o>1){var n=t("getViewportDimensions")().height/2;e.forEach(function(e){if(e.isAutoplayable()){var t=e.getDOMPosition(),o=t.y+t.height/2,r=Math.abs(o-n);e.playPriority=r,(!i||e.playPriority<i.playPriority)&&(i=e)}})}this.getPlayingVideoUnit()?i!=this.getPlayingVideoUnit()&&(this.pausePlayingVideo(t("VideoPlayerReason").AUTOPLAY),this.playVideo(i,t("VideoPlayerReason").AUTOPLAY),this.$VideoAutoplayControllerX7&&this.showAutoplayNUX(i)):i&&(this.playVideo(i,t("VideoPlayerReason").AUTOPLAY),this.$VideoAutoplayControllerX7&&this.showAutoplayNUX(i))},n.exports=a},null),__d("VideoAutoplayPlayerBase",["EventEmitter"],function(e,t,o,i,n,r){function l(){for(var e,t,o=arguments.length,i=Array(o),n=0;n<o;n++)i[n]=arguments[n];return t=(e=a.constructor).call.apply(e,[this].concat(i)),this.wasVisible=!1,t}var s,a;s=babelHelpers.inherits(l,t("EventEmitter")),a=s&&s.prototype,l.prototype.isVisible=function(){"use strict";throw new Error("Should be overridden")},l.prototype.getDistanceToViewport=function(){"use strict";throw new Error("Should be overridden")},l.prototype.getVideoPlayerController=function(){"use strict";return null},l.prototype.logDisplayed=function(){"use strict";throw new Error("Should be overridden")},l.prototype.playWithoutUnmute=function(e){"use strict";throw new Error("Should be overridden")},l.prototype.pause=function(e){"use strict";throw new Error("Should be overridden")},l.prototype.isAutoplayable=function(){"use strict";throw new Error("Should be overridden")},l.prototype.getDOMPosition=function(){"use strict";throw new Error("Should be overridden")},l.prototype.isLooping=function(){"use strict";throw new Error("Should be overridden")},l.prototype.isState=function(e){"use strict";throw new Error("Should be overridden")},n.exports=l},null),__d("VideoCTAEndscreen",["cx","Arbiter","AttachmentRelatedShareConstants","CSS","Event","Focus","SubscriptionsHandler","VideoCTALoggingConfig","VideoPlayerReason","VideoPlayerLoggerEvent","logVideosClickTracking"],function(e,t,o,i,n,r,l){function s(e,o){"use strict";this.$VideoCTAEndscreen1=e,this.$VideoCTAEndscreen2=o.endscreenElement,this.$VideoCTAEndscreen3=o.replayElement,this.$VideoCTAEndscreen4=o.ctaElement,this.$VideoCTAEndscreen5=o.isPausescreen,this.$VideoCTAEndscreen6=new(t("SubscriptionsHandler")),this.$VideoCTAEndscreen6.addSubscriptions(t("Event").listen(this.$VideoCTAEndscreen3,"click",function(){return this.$VideoCTAEndscreen7()}.bind(this)),e.addListener("beginPlayback",function(){return this.$VideoCTAEndscreen8()}.bind(this)),e.addListener("VideoChannelController/exitChannel",function(){e.isState("finished")&&this.$VideoCTAEndscreen9()}.bind(this))),this.$VideoCTAEndscreen4&&this.$VideoCTAEndscreen6.addSubscriptions(t("Event").listen(this.$VideoCTAEndscreen4,"click",function(){return this.$VideoCTAEndscreen10()}.bind(this))),this.$VideoCTAEndscreen5?this.$VideoCTAEndscreen6.addSubscriptions(e.addListener("pausePlayback",function(){return this.$VideoCTAEndscreen11()}.bind(this))):this.$VideoCTAEndscreen6.addSubscriptions(e.addListener("finishPlayback",function(){return this.$VideoCTAEndscreen9()}.bind(this)))}s.prototype.$VideoCTAEndscreen7=function(){"use strict";var e={reason:t("VideoPlayerReason").USER};this.$VideoCTAEndscreen1.clickVideo(),this.$VideoCTAEndscreen1.isState("paused")?t("VideoCTALoggingConfig").shouldLogUnpausedEvent&&this.$VideoCTAEndscreen1.logEvent(t("VideoPlayerLoggerEvent").UNPAUSED,e):this.$VideoCTAEndscreen1.isState("finished")&&this.$VideoCTAEndscreen1.logEvent(t("VideoPlayerLoggerEvent").REPLAYED,e);var o=this.$VideoCTAEndscreen1.getVideoNode();t("logVideosClickTracking")(o),t("Focus").set(o)},s.prototype.$VideoCTAEndscreen10=function(){"use strict";t("Arbiter").inform(t("AttachmentRelatedShareConstants").FBVIDEO_CLICK,{attachment:this.$VideoCTAEndscreen1.getRootNode(),fbvideo_id:this.$VideoCTAEndscreen1.getVideoID()})},s.prototype.$VideoCTAEndscreen9=function(){"use strict";this.$VideoCTAEndscreen1.getIsInChannel()||this.$VideoCTAEndscreen11()},s.prototype.$VideoCTAEndscreen11=function(){"use strict";t("CSS").addClass(this.$VideoCTAEndscreen2,"_1qbf")},s.prototype.$VideoCTAEndscreen8=function(){"use strict";t("CSS").removeClass(this.$VideoCTAEndscreen2,"_1qbf")},n.exports=s},null);
//# sourceMappingURL=maps/sVmfH-9BWs5.js.map
