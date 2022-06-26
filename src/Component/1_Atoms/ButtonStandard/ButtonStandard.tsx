import React, { FC, ReactNode } from 'react';
import styles from './ButtonStandard.module.scss';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import IconWrapper from '../../0_Basic/IconWrapper/IconWrapper';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import { observer } from 'mobx-react';
import Text, { IText } from '../../0_Basic/Text/Text';
import { rest } from '../../../Logic/Api/RestApi/RestApi.interface';
import { language } from '../../../Logic/Modules/Language/Language.interface';
import API from '../../../Logic/Api/API';
import modules from '../../../Logic/Modules/Modules';

interface IButtonStandard {
	click: () => void;
	titleObj?: IText;
	color?: defaultStyle.TBackgroundColor;
	extClass?: string;
	iconLeft?: TIcon;
	iconRight?: TIcon;
	isNoPadding?: boolean;
	isDisabled?: boolean;
	children?: ReactNode;
	log?: rest.TLogAction;
	isHover?: boolean;
	alt?: language.TAllLanguageWord;
}

type TIcon = {
	icon: FC<React.SVGProps<SVGSVGElement>> | undefined;
	extClass?: string;
};

/**
 * Основная кнопка
 * @param props.click - функция onClick по кнопке
 * @param props.titleObj - текст кнопки и ее параметры
 * @param props.color - цвет кнопки
 * @param props.extClass - дополнительный CSS класс
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой стороны
 * @param props.isNoPadding - убрать внутренний отступ
 * @param props.disabled - неактивность кнопки
 * @param props.children - контент кнопки
 * @param props.log - логирование
 * @param props.isHover - выделение при наведении
 * @param props.alt - текст при наведении курсора
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
	const {
		click,
		titleObj,
		color = 'none',
		extClass = '',
		iconLeft,
		iconRight,
		isNoPadding,
		isDisabled,
		children,
		log,
		isHover,
		alt,
	} = props;

	function clickHandler() {
		API.RestApi.logAction({
			element: ButtonStandard.name,
			action: 'Нажатие',
			data: props,
			comment: `кнопка ${titleObj?.text || (iconLeft || iconRight)?.icon || 'не определена'}`,
			...log,
		});

		click();
	}

	return (
		<button
			title={alt && modules.language.service.getText(alt)[modules.settings.store.getCurrentLanguage]}
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

			{(titleObj?.text || children) && (
				<div className={styles.content}>
					{titleObj?.text && <Text {...titleObj} />}
					<div className={styles.child}>{children}</div>
				</div>
			)}

			{iconRight?.icon && (
				<IconWrapper extClass={`${styles.icon} ${iconRight.extClass || ''}`} Icon={iconRight.icon} />
			)}
		</button>
	);
};

export default observer(ButtonStandard);
