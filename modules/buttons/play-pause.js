const btnPlay = document.querySelector('#btn-play')
const btnPause = document.querySelector('#btn-pause')

btnPlay.addEventListener('click', toggleBetweenPlayOrPause)
btnPause.addEventListener('click', toggleBetweenPlayOrPause)

export function toggleBetweenPlayOrPause() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
}