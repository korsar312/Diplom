import React, {FC} from 'react';
import styles from './AsidePanel.module.scss'
import UserPanel from "../../Molecules/UserPanel/UserPanel";
import {ReactComponent as IconLogo} from "../../../Assets/icon/icon_logo.svg";

interface IAsidePanel {
    isShowPanel: boolean
    extClass?: string
}

/**
 * Боковая панель
 * @param props.isShowPanel - показывать ли боковую панель
 * @param props.extClass - дополнительный CSS класс
 */
const AsidePanel: FC<IAsidePanel> = (props) => {
    const {isShowPanel, extClass} = props

    return (
        <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>
            <div className={styles.element}>
                <figure className={styles.logo}>
                    <IconLogo/>
                    <figcaption>Метеор</figcaption>
                </figure>
                <div>

                </div>
            </div>

            <hr className={styles.line}/>

            <div className={styles.element}>
                <UserPanel click={() => ''}/>
            </div>

            <hr className={styles.line}/>

            <div className={styles.element}>
                поиск
            </div>

            <hr className={styles.line}/>

            <nav className={styles.element}>
                основная часть
            </nav>
        </aside>
    );
};

export default AsidePanel;