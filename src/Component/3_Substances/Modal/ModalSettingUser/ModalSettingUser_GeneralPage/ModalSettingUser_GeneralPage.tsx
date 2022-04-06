import React, {FC} from 'react';

interface IModalSettingUser_GeneralPage {
  extClass?: string
}


/**
 * Страница основный настроек в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUser_GeneralPage: FC<IModalSettingUser_GeneralPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div></div>

  );
};

export default ModalSettingUser_GeneralPage;