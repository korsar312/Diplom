import { FC, useState } from 'react';
import services from '../../../Services/Services';
import { rest } from '../../../Services/Rest/RestApi/RestApi.interface';
import styles from './Switcher.module.scss';

interface ISwitcher {
	click: (val: boolean, change: (val: boolean) => void) => void;
	extClass?: string;
	log?: rest.TlogAction;
	defaultValue: boolean;
}

/**
 * Свитчер
 * @param props.click - функция onClick по кнопке
 * @param props.extClass - дополнительный CSS класс
 * @param props.log - логирование
 * @param props.defaultValue - значение по умолчанию
 */
const Switcher: FC<ISwitcher> = (props) => {
	const { click, extClass = '', log, defaultValue } = props;

	const [switcherMode, setSwitcherMode] = useState(defaultValue);

	function clickHandler() {
		services.rest.RestApi.logAction({
			element: Switcher.name,
			action: `Переключение ${switcherMode}`,
			data: props,
			...log,
		});

		switch (click.length) {
			case 1:
				click(!switcherMode, () => '');
				setSwitcherMode((value) => !value);
				break;
			case 2:
				click(switcherMode, setSwitcherMode);
				break;
		}
	}

	return (
		<div
			className={`
        ${styles.wrapper} 
        ${extClass} 
        ${switcherMode ? styles.switchOn : styles.switchOff}
      `}
			onClick={clickHandler}
		/>
	);
};

export default Switcher;
