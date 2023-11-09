var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
  },

  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
