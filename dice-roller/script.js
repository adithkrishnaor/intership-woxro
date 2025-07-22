const roll = document.getElementById("roll");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
roll.addEventListener("click", () => {
  console.log("Roll clicked");
  const randomNum1 = Math.floor(Math.random() * 6) + 1;
  result1.textContent = randomNum1;
  const randomNum2 = Math.floor(Math.random() * 6) + 1;
  result2.textContent = randomNum2;
});
