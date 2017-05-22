 $(function(){
 /*Nut home*/
 $('#index').on('click', function(event) {
 	event.preventDefault();
 	/* Act on the event */
 	$('body,html').animate({scrollTop: 0}, 800)
 });

 $('.xuong,#kn').on('click', function(event) {
 	event.preventDefault();
 	/* Act on the event */
 	$('body,html').animate({scrollTop: $('#gioithieu').offset().top}, 800)
 });

})  
 