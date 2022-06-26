import React from 'react';
import {route} from '../../Logic/Modules/Routes/Route.interfaces';
import modules from '../../Logic/Modules/Modules';

/**
 * Страница о проекте
 */
const AboutPage = () => {
	const toMainPage = () => {
		modules.route.service.RouterGo(route.Name.MAIN, undefined, AboutPage.name);
	};

	return (
		<div>
			<div>AboutPage</div>
			<div onClick={toMainPage}>Main</div>
		</div>
	);
};

export default AboutPage;
