let barsIcon = document.querySelector(".icon");
let closeIcon = document.querySelector(".fa-xmark");
let nav = document.querySelector("nav");

barsIcon.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("show-nav");
});


