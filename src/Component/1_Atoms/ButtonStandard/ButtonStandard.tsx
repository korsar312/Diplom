import React, { FC } from 'react';
import styles from './ButtonStandard.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import Text from '../../0_Basic/Text/Text';
import { language } from '../../../Services/Language/Language.interface';
import services from '../../../Services/Services';
import IconWrapper from '../../0_Basic/IconWrapper/IconWrapper';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';

interface IButtonStandard {
	click: () => void;
	title?: language.TAllLanguageWord | string | number;
	color?: defaultStyle.TBackgroundColor;
	textStyle?: defaultStyle.TTextStyle;
	extClass?: string;
	iconLeft?: TIcon;
	iconRight?: TIcon;
	isNoPadding?: boolean;
	isDisabled?: boolean;
	children?: JSX.Element;
	log?: rest.TLogAction;
	isHover?: boolean;
}

type TIcon = {
	icon: FC<React.SVGProps<SVGSVGElement>> | undefined;
	extClass?: string;
};

/**
 * Основная кнопка
 * @param props.click - функция onClick по кнопке
 * @param props.title - отображаемое имя кнопки
 * @param props.color - цвет кнопки
 * @param props.textStyle - стиль текста кнопки
 * @param props.extClass - дополнительный CSS класс
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой стороны
 * @param props.isNoPadding - убрать внутренний отступ
 * @param props.disabled - неактивность кнопки
 * @param props.children - jsx контент кнопки
 * @param props.log - логирование
 * @param props.isHover - выделение при наведении
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
	const {
		click,
		title,
		color,
		textStyle = 'standard',
		extClass = '',
		iconLeft,
		iconRight,
		isNoPadding,
		isDisabled,
		children,
		log,
		isHover,
	} = props;

	function clickHandler() {
		services.rest.RestApi.logAction({
			element: ButtonStandard.name,
			action: 'Нажатие',
			data: props,
			comment: `кнопка ${title || (iconLeft || iconRight)?.icon?.name || 'не определена'}`,
			...log,
		});

		click();
	}

	return (
		<button
			type={'button'}
			disabled={isDisabled}
			onClick={clickHandler}
			className={`
		        ${styles.wrapper} 
		        ${isHover ? styles.btnHover : ''}
		        ${color ? defaultStyles[`backgroundColor_${color}`] : ''} 
		        ${extClass} 
		        ${isNoPadding ? styles.noPadding : ''}
		    `}>
			{iconLeft?.icon && (
				<IconWrapper extClass={`${styles.icon} ${iconLeft.extClass || ''}`} Icon={iconLeft.icon} />
			)}
			{title && <Text userStyle={textStyle} extClass={styles.text} text={title} />}
			{iconRight?.icon && (
				<IconWrapper extClass={`${styles.icon} ${iconRight.extClass || ''}`} Icon={iconRight.icon} />
			)}
			{children && <div className={styles.content}>{children}</div>}
		</button>
	);
};

export default ButtonStandard;
