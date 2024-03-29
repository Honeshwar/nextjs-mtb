import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let achievementSwiper = new Swiper(".achievement-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
