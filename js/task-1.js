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
