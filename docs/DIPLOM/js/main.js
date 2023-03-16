$(function () {
  var mixer = mixitup(".plans__items");

  $(".plans__filter-btn").on("click", function () {
    $(".plans__filter-btn").removeClass("plans__filter-btn--active");
    $(this).addClass("plans__filter-btn--active");
  });
});

let swiper = new Swiper(document.querySelector(".swiper"), {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  speed: 700,
  spaceBetween: -100,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
