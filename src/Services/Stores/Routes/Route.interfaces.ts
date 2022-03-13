import {ComponentType, LazyExoticComponent} from "react";

export namespace route {

    export enum Name {
        MAIN = "MAIN",
        ABOUT = "ABOUT",
        ERROR = "ERROR"
    }

    export interface IRoute {
        path: string;
        name: Name;
        element: LazyExoticComponent<ComponentType<any>> | any;
        layout: LazyExoticComponent<ComponentType<any>> | any;
    }
}