const lenChoosen = document.getElementById("length");
const numChoosen = document.getElementById("includeNum");
const uppChoosen = document.getElementById("includeUpper");
const specChoosen = document.getElementById("includeSpecial");
const gen = document.getElementById("genPass");
const display = document.getElementById("disPass");
const lenDis = document.getElementById("lenDis");
const copyBtn = document.getElementById("copyBtn");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
let password = "";

gen.addEventListener("click", () => {
  password = "";
  let characters = lowercaseChars;
  const length = parseInt(lenChoosen.value);
  if (numChoosen.checked) {
    characters += numberChars;
  }
  if (uppChoosen.checked) {
    characters += uppercaseChars;
  }
  if (specChoosen.checked) {
    characters += symbolChars;
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  display.textContent = password;
});

lenChoosen.addEventListener("input", () => {
  lenDis.textContent = lenChoosen.value;
});

copyBtn.addEventListener("click", () => {
  if (password == "") {
    alert("Please generate a password first.");
    return;
  }
  navigator.clipboard.writeText(password.trim());
  alert("Password copied to clipboard!");
});
