import React, { FC, useEffect } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import ManagementWidgetHead from './ManagementWidgetHead/ManagementWidgetHead';
import ManagementWidgetBody from './ManagementWidgetBody/ManagementWidgetBody';
import ManagementWidgetFoot from './ManagementWidgetFoot/ManagementWidgetFoot';
import { companies } from '../../../../Services/Stores/Companies/Companies.interface';

interface IManagementWidget {
	extClass?: string;
}

/**
 * Виджет управления компанией
 * @param props.extClass - дополнительный CSS класс
 */
type qwe<T> = { [day in keyof companies.TCompany]: T };

const ManagementWidget: FC<IManagementWidget> = (props) => {
	const { extClass = '' } = props;

	const myCompany = services.store.companyStore.getMyCompany;

	useEffect(() => {
		myCompany || services.rest.RestApi.getMyCompany();
		// eslint-disable-next-line
	}, []);

	function saveConfig(key: keyof companies.TCompany, val: qwe<typeof key>) {
		services.store.companyStore.setMyCompany = { ...myCompany, [key]: val };
	}

	saveConfig('avatar', 123);

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
