import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function bannerAnim() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.banner`,
            start: 'top 50%',
            end: 'bottom'
        }
    });
    tl.from(['.banner__banner-title-box', '.banner__banner-desc', '.banner__banner-btn'], {
        x: -100,
        opacity: 0,

        duration: 0.9,
        scale: 0.9
    }).from('.banner__banner-img', {
        x: 100,
        opacity: 0,

        duration: 0.6,
    },'-=0.5s');
}

export default bannerAnim;
