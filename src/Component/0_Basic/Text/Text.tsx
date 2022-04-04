import React, {FC} from 'react';
import styles from './Text.module.scss'
import {language} from "../../../Services/Stores/Language/Language.interface";
import services from "../../../Services/Services";
import {OneOfTwo} from "../../../Types/Types";
import {observer} from "mobx-react";

interface IText {
  text?: language.ELanguageKey
  textString?: string
  userStyle?: TTextStyle
  userColor?: TTextColor
  extClass?: string
}

export type TTextStyle =
  'standard' |
  'light_small' |
  'fat_small' |
  'fat_big' |
  'fat_extraBig' |
  'normal_small'

export type TTextColor =
  'red' |
  'blue' |
  'green' |
  'white' |
  'skyblue'

type TNavigateList = OneOfTwo<IText, 'text' | 'textString'>

/**
 * Текст
 * @param props.text - текст
 * @param props.textString - текст строкой без перевода (Только имена и подобное)
 * @param props.userStyle - шаблонный стиль текста
 * @param props.userColor - шаблонный цвет текста
 * @param props.extClass - дополнительный CSS класс
 */
const Text: FC<TNavigateList> = (props) => {
  const {text, textString, userStyle = 'standard', userColor = 'standard', extClass = ''} = props

  function wordTranslate(word: language.ELanguageKey) {
    return services.store.languageStore.getText(word)
  }

  return (
    <span className={`
        ${styles.wrapper} 
        ${extClass} 
        ${styles['style_' + userStyle]}
        ${styles['color_' + userColor]}
      `}
    >
      {text ? wordTranslate(text) : textString}
    </span>
  );
};

export default observer(Text);