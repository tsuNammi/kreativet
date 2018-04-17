$(window).scroll(function () {
	if ($(window).scrollTop() >= 100) {
		$('.mainNavbar').addClass('mainNavbarScroll');
		$('.logo').addClass('mainNavbarImgScroll');
    $('.nav-link').addClass('nav-linkScroll');
	} else {
		$('.mainNavbar').removeClass('mainNavbarScroll');
    $('.logo').removeClass('mainNavbarImgScroll');
    $('.nav-link').removeClass('nav-linkScroll');
	}
});