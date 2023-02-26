var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    slidesPerGroup: 1,
    loop: true,speed:28,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button",
    },
  });
 var swiper = new Swiper(".mytextSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    slidesPerGroup: 1,
    loop: true,speed:100,
    loopFillGroupWithBlank: false,
    navigation: {
    nextEl: ".swiper-prev-button",
    prevEl: ".swiper-next-button",
    },
  });