// Selector functions
const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

//GSAP
const tl = gsap.timeline();

//change navigation
const burger = get(".burger");
const navbar = get(".nav-bar");
const line1 = get(".line1");
const line2 = get(".line2");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  burger.classList.toggle("fixed");
});
