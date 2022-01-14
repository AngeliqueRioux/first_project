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

const text = document.querySelectorAll('.textClick')
console.log(text)
const click1 = () => text[0].style.display = 'flex'
const click2 = () => text[1].style.display = 'flex'
const fermeClick1 = () => text[0].style.display = 'none'
const fermeClick2 = () => text[1].style.display = 'none'