import { route } from './Route.interfaces';
import { getRoutes } from './Path/Route.path';
import { generatePath, Params } from 'react-router-dom';
import modules from '../Modules';
import API from '../../Api/API';

export class RouteService {
	/**
	 * Программный переход на страницы
	 * @params name - имя роута
	 * @params params - параметры, что передаются в URL
	 * @params actionElementName - инициализирующий переход элемент
	 * @params state - параметры, что не передаются в URL
	 */
	public RouterGo(name: route.Name, params?: Params, actionElementName?: string, state?: Record<string, any>): void {
		return this.go(name, params, actionElementName, state);
	}

	private go(routeName: route.Name, params?: Params, actionElementName?: string, state?: Record<string, any>): void {
		const findRoute = getRoutes().find(({ name }) => name === routeName);

		const navigate = modules.route.store.getNavigation();

		if (!findRoute) {
			throw new Error(`[${RouteService.name}]: '${routeName}' - маршрут не найден!`);
		} else {
			API.RestApi.logAction({
				action: `переход на страницу ${findRoute.name} по пути ${findRoute.path}`,
				element: actionElementName,
			});
			navigate(generatePath(findRoute.path, params), { replace: true, state });
		}
	}
}
