import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function mainAnim() {
    const tl = gsap.timeline();
    tl.from('.header', {
        opacity: 0,
        y: `-100%`,
        duration: 0.6
    })
        .from('.main', {
            opacity: 0,
            y: `-10%`,
            duration: 0.8
        })
        .from('.main__title', {
            opacity: 0,
            y: `-100%`,
            duration: 0.8
        }).from(
            '.main__btn-box',
            {
                opacity: 0,
                // x: `-100%`,
                scale: 0.8,
                duration: 0.8
            }
        )
        .from(
            '.main__description',
            {
                opacity: 0,
                // x: `-100%`,
                scale: 0.3,
                duration: 0.8
            },
            `-=0.4`
        )
        .from(
            '.main__option-box',
            {
                opacity: 0,
                // x: `-100%`,
                // scale: 0.3,
                duration: 0.8
            },
            `-=0.4`
        );
}

export default mainAnim;
