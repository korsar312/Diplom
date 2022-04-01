import {language} from "../../Services/Stores/Language/Language.interface";
import rootStore from "../../Services/Stores/Store";

export function wordTranslate(word: language.ELanguageKey | undefined) {
  if (!word) {
    return undefined
  }
  return rootStore.languageStore.getText(word)
}