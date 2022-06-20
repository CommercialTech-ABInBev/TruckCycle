import React from 'react';
import Button from '../../atoms/Button/Button';
import SplashImage from '../../molecules/SplashImage/SplashImage';
import OnboardingPageTemplateStyle from './OnboardingPageTemplateStyle';
import Image from '../../atoms/Image/Image';
import Arrow from '../../../assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';

const OnboardingPageTemplate = () => {
  const loginText = () => {
    return (
      <>
        <p style={{ marginRight: '20px' }}>Login</p>
        <Image image={Arrow} />
      </>
    );
  };
  return (
    <OnboardingPageTemplateStyle>
      <SplashImage />
      <Link to="/signup">
        <Button value="Sign Up" className={`signUp`} />
      </Link>
      <Link to="/login">
        <Button value={loginText()} className={`logIn`} />
      </Link>
    </OnboardingPageTemplateStyle>
  );
};

export default OnboardingPageTemplate;
