var slideElement = document.getElementsByClassName("brick");
const nav = document.querySelector("nav");
const contenContainer = document.getElementById("content-container");
const aside = document.querySelector("aside");

document.addEventListener("DOMContentLoaded", function () {
  nav.classList.add("active");
  contenContainer.classList.add("active");
  aside.classList.add("active");

  var slideElementsArray = Array.from(slideElement);

  console.log(slideElementsArray);
  slideElementsArray.forEach(function (element) {
    element.classList.add("active");
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let a = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    if (a > -50) a -= 6;
  } else {
    if (a < 0) a += 6;
  }
  navbar.style.transform = `translateY(${a}px)`;
  lastScrollTop = currentScroll;
});

//theme

const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const button = document.querySelector("button");
const body = document.querySelector("body");

const toggleDarkMode = function (e) {
  e.preventDefault();
  console.log(e);
  console.log("anjing");

  // let storageTheme = localStorage.getItem("theme")
  let cek = body.getAttribute("theme");

  if (cek === "light") {
    body.setAttribute("theme", "dark");
    body.setAttribute("class", "dark");
    // localStorage.setItem("theme","dark")
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  } else if (cek === "dark") {
    // Ubah ke mode terang
    // localStorage.setItem("theme","light")
    body.setAttribute("theme", "light");
    body.setAttribute("class", "light");
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
};

button.addEventListener("click", toggleDarkMode);
