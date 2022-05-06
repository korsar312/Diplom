import { repository } from '../Repository.interface';

export class LocalStorageController implements repository.IRepository {
	/**
	 * Возвращает истинность автовхода из LocalStorage
	 */
	isAutoSingIn() {
		return window.localStorage.getItem('autoSingIn') === '1';
	}

	/**
	 * Возвращает Лог/Пасс сохраненного пользователя из LocalStorage
	 */
	getLogin() {
		return (JSON.parse(window.localStorage.getItem('dataSingIn') || '') as repository.TLocalStorageLogin) || null;
	}

	/**
	 * Устанавливает в LocalStorage значение истинности для автоматического входа
	 * @params val - 1:Включено  0:Выключено
	 */
	setAutoSingIn(val: 1 | 0) {
		window.localStorage.setItem('autoSingIn', String(val));
	}

	/**
	 * Устанавливает в LocalStorage Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	setLogin(val: repository.TLocalStorageLogin | '') {
		window.localStorage.setItem('dataSingIn', JSON.stringify(val));
	}

	/**
	 * Включает автовход и устанавливает в LocalStorage Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	enabledAutSingIn(val: repository.TLocalStorageLogin | '') {
		this.setLogin(val);
		this.setAutoSingIn(1);
	}

	/**
	 * Выключает автовход и сбрасывает Лог/Пасс в LocalStorage
	 */
	disabledAutSingIn() {
		this.setLogin('');
		this.setAutoSingIn(0);
	}
}
