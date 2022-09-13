import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { productDetailAdapter } from '../../adapters/productdetail.adapter';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { Loading } from '../../common/components/Loading';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProductById, productClear } from '../../redux/states/product';
import { AppStore } from '../../redux/store';
import { getProductById } from '../../services/public.service';
import { ProductDetailStyled } from './productDetails.styled.component';
import { priceFormater } from '../../common/utils/priceFormater';


export const ProductDetails: React.FC = () => {

	type ProductDetail = {


		id: string | undefined;
		title: string | undefined;
		price: {
			currency: string | undefined;
			amount: number | undefined;
		};
		picture: string | undefined;
		condition: string | undefined;
		free_shiping: boolean | undefined;
		sold_quantity: number | undefined;
		description: string | undefined;


	};

	const productsData = useSelector((store: AppStore) => store.product)
	const productData = useSelector((store: AppStore) => store.product)
	const dispatch = useDispatch();
	const { loading, callEndpoint, errors } = useFetchAndLoad();
	const [Detail, setDetail] = useState<ProductDetail | undefined>({

		id: '',
		title: '',
		price: {
			currency: '',
			amount: 0,
		},
		picture: '',
		condition: '',
		free_shiping: false,
		sold_quantity: 0,
		description: ''

	});



	type queryParameter = {
		itemId: string;
	};

	const { itemId } = useParams<queryParameter>();
	useEffect(() => {
		loadDetailId();
	}, []);


	const loadDetailId = async () => {
		const productById = await callEndpoint(getProductById(!itemId ? '' : itemId));
		console.log(productById);
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





