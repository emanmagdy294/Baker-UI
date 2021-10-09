$(document).ready(function() {

    $(".owl-carousel").owlCarousel({ items: 2, loop: true });

})
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});



/*********************/
let aboutOffset = $("#About").offset().top;
$(window).scroll(function() {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 50) {
        $("#btnUp").fadeIn(500);
    } else {
        $("#btnUp").fadeOut(500);

    }
})

$("#btnUp").click(function() {
    $("html , body").animate({ scrollTop: 0 }, 2000);
})