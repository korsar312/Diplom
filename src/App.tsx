import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Stores/Routes/Route.path";
import {RouteActivator} from "./Services/Stores/Routes/RouteActivator";
import AsidePanel from "./Component/Substances/AsidePanel/AsidePanel";

const App = () => {
    return (
        <div id="App">
            <HashRouter>
                <AsidePanel/>
                <RouteActivator/>
                <Suspense fallback={<></>}>
                    <Routes>
                        {routePath.map(({name, element: Element, path, ...rest}) => (
                            <Route
                                path={path}
                                key={name}
                                element={<Element/>}
                                {...rest}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </HashRouter>
        </div>
    );
}

export default App;
