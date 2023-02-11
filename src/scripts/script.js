const btnModeGrid = document.querySelector('.mode-list'),
    btnNodeSlide = document.querySelector('.mode-slide'),
    mainOut = document.querySelector('.main__out'),
    mobileToggle = document.querySelector('.mobile-toggle-mode');

function generateListItems(amount) {
    let res = ''
    for (let i = 1; i <= amount; i++) {
        res+= `
        <div class="slide__info">
            <div class="slider__title">poker room</div>
            <div class="slider__lvl">№ ${i}</div>
            <button class="btn-go">go</button>
        </div>
        `
    }
    return res
}

function addListItemClick() {
    let slides = document.querySelectorAll('.mode-grid .slide__info')

    slides.forEach(slide => {
        slide.onclick = ({ target }) => {
            slides.forEach(otherSlide => {
                otherSlide.classList.remove('slide__info-active')
            })
            target.classList.add('slide__info-active')
        }
    })
}

function generateSlideItems(amount) {
    let res = ''

    for (let i = amount; i >= 1; i--) {
        res +=
    `<div class="swiper-slide">
        <div class="slide__info">
            <div class="slider__title">poker room</div>
            <div class="slider__lvl">№ ${i}</div>
        </div>
    </div>`
    }

    return `<div class="swiper">
            <div class="swiper-wrapper">
                ${res}
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>`
}

mainOut.innerHTML += generateSlideItems(20)

btnModeGrid.addEventListener('click', () => {
    mainOut.classList.add('mode-grid')
    btnNodeSlide.classList.remove('button-mode-active')
    btnModeGrid.classList.add('button-mode-active')
    mainOut.innerHTML = generateListItems(69)
    addListItemClick()
})

btnNodeSlide.addEventListener('click', () => {
    mainOut.classList.remove('mode-grid')
    btnNodeSlide.classList.add('button-mode-active')
    btnModeGrid.classList.remove('button-mode-active')
    mainOut.innerHTML = generateSlideItems(20)

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
})

mobileToggle.addEventListener('click', () => {
    if (mobileToggle.classList.contains('toggle-list')) {

        mainOut.classList.remove('mode-grid')
        mobileToggle.classList.remove('toggle-list')
        mainOut.innerHTML = generateSlideItems(20)

        const swiper = new Swiper('.swiper', {
            // Optional parameters


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
        return
    }

    mainOut.classList.add('mode-grid')
    mainOut.innerHTML = generateListItems(69)
    mobileToggle.classList.add('toggle-list')
})


