import React, {FC} from 'react';
import styles from './ModalWindow.module.scss'

interface IModalWindow {
  isShow: boolean
  extClass?: string
  children: JSX.Element
}

/**
 * Модальное окно
 * @param props.isShow - показ модального окна
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое модального окна
 */
const ModalWindow: FC<IModalWindow> = (props) => {
  const {isShow, extClass = '', children} = props

  return (
    <div className={`
      ${styles.wrapper} 
      ${extClass} 
      ${isShow ? styles.windowOpen : styles.windowClose}`}
    >
      {children}
    </div>
  );
};

export default ModalWindow;