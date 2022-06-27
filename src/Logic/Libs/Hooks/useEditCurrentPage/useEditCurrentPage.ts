import { useState } from 'react';

/**
 * Хук пагтнации
 *
 * currentPage - текущая страница
 * handlePrevPage - установка предыдущей страницы
 * handleNextPage - установка следующей страницы
 * handleFirstPage - установка первой страницы
 * setCurrentPage - установка текущей страницы
 * totalPages - всего страниц
 *
 * @param countVisible - колличетсво видимых элементов
 * @param countElements - всего элементов
 */

export const useEditCurrentPage = (
	countVisible: number,
	countElements: number
): [number, () => void, () => void, () => void, (val: number) => void, number] => {
	const [currentPage, setCurrentPage] = useState(0);

	const handleFirstPage = () => {
		setCurrentPage(0);
	};

	const totalPages = countElements / countVisible;

	const handlePrevPage = () => {
		currentPage > 0 && setCurrentPage((prevState) => prevState - 1);
	};

	const handleNextPage = () => {
		(currentPage * countVisible || countVisible) < countElements && setCurrentPage((prevState) => prevState + 1);
	};

	return [currentPage, handlePrevPage, handleNextPage, handleFirstPage, setCurrentPage, totalPages];
};
