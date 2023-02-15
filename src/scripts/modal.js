const btnOpenModal = document.querySelector('.basket'),
    modal = document.querySelector('.modal')

btnOpenModal.addEventListener('click', () => {
    btnOpenModal.classList.toggle('basket-clicked')
    modal.classList.toggle('modal-active')
})
