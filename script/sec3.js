const swiper = new Swiper('.sec3-swiper', {
    // Optional parameters
    initialSlide: 1,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      slideShadows: true,
    },
    swipeEffect: {
    overshoot: true,
    },
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });