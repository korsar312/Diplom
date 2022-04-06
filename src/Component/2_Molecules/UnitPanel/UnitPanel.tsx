import React, {FC} from 'react';
import styles from "./UnitPanel.module.scss"
import {ReactComponent as IconAvatar} from "./../../../Assets/icon/icon_avatar.svg";
import {ReactComponent as IconSetting} from "./../../../Assets/icon/icon_setting.svg";
import ButtonStandard from "../../1_Atoms/ButtonStandard/ButtonStandard";
import Avatar from "../../1_Atoms/Avatar/Avatar";
import Text from "../../0_Basic/Text/Text";
import {language} from "../../../Services/Stores/Language/Language.interface";

interface IUnitPanel {
  click?: () => void
  image?: string
  topText: string | language.ELanguageKey
  middleText?: string | language.ELanguageKey
  bottomText?: string | language.ELanguageKey
}


/**
 * Панель чего-либо
 * @param props.click - функция onClick по панели
 * @param props.person - объект с данными человека
 */
const UnitPanel: FC<IUnitPanel> = (props) => {
  const {click, image, topText, middleText, bottomText} = props

  return (
    <div className={styles.wrapper}>
      <Avatar>
        {image ? <img className={styles.image} src={image} alt='Аватар'/> : <IconAvatar/>}
      </Avatar>

      <div className={styles.infoWrapper}>

        <div className={styles.topText}>
          <Text
            userStyle={"normal_small"}
            text={topText}
          />
        </div>

        {middleText && (
          <div className={styles.middleText}>
            <Text
              userStyle={"light_extraSmall"}
              userColor={"grey"}
              text={middleText}
            />
          </div>
        )}

        {bottomText && (
          <div className={styles.bottomText}>
            <Text
              userStyle={"light_extraSmall"}
              userColor={"green"}
              text={bottomText}
            />
          </div>
        )}
      </div>
      {click && <ButtonStandard
          isNoPadding={true}
          extClass={styles.btn}
          click={click}
          iconLeft={{icon: <IconSetting/>}}
          log={{element: UnitPanel.name}}/>}
    </div>
  );
};

export default UnitPanel;