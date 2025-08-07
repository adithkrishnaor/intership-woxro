const hamburg = document.getElementById("hamburg");
const menu = document.getElementById("menu");

hamburg.addEventListener("click", () => {
  console.log("hamburger clicked");
  menu.classList.toggle("-translate-x-1/4");
  menu.classList.toggle("-translate-x-full");
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    console.log("menu link clicked");
    menu.classList.add("-translate-x-full");
    menu.classList.remove("translate-x-0");
  }
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !hamburg.contains(e.target)) {
    menu.classList.add("-translate-x-full");
    menu.classList.remove("translate-x-0");
  }
});

let isOpen = false;

hamburg.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    menu.classList.remove("-translate-x-full");
    hamburg.innerText = "X";
    hamburg.classList.remove("text-[#FCB72B]");
    hamburg.classList.add("text-[#FCB72B]");
  } else {
    menu.classList.add("-translate-x-full");
    hamburg.innerText = "☰";
    hamburg.classList.remove("text-white");
    hamburg.classList.add("text-[#FCB72B]");
  }
});
