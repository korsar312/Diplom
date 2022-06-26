import React, { FC } from 'react';
import styles from './ManagementWidgetFoot.module.scss';
import { companies } from '../../../../../Logic/Modules/Companies/Companies.interface';
import { typesUtils } from '../../../../../Logic/Libs/Utils/TypesUtils';

interface IManagementWidgetFoot {
	myCompany: companies.TCompany;
	savaConfig: (val: typesUtils.TChangeObject<companies.TCompany>) => void;
}

/**
 * Виджет управления компанией (ноги)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetFoot: FC<IManagementWidgetFoot> = (props) => {
	const { myCompany } = props;

	return <div className={styles.wrapper}>{myCompany.name}</div>;
};

export default ManagementWidgetFoot;
