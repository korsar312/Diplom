import { SettingStore } from './Setting.store';
import { SettingService } from './Setting.service';

export class SettingsModule {
	public store: SettingStore;
	public service: SettingService;

	constructor() {
		this.store = new SettingStore();
		this.service = new SettingService();
	}
}
