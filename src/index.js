import './index.scss';

window.$ = window.jQuery = require('jquery');
import bannerDropdown from './js/components/bannerDropdown';
import burger from './js/components/burger';
import inspiringSwiper from './js/components/inspiringSwiper';
import mainTabs from './js/components/inspiringTabs';
import marketplace from './js/components/marketplace';
import faq from './js/components/faq';

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
});
