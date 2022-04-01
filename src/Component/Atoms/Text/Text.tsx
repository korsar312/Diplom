import React, {FC} from 'react';
import styles from './Text.module.scss'
import {language} from "../../../Services/Stores/Language/Language.interface";
import rootStore from "../../../Services/Stores/Store";

interface IText {
  text: language.ELanguageKey
  userStyle?: TTextStyle
  userColor?: TTextColor
  extClass?: string
}

export type TTextStyle =
  'standard' |
  'fat_small' |
  'fat_extraBig' |
  'normal_small'

export type TTextColor =
  'red' |
  'blue' |
  'white' |
  'skyblue'

/**
 * Текст
 * @param props.text - текст
 * @param props.userStyle - шаблонный стиль текста
 * @param props.userColor - шаблонный цвет текста
 * @param props.extClass - дополнительный CSS класс
 */
const Text: FC<IText> = (props) => {
  const {text, userStyle = 'standard', userColor = 'standard', extClass = ''} = props

  function wordTranslate(word: language.ELanguageKey) {
    return rootStore.languageStore.getText(word)
  }

  return (
    <span className={`
        ${styles.wrapper} 
        ${extClass} 
        ${styles['style_' + userStyle]}
        ${styles['color_' + userColor]}
      `}
    >
      {wordTranslate(text)}
    </span>
  );
};

export default Text;