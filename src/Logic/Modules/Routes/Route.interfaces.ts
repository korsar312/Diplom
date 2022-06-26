import { ComponentType, LazyExoticComponent } from 'react';

export namespace route {
	export enum Name {
		COMPANY_PERSONNEL = 'COMPANY_PERSONNEL',
		MANAGEMENT = 'MANAGEMENT',
		COMPANIES = 'COMPANIES',
		PERSON = 'PERSON',
		IMPORT_PRODUCTS = 'IMPORT_PRODUCTS',
		EXPORT_PRODUCTS = 'EXPORT_PRODUCTS',
		SUPPLIES = 'SUPPLIES',
		WAREHOUSE = 'WAREHOUSE',
		REQUEST = 'REQUEST',
		REPORTS = 'REPORTS',
		MAIN = 'MAIN',
		ABOUT = 'ABOUT',
		ERROR = 'ERROR',
		CHAT = 'CHAT',
	}

	export interface IRoute {
		path: string;
		name: Name;
		element: LazyExoticComponent<ComponentType<any>> | any;
		layout: LazyExoticComponent<ComponentType<any>> | any;
		isPrivate?: boolean;
	}
}
