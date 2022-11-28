import './navBar.css'
import React, { Children } from 'react'

export default function NavBar() {
  return <nav className="nav">
    <a href="/" className="nav-name">Moises Gonzalez</a>
    <ul>
      <CustomLink href="/home">Home</CustomLink>
      <CustomLink href="/about">About</CustomLink>
      <CustomLink href="/contact">Contact</CustomLink>
      <CustomLink href="/work">Work</CustomLink>
      <CustomLink href="/resume">Resume</CustomLink>
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


