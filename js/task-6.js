function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => createBox(Number(input.value)));
destroyBtn.addEventListener("click", destroyBox);

const boxSize = 30;
function createBox(amount) {
  if (input.value > 100 || input.value < 1) {
    alert("Enter number from 1 to 100!");
    input.value = "";
  } else {
    boxes.innerHTML = "";
    const boxList = [];
    for (let i = 0; i < amount * 10; i += 10) {
      const box = document.createElement("div");
      box.style.height = `${boxSize + i}px`;
      box.style.width = `${boxSize + i}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxList.push(box);
    }
    boxes.append(...boxList);
    input.value = "";
  }
}

function destroyBox() {
  boxes.innerHTML = "";
}
