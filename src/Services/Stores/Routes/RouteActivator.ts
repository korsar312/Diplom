import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import rootStore from "../Store";

export const RouteActivator = () => {
    const history = useNavigate();

    useEffect(() => {
        rootStore.routeStore.setHistory(history);
        // eslint-disable-next-line
    }, []);

    return null;
};
