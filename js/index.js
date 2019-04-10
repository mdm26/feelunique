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
  
	//点击导航栏效果
	$(".CR_navUls li").click(function(){
		$(".CR_navUls li").css({
			"border-bottom": "2px solid transparent"
		})
		$(this).css({
			"border-bottom": "2px solid #333"
		})
	})
	
	$(".footer_uls li").eq(1).click(function(){
		window.location.href="./classify.html?p=1" 
	})
	$(".footer_uls li").eq(2).click(function(){
		window.location.href="./brand.html?p=1" 
	})
	$(".footer_uls li").eq(4).click(function(){
		window.location.href="./log.html?p=1" 
	})
})
