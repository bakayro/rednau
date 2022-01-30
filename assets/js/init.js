var $ = jQuery.noConflict();

$(".mobile-menu").addClass("not-show");

$(document).ready(function () {

	Splitting();

	new WOW().init();

	$('#nav-icon1').click(function () {

		$(this).toggleClass('open');
		$("body").toggleClass("fixed");
		$(".mobile-menu").removeClass("not-show");
		if ($(".mobile-menu").hasClass("show")) {
			$(".mobile-menu").addClass("hide");
			$(".mobile-menu").removeClass("show");
		}
		else {
			$(".mobile-menu").removeClass("hide");
			$(".mobile-menu").addClass("show");
		}

		$("#fp-nav ul li a, .fp-slidesNav ul li a").click(function () {
			$('#nav-icon1').removeClass('open');
			$("body").removeClass("fixed");
			$(".mobile-menu").addClass("hide");
			$(".mobile-menu").removeClass("show");
		});

	});

	var scrollTop = $(".scroll-top");

	$(window).scroll(function () {
		var topPos = $(this).scrollTop();
		if (topPos > 300) {
			$(scrollTop).removeClass("hide");
			$(scrollTop).addClass("show");
		} else {
			if ($(".scroll-top").hasClass("show")) {
				$(scrollTop).addClass("hide");
				$(scrollTop).removeClass("show");
			}
		}
	});

	$(scrollTop).click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.owl-news').owlCarousel({
		loop: false,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplaySpeed: 3000,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			680: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

});

var myFullpage = new fullpage('#fullpage', {
	menu: '#menu',
	anchors: ['home', 'o-nas', 'dlaczego-my', 'oferta'],
	autoScrolling: false,
	navigation: true,
	scrollingSpeed: 500,
	navigationPosition: 'right',
	sectionSelector: '.fullpage-section',
	navigationTooltips: ['Home', 'O nas', 'Dlaczego my?', 'Oferta']
});