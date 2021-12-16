
let clickBurger = false

function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navul = document.querySelector('.nav-ul')
    const title = document.getElementById('title')
    
    burger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navul.classList.toggle('active')
    })
}

toggleMenu();

