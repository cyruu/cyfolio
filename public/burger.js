//burger
const blogcontainer = document.getElementById("blogcontainer");

const burgerIcon = document.getElementById("burgericon");
const burgerMenu = document.querySelector(".burgermenu");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("blogshow");
  document.body.classList.toggle("noscroll");
  // burgerIcon.classList.toggle("colorwhite");
});
// burgerIcon.addEventListener("blur", () => {
//   document.body.classList.remove("noscroll");
//   burgerMenu.classList.remove("show");
// });
function removeBurgerMenu() {
  document.body.classList.remove("noscroll");
  burgerMenu.classList.remove("blogshow");
}
// on blur hatayera particular section lai click garda burgermenu hatne
blogcontainer.addEventListener("click", () => {
  removeBurgerMenu();
});

// harek menu lai thickda ni burgermenu hatna paryo
const burgerLinks = document.querySelectorAll(".burgerlink");
burgerLinks.forEach((burgerLink) => {
  burgerLink.addEventListener("click", () => {
    removeBurgerMenu();
  });
});
