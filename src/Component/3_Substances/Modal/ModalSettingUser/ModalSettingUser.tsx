import React, {FC, useState} from 'react';
import styles from './ModalSettingUser.module.scss'
import ModalWindow from '../../../0_Basic/ModalWindow/ModalWindow';
import {ModalSettingUserList} from "./ModalSettingUser.list";
import UnitPanel from "../../../2_Molecules/UnitPanel/UnitPanel";
import {ReactComponent as IconSetting} from "./../../../../Assets/icon/icon_setting.svg";

interface IModalSettingUser {
  extClass?: string
  isShow: boolean
  onClose: () => void
}

const settingList = ModalSettingUserList

/**
 * Модальное окно настройки для текущего пользователя
 * @param props.extClass - дополнительный CSS класс
 * @param props.isShow - показ модального окна
 * @param props.onClose - функция для закрытия окна
 */
const ModalSettingUser: FC<IModalSettingUser> = (props) => {
  const {extClass = '', isShow, onClose} = props

  const [currentSetting, setCurrentSetting] = useState(settingList[0])


  return (
    <ModalWindow click={onClose} isShow={isShow} log={{element: ModalSettingUser.name}}>
      <div className={`${styles.wrapper} ${extClass}`}>
        <div className={styles.head}>
          <div>титул</div>
          <div>кнопки</div>
        </div>
        <div className={styles.body}>
          <div className={styles.category}>
            {settingList.map(setting => (
              <UnitPanel
                click={() => setCurrentSetting(setting)}
                image={<IconSetting/>}
                topText={setting.title}
                middleText={setting.title}
              />
            ))}
          </div>
          <div>
            {currentSetting.content}
          </div>
        </div>
      </div>
    </ModalWindow>

  );
};

export default ModalSettingUser;