import { State } from "./data-state";
import { Action } from "./data-actions";

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		default:
			return state;
	}
};
