import React, {FC} from 'react';

interface IModalSettingUser_SecurityPage {
  extClass?: string
}


/**
 * Страница настроек безопасности в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUser_SecurityPage: FC<IModalSettingUser_SecurityPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div>Security Page</div>

  );
};

export default ModalSettingUser_SecurityPage;