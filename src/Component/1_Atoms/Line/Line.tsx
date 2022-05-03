import React, { FC } from 'react';
import styles from './Line.module.scss';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import defaultStyles from './../../../Styles/DefaultStyles/DefaultStyles.module.scss';

interface ILine {
	extClass?: string;
	width?: number;
	isRadius?: boolean;
	color?: defaultStyle.TBackgroundColor;
}

/**
 * Разделитель / линия
 * @param props.extClass - дополнительный CSS класс
 * @param props.width - ширина линии
 * @param props.isRadius - закруглять концы
 */
const Line: FC<ILine> = (props) => {
	const { extClass = '', width = 2, isRadius, color = 'grey' } = props;

	return (
		<div
			style={{ height: `${width}px` }}
			className={`
				${styles.wrapper}
				${extClass}
				${isRadius ? styles.radius : ''}
				${color ? defaultStyles[`backgroundColor_${color}`] : ''} 
			`}
		/>
	);
};

export default Line;
