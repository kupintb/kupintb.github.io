$(function(){
    $(".loading").delay(2000).fadeOut(300, function() {
        
    });
	$(".share_item,span.social_share_item_wrapper").hover(function(){
        $(this).toggleClass('bluestar');
        $(this).nextUntil().toggleClass('bluestar');
        $(this).prevUntil().toggleClass('bluestar');
    });
    $(".icon_search_header,.form_search_header").hover(function(){
    	$(".header_search").toggleClass("form_search");
    });
    $(".btn_sidebar_header,.sliding_close_helper_overlay").click(function(event) {
    	/* Act on the event */
    	$("body.home").toggleClass('opened_body_home');
    	$(".site_side").toggleClass('opened_site_side_home');
    	return false;
    });
    $('*').keyup(function(e) {
        /* Act on the event */
        if(e.keyCode == '27'){
        $("body.home").removeClass('opened_body_home');
        $(".site_side").removeClass('opened_site_side_home');
        return false;
        }
    });
   
})  
 