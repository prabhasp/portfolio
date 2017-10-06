import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default class Bio extends React.Component {
  render() {
    return (
      <div style = {{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ 
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              maxWidth: 650, 
              marginTop: rhythm(.5), marginBottom: rhythm(.5) }} >
          <img
            src={profilePic}
            alt={`Prabhas Pokharel`}
            style={{
              margin: rhythm(1 / 2),
              width: rhythm(2),
              height: rhythm(2),
            }} />
          <div style={{ maxWidth: 600, textAlign: 'center' }}>
            <strong>Prabhas Pokharel</strong> loves creating meaningful products for people. <br/>
            He has designed products, developed software, and created collaborative efforts
            across five continents, and currently lives in the SF Bay Area.
          </div>
        </div>
      </div>
    )
  }
}
