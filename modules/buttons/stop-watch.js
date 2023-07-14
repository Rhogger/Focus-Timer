import { toggleBetweenPlayOrPause } from './play-pause.js'
import { Time, minutesDisplay, secondsDisplay, countdown } from '../timer/time.js'

const btnStop = document.querySelector('#btn-stop')
const btnWatch = document.querySelector('#btn-watch')

btnStop.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  Time.finish = true
})

btnWatch.addEventListener('click', () => {
  Time.minutes = prompt('Quantos minutos deseja contar?')

  minutesDisplay.textContent = Number(Time.minutes)

  if (Time.minutes < 10) {
    minutesDisplay.textContent = '0' + Number(Time.minutes)
  }

  secondsDisplay.textContent = '00'
})

export function toggleBetweenStopOrWatch() {
  btnStop.classList.toggle('hide')
  btnWatch.classList.toggle('hide')
}