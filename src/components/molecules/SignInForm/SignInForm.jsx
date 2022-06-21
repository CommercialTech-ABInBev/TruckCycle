import React, { useState } from 'react';
import SignInFormStyle from './SignInFormStyle';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import PasswordIcon from '../../../assets/icons/eyes-pwd-close.svg';
import PasswordIconOpen from '../../../assets/icons/eyes-pwd.svg';
import EmailIcon from '../../../assets/icons/email.svg';
import LockIcon from '../../../assets/icons/password.svg';
import Button from '../../atoms/Button/Button';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleState = (evt) => {
    if (evt.target.previousSibling.type === 'password') {
      evt.target.src = PasswordIconOpen;
      return (evt.target.previousSibling.type = 'text');
    } else {
      evt.target.src = PasswordIcon;
      return (evt.target.previousSibling.type = 'password');
    }
  };
  return (
    <SignInFormStyle>
      <form className={`form`}>
        <div className={`form-content`}>
          <Text value="Your email" className={`label`} />
          <div className={`email`}>
            <img src={EmailIcon} alt="email" className={`label-icon`}/>
            <Input
              type="email"
              value={email}
              placeholder="Email"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={`form-content`}>
          <div className={`password-top`}>
            <Text value="Password" className={`label`} />
            <Text value="Forgot Password?" className={`forgot-password`} />
          </div>
          <div className={`password`}>
          <img src={LockIcon} alt="password" className={`label-icon`}/>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={PasswordIcon}
              onClick={toggleState}
              className={`password-icon`}
              alt="password-icon"
            />
          </div>
        </div>
        <Button type="submit" className="signInBtn" value="Login" />
      </form>
    </SignInFormStyle>
  );
};

export default SignInForm;
