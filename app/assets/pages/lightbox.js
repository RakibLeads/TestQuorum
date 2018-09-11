/*
 Template Name: Admiria - Bootstrap 4 Admin Lightbox
 Author: Themesbrand
 File: Lightbox Init
 */

!function(e){"use strict";var i=function(){};i.prototype.init=function(){e(".image-popup-vertical-fit").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0}}),e(".image-popup-no-margins").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),e(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}}),e(".zoom-gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(e){return e.el.attr("title")+' &middot; <a href="'+e.el.attr("data-source")+'" target="_blank">image source</a>'}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"}),e(".popup-with-move-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-slide-bottom"})},e.Lightbox=new i,e.Lightbox.Constructor=i}(window.jQuery),function(e){"use strict";e.Lightbox.init()}(window.jQuery);
