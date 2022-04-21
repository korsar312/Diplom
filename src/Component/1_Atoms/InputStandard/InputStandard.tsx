import React, { FC, HTMLInputTypeAttribute } from 'react';
import styles from './InputStandard.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import { language } from '../../../Services/Language/Language.interface';
import services from '../../../Services/Services';
import IconWrapper from '../../0_Basic/IconWrapper/IconWrapper';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';

interface IInput {
	callback: (value: string) => void;
	iconLeft?: TIcon;
	iconRight?: TIcon;
	extClass?: string;
	placeholder?: language.TAllLanguageWord;
	type?: HTMLInputTypeAttribute;
	log?: rest.TlogAction;
	defaultValue?: string | number;
	color?: defaultStyle.TBackgroundColor;
	textStyle?: defaultStyle.TTextStyle;
	textColor?: defaultStyle.TColor;
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
	} = props;

	function handleChange(event: { target: { value: string } }) {
		services.rest.RestApi.logAction({
			element: InputStandard.name,
			action: 'Ввод',
			data: props,
			comment: `введено ${event.target.value}`,
			...log,
		});
		callback(event.target.value);
	}

	function handleIsFocus(isFocus: boolean) {
		services.rest.RestApi.logAction({
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
				defaultValue={defaultValue}
			/>
			{iconRight?.icon && <IconWrapper Icon={iconRight.icon} extClass={iconRight.extClass} />}
		</div>
	);
};

export default InputStandard;
