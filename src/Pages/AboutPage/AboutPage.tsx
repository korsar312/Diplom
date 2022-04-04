import React from 'react';
import {route} from "../../Services/Routes/Route.interfaces";
import services from "../../Services/Services";

/**
 * Страница о проекте
 */
const AboutPage = () => {
  const toMainPage = () => {
    services.route.RouterGo(route.Name.MAIN, undefined, AboutPage.name)
  }

  return (
    <div>
      <div>AboutPage</div>
      <div onClick={toMainPage}>Main</div>
    </div>
  );
};

export default AboutPage;