import React, { FC } from 'react';
import InputStandard from '../../1_Atoms/InputStandard/InputStandard';
import { ReactComponent as IconSearch } from '../../../Assets/icon/icon_search.svg';
import { language } from '../../../Services/Language/Language.interface';

interface ISearchInput {
	callback: (value: string) => void;
	extClass?: string;
}

/**
 * Инпут поиска
 * @param props.callback - функция, возвращающая текущее введенное значение
 * @param props.extClass - дополнительный CSS класс
 */
const SearchInput: FC<ISearchInput> = (props) => {
	const { callback, extClass = '' } = props;

	return (
		<InputStandard
			callback={callback}
			extClass={extClass}
			color={'grey'}
			iconLeft={{ icon: IconSearch }}
			placeholder={language.allLanguageWord.SEARCH}
			log={{ element: SearchInput.name }}
		/>
	);
};

export default SearchInput;
