import React, { useState, useContext } from 'react';
import { BookContext } from '../Contexts/bookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});

        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={(e) => {
                setTitle(e.target.value)}} required placeholder='title'/>
            <input type='text' value={author} onChange={(e) => {
                setAuthor(e.target.value)}} required placeholder='author'/>
            <input type='submit' value='add book'/>
        </form>
    )
}

export default BookForm;