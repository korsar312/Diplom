export namespace users {
	export type TPerson = {
		id: string;
		name: string;
		surname: string;
		position?: string;
		isOnline: boolean;
		image?: string;
		accessory: string;
	};
}
