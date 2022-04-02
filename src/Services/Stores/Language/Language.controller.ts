import {makeAutoObservable} from "mobx";
import type RootStore from "../Store";
import {language} from "./Language.interface";
import ELanguageType = language.ELanguageType;

export class LanguageController {
  private readonly language: language.TLanguage = {
    [language.ELanguageKey.METEOR]: {
      EN: 'Meteor',
      RU: 'Метеор',
    },
    [language.ELanguageKey.INVALID_PASSWORD]: {
      EN: 'Wrong login or password',
      RU: 'Неверный логин или пароль',
    },
    [language.ELanguageKey.ONLINE]: {
      EN: 'Online',
      RU: 'Онлайн',
    },
    [language.ELanguageKey.COPYRIGHT]: {
      EN: '©All rights reserved',
      RU: '©Все права защищены',
    },
    [language.ELanguageKey.SING_INING]: {
      EN: 'Sing in',
      RU: 'Войдите',
    },
    [language.ELanguageKey.SING_IN]: {
      EN: 'Sing in',
      RU: 'Вход',
    },
    [language.ELanguageKey.OR_CREATE_ACC]: {
      EN: 'Or create an Account',
      RU: 'Или создайте Аккаунт',
    },
    [language.ELanguageKey.LOGIN]: {
      EN: 'Login',
      RU: 'Логин',
    },
    [language.ELanguageKey.PASSWORD]: {
      EN: 'Password',
      RU: 'Пароль',
    },
    [language.ELanguageKey.PERSONNEL]: {
      EN: 'Personnel',
      RU: 'Персонал',
    },
    [language.ELanguageKey.COOPERATOR]: {
      EN: 'Cooperator',
      RU: 'Сотрудники',
    },
    [language.ELanguageKey.CHAT_WITH_COLLEAGUES]: {
      EN: 'Chat with colleagues',
      RU: 'Чат c коллегами',
    },
    [language.ELanguageKey.SUPPLIERS]: {
      EN: 'Suppliers',
      RU: 'Поставщики',
    },
    [language.ELanguageKey.COMPANY_INFORMATION]: {
      EN: 'Company information',
      RU: 'Информация о компаниях',
    },
    [language.ELanguageKey.CHAT_WITH_SUPPLIERS]: {
      EN: 'Chat with suppliers',
      RU: 'Чат с поставщиками',
    },
    [language.ELanguageKey.PRODUCTS]: {
      EN: 'Password',
      RU: 'Products',
    },
    [language.ELanguageKey.WAREHOUSE]: {
      EN: 'Warehouse',
      RU: 'Склад',
    },
    [language.ELanguageKey.SUPPLIES]: {
      EN: 'Supplies',
      RU: 'Поставки',
    },
    [language.ELanguageKey.REQUEST]: {
      EN: 'Request',
      RU: 'Заявки',
    },
    [language.ELanguageKey.REPORTS]: {
      EN: 'Reports',
      RU: 'Отчеты',
    },
    [language.ELanguageKey.ERROR]: {
      EN: 'Error',
      RU: 'Ошибка',
    },
    [language.ELanguageKey.SEARCH]: {
      EN: 'Search',
      RU: 'Поиск',
    },
    [language.ELanguageKey.FORGET_PASSWORD_DES_KA]: {
      EN: 'Forget password?',
      RU: 'Забыли пароль?',
    },
  }
  private currentLanguage: language.ELanguageType = ELanguageType.EN
  private readonly rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  public set setCurrentLanguage(language: language.ELanguageType) {
    this.currentLanguage = language
  }

  public getText(wordKey: language.ELanguageKey) {
    return this.language[wordKey][this.currentLanguage]
  }
}
