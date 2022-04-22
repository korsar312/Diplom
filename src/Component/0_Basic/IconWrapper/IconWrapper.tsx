import React, { FC } from 'react';
import styles from './IconWrapper.module.scss';
import services from '../../../Services/Services';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';

interface IIconWrapper {
	extClass?: string;
	Icon: FC<React.SVGProps<SVGSVGElement>>;
	onClick?: () => void;
	log?: rest.TLogAction;
}

/**
 * Обертка для SVG
 * @param props.extClass - дополнительный CSS класс
 * @param props.icon - иконка
 * @param props.onClick - событие клика по иконке
 * @param props.log - логирование
 */
const IconWrapper: FC<IIconWrapper> = (props) => {
	const { extClass = '', Icon, onClick, log } = props;

	function handleClick() {
		services.rest.RestApi.logAction({
			element: IconWrapper.name,
			action: 'Нажатие',
			data: props,
			comment: `клик по иконке ${Icon.name}'}`,
			...log,
		});

		onClick?.();
	}

	return (
		<span onClick={handleClick} className={`${styles.wrapper} ${onClick ? styles.pointer : ''} ${extClass}`}>
			<Icon />
		</span>
	);
};

export default IconWrapper;
