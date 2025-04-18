// task-5
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
const style = document.createElement("style");
style.textContent = `
  .destroy-btn {
    width: 120px;
    height: 40px;
    background-color: #ff4e4e;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .destroy-btn:hover {
    background: #ff7070;
  }
`;
document.head.appendChild(style);

const destroyBtn = document.createElement("button");
destroyBtn.textContent = "Destroy";
destroyBtn.type = "button";
destroyBtn.classList.add("destroy-btn");

const widget = document.querySelector(".widget");
widget.appendChild(destroyBtn);

destroyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  colorSpan.textContent = "-";
});
