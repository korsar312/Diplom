import {route} from "./Route.interfaces";
import {lazy} from "react";

const MainPage = lazy(() => import("../../../Pages/MainPage/MainPage"));
const AboutPage = lazy(() => import("../../../Pages/AboutPage/AboutPage"));
const ErrorPage = lazy(() => import("../../../Pages/ErrorPage/ErrorPage"));

export const routePath: route.IRoute[] = [
    {
        path: "/",
        name: route.Name.MAIN,
        element: MainPage,
        layout: '',
    },
    {
        path: "/about",
        name: route.Name.ABOUT,
        element: AboutPage,
        layout: '',
    },
    {
        path: "*",
        name: route.Name.ERROR,
        element: ErrorPage,
        layout: '',
    },
];

export const getRoutes = () => routePath;
