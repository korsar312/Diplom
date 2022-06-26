export namespace typesUtils {
	export type OneOfTwo<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
		{
			[K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
		}[Keys];

	export type TChangeObject<obj> = Partial<TKey<obj>>;

	type TKey<obj> = {
		[T in keyof obj]: obj[T];
	};
}
