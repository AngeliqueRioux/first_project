let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (let i = 0; i < items.length; i++) {
    items[i].className = items[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  items[slideIndex-1].className += " actives";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}