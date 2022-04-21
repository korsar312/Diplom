import React from 'react';
import { useParams } from 'react-router-dom';

type TCooperatorPage = 'id';

/**
 * Страница сотрудников выбранной копмании
 */
const CooperatorPage = () => {
	const { id } = useParams<TCooperatorPage>();

	return <div>{id}</div>;
};

export default CooperatorPage;
