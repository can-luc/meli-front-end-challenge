import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { productDetailAdapter } from '../../adapters/productdetail.adapter';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { Loading } from '../../common/components/Loading';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProductById } from '../../redux/states/product';
import { AppStore } from '../../redux/store';
import { getProductById, getProductByIdDescription } from '../../services/public.service';
import { ButtonComprar, ContainerLayout, Description, DetailContainer, Price, PriceContainer, Sold, Subtitle, TextContainer, Title } from './productDetails.styled.component';

export interface ProductDetailsInterface { }

export const ProductDetails: React.FC<ProductDetailsInterface> = () => {
	const dispatch = useDispatch();
	const { itemId } = useParams();
	const { loading, callEndpoint, errors } = useFetchAndLoad();
	const productsData = useSelector((store: AppStore) => store.product)
	const [description, setDescription] = useState();

	useEffect(() => {
		loadDetailId();
		loadDetailIdDescription();

	}, [itemId]);

	const loadDetailId = async () => {
		const productById = await callEndpoint(getProductById(!itemId ? '' : itemId));

		dispatch(filterProductById(productDetailAdapter(productById.data)));
	}

	const loadDetailIdDescription = async () => {
		const productByDescription = await callEndpoint(getProductByIdDescription(!itemId ? '' : itemId));
		setDescription(productByDescription.data.plain_text);
	}

	if (!productsData) return <NotResultsFound />;

	return <>
		{loading && <Loading />}

		<ContainerLayout>
			<BreadCrumb />
			<DetailContainer>
				<PriceContainer>
					<img src={productsData?.item?.picture} width={680} height={680} />
					<TextContainer>
						<Sold>
							{productsData?.item?.condition == 'new' ? 'Nuevo' : 'Usado'} - {productsData?.item?.sold_quantity} vendidos
						</Sold>
						<Title>{productsData?.item?.title.slice(0, 40)}</Title>
						<Price>
							$ {productsData?.item?.price.amount}
						</Price>
						<ButtonComprar>
							Comprar
						</ButtonComprar>
					</TextContainer>
				</PriceContainer>
				<Subtitle>Descripcion del Producto</Subtitle>
				<Description>
					{description != undefined ? description : ''}
				</Description>
			</DetailContainer>
		</ContainerLayout>
	</>
		;
};



