import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DiscreteRangeSlider: React.FC = () => {
  // range 값을 [number, number]로 정의하여 범위 슬라이더 상태를 관리
  const [range, setRange] = useState<[number, number]>([20, 80]);

  // onChange는 number | number[]를 받을 수 있으므로, number[]로만 처리
  const handleRangeChange = (newRange: number | number[]) => {
    // newRange가 number[]일 때만 처리
    if (Array.isArray(newRange) && newRange.length === 2) {
      setRange(newRange as [number, number]); // 새로운 값으로 업데이트
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', whiteSpace: "nowrap" }}>
      <h2>Discrete Range Slider: {range[0]} - {range[1]}</h2>
      <Slider
        range // 범위 슬라이더 모드 활성화
        min={20}
        max={80}
        value={range} // value는 [number, number] 타입
        onChange={handleRangeChange} // onChange에서 number[] 타입만 처리
        step={20} // 20씩 증가하도록 설정
        marks={{
          20: '걸어서\n5분'.split('\n').map((item, idx) => {
            return (
              <div key={idx}>
                {item}
                <br />
              </div>
            );
          }),
          40: '걸어서\n10분'.split('\n').map((item, idx) => {
            return (
              <div key={idx}>
                {item}
                <br />
              </div>
            );
          }),
          60: '차타고\n가까이'.split('\n').map((item, idx) => {
            return (
              <div key={idx}>
                {item}
                <br />
              </div>
            );
          }),
          80: '차타고\n멀리'.split('\n').map((item, idx) => {
            return (
              <div key={idx}>
                {item}
                <br />
              </div>
            );
          }),
        }} // 마크 설정
      />
    </div>
  );
};

export default DiscreteRangeSlider;
