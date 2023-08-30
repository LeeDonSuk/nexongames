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


function footerload() {
    const footer = document.querySelector("footer");
    //푸터를 변수에 담는다.

    //푸터 html의 경로를 찾고 가져온다
    fetch("https://github.com/LeeDonSuk/nexongames/html/common/footer.html")
        //콜백 함수로 응답 객체를 받아서 .text() 메서드를 사용해서
        //텍스트형식으로 변환후에 다음 then으로 전달된다.
        .then(response => response.text())
        //변환된 텍스트 데이터를 받아서
        // data변수에 저장후에 inner html을 사용하여 내용을 삽입한다.
        .then(data => {
            footer.innerHTML = data;

            //탑버튼 클릭 이벤트 호출
            eltop();
        })
}
document.addEventListener("DOMContentLoaded", function () {
    footerload();
});