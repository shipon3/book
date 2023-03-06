import React from "react";
import { useDispatch } from "react-redux";
import { bookStatus } from "../redux/filter/actions";

const BookFilter = () => {
	const dispatch = useDispatch();
	return (
		<div className="flex items-center justify-between mb-12">
			<h4 className="mt-2 text-xl font-bold">Book List</h4>

			<div className="flex items-center space-x-4">
				<button
					className="filter-btn active-filter"
					id="lws-filterAll"
					onClick={() => dispatch(bookStatus("All"))}
				>
					All
				</button>
				<button
					className="filter-btn"
					id="lws-filterFeatured"
					onClick={() => dispatch(bookStatus("featured"))}
				>
					Featured
				</button>
			</div>
		</div>
	);
};

export default BookFilter;
