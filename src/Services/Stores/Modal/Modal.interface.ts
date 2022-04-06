export namespace modals {

  export type TModal = {
    [key in EModal]: boolean
  }

  export enum EModal {
    userSetting = "userSetting"
  }

}
