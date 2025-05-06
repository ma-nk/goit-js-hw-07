function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const presentColor = document.querySelector(".color");
const changeBgColor = document.querySelector(".change-color");

changeBgColor.addEventListener("click", () => {
  presentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = presentColor.textContent;
});
