import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { BreadCrumbStyled } from './BreadCrumb.styled.component';


export interface BreadCrumbInterface { }

const BreadCrumb: React.FC<BreadCrumbInterface> = () => {

	const productsData = useSelector((store: AppStore) => store.product)
	const listCategories: string[] = [];

	productsData.categories?.map((x: string) => {
		listCategories.push(x, ' >');
	})

	return (

		<>
			{
				<BreadCrumbStyled>
					<p className='p'>
						{listCategories?.map(function (x: string, index) {
							return (<span key={x + index}>{x}</span>)
						})}
					</p>
				</BreadCrumbStyled>

			}
		</>
	);
};

export default BreadCrumb;

