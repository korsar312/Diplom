import React, { FC, useEffect } from 'react';
import styles from './ManagementWidgetBody.module.scss';
import { companies } from '../../../../../Logic/Modules/Companies/Companies.interface';
import { typesUtils } from '../../../../../Logic/Libs/Utils/TypesUtils';
import Text from '../../../../0_Basic/Text/Text';
import WidgetWrapper from '../../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../../Logic/Modules/Language/Language.interface';
import { observer } from 'mobx-react';
import DropMenu from '../../../../2_Molecules/DropMenu/DropMenu';
import modules from '../../../../../Logic/Modules/Modules';

interface IManagementWidgetBody {
	myCompany: companies.TCompany;
	saveConfig: (val: typesUtils.TChangeObject<companies.TCompany>) => void;
}

/**
 * Виджет управления компанией (тело)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetBody: FC<IManagementWidgetBody> = (props) => {
	const { myCompany } = props;

	const allProductArr = modules.products.store.getProducts();
	const productArr = allProductArr
		? modules.companies.store.getMyCompany()?.allProducts.map((productId: string) => allProductArr[productId])
		: null;

	useEffect(() => {
		if (allProductArr) {
			modules.products.service.getProducts();
		}
	}, []);

	return (
		<div className={styles.wrapper}>
			<WidgetWrapper extClass={styles.productFieldWrapper} color={'grey'}>
				<>
					<div className={styles.productWrapper}>
						{productArr?.map((product) => (
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
						<ButtonStandard
							click={() => ''}
							color={'blue'}
							extClass={styles.btn}
							titleObj={{
								text: language.ELanguageSimpleWord.ADD_PRODUCT,
								userStyle: 'fat_small',
							}}
						/>
					</div>
				</>
			</WidgetWrapper>
			<div>
				<Text text={myCompany.economyBranch} />
				<DropMenu title={language.ELanguageSimpleWord.ADVANCED_SETTINGS}>
					<div>
						{Object.keys(language.ELanguageEconomyWord).map((el) => (
							<ButtonStandard key={el} click={() => ''} titleObj={{ text: el }} />
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
