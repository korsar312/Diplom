import React, { FC, useContext, useEffect } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import ManagementWidgetHead from './ManagementWidgetHead/ManagementWidgetHead';
import ManagementWidgetBody from './ManagementWidgetBody/ManagementWidgetBody';
import ManagementWidgetFoot from './ManagementWidgetFoot/ManagementWidgetFoot';
import { types } from '../../../../Types/Types';
import { companies } from '../../../../Services/Stores/Companies/Companies.interface';
import { PreloaderContext } from '../../../../App';

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
	const preloader = useContext(PreloaderContext);

	useEffect(() => {
		myCompany || services.rest.RestApi.getMyCompany();
		// eslint-disable-next-line
	}, []);

	function changeExist(val: types.TChangeObject<companies.TCompany>) {
		const keyArr = Object.keys(val) as Array<keyof typeof val>;
		return keyArr.some((el) => val[el] !== (myCompany && myCompany[el]));
	}

	function saveConfig(val: types.TChangeObject<companies.TCompany>) {
		if (!changeExist(val)) return;

		services.rest.RestApi.logAction({
			element: ManagementWidget.name,
			action: 'Изменение объекта',
			data: val,
			comment: `Изменение компании юзера по полям ${Object.keys(val)}`,
		});

		if (myCompany) {
			preloader.setIsShow(true);

			services.rest.RestApi.setMyCompany(myCompany, (isOk) => {
				if (isOk) {
					services.store.companyStore.setMyCompany = myCompany ? { ...myCompany, ...val } : null;
				}
				preloader.setIsShow(false);
			});
		}
	}

	const downloadingMyCompany = <></>;

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				{myCompany ? (
					<>
						<ManagementWidgetHead myCompany={myCompany} savaConfig={saveConfig} />

						<Line extClass={styles.line} />

						<ManagementWidgetBody myCompany={myCompany} saveConfig={saveConfig} />

						<Line extClass={styles.line} />

						<ManagementWidgetFoot myCompany={myCompany} savaConfig={saveConfig} />
					</>
				) : (
					downloadingMyCompany
				)}
			</div>
		</WidgetWrapper>
	);
};

export default observer(ManagementWidget);
