import './App.css';
import NavBar from './Components/Navigation/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactMe from './Pages/ContactMe/ContactMe';
import Work from './Pages/Work/Work';
import Resume from './Pages/Resume/Resume';
import {Route, Routes } from 'react-router-dom';




function App() {
  


  return (
    <>
      <NavBar />
      <div className='Page'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
