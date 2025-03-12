import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function inspiringAnim() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `.inspiring__title-box`,
            start: 'top 50%',
            end: 'bottom',
            // markers: true
        }
    });

    tl
        .from('.inspiring__title', { y: '-100%', duration: 0.6, opacity: 0 })
        .from(
            '.inspiring__tab-btn',
            {
                rotation: 360,
                y: '-50%',
                duration: 0.6,
                onComplete: () => {
                    gsap.to('.inspiring__title', {
                        color: '#221a2e'
                    });
                }
            },
            '-=0.3s'
        )
        .from('.inspiring__tab-btn', {
            opacity:0,
            x: '-50%',
            duration: 0.6
        },
        '-=0.3s')
        .from('.inspiring__swiper', {
            opacity: 0,
            x: '0',
            duration: 0.6
        },
        '-=0.3s')
        .from('.inspiring__swiper-slide', {
            scale:0.8,
            x: '0',
            duration: 0.6
        },
        '-=0.3s');
}

export default inspiringAnim;
