import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../../Data/Data'


const MovieDescription = () => {
const params = useParams()
const [movie, setMovie] = useState({})
useEffect(() => {
setMovie(moviesData.find((movie) => movie.id === +params.id))
}, [params.id])
const navigate = useNavigate()

  return (
    <div>
        <Container>
            <Row>
                <Col sm={7} >
                   <div style={{ marginTop:"100px",width:"360px"}} >
                    <h1>Description of: {movie.title} </h1>
                    {movie.description}
                   </div>
                </Col>
                <Col sm={5}>
                    <iframe title='this is a unique title key'
                    style={{
                        paddingRight:"350px",
                        marginTop:"100px",
                        width:"760px",
                        height:"300px"
                    }}
                    src={movie.trailer}
                    />
                </Col>
            </Row>
        </Container>
        {/* navigate(-1) => history go back */}
        <button variant='secondary' 
        onClick={()=>navigate(-1)}
        style={{marginLeft:'30%'}} >
            Go Back
        </button>
    </div>
  )
}

export default MovieDescription