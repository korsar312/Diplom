import React, {FC} from 'react';

interface IModalSettingUserSecurityPage {
  extClass?: string
}


/**
 * Страница настроек безопасности в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserSecurityPage: FC<IModalSettingUserSecurityPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div>Security Page</div>

  );
};

export default ModalSettingUserSecurityPage;