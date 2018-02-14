var buttonMenu = document.querySelector('.js-button-menu');

buttonMenu.onclick = function() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--show');
}