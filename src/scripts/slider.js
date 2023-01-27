const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    slideToClickedSlide: true
});
