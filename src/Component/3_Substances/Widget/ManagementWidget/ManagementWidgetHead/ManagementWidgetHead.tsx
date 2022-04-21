import React, { FC, useState } from 'react';
import styles from './ManagementWidgetHead.module.scss';
import Avatar from '../../../../1_Atoms/Avatar/Avatar';
import Text from '../../../../0_Basic/Text/Text';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../../Services/Language/Language.interface';
import InputStandard from '../../../../1_Atoms/InputStandard/InputStandard';
import { ReactComponent as IconEdit } from './../../../../../Assets/icon/icon_edit.svg';
import { ReactComponent as IconDone } from './../../../../../Assets/icon/icon_done.svg';
import IconWrapper from '../../../../0_Basic/IconWrapper/IconWrapper';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';

interface IManagementWidgetHead {
	myCompany: companies.TCompany;
}

/**
 * Виджет управления компанией (голова)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetHead: FC<IManagementWidgetHead> = (props) => {
	const { myCompany } = props;

	const [isEditField, setIsEditField] = useState({
		title: false,
		subtitle: false,
	});

	function handleEditSuccess(val: keyof typeof isEditField) {
		setIsEditField({ ...isEditField, [val]: !isEditField[val] });
	}

	return (
		<div className={styles.wrapper}>
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
					<div onClick={() => handleEditSuccess('title')}>
						<IconWrapper Icon={isEditField.title ? IconDone : IconEdit} />
					</div>
					{isEditField.title ? (
						<InputStandard
							extClass={styles.input}
							callback={(val) => ''}
							defaultValue={myCompany.name}
							textStyle={'fat_extraBig'}
							color={'grey'}
						/>
					) : (
						<div className={styles.titleWrapper}>
							<Text userStyle={'fat_extraBig'} text={myCompany.name} />
						</div>
					)}
				</div>
				<div className={styles.subtitle}>
					<div onClick={() => handleEditSuccess('subtitle')}>
						<IconWrapper Icon={isEditField.subtitle ? IconDone : IconEdit} />
					</div>
					{isEditField.subtitle ? (
						<InputStandard
							callback={(val) => ''}
							defaultValue={myCompany.subtitle}
							extClass={styles.input}
							textStyle={'standard'}
							color={'grey'}
						/>
					) : (
						<div className={styles.titleWrapper}>
							<Text userStyle={'standard'} text={myCompany.subtitle || ''} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ManagementWidgetHead;
