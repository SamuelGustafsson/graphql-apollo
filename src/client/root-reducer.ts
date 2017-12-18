import { RootState, Ui } from "./root-types";
import * as Redux from "redux";

const uiReducer = Redux.combineReducers<Ui>({});

export const rootReducer = Redux.combineReducers<RootState>({
	ui: uiReducer,
});
