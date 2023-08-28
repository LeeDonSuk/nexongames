document.addEventListener("DOMContentLoaded", function () {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  var prevButton = document.querySelector(".swiper-button-prev");
  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });

  var nextButton = document.querySelector(".swiper-button-next");
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });

  var slideItems = document.querySelectorAll(".swiper-slide");

  // 슬라이드 클릭 이벤트 처리
  slideItems.forEach(function (slide, index) {
    slide.addEventListener("click", function () {
      // 다른 슬라이드의 활성 클래스 제거
      slideItems.forEach(function (otherSlide) {
        if (otherSlide !== slide) {
          otherSlide.classList.remove("active");
        }
      });

      // 현재 클릭한 슬라이드에 클래스 추가
      slide.classList.toggle("active");

      // 클릭한 슬라이드에 대한 추가 작업을 수행할 수 있습니다.
      innerslide(index); // 해당 슬라이드의 인덱스를 전달하여 함수 호출
    });
  });

  function innerslide(slideIndex) {
    const charname = document.querySelector(".char-n");
    const charsubname = document.querySelector(".char-sn");
    const charf = document.querySelector(".char-f");
    const charex = document.querySelector(".char-ex");

    // 각 슬라이드에 맞는 텍스트를 설정합니다.
    if (slideIndex === 0) {
      charname.textContent = "블레이더";
      charsubname.textContent = "Blader";
      charf.textContent = "눈부신 궤적을 그리는 두 개의 검";
      charex.innerHTML = `긴 양손검과 짧은 한손검을 활용하여 적을 물리칩니다.<br/>
    날렵하고 정확한 움직임으로 적의 약점을 공략합니다.`;
    } else if (slideIndex === 1) {
      charname.textContent = "매지션";
      charsubname.textContent = "Magician";
      charf.textContent = "휘몰아 치는 마력이 벌이는 찬란한 연회";
      charex.innerHTML = `지팡이를 사용해 마법을 구사합니다.<br/>
      공격을 거듭할수록 차오르는 에너지를 한순간에 폭발시켜 적을 섬멸합니다.`;
    }
    else if (slideIndex === 2) {
      charname.textContent = "건슬링어";
      charsubname.textContent = "Gunslinger";
      charf.textContent = "불꽃을 품고 나아가는 뜨거운 탄환";
      charex.innerHTML = `양손의 총을 이용하여 적을 처치합니다.<br/>
      찰나의 순간에 적을 정확히 조준하여 치명적인 피해를 입힙니다.`;
    }
    else if (slideIndex === 3) {
      charname.textContent = "나이트";
      charsubname.textContent = "Knight";
      charf.textContent = "철벽을 넘어 진격하는 하나의 검";
      charex.innerHTML = `검과 방패를 들고 적과 맞섭니다.<br/>
      전투가 계속될수록 점점 강해지는 기술로 전장에서 승기를 거머쥡니다.`;
    } else if (slideIndex === 4) {
      charname.textContent = "액슬러";
      charsubname.textContent = "Axceler";
      charf.textContent = "포화 속에 춤추는 현란한 도끼";
      charex.innerHTML = `포가 장착된 도끼를 활용하여 적과 맞붙습니다.<br/>
      판이한 두 무기가 만들어내는 새롭고 위력적인 공격으로 전장을 장악합니다.`;
    }else if (slideIndex === 5) {
      charname.textContent = "워로드";
      charsubname.textContent = "Warlord";
      charf.textContent = "온 대지를 호령하는 육중한 망치";
      charex.innerHTML = `거대한 망치와 단단한 건틀릿을 자유자재로 다뤄 적을 제압합니다.<br/>
      묵직하고 강력한 일격은 앞을 가로막는 모든 것을 제거합니다.`;
    }
    // 이후에 다른 슬라이드 정보도 동일한 방식으로 설정하면 됩니다.

  }

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
});
