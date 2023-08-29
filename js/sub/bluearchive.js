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
        charname.textContent = "시로코";
        charsubname.textContent = "Shiroko";
        charex.innerHTML = `스포츠를 좋아하는 아비도스 대책위원회의 행동반장. 기본적으로 말수가 적고, 표정의 변화가 거의 없어 <br>
        차갑다는 인상을 주곤 하지만, 사실 누구보다 아비도스 학원을 아끼는 소녀이다. <br>
        학교의 부흥을 위해서는 수단과 방법을 가리지 가리지 않으며, 가끔 엉뚱한 발상을 내놓기도 한다.`;
      } else if (slideIndex === 1) {
        charname.textContent = "세리카";
        charsubname.textContent = "Serika";
        charex.innerHTML = `아비도스 대책위원회의 깐깐한 서기. 잔소리가 심하고, 자신의 감정을 드러내는 데 주저함이 없다.<br> 
        입버릇처럼 "이딴 학원, 망해버려!" 라는 말을 내뱉곤 하지만, <br>
        실은 남몰래 학원의 빚을 갚기 위해 아르바이트를 하고 있을 정도로 애정이 깊은 편이다.`;
      }
      else if (slideIndex === 2) {
        charname.textContent = "호시노";
        charsubname.textContent = "Hoshino";
        charex.innerHTML = `아비도스의 부학생회장이자 대책위원회 부장을 맡고 있는 게으름뱅이 소녀. 아저씨 같은 말투를 즐겨쓰며 <br>
        업무보다는 장난치기를 좋아한다. 때문에 평상시에는 위원회 회원들에게 자주 혼나지만, <br>
        일단 임무가 시작되면 다른 아이들을 지켜주기 위해 가장 앞에서 분투한다.`;
      }
      else if (slideIndex === 3) {
        charname.textContent = "노노미";
        charsubname.textContent = "Nonomi";
        charex.innerHTML = `아비도스 대책위원회의 일원. 다정다감하고 상냥한 성품의 소유자로 극단적인 성격이 많은 <br>
        대책위원회의 회원들을 하나로 뭉쳐주는 정신적 지주 역할을 하고 있다. <br>
        겉으로 내색하진 않지만 부유한 부잣집의 영애로, 대책위원회 간식비의 대부분은 그녀의 용돈에서 나오고 있다.`;
      } else if (slideIndex === 4) {
        charname.textContent = "아야네";
        charsubname.textContent = "Ayane";
        charex.innerHTML = `아비도스 대책위원회의 성실한 회계. <br>원론과 규정을 중시하는 원칙주의자로 아비도스 고등학교의 부흥을 위해 성실하게 노력하고 있다.`;
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