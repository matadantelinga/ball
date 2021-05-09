jQuery(document).ready(function () {
	jQuery(".navbar-toggle").on("click", function () {
		jQuery(this).addClass("active");
		jQuery(".navbar-collap").addClass("active");
	});

	jQuery(".navbar-hide").on("click", function () {
		jQuery(".navbar-toggle").removeClass("active");
		jQuery(".navbar-collap").removeClass("active");
	});

	$(".tribute-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
				},
			},
		],
	});

	$(".test-wrapper").slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});

	//Testimonial slider widget js
	$("#testimonial-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		// centerPadding: true,
		dots: false,
		dotsClass: "slick-dots",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><img src='./theme/assets/prev-icon.png'></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><img src='./theme/assets/next-icon.png'></button>",
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
				},
			},
		],
	});

	// Homepage obit slider
	$(".layout2-1 #obit-slides").slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: false,
		dots: false,
		dotsClass: "slick-dots",
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><img src='./theme/assets/chevron-prev.svg'></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><img src='./theme/assets/chevron-next.svg'></button>",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				},
			},
		],
	});
});
