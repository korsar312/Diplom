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

  type TCurrencyIcon = {
    [key in TCurrency]: string
  }

  export const OCurrencyIcon: TCurrencyIcon = {
    DOLLAR: '$',
    RUBLE: '₽'
  }

}
