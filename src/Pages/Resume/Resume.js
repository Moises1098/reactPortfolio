import Card from "react-bootstrap/Card"
import './Resume.css'
const Resume = ()=>{
    return(
               <div class="py-3 px-5">
               <Card border="secondary">
                   <Card.Header id="header">My Resume</Card.Header>
                   <Card.Body>
                    
                     <iframe id="resume" src="https://docs.google.com/document/d/e/2PACX-1vTn6F6GAF-5tC2BhoS1Ijo5-HKFTrs76xjuCakyvj-D2G8jk2wCuzSDbGl5L3EcUfIfcak6pbRhyLci/pub?embedded=true"></iframe>
                   </Card.Body>
               </Card>
           </div>
    )
}
export default Resume