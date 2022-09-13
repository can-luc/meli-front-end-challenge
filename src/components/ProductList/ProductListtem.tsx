import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailAdapter } from '../../adapters/productdetail.adapter';
import Shipping from "../../assets/shipping.png";
import { Loading } from '../../common/components/Loading';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { priceFormater } from '../../common/utils/priceFormater';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProductById } from '../../redux/states/product';
import { AppStore } from '../../redux/store';
import { getProductById } from '../../services/public.service';
import { ProductList } from '../../types/productList';
import { ProductListItemStyled } from './productlistItem.styled.component';

export const ProductListItems: React.FC<ProductList> = ({
	picture,
	title,
	price,
	free_shipping,
	city,
	index,
	id,
}) => {
	const productsData = useSelector((store: AppStore) => store.product)
	const dispatch = useDispatch();
	const { loading, callEndpoint, errors } = useFetchAndLoad();

	const loadDetailId = async () => {
		const productById = await callEndpoint(getProductById(id));
		dispatch(filterProductById(productDetailAdapter(productById.data)));
	}

	if (productsData.items?.length === 0) return <NotResultsFound />


	return (
		<>

			{loading && <Loading />}
			<li
				data-test-id="product-list-item"
				className={`product-list-item product-list-item`}
				onClick={() => loadDetailId()}
			>
				<ProductListItemStyled>
					<div className='containerCard'>

						<div className='Image' >
							<img src={picture} width={180} height={180} />
						</div>
						<div className='containerPrice'>
							<div className='containerPrice_title'>
								<div className='price'> 
									$  {priceFormater(!price.amount?0:price.amount)}
									{free_shipping ? <img className='shipping' src={Shipping} alt="product-item" width={18} height={18} /> : null}
								</div>
								<div className='title'>{title}</div>
							</div>
						</div>
						<div className='containerCity'>
							<div className='City'>{city}</div>
						</div>
					</div>
				</ProductListItemStyled>
			</li></>);
};



