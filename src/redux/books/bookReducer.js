import {
	ADDBOOK,
	DELETEBOOK,
	EDITBOOK,
	UPDATEBOOK,
	LODDEDbOOKS,
} from "./actionType";
import { initialState } from "./initialState";
console.log("edit book", initialState.editBook);
// if (JSON.stringify(initialState.editBook) === "{}") {
// 	console.log("empty");
// } else {
// 	console.log("not empty");
// }
const nextBookId = (books) => {
	const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
	return maxId + 1;
};
const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case LODDEDbOOKS:
			return {
				...state,
				books: action.payload,
			};
		case ADDBOOK:
			const { name, author, thumbnail, price, rating, featured } =
				action.payload;
			return {
				...state,
				books: [
					...state.books,
					{
						id: nextBookId(state.books),
						name: name,
						author: author,
						thumbnail: thumbnail,
						price: price,
						rating: rating,
						featured: featured,
					},
				],
			};
		case EDITBOOK:
			return {
				...state,
				editBook: action.payload,
			};

		case UPDATEBOOK:
			const {
				upBookId,
				upBookName,
				upBookAuthor,
				upBookImage,
				upBookPrice,
				upBookRating,
				upIsFeatured,
			} = action.payload;
			return {
				...state,
				books: [
					...state.books,
					...state.books.map((book) => {
						if (book.id !== upBookId) {
							return book;
						}
						return {
							...book,
							name: upBookName,
							author: upBookAuthor,
							thumbnail: upBookImage,
							price: upBookPrice,
							rating: upBookRating,
							featured: upIsFeatured,
						};
					}),
				],

				editBook: {},
			};
		case DELETEBOOK:
			return {
				...state,
				books: state.books.filter((book) => book.id !== action.payload),
			};

		default:
			return state;
	}
};

export default bookReducer;
