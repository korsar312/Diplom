import React, { FC, useContext, useEffect } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import { observer } from 'mobx-react';
import ManagementWidgetHead from './ManagementWidgetHead/ManagementWidgetHead';
import ManagementWidgetBody from './ManagementWidgetBody/ManagementWidgetBody';
import ManagementWidgetFoot from './ManagementWidgetFoot/ManagementWidgetFoot';
import { typesUtils } from '../../../../Logic/Libs/Utils/TypesUtils';
import { companies } from '../../../../Logic/Modules/Companies/Companies.interface';
import { PreloaderContext } from '../../../../App';
import modules from '../../../../Logic/Modules/Modules';

interface IManagementWidget {
	extClass?: string;
}

/**
 * Виджет управления компанией
 * @param props.extClass - дополнительный CSS класс
 */
const ManagementWidget: FC<IManagementWidget> = (props) => {
	const { extClass = '' } = props;

	const myCompany = modules.companies.store.getMyCompany();
	const preloader = useContext(PreloaderContext);

	useEffect(() => {
		myCompany || modules.companies.service.getMyCompany();
	}, []);

	function changeExist(val: typesUtils.TChangeObject<companies.TCompany>) {
		const keyArr = Object.keys(val) as Array<keyof typeof val>;
		return keyArr.some((el) => {
			return val[el] !== (myCompany && myCompany[el]);
		});
	}

	function saveConfig(val: typesUtils.TChangeObject<companies.TCompany>) {
		if (!changeExist(val)) return;

		if (myCompany) {
			preloader.setIsShow(true);
			modules.companies.service.setMyCompany({ ...myCompany, ...val }).finally(() => {
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
