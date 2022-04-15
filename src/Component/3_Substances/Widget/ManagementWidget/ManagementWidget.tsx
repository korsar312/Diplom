import React, { FC } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import Avatar from '../../../1_Atoms/Avatar/Avatar';

interface IManagementWidget {
	extClass?: string;
}

/**
 * Виджет управления компанией
 * @param props.extClass - дополнительный CSS класс
 */

const ManagementWidget: FC<IManagementWidget> = () => {
	return (
		<WidgetWrapper>
			<div className={styles.wrapper}>
				<div>
					<div>
						<Avatar />
					</div>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>

				<Line />

				<div></div>

				<Line />

				<div></div>
			</div>
		</WidgetWrapper>
	);
};

export default ManagementWidget;
