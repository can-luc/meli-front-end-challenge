import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../redux/store';
import { P_Item } from './BreadCrumb.styled.component';


export interface BreadCrumbInterface { }

const BreadCrumb: React.FC<BreadCrumbInterface> = () => {

	const categories = useSelector((store: AppStore) => store.category)
	const ProductTitle = useSelector((store: AppStore) => store.product)

	return (

		<>
			{!categories ? null :
				<P_Item>
					{`${categories && categories[0] !== undefined ? `${categories[0].categories} >` : ""
						} ${ProductTitle.length > 0 ? ProductTitle[0].item.title.split(" ").shift() : ""}`}
				</P_Item>

			}
		</>



	);
};

export default BreadCrumb;

