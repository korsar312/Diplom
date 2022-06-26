import API from '../../Api/API';
import modules from '../Modules';

export class ProductsService {
	public getProducts() {
		return API.RestApi.getProduct().then((res) => {
			modules.products.store.setProducts(res);
		});
	}
}
