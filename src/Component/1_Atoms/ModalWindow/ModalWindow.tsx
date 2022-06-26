import React, { FC } from 'react';
import styles from './ModalWindow.module.scss';
import { rest } from '../../../Logic/Api/RestApi/RestApi.interface';
import API from '../../../Logic/Api/API';

interface IModalWindow {
	click?: () => void;
	isShow: boolean;
	extClass?: string;
	children: JSX.Element;
	dontUseStyleContent?: boolean;
	log?: rest.TLogAction;
}

/**
 * Модальное окно
 * @param props.click - функция onClick по пустому пространству
 * @param props.isShow - показ модального окна
 * @param props.extClass - дополнительный CSS класс
 * @param props.children - содержимое модального окна
 * @param props.dontUseStyleContent - не использовать обертку стилей для содержимого модального окна
 * @param props.log - логирование
 */
const ModalWindow: FC<IModalWindow> = (props) => {
	const { click, isShow, extClass = '', children, dontUseStyleContent, log } = props;

	function clickHandler() {
		API.RestApi.logAction({
			element: ModalWindow.name,
			action: 'Нажатие',
			data: props,
			comment: `фон модального окна'}`,
			...log,
		});

		click?.();
	}

	return (
		<div
			onClick={click ? clickHandler : undefined}
			className={`
        ${styles.wrapper}
        ${extClass} 
        ${isShow ? styles.windowOpen : styles.windowClose}
      `}>
			<div onClick={(e) => e.stopPropagation()} className={dontUseStyleContent ? '' : styles.content}>
				{children}
			</div>
		</div>
	);
};

export default ModalWindow;
