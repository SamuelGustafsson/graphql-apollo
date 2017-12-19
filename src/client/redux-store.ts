import * as Redux from "redux";
import { rootReducer, initialState } from "./root-reducer";
import { State as RootState } from "./root-reducer";

function createStore(): Redux.Store<RootState> {
	return Redux.createStore(
		rootReducer,
		initialState,
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__(),
	);
}
export const store = createStore();
