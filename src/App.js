import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navbar';
import About from './Pages/About/About';
import ContactMe from './Pages/ContactMe/ContactMe';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import Work from './Pages/Work/Work';


function App() {
  const [page, setPage] = useState('home')
  const Render = () => {
    // eslint-disable-next-line default-case
    switch(page){
      case 'home':
      return <Home />
      case 'about':
      return <About />     
      case 'contact':
      return <ContactMe />
      case 'work':
      return <Work />
      case 'resume':
      return <Resume />
    }
    
  }
  return (
    <div className="App">
      <Navigation page={page} setPage={setPage}/>
      <Render />
    </div>
  );
}

export default App;
