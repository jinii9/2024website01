var mySwiper = new Swiper(".sec5-swiper", {
  slidesPerView: 4.5, // 한 번에 표시할 슬라이드 수
  spaceBetween: 18, // 슬라이드 간의 간격

  loop: true, // 슬라이드 루프(무한 회전) 활성화
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", // 페이지 표시기
    clickable: true, // 페이지 번호 클릭 가능하게 설정
  },
  breakpoints: {
    500: {
      slidesPerView: 1.5,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 18,
    },
    922: {
      slidesPerView: 3.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 18,
    },
    1500: {
      slidesPerView: 5.5,
      spaceBetween: 18,
    },
  },
});
