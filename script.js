var slideElement = document.getElementsByClassName("brick");
document.addEventListener("DOMContentLoaded", function () {
      
      console.log(slideElement);
      for (var i = 0; i < 6; i++) {
        slideElement[i].classList.add('active');}
    });

