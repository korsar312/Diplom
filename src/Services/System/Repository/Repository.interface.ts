export namespace repository {
	export interface IRepository {
		isAutoSingIn: () => boolean;
		getLogin: () => TLocalStorageLogin | null;
		setAutoSingIn: (val: 1 | 0) => void;
		setLogin: (val: TLocalStorageLogin | '') => void;
		enabledAutSingIn: (val: TLocalStorageLogin | '') => void;
		disabledAutSingIn: () => void;
	}

	export type TLocalStorageLogin = {
		login: string;
		password: string;
	};
}
