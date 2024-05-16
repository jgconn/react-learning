import './SearchBar.css';
import { useState } from 'react'; // useState allows to get current state of thing


// we would use props but since we only care about one prop then we will de structure out onSubmit
function SearchBar({ onSubmit }) {
  // state. It read the value term. If need to update the value use setTerm.
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // When user submits form, we call onSubmit with the current term and sends back to App.js into handleSubmit
    onSubmit(term);
  };

  // every change will be recorded in event, so this will run every single key press
  const handleChange = (event) => {
    setTerm(event.target.value); // event.target.value tells you whats currently inside the input. setTerm updates state 
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        {/* onChange takes handleChange which uses useState. we use value to pass the state to the input as the value prop */}
        {/* if you set value = 'hi there' then input vbox will display hi there and you wont be able to change it. 
        Assigning a piece of state to it (term) allows you to show whatever state is in for input  */}
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
