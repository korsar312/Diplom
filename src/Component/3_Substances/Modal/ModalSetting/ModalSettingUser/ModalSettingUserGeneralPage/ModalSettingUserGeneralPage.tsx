import React, { FC } from 'react';
import { language } from '../../../../../../Services/Language/Language.interface';
import services from '../../../../../../Services/Services';
import styles from '../ModalSettingUserSettingPage/ModalSettingUserSettingPage.module.scss';
import Text from '../../../../../0_Basic/Text/Text';
import Switcher from '../../../../../1_Atoms/Switcher/Switcher';
import { setting } from '../../../../../../Services/Stores/Settings/Setting.interface';

interface IModalSettingUserGeneralPage {
	extClass?: string;
}

/**
 * Страница основных настроек в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserGeneralPage: FC<IModalSettingUserGeneralPage> = (props) => {
	const { extClass = '' } = props;

	const theme = services.store.settingStore.isLightTheme;

	function switchTheme(val: boolean) {
		services.store.settingStore.setTheme = val ? setting.theme.LIGHT : setting.theme.DARK;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<Text userStyle={'fat_small'} text={language.allLanguageWord.ENABLE_LIGHT_THEME} />
				<Switcher click={switchTheme} defaultValue={theme} log={{ comment: 'переключение темы' }} />
			</div>
		</div>
	);
};

export default ModalSettingUserGeneralPage;
