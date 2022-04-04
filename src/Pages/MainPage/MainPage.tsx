import React from 'react';
import {route} from "../../Services/Routes/Route.interfaces";
import services from "../../Services/Services";

/**
 * Страница главная
 */
const MainPage = () => {
  const toAboutPage = () => {
    services.route.RouterGo(route.Name.ABOUT, undefined, MainPage.name)
  }

  return (
    <div>
      <div onClick={toAboutPage}>About</div>
    </div>
  );
};

export default MainPage