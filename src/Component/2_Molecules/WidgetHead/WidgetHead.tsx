import React, {FC} from "react";
import styles from './WidgetHead.module.scss'
import {language} from "../../../Services/Stores/Language/Language.interface";
import Text from "../../0_Basic/Text/Text";

interface IWidgetHead {
  extClass?: string
  title: language.ELanguageKey
  subtitle?: language.ELanguageKey
  extBtn?: JSX.Element
}

/**
 * Голова для виджета
 * @param props.extClass - дополнительный CSS класс
 * @param props.title - Имя виджета
 * @param props.subtitle - Информация под именем виджета
 * @param props.extBtn - Кнопки виджета
 */
const WidgetHead: FC<IWidgetHead> = (props) => {
  const {extClass = '', title, subtitle, extBtn} = props
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}><Text text={title}/></div>
        {subtitle && <div className={styles.subtitle}><Text text={subtitle}/></div>}
      </div>
      <div className={styles.btn}>
        {extBtn}
      </div>
    </div>
  );
};

export default WidgetHead;