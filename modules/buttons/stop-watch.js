import { toggleBetweenPlayOrPause } from './play-pause.js'
import { Time, minutesDisplay, secondsDisplay } from '../timer/time.js'

const btnStop = document.querySelector('#btn-stop')
const btnWatch = document.querySelector('#btn-watch')

btnStop.addEventListener('click', toggleBetweenPlayOrPause)

btnWatch.addEventListener('click', () => {
  Time.minutes = prompt('Quantos minutos deseja contar?')
  minutesDisplay.textContent = Number(Time.minutes)
  secondsDisplay.textContent = '00'
})

export function toggleBetweenStopOrWatch() {
  btnStop.classList.toggle('hide')
  btnWatch.classList.toggle('hide')
}