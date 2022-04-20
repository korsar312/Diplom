import React, { FC } from 'react';
import styles from './AsidePanelLogo.module.scss';
import { ReactComponent as IconLogo } from '../../../../Assets/icon/icon_logo.svg';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import { ReactComponent as IconShift } from '../../../../Assets/icon/icon_shift.svg';
import Text from '../../../0_Basic/Text/Text';
import { language } from '../../../../Services/Stores/Language/Language.interface';
import services from '../../../../Services/Services';

interface IAsidePanelLogo {
	click: () => void;
	isShowPanel: boolean;
}

/**
 * Лого для боковой панели
 * @param props.click - функция клина по кнопке
 * @param props.isShowPanel - статус скрытности боковой панели
 */
const AsidePanelLogo: FC<IAsidePanelLogo> = (props) => {
	const { click, isShowPanel } = props;

	function changeLanguage() {
		services.store.languageStore.getCurrentLanguage === language.ELanguageType.RU
			? (services.store.languageStore.setCurrentLanguage = language.ELanguageType.EN)
			: (services.store.languageStore.setCurrentLanguage = language.ELanguageType.RU);
	}

	return (
		<div className={styles.wrapper}>
			<figure onClick={changeLanguage} className={styles.logo}>
				<IconLogo />
				<figcaption>
					<Text userStyle={'fat_big'} text={language.allLanguageWord.METEOR} />
				</figcaption>
			</figure>
			<div className={`${styles.logoWrapperBtn} ${isShowPanel ? '' : styles.logoWrapperBtnOn}`}>
				<ButtonStandard
					click={click}
					isNoPadding={true}
					iconLeft={{ icon: <IconShift /> }}
					log={{ element: AsidePanelLogo.name }}
				/>
			</div>
		</div>
	);
};

export default AsidePanelLogo;
