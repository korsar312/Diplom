import React, {FC} from 'react';

interface IModalSettingUser_SettingPage {
  extClass?: string
}


/**
 * Страница выхода в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUser_SettingPage: FC<IModalSettingUser_SettingPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div></div>

  );
};

export default ModalSettingUser_SettingPage;