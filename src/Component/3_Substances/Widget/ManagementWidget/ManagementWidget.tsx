import React, { FC, useEffect } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import ManagementWidgetHead from './ManagementWidgetHead/ManagementWidgetHead';
import ManagementWidgetBody from './ManagementWidgetBody/ManagementWidgetBody';
import ManagementWidgetFoot from './ManagementWidgetFoot/ManagementWidgetFoot';

interface IManagementWidget {
	extClass?: string;
}

/**
 * Виджет управления компанией
 * @param props.extClass - дополнительный CSS класс
 */

const ManagementWidget: FC<IManagementWidget> = (props) => {
	const { extClass = '' } = props;

	const myCompany = services.store.companyStore.getMyCompany;

	useEffect(() => {
		myCompany || services.rest.RestApi.getMyCompany();
	}, []);

	const downloadingMyCompany = <></>;

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				{myCompany ? (
					<>
						<ManagementWidgetHead myCompany={myCompany} />

						<Line extClass={styles.line} />

						<ManagementWidgetBody myCompany={myCompany} />

						<Line extClass={styles.line} />

						<ManagementWidgetFoot myCompany={myCompany} />
					</>
				) : (
					downloadingMyCompany
				)}
			</div>
		</WidgetWrapper>
	);
};

export default observer(ManagementWidget);
