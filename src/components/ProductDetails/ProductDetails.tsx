import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { AppStore } from '../../redux/store';
import { ProductDetailStyled } from './productDetails.styled.component';
export interface ProductDetailsInterface { }

export const ProductDetails: React.FC<ProductDetailsInterface> = () => {

	const productsData = useSelector((store: AppStore) => store.product)
	const productData = useSelector((store: AppStore) => store.product)

	const { itemId } = useParams();


	if (!productsData || productData.length === 0) return <NotResultsFound />;

	return <>


		<ProductDetailStyled>
			<BreadCrumb />
			<div className='containerCard'>
				<div className='container'>
					<img src={productsData?.item?.picture} className='img' />
					<div className='containerText'>
						{productsData?.item?.condition == 'new' ? 'Nuevo' : 'Usado'} - {productsData?.item?.sold_quantity} vendidos
						<div className='title'>{productsData?.item?.title.slice(0, 40)}</div>
						<div className='price'>
							$ {productsData?.item?.price.amount}
						</div>
						<button className='button'>
							Comprar
						</button>
					</div>
				</div>
				<div className='subtitle'>Descripcion del Producto</div>
				<div className='descripcion'>
					{productsData?.item?.description}
				</div>
			</div>
		</ProductDetailStyled>
	</>
		;
};



