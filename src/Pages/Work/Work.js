import React from 'react'
import './Work.css'
import Card from './Card'
import { CCard, CButton, CCardBody, CCardImage,  CCardText } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import NailLounge from './assets/images/NailLounge.png'
import Github from './assets/images/github-icon.png'


export default function Work() {
  return (
    <div class="Work">
      <header>My Work</header>
      <CCard className="main-top">
      <CCardImage orientation="top" src={NailLounge} />
      <CCardBody>
        <a className="link" href='https://nailloungeoflajolla.herokuapp.com/' target="_blank" rel="noreferrer">Nail Lounge of La Jolla</a>
        <CCardText className="main-content">
        Created with Created with Javascript, HTML, GraphQL with a Node.js and Express.js server, React, and MongoDB
        </CCardText>
      </CCardBody>
      <CCardBody>
        <CButton href="https://github.com/Nail-Lounge-of-La-Jolla/nail-lounge'" target="_blank" rel="noreferrer">Go to <img className="Github" src={Github} alt="Github logo"></img> Github</CButton>
      </CCardBody>
      </CCard>
     
       <Card />
  
    </div>
  )
}

