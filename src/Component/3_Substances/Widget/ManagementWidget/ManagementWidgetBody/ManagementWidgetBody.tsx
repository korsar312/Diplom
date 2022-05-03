import React, { FC } from 'react';
import styles from './ManagementWidgetBody.module.scss';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';
import { types } from '../../../../../Types/Types';
import Text from '../../../../0_Basic/Text/Text';
import WidgetWrapper from '../../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../../Services/Language/Language.interface';
import services from '../../../../../Services/Services';
import { observer } from 'mobx-react';
import DropMenu from '../../../../2_Molecules/DropMenu/DropMenu';

interface IManagementWidgetBody {
	myCompany: companies.TCompany;
	saveConfig: (val: types.TChangeObject<companies.TCompany>) => void;
}

/**
 * Виджет управления компанией (тело)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetBody: FC<IManagementWidgetBody> = (props) => {
	const { myCompany } = props;

	function productArr() {
		const allProduct = services.store.productsStore.getProducts;
		if (!allProduct) {
			services.rest.RestApi.getProduct();
		} else {
			return myCompany.allProducts.map((productId) => allProduct[productId]);
		}
		return [];
	}

	return (
		<div className={styles.wrapper}>
			<WidgetWrapper extClass={styles.productFieldWrapper} color={'grey'}>
				<>
					<div className={styles.productWrapper}>
						{productArr().map((product) => (
							<div className={styles.product} key={product.id}>
								<ButtonStandard click={() => ''} color={'wight'}>
									<>
										<div>1</div>
										<div>
											<Text text={product.name} />
										</div>
									</>
								</ButtonStandard>
							</div>
						))}
					</div>
					<div className={styles.productButton}>
						<ButtonStandard click={() => ''} color={'blue'} extClass={styles.btn}>
							<Text text={language.ELanguageSimpleWord.ADD_PRODUCT} userStyle={'fat_small'} />
						</ButtonStandard>
					</div>
				</>
			</WidgetWrapper>
			<div>
				<Text text={myCompany.economyBranch} />
				<DropMenu title={language.ELanguageSimpleWord.ADVANCED_SETTINGS}>
					<div>
						{Object.keys(language.ELanguageEconomyWord).map((el) => (
							<ButtonStandard click={() => ''}>
								<Text text={el} />
							</ButtonStandard>
						))}
					</div>
				</DropMenu>
			</div>
			<div>
				<Text text={myCompany.description} />
			</div>
			<div>
				<Text text={myCompany.personal.join('')} />
			</div>
		</div>
	);
};

export default observer(ManagementWidgetBody);
