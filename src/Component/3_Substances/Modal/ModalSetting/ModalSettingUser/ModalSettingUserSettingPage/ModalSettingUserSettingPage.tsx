import React, { FC } from 'react';
import Text from '../../../../../0_Basic/Text/Text';
import services from '../../../../../../Services/Services';
import styles from './ModalSettingUserSettingPage.module.scss';
import { language } from '../../../../../../Services/Language/Language.interface';
import DropMenu from '../../../../../2_Molecules/DropMenu/DropMenu';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { observer } from 'mobx-react';
import { setting } from '../../../../../../Services/Stores/Settings/Setting.interface';

interface IModalSettingUserSettingPage {
	extClass?: string;
}

/**
 * Страница выхода в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserSettingPage: FC<IModalSettingUserSettingPage> = (props) => {
	const { extClass = '' } = props;

	const currentLanguage = services.store.settingStore.getCurrentLanguage;

	const renderLanguage = Object.keys(setting.ELanguageType).map((language) => {
		return (
			<ButtonStandard
				key={language}
				click={() => setLanguage(language as setting.ELanguageType)}
				color={currentLanguage === language ? 'grey' : undefined}
				title={language}
			/>
		);
	});

	function setLanguage(language: setting.ELanguageType) {
		services.store.settingStore.setCurrentLanguage = language;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<Text userStyle={'fat_small'} text={language.ELanguageSimpleWord.CHANGE_LANGUAGE} />
				<DropMenu title={currentLanguage} isAbsolute={true} isPaddingOn={true}>
					<>{renderLanguage}</>
				</DropMenu>
			</div>
		</div>
	);
};

export default observer(ModalSettingUserSettingPage);
