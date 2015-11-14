var owl = $('.owl-carousel');
var imagesCarousel = $('.owl-carousel.images');
var textCarousel = $('.owl-carousel.text');

owl.owlCarousel({
	loop:false,
	margin:0,
	nav:false,
	dots: true,
	items:1,
	/*mouseDrag: false,
	touchDrag: false,
	pullDrag:false,
	freeDrag:false,*/
	autoplay: true,
	autoplayTimeout: 3000,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn'
});

imagesCarousel.on('changed.owl.carousel', function(event) {
	textCarousel.trigger('to.owl.carousel', event.item.index)
});

textCarousel.on('changed.owl.carousel', function(event) {
	imagesCarousel.trigger('to.owl.carousel', event.item.index)
});