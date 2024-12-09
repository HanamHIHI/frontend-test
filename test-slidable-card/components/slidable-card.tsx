import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const Card = () => {
  const [index, setIndex] = useState(0); // 현재 인덱스
  const contents = ["First", "Second", "Third"]; // 콘텐츠

  // 드래그 상태에 따라 카드 이동
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // 슬라이드 방향에 따라 콘텐츠 변경
  const changeIndex = (direction: number) => {
    setIndex((prev) => (prev + direction + contents.length) % contents.length);
  };

  // useDrag 훅으로 드래그 동작 처리
  const bind = useDrag((state) => {
    // 드래그 시, x 좌표에 따라 슬라이드 동작
    if (state.offset[0] > 100) {
      changeIndex(1); // 오른쪽으로 슬라이드 -> 다음 콘텐츠
    } else if (state.offset[0] < -100) {
      changeIndex(-1); // 왼쪽으로 슬라이드 -> 이전 콘텐츠
    }

    api.start({ x: state.offset[0] }); // 드래그 값에 따라 x 위치 업데이트
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "400px",
          overflow: "hidden",
        }}
      >
        {/* 드래그 가능한 카드 컴포넌트 */}
        <animated.div
          {...bind()}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: x.to((x) => `translateX(${x}px)`),
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "transform 0.2s ease-out",
          }}
        >
          <CardContent content={contents[index]} />
        </animated.div>
      </div>
    </div>
  );
};

const CardContent = ({ content }: { content: string }) => {
  return (
    <div style={{ fontSize: "24px", color: "#333", textAlign: "center" }}>
      <p>{content}</p>
    </div>
  );
};

export default Card;
