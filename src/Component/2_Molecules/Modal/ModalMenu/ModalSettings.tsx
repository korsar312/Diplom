import React, {FC} from 'react';
import ModalWindow from "../../../1_Atoms/ModalWindow/ModalWindow";

interface IModalUserSettings {
  isShow: boolean
  extClass?: string
}

/**
 * Модальное окно
 * @param props.isShow - показ модального окна
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое модального окна
 */
const ModalUserSettings: FC<IModalUserSettings> = (props) => {
  const {isShow} = props

  return (
    <ModalWindow isShow={isShow}>
      <></>
    </ModalWindow>
  );
};

export default ModalUserSettings;