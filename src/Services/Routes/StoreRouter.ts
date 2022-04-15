import { NavigateFunction } from 'react-router-dom';

export class StoreRouter {
	private navigation: null | NavigateFunction = null;

	/**
	 * Устанавливает хук useNavigation в переменную
	 * @params history - сам хук
	 */
	public setHistory(history: NavigateFunction) {
		this.navigation = history;
	}

	/**
	 * Получаем хук useNavigation из переменной
	 */
	public getNavigation() {
		return this.navigation as NavigateFunction;
	}
}
