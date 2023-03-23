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
    delay: 3000,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 1.4,
      spaceBetween: -30,
    },
    650: {
      slidesPerView: 1.5,
      spaceBetween: -50,
    },

    700: {
      slidesPerView: 1.6,
      spaceBetween: -40,
    },

    800: {
      slidesPerView: 1.8,
      spaceBetween: -40,
    },

    900: {
      slidesPerView: 1.85,
      spaceBetween: -45,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: -50,
    },
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

$(function () {
  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() > 0 &&
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  });

  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
    $(".burger").toggleClass("open");
  });
});
