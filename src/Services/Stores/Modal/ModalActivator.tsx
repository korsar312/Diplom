import ModalSettingUser from '../../../Component/3_Substances/Modal/ModalSetting/ModalSettingUser/ModalSettingUser';
import services from '../../Services';
import { observer } from 'mobx-react';
import { modals } from './Modal.interface';

/**
 * Компонент для сохранение состаяния глобальных модальных окон
 */
const ModalActivator = () => {
	const showModal = services.store.modalStore;

	const showSetting = (modal: modals.EModal) => showModal.getShowModal(modal);

	function closeSettingUser(modal: modals.EModal) {
		showModal.setShowModal(modal, false);
	}

	return (
		<>
			<ModalSettingUser
				isShow={showSetting(modals.EModal.userSetting)}
				onClose={() => closeSettingUser(modals.EModal.userSetting)}
			/>
		</>
	);
};

export default observer(ModalActivator);
