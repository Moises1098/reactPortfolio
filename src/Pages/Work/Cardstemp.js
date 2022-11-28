import React from "react";
import { CCard, CButton, CCardBody, CCardImage, CCardText } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import './Work.css'
import Github from './assets/images/github-icon.png'


const Cards = ({ img, title, content, sitelink, githublink }) => {


  return (

    <CCard className="card-second">
      <CCardImage orientation="top" src={img} />
      <CCardBody>
        <a className="link" href={sitelink} target="_blank" rel="noreferrer">{title}</a>
        <CCardText className="content">
          {content}
        </CCardText>
      </CCardBody>
      <CCardBody>
        <CButton href={githublink} target="_blank" rel="noreferrer">Go to <img className="Github" src={Github} alt="Github logo"></img> Github</CButton>
      </CCardBody>
    </CCard>

  )

};

export default Cards;