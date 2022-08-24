import './home.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalBody } from 'react-bootstrap';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleCloseWebDev = () => setShow(false);
  const handleShowWebDev = () => setShow(true);

  const handleCloseCA = () => setShow(false);
  const handleShowCA = () => setShow(true);
    return (
      
    <div>
        <div className='main'>
        <h1>Hi! I'm Moises Gonzalez</h1>
        <h2>Welcome to my online portfolio</h2>
        </div>

        <div class="right"> 
        <h1>Skills</h1> 
        <Button variant="primary" onClick={handleShowWebDev}>
        Web Developer
      </Button>

      <Modal
        show={show}
        onHide={handleCloseWebDev}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Computer Languages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        HTML, CSS, JAVASCRIPT, HANDLEBARS, REACT, MONGODB, MYSQL, BOOTSTRAP
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseWebDev}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" onClick={handleShowCA}>
        Extracurricular
      </Button>

      <Modal
        show={show}
        onHide={handleCloseCA}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Circus Arts</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aerial lyra (hoop), Aerial silks and trapeze</Modal.Body>
        
        <Modal.Title>Music</Modal.Title>
        <Modal.Body>Piano, Voice, Ukulele, Guitar, Violin, and can read Sheet Music</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCA}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
   
 
  )


}

export default Home
