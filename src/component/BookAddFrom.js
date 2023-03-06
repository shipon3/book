import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addFetchBook from "../redux/books/thunk/addFetchBook";
import updateFetchBook from "../redux/books/thunk/updateFetchBook";

const BookAddFrom = () => {
	const editBook = useSelector((state) => state.books.editBook);
	const dispatch = useDispatch();
	const [bookId, setBookId] = useState();
	const [bookName, setBookName] = useState("");
	const [bookAuthorName, setBookAuthorName] = useState("");
	const [bookImage, setBookImage] = useState("");
	const [bookPrice, setBookPrice] = useState(0);
	const [bookRating, setBookRating] = useState(0);
	const [isFeatured, setIsFeatured] = useState(false);

	const handelSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addFetchBook(
				bookName,
				bookAuthorName,
				bookImage,
				bookPrice,
				bookRating,
				isFeatured
			)
		);
		setBookName("");
		setBookAuthorName("");
		setBookImage("");
		setBookPrice(0);
		setBookRating(0);
		setIsFeatured(false);
	};
	useEffect(() => {
		setBookId(editBook.id);
		setBookName(editBook.name);
		setBookAuthorName(editBook.author);
		setBookImage(editBook.thumbnail);
		setBookPrice(editBook.price);
		setBookRating(editBook.rating);
		setIsFeatured(editBook.featured);
	}, [editBook]);
	const updateHandelSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateFetchBook(
				bookId,
				bookName,
				bookAuthorName,
				bookImage,
				bookPrice,
				bookRating,
				isFeatured
			)
		);
		setBookId(null);
		setBookName("");
		setBookAuthorName("");
		setBookImage("");
		setBookPrice(0);
		setBookRating(0);
		setIsFeatured(false);
	};
	return (
		<div>
			<div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
				<h4 className="mb-8 text-xl font-bold text-center">
					{JSON.stringify(editBook) === "{}"
						? "Add New Book"
						: "Update This Book"}
				</h4>
				<form
					className="book-form"
					onSubmit={
						JSON.stringify(editBook) === "{}"
							? handelSubmit
							: updateHandelSubmit
					}
				>
					<div className="space-y-2">
						<label for="name">Book Name</label>
						<input
							required
							className="text-input"
							type="text"
							id="input-Bookname"
							name="name"
							value={bookName}
							onChange={(e) => setBookName(e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<label for="category">Author</label>
						<input
							required
							className="text-input"
							type="text"
							id="input-Bookauthor"
							name="author"
							value={bookAuthorName}
							onChange={(e) => setBookAuthorName(e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<label for="image">Image Url</label>
						<input
							required
							className="text-input"
							type="text"
							id="input-Bookthumbnail"
							name="thumbnail"
							value={bookImage}
							onChange={(e) => setBookImage(e.target.value)}
						/>
					</div>

					<div className="grid grid-cols-2 gap-8 pb-4">
						<div className="space-y-2">
							<label for="price">Price</label>
							<input
								required
								className="text-input"
								type="number"
								id="input-Bookprice"
								name="price"
								value={bookPrice}
								onChange={(e) => setBookPrice(e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<label for="quantity">Rating</label>
							<input
								required
								className="text-input"
								type="number"
								id="input-Bookrating"
								name="rating"
								min="1"
								max="5"
								value={bookRating}
								onChange={(e) => setBookRating(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex items-center">
						<input
							id="input-Bookfeatured"
							type="checkbox"
							name="featured"
							className="w-4 h-4"
							checked={isFeatured}
							onChange={(e) => setIsFeatured(e.target.checked)}
						/>
						<label for="featured" className="ml-2 text-sm">
							{" "}
							This is a featured book{" "}
						</label>
					</div>

					<button type="submit" className="submit" id="submit">
						{JSON.stringify(editBook) === "{}" ? "Add Book" : "Update Book"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookAddFrom;
