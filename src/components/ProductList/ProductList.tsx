import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { AppStore } from '../../redux/store';
import { ProductListStyled } from './productlist.styled.component';
import { ProductListItems } from './ProductListtem';
import { ProductList as ProductLists } from '../../types/productList';
export interface ProductListsInterface { }

export const ProductList: React.FC = () => {
	const productsData = useSelector((store: AppStore) => store.product)

	if (productsData.items?.length === 0) return <NotResultsFound />

console.log(productsData.items);
	return (
		<>

			<ProductListStyled>
				<BreadCrumb />
				<div className='boxWrap'>
					<ol data-test-id="product-list" className='ol'>
						{productsData?.items?.map((
							{ id, picture, title, price, free_shipping, city }: ProductLists,
							index: number
						) => (
							<Link key={id} data-test-id="product-list-item" to={`/items/${id}`}>

								<ProductListItems
									key={id}
									id={id}
									index={index}
									picture={picture}
									title={title}
									price={price}
									free_shipping={free_shipping}
									city={city}
								/>

							</Link>
						  )
						  )}
					</ol>
				</div>

			</ProductListStyled>
		</>);



};



