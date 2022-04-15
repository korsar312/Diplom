import { makeAutoObservable } from 'mobx';
import services from '../../Services';
import { modals } from './Modal.interface';

export class ModalsController {
	private showModal: modals.TModal = {
		[modals.EModal.userSetting]: false,
	};

	private readonly rootStore: typeof services.store;

	constructor(rootStore: typeof services.store) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}

	/**
	 * Возвращает статус всех модальных окон
	 */
	public get getShowModalAll() {
		return this.showModal;
	}

	/**
	 * Устанавливает статус всех модальных окон
	 * @params show - отображение
	 */
	public set setShowModalAll(show: boolean) {
		for (let key in this.showModal) {
			this.showModal[key as modals.EModal] = show;
		}
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

	/**
	 * Переключает статус выбранного окна
	 */
	public switchShowModal(window: modals.EModal) {
		this.showModal[window] = !this.showModal.userSetting;
	}
}
