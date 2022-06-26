import React, { FC } from 'react';
import styles from './WidgetBody.module.scss';
import { language } from '../../../../Logic/Modules/Language/Language.interface';
import Text from '../../../0_Basic/Text/Text';

interface IWidgetBody {
	extClass?: string;
	table: TUnitWidgetTable;
}

export type TUnitWidgetTable = {
	head: language.TAllLanguageWord[];
	body: TBody[];
};

type TBody = {
	content: JSX.Element[];
	id: string;
};

/**
 * Тело таблица для виджета
 * @param props.extClass - дополнительный CSS класс
 * @param props.table - таблица для рендера
 */
const WidgetBody: FC<IWidgetBody> = (props) => {
	const { extClass = '', table } = props;

	const header = table.head.map((el) => (
		<div key={el} className={styles.sell}>
			<Text userStyle={'fat_extraSmall'} text={el} caseWord={'CAPITAL'} />
		</div>
	));

	const body = table.body.map((el) => {
		return (
			<div key={el.id} className={styles.row}>
				{el.content.map((rowEl) => {
					return (
						<div key={rowEl.key} className={styles.sell}>
							{rowEl}
						</div>
					);
				})}
			</div>
		);
	});

	return (
		<div className={`${styles.wrapper} ${extClass}`}>
			<div className={styles.head}>{header}</div>
			<div className={styles.body}>{body}</div>
		</div>
	);
};

export default WidgetBody;
