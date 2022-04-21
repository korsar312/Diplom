import { rest } from './RestApi.interface';
import { users } from '../../Stores/Users/Users.interface';
import services from '../../Services';
import { product } from '../../Stores/Products/Products.interface';
import { companies } from '../../Stores/Companies/Companies.interface';

const productsToSell: product.TProductHashMap = {
	'321': {
		name: 'Оспамокс',
		analogue: ['123'],
		conventionalUnit: 'Упаковка',
		company: [],
		industry: 'Мануфактурия',
		price: [
			{
				price: 800,
				currency: product.TCurrency.DOLLAR,
			},
			{
				price: 60000,
				currency: product.TCurrency.RUBLE,
			},
		],
		property: [{ sad: 'asd' }],
	},
	'123': {
		name: 'Амоксил',
		analogue: ['321'],
		conventionalUnit: 'Упаковка',
		company: [],
		industry: 'Мануфактурия',
		price: [
			{
				price: 1000,
				currency: product.TCurrency.DOLLAR,
			},
			{
				price: 80000,
				currency: product.TCurrency.RUBLE,
			},
		],
		property: [{ sad: 'asd' }],
	},
};

const myCompany: companies.TCompany = {
	name: 'Рога и копыта',
	subtitle: 'Поможем Вам с нашими проблеммами',
	economyBranch: companies.EEconomyBranch.INDUSTRY,
	allProducts: ['123'],
	exportProduct: ['123'],
	avatar: 'https://cdn-icons-png.flaticon.com/512/1387/1387539.png',
	requisites: {
		address: {
			index: 127591,
			country: 'Россия',
			city: 'Москва',
		},
	},
	description:
		'съешь ещё этих мягких французских булок, да выпей чаю, съешь ещё этих мягких французских булок, да выпей чаю, съешь ещё этих мягких французских булок, да выпей чаю',
	personal: ['123213', '123213345', '1232132342'],
};

const persona: users.TPerson = {
	id: '123213',
	accessory: '34',
	image: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
	isOnline: true,
	position: 'Ст. менеджер',
	surname: 'Мразь',
	name: 'Иван',
};

export class RestApi {
	private URL: string = 'https://jsonplaceholder.typicode.com/';

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
	 * Вход
	 * @param login имя
	 * @param password пароль
	 * @param callback функция, запускающаяся после ответа сервера
	 */
	public login(login: string, password: string, callback?: (isOk?: boolean, error?: any, data?: any) => void) {
		fetch(`${this.URL}posts`, {
			method: 'POST',
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.catch((error) => {
				callback?.(false, error);
			})
			.then((json) => {
				console.log(json);
				if (login !== '11' || password !== '11') {
					throw new Error('qwe');
				}

				callback?.(true, '', persona);
			})
			.catch((error) => {
				callback?.(false, error);
			});
	}

	public getProduct(callback?: (isOk?: boolean, error?: any, data?: any) => void) {
		fetch(`${this.URL}posts`)
			.then((response) => response.json())
			.catch((error) => {
				callback?.(false, error);
			})
			.then((json) => {
				console.log(json);

				services.store.productsStore.setProducts = productsToSell;
				callback?.(true, '', productsToSell);
			})
			.catch((error) => {
				callback?.(false, error);
			});
	}

	public getMyCompany(callback?: (isOk?: boolean, error?: any, data?: any) => void) {
		fetch(`${this.URL}posts`)
			.then((response) => response.json())
			.catch((error) => {
				callback?.(false, error);
			})
			.then((json) => {
				console.log(json);

				services.store.companyStore.setMyCompany = myCompany;
				callback?.(true, '', myCompany);
			})
			.catch((error) => {
				callback?.(false, error);
			});
	}
}
