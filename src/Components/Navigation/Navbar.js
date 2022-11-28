import './navBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react'

export default function NavBar() {
  return <nav className="nav">
    <Link to="/" className="nav-name">Moises Gonzalez</Link>
    <ul>
      <CustomLink className="nav-tab" to="/home">Home</CustomLink>
      <CustomLink className="nav-tab" to="/about">About</CustomLink>
      <CustomLink className="nav-tab" to="/contact">Contact</CustomLink>
      <CustomLink className="nav-tab" to="/work">Work</CustomLink>
      <CustomLink className="nav-tab" to="/resume">Resume</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch ({ path: resolvedPath.pathname, end: true})
  
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
  )
}


