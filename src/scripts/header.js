const btnConnect = document.querySelector('.header__btn-connect'),
        cond1 = document.querySelector('.cond1'),
        cond2 = document.querySelector('.cond2')

btnConnect.addEventListener('click', () => {
    cond1.classList.toggle('hidden')
    cond2.classList.toggle('hidden')
})
