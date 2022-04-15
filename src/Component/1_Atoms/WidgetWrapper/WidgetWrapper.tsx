import React, { FC } from 'react';
import styles from './WidgetWrapper.module.scss';

interface IWidgetWrapper {
	extClass?: string;
	children: JSX.Element;
}

/**
 * Обертка для разнообразных виджетов
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое виджета
 */
const WidgetWrapper: FC<IWidgetWrapper> = (props) => {
	const { extClass = '', children } = props;
	return <div className={`${styles.wrapper} ${extClass}`}>{children}</div>;
};

export default WidgetWrapper;
