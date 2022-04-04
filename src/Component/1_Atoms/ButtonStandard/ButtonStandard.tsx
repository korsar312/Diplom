import React, {FC} from 'react';
import styles from './ButtonStandard.module.scss'
import {rest} from "../../../Services/Rest/RestApi/RestApi.interface";
import Text, {TTextStyle} from "../../0_Basic/Text/Text";
import {language} from "../../../Services/Stores/Language/Language.interface";
import services from "../../../Services/Services";

interface IButtonStandard {
  click: () => void
  title?: language.ELanguageKey
  color?: "red" | "black" | "blue" | "skyBlue"
  textStyle?: TTextStyle
  extClass?: string
  iconLeft?: TIcon
  iconRight?: TIcon
  isNoPadding?: boolean
  isDisabled?: boolean
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
 * @param props.textStyle - стиль текста кнопки
 * @param props.extClass - дополнительный CSS класс
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой стороны
 * @param props.isNoPadding - убрать внутренний отступ
 * @param props.disabled - неактивность кнопки
 * @param props.log - логирование
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
  const {
    click,
    title,
    color,
    textStyle,
    extClass = '',
    iconLeft,
    iconRight,
    isNoPadding,
    isDisabled,
    log
  } = props

  function clickHandler() {
    services.rest.RestApi.logAction({
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
      type={"button"}
      disabled={isDisabled}
      onClick={clickHandler}
      className={`
        ${styles.wrapper} 
        ${color ? styles[`color_${color}`] : ''} 
        ${extClass} ${isNoPadding ? styles.noPadding : ''}
      `}
    >
      {iconLeft?.icon && <span className={iconLeft.extClass || ''}>{iconLeft.icon}</span>}
      {title && <Text
          userStyle={textStyle}
          extClass={styles.text}
          text={title}
      />}
      {iconRight?.icon && <span className={iconRight.extClass || ''}>{iconRight.icon}</span>}
    </button>
  );
};

export default ButtonStandard;
