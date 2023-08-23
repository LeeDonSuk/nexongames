//배너슬라이드
//배너슬라이드
//배너슬라이드
function bannerslide() {
        var swiper = new Swiper(".banner-slide", {
                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
}
//인물소개 슬라이드
//인물소개 슬라이드
//인물소개 슬라이드
function profileslide(){
        var swiper = new Swiper(".mySwiper", {
                navigation: {
                  nextEl: ".trnasform-next",
                  prevEl: ".trnasform-prev",
                },
              });
}
//스크롤 감지 이벤트
//스크롤 감지 이벤트
//스크롤 감지 이벤트

function opserver(){
  // 대상 요소들을 모두 선택합니다.
const observedElements = document.querySelectorAll('.observed-element');

// Intersection Observer 생성 및 대상 요소들에 적용
observedElements.forEach(observedElement => {
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  });

  // Observer 시작
  observer.observe(observedElement);
});
}


document.addEventListener('DOMContentLoaded', function () {
        //배너슬라이드
        bannerslide();
        //인물소개슬라이드
        profileslide();
        //섹션 쇼 이벤트
        opserver();
});