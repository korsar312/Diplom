import React, {Suspense, useState} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Routes/Route.path";
import {RouteActivator} from "./Services/Routes/RouteActivator";
import AsidePanel from "./Component/3_Substances/AsidePanel/AsidePanel";
import Header from "./Component/3_Substances/Header/Header";
import styles from './App.module.scss'
import {observer} from "mobx-react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import services from "./Services/Services";
import Preloader from "./Component/1_Atoms/Preloader/Preloader";
import ModalActivator from "./Services/Stores/Modal/ModalActivator";

type TPreloaderContext = {
  isShow: boolean
  setIsShow: (val: boolean) => void
}

export const PreloaderContext = React.createContext<TPreloaderContext>({isShow: false, setIsShow: () => ''});

const App = () => {
  const [isShowPreloader, setIsShopPreloader] = useState(false)

  const theme = services.store.settingStore.isLightTheme
  const isEntered = services.store.usersStore.isEntered

  //TODO поменять на с isEntered на isAuthorized
  const isAuthorized = services.store.usersStore.isEntered

  const valuePreloaderContext: TPreloaderContext = {
    setIsShow: setIsShopPreloader,
    isShow: isShowPreloader
  }

  const authorizedRender = <>
    <AsidePanel/>
    <RouteActivator/>
    <div className={styles.content}>
      <Header/>
      <Suspense fallback={''}>
        <main>
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
  </>

  return (
    <div id="App" className={theme ? 'light-theme' : 'dark-theme'}>
      <PreloaderContext.Provider value={valuePreloaderContext}>
        <HashRouter>
          <div className={styles.wrapper}>
            {isEntered ? authorizedRender : <LoginPage/>}
          </div>
        </HashRouter>
        <ModalActivator/>
        <Preloader isShow={isShowPreloader}/>
      </PreloaderContext.Provider>
    </div>
  );
}

export default observer(App);
