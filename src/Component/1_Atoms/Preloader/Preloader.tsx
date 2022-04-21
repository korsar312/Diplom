import React, { FC } from 'react';
import styles from './Preloader.module.scss';
import ModalWindow from '../../0_Basic/ModalWindow/ModalWindow';

interface IPreloader {
	isShow: boolean;
	extClass?: string;
}

/**
 * Прелаодер
 * @param props.isShow - показ прелоадера
 * @param props.extClass - дополнительный CSS класс
 */
const Preloader: FC<IPreloader> = (props) => {
	const { isShow, extClass = '' } = props;

	return (
		<ModalWindow isShow={isShow} dontUseStyleContent={true}>
			<div className={`${styles.wrapper} ${extClass}`}>
				<div className={styles.preloader} />
			</div>
		</ModalWindow>
	);
};

export default Preloader;
