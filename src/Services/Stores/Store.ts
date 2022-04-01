import {StoreRouter} from "./StoreRouter";
import {SettingController} from "./Settings/Setting.controller";
import {UsersController} from "./Users/Users.controller";
import {LanguageController} from "./Language/Language.controller";

class RootStore {
  public routeStore: StoreRouter;
  public settingStore: SettingController;
  public usersStore: UsersController;
  public languageStore: LanguageController;

  constructor() {
    this.routeStore = new StoreRouter();
    this.settingStore = new SettingController(this);
    this.usersStore = new UsersController(this);
    this.languageStore = new LanguageController(this);

  }
}

const rootStore = new RootStore();
export default rootStore;