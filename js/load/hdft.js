function headerb() {
    const closebtn = document.querySelector(".closebtn > span");
    const openbtn = document.querySelector(".openbtn");
    const mobilemenuframe = document.querySelector(".mobile-frame");

    openbtn.addEventListener('click', function () {
        mobilemenuframe.classList.add("active");

    });

    closebtn.addEventListener("click", function () {
        mobilemenuframe.classList.remove("active");
    });
}


function eltop() {
    const eltopbtn = document.querySelector("#top-btn");
    eltopbtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

document.addEventListener("DOMContentLoaded", function () {
    headerb();
    eltop();
});