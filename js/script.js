var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      520: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1000: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
  });