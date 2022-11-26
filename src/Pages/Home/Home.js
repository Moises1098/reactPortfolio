import React from 'react';
import { List } from 'semantic-ui-react'

import './Home.css'

const Home = () => {

  return (

    <div>
      <div className='main'>
        <header>Hi! I'm Moises Gonzalez</header>
        <h2>Welcome to my online portfolio</h2>
      </div>

      <div class="right">
        <List>
          <List.Item>
            <List.Header>My Skills</List.Header>
            Education
          </List.Item>
          <List.Item>
            Awards
          </List.Item>
          <List.Item>
            Music/Dance
          </List.Item>
          <List.Item>
            Speaking Languages
          </List.Item>
          <List.Item>
            Coding Languages
          </List.Item>
        </List>
      </div>
    </div>


  )


}

export default Home
