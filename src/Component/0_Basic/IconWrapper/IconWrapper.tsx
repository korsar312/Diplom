import React, { FC } from 'react';
import styles from './IconWrapper.module.scss';

interface IIconWrapper {
	extClass?: string;
	Icon: FC<React.SVGProps<SVGSVGElement>>;
}

/**
 * Обертка для SVG
 * @param props.extClass - дополнительный CSS класс
 * @param props.icon - иконка
 */
const ModalWindow: FC<IIconWrapper> = (props) => {
	const { extClass = '', Icon } = props;

	return (
		<span className={`${styles.wrapper} ${extClass}`}>
			<Icon />
		</span>
	);
};

export default ModalWindow;
