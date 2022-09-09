import styled from 'styled-components';

export const ContainerLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const DetailContainer = styled.div`
  background: white;
  padding: 32px;
  border-radius: 4px;
  margin: 0 auto;
`;
export const PriceContainer = styled.div`
  display: flex;
  align-items: normal;
`;

export const TextContainer = styled.div`
  margin-left: 60px;
  display: flex;
  align-items: normal;
  justify-content: normal;
  flex-direction: column;
`;
export const Sold = styled.span`
  font-size: 14px;
  color: #333333;
  margin-bottom: 16px;
`;
export const Title = styled.h2`
  font-size: 24px;
  color: #333333;
  width: 70%;
  margin-bottom: 32px;
`;
export const Price = styled.span`
  font-size: 46px;
  color: #333333;
  margin-bottom: 32px;
`;
export const ButtonComprar = styled.button`
  background: #3483fa;
  color: white;
  width: 266px;
  height: 44px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
`;

export const Subtitle = styled.p`
  color: #333333;
  font-size: 28px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
export const Description = styled.span`
  font-size: 16px;
  color: #999999;
  margin-bottom: 32px;
`;
