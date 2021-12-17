'use strict'
const navbar = document.getElementById('navbar');
const nav_height = navbar.getBoundingClientRect().height;
const navbar__menu = document.querySelector('.navbar__menu');

document.addEventListener('scroll', () => {
    if (window.scrollY > nav_height) {
        navbar.classList.add('navbar--dark');
        navbar__menu.classList.add('color--dark');
    } else {
        navbar.classList.remove('navbar--dark');
        navbar__menu.classList.remove('color--dark');
    }
});

navbar__menu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) return;
    scrollIntoView(link);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
};