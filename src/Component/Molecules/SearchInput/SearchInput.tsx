import React, {FC} from 'react';
import styles from "./SearchInput.module.scss"
import InputStandard from "../../Atoms/InputStandard/InputStandard";
import {ReactComponent as IconSearch} from "../../../Assets/icon/icon_search.svg";

interface ISearchInput {
    callback: (value: string) => void
    extClass?: string
}

/**
 * Инпут поиска
 * @param props.callback - функция, возвращающая текущее введенное значение
 * @param props.extClass - дополнительный CSS класс
 */
const SearchInput: FC<ISearchInput> = (props) => {
    const {callback, extClass = ''} = props

    return <InputStandard
        callback={callback}
        extClass={`${styles.wrapper} ${extClass}`}
        iconLeft={<IconSearch/>}
        placeholder="Поиск"
        log={{element: SearchInput.name}}
    />
}

export default SearchInput;