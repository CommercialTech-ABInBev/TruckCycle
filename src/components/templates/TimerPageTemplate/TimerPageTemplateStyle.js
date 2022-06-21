import styled from 'styled-components';
import Colors from '../../../helpers/colors';

const TimerPageTemplateStyle = styled.div`
  background-color: ${Colors.backgroundWhite};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  .content-wrapper {
    width: 90%;
    padding-top: 80px;
    .title {
      text-align: center;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${Colors.black};
      margin-bottom: 84px;
    }
    .date-con {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 80px;
      .date {
        margin-left: 12px;
        font-weight: 400;
        font-size: 1.125rem;
        color: rgba(7, 4, 23, 0.7);
      }
    }
    .timer-con {
      display: flex;
      justify-content: center;
      margin-bottom: 146px;
    }
    .timer-btn {
      width: 100%;
    }
    .click-text {
      text-align: center;
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`;

export default TimerPageTemplateStyle;
