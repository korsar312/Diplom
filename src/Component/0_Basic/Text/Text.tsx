import React, { FC } from 'react';
import styles from './Text.module.scss';
import { language } from '../../../Services/Stores/Language/Language.interface';
import services from '../../../Services/Services';
import { observer } from 'mobx-react';

interface IText {
	text: TText;
	userStyle?: TTextStyle;
	userColor?: TTextColor;
	caseWord?: TModeReturnWord;
	extClass?: string;
}

type TText = language.ELanguageKey | number | string;

export type TTextStyle =
	| 'standard'
	| 'light_extraSmall'
	| 'fat_extraSmall'
	| 'light_small'
	| 'fat_small'
	| 'fat_big'
	| 'fat_extraBig'
	| 'normal_small';

export type TTextColor = 'red' | 'blue' | 'green' | 'white' | 'grey' | 'skyblue';

type TModeReturnWord = 'CAPITAL' | 'SMALL';

/**
 * Текст
 * @param props.textTranslate - текст с переводом
 * @param props.text - текст как есть (строкой)
 * @param props.textString - текст строкой без перевода (Только имена и подобное)
 * @param props.userStyle - шаблонный стиль текста
 * @param props.userColor - шаблонный цвет текста
 * @param props.caseWord - выбор регистра текста
 * @param props.extClass - дополнительный CSS класс
 */
const Text: FC<IText> = (props) => {
	const { text, userStyle = 'standard', userColor = 'standard', extClass = '', caseWord } = props;

	function wordTranslate(word: TText): string {
		const wordTranslate = String(
			word in language.ELanguageKey
				? services.store.languageStore.getText(word as language.ELanguageKey)
				: word
		);

		if (caseWord) {
			switch (caseWord) {
				case 'CAPITAL':
					return wordTranslate.toUpperCase();
				case 'SMALL':
					return wordTranslate.toLowerCase();
			}
		} else {
			return wordTranslate;
		}
	}

	return (
		<span
			className={`
        ${styles.wrapper} 
        ${extClass} 
        ${styles['style_' + userStyle]}
        ${styles['color_' + userColor]}
      `}>
			{wordTranslate(text)}
		</span>
	);
};

export default observer(Text);
