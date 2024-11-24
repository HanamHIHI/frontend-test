"use client";
import { useEffect } from "react";
import Script from "next/script";

const Map = () => {
  const initMap = (x: number, y: number) => {
    var map = new naver.maps.Map("그리고 싶은 영역의 id", {
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
          query: "은마아파트",
        },
        function (status, response) {
          if (status === naver.maps.Service.Status.ERROR) {
            return alert("Someting Wrong!");
          }

          const result = response.v2.addresses[0];
          const x = Number(result.x);
          const y = Number(result.y);

          initMap(y, x);
        }
      );
  }, []);

  return (
    <>
      <div id="그리고 싶은 영역의 id" style={{ height: "200px" }}></div>
    </>
  );
};

export default Map;