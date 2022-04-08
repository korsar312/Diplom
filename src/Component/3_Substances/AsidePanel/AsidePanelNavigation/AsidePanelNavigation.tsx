import React, {FC} from 'react';
import styles from "./AsidePanelNavigation.module.scss";
import ButtonStandard from "../../../1_Atoms/ButtonStandard/ButtonStandard";
import DropMenu from "../../../2_Molecules/DropMenu/DropMenu";
import {navLink} from "./AsidePanelNavigation.list";

interface IAsidePanelNavigation {
  filter?: string
}

/**
 * Навигация для боковой панели
 * @param props.navigate - объект навигации
 */
const AsidePanelNavigation: FC<IAsidePanelNavigation> = (props) => {
  const {filter = ''} = props

  const navigate = filter ? navLink : navLink

  function recursFilter(obj: typeof navigate): typeof navigate[] {

    return obj.reduce((acc, cur)=>{
      // @ts-ignore
      cur.name.toLowerCase().includes(filter) && acc.push(cur)
      return acc
    },[])
  }


    function recursRenderButton(navObj: typeof navigate[number]): JSX.Element {
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
          log={{element: AsidePanelNavigation.name}}
          iconLeft={{icon: navObj.leftImg || undefined}}
        />
      </React.Fragment>
    }
  }

  return (
    <div className={styles.wrapper}>
      {navigate.map(el => recursRenderButton(el))}
    </div>
  );
};

export default AsidePanelNavigation;