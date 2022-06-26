import { companies } from '../Companies/Companies.interface';
import { setting } from '../Settings/Setting.interface';

export namespace language {
	export type TLanguage = {
		[key in TAllLanguageWord]: TWord;
	};

	type TWord = {
		[key in setting.ELanguageType]: string;
	};

	export enum ECurrency {
		DOLLAR = 'DOLLAR',
		RUBLE = 'RUBLE',
	}

	export enum ELanguageSimpleWord {
		CHAT_WITH_COLLEAGUES = 'CHAT_WITH_COLLEAGUES',
		CHAT_WITH_SUPPLIERS = 'CHAT_WITH_SUPPLIERS',
		CONVENTIONAL_UNIT = 'CONVENTIONAL_UNIT',
		COOPERATOR = 'COOPERATOR',
		COPYRIGHT = 'COPYRIGHT',
		EXIT = 'EXIT',
		FORGET_PASSWORD_DES_KA = 'FORGET_PASSWORD_DES_KA',
		GENERAL = 'GENERAL',
		INVALID_PASSWORD = 'INVALID_PASSWORD',
		LOGIN = 'LOGIN',
		METEOR = 'METEOR',
		ONLINE = 'ONLINE',
		OR_CREATE_ACC = 'OR_CREATE_ACC',
		PASSWORD = 'PASSWORD',
		PERSONNEL = 'PERSONNEL',
		PRICE = 'PRICE',
		PRODUCTS = 'PRODUCTS',
		PRODUCTS_SUPPLIERS = 'PRODUCTS_SUPPLIERS',
		REPORTS = 'REPORTS',
		REQUEST = 'REQUEST',
		SEARCH = 'SEARCH',
		SECURITY = 'SECURITY',
		SETTINGS = 'SETTINGS',
		SING_IN = 'SING_IN',
		SUPPLIES = 'SUPPLIES',
		WAREHOUSE = 'WAREHOUSE',
		COME_IN = 'COME_IN',
		BASIC_SETTINGS = 'BASIC_SETTINGS',
		ADVANCED_SETTINGS = 'ADVANCED_SETTINGS',
		ACCOUNT_SECURITY_SETTINGS = 'ACCOUNT_SECURITY_SETTINGS',
		LOGOUT_OPTIONS = 'LOGOUT_OPTIONS',
		USER_SETTINGS = 'USER_SETTINGS',
		ENABLE_LIGHT_THEME = 'ENABLE_LIGHT_THEME',
		CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
		MY_COMPANY = 'MY_COMPANY',
		MANAGEMENT = 'MANAGEMENT',
		IMPORT = 'IMPORT',
		EXPORT = 'EXPORT',
		COMPANIES = 'COMPANIES',
		COMPANY = 'COMPANY',
		CHOOSE_LOGO = 'CHOOSE_LOGO',
		ADD_PRODUCT = 'ADD_PRODUCT',
		REMEMBER_USER_KA = 'REMEMBER_USER_KA',
		COMPANY_PRODUCT = 'COMPANY_PRODUCT',
		ADD_PRODUCT_TO_EXPORT = 'ADD_PRODUCT_TO_EXPORT',
		REMOVE_PRODUCT = 'REMOVE_PRODUCT',
		PRODUCT_INFORM = 'PRODUCT_INFORM',
		REMOVE_PRODUCT_FROM_EXPORT = 'REMOVE_PRODUCT_FROM_EXPORT',
		SET_IMPORT_QUANTITY = 'SET_IMPORT_QUANTITY',
		ARE_YOU_SURE_KA = 'ARE_YOU_SURE_KA',
		CANCEL = 'CANCEL',
		CONTINUE = 'CONTINUE',
		ENTER_THE_NUMBER_EXPORT_PRODUCT = 'ENTER_THE_NUMBER_EXPORT_PRODUCT',
		ADD_MORE_PRICE = 'ADD_MORE_PRICE',
	}

	export const ELanguageEconomyWord = {
		...companies.EEconomyBranch,
	};

	export const ELanguageCurrencyWord = {
		...ECurrency,
	};

	export const allLanguageWord = {
		...ELanguageSimpleWord,
		...ELanguageEconomyWord,
		...ELanguageCurrencyWord,
	};

	export type TAllLanguageWord = keyof typeof allLanguageWord;

	export type TCurrency = {
		[T in ECurrency]: {
			name: typeof ECurrency[T];
			symbol: string;
		};
	};
}
