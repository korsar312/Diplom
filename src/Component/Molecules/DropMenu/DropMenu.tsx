import React, {FC, useState} from 'react';
import styles from './DropMenu.module.scss';
import ButtonStandard from "../../Atoms/ButtonStandard/ButtonStandard";
import {ReactComponent as IconArrow} from "../../../Assets/icon/icon_arrow.svg";

interface iDropMenu {
  title: string
  children: JSX.Element
  iconLeft?: JSX.Element
  extClass?: string
  click?: () => void;
  isPaddingOn?: boolean
}

/**
 * Стандартный Drop Button с рекурсией (НЕ ИСПОЛЬЗУЕТСЯ!!)
 * @param props.title - отображаемое имя кнопки
 * @param props.children - скрываемая часть, основной контент
 * @param props.iconLeft - иконка для левой стороны
 * @param props.extClass - дополнительный CSS класс
 * @param props.click - действие при клике
 * @param props.isPaddingOn - Нужен ли отступ
 */
const DropMenu: FC<iDropMenu> = (props) => {
  const {title, children, iconLeft, extClass = '', isPaddingOn} = props

  const [isShowListBtn, setIsShowListBtn] = useState(false)

  return (
    <div className={`${styles.wrapper} ${extClass}`}>
      <ButtonStandard
        color={isShowListBtn ? "blue" : undefined}
        title={title}
        click={() => setIsShowListBtn(val => !val)}
        log={{element: DropMenu.name}}
        iconRight={<span className={`${styles.svgArrow} ${isShowListBtn ? '' : styles.btnOff}`}><IconArrow/></span>}
        iconLeft={iconLeft}
        extClass={styles.btn}
      />
      <div
        className={`
        ${styles.motherWrapper} 
        ${isShowListBtn ? styles.isOpen : styles.isClose}
        ${isPaddingOn ? styles.motherPadding : ''}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default DropMenu;