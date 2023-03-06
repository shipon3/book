import { BOOKSEARCH, BOOKSTATUS } from "./actionTypes";

export const bookStatus = (bookStatus) => {
	return {
		type: BOOKSTATUS,
		payload: bookStatus,
	};
};

export const bookSearch = (title) => {
	return {
		type: BOOKSEARCH,
		payload: title,
	};
};
