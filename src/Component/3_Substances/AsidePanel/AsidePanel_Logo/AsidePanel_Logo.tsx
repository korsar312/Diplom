import React, {FC} from 'react';
import styles from "./AsidePanel_Logo.module.scss";
import {ReactComponent as IconLogo} from "../../../../Assets/icon/icon_logo.svg";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import {ReactComponent as IconShift} from "../../../../Assets/icon/icon_shift.svg";
import Text from "../../../0_Basic/Text/Text";
import {language} from "../../../../Services/Stores/Language/Language.interface";
import services from "../../../../Services/Services";

interface IAsidePanel_Logo {
  setShowPanel: (isShow: boolean) => void
  isShowPanel: boolean
}

/**
 * Лого для боковой панели
 * @param props.ShowPanel - функция смены скрытности панели
 * @param props.isShowPanel - статус скрытности боковой панели
 */
const AsidePanel_Logo: FC<IAsidePanel_Logo> = (props) => {
  const {setShowPanel, isShowPanel} = props

  function changeLanguage() {
    services.store.languageStore.getCurrentLanguage === language.ELanguageType.RU ?
      services.store.languageStore.setCurrentLanguage = language.ELanguageType.EN :
      services.store.languageStore.setCurrentLanguage = language.ELanguageType.RU
  }

  return (
    <div className={styles.wrapper}>
      <figure
        onClick={changeLanguage}
        className={styles.logo}>
        <IconLogo/>
        <figcaption><Text userStyle={"fat_big"} text={language.ELanguageKey.METEOR}/></figcaption>
      </figure>
      <div className={`${styles.logoWrapperBtn} ${isShowPanel ? '' : styles.logoWrapperBtnOn}`}>
        <ButtonStandard
          click={() => setShowPanel(!isShowPanel)}
          isNoPadding={true}
          iconLeft={{icon: <IconShift/>}}
          log={{element: AsidePanel_Logo.name}}
        />
      </div>
    </div>
  );
};

export default AsidePanel_Logo;