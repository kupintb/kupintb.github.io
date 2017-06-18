﻿ $(function(){
 	/*Hiệu ứng Wow*/
 	new WOW().init();

 	/*Xử lý phần khối đếm số*/
 	$('.demso').counterUp({
                delay: 10,
                time: 1000
            });

 	/*Xử lý code sản phẩm khuyến mại*/
	  var owl = $('.owl-carousel');
		owl.owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsiveClass:true,
				    responsive:{
				        0:{
				            items:2,
				        },
				        600:{
				            items:4,
				        },
				        1000:{
				            items:5,
				        } 
				    }
		})
		
			$('.slidebottom.owl-carousel.owl-theme').owlCarousel({
		    loop:true,
		    margin:10,
		    dots:false,
		    autoplay:true,
		    autoplayTimeout:3000,
		    responsiveClass:true,
				    responsive:{
				        0:{
				            items:3,
				        },
				        600:{
				            items:4,
				        },
				        1000:{
				            items:6,
				        } 
				    }
		})



 	/*js cho phần nút menu bar*/
 	$('.iconmenuheade').click(function(event) {
 		$('.menutrai').addClass('divao');
 		$('.nenxam').addClass('hienra')
 		return false;
 	});
 	$('.closemenu').click(function(event) {
 		$('.menutrai').removeClass('divao');
 		$('.nenxam').removeClass('hienra');
 		return false;
 	});
	$('.nenxam').click(function(event) {
 		$('.menutrai').removeClass('divao');
 		$('.nenxam').removeClass('hienra');
 		return false;
 	});
 	$('*').keyup(function(e){
          if(e.keyCode=='27'){
            $('.menutrai').removeClass('divao');
 			$('.nenxam').removeClass('hienra');
          }       
      })

 	/*nút back*/
 	$(window).scroll(function(){
		vitrihientai = $('body').scrollTop();
		
		if(vitrihientai >= 50){
			$('.headertop').addClass('tienhoa');
			$('.nutback').addClass('hienranutback');
		}
		else if (vitrihientai < 50) {
			$('.headertop').removeClass('tienhoa');
			$('.nutback').removeClass('hienranutback');
		};
	})

	$('.nutback').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').animate({ scrollTop: 0},1000);
	});

})  
 