const btnMute = document.querySelector('#btn-mute')
const btnUnmute = document.querySelector('#btn-unmute')

btnMute.addEventListener('click', toggleBetweenMuteOrUnmute)
btnUnmute.addEventListener('click', toggleBetweenMuteOrUnmute)

export function toggleBetweenMuteOrUnmute() {
  btnMute.classList.toggle('hide')
  btnUnmute.classList.toggle('hide')
}