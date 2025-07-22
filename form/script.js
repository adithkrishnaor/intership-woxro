const inpName = document.getElementById("name");
const num = document.getElementById("num");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");
const form = document.getElementById("form");

const nameError = document.getElementById("name-error");
const numError = document.getElementById("num-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function validateForm() {
  let isValid = true;

  if (inpName.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (num.value.trim() === "" || isNaN(num.value)) {
    numError.textContent = "A valid number is required.";
    isValid = false;
  } else {
    numError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "A valid email is required.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  return isValid;
}
