import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import ProfilePicture from './assets/images/ProfilePicture-modified.png'
import Card from "react-bootstrap/Card"
import './navBar.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Navigation = (props) => { 
    const clickHandler = (event) => {
        const id = event.target.id
        props.setPage(id)
    }
    return ( 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Card.Img variant="left" src={ProfilePicture} height="100" />
      <Navbar.Brand>Moises Gonzalez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={clickHandler}href="about" id="about">About Me</Nav.Link>
          <Nav.Link onClick={clickHandler}href="home" id="home">Home</Nav.Link>
          <Nav.Link onClick={clickHandler}href="contact" id="contact">Contact Me</Nav.Link>
          <Nav.Link onClick={clickHandler}href="work" id="work">Work</Nav.Link>
          <Nav.Link onClick={clickHandler}href="resume" id="resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )  
}
export default Navigation