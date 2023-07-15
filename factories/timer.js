export default function Timer({ Time, minutesDisplay, secondsDisplay, toggleBetweenPlayOrPause }) {
  function countdown() {
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

      updateDisplay(minutes, seconds)

      if (minutes == 0 && seconds == 0) {
        resetDisplayCountdown()
        toggleBetweenPlayOrPause()
        return
      }

      countdown()
    }, 1000)
  }

  function resetDisplayCountdown() {
    updateDisplay(Time.minutes, 0)
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  return {
    countdown,
    resetDisplayCountdown,
    updateDisplay
  }
}