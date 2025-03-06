function mainTabs() {
    const buttons = document.querySelectorAll('.inspiring__tab-btn');
    const tabs = document.querySelectorAll('.inspiring__tab-content');

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            buttons.forEach((item) => item.classList.remove('active'));
            tabs.forEach((tabs) => tabs.classList.remove('active'));
            button.classList.add('active');
            tabs[i].classList.add('active');
        });
    });
}


export default mainTabs