import React, {FC, useState} from 'react';
import styles from './AsidePanel.module.scss'
import UnitPanel from "../../2_Molecules/UnitPanel/UnitPanel";
import SearchInput from "../../2_Molecules/SearchInput/SearchInput";
import AsidePanel_Logo from "./AsidePanel_Logo/AsidePanel_Logo";
import AsidePanel_Navigation from "./AsidePanel_Navigation/AsidePanel_Navigation";
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
  const person = services.store.usersStore.getCurrentUser

  const [isShowPanel, setIsShowPanel] = useState(true)

  function openModalSettingUser() {
    services.store.modalStore.setShowModal(modals.EModal.userSetting, true)
  }

  return (
    <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>

      <div className={styles.element}>
        <AsidePanel_Logo setShowPanel={setIsShowPanel} isShowPanel={isShowPanel}/>
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