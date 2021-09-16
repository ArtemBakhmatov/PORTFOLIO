let hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', function() {
    menu.classList.remove('menu_active');
});

