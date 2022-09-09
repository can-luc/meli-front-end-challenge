import React from 'react';
import {
	NOT_FOUND_TITLE,
	NOT_FOUND_LIST_ONE,
	NOT_FOUND_LIST_TWO,
} from "./constants";
import { ContainerNotResult, Title, Ul, Li } from './notresultsfound.styled.component';

export interface NotResultsFoundInterface { }

const NotResultsFound: React.FC<NotResultsFoundInterface> = () => {
	return <ContainerNotResult>
		<Title>{NOT_FOUND_TITLE}</Title>
		<Ul>
			<Li>{NOT_FOUND_LIST_ONE}</Li>
			<Li>{NOT_FOUND_LIST_TWO}</Li>
		</Ul>
	</ContainerNotResult>;
};

export default NotResultsFound;

