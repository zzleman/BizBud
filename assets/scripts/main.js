// Click Functionality
function activateNavItem(event) {
  const navItems = document.querySelectorAll('nav li');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  const clickedItem = event.target.parentNode;
  clickedItem.classList.add('active');
}
// Section Functionality
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId); 
    targetSection.scrollIntoView({ behavior: "smooth" }); 
  });
});
// The Carousel Funcionality
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Pop-up Message Funcionality
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Call Now Alert
const call = document.querySelector("nav button")
call.addEventListener("click",()=>{
  alert("Open FaceTime?")
})
