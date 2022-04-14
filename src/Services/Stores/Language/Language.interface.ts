export namespace language {

  export type TLanguage = {
    [key in ELanguageKey]: TWord
  }

  type TWord = {
    [key in ELanguageType]: string
  }

  export enum ELanguageKey {
    CHAT_WITH_COLLEAGUES = 'CHAT_WITH_COLLEAGUES',
    CHAT_WITH_SUPPLIERS = 'CHAT_WITH_SUPPLIERS',
    CONVENTIONAL_UNIT = 'CONVENTIONAL_UNIT',
    COOPERATOR = 'COOPERATOR',
    COPYRIGHT = 'COPYRIGHT',
    EXIT = 'EXIT',
    FORGET_PASSWORD_DES_KA = 'FORGET_PASSWORD_DES_KA',
    GENERAL = 'GENERAL',
    INVALID_PASSWORD = 'INVALID_PASSWORD',
    LOGIN = 'LOGIN',
    METEOR = 'METEOR',
    ONLINE = 'ONLINE',
    OR_CREATE_ACC = 'OR_CREATE_ACC',
    PASSWORD = 'PASSWORD',
    PERSONNEL = 'PERSONNEL',
    PRICE = 'PRICE',
    PRODUCTS = 'PRODUCTS',
    PRODUCTS_SUPPLIERS = 'PRODUCTS_SUPPLIERS',
    REPORTS = 'REPORTS',
    REQUEST = 'REQUEST',
    SEARCH = 'SEARCH',
    SECURITY = 'SECURITY',
    SETTINGS = 'SETTINGS',
    SING_IN = 'SING_IN',
    SUPPLIES = 'SUPPLIES',
    WAREHOUSE = 'WAREHOUSE',
    SING_INING = 'SING_INING',
    BASIC_SETTINGS = 'BASIC_SETTINGS',
    ADVANCED_SETTINGS = 'ADVANCED_SETTINGS',
    ACCOUNT_SECURITY_SETTINGS = 'ACCOUNT_SECURITY_SETTINGS',
    LOGOUT_OPTIONS = 'LOGOUT_OPTIONS',
    USER_SETTINGS = 'USER_SETTINGS',
    ENABLE_LIGHT_THEME = 'ENABLE_LIGHT_THEME',
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
    MY_COMPANY = 'MY_COMPANY',
    MANAGEMENT = 'MANAGEMENT',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    COMPANIES = 'COMPANIES',
    COMPANY = 'COMPANY',
  }

  export enum ELanguageType {
    RU = 'RU',
    EN = 'EN'
  }
}
