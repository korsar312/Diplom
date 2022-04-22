import React, { FC } from 'react';
import styles from './WidgetWrapper.module.scss';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import defaultStyles from '../../../Styles/DefaultStyles/DefaultStyles.module.scss';

interface IWidgetWrapper {
	extClass?: string;
	children: JSX.Element;
	color?: defaultStyle.TBackgroundColor;
}

/**
 * Обертка для разнообразных виджетов
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое виджета
 * @param props.color - содержимое виджета
 */
const WidgetWrapper: FC<IWidgetWrapper> = (props) => {
	const { extClass = '', children, color = 'wight' } = props;
	return (
		<div
			className={`
				${styles.wrapper} 
				${defaultStyles[`backgroundColor_${color}`]} 
				${extClass}
			`}>
			{children}
		</div>
	);
};

export default WidgetWrapper;
