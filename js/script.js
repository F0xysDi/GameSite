new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0:{
        slidesPerView:3
    }
  }
});
