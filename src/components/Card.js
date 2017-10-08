import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className="card" css={styles.card}>
        <Link to={this.props.link} css={styles.wholeCardLink} >
          <img src={"/" + this.props.thumbnail} css={styles.img} alt="" />
          <div className="card-text" css={styles.textBelowImage}>
            <div className="title" css={styles.title}> 
              {this.props.title} 
            </div>
            <div className="subtitle" css={styles.subtitle}> 
              {this.props.excerpt} 
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

const styles = {
  card: {
    minWidth: 250,
    flexBasis: '25vw', 
    backgroundColor: 'white', 
    boxShadow: '1px 1px 2px #888',
    marginBottom: rhythm(1), 
    padding: '5px'
  },
  wholeCardLink: {
    boxShadow: 'none', 
    padding: 0,                     
    color: 'none', 
    textDecoration: 'none'
  },
  img: {
    margin: 0
  },
  textBelowImage: {
    color: '#2d2d2d',
    paddingBottom: '5px',
  },
  title: {
    textTransform: 'uppercase',       
    fontSize: rhythm(0.5), 
    fontWeight: 600, 
    lineHeight: 1.5
  },
  subtitle: {
    fontSize: rhythm(0.5),
    lineHeight: rhythm(0.6), 
  }
};