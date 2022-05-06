import { repository } from './Repository.interface';
import { LocalStorageController } from './LocalStarage/LocalStorage.controller';

export class RepositoryController implements repository.IRepository {
	private repositoryController: LocalStorageController;

	constructor() {
		this.repositoryController = new LocalStorageController();
	}

	/**
	 * Возвращает истинность автовхода
	 * @return boolean
	 */
	isAutoSingIn() {
		return this.repositoryController.isAutoSingIn();
	}

	/**
	 * Возвращает Лог/Пасс сохраненного пользователя
	 * @return repository.TLocalStorageLogin
	 */
	getLogin() {
		return this.repositoryController.getLogin();
	}

	/**
	 * Устанавливает значение истинности для автоматического входа
	 * @params val - 1:Включено  0:Выключено
	 */
	setAutoSingIn(val: 1 | 0) {
		this.repositoryController.setAutoSingIn(val);
	}

	/**
	 * Устанавливает Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	setLogin(val: repository.TLocalStorageLogin | '') {
		this.repositoryController.setLogin(val);
	}

	/**
	 * Включает автовход и устанавливает Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	enabledAutSingIn(val: repository.TLocalStorageLogin | '') {
		this.repositoryController.enabledAutSingIn(val);
	}

	/**
	 * Выключает автовход и сбрасывает Лог/Пасс
	 */
	disabledAutSingIn() {
		this.repositoryController.disabledAutSingIn();
	}
}
