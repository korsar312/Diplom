export namespace product {

  export type TProduct = {
    id: string
    name: string
    price: number
    conventionalUnit: string | number
    company: string[]
    analogue: TProduct[]
    industry: string
    property?: TProperty[]
  }


  type TProperty = {
    [key in string]: string
  }

}
