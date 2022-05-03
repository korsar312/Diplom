import React, { FC } from 'react';
import styles from './WidgetWrapper.module.scss';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import ContentWrapper from '../../0_Basic/ContentWrapper/ContentWrapper';

interface IWidgetWrapper {
	extClass?: string;
	children: JSX.Element;
	color?: defaultStyle.TBackgroundColor;
}

/**
 * Обертка для разнообразных виджетов
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое виджета
 * @param props.color - цвет задника виджета
 */
const WidgetWrapper: FC<IWidgetWrapper> = (props) => {
	const { extClass = '', children, color = 'wight' } = props;
	return (
		<ContentWrapper
			extClass={`
				${styles.wrapper} 
				${extClass}
			`}
			color={color}>
			{children}
		</ContentWrapper>
	);
};

export default WidgetWrapper;
