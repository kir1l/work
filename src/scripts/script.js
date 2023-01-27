const btnConnect = document.querySelector('.header__btn-connect'),
    btnModeGrid = document.querySelector('.mode-list'),
    btnNodeSlide = document.querySelector('.mode-slide'),
    mainOut = document.querySelector('.main__out'),
    cond1 = document.querySelector('.cond1'),
    cond2= document.querySelector('.cond2')


btnConnect.addEventListener('click', () => {
    cond1.classList.toggle('hidden')
    cond2.classList.toggle('hidden')
})

const listPattern = `<svg width="234" height="140" viewBox="0 0 234 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_116_4341)">
    <path d="M234 70.0145C234 57.7236 228.684 46.1558 219.375 36.0917V17.5831H213.942V12.0017H182.519C163.812 4.42471 141.287 0 117 0C92.7131 0 70.1589 4.42471 51.4812 12.0017H20.058V17.6121H14.625V36.1206C5.31551 46.1558 0 57.6947 0 70.0145" class="hov" fill="#384156"/>
    <path d="M0 70.0144C0 82.3053 5.31551 93.8731 14.625 103.937V122.446H20.058V128.056H51.4812C70.1883 135.633 92.7131 140.058 117 140.058C141.287 140.058 163.841 135.633 182.519 128.056H213.942V122.446H219.375V103.937C228.684 93.902 234 82.3342 234 70.0144" class="hov" fill="#384156"/>
    <path d="M180.696 118.476H180.597L180.505 118.514L178.836 119.206C178.835 119.206 178.834 119.207 178.833 119.207C160.604 126.525 139.231 130.448 116.998 130.448C94.7649 130.448 73.3628 126.554 55.1638 119.178C55.1632 119.178 55.1626 119.178 55.1621 119.177L53.4918 118.485L53.3998 118.447H53.3003H29.7777V113.336V112.836H29.2777H24.3447V100.38V100.185L24.2117 100.041L21.8036 97.438L21.8031 97.4375C13.763 88.7742 9.71973 79.5206 9.71973 69.9858C9.71973 60.4511 13.763 51.1975 21.8031 42.5342L21.8036 42.5336L24.2117 39.9308L24.3447 39.7871V39.5913V27.1642H29.2777H29.7777V26.6642V21.5827H53.3003H53.3998L53.4918 21.5446L55.1621 20.852C55.1627 20.8518 55.1633 20.8515 55.1639 20.8513C73.3629 13.4755 94.7356 9.58105 116.998 9.58105C139.232 9.58105 160.633 13.4755 178.832 20.8511C178.833 20.8514 178.834 20.8517 178.835 20.852L180.505 21.5446L180.597 21.5827H180.696H204.219V26.6931V27.1931H204.719H209.652V39.6202V39.816L209.785 39.9598L212.193 42.5625L212.194 42.5631C220.234 51.2264 224.277 60.48 224.277 70.0148C224.277 79.5495 220.234 88.8031 212.194 97.4664L212.193 97.467L209.785 100.07L209.652 100.213V100.409V112.865H204.719H204.219V113.365V118.476H180.696Z" fill="url(#paint0_radial_116_4341)" stroke="#4E5E80"/>
    <path d="M49.8119 124.566H24.9738V118.845V118.345H24.4738H19.2433V104.481V104.292L19.1186 104.15L16.5786 101.265L16.5781 101.264C8.09256 91.6532 3.81738 81.3781 3.81738 70.7819C3.81738 60.1858 8.09256 49.9107 16.5781 40.2997L16.5786 40.2991L19.1186 37.4134L19.2433 37.2717V37.083V23.2506H24.4738H24.9738V22.7506V17.0623H49.8119H49.9162L50.0117 17.0206L51.7735 16.2527C51.7741 16.2525 51.7748 16.2522 51.7754 16.2519C70.9726 8.07369 93.5164 3.75586 116.998 3.75586C140.449 3.75586 163.024 8.07371 182.221 16.2519C182.222 16.2522 182.222 16.2525 182.223 16.2527L183.985 17.0206L184.08 17.0623H184.185H209.023V22.7826V23.2826H209.523H214.753V37.1151V37.3038L214.878 37.4454L217.418 40.3312L217.418 40.3317C225.904 49.9428 230.179 60.2179 230.179 70.814C230.179 81.4101 225.904 91.6853 217.418 101.296L217.418 101.297L214.878 104.183L214.753 104.324V104.513V118.377H209.523H209.023V118.877V124.598H184.185H184.08L183.985 124.639L182.225 125.407C182.224 125.407 182.223 125.407 182.222 125.408C162.992 133.523 140.448 137.872 116.998 137.872C93.5475 137.872 70.9729 133.554 51.7759 125.376C51.7751 125.376 51.7743 125.376 51.7735 125.375L50.0117 124.607L49.9162 124.566H49.8119Z" stroke="#4E5E80"/>
    </g>
<path d="M70.6055 53.048H71.9175V54.216L71.7095 55.128H72.0775C72.2588 54.4667 72.6215 53.928 73.1655 53.512C73.7095 53.096 74.4188 52.888 75.2935 52.888C76.4242 52.888 77.3362 53.2773 78.0295 54.056C78.7335 54.8347 79.0855 55.8267 79.0855 57.032C79.0855 58.2267 78.7335 59.2133 78.0295 59.992C77.3362 60.7707 76.4242 61.16 75.2935 61.16C74.4295 61.16 73.7202 60.9573 73.1655 60.552C72.6215 60.136 72.2588 59.5973 72.0775 58.936H71.7095L71.9175 59.832V63.912H70.6055V53.048ZM71.9175 57.032C71.9175 58.0347 72.1948 58.7867 72.7495 59.288C73.3148 59.7893 74.0348 60.04 74.9095 60.04C75.7735 60.04 76.4668 59.7893 76.9895 59.288C77.5122 58.7867 77.7735 58.0347 77.7735 57.032C77.7735 56.0293 77.5122 55.2773 76.9895 54.776C76.4668 54.264 75.7735 54.008 74.9095 54.008C74.0348 54.008 73.3148 54.2587 72.7495 54.76C72.1948 55.2613 71.9175 56.0187 71.9175 57.032ZM80.5824 57.016C80.5824 55.8427 80.9717 54.8613 81.7504 54.072C82.529 53.2827 83.5424 52.888 84.7904 52.888C86.0277 52.888 87.0304 53.2827 87.7984 54.072C88.577 54.8613 88.9664 55.8427 88.9664 57.016C88.9664 58.2 88.577 59.1867 87.7984 59.976C87.0304 60.7653 86.0277 61.16 84.7904 61.16C83.5424 61.16 82.529 60.7653 81.7504 59.976C80.9717 59.1867 80.5824 58.2 80.5824 57.016ZM81.8944 57.016C81.8944 57.8907 82.1504 58.616 82.6624 59.192C83.1744 59.7573 83.8837 60.04 84.7904 60.04C85.697 60.04 86.401 59.752 86.9024 59.176C87.4144 58.6 87.6704 57.88 87.6704 57.016C87.6704 56.152 87.4144 55.4373 86.9024 54.872C86.401 54.296 85.697 54.008 84.7904 54.008C83.8837 54.008 83.1744 54.296 82.6624 54.872C82.1504 55.4373 81.8944 56.152 81.8944 57.016ZM96.5188 61L93.8628 57.304L92.1988 58.216V61H90.8868V49.24H92.1988V56.84L96.2468 54.632L96.0868 53.048H97.3988L97.5268 54.504C97.5694 55.016 97.3561 55.4 96.8868 55.656L94.9348 56.728L98.0068 61H96.5188ZM98.9886 56.92C98.9886 55.6613 99.3406 54.6747 100.045 53.96C100.759 53.2453 101.693 52.888 102.845 52.888C103.975 52.888 104.877 53.2293 105.549 53.912C106.221 54.5947 106.557 55.544 106.557 56.76V57.272H100.269C100.311 58.104 100.551 58.7813 100.989 59.304C101.437 59.816 102.119 60.072 103.037 60.072C103.698 60.072 104.242 59.9173 104.669 59.608C105.095 59.288 105.378 58.824 105.517 58.216H106.829C106.743 58.568 106.615 58.8987 106.445 59.208C106.285 59.5173 106.061 59.8267 105.773 60.136C105.495 60.4453 105.117 60.696 104.637 60.888C104.167 61.0693 103.634 61.16 103.037 61.16C101.693 61.16 100.679 60.7653 99.9966 59.976C99.3246 59.176 98.9886 58.1573 98.9886 56.92ZM100.269 56.28H105.277C105.277 55.6187 105.063 55.0747 104.637 54.648C104.21 54.2107 103.613 53.992 102.845 53.992C102.077 53.992 101.453 54.2107 100.973 54.648C100.503 55.0853 100.269 55.6293 100.269 56.28ZM108.637 61V53.992C108.637 53.2347 109.005 52.872 109.741 52.904L114.157 53.048V54.168L109.949 54.024V61H108.637ZM121.012 61V53.992C121.012 53.2347 121.38 52.872 122.116 52.904L126.532 53.048V54.168L122.324 54.024V61H121.012ZM127.192 57.016C127.192 55.8427 127.581 54.8613 128.36 54.072C129.138 53.2827 130.152 52.888 131.4 52.888C132.637 52.888 133.64 53.2827 134.408 54.072C135.186 54.8613 135.576 55.8427 135.576 57.016C135.576 58.2 135.186 59.1867 134.408 59.976C133.64 60.7653 132.637 61.16 131.4 61.16C130.152 61.16 129.138 60.7653 128.36 59.976C127.581 59.1867 127.192 58.2 127.192 57.016ZM128.504 57.016C128.504 57.8907 128.76 58.616 129.272 59.192C129.784 59.7573 130.493 60.04 131.4 60.04C132.306 60.04 133.01 59.752 133.512 59.176C134.024 58.6 134.28 57.88 134.28 57.016C134.28 56.152 134.024 55.4373 133.512 54.872C133.01 54.296 132.306 54.008 131.4 54.008C130.493 54.008 129.784 54.296 129.272 54.872C128.76 55.4373 128.504 56.152 128.504 57.016ZM137.082 57.016C137.082 55.8427 137.472 54.8613 138.25 54.072C139.029 53.2827 140.042 52.888 141.29 52.888C142.528 52.888 143.53 53.2827 144.298 54.072C145.077 54.8613 145.466 55.8427 145.466 57.016C145.466 58.2 145.077 59.1867 144.298 59.976C143.53 60.7653 142.528 61.16 141.29 61.16C140.042 61.16 139.029 60.7653 138.25 59.976C137.472 59.1867 137.082 58.2 137.082 57.016ZM138.394 57.016C138.394 57.8907 138.65 58.616 139.162 59.192C139.674 59.7573 140.384 60.04 141.29 60.04C142.197 60.04 142.901 59.752 143.402 59.176C143.914 58.6 144.17 57.88 144.17 57.016C144.17 56.152 143.914 55.4373 143.402 54.872C142.901 54.296 142.197 54.008 141.29 54.008C140.384 54.008 139.674 54.296 139.162 54.872C138.65 55.4373 138.394 56.152 138.394 57.016ZM157.085 52.888C157.885 52.888 158.493 53.176 158.909 53.752C159.336 54.3173 159.549 55.064 159.549 55.992V61H158.237V56.296C158.237 55.4853 158.12 54.904 157.885 54.552C157.65 54.1893 157.224 54.008 156.605 54.008C155.826 54.008 155.208 54.328 154.749 54.968C154.301 55.5973 154.077 56.44 154.077 57.496V61H152.765V56.296C152.765 55.4853 152.648 54.904 152.413 54.552C152.178 54.1893 151.752 54.008 151.133 54.008C150.354 54.008 149.736 54.328 149.277 54.968C148.829 55.5973 148.605 56.44 148.605 57.496V61H147.293V53.048H148.605V54.408L148.397 55.304H148.765C149.128 53.6933 150.077 52.888 151.613 52.888C152.306 52.888 152.85 53.1067 153.245 53.544C153.65 53.9707 153.901 54.5573 153.997 55.304H154.237C154.6 53.6933 155.549 52.888 157.085 52.888Z" fill="#4E5E80"/>
<path d="M80.0053 85L84.5333 78.344C85.12 77.4907 85.4133 76.8133 85.4133 76.312C85.4133 75.3947 84.736 74.936 83.3813 74.936H80.2453V74.184H85.2373C86.8373 74.184 88.112 74.5413 89.0613 75.256C90.1386 76.056 90.6773 77.224 90.6773 78.76C90.6773 79.656 90.368 80.4133 89.7493 81.032L86.5493 84.232H90.0213V85H80.0053ZM98.3234 74.12H105.603V84.44H107.987V85H98.3234V74.12ZM118.339 78.664V79.432H115.587V84.104H118.755V85H109.027V74.12H118.755V74.76H115.587V78.664H118.339ZM119.56 74.12H126.264L128.728 79.016L131.64 74.152L133.512 74.168L127.032 85H125.432L119.56 74.12ZM143.87 78.664V79.432H141.118V84.104H144.286V85H134.558V74.12H144.286V74.76H141.118V78.664H143.87ZM145.652 74.12H152.932V84.44H155.316V85H145.652V74.12Z" fill="#B5C4E3"/>
<defs>
    <radialGradient id="paint0_radial_116_4341" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.443 7.05438) rotate(97.2327) scale(122.805 213.946)">
        <stop stop-color="#354262"/>
        <stop offset="1" stop-color="#2C354A"/>
    </radialGradient>
    <clipPath id="clip0_116_4341">
        <rect width="234" height="140" fill="white"/>
    </clipPath>
</defs>
</svg>`

function generateListItems(amount) {
    let res = ''
    for (let i = 0; i <= amount; i++) {
        res+= listPattern
    }
    return res
}

function generateSlideItems(amount) {
    let res = ''

    for (let i = 0; i <= amount; i++) {
        res+= `<div class="swiper-slide"></div>`
    }

    return `<div class="swiper">
            <div class="swiper-wrapper">
                ${res}
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>`
}

btnModeGrid.addEventListener('click', () => {
    mainOut.classList.add('mode-grid')
    btnNodeSlide.classList.remove('button-mode-active')
    btnModeGrid.classList.add('button-mode-active')
    mainOut.innerHTML = generateListItems(69)
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
})
