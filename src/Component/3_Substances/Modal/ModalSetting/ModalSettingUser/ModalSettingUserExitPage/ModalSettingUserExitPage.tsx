import React, {FC} from 'react';

interface IModalSettingUserExitPage {
  extClass?: string
}


/**
 * Страница вариантов выхода в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserExitPage: FC<IModalSettingUserExitPage> = (props) => {
  const {extClass = '',} = props

  return (
    <div>Exit Page</div>

  );
};

export default ModalSettingUserExitPage;