import { makeAutoObservable } from 'mobx';
import { language } from './Language.interface';
import services from '../../Services';
import ELanguageType = language.ELanguageType;

export class LanguageController {
	private readonly language: language.TLanguage = {
		[language.ELanguageKey.METEOR]: {
			EN: 'Meteor',
			RU: 'Метеор',
		},
		[language.ELanguageKey.INVALID_PASSWORD]: {
			EN: 'Wrong login or password',
			RU: 'Неверный логин или пароль',
		},
		[language.ELanguageKey.ONLINE]: {
			EN: 'Online',
			RU: 'Онлайн',
		},
		[language.ELanguageKey.COPYRIGHT]: {
			EN: '©All rights reserved',
			RU: '©Все права защищены',
		},
		[language.ELanguageKey.SING_INING]: {
			EN: 'Sing in',
			RU: 'Войдите',
		},
		[language.ELanguageKey.SING_IN]: {
			EN: 'Sing in',
			RU: 'Вход',
		},
		[language.ELanguageKey.OR_CREATE_ACC]: {
			EN: 'Or create an Account',
			RU: 'Или создайте Аккаунт',
		},
		[language.ELanguageKey.LOGIN]: {
			EN: 'Login',
			RU: 'Логин',
		},
		[language.ELanguageKey.PASSWORD]: {
			EN: 'Password',
			RU: 'Пароль',
		},
		[language.ELanguageKey.PERSONNEL]: {
			EN: 'Personnel',
			RU: 'Персонал',
		},
		[language.ELanguageKey.COOPERATOR]: {
			EN: 'Cooperator',
			RU: 'Сотрудники',
		},
		[language.ELanguageKey.CHAT_WITH_COLLEAGUES]: {
			EN: 'Chat with colleagues',
			RU: 'Чат c коллегами',
		},
		[language.ELanguageKey.PRODUCTS_SUPPLIERS]: {
			EN: 'Product suppliers',
			RU: 'Продукция поставщиков',
		},
		[language.ELanguageKey.CHAT_WITH_SUPPLIERS]: {
			EN: 'Chat with suppliers',
			RU: 'Чат с поставщиками',
		},
		[language.ELanguageKey.PRODUCTS]: {
			EN: 'Products',
			RU: 'Продукция',
		},
		[language.ELanguageKey.WAREHOUSE]: {
			EN: 'Warehouse',
			RU: 'Склад',
		},
		[language.ELanguageKey.SUPPLIES]: {
			EN: 'Supplies',
			RU: 'Поставки',
		},
		[language.ELanguageKey.REQUEST]: {
			EN: 'Request',
			RU: 'Заявки',
		},
		[language.ELanguageKey.REPORTS]: {
			EN: 'Reports',
			RU: 'Отчеты',
		},
		[language.ELanguageKey.SEARCH]: {
			EN: 'Search',
			RU: 'Поиск',
		},
		[language.ELanguageKey.FORGET_PASSWORD_DES_KA]: {
			EN: 'Forget password?',
			RU: 'Забыли пароль?',
		},
		[language.ELanguageKey.PRICE]: {
			EN: 'Price',
			RU: 'Цена',
		},
		[language.ELanguageKey.CONVENTIONAL_UNIT]: {
			EN: 'Conventional unit',
			RU: 'Условные единицы',
		},
		[language.ELanguageKey.EXIT]: {
			EN: 'Exit',
			RU: 'Выход',
		},
		[language.ELanguageKey.SECURITY]: {
			EN: 'Security',
			RU: 'Безопасность',
		},
		[language.ELanguageKey.SETTINGS]: {
			EN: 'Settings',
			RU: 'Настройки',
		},
		[language.ELanguageKey.GENERAL]: {
			EN: 'General',
			RU: 'Общее',
		},
		[language.ELanguageKey.BASIC_SETTINGS]: {
			EN: 'Basic setting',
			RU: 'Основные настройки',
		},
		[language.ELanguageKey.ADVANCED_SETTINGS]: {
			EN: 'Advanced setting',
			RU: 'Расширенный настройки',
		},
		[language.ELanguageKey.ACCOUNT_SECURITY_SETTINGS]: {
			EN: 'Account security setting',
			RU: 'Настройка безопасности учетной записи',
		},
		[language.ELanguageKey.LOGOUT_OPTIONS]: {
			EN: 'Logout options',
			RU: 'Варианты выхода из учетной записи',
		},
		[language.ELanguageKey.USER_SETTINGS]: {
			EN: 'User settings',
			RU: 'Настройки пользователя',
		},
		[language.ELanguageKey.ENABLE_LIGHT_THEME]: {
			EN: 'Enable light theme',
			RU: 'Включить светлую тему',
		},
		[language.ELanguageKey.CHANGE_LANGUAGE]: {
			EN: 'Change language',
			RU: 'Сменить язык',
		},
		[language.ELanguageKey.MY_COMPANY]: {
			EN: 'My company',
			RU: 'Моя компания',
		},
		[language.ELanguageKey.MANAGEMENT]: {
			EN: 'Management',
			RU: 'Управление',
		},
		[language.ELanguageKey.IMPORT]: {
			EN: 'Import',
			RU: 'Импорт',
		},
		[language.ELanguageKey.EXPORT]: {
			EN: 'Export',
			RU: 'Экспорт',
		},
		[language.ELanguageKey.COMPANIES]: {
			EN: 'Companies',
			RU: 'Компании',
		},
		[language.ELanguageKey.COMPANY]: {
			EN: 'Company',
			RU: 'Компания',
		},
	};
	private currentLanguage: language.ELanguageType = ELanguageType.EN;
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
	public getText(wordKey: language.ELanguageKey) {
		return this.language[wordKey][this.currentLanguage];
	}
}
