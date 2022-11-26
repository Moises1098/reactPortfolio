import Card from "react-bootstrap/Card"
import './About.css'
const About = ()=>{
    return (
        <div class="aboutMe">
            <Card border="secondary">
                <Card.Header id="header">About Me</Card.Header>
                <Card.Body>
                  <Card.Title>Hello, there! My name is Moises Gonzalez,</Card.Title>
                  <Card.Text> I am a 20 year old first generation college student. I am Trilingual, speaking Spanish, English,
                    and French. I am a UCSD student and plan to gradute in 2024 with a major in General Biology and a minor in 
                    Cognitive Science. My future job goal is to become an Astronaut Biologist/Doctor to help my team medically and conduct 
                    research on other planets.
                  </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About