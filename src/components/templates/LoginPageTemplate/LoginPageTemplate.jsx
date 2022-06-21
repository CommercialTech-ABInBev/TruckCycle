import React from 'react';
import LoginPageTemplateStyle from './LoginPageTemplateStyle';
import Heading from '../../atoms/HeaderText/HeaderText';
import Text from '../../atoms/Text/Text';
import SignInForm from '../../molecules/SignInForm/SignInForm';

const LoginPageTemplate = () => {
  return (
    <LoginPageTemplateStyle>
      <div className={`authContainer`}>
        <Heading value="Login" className={`heading`} />
        <Text value="Sign in to your account" className={`text-primary`} />
        <SignInForm />
      </div>
    </LoginPageTemplateStyle>
  );
};

export default LoginPageTemplate;
