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


    
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");
    let a = 0;
    
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY || document.documentElement.scrollTop;
      
    
      if (currentScroll > lastScrollTop) {
        if (a<=-50){
          a=a-0;
        }else {
          a=a-5;
        }
   
     
     
        
        // Scroll down
        console.log(a)
        navbar.style.transform = `translateY(${a}px)`;

       
      
      } else {
        if (a>=0){
          a=0

        }
        else {
          a=a+5

        }
        // Scroll up

    
        console.log(a);
        navbar.style.transform = `translateY(${a}px)`;


      }
      
      lastScrollTop = currentScroll;
    });
