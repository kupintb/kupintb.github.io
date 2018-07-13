 $(function(){

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

 	// Xử lý icon giỏ hàng giao diện mobile
 	$('#btn-menu').click(function(){
 		$('.cart-mobile').toggleClass('hidden');
 	});

 	// xử lý phần danh mục
 	$('.verticalmenu_title').click(function(){
 		$('#verticalmenutop').toggleClass('active');
 	});

 	// menu top
 	var vitrimenu = $('.header-bottom').offset().top;
 	$('#to_top').fadeOut(10);
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vitribody = $('html,body').scrollTop();
 		if (vitribody > vitrimenu) {
 			$('#to_top').fadeIn();
 		}else{
 			$('#to_top').fadeOut();
 			
 		}
 		console.log(vitribody);
 	});
 	

 	// Scroll Top
 	$('#to_top').click(function(event) {
 		/* Act on the event */
 		$('html,body').animate({scrollTop:0}, 1000);
 		console.log('click');
 		return false;
 	});

 })  
 