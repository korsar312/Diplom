import React, {FC} from 'react';
import styles from "./AsidePanel_Navigation.module.scss";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import DropMenu from "../../../2_Molecules/DropMenu/DropMenu";
import {navLink, TNavigateList} from "./AsidePanel_Navigation.list";

const navForManager = navLink

/**
 * Навигация для боковой панели
 */
const AsidePanel_Navigation: FC = () => {

  function recursRenderButton(navObj: TNavigateList): JSX.Element {
    if (navObj.children) {
      return <React.Fragment key={navObj.id}>
        <DropMenu
          isPaddingOn={true}
          iconLeft={navObj.leftImg}
          title={navObj.name}
          extClass={styles.btn}
        >
          <>{navObj.children.map(el => recursRenderButton(el))}</>
        </DropMenu></React.Fragment>
    } else {
      return <React.Fragment key={navObj.id}>
        <ButtonStandard
          extClass={`${styles.btn}`}
          textStyle={"light_small"}
          title={navObj.name}
          click={navObj.click}
          log={{element: AsidePanel_Navigation.name}}
          iconLeft={{icon: navObj.leftImg || undefined}}
        />
      </React.Fragment>
    }
  }

  return (
    <div className={styles.wrapper}>
      {navForManager.map(el => recursRenderButton(el))}
    </div>
  );
};

export default AsidePanel_Navigation;