const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
  toggler.classList.toggle("toggler-rotate");
});