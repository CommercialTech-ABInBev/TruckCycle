import React, { useState } from 'react';
import SignUpFormStyle from './SignUpFormStyle';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import PasswordIcon from '../../../assets/icons/eyes-pwd-close.svg';
import PasswordIconOpen from '../../../assets/icons/eyes-pwd.svg';
import LockIcon from '../../../assets/icons/password.svg';
import Button from '../../atoms/Button/Button';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    <SignUpFormStyle>
      <form className={`form`}>
        <div className={`form-content`}>
          <Text value="Password" className={`label`} />
          <div className={`email`}>
            <img src={LockIcon} alt="email" className={`label-icon`} />
            <Input
              type="password"
              value={password}
              placeholder="Set your password  "
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
        <div className={`form-content`}>
          <div className={`password-top`}>
            <Text value="Confirm Password" className={`label`} />
          </div>
          <div className={`password`}>
            <img src={LockIcon} alt="password" className={`label-icon`} />
            <Input
              type="password"
              value={confirmPassword}
              placeholder="Set your password"
              className="input-field"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src={PasswordIcon}
              onClick={toggleState}
              className={`password-icon`}
              alt="password-icon"
            />
          </div>
        </div>
        <Button type="submit" className="signInBtn" value="Sign up" />
      </form>
    </SignUpFormStyle>
  );
};

export default SignUpForm;
