import { toggleBetweenStopOrWatch } from './stop-watch.js'
import { Time, countdown } from '../timer/time.js'

const btnPlay = document.querySelector('#btn-play')
const btnPause = document.querySelector('#btn-pause')

btnPlay.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  Time.paused = false
  countdown()
})

btnPause.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  Time.paused = true
})

export function toggleBetweenPlayOrPause() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
  toggleBetweenStopOrWatch()
}