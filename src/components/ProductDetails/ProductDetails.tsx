import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { productDetailAdapter } from '../../adapters';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { Loading } from '../../common/components/Loading';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { priceFormater } from '../../common/utils/priceFormater';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProductById } from '../../redux/states/productDetail';
import { AppStore } from '../../redux/store';
import { getProductById } from '../../services/public.service';
import { ProductDetail } from '../../types/productDetail';
import { ProductDetailStyled } from './productDetails.styled.component';


export const ProductDetails: React.FC = () => {
	const productDetailData = useSelector((store: AppStore) => store.productDetail.item)
	const { loading, callEndpoint, errors } = useFetchAndLoad();
	const dispatch = useDispatch();


	type queryParameter = {
		itemId: string,
	};

	const { itemId } = useParams<queryParameter>();

	useEffect(() => {
		loadDetailId();
	}, []);


	const loadDetailId = async () => {

		if (productDetailData.id === '') {
			const productById = await callEndpoint(getProductById(!itemId ? '' : itemId));
				dispatch(filterProductById(productDetailAdapter(productById.data.item)));
		}
	}

	if (loading) return <Loading />

	if (errors)
		return (<NotResultsFound />);

	return <>

		<ProductDetailStyled>
			<BreadCrumb />
			<div className='containerCard'>

				<div className='container'>
					<div className='containerImage'>
						<img src={productDetailData?.picture} className='img' />
					</div>
					<div className='containerText'>
						{productDetailData?.condition === 'new' ? 'Nuevo' : 'Usado'} - {productDetailData?.sold_quantity} vendidos
						<div className='title'>{!productDetailData?.title ? '' : productDetailData?.title.slice(0, 40)}</div>
						<div className='price'>
							$  {priceFormater(!productDetailData?.price?.amount ? 0 : productDetailData?.price.amount)}

						</div>
						<button className='button'>
							Comprar
						</button>
					</div>
				</div>
				<div className='subtitle'>Descripcion del Producto</div>
				<div className='descripcion'>
					{productDetailData?.description}
				</div>
			</div>
		</ProductDetailStyled>
	</>;
};





