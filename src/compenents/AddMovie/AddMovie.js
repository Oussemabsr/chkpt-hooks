import React, { useState } from 'react'
import {Button , Modal , Form} from 'react-bootstrap'

const AddMovie = ({ add }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //initialState
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")

    //updateState
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleRate = (e) => {
        setRate(e.target.value);
    };
    const handlePosterUrl = (e) => {
        setPosterUrl(e.target.value);
    };

    //function add movie
const handleMovie = (e) => {
    let newMovie = {title,description,rate,posterUrl}
    add(newMovie);
}

    return (
    <div>
 <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter movie title"
        value={title}
        onChange={(e) => handleTitle (e)} />

        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description"
        value={description}
        onChange={(e) => handleDescription (e)}/>

        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter rate"
        value={rate}
        onChange={(e) => handleRate (e)} />

        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="url" placeholder="Enter posterUrl"
        value={posterUrl}
        onChange={(e) => handlePosterUrl (e)} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleMovie}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie