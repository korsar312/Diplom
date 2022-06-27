import { makeAutoObservable } from 'mobx';
import { companies } from './Companies.interface';

export class CompaniesStore {
	private company: companies.TCompaniesHashMap | null = null;
	private myCompany: companies.TCompany | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Возвращает все компании
	 */
	public getAllCompany() {
		return this.company;
	}

	/**
	 * Устанавливает список компаний
	 * @param company - компании
	 */
	public setAllCompany(company: companies.TCompaniesHashMap | null) {
		this.company = company;
	}

	/**
	 * Возвращает компанию юзера
	 */
	public getMyCompany() {
		return this.myCompany;
	}

	/**
	 * Устанавливает компанию юзера
	 * @param company - компания
	 */
	public setMyCompany(company: companies.TCompany | null) {
		this.myCompany = company;
	}
}
