import React from 'react';
import TimerPageTemplateStyle from './TimerPageTemplateStyle';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import DateIcon from '../../../assets/icons/green-circle.svg';
import Timer from '../../organisms/Timer/Timer';

const TimerPageTemplate = () => {
  return (
    <TimerPageTemplateStyle>
      <div className={`content-wrapper`}>
        <Text value="Unstrap timer" className={`title`} />
        <div className={`date-con`}>
          <img src={DateIcon} alt="green circle" />
          <Text value="Jan 6th 2021" className={`date`} />
        </div>
        <div className={`timer-con`}>
          <Timer />
        </div>
        <Button value="Start" className={`timer-btn`}/>
        <Text value="Truck unstrap already? Click here" className={`click-text`}/>
      </div>
    </TimerPageTemplateStyle>
  );
};

export default TimerPageTemplate;
