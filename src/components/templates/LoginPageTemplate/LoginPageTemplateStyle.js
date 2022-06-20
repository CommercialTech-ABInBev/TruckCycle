import styled from 'styled-components'
import Colors from '../../../helpers/colors'

const LoginPageTemplateStyle = styled.div`
  background-color: ${Colors.grey};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  .authContainer{
    width: 85%;
  }
  .heading{
    margin-top: 73px;
    font-weight: 700;
    margin-bottom:7px;
  }
  .text-primary{
    font-weight: 400;
    color: ${Colors.lightGrey};
   
  }
`;

export default LoginPageTemplateStyle