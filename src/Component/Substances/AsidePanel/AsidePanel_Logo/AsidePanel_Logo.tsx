import React, {FC} from 'react';
import styles from "./AsidePanel_Logo.module.scss";
import {ReactComponent as IconLogo} from "../../../../Assets/icon/icon_logo.svg";
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import {ReactComponent as IconShift} from "../../../../Assets/icon/icon_shift.svg";

interface IAsidePanel_Logo {
    setShowPanel: (value: boolean) => void
    isShowPanel: boolean
}

/**
 * Лого для боковой панели
 * @param props.ShowPanel - функция смены скрытности панели
 * @param props.isShowPanel - статус скрытности боковой панели
 */
const AsidePanel_Logo: FC<IAsidePanel_Logo> = (props) => {
    const {setShowPanel, isShowPanel} = props

    return (
        <div className={styles.wrapper}>
            <figure className={styles.logo}>
                <IconLogo/>
                <figcaption>Метеор</figcaption>
            </figure>
            <div className={`${styles.logoWrapperBtn} ${isShowPanel ? '' : styles.logoWrapperBtnOn}`}>
                <ButtonStandard
                    click={() => setShowPanel(!isShowPanel)}
                    isNoPadding={true}
                    iconLeft={<IconShift/>}
                    log={{element: AsidePanel_Logo.name}}
                />
            </div>
        </div>
    );
};

export default AsidePanel_Logo;