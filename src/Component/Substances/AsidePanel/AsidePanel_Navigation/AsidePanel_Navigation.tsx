import React, {FC} from 'react';
import styles from "./AsidePanel_Navigation.module.scss";
import {route} from "../../../../Services/Stores/Routes/Route.interfaces";
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
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import {RequireOnlyOne} from "../../../../Libs/Types/RequireOnlyOne";
import DropMenu from "../../../Molecules/DropMenu/DropMenu";
import {language} from "../../../../Services/Stores/Language/Language.interface";

type TBasePropNavigateList = {
  id: string;
  name: language.ELanguageKey;
  leftImg?: JSX.Element;
  click?: () => void;
  children?: TNavigateList[];
}

export type TNavigateList = RequireOnlyOne<TBasePropNavigateList, 'children' | 'click'>

const navigateList: TNavigateList[] = [
  {
    id: '1',
    name: language.ELanguageKey.PERSONNEL,
    leftImg: <IconPersons/>,
    children: [
      {
        id: '1-1',
        name: language.ELanguageKey.COOPERATOR,
        leftImg: <IconPerson/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
      {
        id: '1-2',
        name: language.ELanguageKey.CHAT_WITH_COLLEAGUES,
        leftImg: <IconChat/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
    ]
  },
  {
    id: '2',
    name: language.ELanguageKey.SUPPLIERS,
    leftImg: <IconCompany/>,
    children: [
      {
        id: '2-1',
        name: language.ELanguageKey.COMPANY_INFORMATION,
        leftImg: <IconInform/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
      {
        id: '2-2',
        name: language.ELanguageKey.CHAT_WITH_SUPPLIERS,
        leftImg: <IconChat/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
    ]
  },
  {
    id: '3',
    name: language.ELanguageKey.PRODUCTS,
    leftImg: <IconProduct/>,
    children: [
      {
        id: '3-1',
        name: language.ELanguageKey.WAREHOUSE,
        leftImg: <IconWarehouse/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
      {
        id: '3-2',
        name: language.ELanguageKey.SUPPLIERS,
        leftImg: <IconSupplies/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
      {
        id: '3-3',
        name: language.ELanguageKey.REQUEST,
        leftImg: <IconRequest/>,
        click: () => RouteGoService.RouterGo(route.Name.ABOUT),
      },
    ]

  },
  {
    id: '4',
    name: language.ELanguageKey.REPORTS,
    leftImg: <IconReports/>,
    click: () => RouteGoService.RouterGo(route.Name.ABOUT),
  },
]

/**
 * Навигация для боковой панели
 */
const AsidePanel_Navigation: FC = () => {

  function recursRenderButton(navObj: TNavigateList): JSX.Element {
    if (navObj.children) {
      return <React.Fragment key={navObj.id}>
        <DropMenu
          isPaddingOn={true}
          iconLeft={navObj.leftImg}
          title={navObj.name}
          extClass={styles.btn}
        >
          <>{navObj.children.map(el => recursRenderButton(el))}</>
        </DropMenu></React.Fragment>
    } else {
      return <React.Fragment key={navObj.id}>
        <ButtonStandard
          extClass={`${styles.btn}`}
          title={navObj.name}
          click={navObj.click}
          log={{element: AsidePanel_Navigation.name}}
          iconLeft={{icon: navObj.leftImg || undefined}}
        />
      </React.Fragment>
    }
  }

  return (
    <div className={styles.wrapper}>
      {navigateList.map(el => recursRenderButton(el))}
    </div>
  );
};

export default AsidePanel_Navigation;