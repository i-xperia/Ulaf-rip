!function(e){"use strict";function s(){if(!d.hasClass("stm-transparent-header")&&d.hasClass("stm-header-fixed-mode")){var e=d.find(".stm-header-inner").outerHeight();d.css("min-height",e+"px")}}function a(){if(d.hasClass("stm-transparent-header")&&d.hasClass("stm-header-fixed-mode")){var s=e(window).scrollTop(),a=d.offset().top;s-300>a?d.addClass("stm-header-fixed"):d.removeClass("stm-header-fixed"),s-400>a?d.addClass("stm-header-fixed-intermediate"):d.removeClass("stm-header-fixed-intermediate")}if(!d.hasClass("stm-transparent-header")&&d.hasClass("stm-header-fixed-mode")){var s=e(window).scrollTop(),a=d.offset().top;s-300>a?d.addClass("stm-header-fixed"):d.removeClass("stm-header-fixed"),s-400>a?d.addClass("stm-header-fixed-intermediate"):d.removeClass("stm-header-fixed-intermediate")}}var d=e(".stm-header");e(document).ready(function(){a(),s()}),e(window).load(function(){a(),s()}),e(window).resize(function(){a()}),e(window).scroll(function(){a()}),function(){e(".sliders").owlCarousel({loop:!0,nav:!0,items:1})}()}(jQuery);
//# sourceMappingURL=maps/header.js.map
