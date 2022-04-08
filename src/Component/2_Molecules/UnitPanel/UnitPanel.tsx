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
  image?: string | JSX.Element
  topText: string | language.ELanguageKey
  middleText?: string | language.ELanguageKey
  bottomText?: string | language.ELanguageKey
  extClass?: string
}

/**
 * Панель чего-либо
 * @param props.click - функция onClick
 * @param props.image - иконка слева
 * @param props.topText - текст сверху
 * @param props.middleText - текст по середине
 * @param props.bottomText - текст снизу
 * @param props.extClass - дополнительный CSS класс
 */
const UnitPanel: FC<IUnitPanel> = (props) => {
  const {click, image, topText, middleText, bottomText, extClass = ''} = props

  return (
    <div className={`${styles.wrapper} ${extClass}`}>
      <div className={styles.image}>
        <Avatar>
          {image ?
            (typeof image === 'string' ?
              <img src={image} alt='Аватар'/> :
              image) :
            <IconAvatar/>}
        </Avatar>
      </div>

      <div className={styles.infoWrapper}>

        <div>
          <Text
            userStyle={"normal_small"}
            text={topText}
          />
        </div>

        {middleText && (
          <div>
            <Text
              userStyle={"light_extraSmall"}
              userColor={"grey"}
              text={middleText}
            />
          </div>
        )}

        {bottomText && (
          <div>
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