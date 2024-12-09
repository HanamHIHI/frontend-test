"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

const Map = () => {
  const [currentMyLocation, setCurrentMyLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const initMap = (x: number, y: number) => {
    var map = new naver.maps.Map("my-comp", {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    var mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(currentMyLocation.lat, currentMyLocation.lng),
      // position: new naver.maps.LatLng(x, y),
      map: map,
    });

    // return [map, mapMarker];
  };

  useEffect(() => {
    const x = 127.065915414443;
    const y = 37.4996157705058;

    if (navigator.geolocation) {
      console.log("outer");
      navigator.geolocation.watchPosition(
        (position) => {
          console.log("success");
          const { latitude, longitude } = position.coords;
          setCurrentMyLocation({lat:latitude, lng:longitude});
        },
        (error) => {
          console.log("fail");
        }
      );
    }

    initMap(y, x);
  }, [currentMyLocation]);

  return (
    <>
      <div id="my-comp" style={{ height: "800px" }}></div>
    </>
  );
};

export default Map;