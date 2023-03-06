import { addBook, updateBook } from "../actions";

const updateFetchBook = (
	id,
	name,
	author,
	thumbnail,
	price,
	rating,
	featured
) => {
	return async (dispatch) => {
		const response = await fetch(`http://localhost:9000/books/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				name: name,
				author: author,
				thumbnail: thumbnail,
				price: price,
				rating: rating,
				featured: featured,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const book = await response.json();

		dispatch(
			updateBook(
				id,
				book.name,
				book.author,
				book.thumbnail,
				book.price,
				book.rating,
				book.featured
			)
		);
	};
};

export default updateFetchBook;
