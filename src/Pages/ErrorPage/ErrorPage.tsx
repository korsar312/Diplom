import React from 'react';
import {ReactComponent as Icon404} from "./../../Assets/icon/icon_404.svg";
import styles from './ErrorPage.module.scss'

/**
 * Страница с ошибкой перехода
 */
const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <Icon404/>
    </div>
  );
};

export default ErrorPage;