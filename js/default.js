 $(function(){
 	/*Hiệu ứng wow*/
 	new WOW().init();
 	/*Độ cao ảnh slide menu top*/
		var docaoanhslidetop = $(window).height();
		$('.imgslidetop').css({'height':docaoanhslidetop})
		$(window).resize(function(){
		 	var docaoanhslidetop = $(window).height();
		 	$('.imgslidetop').css({'height':docaoanhslidetop})
		})
		/*Hiệu ứng click tap sản phẩm mới*/
		$('.nutcacsp li b').click(function(event) {
			$('.nutcacsp li b').removeClass('active');
			$(this).addClass('active');
			var stt = $(this).parent().index() + 1;
			console.log(stt)
			$('.spmoi1 li .ndspmoi1').removeClass('active')
			$('.spmoi1 li:nth-child('+ stt +") .ndspmoi1").addClass('active')
		});
		
	/*hieu ung cuon chuot cho menu*/
	var vitrimenuto = $('.menuto').offset().top;
	$(window).scroll(function(event) {
		var vitribody = $('body').scrollTop();
		if ((vitribody >= vitrimenuto) && (vitribody < $('.maincontent').offset().top)) {
			$('.menuto').addClass('dunghinh')
		} 
		else{
			$('.menuto').removeClass('dunghinh')
		};

		if (vitribody >= $('.maincontent').offset().top) {
			$('.menuto').addClass('xanhco')
		} 
		else{
			$('.menuto').removeClass('xanhco')
		};

		if (vitribody < $('.maincontent').offset().top) {
			$('.nutback').animate({opacity:0,}, 0)
		} 
		else{
			$('.nutback').animate({opacity:1,}, 0);
				
		};

	});
	 
	 /*nút back*/
			
		$('.nutback').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('body').animate({scrollTop : 0}, 1000)
		});

 	/*owlCarousel phan slide san pham moi*/
 	$('.motspmoi.owl-carousel.owl-theme').owlCarousel({
				    loop:true,
				    margin:10,
				    responsiveClass:true,
				    responsive:{
				        0:{
				            items:1,
				            nav:true
				        },
				        600:{
				            items:3,
				            nav:false
				        },
				        1000:{
				            items:4,
				            nav:true,
				            loop:false
				        } 
				    }
				});

 				/*slide tin tức*/
				$('.ndmottintuc.owl-carousel.owl-theme').owlCarousel({
				    loop:true,
				    margin:10,
				    dots:false,
				    responsiveClass:true,
				    responsive:{
				        0:{
				            items:1,
				            
				        },
				        600:{
				            items:1,
				            
				        },
				        1000:{
				            items:2,
				            
				            loop:false
				        } 
				    }
				});

				 /*slide sản phẩm nổi bật*/
				$('.motspnoibat.owl-carousel.owl-theme').owlCarousel({
				    loop:true,
				    margin:10,
				    dots:false,
				    loop:true,
				    autoplay:true,
		    		autoplayTimeout:2000,
				    responsiveClass:true,
				    responsive:{
				        0:{
				            items:1,
				            
				        },
				        600:{
				            items:4,
				            
				        },
				        1000:{
				            items:5, 
				        } 
				    }
				});
				
		

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
				            items:6,
				        } 
				    }
		})

		

})  
 