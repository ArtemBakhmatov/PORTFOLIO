let hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    menuLink = document.querySelectorAll('.menu__link')

hamburger.addEventListener('click', function() {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', function() {
    menu.classList.remove('menu_active');
});

menuLink.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.classList.toggle('menu_active');
    });
});

