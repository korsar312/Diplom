import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import modules from '../Modules';

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
	const history = useNavigate();

	useEffect(() => {
		modules.route.store.setHistory(history);
		// eslint-disable-next-line
	}, []);

	return null;
};
