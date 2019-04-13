$(function(){
	let swiper = new Swiper('.swiper-container', {
	    spaceBetween: 30,
	    centeredSlides: true,
	    autoplay: {
		    delay: 2500,
		    disableOnInteraction: false,
	    },
		pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		},
		navigation: {
		    nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    });
    $(".footer_uls li").eq(0).click(function(){
		window.location.href="./index.html?p=1" 
	})
    $(".footer_uls li").eq(1).click(function(){
		window.location.href="./classify.html?p=1" 
	})
    $(".footer_uls li").eq(4).click(function(){
		window.location.href="./log.html?p=1" 
	})
    
    
	console.log($(window).height())
	$(window).scroll(function(){ 
		debug;
   		let scollH = $(".center_banner").height() + $(".center_brands").height();
   		let gunTiao = document.documentElement.scrollTop || document.body.scrollTop;
   		
   		if (gunTiao>=scollH) {
   			$(".center_banner").css({
   				position : "fixed",
				right: 0,
			    top: ".32rem",
			    overflow: "auto"
   			});
		};
    });
     
});
	