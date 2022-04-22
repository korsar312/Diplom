import React, { FC } from 'react';
import styles from './ManagementWidgetFoot.module.scss';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';
import { types } from '../../../../../Types/Types';

interface IManagementWidgetFoot {
	myCompany: companies.TCompany;
	savaConfig: (val: types.TChangeObject<companies.TCompany>) => void;
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
