const place = document.querySelector('.place')

function generateHtml(number) {

    return `
            <div class="player player-active">
                <div class="player__armchair">
                    
                </div>
                <div class="player__badge  player-loading"">
                    <div class="player__card">
                        <!-- тут должна находться карта игрока -->
                        <img src="./assets/images/svg/card.svg" alt="card">
                    </div>
                    <div class="player__info">
                        <div class="player__title">place</div>
                        <div class="player__number">№ <span>${number}</span></div>
                    </div>
                </div>
            </div>
    `
}

// У него 2 состояния как на макете, менять их можно убирая класс player-active

for (let i = 1; i <= 10; i++) {
    place.innerHTML += generateHtml(i)
}
