import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header" style={styles.headerDiv}>
        <div style={styles.title}>
          <Link to={'/'} style={styles.headerLink}> 
            <h1 style={{...scale(.8), marginTop:0}}>
              Prabhas Pokharel
            </h1>
          </Link>
        </div>
          <Link css={styles.navLink} to={'/all-projects/'}> PROJECTS </Link>
          <Link css={styles.navLink} to={'/writing/'}> WRITING </Link>
          <Link css={styles.navLink} to={'/story/'}> STORY </Link>
      </div>
    )
  }
}

const styles = {
  headerDiv: {
    display: 'flex', 
    flexDirection: 'row',
    position: 'relative',
    paddingTop: rhythm(.5), 
    alignItems: 'baseline',
    height: rhythm(2.5),                  
    boxShadow: '1px 1px 2px #888'
  },
  title: {
    marginLeft: rhythm(3),
    flexGrow: 1,
  },
  headerLink: { 
    textDecoration: 'none', 
    color: 'inherit'
  },
  navLinks: {
    alignSelf: 'flex-end',
    display: 'flex',
    paddingTop: rhythm(.5),
    paddingBottom: rhythm(1), 
  },
  navLink: {
    padding: rhythm(.5),
    color: `inherit`,
    fontSize: '0.8em',
    letterSpacing: '1.2',
    opacity: 0.8,
    textDecoration: 'none',
    ':hover': { textDecoration: 'underline' }
  }
}
