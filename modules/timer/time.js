import { toggleBetweenStopOrWatch } from '../buttons/stop-watch.js'
import { toggleBetweenPlayOrPause } from '../buttons/play-pause.js'

export const Time = {
  minutes: '00',
  seconds: '05',
  finish: false
}

export const minutesDisplay = document.querySelector('#minutes')
export const secondsDisplay = document.querySelector('#seconds')

minutesDisplay.textContent = String(Time.minutes)
secondsDisplay.textContent = String(Time.seconds)

export function countdown() {
  if (Time.finish === false) {
    setTimeout(function () {
      Time.minutes = Number(minutesDisplay.textContent)
      Time.seconds = Number(secondsDisplay.textContent)

      if (Time.seconds <= 0) {
        Time.seconds = 60
        Time.minutes--
      }

      Time.seconds--

      // console.log(minutesDisplay.textContent);
      console.log(secondsDisplay.textContent);

      if (Time.minutes < 10) {
        Time.minutes = '0' + Number(Time.minutes)
      }

      if (Time.seconds < 10) {
        Time.seconds = '0' + Number(Time.seconds)
        console.log(Time.seconds);
      }

      minutesDisplay.textContent = String(Time.minutes)
      secondsDisplay.textContent = String(Time.seconds)

      if (Time.minutes == 0 && Time.seconds == 0) {
        resetDisplayCountdown()
        toggleBetweenPlayOrPause()
        return
      }

      countdown()
    }, 1000)

  } else {
    resetDisplayCountdown()
    return
  }
}

export function resetDisplayCountdown() {
  Time.minutes = '00'
  Time.seconds = '05'

  minutesDisplay.textContent = String(Time.minutes)
  secondsDisplay.textContent = String(Time.seconds)
}