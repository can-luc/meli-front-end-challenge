import styled from 'styled-components';
import { device } from '../../../styled.component/device';

export const BreadCrumbStyled = styled.p`
  width: 90%;
  .container {
   
    @media ${device.laptop} {
     
      flex-direction: row;
    }
    display: flex;
    flex-direction: column;
  }

  .p {
    margin: 0 55px;
    font-size: 14px;
    color: #666666;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
