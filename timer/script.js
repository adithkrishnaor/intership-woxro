const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const timerDisplay = document.getElementById("timerDisplay");

let timerInterval;

start.addEventListener("click", () => {
  const h = parseInt(hour.value || 0);
  const m = parseInt(minute.value || 0);
  const s = parseInt(second.value || 0);

  console.log(h, m, s);
  const total = h * 3600 + m * 60 + s;
  const curr = new Date().getTime();
  const target = curr + total * 1000;

  timerInterval = setInterval(() => {
    currentTime = new Date().getTime();
    diff = target - currentTime;
    if (diff <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = "Time's up!";
      return;
    }
    const hrs = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    timerDisplay.innerHTML = `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  });
});

reset.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerDisplay.innerHTML = "00:00:00";
  hour.value = "";
  minute.value = "";
  second.value = "";
});
