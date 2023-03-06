import {
	ADDBOOK,
	DELETEBOOK,
	EDITBOOK,
	LODDEDbOOKS,
	UPDATEBOOK,
} from "./actionType";

export const loddedBooks = (books) => {
	return {
		type: LODDEDbOOKS,
		payload: books,
	};
};
export const addBook = (name, author, thumbnail, price, rating, featured) => {
	return {
		type: ADDBOOK,
		payload: {
			name,
			author,
			thumbnail,
			price,
			rating,
			featured,
		},
	};
};

export const editBook = (book) => {
	return {
		type: EDITBOOK,
		payload: book,
	};
};

export const updateBook = (
	id,
	name,
	author,
	thumbnail,
	price,
	rating,
	featured
) => {
	return {
		type: UPDATEBOOK,
		payload: {
			id,
			name,
			author,
			thumbnail,
			price,
			rating,
			featured,
		},
	};
};

export const deleteBook = (bookId) => {
	return {
		type: DELETEBOOK,
		payload: bookId,
	};
};
