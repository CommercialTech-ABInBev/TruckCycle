import styled from 'styled-components'
import Colors from '../../../helpers/colors'


const UnstrapperPageTemplateStyle = styled.div`
background-color: ${Colors.backgroundWhite};
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
.content-wrapper{
  width: 90%;
  padding-top: 100px;
  .title{
    margin-top: 38px;
    font-weight: 700;
font-size: 1.563rem;
margin-bottom:25px;
  }
}
`;

export default UnstrapperPageTemplateStyle