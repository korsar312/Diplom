import React, { FC, useState } from 'react';
import services from '../../../../../Services/Services';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';
import ModalWindow from '../../../../1_Atoms/ModalWindow/ModalWindow';
import styles from './CreateExportProductModal.module.scss';
import { language } from '../../../../../Services/System/Language/Language.interface';
import InputStandard from '../../../../1_Atoms/InputStandard/InputStandard';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import Text from '../../../../0_Basic/Text/Text';
import { currency } from '../../../../../Services/System/Currency/Currency.interface';
import DropMenu from '../../../../2_Molecules/DropMenu/DropMenu';

interface ICreateExportProductModal {
	isShow: boolean;
	extClass?: string;
	success?: (exportProduct: companies.TExportProduct) => void;
	onClose: () => void;
	idProduct: companies.TExportProduct['idProduct'];
}

const ruleForAmount = [(val: string | number) => !isNaN(Number(val))];

/**
 * Модальное окно для добавления товара для экспорта
 * @param props.isShow - показ модального окно
 * @param props.extClass - дополнительный CSS класс
 * @param props.success - функция при нажатии на 'продолжить'
 * @param props.onClose - закрыть модальное окно
 * @param props.idProduct - id продукта
 */
const CreateExportProductModal: FC<ICreateExportProductModal> = (props) => {
	const { isShow, extClass = '', success, onClose, idProduct } = props;

	const [formValue, setFormValue] = useState({
		amount: '',
		amountExport: 0,
		currency: currency.ECurrency.RUBLE,
	});

	function handleSuccess() {
		services.rest.RestApi.logAction({
			element: CreateExportProductModal.name,
			action: 'Подтверждение',
			data: props,
			comment: `Подтверждение модального окна создание объекта экспорта`,
		});

		success?.(createExportProduct());
		onClose?.();
	}

	function createExportProduct(): companies.TExportProduct {
		return {
			idProduct,
			amountExport: Number(formValue.amount),
			price: {
				RUBLE: {
					amount: Number(formValue.amount),
					currency: 'RUBLE',
				},
			},
		};
	}

	function handleClose() {
		services.rest.RestApi.logAction({
			element: CreateExportProductModal.name,
			action: 'Отмена',
			data: props,
			comment: `Отмена модального окна создание объекта экспорта `,
		});

		onClose?.();
	}

	return (
		<ModalWindow isShow={isShow} click={onClose}>
			<div className={`${styles.wrapper} ${extClass}`}>
				<div className={styles.title}>
					<Text text={language.ELanguageSimpleWord.ENTER_THE_NUMBER_EXPORT_PRODUCT} />
				</div>

				<div className={styles.content}>
					<InputStandard
						color={'grey'}
						callback={(value) => setFormValue((val) => ({ ...val, amount: value }))}
						rule={ruleForAmount}
						extClass={styles.amount}
					/>
					<DropMenu title={formValue.currency} isAbsolute={true}>
						<div className={styles.currencyGroup}>
							{Object.keys(currency.ECurrency).map((el) => (
								<ButtonStandard
									extClass={styles.currency}
									color={'grey'}
									click={() => ''}
									// @ts-ignore
									titleObj={{ text: language.ELanguageCurrencyWord[el] }}
								/>
							))}
						</div>
					</DropMenu>
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

export default CreateExportProductModal;
