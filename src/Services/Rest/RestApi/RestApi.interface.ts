export namespace rest {
	export type TCallback<T> = (isOk: boolean, error: any, data: TData<T>) => void;

	type TData<T> = T | null;

	export type TLogAction = {
		currentPage?: string;
		element?: string;
		action?: string;
		data?: any;
		comment?: string;
	};
}
