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
});
