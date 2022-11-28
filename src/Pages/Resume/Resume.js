import React from "react"
import './Resume.css'
export default function Resume() {
    return (
        <div className="Resume">
            <header> My Resume</header>
            <div className="doc">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTn6F6GAF-5tC2BhoS1Ijo5-HKFTrs76xjuCakyvj-D2G8jk2wCuzSDbGl5L3EcUfIfcak6pbRhyLci/pub?embedded=true" title="Resume"></iframe>
            </div>
        </div>
    )
}
