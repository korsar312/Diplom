import {StoreRouter} from "./StoreRouter";
import {BasketController} from "./Basket/Basket.controller";
import {SettingController} from "./Settings/Setting.controller";

class RootStore {
    public routeStore: StoreRouter;
    public basketStore: BasketController;
    public settingStore: SettingController;

    constructor() {
        this.routeStore = new StoreRouter();
        this.basketStore = new BasketController(this);
        this.settingStore = new SettingController(this);

    }
}

const rootStore = new RootStore();
export default rootStore;