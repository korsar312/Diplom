import React from 'react';
import RouteGoService from "../../Services/Stores/Routes/Route.services";
import {route} from "../../Services/Stores/Routes/Route.interfaces";

/**
 * Страница главная
 */
const MainPage = () => {
  const toAboutPage = () => {
    RouteGoService.RouterGo(route.Name.ABOUT, undefined, MainPage.name)
  }

  return (
    <div>
      <div onClick={toAboutPage}>About</div>
    </div>
  );
};

export default MainPage