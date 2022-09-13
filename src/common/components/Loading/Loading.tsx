import React from 'react';
import { ContainerLoading, TextLoading } from './loading.styled.component';


export interface LoadingInterface { }

const Loading: React.FC<LoadingInterface> = () => {
	return <ContainerLoading>
		<TextLoading>Cargando...</TextLoading>
	</ContainerLoading>;
};

export default Loading;

