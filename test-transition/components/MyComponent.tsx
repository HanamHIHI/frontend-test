import React, { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";

interface SProps {
  width?: number;
  height?: number;
}

interface Props extends SProps {
  limit?: number /** angle size */;
}

const SCard = styled.div<SProps>`
  user-select: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  perspective: 500px;
`;

const Content = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  color: #050505;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: transform 0.3s linear;
`;

const View = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Card: React.FunctionComponent<Props> = ({
  width = 300,
  height = 500,
  limit = 24
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMousemoveHandler = useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      const { pageX: mousePointX, pageY: mousePointY } = ev;
      const target = ev.target as HTMLDivElement;

      const { x, y, width, height } = target.getBoundingClientRect();

      const cardX = Math.floor(mousePointX - x);
      const cardY = Math.floor(mousePointY - y);
      const halfW = Math.floor(width / 2);
      const halfH = Math.floor(height / 2);
      const ny = parseFloat(((cardX - halfW) / halfW).toFixed(1)) * limit;
      const nx = -parseFloat(((cardY - halfH) / halfH).toFixed(1)) * limit;

      setRotate({ x: nx, y: ny });
    },
    [limit]
  );

  const onMouseleaveHandler = () => {
    setRotate({ x: 0, y: 0 });
  };

  const style: CSSProperties = {
    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
  };

  return (
    <SCard width={width} height={height}>
      <View onMouseMove={onMousemoveHandler} onMouseLeave={onMouseleaveHandler}>
        <Content style={style}>CARD</Content>
      </View>
    </SCard>
  );
};

export default Card;
