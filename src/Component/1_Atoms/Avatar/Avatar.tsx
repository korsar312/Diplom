import styles from './Avatar.module.scss';
import React, { FC } from 'react';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import services from '../../../Services/Services';

interface IAvatar {
	click?: () => void;
	log?: rest.TlogAction;
	extClass?: string;
	isBorder?: boolean;
	children: JSX.Element;
	size?: 'big' | 'normal' | 'small';
	circle?: 'none' | 'small' | 'full';
}

/**
 * Портрет
 * @param props.click - функция onClick по кнопке
 * @param props.log - логирование
 * @param props.extClass - дополнительный CSS класс
 * @param props.isBorder - изпользуется ли обводка
 * @param props.children - картинка в JSX
 * @param props.size - размер аватара
 */
const Avatar: FC<IAvatar> = (props) => {
	const {
		click,
		log,
		isBorder,
		extClass = '',
		children,
		size = 'normal',
		circle = 'small',
	} = props;

	function clickHandler() {
		if (!click) return;

		services.rest.RestApi.logAction({
			element: Avatar.name,
			action: 'Нажатие',
			data: props,
			...log,
		});

		click();
	}

	return (
		<div
			onClick={clickHandler}
			className={`
            ${styles.wrapper} 
            ${isBorder ? styles.border : ''}
            ${extClass}
            ${styles[`size_${size}`]}
            ${styles[`circle_${circle}`]}
        `}>
			{children}
		</div>
	);
};

export default Avatar;
