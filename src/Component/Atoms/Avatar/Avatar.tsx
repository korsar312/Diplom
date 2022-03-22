import styles from './Avatar.module.scss'
import React, {FC} from "react";
import RestApi from "../../../Services/RestApi/RestApi";
import {rest} from "../../../Services/RestApi/RestApi.interface";

interface IAvatar {
  click?: () => void
  log?: rest.TlogAction
  extClass?: string
  children?: JSX.Element
}

/**
 * Портрет
 * @param props.click - функция onClick по кнопке
 * @param props.log - логирование
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - картинка в JSX
 */
const Avatar: FC<IAvatar> = (props) => {
  const {click, log, extClass = '', children} = props

  function clickHandler() {
    if (!click) return

    RestApi.logAction({
      element: Avatar.name,
      action: 'Нажатие',
      data: props,
      ...log,
    })

    click()
  }

  return (
    <div className={`${styles.wrapper} ${extClass}`} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default Avatar;