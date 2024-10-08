import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    // set this as an empty array; currently no books 
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    const editBookById = useCallback(async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map ((book) => {
            if (book.id === id) {
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks);
    }, []);

    const deleteBookById =  async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        });
        // BAD CODE!
        // nothing happens because React assumes not to re render  
        // books.push({ id: 123, title: title});
        // setBooks(books);
        // BETTER CODE!
        const updateBooks = [
            ...books,
            response.data,
        ]; 
        setBooks(updateBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
};

export { Provider };
export default BooksContext;

// import BooksContext, { Provider } from '/./a.example'