import styled from 'styled-components';

export const NavbarStyled = styled.div`
width:100%;
display: flex;
padding 14px 0;
background: #ffe600;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

.layout{
	width: 90%;
	display: flex;
}
.img{
	padding-right: 25px;
	align-self:flex-start;
}
.input{
	border: none;
  width: 100%;
  padding: 0px 0px 0px 10px;
  background: white;
  font-size: 18px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &:focus-visible {
    outline: none;
  }
}
.button{
	border:none;
}
.iconContainer{
	display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 40px;
  
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background: #eeeeee;
  cursor: pointer;
}
.icon{
	width: 18px;
	height: 18px;
}
`;
