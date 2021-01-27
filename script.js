var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  sliderPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".my-button-next",
    prevEl: ".my-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
