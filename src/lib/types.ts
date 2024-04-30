import { combineReducers } from "redux";
import menuReducer from "../redux/generalSlice";

export const rootReducer = combineReducers({
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
