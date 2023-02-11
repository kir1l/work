let slides

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
addSlidesClick()

function addSlidesClick() {
    slides = document.querySelectorAll('.swiper-slide')

    slides.forEach(slide => {
        slide.addEventListener('click', ({target}) => {
            if(!target.classList.contains('swiper-slide-active')) return
            // тут обработка клика на активный слайд
        } )
    })
}
