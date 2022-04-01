import React, {FC, useState} from 'react';
import styles from './AsidePanel.module.scss'
import UserPanel from "../../Molecules/UserPanel/UserPanel";
import SearchInput from "../../Molecules/SearchInput/SearchInput";
import AsidePanel_Logo from "./AsidePanel_Logo/AsidePanel_Logo";
import AsidePanel_Navigation from "./AsidePanel_Navigation/AsidePanel_Navigation";
import rootStore from "../../../Services/Stores/Store";
import {setting} from "../../../Services/Stores/Settings/Setting.interface";

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
    rootStore.settingStore.setTheme = rootStore.settingStore.isLightTheme ? setting.theme.DARK : setting.theme.LIGHT
  }

  return (
    <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>

      <div className={styles.element}>
        <AsidePanel_Logo setShowPanel={setIsShowPanel} isShowPanel={isShowPanel}/>
      </div>

      <hr className={styles.line}/>

      <div className={styles.element}>
        <UserPanel click={switchTheme}/>
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