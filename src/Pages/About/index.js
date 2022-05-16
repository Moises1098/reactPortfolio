import Card from "react-bootstrap/Card"
import './about.css'
const About = ()=>{
    return (
        <div class="py-3 px-5">
            <Card border="secondary">
                <Card.Header id="header">About Me</Card.Header>
                <Card.Body>
                  <Card.Title>Hello, there! My name is Moises Gonzalez,</Card.Title>
                  <Card.Text> I am a 20 year old first generation college student. I have a triple major in Biology, French and Communications. Future 
                    jobs entitle an FBI biologist or pathologist and something in Web developing. I am Trilingual, speaking Spanish, English,
                    and French. Fall 2022 I plan to transfer to UCSD to continue my biology Bachelors Degree. One fun fact would be that I 
                    train at the San Diego Circus Center, doing handstands, flexibility/contortion, and aerial lyra hoop and silks. I also have 
                    weekly voice lessons with a teacher I have had since high school. I recently started this coding boot camp at UCSD to learn how to web develop.
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About