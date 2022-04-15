export namespace companies {
	export type TCompaniesHashMap = {
		[key in string]: TCompany;
	};

	type TCompany = {
		name: string;
		subtitle?: string;
		industry: string[];
		products: string[];
		requisites: TRequisites;
		description: string;
		personal: string[];
	};

	type TRequisites = {
		address: TAddressCompany;
		other: TRequisitesOther;
	};

	type TAddressCompany = {
		index: number;
		country: string;
		city: string;
		other: string;
	};

	type TRequisitesOther = {
		[key in string]: string;
	};
}
