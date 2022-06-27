import API from '../../Api/API';
import modules from '../Modules';

export class ProductsService {
	/**
	 * Получить с сервера все товары и записать в стор
	 */
	public getProducts() {
		return API.RestApi.getProduct().then((res) => {
			modules.products.store.setProducts(res);
		});
	}
}
