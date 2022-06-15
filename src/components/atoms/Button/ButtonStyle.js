import styled from 'styled-components'
import Colors from '../../../helpers/colors';
export const ButtonStyle = styled.button`
  background: ${Colors.brand};
  border-radius: 9px;
  height: 58px;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  font-family: calibri;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.15s ease-in-out;
  color: ${Colors.white}
`;
