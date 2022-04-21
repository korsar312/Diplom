import { makeAutoObservable } from 'mobx';
import { setting } from './Setting.interface';
import services from '../../Services';

export class SettingController {
	private theme: setting.theme = setting.theme.DARK;
	private currentLanguage: setting.ELanguageType = setting.ELanguageType.EN;
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

	/**
	 * Устанавливает языковую модель
	 * @params language - язык
	 */
	public set setCurrentLanguage(language: setting.ELanguageType) {
		this.currentLanguage = language;
	}

	/**
	 * Возвращает текущую языковую модель
	 */
	public get getCurrentLanguage() {
		return this.currentLanguage;
	}
}
