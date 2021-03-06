import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'
import Card from './Card'

export default class Cards extends React.Component {
  render() {
    var posts = this.props.posts;
    if (!posts) { return <div/>; }
    return (
      <div className="card-container" css={styles.cardContainer}>
          {posts.map((post, index) => {
            if (post.node.path !== '/404/') {
              const metadata = get(post, 'node.frontmatter') || post.node.path;
              return (
                <Card key={index}
                      title={metadata.title || post.node.path}
                      thumbnail={metadata.img}
                      excerpt={metadata.excerpt}
                      link={metadata.path} />
              )
            }
          })}
        </div>
    )
  }
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    /* padding: '5vw', */
    /* background: '#eee', */
    '@media(max-width: 479px)': { /* Mobile and Phablet */
      paddingTop: 20,
      padding: 5,
    },
    '@media(min-width: 480px) and (max-width: 768px)': { /* tablet */
      paddingTop: 40,
      padding: 10,
    }
  }
}
    