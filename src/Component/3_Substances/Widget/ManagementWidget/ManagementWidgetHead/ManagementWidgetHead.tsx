import React, { FC, useRef, useState } from 'react';
import styles from './ManagementWidgetHead.module.scss';
import Avatar from '../../../../1_Atoms/Avatar/Avatar';
import Text from '../../../../0_Basic/Text/Text';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../../Logic/Modules/Language/Language.interface';
import InputStandard from '../../../../1_Atoms/InputStandard/InputStandard';
import { ReactComponent as IconEdit } from './../../../../../Assets/icon/icon_edit.svg';
import { ReactComponent as IconDone } from './../../../../../Assets/icon/icon_done.svg';
import { companies } from '../../../../../Logic/Modules/Companies/Companies.interface';
import { typesUtils } from '../../../../../Logic/Libs/Utils/TypesUtils';

interface IManagementWidgetHead {
	myCompany: companies.TCompany;
	savaConfig: (val: typesUtils.TChangeObject<companies.TCompany>) => void;
}

/**
 * Виджет управления компанией (голова)
 * @param props.myCompany - коипания юзера
 */
const ManagementWidgetHead: FC<IManagementWidgetHead> = (props) => {
	const { myCompany, savaConfig } = props;

	const [isEditField, setIsEditField] = useState({
		name: false,
		subtitle: false,
	});

	const inputValues = useRef<typesUtils.TChangeObject<companies.TCompany>>({
		name: myCompany.name,
		subtitle: myCompany.subtitle,
	});

	function handleChangeSuccess(val: keyof typeof isEditField) {
		switchEditField(val);
		savaConfig({ ...inputValues.current });
	}

	function switchEditField(val: keyof typeof isEditField) {
		setIsEditField({ ...isEditField, [val]: !isEditField[val] });
	}

	return (
		<div className={styles.wrapper}>
			<div>
				<Avatar size={'big'} circle={'full'} isBorder={true}>
					<>
						<img src={myCompany.avatar} alt={'Avatar'} />
						<ButtonStandard
							click={() => ''}
							color={'black'}
							extClass={styles.btn}
							titleObj={{
								text: language.ELanguageSimpleWord.CHOOSE_LOGO,
								userStyle: 'normal_small',
							}}
						/>
					</>
				</Avatar>
			</div>
			<div className={styles.namingCompany}>
				<div className={styles.nameRow}>
					{isEditField.name ? (
						<ButtonStandard
							isNoPadding={true}
							click={() => handleChangeSuccess('name')}
							iconLeft={{ icon: IconDone }}
							log={{ element: ManagementWidgetHead.name }}
						/>
					) : (
						<ButtonStandard
							isNoPadding={true}
							click={() => switchEditField('name')}
							iconLeft={{ icon: IconEdit }}
							log={{ element: ManagementWidgetHead.name }}
						/>
					)}
					{isEditField.name ? (
						<InputStandard
							callback={(val) => (inputValues.current.name = val)}
							defaultValue={inputValues.current.name}
							extClass={styles.input}
							textStyle={'fat_extraBig'}
							color={'grey'}
						/>
					) : (
						<div className={styles.titleWrapper}>
							<Text userStyle={'fat_extraBig'} text={inputValues.current.name || ''} />
						</div>
					)}
				</div>
				<div className={styles.nameRow}>
					<div>
						{isEditField.subtitle ? (
							<ButtonStandard
								isNoPadding={true}
								click={() => handleChangeSuccess('subtitle')}
								iconLeft={{ icon: IconDone }}
								log={{ element: ManagementWidgetHead.name }}
							/>
						) : (
							<ButtonStandard
								isNoPadding={true}
								click={() => switchEditField('subtitle')}
								iconLeft={{ icon: IconEdit }}
								log={{ element: ManagementWidgetHead.name }}
							/>
						)}
					</div>
					{isEditField.subtitle ? (
						<InputStandard
							callback={(val) => (inputValues.current.subtitle = val)}
							defaultValue={inputValues.current.subtitle}
							extClass={styles.input}
							textStyle={'standard'}
							color={'grey'}
						/>
					) : (
						<div className={styles.titleWrapper}>
							<Text userStyle={'standard'} text={inputValues.current.subtitle || ''} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ManagementWidgetHead;
