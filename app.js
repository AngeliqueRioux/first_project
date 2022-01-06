
let clickBurger = false

function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navul = document.querySelector('.nav-ul');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navul.classList.toggle('active');    
    })
}

toggleMenu();

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}