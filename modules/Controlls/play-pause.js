import { toggleBetweenStopOrTimeEdit } from './stop-edit.js'
import { Time, countdown } from '../../script.js'

const btnPlay = document.querySelector('#btn-play')
const btnPause = document.querySelector('#btn-pause')

btnPlay.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  countdown()
})

btnPause.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  clearTimeout(Time.idCountdown)
})

export function toggleBetweenPlayOrPause() {
  btnPlay.classList.toggle('hide')
  btnPause.classList.toggle('hide')
  toggleBetweenStopOrTimeEdit()
}