import React, {FC} from 'react';
import styles from './ModalSettingUser.module.scss'
import ModalWindow from '../../../0_Basic/ModalWindow/ModalWindow';

interface IModalSettingUser {
  extClass?: string
  isShow: boolean
  onClose: () => void
}


/**
 * Модальное окно настройки для текущего пользователя
 * @param props.extClass - дополнительный CSS класс
 * @param props.isShow - показ модального окна
 * @param props.onClose - функция для закрытия окна
 */
const ModalSettingUser: FC<IModalSettingUser> = (props) => {
  const {extClass = '', isShow, onClose} = props

  return (
    <ModalWindow click={onClose} isShow={isShow} log={{element: ModalSettingUser.name}}>
      <div className={`${styles.wrapper} ${extClass}`}>
        <div className={styles.head}>
          <div>титул</div>
          <div>кнопки</div>
        </div>
        <div className={styles.body}>
          <div className={styles.category}>
            <div>Объщее</div>
            <div>Настройки</div>
            <div>Безопасность</div>
            <div>Выход</div>
          </div>
          <div>
            <div>Настройки</div>
            <div>
              <div>Смена темы</div>
              <div>On Off</div>
            </div>
            <div>
              <div>Смена языка</div>
              <div>On Off</div>
            </div>
          </div>
        </div>
      </div>
    </ModalWindow>

  );
};

export default ModalSettingUser;