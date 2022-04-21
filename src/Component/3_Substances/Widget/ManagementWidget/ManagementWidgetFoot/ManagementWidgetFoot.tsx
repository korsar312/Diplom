import React, { FC } from 'react';
import styles from './ManagementWidgetFoot.module.scss';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';

interface IManagementWidgetFoot {
	myCompany: companies.TCompany;
}

/**
 * Виджет управления компанией (ноги)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetFoot: FC<IManagementWidgetFoot> = (props) => {
	const { myCompany } = props;

	return <div className={styles.wrapper}></div>;
};

export default ManagementWidgetFoot;
