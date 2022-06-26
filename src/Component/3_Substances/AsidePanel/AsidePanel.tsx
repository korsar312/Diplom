import React, { FC, useState } from 'react';
import styles from './AsidePanel.module.scss';
import UnitPanel from '../../2_Molecules/UnitPanel/UnitPanel';
import SearchInput from '../../2_Molecules/SearchInput/SearchInput';
import AsidePanelLogo from './AsidePanelLogo/AsidePanelLogo';
import AsidePanelNavigation from './AsidePanelNavigation/AsidePanelNavigation';
import { modals } from '../../../Logic/Modules/Modal/Modal.interface';
import { language } from '../../../Logic/Modules/Language/Language.interface';
import Line from '../../1_Atoms/Line/Line';
import modules from '../../../Logic/Modules/Modules';

interface IAsidePanel {
	extClass?: string;
}

/**
 * Боковая панель
 * @param props.extClass - дополнительный CSS класс
 */
const AsidePanel: FC<IAsidePanel> = (props) => {
	const { extClass } = props;

	const [isShowPanel, setIsShowPanel] = useState(true);
	const [filterLink, setFilterLink] = useState('');

	const person = modules.users.store.getCurrentUser;

	function openModalSettingUser() {
		modules.modal.store.setShowModal(modals.EModal.userSetting, true);
	}

	return (
		<aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>
			<div className={styles.element}>
				<AsidePanelLogo click={() => setIsShowPanel((val) => !val)} isShowPanel={isShowPanel} />
			</div>

			<Line extClass={styles.line} />

			<div className={styles.element}>
				<UnitPanel
					click={openModalSettingUser}
					image={person?.image}
					topText={person ? `${person.name} ${person.surname ?? ''}` : 'Гость'}
					middleText={person?.position}
					bottomText={person?.isOnline ? language.ELanguageSimpleWord.ONLINE : undefined}
				/>
			</div>

			<Line extClass={styles.line} />

			<div className={styles.element}>
				<SearchInput callback={(value) => setFilterLink(value)} />
			</div>

			<Line extClass={styles.line} />

			<nav className={styles.elementHalfPadding}>
				<AsidePanelNavigation filter={filterLink} />
			</nav>
		</aside>
	);
};

export default AsidePanel;
