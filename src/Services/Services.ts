import { RootStore } from './Stores/Store';
import { RouteGoService } from './Routes/Route.services';
import { Utils } from './Libs/Utils/Utils';
import { Rest } from './Rest/Rest';

class Services {
	public store: RootStore;
	public rest: Rest;
	public route: RouteGoService;
	public util: Utils;

	constructor() {
		this.store = new RootStore();
		this.rest = new Rest();
		this.route = new RouteGoService();
		this.util = new Utils();
	}
}

const services = new Services();
export default services;
