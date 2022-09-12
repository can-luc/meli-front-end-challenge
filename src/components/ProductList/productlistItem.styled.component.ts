import styled from 'styled-components';
import { device } from '../../styled.component/device';
export const ProductListItemStyled = styled.div`

	.containerCard{
	width:100%;
	height:270px;
    @media ${device.laptop} {
        height: 180px;
       flex-direction: row;
      }
     
	background-color: white;
    border-bottom: 1px solid #eeeeee;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-bottom: 5px;
    display: flex;

    

    flex-direction: column;
    padding: 10px;
    margin: 10px;
	}

    .title{
        @media ${device.laptop} {
           font-size: 18px;
           width: 100%;
          }
          font-size: 10px;
        color: #333333;
        width: 65%;
    } 
    .price{
        @media ${device.laptop} {
            font-size: 24px;
            
        }
        margin-right: 10px;
        margin-left: 5px;
        font-size: 14px;
    }
    .shipping{
        margin-left:15px
    }
	.containerImage_Price{
       
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .containerTexts{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .containerPrice_title{
        height: 100%;
        width: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }
    .containerPrice{
        font-weight: bold;
        padding: 0px;
        @media ${device.laptop} {
            padding: 10px;
            
           }
    }
    .containerCity{
        font-weight: bold;
        padding: 0px;
        @media ${device.laptop} {
            padding: 10px;
            
           }
        width: 50%;
        text-align: end;
    }
    .City{
        font-size: 12px;
        color: #666666;
    }
    .Image{
        border-radius: 4px;
       
      
    }

	
}
`;
