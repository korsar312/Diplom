import API from '../../Api/API';
import modules from '../Modules';
import { repository } from '../../Api/Repository/Repository.interface';

export class UsersService {
	/**
	 * Вход пользователя
	 * @param login - логин
	 * @param password - пароль
	 */
	public Login(login: string, password: string) {
		return API.RestApi.login(login, password)
			.then((res) => {
				modules.users.store.setCurrentUser = res;
			})
			.catch((error: string) => {
				return Promise.reject(error);
			});
	}

	/**
	 * Выход пользователя из аккаунта
	 */
	public Logout() {
		return API.RestApi.logout()
			.then(() => {
				this.DisabledAutoSingIn();
				modules.users.store.setCurrentUser = null;
			})
			.catch((error: string) => {
				return Promise.reject(error);
			});
	}

	/**
	 * Возвращает истинность автовхода
	 */
	public IsAutoSingIn() {
		return API.repository.getAutoSingIn();
	}

	/**
	 * Возвращает сохраненного пользователя из LocalStorage
	 */
	public GetInputDataUser() {
		return API.repository.getInputDataUser();
	}

	/**
	 * Устанавливает Лог/Пасс и автовход для текущего пользователя
	 * @param val - объект с Лог/Пасс
	 */
	public EnabledAutoSingIn(val: repository.TInputDataUser) {
		API.repository.setInputDataUser(val);
		API.repository.setAutoSingIn(true);
	}

	/**
	 * Убирает автовход для текущего пользователя
	 */
	public DisabledAutoSingIn() {
		API.repository.setInputDataUser('');
		API.repository.setAutoSingIn(false);
	}
}
