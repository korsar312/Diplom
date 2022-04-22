import {product} from '../../Stores/Products/Products.interface';
import {companies} from '../../Stores/Companies/Companies.interface';
import {users} from '../../Stores/Users/Users.interface'; //TODO УДАЛИТЬ К ХЕРАМ ВСЁ ЭТО

//TODO УДАЛИТЬ К ХЕРАМ ВСЁ ЭТО

export const productsToSell: product.TProductHashMap = {
	'321': {
		id: '321',
		image: 'https://w7.pngwing.com/pngs/888/66/png-transparent-gold-nugget-metal-ore-gold-dust-gold-rock-desktop-wallpaper.png',
		name: 'Золотая руда',
		analogue: ['123'],
		conventionalUnit: 'тонна',
		company: [],
		industry: 'Мануфактурия',
		property: [['Чистота', '99%']],
	},
	'123': {
		id: '123',
		image: 'https://w7.pngwing.com/pngs/83/795/png-transparent-base-metal-copper-ore-mineral-iron-ore-gold-rock-material.png',
		name: 'Медная руда',
		analogue: ['321'],
		conventionalUnit: 'тонна',
		company: [],
		industry: 'Мануфактурия',
		property: [['Чистота', '99%']],
	},
};

export const myCompany: companies.TCompany = {
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

export const persona: users.TPerson = {
	id: '123213',
	accessory: '34',
	image: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg',
	isOnline: true,
	position: 'Ст. менеджер',
	surname: 'Мразь',
	name: 'Иван',
};
