const countdownDate = new Date("2023-04-20T05:30:00Z").getTime();

const cntElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const daysLabel = document.getElementById("days-l");
const hoursLabel = document.getElementById("hours-l");
const minutesLabel = document.getElementById("minutes-l");
const secondsLabel = document.getElementById("seconds-l");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days === 0){
    daysElement.style.display = 'none';
    daysLabel.style.display = 'none';
  } else {
    daysElement.style.display = 'inline-block';
    daysLabel.style.display = 'inline-block';
  };
  if (hours === 0){
    hoursElement.style.display = 'none';
    hoursLabel.style.display = 'none';
  } else {
    hoursElement.style.display = 'inline-block';
    hoursLabel.style.display = 'inline-block';
  };
  if (minutes === 0){
    minutesElement.style.display = 'none';
    minutesLabel.style.display = 'none';
  } else {
    minutesElement.style.display = 'inline-block';
    minutesLabel.style.display = 'inline-block';
  };
  if (seconds === 0){
    secondsElement.style.display = 'none';
    secondsLabel.style.display = 'none';
  } else {
    secondsElement.style.display = 'inline-block';
    secondsLabel.style.display = 'inline-block';
  };
  if ( days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    cntElement.innerText = 'Time is up !';
  }

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}, 1000);
