import React, {FC, useState} from 'react';
import styles from './ModalSetting.module.scss'
import ModalWindow from '../../../0_Basic/ModalWindow/ModalWindow';
import UnitPanel from "../../../2_Molecules/UnitPanel/UnitPanel";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import Text from "../../../0_Basic/Text/Text";
import {language} from "../../../../Services/Stores/Language/Language.interface";

interface IModalSetting {
  extClass?: string
  isShow: boolean
  onClose?: () => void
  settingList: TModalSetting[]
  title: language.ELanguageKey
}

export type TModalSetting = {
  title: language.ELanguageKey
  image: JSX.Element
  description: language.ELanguageKey
  content: JSX.Element
}

/**
 * Модальное окно настройки
 * @param props.extClass - дополнительный CSS класс
 * @param props.isShow - показ модального окна
 * @param props.onClose - функция для закрытия окна
 * @param props.settingList - объект для рендера
 * @param props.title - имя окна настроек
 */
const ModalSetting: FC<IModalSetting> = (props) => {
  const {extClass = '', isShow, onClose, settingList, title} = props

  const [currentSetting, setCurrentSetting] = useState(settingList[0])

  return (
    <ModalWindow click={onClose} isShow={isShow} log={{element: ModalSetting.name}}>
      <div className={`${styles.wrapper} ${extClass}`}>

        <div className={styles.head}>
          <Text text={title} userStyle={'fat_big'} userColor={'grey'}/>
        </div>

        <div className={styles.body}>
          <div className={styles.category}>
            {settingList.map(setting => (
              <ButtonStandard
                key={setting.title}
                click={() => setCurrentSetting(setting)}
                isNoPadding={true}
                color={currentSetting === setting ? 'grey' : undefined}
                isHover={true}
                log={{element: ModalSetting.name, comment: `Кнопка ${setting.title}`}}
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

export default ModalSetting;