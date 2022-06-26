import React, { FC } from 'react';
import styles from './CardProduct.module.scss';
import { product } from '../../../Logic/Modules/Products/Products.interface';
import { defaultStyle } from '../../../Styles/DefaultStyles/DefaultStyles.type';
import Text from '../../0_Basic/Text/Text';
import Avatar from '../../1_Atoms/Avatar/Avatar';
import ContentWrapper from '../../0_Basic/ContentWrapper/ContentWrapper';
import Line from '../../1_Atoms/Line/Line';

interface ISearchInput {
	extClass?: string;
	product: product.TProduct;
	color?: defaultStyle.TBackgroundColor;
	btnGroup?: JSX.Element;
}

/**
 * Карточка товара
 * @param props.extClass - дополнительный CSS класс
 * @param props.product - объект продукт
 * @param props.color - цвет карточки
 * @param props.btnGroup - кнопки
 */
const CardProduct: FC<ISearchInput> = (props) => {
	const { extClass = '', product, color = 'wight', btnGroup } = props;

	return (
		<ContentWrapper extClass={`${styles.wrapper} ${extClass}`} color={color}>
			<>
				<Avatar circle={'full'}>
					<img src={product.image} alt={'item'} />
				</Avatar>

				<Line color={'grey'} width={2} isRadius={true} />

				<div className={styles.textWrapper}>
					<div className={styles.text}>
						<Text text={product.name} />
					</div>
				</div>

				<Line color={'grey'} width={2} isRadius={true} />

				<div>{btnGroup}</div>
			</>
		</ContentWrapper>
	);
};

export default CardProduct;
