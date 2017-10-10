import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

export default class Header extends React.Component {
  render() {
    return (
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
    '@media(max-width: 439px)': {
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
    alignSelf: 'flex-end',
    display: 'flex',
    paddingTop: rhythm(.5),
    paddingBottom: rhythm(1), 
  },
  navLink: {
    paddingRight: rhythm(1),
    '@media(max-width: 480px)': {
      paddingRight: rhythm(.6),
      fontSize: '0.7em'
    },
    '@media(max-width: 320px)': {
      paddingRight: rhythm(.4),
      fontSize: '0.6em',
    },
    color: `inherit`,
    fontSize: '0.8em',
    letterSpacing: '1.2',
    opacity: 0.8,
    textDecoration: 'none',
    ':hover': { textDecoration: 'underline' }
  }
}
