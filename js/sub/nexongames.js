var map;
var geocoder = new kakao.maps.services.Geocoder();

function initMap() {
    geocoder.addressSearch("서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층", function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var mapContainer = document.querySelector('.map-frame');
            var mapOption = {
                center: new kakao.maps.LatLng(result[0].y, result[0].x),
                level: 5
            };
            map = new kakao.maps.Map(mapContainer, mapOption);

            var markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            marker.setMap(map);
        }
    });
}

function zoomIn() {
    if (map) {
        var level = map.getLevel();
        map.setLevel(level - 1);
    }
}

function zoomOut() {
    if (map) {
        var level = map.getLevel();
        map.setLevel(level + 1);
    }
}

function resetMap() {
    initMap(); // 주소로 초기화
}


initMap();