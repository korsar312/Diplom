import React, { FC, useRef, useState } from 'react';
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
import { types } from '../../../../../Types/Types';

interface IManagementWidgetHead {
	myCompany: companies.TCompany;
	savaConfig: (val: types.TChangeObject<companies.TCompany>) => void;
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

	const inputValues = useRef<types.TChangeObject<companies.TCompany>>({
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
							title={language.ELanguageSimpleWord.CHOOSE_LOGO}
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
					<div>
						{isEditField.name ? (
							<IconWrapper Icon={IconDone} onClick={() => handleChangeSuccess('name')} />
						) : (
							<IconWrapper Icon={IconEdit} onClick={() => switchEditField('name')} />
						)}
					</div>
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
							<Text userStyle={'fat_extraBig'} text={myCompany.name} />
						</div>
					)}
				</div>
				<div className={styles.subtitle}>
					<div>
						{isEditField.subtitle ? (
							<IconWrapper Icon={IconDone} onClick={() => handleChangeSuccess('subtitle')} />
						) : (
							<IconWrapper Icon={IconEdit} onClick={() => switchEditField('subtitle')} />
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
							<Text userStyle={'standard'} text={myCompany.subtitle || ''} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ManagementWidgetHead;
