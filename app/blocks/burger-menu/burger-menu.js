app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuClose = document.querySelector('.burger-menu__close');

        if (!burgerBtn || !burgerMenu || !burgerMenuClose) return;

        burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerMenu.classList.add('active');
        });
        burgerMenuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerMenu.classList.remove('active');
        });
    },
};
