import React from 'react'
import {Card, Button} from "react-bootstrap"
import "./MovieCard.css"
import MovieRating from '../Rating/Rating'

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
        <Button variant="primary">Click to watch</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default MovieCard