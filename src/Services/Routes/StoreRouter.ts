import {NavigateFunction} from "react-router-dom";

export class StoreRouter {
  private navigation: null | NavigateFunction = null;

  /**
   * Устанавливает хук useNavigation в переменную
   * @params history - выбранное предложение из списка
   */
  public setHistory(history: NavigateFunction) {
    this.navigation = history;
  }

  /**
   * Получаем хук useNavigation из переменной
   * @params history - выбранное предложение из списка
   */
  public getNavigation() {
    return this.navigation as NavigateFunction;
  }
}