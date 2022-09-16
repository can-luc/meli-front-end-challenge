import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { BreadCrumbStyled } from './BreadCrumb.styled.component';


export interface BreadCrumbInterface { }

const BreadCrumb: React.FC<BreadCrumbInterface> = () => {

	const categoriesData = useSelector((store: AppStore) => store.products.categories)
	const listCategories: string[] = [];

	if (categoriesData.length > 0) {
		categoriesData?.map((x: string) => {
			listCategories.push(x, ' >');
		})
	}


	return (

		<>
			{
				<BreadCrumbStyled>
					{categoriesData.length > 0 && (
						<div className='p' >
							{listCategories?.map(function (x: string, index) {
								return (<span key={x + index}>{x}</span>)
							})}
						</div>
					)

					}

				</BreadCrumbStyled>

			}
		</>
	);
};

export default BreadCrumb;

