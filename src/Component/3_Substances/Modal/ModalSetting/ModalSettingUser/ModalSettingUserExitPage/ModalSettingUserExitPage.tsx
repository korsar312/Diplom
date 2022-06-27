import React, { FC, useContext } from 'react';
import styles from './ModalSettingUserExitPage.module.scss';
import { language } from '../../../../../../Logic/Modules/Language/Language.interface';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { modals } from '../../../../../../Logic/Modules/Modal/Modal.interface';
import modules from '../../../../../../Logic/Modules/Modules';
import { PreloaderContext } from '../../../../../../App';

interface IModalSettingUserExitPage {
	extClass?: string;
}

/**
 * Страница вариантов выхода в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserExitPage: FC<IModalSettingUserExitPage> = (props) => {
	const { extClass = '' } = props;

	const preloaderContext = useContext(PreloaderContext);

	function logOut() {
		preloaderContext.setIsShow(true);
		modules.users.service
			.Logout()
			.then(() => modules.modal.store.setShowModal(modals.EModal.userSetting, false))
			.finally(() => preloaderContext.setIsShow(false));
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
