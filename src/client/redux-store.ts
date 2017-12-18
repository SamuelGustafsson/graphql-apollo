import * as Redux from "redux";
import { rootReducer } from "./root-reducer";
import { RootState } from "./root-types";

function createStore(): Redux.Store<RootState> {
	return Redux.createStore(
		rootReducer,
		{} as RootState,
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__(),
	);
}
export const store = createStore();
