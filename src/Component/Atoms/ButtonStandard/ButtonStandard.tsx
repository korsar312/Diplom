import React, {FC} from 'react';
import styles from './ButtonStandard.module.scss'
import RestApi from "../../../Services/RestApi/RestApi";

interface IButtonStandard {
    click: () => void
    title?: string
    color?: "red" | "white" | "blue" | "skyBlue"
    extClass?: string
}

/**
 *
 * @param props
 * @constructor
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
    const {click, title, color, extClass = ''} = props

    function clickHandler() {
        RestApi.logAction({element: ButtonStandard.name, action: 'Нажатие', data: props})
        click()
    }

    return (
        <button
            onClick={clickHandler}
            className={`${styles.wrapper} ${color ? styles[`color_${color}`] : ''} ${extClass}`}
        >
            <span className={styles.text}>{title}</span>
        </button>
    );
};

export default ButtonStandard;