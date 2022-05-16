import React, { FC } from 'react';
import styles from './ImportWidget.module.scss';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';

interface IImportWidget {
	extClass?: string;
}

/**
 * Виджет просмотра и заказа чужлй продукцией
 * @param props.extClass - дополнительный CSS класс
 */
const ImportWidget: FC<IImportWidget> = (props) => {
	const { extClass = '' } = props;

	return (
		<WidgetWrapper extClass={styles.wrapper}>
			<div>123</div>
		</WidgetWrapper>
	);
};

export default ImportWidget;
