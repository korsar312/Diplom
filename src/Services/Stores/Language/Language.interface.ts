export namespace language {

  export type TLanguage = {
    [key in ELanguageKey]: TWord
  }

  type TWord = {
    [key in ELanguageType]: string
  }

  export enum ELanguageKey {
    SING_INING = 'SING_INING',
    ONLINE = 'ONLINE',
    INVALID_PASSWORD = 'INVALID_PASSWORD',
    SING_IN = 'SING_IN',
    METEOR = 'METEOR',
    LOGIN = 'LOGIN',
    PASSWORD = 'PASSWORD',
    OR_CREATE_ACC = 'OR_CREATE_ACC',
    PERSONNEL = 'PERSONNEL',
    COOPERATOR = 'COOPERATOR',
    CHAT_WITH_COLLEAGUES = 'CHAT_WITH_COLLEAGUES',
    SUPPLIERS = 'SUPPLIERS',
    PRODUCTS_SUPPLIERS = 'PRODUCTS_SUPPLIERS',
    CHAT_WITH_SUPPLIERS = 'CHAT_WITH_SUPPLIERS',
    PRODUCTS = 'PRODUCTS',
    COMPANY_PRODUCTS = 'COMPANY_PRODUCTS',
    WAREHOUSE = 'WAREHOUSE',
    SUPPLIES = 'SUPPLIES',
    REQUEST = 'REQUEST',
    REPORTS = 'REPORTS',
    ERROR = 'ERROR',
    SEARCH = 'SEARCH',
    COPYRIGHT = 'COPYRIGHT',
    FORGET_PASSWORD_DES_KA = 'FORGET_PASSWORD_DES_KA',
  }

  export enum ELanguageType {
    RU = 'RU',
    EN = 'EN'
  }
}
