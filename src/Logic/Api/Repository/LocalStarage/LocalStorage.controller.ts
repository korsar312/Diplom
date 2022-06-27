import { repository } from '../Repository.interface';

export class LocalStorageController implements repository.IRepository {
	/**
	 * Возвращает истинность автовхода из LocalStorage
	 */
	public getAutoSingIn() {
		return window.localStorage.getItem('autoSingIn') === '1';
	}

	/**
	 * Устанавливает в LocalStorage значение истинности для автоматического входа
	 * @param val - true:Включено  false:Выключено
	 */
	public setAutoSingIn(val: boolean) {
		window.localStorage.setItem('autoSingIn', String(val ? '1' : '0'));
	}

	/**
	 * Возвращает Лог/Пасс сохраненного пользователя из LocalStorage
	 */
	public getInputDataUser() {
		return (JSON.parse(window.localStorage.getItem('dataSingIn') || '') as repository.TInputDataUser) || null;
	}

	/**
	 * Устанавливает в LocalStorage Лог/Пасс для текущего пользователя
	 * @param val - объект с Лог/Пасс
	 */
	public setInputDataUser(val: repository.TInputDataUser | '') {
		window.localStorage.setItem('dataSingIn', JSON.stringify(val));
	}
}
