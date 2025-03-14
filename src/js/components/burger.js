const burger = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__content-box');
    
    const transitionItem = document.querySelector('.header__content-box');
    transitionItem.style.transition = 'transform 0.5s';

    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    function openBurger() {
        let scrollWith = getScrollbarWidth();

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollWith}px`;

        burger.classList.add('active');
        burger.style.paddingRight = `${scrollWith}px`;

        nav.classList.add('active');
    }

    function closeBurger() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        burger.classList.remove('active');
        burger.style.paddingRight = ``;

        nav.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.contains('active') ? closeBurger() : openBurger();
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeBurger();
        }
    });

    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-top__nav-link')) {
            closeBurger();
        }
    });
};

export default burger;
