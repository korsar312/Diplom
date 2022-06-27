import API from '../../Api/API';
import { companies } from './Companies.interface';
import modules from '../Modules';

export class CompaniesService {
	/**
	 * Отправить на сервер компанию пользователя и записать в стор
	 */
	public setMyCompany(company: companies.TCompany) {
		return API.RestApi.setMyCompany(company).then(() => {
			modules.companies.store.setMyCompany(company);
		});
	}

	/**
	 * Получить с сервера компанию пользователя и записать в стор
	 */
	public getMyCompany() {
		return API.RestApi.getMyCompany().then((res) => modules.companies.store.setMyCompany(res));
	}
}
