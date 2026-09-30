const menu = document.getElementById('menu-toggle');
const botaoMenu = document.querySelector('.menu-hamburguer');
if (botaoMenu) {
    botaoMenu.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            menu.checked = !menu.checked;
        }
    });
}
