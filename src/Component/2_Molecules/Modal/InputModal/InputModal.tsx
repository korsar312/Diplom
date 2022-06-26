import React, { FC, useRef } from 'react';
import styles from './InputModal.module.scss';
import ModalWindow from '../../../1_Atoms/ModalWindow/ModalWindow';
import { language } from '../../../../Logic/Modules/Language/Language.interface';
import Text from '../../../0_Basic/Text/Text';
import InputStandard from '../../../1_Atoms/InputStandard/InputStandard';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import API from '../../../../Logic/Api/API';

interface IInputModal {
	title: language.TAllLanguageWord;
	isShow: boolean;
	extClass?: string;
	success?: (value: string) => void;
	onClose?: () => void;
	defaultValue?: string;
	rule?: ((value: string | number) => boolean)[];
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
	const { title, isShow, extClass = '', success, onClose, defaultValue = '', rule } = props;

	const inputValue = useRef(defaultValue);

	function handleSuccess() {
		API.RestApi.logAction({
			element: InputModal.name,
			action: 'Подтверждение',
			data: props,
			comment: `Подтверждение модального окна: ${title}`,
		});

		success?.(inputValue.current);
		onClose?.();
	}

	function handleClose() {
		API.RestApi.logAction({
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

				<InputStandard
					color={'grey'}
					callback={(value) => (inputValue.current = value)}
					defaultValue={defaultValue}
					rule={rule}
				/>

				<div className={styles.btnGroup}>
					<div className={styles.btn}>
						<ButtonStandard
							extClass={styles.btn}
							click={handleClose}
							titleObj={{ text: language.ELanguageSimpleWord.CANCEL }}
							color={'blue'}
						/>
					</div>
					<div className={styles.btn}>
						<ButtonStandard
							extClass={styles.btn}
							color={'green'}
							click={handleSuccess}
							titleObj={{ text: language.ELanguageSimpleWord.CONTINUE }}
						/>
					</div>
				</div>
			</div>
		</ModalWindow>
	);
};

export default InputModal;
