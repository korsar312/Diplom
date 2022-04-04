import {language} from "../../Stores/Language/Language.interface";
import services from "../../Services";

export class Utils {

  /**
   * Возвращает выбранное предложение для текущей языковой модели
   * @params word - выбранное предложение из списка
   */
  public wordTranslate(word: language.ELanguageKey | undefined) {
    if (!word) {
      return undefined
    }
    return services.store.languageStore.getText(word)
  }

  /**
   * Возвращает текущее время в формате "25-10-2022 15:38:45"
   */
  public getStringCurrentTime() {
    const date = new Date()
    const DMY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const HMS = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return `${DMY} ${HMS}`
  }

}
