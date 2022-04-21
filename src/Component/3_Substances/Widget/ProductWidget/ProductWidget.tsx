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
import { product } from '../../../../Services/Stores/Products/Products.interface';

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
	}, []);

	const createPropertyForTable: TUnitWidgetTable = {
		head: [
			language.allLanguageWord.PRODUCTS,
			language.allLanguageWord.PRICE,
			language.allLanguageWord.CONVENTIONAL_UNIT,
		],
		body: Object.entries(products || {})?.map((el) => ({
			id: el[0],
			content: [
				<Text key={el[0] + el[1].name} text={el[1].name} />,

				<>
					{el[1].price.map((price) => (
						<div key={price.price + price.currency}>
							<Text text={`${price.price} ${product.OCurrencyIcon[price.currency]}`} />
						</div>
					))}
				</>,

				<Text key={el[0] + el[1].conventionalUnit} text={el[1].conventionalUnit} />,
			],
		})) || [{ content: [<>Не найденно</>], id: '' }],
	};

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				<WidgetHead title={language.allLanguageWord.PRODUCTS} />
				<WidgetBody table={createPropertyForTable} />
			</div>
		</WidgetWrapper>
	);
};

export default observer(ProductWidget);
