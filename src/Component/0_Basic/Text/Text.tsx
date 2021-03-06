import React, { FC } from 'react';
import styles from './Text.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { language } from '../../../Logic/Modules/Language/Language.interface';
import { observer } from 'mobx-react';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import modules from '../../../Logic/Modules/Modules';

export interface IText {
	text: TText;
	userStyle?: defaultStyle.TTextStyle;
	userColor?: defaultStyle.TColor;
	caseWord?: TModeReturnWord;
	extClass?: string;
}

type TText = language.TAllLanguageWord | number | string;

type TModeReturnWord = 'CAPITAL' | 'SMALL';

/**
 * Текст
 * @param props.text - текст
 * @param props.userStyle - шаблонный стиль текста
 * @param props.userColor - шаблонный цвет текста
 * @param props.caseWord - выбор регистра текста
 * @param props.extClass - дополнительный CSS класс
 */
const Text: FC<IText> = (props) => {
	const { text, userStyle = 'standard', userColor = 'standard', extClass = '', caseWord } = props;

	function wordTranslate(word: TText): string {
		const wordTranslate = String(
			word in language.allLanguageWord
				? modules.language.service.getText(word as language.TAllLanguageWord)[
						modules.settings.store.getCurrentLanguage
				  ]
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
		        ${defaultStyles['style_' + userStyle]}
		        ${defaultStyles['color_' + userColor]}
	        `}>
			{wordTranslate(text)}
		</span>
	);
};

export default observer(Text);
