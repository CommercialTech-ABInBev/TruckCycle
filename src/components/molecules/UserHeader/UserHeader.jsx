import React from 'react';
import UserHeaderStyle from './UserHeaderStyle';
import Avatar from '../../../assets/images/avatar.svg'
import Heading from '../../atoms/HeaderText/HeaderText'

const UserHeader = () => {
  return <UserHeaderStyle>
    <img src={Avatar} alt="avatar-icon" className={'profile-photo'} />
    <Heading value="Hi, Ademola" className={`profile-name`}/>
  </UserHeaderStyle>;
};

export default UserHeader;
