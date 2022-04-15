import { makeAutoObservable } from 'mobx';
import { setting } from './Setting.interface';
import services from '../../Services';

export class SettingController {
	private theme: setting.theme = setting.theme.DARK;
	private readonly rootStore: typeof services.store;

	constructor(rootStore: typeof services.store) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}

	/**
	 * Возвращает выбранное предложение для текущей языковой модели
	 */
	public get isLightTheme() {
		return this.theme === setting.theme.LIGHT;
	}

	/**
	 * Устанавливает выбранную тему (темную, светлую, ...)
	 * @params theme - тема
	 */
	public set setTheme(theme: setting.theme) {
		this.theme = theme;
	}
}
