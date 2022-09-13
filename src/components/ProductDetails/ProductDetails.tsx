import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { Loading } from '../../common/components/Loading';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { priceFormater } from '../../common/utils/priceFormater';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { productDetailModel } from '../../models/productDetail.model';
import { getProductById } from '../../services/public.service';
import { ProductDetail } from '../../types/productDetail';
import { ProductDetailStyled } from './productDetails.styled.component';

export const ProductDetails: React.FC = () => {

	const { loading, callEndpoint, errors } = useFetchAndLoad();
	const [Detail, setDetail] = useState<ProductDetail | undefined>(productDetailModel);

	type queryParameter = {
		itemId: string;
	};

	const { itemId } = useParams<queryParameter>();

	useEffect(() => {
		loadDetailId();
	}, []);


	const loadDetailId = async () => {
		const productById = await callEndpoint(getProductById(!itemId ? '' : itemId));
		setDetail(productById.data.item);
	}

	if (loading || !Detail) return <Loading />

	if (errors)
		return (<NotResultsFound />);

	return <>

		<ProductDetailStyled>
			<BreadCrumb />
			<div className='containerCard'>
				<span></span>
				<div className='container'>
					<div className='containerImage'>
						<img src={Detail?.picture} className='img' />
					</div>
					<div className='containerText'>
						{Detail && Detail.condition === 'new' ? 'Nuevo' : 'Usado'} - {Detail.sold_quantity} vendidos
						<div className='title'>{!Detail?.title ? '' : Detail?.title.slice(0, 40)}</div>
						<div className='price'>
							$  {priceFormater(!Detail?.price.amount ? 0 : Detail?.price.amount)}

						</div>
						<button className='button'>
							Comprar
						</button>
					</div>
				</div>
				<div className='subtitle'>Descripcion del Producto</div>
				<div className='descripcion'>
					{Detail?.description}
				</div>
			</div>
		</ProductDetailStyled>
	</>;
};





