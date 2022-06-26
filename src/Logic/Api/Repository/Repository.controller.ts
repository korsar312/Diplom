import { repository } from './Repository.interface';
import { LocalStorageController } from './LocalStarage/LocalStorage.controller';

export class RepositoryController implements repository.IRepository {
	private repositoryController: LocalStorageController;

	constructor() {
		this.repositoryController = new LocalStorageController();
	}

	/**
	 * Возвращает истинность автовхода
	 */
	public getAutoSingIn() {
		return this.repositoryController.getAutoSingIn();
	}

	/**
	 * Устанавливает значение истинности для автоматического входа
	 * @params val - true:Включено  false:Выключено
	 */
	public setAutoSingIn(val: boolean) {
		this.repositoryController.setAutoSingIn(val);
	}

	/**
	 * Возвращает Лог/Пасс сохраненного пользователя
	 */
	public getInputDataUser() {
		return this.repositoryController.getInputDataUser();
	}

	/**
	 * Устанавливает Лог/Пасс для текущего пользователя
	 * @params val - объект с Лог/Пасс
	 */
	public setInputDataUser(val: repository.TInputDataUser | '') {
		this.repositoryController.setInputDataUser(val);
	}
}
