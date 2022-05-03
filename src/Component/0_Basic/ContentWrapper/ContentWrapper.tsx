import React, { FC } from 'react';
import styles from './ContentWrapper.module.scss';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import defaultStyles from '../../../Styles/DefaultStyles/DefaultStyles.module.scss';

interface IContentWrapper {
	extClass?: string;
	children: JSX.Element;
	color?: defaultStyle.TBackgroundColor;
	isInline?: boolean;
}

/**
 * Обертка для контента
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое виджета
 * @param props.color - цвет задника виджета
 * @param props.isInline - является ли инлайн или блок
 */
const ContentWrapper: FC<IContentWrapper> = (props) => {
	const { extClass = '', children, color, isInline } = props;

	const className = `
				${styles.wrapper} 
				${color ? defaultStyles[`backgroundColor_${color}`] : ''} 
				${extClass}
			`;

	const inline = <span className={className}>{children}</span>;
	const block = <div className={className}>{children}</div>;

	return isInline ? inline : block;
};

export default ContentWrapper;
