function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("main-nav-open");
  hamburger.classList.toggle("open");
});

let dt = document.getElementById("dte");
dt.innerHTML = new Date().getFullYear();
