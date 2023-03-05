import {
	ADDBOOK,
	DELETEBOOK,
	EDITBOOK,
	UPDATEBOOK,
	LODDEDbOOKS,
} from "./actionType";
import { initialState } from "./initialState";

const nextBookId = (books) => {
	const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
	return maxId + 1;
};
const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case LODDEDbOOKS:
			return action.payload;
		case ADDBOOK:
			const { name, author, thumbnail, price, rating, featured } =
				action.payload;
			return [
				...state,
				{
					id: nextBookId(state),
					name: name,
					author: author,
					thumbnail: thumbnail,
					price: price,
					rating: rating,
					featured: featured,
				},
			];
		case EDITBOOK:
			return state.map((book) => {
				if (book.id !== action.payload) {
				}
			});

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
			return state.map((book) => {
				if (book.id !== upBookId) {
					return book;
				}
				return {
					...book,
					bookName: upBookName,
					bookAuthor: upBookAuthor,
					bookImage: upBookImage,
					bookPrice: upBookPrice,
					bookRating: upBookRating,
					isFeatured: upIsFeatured,
				};
			});
		case DELETEBOOK:
			return state.filter((book) => book.id !== action.payload);
		default:
			return state;
	}
};

export default bookReducer;
