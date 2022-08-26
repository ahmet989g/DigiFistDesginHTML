/*
 * TIME: 25.08.2022 23:04
 * PROJECT NAME: DigiFist
 * Developed BY: AHMET ERDEN
 */

$(document).ready(function (){
    var swiper = new Swiper(".product-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                spaceBetween: 15,
                slidesPerView:2.2,
            },
            1024: {
                spaceBetween: 40,
                slidesPerView:2.4,
            }
        }
    });
});