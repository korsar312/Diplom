import React, { FC } from 'react';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import styles from './ExportWidget.module.scss';
import Text from '../../../0_Basic/Text/Text';
import { language } from '../../../../Services/Language/Language.interface';
import services from '../../../../Services/Services';
import { observer } from 'mobx-react';
import CardProduct from '../../../2_Molecules/CardProduct/CardProduct';
import ContentWrapper from '../../../0_Basic/ContentWrapper/ContentWrapper';

interface IExportWidget {
	extClass?: string;
}

/**
 * Виджет управления своей продукцией
 * @param props.extClass - дополнительный CSS класс
 */
const ExportWidget: FC<IExportWidget> = (props) => {
	const {extClass = ''} = props;

	const allProducts = services.store.productsStore.getProducts || {};
	const myProducts = services.store.companyStore.getMyCompany;

	// const btnGroup = [
	// 	{
	// 		func: addExport,
	// 		title: 'asd'
	// 	},
	// 	{
	// 		func: removeExport,
	// 		title: 'asd'
	// 	},
	// 	{
	// 		func: setAmountExport,
	// 		title: 'asd'
	// 	},
	// ]

	// function addExport() {
	//
	// }
	//
	// function removeExport() {
	//
	// }
	//
	// function setAmountExport() {
	//
	// }


	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
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
								{myProducts?.allProducts.map((item) => (
									<CardProduct product={allProducts[item]}/>
								))}
							</>
						</ContentWrapper>

						<ContentWrapper color={'grey'} extClass={styles.field}>
							<>
								{myProducts?.exportProduct.map((item) => (
									<CardProduct product={allProducts[item]}/>
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
