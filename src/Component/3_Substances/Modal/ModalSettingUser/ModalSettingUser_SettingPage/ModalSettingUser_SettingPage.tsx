import React, {FC} from 'react';
import Switcher from "../../../../1_Atoms/Switcher/Switcher";
import Text from "../../../../0_Basic/Text/Text";
import services from "../../../../../Services/Services";
import {setting} from "../../../../../Services/Stores/Settings/Setting.interface";
import styles from './ModalSettingUser_SettingPage.module.scss'

interface IModalSettingUser_SettingPage {
  extClass?: string
}


/**
 * Страница выхода в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUser_SettingPage: FC<IModalSettingUser_SettingPage> = (props) => {
  const {extClass = '',} = props

  const theme = services.store.settingStore.isLightTheme

  function switchTheme(val: boolean) {
    services.store.settingStore.setTheme = val ? setting.theme.LIGHT : setting.theme.DARK
  }

  return (
    <div className={`${styles.wrapper} ${extClass}`}>
      <Text text={'Темная тема'}/><Switcher click={switchTheme} defaultValue={theme}/>
    </div>

  );
};

export default ModalSettingUser_SettingPage;