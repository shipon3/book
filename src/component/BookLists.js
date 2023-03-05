import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/thunk/fetchBooks";
import BookCard from "./BookCard";

const BookLists = () => {
	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks);
	}, [dispatch]);

	return (
		<div className="lws-bookContainer">
			{books.map((book, index) => {
				return <BookCard book={book} key={index} />;
			})}
		</div>
	);
};

export default BookLists;
