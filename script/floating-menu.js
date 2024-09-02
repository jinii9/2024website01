// JavaScript로 특정 위치에서 고정 해제
window.addEventListener("scroll", function () {
  const floatingMenu = document.getElementById("floating-menu");
  const stopPosition = 2000; // 고정 해제를 원하는 스크롤 위치 (픽셀 값)

  console.log(window.scrollY);
  if (window.scrollY >= stopPosition) {
    floatingMenu.style.position = "relative"; // 특정 위치에 도달하면 고정 해제
    floatingMenu.style.top = "unset";
  } else {
    floatingMenu.style.position = "sticky"; // 초기 상태에서는 sticky로 고정
    floatingMenu.style.top = "0";
  }
});
