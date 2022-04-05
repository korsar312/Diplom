import {makeAutoObservable} from "mobx";
import {users} from "./Users.interface";
import services from "../../Services";

export class UsersController {
  private currentUser: users.TPerson | null = null
  private company: users.TCompany | null = null

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
   * Возвращает true при входе пользователя (даже без логина)
   */
  public get isEntered() {
    return Boolean(this.currentUser);
  }

  /**
   * Устанавливает текущего пользователя
   * @params person - пользователь
   */
  public set setCurrentUser(person: users.TPerson) {
    this.currentUser = person
  }
}
