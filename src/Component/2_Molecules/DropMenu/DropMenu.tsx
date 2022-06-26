import React, { FC, useState } from 'react';
import styles from './DropMenu.module.scss';
import ButtonStandard from '../../1_Atoms/ButtonStandard/ButtonStandard';
import { ReactComponent as IconArrow } from '../../../Assets/icon/icon_arrow.svg';
import { language } from '../../../Logic/Modules/Language/Language.interface';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import ContentWrapper from '../../0_Basic/ContentWrapper/ContentWrapper';

interface iDropMenu {
	title: language.TAllLanguageWord | string | number;
	children: JSX.Element;
	iconLeft?: FC<React.SVGProps<SVGSVGElement>>;
	extClass?: string;
	isPaddingOn?: boolean;
	isAbsolute?: boolean;
	color?: defaultStyle.TBackgroundColor;
}

/**
 * Стандартный Drop Button
 * @param props.title - отображаемое имя кнопки
 * @param props.children - скрываемая часть, основной контент
 * @param props.iconLeft - иконка для левой стороны
 * @param props.extClass - дополнительный CSS класс
 * @param props.isPaddingOn - Нужен ли отступ
 * @param props.isAbsolute - влияет ли дочерний элемени на css поток
 * @param props.color - цвет элемента
 */
const DropMenu: FC<iDropMenu> = (props) => {
	const { title, children, iconLeft, extClass = '', isPaddingOn, isAbsolute, color } = props;

	const [isShowListBtn, setIsShowListBtn] = useState(false);

	return (
		<ContentWrapper color={color} extClass={`${styles.wrapper} ${extClass}`}>
			<ButtonStandard
				color={isShowListBtn ? 'blue' : undefined}
				click={() => setIsShowListBtn((val) => !val)}
				log={{ element: DropMenu.name, comment: `Кнопка ${title} нажата` }}
				iconRight={{
					icon: IconArrow,
					extClass: `${styles.arrow} ${isShowListBtn ? styles.panelOn : ''}`,
				}}
				iconLeft={{ icon: iconLeft }}
				extClass={`${styles.btn} ${isShowListBtn ? styles.btnOpen : ''}`}
				titleObj={{ text: title, userStyle: 'light_small' }}
			/>

			<div
				className={`
			          ${styles.motherWrapper} 
			          ${isShowListBtn ? styles.isOpen : styles.isClose}
			          ${isPaddingOn ? styles.motherPadding : ''}
			          ${isAbsolute ? styles.motherWrapperAbsolute : ''}
			        `}>
				{children}
			</div>
		</ContentWrapper>
	);
};

export default DropMenu;
