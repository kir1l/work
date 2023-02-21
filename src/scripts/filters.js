// Filters
const filters = document.querySelectorAll('.filter')
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(el => {
            el.classList.remove('filter-active')
        })
        filter.classList.add('filter-active')
    })
})

// Mobile
const filterBtn = document.querySelector('.filters-btn'),
    filtersPopup = document.querySelector('.filters')

filterBtn.addEventListener('click', () => {
    filtersPopup.classList.toggle('filters-active')
    filterBtn.classList.toggle('filters-btn-clicked')
})
