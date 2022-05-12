import {product} from '../../Stores/Products/Products.interface';
import {companies} from '../../Stores/Companies/Companies.interface';
import {users} from '../../Stores/Users/Users.interface';
import {currency} from '../../System/Currency/Currency.interface'; //TODO УДАЛИТЬ К ХЕРАМ ВСЁ ЭТО

//TODO УДАЛИТЬ К ХЕРАМ ВСЁ ЭТО

export const productsToSell: product.TProductHashMap = {
	'56785675466': {
		id: '56785675466',
		image: 'https://w7.pngwing.com/pngs/888/66/png-transparent-gold-nugget-metal-ore-gold-dust-gold-rock-desktop-wallpaper.png',
		name: 'Золотая руда',
		analogue: ['123'],
		conventionalUnit: 'тонна',
		company: [],
		industry: 'Мануфактурия',
		property: [['Чистота', '99%']],
	},
	'234564565464': {
		id: '234564565464',
		image: 'https://w7.pngwing.com/pngs/83/795/png-transparent-base-metal-copper-ore-mineral-iron-ore-gold-rock-material.png',
		name: 'Медная руда',
		analogue: ['321'],
		conventionalUnit: 'тонна',
		company: [],
		industry: 'Мануфактурия',
		property: [['Чистота', '99%']],
	},
	'566545654': {
		id: '566545654',
		image: 'https://w7.pngwing.com/pngs/237/156/png-transparent-vista-santiago-hematite-agate-quartz-mineral-mineral-miscellaneous-photography-rock-thumbnail.png',
		name: 'Серебрянная руда',
		analogue: ['123'],
		conventionalUnit: 'тонна',
		company: [],
		industry: 'Мануфактурия',
		property: [['Чистота', '99%']],
	},
	'3455475675': {
		id: '3455475675',
		image: 'https://w7.pngwing.com/pngs/947/461/png-transparent-ore-mineral-metal-cassiterite-mining-mining-gold-rock-metal-thumbnail.png',
		name: 'Оловянная руда',
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
	allProducts: ['56785675466', '566545654', '3455475675'],
	exportProduct: [
		{
			idProduct: '56785675466',
			amountExport: 10,
			price: {
				[currency.ECurrency.DOLLAR]: {
					currency: currency.ECurrency.DOLLAR,
					amount: 100,
				},
			},
		},
	],

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
