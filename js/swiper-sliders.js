document.addEventListener("DOMContentLoaded", function () {
  // Слайдеры в первом экране
  if (document.querySelector(".hero")) {
    console.log("Есть контакт!");

    var heroPhotoSlider = new Swiper(".js-hero-photo-slider", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      effect: "fade",
    });

    var heroTextSlider = new Swiper(".js-hero-text-slider", {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev",
      },
      pagination: {
        el: ".hero .swiper-pagination",
        clickable: true,
      },
    });

    // Синхронизация слайдеров
    heroTextSlider.on("slideChange", function () {
      var currentIndex = heroTextSlider.realIndex;
      heroPhotoSlider.slideToLoop(currentIndex);
    });
  }

  if (document.querySelector(".prices-and-services")) {
    var heroTextSlider = new Swiper(".js-prices-and-services-slider", {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: [
          document.querySelector(
            ".js-prices-and-services-slider .swiper-button-next"
          ),
          document.querySelector(
            ".prices-and-services .swiper-button-group .swiper-button-next"
          ),
        ],
        prevEl: [
          document.querySelector(
            ".js-prices-and-services-slider .swiper-button-prev"
          ),
          document.querySelector(
            ".prices-and-services .swiper-button-group .swiper-button-prev"
          ),
        ],
      },

      breakpoints: {
        //       320: {
        //         slidesPerView: 1,
        //       },
        //       767: {
        //         slidesPerView: 1,
        //       },
        1379: {
          slidesPerView: 2,
        },
      },
    });
  }

  // Слайдер на детальной странице ОН
  // .js-place-card-slider
  // if (document.querySelector(".js-place-card-slider")) {

  //   var swiper = new Swiper(".js-place-card-slider", {
  //     slidesPerView: 1.4,
  //     spaceBetween: 0,
  //     // centeredSlides: true,
  //     loop: true,
  //     pagination: {
  //       el: ".js-place-card-slider-pagination",
  //       // clickable: true,
  //       type: "fraction",
  //     },
  //     navigation: {
  //       nextEl: [
  //         document.querySelector(".js-place-card-slider .swiper-button-next"),
  //         document.querySelector(".place-card__slider-footer-right .swiper-button-next")
  //       ],
  //       prevEl: [
  //         document.querySelector(".js-place-card-slider .swiper-button-prev"),
  //         document.querySelector(".place-card__slider-footer-right .swiper-button-prev")
  //       ],
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //       },
  //       767: {
  //         slidesPerView: 1,
  //       },
  //       1024: {
  //         slidesPerView: 1.4,
  //       },
  //     },

  //   });
  // };

  // if (document.querySelector(".js-recommendations-slider")) {

  //   var swiper = new Swiper(".js-recommendations-slider", {
  //     slidesPerView: 4,
  //     spaceBetween: 32,
  //     loop: true,
  //     navigation: {
  //       nextEl: ".js-recommendations-slider .swiper-button-next",
  //       prevEl: ".js-recommendations-slider .swiper-button-prev",
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         spaceBetween: 16,
  //       },
  //       767: {
  //         slidesPerView: 2,
  //         spaceBetween: 24,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //       },
  //     },

  //   });
  // };

  // скрипт инициализации мини-слайдеров в анонсах
  // if (document.querySelector(".announce-card__slider")) {
  //   const sliderCards = document.querySelectorAll(".announce-card");

  //   sliderCards.forEach((card, index) => {
  //     const sliderContainer = card.querySelector(".js-announce-card-slider");

  //     if (sliderContainer) {
  //       sliderContainer.classList.add(`announce-card-gallery-${index}`);
  //       const swiperTest = new Swiper(`.announce-card-gallery-${index}`, {});

  //       const navItems = card.querySelectorAll(
  //         ".announce-card__navigation-item"
  //       );

  //       navItems.forEach((item, i) => {
  //         item.setAttribute("data-number", i);
  //       });

  //       card
  //         .querySelector(".announce-card__navigation")
  //         .addEventListener("mouseover", (event) => {
  //           if (
  //             event.target.classList.contains("announce-card__navigation-item")
  //           ) {
  //             navItems.forEach((elem) => {
  //               elem.classList.remove("announce-card__navigation-item--active");
  //             });

  //             event.target.classList.add(
  //               "announce-card__navigation-item--active"
  //             );
  //             swiperTest.slideTo(event.target.getAttribute("data-number"));
  //           }
  //         });
  //     }
  //   });
  // }
});
