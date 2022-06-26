import { ModalsStore } from './Modal.store';
import { ModalService } from './Modal.service';

export class ModalModule {
	public store: ModalsStore;
	public service: ModalService;

	constructor() {
		this.store = new ModalsStore();
		this.service = new ModalService();
	}
}
