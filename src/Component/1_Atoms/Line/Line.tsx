import React, { FC } from 'react';
import styles from './Line.module.scss';

interface ILine {
	extClass?: string;
	height?: number;
	isRadius?: boolean;
	color?: TLineColor;
}

type TLineColor = 'red' | 'black' | 'blue' | 'skyBlue' | 'grey';

/**
 * Разделитель / линия
 * @param props.extClass - дополнительный CSS класс
 * @param props.height - высота линии
 * @param props.isRadius - закруглять концы
 */
const Line: FC<ILine> = (props) => {
	const { extClass = '', height = 2, isRadius, color = 'grey' } = props;

	return (
		<div
			style={{ height: `${height}px` }}
			className={`
				${styles.wrapper}
				${extClass}
				${isRadius ? styles.radius : ''}
				${color ? styles[`color_${color}`] : ''} 
			`}
		/>
	);
};

export default Line;
