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
import { language } from '../../../../Services/System/Language/Language.interface';
import services from '../../../../Services/Services';
import React, { FC } from 'react';
import { types } from '../../../../Types/Types';

type TBasePropNavigateList = {
	id: string;
	name: language.TAllLanguageWord;
	leftImg?: FC<React.SVGProps<SVGSVGElement>>;
	click?: () => void;
	children?: TNavigateList[];
};

type TNavigateList = types.OneOfTwo<TBasePropNavigateList, 'children' | 'click'>;

export const navLink: TNavigateList[] = [
	{
		id: '1',
		name: language.ELanguageSimpleWord.MY_COMPANY,
		leftImg: IconCompany,
		children: [
			{
				id: '1-1',
				name: language.ELanguageSimpleWord.COOPERATOR,
				leftImg: IconPersons,
				click: () =>
					services.route.RouterGo(route.Name.COMPANY_PERSONNEL, {
						id: services.store.usersStore.getIdMyCompany,
					}),
			},
			{
				id: '1-2',
				name: language.ELanguageSimpleWord.MANAGEMENT,
				leftImg: IconSettings,
				click: () => services.route.RouterGo(route.Name.MANAGEMENT),
			},
		],
	},
	{
		id: '2',
		name: language.ELanguageSimpleWord.IMPORT,
		leftImg: IconImport,
		children: [
			{
				id: '2-1',
				name: language.ELanguageSimpleWord.COMPANIES,
				leftImg: IconInform,
				click: () => services.route.RouterGo(route.Name.COMPANIES),
			},
			{
				id: '2-2',
				name: language.ELanguageSimpleWord.PRODUCTS,
				leftImg: IconProduct,
				click: () => services.route.RouterGo(route.Name.IMPORT_PRODUCTS),
			},
		],
	},
	{
		id: '3',
		name: language.ELanguageSimpleWord.EXPORT,
		leftImg: IconExport,
		children: [
			{
				id: '3-1',
				name: language.ELanguageSimpleWord.PRODUCTS,
				leftImg: IconProduct,
				click: () => services.route.RouterGo(route.Name.EXPORT_PRODUCTS),
			},
			{
				id: '3-2',
				name: language.ELanguageSimpleWord.SUPPLIES,
				leftImg: IconAuto,
				click: () => services.route.RouterGo(route.Name.SUPPLIES),
			},
			{
				id: '3-3',
				name: language.ELanguageSimpleWord.WAREHOUSE,
				leftImg: IconWarehouse,
				click: () => services.route.RouterGo(route.Name.WAREHOUSE),
			},
			{
				id: '3-4',
				name: language.ELanguageSimpleWord.REQUEST,
				leftImg: IconRequest,
				click: () => services.route.RouterGo(route.Name.REQUEST),
			},
		],
	},
	{
		id: '4',
		name: language.ELanguageSimpleWord.REPORTS,
		leftImg: IconReports,
		click: () => services.route.RouterGo(route.Name.REPORTS),
	},
];
