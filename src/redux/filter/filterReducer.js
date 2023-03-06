import { BOOKSEARCH, BOOKSTATUS } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case BOOKSTATUS:
			return {
				...state,
				status: action.payload,
			};
		case BOOKSEARCH:
			return {
				...state.title,
				title: action.payload,
			};

		default:
			return state;
	}
};

export default filterReducer;
