import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import services from '../Services';

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
	const history = useNavigate();

	useEffect(() => {
		services.store.routeStore.setHistory(history);
		// eslint-disable-next-line
	}, []);

	return null;
};
