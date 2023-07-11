const btnStop = document.querySelector('#btn-stop')
const btnWatch = document.querySelector('#btn-watch')

btnStop.addEventListener('click', toggleBetweenStopOrWatch)
btnWatch.addEventListener('click', toggleBetweenStopOrWatch)

export function toggleBetweenStopOrWatch() {
  btnStop.classList.toggle('hide')
  btnWatch.classList.toggle('hide')
}