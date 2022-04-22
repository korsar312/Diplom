import React, { FC, useContext, useEffect } from 'react';
import styles from './ProductWidget.module.scss';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import { language } from '../../../../Services/Language/Language.interface';
import services from '../../../../Services/Services';
import WidgetBody, { TUnitWidgetTable } from '../../../2_Molecules/Widget/WidgetBody/WidgetBody';
import { PreloaderContext } from '../../../../App';
import WidgetHead from '../../../2_Molecules/Widget/WidgetHead/WidgetHead';
import Text from '../../../0_Basic/Text/Text';
import { observer } from 'mobx-react';

interface IProductWidget {
	extClass?: string;
}

/**
 * Виджет продукта
 * @param props.extClass - дополнительный CSS класс
 */
const ProductWidget: FC<IProductWidget> = (props) => {
	const { extClass = '' } = props;

	const showPreloader = useContext(PreloaderContext);
	const products = services.store.productsStore.getProducts;

	useEffect(() => {
		if (!products) {
			showPreloader.setIsShow(true);

			services.rest.RestApi.getProduct(() => {
				showPreloader.setIsShow(false);
			});
		}
		// eslint-disable-next-line
	}, []);

	const createPropertyForTable: TUnitWidgetTable = {
		head: [
			language.ELanguageSimpleWord.PRODUCTS,
			language.ELanguageSimpleWord.PRICE,
			language.ELanguageSimpleWord.CONVENTIONAL_UNIT,
		],
		body: Object.entries(products || {})?.map((el) => ({
			id: el[0],
			content: [
				<Text key={el[0] + el[1].name} text={el[1].name} />,

				<Text key={el[0] + el[1].conventionalUnit} text={el[1].conventionalUnit} />,
			],
		})) || [{ content: [<>Не найденно</>], id: '' }],
	};

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				<WidgetHead title={language.ELanguageSimpleWord.PRODUCTS} />
				<WidgetBody table={createPropertyForTable} />
			</div>
		</WidgetWrapper>
	);
};

export default observer(ProductWidget);
