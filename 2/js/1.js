 $(function(){

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

})  
 