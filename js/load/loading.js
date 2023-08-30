document.addEventListener("DOMContentLoaded", function() {
    // 페이지 로딩 완료 후 컨텐츠 표시
    const loadingOverlay = document.querySelector(".loading-overlay");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const popup = document.querySelector(".popup");


    // 페이지 로딩이 완료되면 로딩 오버레이를 숨기고 컨텐츠를 표시합니다.
    window.onload = function() {
        loadingOverlay.style.display = "none";
        header.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
        popup.style.display = "block";
    };
});
