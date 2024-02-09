var slideElement = document.getElementsByClassName("brick");
const nav =document.querySelector('nav');
const contenContainer =document.getElementById('content-container')
const aside = document.querySelector('aside')
document.addEventListener("DOMContentLoaded", function () {
  nav.classList.add('active');
  contenContainer.classList.add('active')
  aside.classList.add('active');


      
      console.log(slideElement);
      for (var i = 0; i < 6; i++) {
        slideElement[i].classList.add('active');}
    });

