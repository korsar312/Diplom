import React, { FC, useEffect, useState } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ManagementWidget.module.scss';
import Line from '../../../1_Atoms/Line/Line';
import Avatar from '../../../1_Atoms/Avatar/Avatar';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import Text from '../../../0_Basic/Text/Text';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../Services/Stores/Language/Language.interface';
import InputStandard from '../../../1_Atoms/InputStandard/InputStandard';
import { ReactComponent as IconEdit } from './../../../../Assets/icon/icon_edit.svg';

interface IManagementWidget {
	extClass?: string;
}

/**
 * Виджет управления компанией
 * @param props.extClass - дополнительный CSS класс
 */

const ManagementWidget: FC<IManagementWidget> = (props) => {
	const { extClass = '' } = props;

	const [isEditField, setIsEditField] = useState({
		title: false,
		subtitle: false,
	});

	const myCompany = services.store.companyStore.getMyCompany;

	useEffect(() => {
		myCompany || services.rest.RestApi.getMyCompany();
	}, []);

	function handleEditSuccess() {
		setIsEditField({ ...isEditField, title: !isEditField.title });
	}

	const downloadingMyCompany = <></>;

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				{myCompany ? (
					<>
						<div className={styles.head}>
							<div>
								<Avatar size={'big'} circle={'full'} isBorder={true}>
									<>
										<img src={myCompany.avatar} />
										<ButtonStandard
											title={language.allLanguageWord.CHOOSE_LOGO}
											textStyle={'normal_small'}
											click={() => ''}
											color={'black'}
											extClass={styles.btn}
										/>
									</>
								</Avatar>
							</div>
							<div className={styles.namingCompany}>
								<div className={styles.title}>
									<div onClick={handleEditSuccess}>
										<IconEdit />
									</div>
									{isEditField.title ? (
										<InputStandard
											extClass={styles.input}
											callback={(val) => ''}
											defaultValue={myCompany.name}
										/>
									) : (
										<Text userStyle={'fat_extraBig'} text={myCompany.name} />
									)}
								</div>
								<div className={styles.subtitle}>
									<div onClick={handleEditSuccess}>
										<IconEdit />
									</div>
									{isEditField.subtitle ? (
										<InputStandard callback={(val) => ''} defaultValue={myCompany.subtitle} />
									) : (
										<Text userStyle={'standard'} text={myCompany.subtitle || ''} />
									)}
								</div>
							</div>
						</div>

						<Line extClass={styles.line} />

						<div className={styles.body}></div>

						<Line extClass={styles.line} />

						<div className={styles.foot}></div>
					</>
				) : (
					downloadingMyCompany
				)}
			</div>
		</WidgetWrapper>
	);
};

export default observer(ManagementWidget);
