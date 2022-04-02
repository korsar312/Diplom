import {makeAutoObservable} from "mobx";
import type RootStore from "../Store";
import {users} from "./Users.interface";

export class UsersController {
  private currentUser: users.TPerson | null = null

  private readonly rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public get getCurrentUser() {
    return this.currentUser
  }

  public get isAuthorized() {
    return Boolean(this.currentUser);
  }

  public set setCurrentUser(person: users.TPerson) {
    this.currentUser = person
  }
}
