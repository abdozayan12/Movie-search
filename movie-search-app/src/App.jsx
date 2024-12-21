import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=fba16a26&s=${query}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
