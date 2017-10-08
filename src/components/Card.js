import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className="card" css={styles.card}>
        <Link to={this.props.link} css={styles.wholeCardLink} >
          <div className="card-content" css={styles.cardContent}>
            <img src={"/" + this.props.thumbnail} css={styles.img} alt="" />
            <div className="card-text" css={styles.cardText}>
              <div className="title" css={styles.title}> 
                {this.props.title} 
              </div>
              <div className="subtitle" css={styles.subtitle}> 
                {this.props.excerpt} 
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

const styles = {
  card: {
    flexBasis: '25vw', 
    backgroundColor: 'white', 
    boxShadow: '1px 1px 2px #888',
    marginBottom: rhythm(1),
    padding: '5px',
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      flexBasis: '100%',
      marginBottom: rhythm(.5),
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      flexDirection: 'row',
    },
    '@media(max-width: 320px)': { /* Mobile */
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  wholeCardLink: {
    boxShadow: 'none', 
    padding: 0,                     
    color: 'none', 
    textDecoration: 'none'
  },
  img: {
    margin: 0,
    minWidth: 220,
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      width: 220,
      height: 220 / 1.5,
    },
    '@media(max-width: 320px)': { /* Mobile and Phablet */
      width: '93vw',
      height: '61vw',
    },
    height: 'auto',
    overflow: 'hidden',
  },
  cardText: {
    color: '#2d2d2d',
    paddingBottom: '5px',
    '@media(max-width: 480px)': { /* Mobile and Phablet */
      paddingLeft: rhythm(.25),
      
      fontSize: '.8em'
    },
    '@media(max-width: 320px)': { /* Mobile only */
      paddingLeft: 0,
      paddingTop: rhythm(.25)
    }
  },
  title: {
    textTransform: 'uppercase',       
    fontSize: rhythm(0.5), 
    fontWeight: 600, 
    lineHeight: 1.5,
    '@media(max-width: 320px)': { /* Mobile */
      textTransform: 'none',
      lineHeight: 1.2,
    }
  },
  subtitle: {
    fontSize: rhythm(0.5),
    lineHeight: rhythm(0.6),
    textOverflow: 'ellipsis',
  }
};