import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const whoSwiper = new Swiper('.swiper.who-swiper', {
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2 },
  },
  grabCursor: true,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const productsSwiper = new Swiper('.swiper.products-swiper', {
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 2 },
  },
  grabCursor: true,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
