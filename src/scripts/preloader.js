// PRELOADER
const preloader = document.querySelector('.preloader')
let audio = new Audio('../assets/favicon/01_-logo-_-game-over.mp3')
setTimeout(() => {
    document.body.classList.remove('loading')
    audio.pause()
}, 4000)

preloader.addEventListener('mouseover', () => {
    audio.play()
})
