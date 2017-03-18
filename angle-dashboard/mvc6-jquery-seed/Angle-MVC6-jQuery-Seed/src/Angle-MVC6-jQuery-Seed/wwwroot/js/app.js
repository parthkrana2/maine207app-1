!function(e,t,o,n){if("undefined"==typeof o)throw new Error("This application's JavaScript requires jQuery");o(function(){var e=o("body");(new StateToggler).restoreState(e),o("#chk-fixed").prop("checked",e.hasClass("layout-fixed")),o("#chk-collapsed").prop("checked",e.hasClass("aside-collapsed")),o("#chk-collapsed-text").prop("checked",e.hasClass("aside-collapsed-text")),o("#chk-boxed").prop("checked",e.hasClass("layout-boxed")),o("#chk-float").prop("checked",e.hasClass("aside-float")),o("#chk-hover").prop("checked",e.hasClass("aside-hover")),o(".offsidebar.hide").removeClass("hide")})}(window,document,window.jQuery),function(e,t,o,n){o(function(){o('[data-toggle="popover"]').popover(),o('[data-toggle="tooltip"]').tooltip({container:"body"}),o(".dropdown input").on("click focus",function(e){e.stopPropagation()})})}(window,document,window.jQuery),function(e,t,o){"use strict";var n="[data-reset-key]";e(o).on("click",n,function(o){o.preventDefault();var n=e(this).data("resetKey");n?(e.localStorage.remove(n),t.location.reload()):e.error("No storage key specified for reset.")})}(jQuery,window,document),function(e,t,o,n){e.APP_COLORS={primary:"#5d9cec",success:"#27c24c",info:"#23b7e5",warning:"#ff902b",danger:"#f05050",inverse:"#131e26",green:"#37bc9b",pink:"#f532e5",purple:"#7266ba",dark:"#3a3f51",yellow:"#fad732","gray-darker":"#232735","gray-dark":"#3a3f51",gray:"#dde6e9","gray-light":"#e4eaec","gray-lighter":"#edf1f2"},e.APP_MEDIAQUERY={desktopLG:1200,desktop:992,tablet:768,mobile:480}}(window,document,window.jQuery),function(e,t,o,n){var a="en",i="/i18n",r="site",s="jq-appLang";o(function(){function e(e){o("[data-localize]").localize(r,e)}function t(e){var t=e.parents(".dropdown-menu");if(t.length){var o=t.prev("button, a");o.text(e.text())}}if(o.fn.localize){var n=o.localStorage.get(s)||a,c={language:n,pathPrefix:i,callback:function(e,t){o.localStorage.set(s,n),t(e)}};e(c),o("[data-set-lang]").on("click",function(){n=o(this).data("setLang"),n&&(c.language=n,e(c),t(o(this)))})}})}(window,document,window.jQuery),function(e,t,o,n){o(function(){var e=new a,n=o("[data-search-open]");n.on("click",function(e){e.stopPropagation()}).on("click",e.toggle);var i=o("[data-search-dismiss]"),r='.navbar-form input[type="text"]';o(r).on("click",function(e){e.stopPropagation()}).on("keyup",function(t){27==t.keyCode&&e.dismiss()}),o(t).on("click",e.dismiss),i.on("click",function(e){e.stopPropagation()}).on("click",e.dismiss)});var a=function(){var e="form.navbar-form";return{toggle:function(){var t=o(e);t.toggleClass("open");var n=t.hasClass("open");t.find("input")[n?"focus":"blur"]()},dismiss:function(){o(e).removeClass("open").find('input[type="text"]').blur()}}}}(window,document,window.jQuery),function(e,t,o,n){function a(){var e=o("<div/>",{"class":"dropdown-backdrop"});e.insertAfter(".aside").on("click mouseenter",function(){s()})}function i(e){e.siblings("li").removeClass("open").end().toggleClass("open")}function r(e){s();var t=e.children("ul");if(!t.length)return o();if(e.hasClass("open"))return i(e),o();var n=o(".aside"),a=o(".aside-inner"),r=parseInt(a.css("padding-top"),0)+parseInt(n.css("padding-top"),0),c=t.clone().appendTo(n);i(e);var l=e.position().top+r-v.scrollTop(),d=f.height();return c.addClass("nav-floating").css({position:u()?"fixed":"absolute",top:l,bottom:c.outerHeight(!0)+l>d?0:"auto"}),c.on("mouseleave",function(){i(e),c.remove()}),c}function s(){o(".sidebar-subnav.nav-floating").remove(),o(".dropdown-backdrop").remove(),o(".sidebar li.open").removeClass("open")}function c(){return p.hasClass("touch")}function l(){return g.hasClass("aside-collapsed")||g.hasClass("aside-collapsed-text")}function u(){return g.hasClass("layout-fixed")}function d(){return g.hasClass("aside-hover")}var f,p,g,v,h;o(function(){f=o(e),p=o("html"),g=o("body"),v=o(".sidebar"),h=APP_MEDIAQUERY;var t=v.find(".collapse");t.on("show.bs.collapse",function(e){e.stopPropagation(),0===o(this).parents(".collapse").length&&t.filter(".in").collapse("hide")});var n=o(".sidebar .active").parents("li");d()||n.addClass("active").children(".collapse").collapse("show"),v.find("li > a + ul").on("show.bs.collapse",function(e){d()&&e.preventDefault()});var i=c()?"click":"mouseenter",s=o();v.on(i,".nav > li",function(){(l()||d())&&(s.trigger("mouseleave"),s=r(o(this)),a())});var u=v.data("sidebarAnyclickClose");"undefined"!=typeof u&&o(".wrapper").on("click.sidebar",function(e){if(g.hasClass("aside-toggled")){var t=o(e.target);t.parents(".aside").length||t.is("#user-block-toggle")||t.parent().is("#user-block-toggle")||g.removeClass("aside-toggled")}})})}(window,document,window.jQuery),function(e,t,o,n){o(function(){var t=o("body");toggle=new StateToggler,o("[data-toggle-state]").on("click",function(a){a.stopPropagation();var i=o(this),r=i.data("toggleState"),s=i.data("target"),c=i.attr("data-no-persist")!==n,l=s?o(s):t;r&&(l.hasClass(r)?(l.removeClass(r),c||toggle.removeState(r)):(l.addClass(r),c||toggle.addState(r))),o(e).resize()})}),e.StateToggler=function(){var e="jq-toggleState",t={hasWord:function(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e)},addWord:function(e,t){return this.hasWord(e,t)?void 0:e+(e?" ":"")+t},removeWord:function(e,t){return this.hasWord(e,t)?e.replace(new RegExp("(^|\\s)*"+t+"(\\s|$)*","g"),""):void 0}};return{addState:function(n){var a=o.localStorage.get(e);a=a?t.addWord(a,n):n,o.localStorage.set(e,a)},removeState:function(n){var a=o.localStorage.get(e);a&&(a=t.removeWord(a,n),o.localStorage.set(e,a))},restoreState:function(t){var n=o.localStorage.get(e);n&&t.addClass(n)}}}}(window,document,window.jQuery),function(e,t,o){"use strict";var n=e("html"),a=e(t);e.support.transition=function(){var e=function(){var e,t=o.body||o.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in n)if(void 0!==t.style[e])return n[e]}();return e&&{end:e}}(),e.support.animation=function(){var e=function(){var e,t=o.body||o.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(e in n)if(void 0!==t.style[e])return n[e]}();return e&&{end:e}}(),e.support.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},e.support.touch="ontouchstart"in t&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,e.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver||null,e.Utils={},e.Utils.debounce=function(e,t,o){var n;return function(){var a=this,i=arguments,r=function(){n=null,o||e.apply(a,i)},s=o&&!n;clearTimeout(n),n=setTimeout(r,t),s&&e.apply(a,i)}},e.Utils.removeCssRules=function(e){var t,o,n,a,i,r,s,c,l,u;e&&setTimeout(function(){try{for(u=document.styleSheets,a=0,s=u.length;s>a;a++){for(n=u[a],o=[],n.cssRules=n.cssRules,t=i=0,c=n.cssRules.length;c>i;t=++i)n.cssRules[t].type===CSSRule.STYLE_RULE&&e.test(n.cssRules[t].selectorText)&&o.unshift(t);for(r=0,l=o.length;l>r;r++)n.deleteRule(o[r])}}catch(d){}},0)},e.Utils.isInView=function(t,o){var n=e(t);if(!n.is(":visible"))return!1;var i=a.scrollLeft(),r=a.scrollTop(),s=n.offset(),c=s.left,l=s.top;return o=e.extend({topoffset:0,leftoffset:0},o),l+n.height()>=r&&l-o.topoffset<=r+a.height()&&c+n.width()>=i&&c-o.leftoffset<=i+a.width()?!0:!1},e.Utils.options=function(t){if(e.isPlainObject(t))return t;var o=t?t.indexOf("{"):-1,n={};if(-1!=o)try{n=new Function("","var json = "+t.substr(o)+"; return JSON.parse(JSON.stringify(json));")()}catch(a){}return n},e.Utils.events={},e.Utils.events.click=e.support.touch?"tap":"click",e.langdirection="rtl"==n.attr("dir")?"right":"left",e(function(){if(e.support.mutationobserver){var t=new e.support.mutationobserver(e.Utils.debounce(function(t){e(o).trigger("domready")},300));t.observe(document.body,{childList:!0,subtree:!0})}}),n.addClass(e.support.touch?"touch":"no-touch")}(jQuery,window,document),function(e,t,o,n){o(function(){})}(window,document,window.jQuery);