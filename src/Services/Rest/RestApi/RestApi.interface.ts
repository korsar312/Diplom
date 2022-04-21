export namespace rest {
	export type TCallback = (isOk?: boolean, error?: any, data?: any) => void;

	export type TLogAction = {
		currentPage?: string;
		element?: string;
		action?: string;
		data?: any;
		comment?: string;
	};
}
