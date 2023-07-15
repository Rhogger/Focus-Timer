import './modules/Controlls/play-pause.js'
import './modules/Controlls/stop-edit.js'
import './modules/Controlls/mute-unmute.js'
import { toggleBetweenPlayOrPause } from './modules/Controlls/play-pause.js'

export const Time = {
  minutes: '00',
  seconds: '08',
  idCountdown: null,
}

export const minutesDisplay = document.querySelector('#minutes')
export const secondsDisplay = document.querySelector('#seconds')

export function countdown() {
  let minutes
  let seconds

  Time.idCountdown = setTimeout(function () {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) {
      seconds = 60
      minutes--
    }

    if (minutes < 0) {
      clearTimeout(Time.idCountdown)

      alert('Defina um tempo para o timer.')

      minutes = prompt('Quantos minutos deseja contar?').padStart(2, '0')

      Time.minutes = minutes

      seconds = 1
    }

    seconds--

    displayTimer(minutes, seconds)

    if (minutes == 0 && seconds == 0) {
      resetDisplayCountdown()
      toggleBetweenPlayOrPause()
      return
    }

    countdown()
  }, 1000)
}

export function resetDisplayCountdown() {
  displayTimer(Time.minutes, 0)
}

function displayTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

