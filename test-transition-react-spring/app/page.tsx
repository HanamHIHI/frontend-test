'use client';

import React from 'react';
import SequentialFadeIn from '@/components/SequentialComponent'; // 경로는 컴포넌트 위치에 따라 조정

const Home: React.FC = () => {
  return (
    <div>
      <SequentialFadeIn />
    </div>
  );
};

export default Home;