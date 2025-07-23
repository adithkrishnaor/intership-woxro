const fromCurr = document.getElementById("fromCurrency");
const toCurr = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

const apiKey = "75e991e42b673e62b93019fe";
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest`;

async function populateCurrency() {
  try {
    const res = await fetch(`${apiURL}/USD`);
    const data = await res.json();
    const currencies = Object.keys(data.conversion_rates);
    currencies.forEach((currency) => {
      const optionFrom = document.createElement("option");
      optionFrom.value = currency;
      optionFrom.textContent = currency;
      fromCurr.appendChild(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.value = currency;
      optionTo.textContent = currency;
      toCurr.append(optionTo);
    });
    fromCurr.value = "USD";
    toCurr.value = "INR";
    calculateConversion();
  } catch (error) {
    console.log("Error in fetching", error);
    result.textContent = "Error in fetching";
  }
}

async function calculateConversion() {
  const fromCurrency = fromCurr.value;
  const toCurrency = toCurr.value;
  const amt = parseInt(amount.value);
  try {
    const res = await fetch(`${apiURL}/${fromCurrency}`);
    const data = await res.json();
    const rate = data.conversion_rates[toCurrency];
    const conAmt = (amt * rate).toFixed(2);
    result.textContent = `${conAmt} ${toCurrency}`;
  } catch (error) {
    console.log("Error fetching", error);
  }
}

fromCurr.addEventListener("change", calculateConversion);
toCurr.addEventListener("change", calculateConversion);
amount.addEventListener("input", calculateConversion);

populateCurrency();
