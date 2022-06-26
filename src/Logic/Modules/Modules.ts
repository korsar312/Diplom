import { CompaniesModule } from './Companies/Companies.module';
import { LanguageModule } from './Language/Language.module';
import { ModalModule } from './Modal/Modal.module';
import { ProductsModule } from './Products/Products.module';
import { RouteModule } from './Routes/Route.module';
import { SettingsModule } from './Settings/Settings.module';
import { UsersModule } from './Users/Users.module';

class Modules {
	public companies: CompaniesModule;
	public language: LanguageModule;
	public modal: ModalModule;
	public products: ProductsModule;
	public route: RouteModule;
	public settings: SettingsModule;
	public users: UsersModule;

	constructor() {
		this.companies = new CompaniesModule();
		this.language = new LanguageModule();
		this.modal = new ModalModule();
		this.products = new ProductsModule();
		this.route = new RouteModule();
		this.settings = new SettingsModule();
		this.users = new UsersModule();
	}
}

export default new Modules();
