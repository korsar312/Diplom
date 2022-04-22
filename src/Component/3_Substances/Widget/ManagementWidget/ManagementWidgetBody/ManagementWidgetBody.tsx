import React, { FC } from 'react';
import styles from './ManagementWidgetBody.module.scss';
import { companies } from '../../../../../Services/Stores/Companies/Companies.interface';
import { types } from '../../../../../Types/Types';
import Text from '../../../../0_Basic/Text/Text';
import WidgetWrapper from '../../../../1_Atoms/WidgetWrapper/WidgetWrapper';
import ButtonStandard from '../../../../1_Atoms/ButtonStandard/ButtonStandard';
import { language } from '../../../../../Services/Language/Language.interface';

interface IManagementWidgetBody {
	myCompany: companies.TCompany;
	savaConfig: (val: types.TChangeObject<companies.TCompany>) => void;
}

/**
 * Виджет управления компанией (тело)
 * @param props.myCompany - коипания юзера
 */

const ManagementWidgetBody: FC<IManagementWidgetBody> = (props) => {
	const { myCompany } = props;

	return (
		<div className={styles.wrapper}>
			<div>
				<WidgetWrapper color={'grey'}>
					<>
						<div>21</div>
						<div>
							<ButtonStandard
								click={() => ''}
								color={'blue'}
								textStyle={'fat_small'}
								title={language.ELanguageSimpleWord.ACCOUNT_SECURITY_SETTINGS}
							/>
						</div>
					</>
				</WidgetWrapper>
				{/*<Text text={myCompany.allProducts.join('')} />*/}
			</div>
			<div>
				<Text text={myCompany.economyBranch} />
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

export default ManagementWidgetBody;
