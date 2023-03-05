import { addBook } from "../actions";

const addFetchBook = (name, author, thumbnail, price, rating, featured) => {
	return async (dispatch) => {
		const response = await fetch("http://localhost:9000/books", {
			method: "POST",
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
			addBook(
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

export default addFetchBook;
