import {useState} from "react";

export class Hooks {

  /**
   * Возвращает текущую страницу для пагинации
   * @params countVisible - колличетсво видимых элементов
   * @params countElements - всего элементов
   */
  public useEditCurrentPage = (
    countVisible: number,
    countElements: number,
  ): [
    number,
    () => void,
    () => void,
    () => void,
    (val: number) => void,
    number
  ] => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleFirstPage = () => {
      setCurrentPage(0);
    };

    const totalPages = countElements / countVisible;

    const handlePrevPage = () => {
      currentPage > 0 && setCurrentPage((prevState) => prevState - 1);
    };

    const handleNextPage = () => {
      (currentPage * countVisible || countVisible) < countElements &&
      setCurrentPage((prevState) => prevState + 1);
    };

    return [currentPage, handlePrevPage, handleNextPage, handleFirstPage, setCurrentPage, totalPages];
  };
}
