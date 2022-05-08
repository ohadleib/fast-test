import React from 'react';
import Book from './Book/Book';

export default function Books({ books, onBookAdd }) {

    return (
        <div>
            {books.map((book, i) => <Book book={book} key={i} />)}
            <button
                onClick={onBookAdd}
            >
                Add
            </button>
        </div>
    )
}
