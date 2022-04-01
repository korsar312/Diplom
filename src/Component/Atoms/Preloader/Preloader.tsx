import React, {FC} from 'react';
import styles from './Preloader.module.scss'

interface IPreloader {
  isShow: boolean
  extClass?: string
  isFullScreen?: boolean
}

/**
 * Прелаодер
 * @param props.isShow - показ прелоадера
 * @param props.extClass - дополнительный CSS класс
 * @param props.fullScreen - пре
 */
const Preloader: FC<IPreloader> = (props) => {
  const {isShow, extClass = '', isFullScreen = true} = props
  return (
    <div
      className={`${isShow ? '' : styles.PreloaderVisibleOff} ${styles.wrapper} ${extClass} ${isFullScreen ? styles.fullScreen : ''}`}>
      {isFullScreen && <div className={styles.fullScreenBack}/>}
      <div className={`${styles.preloader}`}/>
    </div>
  );
};

export default Preloader;