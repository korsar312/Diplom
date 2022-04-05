import React, {FC} from 'react';
import styles from './WidgetBody.module.scss'
import {language} from "../../../Services/Stores/Language/Language.interface";
import Text from "../../0_Basic/Text/Text";

interface IWidgetBody {
  extClass?: string
  table: TUnitWidgetTable
}

export type TUnitWidgetTable = {
  head: language.ELanguageKey[]
  body: TBody[]
}

type TBody = {
  content: JSX.Element[]
}

/**
 * Тело таблица для виджета
 * @param props.extClass - дополнительный CSS класс
 * @param props.table - таблица для рендера
 */
const WidgetBody: FC<IWidgetBody> = (props) => {
  const {extClass = '', table} = props

  const header = table.head.map(el => <div className={styles.sell}>
    <Text
      userStyle={'fat_extraSmall'}
      text={el}
      caseWord={'CAPITAL'}
    />
  </div>)

  const body = table.body.map(el => <div className={styles.row}>{el.content.map(cont => <div
    className={styles.sell}>{cont}</div>)}</div>)

  return <div className={`${styles.wrapper} ${extClass}`}>
    <div className={styles.head}>{header}</div>
    <div className={styles.body}>{body}</div>
  </div>
}

export default WidgetBody;