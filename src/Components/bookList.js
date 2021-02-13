import React, { useContext } from 'react'
import { BookContext } from '../Contexts/bookContext'
import BookDetails from './bookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);

    return (
        <li className='book-list'>
            {books.map(book => {
                return (<BookDetails book={book} id={book.id} />)
            })}
        </li>
    )
}

export default BookList;