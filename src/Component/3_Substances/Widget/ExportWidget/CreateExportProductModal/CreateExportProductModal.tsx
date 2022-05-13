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

type TFormValue = {
	amountExport: null | number;
	inputting: TInputting[];
};

type TInputting = {
	id: number;
	price: null | number;
	currency: currency.ECurrency;
};

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

	const [formValue, setFormValue] = useState<TFormValue>({
		amountExport: null,
		inputting: [
			{
				id: 1,
				price: null,
				currency: currency.ECurrency.RUBLE,
			},
		],
	});

	function addInputting() {
		setFormValue((val) => {
			return {
				...val,
				inputting: [
					...val.inputting,
					{
						id: new Date().getTime(),
						price: null,
						currency: currency.ECurrency.RUBLE,
					},
				],
			};
		});
	}

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
			amountExport: Number(formValue.amountExport),
			price: formValue.inputting.map((el) => {
				return {
					currency: el.currency,
					price: Number(el.price),
				};
			}),
		};
	}

	function changeProduct<Key extends keyof TInputting>(id: number, property: Key, value: TInputting[Key]) {
		setFormValue((val) => {
			const oldProp = val.inputting.find((el) => el.id === id);
			if (oldProp) {
				oldProp[property] = value;
			}
			return { ...val };
		});
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
					<div className={styles.inputRow}>
						<InputStandard
							color={'grey'}
							callback={(value) => setFormValue((val) => ({ ...val, amountExport: +value }))}
							rule={ruleForAmount}
							extClass={styles.amount}
						/>
					</div>

					{formValue.inputting.map((el) => (
						<div className={styles.inputRow}>
							<InputStandard
								color={'grey'}
								callback={(value) => changeProduct(el.id, 'price', Number(value))}
								rule={ruleForAmount}
								extClass={styles.amount}
							/>
							<DropMenu title={el.currency} isAbsolute={true}>
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
					))}

					<div className={styles.inputRow}>
						<ButtonStandard
							color={'skyBlue'}
							click={addInputting}
							titleObj={{ text: language.ELanguageSimpleWord.ADD_MORE_PRICE }}
							extClass={styles.addBtn}
						/>
					</div>
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
							isDisabled={!formValue.amountExport}
						/>
					</div>
				</div>
			</div>
		</ModalWindow>
	);
};

export default CreateExportProductModal;
