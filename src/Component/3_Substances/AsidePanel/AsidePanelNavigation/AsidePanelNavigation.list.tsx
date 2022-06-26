import { route } from '../../../../Logic/Modules/Routes/Route.interfaces';
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
import { language } from '../../../../Logic/Modules/Language/Language.interface';
import React, { FC } from 'react';
import { typesUtils } from '../../../../Logic/Libs/Utils/TypesUtils';
import modules from '../../../../Logic/Modules/Modules';

type TBasePropNavigateList = {
	id: string;
	name: language.TAllLanguageWord;
	leftImg?: FC<React.SVGProps<SVGSVGElement>>;
	click?: () => void;
	children?: TNavigateList[];
};

type TNavigateList = typesUtils.OneOfTwo<TBasePropNavigateList, 'children' | 'click'>;

const routerGo = modules.route.service.RouterGo.bind(modules.route.service);

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
					routerGo(route.Name.COMPANY_PERSONNEL, {
						id: modules.users.store.getIdMyCompany,
					}),
			},
			{
				id: '1-2',
				name: language.ELanguageSimpleWord.MANAGEMENT,
				leftImg: IconSettings,
				click: () => routerGo(route.Name.MANAGEMENT),
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
				click: () => routerGo(route.Name.COMPANIES),
			},
			{
				id: '2-2',
				name: language.ELanguageSimpleWord.PRODUCTS,
				leftImg: IconProduct,
				click: () => routerGo(route.Name.IMPORT_PRODUCTS),
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
				click: () => routerGo(route.Name.EXPORT_PRODUCTS),
			},
			{
				id: '3-2',
				name: language.ELanguageSimpleWord.SUPPLIES,
				leftImg: IconAuto,
				click: () => routerGo(route.Name.SUPPLIES),
			},
			{
				id: '3-3',
				name: language.ELanguageSimpleWord.WAREHOUSE,
				leftImg: IconWarehouse,
				click: () => routerGo(route.Name.WAREHOUSE),
			},
			{
				id: '3-4',
				name: language.ELanguageSimpleWord.REQUEST,
				leftImg: IconRequest,
				click: () => routerGo(route.Name.REQUEST),
			},
		],
	},
	{
		id: '4',
		name: language.ELanguageSimpleWord.REPORTS,
		leftImg: IconReports,
		click: () => routerGo(route.Name.REPORTS),
	},
];
