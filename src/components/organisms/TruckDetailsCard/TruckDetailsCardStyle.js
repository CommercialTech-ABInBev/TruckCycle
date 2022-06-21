import styled from 'styled-components';
import Colors from '../../../helpers/colors';
const TruckDetailsCardStyle = styled.div`
  background-color: ${Colors.white};
  border-radius: 5px;
  border: 0.5px solid #edecec;
  height: 119px;
  padding: 20px;
  margin-bottom: 20px;
  .truck-name {
    display: flex;
    align-items: center;
    .truck {
      margin-left: 12px;
      font-weight: 600;
      font-size: 1.063rem;
    }
  }
  .truck-details{
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    .item:first-child {
      border: none;
      padding-left: 0;
    }
    .item{
      padding-left: 15px;
      border-left: 1px solid rgba(235, 235, 235, 0.77);
      display: flex;
      flex-direction: column;
      .item-title {
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 0.75rem;
        color: #5B5971;
    }
    .item-name{
      font-weight: 700;
      font-size: 0.75rem;
      color: ${Colors.black};
    }

  }
`;

export default TruckDetailsCardStyle;
