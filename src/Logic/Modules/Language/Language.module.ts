import { LanguageService } from './Language.service';

export class LanguageModule {
	public service: LanguageService;

	constructor() {
		this.service = new LanguageService();
	}
}
