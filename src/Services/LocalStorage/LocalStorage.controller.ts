import { localStorage } from './LocalStorage.interface';

export class LocalStorageController {
	/**
	 * Возвращает истинность автовхода
	 */
	public get isAutoSingIn() {
		return window.localStorage.getItem('autoSingIn') === '1';
	}

	/**
	 * Возвращает Лог/Пасс сохраненного пользователя
	 */
	public get getLogin() {
		return (JSON.parse(window.localStorage.getItem('dataSingIn') || '') as localStorage.TLocalStorageLogin) || null;
	}

	/**
	 * Включает автовход и устанавливает в LocalStorage Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	public set enabledAutSingIn(val: localStorage.TLocalStorageLogin | '') {
		this.setLogin(val);
		this.setAutoSingIn(1);
	}

	/**
	 * Выключает автовход и сбрасывает Лог/Пасс в LocalStorage
	 */
	public disabledAutSingIn() {
		this.setLogin('');
		this.setAutoSingIn(0);
	}

	/**
	 * Устанавливает в LocalStorage значение истинности для автоматического входа
	 * @params val - 1:Включено  2:Выключено
	 */
	private setAutoSingIn(val: 1 | 0) {
		window.localStorage.setItem('autoSingIn', String(val));
	}

	/**
	 * Устанавливает в LocalStorage Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	private setLogin(val: localStorage.TLocalStorageLogin | '') {
		window.localStorage.setItem('dataSingIn', JSON.stringify(val));
	}
}
