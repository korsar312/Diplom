import React, { FC } from 'react';
import styles from './ModalSettingUserExitPage.module.scss';
import { language } from '../../../../../../Logic/Modules/Language/Language.interface';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { modals } from '../../../../../../Logic/Modules/Modal/Modal.interface';
import modules from '../../../../../../Logic/Modules/Modules';

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
		modules.users.service.DisabledAutoSingIn();
		modules.modal.store.setShowModal(modals.EModal.userSetting, false);
		modules.users.store.setCurrentUser = null;
	}

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.row}>
				<ButtonStandard
					click={logOut}
					color={'grey'}
					titleObj={{ text: language.ELanguageSimpleWord.EXIT, userStyle: 'fat_small' }}
				/>
			</div>
		</div>
	);
};

export default ModalSettingUserExitPage;
