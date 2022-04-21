import { RootStore } from './Stores/Store';
import { RouteGoService } from './Routes/Route.services';
import { Utils } from './Libs/Utils/Utils';
import { Rest } from './Rest/Rest';
import { LanguageController } from './Language/Language.controller';

class Services {
	public store: RootStore;
	public rest: Rest;
	public route: RouteGoService;
	public util: Utils;
	public language: LanguageController;

	constructor() {
		this.store = new RootStore();
		this.rest = new Rest();
		this.route = new RouteGoService();
		this.util = new Utils();
		this.language = new LanguageController();
	}
}

const services = new Services();
export default services;
