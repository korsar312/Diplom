import { makeAutoObservable } from 'mobx';
import { modals } from './Modal.interface';

export class ModalsStore {
	private showModal: modals.TModal = {
		[modals.EModal.userSetting]: false,
	};

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Возвращает статус выбранного окна
	 */
	public getShowModal(window: modals.EModal) {
		return this.showModal[window];
	}

	/**
	 * Устанавливает статус выбранного окна
	 * @params show - отображение
	 */
	public setShowModal(window: modals.EModal, show: boolean) {
		this.showModal[window] = show;
	}
}
