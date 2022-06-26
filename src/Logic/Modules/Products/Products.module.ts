import { ProductsStore } from './Products.store';
import { ProductsService } from './Products.service';

export class ProductsModule {
	public store: ProductsStore;
	public service: ProductsService;

	constructor() {
		this.store = new ProductsStore();
		this.service = new ProductsService();
	}
}
