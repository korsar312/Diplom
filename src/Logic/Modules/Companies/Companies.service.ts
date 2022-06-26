import API from '../../Api/API';
import { companies } from './Companies.interface';
import modules from '../Modules';

export class CompaniesService {
	public setMyCompany(company: companies.TCompany) {
		return API.RestApi.setMyCompany(company).then(() => {
			modules.companies.store.setMyCompany(company);
		});
	}

	public getMyCompany() {
		return API.RestApi.getMyCompany().then((res) => modules.companies.store.setMyCompany(res));
	}
}
