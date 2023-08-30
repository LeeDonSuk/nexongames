document.addEventListener("DOMContentLoaded", function () {

    const popuppage = document.querySelector("#popup");
    const popupClose = document.querySelector("#popupClose");
    const popupcheckdeco = document.querySelector(".popupcheck-deco");
    const popupcheck = document.querySelector("#popupcheck");

    // 쿠키에서 체크 상태 읽어와서 팝업 보이거나 숨김
    const checked = getCookie("popupChecked");
    if (checked === "true") {
        popupcheck.checked = true;
        popupcheckdeco.classList.add("active");
        popuppage.classList.add("active");
    }

    popupcheckdeco.addEventListener("click", function () {
        popupcheckdeco.classList.toggle("active");
        popupcheck.checked = !popupcheck.checked;

        if (popupcheck.checked) {
            setCookie("popupChecked", "true", 1); // 쿠키에 체크 상태 저장, 1일 동안 유지
        } else {
            deleteCookie("popupChecked"); // 쿠키 삭제
        }
    });

    popupClose.addEventListener("click", function () {
        popuppage.classList.add("active");
    });

    // 쿠키 생성 함수
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // 쿠키 삭제 함수
    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // 쿠키 가져오는 함수
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
