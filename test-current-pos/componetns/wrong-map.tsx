"use client";
import { useEffect } from "react";

const Map = () => {
  const initMap = (x: number, y: number) => {
    var map = new naver.maps.Map("my-comp", {
      // new naver.maps.LatLng(x, y),
      // center: new naver.maps.LatLng(getCurrentMyLocation().lat, getCurrentMyLocation().lng),
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    var mapMarker = new naver.maps.Marker({
      // position: new naver.maps.LatLng(getCurrentMyLocation().lat, getCurrentMyLocation().lng),
      position: new naver.maps.LatLng(x, y),
      map: map,
    });
  };

  // const [currentMyLocation, setCurrentMyLocation] = useState({
  //   lat: 0,
  //   lng: 0,
  // });

  // const getCurrentMyLocation = () => {
  //   useEffect(() => {
  //     const success = (location: { coords: { latitude: number; longitude: number } }) => {
  //       setCurrentMyLocation({
  //         lat: location.coords.latitude,
  //         lng: location.coords.longitude,
  //       });
  //     };
  //     // 내 현재 위치 값 반환 실패 시 실행 함수 -> 지도 중심을 서울시청 위치로 설정
  //     const error = () => {
  //       setCurrentMyLocation({ lat: 37.5666103, lng: 126.9783882 });
  //     };
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(success, error);
  //     }
  //   }, [setCurrentMyLocation]);

  //   return currentMyLocation;
  // }

  useEffect(() => {
    naver.maps.Service.geocode(
      {
        query: "서울특별시 중구 세종대로 110",
      },
      function (status, response) {
        const result = response.v2.addresses[0];
        const x = Number(result.x);
        const y = Number(result.y);

        initMap(y, x);
      }
    );
  }, []);

  return (
    <>
      <div id="my-comp" style={{ height: "800px" }}></div>
    </>
  );
};

export default Map;
