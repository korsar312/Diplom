import { rest } from './RestApi.interface';
import services from '../../Services';
import { myCompany, persona, productsToSell } from './RestApi.TempMockJSON';
import { companies } from '../../Stores/Companies/Companies.interface';
import { product } from '../../Stores/Products/Products.interface';
import { users } from '../../Stores/Users/Users.interface';

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
		log.push(['time', services.util.getStringCurrentTime()]);

		console.log(log.map((el) => `${el[0]}: ${el[1]}`));
	}

	/**
	 * Вход и запись пользователя в стор
	 * @param login имя
	 * @param password пароль
	 * @param callback функция, запускающаяся после ответа сервера
	 */
	public login(login: string, password: string, callback?: rest.TCallback<users.TPerson>) {
		new Promise((resolve: (value: users.TPerson) => void, reject) => {
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
				services.store.usersStore.setCurrentUser = response;
				callback?.(true, '', response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					data: { login, password },
					comment: `Ошибка входа пользователя ${error}`,
				});

				callback?.(false, error, null);
			});
	}

	/**
	 * Получить все товары и записать в стор
	 * @param callback функция, запускающаяся после ответа сервера
	 */
	public getProduct(callback?: rest.TCallback<product.TProductHashMap>) {
		new Promise((resolve: (value: product.TProductHashMap) => void) => {
			setTimeout(() => {
				return resolve(productsToSell);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное получение всего списка товаров`,
				});

				services.store.productsStore.setProducts = response;
				callback?.(true, '', response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при получении всего списка товаров ${error}`,
				});

				callback?.(false, error, null);
			});
	}

	/**
	 * Получить компанию юзера и записать в стор
	 * @param callback функция, запускающаяся после ответа сервера
	 */
	public getMyCompany(callback?: rest.TCallback<companies.TCompany>) {
		new Promise((resolve: (value: companies.TCompany) => void) => {
			setTimeout(() => {
				return resolve(myCompany);
			}, 1000);
		})
			.then((response) => {
				this.logAction({
					action: 'API success',
					comment: `Успешнное получение компании юзера`,
				});

				services.store.companyStore.setMyCompany = response;
				callback?.(true, '', response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при получении компании юзера ${error}`,
				});

				callback?.(false, error, null);
			});
	}

	/**
	 * Отправка изменений компанию юзера на сервер
	 * @param company обновленная компания юзера для отправки на сервер
	 * @param callback функция, запускающаяся после ответа сервера
	 */
	public setMyCompany(company: companies.TCompany, callback?: rest.TCallback<null>) {
		new Promise((resolve: (value: null) => void) => {
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

				callback?.(true, '', response);
			})
			.catch((error) => {
				this.logAction({
					action: 'API reject',
					comment: `Ошибка при изменение компании юзера на сервере ${error}`,
				});

				callback?.(false, error, null);
			});
	}
}
