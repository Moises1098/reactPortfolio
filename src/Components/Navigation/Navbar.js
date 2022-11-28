import './navBar.css'
import React from 'react'

export default function NavBar() {
  return <nav className="nav">
    <a href="/" className="nav-name">Moises Gonzalez</a>
    <ul>
      <CustomLink className="nav-tab" href="/home">Home</CustomLink>
      <CustomLink className="nav-tab" href="/about">About</CustomLink>
      <CustomLink className="nav-tab" href="/contact">Contact</CustomLink>
      <CustomLink className="nav-tab" href="/work">Work</CustomLink>
      <CustomLink className="nav-tab" href="/resume">Resume</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname
  
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  )
}


