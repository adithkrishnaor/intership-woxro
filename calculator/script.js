const display = document.getElementById("display");
const nums = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let currentInput = "";
let operator = "";
let previousInput = "";

clear.addEventListener("click", () => {
  console.log("clear clicked");
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
});

nums.forEach((num) => {
  num.addEventListener("click", () => {
    console.log("num clicked");
    currentInput += num.dataset.value;
    display.value = currentInput;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    console.log("operator clicked");
    if (currentInput === "") return;
    operator = op.dataset.value;
    console.log(operator);
    previousInput = currentInput;
    currentInput = "";
  });
});

equal.addEventListener("click", () => {
  console.log("equal clicked");
  if (currentInput === "" || previousInput === "") return;
  calculate();
  currentInput = "";
  previousInput = "";
  operator = "";
});

function calculate() {
  console.log("calculating...");
  let res;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  console.log(prev, operator, curr);
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operator) {
    case "+":
      res = prev + curr;
      break;
    case "-":
      res = prev - curr;
      break;
    case "*":
      res = prev * curr;
      break;
    case "/":
      res = prev / curr;
      break;
    default:
      return;
  }
  console.log(res);
  display.value = res;
}
