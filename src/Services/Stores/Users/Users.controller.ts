import {makeAutoObservable} from "mobx";
import {users} from "./Users.interface";
import services from "../../Services";

export class UsersController {
  private currentUser: users.TPerson | null = null

  private readonly rootStore: typeof services.store;

  constructor(rootStore: typeof services.store) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  /**
   * Возвращает текущего пользователя
   */
  public get getCurrentUser() {
    return this.currentUser
  }

  /**
   * Возвращает true при входе пользователя или гостя
   */
  public get isEntered() {
    return Boolean(this.currentUser);
  }

  /**
   * Возвращает true при входе пользователя
   */
  public get isAuthorized() {
    return Boolean(this.currentUser?.id);
  }

  /**
   * Возвращает id компании к которой принадлежит
   */
  public get getIdMyCompany() {
    return this.currentUser?.accessory
  }

  /**
   * Устанавливает текущего пользователя
   * @params person - пользователь
   */
  public set setCurrentUser(person: users.TPerson | null) {
    this.currentUser = person
  }
}
