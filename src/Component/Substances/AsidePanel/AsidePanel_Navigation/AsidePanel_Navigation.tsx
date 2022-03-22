import React, {FC} from 'react';
import styles from "./AsidePanel_Navigation.module.scss";
import {route} from "../../../../Services/Stores/Routes/Route.interfaces";
import {RequireOnlyOne} from "../../../../Libs/Types/RequireOnlyOne";

type TBasePropNavigateList = {
    id: string;
    name: string;
    link?: route.Name;
    children?: TNavigateList[];
}

type TNavigateList = RequireOnlyOne<TBasePropNavigateList, 'children' | 'link'>


export const navigateList: TNavigateList[] = [
    {
        id: '1',
        name: 'Персонал',
        children: [
            {
                id: '1-1',
                name: 'Сотрудники',
                link: route.Name.ABOUT,
            },
            {
                id: '1-2',
                name: 'Чат c коллегами',
                link: route.Name.ABOUT,
            },
        ]
    },
    {
        id: '2',
        name: 'Поставщики',
        children: [
            {
                id: '2-1',
                name: 'Информация о лицах',
                link: route.Name.ABOUT
            },
            {
                id: '2-2',
                name: 'Чат с поставщиками',
                link: route.Name.ABOUT
            },
        ]
    },
    {
        id: '3',
        name: 'Продукция',
        children: [
            {
                id: '3-1',
                name: 'Склад',
                link: route.Name.ABOUT
            },
            {
                id: '3-2',
                name: 'Поставки',
                link: route.Name.ABOUT
            },
            {
                id: '3-3',
                name: 'Заявки',
                link: route.Name.ABOUT
            },
            {
                id: '3-4',
                name: 'Заявки',
                link: route.Name.ABOUT
            }
        ]

    },
    {
        id: '4',
        name: 'Отчеты',
        link: route.Name.ABOUT
    },
]

/**
 * Навигация для боковой панели
 */
const AsidePanel_Logo: FC = () => {
    return (
        <div className={styles.wrapper}>

        </div>
    );
};

export default AsidePanel_Logo;