import React, {FC, useState} from 'react';
import styles from './ModalSettingUser.module.scss'
import ModalWindow from '../../../0_Basic/ModalWindow/ModalWindow';
import {ModalSettingUserList} from "./ModalSettingUser.list";
import UnitPanel from "../../../2_Molecules/UnitPanel/UnitPanel";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import Text from "../../../0_Basic/Text/Text";
import {language} from "../../../../Services/Stores/Language/Language.interface";

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
          <Text text={language.ELanguageKey.USER_SETTINGS} userStyle={'fat_big'} userColor={'grey'}/>
        </div>

        <div className={styles.body}>
          <div className={styles.category}>
            {settingList.map(setting => (
              <ButtonStandard
                key={setting.title}
                click={() => setCurrentSetting(setting)}
                isNoPadding={true}
                color={currentSetting === setting ? 'grey' : undefined}
                log={{element: ModalSettingUser.name, comment: `Кнопка ${setting.title}`}}
              >
                <UnitPanel
                  image={setting.image}
                  topText={setting.title}
                  middleText={setting.description}
                  extClass={styles.unitPanel}
                />
              </ButtonStandard>
            ))}
          </div>
          <div className={styles.content}>
            {currentSetting.content}
          </div>
        </div>
      </div>
    </ModalWindow>

  );
};

export default ModalSettingUser;