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

function headerload() {
    const header = document.querySelector("header");
    // 헤더를 변수에 담는다

    //헤더 html의 경로를 찾고 가져온다
    fetch("../html/common/header_b.html")
        //콜백 함수로 응답 객체를 받아서 .text() 메서드를 사용해서
        //텍스트형식으로 변환후에 다음 then으로 전달된다.
        .then(response => response.text())
        //변환된 텍스트 데이터를 받아서
        // data변수에 저장후에 inner html을 사용하여 내용을 삽입한다.
        .then(data => {
            header.innerHTML = data;

            //모바일 메뉴 이벤트 호출
            headerb();
        });
}

document.addEventListener("DOMContentLoaded", function () {
    headerload();
});
