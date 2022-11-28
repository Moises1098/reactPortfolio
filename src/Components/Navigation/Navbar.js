import './navBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react'

export default function NavBar() {
  return <nav className="nav">
    <Link to="/" className="nav-name">Moises Gonzalez</Link>
    <ul>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      <CustomLink to="/work">Work</CustomLink>
      <CustomLink to="/resume">Resume</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


