import styled from 'styled-components';
import { device } from '../../styled.component/device';

export const ProductDetailStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .containerCard {
    background: white;
    border-radius: 4px;
    width: 90%;
    height: 100%;
    @media ${device.laptop} {
      height: 750px;
    }
  }

  .container {
    justify-content: space-around;
    @media ${device.laptop} {
      flex-direction: row;
    }
    flex-direction: column;
    width: 90%;
    display: flex;
  }

  .img {
    width: 180px;
    height: 180px;
    @media ${device.laptop} {
      width: 450px;
      height: 450px;
    }
  }
  .containerText {
    @media ${device.laptop} {
      margin-left: 60px;
      align-items: normal;
      margin-top: 32px;
    }
    align-items: center;
    margin-top: 0px;
    margin-left: 0px;
    display: flex;
    
    justify-content: normal;
    flex-direction: column;
  }
  .title {
    font-size: 12px;
    @media ${device.laptop} {
      font-size: 24px;
    }
    color: #333333;
    width: 70%;
    margin-bottom: 32px;
  }
  .price {
    @media ${device.laptop} {
      font-size: 46px;
      margin-bottom: 32px;
    }

    font-size: 14px;
    color: #333333;
    margin-bottom: 10px;
  }
  .button {
    background: #3483fa;
    color: white;
    width: 100px;
    @media ${device.laptop} {
      width: 266px;
    }
    height: 44px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .subtitle {
    color: #333333;
    
    height: 10px;
    @media ${device.laptop} {
      font-size: 28px;
      padding-left: 25px;
      height: 100px;
    }
    font-size: 10px;
    padding-left: 85px;
    
  }
  .descripcion {
    @media ${device.laptop} {
      font-size: 16px;
    }
    font-size: 8px;
    color: #999999;
    margin-bottom: 32px;
    width: 90%;
    display: flex;
    padding: 1rem;
  }
  }
`;
