import Swiper from 'swiper';
import 'swiper/css/bundle';

const inspiringSwiper=()=> {
    const swiper = new Swiper('.inspiring__swiper', {
        // slidesPerView: 'auto',
        slidesPerView: 3,
        spaceBetween: 20,
        grabCursor: true,
     
        loop: true,
        speed: 800,
        breakpoints:{
            500:{
                slidesPerView: 5.8,
                spaceBetween: 20,
                grabCursor: true,
                centeredSlides: true,
            }
        }
    });


}
export default inspiringSwiper;
