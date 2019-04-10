$(function(){
	$(".center_left li").click(function(){
		$(".center_left li").css({
			color: "#666",
			"border-right": "1px solid #e8e8e8"
		})
		$(this).css({
			color: "#d72245",
			"border-right": "1px solid #fff"
		})
		$(".center_left .center_reght").css({display:'none'});
		$(this).children().last().css({display:"block"});
		
	})
	$(".jieBang").unbind(); 
	$(".footer_uls li").eq(0).click(function(){
		window.location.href="./index.html?p=1" 
	})
	$(".footer_uls li").eq(2).click(function(){
		window.location.href="./brand.html?p=1" 
	})
	$(".footer_uls li").eq(4).click(function(){
		window.location.href="./log.html?p=1" 
	})
})