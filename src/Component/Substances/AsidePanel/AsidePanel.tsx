import React, {FC, useState} from 'react';
import styles from './AsidePanel.module.scss'
import UserPanel from "../../Molecules/UserPanel/UserPanel";
import SearchInput from "../../Molecules/SearchInput/SearchInput";
import AsidePanel_Logo from "./AsidePanel_Logo/AsidePanel_Logo";

interface IAsidePanel {
    extClass?: string
}

/**
 * Боковая панель
 * @param props.extClass - дополнительный CSS класс
 */
const AsidePanel: FC<IAsidePanel> = (props) => {
    const {extClass} = props

    const [isShowPanel, setIsShowPanel] = useState(true)

    return (
        <aside className={`${styles.wrapper} ${isShowPanel ? styles.show_on : styles.show_off} ${extClass}`}>

            <div className={styles.element}>
                <AsidePanel_Logo setShowPanel={setIsShowPanel} isShowPanel={isShowPanel}/>
            </div>

            <hr className={styles.line}/>

            <div className={styles.element}>
                <UserPanel click={() => ''}/>
            </div>

            <hr className={styles.line}/>

            <div className={styles.element}>
                <SearchInput callback={(value) => ''}/>
            </div>

            <hr className={styles.line}/>

            <nav className={styles.element}>
                основная часть
            </nav>
        </aside>
    );
};

export default AsidePanel;