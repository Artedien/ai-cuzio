import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function unleashAnim() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.unleash__title-box`,
            start: 'top 50%',
            end: 'bottom',
            // end: '+4000',
            // scrub: true,
            // pin: true,
            // markers: true,
            immediatelyRender: true
        }
    });

    tl.from('.unleash__title-box', {
        opacity: 0,
        y: `-100%`,
        duration: 0.9
    })
    tl.from('.unleash__left', {
        opacity: 0,
        x: `-100%`,
        duration: 0.9
    })
    tl.from('.unleash__right', {
        opacity: 0,
        x: `100%`,
        duration: 0.9
    }
, '-=0.9')
    ;
}

export default unleashAnim;
