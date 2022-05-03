import React, { FC } from 'react';
import styles from './ButtonStandard.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import services from '../../../Services/Services';
import IconWrapper from '../../0_Basic/IconWrapper/IconWrapper';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';

interface IButtonStandard {
	click: () => void;
	color?: defaultStyle.TBackgroundColor;
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
 * @param props.color - цвет кнопки
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
	const { click, color, extClass = '', iconLeft, iconRight, isNoPadding, isDisabled, children, log, isHover } = props;

	function clickHandler() {
		services.rest.RestApi.logAction({
			element: ButtonStandard.name,
			action: 'Нажатие',
			data: props,
			comment: `кнопка ${(iconLeft || iconRight)?.icon?.name || 'не определена'}`,
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
			{children && <div className={styles.content}>{children}</div>}
			{iconRight?.icon && (
				<IconWrapper extClass={`${styles.icon} ${iconRight.extClass || ''}`} Icon={iconRight.icon} />
			)}
		</button>
	);
};

export default ButtonStandard;
