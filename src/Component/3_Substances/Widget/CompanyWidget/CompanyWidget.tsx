import React, { FC } from 'react';
import styles from './CompanyWidget.module.scss';
import WidgetWrapper from '../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import WidgetHead from '../../../2_Molecules/Widget/WidgetHead/WidgetHead';
import { language } from '../../../../Services/Stores/Language/Language.interface';
import { companies } from '../../../../Services/Stores/Companies/Companies.interface';

interface ICompanyWidget {
	company: companies.TCompaniesHashMap;
	extClass?: string;
}

/**
 * Виджет компаний
 * @param props.company - данные компании
 * @param props.extClass - дополнительный CSS класс
 */
const CompanyWidget: FC<ICompanyWidget> = (props) => {
	const { company, extClass = '' } = props;

	// const renderBody: TUnitWidgetTable = {
	//   head: [
	//     language.ELanguageKey.COMPANY,
	//     language.ELanguageKey.PRICE,
	//     language.ELanguageKey.CONVENTIONAL_UNIT,
	//   ],
	//   body: Object.entries(products || {})?.map(el => ({
	//     id: el[0],
	//     content: [
	//       <Text key={el[0] + el[1].name} text={el[1].name}/>,
	//
	//       <>{el[1].price.map(price => (
	//         <div key={price.price + price.currency}>
	//           <Text text={`${price.price} ${product.OCurrencyIcon[price.currency]}`}/>
	//         </div>
	//       ))}</>,
	//
	//       <Text key={el[0] + el[1].conventionalUnit} text={el[1].conventionalUnit}/>,
	//     ]
	//   }))
	// }

	return (
		<WidgetWrapper>
			<div className={`${styles.wrapper} ${extClass}`}>
				<WidgetHead title={language.allLanguageWord.PRODUCTS} />
				{/*<WidgetBody table={}/>*/}
			</div>
		</WidgetWrapper>
	);
};

export default CompanyWidget;
