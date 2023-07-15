import { toggleBetweenPlayOrPause } from './play-pause.js'
import { Time, resetDisplayCountdown, minutesDisplay, secondsDisplay } from '../../script.js'

const btnStop = document.querySelector('#btn-stop')
const btnTimeEdit = document.querySelector('#btn-watch')

btnStop.addEventListener('click', () => {
  toggleBetweenPlayOrPause()
  clearTimeout(Time.idCountdown)
  resetDisplayCountdown()
})

btnTimeEdit.addEventListener('click', () => {
  Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
  Time.minutes = Math.trunc(Number(Time.minutes))

  while (Number(Time.minutes) < 0 || Number(Time.minutes) > 60 || isNaN(Number(Time.minutes))) {
    alert('Tempo inválido, digite entre 1 e 60 minutos')

    Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
  }

  minutesDisplay.textContent = String(Time.minutes).padStart(2, '0')

  secondsDisplay.textContent = '00'
})

export function toggleBetweenStopOrTimeEdit() {
  btnStop.classList.toggle('hide')
  btnTimeEdit.classList.toggle('hide')
}