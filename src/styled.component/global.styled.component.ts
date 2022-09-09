import styled from 'styled-components';
export interface PropsCol {
    sizeCol: Number;
  }
  
  export const Grid = styled.div`
   
  `;
  
  export const Row = styled.div`
    display: flex;
   
  `;
  
  const media = {
    xs: (styles: any) => `
      @media only screen and (max-width: 480px) {
        ${styles}
      }
    `,
  };
  
  export const Col = styled.div<PropsCol>`
   flex: ${({ sizeCol }) => sizeCol && sizeCol.toString()};
  `;