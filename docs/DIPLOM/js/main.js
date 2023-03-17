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

$(function () {
  $(".faq__accordeon-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("faq__accordeon-link--active")) {
      $(this).removeClass("faq__accordeon-link--active");
      $(this).children(".faq__accordeon-text").slideUp();
    } else {
      $(".faq__accordeon-link").removeClass("faq__accordeon-link--active");
      $(".faq__accordeon-text").slideUp();

      $(this).addClass("faq__accordeon-link--active");
      $(this).children(".faq__accordeon-text").slideDown();
    }
  });
});

$(function () {
  $(
    ".header__nav-list a, .header__buttons-contact, .header__info-btn, .visit__btn, .footer__logo, .footer__btn-blue, .footer__nav-link"
  ).on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top + 100;
    $("body,html").animate({ scrollTop: top }, 1700);
  });
});
