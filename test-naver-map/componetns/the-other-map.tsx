import { useEffect } from "react";

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

    naver.maps.Event.once(map, 'init', function () {
      var customControl = new naver.maps.CustomControl('<a href="" class="btn_mylct"><img src="/current-circle-blue.svg" width="7%" height="7%" style="margin: 0 0 22.4px 10px"></img></a>', {
        position: naver.maps.Position.LEFT_BOTTOM
      });
      customControl.setMap(map);

      naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
        map.setCenter(new naver.maps.LatLng(37.4996157705058, 127.065915414443));
      });
    });
  };

  useEffect(() => {
    const x = 127.065915414443;
    const y = 37.4996157705058;
    initMap(y, x);
  }, []);

  return (
    <>
      <div id="my-comp" style={{ height: "800px", width: "800px" }}></div>
    </>
  );
};

export default Map;