;(function () {

	'use strict';
$(function() {
  var nav = $('#sitenav'),
      h = 70;
    if ($(window).scrollTop() > h) {
      nav.addClass('scrolled');
    }
      $(window).scroll(function () {
          if ($(this).scrollTop() > h) {
            nav.addClass('scrolled');
          }
          else {
            nav.removeClass('scrolled');
          }
      });
});

var contentWayPoint = function() {
  var i = 0;

  // $('.gtco-section').waypoint( function( direction ) {


    $('.animate-box').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast');
              } else {
                el.addClass('fadeInUp animated-fast');
              }

              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });

        }, 100);

      }

    } , { offset: '85%' } );
  // }, { offset: '90%'} );
};
$(function(){

  contentWayPoint();

});
}());
/*
Mouse Parallax
==============
A simple jQuery plugin to allow given elements to be used as backgrounds that respond to mouse movement.  Could easily be further extended or modified.
--------------
Author: "Pip Beard Design," Benjamin Alan Robinson
LICENSE: The MIT License (MIT)
*/

(function ( $ ) {
	$.fn.extend({

		mouseParallax: function(options) {

			var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };

			var options = $.extend(defaults, options);

			return this.each(function() {
				var o = options;
				var background = $(this);

				$(o.targetContainer).on('mousemove', function(e){

					mouseX = e.pageX;
					mouseY = e.pageY;

					windowWidth = $(window).width();
					windowHeight = $(window).height();

					percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
					percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);

					leftString = (0-percentX-o.moveFactor)+"%";
					rightString = (0-percentX-o.moveFactor)+"%";
					topString = (0-percentY-o.moveFactor)+"%";
					bottomString = (0-percentY-o.moveFactor)+"%";

					background[0].style.left = leftString;
					background[0].style.right = rightString;
					background[0].style.top = topString;
					background[0].style.bottom = bottomString;
					if(o.zIndexValue) {
						background[0].style.zIndex = o.zIndexValue;
					}
				});
			});
		}
	});
} (jQuery) );
