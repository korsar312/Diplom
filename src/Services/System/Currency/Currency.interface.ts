export namespace currency {
	export type TCurrency = {
		[T in ECurrency]: {
			name: typeof ECurrency[T];
			symbol: string;
		};
	};

	export enum ECurrency {
		DOLLAR = 'DOLLAR',
		RUBLE = 'RUBLE',
	}
}
