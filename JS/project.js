// hamburger
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll();


const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');
const navbar = document.querySelector('#nav-head');

nav.addEventListener('click', function () {
    nav.classList.toggle('hamburger-active');
    navbar.classList.toggle('nav-active');
    navMenu.classList.toggle('hidden');
});