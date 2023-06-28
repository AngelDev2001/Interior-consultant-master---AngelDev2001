const navBtn = document.querySelector('.nav__btn img');
const navbar = document.querySelector('.navbar');
const navClose = document.querySelector('.navbar__btn img');

navBtn.addEventListener('click', () => {
    navbar.classList.add('navbar-active');
})

navClose.addEventListener('click', () => {
    navbar.classList.remove('navbar-active');
})

