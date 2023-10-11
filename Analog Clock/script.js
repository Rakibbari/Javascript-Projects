let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function myFunction() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourRotate = 30 * hh + mm / 2;
  let minRotate = 6 * mm;
  let secRotate = 6 * ss;

  hour.style.transform = `rotate(${hourRotate}deg)`;
  min.style.transform = `rotate(${minRotate}deg)`;
  sec.style.transform = `rotate(${secRotate}deg)`;

  let sound = new Audio("sound1.mp3");
  sound.play();
}

setInterval(myFunction, 1000);
