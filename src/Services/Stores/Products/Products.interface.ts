export namespace product {

  export type TProduct = {
    id: string
    name: string
    price: TPrice[]
    conventionalUnit: string | number
    company: string[]
    analogue: string[]
    industry: string
    property?: TProperty[]
  }


  type TProperty = {
    [key in string]: string
  }

  type TPrice = {
    price: number,
    currency: TCurrency
  }

  export enum TCurrency {
    RUBLE = 'RUBLE',
    DOLLAR = 'DOLLAR'
  }

  export const OCurrencyIcon: TCurrencyIcon = {
    DOLLAR: '$',
    RUBLE: '₽'
  }

  type TCurrencyIcon = {
    [key in TCurrency]: string
  }
}
