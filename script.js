const cards = document.querySelectorAll('.page4 .container .cards .card');
const cardsIcon = document.querySelectorAll('.page4 .container .cards .card .icon');
for (let i = 0; i < cards.length; i++) {
    cardsIcon[i].style.background = `url(img/Page4/Icon${i+1}.png) no-repeat center / contain`;
}
const burgerMenu = document.querySelector('header .container .burger-button');
const nav = document.querySelector('header .container .right-panel nav');
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    if (burgerMenu.classList.contains('active')) {
        nav.style = 'left: 0; transition: 0.5s; padding-top: 10px;';
    } else {
        nav.style = 'left: -100%; transition: 1s; padding-top: 0;';
    }
});
