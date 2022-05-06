import React, { FC } from 'react';
import { language } from '../../../../../Services/System/Language/Language.interface';
import ModalSettingUserGeneralPage from './ModalSettingUserGeneralPage/ModalSettingUserGeneralPage';
import ModalSettingUserSettingPage from './ModalSettingUserSettingPage/ModalSettingUserSettingPage';
import ModalSettingUserSecurityPage from './ModalSettingUserSecurityPage/ModalSettingUserSecurityPage';
import ModalSettingUserExitPage from './ModalSettingUserExitPage/ModalSettingUserExitPage';
import { ReactComponent as IconLogout } from '../../../../../Assets/icon/icon_logout.svg';
import { ReactComponent as IconSecurity } from '../../../../../Assets/icon/icon_security.svg';
import { ReactComponent as IconTune } from '../../../../../Assets/icon/icon_tune.svg';
import { ReactComponent as IconHome } from '../../../../../Assets/icon/icon_home.svg';
import ModalSetting, { TModalSetting } from '../ModalSetting';

interface IModalSettingUser {
	extClass?: string;
	isShow: boolean;
	onClose: () => void;
}

/**
 * Модальное окно настройки юзера
 * @param props.extClass - дополнительный CSS класс
 * @param props.isShow - показ модального окна
 * @param props.onClose - функция для закрытия окна
 */
const ModalSettingUserList: TModalSetting[] = [
	{
		title: language.ELanguageSimpleWord.GENERAL,
		image: IconHome,
		description: language.ELanguageSimpleWord.BASIC_SETTINGS,
		content: <ModalSettingUserGeneralPage />,
	},
	{
		title: language.ELanguageSimpleWord.SETTINGS,
		image: IconTune,
		description: language.ELanguageSimpleWord.ADVANCED_SETTINGS,
		content: <ModalSettingUserSettingPage />,
	},
	{
		title: language.ELanguageSimpleWord.SECURITY,
		image: IconSecurity,
		description: language.ELanguageSimpleWord.ACCOUNT_SECURITY_SETTINGS,
		content: <ModalSettingUserSecurityPage />,
	},
	{
		title: language.ELanguageSimpleWord.EXIT,
		image: IconLogout,
		description: language.ELanguageSimpleWord.LOGOUT_OPTIONS,
		content: <ModalSettingUserExitPage />,
	},
];

/**
 * Модальное окно настройки для текущего пользователя
 * @param props.extClass - дополнительный CSS класс
 * @param props.isShow - показ модального окна
 * @param props.onClose - функция для закрытия окна
 */
const ModalSettingUser: FC<IModalSettingUser> = (props) => {
	const { extClass = '', isShow, onClose } = props;

	return (
		<ModalSetting
			extClass={extClass}
			title={language.ELanguageSimpleWord.USER_SETTINGS}
			isShow={isShow}
			onClose={onClose}
			settingList={ModalSettingUserList}
		/>
	);
};

export default ModalSettingUser;
