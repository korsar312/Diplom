import { makeAutoObservable } from 'mobx';
import { language } from './Language.interface';
import services from '../../Services';

export class LanguageController {
	private readonly language: language.TLanguage = {
		METEOR: {
			EN: 'Meteor',
			RU: 'Метеор',
		},
		INVALID_PASSWORD: {
			EN: 'Wrong login or password',
			RU: 'Неверный логин или пароль',
		},
		ONLINE: {
			EN: 'Online',
			RU: 'Онлайн',
		},
		COPYRIGHT: {
			EN: '©All rights reserved',
			RU: '©Все права защищены',
		},
		SING_INING: {
			EN: 'Sing in',
			RU: 'Войдите',
		},
		SING_IN: {
			EN: 'Sing in',
			RU: 'Вход',
		},
		OR_CREATE_ACC: {
			EN: 'Or create an Account',
			RU: 'Или создайте Аккаунт',
		},
		LOGIN: {
			EN: 'Login',
			RU: 'Логин',
		},
		PASSWORD: {
			EN: 'Password',
			RU: 'Пароль',
		},
		PERSONNEL: {
			EN: 'Personnel',
			RU: 'Персонал',
		},
		COOPERATOR: {
			EN: 'Cooperator',
			RU: 'Сотрудники',
		},
		CHAT_WITH_COLLEAGUES: {
			EN: 'Chat with colleagues',
			RU: 'Чат c коллегами',
		},
		PRODUCTS_SUPPLIERS: {
			EN: 'Product suppliers',
			RU: 'Продукция поставщиков',
		},
		CHAT_WITH_SUPPLIERS: {
			EN: 'Chat with suppliers',
			RU: 'Чат с поставщиками',
		},
		PRODUCTS: {
			EN: 'Products',
			RU: 'Продукция',
		},
		WAREHOUSE: {
			EN: 'Warehouse',
			RU: 'Склад',
		},
		SUPPLIES: {
			EN: 'Supplies',
			RU: 'Поставки',
		},
		REQUEST: {
			EN: 'Request',
			RU: 'Заявки',
		},
		REPORTS: {
			EN: 'Reports',
			RU: 'Отчеты',
		},
		SEARCH: {
			EN: 'Search',
			RU: 'Поиск',
		},
		FORGET_PASSWORD_DES_KA: {
			EN: 'Forget password?',
			RU: 'Забыли пароль?',
		},
		PRICE: {
			EN: 'Price',
			RU: 'Цена',
		},
		CONVENTIONAL_UNIT: {
			EN: 'Conventional unit',
			RU: 'Условные единицы',
		},
		EXIT: {
			EN: 'Exit',
			RU: 'Выход',
		},
		SECURITY: {
			EN: 'Security',
			RU: 'Безопасность',
		},
		SETTINGS: {
			EN: 'Settings',
			RU: 'Настройки',
		},
		GENERAL: {
			EN: 'General',
			RU: 'Общее',
		},
		BASIC_SETTINGS: {
			EN: 'Basic setting',
			RU: 'Основные настройки',
		},
		ADVANCED_SETTINGS: {
			EN: 'Advanced setting',
			RU: 'Расширенный настройки',
		},
		ACCOUNT_SECURITY_SETTINGS: {
			EN: 'Account security setting',
			RU: 'Настройка безопасности учетной записи',
		},
		LOGOUT_OPTIONS: {
			EN: 'Logout options',
			RU: 'Варианты выхода из учетной записи',
		},
		USER_SETTINGS: {
			EN: 'User settings',
			RU: 'Настройки пользователя',
		},
		ENABLE_LIGHT_THEME: {
			EN: 'Enable light theme',
			RU: 'Включить светлую тему',
		},
		CHANGE_LANGUAGE: {
			EN: 'Change language',
			RU: 'Сменить язык',
		},
		MY_COMPANY: {
			EN: 'My company',
			RU: 'Моя компания',
		},
		MANAGEMENT: {
			EN: 'Management',
			RU: 'Управление',
		},
		IMPORT: {
			EN: 'Import',
			RU: 'Импорт',
		},
		EXPORT: {
			EN: 'Export',
			RU: 'Экспорт',
		},
		COMPANIES: {
			EN: 'Companies',
			RU: 'Компании',
		},
		COMPANY: {
			EN: 'Company',
			RU: 'Компания',
		},
		INDUSTRY: {
			EN: 'Industry',
			RU: 'Промышленность',
		},
		AGRICULTURE: {
			EN: 'Agriculture',
			RU: 'Сельское хозяйство',
		},
		FORESTRY: {
			EN: 'Forestry',
			RU: 'Лесное хозяйство',
		},
		CONSTRUCTION: {
			EN: 'Construction',
			RU: 'Строительство',
		},
		OTHER: {
			EN: 'Other activities in the sphere of material production',
			RU: 'Прочие виды деятельности сферы материального производства',
		},
		AGRICULTURAL_SERVICE: {
			EN: 'Agricultural service',
			RU: 'Обслуживание сельского хозяйства',
		},
		TRANSPORT: {
			EN: 'Transport',
			RU: 'Транспорт',
		},
		CONNECTION: {
			EN: 'Connection',
			RU: 'Связь',
		},
		TRADE_AND_CATERING: {
			EN: 'Trade and catering',
			RU: 'Торговля и общественное питание',
		},
		LOGISTICS_AND_SALES: {
			EN: 'Logistics and sales',
			RU: 'Материально-техническое снабжение и сбыт',
		},
		BLANKS: {
			EN: 'Blanks',
			RU: 'Заготовки',
		},
		INFORMATION_AND_COMPUTING_SERVICES: {
			EN: 'Information and Computing Services',
			RU: 'Информационно-вычислительное обслуживание',
		},
		OPERATIONS_WITH_REAL_ESTATE: {
			EN: 'Operations with real estate',
			RU: 'Операции с недвижимым имуществом',
		},
		GENERAL_COMMERCIAL_ACTIVITIES: {
			EN: 'General commercial activities to ensure the functioning of the market',
			RU: 'Общая коммерческая деятельность по обеспечению функционирования рынка',
		},
		GEOLOGY: {
			EN: 'Geology and exploration of subsoil, geodetic and hydrometeorological services',
			RU: 'Геология и разведка недр, геодезическая и гидрометеорологическая службы',
		},
		HOUSING: {
			EN: 'Housing',
			RU: 'Жилищное хозяйство',
		},
		UTILITIES: {
			EN: 'Utilities',
			RU: 'Коммунальное хозяйство',
		},
		NON_PRODUCTIVE_TYPES: {
			EN: 'Non-productive types of consumer services for the population',
			RU: 'Непроизводственные виды бытового обслуживания населения',
		},
		HEALTH: {
			EN: 'Health, physical culture and social security',
			RU: 'Здравоохранение, физическая культура и социальное обеспечение',
		},
		EDUCATION: {
			EN: 'public education',
			RU: 'Народное образование',
		},
		CULTURE: {
			EN: 'Culture and art',
			RU: 'Культура и искусство',
		},
		SCIENCE: {
			EN: 'Science and scientific service',
			RU: 'Наука и научное обслуживание',
		},
		FINANCE: {
			EN: 'Finance, credit, insurance, pensions',
			RU: 'Финансы, кредит, страхование, пенсионное обеспечение',
		},
		CONTROL: {
			EN: 'Control',
			RU: 'Управление',
		},
		PUBLIC_ASSOCIATIONS: {
			EN: 'Public associations',
			RU: 'Общественные объединения',
		},
		CHOOSE_LOGO: {
			EN: 'Choose a logo',
			RU: 'Выбрать логотип',
		},
	};
	private currentLanguage: language.ELanguageType = language.ELanguageType.EN;
	private readonly rootStore: typeof services.store;

	constructor(rootStore: typeof services.store) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}

	/**
	 * Устанавливает языковую модель
	 * @params language - язык
	 */
	public set setCurrentLanguage(language: language.ELanguageType) {
		this.currentLanguage = language;
	}

	/**
	 * Возвращает текущую языковую модель
	 */
	public get getCurrentLanguage() {
		return this.currentLanguage;
	}

	/**
	 * Возвращает выбранное предложение для текущей языковой модели
	 * @params wordKey - выбранное предложение
	 */
	public getText(wordKey: language.TAllLanguageWord) {
		return this.language[wordKey][this.currentLanguage];
	}
}
