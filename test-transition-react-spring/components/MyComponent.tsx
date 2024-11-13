import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInOut: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // React-spring hook to change opacity
  const fadeStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 1000 }, // Adjusted duration for smoother effect
  });

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <animated.div style={fadeStyles}>
        <h2>React-Spring Opacity Transition</h2>
      </animated.div>
      <button onClick={() => setIsVisible(!isVisible)} style={{ marginTop: '20px', padding: '10px 20px' }}>
        {isVisible ? 'Fade Out' : 'Fade In'}
      </button>
    </div>
  );
};

export default FadeInOut;
