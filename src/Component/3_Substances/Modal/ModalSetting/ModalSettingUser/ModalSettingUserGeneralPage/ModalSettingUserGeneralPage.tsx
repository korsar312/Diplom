import React, { FC } from 'react';
import { language } from '../../../../../../Logic/Modules/Language/Language.interface';
import styles from '../ModalSettingUserSettingPage/ModalSettingUserSettingPage.module.scss';
import Text from '../../../../../0_Basic/Text/Text';
import Switcher from '../../../../../1_Atoms/Switcher/Switcher';
import { setting } from '../../../../../../Logic/Modules/Settings/Setting.interface';
import modules from '../../../../../../Logic/Modules/Modules';

interface IModalSettingUserGeneralPage {
	extClass?: string;
}

/**
 * Страница основных настроек в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserGeneralPage: FC<IModalSettingUserGeneralPage> = (props) => {
	const { extClass = '' } = props;

	const theme = modules.settings.store.isLightTheme;

	function switchTheme(val: boolean) {
		modules.settings.store.setTheme = val ? setting.theme.LIGHT : setting.theme.DARK;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<Text userStyle={'fat_small'} text={language.ELanguageSimpleWord.ENABLE_LIGHT_THEME} />
				<Switcher click={switchTheme} defaultValue={theme} log={{ comment: 'переключение темы' }} />
			</div>
		</div>
	);
};

export default ModalSettingUserGeneralPage;
