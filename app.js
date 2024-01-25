const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".mobile-menu");

openMenuBtn.addEventListener("click", () => {
  menu.classList.add("open-menu");
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("open-menu");
});
