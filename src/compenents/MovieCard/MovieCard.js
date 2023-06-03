import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./MovieCard.css"
import MovieRating from '../Rating/Rating'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div>
      <div className='cards'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <MovieRating isMovieRating={true} movieRating={movie.rate} />
        <br />
        <Link to={`/movie/${movie.id}`} >
        <Button>Description</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default MovieCard