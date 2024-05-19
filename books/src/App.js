import { useState, useEffect } from "react"
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    // set this as an empty array; currently no books 
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    // DO THIS
    // This runs code at a specific time
    useEffect(() => {
        fetchBooks();
    }, []); // [] means call function after first render and never call again

    // DONT DO THIS
    // fetchBooks();
    
    const editBookById = async (id, newTitle) => {
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
    };

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

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            {/* remember any name is acceptable, i.e., onCreate, onSubmit */}
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;