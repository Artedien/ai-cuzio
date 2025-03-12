import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function marketplaceAnim() {
    const tl = gsap.timeline();

    tl.from('.marketplace__title', {
        x: '-100',
        opacity: 0,
        duration: 0.6
    }).from('.marketplace__list-item', {
        x: '-100',
        opacity: 0,
        duration: 0.6,
        stagger: { amount: 0.8 }
    }, '-=0.2s');
}

export default marketplaceAnim;
