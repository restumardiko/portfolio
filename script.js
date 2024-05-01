var slideElement = document.getElementsByClassName("brick");
const nav =document.querySelector('nav');
const contenContainer =document.getElementById('content-container')
const aside = document.querySelector('aside')
document.addEventListener("DOMContentLoaded", function () {
  nav.classList.add('active');
  contenContainer.classList.add('active')
  aside.classList.add('active');

  var slideElementsArray = Array.from(slideElement); // atau [...slideElement]

  console.log(slideElementsArray);
  slideElementsArray.forEach(function(element) {
    element.classList.add('active'); })     
      
  
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
        navbar.style.transform = `translateY(${a}px)`;

       
      
      } else {
        if (a>=0){
          a=0

        }
        else {
          a=a+5

        }
        // Scroll up

    
        navbar.style.transform = `translateY(${a}px)`;


      }
      
      lastScrollTop = currentScroll;
    });
const button = document.querySelector("button")
button.onclick=function(){
  console.log("i easily forget what i've learnt ")
  button.classList.toggle("on")
  nav.classList.toggle("on")
}