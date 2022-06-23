import styled from 'styled-components';
import Colors from '../../../helpers/colors';
const TimerStyle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  span {
    position: absolute;
    top: 60px;
    font-weight: 700;
    font-size: 45.6716px;
    color: ${Colors.brand};
  }
`;

export default TimerStyle;
