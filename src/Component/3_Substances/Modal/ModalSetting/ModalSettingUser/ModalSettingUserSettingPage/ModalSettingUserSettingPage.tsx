import React, { FC } from 'react';
import Text from '../../../../../0_Basic/Text/Text';
import services from '../../../../../../Services/Services';
import styles from './ModalSettingUserSettingPage.module.scss';
import { language } from '../../../../../../Services/Stores/Language/Language.interface';
import DropMenu from '../../../../../2_Molecules/DropMenu/DropMenu';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { observer } from 'mobx-react';

interface IModalSettingUserSettingPage {
	extClass?: string;
}

/**
 * Страница выхода в менб настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserSettingPage: FC<IModalSettingUserSettingPage> = (props) => {
	const { extClass = '' } = props;

	const currentLanguage = services.store.languageStore.getCurrentLanguage;

	const renderLanguage = Object.keys(language.ELanguageType).map((language) => {
		return (
			<ButtonStandard
				key={language}
				click={() => setLanguage(language as language.ELanguageType)}
				color={currentLanguage === language ? 'grey' : undefined}
				title={language}
			/>
		);
	});

	function setLanguage(language: language.ELanguageType) {
		services.store.languageStore.setCurrentLanguage = language;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<Text userStyle={'fat_small'} text={language.allLanguageWord.CHANGE_LANGUAGE} />
				<DropMenu title={currentLanguage} isAbsolute={true} isPaddingOn={true}>
					<>{renderLanguage}</>
				</DropMenu>
			</div>
		</div>
	);
};

export default observer(ModalSettingUserSettingPage);
