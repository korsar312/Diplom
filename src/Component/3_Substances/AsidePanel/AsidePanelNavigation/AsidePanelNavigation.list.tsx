import { route } from '../../../../Services/Routes/Route.interfaces';
import { ReactComponent as IconInform } from '../../../../Assets/icon/icon_inform.svg';
import { ReactComponent as IconCompany } from '../../../../Assets/icon/icon_company.svg';
import { ReactComponent as IconPersons } from '../../../../Assets/icon/icon_persons.svg';
import { ReactComponent as IconWarehouse } from '../../../../Assets/icon/icon_warehouse.svg';
import { ReactComponent as IconProduct } from '../../../../Assets/icon/icon_product.svg';
import { ReactComponent as IconAuto } from '../../../../Assets/icon/icon_auto.svg';
import { ReactComponent as IconRequest } from '../../../../Assets/icon/icon_request.svg';
import { ReactComponent as IconReports } from '../../../../Assets/icon/icon_reports.svg';
import { ReactComponent as IconSettings } from '../../../../Assets/icon/icon_settings.svg';
import { ReactComponent as IconImport } from '../../../../Assets/icon/icon_import.svg';
import { ReactComponent as IconExport } from '../../../../Assets/icon/icon_export.svg';

import { language } from '../../../../Services/Stores/Language/Language.interface';
import services from '../../../../Services/Services';
import { OneOfTwo } from '../../../../Types/Types';

type TBasePropNavigateList = {
	id: string;
	name: language.ELanguageKey;
	leftImg?: JSX.Element;
	click?: () => void;
	children?: TNavigateList[];
};

type TNavigateList = OneOfTwo<TBasePropNavigateList, 'children' | 'click'>;

export const navLink: TNavigateList[] = [
	{
		id: '1',
		name: language.ELanguageKey.MY_COMPANY,
		leftImg: <IconCompany />,
		children: [
			{
				id: '1-1',
				name: language.ELanguageKey.COOPERATOR,
				leftImg: <IconPersons />,
				click: () =>
					services.route.RouterGo(route.Name.COMPANY_PERSONNEL, {
						id: services.store.usersStore.getIdMyCompany,
					}),
			},
			{
				id: '1-2',
				name: language.ELanguageKey.MANAGEMENT,
				leftImg: <IconSettings />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
		],
	},
	{
		id: '2',
		name: language.ELanguageKey.IMPORT,
		leftImg: <IconImport />,
		children: [
			{
				id: '2-1',
				name: language.ELanguageKey.COMPANIES,
				leftImg: <IconInform />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
			{
				id: '2-2',
				name: language.ELanguageKey.PRODUCTS,
				leftImg: <IconProduct />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
		],
	},
	{
		id: '3',
		name: language.ELanguageKey.EXPORT,
		leftImg: <IconExport />,
		children: [
			{
				id: '3-1',
				name: language.ELanguageKey.PRODUCTS,
				leftImg: <IconProduct />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
			{
				id: '3-2',
				name: language.ELanguageKey.SUPPLIES,
				leftImg: <IconAuto />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
			{
				id: '3-3',
				name: language.ELanguageKey.WAREHOUSE,
				leftImg: <IconWarehouse />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
			{
				id: '3-4',
				name: language.ELanguageKey.REQUEST,
				leftImg: <IconRequest />,
				click: () => services.route.RouterGo(route.Name.ABOUT),
			},
		],
	},
	{
		id: '4',
		name: language.ELanguageKey.REPORTS,
		leftImg: <IconReports />,
		click: () => services.route.RouterGo(route.Name.ABOUT),
	},
];
