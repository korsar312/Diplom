import React, { FC } from 'react';
import styles from './Preloader.module.scss';
import ModalWindow from '../../0_Basic/ModalWindow/ModalWindow';

interface IPreloader {
	isShow: boolean;
	extClass?: string;
	isFullScreen?: boolean;
}

/**
 * Прелаодер
 * @param props.isShow - показ прелоадера
 * @param props.extClass - дополнительный CSS класс
 * @param props.fullScreen - прелаодер на полный экран
 */
const Preloader: FC<IPreloader> = (props) => {
	const { isShow, extClass = '', isFullScreen } = props;

	if (isFullScreen) {
		return (
			<div className={`${styles.wrapper} ${extClass}`}>
				<div className={styles.preloader} />
			</div>
		);
	}

	return (
		<ModalWindow isShow={isShow} dontUseStyleContent={true}>
			<div className={`${styles.wrapper} ${extClass}`}>
				<div className={styles.preloader} />
			</div>
		</ModalWindow>
	);
};

export default Preloader;
