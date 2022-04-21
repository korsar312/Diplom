import React, { FC } from 'react';
import styles from './ManagementWidgetBody.module.scss';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';

interface IManagementWidgetBody {
	myCompany: companies.TCompany;
}

/**
 * Виджет управления компанией (тело)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetBody: FC<IManagementWidgetBody> = (props) => {
	const { myCompany } = props;

	return <div className={styles.wrapper}></div>;
};

export default ManagementWidgetBody;
