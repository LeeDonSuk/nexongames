var swiper = new Swiper(".slide-slide", {
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30, // 슬라이드 사이의 간격
    centeredSlides: true, // 현재 슬라이드를 가운데로 정렬
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function v4opserver(){
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
  v4opserver();