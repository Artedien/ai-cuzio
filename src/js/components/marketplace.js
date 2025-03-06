import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin);
function marketplace() {
    // gsap.set('.marketplace__item4', { x: `-15rem`, y: `0rem` });

    gsap.to('.marketplace__item1', {
        motionPath: {
            path: [
                { x: `0rem`, y: `0rem` },
                { x: `-21.6rem`, y: `0rem` },
                { x: `-21.6rem`, y: `-35.4rem` },
                { x: `11.2rem`, y: `-35.4rem` },
                { x: `11.2rem`, y: `0rem` },
                { x: `0rem`, y: `0rem` }
            ],
            align: '.marketplace__item1'
        },
        duration: 10,

        repeat: -1,
        ease: 'linear'
    });
    gsap.to('.marketplace__item2', {
        motionPath: {
            path: [
                { x: `0rem`, y: `0rem` },
                { x: `0rem`, y: `-21rem` },
                { x: `33rem`, y: `-21rem` },
                { x: `33rem`, y: `14.6rem` },
                { x: `0rem`, y: `14.6rem` },
                { x: `0rem`, y: `0rem` }
            ],
            align: '.marketplace__item2'
        },
        duration: 10,
        repeat: -1,

        ease: 'linear',
        onUpdate: function () {
            let progress = this.progress(); // Получаем текущий прогресс анимации (0 - 1)
            let item = document.querySelector('.marketplace__item2');

            if ((progress >= 0 && progress <= 0.37) || (progress >= 0.9 && progress <= 1)) {
                item.style.zIndex = 1; // В этом диапазоне элемент будет выше
            } else {
                item.style.zIndex = 100; // В остальных случаях средний уровень
            }
        }
    });
    gsap.to('.marketplace__item3', {
        motionPath: {
            path: [
                { x: `0rem`, y: `0rem` },
                { x: `0rem`, y: `25rem` },
                { x: `-33rem`, y: `25rem` },
                { x: `-33rem`, y: `-10.4rem` },
                { x: `0rem`, y: `-10.4rem` },
                { x: `0rem`, y: `0rem` }
            ],
            align: '.marketplace__item3'
        },
        duration: 10,

        repeat: -1,
        ease: 'linear',
        onUpdate: function () {
            let progress = this.progress(); // Получаем текущий прогресс анимации (0 - 1)
            let item = document.querySelector('.marketplace__item3');

            if ((progress >= 0 && progress <= 0.2) || (progress >= 0.7 && progress <= 1)) {
                item.style.zIndex = 1; // В этом диапазоне элемент будет выше
            } else {
                item.style.zIndex = 100; // В остальных случаях средний уровень
            }
        }
    });
    gsap.to('.marketplace__item4', {
        motionPath: {
            path: [
                { x: `0rem`, y: `0rem` },
                { x: `21rem`, y: `0rem` },
                { x: `21rem`, y: `33.6rem` },
                { x: `-12rem`, y: `33.6rem` },
                { x: `-12rem`, y: `0rem` },
                { x: `0rem`, y: `0rem` }
            ],
            align: '.marketplace__item4'
        },
        duration: 10,

        repeat: -1,
        ease: 'linear',
        onUpdate: function () {
            let progress = this.progress(); // Получаем текущий прогресс анимации (0 - 1)
            let item = document.querySelector('.marketplace__item4');

            if ((progress >= 0 && progress <= 0.2) || (progress >= 0.7 && progress <= 1)) {
                item.style.zIndex = 1; // В этом диапазоне элемент будет выше
            } else {
                item.style.zIndex = 100; // В остальных случаях средний уровень
            }
        }
    });
}

export default marketplace;
