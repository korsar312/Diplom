import React, { FC } from 'react';
import styles from './ModalSettingUserExitPage.module.scss';
import { language } from '../../../../../../Services/Language/Language.interface';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import services from '../../../../../../Services/Services';
import { modals } from '../../../../../../Services/Stores/Modal/Modal.interface';
import Text from '../../../../../0_Basic/Text/Text';

interface IModalSettingUserExitPage {
	extClass?: string;
}

/**
 * Страница вариантов выхода в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserExitPage: FC<IModalSettingUserExitPage> = (props) => {
	const { extClass = '' } = props;

	function logOut() {
		services.localStorage.disabledAutSingIn();
		services.store.modalStore.setShowModal(modals.EModal.userSetting, false);
		services.store.usersStore.setCurrentUser = null;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<ButtonStandard click={logOut} color={'grey'}>
					<Text text={language.ELanguageSimpleWord.EXIT} userStyle={'fat_small'} />
				</ButtonStandard>
			</div>
		</div>
	);
};

export default ModalSettingUserExitPage;
