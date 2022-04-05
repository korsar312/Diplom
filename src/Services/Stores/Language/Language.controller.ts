import {makeAutoObservable} from "mobx";
import {language} from "./Language.interface";
import services from "../../Services";
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
    [language.ELanguageKey.PRODUCTS_SUPPLIERS]: {
      EN: 'Product suppliers',
      RU: 'Продукция поставщиков',
    },
    [language.ELanguageKey.COMPANY_PRODUCTS]: {
      EN: 'Company products',
      RU: 'Продукция компании',
    },
    [language.ELanguageKey.CHAT_WITH_SUPPLIERS]: {
      EN: 'Chat with suppliers',
      RU: 'Чат с поставщиками',
    },
    [language.ELanguageKey.PRODUCTS]: {
      EN: 'Products',
      RU: 'Продукция',
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
    [language.ELanguageKey.PRICE]: {
      EN: 'Price',
      RU: 'Цена',
    },
    [language.ELanguageKey.CONVENTIONAL_UNIT]: {
      EN: 'Conventional unit',
      RU: 'Условные единицы',
    },
    [language.ELanguageKey.STATUS]: {
      EN: 'Status',
      RU: 'Статус',
    },
    [language.ELanguageKey.ACTION]: {
      EN: 'Action',
      RU: 'Действие',
    },
  }
  private currentLanguage: language.ELanguageType = ELanguageType.EN
  private readonly rootStore: typeof services.store;

  constructor(rootStore: typeof services.store) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  /**
   * Устанавливает языковую модель
   * @params language - язык
   */
  public set setCurrentLanguage(language: language.ELanguageType) {
    this.currentLanguage = language
  }

  /**
   * Возвращает текущую языковую модель
   */
  public get getCurrentLanguage() {
    return this.currentLanguage
  }

  /**
   * Возвращает выбранное предложение для текущей языковой модели
   * @params wordKey - выбранное предложение
   */
  public getText(wordKey: language.ELanguageKey) {
    return this.language[wordKey][this.currentLanguage]
  }
}
