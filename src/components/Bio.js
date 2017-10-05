import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: rhythm(.5),
          marginBottom: rhythm(.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Prabhas Pokharel`}
          style={{
            margin: rhythm(1 / 2),
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <span>
        <strong>Prabhas Pokharel</strong> designs, builds, and leads meaningful projects.
        He has worked in five continents, and currently lives in the SF Bay Area.
        </span>
      </div>
    )
  }
}
