// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal ",
//   loop: true,

//   speed: 400,
//   spaceBetween: 100,

//   a11y: {
//     prevSlideMessage: "Previous slide",
//     nextSlideMessage: "Next slide",
//   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

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
