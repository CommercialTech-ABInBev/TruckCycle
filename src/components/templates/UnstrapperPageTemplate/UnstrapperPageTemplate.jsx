import React from 'react';
import Heading from '../../atoms/HeaderText/HeaderText';
import UserHeader from '../../molecules/UserHeader/UserHeader';
import TruckDetailsCard from '../../organisms/TruckDetailsCard/TruckDetailsCard';
import UnstrapperPageTemplateStyle from './UnstrapperPageTemplateStyle';

const UnstrapperPageTemplate = () => {
  const number = 3;
  return (
    <UnstrapperPageTemplateStyle>
      <div className={`content-wrapper`}>
      <UserHeader/>
      <Heading value="Unstrap trucks" className={`title`}/>
      {[...Array(number).keys()].map((_, index) => (
        <TruckDetailsCard key={index} />
      ))}
      </div>
    </UnstrapperPageTemplateStyle>
  );
};

export default UnstrapperPageTemplate;
