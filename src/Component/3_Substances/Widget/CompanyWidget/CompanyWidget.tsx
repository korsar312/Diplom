import React, {FC} from 'react';
import styles from './CompanyWidget.module.scss'
import WidgetWrapper from "../../../1_Atoms/WidgetWrapper/WidgetWrapper";
import {users} from "../../../../Services/Stores/Users/Users.interface";

interface ICompanyWidget {
  company: users.TCompany
  extClass?: string
}

/**
 * Виджет компаний
 * @param props.company - данные компании
 * @param props.extClass - дополнительный CSS класс
 */
const CompanyWidget: FC<ICompanyWidget> = (props) => {
  const {company, extClass = ''} = props
  return (
    <WidgetWrapper>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <div>титул</div>
            <div>субтитул</div>
          </div>
          <div>
            фильтр поиск и тд
          </div>
        </div>

        <table className={styles.content}>
          <thead className={styles.headTable}>

          </thead>
          <tbody className={styles.bodyTable}>

          </tbody>
        </table>
      </div>

    </WidgetWrapper>
  )
};

export default CompanyWidget;