import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  // it will receive some term to do a search
  const handleSubmit = async (term) => {
    // passes term to searchImages API and saves data as result
    const result = await searchImages(term);

    // we then pass result data to setImages to get images 
    setImages(result);
  };

  return (
    <div>
      {/* submit form where it takes input od handleSubmit. onSubmit is any random name, i just chose this since it matches what im doing */}
      <SearchBar onSubmit={handleSubmit} /> 
      {/* takes image arrays from setImages(results). We combine state system + prop system */}
      <ImageList images={images} />
    </div>
  );
}

export default App;
