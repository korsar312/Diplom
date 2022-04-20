import React, { FC, HTMLInputTypeAttribute } from 'react';
import styles from './InputStandard.module.scss';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import { language } from '../../../Services/Stores/Language/Language.interface';
import services from '../../../Services/Services';

interface IInput {
	callback: (value: string) => void;
	iconLeft?: TIcon;
	iconRight?: TIcon;
	extClass?: string;
	placeholder?: language.TAllLanguageWord;
	type?: HTMLInputTypeAttribute;
	log?: rest.TlogAction;
	defaultValue?: string | number;
	color?: TInputColor;
}

type TIcon = {
	icon: JSX.Element | undefined;
	extClass?: string;
};

type TInputColor = 'red' | 'black' | 'blue' | 'skyBlue' | 'grey' | 'lightGrey';

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
 */
const InputStandard: FC<IInput> = (props) => {
	const { callback, iconLeft, iconRight, extClass = '', placeholder, type, log, defaultValue, color } = props;

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
		<div className={`${styles.wrapper} ${extClass} ${color ? styles[`color_${color}`] : ''}`}>
			{iconLeft && <span className={iconLeft.extClass}>{iconLeft.icon}</span>}
			<input
				placeholder={placeholder}
				onChange={handleChange}
				onFocus={() => handleIsFocus(true)}
				onBlur={() => handleIsFocus(false)}
				type={type}
				className={styles.input}
				defaultValue={defaultValue}
			/>
			{iconRight && <span className={iconRight.extClass}>{iconRight.icon}</span>}
		</div>
	);
};

export default InputStandard;
