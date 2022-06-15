import styled from 'styled-components';
import Colors from '../../../helpers/colors';
const OnboardingPageTemplateStyle = styled.div`
  background-color: ${Colors.white};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .signUp{
    width: 80%;
    filter: drop-shadow(0px 16px 60px rgba(134, 109, 201, 0.16));
  }
  .logIn{
    background-color: ${Colors.white};
    color: ${Colors.brand};
    filter: drop-shadow(0px 16px 60px rgba(78, 79, 114, 0.08));
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default OnboardingPageTemplateStyle;
