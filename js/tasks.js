// task-1: console.logs =>
const listItem = document.querySelector("#categories");
// console.log(listItem);
const categories = listItem.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((categori) => {
  console.log(`Categori: ${categori.querySelector("h2").textContent}`);
  console.log(`Elements: ${categori.querySelectorAll("li").length}`);
  categori.style.borderRadius = "8px";
  categori.style.backgroundColor = "#f6f6fe";
  categori.style.padding = "16px";
  categori.style.display = "block";
  categori.style.maxWidth = "392px";
  categori.style.margin = "24px";
});

// task-2: images blok
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const imgGallery = document.querySelector(".gallery");
function addGalleryJS(arrey) {
  const preHtmlArr = [];
  arrey.forEach((elem) => {
    preHtmlArr.push(`<li><img src="${elem.url}" alt="${elem.alt}" /></li>`);
  });
  imgGallery.insertAdjacentHTML("afterbegin", preHtmlArr.join(""));
}

addGalleryJS(images);
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.style.width = "360px";
  img.style.height = "300px";
  img.style.objectFit = "cover";
});
// task-3:
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const name = input.value.trim();
  output.textContent = name === "" ? "Anonymous" : name;
});
// task-4
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});
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
