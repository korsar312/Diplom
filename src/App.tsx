import React, { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { observer } from 'mobx-react';
import LoginPage from './Pages/LoginPage/LoginPage';
import Preloader from './Component/2_Molecules/Preloader/Preloader';
import modules from './Logic/Modules/Modules';
import BaseLayout from './Layouts/BaseLayout';

type TPreloaderContext = {
	isShow: boolean;
	setIsShow: (val: boolean) => void;
};

export const PreloaderContext = React.createContext<TPreloaderContext>({
	isShow: false,
	setIsShow: () => '',
});

const App = () => {
	const isAuthorized = modules.users.store.isAuthorized;
	const [isAutoSingIn, setIsAutoSingIn] = useState(modules.users.service.IsAutoSingIn());

	const theme = modules.settings.store.isLightTheme;

	const [isShowPreloader, setIsShopPreloader] = useState(false);

	useEffect(() => {
		autoLogin();
	}, []);

	function autoLogin() {
		if (!isAutoSingIn) return;

		const { login, password } = modules.users.service.GetInputDataUser();

		if (login) {
			modules.users.service.Login(login, password).catch(() => {
				modules.users.service.DisabledAutoSingIn();
				setIsAutoSingIn(false);
			});
		}
	}

	const valuePreloaderContext: TPreloaderContext = {
		setIsShow: setIsShopPreloader,
		isShow: isShowPreloader,
	};

	return (
		<div id="App" className={theme ? 'light-theme' : 'dark-theme'}>
			<PreloaderContext.Provider value={valuePreloaderContext}>
				<HashRouter>
					<div className={styles.wrapper}>
						{isAuthorized ? <BaseLayout /> : isAutoSingIn ? null : <LoginPage />}
					</div>
				</HashRouter>
				<Preloader isShow={isShowPreloader} />
			</PreloaderContext.Provider>
		</div>
	);
};

export default observer(App);
