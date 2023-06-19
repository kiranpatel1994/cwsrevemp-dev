var swiper1 = new Swiper(".slider-scroller", {
    slidesPerView: 2.6,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".device-slider", {
    slidesPerView: 1.5,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, 0],
            opacity: 0
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});

var bild1 = '<div class="menuSlider"><img src="images/1.png" /></div>';
var bild2 = '<div class="menuSlider"><img src="images/2.png" /></div>';
var bild3 = '<div class="menuSlider"><img src="images/3.png" /></div>';
var bild4 = '<div class="menuSlider"><img src="images/4.png" /></div>';
var bild5 = '<div class="menuSlider"><img src="images/q5.png" /></div>';
var bild6 = '<div class="menuSlider"><img src="images/6.png" /></div>';
var menu = [bild1, bild2, bild3, bild4, bild5, bild6]
var swiper3 = new Swiper(".slider-object", {
    slidesPerView: 1.9,
    spaceBetween: 30,
    centeredSlides: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});