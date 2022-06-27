import {DependencyList, EffectCallback, useEffect, useRef} from "react";

/**
 * Хук обновления зависимостей
 *
 * effect - функция колбек
 * deps - зависимость для обновления
 */
export const useComponentDidUpdate = (effect: EffectCallback, deps: DependencyList) => {
	const hasMounted = useRef(false);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
		} else {
			effect();
		}
	}, deps);
};