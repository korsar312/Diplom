import { rest } from './RestApi.interface';
import { myCompany, persona, productsToSell } from './RestApi.TempMockJSON';
import { companies } from '../../Modules/Companies/Companies.interface';
import { product } from '../../Modules/Products/Products.interface';
import { users } from '../../Modules/Users/Users.interface';
import Libs from '../../Libs/Libs';

export class RestApi {
	/**
	 * Логирование
	 * @param currentPage страница с которой вызван logAction (main, about ...)
	 * @param element элемент, что вызвал logAction (ButtonStandard ...)
	 * @param action действие, что вызвало logAction (нажатие, переход ...)
	 * @param data важные переменные для logAction (props, arguments ...)
	 * @param comment комментарии
	 */
	public logAction({ currentPage, element, action, data, comment }: rest.TLogAction) {
		const log = Object.entries({ currentPage, element, action, comment }).filter((el) => el[1]);
		log.push(['time', Libs.utils.getStringCurrentTime()]);

		console.log(log.map((el) => `${el[0]}: ${el[1]}`));
	}

	/**
	 * Вход
	 * @param login имя
	 * @param password пароль
	 */
	public login(login: string, password: string) {
		return new Promise((resolve: (value: users.TPerson) => void, reject) => {
			setTimeout(() => {
				if (login !== '11' || password !== '11') {
					return reject(new Error('unauthorised'));
				} else {
					return resolve(persona);
				}
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					data: { login, password },
					comment: `Успешный вход пользователя ${response.id}`,
				});
				return Promise.resolve(response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					data: { login, password },
					comment: `Ошибка входа пользователя ${error}`,
				});
				return Promise.reject(error);
			});
	}

	/**
	 * Выход
	 */
	public logout() {
		return new Promise((resolve: (user: null) => void) => {
			setTimeout(() => {
				return resolve(null);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешный выход пользователя`,
				});
				return Promise.resolve(response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка выхода пользователя ${error}`,
				});
				return Promise.reject(error);
			});
	}

	/**
	 * Получить все товары
	 */
	public getProduct() {
		return new Promise((resolve: (value: product.TProductHashMap) => void) => {
			setTimeout(() => {
				return resolve(productsToSell);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное получение всего списка товаров`,
				});

				return Promise.resolve(response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при получении всего списка товаров ${error}`,
				});

				return Promise.reject(error);
			});
	}

	/**
	 * Получить компанию юзера
	 */
	public getMyCompany() {
		return new Promise((resolve: (value: companies.TCompany) => void) => {
			setTimeout(() => {
				return resolve(myCompany);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное получение компании юзера`,
				});

				return Promise.resolve(response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при получении компании юзера ${error}`,
				});

				return Promise.reject(error);
			});
	}

	/**
	 * Отправка изменений компанию юзера на сервер
	 * @param company обновленная компания юзера для отправки на сервер
	 */
	public setMyCompany(company: companies.TCompany) {
		return new Promise((resolve: (value: null) => void) => {
			setTimeout(() => {
				company.name.toLowerCase();
				return resolve(null);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное изменение компании юзера на сервере`,
				});

				return Promise.resolve(response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при изменение компании юзера на сервере ${error}`,
				});

				return Promise.reject(error);
			});
	}

	/**
	 * Получить все необходимые данные
	 */
	public getAllData() {
		const promiseArray = [this.getProduct(), this.getMyCompany()];

		Promise.all(promiseArray)
			.then(() => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное получение всех необходимых данных`,
				});

				return Promise.resolve();
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при получении всех необходимых данных ${error}`,
				});

				return Promise.reject(error);
			});
	}
}
