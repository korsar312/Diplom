import React from "react";
import ModalSettingUser_GeneralPage from "./ModalSettingUser_GeneralPage/ModalSettingUser_GeneralPage";
import ModalSettingUser_SecurityPage from "./ModalSettingUser_SecurityPage/ModalSettingUser_SecurityPage";
import ModalSettingUser_SettingPage from "./ModalSettingUser_SettingPage/ModalSettingUser_SettingPage";
import ModalSettingUser_ExitPage from "./ModalSettingUser_ExitPage/ModalSettingUser_ExitPage";
import {language} from "../../../../Services/Stores/Language/Language.interface";

export const ModalSettingUserList: TModalSettingUserList[] = [
  {
    title: language.ELanguageKey.GENERAL,
    image: <></>,
    description: language.ELanguageKey.GENERAL,
    content: <ModalSettingUser_GeneralPage/>
  },
  {
    title: language.ELanguageKey.SETTINGS,
    image: <></>,
    description: language.ELanguageKey.GENERAL,
    content: <ModalSettingUser_SettingPage/>
  },
  {
    title: language.ELanguageKey.SECURITY,
    image: <></>,
    description: language.ELanguageKey.GENERAL,
    content: <ModalSettingUser_SecurityPage/>
  },
  {
    title: language.ELanguageKey.EXIT,
    image: <></>,
    description: language.ELanguageKey.GENERAL,
    content: <ModalSettingUser_ExitPage/>
  },
]

type TModalSettingUserList = {
  title: language.ELanguageKey
  image: JSX.Element
  description: language.ELanguageKey
  content: JSX.Element
}
