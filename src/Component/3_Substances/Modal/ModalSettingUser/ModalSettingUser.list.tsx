import React from "react";
import ModalSettingUser_GeneralPage from "./ModalSettingUser_GeneralPage/ModalSettingUser_GeneralPage";
import ModalSettingUser_SecurityPage from "./ModalSettingUser_SecurityPage/ModalSettingUser_SecurityPage";
import ModalSettingUser_SettingPage from "./ModalSettingUser_SettingPage/ModalSettingUser_SettingPage";
import ModalSettingUser_ExitPage from "./ModalSettingUser_ExitPage/ModalSettingUser_ExitPage";
import {language} from "../../../../Services/Stores/Language/Language.interface";
import {ReactComponent as IconLogout} from "../../../../Assets/icon/icon_logout.svg";
import {ReactComponent as IconSecurity} from "../../../../Assets/icon/icon_security.svg";
import {ReactComponent as IconTune} from "../../../../Assets/icon/icon_tune.svg";
import {ReactComponent as IconHome} from "../../../../Assets/icon/icon_home.svg";

export const ModalSettingUserList: TModalSettingUserList[] = [
  {
    title: language.ELanguageKey.GENERAL,
    image: <IconHome/>,
    description: language.ELanguageKey.BASIC_SETTINGS,
    content: <ModalSettingUser_GeneralPage/>
  },
  {
    title: language.ELanguageKey.SETTINGS,
    image: <IconTune/>,
    description: language.ELanguageKey.ADVANCED_SETTINGS,
    content: <ModalSettingUser_SettingPage/>
  },
  {
    title: language.ELanguageKey.SECURITY,
    image: <IconSecurity/>,
    description: language.ELanguageKey.ACCOUNT_SECURITY_SETTINGS,
    content: <ModalSettingUser_SecurityPage/>
  },
  {
    title: language.ELanguageKey.EXIT,
    image: <IconLogout/>,
    description: language.ELanguageKey.LOGOUT_OPTIONS,
    content: <ModalSettingUser_ExitPage/>
  },
]

type TModalSettingUserList = {
  title: language.ELanguageKey
  image: JSX.Element
  description: language.ELanguageKey
  content: JSX.Element
}
