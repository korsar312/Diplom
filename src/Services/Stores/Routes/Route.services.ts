import {route} from "./Route.interfaces";
import {getRoutes} from "./Route.path";
import {generatePath, Params} from "react-router-dom";
import rootStore from "../Store";
import RestApi from "../../RestApi/RestApi";

class RouteGoService {


    private go(name: route.Name, params?: Params, currentPage?: string, state?: Record<string, any>): void {
        const findRoute = getRoutes().find((r) => r.name === name);
        const navigate = rootStore.routeStore.getNavigation()

        if (!findRoute) {
            throw new Error(`[${RouteGoService.name}]: '${name}' - маршрут не найден!`);
        } else {
            RestApi.logAction({
                action: `переход на страницу ${findRoute.name} по пути ${findRoute.path}`,
                currentPage: currentPage
            })
            navigate(generatePath(findRoute.path, params), {replace: true, state});
        }
    }

    public RouterGo(
        name: route.Name,
        params?: Params,
        currentPage?: string,
        state?: Record<string, any>,
    ): void {
        return this.go(name, params, currentPage, state);
    }
}

export default new RouteGoService();