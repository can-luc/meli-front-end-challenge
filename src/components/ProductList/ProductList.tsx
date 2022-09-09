import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Shipping from "../../assets/shipping.png";
import { BreadCrumb } from '../../common/components/BreadCrumb';
import { NotResultsFound } from '../../common/components/NotResultsFound';
import { AppStore } from '../../redux/store';
import { ContainerImagen, CardPrice, Container, ContainerTextos, ProductListItem, ProductListItem_Image, ProductListItem_Location, ProductListItem_Price, ProductListItem_Title, Textos, Textos2 } from './productlist.styled.component';
export interface ProductListsInterface { }

export const ProductList: React.FC = () => {
	const productsData = useSelector((store: AppStore) => store.product)

	if (productsData.length === 0) return <NotResultsFound />


	return (
		<>

			<ProductListItem>
				<BreadCrumb />
				<ol data-test-id="product-list">
					{productsData?.map(function (x: any) {
						return (

							<>
								<Link key={x.item.id} data-test-id="product-list-item" to={`/items/${x.item.id}`}>

									<Container>
										<ContainerImagen >
											<ProductListItem_Image>
												<img src={x.item.picture} width={180} height={180} />
											</ProductListItem_Image>
										</ContainerImagen>
										<ContainerTextos>
											<CardPrice>
												<Textos>
													<ProductListItem_Price>
														$ {x.item.price.amount}

														{x.item?.free_shiping?.free_shipping ? <img style={{ marginLeft: '15px' }} src={Shipping} alt="product-item" width={18} height={18} /> : null}
													</ProductListItem_Price>
													<ProductListItem_Title>{x.item.title}</ProductListItem_Title>
												</Textos>
											</CardPrice>
											<CardPrice>
												<Textos2>
													<ProductListItem_Location>{x.item.location}</ProductListItem_Location>
													<p></p>
												</Textos2>
											</CardPrice>
										</ContainerTextos>
									</Container>
								</Link>
							</>





						)

					})}
				</ol>

			</ProductListItem>
		</>);



};



