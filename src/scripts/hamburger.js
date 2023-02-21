const mobileMenuOpenBtn = document.querySelector('#hamburger-btn'),
    menu = document.querySelector('.mobile-menu')

mobileMenuOpenBtn.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu-active')
    mobileMenuOpenBtn.classList.toggle('hamburger-active')
})
