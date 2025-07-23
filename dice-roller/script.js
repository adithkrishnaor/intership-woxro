const roll = document.getElementById("roll");
const img1 = document.getElementById("dice-1");
const img2 = document.getElementById("dice-2");
roll.addEventListener("click", () => {
  console.log("Roll clicked");
  const randomNum1 = Math.floor(Math.random() * 6) + 1;
  img1.src = `../assets/dice-${randomNum1}.png`;
  const randomNum2 = Math.floor(Math.random() * 6) + 1;
  img2.src = `../assets/dice-${randomNum2}.png`;
});
