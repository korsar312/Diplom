import { makeAutoObservable } from "mobx";
import type RootStore from "../Store";

export class SettingController {
    private readonly rootStore: typeof RootStore;



    constructor(rootStore: typeof RootStore) {
        makeAutoObservable(this, );
        this.rootStore = rootStore;
    }



}
