export const Time = {
  minutes: '00',
  seconds: '05',
}

export const minutesDisplay = document.querySelector('#minutes')
export const secondsDisplay = document.querySelector('#seconds')

minutesDisplay.textContent = String(Time.minutes)
secondsDisplay.textContent = String(Time.seconds)

export function countdown() {
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
      console.log('Terminou');
      return
    }

    countdown()
  }, 1000)
}