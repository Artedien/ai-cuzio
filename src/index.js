import './index.scss';

window.$ = window.jQuery = require('jquery');
import bannerDropdown from './js/components/bannerDropdown';
import burger from './js/components/burger';
import inspiringSwiper from './js/components/inspiringSwiper';
import mainTabs from './js/components/inspiringTabs';
import marketplace from './js/components/marketplace';
import faq from './js/components/faq';
import mainAnim from './js/components/mainAnim';
import unleashAnim from './js/components/unleashAnim';
import inspiringAnim from './js/components/inspiringAnim';
import marketplaceAnim from './js/components/marketplaceAnim';
import blockchainsAnim from './js/components/blockchainsAnim';
import faqAnim from './js/components/faqAnim';
import bannerAnim from './js/components/bannerAnim';

window.addEventListener('DOMContentLoaded', () => {
    try {
        bannerDropdown();
    } catch {}
    try {
        burger();
    } catch {}
    try {
        inspiringSwiper();
    } catch {}
    try {
        mainTabs();
    } catch {}
    try {
        marketplace();
    } catch {}
    try {
        faq();
    } catch {}
    try {
        mainAnim();
    } catch {}
    try {
        unleashAnim();
    } catch {}
    try {
        inspiringAnim();
    } catch {}
    try {
        marketplaceAnim();
    } catch {}
    try {
        blockchainsAnim();
    } catch {}
    try {
        faqAnim();
    } catch {}
    try {
        bannerAnim();
    } catch {}
});
