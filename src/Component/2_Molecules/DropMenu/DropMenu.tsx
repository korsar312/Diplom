import React, {FC, useState} from 'react';
import styles from './DropMenu.module.scss';
import ButtonStandard from "../../1_Atoms/ButtonStandard/ButtonStandard";
import {ReactComponent as IconArrow} from "../../../Assets/icon/icon_arrow.svg";
import {language} from "../../../Services/Stores/Language/Language.interface";

interface iDropMenu {
  title: language.ELanguageKey | string | number
  children: JSX.Element
  iconLeft?: JSX.Element
  extClass?: string
  isPaddingOn?: boolean
  isAbsolute?: boolean
}

/**
 * Стандартный Drop Button
 * @param props.title - отображаемое имя кнопки
 * @param props.children - скрываемая часть, основной контент
 * @param props.iconLeft - иконка для левой стороны
 * @param props.extClass - дополнительный CSS класс
 * @param props.isPaddingOn - Нужен ли отступ
 * @param props.isAbsolute - влияет ли дочерний элемени на css поток
 */
const DropMenu: FC<iDropMenu> = (props) => {
  const {title, children, iconLeft, extClass = '', isPaddingOn, isAbsolute} = props

  const [isShowListBtn, setIsShowListBtn] = useState(false)

  return (
    <div className={`${styles.wrapper} ${extClass}`}>
      <ButtonStandard
        color={isShowListBtn ? "blue" : undefined}
        title={title}
        click={() => setIsShowListBtn(val => !val)}
        log={{element: DropMenu.name}}
        iconRight={{
          icon: <IconArrow/>,
          extClass: `${styles.arrow} ${isShowListBtn ? styles.panelOn : ''}`
        }}
        iconLeft={{icon: iconLeft}}
        extClass={`${styles.btn} ${isShowListBtn ? styles.btnOpen : ''}`}
        textStyle={"light_small"}
      />
      <div
        className={`
          ${styles.motherWrapper} 
          ${isShowListBtn ? styles.isOpen : styles.isClose}
          ${isPaddingOn ? styles.motherPadding : ''}
          ${isAbsolute ? styles.motherWrapperAbsolute : ''}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default DropMenu;