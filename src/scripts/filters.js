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
