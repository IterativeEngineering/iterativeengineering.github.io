    (function($) {

       skel
       .breakpoints({
         xlarge:	'(max-width: 1680px)',
         large:	'(max-width: 1280px)',
         medium:	'(max-width: 980px)',
         small:	'(max-width: 736px)',
         xsmall:	'(max-width: 480px)'
     });

       $(function() {

          var	$window = $(window),
          $body = $('body'),
          $wrapper = $('#page-wrapper'),
          $banner = $('#banner'),
          $header = $('#header');

		// Disable animations/transitions until the page has loaded.
     $body.addClass('is-loading');

     $window.on('load', function() {
        window.setTimeout(function() {
           $body.removeClass('is-loading');
       }, 100);
    });

		// Mobile?
     if (skel.vars.mobile)
        $body.addClass('is-mobile');
    else
        skel
    .on('-medium !medium', function() {
      $body.removeClass('is-mobile');
  })
    .on('+medium', function() {
      $body.addClass('is-mobile');
  });

		// Fix: Placeholder polyfill.
     $('form').placeholder();

		// Prioritize "important" elements on medium.
     skel.on('+medium -medium', function() {
        $.prioritize(
           '.important\\28 medium\\29',
           skel.breakpoint('medium').active
           );
    });

		// Scrolly.
     $('.scrolly')
     .scrolly({
       speed: 1500,
       offset: $header.outerHeight()
   });

		// Menu.
     $('#menu')
     .append('<a href="#menu" class="close"></a>')
     .appendTo($body)
     .panel({
       delay: 500,
       hideOnClick: true,
       hideOnSwipe: true,
       resetScroll: true,
       resetForms: true,
       side: 'right',
       target: $body,
       visibleClass: 'is-menu-visible'
   });

		// Header.
     if (skel.vars.IEVersion < 9)
        $header.removeClass('alt');

    if ($banner.length > 0
     &&	$header.hasClass('alt')) {

        $window.on('resize', function() { $window.trigger('scroll'); });

    $banner.scrollex({
       bottom:		$header.outerHeight() + 1,
       terminate:	function() { $header.removeClass('alt'); },
       enter:		function() { $header.addClass('alt'); },
       leave:		function() { $header.removeClass('alt'); }
   });

}

});

   })(jQuery);



   $( ".contact-map-button" ).click(function() {
       $( ".contact-map-text-div" ).toggle('slow');
   });


   var languageZindex = function(){
    $('.language_bar_top').css("z-index", "10000");
    $('.language_bar_top-span').css("z-index", "10001");
    $('.cookies-div').css("z-index", "2");
};

setTimeout(languageZindex, 3000);



var y = $('body').scrollTop();
if (y > 300) {
    $('.cookies-div').css("z-index", "1");
}


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.cookies-div').css("z-index", "1");
}
});

$(".cookies-div").hide();


$(window).ready(function() {
    var sName = "cookiesok";
    $(".exit-cookies").click(function() {
        var oExpire = new Date();
        oExpire.setTime((new Date()).getTime() + 31536000000);
        document.cookie = sName + "=1;expires=" + oExpire;
        $(".cookies-div").hide();
    });

    var sStr = '; ' + document.cookie + ';';
    var nIndex = sStr.indexOf('; ' + escape(sName) + '=');
    if (nIndex === -1) {
        $(".cookies-div").show();
    }


    if ( $(".cookies-div").css('display') == 'block' ){
        $("#banner .more").css('bottom', '4,5em')
    } else {
        $("#banner .more").attr('bottom', '1,5em')
    }





});


//   var slider = function() {

//     var slides = $('.slide');
//     var container = $('#slides ul');
//     var elm = container.find(':first-child').prop("tagName");
//     var item_width = $("#carousel").width();

//     var initialize = function initializeSlider(){
//       slides.width(item_width); //set the slides to the correct pixel width
//       container.parent().width(item_width);
//       container.width(slides.length * item_width); //set the slides container to the correct total width
//       container.find(elm + ':first').before(container.find(elm + ':last'));
//       reset();
//     }
    
//     var rotate = function rotateSlider() {
//         var container = $('#slides ul');
//                 container.stop().animate({
//                     'left': 0
//                 }, 1500, function () {
//                     container.find(elm + ':first').before(container.find(elm + ':last'));
//                     reset();
//                 });
//             return false;
//     }

    
//     var reset = function resetSlides() {

//         $('.quote-slider').css({
//             'left': (-1 * ($('.quoteContainer').width())) -10
//         });
//     }

//     var resetLeftContainerValue = function resetSlides() {
//         container.removeAttr('style');
//     }


//     initialize();

//     return rotate;
//   }

// slider();

// runSlider  = slider();
//       refreshHandle = setInterval(runSlider, 5000);

// var w = 0;

// $( window ).load( function(){

//    w = $( window ).width();

// });

// $( window ).resize( function(){

//   if( w != $( window ).width() ){

//     $(window).resize(_.debounce(slider, 300));
//     console.log('resizing!')

//     w = $( window ).width();

//     delete w;

//   }

// });









// function onMapClick() {}
// var mymap = L.map("mapid").setView([50.3054865, 18.7681951], 17);
// L.Icon.Default.imagePath = "../../images/",
// L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
//     maxZoom: 18,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
//     id: "mapbox.streets"
// }).addTo(mymap),
// L.marker([50.3056865, 18.770255]).addTo(mymap).bindPopup("<b>Nasza firma</b><br />ul. Wolności 191/311 <br> 41-800 Zabrze").openPopup();
// var popup = L.popup();
// mymap.dragging.disable(),
// mymap.touchZoom.disable(),
// mymap.doubleClickZoom.disable(),
// mymap.scrollWheelZoom.disable(),
// mymap.boxZoom.disable(),
// mymap.keyboard.disable()	

// $("#smoke-button").click(function(){
//   console.log(mymap.scrollWheelZoom._enabled)
//   if(mymap.scrollWheelZoom._enabled == true){
//      mymap.dragging.disable(),
//      mymap.touchZoom.disable(),
//      mymap.doubleClickZoom.disable(),
//      mymap.scrollWheelZoom.disable(),
//      mymap.boxZoom.disable(),
//      mymap.keyboard.disable()	
//  } else {
//      mymap.dragging.enable(),
//      mymap.touchZoom.enable(),
//      mymap.doubleClickZoom.enable(),
//      mymap.scrollWheelZoom.enable(),
//      mymap.boxZoom.enable(),
//      mymap.keyboard.enable()		
//  }
// });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68442502-1', 'auto');
  ga('send', 'pageview');



