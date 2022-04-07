import React, {FC} from 'react';

interface IModalSettingUser_ExitPage {
  extClass?: string
}


/**
 * Страница выхода в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUser_ExitPage: FC<IModalSettingUser_ExitPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div>Exit Page</div>

  );
};

export default ModalSettingUser_ExitPage;