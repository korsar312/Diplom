import React, { FC } from 'react';
import styles from './CardProduct.module.scss';
import { product } from '../../../Services/Stores/Products/Products.interface';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import defaultStyles from '../../../Styles/DefaultStyles/DefaultStyles.module.scss';
import { language } from '../../../Services/Language/Language.interface';
import ButtonStandard from '../../1_Atoms/ButtonStandard/ButtonStandard';
import Text from '../../0_Basic/Text/Text';
import Avatar from '../../1_Atoms/Avatar/Avatar';
import ContentWrapper from '../../0_Basic/ContentWrapper/ContentWrapper';

interface ISearchInput {
	extClass?: string;
	product: product.TProduct;
	color?: defaultStyle.TBackgroundColor;
	btnGroup?: TBtnGroup[];
}

type TBtnGroup = {
	func: () => void;
	title: language.TAllLanguageWord;
	icon: FC<React.SVGProps<SVGSVGElement>>;
};

/**
 * Карточка товара
 * @param props.extClass - дополнительный CSS класс
 * @param props.product - объект продукт
 * @param props.color - цвет карточки
 * @param props.btnGroup - массив кнопок
 */
const CardProduct: FC<ISearchInput> = (props) => {
	const { extClass = '', product, color, btnGroup } = props;

	return (
		<div
			className={`
				${styles.wrapper} 
				${extClass}
				${color ? defaultStyles[`backgroundColor_${color}`] : ''}
			`}>
			<ContentWrapper extClass={styles.content} color={'wight'}>
				<>
					<Avatar circle={'full'}>
						<img src={product.image} alt={'item'} />
					</Avatar>
					<Text text={product.name} />
				</>
			</ContentWrapper>

			<div className={styles.btnGroup}>
				{btnGroup?.map((btn) => (
					<ButtonStandard click={btn.func}>
						<Text text={btn.title} />
					</ButtonStandard>
				))}
			</div>
		</div>
	);
};

export default CardProduct;
