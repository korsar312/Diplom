import {makeAutoObservable} from "mobx";
import services from "../../Services";
import {product} from "./Products.interface";

export class ProductsController {
  private products: product.TProduct[] | null = null

  private readonly rootStore: typeof services.store;

  constructor(rootStore: typeof services.store) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  /**
   * Возвращает все продукты
   */
  public get getProducts() {
    return this.products
  }


  /**
   * Устанавливает продукты
   * @params person - продукты
   */
  public set setProducts(product: product.TProduct[]) {
    this.products = product
  }
}
