import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Stores/Routes/Route.path";
import {RouteActivator} from "./Services/Stores/Routes/RouteActivator";
import AsidePanel from "./Component/Substances/AsidePanel/AsidePanel";
import Header from "./Component/Substances/Header/Header";
import styles from './App.module.scss'
import rootStore from "./Services/Stores/Store";
import {observer} from "mobx-react";
import LoginPage from "./Pages/LoginPage/LoginPage";

const App = () => {
  const theme = rootStore.settingStore.isLightTheme
  const isAuthorized = rootStore.usersStore.isAuthorized

  function isAuthorizedRender() {
    return (<>
      <AsidePanel/>
      <RouteActivator/>
      <div className={styles.content}>
        <Header/>
        <Suspense fallback={<>Прелоадер круть-круть :3</>}>
          <main className={styles.main}>
            <Routes>
              {routePath.filter(route => !route.isPrivate || isAuthorized).map((
                  {name, element: Element, path, ...rest}) => (
                  <Route
                    path={path}
                    key={name}
                    element={<Element/>}
                    {...rest}
                  />
                )
              )}
            </Routes>
          </main>
        </Suspense>
      </div>
    </>)
  }

  return (
    <div id="App" className={theme ? 'light-theme' : 'dark-theme'}>
      <HashRouter>
        <div className={styles.wrapper}>
          {isAuthorized ? isAuthorizedRender() : <LoginPage/>}
        </div>
      </HashRouter>
    </div>
  );
}

export default observer(App);
