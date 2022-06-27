import { useEditCurrentPage } from './useEditCurrentPage/useEditCurrentPage';
import { useComponentDidUpdate } from './useComponentDidUpdate/useComponentDidUpdate';

export class Hooks {
	/** Хук пагинации */
	public useEditCurrentPage = useEditCurrentPage;

	/** Хук вызова колбека при обновлении зависимости */
	public useComponentDidUpdate = useComponentDidUpdate;
}
