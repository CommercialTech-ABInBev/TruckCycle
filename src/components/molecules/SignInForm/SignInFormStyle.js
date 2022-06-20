import styled from 'styled-components';
import Colors from '../../../helpers/colors';

const SignInFormStyle = styled.div`
  width: 100%;
  .form {
    margin-top: 37px;
    .form-content {
      margin-bottom: 35px;
      &:nth-of-type(2) {
        margin-bottom: 0;
      }
      .label {
        color: ${Colors.black};
        font-size: 0.75rem;
        margin-bottom: 12px;
        font-weight: 400;
      }
      .input-field {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 60px;
        background-color: ${Colors.white};
        border-radius: 9px;
        box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.08);
      }
    }
    span {
      color: #b92020;
      font-size: 0.875em;
    }
    .password-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .forgot-password {
        color: ${Colors.brand};
        font-size: 0.75rem;
        margin-bottom: 12px;
      }
    }
    .email {
      position: relative;
      .label-icon {
        position: absolute;
        left: 0;
        top: 0;
        margin-top: 15px;
        margin-left: 18px;
      }
    }
    .password {
      position: relative;
      .label-icon {
        position: absolute;
        left: 0;
        top: 0;
        margin-top: 15px;
        margin-left: 18px;
      }
      .password-icon {
        cursor: pointer;
        margin-right: 18px;
        margin-top: 15px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .signInBtn {
      background: ${Colors.brand};
      font-size: 1em;
      margin-bottom: 0;
      margin-top: 124px;
      width: 100%;
    }
  }
`;

export default SignInFormStyle;
