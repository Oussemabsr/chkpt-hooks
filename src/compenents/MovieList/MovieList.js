import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css";

const MovieList = ({movies, inputSearch, rating }) => {
  return (
    <div>
        <div className='films'>
        {movies
        .filter((movie) =>
        movie.title.toUpperCase().includes(inputSearch.toUpperCase())
        &&
        movie.rate >= rating
        )

        .map ((movie) => (
    <MovieCard movie ={movie} key ={movie.id} />
))}
        </div>
    </div>
  )
}

export default MovieList