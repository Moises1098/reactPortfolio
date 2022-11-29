import './navBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showAnimated2, setShowAnimated2] = useState(false);
  return (
    <>
      <section className='HambarMenu'>
        <MDBNavbar>
          <MDBContainer fluid>
            <Link to="/" className="nav-name">Moises Gonzalez</Link>
            <MDBNavbarToggler
              type='button'
              className='second-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
            <div className='navbar-links two'>
              <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/work">Work</CustomLink>
                <CustomLink to="/resume">Resume</CustomLink>
              </ul>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated2}>
            <div className='navbar-links three'>
              <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/work">Work</CustomLink>
                <CustomLink to="/resume">Resume</CustomLink>
              </ul>
            </div>
        </MDBCollapse>
      </section>



    </>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


