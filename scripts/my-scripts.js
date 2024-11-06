$(function () {
    $('ul#lang>li').has('ul')
        .children('a').append('<i class="fa-solid fa-angle-down"></i>')

    $('ul#lang li ul li').has('ul')
        .children('a').append('<i class="fa-solid fa-angle-left"></i>')

    $('ul#lang li').hover(function () {
        $(this).children('ul').show()
    },function () {
        $(this).children('ul').hide()
    })
})


$(function () {
    $('ul#menu>li').has('ul')
        .children('a').append('<i class="fa-solid fa-down-long"></i>')

    $('ul#menu li ul li').has('ul')
        .children('a').append('<i class="fa-solid fa-angle-left"></i>')

    $('ul#menu li').hover(function () {
        $(this).children('ul').show()
    },function () {
        $(this).children('ul').hide()
    })
})



$(".category .owl-carousel").owlCarousel({
        autoplay:false,
        items:6,
        loop:true,
        nav:true,
        autoplayHoverPause:true,
        rtl:true,
         autoplayTimeout:3000,
        margin:10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        },
        1300: {
            items: 6
        },
    }
}
);

$(".grocery .owl-carousel").owlCarousel({
        autoplay:false,
        dots:false,
        items:4,
        loop:true,
        nav:true,
        autoplayHoverPause:true,
        rtl:true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            780: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200:{
                items:3
            },
            1400:{
                items:4
            }
        }
    }
);


const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);
$('.acc-title').click(function () {
    $('.acc-title').children().removeClass('fa-angle-up')

    if ( $(this).next().is(':visible')) {
        $(this).children().removeClass('fa-angle-up')
    }else{
        $(this).children().addClass('fa-angle-up')
    }

    $(this).next().slideToggle(500).siblings('.acc-content').slideUp()
})

$(document).scroll(function () {
    let scrollTop   =   $(this).scrollTop();
    // console.log(scrollTop)

    if (scrollTop >= 300) {
        $('#go-to-top').fadeIn(200).css('display','flex')
    }else{
        $('#go-to-top').fadeOut(200)
    }
})
document.addEventListener('DOMContentLoaded', () => {

    var deadlineTimeUnix  = (new Date().getTime() / 1000) + (86400 * 3) + 1; // برای سه روز بعد


    const flipdown = new FlipDown(deadlineTimeUnix,"timer", {
        theme: "dark", // می توان بر روی light هم تنظیم کرد
    }).start();

    console.warn("شمارشگر آغاز شد");


    flipdown.ifEnded(function(){
        console.warn("شمارشگر به پایان رسید");
    });

});