/* 01: Tabindex on Section
==============================================*/
$(document).ready(function(){
    $('.focus, .SCHBX, ._sBX').attr({
        tabindex: 0,
    });
});

/* 01: Tabindex on Section
==============================================*/
$(document).ready(function(){
    var header = $("#PgHdr");
    var scrollChange = 1;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass('scroll');
        } else {
            header.removeClass("scroll");
        }
    });
});

/* 02: Header Mobile
==============================================*/
$(document).ready(function(){
	$('.burger_nav_mobile').click(function(){
        $('.header_mobile_nav').toggleClass("open");
	});
});

/* 03: Rotate text HOME
==============================================*/
$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});


/* 03: ABOUT // Slide Testimonials
==============================================*/
$(document).ready(function(){
    // Slick Settings
    $('#TESTIZCAROU').slick({
        dots: true,
        nav: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        fade: true,
        autoplay: true,
        infinite: true,
        swipe: true,
        speed: 500,
        autoplaySpeed: 7000,
    });
});


/* 04: Slick WORKS // Inside Image profil
==============================================*/
$(document).ready(function(){
    // Slick Settings
    $('.PCX').slick({
        dots: false,
        nav: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        cssEase: 'linear',
        fade: true,
        autoplay: true,
        infinite: true,
        swipe: true,
        speed: 500,
        autoplaySpeed: 7000,
    });
});
