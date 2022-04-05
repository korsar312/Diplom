import {StoreRouter} from "../Routes/StoreRouter";
import {SettingController} from "./Settings/Setting.controller";
import {UsersController} from "./Users/Users.controller";
import {LanguageController} from "./Language/Language.controller";
import {ProductsController} from "./Products/Products.controller";

export class RootStore {
  public routeStore: StoreRouter;
  public settingStore: SettingController;
  public usersStore: UsersController;
  public productsStore: ProductsController;
  public languageStore: LanguageController;

  constructor() {
    this.routeStore = new StoreRouter();
    this.settingStore = new SettingController(this);
    this.usersStore = new UsersController(this);
    this.productsStore = new ProductsController(this);
    this.languageStore = new LanguageController(this);

  }
}