import React, {FC} from 'react';
import styles from "./AsidePanel_Navigation.module.scss";
import {route} from "../../../../Services/Stores/Routes/Route.interfaces";
import DropButton, {TNavigateList} from "../../../Molecules/DropButton/DropButton";
import {ReactComponent as IconChat} from "../../../../Assets/icon/icon_chat.svg";
import {ReactComponent as IconInform} from "../../../../Assets/icon/icon_inform.svg";
import {ReactComponent as IconPerson} from "../../../../Assets/icon/icon_person.svg";
import {ReactComponent as IconCompany} from "../../../../Assets/icon/icon_company.svg";
import {ReactComponent as IconPersons} from "../../../../Assets/icon/icon_persons.svg";
import {ReactComponent as IconWarehouse} from "../../../../Assets/icon/icon_warehouse.svg";
import {ReactComponent as IconSupplies} from "../../../../Assets/icon/icon_supplies.svg";
import {ReactComponent as IconRequest} from "../../../../Assets/icon/icon_request.svg";
import {ReactComponent as IconReports} from "../../../../Assets/icon/icon_reports.svg";
import {ReactComponent as IconProduct} from "../../../../Assets/icon/icon_product.svg";


import RouteGoService from "../../../../Services/Stores/Routes/Route.services";


const navigateList: TNavigateList[] = [
    {
        id: '1',
        name: 'Персонал',
        leftImg: <IconPersons/>,
        children: [
            {
                id: '1-1',
                name: 'Сотрудники',
                leftImg: <IconPerson/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
            {
                id: '1-2',
                name: 'Чат c коллегами',
                leftImg: <IconChat/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
        ]
    },
    {
        id: '2',
        name: 'Поставщики',
        leftImg: <IconCompany/>,
        children: [
            {
                id: '2-1',
                name: 'Информация о компаниях',
                leftImg: <IconInform/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
            {
                id: '2-2',
                name: 'Чат с поставщиками',
                leftImg: <IconChat/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
        ]
    },
    {
        id: '3',
        name: 'Продукция',
        leftImg: <IconProduct/>,
        children: [
            {
                id: '3-1',
                name: 'Скasdadasd asdasdasdas sadasdasd asdasлад',
                leftImg: <IconWarehouse/>,
                children: [
                    {
                        id: '3-21',
                        name: 'Склад',
                        leftImg: <IconWarehouse/>,
                        children: [
                            {
                                id: '3-12',
                                name: 'Склад',
                                leftImg: <IconWarehouse/>,
                                children: [
                                    {
                                        id: '3-13',
                                        name: 'Склад',
                                        leftImg: <IconWarehouse/>,
                                        children: [
                                            {
                                                id: '3-14',
                                                name: 'Склад',
                                                leftImg: <IconWarehouse/>,
                                                children: [
                                                    {
                                                        id: '3-15',
                                                        name: 'Склад',
                                                        leftImg: <IconWarehouse/>,
                                                        children: [
                                                            {
                                                                id: '3-16',
                                                                name: 'Склад',
                                                                leftImg: <IconWarehouse/>,
                                                                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
                                                            },
                                                        ]
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                id: '3-2',
                name: 'Поставки',
                leftImg: <IconSupplies/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
            {
                id: '3-3',
                name: 'Заявки',
                leftImg: <IconRequest/>,
                click: () => RouteGoService.RouterGo(route.Name.ABOUT),
            },
        ]

    },
    {
        id: '4',
        name: 'Отчеты',
        leftImg: <IconReports/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
    },
]

/**
 * Навигация для боковой панели
 */
const AsidePanel_Navigation: FC = () => {
    return (
        <div className={styles.wrapper}>
            {navigateList.map(el => (
                <DropButton key={el.id} btnList={el} extClass={styles.dropBtn}/>
            ))}
        </div>
    );
};

export default AsidePanel_Navigation;