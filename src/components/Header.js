import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
  render() {
    var link = <Link to={'/'}
      style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit'}}>
        prabhasp
      </Link>;
    var hEl = (this.props.isHomePage ?
               <h1 style={{...scale(.8), marginTop:0}}> {link} </h1>:
               <h3 style={{...scale(.8), marginTop:0}}> {link} </h3>);
    return (
      <div className="header"
           style={{display: 'flex', justifyContent: 'center', boxShadow: '1px 1px 2px #888',
                   padding: rhythm(.5), height: rhythm(2.5), }}>
          {hEl}
      </div>
    )
  }
}
