import { makeAutoObservable } from "mobx";
import { basket } from "./Basket.interface";
import type RootStore from "../Store";

export class BasketController {
    private readonly rootStore: typeof RootStore;

    private basketItems: basket.ItemInfo[] | null = null;
    private count: number = 0;  //пример переменной в сторе. Пример использование в компоненте находится в Example


    constructor(rootStore: typeof RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    public getBasketItems() {
        return this.basketItems;
    }

    public setBasketItems(itemsArr: basket.ItemInfo[]) {
        this.basketItems = itemsArr;
    }

    public get getCount() {         //пример объявления получение значения в сторе
        return this.count;          //rootStore.basketStore.getCount
    }

    public set setCount(itemsArr: number) {     //пример изменения получение значения в сторе
        this.count = itemsArr;                  //rootStore.basketStore.setCount = 23
    }
}
