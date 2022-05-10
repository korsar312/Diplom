import React, { FC } from 'react';
import styles from './InputModal.module.scss';
import ModalWindow from '../../../1_Atoms/ModalWindow/ModalWindow';
import { language } from '../../../../Services/System/Language/Language.interface';
import Text from '../../../0_Basic/Text/Text';
import services from '../../../../Services/Services';

interface IInputModal {
	title?: language.TAllLanguageWord;
	isShow: boolean;
	extClass?: string;
	success?: () => void;
	onClose?: () => void;
}

/**
 * Модальное окно с выбором вариантов
 * @param props.title - письмена сверху
 * @param props.isShow - показ модального окно
 * @param props.extClass - дополнительный CSS класс
 * @param props.success - функция при нажатии на 'продолжить'
 * @param props.onClose - закрыть модальное окно
 */
const InputModal: FC<IInputModal> = (props) => {
	const { title = language.ELanguageSimpleWord.ARE_YOU_SURE_KA, isShow, extClass = '', success, onClose } = props;

	function handleSuccess() {
		services.rest.RestApi.logAction({
			element: InputModal.name,
			action: 'Подтверждение',
			data: props,
			comment: `Подтверждение модального окна: ${title}`,
		});

		success?.();
		onClose?.();
	}

	function handleClose() {
		services.rest.RestApi.logAction({
			element: InputModal.name,
			action: 'Отмена',
			data: props,
			comment: `Отмена модального окна: ${title}`,
		});

		onClose?.();
	}

	return (
		<ModalWindow isShow={isShow} click={onClose}>
			<div className={`${styles.wrapper} ${extClass}`}>
				<div className={styles.title}>
					<Text text={title} />
				</div>
				<div className={styles.btnGroup}>
					<div className={styles.btn}>{/*<InputStandard callback={}*/}</div>
				</div>
			</div>
		</ModalWindow>
	);
};

export default InputModal;
