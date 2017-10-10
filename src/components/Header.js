import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-spacer" css={styles.headerSpacer}>
      
      <div className="header" css={styles.headerDiv}>
        <div css={styles.title}>
          <Link to={'/'} css={styles.headerLink}> 
            <h1 css={{...scale(.8), marginTop:0}}>
              Prabhas <span css={styles.invisibleIfSmall}>Pokharel</span>
            </h1>
          </Link>
        </div>
        <Link css={styles.navLink} to={'/'}> HOME </Link>
        <Link css={styles.navLink} to={'/all-projects/'}> PROJECTS </Link>
        <a css={styles.navLink} href={'http://prabhasp.com/wp/'}> BLOG<sup>⇗</sup></a>
      </div>
      </div>
    )
  }
}

const styles = {
  headerSpacer: {
    height: rhythm(2.5), 
  },
  headerDiv: {
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    display: 'flex', 
    flexDirection: 'row',
    paddingTop: rhythm(.5), 
    alignItems: 'baseline',
    height: rhythm(2.5), 
    backgroundColor: 'white',
    boxShadow: '1px 1px 2px #888',
    paddingRight: rhythm(.5),
    '@media(max-width: 480px)': {
      marginLeft: rhythm(.25)
    },
  },
  title: {
    marginLeft: rhythm(3),
    flexGrow: 1,
    '@media(max-width: 480px)': {
      marginLeft: rhythm(.5)
    },
  },
  invisibleIfSmall: {
    '@media(max-width: 600px)': {
      visibility: 'hidden'
    },
  },
  headerLink: { 
    textDecoration: 'none', 
    color: 'inherit'
  },
  navLinks: {
  },
  navLink: {
    paddingRight: rhythm(.5),
    paddingLeft: rhythm(.5),
    '@media(max-width: 480px)': {
      paddingRight: rhythm(.3),
      paddingLeft: rhythm(.3),
      fontSize: '0.7em'
    },
    '@media(max-width: 320px)': {
      paddingRight: rhythm(.3),
      paddingLeft: rhythm(.3),
      fontSize: '0.6em',
    },
    textAlign: 'center',
    color: `inherit`,
    fontSize: '0.8em',
    letterSpacing: '1.2',
    opacity: 0.8,
    textDecoration: 'none',
    borderBottom: '1px solid white',
    ':hover': {
      textDecoration: 'underline'
    }
  }
}
