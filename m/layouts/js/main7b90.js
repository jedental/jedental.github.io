// <![CDATA[
'use struct';

jQuery(function($){
    /* Layouts
    ------------------------------------------------------- */
    var $toggleBtn = $('.hamburger');

	// toggleBtn
	$toggleBtn.on('click', function(){
		$('nav').toggleClass('toggle')
        .prev().children('.hamburger').toggleClass('active');
	});

	// header
	$(window).on('scroll', function(){
		var $navScroll = $('header'),
            Topbtn = $('#top-btn');

		if ($(document).scrollTop() > $('body').offset().top) {
			$navScroll.addClass('scroll');
            Topbtn.stop().fadeIn();
		} else {
			$navScroll.removeClass('scroll');
            Topbtn.stop().fadeOut();
		}
	});

	// mainView
	var mainView = $('.bxslider-h');

	mainView.bxSlider({
        mode:'fade',
		auto: true,
		pager: false,
        controls: true
	});

    
});
// ]]>
