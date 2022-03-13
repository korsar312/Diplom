import React from 'react';
import RouteGoService from "../../Services/Stores/Routes/Route.services"
import {route} from "../../Services/Stores/Routes/Route.interfaces";

const AboutPage = () => {
    const toMainPage = () => {
        RouteGoService.RouterGo(route.Name.MAIN, undefined, AboutPage.name)
    }

    return (
        <div>
            <div>AboutPage</div>
            <div onClick={toMainPage}>Main</div>
        </div>
    );
};

export default AboutPage;