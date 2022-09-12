import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { AppStore } from '../../redux/store';

import { ProductListStyled } from './productlist.styled.component';
import { ProductListItems } from './ProductListtem';
export interface ProductListsInterface { }

export const ProductList: React.FC = () => {
	const productsData = useSelector((store: AppStore) => store.product)

	if (productsData.items?.length === 0) return <NotResultsFound />


	return (
		<>

			<ProductListStyled>
				<BreadCrumb />
				<div className='boxWrap'>
					<ol data-test-id="product-list" className='ol'>
						{productsData?.items?.map(function (x: any, index: number) {

							return (
								<Link key={x.id} data-test-id="product-list-item" to={`/items/${x.id}`}>

									<ProductListItems
										key={x.id}
										id={x.id}
										index={index}
										image={x.picture}
										title={x.title}
										price={x.price.amount}
										free_shipping={x.free_shipping}
										city={x.location}
									/>

								</Link>
							)

						})}
					</ol>
				</div>

			</ProductListStyled>
		</>);



};



