import {makeAutoObservable} from "mobx";
import {companies} from "./Companies.interface";
import services from "../../Services";

export class CompaniesController {
  private company: companies.TCompaniesHashMap | null = null

  private readonly rootStore: typeof services.store;

  constructor(rootStore: typeof services.store) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  /**
   * Возвращает все копмании
   */
  public get isEntered() {
    return this.company
  }

  /**
   * Устанавливает список компаний
   * @params company - компании
   */
  public set setCurrentUser(company: companies.TCompaniesHashMap | null) {
    this.company = company
  }
}
