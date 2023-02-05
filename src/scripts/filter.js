const filterBtn = document.querySelector('.filters-btn'),
    filtersPopup = document.querySelector('.filters')

filterBtn.addEventListener('click', () => {
    filtersPopup.classList.toggle('filters-active')
    filterBtn.classList.toggle('filters-btn-clicked')
})
