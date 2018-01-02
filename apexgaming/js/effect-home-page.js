var effect_logo = document.querySelector('.footer_wrapper .anime_logo');
var effect_anime_logo = scrollMonitor.create( effect_logo );

effect_anime_logo.enterViewport(function() {
	var cdlogo = anime.timeline();
	cdlogo.add({
		targets:".vienlogo",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		easing:"easeOutSine",
		delay:500
	})
	cdlogo.add({
		targets:".vienlogo1",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1500,
		easing:"easeOutSine"
	})
	cdlogo.add({
		targets:".vienlogo2",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1500,
		easing:"easeOutSine",
		offset:"-=1000"
	})
	cdlogo.add({
		targets:".textapexgaming",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		delay:function(el,i){
			return 100*i;
		}
	})
	cdlogo.add({
		targets:".author_img_footer img",
		opacity:[0,1],
		duration:300,
		easing:"linear",
		offset:"-=300"
	})
	cdlogo.add({
		targets:".anime_logo_apex svg",
		opacity:[1,0],
		duration:800,
		offset:"-=500"
	})
    //console.log( 'I have entered the viewport' );
});
effect_anime_logo.exitViewport(function() {
    //console.log( 'I have left the viewport' );
});
var effect_logo1 = document.querySelector('.btn_sidebar_header');
effect_logo1.addEventListener('click',function(){
	anime.remove(cdlogo);
	var cdlogo = anime.timeline();
	cdlogo.add({
		targets:".vienlogo",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		easing:"easeOutSine",
		delay:500
	})
	cdlogo.add({
		targets:".vienlogo1",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1500,
		easing:"easeOutSine"
	})
	cdlogo.add({
		targets:".vienlogo2",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1500,
		easing:"easeOutSine",
		offset:"-=1000"
	})
	cdlogo.add({
		targets:".textapexgaming",
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		delay:function(el,i){
			return 100*i;
		}
	})
	cdlogo.add({
		targets:".author_img_footer img",
		opacity:[0,1],
		duration:300,
		easing:"linear",
		offset:"-=300"
	})
	cdlogo.add({
		targets:".anime_logo_apex svg",
		opacity:[1,0],
		duration:800,
		offset:"-=500"
	})
})


