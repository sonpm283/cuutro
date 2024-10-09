$(document).ready(function () {
  new Swiper(".swiper-container", {
    loop: true,
    // effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
