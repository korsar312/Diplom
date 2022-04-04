import React, {FC, useState} from 'react';
import styles from './AsidePanel.module.scss'
import UserPanel from "../../2_Molecules/UserPanel/UserPanel";
import SearchInput from "../../2_Molecules/SearchInput/SearchInput";
import AsidePanel_Logo from "./AsidePanel_Logo/AsidePanel_Logo";
import AsidePanel_Navigation from "./AsidePanel_Navigation/AsidePanel_Navigation";
import {setting} from "../../../Services/Stores/Settings/Setting.interface";
import services from "../../../Services/Services";

interface IAsidePanel {
  extClass?: string
}

/**
 * Боковая панель
 * @param props.extClass - дополнительный CSS класс
 */
const AsidePanel: FC<IAsidePanel> = (props) => {
  const {extClass} = props

  const [isShowPanel, setIsShowPanel] = useState(true)

  const switchTheme = () => {
    services.store.settingStore.setTheme = services.store.settingStore.isLightTheme ? setting.theme.DARK : setting.theme.LIGHT
  }

  return (
    <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>

      <div className={styles.element}>
        <AsidePanel_Logo setShowPanel={setIsShowPanel} isShowPanel={isShowPanel}/>
      </div>

      <hr className={styles.line}/>

      <div className={styles.element}>
        <UserPanel person={services.store.usersStore.getCurrentUser} click={switchTheme}/>
      </div>

      <hr className={styles.line}/>

      <div className={styles.element}>
        <SearchInput extClass={styles.search} callback={(value) => ''}/>
      </div>

      <hr className={styles.line}/>

      <nav className={styles.elementHalfPadding}>
        <AsidePanel_Navigation/>
      </nav>

    </aside>
  );
};

export default AsidePanel;