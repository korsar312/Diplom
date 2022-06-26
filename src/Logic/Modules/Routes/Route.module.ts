import { RouteStore } from './Route.store';
import { RouteService } from './Route.services';

export class RouteModule {
	public store: RouteStore;
	public service: RouteService;

	constructor() {
		this.store = new RouteStore();
		this.service = new RouteService();
	}
}
