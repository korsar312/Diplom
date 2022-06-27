import { makeAutoObservable } from 'mobx';
import { setting } from './Setting.interface';

export class SettingStore {
	private theme: setting.theme = setting.theme.DARK;
	private currentLanguage: setting.ELanguageType = setting.ELanguageType.EN;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Возвращает выбранное предложение для текущей языковой модели
	 */
	public get isLightTheme() {
		return this.theme === setting.theme.LIGHT;
	}

	/**
	 * Устанавливает выбранную тему (темную, светлую, ...)
	 * @param theme - тема
	 */
	public set setTheme(theme: setting.theme) {
		this.theme = theme;
	}

	/**
	 * Устанавливает языковую модель
	 * @param language - язык
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
