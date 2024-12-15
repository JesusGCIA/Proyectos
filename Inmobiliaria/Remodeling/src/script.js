const menu = document.querySelector('.menu');
const nav = document.querySelector('.navone__list');
menu.addEventListener('click', e =>{
    menu.classList.toggle('open');
    nav.classList.toggle('active');
});
