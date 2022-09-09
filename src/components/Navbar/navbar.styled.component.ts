import styled from 'styled-components';



export const Search = styled.div`
  height: 39px;
  padding-top: 5px;
  padding-bottom: 18px;
  background: #ffe600;
`;
export const Layout = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 5px;
  
   
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 40px;
  background-color: red;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background: #eeeeee;
  cursor: pointer;
`;
export const Icon = styled.div`
  width: 18px;
  height: 18px;
`;
export interface PropsImg {
  src: string;
}
export const Image = styled.div`
  margin-right: 30px;
  width: 53px;
  height: 36px;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  height: 39px;
  padding: 0px 0px 0px 10px;
  background: white;
  font-size: 18px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &:focus-visible {
    outline: none;
  }
`;
