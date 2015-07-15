//Pull the trigger on Slick

$('.success-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.success-slider',
  dots: true,
  appendArrows: true,
  focusOnSelect: true
});

//Default theme JS

$.extend($.easing,
{
    def: 'easeOutQuad',
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

(function( $ ) {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    $.fn.navScroller = function(options) {
        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 800,
            activateParentNode: true,
        }, options );
        navItems = this;

        //attatch click listeners
    	navItems.on('click', function(event){
    		event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
        	$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeInOutExpo", function(){
                    disableScrollFn = false;
                }
            );
    	});

        //populate lookup of clicable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw

        // setup scroll listener
        $(document).scroll(function(){
            if (disableScrollFn) { return; }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        navItems.each(function(){
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (nav in navs) { $(navs[nav]).removeClass('active'); }
        $(navs[navID]).addClass('active');
    }
})( jQuery );


$(document).ready(function (){

    $('nav li a').navScroller();

    //section divider icon click gently scrolls to reveal the section
	$(".sectiondivider").on('click', function(event) {
    	$('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "linear");
	});

    //links going to other sections nicely scroll
	$(".container a").each(function(){
        if ($(this).attr("href").charAt(0) == '#'){
            $(this).on('click', function(event) {
        		event.preventDefault();
                var target = $(event.target).closest("a");
                var targetHight =  $(target.attr("href")).offset().top
            	$('html,body').animate({scrollTop: targetHight - 170}, 800, "easeInOutExpo");
            });
        }
	});

});

/**
 * photoset-grid - v1.0.1
 * 2014-12-03
 * jQuery plugin to arrange images into a flexible grid
 * http://stylehatch.github.com/photoset-grid/
 *
 * Copyright 2014 Jonathan Moore - Style Hatch
 */
!function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.options=a.extend({},g,c),this._defaults=g,this._name=f,this.init()}var f="photosetGrid",g={width:"100%",gutter:"0px",highresLinks:!1,lowresWidth:500,rel:"",borderActive:!1,borderWidth:"5px",borderColor:"#000000",borderRadius:"0",borderRemoveDouble:!1,onInit:function(){},onComplete:function(){}};e.prototype={init:function(){this.options.onInit(),this._setupRows(this.element,this.options),this._setupColumns(this.element,this.options)},_callback:function(a){this.options.onComplete(a)},_setupRows:function(b,c){if(c.layout)this.layout=c.layout;else if(a(b).attr("data-layout"))this.layout=a(b).attr("data-layout");else{for(var d="",e=1,f=0;f<a(b).find("img").length;f++)d+=e.toString();this.layout=d}this.rows=this.layout.split("");for(var g in this.rows)this.rows[g]=parseInt(this.rows[g],10);var h=a(b).find("img"),i=0;a.each(this.rows,function(a,b){var c=i,d=i+b;h.slice(c,d).wrapAll('<div class="photoset-row cols-'+b+'"></div>'),i=d}),a(b).find(".photoset-row:not(:last-child)").css({"margin-bottom":c.gutter})},_setupColumns:function(c,d){var e=this,f=function(e){function f(){var b=a(c).width().toString();b!==a(c).attr("data-width")&&(g.each(function(){var b=a(this).find("img:eq(0)");a(this).find("img").each(function(){var c=a(this);c.attr("height")<b.attr("height")&&(b=a(this)),parseInt(c.css("width"),10)>d.lowresWidth&&c.attr("data-highres")&&c.attr("src",c.attr("data-highres"))});var c=b.attr("height")*parseInt(b.css("width"),10)/b.attr("width"),e=Math.floor(.025*c);a(this).height(c-e),d.borderActive&&a(this).find(".photoset-content-border").each(function(){a(this).css({height:c-e})}),a(this).find("img").each(function(){var b=a(this).attr("height")*parseInt(a(this).css("width"),10)/a(this).attr("width"),d=.5*(c-b)+"px";a(this).css({"margin-top":d})})}),a(c).attr("data-width",b))}var g=a(c).find(".photoset-row"),h=a(c).find("img");d.highresLinks?(h.each(function(){var b;b=a(this).attr(a(this).attr("data-highres")?"data-highres":"src"),a(this).wrapAll('<a href="'+b+'" class="photoset-cell highres-link" />'),d.borderActive&&a(this).wrapAll('<span class="photoset-content-border" />')}),d.rel&&h.parent().attr("rel",d.rel)):h.each(function(){d.borderActive?(a(this).wrapAll('<div class="photoset-cell photoset-cell--border" />'),a(this).wrapAll('<div class="photoset-content-border" />')):a(this).wrapAll('<div class="photoset-cell" />')});var i=a(c).find(".photoset-cell"),j=a(c).find(".cols-1 .photoset-cell"),k=a(c).find(".cols-2 .photoset-cell"),l=a(c).find(".cols-3 .photoset-cell"),m=a(c).find(".cols-4 .photoset-cell"),n=a(c).find(".cols-5 .photoset-cell"),o=a(c).find(".photoset-content-border");a(c).css({width:d.width}),g.css({clear:"left",display:"block",overflow:"hidden"}),i.css({"float":"left",display:"block","line-height":"0","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),h.css({width:"100%",height:"auto"}),d.borderActive&&o.css({display:"block",border:d.borderWidth+" solid "+d.borderColor,"border-radius":d.borderRadius,overflow:"hidden","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e&&h.each(function(){a(this).attr("height",a(this).height()),a(this).attr("width",a(this).width())}),j.css({width:"100%"}),k.css({width:"50%"}),l.css({width:"33.3%"}),m.css({width:"25%"}),n.css({width:"20%"});var p=parseInt(d.gutter,10);a(c).find(".photoset-cell:not(:last-child)").css({"padding-right":p/2+"px"}),a(c).find(".photoset-cell:not(:first-child)").css({"padding-left":p/2+"px"}),d.borderRemoveDouble&&(a(c).find(".photoset-row").not(":eq(0)").find(".photoset-content-border").css({"border-top":"none"}),a(c).find(".photoset-row").not(".cols-1").find(".photoset-content-border").not(":eq(0)").css({"border-left":"none"})),f(),a(b).on("resize",function(){f()})},g=!0,h=!0;a(c).find("img").each(function(){h&=!!a(this).attr("height")&!!a(this).attr("width")}),g=!h,g?a(c).imagesLoaded(function(){f(g),e._callback(c)}):(f(g),e._callback(c))}},a.fn[f]=function(b){return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(b){function c(){var c=a(m),d=a(n);i&&(n.length?i.reject(k,c,d):i.resolve(k)),a.isFunction(b)&&b.call(g,k,c,d)}function e(a){f(a.target,"error"===a.type)}function f(b,d){b.src!==h&&-1===a.inArray(b,l)&&(l.push(b),d?n.push(b):m.push(b),a.data(b,"imagesLoaded",{isBroken:d,src:b.src}),j&&i.notifyWith(a(b),[d,k,a(m),a(n)]),k.length===l.length&&(setTimeout(c),k.unbind(".imagesLoaded",e)))}var g=this,i=a.isFunction(a.Deferred)?a.Deferred():0,j=a.isFunction(i.notify),k=g.find("img").add(g.filter("img")),l=[],m=[],n=[];return a.isPlainObject(b)&&a.each(b,function(a,c){"callback"===a?b=c:i&&i[a](c)}),k.length?k.bind("load.imagesLoaded error.imagesLoaded",e).each(function(b,c){var e=c.src,g=a.data(c,"imagesLoaded");return g&&g.src===e?void f(c,g.isBroken):c.complete&&c.naturalWidth!==d?void f(c,0===c.naturalWidth||0===c.naturalHeight):void((c.readyState||c.complete)&&(c.src=h,c.src=e))}):c(),i?i.promise(g):g};var i,j,k,l=a.event,m={_:0},n=0;i=l.special.throttledresize={setup:function(){a(this).on("resize",i.handler)},teardown:function(){a(this).off("resize",i.handler)},handler:function(b,c){var d=this,e=arguments;j=!0,k||(setInterval(function(){n++,(n>i.threshold&&j||c)&&(b.type="throttledresize",l.dispatch.apply(d,e),j=!1,n=0),n>9&&(a(m).stop(),k=!1,n=0)},30),k=!0)},threshold:0}}(jQuery,window,document);

$('.photoset-grid').photosetGrid({
    // Set the gutter between columns and rows
      gutter: '10px',

});

// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------
var scrollme=(function(a){var d={};var c=a(document);var b=a(window);d.body_height=0;d.viewport_height=0;d.viewport_top=0;d.viewport_bottom=0;d.viewport_top_previous=-1;d.elements=[];d.elements_in_view=[];d.property_defaults={opacity:1,translatex:0,translatey:0,translatez:0,rotatex:0,rotatey:0,rotatez:0,scale:1,scalex:1,scaley:1,scalez:1};d.scrollme_selector=".scrollme";d.animateme_selector=".animateme";d.update_interval=10;d.easing_functions={linear:function(e){return e},easeout:function(e){return e*e*e},easein:function(e){e=1-e;return 1-(e*e*e)},easeinout:function(e){if(e<0.5){return(4*e*e*e)}else{e=1-e;return 1-(4*e*e*e)}}};d.init_events=["ready","page:load","page:change"];d.init_if=function(){return true};d.init=function(){if(!d.init_if()){return false}d.init_elements();d.on_resize();b.on("resize orientationchange",function(){d.on_resize()});b.load(function(){setTimeout(function(){d.on_resize()},100)});setInterval(d.update,d.update_interval);return true};d.init_elements=function(){a(d.scrollme_selector).each(function(){var e={};e.element=a(this);var f=[];a(this).find(d.animateme_selector).addBack(d.animateme_selector).each(function(){var h={};h.element=a(this);h.when=h.element.data("when");h.from=h.element.data("from");h.to=h.element.data("to");if(h.element.is("[data-crop]")){h.crop=h.element.data("crop")}else{h.crop=true}if(h.element.is("[data-easing]")){h.easing=d.easing_functions[h.element.data("easing")]}else{h.easing=d.easing_functions.easeout}var g={};if(h.element.is("[data-opacity]")){g.opacity=h.element.data("opacity")}if(h.element.is("[data-translatex]")){g.translatex=h.element.data("translatex")}if(h.element.is("[data-translatey]")){g.translatey=h.element.data("translatey")}if(h.element.is("[data-translatez]")){g.translatez=h.element.data("translatez")}if(h.element.is("[data-rotatex]")){g.rotatex=h.element.data("rotatex")}if(h.element.is("[data-rotatey]")){g.rotatey=h.element.data("rotatey")}if(h.element.is("[data-rotatez]")){g.rotatez=h.element.data("rotatez")}if(h.element.is("[data-scale]")){g.scale=h.element.data("scale")}if(h.element.is("[data-scalex]")){g.scalex=h.element.data("scalex")}if(h.element.is("[data-scaley]")){g.scaley=h.element.data("scaley")}if(h.element.is("[data-scalez]")){g.scalez=h.element.data("scalez")}h.properties=g;f.push(h)});e.effects=f;d.elements.push(e)})};d.update=function(){window.requestAnimationFrame(function(){d.update_viewport_position();if(d.viewport_top_previous!=d.viewport_top){d.update_elements_in_view();d.animate()}d.viewport_top_previous=d.viewport_top})};d.animate=function(){var C=d.elements_in_view.length;for(var A=0;A<C;A++){var h=d.elements_in_view[A];var f=h.effects.length;for(var D=0;D<f;D++){var w=h.effects[D];switch(w.when){case"view":case"span":var r=h.top-d.viewport_height;var n=h.bottom;break;case"exit":var r=h.bottom-d.viewport_height;var n=h.bottom;break;default:var r=h.top-d.viewport_height;var n=h.top;break}if(w.crop){if(r<0){r=0}if(n>(d.body_height-d.viewport_height)){n=d.body_height-d.viewport_height}}var g=(d.viewport_top-r)/(n-r);var x=w.from;var j=w.to;var o=j-x;var k=(g-x)/o;var v=w.easing(k);var l=d.animate_value(g,v,x,j,w,"opacity");var t=d.animate_value(g,v,x,j,w,"translatey");var u=d.animate_value(g,v,x,j,w,"translatex");var s=d.animate_value(g,v,x,j,w,"translatez");var B=d.animate_value(g,v,x,j,w,"rotatex");var z=d.animate_value(g,v,x,j,w,"rotatey");var y=d.animate_value(g,v,x,j,w,"rotatez");var E=d.animate_value(g,v,x,j,w,"scale");var q=d.animate_value(g,v,x,j,w,"scalex");var p=d.animate_value(g,v,x,j,w,"scaley");var m=d.animate_value(g,v,x,j,w,"scalez");if("scale" in w.properties){q=E;p=E;m=E}w.element.css({opacity:l,transform:"translate3d( "+u+"px , "+t+"px , "+s+"px ) rotateX( "+B+"deg ) rotateY( "+z+"deg ) rotateZ( "+y+"deg ) scale3d( "+q+" , "+p+" , "+m+" )"})}}};d.animate_value=function(i,h,j,k,n,m){var g=d.property_defaults[m];if(!(m in n.properties)){return g}var e=n.properties[m];var f=(k>j)?true:false;if(i<j&&f){return g}if(i>k&&f){return e}if(i>j&&!f){return g}if(i<k&&!f){return e}var l=g+(h*(e-g));switch(m){case"opacity":l=l.toFixed(2);break;case"translatex":l=l.toFixed(0);break;case"translatey":l=l.toFixed(0);break;case"translatez":l=l.toFixed(0);break;case"rotatex":l=l.toFixed(1);break;case"rotatey":l=l.toFixed(1);break;case"rotatez":l=l.toFixed(1);break;case"scale":l=l.toFixed(3);break;default:break}return l};d.update_viewport_position=function(){d.viewport_top=b.scrollTop();d.viewport_bottom=d.viewport_top+d.viewport_height};d.update_elements_in_view=function(){d.elements_in_view=[];var f=d.elements.length;for(var e=0;e<f;e++){if((d.elements[e].top<d.viewport_bottom)&&(d.elements[e].bottom>d.viewport_top)){d.elements_in_view.push(d.elements[e])}}};d.on_resize=function(){d.update_viewport();d.update_element_heights();d.update_viewport_position();d.update_elements_in_view();d.animate()};d.update_viewport=function(){d.body_height=c.height();d.viewport_height=b.height()};d.update_element_heights=function(){var g=d.elements.length;for(var f=0;f<g;f++){var h=d.elements[f].element.outerHeight();var e=d.elements[f].element.offset();d.elements[f].height=h;d.elements[f].top=e.top;d.elements[f].bottom=e.top+h}};c.on(d.init_events.join(" "),function(){d.init()});return d})(jQuery);
