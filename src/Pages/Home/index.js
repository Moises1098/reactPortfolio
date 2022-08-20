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

        <ListGroup.Item>
        <Button variant="primary" onClick={handleShow}>
        Education
       </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Degrees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Asociates in Arts: Communication, French, Liberal Arts: Mathematics and Science, and Liberal Arts: Emphasis from Southwester College
           June 2019 - June 2022
            <br> 

            </br>
            Bachelors in Science: Biology with a minor in Cognitive Science in progess at UC San Diego
            June 2022 - Present
        </Modal.Body>
        <Modal.Header closeButton>
          <Modal.Title>Certificates</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           UCSD Web Development Bootcamp
           Novemer 2021 - May 2022
           <br>
           </br>
           LEADR Program- Scripps Journal Club
           March 2022 -  April 2022
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
        </ListGroup.Item>

        <ListGroup.Item>Expirence</ListGroup.Item>
        <ListGroup.Item>Extra Curricualars</ListGroup.Item>
        </ListGroup>
        </div>

    </div>
    )


}

export default Home
