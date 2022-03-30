import React from 'react';
import RouteGoService from "../../Services/Stores/Routes/Route.services";
import {route} from "../../Services/Stores/Routes/Route.interfaces";
import {observer} from "mobx-react";
import {ReactComponent as IconHome} from "../../Assets/icon/icon_home.svg"
import ButtonStandard from "../../Component/Atoms/ButtonStandard/ButtonStandard";
import DropMenu from "../../Component/Molecules/DropMenu/DropMenu";

const MainPage = () => {
  const toAboutPage = () => {
    RouteGoService.RouterGo(route.Name.ABOUT, undefined, MainPage.name)
  }

  return (
    <div>
      <IconHome/>
      <DropMenu title={'qwe'} children={<><span>qweqwe qweqweqw qwedas</span><span>qweqwe qweqweqw qwedas</span></>}/>
      <ButtonStandard title='Created' color='red' click={() => ''}/>
      <div>MainPage</div>
      <div onClick={toAboutPage}>About</div>
    </div>
  );
};

// TODO убрать обсервек как только он будет использован где-то еще
export default observer(MainPage)