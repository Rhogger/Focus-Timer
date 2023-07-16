import './factories/mute-unmute.js'
import Timer from './factories/timer.js'
import Controls from './factories/controls.js'

const btnPlay = document.querySelector('#btn-play')
const btnPause = document.querySelector('#btn-pause')
const btnStop = document.querySelector('#btn-stop')
const btnTimeEdit = document.querySelector('#btn-watch')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const Time = {
  minutes: '01',
  seconds: '10',
  idCountdown: null,
}

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnTimeEdit
})

const timer = Timer({
  Time,
  minutesDisplay,
  secondsDisplay,
  toggleBetweenPlayOrPause: controls.toggleBetweenPlayOrPause
})

btnPlay.addEventListener('click', () => {
  play()
})

btnPause.addEventListener('click', () => {
  pause()
})

btnStop.addEventListener('click', () => {
  pause()
  timer.resetDisplayCountdown()
})

btnTimeEdit.addEventListener('click', () => {
  Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
  Time.minutes = Math.trunc(Number(Time.minutes))

  while (Number(Time.minutes) < 0 || Number(Time.minutes) > 60 || isNaN(Number(Time.minutes))) {
    alert('Tempo inválido, digite entre 1 e 60 minutos')

    Time.minutes = Number(prompt('Quantos minutos deseja contar?'))
  }

  timer.updateDisplay(Time.minutes, 0)
})

function play() {
  controls.toggleBetweenPlayOrPause()
  timer.countdown()
}

function pause() {
  controls.toggleBetweenPlayOrPause()
  clearTimeout(Time.idCountdown)
}