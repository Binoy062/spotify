import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track,album`);
      setResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, albums, artists..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <div key={result.id}>
            <p>{result.name} by {result.artists[0].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
