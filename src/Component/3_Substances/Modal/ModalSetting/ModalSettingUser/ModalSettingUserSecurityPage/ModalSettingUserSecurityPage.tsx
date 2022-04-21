import React, { FC, useState } from 'react';
import styles from './ModalSettingUserSecurityPage.module.scss';
import ButtonStandard from '../../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { ReactComponent as IconTune } from '../../../../../../Assets/icon/icon_tune.svg';

interface IModalSettingUserSecurityPage {
	extClass?: string;
}

/**
 * Страница настроек безопасности в меню настроек пользователя
 * @param props.extClass - дополнительный CSS класс
 */
const ModalSettingUserSecurityPage: FC<IModalSettingUserSecurityPage> = (props) => {
	const { extClass = '' } = props;

	const [isShowChangeMenu, setIsShowChangeMenu] = useState(false);

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
			<ButtonStandard click={() => setIsShowChangeMenu(true)} iconLeft={{ icon: IconTune }} isHover={true} />
		</div>
	);
};

export default ModalSettingUserSecurityPage;
