export namespace product {
	export type TProductHashMap = {
		[key in string]: TProduct;
	};

	export type TProduct = {
		id: string;
		image: string;
		name: string;
		conventionalUnit: string | number;
		company: string[];
		analogue: string[];
		industry: string;
		property?: TProperty[];
	};

	type TProperty = [string, string];
}
