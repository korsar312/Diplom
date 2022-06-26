import { CompaniesStore } from './Companies.store';
import { CompaniesService } from './Companies.service';

export class CompaniesModule {
	public store: CompaniesStore;
	public service: CompaniesService;

	constructor() {
		this.store = new CompaniesStore();
		this.service = new CompaniesService();
	}
}
