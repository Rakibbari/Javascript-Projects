let time = document.getElementById("clockTime");
let timeShift = document.getElementById("clockShift");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let period = "AM";

  if (hour >= 12) {
    period = "PM";

    if (hour > 12) {
      hour = hour - 12;
    }
  }
  if (hour === 0) {
    hour = 12;
  }

  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  time.innerHTML = `${hour}:${min}:${sec}`;
  timeShift.innerHTML = period;
};
