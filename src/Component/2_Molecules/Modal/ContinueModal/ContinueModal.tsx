import React, { FC } from 'react';
import styles from './ContinueModal.module.scss';
import ModalWindow from '../../../1_Atoms/ModalWindow/ModalWindow';
import { language } from '../../../../Services/System/Language/Language.interface';
import Text from '../../../0_Basic/Text/Text';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import services from '../../../../Services/Services';

interface IContinueModal {
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
const ContinueModal: FC<IContinueModal> = (props) => {
	const { title = language.ELanguageSimpleWord.ARE_YOU_SURE_KA, isShow, extClass = '', success, onClose } = props;

	function handleSuccess() {
		services.rest.RestApi.logAction({
			element: ContinueModal.name,
			action: 'Подтверждение',
			data: props,
			comment: `Подтверждение модального окна: ${title}`,
		});

		success?.();
		onClose?.();
	}

	function handleClose() {
		services.rest.RestApi.logAction({
			element: ContinueModal.name,
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

export default ContinueModal;
