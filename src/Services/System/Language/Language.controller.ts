import { language } from './Language.interface';
import { dictionary } from './Language.dictionary';
import services from '../../Services';

export class LanguageController {
	private readonly language: language.TLanguage = dictionary;

	/**
	 * Возвращает выбранное предложение для текущей языковой модели
	 * @params wordKey - выбранное предложение
	 */
	public getText(wordKey: language.TAllLanguageWord) {
		return this.language[wordKey][services.store.settingStore.getCurrentLanguage];
	}
}
