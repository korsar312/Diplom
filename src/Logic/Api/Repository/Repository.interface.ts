export namespace repository {
	export interface IRepository {
		getAutoSingIn: () => boolean;
		setAutoSingIn: (val: boolean) => void;
		getInputDataUser: (val: 1 | 0) => void;
		setInputDataUser: (val: TInputDataUser | '') => void;
	}

	export type TInputDataUser = {
		login: string;
		password: string;
	};
}
