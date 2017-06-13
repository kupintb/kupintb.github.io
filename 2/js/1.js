 $(function(){
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
 