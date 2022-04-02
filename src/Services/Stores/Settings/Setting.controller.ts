import {makeAutoObservable} from "mobx";
import type RootStore from "../Store";
import {setting} from "./Setting.interface";

export class SettingController {
  private theme: setting.theme = setting.theme.LIGHT
  private readonly rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public get isLightTheme() {
    return this.theme === setting.theme.LIGHT;
  }

  public set setTheme(theme: setting.theme) {
    this.theme = theme;
  }

}
