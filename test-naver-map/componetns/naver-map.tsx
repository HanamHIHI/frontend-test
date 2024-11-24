import { useState, useEffect } from 'react';

let mapInstance: naver.maps.Map;

const loadScript = (src: string, callback: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => callback();
    document.head.appendChild(script);
};

export function MapInformation({
    latitude,
    longitude,
}: {
    latitude: number;
    longitude: number;
}) {
    // 쿠키 설정 함수
    function setCookie(name: string, value: string, days: number) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
    
        // Secure 속성과 SameSite=None 설정
        document.cookie = `${name}=${value}; ${expires}; SameSite=None; Secure`;
    }
    // 예제 사용
    if (!(typeof naver === 'undefined')) {
        setCookie('NWB', 'a7344c1a0eb83593c37a2c14129051d7.1714002790474', 7);
        setCookie('NIB2', 'jJAATwY8THFPoDhW', 7);        
        setCookie('NIB2', '8W7AlqyYtg9mcfw14', 7);
        setCookie('NNB', '3G7NOEXLUYUWM', 7);
        setCookie('BUC', 'HeU-_ZnbaDJt9mTK03ceaB3HIDtSFglosszqrpO2w44=', 7);
    }
    // 지도 로딩 상태
    const [isMapLoaded, setMapLoaded] = useState(false);

    const initMap = () => {
        // 추가 옵션 설정
        const mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_RIGHT,
            },
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 16,
        };

        // 지도 초기화 확인
        if (document.getElementById('map')) {
            mapInstance = new naver.maps.Map('map', mapOptions);
        }

        // Marker 생성
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(latitude, longitude),
            map: mapInstance,
        });

        // Marker 클릭 시 지도 초기화
        naver.maps.Event.addListener(marker, 'click', () => {
            mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
            mapInstance?.setZoom(16);
        });

        // 지도 로드 완료
        setMapLoaded(true);
    };

    useEffect(() => {
        // 스크립트 로딩 확인
        if (typeof naver === 'undefined') {
            loadScript(
                "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=",
                initMap,
            );
        } else {
            initMap();
        }
    }, [latitude, longitude]);

    return (
        <>
            {/* 위치 정보(지도) */}
            <div className="mb-8 mt-40 flex w-screen flex-col items-center">
                <span className="sm:text-md font-Pretendard text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    위치 안내
                </span>
                {isMapLoaded && (
                    <div id="map" className="mt-4 h-[500px] w-11/12 sm:mt-6 lg:mt-8" />
                )}
            </div>
        </>
    );
}