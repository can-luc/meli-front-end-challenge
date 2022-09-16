import { createSelector } from '@reduxjs/toolkit';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { AppStore } from '../../redux/store';
import { Item } from '../../types/producList';
import { ProductListStyled } from './productlist.styled.component';
import { ProductListItems } from './ProductListtem';

export const ProductList: React.FC = () => {
	const itemsData = useSelector((store: AppStore) => store.products.items)
	
	if (itemsData?.length === 0) return <NotResultsFound />


	return (
		<>

			<ProductListStyled>
				<BreadCrumb />

				<div className='boxWrap'>
					<ol data-test-id="product-list" className='ol'>
						{itemsData?.map((
							{ id, picture, title, price, free_shipping, location }: Item,
							index: number
						) => (
							<Link key={id} data-test-id="product-list-item"   state={true} to={`/items/${id}`}>

								<ProductListItems
									key={id}
									id={id}
									index={index}
									picture={picture}
									title={title}
									price={price}
									free_shipping={free_shipping}
									location={location} condition={''} sold_quantity={0} />

							</Link>
						)
						)}
					</ol>
				</div>

			</ProductListStyled>
		</>);



};



