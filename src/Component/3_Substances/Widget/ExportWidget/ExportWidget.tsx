import React, { FC, useContext, useState } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ExportWidget.module.scss';
import Text from '../../../0_Basic/Text/Text';
import { language } from '../../../../Services/System/Language/Language.interface';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import CardProduct from '../../../2_Molecules/CardProduct/CardProduct';
import ContentWrapper from '../../../0_Basic/ContentWrapper/ContentWrapper';
import ButtonStandard from '../../../1_Atoms/ButtonStandard/ButtonStandard';
import { ReactComponent as IconAddExport } from '../../../../Assets/icon/icon_auto.svg';
import { ReactComponent as IconRemove } from '../../../../Assets/icon/icon_delete.svg';
import { ReactComponent as IconRemoveExport } from '../../../../Assets/icon/icon_remove.svg';
import { ReactComponent as IconInform } from '../../../../Assets/icon/icon_inform.svg';
import { defaultStyle } from '../../../../Styles/DefaultStyles/DefaultStyles.type';
import { companies } from '../../../../Services/Stores/Companies/Companies.interface';
import { PreloaderContext } from '../../../../App';
import { currency } from '../../../../Services/System/Currency/Currency.interface';
import ChoiceModal from '../../../2_Molecules/Modal/ChoiceModal/ChoiceModal';

interface IExportWidget {
	extClass?: string;
}

type TBtnGroup = {
	[key in EFuncBtn]: TBtnConstructor;
};

enum EFuncBtn {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_IMPORT_ITEM = 'REMOVE_EXPORT_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	SET_IMPORT_QUANTITY = 'SET_IMPORT_QUANTITY',
	INFORM_ITEM_EXPORT = 'INFORM_ITEM_EXPORT',
}

type TBtnConstructor = {
	new(idProduct: string): TBtn;
};

type TBtn = {
	alt: language.TAllLanguageWord;
	func: () => void;
	icon: FC<React.SVGProps<SVGSVGElement>>;
	color: defaultStyle.TBackgroundColor;
};

/**
 * Виджет управления своей продукцией
 * @param props.extClass - дополнительный CSS класс
 */
const ExportWidget: FC<IExportWidget> = (props) => {
	const {extClass = ''} = props;

	const preloader = useContext(PreloaderContext);
	const allProducts = services.store.productsStore.getProducts || {};
	const myCompany = services.store.companyStore.getMyCompany;

	const [modalRemoveProduct, setModalRemoveProduct] = useState<(() => void) | null>(null);

	const BtnGroup: TBtnGroup = {
		ADD_ITEM: function (this: TBtn, idProduct: string) {
			this.alt = language.ELanguageSimpleWord.ADD_PRODUCT_TO_EXPORT;
			this.func = () => {
				if (myCompany) {
					const newProduct: companies.TExportProduct = {
						idProduct,
						price: {
							RUBLE: {
								currency: currency.ECurrency.RUBLE,
							},
						},
					};
					const newProductArr: companies.TExportProduct[] = [...myCompany.exportProduct, newProduct];

					saveCompany({...myCompany, exportProduct: newProductArr});
				}
			};
			this.icon = IconAddExport;
			this.color = 'green';
		} as any as TBtnConstructor,

		REMOVE_EXPORT_ITEM: function (this: TBtn, idProduct: string) {
			this.alt = language.ELanguageSimpleWord.REMOVE_PRODUCT_FROM_EXPORT;
			this.func = () => {
				setModalRemoveProduct(() => {
					if (myCompany) {
						const newProductArr = myCompany.exportProduct.filter((el) => el.idProduct !== idProduct);
						saveCompany({...myCompany, exportProduct: newProductArr});
					}
				});
			};
			this.icon = IconRemoveExport;
			this.color = 'red';
		} as any as TBtnConstructor,

		INFORM_ITEM_EXPORT: function (this: TBtn, idProduct: string) {
			this.alt = language.ELanguageSimpleWord.PRODUCT_INFORM;
			this.func = () => {
				console.log(123);
			};
			this.icon = IconInform;
			this.color = 'blue';
		} as any as TBtnConstructor,

		SET_IMPORT_QUANTITY: function (this: TBtn, idProduct: string) {
			this.alt = language.ELanguageSimpleWord.SET_IMPORT_QUANTITY;
			this.func = () => {
				console.log(123);
			};
			this.icon = IconInform;
			this.color = 'grey';
		} as any as TBtnConstructor,

		REMOVE_ITEM: function (this: TBtn, idProduct: string) {
			this.alt = language.ELanguageSimpleWord.REMOVE_PRODUCT;
			this.func = () => {
				setModalRemoveProduct(() => function () {
					if (myCompany) {
						const newProductArr = myCompany.allProducts.filter((el) => el !== idProduct);
						saveCompany({...myCompany, allProducts: newProductArr});
					}
				});


			};
			this.icon = IconRemove;
			this.color = 'red';
		} as any as TBtnConstructor,
	};

	function saveCompany(myCompany: companies.TCompany) {
		preloader.setIsShow(true);
		services.rest.RestApi.setMyCompany(myCompany, (isOk) => {
			if (isOk) {
				services.store.companyStore.setMyCompany = myCompany;
				preloader.setIsShow(false);
			}
		});
	}

	function createListAllProductBtn(IdProduct: string) {
		const arrBtn: EFuncBtn[] = [];
		const isExport = myCompany?.exportProduct.find((el) => el.idProduct === IdProduct);
		isExport
			? arrBtn.push(EFuncBtn.REMOVE_IMPORT_ITEM, EFuncBtn.INFORM_ITEM_EXPORT)
			: arrBtn.push(EFuncBtn.ADD_ITEM, EFuncBtn.REMOVE_ITEM);

		return renderBtn(arrBtn, IdProduct);
	}

	function createListExportProductBtn(IdProduct: string) {
		const arrBtn: EFuncBtn[] = [
			EFuncBtn.REMOVE_IMPORT_ITEM,
			EFuncBtn.INFORM_ITEM_EXPORT,
			EFuncBtn.SET_IMPORT_QUANTITY,
		];

		return renderBtn(arrBtn, IdProduct);
	}

	function renderBtn(val: EFuncBtn[], idProduct: string) {
		return (
			<div className={styles.btnGroup}>
				{val.map((btn) => {
					const btnGroupElement = new BtnGroup[btn](idProduct);
					return (
						<ButtonStandard
							alt={btnGroupElement.alt}
							key={btnGroupElement.alt}
							color={btnGroupElement.color}
							click={btnGroupElement.func}
							iconRight={{icon: btnGroupElement.icon}}
						/>
					);
				})}
			</div>
		);
	}

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				<ChoiceModal
					success={modalRemoveProduct || undefined}
					isShow={!!modalRemoveProduct}
					onClose={() => setModalRemoveProduct(null)}
				/>

				<div className={styles.title}>
					<Text text={language.ELanguageSimpleWord.EXPORT} userStyle={'fat_extraBig'}/>
				</div>

				<div className={styles.fieldsWrapper}>
					<div className={styles.fieldTitle}>
						<ContentWrapper color={'green'} extClass={styles.titleAllProduct}>
							<Text text={language.ELanguageSimpleWord.COMPANY_PRODUCT} userStyle={'fat_big'}/>
						</ContentWrapper>

						<ContentWrapper color={'blue'} extClass={styles.titleExportProduct}>
							<Text text={language.ELanguageSimpleWord.EXPORT} userStyle={'fat_big'}/>
						</ContentWrapper>
					</div>

					<div className={styles.fieldContent}>
						<ContentWrapper color={'grey'} extClass={styles.field}>
							<>
								{myCompany?.allProducts?.map((item) => (
									<CardProduct
										key={item}
										product={allProducts[item]}
										btnGroup={createListAllProductBtn(item)}
									/>
								))}
							</>
						</ContentWrapper>

						<ContentWrapper color={'grey'} extClass={styles.field}>
							<>
								{myCompany?.exportProduct?.map((item) => (
									<CardProduct
										key={item.idProduct}
										product={allProducts[item.idProduct]}
										btnGroup={createListExportProductBtn(item.idProduct)}
									/>
								))}
							</>
						</ContentWrapper>
					</div>
				</div>
			</div>
		</WidgetWrapper>
	);
};

export default observer(ExportWidget);
