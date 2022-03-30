import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Stores/Routes/Route.path";
import {RouteActivator} from "./Services/Stores/Routes/RouteActivator";
import AsidePanel from "./Component/Substances/AsidePanel/AsidePanel";
import Header from "./Component/Substances/Header/Header";
import styles from './App.module.scss'
import rootStore from "./Services/Stores/Store";
import {observer} from "mobx-react";

const App = () => {
  const theme = rootStore.settingStore.isLightTheme

  return (
    <div id="App" className={theme ? 'light-theme' : 'dark-theme'}>
      <HashRouter>
        <div className={styles.wrapper}>
          <AsidePanel/>
          <RouteActivator/>
          <div>
            <Header/>
            <Suspense fallback={<>Прелоадер круть-круть :3</>}>
              <main className={styles.main}>
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

export default observer(App);
