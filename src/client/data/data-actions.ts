import { Action } from "../Action-type";

export type Action = LoadUsersRequestAction;

type LoadUsersRequestAction = Action<"data / Load users request", {}, false>;

export const loadUsersRequest = (): LoadUsersRequestAction => ({
	type: "data / Load users request",
	payload: {},
	error: false,
});
