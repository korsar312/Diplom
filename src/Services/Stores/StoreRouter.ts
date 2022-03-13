import {NavigateFunction} from "react-router-dom";

export class StoreRouter {
    private navigation: null | NavigateFunction = null;

    public setHistory(history: NavigateFunction) {
        this.navigation = history;
    }

    public getNavigation() {
        return this.navigation as NavigateFunction;
    }
}