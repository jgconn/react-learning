import { useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    const { fetchBooks } = useContext(BooksContext); // use whatever is in in context folder

    // DO THIS
    // This runs code at a specific time
    useEffect(() => {
        fetchBooks();
    }, []); // [] means call function after first render and never call again

    // DONT DO THIS
    // fetchBooks();

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            {/* remember any name is acceptable, i.e., onCreate, onSubmit */}
            <BookCreate />
        </div>
    );
}

export default App;