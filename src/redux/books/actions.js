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

export const editBook = (bookId) => {
	return {
		type: EDITBOOK,
		payload: bookId,
	};
};

export const update = (
	bookId,
	bookName,
	bookAuthor,
	bookImage,
	bookPrice,
	bookRating,
	isFeatured
) => {
	return {
		type: UPDATEBOOK,
		payload: {
			bookId,
			bookName,
			bookAuthor,
			bookImage,
			bookPrice,
			bookRating,
			isFeatured,
		},
	};
};

export const deleteBook = (bookId) => {
	return {
		type: DELETEBOOK,
		payload: bookId,
	};
};
