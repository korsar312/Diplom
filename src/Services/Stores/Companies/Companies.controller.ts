import { makeAutoObservable } from 'mobx';
import { companies } from './Companies.interface';
import services from '../../Services';

export class CompaniesController {
	private company: companies.TCompaniesHashMap | null = null;
	private myCompany: companies.TCompany | null = null;

	private readonly rootStore: typeof services.store;

	constructor(rootStore: typeof services.store) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}

	/**
	 * Возвращает все копмании
	 */
	public get getAllCompany() {
		return this.company;
	}

	/**
	 * Устанавливает список компаний
	 * @params company - компании
	 */
	public set setAllCompany(company: companies.TCompaniesHashMap | null) {
		this.company = company;
	}

	/**
	 * Возвращает компанию юзера
	 */
	public get getMyCompany() {
		return this.myCompany;
	}

	/**
	 * Устанавливает компанию юзера
	 * @params company - компания
	 */
	public set setMyCompany(company: companies.TCompany | null) {
		this.myCompany = company;
	}
}
