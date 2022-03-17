import React, {FC} from 'react';
import styles from './ButtonStandard.module.scss'
import RestApi from "../../../Services/RestApi/RestApi";
import {rest} from "../../../Services/RestApi/RestApi.interface";

interface IButtonStandard {
    click: () => void
    title?: string
    color?: "red" | "white" | "blue" | "skyBlue"
    extClass?: string
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    log?: rest.TlogAction
}

/**
 * Основная кнопка
 * @param props.click - функция onClick по кнопке
 * @param props.title - функция onClick по кнопке
 * @param props.color - цвет кнопки
 * @param props.extClass - дополнительный CSS класс
 * @param props.iconLeft - иконка для слева
 * @param props.iconRight - иконка для справа
 * @param props.log - логирование
 */
const ButtonStandard: FC<IButtonStandard> = (props) => {
    const {click, title, color, extClass = '', iconLeft, iconRight, log} = props

    function clickHandler() {
        console.log()
        RestApi.logAction({
            element: ButtonStandard.name,
            action: 'Нажатие',
            data: props,
            comment: `кнопка ${title || (iconLeft || iconRight)?.type.render.name || 'не определена'}`,
            ...log,
        })
        click()
    }

    return (
        <button
            onClick={clickHandler}
            className={`${styles.wrapper} ${color ? styles[`color_${color}`] : ''} ${extClass}`}
        >
            {iconLeft}
            <span className={styles.text}>{title}</span>
            {iconRight}
        </button>
    );
};

export default ButtonStandard;