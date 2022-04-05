import React, {FC} from 'react';
import styles from './Text.module.scss'
import {language} from "../../../Services/Stores/Language/Language.interface";
import services from "../../../Services/Services";
import {observer} from "mobx-react";

interface IText {
  text: language.ELanguageKey
  userStyle?: TTextStyle
  userColor?: TTextColor
  caseWord?: TModeReturnWord
  extClass?: string
}

export type TTextStyle =
  'standard' |
  'fat_extraSmall' |
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


type TModeReturnWord = 'CAPITAL' | 'SMALL'

/**
 * Текст
 * @param props.text - текст
 * @param props.textString - текст строкой без перевода (Только имена и подобное)
 * @param props.userStyle - шаблонный стиль текста
 * @param props.userColor - шаблонный цвет текста
 * @param props.caseWord - выбор регистра текста
 * @param props.extClass - дополнительный CSS класс
 */
const Text: FC<IText> = (props) => {
  const {text, userStyle = 'standard', userColor = 'standard', extClass = '', caseWord} = props

  function wordTranslate(word: language.ELanguageKey) {
    const wordTranslate = services.store.languageStore.getText(word)

    if (caseWord) {
      switch (caseWord) {
        case 'CAPITAL':
          return wordTranslate.toUpperCase()
        case 'SMALL':
          return wordTranslate.toLowerCase()
      }

    } else {
      return wordTranslate
    }
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

export default observer(Text);