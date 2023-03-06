import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/fetchBooks";
import BookCard from "./BookCard";

const BookLists = () => {
	const books = useSelector((state) => state.books);
	const filters = useSelector((state) => state.filters);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks);
	}, [dispatch]);

	const filterByStatus = (book) => {
		const { status } = filters;
		switch (status) {
			case "All":
				return book.featured | !book.featured;
			case "featured":
				return book.featured;

			default:
				return book.featured | !book.featured;
		}
	};

	return (
		<div className="lws-bookContainer">
			{books.filter(filterByStatus).map((book, index) => {
				return <BookCard book={book} key={index} />;
			})}
		</div>
	);
};

export default BookLists;
