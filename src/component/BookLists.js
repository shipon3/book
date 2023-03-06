import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/fetchBooks";
import BookCard from "./BookCard";

const BookLists = () => {
	const bookState = useSelector((state) => state.books);
	const { books } = bookState;
	const filters = useSelector((state) => state.filters);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks);
	}, [dispatch]);

	const filterByStatus = (book) => {
		const { status } = filters;
		switch (status) {
			case "All":
				return book;
			case "featured":
				return book.featured;

			default:
				return book;
		}
	};
	const filterByTitle = (book) =>
		book.name.toLowerCase().includes(filters.title);

	return (
		<div className="lws-bookContainer">
			{books
				.filter(filterByTitle)
				.filter(filterByStatus)
				.map((book, index) => {
					return <BookCard book={book} key={index} />;
				})}
		</div>
	);
};

export default BookLists;
