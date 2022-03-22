import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Stores/Routes/Route.path";
import {RouteActivator} from "./Services/Stores/Routes/RouteActivator";
import AsidePanel from "./Component/Substances/AsidePanel/AsidePanel";
import Header from "./Component/Substances/Header/Header";
import styles from './App.module.scss'

const App = () => {
    return (
        <div id="App">
            <HashRouter>
                <div className={styles.wrapper}>
                    <AsidePanel/>
                    <RouteActivator/>
                    <div>
                        <Header/>
                        <Suspense fallback={<>Прелоадер круть-круть :3</>}>
                            <main>
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
                            </main>
                        </Suspense>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
