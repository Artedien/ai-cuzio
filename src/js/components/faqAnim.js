import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function faqAnim() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.faq__title-box`,
            start: 'top 50%',
            end: 'bottom'
        }
    });
    tl.from('.faq__title', {
        x: '-100',
        opacity: 0,
        duration: 0.3
    }).from(
        '.faq__accordion-item',
        {
            x: (index) => (index % 2 === 0 ? '100' : '-100'),
            opacity: 0,
            duration: 0.3,
            stagger: { amount: 0.8 }
        },
        '-=0.1s'
    );
}

export default faqAnim;
