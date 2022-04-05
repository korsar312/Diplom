export namespace users {

  export type TPerson = {
    id: string
    name: string
    surname: string
    position?: string
    isOnline: boolean
    image?: any
    accessory: string
  }

  export type TCompany = {
    id: string
    name: string
    subtitle?: string
    industry: string[]  //не могу передать объект, так как это будет цикл (компания -> продукт -> компания -> ...)
    products: string[]
    requisites: TRequisites
    description: string
    personal: string[]
  }

  type TRequisites = {
    address: TAddressCompany
    other: TRequisitesOther
  }

  type TAddressCompany = {
    index: number
    country: string
    city: string
    other: string
  }

  type TRequisitesOther = {
    [key in string]: string
  }

}
