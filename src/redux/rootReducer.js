import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import filterReducer from "./filter/filterReducer";
export const rootReducer = combineReducers({
	books: bookReducer,
	filters: filterReducer,
});
