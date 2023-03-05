import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
