import React from 'react';
import styles from './LoginPage.module.scss';
import {ReactComponent as IconLogo} from '../../Assets/icon/icon_logo.svg';
import {observer} from 'mobx-react';
import LoginForm from '../../Component/3_Substances/Form/LoginForm/LoginForm';
import {language} from '../../Services/Stores/Language/Language.interface';
import Text from '../../Component/0_Basic/Text/Text';

/**
 * Страница с Login формой
 */
const LoginPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.element}>
				<figure className={styles.logo}>
					<IconLogo />
					<figcaption>
						<Text userColor={'red'} userStyle={'fat_extraBig'} text={language.allLanguageWord.METEOR} />
					</figcaption>
				</figure>
			</div>
			<div className={styles.element}>
				<div className={styles.main}>
					<div className={styles.title}>
						<div>
							<Text userStyle={'fat_extraBig'} text={language.allLanguageWord.SING_INING} />
						</div>
						<div>
							<Text userColor={'skyblue'} text={language.allLanguageWord.OR_CREATE_ACC} />
						</div>
					</div>
					<div>
						<LoginForm />
					</div>
				</div>
			</div>
			<div className={styles.element}>
				<div className={styles.footer}>
					<Text userStyle={'fat_small'} text={language.allLanguageWord.COPYRIGHT} />
				</div>
			</div>
		</div>
	);
};

export default observer(LoginPage);
