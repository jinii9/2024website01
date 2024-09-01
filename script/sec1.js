var mySwiper = new Swiper(".sec1-swiper", {
  slidesPerView: 5.5, // 한 번에 표시할 슬라이드 수
  // slidesPerView: "auto",
  spaceBetween: 18, // 슬라이드 간의 간격
  // observer: true,
  // observeParents: true,

  loop: true, // 슬라이드 루프(무한 회전) 활성화
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", // 페이지 표시기
    clickable: true, // 페이지 번호 클릭 가능하게 설정
  },
  // autoplay: {
  // delay: 3000, // 3초마다 자동 재생
  // disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  // },
  // mousewheel: true, // 마우스 휠로 슬라이드 이동 가능
  // centeredSlides: true, // 슬라이드 중앙 정렬
});

// const swiper = new Swiper(".swiper", {
//   // slidesPerView: 6.5,
//   slidesPerView: 6.5,
//   spaceBetween: 30,
//   freeMode: true,
//   loop: true,
//   // autoHeight: true, // 현재 활성 슬라이드높이 맞게 높이조정

//   // sliderOffsetBefore: 100,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     // autoHeight: true,  // 현재 활성 슬라이드높이 맞게 높이조정
//     // sliderOffsetBefore: 0,

//     slidesPerView: 7,

//     spaceBetween: 10, // 슬라이드 사이 여백
//     centeredSlides: true, //센터모드

//     // If we need pagination

//     pagination: { // 호출 여부
//         el: '.swiper-pagination', //버튼을 담을 태그
//         clickable: true //버튼 클릭 여부
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
