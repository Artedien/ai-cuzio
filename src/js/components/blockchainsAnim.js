import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function blockchainsAnim() {
    const tl = gsap.timeline();

    tl.from('.blockchains__item-unique', {
        x: '-20%',
        opacity: 0,
        duration: 0.8
    })
        .from('.blockchains__item-unique-wrapper', {
            opacity: 0,
            duration: 0.6
        })
        .from(
            '.blockchains__unique-img-box',
            {
                opacity: 0,
                duration: 0.6
            },
            '-=0.5s'
        )
        .from(
            '.blockchains__item-blockchains',
            {
                x: '20%',
                opacity: 0,
                duration: 0.8
            },
            '-=1.2s'
        )
        .from('.blockchains__item-title-box', {
            opacity: 0,
            duration: 0.6,
            scale:0.9
        })
        .from(
            '.blockchains__item-social',
            {
                x: '20%',
                opacity: 0,
                duration: 0.8
            },
            '-=1.3s'
        )
        .from(
            '.blockchains__item-community',
            {
                x: '-20%',
                opacity: 0,
                duration: 0.8
            },
            '-=1.3s'
        ) .from(
            '.blockchains__item-btn-box',
            {
                
                opacity: 0,
                duration: 0.8
            },
            '-=1.3s'
        );
}

export default blockchainsAnim;
