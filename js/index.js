const slidenextbtn = document.querySelector(".slide-next");
const slidecontainer = document.querySelector(".slide-wrap");
const progressbar = document.querySelector(".silide-progressinner");


slidenextbtn.addEventListener("click", function () {
        slidecontainer.classList.add("active");
        progressbar.classList.add('active')
});
