jQuery(function() {

	jQuery('.menu-burger').click(function() {
		jQuery('.main-nav > ul').toggleClass('open');
		jQuery(this).toggleClass('open');
	});


	jQuery('.offset-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var	slidesContainer = jQuery(this).parent().find('.next-slide');
			slideCounter = slick['slideCount'];
			nextSlideCount = currentSlide + 1;
			if(nextSlideCount == slideCounter) {
				nextSlideCount = 0;
			}
			nextImage = jQuery(slick.$slides[nextSlideCount]).attr('src');

		jQuery(slidesContainer).css('background-image', 'url(' + nextImage + ')');
	});

	$('.offset-slider').on('init', function(event, slick){
		var nextImage = jQuery(slick.$slides[1]).attr('src');
			slidesContainer = jQuery(this).parent().find('.next-slide');

		jQuery(slidesContainer).css('background-image', 'url(' + nextImage + ')');
	});

	jQuery('.next-slide').click(function() {
		
		jQuery(this).parent().find('.offset-slider').slick("slickNext");
	});

	jQuery('.offset-slider').slick({
		infinite: true,
		arrows: true,
		dots: true
	});

	jQuery('.offset-slider').slick('init');

	jQuery('.accordeon-item').click(function() {
		jQuery(this).toggleClass('open');
	});

	jQuery('.our-dogs-slider').slick({
		infinite: false,
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false
		      }
		    }
		]

	});


});
