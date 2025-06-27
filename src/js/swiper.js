import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function initGallerySwiper() {
  const reviewsOneEl = document.querySelector('.gallery-swiper');

  if (reviewsOneEl) {
    new Swiper(reviewsOneEl, {
      modules: [Autoplay],
      loop: true,
      spaceBetween: 20,
      speed: 6000,
      slidesPerView: 'auto',
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initGallerySwiper();
});