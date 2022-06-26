import React, { Suspense } from 'react';
import AsidePanel from '../Component/3_Substances/AsidePanel/AsidePanel';
import { RouteActivator } from '../Logic/Modules/Routes/RouteActivator';
import styles from './BaseLayout.module.scss';
import Header from '../Component/3_Substances/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { routePath } from '../Logic/Modules/Routes/Path/Route.path';
import modules from '../Logic/Modules/Modules';
import ModalActivator from '../Logic/Modules/Modal/ModalActivator';

const BaseLayout = () => {
	const isAuthorized = modules.users.store.isAuthorized;

	return (
		<>
			<RouteActivator />
			<ModalActivator />

			<AsidePanel />
			<div className={styles.content}>
				<Header />
				<Suspense fallback={''}>
					<main>
						<Routes>
							{routePath
								.filter((route) => !route.isPrivate || isAuthorized)
								.map(({ name, element: Element, path, ...rest }) => (
									<Route path={path} key={name} element={<Element />} {...rest} />
								))}
						</Routes>
					</main>
				</Suspense>
			</div>
		</>
	);
};

export default BaseLayout;
