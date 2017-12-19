import { reducer as dataReducer } from "./data/data-reducer";
import * as data from "./data/data-state";

export interface State {
	readonly data: data.State;
}

export const initialState: State = {
	data: data.initialState,
};

export const rootReducer = (state: State, action: any) => ({
	data: dataReducer(state.data, action),
});
