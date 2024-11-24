"use client";
import { useEffect } from "react";
import Script from "next/script";

const Map = () => {
  const initMap = (x: number, y: number) => {
    var map = new naver.maps.Map("my-comp", {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    var mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });
  };

  useEffect(() => {
      naver.maps.Service.geocode(
        {
          query: "서울특별시 강남구 삼성로 212",
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
      <div id="my-comp" style={{ height: "200px" }}></div>
    </>
  );
};

export default Map;