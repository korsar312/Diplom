import { route } from '../Route.interfaces';
import { lazy } from 'react';

const CooperatorPage = lazy(() => import('../../../../Pages/CooperatorPage/CooperatorPage'));
const PersonPage = lazy(() => import('../../../../Pages/PersonPage/PersonPage'));
const ChatPage = lazy(() => import('../../../../Pages/ChatPage/ChatPage'));
const ManagementPage = lazy(() => import('../../../../Pages/ManagementPage/ManagementPage'));
const CompaniesPage = lazy(() => import('../../../../Pages/CompaniesPage/CompaniesPage'));
const ImportProductPage = lazy(() => import('../../../../Pages/ImportProductPage/ImportProductPage'));
const ExportProductPage = lazy(() => import('../../../../Pages/ExportProductPage/ExportProductPage'));
const SuppliesPage = lazy(() => import('../../../../Pages/SuppliesPage/SuppliesPage'));
const WarehousePage = lazy(() => import('../../../../Pages/WarehousePage/WarehousePage'));
const RequestPage = lazy(() => import('../../../../Pages/RequestPage/RequestPage'));
const ReportPage = lazy(() => import('../../../../Pages/ReportPage/ReportPage'));

const MainPage = lazy(() => import('../../../../Pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('../../../../Pages/AboutPage/AboutPage'));
const ErrorPage = lazy(() => import('../../../../Pages/ErrorPage/ErrorPage'));

export const routePath: route.IRoute[] = [
	{
		path: '/cooperator',
		name: route.Name.COMPANY_PERSONNEL,
		element: CooperatorPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/person/:id',
		name: route.Name.PERSON,
		element: PersonPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/chat',
		name: route.Name.CHAT,
		element: ChatPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/management',
		name: route.Name.MANAGEMENT,
		element: ManagementPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/companies',
		name: route.Name.COMPANIES,
		element: CompaniesPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/products/import',
		name: route.Name.IMPORT_PRODUCTS,
		element: ImportProductPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/products/export',
		name: route.Name.EXPORT_PRODUCTS,
		element: ExportProductPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/supplies',
		name: route.Name.SUPPLIES,
		element: SuppliesPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/warehouse',
		name: route.Name.WAREHOUSE,
		element: WarehousePage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/request',
		name: route.Name.REQUEST,
		element: RequestPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/reports',
		name: route.Name.REPORTS,
		element: ReportPage,
		layout: '',
		isPrivate: true,
	},

	{
		path: '/',
		name: route.Name.MAIN,
		element: MainPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '/about',
		name: route.Name.ABOUT,
		element: AboutPage,
		layout: '',
		isPrivate: true,
	},
	{
		path: '*',
		name: route.Name.ERROR,
		element: ErrorPage,
		layout: '',
	},
];

export const getRoutes = () => routePath;
