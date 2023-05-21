import React, { useState } from 'react';
import './App.css';
import MovieList from './compenents/MovieList/MovieList';
import {moviesData} from "./Data/Data";
import AddMovie from './compenents/AddMovie/AddMovie';
import FilterByName from './compenents/FilterByName/FilterByName';
import FilterByRate from './compenents/Rating/Rating'

function App() {
  const [movies, setMovies] = useState(moviesData);
const [inputSearch, setInputSearch] = useState("")
const [rating, setRating] = useState(1)

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <h1>Checkpoint hooks</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterByRate rating={rating} setRating={setRating} isMovieRating={false} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />

    </div>
  );
}

export default App;
