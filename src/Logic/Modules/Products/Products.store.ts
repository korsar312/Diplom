import { makeAutoObservable } from 'mobx';
import { product } from './Products.interface';

export class ProductsStore {
	private products: product.TProductHashMap | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Возвращает все продукты
	 */
	public getProducts() {
		return this.products;
	}

	/**
	 * Устанавливает продукты
	 * @params person - продукты
	 */
	public setProducts(product: product.TProductHashMap) {
		this.products = product;
	}
}
