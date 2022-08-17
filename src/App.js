import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import Work from './Pages/Work';
import Resume from './Pages/Resume';
import Home from './Pages/Home';

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// function App() {
//   const [page, setPage] = useState('home')
//   const Render = () => {
//     switch(page){
//       case 'home':
//       return <Home />
//       case 'contact':
//       return <ContactMe />
//       case 'work':
//       return <Work />
//       case 'resume':
//       return <Resume />
//     }
//   }
//   return (
//     <div className="App">
//       <Navigation page={page} setPage={setPage}/>
//       <Render />
//     </div>
//   );
// }

export default openCity;
