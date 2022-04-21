import { StoreRouter } from '../Routes/StoreRouter';
import { SettingController } from './Settings/Setting.controller';
import { UsersController } from './Users/Users.controller';
import { ProductsController } from './Products/Products.controller';
import { ModalsController } from './Modal/Modal.controller';
import { CompaniesController } from './Companies/Companies.controller';

export class RootStore {
	public routeStore: StoreRouter;
	public settingStore: SettingController;
	public usersStore: UsersController;
	public productsStore: ProductsController;
	public modalStore: ModalsController;
	public companyStore: CompaniesController;

	constructor() {
		this.routeStore = new StoreRouter();
		this.settingStore = new SettingController(this);
		this.usersStore = new UsersController(this);
		this.productsStore = new ProductsController(this);
		this.modalStore = new ModalsController(this);
		this.companyStore = new CompaniesController(this);
	}
}
