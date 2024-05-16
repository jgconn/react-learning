import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', { // calls api using axios
    headers: {
      Authorization: 'Client-ID kg2Umt1j-qbwpnUAf6ABqLngn7ra3v-BmVtFm97ZNRw', // auth header ID
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
