//배너슬라이드
//배너슬라이드
//배너슬라이드
function bannerslide() {
        const slidenextbtn = document.querySelector(".slide-next");
        const slidecontainer = document.querySelector(".slide-wrap");
        const progressbar = document.querySelector(".silide-progressinner");
        const slidenumberdata = document.querySelector(".number-data");


        let currentSlide = 0;

        slidenextbtn.addEventListener("click", function () {
                slidecontainer.style.transform = `translateX(-${currentSlide * 100}%)`;
                progressbar.style.width = `${(currentSlide + 1) * 25}%`; // Assuming 4 slides

                currentSlide = (currentSlide + 1) % 4; // Assuming 4 slides
                console.log(currentSlide)
                if (currentSlide === 1) {
                        slidenumberdata.innerHTML = `01 / 04`;
                } else if (currentSlide === 2) {
                        slidenumberdata.innerHTML = `02 / 04`;
                } else if (currentSlide === 3) {
                        slidenumberdata.innerHTML = `03 / 04`;
                } else if (currentSlide === 0) {
                        slidenumberdata.innerHTML = `04 / 04`;
                }
        });

}
//인물소개 슬라이드
//인물소개 슬라이드
//인물소개 슬라이드
var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".trnasform-next",
          prevEl: ".trnasform-prev",
        },
      });


document.addEventListener('DOMContentLoaded', function () {
        //배너슬라이드
        bannerslide();
        //인물소개슬라이드
});