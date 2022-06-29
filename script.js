let form = document.querySelector("form");
let input = document.getElementById("choice");
let display = document.getElementById("countdownDisplay");

let totalSeconds;
console.log(totalSeconds);

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  let sec = seconds < 10 ? `0${seconds}` : seconds;
  totalSeconds--;

  display.textContent = ` ${minutes} : ${sec} `;

  if (totalSeconds == 0) {
    display.textContent = ` términer`;
    return totalSeconds;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  choice.value = "";
  setInterval(countDown, 100);
});
