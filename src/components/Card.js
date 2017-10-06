import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className="card"
           style={{ width: '30vw', minWidth: 250,
                    backgroundColor: 'white', boxShadow: '1px 1px 2px #888',
                    marginRight: '.5vw', marginLeft: '.5vw',
                    marginBottom: rhythm(1), padding: rhythm(0.2) }}>
        <Link to={this.props.link}
                style={{ boxShadow: 'none', padding: 0,
                         color: 'none', textDecoration: 'none' }} >
          <img src={"/" + this.props.thumbnail} style={{margin: 0}} alt="" />
          <div className="card-text" 
               style={{ color: '#2d2d2d', textDecorationStyle: 'none' }}>
            <div className="title" 
                 style={{ fontWeight: 600, textTransform: 'uppercase',
                          fontSize: rhythm(0.5), lineHeight: 1.5 }}> {this.props.title} </div>
            <div className="subtitle"
                 style={{ lineHeight: rhythm(0.6), fontSize: rhythm(0.5) }}> {this.props.excerpt} </div>
          </div>
        </Link>
        
      </div>
    )
  }
}