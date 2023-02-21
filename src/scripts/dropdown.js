const dropdowns = document.querySelectorAll('.dropdown')
const mainMask = document.querySelector('.mask')

function isOtherDropdownsOpened() {
    return [...dropdowns].some(el => el.classList.contains('dropdown-active'))
}
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select'),
        caret = dropdown.querySelector('.caret'),
        menu = dropdown.querySelector('.menu'),
        options = dropdown.querySelectorAll('.menu li'),
        selected = dropdown.querySelector('.selected')

    selected.textContent = options.length

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-active')
        dropdown.classList.toggle('dropdown-active')
        isOtherDropdownsOpened() ?  mainMask.classList.add('mask-active') : mainMask.classList.remove('mask-active')
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-active')
            mainMask.classList.remove('mask-active')
            dropdown.classList.remove('dropdown-active')
        })
    })
})
