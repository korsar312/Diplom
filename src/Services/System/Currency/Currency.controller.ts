import services from '../../Services';
import { currency } from './Currency.interface';
import { currencyList } from './Currency.list';

export class CurrencyController {
	private readonly currency: currency.TCurrency = currencyList;

	/**
	 * Возвращает денежный знак
	 * @params wordKey - выбранное предложение
	 */
	public getCurrencySymbol(wordKey: keyof currency.TCurrency) {
		return this.currency[wordKey].symbol;
	}

	/**
	 * Возвращает имя валюты для текущей языковой модели
	 * @params wordKey - выбранное предложение
	 */
	public getCurrencyName(wordKey: keyof currency.TCurrency) {
		return services.system.language.getText(this.currency[wordKey].name);
	}
}
