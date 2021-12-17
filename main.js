let navbar = document.getElementById('navbar');
let navbar_menu = document.querySelector('.navbar__menu');
let nav_height = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > nav_height) {
        navbar.classList.add('navbar--dark');
        navbar_menu.classList.add('font--dark');
    } else {
        navbar.classList.remove('navbar--dark');
        navbar_menu.classList.remove('font--dark');
    }
})