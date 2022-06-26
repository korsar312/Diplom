import React, { FC, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import styles from './InputStandard.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { rest } from '../../../Logic/Api/RestApi/RestApi.interface';
import { language } from '../../../Logic/Modules/Language/Language.interface';
import IconWrapper from '../../0_Basic/IconWrapper/IconWrapper';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import API from '../../../Logic/Api/API';

interface IInput {
	callback: (value: string) => void;
	iconLeft?: TIcon;
	iconRight?: TIcon;
	extClass?: string;
	placeholder?: language.TAllLanguageWord;
	type?: HTMLInputTypeAttribute;
	log?: rest.TLogAction;
	defaultValue?: string | number;
	color?: defaultStyle.TBackgroundColor;
	textStyle?: defaultStyle.TTextStyle;
	textColor?: defaultStyle.TColor;
	rule?: ((value: string | number) => boolean)[];
}

type TIcon = {
	icon: FC<React.SVGProps<SVGSVGElement>> | undefined;
	extClass?: string;
};

/**
 * Основной инпут
 * @param props.callback - функция, возвращающая текущее введенное значение
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой стороны
 * @param props.extClass - дополнительный CSS класс
 * @param props.placeholder - плейсхолдер
 * @param props.type - тип инпута
 * @param props.log - логирование
 * @param props.defaultValue - значение по умолчанию
 * @param props.color - цвет фона инпута
 * @param props.textStyle - стиль текста
 * @param props.textColor - цвет текста
 * @param props.rule - правила для инпута
 */
const InputStandard: FC<IInput> = (props) => {
	const {
		callback,
		iconLeft,
		iconRight,
		extClass = '',
		placeholder,
		type,
		log,
		defaultValue = '',
		color,
		textStyle = 'standard',
		textColor = 'standard',
		rule,
	} = props;

	const [valueInput, setValueInput] = useState(defaultValue);

	useEffect(() => {
		setValueInput(defaultValue);
	}, [defaultValue]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputting = event.target.value;

		API.RestApi.logAction({
			element: InputStandard.name,
			action: 'Ввод',
			data: props,
			comment: `введено ${inputting}`,
			...log,
		});

		if (validate(inputting)) {
			setValueInput(inputting);
			callback(inputting);
		}
	}

	function validate(input: string) {
		return rule ? rule.every((el) => el(input)) : true;
	}

	function handleIsFocus(isFocus: boolean) {
		API.RestApi.logAction({
			element: InputStandard.name,
			action: 'Фокус',
			data: props,
			comment: isFocus ? 'Фокус взят' : 'Фокус потерян',
			...log,
		});
	}

	return (
		<div className={`${styles.wrapper} ${extClass} ${color ? defaultStyles[`backgroundColor_${color}`] : ''}`}>
			{iconLeft?.icon && <IconWrapper Icon={iconLeft.icon} extClass={iconLeft.extClass} />}
			<input
				placeholder={placeholder}
				onChange={handleChange}
				onFocus={() => handleIsFocus(true)}
				onBlur={() => handleIsFocus(false)}
				type={type}
				className={`
					${styles.input} 
					${defaultStyles[`style_${textStyle}`]}
					${defaultStyles[`color_${textColor}`]}
				`}
				value={valueInput}
			/>
			{iconRight?.icon && <IconWrapper Icon={iconRight.icon} extClass={iconRight.extClass} />}
		</div>
	);
};

export default InputStandard;
