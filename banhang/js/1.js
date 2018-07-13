 $(function(){
 	$('.tab-heading li a').click(function(event) {
 		/* Act on the event */
 		$('.tab-heading li').removeClass('active');
 		$(this).parent().addClass('active');
 		x = $(this).parent().index();
 		x = x+1;
 		$('.tab-content li').removeClass('open');
 		$('.tab-content li:nth-child('+x+")").addClass('open');
 		//console.log('ok');
 		return false;
 	});

 	$('#popup2,.overlay').click(function(event) {
 		/* Act on the event */
 		$('.newletter-popup,.overlay').fadeOut(400);
 	});
 	$('#slider').nivoSlider({
 		effect:    "random"  ,
 		slices: 15,
 		boxCols: 8,
 		boxRows: 4,
 		manualAdvance:  false  ,
 		animSpeed: 500,
 		pauseTime:   5000  ,
 		startSlide: 0,
 		controlNav:   true  ,
 		directionNav:     false   ,
 		controlNavThumbs: false,
 		pauseOnHover:   true  ,
 		prevText: '<i class="fa fa-angle-left"></i>',
 		nextText: '<i class="fa fa-angle-right"></i>',
 		afterLoad: function(){
 			$('.oc-loading').css("display","none");
 			$('.timeloading').css('animation-duration'," 5000ms ");
 		},
 	});

 	$(".tt-product.owl-carousel.owl-theme").owlCarousel({
 		loop:  false ,
 		margin:  0 ,
 		nav:  true ,
 		navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
 		dots:  false ,
 		autoplay:   false ,
 		autoplayTimeout:  1000 ,
 		autoplayHoverPause: true,
 		autoplaySpeed:  1000 ,
 		navSpeed:  1000 ,
 		dotsSpeed:  1000 ,
 		lazyLoad: true,
 		responsive:{
 			0:{
 				items: 1,
 				nav: false
 			},
 			480:{
 				items: 2,
 				nav: false
 			},
 			768:{
 				items: 2
 			},
 			992:{
 				items: 1
 			},
 			1200:{
 				items: 1
 			},
 			1600:{
 				items: 1
 			}
 		},
 	});
 	$('.slide-product-tap').owlCarousel({
 		autoplay:false,
 		loop:true,
 		autoplayTimeout:2500,
 		margin:10,
 		dots:  false ,
 		 navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
 		responsiveClass:true,
 		responsive:{
 			0:{
 				items:1,
 				nav:false
 			},
 			600:{
 				items:2,
 				nav:true
 			},
 			1000:{
 				items:3,
 				nav:true,
 			} 
 		}
 	});


$('.hot-deals').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			adaptiveHeight: true,
			infinite: false,
			useTransform: true,
			speed: 400,
			nextArrow:'<button type="button" class="slick-next"><img src="images/next.png" alt="" class="img-fluid" /></button>',
			prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.png" alt="" class="img-fluid" /></button>',
			pauseOnFocus:true,
			cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
			asNavFor: '.hot-deals-nav'
		});
		$('.hot-deals-nav').slick({
			autoplay:false,
			autoplaySpeed:3000,
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.hot-deals',
			dots: false,
			centerMode: true,
			pauseOnFocus:true,
			nextArrow:'<button type="button" class="slick-next"><img src="images/next.png" alt="" class="img-fluid" /></button>',
			prevArrow:'<button type="button" class="slick-prev"><img src="images/prev.png" alt="" class="img-fluid" /></button>',
			focusOnSelect: true
		});

 })  
 