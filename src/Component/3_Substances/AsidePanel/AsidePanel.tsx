import React, {FC, useState} from 'react';
import styles from './AsidePanel.module.scss'
import UnitPanel from "../../2_Molecules/UnitPanel/UnitPanel";
import SearchInput from "../../2_Molecules/SearchInput/SearchInput";
import AsidePanelLogo from "./AsidePanelLogo/AsidePanelLogo";
import AsidePanelNavigation from "./AsidePanelNavigation/AsidePanelNavigation";
import services from "../../../Services/Services";
import {modals} from "../../../Services/Stores/Modal/Modal.interface";
import {language} from "../../../Services/Stores/Language/Language.interface";


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
  const [filterLink, setFilterLink] = useState('')

  const person = services.store.usersStore.getCurrentUser

  function openModalSettingUser() {
    services.store.modalStore.setShowModal(modals.EModal.userSetting, true)
  }

  return (
    <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>

      <div className={styles.element}>
        <AsidePanelLogo click={() => setIsShowPanel(val => !val)} isShowPanel={isShowPanel}/>
      </div>

      <hr className={styles.line}/>

      <div className={styles.element}>
        <UnitPanel
          click={openModalSettingUser}
          image={person?.image}
          topText={person ? `${person.name} ${person.surname}` : "Гость"}
          middleText={person?.position}
          bottomText={person?.isOnline ? language.ELanguageKey.ONLINE : undefined}
        />
      </div>

      <hr className={styles.line}/>

      <div className={styles.element}>
        <SearchInput extClass={styles.search} callback={(value) => setFilterLink(value)}/>
      </div>

      <hr className={styles.line}/>

      <nav className={styles.elementHalfPadding}>
        <AsidePanelNavigation filter={filterLink}/>
      </nav>

    </aside>
  );
};

export default AsidePanel;