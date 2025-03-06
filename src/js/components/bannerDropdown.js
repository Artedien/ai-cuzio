window.$ = window.jQuery = require('jquery');

function bannerDropdown() {
    $('.main__dropdown-top').on('click', () => {
        $('.main__dropdown-bottom').slideToggle();
        $('.main__dropdown-arrow-box').toggleClass('isActive');
    });

    const textTop = document.querySelector('.main__dropdown-choice');
    const bottomList = document.querySelector('.main__dropdown-bottom');

    bottomList.addEventListener('click', (e) => {
        if (e.target.classList.contains('main__dropdown-item')) {
            let text = e.target.querySelector('.main__dropdown-text').textContent;
            textTop.textContent = text;
            textTop.classList.add('isField');
            $('.main__dropdown-bottom').slideUp();
        }
    });
}

export default bannerDropdown;
