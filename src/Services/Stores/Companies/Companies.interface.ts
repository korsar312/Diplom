import { currency } from '../../System/Currency/Currency.interface';

export namespace companies {
	export type TCompaniesHashMap = {
		[key in string]: TCompany;
	};

	export type TCompany = {
		name: string;
		subtitle?: string;
		avatar?: string;
		economyBranch: EEconomyBranch;
		allProducts: string[];
		exportProduct: TExportProduct[];
		requisites: TRequisites;
		description: string;
		personal: string[];
	};

	export enum EEconomyBranch {
		INDUSTRY = 'INDUSTRY',
		AGRICULTURE = 'AGRICULTURE',
		FORESTRY = 'FORESTRY',
		CONSTRUCTION = 'CONSTRUCTION',
		OTHER = 'OTHER',
		AGRICULTURAL_SERVICE = 'AGRICULTURAL_SERVICE',
		TRANSPORT = 'TRANSPORT',
		CONNECTION = 'CONNECTION',
		TRADE_AND_CATERING = 'TRADE_AND_CATERING',
		LOGISTICS_AND_SALES = 'LOGISTICS_AND_SALES',
		BLANKS = 'BLANKS',
		INFORMATION_AND_COMPUTING_SERVICES = 'INFORMATION_AND_COMPUTING_SERVICES',
		OPERATIONS_WITH_REAL_ESTATE = 'OPERATIONS_WITH_REAL_ESTATE',
		GENERAL_COMMERCIAL_ACTIVITIES = 'GENERAL_COMMERCIAL_ACTIVITIES',
		GEOLOGY = 'GEOLOGY',
		HOUSING = 'HOUSING',
		UTILITIES = 'UTILITIES',
		NON_PRODUCTIVE_TYPES = 'NON_PRODUCTIVE_TYPES',
		HEALTH = 'HEALTH',
		EDUCATION = 'EDUCATION',
		CULTURE = 'CULTURE',
		SCIENCE = 'SCIENCE',
		FINANCE = 'FINANCE',
		CONTROL = 'CONTROL',
		PUBLIC_ASSOCIATIONS = 'PUBLIC_ASSOCIATIONS',
	}

	export type TExportProduct = {
		idProduct: string;
		price: TPrice;
	};

	type TPrice = {
		[key in keyof typeof currency.ECurrency]?: {
			currency: key;
			amount: number;
		};
	};

	type TRequisites = {
		address: TAddressCompany;
		other?: TRequisitesOther;
	};

	type TAddressCompany = {
		index?: number;
		country?: string;
		city?: string;
		other?: string;
	};

	type TRequisitesOther = {
		[key in string]: string;
	};
}
