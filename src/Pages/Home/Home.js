import React from 'react';
import List  from './List'
import './Home.css'


const Home = () => {
  

  return (

    <div>
      <div className='main'>
        <header>Hi! I'm Moises Gonzalez</header>
        <h2>Welcome to my online portfolio</h2>
      </div>

      <div class="right">
       <List />
      </div>
    </div>


  )


}

export default Home
