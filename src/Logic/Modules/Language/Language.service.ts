import { dictionary } from './Language.dictionary';
import { language } from './Language.interface';
import { languageCurrency } from './Language.currency';

export class LanguageService {
	private readonly language: language.TLanguage = dictionary;
	private readonly currency: language.TCurrency = languageCurrency;

	/**
	 * Возвращает выбранное объект предложение для языковой модели
	 * @params wordKey - выбранное предложение
	 */
	public getText(wordKey: language.TAllLanguageWord) {
		return this.language[wordKey];
	}

	/**
	 * Возвращает денежный знак
	 * @params wordKey - выбранное предложение
	 */
	public getCurrencySymbol(wordKey: keyof language.TCurrency) {
		return this.currency[wordKey].symbol;
	}

	/**
	 * Возвращает имя валюты для текущей языковой модели
	 * @params wordKey - выбранное предложение
	 */
	public getCurrencyName(wordKey: keyof language.TCurrency) {
		return this.getText(this.currency[wordKey].name);
	}
}
