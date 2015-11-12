$(window).scroll(function(){

	if( $(window).scrollTop()>=$("section").height() ){
		$(".info").removeClass("not-shown");
		$(".info").addClass("shown");
	} else {
		if( $(".info").hasClass("shown") ){
			$(".info").addClass("not-shown");
			$(".info").removeClass("shown");
		}
	}

})