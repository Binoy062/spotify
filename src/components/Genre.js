import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Genre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/browse/categories');
        setGenres(response.data.categories.items);
      } catch (error) {
        console.error('Error fetching genres', error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
