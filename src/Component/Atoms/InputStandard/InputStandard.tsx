import React, {FC, HTMLInputTypeAttribute} from 'react';
import styles from './InputStandard.module.scss'
import RestApi from "../../../Services/RestApi/RestApi";
import {rest} from "../../../Services/RestApi/RestApi.interface";

interface IInput {
    callback: (value: string) => void
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    extClass?: string
    placeholder?: string
    type?: HTMLInputTypeAttribute
    log?: rest.TlogAction
}

/**
 * Основной инпут
 * @param props.callback - функция, возвращающая текущее введенное значение
 * @param props.iconLeft - иконка для левой стороны
 * @param props.iconRight - иконка для правой сторон
 * @param props.extClass - дополнительный CSS класс
 * @param props.placeholder - плейсхолдер
 * @param props.type - тип инпута
 * @param props.log - логирование
 */
const InputStandard: FC<IInput> = (props) => {
    const {callback, iconLeft, iconRight, extClass = '', placeholder, type, log} = props

    function handleChange(event: { target: { value: string; }; }) {
        RestApi.logAction({
            element: InputStandard.name,
            action: 'Ввод',
            data: props,
            comment: `введено ${event.target}`,
            ...log,
        })
        callback(event.target.value);
    }

    function handleIsFocus(focus: boolean) {
        RestApi.logAction({
            element: InputStandard.name,
            action: 'Фокус',
            data: props,
            comment: focus ? "Фокус взят" : "Фокус потерян",
            ...log,
        })
    }

    return (
        <div className={`${styles.wrapper} ${extClass}`}>
            {iconLeft}
            <input
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={() => handleIsFocus(true)}
                onBlur={() => handleIsFocus(false)}
                type={type}
                className={styles.input}
            />
            {iconRight}
        </div>
    );
};

export default InputStandard;