export interface Action<Ttype, Tpayload, TIsError extends boolean> {
	readonly type: Ttype;
	readonly payload: Tpayload;
	readonly error: TIsError;
}
