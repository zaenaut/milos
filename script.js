// script.js
console.log("Welcome to your site, Milos!");
const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const colors = ["#f0f0f0", "#ffe4e1", "#d1e7dd", "#fef3c7", "#e0f7fa"];
  return colors[Math.floor(Math.random() * colors.length)];
}
const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});