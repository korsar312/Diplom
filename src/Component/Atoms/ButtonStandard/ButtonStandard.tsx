import React, {FC} from 'react';
import styles from './ButtonStandard.module.scss'
import RestApi from "../../../Services/RestApi/RestApi";
import {rest} from "../../../Services/RestApi/RestApi.interface";

interface IButtonStandard {
  click: () => void
  title?: string
  color?: "red" | "white" | "blue" | "skyBlue"
  extClass?: string
  iconLeft?: TIcon
  iconRight?: TIcon
  isNoPadding?: boolean
  log?: rest.TlogAction
}

type TIcon = {
  icon: JSX.Element | undefined
  extClass?: string
}

/**
 * Основная кнопка
 * @param props.click - функция onClick по кнопке
 * @param props.title - отображаемое имя кнопки
 * @param props.color - цвет кнопки
 * @param props.extClass - дополнительный CSS класс
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой стороны
 * @param props.isNoPadding - убрать внутренний отступ
 * @param props.log - логирование
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
  const {click, title, color, extClass = '', iconLeft, iconRight, isNoPadding, log} = props

  function clickHandler() {
    RestApi.logAction({
      element: ButtonStandard.name,
      action: 'Нажатие',
      data: props,
      comment: `кнопка ${title || (iconLeft || iconRight)?.icon?.type.render.name || 'не определена'}`,
      ...log,
    })
    click()
  }

  return (
    <button
      onClick={clickHandler}
      className={`${styles.wrapper} ${color ? styles[`color_${color}`] : ''} ${extClass} ${isNoPadding ? styles.noPadding : ''}`}
    >
      {iconLeft?.icon && <span className={iconLeft.extClass || ''}>{iconLeft.icon}</span>}
      <span className={styles.text}>{title}</span>
      {iconRight?.icon && <span className={iconRight.extClass || ''}>{iconRight.icon}</span>}
    </button>
  );
};

export default ButtonStandard;