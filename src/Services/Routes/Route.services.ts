import {route} from "./Route.interfaces";
import {getRoutes} from "./Route.path";
import {generatePath, Params} from "react-router-dom";
import services from "../Services";


export class RouteGoService {

  /**
   * Программный переход на страницы
   * @params name - имя роута
   * @params params - параметры, что передаются в URL
   * @params actionElementName - инициализирующий переход элемент
   * @params state - параметры, что не передаются в URL
   */
  public RouterGo(
    name: route.Name,
    params?: Params,
    actionElementName?: string,
    state?: Record<string, any>,
  ): void {
    return this.go(name, params, actionElementName, state);
  }

  private go(name: route.Name, params?: Params, actionElementName?: string, state?: Record<string, any>): void {
    const findRoute = getRoutes().find((r) => r.name === name);
    const navigate = services.store.routeStore.getNavigation()

    if (!findRoute) {
      throw new Error(`[${RouteGoService.name}]: '${name}' - маршрут не найден!`);
    } else {
      services.rest.RestApi.logAction({
        action: `переход на страницу ${findRoute.name} по пути ${findRoute.path}`,
        element: actionElementName
      })
      navigate(generatePath(findRoute.path, params), {replace: true, state});
    }
  }
}
