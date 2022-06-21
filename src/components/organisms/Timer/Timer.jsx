import React from 'react';
import TimerStyle from './TimerStyle';
import { Circle } from 'rc-progress';
const Timer = () => {
  return (
    <TimerStyle className={`timer-bar`}>
      <Circle
        percent={90}
        strokeWidth={8}
        strokeColor="#D1A33B"
        trailWidth={8}
        style={{ width: '60%' }}
      />
      <span>25:00</span>
    </TimerStyle>
  );
};

export default Timer;
