import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import Work from './Pages/Work';
import Resume from './Pages/Resume';

function App() {
  const [page, setPage] = useState('about')
  const Render = () => {
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
