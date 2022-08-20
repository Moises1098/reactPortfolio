import './home.css'
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
        <div className='main'>
        <h1>Hi! I'm Moises Gonzalez</h1>
        <h2>Welcome to my online portfolio</h2>
        </div>

        <div class="right"> 
        <h1>Skills</h1> 
        <ListGroup variant="flush">
        <ListGroup.Item>
        <Button variant="primary" onClick={handleShow}>
        Web Developer
       </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Computer Languages</Modal.Title>
        </Modal.Header>
        <Modal.Body>HTML, CSS, JAVASCRIPT, HANDLEBARS, REACT, MONGODB, MYSQL, BOOTSTRAP</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        </div>

    </div>
    )


}

export default Home
