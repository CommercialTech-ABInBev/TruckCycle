import React from 'react';
import SignupPageTemplateStyle from './SignupPageTemplateStyle';
import Heading from '../../atoms/HeaderText/HeaderText';
import Text from '../../atoms/Text/Text';
import SignUpForm from '../../molecules/SignUpForm/SignUpForm';

const SignupPageTemplate = () => {
  return (
    <SignupPageTemplateStyle>
      <div className={`authContainer`}>
        <Heading value="Sign up" className={`heading`} />
        <Text value="kindly set password" className={`text-primary`} />
        <SignUpForm />
      </div>
    </SignupPageTemplateStyle>
  );
};

export default SignupPageTemplate;
