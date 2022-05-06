import { LanguageController } from './Language/Language.controller';
import { RepositoryController } from './Repository/Repository.controller';

export class System {
	public language: LanguageController;
	public repositoryStorage: RepositoryController;

	constructor() {
		this.language = new LanguageController();
		this.repositoryStorage = new RepositoryController();
	}
}
