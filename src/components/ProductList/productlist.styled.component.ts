import styled from 'styled-components';


export const Container = styled.div`
background-color: white;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-bottom: 1px solid #eeeeee;
	width: 90%;
	max-width: 1200px;
	margin: auto;
	padding: 0 0;



	/* Grid */
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 20px;
  `;
  export const ContainerImagen = styled.div`
	border-radius: 10px;
	text-align: center;
	padding: 20px;
	background-size: cover;
	background-position: center center;

	/* Flexbox */
	/* width: 30%; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  `;
  export const ContainerTextos = styled.div`
  display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
  `;


  export const CardPrice = styled.div`
  border-radius: 10px;
	min-height: 200px;
	font-weight: bold;
	padding: 20px;
	position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: center center;
  `;
  export const Textos = styled.div`
  height: 100%;
	
	/* Flebox */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 50vh;
    
  `;
  export const Textos2 = styled.div`
  height: 100%;
	text-align: end;
	/* Flebox */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 50%;
  `;
//Fin test




export const ProductListItem = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 16px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
`;
export const ProductListItem_Container = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #eeeeee;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
 
`;

export const ProductListItem_Image = styled.div`
  border-radius: 4px;
  margin-left: 16px;
  margin-right: 16px;
  width: 180px;
  height: 180px;
`;

export const ProductListItem_Description = styled.div`
  width: 100%;
`;
export const ProductListItem_ContainerPrice = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  width: 90%;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
export const ProductListItem_Shipping = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  width: 90%;
`;
export const ProductListItem_Price = styled.div`
  margin-right: 10px;
  font-size: 24px;
  margin-left:5px;
`;
export const ProductListItem_Location = styled.span`
  font-size: 12px;
  color: #666666;
`;
export const ProductListItem_Title = styled.p`
  font-size: 18px;
  color: #333333;
  width: 100%;
`;
